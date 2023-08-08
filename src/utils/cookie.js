import Cookies from "js-cookie"
import CacheKey from "../constants/cache-key"
export const getToken = () => {
    return Cookies.get(CacheKey.TOKEN)
}