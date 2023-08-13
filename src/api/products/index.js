import axios from "axios";

export async function products() {
    return axios({
        url: "https://fakestoreapi.com/products",
        method: "get",
    })
}