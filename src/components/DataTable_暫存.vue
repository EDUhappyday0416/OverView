<template>
  <table class="table main-table">
    <thead>
      <tr>
        <th
          :data-column="column.key"
          :class="column.class"
          v-for="column in columns"
          :key="column.key"
          :style="column.colWidth"
          @click="sort_item(column)"
        >
          {{ column.name }}
          <i
            v-if="column.sortable"
            :class="[
              {
                'fa fa-arrow-up': column.sorted === 'asc',
                'fa fa-arrow-down': column.sorted === 'desc'
              }
            ]"
          ></i>
        </th>
      </tr>
    </thead>
    <tr v-for="(item, index) in filteredData" :key="item[index]">
      <td v-for="(sortItems, i) in newArr" :key="i" :class="sortClassName[i]">
        <template v-if="sortItems.type === 'date'">
          <div class="paginatedData_tooltip">
            <div class="paginatedData_tooltip_text">
              <span ref="itemRefs" :key="index">
                <slot :name="sortItems.key" :index="index" :value="item[sortItems.key]"></slot>
              </span>
            </div>
            <span class="paginatedData_tooltip_content" v-if="list[i] > 90">
              <slot :name="sortItems.key" :index="index" :value="item[sortItems.key]"></slot>
            </span>
          </div>
        </template>
        <!-- 按鈕 -->
        <template v-else-if="sortItems.key == 'action'">
          <slot :name="sortItems.key" :index="index" :value="item[sortItems.key]"></slot>
        </template>

        <!-- 不是按鈕或是日期 -->
        <template v-else>
          <div class="paginatedData_tooltip">
            <div class="paginatedData_tooltip_text">
              <span ref="itemRefs" :key="index">{{ item[sortItems.key] }}</span>
            </div>
            <span class="paginatedData_tooltip_content" v-if="list[i] > 90">
              {{ item[sortItems.key] }}
            </span>
          </div>
        </template>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { defineProps, computed, ref, watch } from 'vue'
import { sort_items } from '../utils/sort'

const sort_column = ref('')
let props = defineProps({
  paginatedData: Array,
  columns: Array
})
const sortClassName = Object.values(props.columns).map((item) => item.class)

const newArr = ref([])
props.columns.forEach(function (element) {
  newArr.value.push(element)
})
//這裡加上props過來的
const filteredData = computed(() => {
  let { data } = props
  console.log(props)
  data = props.paginatedData.filter((row) => {
    return Object.keys(row).some((key) => {
      return row[key] == null || row[key] == '' || row[key] == undefined ? '--' : String(row[key])
    })
  })
  return data
})
const sort_item = (col) => {
  props.columns.forEach((object) => {
    if (object.sorted !== null && object.key !== col.key) {
      object.sorted = null
    }
  })
  if (col.sortable === true) {
    sort_column.value = col.key
    sort_items(col, filteredData.value) //這裡加上props過來的
  }
}

const list = ref([])
const itemRefs = ref([])

watch(itemRefs.value, (newX) => {
  for (let index in newX) {
    list.value.push(newX[index].offsetWidth)
  }
})
</script>
