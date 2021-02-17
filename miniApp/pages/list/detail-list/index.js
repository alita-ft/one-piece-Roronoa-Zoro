// pages/list/index.js
const app = getApp()
import {
  editUser,
  userList
} from '../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'user',
    limit:100,//每页条数
    offset:0, //页码
    count:0,
    userList:[],

    bankId: '',
    bankName: '',
    userInfo: {}
  },


  toDetail(e) {
    if (this.data.type == 'user') {
      console.log(e.currentTarget.dataset);
      let {bankName,bankId,userName,id,phone,jobNumber,role} = e.currentTarget.dataset.userinfo
      // bankId\userName\phone\jobNumber
      
      wx.navigateTo({
        url: `/pages/userInfo/index?bankName=${this.data.bankName}&bankId=${bankId}&userName=${userName}&phone=${phone}&jobNumber=${jobNumber}&userId=${id}&from=edit&role=${role}`,
      })
    } else if (this.data.type == 'form') {
      wx.navigateTo({
        url: `/pages/form/index?bankName=${this.data.bankName}&id=1`,
      })
    }
  },
  addUser(e) {
    let {
      addtype
    } = e.currentTarget.dataset

    wx.navigateTo({
      url: `/pages/userInfo/index?bankName=${this.data.bankName}&bankId=${this.data.bankId}&from=add&addtype=${addtype}`,
    })
  },
  getUserList() {
    let data = {
      openId: app.globalData.openId,
      limit: this.data.limit, //pageSize
      offset: this.data.offset   // pageNumber
    }
    userList(data).then(res=>{
      this.data.userList = res.data.data.rows
      this.setData({
        count:res.data.data.count,
        userList:this.data.userList.concat(res.data.data.rows)
      })
      
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserList()
    console.log(app.globalData.userInfo);


    let {
      bankName,
      bankId,
      type
    } = options
    // type：user 、 form
    wx.setNavigationBarTitle({
      // title: type == 'user' ? '用户列表' : '拜访列表'
      title: bankName
    })
    this.setData({
      type,
      bankId,
      bankName,
      userInfo: app.globalData.userInfo
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