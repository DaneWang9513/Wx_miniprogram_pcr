// pages/equipment/list/list.js
var t = getApp()
Component({
  options: {
    addGlobalClass: !0
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    equipmentList:wx.getStorageSync("equipmentList"),
    CustomBar: t.globalData.CustomBar,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    GetDetialMessage: function (e) {
      var index = e.target.dataset.index;
      var key = JSON.stringify(index);
      console.log(key)
      wx.navigateTo({
        url: "../equipment/detail/detail?equipment=" + key
      })
    },
  }
})
