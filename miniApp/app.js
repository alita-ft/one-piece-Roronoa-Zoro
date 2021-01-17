// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        //请求自己后台获取用户openid
        console.log(res);
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
    userInfo: null
  }
})
