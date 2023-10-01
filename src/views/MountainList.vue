<script setup>
import { ref } from 'vue'
const items = ref([
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: '北大武三天兩夜',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'subheader', title: 'Yesterday' },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: `<span>爬山地點:</span><br><span>日期:2023/04/13</span><br><span>聯絡資訊:</span><br><span>山岳等級:</span><br><span>集合地點:</span><br><span>活動人數:</span><br><span>交通方式:</span> `
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
  <v-card class="mx-auto pa-3">
    <v-list :items="items" item-props lines="three">
      <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
    </v-list>
  </v-card>
</template>
<style></style>
