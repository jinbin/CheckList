// pages/contact/contact.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '联系作者',
    contact: app.contact,
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
   */
  onShow: function () {
  
  },

  copyText: function(e) {
    console.log(e)
    wx.setClipboardData({
      data: "just_as_always",
      success: function(res){
        wx.showToast({
          title: "内容已复制"
        })
      }
    })
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