// pages/bindingInfo/index.js
const app = getApp()
import unitList from '../../utils/unitList'
import {
  binding,
  editUser,
  delUser
} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: '',
    userId: '',
    addType: 'user',
    bankId: '',
    role: 0,

    disabled: true,
    showSubmit: true,
    submitText: '修改信息',
    unitList,
    userInfo: {}
  },
  onChange(e) {
    let {
      type
    } = e.currentTarget.dataset
    let detail = e.detail
    console.log(type, detail);
    this.data.userInfo[type] = detail
  },
  handleSubmit() {
    let data = {}
    switch (this.data.from) {
      case 'binding':
        data = {
          ...this.data.userInfo,
          openId: app.globalData.openId
        }
        if(!data.jobNumber){
          wx.showToast({
            title: '请完善信息',
            icon:'none'
          })
          return
        }
        binding(data).then(res => {

          if (res.data.status != 10000) {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
            })
            return
          }

          app.globalData.userInfo = res.data.userInfo
          wx.showToast({
            title: '绑定成功',
            icon: 'success',
            duration: 1500,
            success: () => {
              setTimeout(() => {
                wx.navigateBack()
              }, 1500)
            }
          })
        })
        break;
      case 'edit':
        if (this.data.disabled) {
          this.setData({
            disabled: false,
            submitText: '保存',
          })
        } else {
          console.log(this.data.userId, this.data.userInfo);
          data = {
            ...this.data.userInfo,
            role: this.data.role,
            bankId: this.data.bankId,
            userId: this.data.userId
          }
          editUser(data).then(res => {
            wx.showToast({
              title: '成功',
            })
            setTimeout(() => {
              var pages = getCurrentPages();
              if (pages.length > 1) {
                //上一个页面实例对象 
                var prePage = pages[pages.length - 2];
                //关键在这里,这里面是触发上个界面的方法 
                prePage.getUserList() // 123
                wx.navigateBack()
              }
            }, 1500)

          })
        }
        break;

      case 'add':
        if (!(this.data.userInfo.userName && this.data.userInfo.phone && this.data.userInfo.jobNumber)) {
          wx.showToast({
            title: '请完善信息',
            icon: 'none'
          })
          return
        }
        data = {
          ...this.data.userInfo,
          role: this.data.addType == 'user' ? 0 : 1,
          bankId: this.data.bankId
        }

        editUser(data).then(res => {
          wx.showToast({
            title: '成功',
          })
          setTimeout(() => {
            var pages = getCurrentPages();
            if (pages.length > 1) {
              //上一个页面实例对象 
              var prePage = pages[pages.length - 2];
              //关键在这里,这里面是触发上个界面的方法 
              prePage.getUserList() // 123
              wx.navigateBack()
            }
          }, 1500)
        })
      default:
        break;
    }
  },
  delUser() {
    wx.showModal({
      title: '提示',
      content: '确定要删除该用户吗？',
      success: (res) => {
        if (res.confirm) {
          delUser(this.data.userId).then(() => {
            wx.showToast({
              title: '成功',
            })
            setTimeout(() => {
              var pages = getCurrentPages();
              if (pages.length > 1) {
                //上一个页面实例对象 
                var prePage = pages[pages.length - 2];
                //关键在这里,这里面是触发上个界面的方法 
                prePage.getUserList() // 123
                wx.navigateBack()
              }
            }, 1500)
          })
        } else if (res.cancel) {
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // from:detail 仅查看、 bindind 绑定、 edit 可修改、 add 新增
    console.log(app.globalData.userInfo);
    console.log(options);

    let {
      from,
      addtype,
      bankName,
      bankId,
      userId,
      userName,
      phone,
      jobNumber,
      role


    } = options
    this.setData({
      bankId,
      bankName,
      role,
      userId
    })
    this.data.addType = addtype

    switch (from) {
      case 'edit':
        wx.setNavigationBarTitle({
          title: '用户信息',
        })
        // userInfoById({ userId }).then(res => {
        //   this.setData({
        //     userInfo: res.data.userInfo,
        //     from,
        //     disable                                     d: true,
        //     showSubmit: true,
        //     submitText: '修改信息',
        //   })
        // })
        this.setData({
          userInfo: {
            userName,
            phone,
            jobNumber
          },
          from,
          disabled: true,
          showSubmit: true,
          submitText: '修改信息',
        })

        break;

      case 'add':
        wx.setNavigationBarTitle({
          title: '添加用户',
        })
        this.setData({
          from,
          disabled: false,
          showSubmit: true,
          submitText: '添加',
        })
        break;

      case 'binding':
        wx.setNavigationBarTitle({
          title: '绑定用户',
        })
        this.setData({
          from,
          disabled: false,
          submitText: '绑定信息'
        })
        break;

      case 'detail':
        wx.setNavigationBarTitle({
          title: '用户信息',
        })
        this.setData({
          from,
          disabled: true,
          showSubmit: false,
          userInfo: app.globalData.userInfo,
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