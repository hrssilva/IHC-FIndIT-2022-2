<template>
  <div class="container">
    <h2 class="step-title">Selecione um ponto de origem para o novo mapa:</h2>

    <ImageCanvas :image="localMaps[currentMap].image" :nodes="localMaps[currentMap].nodes"
      :edges="localMaps[currentMap].edges" :only-real="true" @mousemove="handleFindNode($event)"
      @click="handleSelectNode($event)" ref="imageCanvas" />

    <div>
      <button v-for="(map, index) in localMaps" class="mapbtn" :key="index" @click="handleSelectMap(index)">{{ map.name
      }}</button>
    </div>
    <button class="send" @click="handleConfirmSource">Confirmar</button>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import ImageCanvas from './ImageCanvas.vue';
import { HOVER_OFFSET, RADIUS_POINTS, type Node, type Map } from '@/types';
import { NodeState } from '@/types';

export default {
  components: { ImageCanvas },
  props: {
    maps: {
      type: Array as PropType<Map[]>,
      default: []
    },
  },
  emits: {
    setMap: (index: number) => true,
    setNodeState: (index: number, state: NodeState) => true,
    confirmSource: (map: number, node: number) => true
  },
  data() {
    return {
      currentMap: 0,
      currentPoint: -1,
      localMaps: JSON.parse(JSON.stringify(this.maps)) as Map[]
    };
  },
  computed: {
    imageCanvas() {
      return this.$refs.imageCanvas as typeof ImageCanvas;
    }
  },

  methods: {
    handleSelectMap(index: number) {
      this.localMaps[this.currentMap].nodes = this.localMaps[this.currentMap].nodes.map(node => {
        return { ...node, state: NodeState.Normal };
      });
      this.currentMap = index;
      this.currentPoint = -1;
      this.$emit('setMap', index);
      this.$nextTick(() => {
        this.imageCanvas.draw();
      });
    },

    handleConfirmSource() {
      if (this.currentPoint >= 0) {
        this.$emit('confirmSource', this.currentMap, this.currentPoint);
      }
    },

    handleFindNode(event: MouseEvent) {
      this.localMaps[this.currentMap].nodes.some((node, i) => {
        const isHovered = this.isOverNode(node, event.offsetX, event.offsetY);
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
      this.localMaps[this.currentMap].nodes.some((node, i) => {
        const isHovered = this.isOverNode(node, event.offsetX, event.offsetY);
        if (isHovered) {
          if (node.state !== NodeState.Selected) {
            if (this.currentPoint >= 0) {
              this.localMaps[this.currentMap].nodes[this.currentPoint].state = NodeState.Normal;
            }
            node.state = NodeState.Selected;
            this.currentPoint = i;
          } else {
            node.state = NodeState.Normal;
            this.currentPoint = -1;
          }
        }

        return isHovered;
      });
      this.imageCanvas.draw();
    },
    isOverNode(node: Node, x: number, y: number) {
      const coordinateNodeX = node.x * (this.imageCanvas.$refs.canvas as HTMLCanvasElement).width;
      const coordinateNodeY = node.y * (this.imageCanvas.$refs.canvas as HTMLCanvasElement).height;
      const dist = Math.sqrt(Math.pow(x - coordinateNodeX, 2) + Math.pow(y - coordinateNodeY, 2));
      return dist < (RADIUS_POINTS + HOVER_OFFSET);
    }
  }
}

</script>

<style></style>