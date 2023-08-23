<script setup>
import { computed, ref } from 'vue'
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

// const placeItem = ref(['北部', '南部', '中部', '西部'])
// const place = ref([])

// const heightItem = ref(['1000', '2000', '3000', '4000'])
// const height = ref([])

// const levelItem = ref(['新手', '入門', '中級', '高手'])
// const level = ref([])

const search = ref('')
</script>

<template>
  <div class="all">
    <!-- <v-select v-model="place" :items="placeItem" label="區域" multiple persistent-hint></v-select>
    <v-select
      v-model="height"
      :items="heightItem"
      label="高度(m)"
      multiple
      persistent-hint
    ></v-select>
    <v-select v-model="level" :items="levelItem" label="難度" multiple persistent-hint></v-select> -->
    <!-- <CustomInput :placeholder="`Search`" /> -->
    <v-text-field v-model="search" label="關鍵字"></v-text-field>
    <div class="all__bar">
      <div class="all__content">
        <div class="all__content__list">
          <div class="all__content__list__item">
            <div class="all__content__list__item__title" @click="router.push('/HikingRrail')">
              <v-btn variant="tonal"> 自然步道 </v-btn>
            </div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title">
              <v-btn variant="tonal"> 最新消息 </v-btn>
            </div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title">
              <v-btn variant="tonal"> 最新消息 </v-btn>
            </div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title">
              <v-btn variant="tonal"> 最新消息 </v-btn>
            </div>
          </div>
        </div>
        <v-btn block color="indigo-darken-3" size="x-large" variant="flat"> 全部分類 </v-btn>
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
    padding: 10px;

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
        cursor: pointer;
        &__title {
          font-size: 1rem;
        }
      }
    }
  }

  .buy {
    background: white;
    border-radius: 28px;
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
