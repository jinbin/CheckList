//about.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '了解清单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    intro: app.intro,
  // poster:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4.jpg',
  // name: '光年之外',
  // author: '邓紫棋',
  // src: "https://ws.stream.qqmusic.qq.com/200255722.m4a?fromtag=46",
  },

  //onShow每次打开页面都会进行判断
  onShow: function(e) {
    console.log(app.globalData.hasUserInfo)
    if (app.globalData.hasUserInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  onReady: function(options) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },

  onShareAppMessage: function (options) {
    return {
      title: "告诉你什么是清单",
      path: "/pages/about/about"
    }
  }
})