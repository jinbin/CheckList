//menu.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    intro: app.intro,
    heart_image_path: false
  },

  onLoad: function(options){
    try {
      var value = wx.getStorageSync('intro')
      console.log("VALUE: " + value)
      if (value) {
        this.setData({
          intro: value
        })
      }else{
        wx.setStorage({
          key: "intro",
          data: app.intro
        })
      }
    } catch (e) {
      console.log("ERROR IN getStorageSync")
    }
  },

  onShow: function(options) {
    try {
      var value = wx.getStorageSync('intro')
      console.log("VALUE: " + value)
      if (value) {
        this.setData({
          intro: value
        })
      }
    } catch (e) {
      console.log("ERROR IN getStorageSync")
    }
  },

  touchS: function(options){
    console.log("touchS" + options.touches[0].clientX)
    if (options.touches.length == 1) {
      this.setData({
        //记录触摸起始位置的X坐标
        startX: options.touches[0].clientX
      })
    }
  },

  collect: function(e) {
    try {
      var value = wx.getStorageSync('intro')
      if (value) {
        var flag = value[e.currentTarget.id]["collect"]
        value[e.currentTarget.id]["collect"] = !flag
        this.setData({
          intro: value
        })
        wx.setStorage({
          key: "intro",
          data: value
        })
      }
    } catch (e) {
      console.log("ERROR IN getStorageSync")
    }
  },

  touchM: function(options){
    console.log("touchM" + JSON.stringify(options))

    if(options.touches.length == 1) {
      var moveX = options.touches[0].clientX
      var distX = this.data.startX - moveX
      var txtStyle
      var titleColor
      var delBtnWidth = 80

      if(distX <= 0){
        console.log("distX <=0: " + distX)
        txtStyle = "left:0px"
      }else if(distX > 0){
        console.log("distX >0: " + distX)
        txtStyle = "left:-" + distX + "px"
        if (distX >= delBtnWidth){
          txtStyle = "left:-" + delBtnWidth + "px"
        }
      }

      var index = options.currentTarget.id
      console.log("index: " + index)

      var list = this.data.intro

      for (var i = 0; i < list.length; i++) {
        list[i].txtStyle = "left:0px"
      }
      list[index].txtStyle = txtStyle
      list[index].titleColor = titleColor

      this.setData({
        intro: list
      });
    }
  },

  touchE: function(options){
    // console.log("touchE: " + JSON.stringify(options))

    // var index = options.currentTarget.id

    // var list = this.data.intro

    // //list[index].txtStyle = "left:0px"

    // this.setData({
    //   intro: list
    // });
  },

  onShareAppMessage: function () {
    return {
      title: '看看有你喜欢的清单吗?',
      path: '/pages/menu/menu'
    }
  }
})
