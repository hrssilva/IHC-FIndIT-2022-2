<template>
  <div class="new-place-container">
    <h1 class="new-place-title">Novo mapa</h1>
    <InitialInfo v-if="step === InitialInfoStep" @set-image="(newImage) => { image = newImage; }"
      @set-name="(newName) => { name = newName; }" @confirm-initial-info="handleInitialInfoConfirmed" />
    <CreateNodes v-else-if="step === CreateNodesStep" :image="image" :nodes="nodes"
      :first-point-as-entry="sourceMap >= 0 && sourceNode >= 0" @go-back="handleGoBack" @create-node="handleCreateNode"
      @remove-node="handleRemoveNode" @confirm-nodes="handleNodesCreated" ref="createNodes" />
    <SelectNodes v-else-if="step === SelectNodesStep" :image="image" :nodes="nodes" :edges="edges"
      :count-selected="selectedIndexes.length" @go-back="handleGoBack" @set-node-state="handleSetNodeState"
      @confirm-selection="handleNodesSelected" @skip-selection="handleSelectionSkipped" />
    <IntermediateNodes v-else-if="step === IntermediateNodesStep" :image="image" :nodes="nodes" :edges="edges"
      @go-back="handleGoBack" @create-node="handleCreateNode" @remove-node="handleRemoveNode"
      @confirm-intermediate="handleIntermediateConfirmed" @continue-intermediate="handleContinueCreating" />
    <ChooseQRCodes v-else-if="step === ChooseQRCodesStep" :image="image" :nodes="nodes" :edges="edges"
      @go-back="handleGoBack" @set-node-state="handleSetNodeState" @confirm-map="handleMapConfirmed"
      @start-layer="handleLayerStarted" />
    <SelectSource v-else-if="step === SelectSourceStep" :maps="maps" @set-node-state="handleSetNodeState"
      @confirm-source="handleConfirmSource" />
  </div>
</template>

<script lang="ts">
import CreateNodes from '@/components/NewComponents/CreateNodes.vue';
import InitialInfo from '@/components/NewComponents/InitialInfo.vue';
import SelectNodes from '@/components/NewComponents/SelectNodes.vue';
import IntermediateNodes from '@/components/NewComponents/IntermediateNodes.vue';
import ChooseQRCodes from '@/components/NewComponents/ChooseQRCodes.vue';
import { NewMapSteps, NodeState, type Edge, type Node, NodeType, type Place, type Map } from '@/types';
import SelectSource from '@/components/NewComponents/SelectSource.vue';
import router from '@/router';

