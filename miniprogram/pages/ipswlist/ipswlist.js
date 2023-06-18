// pages/ipswlist/ipswlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identifierList: null,
    ipswversion: [],
    title: "选择版本",
    subtitle: "* 请选择固件(只显示仍可验证的版本)",
    subtitle: "* 请将链接粘贴到电脑端下载",
  },


  getIpsw: function (id) {

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    let that = this;
    wx.vrequest({
      url: 'https://api.ipsw.me/v4/device/' + that.data.identifierList + '?type=ipsw',
      success(res) {
        console.log((JSON.parse(res.data)).firmwares)

        that.setData({
          ipswversion: (JSON.parse(res.data)).firmwares,
        })


      }
    })



  },

  copyurl: function (url) {
    var url = url.currentTarget.dataset.url

    wx.setClipboardData({
      data: url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.hideToast();
            wx.showModal({
              title: '获取链接',
              content: '已成功复制链接到剪贴板\r\n请粘贴到下载工具中下载',
              showCancel: false,
            })
          }
        })
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {



    console.log(options)
    var that = this

    //参数在options中，将参数设置到本页面的全局js中。
    that.setData({
      identifierList: options.identifier,
    })

    this.getIpsw()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})