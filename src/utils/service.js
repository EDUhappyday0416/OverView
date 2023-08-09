
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
            // baseURL: 'https://reqres.in/api/',
            baseURL: 'https://api.escuelajs.co/api/v1/auth/',
            data: {}
        };
        const mergeConfig = merge(defaultConfig, config);
        return service(mergeConfig);
    };
}
export const request = createRequest(axios)