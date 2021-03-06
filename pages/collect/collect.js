// pages/collect/collect.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro: app.intro,
    motto: "点击清单标题下的小心心，将其置为❤️",
    showTips: false
  },

  getUserInfo: function(e) {
    if (!app.globalData.hasUserInfo){
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.hasUserInfo = true
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }else{
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },

  collect: function (e) {
      var value = wx.getStorageSync('config')

      if (value) {
        //如果已经有这个元素，则删除；若没有，则添加
        var is_exist = -1
        for (var i = 0; i < value["collect"].length; i++) {
          var index = app.intro.length - 1 - value["collect"][i]
          if (index == e.currentTarget.id){
            is_exist = i
          }
        }

        // 在收藏名单，操作：取消收藏
        if(is_exist != -1){
          value["collect"].splice(is_exist, 1);
          app.intro[e.currentTarget.id]['collect'] = false
        }else{ //不在收藏名单，操作：收藏
          value["collect"].push(app.intro.length - 1 - e.currentTarget.id)
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   * 当在menu页发生收藏更改，收藏夹页必须在加载时重新赋值，保证更改生效
   */
  onShow: function () {
      var value = wx.getStorageSync('config') || app.config
      if (value["collect"].length == 0){
        this.setData({
          showTips: true
        })
      }else{
        this.setData({
          showTips: false
        })
      }

      for (var i = 0; i < value["collect"].length; i++) {
        var index = app.intro.length - 1 - value["collect"][i]
        app.intro[index]['collect'] = true
      }
      if (value) {
        this.setData({
          intro: app.intro,
          config: app.intro
        })
      }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
