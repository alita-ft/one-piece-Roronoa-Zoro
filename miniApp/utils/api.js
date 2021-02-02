import {
  get,
  post
} from "../utils/request";

// 获取poenID
export const login = (data) => get(`/login`, data)
export const binding = (data) => post(`/binding`, data)
