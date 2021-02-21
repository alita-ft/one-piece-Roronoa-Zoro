
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js')
import { addVisit, delVisit, visitDetail } from '../../utils/api'
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
    id: '',
    disabled: false,
    submitText: '修改记录',
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
    },
  },

  inputChange(e) {
    let { type } = e.currentTarget.dataset
    let { value } = e.detail
    this.data.form[type] = value
  },
  starChange(e) {
    this.data.form.star = e.detail
  },

  checkProduct(e) {
    if (this.data.disabled) {
      return
    }
    let { id, checked } = e.currentTarget.dataset
    let index = this.data.products.findIndex(v => id == v.value)
    this.data.products[index].checked = !checked
    this.setData({
      products: this.data.products
    })
  },
  del() {
    wx.showModal({
      title: '提示',
      content: '确定要删除本条记录吗？',
      success: (r) => {
        if (r.confirm) {
          delVisit(this.data.id).then(res => {
            if (res.data.status != 10000) {
              wx.showToast({
                title: res.data.msg,
                icon: 'none'
              })
              return
            }
            wx.showToast({
              title: res.data.msg,
            })
            var pages = getCurrentPages();
            if (pages.length > 1) {
              //上一个页面实例对象 
              var prePage = pages[pages.length - 2];
              //关键在这里,这里面是触发上个界面的方法 
              prePage.getVisitList() // 123
            }
            wx.navigateBack()
          })
        }
      }
    })

  },
  submit() {

    if (this.data.id && this.data.disabled) {
      this.setData({
        disabled: false,
        submitText: '保存记录'
      })
      wx.pageScrollTo({
        scrollTop: 0
      })
      return
    }

    let checnkedList = []
    this.data.products.forEach(v => {
      if (v.checked) {
        checnkedList.push(v.value)
      }
    })
    let productId = checnkedList.join(',')
    let data = this.data.id ? {
      recordId: this.data.id,
      openId: app.globalData.openId,
      ...this.data.form,
      productId
    } : {
        openId: app.globalData.openId,
        ...this.data.form,
        productId
      }
    if (!data.vistAddress) {
      this.getLocation()
    }
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
      if (res.data.status != 10000) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
        return
      }
      wx.showToast({
        title: res.data.msg,
      })
      if (this.data.id) {
        var pages = getCurrentPages();
        if (pages.length > 1) {
          //上一个页面实例对象 
          var prePage = pages[pages.length - 2];
          //关键在这里,这里面是触发上个界面的方法 
          prePage.getVisitList() // 123
        }
      }
      wx.navigateBack()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { id } = options
    if (id) {
      visitDetail(id).then(res => {
        let form = res.data.data
        let productId = res.data.data.productId.split(',')
        this.data.products.forEach((v1, index) => {
          productId.forEach(v2 => {
            if (v1.value == v2) {
              this.data.products[index].checked = true
            }
          })
        })
        this.setData({
          id,
          disabled: true,
          form,
          products: this.data.products
        })
      })
    } else {
      this.getLocation()
      /* wx.getLocation({
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
      }) */
    }
  },
  getLocation() {
    wx.getLocation({
      isHighAccuracy: true,
      type: 'gcj02',
      success: (res) => {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: (res2) => {
            console.log(res.longitude,res.latitude);
            console.log(res);
            this.setData({
              ['form.vistAddress']: res2.result.address,
              ['form.lng']: res.longitude,
              ['form.lat']: res.latitude,
            })
          }
        })
      },
      fail: () => {
        wx.showModal({
          title: '提示',
          content: '请先进行位置授权',
          showCancel: false,
          success: (res) => {
            if (res.confirm) {
              wx.openSetting({
                success: () => {
                  this.getLocation()
                }
              })
            }
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