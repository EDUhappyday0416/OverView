import { defineStore } from 'pinia'
import { getForstInfo  ,getForstQuery} from '../api/forest'
export const useForstData = defineStore("forstData", {
    state: () => ({ 
        forstInfo: [],
        queryInfo:[]
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
        },
        async getQueryForst(Region,Typ,heigh) {
            try {
                const { data } = await getForstQuery(Region,Typ,heigh);
                console.log(data)
                this.queryInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        }

    }
});