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

      list[index].txtStyle = txtStyle

      this.setData({
        intro: list
      });
    }
  },

  touchE: function(options){

  },

  onShareAppMessage: function () {
    return {
      title: '看看有你喜欢的清单吗?',
      path: '/pages/menu/menu'
    }
  }
})
