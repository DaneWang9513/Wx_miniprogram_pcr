var WxParse = require('../../../wxParse/wxParse.js');
function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), i = require("../../../utils/api.js");

Page((a = {
    data: {
        StatusBar: e.globalData.StatusBar,
        CustomBar: e.globalData.CustomBar,
        ColorList: e.globalData.ColorList,
        attentioned: !1
    },
    onLoad: function(t) {
        var that = this
        var a = JSON.parse(t.item);
        this.setData({
            item: a,
            idx: parseInt(t.idx)
        }), this.focus();
        console.log(a.option_name)
        var option_p = a.option_name
        wx.request({
            url: getApp().globalData.urlpath +"/gzlj_rwtj_"+option_p,
            data: {
              authen: "JXU1MTZDJXU0RTNCJXU4RkRFJXU3RUQzJXU2M0E1JXU1M0Uz",
            },
            method: "GET",
            success: function (res) {
              console.log(res.data)
              var article = res.data
              WxParse.wxParse('article', 'html', article, that, 5);
              
            }
        })
    },
    onUnload: function() {
        var t = getCurrentPages();
        t[t.length - 2].refresh();
    },
    pageBack: function() {
        var t = getCurrentPages();
        t[t.length - 2].refresh(), wx.navigateBack({
            delta: 1
        });
    },
    focus: function() {
        var t = wx.getStorageSync("attentionList") || [], a = this.data.item.name;
        this.setData({
            attentioned: -1 != t.indexOf(a)
        });
    }
}, t(a, "pageBack", function() {
    wx.navigateBack({
        delta: 1
    });
}), t(a, "attention", function(t) {
    var a = wx.getStorageSync("attentionList") || [], e = this.data.item.name;
    t.detail.value ? -1 == a.indexOf(e) && a.push(e) : -1 != a.indexOf(e) && a.splice(a.indexOf(e), 1), 
    wx.setStorageSync("attentionList", a), i.update({
        attentionList: a
    });
}), t(a, "change", function(t) {
    var a = this.data.idx + parseInt(t.currentTarget.dataset.module);
    if (a >= e.globalData.detailList.length) wx.showToast({
        title: "后面已经没有了哦",
        icon: "none"
    }); else if (a < 0) wx.showToast({
        title: "前面已经没有了哦",
        icon: "none"
    }); else {
        var i = e.globalData.detailList[a];
        this.setData({
            item: i,
            idx: a
        }), this.focus();
    }
}), a));