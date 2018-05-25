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
      intro: app.intro[options.id]['desc'],
      motto: app.intro[options.id]['title']
    })

    //判断id是否在config["collect"]中
    var value = wx.getStorageSync('config') || { "collect": [] }
    console.log("onShow: " + app.intro.length)
    for (var i = 0; i < value["collect"].length; i++) {
      var index = app.intro.length - 1 - value["collect"][i]
      //app.intro[index]['collect'] = true
      if(index == options.id){
        this.setData({
          isCollect: true
        })
      }
    }
  },

  collect: function (e) {
    var value = wx.getStorageSync('config') || { "collect": [] }

    if (value) {
      //如果已经有这个元素，则删除；若没有，则添加
      var is_exist = -1
      for (var i = 0; i < value["collect"].length; i++) {
        var index = app.intro.length - 1 - value["collect"][i]
        if (index == e.currentTarget.id) {
          is_exist = i
        }
      }

      // 在收藏名单，操作：取消收藏
      if (is_exist != -1) {
        value["collect"].splice(is_exist, 1);
        app.intro[e.currentTarget.id]['collect'] = false
      } else { //不在收藏名单，操作：收藏
        value["collect"].push(app.intro.length - 1 - e.currentTarget.id)
        app.intro[e.currentTarget.id]['collect'] = true
      }

      wx.setStorage({
        key: "config",
        data: value
      })

      this.setData({
        isCollect: app.intro[e.currentTarget.id]['collect']
      })
    }
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
