import { defineStore } from 'pinia'
import { products } from '../api/products'
export const useProduct = defineStore("productData", {
    state: () => ({
        data:[]
    }),
    getters: {
       
    },
    actions: {
        async getProducts() {
            try {
                const item = await products();
                console.log(item)
                this.data = item.data
                return item.data
            } catch (error) {
                this.error = error
                return error
            }   
        },
    }
});