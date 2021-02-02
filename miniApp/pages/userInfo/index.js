// pages/bindingInfo/index.js
const app = getApp()
import unitList from '../../utils/unitList'
import { binding } from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: '',
    userId: '',
    addType: 'user',

    disabled: true,
    showSubmit: true,
    submitText: '修改信息',
    unitList,
    userInfo: {}
  },
  onChange(e) {
    let { type } = e.currentTarget.dataset
    let detail = e.detail
    console.log(type, detail);
    this.data.userInfo[type] = detail
  },
  handleSubmit() {
    switch (this.data.from) {
      case 'binding':
        let data = { ...this.data.userInfo, openid: app.globalData.openid }
        binding(data).then(res => {
          console.log(res);
          if (res.data.code == 0) {
            app.globalData.userInfo = res.data.userInfo
            wx.showToast({
              title: '绑定成功',
              icon: 'success',
              duration: 1500,
              success: () => {
                setTimeout(() => {
                  wx.navigateBack()
                }, 1500)
              }
            })
          }
        })
        break;
      case 'edit':

        if (this.data.disabled) {
          this.setData({
            disabled: false,
            submitText: '保存',
          })
          console.log(this.data.userId, this.data.userInfo);
        } else {
          console.log(this.data.userId, this.data.userInfo);
          var pages = getCurrentPages();
          if (pages.length > 1) {
            //上一个页面实例对象 
            var prePage = pages[pages.length - 2];
            //关键在这里,这里面是触发上个界面的方法 
            prePage.getList() // 123
          }
        }
        break;
      default:
        break;
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // from:detail 仅查看、 bindind 绑定、 edit 可修改、 add 新增
    console.log(app.globalData.userInfo);
    console.log(options);

    let { from, userId } = options
    this.data.userId = userId

    switch (from) {
      case 'edit':
        wx.setNavigationBarTitle({
          title: '用户信息',
        })
        // userInfoById({ userId }).then(res => {
        //   this.setData({
        //     userInfo: res.data.userInfo,
        //     from,
        //     disabled: true,
        //     showSubmit: true,
        //     submitText: '修改信息',
        //   })
        // })
        this.setData({
          userInfo: { userName: '小强', phone: '12300000000', jobNumber: '0001' },
          from,
          disabled: true,
          showSubmit: true,
          submitText: '修改信息',
        })

        break;

      case 'add':
        wx.setNavigationBarTitle({
          title: '添加用户',
        })
        this.setData({
          from,
          disabled: false,
          showSubmit: true,
          submitText: '添加',
        })
        break;

      case 'binding':
        wx.setNavigationBarTitle({
          title: '绑定用户',
        })
        this.setData({
          from,
          disabled: false,
          submitText: '绑定信息'
        })
        break;

      case 'detail':
        wx.setNavigationBarTitle({
          title: '用户信息',
        })
        this.setData({
          from,
          disabled: true,
          showSubmit: false,
          userInfo: app.globalData.userInfo,
        })
        break;

      default:
        break;
    }
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