<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useQuasar } from 'quasar'
import SwiperSlide from '../components/SwiperSlide.vue'
const $q = useQuasar()

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

const buttonColor = computed(() => {
  return $q.screen.lt.md ? 'primary' : 'secondary'
})
</script>

<!-- <template>
  <div class="bg" :style="{ transform: `scale(${scale})` }"></div>
</template> -->
<template>
  <!-- <q-btn square :color="buttonColor" icon="shopping_cart" /> -->
  <div class="parallax-container q-pa-0">
    <v-parallax
      class="auto-zoom-in align-center fill-height"
      scale="1"
      height="950"
      src="https://templates.themekit.dev/alpins/media/hd-3.jpg"
    >
    </v-parallax>
    <!-- <q-parallax
      height="950"
      src="https://templates.themekit.dev/alpins/media/hd-3.jpg"
    >
    </q-parallax> -->
    <!-- <q-parallax >
      <template v-slot:media>
        <img src="https://templates.themekit.dev/alpins/media/hd-3.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0,
            height: '100%'
          }"
        >
        </div>
      </template>
    </q-parallax> -->
    <v-row class="overlay-text">
      <v-col cols="12" sm="12" md="12" lg="6">
        <div class="d-flex align-center text-white flex-column">
          <h1 class="font-weight-black text-white font-weight-thin mb-4 typing-text">
            MountainMingle
          </h1>
          <div class="floating-text">Preserving Nature, One Summit at a Time</div>
          <div class="floating-text">Mingling with Nature's Majestic Mountains</div>
          <div class="floating-text">Where Nature's Beauty Meets Community</div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6" v-if="!$q.screen.lt.md">
        <div>
          <SwiperSlide />
        </div>
      </v-col>
    </v-row>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
  bottom: 30%;
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
  font-size: 1.5vw;
  display: inline-block;
  animation: floatAnimation 3s ease-in-out infinite;
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
  font-size: 5vw;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  border-right: 3px solid black;
  // width: 13ch;
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
  animation: autoZoomIn 5s forwards;
}
</style>
