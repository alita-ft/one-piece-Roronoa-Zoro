
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
var qqmapsdk = new QQMapWX({
  key: 'X7QBZ-ORDCW-RXRRR-OQYBW-VKJ66-OKBWU'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '支行1', value: 0 },
      { text: '支行2', value: 1 },
      { text: '支行3', value: 2 },
      { text: '支行4', value: 3 },
      { text: '支行5', value: 4 },
      { text: '支行6', value: 5 },
      { text: '支行7', value: 6 },
      { text: '支行8', value: 7 },
      { text: '支行9', value: 8 },
      { text: '支行10', value: 9 },
    ],
    latitude: 0,
    longitude: 0,
    products: [
      { name: '个人储蓄', checked: true },
      { name: '个人理财', checked: false },
      { name: '基金', checked: false },
      { name: '保险', checked: false },
      { name: '贵金属', checked: false },
      { name: '手机银行', checked: false },
      { name: '个人网银', checked: false },
      { name: '企业银行', checked: false },
      { name: '聚合支付', checked: false },
      { name: '消费贷', checked: false },
      { name: '经营贷', checked: false },
      { name: '对公存款', checked: false }
    ]
  },


  checkProduct(e){
      console.log(e.currentTarget.dataset);
      let {index,checked} = e.currentTarget.dataset
      this.data.products[index].checked = !checked
      this.setData({
        products:this.data.products
      })
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
        console.log(res.latitude,res.longitude);

        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success:(res2)=>{
            console.log(res2);
          }
        }
          
        )
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