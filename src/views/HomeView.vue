<script setup>
import { computed, ref, watch, onMounted } from 'vue'
// import CustomInput from '../components/CustomInput.vue'
import BuyTicketInfo from '../components/BuyTicketInfo.vue'
import { useForestData } from '../stores/forest'
import { useRouter } from 'vue-router'
import { useDate } from 'vuetify/labs/date'
// import Loading from '../components/Loading.vue'
const init = () => {
  console.log('init')
}

const router = useRouter()

const date = useDate()
// const eventStore = useEventData()
const forest = useForestData()

const forestData = computed(() => forest.forestInfo)

const startTimeDate = ref(new Date()) // three month ago
const endTimeDate = ref(new Date()) //today

watch(
  () => startTimeDate.value,
  (newValue) => {
    console.log(newValue)
  }
)
const getThreeMoth = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const threeMoth = new Date(year, month - 3, day)
  return threeMoth
}
// const getComputedDate = computed(() => {
//   return formatDate(startTimeDate.value)
// })

// const showCalendar = (show) => {
//   console.log(show)
//   showDialog.value = show
// }

const formatDate = (date) => {
  if (!date) return ''
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
onMounted(() => {
  const dateStart = formatDate(getThreeMoth(startTimeDate.value))
  const dateEnd = formatDate(endTimeDate.value)
  forest.getForestInfoMethod(dateStart, dateEnd).then((res) => {
    console.log(res)
  })
})

// const saveValue = () => {
//   const dateStart = formatDate(startTimeDate.value)
//   const dateEnd = formatDate(endTimeDate.value)
//   forest.getForestInfoMethod(dateStart, dateEnd).then((res) => {
//     console.log(res)
//   })
// }

const img = ref('')
</script>

<template>
 
  <div class="all">
    <!--<v-text-field v-model="search" label="關鍵字"></v-text-field>-->
    <div class="all__bar">
      <!-- <Loading @showLoading="showLoading" /> -->
      <div class="all__content">
        <div class="all__content__list">
          <div class="all__content__list__item">
            <div class="all__content__list__item__title" @click="router.push('/HikingRrail')">
              <v-btn variant="tonal"> 自然步道 </v-btn>
            </div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title" @click="router.push('/Mountain')">
              <v-btn variant="tonal"> 百岳 </v-btn>
            </div>
          </div>
          <div class="all__content__list__item">
            <div class="all__content__list__item__title" @click="router.push('/MountainForm')">
              <v-btn variant="tonal"> 揪團 </v-btn>
            </div>
          </div>
        </div>
        <v-btn block color="indigo-darken-3" size="x-large" variant="flat"> 全部分類 </v-btn>
      </div>
      <div class="all__news">
        <div class="buy__title">最新公告</div>
        <BuyTicketInfo :data="forestData" />
      </div>
      <!--        <v-text-field-->
      <!--          v-model="getComputedDate"-->
      <!--          type="text"-->
      <!--          label="選擇日期"-->
      <!--          append-inner-icon="mdi-calendar"-->
      <!--          :clearable="true"-->
      <!--          density="compact"-->
      <!--          variant="outlined"-->
      <!--          @click:append-inner="showCalendar(true)"-->
      <!--        >-->
      <!--        </v-text-field>-->
      <!-- <div class="buy">
        <BaseDialog
          @save="saveValue"
          v-model:isVisible="showDialog"
          v-model:dateOfBirth="dateOfBirth"
        ></BaseDialog>
        <BuyTicketInfo :data="forestData" />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 7px;
  max-width: 1250px;
  margin: 0 auto;

  &__bar {
    /*overflow: auto;*/
    // flex: 1;
    /*height: calc(100vh - 144px);*/
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

  &__news {
    /*height: 15vh;*/
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
