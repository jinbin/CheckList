

const app = getApp()

Page({
  data: {
  timer:"https://mmbiz.qpic.cn/mmbiz_png/YoMN6iaCZsaGvviavWlqUeI8vvgxr3z3via27DyADbt9A4rIoPtuXtL5Hbdg4bYOZrynibeDNUD1mWL3GlGh0jqdCw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
  ahcounter: "https://mmbiz.qpic.cn/mmbiz_png/YoMN6iaCZsaGvviavWlqUeI8vvgxr3z3via83qQCUgfof85EoYzicYhGZk5RW9C7l6swmqejy9vKPiavp5dJViaLcsxw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
  grammarian: ""
  },

  onLoad: function (options) {
    if (options.key == "timer") {
      console.log("timer")
      this.setData({
        content: this.data.timer
      })
    } else if (options.key == "ahcounter") {
      this.setData({
        content: this.data.ahcounter
      })
    } else if (options.key == "grammarian"){
      this.setData({
        content: this.data.grammarian
      })
    }
  }

})
