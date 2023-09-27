<template>
  <v-select
    @update:modelValue="onValueChange"
    label="選擇地點"
    :items="data"
    item-title="name"
    item-value="coordinates"
  ></v-select>
  經緯度：{{ markers }}
  <GMapMap :center="center" :zoom="15" map-type-id="terrain" style="width: 100%; height: 600px">
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
  </GMapMap>

  <ProceduralMap />
</template>
<script setup>
// import ProceduralMap from '../components/ProceduralMap.vue'
import { ref, onMounted } from 'vue'
import { useForestData } from '../stores/forest'
import { useQuasar } from 'quasar'
import { indexOf } from 'lodash-es'
const forest = useForestData()
const $q = useQuasar()
const markers = ref([
  {
    position: {
      lat: 23.470002,
      lng: 120.957274
    }
  }
])
const data = ref([])
const center = ref({ lat: 23.470002, lng: 120.957274 })

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
  center.value = {
    lat: parseFloat(arr[0]),
    lng: parseFloat(arr[1])
  }
  console.log(markers.value)
}
</script>
