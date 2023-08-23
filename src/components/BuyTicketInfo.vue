<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div class="buy__col" v-for="(item, i) in data" :key="i">
    <div class="buy__col__date">{{ item.ANN_DATE }}</div>
    <img :src="item.PIC_URL" alt="" />
    <div class="buy__col__content">
      <div class="buy__col__title">{{ item.TITLE }}</div>
      <div class="buy__col__time">{{ item.time }}</div>
    </div>
    <div class="buy__col__content">
      <div class="buy__col__description">{{ item.CONTENT }}</div>
      <!-- <div class="buy__col__price">{{ item.CATEGORY }}</div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.buy {
  &__col {
    border-radius: 24px;
    padding-bottom: 15px;
    position: relative;
    margin: 30px 12px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &__date {
      position: absolute;
      left: 78%;
      background: #fafafa;
      text-align: center;
    }

    &__title {
      font-size: 1.1rem;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      padding: 2px 12px;
      align-items: center;
    }
    &__description {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 242px;
    }

    img {
      border-radius: 24px 24px 0px 0px;
    }

    &__img {
    }
  }
}
</style>
