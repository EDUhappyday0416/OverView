<script setup>
import { ref, computed } from 'vue'
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
const data = ref([])
const dialog = ref('false')
// forst.getQueryForst(place.value, height.value).then((res) => {
//   console.log(res)
//   data.value = res.data
// })

forst.getQueryForst(place.value, height.value).then((res) => {
  data.value = res.data
})
const sendForst = () => {
  forst.getQueryForst(place.value, height.value).then((res) => {
    console.log(res)
  })
}

const forstInfo = computed(() => forst.queryInfo)
</script>
<template>
  <div>
    <div>自然步道</div>
    <div class="text-right">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-search-web" v-bind="props"></v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-select
              v-model="place"
              :items="placeItem"
              label="區域"
              multiple
              persistent-hint
            ></v-select>
            <v-select
              v-model="height"
              :items="heightItem"
              item-title="title"
              items-value="value"
              label="高度(m)"
              multiple
              persistent-hint
            ></v-select>
            <v-select
              v-model="level"
              :items="levelItem"
              label="難度"
              multiple
              persistent-hint
            ></v-select>
            <v-text-field v-model="search" label="關鍵字"></v-text-field>
            <v-btn @click="sendForst">送出</v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div class="forst pa-3">
      <v-card class="mx-auto ma-3" v-for="(item, i) in data" :key="i">
        <v-img :src="`https://recreation.forest.gov.tw/${item.Photo}`" height="200px" cover></v-img>
        <v-card-title> {{ item.AdminName }} </v-card-title>
        <v-card-subtitle> {{ item.Name }} </v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>
          <v-spacer></v-spacer>
          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>
              {{ item.TypName }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<style>
.forst {
  width: 100%;
  overflow: auto;
  height: calc(100vh - 144px);
}
</style>
