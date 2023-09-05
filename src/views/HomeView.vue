<script setup>
import { computed, ref , watch} from 'vue'
import CustomInput from '../components/CustomInput.vue'
import BuyTicketInfo from '../components/BuyTicketInfo.vue'
// import { useEventData } from '../stores/event'
import { useForstData } from '../stores/forst'
import { useRouter, useRoute } from 'vue-router'
import { useDate } from 'vuetify/labs/date'

import BaseDialog from '../components/BaseDialog.vue';

const router = useRouter()

const date = useDate()
console.log(date)
// const eventStore = useEventData()
const forst = useForstData()

const startDate = ref('2021-09-01')
const endDate = ref('2021-09-01')
const menu2 = ref(false)
const getToday = computed(() => {
  console.log()
  const getToday = new Date();
  const year = getToday.getFullYear();
  const month = String(getToday.getMonth() + 1).padStart(2, '0');
  const day = String(getToday.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
});
 

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

const dialog = ref(false)


const dates = ref(['2019-09-10', '2019-09-20'])
const chip1 = ref(true)


const showDialog = ref(false);
const dateOfBirth = ref('2018-09-15');

watch(
  ()=> dateOfBirth.value,
  newValue => {
    console.log(newValue)
  }
)

const getComputedDate = computed(() => {
    if (!dateOfBirth.value) return '';
    const dateObj = new Date(dateOfBirth.value);
    console.log(dateObj)
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
})

// forst.getForstInfoMethod(dateOfBirth.value , dateOfBirth.value).then((res) => {
//   console.log(res)
// })
const showCalendar = (show) => {
  console.log(show)
  showDialog.value = show;
  
}

const formatDate = (date) => {
  if (!date) return '';
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
const saveValue = (value) => {
  console.log(value)
  const dateStart = formatDate(value)
  const dateEnd = formatDate(dateOfBirth.value)
  forst.getForstInfoMethod(dateStart , dateEnd).then((res) => {
    console.log(res)
  })
}

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
        </div>
        <v-btn block color="indigo-darken-3" size="x-large" variant="flat"> 全部分類 </v-btn>
      </div>
      <div class="buy">
        <div class="buy__title">最新公告</div>
        <v-text-field
          v-model="getComputedDate"
          type="text"
          label="*Date of Birth"
          append-inner-icon="mdi-calendar"
          :clearable="true"
          density="compact"
          variant="outlined"
          @click:append-inner="showCalendar(true)"
        >
        </v-text-field>
        <BaseDialog
          @save="saveValue"
          v-model:isVisible="showDialog"
          v-model:dateOfBirth="dateOfBirth"
          :startDate="`2023-01-01`"
        ></BaseDialog>
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
