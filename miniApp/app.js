// app.js
import { getUserInfo1, getUserInfo2 } from './utils/api'
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        //请求自己后台获取用户openid
        // wx.setStorageSync('openId', openId);
        let data = {
          appid: this.globalData.appid,
          code: res.code,
        }
        this.globalData.userInfo = {}
        // getUserInfo1().then(res => {
        //   this.globalData.userInfo = res.data.userInfo
        // })
      }
    });
  },
  globalData: {
    appid: 'wx744dbc627bc27f3c',
    userInfo: {
      userId: '',
      userName: '',
      bankId: '',
      phone: '',
      jobNumber: '',
    }
  }
})
