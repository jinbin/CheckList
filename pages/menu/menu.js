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
  },

  onShow: function(options) {
    try {
      var value = wx.getStorageSync('config')
      for (var i = 0; i < value["collect"].length; i++) {
        app.intro[value["collect"][i]]['collect'] = true
      }
      if (value) {
        this.setData({
          intro: app.intro,
          config: app.intro
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
    var value = wx.getStorageSync('config')

    if (value) {
      //如果已经有这个元素，则删除；若没有，则添加
      var is_exist = -1
      for (var i = 0; i < value["collect"].length; i++) {
        if (value["collect"][i] == e.currentTarget.id) {
          console.log("IS_EXIST!")
          is_exist = i
        }
      }

      // 在收藏名单，操作：取消收藏
      if (is_exist != -1) {
        value["collect"].splice(is_exist, 1);
        app.intro[e.currentTarget.id]['collect'] = false
      } else { //不在收藏名单，操作：收藏
        value["collect"].push(e.currentTarget.id)
        app.intro[e.currentTarget.id]['collect'] = true
      }

      wx.setStorage({
        key: "config",
        data: value
      })

      this.setData({
        intro: app.intro
      })
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
