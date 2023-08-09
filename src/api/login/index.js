import { request } from "../../utils/service"

export async function register(data) {
    return request({
        url: "register",
        method: "post",
        data
    })
}

export async function login(data) {
    return request({
        url: "login",
        method: "post",
        data
    })
}

export async function profile () {
    return request({
        url: "profile",
        method: "get",
    })
}