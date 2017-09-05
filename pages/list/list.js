//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [],
    intro: ''
  },

  onLoad: function(options){
    this.setData({
      motto: options.motto,
      list: app.checklist[options.motto],
      intro: app.intro[options.motto]['desc']
    })
  },

  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  
  onShareAppMessage: function (options) {
    return {
      title: "这份实用的清单请你收好",
      path: "/pages/list/list?motto=" + this.data.motto
    }
  }

})
