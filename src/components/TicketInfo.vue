<template>
  <div class="modal" v-if="modal">
    <!-- <div class="modal__info">
      <button @click="close">關閉</button>
      <p>Some text in the Modal..</p>
    </div> -->
    <div class="modal__info">
      <button @click="close">關閉</button>
      <div class="modal__top">
        <div class="modal__top__info">
          <div class="modal__top__line"></div>
          <div class="modal__top__flight">
            <div class="modal__top__flight__left">{{ data.flight.departure }}</div>
            <div>to</div>
            <div class="modal__top__flight__right">{{ data.flight.destination }}</div>
          </div>
          <div class="modal__top__line"></div>
        </div>
        <div class="modal__top__info__bar">
          <div class="modal__top__info__bar__left">
            <div>Passenger</div>
            <div>{{ data.passenger }}</div>
          </div>
          <div class="modal__top__info__bar__right">
            <div>Date</div>
            <div>{{ data.departureTime }}</div>
          </div>
        </div>
        <div class="modal__top__info__bar">
          <div class="modal__top__info__bar__left">
            <div>班機</div>
            <div>{{ data.flight.flightNumber }}</div>
          </div>
          <div class="modal__top__info__bar__right">
            <div>Gate/Seat</div>
            <div>{{ data.gateSeat }}</div>
          </div>
        </div>
      </div>
      <div class="modal__doash">
        <div class="modal__doash__top"></div>
        <div class="modal__doash__bottom"></div>
      </div>
      <div class="modal__bottom">
        <div>Qr Code</div>
        <div class="modal__bottom__qrcode">
          <img :src="data.qrcode" alt="" class="modal__bottom__qrcode__img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
const props = defineProps({
  modal: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object
  }
})
</script>
<style scoped lang="scss">
.modal {
  left: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  &__info {
    // background-color: white;
    // height: 70vh;
    // display: flex;
    // padding: 0 2rem;
    // max-width: 1280px;
    // margin: 0 auto;
    // padding: 2rem;
    // font-weight: normal;
    // width: 47rem;
    // align-items: center;
    // border-radius: 2%;
  }

  &__top {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem;
    background-color: white;
    width: 31em;

    &__info {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;

      &__bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.3rem;

        &__left {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 500px;
        }

        &__right {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 400px;
        }
      }
    }

    &__line {
      width: 100%;
      height: 0.3px;
      border-style: solid;
      border: 1px solid rgb(202, 202, 202);
    }

    &__flight {
      display: flex;
      width: 30vw;
      align-items: center;
      justify-content: space-around;

      &__left,
      &__right {
        font-size: 19px;
        text-align: center;
      }
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
      background-color: rgb(153 153 153);
      top: -1.25rem;
      right: -16px;
    }

    &__bottom {
      position: absolute;
      border-radius: 9999px;
      width: 2rem;
      height: 2rem;
      background-color: rgb(153 153 153);

      bottom: -15px;
      left: -16px;
    }
  }
  &__bottom {
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding: 1rem;
    background-color: white;
    width: 31em;

    &__qrcode {
      &__img {
        width: 100%;
        height: auto;
      }
    }
  }
  //   &__doash {
  //     border-style: dashed;
  //     border-width: 2px;
  //     position: relative;
  //     color: #f5eeee;
  //   }
}
</style>
