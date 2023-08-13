import { request } from "../../utils/service"

export async function upImageLoad(file) {
    let formData = new FormData();
    formData.append('file', file);
    return request({
        url: "files/upload",
        method: "post",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export async function getImageLoad(fileName) {
    return request({
        url: `files/${fileName}`,
        method: "get",
        responseType: 'blob'
    })
}