export default {
  data() {
    return {
      ...NewMapSteps,
      name: "",
      image: "",
      step: NewMapSteps.InitialInfoStep,
      history: [0],
      nodes: [] as Node[],
      edges: [] as Edge[],
      selectedIndexes: [] as number[],
      maps: [] as Map[],
      sourceMap: -1,
      sourceNode: -1
    };
  },
  methods: {
    handleGoBack() {
      this.history.pop();
      this.step = this.history[this.history.length - 1];

      this.edges = this.edges.filter(edge => !edge.editing);
      this.unselectNodes();
    },

    handleInitialInfoConfirmed() {
      if (this.image !== '' && this.name.length > 0) {
        this.step = this.CreateNodesStep;
        this.history.push(this.step);
      }
    },

    handleNodesCreated() {
      if (this.nodes.length > 0) {
        this.step = this.SelectNodesStep;
        this.history.push(this.step);
      }
    },

    handleNodesSelected() {
      if (this.selectedIndexes.length === 2) {
        this.makeEdges();
        this.step = this.IntermediateNodesStep;
        this.history.push(this.step);
      }
    },

    handleSelectionSkipped() {
      this.unselectNodes();

      this.step = this.ChooseQRCodesStep;
      this.history.push(this.step);
    },

    handleIntermediateConfirmed() {
      this.edges = this.edges.map(edge => {
        return { ...edge, editing: false };
      });

      this.unselectNodes();

      this.step = this.ChooseQRCodesStep;
      this.history.pop();
      this.history.push(this.step);
    },

    handleContinueCreating() {
      this.edges = this.edges.map(edge => {
        return { ...edge, editing: false };
      });

      this.unselectNodes();

      this.history.pop();
      this.step = this.SelectNodesStep;

    },

    handleMapConfirmed() {
      if (this.sourceMap >= 0 && this.sourceNode >= 0) {
        this.maps[this.sourceMap].edges.push({
          start: {
            map: this.sourceMap,
            node: this.sourceNode
          },
          end: {
            map: this.maps.length,
            node: 0
          },
          editing: false
        });
        this.edges.push({
          end: {
            map: this.sourceMap,
            node: this.sourceNode
          },
          start: {
            map: this.maps.length,
            node: 0
          },
          editing: false
        });
      }

      this.selectedIndexes.forEach(index => {
        this.nodes[index].qrcode = true;
      });

      this.unselectNodes();

      //Adiciona a camada atual na lista de camadas
      this.maps.push({ name: this.name, image: this.image, nodes: [...this.nodes], edges: [...this.edges], initial: this.maps.length === 0 });

      const newPlace: Place = { name: this.maps[0].name, maps: this.maps };
      const res = localStorage.getItem('places');
      const allMaps: Place[] = res ? JSON.parse(res) : [];
      allMaps.push(newPlace);
      localStorage.setItem('places', JSON.stringify(allMaps));

      alert('Mapa criado com sucesso!');
      router.push('/');
    },

    handleLayerStarted() {
      if (this.sourceMap >= 0 && this.sourceNode >= 0) {
        this.maps[this.sourceMap].edges.push({
          start: {
            map: this.sourceMap,
            node: this.sourceNode
          },
          end: {
            map: this.maps.length,
            node: 0
          },
          editing: false
        });
        this.edges.push({
          end: {
            map: this.sourceMap,
            node: this.sourceNode
          },
          start: {
            map: this.maps.length,
            node: 0
          },
          editing: false
        });
      }

      this.selectedIndexes.forEach(index => {
        this.nodes[index].qrcode = true;
      });

      this.unselectNodes();

      //Adiciona a camada atual na lista de camadas
      this.maps.push({ name: this.name, image: this.image, nodes: [...this.nodes], edges: [...this.edges], initial: this.maps.length === 0 });

      //Zera campos
      this.image = '';
      this.name = '';
      this.nodes = [];
      this.edges = [];
      this.sourceMap = -1;
      this.sourceNode = -1;

      this.step = this.SelectSourceStep;
      this.history = [this.step];
    },

    handleConfirmSource(map: number, node: number) {
      this.sourceMap = map;
      this.sourceNode = node;

      this.step = this.InitialInfoStep;
    },

    handleSetNodeState(index: number, state: NodeState) {
      if (state === NodeState.Selected) {
        this.selectedIndexes.push(index);
      } else if (this.nodes[index].state === NodeState.Selected) {
        this.selectedIndexes.splice(this.selectedIndexes.indexOf(index), 1);
      }
      this.nodes[index].state = state;
    },

    handleCreateNode(newNode: Node) {
      if (newNode.type === NodeType.point) {
        this.selectedIndexes.push(this.nodes.length);
        const aux = this.selectedIndexes[this.selectedIndexes.length - 2];
        this.selectedIndexes[this.selectedIndexes.length - 2] = this.selectedIndexes[this.selectedIndexes.length - 1];
        this.selectedIndexes[this.selectedIndexes.length - 1] = aux;
        this.makeEdges();
      }
      this.nodes.push(newNode);
    },

    handleRemoveNode() {
      const removed = this.nodes.pop();
      if (removed?.type === NodeType.point) {
        this.selectedIndexes.splice(-2, 1);
        this.makeEdges();
      }
    },

    makeEdges() {
      this.edges = this.edges.filter(edge => !edge.editing);
      for (let i = 0; i < this.selectedIndexes.length - 1; i++) {
        this.edges.push({ start: { map: this.maps.length, node: this.selectedIndexes[i] }, end: { map: this.maps.length, node: this.selectedIndexes[i + 1] }, editing: true });
      }
    },

    unselectNodes() {
      this.nodes = this.nodes.map(node => {
        return { ...node, state: NodeState.Normal };
      });
      this.selectedIndexes = [];
    }
  },
  components: { InitialInfo, CreateNodes, SelectNodes, IntermediateNodes, ChooseQRCodes, SelectSource }
};
</script>

<style>
.new-place-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-place-title {
  font-size: 32px;
}

.input-section {
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.send {
  margin-top: 20px;
  color: #333;
  font-weight: 500;
  border: 3px solid #333;
  border-radius: 5px;
  padding: 8px;
  transition: 0.5s;
  cursor: pointer;
}

.mr10 {
  margin-right: 10px;
}

.send:hover {
  background-color: #333;
  color: #fff
}

.back-wrapper {
  width: 100%;
}

.back {
  margin-bottom: 20px;
  color: #333;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 4px;
  transition: 0.5s;
  cursor: pointer;
}

.back:hover {
  background-color: #333;
  color: #fff
}

input,
textarea {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  padding: 3px;
  width: 150px;
  font-size: 14px;
  transition: border-color 0.5s;
}

input:focus,
textarea:focus {
  border-bottom-color: #2B6AFF;
}

textarea {
  background-color: #ccc;
  resize: vertical;
  max-height: 150px;
}

input[type="file"] {
  display: none;
}

.input-file {
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}

.input-file:hover {
  background-color: #2B6AFF;
}

.step-title {
  font-size: 20px;
  margin-bottom: 20px;
}

.undo-wrapper {
  width: 100%;
}

.undo {
  margin-top: 8px;
  margin-bottom: 4px;
  color: #333;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 4px;
  transition: 0.5s;
  cursor: pointer;
}

.undo:hover {
  background-color: #333;
  color: #fff
}

.mapbtn {
  margin-top: 8px;
  margin-bottom: 4px;
  color: #333;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #333;
  border-radius: 5px;
  padding: 4px;
  transition: 0.5s;
  cursor: pointer;
}

.mapbtn:hover {
  background-color: #333;
  color: #fff
}
</style>
