Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      { url: '/imgs/banner/111.png' },
      { url: '/imgs/banner/222.jpg' },
      { url: '/imgs/banner/333.jpg' },
    ],
    list: {
      line1: [
        { type: "user", img: 'user.png', name: '查看人员', bgc: '#FFB36E' },
        { type: "log", img: 'report.png', name: '查看记录', bgc: '#37C2FF' },
        { type: "add", img: 'form.png', name: '添加记录', bgc: '#D0E073' },
        { type: "export", img: 'report.png', name: '导出记录', bgc: '#FE8419' },
        { type: "about", img: 'about.png', name: '关于我们', bgc: '#FF99BB' },
      ],
      line2: [

        { img: 'permissions.png', name: '权限管理', bgc: '#46DCE0' },
        { img: 'user.png', name: '考试排名', bgc: '#FFAA5F' },
      ]
    }
  },

  checkType(e) {
    let { type } = e.currentTarget.dataset
    let unitListURL = '/pages/list/unit/index'
    let userListURL = '/pages/list/unit/index'
    console.log(type);
    switch (type) {
      // 查看人员
      case 'user':
        wx.navigateTo({
          url: '/pages/list/unit/index?type=user',
        })
        break;
      // 查看记录
      case 'log':
        wx.navigateTo({
          url: '/pages/list/unit/index?type=log',
        })
        break;
      // 添加记录
      case 'add':
        wx.navigateTo({
          url: '/pages/form/index?type=add',
        })
        break;
      // 导出记录
      case 'export':

        break;
      // 关于我们
      case 'about':

        break;

      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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