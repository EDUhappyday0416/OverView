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
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://templates.themekit.dev/alpins/media/image-2.jpg" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://templates.themekit.dev/alpins/media/image-3.jpg" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://templates.themekit.dev/alpins/media/image-4.jpg" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
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
