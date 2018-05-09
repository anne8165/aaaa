var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'yellow',
    scrollTop: 0
  },
  scrolltoupper : function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
    // 选择图片
    // wx.chooseImage({
       
    // })
    // wx.connectSocket({
    //   url: 'test.php'
    // })
    // wx.onSocketOpen(function (res) {
    //   console.log('WebSocket连接已打开！')
    // })
    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！')
    // })

    // wx.scanCode({
    //   onlyFromCamera: true,
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 100
    })
  }
})