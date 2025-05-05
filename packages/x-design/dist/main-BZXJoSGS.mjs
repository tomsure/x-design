import { watch as dt, reactive as Gt, h as d, resolveComponent as mn, defineComponent as Mt, inject as gt, computed as Ce, nextTick as ne, createApp as Th, ref as Ue, Teleport as Yr, createCommentVNode as Rt, provide as Yt, onMounted as gn, onUnmounted as fn, onBeforeUnmount as Qi, TransitionGroup as Rh, getCurrentInstance as Od, onActivated as Sd, onDeactivated as Dh, createElementBlock as Td, openBlock as Rd, createElementVNode as Mh } from "vue";
var QN = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kh = {
  cookies: {
    path: "/"
  },
  treeOptions: {
    parentKey: "parentId",
    key: "id",
    children: "children"
  },
  parseDateFormat: "yyyy-MM-dd HH:mm:ss",
  firstDayOfWeek: 1
}, Ro = kh;
function Nh(e, t, n) {
  if (e)
    if (e.forEach)
      e.forEach(t, n);
    else
      for (var o = 0, s = e.length; o < s; o++)
        t.call(n, e[o], o, e);
}
var Mn = Nh, Ih = Object.prototype.toString, Dd = Ih, Fh = Dd;
function Ph(e) {
  return function(t) {
    return "[object " + e + "]" === Fh.call(t);
  };
}
var ql = Ph, Lh = ql, Vh = Array.isArray || Lh("Array"), Wt = Vh;
function Ah(e, t) {
  return e && e.hasOwnProperty ? e.hasOwnProperty(t) : !1;
}
var to = Ah, _h = to;
function Bh(e, t, n) {
  if (e)
    for (var o in e)
      _h(e, o) && t.call(n, e[o], o, e);
}
var Gl = Bh, Hh = Wt, Wh = Mn, zh = Gl;
function jh(e, t, n) {
  return e && (Hh(e) ? Wh : zh)(e, t, n);
}
var on = jh;
function qh(e) {
  return function(t) {
    return typeof t === e;
  };
}
var Ur = qh, Gh = Ur, Yh = Gh("function"), Vn = Yh, Uh = on;
function Kh(e, t) {
  var n = Object[e];
  return function(o) {
    var s = [];
    if (o) {
      if (n)
        return n(o);
      Uh(o, t > 1 ? function(u) {
        s.push(["" + u, o[u]]);
      } : function() {
        s.push(arguments[t]);
      });
    }
    return s;
  };
}
var ea = Kh, Xh = ea, Zh = Xh("keys", 1), Do = Zh, Jh = Dd, Qh = Gl, em = Mn;
function fi(e, t) {
  var n = e.__proto__.constructor;
  return t ? new n(t) : new n();
}
function us(e, t) {
  return t ? Md(e, t) : e;
}
function Md(e, t) {
  if (e)
    switch (Jh.call(e)) {
      case "[object Object]": {
        var n = Object.create(Object.getPrototypeOf(e));
        return Qh(e, function(c, h) {
          n[h] = us(c, t);
        }), n;
      }
      case "[object Date]":
      case "[object RegExp]":
        return fi(e, e.valueOf());
      case "[object Array]":
      case "[object Arguments]": {
        var o = [];
        return em(e, function(c) {
          o.push(us(c, t));
        }), o;
      }
      case "[object Set]": {
        var s = fi(e);
        return s.forEach(function(c) {
          s.add(us(c, t));
        }), s;
      }
      case "[object Map]": {
        var u = fi(e);
        return u.forEach(function(c, h) {
          u.set(h, us(c, t));
        }), u;
      }
    }
  return e;
}
function tm(e, t) {
  return e && Md(e, t);
}
var ta = tm, nm = Mn, om = Do, rm = Wt, lm = ta, hc = Object.assign;
function mc(e, t, n) {
  for (var o = t.length, s, u = 1; u < o; u++)
    s = t[u], nm(om(t[u]), n ? function(c) {
      e[c] = lm(s[c], n);
    } : function(c) {
      e[c] = s[c];
    });
  return e;
}
var sm = function(e) {
  if (e) {
    var t = arguments;
    if (e === !0) {
      if (t.length > 1)
        return e = rm(e[1]) ? [] : {}, mc(e, t, !0);
    } else
      return hc ? hc.apply(Object, t) : mc(e, t);
  }
  return e;
}, no = sm, im = Ro, am = Mn, cm = on, um = Vn, dm = no, mr = function() {
};
function fm() {
  am(arguments, function(e) {
    cm(e, function(t, n) {
      mr[n] = um(t) ? function() {
        var o = t.apply(mr.$context, arguments);
        return mr.$context = null, o;
      } : t;
    });
  });
}
function pm(e) {
  return dm(im, e);
}
mr.VERSION = "3.5.25";
mr.mixin = fm;
mr.setup = pm;
var hm = mr;
function mm(e, t, n) {
  for (var o = e.length - 1; o >= 0; o--)
    t.call(n, e[o], o, e);
}
var na = mm, gm = na, vm = Do;
function bm(e, t, n) {
  gm(vm(e), function(o) {
    t.call(n, e[o], o, e);
  });
}
var $d = bm;
function xm(e) {
  return e === null;
}
var Mo = xm, Cm = Mo;
function ym(e, t) {
  return function(n) {
    return Cm(n) ? t : n[e];
  };
}
var Kr = ym, Em = on, wm = Vn, Om = Kr;
function Sm(e, t, n) {
  var o = {};
  if (e)
    if (t)
      wm(t) || (t = Om(t)), Em(e, function(s, u) {
        o[u] = t.call(n, s, u, e);
      });
    else
      return e;
  return o;
}
var Tm = Sm;
function Rm(e) {
  return e ? e.constructor === Object : !1;
}
var Xr = Rm, gc = Wt, vc = Xr, Dm = on;
function kd(e, t) {
  return vc(e) && vc(t) || gc(e) && gc(t) ? (Dm(t, function(n, o) {
    e[o] = kd(e[o], n);
  }), e) : t;
}
var Mm = function(e) {
  e || (e = {});
  for (var t = arguments, n = t.length, o, s = 1; s < n; s++)
    o = t[s], o && kd(e, o);
  return e;
}, $m = Mm, km = on;
function Nm(e, t, n) {
  var o = [];
  if (e && arguments.length > 1) {
    if (e.map)
      return e.map(t, n);
    km(e, function() {
      o.push(t.apply(n, arguments));
    });
  }
  return o;
}
var Zr = Nm, Im = to, Fm = Wt;
function Pm(e, t, n, o, s) {
  return function(u, c, h) {
    if (u && c) {
      if (e && u[e])
        return u[e](c, h);
      if (t && Fm(u)) {
        for (var i = 0, m = u.length; i < m; i++)
          if (!!c.call(h, u[i], i, u) === o)
            return [!0, !1, i, u[i]][n];
      } else
        for (var p in u)
          if (Im(u, p) && !!c.call(h, u[p], p, u) === o)
            return [!0, !1, p, u[p]][n];
    }
    return s;
  };
}
var Is = Pm, Lm = Is, Vm = Lm("some", 1, 0, !0, !1), Nd = Vm, Am = Is, _m = Am("every", 1, 1, !1, !0), Id = _m, Bm = to;
function Hm(e, t) {
  if (e) {
    if (e.includes)
      return e.includes(t);
    for (var n in e)
      if (Bm(e, n) && t === e[n])
        return !0;
  }
  return !1;
}
var Yl = Hm, bc = Wt, xc = Yl;
function Wm(e, t) {
  var n, o = 0;
  if (bc(e) && bc(t)) {
    for (n = t.length; o < n; o++)
      if (!xc(e, t[o]))
        return !1;
    return !0;
  }
  return xc(e, t);
}
var Fd = Wm, Cc = on, zm = Yl, jm = Vn, qm = Kr;
function Gm(e, t, n) {
  var o = [];
  if (t) {
    jm(t) || (t = qm(t));
    var s, u = {};
    Cc(e, function(c, h) {
      s = t.call(n, c, h, e), u[s] || (u[s] = 1, o.push(c));
    });
  } else
    Cc(e, function(c) {
      zm(o, c) || o.push(c);
    });
  return o;
}
var Pd = Gm, Ym = Zr;
function Um(e) {
  return Ym(e, function(t) {
    return t;
  });
}
var oa = Um, Km = Pd, Xm = oa;
function Zm() {
  for (var e = arguments, t = [], n = 0, o = e.length; n < o; n++)
    t = t.concat(Xm(e[n]));
  return Km(t);
}
var Jm = Zm, Qm = "undefined", oo = Qm, eg = oo, tg = Ur, ng = tg(eg), mo = ng, og = Mo, rg = mo;
function lg(e) {
  return og(e) || rg(e);
}
var Uo = lg, sg = /(.+)?\[(\d+)\]$/, Ld = sg;
function ig(e) {
  return e ? e.splice && e.join ? e : ("" + e).replace(/(\[\d+\])\.?/g, "$1.").replace(/\.$/, "").split(".") : [];
}
var ra = ig, ag = Ld, cg = ra, ug = to, dg = mo, Vd = Uo;
function fg(e, t, n) {
  if (Vd(e))
    return n;
  var o = hg(e, t);
  return dg(o) ? n : o;
}
function pg(e, t) {
  var n = t ? t.match(ag) : "";
  return n ? n[1] ? e[n[1]] ? e[n[1]][n[2]] : void 0 : e[n[2]] : e[t];
}
function hg(e, t) {
  if (e) {
    var n, o, s, u = 0;
    if (e[t] || ug(e, t))
      return e[t];
    if (o = cg(t), s = o.length, s) {
      for (n = e; u < s; u++)
        if (n = pg(n, o[u]), Vd(n))
          return u === s - 1 ? n : void 0;
    }
    return n;
  }
}
var Ul = fg, yc = Mn, mg = oa, Ec = Zr, wc = Wt, gg = Vn, vg = Xr, Oc = mo, bg = Mo, xg = Uo, Cg = Ul, yg = Kr, Eg = "asc", wg = "desc";
function ji(e, t) {
  return Oc(e) ? 1 : bg(e) ? Oc(t) ? -1 : 1 : e && e.localeCompare ? e.localeCompare(t) : e > t ? 1 : -1;
}
function Og(e, t, n) {
  return function(o, s) {
    var u = o[e], c = s[e];
    return u === c ? n ? n(o, s) : 0 : t.order === wg ? ji(c, u) : ji(u, c);
  };
}
function Sg(e, t, n, o) {
  var s = [];
  return n = wc(n) ? n : [n], yc(n, function(u, c) {
    if (u) {
      var h = u, i;
      wc(u) ? (h = u[0], i = u[1]) : vg(u) && (h = u.field, i = u.order), s.push({
        field: h,
        order: i || Eg
      }), yc(t, gg(h) ? function(m, p) {
        m[c] = h.call(o, m.data, p, e);
      } : function(m) {
        m[c] = h ? Cg(m.data, h) : m.data;
      });
    }
  }), s;
}
function Tg(e, t, n) {
  if (e) {
    if (xg(t))
      return mg(e).sort(ji);
    for (var o, s = Ec(e, function(h) {
      return { data: h };
    }), u = Sg(e, s, t, n), c = u.length - 1; c >= 0; )
      o = Og(c, u[c], o), c--;
    return o && (s = s.sort(o)), Ec(s, yg("data"));
  }
  return [];
}
var la = Tg, Rg = la, Dg = Rg, Mg = Dg;
function $g(e, t) {
  return e >= t ? e : (e = e >> 0) + Math.round(Math.random() * ((t || 9) - e));
}
var Ad = $g, kg = ea, Ng = kg("values", 0), Jr = Ng, Ig = Ad, Fg = Jr;
function Pg(e) {
  for (var t, n = [], o = Fg(e), s = o.length - 1; s >= 0; s--)
    t = s > 0 ? Ig(0, s) : 0, n.push(o[t]), o.splice(t, 1);
  return n;
}
var _d = Pg, Lg = _d;
function Vg(e, t) {
  var n = Lg(e);
  return arguments.length <= 1 ? n[0] : (t < n.length && (n.length = t || 0), n);
}
var Ag = Vg;
function _g(e) {
  return function(t) {
    if (t) {
      var n = e(t && t.replace ? t.replace(/,/g, "") : t);
      if (!isNaN(n))
        return n;
    }
    return 0;
  };
}
var Bd = _g, Bg = Bd, Hg = Bg(parseFloat), Cr = Hg, Sc = Cr;
function Wg(e, t, n) {
  var o = [], s = arguments.length;
  if (e) {
    if (t = s >= 2 ? Sc(t) : 0, n = s >= 3 ? Sc(n) : e.length, e.slice)
      return e.slice(t, n);
    for (; t < n; t++)
      o.push(e[t]);
  }
  return o;
}
var yr = Wg, zg = on;
function jg(e, t, n) {
  var o = [];
  if (e && t) {
    if (e.filter)
      return e.filter(t, n);
    zg(e, function(s, u) {
      t.call(n, s, u, e) && o.push(s);
    });
  }
  return o;
}
var qg = jg, Gg = Is, Yg = Gg("", 0, 2, !0), Ug = Yg, Kg = Is, Xg = Kg("find", 1, 3, !0), Zg = Xg, Jg = Wt, Qg = Jr;
function ev(e, t, n) {
  if (e) {
    Jg(e) || (e = Qg(e));
    for (var o = e.length - 1; o >= 0; o--)
      if (t.call(n, e[o], o, e))
        return e[o];
  }
}
var tv = ev, nv = Do;
function ov(e, t, n) {
  if (e) {
    var o, s, u = 0, c = null, h = n, i = arguments.length > 2, m = nv(e);
    if (e.length && e.reduce)
      return s = function() {
        return t.apply(c, arguments);
      }, i ? e.reduce(s, h) : e.reduce(s);
    for (i && (u = 1, h = e[m[0]]), o = m.length; u < o; u++)
      h = t.call(c, h, e[m[u]], u, e);
    return h;
  }
}
var rv = ov, lv = Wt;
function sv(e, t, n, o) {
  if (lv(e) && e.copyWithin)
    return e.copyWithin(t, n, o);
  var s, u, c = t >> 0, h = n >> 0, i = e.length, m = arguments.length > 3 ? o >> 0 : i;
  if (c < i && (c = c >= 0 ? c : i + c, c >= 0 && (h = h >= 0 ? h : i + h, m = m >= 0 ? m : i + m, h < m)))
    for (s = 0, u = e.slice(h, m); c < i && !(u.length <= s); c++)
      e[c] = u[s++];
  return e;
}
var iv = sv, av = Wt;
function cv(e, t) {
  var n, o = [], s = t >> 0 || 1;
  if (av(e))
    if (s >= 0 && e.length > s)
      for (n = 0; n < e.length; )
        o.push(e.slice(n, n + s)), n += s;
    else
      o = e.length ? [e] : e;
  return o;
}
var uv = cv, dv = Zr, fv = Kr;
function pv(e, t) {
  return dv(e, fv(t));
}
var Hd = pv, hv = Vn, Tc = Uo, mv = Ul, gv = Mn;
function vv(e) {
  return function(t, n) {
    if (t && t.length) {
      var o, s;
      return gv(t, function(u, c) {
        n && (u = hv(n) ? n(u, c, t) : mv(u, n)), !Tc(u) && (Tc(o) || e(o, u)) && (s = c, o = u);
      }), t[s];
    }
    return o;
  };
}
var Wd = vv, bv = Wd, xv = bv(function(e, t) {
  return e < t;
}), zd = xv, Cv = Hd, yv = zd;
function Ev(e) {
  var t, n, o, s = [];
  if (e && e.length)
    for (t = 0, n = yv(e, function(u) {
      return u ? u.length : 0;
    }), o = n ? n.length : 0; t < o; t++)
      s.push(Cv(e, t));
  return s;
}
var jd = Ev, wv = jd;
function Ov() {
  return wv(arguments);
}
var Sv = Ov, Tv = Jr, Rv = on;
function Dv(e, t) {
  var n = {};
  return t = t || [], Rv(Tv(e), function(o, s) {
    n[o] = t[s];
  }), n;
}
var Mv = Dv, qd = Wt, $v = Mn;
function Gd(e, t) {
  var n = [];
  return $v(e, function(o) {
    n = n.concat(qd(o) ? t ? Gd(o, t) : o : [o]);
  }), n;
}
function kv(e, t) {
  return qd(e) ? Gd(e, t) : [];
}
var Nv = kv, Iv = Zr, Fv = Wt;
function Pv(e, t) {
  for (var n = 0, o = t.length; e && n < o; )
    e = e[t[n++]];
  return o && e ? e : 0;
}
function Lv(e, t) {
  for (var n, o = arguments, s = [], u = [], c = 2, h = o.length; c < h; c++)
    s.push(o[c]);
  if (Fv(t)) {
    for (h = t.length - 1, c = 0; c < h; c++)
      u.push(t[c]);
    t = t[h];
  }
  return Iv(e, function(i) {
    if (u.length && (i = Pv(i, u)), n = i[t] || t, n && n.apply)
      return n.apply(i, s);
  });
}
var Vv = Lv;
function Av(e, t) {
  try {
    delete e[t];
  } catch {
    e[t] = void 0;
  }
}
var Yd = Av, _v = Wt, Bv = na, Hv = $d;
function Wv(e, t, n) {
  return e && (_v(e) ? Bv : Hv)(e, t, n);
}
var Ud = Wv, zv = Ur, jv = zv("object"), Fs = jv, qv = Yd, Gv = Xr, Yv = Fs, Uv = Wt, Kv = Mo, Xv = no, Zv = Gl;
function Jv(e, t, n) {
  if (e) {
    var o, s = arguments.length > 1 && (Kv(t) || !Yv(t)), u = s ? n : t;
    if (Gv(e))
      Zv(e, s ? function(c, h) {
        e[h] = t;
      } : function(c, h) {
        qv(e, h);
      }), u && Xv(e, u);
    else if (Uv(e)) {
      if (s)
        for (o = e.length; o > 0; )
          o--, e[o] = t;
      else
        e.length = 0;
      u && e.push.apply(e, u);
    }
  }
  return e;
}
var Kd = Jv, Qv = Yd, eb = Vn, tb = Wt, nb = on, ob = Mn, rb = Ud, lb = Kd, sb = Uo;
function ib(e) {
  return function(t, n) {
    return n === e;
  };
}
function ab(e, t, n) {
  if (e) {
    if (!sb(t)) {
      var o = [], s = [];
      return eb(t) || (t = ib(t)), nb(e, function(u, c, h) {
        t.call(n, u, c, h) && o.push(c);
      }), tb(e) ? rb(o, function(u, c) {
        s.push(e[u]), e.splice(u, 1);
      }) : (s = {}, ob(o, function(u) {
        s[u] = e[u], Qv(e, u);
      })), s;
    }
    return lb(e);
  }
  return e;
}
var Xd = ab, cb = Ro, ub = la, db = ta, fb = Uo, qi = on, pb = Xd, hb = no;
function mb(e, t) {
  qi(e, function(n) {
    n[t] && !n[t].length && pb(n, t);
  });
}
function gb(e, t) {
  var n = hb({}, cb.treeOptions, t), o = n.strict, s = n.key, u = n.parentKey, c = n.children, h = n.mapChildren, i = n.sortKey, m = n.reverse, p = n.data, b = [], D = {}, A = {}, $, O, B;
  return i && (e = ub(db(e), i), m && (e = e.reverse())), qi(e, function(E) {
    $ = E[s], A[$] = !0;
  }), qi(e, function(E) {
    $ = E[s], p ? (O = {}, O[p] = E) : O = E, B = E[u], D[$] = D[$] || [], D[B] = D[B] || [], D[B].push(O), O[s] = $, O[u] = B, O[c] = D[$], h && (O[h] = D[$]), (!o || o && fb(B)) && (A[B] || b.push(O));
  }), o && mb(e, c), b;
}
var vb = gb, bb = Ro, xb = on, Cb = no;
function Zd(e, t, n) {
  var o = n.children, s = n.data, u = n.clear;
  return xb(t, function(c) {
    var h = c[o];
    s && (c = c[s]), e.push(c), h && h.length && Zd(e, h, n), u && delete c[o];
  }), e;
}
function yb(e, t) {
  return Zd([], e, Cb({}, bb.treeOptions, t));
}
var Eb = yb;
function wb(e) {
  return function(t, n, o, s) {
    var u = o || {}, c = u.children || "children";
    return e(null, t, n, s, [], [], c, u);
  };
}
var Ps = wb, Ob = Ps;
function Jd(e, t, n, o, s, u, c, h) {
  if (t) {
    var i, m, p, b, D, A;
    for (m = 0, p = t.length; m < p; m++) {
      if (i = t[m], b = s.concat(["" + m]), D = u.concat([i]), n.call(o, i, m, t, b, e, D))
        return { index: m, item: i, path: b, items: t, parent: e, nodes: D };
      if (c && i && (A = Jd(i, i[c], n, o, b.concat([c]), D, c), A))
        return A;
    }
  }
}
var Sb = Ob(Jd), Tb = Sb, Rb = Ps, Db = on;
function Qd(e, t, n, o, s, u, c, h) {
  var i, m;
  Db(t, function(p, b) {
    i = s.concat(["" + b]), m = u.concat([p]), n.call(o, p, b, t, i, e, m), p && c && (i.push(c), Qd(p, p[c], n, o, i, m, c));
  });
}
var Mb = Rb(Qd), ef = Mb, $b = Ps, kb = Zr;
function tf(e, t, n, o, s, u, c, h) {
  var i, m, p, b = h.mapChildren || c;
  return kb(t, function(D, A) {
    return i = s.concat(["" + A]), m = u.concat([D]), p = n.call(o, D, A, t, i, e, m), p && D && c && D[c] && (p[b] = tf(D, D[c], n, o, i, m, c, h)), p;
  });
}
var Nb = $b(tf), Ib = Nb, Fb = ef;
function Pb(e, t, n, o) {
  var s = [];
  return e && t && Fb(e, function(u, c, h, i, m, p) {
    t.call(o, u, c, h, i, m, p) && s.push(u);
  }, n), s;
}
var Lb = Pb, Vb = Ps, Ab = Mn, _b = no;
function nf(e, t, n, o, s, u, c, h, i) {
  var m, p, b, D, A, $ = [], O = i.original, B = i.data, E = i.mapChildren || h, T = i.isEvery;
  return Ab(n, function(y, w) {
    m = u.concat(["" + w]), p = c.concat([y]), D = e && !T || o.call(s, y, w, n, m, t, p), A = h && y[h], D || A ? (O ? b = y : (b = _b({}, y), B && (b[B] = y)), b[E] = nf(D, y, y[h], o, s, m, p, h, i), (D || b[E].length) && $.push(b)) : D && $.push(b);
  }), $;
}
var Bb = Vb(function(e, t, n, o, s, u, c, h) {
  return nf(0, e, t, n, o, s, u, c, h);
}), Hb = Bb;
function Wb(e, t) {
  if (e.indexOf)
    return e.indexOf(t);
  for (var n = 0, o = e.length; n < o; n++)
    if (t === e[n])
      return n;
}
var of = Wb;
function zb(e, t) {
  if (e.lastIndexOf)
    return e.lastIndexOf(t);
  for (var n = e.length - 1; n >= 0; n--)
    if (t === e[n])
      return n;
  return -1;
}
var rf = zb, jb = Ur, qb = jb("number"), go = qb, Gb = go;
function Yb(e) {
  return Gb(e) && isNaN(e);
}
var Ub = Yb, Kb = Ur, Xb = Kb("string"), $o = Xb, Zb = ql, Jb = Zb("Date"), Ko = Jb, Qb = parseInt, Kl = Qb;
function ex(e) {
  return Date.UTC(e.y, e.M || 0, e.d || 1, e.H || 0, e.m || 0, e.s || 0, e.S || 0);
}
var tx = ex;
function nx(e) {
  return e.getTime();
}
var Un = nx, Os = Kl, Rc = tx, ox = Un, rx = $o, lx = Ko;
function Xl(e) {
  return "(\\d{" + e + "})";
}
function sx(e) {
  return e < 10 ? e * 100 : e < 100 ? e * 10 : e;
}
function Dc(e) {
  return isNaN(e) ? e : Os(e);
}
var Rr = Xl(2), Ar = Xl("1,2"), lf = Xl("1,7"), sf = Xl("3,4"), af = ".{1}", cl = af + Ar, cf = "(([zZ])|([-+]\\d{2}:?\\d{2}))", Mc = [sf, cl, cl, cl, cl, cl, af + lf, cf], Gi = [];
for (var pi = Mc.length - 1; pi >= 0; pi--) {
  for (var $c = "", gr = 0; gr < pi + 1; gr++)
    $c += Mc[gr];
  Gi.push(new RegExp("^" + $c + "$"));
}
function ix(e) {
  for (var t, n = {}, o = 0, s = Gi.length; o < s; o++)
    if (t = e.match(Gi[o]), t) {
      n.y = t[1], n.M = t[2], n.d = t[3], n.H = t[4], n.m = t[5], n.s = t[6], n.S = t[7], n.Z = t[8];
      break;
    }
  return n;
}
var kc = [
  ["yyyy", sf],
  ["yy", Rr],
  ["MM", Rr],
  ["M", Ar],
  ["dd", Rr],
  ["d", Ar],
  ["HH", Rr],
  ["H", Ar],
  ["mm", Rr],
  ["m", Ar],
  ["ss", Rr],
  ["s", Ar],
  ["SSS", Xl(3)],
  ["S", lf],
  ["Z", cf]
], uf = {}, df = ["\\[([^\\]]+)\\]"];
for (var gr = 0; gr < kc.length; gr++) {
  var hi = kc[gr];
  uf[hi[0]] = hi[1] + "?", df.push(hi[0]);
}
var ax = new RegExp(df.join("|"), "g"), Nc = {};
function cx(e, t) {
  var n = Nc[t];
  if (!n) {
    var o = [], s = t.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(ax, function(p, b) {
      var D = p.charAt(0);
      return D === "[" ? b : (o.push(D), uf[p]);
    });
    n = Nc[t] = {
      _i: o,
      _r: new RegExp(s)
    };
  }
  var u = {}, c = e.match(n._r);
  if (c) {
    for (var h = n._i, i = 1, m = c.length; i < m; i++)
      u[h[i - 1]] = c[i];
    return u;
  }
  return u;
}
function ux(e) {
  if (/^[zZ]/.test(e.Z))
    return new Date(Rc(e));
  var t = e.Z.match(/([-+])(\d{2}):?(\d{2})/);
  return t ? new Date(Rc(e) - (t[1] === "-" ? -1 : 1) * Os(t[2]) * 36e5 + Os(t[3]) * 6e4) : /* @__PURE__ */ new Date("");
}
function dx(e, t) {
  if (e) {
    var n = lx(e);
    if (n || !t && /^[0-9]{11,15}$/.test(e))
      return new Date(n ? ox(e) : Os(e));
    if (rx(e)) {
      var o = t ? cx(e, t) : ix(e);
      if (o.y)
        return o.M && (o.M = Dc(o.M) - 1), o.S && (o.S = sx(Dc(o.S.substring(0, 3)))), o.Z ? ux(o) : new Date(o.y, o.M || 0, o.d || 1, o.H || 0, o.m || 0, o.s || 0, o.S || 0);
    }
  }
  return /* @__PURE__ */ new Date("");
}
var An = dx;
function fx() {
  return /* @__PURE__ */ new Date();
}
var Ls = fx, px = Ko, hx = An, mx = Ls;
function gx(e) {
  var t, n = e ? hx(e) : mx();
  return px(n) ? (t = n.getFullYear(), t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0)) : !1;
}
var ff = gx, vx = Wt, bx = to;
function xx(e, t, n) {
  if (e) {
    if (vx(e))
      for (var o = 0, s = e.length; o < s && t.call(n, e[o], o, e) !== !1; o++)
        ;
    else
      for (var u in e)
        if (bx(e, u) && t.call(n, e[u], u, e) === !1)
          break;
  }
}
var Cx = xx, yx = Wt, Ex = to;
function wx(e, t, n) {
  if (e) {
    var o, s;
    if (yx(e))
      for (o = e.length - 1; o >= 0 && t.call(n, e[o], o, e) !== !1; o--)
        ;
    else
      for (s = Ex(e), o = s.length - 1; o >= 0 && t.call(n, e[s[o]], s[o], e) !== !1; o--)
        ;
  }
}
var Ox = wx, Sx = Wt, Tx = $o, Rx = to;
function Dx(e, t) {
  return function(n, o) {
    if (n) {
      if (n[e])
        return n[e](o);
      if (Tx(n) || Sx(n))
        return t(n, o);
      for (var s in n)
        if (Rx(n, s) && o === n[s])
          return s;
    }
    return -1;
  };
}
var pf = Dx, Mx = pf, $x = of, kx = Mx("indexOf", $x), Nx = kx, Ix = pf, Fx = rf, Px = Ix("lastIndexOf", Fx), hf = Px, Lx = Wt, Vx = $o, Ax = on;
function _x(e) {
  var t = 0;
  return Vx(e) || Lx(e) ? e.length : (Ax(e, function() {
    t++;
  }), t);
}
var mf = _x, Bx = go;
function Hx(e) {
  return Bx(e) && isFinite(e);
}
var Wx = Hx, zx = Wt, jx = Mo, qx = function(e) {
  return !jx(e) && !isNaN(e) && !zx(e) && e % 1 === 0;
}, gf = qx, Gx = Wt, Yx = gf, Ux = Mo;
function Kx(e) {
  return !Ux(e) && !isNaN(e) && !Gx(e) && !Yx(e);
}
var Xx = Kx, Zx = Ur, Jx = Zx("boolean"), vf = Jx, Qx = ql, eC = Qx("RegExp"), sa = eC, tC = ql, nC = tC("Error"), bf = nC;
function oC(e) {
  return e ? e.constructor === TypeError : !1;
}
var rC = oC;
function lC(e) {
  for (var t in e)
    return !1;
  return !0;
}
var xf = lC, sC = oo, iC = typeof Symbol !== sC;
function aC(e) {
  return iC && Symbol.isSymbol ? Symbol.isSymbol(e) : typeof e == "symbol";
}
var Cf = aC, cC = ql, uC = cC("Arguments"), dC = uC, fC = $o, pC = go;
function hC(e) {
  return !!(e && fC(e.nodeName) && pC(e.nodeType));
}
var mC = hC, gC = oo, vC = typeof document === gC ? 0 : document, ia = vC, bC = ia;
function xC(e) {
  return !!(e && bC && e.nodeType === 9);
}
var CC = xC, yC = oo, EC = typeof window === yC ? 0 : window, yf = EC, wC = yf;
function OC(e) {
  return !!(wC && (e && e === e.window));
}
var SC = OC, TC = oo, RC = typeof FormData !== TC;
function DC(e) {
  return RC && e instanceof FormData;
}
var MC = DC, $C = oo, kC = typeof Map !== $C;
function NC(e) {
  return kC && e instanceof Map;
}
var IC = NC, FC = oo, PC = typeof WeakMap !== FC;
function LC(e) {
  return PC && e instanceof WeakMap;
}
var VC = LC, AC = oo, _C = typeof Set !== AC;
function BC(e) {
  return _C && e instanceof Set;
}
var HC = BC, WC = oo, zC = typeof WeakSet !== WC;
function jC(e) {
  return zC && e instanceof WeakSet;
}
var qC = jC, GC = Vn, YC = $o, UC = Wt, KC = to;
function XC(e) {
  return function(t, n, o) {
    if (t && GC(n)) {
      if (UC(t) || YC(t))
        return e(t, n, o);
      for (var s in t)
        if (KC(t, s) && n.call(o, t[s], s, t))
          return s;
    }
    return -1;
  };
}
var Ef = XC, ZC = Ef, JC = ZC(function(e, t, n) {
  for (var o = 0, s = e.length; o < s; o++)
    if (t.call(n, e[o], o, e))
      return o;
  return -1;
}), aa = JC, Ic = go, Fc = Wt, Pc = $o, QC = sa, ey = Ko, ty = vf, ny = mo, Lc = Do, oy = Id;
function wf(e, t, n, o, s, u, c) {
  if (e === t)
    return !0;
  if (e && t && !Ic(e) && !Ic(t) && !Pc(e) && !Pc(t)) {
    if (QC(e))
      return n("" + e, "" + t, s, u, c);
    if (ey(e) || ty(e))
      return n(+e, +t, s, u, c);
    var h, i, m, p = Fc(e), b = Fc(t);
    if (p || b ? p && b : e.constructor === t.constructor)
      return i = Lc(e), m = Lc(t), o && (h = o(e, t, s)), i.length === m.length ? ny(h) ? oy(i, function(D, A) {
        return D === m[A] && wf(e[D], t[m[A]], n, o, p || b ? A : D, e, t);
      }) : !!h : !1;
  }
  return n(e, t, s, u, c);
}
var Of = wf;
function ry(e, t) {
  return e === t;
}
var Sf = ry, ly = Of, sy = Sf;
function iy(e, t) {
  return ly(e, t, sy);
}
var Tf = iy, Vc = Do, ay = aa, Ac = Tf, cy = Nd, uy = Fd;
function dy(e, t) {
  var n = Vc(e), o = Vc(t);
  if (o.length) {
    if (uy(n, o))
      return cy(o, function(s) {
        return ay(n, function(u) {
          return u === s && Ac(e[u], t[s]);
        }) > -1;
      });
  } else
    return !0;
  return Ac(e, t);
}
var fy = dy, _c = Of, Bc = Sf, py = Vn, hy = mo;
function my(e, t, n) {
  return py(n) ? _c(e, t, function(o, s, u, c, h) {
    var i = n(o, s, u, c, h);
    return hy(i) ? Bc(o, s) : !!i;
  }, n) : _c(e, t, Bc);
}
var gy = my, vy = Cf, by = Ko, xy = Wt, Cy = sa, yy = bf, Ey = Mo;
function wy(e) {
  return Ey(e) ? "null" : vy(e) ? "symbol" : by(e) ? "date" : xy(e) ? "array" : Cy(e) ? "regexp" : yy(e) ? "error" : typeof e;
}
var Oy = wy, Sy = 0;
function Ty(e) {
  return [e, ++Sy].join("");
}
var Ry = Ty, Dy = Ef, My = Dy(function(e, t, n) {
  for (var o = e.length - 1; o >= 0; o--)
    if (t.call(n, e[o], o, e))
      return o;
  return -1;
}), $y = My, ky = Xr, Ny = $o;
function Iy(e) {
  if (ky(e))
    return e;
  if (Ny(e))
    try {
      return JSON.parse(e);
    } catch {
    }
  return {};
}
var Fy = Iy, Py = Uo;
function Ly(e) {
  return Py(e) ? "" : JSON.stringify(e);
}
var Vy = Ly, Ay = ea, _y = Ay("entries", 2), By = _y, Hy = Vn, Wy = Wt, zy = on, jy = aa;
function qy(e, t) {
  return function(n, o) {
    var s, u, c = {}, h = [], i = this, m = arguments, p = m.length;
    if (!Hy(o)) {
      for (u = 1; u < p; u++)
        s = m[u], h.push.apply(h, Wy(s) ? s : [s]);
      o = 0;
    }
    return zy(n, function(b, D) {
      ((o ? o.call(i, b, D, n) : jy(h, function(A) {
        return A === D;
      }) > -1) ? e : t) && (c[D] = b);
    }), c;
  };
}
var Rf = qy, Gy = Rf, Yy = Gy(1, 0), Uy = Yy, Ky = Rf, Xy = Ky(0, 1), Zy = Xy, Jy = Jr;
function Qy(e) {
  return Jy(e)[0];
}
var eE = Qy, tE = Jr;
function nE(e) {
  var t = tE(e);
  return t[t.length - 1];
}
var oE = nE, rE = Ld, lE = ra, ds = to;
function sE(e, t) {
  if (e) {
    if (ds(e, t))
      return !0;
    var n, o, s, u, c, h, i = lE(t), m = 0, p = i.length;
    for (c = e; m < p && (h = !1, n = i[m], u = n ? n.match(rE) : "", u ? (o = u[1], s = u[2], o ? c[o] && ds(c[o], s) && (h = !0, c = c[o][s]) : ds(c, s) && (h = !0, c = c[s])) : ds(c, n) && (h = !0, c = c[n]), h); m++)
      if (m === p - 1)
        return !0;
  }
  return !1;
}
var iE = sE, Hc = Kl, aE = ra, cE = to, Wc = /(.+)?\[(\d+)\]$/;
function uE(e, t, n, o, s) {
  if (e[t])
    n && (e[t] = s);
  else {
    var u, c, h = t ? t.match(Wc) : null;
    if (n)
      c = s;
    else {
      var i = o ? o.match(Wc) : null;
      i && !i[1] ? c = new Array(Hc(i[2]) + 1) : c = {};
    }
    return h ? h[1] ? (u = Hc(h[2]), e[h[1]] ? n ? e[h[1]][u] = c : e[h[1]][u] ? c = e[h[1]][u] : e[h[1]][u] = c : (e[h[1]] = new Array(u + 1), e[h[1]][u] = c)) : e[h[2]] = c : e[t] = c, c;
  }
  return e[t];
}
function dE(e, t, n) {
  if (e) {
    if ((e[t] || cE(e, t)) && !zc(t))
      e[t] = n;
    else
      for (var o = e, s = aE(t), u = s.length, c = 0; c < u; c++)
        if (!zc(s[c])) {
          var h = c === u - 1;
          o = uE(o, s[c], h, h ? null : s[c + 1], n);
        }
  }
  return e;
}
function zc(e) {
  return e === "__proto__" || e === "constructor" || e === "prototype";
}
var fE = dE, pE = xf, hE = Fs, mE = Vn, gE = Kr, vE = on;
function bE(e) {
  return function() {
    return pE(e);
  };
}
function xE(e, t, n) {
  var o, s = {};
  return e && (t && hE(t) ? t = bE(t) : mE(t) || (t = gE(t)), vE(e, function(u, c) {
    o = t ? t.call(n, u, c, e) : u, s[o] ? s[o].push(u) : s[o] = [u];
  })), s;
}
var Df = xE, CE = Df, yE = Gl;
function EE(e, t, n) {
  var o = CE(e, t, n || this);
  return yE(o, function(s, u) {
    o[u] = s.length;
  }), o;
}
var wE = EE;
function OE(e, t, n) {
  var o, s, u = [], c = arguments;
  if (c.length < 2 && (t = c[0], e = 0), o = e >> 0, s = t >> 0, o < t)
    for (n = n >> 0 || 1; o < s; o += n)
      u.push(o);
  return u;
}
var SE = OE, jc = Do, TE = yr, RE = Yl, DE = Mn, ME = no;
function $E(e, t) {
  if (e && t) {
    var n = ME.apply(this, [{}].concat(TE(arguments, 1))), o = jc(n);
    DE(jc(e), function(s) {
      RE(o, s) && (e[s] = n[s]);
    });
  }
  return e;
}
var kE = $E, NE = Wd, IE = NE(function(e, t) {
  return e > t;
}), FE = IE;
function PE(e) {
  return (e.split(".")[1] || "").length;
}
var Vs = PE, LE = Kl;
function VE(e, t) {
  if (e.repeat)
    return e.repeat(t);
  var n = isNaN(t) ? [] : new Array(LE(t));
  return n.join(e) + (n.length > 0 ? e : "");
}
var Zl = VE;
function AE(e, t) {
  return e.substring(0, t) + "." + e.substring(t, e.length);
}
var Mf = AE, fs = Zl, mi = Mf;
function _E(e) {
  var t = "" + e, n = t.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/);
  if (n) {
    var o = e < 0, s = o ? "-" : "", u = n[3] || "", c = n[5] || "", h = n[6] || "", i = n[7], m = n[8], p = m - h.length, b = m - u.length, D = m - c.length;
    return i === "+" ? u ? s + u + fs("0", m) : p > 0 ? s + c + h + fs("0", p) : s + c + mi(h, m) : u ? b > 0 ? s + "0." + fs("0", Math.abs(b)) + u : s + mi(u, b) : D > 0 ? s + "0." + fs("0", Math.abs(D)) + c + h : s + mi(c, D) + h;
  }
  return t;
}
var Xo = _E, qc = Vs, Gc = Xo;
function BE(e, t) {
  var n = Gc(e), o = Gc(t);
  return parseInt(n.replace(".", "")) * parseInt(o.replace(".", "")) / Math.pow(10, qc(n) + qc(o));
}
var $f = BE, HE = $f, Yc = Cr, WE = Xo;
function zE(e) {
  return function(t, n) {
    var o = Yc(t), s = o;
    if (o) {
      n = n >> 0;
      var u = WE(o), c = u.split("."), h = c[0], i = c[1] || "", m = i.substring(0, n + 1), p = h + (m ? "." + m : "");
      if (n >= i.length)
        return Yc(p);
      if (p = o, n > 0) {
        var b = Math.pow(10, n);
        s = Math[e](HE(p, b)) / b;
      } else
        s = Math[e](p);
    }
    return s;
  };
}
var ca = zE, jE = ca, qE = jE("round"), ua = qE, GE = ca, YE = GE("ceil"), kf = YE, UE = ca, KE = UE("floor"), Nf = KE, XE = Uo, ZE = go, JE = Xo;
function QE(e) {
  return ZE(e) ? JE(e) : "" + (XE(e) ? "" : e);
}
var $n = QE, ew = ua, tw = $n, nw = Zl, ow = Mf;
function rw(e, t) {
  t = t >> 0;
  var n = tw(ew(e, t)), o = n.split("."), s = o[0], u = o[1] || "", c = t - u.length;
  return t ? c > 0 ? s + "." + u + nw("0", c) : s + ow(u, Math.abs(c)) : s;
}
var da = rw, lw = Ro, sw = ua, iw = kf, aw = Nf, cw = go, uw = $n, dw = da, fw = Xo, pw = no;
function hw(e, t) {
  var n = pw({}, lw.commafyOptions, t), o = n.digits, s = cw(e), u, c, h, i, m;
  return s ? (u = (n.ceil ? iw : n.floor ? aw : sw)(e, o), c = fw(o ? dw(u, o) : u).split("."), i = c[0], m = c[1], h = i && u < 0, h && (i = i.substring(1, i.length))) : (u = uw(e).replace(/,/g, ""), c = u ? [u] : [], i = c[0]), c.length ? (h ? "-" : "") + i.replace(new RegExp("(?=(?!(\\b))(.{" + (n.spaceNumber || 3) + "})+$)", "g"), n.separator || ",") + (m ? "." + m : "") : u;
}
var mw = hw, gw = Kl, vw = Bd, bw = vw(gw), xw = bw, Cw = $f, Uc = Cr;
function yw(e, t) {
  var n = Uc(e), o = Uc(t);
  return Cw(n, o);
}
var fa = yw, Kc = Vs, Xc = Xo, Zc = fa;
function Ew(e, t) {
  var n = Xc(e), o = Xc(t), s = Math.pow(10, Math.max(Kc(n), Kc(o)));
  return (Zc(e, s) + Zc(t, s)) / s;
}
var If = Ew, ww = If, Jc = Cr;
function Ow(e, t) {
  return ww(Jc(e), Jc(t));
}
var Sw = Ow, Qc = Vs, eu = Xo, tu = Cr, Tw = da;
function Rw(e, t) {
  var n = tu(e), o = tu(t), s = eu(n), u = eu(o), c = Qc(s), h = Qc(u), i = Math.pow(10, Math.max(c, h)), m = c >= h ? c : h;
  return parseFloat(Tw((n * i - o * i) / i, m));
}
var Dw = Rw, nu = Vs, ou = Xo, Mw = fa;
function $w(e, t) {
  var n = ou(e), o = ou(t), s = nu(n), u = nu(o), c = u - s, h = c < 0, i = Math.pow(10, h ? Math.abs(c) : c);
  return Mw(n.replace(".", "") / o.replace(".", ""), h ? 1 / i : i);
}
var Ff = $w, kw = Ff, ru = Cr;
function Nw(e, t) {
  return kw(ru(e), ru(t));
}
var Iw = Nw, gi = If, Fw = Vn, Pw = on, Lw = Ul;
function Vw(e, t, n) {
  var o = 0;
  return Pw(e, t ? Fw(t) ? function() {
    o = gi(o, t.apply(n, arguments));
  } : function(s) {
    o = gi(o, Lw(s, t));
  } : function(s) {
    o = gi(o, s);
  }), o;
}
var Pf = Vw, Aw = Ff, _w = mf, Bw = Pf;
function Hw(e, t, n) {
  return Aw(Bw(e, t, n), _w(e));
}
var Ww = Hw, zw = "first", Jl = zw, jw = "last", As = jw;
function qw(e) {
  return e.getFullYear();
}
var Ql = qw, Gw = 864e5, es = Gw;
function Yw(e) {
  return e.getMonth();
}
var _s = Yw, Uw = Ko, Kw = Un;
function Xw(e) {
  return Uw(e) && !isNaN(Kw(e));
}
var Kn = Xw, lu = Jl, Zw = As, Jw = es, Qw = Ql, su = Un, iu = _s, eO = An, tO = Kn, nO = go;
function Lf(e, t, n) {
  var o = t && !isNaN(t) ? t : 0;
  if (e = eO(e), tO(e)) {
    if (n === lu)
      return new Date(Qw(e), iu(e) + o, 1);
    if (n === Zw)
      return new Date(su(Lf(e, o + 1, lu)) - 1);
    if (nO(n) && e.setDate(n), o) {
      var s = e.getDate();
      if (e.setMonth(iu(e) + o), s !== e.getDate())
        return e.setDate(1), new Date(su(e) - Jw);
    }
  }
  return e;
}
var ts = Lf, oO = Jl, au = As, cu = Ql, rO = ts, lO = An, sO = Kn;
function iO(e, t, n) {
  var o;
  if (e = lO(e), sO(e) && (t && (o = t && !isNaN(t) ? t : 0, e.setFullYear(cu(e) + o)), n || !isNaN(n))) {
    if (n === oO)
      return new Date(cu(e), 0, 1);
    if (n === au)
      return e.setMonth(11), rO(e, 0, au);
    e.setMonth(n);
  }
  return e;
}
var Bs = iO, aO = ts, cO = An, uO = Kn;
function dO(e) {
  var t = e.getMonth();
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4;
}
function fO(e, t, n) {
  var o, s = t && !isNaN(t) ? t * 3 : 0;
  return e = cO(e), uO(e) ? (o = (dO(e) - 1) * 3, e.setMonth(o), aO(e, s, n)) : e;
}
var pO = fO, uu = Jl, hO = As, mO = Kl, gO = Ql, vO = _s, bO = Un, xO = An, CO = Kn;
function Vf(e, t, n) {
  if (e = xO(e), CO(e) && !isNaN(t)) {
    if (e.setDate(e.getDate() + mO(t)), n === uu)
      return new Date(gO(e), vO(e), e.getDate());
    if (n === hO)
      return new Date(bO(Vf(e, 1, uu)) - 1);
  }
  return e;
}
var Af = Vf;
function yO(e) {
  return e.toUpperCase();
}
var _f = yO, EO = es, wO = EO * 7, Bf = wO, OO = Ro, vi = es, SO = Bf, TO = Un, RO = An, DO = Kn, du = go;
function MO(e, t, n, o) {
  if (e = RO(e), DO(e)) {
    var s = du(n), u = du(o), c = TO(e);
    if (s || u) {
      var h = u ? o : OO.firstDayOfWeek, i = e.getDay(), m = s ? n : i;
      if (i !== m) {
        var p = 0;
        h > i ? p = -(7 - h + i) : h < i && (p = h - i), m > h ? c += ((m === 0 ? 7 : m) - h + p) * vi : m < h ? c += (7 - h + m + p) * vi : c += p * vi;
      }
    }
    return t && !isNaN(t) && (c += t * SO), new Date(c);
  }
  return e;
}
var Hf = MO, $O = Ro, kO = Bf, NO = go, IO = Kn, FO = Hf, fu = Un;
function PO(e) {
  return function(t, n) {
    var o = NO(n) ? n : $O.firstDayOfWeek, s = FO(t, 0, o, o);
    if (IO(s)) {
      var u = new Date(s.getFullYear(), s.getMonth(), s.getDate()), c = e(s), h = c.getDay();
      return h > o && c.setDate(7 - h + o + 1), h < o && c.setDate(o - h + 1), Math.floor((fu(u) - fu(c)) / kO + 1);
    }
    return NaN;
  };
}
var Wf = PO, LO = Wf, VO = LO(function(e) {
  return new Date(e.getFullYear(), 0, 1);
}), zf = VO, AO = Ql, _O = _s;
function BO(e) {
  return new Date(AO(e), _O(e), e.getDate());
}
var HO = BO, WO = Un, zO = HO;
function jO(e) {
  return WO(zO(e));
}
var qO = jO, GO = es, YO = Jl, pu = qO, UO = Bs, KO = An, XO = Kn;
function ZO(e) {
  return e = KO(e), XO(e) ? Math.floor((pu(e) - pu(UO(e, 0, YO))) / GO) + 1 : NaN;
}
var jf = ZO, JO = $n, QO = mo, eS = Zl;
function tS(e, t, n) {
  var o = JO(e);
  return t = t >> 0, n = QO(n) ? " " : "" + n, o.padStart ? o.padStart(t, n) : t > o.length ? (t -= o.length, t > n.length && (n += eS(n, t / n.length)), n.slice(0, t) + o) : o;
}
var qf = tS, ul = Ro, nS = _f, oS = Ql, hu = _s, rS = An, lS = zf, sS = jf, iS = no, aS = Kn, cS = Vn, ao = qf;
function Lo(e, t, n, o) {
  var s = t[n];
  return s ? cS(s) ? s(o, n, e) : s[o] : o;
}
var uS = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g;
function dS(e, t, n) {
  if (e) {
    if (e = rS(e), aS(e)) {
      var o = t || ul.parseDateFormat || ul.formatString, s = e.getHours(), u = s < 12 ? "am" : "pm", c = iS({}, ul.parseDateRules || ul.formatStringMatchs, n ? n.formats : null), h = function(y, w) {
        return ("" + oS(e)).substr(4 - w);
      }, i = function(y, w) {
        return ao(hu(e) + 1, w, "0");
      }, m = function(y, w) {
        return ao(e.getDate(), w, "0");
      }, p = function(y, w) {
        return ao(s, w, "0");
      }, b = function(y, w) {
        return ao(s <= 12 ? s : s - 12, w, "0");
      }, D = function(y, w) {
        return ao(e.getMinutes(), w, "0");
      }, A = function(y, w) {
        return ao(e.getSeconds(), w, "0");
      }, $ = function(y, w) {
        return ao(e.getMilliseconds(), w, "0");
      }, O = function(y, w) {
        var P = e.getTimezoneOffset() / 60 * -1;
        return Lo(e, c, y, (P >= 0 ? "+" : "-") + ao(P, 2, "0") + (w === 1 ? ":" : "") + "00");
      }, B = function(y, w) {
        return ao(Lo(e, c, y, lS(e, (n ? n.firstDay : null) || ul.firstDayOfWeek)), w, "0");
      }, E = function(y, w) {
        return ao(Lo(e, c, y, sS(e)), w, "0");
      }, T = {
        yyyy: h,
        yy: h,
        MM: i,
        M: i,
        dd: m,
        d: m,
        HH: p,
        H: p,
        hh: b,
        h: b,
        mm: D,
        m: D,
        ss: A,
        s: A,
        SSS: $,
        S: $,
        ZZ: O,
        Z: O,
        WW: B,
        W: B,
        DDD: E,
        D: E,
        a: function(y) {
          return Lo(e, c, y, u);
        },
        A: function(y) {
          return Lo(e, c, y, nS(u));
        },
        e: function(y) {
          return Lo(e, c, y, e.getDay());
        },
        E: function(y) {
          return Lo(e, c, y, e.getDay());
        },
        q: function(y) {
          return Lo(e, c, y, Math.floor((hu(e) + 3) / 3));
        }
      };
      return o.replace(uS, function(y, w) {
        return w || (T[y] ? T[y](y, y.length) : y);
      });
    }
    return "Invalid Date";
  }
  return "";
}
var Gf = dS, fS = Un, pS = Ls, hS = Date.now || function() {
  return fS(pS());
}, Yf = hS, mS = Un, gS = Yf, vS = An, bS = Ko, xS = function(e, t) {
  if (e) {
    var n = vS(e, t);
    return bS(n) ? mS(n) : n;
  }
  return gS();
}, CS = xS, mu = Gf;
function yS(e, t, n) {
  return e && t ? (e = mu(e, n), e !== "Invalid Date" && e === mu(t, n)) : !1;
}
var ES = yS, wS = Wf, OS = wS(function(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}), SS = OS, TS = Bs, RS = An, DS = Kn, MS = ff;
function $S(e, t) {
  return e = RS(e), DS(e) ? MS(TS(e, t)) ? 366 : 365 : NaN;
}
var kS = $S, NS = es, IS = Jl, FS = As, gu = Un, vu = ts, PS = An, LS = Kn;
function VS(e, t) {
  return e = PS(e), LS(e) ? Math.floor((gu(vu(e, t, FS)) - gu(vu(e, t, IS))) / NS) + 1 : NaN;
}
var AS = VS, bu = Un, _S = Ls, xu = An, Cu = Kn, yu = [
  ["yyyy", 31536e6],
  ["MM", 2592e6],
  ["dd", 864e5],
  ["HH", 36e5],
  ["mm", 6e4],
  ["ss", 1e3],
  ["S", 0]
];
function BS(e, t) {
  var n, o, s, u, c, h, i = { done: !1, time: 0 };
  if (e = xu(e), t = t ? xu(t) : _S(), Cu(e) && Cu(t) && (n = bu(e), o = bu(t), n < o))
    for (u = i.time = o - n, i.done = !0, h = 0, c = yu.length; h < c; h++)
      s = yu[h], u >= s[1] ? h === c - 1 ? i[s[0]] = u || 0 : (i[s[0]] = Math.floor(u / s[1]), u -= i[s[0]] * s[1]) : i[s[0]] = 0;
  return i;
}
var HS = BS, WS = $n, zS = mo, jS = Zl;
function qS(e, t, n) {
  var o = WS(e);
  return t = t >> 0, n = zS(n) ? " " : "" + n, o.padEnd ? o.padEnd(t, n) : t > o.length ? (t -= o.length, t > n.length && (n += jS(n, t / n.length)), o + n.slice(0, t)) : o;
}
var GS = qS, YS = $n, US = Zl;
function KS(e, t) {
  return US(YS(e), t);
}
var XS = KS, ZS = $n;
function JS(e) {
  return e && e.trimRight ? e.trimRight() : ZS(e).replace(/[\s\uFEFF\xA0]+$/g, "");
}
var Uf = JS, QS = $n;
function eT(e) {
  return e && e.trimLeft ? e.trimLeft() : QS(e).replace(/^[\s\uFEFF\xA0]+/g, "");
}
var Kf = eT, tT = Uf, nT = Kf;
function oT(e) {
  return e && e.trim ? e.trim() : tT(nT(e));
}
var Xf = oT, rT = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, Zf = rT, lT = $n, sT = Do;
function iT(e) {
  var t = new RegExp("(?:" + sT(e).join("|") + ")", "g");
  return function(n) {
    return lT(n).replace(t, function(o) {
      return e[o];
    });
  };
}
var Jf = iT, aT = Zf, cT = Jf, uT = cT(aT), dT = uT, Eu = Zf, fT = Jf, pT = on, Qf = {};
pT(Eu, function(e, t) {
  Qf[Eu[t]] = t;
});
var hT = fT(Qf), mT = hT;
function gT(e, t, n) {
  return e.substring(t, n);
}
var ep = gT;
function vT(e) {
  return e.toLowerCase();
}
var tp = vT, bT = $n, Vo = ep, dl = _f, xT = tp, bi = {};
function CT(e) {
  if (e = bT(e), bi[e])
    return bi[e];
  var t = e.length, n = e.replace(/([-]+)/g, function(o, s, u) {
    return u && u + s.length < t ? "-" : "";
  });
  return t = n.length, n = n.replace(/([A-Z]+)/g, function(o, s, u) {
    var c = s.length;
    return s = xT(s), u ? c > 2 && u + c < t ? dl(Vo(s, 0, 1)) + Vo(s, 1, c - 1) + dl(Vo(s, c - 1, c)) : dl(Vo(s, 0, 1)) + Vo(s, 1, c) : c > 1 && u + c < t ? Vo(s, 0, c - 1) + dl(Vo(s, c - 1, c)) : s;
  }).replace(/(-[a-zA-Z])/g, function(o, s) {
    return dl(Vo(s, 1, s.length));
  }), bi[e] = n, n;
}
var yT = CT, ET = $n, Dr = ep, Ao = tp, xi = {};
function wT(e) {
  if (e = ET(e), xi[e])
    return xi[e];
  if (/^[A-Z]+$/.test(e))
    return Ao(e);
  var t = e.replace(/^([a-z])([A-Z]+)([a-z]+)$/, function(n, o, s, u) {
    var c = s.length;
    return c > 1 ? o + "-" + Ao(Dr(s, 0, c - 1)) + "-" + Ao(Dr(s, c - 1, c)) + u : Ao(o + "-" + s + u);
  }).replace(/^([A-Z]+)([a-z]+)?$/, function(n, o, s) {
    var u = o.length;
    return Ao(Dr(o, 0, u - 1) + "-" + Dr(o, u - 1, u) + (s || ""));
  }).replace(/([a-z]?)([A-Z]+)([a-z]?)/g, function(n, o, s, u, c) {
    var h = s.length;
    return h > 1 && (o && (o += "-"), u) ? (o || "") + Ao(Dr(s, 0, h - 1)) + "-" + Ao(Dr(s, h - 1, h)) + u : (o || "") + (c ? "-" : "") + Ao(s) + (u || "");
  });
  return t = t.replace(/([-]+)/g, function(n, o, s) {
    return s && s + o.length < t.length ? "-" : "";
  }), xi[e] = t, t;
}
var OT = wT, ST = $n;
function TT(e, t, n) {
  var o = ST(e);
  return (arguments.length === 1 ? o : o.substring(n)).indexOf(t) === 0;
}
var RT = TT, DT = $n;
function MT(e, t, n) {
  var o = DT(e), s = arguments.length;
  return s > 1 && (s > 2 ? o.substring(0, n).indexOf(t) === n - 1 : o.indexOf(t) === o.length - 1);
}
var $T = MT, kT = Ro, NT = $n, IT = Xf, FT = Ul;
function PT(e, t, n) {
  return NT(e).replace((n || kT).tmplRE || /\{{2}([.\w[\]\s]+)\}{2}/g, function(o, s) {
    return FT(t, IT(s));
  });
}
var np = PT, LT = np;
function VT(e, t) {
  return LT(e, t, { tmplRE: /\{([.\w[\]\s]+)\}/g });
}
var AT = VT;
function _T() {
}
var BT = _T, wu = yr;
function HT(e, t) {
  var n = wu(arguments, 2);
  return function() {
    return e.apply(t, wu(arguments).concat(n));
  };
}
var WT = HT, Ou = yr;
function zT(e, t) {
  var n = !1, o = null, s = Ou(arguments, 2);
  return function() {
    return n || (o = e.apply(t, Ou(arguments).concat(s)), n = !0), o;
  };
}
var jT = zT, qT = yr;
function GT(e, t, n) {
  var o = 0, s = [];
  return function() {
    var u = arguments;
    o++, o <= e && s.push(u[0]), o >= e && t.apply(n, [s].concat(qT(u)));
  };
}
var YT = GT, UT = yr;
function KT(e, t, n) {
  var o = 0, s = [];
  return n = n || this, function() {
    var u = arguments;
    o++, o < e && (s.push(u[0]), t.apply(n, [s].concat(UT(u))));
  };
}
var XT = KT;
function ZT(e, t, n) {
  var o = null, s = null, u = n || {}, c = !1, h = null, i = "leading" in u ? u.leading : !0, m = "trailing" in u ? u.trailing : !1, p = function() {
    o = null, s = null;
  }, b = function() {
    c = !0, e.apply(s, o), h = setTimeout(D, t), p();
  }, D = function() {
    h = null, !c && m === !0 && b();
  }, A = function() {
    var O = h !== null;
    return O && clearTimeout(h), p(), h = null, c = !1, O;
  }, $ = function() {
    o = arguments, s = this, c = !1, h === null && (i === !0 ? b() : m === !0 && (h = setTimeout(D, t)));
  };
  return $.cancel = A, $;
}
var JT = ZT;
function QT(e, t, n) {
  var o = null, s = null, u = n || {}, c = !1, h = null, i = typeof n == "boolean", m = "leading" in u ? u.leading : i, p = "trailing" in u ? u.trailing : !i, b = function() {
    o = null, s = null;
  }, D = function() {
    c = !0, e.apply(s, o), b();
  }, A = function() {
    m === !0 && (h = null), !c && p === !0 && D();
  }, $ = function() {
    var B = h !== null;
    return B && clearTimeout(h), b(), h = null, c = !1, B;
  }, O = function() {
    c = !1, o = arguments, s = this, h === null ? m === !0 && D() : clearTimeout(h), h = setTimeout(A, t);
  };
  return O.cancel = $, O;
}
var eR = QT, tR = yr;
function nR(e, t) {
  var n = tR(arguments, 2), o = this;
  return setTimeout(function() {
    e.apply(o, n);
  }, t);
}
var oR = nR, rR = decodeURIComponent, op = rR, Su = op, lR = Mn, sR = $o;
function iR(e) {
  var t, n = {};
  return e && sR(e) && lR(e.split("&"), function(o) {
    t = o.split("="), n[Su(t[0])] = Su(t[1] || "");
  }), n;
}
var rp = iR, aR = encodeURIComponent, lp = aR, Ss = lp, sp = on, ip = Wt, ap = Mo, cR = mo, cp = Xr;
function up(e, t, n) {
  var o, s = [];
  return sp(e, function(u, c) {
    o = ip(u), cp(u) || o ? s = s.concat(up(u, t + "[" + c + "]", o)) : s.push(Ss(t + "[" + (n ? "" : c) + "]") + "=" + Ss(ap(u) ? "" : u));
  }), s;
}
function uR(e) {
  var t, n = [];
  return sp(e, function(o, s) {
    cR(o) || (t = ip(o), cp(o) || t ? n = n.concat(up(o, s, t)) : n.push(Ss(s) + "=" + Ss(ap(o) ? "" : o)));
  }), n.join("&").replace(/%20/g, "+");
}
var dR = uR, fR = oo, pR = typeof location === fR ? 0 : location, Hs = pR, ps = Hs;
function hR() {
  return ps ? ps.origin || ps.protocol + "//" + ps.host : "";
}
var dp = hR, Tu = Hs, mR = rp, gR = dp;
function Ru(e) {
  return mR(e.split("?")[1] || "");
}
function vR(e) {
  var t, n, o, s, u = "" + e;
  return u.indexOf("//") === 0 ? u = (Tu ? Tu.protocol : "") + u : u.indexOf("/") === 0 && (u = gR() + u), o = u.replace(/#.*/, "").match(/(\?.*)/), s = {
    href: u,
    hash: "",
    host: "",
    hostname: "",
    protocol: "",
    port: "",
    search: o && o[1] && o[1].length > 1 ? o[1] : ""
  }, s.path = u.replace(/^([a-z0-9.+-]*:)\/\//, function(c, h) {
    return s.protocol = h, "";
  }).replace(/^([a-z0-9.+-]*)(:\d+)?\/?/, function(c, h, i) {
    return n = i || "", s.port = n.replace(":", ""), s.hostname = h, s.host = h + n, "/";
  }).replace(/(#.*)/, function(c, h) {
    return s.hash = h.length > 1 ? h : "", "";
  }), t = s.hash.match(/#((.*)\?|(.*))/), s.pathname = s.path.replace(/(\?|#.*).*/, ""), s.origin = s.protocol + "//" + s.host, s.hashKey = t && (t[2] || t[1]) || "", s.hashQuery = Ru(s.hash), s.searchQuery = Ru(s.search), s;
}
var fp = vR, Du = Hs, bR = dp, xR = hf;
function CR() {
  if (Du) {
    var e = Du.pathname, t = xR(e, "/") + 1;
    return bR() + (t === e.length ? e : e.substring(0, t));
  }
  return "";
}
var yR = CR, Mu = Hs, ER = fp;
function wR() {
  return Mu ? ER(Mu.href) : {};
}
var OR = wR, pp = Ro, Ci = ia, $u = op, ku = lp, SR = Wt, Nu = Fs, hp = Ko, TR = mo, RR = Yl, DR = Do, Ts = no, yi = Mn, MR = Ls, hs = Un, $R = Bs, kR = ts, NR = Af;
function Iu(e, t) {
  var n = parseFloat(t), o = MR(), s = hs(o);
  switch (e) {
    case "y":
      return hs($R(o, n));
    case "M":
      return hs(kR(o, n));
    case "d":
      return hs(NR(o, n));
    case "h":
    case "H":
      return s + n * 60 * 60 * 1e3;
    case "m":
      return s + n * 60 * 1e3;
    case "s":
      return s + n * 1e3;
  }
  return s;
}
function Ei(e) {
  return (hp(e) ? e : new Date(e)).toUTCString();
}
function Yo(e, t, n) {
  if (Ci) {
    var o, s, u, c, h, i, m = [], p = arguments;
    return SR(e) ? m = e : p.length > 1 ? m = [Ts({ name: e, value: t }, n)] : Nu(e) && (m = [e]), m.length > 0 ? (yi(m, function(b) {
      o = Ts({}, pp.cookies, b), u = [], o.name && (s = o.expires, u.push(ku(o.name) + "=" + ku(Nu(o.value) ? JSON.stringify(o.value) : o.value)), s && (isNaN(s) ? s = s.replace(/^([0-9]+)(y|M|d|H|h|m|s)$/, function(D, A, $) {
        return Ei(Iu($, A));
      }) : /^[0-9]{11,13}$/.test(s) || hp(s) ? s = Ei(s) : s = Ei(Iu("d", s)), o.expires = s), yi(["expires", "path", "domain", "secure"], function(D) {
        TR(o[D]) || u.push(o[D] && D === "secure" ? D : D + "=" + o[D]);
      })), Ci.cookie = u.join("; ");
    }), !0) : (c = {}, h = Ci.cookie, h && yi(h.split("; "), function(b) {
      i = b.indexOf("="), c[$u(b.substring(0, i))] = $u(b.substring(i + 1) || "");
    }), p.length === 1 ? c[e] : c);
  }
  return !1;
}
function IR(e) {
  return RR(mp(), e);
}
function Fu(e) {
  return Yo(e);
}
function Pu(e, t, n) {
  return Yo(e, t, n), Yo;
}
function Lu(e, t) {
  Yo(e, "", Ts({ expires: -1 }, pp.cookies, t));
}
function mp() {
  return DR(Yo());
}
function FR() {
  return Yo();
}
Ts(Yo, {
  has: IR,
  set: Pu,
  setItem: Pu,
  get: Fu,
  getItem: Fu,
  remove: Lu,
  removeItem: Lu,
  keys: mp,
  getJSON: FR
});
var PR = Yo, LR = oo, wi = ia, Oi = yf, VR = no, AR = Mn;
function Vu(e) {
  try {
    var t = "__xe_t";
    return e.setItem(t, 1), e.removeItem(t), !0;
  } catch {
    return !1;
  }
}
function ms(e) {
  return navigator.userAgent.indexOf(e) > -1;
}
function _R() {
  var e, t, n, o = !1, s = !1, u = !1, c = {
    isNode: !1,
    isMobile: o,
    isPC: !1,
    isDoc: !!wi
  };
  if (!Oi && typeof process !== LR)
    c.isNode = !0;
  else {
    n = ms("Edge"), t = ms("Chrome"), o = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent), c.isDoc && (e = wi.body || wi.documentElement, AR(["webkit", "khtml", "moz", "ms", "o"], function(h) {
      c["-" + h] = !!e[h + "MatchesSelector"];
    }));
    try {
      s = Vu(Oi.localStorage);
    } catch {
    }
    try {
      u = Vu(Oi.sessionStorage);
    } catch {
    }
    VR(c, {
      edge: n,
      firefox: ms("Firefox"),
      msie: !n && c["-ms"],
      safari: !t && !n && ms("Safari"),
      isMobile: o,
      isPC: !o,
      isLocalStorage: s,
      isSessionStorage: u
    });
  }
  return c;
}
var BR = _R, gp = hm, Au = no, HR = Gl, WR = $d, zR = Tm, jR = $m, qR = Zr, GR = Nd, YR = Id, UR = Fd, KR = Mn, XR = na, ZR = Pd, JR = Jm, QR = oa, eD = Mg, tD = la, nD = _d, oD = Ag, rD = yr, lD = qg, sD = Ug, iD = Yl, aD = Zg, cD = tv, uD = rv, dD = iv, fD = uv, pD = Sv, hD = jd, mD = Mv, gD = Nv, vD = Hd, bD = Vv, xD = vb, CD = Eb, yD = Tb, ED = ef, wD = Ib, OD = Lb, SD = Hb, TD = of, RD = rf, DD = to, MD = Wt, $D = Mo, kD = Ub, ND = mo, ID = Vn, FD = Fs, PD = $o, LD = Xr, VD = ff, AD = Ko, _D = Uo, BD = on, HD = Cx, WD = Ox, zD = Nx, jD = hf, qD = Do, GD = Jr, YD = ta, UD = mf, KD = Ud, XD = Xd, ZD = Kd, JD = Wx, QD = Xx, eM = gf, tM = vf, nM = go, oM = sa, rM = bf, lM = rC, sM = xf, iM = Cf, aM = dC, cM = mC, uM = CC, dM = SC, fM = MC, pM = IC, hM = VC, mM = HC, gM = qC, vM = fy, bM = Tf, xM = gy, CM = Oy, yM = Ry, EM = aa, wM = $y, OM = Fy, SM = Vy, TM = By, RM = Uy, DM = Zy, MM = eE, $M = oE, kM = iE, NM = Ul, IM = fE, FM = Df, PM = wE, LM = SE, VM = kE, AM = Ad, _M = zd, BM = FE, HM = mw, WM = ua, zM = kf, jM = Nf, qM = da, GM = xw, YM = Cr, UM = Xo, KM = Sw, XM = Dw, ZM = fa, JM = Iw, QM = Pf, e$ = Ww, t$ = Bs, n$ = pO, o$ = ts, r$ = Af, l$ = An, s$ = Gf, i$ = Yf, a$ = CS, c$ = Kn, u$ = ES, d$ = Hf, f$ = jf, p$ = zf, h$ = SS, m$ = kS, g$ = AS, v$ = HS, b$ = GS, x$ = qf, C$ = XS, y$ = Xf, E$ = Uf, w$ = Kf, O$ = dT, S$ = mT, T$ = yT, R$ = OT, D$ = RT, M$ = $T, $$ = np, k$ = AT, _u = $n, N$ = BT, I$ = Kr, F$ = WT, P$ = jT, L$ = YT, V$ = XT, A$ = JT, _$ = eR, B$ = oR, H$ = rp, W$ = dR, z$ = fp, j$ = yR, q$ = OR, G$ = PR, Y$ = BR;
Au(gp, {
  // object
  assign: Au,
  objectEach: HR,
  lastObjectEach: WR,
  objectMap: zR,
  merge: jR,
  // array
  uniq: ZR,
  union: JR,
  sortBy: eD,
  orderBy: tD,
  shuffle: nD,
  sample: oD,
  some: GR,
  every: YR,
  slice: rD,
  filter: lD,
  find: aD,
  findLast: cD,
  findKey: sD,
  includes: iD,
  arrayIndexOf: TD,
  arrayLastIndexOf: RD,
  map: qR,
  reduce: uD,
  copyWithin: dD,
  chunk: fD,
  zip: pD,
  unzip: hD,
  zipObject: mD,
  flatten: gD,
  toArray: QR,
  includeArrays: UR,
  pluck: vD,
  invoke: bD,
  arrayEach: KR,
  lastArrayEach: XR,
  toArrayTree: xD,
  toTreeArray: CD,
  findTree: yD,
  eachTree: ED,
  mapTree: wD,
  filterTree: OD,
  searchTree: SD,
  // base
  hasOwnProp: DD,
  eqNull: _D,
  isNaN: kD,
  isFinite: JD,
  isUndefined: ND,
  isArray: MD,
  isFloat: QD,
  isInteger: eM,
  isFunction: ID,
  isBoolean: tM,
  isString: PD,
  isNumber: nM,
  isRegExp: oM,
  isObject: FD,
  isPlainObject: LD,
  isDate: AD,
  isError: rM,
  isTypeError: lM,
  isEmpty: sM,
  isNull: $D,
  isSymbol: iM,
  isArguments: aM,
  isElement: cM,
  isDocument: uM,
  isWindow: dM,
  isFormData: fM,
  isMap: pM,
  isWeakMap: hM,
  isSet: mM,
  isWeakSet: gM,
  isLeapYear: VD,
  isMatch: vM,
  isEqual: bM,
  isEqualWith: xM,
  getType: CM,
  uniqueId: yM,
  getSize: UD,
  indexOf: zD,
  lastIndexOf: jD,
  findIndexOf: EM,
  findLastIndexOf: wM,
  toStringJSON: OM,
  toJSONString: SM,
  keys: qD,
  values: GD,
  entries: TM,
  pick: RM,
  omit: DM,
  first: MM,
  last: $M,
  each: BD,
  forOf: HD,
  lastForOf: WD,
  lastEach: KD,
  has: kM,
  get: NM,
  set: IM,
  groupBy: FM,
  countBy: PM,
  clone: YD,
  clear: ZD,
  remove: XD,
  range: LM,
  destructuring: VM,
  // number
  random: AM,
  min: BM,
  max: _M,
  commafy: HM,
  round: WM,
  ceil: zM,
  floor: jM,
  toFixed: qM,
  toNumber: YM,
  toNumberString: UM,
  toInteger: GM,
  add: KM,
  subtract: XM,
  multiply: ZM,
  divide: JM,
  sum: QM,
  mean: e$,
  // date
  now: i$,
  timestamp: a$,
  isValidDate: c$,
  isDateSame: u$,
  toStringDate: l$,
  toDateString: s$,
  getWhatYear: t$,
  getWhatQuarter: n$,
  getWhatMonth: o$,
  getWhatWeek: d$,
  getWhatDay: r$,
  getYearDay: f$,
  getYearWeek: p$,
  getMonthWeek: h$,
  getDayOfYear: m$,
  getDayOfMonth: g$,
  getDateDiff: v$,
  // string
  trim: y$,
  trimLeft: w$,
  trimRight: E$,
  escape: O$,
  unescape: S$,
  camelCase: T$,
  kebabCase: R$,
  repeat: C$,
  padStart: x$,
  padEnd: b$,
  startsWith: D$,
  endsWith: M$,
  template: $$,
  toFormatString: k$,
  toString: _u,
  toValueString: _u,
  // function
  noop: N$,
  property: I$,
  bind: F$,
  once: P$,
  after: L$,
  before: V$,
  throttle: A$,
  debounce: _$,
  delay: B$,
  // url
  unserialize: H$,
  serialize: W$,
  parseUrl: z$,
  // web
  getBaseURL: j$,
  locat: q$,
  browse: Y$,
  cookie: G$
});
var U$ = gp;
const l = /* @__PURE__ */ $h(U$), ct = "vxe-icon-", v = {
  size: null,
  zIndex: 999,
  version: 0,
  // resizeInterval: 500,
  emptyCell: "　",
  // loadingText: null, // 自定义loading提示内容，如果为null则不显示文本
  table: {
    fit: !0,
    showHeader: !0,
    animat: !0,
    delayHover: 250,
    autoResize: !0,
    minHeight: 144,
    // keepSource: false,
    // showOverflow: null,
    // showHeaderOverflow: null,
    // showFooterOverflow: null,
    // resizeInterval: 500,
    // size: null,
    // zIndex: null,
    // stripe: false,
    // border: false,
    // round: false,
    // emptyText: '暂无数据',
    // emptyRender: {
    //   name: ''
    // },
    // rowConfig: {
    //   keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
    // },
    resizeConfig: {
      refreshDelay: 250
    },
    radioConfig: {
      // trigger: 'default'
      strict: !0
    },
    checkboxConfig: {
      // trigger: 'default',
      strict: !0
    },
    tooltipConfig: {
      enterable: !0
    },
    validConfig: {
      showMessage: !0,
      autoClear: !0,
      message: "inline",
      msgMode: "single"
    },
    columnConfig: {
      maxFixedSize: 4
    },
    // menuConfig: {
    //   visibleMethod () {}
    // },
    customConfig: {
      allowFixed: !0,
      showFooter: !0
      //  storage: false,
      //  checkMethod () {}
    },
    sortConfig: {
      // remote: false,
      // trigger: 'default',
      // orders: ['asc', 'desc', null],
      // sortMethod: null,
      showIcon: !0,
      iconLayout: "vertical"
    },
    filterConfig: {
      // remote: false,
      // filterMethod: null,
      showIcon: !0
    },
    treeConfig: {
      rowField: "id",
      parentField: "parentId",
      childrenField: "children",
      hasChildField: "hasChild",
      mapChildrenField: "_X_ROW_CHILD",
      indent: 20,
      showIcon: !0
    },
    expandConfig: {
      // trigger: 'default',
      showIcon: !0
    },
    editConfig: {
      // mode: 'cell',
      showIcon: !0,
      showAsterisk: !0
    },
    importConfig: {
      modes: ["insert", "covering"]
    },
    exportConfig: {
      modes: ["current", "selected"]
    },
    printConfig: {
      modes: ["current", "selected"]
    },
    mouseConfig: {
      extension: !0
    },
    keyboardConfig: {
      isEsc: !0
    },
    areaConfig: {
      autoClear: !0,
      selectCellByHeader: !0
    },
    clipConfig: {
      isCopy: !0,
      isCut: !0,
      isPaste: !0
    },
    fnrConfig: {
      isFind: !0,
      isReplace: !0
    },
    scrollX: {
      // enabled: false,
      gt: 60
      // oSize: 0
    },
    scrollY: {
      // enabled: false,
      gt: 100
      // oSize: 0
    }
  },
  export: {
    types: {}
  },
  grid: {
    // size: null,
    // zoomConfig: {
    //   escRestore: true
    // },
    formConfig: {
      enabled: !0
    },
    pagerConfig: {
      enabled: !0
      // perfect: false
    },
    toolbarConfig: {
      enabled: !0
      // perfect: false
    },
    proxyConfig: {
      enabled: !0,
      autoLoad: !0,
      message: !0,
      props: {
        list: null,
        result: "result",
        total: "page.total",
        message: "message"
      }
      // beforeItem: null,
      // beforeColumn: null,
      // beforeQuery: null,
      // afterQuery: null,
      // beforeDelete: null,
      // afterDelete: null,
      // beforeSave: null,
      // afterSave: null
    }
  },
  toolbar: {
    // size: null,
    // import: {
    //   mode: 'covering'
    // },
    // export: {
    //   types: ['csv', 'html', 'xml', 'txt']
    // },
    // buttons: []
  },
  icon: {
    // loading
    LOADING: ct + "spinner roll vxe-loading--default-icon",
    // table
    TABLE_SORT_ASC: ct + "caret-up",
    TABLE_SORT_DESC: ct + "caret-down",
    TABLE_FILTER_NONE: ct + "funnel",
    TABLE_FILTER_MATCH: ct + "funnel",
    TABLE_EDIT: ct + "edit",
    TABLE_TITLE_PREFIX: ct + "question-circle-fill",
    TABLE_TITLE_SUFFIX: ct + "question-circle-fill",
    TABLE_TREE_LOADED: ct + "spinner roll",
    TABLE_TREE_OPEN: ct + "caret-right rotate90",
    TABLE_TREE_CLOSE: ct + "caret-right",
    TABLE_EXPAND_LOADED: ct + "spinner roll",
    TABLE_EXPAND_OPEN: ct + "arrow-right rotate90",
    TABLE_EXPAND_CLOSE: ct + "arrow-right",
    TABLE_CHECKBOX_CHECKED: ct + "checkbox-checked",
    TABLE_CHECKBOX_UNCHECKED: ct + "checkbox-unchecked",
    TABLE_CHECKBOX_INDETERMINATE: ct + "checkbox-indeterminate",
    TABLE_RADIO_CHECKED: ct + "radio-checked",
    TABLE_RADIO_UNCHECKED: ct + "radio-unchecked",
    // button
    BUTTON_DROPDOWN: ct + "arrow-down",
    BUTTON_LOADING: ct + "spinner roll",
    // select
    SELECT_LOADED: ct + "spinner roll",
    SELECT_OPEN: ct + "caret-down rotate180",
    SELECT_CLOSE: ct + "caret-down",
    // pager
    PAGER_HOME: ct + "home-page",
    PAGER_END: ct + "end-page",
    PAGER_JUMP_PREV: ct + "arrow-double-left",
    PAGER_JUMP_NEXT: ct + "arrow-double-right",
    PAGER_PREV_PAGE: ct + "arrow-left",
    PAGER_NEXT_PAGE: ct + "arrow-right",
    PAGER_JUMP_MORE: ct + "ellipsis-h",
    // input
    INPUT_CLEAR: ct + "error-circle-fill",
    INPUT_PWD: ct + "eye-fill",
    INPUT_SHOW_PWD: ct + "eye-fill-close",
    INPUT_PREV_NUM: ct + "caret-up",
    INPUT_NEXT_NUM: ct + "caret-down",
    INPUT_DATE: ct + "calendar",
    INPUT_SEARCH: ct + "search",
    // modal
    MODAL_ZOOM_IN: ct + "square",
    MODAL_ZOOM_OUT: ct + "maximize",
    MODAL_CLOSE: ct + "close",
    MODAL_INFO: ct + "info-circle-fill",
    MODAL_SUCCESS: ct + "success-circle-fill",
    MODAL_WARNING: ct + "warnion-circle-fill",
    MODAL_ERROR: ct + "error-circle-fill",
    MODAL_QUESTION: ct + "question-circle-fill",
    MODAL_LOADING: ct + "spinner roll",
    // toolbar
    TOOLBAR_TOOLS_REFRESH: ct + "repeat",
    TOOLBAR_TOOLS_REFRESH_LOADING: ct + "repeat roll",
    TOOLBAR_TOOLS_IMPORT: ct + "upload",
    TOOLBAR_TOOLS_EXPORT: ct + "download",
    TOOLBAR_TOOLS_PRINT: ct + "print",
    TOOLBAR_TOOLS_FULLSCREEN: ct + "fullscreen",
    TOOLBAR_TOOLS_MINIMIZE: ct + "minimize",
    TOOLBAR_TOOLS_CUSTOM: ct + "custom-column",
    TOOLBAR_TOOLS_FIXED_LEFT: ct + "fixed-left",
    TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED: ct + "fixed-left-fill",
    TOOLBAR_TOOLS_FIXED_RIGHT: ct + "fixed-right",
    TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED: ct + "fixed-right-fill",
    // form
    FORM_PREFIX: ct + "question-circle-fill",
    FORM_SUFFIX: ct + "question-circle-fill",
    FORM_FOLDING: ct + "arrow-up rotate180",
    FORM_UNFOLDING: ct + "arrow-up"
  },
  tooltip: {
    // size: null,
    trigger: "hover",
    theme: "dark",
    enterDelay: 500,
    leaveDelay: 300
  },
  pager: {
    // size: null,
    // autoHidden: false,
    // perfect: true,
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  form: {
    // preventSubmit: false,
    // size: null,
    // colon: false,
    validConfig: {
      showMessage: !0,
      autoPos: !0
    },
    tooltipConfig: {
      enterable: !0
    },
    titleAsterisk: !0
  },
  input: {
    // size: null,
    // transfer: false
    // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    // labelFormat: '',
    // valueFormat: '',
    startDate: new Date(1900, 0, 1),
    endDate: new Date(2100, 0, 1),
    startDay: 1,
    selectDay: 1,
    digits: 2,
    controls: !0
  },
  textarea: {
    // size: null,
    // autosize: {
    //   minRows: 1,
    //   maxRows: 10
    // }
  },
  select: {
    // size: null,
    // transfer: false,
    // optionConfig: {
    //   keyField: '_X_OPTION_KEY'
    // },
    multiCharOverflow: 8
  },
  button: {
    // size: null,
    // transfer: false
  },
  buttonGroup: {
    // size: null
  },
  radio: {
    // size: null,
    strict: !0
  },
  radioButton: {
    // size: null,
    strict: !0
  },
  radioGroup: {
    // size: null,
    strict: !0
  },
  checkbox: {
    // size: null
  },
  checkboxGroup: {
    // size: null
  },
  switch: {
    // size: null
  },
  modal: {
    // size: null,
    top: 15,
    showHeader: !0,
    minWidth: 340,
    minHeight: 140,
    lockView: !0,
    mask: !0,
    duration: 3e3,
    marginSize: 0,
    dblclickZoom: !0,
    showTitleOverflow: !0,
    animat: !0,
    showClose: !0,
    draggable: !0,
    // storage: false,
    storageKey: "VXE_MODAL_POSITION"
  },
  list: {
    // size: null,
    scrollY: {
      enabled: !0,
      gt: 100
      // oSize: 0
    }
  },
  i18n: (e) => e
};
function pa(e, t) {
  return `[vxe-table v4.6.13] ${v.i18n(e, t)}`;
}
function vp(e) {
  return function(t, n) {
    const o = pa(t, n);
    return console[e](o), o;
  };
}
const lt = vp("warn"), ot = vp("error"), fl = {}, Cl = {
  mixin(e) {
    return l.each(e, (t, n) => Cl.add(n, t)), Cl;
  },
  get(e) {
    return fl[e] || [];
  },
  add(e, t) {
    if (process.env.NODE_ENV === "development") {
      const n = ["created", "mounted", "activated", "beforeUnmount", "unmounted", "event.clearEdit", "event.clearActived", "event.clearFilter", "event.clearAreas", "event.showMenu", "event.keydown", "event.export", "event.import"];
      n.indexOf(e) === -1 && lt("vxe.error.errProp", [`Interceptor.${e}`, n.join("|")]);
    }
    if (t) {
      let n = fl[e];
      n || (n = fl[e] = []), process.env.NODE_ENV === "development" && n.indexOf(t) > -1 && lt("vxe.error.coverProp", ["Interceptor", e]), n.push(t);
    }
    return Cl;
  },
  delete(e, t) {
    const n = fl[e];
    n && (t ? l.remove(n, (o) => o === t) : delete fl[e]);
  }
};
class K$ {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return l.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (l.isFunction(n) && (process.env.NODE_ENV === "development" && lt("vxe.error.delProp", ["formats -> callback", "cellFormatMethod"]), n = {
      cellFormatMethod: n
    }), process.env.NODE_ENV === "development") {
      const s = l.keys(o);
      l.each(n, (u, c) => {
        s.includes(c) && lt("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? l.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    l.objectEach(this.store, t);
  }
}
const Hl = new K$();
process.env.NODE_ENV === "development" && Object.assign(Hl, { _name: "Formats" });
var Br = null, Si = null, _o = null, Bu = "z-index-manage", ir = null, Hu = "z-index-style", bp = "m", xp = "s", Wl = {
  m: 1e3,
  s: 1e3
};
function ha() {
  return Br || typeof document < "u" && (Br = document), Br;
}
function Cp() {
  return Br && !Si && (Si = Br.body || Br.getElementsByTagName("body")[0]), Si;
}
function X$() {
  var e = 0, t = ha();
  if (t) {
    var n = Cp();
    if (n)
      for (var o = n.getElementsByTagName("*"), s = 0; s < o.length; s++) {
        var u = o[s];
        if (u && u.style && u.nodeType === 1) {
          var c = u.style.zIndex;
          c && /^\d+$/.test(c) && (e = Math.max(e, Number(c)));
        }
      }
  }
  return e;
}
function Z$() {
  if (!ir) {
    var e = ha();
    e && (ir = e.getElementById(Hu), ir || (ir = e.createElement("style"), ir.id = Hu, e.getElementsByTagName("head")[0].appendChild(ir)));
  }
  return ir;
}
function yp() {
  var e = Z$();
  if (e) {
    var t = "--dom-", n = "-z-index";
    e.innerHTML = ":root{" + t + "main" + n + ":" + Ws() + ";" + t + "sub" + n + ":" + va() + "}";
  }
}
function Ep() {
  if (!_o) {
    var e = ha();
    if (e && (_o = e.getElementById(Bu), !_o)) {
      var t = Cp();
      t && (_o = e.createElement("div"), _o.id = Bu, _o.style.display = "none", t.appendChild(_o), ma(Wl.m), ga(Wl.s));
    }
  }
  return _o;
}
function wp(e) {
  return function(t) {
    if (t) {
      t = Number(t), Wl[e] = t;
      var n = Ep();
      n && (n.dataset ? n.dataset[e] = t + "" : n.setAttribute("data-" + e, t + ""));
    }
    return yp(), Wl[e];
  };
}
var ma = wp(bp);
function Op(e, t) {
  return function(o) {
    var s, u = Ep();
    if (u) {
      var c = u.dataset ? u.dataset[e] : u.getAttribute("data-" + e);
      c && (s = Number(c));
    }
    return s || (s = Wl[e]), o ? Number(o) < s ? t() : o : s;
  };
}
var Ws = Op(bp, Sp);
function Sp() {
  return ma(Ws() + 1);
}
var ga = wp(xp), Tp = Op(xp, Rp);
function va() {
  return Ws() + Tp();
}
function Rp() {
  return ga(Tp() + 1), va();
}
var ba = {
  setCurrent: ma,
  getCurrent: Ws,
  getNext: Sp,
  setSubCurrent: ga,
  getSubCurrent: va,
  getSubNext: Rp,
  getMax: X$
};
yp();
function mt(e) {
  return e && e.enabled !== !1;
}
function xa(e) {
  return e == null || e === "";
}
function Ca(e) {
  const t = e.name, n = l.lastIndexOf(t, "."), o = t.substring(n + 1, t.length).toLowerCase();
  return { filename: t.substring(0, n), type: o };
}
function ho() {
  return ba.getNext();
}
function ko() {
  return ba.getCurrent();
}
function _r(e) {
  return e && e.children && e.children.length > 0;
}
function qt(e) {
  return e ? l.toValueString(v.translate ? v.translate("" + e) : e) : "";
}
function Xt(e, t) {
  return "" + (xa(e) ? t ? v.emptyCell : "" : e);
}
function eo(e) {
  return e === "" || l.eqNull(e);
}
class Yi {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  constructor(t, n, { renderHeader: o, renderCell: s, renderFooter: u, renderData: c } = {}) {
    const h = t.xegrid, i = n.formatter, m = l.isBoolean(n.visible) ? n.visible : !0;
    if (process.env.NODE_ENV === "development") {
      const p = ["seq", "checkbox", "radio", "expand", "html"];
      if (n.type && p.indexOf(n.type) === -1 && lt("vxe.error.errProp", [`type=${n.type}`, p.join(", ")]), (l.isBoolean(n.cellRender) || n.cellRender && !l.isObject(n.cellRender)) && lt("vxe.error.errProp", [`column.cell-render=${n.cellRender}`, "column.cell-render={}"]), (l.isBoolean(n.editRender) || n.editRender && !l.isObject(n.editRender)) && lt("vxe.error.errProp", [`column.edit-render=${n.editRender}`, "column.edit-render={}"]), n.cellRender && n.editRender && lt("vxe.error.errConflicts", ["column.cell-render", "column.edit-render"]), n.type === "expand") {
        const { props: b } = t, { treeConfig: D } = b, { computeTreeOpts: A } = t.getComputeMaps(), $ = A.value;
        D && ($.showLine || $.line) && ot("vxe.error.errConflicts", ["tree-config.showLine", "column.type=expand"]);
      }
      if (i) {
        if (l.isString(i)) {
          const b = Hl.get(i) || l[i];
          (!b || !l.isFunction(b.cellFormatMethod)) && ot("vxe.error.notFormats", [i]);
        } else if (l.isArray(i)) {
          const b = Hl.get(i[0]) || l[i[0]];
          (!b || !l.isFunction(b.cellFormatMethod)) && ot("vxe.error.notFormats", [i[0]]);
        }
      }
    }
    if (Object.assign(this, {
      // 基本属性
      type: n.type,
      property: n.field,
      field: n.field,
      title: n.title,
      width: n.width,
      minWidth: n.minWidth,
      maxWidth: n.maxWidth,
      resizable: n.resizable,
      fixed: n.fixed,
      align: n.align,
      headerAlign: n.headerAlign,
      footerAlign: n.footerAlign,
      showOverflow: n.showOverflow,
      showHeaderOverflow: n.showHeaderOverflow,
      showFooterOverflow: n.showFooterOverflow,
      className: n.className,
      headerClassName: n.headerClassName,
      footerClassName: n.footerClassName,
      formatter: i,
      sortable: n.sortable,
      sortBy: n.sortBy,
      sortType: n.sortType,
      filters: Np(n.filters),
      filterMultiple: l.isBoolean(n.filterMultiple) ? n.filterMultiple : !0,
      filterMethod: n.filterMethod,
      filterResetMethod: n.filterResetMethod,
      filterRecoverMethod: n.filterRecoverMethod,
      filterRender: n.filterRender,
      treeNode: n.treeNode,
      cellType: n.cellType,
      cellRender: n.cellRender,
      editRender: n.editRender,
      contentRender: n.contentRender,
      headerExportMethod: n.headerExportMethod,
      exportMethod: n.exportMethod,
      footerExportMethod: n.footerExportMethod,
      titleHelp: n.titleHelp,
      titlePrefix: n.titlePrefix,
      titleSuffix: n.titleSuffix,
      // 自定义参数
      params: n.params,
      // 渲染属性
      id: n.colId || l.uniqueId("col_"),
      parentId: null,
      visible: m,
      // 内部属性（一旦被使用，将导致不可升级版本）
      halfVisible: !1,
      defaultVisible: m,
      defaultFixed: n.fixed,
      checked: !1,
      halfChecked: !1,
      disabled: !1,
      // 分组层级
      level: 1,
      // 跨行
      rowSpan: 1,
      // 跨列
      colSpan: 1,
      // 数据排序
      order: null,
      sortTime: 0,
      // 列排序
      sortNumber: 0,
      renderSortNumber: 0,
      renderWidth: 0,
      renderHeight: 0,
      resizeWidth: 0,
      renderLeft: 0,
      renderArgs: [],
      model: {},
      renderHeader: o || n.renderHeader,
      renderCell: s || n.renderCell,
      renderFooter: u || n.renderFooter,
      renderData: c,
      // 单元格插槽，只对 grid 有效
      slots: n.slots
    }), h) {
      const { computeProxyOpts: p } = h.getComputeMaps(), b = p.value;
      b.beforeColumn && b.beforeColumn({ $grid: h, column: this });
    }
  }
  getTitle() {
    return qt(this.title || (this.type === "seq" ? v.i18n("vxe.table.seqTitle") : ""));
  }
  getKey() {
    return this.field || (this.type ? `type=${this.type}` : null);
  }
  update(t, n) {
    t !== "filters" && (t === "field" && (this.property = n), this[t] = n);
  }
}
const Ti = {}, Ln = l.browse();
function jo(e, t) {
  return e ? l.isFunction(e) ? e(t) : e : "";
}
function Dp(e) {
  return Ti[e] || (Ti[e] = new RegExp(`(?:^|\\s)${e}(?!\\S)`, "g")), Ti[e];
}
function Mp(e, t, n) {
  if (e) {
    const o = e.parentNode;
    if (n.top += e.offsetTop, n.left += e.offsetLeft, o && o !== document.documentElement && o !== document.body && (n.top -= o.scrollTop, n.left -= o.scrollLeft), !(t && (e === t || e.offsetParent === t)) && e.offsetParent)
      return Mp(e.offsetParent, t, n);
  }
  return n;
}
function Ui(e) {
  return e && /^\d+(px)?$/.test(e);
}
function xl(e) {
  return e && /^\d+%$/.test(e);
}
function To(e, t) {
  return e && e.className && e.className.match && e.className.match(Dp(t));
}
function Pn(e, t) {
  e && To(e, t) && (e.className = e.className.replace(Dp(t), ""));
}
function wo(e, t) {
  e && !To(e, t) && (Pn(e, t), e.className = `${e.className} ${t}`);
}
function qo() {
  const e = document.documentElement, t = document.body;
  return {
    scrollTop: e.scrollTop || t.scrollTop,
    scrollLeft: e.scrollLeft || t.scrollLeft,
    visibleHeight: e.clientHeight || t.clientHeight,
    visibleWidth: e.clientWidth || t.clientWidth
  };
}
function pl(e) {
  return e ? e.offsetHeight : 0;
}
function Ki(e) {
  if (e) {
    const t = getComputedStyle(e), n = l.toNumber(t.paddingTop), o = l.toNumber(t.paddingBottom);
    return n + o;
  }
  return 0;
}
function gs(e, t) {
  e && (e.scrollTop = t);
}
function Wu(e, t) {
  e && (e.scrollLeft = t);
}
function ya(e, t) {
  const n = t.type === "html" ? e.innerText : e.textContent;
  e.getAttribute("title") !== n && e.setAttribute("title", n);
}
function yt(e, t, n, o) {
  let s, u = e.target.shadowRoot && e.composed && e.composedPath()[0] || e.target;
  for (; u && u.nodeType && u !== document; ) {
    if (n && To(u, n) && (!o || o(u)))
      s = u;
    else if (u === t)
      return { flag: n ? !!s : !0, container: t, targetElem: s };
    u = u.parentNode;
  }
  return { flag: !1 };
}
function J$(e, t) {
  return Mp(e, t, { left: 0, top: 0 });
}
function uo(e) {
  const t = e.getBoundingClientRect(), n = t.top, o = t.left, { scrollTop: s, scrollLeft: u, visibleHeight: c, visibleWidth: h } = qo();
  return { boundingTop: n, top: s + n, boundingLeft: o, left: u + o, visibleHeight: c, visibleWidth: h };
}
const zu = "scrollIntoViewIfNeeded", ju = "scrollIntoView";
function $p(e) {
  e && (e[zu] ? e[zu]() : e[ju] && e[ju]());
}
function Q$(e, t) {
  e && e.dispatchEvent(new Event(t));
}
function Ri(e) {
  return e && e.nodeType === 1;
}
const kp = (e, t) => {
  const n = [];
  return e.forEach((o) => {
    o.parentId = t ? t.id : null, o.visible && (o.children && o.children.length && o.children.some((s) => s.visible) ? (n.push(o), n.push(...kp(o.children, o))) : n.push(o));
  }), n;
}, ek = (e) => {
  let t = 1;
  const n = (u, c) => {
    if (c && (u.level = c.level + 1, t < u.level && (t = u.level)), u.children && u.children.length && u.children.some((h) => h.visible)) {
      let h = 0;
      u.children.forEach((i) => {
        i.visible && (n(i, u), h += i.colSpan);
      }), u.colSpan = h;
    } else
      u.colSpan = 1;
  };
  e.forEach((u) => {
    u.level = 1, n(u);
  });
  const o = [];
  for (let u = 0; u < t; u++)
    o.push([]);
  return kp(e).forEach((u) => {
    u.children && u.children.length && u.children.some((c) => c.visible) ? u.rowSpan = 1 : u.rowSpan = t - u.level + 1, o[u.level - 1].push(u);
  }), o;
};
function Di(e, t, n) {
  const { internalData: o } = e;
  return e.clearScroll().then(() => {
    if (t || n)
      return o.lastScrollLeft = 0, o.lastScrollTop = 0, e.scrollTo(t, n);
  });
}
function qu(e) {
  e && e._onscroll && (e.onscroll = null);
}
function Rs(e) {
  e && e._onscroll && (e.onscroll = e._onscroll);
}
function Mi() {
  return l.uniqueId("row_");
}
function ar(e) {
  const { props: t } = e, { computeRowOpts: n } = e.getComputeMaps(), { rowId: o } = t, s = n.value;
  return o || s.keyField || "_X_ROW_KEY";
}
function We(e, t) {
  const n = l.get(t, ar(e));
  return l.eqNull(n) ? "" : encodeURIComponent(n);
}
const Cn = (e, t) => t ? l.isString(t) ? e.getColumnByField(t) : t : null;
function $i(e) {
  if (e) {
    const t = getComputedStyle(e), n = l.toNumber(t.paddingLeft), o = l.toNumber(t.paddingRight);
    return n + o;
  }
  return 0;
}
function Mr(e) {
  if (e) {
    const t = getComputedStyle(e), n = l.toNumber(t.marginLeft), o = l.toNumber(t.marginRight);
    return e.offsetWidth + n + o;
  }
  return 0;
}
function Bo(e, t) {
  return e.querySelector(".vxe-cell" + t);
}
function Np(e) {
  return e && l.isArray(e) ? e.map(({ label: t, value: n, data: o, resetValue: s, checked: u }) => ({ label: t, value: n, data: o, resetValue: s, checked: !!u, _checked: !!u })) : e;
}
function tk(e) {
  return e.map((t, n) => n % 2 === 0 ? Number(t) + 1 : ".").join("");
}
function Yn(e, t) {
  return l.get(e, t.field);
}
function Eo(e, t, n) {
  return l.set(e, t.field, n);
}
function nk(e) {
  const { $table: t, column: n, cell: o } = e, { props: s } = t, { computeResizableOpts: u } = t.getComputeMaps(), c = u.value, { minWidth: h } = c;
  if (h) {
    const y = l.isFunction(h) ? h(e) : h;
    if (y !== "auto")
      return Math.max(1, l.toNumber(y));
  }
  const { showHeaderOverflow: i } = s, { showHeaderOverflow: m, minWidth: p } = n, b = l.isUndefined(m) || l.isNull(m) ? i : m, O = b === "title" || (b === !0 || b === "tooltip") || b === "ellipsis", B = l.floor((l.toNumber(getComputedStyle(o).fontSize) || 14) * 1.6), E = $i(o) + $i(Bo(o, ""));
  let T = B + E;
  if (O) {
    const y = $i(Bo(o, "--title>.vxe-cell--checkbox")), w = Mr(Bo(o, ">.vxe-cell--required-icon")), P = Mr(Bo(o, ">.vxe-cell--edit-icon")), j = Mr(Bo(o, ">.vxe-cell-title-prefix-icon")), F = Mr(Bo(o, ">.vxe-cell-title-suffix-icon")), N = Mr(Bo(o, ">.vxe-cell--sort")), W = Mr(Bo(o, ">.vxe-cell--filter"));
    T += y + w + P + j + F + W + N;
  }
  if (p) {
    const { refTableBody: y } = t.getRefMaps(), w = y.value, P = w ? w.$el : null;
    if (P) {
      if (xl(p)) {
        const F = (P.clientWidth - 1) / 100;
        return Math.max(T, Math.floor(l.toInteger(p) * F));
      } else if (Ui(p))
        return Math.max(T, l.toInteger(p));
    }
  }
  return T;
}
function ys(e) {
  return e && (e.constructor === Yi || e instanceof Yi);
}
function ok(e, t, n) {
  return ys(t) ? t : Gt(new Yi(e, t, n));
}
function Ip(e, t, n) {
  Object.keys(t).forEach((o) => {
    dt(() => t[o], (s) => {
      n.update(o, s), e && (o === "filters" ? (e.setFilter(n, s), e.handleUpdateDataQueue()) : ["visible", "fixed", "width", "minWidth", "maxWidth"].includes(o) && e.handleRefreshColumnQueue());
    });
  });
}
function Fp(e, t, n, o) {
  const { reactData: s } = e, { staticColumns: u } = s, c = t.parentNode, h = o ? o.column : null, i = h ? h.children : u;
  c && i && (i.splice(l.arrayIndexOf(c.children, t), 0, n), s.staticColumns = u.slice(0));
}
function Pp(e, t) {
  const { reactData: n } = e, { staticColumns: o } = n, s = l.findTree(o, (u) => u.id === t.id, { children: "children" });
  s && s.items.splice(s.index, 1), n.staticColumns = o.slice(0);
}
function Gu(e, t) {
  const { internalData: n } = e, { fullColumnIdData: o } = n;
  if (!t)
    return null;
  let s = t.parentId;
  for (; o[s]; ) {
    const u = o[s].column;
    if (s = u.parentId, !s)
      return u;
  }
  return t;
}
function Lp(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const { row: s, col: u, rowspan: c, colspan: h } = e[o];
    if (u > -1 && s > -1 && c && h) {
      if (s === t && u === n)
        return { rowspan: c, colspan: h };
      if (t >= s && t < s + c && n >= u && n < u + h)
        return { rowspan: 0, colspan: 0 };
    }
  }
}
function rk(e) {
  const { props: t, internalData: n } = e;
  return n.initStatus = !1, e.clearSort(), e.clearCurrentRow(), e.clearCurrentColumn(), e.clearRadioRow(), e.clearRadioReserve(), e.clearCheckboxRow(), e.clearCheckboxReserve(), e.clearRowExpand(), e.clearTreeExpand(), e.clearTreeExpandReserve(), e.clearPendingRow(), e.clearFilter && e.clearFilter(), e.clearSelected && (t.keyboardConfig || t.mouseConfig) && e.clearSelected(), e.clearCellAreas && t.mouseConfig && (e.clearCellAreas(), e.clearCopyCellArea()), e.clearScroll();
}
function lk(e) {
  return e.clearFilter && e.clearFilter(), rk(e);
}
function Yu(e, t) {
  const { reactData: n, internalData: o } = e, { refTableBody: s } = e.getRefMaps(), { scrollYLoad: u } = n, { afterFullData: c, scrollYStore: h } = o, i = s.value, m = i ? i.$el : null;
  if (m) {
    const p = m.querySelector(`[rowid="${We(e, t)}"]`);
    if (p) {
      const b = m.clientHeight, D = m.scrollTop, A = p.offsetParent, $ = p.offsetTop + (A ? A.offsetTop : 0), O = p.clientHeight;
      if ($ < D || $ > D + b)
        return e.scrollTo(null, $);
      if ($ + O >= b + D)
        return e.scrollTo(null, D + O);
    } else if (u)
      return e.scrollTo(null, (c.indexOf(t) - 1) * h.rowHeight);
  }
  return Promise.resolve();
}
function sk(e, t) {
  const { reactData: n, internalData: o } = e, { refTableBody: s } = e.getRefMaps(), { scrollXLoad: u } = n, { visibleColumn: c } = o, h = s.value, i = h ? h.$el : null;
  if (i) {
    const m = i.querySelector(`.${t.id}`);
    if (m) {
      const p = i.clientWidth, b = i.scrollLeft, D = m.offsetParent, A = m.offsetLeft + (D ? D.offsetLeft : 0), $ = m.clientWidth;
      if (A < b || A > b + p)
        return e.scrollTo(A);
      if (A + $ >= p + b)
        return e.scrollTo(b + $);
    } else if (u) {
      let p = 0;
      for (let b = 0; b < c.length && c[b] !== t; b++)
        p += c[b].renderWidth;
      return e.scrollTo(p);
    }
  }
  return Promise.resolve();
}
function Hr(e) {
  return "on" + e.substring(0, 1).toLocaleUpperCase() + e.substring(1);
}
function Ht(e) {
  return l.isArray(e) ? e : [e];
}
const Ea = "modelValue", wa = { transfer: !0 };
function Vp(e) {
  switch (e.name) {
    case "input":
    case "textarea":
      return "input";
  }
  return "update:modelValue";
}
function Ap(e) {
  switch (e.name) {
    case "input":
    case "textarea":
    case "VxeInput":
    case "VxeTextarea":
    case "$input":
    case "$textarea":
      return "input";
  }
  return "change";
}
function ik(e, t) {
  return e && t.valueFormat ? l.toStringDate(e, t.valueFormat) : e;
}
function ak(e, t, n) {
  const { dateConfig: o = {} } = t;
  return l.toDateString(ik(e, t), o.labelFormat || n);
}
function Uu(e, t) {
  return ak(e, t, v.i18n(`vxe.input.date.labelFormat.${t.type}`));
}
function _p(e) {
  return `vxe-${e.replace("$", "")}`;
}
function fo({ name: e }) {
  return mn(e);
}
function jr({ name: e }) {
  return mn(_p(e));
}
function Bp(e, t, n) {
  const { $panel: o } = e;
  o.changeOption({}, t, n);
}
function qr(e) {
  let { name: t, attrs: n } = e;
  return t === "input" && (n = Object.assign({ type: "text" }, n)), n;
}
function Hp(e) {
  const { name: t, immediate: n, props: o } = e;
  if (!n) {
    if (t === "VxeInput" || t === "$input") {
      const { type: s } = o || {};
      return !(!s || s === "text" || s === "number" || s === "integer" || s === "float");
    }
    return !(t === "input" || t === "textarea" || t === "$textarea");
  }
  return n;
}
function Qr(e, t, n, o) {
  return l.assign({ immediate: Hp(e) }, wa, o, e.props, { [Ea]: n });
}
function Ds(e, t, n, o) {
  return l.assign({}, wa, o, e.props, { [Ea]: n });
}
function po(e, t, n, o) {
  return l.assign({}, wa, o, e.props, { [Ea]: n });
}
function zs(e, t) {
  return t.$type === "cell" || Hp(e);
}
function hl(e, t, n) {
  const { placeholder: o } = e;
  return [
    d("span", {
      class: "vxe-cell--label"
    }, o && xa(n) ? [
      d("span", {
        class: "vxe-cell--placeholder"
      }, Xt(qt(o), 1))
    ] : Xt(n, 1))
  ];
}
function Oa(e, t, n, o) {
  const { events: s } = e, u = Vp(e), c = Ap(e), h = c === u, i = {};
  return s && l.objectEach(s, (m, p) => {
    i[Hr(p)] = function(...b) {
      m(t, ...b);
    };
  }), n && (i[Hr(u)] = function(m) {
    n(m), h && o && o(m), s && s[u] && s[u](t, m);
  }), !h && o && (i[Hr(c)] = function(...m) {
    o(...m), s && s[c] && s[c](t, ...m);
  }), i;
}
function el(e, t, n, o) {
  const { events: s } = e, u = Vp(e), c = Ap(e), h = {};
  return l.objectEach(s, (i, m) => {
    h[Hr(m)] = function(...p) {
      process.env.NODE_ENV === "development" && (l.isFunction(i) || ot("vxe.error.errFunc", [i])), i(t, ...p);
    };
  }), n && (h[Hr(u)] = function(i) {
    n(i), s && s[u] && s[u](t, i);
  }), o && (h[Hr(c)] = function(...i) {
    o(...i), s && s[c] && s[c](t, ...i);
  }), h;
}
function js(e, t) {
  const { $table: n, row: o, column: s } = t, { name: u } = e, { model: c } = s, h = zs(e, t);
  return el(e, t, (i) => {
    h ? Eo(o, s, i) : (c.update = !0, c.value = i);
  }, (i) => {
    if (!h && ["VxeInput", "VxeTextarea", "$input", "$textarea"].includes(u)) {
      const m = i.value;
      c.update = !0, c.value = m, n.updateStatus(t, m);
    } else
      n.updateStatus(t);
  });
}
function Ms(e, t, n) {
  return el(e, t, (o) => {
    n.data = o;
  }, () => {
    Bp(t, !l.eqNull(n.data), n);
  });
}
function Oo(e, t) {
  const { $form: n, data: o, property: s } = t;
  return el(e, t, (u) => {
    l.set(o, s, u);
  }, () => {
    n.updateStatus(t);
  });
}
function Wp(e, t) {
  const { $table: n, row: o, column: s } = t, { model: u } = s;
  return Oa(e, t, (c) => {
    const h = c.target.value;
    zs(e, t) ? Eo(o, s, h) : (u.update = !0, u.value = h);
  }, (c) => {
    const h = c.target.value;
    n.updateStatus(t, h);
  });
}
function zp(e, t, n) {
  return Oa(e, t, (o) => {
    n.data = o.target.value;
  }, () => {
    Bp(t, !l.eqNull(n.data), n);
  });
}
function jp(e, t) {
  const { $form: n, data: o, property: s } = t;
  return Oa(e, t, (u) => {
    const c = u.target.value;
    l.set(o, s, c);
  }, () => {
    n.updateStatus(t);
  });
}
function ki(e, t) {
  const { row: n, column: o } = t, { name: s } = e, u = zs(e, t) ? Yn(n, o) : o.model.value;
  return [
    d(s, Object.assign(Object.assign(Object.assign({ class: `vxe-default-${s}` }, qr(e)), { value: u }), Wp(e, t)))
  ];
}
function Ku(e, t) {
  return [
    d(fo(e), Object.assign(Object.assign({}, Qr(e, t, null)), el(e, t)))
  ];
}
function vs(e, t) {
  const { row: n, column: o } = t, s = Yn(n, o);
  return [
    d(fo(e), Object.assign(Object.assign({}, Qr(e, t, s)), js(e, t)))
  ];
}
function bs(e, t) {
  const { row: n, column: o } = t, s = Yn(n, o);
  return [
    d(jr(e), Object.assign(Object.assign({}, Qr(e, t, s)), js(e, t)))
  ];
}
function qp(e, t) {
  return [
    d(mn("vxe-button"), Object.assign(Object.assign({}, Qr(e, t, null)), el(e, t)))
  ];
}
function ck(e, t) {
  return e.children.map((n) => qp(n, t)[0]);
}
function Xi(e, t, n) {
  const { optionGroups: o, optionGroupProps: s = {} } = e, u = s.options || "options", c = s.label || "label";
  return o.map((h, i) => d("optgroup", {
    key: i,
    label: h[c]
  }, n(h[u], e, t)));
}
function $s(e, t, n) {
  const { optionProps: o = {} } = t, { row: s, column: u } = n, c = o.label || "label", h = o.value || "value", i = o.disabled || "disabled", m = zs(t, n) ? Yn(s, u) : u.model.value;
  return e.map((p, b) => d("option", {
    key: b,
    value: p[h],
    disabled: p[i],
    /* eslint-disable eqeqeq */
    selected: p[h] == m
  }, p[c]));
}
function uk(e, t) {
  const { column: n } = t, { name: o } = e, s = qr(e);
  return n.filters.map((u, c) => d(o, Object.assign(Object.assign(Object.assign({ key: c, class: `vxe-default-${o}` }, s), { value: u.data }), zp(e, t, u))));
}
function dk(e, t) {
  const { column: n } = t;
  return n.filters.map((o, s) => {
    const u = o.data;
    return d(fo(e), Object.assign(Object.assign({ key: s }, Ds(e, e, u)), Ms(e, t, o)));
  });
}
function fk(e, t) {
  const { column: n } = t;
  return n.filters.map((o, s) => {
    const u = o.data;
    return d(jr(e), Object.assign(Object.assign({ key: s }, Ds(e, e, u)), Ms(e, t, o)));
  });
}
function $r({ option: e, row: t, column: n }) {
  const { data: o } = e;
  return l.get(t, n.property) == o;
}
function Xu(e, t) {
  return [
    d("select", Object.assign(Object.assign({ class: "vxe-default-select" }, qr(e)), Wp(e, t)), e.optionGroups ? Xi(e, t, $s) : $s(e.options, e, t))
  ];
}
function Zu(e, t) {
  const { row: n, column: o } = t, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h } = e, i = Yn(n, o);
  return [
    d(fo(e), Object.assign(Object.assign({}, Qr(e, t, i, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h })), js(e, t)))
  ];
}
function Ju(e, t) {
  const { row: n, column: o } = t, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h } = e, i = Yn(n, o);
  return [
    d(jr(e), Object.assign(Object.assign({}, Qr(e, t, i, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h })), js(e, t)))
  ];
}
function Es(e, { row: t, column: n }) {
  const { props: o = {}, options: s, optionGroups: u, optionProps: c = {}, optionGroupProps: h = {} } = e, i = l.get(t, n.property);
  let m;
  const p = c.label || "label", b = c.value || "value";
  return xa(i) ? "" : l.map(o.multiple ? i : [i], u ? (D) => {
    const A = h.options || "options";
    for (let $ = 0; $ < u.length && (m = l.find(u[$][A], (O) => O[b] == D), !m); $++)
      ;
    return m ? m[p] : D;
  } : (D) => (m = l.find(s, (A) => A[b] == D), m ? m[p] : D)).join(", ");
}
function Qu(e, t) {
  const { data: n, property: o } = t, { name: s } = e, u = qr(e), c = l.get(n, o);
  return [
    d(s, Object.assign(Object.assign(Object.assign({ class: `vxe-default-${s}` }, u), { value: u && s === "input" && (u.type === "submit" || u.type === "reset") ? null : c }), jp(e, t)))
  ];
}
function Ni(e, t) {
  const { data: n, property: o } = t, s = l.get(n, o);
  return [
    d(fo(e), Object.assign(Object.assign({}, po(e, t, s)), Oo(e, t)))
  ];
}
function Ii(e, t) {
  const { data: n, property: o } = t, s = l.get(n, o);
  return [
    d(jr(e), Object.assign(Object.assign({}, po(e, t, s)), Oo(e, t)))
  ];
}
function Gp(e, t) {
  return [
    d(mn("vxe-button"), Object.assign(Object.assign({}, po(e, t, null)), el(e, t)))
  ];
}
function pk(e, t) {
  return e.children.map((n) => Gp(n, t)[0]);
}
function ed(e, t, n) {
  const { data: o, property: s } = n, { optionProps: u = {} } = t, c = u.label || "label", h = u.value || "value", i = u.disabled || "disabled", m = l.get(o, s);
  return e.map((p, b) => d("option", {
    key: b,
    value: p[h],
    disabled: p[i],
    /* eslint-disable eqeqeq */
    selected: p[h] == m
  }, p[c]));
}
function Fi(e) {
  const { row: t, column: n, options: o } = e;
  return o.original ? Yn(t, n) : Es(n.editRender || n.cellRender, e);
}
function Pi(e, t) {
  const { data: n, property: o } = t, s = l.get(n, o);
  return [
    d(fo(e), Object.assign(Object.assign({}, po(e, t, s)), Oo(e, t)))
  ];
}
function td(e, t) {
  const { options: n, optionProps: o } = e, { data: s, property: u } = t, c = l.get(s, u);
  return [
    d(fo(e), Object.assign(Object.assign({
      options: n,
      optionProps: o
    }, po(e, t, c)), Oo(e, t)))
  ];
}
function nd(e, t) {
  const { name: n, options: o, optionProps: s = {} } = e, { data: u, property: c } = t, h = s.label || "label", i = s.value || "value", m = s.disabled || "disabled", p = l.get(u, c), b = _p(n);
  return o ? [
    d(mn(`${b}-group`), Object.assign(Object.assign({}, po(e, t, p)), Oo(e, t)), {
      default: () => o.map((D, A) => d(mn(b), {
        key: A,
        label: D[i],
        content: D[h],
        disabled: D[m]
      }))
    })
  ] : [
    d(mn(b), Object.assign(Object.assign({}, po(e, t, p)), Oo(e, t)))
  ];
}
const xs = {
  input: {
    autofocus: "input",
    renderEdit: ki,
    renderDefault: ki,
    renderFilter: uk,
    defaultFilterMethod: $r,
    renderItemContent: Qu
  },
  textarea: {
    autofocus: "textarea",
    renderEdit: ki,
    renderItemContent: Qu
  },
  select: {
    renderEdit: Xu,
    renderDefault: Xu,
    renderCell(e, t) {
      return hl(e, t, Es(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t;
      return n.filters.map((o, s) => d("select", Object.assign(Object.assign({ key: s, class: "vxe-default-select" }, qr(e)), zp(e, t, o)), e.optionGroups ? Xi(e, t, $s) : $s(e.options, e, t)));
    },
    defaultFilterMethod: $r,
    renderItemContent(e, t) {
      return [
        d("select", Object.assign(Object.assign({ class: "vxe-default-select" }, qr(e)), jp(e, t)), e.optionGroups ? Xi(e, t, ed) : ed(e.options, e, t))
      ];
    },
    exportMethod: Fi
  },
  VxeInput: {
    autofocus: ".vxe-input--inner",
    renderEdit: vs,
    renderCell(e, t) {
      const { props: n = {} } = e, { row: o, column: s } = t, u = n.digits || v.input.digits;
      let c = l.get(o, s.property);
      if (c)
        switch (n.type) {
          case "date":
          case "week":
          case "month":
          case "year":
            c = Uu(c, n);
            break;
          case "float":
            c = l.toFixed(l.floor(c, u), u);
            break;
        }
      return hl(e, t, c);
    },
    renderDefault: vs,
    renderFilter: dk,
    defaultFilterMethod: $r,
    renderItemContent: Ni
  },
  VxeTextarea: {
    autofocus: ".vxe-textarea--inner",
    renderItemContent: Ni
  },
  VxeButton: {
    renderDefault: Ku,
    renderItemContent: Pi
  },
  VxeButtonGroup: {
    renderDefault: Ku,
    renderItemContent(e, t) {
      const { options: n } = e, { data: o, property: s } = t, u = l.get(o, s);
      return [
        d(fo(e), Object.assign(Object.assign({ options: n }, po(e, t, u)), Oo(e, t)))
      ];
    }
  },
  VxeSelect: {
    autofocus: ".vxe-input--inner",
    renderEdit: Zu,
    renderDefault: Zu,
    renderCell(e, t) {
      return hl(e, t, Es(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t, { options: o, optionProps: s, optionGroups: u, optionGroupProps: c } = e;
      return n.filters.map((h, i) => {
        const m = h.data;
        return d(fo(e), Object.assign(Object.assign({ key: i }, Ds(e, t, m, { options: o, optionProps: s, optionGroups: u, optionGroupProps: c })), Ms(e, t, h)));
      });
    },
    defaultFilterMethod: $r,
    renderItemContent(e, t) {
      const { data: n, property: o } = t, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h } = e, i = l.get(n, o);
      return [
        d(fo(e), Object.assign(Object.assign({}, po(e, t, i, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h })), Oo(e, t)))
      ];
    },
    exportMethod: Fi
  },
  VxeRadio: {
    autofocus: ".vxe-radio--input",
    renderItemContent: Pi
  },
  VxeRadioGroup: {
    autofocus: ".vxe-radio--input",
    renderItemContent: td
  },
  VxeCheckbox: {
    autofocus: ".vxe-checkbox--input",
    renderItemContent: Pi
  },
  VxeCheckboxGroup: {
    autofocus: ".vxe-checkbox--input",
    renderItemContent: td
  },
  VxeSwitch: {
    autofocus: ".vxe-switch--button",
    renderEdit: vs,
    renderDefault: vs,
    renderItemContent: Ni
  },
  // 以下已废弃
  $input: {
    autofocus: ".vxe-input--inner",
    renderEdit: bs,
    renderCell(e, t) {
      const { props: n = {} } = e, { row: o, column: s } = t, u = n.digits || v.input.digits;
      let c = l.get(o, s.property);
      if (c)
        switch (n.type) {
          case "date":
          case "week":
          case "month":
          case "year":
            c = Uu(c, n);
            break;
          case "float":
            c = l.toFixed(l.floor(c, u), u);
            break;
        }
      return hl(e, t, c);
    },
    renderDefault: bs,
    renderFilter: fk,
    defaultFilterMethod: $r,
    renderItemContent: Ii
  },
  $textarea: {
    autofocus: ".vxe-textarea--inner",
    renderItemContent: Ii
  },
  $button: {
    renderDefault: qp,
    renderItemContent: Gp
  },
  $buttons: {
    renderDefault: ck,
    renderItemContent: pk
  },
  $select: {
    autofocus: ".vxe-input--inner",
    renderEdit: Ju,
    renderDefault: Ju,
    renderCell(e, t) {
      return hl(e, t, Es(e, t));
    },
    renderFilter(e, t) {
      const { column: n } = t, { options: o, optionProps: s, optionGroups: u, optionGroupProps: c } = e;
      return n.filters.map((h, i) => {
        const m = h.data;
        return d(jr(e), Object.assign(Object.assign({ key: i }, Ds(e, t, m, { options: o, optionProps: s, optionGroups: u, optionGroupProps: c })), Ms(e, t, h)));
      });
    },
    defaultFilterMethod: $r,
    renderItemContent(e, t) {
      const { data: n, property: o } = t, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h } = e, i = l.get(n, o);
      return [
        d(jr(e), Object.assign(Object.assign({}, po(e, t, i, { options: s, optionProps: u, optionGroups: c, optionGroupProps: h })), Oo(e, t)))
      ];
    },
    exportMethod: Fi
  },
  $radio: {
    autofocus: ".vxe-radio--input",
    renderItemContent: nd
  },
  $checkbox: {
    autofocus: ".vxe-checkbox--input",
    renderItemContent: nd
  },
  $switch: {
    autofocus: ".vxe-switch--button",
    renderEdit: bs,
    renderDefault: bs,
    renderItemContent: Ii
  }
  // 以上已废弃
}, dr = {
  mixin(e) {
    return l.each(e, (t, n) => dr.add(n, t)), dr;
  },
  get(e) {
    return xs[e] || null;
  },
  add(e, t) {
    if (e && t) {
      const n = xs[e];
      n ? (process.env.NODE_ENV === "development" && l.each(t, (o, s) => {
        !l.eqNull(n[s]) && n[s] !== o && lt("vxe.error.coverProp", [`Renderer.${e}`, s]);
      }), Object.assign(n, t)) : xs[e] = t;
    }
    return dr;
  },
  delete(e) {
    return delete xs[e], dr;
  }
};
class hk {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return l.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (l.isFunction(n) && (process.env.NODE_ENV === "development" && lt("vxe.error.delProp", ["commands -> callback", "commandMethod"]), n = {
      commandMethod: n
    }), process.env.NODE_ENV === "development") {
      const s = l.keys(o);
      l.each(n, (u, c) => {
        s.includes(c) && lt("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? l.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    l.objectEach(this.store, t);
  }
}
const Sa = new hk();
process.env.NODE_ENV === "development" && Object.assign(Sa, { _name: "Commands" });
class mk {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return l.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (l.isFunction(n) && (process.env.NODE_ENV === "development" && lt("vxe.error.delProp", ["menus -> callback", "menuMethod"]), n = {
      menuMethod: n
    }), process.env.NODE_ENV === "development") {
      const s = l.keys(o);
      l.each(n, (u, c) => {
        s.includes(c) && lt("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? l.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    l.objectEach(this.store, t);
  }
}
const Ta = new mk();
process.env.NODE_ENV === "development" && Object.assign(Ta, { _name: "Menus" });
class Yp {
  constructor() {
    Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    });
  }
  mixin(t) {
    return l.each(t, (n, o) => {
      this.add(o, n);
    }), this;
  }
  has(t) {
    return !!this.get(t);
  }
  get(t) {
    return this.store[t];
  }
  add(t, n) {
    const o = this.store[t];
    if (process.env.NODE_ENV === "development") {
      const s = l.keys(o);
      l.each(n, (u, c) => {
        s.includes(c) && lt("vxe.error.coverProp", [t, c]);
      });
    }
    return this.store[t] = o ? l.merge(o, n) : n, this;
  }
  delete(t) {
    delete this.store[t];
  }
  forEach(t) {
    l.objectEach(this.store, t);
  }
}
const Ra = new Yp();
process.env.NODE_ENV === "development" && Object.assign(Ra, { _name: "Validators" });
const Up = new Yp();
function Da(e) {
  const t = (e ? e.theme : null) || v.theme || "default";
  if (typeof document < "u") {
    const n = document.documentElement;
    n && n.setAttribute("data-vxe-table-theme", t);
  }
}
const zl = (e) => (e && (e.theme && Da(e), e.zIndex && ba.setCurrent(e.zIndex)), l.merge(v, e)), Ma = zl;
function od(e, t) {
  const n = [];
  return l.objectEach(e, (o, s) => {
    (o === 0 || o === t) && n.push(s);
  }), n;
}
const rd = [];
function Kp(e, t) {
  return e && e.install && rd.indexOf(e) === -1 && (e.install(Xe, t), rd.push(e)), Xe;
}
function Xp(e, t) {
  return v.i18n(e, t);
}
function Zp(e, t) {
  return e ? l.toValueString(v.translate ? v.translate(e, t) : e) : "";
}
class gk {
  /**
   * 获取当前的 zIndex
   */
  get zIndex() {
    return ko();
  }
  /**
   * 获取下一个 zIndex
   */
  get nextZIndex() {
    return ho();
  }
  /**
   * 获取所有导出类型
   */
  get exportTypes() {
    return od(v.export.types, 1);
  }
  /**
   * 获取所有导入类型
   */
  get importTypes() {
    return od(v.export.types, 2);
  }
}
const Jp = new gk(), Qp = "v4", eh = zl, $a = {}, Xe = {
  v: Qp,
  version: "4.6.13",
  setConfig: zl,
  globalStore: $a,
  interceptor: Cl,
  renderer: dr,
  commands: Sa,
  formats: Hl,
  validators: Ra,
  menus: Ta,
  hooks: Up,
  use: Kp,
  t: Xp,
  _t: Zp,
  // 已废弃
  config: zl,
  setup: eh,
  globalConfs: Jp
};
Da($a);
const yl = Mt({
  name: "VxeTableFilterPanel",
  props: {
    filterStore: Object
  },
  setup(e) {
    const t = gt("$xetable", {}), { reactData: n, internalData: o, getComputeMaps: s } = t, { computeFilterOpts: u } = s(), c = Ce(() => {
      const { filterStore: T } = e;
      return T && T.options.some((y) => y.checked);
    }), h = (T, y) => {
      const { filterStore: w } = e;
      w.options.forEach((P) => {
        P._checked = y, P.checked = y;
      }), w.isAllSelected = y, w.isIndeterminate = !1;
    }, i = (T) => {
      const { filterStore: y } = e;
      y.options.forEach((w) => {
        w.checked = w._checked;
      }), t.confirmFilterEvent(T);
    }, m = (T, y, w) => {
      const { filterStore: P } = e;
      P.options.forEach((j) => {
        j._checked = !1;
      }), w._checked = y, t.checkFilterOptions(), i(T);
    }, p = (T) => {
      const { filterStore: y } = e;
      t.handleClearFilter(y.column), t.confirmFilterEvent(T);
    }, b = (T, y, w) => {
      w._checked = y, t.checkFilterOptions();
    }, D = (T, y, w) => {
      const { filterStore: P } = e;
      P.multiple ? b(T, y, w) : m(T, y, w);
    }, A = (T, y) => {
      const { filterStore: w } = e;
      w.multiple ? h(T, y) : p(T);
    }, $ = {
      changeRadioOption: m,
      changeMultipleOption: b,
      changeAllOption: A,
      changeOption: D,
      confirmFilter: i,
      resetFilter: p
    }, O = (T, y) => {
      const { filterStore: w } = e, { column: P, multiple: j, maxHeight: F } = w, { slots: N } = P, W = N ? N.filter : null, de = Object.assign({}, o._currFilterParams, { $panel: $, $table: t });
      if (W)
        return [
          d("div", {
            class: "vxe-table--filter-template"
          }, t.callSlot(W, de))
        ];
      if (y && y.renderFilter)
        return [
          d("div", {
            class: "vxe-table--filter-template"
          }, Ht(y.renderFilter(T, de)))
        ];
      const we = j ? w.isAllSelected : !w.options.some((oe) => oe._checked), ve = j && w.isIndeterminate;
      return [
        d("ul", {
          class: "vxe-table--filter-header"
        }, [
          d("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": we,
              "is--indeterminate": ve
            }],
            title: v.i18n(j ? "vxe.table.allTitle" : "vxe.table.allFilter"),
            onClick: (oe) => {
              A(oe, !w.isAllSelected);
            }
          }, (j ? [
            d("span", {
              class: ["vxe-checkbox--icon", ve ? v.icon.TABLE_CHECKBOX_INDETERMINATE : we ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            d("span", {
              class: "vxe-checkbox--label"
            }, v.i18n("vxe.table.allFilter"))
          ]))
        ]),
        d("ul", {
          class: "vxe-table--filter-body",
          style: F ? {
            maxHeight: `${F}px`
          } : {}
        }, w.options.map((oe) => {
          const ie = oe._checked;
          return d("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": oe._checked
            }],
            title: oe.label,
            onClick: (le) => {
              D(le, !oe._checked, oe);
            }
          }, (j ? [
            d("span", {
              class: ["vxe-checkbox--icon", ie ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            d("span", {
              class: "vxe-checkbox--label"
            }, Xt(oe.label, 1))
          ]));
        }))
      ];
    }, B = () => {
      const { filterStore: T } = e, { column: y, multiple: w } = T, P = u.value, j = c.value, F = y.filterRender, N = F ? Xe.renderer.get(F.name) : null, W = !j && !T.isAllSelected && !T.isIndeterminate;
      return w && (!N || N.showFilterFooter !== !1) ? [
        d("div", {
          class: "vxe-table--filter-footer"
        }, [
          d("button", {
            class: {
              "is--disabled": W
            },
            disabled: W,
            onClick: i
          }, P.confirmButtonText || v.i18n("vxe.table.confirmFilter")),
          d("button", {
            onClick: p
          }, P.resetButtonText || v.i18n("vxe.table.resetFilter"))
        ])
      ] : [];
    };
    return () => {
      const { filterStore: T } = e, { initStore: y } = n, { column: w } = T, P = w ? w.filterRender : null, j = P ? Xe.renderer.get(P.name) : null, F = j ? j.filterClassName : "", N = Object.assign({}, o._currFilterParams, { $panel: $, $table: t });
      return d("div", {
        class: [
          "vxe-table--filter-wrapper",
          "filter--prevent-default",
          jo(F, N),
          {
            "is--animat": t.props.animat,
            "is--multiple": T.multiple,
            "is--active": T.visible
          }
        ],
        style: T.style
      }, y.filter && T.visible ? O(P, j).concat(B()) : []);
    };
  }
}), vk = ["setFilter", "clearFilter", "getCheckedFilters"], bk = {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refTableBody: s, refTableFilter: u } = e.getRefMaps(), { computeFilterOpts: c, computeMouseOpts: h } = e.getComputeMaps(), i = {
      checkFilterOptions() {
        const { filterStore: p } = n;
        p.isAllSelected = p.options.every((b) => b._checked), p.isIndeterminate = !p.isAllSelected && p.options.some((b) => b._checked);
      },
      /**
       * 点击筛选事件
       * 当筛选图标被点击时触发
       * 更新选项是否全部状态
       * 打开筛选面板
       * @param {Event} evnt 事件
       * @param {ColumnInfo} column 列配置
       * @param {Object} params 参数
       */
      triggerFilterEvent(p, b, D) {
        const { initStore: A, filterStore: $ } = n;
        if ($.column === b && $.visible)
          $.visible = !1;
        else {
          const { target: O, pageX: B } = p, { visibleWidth: E } = qo(), { filters: T, filterMultiple: y, filterRender: w } = b, P = w ? Xe.renderer.get(w.name) : null, j = b.filterRecoverMethod || (P ? P.filterRecoverMethod : null);
          o._currFilterParams = D, Object.assign($, {
            multiple: y,
            options: T,
            column: b,
            style: null
          }), $.options.forEach((F) => {
            const { _checked: N, checked: W } = F;
            F._checked = W, !W && N !== W && j && j({ option: F, column: b, $table: e });
          }), this.checkFilterOptions(), $.visible = !0, A.filter = !0, ne(() => {
            const N = s.value.$el, W = u.value, de = W ? W.$el : null;
            let we = 0, ve = 0, oe = null, ie = null;
            de && (we = de.offsetWidth, ve = de.offsetHeight, oe = de.querySelector(".vxe-table--filter-header"), ie = de.querySelector(".vxe-table--filter-footer"));
            const le = we / 2, Q = 10, L = N.clientWidth - we - Q;
            let I, V;
            const q = {
              top: `${O.offsetTop + O.offsetParent.offsetTop + O.offsetHeight + 8}px`
            };
            let U = null;
            if (ve >= N.clientHeight && (U = Math.max(60, N.clientHeight - (ie ? ie.offsetHeight : 0) - (oe ? oe.offsetHeight : 0))), b.fixed === "left" ? I = O.offsetLeft + O.offsetParent.offsetLeft - le : b.fixed === "right" ? V = O.offsetParent.offsetWidth - O.offsetLeft + (O.offsetParent.offsetParent.offsetWidth - O.offsetParent.offsetLeft) - b.renderWidth - le : I = O.offsetLeft + O.offsetParent.offsetLeft - le - N.scrollLeft, I) {
              const pe = B + we - le + Q - E;
              pe > 0 && (I -= pe), q.left = `${Math.min(L, Math.max(Q, I))}px`;
            } else if (V) {
              const pe = B + we - le + Q - E;
              pe > 0 && (V += pe), q.right = `${Math.max(Q, V)}px`;
            }
            $.style = q, $.maxHeight = U;
          });
        }
        e.dispatchEvent("filter-visible", { column: b, field: b.field, property: b.field, filterList: e.getCheckedFilters(), visible: $.visible }, p);
      },
      handleClearFilter(p) {
        if (p) {
          const { filters: b, filterRender: D } = p;
          if (b) {
            const A = D ? Xe.renderer.get(D.name) : null, $ = p.filterResetMethod || (A ? A.filterResetMethod : null);
            b.forEach((O) => {
              O._checked = !1, O.checked = !1, $ || (O.data = l.clone(O.resetValue, !0));
            }), $ && $({ options: b, column: p, $table: e });
          }
        }
      },
      /**
       * 确认筛选
       * 当筛选面板中的确定按钮被按下时触发
       * @param {Event} evnt 事件
       */
      confirmFilterEvent(p) {
        const { mouseConfig: b } = t, { filterStore: D, scrollXLoad: A, scrollYLoad: $ } = n, O = c.value, B = h.value, { column: E } = D, { field: T } = E, y = [], w = [];
        E.filters.forEach((F) => {
          F.checked && (y.push(F.value), w.push(F.data));
        });
        const P = e.getCheckedFilters(), j = { $table: e, $event: p, column: E, field: T, property: T, values: y, datas: w, filters: P, filterList: P };
        O.remote || (e.handleTableData(!0), e.checkSelectionStatus()), b && B.area && e.handleFilterEvent && e.handleFilterEvent(p, j), e.dispatchEvent("filter-change", j, p), e.closeFilter(), e.updateFooter().then(() => {
          const { scrollXLoad: F, scrollYLoad: N } = n;
          if (A || F || $ || N)
            return (A || F) && e.updateScrollXSpace(), ($ || N) && e.updateScrollYSpace(), e.refreshScroll();
        }).then(() => (e.updateCellAreas(), e.recalculate(!0))).then(() => {
          setTimeout(() => e.recalculate(), 50);
        });
      }
    };
    return Object.assign(Object.assign({}, {
      /**
       * 手动弹出筛选面板
       * @param column
       */
      openFilter(p) {
        const b = Cn(e, p);
        if (b && b.filters) {
          const { elemStore: D } = o, { fixed: A } = b;
          return e.scrollToColumn(b).then(() => {
            const $ = D[`${A || "main"}-header-wrapper`] || D["main-header-wrapper"], O = $ ? $.value : null;
            if (O) {
              const B = O.querySelector(`.vxe-header--column.${b.id} .vxe-filter--btn`);
              Q$(B, "click");
            }
          });
        }
        return ne();
      },
      /**
       * 修改筛选条件列表
       * @param {ColumnInfo} fieldOrColumn 列或字段名
       * @param {Array} options 选项
       */
      setFilter(p, b) {
        const D = Cn(e, p);
        return D && D.filters && (D.filters = Np(b || [])), ne();
      },
      /**
       * 清空指定列的筛选条件
       * 如果为空则清空所有列的筛选条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearFilter(p) {
        const { filterStore: b } = n, { tableFullColumn: D } = o, A = c.value;
        let $;
        return p ? ($ = Cn(e, p), $ && i.handleClearFilter($)) : D.forEach(i.handleClearFilter), (!p || $ !== b.column) && Object.assign(b, {
          isAllSelected: !1,
          isIndeterminate: !1,
          style: null,
          options: [],
          column: null,
          multiple: !1,
          visible: !1
        }), A.remote ? ne() : e.updateData();
      },
      getCheckedFilters() {
        const { tableFullColumn: p } = o, b = [];
        return p.forEach((D) => {
          const { field: A, filters: $ } = D, O = [], B = [];
          $ && $.length && ($.forEach((E) => {
            E.checked && (O.push(E.value), B.push(E.data));
          }), O.length && b.push({ column: D, field: A, property: A, values: O, datas: B }));
        }), b;
      }
    }), i);
  },
  setupGrid(e) {
    return e.extendTableMethods(vk);
  }
};
let ml;
const ws = Gt({
  modals: []
}), xk = Mt({
  setup() {
    return () => {
      const { modals: e } = ws;
      return d("div", {
        class: "vxe-dynamics--modal"
      }, e.map((t) => d(mn("vxe-modal"), t)));
    };
  }
}), Nt = Th(xk);
function Ck() {
  ml || (ml = document.createElement("div"), ml.className = "vxe-dynamics", document.body.appendChild(ml), Nt.mount(ml));
}
const ka = {
  Panel: yl,
  install(e) {
    Xe.hooks.add("$tableFilter", bk), e.component(yl.name, yl);
  }
}, yk = ka;
Nt.component(yl.name, yl);
const El = Mt({
  name: "VxeTableMenuPanel",
  setup(e, t) {
    const n = l.uniqueId(), o = gt("$xetable", {}), { reactData: s } = o, u = Ue(), c = {
      refElem: u
    }, h = {
      xID: n,
      props: e,
      context: t,
      getRefMaps: () => c
    }, i = () => {
      const { ctxMenuStore: m } = s, { computeMenuOpts: p } = o.getComputeMaps(), b = p.value;
      return d(Yr, {
        to: "body",
        disabled: !1
      }, [
        d("div", {
          ref: u,
          class: ["vxe-table--context-menu-wrapper", b.className, {
            "is--visible": m.visible
          }],
          style: m.style
        }, m.list.map((D, A) => D.every(($) => $.visible === !1) ? Rt() : d("ul", {
          class: "vxe-context-menu--option-wrapper",
          key: A
        }, D.map(($, O) => {
          const B = $.children && $.children.some((E) => E.visible !== !1);
          return $.visible === !1 ? null : d("li", {
            class: [$.className, {
              "link--disabled": $.disabled,
              "link--active": $ === m.selected
            }],
            key: `${A}_${O}`
          }, [
            d("a", {
              class: "vxe-context-menu--link",
              onClick(E) {
                o.ctxMenuLinkEvent(E, $);
              },
              onMouseover(E) {
                o.ctxMenuMouseoverEvent(E, $);
              },
              onMouseout(E) {
                o.ctxMenuMouseoutEvent(E, $);
              }
            }, [
              d("i", {
                class: ["vxe-context-menu--link-prefix", $.prefixIcon]
              }),
              d("span", {
                class: "vxe-context-menu--link-content"
              }, qt($.name)),
              d("i", {
                class: ["vxe-context-menu--link-suffix", B ? $.suffixIcon || "suffix--haschild" : $.suffixIcon]
              })
            ]),
            B ? d("ul", {
              class: ["vxe-table--context-menu-clild-wrapper", {
                "is--show": $ === m.selected && m.showChild
              }]
            }, $.children.map((E, T) => E.visible === !1 ? null : d("li", {
              class: [E.className, {
                "link--disabled": E.disabled,
                "link--active": E === m.selectChild
              }],
              key: `${A}_${O}_${T}`
            }, [
              d("a", {
                class: "vxe-context-menu--link",
                onClick(y) {
                  o.ctxMenuLinkEvent(y, E);
                },
                onMouseover(y) {
                  o.ctxMenuMouseoverEvent(y, $, E);
                },
                onMouseout(y) {
                  o.ctxMenuMouseoutEvent(y, $);
                }
              }, [
                d("i", {
                  class: ["vxe-context-menu--link-prefix", E.prefixIcon]
                }),
                d("span", {
                  class: "vxe-context-menu--link-content"
                }, qt(E.name))
              ])
            ]))) : null
          ]);
        }))))
      ]);
    };
    return h.renderVN = i, h;
  },
  render() {
    return this.renderVN();
  }
}), pt = {
  F2: "F2",
  ESCAPE: "Escape",
  ENTER: "Enter",
  TAB: "Tab",
  DELETE: "Delete",
  BACKSPACE: "Backspace",
  SPACEBAR: " ",
  CONTEXT_MENU: "ContextMenu",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown"
}, ld = {
  " ": "Spacebar",
  Apps: pt.CONTEXT_MENU,
  Del: pt.DELETE,
  Up: pt.ARROW_UP,
  Down: pt.ARROW_DOWN,
  Left: pt.ARROW_LEFT,
  Right: pt.ARROW_RIGHT
}, th = Ln.firefox ? "DOMMouseScroll" : "mousewheel", Zi = [], vt = (e, t) => {
  const { key: n } = e;
  return t = t.toLowerCase(), n ? t === n.toLowerCase() || !!(ld[n] && ld[n].toLowerCase() === t) : !1;
};
function co(e) {
  const t = e.type === th;
  Zi.forEach(({ type: n, cb: o }) => {
    e.cancelBubble || (n === e.type || t && n === "mousewheel") && o(e);
  });
}
const bt = {
  on(e, t, n) {
    Zi.push({ comp: e, type: t, cb: n });
  },
  off(e, t) {
    l.remove(Zi, (n) => n.comp === e && n.type === t);
  },
  trigger: co,
  eqKeypad(e, t) {
    const { key: n } = e;
    return t.toLowerCase() === n.toLowerCase();
  }
};
Ln.isDoc && (Ln.msie || (window.addEventListener("copy", co, !1), window.addEventListener("cut", co, !1), window.addEventListener("paste", co, !1)), document.addEventListener("keydown", co, !1), document.addEventListener("contextmenu", co, !1), window.addEventListener("mousedown", co, !1), window.addEventListener("blur", co, !1), window.addEventListener("resize", co, !1), window.addEventListener(th, l.throttle(co, 100, { leading: !0, trailing: !1 }), { passive: !0, capture: !1 }));
const Ek = ["closeMenu"], wk = {
  setupTable(e) {
    const { xID: t, props: n, reactData: o, internalData: s } = e, { refElem: u, refTableFilter: c, refTableMenu: h } = e.getRefMaps(), { computeMouseOpts: i, computeIsMenu: m, computeMenuOpts: p } = e.getComputeMaps();
    let b = {}, D = {};
    const A = ($, O, B) => {
      const { ctxMenuStore: E } = o, T = m.value, y = p.value, w = y[O], P = y.visibleMethod;
      if (w) {
        const { options: j, disabled: F } = w;
        F ? $.preventDefault() : T && j && j.length && (B.options = j, e.preventEvent($, "event.showMenu", B, () => {
          if (!P || P(B)) {
            $.preventDefault(), e.updateZindex();
            const { scrollTop: N, scrollLeft: W, visibleHeight: de, visibleWidth: we } = qo();
            let ve = $.clientY + N, oe = $.clientX + W;
            const ie = () => {
              s._currMenuParams = B, Object.assign(E, {
                visible: !0,
                list: j,
                selected: null,
                selectChild: null,
                showChild: !1,
                style: {
                  zIndex: s.tZindex,
                  top: `${ve}px`,
                  left: `${oe}px`
                }
              }), ne(() => {
                const V = h.value.getRefMaps().refElem.value, q = V.clientHeight, U = V.clientWidth, { boundingTop: pe, boundingLeft: ke } = uo(V), Ee = pe + q - de, Le = ke + U - we;
                Ee > -10 && (E.style.top = `${Math.max(N + 2, ve - q - 2)}px`), Le > -10 && (E.style.left = `${Math.max(W + 2, oe - U - 2)}px`);
              });
            }, { keyboard: le, row: Q, column: L } = B;
            le && Q && L ? e.scrollToRow(Q, L).then(() => {
              const I = e.getCell(Q, L);
              if (I) {
                const { boundingTop: V, boundingLeft: q } = uo(I);
                ve = V + N + Math.floor(I.offsetHeight / 2), oe = q + W + Math.floor(I.offsetWidth / 2);
              }
              ie();
            }) : ie();
          } else
            b.closeMenu();
        }));
      }
      e.closeFilter();
    };
    return b = {
      /**
       * 关闭快捷菜单
       */
      closeMenu() {
        return Object.assign(o.ctxMenuStore, {
          visible: !1,
          selected: null,
          selectChild: null,
          showChild: !1
        }), ne();
      }
    }, D = {
      /**
       * 处理菜单的移动
       */
      moveCtxMenu($, O, B, E, T, y) {
        let w;
        const P = l.findIndexOf(y, (j) => O[B] === j);
        if (E)
          T && _r(O.selected) ? O.showChild = !0 : (O.showChild = !1, O.selectChild = null);
        else if (vt($, pt.ARROW_UP)) {
          for (let j = P - 1; j >= 0; j--)
            if (y[j].visible !== !1) {
              w = y[j];
              break;
            }
          O[B] = w || y[y.length - 1];
        } else if (vt($, pt.ARROW_DOWN)) {
          for (let j = P + 1; j < y.length; j++)
            if (y[j].visible !== !1) {
              w = y[j];
              break;
            }
          O[B] = w || y[0];
        } else O[B] && (vt($, pt.ENTER) || vt($, pt.SPACEBAR)) && D.ctxMenuLinkEvent($, O[B]);
      },
      handleOpenMenuEvent: A,
      /**
       * 快捷菜单事件处理
       */
      handleGlobalContextmenuEvent($) {
        const { mouseConfig: O, menuConfig: B } = n, { editStore: E, ctxMenuStore: T } = o, { visibleColumn: y } = s, w = c.value, P = h.value, j = i.value, F = p.value, N = u.value, { selected: W } = E, de = ["header", "body", "footer"];
        if (mt(B)) {
          if (T.visible && P && yt($, P.getRefMaps().refElem.value).flag) {
            $.preventDefault();
            return;
          }
          if (s._keyCtx) {
            const we = "body", ve = { type: we, $table: e, keyboard: !0, columns: y.slice(0), $event: $ };
            if (O && j.area) {
              const oe = e.getActiveCellArea();
              if (oe && oe.row && oe.column) {
                ve.row = oe.row, ve.column = oe.column, A($, we, ve);
                return;
              }
            } else if (O && j.selected && W.row && W.column) {
              ve.row = W.row, ve.column = W.column, A($, we, ve);
              return;
            }
          }
          for (let we = 0; we < de.length; we++) {
            const ve = de[we], oe = yt($, N, `vxe-${ve}--column`, (le) => le.parentNode.parentNode.parentNode.getAttribute("xid") === t), ie = { type: ve, $table: e, columns: y.slice(0), $event: $ };
            if (oe.flag) {
              const le = oe.targetElem, Q = e.getColumnNode(le), L = Q ? Q.item : null;
              let I = `${ve}-`;
              if (L && Object.assign(ie, { column: L, columnIndex: e.getColumnIndex(L), cell: le }), ve === "body") {
                const q = e.getRowNode(le.parentNode), U = q ? q.item : null;
                I = "", U && (ie.row = U, ie.rowIndex = e.getRowIndex(U));
              }
              const V = `${I}cell-menu`;
              A($, ve, ie), e.dispatchEvent(V, ie, $);
              return;
            } else if (yt($, N, `vxe-table--${ve}-wrapper`, (le) => le.getAttribute("xid") === t).flag) {
              F.trigger === "cell" ? $.preventDefault() : A($, ve, ie);
              return;
            }
          }
        }
        w && !yt($, w.$el).flag && e.closeFilter(), b.closeMenu();
      },
      ctxMenuMouseoverEvent($, O, B) {
        const E = $.currentTarget, { ctxMenuStore: T } = o;
        $.preventDefault(), $.stopPropagation(), T.selected = O, T.selectChild = B, B || (T.showChild = _r(O), T.showChild && ne(() => {
          const y = E.nextElementSibling;
          if (y) {
            const { boundingTop: w, boundingLeft: P, visibleHeight: j, visibleWidth: F } = uo(E), N = w + E.offsetHeight, W = P + E.offsetWidth;
            let de = "", we = "";
            W + y.offsetWidth > F - 10 && (de = "auto", we = `${E.offsetWidth}px`);
            let ve = "", oe = "";
            N + y.offsetHeight > j - 10 && (ve = "auto", oe = "0"), y.style.left = de, y.style.right = we, y.style.top = ve, y.style.bottom = oe;
          }
        }));
      },
      ctxMenuMouseoutEvent($, O) {
        const { ctxMenuStore: B } = o;
        O.children || (B.selected = null), B.selectChild = null;
      },
      /**
       * 快捷菜单点击事件
       */
      ctxMenuLinkEvent($, O) {
        if (!O.disabled && (O.code || !O.children || !O.children.length)) {
          const B = Xe.menus.get(O.code), E = Object.assign({}, s._currMenuParams, { menu: O, $table: e, $grid: e.xegrid, $event: $ });
          B && B.menuMethod && B.menuMethod(E, $), e.dispatchEvent("menu-click", E, $), b.closeMenu();
        }
      }
    }, Object.assign(Object.assign({}, b), D);
  },
  setupGrid(e) {
    return e.extendTableMethods(Ek);
  }
}, Na = {
  Panel: El,
  install(e) {
    Xe.hooks.add("$tableMenu", wk), e.component(El.name, El);
  }
}, Ok = Na;
Nt.component(El.name, El);
const Sk = ["insert", "insertAt", "insertNextAt", "remove", "removeCheckboxRow", "removeRadioRow", "removeCurrentRow", "getRecordset", "getInsertRecords", "getRemoveRecords", "getUpdateRecords", "getEditRecord", "getActiveRecord", "getSelectedCell", "clearEdit", "clearActived", "clearSelected", "isEditByRow", "isActiveByRow", "setEditRow", "setActiveRow", "setEditCell", "setActiveCell", "setSelectCell"], Tk = {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refElem: s } = e.getRefMaps(), { computeMouseOpts: u, computeEditOpts: c, computeCheckboxOpts: h, computeTreeOpts: i } = e.getComputeMaps();
    let m = {}, p = {};
    const b = (E, T) => {
      const { model: y, editRender: w } = T;
      w && (y.value = Yn(E, T), y.update = !1);
    }, D = (E, T) => {
      const { model: y, editRender: w } = T;
      w && y.update && (Eo(E, T, y.value), y.update = !1, y.value = null);
    }, A = () => {
      const E = s.value;
      if (E) {
        const T = E.querySelector(".col--selected");
        T && Pn(T, "col--selected");
      }
    };
    function $() {
      const { editStore: E, tableColumn: T } = n, y = c.value, { actived: w } = E, { row: P, column: j } = w;
      (P || j) && (y.mode === "row" ? T.forEach((F) => D(P, F)) : D(P, j));
    }
    function O(E, T) {
      const { tableFullTreeData: y, afterFullData: w, fullDataRowIdData: P, fullAllDataRowIdData: j } = o, F = i.value, { rowField: N, parentField: W, mapChildrenField: de } = F, we = F.children || F.childrenField, ve = T ? "push" : "unshift";
      E.forEach((oe) => {
        const ie = oe[W], le = We(e, oe), Q = ie ? l.findTree(y, (L) => ie === L[N], { children: de }) : null;
        if (Q) {
          const { item: L } = Q, I = j[We(e, L)], V = I ? I.level : 0;
          let q = L[we], U = L[de];
          l.isArray(q) || (q = L[we] = []), l.isArray(U) || (U = L[we] = []), q[ve](oe), U[ve](oe);
          const pe = { row: oe, rowid: le, seq: -1, index: -1, _index: -1, $index: -1, items: q, parent: L, level: V + 1 };
          P[le] = pe, j[le] = pe;
        } else {
          process.env.NODE_ENV === "development" && ie && lt("vxe.error.unableInsert"), w[ve](oe), y[ve](oe);
          const L = { row: oe, rowid: le, seq: -1, index: -1, _index: -1, $index: -1, items: y, parent: null, level: 0 };
          P[le] = L, j[le] = L;
        }
      });
    }
    const B = (E, T, y) => {
      const { treeConfig: w } = t, { mergeList: P, editStore: j } = n, { tableFullTreeData: F, afterFullData: N, tableFullData: W, fullDataRowIdData: de, fullAllDataRowIdData: we } = o, ve = i.value, { transform: oe, rowField: ie, mapChildrenField: le } = ve, Q = ve.children || ve.childrenField;
      l.isArray(E) || (E = [E]);
      const L = Gt(e.defineField(E.map((V) => Object.assign(w && oe ? { [le]: [], [Q]: [] } : {}, V))));
      if (l.eqNull(T))
        w && oe ? O(L, !1) : (N.unshift(...L), W.unshift(...L), P.forEach((V) => {
          const { row: q } = V;
          q > 0 && (V.row = q + L.length);
        }));
      else if (T === -1)
        w && oe ? O(L, !0) : (N.push(...L), W.push(...L), P.forEach((V) => {
          const { row: q, rowspan: U } = V;
          q + U > N.length && (V.rowspan = U + L.length);
        }));
      else if (w && oe) {
        const V = l.findTree(F, (q) => T[ie] === q[ie], { children: le });
        if (V) {
          const { parent: q } = V, U = q ? q[le] : F, pe = we[We(e, q)], ke = pe ? pe.level : 0;
          if (L.forEach((Ee, Le) => {
            const Ae = We(e, Ee);
            process.env.NODE_ENV === "development" && Ee[ve.parentField] && q && Ee[ve.parentField] !== q[ie] && ot("vxe.error.errProp", [`${ve.parentField}=${Ee[ve.parentField]}`, `${ve.parentField}=${q[ie]}`]), q && (Ee[ve.parentField] = q[ie]);
            let ce = V.index + Le;
            y && (ce = ce + 1), U.splice(ce, 0, Ee);
            const k = { row: Ee, rowid: Ae, seq: -1, index: -1, _index: -1, $index: -1, items: U, parent: q, level: ke + 1 };
            de[Ae] = k, we[Ae] = k;
          }), q) {
            const Ee = l.findTree(F, (Le) => T[ie] === Le[ie], { children: Q });
            if (Ee) {
              const Le = Ee.items;
              let Ae = Ee.index;
              y && (Ae = Ae + 1), Le.splice(Ae, 0, ...L);
            }
          }
        } else
          process.env.NODE_ENV === "development" && lt("vxe.error.unableInsert"), O(L, !0);
      } else {
        if (w)
          throw new Error(pa("vxe.error.noTree", ["insert"]));
        let V = -1;
        if (l.isNumber(T) ? T < N.length && (V = T) : V = e.findRowIndexOf(N, T), y && (V = Math.min(N.length, V + 1)), V === -1)
          throw new Error(ot("vxe.error.unableInsert"));
        N.splice(V, 0, ...L), W.splice(e.findRowIndexOf(W, T), 0, ...L), P.forEach((q) => {
          const { row: U, rowspan: pe } = q;
          U > V ? q.row = U + L.length : U + pe > V && (q.rowspan = pe + L.length);
        });
      }
      const { insertMaps: I } = j;
      return L.forEach((V) => {
        const q = We(e, V);
        I[q] = V;
      }), e.cacheRowMap(), e.updateScrollYStatus(), e.handleTableData(w && oe), w && oe || e.updateAfterDataIndex(), e.updateFooter(), e.checkSelectionStatus(), n.scrollYLoad && e.updateScrollYSpace(), ne().then(() => (e.updateCellAreas(), e.recalculate())).then(() => ({
        row: L.length ? L[L.length - 1] : null,
        rows: L
      }));
    };
    return m = {
      /**
       * 往表格中插入临时数据
       *
       * @param {*} records
       */
      insert(E) {
        return B(E, null);
      },
      /**
       * 往表格指定行中插入临时数据
       * 如果 row 为空则从插入到顶部，如果为树结构，则插入到目标节点顶部
       * 如果 row 为 -1 则从插入到底部，如果为树结构，则插入到目标节点底部
       * 如果 row 为有效行则插入到该行的位置，如果为树结构，则有插入到效的目标节点该行的位置
       * @param {Object/Array} records 新的数据
       * @param {Row} row 指定行
       */
      insertAt(E, T) {
        return B(E, T);
      },
      insertNextAt(E, T) {
        return B(E, T, !0);
      },
      /**
       * 删除指定行数据
       * 如果传 row 则删除一行
       * 如果传 rows 则删除多行
       * 如果为空则删除所有
       */
      remove(E) {
        const { treeConfig: T } = t, { mergeList: y, editStore: w, selectCheckboxMaps: P } = n, { tableFullTreeData: j, afterFullData: F, tableFullData: N } = o, W = h.value, de = i.value, { transform: we, mapChildrenField: ve } = de, oe = de.children || de.childrenField, { actived: ie, removeMaps: le, insertMaps: Q } = w, { checkField: L } = W;
        let I = [];
        if (E ? l.isArray(E) || (E = [E]) : E = N, E.forEach((V) => {
          if (!e.isInsertByRow(V)) {
            const q = We(e, V);
            le[q] = V;
          }
        }), !L) {
          const V = Object.assign({}, P);
          E.forEach((q) => {
            const U = We(e, q);
            V[U] && delete V[U];
          }), n.selectCheckboxMaps = V;
        }
        return N === E ? (E = I = N.slice(0), o.tableFullData = [], o.afterFullData = [], e.clearMergeCells()) : T && we ? E.forEach((V) => {
          const q = We(e, V), U = l.findTree(j, (Ee) => q === We(e, Ee), { children: ve });
          if (U) {
            const Ee = U.items.splice(U.index, 1);
            I.push(Ee[0]);
          }
          const pe = l.findTree(j, (Ee) => q === We(e, Ee), { children: oe });
          pe && pe.items.splice(pe.index, 1);
          const ke = e.findRowIndexOf(F, V);
          ke > -1 && F.splice(ke, 1);
        }) : E.forEach((V) => {
          const q = e.findRowIndexOf(N, V);
          if (q > -1) {
            const pe = N.splice(q, 1);
            I.push(pe[0]);
          }
          const U = e.findRowIndexOf(F, V);
          U > -1 && (y.forEach((pe) => {
            const { row: ke, rowspan: Ee } = pe;
            ke > U ? pe.row = ke - 1 : ke + Ee > U && (pe.rowspan = Ee - 1);
          }), F.splice(U, 1));
        }), ie.row && e.findRowIndexOf(E, ie.row) > -1 && m.clearEdit(), E.forEach((V) => {
          const q = We(e, V);
          Q[q] && delete Q[q];
        }), e.updateFooter(), e.cacheRowMap(), e.handleTableData(T && we), T && we || e.updateAfterDataIndex(), e.checkSelectionStatus(), n.scrollYLoad && e.updateScrollYSpace(), ne().then(() => (e.updateCellAreas(), e.recalculate())).then(() => ({ row: I.length ? I[I.length - 1] : null, rows: I }));
      },
      /**
       * 删除复选框选中的数据
       */
      removeCheckboxRow() {
        return m.remove(e.getCheckboxRecords()).then((E) => (e.clearCheckboxRow(), E));
      },
      /**
       * 删除单选框选中的数据
       */
      removeRadioRow() {
        const E = e.getRadioRecord();
        return m.remove(E || []).then((T) => (e.clearRadioRow(), T));
      },
      /**
       * 删除当前行选中的数据
       */
      removeCurrentRow() {
        const E = e.getCurrentRecord();
        return m.remove(E || []).then((T) => (e.clearCurrentRow(), T));
      },
      /**
       * 获取表格数据集，包含新增、删除、修改、标记
       */
      getRecordset() {
        return {
          insertRecords: m.getInsertRecords(),
          removeRecords: m.getRemoveRecords(),
          updateRecords: m.getUpdateRecords(),
          pendingRecords: e.getPendingRecords()
        };
      },
      /**
       * 获取新增的临时数据
       */
      getInsertRecords() {
        const { editStore: E } = n, { fullAllDataRowIdData: T } = o, { insertMaps: y } = E, w = [];
        return l.each(y, (P, j) => {
          T[j] && w.push(P);
        }), w;
      },
      /**
       * 获取已删除的数据
       */
      getRemoveRecords() {
        const { editStore: E } = n, { removeMaps: T } = E, y = [];
        return l.each(T, (w) => {
          y.push(w);
        }), y;
      },
      /**
       * 获取更新数据
       * 只精准匹配 row 的更改
       * 如果是树表格，子节点更改状态不会影响父节点的更新状态
       */
      getUpdateRecords() {
        const { keepSource: E, treeConfig: T } = t, { tableFullData: y } = o, w = i.value;
        return E ? ($(), T ? l.filterTree(y, (P) => e.isUpdateByRow(P), w) : y.filter((P) => e.isUpdateByRow(P))) : [];
      },
      getActiveRecord() {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["getActiveRecord", "getEditRecord"]), this.getEditRecord();
      },
      getEditRecord() {
        const { editStore: E } = n, { afterFullData: T } = o, y = s.value, { args: w, row: P } = E.actived;
        return w && e.findRowIndexOf(T, P) > -1 && y.querySelectorAll(".vxe-body--column.col--active").length ? Object.assign({}, w) : null;
      },
      /**
       * 获取选中的单元格
       */
      getSelectedCell() {
        const { editStore: E } = n, { args: T, column: y } = E.selected;
        return T && y ? Object.assign({}, T) : null;
      },
      clearActived(E) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["clearActived", "clearEdit"]), this.clearEdit(E);
      },
      /**
       * 清除激活的编辑
       */
      clearEdit(E) {
        const { editStore: T } = n, { actived: y, focused: w } = T, { row: P, column: j } = y;
        return (P || j) && ($(), y.args = null, y.row = null, y.column = null, e.updateFooter(), e.dispatchEvent("edit-closed", {
          row: P,
          rowIndex: e.getRowIndex(P),
          $rowIndex: e.getVMRowIndex(P),
          column: j,
          columnIndex: e.getColumnIndex(j),
          $columnIndex: e.getVMColumnIndex(j)
        }, E || null)), v.cellVaildMode === "obsolete" && e.clearValidate ? e.clearValidate() : (w.row = null, w.column = null, ne());
      },
      /**
       * 清除所选中源状态
       */
      clearSelected() {
        const { editStore: E } = n, { selected: T } = E;
        return T.row = null, T.column = null, A(), ne();
      },
      isActiveByRow(E) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["isActiveByRow", "isEditByRow"]), this.isEditByRow(E);
      },
      /**
       * 判断行是否为激活编辑状态
       * @param {Row} row 行对象
       */
      isEditByRow(E) {
        const { editStore: T } = n;
        return T.actived.row === E;
      },
      setActiveRow(E) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["setActiveRow", "setEditRow"]), m.setEditRow(E);
      },
      /**
       * 激活行编辑
       */
      setEditRow(E, T) {
        const { visibleColumn: y } = o;
        let w = l.find(y, (P) => mt(P.editRender));
        return T && (w = l.isString(T) ? e.getColumnByField(T) : T), e.setEditCell(E, w);
      },
      setActiveCell(E, T) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["setActiveCell", "setEditCell"]), m.setEditCell(E, T);
      },
      /**
       * 激活单元格编辑
       */
      setEditCell(E, T) {
        const { editConfig: y } = t, w = l.isString(T) ? e.getColumnByField(T) : T;
        return E && w && mt(y) && mt(w.editRender) ? e.scrollToRow(E, w).then(() => {
          const P = e.getCell(E, w);
          return P && (p.handleActived({
            row: E,
            rowIndex: e.getRowIndex(E),
            column: w,
            columnIndex: e.getColumnIndex(w),
            cell: P,
            $table: e
          }), o._lastCallTime = Date.now()), ne();
        }) : ne();
      },
      /**
       * 只对 trigger=dblclick 有效，选中单元格
       */
      setSelectCell(E, T) {
        const { tableData: y } = n, w = c.value, P = l.isString(T) ? e.getColumnByField(T) : T;
        if (E && P && w.trigger !== "manual") {
          const j = e.findRowIndexOf(y, E);
          if (j > -1 && P) {
            const F = e.getCell(E, P), N = {
              row: E,
              rowIndex: j,
              column: P,
              columnIndex: e.getColumnIndex(P),
              cell: F
            };
            e.handleSelected(N, {});
          }
        }
        return ne();
      }
    }, p = {
      /**
       * 处理激活编辑
       */
      handleActived(E, T) {
        const { editConfig: y, mouseConfig: w } = t, { editStore: P, tableColumn: j } = n, F = c.value, { mode: N } = F, { actived: W, focused: de } = P, { row: we, column: ve } = E, { editRender: oe } = ve, ie = E.cell || e.getCell(we, ve), le = F.beforeEditMethod || F.activeMethod;
        if (E.cell = ie, ie && mt(y) && mt(oe) && !e.hasPendingByRow(we)) {
          if (W.row !== we || N === "cell" && W.column !== ve) {
            let Q = "edit-disabled";
            if (!le || le(Object.assign(Object.assign({}, E), { $table: e, $grid: e.xegrid }))) {
              w && (m.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())), e.closeTooltip(), W.column && m.clearEdit(T), Q = "edit-activated", ve.renderHeight = ie.offsetHeight, W.args = E, W.row = we, W.column = ve, N === "row" ? j.forEach((I) => b(we, I)) : b(we, ve);
              const L = F.afterEditMethod;
              ne(() => {
                p.handleFocus(E, T), L && L(Object.assign(Object.assign({}, E), { $table: e, $grid: e.xegrid }));
              });
            }
            e.dispatchEvent(Q, {
              row: we,
              rowIndex: e.getRowIndex(we),
              $rowIndex: e.getVMRowIndex(we),
              column: ve,
              columnIndex: e.getColumnIndex(ve),
              $columnIndex: e.getVMColumnIndex(ve)
            }, T), Q === "edit-activated" && e.dispatchEvent("edit-actived", {
              row: we,
              rowIndex: e.getRowIndex(we),
              $rowIndex: e.getVMRowIndex(we),
              column: ve,
              columnIndex: e.getColumnIndex(ve),
              $columnIndex: e.getVMColumnIndex(ve)
            }, T);
          } else {
            const { column: Q } = W;
            if (w && (m.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())), Q !== ve) {
              const { model: L } = Q;
              L.update && Eo(we, Q, L.value), e.clearValidate && e.clearValidate(we, ve);
            }
            ve.renderHeight = ie.offsetHeight, W.args = E, W.column = ve, setTimeout(() => {
              p.handleFocus(E, T);
            });
          }
          de.column = null, de.row = null, e.focus();
        }
        return ne();
      },
      /**
       * 处理聚焦
       */
      handleFocus(E) {
        const { row: T, column: y, cell: w } = E, { editRender: P } = y;
        if (mt(P)) {
          const j = dr.get(P.name);
          let { autofocus: F, autoselect: N } = P, W;
          if (!F && j && (F = j.autofocus), !N && j && (N = j.autoselect), l.isFunction(F) ? W = F.call(this, E) : F && (W = w.querySelector(F), W && W.focus()), W) {
            if (N)
              W.select();
            else if (Ln.msie) {
              const de = W.createTextRange();
              de.collapse(!1), de.select();
            }
          } else
            e.scrollToRow(T, y);
        }
      },
      /**
       * 处理选中源
       */
      handleSelected(E, T) {
        const { mouseConfig: y } = t, { editStore: w } = n, P = u.value, j = c.value, { actived: F, selected: N } = w, { row: W, column: de } = E, we = y && P.selected;
        return we && (N.row !== W || N.column !== de) && (F.row !== W || j.mode === "cell" && F.column !== de) && (m.clearEdit(T), m.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea()), N.args = E, N.row = W, N.column = de, we && p.addCellSelectedClass(), e.focus(), T && e.dispatchEvent("cell-selected", E, T)), ne();
      },
      addCellSelectedClass() {
        const { editStore: E } = n, { selected: T } = E, { row: y, column: w } = T;
        if (A(), y && w) {
          const P = e.getCell(y, w);
          P && wo(P, "col--selected");
        }
      }
    }, Object.assign(Object.assign({}, m), p);
  },
  setupGrid(e) {
    return e.extendTableMethods(Sk);
  }
}, Ia = {
  install() {
    Xe.hooks.add("$tableEdit", Tk);
  }
}, Rk = Ia;
function tn(e) {
  const t = gt("xesize", null), n = Ce(() => e.size || (t ? t.value : null));
  return Yt("xesize", n), n;
}
const En = Mt({
  name: "VxeButton",
  props: {
    /**
     * 按钮类型
     */
    type: String,
    mode: String,
    className: [String, Function],
    popupClassName: [String, Function],
    /**
     * 按钮尺寸
     */
    size: { type: String, default: () => v.button.size || v.size },
    /**
     * 用来标识这一项
     */
    name: [String, Number],
    /**
     * 按钮内容
     */
    content: String,
    /**
     * 固定显示下拉面板的方向
     */
    placement: String,
    /**
     * 按钮状态
     */
    status: String,
    /**
     * 标题
     */
    title: String,
    /**
     * 按钮的图标
     */
    icon: String,
    /**
     * 圆角边框
     */
    round: Boolean,
    /**
     * 圆角按钮
     */
    circle: Boolean,
    /**
     * 是否禁用
     */
    disabled: Boolean,
    /**
     * 是否加载中
     */
    loading: Boolean,
    /**
     * 在下拉面板关闭时销毁内容
     */
    destroyOnClose: Boolean,
    /**
     * 是否将弹框容器插入于 body 内
     */
    transfer: { type: Boolean, default: () => v.button.transfer }
  },
  emits: [
    "click",
    "mouseenter",
    "mouseleave",
    "dropdown-click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      inited: !1,
      showPanel: !1,
      animatVisible: !1,
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: ""
    }), h = {
      showTime: null
    }, i = Ue(), m = Ue(), p = Ue(), b = {
      refElem: i
    }, D = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      internalData: h,
      getRefMaps: () => b
    }, A = gt("$xebuttongroup", null);
    let $ = {};
    const O = Ce(() => {
      const { type: I } = e;
      return I ? ["submit", "reset", "button"].indexOf(I) > -1 : !1;
    }), B = Ce(() => {
      const { type: I, mode: V } = e;
      return V === "text" || I === "text" || A && A.props.mode === "text" ? "text" : "button";
    }), E = Ce(() => {
      const { status: I } = e;
      return I || (A ? A.props.status : "");
    }), T = Ce(() => {
      const { round: I } = e;
      return I || (A ? A.props.round : !1);
    }), y = Ce(() => {
      const { circle: I } = e;
      return I || (A ? A.props.circle : !1);
    }), w = () => {
      c.panelIndex < ko() && (c.panelIndex = ho());
    }, P = () => ne().then(() => {
      const { transfer: I, placement: V } = e, { panelIndex: q } = c, U = m.value, pe = p.value;
      if (pe && U) {
        const ke = U.offsetHeight, Ee = U.offsetWidth, Le = pe.offsetHeight, Ae = pe.offsetWidth, ce = 5, k = {
          zIndex: q
        }, { top: Z, left: re, boundingTop: fe, visibleHeight: De, visibleWidth: te } = uo(U);
        let ee = "bottom";
        if (I) {
          let se = re + Ee - Ae, he = Z + ke;
          V === "top" ? (ee = "top", he = Z - Le) : V || (fe + ke + Le + ce > De && (ee = "top", he = Z - Le), he < ce && (ee = "bottom", he = Z + ke)), se + Ae + ce > te && (se -= se + Ae + ce - te), se < ce && (se = ce), Object.assign(k, {
            left: `${se}px`,
            right: "auto",
            top: `${he}px`,
            minWidth: `${Ee}px`
          });
        } else
          V === "top" ? (ee = "top", k.bottom = `${ke}px`) : V || fe + ke + Le > De && fe - ke - Le > ce && (ee = "top", k.bottom = `${ke}px`);
        return c.panelStyle = k, c.panelPlacement = ee, ne();
      }
    }), j = (I) => {
      A ? A.handleClick({ name: e.name }, I) : $.dispatchEvent("click", { $event: I }, I);
    }, F = (I) => {
      I.button === 0 && I.stopPropagation();
    }, N = (I) => {
      const V = I.currentTarget, q = p.value, { flag: U, targetElem: pe } = yt(I, V, "vxe-button");
      U && (q && (q.dataset.active = "N"), c.showPanel = !1, setTimeout(() => {
        (!q || q.dataset.active !== "Y") && (c.animatVisible = !1);
      }, 350), $.dispatchEvent("dropdown-click", { name: pe.getAttribute("name"), $event: I }, I));
    }, W = () => {
      const I = p.value;
      I && (I.dataset.active = "Y", c.animatVisible = !0, setTimeout(() => {
        I.dataset.active === "Y" && (c.showPanel = !0, w(), P(), setTimeout(() => {
          c.showPanel && P();
        }, 50));
      }, 20));
    }, de = (I) => {
      const V = p.value;
      V && (V.dataset.active = "Y", c.inited || (c.inited = !0), h.showTime = setTimeout(() => {
        V.dataset.active === "Y" ? W() : c.animatVisible = !1;
      }, 250)), ve(I);
    }, we = (I) => {
      ie(), oe(I);
    }, ve = (I) => {
      o("mouseenter", { $event: I });
    }, oe = (I) => {
      o("mouseleave", { $event: I });
    }, ie = () => {
      const I = p.value;
      clearTimeout(h.showTime), I ? (I.dataset.active = "N", setTimeout(() => {
        I.dataset.active !== "Y" && (c.showPanel = !1, setTimeout(() => {
          I.dataset.active !== "Y" && (c.animatVisible = !1);
        }, 350));
      }, 100)) : (c.animatVisible = !1, c.showPanel = !1);
    }, le = () => {
      ie();
    }, Q = () => {
      const { content: I, icon: V, loading: q } = e, U = [];
      return q ? U.push(d("i", {
        class: ["vxe-button--loading-icon", v.icon.BUTTON_LOADING]
      })) : n.icon ? U.push(d("span", {
        class: "vxe-button--custom-icon"
      }, n.icon({}))) : V && U.push(d("i", {
        class: ["vxe-button--icon", V]
      })), n.default ? U.push(d("span", {
        class: "vxe-button--content"
      }, n.default({}))) : I && U.push(d("span", {
        class: "vxe-button--content"
      }, qt(I))), U;
    };
    $ = {
      dispatchEvent(I, V, q) {
        o(I, Object.assign({ $button: D, $event: q }, V));
      },
      focus() {
        return m.value.focus(), ne();
      },
      blur() {
        return m.value.blur(), ne();
      }
    }, Object.assign(D, $), gn(() => {
      bt.on(D, "mousewheel", (I) => {
        const V = p.value;
        c.showPanel && !yt(I, V).flag && ie();
      });
    }), fn(() => {
      bt.off(D, "mousewheel");
    });
    const L = () => {
      const { className: I, popupClassName: V, transfer: q, title: U, type: pe, destroyOnClose: ke, name: Ee, disabled: Le, loading: Ae } = e, { inited: ce, showPanel: k } = c, Z = O.value, re = B.value, fe = E.value, De = T.value, te = y.value, ee = u.value;
      return n.dropdowns ? d("div", {
        ref: i,
        class: ["vxe-button--dropdown", I ? l.isFunction(I) ? I({ $button: D }) : I : "", {
          [`size--${ee}`]: ee,
          "is--active": k
        }]
      }, [
        d("button", {
          ref: m,
          class: ["vxe-button", `type--${re}`, {
            [`size--${ee}`]: ee,
            [`theme--${fe}`]: fe,
            "is--round": De,
            "is--circle": te,
            "is--disabled": Le || Ae,
            "is--loading": Ae
          }],
          title: U,
          name: Ee,
          type: Z ? pe : "button",
          disabled: Le || Ae,
          onMouseenter: de,
          onMouseleave: we,
          onClick: j
        }, Q().concat([
          d("i", {
            class: `vxe-button--dropdown-arrow ${v.icon.BUTTON_DROPDOWN}`
          })
        ])),
        d(Yr, {
          to: "body",
          disabled: q ? !ce : !0
        }, [
          d("div", {
            ref: p,
            class: ["vxe-button--dropdown-panel", V ? l.isFunction(V) ? V({ $button: D }) : V : "", {
              [`size--${ee}`]: ee,
              "animat--leave": c.animatVisible,
              "animat--enter": k
            }],
            placement: c.panelPlacement,
            style: c.panelStyle
          }, ce ? [
            d("div", {
              class: "vxe-button--dropdown-wrapper",
              onMousedown: F,
              onClick: N,
              onMouseenter: W,
              onMouseleave: le
            }, ke && !k ? [] : n.dropdowns({}))
          ] : [])
        ])
      ]) : d("button", {
        ref: m,
        class: ["vxe-button", `type--${re}`, I ? l.isFunction(I) ? I({ $button: D }) : I : "", {
          [`size--${ee}`]: ee,
          [`theme--${fe}`]: fe,
          "is--round": De,
          "is--circle": te,
          "is--disabled": Le || Ae,
          "is--loading": Ae
        }],
        title: U,
        name: Ee,
        type: Z ? pe : "button",
        disabled: Le || Ae,
        onClick: j,
        onMouseenter: ve,
        onMouseleave: oe
      }, Q());
    };
    return D.renderVN = L, D;
  },
  render() {
    return this.renderVN();
  }
}), Li = Mt({
  name: "VxeLoading",
  props: {
    modelValue: Boolean,
    icon: String,
    text: String
  },
  setup(e, { slots: t }) {
    const n = Ce(() => e.icon || v.icon.LOADING), o = Ce(() => {
      const s = v.loadingText;
      return e.text || (s === null ? s : v.i18n("vxe.loading.text"));
    });
    return () => {
      const s = n.value, u = o.value;
      return d("div", {
        class: ["vxe-loading", {
          "is--visible": e.modelValue
        }]
      }, t.default ? [
        d("div", {
          class: "vxe-loading--wrapper"
        }, t.default({}))
      ] : [
        d("div", {
          class: "vxe-loading--chunk"
        }, [
          s ? d("i", {
            class: s
          }) : d("div", {
            class: "vxe-loading--spinner"
          }),
          u ? d("div", {
            class: "vxe-loading--text"
          }, `${u}`) : null
        ])
      ]);
    };
  }
}), qs = Object.assign(Li, {
  install(e) {
    e.component(Li.name, Li);
  }
}), fr = [], gl = [], Go = Mt({
  name: "VxeModal",
  props: {
    modelValue: Boolean,
    id: String,
    type: { type: String, default: "modal" },
    loading: { type: Boolean, default: null },
    status: String,
    iconStatus: String,
    className: String,
    top: { type: [Number, String], default: () => v.modal.top },
    position: [String, Object],
    title: String,
    duration: { type: [Number, String], default: () => v.modal.duration },
    message: [Number, String],
    content: [Number, String],
    cancelButtonText: { type: String, default: () => v.modal.cancelButtonText },
    confirmButtonText: { type: String, default: () => v.modal.confirmButtonText },
    lockView: { type: Boolean, default: () => v.modal.lockView },
    lockScroll: Boolean,
    mask: { type: Boolean, default: () => v.modal.mask },
    maskClosable: { type: Boolean, default: () => v.modal.maskClosable },
    escClosable: { type: Boolean, default: () => v.modal.escClosable },
    resize: Boolean,
    showHeader: { type: Boolean, default: () => v.modal.showHeader },
    showFooter: { type: Boolean, default: () => v.modal.showFooter },
    showZoom: Boolean,
    showClose: { type: Boolean, default: () => v.modal.showClose },
    dblclickZoom: { type: Boolean, default: () => v.modal.dblclickZoom },
    width: [Number, String],
    height: [Number, String],
    minWidth: { type: [Number, String], default: () => v.modal.minWidth },
    minHeight: { type: [Number, String], default: () => v.modal.minHeight },
    zIndex: Number,
    marginSize: { type: [Number, String], default: () => v.modal.marginSize },
    fullscreen: Boolean,
    draggable: { type: Boolean, default: () => v.modal.draggable },
    remember: { type: Boolean, default: () => v.modal.remember },
    destroyOnClose: { type: Boolean, default: () => v.modal.destroyOnClose },
    showTitleOverflow: { type: Boolean, default: () => v.modal.showTitleOverflow },
    transfer: { type: Boolean, default: () => v.modal.transfer },
    storage: { type: Boolean, default: () => v.modal.storage },
    storageKey: { type: String, default: () => v.modal.storageKey },
    animat: { type: Boolean, default: () => v.modal.animat },
    size: { type: String, default: () => v.modal.size || v.size },
    beforeHideMethod: { type: Function, default: () => v.modal.beforeHideMethod },
    slots: Object
  },
  emits: [
    "update:modelValue",
    "show",
    "hide",
    "before-hide",
    "close",
    "confirm",
    "cancel",
    "zoom"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      inited: !1,
      visible: !1,
      contentVisible: !1,
      modalTop: 0,
      modalZindex: 0,
      zoomLocat: null,
      firstOpen: !0
    }), h = Ue(), i = Ue(), m = Ue(), p = Ue(), b = {
      refElem: h
    }, D = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => b
    };
    let A = {};
    const $ = Ce(() => e.type === "message"), O = () => i.value, B = () => {
      const { width: te, height: ee } = e, se = O();
      return se.style.width = `${te ? isNaN(te) ? te : `${te}px` : ""}`, se.style.height = `${ee ? isNaN(ee) ? ee : `${ee}px` : ""}`, ne();
    }, E = () => {
      const { zIndex: te } = e, { modalZindex: ee } = c;
      te ? c.modalZindex = te : ee < ko() && (c.modalZindex = ho());
    }, T = () => ne().then(() => {
      const { position: te } = e, ee = l.toNumber(e.marginSize), se = O(), he = document.documentElement.clientWidth || document.body.clientWidth, xe = document.documentElement.clientHeight || document.body.clientHeight, me = te === "center", { top: Ve, left: Ge } = l.isString(te) ? { top: te, left: te } : Object.assign({}, te), Ye = me || Ve === "center", je = me || Ge === "center";
      let Ie = "", Ne = "";
      Ge && !je ? Ne = isNaN(Ge) ? Ge : `${Ge}px` : Ne = `${Math.max(ee, he / 2 - se.offsetWidth / 2)}px`, Ve && !Ye ? Ie = isNaN(Ve) ? Ve : `${Ve}px` : Ie = `${Math.max(ee, xe / 2 - se.offsetHeight / 2)}px`, se.style.top = Ie, se.style.left = Ne;
    }), y = () => {
      ne(() => {
        let te = 0;
        gl.forEach((ee) => {
          const se = ee.getBox();
          te += l.toNumber(ee.props.top), ee.reactData.modalTop = te, te += se.clientHeight;
        });
      });
    }, w = () => {
      gl.indexOf(D) > -1 && l.remove(gl, (te) => te === D), y();
    }, P = (te) => {
      const { remember: ee, beforeHideMethod: se } = e, { visible: he } = c, xe = $.value, me = { type: te };
      return he && Promise.resolve(se ? se(me) : null).then((Ve) => {
        l.isError(Ve) || (xe && w(), c.contentVisible = !1, ee || (c.zoomLocat = null), l.remove(fr, (Ge) => Ge === D), A.dispatchEvent("before-hide", me), setTimeout(() => {
          c.visible = !1, o("update:modelValue", !1), A.dispatchEvent("hide", me);
        }, 200));
      }).catch((Ve) => Ve), ne();
    }, j = (te) => {
      const ee = "close";
      A.dispatchEvent(ee, { type: ee }, te), P(ee);
    }, F = (te) => {
      const ee = "confirm";
      A.dispatchEvent(ee, { type: ee }, te), P(ee);
    }, N = (te) => {
      const ee = "cancel";
      A.dispatchEvent(ee, { type: ee }, te), P(ee);
    }, W = (te) => {
      const ee = v.version, se = l.toStringJSON(localStorage.getItem(te) || "");
      return se && se._v === ee ? se : { _v: ee };
    }, de = () => {
      const { id: te, remember: ee, storage: se, storageKey: he } = e;
      return !!(te && ee && se && W(he)[te]);
    }, we = () => {
      const { id: te, remember: ee, storage: se, storageKey: he } = e;
      if (te && ee && se) {
        const xe = W(he)[te];
        if (xe) {
          const me = O(), [Ve, Ge, Ye, je, Ie, Ne, Y, ae] = xe.split(",");
          Ve && (me.style.left = `${Ve}px`), Ge && (me.style.top = `${Ge}px`), Ye && (me.style.width = `${Ye}px`), je && (me.style.height = `${je}px`), Ie && Ne && (c.zoomLocat = {
            left: Ie,
            top: Ne,
            width: Y,
            height: ae
          });
        }
      }
    }, ve = () => {
      gl.indexOf(D) === -1 && gl.push(D), y();
    }, oe = () => {
      const { id: te, remember: ee, storage: se, storageKey: he } = e, { zoomLocat: xe } = c;
      if (te && ee && se) {
        const me = O(), Ve = W(he);
        Ve[te] = [
          me.style.left,
          me.style.top,
          me.style.width,
          me.style.height
        ].concat(xe ? [
          xe.left,
          xe.top,
          xe.width,
          xe.height
        ] : []).map((Ge) => Ge ? l.toNumber(Ge) : "").join(","), localStorage.setItem(he, l.toJSONString(Ve));
      }
    }, ie = () => ne().then(() => {
      if (!c.zoomLocat) {
        const te = Math.max(0, l.toNumber(e.marginSize)), ee = O(), { visibleHeight: se, visibleWidth: he } = qo();
        c.zoomLocat = {
          top: ee.offsetTop,
          left: ee.offsetLeft,
          width: ee.offsetWidth + (ee.style.width ? 0 : 1),
          height: ee.offsetHeight + (ee.style.height ? 0 : 1)
        }, Object.assign(ee.style, {
          top: `${te}px`,
          left: `${te}px`,
          width: `${he - te * 2}px`,
          height: `${se - te * 2}px`
        }), oe();
      }
    }), le = () => {
      const { duration: te, remember: ee, showFooter: se } = e, { inited: he, visible: xe } = c, me = $.value;
      return he || (c.inited = !0), xe || (ee || B(), c.visible = !0, c.contentVisible = !1, E(), fr.push(D), setTimeout(() => {
        c.contentVisible = !0, ne(() => {
          if (se) {
            const Ye = m.value, je = p.value, Ie = Ye || je;
            Ie && Ie.focus();
          }
          const Ge = { type: "" };
          o("update:modelValue", !0), A.dispatchEvent("show", Ge);
        });
      }, 10), me ? (ve(), te !== -1 && setTimeout(() => P("close"), l.toNumber(te))) : ne(() => {
        const { fullscreen: Ve } = e, { firstOpen: Ge } = c;
        (!ee || Ge) && T().then(() => {
          setTimeout(() => T(), 20);
        }), Ge ? (c.firstOpen = !1, de() ? we() : Ve && ne(() => ie())) : Ve && ne(() => ie());
      })), ne();
    }, Q = (te) => {
      const ee = h.value;
      e.maskClosable && te.target === ee && P("mask");
    }, L = (te) => {
      if (vt(te, pt.ESCAPE)) {
        const se = l.max(fr, (he) => he.reactData.modalZindex);
        se && setTimeout(() => {
          se === D && se.props.escClosable && P("exit");
        }, 10);
      }
    }, I = () => !!c.zoomLocat, V = () => ne().then(() => {
      const { zoomLocat: te } = c;
      if (te) {
        const ee = O();
        c.zoomLocat = null, Object.assign(ee.style, {
          top: `${te.top}px`,
          left: `${te.left}px`,
          width: `${te.width}px`,
          height: `${te.height}px`
        }), oe();
      }
    }), q = () => c.zoomLocat ? V().then(() => I()) : ie().then(() => I()), U = (te) => {
      const { zoomLocat: ee } = c, se = { type: ee ? "revert" : "max" };
      return q().then(() => {
        A.dispatchEvent("zoom", se, te);
      });
    }, pe = () => {
      if (!$.value) {
        const ee = O();
        if (ee)
          return {
            top: ee.offsetTop,
            left: ee.offsetLeft
          };
      }
      return null;
    }, ke = (te, ee) => {
      if (!$.value) {
        const he = O();
        l.isNumber(te) && (he.style.top = `${te}px`), l.isNumber(ee) && (he.style.left = `${ee}px`);
      }
      return ne();
    }, Ee = () => {
      const { modalZindex: te } = c;
      fr.some((ee) => ee.reactData.visible && ee.reactData.modalZindex > te) && E();
    }, Le = (te) => {
      const { remember: ee, storage: se } = e, { zoomLocat: he } = c, xe = l.toNumber(e.marginSize), me = O();
      if (!he && te.button === 0 && !yt(te, me, "trigger--btn").flag) {
        te.preventDefault();
        const Ve = document.onmousemove, Ge = document.onmouseup, Ye = te.clientX - me.offsetLeft, je = te.clientY - me.offsetTop, { visibleHeight: Ie, visibleWidth: Ne } = qo();
        document.onmousemove = (Y) => {
          Y.preventDefault();
          const ae = me.offsetWidth, Re = me.offsetHeight, Se = xe, _ = Ne - ae - xe - 1, G = xe, be = Ie - Re - xe - 1;
          let _e = Y.clientX - Ye, Be = Y.clientY - je;
          _e > _ && (_e = _), _e < Se && (_e = Se), Be > be && (Be = be), Be < G && (Be = G), me.style.left = `${_e}px`, me.style.top = `${Be}px`, me.className = me.className.replace(/\s?is--drag/, "") + " is--drag";
        }, document.onmouseup = () => {
          document.onmousemove = Ve, document.onmouseup = Ge, ee && se && ne(() => {
            oe();
          }), setTimeout(() => {
            me.className = me.className.replace(/\s?is--drag/, "");
          }, 50);
        };
      }
    }, Ae = (te) => {
      te.preventDefault();
      const { remember: ee, storage: se } = e, { visibleHeight: he, visibleWidth: xe } = qo(), me = l.toNumber(e.marginSize), Ge = te.target.getAttribute("type"), Ye = l.toNumber(e.minWidth), je = l.toNumber(e.minHeight), Ie = xe, Ne = he, Y = O(), ae = document.onmousemove, Re = document.onmouseup, Se = Y.clientWidth, _ = Y.clientHeight, G = te.clientX, be = te.clientY, _e = Y.offsetTop, Be = Y.offsetLeft, qe = { type: "resize" };
      document.onmousemove = (et) => {
        et.preventDefault();
        let Qe, tt, Ze, st;
        switch (Ge) {
          case "wl":
            Qe = G - et.clientX, Ze = Qe + Se, Be - Qe > me && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`, Y.style.left = `${Be - Qe}px`);
            break;
          case "swst":
            Qe = G - et.clientX, tt = be - et.clientY, Ze = Qe + Se, st = tt + _, Be - Qe > me && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`, Y.style.left = `${Be - Qe}px`), _e - tt > me && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`, Y.style.top = `${_e - tt}px`);
            break;
          case "swlb":
            Qe = G - et.clientX, tt = et.clientY - be, Ze = Qe + Se, st = tt + _, Be - Qe > me && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`, Y.style.left = `${Be - Qe}px`), _e + st + me < he && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`);
            break;
          case "st":
            tt = be - et.clientY, st = _ + tt, _e - tt > me && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`, Y.style.top = `${_e - tt}px`);
            break;
          case "wr":
            Qe = et.clientX - G, Ze = Qe + Se, Be + Ze + me < xe && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`);
            break;
          case "sest":
            Qe = et.clientX - G, tt = be - et.clientY, Ze = Qe + Se, st = tt + _, Be + Ze + me < xe && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`), _e - tt > me && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`, Y.style.top = `${_e - tt}px`);
            break;
          case "selb":
            Qe = et.clientX - G, tt = et.clientY - be, Ze = Qe + Se, st = tt + _, Be + Ze + me < xe && Ze > Ye && (Y.style.width = `${Ze < Ie ? Ze : Ie}px`), _e + st + me < he && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`);
            break;
          case "sb":
            tt = et.clientY - be, st = tt + _, _e + st + me < he && st > je && (Y.style.height = `${st < Ne ? st : Ne}px`);
            break;
        }
        Y.className = Y.className.replace(/\s?is--drag/, "") + " is--drag", ee && se && oe(), A.dispatchEvent("zoom", qe, et);
      }, document.onmouseup = () => {
        c.zoomLocat = null, document.onmousemove = ae, document.onmouseup = Re, setTimeout(() => {
          Y.className = Y.className.replace(/\s?is--drag/, "");
        }, 50);
      };
    }, ce = () => {
      const { slots: te = {}, showClose: ee, showZoom: se, title: he } = e, { zoomLocat: xe } = c, me = n.title || te.title, Ve = n.corner || te.corner, Ge = [
        d("div", {
          class: "vxe-modal--header-title"
        }, me ? Ht(me({ $modal: D })) : he ? qt(he) : v.i18n("vxe.alert.title"))
      ], Ye = [];
      return Ve && Ye.push(d("span", {
        class: "vxe-modal--corner-wrapper"
      }, Ht(Ve({ $modal: D })))), se && Ye.push(d("i", {
        class: ["vxe-modal--zoom-btn", "trigger--btn", xe ? v.icon.MODAL_ZOOM_OUT : v.icon.MODAL_ZOOM_IN],
        title: v.i18n(`vxe.modal.zoom${xe ? "Out" : "In"}`),
        onClick: U
      })), ee && Ye.push(d("i", {
        class: ["vxe-modal--close-btn", "trigger--btn", v.icon.MODAL_CLOSE],
        title: v.i18n("vxe.modal.close"),
        onClick: j
      })), Ge.push(d("div", {
        class: "vxe-modal--header-right"
      }, Ye)), Ge;
    }, k = () => {
      const { slots: te = {}, showZoom: ee, draggable: se } = e, he = $.value, xe = n.header || te.header, me = [];
      if (e.showHeader) {
        const Ve = {};
        se && (Ve.onMousedown = Le), ee && e.dblclickZoom && e.type === "modal" && (Ve.onDblclick = U), me.push(d("div", Object.assign({ class: ["vxe-modal--header", {
          "is--draggable": se,
          "is--ellipsis": !he && e.showTitleOverflow
        }] }, Ve), xe ? !c.inited || e.destroyOnClose && !c.visible ? [] : Ht(xe({ $modal: D })) : ce()));
      }
      return me;
    }, Z = () => {
      const { slots: te = {}, status: ee, message: se } = e, he = e.content || se, xe = $.value, me = n.default || te.default, Ve = [];
      return ee && Ve.push(d("div", {
        class: "vxe-modal--status-wrapper"
      }, [
        d("i", {
          class: ["vxe-modal--status-icon", e.iconStatus || v.icon[`MODAL_${ee}`.toLocaleUpperCase()]]
        })
      ])), Ve.push(d("div", {
        class: "vxe-modal--content"
      }, me ? !c.inited || e.destroyOnClose && !c.visible ? [] : Ht(me({ $modal: D })) : qt(he))), xe || Ve.push(d(qs, {
        class: "vxe-modal--loading",
        modelValue: e.loading
      })), [
        d("div", {
          class: "vxe-modal--body"
        }, Ve)
      ];
    }, re = () => {
      const { type: te } = e, ee = [];
      return te === "confirm" && ee.push(d(En, {
        ref: p,
        content: e.cancelButtonText || v.i18n("vxe.button.cancel"),
        onClick: N
      })), ee.push(d(En, {
        ref: m,
        status: "primary",
        content: e.confirmButtonText || v.i18n("vxe.button.confirm"),
        onClick: F
      })), ee;
    }, fe = () => {
      const { slots: te = {} } = e, ee = $.value, se = n.footer || te.footer, he = [];
      return e.showFooter && he.push(d("div", {
        class: "vxe-modal--footer"
      }, se ? !c.inited || e.destroyOnClose && !c.visible ? [] : Ht(se({ $modal: D })) : re())), !ee && e.resize && he.push(d("span", {
        class: "vxe-modal--resize"
      }, ["wl", "wr", "swst", "sest", "st", "swlb", "selb", "sb"].map((xe) => d("span", {
        class: `${xe}-resize`,
        type: xe,
        onMousedown: Ae
      })))), he;
    };
    A = {
      dispatchEvent(te, ee, se) {
        o(te, Object.assign({ $modal: D, $event: se }, ee));
      },
      open: le,
      close() {
        return P("close");
      },
      getBox: O,
      getPosition: pe,
      setPosition: ke,
      isMaximized: I,
      zoom: q,
      maximize: ie,
      revert: V
    }, Object.assign(D, A), dt(() => e.width, B), dt(() => e.height, B), dt(() => e.modelValue, (te) => {
      te ? le() : P("model");
    }), gn(() => {
      ne(() => {
        e.storage && !e.id && ot("vxe.error.reqProp", ["modal.id"]), e.modelValue && le(), B();
      }), e.escClosable && bt.on(D, "keydown", L);
    }), fn(() => {
      bt.off(D, "keydown"), w();
    });
    const De = () => {
      const { className: te, type: ee, animat: se, loading: he, status: xe, lockScroll: me, lockView: Ve, mask: Ge, resize: Ye } = e, { inited: je, zoomLocat: Ie, modalTop: Ne, contentVisible: Y, visible: ae } = c, Re = u.value;
      return d(Yr, {
        to: "body",
        disabled: e.transfer ? !je : !0
      }, [
        d("div", {
          ref: h,
          class: ["vxe-modal--wrapper", `type--${ee}`, te || "", {
            [`size--${Re}`]: Re,
            [`status--${xe}`]: xe,
            "is--animat": se,
            "lock--scroll": me,
            "lock--view": Ve,
            "is--resize": Ye,
            "is--mask": Ge,
            "is--maximize": Ie,
            "is--visible": Y,
            "is--active": ae,
            "is--loading": he
          }],
          style: {
            zIndex: c.modalZindex,
            top: Ne ? `${Ne}px` : null
          },
          onClick: Q
        }, [
          d("div", {
            ref: i,
            class: "vxe-modal--box",
            onMousedown: Ee
          }, k().concat(Z(), fe()))
        ])
      ]);
    };
    return D.renderVN = De, D;
  },
  render() {
    return this.renderVN();
  }
});
function Dk(e) {
  if (e) {
    const t = /* @__PURE__ */ new Date();
    let n = 0, o = 0, s = 0;
    if (l.isDate(e))
      n = e.getHours(), o = e.getMinutes(), s = e.getSeconds();
    else {
      e = l.toValueString(e);
      const u = e.match(/^(\d{1,2})(:(\d{1,2}))?(:(\d{1,2}))?/);
      u && (n = l.toNumber(u[1]), o = l.toNumber(u[3]), s = l.toNumber(u[5]));
    }
    return t.setHours(n), t.setMinutes(o), t.setSeconds(s), t;
  }
  return /* @__PURE__ */ new Date("");
}
function sd(e) {
  const t = e.getMonth();
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4;
}
function kr(e) {
  return l.isString(e) ? e.replace(/,/g, "") : e;
}
function id(e, t) {
  return /^-/.test("" + e) ? l.toFixed(l.ceil(e, t), t) : l.toFixed(l.floor(e, t), t);
}
const Nr = 12, Mk = 20, $k = 8, So = Mt({
  name: "VxeInput",
  props: {
    modelValue: [String, Number, Date],
    immediate: { type: Boolean, default: !0 },
    name: String,
    type: { type: String, default: "text" },
    clearable: { type: Boolean, default: () => v.input.clearable },
    readonly: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: () => l.eqNull(v.input.placeholder) ? v.i18n("vxe.base.pleaseInput") : v.input.placeholder
    },
    maxlength: [String, Number],
    autocomplete: { type: String, default: "off" },
    align: String,
    form: String,
    className: String,
    size: { type: String, default: () => v.input.size || v.size },
    multiple: Boolean,
    // text
    showWordCount: Boolean,
    countMethod: Function,
    // number、integer、float
    min: { type: [String, Number], default: null },
    max: { type: [String, Number], default: null },
    step: [String, Number],
    exponential: { type: Boolean, default: () => v.input.exponential },
    // number、integer、float、password
    controls: { type: Boolean, default: () => v.input.controls },
    // float
    digits: { type: [String, Number], default: () => v.input.digits },
    // date、week、month、quarter、year
    startDate: { type: [String, Number, Date], default: () => v.input.startDate },
    endDate: { type: [String, Number, Date], default: () => v.input.endDate },
    minDate: [String, Number, Date],
    maxDate: [String, Number, Date],
    // 已废弃 startWeek，被 startDay 替换
    startWeek: Number,
    startDay: { type: [String, Number], default: () => v.input.startDay },
    labelFormat: { type: String, default: () => v.input.labelFormat },
    valueFormat: { type: String, default: () => v.input.valueFormat },
    editable: { type: Boolean, default: !0 },
    festivalMethod: { type: Function, default: () => v.input.festivalMethod },
    disabledMethod: { type: Function, default: () => v.input.disabledMethod },
    // week
    selectDay: { type: [String, Number], default: () => v.input.selectDay },
    prefixIcon: String,
    suffixIcon: String,
    placement: String,
    transfer: { type: Boolean, default: () => v.input.transfer }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "keydown",
    "keyup",
    "wheel",
    "click",
    "focus",
    "blur",
    "clear",
    "search-click",
    "toggle-visible",
    "prev-number",
    "next-number",
    "prefix-click",
    "suffix-click",
    "date-prev",
    "date-today",
    "date-next"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), c = l.uniqueId(), h = tn(e), i = Gt({
      inited: !1,
      panelIndex: 0,
      showPwd: !1,
      visiblePanel: !1,
      animatVisible: !1,
      panelStyle: null,
      panelPlacement: "",
      isActivated: !1,
      inputValue: e.modelValue,
      datetimePanelValue: null,
      datePanelValue: null,
      datePanelLabel: "",
      datePanelType: "day",
      selectMonth: null,
      currentDate: null
    }), m = Ue(), p = Ue(), b = Ue(), D = Ue(), A = {
      refElem: m,
      refInput: p
    }, $ = {
      xID: c,
      props: e,
      context: t,
      reactData: i,
      getRefMaps: () => A
    };
    let O = {};
    const B = (x, J) => {
      const { type: ue } = e;
      return ue === "time" ? Dk(x) : l.toStringDate(x, J);
    }, E = Ce(() => {
      const { type: x } = e;
      return x === "time" || x === "datetime";
    }), T = Ce(() => ["number", "integer", "float"].indexOf(e.type) > -1), y = Ce(() => l.getSize(i.inputValue)), w = Ce(() => {
      const x = y.value;
      return e.maxlength && x > l.toNumber(e.maxlength);
    }), P = Ce(() => E.value || ["date", "week", "month", "quarter", "year"].indexOf(e.type) > -1), j = Ce(() => e.type === "password"), F = Ce(() => e.type === "search"), N = Ce(() => l.toInteger(e.digits) || 1), W = Ce(() => {
      const { type: x } = e, J = N.value, ue = e.step;
      return x === "integer" ? l.toInteger(ue) || 1 : x === "float" ? l.toNumber(ue) || 1 / Math.pow(10, J) : l.toNumber(ue) || 1;
    }), de = Ce(() => {
      const { type: x } = e, J = T.value, ue = P.value, Pe = j.value;
      return e.clearable && (Pe || J || ue || x === "text" || x === "search");
    }), we = Ce(() => e.startDate ? l.toStringDate(e.startDate) : null), ve = Ce(() => e.endDate ? l.toStringDate(e.endDate) : null), oe = Ce(() => ["date", "week", "month", "quarter", "year"].includes(e.type)), ie = Ce(() => {
      const { modelValue: x, multiple: J } = e, ue = P.value, Pe = L.value;
      return J && x && ue ? l.toValueString(x).split(",").map((Ke) => {
        const He = B(Ke, Pe);
        return l.isValidDate(He) ? He : null;
      }) : [];
    }), le = Ce(() => {
      const x = ie.value, J = L.value;
      return x.map((ue) => l.toDateString(ue, J));
    }), Q = Ce(() => {
      const x = ie.value, J = ke.value;
      return x.map((ue) => l.toDateString(ue, J)).join(", ");
    }), L = Ce(() => {
      const { type: x } = e;
      return x === "time" ? "HH:mm:ss" : e.valueFormat || (x === "datetime" ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd");
    }), I = Ce(() => {
      const { modelValue: x } = e, J = P.value, ue = L.value;
      let Pe = null;
      if (x && J) {
        const Ke = B(x, ue);
        l.isValidDate(Ke) && (Pe = Ke);
      }
      return Pe;
    }), V = Ce(() => {
      const x = we.value, { selectMonth: J } = i;
      return J && x ? J <= x : !1;
    }), q = Ce(() => {
      const x = ve.value, { selectMonth: J } = i;
      return J && x ? J >= x : !1;
    }), U = Ce(() => {
      const { datetimePanelValue: x } = i;
      return x ? l.toDateString(x, "HH:mm:ss") : "";
    }), pe = Ce(() => {
      const x = I.value, J = E.value;
      return x && J ? (x.getHours() * 3600 + x.getMinutes() * 60 + x.getSeconds()) * 1e3 : 0;
    }), ke = Ce(() => P.value ? e.labelFormat || v.i18n(`vxe.input.date.labelFormat.${e.type}`) : null), Ee = Ce(() => {
      const { selectMonth: x, currentDate: J } = i, ue = [];
      if (x && J) {
        const Pe = J.getFullYear(), Ke = x.getFullYear(), He = new Date(Ke - Ke % Nr, 0, 1);
        for (let nt = -4; nt < Nr + 4; nt++) {
          const r = l.getWhatYear(He, nt, "first"), a = r.getFullYear();
          ue.push({
            date: r,
            isCurrent: !0,
            isPrev: nt < 0,
            isNow: Pe === a,
            isNext: nt >= Nr,
            year: a
          });
        }
      }
      return ue;
    }), Le = Ce(() => {
      if (P.value) {
        const { datePanelType: J, selectMonth: ue } = i, Pe = Ee.value;
        let Ke = "", He;
        return ue && (Ke = ue.getFullYear(), He = ue.getMonth() + 1), J === "quarter" ? v.i18n("vxe.input.date.quarterLabel", [Ke]) : J === "month" ? v.i18n("vxe.input.date.monthLabel", [Ke]) : J === "year" ? Pe.length ? `${Pe[0].year} - ${Pe[Pe.length - 1].year}` : "" : v.i18n("vxe.input.date.dayLabel", [Ke, He ? v.i18n(`vxe.input.date.m${He}`) : "-"]);
      }
      return "";
    }), Ae = Ce(() => {
      const { startDay: x, startWeek: J } = e;
      return l.toNumber(l.isNumber(x) || l.isString(x) ? x : J);
    }), ce = Ce(() => {
      const x = [];
      if (P.value) {
        let ue = Ae.value;
        x.push(ue);
        for (let Pe = 0; Pe < 6; Pe++)
          ue >= 6 ? ue = 0 : ue++, x.push(ue);
      }
      return x;
    }), k = Ce(() => P.value ? ce.value.map((ue) => ({
      value: ue,
      label: v.i18n(`vxe.input.date.weeks.w${ue}`)
    })) : []), Z = Ce(() => {
      if (P.value) {
        const J = k.value;
        return [{ label: v.i18n("vxe.input.date.weeks.w") }].concat(J);
      }
      return [];
    }), re = Ce(() => {
      const x = Ee.value;
      return l.chunk(x, 4);
    }), fe = Ce(() => {
      const { selectMonth: x, currentDate: J } = i, ue = [];
      if (x && J) {
        const Pe = J.getFullYear(), Ke = sd(J), He = l.getWhatYear(x, 0, "first"), nt = He.getFullYear();
        for (let r = -2; r < $k - 2; r++) {
          const a = l.getWhatQuarter(He, r), f = a.getFullYear(), g = sd(a), C = f < nt;
          ue.push({
            date: a,
            isPrev: C,
            isCurrent: f === nt,
            isNow: f === Pe && g === Ke,
            isNext: !C && f > nt,
            quarter: g
          });
        }
      }
      return ue;
    }), De = Ce(() => {
      const x = fe.value;
      return l.chunk(x, 2);
    }), te = Ce(() => {
      const { selectMonth: x, currentDate: J } = i, ue = [];
      if (x && J) {
        const Pe = J.getFullYear(), Ke = J.getMonth(), He = l.getWhatYear(x, 0, "first").getFullYear();
        for (let nt = -4; nt < Mk - 4; nt++) {
          const r = l.getWhatYear(x, 0, nt), a = r.getFullYear(), f = r.getMonth(), g = a < He;
          ue.push({
            date: r,
            isPrev: g,
            isCurrent: a === He,
            isNow: a === Pe && f === Ke,
            isNext: !g && a > He,
            month: f
          });
        }
      }
      return ue;
    }), ee = Ce(() => {
      const x = te.value;
      return l.chunk(x, 4);
    }), se = Ce(() => {
      const { selectMonth: x, currentDate: J } = i, ue = [];
      if (x && J) {
        const Pe = pe.value, Ke = ce.value, He = J.getFullYear(), nt = J.getMonth(), r = J.getDate(), a = x.getFullYear(), f = x.getMonth(), g = x.getDay(), C = -Ke.indexOf(g), S = new Date(l.getWhatDay(x, C).getTime() + Pe);
        for (let R = 0; R < 42; R++) {
          const z = l.getWhatDay(S, R), H = z.getFullYear(), K = z.getMonth(), X = z.getDate(), ge = z < x;
          ue.push({
            date: z,
            isPrev: ge,
            isCurrent: H === a && K === f,
            isNow: H === He && K === nt && X === r,
            isNext: !ge && f !== K,
            label: X
          });
        }
      }
      return ue;
    }), he = Ce(() => {
      const x = se.value;
      return l.chunk(x, 7);
    }), xe = Ce(() => {
      const x = he.value, J = Ae.value;
      return x.map((ue) => {
        const Pe = ue[0];
        return [{
          date: Pe.date,
          isWeekNumber: !0,
          isPrev: !1,
          isCurrent: !1,
          isNow: !1,
          isNext: !1,
          label: l.getYearWeek(Pe.date, J)
        }].concat(ue);
      });
    }), me = Ce(() => {
      const x = [];
      if (E.value)
        for (let ue = 0; ue < 24; ue++)
          x.push({
            value: ue,
            label: ("" + ue).padStart(2, "0")
          });
      return x;
    }), Ve = Ce(() => {
      const x = [];
      if (E.value)
        for (let ue = 0; ue < 60; ue++)
          x.push({
            value: ue,
            label: ("" + ue).padStart(2, "0")
          });
      return x;
    }), Ge = Ce(() => Ve.value), Ye = Ce(() => {
      const { type: x, readonly: J, editable: ue, multiple: Pe } = e;
      return J || Pe || !ue || x === "week" || x === "quarter";
    }), je = Ce(() => {
      const { type: x } = e, { showPwd: J } = i, ue = T.value, Pe = P.value, Ke = j.value;
      return Pe || ue || Ke && J || x === "number" ? "text" : x;
    }), Ie = Ce(() => {
      const { placeholder: x } = e;
      return x ? qt(x) : "";
    }), Ne = Ce(() => {
      const { maxlength: x } = e;
      return T.value && !l.toNumber(x) ? 16 : x;
    }), Y = Ce(() => {
      const { type: x, immediate: J } = e;
      return J || !(x === "text" || x === "number" || x === "integer" || x === "float");
    }), ae = Ce(() => {
      const { type: x } = e, { inputValue: J } = i;
      return T.value ? x === "integer" ? l.toInteger(kr(J)) : l.toNumber(kr(J)) : 0;
    }), Re = Ce(() => {
      const { min: x } = e, { inputValue: J } = i, ue = T.value, Pe = ae.value;
      return (J || J === 0) && ue && x !== null ? Pe <= l.toNumber(x) : !1;
    }), Se = Ce(() => {
      const { max: x } = e, { inputValue: J } = i, ue = T.value, Pe = ae.value;
      return (J || J === 0) && ue && x !== null ? Pe >= l.toNumber(x) : !1;
    }), _ = (x) => {
      const { type: J, exponential: ue } = e, Pe = Ne.value, Ke = N.value, He = J === "float" ? id(x, Ke) : l.toValueString(x);
      return ue && (x === He || l.toValueString(x).toLowerCase() === l.toNumber(He).toExponential()) ? x : He.slice(0, Pe);
    }, G = (x) => {
      const { inputValue: J } = i;
      O.dispatchEvent(x.type, { value: J }, x);
    }, be = (x, J) => {
      i.inputValue = x, o("update:modelValue", x), O.dispatchEvent("input", { value: x }, J), l.toValueString(e.modelValue) !== x && (O.dispatchEvent("change", { value: x }, J), s && u && s.triggerItemEvent(J, u.itemConfig.field, x));
    }, _e = (x, J) => {
      const ue = P.value, Pe = Y.value;
      i.inputValue = x, ue || (Pe ? be(x, J) : O.dispatchEvent("input", { value: x }, J));
    }, Be = (x) => {
      const ue = x.target.value;
      _e(ue, x);
    }, qe = (x) => {
      Y.value || G(x);
    }, et = (x) => {
      i.isActivated = !0, P.value && Qo(x), G(x);
    }, Qe = (x) => {
      const { disabled: J } = e;
      if (!J) {
        const { inputValue: ue } = i;
        O.dispatchEvent("prefix-click", { value: ue }, x);
      }
    };
    let tt;
    const Ze = () => new Promise((x) => {
      i.visiblePanel = !1, tt = window.setTimeout(() => {
        i.animatVisible = !1, x();
      }, 350);
    }), st = (x, J) => {
      const { type: ue } = e, Pe = T.value;
      P.value && Ze(), (Pe || ["text", "search", "password"].indexOf(ue) > -1) && focus(), O.dispatchEvent("clear", { value: J }, x);
    }, wt = (x) => {
      const { disabled: J } = e;
      if (!J)
        if (To(x.currentTarget, "is--clear"))
          be("", x), st(x, "");
        else {
          const { inputValue: ue } = i;
          O.dispatchEvent("suffix-click", { value: ue }, x);
        }
    }, M = (x) => {
      const { type: J } = e, { valueFormat: ue } = e, Pe = ke.value, Ke = Ae.value;
      let He = null, nt = "";
      if (x && (He = B(x, ue)), l.isValidDate(He)) {
        if (nt = l.toDateString(He, Pe, { firstDay: Ke }), Pe && J === "week" && l.getWhatWeek(He, 0, Ke, Ke).getFullYear() < He.getFullYear()) {
          const a = Pe.indexOf("yyyy");
          if (a > -1) {
            const f = Number(nt.substring(a, a + 4));
            f && !isNaN(f) && (nt = nt.replace(`${f}`, `${f - 1}`));
          }
        }
      } else
        He = null;
      i.datePanelValue = He, i.datePanelLabel = nt;
    }, St = () => {
      const x = P.value, { inputValue: J } = i;
      x && (M(J), i.inputValue = e.multiple ? Q.value : i.datePanelLabel);
    }, xt = () => {
      const { type: x } = e, { inputValue: J } = i, ue = P.value, Pe = N.value;
      if (ue)
        St();
      else if (x === "float" && J) {
        const Ke = id(J, Pe);
        J !== Ke && be(Ke, { type: "init" });
      }
    }, ht = (x) => e.max === null || l.toNumber(x) <= l.toNumber(e.max), it = (x) => e.min === null || l.toNumber(x) >= l.toNumber(e.min), Dt = () => {
      i.inputValue = e.multiple ? Q.value : i.datePanelLabel;
    }, Ct = (x) => {
      const J = l.getWhatMonth(x, 0, "first");
      l.isEqual(J, i.selectMonth) || (i.selectMonth = J);
    }, Ft = (x) => {
      const { modelValue: J, multiple: ue } = e, { datetimePanelValue: Pe } = i, Ke = E.value, He = L.value, nt = Ae.value;
      if (e.type === "week") {
        const a = l.toNumber(e.selectDay);
        x = l.getWhatWeek(x, 0, a, nt);
      } else Ke && (x.setHours(Pe.getHours()), x.setMinutes(Pe.getMinutes()), x.setSeconds(Pe.getSeconds()));
      const r = l.toDateString(x, He, { firstDay: nt });
      if (Ct(x), ue) {
        const a = le.value;
        if (Ke) {
          const f = [...ie.value], g = [], C = l.findIndexOf(f, (S) => l.isDateSame(x, S, "yyyyMMdd"));
          C === -1 ? f.push(x) : f.splice(C, 1), f.forEach((S) => {
            S && (S.setHours(Pe.getHours()), S.setMinutes(Pe.getMinutes()), S.setSeconds(Pe.getSeconds()), g.push(S));
          }), be(g.map((S) => l.toDateString(S, He)).join(","), { type: "update" });
        } else
          a.some((f) => l.isEqual(f, r)) ? be(a.filter((f) => !l.isEqual(f, r)).join(","), { type: "update" }) : be(a.concat([r]).join(","), { type: "update" });
      } else
        l.isEqual(J, r) || be(r, { type: "update" });
    }, Et = () => {
      const { type: x, min: J, max: ue, exponential: Pe } = e, { inputValue: Ke, datetimePanelValue: He } = i, nt = T.value, r = P.value, a = ke.value;
      if (!Ye.value) {
        if (nt) {
          if (Ke) {
            let g = x === "integer" ? l.toInteger(kr(Ke)) : l.toNumber(kr(Ke));
            if (it(g) ? ht(g) || (g = ue) : g = J, Pe) {
              const C = l.toValueString(Ke).toLowerCase();
              C === l.toNumber(g).toExponential() && (g = C);
            }
            be(_(g), { type: "check" });
          }
        } else if (r)
          if (Ke) {
            let g = B(Ke, a);
            if (l.isValidDate(g))
              if (x === "time")
                g = l.toDateString(g, a), Ke !== g && be(g, { type: "check" }), i.inputValue = g;
              else {
                let C = !1;
                const S = Ae.value;
                if (x === "datetime") {
                  const R = I.value;
                  (Ke !== l.toDateString(R, a) || Ke !== l.toDateString(g, a)) && (C = !0, He.setHours(g.getHours()), He.setMinutes(g.getMinutes()), He.setSeconds(g.getSeconds()));
                } else
                  C = !0;
                i.inputValue = l.toDateString(g, a, { firstDay: S }), C && Ft(g);
              }
            else
              Dt();
          } else
            be("", { type: "check" });
      }
    }, $t = (x) => {
      const { inputValue: J } = i;
      Y.value || be(J, x), Et(), i.visiblePanel || (i.isActivated = !1), O.dispatchEvent("blur", { value: J }, x);
    }, Lt = (x) => {
      const { readonly: J, disabled: ue } = e, { showPwd: Pe } = i;
      !ue && !J && (i.showPwd = !Pe), O.dispatchEvent("toggle-visible", { visible: i.showPwd }, x);
    }, zt = (x) => {
      O.dispatchEvent("search-click", {}, x);
    }, Qt = (x, J) => {
      const { min: ue, max: Pe, type: Ke } = e, { inputValue: He } = i, nt = W.value, r = Ke === "integer" ? l.toInteger(kr(He)) : l.toNumber(kr(He)), a = x ? l.add(r, nt) : l.subtract(r, nt);
      let f;
      it(a) ? ht(a) ? f = a : f = Pe : f = ue, _e(_(f), J);
    };
    let Ut;
    const Kt = (x) => {
      const { readonly: J, disabled: ue } = e, Pe = Re.value;
      clearTimeout(Ut), !ue && !J && !Pe && Qt(!1, x), O.dispatchEvent("next-number", {}, x);
    }, nn = (x) => {
      Ut = window.setTimeout(() => {
        Kt(x), nn(x);
      }, 60);
    }, Vt = (x) => {
      const { readonly: J, disabled: ue } = e, Pe = Se.value;
      clearTimeout(Ut), !ue && !J && !Pe && Qt(!0, x), O.dispatchEvent("prev-number", {}, x);
    }, At = (x) => {
      const J = vt(x, pt.ARROW_UP), ue = vt(x, pt.ARROW_DOWN);
      (J || ue) && (x.preventDefault(), J ? Vt(x) : Kt(x));
    }, _t = (x) => {
      const { exponential: J, controls: ue } = e;
      if (T.value) {
        const Ke = x.ctrlKey, He = x.shiftKey, nt = x.altKey, r = x.keyCode;
        !Ke && !He && !nt && (vt(x, pt.SPACEBAR) || (!J || r !== 69) && r >= 65 && r <= 90 || r >= 186 && r <= 188 || r >= 191) && x.preventDefault(), ue && At(x);
      }
      G(x);
    }, Zt = (x) => {
      G(x);
    }, an = () => {
      clearTimeout(Ut);
    }, Jt = (x) => {
      Ut = window.setTimeout(() => {
        Vt(x), Jt(x);
      }, 60);
    }, wn = (x) => {
      if (an(), x.button === 0) {
        const J = To(x.currentTarget, "is--prev");
        J ? Vt(x) : Kt(x), Ut = window.setTimeout(() => {
          J ? Jt(x) : nn(x);
        }, 500);
      }
    }, _n = (x) => {
      if (T.value && e.controls && i.isActivated) {
        const ue = x.deltaY;
        ue > 0 ? Kt(x) : ue < 0 && Vt(x), x.preventDefault();
      }
      G(x);
    }, Xn = (x, J) => {
      i.selectMonth = l.getWhatMonth(x, J, "first");
    }, Zo = () => {
      const x = l.getWhatDay(Date.now(), 0, "first");
      i.currentDate = x, Xn(x, 0);
    }, No = () => {
      let { datePanelType: x } = i;
      x === "month" || x === "quarter" ? x = "year" : x = "month", i.datePanelType = x;
    }, Er = (x) => {
      const { type: J } = e, { datePanelType: ue, selectMonth: Pe } = i;
      V.value || (J === "year" ? i.selectMonth = l.getWhatYear(Pe, -12, "first") : J === "month" || J === "quarter" ? ue === "year" ? i.selectMonth = l.getWhatYear(Pe, -12, "first") : i.selectMonth = l.getWhatYear(Pe, -1, "first") : ue === "year" ? i.selectMonth = l.getWhatYear(Pe, -12, "first") : ue === "month" ? i.selectMonth = l.getWhatYear(Pe, -1, "first") : i.selectMonth = l.getWhatMonth(Pe, -1, "first"), O.dispatchEvent("date-prev", { type: J }, x));
    }, Jo = (x) => {
      Zo(), e.multiple || (Ft(i.currentDate), Ze()), O.dispatchEvent("date-today", { type: e.type }, x);
    }, On = (x) => {
      const { type: J } = e, { datePanelType: ue, selectMonth: Pe } = i;
      q.value || (J === "year" ? i.selectMonth = l.getWhatYear(Pe, Nr, "first") : J === "month" || J === "quarter" ? ue === "year" ? i.selectMonth = l.getWhatYear(Pe, Nr, "first") : i.selectMonth = l.getWhatYear(Pe, 1, "first") : ue === "year" ? i.selectMonth = l.getWhatYear(Pe, Nr, "first") : ue === "month" ? i.selectMonth = l.getWhatYear(Pe, 1, "first") : i.selectMonth = l.getWhatMonth(Pe, 1, "first"), O.dispatchEvent("date-next", { type: J }, x));
    }, rn = (x) => {
      const { disabledMethod: J } = e, { datePanelType: ue } = i;
      return J && J({ type: ue, viewType: ue, date: x.date, $input: $ });
    }, Bn = (x) => {
      const { type: J, multiple: ue } = e, { datePanelType: Pe } = i;
      J === "month" ? Pe === "year" ? (i.datePanelType = "month", Ct(x)) : (Ft(x), ue || Ze()) : J === "year" ? (Ft(x), ue || Ze()) : J === "quarter" ? Pe === "year" ? (i.datePanelType = "quarter", Ct(x)) : (Ft(x), ue || Ze()) : Pe === "month" ? (i.datePanelType = J === "week" ? J : "day", Ct(x)) : Pe === "year" ? (i.datePanelType = "month", Ct(x)) : (Ft(x), J === "datetime" || ue || Ze());
    }, Hn = (x) => {
      rn(x) || Bn(x.date);
    }, Zn = (x) => {
      rn({ date: x }) || (se.value.some((ue) => l.isDateSame(ue.date, x, "yyyyMMdd")) || Ct(x), M(x));
    }, vo = (x) => {
      rn({ date: x }) || (Ee.value.some((ue) => l.isDateSame(ue.date, x, "yyyy")) || Ct(x), M(x));
    }, ro = (x) => {
      rn({ date: x }) || (fe.value.some((ue) => l.isDateSame(ue.date, x, "yyyyq")) || Ct(x), M(x));
    }, Wn = (x) => {
      rn({ date: x }) || (te.value.some((ue) => l.isDateSame(ue.date, x, "yyyyMM")) || Ct(x), M(x));
    }, pn = (x) => {
      if (!rn(x)) {
        const { datePanelType: J } = i;
        J === "month" ? Wn(x.date) : J === "quarter" ? ro(x.date) : J === "year" ? vo(x.date) : Zn(x.date);
      }
    }, zn = (x) => {
      if (x) {
        const J = x.offsetHeight, ue = x.parentNode;
        ue.scrollTop = x.offsetTop - J * 4;
      }
    }, Io = (x) => {
      i.datetimePanelValue = new Date(i.datetimePanelValue.getTime()), zn(x.currentTarget);
    }, lo = (x, J) => {
      i.datetimePanelValue.setHours(J.value), Io(x);
    }, so = () => {
      const { multiple: x } = e, { datetimePanelValue: J } = i, ue = I.value, Pe = E.value;
      if (Pe) {
        const Ke = L.value;
        if (x) {
          const He = le.value;
          if (Pe) {
            const nt = [...ie.value], r = [];
            nt.forEach((a) => {
              a && (a.setHours(J.getHours()), a.setMinutes(J.getMinutes()), a.setSeconds(J.getSeconds()), r.push(a));
            }), be(r.map((a) => l.toDateString(a, Ke)).join(","), { type: "update" });
          } else
            be(He.join(","), { type: "update" });
        } else
          Ft(ue || i.currentDate);
      }
      Ze();
    }, jn = (x, J) => {
      i.datetimePanelValue.setMinutes(J.value), Io(x);
    }, Fo = (x, J) => {
      i.datetimePanelValue.setSeconds(J.value), Io(x);
    }, Sn = (x) => {
      const { isActivated: J, datePanelValue: ue, datePanelType: Pe } = i;
      if (J) {
        x.preventDefault();
        const Ke = vt(x, pt.ARROW_LEFT), He = vt(x, pt.ARROW_UP), nt = vt(x, pt.ARROW_RIGHT), r = vt(x, pt.ARROW_DOWN);
        if (Pe === "year") {
          let a = l.getWhatYear(ue || Date.now(), 0, "first");
          Ke ? a = l.getWhatYear(a, -1) : He ? a = l.getWhatYear(a, -4) : nt ? a = l.getWhatYear(a, 1) : r && (a = l.getWhatYear(a, 4)), vo(a);
        } else if (Pe === "quarter") {
          let a = l.getWhatQuarter(ue || Date.now(), 0, "first");
          Ke ? a = l.getWhatQuarter(a, -1) : He ? a = l.getWhatQuarter(a, -2) : nt ? a = l.getWhatQuarter(a, 1) : r && (a = l.getWhatQuarter(a, 2)), ro(a);
        } else if (Pe === "month") {
          let a = l.getWhatMonth(ue || Date.now(), 0, "first");
          Ke ? a = l.getWhatMonth(a, -1) : He ? a = l.getWhatMonth(a, -4) : nt ? a = l.getWhatMonth(a, 1) : r && (a = l.getWhatMonth(a, 4)), Wn(a);
        } else {
          let a = ue || l.getWhatDay(Date.now(), 0, "first");
          const f = Ae.value;
          Ke ? a = l.getWhatDay(a, -1) : He ? a = l.getWhatWeek(a, -1, f) : nt ? a = l.getWhatDay(a, 1) : r && (a = l.getWhatWeek(a, 1, f)), Zn(a);
        }
      }
    }, en = (x) => {
      const { isActivated: J } = i;
      if (J) {
        const ue = vt(x, pt.PAGE_UP);
        x.preventDefault(), ue ? Er(x) : On(x);
      }
    }, bo = () => {
      const { type: x } = e, J = E.value, ue = I.value;
      ["year", "quarter", "month", "week"].indexOf(x) > -1 ? i.datePanelType = x : i.datePanelType = "day", i.currentDate = l.getWhatDay(Date.now(), 0, "first"), ue ? (Xn(ue, 0), M(ue)) : Zo(), J && (i.datetimePanelValue = i.datePanelValue || l.getWhatDay(Date.now(), 0, "first"), ne(() => {
        const Pe = D.value;
        l.arrayEach(Pe.querySelectorAll("li.is--selected"), zn);
      }));
    }, Pt = () => {
      i.panelIndex < ko() && (i.panelIndex = ho());
    }, cn = () => ne().then(() => {
      const { transfer: x, placement: J } = e, { panelIndex: ue } = i, Pe = p.value, Ke = b.value;
      if (Pe && Ke) {
        const He = Pe.offsetHeight, nt = Pe.offsetWidth, r = Ke.offsetHeight, a = Ke.offsetWidth, f = 5, g = {
          zIndex: ue
        }, { boundingTop: C, boundingLeft: S, visibleHeight: R, visibleWidth: z } = uo(Pe);
        let H = "bottom";
        if (console.log(uo(Pe)), x) {
          let K = S, X = C + He;
          J === "top" ? (H = "top", X = C - r) : J || (X + r + f > R && (H = "top", X = C - r), X < f && (H = "bottom", X = C + He)), K + a + f > z && (K -= K + a + f - z), K < f && (K = f), Object.assign(g, {
            left: `${K}px`,
            top: `${X}px`,
            minWidth: `${nt}px`
          });
        } else
          J === "top" ? (H = "top", g.bottom = `${He}px`) : J || C + He + r > R && C - He - r > f && (H = "top", g.bottom = `${He}px`);
        return i.panelStyle = g, i.panelPlacement = H, ne();
      }
    }), Jn = () => {
      const { disabled: x } = e, { visiblePanel: J } = i, ue = P.value;
      return !x && !J ? (i.inited || (i.inited = !0), clearTimeout(tt), i.isActivated = !0, i.animatVisible = !0, ue && bo(), setTimeout(() => {
        i.visiblePanel = !0;
      }, 10), Pt(), cn()) : ne();
    }, Qo = (x) => {
      const { readonly: J } = e;
      J || (x.preventDefault(), Jn());
    }, tl = (x) => {
      G(x);
    }, ns = (x) => {
      const { disabled: J } = e, { visiblePanel: ue, isActivated: Pe } = i, Ke = P.value, He = m.value, nt = b.value;
      !J && Pe && (i.isActivated = yt(x, He).flag || yt(x, nt).flag, i.isActivated || (Ke ? ue && (Ze(), Et()) : Et()));
    }, Zs = (x) => {
      const { clearable: J, disabled: ue } = e, { visiblePanel: Pe } = i, Ke = P.value;
      if (!ue) {
        const He = vt(x, pt.TAB), nt = vt(x, pt.DELETE), r = vt(x, pt.ESCAPE), a = vt(x, pt.ENTER), f = vt(x, pt.ARROW_LEFT), g = vt(x, pt.ARROW_UP), C = vt(x, pt.ARROW_RIGHT), S = vt(x, pt.ARROW_DOWN), R = vt(x, pt.PAGE_UP), z = vt(x, pt.PAGE_DOWN), H = f || g || C || S;
        let K = i.isActivated;
        He ? (K && Et(), K = !1, i.isActivated = K) : H ? Ke && K && (Pe ? Sn(x) : (g || S) && Qo(x)) : a ? Ke && (Pe ? i.datePanelValue ? Bn(i.datePanelValue) : Ze() : K && Qo(x)) : (R || z) && Ke && K && en(x), He || r ? Pe && Ze() : nt && J && K && st(x, null);
      }
    }, os = (x) => {
      const { disabled: J } = e, { visiblePanel: ue } = i;
      if (!J && ue) {
        const Pe = b.value;
        yt(x, Pe).flag ? cn() : (Ze(), Et());
      }
    }, wr = () => {
      const { isActivated: x, visiblePanel: J } = i;
      J ? (Ze(), Et()) : x && Et();
    }, xo = (x, J) => {
      const { festivalMethod: ue } = e;
      if (ue) {
        const { datePanelType: Pe } = i, Ke = ue({ type: Pe, viewType: Pe, date: x.date, $input: $ }), He = Ke ? l.isString(Ke) ? { label: Ke } : Ke : {}, nt = He.extra ? l.isString(He.extra) ? { label: He.extra } : He.extra : null, r = [
          d("span", {
            class: ["vxe-input--date-label", {
              "is-notice": He.notice
            }]
          }, nt && nt.label ? [
            d("span", J),
            d("span", {
              class: ["vxe-input--date-label--extra", nt.important ? "is-important" : "", nt.className],
              style: nt.style
            }, l.toValueString(nt.label))
          ] : J)
        ], a = He.label;
        if (a) {
          const f = l.toValueString(a).split(",");
          r.push(d("span", {
            class: ["vxe-input--date-festival", He.important ? "is-important" : "", He.className],
            style: He.style
          }, [
            f.length > 1 ? d("span", {
              class: ["vxe-input--date-festival--overlap", `overlap--${f.length}`]
            }, f.map((g) => d("span", g.substring(0, 3)))) : d("span", {
              class: "vxe-input--date-festival--label"
            }, f[0].substring(0, 3))
          ]));
        }
        return r;
      }
      return J;
    }, Js = () => {
      const { multiple: x } = e, { datePanelType: J, datePanelValue: ue } = i, Pe = I.value, Ke = k.value, He = he.value, nt = ie.value, r = "yyyyMMdd";
      return [
        d("table", {
          class: `vxe-input--date-${J}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          d("thead", [
            d("tr", Ke.map((a) => d("th", a.label)))
          ]),
          d("tbody", He.map((a) => d("tr", a.map((f) => d("td", {
            class: {
              "is--prev": f.isPrev,
              "is--current": f.isCurrent,
              "is--now": f.isNow,
              "is--next": f.isNext,
              "is--disabled": rn(f),
              "is--selected": x ? nt.some((g) => l.isDateSame(g, f.date, r)) : l.isDateSame(Pe, f.date, r),
              "is--hover": l.isDateSame(ue, f.date, r)
            },
            onClick: () => Hn(f),
            onMouseenter: () => pn(f)
          }, xo(f, f.label))))))
        ])
      ];
    }, rs = () => {
      const { multiple: x } = e, { datePanelType: J, datePanelValue: ue } = i, Pe = I.value, Ke = Z.value, He = xe.value, nt = ie.value, r = "yyyyMMdd";
      return [
        d("table", {
          class: `vxe-input--date-${J}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          d("thead", [
            d("tr", Ke.map((a) => d("th", a.label)))
          ]),
          d("tbody", He.map((a) => {
            const f = x ? a.some((C) => nt.some((S) => l.isDateSame(S, C.date, r))) : a.some((C) => l.isDateSame(Pe, C.date, r)), g = a.some((C) => l.isDateSame(ue, C.date, r));
            return d("tr", a.map((C) => d("td", {
              class: {
                "is--prev": C.isPrev,
                "is--current": C.isCurrent,
                "is--now": C.isNow,
                "is--next": C.isNext,
                "is--disabled": rn(C),
                "is--selected": f,
                "is--hover": g
              },
              // event
              onClick: () => Hn(C),
              onMouseenter: () => pn(C)
            }, xo(C, C.label))));
          }))
        ])
      ];
    }, Qs = () => {
      const { multiple: x } = e, { datePanelType: J, datePanelValue: ue } = i, Pe = I.value, Ke = ee.value, He = ie.value, nt = "yyyyMM";
      return [
        d("table", {
          class: `vxe-input--date-${J}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          d("tbody", Ke.map((r) => d("tr", r.map((a) => d("td", {
            class: {
              "is--prev": a.isPrev,
              "is--current": a.isCurrent,
              "is--now": a.isNow,
              "is--next": a.isNext,
              "is--disabled": rn(a),
              "is--selected": x ? He.some((f) => l.isDateSame(f, a.date, nt)) : l.isDateSame(Pe, a.date, nt),
              "is--hover": l.isDateSame(ue, a.date, nt)
            },
            onClick: () => Hn(a),
            onMouseenter: () => pn(a)
          }, xo(a, v.i18n(`vxe.input.date.months.m${a.month}`)))))))
        ])
      ];
    }, ei = () => {
      const { multiple: x } = e, { datePanelType: J, datePanelValue: ue } = i, Pe = I.value, Ke = De.value, He = ie.value, nt = "yyyyq";
      return [
        d("table", {
          class: `vxe-input--date-${J}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          d("tbody", Ke.map((r) => d("tr", r.map((a) => d("td", {
            class: {
              "is--prev": a.isPrev,
              "is--current": a.isCurrent,
              "is--now": a.isNow,
              "is--next": a.isNext,
              "is--disabled": rn(a),
              "is--selected": x ? He.some((f) => l.isDateSame(f, a.date, nt)) : l.isDateSame(Pe, a.date, nt),
              "is--hover": l.isDateSame(ue, a.date, nt)
            },
            onClick: () => Hn(a),
            onMouseenter: () => pn(a)
          }, xo(a, v.i18n(`vxe.input.date.quarters.q${a.quarter}`)))))))
        ])
      ];
    }, ti = () => {
      const { multiple: x } = e, { datePanelType: J, datePanelValue: ue } = i, Pe = I.value, Ke = re.value, He = ie.value, nt = "yyyy";
      return [
        d("table", {
          class: `vxe-input--date-${J}-view`,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          d("tbody", Ke.map((r) => d("tr", r.map((a) => d("td", {
            class: {
              "is--prev": a.isPrev,
              "is--current": a.isCurrent,
              "is--now": a.isNow,
              "is--next": a.isNext,
              "is--disabled": rn(a),
              "is--selected": x ? He.some((f) => l.isDateSame(f, a.date, nt)) : l.isDateSame(Pe, a.date, nt),
              "is--hover": l.isDateSame(ue, a.date, nt)
            },
            onClick: () => Hn(a),
            onMouseenter: () => pn(a)
          }, xo(a, a.year))))))
        ])
      ];
    }, ni = () => {
      const { datePanelType: x } = i;
      switch (x) {
        case "week":
          return rs();
        case "month":
          return Qs();
        case "quarter":
          return ei();
        case "year":
          return ti();
      }
      return Js();
    }, ls = () => {
      const { multiple: x } = e, { datePanelType: J } = i, ue = V.value, Pe = q.value, Ke = Le.value;
      return [
        d("div", {
          class: "vxe-input--date-picker-header"
        }, [
          d("div", {
            class: "vxe-input--date-picker-type-wrapper"
          }, [
            J === "year" ? d("span", {
              class: "vxe-input--date-picker-label"
            }, Ke) : d("span", {
              class: "vxe-input--date-picker-btn",
              onClick: No
            }, Ke)
          ]),
          d("div", {
            class: "vxe-input--date-picker-btn-wrapper"
          }, [
            d("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-prev-btn", {
                "is--disabled": ue
              }],
              onClick: Er
            }, [
              d("i", {
                class: "vxe-icon-caret-left"
              })
            ]),
            d("span", {
              class: "vxe-input--date-picker-btn vxe-input--date-picker-current-btn",
              onClick: Jo
            }, [
              d("i", {
                class: "vxe-icon-dot"
              })
            ]),
            d("span", {
              class: ["vxe-input--date-picker-btn vxe-input--date-picker-next-btn", {
                "is--disabled": Pe
              }],
              onClick: On
            }, [
              d("i", {
                class: "vxe-icon-caret-right"
              })
            ]),
            x && oe.value ? d("span", {
              class: "vxe-input--date-picker-btn vxe-input--date-picker-confirm-btn"
            }, [
              d("button", {
                class: "vxe-input--date-picker-confirm",
                type: "button",
                onClick: so
              }, v.i18n("vxe.button.confirm"))
            ]) : null
          ])
        ]),
        d("div", {
          class: "vxe-input--date-picker-body"
        }, ni())
      ];
    }, ss = () => {
      const { datetimePanelValue: x } = i, J = U.value, ue = me.value, Pe = Ve.value, Ke = Ge.value;
      return [
        d("div", {
          class: "vxe-input--time-picker-header"
        }, [
          d("span", {
            class: "vxe-input--time-picker-title"
          }, J),
          d("button", {
            class: "vxe-input--time-picker-confirm",
            type: "button",
            onClick: so
          }, v.i18n("vxe.button.confirm"))
        ]),
        d("div", {
          ref: D,
          class: "vxe-input--time-picker-body"
        }, [
          d("ul", {
            class: "vxe-input--time-picker-hour-list"
          }, ue.map((He, nt) => d("li", {
            key: nt,
            class: {
              "is--selected": x && x.getHours() === He.value
            },
            onClick: (r) => lo(r, He)
          }, He.label))),
          d("ul", {
            class: "vxe-input--time-picker-minute-list"
          }, Pe.map((He, nt) => d("li", {
            key: nt,
            class: {
              "is--selected": x && x.getMinutes() === He.value
            },
            onClick: (r) => jn(r, He)
          }, He.label))),
          d("ul", {
            class: "vxe-input--time-picker-second-list"
          }, Ke.map((He, nt) => d("li", {
            key: nt,
            class: {
              "is--selected": x && x.getSeconds() === He.value
            },
            onClick: (r) => Fo(r, He)
          }, He.label)))
        ])
      ];
    }, oi = () => {
      const { type: x, transfer: J } = e, { inited: ue, animatVisible: Pe, visiblePanel: Ke, panelPlacement: He, panelStyle: nt } = i, r = h.value, a = P.value, f = [];
      return a ? (x === "datetime" ? f.push(d("div", {
        class: "vxe-input--panel-layout-wrapper"
      }, [
        d("div", {
          class: "vxe-input--panel-left-wrapper"
        }, ls()),
        d("div", {
          class: "vxe-input--panel-right-wrapper"
        }, ss())
      ])) : x === "time" ? f.push(d("div", {
        class: "vxe-input--panel-wrapper"
      }, ss())) : f.push(d("div", {
        class: "vxe-input--panel-wrapper"
      }, ls())), d(Yr, {
        to: "body",
        disabled: J ? !ue : !0
      }, [
        d("div", {
          ref: b,
          class: ["vxe-table--ignore-clear vxe-input--panel", `type--${x}`, {
            [`size--${r}`]: r,
            "is--transfer": J,
            "animat--leave": Pe,
            "animat--enter": Ke
          }],
          placement: He,
          style: nt
        }, f)
      ])) : null;
    }, ri = () => {
      const x = Se.value, J = Re.value;
      return d("span", {
        class: "vxe-input--number-suffix"
      }, [
        d("span", {
          class: ["vxe-input--number-prev is--prev", {
            "is--disabled": x
          }],
          onMousedown: wn,
          onMouseup: an,
          onMouseleave: an
        }, [
          d("i", {
            class: ["vxe-input--number-prev-icon", v.icon.INPUT_PREV_NUM]
          })
        ]),
        d("span", {
          class: ["vxe-input--number-next is--next", {
            "is--disabled": J
          }],
          onMousedown: wn,
          onMouseup: an,
          onMouseleave: an
        }, [
          d("i", {
            class: ["vxe-input--number-next-icon", v.icon.INPUT_NEXT_NUM]
          })
        ])
      ]);
    }, li = () => d("span", {
      class: "vxe-input--date-picker-suffix",
      onClick: Qo
    }, [
      d("i", {
        class: ["vxe-input--date-picker-icon", v.icon.INPUT_DATE]
      })
    ]), Or = () => d("span", {
      class: "vxe-input--search-suffix",
      onClick: zt
    }, [
      d("i", {
        class: ["vxe-input--search-icon", v.icon.INPUT_SEARCH]
      })
    ]), nl = () => {
      const { showPwd: x } = i;
      return d("span", {
        class: "vxe-input--password-suffix",
        onClick: Lt
      }, [
        d("i", {
          class: ["vxe-input--password-icon", x ? v.icon.INPUT_SHOW_PWD : v.icon.INPUT_PWD]
        })
      ]);
    }, is = () => {
      const { prefixIcon: x } = e, J = n.prefix, ue = [];
      return J ? ue.push(d("span", {
        class: "vxe-input--prefix-icon"
      }, J({}))) : x && ue.push(d("i", {
        class: ["vxe-input--prefix-icon", x]
      })), ue.length ? d("span", {
        class: "vxe-input--prefix",
        onClick: Qe
      }, ue) : null;
    }, si = () => {
      const { disabled: x, suffixIcon: J } = e, { inputValue: ue } = i, Pe = n.suffix, Ke = de.value, He = [];
      return Pe ? He.push(d("span", {
        class: "vxe-input--suffix-icon"
      }, Pe({}))) : J && He.push(d("i", {
        class: ["vxe-input--suffix-icon", J]
      })), Ke && He.push(d("i", {
        class: ["vxe-input--clear-icon", v.icon.INPUT_CLEAR]
      })), He.length ? d("span", {
        class: ["vxe-input--suffix", {
          "is--clear": Ke && !x && !(ue === "" || l.eqNull(ue))
        }],
        onClick: wt
      }, He) : null;
    }, ol = () => {
      const { controls: x } = e, J = T.value, ue = P.value, Pe = j.value, Ke = F.value;
      let He;
      return Pe ? He = nl() : J ? x && (He = ri()) : ue ? He = li() : Ke && (He = Or()), He ? d("span", {
        class: "vxe-input--extra-suffix"
      }, [He]) : null;
    };
    O = {
      dispatchEvent(x, J, ue) {
        o(x, Object.assign({ $input: $, $event: ue }, J));
      },
      focus() {
        const x = p.value;
        return i.isActivated = !0, x.focus(), ne();
      },
      blur() {
        return p.value.blur(), i.isActivated = !1, ne();
      },
      select() {
        return p.value.select(), i.isActivated = !1, ne();
      },
      showPanel: Jn,
      hidePanel: Ze,
      updatePlacement: cn
    }, Object.assign($, O), dt(() => e.modelValue, (x) => {
      i.inputValue = x, St();
    }), dt(() => e.type, () => {
      Object.assign(i, {
        inputValue: e.modelValue,
        datetimePanelValue: null,
        datePanelValue: null,
        datePanelLabel: "",
        datePanelType: "day",
        selectMonth: null,
        currentDate: null
      }), xt();
    }), dt(ke, () => {
      P.value && (M(i.datePanelValue), i.inputValue = e.multiple ? Q.value : i.datePanelLabel);
    }), ne(() => {
      bt.on($, "mousewheel", os), bt.on($, "mousedown", ns), bt.on($, "keydown", Zs), bt.on($, "blur", wr);
    }), fn(() => {
      an(), bt.off($, "mousewheel"), bt.off($, "mousedown"), bt.off($, "keydown"), bt.off($, "blur");
    }), xt();
    const rl = () => {
      const { className: x, controls: J, type: ue, align: Pe, showWordCount: Ke, countMethod: He, name: nt, disabled: r, readonly: a, autocomplete: f } = e, { inputValue: g, visiblePanel: C, isActivated: S } = i, R = h.value, z = w.value, H = y.value, K = P.value, X = Ye.value, ge = Ne.value, Me = je.value, Oe = Ie.value, $e = [], Te = is(), Fe = si();
      Te && $e.push(Te), $e.push(d("input", {
        ref: p,
        class: "vxe-input--inner",
        value: g,
        name: nt,
        type: Me,
        placeholder: Oe,
        maxlength: ge,
        readonly: X,
        disabled: r,
        autocomplete: f,
        onKeydown: _t,
        onKeyup: Zt,
        onWheel: _n,
        onClick: tl,
        onInput: Be,
        onChange: qe,
        onFocus: et,
        onBlur: $t
      })), Fe && $e.push(Fe), $e.push(ol()), K && $e.push(oi());
      let ye = !1;
      return Ke && ["text", "search"].includes(ue) && (ye = !0, $e.push(d("span", {
        class: ["vxe-input--count", {
          "is--error": z
        }]
      }, He ? `${He({ value: g })}` : `${H}${ge ? `/${ge}` : ""}`))), d("div", {
        ref: m,
        class: ["vxe-input", `type--${ue}`, x, {
          [`size--${R}`]: R,
          [`is--${Pe}`]: Pe,
          "is--controls": J,
          "is--prefix": !!Te,
          "is--suffix": !!Fe,
          "is--readonly": a,
          "is--visivle": C,
          "is--count": ye,
          "is--disabled": r,
          "is--active": S
        }]
      }, $e);
    };
    return $.renderVN = rl, $;
  },
  render() {
    return this.renderVN();
  }
}), Fn = Mt({
  name: "VxeCheckbox",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number], default: null },
    indeterminate: Boolean,
    title: [String, Number],
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    content: [String, Number],
    disabled: Boolean,
    size: { type: String, default: () => v.checkbox.size || v.size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), h = {
      xID: l.uniqueId(),
      props: e,
      context: t
    };
    let i = {};
    const m = tn(e), p = gt("$xecheckboxgroup", null), b = Ce(() => p ? l.includes(p.props.modelValue, e.label) : e.modelValue === e.checkedValue), D = Ce(() => {
      if (e.disabled)
        return !0;
      if (p) {
        const { props: O } = p, { computeIsMaximize: B } = p.getComputeMaps(), E = B.value, T = b.value;
        return O.disabled || E && !T;
      }
      return !1;
    }), A = (O) => {
      const { checkedValue: B, uncheckedValue: E } = e;
      if (!D.value) {
        const y = O.target.checked, w = y ? B : E, P = { checked: y, value: w, label: e.label };
        p ? p.handleChecked(P, O) : (o("update:modelValue", w), i.dispatchEvent("change", P, O), s && u && s.triggerItemEvent(O, u.itemConfig.field, w));
      }
    };
    i = {
      dispatchEvent(O, B, E) {
        o(O, Object.assign({ $checkbox: h, $event: E }, B));
      }
    }, Object.assign(h, i);
    const $ = () => {
      const O = m.value, B = D.value, E = b.value, T = e.indeterminate;
      return d("label", {
        class: ["vxe-checkbox", {
          [`size--${O}`]: O,
          "is--indeterminate": T,
          "is--disabled": B,
          "is--checked": E
        }],
        title: e.title
      }, [
        d("input", {
          class: "vxe-checkbox--input",
          type: "checkbox",
          disabled: B,
          checked: E,
          onChange: A
        }),
        d("span", {
          class: ["vxe-checkbox--icon", T ? "vxe-icon-checkbox-indeterminate" : E ? "vxe-icon-checkbox-checked" : "vxe-icon-checkbox-unchecked"]
        }),
        d("span", {
          class: "vxe-checkbox--label"
        }, n.default ? n.default({}) : qt(e.content))
      ]);
    };
    return h.renderVN = $, h;
  },
  render() {
    return this.renderVN();
  }
});
function Ho(e) {
  return e.visible !== !1;
}
function kk() {
  return l.uniqueId("opt_");
}
const vr = Mt({
  name: "VxeSelect",
  props: {
    modelValue: null,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: () => l.eqNull(v.select.placeholder) ? v.i18n("vxe.base.pleaseSelect") : v.select.placeholder
    },
    loading: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    multiCharOverflow: { type: [Number, String], default: () => v.select.multiCharOverflow },
    prefixIcon: String,
    placement: String,
    options: Array,
    optionProps: Object,
    optionGroups: Array,
    optionGroupProps: Object,
    optionConfig: Object,
    className: [String, Function],
    popupClassName: [String, Function],
    max: { type: [String, Number], default: null },
    size: { type: String, default: () => v.select.size || v.size },
    filterable: Boolean,
    filterMethod: Function,
    remote: Boolean,
    remoteMethod: Function,
    emptyText: String,
    // 已废弃，被 option-config.keyField 替换
    optionId: { type: String, default: () => v.select.optionId },
    // 已废弃，被 option-config.useKey 替换
    optionKey: Boolean,
    transfer: { type: Boolean, default: () => v.select.transfer }
  },
  emits: [
    "update:modelValue",
    "change",
    "clear",
    "blur",
    "focus"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), c = l.uniqueId(), h = tn(e), i = Gt({
      inited: !1,
      staticOptions: [],
      fullGroupList: [],
      fullOptionList: [],
      visibleGroupList: [],
      visibleOptionList: [],
      remoteValueList: [],
      panelIndex: 0,
      panelStyle: {},
      panelPlacement: null,
      currentOption: null,
      currentValue: null,
      visiblePanel: !1,
      animatVisible: !1,
      isActivated: !1,
      searchValue: "",
      searchLoading: !1
    }), m = Ue(), p = Ue(), b = Ue(), D = Ue(), A = Ue(), $ = {
      refElem: m
    }, O = {
      xID: c,
      props: e,
      context: t,
      reactData: i,
      getRefMaps: () => $
    };
    let B = {};
    const E = Ce(() => e.optionProps || {}), T = Ce(() => e.optionGroupProps || {}), y = Ce(() => E.value.label || "label"), w = Ce(() => E.value.value || "value"), P = Ce(() => T.value.label || "label"), j = Ce(() => T.value.options || "options"), F = Ce(() => {
      const { modelValue: _, multiple: G, max: be } = e;
      return G && be ? (_ ? _.length : 0) >= l.toNumber(be) : !1;
    }), N = Ce(() => Object.assign({}, v.select.optionConfig, e.optionConfig)), W = Ce(() => i.fullGroupList.some((_) => _.options && _.options.length)), de = Ce(() => l.toNumber(e.multiCharOverflow)), we = (_, G) => _ && (l.isString(_) && (_ = n[_] || null), l.isFunction(_)) ? Ht(_(G)) : [], ve = (_) => {
      const { fullOptionList: G, fullGroupList: be } = i, _e = W.value, Be = w.value;
      if (_e)
        for (let qe = 0; qe < be.length; qe++) {
          const et = be[qe];
          if (et.options)
            for (let Qe = 0; Qe < et.options.length; Qe++) {
              const tt = et.options[Qe];
              if (_ === tt[Be])
                return tt;
            }
        }
      return G.find((qe) => _ === qe[Be]);
    }, oe = (_) => {
      const { remoteValueList: G } = i, be = y.value, _e = G.find((qe) => _ === qe.key), Be = _e ? _e.result : null;
      return l.toValueString(Be ? Be[be] : _);
    }, ie = (_) => {
      const G = y.value, be = ve(_);
      return l.toValueString(be ? be[G] : _);
    }, le = Ce(() => {
      const { modelValue: _, multiple: G, remote: be } = e, _e = de.value;
      if (_ && G) {
        const Be = l.isArray(_) ? _ : [_];
        return be ? Be.map((qe) => oe(qe)).join(", ") : Be.map((qe) => {
          const et = ie(qe);
          return _e > 0 && et.length > _e ? `${et.substring(0, _e)}...` : et;
        }).join(", ");
      }
      return be ? oe(_) : ie(_);
    }), Q = () => N.value.keyField || e.optionId || "_X_OPTION_KEY", L = (_) => {
      const G = _[Q()];
      return G ? encodeURIComponent(G) : "";
    }, I = () => {
      const { filterable: _, filterMethod: G } = e, { fullOptionList: be, fullGroupList: _e, searchValue: Be } = i, qe = W.value, et = P.value, Qe = y.value;
      return qe ? _ && G ? i.visibleGroupList = _e.filter((tt) => Ho(tt) && G({ group: tt, option: null, searchValue: Be })) : _ ? i.visibleGroupList = _e.filter((tt) => Ho(tt) && (!Be || `${tt[et]}`.indexOf(Be) > -1)) : i.visibleGroupList = _e.filter(Ho) : _ && G ? i.visibleOptionList = be.filter((tt) => Ho(tt) && G({ group: null, option: tt, searchValue: Be })) : _ ? i.visibleOptionList = be.filter((tt) => Ho(tt) && (!Be || `${tt[Qe]}`.indexOf(Be) > -1)) : i.visibleOptionList = be.filter(Ho), ne();
    }, V = () => {
      const { fullOptionList: _, fullGroupList: G } = i, be = j.value, _e = Q(), Be = (qe) => {
        L(qe) || (qe[_e] = kk());
      };
      G.length ? G.forEach((qe) => {
        Be(qe), qe[be] && qe[be].forEach(Be);
      }) : _.length && _.forEach(Be), I();
    }, q = (_) => {
      const G = w.value;
      _ && (i.currentOption = _, i.currentValue = _[G]);
    }, U = (_, G) => ne().then(() => {
      if (_) {
        const be = D.value, Be = A.value.querySelector(`[optid='${L(_)}']`);
        if (be && Be) {
          const qe = be.offsetHeight, et = 5;
          G ? Be.offsetTop + Be.offsetHeight - be.scrollTop > qe && (be.scrollTop = Be.offsetTop + Be.offsetHeight - qe) : (Be.offsetTop + et < be.scrollTop || Be.offsetTop + et > be.scrollTop + be.clientHeight) && (be.scrollTop = Be.offsetTop - et);
        }
      }
    }), pe = () => {
      i.panelIndex < ko() && (i.panelIndex = ho());
    }, ke = () => ne().then(() => {
      const { transfer: _, placement: G } = e, { panelIndex: be } = i, _e = m.value, Be = A.value;
      if (Be && _e) {
        const qe = _e.offsetHeight, et = _e.offsetWidth, Qe = Be.offsetHeight, tt = Be.offsetWidth, Ze = 5, st = {
          zIndex: be
        }, { boundingTop: wt, boundingLeft: M, visibleHeight: St, visibleWidth: xt } = uo(_e);
        let ht = "bottom";
        if (_) {
          let it = M, Dt = wt + qe;
          G === "top" ? (ht = "top", Dt = wt - Qe) : G || (Dt + Qe + Ze > St && (ht = "top", Dt = wt - Qe), Dt < Ze && (ht = "bottom", Dt = wt + qe)), it + tt + Ze > xt && (it -= it + tt + Ze - xt), it < Ze && (it = Ze), Object.assign(st, {
            left: `${it}px`,
            top: `${Dt}px`,
            minWidth: `${et}px`
          });
        } else
          G === "top" ? (ht = "top", st.bottom = `${qe}px`) : G || wt + qe + Qe > St && wt - qe - Qe > Ze && (ht = "top", st.bottom = `${qe}px`);
        return i.panelStyle = st, i.panelPlacement = ht, ne();
      }
    });
    let Ee;
    const Le = () => {
      const { loading: _, disabled: G, filterable: be } = e;
      !_ && !G && (clearTimeout(Ee), i.inited || (i.inited = !0), i.isActivated = !0, i.animatVisible = !0, be && I(), setTimeout(() => {
        const { modelValue: _e, multiple: Be } = e, qe = ve(Be && _e ? _e[0] : _e);
        i.visiblePanel = !0, qe && (q(qe), U(qe)), he();
      }, 10), pe(), ke());
    }, Ae = () => {
      i.searchValue = "", i.searchLoading = !1, i.visiblePanel = !1, Ee = window.setTimeout(() => {
        i.animatVisible = !1;
      }, 350);
    }, ce = (_, G) => {
      G !== e.modelValue && (o("update:modelValue", G), B.dispatchEvent("change", { value: G }, _), s && u && s.triggerItemEvent(_, u.itemConfig.field, G));
    }, k = (_, G) => {
      i.remoteValueList = [], ce(_, G), B.dispatchEvent("clear", { value: G }, _);
    }, Z = (_, G) => {
      k(G, null), Ae();
    }, re = (_, G, be) => {
      const { modelValue: _e, multiple: Be } = e, { remoteValueList: qe } = i;
      if (Be) {
        let et;
        _e ? _e.indexOf(G) === -1 ? et = _e.concat([G]) : et = _e.filter((tt) => tt !== G) : et = [G];
        const Qe = qe.find((tt) => tt.key === G);
        Qe ? Qe.result = be : qe.push({ key: G, result: be }), ce(_, et);
      } else
        i.remoteValueList = [{ key: G, result: be }], ce(_, G), Ae();
    }, fe = (_) => {
      const { disabled: G } = e, { visiblePanel: be } = i;
      if (!G && be) {
        const _e = A.value;
        yt(_, _e).flag ? ke() : Ae();
      }
    }, De = (_) => {
      const { disabled: G } = e, { visiblePanel: be } = i;
      if (!G) {
        const _e = m.value, Be = A.value;
        i.isActivated = yt(_, _e).flag || yt(_, Be).flag, be && !i.isActivated && Ae();
      }
    }, te = (_, G) => {
      const { visibleOptionList: be, visibleGroupList: _e } = i, Be = W.value, qe = w.value, et = j.value;
      let Qe, tt, Ze, st;
      if (Be)
        for (let wt = 0; wt < _e.length; wt++) {
          const M = _e[wt], St = M[et], xt = M.disabled;
          if (St)
            for (let ht = 0; ht < St.length; ht++) {
              const it = St[ht], Dt = Ho(it), Ct = xt || it.disabled;
              if (!Qe && !Ct && (Qe = it), st && Dt && !Ct && (Ze = it, !G))
                return { offsetOption: Ze };
              if (_ === it[qe]) {
                if (st = it, G)
                  return { offsetOption: tt };
              } else
                Dt && !Ct && (tt = it);
            }
        }
      else
        for (let wt = 0; wt < be.length; wt++) {
          const M = be[wt], St = M.disabled;
          if (!Qe && !St && (Qe = M), st && !St && (Ze = M, !G))
            return { offsetOption: Ze };
          if (_ === M[qe]) {
            if (st = M, G)
              return { offsetOption: tt };
          } else
            St || (tt = M);
        }
      return { firstOption: Qe };
    }, ee = (_) => {
      const { clearable: G, disabled: be } = e, { visiblePanel: _e, currentValue: Be, currentOption: qe } = i;
      if (!be) {
        const et = vt(_, pt.TAB), Qe = vt(_, pt.ENTER), tt = vt(_, pt.ESCAPE), Ze = vt(_, pt.ARROW_UP), st = vt(_, pt.ARROW_DOWN), wt = vt(_, pt.DELETE), M = vt(_, pt.SPACEBAR);
        if (et && (i.isActivated = !1), _e)
          if (tt || et)
            Ae();
          else if (Qe)
            _.preventDefault(), _.stopPropagation(), re(_, Be, qe);
          else if (Ze || st) {
            _.preventDefault();
            let { firstOption: St, offsetOption: xt } = te(Be, Ze);
            !xt && !ve(Be) && (xt = St), q(xt), U(xt, st);
          } else M && _.preventDefault();
        else (Ze || st || Qe || M) && i.isActivated && (_.preventDefault(), Le());
        i.isActivated && wt && G && k(_, null);
      }
    }, se = () => {
      Ae();
    }, he = () => {
      e.filterable && ne(() => {
        const _ = b.value;
        _ && _.focus();
      });
    }, xe = (_) => {
      e.disabled || (i.isActivated = !0), B.dispatchEvent("focus", {}, _);
    }, me = (_) => {
      i.isActivated = !1, B.dispatchEvent("blur", {}, _);
    }, Ve = (_) => {
      i.searchValue = _;
    }, Ge = () => {
      i.isActivated = !0;
    }, Ye = (_) => {
      const { $event: G } = _;
      vt(G, pt.ENTER) && (G.preventDefault(), G.stopPropagation());
    }, je = l.debounce(function() {
      const { remote: _, remoteMethod: G } = e, { searchValue: be } = i;
      _ && G ? (i.searchLoading = !0, Promise.resolve(G({ searchValue: be })).then(() => ne()).catch(() => ne()).finally(() => {
        i.searchLoading = !1, I();
      })) : I();
    }, 350, { trailing: !0 }), Ie = (_) => {
      const { $event: G } = _;
      G.preventDefault(), i.visiblePanel ? Ae() : Le();
    }, Ne = (_, G, be) => !!(G.disabled || be && be.disabled || F.value && !_), Y = (_, G) => {
      const { optionKey: be, modelValue: _e, multiple: Be } = e, { currentValue: qe } = i, et = N.value, Qe = y.value, tt = w.value, Ze = W.value, { useKey: st } = et, wt = n.option;
      return _.map((M, St) => {
        const { slots: xt, className: ht } = M, it = M[tt], Dt = Be ? _e && _e.indexOf(it) > -1 : _e === it, Ct = !Ze || Ho(M), Ft = Ne(Dt, M, G), Et = L(M), $t = xt ? xt.default : null, Lt = { option: M, group: null, $select: O };
        return Ct ? d("div", {
          key: st || be ? Et : St,
          class: ["vxe-select-option", ht ? l.isFunction(ht) ? ht(Lt) : ht : "", {
            "is--disabled": Ft,
            "is--selected": Dt,
            "is--hover": qe === it
          }],
          // attrs
          optid: Et,
          // event
          onMousedown: (zt) => {
            zt.button === 0 && zt.stopPropagation();
          },
          onClick: (zt) => {
            Ft || re(zt, it, M);
          },
          onMouseenter: () => {
            Ft || q(M);
          }
        }, wt ? we(wt, Lt) : $t ? we($t, Lt) : Xt(qt(M[Qe]))) : null;
      });
    }, ae = () => {
      const { optionKey: _ } = e, { visibleGroupList: G } = i, be = N.value, _e = P.value, Be = j.value, { useKey: qe } = be, et = n.option;
      return G.map((Qe, tt) => {
        const { slots: Ze, className: st } = Qe, wt = L(Qe), M = Qe.disabled, St = Ze ? Ze.default : null, xt = { option: Qe, group: Qe, $select: O };
        return d("div", {
          key: qe || _ ? wt : tt,
          class: ["vxe-optgroup", st ? l.isFunction(st) ? st(xt) : st : "", {
            "is--disabled": M
          }],
          // attrs
          optid: wt
        }, [
          d("div", {
            class: "vxe-optgroup--title"
          }, et ? we(et, xt) : St ? we(St, xt) : qt(Qe[_e])),
          d("div", {
            class: "vxe-optgroup--wrapper"
          }, Y(Qe[Be] || [], Qe))
        ]);
      });
    }, Re = () => {
      const { visibleGroupList: _, visibleOptionList: G, searchLoading: be } = i, _e = W.value;
      if (be)
        return [
          d("div", {
            class: "vxe-select--search-loading"
          }, [
            d("i", {
              class: ["vxe-select--search-icon", v.icon.SELECT_LOADED]
            }),
            d("span", {
              class: "vxe-select--search-text"
            }, v.i18n("vxe.select.loadingText"))
          ])
        ];
      if (_e) {
        if (_.length)
          return ae();
      } else if (G.length)
        return Y(G);
      return [
        d("div", {
          class: "vxe-select--empty-placeholder"
        }, e.emptyText || v.i18n("vxe.select.emptyText"))
      ];
    };
    B = {
      dispatchEvent(_, G, be) {
        o(_, Object.assign({ $select: O, $event: be }, G));
      },
      isPanelVisible() {
        return i.visiblePanel;
      },
      togglePanel() {
        return i.visiblePanel ? Ae() : Le(), ne();
      },
      hidePanel() {
        return i.visiblePanel && Ae(), ne();
      },
      showPanel() {
        return i.visiblePanel || Le(), ne();
      },
      refreshOption: I,
      focus() {
        const _ = p.value;
        return i.isActivated = !0, _.blur(), ne();
      },
      blur() {
        return p.value.blur(), i.isActivated = !1, ne();
      }
    }, Object.assign(O, B), dt(() => i.staticOptions, (_) => {
      _.some((G) => G.options && G.options.length) ? (i.fullOptionList = [], i.fullGroupList = _) : (i.fullGroupList = [], i.fullOptionList = _ || []), V();
    }), dt(() => e.options, (_) => {
      i.fullGroupList = [], i.fullOptionList = _ || [], V();
    }), dt(() => e.optionGroups, (_) => {
      i.fullOptionList = [], i.fullGroupList = _ || [], V();
    }), gn(() => {
      ne(() => {
        const { options: _, optionGroups: G } = e;
        G ? i.fullGroupList = G : _ && (i.fullOptionList = _), V();
      }), bt.on(O, "mousewheel", fe), bt.on(O, "mousedown", De), bt.on(O, "keydown", ee), bt.on(O, "blur", se);
    }), fn(() => {
      bt.off(O, "mousewheel"), bt.off(O, "mousedown"), bt.off(O, "keydown"), bt.off(O, "blur");
    });
    const Se = () => {
      const { className: _, popupClassName: G, transfer: be, disabled: _e, loading: Be, filterable: qe } = e, { inited: et, isActivated: Qe, visiblePanel: tt } = i, Ze = h.value, st = le.value, wt = n.default, M = n.header, St = n.footer, xt = n.prefix;
      return d("div", {
        ref: m,
        class: ["vxe-select", _ ? l.isFunction(_) ? _({ $select: O }) : _ : "", {
          [`size--${Ze}`]: Ze,
          "is--visivle": tt,
          "is--disabled": _e,
          "is--filter": qe,
          "is--loading": Be,
          "is--active": Qe
        }]
      }, [
        d("div", {
          class: "vxe-select-slots",
          ref: "hideOption"
        }, wt ? wt({}) : []),
        d(So, {
          ref: p,
          clearable: e.clearable,
          placeholder: e.placeholder,
          readonly: !0,
          disabled: _e,
          type: "text",
          prefixIcon: e.prefixIcon,
          suffixIcon: Be ? v.icon.SELECT_LOADED : tt ? v.icon.SELECT_OPEN : v.icon.SELECT_CLOSE,
          modelValue: st,
          onClear: Z,
          onClick: Ie,
          onFocus: xe,
          onBlur: me,
          onSuffixClick: Ie
        }, xt ? {
          prefix: () => xt({})
        } : {}),
        d(Yr, {
          to: "body",
          disabled: be ? !et : !0
        }, [
          d("div", {
            ref: A,
            class: ["vxe-table--ignore-clear vxe-select--panel", G ? l.isFunction(G) ? G({ $select: O }) : G : "", {
              [`size--${Ze}`]: Ze,
              "is--transfer": be,
              "animat--leave": !Be && i.animatVisible,
              "animat--enter": !Be && tt
            }],
            placement: i.panelPlacement,
            style: i.panelStyle
          }, et ? [
            qe ? d("div", {
              class: "vxe-select--panel-search"
            }, [
              d(So, {
                ref: b,
                class: "vxe-select-search--input",
                modelValue: i.searchValue,
                clearable: !0,
                placeholder: v.i18n("vxe.select.search"),
                prefixIcon: v.icon.INPUT_SEARCH,
                "onUpdate:modelValue": Ve,
                onFocus: Ge,
                onKeydown: Ye,
                onChange: je,
                onSearch: je
              })
            ]) : Rt(),
            d("div", {
              class: "vxe-select--panel-wrapper"
            }, [
              M ? d("div", {
                class: "vxe-select--panel-header"
              }, M({})) : Rt(),
              d("div", {
                class: "vxe-select--panel-body"
              }, [
                d("div", {
                  ref: D,
                  class: "vxe-select-option--wrapper"
                }, Re())
              ]),
              St ? d("div", {
                class: "vxe-select--panel-footer"
              }, St({})) : Rt()
            ])
          ] : [])
        ])
      ]);
    };
    return O.renderVN = Se, Yt("$xeselect", O), O;
  },
  render() {
    return this.renderVN();
  }
}), wl = Mt({
  name: "VxeTableExportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(e) {
    const t = gt("$xetable", {}), { computeExportOpts: n, computePrintOpts: o } = t.getComputeMaps(), s = Gt({
      isAll: !1,
      isIndeterminate: !1,
      loading: !1
    }), u = Ue(), c = Ue(), h = Ue(), i = Ce(() => {
      const { storeData: F } = e;
      return F.columns.every((N) => N.checked);
    }), m = Ce(() => {
      const { defaultOptions: F } = e;
      return ["html", "xml", "xlsx", "pdf"].indexOf(F.type) > -1;
    }), p = Ce(() => {
      const { storeData: F, defaultOptions: N } = e;
      return !N.original && N.mode === "current" && (F.isPrint || ["html", "xlsx"].indexOf(N.type) > -1);
    }), b = Ce(() => {
      const { defaultOptions: F } = e;
      return !F.original && ["xlsx"].indexOf(F.type) > -1;
    }), D = (F) => {
      const { storeData: N } = e, W = l.findTree(N.columns, (de) => de === F);
      if (W && W.parent) {
        const { parent: de } = W;
        de.children && de.children.length && (de.checked = de.children.every((we) => we.checked), de.halfChecked = !de.checked && de.children.some((we) => we.checked || we.halfChecked), D(de));
      }
    }, A = () => {
      const { storeData: F } = e, N = F.columns;
      s.isAll = N.every((W) => W.disabled || W.checked), s.isIndeterminate = !s.isAll && N.some((W) => !W.disabled && (W.checked || W.halfChecked));
    }, $ = (F) => {
      const N = !F.checked;
      l.eachTree([F], (W) => {
        W.checked = N, W.halfChecked = !1;
      }), D(F), A();
    }, O = () => {
      const { storeData: F } = e, N = !s.isAll;
      l.eachTree(F.columns, (W) => {
        W.disabled || (W.checked = N, W.halfChecked = !1);
      }), s.isAll = N, A();
    }, B = () => {
      ne(() => {
        const F = c.value, N = h.value, W = u.value, de = F || N || W;
        de && de.focus();
      }), A();
    }, E = () => {
      const { storeData: F, defaultOptions: N } = e, { hasMerge: W, columns: de } = F, we = i.value, ve = p.value, oe = l.searchTree(de, (ie) => ie.checked, { children: "children", mapChildren: "childNodes", original: !0 });
      return Object.assign({}, N, {
        columns: oe,
        isMerge: W && ve && we ? N.isMerge : !1
      });
    }, T = () => {
      const { storeData: F } = e, N = o.value;
      F.visible = !1, t.print(Object.assign({}, N, E()));
    }, y = () => {
      const { storeData: F } = e, N = n.value;
      s.loading = !0, t.exportData(Object.assign({}, N, E())).then(() => {
        s.loading = !1, F.visible = !1;
      }).catch(() => {
        s.loading = !1;
      });
    }, w = () => {
      const { storeData: F } = e;
      F.visible = !1;
    }, P = () => {
      const { storeData: F } = e;
      F.isPrint ? T() : y();
    };
    return () => {
      const { defaultOptions: F, storeData: N } = e, { isAll: W, isIndeterminate: de } = s, { hasTree: we, hasMerge: ve, isPrint: oe, hasColgroup: ie } = N, { isHeader: le } = F, Q = [], L = i.value, I = m.value, V = p.value, q = b.value;
      return l.eachTree(N.columns, (U) => {
        const pe = Xt(U.getTitle(), 1), ke = U.children && U.children.length, Ee = U.checked, Le = U.halfChecked;
        Q.push(d("li", {
          class: ["vxe-export--panel-column-option", `level--${U.level}`, {
            "is--group": ke,
            "is--checked": Ee,
            "is--indeterminate": Le,
            "is--disabled": U.disabled
          }],
          title: pe,
          onClick: () => {
            U.disabled || $(U);
          }
        }, [
          d("span", {
            class: ["vxe-checkbox--icon", Le ? v.icon.TABLE_CHECKBOX_INDETERMINATE : Ee ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
          }),
          d("span", {
            class: "vxe-checkbox--label"
          }, pe)
        ]));
      }), d(Go, {
        modelValue: N.visible,
        title: v.i18n(oe ? "vxe.export.printTitle" : "vxe.export.expTitle"),
        className: "vxe-table-export-popup-wrapper",
        width: 660,
        mask: !0,
        lockView: !0,
        showFooter: !1,
        escClosable: !0,
        maskClosable: !0,
        loading: s.loading,
        "onUpdate:modelValue"(U) {
          N.visible = U;
        },
        onShow: B
      }, {
        default: () => d("div", {
          class: "vxe-export--panel"
        }, [
          d("table", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
          }, [
            d("tbody", [
              [
                oe ? Rt() : d("tr", [
                  d("td", v.i18n("vxe.export.expName")),
                  d("td", [
                    d(So, {
                      ref: c,
                      modelValue: F.filename,
                      type: "text",
                      clearable: !0,
                      placeholder: v.i18n("vxe.export.expNamePlaceholder"),
                      "onUpdate:modelValue"(U) {
                        F.filename = U;
                      }
                    })
                  ])
                ]),
                oe ? Rt() : d("tr", [
                  d("td", v.i18n("vxe.export.expType")),
                  d("td", [
                    d(vr, {
                      modelValue: F.type,
                      options: N.typeList.map((U) => ({
                        value: U.value,
                        label: v.i18n(U.label)
                      })),
                      "onUpdate:modelValue"(U) {
                        F.type = U;
                      }
                    })
                  ])
                ]),
                oe || I ? d("tr", [
                  d("td", v.i18n("vxe.export.expSheetName")),
                  d("td", [
                    d(So, {
                      ref: h,
                      modelValue: F.sheetName,
                      type: "text",
                      clearable: !0,
                      placeholder: v.i18n("vxe.export.expSheetNamePlaceholder"),
                      "onUpdate:modelValue"(U) {
                        F.sheetName = U;
                      }
                    })
                  ])
                ]) : Rt(),
                d("tr", [
                  d("td", v.i18n("vxe.export.expMode")),
                  d("td", [
                    d(vr, {
                      modelValue: F.mode,
                      options: N.modeList.map((U) => ({
                        value: U.value,
                        label: v.i18n(U.label)
                      })),
                      "onUpdate:modelValue"(U) {
                        F.mode = U;
                      }
                    })
                  ])
                ]),
                d("tr", [
                  d("td", [v.i18n("vxe.export.expColumn")]),
                  d("td", [
                    d("div", {
                      class: "vxe-export--panel-column"
                    }, [
                      d("ul", {
                        class: "vxe-export--panel-column-header"
                      }, [
                        d("li", {
                          class: ["vxe-export--panel-column-option", {
                            "is--checked": W,
                            "is--indeterminate": de
                          }],
                          title: v.i18n("vxe.table.allTitle"),
                          onClick: O
                        }, [
                          d("span", {
                            class: ["vxe-checkbox--icon", de ? v.icon.TABLE_CHECKBOX_INDETERMINATE : W ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
                          }),
                          d("span", {
                            class: "vxe-checkbox--label"
                          }, v.i18n("vxe.export.expCurrentColumn"))
                        ])
                      ]),
                      d("ul", {
                        class: "vxe-export--panel-column-body"
                      }, Q)
                    ])
                  ])
                ]),
                d("tr", [
                  d("td", v.i18n("vxe.export.expOpts")),
                  d("td", [
                    d("div", {
                      class: "vxe-export--panel-option-row"
                    }, [
                      d(Fn, {
                        modelValue: F.isHeader,
                        title: v.i18n("vxe.export.expHeaderTitle"),
                        content: v.i18n("vxe.export.expOptHeader"),
                        "onUpdate:modelValue"(U) {
                          F.isHeader = U;
                        }
                      }),
                      d(Fn, {
                        modelValue: F.isFooter,
                        disabled: !N.hasFooter,
                        title: v.i18n("vxe.export.expFooterTitle"),
                        content: v.i18n("vxe.export.expOptFooter"),
                        "onUpdate:modelValue"(U) {
                          F.isFooter = U;
                        }
                      }),
                      d(Fn, {
                        modelValue: F.original,
                        title: v.i18n("vxe.export.expOriginalTitle"),
                        content: v.i18n("vxe.export.expOptOriginal"),
                        "onUpdate:modelValue"(U) {
                          F.original = U;
                        }
                      })
                    ]),
                    d("div", {
                      class: "vxe-export--panel-option-row"
                    }, [
                      d(Fn, {
                        modelValue: le && ie && V ? F.isColgroup : !1,
                        title: v.i18n("vxe.export.expColgroupTitle"),
                        disabled: !le || !ie || !V,
                        content: v.i18n("vxe.export.expOptColgroup"),
                        "onUpdate:modelValue"(U) {
                          F.isColgroup = U;
                        }
                      }),
                      d(Fn, {
                        modelValue: ve && V && L ? F.isMerge : !1,
                        title: v.i18n("vxe.export.expMergeTitle"),
                        disabled: !ve || !V || !L,
                        content: v.i18n("vxe.export.expOptMerge"),
                        "onUpdate:modelValue"(U) {
                          F.isMerge = U;
                        }
                      }),
                      oe ? Rt() : d(Fn, {
                        modelValue: q ? F.useStyle : !1,
                        disabled: !q,
                        title: v.i18n("vxe.export.expUseStyleTitle"),
                        content: v.i18n("vxe.export.expOptUseStyle"),
                        "onUpdate:modelValue"(U) {
                          F.useStyle = U;
                        }
                      }),
                      d(Fn, {
                        modelValue: we ? F.isAllExpand : !1,
                        disabled: !we,
                        title: v.i18n("vxe.export.expAllExpandTitle"),
                        content: v.i18n("vxe.export.expOptAllExpand"),
                        "onUpdate:modelValue"(U) {
                          F.isAllExpand = U;
                        }
                      })
                    ])
                  ])
                ])
              ]
            ])
          ]),
          d("div", {
            class: "vxe-export--panel-btns"
          }, [
            d(En, {
              content: v.i18n("vxe.export.expCancel"),
              onClick: w
            }),
            d(En, {
              ref: u,
              status: "primary",
              content: v.i18n(oe ? "vxe.export.expPrint" : "vxe.export.expConfirm"),
              onClick: P
            })
          ])
        ])
      });
    };
  }
}), br = Mt({
  name: "VxeRadio",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
    name: String,
    strict: { type: Boolean, default: () => v.radio.strict },
    size: { type: String, default: () => v.radio.size || v.size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), h = {
      xID: l.uniqueId(),
      props: e,
      context: t
    }, i = tn(e), m = gt("$xeradiogroup", null);
    let p = {};
    const b = Ce(() => e.disabled || m && m.props.disabled), D = Ce(() => m ? m.name : e.name), A = Ce(() => m ? m.props.strict : e.strict), $ = Ce(() => {
      const { modelValue: y, label: w } = e;
      return m ? m.props.modelValue === w : y === w;
    }), O = (y, w) => {
      m ? m.handleChecked({ label: y }, w) : (o("update:modelValue", y), p.dispatchEvent("change", { label: y }, w), s && u && s.triggerItemEvent(w, u.itemConfig.field, y));
    }, B = (y) => {
      b.value || O(e.label, y);
    }, E = (y) => {
      const w = b.value, P = A.value;
      !w && !P && e.label === (m ? m.props.modelValue : e.modelValue) && O(null, y);
    };
    p = {
      dispatchEvent(y, w, P) {
        o(y, Object.assign({ $radio: h, $event: P }, w));
      }
    }, Object.assign(h, p);
    const T = () => {
      const y = i.value, w = b.value, P = D.value, j = $.value;
      return d("label", {
        class: ["vxe-radio", {
          [`size--${y}`]: y,
          "is--checked": j,
          "is--disabled": w
        }],
        title: e.title
      }, [
        d("input", {
          class: "vxe-radio--input",
          type: "radio",
          name: P,
          checked: j,
          disabled: w,
          onChange: B,
          onClick: E
        }),
        d("span", {
          class: ["vxe-radio--icon", j ? "vxe-icon-radio-checked" : "vxe-icon-radio-unchecked"]
        }),
        d("span", {
          class: "vxe-radio--label"
        }, n.default ? n.default({}) : qt(e.content))
      ]);
    };
    return h.renderVN = T, h;
  },
  render() {
    return this.renderVN();
  }
}), Wr = Mt({
  name: "VxeRadioButton",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
    strict: { type: Boolean, default: () => v.radioButton.strict },
    size: { type: String, default: () => v.radioButton.size || v.size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), c = l.uniqueId(), h = tn(e), i = {
      xID: c,
      props: e,
      context: t
    };
    let m = {};
    const p = gt("$xeradiogroup", null), b = Ce(() => e.disabled || p && p.props.disabled), D = Ce(() => p ? p.name : null), A = Ce(() => p ? p.props.strict : e.strict), $ = Ce(() => {
      const { modelValue: y, label: w } = e;
      return p ? p.props.modelValue === w : y === w;
    });
    m = {
      dispatchEvent(y, w, P) {
        o(y, Object.assign({ $radioButton: i, $event: P }, w));
      }
    }, Object.assign(i, m);
    const O = (y, w) => {
      p ? p.handleChecked({ label: y }, w) : (o("update:modelValue", y), m.dispatchEvent("change", { label: y }, w), s && u && s.triggerItemEvent(w, u.itemConfig.field, y));
    }, B = (y) => {
      b.value || O(e.label, y);
    }, E = (y) => {
      const w = b.value, P = A.value;
      !w && !P && e.label === (p ? p.props.modelValue : e.modelValue) && O(null, y);
    }, T = () => {
      const y = h.value, w = b.value, P = D.value, j = $.value;
      return d("label", {
        class: ["vxe-radio", "vxe-radio-button", {
          [`size--${y}`]: y,
          "is--disabled": w
        }],
        title: e.title
      }, [
        d("input", {
          class: "vxe-radio--input",
          type: "radio",
          name: P,
          checked: j,
          disabled: w,
          onChange: B,
          onClick: E
        }),
        d("span", {
          class: "vxe-radio--label"
        }, n.default ? n.default({}) : qt(e.content))
      ]);
    };
    return Object.assign(i, {
      renderVN: T,
      dispatchEvent
    }), T;
  }
}), xr = Mt({
  name: "VxeRadioGroup",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    type: String,
    options: Array,
    optionProps: Object,
    strict: { type: Boolean, default: () => v.radioGroup.strict },
    size: { type: String, default: () => v.radioGroup.size || v.size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), h = {
      xID: l.uniqueId(),
      props: e,
      context: t,
      name: l.uniqueId("xegroup_")
    }, i = Ce(() => e.optionProps || {}), m = Ce(() => i.value.label || "label"), p = Ce(() => i.value.value || "value"), b = Ce(() => i.value.disabled || "disabled");
    let D = {};
    tn(e);
    const A = {
      handleChecked(O, B) {
        o("update:modelValue", O.label), D.dispatchEvent("change", O), s && u && s.triggerItemEvent(B, u.itemConfig.field, O.label);
      }
    };
    D = {
      dispatchEvent(O, B, E) {
        o(O, Object.assign({ $radioGroup: h, $event: E }, B));
      }
    };
    const $ = () => {
      const { options: O, type: B } = e, E = n.default, T = p.value, y = m.value, w = b.value, P = B === "button" ? Wr : br;
      return d("div", {
        class: "vxe-radio-group"
      }, E ? E({}) : O ? O.map((j) => d(P, {
        label: j[T],
        content: j[y],
        disabled: j[w]
      })) : []);
    };
    return Object.assign(h, A, {
      renderVN: $,
      dispatchEvent
    }), Yt("$xeradiogroup", h), $;
  }
}), Ol = Mt({
  name: "VxeTableImportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(e) {
    const t = gt("$xetable", {}), { computeImportOpts: n } = t.getComputeMaps(), o = Gt({
      loading: !1
    }), s = Ue(), u = Ce(() => {
      const { storeData: $ } = e;
      return `${$.filename}.${$.type}`;
    }), c = Ce(() => {
      const { storeData: $ } = e;
      return $.file && $.type;
    }), h = Ce(() => {
      const { storeData: $ } = e, { type: O, typeList: B } = $;
      if (O) {
        const E = l.find(B, (T) => O === T.value);
        return E ? v.i18n(E.label) : "*.*";
      }
      return `*.${B.map((E) => E.value).join(", *.")}`;
    }), i = () => {
      const { storeData: $ } = e;
      Object.assign($, {
        filename: "",
        sheetName: "",
        type: ""
      });
    }, m = () => {
      const { storeData: $, defaultOptions: O } = e;
      t.readFile(O).then((B) => {
        const { file: E } = B;
        Object.assign($, Ca(E), { file: E });
      }).catch((B) => B);
    }, p = () => {
      ne(() => {
        const $ = s.value;
        $ && $.focus();
      });
    }, b = () => {
      const { storeData: $ } = e;
      $.visible = !1;
    }, D = () => {
      const { storeData: $, defaultOptions: O } = e, B = n.value;
      o.loading = !0, t.importByFile($.file, Object.assign({}, B, O)).then(() => {
        o.loading = !1, $.visible = !1;
      }).catch(() => {
        o.loading = !1;
      });
    };
    return () => {
      const { defaultOptions: $, storeData: O } = e, B = u.value, E = c.value, T = h.value;
      return d(Go, {
        modelValue: O.visible,
        title: v.i18n("vxe.import.impTitle"),
        className: "vxe-table-import-popup-wrapper",
        width: 440,
        mask: !0,
        lockView: !0,
        showFooter: !1,
        escClosable: !0,
        maskClosable: !0,
        loading: o.loading,
        "onUpdate:modelValue"(y) {
          O.visible = y;
        },
        onShow: p
      }, {
        default: () => d("div", {
          class: "vxe-export--panel"
        }, [
          d("table", {
            cellspacing: 0,
            cellpadding: 0,
            border: 0
          }, [
            d("tbody", [
              d("tr", [
                d("td", v.i18n("vxe.import.impFile")),
                d("td", [
                  E ? d("div", {
                    class: "vxe-import-selected--file",
                    title: B
                  }, [
                    d("span", B),
                    d("i", {
                      class: v.icon.INPUT_CLEAR,
                      onClick: i
                    })
                  ]) : d("button", {
                    ref: s,
                    class: "vxe-import-select--file",
                    onClick: m
                  }, v.i18n("vxe.import.impSelect"))
                ])
              ]),
              d("tr", [
                d("td", v.i18n("vxe.import.impType")),
                d("td", T)
              ]),
              d("tr", [
                d("td", v.i18n("vxe.import.impOpts")),
                d("td", [
                  d(xr, {
                    modelValue: $.mode,
                    "onUpdate:modelValue"(y) {
                      $.mode = y;
                    }
                  }, {
                    default: () => O.modeList.map((y) => d(br, { label: y.value, content: v.i18n(y.label) }))
                  })
                ])
              ])
            ])
          ]),
          d("div", {
            class: "vxe-export--panel-btns"
          }, [
            d(En, {
              content: v.i18n("vxe.import.impCancel"),
              onClick: b
            }),
            d(En, {
              status: "primary",
              disabled: !E,
              content: v.i18n("vxe.import.impConfirm"),
              onClick: D
            })
          ])
        ])
      });
    };
  }
});
let Ir, Wo, yn;
const Nk = 'body{margin:0;padding: 0 1px;color:#333333;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}';
function ad() {
  const e = document.createElement("iframe");
  return e.className = "vxe-table--print-frame", e;
}
function Fa(e, t) {
  return new Blob([e], { type: `text/${t.type};charset=utf-8;` });
}
function nh(e, t) {
  const { style: n } = e;
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${e.sheetName}</title>`,
    '<style media="print">.vxe-page-break-before{page-break-before:always;}.vxe-page-break-after{page-break-after:always;}</style>',
    `<style>${Nk}</style>`,
    n ? `<style>${n}</style>` : "",
    "</head>",
    `<body>${t}</body>`,
    "</html>"
  ].join("");
}
const ks = (e) => {
  const t = Object.assign({}, e);
  return Ir || (Ir = document.createElement("form"), Wo = document.createElement("input"), Ir.className = "vxe-table--file-form", Wo.name = "file", Wo.type = "file", Ir.appendChild(Wo), document.body.appendChild(Ir)), new Promise((n, o) => {
    const s = t.types || [], u = !s.length || s.some((c) => c === "*");
    Wo.multiple = !!t.multiple, Wo.accept = u ? "" : `.${s.join(", .")}`, Wo.onchange = (c) => {
      const { files: h } = c.target, i = h[0];
      let m = "";
      if (!u)
        for (let p = 0; p < h.length; p++) {
          const { type: b } = Ca(h[p]);
          if (!l.includes(s, b)) {
            m = b;
            break;
          }
        }
      m ? (t.message !== !1 && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: v.i18n("vxe.error.notType", [m]), status: "error" })), o({ status: !1, files: h, file: i })) : n({ status: !0, files: h, file: i });
    }, Ir.reset(), Wo.click();
  });
};
function oh() {
  if (yn) {
    if (yn.parentNode) {
      try {
        yn.contentDocument.write("");
      } catch {
      }
      yn.parentNode.removeChild(yn);
    }
    yn = null;
  }
}
function cd() {
  yn.parentNode || document.body.appendChild(yn);
}
function Ik() {
  requestAnimationFrame(oh);
}
function Ji(e, t, n = "") {
  const { beforePrintMethod: o } = t;
  o && (n = o({ content: n, options: t, $table: e }) || ""), n = nh(t, n);
  const s = Fa(n, t);
  Ln.msie ? (oh(), yn = ad(), cd(), yn.contentDocument.write(n), yn.contentDocument.execCommand("print")) : (yn || (yn = ad(), yn.onload = (u) => {
    u.target.src && (u.target.contentWindow.onafterprint = Ik, u.target.contentWindow.print());
  }), cd(), yn.src = URL.createObjectURL(s));
}
const Ns = (e) => {
  const { filename: t, type: n, content: o } = e, s = `${t}.${n}`;
  if (window.Blob) {
    const u = o instanceof Blob ? o : Fa(l.toValueString(o), e);
    if (navigator.msSaveBlob)
      navigator.msSaveBlob(u, s);
    else {
      const c = URL.createObjectURL(u), h = document.createElement("a");
      h.target = "_blank", h.download = s, h.href = c, document.body.appendChild(h), h.click(), requestAnimationFrame(() => {
        h.parentNode && h.parentNode.removeChild(h), URL.revokeObjectURL(c);
      });
    }
    return Promise.resolve();
  }
  return Promise.reject(new Error(pa("vxe.error.notExp")));
};
let Fr;
const Fk = "\uFEFF", cr = `\r
`;
function ud(e) {
  return e.property || ["seq", "checkbox", "radio"].indexOf(e.type) > -1;
}
const rh = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.childNodes && n.childNodes.length ? (t.push(n), t.push(...rh(n.childNodes))) : t.push(n);
  }), t;
}, Pk = (e) => {
  let t = 1;
  const n = (u, c) => {
    if (c && (u._level = c._level + 1, t < u._level && (t = u._level)), u.childNodes && u.childNodes.length) {
      let h = 0;
      u.childNodes.forEach((i) => {
        n(i, u), h += i._colSpan;
      }), u._colSpan = h;
    } else
      u._colSpan = 1;
  };
  e.forEach((u) => {
    u._level = 1, n(u);
  });
  const o = [];
  for (let u = 0; u < t; u++)
    o.push([]);
  return rh(e).forEach((u) => {
    u.childNodes && u.childNodes.length ? u._rowSpan = 1 : u._rowSpan = t - u._level + 1, o[u._level - 1].push(u);
  }), o;
};
function Lk(e) {
  return e === !0 ? "full" : e || "default";
}
function Pr(e) {
  return e === "TRUE" || e === "true" || e === !0;
}
function Cs(e, t) {
  const { footerFilterMethod: n } = e;
  return n ? t.filter((o, s) => n({ items: o, $rowIndex: s })) : t;
}
function Vk(e, t) {
  if (t) {
    if (e.type === "seq")
      return `	${t}`;
    switch (e.cellType) {
      case "string":
        if (!isNaN(t))
          return `	${t}`;
        break;
      case "number":
        break;
      default:
        if (t.length >= 12 && !isNaN(t))
          return `	${t}`;
        break;
    }
  }
  return t;
}
function Lr(e) {
  return /[",\s\n]/.test(e) ? `"${e.replace(/"/g, '""')}"` : e;
}
function In(e, t) {
  return e.getElementsByTagName(t);
}
function dd(e) {
  return `#${e}@${l.uniqueId()}`;
}
function lh(e, t) {
  return e.replace(/#\d+@\d+/g, (n) => l.hasOwnProp(t, n) ? t[n] : n);
}
function fd(e, t) {
  return lh(e, t).replace(/^"+$/g, (o) => '"'.repeat(Math.ceil(o.length / 2)));
}
function sh(e, t, n) {
  const o = t.split(cr), s = [];
  let u = [];
  if (o.length) {
    const c = {}, h = Date.now();
    o.forEach((i) => {
      if (i) {
        const m = {};
        i = i.replace(/("")|(\n)/g, (b, D) => {
          const A = dd(h);
          return c[A] = D ? '"' : `
`, A;
        }).replace(/"(.*?)"/g, (b, D) => {
          const A = dd(h);
          return c[A] = lh(D, c), A;
        });
        const p = i.split(n);
        u.length ? (p.forEach((b, D) => {
          D < u.length && (m[u[D]] = fd(b.trim(), c));
        }), s.push(m)) : u = p.map((b) => fd(b.trim(), c));
      }
    });
  }
  return { fields: u, rows: s };
}
function Ak(e, t) {
  return sh(e, t, ",");
}
function _k(e, t) {
  return sh(e, t, "	");
}
function Bk(e, t) {
  const o = new DOMParser().parseFromString(t, "text/html"), s = In(o, "body"), u = [], c = [];
  if (s.length) {
    const h = In(s[0], "table");
    if (h.length) {
      const i = In(h[0], "thead");
      if (i.length) {
        l.arrayEach(In(i[0], "tr"), (p) => {
          l.arrayEach(In(p, "th"), (b) => {
            c.push(b.textContent);
          });
        });
        const m = In(h[0], "tbody");
        m.length && l.arrayEach(In(m[0], "tr"), (p) => {
          const b = {};
          l.arrayEach(In(p, "td"), (D, A) => {
            c[A] && (b[c[A]] = D.textContent || "");
          }), u.push(b);
        });
      }
    }
  }
  return { fields: c, rows: u };
}
function Hk(e, t) {
  const o = new DOMParser().parseFromString(t, "application/xml"), s = In(o, "Worksheet"), u = [], c = [];
  if (s.length) {
    const h = In(s[0], "Table");
    if (h.length) {
      const i = In(h[0], "Row");
      i.length && (l.arrayEach(In(i[0], "Cell"), (m) => {
        c.push(m.textContent);
      }), l.arrayEach(i, (m, p) => {
        if (p) {
          const b = {}, D = In(m, "Cell");
          l.arrayEach(D, (A, $) => {
            c[$] && (b[c[$]] = A.textContent);
          }), u.push(b);
        }
      }));
    }
  }
  return { fields: c, rows: u };
}
function pd(e) {
  l.eachTree(e, (t) => {
    delete t._level, delete t._colSpan, delete t._rowSpan, delete t._children, delete t.childNodes;
  }, { children: "children" });
}
function Wk(e, t) {
  const n = [];
  return e.forEach((o) => {
    const s = o.property;
    s && n.push(s);
  }), t.some((o) => n.indexOf(o) > -1);
}
const zk = ["exportData", "importByFile", "importData", "saveFile", "readFile", "print", "openImport", "openExport", "openPrint"], jk = {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { computeTreeOpts: s, computePrintOpts: u, computeExportOpts: c, computeImportOpts: h, computeCustomOpts: i, computeSeqOpts: m, computeRadioOpts: p, computeCheckboxOpts: b, computeColumnOpts: D } = e.getComputeMaps(), A = gt("$xegrid", null), $ = (L) => {
      const I = s.value, V = I.children || I.childrenField;
      return L[V] && L[V].length;
    }, O = (L, I, V, q) => {
      const pe = m.value.seqMethod || V.seqMethod;
      return pe ? pe({
        row: L,
        rowIndex: e.getRowIndex(L),
        $rowIndex: I,
        column: V,
        columnIndex: e.getColumnIndex(V),
        $columnIndex: q
      }) : e.getRowSeq(L);
    };
    function B(L, I) {
      const V = D.value, q = I.headerExportMethod || V.headerExportMethod;
      return q ? q({ column: I, options: L, $table: e }) : (L.original ? I.property : I.getTitle()) || "";
    }
    const E = (L) => l.isBoolean(L) ? L ? "TRUE" : "FALSE" : L, T = (L, I, V) => {
      const { isAllExpand: q, mode: U } = L, { treeConfig: pe } = t, ke = p.value, Ee = b.value, Le = s.value, Ae = D.value;
      if (Fr || (Fr = document.createElement("div")), pe) {
        const ce = Le.children || Le.childrenField, k = [], Z = /* @__PURE__ */ new Map();
        return l.eachTree(V, (re, fe, De, te, ee, se) => {
          const he = re._row || re, xe = ee && ee._row ? ee._row : ee;
          if (q || !xe || Z.has(xe) && e.isTreeExpandByRow(xe)) {
            const me = $(he), Ve = {
              _row: he,
              _level: se.length - 1,
              _hasChild: me,
              _expand: me && e.isTreeExpandByRow(he)
            };
            I.forEach((Ge, Ye) => {
              let je = "";
              const Ie = Ge.editRender || Ge.cellRender;
              let Ne = Ge.exportMethod;
              if (!Ne && Ie && Ie.name) {
                const Y = Xe.renderer.get(Ie.name);
                Y && (Ne = Y.exportMethod);
              }
              if (Ne || (Ne = Ae.exportMethod), Ne)
                je = Ne({ $table: e, row: he, column: Ge, options: L });
              else
                switch (Ge.type) {
                  case "seq":
                    je = U === "all" ? te.map((Y, ae) => ae % 2 === 0 ? Number(Y) + 1 : ".").join("") : O(he, fe, Ge, Ye);
                    break;
                  case "checkbox":
                    je = E(e.isCheckedByCheckboxRow(he)), Ve._checkboxLabel = Ee.labelField ? l.get(he, Ee.labelField) : "", Ve._checkboxDisabled = Ee.checkMethod && !Ee.checkMethod({ row: he });
                    break;
                  case "radio":
                    je = E(e.isCheckedByRadioRow(he)), Ve._radioLabel = ke.labelField ? l.get(he, ke.labelField) : "", Ve._radioDisabled = ke.checkMethod && !ke.checkMethod({ row: he });
                    break;
                  default:
                    if (L.original)
                      je = Yn(he, Ge);
                    else if (je = e.getCellLabel(he, Ge), Ge.type === "html")
                      Fr.innerHTML = je, je = Fr.innerText.trim();
                    else {
                      const Y = e.getCell(he, Ge);
                      Y && (je = Y.innerText.trim());
                    }
                }
              Ve[Ge.id] = l.toValueString(je);
            }), Z.set(he, 1), k.push(Object.assign(Ve, he));
          }
        }, { children: ce }), k;
      }
      return V.map((ce, k) => {
        const Z = {
          _row: ce
        };
        return I.forEach((re, fe) => {
          let De = "";
          const te = re.editRender || re.cellRender;
          let ee = re.exportMethod;
          if (!ee && te && te.name) {
            const se = Xe.renderer.get(te.name);
            se && (ee = se.exportMethod);
          }
          if (ee)
            De = ee({ $table: e, row: ce, column: re, options: L });
          else
            switch (re.type) {
              case "seq":
                De = U === "all" ? k + 1 : O(ce, k, re, fe);
                break;
              case "checkbox":
                De = E(e.isCheckedByCheckboxRow(ce)), Z._checkboxLabel = Ee.labelField ? l.get(ce, Ee.labelField) : "", Z._checkboxDisabled = Ee.checkMethod && !Ee.checkMethod({ row: ce });
                break;
              case "radio":
                De = E(e.isCheckedByRadioRow(ce)), Z._radioLabel = ke.labelField ? l.get(ce, ke.labelField) : "", Z._radioDisabled = ke.checkMethod && !ke.checkMethod({ row: ce });
                break;
              default:
                if (L.original)
                  De = Yn(ce, re);
                else if (De = e.getCellLabel(ce, re), re.type === "html")
                  Fr.innerHTML = De, De = Fr.innerText.trim();
                else {
                  const se = e.getCell(ce, re);
                  se && (De = se.innerText.trim());
                }
            }
          Z[re.id] = l.toValueString(De);
        }), Z;
      });
    }, y = (L) => {
      const { columns: I, dataFilterMethod: V } = L;
      let q = L.data;
      return V && (q = q.filter((U, pe) => V({ row: U, $rowIndex: pe }))), T(L, I, q);
    }, w = (L, I, V) => {
      const q = D.value, U = V.editRender || V.cellRender;
      let pe = V.footerExportMethod;
      if (!pe && U && U.name) {
        const Le = Xe.renderer.get(U.name);
        Le && (pe = Le.footerExportMethod);
      }
      pe || (pe = q.footerExportMethod);
      const ke = e.getVTColumnIndex(V);
      return pe ? pe({ $table: e, items: I, itemIndex: ke, row: I, _columnIndex: ke, column: V, options: L }) : l.toValueString(I[ke]);
    }, P = (L, I, V) => {
      let q = Fk;
      if (L.isHeader && (q += I.map((U) => Lr(B(L, U))).join(",") + cr), V.forEach((U) => {
        q += I.map((pe) => Lr(Vk(pe, U[pe.id]))).join(",") + cr;
      }), L.isFooter) {
        const { footerTableData: U } = n;
        Cs(L, U).forEach((ke) => {
          q += I.map((Ee) => Lr(w(L, ke, Ee))).join(",") + cr;
        });
      }
      return q;
    }, j = (L, I, V) => {
      let q = "";
      if (L.isHeader && (q += I.map((U) => Lr(B(L, U))).join("	") + cr), V.forEach((U) => {
        q += I.map((pe) => Lr(U[pe.id])).join("	") + cr;
      }), L.isFooter) {
        const { footerTableData: U } = n;
        Cs(L, U).forEach((ke) => {
          q += I.map((Ee) => Lr(w(L, ke, Ee))).join(",") + cr;
        });
      }
      return q;
    }, F = (L, I, V) => {
      const q = L[I], U = l.isUndefined(q) || l.isNull(q) ? V : q;
      let Le = U === "title" || (U === !0 || U === "tooltip") || U === "ellipsis";
      const { scrollXLoad: Ae, scrollYLoad: ce } = n;
      return (Ae || ce) && !Le && (Le = !0), Le;
    }, N = (L, I, V) => {
      const { id: q, border: U, treeConfig: pe, headerAlign: ke, align: Ee, footerAlign: Le, showOverflow: Ae, showHeaderOverflow: ce } = t, { isAllSelected: k, isIndeterminate: Z, mergeList: re } = n, fe = s.value, { print: De, isHeader: te, isFooter: ee, isColgroup: se, isMerge: he, colgroups: xe, original: me } = L, Ve = "check-all", Ye = [
        `<table class="${[
          "vxe-table",
          `border--${Lk(U)}`,
          De ? "is--print" : "",
          te ? "is--header" : ""
        ].filter((Ie) => Ie).join(" ")}" border="0" cellspacing="0" cellpadding="0">`,
        `<colgroup>${I.map((Ie) => `<col style="width:${Ie.renderWidth}px">`).join("")}</colgroup>`
      ];
      if (te && (Ye.push("<thead>"), se && !me ? xe.forEach((Ie) => {
        Ye.push(`<tr>${Ie.map((Ne) => {
          const Y = Ne.headerAlign || Ne.align || ke || Ee, ae = F(Ne, "showHeaderOverflow", ce) ? ["col--ellipsis"] : [], Re = B(L, Ne);
          let Se = 0, _ = 0;
          l.eachTree([Ne], (be) => {
            (!be.childNodes || !Ne.childNodes.length) && _++, Se += be.renderWidth;
          }, { children: "childNodes" });
          const G = Se - _;
          return Y && ae.push(`col--${Y}`), Ne.type === "checkbox" ? `<th class="${ae.join(" ")}" colspan="${Ne._colSpan}" rowspan="${Ne._rowSpan}"><div ${De ? "" : `style="width: ${G}px"`}><input type="checkbox" class="${Ve}" ${k ? "checked" : ""}><span>${Re}</span></div></th>` : `<th class="${ae.join(" ")}" colspan="${Ne._colSpan}" rowspan="${Ne._rowSpan}" title="${Re}"><div ${De ? "" : `style="width: ${G}px"`}><span>${Xt(Re, !0)}</span></div></th>`;
        }).join("")}</tr>`);
      }) : Ye.push(`<tr>${I.map((Ie) => {
        const Ne = Ie.headerAlign || Ie.align || ke || Ee, Y = F(Ie, "showHeaderOverflow", ce) ? ["col--ellipsis"] : [], ae = B(L, Ie);
        return Ne && Y.push(`col--${Ne}`), Ie.type === "checkbox" ? `<th class="${Y.join(" ")}"><div ${De ? "" : `style="width: ${Ie.renderWidth}px"`}><input type="checkbox" class="${Ve}" ${k ? "checked" : ""}><span>${ae}</span></div></th>` : `<th class="${Y.join(" ")}" title="${ae}"><div ${De ? "" : `style="width: ${Ie.renderWidth}px"`}><span>${Xt(ae, !0)}</span></div></th>`;
      }).join("")}</tr>`), Ye.push("</thead>")), V.length && (Ye.push("<tbody>"), pe ? V.forEach((Ie) => {
        Ye.push("<tr>" + I.map((Ne) => {
          const Y = Ne.align || Ee, ae = F(Ne, "showOverflow", Ae) ? ["col--ellipsis"] : [], Re = Ie[Ne.id];
          if (Y && ae.push(`col--${Y}`), Ne.treeNode) {
            let Se = "";
            return Ie._hasChild && (Se = `<i class="${Ie._expand ? "vxe-table--tree-fold-icon" : "vxe-table--tree-unfold-icon"}"></i>`), ae.push("vxe-table--tree-node"), Ne.type === "radio" ? `<td class="${ae.join(" ")}" title="${Re}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ie._level * fe.indent}px"><div class="vxe-table--tree-icon-wrapper">${Se}</div><div class="vxe-table--tree-cell"><input type="radio" name="radio_${q}" ${Ie._radioDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._radioLabel}</span></div></div></div></td>` : Ne.type === "checkbox" ? `<td class="${ae.join(" ")}" title="${Re}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ie._level * fe.indent}px"><div class="vxe-table--tree-icon-wrapper">${Se}</div><div class="vxe-table--tree-cell"><input type="checkbox" ${Ie._checkboxDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._checkboxLabel}</span></div></div></div></td>` : `<td class="${ae.join(" ")}" title="${Re}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${Ie._level * fe.indent}px"><div class="vxe-table--tree-icon-wrapper">${Se}</div><div class="vxe-table--tree-cell">${Re}</div></div></div></td>`;
          }
          return Ne.type === "radio" ? `<td class="${ae.join(" ")}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><input type="radio" name="radio_${q}" ${Ie._radioDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._radioLabel}</span></div></td>` : Ne.type === "checkbox" ? `<td class="${ae.join(" ")}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><input type="checkbox" ${Ie._checkboxDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._checkboxLabel}</span></div></td>` : `<td class="${ae.join(" ")}" title="${Re}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}>${Xt(Re, !0)}</div></td>`;
        }).join("") + "</tr>");
      }) : V.forEach((Ie) => {
        Ye.push("<tr>" + I.map((Ne) => {
          const Y = Ne.align || Ee, ae = F(Ne, "showOverflow", Ae) ? ["col--ellipsis"] : [], Re = Ie[Ne.id];
          let Se = 1, _ = 1;
          if (he && re.length) {
            const G = e.getVTRowIndex(Ie._row), be = e.getVTColumnIndex(Ne), _e = Lp(re, G, be);
            if (_e) {
              const { rowspan: Be, colspan: qe } = _e;
              if (!Be || !qe)
                return "";
              Be > 1 && (Se = Be), qe > 1 && (_ = qe);
            }
          }
          return Y && ae.push(`col--${Y}`), Ne.type === "radio" ? `<td class="${ae.join(" ")}" rowspan="${Se}" colspan="${_}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><input type="radio" name="radio_${q}" ${Ie._radioDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._radioLabel}</span></div></td>` : Ne.type === "checkbox" ? `<td class="${ae.join(" ")}" rowspan="${Se}" colspan="${_}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}><input type="checkbox" ${Ie._checkboxDisabled ? "disabled " : ""}${Pr(Re) ? "checked" : ""}><span>${Ie._checkboxLabel}</span></div></td>` : `<td class="${ae.join(" ")}" rowspan="${Se}" colspan="${_}" title="${Re}"><div ${De ? "" : `style="width: ${Ne.renderWidth}px"`}>${Xt(Re, !0)}</div></td>`;
        }).join("") + "</tr>");
      }), Ye.push("</tbody>")), ee) {
        const { footerTableData: Ie } = n, Ne = Cs(L, Ie);
        Ne.length && (Ye.push("<tfoot>"), Ne.forEach((Y) => {
          Ye.push(`<tr>${I.map((ae) => {
            const Re = ae.footerAlign || ae.align || Le || Ee, Se = F(ae, "showOverflow", Ae) ? ["col--ellipsis"] : [], _ = w(L, Y, ae);
            return Re && Se.push(`col--${Re}`), `<td class="${Se.join(" ")}" title="${_}"><div ${De ? "" : `style="width: ${ae.renderWidth}px"`}>${Xt(_, !0)}</div></td>`;
          }).join("")}</tr>`);
        }), Ye.push("</tfoot>"));
      }
      const je = !k && Z ? `<script>(function(){var a=document.querySelector(".${Ve}");if(a){a.indeterminate=true}})()<\/script>` : "";
      return Ye.push("</table>", je), De ? Ye.join("") : nh(L, Ye.join(""));
    }, W = (L, I, V) => {
      let q = [
        '<?xml version="1.0"?>',
        '<?mso-application progid="Excel.Sheet"?>',
        '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
        '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">',
        "<Version>16.00</Version>",
        "</DocumentProperties>",
        '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
        "<WindowHeight>7920</WindowHeight>",
        "<WindowWidth>21570</WindowWidth>",
        "<WindowTopX>32767</WindowTopX>",
        "<WindowTopY>32767</WindowTopY>",
        "<ProtectStructure>False</ProtectStructure>",
        "<ProtectWindows>False</ProtectWindows>",
        "</ExcelWorkbook>",
        `<Worksheet ss:Name="${L.sheetName}">`,
        "<Table>",
        I.map((U) => `<Column ss:Width="${U.renderWidth}"/>`).join("")
      ].join("");
      if (L.isHeader && (q += `<Row>${I.map((U) => `<Cell><Data ss:Type="String">${B(L, U)}</Data></Cell>`).join("")}</Row>`), V.forEach((U) => {
        q += "<Row>" + I.map((pe) => `<Cell><Data ss:Type="String">${U[pe.id]}</Data></Cell>`).join("") + "</Row>";
      }), L.isFooter) {
        const { footerTableData: U } = n;
        Cs(L, U).forEach((ke) => {
          q += `<Row>${I.map((Ee) => `<Cell><Data ss:Type="String">${w(L, ke, Ee)}</Data></Cell>`).join("")}</Row>`;
        });
      }
      return `${q}</Table></Worksheet></Workbook>`;
    }, de = (L, I, V) => {
      if (I.length)
        switch (L.type) {
          case "csv":
            return P(L, I, V);
          case "txt":
            return j(L, I, V);
          case "html":
            return N(L, I, V);
          case "xml":
            return W(L, I, V);
        }
      return "";
    }, we = (L, I) => {
      const { filename: V, type: q, download: U } = L;
      if (!U) {
        const pe = Fa(I, L);
        return Promise.resolve({ type: q, content: I, blob: pe });
      }
      Ns({ filename: V, type: q, content: I }).then(() => {
        L.message !== !1 && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: v.i18n("vxe.table.expSuccess"), status: "success" }));
      });
    }, ve = (L) => {
      const { remote: I, columns: V, colgroups: q, exportMethod: U, afterExportMethod: pe } = L;
      return new Promise((ke) => {
        if (I) {
          const Ee = { options: L, $table: e, $grid: A };
          ke(U ? U(Ee) : Ee);
        } else {
          const Ee = y(L);
          ke(e.preventEvent(null, "event.export", { options: L, columns: V, colgroups: q, datas: Ee }, () => we(L, de(L, V, Ee))));
        }
      }).then((ke) => (pd(V), L.print || pe && pe({ status: !0, options: L, $table: e, $grid: A }), Object.assign({ status: !0 }, ke))).catch(() => {
        pd(V), L.print || pe && pe({ status: !1, options: L, $table: e, $grid: A });
        const ke = { status: !1 };
        return Promise.reject(ke);
      });
    }, oe = (L, I) => {
      const { tableFullColumn: V, _importResolve: q, _importReject: U } = o;
      let pe = { fields: [], rows: [] };
      switch (I.type) {
        case "csv":
          pe = Ak(V, L);
          break;
        case "txt":
          pe = _k(V, L);
          break;
        case "html":
          pe = Bk(V, L);
          break;
        case "xml":
          pe = Hk(V, L);
          break;
      }
      const { fields: ke, rows: Ee } = pe;
      Wk(V, ke) ? e.createData(Ee).then((Ae) => {
        let ce;
        return I.mode === "insert" ? ce = e.insert(Ae) : ce = e.reloadData(Ae), I.message !== !1 && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: v.i18n("vxe.table.impSuccess", [Ee.length]), status: "success" })), ce.then(() => {
          q && q({ status: !0 });
        });
      }) : I.message !== !1 && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: v.i18n("vxe.error.impFields"), status: "error" }), U && U({ status: !1 }));
    }, ie = (L, I) => {
      const { importMethod: V, afterImportMethod: q } = I, { type: U, filename: pe } = Ca(L);
      if (!V && !l.includes(Xe.globalConfs.importTypes, U)) {
        I.message !== !1 && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: v.i18n("vxe.error.notType", [U]), status: "error" }));
        const Ee = { status: !1 };
        return Promise.reject(Ee);
      }
      return new Promise((Ee, Le) => {
        const Ae = (k) => {
          Ee(k), o._importResolve = null, o._importReject = null;
        }, ce = (k) => {
          Le(k), o._importResolve = null, o._importReject = null;
        };
        if (o._importResolve = Ae, o._importReject = ce, window.FileReader) {
          const k = Object.assign({ mode: "insert" }, I, { type: U, filename: pe });
          if (k.remote)
            V ? Promise.resolve(V({ file: L, options: k, $table: e })).then(() => {
              Ae({ status: !0 });
            }).catch(() => {
              Ae({ status: !0 });
            }) : Ae({ status: !0 });
          else {
            const { tableFullColumn: Z } = o;
            e.preventEvent(null, "event.import", { file: L, options: k, columns: Z }, () => {
              const re = new FileReader();
              re.onerror = () => {
                ot("vxe.error.notType", [U]), ce({ status: !1 });
              }, re.onload = (fe) => {
                oe(fe.target.result, k);
              }, re.readAsText(L, k.encoding || "UTF-8");
            });
          }
        } else
          process.env.NODE_ENV === "development" && ot("vxe.error.notExp"), Ae({ status: !0 });
      }).then(() => {
        q && q({ status: !0, options: I, $table: e });
      }).catch((Ee) => (q && q({ status: !1, options: I, $table: e }), Promise.reject(Ee)));
    }, le = (L, I) => {
      const { treeConfig: V, showHeader: q, showFooter: U } = t, { initStore: pe, mergeList: ke, isGroup: Ee, footerTableData: Le, exportStore: Ae, exportParams: ce } = n, { collectColumn: k } = o, Z = V, re = i.value, fe = e.getCheckboxRecords(), De = !!Le.length, te = !Z && ke.length, ee = Object.assign({ message: !0, isHeader: q, isFooter: U }, L), se = ee.types || Xe.globalConfs.exportTypes, he = ee.modes, xe = re.checkMethod, me = k.slice(0), { columns: Ve } = ee, Ge = se.map((je) => ({
        value: je,
        label: `vxe.export.types.${je}`
      })), Ye = he.map((je) => ({
        value: je,
        label: `vxe.export.modes.${je}`
      }));
      return l.eachTree(me, (je, Ie, Ne, Y, ae) => {
        (je.children && je.children.length || ud(je)) && (je.checked = Ve ? Ve.some((Se) => {
          if (ys(Se))
            return je === Se;
          if (l.isString(Se))
            return je.field === Se;
          {
            const _ = Se.id || Se.colId, G = Se.type, be = Se.property || Se.field;
            if (_)
              return je.id === _;
            if (be && G)
              return je.property === be && je.type === G;
            if (be)
              return je.property === be;
            if (G)
              return je.type === G;
          }
          return !1;
        }) : je.visible, je.halfChecked = !1, je.disabled = ae && ae.disabled || (xe ? !xe({ column: je }) : !1));
      }), Object.assign(Ae, {
        columns: me,
        typeList: Ge,
        modeList: Ye,
        hasFooter: De,
        hasMerge: te,
        hasTree: Z,
        isPrint: I,
        hasColgroup: Ee,
        visible: !0
      }), Object.assign(ce, {
        mode: fe.length ? "selected" : "current"
      }, ee), he.indexOf(ce.mode) === -1 && (ce.mode = he[0]), se.indexOf(ce.type) === -1 && (ce.type = se[0]), pe.export = !0, ne();
    }, Q = {
      /**
       * 导出文件，支持 csv/html/xml/txt
       * 如果是树表格，则默认是导出所有节点
       * 如果是启用了虚拟滚动，则只能导出数据源，可以配合 dataFilterMethod 函数自行转换数据
       * @param {Object} options 参数
       */
      exportData(L) {
        const { treeConfig: I } = t, { isGroup: V, tableGroupColumn: q } = n, { tableFullColumn: U, afterFullData: pe } = o, ke = c.value, Ee = s.value, Le = Object.assign({
          // filename: '',
          // sheetName: '',
          // original: false,
          // message: false,
          isHeader: !0,
          isFooter: !0,
          isColgroup: !0,
          // isMerge: false,
          // isAllExpand: false,
          download: !0,
          type: "csv",
          mode: "current"
          // data: null,
          // remote: false,
          // dataFilterMethod: null,
          // footerFilterMethod: null,
          // exportMethod: null,
          // columnFilterMethod: null,
          // beforeExportMethod: null,
          // afterExportMethod: null
        }, ke, {
          print: !1
        }, L), { type: Ae, mode: ce, columns: k, original: Z, beforeExportMethod: re } = Le;
        let fe = [];
        const De = k && k.length ? k : null;
        let te = Le.columnFilterMethod;
        !De && !te && (te = Z ? ({ column: se }) => se.property : ({ column: se }) => ud(se)), De ? (Le._isCustomColumn = !0, fe = l.searchTree(l.mapTree(De, (se) => {
          let he;
          if (se) {
            if (ys(se))
              he = se;
            else if (l.isString(se))
              he = e.getColumnByField(se);
            else {
              const xe = se.id || se.colId, me = se.type, Ve = se.property || se.field;
              xe ? he = e.getColumnById(xe) : Ve && me ? he = U.find((Ge) => Ge.property === Ve && Ge.type === me) : Ve ? he = e.getColumnByField(Ve) : me && (he = U.find((Ge) => Ge.type === me));
            }
            return he || {};
          }
        }, {
          children: "childNodes",
          mapChildren: "_children"
        }), (se, he) => ys(se) && (!te || te({ column: se, $columnIndex: he })), {
          children: "_children",
          mapChildren: "childNodes",
          original: !0
        })) : fe = l.searchTree(V ? q : U, (se, he) => se.visible && (!te || te({ column: se, $columnIndex: he })), { children: "children", mapChildren: "childNodes", original: !0 });
        const ee = [];
        if (l.eachTree(fe, (se) => {
          se.children && se.children.length || ee.push(se);
        }, { children: "childNodes" }), Le.columns = ee, Le.colgroups = Pk(fe), Le.filename || (Le.filename = v.i18n(Le.original ? "vxe.table.expOriginFilename" : "vxe.table.expFilename", [l.toDateString(Date.now(), "yyyyMMddHHmmss")])), Le.sheetName || (Le.sheetName = document.title), !Le.exportMethod && !l.includes(Xe.globalConfs.exportTypes, Ae)) {
          process.env.NODE_ENV === "development" && ot("vxe.error.notType", [Ae]);
          const se = { status: !1 };
          return Promise.reject(se);
        }
        if (Le.print || re && re({ options: Le, $table: e, $grid: A }), !Le.data) {
          if (Le.data = pe, ce === "selected") {
            const se = e.getCheckboxRecords();
            ["html", "pdf"].indexOf(Ae) > -1 && I ? Le.data = l.searchTree(e.getTableData().fullData, (he) => e.findRowIndexOf(se, he) > -1, Object.assign({}, Ee, { data: "_row" })) : Le.data = se;
          } else if (ce === "all" && (process.env.NODE_ENV === "development" && (A || lt("vxe.error.errProp", ["all", "mode=current,selected"])), A && !Le.remote)) {
            const { reactData: se } = A, { computeProxyOpts: he } = A.getComputeMaps(), xe = he.value, { beforeQueryAll: me, afterQueryAll: Ve, ajax: Ge = {}, props: Ye = {} } = xe, je = Ge.queryAll;
            if (process.env.NODE_ENV === "development" && (je || lt("vxe.error.notFunc", ["proxy-config.ajax.queryAll"])), je) {
              const Ie = {
                $table: e,
                $grid: A,
                sort: se.sortData,
                filters: se.filterData,
                form: se.formData,
                target: je,
                options: Le
              };
              return Promise.resolve((me || je)(Ie)).catch((Ne) => Ne).then((Ne) => (Le.data = (Ye.list ? l.get(Ne, Ye.list) : Ne) || [], Ve && Ve(Ie), ve(Le)));
            }
          }
        }
        return ve(Le);
      },
      importByFile(L, I) {
        const V = Object.assign({}, I), { beforeImportMethod: q } = V;
        return q && q({ options: V, $table: e }), ie(L, V);
      },
      importData(L) {
        const I = h.value, V = Object.assign({
          types: Xe.globalConfs.importTypes
          // beforeImportMethod: null,
          // afterImportMethod: null
        }, I, L), { beforeImportMethod: q, afterImportMethod: U } = V;
        return q && q({ options: V, $table: e }), ks(V).catch((pe) => (U && U({ status: !1, options: V, $table: e }), Promise.reject(pe))).then((pe) => {
          const { file: ke } = pe;
          return ie(ke, V);
        });
      },
      saveFile(L) {
        return Ns(L);
      },
      readFile(L) {
        return ks(L);
      },
      print(L) {
        const I = u.value, V = Object.assign({
          original: !1
          // beforePrintMethod
        }, I, L, {
          type: "html",
          download: !1,
          remote: !1,
          print: !0
        });
        return V.sheetName || (V.sheetName = document.title), new Promise((q) => {
          V.content ? q(Ji(e, V, V.content)) : q(Q.exportData(V).then(({ content: U }) => Ji(e, V, U)));
        });
      },
      openImport(L) {
        const { treeConfig: I, importConfig: V } = t, { initStore: q, importStore: U, importParams: pe } = n, ke = h.value, Ee = Object.assign({ mode: "insert", message: !0, types: Xe.globalConfs.importTypes }, L, ke), { types: Le } = Ee;
        if (!!I) {
          Ee.message && Xe.modal.message({ content: v.i18n("vxe.error.treeNotImp"), status: "error" });
          return;
        }
        V || ot("vxe.error.reqProp", ["import-config"]);
        const ce = Le.map((Z) => ({
          value: Z,
          label: `vxe.export.types.${Z}`
        })), k = Ee.modes.map((Z) => ({
          value: Z,
          label: `vxe.import.modes.${Z}`
        }));
        Object.assign(U, {
          file: null,
          type: "",
          filename: "",
          modeList: k,
          typeList: ce,
          visible: !0
        }), Object.assign(pe, Ee), q.import = !0;
      },
      openExport(L) {
        const I = c.value;
        process.env.NODE_ENV === "development" && (t.exportConfig || ot("vxe.error.reqProp", ["export-config"])), le(Object.assign({}, I, L));
      },
      openPrint(L) {
        const I = u.value;
        process.env.NODE_ENV === "development" && (t.printConfig || ot("vxe.error.reqProp", ["print-config"])), le(Object.assign({}, I, L), !0);
      }
    };
    return Q;
  },
  setupGrid(e) {
    return e.extendTableMethods(zk);
  }
}, ih = (e) => {
  const t = Object.assign({}, e, {
    type: "html"
  });
  Ji(null, t, t.content);
}, Pa = {
  ExportPanel: wl,
  ImportPanel: Ol,
  install(e) {
    Xe.saveFile = Ns, Xe.readFile = ks, Xe.print = ih, Xe.setup({
      export: {
        types: {
          csv: 0,
          html: 0,
          xml: 0,
          txt: 0
        }
      }
    }), Xe.hooks.add("$tableExport", jk), e.component(wl.name, wl), e.component(Ol.name, Ol);
  }
}, qk = Pa;
Nt.component(wl.name, wl);
Nt.component(Ol.name, Ol);
function Gk(e, t) {
  let n = 0, o = 0;
  const s = !Ln.firefox && To(e, "vxe-checkbox--label");
  if (s) {
    const u = getComputedStyle(e);
    n -= l.toNumber(u.paddingTop), o -= l.toNumber(u.paddingLeft);
  }
  for (; e && e !== t; )
    if (n += e.offsetTop, o += e.offsetLeft, e = e.offsetParent, s) {
      const u = getComputedStyle(e);
      n -= l.toNumber(u.paddingTop), o -= l.toNumber(u.paddingLeft);
    }
  return { offsetTop: n, offsetLeft: o };
}
const Yk = {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refElem: s } = e.getRefMaps(), { computeEditOpts: u, computeCheckboxOpts: c, computeMouseOpts: h, computeTreeOpts: i } = e.getComputeMaps();
    function m(A, $, O) {
      let B = 0, E = [];
      const T = O > 0, y = O > 0 ? O : Math.abs(O) + $.offsetHeight, { scrollYLoad: w } = n, { afterFullData: P, scrollYStore: j } = o;
      if (w) {
        const F = e.getVTRowIndex(A.row);
        T ? E = P.slice(F, F + Math.ceil(y / j.rowHeight)) : E = P.slice(F - Math.floor(y / j.rowHeight) + 1, F + 1);
      } else {
        const F = T ? "next" : "previous";
        for (; $ && B < y; ) {
          const N = e.getRowNode($);
          N && (E.push(N.item), B += $.offsetHeight, $ = $[`${F}ElementSibling`]);
        }
      }
      return E;
    }
    const p = (A, $) => {
      const { column: O, cell: B } = $;
      if (O.type === "checkbox") {
        const E = s.value, { elemStore: T } = o, y = A.clientX, w = A.clientY, P = T[`${O.fixed || "main"}-body-wrapper`] || T["main-body-wrapper"], j = P ? P.value : null;
        if (!j)
          return;
        const F = j.querySelector(".vxe-table--checkbox-range"), N = document.onmousemove, W = document.onmouseup, de = B.parentNode, we = e.getCheckboxRecords();
        let ve = [];
        const oe = 1, ie = Gk(A.target, j), le = ie.offsetTop + A.offsetY, Q = ie.offsetLeft + A.offsetX, L = j.scrollTop, I = de.offsetHeight;
        let V = null, q = !1, U = 1;
        const pe = (Ae, ce) => {
          e.dispatchEvent(`checkbox-range-${Ae}`, { records: e.getCheckboxRecords(), reserves: e.getCheckboxReserveRecords() }, ce);
        }, ke = (Ae) => {
          const { clientX: ce, clientY: k } = Ae, Z = ce - y, re = k - w + (j.scrollTop - L);
          let fe = Math.abs(re), De = Math.abs(Z), te = le, ee = Q;
          re < oe ? (te += re, te < oe && (te = oe, fe = le)) : fe = Math.min(fe, j.scrollHeight - le - oe), Z < oe ? (ee += Z, De > Q && (ee = oe, De = Q)) : De = Math.min(De, j.clientWidth - Q - oe), F.style.height = `${fe}px`, F.style.width = `${De}px`, F.style.left = `${ee}px`, F.style.top = `${te}px`, F.style.display = "block";
          const se = m($, de, re < oe ? -fe : fe);
          fe > 10 && se.length !== ve.length && (ve = se, Ae.ctrlKey ? se.forEach((he) => {
            e.handleSelectRow({ row: he }, we.indexOf(he) === -1);
          }) : (e.setAllCheckboxRow(!1), e.handleCheckedCheckboxRow(se, !0, !1)), pe("change", Ae));
        }, Ee = () => {
          clearTimeout(V), V = null;
        }, Le = (Ae) => {
          Ee(), V = setTimeout(() => {
            if (V) {
              const { scrollLeft: ce, scrollTop: k, clientHeight: Z, scrollHeight: re } = j, fe = Math.ceil(U * 50 / I);
              q ? k + Z < re ? (e.scrollTo(ce, k + fe), Le(Ae), ke(Ae)) : Ee() : k ? (e.scrollTo(ce, k - fe), Le(Ae), ke(Ae)) : Ee();
            }
          }, 50);
        };
        wo(E, "drag--range"), document.onmousemove = (Ae) => {
          Ae.preventDefault(), Ae.stopPropagation();
          const { clientY: ce } = Ae, { boundingTop: k } = uo(j);
          ce < k ? (q = !1, U = k - ce, V || Le(Ae)) : ce > k + j.clientHeight ? (q = !0, U = ce - k - j.clientHeight, V || Le(Ae)) : V && Ee(), ke(Ae);
        }, document.onmouseup = (Ae) => {
          Ee(), Pn(E, "drag--range"), F.removeAttribute("style"), document.onmousemove = N, document.onmouseup = W, pe("end", Ae);
        }, pe("start", A);
      }
    }, b = (A, $) => {
      const { editConfig: O, checkboxConfig: B, mouseConfig: E } = t, T = c.value, y = h.value, w = u.value;
      if (E && y.area && e.handleCellAreaEvent)
        return e.handleCellAreaEvent(A, $);
      B && T.range && p(A, $), E && y.selected && (!O || w.mode === "cell") && e.handleSelected($, A);
    };
    return {
      // 处理 Tab 键移动
      moveTabSelected(A, $, O) {
        const { editConfig: B } = t, { afterFullData: E, visibleColumn: T } = o, y = u.value;
        let w, P, j;
        const F = Object.assign({}, A), N = e.getVTRowIndex(F.row), W = e.getVTColumnIndex(F.column);
        O.preventDefault(), $ ? W <= 0 ? N > 0 && (P = N - 1, w = E[P], j = T.length - 1) : j = W - 1 : W >= T.length - 1 ? N < E.length - 1 && (P = N + 1, w = E[P], j = 0) : j = W + 1;
        const de = T[j];
        de && (w ? (F.rowIndex = P, F.row = w) : F.rowIndex = N, F.columnIndex = j, F.column = de, F.cell = e.getCell(F.row, F.column), B ? (y.trigger === "click" || y.trigger === "dblclick") && (y.mode === "row" ? e.handleActived(F, O) : e.scrollToRow(F.row, F.column).then(() => e.handleSelected(F, O))) : e.scrollToRow(F.row, F.column).then(() => e.handleSelected(F, O)));
      },
      // 处理当前行方向键移动
      moveCurrentRow(A, $, O) {
        const { treeConfig: B } = t, { currentRow: E } = n, { afterFullData: T } = o, y = i.value, w = y.children || y.childrenField;
        let P;
        if (O.preventDefault(), E)
          if (B) {
            const { index: j, items: F } = l.findTree(T, (N) => N === E, { children: w });
            A && j > 0 ? P = F[j - 1] : $ && j < F.length - 1 && (P = F[j + 1]);
          } else {
            const j = e.getVTRowIndex(E);
            A && j > 0 ? P = T[j - 1] : $ && j < T.length - 1 && (P = T[j + 1]);
          }
        else
          P = T[0];
        if (P) {
          const j = {
            $table: e,
            row: P,
            rowIndex: e.getRowIndex(P),
            $rowIndex: e.getVMRowIndex(P)
          };
          e.scrollToRow(P).then(() => e.triggerCurrentRowEvent(O, j));
        }
      },
      // 处理可编辑方向键移动
      moveSelected(A, $, O, B, E, T) {
        const { afterFullData: y, visibleColumn: w } = o, P = Object.assign({}, A), j = e.getVTRowIndex(P.row), F = e.getVTColumnIndex(P.column);
        T.preventDefault(), O && j > 0 ? (P.rowIndex = j - 1, P.row = y[P.rowIndex]) : E && j < y.length - 1 ? (P.rowIndex = j + 1, P.row = y[P.rowIndex]) : $ && F ? (P.columnIndex = F - 1, P.column = w[P.columnIndex]) : B && F < w.length - 1 && (P.columnIndex = F + 1, P.column = w[P.columnIndex]), e.scrollToRow(P.row, P.column).then(() => {
          P.cell = e.getCell(P.row, P.column), e.handleSelected(P, T);
        });
      },
      /**
       * 表头单元格按下事件
       */
      triggerHeaderCellMousedownEvent(A, $) {
        const { mouseConfig: O } = t, B = h.value;
        if (O && B.area && e.handleHeaderCellAreaEvent) {
          const E = A.currentTarget, T = yt(A, E, "vxe-cell--sort").flag, y = yt(A, E, "vxe-cell--filter").flag;
          e.handleHeaderCellAreaEvent(A, Object.assign({ cell: E, triggerSort: T, triggerFilter: y }, $));
        }
        e.focus(), e.closeMenu && e.closeMenu();
      },
      /**
       * 单元格按下事件
       */
      triggerCellMousedownEvent(A, $) {
        const O = A.currentTarget;
        $.cell = O, b(A, $), e.focus(), e.closeFilter(), e.closeMenu && e.closeMenu();
      }
    };
  }
}, La = {
  install() {
    Xe.hooks.add("$tableKeyboard", Yk);
  }
}, Uk = La;
let vl = class {
  constructor(t) {
    Object.assign(this, {
      $options: t,
      required: t.required,
      min: t.min,
      max: t.max,
      type: t.type,
      pattern: t.pattern,
      validator: t.validator,
      trigger: t.trigger,
      maxWidth: t.maxWidth
    });
  }
  /**
   * 获取校验不通过的消息
   * 支持国际化翻译
   */
  get content() {
    return qt(this.$options.content || this.$options.message);
  }
  get message() {
    return this.content;
  }
};
const Kk = ["fullValidate", "validate", "clearValidate"], Xk = {
  setupTable(e) {
    const { props: t, reactData: n, internalData: o } = e, { refValidTooltip: s } = e.getRefMaps(), { computeValidOpts: u, computeTreeOpts: c, computeEditOpts: h } = e.getComputeMaps();
    let i = {}, m = {}, p;
    const b = (O) => new Promise((B) => {
      u.value.autoPos === !1 ? (e.dispatchEvent("valid-error", O, null), B()) : e.handleActived(O, { type: "valid-error", trigger: "call" }).then(() => {
        B(m.showValidTooltip(O));
      });
    }), D = (O) => {
      if (u.value.msgMode === "single") {
        const E = Object.keys(O), T = O;
        if (E.length) {
          const y = E[0];
          T[y] = O[y];
        }
        return T;
      }
      return O;
    }, A = (O, B, E) => {
      const T = {}, { editRules: y, treeConfig: w } = t, { afterFullData: P, visibleColumn: j } = o, F = c.value, N = F.children || F.childrenField, W = u.value;
      let de;
      O === !0 ? de = P : O && (l.isFunction(O) ? B = O : de = l.isArray(O) ? O : [O]), de || (e.getInsertRecords ? de = e.getInsertRecords().concat(e.getUpdateRecords()) : de = []);
      const we = [];
      o._lastCallTime = Date.now(), p = !1, i.clearValidate();
      const ve = {};
      if (y) {
        const oe = e.getColumns(), ie = (le) => {
          if (E || !p) {
            const Q = [];
            oe.forEach((L) => {
              (E || !p) && l.has(y, L.property) && Q.push(m.validCellRules("all", le, L).catch(({ rule: I, rules: V }) => {
                const q = {
                  rule: I,
                  rules: V,
                  rowIndex: e.getRowIndex(le),
                  row: le,
                  columnIndex: e.getColumnIndex(L),
                  column: L,
                  field: L.property,
                  $table: e
                };
                if (T[L.property] || (T[L.property] = []), ve[`${We(e, le)}:${L.id}`] = {
                  column: L,
                  row: le,
                  rule: I,
                  content: I.content
                }, T[L.property].push(q), !E)
                  return p = !0, Promise.reject(q);
              }));
            }), we.push(Promise.all(Q));
          }
        };
        return w ? l.eachTree(de, ie, { children: N }) : de.forEach(ie), Promise.all(we).then(() => {
          const le = Object.keys(T);
          return n.validErrorMaps = D(ve), ne().then(() => {
            if (le.length)
              return Promise.reject(T[le[0]][0]);
            B && B();
          });
        }).catch((le) => new Promise((Q, L) => {
          const I = () => {
            ne(() => {
              B ? (B(T), Q()) : v.validToReject === "obsolete" ? L(T) : Q(T);
            });
          }, V = () => {
            le.cell = e.getCell(le.row, le.column), $p(le.cell), b(le).then(I);
          };
          if (W.autoPos === !1)
            I();
          else {
            const q = le.row, U = le.column, pe = P.indexOf(q), ke = j.indexOf(U), Ee = pe > 0 ? P[pe - 1] : q, Le = ke > 0 ? j[pe - 1] : U;
            e.scrollToRow(Ee, Le).then(V);
          }
        }));
      } else
        n.validErrorMaps = {};
      return ne().then(() => {
        B && B();
      });
    };
    i = {
      /**
       * 完整校验，和 validate 的区别就是会给有效数据中的每一行进行校验
       */
      fullValidate(O, B) {
        return process.env.NODE_ENV === "development" && l.isFunction(B) && lt("vxe.error.notValidators", ["fullValidate(rows, callback)", "fullValidate(rows)"]), A(O, B, !0);
      },
      /**
       * 快速校验，如果存在记录不通过的记录，则返回不再继续校验（异步校验除外）
       */
      validate(O, B) {
        return process.env.NODE_ENV === "development" && l.isFunction(B) && lt("vxe.error.notValidators", ["validate(rows, callback)", "validate(rows)"]), A(O, B);
      },
      clearValidate(O, B) {
        const { validErrorMaps: E } = n, T = s.value, y = u.value, w = l.isArray(O) ? O : O ? [O] : [], P = l.isArray(B) ? B : (B ? [B] : []).map((F) => Cn(e, F));
        let j = {};
        if (T && T.reactData.visible && T.close(), y.msgMode === "single")
          return n.validErrorMaps = {}, ne();
        if (w.length && P.length)
          j = Object.assign({}, E), w.forEach((F) => {
            P.forEach((N) => {
              const W = `${We(e, F)}:${N.id}`;
              j[W] && delete j[W];
            });
          });
        else if (w.length) {
          const F = w.map((N) => `${We(e, N)}`);
          l.each(E, (N, W) => {
            F.indexOf(W.split(":")[0]) > -1 && (j[W] = N);
          });
        } else if (P.length) {
          const F = P.map((N) => `${N.id}`);
          l.each(E, (N, W) => {
            F.indexOf(W.split(":")[1]) > -1 && (j[W] = N);
          });
        }
        return n.validErrorMaps = j, ne();
      }
    };
    const $ = (O, B) => {
      const { type: E, min: T, max: y, pattern: w } = O, P = E === "number", j = P ? l.toNumber(B) : l.getSize(B);
      return !!(P && isNaN(B) || !l.eqNull(T) && j < l.toNumber(T) || !l.eqNull(y) && j > l.toNumber(y) || w && !(l.isRegExp(w) ? w : new RegExp(w)).test(B));
    };
    return m = {
      /**
       * 校验数据
       * 按表格行、列顺序依次校验（同步或异步）
       * 校验规则根据索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列
       * 如果校验失败则，触发回调或者Promise<不通过列的错误消息>
       * 如果是传回调方式这返回一个校验不通过列的错误消息
       *
       * rule 配置：
       *  required=Boolean 是否必填
       *  min=Number 最小长度
       *  max=Number 最大长度
       *  validator=Function({ cellValue, rule, rules, row, column, rowIndex, columnIndex }) 自定义校验，接收一个 Promise
       *  trigger=blur|change 触发方式（除非特殊场景，否则默认为空就行）
       */
      validCellRules(O, B, E, T) {
        const { editRules: y } = t, { field: w } = E, P = [], j = [];
        if (w && y) {
          const F = l.get(y, w);
          if (F) {
            const N = l.isUndefined(T) ? l.get(B, w) : T;
            F.forEach((W) => {
              const { type: de, trigger: we, required: ve, validator: oe } = W;
              if (O === "all" || !we || O === we)
                if (oe) {
                  const ie = {
                    cellValue: N,
                    rule: W,
                    rules: F,
                    row: B,
                    rowIndex: e.getRowIndex(B),
                    column: E,
                    columnIndex: e.getColumnIndex(E),
                    field: E.field,
                    $table: e,
                    $grid: e.xegrid
                  };
                  let le;
                  if (l.isString(oe)) {
                    const Q = Xe.validators.get(oe);
                    Q ? Q.cellValidatorMethod ? le = Q.cellValidatorMethod(ie) : process.env.NODE_ENV === "development" && lt("vxe.error.notValidators", [oe]) : process.env.NODE_ENV === "development" && ot("vxe.error.notValidators", [oe]);
                  } else
                    le = oe(ie);
                  le && (l.isError(le) ? (p = !0, P.push(new vl({ type: "custom", trigger: we, content: le.message, rule: new vl(W) }))) : le.catch && j.push(le.catch((Q) => {
                    p = !0, P.push(new vl({ type: "custom", trigger: we, content: Q && Q.message ? Q.message : W.content || W.message, rule: new vl(W) }));
                  })));
                } else {
                  const ie = de === "array", le = l.isArray(N);
                  let Q = !0;
                  ie || le ? Q = !le || !N.length : l.isString(N) ? Q = eo(N.trim()) : Q = eo(N), (ve ? Q || $(W, N) : !Q && $(W, N)) && (p = !0, P.push(new vl(W)));
                }
            });
          }
        }
        return Promise.all(j).then(() => {
          if (P.length) {
            const F = { rules: P, rule: P[0] };
            return Promise.reject(F);
          }
        });
      },
      hasCellRules(O, B, E) {
        const { editRules: T } = t, { field: y } = E;
        if (y && T) {
          const w = l.get(T, y);
          return w && !!l.find(w, (P) => O === "all" || !P.trigger || O === P.trigger);
        }
        return !1;
      },
      /**
       * 触发校验
       */
      triggerValidate(O) {
        const { editConfig: B, editRules: E } = t, { editStore: T } = n, { actived: y } = T, w = h.value, P = u.value;
        if (E && P.msgMode === "single" && (n.validErrorMaps = {}), B && E && y.row) {
          const { row: j, column: F, cell: N } = y.args;
          if (m.hasCellRules(O, j, F))
            return m.validCellRules(O, j, F).then(() => {
              w.mode === "row" && i.clearValidate(j, F);
            }).catch(({ rule: W }) => {
              if (!W.trigger || O === W.trigger) {
                const de = { rule: W, row: j, column: F, cell: N };
                return m.showValidTooltip(de), Promise.reject(de);
              }
              return Promise.resolve();
            });
        }
        return Promise.resolve();
      },
      /**
       * 弹出校验错误提示
       */
      showValidTooltip(O) {
        const { height: B } = t, { tableData: E, validStore: T, validErrorMaps: y } = n, { rule: w, row: P, column: j, cell: F } = O, N = u.value, W = s.value, de = w.content;
        return T.visible = !0, N.msgMode === "single" ? n.validErrorMaps = {
          [`${We(e, P)}:${j.id}`]: {
            column: j,
            row: P,
            rule: w,
            content: de
          }
        } : n.validErrorMaps = Object.assign({}, y, {
          [`${We(e, P)}:${j.id}`]: {
            column: j,
            row: P,
            rule: w,
            content: de
          }
        }), e.dispatchEvent("valid-error", O, null), W && W && (N.message === "tooltip" || N.message === "default" && !B && E.length < 2) ? W.open(F, de) : ne();
      }
    }, Object.assign(Object.assign({}, i), m);
  },
  setupGrid(e) {
    return e.extendTableMethods(Kk);
  }
}, Va = {
  install() {
    Xe.hooks.add("$tableValidator", Xk);
  }
}, Zk = Va, zr = Mt({
  name: "VxeTooltip",
  props: {
    modelValue: Boolean,
    size: { type: String, default: () => v.tooltip.size || v.size },
    trigger: { type: String, default: () => v.tooltip.trigger || "hover" },
    theme: { type: String, default: () => v.tooltip.theme || "dark" },
    content: { type: [String, Number], default: null },
    useHTML: Boolean,
    zIndex: [String, Number],
    popupClassName: [String, Function],
    isArrow: { type: Boolean, default: !0 },
    enterable: Boolean,
    enterDelay: { type: Number, default: () => v.tooltip.enterDelay },
    leaveDelay: { type: Number, default: () => v.tooltip.leaveDelay }
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      target: null,
      isUpdate: !1,
      visible: !1,
      tipContent: "",
      tipActive: !1,
      tipTarget: null,
      tipZindex: 0,
      tipStore: {
        style: {},
        placement: "",
        arrowStyle: {}
      }
    }), h = Ue(), i = {
      refElem: h
    }, m = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => i
    };
    let p = {};
    const b = () => {
      const { tipTarget: F, tipStore: N } = c;
      if (F) {
        const { scrollTop: W, scrollLeft: de, visibleWidth: we } = qo(), { top: ve, left: oe } = uo(F), ie = h.value, le = 6, Q = ie.offsetHeight, L = ie.offsetWidth;
        let I = oe, V = ve - Q - le;
        I = Math.max(le, oe + Math.floor((F.offsetWidth - L) / 2)), I + L + le > de + we && (I = de + we - L - le), ve - Q < W + le && (N.placement = "bottom", V = ve + F.offsetHeight + le), N.style.top = `${V}px`, N.style.left = `${I}px`, N.arrowStyle.left = `${oe - I + F.offsetWidth / 2}px`;
      }
    }, D = (F) => {
      F !== c.visible && (c.visible = F, c.isUpdate = !0, o("update:modelValue", F));
    }, A = () => {
      c.tipZindex < ko() && (c.tipZindex = ho());
    }, $ = () => {
      c.visible ? p.close() : p.open();
    }, O = () => {
      p.open();
    }, B = () => {
      const { trigger: F, enterable: N, leaveDelay: W } = e;
      c.tipActive = !1, N && F === "hover" ? setTimeout(() => {
        c.tipActive || p.close();
      }, W) : p.close();
    }, E = () => {
      c.tipActive = !0;
    }, T = () => {
      const { trigger: F, enterable: N, leaveDelay: W } = e;
      c.tipActive = !1, N && F === "hover" && setTimeout(() => {
        c.tipActive || p.close();
      }, W);
    }, y = () => {
      const { tipStore: F } = c, N = h.value;
      return N && (N.parentNode || document.body.appendChild(N)), D(!0), A(), F.placement = "top", F.style = { width: "auto", left: 0, top: 0, zIndex: e.zIndex || c.tipZindex }, F.arrowStyle = { left: "50%" }, p.updatePlacement();
    }, w = l.debounce(() => {
      c.tipActive && y();
    }, e.enterDelay, { leading: !1, trailing: !0 });
    p = {
      dispatchEvent(F, N, W) {
        o(F, Object.assign({ $tooltip: m, $event: W }, N));
      },
      open(F, N) {
        return p.toVisible(F || c.target, N);
      },
      close() {
        return c.tipTarget = null, c.tipActive = !1, Object.assign(c.tipStore, {
          style: {},
          placement: "",
          arrowStyle: null
        }), D(!1), ne();
      },
      toVisible(F, N) {
        if (F) {
          const { trigger: W, enterDelay: de } = e;
          if (c.tipActive = !0, c.tipTarget = F, N && (c.tipContent = N), de && W === "hover")
            w();
          else
            return y();
        }
        return ne();
      },
      updatePlacement() {
        return ne().then(() => {
          const { tipTarget: F } = c, N = h.value;
          if (F && N)
            return b(), ne().then(b);
        });
      },
      isActived() {
        return c.tipActive;
      },
      setActived(F) {
        c.tipActive = !!F;
      }
    }, Object.assign(m, p), dt(() => e.content, () => {
      c.tipContent = e.content;
    }), dt(() => e.modelValue, () => {
      c.isUpdate || (e.modelValue ? p.open() : p.close()), c.isUpdate = !1;
    }), gn(() => {
      ne(() => {
        const { trigger: F, content: N, modelValue: W } = e, de = h.value;
        if (de) {
          const we = de.parentNode;
          if (we) {
            c.tipContent = N, c.tipZindex = ho(), l.arrayEach(de.children, (oe, ie) => {
              ie > 1 && (we.insertBefore(oe, de), c.target || (c.target = oe));
            }), we.removeChild(de);
            const { target: ve } = c;
            ve && (F === "hover" ? (ve.onmouseenter = O, ve.onmouseleave = B) : F === "click" && (ve.onclick = $)), W && p.open();
          }
        }
      });
    }), Qi(() => {
      const { trigger: F } = e, { target: N } = c, W = h.value;
      if (N && (F === "hover" ? (N.onmouseenter = null, N.onmouseleave = null) : F === "click" && (N.onclick = null)), W) {
        const de = W.parentNode;
        de && de.removeChild(W);
      }
    });
    const P = () => {
      const { useHTML: F } = e, { tipContent: N } = c, W = n.content;
      return W ? d("div", {
        key: 1,
        class: "vxe-table--tooltip-content"
      }, Ht(W({}))) : F ? d("div", {
        key: 2,
        class: "vxe-table--tooltip-content",
        innerHTML: N
      }) : d("div", {
        key: 3,
        class: "vxe-table--tooltip-content"
      }, Xt(N));
    }, j = () => {
      const { popupClassName: F, theme: N, isArrow: W, enterable: de } = e, { tipActive: we, visible: ve, tipStore: oe } = c, ie = n.default, le = u.value;
      let Q;
      return de && (Q = {
        onMouseenter: E,
        onMouseleave: T
      }), d("div", Object.assign({ ref: h, class: ["vxe-table--tooltip-wrapper", `theme--${N}`, F ? l.isFunction(F) ? F({ $tooltip: m }) : F : "", {
        [`size--${le}`]: le,
        [`placement--${oe.placement}`]: oe.placement,
        "is--enterable": de,
        "is--visible": ve,
        "is--arrow": W,
        "is--active": we
      }], style: oe.style }, Q), [
        P(),
        d("div", {
          class: "vxe-table--tooltip-arrow",
          style: oe.arrowStyle
        }),
        ...ie ? Ht(ie({})) : []
      ]);
    };
    return m.renderVN = j, m;
  },
  render() {
    return this.renderVN();
  }
}), Sl = Mt({
  name: "VxeTableCustomPanel",
  props: {
    customStore: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = gt("$xetable", {}), { reactData: n } = t, { computeCustomOpts: o, computeColumnOpts: s, computeIsMaxFixedColumn: u } = t.getComputeMaps(), c = Ue(), h = Ue(), i = Ue(), m = Ue();
    let p;
    const b = (Q) => {
      const { customStore: L } = e;
      L.activeWrapper = !0, t.customOpenEvent(Q);
    }, D = (Q) => {
      const { customStore: L } = e;
      L.activeWrapper = !1, setTimeout(() => {
        !L.activeBtn && !L.activeWrapper && t.customColseEvent(Q);
      }, 300);
    }, A = (Q) => {
      W(), t.closeCustom(), t.emitCustomEvent("confirm", Q);
    }, $ = (Q) => {
      t.closeCustom(), t.emitCustomEvent("cancel", Q);
    }, O = (Q) => {
      t.resetColumn(!0), t.closeCustom(), t.emitCustomEvent("reset", Q);
    }, B = (Q) => {
      Xe.modal ? Xe.modal.confirm({
        content: v.i18n("vxe.custom.cstmConfirmRestore"),
        className: "vxe-table--ignore-clear",
        escClosable: !0
      }).then((L) => {
        L === "confirm" && O(Q);
      }) : O(Q);
    }, E = (Q) => {
      const { customColumnList: L } = n, I = l.findTree(L, (V) => V === Q);
      if (I && I.parent) {
        const { parent: V } = I;
        V.children && V.children.length && (V.visible = V.children.every((q) => q.visible), V.halfVisible = !V.visible && V.children.some((q) => q.visible || q.halfVisible), E(V));
      }
    }, T = (Q) => {
      const L = !Q.visible, I = o.value;
      l.eachTree([Q], (V) => {
        V.visible = L, V.halfVisible = !1;
      }), E(Q), I.immediate && t.handleCustom(), t.checkCustomStatus();
    }, y = (Q, L) => {
      const I = u.value;
      Q.fixed === L ? t.clearColumnFixed(Q) : (!I || Q.fixed) && t.setColumnFixed(Q, L);
    }, w = (Q) => {
      u.value || t.setColumnFixed(Q, Q.fixed);
    }, P = () => {
      const { customStore: Q } = e, { customColumnList: L } = n, I = o.value, { checkMethod: V } = I, q = !Q.isAll;
      l.eachTree(L, (U) => {
        (!V || V({ column: U })) && (U.visible = q, U.halfVisible = !1);
      }), Q.isAll = q, t.checkCustomStatus();
    }, j = (Q) => {
      const V = Q.currentTarget.parentNode.parentNode, q = V.getAttribute("colid"), U = t.getColumnById(q);
      V.draggable = !0, m.value = U, wo(V, "active--drag-origin");
    }, F = (Q) => {
      const V = Q.currentTarget.parentNode.parentNode, q = i.value;
      V.draggable = !1, m.value = null, Pn(V, "active--drag-origin"), q && (q.style.display = "");
    }, N = (Q) => {
      const L = new Image();
      Q.dataTransfer && Q.dataTransfer.setDragImage(L, 0, 0);
    }, W = () => {
      const { customColumnList: Q } = n;
      Q.forEach((L, I) => {
        const V = I + 1;
        L.renderSortNumber = V;
      });
    }, de = (Q) => {
      const { customColumnList: L } = n, I = Q.currentTarget, V = i.value;
      if (p) {
        if (p !== I) {
          const q = p.getAttribute("drag-pos"), U = I.getAttribute("colid"), pe = t.getColumnById(U);
          if (!pe)
            return;
          const ke = l.findIndexOf(L, (ce) => ce.id === pe.id), Ee = p.getAttribute("colid"), Le = t.getColumnById(Ee);
          if (!Le)
            return;
          L.splice(ke, 1);
          const Ae = l.findIndexOf(L, (ce) => ce.id === Le.id);
          L.splice(Ae + (q === "bottom" ? 1 : 0), 0, pe);
        }
        p.draggable = !1, p.removeAttribute("drag-pos"), Pn(p, "active--drag-target");
      }
      m.value = null, I.draggable = !1, I.removeAttribute("drag-pos"), V && (V.style.display = ""), Pn(I, "active--drag-target"), Pn(I, "active--drag-origin"), W();
    }, we = (Q) => {
      const L = Q.currentTarget;
      p !== L && Pn(p, "active--drag-target");
      const I = L.getAttribute("colid"), V = t.getColumnById(I);
      if (V && V.level === 1) {
        Q.preventDefault();
        const U = Q.clientY - L.getBoundingClientRect().y < L.clientHeight / 2 ? "top" : "bottom";
        wo(L, "active--drag-target"), L.setAttribute("drag-pos", U), p = L;
      }
      ve(Q);
    }, ve = (Q) => {
      const L = i.value, I = h.value;
      if (I && L) {
        const V = I.parentNode, q = V.getBoundingClientRect();
        L.style.display = "block", L.style.top = `${Math.min(V.clientHeight - V.scrollTop - L.clientHeight, Q.clientY - q.y)}px`, L.style.left = `${Math.min(V.clientWidth - V.scrollLeft - L.clientWidth - 16, Q.clientX - q.x)}px`;
      }
    }, oe = () => {
      const { customStore: Q } = e, { customColumnList: L } = n, I = o.value, { maxHeight: V } = Q, { checkMethod: q, visibleMethod: U, trigger: pe } = I, ke = u.value, Ee = [], Le = {};
      pe === "hover" && (Le.onMouseenter = b, Le.onMouseleave = D), l.eachTree(L, (k, Z, re, fe, De) => {
        if (U ? U({ column: k }) : !0) {
          const ee = k.visible, se = k.halfVisible, he = k.children && k.children.length, xe = Xt(k.getTitle(), 1), me = q ? !q({ column: k }) : !1;
          Ee.push(d("li", {
            key: k.id,
            class: ["vxe-table-custom--option", `level--${k.level}`, {
              "is--group": he
            }]
          }, [
            d("div", {
              title: xe,
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": ee,
                "is--indeterminate": se,
                "is--disabled": me
              }],
              onClick: () => {
                me || T(k);
              }
            }, [
              d("span", {
                class: ["vxe-checkbox--icon", se ? v.icon.TABLE_CHECKBOX_INDETERMINATE : ee ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
              }),
              d("span", {
                class: "vxe-checkbox--label"
              }, xe)
            ]),
            !De && I.allowFixed ? d("div", {
              class: "vxe-table-custom--fixed-option"
            }, [
              d("span", {
                class: ["vxe-table-custom--fixed-left-option", k.fixed === "left" ? v.icon.TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED : v.icon.TOOLBAR_TOOLS_FIXED_LEFT, {
                  "is--checked": k.fixed === "left",
                  "is--disabled": ke && !k.fixed
                }],
                title: v.i18n(k.fixed === "left" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedLeft"),
                onClick: () => {
                  y(k, "left");
                }
              }),
              d("span", {
                class: ["vxe-table-custom--fixed-right-option", k.fixed === "right" ? v.icon.TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED : v.icon.TOOLBAR_TOOLS_FIXED_RIGHT, {
                  "is--checked": k.fixed === "right",
                  "is--disabled": ke && !k.fixed
                }],
                title: v.i18n(k.fixed === "right" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedRight"),
                onClick: () => {
                  y(k, "right");
                }
              })
            ]) : null
          ]));
        }
      });
      const Ae = Q.isAll, ce = Q.isIndeterminate;
      return d("div", {
        ref: c,
        key: "simple",
        class: ["vxe-table-custom-wrapper", {
          "is--active": Q.visible
        }]
      }, [
        d("ul", {
          class: "vxe-table-custom--header"
        }, [
          d("li", {
            class: "vxe-table-custom--option"
          }, [
            d("div", {
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": Ae,
                "is--indeterminate": ce
              }],
              title: v.i18n("vxe.table.allTitle"),
              onClick: P
            }, [
              d("span", {
                class: ["vxe-checkbox--icon", ce ? v.icon.TABLE_CHECKBOX_INDETERMINATE : Ae ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
              }),
              d("span", {
                class: "vxe-checkbox--label"
              }, v.i18n("vxe.toolbar.customAll"))
            ])
          ])
        ]),
        d("ul", Object.assign({ class: "vxe-table-custom--body", style: V ? {
          maxHeight: `${V}px`
        } : {} }, Le), Ee),
        I.showFooter ? d("div", {
          class: "vxe-table-custom--footer"
        }, [
          d("button", {
            class: "btn--reset",
            onClick: O
          }, I.resetButtonText || v.i18n("vxe.toolbar.customRestore")),
          d("button", {
            class: "btn--confirm",
            onClick: A
          }, I.confirmButtonText || v.i18n("vxe.toolbar.customConfirm"))
        ]) : null
      ]);
    }, ie = () => {
      const { customStore: Q } = e, { customColumnList: L } = n, I = o.value, { checkMethod: V, visibleMethod: q } = I, U = s.value, pe = u.value, ke = [];
      return l.eachTree(L, (Ee, Le, Ae, ce, k) => {
        if (q ? q({ column: Ee }) : !0) {
          const re = Ee.visible, fe = Ee.halfVisible, De = Xt(Ee.getTitle(), 1), te = Ee.children && Ee.children.length, ee = V ? !V({ column: Ee }) : !1;
          ke.push(d("tr", {
            key: Ee.id,
            colid: Ee.id,
            class: [`vxe-table-custom-popup--row level--${Ee.level}`, {
              "is--group": te
            }],
            onDragstart: N,
            onDragend: de,
            onDragover: we
          }, [
            d("td", {
              class: "vxe-table-custom-popup--column-item col--sort"
            }, [
              Ee.level === 1 ? d("span", {
                class: "vxe-table-custom-popup--column-sort-btn",
                onMousedown: j,
                onMouseup: F
              }, [
                d("i", {
                  class: "vxe-icon-sort"
                })
              ]) : null
            ]),
            d("td", {
              class: "vxe-table-custom-popup--column-item col--name"
            }, [
              d("div", {
                class: "vxe-table-custom-popup--name",
                title: De
              }, De)
            ]),
            d("td", {
              class: "vxe-table-custom-popup--column-item col--visible"
            }, [
              d("div", {
                class: ["vxe-table-custom--checkbox-option", {
                  "is--checked": re,
                  "is--indeterminate": fe,
                  "is--disabled": ee
                }],
                onClick: () => {
                  ee || T(Ee);
                }
              }, [
                d("span", {
                  class: ["vxe-checkbox--icon", fe ? v.icon.TABLE_CHECKBOX_INDETERMINATE : re ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
                })
              ])
            ]),
            d("td", {
              class: "vxe-table-custom-popup--column-item col--fixed"
            }, [
              !k && I.allowFixed ? d(xr, {
                modelValue: Ee.fixed || "",
                type: "button",
                size: "mini",
                options: [
                  { label: v.i18n("vxe.custom.setting.fixedLeft"), value: "left", disabled: pe },
                  { label: v.i18n("vxe.custom.setting.fixedUnset"), value: "" },
                  { label: v.i18n("vxe.custom.setting.fixedRight"), value: "right", disabled: pe }
                ],
                "onUpdate:modelValue"(se) {
                  Ee.fixed = se;
                },
                onChange() {
                  w(Ee);
                }
              }) : null
            ])
          ]));
        }
      }), d(Go, {
        key: "popup",
        className: "vxe-table-custom-popup-wrapper vxe-table--ignore-clear",
        modelValue: Q.visible,
        title: v.i18n("vxe.custom.cstmTitle"),
        width: "40vw",
        minWidth: 520,
        height: "50vh",
        minHeight: 300,
        mask: !0,
        lockView: !0,
        showFooter: !0,
        resize: !0,
        escClosable: !0,
        destroyOnClose: !0,
        "onUpdate:modelValue"(Ee) {
          Q.visible = Ee;
        }
      }, {
        default: () => d("div", {
          ref: h,
          class: "vxe-table-custom-popup--body"
        }, [
          d("div", {
            class: "vxe-table-custom-popup--table-wrapper"
          }, [
            d("table", {}, [
              d("colgroup", {}, [
                d("col", {
                  style: {
                    width: "80px"
                  }
                }),
                d("col", {}),
                d("col", {
                  style: {
                    width: "80px"
                  }
                }),
                d("col", {
                  style: {
                    width: "200px"
                  }
                })
              ]),
              d("thead", {}, [
                d("tr", {}, [
                  d("th", {}, [
                    d("span", {
                      class: "vxe-table-custom-popup--table-sort-help-title"
                    }, v.i18n("vxe.custom.setting.colSort")),
                    d(zr, {
                      enterable: !0,
                      content: v.i18n("vxe.custom.setting.sortHelpTip")
                    }, {
                      default: () => d("i", {
                        class: "vxe-table-custom-popup--table-sort-help-icon vxe-icon-question-circle-fill"
                      })
                    })
                  ]),
                  d("th", {}, v.i18n("vxe.custom.setting.colTitle")),
                  d("th", {}, v.i18n("vxe.custom.setting.colVisible")),
                  d("th", {}, v.i18n("vxe.custom.setting.colFixed", [U.maxFixedSize || 0]))
                ])
              ]),
              d(Rh, {
                class: "vxe-table-custom--body",
                tag: "tbody",
                name: "vxe-table-custom--list"
              }, {
                default: () => ke
              })
            ])
          ]),
          d("div", {
            ref: i,
            class: "vxe-table-custom-popup--drag-hint"
          }, v.i18n("vxe.custom.cstmDragTarget", [m.value ? m.value.getTitle() : ""]))
        ]),
        footer: () => d("div", {
          class: "vxe-table-custom-popup--footer"
        }, [
          d(En, {
            content: I.resetButtonText || v.i18n("vxe.custom.cstmRestore"),
            onClick: B
          }),
          d(En, {
            content: I.resetButtonText || v.i18n("vxe.custom.cstmCancel"),
            onClick: $
          }),
          d(En, {
            status: "primary",
            content: I.confirmButtonText || v.i18n("vxe.custom.cstmConfirm"),
            onClick: A
          })
        ])
      });
    };
    return () => o.value.mode === "popup" ? ie() : oe();
  }
}), Jk = ["openCustom", "closeCustom"], Qk = {
  setupTable(e) {
    const { reactData: t, internalData: n } = e, { computeCustomOpts: o } = e.getComputeMaps(), { refTableHeader: s, refTableBody: u, refTableCustom: c } = e.getRefMaps(), h = e.xegrid, i = () => {
      const { customStore: O } = t, B = s.value, E = u.value, T = c.value, y = T ? T.$el : null, w = B.$el, P = E.$el;
      let j = 0;
      w && (j += w.clientHeight), P && (j += P.clientHeight), O.maxHeight = Math.max(0, y ? Math.min(y.clientHeight, j - 80) : 0);
    }, m = () => {
      const { initStore: O, customStore: B } = t;
      return B.visible = !0, O.custom = !0, t.customColumnList = n.collectColumn.slice(0), D(), i(), ne().then(() => i());
    }, p = () => {
      const { customStore: O } = t, B = o.value;
      return O.visible && (O.visible = !1, B.immediate || e.handleCustom()), ne();
    }, b = {
      openCustom: m,
      closeCustom: p
    }, D = () => {
      const { customStore: O } = t, { collectColumn: B } = n, E = o.value, { checkMethod: T } = E;
      O.isAll = B.every((y) => (T ? !T({ column: y }) : !1) || y.visible), O.isIndeterminate = !O.isAll && B.some((y) => (!T || T({ column: y })) && (y.visible || y.halfVisible));
    }, A = (O, B) => {
      (h || e).dispatchEvent("custom", { type: O }, B);
    }, $ = {
      checkCustomStatus: D,
      emitCustomEvent: A,
      triggerCustomEvent(O) {
        const { customStore: B } = e.reactData;
        B.visible ? (p(), A("close", O)) : (B.btnEl = O.target, m(), A("open", O));
      },
      customOpenEvent(O) {
        const { customStore: B } = t;
        B.visible || (B.activeBtn = !0, B.btnEl = O.target, e.openCustom(), e.emitCustomEvent("open", O));
      },
      customColseEvent(O) {
        const { customStore: B } = t;
        B.visible && (B.activeBtn = !1, e.closeCustom(), e.emitCustomEvent("close", O));
      }
    };
    return Object.assign(Object.assign({}, b), $);
  },
  setupGrid(e) {
    return e.extendTableMethods(Jk);
  }
}, Aa = {
  Panel: Sl,
  install(e) {
    Xe.hooks.add("$tableCustom", Qk), e.component(Sl.name, Sl);
  }
}, eN = Aa;
Nt.component(Sl.name, Sl);
const Vi = Mt({
  name: "VxeIcon",
  props: {
    name: String,
    roll: Boolean,
    status: String
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const n = (o) => {
      t("click", { $event: o });
    };
    return () => {
      const { name: o, roll: s, status: u } = e;
      return d("i", {
        class: [`vxe-icon-${o}`, s ? "roll" : "", u ? [`theme--${u}`] : ""],
        onClick: n
      });
    };
  }
}), jl = Object.assign(Vi, {
  install(e) {
    e.component(Vi.name, Vi);
  }
}), tN = jl;
Nt.component(jl.name, jl);
function nN(e) {
  const { $table: t, column: n } = e, o = n.titlePrefix || n.titleHelp;
  return o ? [
    d("i", {
      class: ["vxe-cell-title-prefix-icon", o.icon || v.icon.TABLE_TITLE_PREFIX],
      onMouseenter(s) {
        t.triggerHeaderTitleEvent(s, o, e);
      },
      onMouseleave(s) {
        t.handleTargetLeaveEvent(s);
      }
    })
  ] : [];
}
function oN(e) {
  const { $table: t, column: n } = e, o = n.titleSuffix;
  return o ? [
    d("i", {
      class: ["vxe-cell-title-suffix-icon", o.icon || v.icon.TABLE_TITLE_SUFFIX],
      onMouseenter(s) {
        t.triggerHeaderTitleEvent(s, o, e);
      },
      onMouseleave(s) {
        t.handleTargetLeaveEvent(s);
      }
    })
  ] : [];
}
function zo(e, t) {
  const { $table: n, column: o } = e, { props: s, reactData: u } = n, { computeTooltipOpts: c } = n.getComputeMaps(), { showHeaderOverflow: h } = s, { type: i, showHeaderOverflow: m } = o, b = c.value.showAll, D = l.isUndefined(m) || l.isNull(m) ? h : m, A = D === "title", $ = D === !0 || D === "tooltip", O = {};
  return (A || $ || b) && (O.onMouseenter = (B) => {
    u._isResize || (A ? ya(B.currentTarget, o) : ($ || b) && n.triggerHeaderTooltipEvent(B, e));
  }), ($ || b) && (O.onMouseleave = (B) => {
    u._isResize || ($ || b) && n.handleTargetLeaveEvent(B);
  }), [
    i === "html" && l.isString(t) ? d("span", Object.assign({ class: "vxe-cell--title", innerHTML: t }, O)) : d("span", Object.assign({ class: "vxe-cell--title" }, O), Ht(t))
  ];
}
function rN(e) {
  const { $table: t, column: n, _columnIndex: o, items: s, row: u } = e, { slots: c, editRender: h, cellRender: i } = n, m = h || i, p = c ? c.footer : null;
  if (p)
    return t.callSlot(p, e);
  if (m) {
    const b = Xe.renderer.get(m.name);
    if (b && b.renderFooter)
      return Ht(b.renderFooter(m, e));
  }
  return l.isArray(s) ? [Xt(s[o], 1)] : [Xt(l.get(u, n.field), 1)];
}
function hd(e) {
  const { $table: t, row: n, column: o } = e;
  return Xt(t.getCellLabel(n, o), 1);
}
const ut = {
  createColumn(e, t) {
    const { type: n, sortable: o, filters: s, editRender: u, treeNode: c } = t, { props: h } = e, { editConfig: i } = h, { computeEditOpts: m, computeCheckboxOpts: p } = e.getComputeMaps(), b = p.value, D = m.value, A = {
      renderHeader: ut.renderDefaultHeader,
      renderCell: c ? ut.renderTreeCell : ut.renderDefaultCell,
      renderFooter: ut.renderDefaultFooter
    };
    switch (n) {
      case "seq":
        A.renderHeader = ut.renderSeqHeader, A.renderCell = c ? ut.renderTreeIndexCell : ut.renderSeqCell;
        break;
      case "radio":
        A.renderHeader = ut.renderRadioHeader, A.renderCell = c ? ut.renderTreeRadioCell : ut.renderRadioCell;
        break;
      case "checkbox":
        A.renderHeader = ut.renderCheckboxHeader, A.renderCell = b.checkField ? c ? ut.renderTreeSelectionCellByProp : ut.renderCheckboxCellByProp : c ? ut.renderTreeSelectionCell : ut.renderCheckboxCell;
        break;
      case "expand":
        A.renderCell = ut.renderExpandCell, A.renderData = ut.renderExpandData;
        break;
      case "html":
        A.renderCell = c ? ut.renderTreeHTMLCell : ut.renderHTMLCell, s && o ? A.renderHeader = ut.renderSortAndFilterHeader : o ? A.renderHeader = ut.renderSortHeader : s && (A.renderHeader = ut.renderFilterHeader);
        break;
      default:
        i && u ? (A.renderHeader = ut.renderEditHeader, A.renderCell = D.mode === "cell" ? c ? ut.renderTreeCellEdit : ut.renderCellEdit : c ? ut.renderTreeRowEdit : ut.renderRowEdit) : s && o ? A.renderHeader = ut.renderSortAndFilterHeader : o ? A.renderHeader = ut.renderSortHeader : s && (A.renderHeader = ut.renderFilterHeader);
    }
    return ok(e, t, A);
  },
  /**
   * 单元格
   */
  renderHeaderTitle(e) {
    const { $table: t, column: n } = e, { slots: o, editRender: s, cellRender: u } = n, c = s || u, h = o ? o.header : null;
    if (h)
      return zo(e, t.callSlot(h, e));
    if (c) {
      const i = Xe.renderer.get(c.name);
      if (i && i.renderHeader)
        return zo(e, Ht(i.renderHeader(c, e)));
    }
    return zo(e, Xt(n.getTitle(), 1));
  },
  renderDefaultHeader(e) {
    return nN(e).concat(ut.renderHeaderTitle(e)).concat(oN(e));
  },
  renderDefaultCell(e) {
    const { $table: t, row: n, column: o } = e, { slots: s, editRender: u, cellRender: c } = o, h = u || c, i = s ? s.default : null;
    if (i)
      return t.callSlot(i, e);
    if (h) {
      const b = u ? "renderCell" : "renderDefault", D = Xe.renderer.get(h.name), A = D ? D[b] : null;
      if (A)
        return Ht(A(h, Object.assign({ $type: u ? "edit" : "cell" }, e)));
    }
    const m = t.getCellLabel(n, o), p = u ? u.placeholder : "";
    return [
      d("span", {
        class: "vxe-cell--label"
      }, u && eo(m) ? [
        // 如果设置占位符
        d("span", {
          class: "vxe-cell--placeholder"
        }, Xt(qt(p), 1))
      ] : Xt(m, 1))
    ];
  },
  renderTreeCell(e) {
    return ut.renderTreeIcon(e, ut.renderDefaultCell(e));
  },
  renderDefaultFooter(e) {
    return [
      d("span", {
        class: "vxe-cell--item"
      }, rN(e))
    ];
  },
  /**
   * 树节点
   */
  renderTreeIcon(e, t) {
    const { $table: n, isHidden: o } = e, { reactData: s } = n, { computeTreeOpts: u } = n.getComputeMaps(), { treeExpandedMaps: c, treeExpandLazyLoadedMaps: h } = s, i = u.value, { row: m, column: p, level: b } = e, { slots: D } = p, { indent: A, lazy: $, trigger: O, iconLoaded: B, showIcon: E, iconOpen: T, iconClose: y } = i, w = i.children || i.childrenField, P = i.hasChild || i.hasChildField, j = m[w], F = D ? D.icon : null;
    let N = !1, W = !1, de = !1;
    const we = {};
    if (F)
      return n.callSlot(F, e);
    if (!o) {
      const ve = We(n, m);
      W = !!c[ve], $ && (de = !!h[ve], N = m[P]);
    }
    return (!O || O === "default") && (we.onClick = (ve) => {
      ve.stopPropagation(), n.triggerTreeExpandEvent(ve, e);
    }), [
      d("div", {
        class: ["vxe-cell--tree-node", {
          "is--active": W
        }],
        style: {
          paddingLeft: `${b * A}px`
        }
      }, [
        E && (j && j.length || N) ? [
          d("div", Object.assign({ class: "vxe-tree--btn-wrapper" }, we), [
            d("i", {
              class: ["vxe-tree--node-btn", de ? B || v.icon.TABLE_TREE_LOADED : W ? T || v.icon.TABLE_TREE_OPEN : y || v.icon.TABLE_TREE_CLOSE]
            })
          ])
        ] : null,
        d("div", {
          class: "vxe-tree-cell"
        }, t)
      ])
    ];
  },
  /**
   * 索引
   */
  renderSeqHeader(e) {
    const { $table: t, column: n } = e, { slots: o } = n, s = o ? o.header : null;
    return zo(e, s ? t.callSlot(s, e) : Xt(n.getTitle(), 1));
  },
  renderSeqCell(e) {
    const { $table: t, column: n } = e, { props: o } = t, { treeConfig: s } = o, { computeSeqOpts: u } = t.getComputeMaps(), c = u.value, { slots: h } = n, i = h ? h.default : null;
    if (i)
      return t.callSlot(i, e);
    const { seq: m } = e, p = c.seqMethod;
    return [Xt(p ? p(e) : s ? m : (c.startIndex || 0) + m, 1)];
  },
  renderTreeIndexCell(e) {
    return ut.renderTreeIcon(e, ut.renderSeqCell(e));
  },
  /**
   * 单选
   */
  renderRadioHeader(e) {
    const { $table: t, column: n } = e, { slots: o } = n, s = o ? o.header : null, u = o ? o.title : null;
    return zo(e, s ? t.callSlot(s, e) : [
      d("span", {
        class: "vxe-radio--label"
      }, u ? t.callSlot(u, e) : Xt(n.getTitle(), 1))
    ]);
  },
  renderRadioCell(e) {
    const { $table: t, column: n, isHidden: o } = e, { reactData: s } = t, { computeRadioOpts: u } = t.getComputeMaps(), { selectRadioRow: c } = s, h = u.value, { slots: i } = n, { labelField: m, checkMethod: p, visibleMethod: b } = h, { row: D } = e, A = i ? i.default : null, $ = i ? i.radio : null, O = t.eqRow(D, c), B = !b || b({ row: D });
    let E = !!p, T;
    o || (T = {
      onClick(P) {
        !E && B && (P.stopPropagation(), t.triggerRadioRowEvent(P, e));
      }
    }, p && (E = !p({ row: D })));
    const y = Object.assign(Object.assign({}, e), { checked: O, disabled: E, visible: B });
    if ($)
      return t.callSlot($, y);
    const w = [];
    return B && w.push(d("span", {
      class: ["vxe-radio--icon", O ? v.icon.TABLE_RADIO_CHECKED : v.icon.TABLE_RADIO_UNCHECKED]
    })), (A || m) && w.push(d("span", {
      class: "vxe-radio--label"
    }, A ? t.callSlot(A, y) : l.get(D, m))), [
      d("span", Object.assign({ class: ["vxe-cell--radio", {
        "is--checked": O,
        "is--disabled": E
      }] }, T), w)
    ];
  },
  renderTreeRadioCell(e) {
    return ut.renderTreeIcon(e, ut.renderRadioCell(e));
  },
  /**
   * 多选
   */
  renderCheckboxHeader(e) {
    const { $table: t, column: n, isHidden: o } = e, { reactData: s } = t, { computeIsAllCheckboxDisabled: u, computeCheckboxOpts: c } = t.getComputeMaps(), { isAllSelected: h, isIndeterminate: i } = s, m = u.value, { slots: p } = n, b = p ? p.header : null, D = p ? p.title : null, A = c.value, $ = n.getTitle();
    let O;
    o || (O = {
      onClick(E) {
        m || (E.stopPropagation(), t.triggerCheckAllEvent(E, !h));
      }
    });
    const B = Object.assign(Object.assign({}, e), { checked: h, disabled: m, indeterminate: i });
    return b ? zo(B, t.callSlot(b, B)) : (A.checkStrictly ? !A.showHeader : A.showHeader === !1) ? zo(B, [
      d("span", {
        class: "vxe-checkbox--label"
      }, D ? t.callSlot(D, B) : $)
    ]) : zo(B, [
      d("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": h,
        "is--disabled": m,
        "is--indeterminate": i
      }], title: v.i18n("vxe.table.allTitle") }, O), [
        d("span", {
          class: ["vxe-checkbox--icon", i ? v.icon.TABLE_CHECKBOX_INDETERMINATE : h ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
        })
      ].concat(D || $ ? [
        d("span", {
          class: "vxe-checkbox--label"
        }, D ? t.callSlot(D, B) : $)
      ] : []))
    ]);
  },
  renderCheckboxCell(e) {
    const { $table: t, row: n, column: o, isHidden: s } = e, { props: u, reactData: c } = t, { treeConfig: h } = u, { selectCheckboxMaps: i, treeIndeterminateMaps: m } = c, { computeCheckboxOpts: p } = t.getComputeMaps(), b = p.value, { labelField: D, checkMethod: A, visibleMethod: $ } = b, { slots: O } = o, B = O ? O.default : null, E = O ? O.checkbox : null;
    let T = !1, y = !1;
    const w = !$ || $({ row: n });
    let P = !!A, j;
    if (!s) {
      const W = We(t, n);
      y = !!i[W], j = {
        onClick(de) {
          !P && w && (de.stopPropagation(), t.triggerCheckRowEvent(de, e, !y));
        }
      }, A && (P = !A({ row: n })), h && (T = !!m[W]);
    }
    const F = Object.assign(Object.assign({}, e), { checked: y, disabled: P, visible: w, indeterminate: T });
    if (E)
      return t.callSlot(E, F);
    const N = [];
    return w && N.push(d("span", {
      class: ["vxe-checkbox--icon", T ? v.icon.TABLE_CHECKBOX_INDETERMINATE : y ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
    })), (B || D) && N.push(d("span", {
      class: "vxe-checkbox--label"
    }, B ? t.callSlot(B, F) : l.get(n, D))), [
      d("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": y,
        "is--disabled": P,
        "is--indeterminate": T,
        "is--hidden": !w
      }] }, j), N)
    ];
  },
  renderTreeSelectionCell(e) {
    return ut.renderTreeIcon(e, ut.renderCheckboxCell(e));
  },
  renderCheckboxCellByProp(e) {
    const { $table: t, row: n, column: o, isHidden: s } = e, { props: u, reactData: c } = t, { treeConfig: h } = u, { treeIndeterminateMaps: i } = c, { computeCheckboxOpts: m } = t.getComputeMaps(), p = m.value, { labelField: b, checkField: D, checkMethod: A, visibleMethod: $ } = p, O = p.indeterminateField || p.halfField, { slots: B } = o, E = B ? B.default : null, T = B ? B.checkbox : null;
    let y = !1, w = !1;
    const P = !$ || $({ row: n });
    let j = !!A, F;
    if (!s) {
      const de = We(t, n);
      w = l.get(n, D), F = {
        onClick(we) {
          !j && P && (we.stopPropagation(), t.triggerCheckRowEvent(we, e, !w));
        }
      }, A && (j = !A({ row: n })), h && (y = !!i[de]);
    }
    const N = Object.assign(Object.assign({}, e), { checked: w, disabled: j, visible: P, indeterminate: y });
    if (T)
      return t.callSlot(T, N);
    const W = [];
    return P && (W.push(d("span", {
      class: ["vxe-checkbox--icon", y ? v.icon.TABLE_CHECKBOX_INDETERMINATE : w ? v.icon.TABLE_CHECKBOX_CHECKED : v.icon.TABLE_CHECKBOX_UNCHECKED]
    })), (E || b) && W.push(d("span", {
      class: "vxe-checkbox--label"
    }, E ? t.callSlot(E, N) : l.get(n, b)))), [
      d("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": w,
        "is--disabled": j,
        "is--indeterminate": O && !w ? n[O] : y,
        "is--hidden": !P
      }] }, F), W)
    ];
  },
  renderTreeSelectionCellByProp(e) {
    return ut.renderTreeIcon(e, ut.renderCheckboxCellByProp(e));
  },
  /**
   * 展开行
   */
  renderExpandCell(e) {
    const { $table: t, isHidden: n, row: o, column: s } = e, { reactData: u } = t, { rowExpandedMaps: c, rowExpandLazyLoadedMaps: h } = u, { computeExpandOpts: i } = t.getComputeMaps(), m = i.value, { lazy: p, labelField: b, iconLoaded: D, showIcon: A, iconOpen: $, iconClose: O, visibleMethod: B } = m, { slots: E } = s, T = E ? E.default : null, y = E ? E.icon : null;
    let w = !1, P = !1;
    if (y)
      return t.callSlot(y, e);
    if (!n) {
      const j = We(t, o);
      w = !!c[j], p && (P = !!h[j]);
    }
    return [
      A && (!B || B(e)) ? d("span", {
        class: ["vxe-table--expanded", {
          "is--active": w
        }],
        onClick(j) {
          j.stopPropagation(), t.triggerRowExpandEvent(j, e);
        }
      }, [
        d("i", {
          class: ["vxe-table--expand-btn", P ? D || v.icon.TABLE_EXPAND_LOADED : w ? $ || v.icon.TABLE_EXPAND_OPEN : O || v.icon.TABLE_EXPAND_CLOSE]
        })
      ]) : null,
      T || b ? d("span", {
        class: "vxe-table--expand-label"
      }, T ? t.callSlot(T, e) : l.get(o, b)) : null
    ];
  },
  renderExpandData(e) {
    const { $table: t, column: n } = e, { slots: o, contentRender: s } = n, u = o ? o.content : null;
    if (u)
      return t.callSlot(u, e);
    if (s) {
      const c = Xe.renderer.get(s.name);
      if (c && c.renderExpand)
        return Ht(c.renderExpand(s, e));
    }
    return [];
  },
  /**
   * HTML 标签
   */
  renderHTMLCell(e) {
    const { $table: t, column: n } = e, { slots: o } = n, s = o ? o.default : null;
    return s ? t.callSlot(s, e) : [
      d("span", {
        class: "vxe-cell--html",
        innerHTML: hd(e)
      })
    ];
  },
  renderTreeHTMLCell(e) {
    return ut.renderTreeIcon(e, ut.renderHTMLCell(e));
  },
  /**
   * 排序和筛选
   */
  renderSortAndFilterHeader(e) {
    return ut.renderDefaultHeader(e).concat(ut.renderSortIcon(e)).concat(ut.renderFilterIcon(e));
  },
  /**
   * 排序
   */
  renderSortHeader(e) {
    return ut.renderDefaultHeader(e).concat(ut.renderSortIcon(e));
  },
  renderSortIcon(e) {
    const { $table: t, column: n } = e, { computeSortOpts: o } = t.getComputeMaps(), s = o.value, { showIcon: u, iconLayout: c, iconAsc: h, iconDesc: i } = s, { order: m } = n;
    return u ? [
      d("span", {
        class: ["vxe-cell--sort", `vxe-cell--sort-${c}-layout`]
      }, [
        d("i", {
          class: ["vxe-sort--asc-btn", h || v.icon.TABLE_SORT_ASC, {
            "sort--active": m === "asc"
          }],
          title: v.i18n("vxe.table.sortAsc"),
          onClick(p) {
            p.stopPropagation(), t.triggerSortEvent(p, n, "asc");
          }
        }),
        d("i", {
          class: ["vxe-sort--desc-btn", i || v.icon.TABLE_SORT_DESC, {
            "sort--active": m === "desc"
          }],
          title: v.i18n("vxe.table.sortDesc"),
          onClick(p) {
            p.stopPropagation(), t.triggerSortEvent(p, n, "desc");
          }
        })
      ])
    ] : [];
  },
  /**
   * 筛选
   */
  renderFilterHeader(e) {
    return ut.renderDefaultHeader(e).concat(ut.renderFilterIcon(e));
  },
  renderFilterIcon(e) {
    const { $table: t, column: n, hasFilter: o } = e, { reactData: s } = t, { filterStore: u } = s, { computeFilterOpts: c } = t.getComputeMaps(), h = c.value, { showIcon: i, iconNone: m, iconMatch: p } = h;
    return i ? [
      d("span", {
        class: ["vxe-cell--filter", {
          "is--active": u.visible && u.column === n
        }]
      }, [
        d("i", {
          class: ["vxe-filter--btn", o ? p || v.icon.TABLE_FILTER_MATCH : m || v.icon.TABLE_FILTER_NONE],
          title: v.i18n("vxe.table.filter"),
          onClick(b) {
            t.triggerFilterEvent && t.triggerFilterEvent(b, e.column, e);
          }
        })
      ])
    ] : [];
  },
  /**
   * 可编辑
   */
  renderEditHeader(e) {
    const { $table: t, column: n } = e, { props: o } = t, { computeEditOpts: s } = t.getComputeMaps(), { editConfig: u, editRules: c } = o, h = s.value, { sortable: i, filters: m, editRender: p } = n;
    let b = !1;
    if (c) {
      const D = l.get(c, n.field);
      D && (b = D.some((A) => A.required));
    }
    return (mt(u) ? [
      b && h.showAsterisk ? d("i", {
        class: "vxe-cell--required-icon"
      }) : null,
      mt(p) && h.showIcon ? d("i", {
        class: ["vxe-cell--edit-icon", h.icon || v.icon.TABLE_EDIT]
      }) : null
    ] : []).concat(ut.renderDefaultHeader(e)).concat(i ? ut.renderSortIcon(e) : []).concat(m ? ut.renderFilterIcon(e) : []);
  },
  // 行格编辑模式
  renderRowEdit(e) {
    const { $table: t, column: n } = e, { reactData: o } = t, { editStore: s } = o, { actived: u } = s, { editRender: c } = n;
    return ut.runRenderer(e, mt(c) && u && u.row === e.row);
  },
  renderTreeRowEdit(e) {
    return ut.renderTreeIcon(e, ut.renderRowEdit(e));
  },
  // 单元格编辑模式
  renderCellEdit(e) {
    const { $table: t, column: n } = e, { reactData: o } = t, { editStore: s } = o, { actived: u } = s, { editRender: c } = n;
    return ut.runRenderer(e, mt(c) && u && u.row === e.row && u.column === e.column);
  },
  renderTreeCellEdit(e) {
    return ut.renderTreeIcon(e, ut.renderCellEdit(e));
  },
  runRenderer(e, t) {
    const { $table: n, column: o } = e, { slots: s, editRender: u, formatter: c } = o, h = s ? s.default : null, i = s ? s.edit : null, m = Xe.renderer.get(u.name);
    return t ? i ? n.callSlot(i, e) : m && m.renderEdit ? Ht(m.renderEdit(u, Object.assign({ $type: "edit" }, e))) : [] : h ? n.callSlot(h, e) : c ? [
      d("span", {
        class: "vxe-cell--label"
      }, hd(e))
    ] : ut.renderDefaultCell(e);
  }
}, ah = {
  // 列唯一主键
  colId: [String, Number],
  // 渲染类型 index,radio,checkbox,expand,html
  type: String,
  // 列字段名
  field: String,
  // 列标题
  title: String,
  // 列宽度
  width: [Number, String],
  // 列最小宽度，把剩余宽度按比例分配
  minWidth: [Number, String],
  // 列最大宽度
  maxWidth: [Number, String],
  // 是否允许拖动列宽调整大小
  resizable: { type: Boolean, default: null },
  // 将列固定在左侧或者右侧
  fixed: String,
  // 列对其方式
  align: String,
  // 表头对齐方式
  headerAlign: String,
  // 表尾列的对齐方式
  footerAlign: String,
  // 当内容过长时显示为省略号
  showOverflow: { type: [Boolean, String], default: null },
  // 当表头内容过长时显示为省略号
  showHeaderOverflow: { type: [Boolean, String], default: null },
  // 当表尾内容过长时显示为省略号
  showFooterOverflow: { type: [Boolean, String], default: null },
  // 给单元格附加 className
  className: [String, Function],
  // 给表头单元格附加 className
  headerClassName: [String, Function],
  // 给表尾单元格附加 className
  footerClassName: [String, Function],
  // 格式化显示内容
  formatter: [Function, Array, String],
  // 是否允许排序
  sortable: Boolean,
  // 自定义排序的属性
  sortBy: [String, Function],
  // 排序的字段类型，比如字符串转数值等
  sortType: String,
  // 配置筛选条件数组
  filters: { type: Array, default: null },
  // 筛选是否允许多选
  filterMultiple: { type: Boolean, default: !0 },
  // 自定义筛选方法
  filterMethod: Function,
  // 筛选重置方法
  filterResetMethod: Function,
  // 筛选复原方法
  filterRecoverMethod: Function,
  // 筛选模板配置项
  filterRender: Object,
  // 指定为树节点
  treeNode: Boolean,
  // 是否可视
  visible: { type: Boolean, default: null },
  // 表头单元格数据导出方法
  headerExportMethod: Function,
  // 单元格数据导出方法
  exportMethod: Function,
  // 表尾单元格数据导出方法
  footerExportMethod: Function,
  // 已废弃，被 titlePrefix 替换
  titleHelp: Object,
  // 标题前缀图标配置项
  titlePrefix: Object,
  // 标题后缀图标配置项
  titleSuffix: Object,
  // 单元格值类型
  cellType: String,
  // 单元格渲染配置项
  cellRender: Object,
  // 单元格编辑渲染配置项
  editRender: Object,
  // 内容渲染配置项
  contentRender: Object,
  // 额外的参数
  params: Object
}, pr = Mt({
  name: "VxeColumn",
  props: ah,
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xetable", {}), s = gt("xecolgroup", null), u = ut.createColumn(o, e);
    return u.slots = t, Yt("$xegrid", null), Ip(o, e, u), gn(() => {
      Fp(o, n.value, u, s);
    }), fn(() => {
      Pp(o, u);
    }), () => d("div", {
      ref: n
    });
  }
}), _a = Object.assign(pr, {
  install(e) {
    e.component(pr.name, pr), e.component("VxeTableColumn", pr);
  }
}), lN = _a;
Nt.component(pr.name, pr);
Nt.component("VxeTableColumn", pr);
const hr = Mt({
  name: "VxeColgroup",
  props: ah,
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xetable", {}), s = gt("xecolgroup", null), u = ut.createColumn(o, e), c = {};
    t.header && (c.header = t.header);
    const h = { column: u };
    return u.slots = c, u.children = [], Yt("xecolgroup", h), Yt("$xegrid", null), Ip(o, e, u), gn(() => {
      Fp(o, n.value, u, s);
    }), fn(() => {
      Pp(o, u);
    }), () => d("div", {
      ref: n
    }, t.default ? t.default() : []);
  }
}), Ba = Object.assign(hr, {
  install(e) {
    e.component(hr.name, hr), e.component("VxeTableColgroup", hr);
  }
}), sN = Ba;
Nt.component(hr.name, hr);
Nt.component("VxeTableColgroup", hr);
let md;
const ur = [], iN = 500;
function aN() {
  ur.length && (ur.forEach((e) => {
    e.tarList.forEach((t) => {
      const { target: n, width: o, heighe: s } = t, u = n.clientWidth, c = n.clientHeight;
      (u && o !== u || c && s !== c) && (t.width = u, t.heighe = c, setTimeout(e.callback));
    });
  }), ch());
}
function ch() {
  clearTimeout(md), md = setTimeout(aN, v.resizeInterval || iN);
}
class cN {
  constructor(t) {
    Object.defineProperty(this, "tarList", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "callback", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.callback = t;
  }
  observe(t) {
    if (t) {
      const { tarList: n } = this;
      n.some((o) => o.target === t) || n.push({
        target: t,
        width: t.clientWidth,
        heighe: t.clientHeight
      }), ur.length || ch(), ur.some((o) => o === this) || ur.push(this);
    }
  }
  unobserve(t) {
    l.remove(ur, (n) => n.tarList.some((o) => o.target === t));
  }
  disconnect() {
    l.remove(ur, (t) => t === this);
  }
}
function uh(e) {
  return window.ResizeObserver ? new window.ResizeObserver(e) : new cN(e);
}
const Vr = "body", uN = {
  mini: 3,
  small: 2,
  medium: 1
}, gd = Mt({
  name: "VxeTableBody",
  props: {
    tableData: Array,
    tableColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = gt("$xetable", {}), n = gt("xesize", null), { xID: o, props: s, context: u, reactData: c, internalData: h } = t, { refTableHeader: i, refTableBody: m, refTableFooter: p, refTableLeftBody: b, refTableRightBody: D, refValidTooltip: A } = t.getRefMaps(), { computeEditOpts: $, computeMouseOpts: O, computeSYOpts: B, computeEmptyOpts: E, computeKeyboardOpts: T, computeTooltipOpts: y, computeRadioOpts: w, computeExpandOpts: P, computeTreeOpts: j, computeCheckboxOpts: F, computeValidOpts: N, computeRowOpts: W, computeColumnOpts: de } = t.getComputeMaps(), we = Ue(), ve = Ue(), oe = Ue(), ie = Ue(), le = Ue(), Q = Ue(), L = Ue(), I = () => {
      if (n) {
        const he = n.value;
        if (he)
          return uN[he] || 0;
      }
      return 0;
    }, V = () => {
      const { delayHover: he } = s, { lastScrollTime: xe, _isResize: me } = c;
      return !!(me || xe && Date.now() < xe + he);
    }, q = (he, xe) => {
      let me = 1;
      if (!he)
        return me;
      const Ve = j.value, Ge = Ve.children || Ve.childrenField, Ye = he[Ge];
      if (Ye && t.isTreeExpandByRow(he))
        for (let je = 0; je < Ye.length; je++)
          me += q(Ye[je]);
      return me;
    }, U = (he, xe, me) => {
      let Ve = 1;
      return me && (Ve = q(xe[me - 1])), c.rowHeight * Ve - (me ? 1 : 12 - I());
    }, pe = (he) => {
      const { row: xe, column: me } = he, { afterFullData: Ve } = h, { treeConfig: Ge } = s, Ye = j.value, { slots: je, treeNode: Ie } = me, { fullAllDataRowIdData: Ne } = h, Y = We(t, xe), ae = Ne[Y];
      let Re = 0, Se = 0, _ = [];
      if (ae && (Re = ae.level, Se = ae._index, _ = ae.items), je && je.line)
        return t.callSlot(je.line, he);
      const G = t.eqRow(Ve[0], xe);
      return Ge && Ie && (Ye.showLine || Ye.line) ? [
        d("div", {
          class: "vxe-tree--line-wrapper"
        }, [
          d("div", {
            class: "vxe-tree--line",
            style: {
              height: `${G ? 1 : U(he, _, Se)}px`,
              left: `${Re * Ye.indent + (Re ? 2 - I() : 0) + 16}px`
            }
          })
        ])
      ] : [];
    }, ke = (he, xe, me, Ve, Ge, Ye, je, Ie, Ne, Y, ae, Re) => {
      const { columnKey: Se, height: _, showOverflow: G, cellClassName: be, cellStyle: _e, align: Be, spanMethod: qe, mouseConfig: et, editConfig: Qe, editRules: tt, tooltipConfig: Ze } = s, { tableData: st, overflowX: wt, scrollYLoad: M, currentColumn: St, mergeList: xt, editStore: ht, isAllOverflow: it, validErrorMaps: Dt } = c, { afterFullData: Ct } = h, Ft = N.value, Et = F.value, $t = $.value, Lt = y.value, zt = W.value, Qt = B.value, Ut = de.value, { type: Kt, cellRender: nn, editRender: Vt, align: At, showOverflow: _t, className: Zt, treeNode: an, slots: Jt } = Ne, { actived: wn } = ht, { rHeight: _n } = Qt, { height: Xn } = zt, Zo = Vt || nn, No = Zo ? Xe.renderer.get(Zo.name) : null, Er = No ? No.cellClassName : "", Jo = No ? No.cellStyle : "", On = Lt.showAll, rn = t.getColumnIndex(Ne), Bn = t.getVTColumnIndex(Ne), Hn = mt(Vt);
      let Zn = me ? Ne.fixed !== me : Ne.fixed && wt;
      const vo = l.isUndefined(_t) || l.isNull(_t) ? G : _t;
      let ro = vo === "ellipsis";
      const Wn = vo === "title", pn = vo === !0 || vo === "tooltip";
      let zn = Wn || pn || ro, Io;
      const lo = {}, so = At || Be, jn = Dt[`${xe}:${Ne.id}`], Fo = tt && Ft.showMessage && (Ft.message === "default" ? _ || st.length > 1 : Ft.message === "inline"), Sn = { colid: Ne.id }, en = { $table: t, $grid: t.xegrid, seq: he, rowid: xe, row: Ge, rowIndex: Ye, $rowIndex: je, _rowIndex: Ie, column: Ne, columnIndex: rn, $columnIndex: Y, _columnIndex: Bn, fixed: me, type: Vr, isHidden: Zn, level: Ve, visibleData: Ct, data: st, items: Re };
      if (M && !zn && (ro = zn = !0), (Wn || pn || On || Ze) && (lo.onMouseenter = (Pt) => {
        V() || (Wn ? ya(Pt.currentTarget, Ne) : (pn || On) && t.triggerBodyTooltipEvent(Pt, en), t.dispatchEvent("cell-mouseenter", Object.assign({ cell: Pt.currentTarget }, en), Pt));
      }), (pn || On || Ze) && (lo.onMouseleave = (Pt) => {
        V() || ((pn || On) && t.handleTargetLeaveEvent(Pt), t.dispatchEvent("cell-mouseleave", Object.assign({ cell: Pt.currentTarget }, en), Pt));
      }), (Et.range || et) && (lo.onMousedown = (Pt) => {
        t.triggerCellMousedownEvent(Pt, en);
      }), lo.onClick = (Pt) => {
        t.triggerCellClickEvent(Pt, en);
      }, lo.onDblclick = (Pt) => {
        t.triggerCellDblclickEvent(Pt, en);
      }, xt.length) {
        const Pt = Lp(xt, Ie, Bn);
        if (Pt) {
          const { rowspan: cn, colspan: Jn } = Pt;
          if (!cn || !Jn)
            return null;
          cn > 1 && (Sn.rowspan = cn), Jn > 1 && (Sn.colspan = Jn);
        }
      } else if (qe) {
        const { rowspan: Pt = 1, colspan: cn = 1 } = qe(en) || {};
        if (!Pt || !cn)
          return null;
        Pt > 1 && (Sn.rowspan = Pt), cn > 1 && (Sn.colspan = cn);
      }
      Zn && xt && (Sn.colspan > 1 || Sn.rowspan > 1) && (Zn = !1), !Zn && Qe && (Vt || nn) && ($t.showStatus || $t.showUpdateStatus) && (Io = t.isUpdateByRow(Ge, Ne.field));
      const bo = [];
      if (Zn && G && it)
        bo.push(d("div", {
          class: ["vxe-cell", {
            "c--title": Wn,
            "c--tooltip": pn,
            "c--ellipsis": ro
          }],
          style: {
            maxHeight: zn && (_n || Xn) ? `${_n || Xn}px` : ""
          }
        }));
      else if (bo.push(...pe(en), d("div", {
        class: ["vxe-cell", {
          "c--title": Wn,
          "c--tooltip": pn,
          "c--ellipsis": ro
        }],
        style: {
          maxHeight: zn && (_n || Xn) ? `${_n || Xn}px` : ""
        },
        title: Wn ? t.getCellLabel(Ge, Ne) : null
      }, Ne.renderCell(en))), Fo && jn) {
        const Pt = jn.rule, cn = Jt ? Jt.valid : null, Jn = Object.assign(Object.assign({}, en), jn);
        bo.push(d("div", {
          class: ["vxe-cell--valid-error-hint", jo(Ft.className, Jn)],
          style: Pt && Pt.maxWidth ? {
            width: `${Pt.maxWidth}px`
          } : null
        }, cn ? t.callSlot(cn, Jn) : [
          d("span", {
            class: "vxe-cell--valid-error-msg"
          }, jn.content)
        ]));
      }
      return d("td", Object.assign(Object.assign(Object.assign({ class: [
        "vxe-body--column",
        Ne.id,
        {
          [`col--${so}`]: so,
          [`col--${Kt}`]: Kt,
          "col--last": Y === ae.length - 1,
          "col--tree-node": an,
          "col--edit": Hn,
          "col--ellipsis": zn,
          "fixed--hidden": Zn,
          "col--dirty": Io,
          "col--active": Qe && Hn && wn.row === Ge && (wn.column === Ne || $t.mode === "row"),
          "col--valid-error": !!jn,
          "col--current": St === Ne
        },
        jo(Er, en),
        jo(Zt, en),
        jo(be, en)
      ], key: Se || Ut.useKey ? Ne.id : Y }, Sn), { style: Object.assign({
        height: zn && (_n || Xn) ? `${_n || Xn}px` : ""
      }, l.isFunction(Jo) ? Jo(en) : Jo, l.isFunction(_e) ? _e(en) : _e) }), lo), bo);
    }, Ee = (he, xe, me) => {
      const { stripe: Ve, rowKey: Ge, highlightHoverRow: Ye, rowClassName: je, rowStyle: Ie, showOverflow: Ne, editConfig: Y, treeConfig: ae } = s, { hasFixedColumn: Re, treeExpandedMaps: Se, scrollYLoad: _, rowExpandedMaps: G, expandColumn: be, selectRadioRow: _e, pendingRowMaps: Be, pendingRowList: qe } = c, { fullAllDataRowIdData: et } = h, Qe = F.value, tt = w.value, Ze = j.value, st = $.value, wt = W.value, { transform: M } = Ze, St = Ze.children || Ze.childrenField, xt = [];
      return xe.forEach((ht, it) => {
        const Dt = {};
        let Ct = it;
        Ct = t.getRowIndex(ht), (wt.isHover || Ye) && (Dt.onMouseenter = (At) => {
          V() || t.triggerHoverEvent(At, { row: ht, rowIndex: Ct });
        }, Dt.onMouseleave = () => {
          V() || t.clearHoverRow();
        });
        const Ft = We(t, ht), Et = et[Ft];
        let $t = 0, Lt = -1, zt = 0;
        Et && ($t = Et.level, Lt = Et.seq, zt = Et._index);
        const Qt = { $table: t, seq: Lt, rowid: Ft, fixed: he, type: Vr, level: $t, row: ht, rowIndex: Ct, $rowIndex: it, _rowIndex: zt }, Ut = be && !!G[Ft];
        let Kt = !1, nn = [], Vt = !1;
        if (Y && (Vt = t.isInsertByRow(ht)), ae && !_ && !M && (nn = ht[St], Kt = nn && nn.length && !!Se[Ft]), xt.push(d("tr", Object.assign({ class: [
          "vxe-body--row",
          ae ? `row--level-${$t}` : "",
          {
            "row--stripe": Ve && (t.getVTRowIndex(ht) + 1) % 2 === 0,
            "is--new": Vt,
            "is--expand-row": Ut,
            "is--expand-tree": Kt,
            "row--new": Vt && (st.showStatus || st.showInsertStatus),
            "row--radio": tt.highlight && t.eqRow(_e, ht),
            "row--checked": Qe.highlight && t.isCheckedByCheckboxRow(ht),
            "row--pending": qe.length && !!Be[Ft]
          },
          jo(je, Qt)
        ], rowid: Ft, style: Ie ? l.isFunction(Ie) ? Ie(Qt) : Ie : null, key: Ge || wt.useKey || ae ? Ft : it }, Dt), me.map((At, _t) => ke(Lt, Ft, he, $t, ht, Ct, it, zt, At, _t, me, xe)))), Ut) {
          const At = P.value, { height: _t } = At, Zt = {};
          _t && (Zt.height = `${_t}px`), ae && (Zt.paddingLeft = `${$t * Ze.indent + 30}px`);
          const { showOverflow: an } = be, Jt = l.isUndefined(an) || l.isNull(an) ? Ne : an, wn = { $table: t, seq: Lt, column: be, fixed: he, type: Vr, level: $t, row: ht, rowIndex: Ct, $rowIndex: it, _rowIndex: zt };
          xt.push(d("tr", Object.assign({ class: "vxe-body--expanded-row", key: `expand_${Ft}`, style: Ie ? l.isFunction(Ie) ? Ie(wn) : Ie : null }, Dt), [
            d("td", {
              class: {
                "vxe-body--expanded-column": 1,
                "fixed--hidden": he && !Re,
                "col--ellipsis": Jt
              },
              colspan: me.length
            }, [
              d("div", {
                class: {
                  "vxe-body--expanded-cell": 1,
                  "is--ellipsis": _t
                },
                style: Zt
              }, [
                be.renderData(wn)
              ])
            ])
          ]));
        }
        Kt && xt.push(...Ee(he, nn, me));
      }), xt;
    };
    let Le;
    const Ae = (he, xe, me, Ve) => {
      (me || Ve) && (me && (qu(me), me.scrollTop = xe), Ve && (qu(Ve), Ve.scrollTop = xe), clearTimeout(Le), Le = setTimeout(() => {
        Rs(me), Rs(Ve), c.lastScrollTime = Date.now();
      }, 300));
    }, ce = (he) => {
      const { fixedType: xe } = e, { highlightHoverRow: me } = s, { scrollXLoad: Ve, scrollYLoad: Ge } = c, { elemStore: Ye, lastScrollTop: je, lastScrollLeft: Ie } = h, Ne = W.value, Y = i.value, ae = m.value, Re = p.value, Se = b.value, _ = D.value, G = A.value, be = we.value, _e = Y ? Y.$el : null, Be = Re ? Re.$el : null, qe = ae.$el, et = Se ? Se.$el : null, Qe = _ ? _.$el : null, tt = Ye["main-body-ySpace"], Ze = tt ? tt.value : null, st = Ye["main-body-xSpace"], wt = st ? st.value : null, M = Ge && Ze ? Ze.clientHeight : qe.clientHeight, St = Ve && wt ? wt.clientWidth : qe.clientWidth;
      let xt = be.scrollTop;
      const ht = qe.scrollLeft, it = ht !== Ie, Dt = xt !== je;
      h.lastScrollTop = xt, h.lastScrollLeft = ht, c.lastScrollTime = Date.now(), (Ne.isHover || me) && t.clearHoverRow(), et && xe === "left" ? (xt = et.scrollTop, Ae(xe, xt, qe, Qe)) : Qe && xe === "right" ? (xt = Qe.scrollTop, Ae(xe, xt, qe, et)) : (it && (_e && (_e.scrollLeft = qe.scrollLeft), Be && (Be.scrollLeft = qe.scrollLeft)), (et || Qe) && (t.checkScrolling(), Dt && Ae(xe, xt, et, Qe))), Ve && it && t.triggerScrollXEvent(he), Ge && Dt && t.triggerScrollYEvent(he), it && G && G.reactData.visible && G.updatePlacement(), t.dispatchEvent("scroll", {
        type: Vr,
        fixed: xe,
        scrollTop: xt,
        scrollLeft: ht,
        scrollHeight: qe.scrollHeight,
        scrollWidth: qe.scrollWidth,
        bodyHeight: M,
        bodyWidth: St,
        isX: it,
        isY: Dt
      }, he);
    };
    let k, Z = 0, re = 0, fe = 0, De = !1;
    const te = (he, xe, me, Ve, Ge) => {
      const { elemStore: Ye } = h, { scrollXLoad: je, scrollYLoad: Ie } = c, Ne = m.value, Y = b.value, ae = D.value, Re = Y ? Y.$el : null, Se = ae ? ae.$el : null, _ = Ne.$el, G = Ye["main-body-ySpace"], be = G ? G.value : null, _e = Ye["main-body-xSpace"], Be = _e ? _e.value : null, qe = Ie && be ? be.clientHeight : _.clientHeight, et = je && Be ? Be.clientWidth : _.clientWidth, Qe = De === xe ? Math.max(0, Z - fe) : 0;
      De = xe, Z = Math.abs(xe ? me - Qe : me + Qe), re = 0, fe = 0, clearTimeout(k);
      const tt = () => {
        if (fe < Z) {
          const { fixedType: Ze } = e;
          re = Math.max(5, Math.floor(re * 1.5)), fe = fe + re, fe > Z && (re = re - (fe - Z));
          const { scrollTop: st, clientHeight: wt, scrollHeight: M } = _, St = st + re * (xe ? -1 : 1);
          _.scrollTop = St, Re && (Re.scrollTop = St), Se && (Se.scrollTop = St), (xe ? St < M - wt : St >= 0) && (k = setTimeout(tt, 10)), t.dispatchEvent("scroll", {
            type: Vr,
            fixed: Ze,
            scrollTop: _.scrollTop,
            scrollLeft: _.scrollLeft,
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
            bodyHeight: qe,
            bodyWidth: et,
            isX: Ve,
            isY: Ge
          }, he);
        }
      };
      tt();
    }, ee = (he) => {
      const { deltaY: xe, deltaX: me } = he, { highlightHoverRow: Ve } = s, { scrollYLoad: Ge } = c, { lastScrollTop: Ye, lastScrollLeft: je } = h, Ie = W.value, Ne = m.value, Y = we.value, ae = Ne.$el, Re = xe, Se = me, _ = Re < 0;
      if (_ ? Y.scrollTop <= 0 : Y.scrollTop >= Y.scrollHeight - Y.clientHeight)
        return;
      const G = Y.scrollTop + Re, be = ae.scrollLeft + Se, _e = be !== je, Be = G !== Ye;
      Be && (he.preventDefault(), h.lastScrollTop = G, h.lastScrollLeft = be, c.lastScrollTime = Date.now(), (Ie.isHover || Ve) && t.clearHoverRow(), te(he, _, Re, _e, Be), Ge && t.triggerScrollYEvent(he));
    };
    return gn(() => {
      ne(() => {
        const { fixedType: he } = e, { elemStore: xe } = h, me = `${he || "main"}-body-`, Ve = we.value;
        xe[`${me}wrapper`] = we, xe[`${me}table`] = ve, xe[`${me}colgroup`] = oe, xe[`${me}list`] = ie, xe[`${me}xSpace`] = le, xe[`${me}ySpace`] = Q, xe[`${me}emptyBlock`] = L, Ve && (Ve.onscroll = ce, Ve._onscroll = ce);
      });
    }), Qi(() => {
      const he = we.value;
      clearTimeout(k), he && (he._onscroll = null, he.onscroll = null);
    }), fn(() => {
      const { fixedType: he } = e, { elemStore: xe } = h, me = `${he || "main"}-body-`;
      xe[`${me}wrapper`] = null, xe[`${me}table`] = null, xe[`${me}colgroup`] = null, xe[`${me}list`] = null, xe[`${me}xSpace`] = null, xe[`${me}ySpace`] = null, xe[`${me}emptyBlock`] = null;
    }), () => {
      let { fixedColumn: he, fixedType: xe, tableColumn: me } = e;
      const { keyboardConfig: Ve, showOverflow: Ge, spanMethod: Ye, mouseConfig: je } = s, { tableData: Ie, mergeList: Ne, scrollYLoad: Y, isAllOverflow: ae } = c, { visibleColumn: Re } = h, { slots: Se } = u, _ = B.value, G = E.value, be = T.value, _e = O.value;
      xe && (!c.expandColumn && (Y || Ge && ae) && !Ne.length && !Ye && !(Ve && be.isMerge) ? me = he : me = Re);
      let Be;
      const qe = Se ? Se.empty : null;
      if (qe)
        Be = t.callSlot(qe, { $table: t, $grid: t.xegrid });
      else {
        const et = G.name ? Xe.renderer.get(G.name) : null, Qe = et ? et.renderEmpty : null;
        Qe ? Be = Ht(Qe(G, { $table: t })) : Be = s.emptyText || v.i18n("vxe.table.emptyText");
      }
      return d("div", Object.assign({ ref: we, class: ["vxe-table--body-wrapper", xe ? `fixed-${xe}--wrapper` : "body--wrapper"], xid: o }, _.mode === "wheel" ? { onWheel: ee } : {}), [
        xe ? Rt() : d("div", {
          ref: le,
          class: "vxe-body--x-space"
        }),
        d("div", {
          ref: Q,
          class: "vxe-body--y-space"
        }),
        d("table", {
          ref: ve,
          class: "vxe-table--body",
          xid: o,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          d("colgroup", {
            ref: oe
          }, me.map((et, Qe) => d("col", {
            name: et.id,
            key: Qe
          }))),
          /**
           * 内容
           */
          d("tbody", {
            ref: ie
          }, Ee(xe, Ie, me))
        ]),
        d("div", {
          class: "vxe-table--checkbox-range"
        }),
        je && _e.area ? d("div", {
          class: "vxe-table--cell-area"
        }, [
          d("span", {
            class: "vxe-table--cell-main-area"
          }, _e.extension ? [
            d("span", {
              class: "vxe-table--cell-main-area-btn",
              onMousedown(et) {
                t.triggerCellExtendMousedownEvent(et, { $table: t, fixed: xe, type: Vr });
              }
            })
          ] : []),
          d("span", {
            class: "vxe-table--cell-copy-area"
          }),
          d("span", {
            class: "vxe-table--cell-extend-area"
          }),
          d("span", {
            class: "vxe-table--cell-multi-area"
          }),
          d("span", {
            class: "vxe-table--cell-active-area"
          })
        ]) : null,
        xe ? null : d("div", {
          class: "vxe-table--empty-block",
          ref: L
        }, [
          d("div", {
            class: "vxe-table--empty-content"
          }, Be)
        ])
      ]);
    };
  }
}), Ai = "header", vd = Mt({
  name: "VxeTableHeader",
  props: {
    tableData: Array,
    tableColumn: Array,
    tableGroupColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = gt("$xetable", {}), { xID: n, props: o, reactData: s, internalData: u } = t, { refElem: c, refTableBody: h, refLeftContainer: i, refRightContainer: m, refCellResizeBar: p } = t.getRefMaps(), { computeColumnOpts: b } = t.getComputeMaps(), D = Ue([]), A = Ue(), $ = Ue(), O = Ue(), B = Ue(), E = Ue(), T = Ue(), y = () => {
      const { isGroup: j } = s;
      D.value = j ? ek(e.tableGroupColumn) : [];
    }, w = (j, F) => {
      const { column: N } = F, { fixedType: W } = e, de = h.value, we = i.value, ve = m.value, oe = p.value, { clientX: ie } = j, le = A.value, Q = j.target, L = F.cell = Q.parentNode;
      let I = 0;
      const V = de.$el, q = J$(Q, le), U = Q.clientWidth, pe = Math.floor(U / 2), ke = nk(F) - pe;
      let Ee = q.left - L.clientWidth + U + ke, Le = q.left + pe;
      const Ae = document.onmousemove, ce = document.onmouseup, k = W === "left", Z = W === "right", re = c.value;
      let fe = 0;
      if (k || Z) {
        const te = k ? "nextElementSibling" : "previousElementSibling";
        let ee = L[te];
        for (; ee && !To(ee, "fixed--hidden"); )
          To(ee, "col--group") || (fe += ee.offsetWidth), ee = ee[te];
        Z && ve && (Le = ve.offsetLeft + fe);
      }
      const De = function(te) {
        te.stopPropagation(), te.preventDefault();
        const ee = te.clientX - ie;
        let se = Le + ee;
        const he = W ? 0 : V.scrollLeft;
        k ? se = Math.min(se, (ve ? ve.offsetLeft : V.clientWidth) - fe - ke) : Z ? (Ee = (we ? we.clientWidth : 0) + fe + ke, se = Math.min(se, Le + L.clientWidth - ke)) : Ee = Math.max(V.scrollLeft, Ee), I = Math.max(se, Ee), oe.style.left = `${I - he}px`;
      };
      s._isResize = !0, wo(re, "drag--resize"), oe.style.display = "block", document.onmousemove = De, document.onmouseup = function(te) {
        document.onmousemove = Ae, document.onmouseup = ce;
        const ee = N.renderWidth + (Z ? Le - I : I - Le);
        N.resizeWidth = ee, oe.style.display = "none", s._isResize = !1, u._lastResizeTime = Date.now(), t.analyColumnWidth(), t.recalculate(!0).then(() => {
          t.saveCustomResizable(), t.updateCellAreas(), t.dispatchEvent("resizable-change", Object.assign(Object.assign({}, F), { resizeWidth: ee }), te);
        }), Pn(re, "drag--resize");
      }, De(j), t.closeMenu && t.closeMenu();
    };
    return dt(() => e.tableColumn, y), gn(() => {
      ne(() => {
        const { fixedType: j } = e, { internalData: F } = t, { elemStore: N } = F, W = `${j || "main"}-header-`;
        N[`${W}wrapper`] = A, N[`${W}table`] = $, N[`${W}colgroup`] = O, N[`${W}list`] = B, N[`${W}xSpace`] = E, N[`${W}repair`] = T, y();
      });
    }), fn(() => {
      const { fixedType: j } = e, { internalData: F } = t, { elemStore: N } = F, W = `${j || "main"}-header-`;
      N[`${W}wrapper`] = null, N[`${W}table`] = null, N[`${W}colgroup`] = null, N[`${W}list`] = null, N[`${W}xSpace`] = null, N[`${W}repair`] = null;
    }), () => {
      const { fixedType: j, fixedColumn: F, tableColumn: N } = e, { resizable: W, border: de, columnKey: we, headerRowClassName: ve, headerCellClassName: oe, headerRowStyle: ie, headerCellStyle: le, showHeaderOverflow: Q, headerAlign: L, align: I, mouseConfig: V } = o, { isGroup: q, currentColumn: U, scrollXLoad: pe, overflowX: ke, scrollbarWidth: Ee } = s, { visibleColumn: Le } = u, Ae = b.value;
      let ce = D.value, k = N;
      return q ? k = Le : (j && (pe || Q) && (k = F), ce = [k]), d("div", {
        ref: A,
        class: ["vxe-table--header-wrapper", j ? `fixed-${j}--wrapper` : "body--wrapper"],
        xid: n
      }, [
        j ? Rt() : d("div", {
          ref: E,
          class: "vxe-body--x-space"
        }),
        d("table", {
          ref: $,
          class: "vxe-table--header",
          xid: n,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          d("colgroup", {
            ref: O
          }, k.map((Z, re) => d("col", {
            name: Z.id,
            key: re
          })).concat(Ee ? [
            d("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 头部
           */
          d("thead", {
            ref: B
          }, ce.map((Z, re) => d("tr", {
            class: ["vxe-header--row", ve ? l.isFunction(ve) ? ve({ $table: t, $rowIndex: re, fixed: j, type: Ai }) : ve : ""],
            style: ie ? l.isFunction(ie) ? ie({ $table: t, $rowIndex: re, fixed: j, type: Ai }) : ie : null
          }, Z.map((fe, De) => {
            const { type: te, showHeaderOverflow: ee, headerAlign: se, align: he, headerClassName: xe } = fe, me = fe.children && fe.children.length, Ve = j ? fe.fixed !== j && !me : !!fe.fixed && ke, Ge = l.isUndefined(ee) || l.isNull(ee) ? Q : ee, Ye = se || he || L || I;
            let je = Ge === "ellipsis";
            const Ie = Ge === "title", Ne = Ge === !0 || Ge === "tooltip";
            let Y = Ie || Ne || je;
            const ae = fe.filters && fe.filters.some((be) => be.checked), Re = t.getColumnIndex(fe), Se = t.getVTColumnIndex(fe), _ = { $table: t, $grid: t.xegrid, $rowIndex: re, column: fe, columnIndex: Re, $columnIndex: De, _columnIndex: Se, fixed: j, type: Ai, isHidden: Ve, hasFilter: ae }, G = {
              onClick: (be) => t.triggerHeaderCellClickEvent(be, _),
              onDblclick: (be) => t.triggerHeaderCellDblclickEvent(be, _)
            };
            return pe && !Y && (je = Y = !0), V && (G.onMousedown = (be) => t.triggerHeaderCellMousedownEvent(be, _)), d("th", Object.assign(Object.assign({ class: [
              "vxe-header--column",
              fe.id,
              {
                [`col--${Ye}`]: Ye,
                [`col--${te}`]: te,
                "col--last": De === Z.length - 1,
                "col--fixed": fe.fixed,
                "col--group": me,
                "col--ellipsis": Y,
                "fixed--hidden": Ve,
                "is--sortable": fe.sortable,
                "col--filter": !!fe.filters,
                "is--filter-active": ae,
                "col--current": U === fe
              },
              xe ? l.isFunction(xe) ? xe(_) : xe : "",
              oe ? l.isFunction(oe) ? oe(_) : oe : ""
            ], colid: fe.id, colspan: fe.colSpan > 1 ? fe.colSpan : null, rowspan: fe.rowSpan > 1 ? fe.rowSpan : null, style: le ? l.isFunction(le) ? le(_) : le : null }, G), { key: we || Ae.useKey || me ? fe.id : De }), [
              d("div", {
                class: ["vxe-cell", {
                  "c--title": Ie,
                  "c--tooltip": Ne,
                  "c--ellipsis": je
                }]
              }, fe.renderHeader(_)),
              /**
               * 列宽拖动
               */
              !Ve && !me && (l.isBoolean(fe.resizable) ? fe.resizable : Ae.resizable || W) ? d("div", {
                class: ["vxe-resizable", {
                  "is--line": !de || de === "none"
                }],
                onMousedown: (be) => w(be, _)
              }) : null
            ]);
          }).concat(Ee ? [
            d("th", {
              class: "vxe-header--gutter col--gutter"
            })
          ] : []))))
        ]),
        /**
         * 其他
         */
        d("div", {
          ref: T,
          class: "vxe-table--header-border-line"
        })
      ]);
    };
  }
}), _i = "footer";
function dN(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const { row: s, col: u, rowspan: c, colspan: h } = e[o];
    if (u > -1 && s > -1 && c && h) {
      if (s === t && u === n)
        return { rowspan: c, colspan: h };
      if (t >= s && t < s + c && n >= u && n < u + h)
        return { rowspan: 0, colspan: 0 };
    }
  }
}
const bd = Mt({
  name: "VxeTableFooter",
  props: {
    footerTableData: { type: Array, default: () => [] },
    tableColumn: { type: Array, default: () => [] },
    fixedColumn: { type: Array, default: () => [] },
    fixedType: { type: String, default: null }
  },
  setup(e) {
    const t = gt("$xetable", {}), { xID: n, props: o, reactData: s, internalData: u } = t, { refTableHeader: c, refTableBody: h, refValidTooltip: i } = t.getRefMaps(), { computeTooltipOpts: m, computeColumnOpts: p } = t.getComputeMaps(), b = Ue(), D = Ue(), A = Ue(), $ = Ue(), O = Ue(), B = (T) => {
      const { fixedType: y } = e, { scrollXLoad: w } = s, { lastScrollLeft: P } = u, j = i.value, F = c.value, N = h.value, W = F ? F.$el : null, de = b.value, we = N.$el, ve = de.scrollLeft, oe = ve !== P;
      u.lastScrollLeft = ve, s.lastScrollTime = Date.now(), W && (W.scrollLeft = ve), we && (we.scrollLeft = ve), w && oe && t.triggerScrollXEvent(T), oe && j && j.reactData.visible && j.updatePlacement(), t.dispatchEvent("scroll", { type: _i, fixed: y, scrollTop: we.scrollTop, scrollLeft: ve, isX: oe, isY: !1 }, T);
    };
    return gn(() => {
      ne(() => {
        const { fixedType: T } = e, { elemStore: y } = u, w = `${T || "main"}-footer-`;
        y[`${w}wrapper`] = b, y[`${w}table`] = D, y[`${w}colgroup`] = A, y[`${w}list`] = $, y[`${w}xSpace`] = O;
      });
    }), fn(() => {
      const { fixedType: T } = e, { elemStore: y } = u, w = `${T || "main"}-footer-`;
      y[`${w}wrapper`] = null, y[`${w}table`] = null, y[`${w}colgroup`] = null, y[`${w}list`] = null, y[`${w}xSpace`] = null;
    }), () => {
      let { fixedType: T, fixedColumn: y, tableColumn: w, footerTableData: P } = e;
      const { footerRowClassName: j, footerCellClassName: F, footerRowStyle: N, footerCellStyle: W, footerAlign: de, footerSpanMethod: we, align: ve, columnKey: oe, showFooterOverflow: ie } = o, { visibleColumn: le } = u, { scrollXLoad: Q, overflowX: L, scrollbarWidth: I, currentColumn: V, mergeFooterList: q } = s, U = m.value, pe = p.value;
      return T && (!s.expandColumn && (Q || ie) && (!q.length || !we) ? w = y : w = le), d("div", {
        ref: b,
        class: ["vxe-table--footer-wrapper", T ? `fixed-${T}--wrapper` : "body--wrapper"],
        xid: n,
        onScroll: B
      }, [
        T ? Rt() : d("div", {
          ref: O,
          class: "vxe-body--x-space"
        }),
        d("table", {
          ref: D,
          class: "vxe-table--footer",
          xid: n,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          d("colgroup", {
            ref: A
          }, w.map((ke, Ee) => d("col", {
            name: ke.id,
            key: Ee
          })).concat(I ? [
            d("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 底部
           */
          d("tfoot", {
            ref: $
          }, P.map((ke, Ee) => {
            const Le = Ee, Ae = { $table: t, row: ke, _rowIndex: Ee, $rowIndex: Le, fixed: T, type: _i };
            return d("tr", {
              class: ["vxe-footer--row", j ? l.isFunction(j) ? j(Ae) : j : ""],
              style: N ? l.isFunction(N) ? N(Ae) : N : null
            }, w.map((ce, k) => {
              const { type: Z, showFooterOverflow: re, footerAlign: fe, align: De, footerClassName: te } = ce, ee = U.showAll, se = ce.children && ce.children.length, he = T ? ce.fixed !== T && !se : ce.fixed && L, xe = l.isUndefined(re) || l.isNull(re) ? ie : re, me = fe || De || de || ve;
              let Ve = xe === "ellipsis";
              const Ge = xe === "title", Ye = xe === !0 || xe === "tooltip";
              let je = Ge || Ye || Ve;
              const Ie = { colid: ce.id }, Ne = {}, Y = t.getColumnIndex(ce), ae = t.getVTColumnIndex(ce), Re = ae, Se = {
                $table: t,
                $grid: t.xegrid,
                row: ke,
                rowIndex: Ee,
                _rowIndex: Ee,
                $rowIndex: Le,
                column: ce,
                columnIndex: Y,
                $columnIndex: k,
                _columnIndex: ae,
                itemIndex: Re,
                items: ke,
                fixed: T,
                type: _i,
                data: P
              };
              if (Q && !je && (Ve = je = !0), (Ge || Ye || ee) && (Ne.onMouseenter = (_) => {
                Ge ? ya(_.currentTarget, ce) : (Ye || ee) && t.triggerFooterTooltipEvent(_, Se);
              }), (Ye || ee) && (Ne.onMouseleave = (_) => {
                (Ye || ee) && t.handleTargetLeaveEvent(_);
              }), Ne.onClick = (_) => {
                t.dispatchEvent("footer-cell-click", Object.assign({ cell: _.currentTarget }, Se), _);
              }, Ne.onDblclick = (_) => {
                t.dispatchEvent("footer-cell-dblclick", Object.assign({ cell: _.currentTarget }, Se), _);
              }, q.length) {
                const _ = dN(q, Ee, ae);
                if (_) {
                  const { rowspan: G, colspan: be } = _;
                  if (!G || !be)
                    return null;
                  G > 1 && (Ie.rowspan = G), be > 1 && (Ie.colspan = be);
                }
              } else if (we) {
                const { rowspan: _ = 1, colspan: G = 1 } = we(Se) || {};
                if (!_ || !G)
                  return null;
                _ > 1 && (Ie.rowspan = _), G > 1 && (Ie.colspan = G);
              }
              return d("td", Object.assign(Object.assign(Object.assign(Object.assign({ class: ["vxe-footer--column", ce.id, {
                [`col--${me}`]: me,
                [`col--${Z}`]: Z,
                "col--last": k === w.length - 1,
                "fixed--hidden": he,
                "col--ellipsis": je,
                "col--current": V === ce
              }, jo(te, Se), jo(F, Se)] }, Ie), { style: W ? l.isFunction(W) ? W(Se) : W : null }), Ne), { key: oe || pe.useKey ? ce.id : k }), [
                d("div", {
                  class: ["vxe-cell", {
                    "c--title": Ge,
                    "c--tooltip": Ye,
                    "c--ellipsis": Ve
                  }]
                }, ce.renderFooter(Se))
              ]);
            }).concat(I ? [
              d("td", {
                class: "vxe-footer--gutter col--gutter"
              })
            ] : []));
          }))
        ])
      ]);
    };
  }
}), Ha = {
  /** 基本属性 */
  id: String,
  // 数据
  data: Array,
  // 表格的高度
  height: [Number, String],
  // 表格的最小高度
  minHeight: { type: [Number, String], default: () => v.table.minHeight },
  // 表格的最大高度
  maxHeight: [Number, String],
  // 已废弃，被 column-config.resizable 替换
  resizable: { type: Boolean, default: () => v.table.resizable },
  // 是否带有斑马纹
  stripe: { type: Boolean, default: () => v.table.stripe },
  // 是否带有边框
  border: { type: [Boolean, String], default: () => v.table.border },
  // 是否圆角边框
  round: { type: Boolean, default: () => v.table.round },
  // 表格的尺寸
  size: { type: String, default: () => v.table.size || v.size },
  // 列的宽度是否自撑开（可能会被废弃的参数，不要使用）
  fit: { type: Boolean, default: () => v.table.fit },
  // 表格是否加载中
  loading: Boolean,
  // 所有的列对其方式
  align: { type: String, default: () => v.table.align },
  // 所有的表头列的对齐方式
  headerAlign: { type: String, default: () => v.table.headerAlign },
  // 所有的表尾列的对齐方式
  footerAlign: { type: String, default: () => v.table.footerAlign },
  // 是否显示表头
  showHeader: { type: Boolean, default: () => v.table.showHeader },
  // （即将废弃）是否要高亮当前选中行
  highlightCurrentRow: { type: Boolean, default: () => v.table.highlightCurrentRow },
  // （即将废弃）鼠标移到行是否要高亮显示
  highlightHoverRow: { type: Boolean, default: () => v.table.highlightHoverRow },
  // （即将废弃）是否要高亮当前选中列
  highlightCurrentColumn: { type: Boolean, default: () => v.table.highlightCurrentColumn },
  // （即将废弃）鼠标移到列是否要高亮显示
  highlightHoverColumn: { type: Boolean, default: () => v.table.highlightHoverColumn },
  // （即将废弃）激活单元格编辑时是否高亮显示
  highlightCell: Boolean,
  // 是否显示表尾合计
  showFooter: Boolean,
  // 表尾数据
  footerData: Array,
  // 表尾合计的计算方法
  footerMethod: Function,
  // 给行附加 className
  rowClassName: [String, Function],
  // 给单元格附加 className
  cellClassName: [String, Function],
  // 给表头的行附加 className
  headerRowClassName: [String, Function],
  // 给表头的单元格附加 className
  headerCellClassName: [String, Function],
  // 给表尾的行附加 className
  footerRowClassName: [String, Function],
  // 给表尾的单元格附加 className
  footerCellClassName: [String, Function],
  // 给单元格附加样式
  cellStyle: [Object, Function],
  // 给表头单元格附加样式
  headerCellStyle: [Object, Function],
  // 给表尾单元格附加样式
  footerCellStyle: [Object, Function],
  // 给行附加样式
  rowStyle: [Object, Function],
  // 给表头行附加样式
  headerRowStyle: [Object, Function],
  // 给表尾行附加样式
  footerRowStyle: [Object, Function],
  // 合并指定单元格
  mergeCells: Array,
  // 合并指定的表尾
  mergeFooterItems: Array,
  // 自定义合并行或列的方法
  spanMethod: Function,
  // 表尾合并行或列
  footerSpanMethod: Function,
  // 设置所有内容过长时显示为省略号
  showOverflow: { type: [Boolean, String], default: () => v.table.showOverflow },
  // 设置表头所有内容过长时显示为省略号
  showHeaderOverflow: { type: [Boolean, String], default: () => v.table.showHeaderOverflow },
  // 设置表尾所有内容过长时显示为省略号
  showFooterOverflow: { type: [Boolean, String], default: () => v.table.showFooterOverflow },
  /** 高级属性 */
  // （即将废弃）columnKey 已废弃，被 column-config.useKey 替换
  columnKey: Boolean,
  // （即将废弃）rowKey 已废弃，被 row-config.useKey 替换
  rowKey: Boolean,
  // （即将废弃）rowId 已废弃，被 row-config.keyField 替换
  rowId: { type: String, default: () => v.table.rowId },
  zIndex: Number,
  emptyText: { type: String, default: () => v.table.emptyText },
  keepSource: { type: Boolean, default: () => v.table.keepSource },
  // 是否自动监听父容器变化去更新响应式表格宽高
  autoResize: { type: Boolean, default: () => v.table.autoResize },
  // 是否自动根据状态属性去更新响应式表格宽高
  syncResize: [Boolean, String, Number],
  // 响应式布局配置项
  resizeConfig: Object,
  // 列配置信息
  columnConfig: Object,
  // 行配置信息
  rowConfig: Object,
  // 列调整配置项
  resizableConfig: Object,
  // 序号配置项
  seqConfig: Object,
  // 排序配置项
  sortConfig: Object,
  // 筛选配置项
  filterConfig: Object,
  // 单选框配置
  radioConfig: Object,
  // 复选框配置项
  checkboxConfig: Object,
  // tooltip 配置项
  tooltipConfig: Object,
  // 导出配置项
  exportConfig: Object,
  // 导入配置项
  importConfig: Object,
  // 打印配置项
  printConfig: Object,
  // 展开行配置项
  expandConfig: Object,
  // 树形结构配置项
  treeConfig: Object,
  // 快捷菜单配置项
  menuConfig: Object,
  // 鼠标配置项
  mouseConfig: Object,
  // 区域配置项
  areaConfig: Object,
  // 按键配置项
  keyboardConfig: Object,
  // 复制粘/贴配置项
  clipConfig: Object,
  // 查找/替换配置项
  fnrConfig: Object,
  // 编辑配置项
  editConfig: Object,
  // 校验配置项
  validConfig: Object,
  // 校验规则配置项
  editRules: Object,
  // 加载中配置项
  loadingConfig: Object,
  // 空内容渲染配置项
  emptyRender: Object,
  // 自定义列配置项
  customConfig: Object,
  // 横向虚拟滚动配置项
  scrollX: Object,
  // 纵向虚拟滚动配置项
  scrollY: Object,
  // （即将废弃）优化相关
  animat: { type: Boolean, default: () => v.table.animat },
  // （可能会被废弃的参数，不要使用）
  delayHover: { type: Number, default: () => v.table.delayHover },
  // 额外的参数
  params: Object
}, Wa = [
  "update:data",
  "keydown-start",
  "keydown",
  "keydown-end",
  "paste",
  "copy",
  "cut",
  "current-change",
  "radio-change",
  "checkbox-change",
  "checkbox-all",
  "checkbox-range-start",
  "checkbox-range-change",
  "checkbox-range-end",
  "checkbox-range-select",
  "cell-click",
  "cell-dblclick",
  "cell-menu",
  "cell-mouseenter",
  "cell-mouseleave",
  "cell-selected",
  "header-cell-click",
  "header-cell-dblclick",
  "header-cell-menu",
  "footer-cell-click",
  "footer-cell-dblclick",
  "footer-cell-menu",
  "clear-merge",
  "sort-change",
  "clear-sort",
  "filter-change",
  "filter-visible",
  "clear-filter",
  "resizable-change",
  "toggle-row-expand",
  "toggle-tree-expand",
  "menu-click",
  "edit-closed",
  "edit-actived",
  "edit-activated",
  "edit-disabled",
  "valid-error",
  "scroll",
  "custom",
  "change-fnr",
  "open-fnr",
  "show-fnr",
  "hide-fnr",
  "fnr-change",
  "fnr-find",
  "fnr-find-all",
  "fnr-replace",
  "fnr-replace-all",
  "cell-area-copy",
  "cell-area-cut",
  "cell-area-paste",
  "cell-area-merge",
  "clear-cell-area-merge",
  "header-cell-area-selection",
  "cell-area-selection-invalid",
  "cell-area-selection-start",
  "cell-area-selection-drag",
  "cell-area-selection-end",
  "cell-area-extension-start",
  "cell-area-extension-drag",
  "cell-area-extension-end",
  "cell-area-selection-all-start",
  "cell-area-selection-all-end",
  "cell-area-arrows-start",
  "cell-area-arrows-end",
  "active-cell-change-start",
  "active-cell-change-end"
], fN = Ln["-webkit"] && !Ln.edge, Bi = "VXE_TABLE_CUSTOM_COLUMN_WIDTH", Hi = "VXE_TABLE_CUSTOM_COLUMN_VISIBLE", Wi = "VXE_TABLE_CUSTOM_COLUMN_FIXED", zi = "VXE_TABLE_CUSTOM_COLUMN_SORT", Tl = Mt({
  name: "VxeTable",
  props: Ha,
  emits: Wa,
  setup(e, t) {
    const { slots: n, emit: o } = t, s = Xe.tooltip, u = l.uniqueId(), c = tn(e), h = Od(), i = Gt({
      // 低性能的静态列
      staticColumns: [],
      // 渲染的列分组
      tableGroupColumn: [],
      // 可视区渲染的列
      tableColumn: [],
      // 渲染中的数据
      tableData: [],
      // 是否启用了横向 X 可视渲染方式加载
      scrollXLoad: !1,
      // 是否启用了纵向 Y 可视渲染方式加载
      scrollYLoad: !1,
      // 是否存在纵向滚动条
      overflowY: !0,
      // 是否存在横向滚动条
      overflowX: !1,
      // 纵向滚动条的宽度
      scrollbarWidth: 0,
      // 横向滚动条的高度
      scrollbarHeight: 0,
      // 最后滚动时间戳
      lastScrollTime: 0,
      // 行高
      rowHeight: 0,
      // 表格父容器的高度
      parentHeight: 0,
      // 是否使用分组表头
      isGroup: !1,
      isAllOverflow: !1,
      // 复选框属性，是否全选
      isAllSelected: !1,
      // 复选框属性，有选中且非全选状态
      isIndeterminate: !1,
      // 复选框属性，已选中的行集合
      selectCheckboxMaps: {},
      // 当前行
      currentRow: null,
      // 单选框属性，选中列
      currentColumn: null,
      // 单选框属性，选中行
      selectRadioRow: null,
      // 表尾合计数据
      footerTableData: [],
      // 展开列信息
      expandColumn: null,
      // 树节点列信息
      treeNodeColumn: null,
      hasFixedColumn: !1,
      // 已展开的行集合
      rowExpandedMaps: {},
      // 懒加载中的展开行的集合
      rowExpandLazyLoadedMaps: {},
      // 已展开树节点集合
      treeExpandedMaps: {},
      // 懒加载中的树节点的集合
      treeExpandLazyLoadedMaps: {},
      // 树节点不确定状态的集合
      treeIndeterminateMaps: {},
      // 合并单元格的对象集
      mergeList: [],
      // 合并表尾数据的对象集
      mergeFooterList: [],
      // 刷新列标识，当列筛选被改变时，触发表格刷新数据
      upDataFlag: 0,
      // 刷新列标识，当列的特定属性被改变时，触发表格刷新列
      reColumnFlag: 0,
      // 已标记的对象集
      pendingRowMaps: {},
      // 已标记的行
      pendingRowList: [],
      // 初始化标识
      initStore: {
        filter: !1,
        import: !1,
        export: !1,
        custom: !1
      },
      // 自定义列相关的信息
      customStore: {
        btnEl: null,
        isAll: !1,
        isIndeterminate: !1,
        activeBtn: !1,
        activeWrapper: !1,
        visible: !1,
        maxHeight: 0
      },
      customColumnList: [],
      // 当前选中的筛选列
      filterStore: {
        isAllSelected: !1,
        isIndeterminate: !1,
        style: null,
        options: [],
        column: null,
        multiple: !1,
        visible: !1,
        maxHeight: null
      },
      // 存放列相关的信息
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: []
      },
      // 存放快捷菜单的信息
      ctxMenuStore: {
        selected: null,
        visible: !1,
        showChild: !1,
        selectChild: null,
        list: [],
        style: null
      },
      // 存放可编辑相关信息
      editStore: {
        indexs: {
          columns: []
        },
        titles: {
          columns: []
        },
        // 选中源
        selected: {
          row: null,
          column: null
        },
        // 已复制源
        copyed: {
          cut: !1,
          rows: [],
          columns: []
        },
        // 激活
        actived: {
          row: null,
          column: null
        },
        // 当前被强制聚焦单元格，只会在鼠标点击后算聚焦
        focused: {
          row: null,
          column: null
        },
        insertMaps: {},
        removeMaps: {}
      },
      // 存放 tooltip 相关信息
      tooltipStore: {
        row: null,
        column: null,
        content: null,
        visible: !1
      },
      // 存放数据校验相关信息
      validStore: {
        visible: !1
      },
      validErrorMaps: {},
      // 导入相关信息
      importStore: {
        inited: !1,
        file: null,
        type: "",
        modeList: [],
        typeList: [],
        filename: "",
        visible: !1
      },
      importParams: {
        mode: "",
        types: null,
        message: !0
      },
      // 导出相关信息
      exportStore: {
        inited: !1,
        name: "",
        modeList: [],
        typeList: [],
        columns: [],
        isPrint: !1,
        hasFooter: !1,
        hasMerge: !1,
        hasTree: !1,
        hasColgroup: !1,
        visible: !1
      },
      exportParams: {
        filename: "",
        sheetName: "",
        mode: "",
        type: "",
        isColgroup: !1,
        isMerge: !1,
        isAllExpand: !1,
        useStyle: !1,
        original: !1,
        message: !0,
        isHeader: !1,
        isFooter: !1
      },
      scrollVMLoading: !1,
      _isResize: !1
    }), m = {
      tZindex: 0,
      elemStore: {},
      // 存放横向 X 虚拟滚动相关的信息
      scrollXStore: {
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 存放纵向 Y 虚拟滚动相关信息
      scrollYStore: {
        rowHeight: 0,
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 表格宽度
      tableWidth: 0,
      // 表格高度
      tableHeight: 0,
      // 表头高度
      headerHeight: 0,
      // 表尾高度
      footerHeight: 0,
      customHeight: 0,
      customMinHeight: 0,
      customMaxHeight: 0,
      // 当前 hover 行
      hoverRow: null,
      // 最后滚动位置
      lastScrollLeft: 0,
      lastScrollTop: 0,
      // 单选框属性，已选中保留的行
      radioReserveRow: null,
      // 复选框属性，已选中保留的行集合
      checkboxReserveRowMap: {},
      // 行数据，已展开保留的行集合
      rowExpandedReserveRowMap: {},
      // 树结构数据，已展开保留的行集合
      treeExpandedReserveRowMap: {},
      // 树结构数据，不确定状态的集合
      treeIndeterminateRowMaps: {},
      // 列表完整数据、条件处理后
      tableFullData: [],
      afterFullData: [],
      afterTreeFullData: [],
      // 列表条件处理后数据集合
      afterFullRowMaps: {},
      // 树结构完整数据、条件处理后
      tableFullTreeData: [],
      tableSynchData: [],
      tableSourceData: [],
      // 收集的列配置（带分组）
      collectColumn: [],
      // 完整所有列（不带分组）
      tableFullColumn: [],
      // 渲染所有列
      visibleColumn: [],
      // 总的缓存数据集
      fullAllDataRowIdData: {},
      // 渲染中缓存数据
      sourceDataRowIdData: {},
      fullDataRowIdData: {},
      fullColumnIdData: {},
      fullColumnFieldData: {},
      inited: !1,
      tooltipTimeout: null,
      initStatus: !1,
      isActivated: !1
    };
    let p = {}, b = {};
    const D = Ue(), A = Ue(), $ = Ue(), O = Ue(), B = Ue(), E = Ue(), T = Ue(), y = Ue(), w = Ue(), P = Ue(), j = Ue(), F = Ue(), N = Ue(), W = Ue(), de = Ue(), we = Ue(), ve = Ue(), oe = Ue(), ie = Ue(), le = Ue(), Q = gt("$xegrid", null);
    let L;
    const I = Ce(() => Object.assign({}, v.table.validConfig, e.validConfig)), V = Ce(() => Object.assign({}, v.table.scrollX, e.scrollX)), q = Ce(() => Object.assign({}, v.table.scrollY, e.scrollY)), U = Ce(() => ({
      default: 48,
      medium: 44,
      small: 40,
      mini: 36
    })), pe = Ce(() => Object.assign({}, v.table.columnConfig, e.columnConfig)), ke = Ce(() => Object.assign({}, v.table.rowConfig, e.rowConfig)), Ee = Ce(() => Object.assign({}, v.table.resizeConfig, e.resizeConfig)), Le = Ce(() => Object.assign({}, v.table.resizableConfig, e.resizableConfig)), Ae = Ce(() => Object.assign({ startIndex: 0 }, v.table.seqConfig, e.seqConfig)), ce = Ce(() => Object.assign({}, v.table.radioConfig, e.radioConfig)), k = Ce(() => Object.assign({}, v.table.checkboxConfig, e.checkboxConfig));
    let Z = Ue();
    Z = Ce(() => Object.assign({}, v.tooltip, v.table.tooltipConfig, e.tooltipConfig));
    const re = Ce(() => {
      const r = Z.value;
      return Object.assign({}, r);
    }), fe = Ce(() => {
      const r = Z.value;
      return Object.assign({ isArrow: !1 }, r);
    }), De = Ce(() => Object.assign({}, v.table.editConfig, e.editConfig)), te = Ce(() => Object.assign({ orders: ["asc", "desc", null] }, v.table.sortConfig, e.sortConfig)), ee = Ce(() => Object.assign({}, v.table.filterConfig, e.filterConfig)), se = Ce(() => Object.assign({}, v.table.mouseConfig, e.mouseConfig)), he = Ce(() => Object.assign({}, v.table.areaConfig, e.areaConfig)), xe = Ce(() => Object.assign({}, v.table.keyboardConfig, e.keyboardConfig)), me = Ce(() => Object.assign({}, v.table.clipConfig, e.clipConfig)), Ve = Ce(() => Object.assign({}, v.table.fnrConfig, e.fnrConfig)), Ge = Ce(() => Object.assign({}, v.table.menuConfig, e.menuConfig)), Ye = Ce(() => {
      const a = Ge.value.header;
      return a && a.options ? a.options : [];
    }), je = Ce(() => {
      const a = Ge.value.body;
      return a && a.options ? a.options : [];
    }), Ie = Ce(() => {
      const a = Ge.value.footer;
      return a && a.options ? a.options : [];
    }), Ne = Ce(() => {
      const r = Ge.value, a = Ye.value, f = je.value, g = Ie.value;
      return !!(e.menuConfig && mt(r) && (a.length || f.length || g.length));
    }), Y = Ce(() => {
      const { ctxMenuStore: r } = i, a = [];
      return r.list.forEach((f) => {
        f.forEach((g) => {
          a.push(g);
        });
      }), a;
    }), ae = Ce(() => Object.assign({}, v.table.exportConfig, e.exportConfig)), Re = Ce(() => Object.assign({}, v.table.importConfig, e.importConfig)), Se = Ce(() => Object.assign({}, v.table.printConfig, e.printConfig)), _ = Ce(() => Object.assign({}, v.table.expandConfig, e.expandConfig)), G = Ce(() => Object.assign({}, v.table.treeConfig, e.treeConfig)), be = Ce(() => Object.assign({}, v.table.emptyRender, e.emptyRender)), _e = Ce(() => Object.assign({}, v.table.loadingConfig, e.loadingConfig)), Be = Ce(() => e.border ? Math.max(2, Math.ceil(i.scrollbarWidth / i.tableColumn.length)) : 1), qe = Ce(() => Object.assign({}, v.table.customConfig, e.customConfig)), et = Ce(() => {
      const { collectColumn: r } = m;
      let a = 0;
      return r.forEach((f) => {
        f.fixed && a++;
      }), a;
    }), Qe = Ce(() => {
      const r = et.value, a = pe.value, { maxFixedSize: f } = a;
      return f ? r >= f : !1;
    }), tt = Ce(() => {
      const { border: r } = e;
      return r === !0 ? "full" : r || "default";
    }), Ze = Ce(() => {
      const { treeConfig: r } = e, { tableData: a } = i, { tableFullData: f } = m, g = k.value, { strict: C, checkMethod: S } = g;
      return C ? a.length || f.length ? S ? f.every((R) => !S({ row: R })) : !1 : !0 : !1;
    }), st = {
      refElem: D,
      refTooltip: A,
      refValidTooltip: O,
      refTableFilter: E,
      refTableCustom: T,
      refTableMenu: B,
      refTableHeader: y,
      refTableBody: w,
      refTableFooter: P,
      refTableLeftHeader: j,
      refTableLeftBody: F,
      refTableLeftFooter: N,
      refTableRightHeader: W,
      refTableRightBody: de,
      refTableRightFooter: we,
      refLeftContainer: ve,
      refRightContainer: oe,
      refCellResizeBar: ie
    }, wt = {
      computeSize: c,
      computeValidOpts: I,
      computeSXOpts: V,
      computeSYOpts: q,
      computeColumnOpts: pe,
      computeRowOpts: ke,
      computeResizeleOpts: Ee,
      computeResizableOpts: Le,
      computeSeqOpts: Ae,
      computeRadioOpts: ce,
      computeCheckboxOpts: k,
      computeTooltipOpts: Z,
      computeEditOpts: De,
      computeSortOpts: te,
      computeFilterOpts: ee,
      computeMouseOpts: se,
      computeAreaOpts: he,
      computeKeyboardOpts: xe,
      computeClipOpts: me,
      computeFNROpts: Ve,
      computeHeaderMenu: Ye,
      computeBodyMenu: je,
      computeFooterMenu: Ie,
      computeIsMenu: Ne,
      computeMenuOpts: Ge,
      computeExportOpts: ae,
      computeImportOpts: Re,
      computePrintOpts: Se,
      computeExpandOpts: _,
      computeTreeOpts: G,
      computeEmptyOpts: be,
      computeLoadingOpts: _e,
      computeCustomOpts: qe,
      computeFixedColumnSize: et,
      computeIsMaxFixedColumn: Qe,
      computeIsAllCheckboxDisabled: Ze
    }, M = {
      xID: u,
      props: e,
      context: t,
      instance: h,
      reactData: i,
      internalData: m,
      getRefMaps: () => st,
      getComputeMaps: () => wt,
      xegrid: Q
    }, St = (r, a, f) => {
      const g = l.get(r, f), C = l.get(a, f);
      return eo(g) && eo(C) ? !0 : l.isString(g) || l.isNumber(g) ? "" + g == "" + C : l.isEqual(g, C);
    }, xt = (r) => {
      const a = te.value, { orders: f } = a, g = r.order || null, C = f.indexOf(g) + 1;
      return f[C < f.length ? C : 0];
    }, ht = (r) => {
      const a = v.version, f = l.toStringJSON(localStorage.getItem(r) || "");
      return f && f._v === a ? f : { _v: a };
    }, it = (r) => {
      const { fullAllDataRowIdData: a } = m, f = {};
      return l.each(r, (g, C) => {
        a[C] && (f[C] = g);
      }), f;
    }, Dt = (r) => {
      const { fullDataRowIdData: a } = m, f = [];
      return l.each(r, (g, C) => {
        a[C] && M.findRowIndexOf(f, a[C].row) === -1 && f.push(a[C].row);
      }), f;
    }, Ct = () => {
      const { visibleColumn: r } = m, a = w.value, f = a ? a.$el : null;
      if (f) {
        const { scrollLeft: g, clientWidth: C } = f, S = g + C;
        let R = -1, z = 0, H = 0;
        for (let K = 0, X = r.length; K < X && (z += r[K].renderWidth, R === -1 && g < z && (R = K), !(R >= 0 && (H++, z > S))); K++)
          ;
        return { toVisibleIndex: Math.max(0, R), visibleSize: Math.max(8, H) };
      }
      return { toVisibleIndex: 0, visibleSize: 8 };
    }, Ft = () => {
      const r = y.value, a = w.value, f = a ? a.$el : null, g = c.value, C = U.value;
      if (f) {
        const S = r ? r.$el : null;
        let R = 0, z;
        z = f.querySelector("tr"), !z && S && (z = S.querySelector("tr")), z && (R = z.clientHeight), R || (R = C[g || "default"]);
        const H = Math.max(8, Math.ceil(f.clientHeight / R) + 2);
        return { rowHeight: R, visibleSize: H };
      }
      return { rowHeight: 0, visibleSize: 8 };
    }, Et = (r, a, f) => {
      for (let g = 0, C = r.length; g < C; g++) {
        const S = r[g], { startIndex: R, endIndex: z } = a, H = S[f], K = S[f + "span"], X = H + K;
        H < R && R < X && (a.startIndex = H), H < z && z < X && (a.endIndex = X), (a.startIndex !== R || a.endIndex !== z) && (g = -1);
      }
    }, $t = (r, a, f) => {
      if (r) {
        const { treeConfig: g } = e, { visibleColumn: C } = m;
        l.isArray(r) || (r = [r]), g && r.length && ot("vxe.error.noTree", ["merge-cells | merge-footer-items"]), r.forEach((S) => {
          let { row: R, col: z, rowspan: H, colspan: K } = S;
          if (f && l.isNumber(R) && (R = f[R]), l.isNumber(z) && (z = C[z]), (f ? R : l.isNumber(R)) && z && (H || K) && (H = l.toNumber(H) || 1, K = l.toNumber(K) || 1, H > 1 || K > 1)) {
            const X = l.findIndexOf(a, (Me) => (Me._row === R || We(M, Me._row) === We(M, R)) && (Me._col.id === z || Me._col.id === z.id)), ge = a[X];
            if (ge)
              ge.rowspan = H, ge.colspan = K, ge._rowspan = H, ge._colspan = K;
            else {
              const Me = f ? M.findRowIndexOf(f, R) : R, Oe = p.getVTColumnIndex(z);
              a.push({
                row: Me,
                col: Oe,
                rowspan: H,
                colspan: K,
                _row: R,
                _col: z,
                _rowspan: H,
                _colspan: K
              });
            }
          }
        });
      }
    }, Lt = (r, a, f) => {
      const g = [];
      if (r) {
        const { treeConfig: C } = e, { visibleColumn: S } = m;
        l.isArray(r) || (r = [r]), C && r.length && ot("vxe.error.noTree", ["merge-cells | merge-footer-items"]), r.forEach((R) => {
          let { row: z, col: H } = R;
          f && l.isNumber(z) && (z = f[z]), l.isNumber(H) && (H = S[H]);
          const K = l.findIndexOf(a, (X) => (X._row === z || We(M, X._row) === We(M, z)) && (X._col.id === H || X._col.id === H.id));
          if (K > -1) {
            const X = a.splice(K, 1);
            g.push(X[0]);
          }
        });
      }
      return g;
    }, zt = () => {
      const { tableFullColumn: r } = m;
      r.forEach((a) => {
        a.order = null;
      });
    }, Qt = (r) => {
      const { parentHeight: a } = i, f = e[r];
      let g = 0;
      if (f)
        if (f === "auto")
          g = a;
        else {
          const C = M.getExcludeHeight();
          xl(f) ? g = Math.floor((l.toInteger(f) || 1) / 100 * a) : g = l.toNumber(f), g = Math.max(40, g - C);
        }
      return g;
    }, Ut = () => {
      const { id: r, customConfig: a } = e, f = qe.value, { storage: g } = f, C = g === !0, S = C ? {} : Object.assign({}, g || {}), R = C || S.resizable, z = C || S.visible, H = C || S.fixed, K = C || S.sort;
      if (a && (R || z || H || K)) {
        const X = {};
        if (!r) {
          ot("vxe.error.reqProp", ["id"]);
          return;
        }
        if (R) {
          const $e = ht(Bi)[r];
          $e && l.each($e, (Te, Fe) => {
            X[Fe] = { resizeWidth: Te };
          });
        }
        if (H) {
          const $e = ht(Wi)[r];
          $e && $e.split(",").forEach((Fe) => {
            const [ye, ze] = Fe.split("|");
            X[ye] ? X[ye].fixed = ze : X[ye] = { fixed: ze };
          });
        }
        let ge = !1;
        if (K) {
          const $e = ht(zi)[r];
          $e && l.each($e, (Te, Fe) => {
            X[Fe] ? X[Fe].renderSortNumber = Te : X[Fe] = { renderSortNumber: Te }, ge || (ge = !0);
          });
        }
        if (z) {
          const $e = ht(Hi)[r];
          if ($e) {
            const Te = $e.split("|"), Fe = Te[0] ? Te[0].split(",") : [], ye = Te[1] ? Te[1].split(",") : [];
            Fe.forEach((ze) => {
              X[ze] ? X[ze].visible = !1 : X[ze] = { visible: !1 };
            }), ye.forEach((ze) => {
              X[ze] ? X[ze].visible = !0 : X[ze] = { visible: !0 };
            });
          }
        }
        let { collectColumn: Me } = m;
        const Oe = {};
        l.eachTree(Me, ($e) => {
          const Te = $e.getKey();
          Te && (Oe[Te] = $e);
        }), l.each(X, ({ visible: $e, resizeWidth: Te, fixed: Fe, renderSortNumber: ye }, ze) => {
          const Je = Oe[ze];
          Je && (l.isNumber(Te) && (Je.resizeWidth = Te), l.isBoolean($e) && (Je.visible = $e), Fe && (Je.fixed = Fe), ye && (Je.renderSortNumber = Number(ye)));
        }), ge && (Me = l.orderBy(Me, "renderSortNumber"), m.collectColumn = Me, m.tableFullColumn = Pt(Me));
      }
    }, Kt = () => {
      const { tableFullColumn: r, collectColumn: a } = m, f = m.fullColumnIdData = {}, g = m.fullColumnFieldData = {}, C = se.value, S = pe.value, R = ke.value, z = a.some(_r);
      let H = !!e.showOverflow, K, X, ge, Me, Oe;
      const $e = (Te, Fe, ye, ze, Je) => {
        const { id: at, field: rt, fixed: ft, type: kt, treeNode: Bt } = Te, It = { column: Te, colid: at, index: Fe, items: ye, parent: Je };
        rt && (process.env.NODE_ENV === "development" && g[rt] && lt("vxe.error.colRepet", ["field", rt]), g[rt] = It), !Oe && kt === "html" && (Oe = Te), Bt ? (process.env.NODE_ENV === "development" && X && lt("vxe.error.colRepet", ["tree-node", Bt]), X || (X = Te)) : kt === "expand" && (process.env.NODE_ENV === "development" && K && lt("vxe.error.colRepet", ["type", kt]), K || (K = Te)), process.env.NODE_ENV === "development" && (kt === "checkbox" ? (ge && lt("vxe.error.colRepet", ["type", kt]), ge || (ge = Te)) : kt === "radio" && (Me && lt("vxe.error.colRepet", ["type", kt]), Me || (Me = Te))), H && Te.showOverflow === !1 && (H = !1), f[at] && ot("vxe.error.colRepet", ["colId", at]), f[at] = It;
      };
      z ? l.eachTree(a, (Te, Fe, ye, ze, Je, at) => {
        Te.level = at.length, $e(Te, Fe, ye, ze, Je);
      }) : r.forEach($e), process.env.NODE_ENV === "development" && K && C.area && ot("vxe.error.errConflicts", ["mouse-config.area", "column.type=expand"]), process.env.NODE_ENV === "development" && Oe && (S.useKey || ot("vxe.error.reqProp", ["column-config.useKey", "column.type=html"]), R.useKey || ot("vxe.error.reqProp", ["row-config.useKey", "column.type=html"])), i.isGroup = z, i.treeNodeColumn = X, i.expandColumn = K, i.isAllOverflow = H;
    }, nn = () => {
      m.customHeight = Qt("height"), m.customMinHeight = Qt("minHeight"), m.customMaxHeight = Qt("maxHeight");
    }, Vt = () => {
      const r = y.value, a = w.value, f = P.value, g = a ? a.$el : null, C = r ? r.$el : null, S = f ? f.$el : null;
      if (!g)
        return;
      let R = 0;
      const z = 40, H = g.clientWidth - 1;
      let K = H, X = K / 100;
      const { fit: ge } = e, { columnStore: Me } = i, { resizeList: Oe, pxMinList: $e, pxList: Te, scaleList: Fe, scaleMinList: ye, autoList: ze } = Me;
      if ($e.forEach((Tt) => {
        const Ot = l.toInteger(Tt.minWidth);
        R += Ot, Tt.renderWidth = Ot;
      }), ye.forEach((Tt) => {
        const Ot = Math.floor(l.toInteger(Tt.minWidth) * X);
        R += Ot, Tt.renderWidth = Ot;
      }), Fe.forEach((Tt) => {
        const Ot = Math.floor(l.toInteger(Tt.width) * X);
        R += Ot, Tt.renderWidth = Ot;
      }), Te.forEach((Tt) => {
        const Ot = l.toInteger(Tt.width);
        R += Ot, Tt.renderWidth = Ot;
      }), Oe.forEach((Tt) => {
        const Ot = l.toInteger(Tt.resizeWidth);
        R += Ot, Tt.renderWidth = Ot;
      }), K -= R, X = K > 0 ? Math.floor(K / (ye.length + $e.length + ze.length)) : 0, ge ? K > 0 && ye.concat($e).forEach((Tt) => {
        R += X, Tt.renderWidth += X;
      }) : X = z, ze.forEach((Tt) => {
        const Ot = Math.max(X, z);
        Tt.renderWidth = Ot, R += Ot;
      }), ge) {
        const Tt = Fe.concat(ye).concat($e).concat(ze);
        let Ot = Tt.length - 1;
        if (Ot > 0) {
          let jt = H - R;
          if (jt > 0) {
            for (; jt > 0 && Ot >= 0; )
              jt--, Tt[Ot--].renderWidth++;
            R = H;
          }
        }
      }
      const Je = g.offsetHeight, at = g.scrollHeight > g.clientHeight;
      let rt = 0;
      at && (rt = Math.max(g.offsetWidth - g.clientWidth, 0)), i.scrollbarWidth = rt, i.overflowY = at, m.tableWidth = R, m.tableHeight = Je;
      let ft = 0;
      C && (ft = C.clientHeight, ne(() => {
        C && g && C.scrollLeft !== g.scrollLeft && (C.scrollLeft = g.scrollLeft);
      })), m.headerHeight = ft;
      let kt = !1, Bt = 0, It = 0;
      S ? (Bt = S.offsetHeight, kt = R > S.clientWidth, kt && (It = Math.max(Bt - S.clientHeight, 0))) : (kt = R > H, kt && (It = Math.max(Je - g.clientHeight, 0))), m.footerHeight = Bt, i.overflowX = kt, i.scrollbarHeight = It, nn(), i.parentHeight = Math.max(m.headerHeight + Bt + 20, b.getParentHeight()), kt && b.checkScrolling();
    }, At = (r) => {
      const { sortBy: a, sortType: f } = r;
      return (g) => {
        let C;
        return a ? C = l.isFunction(a) ? a({ row: g, column: r }) : l.get(g, a) : C = b.getCellLabel(g, r), !f || f === "auto" ? isNaN(C) ? C : l.toNumber(C) : f === "number" ? l.toNumber(C) : f === "string" ? l.toValueString(C) : C;
      };
    }, _t = () => {
      const { treeConfig: r } = e, { afterFullData: a, fullDataRowIdData: f, fullAllDataRowIdData: g } = m, { afterTreeFullData: C } = m, S = G.value, R = S.children || S.childrenField, z = {};
      r ? l.eachTree(C, (H, K, X, ge) => {
        const Me = We(M, H), Oe = g[Me], $e = ge.map((Te, Fe) => Fe % 2 === 0 ? Number(Te) + 1 : ".").join("");
        if (Oe)
          Oe.seq = $e, Oe._index = K;
        else {
          const Te = { row: H, rowid: Me, seq: $e, index: -1, $index: -1, _index: K, items: [], parent: null, level: 0 };
          g[Me] = Te, f[Me] = Te;
        }
        z[Me] = H;
      }, { children: S.transform ? S.mapChildrenField : R }) : a.forEach((H, K) => {
        const X = We(M, H), ge = g[X], Me = K + 1;
        if (ge)
          ge.seq = Me, ge._index = K;
        else {
          const Oe = { row: H, rowid: X, seq: Me, index: -1, $index: -1, _index: K, items: [], parent: null, level: 0 };
          g[X] = Oe, f[X] = Oe;
        }
        z[X] = H;
      }), m.afterFullRowMaps = z;
    }, Zt = () => {
      const { treeConfig: r } = e, { treeExpandedMaps: a } = i, f = G.value;
      if (r && f.transform) {
        const g = [], C = {};
        return l.eachTree(m.afterTreeFullData, (S, R, z, H, K) => {
          const X = We(M, S), ge = We(M, K);
          (!K || C[ge] && a[ge]) && (C[X] = 1, g.push(S));
        }, { children: f.mapChildrenField }), m.afterFullData = g, tl(g), g;
      }
      return m.afterFullData;
    }, an = () => {
      const { treeConfig: r } = e, { tableFullColumn: a, tableFullData: f, tableFullTreeData: g } = m, C = ee.value, S = te.value, R = G.value, { transform: z } = R, { remote: H, filterMethod: K } = C, { remote: X, sortMethod: ge, multiple: Me, chronological: Oe } = S;
      let $e = [], Te = [];
      if (!H || !X) {
        const Fe = [];
        let ye = [];
        if (a.forEach((ze) => {
          const { field: Je, sortable: at, order: rt, filters: ft } = ze;
          if (!H && ft && ft.length) {
            const kt = [], Bt = [];
            ft.forEach((It) => {
              It.checked && (Bt.push(It), kt.push(It.value));
            }), Bt.length && Fe.push({ column: ze, valueList: kt, itemList: Bt });
          }
          !X && at && rt && ye.push({ column: ze, field: Je, property: Je, order: rt, sortTime: ze.sortTime });
        }), Me && Oe && ye.length > 1 && (ye = l.orderBy(ye, "sortTime")), !H && Fe.length) {
          const ze = (Je) => Fe.every(({ column: at, valueList: rt, itemList: ft }) => {
            const { filterMethod: kt, filterRender: Bt } = at, It = Bt ? Xe.renderer.get(Bt.name) : null, Tt = It ? It.filterMethod : null, Ot = It ? It.defaultFilterMethod : null, jt = Yn(Je, at);
            return kt ? ft.some((un) => kt({ value: un.value, option: un, cellValue: jt, row: Je, column: at, $table: M })) : Tt ? ft.some((un) => Tt({ value: un.value, option: un, cellValue: jt, row: Je, column: at, $table: M })) : K ? K({ options: ft, values: rt, cellValue: jt, row: Je, column: at }) : Ot ? ft.some((un) => Ot({ value: un.value, option: un, cellValue: jt, row: Je, column: at, $table: M })) : rt.indexOf(l.get(Je, at.field)) > -1;
          });
          r && z ? (Te = l.searchTree(g, ze, Object.assign(Object.assign({}, R), { original: !0 })), $e = Te) : ($e = r ? g.filter(ze) : f.filter(ze), Te = $e);
        } else
          r && z ? (Te = l.searchTree(g, () => !0, Object.assign(Object.assign({}, R), { original: !0 })), $e = Te) : ($e = r ? g.slice(0) : f.slice(0), Te = $e);
        if (!X && ye.length)
          if (r && z) {
            if (ge) {
              const ze = ge({ data: Te, sortList: ye, $table: M });
              Te = l.isArray(ze) ? ze : Te;
            } else
              Te = l.orderBy(Te, ye.map(({ column: ze, order: Je }) => [At(ze), Je]));
            $e = Te;
          } else {
            if (ge) {
              const ze = ge({ data: $e, sortList: ye, $table: M });
              $e = l.isArray(ze) ? ze : $e;
            } else
              $e = l.orderBy($e, ye.map(({ column: ze, order: Je }) => [At(ze), Je]));
            Te = $e;
          }
      } else
        r && z ? (Te = l.searchTree(g, () => !0, Object.assign(Object.assign({}, R), { original: !0 })), $e = Te) : ($e = r ? g.slice(0) : f.slice(0), Te = $e);
      m.afterFullData = $e, m.afterTreeFullData = Te, _t();
    }, Jt = () => {
      const { border: r, showFooter: a, showOverflow: f, showHeaderOverflow: g, showFooterOverflow: C, mouseConfig: S, spanMethod: R, footerSpanMethod: z, keyboardConfig: H } = e, { isGroup: K, currentRow: X, tableColumn: ge, scrollXLoad: Me, scrollYLoad: Oe, scrollbarWidth: $e, scrollbarHeight: Te, columnStore: Fe, editStore: ye, mergeList: ze, mergeFooterList: Je, isAllOverflow: at } = i;
      let { visibleColumn: rt, fullColumnIdData: ft, tableHeight: kt, tableWidth: Bt, headerHeight: It, footerHeight: Tt, elemStore: Ot, customHeight: jt, customMinHeight: un, customMaxHeight: Qn } = m;
      const Sr = ["main", "left", "right"], er = le.value, ll = Be.value, tr = se.value, Co = xe.value, nr = Ot["main-body-wrapper"], or = nr ? nr.value : null;
      return er && (er.style.top = `${It}px`, er.style.height = or ? `${or.offsetHeight - Te}px` : ""), jt > 0 && a && (jt += Te), Sr.forEach((kn, rr) => {
        const vn = rr > 0 ? kn : "", ln = ["header", "body", "footer"], Tn = vn === "left";
        let bn = [], lr;
        vn && (bn = Tn ? Fe.leftList : Fe.rightList, lr = Tn ? ve.value : oe.value), ln.forEach((qn) => {
          const cc = Ot[`${kn}-${qn}-wrapper`], io = cc ? cc.value : null, uc = Ot[`${kn}-${qn}-table`], sr = uc ? uc.value : null;
          if (qn === "header") {
            let Rn = Bt, xn = ge;
            K ? xn = rt : vn && (Me || g) && (xn = bn), Rn = xn.reduce((dn, sl) => dn + sl.renderWidth, 0), sr && (sr.style.width = Rn ? `${Rn + $e}px` : "");
            const hn = Ot[`${kn}-${qn}-repair`], Nn = hn ? hn.value : null;
            Nn && (Nn.style.width = `${Bt}px`);
            const sn = Ot[`${kn}-${qn}-list`], Dn = sn ? sn.value : null;
            K && Dn && l.arrayEach(Dn.querySelectorAll(".col--group"), (dn) => {
              const sl = p.getColumnNode(dn);
              if (sl) {
                const as = sl.item, { showHeaderOverflow: ii } = as, Po = l.isBoolean(ii) ? ii : g, Tr = Po === "title" || (Po === !0 || Po === "tooltip") || Po === "ellipsis";
                let il = 0, al = 0;
                Tr && l.eachTree(as.children, (cs) => {
                  (!cs.children || !as.children.length) && al++, il += cs.renderWidth;
                }, { children: "children" }), dn.style.width = Tr ? `${il - al - (r ? 2 : 0)}px` : "";
              }
            });
          } else if (qn === "body") {
            const Rn = Ot[`${kn}-${qn}-emptyBlock`], xn = Rn ? Rn.value : null;
            if (Ri(io)) {
              let sn = 0;
              const Dn = un - It - Tt;
              if (Qn && (sn = Qn - It - Tt, vn && (sn -= a ? 0 : Te), sn = Math.max(Dn, sn), io.style.maxHeight = `${sn}px`), jt) {
                let dn = jt - It - Tt;
                vn && (dn -= a ? 0 : Te), sn && (dn = Math.min(sn, dn)), io.style.height = `${Math.max(Dn, dn)}px`;
              } else
                io.style.height = "";
              io.style.minHeight = `${Dn}px`;
            }
            lr && (Ri(io) && (io.style.top = `${It}px`), lr.style.height = `${(jt > 0 ? jt - It - Tt : kt) + It + Tt - Te * (a ? 2 : 1)}px`, lr.style.width = `${bn.reduce((sn, Dn) => sn + Dn.renderWidth, Tn ? 0 : $e)}px`);
            let hn = Bt, Nn = ge;
            vn && (!i.expandColumn && (Oe || f && at) && !ze.length && !R && !(H && Co.isMerge) ? Nn = bn : Nn = rt), hn = Nn.reduce((sn, Dn) => sn + Dn.renderWidth, 0), sr && (sr.style.width = hn ? `${hn}px` : "", sr.style.paddingRight = $e && vn && (Ln["-moz"] || Ln.safari) ? `${$e}px` : ""), xn && (xn.style.width = hn ? `${hn}px` : "");
          } else if (qn === "footer") {
            let Rn = Bt, xn = ge;
            vn && (!i.expandColumn && (Me || C) && (!Je.length || !z) ? xn = bn : xn = rt), Rn = xn.reduce((hn, Nn) => hn + Nn.renderWidth, 0), Ri(io) && (lr && (io.style.top = `${jt > 0 ? jt - Tt : kt + It}px`), io.style.marginTop = `${-Math.max(1, Te)}px`), sr && (sr.style.width = Rn ? `${Rn + $e}px` : "");
          }
          const dc = Ot[`${kn}-${qn}-colgroup`], fc = dc ? dc.value : null;
          fc && l.arrayEach(fc.children, (Rn) => {
            const xn = Rn.getAttribute("name");
            if (xn === "col_gutter" && (Rn.style.width = `${$e}px`), ft[xn]) {
              const hn = ft[xn].column, { showHeaderOverflow: Nn, showFooterOverflow: sn, showOverflow: Dn } = hn;
              let dn;
              Rn.style.width = `${hn.renderWidth}px`, qn === "header" ? dn = l.isUndefined(Nn) || l.isNull(Nn) ? g : Nn : qn === "footer" ? dn = l.isUndefined(sn) || l.isNull(sn) ? C : sn : dn = l.isUndefined(Dn) || l.isNull(Dn) ? f : Dn;
              let Po = dn === "title" || (dn === !0 || dn === "tooltip") || dn === "ellipsis";
              const ai = Ot[`${kn}-${qn}-list`], ci = ai ? ai.value : null;
              Oe && !Po && (Po = !0), ci && l.arrayEach(ci.querySelectorAll(`.${hn.id}`), (ui) => {
                const Tr = parseInt(ui.getAttribute("colspan") || 1), il = ui.querySelector(".vxe-cell");
                let al = hn.renderWidth;
                if (il) {
                  if (Tr > 1) {
                    const cs = p.getColumnIndex(hn);
                    for (let di = 1; di < Tr; di++) {
                      const pc = p.getColumns(cs + di);
                      pc && (al += pc.renderWidth);
                    }
                  }
                  il.style.width = Po ? `${al - ll * Tr}px` : "";
                }
              });
            }
          });
        });
      }), X && p.setCurrentRow(X), S && tr.selected && ye.selected.row && ye.selected.column && M.addCellSelectedClass(), ne();
    }, wn = (r) => M.triggerValidate ? M.triggerValidate(r) : ne(), _n = (r, a) => {
      wn("blur").catch((f) => f).then(() => {
        M.handleActived(a, r).then(() => wn("change")).catch((f) => f);
      });
    }, Xn = () => {
      const { sortConfig: r } = e;
      if (r) {
        const a = te.value;
        let { defaultSort: f } = a;
        f && (l.isArray(f) || (f = [f]), f.length && ((r.multiple ? f : f.slice(0, 1)).forEach((g, C) => {
          const { field: S, order: R } = g;
          if (S && R) {
            const z = p.getColumnByField(S);
            z && z.sortable && (z.order = R, z.sortTime = Date.now() + C);
          }
        }), a.remote || b.handleTableData(!0).then(Jt)));
      }
    }, Zo = () => {
      const { checkboxConfig: r } = e;
      if (r) {
        const { fullDataRowIdData: a } = m, f = k.value, { checkAll: g, checkRowKeys: C } = f;
        if (g)
          Hn(!0, !0);
        else if (C) {
          const S = [];
          C.forEach((R) => {
            a[R] && S.push(a[R].row);
          }), Bn(S, !0, !0);
        }
      }
    }, No = () => {
      const { radioConfig: r } = e;
      if (r) {
        const { fullDataRowIdData: a } = m, f = ce.value, { checkRowKey: g, reserve: C } = f;
        if (g && (a[g] && rn(a[g].row, !0), C)) {
          const S = ar(M);
          m.radioReserveRow = { [S]: g };
        }
      }
    }, Er = () => {
      const { expandConfig: r } = e;
      if (r) {
        const { fullDataRowIdData: a } = m, f = _.value, { expandAll: g, expandRowKeys: C } = f;
        if (g)
          p.setAllRowExpand(!0);
        else if (C) {
          const S = [];
          C.forEach((R) => {
            a[R] && S.push(a[R].row);
          }), p.setRowExpand(S, !0);
        }
      }
    }, Jo = (r) => {
      ce.value.reserve && (m.radioReserveRow = r);
    }, On = (r, a) => {
      const { checkboxReserveRowMap: f } = m;
      if (k.value.reserve) {
        const C = We(M, r);
        a ? f[C] = r : f[C] && delete f[C];
      }
    }, rn = (r, a) => {
      const f = ce.value, { checkMethod: g } = f;
      return r && (a || !g || g({ row: r })) && (i.selectRadioRow = r, Jo(r)), ne();
    }, Bn = (r, a, f) => (r && !l.isArray(r) && (r = [r]), r.forEach((g) => b.handleSelectRow({ row: g }, !!a, f)), ne()), Hn = (r, a) => {
      const { treeConfig: f } = e, { selectCheckboxMaps: g } = i, { afterFullData: C, afterFullRowMaps: S, checkboxReserveRowMap: R } = m, z = G.value, H = z.children || z.childrenField, K = k.value, { checkField: X, reserve: ge, checkStrictly: Me, checkMethod: Oe } = K, $e = K.indeterminateField || K.halfField, Te = {};
      if (f || l.each(g, (Fe, ye) => {
        S[ye] || (Te[ye] = Fe);
      }), Me)
        i.isAllSelected = r;
      else {
        if (X) {
          const Fe = (ye) => {
            (a || !Oe || Oe({ row: ye })) && (r && (Te[We(M, ye)] = ye), l.set(ye, X, r)), f && $e && l.set(ye, $e, !1);
          };
          f ? l.eachTree(C, Fe, { children: H }) : C.forEach(Fe);
        } else
          f ? r ? l.eachTree(C, (Fe) => {
            (a || !Oe || Oe({ row: Fe })) && (Te[We(M, Fe)] = Fe);
          }, { children: H }) : !a && Oe && l.eachTree(C, (Fe) => {
            const ye = We(M, Fe);
            !Oe({ row: Fe }) && g[ye] && (Te[ye] = Fe);
          }, { children: H }) : r ? !a && Oe ? C.forEach((Fe) => {
            const ye = We(M, Fe);
            (g[ye] || Oe({ row: Fe })) && (Te[ye] = Fe);
          }) : C.forEach((Fe) => {
            Te[We(M, Fe)] = Fe;
          }) : !a && Oe && C.forEach((Fe) => {
            const ye = We(M, Fe);
            !Oe({ row: Fe }) && g[ye] && (Te[ye] = Fe);
          });
        ge && (r ? l.each(Te, (Fe, ye) => {
          R[ye] = Fe;
        }) : C.forEach((Fe) => On(Fe, !1))), i.selectCheckboxMaps = X ? {} : Te;
      }
      return i.treeIndeterminateMaps = {}, m.treeIndeterminateRowMaps = {}, b.checkSelectionStatus(), ne();
    }, Zn = () => {
      const { treeConfig: r } = e, { expandColumn: a, currentRow: f, selectCheckboxMaps: g, selectRadioRow: C, rowExpandedMaps: S, treeExpandedMaps: R } = i, { fullDataRowIdData: z, fullAllDataRowIdData: H, radioReserveRow: K } = m, X = _.value, ge = G.value, Me = ce.value, Oe = k.value;
      if (C && !H[We(M, C)] && (i.selectRadioRow = null), Me.reserve && K) {
        const $e = We(M, K);
        z[$e] && rn(z[$e].row, !0);
      }
      i.selectCheckboxMaps = it(g), Oe.reserve && Bn(Dt(m.checkboxReserveRowMap), !0, !0), f && !H[We(M, f)] && (i.currentRow = null), i.rowExpandedMaps = a ? it(S) : {}, a && X.reserve && p.setRowExpand(Dt(m.rowExpandedReserveRowMap), !0), i.treeExpandedMaps = r ? it(R) : {}, r && ge.reserve && p.setTreeExpand(Dt(m.treeExpandedReserveRowMap), !0);
    }, vo = () => {
      const { treeConfig: r } = e;
      if (r) {
        const { tableFullData: a } = m, f = G.value, { expandAll: g, expandRowKeys: C } = f, S = f.children || f.childrenField;
        if (g)
          p.setAllTreeExpand(!0);
        else if (C) {
          const R = [], z = ar(M);
          C.forEach((H) => {
            const K = l.findTree(a, (X) => H === l.get(X, z), { children: S });
            K && R.push(K.item);
          }), p.setTreeExpand(R, !0);
        }
      }
    }, ro = (r) => {
      const a = G.value, f = k.value, { transform: g, loadMethod: C } = a, { checkStrictly: S } = f;
      return new Promise((R) => {
        if (C) {
          const { treeExpandLazyLoadedMaps: z } = i, { fullAllDataRowIdData: H } = m, K = We(M, r), X = H[K];
          z[K] = r, C({ $table: M, row: r }).then((ge) => {
            if (X.treeLoaded = !0, z[K] && delete z[K], l.isArray(ge) || (ge = []), ge)
              return p.loadTreeChildren(r, ge).then((Me) => {
                const { treeExpandedMaps: Oe } = i;
                return Me.length && !Oe[K] && (Oe[K] = r), !S && p.isCheckedByCheckboxRow(r) && Bn(Me, !0), ne().then(() => {
                  if (g)
                    return b.handleTableData();
                });
              });
          }).catch(() => {
            const { treeExpandLazyLoadedMaps: ge } = i;
            X.treeLoaded = !1, ge[K] && delete ge[K];
          }).finally(() => {
            ne().then(() => p.recalculate()).then(() => R());
          });
        } else
          R();
      });
    }, Wn = (r, a) => {
      const { treeExpandedReserveRowMap: f } = m;
      if (G.value.reserve) {
        const C = We(M, r);
        a ? f[C] = r : f[C] && delete f[C];
      }
    }, pn = (r) => new Promise((a) => {
      const f = _.value, { loadMethod: g } = f;
      if (g) {
        const { fullAllDataRowIdData: C } = m, { rowExpandLazyLoadedMaps: S } = i, R = We(M, r), z = C[R];
        S[R] = r, g({ $table: M, row: r, rowIndex: p.getRowIndex(r), $rowIndex: p.getVMRowIndex(r) }).then(() => {
          const { rowExpandedMaps: H } = i;
          z.expandLoaded = !0, H[R] = r;
        }).catch(() => {
          z.expandLoaded = !1;
        }).finally(() => {
          const { rowExpandLazyLoadedMaps: H } = i;
          H[R] && delete H[R], ne().then(() => p.recalculate()).then(() => a());
        });
      } else
        a();
    }), zn = (r, a) => {
      const { rowExpandedReserveRowMap: f } = m;
      if (_.value.reserve) {
        const C = We(M, r);
        a ? f[C] = r : f[C] && delete f[C];
      }
    }, Io = () => {
      const { mergeCells: r } = e;
      r && p.setMergeCells(r);
    }, lo = () => {
      const { mergeFooterItems: r } = e;
      r && p.setMergeFooterItems(r);
    }, so = () => ne().then(() => {
      const { scrollXLoad: r, scrollYLoad: a } = i, { scrollXStore: f, scrollYStore: g } = m, C = q.value, S = V.value;
      if (r) {
        const { visibleSize: H } = Ct(), K = S.oSize ? l.toNumber(S.oSize) : Ln.edge ? 5 : 0;
        f.offsetSize = K, f.visibleSize = H, f.endIndex = Math.max(f.startIndex + f.visibleSize + K, f.endIndex), b.updateScrollXData();
      } else
        b.updateScrollXSpace();
      const { rowHeight: R, visibleSize: z } = Ft();
      if (g.rowHeight = R, a) {
        const H = C.oSize ? l.toNumber(C.oSize) : Ln.edge ? 10 : 0;
        g.offsetSize = H, g.visibleSize = z, g.endIndex = Math.max(g.startIndex + z + H, g.endIndex), b.updateScrollYData();
      } else
        b.updateScrollYSpace();
      i.rowHeight = R, ne(Jt);
    }), jn = (r) => {
      const { keepSource: a, treeConfig: f } = e, { editStore: g, scrollYLoad: C } = i, { scrollYStore: S, scrollXStore: R, lastScrollLeft: z, lastScrollTop: H } = m, K = G.value, { transform: X } = K, ge = K.children || K.childrenField;
      let Me = [], Oe = Gt(r ? r.slice(0) : []);
      f && (X ? (process.env.NODE_ENV === "development" && (K.rowField || ot("vxe.error.reqProp", ["tree-config.rowField"]), K.parentField || ot("vxe.error.reqProp", ["tree-config.parentField"]), ge || ot("vxe.error.reqProp", ["tree-config.childrenField"]), K.mapChildrenField || ot("vxe.error.reqProp", ["tree-config.mapChildrenField"]), ge === K.mapChildrenField && ot("vxe.error.errConflicts", ["tree-config.childrenField", "tree-config.mapChildrenField"])), Me = l.toArrayTree(Oe, {
        key: K.rowField,
        parentKey: K.parentField,
        children: ge,
        mapChildren: K.mapChildrenField
      }), Oe = Me.slice(0)) : Me = Oe.slice(0)), S.startIndex = 0, S.endIndex = 1, R.startIndex = 0, R.endIndex = 1, i.scrollVMLoading = !1, g.insertMaps = {}, g.removeMaps = {};
      const $e = tl(Oe);
      return i.scrollYLoad = $e, m.tableFullData = Oe, m.tableFullTreeData = Me, b.cacheRowMap(!0), m.tableSynchData = r, a && b.cacheSourceMap(Oe), process.env.NODE_ENV === "development" && $e && (e.height || e.maxHeight || ot("vxe.error.reqProp", ["table.height | table.max-height | table.scroll-y={enabled: false}"]), e.showOverflow || lt("vxe.error.reqProp", ["table.show-overflow"]), e.spanMethod && lt("vxe.error.scrollErrProp", ["table.span-method"])), M.clearCellAreas && e.mouseConfig && (M.clearCellAreas(), M.clearCopyCellArea()), p.clearMergeCells(), p.clearMergeFooterItems(), b.handleTableData(!0), p.updateFooter(), ne().then(() => {
        nn(), Jt();
      }).then(() => {
        so();
      }).then(() => ($e && (S.endIndex = S.visibleSize), Zn(), b.checkSelectionStatus(), new Promise((Te) => {
        ne().then(() => p.recalculate()).then(() => {
          let Fe = z, ye = H;
          const ze = V.value, Je = q.value;
          ze.scrollToLeftOnChange && (Fe = 0), Je.scrollToTopOnChange && (ye = 0), C === $e ? Di(M, Fe, ye).then(Te) : setTimeout(() => Di(M, Fe, ye).then(Te));
        });
      })));
    }, Fo = () => {
      Zo(), No(), Er(), vo(), Io(), lo(), ne(() => setTimeout(() => p.recalculate()));
    }, Sn = () => {
      Xn();
    }, en = () => {
      const { scrollXLoad: r } = i, { visibleColumn: a, scrollXStore: f, fullColumnIdData: g } = m, C = r ? a.slice(f.startIndex, f.endIndex) : a.slice(0);
      C.forEach((S, R) => {
        const z = S.id, H = g[z];
        H && (H.$index = R);
      }), i.tableColumn = C;
    }, bo = () => {
      const { mergeList: r, mergeFooterList: a } = i, { scrollXStore: f } = m, { startIndex: g, endIndex: C, offsetSize: S } = f, { toVisibleIndex: R, visibleSize: z } = Ct(), H = {
        startIndex: Math.max(0, R - 1 - S),
        endIndex: R + z + S
      };
      Et(r.concat(a), H, "col");
      const { startIndex: K, endIndex: X } = H;
      (R <= g || R >= C - z - 1) && (g !== K || C !== X) && (f.startIndex = K, f.endIndex = X, b.updateScrollXData()), p.closeTooltip();
    }, Pt = (r) => {
      const a = [];
      return r.forEach((f) => {
        a.push(...f.children && f.children.length ? Pt(f.children) : [f]);
      }), a;
    }, cn = () => {
      const r = [], a = [], f = [], { isGroup: g, columnStore: C } = i, S = V.value, { collectColumn: R, tableFullColumn: z, scrollXStore: H, fullColumnIdData: K } = m;
      if (g) {
        const Me = [], Oe = [], $e = [];
        l.eachTree(R, (Te, Fe, ye, ze, Je) => {
          const at = _r(Te);
          Je && Je.fixed && (Te.fixed = Je.fixed), Je && Te.fixed !== Je.fixed && ot("vxe.error.groupFixed"), at ? Te.visible = !!l.findTree(Te.children, (rt) => _r(rt) ? !1 : rt.visible) : Te.visible && (Te.fixed === "left" ? r.push(Te) : Te.fixed === "right" ? f.push(Te) : a.push(Te));
        }), R.forEach((Te) => {
          Te.visible && (Te.fixed === "left" ? Me.push(Te) : Te.fixed === "right" ? $e.push(Te) : Oe.push(Te));
        }), i.tableGroupColumn = Me.concat(Oe).concat($e);
      } else
        z.forEach((Me) => {
          Me.visible && (Me.fixed === "left" ? r.push(Me) : Me.fixed === "right" ? f.push(Me) : a.push(Me));
        });
      const X = r.concat(a).concat(f), ge = !!S.enabled && S.gt > -1 && (S.gt === 0 || S.gt < z.length);
      if (i.hasFixedColumn = r.length > 0 || f.length > 0, Object.assign(C, { leftList: r, centerList: a, rightList: f }), ge) {
        process.env.NODE_ENV === "development" && (e.spanMethod && lt("vxe.error.scrollErrProp", ["span-method"]), e.footerSpanMethod && lt("vxe.error.scrollErrProp", ["footer-span-method"]));
        const { visibleSize: Me } = Ct();
        H.startIndex = 0, H.endIndex = Me, H.visibleSize = Me;
      }
      return (X.length !== m.visibleColumn.length || !m.visibleColumn.every((Me, Oe) => Me === X[Oe])) && (p.clearMergeCells(), p.clearMergeFooterItems()), i.scrollXLoad = ge, X.forEach((Me, Oe) => {
        const $e = Me.id, Te = K[$e];
        Te && (Te._index = Oe);
      }), m.visibleColumn = X, en(), p.updateFooter().then(() => p.recalculate()).then(() => (p.updateCellAreas(), p.recalculate()));
    }, Jn = () => {
      const { collectColumn: r } = m;
      r.forEach((a, f) => {
        const g = f + 1;
        a.sortNumber = g, a.renderSortNumber = g;
      });
    }, Qo = (r) => {
      m.collectColumn = r;
      const a = Pt(r);
      return m.tableFullColumn = a, Jn(), Ut(), Kt(), cn().then(() => {
        i.scrollXLoad && bo();
      }), p.clearMergeCells(), p.clearMergeFooterItems(), b.handleTableData(!0), process.env.NODE_ENV === "development" && (i.scrollXLoad || i.scrollYLoad) && i.expandColumn && lt("vxe.error.scrollErrProp", ["column.type=expand"]), ne().then(() => (L && L.syncUpdate({ collectColumn: r, $table: M }), p.recalculate()));
    }, tl = (r) => {
      const { treeConfig: a } = e, f = q.value, g = G.value, { transform: C } = g, S = r || m.tableFullData, R = (C || !a) && !!f.enabled && f.gt > -1 && (f.gt === 0 || f.gt < S.length);
      return i.scrollYLoad = R, R;
    }, ns = (r, a) => {
      const { treeExpandedMaps: f, treeExpandLazyLoadedMaps: g, treeNodeColumn: C } = i, S = Object.assign({}, f), { fullAllDataRowIdData: R, tableFullData: z } = m, H = G.value, { reserve: K, lazy: X, accordion: ge, toggleMethod: Me } = H, Oe = H.children || H.childrenField, $e = H.hasChild || H.hasChildField, Te = [], Fe = p.getColumnIndex(C), ye = p.getVMColumnIndex(C);
      let ze = Me ? r.filter((Je) => Me({ $table: M, expanded: a, column: C, columnIndex: Fe, $columnIndex: ye, row: Je })) : r;
      if (ge) {
        ze = ze.length ? [ze[ze.length - 1]] : [];
        const Je = l.findTree(z, (at) => at === ze[0], { children: Oe });
        Je && Je.items.forEach((at) => {
          const rt = We(M, at);
          S[rt] && delete S[rt];
        });
      }
      return a ? ze.forEach((Je) => {
        const at = We(M, Je);
        if (!S[at]) {
          const rt = R[at];
          X && Je[$e] && !rt.treeLoaded && !g[at] ? Te.push(ro(Je)) : Je[Oe] && Je[Oe].length && (S[at] = Je);
        }
      }) : ze.forEach((Je) => {
        const at = We(M, Je);
        S[at] && delete S[at];
      }), K && ze.forEach((Je) => Wn(Je, a)), i.treeExpandedMaps = S, Promise.all(Te).then(() => p.recalculate());
    }, Zs = (r, a) => ns(r, a).then(() => (Zt(), b.handleTableData())).then(() => p.recalculate()), os = (r) => {
      const { mergeList: a } = i, { scrollYStore: f } = m, { startIndex: g, endIndex: C, visibleSize: S, offsetSize: R, rowHeight: z } = f, K = (r.currentTarget || r.target).scrollTop, X = Math.floor(K / z), ge = {
        startIndex: Math.max(0, X - 1 - R),
        endIndex: X + S + R
      };
      Et(a, ge, "row");
      const { startIndex: Me, endIndex: Oe } = ge;
      (X <= g || X >= C - S - 1) && (g !== Me || C !== Oe) && (f.startIndex = Me, f.endIndex = Oe, b.updateScrollYData());
    }, wr = (r) => function(a) {
      const { fullAllDataRowIdData: f } = m;
      if (a) {
        const g = We(M, a), C = f[g];
        if (C)
          return C[r];
      }
      return -1;
    }, xo = (r) => function(a) {
      const { fullColumnIdData: f } = m;
      if (a) {
        const g = f[a.id];
        if (g)
          return g[r];
      }
      return -1;
    }, Js = l.debounce(function(r) {
      os(r);
    }, 20, { leading: !1, trailing: !0 });
    let rs;
    p = {
      dispatchEvent(r, a, f) {
        o(r, Object.assign({ $table: M, $grid: Q, $event: f }, a));
      },
      /**
       * 重置表格的一切数据状态
       */
      clearAll() {
        return lk(M);
      },
      /**
       * 同步 data 数据（即将废弃）
       * 如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑
       * 对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到
       */
      syncData() {
        return lt("vxe.error.delFunc", ["syncData", "getData"]), ne().then(() => (i.tableData = [], o("update:data", m.tableFullData), ne()));
      },
      /**
       * 手动处理数据，用于手动排序与筛选
       * 对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到
       */
      updateData() {
        const { scrollXLoad: r, scrollYLoad: a } = i;
        return b.handleTableData(!0).then(() => {
          if (p.updateFooter(), r || a)
            return r && b.updateScrollXSpace(), a && b.updateScrollYSpace(), p.refreshScroll();
        }).then(() => (p.updateCellAreas(), p.recalculate(!0))).then(() => {
          setTimeout(() => M.recalculate(), 50);
        });
      },
      /**
       * 重新加载数据，不会清空表格状态
       * @param {Array} datas 数据
       */
      loadData(r) {
        const { inited: a, initStatus: f } = m;
        return jn(r).then(() => (m.inited = !0, m.initStatus = !0, f || Fo(), a || Sn(), p.recalculate()));
      },
      /**
       * 重新加载数据，会清空表格状态
       * @param {Array} datas 数据
       */
      reloadData(r) {
        const { inited: a } = m;
        return p.clearAll().then(() => (m.inited = !0, m.initStatus = !0, jn(r))).then(() => (Fo(), a || Sn(), p.recalculate()));
      },
      /**
       * 局部加载行数据并恢复到初始状态
       * 对于行数据需要局部更改的场景中可能会用到
       * @param {Row} row 行对象
       * @param {Object} record 新数据
       * @param {String} field 字段名
       */
      reloadRow(r, a, f) {
        const { keepSource: g } = e, { tableData: C } = i, { tableSourceData: S } = m;
        if (g) {
          const R = p.getRowIndex(r), z = S[R];
          if (z && r)
            if (f) {
              const H = l.get(a || r, f);
              l.set(r, f, H), l.set(z, f, H);
            } else {
              const H = l.clone(Object.assign({}, a), !0);
              l.destructuring(z, Object.assign(r, H));
            }
          i.tableData = C.slice(0);
        } else
          process.env.NODE_ENV === "development" && lt("vxe.error.reqProp", ["keep-source"]);
        return ne();
      },
      /**
       * 用于树结构，给行数据加载子节点
       */
      loadTreeChildren(r, a) {
        const { keepSource: f } = e, { tableSourceData: g, fullDataRowIdData: C, fullAllDataRowIdData: S, sourceDataRowIdData: R } = m, z = G.value, { transform: H, mapChildrenField: K } = z, X = z.children || z.childrenField, ge = S[We(M, r)], Me = ge ? ge.level : 0;
        return p.createData(a).then((Oe) => {
          if (f) {
            const $e = We(M, r), Te = l.findTree(g, (Fe) => $e === We(M, Fe), { children: X });
            Te && (Te.item[X] = l.clone(Oe, !0)), Oe.forEach((Fe) => {
              const ye = We(M, Fe);
              R[ye] = l.clone(Fe, !0);
            });
          }
          return l.eachTree(Oe, ($e, Te, Fe, ye, ze, Je) => {
            const at = We(M, $e), rt = ze || ge.row, ft = { row: $e, rowid: at, seq: -1, index: Te, _index: -1, $index: -1, items: Fe, parent: rt, level: Me + Je.length };
            C[at] = ft, S[at] = ft;
          }, { children: X }), r[X] = Oe, H && (r[K] = Oe), _t(), Oe;
        });
      },
      /**
       * 加载列配置
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      loadColumn(r) {
        const a = l.mapTree(r, (f) => Gt(ut.createColumn(M, f)));
        return Qo(a);
      },
      /**
       * 加载列配置并恢复到初始状态
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      reloadColumn(r) {
        return p.clearAll().then(() => p.loadColumn(r));
      },
      /**
       * 根据 tr 元素获取对应的 row 信息
       * @param {Element} tr 元素
       */
      getRowNode(r) {
        if (r) {
          const { fullAllDataRowIdData: a } = m, f = r.getAttribute("rowid");
          if (f) {
            const g = a[f];
            if (g)
              return { rowid: g.rowid, item: g.row, index: g.index, items: g.items, parent: g.parent };
          }
        }
        return null;
      },
      /**
       * 根据 th/td 元素获取对应的 column 信息
       * @param {Element} cell 元素
       */
      getColumnNode(r) {
        if (r) {
          const { fullColumnIdData: a } = m, f = r.getAttribute("colid");
          if (f) {
            const g = a[f];
            if (g)
              return { colid: g.colid, item: g.column, index: g.index, items: g.items, parent: g.parent };
          }
        }
        return null;
      },
      /**
       * 根据 row 获取序号
       * @param {Row} row 行对象
       */
      getRowSeq: wr("seq"),
      /**
       * 根据 row 获取相对于 data 中的索引
       * @param {Row} row 行对象
       */
      getRowIndex: wr("index"),
      /**
       * 根据 row 获取相对于当前数据中的索引
       * @param {Row} row 行对象
       */
      getVTRowIndex: wr("_index"),
      /**
       * 根据 row 获取渲染中的虚拟索引
       * @param {Row} row 行对象
       */
      getVMRowIndex: wr("$index"),
      /**
       * 根据 column 获取相对于 columns 中的索引
       * @param {ColumnInfo} column 列配置
       */
      getColumnIndex: xo("index"),
      /**
       * 根据 column 获取相对于当前表格列中的索引
       * @param {ColumnInfo} column 列配置
       */
      getVTColumnIndex: xo("_index"),
      /**
       * 根据 column 获取渲染中的虚拟索引
       * @param {ColumnInfo} column 列配置
       */
      getVMColumnIndex: xo("$index"),
      /**
       * 创建 data 对象
       * 对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义
       * @param {Array} records 新数据
       */
      createData(r) {
        return ne().then(() => Gt(b.defineField(r)));
      },
      /**
       * 创建 Row|Rows 对象
       * 对于某些特殊场景需要对数据进行手动插入时可能会用到
       * @param {Array/Object} records 新数据
       */
      createRow(r) {
        const a = l.isArray(r);
        return a || (r = [r || {}]), p.createData(r).then((f) => a ? f : f[0]);
      },
      /**
       * 还原数据
       * 如果不传任何参数，则还原整个表格
       * 如果传 row 则还原一行
       * 如果传 rows 则还原多行
       * 如果还额外传了 field 则还原指定的单元格数据
       */
      revertData(r, a) {
        const { keepSource: f } = e, { tableSourceData: g, sourceDataRowIdData: C } = m;
        if (!f)
          return process.env.NODE_ENV === "development" && lt("vxe.error.reqProp", ["keep-source"]), ne();
        let S = r;
        return r ? l.isArray(r) || (S = [r]) : S = l.toArray(M.getUpdateRecords()), S.length && S.forEach((R) => {
          if (!p.isInsertByRow(R)) {
            const z = We(M, R), H = C[z];
            H && R && (a ? l.set(R, a, l.clone(l.get(H, a), !0)) : l.destructuring(R, l.clone(H, !0)));
          }
        }), r ? ne() : p.reloadData(g);
      },
      /**
       * 清空单元格内容
       * 如果不创参数，则清空整个表格内容
       * 如果传 row 则清空一行内容
       * 如果传 rows 则清空多行内容
       * 如果还额外传了 field 则清空指定单元格内容
       * @param {Array/Row} rows 行数据
       * @param {String} field 字段名
       */
      clearData(r, a) {
        const { tableFullData: f, visibleColumn: g } = m;
        return arguments.length ? r && !l.isArray(r) && (r = [r]) : r = f, a ? r.forEach((C) => l.set(C, a, null)) : r.forEach((C) => {
          g.forEach((S) => {
            S.field && Eo(C, S, null);
          });
        }), ne();
      },
      /**
       * 检查是否为临时行数据
       * @param {Row} row 行对象
       */
      isInsertByRow(r) {
        const { editStore: a } = i, f = We(M, r);
        return a.insertMaps[f];
      },
      /**
       * 删除所有新增的临时数据
       * @returns
       */
      removeInsertRow() {
        const { editStore: r } = i;
        return r.insertMaps = {}, M.remove(M.getInsertRecords());
      },
      /**
       * 检查行或列数据是否发生改变
       * @param {Row} row 行对象
       * @param {String} field 字段名
       */
      isUpdateByRow(r, a) {
        const { keepSource: f } = e, { tableFullColumn: g, fullDataRowIdData: C, sourceDataRowIdData: S } = m;
        if (f) {
          const R = We(M, r);
          if (!C[R])
            return !1;
          const z = S[R];
          if (z) {
            if (arguments.length > 1)
              return !St(z, r, a);
            for (let H = 0, K = g.length; H < K; H++) {
              const X = g[H].field;
              if (X && !St(z, r, X))
                return !0;
            }
          }
        }
        return !1;
      },
      /**
       * 获取表格的可视列，也可以指定索引获取列
       * @param {Number} columnIndex 索引
       */
      getColumns(r) {
        const a = m.visibleColumn;
        return l.isUndefined(r) ? a.slice(0) : a[r];
      },
      /**
       * 根据列的唯一主键获取列
       * @param {String} colid 列主键
       */
      getColumnById(r) {
        const a = m.fullColumnIdData;
        return r && a[r] ? a[r].column : null;
      },
      /**
       * 根据列的字段名获取列
       * @param {String} field 字段名
       */
      getColumnByField(r) {
        const a = m.fullColumnFieldData;
        return r && a[r] ? a[r].column : null;
      },
      /**
       * 获取当前表格的列
       * 收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列
       */
      getTableColumn() {
        return {
          collectColumn: m.collectColumn.slice(0),
          fullColumn: m.tableFullColumn.slice(0),
          visibleColumn: m.visibleColumn.slice(0),
          tableColumn: i.tableColumn.slice(0)
        };
      },
      /**
       * 获取数据，和 data 的行为一致，也可以指定索引获取数据
       */
      getData(r) {
        const a = e.data || m.tableSynchData;
        return l.isUndefined(r) ? a.slice(0) : a[r];
      },
      /**
       * 用于多选行，获取已选中的数据
       */
      getCheckboxRecords(r) {
        const { treeConfig: a } = e, { tableFullData: f, afterFullData: g, afterTreeFullData: C, tableFullTreeData: S, fullDataRowIdData: R, afterFullRowMaps: z } = m, H = G.value, K = k.value, { transform: X, mapChildrenField: ge } = H, { checkField: Me } = K, Oe = H.children || H.childrenField;
        let $e = [];
        const Te = r ? X ? S : f : X ? C : g;
        if (Me)
          a ? $e = l.filterTree(Te, (Fe) => l.get(Fe, Me), { children: X ? ge : Oe }) : $e = Te.filter((Fe) => l.get(Fe, Me));
        else {
          const { selectCheckboxMaps: Fe } = i;
          l.each(Fe, (ye, ze) => {
            (r ? R[ze] : z[ze]) && $e.push(ye);
          });
        }
        return $e;
      },
      /**
       * 只对 tree-config 有效，获取行的父级
       */
      getParentRow(r) {
        const { treeConfig: a } = e, { fullDataRowIdData: f } = m;
        if (r && a) {
          let g;
          if (l.isString(r) ? g = r : g = We(M, r), g) {
            const C = f[g];
            return C ? C.parent : null;
          }
        }
        return null;
      },
      /**
       * 根据行的唯一主键获取行
       * @param {String/Number} rowid 行主键
       */
      getRowById(r) {
        const { fullDataRowIdData: a } = m, f = l.eqNull(r) ? "" : encodeURIComponent(r || "");
        return a[f] ? a[f].row : null;
      },
      /**
       * 根据行获取行的唯一主键
       * @param {Row} row 行对象
       */
      getRowid(r) {
        return We(M, r);
      },
      /**
       * 获取处理后的表格数据
       * 如果存在筛选条件，继续处理
       * 如果存在排序，继续处理
       */
      getTableData() {
        const { tableData: r, footerTableData: a } = i, { tableFullData: f, afterFullData: g, tableFullTreeData: C } = m;
        return {
          fullData: e.treeConfig ? C.slice(0) : f.slice(0),
          visibleData: g.slice(0),
          tableData: r.slice(0),
          footerData: a.slice(0)
        };
      },
      /**
       * 设置为固定列
       */
      setColumnFixed(r, a) {
        const f = Cn(M, r), g = Gu(M, f), C = Qe.value, S = pe.value, { maxFixedSize: R } = S;
        return g && g.fixed !== a ? !g.fixed && C ? (Xe.modal && Xe.modal.message({
          status: "error",
          content: v.i18n("vxe.table.maxFixedCol", [R])
        }), ne()) : (l.eachTree([g], (z) => {
          z.fixed = a;
        }), b.saveCustomFixed(), p.refreshColumn()) : ne();
      },
      /**
       * 取消指定固定列
       */
      clearColumnFixed(r) {
        const a = Cn(M, r), f = Gu(M, a);
        return f && f.fixed ? (l.eachTree([f], (g) => {
          g.fixed = null;
        }), b.saveCustomFixed(), p.refreshColumn()) : ne();
      },
      /**
       * 隐藏指定列
       */
      hideColumn(r) {
        const a = Cn(M, r);
        return a && a.visible ? (a.visible = !1, b.handleCustom()) : ne();
      },
      /**
       * 显示指定列
       */
      showColumn(r) {
        const a = Cn(M, r);
        return a && !a.visible ? (a.visible = !0, b.handleCustom()) : ne();
      },
      setColumnWidth(r, a) {
        const f = Cn(M, r);
        if (f) {
          const g = l.toInteger(a);
          let C = g;
          if (xl(a)) {
            const S = w.value, R = S ? S.$el : null, z = R ? R.clientWidth - 1 : 0;
            C = Math.floor(g * z);
          }
          f.renderWidth = C;
        }
        return ne();
      },
      getColumnWidth(r) {
        const a = Cn(M, r);
        return a ? a.renderWidth : 0;
      },
      /**
       * 手动重置列的显示隐藏、列宽拖动的状态、固定列、排序列；
       * 如果为 true 则重置所有状态
       * 如果已关联工具栏，则会同步更新
       */
      resetColumn(r) {
        const { collectColumn: a } = m, f = qe.value, { checkMethod: g } = f, C = Object.assign({
          visible: !0,
          resizable: r === !0,
          fixed: r === !0,
          sort: r === !0
        }, r);
        return l.eachTree(a, (S) => {
          C.resizable && (S.resizeWidth = 0), C.fixed && (S.fixed = S.defaultFixed), C.sort && (S.renderSortNumber = S.sortNumber), (!g || g({ column: S })) && (S.visible = S.defaultVisible);
        }), C.resizable && b.saveCustomResizable(!0), C.sort && b.saveCustomSort(!0), C.fixed && b.saveCustomFixed(), b.handleCustom();
      },
      /**
       * 刷新列信息
       * 将固定的列左边、右边分别靠边
       * 如果传 true 则会检查列顺序并排序
       */
      refreshColumn(r) {
        if (r) {
          const a = l.orderBy(m.collectColumn, "renderSortNumber");
          m.collectColumn = a;
          const f = Pt(a);
          m.tableFullColumn = f, Kt();
        }
        return cn().then(() => p.refreshScroll()).then(() => p.recalculate());
      },
      /**
       * 刷新滚动操作，手动同步滚动相关位置（对于某些特殊的操作，比如滚动条错位、固定列不同步）
       */
      refreshScroll() {
        const { lastScrollLeft: r, lastScrollTop: a } = m, f = w.value, g = P.value, C = F.value, S = de.value, R = f ? f.$el : null, z = C ? C.$el : null, H = S ? S.$el : null, K = g ? g.$el : null;
        return new Promise((X) => {
          if (r || a)
            return Di(M, r, a).then().then(() => {
              setTimeout(X, 30);
            });
          gs(R, a), gs(z, a), gs(H, a), Wu(K, r), setTimeout(X, 30);
        });
      },
      /**
       * 计算单元格列宽，动态分配可用剩余空间
       * 支持 width=? width=?px width=?% min-width=? min-width=?px min-width=?%
       */
      recalculate(r) {
        return Vt(), r === !0 ? so().then(() => (Vt(), so())) : so();
      },
      openTooltip(r, a) {
        const f = $.value;
        return f ? f.open(r, a) : ne();
      },
      /**
       * 关闭 tooltip
       */
      closeTooltip() {
        const { tooltipStore: r } = i, a = A.value, f = $.value;
        return r.visible && (Object.assign(r, {
          row: null,
          column: null,
          content: null,
          visible: !1
        }), a && a.close()), f && f.close(), ne();
      },
      /**
       * 判断列头复选框是否被选中
       */
      isAllCheckboxChecked() {
        return i.isAllSelected;
      },
      /**
       * 判断列头复选框是否被半选
       */
      isAllCheckboxIndeterminate() {
        return !i.isAllSelected && i.isIndeterminate;
      },
      /**
       * 获取复选框半选状态的行数据
       */
      getCheckboxIndeterminateRecords(r) {
        const { treeConfig: a } = e, { fullDataRowIdData: f } = m, { treeIndeterminateMaps: g } = i;
        if (a) {
          const C = [], S = [];
          return l.each(g, (R, z) => {
            R && (C.push(R), f[z] && S.push(R));
          }), r ? C : S;
        }
        return [];
      },
      /**
       * 用于多选行，设置行为选中状态，第二个参数为选中与否
       * @param {Array/Row} rows 行数据
       * @param {Boolean} value 是否选中
       */
      setCheckboxRow(r, a) {
        return Bn(r, a, !0);
      },
      isCheckedByCheckboxRow(r) {
        const { selectCheckboxMaps: a } = i, f = k.value, { checkField: g } = f;
        return g ? l.get(r, g) : !!a[We(M, r)];
      },
      isIndeterminateByCheckboxRow(r) {
        const { treeIndeterminateMaps: a } = i;
        return !!a[We(M, r)] && !p.isCheckedByCheckboxRow(r);
      },
      /**
       * 多选，切换某一行的选中状态
       */
      toggleCheckboxRow(r) {
        const { selectCheckboxMaps: a } = i, f = k.value, { checkField: g } = f, C = g ? !l.get(r, g) : !a[We(M, r)];
        return b.handleSelectRow({ row: r }, C, !0), ne();
      },
      /**
       * 用于多选行，设置所有行的选中状态
       * @param {Boolean} value 是否选中
       */
      setAllCheckboxRow(r) {
        return Hn(r, !0);
      },
      /**
       * 获取单选框保留选中的行
       */
      getRadioReserveRecord(r) {
        const { treeConfig: a } = e, { fullDataRowIdData: f, radioReserveRow: g, afterFullData: C } = m, S = ce.value, R = G.value, z = R.children || R.childrenField;
        if (S.reserve && g) {
          const H = We(M, g);
          if (r) {
            if (!f[H])
              return g;
          } else {
            const K = ar(M);
            if (a) {
              if (l.findTree(C, (ge) => H === l.get(ge, K), { children: z }))
                return g;
            } else if (!C.some((X) => H === l.get(X, K)))
              return g;
          }
        }
        return null;
      },
      clearRadioReserve() {
        return m.radioReserveRow = null, ne();
      },
      /**
       * 获取复选框保留选中的行
       */
      getCheckboxReserveRecords(r) {
        const { treeConfig: a } = e, { afterFullData: f, fullDataRowIdData: g, checkboxReserveRowMap: C } = m, S = k.value, R = G.value, z = R.children || R.childrenField, H = [];
        if (S.reserve) {
          const K = {};
          a ? l.eachTree(f, (X) => {
            K[We(M, X)] = 1;
          }, { children: z }) : f.forEach((X) => {
            K[We(M, X)] = 1;
          }), l.each(C, (X, ge) => {
            X && (r ? g[ge] || H.push(X) : K[ge] || H.push(X));
          });
        }
        return H;
      },
      clearCheckboxReserve() {
        return m.checkboxReserveRowMap = {}, ne();
      },
      /**
       * 多选，切换所有行的选中状态
       */
      toggleAllCheckboxRow() {
        return b.triggerCheckAllEvent(null, !i.isAllSelected), ne();
      },
      /**
       * 用于多选行，手动清空用户的选择
       * 清空行为不管是否被禁用还是保留记录，都将彻底清空选中状态
       */
      clearCheckboxRow() {
        const { treeConfig: r } = e, { tableFullData: a } = m, f = G.value, g = f.children || f.childrenField, C = k.value, { checkField: S, reserve: R } = C, z = C.indeterminateField || C.halfField;
        if (S) {
          const H = (K) => {
            r && z && l.set(K, z, !1), l.set(K, S, !1);
          };
          r ? l.eachTree(a, H, { children: g }) : a.forEach(H);
        }
        return R && a.forEach((H) => On(H, !1)), i.isAllSelected = !1, i.isIndeterminate = !1, i.selectCheckboxMaps = {}, i.treeIndeterminateMaps = {}, ne();
      },
      /**
       * 用于当前行，设置某一行为高亮状态
       * @param {Row} row 行对象
       */
      setCurrentRow(r) {
        const a = ke.value, f = D.value;
        return p.clearCurrentRow(), i.currentRow = r, (a.isCurrent || e.highlightCurrentRow) && f && l.arrayEach(f.querySelectorAll(`[rowid="${We(M, r)}"]`), (g) => wo(g, "row--current")), ne();
      },
      isCheckedByRadioRow(r) {
        return M.eqRow(i.selectRadioRow, r);
      },
      /**
       * 用于单选行，设置某一行为选中状态
       * @param {Row} row 行对象
       */
      setRadioRow(r) {
        return rn(r, !0);
      },
      /**
       * 用于当前行，手动清空当前高亮的状态
       */
      clearCurrentRow() {
        const r = D.value;
        return i.currentRow = null, m.hoverRow = null, r && l.arrayEach(r.querySelectorAll(".row--current"), (a) => Pn(a, "row--current")), ne();
      },
      /**
       * 用于单选行，手动清空用户的选择
       */
      clearRadioRow() {
        return i.selectRadioRow = null, ne();
      },
      /**
       * 用于当前行，获取当前行的数据
       */
      getCurrentRecord() {
        return ke.value.isCurrent || e.highlightCurrentRow ? i.currentRow : null;
      },
      /**
       * 用于单选行，获取当已选中的数据
       */
      getRadioRecord(r) {
        const { fullDataRowIdData: a, afterFullRowMaps: f } = m, { selectRadioRow: g } = i;
        if (g) {
          const C = We(M, g);
          if (r) {
            if (a[C])
              return g;
          } else if (f[C])
            return g;
        }
        return null;
      },
      getCurrentColumn() {
        return pe.value.isCurrent || e.highlightCurrentColumn ? i.currentColumn : null;
      },
      /**
       * 用于当前列，设置某列行为高亮状态
       */
      setCurrentColumn(r) {
        const a = Cn(M, r);
        return a && (p.clearCurrentColumn(), i.currentColumn = a), ne();
      },
      /**
       * 用于当前列，手动清空当前高亮的状态
       */
      clearCurrentColumn() {
        return i.currentColumn = null, ne();
      },
      setPendingRow(r, a) {
        const f = Object.assign({}, i.pendingRowMaps), g = [...i.pendingRowList];
        return r && !l.isArray(r) && (r = [r]), a ? r.forEach((C) => {
          const S = We(M, C);
          S && !f[S] && (g.push(C), f[S] = C);
        }) : r.forEach((C) => {
          const S = We(M, C);
          if (S && f[S]) {
            const R = M.findRowIndexOf(g, C);
            R > -1 && g.splice(R, 1), delete f[S];
          }
        }), i.pendingRowMaps = f, i.pendingRowList = g, ne();
      },
      togglePendingRow(r) {
        const a = Object.assign({}, i.pendingRowMaps), f = [...i.pendingRowList];
        return r && !l.isArray(r) && (r = [r]), r.forEach((g) => {
          const C = We(M, g);
          if (C)
            if (a[C]) {
              const S = M.findRowIndexOf(f, g);
              S > -1 && f.splice(S, 1), delete a[C];
            } else
              f.push(g), a[C] = g;
        }), i.pendingRowMaps = a, i.pendingRowList = f, ne();
      },
      hasPendingByRow(r) {
        const { pendingRowMaps: a } = i, f = We(M, r);
        return !!a[f];
      },
      getPendingRecords() {
        const { pendingRowList: r } = i;
        return r.slice(0);
      },
      clearPendingRow() {
        return i.pendingRowMaps = {}, i.pendingRowList = [], ne();
      },
      sort(r, a) {
        const f = te.value, { multiple: g, remote: C, orders: S } = f;
        return r && l.isString(r) && (r = [
          { field: r, order: a }
        ]), l.isArray(r) || (r = [r]), r.length ? (g || zt(), (g ? r : [r[0]]).forEach((R, z) => {
          let { field: H, order: K } = R, X = H;
          l.isString(H) && (X = p.getColumnByField(H)), X && X.sortable && (S.indexOf(K) === -1 && (K = xt(X)), X.order !== K && (X.order = K), X.sortTime = Date.now() + z);
        }), C || b.handleTableData(!0), ne().then(() => (p.updateCellAreas(), Jt()))) : ne();
      },
      /**
       * 清空指定列的排序条件
       * 如果为空则清空所有列的排序条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearSort(r) {
        const a = te.value;
        if (r) {
          const f = Cn(M, r);
          f && (f.order = null);
        } else
          zt();
        return a.remote || b.handleTableData(!0), ne().then(Jt);
      },
      isSort(r) {
        if (r) {
          const a = Cn(M, r);
          return a ? a.sortable && !!a.order : !1;
        }
        return p.getSortColumns().length > 0;
      },
      getSortColumns() {
        const r = te.value, { multiple: a, chronological: f } = r, g = [], { tableFullColumn: C } = m;
        return C.forEach((S) => {
          const { field: R, order: z } = S;
          S.sortable && z && g.push({ column: S, field: R, property: R, order: z, sortTime: S.sortTime });
        }), a && f && g.length > 1 ? l.orderBy(g, "sortTime") : g;
      },
      /**
       * 关闭筛选
       * @param {Event} evnt 事件
       */
      closeFilter() {
        const { filterStore: r } = i, { column: a, visible: f } = r;
        return Object.assign(r, {
          isAllSelected: !1,
          isIndeterminate: !1,
          options: [],
          visible: !1
        }), f && M.dispatchEvent("filter-visible", { column: a, property: a.field, field: a.field, filterList: M.getCheckedFilters(), visible: !1 }, null), ne();
      },
      /**
       * 判断指定列是否为筛选状态，如果为空则判断所有列
       * @param {String} fieldOrColumn 字段名
       */
      isActiveFilterByColumn(r) {
        const a = Cn(M, r);
        return a ? a.filters && a.filters.some((f) => f.checked) : M.getCheckedFilters().length > 0;
      },
      isFilter(r) {
        return p.isActiveFilterByColumn(r);
      },
      /**
       * 判断展开行是否懒加载完成
       * @param {Row} row 行对象
       */
      isRowExpandLoaded(r) {
        const { fullAllDataRowIdData: a } = m, f = a[We(M, r)];
        return f && !!f.expandLoaded;
      },
      clearRowExpandLoaded(r) {
        const { rowExpandLazyLoadedMaps: a } = i, { fullAllDataRowIdData: f } = m, g = _.value, { lazy: C } = g, S = We(M, r), R = f[S];
        return C && R && (R.expandLoaded = !1, delete a[S]), ne();
      },
      /**
       * 重新懒加载展开行，并展开内容
       * @param {Row} row 行对象
       */
      reloadRowExpand(r) {
        const { rowExpandLazyLoadedMaps: a } = i, f = _.value, { lazy: g } = f, C = We(M, r);
        return g && !a[C] && p.clearRowExpandLoaded(r).then(() => pn(r)), ne();
      },
      reloadExpandContent(r) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["reloadExpandContent", "reloadRowExpand"]), p.reloadRowExpand(r);
      },
      /**
       * 切换展开行
       */
      toggleRowExpand(r) {
        return p.setRowExpand(r, !p.isRowExpandByRow(r));
      },
      /**
       * 设置所有行的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllRowExpand(r) {
        const a = G.value, { tableFullData: f, tableFullTreeData: g } = m, C = a.children || a.childrenField;
        let S = [];
        return e.treeConfig ? l.eachTree(g, (R) => {
          S.push(R);
        }, { children: C }) : S = f, p.setRowExpand(S, r);
      },
      /**
       * 设置展开行，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setRowExpand(r, a) {
        const { rowExpandedMaps: f, rowExpandLazyLoadedMaps: g, expandColumn: C } = i, { fullAllDataRowIdData: S } = m;
        let R = Object.assign({}, f);
        const z = _.value, { reserve: H, lazy: K, accordion: X, toggleMethod: ge } = z, Me = [], Oe = p.getColumnIndex(C), $e = p.getVMColumnIndex(C);
        if (r) {
          l.isArray(r) || (r = [r]), X && (R = {}, r = r.slice(r.length - 1, r.length));
          const Te = ge ? r.filter((Fe) => ge({ $table: M, expanded: a, column: C, columnIndex: Oe, $columnIndex: $e, row: Fe, rowIndex: p.getRowIndex(Fe), $rowIndex: p.getVMRowIndex(Fe) })) : r;
          a ? Te.forEach((Fe) => {
            const ye = We(M, Fe);
            if (!R[ye]) {
              const ze = S[ye];
              K && !ze.expandLoaded && !g[ye] ? Me.push(pn(Fe)) : R[ye] = Fe;
            }
          }) : Te.forEach((Fe) => {
            const ye = We(M, Fe);
            R[ye] && delete R[ye];
          }), H && Te.forEach((Fe) => zn(Fe, a));
        }
        return i.rowExpandedMaps = R, Promise.all(Me).then(() => p.recalculate());
      },
      /**
       * 判断行是否为展开状态
       * @param {Row} row 行对象
       */
      isRowExpandByRow(r) {
        const { rowExpandedMaps: a } = i, f = We(M, r);
        return !!a[f];
      },
      isExpandByRow(r) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["isExpandByRow", "isRowExpandByRow"]), p.isRowExpandByRow(r);
      },
      /**
       * 手动清空展开行状态，数据会恢复成未展开的状态
       */
      clearRowExpand() {
        const { tableFullData: r } = m, a = _.value, { reserve: f } = a, g = p.getRowExpandRecords();
        return i.rowExpandedMaps = {}, f && r.forEach((C) => zn(C, !1)), ne().then(() => {
          g.length && p.recalculate();
        });
      },
      clearRowExpandReserve() {
        return m.rowExpandedReserveRowMap = {}, ne();
      },
      getRowExpandRecords() {
        const r = [];
        return l.each(i.rowExpandedMaps, (a) => {
          a && r.push(a);
        }), r;
      },
      getTreeExpandRecords() {
        const r = [];
        return l.each(i.treeExpandedMaps, (a) => {
          a && r.push(a);
        }), r;
      },
      /**
       * 判断树节点是否懒加载完成
       * @param {Row} row 行对象
       */
      isTreeExpandLoaded(r) {
        const { fullAllDataRowIdData: a } = m, f = a[We(M, r)];
        return f && !!f.treeLoaded;
      },
      clearTreeExpandLoaded(r) {
        const { treeExpandedMaps: a } = i, { fullAllDataRowIdData: f } = m, g = G.value, { transform: C, lazy: S } = g, R = We(M, r), z = f[R];
        return S && z && (z.treeLoaded = !1, a[R] && delete a[R]), C ? (Zt(), b.handleTableData()) : ne();
      },
      /**
       * 重新懒加载树节点，并展开该节点
       * @param {Row} row 行对象
       */
      reloadTreeExpand(r) {
        const { treeExpandLazyLoadedMaps: a } = i, f = G.value, g = f.hasChild || f.hasChildField, { transform: C, lazy: S } = f, R = We(M, r);
        return S && r[g] && !a[R] && p.clearTreeExpandLoaded(r).then(() => ro(r)).then(() => {
          if (C)
            return Zt(), b.handleTableData();
        }).then(() => p.recalculate()), ne();
      },
      reloadTreeChilds(r) {
        return process.env.NODE_ENV === "development" && lt("vxe.error.delFunc", ["reloadTreeChilds", "reloadTreeExpand"]), p.reloadTreeExpand(r);
      },
      /**
       * 切换/展开树节点
       */
      toggleTreeExpand(r) {
        return p.setTreeExpand(r, !p.isTreeExpandByRow(r));
      },
      /**
       * 设置所有树节点的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllTreeExpand(r) {
        const { tableFullData: a } = m, f = G.value, { transform: g, lazy: C } = f, S = f.children || f.childrenField, R = [];
        return l.eachTree(a, (z) => {
          const H = z[S];
          (C || H && H.length) && R.push(z);
        }, { children: S }), p.setTreeExpand(R, r).then(() => {
          if (g)
            return Zt(), p.recalculate();
        });
      },
      /**
       * 设置展开树形节点，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setTreeExpand(r, a) {
        const f = G.value, { transform: g } = f;
        return r && (l.isArray(r) || (r = [r]), r.length) ? g ? Zs(r, a) : ns(r, a) : ne();
      },
      /**
       * 判断行是否为树形节点展开状态
       * @param {Row} row 行对象
       */
      isTreeExpandByRow(r) {
        const { treeExpandedMaps: a } = i;
        return !!a[We(M, r)];
      },
      /**
       * 手动清空树形节点的展开状态，数据会恢复成未展开的状态
       */
      clearTreeExpand() {
        const { tableFullTreeData: r } = m, a = G.value, f = a.children || a.childrenField, { transform: g, reserve: C } = a, S = p.getTreeExpandRecords();
        return i.treeExpandedMaps = {}, C && l.eachTree(r, (R) => Wn(R, !1), { children: f }), b.handleTableData().then(() => {
          if (g)
            return Zt(), b.handleTableData();
        }).then(() => {
          if (S.length)
            return p.recalculate();
        });
      },
      clearTreeExpandReserve() {
        return m.treeExpandedReserveRowMap = {}, ne();
      },
      /**
       * 获取表格的滚动状态
       */
      getScroll() {
        const { scrollXLoad: r, scrollYLoad: a } = i, g = w.value.$el;
        return {
          virtualX: r,
          virtualY: a,
          scrollTop: g.scrollTop,
          scrollLeft: g.scrollLeft
        };
      },
      /**
       * 如果有滚动条，则滚动到对应的位置
       * @param {Number} scrollLeft 左距离
       * @param {Number} scrollTop 上距离
       */
      scrollTo(r, a) {
        const f = w.value, g = P.value, C = de.value, S = f ? f.$el : null, R = C ? C.$el : null, z = g ? g.$el : null;
        return l.isNumber(r) && Wu(z || S, r), l.isNumber(a) && gs(R || S, a), i.scrollXLoad || i.scrollYLoad ? new Promise((H) => {
          setTimeout(() => {
            ne(() => {
              H();
            });
          }, 50);
        }) : ne();
      },
      /**
       * 如果有滚动条，则滚动到对应的行
       * @param {Row} row 行对象
       * @param {ColumnInfo} fieldOrColumn 列配置
       */
      scrollToRow(r, a) {
        const f = [];
        return r && (e.treeConfig ? f.push(b.scrollToTreeRow(r)) : f.push(Yu(M, r))), a && f.push(p.scrollToColumn(a)), Promise.all(f);
      },
      /**
       * 如果有滚动条，则滚动到对应的列
       */
      scrollToColumn(r) {
        const { fullColumnIdData: a } = m, f = Cn(M, r);
        return f && a[f.id] ? sk(M, f) : ne();
      },
      /**
       * 手动清除滚动相关信息，还原到初始状态
       */
      clearScroll() {
        const { scrollXStore: r, scrollYStore: a } = m, f = w.value, g = P.value, C = de.value, S = f ? f.$el : null, R = C ? C.$el : null, z = g ? g.$el : null;
        return R && (Rs(R), R.scrollTop = 0), z && (z.scrollLeft = 0), S && (Rs(S), S.scrollTop = 0, S.scrollLeft = 0), r.startIndex = 0, a.startIndex = 0, ne();
      },
      /**
       * 更新表尾合计
       */
      updateFooter() {
        const { showFooter: r, footerData: a, footerMethod: f } = e, { visibleColumn: g, afterFullData: C } = m;
        let S = [];
        return r && a && a.length ? S = a.slice(0) : r && f && (S = g.length ? f({ columns: g, data: C, $table: M, $grid: Q }) : []), i.footerTableData = S, ne();
      },
      /**
       * 更新列状态 updateStatus({ row, column }, cellValue)
       * 如果组件值 v-model 发生 change 时，调用改函数用于更新某一列编辑状态
       * 如果单元格配置了校验规则，则会进行校验
       */
      updateStatus(r, a) {
        const f = !l.isUndefined(a);
        return ne().then(() => {
          const { editRules: g } = e, { validStore: C } = i, S = w.value;
          if (r && S && g) {
            const { row: R, column: z } = r, H = "change";
            if (M.hasCellRules && M.hasCellRules(H, R, z)) {
              const K = b.getCell(R, z);
              if (K)
                return M.validCellRules(H, R, z, a).then(() => {
                  f && C.visible && Eo(R, z, a), M.clearValidate(R, z);
                }).catch(({ rule: X }) => {
                  f && Eo(R, z, a), M.showValidTooltip({ rule: X, row: R, column: z, cell: K });
                });
            }
          }
        });
      },
      /**
       * 设置合并单元格
       * @param {TableMergeConfig[]} merges { row: Row|number, column: ColumnInfo|number, rowspan: number, colspan: number }
       */
      setMergeCells(r) {
        return e.spanMethod && ot("vxe.error.errConflicts", ["merge-cells", "span-method"]), $t(r, i.mergeList, m.afterFullData), ne().then(() => (p.updateCellAreas(), Jt()));
      },
      /**
       * 移除单元格合并
       * @param {TableMergeConfig[]} merges 多个或数组 [{row:Row|number, col:ColumnInfo|number}]
       */
      removeMergeCells(r) {
        e.spanMethod && ot("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        const a = Lt(r, i.mergeList, m.afterFullData);
        return ne().then(() => (p.updateCellAreas(), Jt(), a));
      },
      /**
       * 获取所有被合并的单元格
       */
      getMergeCells() {
        return i.mergeList.slice(0);
      },
      /**
       * 清除所有单元格合并
       */
      clearMergeCells() {
        return i.mergeList = [], ne().then(() => Jt());
      },
      setMergeFooterItems(r) {
        return e.footerSpanMethod && ot("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]), $t(r, i.mergeFooterList), ne().then(() => (p.updateCellAreas(), Jt()));
      },
      removeMergeFooterItems(r) {
        e.footerSpanMethod && ot("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        const a = Lt(r, i.mergeFooterList);
        return ne().then(() => (p.updateCellAreas(), Jt(), a));
      },
      /**
       * 获取所有被合并的表尾
       */
      getMergeFooterItems() {
        return i.mergeFooterList.slice(0);
      },
      /**
       * 清除所有表尾合并
       */
      clearMergeFooterItems() {
        return i.mergeFooterList = [], ne().then(() => Jt());
      },
      updateCellAreas() {
        const { mouseConfig: r } = e, a = se.value;
        return r && a.area && M.handleUpdateCellAreas ? M.handleUpdateCellAreas() : ne();
      },
      focus() {
        return m.isActivated = !0, ne();
      },
      blur() {
        return m.isActivated = !1, ne();
      },
      /**
       * 连接工具栏
       * @param $toolbar
       */
      connect(r) {
        return r ? (L = r, L.syncUpdate({ collectColumn: m.collectColumn, $table: M })) : ot("vxe.error.barUnableLink"), ne();
      }
    };
    const Qs = (r) => {
      const { editStore: a, ctxMenuStore: f, filterStore: g, customStore: C } = i, { mouseConfig: S, editRules: R } = e, z = D.value, H = De.value, K = I.value, X = he.value, { actived: ge } = a, Me = O.value, Oe = E.value, $e = T.value, Te = B.value;
      if (Oe && (yt(r, z, "vxe-cell--filter").flag || yt(r, Oe.$el).flag || yt(r, document.body, "vxe-table--ignore-clear").flag || b.preventEvent(r, "event.clearFilter", g.args, p.closeFilter)), $e && (C.btnEl === r.target || yt(r, document.body, "vxe-toolbar-custom-target").flag || yt(r, $e.$el).flag || yt(r, document.body, "vxe-table--ignore-clear").flag || b.preventEvent(r, "event.clearCustom", {}, () => {
        M.closeCustom && M.closeCustom();
      })), ge.row) {
        if (H.autoClear !== !1) {
          const ye = ge.args.cell;
          (!ye || !yt(r, ye).flag) && (Me && yt(r, Me.$el).flag || (!m._lastCallTime || m._lastCallTime + 50 < Date.now()) && (yt(r, document.body, "vxe-table--ignore-clear").flag || b.preventEvent(r, "event.clearEdit", ge.args, () => {
            let ze;
            if (H.mode === "row") {
              const Je = yt(r, z, "vxe-body--row"), at = Je.flag ? p.getRowNode(Je.targetElem) : null;
              ze = at ? !M.eqRow(at.item, ge.args.row) : !1;
            } else
              ze = !yt(r, z, "col--edit").flag;
            if (ze || (ze = yt(r, z, "vxe-header--row").flag), ze || (ze = yt(r, z, "vxe-footer--row").flag), !ze && e.height && !i.overflowY) {
              const Je = r.target;
              To(Je, "vxe-table--body-wrapper") && (ze = r.offsetY < Je.clientHeight);
            }
            (ze || // 如果点击了当前表格之外
            !yt(r, z).flag) && setTimeout(() => M.clearEdit(r));
          })));
        }
      } else S && !yt(r, z).flag && !(Q && yt(r, Q.getRefMaps().refElem.value).flag) && !(Te && yt(r, Te.getRefMaps().refElem.value).flag) && !(L && yt(r, L.getRefMaps().refElem.value).flag) && (M.clearSelected && M.clearSelected(), X.autoClear && M.clearCellAreas && (yt(r, document.body, "vxe-table--ignore-areas-clear").flag || b.preventEvent(r, "event.clearAreas", {}, () => {
        M.clearCellAreas(), M.clearCopyCellArea();
      })));
      M.closeMenu && f.visible && Te && !yt(r, Te.getRefMaps().refElem.value).flag && M.closeMenu();
      const Fe = yt(r, Q ? Q.getRefMaps().refElem.value : z).flag;
      !Fe && R && K.autoClear && (i.validErrorMaps = {}), m.isActivated = Fe;
    }, ei = () => {
      p.closeFilter(), M.closeMenu && M.closeMenu();
    }, ti = () => {
      p.closeTooltip(), M.closeMenu && M.closeMenu();
    }, ni = (r) => {
      const { mouseConfig: a, keyboardConfig: f } = e, { filterStore: g, ctxMenuStore: C, editStore: S } = i, R = se.value, z = xe.value, { actived: H } = S;
      vt(r, pt.ESCAPE) && b.preventEvent(r, "event.keydown", null, () => {
        if (p.dispatchEvent("keydown-start", {}, r), f && a && R.area && M.handleKeyboardEvent)
          M.handleKeyboardEvent(r);
        else if ((H.row || g.visible || C.visible) && (r.stopPropagation(), M.closeMenu && M.closeMenu(), p.closeFilter(), f && z.isEsc && H.row)) {
          const X = H.args;
          M.clearEdit(r), R.selected && ne(() => M.handleSelected(X, r));
        }
        p.dispatchEvent("keydown", {}, r), p.dispatchEvent("keydown-end", {}, r);
      });
    }, ls = (r) => {
      m.isActivated && b.preventEvent(r, "event.keydown", null, () => {
        const { mouseConfig: a, keyboardConfig: f, treeConfig: g, editConfig: C, highlightCurrentRow: S } = e, { ctxMenuStore: R, editStore: z, currentRow: H } = i, K = Ne.value, X = je.value, ge = xe.value, Me = se.value, Oe = De.value, $e = G.value, Te = Y.value, Fe = ke.value, { selected: ye, actived: ze } = z, Je = $e.children || $e.childrenField, at = r.keyCode, rt = vt(r, pt.ESCAPE), ft = vt(r, pt.BACKSPACE), kt = vt(r, pt.TAB), Bt = vt(r, pt.ENTER), It = vt(r, pt.SPACEBAR), Tt = vt(r, pt.ARROW_LEFT), Ot = vt(r, pt.ARROW_UP), jt = vt(r, pt.ARROW_RIGHT), un = vt(r, pt.ARROW_DOWN), Qn = vt(r, pt.DELETE), Sr = vt(r, pt.F2), er = vt(r, pt.CONTEXT_MENU), ll = r.metaKey, tr = r.ctrlKey, Co = r.shiftKey, nr = r.altKey, or = Tt || Ot || jt || un, kn = K && R.visible && (Bt || It || or), rr = mt(C) && ze.column && ze.row;
        let vn;
        if (kn)
          r.preventDefault(), R.showChild && _r(R.selected) ? M.moveCtxMenu(r, R, "selectChild", Tt, !1, R.selected.children) : M.moveCtxMenu(r, R, "selected", jt, !0, Te);
        else if (f && a && Me.area && M.handleKeyboardEvent)
          M.handleKeyboardEvent(r);
        else if (rt) {
          if (M.closeMenu && M.closeMenu(), p.closeFilter(), f && ge.isEsc && ze.row) {
            const ln = ze.args;
            M.clearEdit(r), Me.selected && ne(() => M.handleSelected(ln, r));
          }
        } else if (It && f && ge.isChecked && ye.row && ye.column && (ye.column.type === "checkbox" || ye.column.type === "radio"))
          r.preventDefault(), ye.column.type === "checkbox" ? b.handleToggleCheckRowEvent(r, ye.args) : b.triggerRadioRowEvent(r, ye.args);
        else if (Sr && mt(C))
          rr || ye.row && ye.column && (r.preventDefault(), M.handleActived(ye.args, r));
        else if (er)
          m._keyCtx = ye.row && ye.column && X.length, clearTimeout(rs), rs = setTimeout(() => {
            m._keyCtx = !1;
          }, 1e3);
        else if (Bt && !nr && f && ge.isEnter && (ye.row || ze.row || g && (Fe.isCurrent || S) && H)) {
          if (tr)
            ze.row && (vn = ze.args, M.clearEdit(r), Me.selected && ne(() => M.handleSelected(vn, r)));
          else if (ye.row || ze.row) {
            const ln = ye.row ? ye.args : ze.args;
            Co ? ge.enterToTab ? M.moveTabSelected(ln, Co, r) : M.moveSelected(ln, Tt, !0, jt, !1, r) : ge.enterToTab ? M.moveTabSelected(ln, Co, r) : M.moveSelected(ln, Tt, !1, jt, !0, r);
          } else if (g && (Fe.isCurrent || S) && H) {
            const ln = H[Je];
            if (ln && ln.length) {
              r.preventDefault();
              const Tn = ln[0];
              vn = {
                $table: M,
                row: Tn,
                rowIndex: p.getRowIndex(Tn),
                $rowIndex: p.getVMRowIndex(Tn)
              }, p.setTreeExpand(H, !0).then(() => p.scrollToRow(Tn)).then(() => b.triggerCurrentRowEvent(r, vn));
            }
          }
        } else if (or && f && ge.isArrow)
          rr || (ye.row && ye.column ? M.moveSelected(ye.args, Tt, Ot, jt, un, r) : (Ot || un) && (Fe.isCurrent || S) && M.moveCurrentRow(Ot, un, r));
        else if (kt && f && ge.isTab)
          ye.row || ye.column ? M.moveTabSelected(ye.args, Co, r) : (ze.row || ze.column) && M.moveTabSelected(ze.args, Co, r);
        else if (f && mt(C) && (Qn || (g && (Fe.isCurrent || S) && H ? ft && ge.isArrow : ft))) {
          if (!rr) {
            const { delMethod: ln, backMethod: Tn } = ge;
            if (ge.isDel && (ye.row || ye.column))
              ln ? ln({
                row: ye.row,
                rowIndex: p.getRowIndex(ye.row),
                column: ye.column,
                columnIndex: p.getColumnIndex(ye.column),
                $table: M
              }) : Eo(ye.row, ye.column, null), ft ? Tn ? Tn({
                row: ye.row,
                rowIndex: p.getRowIndex(ye.row),
                column: ye.column,
                columnIndex: p.getColumnIndex(ye.column),
                $table: M
              }) : M.handleActived(ye.args, r) : Qn && p.updateFooter();
            else if (ft && ge.isArrow && g && (Fe.isCurrent || S) && H) {
              const { parent: bn } = l.findTree(m.afterFullData, (lr) => lr === H, { children: Je });
              bn && (r.preventDefault(), vn = {
                $table: M,
                row: bn,
                rowIndex: p.getRowIndex(bn),
                $rowIndex: p.getVMRowIndex(bn)
              }, p.setTreeExpand(bn, !1).then(() => p.scrollToRow(bn)).then(() => b.triggerCurrentRowEvent(r, vn)));
            }
          }
        } else if (f && mt(C) && ge.isEdit && !tr && !ll && (It || at >= 48 && at <= 57 || at >= 65 && at <= 90 || at >= 96 && at <= 111 || at >= 186 && at <= 192 || at >= 219 && at <= 222)) {
          const { editMethod: ln } = ge;
          if (ye.column && ye.row && mt(ye.column.editRender)) {
            const Tn = Oe.beforeEditMethod || Oe.activeMethod;
            if (!Tn || Tn(Object.assign(Object.assign({}, ye.args), { $table: M, $grid: Q }))) {
              ln ? ln({
                row: ye.row,
                rowIndex: p.getRowIndex(ye.row),
                column: ye.column,
                columnIndex: p.getColumnIndex(ye.column),
                $table: M,
                $grid: Q
              }) : (Eo(ye.row, ye.column, null), M.handleActived(ye.args, r));
              const bn = Oe.afterEditMethod;
              bn && ne(() => {
                bn({
                  row: ye.row,
                  rowIndex: p.getRowIndex(ye.row),
                  column: ye.column,
                  columnIndex: p.getColumnIndex(ye.column),
                  $table: M,
                  $grid: Q
                });
              });
            }
          }
        }
        p.dispatchEvent("keydown", {}, r);
      });
    }, ss = (r) => {
      const { keyboardConfig: a, mouseConfig: f } = e, { editStore: g, filterStore: C } = i, { isActivated: S } = m, R = se.value, z = xe.value, { actived: H } = g;
      S && !C.visible && (H.row || H.column || a && z.isClip && f && R.area && M.handlePasteCellAreaEvent && M.handlePasteCellAreaEvent(r), p.dispatchEvent("paste", {}, r));
    }, oi = (r) => {
      const { keyboardConfig: a, mouseConfig: f } = e, { editStore: g, filterStore: C } = i, { isActivated: S } = m, R = se.value, z = xe.value, { actived: H } = g;
      S && !C.visible && (H.row || H.column || a && z.isClip && f && R.area && M.handleCopyCellAreaEvent && M.handleCopyCellAreaEvent(r), p.dispatchEvent("copy", {}, r));
    }, ri = (r) => {
      const { keyboardConfig: a, mouseConfig: f } = e, { editStore: g, filterStore: C } = i, { isActivated: S } = m, R = se.value, z = xe.value, { actived: H } = g;
      S && !C.visible && (H.row || H.column || a && z.isClip && f && R.area && M.handleCutCellAreaEvent && M.handleCutCellAreaEvent(r), p.dispatchEvent("cut", {}, r));
    }, li = () => {
      M.closeMenu && M.closeMenu(), p.updateCellAreas(), p.recalculate(!0);
    }, Or = (r) => {
      const a = A.value;
      clearTimeout(m.tooltipTimeout), r ? p.closeTooltip() : a && a.setActived(!0);
    }, nl = (r, a, f, g, C) => {
      C.cell = a;
      const { tooltipStore: S } = i, R = Z.value, { column: z, row: H } = C, { showAll: K, contentMethod: X } = R, ge = X ? X(C) : null, Me = X && !l.eqNull(ge), Oe = Me ? ge : l.toString(z.type === "html" ? f.innerText : f.textContent).trim(), $e = f.scrollWidth > f.clientWidth;
      return Oe && (K || Me || $e) && (Object.assign(S, {
        row: H,
        column: z,
        visible: !0
      }), ne(() => {
        const Te = A.value;
        Te && Te.open($e ? f : g || f, Xt(Oe));
      })), ne();
    };
    b = {
      getSetupOptions() {
        return v;
      },
      updateAfterDataIndex: _t,
      callSlot(r, a) {
        if (r) {
          if (Q)
            return Q.callSlot(r, a);
          if (l.isFunction(r))
            return Ht(r(a));
        }
        return [];
      },
      /**
       * 获取父容器元素
       */
      getParentElem() {
        const r = D.value;
        if (Q) {
          const a = Q.getRefMaps().refElem.value;
          return a ? a.parentNode : null;
        }
        return r ? r.parentNode : null;
      },
      /**
       * 获取父容器的高度
       */
      getParentHeight() {
        const { height: r } = e, a = D.value;
        if (a) {
          const f = a.parentNode, g = r === "auto" ? Ki(f) : 0;
          return Math.floor(Q ? Q.getParentHeight() : l.toNumber(getComputedStyle(f).height) - g);
        }
        return 0;
      },
      /**
       * 获取需要排除的高度
       * 但渲染表格高度时，需要排除工具栏或分页等相关组件的高度
       * 如果存在表尾合计滚动条，则需要排除滚动条高度
       */
      getExcludeHeight() {
        return Q ? Q.getExcludeHeight() : 0;
      },
      /**
       * 定义行数据中的列属性，如果不存在则定义
       * @param {Row} records 行数据
       */
      defineField(r) {
        const { treeConfig: a } = e, f = _.value, g = G.value, C = ce.value, S = k.value, R = g.children || g.childrenField, z = ar(M);
        return l.isArray(r) || (r = [r]), r.map((H) => (m.tableFullColumn.forEach((X) => {
          const { field: ge, editRender: Me } = X;
          if (ge && !l.has(H, ge) && !H[ge]) {
            let Oe = null;
            if (Me) {
              const { defaultValue: $e } = Me;
              l.isFunction($e) ? Oe = $e({ column: X }) : l.isUndefined($e) || (Oe = $e);
            }
            l.set(H, ge, Oe);
          }
        }), [C.labelField, S.checkField, S.labelField, f.labelField].forEach((X) => {
          X && eo(l.get(H, X)) && l.set(H, X, null);
        }), a && g.lazy && l.isUndefined(H[R]) && (H[R] = null), eo(l.get(H, z)) && l.set(H, z, Mi()), H));
      },
      handleTableData(r) {
        const { scrollYLoad: a } = i, { scrollYStore: f, fullDataRowIdData: g } = m;
        let C = m.afterFullData;
        r && (an(), C = Zt());
        const S = a ? C.slice(f.startIndex, f.endIndex) : C.slice(0);
        return S.forEach((R, z) => {
          const H = We(M, R), K = g[H];
          K && (K.$index = z);
        }), i.tableData = S, ne();
      },
      /**
       * 更新数据行的 Map
       * 牺牲数据组装的耗时，用来换取使用过程中的流畅
       */
      cacheRowMap(r) {
        const { treeConfig: a } = e, f = G.value;
        let { fullDataRowIdData: g, fullAllDataRowIdData: C, tableFullData: S, tableFullTreeData: R } = m;
        const z = f.children || f.childrenField, H = f.hasChild || f.hasChildField, K = ar(M), X = a && f.lazy, ge = (Me, Oe, $e, Te, Fe, ye) => {
          let ze = We(M, Me);
          const Je = a && Te ? tk(Te) : Oe + 1, at = ye ? ye.length - 1 : 0;
          eo(ze) && (ze = Mi(), l.set(Me, K, ze)), X && Me[H] && l.isUndefined(Me[z]) && (Me[z] = null);
          const rt = { row: Me, rowid: ze, seq: Je, index: a && Fe ? -1 : Oe, _index: -1, $index: -1, items: $e, parent: Fe, level: at };
          r && (g[ze] = rt), C[ze] = rt;
        };
        r && (g = m.fullDataRowIdData = {}), C = m.fullAllDataRowIdData = {}, a ? l.eachTree(R, ge, { children: z }) : S.forEach(ge);
      },
      cacheSourceMap(r) {
        const { treeConfig: a } = e, f = G.value;
        let { sourceDataRowIdData: g } = m;
        const C = l.clone(r, !0), S = ar(M);
        g = m.sourceDataRowIdData = {};
        const R = (z) => {
          let H = We(M, z);
          eo(H) && (H = Mi(), l.set(z, S, H)), g[H] = z;
        };
        if (a) {
          const z = f.children || f.childrenField;
          l.eachTree(C, R, { children: f.transform ? f.mapChildrenField : z });
        } else
          C.forEach(R);
        m.tableSourceData = C;
      },
      /**
       * 指定列宽的列进行拆分
       */
      analyColumnWidth() {
        const { tableFullColumn: r } = m, a = pe.value, { width: f, minWidth: g } = a, C = [], S = [], R = [], z = [], H = [], K = [];
        r.forEach((X) => {
          f && !X.width && (X.width = f), g && !X.minWidth && (X.minWidth = g), X.visible && (X.resizeWidth ? C.push(X) : Ui(X.width) ? S.push(X) : xl(X.width) ? z.push(X) : Ui(X.minWidth) ? R.push(X) : xl(X.minWidth) ? H.push(X) : K.push(X));
        }), Object.assign(i.columnStore, { resizeList: C, pxList: S, pxMinList: R, scaleList: z, scaleMinList: H, autoList: K });
      },
      saveCustomResizable(r) {
        const { id: a, customConfig: f } = e, g = qe.value, { collectColumn: C } = m, { storage: S } = g, R = S === !0, z = R ? {} : Object.assign({}, S || {}), H = R || z.resizable;
        if (f && H) {
          const K = ht(Bi);
          let X;
          if (!a) {
            ot("vxe.error.reqProp", ["id"]);
            return;
          }
          r || (X = l.isPlainObject(K[a]) ? K[a] : {}, l.eachTree(C, (ge) => {
            if (ge.resizeWidth) {
              const Me = ge.getKey();
              Me && (X[Me] = ge.renderWidth);
            }
          })), K[a] = l.isEmpty(X) ? void 0 : X, localStorage.setItem(Bi, l.toJSONString(K));
        }
      },
      saveCustomSort(r) {
        const { id: a, customConfig: f } = e, g = qe.value, { collectColumn: C } = m, { storage: S } = g, R = S === !0, z = R ? {} : Object.assign({}, S || {}), H = R || z.sort;
        if (f && H) {
          const K = ht(zi);
          let X;
          if (!a) {
            ot("vxe.error.reqProp", ["id"]);
            return;
          }
          r || (X = l.isPlainObject(K[a]) ? K[a] : {}, C.forEach((ge) => {
            if (ge.sortNumber !== ge.renderSortNumber) {
              const Me = ge.getKey();
              Me && (X[Me] = ge.renderSortNumber);
            }
          })), K[a] = l.isEmpty(X) ? void 0 : X, localStorage.setItem(zi, l.toJSONString(K));
        }
      },
      saveCustomFixed() {
        const { id: r, customConfig: a } = e, { collectColumn: f } = m, g = qe.value, { storage: C } = g, S = C === !0, R = S ? {} : Object.assign({}, C || {}), z = S || R.fixed;
        if (a && z) {
          const H = ht(Wi), K = [];
          if (!r) {
            ot("vxe.error.reqProp", ["id"]);
            return;
          }
          l.eachTree(f, (X) => {
            if (X.fixed && X.fixed !== X.defaultFixed) {
              const ge = X.getKey();
              ge && K.push(`${ge}|${X.fixed}`);
            }
          }), H[r] = K.join(",") || void 0, localStorage.setItem(Wi, l.toJSONString(H));
        }
      },
      saveCustomVisible() {
        const { id: r, customConfig: a } = e, { collectColumn: f } = m, g = qe.value, { checkMethod: C, storage: S } = g, R = S === !0, z = R ? {} : Object.assign({}, S || {}), H = R || z.visible;
        if (a && H) {
          const K = ht(Hi), X = [], ge = [];
          if (!r) {
            ot("vxe.error.reqProp", ["id"]);
            return;
          }
          l.eachTree(f, (Me) => {
            if (!C || C({ column: Me })) {
              if (!Me.visible && Me.defaultVisible) {
                const Oe = Me.getKey();
                Oe && X.push(Oe);
              } else if (Me.visible && !Me.defaultVisible) {
                const Oe = Me.getKey();
                Oe && ge.push(Oe);
              }
            }
          }), K[r] = [X.join(",")].concat(ge.length ? [ge.join(",")] : []).join("|") || void 0, localStorage.setItem(Hi, l.toJSONString(K));
        }
      },
      handleCustom() {
        const { mouseConfig: r } = e;
        return r && (M.clearSelected && M.clearSelected(), M.clearCellAreas && (M.clearCellAreas(), M.clearCopyCellArea())), b.saveCustomVisible(), b.saveCustomSort(), b.analyColumnWidth(), p.refreshColumn(!0);
      },
      handleUpdateDataQueue() {
        i.upDataFlag++;
      },
      handleRefreshColumnQueue() {
        i.reColumnFlag++;
      },
      preventEvent(r, a, f, g, C) {
        let S = Xe.interceptor.get(a);
        !S.length && a === "event.clearEdit" && (S = Xe.interceptor.get("event.clearActived"), process.env.NODE_ENV === "development" && S.length && lt("vxe.error.delEvent", ["event.clearActived", "event.clearEdit"]));
        let R;
        return S.some((z) => z(Object.assign({ $grid: Q, $table: M, $event: r }, f)) === !1) || g && (R = g()), C && C(), R;
      },
      checkSelectionStatus() {
        const { treeConfig: r } = e, { selectCheckboxMaps: a, treeIndeterminateMaps: f } = i, { afterFullData: g } = m, C = k.value, { checkField: S, checkStrictly: R, checkMethod: z } = C, H = C.indeterminateField || C.halfField;
        if (!R) {
          const K = [];
          let X = !1, ge = !1, Me = !1;
          S ? (X = g.every(z ? (Oe) => z({ row: Oe }) ? !!l.get(Oe, S) : (K.push(Oe), !0) : (Oe) => l.get(Oe, S)), ge = X && g.length !== K.length, r ? H ? Me = !ge && g.some((Oe) => l.get(Oe, S) || l.get(Oe, H) || !!f[We(M, Oe)]) : Me = !ge && g.some((Oe) => l.get(Oe, S) || !!f[We(M, Oe)]) : H ? Me = !ge && g.some((Oe) => l.get(Oe, S) || l.get(Oe, H)) : Me = !ge && g.some((Oe) => l.get(Oe, S))) : (X = g.every(z ? (Oe) => z({ row: Oe }) ? !!a[We(M, Oe)] : (K.push(Oe), !0) : (Oe) => a[We(M, Oe)]), ge = X && g.length !== K.length, r ? Me = !ge && g.some((Oe) => {
            const $e = We(M, Oe);
            return f[$e] || a[$e];
          }) : Me = !ge && g.some((Oe) => a[We(M, Oe)])), i.isAllSelected = ge, i.isIndeterminate = Me;
        }
      },
      /**
       * 多选，行选中事件
       * value 选中true 不选false 半选-1
       */
      handleSelectRow({ row: r }, a, f) {
        const { treeConfig: g } = e, { selectCheckboxMaps: C, treeIndeterminateMaps: S } = i, R = Object.assign({}, C), { afterFullData: z } = m, H = G.value, K = H.children || H.childrenField, X = k.value, { checkField: ge, checkStrictly: Me, checkMethod: Oe } = X, $e = X.indeterminateField || X.halfField, Te = We(M, r);
        if (ge)
          if (g && !Me) {
            a === -1 ? (S[Te] || ($e && l.set(r, $e, !0), S[Te] = r), l.set(r, ge, !1)) : l.eachTree([r], (ye) => {
              (M.eqRow(ye, r) || f || !Oe || Oe({ row: ye })) && (l.set(ye, ge, a), $e && l.set(r, $e, !1), delete S[We(M, ye)], On(r, a));
            }, { children: K });
            const Fe = l.findTree(z, (ye) => M.eqRow(ye, r), { children: K });
            if (Fe && Fe.parent) {
              let ye;
              const ze = [], Je = {};
              if (!f && Oe ? Fe.items.forEach((rt) => {
                if (Oe({ row: rt })) {
                  const ft = We(M, rt);
                  Je[ft] = rt, ze.push(rt);
                }
              }) : Fe.items.forEach((rt) => {
                const ft = We(M, rt);
                Je[ft] = rt, ze.push(rt);
              }), l.find(Fe.items, (rt) => !!S[We(M, rt)]))
                ye = -1;
              else {
                const rt = [];
                Fe.items.forEach((ft) => {
                  l.get(ft, ge) && rt.push(ft);
                }), ye = rt.filter((ft) => Je[We(M, ft)]).length === ze.length ? !0 : rt.length || a === -1 ? -1 : !1;
              }
              return i.selectCheckboxMaps = R, b.handleSelectRow({ row: Fe.parent }, ye, f);
            }
          } else
            (f || !Oe || Oe({ row: r })) && (l.set(r, ge, a), On(r, a));
        else if (g && !Me) {
          a === -1 ? (S[Te] || ($e && l.set(r, $e, !0), S[Te] = r), R[Te] && delete R[Te]) : l.eachTree([r], (ye) => {
            const ze = We(M, ye);
            (M.eqRow(ye, r) || f || !Oe || Oe({ row: ye })) && (a ? R[ze] = ye : R[ze] && delete R[ze], $e && l.set(r, $e, !1), delete S[We(M, ye)], On(r, a));
          }, { children: K });
          const Fe = l.findTree(z, (ye) => M.eqRow(ye, r), { children: K });
          if (Fe && Fe.parent) {
            let ye;
            const ze = [], Je = {};
            if (!f && Oe ? Fe.items.forEach((rt) => {
              if (Oe({ row: rt })) {
                const ft = We(M, rt);
                Je[ft] = rt, ze.push(rt);
              }
            }) : Fe.items.forEach((rt) => {
              const ft = We(M, rt);
              Je[ft] = rt, ze.push(rt);
            }), l.find(Fe.items, (rt) => !!S[We(M, rt)]))
              ye = -1;
            else {
              const rt = [];
              Fe.items.forEach((ft) => {
                const kt = We(M, ft);
                R[kt] && rt.push(ft);
              }), ye = rt.filter((ft) => Je[We(M, ft)]).length === ze.length ? !0 : rt.length || a === -1 ? -1 : !1;
            }
            return i.selectCheckboxMaps = R, b.handleSelectRow({ row: Fe.parent }, ye, f);
          }
        } else
          (f || !Oe || Oe({ row: r })) && (a ? R[Te] || (R[Te] = r) : R[Te] && delete R[Te], On(r, a));
        i.selectCheckboxMaps = R, b.checkSelectionStatus();
      },
      triggerHeaderTitleEvent(r, a, f) {
        const g = a.content || a.message;
        if (g) {
          const { tooltipStore: C } = i, { column: S } = f, R = qt(g);
          Or(!0), C.row = null, C.column = S, C.visible = !0, ne(() => {
            const z = A.value;
            z && z.open(r.currentTarget, R);
          });
        }
      },
      /**
       * 触发表头 tooltip 事件
       */
      triggerHeaderTooltipEvent(r, a) {
        const { tooltipStore: f } = i, { column: g } = a, C = r.currentTarget;
        Or(!0), (f.column !== g || !f.visible) && nl(r, C, C, null, a);
      },
      /**
       * 触发单元格 tooltip 事件
       */
      triggerBodyTooltipEvent(r, a) {
        const { editConfig: f } = e, { editStore: g } = i, { tooltipStore: C } = i, S = De.value, { actived: R } = g, { row: z, column: H } = a, K = r.currentTarget;
        if (Or(C.column !== H || C.row !== z), !(H.editRender && mt(f) && (S.mode === "row" && R.row === z || R.row === z && R.column === H)) && (C.column !== H || C.row !== z || !C.visible)) {
          let X, ge;
          H.treeNode ? (X = K.querySelector(".vxe-tree-cell"), H.type === "html" && (ge = K.querySelector(".vxe-cell--html"))) : ge = K.querySelector(H.type === "html" ? ".vxe-cell--html" : ".vxe-cell--label"), nl(r, K, X || K.children[0], ge, a);
        }
      },
      /**
       * 触发表尾 tooltip 事件
       */
      triggerFooterTooltipEvent(r, a) {
        const { column: f } = a, { tooltipStore: g } = i, C = r.currentTarget;
        Or(g.column !== f || !!g.row), (g.column !== f || !g.visible) && nl(r, C, C.querySelector(".vxe-cell--item") || C.children[0], null, a);
      },
      handleTargetLeaveEvent() {
        const r = Z.value;
        let a = A.value;
        a && a.setActived(!1), r.enterable ? m.tooltipTimeout = setTimeout(() => {
          a = A.value, a && !a.isActived() && p.closeTooltip();
        }, r.leaveDelay) : p.closeTooltip();
      },
      triggerHeaderCellClickEvent(r, a) {
        const { _lastResizeTime: f } = m, g = te.value, C = pe.value, { column: S } = a, R = r.currentTarget, z = f && f > Date.now() - 300, H = yt(r, R, "vxe-cell--sort").flag, K = yt(r, R, "vxe-cell--filter").flag;
        g.trigger === "cell" && !(z || H || K) && b.triggerSortEvent(r, S, xt(S)), p.dispatchEvent("header-cell-click", Object.assign({ triggerResizable: z, triggerSort: H, triggerFilter: K, cell: R }, a), r), (C.isCurrent || e.highlightCurrentColumn) && p.setCurrentColumn(S);
      },
      triggerHeaderCellDblclickEvent(r, a) {
        p.dispatchEvent("header-cell-dblclick", Object.assign({ cell: r.currentTarget }, a), r);
      },
      /**
       * 列点击事件
       * 如果是单击模式，则激活为编辑状态
       * 如果是双击模式，则单击后选中状态
       */
      triggerCellClickEvent(r, a) {
        const { highlightCurrentRow: f, editConfig: g } = e, { editStore: C } = i, S = _.value, R = De.value, z = G.value, H = ce.value, K = k.value, X = xe.value, ge = ke.value, { actived: Me, focused: Oe } = C, { row: $e, column: Te } = a, { type: Fe, treeNode: ye } = Te, ze = Fe === "radio", Je = Fe === "checkbox", at = Fe === "expand", rt = r.currentTarget, ft = ze && yt(r, rt, "vxe-cell--radio").flag, kt = Je && yt(r, rt, "vxe-cell--checkbox").flag, Bt = ye && yt(r, rt, "vxe-tree--btn-wrapper").flag, It = at && yt(r, rt, "vxe-table--expanded").flag;
        a = Object.assign({ cell: rt, triggerRadio: ft, triggerCheckbox: kt, triggerTreeNode: Bt, triggerExpandNode: It }, a), !kt && !ft && (!It && (S.trigger === "row" || at && S.trigger === "cell") && b.triggerRowExpandEvent(r, a), (z.trigger === "row" || ye && z.trigger === "cell") && b.triggerTreeExpandEvent(r, a)), Bt || (It || ((ge.isCurrent || f) && !kt && !ft && b.triggerCurrentRowEvent(r, a), !ft && (H.trigger === "row" || ze && H.trigger === "cell") && b.triggerRadioRowEvent(r, a), !kt && (K.trigger === "row" || Je && K.trigger === "cell") && b.handleToggleCheckRowEvent(r, a)), mt(g) && (X.arrowCursorLock && r && R.mode === "cell" && r.target && /^input|textarea$/i.test(r.target.tagName) && (Oe.column = Te, Oe.row = $e), R.trigger === "manual" ? Me.args && Me.row === $e && Te !== Me.column && _n(r, a) : (!Me.args || $e !== Me.row || Te !== Me.column) && (R.trigger === "click" || R.trigger === "dblclick" && R.mode === "row" && Me.row === $e) && _n(r, a))), p.dispatchEvent("cell-click", a, r);
      },
      /**
       * 列双击点击事件
       * 如果是双击模式，则激活为编辑状态
       */
      triggerCellDblclickEvent(r, a) {
        const { editConfig: f } = e, { editStore: g } = i, C = De.value, { actived: S } = g, R = r.currentTarget;
        a = Object.assign({ cell: R }, a), mt(f) && C.trigger === "dblclick" && (!S.args || r.currentTarget !== S.args.cell) && (C.mode === "row" ? wn("blur").catch((z) => z).then(() => {
          M.handleActived(a, r).then(() => wn("change")).catch((z) => z);
        }) : C.mode === "cell" && M.handleActived(a, r).then(() => wn("change")).catch((z) => z)), p.dispatchEvent("cell-dblclick", a, r);
      },
      handleToggleCheckRowEvent(r, a) {
        const { selectCheckboxMaps: f } = i, g = k.value, { checkField: C } = g, { row: S } = a;
        let R = !1;
        C ? R = !l.get(S, C) : R = !f[We(M, S)], r ? b.triggerCheckRowEvent(r, a, R) : b.handleSelectRow(a, R);
      },
      triggerCheckRowEvent(r, a, f) {
        const g = k.value, { row: C } = a, { afterFullData: S } = m, { checkMethod: R } = g;
        if (g.isShiftKey && r.shiftKey && !e.treeConfig) {
          const z = p.getCheckboxRecords();
          if (z.length) {
            const H = z[0], K = p.getVTRowIndex(C), X = p.getVTRowIndex(H);
            if (K !== X) {
              p.setAllCheckboxRow(!1);
              const ge = K < X ? S.slice(K, X + 1) : S.slice(X, K + 1);
              Bn(ge, !0, !1), p.dispatchEvent("checkbox-range-select", Object.assign({ rangeRecords: ge }, a), r);
              return;
            }
          }
        }
        (!R || R({ row: C })) && (b.handleSelectRow(a, f), p.dispatchEvent("checkbox-change", Object.assign({
          records: p.getCheckboxRecords(),
          reserves: p.getCheckboxReserveRecords(),
          indeterminates: p.getCheckboxIndeterminateRecords(),
          checked: f
        }, a), r));
      },
      /**
       * 多选，选中所有事件
       */
      triggerCheckAllEvent(r, a) {
        Hn(a), r && p.dispatchEvent("checkbox-all", {
          records: p.getCheckboxRecords(),
          reserves: p.getCheckboxReserveRecords(),
          indeterminates: p.getCheckboxIndeterminateRecords(),
          checked: a
        }, r);
      },
      /**
       * 单选，行选中事件
       */
      triggerRadioRowEvent(r, a) {
        const { selectRadioRow: f } = i, { row: g } = a, C = ce.value;
        let S = g, R = f !== S;
        R ? rn(S) : C.strict || (R = f === S, R && (S = null, p.clearRadioRow())), R && p.dispatchEvent("radio-change", Object.assign({ oldValue: f, newValue: S }, a), r);
      },
      triggerCurrentRowEvent(r, a) {
        const { currentRow: f } = i, { row: g } = a, C = f !== g;
        p.setCurrentRow(g), C && p.dispatchEvent("current-change", Object.assign({ oldValue: f, newValue: g }, a), r);
      },
      /**
       * 展开行事件
       */
      triggerRowExpandEvent(r, a) {
        const { rowExpandLazyLoadedMaps: f, expandColumn: g } = i, C = _.value, { row: S } = a, { lazy: R } = C, z = We(M, S);
        if (!R || !f[z]) {
          const H = !p.isRowExpandByRow(S), K = p.getColumnIndex(g), X = p.getVMColumnIndex(g);
          p.setRowExpand(S, H), p.dispatchEvent("toggle-row-expand", {
            expanded: H,
            column: g,
            columnIndex: K,
            $columnIndex: X,
            row: S,
            rowIndex: p.getRowIndex(S),
            $rowIndex: p.getVMRowIndex(S)
          }, r);
        }
      },
      /**
       * 展开树节点事件
       */
      triggerTreeExpandEvent(r, a) {
        const { treeExpandLazyLoadedMaps: f } = i, g = G.value, { row: C, column: S } = a, { lazy: R } = g, z = We(M, C);
        if (!R || !f[z]) {
          const H = !p.isTreeExpandByRow(C), K = p.getColumnIndex(S), X = p.getVMColumnIndex(S);
          p.setTreeExpand(C, H), p.dispatchEvent("toggle-tree-expand", { expanded: H, column: S, columnIndex: K, $columnIndex: X, row: C }, r);
        }
      },
      /**
       * 点击排序事件
       */
      triggerSortEvent(r, a, f) {
        const { mouseConfig: g } = e, C = te.value, S = se.value, { field: R, sortable: z } = a;
        if (z) {
          !f || a.order === f ? p.clearSort(C.multiple ? a : null) : p.sort({ field: R, order: f });
          const H = { $table: M, $event: r, column: a, field: R, property: R, order: a.order, sortList: p.getSortColumns(), sortTime: a.sortTime };
          g && S.area && M.handleSortEvent && M.handleSortEvent(r, H), p.dispatchEvent("sort-change", H, r);
        }
      },
      /**
       * 横向 X 可视渲染事件处理
       */
      triggerScrollXEvent() {
        bo();
      },
      /**
       * 纵向 Y 可视渲染事件处理
       */
      triggerScrollYEvent(r) {
        const { scrollYStore: a } = m, { adaptive: f, offsetSize: g, visibleSize: C } = a;
        fN && f && g * 2 + C <= 40 ? os(r) : Js(r);
      },
      /**
       * 对于树形结构中，可以直接滚动到指定深层节点中
       * 对于某些特定的场景可能会用到，比如定位到某一节点
       * @param {Row} row 行对象
       */
      scrollToTreeRow(r) {
        const { treeConfig: a } = e, { tableFullData: f } = m, g = [];
        if (a) {
          const C = G.value, S = C.children || C.childrenField, R = l.findTree(f, (z) => M.eqRow(z, r), { children: S });
          if (R) {
            const z = R.nodes;
            z.forEach((H, K) => {
              K < z.length - 1 && !p.isTreeExpandByRow(H) && g.push(p.setTreeExpand(H, !0));
            });
          }
        }
        return Promise.all(g).then(() => Yu(M, r));
      },
      updateScrollYStatus: tl,
      // 更新横向 X 可视渲染上下剩余空间大小
      updateScrollXSpace() {
        const { isGroup: r, scrollXLoad: a, scrollbarWidth: f } = i, { visibleColumn: g, scrollXStore: C, elemStore: S, tableWidth: R } = m, z = y.value, H = w.value, K = P.value, X = H ? H.$el : null;
        if (X) {
          const ge = z ? z.$el : null, Me = K ? K.$el : null, Oe = ge ? ge.querySelector(".vxe-table--header") : null, $e = X.querySelector(".vxe-table--body"), Te = Me ? Me.querySelector(".vxe-table--footer") : null, Fe = g.slice(0, C.startIndex).reduce((Je, at) => Je + at.renderWidth, 0);
          let ye = "";
          a && (ye = `${Fe}px`), Oe && (Oe.style.marginLeft = r ? "" : ye), $e.style.marginLeft = ye, Te && (Te.style.marginLeft = ye), ["main"].forEach((Je) => {
            ["header", "body", "footer"].forEach((rt) => {
              const ft = S[`${Je}-${rt}-xSpace`], kt = ft ? ft.value : null;
              kt && (kt.style.width = a ? `${R + (rt === "header" ? f : 0)}px` : "");
            });
          }), ne(Jt);
        }
      },
      // 更新纵向 Y 可视渲染上下剩余空间大小
      updateScrollYSpace() {
        const { scrollYLoad: r } = i, { scrollYStore: a, elemStore: f, afterFullData: g } = m, { startIndex: C, rowHeight: S } = a, R = g.length * S, z = Math.max(0, C * S), H = ["main", "left", "right"];
        let K = "", X = "";
        r && (K = `${z}px`, X = `${R}px`), H.forEach((ge) => {
          const Me = ["header", "body", "footer"], Oe = f[`${ge}-body-table`], $e = Oe ? Oe.value : null;
          $e && ($e.style.marginTop = K), Me.forEach((Te) => {
            const Fe = f[`${ge}-${Te}-ySpace`], ye = Fe ? Fe.value : null;
            ye && (ye.style.height = X);
          });
        }), ne(Jt);
      },
      updateScrollXData() {
        ne(() => {
          en(), b.updateScrollXSpace();
        });
      },
      updateScrollYData() {
        ne(() => {
          b.handleTableData(), b.updateScrollYSpace();
        });
      },
      /**
       * 处理固定列的显示状态
       */
      checkScrolling() {
        const r = ve.value, a = oe.value, f = w.value, g = f ? f.$el : null;
        g && (r && (g.scrollLeft > 0 ? wo(r, "scrolling--middle") : Pn(r, "scrolling--middle")), a && (g.clientWidth < g.scrollWidth - Math.ceil(g.scrollLeft) ? wo(a, "scrolling--middle") : Pn(a, "scrolling--middle")));
      },
      updateZindex() {
        e.zIndex ? m.tZindex = e.zIndex : m.tZindex < ko() && (m.tZindex = ho());
      },
      handleCheckedCheckboxRow: Bn,
      /**
       * 行 hover 事件
       */
      triggerHoverEvent(r, { row: a }) {
        b.setHoverRow(a);
      },
      setHoverRow(r) {
        const a = We(M, r), f = D.value;
        b.clearHoverRow(), f && l.arrayEach(f.querySelectorAll(`[rowid="${a}"]`), (g) => wo(g, "row--hover")), m.hoverRow = r;
      },
      clearHoverRow() {
        const r = D.value;
        r && l.arrayEach(r.querySelectorAll(".vxe-body--row.row--hover"), (a) => Pn(a, "row--hover")), m.hoverRow = null;
      },
      getCell(r, a) {
        const f = We(M, r), g = w.value, C = F.value, S = de.value;
        let R;
        return a && (a.fixed && (a.fixed === "left" ? C && (R = C.$el) : S && (R = S.$el)), R || (R = g.$el), R) ? R.querySelector(`.vxe-body--row[rowid="${f}"] .${a.id}`) : null;
      },
      getCellLabel(r, a) {
        const f = a.formatter, g = Yn(r, a);
        let C = g;
        if (f) {
          let S;
          const { fullAllDataRowIdData: R } = m, z = We(M, r), H = a.id, K = R[z];
          if (K && (S = K.formatData, S || (S = R[z].formatData = {}), K && S[H] && S[H].value === g))
            return S[H].label;
          const X = { cellValue: g, row: r, rowIndex: p.getRowIndex(r), column: a, columnIndex: p.getColumnIndex(a) };
          if (l.isString(f)) {
            const ge = Xe.formats.get(f);
            C = ge && ge.cellFormatMethod ? ge.cellFormatMethod(X) : "";
          } else if (l.isArray(f)) {
            const ge = Xe.formats.get(f[0]);
            C = ge && ge.cellFormatMethod ? ge.cellFormatMethod(X, ...f.slice(1)) : "";
          } else
            C = f(X);
          S && (S[H] = { value: g, label: C });
        }
        return C;
      },
      findRowIndexOf(r, a) {
        return a ? l.findIndexOf(r, (f) => M.eqRow(f, a)) : -1;
      },
      eqRow(r, a) {
        return r && a ? r === a ? !0 : We(M, r) === We(M, a) : !1;
      }
    }, process.env.NODE_ENV === "development" && ("openExport,openPrint,exportData,openImport,importData,saveFile,readFile,importByFile,print".split(",").forEach((r) => {
      M[r] = function() {
        ot("vxe.error.reqModule", ["Export"]);
      };
    }), "clearValidate,fullValidate,validate".split(",").forEach((r) => {
      M[r] = function() {
        ot("vxe.error.reqModule", ["Validator"]);
      };
    })), Object.assign(M, p, b);
    const is = (r) => {
      const { showHeader: a, showFooter: f } = e, { tableData: g, tableColumn: C, tableGroupColumn: S, columnStore: R, footerTableData: z } = i, H = r === "left", K = H ? R.leftList : R.rightList;
      return d("div", {
        ref: H ? ve : oe,
        class: `vxe-table--fixed-${r}-wrapper`
      }, [
        a ? d(vd, {
          ref: H ? j : W,
          fixedType: r,
          tableData: g,
          tableColumn: C,
          tableGroupColumn: S,
          fixedColumn: K
        }) : Rt(),
        d(gd, {
          ref: H ? F : de,
          fixedType: r,
          tableData: g,
          tableColumn: C,
          fixedColumn: K
        }),
        f ? d(bd, {
          ref: H ? N : we,
          footerTableData: z,
          tableColumn: C,
          fixedColumn: K,
          fixedType: r
        }) : Rt()
      ]);
    }, si = () => {
      const r = be.value, a = { $table: M };
      if (n.empty)
        return n.empty(a);
      {
        const f = r.name ? Xe.renderer.get(r.name) : null, g = f ? f.renderEmpty : null;
        if (g)
          return Ht(g(r, a));
      }
      return qt(e.emptyText) || v.i18n("vxe.table.emptyText");
    };
    function ol() {
      const r = D.value;
      r && r.clientWidth && r.clientHeight && p.recalculate();
    }
    const rl = Ue(0);
    dt(() => e.data ? e.data.length : -1, () => {
      rl.value++;
    }), dt(() => e.data, () => {
      rl.value++;
    }), dt(rl, () => {
      const { inited: r, initStatus: a } = m;
      jn(e.data || []).then(() => {
        const { scrollXLoad: f, scrollYLoad: g, expandColumn: C } = i;
        m.inited = !0, m.initStatus = !0, a || Fo(), r || Sn(), process.env.NODE_ENV === "development" && (f || g) && C && lt("vxe.error.scrollErrProp", ["column.type=expand"]), p.recalculate();
      });
    });
    const x = Ue(0);
    dt(() => i.staticColumns.length, () => {
      x.value++;
    }), dt(() => i.staticColumns, () => {
      x.value++;
    }), dt(x, () => {
      Qo(i.staticColumns);
    });
    const J = Ue(0);
    dt(() => i.tableColumn.length, () => {
      J.value++;
    }), dt(() => i.tableColumn, () => {
      J.value++;
    }), dt(J, () => {
      b.analyColumnWidth();
    }), dt(() => i.upDataFlag, () => {
      ne(() => {
        p.updateData();
      });
    }), dt(() => i.reColumnFlag, () => {
      ne(() => {
        p.refreshColumn();
      });
    }), dt(() => e.showHeader, () => {
      ne(() => {
        p.recalculate(!0).then(() => p.refreshScroll());
      });
    }), dt(() => e.showFooter, () => {
      ne(() => {
        p.recalculate(!0).then(() => p.refreshScroll());
      });
    });
    const ue = Ue(0);
    dt(() => e.footerData ? e.footerData.length : -1, () => {
      ue.value++;
    }), dt(() => e.footerData, () => {
      ue.value++;
    }), dt(ue, () => {
      p.updateFooter();
    }), dt(() => e.height, () => {
      ne(() => p.recalculate(!0));
    }), dt(() => e.maxHeight, () => {
      ne(() => p.recalculate(!0));
    }), dt(() => e.syncResize, (r) => {
      r && (ol(), ne(() => {
        ol(), setTimeout(() => ol());
      }));
    });
    const Pe = Ue(0);
    dt(() => e.mergeCells ? e.mergeCells.length : -1, () => {
      Pe.value++;
    }), dt(() => e.mergeCells, () => {
      Pe.value++;
    }), dt(Pe, () => {
      p.clearMergeCells(), ne(() => {
        e.mergeCells && p.setMergeCells(e.mergeCells);
      });
    });
    const Ke = Ue(0);
    dt(() => e.mergeFooterItems ? e.mergeFooterItems.length : -1, () => {
      Ke.value++;
    }), dt(() => e.mergeFooterItems, () => {
      Ke.value++;
    }), dt(Ke, () => {
      p.clearMergeFooterItems(), ne(() => {
        e.mergeFooterItems && p.setMergeFooterItems(e.mergeFooterItems);
      });
    }), Xe.hooks.forEach((r) => {
      const { setupTable: a } = r;
      if (a) {
        const f = a(M);
        f && l.isObject(f) && Object.assign(M, f);
      }
    }), b.preventEvent(null, "created", { $table: M });
    let He;
    Sd(() => {
      p.recalculate().then(() => p.refreshScroll()), b.preventEvent(null, "activated", { $table: M });
    }), Dh(() => {
      m.isActivated = !1, b.preventEvent(null, "deactivated", { $table: M });
    }), gn(() => {
      ne(() => {
        const { data: r, treeConfig: a, showOverflow: f } = e, { scrollXStore: g, scrollYStore: C } = m, S = q.value, R = De.value, z = G.value, H = ce.value, K = k.value, X = _.value, ge = ke.value;
        if (process.env.NODE_ENV === "development") {
          e.rowId && lt("vxe.error.delProp", ["row-id", "row-config.keyField"]), e.rowKey && lt("vxe.error.delProp", ["row-key", "row-config.useKey"]), e.columnKey && lt("vxe.error.delProp", ["column-id", "column-config.useKey"]), !(e.rowId || ge.keyField) && (K.reserve || K.checkRowKeys || H.reserve || H.checkRowKey || X.expandRowKeys || z.expandRowKeys) && lt("vxe.error.reqProp", ["row-config.keyField"]), e.editConfig && (R.showStatus || R.showUpdateStatus || R.showInsertStatus) && !e.keepSource && lt("vxe.error.reqProp", ["keep-source"]), a && (z.showLine || z.line) && (!(e.rowKey || ge.useKey) || !f) && lt("vxe.error.reqProp", ["row-config.useKey | show-overflow"]), a && e.stripe && lt("vxe.error.noTree", ["stripe"]), e.showFooter && !(e.footerMethod || e.footerData) && lt("vxe.error.reqProp", ["footer-data | footer-method"]);
          const { exportConfig: Me, importConfig: Oe } = e, $e = ae.value, Te = Re.value;
          Oe && Te.types && !Te.importMethod && !l.includeArrays(Xe.globalConfs.importTypes, Te.types) && lt("vxe.error.errProp", [`export-config.types=${Te.types.join(",")}`, Te.types.filter((Fe) => l.includes(Xe.globalConfs.importTypes, Fe)).join(",") || Xe.globalConfs.importTypes.join(",")]), Me && $e.types && !$e.exportMethod && !l.includeArrays(Xe.globalConfs.exportTypes, $e.types) && lt("vxe.error.errProp", [`export-config.types=${$e.types.join(",")}`, $e.types.filter((Fe) => l.includes(Xe.globalConfs.exportTypes, Fe)).join(",") || Xe.globalConfs.exportTypes.join(",")]);
        }
        if (process.env.NODE_ENV === "development") {
          const Me = qe.value, Oe = se.value, $e = ke.value;
          if (!e.id && e.customConfig && (Me.storage === !0 || Me.storage && Me.storage.resizable || Me.storage && Me.storage.visible) && ot("vxe.error.reqProp", ["id"]), e.treeConfig && K.range && ot("vxe.error.noTree", ["checkbox-config.range"]), $e.height && !e.showOverflow && lt("vxe.error.notProp", ["table.show-overflow"]), !M.handleUpdateCellAreas && (e.clipConfig && lt("vxe.error.notProp", ["clip-config"]), e.fnrConfig && lt("vxe.error.notProp", ["fnr-config"]), Oe.area)) {
            ot("vxe.error.notProp", ["mouse-config.area"]);
            return;
          }
          e.treeConfig && z.children && lt("vxe.error.delProp", ["tree-config.children", "tree-config.childrenField"]), e.treeConfig && z.line && lt("vxe.error.delProp", ["tree-config.line", "tree-config.showLine"]), Oe.area && Oe.selected && lt("vxe.error.errConflicts", ["mouse-config.area", "mouse-config.selected"]), Oe.area && K.range && lt("vxe.error.errConflicts", ["mouse-config.area", "checkbox-config.range"]), e.treeConfig && Oe.area && ot("vxe.error.noTree", ["mouse-config.area"]), e.editConfig && R.activeMethod && lt("vxe.error.delProp", ["edit-config.activeMethod", "edit-config.beforeEditMethod"]), e.treeConfig && K.isShiftKey && ot("vxe.error.errConflicts", ["tree-config", "checkbox-config.isShiftKey"]), K.halfField && lt("vxe.error.delProp", ["checkbox-config.halfField", "checkbox-config.indeterminateField"]);
        }
        if (process.env.NODE_ENV === "development" && (e.editConfig && !M.insert && ot("vxe.error.reqModule", ["Edit"]), e.editRules && !M.validate && ot("vxe.error.reqModule", ["Validator"]), (K.range || e.keyboardConfig || e.mouseConfig) && !M.triggerCellMousedownEvent && ot("vxe.error.reqModule", ["Keyboard"]), (e.printConfig || e.importConfig || e.exportConfig) && !M.exportData && ot("vxe.error.reqModule", ["Export"])), Object.assign(C, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0,
          adaptive: S.adaptive !== !1
        }), Object.assign(g, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0
        }), jn(r || []).then(() => {
          r && r.length && (m.inited = !0, m.initStatus = !0, Fo(), Sn()), Jt();
        }), e.autoResize) {
          const Me = Ee.value, { refreshDelay: Oe } = Me, $e = D.value, Te = b.getParentElem(), Fe = Oe ? l.throttle(() => p.recalculate(!0), Oe, { leading: !0, trailing: !0 }) : null;
          He = uh(Fe ? () => {
            e.autoResize && requestAnimationFrame(Fe);
          } : () => {
            e.autoResize && p.recalculate(!0);
          }), $e && He.observe($e), Te && He.observe(Te);
        }
      }), bt.on(M, "paste", ss), bt.on(M, "copy", oi), bt.on(M, "cut", ri), bt.on(M, "mousedown", Qs), bt.on(M, "blur", ei), bt.on(M, "mousewheel", ti), bt.on(M, "keydown", ls), bt.on(M, "resize", li), M.handleGlobalContextmenuEvent && bt.on(M, "contextmenu", M.handleGlobalContextmenuEvent), b.preventEvent(null, "mounted", { $table: M });
    }), Qi(() => {
      He && He.disconnect(), p.closeFilter(), M.closeMenu && M.closeMenu(), b.preventEvent(null, "beforeUnmount", { $table: M });
    }), fn(() => {
      bt.off(M, "paste"), bt.off(M, "copy"), bt.off(M, "cut"), bt.off(M, "mousedown"), bt.off(M, "blur"), bt.off(M, "mousewheel"), bt.off(M, "keydown"), bt.off(M, "resize"), bt.off(M, "contextmenu"), b.preventEvent(null, "unmounted", { $table: M });
    });
    const nt = () => {
      const { loading: r, stripe: a, showHeader: f, height: g, treeConfig: C, mouseConfig: S, showFooter: R, highlightCell: z, highlightHoverRow: H, highlightHoverColumn: K, editConfig: X, editRules: ge } = e, { isGroup: Me, overflowX: Oe, overflowY: $e, scrollXLoad: Te, scrollYLoad: Fe, scrollbarHeight: ye, tableData: ze, tableColumn: Je, tableGroupColumn: at, footerTableData: rt, initStore: ft, columnStore: kt, filterStore: Bt, customStore: It } = i, { leftList: Tt, rightList: Ot } = kt, jt = n.loading, un = re.value, Qn = I.value, Sr = G.value, er = ke.value, ll = pe.value, tr = c.value, Co = tt.value, nr = se.value, or = fe.value, kn = _e.value, rr = Ne.value;
      return d("div", {
        ref: D,
        class: ["vxe-table", "vxe-table--render-default", `tid_${u}`, `border--${Co}`, {
          [`size--${tr}`]: tr,
          [`valid-msg--${Qn.msgMode}`]: !!ge,
          "vxe-editable": !!X,
          "old-cell-valid": ge && v.cellVaildMode === "obsolete",
          "cell--highlight": z,
          "cell--selected": S && nr.selected,
          "cell--area": S && nr.area,
          "row--highlight": er.isHover || H,
          "column--highlight": ll.isHover || K,
          "is--header": f,
          "is--footer": R,
          "is--group": Me,
          "is--tree-line": C && (Sr.showLine || Sr.line),
          "is--fixed-left": Tt.length,
          "is--fixed-right": Ot.length,
          "is--animat": !!e.animat,
          "is--round": e.round,
          "is--stripe": !C && a,
          "is--loading": r,
          "is--empty": !r && !ze.length,
          "is--scroll-y": $e,
          "is--scroll-x": Oe,
          "is--virtual-x": Te,
          "is--virtual-y": Fe
        }],
        onKeydown: ni
      }, [
        /**
         * 隐藏列
         */
        d("div", {
          class: "vxe-table-slots"
        }, n.default ? n.default({}) : []),
        d("div", {
          class: "vxe-table--render-wrapper"
        }, [
          d("div", {
            class: "vxe-table--main-wrapper"
          }, [
            /**
             * 表头
             */
            f ? d(vd, {
              ref: y,
              tableData: ze,
              tableColumn: Je,
              tableGroupColumn: at
            }) : Rt(),
            /**
             * 表体
             */
            d(gd, {
              ref: w,
              tableData: ze,
              tableColumn: Je
            }),
            /**
             * 表尾
             */
            R ? d(bd, {
              ref: P,
              footerTableData: rt,
              tableColumn: Je
            }) : Rt()
          ]),
          d("div", {
            class: "vxe-table--fixed-wrapper"
          }, [
            /**
             * 左侧固定区域
             */
            Tt && Tt.length && Oe ? is("left") : Rt(),
            /**
             * 右侧固定区域
             */
            Ot && Ot.length && Oe ? is("right") : Rt()
          ])
        ]),
        /**
         * 空数据
         */
        d("div", {
          ref: le,
          class: "vxe-table--empty-placeholder"
        }, [
          d("div", {
            class: "vxe-table--empty-content"
          }, si())
        ]),
        /**
         * 边框线
         */
        d("div", {
          class: "vxe-table--border-line"
        }),
        /**
         * 列宽线
         */
        d("div", {
          ref: ie,
          class: "vxe-table--resizable-bar",
          style: Oe ? {
            "padding-bottom": `${ye}px`
          } : null
        }),
        /**
         * 加载中
         */
        d(qs, {
          class: "vxe-table--loading",
          modelValue: r,
          icon: kn.icon,
          text: kn.text
        }, jt ? {
          default: () => jt({ $table: M, $grid: Q })
        } : {}),
        /**
         * 自定义列
         */
        ft.custom ? d(mn("vxe-table-custom-panel"), {
          ref: T,
          customStore: It
        }) : Rt(),
        /**
         * 筛选
         */
        ft.filter ? d(mn("vxe-table-filter-panel"), {
          ref: E,
          filterStore: Bt
        }) : Rt(),
        /**
         * 导入
         */
        ft.import && e.importConfig ? d(mn("vxe-table-import-panel"), {
          defaultOptions: i.importParams,
          storeData: i.importStore
        }) : Rt(),
        /**
         * 导出/导出
         */
        ft.export && (e.exportConfig || e.printConfig) ? d(mn("vxe-table-export-panel"), {
          defaultOptions: i.exportParams,
          storeData: i.exportStore
        }) : Rt(),
        /**
         * 快捷菜单
         */
        rr ? d(mn("vxe-table-menu-panel"), {
          ref: B
        }) : Rt(),
        /**
         * 通用提示
         */
        s ? d(mn("vxe-tooltip"), {
          ref: $,
          isArrow: !1,
          enterable: !1
        }) : Rt(),
        /**
         * 工具提示
         */
        s ? d(mn("vxe-tooltip"), Object.assign({ ref: A }, un)) : Rt(),
        /**
         * 校验提示
         */
        s && e.editRules && Qn.showMessage && (Qn.message === "default" ? !g : Qn.message === "tooltip") ? d(mn("vxe-tooltip"), Object.assign({ ref: O, class: [{
          "old-cell-valid": ge && v.cellVaildMode === "obsolete"
        }, "vxe-table--valid-error"] }, Qn.message === "tooltip" || ze.length === 1 ? or : {})) : Rt()
      ]);
    };
    return M.renderVN = nt, Yt("xecolgroup", null), Yt("$xetable", M), M;
  },
  render() {
    return this.renderVN();
  }
}), Gs = Object.assign(Tl, {
  install: function(e) {
    e.component(Tl.name, Tl);
  }
}), pN = Gs;
Nt.component(Tl.name, Tl);
const Ys = Object.assign(vr, {
  install: function(e) {
    e.component(vr.name, vr);
  }
}), hN = Ys;
Nt.component(vr.name, vr);
const Rl = Mt({
  name: "VxePager",
  props: {
    size: { type: String, default: () => v.pager.size || v.size },
    // 自定义布局
    layouts: { type: Array, default: () => v.pager.layouts || ["PrevJump", "PrevPage", "Jump", "PageCount", "NextPage", "NextJump", "Sizes", "Total"] },
    // 当前页
    currentPage: { type: Number, default: 1 },
    // 加载中
    loading: Boolean,
    // 每页大小
    pageSize: { type: Number, default: () => v.pager.pageSize || 10 },
    // 总条数
    total: { type: Number, default: 0 },
    // 显示页码按钮的数量
    pagerCount: { type: Number, default: () => v.pager.pagerCount || 7 },
    // 每页大小选项列表
    pageSizes: { type: Array, default: () => v.pager.pageSizes || [10, 15, 20, 50, 100] },
    // 列对其方式
    align: { type: String, default: () => v.pager.align },
    // 带边框
    border: { type: Boolean, default: () => v.pager.border },
    // 带背景颜色
    background: { type: Boolean, default: () => v.pager.background },
    // 配套的样式
    perfect: { type: Boolean, default: () => v.pager.perfect },
    // 当只有一页时隐藏
    autoHidden: { type: Boolean, default: () => v.pager.autoHidden },
    transfer: { type: Boolean, default: () => v.pager.transfer },
    className: [String, Function],
    // 自定义图标
    iconPrevPage: String,
    iconJumpPrev: String,
    iconJumpNext: String,
    iconNextPage: String,
    iconJumpMore: String,
    iconHomePage: String,
    iconEndPage: String
  },
  emits: [
    "update:pageSize",
    "update:currentPage",
    "page-change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = gt("$xegrid", null), h = Gt({
      inpCurrPage: e.currentPage
    }), i = Ue(), m = {
      refElem: i
    }, p = {
      xID: s,
      props: e,
      context: t,
      getRefMaps: () => m
    };
    let b = {}, D = {};
    const A = (k, Z) => Math.max(Math.ceil(k / Z), 1), $ = Ce(() => A(e.total, e.pageSize)), O = (k, Z) => {
      o("update:currentPage", Z), k && Z !== e.currentPage && b.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: Z }, k);
    }, B = (k, Z) => {
      o("update:currentPage", k), Z && k !== e.currentPage && b.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: k }, Z);
    }, E = (k) => {
      const Z = k.target, re = l.toInteger(Z.value), fe = $.value, De = re <= 0 ? 1 : re >= fe ? fe : re, te = l.toValueString(De);
      Z.value = te, h.inpCurrPage = te, B(De, k);
    }, T = Ce(() => {
      const { pagerCount: k } = e, re = $.value > k ? k - 2 : k, fe = [];
      for (let De = 0; De < re; De++)
        fe.push(De);
      return fe;
    }), y = Ce(() => Math.floor((e.pagerCount - 2) / 2)), w = Ce(() => e.pageSizes.map((k) => l.isNumber(k) ? {
      value: k,
      label: `${v.i18n("vxe.pager.pagesize", [k])}`
    } : Object.assign({ value: "", label: "" }, k))), P = (k) => {
      const { currentPage: Z } = e;
      Z > 1 && B(1, k);
    }, j = (k) => {
      const { currentPage: Z } = e, re = $.value;
      Z < re && B(re, k);
    }, F = (k) => {
      const { currentPage: Z } = e, re = $.value;
      Z > 1 && B(Math.min(re, Math.max(Z - 1, 1)), k);
    }, N = (k) => {
      const { currentPage: Z } = e, re = $.value;
      Z < re && B(Math.min(re, Z + 1), k);
    }, W = (k) => {
      const Z = T.value;
      B(Math.max(e.currentPage - Z.length, 1), k);
    }, de = (k) => {
      const Z = $.value, re = T.value;
      B(Math.min(e.currentPage + re.length, Z), k);
    }, we = (k) => {
      const { value: Z } = k, re = l.toNumber(Z), fe = A(e.total, re);
      let De = e.currentPage;
      De > fe && (De = fe, o("update:currentPage", fe)), o("update:pageSize", re), b.dispatchEvent("page-change", { type: "size", pageSize: re, currentPage: De });
    }, ve = (k) => {
      const Z = k.target;
      h.inpCurrPage = Z.value;
    }, oe = (k) => {
      vt(k, pt.ENTER) ? E(k) : vt(k, pt.ARROW_UP) ? (k.preventDefault(), N(k)) : vt(k, pt.ARROW_DOWN) && (k.preventDefault(), F(k));
    }, ie = () => d("button", {
      class: ["vxe-pager--prev-btn", {
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: v.i18n("vxe.pager.homePageTitle"),
      onClick: P
    }, [
      d("i", {
        class: ["vxe-pager--btn-icon", e.iconHomePage || v.icon.PAGER_HOME]
      })
    ]), le = () => d("button", {
      class: ["vxe-pager--prev-btn", {
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: v.i18n("vxe.pager.prevPageTitle"),
      onClick: F
    }, [
      d("i", {
        class: ["vxe-pager--btn-icon", e.iconPrevPage || v.icon.PAGER_PREV_PAGE]
      })
    ]), Q = (k) => d(k || "button", {
      class: ["vxe-pager--jump-prev", {
        "is--fixed": !k,
        "is--disabled": e.currentPage <= 1
      }],
      type: "button",
      title: v.i18n("vxe.pager.prevJumpTitle"),
      onClick: W
    }, [
      k ? d("i", {
        class: ["vxe-pager--jump-more-icon", e.iconJumpMore || v.icon.PAGER_JUMP_MORE]
      }) : null,
      d("i", {
        class: ["vxe-pager--jump-icon", e.iconJumpPrev || v.icon.PAGER_JUMP_PREV]
      })
    ]), L = (k) => {
      const Z = $.value;
      return d(k || "button", {
        class: ["vxe-pager--jump-next", {
          "is--fixed": !k,
          "is--disabled": e.currentPage >= Z
        }],
        type: "button",
        title: v.i18n("vxe.pager.nextJumpTitle"),
        onClick: de
      }, [
        k ? d("i", {
          class: ["vxe-pager--jump-more-icon", e.iconJumpMore || v.icon.PAGER_JUMP_MORE]
        }) : null,
        d("i", {
          class: ["vxe-pager--jump-icon", e.iconJumpNext || v.icon.PAGER_JUMP_NEXT]
        })
      ]);
    }, I = () => {
      const k = $.value;
      return d("button", {
        class: ["vxe-pager--next-btn", {
          "is--disabled": e.currentPage >= k
        }],
        type: "button",
        title: v.i18n("vxe.pager.nextPageTitle"),
        onClick: N
      }, [
        d("i", {
          class: ["vxe-pager--btn-icon", e.iconNextPage || v.icon.PAGER_NEXT_PAGE]
        })
      ]);
    }, V = () => {
      const k = $.value;
      return d("button", {
        class: ["vxe-pager--prev-btn", {
          "is--disabled": e.currentPage >= k
        }],
        type: "button",
        title: v.i18n("vxe.pager.endPageTitle"),
        onClick: j
      }, [
        d("i", {
          class: ["vxe-pager--btn-icon", e.iconEndPage || v.icon.PAGER_END]
        })
      ]);
    }, q = (k) => {
      const { currentPage: Z, pagerCount: re } = e, fe = [], De = $.value, te = T.value, ee = y.value, se = De > re, he = se && Z > ee + 1, xe = se && Z < De - ee;
      let me = 1;
      return se && (Z >= De - ee ? me = Math.max(De - te.length + 1, 1) : me = Math.max(Z - ee, 1)), k && he && fe.push(d("button", {
        class: "vxe-pager--num-btn",
        type: "button",
        onClick: (Ve) => O(Ve, 1)
      }, 1), Q("span")), te.forEach((Ve, Ge) => {
        const Ye = me + Ge;
        Ye <= De && fe.push(d("button", {
          key: Ye,
          class: ["vxe-pager--num-btn", {
            "is--active": Z === Ye
          }],
          type: "button",
          onClick: (je) => O(je, Ye)
        }, Ye));
      }), k && xe && fe.push(L("button"), d("button", {
        class: "vxe-pager--num-btn",
        type: "button",
        onClick: (Ve) => O(Ve, De)
      }, De)), d("span", {
        class: "vxe-pager--btn-wrapper"
      }, fe);
    }, U = () => q(!0), pe = () => {
      const k = w.value;
      return d(Ys, {
        class: "vxe-pager--sizes",
        modelValue: e.pageSize,
        placement: "top",
        transfer: e.transfer,
        options: k,
        onChange: we
      });
    }, ke = (k) => d("span", {
      class: "vxe-pager--jump"
    }, [
      k ? d("span", {
        class: "vxe-pager--goto-text"
      }, v.i18n("vxe.pager.goto")) : null,
      d("input", {
        class: "vxe-pager--goto",
        value: h.inpCurrPage,
        type: "text",
        autocomplete: "off",
        onInput: ve,
        onKeydown: oe,
        onBlur: E
      }),
      k ? d("span", {
        class: "vxe-pager--classifier-text"
      }, v.i18n("vxe.pager.pageClassifier")) : null
    ]), Ee = () => ke(!0), Le = () => {
      const k = $.value;
      return d("span", {
        class: "vxe-pager--count"
      }, [
        d("span", {
          class: "vxe-pager--separator"
        }),
        d("span", k)
      ]);
    }, Ae = () => d("span", {
      class: "vxe-pager--total"
    }, v.i18n("vxe.pager.total", [e.total]));
    b = {
      dispatchEvent(k, Z, re) {
        o(k, Object.assign({ $pager: p, $event: re }, Z));
      },
      homePage() {
        return P(), ne();
      },
      endPage() {
        return j(), ne();
      },
      prevPage() {
        return F(), ne();
      },
      nextPage() {
        return N(), ne();
      },
      prevJump() {
        return W(), ne();
      },
      nextJump() {
        return de(), ne();
      }
    }, D = {
      handlePrevPage: F,
      handleNextPage: N,
      handlePrevJump: W,
      handleNextJump: de
    }, Object.assign(p, b, D), dt(() => e.currentPage, (k) => {
      h.inpCurrPage = k;
    });
    const ce = () => {
      const { align: k, layouts: Z, className: re } = e, fe = [], De = u.value, te = $.value;
      return n.left && fe.push(d("span", {
        class: "vxe-pager--left-wrapper"
      }, n.left({ $grid: c }))), Z.forEach((ee) => {
        let se;
        switch (ee) {
          case "Home":
            se = ie;
            break;
          case "PrevJump":
            se = Q;
            break;
          case "PrevPage":
            se = le;
            break;
          case "Number":
            se = q;
            break;
          case "JumpNumber":
            se = U;
            break;
          case "NextPage":
            se = I;
            break;
          case "NextJump":
            se = L;
            break;
          case "End":
            se = V;
            break;
          case "Sizes":
            se = pe;
            break;
          case "FullJump":
            se = Ee;
            break;
          case "Jump":
            se = ke;
            break;
          case "PageCount":
            se = Le;
            break;
          case "Total":
            se = Ae;
            break;
        }
        se ? fe.push(se()) : process.env.NODE_ENV === "development" && ot("vxe.error.notProp", [`layouts -> ${ee}`]);
      }), n.right && fe.push(d("span", {
        class: "vxe-pager--right-wrapper"
      }, n.right({ $grid: c }))), d("div", {
        ref: i,
        class: ["vxe-pager", re ? l.isFunction(re) ? re({ $pager: p }) : re : "", {
          [`size--${De}`]: De,
          [`align--${k}`]: k,
          "is--border": e.border,
          "is--background": e.background,
          "is--perfect": e.perfect,
          "is--hidden": e.autoHidden && te === 1,
          "is--loading": e.loading
        }]
      }, [
        d("div", {
          class: "vxe-pager--wrapper"
        }, fe)
      ]);
    };
    return p.renderVN = ce, p;
  },
  render() {
    return this.renderVN();
  }
}), Us = Object.assign(Rl, {
  install: function(e) {
    e.component(Rl.name, Rl);
  }
}), mN = Us;
Nt.component(Rl.name, Rl);
const Gn = Object.assign(En, {
  install(e) {
    e.component(En.name, En);
  }
}), gN = Gn;
Nt.component(En.name, En);
const Dl = Mt({
  name: "VxeToolbar",
  props: {
    loading: Boolean,
    refresh: [Boolean, Object],
    import: [Boolean, Object],
    export: [Boolean, Object],
    print: [Boolean, Object],
    zoom: [Boolean, Object],
    custom: [Boolean, Object],
    buttons: { type: Array, default: () => v.toolbar.buttons },
    tools: { type: Array, default: () => v.toolbar.tools },
    perfect: { type: Boolean, default: () => v.toolbar.perfect },
    size: { type: String, default: () => v.toolbar.size || v.size },
    className: [String, Function]
  },
  emits: [
    "button-click",
    "tool-click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      isRefresh: !1,
      columns: []
    }), h = Ue(), i = {
      refElem: h
    }, m = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => i
    };
    let p = {};
    const b = gt("$xegrid", null);
    let D;
    const A = Ue(0), $ = Ce(() => Object.assign({}, v.toolbar.refresh, e.refresh)), O = Ce(() => Object.assign({}, v.toolbar.import, e.import)), B = Ce(() => Object.assign({}, v.toolbar.export, e.export)), E = Ce(() => Object.assign({}, v.toolbar.print, e.print)), T = Ce(() => Object.assign({}, v.toolbar.zoom, e.zoom)), y = Ce(() => Object.assign({}, v.toolbar.custom, e.custom)), w = Ce(() => {
      if ((A.value || D) && D) {
        const { computeCustomOpts: ce } = D.getComputeMaps();
        return ce.value;
      }
      return {};
    }), P = Ce(() => w.value.trigger), j = () => {
      if (D)
        return !0;
      ot("vxe.error.barUnableLink");
    }, F = ({ $event: ce }) => {
      D && D.triggerCustomEvent(ce);
    }, N = ({ $event: ce }) => {
      D && D.customOpenEvent(ce);
    }, W = ({ $event: ce }) => {
      const { customStore: k } = D.reactData;
      k.activeBtn = !1, setTimeout(() => {
        !k.activeBtn && !k.activeWrapper && D.customColseEvent(ce);
      }, 350);
    }, de = (ce) => {
      const { isRefresh: k } = c, Z = $.value;
      if (!k) {
        const re = Z.queryMethod || Z.query;
        if (re) {
          c.isRefresh = !0;
          try {
            Promise.resolve(re({})).catch((fe) => fe).then(() => {
              c.isRefresh = !1;
            });
          } catch {
            c.isRefresh = !1;
          }
        } else b && (c.isRefresh = !0, b.triggerToolbarCommitEvent({ code: Z.code || "reload" }, ce).catch((fe) => fe).then(() => {
          c.isRefresh = !1;
        }));
      }
    }, we = (ce) => {
      b && b.triggerZoomEvent(ce);
    }, ve = (ce, k) => {
      const { code: Z } = k;
      if (Z)
        if (b)
          b.triggerToolbarBtnEvent(k, ce);
        else {
          const re = Xe.commands.get(Z), fe = { code: Z, button: k, $table: D, $grid: b, $event: ce };
          re && (re.commandMethod ? re.commandMethod(fe) : process.env.NODE_ENV === "development" && ot("vxe.error.notCommands", [Z])), m.dispatchEvent("button-click", fe, ce);
        }
    }, oe = (ce, k) => {
      const { code: Z } = k;
      if (Z)
        if (b)
          b.triggerToolbarTolEvent(k, ce);
        else {
          const re = Xe.commands.get(Z), fe = { code: Z, tool: k, $table: D, $grid: b, $event: ce };
          re && (re.commandMethod ? re.commandMethod(fe) : process.env.NODE_ENV === "development" && ot("vxe.error.notCommands", [Z])), m.dispatchEvent("tool-click", fe, ce);
        }
    }, ie = () => {
      j() && D.openImport();
    }, le = () => {
      j() && D.openExport();
    }, Q = () => {
      j() && D.openPrint();
    }, L = (ce, k) => {
      const { dropdowns: Z } = ce, re = [];
      return Z ? Z.map((fe, De) => fe.visible === !1 ? Rt() : d(Gn, {
        key: De,
        disabled: fe.disabled,
        loading: fe.loading,
        type: fe.type,
        icon: fe.icon,
        circle: fe.circle,
        round: fe.round,
        status: fe.status,
        content: fe.name,
        onClick: (te) => k ? ve(te, fe) : oe(te, fe)
      })) : re;
    }, I = () => {
      const { buttons: ce } = e, k = n.buttons;
      if (k)
        return Ht(k({ $grid: b, $table: D }));
      const Z = [];
      return ce && ce.forEach((re) => {
        const { dropdowns: fe, buttonRender: De } = re;
        if (re.visible !== !1) {
          const te = De ? Xe.renderer.get(De.name) : null;
          if (De && te && te.renderToolbarButton) {
            const ee = te.toolbarButtonClassName, se = { $grid: b, $table: D, button: re };
            Z.push(d("span", {
              class: ["vxe-button--item", ee ? l.isFunction(ee) ? ee(se) : ee : ""]
            }, Ht(te.renderToolbarButton(De, se))));
          } else
            Z.push(d(Gn, {
              disabled: re.disabled,
              loading: re.loading,
              type: re.type,
              icon: re.icon,
              circle: re.circle,
              round: re.round,
              status: re.status,
              content: re.name,
              destroyOnClose: re.destroyOnClose,
              placement: re.placement,
              transfer: re.transfer,
              onClick: (ee) => ve(ee, re)
            }, fe && fe.length ? {
              dropdowns: () => L(re, !0)
            } : {}));
        }
      }), Z;
    }, V = () => {
      const { tools: ce } = e, k = n.tools;
      if (k)
        return Ht(k({ $grid: b, $table: D }));
      const Z = [];
      return ce && ce.forEach((re, fe) => {
        const { dropdowns: De, toolRender: te } = re;
        if (re.visible !== !1) {
          const ee = te ? te.name : null, se = te ? Xe.renderer.get(ee) : null;
          if (te && se && se.renderToolbarTool) {
            const he = se.toolbarToolClassName, xe = { $grid: b, $table: D, tool: re };
            Z.push(d("span", {
              key: ee,
              class: ["vxe-tool--item", he ? l.isFunction(he) ? he(xe) : he : ""]
            }, Ht(se.renderToolbarTool(te, xe))));
          } else
            Z.push(d(Gn, {
              key: fe,
              disabled: re.disabled,
              loading: re.loading,
              type: re.type,
              icon: re.icon,
              circle: re.circle,
              round: re.round,
              status: re.status,
              content: re.name,
              destroyOnClose: re.destroyOnClose,
              placement: re.placement,
              transfer: re.transfer,
              onClick: (he) => oe(he, re)
            }, De && De.length ? {
              dropdowns: () => L(re, !1)
            } : {}));
        }
      }), Z;
    }, q = () => {
      const ce = O.value;
      return d(Gn, {
        key: "import",
        circle: !0,
        icon: ce.icon || v.icon.TOOLBAR_TOOLS_IMPORT,
        title: v.i18n("vxe.toolbar.import"),
        onClick: ie
      });
    }, U = () => {
      const ce = B.value;
      return d(Gn, {
        key: "export",
        circle: !0,
        icon: ce.icon || v.icon.TOOLBAR_TOOLS_EXPORT,
        title: v.i18n("vxe.toolbar.export"),
        onClick: le
      });
    }, pe = () => {
      const ce = E.value;
      return d(Gn, {
        key: "print",
        circle: !0,
        icon: ce.icon || v.icon.TOOLBAR_TOOLS_PRINT,
        title: v.i18n("vxe.toolbar.print"),
        onClick: Q
      });
    }, ke = () => {
      const ce = $.value;
      return d(Gn, {
        key: "refresh",
        circle: !0,
        icon: c.isRefresh ? ce.iconLoading || v.icon.TOOLBAR_TOOLS_REFRESH_LOADING : ce.icon || v.icon.TOOLBAR_TOOLS_REFRESH,
        title: v.i18n("vxe.toolbar.refresh"),
        onClick: de
      });
    }, Ee = () => {
      const ce = T.value;
      return b ? d(Gn, {
        key: "zoom",
        circle: !0,
        icon: b.isMaximized() ? ce.iconOut || v.icon.TOOLBAR_TOOLS_MINIMIZE : ce.iconIn || v.icon.TOOLBAR_TOOLS_FULLSCREEN,
        title: v.i18n(`vxe.toolbar.zoom${b.isMaximized() ? "Out" : "In"}`),
        onClick: we
      }) : Rt();
    }, Le = () => {
      const ce = y.value, k = P.value, Z = {};
      return k === "manual" || (k === "hover" ? (Z.onMouseenter = N, Z.onMouseleave = W) : Z.onClick = F), d(Gn, Object.assign({ key: "custom", circle: !0, icon: ce.icon || v.icon.TOOLBAR_TOOLS_CUSTOM, title: v.i18n("vxe.toolbar.custom"), className: "vxe-toolbar-custom-target" }, Z));
    };
    p = {
      dispatchEvent(ce, k, Z) {
        o(ce, Object.assign({ $toolbar: m, $event: Z }, k));
      },
      syncUpdate(ce) {
        const { collectColumn: k } = ce;
        D = ce.$table, c.columns = k, A.value++;
      }
    }, Object.assign(m, p), ne(() => {
      const { refresh: ce } = e, k = $.value, Z = k.queryMethod || k.query;
      ce && !b && !Z && lt("vxe.error.notFunc", ["queryMethod"]);
      const re = y.value;
      process.env.NODE_ENV === "development" && (re.isFooter && lt("vxe.error.delProp", ["toolbar.custom.isFooter", "table.custom-config.showFooter"]), re.showFooter && lt("vxe.error.delProp", ["toolbar.custom.showFooter", "table.custom-config.showFooter"]), re.immediate && lt("vxe.error.delProp", ["toolbar.custom.immediate", "table.custom-config.immediate"]), re.trigger && lt("vxe.error.delProp", ["toolbar.custom.trigger", "table.custom-config.trigger"]));
    });
    const Ae = () => {
      const { perfect: ce, loading: k, refresh: Z, zoom: re, custom: fe, className: De } = e, te = u.value;
      return d("div", {
        ref: h,
        class: ["vxe-toolbar", De ? l.isFunction(De) ? De({ $toolbar: m }) : De : "", {
          [`size--${te}`]: te,
          "is--perfect": ce,
          "is--loading": k
        }]
      }, [
        d("div", {
          class: "vxe-buttons--wrapper"
        }, I()),
        d("div", {
          class: "vxe-tools--wrapper"
        }, V()),
        d("div", {
          class: "vxe-tools--operate"
        }, [
          e.import ? q() : Rt(),
          e.export ? U() : Rt(),
          e.print ? pe() : Rt(),
          Z ? ke() : Rt(),
          re && b ? Ee() : Rt(),
          fe ? Le() : Rt()
        ])
      ]);
    };
    return m.renderVN = Ae, m;
  },
  render() {
    return this.renderVN();
  }
}), Ks = Object.assign(Dl, {
  install: function(e) {
    e.component(Dl.name, Dl);
  }
}), vN = Ks;
Nt.component(Dl.name, Dl);
class dh {
  constructor(t, n) {
    Object.assign(this, {
      id: l.uniqueId("item_"),
      title: n.title,
      field: n.field,
      span: n.span,
      align: n.align,
      titleAlign: n.titleAlign,
      titleWidth: n.titleWidth,
      titleColon: n.titleColon,
      titleAsterisk: n.titleAsterisk,
      titlePrefix: n.titlePrefix,
      titleSuffix: n.titleSuffix,
      titleOverflow: n.titleOverflow,
      showTitle: n.showTitle,
      resetValue: n.resetValue,
      visibleMethod: n.visibleMethod,
      visible: n.visible,
      folding: n.folding,
      collapseNode: n.collapseNode,
      className: n.className,
      contentClassName: n.contentClassName,
      contentStyle: n.contentStyle,
      titleClassName: n.titleClassName,
      titleStyle: n.titleStyle,
      itemRender: n.itemRender,
      // 渲染属性
      showError: !1,
      errRule: null,
      slots: n.slots,
      children: []
    });
  }
  update(t, n) {
    this[t] = n;
  }
}
function bN(e) {
  return e instanceof dh;
}
function za(e, t) {
  return bN(t) ? t : new dh(e, t);
}
function xd(e, t) {
  return t ? l.isString(t) ? e.getItemByField(t) : t : null;
}
function xN(e, t) {
  const { reactData: n } = e, { collapseAll: o } = n, { folding: s, visible: u } = t;
  return u === !1 || s && o;
}
function ja(e, t) {
  let { visibleMethod: n, itemRender: o, visible: s, field: u } = t;
  if (s === !1)
    return s;
  const c = mt(o) ? Xe.renderer.get(o.name) : null;
  if (!n && c && c.itemVisibleMethod && (n = c.itemVisibleMethod), !n)
    return !0;
  const { data: h } = e.props;
  return n({ data: h, field: u, property: u, item: t, $form: e, $grid: e.xegrid });
}
function fh(e, t) {
  Object.keys(e).forEach((n) => {
    dt(() => e[n], (o) => {
      t.update(n, o);
    });
  });
}
function ph(e, t, n, o) {
  const { reactData: s } = e, { staticItems: u } = s, c = t.parentNode, h = o ? o.formItem : null, i = h ? h.children : u;
  c && (i.splice(l.arrayIndexOf(c.children, t), 0, n), s.staticItems = u.slice(0));
}
function hh(e, t) {
  const { reactData: n } = e, { staticItems: o } = n, s = l.findIndexOf(o, (u) => u.id === t.id);
  s > -1 && o.splice(s, 1), n.staticItems = o.slice(0);
}
const Gr = Object.assign(zr, {
  install: function(e) {
    Xe.tooltip = !0, e.component(zr.name, zr);
  }
}), CN = Gr;
Nt.component(zr.name, zr);
function Cd(e) {
  return d("span", {
    class: "vxe-form--item-title-prefix"
  }, [
    d("i", {
      class: e.icon || v.icon.FORM_PREFIX
    })
  ]);
}
function yd(e) {
  return d("span", {
    class: "vxe-form--item-title-suffix"
  }, [
    d("i", {
      class: e.icon || v.icon.FORM_SUFFIX
    })
  ]);
}
function mh(e, t) {
  const { data: n } = e.props, { computeTooltipOpts: o } = e.getComputeMaps(), { slots: s, field: u, itemRender: c, titlePrefix: h, titleSuffix: i } = t, m = o.value, p = mt(c) ? Xe.renderer.get(c.name) : null, b = { data: n, field: u, property: u, item: t, $form: e, $grid: e.xegrid }, D = s ? s.title : null, A = [], $ = [];
  h && $.push(h.content || h.message ? d(Gr, Object.assign(Object.assign(Object.assign({}, m), h), { content: qt(h.content || h.message) }), {
    default: () => Cd(h)
  }) : Cd(h)), $.push(d("span", {
    class: "vxe-form--item-title-label"
  }, p && p.renderItemTitle ? Ht(p.renderItemTitle(c, b)) : D ? e.callSlot(D, b) : qt(t.title))), A.push(d("div", {
    class: "vxe-form--item-title-content"
  }, $));
  const O = [];
  return i && O.push(i.content || i.message ? d(Gr, Object.assign(Object.assign(Object.assign({}, m), i), { content: qt(i.content || i.message) }), {
    default: () => yd(i)
  }) : yd(i)), A.push(d("div", {
    class: "vxe-form--item-title-postfix"
  }, O)), A;
}
const gh = Mt({
  name: "VxeFormConfigItem",
  props: {
    itemConfig: Object
  },
  setup(e) {
    const t = gt("$xeform", {}), n = { itemConfig: e.itemConfig };
    return Yt("$xeformiteminfo", n), Yt("$xeformgather", null), {
      renderVN: () => {
        const { reactData: u } = t, { data: c, rules: h, span: i, align: m, titleAlign: p, titleWidth: b, titleColon: D, titleAsterisk: A, titleOverflow: $, vertical: O } = t.props, { computeValidOpts: B } = t.getComputeMaps(), E = e.itemConfig, { collapseAll: T } = u, y = B.value, { slots: w, title: P, visible: j, folding: F, field: N, collapseNode: W, itemRender: de, showError: we, errRule: ve, className: oe, titleOverflow: ie, vertical: le, children: Q, showTitle: L, contentClassName: I, contentStyle: V, titleClassName: q, titleStyle: U } = E, pe = mt(de) ? Xe.renderer.get(de.name) : null, ke = pe ? pe.itemClassName : "", Ee = pe ? pe.itemStyle : null, Le = pe ? pe.itemContentClassName : "", Ae = pe ? pe.itemContentStyle : null, ce = pe ? pe.itemTitleClassName : "", k = pe ? pe.itemTitleStyle : null, Z = w ? w.default : null, re = w ? w.title : null, fe = E.span || i, De = E.align || m, te = l.eqNull(E.titleAlign) ? p : E.titleAlign, ee = l.eqNull(E.titleWidth) ? b : E.titleWidth, se = l.eqNull(E.titleColon) ? D : E.titleColon, he = l.eqNull(E.titleAsterisk) ? A : E.titleAsterisk, xe = l.isUndefined(ie) || l.isNull(ie) ? $ : ie, me = l.isUndefined(le) || l.isNull(le) ? O : le, Ve = xe === "ellipsis", Ge = xe === "title", Ye = xe === !0 || xe === "tooltip", je = Ge || Ye || Ve, Ie = { data: c, field: N, property: N, item: E, $form: t, $grid: t.xegrid };
        if (j === !1)
          return Rt();
        let Ne = !1;
        if (h) {
          const Se = h[N];
          Se && (Ne = Se.some((_) => _.required));
        }
        if (Q && Q.length > 0) {
          const Se = Q.map((_, G) => d(gh, {
            key: G,
            itemConfig: _
          }));
          return Se.length ? d("div", {
            class: ["vxe-form--gather vxe-row", E.id, fe ? `vxe-col--${fe} is--span` : "", oe ? l.isFunction(oe) ? oe(Ie) : oe : ""]
          }, Se) : Rt();
        }
        let ae = [];
        Z ? ae = t.callSlot(Z, Ie) : pe && pe.renderItemContent ? ae = Ht(pe.renderItemContent(de, Ie)) : N && (ae = [l.toValueString(l.get(c, N))]), W && ae.push(d("div", {
          class: "vxe-form--item-trigger-node",
          onClick: t.toggleCollapseEvent
        }, [
          d("span", {
            class: "vxe-form--item-trigger-text"
          }, T ? v.i18n("vxe.form.unfolding") : v.i18n("vxe.form.folding")),
          d("i", {
            class: ["vxe-form--item-trigger-icon", T ? v.icon.FORM_FOLDING : v.icon.FORM_UNFOLDING]
          })
        ])), ve && y.showMessage && ae.push(d("div", {
          class: "vxe-form--item-valid",
          style: ve.maxWidth ? {
            width: `${ve.maxWidth}px`
          } : null
        }, ve.content));
        const Re = Ye ? {
          onMouseenter(Se) {
            t.triggerTitleTipEvent(Se, Ie);
          },
          onMouseleave: t.handleTitleTipLeaveEvent
        } : {};
        return d("div", {
          class: [
            "vxe-form--item",
            E.id,
            fe ? `vxe-col--${fe} is--span` : "",
            oe ? l.isFunction(oe) ? oe(Ie) : oe : "",
            ke ? l.isFunction(ke) ? ke(Ie) : ke : "",
            {
              "is--title": P,
              "is--colon": se,
              "is--vertical": me,
              "is--asterisk": he,
              "is--required": Ne,
              "is--hidden": F && T,
              "is--active": ja(t, E),
              "is--error": we
            }
          ],
          style: l.isFunction(Ee) ? Ee(Ie) : Ee
        }, [
          d("div", {
            class: "vxe-form--item-inner"
          }, [
            L !== !1 && (P || re) ? d("div", Object.assign({ class: [
              "vxe-form--item-title",
              te ? `align--${te}` : "",
              je ? "is--ellipsis" : "",
              ce ? l.isFunction(ce) ? ce(Ie) : ce : "",
              q ? l.isFunction(q) ? q(Ie) : q : ""
            ], style: Object.assign({}, l.isFunction(k) ? k(Ie) : k, l.isFunction(U) ? U(Ie) : U, ee ? {
              width: isNaN(ee) ? ee : `${ee}px`
            } : null), title: Ge ? qt(P) : null }, Re), mh(t, E)) : null,
            d("div", {
              class: [
                "vxe-form--item-content",
                De ? `align--${De}` : "",
                Le ? l.isFunction(Le) ? Le(Ie) : Le : "",
                I ? l.isFunction(I) ? I(Ie) : I : ""
              ],
              style: Object.assign({}, l.isFunction(Ae) ? Ae(Ie) : Ae, l.isFunction(V) ? V(Ie) : V)
            }, ae)
          ])
        ]);
      }
    };
  },
  render() {
    return this.renderVN();
  }
});
class bl {
  constructor(t) {
    Object.assign(this, {
      $options: t,
      required: t.required,
      min: t.min,
      max: t.min,
      type: t.type,
      pattern: t.pattern,
      validator: t.validator,
      trigger: t.trigger,
      maxWidth: t.maxWidth
    });
  }
  get content() {
    return qt(this.$options.content || this.$options.message);
  }
  get message() {
    return this.content;
  }
}
const Ed = (e, t) => {
  const { type: n, min: o, max: s, pattern: u } = e, c = n === "number", h = c ? l.toNumber(t) : l.getSize(t);
  return !!(c && isNaN(t) || !l.eqNull(o) && h < l.toNumber(o) || !l.eqNull(s) && h > l.toNumber(s) || u && !(l.isRegExp(u) ? u : new RegExp(u)).test(t));
};
function yN(e, t) {
  return l.isArray(e) && (t = []), t;
}
const Ml = Mt({
  name: "VxeForm",
  props: {
    collapseStatus: { type: Boolean, default: !0 },
    loading: Boolean,
    data: Object,
    size: { type: String, default: () => v.form.size || v.size },
    span: { type: [String, Number], default: () => v.form.span },
    align: { type: String, default: () => v.form.align },
    titleAlign: { type: String, default: () => v.form.titleAlign },
    titleWidth: { type: [String, Number], default: () => v.form.titleWidth },
    titleColon: { type: Boolean, default: () => v.form.titleColon },
    titleAsterisk: { type: Boolean, default: () => v.form.titleAsterisk },
    titleOverflow: { type: [Boolean, String], default: null },
    vertical: {
      type: Boolean,
      default: null
    },
    className: [String, Function],
    readonly: Boolean,
    items: Array,
    rules: Object,
    preventSubmit: { type: Boolean, default: () => v.form.preventSubmit },
    validConfig: Object,
    tooltipConfig: Object,
    customLayout: { type: Boolean, default: () => v.form.customLayout }
  },
  emits: [
    "update:collapseStatus",
    "collapse",
    "toggle-collapse",
    "submit",
    "submit-invalid",
    "reset"
  ],
  setup(e, t) {
    const n = Xe.tooltip, { slots: o, emit: s } = t, u = l.uniqueId(), c = tn(e), h = Gt({
      collapseAll: e.collapseStatus,
      staticItems: [],
      formItems: []
    }), i = Gt({
      tooltipTimeout: null,
      tooltipStore: {
        item: null,
        visible: !1
      }
    }), m = gt("$xegrid", null), p = Ue(), b = Ue();
    let D = {};
    const A = Ce(() => Object.assign({}, v.form.validConfig, e.validConfig)), $ = Ce(() => Object.assign({}, v.tooltip, v.form.tooltipConfig, e.tooltipConfig)), O = {
      refElem: p
    }, B = {
      computeSize: c,
      computeValidOpts: A,
      computeTooltipOpts: $
    }, E = {
      xID: u,
      props: e,
      context: t,
      reactData: h,
      xegrid: m,
      getRefMaps: () => O,
      getComputeMaps: () => B
    }, T = (k, Z) => k && (l.isString(k) && (k = o[k] || null), l.isFunction(k)) ? Ht(k(Z)) : [], y = (k) => (k.length && (process.env.NODE_ENV === "development" && k.forEach((Z) => {
      Z.slots && l.each(Z.slots, (re) => {
        l.isFunction(re) || o[re] || ot("vxe.error.notSlot", [re]);
      });
    }), h.staticItems = l.mapTree(k, (Z) => za(E, Z), { children: "children" })), ne()), w = () => {
      const k = [];
      return l.eachTree(h.formItems, (Z) => {
        k.push(Z);
      }, { children: "children" }), k;
    }, P = (k) => {
      const Z = l.findTree(h.formItems, (re) => re.field === k, { children: "children" });
      return Z ? Z.item : null;
    }, j = () => h.collapseAll, F = () => {
      const k = !j();
      return h.collapseAll = k, s("update:collapseStatus", k), ne();
    }, N = (k) => {
      F();
      const Z = j();
      D.dispatchEvent("toggle-collapse", { status: Z, collapse: Z, data: e.data }, k), D.dispatchEvent("collapse", { status: Z, collapse: Z, data: e.data }, k);
    }, W = (k) => {
      if (k) {
        let Z = k;
        l.isArray(k) || (Z = [k]), Z.forEach((re) => {
          if (re) {
            const fe = xd(E, re);
            fe && (fe.showError = !1);
          }
        });
      } else
        w().forEach((Z) => {
          Z.showError = !1;
        });
      return ne();
    }, de = () => {
      const { data: k } = e, Z = w();
      return k && Z.forEach((re) => {
        const { field: fe, resetValue: De, itemRender: te } = re;
        if (mt(te)) {
          const ee = Xe.renderer.get(te.name);
          ee && ee.itemResetMethod ? ee.itemResetMethod({ data: k, field: fe, property: fe, item: re, $form: E, $grid: E.xegrid }) : fe && l.set(k, fe, De === null ? yN(l.get(k, fe), void 0) : l.clone(De, !0));
        }
      }), W();
    }, we = (k) => {
      k.preventDefault(), de(), D.dispatchEvent("reset", { data: e.data }, k);
    }, ve = (k) => {
      const Z = p.value;
      for (let re = 0; re < k.length; re++) {
        const fe = k[re], De = P(fe);
        if (De && mt(De.itemRender)) {
          const { itemRender: te } = De, ee = Xe.renderer.get(te.name);
          let se = null;
          if (re || $p(Z.querySelector(`.${De.id}`)), te.autofocus && (se = Z.querySelector(`.${De.id} ${te.autofocus}`)), !se && ee && ee.autofocus && (se = Z.querySelector(`.${De.id} ${ee.autofocus}`)), se) {
            se.focus();
            break;
          }
        }
      }
    }, oe = (k, Z, re) => {
      const { data: fe, rules: De } = e, te = {};
      return l.isArray(Z) || (Z = [Z]), Promise.all(Z.map((ee) => {
        const se = [], he = [];
        if (ee && De) {
          const xe = l.get(De, ee);
          if (xe) {
            const me = l.isUndefined(re) ? l.get(fe, ee) : re;
            xe.forEach((Ve) => {
              const { type: Ge, trigger: Ye, required: je, validator: Ie } = Ve;
              if (k === "all" || !Ye || k === Ye)
                if (Ie) {
                  const Ne = {
                    itemValue: me,
                    rule: Ve,
                    rules: xe,
                    data: fe,
                    field: ee,
                    property: ee,
                    $form: E
                  };
                  let Y;
                  if (l.isString(Ie)) {
                    const ae = Xe.validators.get(Ie);
                    ae ? ae.itemValidatorMethod ? Y = ae.itemValidatorMethod(Ne) : process.env.NODE_ENV === "development" && lt("vxe.error.notValidators", [Ie]) : process.env.NODE_ENV === "development" && ot("vxe.error.notValidators", [Ie]);
                  } else
                    Y = Ie(Ne);
                  Y && (l.isError(Y) ? se.push(new bl({ type: "custom", trigger: Ye, content: Y.message, rule: new bl(Ve) })) : Y.catch && he.push(Y.catch((ae) => {
                    se.push(new bl({ type: "custom", trigger: Ye, content: ae ? ae.message : Ve.content || Ve.message, rule: new bl(Ve) }));
                  })));
                } else {
                  const Ne = Ge === "array", Y = l.isArray(me);
                  let ae = !0;
                  Ne || Y ? ae = !Y || !me.length : l.isString(me) ? ae = eo(me.trim()) : ae = eo(me), (je ? ae || Ed(Ve, me) : !ae && Ed(Ve, me)) && se.push(new bl(Ve));
                }
            });
          }
        }
        return Promise.all(he).then(() => {
          se.length && (te[ee] = se.map((xe) => ({
            $form: E,
            rule: xe,
            data: fe,
            field: ee,
            property: ee
          })));
        });
      })).then(() => {
        if (!l.isEmpty(te))
          return Promise.reject(te);
      });
    };
    let ie;
    const le = (k, Z, re) => {
      const { data: fe, rules: De } = e, te = A.value, ee = {}, se = [], he = [];
      return clearTimeout(ie), fe && De ? (k.forEach((xe) => {
        const { field: me } = xe;
        me && !xN(E, xe) && ja(E, xe) && he.push(oe(Z || "all", me).then(() => {
          xe.errRule = null;
        }).catch((Ve) => {
          const Ge = Ve[me];
          return ee[me] || (ee[me] = []), ee[me].push(Ge), se.push(me), xe.errRule = Ge[0].rule, Promise.reject(Ge);
        }));
      }), Promise.all(he).then(() => {
        re && re();
      }).catch(() => new Promise((xe) => {
        ie = window.setTimeout(() => {
          k.forEach((me) => {
            me.errRule && (me.showError = !0);
          });
        }, 20), te.autoPos !== !1 && ne(() => {
          ve(se);
        }), re ? (re(ee), xe()) : xe(ee);
      }))) : (re && re(), Promise.resolve());
    }, Q = (k) => (W(), le(w(), "", k)), L = (k, Z) => {
      let re = [];
      return l.isArray(k) ? re = k : re = [k], le(re.map((fe) => xd(E, fe)), "", Z);
    }, I = (k) => {
      k.preventDefault(), e.preventSubmit || (W(), le(w()).then((Z) => {
        Z ? D.dispatchEvent("submit-invalid", { data: e.data, errMap: Z }, k) : D.dispatchEvent("submit", { data: e.data }, k);
      }));
    }, V = () => {
      const { tooltipStore: k } = i, Z = b.value;
      return k.visible && (Object.assign(k, {
        item: null,
        visible: !1
      }), Z && Z.close()), ne();
    }, q = (k, Z) => {
      const { item: re } = Z, { tooltipStore: fe } = i, De = b.value, te = k.currentTarget.children[0], ee = (te.textContent || "").trim(), se = te.scrollWidth > te.clientWidth;
      clearTimeout(i.tooltipTimeout), fe.item !== re && V(), ee && se && (Object.assign(fe, {
        item: re,
        visible: !0
      }), De && De.open(te, ee));
    }, U = () => {
      const k = $.value;
      let Z = b.value;
      Z && Z.setActived(!1), k.enterable ? i.tooltipTimeout = setTimeout(() => {
        Z = b.value, Z && !Z.isActived() && V();
      }, k.leaveDelay) : V();
    }, pe = (k, Z, re) => Z ? oe(k ? ["blur"].includes(k.type) ? "blur" : "change" : "all", Z, re).then(() => {
      W(Z);
    }).catch((fe) => {
      const De = fe[Z], te = P(Z);
      De && te && (te.showError = !0, te.errRule = De[0].rule);
    }) : ne();
    D = {
      dispatchEvent(k, Z, re) {
        s(k, Object.assign({ $form: E, $grid: m, $event: re }, Z));
      },
      reset: de,
      validate: Q,
      validateField: L,
      clearValidate: W,
      updateStatus: (k, Z) => {
        const { field: re } = k;
        return pe(new Event("change"), re, Z);
      },
      toggleCollapse: F,
      getItems: w,
      getItemByField: P,
      closeTooltip: V
    }, Object.assign(E, D, {
      callSlot: T,
      triggerItemEvent: pe,
      toggleCollapseEvent: N,
      triggerTitleTipEvent: q,
      handleTitleTipLeaveEvent: U
    });
    const Le = Ue(0);
    dt(() => h.staticItems.length, () => {
      Le.value++;
    }), dt(() => h.staticItems, () => {
      Le.value++;
    }), dt(Le, () => {
      h.formItems = h.staticItems;
    });
    const Ae = Ue(0);
    dt(() => e.items ? e.items.length : -1, () => {
      Ae.value++;
    }), dt(() => e.items, () => {
      Ae.value++;
    }), dt(Ae, () => {
      y(e.items || []);
    }), dt(() => e.collapseStatus, (k) => {
      h.collapseAll = !!k;
    }), gn(() => {
      ne(() => {
        process.env.NODE_ENV === "development" && e.customLayout && e.items && ot("vxe.error.errConflicts", ["custom-layout", "items"]), y(e.items || []);
      });
    });
    const ce = () => {
      const { loading: k, className: Z, data: re, customLayout: fe } = e, { formItems: De } = h, te = c.value, ee = $.value, se = o.default;
      return d("form", {
        ref: p,
        class: ["vxe-form", Z ? l.isFunction(Z) ? Z({ items: De, data: re, $form: E }) : Z : "", {
          [`size--${te}`]: te,
          "is--loading": k
        }],
        onSubmit: I,
        onReset: we
      }, [
        d("div", {
          class: "vxe-form--wrapper vxe-row"
        }, fe ? se ? se({}) : [] : De.map((he, xe) => d(gh, {
          key: xe,
          itemConfig: he
        }))),
        d("div", {
          class: "vxe-form-slots",
          ref: "hideItem"
        }, fe ? [] : se ? se({}) : []),
        /**
         * 加载中
         */
        d(qs, {
          class: "vxe-form--loading",
          modelValue: k
        }),
        /**
         * 工具提示
         */
        n ? d(Gr, Object.assign({ ref: b }, ee)) : Rt()
      ]);
    };
    return E.renderVN = ce, Yt("$xeform", E), Yt("$xeformgather", null), Yt("$xeformitem", null), Yt("$xeformiteminfo", null), E;
  },
  render() {
    return this.renderVN();
  }
}), Xs = Object.assign(Ml, {
  install(e) {
    e.component(Ml.name, Ml);
  }
}), EN = Xs;
Nt.component(Ml.name, Ml);
const wN = Object.keys(Ha), wd = ["clearAll", "syncData", "updateData", "loadData", "reloadData", "reloadRow", "loadColumn", "reloadColumn", "getRowNode", "getColumnNode", "getRowIndex", "getVTRowIndex", "getVMRowIndex", "getColumnIndex", "getVTColumnIndex", "getVMColumnIndex", "createData", "createRow", "revertData", "clearData", "isInsertByRow", "isUpdateByRow", "getColumns", "getColumnById", "getColumnByField", "getTableColumn", "getData", "getCheckboxRecords", "getParentRow", "getRowSeq", "getRowById", "getRowid", "getTableData", "setColumnFixed", "clearColumnFixed", "setColumnWidth", "getColumnWidth", "hideColumn", "showColumn", "resetColumn", "refreshColumn", "refreshScroll", "recalculate", "closeTooltip", "isAllCheckboxChecked", "isAllCheckboxIndeterminate", "getCheckboxIndeterminateRecords", "setCheckboxRow", "isCheckedByCheckboxRow", "isIndeterminateByCheckboxRow", "toggleCheckboxRow", "setAllCheckboxRow", "getRadioReserveRecord", "clearRadioReserve", "getCheckboxReserveRecords", "clearCheckboxReserve", "toggleAllCheckboxRow", "clearCheckboxRow", "setCurrentRow", "isCheckedByRadioRow", "setRadioRow", "clearCurrentRow", "clearRadioRow", "getCurrentRecord", "getRadioRecord", "getCurrentColumn", "setCurrentColumn", "clearCurrentColumn", "setPendingRow", "togglePendingRow", "getPendingRecords", "clearPendingRow", "sort", "clearSort", "isSort", "getSortColumns", "closeFilter", "isFilter", "isActiveFilterByColumn", "isRowExpandLoaded", "clearRowExpandLoaded", "reloadRowExpand", "reloadRowExpand", "toggleRowExpand", "setAllRowExpand", "setRowExpand", "isExpandByRow", "isRowExpandByRow", "clearRowExpand", "clearRowExpandReserve", "getRowExpandRecords", "getTreeExpandRecords", "isTreeExpandLoaded", "clearTreeExpandLoaded", "reloadTreeExpand", "reloadTreeChilds", "toggleTreeExpand", "setAllTreeExpand", "setTreeExpand", "isTreeExpandByRow", "clearTreeExpand", "clearTreeExpandReserve", "getScroll", "scrollTo", "scrollToRow", "scrollToColumn", "clearScroll", "updateFooter", "updateStatus", "setMergeCells", "removeInsertRow", "removeMergeCells", "getMergeCells", "clearMergeCells", "setMergeFooterItems", "removeMergeFooterItems", "getMergeFooterItems", "clearMergeFooterItems", "openTooltip", "focus", "blur", "connect"], ON = [
  ...Wa,
  "page-change",
  "form-submit",
  "form-submit-invalid",
  "form-reset",
  "form-collapse",
  "form-toggle-collapse",
  "proxy-query",
  "proxy-delete",
  "proxy-save",
  "toolbar-button-click",
  "toolbar-tool-click",
  "zoom"
], $l = Mt({
  name: "VxeGrid",
  props: Object.assign(Object.assign({}, Ha), { layouts: Array, columns: Array, pagerConfig: Object, proxyConfig: Object, toolbarConfig: Object, formConfig: Object, zoomConfig: Object, size: { type: String, default: () => v.grid.size || v.size } }),
  emits: ON,
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = Od(), c = tn(e), h = Gt({
      tableLoading: !1,
      proxyInited: !1,
      isZMax: !1,
      tableData: [],
      filterData: [],
      formData: {},
      sortData: [],
      tZindex: 0,
      tablePage: {
        total: 0,
        pageSize: v.pager.pageSize || 10,
        currentPage: 1
      }
    }), i = Ue(), m = Ue(), p = Ue(), b = Ue(), D = Ue(), A = Ue(), $ = Ue(), O = Ue(), B = Ue(), E = Ue(), T = (Y) => {
      const ae = {};
      return Y.forEach((Re) => {
        ae[Re] = (...Se) => {
          const _ = m.value;
          if (_ && _[Re])
            return _[Re](...Se);
        };
      }), ae;
    }, y = T(wd);
    wd.forEach((Y) => {
      y[Y] = (...ae) => {
        const Re = m.value;
        if (Re && Re[Y])
          return Re && Re[Y](...ae);
      };
    });
    const w = Ce(() => Object.assign({}, v.grid.proxyConfig, e.proxyConfig)), P = Ce(() => w.value.message !== !1), j = Ce(() => Object.assign({}, v.grid.pagerConfig, e.pagerConfig)), F = Ce(() => Object.assign({}, v.grid.formConfig, e.formConfig)), N = Ce(() => Object.assign({}, v.grid.toolbarConfig, e.toolbarConfig)), W = Ce(() => Object.assign({}, v.grid.zoomConfig, e.zoomConfig)), de = Ce(() => h.isZMax ? { zIndex: h.tZindex } : null), we = Ce(() => {
      const Y = {}, ae = e;
      return wN.forEach((Re) => {
        Y[Re] = ae[Re];
      }), Y;
    }), ve = {
      refElem: i,
      refTable: m,
      refForm: p,
      refToolbar: b,
      refPager: D
    }, oe = {
      computeProxyOpts: w,
      computePagerOpts: j,
      computeFormOpts: F,
      computeToolbarOpts: N,
      computeZoomOpts: W
    }, ie = {
      xID: s,
      props: e,
      context: t,
      instance: u,
      reactData: h,
      getRefMaps: () => ve,
      getComputeMaps: () => oe
    };
    let le = {};
    const Q = Ce(() => {
      const { seqConfig: Y, pagerConfig: ae, loading: Re, editConfig: Se, proxyConfig: _ } = e, { isZMax: G, tableLoading: be, tablePage: _e, tableData: Be } = h, qe = we.value, et = w.value, Qe = j.value, tt = Object.assign({}, qe);
      return G && (qe.maxHeight ? tt.maxHeight = "auto" : tt.height = "auto"), _ && mt(et) && (tt.loading = Re || be, tt.data = Be, ae && et.seq && mt(Qe) && (tt.seqConfig = Object.assign({}, Y, { startIndex: (_e.currentPage - 1) * _e.pageSize }))), Se && (tt.editConfig = Object.assign({}, Se)), tt;
    }), L = () => {
      const Y = N.value;
      e.toolbarConfig && mt(Y) && ne(() => {
        const ae = m.value, Re = b.value;
        ae && Re && ae.connect(Re);
      });
    }, I = () => {
      const { tablePage: Y } = h, { pagerConfig: ae } = e, Re = j.value, { currentPage: Se, pageSize: _ } = Re;
      ae && mt(Re) && (Se && (Y.currentPage = Se), _ && (Y.pageSize = _));
    }, V = (Y) => {
      const ae = P.value, Re = m.value, Se = Re.getCheckboxRecords();
      Se.length ? (Re.togglePendingRow(Se), y.clearCheckboxRow()) : ae && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: Y, content: v.i18n("vxe.grid.selectOneRecord"), status: "warning" }));
    }, q = (Y, ae) => {
      const Re = w.value, _ = (Re.response || Re.props || {}).message;
      let G;
      return Y && _ && (G = l.isFunction(_) ? _({ data: Y, $grid: ie }) : l.get(Y, _)), G || v.i18n(ae);
    }, U = (Y, ae, Re) => {
      const Se = P.value, _ = y.getCheckboxRecords();
      if (Se) {
        if (_.length)
          return Xe.modal.confirm({ id: `cfm_${Y}`, content: v.i18n(ae), escClosable: !0 }).then((G) => {
            if (G === "confirm")
              return Re();
          });
        process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: `msg_${Y}`, content: v.i18n("vxe.grid.selectOneRecord"), status: "warning" });
      } else
        _.length && Re();
      return Promise.resolve();
    }, pe = (Y) => {
      const { proxyConfig: ae } = e, { tablePage: Re } = h, { currentPage: Se, pageSize: _ } = Y, G = w.value;
      Re.currentPage = Se, Re.pageSize = _, le.dispatchEvent("page-change", Y), ae && mt(G) && le.commitProxy("query").then((be) => {
        le.dispatchEvent("proxy-query", be, Y.$event);
      });
    }, ke = (Y) => {
      const ae = m.value, { proxyConfig: Re } = e, { computeSortOpts: Se } = ae.getComputeMaps(), _ = w.value;
      Se.value.remote && (h.sortData = Y.sortList, Re && mt(_) && (h.tablePage.currentPage = 1, le.commitProxy("query").then((be) => {
        le.dispatchEvent("proxy-query", be, Y.$event);
      }))), le.dispatchEvent("sort-change", Y);
    }, Ee = (Y) => {
      const ae = m.value, { proxyConfig: Re } = e, { computeFilterOpts: Se } = ae.getComputeMaps(), _ = w.value;
      Se.value.remote && (h.filterData = Y.filterList, Re && mt(_) && (h.tablePage.currentPage = 1, le.commitProxy("query").then((be) => {
        le.dispatchEvent("proxy-query", be, Y.$event);
      }))), le.dispatchEvent("filter-change", Y);
    }, Le = (Y) => {
      const { proxyConfig: ae } = e, Re = w.value;
      ae && mt(Re) && le.commitProxy("reload").then((Se) => {
        le.dispatchEvent("proxy-query", Object.assign(Object.assign({}, Se), { isReload: !0 }), Y.$event);
      }), le.dispatchEvent("form-submit", Y);
    }, Ae = (Y) => {
      const { proxyConfig: ae } = e, Re = w.value;
      ae && mt(Re) && le.commitProxy("reload").then((Se) => {
        le.dispatchEvent("proxy-query", Object.assign(Object.assign({}, Se), { isReload: !0 }), Y.$event);
      }), le.dispatchEvent("form-reset", Y);
    }, ce = (Y) => {
      le.dispatchEvent("form-submit-invalid", Y);
    }, k = (Y) => {
      ne(() => y.recalculate(!0)), le.dispatchEvent("form-toggle-collapse", Y), le.dispatchEvent("form-collapse", Y);
    }, Z = (Y) => {
      const { isZMax: ae } = h;
      return (Y ? !ae : ae) && (h.isZMax = !ae, h.tZindex < ko() && (h.tZindex = ho())), ne().then(() => y.recalculate(!0)).then(() => h.isZMax);
    }, re = (Y, ae) => {
      const Re = Y[ae];
      if (Re)
        if (l.isString(Re)) {
          if (n[Re])
            return n[Re];
          process.env.NODE_ENV === "development" && ot("vxe.error.notSlot", [Re]);
        } else
          return Re;
      return null;
    }, fe = () => {
      const { formConfig: Y, proxyConfig: ae } = e, { formData: Re } = h, Se = w.value, _ = F.value, G = [];
      if (Y && mt(_) || n.form) {
        let be = [];
        if (n.form)
          be = n.form({ $grid: ie });
        else if (_.items) {
          const _e = {};
          if (!_.inited) {
            _.inited = !0;
            const Be = Se.beforeItem;
            Se && Be && _.items.forEach((qe) => {
              Be({ $grid: ie, item: qe });
            });
          }
          _.items.forEach((Be) => {
            l.each(Be.slots, (qe) => {
              l.isFunction(qe) || n[qe] && (_e[qe] = n[qe]);
            });
          }), be.push(d(Xs, Object.assign(Object.assign({ ref: p }, Object.assign({}, _, {
            data: ae && mt(Se) && Se.form ? Re : _.data
          })), { onSubmit: Le, onReset: Ae, onSubmitInvalid: ce, onCollapse: k }), _e));
        }
        G.push(d("div", {
          ref: A,
          key: "form",
          class: "vxe-grid--form-wrapper"
        }, be));
      }
      return G;
    }, De = () => {
      const { toolbarConfig: Y } = e, ae = N.value, Re = [];
      if (Y && mt(ae) || n.toolbar) {
        let Se = [];
        if (n.toolbar)
          Se = n.toolbar({ $grid: ie });
        else {
          const _ = ae.slots;
          let G, be;
          const _e = {};
          _ && (G = re(_, "buttons"), be = re(_, "tools"), G && (_e.buttons = G), be && (_e.tools = be)), Se.push(d(Ks, Object.assign({ ref: b }, ae), _e));
        }
        Re.push(d("div", {
          ref: $,
          key: "toolbar",
          class: "vxe-grid--toolbar-wrapper"
        }, Se));
      }
      return Re;
    }, te = () => n.top ? [
      d("div", {
        ref: O,
        key: "top",
        class: "vxe-grid--top-wrapper"
      }, n.top({ $grid: ie }))
    ] : [], ee = ["Form", "Toolbar", "Top", "Table", "Bottom", "Pager"], se = () => {
      const { layouts: Y } = e, ae = [];
      return (Y && Y.length ? Y : v.grid.layouts || ee).forEach((Se) => {
        switch (Se) {
          case "Form":
            ae.push(fe());
            break;
          case "Toolbar":
            ae.push(De());
            break;
          case "Top":
            ae.push(te());
            break;
          case "Table":
            ae.push(xe());
            break;
          case "Bottom":
            ae.push(me());
            break;
          case "Pager":
            ae.push(Ve());
            break;
          default:
            process.env.NODE_ENV === "development" && ot("vxe.error.notProp", [`layouts -> ${Se}`]);
            break;
        }
      }), ae;
    }, he = {};
    Wa.forEach((Y) => {
      const ae = l.camelCase(`on-${Y}`);
      he[ae] = (...Re) => o(Y, ...Re);
    });
    const xe = () => {
      const { proxyConfig: Y } = e, ae = Q.value, Re = w.value, Se = Object.assign({}, he), _ = n.empty, G = n.loading;
      Y && mt(Re) && (Re.sort && (Se.onSortChange = ke), Re.filter && (Se.onFilterChange = Ee));
      const be = {};
      return _ && (be.empty = () => _({})), G && (be.loading = () => G({})), [
        d(Gs, Object.assign(Object.assign({ ref: m, key: "table" }, ae), Se), be)
      ];
    }, me = () => n.bottom ? [
      d("div", {
        ref: B,
        key: "bottom",
        class: "vxe-grid--bottom-wrapper"
      }, n.bottom({ $grid: ie }))
    ] : [], Ve = () => {
      const { proxyConfig: Y, pagerConfig: ae } = e, Re = w.value, Se = j.value, _ = [];
      if (ae && mt(Se) || n.pager) {
        let G = [];
        if (n.pager)
          G = n.pager({ $grid: ie });
        else {
          const be = Se.slots, _e = {};
          let Be, qe;
          be && (Be = re(be, "left"), qe = re(be, "right"), Be && (_e.left = Be), qe && (_e.right = qe)), G.push(d(Us, Object.assign(Object.assign(Object.assign({ ref: D }, Se), Y && mt(Re) ? h.tablePage : {}), { onPageChange: pe }), _e));
        }
        _.push(d("div", {
          ref: E,
          key: "pager",
          class: "vxe-grid--pager-wrapper"
        }, G));
      }
      return _;
    }, Ge = () => {
      const { proxyConfig: Y, formConfig: ae } = e, { proxyInited: Re } = h, Se = w.value, _ = F.value;
      if (Y && mt(Se)) {
        if (ae && mt(_) && Se.form && _.items) {
          const G = {};
          _.items.forEach((be) => {
            const { field: _e, itemRender: Be } = be;
            if (_e) {
              let qe = null;
              if (Be) {
                const { defaultValue: et } = Be;
                l.isFunction(et) ? qe = et({ item: be }) : l.isUndefined(et) || (qe = et);
              }
              G[_e] = qe;
            }
          }), h.formData = G;
        }
        Re || (h.proxyInited = !0, Se.autoLoad !== !1 && ne().then(() => le.commitProxy("_init")).then((G) => {
          le.dispatchEvent("proxy-query", Object.assign(Object.assign({}, G), { isInited: !0 }), new Event("init"));
        }));
      }
    };
    le = {
      dispatchEvent(Y, ae, Re) {
        o(Y, Object.assign({ $grid: ie, $event: Re }, ae));
      },
      /**
       * 提交指令，支持 code 或 button
       * @param {String/Object} code 字符串或对象
       */
      commitProxy(Y, ...ae) {
        const { toolbarConfig: Re, pagerConfig: Se, editRules: _, validConfig: G } = e, { tablePage: be, formData: _e } = h, Be = P.value, qe = w.value, et = j.value, Qe = N.value, { beforeQuery: tt, afterQuery: Ze, beforeDelete: st, afterDelete: wt, beforeSave: M, afterSave: St, ajax: xt = {} } = qe, ht = qe.response || qe.props || {}, it = m.value;
        let Dt = null, Ct = null;
        if (l.isString(Y)) {
          const { buttons: Et } = Qe, $t = Re && mt(Qe) && Et ? l.findTree(Et, (Lt) => Lt.code === Y, { children: "dropdowns" }) : null;
          Dt = $t ? $t.item : null, Ct = Y;
        } else
          Dt = Y, Ct = Dt.code;
        const Ft = Dt ? Dt.params : null;
        switch (Ct) {
          case "insert":
            return it.insert({});
          case "insert_edit":
            return it.insert({}).then(({ row: Et }) => it.setEditRow(Et));
          case "insert_actived":
            return it.insert({}).then(({ row: Et }) => it.setEditRow(Et));
          case "mark_cancel":
            V(Ct);
            break;
          case "remove":
            return U(Ct, "vxe.grid.removeSelectRecord", () => it.removeCheckboxRow());
          case "import":
            it.importData(Ft);
            break;
          case "open_import":
            it.openImport(Ft);
            break;
          case "export":
            it.exportData(Ft);
            break;
          case "open_export":
            it.openExport(Ft);
            break;
          case "reset_custom":
            return it.resetColumn(!0);
          case "_init":
          case "reload":
          case "query": {
            const Et = xt.query;
            if (Et) {
              const $t = Ct === "_init", Lt = Ct === "reload";
              let zt = [], Qt = [], Ut = {};
              if (Se && (($t || Lt) && (be.currentPage = 1), mt(et) && (Ut = Object.assign({}, be))), $t) {
                const { computeSortOpts: Vt } = it.getComputeMaps();
                let _t = Vt.value.defaultSort;
                _t && (l.isArray(_t) || (_t = [_t]), zt = _t.map((Zt) => ({
                  field: Zt.field,
                  property: Zt.field,
                  order: Zt.order
                }))), Qt = it.getCheckedFilters();
              } else
                Lt ? it.clearAll() : (zt = it.getSortColumns(), Qt = it.getCheckedFilters());
              const Kt = {
                code: Ct,
                button: Dt,
                isInited: $t,
                isReload: Lt,
                $grid: ie,
                page: Ut,
                sort: zt.length ? zt[0] : {},
                sorts: zt,
                filters: Qt,
                form: _e,
                options: Et
              };
              h.sortData = zt, h.filterData = Qt, h.tableLoading = !0;
              const nn = [Kt].concat(ae);
              return Promise.resolve((tt || Et)(...nn)).then((Vt) => {
                if (h.tableLoading = !1, Vt)
                  if (Se && mt(et)) {
                    const At = ht.total, _t = (l.isFunction(At) ? At({ data: Vt, $grid: ie }) : l.get(Vt, At || "page.total")) || 0;
                    be.total = l.toNumber(_t);
                    const Zt = ht.result;
                    h.tableData = (l.isFunction(Zt) ? Zt({ data: Vt, $grid: ie }) : l.get(Vt, Zt || "result")) || [];
                    const an = Math.max(Math.ceil(_t / be.pageSize), 1);
                    be.currentPage > an && (be.currentPage = an);
                  } else {
                    const At = ht.list;
                    h.tableData = (At ? l.isFunction(At) ? At({ data: Vt, $grid: ie }) : l.get(Vt, At) : Vt) || [];
                  }
                else
                  h.tableData = [];
                return Ze && Ze(...nn), { status: !0 };
              }).catch(() => (h.tableLoading = !1, { status: !1 }));
            } else
              process.env.NODE_ENV === "development" && ot("vxe.error.notFunc", ["proxy-config.ajax.query"]);
            break;
          }
          case "delete": {
            const Et = xt.delete;
            if (Et) {
              const $t = y.getCheckboxRecords(), Lt = $t.filter((Kt) => !it.isInsertByRow(Kt)), Ut = [{ $grid: ie, code: Ct, button: Dt, body: { removeRecords: Lt }, form: _e, options: Et }].concat(ae);
              if ($t.length)
                return U(Ct, "vxe.grid.deleteSelectRecord", () => Lt.length ? (h.tableLoading = !0, Promise.resolve((st || Et)(...Ut)).then((Kt) => (h.tableLoading = !1, it.setPendingRow(Lt, !1), Be && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: q(Kt, "vxe.grid.delSuccess"), status: "success" })), wt ? wt(...Ut) : le.commitProxy("query"), { status: !0 })).catch((Kt) => (h.tableLoading = !1, Be && (process.env.NODE_ENV === "development" && (Xe.modal.message || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: Ct, content: q(Kt, "vxe.grid.operError"), status: "error" })), { status: !1 }))) : it.remove($t));
              Be && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: Ct, content: v.i18n("vxe.grid.selectOneRecord"), status: "warning" }));
            } else
              process.env.NODE_ENV === "development" && ot("vxe.error.notFunc", ["proxy-config.ajax.delete"]);
            break;
          }
          case "save": {
            const Et = xt.save;
            if (Et) {
              const $t = it.getRecordset(), { insertRecords: Lt, removeRecords: zt, updateRecords: Qt, pendingRecords: Ut } = $t, nn = [{ $grid: ie, code: Ct, button: Dt, body: $t, form: _e, options: Et }].concat(ae);
              Lt.length && ($t.pendingRecords = Ut.filter((At) => it.findRowIndexOf(Lt, At) === -1)), Ut.length && ($t.insertRecords = Lt.filter((At) => it.findRowIndexOf(Ut, At) === -1));
              let Vt = Promise.resolve();
              return _ && (Vt = it[G && G.msgMode === "full" ? "fullValidate" : "validate"]($t.insertRecords.concat(Qt))), Vt.then((At) => {
                if (!At) {
                  if ($t.insertRecords.length || zt.length || Qt.length || $t.pendingRecords.length)
                    return h.tableLoading = !0, Promise.resolve((M || Et)(...nn)).then((_t) => (h.tableLoading = !1, it.clearPendingRow(), Be && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ content: q(_t, "vxe.grid.saveSuccess"), status: "success" })), St ? St(...nn) : le.commitProxy("query"), { status: !0 })).catch((_t) => (h.tableLoading = !1, Be && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: Ct, content: q(_t, "vxe.grid.operError"), status: "error" })), { status: !1 }));
                  Be && (process.env.NODE_ENV === "development" && (Xe.modal || ot("vxe.error.reqModule", ["Modal"])), Xe.modal.message({ id: Ct, content: v.i18n("vxe.grid.dataUnchanged"), status: "info" }));
                }
              });
            } else
              process.env.NODE_ENV === "development" && ot("vxe.error.notFunc", ["proxy-config.ajax.save"]);
            break;
          }
          default: {
            const Et = Xe.commands.get(Ct);
            Et && (Et.commandMethod ? Et.commandMethod({ code: Ct, button: Dt, $grid: ie, $table: it }, ...ae) : process.env.NODE_ENV === "development" && ot("vxe.error.notCommands", [Ct]));
          }
        }
        return ne();
      },
      zoom() {
        return h.isZMax ? le.revert() : le.maximize();
      },
      isMaximized() {
        return h.isZMax;
      },
      maximize() {
        return Z(!0);
      },
      revert() {
        return Z();
      },
      getFormItems(Y) {
        const ae = F.value, { formConfig: Re } = e, { items: Se } = ae, _ = [];
        return l.eachTree(Re && mt(ae) && Se ? Se : [], (G) => {
          _.push(G);
        }, { children: "children" }), l.isUndefined(Y) ? _ : _[Y];
      },
      getProxyInfo() {
        const Y = m.value;
        if (e.proxyConfig) {
          const { sortData: ae } = h;
          return {
            data: h.tableData,
            filter: h.filterData,
            form: h.formData,
            sort: ae.length ? ae[0] : {},
            sorts: ae,
            pager: h.tablePage,
            pendingRecords: Y ? Y.getPendingRecords() : []
          };
        }
        return null;
      }
      // setProxyInfo (options) {
      //   if (props.proxyConfig && options) {
      //     const { pager, form } = options
      //     const proxyOpts = computeProxyOpts.value
      //     if (pager) {
      //       if (pager.currentPage) {
      //         reactData.tablePage.currentPage = Number(pager.currentPage)
      //       }
      //       if (pager.pageSize) {
      //         reactData.tablePage.pageSize = Number(pager.pageSize)
      //       }
      //     }
      //     if (proxyOpts.form && form) {
      //       Object.assign(reactData.formData, form)
      //     }
      //   }
      //   return nextTick()
      // }
    }, process.env.NODE_ENV === "development" && (le.loadColumn = (Y) => {
      const ae = m.value;
      return l.eachTree(Y, (Re) => {
        Re.slots && l.each(Re.slots, (Se) => {
          l.isFunction(Se) || n[Se] || ot("vxe.error.notSlot", [Se]);
        });
      }), ae ? ae.loadColumn(Y) : ne();
    }, le.reloadColumn = (Y) => (y.clearAll(), le.loadColumn(Y)));
    const Ye = {
      extendTableMethods: T,
      callSlot(Y, ae) {
        return Y && (l.isString(Y) && (Y = n[Y] || null), l.isFunction(Y)) ? Ht(Y(ae)) : [];
      },
      /**
       * 获取需要排除的高度
       */
      getExcludeHeight() {
        const { height: Y } = e, { isZMax: ae } = h, Re = i.value, Se = A.value, _ = $.value, G = O.value, be = B.value, _e = E.value;
        return (ae || Y !== "auto" ? 0 : Ki(Re.parentNode)) + Ki(Re) + pl(Se) + pl(_) + pl(G) + pl(be) + pl(_e);
      },
      getParentHeight() {
        const Y = i.value;
        return Y ? (h.isZMax ? qo().visibleHeight : l.toNumber(getComputedStyle(Y.parentNode).height)) - Ye.getExcludeHeight() : 0;
      },
      triggerToolbarCommitEvent(Y, ae) {
        const { code: Re } = Y;
        return le.commitProxy(Y, ae).then((Se) => {
          Re && Se && Se.status && ["query", "reload", "delete", "save"].includes(Re) && le.dispatchEvent(Re === "delete" || Re === "save" ? `proxy-${Re}` : "proxy-query", Object.assign(Object.assign({}, Se), { isReload: Re === "reload" }), ae);
        });
      },
      triggerToolbarBtnEvent(Y, ae) {
        Ye.triggerToolbarCommitEvent(Y, ae), le.dispatchEvent("toolbar-button-click", { code: Y.code, button: Y }, ae);
      },
      triggerToolbarTolEvent(Y, ae) {
        Ye.triggerToolbarCommitEvent(Y, ae), le.dispatchEvent("toolbar-tool-click", { code: Y.code, tool: Y, $event: ae });
      },
      triggerZoomEvent(Y) {
        le.zoom(), le.dispatchEvent("zoom", { type: h.isZMax ? "max" : "revert" }, Y);
      }
    };
    Object.assign(ie, y, le, Ye);
    const je = Ue(0);
    dt(() => e.columns ? e.columns.length : -1, () => {
      je.value++;
    }), dt(() => e.columns, () => {
      je.value++;
    }), dt(je, () => {
      ne(() => ie.loadColumn(e.columns || []));
    }), dt(() => e.toolbarConfig, () => {
      L();
    }), dt(() => e.pagerConfig, () => {
      I();
    }), dt(() => e.proxyConfig, () => {
      Ge();
    });
    const Ie = (Y) => {
      const ae = W.value;
      vt(Y, pt.ESCAPE) && h.isZMax && ae.escRestore !== !1 && Ye.triggerZoomEvent(Y);
    };
    Xe.hooks.forEach((Y) => {
      const { setupGrid: ae } = Y;
      if (ae) {
        const Re = ae(ie);
        Re && l.isObject(Re) && Object.assign(ie, Re);
      }
    }), I(), gn(() => {
      ne(() => {
        const { data: Y, columns: ae, proxyConfig: Re } = e, Se = w.value, _ = F.value;
        mt(Re) && (Y || Se.form && _.data) && ot("vxe.error.errConflicts", ["grid.data", "grid.proxy-config"]), ae && ae.length && ie.loadColumn(ae), L();
      }), bt.on(ie, "keydown", Ie);
    }), fn(() => {
      bt.off(ie, "keydown");
    }), ne(() => {
      Ge();
    });
    const Ne = () => {
      const Y = c.value, ae = de.value;
      return d("div", {
        ref: i,
        class: ["vxe-grid", {
          [`size--${Y}`]: Y,
          "is--animat": !!e.animat,
          "is--round": e.round,
          "is--maximize": h.isZMax,
          "is--loading": e.loading || h.tableLoading
        }],
        style: ae
      }, se());
    };
    return ie.renderVN = Ne, Yt("$xegrid", ie), ie;
  },
  render() {
    return this.renderVN();
  }
}), qa = Object.assign($l, {
  install(e) {
    e.component($l.name, $l);
  }
}), SN = qa;
Nt.component($l.name, $l);
const Ga = Object.assign(Fn, {
  install(e) {
    e.component(Fn.name, Fn);
  }
}), TN = Ga;
Nt.component(Fn.name, Fn);
const kl = Mt({
  name: "VxeCheckboxGroup",
  props: {
    modelValue: Array,
    options: Array,
    optionProps: Object,
    disabled: Boolean,
    max: { type: [String, Number], default: null },
    size: { type: String, default: () => v.checkboxGroup.size || v.size }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = gt("$xeform", null), u = gt("$xeformiteminfo", null), c = l.uniqueId(), h = Ce(() => {
      const { modelValue: E, max: T } = e;
      return T ? (E ? E.length : 0) >= l.toNumber(T) : !1;
    }), i = Ce(() => e.optionProps || {}), m = Ce(() => i.value.label || "label"), p = Ce(() => i.value.value || "value"), b = Ce(() => i.value.disabled || "disabled"), D = {
      computeIsMaximize: h
    }, A = {
      xID: c,
      props: e,
      context: t,
      getComputeMaps: () => D
    };
    tn(e), Object.assign(A, {
      dispatchEvent(E, T, y) {
        o(E, Object.assign({ $checkboxGroup: A, $event: y }, T));
      }
    }, {
      handleChecked(E, T) {
        const { checked: y, label: w } = E, P = e.modelValue || [], j = P.indexOf(w);
        y ? j === -1 && P.push(w) : P.splice(j, 1), o("update:modelValue", P), A.dispatchEvent("change", Object.assign({ checklist: P }, E), T), s && u && s.triggerItemEvent(T, u.itemConfig.field, P);
      }
    });
    const B = () => {
      const { options: E } = e, T = n.default, y = p.value, w = m.value, P = b.value;
      return d("div", {
        class: "vxe-checkbox-group"
      }, T ? T({}) : E ? E.map((j) => d(Fn, {
        label: j[y],
        content: j[w],
        disabled: j[P]
      })) : []);
    };
    return A.renderVN = B, Yt("$xecheckboxgroup", A), B;
  }
}), Ya = Object.assign(kl, {
  install(e) {
    e.component(kl.name, kl);
  }
}), RN = Ya;
Nt.component(kl.name, kl);
const Ua = Object.assign(br, {
  install: function(e) {
    e.component(br.name, br);
  }
}), DN = Ua;
Nt.component(br.name, br);
const Ka = Object.assign(xr, {
  install: function(e) {
    e.component(xr.name, xr);
  }
}), MN = Ka;
Nt.component(xr.name, xr);
const Xa = Object.assign(Wr, {
  install: function(e) {
    e.component(Wr.name, Wr);
  }
}), $N = Xa;
Nt.component(Wr.name, Wr);
const Za = Object.assign(So, {
  install(e) {
    e.component(So.name, So);
  }
}), kN = Za;
Nt.component(So.name, So);
let yo;
const Nl = Mt({
  name: "VxeTextarea",
  props: {
    modelValue: [String, Number],
    className: String,
    immediate: { type: Boolean, default: !0 },
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: () => l.eqNull(v.textarea.placeholder) ? v.i18n("vxe.base.pleaseInput") : v.textarea.placeholder
    },
    maxlength: [String, Number],
    rows: { type: [String, Number], default: 2 },
    cols: { type: [String, Number], default: null },
    showWordCount: Boolean,
    countMethod: Function,
    autosize: [Boolean, Object],
    form: String,
    resize: { type: String, default: () => v.textarea.resize },
    size: { type: String, default: () => v.textarea.size || v.size }
  },
  emits: [
    "update:modelValue",
    "input",
    "keydown",
    "keyup",
    "click",
    "change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const { emit: n } = t, o = gt("$xeform", null), s = gt("$xeformiteminfo", null), u = l.uniqueId(), c = tn(e), h = Gt({
      inputValue: e.modelValue
    }), i = Ue(), m = Ue(), p = {
      refElem: i,
      refTextarea: m
    }, b = {
      xID: u,
      props: e,
      context: t,
      reactData: h,
      getRefMaps: () => p
    };
    let D = {};
    const A = Ce(() => l.getSize(h.inputValue)), $ = Ce(() => {
      const N = A.value;
      return e.maxlength && N > l.toNumber(e.maxlength);
    }), O = Ce(() => Object.assign({ minRows: 1, maxRows: 10 }, v.textarea.autosize, e.autosize)), B = () => {
      const { size: N, autosize: W } = e, { inputValue: de } = h;
      if (W) {
        yo || (yo = document.createElement("div")), yo.parentNode || document.body.appendChild(yo);
        const we = m.value, ve = getComputedStyle(we);
        yo.className = ["vxe-textarea--autosize", N ? `size--${N}` : ""].join(" "), yo.style.width = `${we.clientWidth}px`, yo.style.padding = ve.padding, yo.innerText = ("" + (de || "　")).replace(/\n$/, `
　`);
      }
    }, E = () => {
      e.autosize && ne(() => {
        const N = O.value, { minRows: W, maxRows: de } = N, we = m.value, ve = yo.clientHeight, oe = getComputedStyle(we), ie = l.toNumber(oe.lineHeight), le = l.toNumber(oe.paddingTop), Q = l.toNumber(oe.paddingBottom), L = l.toNumber(oe.borderTopWidth), I = l.toNumber(oe.borderBottomWidth), V = le + Q + L + I, q = (ve - V) / ie, U = q && /[0-9]/.test("" + q) ? q : Math.floor(q) + 1;
        let pe = U;
        U < W ? pe = W : U > de && (pe = de), we.style.height = `${pe * ie + V}px`;
      });
    }, T = (N) => {
      const W = h.inputValue;
      b.dispatchEvent(N.type, { value: W }, N);
    }, y = (N, W) => {
      h.inputValue = N, n("update:modelValue", N), l.toValueString(e.modelValue) !== N && (D.dispatchEvent("change", { value: N }, W), o && s && o.triggerItemEvent(W, s.itemConfig.field, N));
    }, w = (N) => {
      const { immediate: W } = e, we = N.target.value;
      h.inputValue = we, W && y(we, N), b.dispatchEvent("input", { value: we }, N), E();
    }, P = (N) => {
      const { immediate: W } = e;
      W ? T(N) : y(h.inputValue, N);
    }, j = (N) => {
      const { immediate: W } = e, { inputValue: de } = h;
      W || y(de, N), b.dispatchEvent("blur", { value: de }, N);
    };
    D = {
      dispatchEvent(N, W, de) {
        n(N, Object.assign({ $textarea: b, $event: de }, W));
      },
      focus() {
        return m.value.focus(), ne();
      },
      blur() {
        return m.value.blur(), ne();
      }
    }, Object.assign(b, D), dt(() => e.modelValue, (N) => {
      h.inputValue = N, B();
    }), ne(() => {
      const { autosize: N } = e;
      N && (B(), E());
    });
    const F = () => {
      const { className: N, resize: W, placeholder: de, disabled: we, maxlength: ve, autosize: oe, showWordCount: ie, countMethod: le, rows: Q, cols: L } = e, { inputValue: I } = h, V = c.value, q = $.value, U = A.value;
      return d("div", {
        ref: i,
        class: ["vxe-textarea", N, {
          [`size--${V}`]: V,
          "is--autosize": oe,
          "is--count": ie,
          "is--disabled": we,
          "def--rows": !l.eqNull(Q),
          "def--cols": !l.eqNull(L)
        }]
      }, [
        d("textarea", {
          ref: m,
          class: "vxe-textarea--inner",
          value: I,
          name: e.name,
          placeholder: de ? qt(de) : null,
          maxlength: ve,
          readonly: e.readonly,
          disabled: we,
          rows: Q,
          cols: L,
          style: W ? {
            resize: W
          } : null,
          onInput: w,
          onChange: P,
          onKeydown: T,
          onKeyup: T,
          onClick: T,
          onFocus: T,
          onBlur: j
        }),
        ie ? d("span", {
          class: ["vxe-textarea--count", {
            "is--error": q
          }]
        }, le ? `${le({ value: I })}` : `${U}${ve ? `/${ve}` : ""}`) : null
      ]);
    };
    return b.renderVN = F, b;
  },
  render() {
    return this.renderVN();
  }
}), Ja = Object.assign(Nl, {
  install: function(e) {
    e.component(Nl.name, Nl);
  }
}), NN = Ja;
Nt.component(Nl.name, Nl);
const Il = Mt({
  name: "VxeButtonGroup",
  props: {
    options: Array,
    mode: String,
    status: String,
    round: Boolean,
    circle: Boolean,
    className: [String, Function],
    disabled: Boolean,
    size: { type: String, default: () => v.buttonGroup.size || v.size }
  },
  emits: [
    "click"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = {}, c = {
      xID: s,
      props: e,
      context: t,
      getComputeMaps: () => u
    };
    tn(e);
    const h = {
      dispatchEvent(p, b, D) {
        o(p, Object.assign({ $buttonGroup: c, $event: D }, b));
      }
    };
    Object.assign(c, h, {
      handleClick(p, b) {
        const { options: D } = e, { name: A } = p, $ = D ? D.find((O) => O.name === A) : null;
        h.dispatchEvent("click", Object.assign(Object.assign({}, p), { option: $ }), b);
      }
    });
    const m = () => {
      const { className: p, options: b } = e, D = n.default;
      return d("div", {
        class: ["vxe-button-group", p ? l.isFunction(p) ? p({ $buttonGroup: c }) : p : ""]
      }, D ? D({}) : b ? b.map((A, $) => d(En, Object.assign({ key: $ }, A))) : []);
    };
    return c.renderVN = m, Yt("$xebuttongroup", c), m;
  }
}), Qa = Object.assign(Il, {
  install(e) {
    e.component(Il.name, Il);
  }
}), IN = Qa;
Nt.component(Il.name, Il);
function vh(e) {
  return Ck(), new Promise((t) => {
    if (e && e.id && fr.some((n) => n.props.id === e.id))
      t("exist");
    else {
      const n = e.onHide, o = Object.assign(e, {
        key: l.uniqueId(),
        modelValue: !0,
        onHide(s) {
          const u = ws.modals;
          n && n(s), ws.modals = u.filter((c) => c.key !== o.key), t(s.type);
        }
      });
      ws.modals.push(o);
    }
  });
}
function bh(e) {
  return l.find(fr, (t) => t.props.id === e);
}
function FN(e) {
  const t = e ? [bh(e)] : fr, n = [];
  return t.forEach((o) => {
    o && n.push(o.close());
  }), Promise.all(n);
}
function ec(e, t, n, o) {
  let s;
  return l.isObject(t) ? s = t : s = { content: l.toValueString(t), title: n }, vh(Object.assign(Object.assign(Object.assign({}, e), o), s));
}
function PN(e, t, n) {
  return ec({
    type: "alert",
    showFooter: !0
  }, e, t, n);
}
function LN(e, t, n) {
  return ec({
    type: "confirm",
    status: "question",
    showFooter: !0
  }, e, t, n);
}
function VN(e, t) {
  return ec({
    type: "message",
    mask: !1,
    lockView: !1,
    showHeader: !1
  }, e, "", t);
}
const xh = {
  get: bh,
  close: FN,
  open: vh,
  alert: PN,
  confirm: LN,
  message: VN
}, AN = xh, tc = Object.assign(Go, {
  install: function(e) {
    e.component(Go.name, Go), Xe.modal = xh;
  }
}), _N = tc;
Nt.component(Go.name, Go);
const Ch = {
  title: String,
  field: String,
  span: [String, Number],
  align: String,
  titleAlign: {
    type: String,
    default: null
  },
  titleWidth: {
    type: [String, Number],
    default: null
  },
  titleColon: {
    type: Boolean,
    default: null
  },
  titleAsterisk: {
    type: Boolean,
    default: null
  },
  showTitle: {
    type: Boolean,
    default: !0
  },
  vertical: {
    type: Boolean,
    default: null
  },
  className: [String, Function],
  contentClassName: [String, Function],
  contentStyle: [Object, Function],
  titleClassName: [String, Function],
  titleStyle: [Object, Function],
  titleOverflow: {
    type: [Boolean, String],
    default: null
  },
  titlePrefix: Object,
  titleSuffix: Object,
  resetValue: { default: null },
  visibleMethod: Function,
  visible: { type: Boolean, default: null },
  folding: Boolean,
  collapseNode: Boolean,
  itemRender: Object
}, Fl = Mt({
  name: "VxeFormItem",
  props: Ch,
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xeform", {}), s = gt("$xeformgather", null), u = Gt(za(o, e)), c = { formItem: u }, h = { itemConfig: u };
    u.slots = t, Yt("$xeformiteminfo", h), Yt("$xeformitem", c), Yt("$xeformgather", null), fh(e, u), gn(() => {
      ph(o, n.value, u, s);
    }), fn(() => {
      hh(o, u);
    });
    const i = (b, D) => {
      const { props: A, reactData: $ } = b, { data: O, rules: B, titleAlign: E, titleWidth: T, titleColon: y, titleAsterisk: w, titleOverflow: P, vertical: j } = A, { collapseAll: F } = $, { computeValidOpts: N } = b.getComputeMaps(), W = N.value, { slots: de, title: we, visible: ve, folding: oe, field: ie, collapseNode: le, itemRender: Q, showError: L, errRule: I, className: V, titleOverflow: q, vertical: U, showTitle: pe, contentClassName: ke, contentStyle: Ee, titleClassName: Le, titleStyle: Ae } = D, ce = mt(Q) ? Xe.renderer.get(Q.name) : null, k = ce ? ce.itemClassName : "", Z = ce ? ce.itemStyle : null, re = ce ? ce.itemContentClassName : "", fe = ce ? ce.itemContentStyle : null, De = ce ? ce.itemTitleClassName : "", te = ce ? ce.itemTitleStyle : null, ee = de ? de.default : null, se = de ? de.title : null, he = D.span || A.span, xe = D.align || A.align, me = l.eqNull(D.titleAlign) ? E : D.titleAlign, Ve = l.eqNull(D.titleWidth) ? T : D.titleWidth, Ge = l.eqNull(D.titleColon) ? y : D.titleColon, Ye = l.eqNull(D.titleAsterisk) ? w : D.titleAsterisk, je = l.isUndefined(q) || l.isNull(q) ? P : q, Ie = l.isUndefined(U) || l.isNull(U) ? j : U, Ne = je === "ellipsis", Y = je === "title", ae = je === !0 || je === "tooltip", Re = Y || ae || Ne, Se = { data: O, field: ie, property: ie, item: D, $form: b, $grid: b.xegrid };
      let _ = !1;
      if (ve === !1)
        return Rt();
      if (B) {
        const _e = B[ie];
        _e && (_ = _e.some((Be) => Be.required));
      }
      let G = [];
      ee ? G = b.callSlot(ee, Se) : ce && ce.renderItemContent ? G = Ht(ce.renderItemContent(Q, Se)) : ie && (G = [`${l.get(O, ie)}`]), le && G.push(d("div", {
        class: "vxe-form--item-trigger-node",
        onClick: b.toggleCollapseEvent
      }, [
        d("span", {
          class: "vxe-form--item-trigger-text"
        }, F ? v.i18n("vxe.form.unfolding") : v.i18n("vxe.form.folding")),
        d("i", {
          class: ["vxe-form--item-trigger-icon", F ? v.icon.FORM_FOLDING : v.icon.FORM_UNFOLDING]
        })
      ])), I && W.showMessage && G.push(d("div", {
        class: "vxe-form--item-valid",
        style: I.maxWidth ? {
          width: `${I.maxWidth}px`
        } : null
      }, I.message));
      const be = ae ? {
        onMouseenter(_e) {
          b.triggerTitleTipEvent(_e, Se);
        },
        onMouseleave: b.handleTitleTipLeaveEvent
      } : {};
      return d("div", {
        ref: n,
        class: [
          "vxe-form--item",
          D.id,
          he ? `vxe-col--${he} is--span` : "",
          V ? l.isFunction(V) ? V(Se) : V : "",
          k ? l.isFunction(k) ? k(Se) : k : "",
          {
            "is--title": we,
            "is--colon": Ge,
            "is--vertical": Ie,
            "is--asterisk": Ye,
            "is--required": _,
            "is--hidden": oe && F,
            "is--active": ja(b, D),
            "is--error": L
          }
        ],
        style: l.isFunction(Z) ? Z(Se) : Z
      }, [
        d("div", {
          class: "vxe-form--item-inner"
        }, [
          pe !== !1 && (we || se) ? d("div", Object.assign({ class: [
            "vxe-form--item-title",
            me ? `align--${me}` : "",
            Re ? "is--ellipsis" : "",
            De ? l.isFunction(De) ? De(Se) : De : "",
            Le ? l.isFunction(Le) ? Le(Se) : Le : ""
          ], style: Object.assign({}, l.isFunction(te) ? te(Se) : te, l.isFunction(Ae) ? Ae(Se) : Ae, Ve ? {
            width: isNaN(Ve) ? Ve : `${Ve}px`
          } : null), title: Y ? qt(we) : null }, be), mh(b, D)) : null,
          d("div", {
            class: [
              "vxe-form--item-content",
              xe ? `align--${xe}` : "",
              re ? l.isFunction(re) ? re(Se) : re : "",
              ke ? l.isFunction(ke) ? ke(Se) : ke : ""
            ],
            style: Object.assign({}, l.isFunction(fe) ? fe(Se) : fe, l.isFunction(Ee) ? Ee(Se) : Ee)
          }, G)
        ])
      ]);
    };
    return {
      renderVN: () => {
        const b = o ? o.props : null;
        return b && b.customLayout ? i(o, u) : d("div", {
          ref: n
        });
      }
    };
  },
  render() {
    return this.renderVN();
  }
}), nc = Object.assign(Fl, {
  install(e) {
    e.component(Fl.name, Fl);
  }
}), BN = nc;
Nt.component(Fl.name, Fl);
const Pl = Mt({
  name: "VxeFormGather",
  props: Ch,
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xeform", {}), s = gt("$xeformgather", null), u = t.default, c = Gt(za(o, e)), h = { formItem: c }, i = { itemConfig: c };
    return c.children = [], Yt("$xeformiteminfo", i), Yt("$xeformgather", h), Yt("$xeformitem", null), fh(e, c), gn(() => {
      ph(o, n.value, c, s);
    }), fn(() => {
      hh(o, c);
    }), process.env.NODE_ENV === "development" && ne(() => {
      o && o.props.customLayout && ot("vxe.error.errConflicts", ["custom-layout", "<form-gather ...>"]);
    }), {
      renderVN: () => d("div", {
        ref: n
      }, u ? u() : [])
    };
  },
  render() {
    return this.renderVN();
  }
}), oc = Object.assign(Pl, {
  install(e) {
    e.component(Pl.name, Pl);
  }
}), HN = oc;
Nt.component(Pl.name, Pl);
class yh {
  constructor(t, n) {
    Object.assign(this, {
      id: l.uniqueId("option_"),
      value: n.value,
      label: n.label,
      visible: n.visible,
      className: n.className,
      disabled: n.disabled
    });
  }
  update(t, n) {
    this[t] = n;
  }
}
function WN(e) {
  return e instanceof yh;
}
function Eh(e, t) {
  return WN(t) ? t : new yh(e, t);
}
function wh(e, t) {
  Object.keys(e).forEach((n) => {
    dt(() => e[n], (o) => {
      t.update(n, o);
    });
  });
}
function Oh(e, t, n, o) {
  const { reactData: s } = e, { staticOptions: u } = s, c = t.parentNode, h = o ? o.option : null, i = h ? h.options : u;
  c && i && (i.splice(l.arrayIndexOf(c.children, t), 0, n), s.staticOptions = u.slice(0));
}
function Sh(e, t) {
  const { reactData: n } = e, { staticOptions: o } = n, s = l.findTree(o, (u) => u.id === t.id, { children: "options" });
  s && s.items.splice(s.index, 1), n.staticOptions = o.slice(0);
}
const Ll = Mt({
  name: "VxeOptgroup",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xeselect", {}), s = Eh(o, e), u = { option: s };
    return s.options = [], Yt("xeoptgroup", u), wh(e, s), gn(() => {
      Oh(o, n.value, s);
    }), fn(() => {
      Sh(o, s);
    }), () => d("div", {
      ref: n
    }, t.default ? t.default() : []);
  }
}), rc = Object.assign(Ll, {
  install: function(e) {
    e.component(Ll.name, Ll);
  }
}), zN = rc;
Nt.component(Ll.name, Ll);
const Vl = Mt({
  name: "VxeOption",
  props: {
    value: null,
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup(e, { slots: t }) {
    const n = Ue(), o = gt("$xeselect", {}), s = gt("xeoptgroup", null), u = Eh(o, e);
    return u.slots = t, wh(e, u), gn(() => {
      Oh(o, n.value, u, s);
    }), fn(() => {
      Sh(o, u);
    }), () => d("div", {
      ref: n
    });
  }
}), lc = Object.assign(Vl, {
  install: function(e) {
    e.component(Vl.name, Vl);
  }
}), jN = lc;
Nt.component(Vl.name, Vl);
const Al = Mt({
  name: "VxeSwitch",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    size: { type: String, default: () => v.switch.size || v.size },
    openLabel: String,
    closeLabel: String,
    openValue: { type: [String, Number, Boolean], default: !0 },
    closeValue: { type: [String, Number, Boolean], default: !1 },
    openIcon: String,
    closeIcon: String
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const { emit: n } = t, o = gt("$xeform", null), s = gt("$xeformiteminfo", null), u = l.uniqueId(), c = tn(e), h = Gt({
      isActivated: !1,
      hasAnimat: !1,
      offsetLeft: 0
    }), i = {
      xID: u,
      props: e,
      context: t,
      reactData: h
    }, m = Ue();
    let p = {};
    const b = Ce(() => qt(e.openLabel)), D = Ce(() => qt(e.closeLabel)), A = Ce(() => e.modelValue === e.openValue);
    let $;
    const O = (y) => {
      if (!e.disabled) {
        const w = A.value;
        clearTimeout($);
        const P = w ? e.closeValue : e.openValue;
        h.hasAnimat = !0, n("update:modelValue", P), p.dispatchEvent("change", { value: P }, y), o && s && o.triggerItemEvent(y, s.itemConfig.field, P), $ = setTimeout(() => {
          h.hasAnimat = !1;
        }, 400);
      }
    }, B = (y) => {
      h.isActivated = !0, p.dispatchEvent("focus", { value: e.modelValue }, y);
    }, E = (y) => {
      h.isActivated = !1, p.dispatchEvent("blur", { value: e.modelValue }, y);
    };
    p = {
      dispatchEvent(y, w, P) {
        n(y, Object.assign({ $switch: i, $event: P }, w));
      },
      focus() {
        const y = m.value;
        return h.isActivated = !0, y.focus(), ne();
      },
      blur() {
        return m.value.blur(), h.isActivated = !1, ne();
      }
    }, Object.assign(i, p);
    const T = () => {
      const { disabled: y, openIcon: w, closeIcon: P } = e, j = A.value, F = c.value, N = b.value, W = D.value;
      return d("div", {
        class: ["vxe-switch", j ? "is--on" : "is--off", {
          [`size--${F}`]: F,
          "is--disabled": y,
          "is--animat": h.hasAnimat
        }]
      }, [
        d("button", {
          ref: m,
          class: "vxe-switch--button",
          type: "button",
          disabled: y,
          onClick: O,
          onFocus: B,
          onBlur: E
        }, [
          d("span", {
            class: "vxe-switch--label vxe-switch--label-on"
          }, [
            w ? d("i", {
              class: ["vxe-switch--label-icon", w]
            }) : Rt(),
            N
          ]),
          d("span", {
            class: "vxe-switch--label vxe-switch--label-off"
          }, [
            P ? d("i", {
              class: ["vxe-switch--label-icon", P]
            }) : Rt(),
            W
          ]),
          d("span", {
            class: "vxe-switch--icon"
          })
        ])
      ]);
    };
    return i.renderVN = T, i;
  },
  render() {
    return this.renderVN();
  }
}), sc = Object.assign(Al, {
  install: function(e) {
    e.component(Al.name, Al);
  }
}), qN = sc;
Nt.component(Al.name, Al);
const _l = Mt({
  name: "VxeList",
  props: {
    data: Array,
    height: [Number, String],
    maxHeight: [Number, String],
    loading: Boolean,
    className: [String, Function],
    size: { type: String, default: () => v.list.size || v.size },
    autoResize: { type: Boolean, default: () => v.list.autoResize },
    syncResize: [Boolean, String, Number],
    scrollY: Object
  },
  emits: [
    "scroll"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      scrollYLoad: !1,
      bodyHeight: 0,
      rowHeight: 0,
      topSpaceHeight: 0,
      items: []
    }), h = Ue(), i = Ue(), m = Ue(), p = {
      fullData: [],
      lastScrollLeft: 0,
      lastScrollTop: 0,
      scrollYStore: {
        startIndex: 0,
        endIndex: 0,
        visibleSize: 0,
        offsetSize: 0,
        rowHeight: 0
      }
    }, b = {
      refElem: h
    }, D = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      internalData: p,
      getRefMaps: () => b
    };
    let A = {};
    const $ = Ce(() => Object.assign({}, v.list.scrollY, e.scrollY)), O = Ce(() => {
      const { height: oe, maxHeight: ie } = e, le = {};
      return oe ? le.height = `${isNaN(oe) ? oe : `${oe}px`}` : ie && (le.height = "auto", le.maxHeight = `${isNaN(ie) ? ie : `${ie}px`}`), le;
    }), B = () => {
      const { scrollYLoad: oe } = c, { scrollYStore: ie, fullData: le } = p;
      c.bodyHeight = oe ? le.length * ie.rowHeight : 0, c.topSpaceHeight = oe ? Math.max(ie.startIndex * ie.rowHeight, 0) : 0;
    }, E = () => {
      const { scrollYLoad: oe } = c, { fullData: ie, scrollYStore: le } = p;
      return c.items = oe ? ie.slice(le.startIndex, le.endIndex) : ie.slice(0), ne();
    }, T = () => {
      E(), B();
    }, y = () => ne().then(() => {
      const { scrollYLoad: oe } = c, { scrollYStore: ie } = p, le = m.value, Q = $.value;
      let L = 0, I;
      if (le && (Q.sItem && (I = le.querySelector(Q.sItem)), I || (I = le.children[0])), I && (L = I.offsetHeight), L = Math.max(20, L), ie.rowHeight = L, oe) {
        const V = i.value, q = Math.max(8, Math.ceil(V.clientHeight / L)), U = Q.oSize ? l.toNumber(Q.oSize) : Ln.edge ? 10 : 0;
        ie.offsetSize = U, ie.visibleSize = q, ie.endIndex = Math.max(ie.startIndex, q + U, ie.endIndex), T();
      } else
        B();
      c.rowHeight = L;
    }), w = () => {
      const oe = i.value;
      return oe && (oe.scrollTop = 0), ne();
    }, P = (oe, ie) => {
      const le = i.value;
      return l.isNumber(oe) && (le.scrollLeft = oe), l.isNumber(ie) && (le.scrollTop = ie), c.scrollYLoad ? new Promise((Q) => {
        setTimeout(() => {
          ne(() => {
            Q();
          });
        }, 50);
      }) : ne();
    }, j = () => {
      const { lastScrollLeft: oe, lastScrollTop: ie } = p;
      return w().then(() => {
        if (oe || ie)
          return p.lastScrollLeft = 0, p.lastScrollTop = 0, P(oe, ie);
      });
    }, F = () => {
      const oe = h.value;
      return oe.clientWidth && oe.clientHeight ? y() : Promise.resolve();
    }, N = (oe) => {
      const { scrollYStore: ie } = p, { startIndex: le, endIndex: Q, visibleSize: L, offsetSize: I, rowHeight: V } = ie, U = oe.target.scrollTop, pe = Math.floor(U / V), ke = Math.max(0, pe - 1 - I), Ee = pe + L + I;
      (pe <= le || pe >= Q - L - 1) && (le !== ke || Q !== Ee) && (ie.startIndex = ke, ie.endIndex = Ee, T());
    }, W = (oe) => {
      const ie = oe.target, le = ie.scrollTop, Q = ie.scrollLeft, L = Q !== p.lastScrollLeft, I = le !== p.lastScrollTop;
      p.lastScrollTop = le, p.lastScrollLeft = Q, c.scrollYLoad && N(oe), A.dispatchEvent("scroll", { scrollLeft: Q, scrollTop: le, isX: L, isY: I }, oe);
    };
    A = {
      dispatchEvent(oe, ie, le) {
        o(oe, Object.assign({ $list: D, $event: le }, ie));
      },
      /**
       * 加载数据
       * @param {Array} datas 数据
       */
      loadData(oe) {
        const { scrollYStore: ie } = p, le = $.value, Q = oe || [];
        return Object.assign(ie, {
          startIndex: 0,
          endIndex: 1,
          visibleSize: 0
        }), p.fullData = Q, c.scrollYLoad = !!le.enabled && le.gt > -1 && (le.gt === 0 || le.gt <= Q.length), E(), y().then(() => {
          j();
        });
      },
      /**
       * 重新加载数据
       * @param {Array} datas 数据
       */
      reloadData(oe) {
        return w(), A.loadData(oe);
      },
      recalculate: F,
      scrollTo: P,
      refreshScroll: j,
      clearScroll: w
    }, Object.assign(D, A);
    const de = Ue(0);
    dt(() => e.data ? e.data.length : -1, () => {
      de.value++;
    }), dt(() => e.data, () => {
      de.value++;
    }), dt(de, () => {
      A.loadData(e.data || []);
    }), dt(() => e.syncResize, (oe) => {
      oe && (F(), ne(() => setTimeout(() => F())));
    }), Sd(() => {
      F().then(() => j());
    });
    let we;
    ne(() => {
      if (bt.on(D, "resize", () => {
        F();
      }), e.autoResize) {
        const oe = h.value;
        we = uh(() => F()), we.observe(oe);
      }
      A.loadData(e.data || []);
    }), fn(() => {
      we && we.disconnect(), bt.off(D, "resize");
    });
    const ve = () => {
      const { className: oe, loading: ie } = e, { bodyHeight: le, topSpaceHeight: Q, items: L } = c, I = u.value, V = O.value;
      return d("div", {
        ref: h,
        class: ["vxe-list", oe ? l.isFunction(oe) ? oe({ $list: D }) : oe : "", {
          [`size--${I}`]: I,
          "is--loading": ie
        }]
      }, [
        d("div", {
          ref: i,
          class: "vxe-list--virtual-wrapper",
          style: V,
          onScroll: W
        }, [
          d("div", {
            class: "vxe-list--y-space",
            style: {
              height: le ? `${le}px` : ""
            }
          }),
          d("div", {
            ref: m,
            class: "vxe-list--body",
            style: {
              marginTop: Q ? `${Q}px` : ""
            }
          }, n.default ? n.default({ items: L, $list: D }) : [])
        ]),
        /**
         * 加载中
         */
        d(qs, {
          class: "vxe-list--loading",
          modelValue: ie
        })
      ]);
    };
    return D.renderVN = ve, D;
  },
  render() {
    return this.renderVN();
  }
}), ic = Object.assign(_l, {
  install(e) {
    e.component(_l.name, _l);
  }
}), GN = ic;
Nt.component(_l.name, _l);
const Bl = Mt({
  name: "VxePulldown",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    placement: String,
    size: { type: String, default: () => v.size },
    className: [String, Function],
    popupClassName: [String, Function],
    destroyOnClose: Boolean,
    transfer: Boolean
  },
  emits: [
    "update:modelValue",
    "hide-panel"
  ],
  setup(e, t) {
    const { slots: n, emit: o } = t, s = l.uniqueId(), u = tn(e), c = Gt({
      inited: !1,
      panelIndex: 0,
      panelStyle: null,
      panelPlacement: null,
      visiblePanel: !1,
      animatVisible: !1,
      isActivated: !1
    }), h = Ue(), i = Ue(), m = Ue(), p = {
      refElem: h
    }, b = {
      xID: s,
      props: e,
      context: t,
      reactData: c,
      getRefMaps: () => p
    };
    let D = {};
    const A = () => {
      c.panelIndex < ko() && (c.panelIndex = ho());
    }, $ = () => c.visiblePanel, O = () => ne().then(() => {
      const { transfer: N, placement: W } = e, { panelIndex: de, visiblePanel: we } = c;
      if (we) {
        const ve = i.value, oe = m.value;
        if (oe && ve) {
          const ie = ve.offsetHeight, le = ve.offsetWidth, Q = oe.offsetHeight, L = oe.offsetWidth, I = 5, V = {
            zIndex: de
          }, { boundingTop: q, boundingLeft: U, visibleHeight: pe, visibleWidth: ke } = uo(ve);
          let Ee = "bottom";
          if (N) {
            let Le = U, Ae = q + ie;
            W === "top" ? (Ee = "top", Ae = q - Q) : W || (Ae + Q + I > pe && (Ee = "top", Ae = q - Q), Ae < I && (Ee = "bottom", Ae = q + ie)), Le + L + I > ke && (Le -= Le + L + I - ke), Le < I && (Le = I), Object.assign(V, {
              left: `${Le}px`,
              top: `${Ae}px`,
              minWidth: `${le}px`
            });
          } else
            W === "top" ? (Ee = "top", V.bottom = `${ie}px`) : W || q + ie + Q > pe && q - ie - Q > I && (Ee = "top", V.bottom = `${ie}px`);
          c.panelStyle = V, c.panelPlacement = Ee;
        }
      }
      return ne();
    });
    let B;
    const E = () => (c.inited || (c.inited = !0), new Promise((N) => {
      e.disabled ? ne(() => {
        N();
      }) : (clearTimeout(B), c.isActivated = !0, c.animatVisible = !0, setTimeout(() => {
        c.visiblePanel = !0, o("update:modelValue", !0), O(), setTimeout(() => {
          N(O());
        }, 40);
      }, 10), A());
    })), T = () => (c.visiblePanel = !1, o("update:modelValue", !1), new Promise((N) => {
      c.animatVisible ? B = window.setTimeout(() => {
        c.animatVisible = !1, ne(() => {
          N();
        });
      }, 350) : ne(() => {
        N();
      });
    })), y = () => c.visiblePanel ? T() : E(), w = (N) => {
      const { disabled: W } = e, { visiblePanel: de } = c, we = m.value;
      W || de && (yt(N, we).flag ? O() : (T(), D.dispatchEvent("hide-panel", {}, N)));
    }, P = (N) => {
      const { disabled: W } = e, { visiblePanel: de } = c, we = h.value, ve = m.value;
      W || (c.isActivated = yt(N, we).flag || yt(N, ve).flag, de && !c.isActivated && (T(), D.dispatchEvent("hide-panel", {}, N)));
    }, j = (N) => {
      c.visiblePanel && (c.isActivated = !1, T(), D.dispatchEvent("hide-panel", {}, N));
    };
    D = {
      dispatchEvent(N, W, de) {
        o(N, Object.assign({ $pulldown: b, $event: de }, W));
      },
      isPanelVisible: $,
      togglePanel: y,
      showPanel: E,
      hidePanel: T
    }, Object.assign(b, D), dt(() => e.modelValue, (N) => {
      N ? E() : T();
    }), ne(() => {
      bt.on(b, "mousewheel", w), bt.on(b, "mousedown", P), bt.on(b, "blur", j);
    }), fn(() => {
      bt.off(b, "mousewheel"), bt.off(b, "mousedown"), bt.off(b, "blur");
    });
    const F = () => {
      const { className: N, popupClassName: W, destroyOnClose: de, transfer: we, disabled: ve } = e, { inited: oe, isActivated: ie, animatVisible: le, visiblePanel: Q, panelStyle: L, panelPlacement: I } = c, V = u.value, q = n.default, U = n.header, pe = n.footer, ke = n.dropdown;
      return d("div", {
        ref: h,
        class: ["vxe-pulldown", N ? l.isFunction(N) ? N({ $pulldown: b }) : N : "", {
          [`size--${V}`]: V,
          "is--visivle": Q,
          "is--disabled": ve,
          "is--active": ie
        }]
      }, [
        d("div", {
          ref: i,
          class: "vxe-pulldown--content"
        }, q ? q({ $pulldown: b }) : []),
        d(Yr, {
          to: "body",
          disabled: we ? !oe : !0
        }, [
          d("div", {
            ref: m,
            class: ["vxe-table--ignore-clear vxe-pulldown--panel", W ? l.isFunction(W) ? W({ $pulldown: b }) : W : "", {
              [`size--${V}`]: V,
              "is--transfer": we,
              "animat--leave": le,
              "animat--enter": Q
            }],
            placement: I,
            style: L
          }, ke ? [
            d("div", {
              class: "vxe-pulldown--panel-wrapper"
            }, !oe || de && !Q && !le ? [] : [
              U ? d("div", {
                class: "vxe-pulldown--panel-header"
              }, U({ $pulldown: b })) : Rt(),
              d("div", {
                class: "vxe-pulldown--panel-body"
              }, ke({ $pulldown: b })),
              pe ? d("div", {
                class: "vxe-pulldown--panel-footer"
              }, pe({ $pulldown: b })) : Rt()
            ])
          ] : [])
        ])
      ]);
    };
    return b.renderVN = F, b;
  },
  render() {
    return this.renderVN();
  }
}), ac = Object.assign(Bl, {
  install: function(e) {
    e.component(Bl.name, Bl);
  }
}), YN = ac;
Nt.component(Bl.name, Bl);
const UN = {
  vxe: {
    base: {
      pleaseInput: "请输入",
      pleaseSelect: "请选择"
    },
    loading: {
      text: "加载中..."
    },
    error: {
      groupFixed: "如果使用分组表头，冻结列必须按组设置",
      groupMouseRange: '分组表头与 "{0}" 不能同时使用，这可能会出现错误',
      groupTag: '分组列头应该使用 "{0}" 而不是 "{1}"，这可能会出现错误',
      scrollErrProp: '启用虚拟滚动后不支持该参数 "{0}"',
      errConflicts: '参数 "{0}" 与 "{1}" 有冲突',
      unableInsert: "无法插入到指定位置，请检查参数是否正确",
      useErr: '安装 "{0}" 模块时发生错误，可能顺序不正确，依赖的模块需要在 Table 之前安装',
      barUnableLink: "工具栏无法关联表格",
      expandContent: '展开行的插槽应该是 "content"，请检查是否正确',
      reqModule: '缺少 "{0}" 模块',
      reqProp: '缺少必要的 "{0}" 参数，这可能会导致出现错误',
      emptyProp: '参数 "{0}" 不允许为空',
      errProp: '不支持的参数 "{0}"，可能为 "{1}"',
      colRepet: 'column.{0}="{1}" 重复了，这可能会导致某些功能无法使用',
      notFunc: '方法 "{0}" 不存在',
      errFunc: '参数 "{0}" 不是一个方法',
      notValidators: '全局校验 "{0}" 不存在',
      notFormats: '全局格式化 "{0}" 不存在',
      notCommands: '全局指令 "{0}" 不存在',
      notSlot: '插槽 "{0}" 不存在',
      noTree: '树结构不支持 "{0}"',
      notProp: '不支持的参数 "{0}"',
      checkProp: '当数据量过大时可能会导致复选框卡顿，建议设置参数 "{0}" 提升渲染速度',
      coverProp: '"{0}" 的参数 "{1}" 重复定义，这可能会出现错误',
      delFunc: '方法 "{0}" 已废弃，请使用 "{1}"',
      delProp: '参数 "{0}" 已废弃，请使用 "{1}"',
      delEvent: '事件 "{0}" 已废弃，请使用 "{1}"',
      removeProp: '参数 "{0}" 已废弃，不建议使用，这可能会导致出现错误',
      errFormat: '全局的格式化内容应该使用 "VXETable.formats" 定义，挂载 "formatter={0}" 的方式已不建议使用',
      notType: '不支持的文件类型 "{0}"',
      notExp: "该浏览器不支持导入/导出功能",
      impFields: "导入失败，请检查字段名和数据格式是否正确",
      treeNotImp: "树表格不支持导入"
    },
    table: {
      emptyText: "暂无数据",
      allTitle: "全选/取消",
      seqTitle: "#",
      confirmFilter: "筛选",
      resetFilter: "重置",
      allFilter: "全部",
      sortAsc: "升序：最低到最高",
      sortDesc: "降序：最高到最低",
      filter: "对所选的列启用筛选",
      impSuccess: "成功导入 {0} 条记录",
      expLoading: "正在导出中",
      expSuccess: "导出成功",
      expFilename: "导出_{0}",
      expOriginFilename: "导出_源_{0}",
      customTitle: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      maxFixedCol: "最大冻结列的数量不能超过 {0} 个"
    },
    grid: {
      selectOneRecord: "请至少选择一条记录！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      removeSelectRecord: "您确定要移除所选记录吗？",
      dataUnchanged: "数据未改动！",
      delSuccess: "成功删除所选记录！",
      saveSuccess: "保存成功！",
      operError: "发生错误，操作失败！"
    },
    select: {
      search: "搜索",
      loadingText: "加载中",
      emptyText: "暂无数据"
    },
    pager: {
      goto: "前往",
      pagesize: "{0}条/页",
      total: "共 {0} 条记录",
      pageClassifier: "页",
      homePage: "首页",
      homePageTitle: "首页",
      prevPage: "上一页",
      prevPageTitle: "上一页",
      nextPage: "下一页",
      nextPageTitle: "下一页",
      prevJump: "向上跳页",
      prevJumpTitle: "向上跳页",
      nextJump: "向下跳页",
      nextJumpTitle: "向下跳页",
      endPage: "末页",
      endPageTitle: "末页"
    },
    alert: {
      title: "系统提示"
    },
    button: {
      confirm: "确认",
      cancel: "取消"
    },
    filter: {
      search: "搜索"
    },
    custom: {
      cstmTitle: "列设置",
      cstmRestore: "恢复默认",
      cstmCancel: "取消",
      cstmConfirm: "确定",
      cstmConfirmRestore: "请确认是否恢复成默认列配置？",
      cstmDragTarget: "移动目标：{0}",
      setting: {
        colSort: "排序",
        sortHelpTip: "点击并拖动图标可以调整列的排序",
        colTitle: "标题",
        colVisible: "是否显示",
        colFixed: "冻结列（最多 {0} 列）",
        fixedLeft: "左侧",
        fixedUnset: "不设置",
        fixedRight: "右侧"
      }
    },
    import: {
      modes: {
        covering: "覆盖",
        insert: "新增"
      },
      impTitle: "导入数据",
      impFile: "文件名",
      impSelect: "选择文件",
      impType: "文件类型",
      impOpts: "参数设置",
      impConfirm: "导入",
      impCancel: "取消"
    },
    export: {
      types: {
        csv: "CSV (逗号分隔)(*.csv)",
        html: "网页(*.html)",
        xml: "XML 数据(*.xml)",
        txt: "文本文件(制表符分隔)(*.txt)",
        xls: "Excel 97-2003 工作簿(*.xls)",
        xlsx: "Excel 工作簿(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "当前数据（当前页的数据）",
        selected: "选中数据（当前页选中的数据）",
        all: "全量数据（包括所有分页的数据）"
      },
      printTitle: "打印数据",
      expTitle: "导出数据",
      expName: "文件名",
      expNamePlaceholder: "请输入文件名",
      expSheetName: "标题",
      expSheetNamePlaceholder: "请输入标题",
      expType: "保存类型",
      expMode: "选择数据",
      expCurrentColumn: "全部字段",
      expColumn: "选择字段",
      expOpts: "参数设置",
      expOptHeader: "表头",
      expHeaderTitle: "是否需要表头",
      expOptFooter: "表尾",
      expFooterTitle: "是否需要表尾",
      expOptColgroup: "分组表头",
      expColgroupTitle: "如果存在，则支持带有分组结构的表头",
      expOptMerge: "合并",
      expMergeTitle: "如果存在，则支持带有合并结构的单元格",
      expOptAllExpand: "展开层级",
      expAllExpandTitle: "如果存在，则支持将带有层级结构的数据全部展开",
      expOptUseStyle: "样式",
      expUseStyleTitle: "如果存在，则支持带样式的单元格",
      expOptOriginal: "源数据",
      expOriginalTitle: "如果为源数据，则支持导入到表格中",
      expPrint: "打印",
      expConfirm: "导出",
      expCancel: "取消"
    },
    modal: {
      zoomIn: "最大化",
      zoomOut: "还原",
      close: "关闭"
    },
    form: {
      folding: "收起",
      unfolding: "展开"
    },
    toolbar: {
      import: "导入",
      export: "导出",
      print: "打印",
      refresh: "刷新",
      zoomIn: "全屏",
      zoomOut: "还原",
      custom: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      fixedLeft: "冻结在左侧",
      fixedRight: "冻结在右侧",
      cancelFixed: "取消冻结列"
    },
    input: {
      date: {
        m1: "01 月",
        m2: "02 月",
        m3: "03 月",
        m4: "04 月",
        m5: "05 月",
        m6: "06 月",
        m7: "07 月",
        m8: "08 月",
        m9: "09 月",
        m10: "10 月",
        m11: "11 月",
        m12: "12 月",
        quarterLabel: "{0} 年",
        monthLabel: "{0} 年",
        dayLabel: "{0} 年 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy 年第 WW 周",
          month: "yyyy-MM",
          quarter: "yyyy 年第 q 季度",
          year: "yyyy"
        },
        weeks: {
          w: "周",
          w0: "周日",
          w1: "周一",
          w2: "周二",
          w3: "周三",
          w4: "周四",
          w5: "周五",
          w6: "周六"
        },
        months: {
          m0: "一月",
          m1: "二月",
          m2: "三月",
          m3: "四月",
          m4: "五月",
          m5: "六月",
          m6: "七月",
          m7: "八月",
          m8: "九月",
          m9: "十月",
          m10: "十一月",
          m11: "十二月"
        },
        quarters: {
          q1: "第一季度",
          q2: "第二季度",
          q3: "第三季度",
          q4: "第四季度"
        }
      }
    },
    /**
     * 扩展插件
     */
    plugins: {
      extendCellArea: {
        area: {
          mergeErr: "无法对合并单元格进行该操作",
          multiErr: "无法对多重选择区域进行该操作",
          extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
          pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作",
          cpInvalidErr: "该操作无法进行，您选择的区域中存在被禁止的列（{0}）"
        },
        fnr: {
          title: "查找和替换",
          findLabel: "查找",
          replaceLabel: "替换",
          findTitle: "查找内容：",
          replaceTitle: "替换为：",
          tabs: {
            find: "查找",
            replace: "替换"
          },
          filter: {
            re: "正则表达式",
            whole: "全词匹配",
            sensitive: "区分大小写"
          },
          btns: {
            findNext: "查找下一个",
            findAll: "查找全部",
            replace: "替换",
            replaceAll: "替换全部",
            cancel: "取消"
          },
          header: {
            seq: "#",
            cell: "单元格",
            value: "值"
          },
          empty: "(空值)",
          reError: "无效的正则表达式",
          recordCount: "已找到 {0} 个单元格",
          notCell: "找不到匹配的单元格",
          replaceSuccess: "成功替换 {0} 个单元格"
        }
      },
      filterComplexInput: {
        menus: {
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧"
        },
        cases: {
          equal: "等于",
          gt: "大于",
          lt: "小于",
          begin: "开头是",
          endin: "结尾是",
          include: "包含",
          isSensitive: "区分大小写"
        }
      },
      filterCombination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        cases: {
          equal: "等于",
          unequal: "不等于",
          gt: "大于",
          ge: "大于或等于",
          lt: "小于",
          le: "小于或等于",
          begin: "开头是",
          notbegin: "开头不是",
          endin: "结尾是",
          notendin: "结尾不是",
          include: "包含",
          exclude: "不包含",
          between: "介于",
          custom: "自定义筛选",
          insensitive: "不区分大小写",
          isSensitive: "区分大小写"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    },
    /**
     * 以下废弃
     * @deprecated
     */
    pro: {
      area: {
        mergeErr: "无法对合并单元格进行该操作",
        multiErr: "无法对多重选择区域进行该操作",
        extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
        pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作"
      },
      fnr: {
        title: "查找和替换",
        findLabel: "查找",
        replaceLabel: "替换",
        findTitle: "查找内容：",
        replaceTitle: "替换为：",
        tabs: {
          find: "查找",
          replace: "替换"
        },
        filter: {
          re: "正则表达式",
          whole: "全词匹配",
          sensitive: "区分大小写"
        },
        btns: {
          findNext: "查找下一个",
          findAll: "查找全部",
          replace: "替换",
          replaceAll: "替换全部",
          cancel: "取消"
        },
        header: {
          seq: "#",
          cell: "单元格",
          value: "值"
        },
        empty: "(空值)",
        reError: "无效的正则表达式",
        recordCount: "已找到 {0} 个单元格",
        notCell: "找不到匹配的单元格",
        replaceSuccess: "成功替换 {0} 个单元格"
      }
    },
    renderer: {
      search: "搜索",
      cases: {
        equal: "等于",
        unequal: "不等于",
        gt: "大于",
        ge: "大于或等于",
        lt: "小于",
        le: "小于或等于",
        begin: "开头是",
        notbegin: "开头不是",
        endin: "结尾是",
        notendin: "结尾不是",
        include: "包含",
        exclude: "不包含",
        between: "介于",
        custom: "自定义筛选",
        insensitive: "不区分大小写",
        isSensitive: "区分大小写"
      },
      combination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "锁定列",
          fixedGroup: "锁定组",
          cancelFixed: "取消锁定",
          fixedLeft: "锁定左侧",
          fixedRight: "锁定右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    }
  }
}, KN = [
  // 功能模块
  ka,
  Na,
  Ia,
  Pa,
  La,
  Va,
  Aa,
  // 可选组件
  jl,
  _a,
  Ba,
  qa,
  Ks,
  Us,
  Ga,
  Ya,
  Ua,
  Ka,
  Xa,
  Za,
  Ja,
  Gn,
  Qa,
  tc,
  Gr,
  Xs,
  nc,
  oc,
  Ys,
  rc,
  lc,
  sc,
  ic,
  ac,
  // 核心
  Gs
];
Ma({
  i18n: (e, t) => l.toFormatString(l.get(UN, e), t)
});
function XN(e, t) {
  l.isPlainObject(t) && (Ma(t), t.theme && Da(t)), KN.forEach((n) => n.install(e));
}
const t1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: gN,
  ButtonGroup: IN,
  Checkbox: TN,
  CheckboxGroup: RN,
  Colgroup: sN,
  Column: lN,
  Custom: eN,
  Edit: Rk,
  Export: qk,
  Filter: yk,
  Form: EN,
  FormGather: HN,
  FormItem: BN,
  Grid: SN,
  Icon: tN,
  Input: kN,
  Keyboard: Uk,
  List: GN,
  Menu: Ok,
  Modal: _N,
  Optgroup: zN,
  Option: jN,
  Pager: mN,
  Pulldown: YN,
  Radio: DN,
  RadioButton: $N,
  RadioGroup: MN,
  Select: hN,
  Switch: qN,
  Table: pN,
  Textarea: NN,
  Toolbar: vN,
  Tooltip: CN,
  VXETable: Xe,
  Validator: Zk,
  VxeButton: Gn,
  VxeButtonGroup: Qa,
  VxeCheckbox: Ga,
  VxeCheckboxGroup: Ya,
  VxeColgroup: Ba,
  VxeColumn: _a,
  VxeForm: Xs,
  VxeFormGather: oc,
  VxeFormItem: nc,
  VxeGrid: qa,
  VxeIcon: jl,
  VxeInput: Za,
  VxeList: ic,
  VxeModal: tc,
  VxeOptgroup: rc,
  VxeOption: lc,
  VxePager: Us,
  VxePulldown: ac,
  VxeRadio: Ua,
  VxeRadioButton: Xa,
  VxeRadioGroup: Ka,
  VxeSelect: Ys,
  VxeSwitch: sc,
  VxeTable: Gs,
  VxeTableCustomModule: Aa,
  VxeTableEditModule: Ia,
  VxeTableExportModule: Pa,
  VxeTableFilterModule: ka,
  VxeTableKeyboardModule: La,
  VxeTableMenuModule: Na,
  VxeTableValidatorModule: Va,
  VxeTextarea: Ja,
  VxeToolbar: Ks,
  VxeTooltip: Gr,
  _t: Zp,
  commands: Sa,
  config: Ma,
  formats: Hl,
  globalConfs: Jp,
  globalStore: $a,
  hooks: Up,
  install: XN,
  interceptor: Cl,
  menus: Ta,
  modal: AN,
  print: ih,
  readFile: ks,
  renderer: dr,
  saveFile: Ns,
  setConfig: zl,
  setup: eh,
  t: Xp,
  use: Kp,
  v: Qp,
  validators: Ra
}, Symbol.toStringTag, { value: "Module" })), n1 = {
  __name: "main",
  setup(e) {
    return (t, n) => (Rd(), Td("button", null, "按钮01"));
  }
}, ZN = { class: "" }, o1 = {
  __name: "main",
  setup(e) {
    return (t, n) => (Rd(), Td("div", ZN, n[0] || (n[0] = [
      Mh("input", { type: "text" }, null, -1)
    ])));
  }
};
export {
  t1 as V,
  l as X,
  n1 as _,
  o1 as a,
  QN as c,
  $h as g
};
