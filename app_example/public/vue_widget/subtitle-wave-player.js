/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ks(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const G = {}, ut = [], Ne = () => {
}, mr = () => !1, ls = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), qs = (t) => t.startsWith("onUpdate:"), se = Object.assign, Gs = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, vr = Object.prototype.hasOwnProperty, U = (t, e) => vr.call(t, e), $ = Array.isArray, dt = (t) => jt(t) === "[object Map]", as = (t) => jt(t) === "[object Set]", bi = (t) => jt(t) === "[object Date]", F = (t) => typeof t == "function", te = (t) => typeof t == "string", We = (t) => typeof t == "symbol", J = (t) => t !== null && typeof t == "object", sn = (t) => (J(t) || F(t)) && F(t.then) && F(t.catch), nn = Object.prototype.toString, jt = (t) => nn.call(t), br = (t) => jt(t).slice(8, -1), cs = (t) => jt(t) === "[object Object]", Ys = (t) => te(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Tt = /* @__PURE__ */ Ks(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), us = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, yr = /-(\w)/g, Me = us(
  (t) => t.replace(yr, (e, s) => s ? s.toUpperCase() : "")
), _r = /\B([A-Z])/g, Ee = us(
  (t) => t.replace(_r, "-$1").toLowerCase()
), rn = us((t) => t.charAt(0).toUpperCase() + t.slice(1)), ws = us(
  (t) => t ? `on${rn(t)}` : ""
), Xe = (t, e) => !Object.is(t, e), Yt = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, ks = (t, e, s, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, xr = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, yi = (t) => {
  const e = te(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let _i;
const ds = () => _i || (_i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(t) {
  if ($(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const i = t[s], n = te(i) ? Er(i) : fs(i);
      if (n)
        for (const r in n)
          e[r] = n[r];
    }
    return e;
  } else if (te(t) || J(t))
    return t;
}
const wr = /;(?![^(]*\))/g, Cr = /:([^]+)/, Sr = /\/\*[^]*?\*\//g;
function Er(t) {
  const e = {};
  return t.replace(Sr, "").split(wr).forEach((s) => {
    if (s) {
      const i = s.split(Cr);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function nt(t) {
  let e = "";
  if (te(t))
    e = t;
  else if ($(t))
    for (let s = 0; s < t.length; s++) {
      const i = nt(t[s]);
      i && (e += i + " ");
    }
  else if (J(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const Tr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rr = /* @__PURE__ */ Ks(Tr);
function on(t) {
  return !!t || t === "";
}
function Pr(t, e) {
  if (t.length !== e.length) return !1;
  let s = !0;
  for (let i = 0; s && i < t.length; i++)
    s = hs(t[i], e[i]);
  return s;
}
function hs(t, e) {
  if (t === e) return !0;
  let s = bi(t), i = bi(e);
  if (s || i)
    return s && i ? t.getTime() === e.getTime() : !1;
  if (s = We(t), i = We(e), s || i)
    return t === e;
  if (s = $(t), i = $(e), s || i)
    return s && i ? Pr(t, e) : !1;
  if (s = J(t), i = J(e), s || i) {
    if (!s || !i)
      return !1;
    const n = Object.keys(t).length, r = Object.keys(e).length;
    if (n !== r)
      return !1;
    for (const o in t) {
      const l = t.hasOwnProperty(o), a = e.hasOwnProperty(o);
      if (l && !a || !l && a || !hs(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function ln(t, e) {
  return t.findIndex((s) => hs(s, e));
}
const an = (t) => !!(t && t.__v_isRef === !0), rt = (t) => te(t) ? t : t == null ? "" : $(t) || J(t) && (t.toString === nn || !F(t.toString)) ? an(t) ? rt(t.value) : JSON.stringify(t, cn, 2) : String(t), cn = (t, e) => an(e) ? cn(t, e.value) : dt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [i, n], r) => (s[Cs(i, r) + " =>"] = n, s),
    {}
  )
} : as(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => Cs(s))
} : We(e) ? Cs(e) : J(e) && !$(e) && !cs(e) ? String(e) : e, Cs = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ve;
class Mr {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ve, !e && ve && (this.index = (ve.scopes || (ve.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].pause();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes)
        for (e = 0, s = this.scopes.length; e < s; e++)
          this.scopes[e].resume();
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = ve;
      try {
        return ve = this, e();
      } finally {
        ve = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ve = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, i;
      for (s = 0, i = this.effects.length; s < i; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, i = this.cleanups.length; s < i; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, i = this.scopes.length; s < i; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ar() {
  return ve;
}
let X;
const Ss = /* @__PURE__ */ new WeakSet();
class un {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && ve.active && ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ss.has(this) && (Ss.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xi(this), hn(this);
    const e = X, s = Ae;
    X = this, Ae = !0;
    try {
      return this.fn();
    } finally {
      pn(this), X = e, Ae = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Zs(e);
      this.deps = this.depsTail = void 0, xi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $s(this) && this.run();
  }
  get dirty() {
    return $s(this);
  }
}
let dn = 0, Rt, Pt;
function fn(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Pt, Pt = t;
    return;
  }
  t.next = Rt, Rt = t;
}
function Xs() {
  dn++;
}
function Js() {
  if (--dn > 0)
    return;
  if (Pt) {
    let e = Pt;
    for (Pt = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; Rt; ) {
    let e = Rt;
    for (Rt = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (i) {
          t || (t = i);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function hn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function pn(t) {
  let e, s = t.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), Zs(i), Or(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  t.deps = e, t.depsTail = s;
}
function $s(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (gn(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function gn(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Lt) || (t.globalVersion = Lt, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !$s(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = X, i = Ae;
  X = t, Ae = !0;
  try {
    hn(t);
    const n = t.fn(t._value);
    (e.version === 0 || Xe(n, t._value)) && (t.flags |= 128, t._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    X = s, Ae = i, pn(t), t.flags &= -3;
  }
}
function Zs(t, e = !1) {
  const { dep: s, prevSub: i, nextSub: n } = t;
  if (i && (i.nextSub = n, t.prevSub = void 0), n && (n.prevSub = i, t.nextSub = void 0), s.subs === t && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Zs(r, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Or(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let Ae = !0;
const mn = [];
function Ve() {
  mn.push(Ae), Ae = !1;
}
function Ke() {
  const t = mn.pop();
  Ae = t === void 0 ? !0 : t;
}
function xi(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = X;
    X = void 0;
    try {
      e();
    } finally {
      X = s;
    }
  }
}
let Lt = 0;
class Dr {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!X || !Ae || X === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== X)
      s = this.activeLink = new Dr(X, this), X.deps ? (s.prevDep = X.depsTail, X.depsTail.nextDep = s, X.depsTail = s) : X.deps = X.depsTail = s, vn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = X.depsTail, s.nextDep = void 0, X.depsTail.nextDep = s, X.depsTail = s, X.deps === s && (X.deps = i);
    }
    return s;
  }
  trigger(e) {
    this.version++, Lt++, this.notify(e);
  }
  notify(e) {
    Xs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Js();
    }
  }
}
function vn(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        vn(i);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Is = /* @__PURE__ */ new WeakMap(), ot = Symbol(
  ""
), Ns = Symbol(
  ""
), kt = Symbol(
  ""
);
function ae(t, e, s) {
  if (Ae && X) {
    let i = Is.get(t);
    i || Is.set(t, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new Qs()), n.map = i, n.key = s), n.track();
  }
}
function Be(t, e, s, i, n, r) {
  const o = Is.get(t);
  if (!o) {
    Lt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Xs(), e === "clear")
    o.forEach(l);
  else {
    const a = $(t), d = a && Ys(s);
    if (a && s === "length") {
      const c = Number(i);
      o.forEach((h, p) => {
        (p === "length" || p === kt || !We(p) && p >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(kt)), e) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(ot)), dt(t) && l(o.get(Ns)));
          break;
        case "delete":
          a || (l(o.get(ot)), dt(t) && l(o.get(Ns)));
          break;
        case "set":
          dt(t) && l(o.get(ot));
          break;
      }
  }
  Js();
}
function at(t) {
  const e = K(t);
  return e === t ? e : (ae(e, "iterate", kt), Re(t) ? e : e.map(re));
}
function ps(t) {
  return ae(t = K(t), "iterate", kt), t;
}
const Lr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Es(this, Symbol.iterator, re);
  },
  concat(...t) {
    return at(this).concat(
      ...t.map((e) => $(e) ? at(e) : e)
    );
  },
  entries() {
    return Es(this, "entries", (t) => (t[1] = re(t[1]), t));
  },
  every(t, e) {
    return He(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return He(this, "filter", t, e, (s) => s.map(re), arguments);
  },
  find(t, e) {
    return He(this, "find", t, e, re, arguments);
  },
  findIndex(t, e) {
    return He(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return He(this, "findLast", t, e, re, arguments);
  },
  findLastIndex(t, e) {
    return He(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return He(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Ts(this, "includes", t);
  },
  indexOf(...t) {
    return Ts(this, "indexOf", t);
  },
  join(t) {
    return at(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return Ts(this, "lastIndexOf", t);
  },
  map(t, e) {
    return He(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...t) {
    return xt(this, "push", t);
  },
  reduce(t, ...e) {
    return wi(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return wi(this, "reduceRight", t, e);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return He(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return xt(this, "splice", t);
  },
  toReversed() {
    return at(this).toReversed();
  },
  toSorted(t) {
    return at(this).toSorted(t);
  },
  toSpliced(...t) {
    return at(this).toSpliced(...t);
  },
  unshift(...t) {
    return xt(this, "unshift", t);
  },
  values() {
    return Es(this, "values", re);
  }
};
function Es(t, e, s) {
  const i = ps(t), n = i[e]();
  return i !== t && !Re(t) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.value && (r.value = s(r.value)), r;
  }), n;
}
const kr = Array.prototype;
function He(t, e, s, i, n, r) {
  const o = ps(t), l = o !== t && !Re(t), a = o[e];
  if (a !== kr[e]) {
    const h = a.apply(t, r);
    return l ? re(h) : h;
  }
  let d = s;
  o !== t && (l ? d = function(h, p) {
    return s.call(this, re(h), p, t);
  } : s.length > 2 && (d = function(h, p) {
    return s.call(this, h, p, t);
  }));
  const c = a.call(o, d, i);
  return l && n ? n(c) : c;
}
function wi(t, e, s, i) {
  const n = ps(t);
  let r = s;
  return n !== t && (Re(t) ? s.length > 3 && (r = function(o, l, a) {
    return s.call(this, o, l, a, t);
  }) : r = function(o, l, a) {
    return s.call(this, o, re(l), a, t);
  }), n[e](r, ...i);
}
function Ts(t, e, s) {
  const i = K(t);
  ae(i, "iterate", kt);
  const n = i[e](...s);
  return (n === -1 || n === !1) && ii(s[0]) ? (s[0] = K(s[0]), i[e](...s)) : n;
}
function xt(t, e, s = []) {
  Ve(), Xs();
  const i = K(t)[e].apply(t, s);
  return Js(), Ke(), i;
}
const $r = /* @__PURE__ */ Ks("__proto__,__v_isRef,__isVue"), bn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(We)
);
function Ir(t) {
  We(t) || (t = String(t));
  const e = K(this);
  return ae(e, "has", t), e.hasOwnProperty(t);
}
class yn {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, i) {
    if (s === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !n;
    if (s === "__v_isReadonly")
      return n;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return i === (n ? r ? Kr : Cn : r ? wn : xn).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const o = $(e);
    if (!n) {
      let a;
      if (o && (a = Lr[s]))
        return a;
      if (s === "hasOwnProperty")
        return Ir;
    }
    const l = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(e) ? e : i
    );
    return (We(s) ? bn.has(s) : $r(s)) || (n || ae(e, "get", s), r) ? l : ce(l) ? o && Ys(s) ? l : l.value : J(l) ? n ? Sn(l) : ti(l) : l;
  }
}
class _n extends yn {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, i, n) {
    let r = e[s];
    if (!this._isShallow) {
      const a = Ze(r);
      if (!Re(i) && !Ze(i) && (r = K(r), i = K(i)), !$(e) && ce(r) && !ce(i))
        return a ? !1 : (r.value = i, !0);
    }
    const o = $(e) && Ys(s) ? Number(s) < e.length : U(e, s), l = Reflect.set(
      e,
      s,
      i,
      ce(e) ? e : n
    );
    return e === K(n) && (o ? Xe(i, r) && Be(e, "set", s, i) : Be(e, "add", s, i)), l;
  }
  deleteProperty(e, s) {
    const i = U(e, s);
    e[s];
    const n = Reflect.deleteProperty(e, s);
    return n && i && Be(e, "delete", s, void 0), n;
  }
  has(e, s) {
    const i = Reflect.has(e, s);
    return (!We(s) || !bn.has(s)) && ae(e, "has", s), i;
  }
  ownKeys(e) {
    return ae(
      e,
      "iterate",
      $(e) ? "length" : ot
    ), Reflect.ownKeys(e);
  }
}
class Nr extends yn {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const Wr = /* @__PURE__ */ new _n(), jr = /* @__PURE__ */ new Nr(), Fr = /* @__PURE__ */ new _n(!0);
const Ws = (t) => t, Vt = (t) => Reflect.getPrototypeOf(t);
function Hr(t, e, s) {
  return function(...i) {
    const n = this.__v_raw, r = K(n), o = dt(r), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, d = n[t](...i), c = s ? Ws : e ? es : re;
    return !e && ae(
      r,
      "iterate",
      a ? Ns : ot
    ), {
      // iterator protocol
      next() {
        const { value: h, done: p } = d.next();
        return p ? { value: h, done: p } : {
          value: l ? [c(h[0]), c(h[1])] : c(h),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Kt(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function zr(t, e) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = K(r), l = K(n);
      t || (Xe(n, l) && ae(o, "get", n), ae(o, "get", l));
      const { has: a } = Vt(o), d = e ? Ws : t ? es : re;
      if (a.call(o, n))
        return d(r.get(n));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !t && ae(K(n), "iterate", ot), Reflect.get(n, "size", n);
    },
    has(n) {
      const r = this.__v_raw, o = K(r), l = K(n);
      return t || (Xe(n, l) && ae(o, "has", n), ae(o, "has", l)), n === l ? r.has(n) : r.has(n) || r.has(l);
    },
    forEach(n, r) {
      const o = this, l = o.__v_raw, a = K(l), d = e ? Ws : t ? es : re;
      return !t && ae(a, "iterate", ot), l.forEach((c, h) => n.call(r, d(c), d(h), o));
    }
  };
  return se(
    s,
    t ? {
      add: Kt("add"),
      set: Kt("set"),
      delete: Kt("delete"),
      clear: Kt("clear")
    } : {
      add(n) {
        !e && !Re(n) && !Ze(n) && (n = K(n));
        const r = K(this);
        return Vt(r).has.call(r, n) || (r.add(n), Be(r, "add", n, n)), this;
      },
      set(n, r) {
        !e && !Re(r) && !Ze(r) && (r = K(r));
        const o = K(this), { has: l, get: a } = Vt(o);
        let d = l.call(o, n);
        d || (n = K(n), d = l.call(o, n));
        const c = a.call(o, n);
        return o.set(n, r), d ? Xe(r, c) && Be(o, "set", n, r) : Be(o, "add", n, r), this;
      },
      delete(n) {
        const r = K(this), { has: o, get: l } = Vt(r);
        let a = o.call(r, n);
        a || (n = K(n), a = o.call(r, n)), l && l.call(r, n);
        const d = r.delete(n);
        return a && Be(r, "delete", n, void 0), d;
      },
      clear() {
        const n = K(this), r = n.size !== 0, o = n.clear();
        return r && Be(
          n,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    s[n] = Hr(n, t, e);
  }), s;
}
function ei(t, e) {
  const s = zr(t, e);
  return (i, n, r) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? i : Reflect.get(
    U(s, n) && n in i ? s : i,
    n,
    r
  );
}
const Br = {
  get: /* @__PURE__ */ ei(!1, !1)
}, Ur = {
  get: /* @__PURE__ */ ei(!1, !0)
}, Vr = {
  get: /* @__PURE__ */ ei(!0, !1)
};
const xn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap();
function qr(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Gr(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : qr(br(t));
}
function ti(t) {
  return Ze(t) ? t : si(
    t,
    !1,
    Wr,
    Br,
    xn
  );
}
function Yr(t) {
  return si(
    t,
    !1,
    Fr,
    Ur,
    wn
  );
}
function Sn(t) {
  return si(
    t,
    !0,
    jr,
    Vr,
    Cn
  );
}
function si(t, e, s, i, n) {
  if (!J(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const r = Gr(t);
  if (r === 0)
    return t;
  const o = n.get(t);
  if (o)
    return o;
  const l = new Proxy(
    t,
    r === 2 ? i : s
  );
  return n.set(t, l), l;
}
function ft(t) {
  return Ze(t) ? ft(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ze(t) {
  return !!(t && t.__v_isReadonly);
}
function Re(t) {
  return !!(t && t.__v_isShallow);
}
function ii(t) {
  return t ? !!t.__v_raw : !1;
}
function K(t) {
  const e = t && t.__v_raw;
  return e ? K(e) : t;
}
function Xr(t) {
  return !U(t, "__v_skip") && Object.isExtensible(t) && ks(t, "__v_skip", !0), t;
}
const re = (t) => J(t) ? ti(t) : t, es = (t) => J(t) ? Sn(t) : t;
function ce(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Q(t) {
  return Jr(t, !1);
}
function Jr(t, e) {
  return ce(t) ? t : new Zr(t, e);
}
class Zr {
  constructor(e, s) {
    this.dep = new Qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : K(e), this._value = s ? e : re(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, i = this.__v_isShallow || Re(e) || Ze(e);
    e = i ? e : K(e), Xe(e, s) && (this._rawValue = e, this._value = i ? e : re(e), this.dep.trigger());
  }
}
function En(t) {
  return ce(t) ? t.value : t;
}
const Qr = {
  get: (t, e, s) => e === "__v_raw" ? t : En(Reflect.get(t, e, s)),
  set: (t, e, s, i) => {
    const n = t[e];
    return ce(n) && !ce(s) ? (n.value = s, !0) : Reflect.set(t, e, s, i);
  }
};
function Tn(t) {
  return ft(t) ? t : new Proxy(t, Qr);
}
class eo {
  constructor(e, s, i) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new Qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return fn(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return gn(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
function to(t, e, s = !1) {
  let i, n;
  return F(t) ? i = t : (i = t.get, n = t.set), new eo(i, n, s);
}
const qt = {}, ts = /* @__PURE__ */ new WeakMap();
let it;
function so(t, e = !1, s = it) {
  if (s) {
    let i = ts.get(s);
    i || ts.set(s, i = []), i.push(t);
  }
}
function io(t, e, s = G) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (v) => n ? v : Re(v) || n === !1 || n === 0 ? Ue(v, 1) : Ue(v);
  let c, h, p, g, S = !1, O = !1;
  if (ce(t) ? (h = () => t.value, S = Re(t)) : ft(t) ? (h = () => d(t), S = !0) : $(t) ? (O = !0, S = t.some((v) => ft(v) || Re(v)), h = () => t.map((v) => {
    if (ce(v))
      return v.value;
    if (ft(v))
      return d(v);
    if (F(v))
      return a ? a(v, 2) : v();
  })) : F(t) ? e ? h = a ? () => a(t, 2) : t : h = () => {
    if (p) {
      Ve();
      try {
        p();
      } finally {
        Ke();
      }
    }
    const v = it;
    it = c;
    try {
      return a ? a(t, 3, [g]) : t(g);
    } finally {
      it = v;
    }
  } : h = Ne, e && n) {
    const v = h, A = n === !0 ? 1 / 0 : n;
    h = () => Ue(v(), A);
  }
  const I = Ar(), D = () => {
    c.stop(), I && I.active && Gs(I.effects, c);
  };
  if (r && e) {
    const v = e;
    e = (...A) => {
      v(...A), D();
    };
  }
  let N = O ? new Array(t.length).fill(qt) : qt;
  const M = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (e) {
        const A = c.run();
        if (n || S || (O ? A.some((z, V) => Xe(z, N[V])) : Xe(A, N))) {
          p && p();
          const z = it;
          it = c;
          try {
            const V = [
              A,
              // pass undefined as the old value when it's changed for the first time
              N === qt ? void 0 : O && N[0] === qt ? [] : N,
              g
            ];
            N = A, a ? a(e, 3, V) : (
              // @ts-expect-error
              e(...V)
            );
          } finally {
            it = z;
          }
        }
      } else
        c.run();
  };
  return l && l(M), c = new un(h), c.scheduler = o ? () => o(M, !1) : M, g = (v) => so(v, !1, c), p = c.onStop = () => {
    const v = ts.get(c);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const A of v) A();
      ts.delete(c);
    }
  }, e ? i ? M(!0) : N = c.run() : o ? o(M.bind(null, !0), !0) : c.run(), D.pause = c.pause.bind(c), D.resume = c.resume.bind(c), D.stop = D, D;
}
function Ue(t, e = 1 / 0, s) {
  if (e <= 0 || !J(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(t)))
    return t;
  if (s.add(t), e--, ce(t))
    Ue(t.value, e, s);
  else if ($(t))
    for (let i = 0; i < t.length; i++)
      Ue(t[i], e, s);
  else if (as(t) || dt(t))
    t.forEach((i) => {
      Ue(i, e, s);
    });
  else if (cs(t)) {
    for (const i in t)
      Ue(t[i], e, s);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && Ue(t[i], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ft(t, e, s, i) {
  try {
    return i ? t(...i) : t();
  } catch (n) {
    gs(n, e, s);
  }
}
function je(t, e, s, i) {
  if (F(t)) {
    const n = Ft(t, e, s, i);
    return n && sn(n) && n.catch((r) => {
      gs(r, e, s);
    }), n;
  }
  if ($(t)) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      n.push(je(t[r], e, s, i));
    return n;
  }
}
function gs(t, e, s, i = !0) {
  const n = e ? e.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = e && e.appContext.config || G;
  if (e) {
    let l = e.parent;
    const a = e.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](t, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ve(), Ft(r, null, 10, [
        t,
        a,
        d
      ]), Ke();
      return;
    }
  }
  no(t, s, n, i, o);
}
function no(t, e, s, i = !0, n = !1) {
  if (n)
    throw t;
  console.error(t);
}
const he = [];
let $e = -1;
const ht = [];
let Ge = null, ct = 0;
const Rn = /* @__PURE__ */ Promise.resolve();
let ss = null;
function ni(t) {
  const e = ss || Rn;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function ro(t) {
  let e = $e + 1, s = he.length;
  for (; e < s; ) {
    const i = e + s >>> 1, n = he[i], r = $t(n);
    r < t || r === t && n.flags & 2 ? e = i + 1 : s = i;
  }
  return e;
}
function ri(t) {
  if (!(t.flags & 1)) {
    const e = $t(t), s = he[he.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= $t(s) ? he.push(t) : he.splice(ro(e), 0, t), t.flags |= 1, Pn();
  }
}
function Pn() {
  ss || (ss = Rn.then(An));
}
function oo(t) {
  $(t) ? ht.push(...t) : Ge && t.id === -1 ? Ge.splice(ct + 1, 0, t) : t.flags & 1 || (ht.push(t), t.flags |= 1), Pn();
}
function Ci(t, e, s = $e + 1) {
  for (; s < he.length; s++) {
    const i = he[s];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      he.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Mn(t) {
  if (ht.length) {
    const e = [...new Set(ht)].sort(
      (s, i) => $t(s) - $t(i)
    );
    if (ht.length = 0, Ge) {
      Ge.push(...e);
      return;
    }
    for (Ge = e, ct = 0; ct < Ge.length; ct++) {
      const s = Ge[ct];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ge = null, ct = 0;
  }
}
const $t = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function An(t) {
  try {
    for ($e = 0; $e < he.length; $e++) {
      const e = he[$e];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Ft(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; $e < he.length; $e++) {
      const e = he[$e];
      e && (e.flags &= -2);
    }
    $e = -1, he.length = 0, Mn(), ss = null, (he.length || ht.length) && An();
  }
}
let Te = null, On = null;
function is(t) {
  const e = Te;
  return Te = t, On = t && t.type.__scopeId || null, e;
}
function lo(t, e = Te, s) {
  if (!e || t._n)
    return t;
  const i = (...n) => {
    i._d && Li(-1);
    const r = is(e);
    let o;
    try {
      o = t(...n);
    } finally {
      is(r), i._d && Li(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Si(t, e) {
  if (Te === null)
    return t;
  const s = _s(Te), i = t.dirs || (t.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [r, o, l, a = G] = e[n];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ue(o), i.push({
      dir: r,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return t;
}
function tt(t, e, s, i) {
  const n = t.dirs, r = e && e.dirs;
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[i];
    a && (Ve(), je(a, s, 8, [
      t.el,
      l,
      t,
      e
    ]), Ke());
  }
}
const ao = Symbol("_vte"), co = (t) => t.__isTeleport;
function oi(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, oi(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ms(t, e) {
  return F(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: t.name }, e, { setup: t })
  ) : t;
}
function Dn(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Mt(t, e, s, i, n = !1) {
  if ($(t)) {
    t.forEach(
      (S, O) => Mt(
        S,
        e && ($(e) ? e[O] : e),
        s,
        i,
        n
      )
    );
    return;
  }
  if (At(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Mt(t, e, s, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? _s(i.component) : i.el, o = n ? null : r, { i: l, r: a } = t, d = e && e.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, p = K(h), g = h === G ? () => !1 : (S) => U(p, S);
  if (d != null && d !== a && (te(d) ? (c[d] = null, g(d) && (h[d] = null)) : ce(d) && (d.value = null)), F(a))
    Ft(a, l, 12, [o, c]);
  else {
    const S = te(a), O = ce(a);
    if (S || O) {
      const I = () => {
        if (t.f) {
          const D = S ? g(a) ? h[a] : c[a] : a.value;
          n ? $(D) && Gs(D, r) : $(D) ? D.includes(r) || D.push(r) : S ? (c[a] = [r], g(a) && (h[a] = c[a])) : (a.value = [r], t.k && (c[t.k] = a.value));
        } else S ? (c[a] = o, g(a) && (h[a] = o)) : O && (a.value = o, t.k && (c[t.k] = o));
      };
      o ? (I.id = -1, we(I, s)) : I();
    }
  }
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const At = (t) => !!t.type.__asyncLoader, Ln = (t) => t.type.__isKeepAlive;
function uo(t, e) {
  kn(t, "a", e);
}
function fo(t, e) {
  kn(t, "da", e);
}
function kn(t, e, s = pe) {
  const i = t.__wdc || (t.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return t();
  });
  if (vs(e, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      Ln(n.parent.vnode) && ho(i, e, s, n), n = n.parent;
  }
}
function ho(t, e, s, i) {
  const n = vs(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  li(() => {
    Gs(i[e], n);
  }, s);
}
function vs(t, e, s = pe, i = !1) {
  if (s) {
    const n = s[t] || (s[t] = []), r = e.__weh || (e.__weh = (...o) => {
      Ve();
      const l = Ht(s), a = je(e, s, t, o);
      return l(), Ke(), a;
    });
    return i ? n.unshift(r) : n.push(r), r;
  }
}
const qe = (t) => (e, s = pe) => {
  (!Nt || t === "sp") && vs(t, (...i) => e(...i), s);
}, po = qe("bm"), $n = qe("m"), go = qe(
  "bu"
), mo = qe("u"), vo = qe(
  "bum"
), li = qe("um"), bo = qe(
  "sp"
), yo = qe("rtg"), _o = qe("rtc");
function xo(t, e = pe) {
  vs("ec", t, e);
}
const wo = Symbol.for("v-ndc");
function js(t, e, s, i) {
  let n;
  const r = s, o = $(t);
  if (o || te(t)) {
    const l = o && ft(t);
    let a = !1, d = !1;
    l && (a = !Re(t), d = Ze(t), t = ps(t)), n = new Array(t.length);
    for (let c = 0, h = t.length; c < h; c++)
      n[c] = e(
        a ? d ? es(re(t[c])) : re(t[c]) : t[c],
        c,
        void 0,
        r
      );
  } else if (typeof t == "number") {
    n = new Array(t);
    for (let l = 0; l < t; l++)
      n[l] = e(l + 1, l, void 0, r);
  } else if (J(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (l, a) => e(l, a, void 0, r)
      );
    else {
      const l = Object.keys(t);
      n = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const c = l[a];
        n[a] = e(t[c], c, a, r);
      }
    }
  else
    n = [];
  return n;
}
const Fs = (t) => t ? ir(t) ? _s(t) : Fs(t.parent) : null, Ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Fs(t.parent),
    $root: (t) => Fs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Nn(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      ri(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = ni.bind(t.proxy)),
    $watch: (t) => Uo.bind(t)
  })
), Rs = (t, e) => t !== G && !t.__isScriptSetup && U(t, e), Co = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: i, data: n, props: r, accessCache: o, type: l, appContext: a } = t;
    let d;
    if (e[0] !== "$") {
      const g = o[e];
      if (g !== void 0)
        switch (g) {
          case 1:
            return i[e];
          case 2:
            return n[e];
          case 4:
            return s[e];
          case 3:
            return r[e];
        }
      else {
        if (Rs(i, e))
          return o[e] = 1, i[e];
        if (n !== G && U(n, e))
          return o[e] = 2, n[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = t.propsOptions[0]) && U(d, e)
        )
          return o[e] = 3, r[e];
        if (s !== G && U(s, e))
          return o[e] = 4, s[e];
        Hs && (o[e] = 0);
      }
    }
    const c = Ot[e];
    let h, p;
    if (c)
      return e === "$attrs" && ae(t.attrs, "get", ""), c(t);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[e])
    )
      return h;
    if (s !== G && U(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      p = a.config.globalProperties, U(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, s) {
    const { data: i, setupState: n, ctx: r } = t;
    return Rs(n, e) ? (n[e] = s, !0) : i !== G && U(i, e) ? (i[e] = s, !0) : U(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (r[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: i, appContext: n, propsOptions: r }
  }, o) {
    let l;
    return !!s[o] || t !== G && U(t, o) || Rs(e, o) || (l = r[0]) && U(l, o) || U(i, o) || U(Ot, o) || U(n.config.globalProperties, o);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : U(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function Ei(t) {
  return $(t) ? t.reduce(
    (e, s) => (e[s] = null, e),
    {}
  ) : t;
}
let Hs = !0;
function So(t) {
  const e = Nn(t), s = t.proxy, i = t.ctx;
  Hs = !1, e.beforeCreate && Ti(e.beforeCreate, t, "bc");
  const {
    // state
    data: n,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: p,
    beforeUpdate: g,
    updated: S,
    activated: O,
    deactivated: I,
    beforeDestroy: D,
    beforeUnmount: N,
    destroyed: M,
    unmounted: v,
    render: A,
    renderTracked: z,
    renderTriggered: V,
    errorCaptured: Z,
    serverPrefetch: ie,
    // public API
    expose: ee,
    inheritAttrs: be,
    // assets
    components: Fe,
    directives: et,
    filters: lt
  } = e;
  if (d && Eo(d, i, null), o)
    for (const _ in o) {
      const C = o[_];
      F(C) && (i[_] = C.bind(s));
    }
  if (n) {
    const _ = n.call(s, s);
    J(_) && (t.data = ti(_));
  }
  if (Hs = !0, r)
    for (const _ in r) {
      const C = r[_], B = F(C) ? C.bind(s, s) : F(C.get) ? C.get.bind(s, s) : Ne, ye = !F(C) && F(C.set) ? C.set.bind(s) : Ne, _e = rr({
        get: B,
        set: ye
      });
      Object.defineProperty(i, _, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (ue) => _e.value = ue
      });
    }
  if (l)
    for (const _ in l)
      In(l[_], i, s, _);
  if (a) {
    const _ = F(a) ? a.call(s) : a;
    Reflect.ownKeys(_).forEach((C) => {
      Oo(C, _[C]);
    });
  }
  c && Ti(c, t, "c");
  function ne(_, C) {
    $(C) ? C.forEach((B) => _(B.bind(s))) : C && _(C.bind(s));
  }
  if (ne(po, h), ne($n, p), ne(go, g), ne(mo, S), ne(uo, O), ne(fo, I), ne(xo, Z), ne(_o, z), ne(yo, V), ne(vo, N), ne(li, v), ne(bo, ie), $(ee))
    if (ee.length) {
      const _ = t.exposed || (t.exposed = {});
      ee.forEach((C) => {
        Object.defineProperty(_, C, {
          get: () => s[C],
          set: (B) => s[C] = B
        });
      });
    } else t.exposed || (t.exposed = {});
  A && t.render === Ne && (t.render = A), be != null && (t.inheritAttrs = be), Fe && (t.components = Fe), et && (t.directives = et), ie && Dn(t);
}
function Eo(t, e, s = Ne) {
  $(t) && (t = zs(t));
  for (const i in t) {
    const n = t[i];
    let r;
    J(n) ? "default" in n ? r = Xt(
      n.from || i,
      n.default,
      !0
    ) : r = Xt(n.from || i) : r = Xt(n), ce(r) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : e[i] = r;
  }
}
function Ti(t, e, s) {
  je(
    $(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    s
  );
}
function In(t, e, s, i) {
  let n = i.includes(".") ? Xn(s, i) : () => s[i];
  if (te(t)) {
    const r = e[t];
    F(r) && Je(n, r);
  } else if (F(t))
    Je(n, t.bind(s));
  else if (J(t))
    if ($(t))
      t.forEach((r) => In(r, e, s, i));
    else {
      const r = F(t.handler) ? t.handler.bind(s) : e[t.handler];
      F(r) && Je(n, r, t);
    }
}
function Nn(t) {
  const e = t.type, { mixins: s, extends: i } = e, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = t.appContext, l = r.get(e);
  let a;
  return l ? a = l : !n.length && !s && !i ? a = e : (a = {}, n.length && n.forEach(
    (d) => ns(a, d, o, !0)
  ), ns(a, e, o)), J(e) && r.set(e, a), a;
}
function ns(t, e, s, i = !1) {
  const { mixins: n, extends: r } = e;
  r && ns(t, r, s, !0), n && n.forEach(
    (o) => ns(t, o, s, !0)
  );
  for (const o in e)
    if (!(i && o === "expose")) {
      const l = To[o] || s && s[o];
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const To = {
  data: Ri,
  props: Pi,
  emits: Pi,
  // objects
  methods: St,
  computed: St,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: St,
  directives: St,
  // watch
  watch: Po,
  // provide / inject
  provide: Ri,
  inject: Ro
};
function Ri(t, e) {
  return e ? t ? function() {
    return se(
      F(t) ? t.call(this, this) : t,
      F(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Ro(t, e) {
  return St(zs(t), zs(e));
}
function zs(t) {
  if ($(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++)
      e[t[s]] = t[s];
    return e;
  }
  return t;
}
function de(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function St(t, e) {
  return t ? se(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Pi(t, e) {
  return t ? $(t) && $(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : se(
    /* @__PURE__ */ Object.create(null),
    Ei(t),
    Ei(e ?? {})
  ) : e;
}
function Po(t, e) {
  if (!t) return e;
  if (!e) return t;
  const s = se(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    s[i] = de(t[i], e[i]);
  return s;
}
function Wn() {
  return {
    app: null,
    config: {
      isNativeTag: mr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Mo = 0;
function Ao(t, e) {
  return function(i, n = null) {
    F(i) || (i = se({}, i)), n != null && !J(n) && (n = null);
    const r = Wn(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Mo++,
      _component: i,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: dl,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && F(c.install) ? (o.add(c), c.install(d, ...h)) : F(c) && (o.add(c), c(d, ...h))), d;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), d;
      },
      component(c, h) {
        return h ? (r.components[c] = h, d) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, d) : r.directives[c];
      },
      mount(c, h, p) {
        if (!a) {
          const g = d._ceVNode || Pe(i, n);
          return g.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), t(g, c, p), a = !0, d._container = c, c.__vue_app__ = d, _s(g.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (je(
          l,
          d._instance,
          16
        ), t(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, d;
      },
      runWithContext(c) {
        const h = pt;
        pt = d;
        try {
          return c();
        } finally {
          pt = h;
        }
      }
    };
    return d;
  };
}
let pt = null;
function Oo(t, e) {
  if (pe) {
    let s = pe.provides;
    const i = pe.parent && pe.parent.provides;
    i === s && (s = pe.provides = Object.create(i)), s[t] = e;
  }
}
function Xt(t, e, s = !1) {
  const i = pe || Te;
  if (i || pt) {
    let n = pt ? pt._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return s && F(e) ? e.call(i && i.proxy) : e;
  }
}
const jn = {}, Fn = () => Object.create(jn), Hn = (t) => Object.getPrototypeOf(t) === jn;
function Do(t, e, s, i = !1) {
  const n = {}, r = Fn();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), zn(t, e, n, r);
  for (const o in t.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? t.props = i ? n : Yr(n) : t.type.props ? t.props = n : t.props = r, t.attrs = r;
}
function Lo(t, e, s, i) {
  const {
    props: n,
    attrs: r,
    vnode: { patchFlag: o }
  } = t, l = K(n), [a] = t.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = t.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let p = c[h];
        if (bs(t.emitsOptions, p))
          continue;
        const g = e[p];
        if (a)
          if (U(r, p))
            g !== r[p] && (r[p] = g, d = !0);
          else {
            const S = Me(p);
            n[S] = Bs(
              a,
              l,
              S,
              g,
              t,
              !1
            );
          }
        else
          g !== r[p] && (r[p] = g, d = !0);
      }
    }
  } else {
    zn(t, e, n, r) && (d = !0);
    let c;
    for (const h in l)
      (!e || // for camelCase
      !U(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ee(h)) === h || !U(e, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (n[h] = Bs(
        a,
        l,
        h,
        void 0,
        t,
        !0
      )) : delete n[h]);
    if (r !== l)
      for (const h in r)
        (!e || !U(e, h)) && (delete r[h], d = !0);
  }
  d && Be(t.attrs, "set", "");
}
function zn(t, e, s, i) {
  const [n, r] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (Tt(a))
        continue;
      const d = e[a];
      let c;
      n && U(n, c = Me(a)) ? !r || !r.includes(c) ? s[c] = d : (l || (l = {}))[c] = d : bs(t.emitsOptions, a) || (!(a in i) || d !== i[a]) && (i[a] = d, o = !0);
    }
  if (r) {
    const a = K(s), d = l || G;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Bs(
        n,
        a,
        h,
        d[h],
        t,
        !U(d, h)
      );
    }
  }
  return o;
}
function Bs(t, e, s, i, n, r) {
  const o = t[s];
  if (o != null) {
    const l = U(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && F(a)) {
        const { propsDefaults: d } = n;
        if (s in d)
          i = d[s];
        else {
          const c = Ht(n);
          i = d[s] = a.call(
            null,
            e
          ), c();
        }
      } else
        i = a;
      n.ce && n.ce._setProp(s, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Ee(s)) && (i = !0));
  }
  return i;
}
const ko = /* @__PURE__ */ new WeakMap();
function Bn(t, e, s = !1) {
  const i = s ? ko : e.propsCache, n = i.get(t);
  if (n)
    return n;
  const r = t.props, o = {}, l = [];
  let a = !1;
  if (!F(t)) {
    const c = (h) => {
      a = !0;
      const [p, g] = Bn(h, e, !0);
      se(o, p), g && l.push(...g);
    };
    !s && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  if (!r && !a)
    return J(t) && i.set(t, ut), ut;
  if ($(r))
    for (let c = 0; c < r.length; c++) {
      const h = Me(r[c]);
      Mi(h) && (o[h] = G);
    }
  else if (r)
    for (const c in r) {
      const h = Me(c);
      if (Mi(h)) {
        const p = r[c], g = o[h] = $(p) || F(p) ? { type: p } : se({}, p), S = g.type;
        let O = !1, I = !0;
        if ($(S))
          for (let D = 0; D < S.length; ++D) {
            const N = S[D], M = F(N) && N.name;
            if (M === "Boolean") {
              O = !0;
              break;
            } else M === "String" && (I = !1);
          }
        else
          O = F(S) && S.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = O, g[
          1
          /* shouldCastTrue */
        ] = I, (O || U(g, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return J(t) && i.set(t, d), d;
}
function Mi(t) {
  return t[0] !== "$" && !Tt(t);
}
const ai = (t) => t[0] === "_" || t === "$stable", ci = (t) => $(t) ? t.map(Ie) : [Ie(t)], $o = (t, e, s) => {
  if (e._n)
    return e;
  const i = lo((...n) => ci(e(...n)), s);
  return i._c = !1, i;
}, Un = (t, e, s) => {
  const i = t._ctx;
  for (const n in t) {
    if (ai(n)) continue;
    const r = t[n];
    if (F(r))
      e[n] = $o(n, r, i);
    else if (r != null) {
      const o = ci(r);
      e[n] = () => o;
    }
  }
}, Vn = (t, e) => {
  const s = ci(e);
  t.slots.default = () => s;
}, Kn = (t, e, s) => {
  for (const i in e)
    (s || !ai(i)) && (t[i] = e[i]);
}, Io = (t, e, s) => {
  const i = t.slots = Fn();
  if (t.vnode.shapeFlag & 32) {
    const n = e.__;
    n && ks(i, "__", n, !0);
    const r = e._;
    r ? (Kn(i, e, s), s && ks(i, "_", r, !0)) : Un(e, i);
  } else e && Vn(t, e);
}, No = (t, e, s) => {
  const { vnode: i, slots: n } = t;
  let r = !0, o = G;
  if (i.shapeFlag & 32) {
    const l = e._;
    l ? s && l === 1 ? r = !1 : Kn(n, e, s) : (r = !e.$stable, Un(e, n)), o = e;
  } else e && (Vn(t, e), o = { default: 1 });
  if (r)
    for (const l in n)
      !ai(l) && o[l] == null && delete n[l];
}, we = Jo;
function Wo(t) {
  return jo(t);
}
function jo(t, e) {
  const s = ds();
  s.__VUE__ = !0;
  const {
    insert: i,
    remove: n,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: c,
    parentNode: h,
    nextSibling: p,
    setScopeId: g = Ne,
    insertStaticContent: S
  } = t, O = (u, f, m, x = null, b = null, y = null, R = void 0, T = null, E = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !wt(u, f) && (x = Ut(u), ue(u, b, y, !0), u = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: w, ref: k, shapeFlag: P } = f;
    switch (w) {
      case ys:
        I(u, f, m, x);
        break;
      case Qe:
        D(u, f, m, x);
        break;
      case Ms:
        u == null && N(f, m, x, R);
        break;
      case Se:
        Fe(
          u,
          f,
          m,
          x,
          b,
          y,
          R,
          T,
          E
        );
        break;
      default:
        P & 1 ? A(
          u,
          f,
          m,
          x,
          b,
          y,
          R,
          T,
          E
        ) : P & 6 ? et(
          u,
          f,
          m,
          x,
          b,
          y,
          R,
          T,
          E
        ) : (P & 64 || P & 128) && w.process(
          u,
          f,
          m,
          x,
          b,
          y,
          R,
          T,
          E,
          yt
        );
    }
    k != null && b ? Mt(k, u && u.ref, y, f || u, !f) : k == null && u && u.ref != null && Mt(u.ref, null, y, u, !0);
  }, I = (u, f, m, x) => {
    if (u == null)
      i(
        f.el = l(f.children),
        m,
        x
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && d(b, f.children);
    }
  }, D = (u, f, m, x) => {
    u == null ? i(
      f.el = a(f.children || ""),
      m,
      x
    ) : f.el = u.el;
  }, N = (u, f, m, x) => {
    [u.el, u.anchor] = S(
      u.children,
      f,
      m,
      x,
      u.el,
      u.anchor
    );
  }, M = ({ el: u, anchor: f }, m, x) => {
    let b;
    for (; u && u !== f; )
      b = p(u), i(u, m, x), u = b;
    i(f, m, x);
  }, v = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, A = (u, f, m, x, b, y, R, T, E) => {
    f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), u == null ? z(
      f,
      m,
      x,
      b,
      y,
      R,
      T,
      E
    ) : ie(
      u,
      f,
      b,
      y,
      R,
      T,
      E
    );
  }, z = (u, f, m, x, b, y, R, T) => {
    let E, w;
    const { props: k, shapeFlag: P, transition: L, dirs: j } = u;
    if (E = u.el = o(
      u.type,
      y,
      k && k.is,
      k
    ), P & 8 ? c(E, u.children) : P & 16 && Z(
      u.children,
      E,
      null,
      x,
      b,
      Ps(u, y),
      R,
      T
    ), j && tt(u, null, x, "created"), V(E, u, u.scopeId, R, x), k) {
      for (const Y in k)
        Y !== "value" && !Tt(Y) && r(E, Y, null, k[Y], y, x);
      "value" in k && r(E, "value", null, k.value, y), (w = k.onVnodeBeforeMount) && ke(w, x, u);
    }
    j && tt(u, null, x, "beforeMount");
    const H = Fo(b, L);
    H && L.beforeEnter(E), i(E, f, m), ((w = k && k.onVnodeMounted) || H || j) && we(() => {
      w && ke(w, x, u), H && L.enter(E), j && tt(u, null, x, "mounted");
    }, b);
  }, V = (u, f, m, x, b) => {
    if (m && g(u, m), x)
      for (let y = 0; y < x.length; y++)
        g(u, x[y]);
    if (b) {
      let y = b.subTree;
      if (f === y || Zn(y.type) && (y.ssContent === f || y.ssFallback === f)) {
        const R = b.vnode;
        V(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          b.parent
        );
      }
    }
  }, Z = (u, f, m, x, b, y, R, T, E = 0) => {
    for (let w = E; w < u.length; w++) {
      const k = u[w] = T ? Ye(u[w]) : Ie(u[w]);
      O(
        null,
        k,
        f,
        m,
        x,
        b,
        y,
        R,
        T
      );
    }
  }, ie = (u, f, m, x, b, y, R) => {
    const T = f.el = u.el;
    let { patchFlag: E, dynamicChildren: w, dirs: k } = f;
    E |= u.patchFlag & 16;
    const P = u.props || G, L = f.props || G;
    let j;
    if (m && st(m, !1), (j = L.onVnodeBeforeUpdate) && ke(j, m, f, u), k && tt(f, u, m, "beforeUpdate"), m && st(m, !0), (P.innerHTML && L.innerHTML == null || P.textContent && L.textContent == null) && c(T, ""), w ? ee(
      u.dynamicChildren,
      w,
      T,
      m,
      x,
      Ps(f, b),
      y
    ) : R || C(
      u,
      f,
      T,
      null,
      m,
      x,
      Ps(f, b),
      y,
      !1
    ), E > 0) {
      if (E & 16)
        be(T, P, L, m, b);
      else if (E & 2 && P.class !== L.class && r(T, "class", null, L.class, b), E & 4 && r(T, "style", P.style, L.style, b), E & 8) {
        const H = f.dynamicProps;
        for (let Y = 0; Y < H.length; Y++) {
          const q = H[Y], ge = P[q], me = L[q];
          (me !== ge || q === "value") && r(T, q, ge, me, b, m);
        }
      }
      E & 1 && u.children !== f.children && c(T, f.children);
    } else !R && w == null && be(T, P, L, m, b);
    ((j = L.onVnodeUpdated) || k) && we(() => {
      j && ke(j, m, f, u), k && tt(f, u, m, "updated");
    }, x);
  }, ee = (u, f, m, x, b, y, R) => {
    for (let T = 0; T < f.length; T++) {
      const E = u[T], w = f[T], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wt(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      O(
        E,
        w,
        k,
        null,
        x,
        b,
        y,
        R,
        !0
      );
    }
  }, be = (u, f, m, x, b) => {
    if (f !== m) {
      if (f !== G)
        for (const y in f)
          !Tt(y) && !(y in m) && r(
            u,
            y,
            f[y],
            null,
            b,
            x
          );
      for (const y in m) {
        if (Tt(y)) continue;
        const R = m[y], T = f[y];
        R !== T && y !== "value" && r(u, y, T, R, b, x);
      }
      "value" in m && r(u, "value", f.value, m.value, b);
    }
  }, Fe = (u, f, m, x, b, y, R, T, E) => {
    const w = f.el = u ? u.el : l(""), k = f.anchor = u ? u.anchor : l("");
    let { patchFlag: P, dynamicChildren: L, slotScopeIds: j } = f;
    j && (T = T ? T.concat(j) : j), u == null ? (i(w, m, x), i(k, m, x), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      k,
      b,
      y,
      R,
      T,
      E
    )) : P > 0 && P & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (ee(
      u.dynamicChildren,
      L,
      m,
      b,
      y,
      R,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && qn(
      u,
      f,
      !0
      /* shallow */
    )) : C(
      u,
      f,
      m,
      k,
      b,
      y,
      R,
      T,
      E
    );
  }, et = (u, f, m, x, b, y, R, T, E) => {
    f.slotScopeIds = T, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      m,
      x,
      R,
      E
    ) : lt(
      f,
      m,
      x,
      b,
      y,
      R,
      E
    ) : Bt(u, f, E);
  }, lt = (u, f, m, x, b, y, R) => {
    const T = u.component = rl(
      u,
      x,
      b
    );
    if (Ln(u) && (T.ctx.renderer = yt), ol(T, !1, R), T.asyncDep) {
      if (b && b.registerDep(T, ne, R), !u.el) {
        const E = T.subTree = Pe(Qe);
        D(null, E, f, m);
      }
    } else
      ne(
        T,
        u,
        f,
        m,
        b,
        y,
        R
      );
  }, Bt = (u, f, m) => {
    const x = f.component = u.component;
    if (Yo(u, f, m))
      if (x.asyncDep && !x.asyncResolved) {
        _(x, f, m);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = u.el, x.vnode = f;
  }, ne = (u, f, m, x, b, y, R) => {
    const T = () => {
      if (u.isMounted) {
        let { next: P, bu: L, u: j, parent: H, vnode: Y } = u;
        {
          const De = Gn(u);
          if (De) {
            P && (P.el = Y.el, _(u, P, R)), De.asyncDep.then(() => {
              u.isUnmounted || T();
            });
            return;
          }
        }
        let q = P, ge;
        st(u, !1), P ? (P.el = Y.el, _(u, P, R)) : P = Y, L && Yt(L), (ge = P.props && P.props.onVnodeBeforeUpdate) && ke(ge, H, P, Y), st(u, !0);
        const me = Oi(u), Oe = u.subTree;
        u.subTree = me, O(
          Oe,
          me,
          // parent may have changed if it's in a teleport
          h(Oe.el),
          // anchor may have changed if it's in a fragment
          Ut(Oe),
          u,
          b,
          y
        ), P.el = me.el, q === null && Xo(u, me.el), j && we(j, b), (ge = P.props && P.props.onVnodeUpdated) && we(
          () => ke(ge, H, P, Y),
          b
        );
      } else {
        let P;
        const { el: L, props: j } = f, { bm: H, m: Y, parent: q, root: ge, type: me } = u, Oe = At(f);
        st(u, !1), H && Yt(H), !Oe && (P = j && j.onVnodeBeforeMount) && ke(P, q, f), st(u, !0);
        {
          ge.ce && // @ts-expect-error _def is private
          ge.ce._def.shadowRoot !== !1 && ge.ce._injectChildStyle(me);
          const De = u.subTree = Oi(u);
          O(
            null,
            De,
            m,
            x,
            u,
            b,
            y
          ), f.el = De.el;
        }
        if (Y && we(Y, b), !Oe && (P = j && j.onVnodeMounted)) {
          const De = f;
          we(
            () => ke(P, q, De),
            b
          );
        }
        (f.shapeFlag & 256 || q && At(q.vnode) && q.vnode.shapeFlag & 256) && u.a && we(u.a, b), u.isMounted = !0, f = m = x = null;
      }
    };
    u.scope.on();
    const E = u.effect = new un(T);
    u.scope.off();
    const w = u.update = E.run.bind(E), k = u.job = E.runIfDirty.bind(E);
    k.i = u, k.id = u.uid, E.scheduler = () => ri(k), st(u, !0), w();
  }, _ = (u, f, m) => {
    f.component = u;
    const x = u.vnode.props;
    u.vnode = f, u.next = null, Lo(u, f.props, x, m), No(u, f.children, m), Ve(), Ci(u), Ke();
  }, C = (u, f, m, x, b, y, R, T, E = !1) => {
    const w = u && u.children, k = u ? u.shapeFlag : 0, P = f.children, { patchFlag: L, shapeFlag: j } = f;
    if (L > 0) {
      if (L & 128) {
        ye(
          w,
          P,
          m,
          x,
          b,
          y,
          R,
          T,
          E
        );
        return;
      } else if (L & 256) {
        B(
          w,
          P,
          m,
          x,
          b,
          y,
          R,
          T,
          E
        );
        return;
      }
    }
    j & 8 ? (k & 16 && bt(w, b, y), P !== w && c(m, P)) : k & 16 ? j & 16 ? ye(
      w,
      P,
      m,
      x,
      b,
      y,
      R,
      T,
      E
    ) : bt(w, b, y, !0) : (k & 8 && c(m, ""), j & 16 && Z(
      P,
      m,
      x,
      b,
      y,
      R,
      T,
      E
    ));
  }, B = (u, f, m, x, b, y, R, T, E) => {
    u = u || ut, f = f || ut;
    const w = u.length, k = f.length, P = Math.min(w, k);
    let L;
    for (L = 0; L < P; L++) {
      const j = f[L] = E ? Ye(f[L]) : Ie(f[L]);
      O(
        u[L],
        j,
        m,
        null,
        b,
        y,
        R,
        T,
        E
      );
    }
    w > k ? bt(
      u,
      b,
      y,
      !0,
      !1,
      P
    ) : Z(
      f,
      m,
      x,
      b,
      y,
      R,
      T,
      E,
      P
    );
  }, ye = (u, f, m, x, b, y, R, T, E) => {
    let w = 0;
    const k = f.length;
    let P = u.length - 1, L = k - 1;
    for (; w <= P && w <= L; ) {
      const j = u[w], H = f[w] = E ? Ye(f[w]) : Ie(f[w]);
      if (wt(j, H))
        O(
          j,
          H,
          m,
          null,
          b,
          y,
          R,
          T,
          E
        );
      else
        break;
      w++;
    }
    for (; w <= P && w <= L; ) {
      const j = u[P], H = f[L] = E ? Ye(f[L]) : Ie(f[L]);
      if (wt(j, H))
        O(
          j,
          H,
          m,
          null,
          b,
          y,
          R,
          T,
          E
        );
      else
        break;
      P--, L--;
    }
    if (w > P) {
      if (w <= L) {
        const j = L + 1, H = j < k ? f[j].el : x;
        for (; w <= L; )
          O(
            null,
            f[w] = E ? Ye(f[w]) : Ie(f[w]),
            m,
            H,
            b,
            y,
            R,
            T,
            E
          ), w++;
      }
    } else if (w > L)
      for (; w <= P; )
        ue(u[w], b, y, !0), w++;
    else {
      const j = w, H = w, Y = /* @__PURE__ */ new Map();
      for (w = H; w <= L; w++) {
        const xe = f[w] = E ? Ye(f[w]) : Ie(f[w]);
        xe.key != null && Y.set(xe.key, w);
      }
      let q, ge = 0;
      const me = L - H + 1;
      let Oe = !1, De = 0;
      const _t = new Array(me);
      for (w = 0; w < me; w++) _t[w] = 0;
      for (w = j; w <= P; w++) {
        const xe = u[w];
        if (ge >= me) {
          ue(xe, b, y, !0);
          continue;
        }
        let Le;
        if (xe.key != null)
          Le = Y.get(xe.key);
        else
          for (q = H; q <= L; q++)
            if (_t[q - H] === 0 && wt(xe, f[q])) {
              Le = q;
              break;
            }
        Le === void 0 ? ue(xe, b, y, !0) : (_t[Le - H] = w + 1, Le >= De ? De = Le : Oe = !0, O(
          xe,
          f[Le],
          m,
          null,
          b,
          y,
          R,
          T,
          E
        ), ge++);
      }
      const mi = Oe ? Ho(_t) : ut;
      for (q = mi.length - 1, w = me - 1; w >= 0; w--) {
        const xe = H + w, Le = f[xe], vi = xe + 1 < k ? f[xe + 1].el : x;
        _t[w] === 0 ? O(
          null,
          Le,
          m,
          vi,
          b,
          y,
          R,
          T,
          E
        ) : Oe && (q < 0 || w !== mi[q] ? _e(Le, m, vi, 2) : q--);
      }
    }
  }, _e = (u, f, m, x, b = null) => {
    const { el: y, type: R, transition: T, children: E, shapeFlag: w } = u;
    if (w & 6) {
      _e(u.component.subTree, f, m, x);
      return;
    }
    if (w & 128) {
      u.suspense.move(f, m, x);
      return;
    }
    if (w & 64) {
      R.move(u, f, m, yt);
      return;
    }
    if (R === Se) {
      i(y, f, m);
      for (let P = 0; P < E.length; P++)
        _e(E[P], f, m, x);
      i(u.anchor, f, m);
      return;
    }
    if (R === Ms) {
      M(u, f, m);
      return;
    }
    if (x !== 2 && w & 1 && T)
      if (x === 0)
        T.beforeEnter(y), i(y, f, m), we(() => T.enter(y), b);
      else {
        const { leave: P, delayLeave: L, afterLeave: j } = T, H = () => {
          u.ctx.isUnmounted ? n(y) : i(y, f, m);
        }, Y = () => {
          P(y, () => {
            H(), j && j();
          });
        };
        L ? L(y, H, Y) : Y();
      }
    else
      i(y, f, m);
  }, ue = (u, f, m, x = !1, b = !1) => {
    const {
      type: y,
      props: R,
      ref: T,
      children: E,
      dynamicChildren: w,
      shapeFlag: k,
      patchFlag: P,
      dirs: L,
      cacheIndex: j
    } = u;
    if (P === -2 && (b = !1), T != null && (Ve(), Mt(T, null, m, u, !0), Ke()), j != null && (f.renderCache[j] = void 0), k & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const H = k & 1 && L, Y = !At(u);
    let q;
    if (Y && (q = R && R.onVnodeBeforeUnmount) && ke(q, f, u), k & 6)
      gr(u.component, m, x);
    else {
      if (k & 128) {
        u.suspense.unmount(m, x);
        return;
      }
      H && tt(u, null, f, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        f,
        m,
        yt,
        x
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Se || P > 0 && P & 64) ? bt(
        w,
        f,
        m,
        !1,
        !0
      ) : (y === Se && P & 384 || !b && k & 16) && bt(E, f, m), x && pi(u);
    }
    (Y && (q = R && R.onVnodeUnmounted) || H) && we(() => {
      q && ke(q, f, u), H && tt(u, null, f, "unmounted");
    }, m);
  }, pi = (u) => {
    const { type: f, el: m, anchor: x, transition: b } = u;
    if (f === Se) {
      pr(m, x);
      return;
    }
    if (f === Ms) {
      v(u);
      return;
    }
    const y = () => {
      n(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: R, delayLeave: T } = b, E = () => R(m, y);
      T ? T(u.el, y, E) : E();
    } else
      y();
  }, pr = (u, f) => {
    let m;
    for (; u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, gr = (u, f, m) => {
    const {
      bum: x,
      scope: b,
      job: y,
      subTree: R,
      um: T,
      m: E,
      a: w,
      parent: k,
      slots: { __: P }
    } = u;
    Ai(E), Ai(w), x && Yt(x), k && $(P) && P.forEach((L) => {
      k.renderCache[L] = void 0;
    }), b.stop(), y && (y.flags |= 8, ue(R, u, f, m)), T && we(T, f), we(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, bt = (u, f, m, x = !1, b = !1, y = 0) => {
    for (let R = y; R < u.length; R++)
      ue(u[R], f, m, x, b);
  }, Ut = (u) => {
    if (u.shapeFlag & 6)
      return Ut(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = p(u.anchor || u.el), m = f && f[ao];
    return m ? p(m) : f;
  };
  let xs = !1;
  const gi = (u, f, m) => {
    u == null ? f._vnode && ue(f._vnode, null, null, !0) : O(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, xs || (xs = !0, Ci(), Mn(), xs = !1);
  }, yt = {
    p: O,
    um: ue,
    m: _e,
    r: pi,
    mt: lt,
    mc: Z,
    pc: C,
    pbc: ee,
    n: Ut,
    o: t
  };
  return {
    render: gi,
    hydrate: void 0,
    createApp: Ao(gi)
  };
}
function Ps({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function st({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Fo(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function qn(t, e, s = !1) {
  const i = t.children, n = e.children;
  if ($(i) && $(n))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = n[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = n[r] = Ye(n[r]), l.el = o.el), !s && l.patchFlag !== -2 && qn(o, l)), l.type === ys && (l.el = o.el), l.type === Qe && !l.el && (l.el = o.el);
    }
}
function Ho(t) {
  const e = t.slice(), s = [0];
  let i, n, r, o, l;
  const a = t.length;
  for (i = 0; i < a; i++) {
    const d = t[i];
    if (d !== 0) {
      if (n = s[s.length - 1], t[n] < d) {
        e[i] = n, s.push(i);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, t[s[l]] < d ? r = l + 1 : o = l;
      d < t[s[r]] && (r > 0 && (e[i] = s[r - 1]), s[r] = i);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = e[o];
  return s;
}
function Gn(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Gn(e);
}
function Ai(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
const zo = Symbol.for("v-scx"), Bo = () => Xt(zo);
function Je(t, e, s) {
  return Yn(t, e, s);
}
function Yn(t, e, s = G) {
  const { immediate: i, deep: n, flush: r, once: o } = s, l = se({}, s), a = e && i || !e && r !== "post";
  let d;
  if (Nt) {
    if (r === "sync") {
      const g = Bo();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Ne, g.resume = Ne, g.pause = Ne, g;
    }
  }
  const c = pe;
  l.call = (g, S, O) => je(g, c, S, O);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    we(g, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, S) => {
    S ? g() : ri(g);
  }), l.augmentJob = (g) => {
    e && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const p = io(t, e, l);
  return Nt && (d ? d.push(p) : a && p()), p;
}
function Uo(t, e, s) {
  const i = this.proxy, n = te(t) ? t.includes(".") ? Xn(i, t) : () => i[t] : t.bind(i, i);
  let r;
  F(e) ? r = e : (r = e.handler, s = e);
  const o = Ht(this), l = Yn(n, r.bind(i), s);
  return o(), l;
}
function Xn(t, e) {
  const s = e.split(".");
  return () => {
    let i = t;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const Vo = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Me(e)}Modifiers`] || t[`${Ee(e)}Modifiers`];
function Ko(t, e, ...s) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || G;
  let n = s;
  const r = e.startsWith("update:"), o = r && Vo(i, e.slice(7));
  o && (o.trim && (n = s.map((c) => te(c) ? c.trim() : c)), o.number && (n = s.map(xr)));
  let l, a = i[l = ws(e)] || // also try camelCase event handler (#2249)
  i[l = ws(Me(e))];
  !a && r && (a = i[l = ws(Ee(e))]), a && je(
    a,
    t,
    6,
    n
  );
  const d = i[l + "Once"];
  if (d) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, je(
      d,
      t,
      6,
      n
    );
  }
}
function Jn(t, e, s = !1) {
  const i = e.emitsCache, n = i.get(t);
  if (n !== void 0)
    return n;
  const r = t.emits;
  let o = {}, l = !1;
  if (!F(t)) {
    const a = (d) => {
      const c = Jn(d, e, !0);
      c && (l = !0, se(o, c));
    };
    !s && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
  }
  return !r && !l ? (J(t) && i.set(t, null), null) : ($(r) ? r.forEach((a) => o[a] = null) : se(o, r), J(t) && i.set(t, o), o);
}
function bs(t, e) {
  return !t || !ls(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), U(t, e[0].toLowerCase() + e.slice(1)) || U(t, Ee(e)) || U(t, e));
}
function Oi(t) {
  const {
    type: e,
    vnode: s,
    proxy: i,
    withProxy: n,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: d,
    renderCache: c,
    props: h,
    data: p,
    setupState: g,
    ctx: S,
    inheritAttrs: O
  } = t, I = is(t);
  let D, N;
  try {
    if (s.shapeFlag & 4) {
      const v = n || i, A = v;
      D = Ie(
        d.call(
          A,
          v,
          c,
          h,
          g,
          p,
          S
        )
      ), N = l;
    } else {
      const v = e;
      D = Ie(
        v.length > 1 ? v(
          h,
          { attrs: l, slots: o, emit: a }
        ) : v(
          h,
          null
        )
      ), N = e.props ? l : qo(l);
    }
  } catch (v) {
    Dt.length = 0, gs(v, t, 1), D = Pe(Qe);
  }
  let M = D;
  if (N && O !== !1) {
    const v = Object.keys(N), { shapeFlag: A } = M;
    v.length && A & 7 && (r && v.some(qs) && (N = Go(
      N,
      r
    )), M = mt(M, N, !1, !0));
  }
  return s.dirs && (M = mt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(s.dirs) : s.dirs), s.transition && oi(M, s.transition), D = M, is(I), D;
}
const qo = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || ls(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Go = (t, e) => {
  const s = {};
  for (const i in t)
    (!qs(i) || !(i.slice(9) in e)) && (s[i] = t[i]);
  return s;
};
function Yo(t, e, s) {
  const { props: i, children: n, component: r } = t, { props: o, children: l, patchFlag: a } = e, d = r.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Di(i, o, d) : !!o;
    if (a & 8) {
      const c = e.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (o[p] !== i[p] && !bs(d, p))
          return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Di(i, o, d) : !0 : !!o;
  return !1;
}
function Di(t, e, s) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    if (e[r] !== t[r] && !bs(s, r))
      return !0;
  }
  return !1;
}
function Xo({ vnode: t, parent: e }, s) {
  for (; e; ) {
    const i = e.subTree;
    if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t)
      (t = e.vnode).el = s, e = e.parent;
    else
      break;
  }
}
const Zn = (t) => t.__isSuspense;
function Jo(t, e) {
  e && e.pendingBranch ? $(t) ? e.effects.push(...t) : e.effects.push(t) : oo(t);
}
const Se = Symbol.for("v-fgt"), ys = Symbol.for("v-txt"), Qe = Symbol.for("v-cmt"), Ms = Symbol.for("v-stc"), Dt = [];
let Ce = null;
function le(t = !1) {
  Dt.push(Ce = t ? null : []);
}
function Zo() {
  Dt.pop(), Ce = Dt[Dt.length - 1] || null;
}
let It = 1;
function Li(t, e = !1) {
  It += t, t < 0 && Ce && e && (Ce.hasOnce = !0);
}
function Qn(t) {
  return t.dynamicChildren = It > 0 ? Ce || ut : null, Zo(), It > 0 && Ce && Ce.push(t), t;
}
function fe(t, e, s, i, n, r) {
  return Qn(
    W(
      t,
      e,
      s,
      i,
      n,
      r,
      !0
    )
  );
}
function Qo(t, e, s, i, n) {
  return Qn(
    Pe(
      t,
      e,
      s,
      i,
      n,
      !0
    )
  );
}
function er(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function wt(t, e) {
  return t.type === e.type && t.key === e.key;
}
const tr = ({ key: t }) => t ?? null, Jt = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? te(t) || ce(t) || F(t) ? { i: Te, r: t, k: e, f: !!s } : t : null);
function W(t, e = null, s = null, i = 0, n = null, r = t === Se ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && tr(e),
    ref: e && Jt(e),
    scopeId: On,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Te
  };
  return l ? (ui(a, s), r & 128 && t.normalize(a)) : s && (a.shapeFlag |= te(s) ? 8 : 16), It > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ce.push(a), a;
}
const Pe = el;
function el(t, e = null, s = null, i = 0, n = null, r = !1) {
  if ((!t || t === wo) && (t = Qe), er(t)) {
    const l = mt(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && ui(l, s), It > 0 && !r && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(t)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (ul(t) && (t = t.__vccOpts), e) {
    e = tl(e);
    let { class: l, style: a } = e;
    l && !te(l) && (e.class = nt(l)), J(a) && (ii(a) && !$(a) && (a = se({}, a)), e.style = fs(a));
  }
  const o = te(t) ? 1 : Zn(t) ? 128 : co(t) ? 64 : J(t) ? 4 : F(t) ? 2 : 0;
  return W(
    t,
    e,
    s,
    i,
    n,
    o,
    r,
    !0
  );
}
function tl(t) {
  return t ? ii(t) || Hn(t) ? se({}, t) : t : null;
}
function mt(t, e, s = !1, i = !1) {
  const { props: n, ref: r, patchFlag: o, children: l, transition: a } = t, d = e ? sl(n || {}, e) : n, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: d,
    key: d && tr(d),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? $(r) ? r.concat(Jt(e)) : [r, Jt(e)] : Jt(e)
    ) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && mt(t.ssContent),
    ssFallback: t.ssFallback && mt(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return a && i && oi(
    c,
    a.clone(c)
  ), c;
}
function sr(t = " ", e = 0) {
  return Pe(ys, null, t, e);
}
function gt(t = "", e = !1) {
  return e ? (le(), Qo(Qe, null, t)) : Pe(Qe, null, t);
}
function Ie(t) {
  return t == null || typeof t == "boolean" ? Pe(Qe) : $(t) ? Pe(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : er(t) ? Ye(t) : Pe(ys, null, String(t));
}
function Ye(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : mt(t);
}
function ui(t, e) {
  let s = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if ($(e))
    s = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), ui(t, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = e._;
      !n && !Hn(e) ? e._ctx = Te : n === 3 && Te && (Te.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else F(e) ? (e = { default: e, _ctx: Te }, s = 32) : (e = String(e), i & 64 ? (s = 16, e = [sr(e)]) : s = 8);
  t.children = e, t.shapeFlag |= s;
}
function sl(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    for (const n in i)
      if (n === "class")
        e.class !== i.class && (e.class = nt([e.class, i.class]));
      else if (n === "style")
        e.style = fs([e.style, i.style]);
      else if (ls(n)) {
        const r = e[n], o = i[n];
        o && r !== o && !($(r) && r.includes(o)) && (e[n] = r ? [].concat(r, o) : o);
      } else n !== "" && (e[n] = i[n]);
  }
  return e;
}
function ke(t, e, s, i = null) {
  je(t, e, 7, [
    s,
    i
  ]);
}
const il = Wn();
let nl = 0;
function rl(t, e, s) {
  const i = t.type, n = (e ? e.appContext : t.appContext) || il, r = {
    uid: nl++,
    vnode: t,
    type: i,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Mr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bn(i, n),
    emitsOptions: Jn(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = Ko.bind(null, r), t.ce && t.ce(r), r;
}
let pe = null, rs, Us;
{
  const t = ds(), e = (s, i) => {
    let n;
    return (n = t[s]) || (n = t[s] = []), n.push(i), (r) => {
      n.length > 1 ? n.forEach((o) => o(r)) : n[0](r);
    };
  };
  rs = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => pe = s
  ), Us = e(
    "__VUE_SSR_SETTERS__",
    (s) => Nt = s
  );
}
const Ht = (t) => {
  const e = pe;
  return rs(t), t.scope.on(), () => {
    t.scope.off(), rs(e);
  };
}, ki = () => {
  pe && pe.scope.off(), rs(null);
};
function ir(t) {
  return t.vnode.shapeFlag & 4;
}
let Nt = !1;
function ol(t, e = !1, s = !1) {
  e && Us(e);
  const { props: i, children: n } = t.vnode, r = ir(t);
  Do(t, i, r, e), Io(t, n, s || e);
  const o = r ? ll(t, e) : void 0;
  return e && Us(!1), o;
}
function ll(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Co);
  const { setup: i } = s;
  if (i) {
    Ve();
    const n = t.setupContext = i.length > 1 ? cl(t) : null, r = Ht(t), o = Ft(
      i,
      t,
      0,
      [
        t.props,
        n
      ]
    ), l = sn(o);
    if (Ke(), r(), (l || t.sp) && !At(t) && Dn(t), l) {
      if (o.then(ki, ki), e)
        return o.then((a) => {
          $i(t, a);
        }).catch((a) => {
          gs(a, t, 0);
        });
      t.asyncDep = o;
    } else
      $i(t, o);
  } else
    nr(t);
}
function $i(t, e, s) {
  F(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : J(e) && (t.setupState = Tn(e)), nr(t);
}
function nr(t, e, s) {
  const i = t.type;
  t.render || (t.render = i.render || Ne);
  {
    const n = Ht(t);
    Ve();
    try {
      So(t);
    } finally {
      Ke(), n();
    }
  }
}
const al = {
  get(t, e) {
    return ae(t, "get", ""), t[e];
  }
};
function cl(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, al),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function _s(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Tn(Xr(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in Ot)
        return Ot[s](t);
    },
    has(e, s) {
      return s in e || s in Ot;
    }
  })) : t.proxy;
}
function ul(t) {
  return F(t) && "__vccOpts" in t;
}
const rr = (t, e) => to(t, e, Nt), dl = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vs;
const Ii = typeof window < "u" && window.trustedTypes;
if (Ii)
  try {
    Vs = /* @__PURE__ */ Ii.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const or = Vs ? (t) => Vs.createHTML(t) : (t) => t, fl = "http://www.w3.org/2000/svg", hl = "http://www.w3.org/1998/Math/MathML", ze = typeof document < "u" ? document : null, Ni = ze && /* @__PURE__ */ ze.createElement("template"), pl = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, i) => {
    const n = e === "svg" ? ze.createElementNS(fl, t) : e === "mathml" ? ze.createElementNS(hl, t) : s ? ze.createElement(t, { is: s }) : ze.createElement(t);
    return t === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (t) => ze.createTextNode(t),
  createComment: (t) => ze.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ze.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, i, n, r) {
    const o = s ? s.previousSibling : e.lastChild;
    if (n && (n === r || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), s), !(n === r || !(n = n.nextSibling)); )
        ;
    else {
      Ni.innerHTML = or(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const l = Ni.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, gl = Symbol("_vtc");
function ml(t, e, s) {
  const i = t[gl];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const os = Symbol("_vod"), lr = Symbol("_vsh"), vl = {
  beforeMount(t, { value: e }, { transition: s }) {
    t[os] = t.style.display === "none" ? "" : t.style.display, s && e ? s.beforeEnter(t) : Ct(t, e);
  },
  mounted(t, { value: e }, { transition: s }) {
    s && e && s.enter(t);
  },
  updated(t, { value: e, oldValue: s }, { transition: i }) {
    !e != !s && (i ? e ? (i.beforeEnter(t), Ct(t, !0), i.enter(t)) : i.leave(t, () => {
      Ct(t, !1);
    }) : Ct(t, e));
  },
  beforeUnmount(t, { value: e }) {
    Ct(t, e);
  }
};
function Ct(t, e) {
  t.style.display = e ? t[os] : "none", t[lr] = !e;
}
const bl = Symbol(""), yl = /(^|;)\s*display\s*:/;
function _l(t, e, s) {
  const i = t.style, n = te(s);
  let r = !1;
  if (s && !n) {
    if (e)
      if (te(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Zt(i, l, "");
        }
      else
        for (const o in e)
          s[o] == null && Zt(i, o, "");
    for (const o in s)
      o === "display" && (r = !0), Zt(i, o, s[o]);
  } else if (n) {
    if (e !== s) {
      const o = i[bl];
      o && (s += ";" + o), i.cssText = s, r = yl.test(s);
    }
  } else e && t.removeAttribute("style");
  os in t && (t[os] = r ? i.display : "", t[lr] && (i.display = "none"));
}
const Wi = /\s*!important$/;
function Zt(t, e, s) {
  if ($(s))
    s.forEach((i) => Zt(t, e, i));
  else if (s == null && (s = ""), e.startsWith("--"))
    t.setProperty(e, s);
  else {
    const i = xl(t, e);
    Wi.test(s) ? t.setProperty(
      Ee(i),
      s.replace(Wi, ""),
      "important"
    ) : t[i] = s;
  }
}
const ji = ["Webkit", "Moz", "ms"], As = {};
function xl(t, e) {
  const s = As[e];
  if (s)
    return s;
  let i = Me(e);
  if (i !== "filter" && i in t)
    return As[e] = i;
  i = rn(i);
  for (let n = 0; n < ji.length; n++) {
    const r = ji[n] + i;
    if (r in t)
      return As[e] = r;
  }
  return e;
}
const Fi = "http://www.w3.org/1999/xlink";
function Hi(t, e, s, i, n, r = Rr(e)) {
  i && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(Fi, e.slice(6, e.length)) : t.setAttributeNS(Fi, e, s) : s == null || r && !on(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    r ? "" : We(s) ? String(s) : s
  );
}
function zi(t, e, s, i, n) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? or(s) : s);
    return;
  }
  const r = t.tagName;
  if (e === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? t.getAttribute("value") || "" : t.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in t)) && (t.value = a), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof t[e];
    l === "boolean" ? s = on(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(n || e);
}
function ar(t, e, s, i) {
  t.addEventListener(e, s, i);
}
function wl(t, e, s, i) {
  t.removeEventListener(e, s, i);
}
const Bi = Symbol("_vei");
function Cl(t, e, s, i, n = null) {
  const r = t[Bi] || (t[Bi] = {}), o = r[e];
  if (i && o)
    o.value = i;
  else {
    const [l, a] = Sl(e);
    if (i) {
      const d = r[e] = Rl(
        i,
        n
      );
      ar(t, l, d, a);
    } else o && (wl(t, l, o, a), r[e] = void 0);
  }
}
const Ui = /(?:Once|Passive|Capture)$/;
function Sl(t) {
  let e;
  if (Ui.test(t)) {
    e = {};
    let i;
    for (; i = t.match(Ui); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ee(t.slice(2)), e];
}
let Os = 0;
const El = /* @__PURE__ */ Promise.resolve(), Tl = () => Os || (El.then(() => Os = 0), Os = Date.now());
function Rl(t, e) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    je(
      Pl(i, s.value),
      e,
      5,
      [i]
    );
  };
  return s.value = t, s.attached = Tl(), s;
}
function Pl(t, e) {
  if ($(e)) {
    const s = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      s.call(t), t._stopped = !0;
    }, e.map(
      (i) => (n) => !n._stopped && i && i(n)
    );
  } else
    return e;
}
const Vi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Ml = (t, e, s, i, n, r) => {
  const o = n === "svg";
  e === "class" ? ml(t, i, o) : e === "style" ? _l(t, s, i) : ls(e) ? qs(e) || Cl(t, e, s, i, r) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Al(t, e, i, o)) ? (zi(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Hi(t, e, i, o, r, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !te(i)) ? zi(t, Me(e), i, r, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), Hi(t, e, i, o));
};
function Al(t, e, s, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Vi(e) && F(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = t.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Vi(e) && te(s) ? !1 : e in t;
}
const Ki = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ol(t, e, s) {
  const i = /* @__PURE__ */ ms(t, e);
  cs(i) && se(i, e);
  class n extends di {
    constructor(o) {
      super(i, o, s);
    }
  }
  return n.def = i, n;
}
const Dl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class di extends Dl {
  constructor(e, s = {}, i = Xi) {
    super(), this._def = e, this._props = s, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && i !== Xi ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host); )
      if (e instanceof di) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e));
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      e._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, ni(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver((i) => {
      for (const n of i)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const e = (i, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = i;
      let l;
      if (r && !$(r))
        for (const a in r) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = yi(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Me(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(i), this.shadowRoot && this._applyStyles(o), this._mount(i);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((i) => {
      i.configureApp = this._def.configureApp, e(this._def = i, !0);
    }) : e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const i in s)
        U(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => En(s[i])
        });
  }
  _resolveProps(e) {
    const { props: s } = e, i = $(s) ? s : Object.keys(s || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n]);
    for (const n of i.map(Me))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(r) {
          this._setProp(n, r, !0, !0);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const s = this.hasAttribute(e);
    let i = s ? this.getAttribute(e) : Ki;
    const n = Me(e);
    s && this._numberProps && this._numberProps[n] && (i = yi(i)), this._setProp(n, i, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, s, i = !0, n = !1) {
    if (s !== this._props[e] && (s === Ki ? delete this._props[e] : (this._props[e] = s, e === "key" && this._app && (this._app._ceVNode.key = s)), n && this._instance && this._update(), i)) {
      const r = this._ob;
      r && r.disconnect(), s === !0 ? this.setAttribute(Ee(e), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(Ee(e), s + "") : s || this.removeAttribute(Ee(e)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), Il(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const s = Pe(this._def, se(e, this._props));
    return this._instance || (s.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const n = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            cs(o[0]) ? se({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      i.emit = (r, ...o) => {
        n(r, o), Ee(r) !== r && n(Ee(r), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(e, s) {
    if (!e) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const i = this._nonce;
    for (let n = e.length - 1; n >= 0; n--) {
      const r = document.createElement("style");
      i && r.setAttribute("nonce", i), r.textContent = e[n], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const i = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (e[i] || (e[i] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let i = 0; i < e.length; i++) {
      const n = e[i], r = n.getAttribute("name") || "default", o = this._slots[r], l = n.parentNode;
      if (o)
        for (const a of o) {
          if (s && a.nodeType === 1) {
            const d = s + "-s", c = document.createTreeWalker(a, 1);
            a.setAttribute(d, "");
            let h;
            for (; h = c.nextNode(); )
              h.setAttribute(d, "");
          }
          l.insertBefore(a, n);
        }
      else
        for (; n.firstChild; ) l.insertBefore(n.firstChild, n);
      l.removeChild(n);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(e) {
    this._applyStyles(e.styles, e);
  }
  /**
   * @internal
   */
  _removeChildStyle(e) {
  }
}
const qi = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return $(e) ? (s) => Yt(e, s) : e;
}, Ds = Symbol("_assign"), Ll = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, s) {
    t[Ds] = qi(s), ar(t, "change", () => {
      const i = t._modelValue, n = kl(t), r = t.checked, o = t[Ds];
      if ($(i)) {
        const l = ln(i, n), a = l !== -1;
        if (r && !a)
          o(i.concat(n));
        else if (!r && a) {
          const d = [...i];
          d.splice(l, 1), o(d);
        }
      } else if (as(i)) {
        const l = new Set(i);
        r ? l.add(n) : l.delete(n), o(l);
      } else
        o(cr(t, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Gi,
  beforeUpdate(t, e, s) {
    t[Ds] = qi(s), Gi(t, e, s);
  }
};
function Gi(t, { value: e, oldValue: s }, i) {
  t._modelValue = e;
  let n;
  if ($(e))
    n = ln(e, i.props.value) > -1;
  else if (as(e))
    n = e.has(i.props.value);
  else {
    if (e === s) return;
    n = hs(e, cr(t, !0));
  }
  t.checked !== n && (t.checked = n);
}
function kl(t) {
  return "_value" in t ? t._value : t.value;
}
function cr(t, e) {
  const s = e ? "_trueValue" : "_falseValue";
  return s in t ? t[s] : e;
}
const $l = /* @__PURE__ */ se({ patchProp: Ml }, pl);
let Yi;
function ur() {
  return Yi || (Yi = Wo($l));
}
const Il = (...t) => {
  ur().render(...t);
}, Xi = (...t) => {
  const e = ur().createApp(...t), { mount: s } = e;
  return e.mount = (i) => {
    const n = Wl(i);
    if (!n) return;
    const r = e._component;
    !F(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Nl(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, e;
};
function Nl(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Wl(t) {
  return te(t) ? document.querySelector(t) : t;
}
function oe(t, e, s, i) {
  return new (s || (s = Promise))(function(n, r) {
    function o(d) {
      try {
        a(i.next(d));
      } catch (c) {
        r(c);
      }
    }
    function l(d) {
      try {
        a(i.throw(d));
      } catch (c) {
        r(c);
      }
    }
    function a(d) {
      var c;
      d.done ? n(d.value) : (c = d.value, c instanceof s ? c : new s(function(h) {
        h(c);
      })).then(o, l);
    }
    a((i = i.apply(t, e || [])).next());
  });
}
let zt = class {
  constructor() {
    this.listeners = {};
  }
  on(e, s, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e].add(s), i == null ? void 0 : i.once) {
      const n = () => {
        this.un(e, n), this.un(e, s);
      };
      return this.on(e, n), n;
    }
    return () => this.un(e, s);
  }
  un(e, s) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(s);
  }
  once(e, s) {
    return this.on(e, s, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...s) {
    this.listeners[e] && this.listeners[e].forEach((i) => i(...s));
  }
};
const Gt = { decode: function(t, e) {
  return oe(this, void 0, void 0, function* () {
    const s = new AudioContext({ sampleRate: e });
    return s.decodeAudioData(t).finally(() => s.close());
  });
}, createBuffer: function(t, e) {
  return typeof t[0] == "number" && (t = [t]), function(s) {
    const i = s[0];
    if (i.some((n) => n > 1 || n < -1)) {
      const n = i.length;
      let r = 0;
      for (let o = 0; o < n; o++) {
        const l = Math.abs(i[o]);
        l > r && (r = l);
      }
      for (const o of s) for (let l = 0; l < n; l++) o[l] /= r;
    }
  }(t), { duration: e, length: t[0].length, sampleRate: t[0].length / e, numberOfChannels: t.length, getChannelData: (s) => t == null ? void 0 : t[s], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function dr(t, e) {
  const s = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
  for (const [i, n] of Object.entries(e)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(dr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Ji(t, e, s) {
  const i = dr(t, e || {});
  return s == null || s.appendChild(i), i;
}
var jl = Object.freeze({ __proto__: null, createElement: Ji, default: Ji });
const Fl = { fetchBlob: function(t, e, s) {
  return oe(this, void 0, void 0, function* () {
    const i = yield fetch(t, s);
    if (i.status >= 400) throw new Error(`Failed to fetch ${t}: ${i.status} (${i.statusText})`);
    return function(n, r) {
      oe(this, void 0, void 0, function* () {
        if (!n.body || !n.headers) return;
        const o = n.body.getReader(), l = Number(n.headers.get("Content-Length")) || 0;
        let a = 0;
        const d = (h) => oe(this, void 0, void 0, function* () {
          a += (h == null ? void 0 : h.length) || 0;
          const p = Math.round(a / l * 100);
          r(p);
        }), c = () => oe(this, void 0, void 0, function* () {
          let h;
          try {
            h = yield o.read();
          } catch {
            return;
          }
          h.done || (d(h.value), yield c());
        });
        c();
      });
    }(i.clone(), e), i.blob();
  });
} };
class Hl extends zt {
  constructor(e) {
    super(), this.isExternalMedia = !1, e.media ? (this.media = e.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), e.mediaControls && (this.media.controls = !0), e.autoplay && (this.media.autoplay = !0), e.playbackRate != null && this.onMediaEvent("canplay", () => {
      e.playbackRate != null && (this.media.playbackRate = e.playbackRate);
    }, { once: !0 });
  }
  onMediaEvent(e, s, i) {
    return this.media.addEventListener(e, s, i), () => this.media.removeEventListener(e, s, i);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const e = this.getSrc();
    e.startsWith("blob:") && URL.revokeObjectURL(e);
  }
  canPlayType(e) {
    return this.media.canPlayType(e) !== "";
  }
  setSrc(e, s) {
    const i = this.getSrc();
    if (e && i === e) return;
    this.revokeSrc();
    const n = s instanceof Blob && (this.canPlayType(s.type) || !e) ? URL.createObjectURL(s) : e;
    i && this.media.removeAttribute("src");
    try {
      this.media.src = n;
    } catch {
      this.media.src = e;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load());
  }
  setMediaElement(e) {
    this.media = e;
  }
  play() {
    return oe(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(e) {
    this.media.currentTime = Math.max(0, Math.min(e, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(e) {
    this.media.volume = e;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(e) {
    this.media.muted = e;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(e, s) {
    s != null && (this.media.preservesPitch = s), this.media.playbackRate = e;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(e) {
    return this.media.setSinkId(e);
  }
}
class vt extends zt {
  constructor(e, s) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = e;
    const i = this.parentFromOptionsContainer(e.container);
    this.parent = i;
    const [n, r] = this.initHtml();
    i.appendChild(n), this.container = n, this.scrollContainer = r.querySelector(".scroll"), this.wrapper = r.querySelector(".wrapper"), this.canvasWrapper = r.querySelector(".canvases"), this.progressWrapper = r.querySelector(".progress"), this.cursor = r.querySelector(".cursor"), s && r.appendChild(s), this.initEvents();
  }
  parentFromOptionsContainer(e) {
    let s;
    if (typeof e == "string" ? s = document.querySelector(e) : e instanceof HTMLElement && (s = e), !s) throw new Error("Container not found");
    return s;
  }
  initEvents() {
    const e = (s) => {
      const i = this.wrapper.getBoundingClientRect(), n = s.clientX - i.left, r = s.clientY - i.top;
      return [n / i.width, r / i.height];
    };
    if (this.wrapper.addEventListener("click", (s) => {
      const [i, n] = e(s);
      this.emit("click", i, n);
    }), this.wrapper.addEventListener("dblclick", (s) => {
      const [i, n] = e(s);
      this.emit("dblclick", i, n);
    }), this.options.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const { scrollLeft: s, scrollWidth: i, clientWidth: n } = this.scrollContainer, r = s / i, o = (s + n) / i;
      this.emit("scroll", r, o, s, s + n);
    }), typeof ResizeObserver == "function") {
      const s = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        s().then(() => this.onContainerResize()).catch(() => {
        });
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const e = this.parent.clientWidth;
    e === this.lastContainerWidth && this.options.height !== "auto" || (this.lastContainerWidth = e, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function(e, s, i, n, r = 3, o = 0, l = 100) {
      if (!e) return () => {
      };
      const a = matchMedia("(pointer: coarse)").matches;
      let d = () => {
      };
      const c = (h) => {
        if (h.button !== o) return;
        h.preventDefault(), h.stopPropagation();
        let p = h.clientX, g = h.clientY, S = !1;
        const O = Date.now(), I = (A) => {
          if (A.preventDefault(), A.stopPropagation(), a && Date.now() - O < l) return;
          const z = A.clientX, V = A.clientY, Z = z - p, ie = V - g;
          if (S || Math.abs(Z) > r || Math.abs(ie) > r) {
            const ee = e.getBoundingClientRect(), { left: be, top: Fe } = ee;
            S || (i == null || i(p - be, g - Fe), S = !0), s(Z, ie, z - be, V - Fe), p = z, g = V;
          }
        }, D = (A) => {
          if (S) {
            const z = A.clientX, V = A.clientY, Z = e.getBoundingClientRect(), { left: ie, top: ee } = Z;
            n == null || n(z - ie, V - ee);
          }
          d();
        }, N = (A) => {
          A.relatedTarget && A.relatedTarget !== document.documentElement || D(A);
        }, M = (A) => {
          S && (A.stopPropagation(), A.preventDefault());
        }, v = (A) => {
          S && A.preventDefault();
        };
        document.addEventListener("pointermove", I), document.addEventListener("pointerup", D), document.addEventListener("pointerout", N), document.addEventListener("pointercancel", N), document.addEventListener("touchmove", v, { passive: !1 }), document.addEventListener("click", M, { capture: !0 }), d = () => {
          document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", D), document.removeEventListener("pointerout", N), document.removeEventListener("pointercancel", N), document.removeEventListener("touchmove", v), setTimeout(() => {
            document.removeEventListener("click", M, { capture: !0 });
          }, 10);
        };
      };
      return e.addEventListener("pointerdown", c), () => {
        d(), e.removeEventListener("pointerdown", c);
      };
    }(this.wrapper, (e, s, i) => {
      this.emit("drag", Math.max(0, Math.min(1, i / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }, (e) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, e / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(e, s) {
    var i;
    const n = ((i = this.audioData) === null || i === void 0 ? void 0 : i.numberOfChannels) || 1;
    if (e == null) return 128;
    if (!isNaN(Number(e))) return Number(e);
    if (e === "auto") {
      const r = this.parent.clientHeight || 128;
      return s != null && s.every((o) => !o.overlay) ? r / n : r;
    }
    return 128;
  }
  initHtml() {
    const e = document.createElement("div"), s = e.attachShadow({ mode: "open" }), i = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
    return s.innerHTML = `
      <style${i ? ` nonce="${i}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [e, s];
  }
  setOptions(e) {
    if (this.options.container !== e.container) {
      const s = this.parentFromOptionsContainer(e.container);
      s.appendChild(this.container), this.parent = s;
    }
    e.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.options = e, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(e) {
    this.scrollContainer.scrollLeft = e;
  }
  setScrollPercentage(e) {
    const { scrollWidth: s } = this.scrollContainer, i = s * e;
    this.setScroll(i);
  }
  destroy() {
    var e, s;
    this.subscriptions.forEach((i) => i()), this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (s = this.unsubscribeOnScroll) === null || s === void 0 || s.forEach((i) => i()), this.unsubscribeOnScroll = [];
  }
  createDelay(e = 10) {
    let s, i;
    const n = () => {
      s && clearTimeout(s), i && i();
    };
    return this.timeouts.push(n), () => new Promise((r, o) => {
      n(), i = o, s = setTimeout(() => {
        s = void 0, i = void 0, r();
      }, e);
    });
  }
  convertColorValues(e) {
    if (!Array.isArray(e)) return e || "";
    if (e.length < 2) return e[0] || "";
    const s = document.createElement("canvas"), i = s.getContext("2d"), n = s.height * (window.devicePixelRatio || 1), r = i.createLinearGradient(0, 0, 0, n), o = 1 / (e.length - 1);
    return e.forEach((l, a) => {
      const d = a * o;
      r.addColorStop(d, l);
    }), r;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(e, s, i, n) {
    const r = e[0], o = e[1] || e[0], l = r.length, { width: a, height: d } = i.canvas, c = d / 2, h = this.getPixelRatio(), p = s.barWidth ? s.barWidth * h : 1, g = s.barGap ? s.barGap * h : s.barWidth ? p / 2 : 0, S = s.barRadius || 0, O = a / (p + g) / l, I = S && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let D = 0, N = 0, M = 0;
    for (let v = 0; v <= l; v++) {
      const A = Math.round(v * O);
      if (A > D) {
        const Z = Math.round(N * c * n), ie = Z + Math.round(M * c * n) || 1;
        let ee = c - Z;
        s.barAlign === "top" ? ee = 0 : s.barAlign === "bottom" && (ee = d - ie), i[I](D * (p + g), ee, p, ie, S), D = A, N = 0, M = 0;
      }
      const z = Math.abs(r[v] || 0), V = Math.abs(o[v] || 0);
      z > N && (N = z), V > M && (M = V);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(e, s, i, n) {
    const r = (o) => {
      const l = e[o] || e[0], a = l.length, { height: d } = i.canvas, c = d / 2, h = i.canvas.width / a;
      i.moveTo(0, c);
      let p = 0, g = 0;
      for (let S = 0; S <= a; S++) {
        const O = Math.round(S * h);
        if (O > p) {
          const D = c + (Math.round(g * c * n) || 1) * (o === 0 ? -1 : 1);
          i.lineTo(p, D), p = O, g = 0;
        }
        const I = Math.abs(l[S] || 0);
        I > g && (g = I);
      }
      i.lineTo(p, c);
    };
    i.beginPath(), r(0), r(1), i.fill(), i.closePath();
  }
  renderWaveform(e, s, i) {
    if (i.fillStyle = this.convertColorValues(s.waveColor), s.renderFunction) return void s.renderFunction(e, i);
    let n = s.barHeight || 1;
    if (s.normalize) {
      const r = Array.from(e[0]).reduce((o, l) => Math.max(o, Math.abs(l)), 0);
      n = r ? 1 / r : 1;
    }
    s.barWidth || s.barGap || s.barAlign ? this.renderBarWaveform(e, s, i, n) : this.renderLineWaveform(e, s, i, n);
  }
  renderSingleCanvas(e, s, i, n, r, o, l) {
    const a = this.getPixelRatio(), d = document.createElement("canvas");
    d.width = Math.round(i * a), d.height = Math.round(n * a), d.style.width = `${i}px`, d.style.height = `${n}px`, d.style.left = `${Math.round(r)}px`, o.appendChild(d);
    const c = d.getContext("2d");
    if (this.renderWaveform(e, s, c), d.width > 0 && d.height > 0) {
      const h = d.cloneNode(), p = h.getContext("2d");
      p.drawImage(d, 0, 0), p.globalCompositeOperation = "source-in", p.fillStyle = this.convertColorValues(s.progressColor), p.fillRect(0, 0, d.width, d.height), l.appendChild(h);
    }
  }
  renderMultiCanvas(e, s, i, n, r, o) {
    const l = this.getPixelRatio(), { clientWidth: a } = this.scrollContainer, d = i / l;
    let c = Math.min(vt.MAX_CANVAS_WIDTH, a, d), h = {};
    if (s.barWidth || s.barGap) {
      const I = s.barWidth || 0.5, D = I + (s.barGap || I / 2);
      c % D != 0 && (c = Math.floor(c / D) * D);
    }
    if (c === 0) return;
    const p = (I) => {
      if (I < 0 || I >= g || h[I]) return;
      h[I] = !0;
      const D = I * c;
      let N = Math.min(d - D, c);
      if (s.barWidth || s.barGap) {
        const v = s.barWidth || 0.5, A = v + (s.barGap || v / 2);
        N = Math.floor(N / A) * A;
      }
      if (N <= 0) return;
      const M = e.map((v) => {
        const A = Math.floor(D / d * v.length), z = Math.floor((D + N) / d * v.length);
        return v.slice(A, z);
      });
      this.renderSingleCanvas(M, s, N, n, D, r, o);
    }, g = Math.ceil(d / c);
    if (!this.isScrollable) {
      for (let I = 0; I < g; I++) p(I);
      return;
    }
    const S = this.scrollContainer.scrollLeft / d, O = Math.floor(S * g);
    if (p(O - 1), p(O), p(O + 1), g > 1) {
      const I = this.on("scroll", () => {
        const { scrollLeft: D } = this.scrollContainer, N = Math.floor(D / d * g);
        Object.keys(h).length > vt.MAX_NODES && (r.innerHTML = "", o.innerHTML = "", h = {}), p(N - 1), p(N), p(N + 1);
      });
      this.unsubscribeOnScroll.push(I);
    }
  }
  renderChannel(e, s, i, n) {
    var { overlay: r } = s, o = function(c, h) {
      var p = {};
      for (var g in c) Object.prototype.hasOwnProperty.call(c, g) && h.indexOf(g) < 0 && (p[g] = c[g]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function") {
        var S = 0;
        for (g = Object.getOwnPropertySymbols(c); S < g.length; S++) h.indexOf(g[S]) < 0 && Object.prototype.propertyIsEnumerable.call(c, g[S]) && (p[g[S]] = c[g[S]]);
      }
      return p;
    }(s, ["overlay"]);
    const l = document.createElement("div"), a = this.getHeight(o.height, o.splitChannels);
    l.style.height = `${a}px`, r && n > 0 && (l.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(l);
    const d = l.cloneNode();
    this.progressWrapper.appendChild(d), this.renderMultiCanvas(e, o, i, a, l, d);
  }
  render(e) {
    return oe(this, void 0, void 0, function* () {
      var s;
      this.timeouts.forEach((a) => a()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const i = this.getPixelRatio(), n = this.scrollContainer.clientWidth, r = Math.ceil(e.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = r > n;
      const o = this.options.fillParent && !this.isScrollable, l = (o ? n : r) * i;
      if (this.wrapper.style.width = o ? "100%" : `${r}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e, this.emit("render"), this.options.splitChannels) for (let a = 0; a < e.numberOfChannels; a++) {
        const d = Object.assign(Object.assign({}, this.options), (s = this.options.splitChannels) === null || s === void 0 ? void 0 : s[a]);
        this.renderChannel([e.getChannelData(a)], d, l, a);
      }
      else {
        const a = [e.getChannelData(0)];
        e.numberOfChannels > 1 && a.push(e.getChannelData(1)), this.renderChannel(a, this.options, l, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((i) => i()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: e } = this.scrollContainer, { right: s } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && e !== this.scrollContainer.scrollWidth) {
      const { right: i } = this.progressWrapper.getBoundingClientRect();
      let n = i - s;
      n *= 2, n = n < 0 ? Math.floor(n) : Math.ceil(n), n /= 2, this.scrollContainer.scrollLeft += n;
    }
  }
  zoom(e) {
    this.options.minPxPerSec = e, this.reRender();
  }
  scrollIntoView(e, s = !1) {
    const { scrollLeft: i, scrollWidth: n, clientWidth: r } = this.scrollContainer, o = e * n, l = i, a = i + r, d = r / 2;
    if (this.isDragging)
      o + 30 > a ? this.scrollContainer.scrollLeft += 30 : o - 30 < l && (this.scrollContainer.scrollLeft -= 30);
    else {
      (o < l || o > a) && (this.scrollContainer.scrollLeft = o - (this.options.autoCenter ? d : 0));
      const c = o - i - d;
      s && this.options.autoCenter && c > 0 && (this.scrollContainer.scrollLeft += Math.min(c, 10));
    }
    {
      const c = this.scrollContainer.scrollLeft, h = c / n, p = (c + r) / n;
      this.emit("scroll", h, p, c, c + r);
    }
  }
  renderProgress(e, s) {
    if (isNaN(e)) return;
    const i = 100 * e;
    this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = `translateX(-${Math.round(i) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(e, s);
  }
  exportImage(e, s, i) {
    return oe(this, void 0, void 0, function* () {
      const n = this.canvasWrapper.querySelectorAll("canvas");
      if (!n.length) throw new Error("No waveform data");
      if (i === "dataURL") {
        const r = Array.from(n).map((o) => o.toDataURL(e, s));
        return Promise.resolve(r);
      }
      return Promise.all(Array.from(n).map((r) => new Promise((o, l) => {
        r.toBlob((a) => {
          a ? o(a) : l(new Error("Could not export image"));
        }, e, s);
      })));
    });
  }
}
vt.MAX_CANVAS_WIDTH = 8e3, vt.MAX_NODES = 10;
class zl extends zt {
  constructor() {
    super(...arguments), this.unsubscribe = () => {
    };
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
}
class Ls extends zt {
  constructor(e = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = e, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return oe(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(e) {
    if (this.currentSrc = e, this._duration = void 0, !e) return this.buffer = null, void this.emit("emptied");
    fetch(e).then((s) => {
      if (s.status >= 400) throw new Error(`Failed to fetch ${e}: ${s.status} (${s.statusText})`);
      return s.arrayBuffer();
    }).then((s) => this.currentSrc !== e ? null : this.audioContext.decodeAudioData(s)).then((s) => {
      this.currentSrc === e && (this.buffer = s, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var e;
    if (!this.paused) return;
    this.paused = !1, (e = this.bufferNode) === null || e === void 0 || e.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let s = this.playedDuration * this._playbackRate;
    (s >= this.duration || s < 0) && (s = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, s), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var e;
    this.paused = !0, (e = this.bufferNode) === null || e === void 0 || e.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return oe(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(e) {
    const s = e - this.currentTime, i = this.bufferNode;
    i == null || i.stop(this.audioContext.currentTime + s), i == null || i.addEventListener("ended", () => {
      i === this.bufferNode && (this.bufferNode = null, this.pause());
    }, { once: !0 });
  }
  setSinkId(e) {
    return oe(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(e) {
    this._playbackRate = e, this.bufferNode && (this.bufferNode.playbackRate.value = e);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(e) {
    const s = !this.paused;
    s && this._pause(), this.playedDuration = e / this._playbackRate, s && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var e, s;
    return (e = this._duration) !== null && e !== void 0 ? e : ((s = this.buffer) === null || s === void 0 ? void 0 : s.duration) || 0;
  }
  set duration(e) {
    this._duration = e;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(e) {
    this.gainNode.gain.value = e, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(e) {
    this._muted !== e && (this._muted = e, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(e) {
    return /^(audio|video)\//.test(e);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const e = [];
    if (!this.buffer) return e;
    const s = this.buffer.numberOfChannels;
    for (let i = 0; i < s; i++) e.push(this.buffer.getChannelData(i));
    return e;
  }
}
const Bl = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class Wt extends Hl {
  static create(e) {
    return new Wt(e);
  }
  constructor(e) {
    const s = e.media || (e.backend === "WebAudio" ? new Ls() : void 0);
    super({ media: s, mediaControls: e.mediaControls, autoplay: e.autoplay, playbackRate: e.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Bl, e), this.timer = new zl();
    const i = s ? void 0 : this.getMediaElement();
    this.renderer = new vt(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const n = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: r, duration: o } = this.options;
      (n || r && o) && this.load(n, r, o).catch(() => null);
    });
  }
  updateProgress(e = this.getCurrentTime()) {
    return this.renderer.renderProgress(e / this.getDuration(), this.isPlaying()), e;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const e = this.updateProgress();
        this.emit("timeupdate", e), this.emit("audioprocess", e), this.stopAtPosition != null && this.isPlaying() && e >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const e = this.updateProgress();
      this.emit("timeupdate", e);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var e;
      this.emit("error", (e = this.getMediaElement().error) !== null && e !== void 0 ? e : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (e, s) => {
      this.options.interact && (this.seekTo(e), this.emit("interaction", e * this.getDuration()), this.emit("click", e, s));
    }), this.renderer.on("dblclick", (e, s) => {
      this.emit("dblclick", e, s);
    }), this.renderer.on("scroll", (e, s, i, n) => {
      const r = this.getDuration();
      this.emit("scroll", e * r, s * r, i, n);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (e) => {
      this.emit("dragstart", e);
    }), this.renderer.on("dragend", (e) => {
      this.emit("dragend", e);
    }));
    {
      let e;
      this.subscriptions.push(this.renderer.on("drag", (s) => {
        if (!this.options.interact) return;
        let i;
        this.renderer.renderProgress(s), clearTimeout(e), this.isPlaying() ? i = 0 : this.options.dragToSeek === !0 ? i = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (i = this.options.dragToSeek.debounceTime), e = setTimeout(() => {
          this.seekTo(s);
        }, i), this.emit("interaction", s * this.getDuration()), this.emit("drag", s);
      }));
    }
  }
  initPlugins() {
    var e;
    !((e = this.options.plugins) === null || e === void 0) && e.length && this.options.plugins.forEach((s) => {
      this.registerPlugin(s);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((e) => e()), this.mediaSubscriptions = [];
  }
  setOptions(e) {
    this.options = Object.assign({}, this.options, e), e.duration && !e.peaks && (this.decodedData = Gt.createBuffer(this.exportPeaks(), e.duration)), e.peaks && e.duration && (this.decodedData = Gt.createBuffer(e.peaks, e.duration)), this.renderer.setOptions(this.options), e.audioRate && this.setPlaybackRate(e.audioRate), e.mediaControls != null && (this.getMediaElement().controls = e.mediaControls);
  }
  registerPlugin(e) {
    e._init(this), this.plugins.push(e);
    const s = e.once("destroy", () => {
      this.plugins = this.plugins.filter((i) => i !== e), this.subscriptions = this.subscriptions.filter((i) => i !== s);
    });
    return this.subscriptions.push(s), e;
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(e) {
    return this.renderer.setScroll(e);
  }
  setScrollTime(e) {
    const s = e / this.getDuration();
    this.renderer.setScrollPercentage(s);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e, s, i, n) {
    return oe(this, void 0, void 0, function* () {
      var r;
      if (this.emit("load", e), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (r = this.abortController) === null || r === void 0 ? void 0 : r.signal);
        const a = (c) => this.emit("loading", c);
        s = yield Fl.fetchBlob(e, a, l);
        const d = this.options.blobMimeType;
        d && (s = new Blob([s], { type: d }));
      }
      e == "" ? this.getMediaElement().removeAttribute("src") : this.setSrc(e, s);
      const o = yield new Promise((l) => {
        const a = n || this.getDuration();
        a ? l(a) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!e && !s) {
        const l = this.getMediaElement();
        l instanceof Ls && (l.duration = o);
      }
      if (i) this.decodedData = Gt.createBuffer(i, o || 0);
      else if (s) {
        const l = yield s.arrayBuffer();
        this.decodedData = yield Gt.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e, s, i) {
    return oe(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e, void 0, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  loadBlob(e, s, i) {
    return oe(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  zoom(e) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(e), this.emit("zoom", e);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: e = 2, maxLength: s = 8e3, precision: i = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const n = Math.min(e, this.decodedData.numberOfChannels), r = [];
    for (let o = 0; o < n; o++) {
      const l = this.decodedData.getChannelData(o), a = [], d = l.length / s;
      for (let c = 0; c < s; c++) {
        const h = l.slice(Math.floor(c * d), Math.ceil((c + 1) * d));
        let p = 0;
        for (let g = 0; g < h.length; g++) {
          const S = h[g];
          Math.abs(S) > Math.abs(p) && (p = S);
        }
        a.push(Math.round(p * i) / i);
      }
      r.push(a);
    }
    return r;
  }
  getDuration() {
    let e = super.getDuration() || 0;
    return e !== 0 && e !== 1 / 0 || !this.decodedData || (e = this.decodedData.duration), e;
  }
  toggleInteraction(e) {
    this.options.interact = e;
  }
  setTime(e) {
    this.stopAtPosition = null, super.setTime(e), this.updateProgress(e), this.emit("timeupdate", e);
  }
  seekTo(e) {
    const s = this.getDuration() * e;
    this.setTime(s);
  }
  play(e, s) {
    const i = Object.create(null, { play: { get: () => super.play } });
    return oe(this, void 0, void 0, function* () {
      e != null && this.setTime(e);
      const n = yield i.play.call(this);
      return s != null && (this.media instanceof Ls ? this.media.stopAt(s) : this.stopAtPosition = s), n;
    });
  }
  playPause() {
    return oe(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(e) {
    this.setTime(this.getCurrentTime() + e);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(e) {
    this.unsubscribePlayerEvents(), super.setMediaElement(e), this.initPlayerEvents();
  }
  exportImage() {
    return oe(this, arguments, void 0, function* (e = "image/png", s = 1, i = "dataURL") {
      return this.renderer.exportImage(e, s, i);
    });
  }
  destroy() {
    var e;
    this.emit("destroy"), (e = this.abortController) === null || e === void 0 || e.abort(), this.plugins.forEach((s) => s.destroy()), this.subscriptions.forEach((s) => s()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
Wt.BasePlugin = class extends zt {
  constructor(t) {
    super(), this.subscriptions = [], this.options = t;
  }
  onInit() {
  }
  _init(t) {
    this.wavesurfer = t, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((t) => t());
  }
}, Wt.dom = jl;
class fr {
  constructor() {
    this.listeners = {};
  }
  on(e, s, i) {
    if (this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e].add(s), i == null ? void 0 : i.once) {
      const n = () => {
        this.un(e, n), this.un(e, s);
      };
      return this.on(e, n), n;
    }
    return () => this.un(e, s);
  }
  un(e, s) {
    var i;
    (i = this.listeners[e]) === null || i === void 0 || i.delete(s);
  }
  once(e, s) {
    return this.on(e, s, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(e, ...s) {
    this.listeners[e] && this.listeners[e].forEach((i) => i(...s));
  }
}
class Ul extends fr {
  constructor(e) {
    super(), this.subscriptions = [], this.options = e;
  }
  onInit() {
  }
  _init(e) {
    this.wavesurfer = e, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach((e) => e());
  }
}
function Qt(t, e, s, i, n = 3, r = 0, o = 100) {
  if (!t) return () => {
  };
  const l = matchMedia("(pointer: coarse)").matches;
  let a = () => {
  };
  const d = (c) => {
    if (c.button !== r) return;
    c.preventDefault(), c.stopPropagation();
    let h = c.clientX, p = c.clientY, g = !1;
    const S = Date.now(), O = (v) => {
      if (v.preventDefault(), v.stopPropagation(), l && Date.now() - S < o) return;
      const A = v.clientX, z = v.clientY, V = A - h, Z = z - p;
      if (g || Math.abs(V) > n || Math.abs(Z) > n) {
        const ie = t.getBoundingClientRect(), { left: ee, top: be } = ie;
        g || (s == null || s(h - ee, p - be), g = !0), e(V, Z, A - ee, z - be), h = A, p = z;
      }
    }, I = (v) => {
      if (g) {
        const A = v.clientX, z = v.clientY, V = t.getBoundingClientRect(), { left: Z, top: ie } = V;
        i == null || i(A - Z, z - ie);
      }
      a();
    }, D = (v) => {
      v.relatedTarget && v.relatedTarget !== document.documentElement || I(v);
    }, N = (v) => {
      g && (v.stopPropagation(), v.preventDefault());
    }, M = (v) => {
      g && v.preventDefault();
    };
    document.addEventListener("pointermove", O), document.addEventListener("pointerup", I), document.addEventListener("pointerout", D), document.addEventListener("pointercancel", D), document.addEventListener("touchmove", M, { passive: !1 }), document.addEventListener("click", N, { capture: !0 }), a = () => {
      document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", I), document.removeEventListener("pointerout", D), document.removeEventListener("pointercancel", D), document.removeEventListener("touchmove", M), setTimeout(() => {
        document.removeEventListener("click", N, { capture: !0 });
      }, 10);
    };
  };
  return t.addEventListener("pointerdown", d), () => {
    a(), t.removeEventListener("pointerdown", d);
  };
}
function hr(t, e) {
  const s = e.xmlns ? document.createElementNS(e.xmlns, t) : document.createElement(t);
  for (const [i, n] of Object.entries(e)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(hr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Et(t, e, s) {
  const i = hr(t, e || {});
  return s == null || s.appendChild(i), i;
}
class Zi extends fr {
  constructor(e, s, i = 0) {
    var n, r, o, l, a, d, c, h, p, g;
    super(), this.totalDuration = s, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.isRemoved = !1, this.subscriptions = [], this.id = e.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(e.start), this.end = this.clampPosition((n = e.end) !== null && n !== void 0 ? n : e.start), this.drag = (r = e.drag) === null || r === void 0 || r, this.resize = (o = e.resize) === null || o === void 0 || o, this.resizeStart = (l = e.resizeStart) === null || l === void 0 || l, this.resizeEnd = (a = e.resizeEnd) === null || a === void 0 || a, this.color = (d = e.color) !== null && d !== void 0 ? d : "rgba(0, 0, 0, 0.1)", this.minLength = (c = e.minLength) !== null && c !== void 0 ? c : this.minLength, this.maxLength = (h = e.maxLength) !== null && h !== void 0 ? h : this.maxLength, this.channelIdx = (p = e.channelIdx) !== null && p !== void 0 ? p : -1, this.contentEditable = (g = e.contentEditable) !== null && g !== void 0 ? g : this.contentEditable, this.element = this.initElement(), this.setContent(e.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
  }
  clampPosition(e) {
    return Math.max(0, Math.min(this.totalDuration, e));
  }
  setPart() {
    var e;
    const s = this.start === this.end;
    (e = this.element) === null || e === void 0 || e.setAttribute("part", `${s ? "marker" : "region"} ${this.id}`);
  }
  addResizeHandles(e) {
    const s = { position: "absolute", zIndex: "2", width: "6px", height: "100%", top: "0", cursor: "ew-resize", wordBreak: "keep-all" }, i = Et("div", { part: "region-handle region-handle-left", style: Object.assign(Object.assign({}, s), { left: "0", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "2px 0 0 2px" }) }, e), n = Et("div", { part: "region-handle region-handle-right", style: Object.assign(Object.assign({}, s), { right: "0", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "0 2px 2px 0" }) }, e);
    this.subscriptions.push(Qt(i, (r) => this.onResize(r, "start"), () => null, () => this.onEndResizing(), 1), Qt(n, (r) => this.onResize(r, "end"), () => null, () => this.onEndResizing(), 1));
  }
  removeResizeHandles(e) {
    const s = e.querySelector('[part*="region-handle-left"]'), i = e.querySelector('[part*="region-handle-right"]');
    s && e.removeChild(s), i && e.removeChild(i);
  }
  initElement() {
    if (this.isRemoved) return null;
    const e = this.start === this.end;
    let s = 0, i = 100;
    this.channelIdx >= 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, s = i * this.channelIdx);
    const n = Et("div", { style: { position: "absolute", top: `${s}%`, height: `${i}%`, backgroundColor: e ? "none" : this.color, borderLeft: e ? "2px solid " + this.color : "none", borderRadius: "2px", boxSizing: "border-box", transition: "background-color 0.2s ease", cursor: this.drag ? "grab" : "default", pointerEvents: "all" } });
    return !e && this.resize && this.addResizeHandles(n), n;
  }
  renderPosition() {
    if (!this.element) return;
    const e = this.start / this.totalDuration, s = (this.totalDuration - this.end) / this.totalDuration;
    this.element.style.left = 100 * e + "%", this.element.style.right = 100 * s + "%";
  }
  toggleCursor(e) {
    var s;
    this.drag && (!((s = this.element) === null || s === void 0) && s.style) && (this.element.style.cursor = e ? "grabbing" : "grab");
  }
  initMouseEvents() {
    const { element: e } = this;
    e && (e.addEventListener("click", (s) => this.emit("click", s)), e.addEventListener("mouseenter", (s) => this.emit("over", s)), e.addEventListener("mouseleave", (s) => this.emit("leave", s)), e.addEventListener("dblclick", (s) => this.emit("dblclick", s)), e.addEventListener("pointerdown", () => this.toggleCursor(!0)), e.addEventListener("pointerup", () => this.toggleCursor(!1)), this.subscriptions.push(Qt(e, (s) => this.onMove(s), () => this.toggleCursor(!0), () => {
      this.toggleCursor(!1), this.drag && this.emit("update-end");
    })), this.contentEditable && this.content && (this.content.addEventListener("click", (s) => this.onContentClick(s)), this.content.addEventListener("blur", () => this.onContentBlur())));
  }
  _onUpdate(e, s) {
    var i;
    if (!(!((i = this.element) === null || i === void 0) && i.parentElement)) return;
    const { width: n } = this.element.parentElement.getBoundingClientRect(), r = e / n * this.totalDuration, o = s && s !== "start" ? this.start : this.start + r, l = s && s !== "end" ? this.end : this.end + r, a = l - o;
    o >= 0 && l <= this.totalDuration && o <= l && a >= this.minLength && a <= this.maxLength && (this.start = o, this.end = l, this.renderPosition(), this.emit("update", s));
  }
  onMove(e) {
    this.drag && this._onUpdate(e);
  }
  onResize(e, s) {
    this.resize && (this.resizeStart || s !== "start") && (this.resizeEnd || s !== "end") && this._onUpdate(e, s);
  }
  onEndResizing() {
    this.resize && this.emit("update-end");
  }
  onContentClick(e) {
    e.stopPropagation(), e.target.focus(), this.emit("click", e);
  }
  onContentBlur() {
    this.emit("update-end");
  }
  _setTotalDuration(e) {
    this.totalDuration = e, this.renderPosition();
  }
  play(e) {
    this.emit("play", e && this.end !== this.start ? this.end : void 0);
  }
  getContent(e = !1) {
    var s;
    return e ? this.content || void 0 : this.element instanceof HTMLElement ? ((s = this.content) === null || s === void 0 ? void 0 : s.innerHTML) || void 0 : "";
  }
  setContent(e) {
    var s;
    if (this.element) if ((s = this.content) === null || s === void 0 || s.remove(), e) {
      if (typeof e == "string") {
        const i = this.start === this.end;
        this.content = Et("div", { style: { padding: `0.2em ${i ? 0.2 : 0.4}em`, display: "inline-block" }, textContent: e });
      } else this.content = e;
      this.contentEditable && (this.content.contentEditable = "true"), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
    } else this.content = void 0;
  }
  setOptions(e) {
    var s, i;
    if (this.element) {
      if (e.color && (this.color = e.color, this.element.style.backgroundColor = this.color), e.drag !== void 0 && (this.drag = e.drag, this.element.style.cursor = this.drag ? "grab" : "default"), e.start !== void 0 || e.end !== void 0) {
        const n = this.start === this.end;
        this.start = this.clampPosition((s = e.start) !== null && s !== void 0 ? s : this.start), this.end = this.clampPosition((i = e.end) !== null && i !== void 0 ? i : n ? this.start : this.end), this.renderPosition(), this.setPart();
      }
      if (e.content && this.setContent(e.content), e.id && (this.id = e.id, this.setPart()), e.resize !== void 0 && e.resize !== this.resize) {
        const n = this.start === this.end;
        this.resize = e.resize, this.resize && !n ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
      }
      e.resizeStart !== void 0 && (this.resizeStart = e.resizeStart), e.resizeEnd !== void 0 && (this.resizeEnd = e.resizeEnd);
    }
  }
  remove() {
    this.isRemoved = !0, this.emit("remove"), this.subscriptions.forEach((e) => e()), this.element && (this.element.remove(), this.element = null);
  }
}
class fi extends Ul {
  constructor(e) {
    super(e), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(e) {
    return new fi(e);
  }
  onInit() {
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    this.wavesurfer.getWrapper().appendChild(this.regionsContainer);
    let e = [];
    this.subscriptions.push(this.wavesurfer.on("timeupdate", (s) => {
      const i = this.regions.filter((n) => n.start <= s && (n.end === n.start ? n.start + 0.05 : n.end) >= s);
      i.forEach((n) => {
        e.includes(n) || this.emit("region-in", n);
      }), e.forEach((n) => {
        i.includes(n) || this.emit("region-out", n);
      }), e = i;
    }));
  }
  initRegionsContainer() {
    return Et("div", { style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "5", pointerEvents: "none" } });
  }
  getRegions() {
    return this.regions;
  }
  avoidOverlapping(e) {
    e.content && setTimeout(() => {
      const s = e.content, i = s.getBoundingClientRect(), n = this.regions.map((r) => {
        if (r === e || !r.content) return 0;
        const o = r.content.getBoundingClientRect();
        return i.left < o.left + o.width && o.left < i.left + i.width ? o.height : 0;
      }).reduce((r, o) => r + o, 0);
      s.style.marginTop = `${n}px`;
    }, 10);
  }
  adjustScroll(e) {
    var s, i;
    if (!e.element) return;
    const n = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getWrapper()) === null || i === void 0 ? void 0 : i.parentElement;
    if (!n) return;
    const { clientWidth: r, scrollWidth: o } = n;
    if (o <= r) return;
    const l = n.getBoundingClientRect(), a = e.element.getBoundingClientRect(), d = a.left - l.left, c = a.right - l.left;
    d < 0 ? n.scrollLeft += d : c > r && (n.scrollLeft += c - r);
  }
  virtualAppend(e, s, i) {
    const n = () => {
      if (!this.wavesurfer) return;
      const r = this.wavesurfer.getWidth(), o = this.wavesurfer.getScroll(), l = s.clientWidth, a = this.wavesurfer.getDuration(), d = Math.round(e.start / a * l), c = d + (Math.round((e.end - e.start) / a * l) || 1) > o && d < o + r;
      c && !i.parentElement ? s.appendChild(i) : !c && i.parentElement && i.remove();
    };
    setTimeout(() => {
      if (!this.wavesurfer) return;
      n();
      const r = this.wavesurfer.on("scroll", n);
      this.subscriptions.push(e.once("remove", r), r);
    }, 0);
  }
  saveRegion(e) {
    if (!e.element) return;
    this.virtualAppend(e, this.regionsContainer, e.element), this.avoidOverlapping(e), this.regions.push(e);
    const s = [e.on("update", (i) => {
      i || this.adjustScroll(e), this.emit("region-update", e, i);
    }), e.on("update-end", () => {
      this.avoidOverlapping(e), this.emit("region-updated", e);
    }), e.on("play", (i) => {
      var n;
      (n = this.wavesurfer) === null || n === void 0 || n.play(e.start, i);
    }), e.on("click", (i) => {
      this.emit("region-clicked", e, i);
    }), e.on("dblclick", (i) => {
      this.emit("region-double-clicked", e, i);
    }), e.on("content-changed", () => {
      this.emit("region-content-changed", e);
    }), e.once("remove", () => {
      s.forEach((i) => i()), this.regions = this.regions.filter((i) => i !== e), this.emit("region-removed", e);
    })];
    this.subscriptions.push(...s), this.emit("region-created", e);
  }
  addRegion(e) {
    var s, i;
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    const n = this.wavesurfer.getDuration(), r = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getDecodedData()) === null || i === void 0 ? void 0 : i.numberOfChannels, o = new Zi(e, n, r);
    return this.emit("region-initialized", o), n ? this.saveRegion(o) : this.subscriptions.push(this.wavesurfer.once("ready", (l) => {
      o._setTotalDuration(l), this.saveRegion(o);
    })), o;
  }
  enableDragSelection(e, s = 3) {
    var i;
    const n = (i = this.wavesurfer) === null || i === void 0 ? void 0 : i.getWrapper();
    if (!(n && n instanceof HTMLElement)) return () => {
    };
    let r = null, o = 0;
    return Qt(n, (l, a, d) => {
      r && r._onUpdate(l, d > o ? "end" : "start");
    }, (l) => {
      var a, d;
      if (o = l, !this.wavesurfer) return;
      const c = this.wavesurfer.getDuration(), h = (d = (a = this.wavesurfer) === null || a === void 0 ? void 0 : a.getDecodedData()) === null || d === void 0 ? void 0 : d.numberOfChannels, { width: p } = this.wavesurfer.getWrapper().getBoundingClientRect(), g = l / p * c, S = (l + 5) / p * c;
      r = new Zi(Object.assign(Object.assign({}, e), { start: g, end: S }), c, h), this.emit("region-initialized", r), r.element && this.regionsContainer.appendChild(r.element);
    }, () => {
      r && (this.saveRegion(r), r = null);
    }, s);
  }
  clearRegions() {
    this.regions.slice().forEach((e) => e.remove()), this.regions = [];
  }
  destroy() {
    this.clearRegions(), super.destroy(), this.regionsContainer.remove();
  }
}
const Vl = { class: "waveform-player card" }, Kl = { class: "card-header" }, ql = { class: "switch" }, Gl = { class: "waveform-wrapper flex-1" }, Yl = {
  key: 0,
  class: "overlay"
}, Xl = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, Jl = {
  key: 0,
  class: "controls"
}, Zl = { class: "time-display" }, Ql = { class: "current-time" }, ea = { class: "duration" }, ta = /* @__PURE__ */ ms({
  __name: "WaveformPlayer",
  props: {
    audioFile: { type: null },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["timeUpdate", "ready", "regionsSelected"],
  setup(t, { expose: e, emit: s }) {
    const i = t, n = s, r = Q(), o = Q(null), l = Q(!1), a = Q(0), d = Q(0), c = Q(!1), h = Q(!1), p = Q(!1), g = Q(!1), S = Q(), O = Q(!1), I = rr(() => i.isLoading || h.value), D = (_, C) => Math.random() * (C - _) + _, N = () => `rgba(${D(0, 255)}, ${D(0, 255)}, ${D(0, 255)}, 0.5)`;
    let M = fi.create();
    const v = () => N();
    function A() {
      const _ = M.getRegions().map((C) => {
        var B;
        return { start: C.start, end: C.end, color: C.color || ((B = C.options) == null ? void 0 : B.color) || v() };
      });
      n("regionsSelected", _);
    }
    Je(() => i.audioFile, async (_) => {
      if (_ && (!o.value && r.value && await z(), o.value))
        try {
          const C = URL.createObjectURL(_);
          h.value = !0, await o.value.load(C);
        } catch (C) {
          console.error("Error loading audio file:", C);
        }
    }), Je(p, (_) => {
      if (!_) {
        const C = M.getRegions();
        C.length > 1 && (C.slice(0, -1).forEach((B) => B.remove()), A());
      }
    }), Je(S, (_) => {
      _ && (_.addEventListener("dragover", (C) => {
        C.preventDefault(), g.value = !0;
      }), _.addEventListener("dragleave", () => {
        g.value = !1;
      }), _.addEventListener("drop", (C) => {
        var ye;
        C.preventDefault();
        const B = (ye = C.dataTransfer) == null ? void 0 : ye.getData("text/plain");
        if (B) {
          const _e = M.getRegions().find((ue) => ue.id === B);
          _e && (_e.remove(), A());
        }
        g.value = !1;
      }));
    });
    const z = async () => {
      if (r.value)
        try {
          o.value = Wt.create({
            container: r.value,
            waveColor: "#1976d2",
            progressColor: "#0d47a1",
            cursorColor: "#ff5722",
            barWidth: 2,
            barRadius: 3,
            height: 200,
            normalize: !0,
            backend: "WebAudio",
            dragToSeek: !1,
            interact: !1,
            plugins: [M]
          }), M.enableDragSelection({ color: v() }, 0), M.on("region-created", (_) => {
            _.setOptions({ color: v() }), lt(_), ne(_), p.value || M.getRegions().forEach((B) => {
              B !== _ && B.remove();
            }), A();
          }), M.on("region-updated", A), M.on("region-removed", A), M.on("region-clicked", (_, C) => {
            C.stopPropagation(), o.value && (o.value.setTime(_.start), a.value = _.start, n("timeUpdate", _.start));
          }), o.value.on("ready", () => {
            var _;
            c.value = !0, d.value = ((_ = o.value) == null ? void 0 : _.getDuration()) || 0, h.value = !1, n("ready");
          }), o.value.on("play", () => {
            l.value = !0;
          }), o.value.on("pause", () => {
            l.value = !1;
          }), o.value.on("finish", () => {
            l.value = !1, a.value = 0;
          }), o.value.on("timeupdate", (_) => {
            a.value = _, n("timeUpdate", _);
          }), o.value.on("seeking", (_) => {
            a.value = _, n("timeUpdate", _);
          });
        } catch (_) {
          console.error("Error initializing WaveSurfer:", _);
        }
    }, V = () => {
      !o.value || !c.value || (l.value ? o.value.pause() : o.value.play());
    }, Z = () => {
      o.value && (o.value.stop(), a.value = 0);
    }, ie = (_) => {
      if (!o.value || !c.value) return;
      const C = _ / d.value;
      o.value.seekTo(C);
    }, ee = (_) => {
      const C = Math.floor(_ / 60), B = Math.floor(_ % 60);
      return `${C.toString().padStart(2, "0")}:${B.toString().padStart(2, "0")}`;
    }, be = () => {
      O.value = !O.value, O.value ? Fe() : et();
    };
    function Fe() {
      M.getRegions().forEach((_) => lt(_));
    }
    function et() {
      M.getRegions().forEach((_) => Bt(_));
    }
    function lt(_) {
      var ue;
      if (_.__delAttached) return;
      const C = _.element;
      if (!C) return;
      _._origColor = _.color || ((ue = _.options) == null ? void 0 : ue.color);
      const B = () => {
        O.value && _.setOptions({ color: "rgba(255,0,0,0.4)" });
      }, ye = () => {
        O.value && _.setOptions({ color: _._origColor });
      }, _e = () => {
        O.value && (_.remove(), A(), O.value = !1, et());
      };
      C.addEventListener("mouseenter", B), C.addEventListener("mouseleave", ye), C.addEventListener("click", _e), _.__delAttached = { enter: B, leave: ye, click: _e };
    }
    function Bt(_) {
      const C = _.__delAttached;
      if (!C || !_.element) return;
      const B = _.element;
      B.removeEventListener("mouseenter", C.enter), B.removeEventListener("mouseleave", C.leave), B.removeEventListener("click", C.click), _.setOptions({ color: _._origColor }), delete _.__delAttached;
    }
    function ne(_) {
      if (!(_ != null && _.element)) return;
      const C = _.element;
      C.setAttribute("draggable", "true"), C.addEventListener("dragstart", (B) => {
        var ye;
        (ye = B.dataTransfer) == null || ye.setData("text/plain", _.id), document.body.classList.add("dragging-region");
      }), C.addEventListener("dragend", () => {
        document.body.classList.remove("dragging-region"), g.value = !1;
      });
    }
    return $n(async () => {
      await ni(), await z();
    }), li(() => {
      o.value && o.value.destroy();
    }), e({
      seekTo: ie,
      togglePlayPause: V,
      stop: Z
    }), (_, C) => (le(), fe("div", Vl, [
      W("div", Kl, [
        C[4] || (C[4] = W("i", { class: "mdi mdi-waveform icon" }, null, -1)),
        C[5] || (C[5] = W("span", { class: "title" }, "Audio Waveform", -1)),
        C[6] || (C[6] = W("div", { class: "flex-1" }, null, -1)),
        W("label", ql, [
          Si(W("input", {
            type: "checkbox",
            "onUpdate:modelValue": C[0] || (C[0] = (B) => p.value = B)
          }, null, 512), [
            [Ll, p.value]
          ]),
          C[1] || (C[1] = W("span", { class: "slider" }, null, -1)),
          C[2] || (C[2] = W("span", { class: "switch-label" }, "Multiple", -1))
        ]),
        W("button", {
          class: nt(["btn btn-icon", { shake: O.value, "btn-danger": O.value }]),
          onClick: be,
          title: "Delete mode"
        }, C[3] || (C[3] = [
          W("i", { class: "mdi mdi-delete" }, null, -1)
        ]), 2)
      ]),
      W("div", Gl, [
        I.value ? (le(), fe("div", Yl, C[7] || (C[7] = [
          W("div", { class: "spinner" }, null, -1)
        ]))) : gt("", !0),
        _.audioFile ? gt("", !0) : (le(), fe("div", Xl, C[8] || (C[8] = [
          W("i", {
            class: "mdi mdi-waveform icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          W("p", { class: "text-muted mt-4" }, "Load an audio file to see waveform", -1)
        ]))),
        Si(W("div", {
          ref_key: "waveformContainer",
          ref: r,
          class: "waveform-container"
        }, null, 512), [
          [vl, _.audioFile]
        ])
      ]),
      _.audioFile ? (le(), fe("div", Jl, [
        W("button", {
          class: nt(["btn btn-icon", { "btn-danger": l.value }]),
          onClick: V,
          title: "Play / Pause"
        }, [
          W("i", {
            class: nt([l.value ? "mdi mdi-pause" : "mdi mdi-play", "icon"])
          }, null, 2)
        ], 2),
        W("button", {
          class: "btn btn-icon btn-outline",
          onClick: Z,
          title: "Stop"
        }, C[9] || (C[9] = [
          W("i", { class: "mdi mdi-stop" }, null, -1)
        ])),
        C[11] || (C[11] = W("div", { class: "flex-1" }, null, -1)),
        W("div", Zl, [
          W("span", Ql, rt(ee(a.value)), 1),
          C[10] || (C[10] = W("span", { class: "separator" }, "/", -1)),
          W("span", ea, rt(ee(d.value)), 1)
        ])
      ])) : gt("", !0)
    ]));
  }
}), sa = '.waveform-wrapper[data-v-86e512dd]{flex:1;display:flex;align-items:center;justify-content:center;padding:16px}.empty-state[data-v-86e512dd]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-86e512dd]{font-size:18px;margin:0}.waveform-container[data-v-86e512dd]{width:100%;background:#fff;border-radius:8px}.card-header[data-v-86e512dd]{display:flex;align-items:center;padding:16px;gap:8px;margin-bottom:8px}.switch[data-v-86e512dd]{position:relative;display:inline-flex;align-items:center;margin-right:8px}.switch input[data-v-86e512dd]{opacity:0;width:0;height:0}.switch .slider[data-v-86e512dd]{width:34px;height:14px;background:#ccc;border-radius:14px;position:relative;transition:background .2s;margin-right:4px}.switch .slider[data-v-86e512dd]:before{content:"";position:absolute;width:18px;height:18px;background:#fff;border-radius:50%;top:-2px;left:-2px;transition:transform .2s;box-shadow:0 0 2px #0000004d}.switch input:checked+.slider[data-v-86e512dd]{background:#4caf50}.switch input:checked+.slider[data-v-86e512dd]:before{transform:translate(18px)}.switch .switch-label[data-v-86e512dd]{font-size:14px;-webkit-user-select:none;user-select:none}.controls[data-v-86e512dd]{display:flex;align-items:center;padding:16px;border-top:1px solid #e0e0e0;background:#f5f5f5}.controls .btn+.btn[data-v-86e512dd]{margin-left:8px}.time-display[data-v-86e512dd]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:16px;color:#424242}.time-display .separator[data-v-86e512dd]{margin:0 8px;color:#999}.time-display .current-time[data-v-86e512dd]{font-weight:500}@keyframes shake-86e512dd{0%{transform:rotate(0)}25%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}to{transform:rotate(0)}}.shake[data-v-86e512dd]{animation:shake-86e512dd .6s infinite}', hi = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [i, n] of e)
    s[i] = n;
  return s;
}, ia = /* @__PURE__ */ hi(ta, [["styles", [sa]], ["__scopeId", "data-v-86e512dd"]]);
function Qi(t) {
  const e = [];
  return t.split(/\n\s*\n/).filter((i) => i.trim()).forEach((i) => {
    const n = i.trim().split(`
`);
    if (n.length < 3 || !n[0].match(/^\d+$/)) return;
    const o = n[0], l = n[1].match(/^(\d{2}:\d{2}:\d{2},\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2},\d{3})$/);
    if (!l) {
      console.warn(`Skipping malformed SRT timestamp line: ${n[1]}`);
      return;
    }
    const [, a, d] = l;
    try {
      const c = en(a), h = en(d), p = n.slice(2).join(`
`).trim();
      p && e.push({
        id: `srt-${o}`,
        startTime: c,
        endTime: h,
        text: p,
        originalStartTime: a,
        originalEndTime: d
      });
    } catch (c) {
      console.warn(`Error parsing SRT timestamps: ${c}`);
    }
  }), e.sort((i, n) => i.startTime - n.startTime);
}
function en(t) {
  const e = t.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!e)
    throw new Error(`Invalid SRT timestamp format: ${t}`);
  const s = parseInt(e[1], 10), i = parseInt(e[2], 10), n = parseInt(e[3], 10), r = parseInt(e[4], 10);
  if (s < 0 || i < 0 || i >= 60 || n < 0 || n >= 60 || r < 0 || r >= 1e3)
    throw new Error(`Invalid time values in SRT timestamp: ${t}`);
  return s * 3600 + i * 60 + n + r / 1e3;
}
function tn(t) {
  const e = Math.floor(t), s = Math.floor(e / 3600), i = Math.floor(e % 3600 / 60), n = e % 60;
  return s > 0 ? `${s.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}` : `${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
const na = { class: "subtitle-panel card" }, ra = { class: "subtitle-wrapper flex-1" }, oa = {
  key: 0,
  class: "overlay"
}, la = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, aa = { class: "subtitle-content" }, ca = ["onClick", "onMouseenter"], ua = { class: "entry-header" }, da = { class: "timestamp" }, fa = { class: "region-colors" }, ha = { class: "duration" }, pa = { class: "entry-text" }, ga = /* @__PURE__ */ ms({
  __name: "SubtitlePanel",
  props: {
    subtitleEntries: { type: Array },
    currentTime: { type: Number },
    isLoading: { type: Boolean },
    selectedRanges: { type: Array }
  },
  emits: ["seekTo"],
  setup(t, { emit: e }) {
    const s = t, i = e, n = Q(null), r = (p) => s.currentTime >= p.startTime && s.currentTime < p.endTime, o = (p, g) => `${tn(p)} → ${tn(g)}`, l = (p) => `${Math.round(p * 10) / 10}s`, a = (p) => {
      n.value = p;
    }, d = () => {
      n.value = null;
    }, c = (p) => (s.selectedRanges ?? []).some((g) => p.endTime >= g.start && p.startTime <= g.end), h = (p) => (s.selectedRanges ?? []).filter((g) => p.endTime >= g.start && p.startTime <= g.end).map((g) => g.color);
    return (p, g) => (le(), fe("div", na, [
      g[2] || (g[2] = W("div", { class: "card-header" }, [
        W("i", { class: "mdi mdi-subtitles icon" }),
        W("span", { class: "title" }, "Subtitles")
      ], -1)),
      W("div", ra, [
        p.isLoading && p.subtitleEntries.length === 0 ? (le(), fe("div", oa, g[0] || (g[0] = [
          W("div", { class: "spinner" }, null, -1)
        ]))) : gt("", !0),
        p.subtitleEntries.length === 0 && !p.isLoading ? (le(), fe("div", la, g[1] || (g[1] = [
          W("i", {
            class: "mdi mdi-subtitles-outline icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          W("p", { class: "text-muted mt-4" }, "Load an SRT subtitle file to see entries here", -1)
        ]))) : gt("", !0),
        W("div", aa, [
          (le(!0), fe(Se, null, js(p.subtitleEntries, (S) => (le(), fe("div", {
            key: S.id,
            class: nt([
              "subtitle-entry",
              { active: r(S) },
              { hover: n.value === S.id },
              { selected: c(S) }
            ]),
            onClick: (O) => i("seekTo", S.startTime),
            onMouseenter: (O) => a(S.id),
            onMouseleave: d
          }, [
            W("div", ua, [
              W("span", da, rt(o(S.startTime, S.endTime)), 1),
              W("div", fa, [
                (le(!0), fe(Se, null, js(h(S), (O, I) => (le(), fe("span", {
                  key: I,
                  class: "color-box",
                  style: fs({ backgroundColor: O })
                }, null, 4))), 128))
              ]),
              W("span", ha, rt(l(S.endTime - S.startTime)), 1)
            ]),
            W("div", pa, rt(S.text), 1)
          ], 42, ca))), 128))
        ])
      ])
    ]));
  }
}), ma = ".subtitle-panel[data-v-79055703]{padding:16px 8px 16px 16px;max-height:100%;overflow-y:auto}.subtitle-content[data-v-79055703]{overflow-y:auto;padding:8px}.empty-state[data-v-79055703]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-79055703]{font-size:18px;margin:0}.subtitle-entry[data-v-79055703]{padding:16px;margin-bottom:4px;border-radius:8px;cursor:pointer;transition:all .2s ease;border:2px solid transparent}.subtitle-entry[data-v-79055703]:hover{background-color:#1976d20d}.subtitle-entry.active[data-v-79055703]{background-color:#1976d21a;border-left:4px solid #1976d2;transform:translate(-4px);box-shadow:0 2px 8px #1976d233}.subtitle-entry.selected[data-v-79055703]{background-color:#4caf501f;border-left:4px solid #4caf50}.subtitle-entry.hover[data-v-79055703]{transform:scale(1.02);font-weight:500}.subtitle-entry .entry-header[data-v-79055703]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.subtitle-entry .entry-header .timestamp[data-v-79055703]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:14px;color:#424242;background:#4242421a;padding:2px 8px;border-radius:4px}.subtitle-entry .entry-header .duration[data-v-79055703]{font-size:14px;color:#1976d2b3;font-weight:500}.subtitle-entry .entry-text[data-v-79055703]{line-height:1.6;color:#000000de;font-size:16px}.region-colors[data-v-79055703]{display:flex;gap:4px;margin-left:4px}.region-colors .color-box[data-v-79055703]{width:12px;height:12px;border-radius:2px}.card-header[data-v-79055703]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.subtitle-wrapper[data-v-79055703]{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden}", va = /* @__PURE__ */ hi(ga, [["styles", [ma]], ["__scopeId", "data-v-79055703"]]), ba = {
  0: {
    audio: "https://files.catbox.moe/2b9vpf.mp3",
    srt: "https://files.catbox.moe/tv0ncl.srt",
    title: "KLER - Na vinili"
  },
  1: {
    audio: "https://files.catbox.moe/ov7o7h.mp3",
    srt: "https://files.catbox.moe/nzyec7.srt",
    title: "FLIT - YIZHACHOK"
  }
}, ya = { class: "app-container" }, _a = { class: "header" }, xa = {
  key: 0,
  class: "dropdown"
}, wa = ["onClick"], Ca = { class: "main-content grid-2col" }, Sa = { class: "subtitle-column card flex-1" }, Ea = { class: "waveform-column card flex-1" }, Ta = /* @__PURE__ */ ms({
  __name: "App",
  setup(t) {
    const e = Q(null), s = Q(null), i = Q(null), n = Q([]), r = Q(0), o = Q(!1), l = Q(!1), a = Q(), d = Q(!1), c = Q(ba), h = Q([]), p = async (M) => {
      try {
        d.value = !1, await g(M.srt), await S(M.audio);
      } catch (v) {
        console.error("Error loading mock data:", v), o.value = !1, l.value = !1;
      }
    }, g = async (M) => {
      o.value = !0;
      const A = await (await fetch(M)).text();
      n.value = Qi(A), o.value = !1;
    }, S = async (M) => {
      l.value = !0;
      const A = await (await fetch(M)).blob(), z = A.type.split("/")[1] || "mp3", V = new File([A], `audio.${z}`, {
        type: A.type
      });
      s.value = V;
    };
    Je(e, async (M) => {
      M && (s.value = M);
    }), Je(i, async (M) => {
      if (M) {
        o.value = !0;
        try {
          const v = await M.text();
          n.value = Qi(v);
        } catch (v) {
          console.error("Error parsing SRT file:", v);
        } finally {
          o.value = !1;
        }
      }
    });
    const O = (M) => {
      r.value = M;
    }, I = () => {
      console.log("Waveform is ready"), l.value = !1;
    }, D = (M) => {
      var v;
      (v = a.value) == null || v.seekTo(M);
    }, N = (M) => {
      h.value = M;
    };
    return (M, v) => (le(), fe("div", ya, [
      W("header", _a, [
        v[3] || (v[3] = W("h1", { class: "title" }, "WaveSurfer Transcript App", -1)),
        v[4] || (v[4] = W("div", { class: "spacer" }, null, -1)),
        W("div", {
          class: "dropdown-wrapper",
          onMouseleave: v[1] || (v[1] = (A) => d.value = !1)
        }, [
          W("button", {
            class: "btn btn-outline",
            onClick: v[0] || (v[0] = (A) => d.value = !d.value)
          }, v[2] || (v[2] = [
            W("i", { class: "mdi mdi-database icon" }, null, -1),
            sr(" Mock Data ")
          ])),
          d.value ? (le(), fe("ul", xa, [
            (le(!0), fe(Se, null, js(c.value, (A, z) => (le(), fe("li", {
              key: z,
              onClick: (V) => p(A)
            }, rt(A.title), 9, wa))), 128))
          ])) : gt("", !0)
        ], 32)
      ]),
      W("main", Ca, [
        W("div", Sa, [
          Pe(va, {
            "subtitle-entries": n.value,
            "current-time": r.value,
            "is-loading": o.value,
            "selected-ranges": h.value,
            onSeekTo: D
          }, null, 8, ["subtitle-entries", "current-time", "is-loading", "selected-ranges"])
        ]),
        W("div", Ea, [
          Pe(ia, {
            "audio-file": s.value,
            "is-loading": l.value,
            onTimeUpdate: O,
            onReady: I,
            onRegionsSelected: N,
            ref_key: "waveformPlayer",
            ref: a
          }, null, 8, ["audio-file", "is-loading"])
        ])
      ])
    ]));
  }
}), Ra = "*{box-sizing:border-box}body{margin:0;padding:0;font-family:Roboto,sans-serif;font-size:16px;line-height:1.5;background-color:#fafafa}.app-container{display:flex;flex-direction:column}.main-content{flex:1;display:flex;max-height:100%}.flex{display:flex}.flex-center,.overlay{display:flex;justify-content:center;align-items:center}.flex-1{flex:1}.grid-2col{display:flex;height:100%}.card{background:#fff;box-shadow:0 2px 4px #0000001a;display:flex;flex-direction:column;height:500px}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;padding:8px 16px;border-radius:8px;font-size:16px;display:inline-flex;align-items:center;gap:4px;background:#1976d2;color:#fff}.btn.btn-outline{background:transparent;border:2px solid #82b1ff;color:#82b1ff}.btn.btn-danger{background:#ff5252}.btn.btn-icon{padding:4px}.icon{font-size:24px}.overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff9;z-index:10}.spinner{width:48px;height:48px;border:4px solid rgba(25,118,210,.2);border-top-color:#1976d2;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.header{display:flex;align-items:center;padding:16px;background:#1976d2;color:#fff}.header .spacer{flex:1}.controls{display:flex;align-items:center;gap:8px;padding:16px;background:#f5f5f5}.text-muted{color:#9e9e9e}.mt-4{margin-top:16px}.file-input{margin-left:8px}.dropdown{z-index:10;position:absolute;background:#fff;list-style:none;margin:0;padding:0;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 4px #0000001a}.dropdown li{padding:8px 16px;cursor:pointer;color:#424242}.dropdown li:hover{background:#1976d2;color:#fff}.dropdown-wrapper{position:relative}", Pa = /* @__PURE__ */ hi(Ta, [["styles", [Ra]]]), Ma = /* @__PURE__ */ Ol(Pa, { shadowRoot: !0 });
customElements.define("subtitle-wave-player", Ma);
