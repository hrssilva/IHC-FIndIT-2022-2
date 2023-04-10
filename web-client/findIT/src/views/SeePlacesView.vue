<template>
  <h1 class="see-places-title">Mapas</h1>
  <div class="container" v-if="places.length === 0">
    <span>Nenhum mapa criado!</span>
  </div>
  <div v-else>
    <a class="container home-link" v-for="(place, index) in places" :href="`see/${index}`" :key="index">{{ place.name
    }}</a>
  </div>
</template>

<script lang="ts">
import type { Place } from '@/types';

export default {
  data() {
    return {
      places: [] as Place[]
    };
  },
  mounted() {
    const res = localStorage.getItem('places');
    this.places = res ? JSON.parse(res) : [];
  }
};
</script>

<style>
.see-places-title {
  text-align: center;
  font-size: 24px;
}
</style>
