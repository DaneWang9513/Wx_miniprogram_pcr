// miniprogram/pages/basics/game background/game background.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  data: {
    TabCur: 0,
    scrollLeft:0,
    tablist:['世界观','阵营']
  },
  tabSelect(e) {
    var that = this
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    if(e.currentTarget.dataset.id==0){
      wx.request({
        url: getApp().globalData.urlpath +"/gzlj_sjg",
        data: {
          authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
        },
        method: "GET",
        success: function (res) {
          console.log(res.data)
          var article = res.data
          WxParse.wxParse('article', 'html', article, that, 5);
          that.setData({
            modalName: ''
          });
          
        }
      })
    }else if(e.currentTarget.dataset.id==1){
      wx.request({
        url: getApp().globalData.urlpath +"/gzlj_zy",
        data: {
          authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
        },
        method: "GET",
        success: function (res) {
          console.log(res.data)
          var article = res.data
          WxParse.wxParse('article', 'html', article, that, 5);
          that.setData({
            modalName: ''
          });
          
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_sjg",
      data: {
        authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        var article = res.data
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          modalName: ''
        });
        
      }
    })
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