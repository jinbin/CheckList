//index.js
//获取应用实例
const app = getApp()
var checklist = require('../../data/checklist')

Page({
  data: {
    motto: '芒格投资原则检查清单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    intro: app.intro['芒格']
  },

  onShareAppMessage: function () {
    return {
      title: '看看有没有你喜欢的清单吧',
      path: '/pages/menu/menu'
    }
  }
})
