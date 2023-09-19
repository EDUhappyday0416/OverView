<script setup>
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'

import { ref } from 'vue'
import { useForestData } from '../stores/forest'
const forest = useForestData()
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
const dialog = ref(false)
const pages = ref(0)
const viewType = ref('')
const viewTypeItem = ref([
  {
    title: '國家森林遊樂區',
    value: 0
  },
  {
    title: '自然步道',
    value: 1
  },
  {
    title: '平地森林園區',
    value: 2
  },
  {
    title: '林業文化園區',
    value: 10
  },
  {
    title: '林業軌道',
    value: 11
  },
  {
    title: '自然教育中心',
    value: 3
  },
  {
    title: '生態教育館',
    value: 12
  }
])

const sendForest = () => {
  dialog.value = false
  pages.value = 0
  forest.getQueryForest(place.value, height.value, pages.value, viewType.value).then((res) => {
    data.value = res.data
  })
}


  window.onscroll = () => {
    console.log('222222')
  }
let isLoading = false
const loadMore = (e) => {

  console.log(e)
  if (isLoading) return
  const { scrollHeight, scrollTop, clientHeight } = e.target
  if (scrollTop + clientHeight >= scrollHeight ) {
    isLoading = true 
    setTimeout(() => {
      pages.value += 1
      forest.getQueryForest(place.value, height.value, pages.value, viewType.value).then((res) => {
        data.value = data.value.concat(res.data)
      })
      isLoading = false // Reset the flag
    }, 1000)
  }
}
forest.getQueryForest(place.value, height.value, pages.value, viewType.value).then((res) => {
  data.value = res.data
})

</script>
<template>
  <div>
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
            <v-select
              v-model="viewType"
              :items="viewTypeItem"
              label="景點類型"
              multiple
              persistent-hint
            ></v-select>
            <v-text-field v-model="search" label="關鍵字"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="sendForest">送出</v-btn>
            <!-- <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div @scroll="loadMore" class="forest"> 
      <v-row no-gutters class="d-flex justify-center" >
        <v-col class="ma-2" v-for="(item, i) in data" :key="i" cols="12" sm="12" md="3" >
          <v-card class="mx-auto">
            <v-img
              :src="`https://recreation.forest.gov.tw/${item.Photo}`"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              style="object-fit: cover"
              min-height="150"
              max-height="150"
              cover
              class="bg-grey-lighten-2 align-end text-white"
            >
              <v-card-title>{{ item.Name }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4"> {{ item.AdminName }}</v-card-subtitle>
            <v-card-actions>
              <v-chip> {{ item.TypName }} </v-chip>
              <v-chip class="ma-2" color="red" text-color="white"> {{ item.OpenText }} </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  
  </div>
</template>

<style>
.forest {
  overflow: auto;
  height: calc(100vh - 144px);
 /* width: 100%;
  overflow: auto;
  max-width: 1920px;
  height: calc(100vh - 144px);
  margin: 0 auto; */
}

.forest {
  /*overflow-y: auto; height: 100vh*/
}
</style>
