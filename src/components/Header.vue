<template>
  <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  <!-- <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="bg-surface-variant">
        <div class="d-flex justify-center align-center flex-column">
          <div class="d-flex pa-2" @click="router.push('/HikingRrail')">自然步道</div>
          <div class="d-flex pa-2" @click="router.push('/Mountain')">百岳</div>
          <div class="d-flex pa-2" @click="router.push('/MountainForm')">揪團</div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div @click="isActive.value = false"></div>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog> -->
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
    </template>

    <v-card min-width="300">
      <v-list v-for="(item, i) in urlItem" :key="i">
        <v-list-item @click="goPath(item.url)">{{ item.title }}</v-list-item>
        <v-divider></v-divider>
        <!-- <v-list-item @click="goPath(item)">{{ item.title }} </v-list-item> -->
      </v-list>
    </v-card>
  </v-menu>
</template>
<style scoped></style>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const menu = ref(false)
const urlItem = ref([
  { title: '自然步道', url: '/HikingRrail' },
  { title: '百岳', url: '/Mountain' },
  { title: '揪團', url: '/MountainForm' },
  { title: '最新消息', url: '/' }

])

const goPath = (item) => {
  router.push(item)

  menu.value = false
}
</script>
