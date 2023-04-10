<template>
  <div class="container">
    <div class="input-section">
      <label for="mapName">Nome do mapa:</label>
      <input type="text" id="mapName" @change="handleNameChange($event)" />
    </div>
    <div class="input-section">
      <label for="mapSource" class="input-file">Selecione uma imagem</label>
      <input type="file" name="mapSource" id="mapSource" accept="image/png, image/jpeg"
        @change="handleImageChange($event)">
    </div>
    <label class="initial-info-image-label">{{ imageName || 'Nenhuma imagem selecionada' }}</label>
    <button class="send" @click="$emit('confirmInitialInfo')">Avançar</button>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      imageName: ''
    };
  },

  emits: {
    setImage: (newImage: string) => true,
    setName: (newName: string) => true,
    confirmInitialInfo: () => true
  },

  methods: {
    handleImageChange(event: any) {
      const fr = new FileReader();
      fr.readAsDataURL(event.target.files[0]);
      fr.onload = () => {
        this.imageName = event.target.files[0].name;
        this.$emit('setImage', String(fr.result));
      };
    },

    handleNameChange(event: Event) {
      this.$emit('setName', (event.target as HTMLInputElement).value);
    }
  }

}

</script>
<style>
.initial-info-image-label {
  height: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>