import Cookies from "js-cookie";


export const TOKEN_NAME = 'ONE_PIECE_TOKEN'

export const setToken = (token) => {
    Cookies.set(TOKEN_NAME, token, { expires: 3 })
}

export const getToken = () => {
    return Cookies.get(TOKEN_NAME)
}

export const removeToken = () => {
    Cookies.removeItem(TOKEN_NAME)
}

export const logined = () => {
    return Cookies.get(TOKEN_NAME) ? true : false
}