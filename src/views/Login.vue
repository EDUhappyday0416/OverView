<template>

    <div>
        Login 
        信箱 <input v-model="email" />
        密碼 <input v-model="password" />
        <button @click="loginUser()"> 登入 </button>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { useLogin } from '../stores/login'
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref('eve.holt@reqres.in')
const password = ref('cityslicka')
const loginStore = useLogin()

const loginUser = () => {
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(loginStore)
    loginStore.loginUser(data).then(response => {
        if(response.token) { // 或其他判斷token的方法
            router.push({ path: '/about' }); 
        }
    });
}


</script>
