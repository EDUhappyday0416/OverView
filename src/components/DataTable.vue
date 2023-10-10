<template>
  <v-table fixed-header>
    <thead>
      <tr>
        <th
          v-for="(column, i) in columns"
          :key="i"
          class="text-left"
          style="min-width: 100px !important"
        >
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filteredData" :key="item[index]">
        <td
          v-for="(sortItems, i) in newArr"
          :key="i"
          :class="sortClassName[i]"
          style="min-width: 150px !important"
        >
          <template v-if="sortItems.key == 'status'">
            <v-chip class="ma-2" color="green" text-color="white"> 未到期 </v-chip>
          </template>
          <template v-else>
            {{ item[sortItems.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
import { defineProps, computed, ref } from 'vue'

const sort_column = ref('')
let props = defineProps({
  paginatedData: Array,
  columns: Array
})
const sortClassName = Object.values(props.columns).map((item) => item.class)

const newArr = ref([])
props.columns.forEach(function (element) {
  console.log(element)
  newArr.value.push(element)
})
//這裡加上props過來的
const filteredData = computed(() => {
  let { data } = props
  data = props.paginatedData.filter((row) => {
    return Object.keys(row).some((key) => {
      return row[key] == null || row[key] == '' || row[key] == undefined ? '--' : String(row[key])
    })
  })
  return data
})
</script>

<style>
th {
  max-width: 40px;
}
</style>
