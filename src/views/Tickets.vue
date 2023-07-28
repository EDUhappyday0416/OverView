<script setup></script>

<template>
  <div class="tieket">
    <div class="tieket__left">
      <div></div>
      <div class="tieket__left__info">
        <div>
          <div>BNE</div>
          <div>Brisbane</div>
        </div>
        <div class="tieket__left__info__dotted">
          <div class="border-dotted"></div>
          <div class="">></div>
          <div class="border-dotted"></div>
        </div>
        <div>
          <div>BNE</div>
          <div>Brisbane</div>
        </div>
      </div>
    </div>
    <div class="tieket__doash">
      <div class="tieket__doash__top"></div>
      <div class="tieket__doash__bottom"></div>
    </div>
    <div class="tieket__right">ssssssss</div>
  </div>
</template>

<style scoped lang="scss">
.tieket {
  max-width: 48rem;
  display: flex;
  height: 11rem;
  color: red;
  &__left {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: aliceblue;
    width: 31em;

    &__info {
      display: flex;

      &__dotted {
        display: flex;
        align-items: center;
      }
    }
  }
  &__right {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: aliceblue;
  }
  &__doash {
    border-style: dashed;
    border-width: 2px;
    position: relative;
    color: white;

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
</style>
