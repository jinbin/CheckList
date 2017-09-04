//list1.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '高手如何休息',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: app.checklist['高手如何休息'],
    intro: app.intro['高手如何休息']['desc']
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
      title: '告诉你高手如何休息',
      path: '/pages/list/list'
    }
  }

})
