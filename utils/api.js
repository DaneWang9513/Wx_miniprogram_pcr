Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = exports.ajax = function o(e, n, c) {
    var s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    s && wx.showLoading({
        title: "加载中..."
    });
    var a = wx.getStorageSync("openId"), i = {};
    i.p = 5, i.did = a, i.ver = "1.8.0", wx.request({
        url: "" + n,
        method: e,
        data: c.data,
        header: {
            c_data: JSON.stringify(i),
            "Content-Type": "POST" != e ? "application/json" : "application/x-www-form-urlencoded"
        },
        success: function(a) {
            wx.hideLoading(), console.log(a), 1 == a.data.code ? c.success && c.success(a.data.data) : 46e3 == a.data.code ? t(function() {
                o(e, n, c, s);
            }) : wx.showToast({
                title: a.data.message,
                icon: "none",
                duration: 1500
            });
        },
        fail: function(o) {
            wx.hideLoading();
        },
        complete: function(o) {
            c.complete && c.complete(o);
        }
    });
}, t = exports.login = function(t) {
    console.log("重新登录"), wx.login({
        success: function(n) {
            var c = n.code, s = {
                code: c
            };
            c ? o("POST", "/config/miniapp", {
                data: s,
                success: function(o) {
                    wx.setStorageSync("openId", o.openId), e(o.detail), "function" == typeof t && (console.log("重新请求"), 
                    t());
                }
            }, !1) : console.log("获取用户登录态失败：" + n.errMsg);
        }
    });
}, e = (exports.update = function(t) {
    o("POST", "/config/cache", {
        data: t,
        success: function(o) {}
    }, !1);
}, exports.syncCache = function(o) {
    o && (console.log(o), n("stock", o.stock), n("catchList", o.catchs), n("attentionList", o.attentions));
}), n = exports.saveIfNotExist = function(o, t) {
    try {
        !wx.getStorageSync(o) && t && (console.log(t), wx.setStorage({
            key: o,
            data: JSON.parse(t)
        }));
    } catch (o) {
        console.log(o);
    }
};