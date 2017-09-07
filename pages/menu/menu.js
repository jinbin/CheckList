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

  touchS: function(e){
    console.log("touchS" + e.touches[0].clientX)
    if (e.touches.length == 1) {
      this.setData({
        //记录触摸起始位置的X坐标
        startX: e.touches[0].clientX
      })
    }
  },

  touchM: function(e){
    console.log("touchM" + e)

    if(e.touches.length == 1) {
      var moveX = e.touches[0].clientX
      var distX = this.data.startX - moveX
      var txtStyle

      if(distX <= 0){
        console.log("distX <=0: " + distX)
        txtStyle = "left:0px"
      }else if(distX > 0){
        console.log("distX >0: " + distX)
        txtStyle = "left:-" + distX + "px"
      }

      console.log("txtStyle：" + txtStyle)

      var index = e.currentTarget.dataset

      console.log("index：" + index)

      var list = this.data.intro
      
      console.log("list: " + list)

      this.setData({
        intro: list
      });
    }

  },

  onShareAppMessage: function () {
    return {
      title: '看看有你喜欢的清单吗?',
      path: '/pages/menu/menu'
    }
  }
})
