/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function zs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const G = {}, le = [], Wt = () => {
}, rr = () => !1, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bs = (e) => e.startsWith("onUpdate:"), st = Object.assign, Us = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, or = Object.prototype.hasOwnProperty, B = (e, t) => or.call(e, t), W = Array.isArray, ae = (e) => os(e) === "[object Map]", Xi = (e) => os(e) === "[object Set]", F = (e) => typeof e == "function", Q = (e) => typeof e == "string", Zt = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Yi = (e) => (Z(e) || F(e)) && F(e.then) && F(e.catch), Ji = Object.prototype.toString, os = (e) => Ji.call(e), lr = (e) => os(e).slice(8, -1), ls = (e) => os(e) === "[object Object]", Vs = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Te = /* @__PURE__ */ zs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), as = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, ar = /-(\w)/g, Rt = as(
  (e) => e.replace(ar, (t, s) => s ? s.toUpperCase() : "")
), cr = /\B([A-Z])/g, wt = as(
  (e) => e.replace(cr, "-$1").toLowerCase()
), Zi = as((e) => e.charAt(0).toUpperCase() + e.slice(1)), ys = as(
  (e) => e ? `on${Zi(e)}` : ""
), Xt = (e, t) => !Object.is(e, t), _s = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Os = (e, t, s, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, ur = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, gi = (e) => {
  const t = Q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let mi;
const cs = () => mi || (mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function us(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const i = e[s], n = Q(i) ? pr(i) : us(i);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (Q(e) || Z(e))
    return e;
}
const dr = /;(?![^(]*\))/g, fr = /:([^]+)/, hr = /\/\*[^]*?\*\//g;
function pr(e) {
  const t = {};
  return e.replace(hr, "").split(dr).forEach((s) => {
    if (s) {
      const i = s.split(fr);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function pe(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (W(e))
    for (let s = 0; s < e.length; s++) {
      const i = pe(e[s]);
      i && (t += i + " ");
    }
  else if (Z(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mr = /* @__PURE__ */ zs(gr);
function Qi(e) {
  return !!e || e === "";
}
const tn = (e) => !!(e && e.__v_isRef === !0), ce = (e) => Q(e) ? e : e == null ? "" : W(e) || Z(e) && (e.toString === Ji || !F(e.toString)) ? tn(e) ? ce(e.value) : JSON.stringify(e, en, 2) : String(e), en = (e, t) => tn(t) ? en(e, t.value) : ae(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [i, n], r) => (s[xs(i, r) + " =>"] = n, s),
    {}
  )
} : Xi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => xs(s))
} : Zt(t) ? xs(t) : Z(t) && !W(t) && !ls(t) ? String(t) : t, xs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gt;
class vr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = gt, !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = gt;
      try {
        return gt = this, t();
      } finally {
        gt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = gt, gt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (gt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function br() {
  return gt;
}
let Y;
const ws = /* @__PURE__ */ new WeakSet();
class sn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, gt && gt.active && gt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ws.has(this) && (ws.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || rn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vi(this), on(this);
    const t = Y, s = Pt;
    Y = this, Pt = !0;
    try {
      return this.fn();
    } finally {
      ln(this), Y = t, Pt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gs(t);
      this.deps = this.depsTail = void 0, vi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ws.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let nn = 0, Re, Pe;
function rn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pe, Pe = e;
    return;
  }
  e.next = Re, Re = e;
}
function Ks() {
  nn++;
}
function qs() {
  if (--nn > 0)
    return;
  if (Pe) {
    let t = Pe;
    for (Pe = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Re; ) {
    let t = Re;
    for (Re = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function on(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ln(e) {
  let t, s = e.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), Gs(i), yr(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  e.deps = t, e.depsTail = s;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (an(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function an(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === De) || (e.globalVersion = De, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Y, i = Pt;
  Y = e, Pt = !0;
  try {
    on(e);
    const n = e.fn(e._value);
    (t.version === 0 || Xt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    Y = s, Pt = i, ln(e), e.flags &= -3;
  }
}
function Gs(e, t = !1) {
  const { dep: s, prevSub: i, nextSub: n } = e;
  if (i && (i.nextSub = n, e.prevSub = void 0), n && (n.prevSub = i, e.nextSub = void 0), s.subs === e && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Gs(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function yr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Pt = !0;
const cn = [];
function Ut() {
  cn.push(Pt), Pt = !1;
}
function Vt() {
  const e = cn.pop();
  Pt = e === void 0 ? !0 : e;
}
function vi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Y;
    Y = void 0;
    try {
      t();
    } finally {
      Y = s;
    }
  }
}
let De = 0;
class _r {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Y || !Pt || Y === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Y)
      s = this.activeLink = new _r(Y, this), Y.deps ? (s.prevDep = Y.depsTail, Y.depsTail.nextDep = s, Y.depsTail = s) : Y.deps = Y.depsTail = s, un(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = Y.depsTail, s.nextDep = void 0, Y.depsTail.nextDep = s, Y.depsTail = s, Y.deps === s && (Y.deps = i);
    }
    return s;
  }
  trigger(t) {
    this.version++, De++, this.notify(t);
  }
  notify(t) {
    Ks();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      qs();
    }
  }
}
function un(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        un(i);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ds = /* @__PURE__ */ new WeakMap(), ne = Symbol(
  ""
), ks = Symbol(
  ""
), ke = Symbol(
  ""
);
function lt(e, t, s) {
  if (Pt && Y) {
    let i = Ds.get(e);
    i || Ds.set(e, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new Xs()), n.map = i, n.key = s), n.track();
  }
}
function zt(e, t, s, i, n, r) {
  const o = Ds.get(e);
  if (!o) {
    De++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ks(), t === "clear")
    o.forEach(l);
  else {
    const a = W(e), d = a && Vs(s);
    if (a && s === "length") {
      const c = Number(i);
      o.forEach((h, p) => {
        (p === "length" || p === ke || !Zt(p) && p >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ke)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(ne)), ae(e) && l(o.get(ks)));
          break;
        case "delete":
          a || (l(o.get(ne)), ae(e) && l(o.get(ks)));
          break;
        case "set":
          ae(e) && l(o.get(ne));
          break;
      }
  }
  qs();
}
function re(e) {
  const t = U(e);
  return t === e ? t : (lt(t, "iterate", ke), St(e) ? t : t.map(nt));
}
function ds(e) {
  return lt(e = U(e), "iterate", ke), e;
}
const xr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cs(this, Symbol.iterator, nt);
  },
  concat(...e) {
    return re(this).concat(
      ...e.map((t) => W(t) ? re(t) : t)
    );
  },
  entries() {
    return Cs(this, "entries", (e) => (e[1] = nt(e[1]), e));
  },
  every(e, t) {
    return Ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ft(this, "filter", e, t, (s) => s.map(nt), arguments);
  },
  find(e, t) {
    return Ft(this, "find", e, t, nt, arguments);
  },
  findIndex(e, t) {
    return Ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ft(this, "findLast", e, t, nt, arguments);
  },
  findLastIndex(e, t) {
    return Ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ss(this, "includes", e);
  },
  indexOf(...e) {
    return Ss(this, "indexOf", e);
  },
  join(e) {
    return re(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xe(this, "pop");
  },
  push(...e) {
    return xe(this, "push", e);
  },
  reduce(e, ...t) {
    return bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bi(this, "reduceRight", e, t);
  },
  shift() {
    return xe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xe(this, "splice", e);
  },
  toReversed() {
    return re(this).toReversed();
  },
  toSorted(e) {
    return re(this).toSorted(e);
  },
  toSpliced(...e) {
    return re(this).toSpliced(...e);
  },
  unshift(...e) {
    return xe(this, "unshift", e);
  },
  values() {
    return Cs(this, "values", nt);
  }
};
function Cs(e, t, s) {
  const i = ds(e), n = i[t]();
  return i !== e && !St(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.value && (r.value = s(r.value)), r;
  }), n;
}
const wr = Array.prototype;
function Ft(e, t, s, i, n, r) {
  const o = ds(e), l = o !== e && !St(e), a = o[t];
  if (a !== wr[t]) {
    const h = a.apply(e, r);
    return l ? nt(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, p) {
    return s.call(this, nt(h), p, e);
  } : s.length > 2 && (d = function(h, p) {
    return s.call(this, h, p, e);
  }));
  const c = a.call(o, d, i);
  return l && n ? n(c) : c;
}
function bi(e, t, s, i) {
  const n = ds(e);
  let r = s;
  return n !== e && (St(e) ? s.length > 3 && (r = function(o, l, a) {
    return s.call(this, o, l, a, e);
  }) : r = function(o, l, a) {
    return s.call(this, o, nt(l), a, e);
  }), n[t](r, ...i);
}
function Ss(e, t, s) {
  const i = U(e);
  lt(i, "iterate", ke);
  const n = i[t](...s);
  return (n === -1 || n === !1) && Qs(s[0]) ? (s[0] = U(s[0]), i[t](...s)) : n;
}
function xe(e, t, s = []) {
  Ut(), Ks();
  const i = U(e)[t].apply(e, s);
  return qs(), Vt(), i;
}
const Cr = /* @__PURE__ */ zs("__proto__,__v_isRef,__isVue"), dn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zt)
);
function Sr(e) {
  Zt(e) || (e = String(e));
  const t = U(this);
  return lt(t, "has", e), t.hasOwnProperty(e);
}
class fn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, i) {
    if (s === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !n;
    if (s === "__v_isReadonly")
      return n;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return i === (n ? r ? kr : mn : r ? gn : pn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = W(t);
    if (!n) {
      let a;
      if (o && (a = xr[s]))
        return a;
      if (s === "hasOwnProperty")
        return Sr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      at(t) ? t : i
    );
    return (Zt(s) ? dn.has(s) : Cr(s)) || (n || lt(t, "get", s), r) ? l : at(l) ? o && Vs(s) ? l : l.value : Z(l) ? n ? vn(l) : Js(l) : l;
  }
}
class hn extends fn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, i, n) {
    let r = t[s];
    if (!this._isShallow) {
      const a = Yt(r);
      if (!St(i) && !Yt(i) && (r = U(r), i = U(i)), !W(t) && at(r) && !at(i))
        return a ? !1 : (r.value = i, !0);
    }
    const o = W(t) && Vs(s) ? Number(s) < t.length : B(t, s), l = Reflect.set(
      t,
      s,
      i,
      at(t) ? t : n
    );
    return t === U(n) && (o ? Xt(i, r) && zt(t, "set", s, i) : zt(t, "add", s, i)), l;
  }
  deleteProperty(t, s) {
    const i = B(t, s);
    t[s];
    const n = Reflect.deleteProperty(t, s);
    return n && i && zt(t, "delete", s, void 0), n;
  }
  has(t, s) {
    const i = Reflect.has(t, s);
    return (!Zt(s) || !dn.has(s)) && lt(t, "has", s), i;
  }
  ownKeys(t) {
    return lt(
      t,
      "iterate",
      W(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class Er extends fn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Tr = /* @__PURE__ */ new hn(), Rr = /* @__PURE__ */ new Er(), Pr = /* @__PURE__ */ new hn(!0);
const $s = (e) => e, Ue = (e) => Reflect.getPrototypeOf(e);
function Mr(e, t, s) {
  return function(...i) {
    const n = this.__v_raw, r = U(n), o = ae(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = n[e](...i), c = s ? $s : t ? Ze : nt;
    return !t && lt(
      r,
      "iterate",
      a ? ks : ne
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
function Ve(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ar(e, t) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = U(r), l = U(n);
      e || (Xt(n, l) && lt(o, "get", n), lt(o, "get", l));
      const { has: a } = Ue(o), d = t ? $s : e ? Ze : nt;
      if (a.call(o, n))
        return d(r.get(n));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && lt(U(n), "iterate", ne), Reflect.get(n, "size", n);
    },
    has(n) {
      const r = this.__v_raw, o = U(r), l = U(n);
      return e || (Xt(n, l) && lt(o, "has", n), lt(o, "has", l)), n === l ? r.has(n) : r.has(n) || r.has(l);
    },
    forEach(n, r) {
      const o = this, l = o.__v_raw, a = U(l), d = t ? $s : e ? Ze : nt;
      return !e && lt(a, "iterate", ne), l.forEach((c, h) => n.call(r, d(c), d(h), o));
    }
  };
  return st(
    s,
    e ? {
      add: Ve("add"),
      set: Ve("set"),
      delete: Ve("delete"),
      clear: Ve("clear")
    } : {
      add(n) {
        !t && !St(n) && !Yt(n) && (n = U(n));
        const r = U(this);
        return Ue(r).has.call(r, n) || (r.add(n), zt(r, "add", n, n)), this;
      },
      set(n, r) {
        !t && !St(r) && !Yt(r) && (r = U(r));
        const o = U(this), { has: l, get: a } = Ue(o);
        let d = l.call(o, n);
        d || (n = U(n), d = l.call(o, n));
        const c = a.call(o, n);
        return o.set(n, r), d ? Xt(r, c) && zt(o, "set", n, r) : zt(o, "add", n, r), this;
      },
      delete(n) {
        const r = U(this), { has: o, get: l } = Ue(r);
        let a = o.call(r, n);
        a || (n = U(n), a = o.call(r, n)), l && l.call(r, n);
        const d = r.delete(n);
        return a && zt(r, "delete", n, void 0), d;
      },
      clear() {
        const n = U(this), r = n.size !== 0, o = n.clear();
        return r && zt(
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
    s[n] = Mr(n, e, t);
  }), s;
}
function Ys(e, t) {
  const s = Ar(e, t);
  return (i, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    B(s, n) && n in i ? s : i,
    n,
    r
  );
}
const Or = {
  get: /* @__PURE__ */ Ys(!1, !1)
}, Lr = {
  get: /* @__PURE__ */ Ys(!1, !0)
}, Dr = {
  get: /* @__PURE__ */ Ys(!0, !1)
};
const pn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap();
function $r(e) {
  switch (e) {
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
function Ir(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $r(lr(e));
}
function Js(e) {
  return Yt(e) ? e : Zs(
    e,
    !1,
    Tr,
    Or,
    pn
  );
}
function Nr(e) {
  return Zs(
    e,
    !1,
    Pr,
    Lr,
    gn
  );
}
function vn(e) {
  return Zs(
    e,
    !0,
    Rr,
    Dr,
    mn
  );
}
function Zs(e, t, s, i, n) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ir(e);
  if (r === 0)
    return e;
  const o = n.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    r === 2 ? i : s
  );
  return n.set(e, l), l;
}
function ue(e) {
  return Yt(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Yt(e) {
  return !!(e && e.__v_isReadonly);
}
function St(e) {
  return !!(e && e.__v_isShallow);
}
function Qs(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Wr(e) {
  return !B(e, "__v_skip") && Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const nt = (e) => Z(e) ? Js(e) : e, Ze = (e) => Z(e) ? vn(e) : e;
function at(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function it(e) {
  return jr(e, !1);
}
function jr(e, t) {
  return at(e) ? e : new Fr(e, t);
}
class Fr {
  constructor(t, s) {
    this.dep = new Xs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : U(t), this._value = s ? t : nt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, i = this.__v_isShallow || St(t) || Yt(t);
    t = i ? t : U(t), Xt(t, s) && (this._rawValue = t, this._value = i ? t : nt(t), this.dep.trigger());
  }
}
function bn(e) {
  return at(e) ? e.value : e;
}
const Hr = {
  get: (e, t, s) => t === "__v_raw" ? e : bn(Reflect.get(e, t, s)),
  set: (e, t, s, i) => {
    const n = e[t];
    return at(n) && !at(s) ? (n.value = s, !0) : Reflect.set(e, t, s, i);
  }
};
function yn(e) {
  return ue(e) ? e : new Proxy(e, Hr);
}
class zr {
  constructor(t, s, i) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Xs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = De - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return rn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return an(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Br(e, t, s = !1) {
  let i, n;
  return F(e) ? i = e : (i = e.get, n = e.set), new zr(i, n, s);
}
const Ke = {}, Qe = /* @__PURE__ */ new WeakMap();
let se;
function Ur(e, t = !1, s = se) {
  if (s) {
    let i = Qe.get(s);
    i || Qe.set(s, i = []), i.push(e);
  }
}
function Vr(e, t, s = G) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (x) => n ? x : St(x) || n === !1 || n === 0 ? Bt(x, 1) : Bt(x);
  let c, h, p, g, w = !1, O = !1;
  if (at(e) ? (h = () => e.value, w = St(e)) : ue(e) ? (h = () => d(e), w = !0) : W(e) ? (O = !0, w = e.some((x) => ue(x) || St(x)), h = () => e.map((x) => {
    if (at(x))
      return x.value;
    if (ue(x))
      return d(x);
    if (F(x))
      return a ? a(x, 2) : x();
  })) : F(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (p) {
      Ut();
      try {
        p();
      } finally {
        Vt();
      }
    }
    const x = se;
    se = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      se = x;
    }
  } : h = Wt, t && n) {
    const x = h, L = n === !0 ? 1 / 0 : n;
    h = () => Bt(x(), L);
  }
  const $ = br(), A = () => {
    c.stop(), $ && $.active && Us($.effects, c);
  };
  if (r && t) {
    const x = t;
    t = (...L) => {
      x(...L), A();
    };
  }
  let R = O ? new Array(e.length).fill(Ke) : Ke;
  const I = (x) => {
    if (!(!(c.flags & 1) || !c.dirty && !x))
      if (t) {
        const L = c.run();
        if (n || w || (O ? L.some((K, q) => Xt(K, R[q])) : Xt(L, R))) {
          p && p();
          const K = se;
          se = c;
          try {
            const q = [
              L,
              // pass undefined as the old value when it's changed for the first time
              R === Ke ? void 0 : O && R[0] === Ke ? [] : R,
              g
            ];
            R = L, a ? a(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            se = K;
          }
        }
      } else
        c.run();
  };
  return l && l(I), c = new sn(h), c.scheduler = o ? () => o(I, !1) : I, g = (x) => Ur(x, !1, c), p = c.onStop = () => {
    const x = Qe.get(c);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const L of x) L();
      Qe.delete(c);
    }
  }, t ? i ? I(!0) : R = c.run() : o ? o(I.bind(null, !0), !0) : c.run(), A.pause = c.pause.bind(c), A.resume = c.resume.bind(c), A.stop = A, A;
}
function Bt(e, t = 1 / 0, s) {
  if (t <= 0 || !Z(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, at(e))
    Bt(e.value, t, s);
  else if (W(e))
    for (let i = 0; i < e.length; i++)
      Bt(e[i], t, s);
  else if (Xi(e) || ae(e))
    e.forEach((i) => {
      Bt(i, t, s);
    });
  else if (ls(e)) {
    for (const i in e)
      Bt(e[i], t, s);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Bt(e[i], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function je(e, t, s, i) {
  try {
    return i ? e(...i) : e();
  } catch (n) {
    fs(n, t, s);
  }
}
function jt(e, t, s, i) {
  if (F(e)) {
    const n = je(e, t, s, i);
    return n && Yi(n) && n.catch((r) => {
      fs(r, t, s);
    }), n;
  }
  if (W(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(jt(e[r], t, s, i));
    return n;
  }
}
function fs(e, t, s, i = !0) {
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ut(), je(r, null, 10, [
        e,
        a,
        d
      ]), Vt();
      return;
    }
  }
  Kr(e, s, n, i, o);
}
function Kr(e, t, s, i = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const dt = [];
let It = -1;
const de = [];
let qt = null, oe = 0;
const _n = /* @__PURE__ */ Promise.resolve();
let ts = null;
function ti(e) {
  const t = ts || _n;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qr(e) {
  let t = It + 1, s = dt.length;
  for (; t < s; ) {
    const i = t + s >>> 1, n = dt[i], r = $e(n);
    r < e || r === e && n.flags & 2 ? t = i + 1 : s = i;
  }
  return t;
}
function ei(e) {
  if (!(e.flags & 1)) {
    const t = $e(e), s = dt[dt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $e(s) ? dt.push(e) : dt.splice(qr(t), 0, e), e.flags |= 1, xn();
  }
}
function xn() {
  ts || (ts = _n.then(Cn));
}
function Gr(e) {
  W(e) ? de.push(...e) : qt && e.id === -1 ? qt.splice(oe + 1, 0, e) : e.flags & 1 || (de.push(e), e.flags |= 1), xn();
}
function yi(e, t, s = It + 1) {
  for (; s < dt.length; s++) {
    const i = dt[s];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      dt.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function wn(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (s, i) => $e(s) - $e(i)
    );
    if (de.length = 0, qt) {
      qt.push(...t);
      return;
    }
    for (qt = t, oe = 0; oe < qt.length; oe++) {
      const s = qt[oe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    qt = null, oe = 0;
  }
}
const $e = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Cn(e) {
  try {
    for (It = 0; It < dt.length; It++) {
      const t = dt[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), je(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < dt.length; It++) {
      const t = dt[It];
      t && (t.flags &= -2);
    }
    It = -1, dt.length = 0, wn(), ts = null, (dt.length || de.length) && Cn();
  }
}
let Ct = null, Sn = null;
function es(e) {
  const t = Ct;
  return Ct = e, Sn = e && e.type.__scopeId || null, t;
}
function Xr(e, t = Ct, s) {
  if (!t || e._n)
    return e;
  const i = (...n) => {
    i._d && Mi(-1);
    const r = es(t);
    let o;
    try {
      o = e(...n);
    } finally {
      es(r), i._d && Mi(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Yr(e, t) {
  if (Ct === null)
    return e;
  const s = vs(Ct), i = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, o, l, a = G] = t[n];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Bt(o), i.push({
      dir: r,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function te(e, t, s, i) {
  const n = e.dirs, r = t && t.dirs;
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[i];
    a && (Ut(), jt(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Vt());
  }
}
const Jr = Symbol("_vte"), Zr = (e) => e.__isTeleport;
function si(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, si(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hs(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function En(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Me(e, t, s, i, n = !1) {
  if (W(e)) {
    e.forEach(
      (w, O) => Me(
        w,
        t && (W(t) ? t[O] : t),
        s,
        i,
        n
      )
    );
    return;
  }
  if (Ae(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Me(e, t, s, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? vs(i.component) : i.el, o = n ? null : r, { i: l, r: a } = e, d = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, p = U(h), g = h === G ? () => !1 : (w) => B(p, w);
  if (d != null && d !== a && (Q(d) ? (c[d] = null, g(d) && (h[d] = null)) : at(d) && (d.value = null)), F(a))
    je(a, l, 12, [o, c]);
  else {
    const w = Q(a), O = at(a);
    if (w || O) {
      const $ = () => {
        if (e.f) {
          const A = w ? g(a) ? h[a] : c[a] : a.value;
          n ? W(A) && Us(A, r) : W(A) ? A.includes(r) || A.push(r) : w ? (c[a] = [r], g(a) && (h[a] = c[a])) : (a.value = [r], e.k && (c[e.k] = a.value));
        } else w ? (c[a] = o, g(a) && (h[a] = o)) : O && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? ($.id = -1, yt($, s)) : $();
    }
  }
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const Ae = (e) => !!e.type.__asyncLoader, Tn = (e) => e.type.__isKeepAlive;
function Qr(e, t) {
  Rn(e, "a", t);
}
function to(e, t) {
  Rn(e, "da", t);
}
function Rn(e, t, s = ft) {
  const i = e.__wdc || (e.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (ps(t, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      Tn(n.parent.vnode) && eo(i, t, s, n), n = n.parent;
  }
}
function eo(e, t, s, i) {
  const n = ps(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ni(() => {
    Us(i[t], n);
  }, s);
}
function ps(e, t, s = ft, i = !1) {
  if (s) {
    const n = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = Fe(s), a = jt(t, s, e, o);
      return l(), Vt(), a;
    });
    return i ? n.unshift(r) : n.push(r), r;
  }
}
const Kt = (e) => (t, s = ft) => {
  (!Ne || e === "sp") && ps(e, (...i) => t(...i), s);
}, so = Kt("bm"), ii = Kt("m"), io = Kt(
  "bu"
), no = Kt("u"), ro = Kt(
  "bum"
), ni = Kt("um"), oo = Kt(
  "sp"
), lo = Kt("rtg"), ao = Kt("rtc");
function co(e, t = ft) {
  ps("ec", e, t);
}
const uo = Symbol.for("v-ndc");
function _i(e, t, s, i) {
  let n;
  const r = s, o = W(e);
  if (o || Q(e)) {
    const l = o && ue(e);
    let a = !1, d = !1;
    l && (a = !St(e), d = Yt(e), e = ds(e)), n = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      n[c] = t(
        a ? d ? Ze(nt(e[c])) : nt(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let l = 0; l < e; l++)
      n[l] = t(l + 1, l, void 0, r);
  } else if (Z(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      n = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const c = l[a];
        n[a] = t(e[c], c, a, r);
      }
    }
  else
    n = [];
  return n;
}
const Is = (e) => e ? Gn(e) ? vs(e) : Is(e.parent) : null, Oe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Is(e.parent),
    $root: (e) => Is(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Mn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ei(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => Do.bind(e)
  })
), Es = (e, t) => e !== G && !e.__isScriptSetup && B(e, t), fo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: i, data: n, props: r, accessCache: o, type: l, appContext: a } = e;
    let d;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return i[t];
          case 2:
            return n[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (Es(i, t))
          return o[t] = 1, i[t];
        if (n !== G && B(n, t))
          return o[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && B(d, t)
        )
          return o[t] = 3, r[t];
        if (s !== G && B(s, t))
          return o[t] = 4, s[t];
        Ns && (o[t] = 0);
      }
    }
    const c = Oe[t];
    let h, p;
    if (c)
      return t === "$attrs" && lt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (s !== G && B(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, B(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: i, setupState: n, ctx: r } = e;
    return Es(n, t) ? (n[t] = s, !0) : i !== G && B(i, t) ? (i[t] = s, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: i, appContext: n, propsOptions: r }
  }, o) {
    let l;
    return !!s[o] || e !== G && B(e, o) || Es(t, o) || (l = r[0]) && B(l, o) || B(i, o) || B(Oe, o) || B(n.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : B(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function xi(e) {
  return W(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ns = !0;
function ho(e) {
  const t = Mn(e), s = e.proxy, i = e.ctx;
  Ns = !1, t.beforeCreate && wi(t.beforeCreate, e, "bc");
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
    updated: w,
    activated: O,
    deactivated: $,
    beforeDestroy: A,
    beforeUnmount: R,
    destroyed: I,
    unmounted: x,
    render: L,
    renderTracked: K,
    renderTriggered: q,
    errorCaptured: J,
    serverPrefetch: et,
    // public API
    expose: tt,
    inheritAttrs: vt,
    // assets
    components: Mt,
    directives: Qt,
    filters: ve
  } = t;
  if (d && po(d, i, null), o)
    for (const S in o) {
      const N = o[S];
      F(N) && (i[S] = N.bind(s));
    }
  if (n) {
    const S = n.call(s, s);
    Z(S) && (e.data = Js(S));
  }
  if (Ns = !0, r)
    for (const S in r) {
      const N = r[S], ot = F(N) ? N.bind(s, s) : F(N.get) ? N.get.bind(s, s) : Wt, At = !F(N) && F(N.set) ? N.set.bind(s) : Wt, xt = Yn({
        get: ot,
        set: At
      });
      Object.defineProperty(i, S, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (Ot) => xt.value = Ot
      });
    }
  if (l)
    for (const S in l)
      Pn(l[S], i, s, S);
  if (a) {
    const S = F(a) ? a.call(s) : a;
    Reflect.ownKeys(S).forEach((N) => {
      _o(N, S[N]);
    });
  }
  c && wi(c, e, "c");
  function C(S, N) {
    W(N) ? N.forEach((ot) => S(ot.bind(s))) : N && S(N.bind(s));
  }
  if (C(so, h), C(ii, p), C(io, g), C(no, w), C(Qr, O), C(to, $), C(co, J), C(ao, K), C(lo, q), C(ro, R), C(ni, x), C(oo, et), W(tt))
    if (tt.length) {
      const S = e.exposed || (e.exposed = {});
      tt.forEach((N) => {
        Object.defineProperty(S, N, {
          get: () => s[N],
          set: (ot) => s[N] = ot
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === Wt && (e.render = L), vt != null && (e.inheritAttrs = vt), Mt && (e.components = Mt), Qt && (e.directives = Qt), et && En(e);
}
function po(e, t, s = Wt) {
  W(e) && (e = Ws(e));
  for (const i in e) {
    const n = e[i];
    let r;
    Z(n) ? "default" in n ? r = Ge(
      n.from || i,
      n.default,
      !0
    ) : r = Ge(n.from || i) : r = Ge(n), at(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function wi(e, t, s) {
  jt(
    W(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Pn(e, t, s, i) {
  let n = i.includes(".") ? zn(s, i) : () => s[i];
  if (Q(e)) {
    const r = t[e];
    F(r) && he(n, r);
  } else if (F(e))
    he(n, e.bind(s));
  else if (Z(e))
    if (W(e))
      e.forEach((r) => Pn(r, t, s, i));
    else {
      const r = F(e.handler) ? e.handler.bind(s) : t[e.handler];
      F(r) && he(n, r, e);
    }
}
function Mn(e) {
  const t = e.type, { mixins: s, extends: i } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !n.length && !s && !i ? a = t : (a = {}, n.length && n.forEach(
    (d) => ss(a, d, o, !0)
  ), ss(a, t, o)), Z(t) && r.set(t, a), a;
}
function ss(e, t, s, i = !1) {
  const { mixins: n, extends: r } = t;
  r && ss(e, r, s, !0), n && n.forEach(
    (o) => ss(e, o, s, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const l = go[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const go = {
  data: Ci,
  props: Si,
  emits: Si,
  // objects
  methods: Se,
  computed: Se,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: Se,
  directives: Se,
  // watch
  watch: vo,
  // provide / inject
  provide: Ci,
  inject: mo
};
function Ci(e, t) {
  return t ? e ? function() {
    return st(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mo(e, t) {
  return Se(Ws(e), Ws(t));
}
function Ws(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Se(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Si(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    xi(e),
    xi(t ?? {})
  ) : t;
}
function vo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = st(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    s[i] = ct(e[i], t[i]);
  return s;
}
function An() {
  return {
    app: null,
    config: {
      isNativeTag: rr,
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
let bo = 0;
function yo(e, t) {
  return function(i, n = null) {
    F(i) || (i = st({}, i)), n != null && !Z(n) && (n = null);
    const r = An(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: bo++,
      _component: i,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: el,
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
          const g = d._ceVNode || Et(i, n);
          return g.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, c, p), a = !0, d._container = c, c.__vue_app__ = d, vs(g.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (jt(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, d;
      },
      runWithContext(c) {
        const h = fe;
        fe = d;
        try {
          return c();
        } finally {
          fe = h;
        }
      }
    };
    return d;
  };
}
let fe = null;
function _o(e, t) {
  if (ft) {
    let s = ft.provides;
    const i = ft.parent && ft.parent.provides;
    i === s && (s = ft.provides = Object.create(i)), s[e] = t;
  }
}
function Ge(e, t, s = !1) {
  const i = ft || Ct;
  if (i || fe) {
    let n = fe ? fe._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return s && F(t) ? t.call(i && i.proxy) : t;
  }
}
const On = {}, Ln = () => Object.create(On), Dn = (e) => Object.getPrototypeOf(e) === On;
function xo(e, t, s, i = !1) {
  const n = {}, r = Ln();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), kn(e, t, n, r);
  for (const o in e.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? e.props = i ? n : Nr(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function wo(e, t, s, i) {
  const {
    props: n,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = U(n), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let p = c[h];
        if (gs(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (a)
          if (B(r, p))
            g !== r[p] && (r[p] = g, d = !0);
          else {
            const w = Rt(p);
            n[w] = js(
              a,
              l,
              w,
              g,
              e,
              !1
            );
          }
        else
          g !== r[p] && (r[p] = g, d = !0);
      }
    }
  } else {
    kn(e, t, n, r) && (d = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !B(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = wt(h)) === h || !B(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (n[h] = js(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete n[h]);
    if (r !== l)
      for (const h in r)
        (!t || !B(t, h)) && (delete r[h], d = !0);
  }
  d && zt(e.attrs, "set", "");
}
function kn(e, t, s, i) {
  const [n, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Te(a))
        continue;
      const d = t[a];
      let c;
      n && B(n, c = Rt(a)) ? !r || !r.includes(c) ? s[c] = d : (l || (l = {}))[c] = d : gs(e.emitsOptions, a) || (!(a in i) || d !== i[a]) && (i[a] = d, o = !0);
    }
  if (r) {
    const a = U(s), d = l || G;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = js(
        n,
        a,
        h,
        d[h],
        e,
        !B(d, h)
      );
    }
  }
  return o;
}
function js(e, t, s, i, n, r) {
  const o = e[s];
  if (o != null) {
    const l = B(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && F(a)) {
        const { propsDefaults: d } = n;
        if (s in d)
          i = d[s];
        else {
          const c = Fe(n);
          i = d[s] = a.call(
            null,
            t
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
    ] && (i === "" || i === wt(s)) && (i = !0));
  }
  return i;
}
const Co = /* @__PURE__ */ new WeakMap();
function $n(e, t, s = !1) {
  const i = s ? Co : t.propsCache, n = i.get(e);
  if (n)
    return n;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!F(e)) {
    const c = (h) => {
      a = !0;
      const [p, g] = $n(h, t, !0);
      st(o, p), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return Z(e) && i.set(e, le), le;
  if (W(r))
    for (let c = 0; c < r.length; c++) {
      const h = Rt(r[c]);
      Ei(h) && (o[h] = G);
    }
  else if (r)
    for (const c in r) {
      const h = Rt(c);
      if (Ei(h)) {
        const p = r[c], g = o[h] = W(p) || F(p) ? { type: p } : st({}, p), w = g.type;
        let O = !1, $ = !0;
        if (W(w))
          for (let A = 0; A < w.length; ++A) {
            const R = w[A], I = F(R) && R.name;
            if (I === "Boolean") {
              O = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          O = F(w) && w.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = O, g[
          1
          /* shouldCastTrue */
        ] = $, (O || B(g, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return Z(e) && i.set(e, d), d;
}
function Ei(e) {
  return e[0] !== "$" && !Te(e);
}
const ri = (e) => e[0] === "_" || e === "$stable", oi = (e) => W(e) ? e.map(Nt) : [Nt(e)], So = (e, t, s) => {
  if (t._n)
    return t;
  const i = Xr((...n) => oi(t(...n)), s);
  return i._c = !1, i;
}, In = (e, t, s) => {
  const i = e._ctx;
  for (const n in e) {
    if (ri(n)) continue;
    const r = e[n];
    if (F(r))
      t[n] = So(n, r, i);
    else if (r != null) {
      const o = oi(r);
      t[n] = () => o;
    }
  }
}, Nn = (e, t) => {
  const s = oi(t);
  e.slots.default = () => s;
}, Wn = (e, t, s) => {
  for (const i in t)
    (s || !ri(i)) && (e[i] = t[i]);
}, Eo = (e, t, s) => {
  const i = e.slots = Ln();
  if (e.vnode.shapeFlag & 32) {
    const n = t.__;
    n && Os(i, "__", n, !0);
    const r = t._;
    r ? (Wn(i, t, s), s && Os(i, "_", r, !0)) : In(t, i);
  } else t && Nn(e, t);
}, To = (e, t, s) => {
  const { vnode: i, slots: n } = e;
  let r = !0, o = G;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Wn(n, t, s) : (r = !t.$stable, In(t, n)), o = t;
  } else t && (Nn(e, t), o = { default: 1 });
  if (r)
    for (const l in n)
      !ri(l) && o[l] == null && delete n[l];
}, yt = Fo;
function Ro(e) {
  return Po(e);
}
function Po(e, t) {
  const s = cs();
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
    setScopeId: g = Wt,
    insertStaticContent: w
  } = e, O = (u, f, m, y = null, v = null, b = null, P = void 0, T = null, E = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !we(u, f) && (y = Be(u), Ot(u, v, b, !0), u = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: _, ref: k, shapeFlag: M } = f;
    switch (_) {
      case ms:
        $(u, f, m, y);
        break;
      case Jt:
        A(u, f, m, y);
        break;
      case Rs:
        u == null && R(f, m, y, P);
        break;
      case Tt:
        Mt(
          u,
          f,
          m,
          y,
          v,
          b,
          P,
          T,
          E
        );
        break;
      default:
        M & 1 ? L(
          u,
          f,
          m,
          y,
          v,
          b,
          P,
          T,
          E
        ) : M & 6 ? Qt(
          u,
          f,
          m,
          y,
          v,
          b,
          P,
          T,
          E
        ) : (M & 64 || M & 128) && _.process(
          u,
          f,
          m,
          y,
          v,
          b,
          P,
          T,
          E,
          ye
        );
    }
    k != null && v ? Me(k, u && u.ref, b, f || u, !f) : k == null && u && u.ref != null && Me(u.ref, null, b, u, !0);
  }, $ = (u, f, m, y) => {
    if (u == null)
      i(
        f.el = l(f.children),
        m,
        y
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && d(v, f.children);
    }
  }, A = (u, f, m, y) => {
    u == null ? i(
      f.el = a(f.children || ""),
      m,
      y
    ) : f.el = u.el;
  }, R = (u, f, m, y) => {
    [u.el, u.anchor] = w(
      u.children,
      f,
      m,
      y,
      u.el,
      u.anchor
    );
  }, I = ({ el: u, anchor: f }, m, y) => {
    let v;
    for (; u && u !== f; )
      v = p(u), i(u, m, y), u = v;
    i(f, m, y);
  }, x = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, L = (u, f, m, y, v, b, P, T, E) => {
    f.type === "svg" ? P = "svg" : f.type === "math" && (P = "mathml"), u == null ? K(
      f,
      m,
      y,
      v,
      b,
      P,
      T,
      E
    ) : et(
      u,
      f,
      v,
      b,
      P,
      T,
      E
    );
  }, K = (u, f, m, y, v, b, P, T) => {
    let E, _;
    const { props: k, shapeFlag: M, transition: D, dirs: j } = u;
    if (E = u.el = o(
      u.type,
      b,
      k && k.is,
      k
    ), M & 8 ? c(E, u.children) : M & 16 && J(
      u.children,
      E,
      null,
      y,
      v,
      Ts(u, b),
      P,
      T
    ), j && te(u, null, y, "created"), q(E, u, u.scopeId, P, y), k) {
      for (const X in k)
        X !== "value" && !Te(X) && r(E, X, null, k[X], b, y);
      "value" in k && r(E, "value", null, k.value, b), (_ = k.onVnodeBeforeMount) && $t(_, y, u);
    }
    j && te(u, null, y, "beforeMount");
    const z = Mo(v, D);
    z && D.beforeEnter(E), i(E, f, m), ((_ = k && k.onVnodeMounted) || z || j) && yt(() => {
      _ && $t(_, y, u), z && D.enter(E), j && te(u, null, y, "mounted");
    }, v);
  }, q = (u, f, m, y, v) => {
    if (m && g(u, m), y)
      for (let b = 0; b < y.length; b++)
        g(u, y[b]);
    if (v) {
      let b = v.subTree;
      if (f === b || Un(b.type) && (b.ssContent === f || b.ssFallback === f)) {
        const P = v.vnode;
        q(
          u,
          P,
          P.scopeId,
          P.slotScopeIds,
          v.parent
        );
      }
    }
  }, J = (u, f, m, y, v, b, P, T, E = 0) => {
    for (let _ = E; _ < u.length; _++) {
      const k = u[_] = T ? Gt(u[_]) : Nt(u[_]);
      O(
        null,
        k,
        f,
        m,
        y,
        v,
        b,
        P,
        T
      );
    }
  }, et = (u, f, m, y, v, b, P) => {
    const T = f.el = u.el;
    let { patchFlag: E, dynamicChildren: _, dirs: k } = f;
    E |= u.patchFlag & 16;
    const M = u.props || G, D = f.props || G;
    let j;
    if (m && ee(m, !1), (j = D.onVnodeBeforeUpdate) && $t(j, m, f, u), k && te(f, u, m, "beforeUpdate"), m && ee(m, !0), (M.innerHTML && D.innerHTML == null || M.textContent && D.textContent == null) && c(T, ""), _ ? tt(
      u.dynamicChildren,
      _,
      T,
      m,
      y,
      Ts(f, v),
      b
    ) : P || N(
      u,
      f,
      T,
      null,
      m,
      y,
      Ts(f, v),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        vt(T, M, D, m, v);
      else if (E & 2 && M.class !== D.class && r(T, "class", null, D.class, v), E & 4 && r(T, "style", M.style, D.style, v), E & 8) {
        const z = f.dynamicProps;
        for (let X = 0; X < z.length; X++) {
          const V = z[X], ht = M[V], pt = D[V];
          (pt !== ht || V === "value") && r(T, V, ht, pt, v, m);
        }
      }
      E & 1 && u.children !== f.children && c(T, f.children);
    } else !P && _ == null && vt(T, M, D, m, v);
    ((j = D.onVnodeUpdated) || k) && yt(() => {
      j && $t(j, m, f, u), k && te(f, u, m, "updated");
    }, y);
  }, tt = (u, f, m, y, v, b, P) => {
    for (let T = 0; T < f.length; T++) {
      const E = u[T], _ = f[T], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !we(E, _) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      O(
        E,
        _,
        k,
        null,
        y,
        v,
        b,
        P,
        !0
      );
    }
  }, vt = (u, f, m, y, v) => {
    if (f !== m) {
      if (f !== G)
        for (const b in f)
          !Te(b) && !(b in m) && r(
            u,
            b,
            f[b],
            null,
            v,
            y
          );
      for (const b in m) {
        if (Te(b)) continue;
        const P = m[b], T = f[b];
        P !== T && b !== "value" && r(u, b, T, P, v, y);
      }
      "value" in m && r(u, "value", f.value, m.value, v);
    }
  }, Mt = (u, f, m, y, v, b, P, T, E) => {
    const _ = f.el = u ? u.el : l(""), k = f.anchor = u ? u.anchor : l("");
    let { patchFlag: M, dynamicChildren: D, slotScopeIds: j } = f;
    j && (T = T ? T.concat(j) : j), u == null ? (i(_, m, y), i(k, m, y), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      k,
      v,
      b,
      P,
      T,
      E
    )) : M > 0 && M & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (tt(
      u.dynamicChildren,
      D,
      m,
      v,
      b,
      P,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && jn(
      u,
      f,
      !0
      /* shallow */
    )) : N(
      u,
      f,
      m,
      k,
      v,
      b,
      P,
      T,
      E
    );
  }, Qt = (u, f, m, y, v, b, P, T, E) => {
    f.slotScopeIds = T, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      m,
      y,
      P,
      E
    ) : ve(
      f,
      m,
      y,
      v,
      b,
      P,
      E
    ) : ze(u, f, E);
  }, ve = (u, f, m, y, v, b, P) => {
    const T = u.component = Xo(
      u,
      y,
      v
    );
    if (Tn(u) && (T.ctx.renderer = ye), Yo(T, !1, P), T.asyncDep) {
      if (v && v.registerDep(T, C, P), !u.el) {
        const E = T.subTree = Et(Jt);
        A(null, E, f, m);
      }
    } else
      C(
        T,
        u,
        f,
        m,
        v,
        b,
        P
      );
  }, ze = (u, f, m) => {
    const y = f.component = u.component;
    if (Wo(u, f, m))
      if (y.asyncDep && !y.asyncResolved) {
        S(y, f, m);
        return;
      } else
        y.next = f, y.update();
    else
      f.el = u.el, y.vnode = f;
  }, C = (u, f, m, y, v, b, P) => {
    const T = () => {
      if (u.isMounted) {
        let { next: M, bu: D, u: j, parent: z, vnode: X } = u;
        {
          const Dt = Fn(u);
          if (Dt) {
            M && (M.el = X.el, S(u, M, P)), Dt.asyncDep.then(() => {
              u.isUnmounted || T();
            });
            return;
          }
        }
        let V = M, ht;
        ee(u, !1), M ? (M.el = X.el, S(u, M, P)) : M = X, D && _s(D), (ht = M.props && M.props.onVnodeBeforeUpdate) && $t(ht, z, M, X), ee(u, !0);
        const pt = Ri(u), Lt = u.subTree;
        u.subTree = pt, O(
          Lt,
          pt,
          // parent may have changed if it's in a teleport
          h(Lt.el),
          // anchor may have changed if it's in a fragment
          Be(Lt),
          u,
          v,
          b
        ), M.el = pt.el, V === null && jo(u, pt.el), j && yt(j, v), (ht = M.props && M.props.onVnodeUpdated) && yt(
          () => $t(ht, z, M, X),
          v
        );
      } else {
        let M;
        const { el: D, props: j } = f, { bm: z, m: X, parent: V, root: ht, type: pt } = u, Lt = Ae(f);
        ee(u, !1), z && _s(z), !Lt && (M = j && j.onVnodeBeforeMount) && $t(M, V, f), ee(u, !0);
        {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(pt);
          const Dt = u.subTree = Ri(u);
          O(
            null,
            Dt,
            m,
            y,
            u,
            v,
            b
          ), f.el = Dt.el;
        }
        if (X && yt(X, v), !Lt && (M = j && j.onVnodeMounted)) {
          const Dt = f;
          yt(
            () => $t(M, V, Dt),
            v
          );
        }
        (f.shapeFlag & 256 || V && Ae(V.vnode) && V.vnode.shapeFlag & 256) && u.a && yt(u.a, v), u.isMounted = !0, f = m = y = null;
      }
    };
    u.scope.on();
    const E = u.effect = new sn(T);
    u.scope.off();
    const _ = u.update = E.run.bind(E), k = u.job = E.runIfDirty.bind(E);
    k.i = u, k.id = u.uid, E.scheduler = () => ei(k), ee(u, !0), _();
  }, S = (u, f, m) => {
    f.component = u;
    const y = u.vnode.props;
    u.vnode = f, u.next = null, wo(u, f.props, y, m), To(u, f.children, m), Ut(), yi(u), Vt();
  }, N = (u, f, m, y, v, b, P, T, E = !1) => {
    const _ = u && u.children, k = u ? u.shapeFlag : 0, M = f.children, { patchFlag: D, shapeFlag: j } = f;
    if (D > 0) {
      if (D & 128) {
        At(
          _,
          M,
          m,
          y,
          v,
          b,
          P,
          T,
          E
        );
        return;
      } else if (D & 256) {
        ot(
          _,
          M,
          m,
          y,
          v,
          b,
          P,
          T,
          E
        );
        return;
      }
    }
    j & 8 ? (k & 16 && be(_, v, b), M !== _ && c(m, M)) : k & 16 ? j & 16 ? At(
      _,
      M,
      m,
      y,
      v,
      b,
      P,
      T,
      E
    ) : be(_, v, b, !0) : (k & 8 && c(m, ""), j & 16 && J(
      M,
      m,
      y,
      v,
      b,
      P,
      T,
      E
    ));
  }, ot = (u, f, m, y, v, b, P, T, E) => {
    u = u || le, f = f || le;
    const _ = u.length, k = f.length, M = Math.min(_, k);
    let D;
    for (D = 0; D < M; D++) {
      const j = f[D] = E ? Gt(f[D]) : Nt(f[D]);
      O(
        u[D],
        j,
        m,
        null,
        v,
        b,
        P,
        T,
        E
      );
    }
    _ > k ? be(
      u,
      v,
      b,
      !0,
      !1,
      M
    ) : J(
      f,
      m,
      y,
      v,
      b,
      P,
      T,
      E,
      M
    );
  }, At = (u, f, m, y, v, b, P, T, E) => {
    let _ = 0;
    const k = f.length;
    let M = u.length - 1, D = k - 1;
    for (; _ <= M && _ <= D; ) {
      const j = u[_], z = f[_] = E ? Gt(f[_]) : Nt(f[_]);
      if (we(j, z))
        O(
          j,
          z,
          m,
          null,
          v,
          b,
          P,
          T,
          E
        );
      else
        break;
      _++;
    }
    for (; _ <= M && _ <= D; ) {
      const j = u[M], z = f[D] = E ? Gt(f[D]) : Nt(f[D]);
      if (we(j, z))
        O(
          j,
          z,
          m,
          null,
          v,
          b,
          P,
          T,
          E
        );
      else
        break;
      M--, D--;
    }
    if (_ > M) {
      if (_ <= D) {
        const j = D + 1, z = j < k ? f[j].el : y;
        for (; _ <= D; )
          O(
            null,
            f[_] = E ? Gt(f[_]) : Nt(f[_]),
            m,
            z,
            v,
            b,
            P,
            T,
            E
          ), _++;
      }
    } else if (_ > D)
      for (; _ <= M; )
        Ot(u[_], v, b, !0), _++;
    else {
      const j = _, z = _, X = /* @__PURE__ */ new Map();
      for (_ = z; _ <= D; _++) {
        const bt = f[_] = E ? Gt(f[_]) : Nt(f[_]);
        bt.key != null && X.set(bt.key, _);
      }
      let V, ht = 0;
      const pt = D - z + 1;
      let Lt = !1, Dt = 0;
      const _e = new Array(pt);
      for (_ = 0; _ < pt; _++) _e[_] = 0;
      for (_ = j; _ <= M; _++) {
        const bt = u[_];
        if (ht >= pt) {
          Ot(bt, v, b, !0);
          continue;
        }
        let kt;
        if (bt.key != null)
          kt = X.get(bt.key);
        else
          for (V = z; V <= D; V++)
            if (_e[V - z] === 0 && we(bt, f[V])) {
              kt = V;
              break;
            }
        kt === void 0 ? Ot(bt, v, b, !0) : (_e[kt - z] = _ + 1, kt >= Dt ? Dt = kt : Lt = !0, O(
          bt,
          f[kt],
          m,
          null,
          v,
          b,
          P,
          T,
          E
        ), ht++);
      }
      const hi = Lt ? Ao(_e) : le;
      for (V = hi.length - 1, _ = pt - 1; _ >= 0; _--) {
        const bt = z + _, kt = f[bt], pi = bt + 1 < k ? f[bt + 1].el : y;
        _e[_] === 0 ? O(
          null,
          kt,
          m,
          pi,
          v,
          b,
          P,
          T,
          E
        ) : Lt && (V < 0 || _ !== hi[V] ? xt(kt, m, pi, 2) : V--);
      }
    }
  }, xt = (u, f, m, y, v = null) => {
    const { el: b, type: P, transition: T, children: E, shapeFlag: _ } = u;
    if (_ & 6) {
      xt(u.component.subTree, f, m, y);
      return;
    }
    if (_ & 128) {
      u.suspense.move(f, m, y);
      return;
    }
    if (_ & 64) {
      P.move(u, f, m, ye);
      return;
    }
    if (P === Tt) {
      i(b, f, m);
      for (let M = 0; M < E.length; M++)
        xt(E[M], f, m, y);
      i(u.anchor, f, m);
      return;
    }
    if (P === Rs) {
      I(u, f, m);
      return;
    }
    if (y !== 2 && _ & 1 && T)
      if (y === 0)
        T.beforeEnter(b), i(b, f, m), yt(() => T.enter(b), v);
      else {
        const { leave: M, delayLeave: D, afterLeave: j } = T, z = () => {
          u.ctx.isUnmounted ? n(b) : i(b, f, m);
        }, X = () => {
          M(b, () => {
            z(), j && j();
          });
        };
        D ? D(b, z, X) : X();
      }
    else
      i(b, f, m);
  }, Ot = (u, f, m, y = !1, v = !1) => {
    const {
      type: b,
      props: P,
      ref: T,
      children: E,
      dynamicChildren: _,
      shapeFlag: k,
      patchFlag: M,
      dirs: D,
      cacheIndex: j
    } = u;
    if (M === -2 && (v = !1), T != null && (Ut(), Me(T, null, m, u, !0), Vt()), j != null && (f.renderCache[j] = void 0), k & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const z = k & 1 && D, X = !Ae(u);
    let V;
    if (X && (V = P && P.onVnodeBeforeUnmount) && $t(V, f, u), k & 6)
      nr(u.component, m, y);
    else {
      if (k & 128) {
        u.suspense.unmount(m, y);
        return;
      }
      z && te(u, null, f, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        f,
        m,
        ye,
        y
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Tt || M > 0 && M & 64) ? be(
        _,
        f,
        m,
        !1,
        !0
      ) : (b === Tt && M & 384 || !v && k & 16) && be(E, f, m), y && di(u);
    }
    (X && (V = P && P.onVnodeUnmounted) || z) && yt(() => {
      V && $t(V, f, u), z && te(u, null, f, "unmounted");
    }, m);
  }, di = (u) => {
    const { type: f, el: m, anchor: y, transition: v } = u;
    if (f === Tt) {
      ir(m, y);
      return;
    }
    if (f === Rs) {
      x(u);
      return;
    }
    const b = () => {
      n(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: P, delayLeave: T } = v, E = () => P(m, b);
      T ? T(u.el, b, E) : E();
    } else
      b();
  }, ir = (u, f) => {
    let m;
    for (; u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, nr = (u, f, m) => {
    const {
      bum: y,
      scope: v,
      job: b,
      subTree: P,
      um: T,
      m: E,
      a: _,
      parent: k,
      slots: { __: M }
    } = u;
    Ti(E), Ti(_), y && _s(y), k && W(M) && M.forEach((D) => {
      k.renderCache[D] = void 0;
    }), v.stop(), b && (b.flags |= 8, Ot(P, u, f, m)), T && yt(T, f), yt(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, be = (u, f, m, y = !1, v = !1, b = 0) => {
    for (let P = b; P < u.length; P++)
      Ot(u[P], f, m, y, v);
  }, Be = (u) => {
    if (u.shapeFlag & 6)
      return Be(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = p(u.anchor || u.el), m = f && f[Jr];
    return m ? p(m) : f;
  };
  let bs = !1;
  const fi = (u, f, m) => {
    u == null ? f._vnode && Ot(f._vnode, null, null, !0) : O(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, bs || (bs = !0, yi(), wn(), bs = !1);
  }, ye = {
    p: O,
    um: Ot,
    m: xt,
    r: di,
    mt: ve,
    mc: J,
    pc: N,
    pbc: tt,
    n: Be,
    o: e
  };
  return {
    render: fi,
    hydrate: void 0,
    createApp: yo(fi)
  };
}
function Ts({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ee({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, s = !1) {
  const i = e.children, n = t.children;
  if (W(i) && W(n))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = n[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = n[r] = Gt(n[r]), l.el = o.el), !s && l.patchFlag !== -2 && jn(o, l)), l.type === ms && (l.el = o.el), l.type === Jt && !l.el && (l.el = o.el);
    }
}
function Ao(e) {
  const t = e.slice(), s = [0];
  let i, n, r, o, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const d = e[i];
    if (d !== 0) {
      if (n = s[s.length - 1], e[n] < d) {
        t[i] = n, s.push(i);
        continue;
      }
      for (r = 0, o = s.length - 1; r < o; )
        l = r + o >> 1, e[s[l]] < d ? r = l + 1 : o = l;
      d < e[s[r]] && (r > 0 && (t[i] = s[r - 1]), s[r] = i);
    }
  }
  for (r = s.length, o = s[r - 1]; r-- > 0; )
    s[r] = o, o = t[o];
  return s;
}
function Fn(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fn(t);
}
function Ti(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Oo = Symbol.for("v-scx"), Lo = () => Ge(Oo);
function he(e, t, s) {
  return Hn(e, t, s);
}
function Hn(e, t, s = G) {
  const { immediate: i, deep: n, flush: r, once: o } = s, l = st({}, s), a = t && i || !t && r !== "post";
  let d;
  if (Ne) {
    if (r === "sync") {
      const g = Lo();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Wt, g.resume = Wt, g.pause = Wt, g;
    }
  }
  const c = ft;
  l.call = (g, w, O) => jt(g, c, w, O);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    yt(g, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, w) => {
    w ? g() : ei(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const p = Vr(e, t, l);
  return Ne && (d ? d.push(p) : a && p()), p;
}
function Do(e, t, s) {
  const i = this.proxy, n = Q(e) ? e.includes(".") ? zn(i, e) : () => i[e] : e.bind(i, i);
  let r;
  F(t) ? r = t : (r = t.handler, s = t);
  const o = Fe(this), l = Hn(n, r.bind(i), s);
  return o(), l;
}
function zn(e, t) {
  const s = t.split(".");
  return () => {
    let i = e;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const ko = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${wt(t)}Modifiers`];
function $o(e, t, ...s) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || G;
  let n = s;
  const r = t.startsWith("update:"), o = r && ko(i, t.slice(7));
  o && (o.trim && (n = s.map((c) => Q(c) ? c.trim() : c)), o.number && (n = s.map(ur)));
  let l, a = i[l = ys(t)] || // also try camelCase event handler (#2249)
  i[l = ys(Rt(t))];
  !a && r && (a = i[l = ys(wt(t))]), a && jt(
    a,
    e,
    6,
    n
  );
  const d = i[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, jt(
      d,
      e,
      6,
      n
    );
  }
}
function Bn(e, t, s = !1) {
  const i = t.emitsCache, n = i.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let o = {}, l = !1;
  if (!F(e)) {
    const a = (d) => {
      const c = Bn(d, t, !0);
      c && (l = !0, st(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Z(e) && i.set(e, null), null) : (W(r) ? r.forEach((a) => o[a] = null) : st(o, r), Z(e) && i.set(e, o), o);
}
function gs(e, t) {
  return !e || !rs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, wt(t)) || B(e, t));
}
function Ri(e) {
  const {
    type: t,
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
    ctx: w,
    inheritAttrs: O
  } = e, $ = es(e);
  let A, R;
  try {
    if (s.shapeFlag & 4) {
      const x = n || i, L = x;
      A = Nt(
        d.call(
          L,
          x,
          c,
          h,
          g,
          p,
          w
        )
      ), R = l;
    } else {
      const x = t;
      A = Nt(
        x.length > 1 ? x(
          h,
          { attrs: l, slots: o, emit: a }
        ) : x(
          h,
          null
        )
      ), R = t.props ? l : Io(l);
    }
  } catch (x) {
    Le.length = 0, fs(x, e, 1), A = Et(Jt);
  }
  let I = A;
  if (R && O !== !1) {
    const x = Object.keys(R), { shapeFlag: L } = I;
    x.length && L & 7 && (r && x.some(Bs) && (R = No(
      R,
      r
    )), I = ge(I, R, !1, !0));
  }
  return s.dirs && (I = ge(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(s.dirs) : s.dirs), s.transition && si(I, s.transition), A = I, es($), A;
}
const Io = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || rs(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, No = (e, t) => {
  const s = {};
  for (const i in e)
    (!Bs(i) || !(i.slice(9) in t)) && (s[i] = e[i]);
  return s;
};
function Wo(e, t, s) {
  const { props: i, children: n, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Pi(i, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (o[p] !== i[p] && !gs(d, p))
          return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Pi(i, o, d) : !0 : !!o;
  return !1;
}
function Pi(e, t, s) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    if (t[r] !== e[r] && !gs(s, r))
      return !0;
  }
  return !1;
}
function jo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Un = (e) => e.__isSuspense;
function Fo(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Gr(e);
}
const Tt = Symbol.for("v-fgt"), ms = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), Rs = Symbol.for("v-stc"), Le = [];
let _t = null;
function ut(e = !1) {
  Le.push(_t = e ? null : []);
}
function Ho() {
  Le.pop(), _t = Le[Le.length - 1] || null;
}
let Ie = 1;
function Mi(e, t = !1) {
  Ie += e, e < 0 && _t && t && (_t.hasOnce = !0);
}
function Vn(e) {
  return e.dynamicChildren = Ie > 0 ? _t || le : null, Ho(), Ie > 0 && _t && _t.push(e), e;
}
function mt(e, t, s, i, n, r) {
  return Vn(
    H(
      e,
      t,
      s,
      i,
      n,
      r,
      !0
    )
  );
}
function zo(e, t, s, i, n) {
  return Vn(
    Et(
      e,
      t,
      s,
      i,
      n,
      !0
    )
  );
}
function Kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function we(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qn = ({ key: e }) => e ?? null, Xe = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || at(e) || F(e) ? { i: Ct, r: e, k: t, f: !!s } : e : null);
function H(e, t = null, s = null, i = 0, n = null, r = e === Tt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qn(t),
    ref: t && Xe(t),
    scopeId: Sn,
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
    ctx: Ct
  };
  return l ? (li(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= Q(s) ? 8 : 16), Ie > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && _t.push(a), a;
}
const Et = Bo;
function Bo(e, t = null, s = null, i = 0, n = null, r = !1) {
  if ((!e || e === uo) && (e = Jt), Kn(e)) {
    const l = ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && li(l, s), Ie > 0 && !r && _t && (l.shapeFlag & 6 ? _t[_t.indexOf(e)] = l : _t.push(l)), l.patchFlag = -2, l;
  }
  if (tl(e) && (e = e.__vccOpts), t) {
    t = Uo(t);
    let { class: l, style: a } = t;
    l && !Q(l) && (t.class = pe(l)), Z(a) && (Qs(a) && !W(a) && (a = st({}, a)), t.style = us(a));
  }
  const o = Q(e) ? 1 : Un(e) ? 128 : Zr(e) ? 64 : Z(e) ? 4 : F(e) ? 2 : 0;
  return H(
    e,
    t,
    s,
    i,
    n,
    o,
    r,
    !0
  );
}
function Uo(e) {
  return e ? Qs(e) || Dn(e) ? st({}, e) : e : null;
}
function ge(e, t, s = !1, i = !1) {
  const { props: n, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? Ko(n || {}, t) : n, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && qn(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? W(r) ? r.concat(Xe(t)) : [r, Xe(t)] : Xe(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Tt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ge(e.ssContent),
    ssFallback: e.ssFallback && ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && si(
    c,
    a.clone(c)
  ), c;
}
function Vo(e = " ", t = 0) {
  return Et(ms, null, e, t);
}
function ie(e = "", t = !1) {
  return t ? (ut(), zo(Jt, null, e)) : Et(Jt, null, e);
}
function Nt(e) {
  return e == null || typeof e == "boolean" ? Et(Jt) : W(e) ? Et(
    Tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Kn(e) ? Gt(e) : Et(ms, null, String(e));
}
function Gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ge(e);
}
function li(e, t) {
  let s = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (W(t))
    s = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), li(e, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = t._;
      !n && !Dn(t) ? t._ctx = Ct : n === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: Ct }, s = 32) : (t = String(t), i & 64 ? (s = 16, t = [Vo(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ko(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (const n in i)
      if (n === "class")
        t.class !== i.class && (t.class = pe([t.class, i.class]));
      else if (n === "style")
        t.style = us([t.style, i.style]);
      else if (rs(n)) {
        const r = t[n], o = i[n];
        o && r !== o && !(W(r) && r.includes(o)) && (t[n] = r ? [].concat(r, o) : o);
      } else n !== "" && (t[n] = i[n]);
  }
  return t;
}
function $t(e, t, s, i = null) {
  jt(e, t, 7, [
    s,
    i
  ]);
}
const qo = An();
let Go = 0;
function Xo(e, t, s) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || qo, r = {
    uid: Go++,
    vnode: e,
    type: i,
    parent: t,
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
    scope: new vr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $n(i, n),
    emitsOptions: Bn(i, n),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = $o.bind(null, r), e.ce && e.ce(r), r;
}
let ft = null, is, Fs;
{
  const e = cs(), t = (s, i) => {
    let n;
    return (n = e[s]) || (n = e[s] = []), n.push(i), (r) => {
      n.length > 1 ? n.forEach((o) => o(r)) : n[0](r);
    };
  };
  is = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ft = s
  ), Fs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ne = s
  );
}
const Fe = (e) => {
  const t = ft;
  return is(e), e.scope.on(), () => {
    e.scope.off(), is(t);
  };
}, Ai = () => {
  ft && ft.scope.off(), is(null);
};
function Gn(e) {
  return e.vnode.shapeFlag & 4;
}
let Ne = !1;
function Yo(e, t = !1, s = !1) {
  t && Fs(t);
  const { props: i, children: n } = e.vnode, r = Gn(e);
  xo(e, i, r, t), Eo(e, n, s || t);
  const o = r ? Jo(e, t) : void 0;
  return t && Fs(!1), o;
}
function Jo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fo);
  const { setup: i } = s;
  if (i) {
    Ut();
    const n = e.setupContext = i.length > 1 ? Qo(e) : null, r = Fe(e), o = je(
      i,
      e,
      0,
      [
        e.props,
        n
      ]
    ), l = Yi(o);
    if (Vt(), r(), (l || e.sp) && !Ae(e) && En(e), l) {
      if (o.then(Ai, Ai), t)
        return o.then((a) => {
          Oi(e, a);
        }).catch((a) => {
          fs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Oi(e, o);
  } else
    Xn(e);
}
function Oi(e, t, s) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = yn(t)), Xn(e);
}
function Xn(e, t, s) {
  const i = e.type;
  e.render || (e.render = i.render || Wt);
  {
    const n = Fe(e);
    Ut();
    try {
      ho(e);
    } finally {
      Vt(), n();
    }
  }
}
const Zo = {
  get(e, t) {
    return lt(e, "get", ""), e[t];
  }
};
function Qo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yn(Wr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Oe)
        return Oe[s](e);
    },
    has(t, s) {
      return s in t || s in Oe;
    }
  })) : e.proxy;
}
function tl(e) {
  return F(e) && "__vccOpts" in e;
}
const Yn = (e, t) => Br(e, t, Ne), el = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hs;
const Li = typeof window < "u" && window.trustedTypes;
if (Li)
  try {
    Hs = /* @__PURE__ */ Li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jn = Hs ? (e) => Hs.createHTML(e) : (e) => e, sl = "http://www.w3.org/2000/svg", il = "http://www.w3.org/1998/Math/MathML", Ht = typeof document < "u" ? document : null, Di = Ht && /* @__PURE__ */ Ht.createElement("template"), nl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, i) => {
    const n = t === "svg" ? Ht.createElementNS(sl, e) : t === "mathml" ? Ht.createElementNS(il, e) : s ? Ht.createElement(e, { is: s }) : Ht.createElement(e);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => Ht.createTextNode(e),
  createComment: (e) => Ht.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ht.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, i, n, r) {
    const o = s ? s.previousSibling : t.lastChild;
    if (n && (n === r || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), s), !(n === r || !(n = n.nextSibling)); )
        ;
    else {
      Di.innerHTML = Jn(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Di.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, rl = Symbol("_vtc");
function ol(e, t, s) {
  const i = e[rl];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const ns = Symbol("_vod"), Zn = Symbol("_vsh"), ll = {
  beforeMount(e, { value: t }, { transition: s }) {
    e[ns] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Ce(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: i }) {
    !t != !s && (i ? t ? (i.beforeEnter(e), Ce(e, !0), i.enter(e)) : i.leave(e, () => {
      Ce(e, !1);
    }) : Ce(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ce(e, t);
  }
};
function Ce(e, t) {
  e.style.display = t ? e[ns] : "none", e[Zn] = !t;
}
const al = Symbol(""), cl = /(^|;)\s*display\s*:/;
function ul(e, t, s) {
  const i = e.style, n = Q(s);
  let r = !1;
  if (s && !n) {
    if (t)
      if (Q(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ye(i, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Ye(i, o, "");
    for (const o in s)
      o === "display" && (r = !0), Ye(i, o, s[o]);
  } else if (n) {
    if (t !== s) {
      const o = i[al];
      o && (s += ";" + o), i.cssText = s, r = cl.test(s);
    }
  } else t && e.removeAttribute("style");
  ns in e && (e[ns] = r ? i.display : "", e[Zn] && (i.display = "none"));
}
const ki = /\s*!important$/;
function Ye(e, t, s) {
  if (W(s))
    s.forEach((i) => Ye(e, t, i));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const i = dl(e, t);
    ki.test(s) ? e.setProperty(
      wt(i),
      s.replace(ki, ""),
      "important"
    ) : e[i] = s;
  }
}
const $i = ["Webkit", "Moz", "ms"], Ps = {};
function dl(e, t) {
  const s = Ps[t];
  if (s)
    return s;
  let i = Rt(t);
  if (i !== "filter" && i in e)
    return Ps[t] = i;
  i = Zi(i);
  for (let n = 0; n < $i.length; n++) {
    const r = $i[n] + i;
    if (r in e)
      return Ps[t] = r;
  }
  return t;
}
const Ii = "http://www.w3.org/1999/xlink";
function Ni(e, t, s, i, n, r = mr(t)) {
  i && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, s) : s == null || r && !Qi(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Zt(s) ? String(s) : s
  );
}
function Wi(e, t, s, i, n) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Jn(s) : s);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in e)) && (e.value = a), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Qi(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(n || t);
}
function fl(e, t, s, i) {
  e.addEventListener(t, s, i);
}
function hl(e, t, s, i) {
  e.removeEventListener(t, s, i);
}
const ji = Symbol("_vei");
function pl(e, t, s, i, n = null) {
  const r = e[ji] || (e[ji] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [l, a] = gl(t);
    if (i) {
      const d = r[t] = bl(
        i,
        n
      );
      fl(e, l, d, a);
    } else o && (hl(e, l, o, a), r[t] = void 0);
  }
}
const Fi = /(?:Once|Passive|Capture)$/;
function gl(e) {
  let t;
  if (Fi.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Fi); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let Ms = 0;
const ml = /* @__PURE__ */ Promise.resolve(), vl = () => Ms || (ml.then(() => Ms = 0), Ms = Date.now());
function bl(e, t) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    jt(
      yl(i, s.value),
      t,
      5,
      [i]
    );
  };
  return s.value = e, s.attached = vl(), s;
}
function yl(e, t) {
  if (W(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (i) => (n) => !n._stopped && i && i(n)
    );
  } else
    return t;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _l = (e, t, s, i, n, r) => {
  const o = n === "svg";
  t === "class" ? ol(e, i, o) : t === "style" ? ul(e, s, i) : rs(t) ? Bs(t) || pl(e, t, s, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xl(e, t, i, o)) ? (Wi(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Q(i)) ? Wi(e, Rt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ni(e, t, i, o));
};
function xl(e, t, s, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && F(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Hi(t) && Q(s) ? !1 : t in e;
}
const zi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wl(e, t, s) {
  const i = /* @__PURE__ */ hs(e, t);
  ls(i) && st(i, t);
  class n extends ai {
    constructor(o) {
      super(i, o, s);
    }
  }
  return n.def = i, n;
}
const Cl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ai extends Cl {
  constructor(t, s = {}, i = Ui) {
    super(), this._def = t, this._props = s, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && i !== Ui ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof ai) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, ti(() => {
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
    const t = (i, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = i;
      let l;
      if (r && !W(r))
        for (const a in r) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = gi(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Rt(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(i), this.shadowRoot && this._applyStyles(o), this._mount(i);
    }, s = this._def.__asyncLoader;
    s ? this._pendingResolve = s().then((i) => {
      i.configureApp = this._def.configureApp, t(this._def = i, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const i in s)
        B(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => bn(s[i])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, i = W(s) ? s : Object.keys(s || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n]);
    for (const n of i.map(Rt))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(r) {
          this._setProp(n, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const s = this.hasAttribute(t);
    let i = s ? this.getAttribute(t) : zi;
    const n = Rt(t);
    s && this._numberProps && this._numberProps[n] && (i = gi(i)), this._setProp(n, i, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, s, i = !0, n = !1) {
    if (s !== this._props[t] && (s === zi ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), n && this._instance && this._update(), i)) {
      const r = this._ob;
      r && r.disconnect(), s === !0 ? this.setAttribute(wt(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(wt(t), s + "") : s || this.removeAttribute(wt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), El(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = Et(this._def, st(t, this._props));
    return this._instance || (s.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const n = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            ls(o[0]) ? st({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      i.emit = (r, ...o) => {
        n(r, o), wt(r) !== r && n(wt(r), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(t, s) {
    if (!t) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const i = this._nonce;
    for (let n = t.length - 1; n >= 0; n--) {
      const r = document.createElement("style");
      i && r.setAttribute("nonce", i), r.textContent = t[n], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const i = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (t[i] || (t[i] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), s = this._instance.type.__scopeId;
    for (let i = 0; i < t.length; i++) {
      const n = t[i], r = n.getAttribute("name") || "default", o = this._slots[r], l = n.parentNode;
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
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Sl = /* @__PURE__ */ st({ patchProp: _l }, nl);
let Bi;
function Qn() {
  return Bi || (Bi = Ro(Sl));
}
const El = (...e) => {
  Qn().render(...e);
}, Ui = (...e) => {
  const t = Qn().createApp(...e), { mount: s } = t;
  return t.mount = (i) => {
    const n = Rl(i);
    if (!n) return;
    const r = t._component;
    !F(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Tl(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, t;
};
function Tl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Rl(e) {
  return Q(e) ? document.querySelector(e) : e;
}
function rt(e, t, s, i) {
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
    a((i = i.apply(e, t || [])).next());
  });
}
let He = class {
  constructor() {
    this.listeners = {};
  }
  on(t, s, i) {
    if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].add(s), i == null ? void 0 : i.once) {
      const n = () => {
        this.un(t, n), this.un(t, s);
      };
      return this.on(t, n), n;
    }
    return () => this.un(t, s);
  }
  un(t, s) {
    var i;
    (i = this.listeners[t]) === null || i === void 0 || i.delete(s);
  }
  once(t, s) {
    return this.on(t, s, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t, ...s) {
    this.listeners[t] && this.listeners[t].forEach((i) => i(...s));
  }
};
const qe = { decode: function(e, t) {
  return rt(this, void 0, void 0, function* () {
    const s = new AudioContext({ sampleRate: t });
    return s.decodeAudioData(e).finally(() => s.close());
  });
}, createBuffer: function(e, t) {
  return typeof e[0] == "number" && (e = [e]), function(s) {
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
  }(e), { duration: t, length: e[0].length, sampleRate: e[0].length / t, numberOfChannels: e.length, getChannelData: (s) => e == null ? void 0 : e[s], copyFromChannel: AudioBuffer.prototype.copyFromChannel, copyToChannel: AudioBuffer.prototype.copyToChannel };
} };
function tr(e, t) {
  const s = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
  for (const [i, n] of Object.entries(t)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(tr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Vi(e, t, s) {
  const i = tr(e, t || {});
  return s == null || s.appendChild(i), i;
}
var Pl = Object.freeze({ __proto__: null, createElement: Vi, default: Vi });
const Ml = { fetchBlob: function(e, t, s) {
  return rt(this, void 0, void 0, function* () {
    const i = yield fetch(e, s);
    if (i.status >= 400) throw new Error(`Failed to fetch ${e}: ${i.status} (${i.statusText})`);
    return function(n, r) {
      rt(this, void 0, void 0, function* () {
        if (!n.body || !n.headers) return;
        const o = n.body.getReader(), l = Number(n.headers.get("Content-Length")) || 0;
        let a = 0;
        const d = (h) => rt(this, void 0, void 0, function* () {
          a += (h == null ? void 0 : h.length) || 0;
          const p = Math.round(a / l * 100);
          r(p);
        }), c = () => rt(this, void 0, void 0, function* () {
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
    }(i.clone(), t), i.blob();
  });
} };
class Al extends He {
  constructor(t) {
    super(), this.isExternalMedia = !1, t.media ? (this.media = t.media, this.isExternalMedia = !0) : this.media = document.createElement("audio"), t.mediaControls && (this.media.controls = !0), t.autoplay && (this.media.autoplay = !0), t.playbackRate != null && this.onMediaEvent("canplay", () => {
      t.playbackRate != null && (this.media.playbackRate = t.playbackRate);
    }, { once: !0 });
  }
  onMediaEvent(t, s, i) {
    return this.media.addEventListener(t, s, i), () => this.media.removeEventListener(t, s, i);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t = this.getSrc();
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  }
  canPlayType(t) {
    return this.media.canPlayType(t) !== "";
  }
  setSrc(t, s) {
    const i = this.getSrc();
    if (t && i === t) return;
    this.revokeSrc();
    const n = s instanceof Blob && (this.canPlayType(s.type) || !t) ? URL.createObjectURL(s) : t;
    i && this.media.removeAttribute("src");
    try {
      this.media.src = n;
    } catch {
      this.media.src = t;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load());
  }
  setMediaElement(t) {
    this.media = t;
  }
  play() {
    return rt(this, void 0, void 0, function* () {
      return this.media.play();
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t) {
    this.media.currentTime = Math.max(0, Math.min(t, this.getDuration()));
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
  setVolume(t) {
    this.media.volume = t;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t) {
    this.media.muted = t;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t, s) {
    s != null && (this.media.preservesPitch = s), this.media.playbackRate = t;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t) {
    return this.media.setSinkId(t);
  }
}
class me extends He {
  constructor(t, s) {
    super(), this.timeouts = [], this.isScrollable = !1, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = !1, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = t;
    const i = this.parentFromOptionsContainer(t.container);
    this.parent = i;
    const [n, r] = this.initHtml();
    i.appendChild(n), this.container = n, this.scrollContainer = r.querySelector(".scroll"), this.wrapper = r.querySelector(".wrapper"), this.canvasWrapper = r.querySelector(".canvases"), this.progressWrapper = r.querySelector(".progress"), this.cursor = r.querySelector(".cursor"), s && r.appendChild(s), this.initEvents();
  }
  parentFromOptionsContainer(t) {
    let s;
    if (typeof t == "string" ? s = document.querySelector(t) : t instanceof HTMLElement && (s = t), !s) throw new Error("Container not found");
    return s;
  }
  initEvents() {
    const t = (s) => {
      const i = this.wrapper.getBoundingClientRect(), n = s.clientX - i.left, r = s.clientY - i.top;
      return [n / i.width, r / i.height];
    };
    if (this.wrapper.addEventListener("click", (s) => {
      const [i, n] = t(s);
      this.emit("click", i, n);
    }), this.wrapper.addEventListener("dblclick", (s) => {
      const [i, n] = t(s);
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
    const t = this.parent.clientWidth;
    t === this.lastContainerWidth && this.options.height !== "auto" || (this.lastContainerWidth = t, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function(t, s, i, n, r = 3, o = 0, l = 100) {
      if (!t) return () => {
      };
      const a = matchMedia("(pointer: coarse)").matches;
      let d = () => {
      };
      const c = (h) => {
        if (h.button !== o) return;
        h.preventDefault(), h.stopPropagation();
        let p = h.clientX, g = h.clientY, w = !1;
        const O = Date.now(), $ = (L) => {
          if (L.preventDefault(), L.stopPropagation(), a && Date.now() - O < l) return;
          const K = L.clientX, q = L.clientY, J = K - p, et = q - g;
          if (w || Math.abs(J) > r || Math.abs(et) > r) {
            const tt = t.getBoundingClientRect(), { left: vt, top: Mt } = tt;
            w || (i == null || i(p - vt, g - Mt), w = !0), s(J, et, K - vt, q - Mt), p = K, g = q;
          }
        }, A = (L) => {
          if (w) {
            const K = L.clientX, q = L.clientY, J = t.getBoundingClientRect(), { left: et, top: tt } = J;
            n == null || n(K - et, q - tt);
          }
          d();
        }, R = (L) => {
          L.relatedTarget && L.relatedTarget !== document.documentElement || A(L);
        }, I = (L) => {
          w && (L.stopPropagation(), L.preventDefault());
        }, x = (L) => {
          w && L.preventDefault();
        };
        document.addEventListener("pointermove", $), document.addEventListener("pointerup", A), document.addEventListener("pointerout", R), document.addEventListener("pointercancel", R), document.addEventListener("touchmove", x, { passive: !1 }), document.addEventListener("click", I, { capture: !0 }), d = () => {
          document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", A), document.removeEventListener("pointerout", R), document.removeEventListener("pointercancel", R), document.removeEventListener("touchmove", x), setTimeout(() => {
            document.removeEventListener("click", I, { capture: !0 });
          }, 10);
        };
      };
      return t.addEventListener("pointerdown", c), () => {
        d(), t.removeEventListener("pointerdown", c);
      };
    }(this.wrapper, (t, s, i) => {
      this.emit("drag", Math.max(0, Math.min(1, i / this.wrapper.getBoundingClientRect().width)));
    }, (t) => {
      this.isDragging = !0, this.emit("dragstart", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)));
    }, (t) => {
      this.isDragging = !1, this.emit("dragend", Math.max(0, Math.min(1, t / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t, s) {
    var i;
    const n = ((i = this.audioData) === null || i === void 0 ? void 0 : i.numberOfChannels) || 1;
    if (t == null) return 128;
    if (!isNaN(Number(t))) return Number(t);
    if (t === "auto") {
      const r = this.parent.clientHeight || 128;
      return s != null && s.every((o) => !o.overlay) ? r / n : r;
    }
    return 128;
  }
  initHtml() {
    const t = document.createElement("div"), s = t.attachShadow({ mode: "open" }), i = this.options.cspNonce && typeof this.options.cspNonce == "string" ? this.options.cspNonce.replace(/"/g, "") : "";
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
    `, [t, s];
  }
  setOptions(t) {
    if (this.options.container !== t.container) {
      const s = this.parentFromOptionsContainer(t.container);
      s.appendChild(this.container), this.parent = s;
    }
    t.dragToSeek !== !0 && typeof this.options.dragToSeek != "object" || this.initDrag(), this.options = t, this.reRender();
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
  setScroll(t) {
    this.scrollContainer.scrollLeft = t;
  }
  setScrollPercentage(t) {
    const { scrollWidth: s } = this.scrollContainer, i = s * t;
    this.setScroll(i);
  }
  destroy() {
    var t, s;
    this.subscriptions.forEach((i) => i()), this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (s = this.unsubscribeOnScroll) === null || s === void 0 || s.forEach((i) => i()), this.unsubscribeOnScroll = [];
  }
  createDelay(t = 10) {
    let s, i;
    const n = () => {
      s && clearTimeout(s), i && i();
    };
    return this.timeouts.push(n), () => new Promise((r, o) => {
      n(), i = o, s = setTimeout(() => {
        s = void 0, i = void 0, r();
      }, t);
    });
  }
  convertColorValues(t) {
    if (!Array.isArray(t)) return t || "";
    if (t.length < 2) return t[0] || "";
    const s = document.createElement("canvas"), i = s.getContext("2d"), n = s.height * (window.devicePixelRatio || 1), r = i.createLinearGradient(0, 0, 0, n), o = 1 / (t.length - 1);
    return t.forEach((l, a) => {
      const d = a * o;
      r.addColorStop(d, l);
    }), r;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t, s, i, n) {
    const r = t[0], o = t[1] || t[0], l = r.length, { width: a, height: d } = i.canvas, c = d / 2, h = this.getPixelRatio(), p = s.barWidth ? s.barWidth * h : 1, g = s.barGap ? s.barGap * h : s.barWidth ? p / 2 : 0, w = s.barRadius || 0, O = a / (p + g) / l, $ = w && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let A = 0, R = 0, I = 0;
    for (let x = 0; x <= l; x++) {
      const L = Math.round(x * O);
      if (L > A) {
        const J = Math.round(R * c * n), et = J + Math.round(I * c * n) || 1;
        let tt = c - J;
        s.barAlign === "top" ? tt = 0 : s.barAlign === "bottom" && (tt = d - et), i[$](A * (p + g), tt, p, et, w), A = L, R = 0, I = 0;
      }
      const K = Math.abs(r[x] || 0), q = Math.abs(o[x] || 0);
      K > R && (R = K), q > I && (I = q);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(t, s, i, n) {
    const r = (o) => {
      const l = t[o] || t[0], a = l.length, { height: d } = i.canvas, c = d / 2, h = i.canvas.width / a;
      i.moveTo(0, c);
      let p = 0, g = 0;
      for (let w = 0; w <= a; w++) {
        const O = Math.round(w * h);
        if (O > p) {
          const A = c + (Math.round(g * c * n) || 1) * (o === 0 ? -1 : 1);
          i.lineTo(p, A), p = O, g = 0;
        }
        const $ = Math.abs(l[w] || 0);
        $ > g && (g = $);
      }
      i.lineTo(p, c);
    };
    i.beginPath(), r(0), r(1), i.fill(), i.closePath();
  }
  renderWaveform(t, s, i) {
    if (i.fillStyle = this.convertColorValues(s.waveColor), s.renderFunction) return void s.renderFunction(t, i);
    let n = s.barHeight || 1;
    if (s.normalize) {
      const r = Array.from(t[0]).reduce((o, l) => Math.max(o, Math.abs(l)), 0);
      n = r ? 1 / r : 1;
    }
    s.barWidth || s.barGap || s.barAlign ? this.renderBarWaveform(t, s, i, n) : this.renderLineWaveform(t, s, i, n);
  }
  renderSingleCanvas(t, s, i, n, r, o, l) {
    const a = this.getPixelRatio(), d = document.createElement("canvas");
    d.width = Math.round(i * a), d.height = Math.round(n * a), d.style.width = `${i}px`, d.style.height = `${n}px`, d.style.left = `${Math.round(r)}px`, o.appendChild(d);
    const c = d.getContext("2d");
    if (this.renderWaveform(t, s, c), d.width > 0 && d.height > 0) {
      const h = d.cloneNode(), p = h.getContext("2d");
      p.drawImage(d, 0, 0), p.globalCompositeOperation = "source-in", p.fillStyle = this.convertColorValues(s.progressColor), p.fillRect(0, 0, d.width, d.height), l.appendChild(h);
    }
  }
  renderMultiCanvas(t, s, i, n, r, o) {
    const l = this.getPixelRatio(), { clientWidth: a } = this.scrollContainer, d = i / l;
    let c = Math.min(me.MAX_CANVAS_WIDTH, a, d), h = {};
    if (s.barWidth || s.barGap) {
      const $ = s.barWidth || 0.5, A = $ + (s.barGap || $ / 2);
      c % A != 0 && (c = Math.floor(c / A) * A);
    }
    if (c === 0) return;
    const p = ($) => {
      if ($ < 0 || $ >= g || h[$]) return;
      h[$] = !0;
      const A = $ * c;
      let R = Math.min(d - A, c);
      if (s.barWidth || s.barGap) {
        const x = s.barWidth || 0.5, L = x + (s.barGap || x / 2);
        R = Math.floor(R / L) * L;
      }
      if (R <= 0) return;
      const I = t.map((x) => {
        const L = Math.floor(A / d * x.length), K = Math.floor((A + R) / d * x.length);
        return x.slice(L, K);
      });
      this.renderSingleCanvas(I, s, R, n, A, r, o);
    }, g = Math.ceil(d / c);
    if (!this.isScrollable) {
      for (let $ = 0; $ < g; $++) p($);
      return;
    }
    const w = this.scrollContainer.scrollLeft / d, O = Math.floor(w * g);
    if (p(O - 1), p(O), p(O + 1), g > 1) {
      const $ = this.on("scroll", () => {
        const { scrollLeft: A } = this.scrollContainer, R = Math.floor(A / d * g);
        Object.keys(h).length > me.MAX_NODES && (r.innerHTML = "", o.innerHTML = "", h = {}), p(R - 1), p(R), p(R + 1);
      });
      this.unsubscribeOnScroll.push($);
    }
  }
  renderChannel(t, s, i, n) {
    var { overlay: r } = s, o = function(c, h) {
      var p = {};
      for (var g in c) Object.prototype.hasOwnProperty.call(c, g) && h.indexOf(g) < 0 && (p[g] = c[g]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function") {
        var w = 0;
        for (g = Object.getOwnPropertySymbols(c); w < g.length; w++) h.indexOf(g[w]) < 0 && Object.prototype.propertyIsEnumerable.call(c, g[w]) && (p[g[w]] = c[g[w]]);
      }
      return p;
    }(s, ["overlay"]);
    const l = document.createElement("div"), a = this.getHeight(o.height, o.splitChannels);
    l.style.height = `${a}px`, r && n > 0 && (l.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(l);
    const d = l.cloneNode();
    this.progressWrapper.appendChild(d), this.renderMultiCanvas(t, o, i, a, l, d);
  }
  render(t) {
    return rt(this, void 0, void 0, function* () {
      var s;
      this.timeouts.forEach((a) => a()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", this.options.width != null && (this.scrollContainer.style.width = typeof this.options.width == "number" ? `${this.options.width}px` : this.options.width);
      const i = this.getPixelRatio(), n = this.scrollContainer.clientWidth, r = Math.ceil(t.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = r > n;
      const o = this.options.fillParent && !this.isScrollable, l = (o ? n : r) * i;
      if (this.wrapper.style.width = o ? "100%" : `${r}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = t, this.emit("render"), this.options.splitChannels) for (let a = 0; a < t.numberOfChannels; a++) {
        const d = Object.assign(Object.assign({}, this.options), (s = this.options.splitChannels) === null || s === void 0 ? void 0 : s[a]);
        this.renderChannel([t.getChannelData(a)], d, l, a);
      }
      else {
        const a = [t.getChannelData(0)];
        t.numberOfChannels > 1 && a.push(t.getChannelData(1)), this.renderChannel(a, this.options, l, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach((i) => i()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const { scrollWidth: t } = this.scrollContainer, { right: s } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t !== this.scrollContainer.scrollWidth) {
      const { right: i } = this.progressWrapper.getBoundingClientRect();
      let n = i - s;
      n *= 2, n = n < 0 ? Math.floor(n) : Math.ceil(n), n /= 2, this.scrollContainer.scrollLeft += n;
    }
  }
  zoom(t) {
    this.options.minPxPerSec = t, this.reRender();
  }
  scrollIntoView(t, s = !1) {
    const { scrollLeft: i, scrollWidth: n, clientWidth: r } = this.scrollContainer, o = t * n, l = i, a = i + r, d = r / 2;
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
  renderProgress(t, s) {
    if (isNaN(t)) return;
    const i = 100 * t;
    this.canvasWrapper.style.clipPath = `polygon(${i}% 0%, 100% 0%, 100% 100%, ${i}% 100%)`, this.progressWrapper.style.width = `${i}%`, this.cursor.style.left = `${i}%`, this.cursor.style.transform = `translateX(-${Math.round(i) === 100 ? this.options.cursorWidth : 0}px)`, this.isScrollable && this.options.autoScroll && this.scrollIntoView(t, s);
  }
  exportImage(t, s, i) {
    return rt(this, void 0, void 0, function* () {
      const n = this.canvasWrapper.querySelectorAll("canvas");
      if (!n.length) throw new Error("No waveform data");
      if (i === "dataURL") {
        const r = Array.from(n).map((o) => o.toDataURL(t, s));
        return Promise.resolve(r);
      }
      return Promise.all(Array.from(n).map((r) => new Promise((o, l) => {
        r.toBlob((a) => {
          a ? o(a) : l(new Error("Could not export image"));
        }, t, s);
      })));
    });
  }
}
me.MAX_CANVAS_WIDTH = 8e3, me.MAX_NODES = 10;
class Ol extends He {
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
class As extends He {
  constructor(t = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return rt(this, void 0, void 0, function* () {
    });
  }
  get src() {
    return this.currentSrc;
  }
  set src(t) {
    if (this.currentSrc = t, this._duration = void 0, !t) return this.buffer = null, void this.emit("emptied");
    fetch(t).then((s) => {
      if (s.status >= 400) throw new Error(`Failed to fetch ${t}: ${s.status} (${s.statusText})`);
      return s.arrayBuffer();
    }).then((s) => this.currentSrc !== t ? null : this.audioContext.decodeAudioData(s)).then((s) => {
      this.currentSrc === t && (this.buffer = s, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t;
    if (!this.paused) return;
    this.paused = !1, (t = this.bufferNode) === null || t === void 0 || t.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let s = this.playedDuration * this._playbackRate;
    (s >= this.duration || s < 0) && (s = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, s), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t;
    this.paused = !0, (t = this.bufferNode) === null || t === void 0 || t.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return rt(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t) {
    const s = t - this.currentTime, i = this.bufferNode;
    i == null || i.stop(this.audioContext.currentTime + s), i == null || i.addEventListener("ended", () => {
      i === this.bufferNode && (this.bufferNode = null, this.pause());
    }, { once: !0 });
  }
  setSinkId(t) {
    return rt(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(t);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t) {
    this._playbackRate = t, this.bufferNode && (this.bufferNode.playbackRate.value = t);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t) {
    const s = !this.paused;
    s && this._pause(), this.playedDuration = t / this._playbackRate, s && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t, s;
    return (t = this._duration) !== null && t !== void 0 ? t : ((s = this.buffer) === null || s === void 0 ? void 0 : s.duration) || 0;
  }
  set duration(t) {
    this._duration = t;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t) {
    this.gainNode.gain.value = t, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t) {
    this._muted !== t && (this._muted = t, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t) {
    return /^(audio|video)\//.test(t);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t = [];
    if (!this.buffer) return t;
    const s = this.buffer.numberOfChannels;
    for (let i = 0; i < s; i++) t.push(this.buffer.getChannelData(i));
    return t;
  }
}
const Ll = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class We extends Al {
  static create(t) {
    return new We(t);
  }
  constructor(t) {
    const s = t.media || (t.backend === "WebAudio" ? new As() : void 0);
    super({ media: s, mediaControls: t.mediaControls, autoplay: t.autoplay, playbackRate: t.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Ll, t), this.timer = new Ol();
    const i = s ? void 0 : this.getMediaElement();
    this.renderer = new me(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const n = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const { peaks: r, duration: o } = this.options;
      (n || r && o) && this.load(n, r, o).catch(() => null);
    });
  }
  updateProgress(t = this.getCurrentTime()) {
    return this.renderer.renderProgress(t / this.getDuration(), this.isPlaying()), t;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t = this.updateProgress();
        this.emit("timeupdate", t), this.emit("audioprocess", t), this.stopAtPosition != null && this.isPlaying() && t >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t = this.updateProgress();
      this.emit("timeupdate", t);
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
      var t;
      this.emit("error", (t = this.getMediaElement().error) !== null && t !== void 0 ? t : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t, s) => {
      this.options.interact && (this.seekTo(t), this.emit("interaction", t * this.getDuration()), this.emit("click", t, s));
    }), this.renderer.on("dblclick", (t, s) => {
      this.emit("dblclick", t, s);
    }), this.renderer.on("scroll", (t, s, i, n) => {
      const r = this.getDuration();
      this.emit("scroll", t * r, s * r, i, n);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", (t) => {
      this.emit("dragstart", t);
    }), this.renderer.on("dragend", (t) => {
      this.emit("dragend", t);
    }));
    {
      let t;
      this.subscriptions.push(this.renderer.on("drag", (s) => {
        if (!this.options.interact) return;
        let i;
        this.renderer.renderProgress(s), clearTimeout(t), this.isPlaying() ? i = 0 : this.options.dragToSeek === !0 ? i = 200 : typeof this.options.dragToSeek == "object" && this.options.dragToSeek !== void 0 && (i = this.options.dragToSeek.debounceTime), t = setTimeout(() => {
          this.seekTo(s);
        }, i), this.emit("interaction", s * this.getDuration()), this.emit("drag", s);
      }));
    }
  }
  initPlugins() {
    var t;
    !((t = this.options.plugins) === null || t === void 0) && t.length && this.options.plugins.forEach((s) => {
      this.registerPlugin(s);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach((t) => t()), this.mediaSubscriptions = [];
  }
  setOptions(t) {
    this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = qe.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = qe.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), t.mediaControls != null && (this.getMediaElement().controls = t.mediaControls);
  }
  registerPlugin(t) {
    t._init(this), this.plugins.push(t);
    const s = t.once("destroy", () => {
      this.plugins = this.plugins.filter((i) => i !== t), this.subscriptions = this.subscriptions.filter((i) => i !== s);
    });
    return this.subscriptions.push(s), t;
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
  setScroll(t) {
    return this.renderer.setScroll(t);
  }
  setScrollTime(t) {
    const s = t / this.getDuration();
    this.renderer.setScrollPercentage(s);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(t, s, i, n) {
    return rt(this, void 0, void 0, function* () {
      var r;
      if (this.emit("load", t), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (r = this.abortController) === null || r === void 0 ? void 0 : r.signal);
        const a = (c) => this.emit("loading", c);
        s = yield Ml.fetchBlob(t, a, l);
        const d = this.options.blobMimeType;
        d && (s = new Blob([s], { type: d }));
      }
      t == "" ? this.getMediaElement().removeAttribute("src") : this.setSrc(t, s);
      const o = yield new Promise((l) => {
        const a = n || this.getDuration();
        a ? l(a) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => l(this.getDuration()), { once: !0 }));
      });
      if (!t && !s) {
        const l = this.getMediaElement();
        l instanceof As && (l.duration = o);
      }
      if (i) this.decodedData = qe.createBuffer(i, o || 0);
      else if (s) {
        const l = yield s.arrayBuffer();
        this.decodedData = yield qe.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(t, s, i) {
    return rt(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(t, void 0, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  loadBlob(t, s, i) {
    return rt(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", t, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  zoom(t) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t), this.emit("zoom", t);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({ channels: t = 2, maxLength: s = 8e3, precision: i = 1e4 } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const n = Math.min(t, this.decodedData.numberOfChannels), r = [];
    for (let o = 0; o < n; o++) {
      const l = this.decodedData.getChannelData(o), a = [], d = l.length / s;
      for (let c = 0; c < s; c++) {
        const h = l.slice(Math.floor(c * d), Math.ceil((c + 1) * d));
        let p = 0;
        for (let g = 0; g < h.length; g++) {
          const w = h[g];
          Math.abs(w) > Math.abs(p) && (p = w);
        }
        a.push(Math.round(p * i) / i);
      }
      r.push(a);
    }
    return r;
  }
  getDuration() {
    let t = super.getDuration() || 0;
    return t !== 0 && t !== 1 / 0 || !this.decodedData || (t = this.decodedData.duration), t;
  }
  toggleInteraction(t) {
    this.options.interact = t;
  }
  setTime(t) {
    this.stopAtPosition = null, super.setTime(t), this.updateProgress(t), this.emit("timeupdate", t);
  }
  seekTo(t) {
    const s = this.getDuration() * t;
    this.setTime(s);
  }
  play(t, s) {
    const i = Object.create(null, { play: { get: () => super.play } });
    return rt(this, void 0, void 0, function* () {
      t != null && this.setTime(t);
      const n = yield i.play.call(this);
      return s != null && (this.media instanceof As ? this.media.stopAt(s) : this.stopAtPosition = s), n;
    });
  }
  playPause() {
    return rt(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t) {
    this.setTime(this.getCurrentTime() + t);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t), this.initPlayerEvents();
  }
  exportImage() {
    return rt(this, arguments, void 0, function* (t = "image/png", s = 1, i = "dataURL") {
      return this.renderer.exportImage(t, s, i);
    });
  }
  destroy() {
    var t;
    this.emit("destroy"), (t = this.abortController) === null || t === void 0 || t.abort(), this.plugins.forEach((s) => s.destroy()), this.subscriptions.forEach((s) => s()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
We.BasePlugin = class extends He {
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
}, We.dom = Pl;
class er {
  constructor() {
    this.listeners = {};
  }
  on(t, s, i) {
    if (this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].add(s), i == null ? void 0 : i.once) {
      const n = () => {
        this.un(t, n), this.un(t, s);
      };
      return this.on(t, n), n;
    }
    return () => this.un(t, s);
  }
  un(t, s) {
    var i;
    (i = this.listeners[t]) === null || i === void 0 || i.delete(s);
  }
  once(t, s) {
    return this.on(t, s, { once: !0 });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t, ...s) {
    this.listeners[t] && this.listeners[t].forEach((i) => i(...s));
  }
}
class Dl extends er {
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
}
function Je(e, t, s, i, n = 3, r = 0, o = 100) {
  if (!e) return () => {
  };
  const l = matchMedia("(pointer: coarse)").matches;
  let a = () => {
  };
  const d = (c) => {
    if (c.button !== r) return;
    c.preventDefault(), c.stopPropagation();
    let h = c.clientX, p = c.clientY, g = !1;
    const w = Date.now(), O = (x) => {
      if (x.preventDefault(), x.stopPropagation(), l && Date.now() - w < o) return;
      const L = x.clientX, K = x.clientY, q = L - h, J = K - p;
      if (g || Math.abs(q) > n || Math.abs(J) > n) {
        const et = e.getBoundingClientRect(), { left: tt, top: vt } = et;
        g || (s == null || s(h - tt, p - vt), g = !0), t(q, J, L - tt, K - vt), h = L, p = K;
      }
    }, $ = (x) => {
      if (g) {
        const L = x.clientX, K = x.clientY, q = e.getBoundingClientRect(), { left: J, top: et } = q;
        i == null || i(L - J, K - et);
      }
      a();
    }, A = (x) => {
      x.relatedTarget && x.relatedTarget !== document.documentElement || $(x);
    }, R = (x) => {
      g && (x.stopPropagation(), x.preventDefault());
    }, I = (x) => {
      g && x.preventDefault();
    };
    document.addEventListener("pointermove", O), document.addEventListener("pointerup", $), document.addEventListener("pointerout", A), document.addEventListener("pointercancel", A), document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("click", R, { capture: !0 }), a = () => {
      document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", $), document.removeEventListener("pointerout", A), document.removeEventListener("pointercancel", A), document.removeEventListener("touchmove", I), setTimeout(() => {
        document.removeEventListener("click", R, { capture: !0 });
      }, 10);
    };
  };
  return e.addEventListener("pointerdown", d), () => {
    a(), e.removeEventListener("pointerdown", d);
  };
}
function sr(e, t) {
  const s = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
  for (const [i, n] of Object.entries(t)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(sr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Ee(e, t, s) {
  const i = sr(e, t || {});
  return s == null || s.appendChild(i), i;
}
class Ki extends er {
  constructor(t, s, i = 0) {
    var n, r, o, l, a, d, c, h, p, g;
    super(), this.totalDuration = s, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.isRemoved = !1, this.subscriptions = [], this.id = t.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t.start), this.end = this.clampPosition((n = t.end) !== null && n !== void 0 ? n : t.start), this.drag = (r = t.drag) === null || r === void 0 || r, this.resize = (o = t.resize) === null || o === void 0 || o, this.resizeStart = (l = t.resizeStart) === null || l === void 0 || l, this.resizeEnd = (a = t.resizeEnd) === null || a === void 0 || a, this.color = (d = t.color) !== null && d !== void 0 ? d : "rgba(0, 0, 0, 0.1)", this.minLength = (c = t.minLength) !== null && c !== void 0 ? c : this.minLength, this.maxLength = (h = t.maxLength) !== null && h !== void 0 ? h : this.maxLength, this.channelIdx = (p = t.channelIdx) !== null && p !== void 0 ? p : -1, this.contentEditable = (g = t.contentEditable) !== null && g !== void 0 ? g : this.contentEditable, this.element = this.initElement(), this.setContent(t.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
  }
  clampPosition(t) {
    return Math.max(0, Math.min(this.totalDuration, t));
  }
  setPart() {
    var t;
    const s = this.start === this.end;
    (t = this.element) === null || t === void 0 || t.setAttribute("part", `${s ? "marker" : "region"} ${this.id}`);
  }
  addResizeHandles(t) {
    const s = { position: "absolute", zIndex: "2", width: "6px", height: "100%", top: "0", cursor: "ew-resize", wordBreak: "keep-all" }, i = Ee("div", { part: "region-handle region-handle-left", style: Object.assign(Object.assign({}, s), { left: "0", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "2px 0 0 2px" }) }, t), n = Ee("div", { part: "region-handle region-handle-right", style: Object.assign(Object.assign({}, s), { right: "0", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "0 2px 2px 0" }) }, t);
    this.subscriptions.push(Je(i, (r) => this.onResize(r, "start"), () => null, () => this.onEndResizing(), 1), Je(n, (r) => this.onResize(r, "end"), () => null, () => this.onEndResizing(), 1));
  }
  removeResizeHandles(t) {
    const s = t.querySelector('[part*="region-handle-left"]'), i = t.querySelector('[part*="region-handle-right"]');
    s && t.removeChild(s), i && t.removeChild(i);
  }
  initElement() {
    if (this.isRemoved) return null;
    const t = this.start === this.end;
    let s = 0, i = 100;
    this.channelIdx >= 0 && this.channelIdx < this.numberOfChannels && (i = 100 / this.numberOfChannels, s = i * this.channelIdx);
    const n = Ee("div", { style: { position: "absolute", top: `${s}%`, height: `${i}%`, backgroundColor: t ? "none" : this.color, borderLeft: t ? "2px solid " + this.color : "none", borderRadius: "2px", boxSizing: "border-box", transition: "background-color 0.2s ease", cursor: this.drag ? "grab" : "default", pointerEvents: "all" } });
    return !t && this.resize && this.addResizeHandles(n), n;
  }
  renderPosition() {
    if (!this.element) return;
    const t = this.start / this.totalDuration, s = (this.totalDuration - this.end) / this.totalDuration;
    this.element.style.left = 100 * t + "%", this.element.style.right = 100 * s + "%";
  }
  toggleCursor(t) {
    var s;
    this.drag && (!((s = this.element) === null || s === void 0) && s.style) && (this.element.style.cursor = t ? "grabbing" : "grab");
  }
  initMouseEvents() {
    const { element: t } = this;
    t && (t.addEventListener("click", (s) => this.emit("click", s)), t.addEventListener("mouseenter", (s) => this.emit("over", s)), t.addEventListener("mouseleave", (s) => this.emit("leave", s)), t.addEventListener("dblclick", (s) => this.emit("dblclick", s)), t.addEventListener("pointerdown", () => this.toggleCursor(!0)), t.addEventListener("pointerup", () => this.toggleCursor(!1)), this.subscriptions.push(Je(t, (s) => this.onMove(s), () => this.toggleCursor(!0), () => {
      this.toggleCursor(!1), this.drag && this.emit("update-end");
    })), this.contentEditable && this.content && (this.content.addEventListener("click", (s) => this.onContentClick(s)), this.content.addEventListener("blur", () => this.onContentBlur())));
  }
  _onUpdate(t, s) {
    var i;
    if (!(!((i = this.element) === null || i === void 0) && i.parentElement)) return;
    const { width: n } = this.element.parentElement.getBoundingClientRect(), r = t / n * this.totalDuration, o = s && s !== "start" ? this.start : this.start + r, l = s && s !== "end" ? this.end : this.end + r, a = l - o;
    o >= 0 && l <= this.totalDuration && o <= l && a >= this.minLength && a <= this.maxLength && (this.start = o, this.end = l, this.renderPosition(), this.emit("update", s));
  }
  onMove(t) {
    this.drag && this._onUpdate(t);
  }
  onResize(t, s) {
    this.resize && (this.resizeStart || s !== "start") && (this.resizeEnd || s !== "end") && this._onUpdate(t, s);
  }
  onEndResizing() {
    this.resize && this.emit("update-end");
  }
  onContentClick(t) {
    t.stopPropagation(), t.target.focus(), this.emit("click", t);
  }
  onContentBlur() {
    this.emit("update-end");
  }
  _setTotalDuration(t) {
    this.totalDuration = t, this.renderPosition();
  }
  play(t) {
    this.emit("play", t && this.end !== this.start ? this.end : void 0);
  }
  getContent(t = !1) {
    var s;
    return t ? this.content || void 0 : this.element instanceof HTMLElement ? ((s = this.content) === null || s === void 0 ? void 0 : s.innerHTML) || void 0 : "";
  }
  setContent(t) {
    var s;
    if (this.element) if ((s = this.content) === null || s === void 0 || s.remove(), t) {
      if (typeof t == "string") {
        const i = this.start === this.end;
        this.content = Ee("div", { style: { padding: `0.2em ${i ? 0.2 : 0.4}em`, display: "inline-block" }, textContent: t });
      } else this.content = t;
      this.contentEditable && (this.content.contentEditable = "true"), this.content.setAttribute("part", "region-content"), this.element.appendChild(this.content), this.emit("content-changed");
    } else this.content = void 0;
  }
  setOptions(t) {
    var s, i;
    if (this.element) {
      if (t.color && (this.color = t.color, this.element.style.backgroundColor = this.color), t.drag !== void 0 && (this.drag = t.drag, this.element.style.cursor = this.drag ? "grab" : "default"), t.start !== void 0 || t.end !== void 0) {
        const n = this.start === this.end;
        this.start = this.clampPosition((s = t.start) !== null && s !== void 0 ? s : this.start), this.end = this.clampPosition((i = t.end) !== null && i !== void 0 ? i : n ? this.start : this.end), this.renderPosition(), this.setPart();
      }
      if (t.content && this.setContent(t.content), t.id && (this.id = t.id, this.setPart()), t.resize !== void 0 && t.resize !== this.resize) {
        const n = this.start === this.end;
        this.resize = t.resize, this.resize && !n ? this.addResizeHandles(this.element) : this.removeResizeHandles(this.element);
      }
      t.resizeStart !== void 0 && (this.resizeStart = t.resizeStart), t.resizeEnd !== void 0 && (this.resizeEnd = t.resizeEnd);
    }
  }
  remove() {
    this.isRemoved = !0, this.emit("remove"), this.subscriptions.forEach((t) => t()), this.element && (this.element.remove(), this.element = null);
  }
}
class ci extends Dl {
  constructor(t) {
    super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(t) {
    return new ci(t);
  }
  onInit() {
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    this.wavesurfer.getWrapper().appendChild(this.regionsContainer);
    let t = [];
    this.subscriptions.push(this.wavesurfer.on("timeupdate", (s) => {
      const i = this.regions.filter((n) => n.start <= s && (n.end === n.start ? n.start + 0.05 : n.end) >= s);
      i.forEach((n) => {
        t.includes(n) || this.emit("region-in", n);
      }), t.forEach((n) => {
        i.includes(n) || this.emit("region-out", n);
      }), t = i;
    }));
  }
  initRegionsContainer() {
    return Ee("div", { style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "5", pointerEvents: "none" } });
  }
  getRegions() {
    return this.regions;
  }
  avoidOverlapping(t) {
    t.content && setTimeout(() => {
      const s = t.content, i = s.getBoundingClientRect(), n = this.regions.map((r) => {
        if (r === t || !r.content) return 0;
        const o = r.content.getBoundingClientRect();
        return i.left < o.left + o.width && o.left < i.left + i.width ? o.height : 0;
      }).reduce((r, o) => r + o, 0);
      s.style.marginTop = `${n}px`;
    }, 10);
  }
  adjustScroll(t) {
    var s, i;
    if (!t.element) return;
    const n = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getWrapper()) === null || i === void 0 ? void 0 : i.parentElement;
    if (!n) return;
    const { clientWidth: r, scrollWidth: o } = n;
    if (o <= r) return;
    const l = n.getBoundingClientRect(), a = t.element.getBoundingClientRect(), d = a.left - l.left, c = a.right - l.left;
    d < 0 ? n.scrollLeft += d : c > r && (n.scrollLeft += c - r);
  }
  virtualAppend(t, s, i) {
    const n = () => {
      if (!this.wavesurfer) return;
      const r = this.wavesurfer.getWidth(), o = this.wavesurfer.getScroll(), l = s.clientWidth, a = this.wavesurfer.getDuration(), d = Math.round(t.start / a * l), c = d + (Math.round((t.end - t.start) / a * l) || 1) > o && d < o + r;
      c && !i.parentElement ? s.appendChild(i) : !c && i.parentElement && i.remove();
    };
    setTimeout(() => {
      if (!this.wavesurfer) return;
      n();
      const r = this.wavesurfer.on("scroll", n);
      this.subscriptions.push(t.once("remove", r), r);
    }, 0);
  }
  saveRegion(t) {
    if (!t.element) return;
    this.virtualAppend(t, this.regionsContainer, t.element), this.avoidOverlapping(t), this.regions.push(t);
    const s = [t.on("update", (i) => {
      i || this.adjustScroll(t), this.emit("region-update", t, i);
    }), t.on("update-end", () => {
      this.avoidOverlapping(t), this.emit("region-updated", t);
    }), t.on("play", (i) => {
      var n;
      (n = this.wavesurfer) === null || n === void 0 || n.play(t.start, i);
    }), t.on("click", (i) => {
      this.emit("region-clicked", t, i);
    }), t.on("dblclick", (i) => {
      this.emit("region-double-clicked", t, i);
    }), t.on("content-changed", () => {
      this.emit("region-content-changed", t);
    }), t.once("remove", () => {
      s.forEach((i) => i()), this.regions = this.regions.filter((i) => i !== t), this.emit("region-removed", t);
    })];
    this.subscriptions.push(...s), this.emit("region-created", t);
  }
  addRegion(t) {
    var s, i;
    if (!this.wavesurfer) throw Error("WaveSurfer is not initialized");
    const n = this.wavesurfer.getDuration(), r = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getDecodedData()) === null || i === void 0 ? void 0 : i.numberOfChannels, o = new Ki(t, n, r);
    return this.emit("region-initialized", o), n ? this.saveRegion(o) : this.subscriptions.push(this.wavesurfer.once("ready", (l) => {
      o._setTotalDuration(l), this.saveRegion(o);
    })), o;
  }
  enableDragSelection(t, s = 3) {
    var i;
    const n = (i = this.wavesurfer) === null || i === void 0 ? void 0 : i.getWrapper();
    if (!(n && n instanceof HTMLElement)) return () => {
    };
    let r = null, o = 0;
    return Je(n, (l, a, d) => {
      r && r._onUpdate(l, d > o ? "end" : "start");
    }, (l) => {
      var a, d;
      if (o = l, !this.wavesurfer) return;
      const c = this.wavesurfer.getDuration(), h = (d = (a = this.wavesurfer) === null || a === void 0 ? void 0 : a.getDecodedData()) === null || d === void 0 ? void 0 : d.numberOfChannels, { width: p } = this.wavesurfer.getWrapper().getBoundingClientRect(), g = l / p * c, w = (l + 5) / p * c;
      r = new Ki(Object.assign(Object.assign({}, t), { start: g, end: w }), c, h), this.emit("region-initialized", r), r.element && this.regionsContainer.appendChild(r.element);
    }, () => {
      r && (this.saveRegion(r), r = null);
    }, s);
  }
  clearRegions() {
    this.regions.slice().forEach((t) => t.remove()), this.regions = [];
  }
  destroy() {
    this.clearRegions(), super.destroy(), this.regionsContainer.remove();
  }
}
const kl = { class: "waveform-player card" }, $l = { class: "card-header" }, Il = { class: "waveform-wrapper flex-1" }, Nl = {
  key: 0,
  class: "overlay"
}, Wl = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, jl = {
  key: 0,
  class: "controls"
}, Fl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512",
  width: "12",
  fill: "white"
}, Hl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  width: "12",
  fill: "white"
}, zl = { class: "time-display" }, Bl = { class: "current-time" }, Ul = { class: "duration" }, Vl = /* @__PURE__ */ hs({
  __name: "WaveformPlayer",
  props: {
    audioFile: { type: null },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["timeUpdate", "ready", "regionsSelected"],
  setup(e, { expose: t, emit: s }) {
    const i = e, n = s, r = it(), o = it(null), l = it(!1), a = it(0), d = it(0), c = it(!1), h = it(!1), p = it(!1), g = it(), w = it(!1), O = Yn(() => i.isLoading || h.value), $ = (C, S) => Math.random() * (S - C) + C, A = () => `rgba(${$(0, 255)}, ${$(0, 255)}, ${$(0, 255)}, 0.5)`;
    let R = ci.create();
    const I = () => A();
    function x() {
      const C = R.getRegions().map((S) => {
        var N;
        return { start: S.start, end: S.end, color: S.color || ((N = S.options) == null ? void 0 : N.color) || I() };
      });
      n("regionsSelected", C);
    }
    he(() => i.audioFile, async (C) => {
      if (C && (!o.value && r.value && await L(), o.value))
        try {
          const S = URL.createObjectURL(C);
          h.value = !0, await o.value.load(S);
        } catch (S) {
          console.error("Error loading audio file:", S);
        }
    }), he(g, (C) => {
      C && (C.addEventListener("dragover", (S) => {
        S.preventDefault(), p.value = !0;
      }), C.addEventListener("dragleave", () => {
        p.value = !1;
      }), C.addEventListener("drop", (S) => {
        var ot;
        S.preventDefault();
        const N = (ot = S.dataTransfer) == null ? void 0 : ot.getData("text/plain");
        if (N) {
          const At = R.getRegions().find((xt) => xt.id === N);
          At && (At.remove(), x());
        }
        p.value = !1;
      }));
    });
    const L = async () => {
      if (r.value)
        try {
          o.value = We.create({
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
            plugins: [R]
          }), R.enableDragSelection({ color: I() }, 0), R.on("region-created", (C) => {
            C.setOptions({ color: I() }), Qt(C), ze(C), R.getRegions().forEach((N) => {
              N !== C && N.remove();
            }), x();
          }), R.on("region-updated", x), R.on("region-removed", x), R.on("region-clicked", (C, S) => {
            S.stopPropagation(), o.value && (o.value.setTime(C.start), a.value = C.start, n("timeUpdate", C.start));
          }), o.value.on("ready", () => {
            var C;
            c.value = !0, d.value = ((C = o.value) == null ? void 0 : C.getDuration()) || 0, h.value = !1, n("ready");
          }), o.value.on("play", () => {
            l.value = !0;
          }), o.value.on("pause", () => {
            l.value = !1;
          }), o.value.on("finish", () => {
            l.value = !1, a.value = 0;
          }), o.value.on("timeupdate", (C) => {
            a.value = C, n("timeUpdate", C);
          }), o.value.on("seeking", (C) => {
            a.value = C, n("timeUpdate", C);
          });
        } catch (C) {
          console.error("Error initializing WaveSurfer:", C);
        }
    }, K = () => {
      !o.value || !c.value || (l.value ? o.value.pause() : o.value.play());
    }, q = () => {
      o.value && (o.value.stop(), a.value = 0);
    }, J = (C) => {
      if (!o.value || !c.value) return;
      const S = C / d.value;
      o.value.seekTo(S);
    }, et = (C) => {
      const S = Math.floor(C / 60), N = Math.floor(C % 60);
      return `${S.toString().padStart(2, "0")}:${N.toString().padStart(2, "0")}`;
    }, tt = () => {
      w.value = !w.value, w.value ? vt() : Mt();
    };
    function vt() {
      R.getRegions().forEach((C) => Qt(C));
    }
    function Mt() {
      R.getRegions().forEach((C) => ve(C));
    }
    function Qt(C) {
      var xt;
      if (C.__delAttached) return;
      const S = C.element;
      if (!S) return;
      C._origColor = C.color || ((xt = C.options) == null ? void 0 : xt.color);
      const N = () => {
        w.value && C.setOptions({ color: "rgba(255,0,0,0.4)" });
      }, ot = () => {
        w.value && C.setOptions({ color: C._origColor });
      }, At = () => {
        w.value && (C.remove(), x(), w.value = !1, Mt());
      };
      S.addEventListener("mouseenter", N), S.addEventListener("mouseleave", ot), S.addEventListener("click", At), C.__delAttached = { enter: N, leave: ot, click: At };
    }
    function ve(C) {
      const S = C.__delAttached;
      if (!S || !C.element) return;
      const N = C.element;
      N.removeEventListener("mouseenter", S.enter), N.removeEventListener("mouseleave", S.leave), N.removeEventListener("click", S.click), C.setOptions({ color: C._origColor }), delete C.__delAttached;
    }
    function ze(C) {
      if (!(C != null && C.element)) return;
      const S = C.element;
      S.setAttribute("draggable", "true"), S.addEventListener("dragstart", (N) => {
        var ot;
        (ot = N.dataTransfer) == null || ot.setData("text/plain", C.id), document.body.classList.add("dragging-region");
      }), S.addEventListener("dragend", () => {
        document.body.classList.remove("dragging-region"), p.value = !1;
      });
    }
    return ii(async () => {
      await ti(), await L();
    }), ni(() => {
      o.value && o.value.destroy();
    }), t({
      seekTo: J,
      togglePlayPause: K,
      stop: q
    }), (C, S) => (ut(), mt("div", kl, [
      H("div", $l, [
        S[1] || (S[1] = H("i", { class: "mdi mdi-waveform icon" }, null, -1)),
        S[2] || (S[2] = H("span", { class: "title" }, "Audio Waveform", -1)),
        S[3] || (S[3] = H("div", { class: "flex-1" }, null, -1)),
        H("button", {
          class: pe(["btn btn-icon", { shake: w.value, "btn-danger": w.value }]),
          onClick: tt,
          title: "Delete mode"
        }, S[0] || (S[0] = [
          H("i", { class: "mdi mdi-delete" }, null, -1)
        ]), 2)
      ]),
      H("div", Il, [
        O.value ? (ut(), mt("div", Nl, S[4] || (S[4] = [
          H("div", { class: "spinner" }, null, -1)
        ]))) : ie("", !0),
        C.audioFile ? ie("", !0) : (ut(), mt("div", Wl, S[5] || (S[5] = [
          H("i", {
            class: "mdi mdi-waveform icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          H("p", { class: "text-muted mt-4" }, "Load an audio file to see waveform", -1)
        ]))),
        Yr(H("div", {
          ref_key: "waveformContainer",
          ref: r,
          class: "waveform-container"
        }, null, 512), [
          [ll, C.audioFile]
        ])
      ]),
      C.audioFile ? (ut(), mt("div", jl, [
        H("button", {
          class: pe(["btn btn-icon", { "btn-danger": l.value }]),
          onClick: K,
          title: "Play / Pause"
        }, [
          l.value ? ie("", !0) : (ut(), mt("svg", Fl, S[6] || (S[6] = [
            H("path", { d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" }, null, -1)
          ]))),
          l.value ? (ut(), mt("svg", Hl, S[7] || (S[7] = [
            H("path", { d: "M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" }, null, -1)
          ]))) : ie("", !0)
        ], 2),
        H("button", {
          class: "btn btn-icon btn-outline",
          onClick: q,
          title: "Stop"
        }, S[8] || (S[8] = [
          H("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            width: "12",
            fill: "#1976d2"
          }, [
            H("path", { d: "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" })
          ], -1)
        ])),
        S[10] || (S[10] = H("div", { class: "flex-1" }, null, -1)),
        H("div", zl, [
          H("span", Bl, ce(et(a.value)), 1),
          S[9] || (S[9] = H("span", { class: "separator" }, "/", -1)),
          H("span", Ul, ce(et(d.value)), 1)
        ])
      ])) : ie("", !0)
    ]));
  }
}), Kl = '.waveform-wrapper[data-v-782d0d4c]{flex:1;display:flex;align-items:center;justify-content:center;padding:16px}.empty-state[data-v-782d0d4c]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-782d0d4c]{font-size:18px;margin:0}.waveform-container[data-v-782d0d4c]{width:100%;background:#fff;border-radius:8px}.card-header[data-v-782d0d4c]{display:flex;align-items:center;padding:16px;gap:8px;margin-bottom:8px}.switch[data-v-782d0d4c]{position:relative;display:inline-flex;align-items:center;margin-right:8px}.switch input[data-v-782d0d4c]{opacity:0;width:0;height:0}.switch .slider[data-v-782d0d4c]{width:34px;height:14px;background:#ccc;border-radius:14px;position:relative;transition:background .2s;margin-right:4px}.switch .slider[data-v-782d0d4c]:before{content:"";position:absolute;width:18px;height:18px;background:#fff;border-radius:50%;top:-2px;left:-2px;transition:transform .2s;box-shadow:0 0 2px #0000004d}.switch input:checked+.slider[data-v-782d0d4c]{background:#4caf50}.switch input:checked+.slider[data-v-782d0d4c]:before{transform:translate(18px)}.switch .switch-label[data-v-782d0d4c]{font-size:14px;-webkit-user-select:none;user-select:none}.controls[data-v-782d0d4c]{display:flex;align-items:center;padding:16px;border-top:1px solid #e0e0e0;background:#f5f5f5}.controls .btn+.btn[data-v-782d0d4c]{margin-left:8px}.time-display[data-v-782d0d4c]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:16px;color:#424242}.time-display .separator[data-v-782d0d4c]{margin:0 8px;color:#999}.time-display .current-time[data-v-782d0d4c]{font-weight:500}@keyframes shake-782d0d4c{0%{transform:rotate(0)}25%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}to{transform:rotate(0)}}.shake[data-v-782d0d4c]{animation:shake-782d0d4c .6s infinite}', ui = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, n] of t)
    s[i] = n;
  return s;
}, ql = /* @__PURE__ */ ui(Vl, [["styles", [Kl]], ["__scopeId", "data-v-782d0d4c"]]);
function Gl(e) {
  const t = [];
  return e.split(/\n\s*\n/).filter((i) => i.trim()).forEach((i) => {
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
      const c = qi(a), h = qi(d), p = n.slice(2).join(`
`).trim();
      p && t.push({
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
  }), t.sort((i, n) => i.startTime - n.startTime);
}
function qi(e) {
  const t = e.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!t)
    throw new Error(`Invalid SRT timestamp format: ${e}`);
  const s = parseInt(t[1], 10), i = parseInt(t[2], 10), n = parseInt(t[3], 10), r = parseInt(t[4], 10);
  if (s < 0 || i < 0 || i >= 60 || n < 0 || n >= 60 || r < 0 || r >= 1e3)
    throw new Error(`Invalid time values in SRT timestamp: ${e}`);
  return s * 3600 + i * 60 + n + r / 1e3;
}
function Gi(e) {
  const t = Math.floor(e), s = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), n = t % 60;
  return s > 0 ? `${s.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}` : `${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
const Xl = { class: "subtitle-panel card" }, Yl = { class: "subtitle-wrapper flex-1" }, Jl = {
  key: 0,
  class: "overlay"
}, Zl = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, Ql = { class: "subtitle-content" }, ta = ["onClick", "onMouseenter"], ea = { class: "entry-header" }, sa = { class: "timestamp" }, ia = { class: "region-colors" }, na = { class: "duration" }, ra = { class: "entry-text" }, oa = /* @__PURE__ */ hs({
  __name: "SubtitlePanel",
  props: {
    subtitleEntries: { type: Array },
    currentTime: { type: Number },
    isLoading: { type: Boolean },
    selectedRanges: { type: Array }
  },
  emits: ["seekTo"],
  setup(e, { emit: t }) {
    const s = e, i = t, n = it(null), r = (p) => s.currentTime >= p.startTime && s.currentTime < p.endTime, o = (p, g) => `${Gi(p)} → ${Gi(g)}`, l = (p) => `${Math.round(p * 10) / 10}s`, a = (p) => {
      n.value = p;
    }, d = () => {
      n.value = null;
    }, c = (p) => (s.selectedRanges ?? []).some((g) => p.endTime >= g.start && p.startTime <= g.end), h = (p) => (s.selectedRanges ?? []).filter((g) => p.endTime >= g.start && p.startTime <= g.end).map((g) => g.color);
    return (p, g) => (ut(), mt("div", Xl, [
      g[2] || (g[2] = H("div", { class: "card-header" }, [
        H("i", { class: "mdi mdi-subtitles icon" }),
        H("span", { class: "title" }, "Subtitles")
      ], -1)),
      H("div", Yl, [
        p.isLoading && p.subtitleEntries.length === 0 ? (ut(), mt("div", Jl, g[0] || (g[0] = [
          H("div", { class: "spinner" }, null, -1)
        ]))) : ie("", !0),
        p.subtitleEntries.length === 0 && !p.isLoading ? (ut(), mt("div", Zl, g[1] || (g[1] = [
          H("i", {
            class: "mdi mdi-subtitles-outline icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          H("p", { class: "text-muted mt-4" }, "Load an SRT subtitle file to see entries here", -1)
        ]))) : ie("", !0),
        H("div", Ql, [
          (ut(!0), mt(Tt, null, _i(p.subtitleEntries, (w) => (ut(), mt("div", {
            key: w.id,
            class: pe([
              "subtitle-entry",
              { active: r(w) },
              { hover: n.value === w.id },
              { selected: c(w) }
            ]),
            onClick: (O) => i("seekTo", w.startTime),
            onMouseenter: (O) => a(w.id),
            onMouseleave: d
          }, [
            H("div", ea, [
              H("span", sa, ce(o(w.startTime, w.endTime)), 1),
              H("div", ia, [
                (ut(!0), mt(Tt, null, _i(h(w), (O, $) => (ut(), mt("span", {
                  key: $,
                  class: "color-box",
                  style: us({ backgroundColor: O })
                }, null, 4))), 128))
              ]),
              H("span", na, ce(l(w.endTime - w.startTime)), 1)
            ]),
            H("div", ra, ce(w.text), 1)
          ], 42, ta))), 128))
        ])
      ])
    ]));
  }
}), la = ".subtitle-panel[data-v-79055703]{padding:16px 8px 16px 16px;max-height:100%;overflow-y:auto}.subtitle-content[data-v-79055703]{overflow-y:auto;padding:8px}.empty-state[data-v-79055703]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-79055703]{font-size:18px;margin:0}.subtitle-entry[data-v-79055703]{padding:16px;margin-bottom:4px;border-radius:8px;cursor:pointer;transition:all .2s ease;border:2px solid transparent}.subtitle-entry[data-v-79055703]:hover{background-color:#1976d20d}.subtitle-entry.active[data-v-79055703]{background-color:#1976d21a;border-left:4px solid #1976d2;transform:translate(-4px);box-shadow:0 2px 8px #1976d233}.subtitle-entry.selected[data-v-79055703]{background-color:#4caf501f;border-left:4px solid #4caf50}.subtitle-entry.hover[data-v-79055703]{transform:scale(1.02);font-weight:500}.subtitle-entry .entry-header[data-v-79055703]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.subtitle-entry .entry-header .timestamp[data-v-79055703]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:14px;color:#424242;background:#4242421a;padding:2px 8px;border-radius:4px}.subtitle-entry .entry-header .duration[data-v-79055703]{font-size:14px;color:#1976d2b3;font-weight:500}.subtitle-entry .entry-text[data-v-79055703]{line-height:1.6;color:#000000de;font-size:16px}.region-colors[data-v-79055703]{display:flex;gap:4px;margin-left:4px}.region-colors .color-box[data-v-79055703]{width:12px;height:12px;border-radius:2px}.card-header[data-v-79055703]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.subtitle-wrapper[data-v-79055703]{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden}", aa = /* @__PURE__ */ ui(oa, [["styles", [la]], ["__scopeId", "data-v-79055703"]]), ca = { class: "app-container" }, ua = { class: "main-content grid-2col" }, da = { class: "subtitle-column card flex-1" }, fa = { class: "waveform-column card flex-1" }, ha = /* @__PURE__ */ hs({
  __name: "App",
  props: {
    audioUrl: { type: String }
  },
  setup(e) {
    const t = e, s = it(null), i = it([]), n = it(0), r = it(!1), o = it(!1), l = it(), a = it([]), d = (R) => R.replace(/\.mp3$/, ".srt"), c = () => {
      s.value = null, i.value = [];
    }, h = async (R) => {
      r.value = !0;
      try {
        const I = await fetch(R);
        if (!I.ok) throw new Error("Subtitle not found");
        const x = await I.text();
        i.value = Gl(x);
      } catch {
        i.value = [];
      }
      r.value = !1;
    }, p = async (R) => {
      o.value = !0;
      try {
        const I = await fetch(R);
        if (!I.ok) throw new Error("Audio not found");
        const x = await I.blob(), L = x.type.split("/")[1] || "mp3";
        s.value = new File([x], `audio.${L}`, {
          type: x.type
        });
      } catch {
        s.value = null;
      }
      o.value = !1;
    }, g = (R) => {
      n.value = R;
    }, w = () => {
      o.value = !1;
    }, O = (R) => {
      var I;
      (I = l.value) == null || I.seekTo(R);
    }, $ = (R) => {
      a.value = R;
    }, A = async (R) => {
      if (!R) {
        c();
        return;
      }
      await Promise.all([
        h(d(R)),
        p(R)
      ]), (!s.value || i.value.length === 0) && c();
    };
    return he(
      () => t.audioUrl,
      (R) => {
        A(R);
      },
      { immediate: !0 }
    ), ii(() => {
      t.audioUrl ? A(t.audioUrl) : c();
    }), (R, I) => (ut(), mt("div", ca, [
      H("main", ua, [
        H("div", da, [
          Et(aa, {
            "subtitle-entries": i.value,
            "current-time": n.value,
            "is-loading": r.value,
            "selected-ranges": a.value,
            onSeekTo: O
          }, null, 8, ["subtitle-entries", "current-time", "is-loading", "selected-ranges"])
        ]),
        H("div", fa, [
          Et(ql, {
            "audio-file": s.value,
            "is-loading": o.value,
            onTimeUpdate: g,
            onReady: w,
            onRegionsSelected: $,
            ref_key: "waveformPlayer",
            ref: l
          }, null, 8, ["audio-file", "is-loading"])
        ])
      ])
    ]));
  }
}), pa = "*{box-sizing:border-box}body{margin:0;padding:0;font-family:Roboto,sans-serif;font-size:16px;line-height:1.5;background-color:#fafafa}.app-container{display:flex;flex-direction:column}.main-content{flex:1;display:flex;max-height:100%}.flex{display:flex}.flex-center,.overlay{display:flex;justify-content:center;align-items:center}.flex-1{flex:1}.grid-2col{display:flex;height:100%}.card{background:#fff;box-shadow:0 2px 4px #0000001a;display:flex;flex-direction:column;height:500px}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;padding:8px 16px;border-radius:8px;font-size:16px;display:inline-flex;align-items:center;gap:4px;background:#1976d2;color:#fff}.btn.btn-outline{background:transparent;border:2px solid #82b1ff;color:#82b1ff}.btn.btn-danger{background:#ff5252}.btn.btn-icon{padding:4px}.icon{font-size:24px}.overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff9;z-index:10}.spinner{width:48px;height:48px;border:4px solid rgba(25,118,210,.2);border-top-color:#1976d2;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.header{display:flex;align-items:center;padding:16px;background:#1976d2;color:#fff}.header .spacer{flex:1}.controls{display:flex;align-items:center;gap:8px;padding:16px;background:#f5f5f5}.text-muted{color:#9e9e9e}.mt-4{margin-top:16px}", ga = /* @__PURE__ */ ui(ha, [["styles", [pa]]]), ma = /* @__PURE__ */ wl(ga, { shadowRoot: !0 });
customElements.define("subtitle-wave-player", ma);
