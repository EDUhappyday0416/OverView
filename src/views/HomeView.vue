<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SwiperSlide from '../components/SwiperSlide.vue'

const scale = ref(1.1)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  let scrollY = window.scrollY
  scale.value = 1.1 - scrollY * 0.001
}
</script>

<!-- <template>
  <div class="bg" :style="{ transform: `scale(${scale})` }"></div>
</template> -->
<template>
  <div class="parallax-container">
    <v-parallax
      class="auto-zoom-in"
      scale="1.1"
      height="950"
      src="https://templates.themekit.dev/alpins/media/hd-3.jpg"
    >
    </v-parallax>
    <v-row class="overlay-text">
      <v-col cols="12" sm="12" md="12" lg="6">
        <div class="d-flex align-center text-white flex-column">
          <h1 class="font-weight-black text-white text-h1 font-weight-thin mb-4 typing-text">
            MountainMingle
          </h1>
          <div class="text-h5 floating-text">Preserving Nature, One Summit at a Time</div>
          <div class="text-h5 floating-text">Mingling with Nature's Majestic Mountains</div>
          <div class="text-h5 floating-text">Where Nature's Beauty Meets Community</div>
        </div>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6">
        <div>
          <SwiperSlide />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
  overflow: hidden;
}

.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('https://uploads-ssl.webflow.com/60d97739f23901a110ab17de/60d9789af09a5183a5bc66f8_hero-slide-background.jpg')
    no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
}
.floating-text {
  font-size: 2vw;
  display: inline-block;
  animation: floatAnimation 3s ease-in-out infinite;
  /* 你可以自定义其它样式，例如颜色、字体等 */
}

@keyframes floatAnimation {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.typing-text {
  // font-size: 24px;
  font-size: 2vw;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  border-right: 3px solid black;
  width: 12.5ch;
  animation:
    typing 4s steps(14, end),
    blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 11.4ch;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

@keyframes autoZoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.auto-zoom-in {
  animation: autoZoomIn 5s forwards; /* 'forwards' 使動畫結束後保持在最後一帧的狀態 */
}
</style>
