// pages/bindingInfo/index.js
const app = getApp()
import unitList from '../../utils/unitList'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    submit: true,
    submitType: 1,
    unitList,
    userID: '',
    userInfo: {}
  },
  onChange(e) {
    let { type } = e.currentTarget.dataset
    // type: unit、name、phoneNumber、code
    let detail = e.detail
    console.log(type, detail);
    this.data.userInfo[type] = detail
    // switch (type) {
    //   case 'unit':
    //     this.data.userInfo
    //     break;
    //   case 'name':
    //     break;
    //   case 'phoneNumber':
    //     break;
    //   case 'code':
    //     break;
    //   default:
    //     break;
    // }
  },
  handleSubmit(e) {
    let { type } = e.currentTarget.dataset
    // type:  edit 、 save
    switch (type) {
      case 'edit':
        this.setData({
          disabled: false,
          submitType: 2
        })
        break;
      case 'save':
        this.setData({
          disabled: true,
          submitType: 1
        })

        console.log(this.data.userInfo);
        break;

      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // from:detail 仅查看、 bindind 绑定、 list 可修改
    let { from, id } = options
    let userInfo = {
      name: '小强',
      phoneNumber: '12300001111',
      code: 'GH00001',
      unitValue: 1
    }

    switch (from) {
      case 'list':
        this.setData({
          userInfo
        })
        break;
      case 'detail':
        this.setData({
          userInfo,
          submit:false
        })
        break;
      case 'binding':
        this.setData({
          disabled:false,
          submitType:2
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