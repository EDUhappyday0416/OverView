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
const dialog = ref(false)
// forst.getQueryForst(place.value, height.value).then((res) => {
//   console.log(res)
//   data.value = res.data
// })
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

forst.getQueryForst(place.value, height.value, pages.value, viewType.value).then((res) => {
  data.value = res.data
})
const sendForst = () => {
  dialog.value = false
  pages.value = 0
  forst.getQueryForst(place.value, height.value, pages.value, viewType.value).then((res) => {
    data.value = res.data
  })
}

let isLoading = false
const loadMore = (e) => {
  if (isLoading) return
  const { scrollHeight, scrollTop, clientHeight } = e.target
  if (scrollTop + clientHeight >= scrollHeight * 0.9) {
    isLoading = true // Set the flag to true to prevent further loading
    setTimeout(() => {
      pages.value += 1
      forst.getQueryForst(place.value, height.value, pages.value, viewType.value).then((res) => {
        data.value = data.value.concat(res.data)
      })
      isLoading = false // Reset the flag
    }, 1000)
  }

  // if (scrollTop + clientHeight >= scrollHeight) {
  //   this.page += 1
  //   let data = {
  //     page: this.page,
  //     limit: 10
  //   }
  //   this.getIntegralLogs(data).then((res) => {
  //     if (res.data != '') {
  //       this.dataList = this.dataList.concat(res.data)
  //     }
  //   })
  // }
}
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
            <v-btn color="primary" block @click="sendForst">送出</v-btn>
            <!-- <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="forst" @scroll="loadMore">
      <!-- <v-card class="d-flex flex-column" max-width="344" v-for="(item, i) in data" :key="i">
        <v-img :src="`https://recreation.forest.gov.tw/${item.Photo}`" height="200px" cover></v-img>
        <v-card-title> {{ item.Name }} </v-card-title>
        <v-card-subtitle> {{ item.AdminName }} </v-card-subtitle>
        <v-card-actions>
          <v-chip> {{ item.TypName }} </v-chip>
          <v-chip class="ma-2" color="red" text-color="white"> {{ item.OpenText }} </v-chip>
        </v-card-actions>
      </v-card> -->
      <v-row dense no-gutters>
        <v-col
          v-for="(item, i) in data"
          :key="i"
          cols="12"
          md="4"
          lg="3"
          class="justify-center d-flex"
        >
          <v-card class="pa-2 ma-2 w-100">
            <v-img
              class="align-end text-white"
              height="200"
              :src="`https://recreation.forest.gov.tw/${item.Photo}`"
              cover
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
.forst {
  width: 100%;
  overflow: auto;
  max-width: 1920px;
  height: calc(100vh - 144px);
  margin: 0 auto;
}
</style>
