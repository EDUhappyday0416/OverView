import { defineStore } from 'pinia'
import { getForestInfo  ,getForestData , getMountainData} from '../api/forest'
export const useForestData = defineStore("forestData", {
    state: () => ({ 
        forestInfo: [],
        queryInfo:[],
        MountainData:[]
    }),
    getters: {},
    actions: {
        async getForestInfoMethod(startDate,endDate) {
            try {
                const { data } = await getForestInfo(startDate,endDate);
                console.log(data)
                this.forestInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        },
        async getQueryForest(Region,heigh) {
            try {
                const { data } = await getForestData(Region,heigh);
                this.queryInfo = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        },
        async getQueryMountainData() {
            try {
                const { data } = await getMountainData();
                this.MountainData = data;
                return data
                
            } catch (error) {
                return Promise.reject(error.message);
            }
        }

    }
});