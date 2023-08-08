// import axios from 'axios'
// axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://reqres.in/api/'
// axios.interceptors.request.use(
//     (config) => config,
//     (error) => Promise.reject(error)
//     // config => {
//     //     if (store.state.token) {
//     //         config.headers.Authorization = `token ${store.state.token}`
//     //     }
//     //     return config
//     // },
//     // err => {
//     //     return Promise.reject(err)
//     // },
// )
// axios.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         if (error.response) {
//         switch (error.response.status) {
//             case 401:
//             router.currentRoute.path !== 'login' &&
//             router.replace({
//                 path: 'login',
//                 query: { redirect: router.currentRoute.path },
//             })
//         }
//     }
//         return Promise.reject(error.response.data)
//     },
// )

import axios from "axios";
// import { getToken } from '../utils/cookie'
import { merge } from "lodash-es"
import Cookies from 'js-cookie';
// export default axios
function createRequest(service) {
    return function(config) {
        // const token = getToken();
        const defaultConfig = {
            headers: {
            // Carry Token
                Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : undefined,
                "Content-Type": "application/json"
            },
            timeout: 5000,
            // baseURL: import.meta.env.VITE_BASE_API,
            baseURL: 'https://reqres.in/api/',
            data: {}
        };
        const mergeConfig = merge(defaultConfig, config);
        return service(mergeConfig);
    };
}
export const request = createRequest(axios)