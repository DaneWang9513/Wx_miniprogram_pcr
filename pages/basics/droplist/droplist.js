// miniprogram/pages/basics/droplist/droplist.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    tablist:['1.朱诺平原','2.帕拉斯高原','3.赫柏丘陵','4.维斯塔溪谷','5.刻瑞斯森林','6.佛洛拉湖畔','7.墨提斯大瀑布','8.伊利斯树海']
  },
  tabSelect(e) {
    var that = this;
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    var num = e.currentTarget.dataset.id+1
    var option_p = "gzlj_dl_"+num+"p"
    var option_k = "gzlj_dl_"+num+"k"
    wx.request({
      url: getApp().globalData.urlpath +"/"+option_p,
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
    wx.request({
      url: getApp().globalData.urlpath +"/"+option_k,
      data: {
        authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        var article1 = res.data
        WxParse.wxParse('article1', 'html', article1, that, 5);
        that.setData({
          modalName: ''
        });
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_dl_1p",
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
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_dl_1k",
      data: {
        authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        var article1 = res.data
        WxParse.wxParse('article1', 'html', article1, that, 5);
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