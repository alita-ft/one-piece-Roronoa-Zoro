// app.js
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

      }
    });
  },
  globalData: {
    appid:'wx744dbc627bc27f3c',
    userInfo: {
      name:'',
      phone:'',
      code:'',
    }
  }
})
