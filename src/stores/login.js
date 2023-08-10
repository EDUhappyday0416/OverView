import { defineStore } from 'pinia'
import { register , login , profile} from '../api/login'
import Cookies from 'js-cookie';
import { useRouter, useRoute } from 'vue-router'
export const useLogin = defineStore('login' , {
    state: () => ({
        user: {},
        token: null,
        title: '',
        error: null,
        userInfo:[],
        // createUser:[]
    }),
    actions:{
        async registerUser(parmas) {
            try {
                // const { data } = await register(parmas)
                // this.token = data.token
                // return data
                const { data } = await register(parmas);
                return data
            } catch (error) {
                this.error = error
                return error
            }   
        },
        async loginUser (parmas) {
            try {
                const { data } = await login(parmas)
                this.token = data.access_token
                Cookies.set('token', data.access_token);
                return data
            } catch (error) {
                this.error = error
                return error
            }
        },
        async removeToken () {
            this.token = null;
            Cookies.remove('token');
        },
        async getUserData () {
            try {
                const { data } = await profile();
                this.userInfo = data;
                return data
            } catch (error) {
                console.log(error)
                // if (error.response.status !== 200) {
                //     // this.router.push({ name: 'login' }); 
                // }
                return Promise.reject(error.message);
            } 
        }

    }
})
