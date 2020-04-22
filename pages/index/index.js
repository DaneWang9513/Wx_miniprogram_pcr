var WxParse = require('../../wxParse/wxParse.js');
let interstitialAd = null
Page({
  data: {
    PageCur: 'basics',
    TabCur: 0,
    scrollLeft:0,
    tablist:['美食殿堂','黎明之星','拉比林斯','慈乐之音','小小甜心','森林守卫','恶魔伪王国军','王宫骑士团','咲恋育幼院','哞哞自卫队','伊丽莎白牧场','墨丘利财团','暮光流星群','月光学院','纯白之翼 兰德索尔分部','圣特蕾莎女子学院','龙族巢穴','社内联动','其他','社外联动','New Generations'],
    OpenPage:1,
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  tabSelect(e) {
    var that = this;
    var arrlist = ['gzlj_rw_msdt','gzlj_rw_lmzx','gzlj_rw_lbls','gzlj_rw_clzy','gzlj_rw_xxtx','gzlj_rw_slsw','gzlj_rw_emwwgj','gzlj_rw_wgqst','gzlj_rw_dlyyy','gzlj_rw_mmzwd','gzlj_rw_ylsbmc','gzlj_rw_mqlct','gzlj_rw_mglxq','gzlj_rw_ygxy','gzlj_rw_cbzy','gzlj_rw_stlsnz','gzlj_rw_lzcx','gzlj_rw_snld','gzlj_rw_qt','gzlj_rw_snld','gzlj_rw_ng']
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    let option = arrlist[e.currentTarget.dataset.id]
    wx.request({
      url: getApp().globalData.urlpath +"/"+option,
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
     
    wx.request({
      url: getApp().globalData.urlpath1 +"/equipmentList",
      data: {},
      method: "POST",
      success: function (res) {
        console.log(res.data)
        wx.setStorageSync("equipmentList", res.data);       
      }
    })
    wx.request({
      url: getApp().globalData.urlpath1 +"/characterList",
      data: {},
      method: "POST",
      success: function (res) {
        console.log(res.data)
        wx.setStorageSync("characterList", res.data);       
      }
    })
    wx.request({
      url: getApp().globalData.urlpath1 +"/dropList",
      data: {},
      method: "POST",
      success: function (res) {
        console.log(res.data)
        wx.setStorageSync("dropList", res.data);       
      }
    })
    setTimeout(function () {if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-ed34d970b2510149'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }
    
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }},2000)
  },
  onShareAppMessage() {
    return {
      title: '公主连结百科',
      imageUrl: 'https://wxdc.bsrse.com/media/image/logo_gz.jpg',
      path: '/pages/index/index'
    }
  },
})
