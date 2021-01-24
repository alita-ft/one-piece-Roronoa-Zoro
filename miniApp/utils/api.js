import {
  get,
  post
} from "../utils/request";

// 获取poenID
export const getOpenId = (data) => post(`/sabo/api/user/login`, data)

export const getUserInfo1 = () => get(`/userInfo1`)
export const getUserInfo2 = (data) => get(`/userInfo2`,data)
export const userInfoById = (data) => get(`/userInfoById`,data)

//保存用户基本信息
export const saveUserInfo = (data) => post(`/userinfo/saveUser`, data)

//查询用户基本信息
// export const getUserInfo = (data) => get(`/userinfo/getUser`, data)
//修改用户基本信息
export const updateUserInfo = (data) => post(`/userinfo/updateUser`, data)
//查询择校记录
export const apiGetRecord = (data) => get(`/userinfo/getChoiceRecordByOpenid`, data)
//择校记录详情
export const apiGetRecordDetail = (data) => get(`/userinfo/getChoiceRecordById`, data)
// 发送验证码
export const apiSendCode = (data) => get(`/verifyCode/send`, data)