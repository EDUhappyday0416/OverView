import { defineStore } from 'pinia'
import { products } from '../api/products'
import NProgress from "nprogress"
import "nprogress/nprogress.css"

export const useProduct = defineStore("productData", {
    state: () => ({
        data:[],
        rawItems:[]
    }),
    getters: {
        doubleCount: (state) => state.rawItems.length
    },
    actions: {
        async getProducts() {
            try {
                const item = await products();
                NProgress.start();
                this.data = item.data
                NProgress.done();

                return item.data
            } catch (error) {
                this.error = error
                return error
            }   
        },

        addItem(item) {
            this.rawItems.push(item)
        },
    },
    persist: {
        enabled: true,
        strategies:[
            { storage : localStorage, paths : ['doubleCount'] }
        ]
    }
});