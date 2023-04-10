<template>
  <div class="container">
    <h1 class="see-places-title">{{ place.name }}</h1>
    <h2 v-if="place.maps.length > 0" class="see-places-subtitle">{{ place.maps[currentMap].name }}</h2>
    <ImageCanvas v-if="place.maps.length > 0" :image="place.maps[currentMap].image" :nodes="place.maps[currentMap].nodes"
      :only-real="true" :edges="place.maps[currentMap].edges" @mousemove="handleFindNode" @click="handleSelectNode"
      ref="image" />
  </div>
</template>

<script lang="ts">
import { HOVER_OFFSET, NodeState, RADIUS_POINTS, type Map, type Node, type Place } from '@/types';
import ImageCanvas from '@/components/NewComponents/ImageCanvas.vue';

export default {
  components: { ImageCanvas },
  data() {
    return {
      place: { name: '', maps: [] as Map[] } as Place,
      currentMap: 0,
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    const res = localStorage.getItem('places');
    this.place = res ? JSON.parse(res)[id] : { name: '', maps: [] };
  },
  computed: {
    imageCanvas() {
      return this.$refs.image as typeof ImageCanvas;
    }
  },
  watch: {
    currentMap(newValue, oldValue) {
      this.$nextTick(() => {
        this.imageCanvas.draw();
      });
    }
  },
  methods: {
    handleFindNode(event: MouseEvent) {
      this.place.maps[this.currentMap].nodes.some((node: Node, i) => {
        const isHovered = this.isOverNode(node, i, event.offsetX, event.offsetY).found;
        if (isHovered && node.state === NodeState.Normal) {
          node.state = NodeState.Hovered;
        } else if (!isHovered && node.state === NodeState.Hovered) {
          node.state = NodeState.Normal;
        }

        return isHovered;
      }
      );
      this.imageCanvas.draw();
    },
    handleSelectNode(event: MouseEvent) {
      this.place.maps[this.currentMap].nodes.some((node: Node, i) => {
        const isHovered = this.isOverNode(node, i, event.offsetX, event.offsetY);
        if (isHovered.found) {
          this.currentMap = isHovered.destiny;
        }

        return isHovered.found;
      });
    },
    isOverNode(node: Node, index: number, x: number, y: number): { found: boolean, destiny: number; } {
      let pathMap = -1;
      const hasPathToOtherMap = this.place.maps[this.currentMap].edges.some(edge => {
        const found = edge.end.map !== this.currentMap && edge.start.node === index;
        if (found) {
          pathMap = edge.end.map;
        }
        return found;
      });
      if (!hasPathToOtherMap) {
        return { found: false, destiny: pathMap };
      }
      const coordinateNodeX = node.x * (this.imageCanvas.$refs.canvas as HTMLCanvasElement).width;
      const coordinateNodeY = node.y * (this.imageCanvas.$refs.canvas as HTMLCanvasElement).height;
      const dist = Math.sqrt(Math.pow(x - coordinateNodeX, 2) + Math.pow(y - coordinateNodeY, 2));
      return { found: dist < (RADIUS_POINTS + HOVER_OFFSET), destiny: pathMap };
    }
  }
};
</script>

<style>
.see-places-title {
  text-align: center;
  font-size: 24px;
}
</style>
