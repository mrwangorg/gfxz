Page({
  data: {
    phoneInfo: "",
    networkInfo: "",
    title: "我的信息",
    subtitle: "* 这里可以查询自己的设备信息",
  },
  onLoad: function (res) {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          phoneInfo: res
        });
      }
    }),

      wx.getNetworkType({
        success: function (res) {
          console.log(res)
          that.setData({
            networkInfo: res
          });
        }
      })
  },

  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }

});