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
      id: options.id,
      list: app.checklist[app.intro[options.id]['title']],
      intro: app.intro[options.id]['desc']
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
    var text 
    if(app.globalData.userInfo){
      text = app.globalData.userInfo.nickName + " 给你分享了一份实用清单"
    }else{
      text = "这份实用的清单请你收好"
    }
    return {
      title: text,
      path: "/pages/list/list?id=" + this.data.id
    }
  }

})
