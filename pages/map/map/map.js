// pages/map/map.js

const db = wx.cloud.database({
  env: "pro11-d3fcc0"
})

Page({
  data: {
    latitude: 30.303564,
    longitude: 120.0873016,
    colors: ["#FFB90F", "#E8E8E8", "#E8E8E8", "#E8E8E8", "#E8E8E8"],
    scale: 15,
    campuses: [{
        name: "紫金港",
        icon: "/images/校园一卡通.png",
        id: "zijingang",
        color: "#E8E8E8",
        scale: 15
      },
      {
        name: "玉泉",
        icon: "/images/校园圈子.png",
        id: "yuquan",
        color: "#E8E8E8",
        scale: 16
      },
      {
        name: "运河",
        icon: "/images/校园导航.png",
        id: "yunhe",
        color: "#E8E8E8",
        scale: 16
      },
      {
        name: "华家池",
        icon: "/images/校园抽奖.png",
        id: "huajiachi",
        color: "#E8E8E8",
        scale: 16
      },
      {
        name: "西溪",
        icon: "/images/校园资讯.png",
        id: "xixi",
        color: "#E8E8E8",
        scale: 16
      }
    ]
  },

  onLoad: function(e) {
    var that = this
    db.collection('locations').where({
      // show: true
    }).get({
      success: function(res) {
        console.log(res.data)
        console.log(res.data.length)
        console.log(res.data[0])

        // var 不能少
        var markers = []
        for (var i = 0; i < res.data.length; i++) {
          var hsh = {}
          hsh["id"] = i
          hsh["latitude"] = res.data[i].location.latitude
          hsh["longitude"] = res.data[i].location.longitude
          hsh["width"] = 30
          hsh["height"] = 30
          hsh["iconPath"] = "/images/地点.png"
          hsh["title"] = res.data[i].place
          hsh["callout"] = {
            content: res.data[i].place,
            fontSize: 15,
            borderRadius: 10,
            padding: 6,
            display: 'BYCLICK'
          }
          // 不能使用add 
          markers.push(hsh)
        }
        console.log(markers)
        that.setData({
          markers: markers
        })
      }
    })
  },

  selectCampus(e) {
    console.log(e.detail.target.id)
    var campus = e.detail.target.id
    if (campus == "zijingang") {
      this.setData({
        colors: ["#FFB90F", "#E8E8E8", "#E8E8E8", "#E8E8E8", "#E8E8E8"],
        latitude: 30.303564,
        longitude: 120.0873016,
        scale: 15
      })
    } else if (campus == "yuquan"){
      this.setData({
        colors: ["#E8E8E8", "#FFB90F", "#E8E8E8", "#E8E8E8", "#E8E8E8"],
        longitude: 120.1236104965,
        latitude: 30.2631446400,
        scale: 16
      })
    } else if (campus == "yunhe") { 
      this.setData({
        colors: ["#E8E8E8", "#E8E8E8", "#FFB90F", "#E8E8E8", "#E8E8E8"],
        longitude: 120.1549601555,
        latitude: 30.3305460583,
        scale: 16
      })
    } else if (campus == "huajiachi") { 
      this.setData({
        colors: ["#E8E8E8", "#E8E8E8", "#E8E8E8", "#FFB90F", "#E8E8E8"],
        longitude: 120.1955410000,
        latitude: 30.2694760000,
        scale: 16
      })
    } else if (campus == "xixi") { 
      this.setData({
        colors: ["#E8E8E8", "#E8E8E8", "#E8E8E8", "#E8E8E8", "#FFB90F"],
        longitude: 120.1410555840,
        latitude: 30.2745234995,
        scale: 16
      })
    }
  },

  navi(e) {
    console.log("navi")
    console.log(this.data.markers)
    wx.openLocation({//使用微信内置地图查看位置。
      latitude: this.data.markers[e.currentTarget.dataset.markerid].latitude,
      longitude: this.data.markers[e.currentTarget.dataset.markerid].longitude,
      name: this.data.markers[e.currentTarget.dataset.markerid].callout.content
    })
  },

  // maptap(e) {
  //   this.setData({
  //     place: "",
  //     markerId: -1
  //   })
  // },

  bindcallouttap(e) {
    console.log("头上文字被点击", e)
  },

  markertap(e) {
    console.log(e.markerId)
    this.setData({
      place: this.data.markers[e.markerId].callout.content,
      markerId: e.markerId
    })
  },

  controltap(e) {
    console.log(e.controlId)
  }
})