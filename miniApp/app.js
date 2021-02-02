// app.js
import { login } from './utils/api'
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
        login(data).then(res2=>{
          console.log(res2);
          this.globalData.openid = res2.data.openid
          this.globalData.userInfo = res2.data.userInfo
        })
      }
    });
  },
  globalData: {
    appid: 'wx10dd4e7d1a98bc4f',
    userInfo: {
      userId: '',
      userName: '',
      bankId: '',
      phone: '',
      jobNumber: '',
    },
    openid:''
  }
})
