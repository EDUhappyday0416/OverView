<script setup>
import { ref, onMounted } from 'vue'
import { useForestData } from '../stores/forest'
// import Loading from '../components/Loading.vue'
import { useQuasar } from 'quasar'
const forest = useForestData()
const placeItem = ref([
  {
    title: '北部',
    value: 'N',
    active: false
  },
  {
    title: '中部',
    value: 'C',
    active: false
  },
  {
    title: '南部',
    value: 'S',
    active: false
  },
  {
    title: '西部',
    value: 'E',
    active: false
  }
])
const place = ref([])
const heightItem = ref([
  {
    title: '1000',
    value: 1000
  },
  {
    title: '2000',
    value: 2000
  },
  {
    title: '3000',
    value: 3000
  },
  {
    title: '4000',
    value: 4000
  }
])
const height = ref([])
const levelItem = ref(['新手', '入門', '中級', '高手'])
const level = ref([])
const search = ref('')
const data = ref([])
const dialog = ref(false)
const pages = ref(0)
const viewType = ref([])
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
const $q = useQuasar()
onMounted(() => {
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })
  forest
    .getQueryForest(place.value, height.value, pages.value, viewType.value)
    .then((res) => {
      $q.loading.hide()
      data.value = res.data
    })
    .catch((error) => console.log(error))
})
// const sendForest = () => {
//   // dialog.value = false
//   pages.value = 0
//   $q.loading.show({
//     delay: 400,
//     message: '請稍等...'
//   })
//   forest.getQueryForest(place.value, height.value, pages.value, viewType.value).then((res) => {
//     data.value = res.data
//     $q.loading.hide()
//   })
// }

// let isLoading = false
const loadMore = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target
  if (scrollTop + clientHeight >= scrollHeight) {
    $q.loading.show({
      delay: 400,
      message: '請稍等...'
    })
    setTimeout(() => {
      pages.value += 1
      forest
        .getQueryForest(place.value, height.value, pages.value, viewType.value)
        .then((res) => {
          data.value = data.value.concat(res.data)
          $q.loading.hide()
        })
        .catch((err) => {
          $q.loading.hide()
          console.log(err)
        })
    }, 1000)
  }
}
const getInfo = (item, i, type) => {
  if (item.active) {
    item.active = false
    if (type === 'place') {
      place.value = place.value.filter((v) => v !== item.value)
    } else if (type === 'height') {
      height.value = height.value.filter((v) => v !== item.value)
    }
  } else {
    item.active = true
    if (type === 'place') {
      place.value.push(item.value)
    } else if (type === 'height') {
      height.value.push(item.value)
    }
  }

  // if (type === 'place') {
  //   if (item.active) {
  //     item.active = false
  //     arr.value.splice(i, 1)
  //   }else{
  //     item.active = true
  //     arr.value.push(item.value)
  //     place.value = arr.value
  //   }
  // } else if (type === 'height') {
  //   if (item.active) {
  //     item.active = false
  //     arr.value.splice(i, 1)
  //   }else{
  //     item.active = true
  //     arr.value.push(item.value)
  //     place.value = arr.value
  //   }
  // }

  getSearch()
}

const getSearch = () => {
  pages.value = 0
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })
  forest
    .getQueryForest(place.value, height.value, pages.value, viewType.value, search.value)
    .then((res) => {
      data.value = res.data
      $q.loading.hide()
    })
    .catch((error) => console.log(error))
}
</script>
<template>
  <v-parallax scale="1.1" height="400" src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">自然步道</h1>
      <v-divider :thickness="3" class="ma-4 w-50"></v-divider>
    </div>
  </v-parallax>
  <div style="max-width: 1250px" class="mx-auto">
    <div class="text-right">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-search-web" v-bind="props" v-if="false"></v-btn>
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
          <!-- <v-card-actions>
            <v-btn @click="sendForest">送出</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>
    </div>
    <div class="d-flex justify-start">
      <q-btn
        class="ma-3"
        v-model="item.value"
        :key="i"
        v-for="(item, i) in placeItem"
        @click="getInfo(item, i, 'place')"
        text-color="black"
        :color="item.active == true ? 'secondary' : 'white'"
        :label="item.title"
      />
    </div>
    <div class="d-flex justify-start">
      <q-btn
        class="ma-3"
        v-model="item.value"
        :key="i"
        v-for="(item, i) in heightItem"
        @click="getInfo(item, i, 'height')"
        text-color="black"
        :color="item.active == true ? 'secondary' : 'white'"
        :label="item.title"
      />
    </div>

    <div @scroll="loadMore" class="forest">
      <v-row no-gutters class="d-flex justify-space-between">
        <v-col class="ma-2" v-for="(item, i) in data" :key="i" cols="12" sm="12" md="3">
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
  <!-- <Loading @showLoading="showLoading" /> -->
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
