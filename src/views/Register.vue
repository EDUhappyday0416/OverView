<template>

    <div>
        REGISTER 
        信箱 <input v-model="email" />
        密碼 <input v-model="password" />


        <button @click="registerUser()"> 登入 </button>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { useLogin } from '../stores/login'
const email = ref('eve.holt@reqres.in')
const password = ref('pistol')
const loginStore = useLogin()

const registerUser = () => {
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(loginStore)
    loginStore.registerUser(data).then(response => {
        console.log(response);
    });
}


</script>
