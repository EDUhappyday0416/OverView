<script setup>
import { ref, computed } from 'vue'
import { useForestData } from '../stores/forest'
import DataTable from '../components/DataTable.vue'
const forest = useForestData()
const tripData = ref([])

forest.getMountainTripList().then((res) => {
  tripData.value = res.data
})

const columns = ref([
  {
    name: '名稱',
    key: 'location'
  },
  {
    name: '狀態',
    key: 'status'
  },
  {
    name: '日期',
    key: 'date'
  },
  {
    name: '聯絡方式',
    key: 'contact_info'
  },
  {
    name: '山岳等級',
    key: 'mountain_grade'
  },
  {
    name: '集合地點',
    key: 'meetup_location'
  },
  {
    name: '活動人數',
    key: 'number_of_people'
  },
  {
    name: '交通方式',
    key: 'transportation'
  }
])
</script>
<template>
  <v-parallax scale="1.1" height="400" src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">列表</h1>
      <v-divider :thickness="3" class="ma-4 w-50"></v-divider>
    </div>
  </v-parallax>
  <v-card class="ma-4 pa-3">
    <DataTable :columns="columns" :paginatedData="tripData" />
    <!-- <v-table>
      <thead>
        <tr>
          <th class="text-left">名稱</th>
          <th class="text-left">日期</th>
          <th class="text-left">聯絡方式</th>
          <th class="text-left">山岳等級</th>
          <th class="text-left">集合地點</th>
          <th class="text-left">活動人數</th>
          <th class="text-left">交通方式</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tripData" :key="item.name">
          <td>{{ item.location }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.contact_info }}</td>
          <td>{{ item.mountain_grade }}</td>
          <td>{{ item.meetup_location }}</td>
          <td>{{ item.number_of_people }}</td>
          <td>{{ item.transportation }}</td>
        </tr>
      </tbody>
    </v-table> -->
  </v-card>
</template>
<style></style>
