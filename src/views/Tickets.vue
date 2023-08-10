<script setup>
import { ref } from 'vue'
import { usePlaneData } from '../stores/counter'
import { storeToRefs } from 'pinia'
import Loading from '../components/Loading.vue'

import TicketInfo from '../components/TicketInfo.vue'

const planeStore = usePlaneData()
const { planeData } = storeToRefs(planeStore)
const hideLoading = ref(false)

const openTicketInfo = (item) => {
  hideLoading.value = true

  setTimeout(() => {
    hideLoading.value = false
  }, 1000)

  showModal.value = true
  data.value = item
}

const loadMore = (e) => {
  const { scrollHeight, scrollTop, clientHeight } = e.target
  if (scrollTop + clientHeight >= scrollHeight * 0.9) {
    hideLoading.value = true
    setTimeout(() => {
      hideLoading.value = false
      planeStore.increment()
    }, 1000)
  }

  // if (scrollTop + clientHeight >= scrollHeight) {
  //   this.page += 1
  //   let data = {
  //     page: this.page,
  //     limit: 10
  //   }
  //   this.getIntegralLogs(data).then((res) => {
  //     if (res.data != '') {
  //       this.dataList = this.dataList.concat(res.data)
  //     }
  //   })
  // }
}

const showModal = ref(false)
const data = ref([])
</script>
<template>
  <div class="tieket__bar" @scroll="loadMore">
    <div
      class="tieket"
      @click="openTicketInfo(item)"
      v-for="(item, i) in planeStore.planeData"
      :key="i"
    >
      <div class="tieket__info">
        <div class="tieket__left">
          <div class="tieket__left__info">
            <div class="tieket__left__info__name">
              <div class="tieket__left__info__departure">{{ item.flight.departure }}</div>
              <div class="tieket__left__info__destination">{{ item.flight.destination }}</div>
            </div>
            <div class="tieket__left__info__dotted">
              <div>{{ item.flight.flightNumber }}</div>
              <div class="tieket__left__info__plane">
                <div class="border-dotted"></div>
                <div class="tieket__left__info__plane__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 576 512">
                    <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                    />
                  </svg>
                </div>
                <div class="border-dotted"></div>
              </div>
              <div>{{ item.flight.duration }}</div>
            </div>
            <div class="tieket__left__info__name">
              <div class="tieket__left__info__departure">{{ item.flight.departure }}</div>
              <div class="tieket__left__info__destination">{{ item.flight.destination }}</div>
            </div>
          </div>
          <div class="tieket__left__info__bottom">
            <div>
              <div class="weight">Date</div>
              <div>{{ item.date }}</div>
            </div>
            <div>
              <div class="weight">Departure</div>
              <div>{{ item.departureTime }}</div>
            </div>
            <div>
              <div class="weight">Passenger</div>
              <div>{{ item.passenger }}</div>
            </div>
            <div>
              <div class="weight">Gate/Seat</div>
              <div>{{ item.gateSeat }}</div>
            </div>
          </div>
        </div>
        <div class="tieket__doash">
          <div class="tieket__doash__top"></div>
          <div class="tieket__doash__bottom"></div>
        </div>
        <div class="tieket__right">
          <img :src="item.qrcode" alt="" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
  <TicketInfo :modal="showModal" @close="showModal = false" :data="data" />
  <Loading :loading="hideLoading" />
</template>

<style scoped lang="scss">
.tieket__bar {
  overflow: auto;
  height: 100vh;
}
.tieket {
  max-width: 48rem;
  display: flex;
  padding: 27px;

  &__info {
    display: flex;
    cursor: pointer;
  }

  &__info:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  &__left {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding: 1rem;
    background-color: aliceblue;

    &__info {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      padding: 10px 0;

      &__departure {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &__destination {
        font-size: 14px;
      }

      &__dotted {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      &__plane {
        display: flex;
        justify-content: center;
        align-items: center;

        &__icon {
          padding: 0 16px;

          display: flex;
        }
      }

      &__bottom {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
      }
    }
  }
  &__right {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: aliceblue;
    display: flex;
    align-items: center;

    img {
      // width: 300px;
      width: 147px;
    }
  }
  &__doash {
    border-style: dashed;
    border-width: 2px;
    position: relative;
    color: #f5eeee;

    &__top {
      position: absolute;
      border-radius: 9999px;
      width: 2rem;
      height: 2rem;
      background-color: var(--color-background);
      top: -1.25rem;
      right: -16px;
    }

    &__bottom {
      position: absolute;
      border-radius: 9999px;
      width: 2rem;
      height: 2rem;
      background-color: var(--color-background);
      bottom: -20px;
      right: -16px;
    }
  }
}

.border-dotted {
  border-style: dotted;
  width: 105px;
  height: 0px;
  border: 2px dashed black;
}

.weight {
  font-weight: 700;
  color: darkgray;
  font-size: 13px;
}
</style>
