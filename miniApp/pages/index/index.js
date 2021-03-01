const app = getApp()
import { login, getUserInfo } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      { url: '/imgs/banner/banner1.jpg' },
      { url: '/imgs/banner/banner2.jpg' },
      { url: '/imgs/banner/banner3.jpg' },
      { url: '/imgs/banner/banner4.jpg' },
    ],
    list: {
      line1: [
        { needBind: true, type: "add", img: '/imgs/list/img1.png', name: '走访录入', bgc: '#D0E073' },
        { needBind: true, type: "form", img: '/imgs/list/img2.png', name: '走访列表', bgc: '#37C2FF' }
      ],
      line2: [
        { needBind: true, type: "export", img: '/imgs/list/img3.png', name: '走访导出', bgc: '#FE8419' },
        { needBind: true, type: "user", img: '/imgs/list/img4.png', name: '用户管理', bgc: '#FFB36E' }
      ]
    },
    userInfo: {}
  },

  checkType(e) {
    let { type, needbind } = e.currentTarget.dataset
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
    if (type == 'user' && app.globalData.userInfo.role == 0) {
      wx.showToast({
        title: '没有权限访问',
        icon: 'none'
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

        // wx.navigateTo({
        //   url: `/pages/list/detail-list/index?bankName=走访列表&type=form`,
        // })
        break;
      // 添加记录
      case 'add':
        wx.navigateTo({
          url: '/pages/form/index?type=add',
        })
        break;
      // 导出记录
      case 'export':

        let url = "https://www.wxinlu.com/crm/api/visit/record/list/download"
        if (app.globalData.userInfo.role == 1) {
          url = url + `?bankId=${app.globalData.userInfo.bankId}`
        } else if (app.globalData.userInfo.role == 0) {
          url = url + `?userId=${app.globalData.userInfo.id}`
        }
        console.log(app.globalData.userInfo);

        wx.showModal({
          title: '提示',
          // content: `https://www.wxinlu.com/crm/api/visit/record/list/download?openId=${app.globalData.openId}`,
          content: '请复制地址到浏览器下载',
          confirmText: '复制',
          success(res) {
            if (res.confirm) {
              wx.setClipboardData({
                data: url,
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
    console.log('onLoad');
    console.log(app.globalData.userInfo);
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
    console.log(1);
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