//menu.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    intro: app.intro
  },

  onShareAppMessage: function () {
    return {
      title: '看看有你喜欢的清单吗?',
      path: '/pages/menu/menu'
    }
  }
})
