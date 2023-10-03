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
let map
let currentMarkers = []

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

  const markerPosition = [23.465766, 120.448608]
  const marker = L.marker(markerPosition, {
    draggable: true
  }).addTo(map)

  map.setView(markerPosition, 13)

  map.invalidateSize()

  $q.loading.hide()
})

const DJANGO_PROXY_URL = 'https://127.0.0.1:8000/getRoute/' // 假設你的Django伺服器在這個URL上運行
const ORS_URL = 'https://api.openrouteservice.org/v2/directions/foot-hiking'
// 其他代碼...

async function onValueChange(coordinatesArray) {
  // 清除先前添加的标记
  currentMarkers.forEach((marker) => marker.remove())
  currentMarkers = []

  let linePoints = []

  coordinatesArray.forEach((v) => {
    const arr = v.split(',')
    if (arr.length === 2) {
      const lat = parseFloat(arr[0].trim())
      const lng = parseFloat(arr[1].trim())
      linePoints.push([lat, lng]) // 注意这里的顺序，首先是纬度，然后是经度
    }
  })

  if (linePoints.length > 1) {
    try {
      const route = await getRoute(linePoints)
      const wholeDecodedPath = decodePolyline(route.geometry) // 解码整体路径
      route.routes[0].segments.forEach((segment) => {
        segment.steps.forEach((step) => {
          const stepPath = wholeDecodedPath.slice(step.way_points[0], step.way_points[1] + 1)
          L.polyline(stepPath).addTo(map)
        })
      })
    } catch (error) {
      console.error('Error fetching the route:', error)
    }
  }
}

// 其他代碼...

async function getRoute(linePoints) {
  const response = await fetch(ORS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 5b3ce3597851110001cf62488afe79f82c944427add4f46903b9087e' // 用你的API密鑰替換'YOUR_API_KEY'
    },
    body: JSON.stringify({
      coordinates: linePoints
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  return data
}
</script>

<style scoped>
#map {
  width: 80%;
  margin: 0 auto;
  height: 80vh;
}
</style>
