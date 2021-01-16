Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '支行1', value: 0 },
      { text: '支行2', value: 1 },
      { text: '支行3', value: 2 },
      { text: '支行4', value: 2 },
      { text: '支行5', value: 2 },
      { text: '支行6', value: 2 },
      { text: '支行7', value: 2 },
      { text: '支行8', value: 2 },
      { text: '支行9', value: 2 },
      { text: '支行10', value: 2 },
    ],
    latitude: 0,
    longitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
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