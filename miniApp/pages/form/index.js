
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
import { addVisit,visitDetail } from '../../utils/api'
import { testPhone } from '../../utils/util'
var qqmapsdk = new QQMapWX({
  key: 'VO7BZ-HGACJ-MWJFN-KYUZZ-HGXGF-CGBAW'
});
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    disabled:false,
    products: [
      { value: 1, text: '个人储蓄', checked: false },
      { value: 2, text: '个人理财', checked: false },
      { value: 3, text: '基金', checked: false },
      { value: 4, text: '保险', checked: false },
      { value: 5, text: '贵金属', checked: false },
      { value: 6, text: '手机银行', checked: false },
      { value: 7, text: '个人网银', checked: false },
      { value: 8, text: '企业银行', checked: false },
      { value: 9, text: '聚合支付', checked: false },
      { value: 10, text: '消费贷', checked: false },
      { value: 11, text: '经营贷', checked: false },
      { value: 12, text: '对公存款', checked: false }
    ],
    form: {
      merchantName: '',
      merchantOwnerPhone: '',
      productId: '',
      lng: '',
      lat: '',
      vistAddress: '',
      star: 1
    }
  },

  inputChange(e) {
    let { type } = e.currentTarget.dataset
    let { value } = e.detail
    this.data.form[type] = value
  },

  checkProduct(e) {
    if(this.data.id){
      return
    }
    let { id, checked } = e.currentTarget.dataset
    let index = this.data.products.findIndex(v => id == v.value)
    this.data.products[index].checked = !checked
    this.setData({
      products: this.data.products
    })
  },
  submit() {
    let checnkedList = []
    this.data.products.forEach(v => {
      if (v.checked) {
        checnkedList.push(v.value)
      }
    })
    let productId = checnkedList.join(',')
    let data = {
      openId: app.globalData.openId,
      ...this.data.form,
      productId
    }
    console.log(data);
    if (!(data.vistAddress && data.merchantName && data.merchantOwnerPhone && data.merchantOwnerName && data.productId && data.remark && data.star)) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }
    if (!testPhone(data.merchantOwnerPhone)) {
      wx.showToast({
        title: '手机号码格式错误',
        icon: 'none'
      })
      return
    }
    addVisit(data).then(res => {
      console.log(res);
      if(res.data.status != 10000){
        wx.showToast({
          title: '提交失败',
          icon:'none'
        })
        return
      }
      wx.showToast({
        title: res.data.msg,
      })
      wx.navigateBack()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id } = options

    if (id) {
      visitDetail(id).then(res=>{
        let form = res.data.data
        let productId = res.data.data.productId.split(',')
        this.data.products.forEach((v1,index)=>{
          productId.forEach(v2=>{
            if(v1.value == v2){
              this.data.products[index].checked = true
            }
          })
        })
        this.setData({
          id,
          disabled:true,
          form,
          products:this.data.products
        })

        
      })
    } else {
      wx.getLocation({
        success: (res) => {
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: (res2) => {
              this.setData({
                ['form.vistAddress']: res2.result.address,
                ['form.lng']: res.longitude,
                ['form.lat']: res.latitude,
              })
            }
          })
        }
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