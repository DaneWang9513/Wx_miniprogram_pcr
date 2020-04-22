// miniprogram/pages/equipment/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipment: {},
    dropList: [],
    simpleList: {},
    hardList: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var equipment = JSON.parse(options.equipment)
    console.log(equipment)
    this.setData({
      equipment:equipment
    })
    var dropList = wx.getStorageSync("dropList")
    var imgname = equipment.alt
    console.log("imgname:"+imgname)
    var r = []
    var m = []
    for(var i=0;i<dropList.length;i++){
      //console.log(dropList[i].equipmentReptile.alt)
      if(dropList[i].equipmentReptile.alt == imgname){
        console.log("难度："+dropList[i].difficulty)
        if(dropList[i].difficulty=="普通难度"){
          
          r.push(dropList[i].checkpoint)
          console.log("r:"+r)
          
        }else if(dropList[i].difficulty=="困难难度"){
          
          m.push(dropList[i].checkpoint)
          console.log("m:"+m)
        }
      }
    }
    that.setData({
      simpleList:r,
      hardList:m
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