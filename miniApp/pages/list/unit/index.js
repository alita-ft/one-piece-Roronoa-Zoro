// pages/list/unit/index.js
import unitList from '../../../utils/unitList'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unitList,
    type: ''
  },

  cellClk(e){
    console.log(e);
    let bankId = e.currentTarget.dataset.id
    // /pages/list/detail-list/index?bankId={{item.value}}&type={{type}}
    console.log(this.data.type);
    switch (this.data.type) {
      case 'export':
        
        break;
    
      default:
        wx.navigateTo({
          url: `/pages/list/detail-list/index?bankId=${bankId}&type=${this.data.type}`,
        })
        break;
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      type: options.type
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