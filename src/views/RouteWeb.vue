<template>
  <v-parallax scale="1.1" height="400" src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">路線查詢與介紹</h1>
      <v-divider :thickness="3" class="ma-4 w-50"></v-divider>
    </div>
  </v-parallax>
  <div style="max-width: 1250px" class="mx-auto pa-5">
    <v-row no-gutters class="d-flex justify-start">
      <!-- <v-col cols="12" sm="12" md="12">
        <div v-for="(item, i) in organBtn" :key="i" class="ma-2" @click="getActive(item, i)">
          <v-btn :active="item.active" variant="outlined"> {{ item.title }}</v-btn>
        </div>
      </v-col> -->

      <div v-for="(item, i) in organBtn" :key="i" @click="getActive(item, i)">
        <v-col cols="12" sm="12" md="12">
          <v-btn :color="item.active ? 'primary' : ''" outlined> {{ item.title }}</v-btn>
        </v-col>
      </div>
    </v-row>
    <v-select
      label="路線"
      :items="routeArray"
      :item-props="itemProps"
      v-model="selectedRouter"
      @update:modelValue="getInfo(selectedRouter)"
    ></v-select>
    <div v-if="selectedItemIndex !== null">
      {{ selectedItemIndex.UnitsName }}
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-center">機關</th>
              <th class="text-center">登山主路線</th>
              <th class="text-center">路線名稱</th>
              <th class="text-center">入園證</th>
              <th class="text-center">林務局 自然保護留區</th>
              <th class="text-center">林務局 住宿</th>
              <th class="text-center">警政署 入山證</th>
              <th class="text-center">登山路線 難度等級</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">{{ selectedItemIndex.UnitsName }}</td>
              <td class="text-center">{{ selectedItemIndex.Name }}</td>
              <td class="text-center">{{ selectedItemIndex.MainName }}</td>
              <td class="text-center">
                {{ selectedItemIndex.is_cpami_Fixedclimb == 1 ? '是' : '-' }}
              </td>
              <td class="text-center">
                {{ selectedItemIndex.is_forest_area_list == 1 ? '是' : '-' }}
              </td>
              <td class="text-center">
                {{ selectedItemIndex.is_forest_camp == 1 ? '是' : '-' }}
              </td>
              <td class="text-center">
                {{ selectedItemIndex.is_forest_frail == 1 ? '是' : '-' }}
              </td>
              <td class="text-center">
                <v-chip class="ma-2" color="red" text-color="white">
                  {{ selectedItemIndex.RouteLV.LV }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useForestData } from '../stores/forest'
const organBtn = ref([
  { title: '太魯閣國家公園', active: false },
  { title: '玉山國家公園', active: false },
  { title: '雪霸國家公園', active: false },
  { title: '林務局自然保護區', active: false },
  { title: '林務局山屋及營地', active: false },
  { title: '警政署入山', active: false }
])
const modelActive = ref(null)
const routeArray = ref([])

const selectedRouter = ref(null)
const selectedItemIndex = ref(null)
const getActive = (item, i) => {
  console.log(item, i)
  organBtn.value.forEach((btnItem) => (btnItem.active = false))
  item.active = true
  getItem(item)
}
const showRouteLV = ref(false)
const $q = useQuasar()
const forest = useForestData()
const getInfo = (item) => {
  $q.loading.show({
    delay: 1000,
    message: '請稍等...'
  })
  selectedItemIndex.value = item
  $q.loading.hide()
}
const itemProps = (item) => {
  return {
    title: item.Name
  }
}
const getItem = (item) => {
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })

  const data = {
    UnitsName: item.title
  }

  forest
    .getQueryMountainRouteWeb(data)
    .then((res) => {
      routeArray.value = []
      routeArray.value.push(...res.data)
      $q.loading.hide()
    })
    .catch((error) => {
      $q.loading.hide()
      console.log(error)
    })
}

onMounted(() => {
  $q.loading.show({
    delay: 400,
    message: '請稍等...'
  })

  $q.loading.hide()
})
</script>

<style></style>
