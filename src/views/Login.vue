<template>
  <div class="login">
    <div class="login__label">LOGIN ACCOUNT</div>
    <div class="login__form">
      <div class="login__email__label">Email</div>
      <div class="login__email">
        <input type="text" v-model="email" />
      </div>
    </div>
    <div class="login__form">
      <div class="login__password__label">Password</div>
      <div class="login__password">
        <input type="password" v-model="password" />
      </div>
    </div>
    <div class="login__btn">
      <button @click="loginUser()">登入</button>
    </div>
    <div class="login__goBtn" @click="goRegister()">尚未註冊?</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useLogin } from '../stores/login'
import { useRouter , useRoute} from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const loginStore = useLogin()

const loginUser = () => {
  const data = {
    email: email.value,
    password: password.value
  }
  console.log(loginStore)
  loginStore.loginUser(data).then((response) => {
    if (response.access_token) {
      router.push({ path: '/dashboard' })
    }
  })
  // loginStore.loginUser(data , loggedIn => {
  //   if (!loggedIn) {
  //     alert('登入失敗')
  //   }else{
  //     router.replace(route.query.redirect || '/dashboard')
  //   }
  // })
}

const goRegister = () => {
  router.push({ path: '/register' })
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
}
.login {
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
