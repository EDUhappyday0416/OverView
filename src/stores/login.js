import { defineStore } from 'pinia'
import { register , login , profile} from '../api/login'
import { upImageLoad , getImageLoad } from '../api/upload'
import NProgress from 'nprogress'

import Cookies from 'js-cookie';
import { useRouter, useRoute } from 'vue-router'
NProgress.configure({ showSpinner: false })

export const useLogin = defineStore('login' , {
    state: () => ({
        user: {},
        token: null,
        title: '',
        error: null,
        userInfo:[],
        fileImg:'',
        refresh_token:null
        // createUser:[]
    }),
    actions:{
        async registerUser(params) {
            try {
                // const { data } = await register(params)
                // this.token = data.token
                // return data
                const { data } = await register(params);
                return data
            } catch (error) {
                this.error = error
                return error
            }   
        },
        async loginUser (params) {
            try {
                const { data } = await login(params)
                this.token = data.access_token;
                this.refresh_token = data.refresh_token
                Cookies.set('token', data.access_token);
                Cookies.set('refresh_token', data.refresh_token);
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
                return Promise.reject(error.message);
            } 
        },
        async upDateImages (file) {
            try {
                NProgress.start()
                const { data } = await upImageLoad(file);
                this.fileImg = data;
                NProgress.done()
                return data
            } catch (error) {
                NProgress.done()
                return Promise.reject(error.message);
            } 
        },
        async getImg (file) {
            try {
                const response = await getImageLoad(file);
                    if (response.data) {
                    const blob = new Blob([response.data], { type: 'image/png' }); // Assuming it's always a WebP format
                    this.fileImg = blob;
                }
                NProgress.done();
                return this.fileImg;
            } catch (error) {
                console.log(error)
                NProgress.done()
                return Promise.reject(error.message);
            } 
        }

    }
})
