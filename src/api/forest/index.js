import axios from "axios";

export async function getForstInfo() {
    return axios({
        url: "https://recreation.forest.gov.tw/mis/api/news?startDate=2023-01-01&endDate=2023-06-30",
        // url:"https://recreation.forest.gov.tw/mis/api/eventInfo?annDate=2019/01/01&deleDate=2019/02/26",
        method: "get",
    })
}

export async function getForstQuery(Region,Typ,heigh) {
    return axios({
        url: `https://recreation.forest.gov.tw/Forest/QueryForest?Region=${Region}&Typ=${Typ}&Keyword=&Height=${heigh}&IsOpen=open&Traffic=&RT_Length=&RT_Time=&sort=&PageIndex=0&PageSize=36&topic=`,
        method: "get",
    })
}

export async function getForstData() {
    return axios({
        url: `http://127.0.0.1:8080/api/insert_forest_data/`,
        method: "get",
    })
}


