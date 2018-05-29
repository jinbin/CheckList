//list.js
//获取应用实例
const app = getApp()
var g = "name"

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
    var content
    var id_value 
    var identity_value

    if(options.id){
      content = app.checklist[app.intro[options.id]['title']]
      id_value = options.id
      identity_value = app.intro.length - 1 - options.id
    } else if (options.identity){
      id_value = app.intro.length - 1 - options.identity
      identity_value = options.identity
      content = app.checklist[app.intro[id_value]['title']]
    }else{
      console.log("id 和 identity都不存在")
      console.log(options)
    }

    this.setData({
      id: id_value,
      identity: identity_value,
      list: content,
      intro: app.intro[id_value]['desc'],
      motto: app.intro[id_value]['title'],
      opened: app.globalData.opened
    })

    //判断id是否在config["collect"]中
    var value = wx.getStorageSync('config') || { "collect": [] }
    console.log("onShow: " + app.intro.length)
    for (var i = 0; i < value["collect"].length; i++) {
      var index = app.intro.length - 1 - value["collect"][i]
      //app.intro[index]['collect'] = true
      if (index == id_value){
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
      path: "/pages/list/list?identity=" + this.data.identity
    }
  }
})
