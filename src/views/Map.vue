<template>
  <v-select
    @update:modelValue="onValueChange"
    label="選擇地點"
    :items="data"
    item-title="name"
    item-value="coordinates"
  ></v-select>
  經緯度：{{ markers }}
  <!-- <GMapMap :center="center" :zoom="15" map-type-id="terrain" style="width: 100%; height: 600px">
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap> -->

  <!-- <ProceduralMap /> -->
  <div style="height:600px; width:800px">
    <l-map @ready="onLeafletReady" ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-tile-layer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    :attribution="attribution"></l-tile-layer>
                    <l-marker :lat-lng="[47.7515953048815, 8.757179159967961]" ></l-marker>
    </l-map>
  </div>
</template>
<script setup>
// https://docs.stadiamaps.com/tutorials/getting-started-with-vue-leaflet/
// import ProceduralMap from '../components/ProceduralMap.vue'
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer , LMarker} from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from 'vue'
import { useForestData } from '../stores/forest'
const zoom = ref(13)
const center = ref([23.470002, 120.957274])
import { useQuasar } from 'quasar'
import { indexOf } from 'lodash-es'
const forest = useForestData()
const $q = useQuasar()
const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'


const onLeafletReady = async  () => {
  // await this.$nextTick();
  leafletObject.value = this.$refs.map.leafletObject;
  leafletReady.value = true;
}
const leafletObject = ref(null)
const leafletReady = ref(true)
const markers = ref([
  {
    position: {
      lat: 23.470002,
      lng: 120.957274
    }
  }
])

const markerLatLng = ref([47.313220, -1.319482])
const data = ref([])
// const center = ref({ lat: 23.470002, lng: 120.957274 })

onMounted(() => {
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })
  $q.loading.hide()
})

forest.getQueryMountainLocation().then((res) => {
  console.log(res)
  if (res.status) {
    //markers.value = res.data
    data.value = res.data
    console.log(res.data)
  }
})

function onValueChange(v) {
  const str = v
  const arr = str.split(',')
  console.log(arr)
  //   markers.value = arr

  markers.value = [
    {
      position: {
        lat: parseFloat(arr[0]),
        lng: parseFloat(arr[1])
      }
    }
  ]

  markerLatLng.value[0] = parseFloat(arr[0])
  markerLatLng.value[1] = parseFloat(arr[1])
  center.value = {
    lat: parseFloat(arr[0]),
    lng: parseFloat(arr[1])
  }
  console.log(markers.value)
}
</script>
