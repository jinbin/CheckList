//about.js
//获取应用实例
const app = getApp()

var key

Page({
  data: {
    //motto: '了解清单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //about: app.about,
  // poster:'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4.jpg',
  // name: '光年之外',
  // author: '邓紫棋',
  // src: "https://ws.stream.qqmusic.qq.com/200255722.m4a?fromtag=46",
  },

  onLoad: function(options){
    if(options.key == "about"){
      this.setData({
        motto:'了解清单',
        about: app.about
      })
      key = "about"
    }else if(options.key == "aboutkoudai"){
      this.setData({
        motto: '关于口袋清单',
        about: app.aboutkoudai
      })
      key = "aboutkoudai"
    }else {
      console.log("其他key")
      console.log(options)
    }
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
    if (key == "about") {
      return {
        title: "告诉你什么是清单",
        path: "/pages/about/about?key=about"
      }
    } else if(key == "aboutkoudai") {
      return {
        title: "口袋清单是什么?",
        path: "/pages/about/about?key=aboutkoudai"
      }
    }
  }
})