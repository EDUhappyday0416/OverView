import { defineStore } from 'pinia'
import { getForstInfo  } from '../api/forest'
export const useForstData = defineStore("forstData", {
    state: () => ({ 
        forstInfo: [],
     }),
    getters: {},
    actions: {
        async getForstInfoMethod() {
            try {
                const { data } = await getForstInfo();
                console.log(data)
                this.forstInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        }
    }
});