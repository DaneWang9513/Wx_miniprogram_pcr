// miniprogram/pages/plugin/gacha/gacha.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gacha_list:[],
    gacha_name:[],
    //gacyaup_num:0,
    gacya3_num:0,
    gacya2_num:0,
    gacya1_num:0,
    gacyaup_per:0,
    gacya3_per:0,
    gacya_cishu:0,
    gacha_list_old:[],
    no:0,
    gacya3_name:"",
  },
  adLoad() {
    console.log('Banner 广告加载成功')
  },
  adError(err) {
    console.log('Banner 广告加载失败', err)
  },
  adClose() {
    console.log('Banner 广告关闭')
  },
  danchou(e) {
    var that = this;
    var gacya_cishu = this.data.gacya_cishu
    var gacya3num = this.data.gacya3_num
    var gacya2num = this.data.gacya2_num
    var gacya1num = this.data.gacya1_num
    var gacya3_name_1 = this.data.gacya3_name
    let list1 = that.data.gacha_list_old
    let list2 = []
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_ndmn_img",
      data: {
        method: "1",
        authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        var result = res.data[0]
        //var gacyaup_num = result.gacyaup_num
        var gacya2_num = result.gacya2_num
        var gacya3_num = result.gacya3_num
        var gacya1_num = result.gacya1_num
        var gacyaup_per = result.gacyaup_per
        var gacya3_per = result.gacya3_per
        var gacya3_name = result.gacya3_name
        console.log(gacya3_name)
        if(gacya3_name!=""){
          gacya3_name_1 =  gacya3_name_1 + gacya3_name+","
        }
        console.log(gacya3_name_1)
        var namelist = []
        var resultlist = result.result
        for(var i=0;i<resultlist.length;i++){
          let name = resultlist[i].split(".png")[0]
          namelist.push(name)
          list2.push({'name':name,'img':resultlist[i]})
        }
        that.setData({
          gacha_list:resultlist,
          //gacyaup_num:gacyaup_num,
          gacya2_num:gacya2num+gacya2_num,
          gacya3_num:gacya3num+gacya3_num,
          gacya1_num:gacya1num+gacya1_num,
          gacyaup_per:gacyaup_per,
          gacya3_per:gacya3_per,
          gacya_cishu:gacya_cishu+1,
          gacha_name:namelist,
          gacya3_name:gacya3_name_1
        })
        list1.push(list2)
        console.log(list1)
        that.setData({
          gacha_list_old:list1
        })
      }
    })
  },
  shichou(e) {
    var that = this;
    var gacya_cishu = this.data.gacya_cishu
    var gacya3num = this.data.gacya3_num
    var gacya2num = this.data.gacya2_num
    var gacya1num = this.data.gacya1_num
    var gacya3_name_1 = this.data.gacya3_name
    let list1 = that.data.gacha_list_old
    let list2 = []
    wx.request({
      url: getApp().globalData.urlpath +"/gzlj_ndmn_img",
      data: {
        method: "10",
        authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        var result = res.data[0]
        //var gacyaup_num = result.gacyaup_num
        var gacya2_num = result.gacya2_num
        var gacya3_num = result.gacya3_num
        var gacya1_num = result.gacya1_num
        var gacyaup_per = result.gacyaup_per
        var gacya3_per = result.gacya3_per
        var gacya3_name = result.gacya3_name
        console.log(gacya3_name)
        if(gacya3_name!=""){
          gacya3_name_1 =  gacya3_name_1 + gacya3_name+","
        }
        console.log(gacya3_name_1)
        var namelist = []
        var resultlist = result.result
        for(var i=0;i<resultlist.length;i++){
          let name = resultlist[i].split(".png")[0]
          namelist.push(name)
          list2.push({'name':name,'img':resultlist[i]})
        }
        that.setData({
          gacha_list:resultlist,
          //gacyaup_num:gacyaup_num,
          gacya2_num:gacya2num+gacya2_num,
          gacya3_num:gacya3num+gacya3_num,
          gacya1_num:gacya1num+gacya1_num,
          gacyaup_per:gacyaup_per,
          gacya3_per:gacya3_per,
          gacya_cishu:gacya_cishu+10,
          gacha_name:namelist,
          gacya3_name:gacya3_name_1
        })
        list1.push(list2)
        console.log(list1)
        that.setData({
          gacha_list_old:list1
        })
      }
    })
  },
  chongzhi(e) {
    this.setData({
      gacha_list:[],
      //gacyaup_num:0,
      gacya3_num:0,
      gacya2_num:0,
      gacya1_num:0,
      gacyaup_per:0,
      gacya3_per:0,
      gacya_cishu:0,
      gacha_list_old:[],
      gacya3_name:""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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