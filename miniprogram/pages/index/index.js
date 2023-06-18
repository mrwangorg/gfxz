Page({
  data: {
    updateList: [],
    ios: 'https://mrwang.org/beta/ios.mobileconfig',
    ipados: 'https://mrwang.org/beta/ipados.mobileconfig',
    watchos: 'https://mrwang.org/beta/watchos.mobileconfig',
    macos: 'https://mrwang.org/beta/macos.dmg',
    tvos: 'https://mrwang.org/beta/tvos.mobileconfig',
    noota: 'https://mrwang.org/beta/noota.mobileconfig',
    title: "描述文件（测试版）",
    subtitle: "* Apple 各大系统的开发者测试版描述文件",
  },


  getUpdateList() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    let that = this;

    wx.request({
      url: "https://developer.apple.com/news/releases/rss/releases.rss",

      success(res) {
        //console.log(res.data);
        var xml2json = require('xmlstring2json');
        // console.log(JSON.stringify(xml2json(res.data), null, 4));
        var xml = JSON.stringify(xml2json(res.data), null, 4)


        var jsondata = (JSON.parse(xml))


        that.setData({
          updateList: (jsondata.rss.channel.item).reverse()
        })

        console.log(that.data.updateList)

      }
    })


  },

  copyText: function (e) {
    var text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.hideToast();
            wx.showModal({
              title: '获取链接',
              content: '已成功复制链接到剪贴板\r\n请粘贴到 Safari 中下载',
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
    this.getUpdateList();
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

/**
 * 旧版 index.js 获取 bing 的壁纸
 */
// Page({
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     imagesList: [],
//     title: "每日壁纸",
//     subtitle: "* 壁纸搜集于网络，每天更新。",
//   },
//     getImagesList(){
//       wx.showLoading({
//         title: '加载中',
//       })
//       setTimeout(function () {
//         wx.hideLoading()
//       }, 2000)
//       let that=this;
//       wx.request({
//       url: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN',
//       success(res) {
//         console.log(res);
//           that.setData({
//             imagesList:res.data.images,
//           })
//          },
//       })
//     },
// /*
//   getImageSrc: function (res) {
//     console.log(res)
//     var imgsrc = res.target.dataset.imgsrc;
//       wx.previewImage({
//         urls: imgsrc,
//         current: current,     //当前图片地址
//         //所有要预览的图片的地址集合 数组形式
//         success: function (e) {
//           console.log('预览成功');
//         }
//       })
//     },
// */
//   saveImage: function (res) {
//     console.log(res)
//     var imgsrc = res.currentTarget.dataset.imgsrc;
//     //转换为数组
//     var imgUrl = imgsrc.split(",")
//       //获取授权
//       wx.getSetting({
//         success(res) {
//           if (!res.authSetting['scope.writePhotosAlbum']) {
//             wx.authorize({
//               scope: 'scope.writePhotosAlbum',
//               success() {
//                 console.log('授权成功')
//               }
//             })
//           }
//         }
//       })
//       wx.showModal({
//         title: '提示',
//         content: '要保存这张图片吗？',
//         success: function (res) {
//               if (res.confirm) {
//                 console.log('用户点击确定');
//                     wx.downloadFile({
//                           url: imgsrc,
//                           success: function (res) {
//                             console.log(res);
//                             //图片保存到本地
//                             console.log(imgsrc);
//                             wx.saveImageToPhotosAlbum({
//                               filePath: res.tempFilePath,
//                               success: function (data) {
//                                 console.log(data);
//                                 wx.showToast({
//                                   title: '保存成功！',
//                                 })
//                               },
//                             })
//                           },
//                     })
//               }
//         },
//       })
//     },
//   previewImg: function (res) {
//     console.log(res)
//     var imgsrc = res.currentTarget.dataset.imgsrc;
//     //转换为数组
//     var imgUrl = imgsrc.split(",")
//       wx.previewImage({
//         urls: imgUrl,
//       })
//   },