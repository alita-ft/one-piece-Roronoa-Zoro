// pages/bindingInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1:[
      {text:'商品1',value:0},
      {text:'商品2',value:1},
      {text:'商品3',value:2},
      {text:'商品4',value:3},
      {text:'商品5',value:4},
      {text:'商品6',value:5},
    ],
    userInfo:{}
  },
  dropdownChange(e){
    console.log(e);
  },
  submit(){
    app.globalData.userInfo.name= 'qqwwee'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      this.setData({
      })
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