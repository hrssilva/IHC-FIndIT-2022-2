<template>
  <div class="home-container">
    <h1 class="home-title">FindIT</h1>
    <a href="/new" class="home-link">Novo mapa</a>
    <a href="/see" class="home-link">Ver mapas</a>
  </div>
</template>


<style>
.home-title {
  text-align: center;
  margin-bottom: 64px;
  font-size: 48px;
}

.home-link {
  display: block;
  text-align: center;
  width: 300px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 40px;
  padding: 24px;
  cursor: pointer;
}

.home-link:hover {
  border-color: #333;
}
</style>
