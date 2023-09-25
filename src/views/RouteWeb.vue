<template>
  <!-- <button @click="fetchData">取得資料</button> -->
  <div class="d-flex">
    <div v-for="(item, i) in organBtn" :key="i" class="ma-2" @click="getActive(item, i)">
      <v-btn :active="item.active" variant="outlined"> {{ item.title }}</v-btn>
    </div>
  </div>
  <!-- <v-btn v-for="(item, i) in myArray" variant="outlined" :key="i" @click="getInfo(item)">
    {{ item.Name }}</v-btn
  > -->
  <v-select
    label="路線"
    :items="myArray"
    :item-props="itemProps"
    v-model="selectedRouter"
    @update:modelValue="getInfo(selectedRouter)"
  ></v-select>

  <div v-if="selectedItemIndex !== null">
    <!-- <template>
      是否申請入園證：{{ myArray[selectedItemIndex].isFixedclimb == 1 ? '是' : '否' }}
    </template> -->
    {{ selectedItemIndex.UnitsName }}
    <!-- {{ myArray[selectedItemIndex].RouteLV.consort }}
    {{ myArray[selectedItemIndex].RouteLV.equipment }}
    {{ myArray[selectedItemIndex].RouteLV.main }}
    {{ myArray[selectedItemIndex].RouteLV.LV }} -->
    <!-- 機關:{{ data.UnitsName }} 入園證:{{ data.isFixedclimb }} 路線名稱{{ data.Name }} -->
    <div class="q-pa-md">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">機關</th>
            <th class="text-right">登山主路線</th>
            <th class="text-right">路線名稱</th>
            <th class="text-right">入園證</th>
            <th class="text-right">林務局 自然保護留區</th>
            <th class="text-right">林務局 住宿</th>
            <th class="text-right">警政署 入山證</th>
            <th class="text-right">登山路線 難度等級</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.Name }}</td>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.UnitsName }}</td>
            <td class="text-left">{{ selectedItemIndex.RouteLV.LV }}</td>
          </tr>
        </tbody>
      </q-markup-table>
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
const model = ref(null)
const myArray = ref([])
const getNameInfo = (item, i) => {
  console.log(item)
}

const selectedRouter = ref(null)
const selectedItemIndex = ref(null)
const getActive = (item, i) => {
  if (item.active) {
    item.active = false
  } else {
    item.active = true
  }

  getItem(item)
}
const showRouteLV = ref(false)
const $q = useQuasar()
const forest = useForestData()
const getInfo = (item) => {
  console.log(item)
  selectedItemIndex.value = item
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
    // UnitsName: '太魯閣國家公園'
    UnitsName: item.title
  }
  forest
    .getQueryMountainRouteWeb(data)
    .then((res) => {
      myArray.value = []
      $q.loading.hide()
      const arr = res.data
      arr.forEach((item) => {
        console.log(item)

        myArray.value.push({
          Name: item.Name,
          UnitsName: item.UnitsName,
          RouteLV: item.RouteLV,
          isFixedclimb: item.is_cpami_Fixedclimb
        })
      })
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
  //   const data = {
  //     UnitsName: '太魯閣國家公園'
  //   }
  //   forest.getQueryMountainRouteWeb(data).then((res) => {
  //     // if (res)
  //     console.log(res)
  //     $q.loading.hide()
  //   })
})
</script>

<style></style>
