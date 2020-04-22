var t = getApp(), e = require("../../../utils/data.js");

Component({
    options: {
        addGlobalClass: !0
    },
    data: {
        CustomBar: t.globalData.CustomBar,
        isSearch: !1,
        searchWord: "",
        menuShow: !1,
        monthOption: [],
        raceOption: [],
        natureOption:[],
        sort: 1,
        nameSort: "asc",
        birthdaySort: "asc",
        races: [ "前卫", "中卫", "后卫" ],
        natures: [ "一星", "二星", "三星" ],
        result: [],
        residents: e.residents
    },
    attached: function() {
        var t = wx.getStorageSync("filterStatus1");
        this.setData(t), this.searchUpdate("");
    },
    onUnload: function() {
        var t = getCurrentPages();
        t[t.length - 2].refresh();
    },
    methods: {
        sortSelect: function(t) {
            var e = t.currentTarget.dataset.type, i = this.data.nameSort, a = this.data.birthdaySort;
            e == this.data.sort && (1 == e ? i = "asc" == i ? "desc" : "asc" : 2 == e && (a = "asc" == a ? "desc" : "asc")), 
            this.setData({
                sort: e,
                nameSort: i,
                birthdaySort: a
            }), this.refresh();
        },
        refreshByPage: function() {
            var t = wx.getStorageSync("attentionList") || [];
            this.setData({
                attentionList: t
            }), this.refresh(!1);
        },
        refresh: function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.searchUpdate(this.data.searchWord, t);
        },
        search: function() {
            this.data.isSearch && 0 == this.data.result.length && wx.showToast({
                title: "该关键词搜索下无结果哦，换个关键字再试试.",
                icon: "none"
            }), this.refresh();
        },
        searchBindInput: function(t) {
            this.searchUpdate(t.detail.value);
        },
        searchUpdate: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (!t) return this.setData({
                isSearch: !1,
                searchWord: ""
            }), i = this.filterSearchResult(this.data.residents), void (e ? this.paging(i) : this.setData({
                result: i
            }));
            for (var i = [], a = this.data.residents, s = 0; s < a.length; s++) (a[s].name.indexOf(t) > -1 ) && i.push(a[s]);
            i = this.filterSearchResult(i), e ? (this.setData({
                isSearch: !0,
                searchWord: t
            }), this.paging(i)) : this.setData({
                isSearch: !0,
                result: i,
                searchWord: t
            });
        },
        paging: function(t) {
            var e = this;
            t.length < 100 ? this.setData({
                result: t
            }) : (this.setData({
                result: t.slice(0, 100)
            }), setTimeout(function() {
                e.setData({
                    result: t
                });
            }, 1e3));
        },
        searchDelete: function() {
            this.searchUpdate("");
        },
        detail: function(e) {
            var i = e.currentTarget.dataset.id, a = this.data.result, s = a[i];
            t.globalData.detailList = a, wx.navigateTo({
                url: "../component/detail/detail?item=" + JSON.stringify(s) + "&idx=" + i
            });
        },
        filterClose: function() {
            this.setData({
                menuShow: !1
            });
        },
        filter: function() {
            this.setData({
                menuShow: !this.data.menuShow
            });
        },
        optionReset: function() {
            this.setData({
                sexOption: "",
                attentionOption: "",
                monthOption: [],
                raceOption: [],
                natureOption: [],
                isFilter: !1
            }), this.paging(this.data.residents), wx.setStorage({
                key: "filterStatus1",
                data: ""
            });
        },
        optionFinish: function() {
            this.setData({
                menuShow: !1
            }), this.refresh();
        },
        filterSearchResult: function(t) {
            if (!this.isFilterJudge()) return this.sortList(t);
            var e = {
                sexOption: this.data.sexOption,
                attentionOption: this.data.attentionOption,
                monthOption: this.data.monthOption,
                raceOption: this.data.raceOption,
                natureOption: this.data.natureOption
            };
            return wx.setStorage({
                key: "filterStatus1",
                data: e
            }), this.sortList(this.conditionFilter(t, this.data.sexOption, this.data.monthOption, this.data.raceOption, this.data.natureOption,this.data.attentionOption));
        },
        sortList: function(t) {
            var e = this.data.sort, i = this.data.nameSort, a = this.data.birthdaySort;
            return 1 == e ? "asc" == i ? t : t.reverse() : 2 == e ? "asc" == a ? this.birthdaySortResult(t) : this.birthdaySortResult(t).reverse() : void 0;
        },
        conditionFilter: function(t, e, i, a,m, s) {
            for (var r = [], n = 0; n < t.length; n++) this.sexFilter(e, t[n]) && this.monthFilter(i, t[n]) && this.raceFilter(a, t[n])&& this.natureFilter(m, t[n]) && this.attentionFilter(s, t[n]) && r.push(t[n]);
            return r;
        },
        monthFilter: function(t, e) {
            if (t && t.length > 0) {
                for (var i = 0; i < t.length; i++) if (0 == e.birthday.indexOf(t[i] + "月")) return !0;
                return !1;
            }
            return !0;
        },
        sexFilter: function(t, e) {
            return !t || (1 == t && "♂" == e.sex || 2 == t && "♀" == e.sex);
        },
        raceFilter: function(t, e) {
            if (t && t.length > 0) {
                for (var i = 0; i < t.length; i++) if (e.race == t[i]) return !0;
                return !1;
            }
            return !0;
        },
        natureFilter: function(t, e) {
            if (t && t.length > 0) {
                for (var i = 0; i < t.length; i++) if (e.nature == t[i]) return !0;
                return !1;
            }
            return !0;
        },
        attentionFilter: function(t, e) {
            if (t) {
                var i = this.isAttentioned(e.name);
                return !(2 != t || !i) || 1 == t && !i;
            }
            return !0;
        },
        isArrayEmpty: function(t) {
            return !!(t && t.length > 0);
        },
        isAttentioned: function(t) {
            return (wx.getStorageSync("attentionList") || []).indexOf(t) > -1;
        },
        isFilterJudge: function() {
            var t = !!(this.data.sexOption || this.data.attentionOption || this.isArrayEmpty(this.data.monthOption) || this.isArrayEmpty(this.data.raceOption)|| this.isArrayEmpty(this.data.natureOption));
            return this.setData({
                isFilter: t
            }), t;
        },
        singleOptionChoose: function(t) {
            var e = t.currentTarget.dataset.value, i = t.currentTarget.dataset.module + "Option";
            this.data[i] == e && (e = "");
            var a = {};
            a[i] = e, this.setData(a), this.refresh();
        },
        multipleOptionChoose: function(t) {
            var e = t.currentTarget.dataset.value, i = t.currentTarget.dataset.module + "Option", a = this.data[i];
            console.log(a), -1 == a.indexOf(e) ? a.push(e) : a.splice(a.indexOf(e), 1);
            var s = {};
            s[i] = a, this.setData(s), this.refresh();
        },
        birthdaySortResult: function(t) {
            return t.sort(function(t, e) {
                var i = t.birthday, a = e.birthday;
                return parseInt(i.split("月")[0]) > parseInt(a.split("月")[0]) ? 1 : parseInt(i.split("月")[0]) < parseInt(a.split("月")[0]) ? -1 : i.split("月")[1].substr(0, i.split("月")[1].length - 1) - a.split("月")[1].substr(0, a.split("月")[1].length - 1);
            });
        }
    }
});