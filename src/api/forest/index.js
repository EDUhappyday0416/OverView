import axios from "axios";

export async function getForestInfo(startDate,endDate) {
    return axios({
        url: `https://recreation.forest.gov.tw/mis/api/news?startDate=${startDate}&endDate=${endDate}`,
        method: "get",
    })
}

// export async function getForstQuery(Region,Typ,heigh) {
//     return axios({
//         url: `https://recreation.forest.gov.tw/Forest/QueryForest?Region=${Region}&Typ=${Typ}&Keyword=&Height=${heigh}&IsOpen=open&Traffic=&RT_Length=&RT_Time=&sort=&PageIndex=0&PageSize=36&topic=`,
//         method: "get",
//     })
// }

export async function getForestData(Region,heigh,pagesize,type) {
    //0,1,2,10,11,3,12
    console.log(pagesize)
    return axios({
        url: `http://127.0.0.1:8082/api/insert_forest_data?Region=${Region}&Typ=${type}&Keyword=&Height=${heigh}&IsOpen=&Traffic=&RT_Length=&RT_Time=&sort=&PageIndex=${pagesize}&PageSize=36&topic=`,
        // url: `http://127.0.0.1:8001/api/insert_forest_data?Region=${Region}&Typ=${type}&Keyword=&Height=${heigh}&IsOpen=&Traffic=&RT_Length=&RT_Time=&sort=&PageIndex=${pagesize}&PageSize=36&topic=`,
        method: "get",
    })
}

export async function getMountainData() {
    return axios({
        // url: `http://127.0.0.1:8001/api/getMountainData/`,
        // url:`http://172.104.86.216:8000/api/getMountainData/`
        url:`https://frances.sinami.com/api/getMountainData/`
    })
}


