<template>
  <div class="image-container">
    <canvas class="imageCanvas" :width="imageWidth" :height="imageHeight" ref="canvas"></canvas>
    <img :src="image" ref="img" @click="$emit('click', $event)" @mousemove="$emit('mousemove', $event)" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { RADIUS_POINTS, type Node, NodeState, type Edge, NodeType } from '@/types';

export default {
  data() {
    return {
      imageWidth: 0,
      imageHeight: 0,
    };
  },
  mounted() {
    const resizeObserver = new ResizeObserver((item) => {
      if (!this.$refs.img) {
        return;
      }

      this.imageWidth = (this.$refs.img as HTMLImageElement).clientWidth;
      this.imageHeight = (this.$refs.img as HTMLImageElement).clientHeight;

      this.$nextTick(() => {
        this.draw();
      });
    });

    resizeObserver.observe(this.$refs.img as HTMLImageElement);
    this.draw();
  },
  emits: {
    click: (event: MouseEvent) => true,
    mousemove: (event: MouseEvent) => true,
  },
  props: {
    nodes: {
      type: Array as PropType<Node[]>,
      default: () => []
    },
    edges: {
      type: Array as PropType<Edge[]>,
      default: () => []
    },
    onlySelected: Boolean,
    onlyEditing: Boolean,
    onlyReal: Boolean,
    image: String
  },
  computed: {
    nodesFiltered() {
      if (!this.onlySelected && !this.onlyReal) {
        return this.nodes;
      }
      return this.nodes.filter(node => {
        return (!this.onlySelected || node.state === NodeState.Selected) && (!this.onlyReal || node.type !== NodeType.point);
      });
    },

    edgesFiltered() {
      if (!this.onlyEditing) {
        return this.edges;
      }

      return this.edges.filter(edge => edge.editing);
    },
  },
  methods: {
    draw() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawNodes(ctx);
      this.drawEdges(ctx);
    },
    drawNodes(ctx: CanvasRenderingContext2D) {
      this.nodesFiltered.forEach(({ x, y, state }) => {
        switch (state) {
          case NodeState.Hovered:
            ctx.fillStyle = '#888888';
            break;
          case NodeState.Selected:
            ctx.fillStyle = '#0000ff';
            break;
          default:
            ctx.fillStyle = '#000000';
        }
        ctx.beginPath();
        ctx.arc(this.toCoordinateX(x), this.toCoordinateY(y), RADIUS_POINTS, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      });
    },
    drawEdges(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = '#000000';
      this.edgesFiltered.forEach(({ start, end }) => {
        if (start.map !== end.map) {
          return;
        }
        ctx.beginPath();
        ctx.moveTo(this.toCoordinateX(this.nodes[start.node].x), this.toCoordinateY(this.nodes[start.node].y));
        ctx.lineTo(this.toCoordinateX(this.nodes[end.node].x), this.toCoordinateY(this.nodes[end.node].y));
        ctx.stroke();
      });
    },

    toCoordinateX(x: number) {
      return x * (this.$refs.canvas as HTMLCanvasElement).width;
    },

    toCoordinateY(y: number) {
      return y * (this.$refs.canvas as HTMLCanvasElement).height;
    }
  }
}

</script>

<style>
.image-container {
  position: relative;
}

.image-container img {
  max-height: 300px;
}

.imageCanvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>