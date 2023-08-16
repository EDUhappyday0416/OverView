import axios from "axios";
import { merge } from "lodash-es"
import Cookies from 'js-cookie';
import { setLocal } from '../common/js/utils'
const HMACSHA256 = (stringToSign, secret) => "not_implemented"

// The header typically consists of two parts: 
// the type of the token, which is JWT, and the signing algorithm being used, 
// such as HMAC SHA256 or RSA.
const header = {
    "alg": "HS256",
    "typ": "JWT"
}
const encodedHeaders = btoa(JSON.stringify(header))


// The second part of the token is the payload, which contains the claims.
// Claims are statements about an entity (typically, the user) and 
// additional data. There are three types of claims: 
// registered, public, and private claims.
const claims = {
    "role": "admin"
}
const encodedPlayload = btoa(JSON.stringify(claims))


// create the signature part you have to take the encoded header, 
// the encoded payload, a secret, the algorithm specified in the header, 
// and sign that.
const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, "mysecret")
const encodedSignature = btoa(signature)

const refresh_fake_token = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
console.log(refresh_fake_token)

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
                        const refreshToken = Cookies.get('refreshToken') || sessionStorage.getItem("refresh_token") ;
                        const { data } = axios.post('https://api.escuelajs.co/api/v1/auth/refresh-token',{ refreshToken : refresh_token});
                        Cookies.set('token', data.access_token);
                        Cookies.set('refresh_token', data.refresh_token);
                        console.log(error.message);
                        alert('未授權請重新登入或重新註冊')
                        break;
                    case 401:
                        alert('拒絕訪問')
                        break;
                    // case 404:
                    //     console.log(error.message);
                    //     alert('資料來源不存在')
                    //     break;
                    case 500:
                        console.log(error.message);
                        alert('內部系統發生錯誤')
                        break;
                    default:
                        console.log(error.message);
                }
                if(typeof error.response.data !== 'object') {
                    alert('服务端异常！')
                    return Promise.reject(error)
                }

                if (error.response.resultCode !== 200) {
                    if (error.response.message) alert(error.response.message)
                    if (error.response.resultCode == 416) {
                        router.push({ path: '/login' })
                    }
                    if (error.response.data && window.location.hash == '#/login') {
                        setLocal('token', error.response.data)
                        axios.defaults.headers['token'] = error.response.data
                    }
                    return Promise.reject(error.response)
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
