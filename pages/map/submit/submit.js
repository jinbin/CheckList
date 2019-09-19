// pages/map/submit/submit.js

var util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  getLocation: function() {
    var that = this
    wx.getLocation({
      //type: 'wgs84',
      type: 'gcj02',
      success: function(res) {
        console.log(res.latitude)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        console.log(that.data.latitude)
      }
    })
  },

  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    if (e.detail.value != "") {
      wx.cloud.callFunction({
        // 要调用的云函数名称
        name: 'submitLocation',
        // 传递给云函数的参数
        data: {
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          place: e.detail.value.place,
          created_at: util.formatTime(new Date())
        },
        success: res => {
          console.log("ok")
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})