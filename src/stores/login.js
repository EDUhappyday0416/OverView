import { defineStore } from 'pinia'
import { register , login } from '../api/login'
import Cookies from 'js-cookie';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
export const useLogin = defineStore('login' , {
    state: () => ({
        user: {},
        token: null,
        title: '',
        error: null
    }),
    actions:{
        async registerUser(parmas) {
            try {
                const { data } = await register(parmas)
                this.token = data.token

            } catch (error) {
                this.error = error
                return error
            }
        },
        async loginUser (parmas) {
            try {
                const { data } = await login(parmas)
                this.token = data.token
                Cookies.set('token', data.token);
                return data
            } catch (error) {
                this.error = error
                return error
            }
        },
        async removeToken () {
            this.token = null;
            Cookies.remove('token');
        }

    }
})
