<script setup>
import { ref, watch , computed  } from 'vue'
import { useLogin } from '../stores/login'
import { useProduct } from '../stores/products'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import FullMenu from '../components/FullMenu.vue'
import { countBy } from 'lodash-es'
import { useRouter } from 'vue-router'
NProgress.configure({ showSpinner: false })
const storeLogout = useLogin()
import cookie from 'js-cookie'
const userInfo = ref([])
const router = useRouter()
NProgress.start()
const getProduct = useProduct()
if (cookie.get('token') !== undefined && cookie.get('token') !== '') {
  storeLogout.getUserData().then((res) => {
    userInfo.value = res
    NProgress.done()
  })
}
NProgress.done()

const open = ref(false)
const openMenu = () => {
  open.value = !open.value
}

const getInitImage = ref(localStorage.getItem('imageName') || '')

const filesChange = async (file) => {
  try {
    const res = await storeLogout.upDateImages(file[0])
    localStorage.setItem('imageName', res.filename)
    getInitImage.value = res.filename
    fetchImage(res.filename)
  } catch (error) {
    console.error('Error uploading file:', error)
  }
}
const doubleCount = computed(() => getProduct.doubleCount)
const getUrlImage = ref('')

const fetchImage = async (imageName) => {
  try {
    const res = await storeLogout.getImg(imageName)
    console.log(res)
    const urlCreator = window.URL || window.webkitURL
    getUrlImage.value = urlCreator.createObjectURL(res)
  } catch (error) {
    console.error('Error fetching image:', error)
  }
}

watch(
  getUrlImage,
  (newValue, oldValue) => {
    console.log('New Image URL:', newValue)
  },
  { immediate: true }
)

if (getInitImage.value) {
  fetchImage(getInitImage.value)
}

const goShopping = () => {
  router.push({ path: '/ShoppingCart' })
}
</script>
<template>
  <div class="setting">
    <div class="setting__name">Hi {{ userInfo.name }}</div>
    <div class="setting__right">
      <div class="setting__img">
        <input
          type="file"
          multiple
          @change="filesChange($event.target.files)"
          accept="image/*"
          class="input-file"
        />
        <img :src="getUrlImage || userInfo.avatar" />
      </div>
      <!-- <div class="setting__logout" @click="logout">登出</div> -->
      <div class="setting__img" @click="openMenu">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
          />
        </svg>
      </div>
      <div class="setting__img" @click="goShopping">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512">
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>{{ doubleCount }}
      </div>
    </div>
  </div>
  <FullMenu :openMenu="open" @update:openMenu="open = $event" />
</template>

<style scoped lang="scss">
.setting {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;

  &__name {
    font-size: 1.5rem;
    font-weight: 200;
  }
  &__right {
    display: flex;
  }

  &__img {
    max-width: 100%;
    height: auto;
    padding: 0px 8px;
    display: flex;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

//hide update image css
.setting__img {
  position: relative;
}

.input-file {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.button-style {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
}
</style>
