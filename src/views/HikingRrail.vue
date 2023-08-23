<script setup>
import { ref } from 'vue'
import { useForstData } from '../stores/forst'
const forst = useForstData()
const placeItem = ref([
  {
    title: '北部',
    value: 'N'
  },
  {
    title: '中部',
    value: 'C'
  },
  {
    title: '南部',
    value: 'S'
  },
  {
    title: '西部',
    value: 'E'
  }
])
const place = ref([])

const heightItem = ref(['1000', '2000', '3000', '4000'])
const height = ref([])

const levelItem = ref(['新手', '入門', '中級', '高手'])
const level = ref([])

const search = ref('')

const sendForst = () => {
  console.log(place.value)
  forst.getQueryForst(place.value, '', '').then((res) => {
    console.log(res)
  })
}
</script>
<template>
  <div>
    <div>自然步道</div>
    <v-select v-model="place" :items="placeItem" label="區域" multiple persistent-hint></v-select>
    <v-select
      v-model="height"
      :items="heightItem"
      item-title="title"
      items-value="value"
      label="高度(m)"
      multiple
      persistent-hint
    ></v-select>
    <v-select v-model="level" :items="levelItem" label="難度" multiple persistent-hint></v-select>
    <v-text-field v-model="search" label="關鍵字"></v-text-field>
    <v-btn @click="sendForst">送出</v-btn>
  </div>
</template>
