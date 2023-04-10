<template>
  <div class="container">
    <div class="back-wrapper">
      <button class="back" @click="handleGoBack">Voltar</button>
    </div>
    <h2 class="step-title">Clique no mapa para inserir pontos intermediários:</h2>

    <ImageCanvas :image="image" :nodes="nodes" :onlySelected="true" :onlyEditing="true" :edges="edges"
      @click="handleIntermediateNode($event)" ref="imageCanvas" />

    <div class="undo-wrapper">
      <button class="undo" @click="handleUndoIntermediate">Desfazer ponto</button>
    </div>

    <div>
      <button class="send mr10" @click="$emit('confirmIntermediate')">Confirmar e encerrar</button>
      <button class="send" @click="$emit('continueIntermediate')">Confirmar e continuar</button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import ImageCanvas from './ImageCanvas.vue';
import { NodeState, NodeType, type Edge, type Node } from '@/types';

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
    image: String
  },
  emits: {
    goBack: () => true,
    createNode: (node: Node) => true,
    removeNode: () => true,
    confirmIntermediate: () => true,
    continueIntermediate: () => true,
  },
  data() {
    return {
      createdCount: 0
    };
  },
  computed: {
    imageCanvas() {
      return this.$refs.imageCanvas as typeof ImageCanvas;
    }
  },

  methods: {
    handleIntermediateNode(event: MouseEvent) {
      this.createdCount++;
      this.$emit('createNode', { x: event.offsetX / (event.target as HTMLImageElement).width, y: event.offsetY / (event.target as HTMLImageElement).height, type: NodeType.point, state: NodeState.Selected });
      this.$nextTick(() => {
        this.imageCanvas.draw();
      });
    },
    handleUndoIntermediate() {
      if (this.createdCount > 0) {
        this.createdCount--;
        this.$emit('removeNode');
        this.$nextTick(() => {
          this.imageCanvas.draw();
        });
      }
    },
    handleGoBack() {
      while (this.createdCount > 0) {
        this.createdCount--;
        this.$emit('removeNode');
      }
      this.$nextTick(() => {
        this.imageCanvas.draw();
      });

      this.$emit('goBack');
    }
  }
}

</script>

<style></style>