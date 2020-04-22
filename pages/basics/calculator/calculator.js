// miniprogram/pages/basics/calculator/calculator.js
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    tablist:['体力计算',],
    level: "",
    tili: "",
    tili_max:0,
    tili_time:""
  },
  tabSelect(e) {
    var that = this;
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  bindInput_1: function (e) {
    this.level = e.detail.value;
    this.setData({
      level: e.detail.value,
    })
  },
  bindInput_2: function (e) {
    this.tili = e.detail.value;
    this.setData({
      tili: e.detail.value
    })
  },
  cal1(e){
    var tili_list = [20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,28,30,35,40,45,50,55,60,70,80,85,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219]
    var level_car = this.data.level
    level_car = parseInt(level_car) - 1
    var tili_sel = tili_list[level_car]
    var tili_car = this.data.tili
    console.log(level_car+","+tili_car)
    var timestamp = (new Date()).getTime();
    console.log(typeof timestamp);
    var time1 = parseInt(tili_car)
    time1 = tili_sel - time1
    console.log(time1)
    time1 = time1 * 6 * 60000
    console.log(typeof time1)
    timestamp = timestamp + time1
    console.log(timestamp)
    timestamp = new Date(timestamp)
    var Y = timestamp.getFullYear() + '-';
    var M = (timestamp.getMonth()+1 < 10 ? '0'+(timestamp.getMonth()+1) : timestamp.getMonth()+1) + '-';
    var D = timestamp.getDate() + ' ';
    var h = timestamp.getHours() + ':';
    var m = (timestamp.getMinutes() < 10 ? '0'+(timestamp.getMinutes()) : (timestamp.getMinutes())) + ':';
    var s = (timestamp.getSeconds() < 10 ? '0'+(timestamp.getSeconds()) : (timestamp.getSeconds()));
    var time_out = Y+M+D+h+m+s 
    console.log(time_out)
    this.setData({
      tili_max: tili_sel,
      tili_time: time_out
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_tilibiaoge",
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