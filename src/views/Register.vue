<template>
  <div class="register">
    <div class="register__label">REGISTER ACCOUNT</div>
    <div class="register__form">
      <div class="register__email__label">Email</div>
      <div class="register__email">
        <input type="text" v-model="email" />
      </div>
    </div>
    <div class="register__form">
      <div class="register__password__label">Password</div>
      <div class="register__password">
        <input type="password" v-model="password" />
      </div>
    </div>
    <div class="register__form">
      <div class="register__password__label">name</div>
      <div class="register__password">
        <input type="text" v-model="name" />
      </div>
    </div>
    <div class="register__btn">
      <button @click="registerUser()">註冊</button>
    </div>
    <div class="register__goBtn" @click="goLogin()">已有帳號？</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useLogin } from '../stores/login'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const name = ref('')
const avatar = ref('https://api.lorem.space/image/face?w=640&h=480&r=867')

const password = ref('')
const loginStore = useLogin()

const registerUser = () => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    avatar: avatar.value
  }
  loginStore.registerUser(data).then((res) => {
    console.log(res)
    // router.push({ path: '/dashboard' })
  })
}

const goLogin = () => {
  router.push({ path: '/login' })
}
</script>

<style lang="scss" scoped>
input {
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
  font-size: 16px;
}
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 25px;

  &__goBtn {
    margin-top: 10px;
    text-align: right;
    cursor: pointer;
  }

  &__form {
    padding: 10px 0;
  }

  &__label {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }

  &__btn button {
    outline: none;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    text-transform: uppercase;
    cursor: pointer;
    background: aliceblue;
    color: #4285f4;
  }
}
</style>
