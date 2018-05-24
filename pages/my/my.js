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
    try {
      var value = wx.getStorageSync('intro')
      console.log("VALUE IN MY: " + value)
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
      var value = wx.getStorageSync('intro')
      console.log("VALUE IN MY: " + value)
      if (value) {
        this.setData({
          intro: value
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