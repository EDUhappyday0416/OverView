<script setup>
import { useProduct } from '../stores/products'
const getProduct = useProduct()
getProduct.getProducts()
</script>
<template>
  <div class="cart">
    <div v-for="(item, i) in getProduct.data" :key="i" class="cart__main">
      <div class="cart__img">
        <img :src="item.image" alt="" />
      </div>
      <div class="cart__content">
        <div>{{ item.title }}</div>
        <div>price ${{ item.price }}</div>
        <div>Rating: {{ item.rating.rate }}</div>
      </div>
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
