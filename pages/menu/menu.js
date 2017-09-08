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

  onShow: function(options) {
    console.log("onLoad" + JSON.stringify(options))

    var list = this.data.intro

    for (var i = 0; i < list.length; i++) {
      list[i].txtStyle = "left:0px"
    }

    this.setData({
      intro: list
    });
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

  touchM: function(options){
    console.log("touchM" + JSON.stringify(options))

    if(options.touches.length == 1) {
      var moveX = options.touches[0].clientX
      var distX = this.data.startX - moveX
      var txtStyle
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
