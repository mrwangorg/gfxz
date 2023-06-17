// pages/ipsw/ipsw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   // ipswList:[]
    title: "系统固件（正式版）",
    subtitle: "* 这里可以查询 iOS 正式版系统固件",
  },


 /* getIpswList() {
    let that = this;
    wx.vrequest({
      url: 'https://api.ipsw.me/v4/devices',
      success(res) {
        console.log(res);
       
        that.setData({
          ipswList: res,
        })

      },

    })
  },*/

  goDevicesList(event){

    wx.navigateTo({

       url: '../' + event.currentTarget.dataset.identifier + '/' + event.currentTarget.dataset.identifier,

    
    })

  /*  const identifier = event.currentTarget.dataset.identifier

    // console.log(identifier)

    wx.navigateTo({
      url: `../iphone/iphone?identifier=${identifier}`

    })*/

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // this.getIpswList();

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