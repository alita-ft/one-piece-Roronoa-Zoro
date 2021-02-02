const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      // { url: '/imgs/banner/111.png' },
      { url: '/imgs/banner/222.jpg' },
      // { url: '/imgs/banner/333.jpg' },
    ],
    list: {
      line1: [
        { needBind: true, type: "add", img: 'form.png', name: '走访录入', bgc: '#D0E073' },
        { needBind: true, type: "form", img: 'report.png', name: '走访列表', bgc: '#37C2FF' },
        { needBind: true, type: "export", img: 'report.png', name: '走访导出', bgc: '#FE8419' },
        { needBind: true, type: "user", img: 'user.png', name: '用户管理', bgc: '#FFB36E' },
        // { needBind: true, type: "about", img: 'about.png', name: '关于我们', bgc: '#FF99BB' },
      ],
      line2: [

        // { needBind: true, img: 'permissions.png', name: '权限管理', bgc: '#46DCE0' },
        // { needBind: true, img: 'user.png', name: '考试排名', bgc: '#FFAA5F' },
      ]
    }
  },

  checkType(e) {
    let { type, needbind } = e.currentTarget.dataset
    console.log(needbind,app.globalData.userInfo);
    if (needbind && !app.globalData.userInfo.userName) {
      wx.showModal({
        title: '提示',
        content: '您还为绑定个人信息，请到【我的】-【信息认证】进行绑定',
        showCancel: false,
        confirmText: '确定',
        success: (result) => { },
        fail: (res) => { },
        complete: (res) => { },
      })
      return
    }

    switch (type) {
      // 查看人员
      case 'user':
        wx.navigateTo({
          url: '/pages/list/unit/index?type=user',
        })
        break;
      // 查看记录
      case 'form':
        wx.navigateTo({
          url: '/pages/list/unit/index?type=form',
        })
        break;
      // 添加记录
      case 'add':
        wx.navigateTo({
          url: '/pages/form/index?type=add',
        })
        break;
      // 导出记录
      case 'export':
        wx.showModal({
          title: '提示',
          content: '下载链接：www.xxxx.com',
          confirmText: '复制',
          success(res) {
            if (res.confirm) {
              wx.setClipboardData({
                data: 'www.baidu.com',
              })
            }
          }
        })
        break;
      // 关于我们
      case 'about':

        break;

      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})