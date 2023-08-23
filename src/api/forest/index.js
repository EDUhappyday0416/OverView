import axios from "axios";

export async function getForstInfo() {
    return axios({
        url: "https://recreation.forest.gov.tw/mis/api/news?startDate=2023-01-01&endDate=2023-06-30",
        // url:"https://recreation.forest.gov.tw/mis/api/eventInfo?annDate=2019/01/01&deleDate=2019/02/26",
        method: "get",
    })
}