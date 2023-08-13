import { request } from "../../utils/service"

export async function register(data) {
    return request({
        url: "users",
        method: "post",
        data
    })
}

export async function login(data) {
    return request({
        url: "auth/login",
        method: "post",
        data
    })
}

export async function profile () {
    return request({
        url: "auth/profile",
        method: "get",
    })
}

export async function getNewToken (data) {
    return request({
        url: "auth/refresh-token",
        method: "post",
        data
    })
}



// export async function createUser (data) {
//     return request({
//         url: "users",
//         method: "POST",
//     })
// }