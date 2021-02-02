
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
import unitList from '../../utils/unitList'
var qqmapsdk = new QQMapWX({
  key: 'VO7BZ-HGACJ-MWJFN-KYUZZ-HGXGF-CGBAW'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: unitList,
    latitude: 0,
    longitude: 0,
    address: '',
    products: [
      { text: '个人储蓄', checked: true },
      { text: '个人理财', checked: false },
      { text: '基金', checked: false },
      { text: '保险', checked: false },
      { text: '贵金属', checked: false },
      { text: '手机银行', checked: false },
      { text: '个人网银', checked: false },
      { text: '企业银行', checked: false },
      { text: '聚合支付', checked: false },
      { text: '消费贷', checked: false },
      { text: '经营贷', checked: false },
      { text: '对公存款', checked: false }
    ]
  },


  checkProduct(e) {
    console.log(e.currentTarget.dataset);
    let { index, checked } = e.currentTarget.dataset
    this.data.products[index].checked = !checked
    this.setData({
      products: this.data.products
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let { type } = options
    // type: add 、 detail
    // if (type == 'add') {
    //   this.getLocation()
    // } else if (type == 'detail') {

    // }
    wx.getLocation({
      success: (res) => {

        console.log(res.latitude, res.longitude);

        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: (res2) => {
            console.log(res2.result.address);
            this.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              address: res2.result.address
            })
          }
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