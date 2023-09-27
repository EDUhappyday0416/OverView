import { defineStore } from 'pinia'
import { getForestInfo  ,getForestData , getMountainData ,getMountainRouteWeb ,getMonutainInfo,getMountainLocation} from '../api/forest'
export const useForestData = defineStore("forestData", {
    state: () => ({ 
        forestInfo: [],
        queryInfo:[],
        MountainLevel:[],
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
        async getQueryForest(Region,heigh,pagesize,type) {
            try {
                const { data } = await getForestData(Region,heigh,pagesize,type);
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
        },
        async getQueryMountainRouteWeb(name) {
            try {
                const { data } = await getMountainRouteWeb(name);
                return data
            } catch (error) {
                return Promise.reject(error.message);
            }
        },

        async getQueryMountainLocation() {
            try {
                const { data } = await getMountainLocation();
                return data
            } catch (error) {
                return Promise.reject(error.message);
            }
        },

        async getMonutainInfoLevel() {
            try {
                const { data } = await getMonutainInfo();
                this.MountainLevel = data;
                return data
            } catch (error) {
                return Promise.reject(error.message);
            }
        },

        
    }
});