import { defineStore } from 'pinia'
import { products } from '../api/products'
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
                console.log(item)
                this.data = item.data
                return item.data
            } catch (error) {
                this.error = error
                return error
            }   
        },

        addItem(item) {
            this.rawItems.push(item)
        },
    }
});