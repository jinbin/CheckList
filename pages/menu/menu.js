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
    list: checklist
  }
})
