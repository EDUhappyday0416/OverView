<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(arr, i) in img" :key="i">
      <div class="swiper-zoom-container">
        <img :src="arr" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper/modules'
const props = defineProps({
  img: Array
})
const modules = ref([Pagination])
const images = ref([
  'https://templates.themekit.dev/alpins/media/image-2.jpg',
  'https://templates.themekit.dev/alpins/media/image-3.jpg',
  'https://templates.themekit.dev/alpins/media/image-4.jpg'
])
</script>

<style>
.swiper {
  /* width: 50%; */
  height: 20vh;
  z-index: 2;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
