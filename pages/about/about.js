//about.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '了解清单',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    intro: ["\r\n\r\n\r\n\r\n\r\n\r\n\r\n现代世界的复杂性已经超出了人力所能控制的范围，任何一个需要从业人员掌控大量知识的领域都难逃厄运。从医疗到金融，从商业到行政，生活中的错误屡屡发生，令人触目惊心。", "\r\n\r\n\r\n\r\n\r\n\r\n\r\n人类渴望终结错误，再造安全的生存空间。为了实现这个目的，曾推动奥巴马医改的白宫顾问阿图·葛文德通过在医疗领域的实践，掀起了一场“清单革命”，并将革命风潮推广到建筑、飞行、金融、行政等与我们生活息息相关的领域。", "\r\n\r\n\r\n\r\n\r\n\r\n\r\n使用清单，就是为大脑搭建起一张“认知防护网”，它能够弥补人类与生俱来的认知缺陷，如记忆不完整或注意力不集中。作者在书中提出清单的4大行事原则：权力下放、简单至上、人为根本及持续改善。它们不是僵化的教条，而是实用的支持体系，将在复杂的世界中拯救你的生活。"]
  },

  onShareAppMessage: function (options) {
    return {
      title: "告诉你什么是清单",
      path: "/pages/about/about"
    }
  }
})