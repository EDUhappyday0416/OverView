<template>
  <v-select
    @update:modelValue="onValueChange"
    label="選擇地點"
    :items="data"
    item-title="name"
    item-value="coordinates"
    multiple
    persistent-hint
  ></v-select>
  <div id="map"></div>
</template>

<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'
import { useForestData } from '../stores/forest'
import { useQuasar } from 'quasar'
const forest = useForestData()
const $q = useQuasar()
const data = ref([])
import 'leaflet-routing-machine'
let map
// https://codepen.io/vgrem/pen/EdRRwr?editors=1111

onMounted(() => {
  forest
    .getQueryMountainLocation()
    .then((res) => {
      if (res.status) {
        data.value = res.data
      }
    })
    .catch((err) => {
      console.log(err)
    })
  map = L.map('map').setView([51.505, -0.09], 16)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '© OpenStreetMap'
  }).addTo(map)

  // L.Routing.control({
  //   waypoints: [
  //     L.latLng(23.470002,120.955917),
  //     L.latLng(24.386017,121.330633)
  //   ],
  //   routeWhileDragging: true
  // }).addTo(map);
  const markerPosition = [23.465766, 120.448608]
  const marker = L.marker(markerPosition, {
    draggable: true
  }).addTo(map)

  map.setView(markerPosition, 13)

  map.invalidateSize()

  $q.loading.hide()
})

const ORS_URL = 'https://api.openrouteservice.org/v2/directions/foot-hiking';
const API_KEY = '5b3ce3597851110001cf62488afe79f82c944427add4f46903b9087e'; // 更改為你的API金鑰

let currentMarkers = []
let routingControl;
async function onValueChange(coordinatesString) {
  console.log(coordinatesString);

  currentMarkers.forEach((marker) => marker.remove());
  currentMarkers = [];

  // 如果存在舊的路由控制，從地圖中移除它
  if (routingControl) {
    map.removeControl(routingControl);
  }

  // 將字符串坐標轉換為L.latLng對象的數組
  const waypoints = coordinatesString.map(coordStr => {
    const [lat, lng] = coordStr.split(',').map(Number);
    return L.latLng(lat, lng);
  });

  // 使用轉換後的坐標建立新的路由控制
  routingControl = L.Routing.control({
    waypoints: waypoints,
    // routeWhileDragging: true
  }).addTo(map);
}

async function getRoute(linePoints) {
  const response = await fetch(ORS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      coordinates: linePoints
    })
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}
</script>

<style scoped>
#map {
  width: 80%;
  margin: 0 auto;
  height: 80vh;
}

.leaflet-touch.leaflet-bar {
  width: 10%;   /* 或使用具體的像素值，例如 width: 300px; */
  height: 80%;  /* 或使用具體的像素值 */
}

</style>
