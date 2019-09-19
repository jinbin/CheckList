// pages/knowledge/knowledge.js

import util from '../../utils/util.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {
        "url": "/images/zju-min.jpeg",
        "bind": "saveOfficialQRCode"
      }
    ],
    banner_height: 30
  },

  saveOfficialQRCode: function(){
    util.saveOfficialQRCode()
  },

  getIntro: function (options) {
    var that = this
    console.log(options.detail.target.id)

    if (options.detail.target.id == "") {
      return
    }

    if (options.detail.target.id == "msie") {
      // this.pageScrollToBottom()
      wx.navigateTo({
        url: '/pages/reading/reading?type=msie',
      })
    } else if (options.detail.target.id == "mem") {
      wx.navigateTo({
        url: '/pages/reading/reading?type=mem',
      })
    } else if (options.detail.target.id == "applyscript"){
      wx.navigateTo({
        url: '/pages/web/web?src=https://mp.weixin.qq.com/s/_t-FhuLXs3qEEEnJuZL4BQ',
      })      
    } else if (options.detail.target.id == "toumayanjiang"){
      wx.navigateToMiniProgram({
        appId: 'wx16c76d4762cbe0b3',
      })
    } else if (options.detail.target.id == "collection"){
      wx.navigateTo({
        url: '/pages/topicsView/volItem',
      }) 
    } else if (options.detail.target.id == "ditu"){
      wx.navigateTo({
        url: '/pages/map/map/map',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      banner_height: 240 / wx.getSystemInfoSync().windowHeight * 100
    })
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
    return {
      title: "浙大最新的新闻这里都有，赶紧来看！",
      imageUrl: '/images/zju-min.jpeg'
    }
  }
})