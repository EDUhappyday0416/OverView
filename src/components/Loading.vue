<!-- <template>
  <transition name="fade">
    <div class="loading" v-if="loading">
      <div class="loading__text"></div>
    </div>
  </transition>
</template> -->

<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showLoading" label="Show Loading" />
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
const $q = useQuasar()
let timer

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer)
    $q.loading.hide()
  }
})

const showLoading = () => {
  $q.loading.show({
    message: '請稍等...'
  })

  timer = setTimeout(() => {
    $q.loading.hide()
    timer = void 0
  }, 3000)
}
</script>

<style scoped lang="scss">
// .loading {
//   position: absolute;
//   height: 100vh;
//   left: 0;
//   right: 0;
//   width: 100%;
//   margin: auto;
//   padding: 10px 0;
//   color: black;
//   text-align: center;
//   font-size: 35px;
//   z-index: 100;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   background: rgba(0, 0, 0, 0.5);

//   &__text {
//     border: 16px solid #f3f3f3;
//     border-radius: 50%;
//     border-top: 16px solid #3498db;
//     width: 120px;
//     height: 120px;
//     -webkit-animation: spin 2s linear infinite;
//     animation: spin 2s linear infinite;
//   }

//   /* Safari */
//   @-webkit-keyframes spin {
//     0% {
//       -webkit-transform: rotate(0deg);
//     }
//     100% {
//       -webkit-transform: rotate(360deg);
//     }
//   }

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// }
</style>
