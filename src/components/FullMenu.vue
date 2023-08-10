<template>
  <div class="overlay" v-if="openMenu">
    <div class="overlay__close" @click="close">
      <div>X</div>
    </div>
    <div @click="goPath('dashboard')">Dashboard</div>
    <div @click="goPath('about')">Item</div>
    <div @click="goPath('message')">Message</div>
    <div @click="logout">登出</div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { openMenu } = defineProps(['openMenu'])
const emit = defineEmits(['update:openMenu'])
import { useLogin } from '../stores/login'
const storeLogout = useLogin()

const close = () => {
  emit('update:openMenu', false)
}
const logout = () => {
  storeLogout.removeToken()
  router.push(`/login`)
}
const goPath = (path) => {
  emit('update:openMenu', false)
  router.push({ name: path })
}
</script>
<style lang="scss" scoped>
.overlay {
  position: absolute;
  height: 100vh;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  padding: 10px 0;
  color: black;
  text-align: center;
  font-size: 35px;
  z-index: 100;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  color: #818181;
  flex-direction: column;
  cursor: pointer;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
