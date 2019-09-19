// pages/reading/reading.js

const app = getApp()
const db = wx.cloud.database({
  env: "pro11-d3fcc0"
})

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var banner = "https://7072-pro11-d3fcc0-1254285006.tcb.qcloud.la/messages/sinofrench.jpeg?sign=462bd8d88109d8bef8a7ae0e1d3d9355&t=1566292351"

    if(options.type == "mem"){
      banner = "https://7072-pro11-d3fcc0-1254285006.tcb.qcloud.la/messages/engineer.jpg?sign=751c0df481fbc669077b6e2f09fc259d&t=1566313977"
    }

    that.setData({
      banner: banner
    })

    db.collection('messages').where({
      type: db.RegExp({
        regexp: options.type,
        options: 'i',
      })
    }).get({
      success: res => {
        console.log(res.data)
        that.setData({
          messages: res.data.reverse()
        })
      }
    })
  },

  saveOfficialQRCode: function() {
    util.saveOfficialQRCode()
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