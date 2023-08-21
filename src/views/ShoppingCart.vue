<script setup>
import { computed , onMounted } from 'vue'
import { useProduct } from '../stores/products'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const getProduct = useProduct()
getProduct.getProducts()

NProgress.start()
const products = computed(() => getProduct.data)
const addChar = (item) => {
  getProduct.addItem(item)
}
onMounted(() => {
  NProgress.done()
})
NProgress.configure({ showSpinner: false })
</script>
<template>
  <div class="cart">
    <div v-for="(item, i) in products" :key="i" class="cart__main">
      <div class="cart__img">
        <img :src="item.image" alt="" />
      </div>
      <div class="cart__content">
        <div>{{ item.title }}</div>
        <div>price ${{ item.price }}</div>
        <div>Rating: {{ item.rating.rate }}</div>
      </div>

      <!-- <div @click="addChar">ADD CHAR</div> -->
      <button @click="addChar(item)">ADD CHAR</button>
      <div></div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart {
  overflow: auto;
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 10px;
    border-radius: 20px;
    margin: 35px;
  }
  &__img {
    img {
      width: 34vw;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }
}
</style>
