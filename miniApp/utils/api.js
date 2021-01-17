import {
  get,
  post
} from "../utils/request";

export const apiGetMajorClassList = (data) => post(`/major/getMajorClassList`, data)
export const apiGetMajorSubjectList = (data) => post(`/major/getMajorSubjectList`, data)
export const apiGetMajorMajorLibraryList = (data) => post(`/major/getMajorLibraryList`, data)
// 获取poenID
export const getOpenId = (data) => get(`/wx/user/login`, data)
//保存用户基本信息
export const saveUserInfo = (data) => post(`/userinfo/saveUser`, data)
//查询用户基本信息
export const getUserInfo = (data) => get(`/userinfo/getUser`, data)
//修改用户基本信息
export const updateUserInfo = (data) => post(`/userinfo/updateUser`, data)
//查询择校记录
export const apiGetRecord = (data) => get(`/userinfo/getChoiceRecordByOpenid`, data)
//择校记录详情
export const apiGetRecordDetail = (data) => get(`/userinfo/getChoiceRecordById`, data)
// 发送验证码
export const apiSendCode = (data) => get(`/verifyCode/send`, data)