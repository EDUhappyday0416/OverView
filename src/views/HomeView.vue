<script setup>
import { computed } from 'vue'
import CustomInput from '../components/CustomInput.vue'
import BuyTicketInfo from '../components/BuyTicketInfo.vue'
// import { useEventData } from '../stores/event'
import { useForstData } from '../stores/forst'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

// const eventStore = useEventData()
const forst = useForstData()
forst.getForstInfoMethod()
const forstData = computed(() => forst.forstInfo)

// const goShoppingCard = () => {
//   router.push(`/ShoppingCart0
// }
</script>

<template>
  <div class="all">
    <CustomInput :placeholder="`Search`" />
    <div class="all__bar">
      <div class="all__content">
        <div class="all__content__list">
          <div class="all__content__list__item">
            <div class="all__content__list__item__title">自然步道</div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title">最新消息</div>
          </div>
        </div>
        <div class="all__content__btn">全部分類</div>
      </div>
      <div class="buy">
        <div class="buy__title">最新公告</div>
        <BuyTicketInfo :data="forstData" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 7px;

  &__bar {
    overflow: auto;
    // flex: 1;
    height: calc(100vh - 144px);
  }
  &__content {
    // display: flex;
    // justify-content: space-around;
    background: white;
    border-radius: 4px;
    padding: 10px 0;

    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f0f0f0;
      border-radius: 4px;
      margin: 8px 10px;
      padding: 6px;
    }

    &__list {
      display: flex;
      justify-content: start;
      padding: 4px 0;
      margin: 4px 10px;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 8px;
        padding: 4px;
        border-radius: 40px;
        background: antiquewhite;
        cursor: pointer;
        &__title {
          font-size: 1rem;
        }
      }
    }
  }

  .buy {
    &__title {
      margin: 10px 0;
      font-size: 1.5rem;
    }
    &__col {
      background-color: #8ec5fc;
      background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
      border-radius: 24px;
      padding-bottom: 15px;
      position: relative;
      margin: 32px 0;
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
}
</style>
