<template>
  <q-page>
    <div class="map-box" id="map"></div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import mapboxgl from 'mapbox-gl'

const init = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNuaW5nIiwiYSI6ImNrZzk3dmNveTA2cGUycXAyNXJ3bWNsOHMifQ._4oFj3iqj5yWWvbuONDYnw';
  new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [104.07, 30.67],
    zoom: 2,
  })
}

onMounted(() => {
  init();
})
</script>

<style scoped lang="scss">
.map-box {
  width: 100%;
  height: calc(100vh - 165.85px);
  overflow: hidden;
}
</style>
