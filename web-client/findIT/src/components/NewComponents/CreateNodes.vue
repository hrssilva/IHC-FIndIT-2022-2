<template>
  <div class="container">
    <div class="back-wrapper">
      <button class="back" @click="$emit('goBack')">Voltar</button>
    </div>
    <h2 class="step-title">Clique no mapa para inserir um ponto no local:</h2>
    <h3 v-if="firstPointAsEntry">Primeiro ponto será a entrada do mapa</h3>

    <div class="image-input-wrapper">
      <div class="image-wrapper">
        <ImageCanvas @click="handleCreateNode($event)" :image="image" :nodes="nodes" :only-real="true"
          ref="imageCanvas" />
        <div class="undo-wrapper">
          <button class="undo" @click="handleUndoNode">Desfazer ponto</button>
        </div>
      </div>

      <div class="input-wrapper">
        <div class="input-create-section">
          <label for="nodeName">*Nome do ponto:</label>
          <input type="text" name="nodeName" ref="nodeName" />
        </div>
        <div class="input-create-section">
          <label for="nodeDescription">Descrição do ponto:</label>
          <textarea name="nodeDescription" ref="nodeDescription"></textarea>
        </div>
        <div class="input-create-section">
          <label for="nodeType">*Tipo do ponto:</label>
          <select name="nodeType" ref="nodeType">
            <option :value="point">Escolha um item</option>
            <option :value="house">Casa</option>
            <option :value="building">Prédio</option>
            <option :value="room">Quarto</option>
            <option :value="stairs">Escadas</option>
            <option :value="elevator">Elevador</option>
            <option :value="door">Porta</option>
            <option :value="parking">Estacionamento</option>
            <option :value="bus">Ponto de ônibus</option>
            <option :value="taxi">Ponto de taxi</option>
            <option :value="store">Loja</option>
            <option :value="bank">Banco</option>
            <option :value="restaurant">Restaurante</option>
            <option :value="market">Mercado</option>
            <option :value="pharmacy">Farmácia</option>
            <option :value="hospital">Hospital</option>
            <option :value="school">Escola</option>
            <option :value="park">Parque</option>
            <option :value="gas">Posto</option>
            <option :value="tech">Tecnologia</option>
            <option :value="library">Biblioteca</option>
            <option :value="help">Ajuda</option>
          </select>
        </div>
      </div>
    </div>

    <button class="send" @click="$emit('confirmNodes')">Avançar</button>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { NodeState, NodeType, type Edge, type Node } from '@/types';
import ImageCanvas from './ImageCanvas.vue';

export default {
  components: { ImageCanvas },
  emits: {
    goBack: () => true,
    createNode: (node: Node) => true,
    removeNode: () => true,
    confirmNodes: () => true
  },
  props: {
    nodes: {
      type: Array as PropType<Node[]>,
      default: () => []
    },
    firstPointAsEntry: {
      type: Boolean,
      default: () => false,
    },
    image: String
  },
  data() {
    return {
      ...NodeType
    };
  },
  computed: {
    imageCanvas() {
      return this.$refs.imageCanvas as typeof ImageCanvas;
    }
  },
  methods: {
    handleCreateNode(event: MouseEvent) {
      const nodeNameElement = this.$refs.nodeName as HTMLInputElement;
      const nodeDescriptionElement = this.$refs.nodeDescription as HTMLTextAreaElement;
      const nodeTypeElement = this.$refs.nodeType as HTMLInputElement;
      const nodeName = nodeNameElement.value;
      const nodeDescription = nodeDescriptionElement.value;
      const nodeType = Number(nodeTypeElement.value);

      if (nodeName === '' || nodeType === this.point) {
        return;
      }

      const nodeX = event.offsetX / (event.target as HTMLImageElement).width;
      const nodeY = event.offsetY / (event.target as HTMLImageElement).height;

      this.$emit('createNode', { x: nodeX, y: nodeY, name: nodeName, description: nodeDescription, type: nodeType, state: NodeState.Normal });
      nodeNameElement.value = '';
      nodeDescriptionElement.value = '';
      nodeTypeElement.value = `${NodeType.point}`;
      this.imageCanvas.draw();
    },
    handleUndoNode() {
      this.$emit('removeNode');
      this.imageCanvas.draw();
    }
  }
};
</script>

<style>
.image-input-wrapper {
  display: flex;
}

.input-wrapper {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
}

.input-create-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
