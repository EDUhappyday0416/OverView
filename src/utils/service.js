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
                        alert("token 無效");
                        console.log(error.message);
                        break;
                    case 404:
                        alert("頁面不存在");
                        console.log(error.message);
                        break;
                    case 500:
                        alert("程式發生問題");
                        console.log(error.message);
                        break;
                    default:
                        alert("程式發生問題");
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
