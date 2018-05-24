// pages/my/my.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro: app.intro,
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
          if (value["collect"][i] == e.currentTarget.id){
            console.log("IS_EXIST!")
            is_exist = i 
          }
        }

        // 在收藏名单，操作：取消收藏
        if(is_exist != -1){
          value["collect"].splice(is_exist, 1);
          app.intro[e.currentTarget.id]['collect'] = false
        }else{ //不在收藏名单，操作：收藏
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