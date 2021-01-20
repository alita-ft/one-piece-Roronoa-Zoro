// app.js
App({
  onLaunch() {

    wx.request({
      url: 'http://101.37.65.155/api/sabo/wx/hello',
      success:(res)=>{
        console.log();
        
      }
    })
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
