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

let currentMarkers = []
let routingControl
async function onValueChange(coordinatesString) {
  const API_KEY = '5b3ce3597851110001cf62488afe79f82c944427add4f46903b9087e'
  const baseURL = 'https://api.openrouteservice.org/v2/directions/foot-hiking'
  console.log(coordinatesString.length >= 3)

  if (coordinatesString.length !== 2) {
    if (coordinatesString.length > 2) {
      // 當選擇超過2個座標時
      $q.notify({
        color: 'red',
        message: '請勿選擇超過兩個地點', // 我更改了這裡的消息內容，因為您希望限制只能選擇2個座標
        icon: 'check'
      })
      return
    }
    return false
  }

  // 如果選擇的座標是2，執行下面的操作
  const swapCoordinates = (coordStr) => {
    const [lat, lng] = coordStr.split(',')
    return `${lng},${lat}` // 交換經緯度的位置
  }
  const start = swapCoordinates(coordinatesString[0])
  const end = swapCoordinates(coordinatesString[1])
  const url = `${baseURL}?api_key=${API_KEY}&start=${start}&end=${end}`

  currentMarkers.forEach((marker) => marker.remove())
  currentMarkers = []

  if (routingControl) {
    map.removeControl(routingControl)
  }

  const routeData = await getRoute(url)

  const waypoints = coordinatesString.map((coordStr) => {
    const [lat, lng] = coordStr.split(',').map(Number)
    return L.latLng(lat, lng)
  })

  routingControl = L.Routing.control({
    waypoints: waypoints
  }).addTo(map)
}

async function getRoute(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}
</script>

<style scoped>
#map {
  width: 80%;
  margin: 0 auto;
  height: 80vh;
}
</style>
