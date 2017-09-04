//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '巨人的工具',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: app.checklist['巨人的工具'],
    intro: app.intro['巨人的工具']['desc']
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
  
  onShareAppMessage: function () {
    return {
      title: '巨人的工具这份清单请你收好',
      path: '/pages/list/list'
    }
  }

})
