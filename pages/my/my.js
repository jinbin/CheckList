// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    components: [
      // {
      //   title: '收藏夹',
      //   remark: '收藏夹',
      //   url: '/pages/collect/collect',
      //   icon: '../../images/find-selected.png',
      //   isTab: true 
      // },
      // {
      //   title: '联系作者',
      //   remark: '联系作者',
      //   url: '/pages/contact/contact',
      //   icon: '../../images/find-selected.png',
      // },
      // {
      //   title: '公众号',
      //   remark: '公众号',
      //   url: '/pages/my/officialAccount/offcialAccount',
      //   icon: '../../images/find-selected.png',
      // },
      {
        title: '设置',
        remark: '设置',
        url: '/pages/settings/settings',
        icon: '../../images/find-selected.png',
      }
      // {
      //   title: '有钱任性',
      //   remark: '有钱任性',
      //   url: '/pages/reward/reward',
      //   icon: '../../images/find-selected.png',
      // }
    ]
  },

  toMiniProgram: function (e) {
    var toAppId
    var toPath
    if (e.currentTarget.id == "touma"){
      toAppId = "wx16c76d4762cbe0b3"
      toPath = "pages/tm/clock/set/set"
    }else if (e.currentTarget.id == "xizi"){
      toAppId = "wx16c76d4762cbe0b3"
      toPath = "pages/tm/loc/loc"
    }
    wx.navigateToMiniProgram({
      appId: toAppId,
      path: toPath,
      extraData: {
        foo: 'bar'
      },
      // envVersion: 'trial',
      success(res) {
        console.log("SUCCESS")
      }
    })
  },

  copyText: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.showToast({
          title: "内容已复制"
        })
      }
    })
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