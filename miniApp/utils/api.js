import {
  get,
  post
} from "../utils/request";

// 获取银行列表
export const bankListApi = () => get(`/crm/api/bank/list`)

// 获取银行详情
export const bankDetailApi = (id) => get(`/crm/api/bank/detail/${id}`)

// 获取poenID
export const login = (data) => post(`/crm/api/user/login`, data)

// 用户信息绑定
export const binding = (data) => post(`/crm/api/user/auth`, data)

// 添加用户   /** role   普通用户0   二级支行管理员1   中心支行管理员2  
export const editUser = (data) => post(`/crm/api/manager/user/saveOrUpdate`, data)

// 查询用户信息 https://www.wxinlu.com/crm/api/manager/user/search/openId/oewuj4gr3uq-J5Pgloi1KWtux3WQ
export const getUserInfo = (openId) => get(`/crm/api/manager/user/search/openId/${openId}`)

