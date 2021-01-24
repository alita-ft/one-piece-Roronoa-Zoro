// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'user',
    bankId: ''
  },

  toDetail() {
    if (this.data.type == 'user') {
      wx.navigateTo({
        url: '/pages/userInfo/index?userId=1&from=edit',
      })
    } else if (this.data.type == 'form') {
      wx.navigateTo({
        url: '/pages/form/index?id=1',
      })
    }
  },
  addUser(e) {
    let { addtype } = e.currentTarget.dataset

    wx.navigateTo({
      url: `/pages/userInfo/index?from=add&addtype=${addtype}`,
    })
  },
  getList() {
    console.log('list');

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { bankId, type } = options
    // type：user 、 form
    wx.setNavigationBarTitle({
      title: type == 'user' ? '用户列表' : '拜访列表'
    })
    this.setData({
      type,
      bankId
    })
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