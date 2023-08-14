import axios from "axios";
import { merge } from "lodash-es"
import Cookies from 'js-cookie';

function createRequest(service) {
    const instance = service.create();

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        //重新授權
                        const refreshToken = Cookies.get('refreshToken') || sessionStorage.getItem("refresh_token");
                        const { data } = axios.post('https://api.escuelajs.co/api/v1/auth/refresh-token', { refreshToken });
                        Cookies.set('token', data.access_token);
                        Cookies.set('refresh_token', data.refresh_token);
                        console.log(error.message);
                        alert('未授權請重新登入')
                        break;
                    case 401:
                        alert('拒絕訪問')
                        break;
                    case 404:
                        console.log(error.message);
                        alert('資料來源不存在')
                        break;
                    case 500:
                        console.log(error.message);
                        alert('內部系統發生錯誤')
                        break;
                    default:
                        console.log(error.message);
                }
            }
            if (!window.navigator.onLine) {
                alert("請重新連線後重整網頁");
                return;
            }
            return Promise.reject(error);
        },
    );

    return function(config) {
        const defaultConfig = {
            headers: {
                Authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : undefined,
                "Content-Type": "application/json"
            },
            timeout: 5000,
            baseURL: 'https://api.escuelajs.co/api/v1/',
            data: {}
        };
        const mergeConfig = merge(defaultConfig, config);
        return instance(mergeConfig);
    };
}

export const request = createRequest(axios);
