<template>
  <div class="container">
    <div class="back-wrapper">
      <button class="back" @click="$emit('goBack')">Voltar</button>
    </div>
    <h2 class="step-title">Selecione dois pontos para iniciar um caminho:</h2>

    <ImageCanvas :image="image" :nodes="nodes" :edges="edges" :only-real="true" @mousemove="handleFindNode($event)"
      @click="handleSelectNode($event)" ref="imageCanvas" />

    <div>
      <button class="send mr10" @click="$emit('confirmSelection')">Confirmar</button>
      <button class="send" @click="$emit('skipSelection')">Pular</button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import ImageCanvas from './ImageCanvas.vue';
import { HOVER_OFFSET, RADIUS_POINTS, type Edge, type Node } from '@/types';
import { NodeState } from '@/types';

export default {
  components: { ImageCanvas },
  props: {
    nodes: {
      type: Array as PropType<Node[]>,
      default: () => []
    },
    edges: {
      type: Array as PropType<Edge[]>,
      default: () => []
    },
    countSelected: {
      type: Number,
      default: () => 0,
    },
    image: String
  },
  emits: {
    goBack: () => true,
    confirmSelection: () => true,
    skipSelection: () => true,
    setNodeState: (index: number, state: NodeState) => true
  },
  data() {
    return {
    };
  },
  computed: {
    imageCanvas() {
      return this.$refs.imageCanvas as typeof ImageCanvas;
    }
  },

  methods: {
    handleFindNode(event: MouseEvent) {
      this.nodes.some((node, i) => {
        const isHovered = this.isOverNode(node, event.offsetX, event.offsetY);
        if (isHovered && node.state === NodeState.Normal) {
          this.$emit('setNodeState', i, NodeState.Hovered);
        } else if (!isHovered && node.state === NodeState.Hovered) {
          this.$emit('setNodeState', i, NodeState.Normal);
        }

        return isHovered;
      }
      );
      this.imageCanvas.draw();
    },
    handleSelectNode(event: MouseEvent) {
      this.nodes.some((node, i) => {
        const isHovered = this.isOverNode(node, event.offsetX, event.offsetY);
        if (isHovered) {
          if (node.state !== NodeState.Selected) {
            if (this.countSelected < 2) {
              this.$emit('setNodeState', i, NodeState.Selected);
            }
          } else {
            this.$emit('setNodeState', i, NodeState.Normal);
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