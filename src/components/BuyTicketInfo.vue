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
    <div class="buy__col__date">{{ item.date }}</div>
    <img :src="item.imageUrl" alt="" />
    <template v-for="(contents, j) in item.contents" :key="j">
      <div class="buy__col__content">
        <div class="buy__col__title">{{ contents.title }}</div>
        <div class="buy__col__time">{{ contents.time }}</div>
      </div>
      <div class="buy__col__content">
        <div class="buy__col__description">{{ contents.description }}</div>
        <div class="buy__col__price">{{ contents.price }}</div>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.buy {

  &__col {
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    border-radius: 24px;
    padding-bottom: 15px;
    position: relative;
    /*margin: 32px 0;*/
    margin: 14px;
    &__date {
      position: absolute;
      left: 85%;
      background: aliceblue;
      text-align: center;
    }

    &__title {
      font-size: 1.5rem;
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
