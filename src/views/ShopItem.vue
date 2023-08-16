<template>
    <!-- doubleCount: {{ doubleCount }}
    <div v-for="(item , i) in productsData">
        {{ item }}
    </div> -->

    <div>

    </div>
</template>
<script setup>
import { computed  } from 'vue'
import { useProduct } from '../stores/products'
const getProduct = useProduct()
const productsData = computed(() => getProduct.data)
</script>