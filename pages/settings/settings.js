// pages/settings/settings.js

const app = getApp()

Page({
  data:({}),

  onShow: function(e){
    var value = wx.getStorageSync('settings') || app.config
    console.log("VALUE:" + value["settings"])

    if(!value["settings"]){
      console.log("IN")
      value["settings"] = {}
    }

    wx.setStorage({
      key: "settings",
      data: value
    })

    if(value["settings"]["opened"] == false){
      this.setData({
        opened: false
      })
      app.globalData.opened = false
    }else{
      this.setData({
        opened: true
      })
      app.globalData.opened = true
    }
  },

  switchChange: function(e){
    console.log(e.detail.value)
    var value = wx.getStorageSync('config') || app.config

    if (!value["settings"]) {
      value["settings"] = {}
    }

    value["settings"]["opened"] = e.detail.value
    app.globalData.opened = e.detail.value

    wx.setStorage({
      key: "settings",
      data: value
    })
  }
})
