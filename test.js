/**
 * Created by BIYY on 2018-6-1.
 */
/*! 缇庣殑鐢靛晢鍓嶇鍥㈤槦 */
!function (e) {
  function t (o) {
    if (n[o])return n[o].exports;
    var r = n[o] = {exports: {}, id: o, loaded: !1};
    return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
  }

  var n = {};
  return t.m = e, t.c = n, t.p = "//g.mdcdn.cn/wp/dist/p_ls_header/", t(0)
}([function (e, exports, t) {
  function n () {
    var e = $(".operation_time");
    e.each(function () {
      var e = $(this), t = e.attr("data-time-start"), n = e.attr("data-time-end"),
        o = /^\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}\:\d{2}$/;
      if (o.test(t) && o.test(n)) {
        var r = new Date, a = new Date(t), i = new Date(n);
        a < r && i > r ? e.css("display", "block") : e.remove()
      } else e.remove()
    })
  }

  t(7), n();
  var o = t(6);
  o.init()
}, function (e, exports) {
  var t = {}, n = function e (n, o) {
    var r = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[n] = t[n] || e(document.getElementById(n).innerHTML);
    return o ? r(o) : r
  };
  e.exports = {render: n}
}, function (e, exports, t) {
  var n;
  n = function (require, exports, e) {
    function t (e) {
      function t () {
        n && (n.onload = n.onreadystatechange = n.onerror = null, n.parentNode && n.parentNode.removeChild(n), n = null)
      }

      e.element = e.element || "script";
      var n = document.createElement(e.element);
      n.charset = e.charset || "utf-8", e.onBeforeSend && e.onBeforeSend(n), n.onload = n.onreadystatechange = function () {
        (/loaded|complete/i.test(this.readyState) || navigator.userAgent.toLowerCase().indexOf("msie") == -1) && (e.onload && e.onload(), t())
      }, n.onerror = function () {
        t()
      }, n.src = e.url, document.getElementsByTagName("head")[0].appendChild(n)
    }

    exports.get = t
  }.call(exports, t, exports, e), !(void 0 !== n && (e.exports = n))
}, function (e, exports, t) {
  var n;
  n = function (require, exports, e) {
    var n = t(2);
    exports.rd = function (e) {
      var t = {
        curl: location.href,
        rurl: document.referrer,
        serviceid: 10,
        mtag: "",
        skuid: "",
        shopid: "",
        command: "",
        dealid: "",
        callback: "rdcb"
      }, o = [];
      for (var r in t) {
        var a = e[r];
        a && (t[r] = a), o.push(r + "=" + encodeURIComponent(t[r]))
      }
      n.get({url: "//w.midea.com/common/log/rd?" + o.join("&")})
    }, exports.itil = function (e) {
      var t = {id: "", state: 1, callback: "itilcb"}, o = [];
      for (var r in t) {
        var a = e[r];
        a && (t[r] = a), o.push(r + "=" + encodeURIComponent(t[r]))
      }
      n.get({url: "//w.midea.com/common/log/itil?" + o.join("&")})
    }
  }.call(exports, t, exports, e), !(void 0 !== n && (e.exports = n))
}, function (e, exports) {
  function t (e, t) {
    if (!e)return 0 === e ? "0" : "";
    switch ( t ) {
      case"none":
        return e + "";
      case"html":
        return e.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function (e) {
          return "&#" + e.charCodeAt(0) + ";"
        }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
      case"htmlEp":
        return e.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function (e) {
          return "&#" + e.charCodeAt(0) + ";"
        });
      case"url":
        return escape(e).replace(/\+/g, "%2B");
      case"miniUrl":
        return e.replace(/%/g, "%25");
      case"script":
        return e.replace(/[\\"']/g, function (e) {
          return "\\" + e
        }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
      case"reg":
        return e.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function (e) {
          return "\\" + e
        });
      default:
        return escape(e).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function (e) {
          return "&#" + e.charCodeAt(0) + ";"
        }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />")
    }
  }

  exports.parse = t
}, function (e, exports) {
  function t (e) {
    var t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)"), n = document.cookie.match(t);
    return n && n[2] ? unescape(n[2]) : ""
  }

  function n (e) {
    var t = new RegExp("(^| )" + e + "(?:=([^;]*))?(;|$)"), n = document.cookie.match(t);
    return n && n[2] ? decodeURIComponent(n[2]) : ""
  }

  function o (e, t, n, o, r, a) {
    var i = new Date, n = arguments[2] || null, o = arguments[3] || "/", r = arguments[4] || null,
      a = arguments[5] || !1;
    n ? i.setMinutes(i.getMinutes() + parseInt(n)) : "", document.cookie = e + "=" + escape(t) + (n ? ";expires=" + i.toGMTString() : "") + (o ? ";path=" + o : "") + (r ? ";domain=" + r : "") + (a ? ";secure" : "")
  }

  function r (e, t, n, o, r, a) {
    var i = new Date, n = arguments[2] || null, o = arguments[3] || "/", r = arguments[4] || null,
      a = arguments[5] || !1;
    n ? i.setMinutes(i.getMinutes() + parseInt(n)) : "", document.cookie = e + "=" + encodeURIComponent(t) + (n ? ";expires=" + i.toGMTString() : "") + (o ? ";path=" + o : "") + (r ? ";domain=" + r : "") + (a ? ";secure" : "")
  }

  function a (e, n, o, r) {
    var a = t(e);
    if (null != a) {
      var i = new Date;
      i.setMinutes(i.getMinutes() - 1e3), n = n || "/", document.cookie = e + "=;expires=" + i.toGMTString() + (n ? ";path=" + n : "") + (o ? ";domain=" + o : "") + (r ? ";secure" : "")
    }
  }

  e.exports = {get: t, set: o, getC: n, setC: r, del: a}
}, function (e, exports, t) {
  var n;
  n = function (require, exports, e) {
    function n () {
      var e = (p(), ""), t = "/order/buyer/orderlist";
      d.get("uin") || d.get("uid") ? $.ajax({
        type: "get",
        dataType: "jsonp",
        url: "/my/index/getuserinfo",
        error: function (e) {
        },
        success: function (r) {
          if ("0" == r.errcode || 1003 == r.errcode) {
            var a = r.userInfo || {}, i = $("#J_icon_wrap"), c = $("#J_enterprise_login_wrap"),
              s = $("#J_user_login_wrap");
            a.strNickname || "鐢ㄦ埛" + d.get("uid");
            if (a.strImageUrl && i.find(".head_icon").attr("src", a.strImageUrl), 2 == a.nUinType) console.log("浼佷笟鐢ㄦ埛"), e = c, $(".js_ucenter_href").attr("href", t); else if (2 != a.nUinType && (console.log("涓汉鐢ㄦ埛"), e = s, 2 & a.nUserType)) {
              $("#js_employee").css("display", "block");
              var l = '<li class="nav_item" data-idx="906"><a href="//mall.littleswan.com/my/internal/my/internal/">鍛樺伐鍐呰喘</a></li>';
              $("#J_top_nav").append(l)
            }
            i.addClass("has_login"), e.hover(function () {
              clearTimeout(n)
            }, function () {
              n = setTimeout(function () {
                $(".opt_user_login_success").removeClass("opt_user_hover"), e.hide()
              }, o)
            })
          }
        }
      }) : $("#iconWrap").removeClass("has_login");
      var n, o = 300, r = $("#J_user_unlogin_wrap");
      $(".common_ls_user").hover(function () {
        $(this).addClass("opt_user_hover"), r.show(), clearTimeout(n)
      }, function () {
        var e = this;
        n = setTimeout(function () {
          $(e).removeClass("opt_user_hover"), r.hide()
        }, o)
      }), r.hover(function () {
        clearTimeout(n)
      }, function () {
        n = setTimeout(function () {
          $(".opt_user_login_success").removeClass("opt_user_hover"), r.hide()
        }, o)
      }), $(".head_icon_wrap").hover(function () {
        $(this).addClass("opt_user_hover"), e.show(), clearTimeout(n)
      }, function () {
        var t = this;
        n = setTimeout(function () {
          $(t).removeClass("opt_user_hover"), e.hide()
        }, o)
      });
      var a, i = $("#topItems");
      $(".nav_item").hover(function () {
        var e = $(this).data("idx");
        i.show(), $(".top_items").addClass("top_items--hide").removeClass("top_items--show"), $("#group" + e).removeClass("top_items--hide").addClass("top_items--show"), clearTimeout(a)
      }, function () {
        $(this).data("idx");
        a = setTimeout(function () {
          $(".top_items").addClass("top_items--hide").removeClass("top_items--show"), i.hide()
        }, o)
      }), i.hover(function () {
        clearTimeout(a)
      }, function () {
        a = setTimeout(function () {
          i.hide()
        }, o)
      });
      var c = [];
      $("#J_top_nav .nav_item").each(function () {
        var e = $(this), t = e.data("idx");
        t && c.push(t)
      });
      var s = function e (t, n) {
        var o = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : _formatJson_cache[t] = _formatJson_cache[t] || e(document.getElementById(t).innerHTML);
        return n ? o(n) : o
      };
      $.ajax({
        type: "get",
        dataType: "jsonp",
        url: "/api/get_pools",
        data: {id: c.join(","), length: 6},
        error: function (e) {
        },
        success: function (e) {
          0 == e.errcode && $("#topItems").html(s($("#topItemsTemp").html(), e))
        }
      }), $(".J_logout").on("click", function () {
        $.ajax({
          type: "get", dataType: "json", async: !1, timeout: 5e3, url: "/my/index/login_out", error: function () {
            var e = new Date;
            e.setTime(e.getTime() - 1e4), d.del("uin", "/", "littleswan.com", e.toGMTString()), d.del("uid", "/", "littleswan.com", e.toGMTString()), d.del("wxwebop", "/", "littleswan.com", e.toGMTString()), d.del("qop", "/", "littleswan.com", e.toGMTString()), d.del("wxopenid", "/", "littleswan.com", e.toGMTString()), d.del("skey", "/", "littleswan.com", e.toGMTString())
          }, success: function (e) {
            if (0 != e.data.errcode) {
              var t = new Date;
              t.setTime(t.getTime() - 1e4), d.del("uin", "/", "littleswan.com", t.toGMTString()), d.del("uid", "/", "littleswan.com", t.toGMTString()), d.del("wxwebop", "/", "littleswan.com", t.toGMTString()), d.del("qop", "/", "littleswan.com", t.toGMTString()), d.del("wxopenid", "/", "littleswan.com", t.toGMTString()), d.del("skey", "/", "littleswan.com", t.toGMTString())
            }
          }
        }), location.reload()
      });
      var l = $(".search_wrap"), u = l.find("form").eq(0), m = l.find("input").eq(0),
        _ = l.find('input[name="default_link"]');
      u.on("submit", function (e) {
        return e.preventDefault(), "" == $.trim(m.val()) ? location.href = _.val() : $(this).get(0).submit(), !1
      }), l.find(".common_ls_search").on("click", function (e) {
        return e.preventDefault(), "" == $.trim(m.val()) ? location.href = _.val() : u.submit(), !1
      })
    }

    function o () {
      d.get("uin") || d.get("uid") ? $.ajax({
        type: "POST",
        dataType: "json",
        url: "//mall.littleswan.com/my/index/ajax_index_cart_num",
        success: function (e) {
          if (0 === e.errcode) {
            var t = e.data.nCount;
            t ? (_.html(t), s("something")) : (_.html("0"), s("nothing"))
          } else s("nothing")
        },
        error: function () {
          s("nothing")
        }
      }) : s("login")
    }

    function r () {
      d.get("uin") || d.get("uid") ? $.ajax({
        type: "POST",
        dataType: "json",
        url: "//mall.littleswan.com/cart/index/ajax_query_cart_sum",
        success: function (e) {
          if (0 === e.errcode) {
            var t = e.data.cartSum;
            0 == t ? (_.html("0"), m(), c(), s("nothing")) : (_.html(t), a())
          } else m(), c(), s("nothing")
        },
        error: function () {
          m(), c(), s("nothing")
        }
      }) : l()
    }

    function a () {
      $.ajax({
        type: "POST", dataType: "json", url: "/cart/index/ajax_query_cart_cover", success: function (e) {
          e ? ($(".js_common_cart_list").html(e), u(), i()) : s("nothing")
        }, error: function () {
          s("nothing")
        }
      })
    }

    function i () {
      $(".js_common_cart_delete").on("click", function () {
        var e = $(this).attr("data-id"), t = [e];
        $.ajax({
          type: "POST",
          data: {arr_id: t},
          dataType: "json",
          url: "//mall.littleswan.com/cart/index/ajax_delete_header_item",
          success: function (e) {
            0 != e.errcode && 559091715 != e.errcode || r()
          },
          error: function (e) {
            r()
          }
        })
      })
    }

    function c () {
      var e = $(".common_ls_cart");
      e.off("click"), e.off("hover"), $(".common_cart_wrap").off("hover")
    }

    function s (e) {
      var t, n = !0, o = 300, r = $(".common_ls_cart");
      r.on("click", function () {
        location.href = "//mall.littleswan.com/cart"
      }), r.hover(function () {
        switch ( r.addClass("opt_cart_hover"), e ) {
          case"login":
            l();
            break;
          case"something":
            n && a();
            break;
          case"nothing":
            m();
            break;
          default:
            m()
        }
        clearTimeout(t)
      }, function () {
        t = setTimeout(function () {
          r.removeClass("opt_cart_hover"), $(".common_cart_wrap").removeClass("common_cart_wrap_login common_cart_wrap_nothing common_cart_wrap_something")
        }, o)
      }), $(".common_cart_wrap").hover(function () {
        clearTimeout(t)
      }, function () {
        t = setTimeout(function () {
          r.removeClass("opt_cart_hover"), $(".common_cart_wrap").removeClass("common_cart_wrap_login common_cart_wrap_nothing common_cart_wrap_something")
        }, o)
      })
    }

    function l () {
      $(".common_cart_wrap").removeClass("common_cart_wrap_something common_cart_wrap_nothing").addClass("common_cart_wrap_login")
    }

    function u () {
      $(".common_cart_wrap").css("right", $(".opt_user_login_success").outerWidth()).removeClass("common_cart_wrap_login common_cart_wrap_nothing").addClass("common_cart_wrap_something")
    }

    function m () {
      $(".common_cart_wrap").css("right", $(".opt_user_login_success").outerWidth()).removeClass("common_cart_wrap_something common_cart_wrap_login").addClass("common_cart_wrap_nothing")
    }

    function p () {
      var e = location.pathname, t = ["/enterprise/", "/next/qyuser/"], n = !1;
      return $.each(t, function (t, o) {
        0 === e.indexOf(o) && (n = !0)
      }), n
    }

    var $ = t(8), d = (t(1), t(5)), _ = (t(4), t(3), $("#lsCarNum"));
    exports.init = function () {
      n(), o()
    }
  }.call(exports, t, exports, e), !(void 0 !== n && (e.exports = n))
}, function (e, exports) {
}, function (e, exports) {
  e.exports = jQuery
}]);
//# sourceMappingURL=global.2052.dc911.js.map