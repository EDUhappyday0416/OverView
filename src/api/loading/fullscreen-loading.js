const SUCCESS_RESPONSE_DATA = {
    code: 0,
    data: {},
    message: "抓取成功"
}

/* 抓取成功 */
export function getSuccessApi () {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(SUCCESS_RESPONSE_DATA)
    }, 1000)
    })
}

/* 抓取失敗 */
export function getErrorApi() {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(new Error("抓取失敗"))
        }, 1000)
    })
}
