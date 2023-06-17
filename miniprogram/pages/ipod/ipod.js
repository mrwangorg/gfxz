
// pages/deviceslist/deviceslist.js


Page({


  /**
   * 页面的初始数据
   */
  data: {
    deviceslist: [],
    listArr: [],
    isnull: [],
    // identifierList:null
    //itemList:[],
    // ipswlist:[]
    title: "选择机型",
    subtitle: "* 请选择你的设备型号",
  },

  getDeviceslist() {

    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    let that = this;
    wx.vrequest({
      url: 'https://api.ipsw.me/v4/devices',
      success(res) {


        that.setData({
          deviceslist: JSON.parse(res.data),
        })

        console.log(JSON.parse(res.data));


        var devicesdata = JSON.parse(res.data).reverse()
        var length = devicesdata.length;
        var listArr = [];
        //  var identifiername = JSON.stringify(that.data.identifierList)

        for (var L1 = 0; L1 < length; L1++) {


          var stringArr = JSON.stringify(devicesdata[L1].name)


          if (stringArr.indexOf("iPod") !== -1) {

            var name = 'listArr[' + L1 + '].name';
            var identifier = 'listArr[' + L1 + '].identifier';

            /* console.log("包含 "+ L1);
               console.log(devicesdata[L1].name);
               console.log(devicesdata[L1].identifier);*/

            that.setData({
              [name]: devicesdata[L1].name,
              [identifier]: devicesdata[L1].identifier
            })

          }
        }




      }

    })
  },



  getIpsw: function (id) {

    /*  let that = this;
      wx.vrequest({
        url: 'https://api.ipsw.me/v4/device/' + id.currentTarget.dataset.identifier + '?type=ipsw',
        success(res) {

          that.setData({
            itemList: JSON.parse(res.data),
          })
          
        }
      })

    */

    const identifier = id.currentTarget.dataset.identifier

    // console.log(identifier)

    wx.navigateTo({
      url: `../ipswlist/ipswlist?identifier=${identifier}`

    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /*  console.log(options)
      var that = this
  
      //参数在options中，将参数设置到本页面的全局js中。
      that.setData({
        identifierList: options.identifier,
      })*/

    this.getDeviceslist();

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

