// app.js
import {
  login,
  bankListApi,
  getUserInfo
  
} from './utils/api'
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        //请求自己后台获取用户openid
        // wx.setStorageSync('openId', openId);
        let data = {
          code: res.code,
        }
        console.log(res.code);
        login(data).then(res2 => {
          this.globalData.openid = res2.data.data.openId
          // this.globalData.userInfo = res2.data.userInfo
        }).then(()=>{
          getUserInfo(this.globalData.openid).then(res2=>{
            this.globalData.userInfo = res2.data.data
          })
        })
      }
    });
    bankListApi().then(res => {
      this.globalData.bankList = res.data.data
    })
  },
  globalData: {
    appid: 'wx10dd4e7d1a98bc4f',
    bankList:[],
    userInfo: {
      userId: '',
      userName: '',
      bankId: '',
      phone: '',
      jobNumber: '',
    },
    openid: ''
  }
})