<script setup>
import { ref, onMounted } from 'vue'

import Procedural from 'procedural-gl'
const datasource = ref({
  provider: 'maptiler',
  apiKey: 'A16YhwG2oapRWHXZar3s'
})
const montBlanc = ref({ latitude: 45.8326364, longitude: 6.8564201 })
onMounted(() => {
  //   initializeProcedural()
  Procedural.init({ container, datasource: datasource.value })
  Procedural.setRotationControlVisible(true)
  Procedural.displayLocation(montBlanc.value)
})

// const initializeProcedural = () => {
//   Procedural.init({ container, datasource: datasource.value })
//   Procedural.setRotationControlVisible(true)
//   Procedural.displayLocation(montBlanc.value)
// }
</script>
<template>
  <div id="container" ref="container" style="width: 100%; height: 100%"></div>
</template>
<style></style>
