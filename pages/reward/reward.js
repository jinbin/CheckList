// pages/reward/reward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  imgPre: function(e){
    var current = e.currentTarget.dataset.src
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: ["https://mmbiz.qpic.cn/mmbiz_jpg/YoMN6iaCZsaHibVXT0JtCibbepl7pBvcncFKtevrThKSP9Q2PXe6qkH7hyctbiaVMQiabryicm3wyukQxMV3NWElhxQg/0?wx_fmt=jpeg"], // 需要预览的图片http链接列表
    })
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