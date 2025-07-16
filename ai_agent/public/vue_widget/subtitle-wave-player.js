/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const X = {}, ae = [], $t = () => {
}, rr = () => !1, os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vs = (e) => e.startsWith("onUpdate:"), it = Object.assign, zs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, or = Object.prototype.hasOwnProperty, U = (e, t) => or.call(e, t), W = Array.isArray, ce = (e) => ls(e) === "[object Map]", Gi = (e) => ls(e) === "[object Set]", j = (e) => typeof e == "function", st = (e) => typeof e == "string", Jt = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", Xi = (e) => (tt(e) || j(e)) && j(e.then) && j(e.catch), Yi = Object.prototype.toString, ls = (e) => Yi.call(e), lr = (e) => ls(e).slice(8, -1), as = (e) => ls(e) === "[object Object]", Us = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ee = /* @__PURE__ */ Bs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, ar = /-(\w)/g, Et = cs(
  (e) => e.replace(ar, (t, s) => s ? s.toUpperCase() : "")
), cr = /\B([A-Z])/g, Ct = cs(
  (e) => e.replace(cr, "-$1").toLowerCase()
), Ji = cs((e) => e.charAt(0).toUpperCase() + e.slice(1)), _s = cs(
  (e) => e ? `on${Ji(e)}` : ""
), Gt = (e, t) => !Object.is(e, t), ys = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, As = (e, t, s, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, ur = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mi = (e) => {
  const t = st(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let vi;
const us = () => vi || (vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zs(e) {
  if (W(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const i = e[s], n = st(i) ? pr(i) : Zs(i);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (st(e) || tt(e))
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
  if (st(e))
    t = e;
  else if (W(e))
    for (let s = 0; s < e.length; s++) {
      const i = pe(e[s]);
      i && (t += i + " ");
    }
  else if (tt(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mr = /* @__PURE__ */ Bs(gr);
function Qi(e) {
  return !!e || e === "";
}
const tn = (e) => !!(e && e.__v_isRef === !0), ie = (e) => st(e) ? e : e == null ? "" : W(e) || tt(e) && (e.toString === Yi || !j(e.toString)) ? tn(e) ? ie(e.value) : JSON.stringify(e, en, 2) : String(e), en = (e, t) => tn(t) ? en(e, t.value) : ce(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [i, n], r) => (s[Cs(i, r) + " =>"] = n, s),
    {}
  )
} : Gi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Cs(s))
} : Jt(t) ? Cs(t) : tt(t) && !W(t) && !as(t) ? String(t) : t, Cs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Jt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mt;
class vr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
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
      const s = mt;
      try {
        return mt = this, t();
      } finally {
        mt = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = mt, mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (mt = this.prevScope, this.prevScope = void 0);
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
  return mt;
}
let J;
const xs = /* @__PURE__ */ new WeakSet();
class sn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xs.has(this) && (xs.delete(this), this.trigger()));
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
    this.flags |= 2, bi(this), on(this);
    const t = J, s = Lt;
    J = this, Lt = !0;
    try {
      return this.fn();
    } finally {
      ln(this), J = t, Lt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gs(t);
      this.deps = this.depsTail = void 0, bi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Os(this) && this.run();
  }
  get dirty() {
    return Os(this);
  }
}
let nn = 0, Le, Te;
function rn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Te, Te = e;
    return;
  }
  e.next = Le, Le = e;
}
function Ks() {
  nn++;
}
function qs() {
  if (--nn > 0)
    return;
  if (Te) {
    let t = Te;
    for (Te = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Le; ) {
    let t = Le;
    for (Le = void 0; t; ) {
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
    i.version === -1 ? (i === s && (s = n), Gs(i), _r(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  e.deps = t, e.depsTail = s;
}
function Os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (an(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function an(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Oe) || (e.globalVersion = Oe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Os(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = J, i = Lt;
  J = e, Lt = !0;
  try {
    on(e);
    const n = e.fn(e._value);
    (t.version === 0 || Gt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    J = s, Lt = i, ln(e), e.flags &= -3;
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
function _r(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let Lt = !0;
const cn = [];
function zt() {
  cn.push(Lt), Lt = !1;
}
function Ut() {
  const e = cn.pop();
  Lt = e === void 0 ? !0 : e;
}
function bi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = J;
    J = void 0;
    try {
      t();
    } finally {
      J = s;
    }
  }
}
let Oe = 0;
class yr {
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
    if (!J || !Lt || J === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== J)
      s = this.activeLink = new yr(J, this), J.deps ? (s.prevDep = J.depsTail, J.depsTail.nextDep = s, J.depsTail = s) : J.deps = J.depsTail = s, un(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = J.depsTail, s.nextDep = void 0, J.depsTail.nextDep = s, J.depsTail = s, J.deps === s && (J.deps = i);
    }
    return s;
  }
  trigger(t) {
    this.version++, Oe++, this.notify(t);
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
), De = Symbol(
  ""
);
function at(e, t, s) {
  if (Lt && J) {
    let i = Ds.get(e);
    i || Ds.set(e, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new Xs()), n.map = i, n.key = s), n.track();
  }
}
function Ht(e, t, s, i, n, r) {
  const o = Ds.get(e);
  if (!o) {
    Oe++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ks(), t === "clear")
    o.forEach(l);
  else {
    const a = W(e), d = a && Us(s);
    if (a && s === "length") {
      const c = Number(i);
      o.forEach((h, p) => {
        (p === "length" || p === De || !Jt(p) && p >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(De)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(ne)), ce(e) && l(o.get(ks)));
          break;
        case "delete":
          a || (l(o.get(ne)), ce(e) && l(o.get(ks)));
          break;
        case "set":
          ce(e) && l(o.get(ne));
          break;
      }
  }
  qs();
}
function oe(e) {
  const t = Z(e);
  return t === e ? t : (at(t, "iterate", De), wt(e) ? t : t.map(ot));
}
function ds(e) {
  return at(e = Z(e), "iterate", De), e;
}
const Cr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ws(this, Symbol.iterator, ot);
  },
  concat(...e) {
    return oe(this).concat(
      ...e.map((t) => W(t) ? oe(t) : t)
    );
  },
  entries() {
    return ws(this, "entries", (e) => (e[1] = ot(e[1]), e));
  },
  every(e, t) {
    return Ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ft(this, "filter", e, t, (s) => s.map(ot), arguments);
  },
  find(e, t) {
    return Ft(this, "find", e, t, ot, arguments);
  },
  findIndex(e, t) {
    return Ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ft(this, "findLast", e, t, ot, arguments);
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
    return oe(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ss(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ye(this, "pop");
  },
  push(...e) {
    return ye(this, "push", e);
  },
  reduce(e, ...t) {
    return _i(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _i(this, "reduceRight", e, t);
  },
  shift() {
    return ye(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ye(this, "splice", e);
  },
  toReversed() {
    return oe(this).toReversed();
  },
  toSorted(e) {
    return oe(this).toSorted(e);
  },
  toSpliced(...e) {
    return oe(this).toSpliced(...e);
  },
  unshift(...e) {
    return ye(this, "unshift", e);
  },
  values() {
    return ws(this, "values", ot);
  }
};
function ws(e, t, s) {
  const i = ds(e), n = i[t]();
  return i !== e && !wt(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.value && (r.value = s(r.value)), r;
  }), n;
}
const xr = Array.prototype;
function Ft(e, t, s, i, n, r) {
  const o = ds(e), l = o !== e && !wt(e), a = o[t];
  if (a !== xr[t]) {
    const h = a.apply(e, r);
    return l ? ot(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, p) {
    return s.call(this, ot(h), p, e);
  } : s.length > 2 && (d = function(h, p) {
    return s.call(this, h, p, e);
  }));
  const c = a.call(o, d, i);
  return l && n ? n(c) : c;
}
function _i(e, t, s, i) {
  const n = ds(e);
  let r = s;
  return n !== e && (wt(e) ? s.length > 3 && (r = function(o, l, a) {
    return s.call(this, o, l, a, e);
  }) : r = function(o, l, a) {
    return s.call(this, o, ot(l), a, e);
  }), n[t](r, ...i);
}
function Ss(e, t, s) {
  const i = Z(e);
  at(i, "iterate", De);
  const n = i[t](...s);
  return (n === -1 || n === !1) && ti(s[0]) ? (s[0] = Z(s[0]), i[t](...s)) : n;
}
function ye(e, t, s = []) {
  zt(), Ks();
  const i = Z(e)[t].apply(e, s);
  return qs(), Ut(), i;
}
const wr = /* @__PURE__ */ Bs("__proto__,__v_isRef,__isVue"), dn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jt)
);
function Sr(e) {
  Jt(e) || (e = String(e));
  const t = Z(this);
  return at(t, "has", e), t.hasOwnProperty(e);
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
      if (o && (a = Cr[s]))
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
      ct(t) ? t : i
    );
    return (Jt(s) ? dn.has(s) : wr(s)) || (n || at(t, "get", s), r) ? l : ct(l) ? o && Us(s) ? l : l.value : tt(l) ? n ? vn(l) : Js(l) : l;
  }
}
class hn extends fn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, i, n) {
    let r = t[s];
    if (!this._isShallow) {
      const a = Xt(r);
      if (!wt(i) && !Xt(i) && (r = Z(r), i = Z(i)), !W(t) && ct(r) && !ct(i))
        return a ? !1 : (r.value = i, !0);
    }
    const o = W(t) && Us(s) ? Number(s) < t.length : U(t, s), l = Reflect.set(
      t,
      s,
      i,
      ct(t) ? t : n
    );
    return t === Z(n) && (o ? Gt(i, r) && Ht(t, "set", s, i) : Ht(t, "add", s, i)), l;
  }
  deleteProperty(t, s) {
    const i = U(t, s);
    t[s];
    const n = Reflect.deleteProperty(t, s);
    return n && i && Ht(t, "delete", s, void 0), n;
  }
  has(t, s) {
    const i = Reflect.has(t, s);
    return (!Jt(s) || !dn.has(s)) && at(t, "has", s), i;
  }
  ownKeys(t) {
    return at(
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
const Lr = /* @__PURE__ */ new hn(), Tr = /* @__PURE__ */ new Er(), Mr = /* @__PURE__ */ new hn(!0);
const Is = (e) => e, Ve = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, s) {
  return function(...i) {
    const n = this.__v_raw, r = Z(n), o = ce(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = n[e](...i), c = s ? Is : t ? Je : ot;
    return !t && at(
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
function ze(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pr(e, t) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = Z(r), l = Z(n);
      e || (Gt(n, l) && at(o, "get", n), at(o, "get", l));
      const { has: a } = Ve(o), d = t ? Is : e ? Je : ot;
      if (a.call(o, n))
        return d(r.get(n));
      if (a.call(o, l))
        return d(r.get(l));
      r !== o && r.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && at(Z(n), "iterate", ne), Reflect.get(n, "size", n);
    },
    has(n) {
      const r = this.__v_raw, o = Z(r), l = Z(n);
      return e || (Gt(n, l) && at(o, "has", n), at(o, "has", l)), n === l ? r.has(n) : r.has(n) || r.has(l);
    },
    forEach(n, r) {
      const o = this, l = o.__v_raw, a = Z(l), d = t ? Is : e ? Je : ot;
      return !e && at(a, "iterate", ne), l.forEach((c, h) => n.call(r, d(c), d(h), o));
    }
  };
  return it(
    s,
    e ? {
      add: ze("add"),
      set: ze("set"),
      delete: ze("delete"),
      clear: ze("clear")
    } : {
      add(n) {
        !t && !wt(n) && !Xt(n) && (n = Z(n));
        const r = Z(this);
        return Ve(r).has.call(r, n) || (r.add(n), Ht(r, "add", n, n)), this;
      },
      set(n, r) {
        !t && !wt(r) && !Xt(r) && (r = Z(r));
        const o = Z(this), { has: l, get: a } = Ve(o);
        let d = l.call(o, n);
        d || (n = Z(n), d = l.call(o, n));
        const c = a.call(o, n);
        return o.set(n, r), d ? Gt(r, c) && Ht(o, "set", n, r) : Ht(o, "add", n, r), this;
      },
      delete(n) {
        const r = Z(this), { has: o, get: l } = Ve(r);
        let a = o.call(r, n);
        a || (n = Z(n), a = o.call(r, n)), l && l.call(r, n);
        const d = r.delete(n);
        return a && Ht(r, "delete", n, void 0), d;
      },
      clear() {
        const n = Z(this), r = n.size !== 0, o = n.clear();
        return r && Ht(
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
    s[n] = Rr(n, e, t);
  }), s;
}
function Ys(e, t) {
  const s = Pr(e, t);
  return (i, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    U(s, n) && n in i ? s : i,
    n,
    r
  );
}
const Ar = {
  get: /* @__PURE__ */ Ys(!1, !1)
}, Or = {
  get: /* @__PURE__ */ Ys(!1, !0)
}, Dr = {
  get: /* @__PURE__ */ Ys(!0, !1)
};
const pn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap();
function Ir(e) {
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
function $r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ir(lr(e));
}
function Js(e) {
  return Xt(e) ? e : Qs(
    e,
    !1,
    Lr,
    Ar,
    pn
  );
}
function Nr(e) {
  return Qs(
    e,
    !1,
    Mr,
    Or,
    gn
  );
}
function vn(e) {
  return Qs(
    e,
    !0,
    Tr,
    Dr,
    mn
  );
}
function Qs(e, t, s, i, n) {
  if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = $r(e);
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
  return Xt(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xt(e) {
  return !!(e && e.__v_isReadonly);
}
function wt(e) {
  return !!(e && e.__v_isShallow);
}
function ti(e) {
  return e ? !!e.__v_raw : !1;
}
function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e;
}
function Wr(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && As(e, "__v_skip", !0), e;
}
const ot = (e) => tt(e) ? Js(e) : e, Je = (e) => tt(e) ? vn(e) : e;
function ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rt(e) {
  return Fr(e, !1);
}
function Fr(e, t) {
  return ct(e) ? e : new jr(e, t);
}
class jr {
  constructor(t, s) {
    this.dep = new Xs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : Z(t), this._value = s ? t : ot(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, i = this.__v_isShallow || wt(t) || Xt(t);
    t = i ? t : Z(t), Gt(t, s) && (this._rawValue = t, this._value = i ? t : ot(t), this.dep.trigger());
  }
}
function bn(e) {
  return ct(e) ? e.value : e;
}
const Hr = {
  get: (e, t, s) => t === "__v_raw" ? e : bn(Reflect.get(e, t, s)),
  set: (e, t, s, i) => {
    const n = e[t];
    return ct(n) && !ct(s) ? (n.value = s, !0) : Reflect.set(e, t, s, i);
  }
};
function _n(e) {
  return ue(e) ? e : new Proxy(e, Hr);
}
class Br {
  constructor(t, s, i) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Xs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Oe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
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
function Vr(e, t, s = !1) {
  let i, n;
  return j(e) ? i = e : (i = e.get, n = e.set), new Br(i, n, s);
}
const Ue = {}, Qe = /* @__PURE__ */ new WeakMap();
let se;
function zr(e, t = !1, s = se) {
  if (s) {
    let i = Qe.get(s);
    i || Qe.set(s, i = []), i.push(e);
  }
}
function Ur(e, t, s = X) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (C) => n ? C : wt(C) || n === !1 || n === 0 ? Bt(C, 1) : Bt(C);
  let c, h, p, m, S = !1, I = !1;
  if (ct(e) ? (h = () => e.value, S = wt(e)) : ue(e) ? (h = () => d(e), S = !0) : W(e) ? (I = !0, S = e.some((C) => ue(C) || wt(C)), h = () => e.map((C) => {
    if (ct(C))
      return C.value;
    if (ue(C))
      return d(C);
    if (j(C))
      return a ? a(C, 2) : C();
  })) : j(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (p) {
      zt();
      try {
        p();
      } finally {
        Ut();
      }
    }
    const C = se;
    se = c;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      se = C;
    }
  } : h = $t, t && n) {
    const C = h, O = n === !0 ? 1 / 0 : n;
    h = () => Bt(C(), O);
  }
  const A = br(), R = () => {
    c.stop(), A && A.active && zs(A.effects, c);
  };
  if (r && t) {
    const C = t;
    t = (...O) => {
      C(...O), R();
    };
  }
  let T = I ? new Array(e.length).fill(Ue) : Ue;
  const $ = (C) => {
    if (!(!(c.flags & 1) || !c.dirty && !C))
      if (t) {
        const O = c.run();
        if (n || S || (I ? O.some((q, G) => Gt(q, T[G])) : Gt(O, T))) {
          p && p();
          const q = se;
          se = c;
          try {
            const G = [
              O,
              // pass undefined as the old value when it's changed for the first time
              T === Ue ? void 0 : I && T[0] === Ue ? [] : T,
              m
            ];
            T = O, a ? a(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            se = q;
          }
        }
      } else
        c.run();
  };
  return l && l($), c = new sn(h), c.scheduler = o ? () => o($, !1) : $, m = (C) => zr(C, !1, c), p = c.onStop = () => {
    const C = Qe.get(c);
    if (C) {
      if (a)
        a(C, 4);
      else
        for (const O of C) O();
      Qe.delete(c);
    }
  }, t ? i ? $(!0) : T = c.run() : o ? o($.bind(null, !0), !0) : c.run(), R.pause = c.pause.bind(c), R.resume = c.resume.bind(c), R.stop = R, R;
}
function Bt(e, t = 1 / 0, s) {
  if (t <= 0 || !tt(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, ct(e))
    Bt(e.value, t, s);
  else if (W(e))
    for (let i = 0; i < e.length; i++)
      Bt(e[i], t, s);
  else if (Gi(e) || ce(e))
    e.forEach((i) => {
      Bt(i, t, s);
    });
  else if (as(e)) {
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
function We(e, t, s, i) {
  try {
    return i ? e(...i) : e();
  } catch (n) {
    fs(n, t, s);
  }
}
function Nt(e, t, s, i) {
  if (j(e)) {
    const n = We(e, t, s, i);
    return n && Xi(n) && n.catch((r) => {
      fs(r, t, s);
    }), n;
  }
  if (W(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(Nt(e[r], t, s, i));
    return n;
  }
}
function fs(e, t, s, i = !0) {
  const n = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || X;
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
      zt(), We(r, null, 10, [
        e,
        a,
        d
      ]), Ut();
      return;
    }
  }
  Zr(e, s, n, i, o);
}
function Zr(e, t, s, i = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const dt = [];
let Ot = -1;
const de = [];
let Kt = null, le = 0;
const yn = /* @__PURE__ */ Promise.resolve();
let ts = null;
function ei(e) {
  const t = ts || yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kr(e) {
  let t = Ot + 1, s = dt.length;
  for (; t < s; ) {
    const i = t + s >>> 1, n = dt[i], r = ke(n);
    r < e || r === e && n.flags & 2 ? t = i + 1 : s = i;
  }
  return t;
}
function si(e) {
  if (!(e.flags & 1)) {
    const t = ke(e), s = dt[dt.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ke(s) ? dt.push(e) : dt.splice(Kr(t), 0, e), e.flags |= 1, Cn();
  }
}
function Cn() {
  ts || (ts = yn.then(wn));
}
function qr(e) {
  W(e) ? de.push(...e) : Kt && e.id === -1 ? Kt.splice(le + 1, 0, e) : e.flags & 1 || (de.push(e), e.flags |= 1), Cn();
}
function yi(e, t, s = Ot + 1) {
  for (; s < dt.length; s++) {
    const i = dt[s];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      dt.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function xn(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (s, i) => ke(s) - ke(i)
    );
    if (de.length = 0, Kt) {
      Kt.push(...t);
      return;
    }
    for (Kt = t, le = 0; le < Kt.length; le++) {
      const s = Kt[le];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Kt = null, le = 0;
  }
}
const ke = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wn(e) {
  try {
    for (Ot = 0; Ot < dt.length; Ot++) {
      const t = dt[Ot];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), We(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ot < dt.length; Ot++) {
      const t = dt[Ot];
      t && (t.flags &= -2);
    }
    Ot = -1, dt.length = 0, xn(), ts = null, (dt.length || de.length) && wn();
  }
}
let xt = null, Sn = null;
function es(e) {
  const t = xt;
  return xt = e, Sn = e && e.type.__scopeId || null, t;
}
function Gr(e, t = xt, s) {
  if (!t || e._n)
    return e;
  const i = (...n) => {
    i._d && Ri(-1);
    const r = es(t);
    let o;
    try {
      o = e(...n);
    } finally {
      es(r), i._d && Ri(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Xr(e, t) {
  if (xt === null)
    return e;
  const s = vs(xt), i = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, o, l, a = X] = t[n];
    r && (j(r) && (r = {
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
    a && (zt(), Nt(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Ut());
  }
}
const Yr = Symbol("_vte"), Jr = (e) => e.__isTeleport;
function ii(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ii(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hs(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    it({ name: e.name }, t, { setup: e })
  ) : e;
}
function En(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Me(e, t, s, i, n = !1) {
  if (W(e)) {
    e.forEach(
      (S, I) => Me(
        S,
        t && (W(t) ? t[I] : t),
        s,
        i,
        n
      )
    );
    return;
  }
  if (Re(i) && !n) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Me(e, t, s, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? vs(i.component) : i.el, o = n ? null : r, { i: l, r: a } = e, d = t && t.r, c = l.refs === X ? l.refs = {} : l.refs, h = l.setupState, p = Z(h), m = h === X ? () => !1 : (S) => U(p, S);
  if (d != null && d !== a && (st(d) ? (c[d] = null, m(d) && (h[d] = null)) : ct(d) && (d.value = null)), j(a))
    We(a, l, 12, [o, c]);
  else {
    const S = st(a), I = ct(a);
    if (S || I) {
      const A = () => {
        if (e.f) {
          const R = S ? m(a) ? h[a] : c[a] : a.value;
          n ? W(R) && zs(R, r) : W(R) ? R.includes(r) || R.push(r) : S ? (c[a] = [r], m(a) && (h[a] = c[a])) : (a.value = [r], e.k && (c[e.k] = a.value));
        } else S ? (c[a] = o, m(a) && (h[a] = o)) : I && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? (A.id = -1, bt(A, s)) : A();
    }
  }
}
us().requestIdleCallback;
us().cancelIdleCallback;
const Re = (e) => !!e.type.__asyncLoader, Ln = (e) => e.type.__isKeepAlive;
function Qr(e, t) {
  Tn(e, "a", t);
}
function to(e, t) {
  Tn(e, "da", t);
}
function Tn(e, t, s = ft) {
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
      Ln(n.parent.vnode) && eo(i, t, s, n), n = n.parent;
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
  ri(() => {
    zs(i[t], n);
  }, s);
}
function ps(e, t, s = ft, i = !1) {
  if (s) {
    const n = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      zt();
      const l = Fe(s), a = Nt(t, s, e, o);
      return l(), Ut(), a;
    });
    return i ? n.unshift(r) : n.push(r), r;
  }
}
const Zt = (e) => (t, s = ft) => {
  (!$e || e === "sp") && ps(e, (...i) => t(...i), s);
}, so = Zt("bm"), ni = Zt("m"), io = Zt(
  "bu"
), no = Zt("u"), ro = Zt(
  "bum"
), ri = Zt("um"), oo = Zt(
  "sp"
), lo = Zt("rtg"), ao = Zt("rtc");
function co(e, t = ft) {
  ps("ec", e, t);
}
const uo = Symbol.for("v-ndc");
function fo(e, t, s, i) {
  let n;
  const r = s, o = W(e);
  if (o || st(e)) {
    const l = o && ue(e);
    let a = !1, d = !1;
    l && (a = !wt(e), d = Xt(e), e = ds(e)), n = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      n[c] = t(
        a ? d ? Je(ot(e[c])) : ot(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let l = 0; l < e; l++)
      n[l] = t(l + 1, l, void 0, r);
  } else if (tt(e))
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
const $s = (e) => e ? qn(e) ? vs(e) : $s(e.parent) : null, Pe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ it(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $s(e.parent),
    $root: (e) => $s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Rn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      si(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ei.bind(e.proxy)),
    $watch: (e) => ko.bind(e)
  })
), Es = (e, t) => e !== X && !e.__isScriptSetup && U(e, t), ho = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: i, data: n, props: r, accessCache: o, type: l, appContext: a } = e;
    let d;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
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
        if (n !== X && U(n, t))
          return o[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && U(d, t)
        )
          return o[t] = 3, r[t];
        if (s !== X && U(s, t))
          return o[t] = 4, s[t];
        Ns && (o[t] = 0);
      }
    }
    const c = Pe[t];
    let h, p;
    if (c)
      return t === "$attrs" && at(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (s !== X && U(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      p = a.config.globalProperties, U(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, s) {
    const { data: i, setupState: n, ctx: r } = e;
    return Es(n, t) ? (n[t] = s, !0) : i !== X && U(i, t) ? (i[t] = s, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: i, appContext: n, propsOptions: r }
  }, o) {
    let l;
    return !!s[o] || e !== X && U(e, o) || Es(t, o) || (l = r[0]) && U(l, o) || U(i, o) || U(Pe, o) || U(n.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : U(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ci(e) {
  return W(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Ns = !0;
function po(e) {
  const t = Rn(e), s = e.proxy, i = e.ctx;
  Ns = !1, t.beforeCreate && xi(t.beforeCreate, e, "bc");
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
    beforeUpdate: m,
    updated: S,
    activated: I,
    deactivated: A,
    beforeDestroy: R,
    beforeUnmount: T,
    destroyed: $,
    unmounted: C,
    render: O,
    renderTracked: q,
    renderTriggered: G,
    errorCaptured: Q,
    serverPrefetch: nt,
    // public API
    expose: et,
    inheritAttrs: ht,
    // assets
    components: Wt,
    directives: re,
    filters: M
  } = t;
  if (d && go(d, i, null), o)
    for (const V in o) {
      const z = o[V];
      j(z) && (i[V] = z.bind(s));
    }
  if (n) {
    const V = n.call(s, s);
    tt(V) && (e.data = Js(V));
  }
  if (Ns = !0, r)
    for (const V in r) {
      const z = r[V], yt = j(z) ? z.bind(s, s) : j(z.get) ? z.get.bind(s, s) : $t, He = !j(z) && j(z.set) ? z.set.bind(s) : $t, Qt = Xn({
        get: yt,
        set: He
      });
      Object.defineProperty(i, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Qt.value,
        set: (Tt) => Qt.value = Tt
      });
    }
  if (l)
    for (const V in l)
      Mn(l[V], i, s, V);
  if (a) {
    const V = j(a) ? a.call(s) : a;
    Reflect.ownKeys(V).forEach((z) => {
      Co(z, V[z]);
    });
  }
  c && xi(c, e, "c");
  function H(V, z) {
    W(z) ? z.forEach((yt) => V(yt.bind(s))) : z && V(z.bind(s));
  }
  if (H(so, h), H(ni, p), H(io, m), H(no, S), H(Qr, I), H(to, A), H(co, Q), H(ao, q), H(lo, G), H(ro, T), H(ri, C), H(oo, nt), W(et))
    if (et.length) {
      const V = e.exposed || (e.exposed = {});
      et.forEach((z) => {
        Object.defineProperty(V, z, {
          get: () => s[z],
          set: (yt) => s[z] = yt
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === $t && (e.render = O), ht != null && (e.inheritAttrs = ht), Wt && (e.components = Wt), re && (e.directives = re), nt && En(e);
}
function go(e, t, s = $t) {
  W(e) && (e = Ws(e));
  for (const i in e) {
    const n = e[i];
    let r;
    tt(n) ? "default" in n ? r = qe(
      n.from || i,
      n.default,
      !0
    ) : r = qe(n.from || i) : r = qe(n), ct(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function xi(e, t, s) {
  Nt(
    W(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function Mn(e, t, s, i) {
  let n = i.includes(".") ? Bn(s, i) : () => s[i];
  if (st(e)) {
    const r = t[e];
    j(r) && he(n, r);
  } else if (j(e))
    he(n, e.bind(s));
  else if (tt(e))
    if (W(e))
      e.forEach((r) => Mn(r, t, s, i));
    else {
      const r = j(e.handler) ? e.handler.bind(s) : t[e.handler];
      j(r) && he(n, r, e);
    }
}
function Rn(e) {
  const t = e.type, { mixins: s, extends: i } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !n.length && !s && !i ? a = t : (a = {}, n.length && n.forEach(
    (d) => ss(a, d, o, !0)
  ), ss(a, t, o)), tt(t) && r.set(t, a), a;
}
function ss(e, t, s, i = !1) {
  const { mixins: n, extends: r } = t;
  r && ss(e, r, s, !0), n && n.forEach(
    (o) => ss(e, o, s, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const l = mo[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const mo = {
  data: wi,
  props: Si,
  emits: Si,
  // objects
  methods: we,
  computed: we,
  // lifecycle
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  // assets
  components: we,
  directives: we,
  // watch
  watch: bo,
  // provide / inject
  provide: wi,
  inject: vo
};
function wi(e, t) {
  return t ? e ? function() {
    return it(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vo(e, t) {
  return we(Ws(e), Ws(t));
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
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function we(e, t) {
  return e ? it(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Si(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : it(
    /* @__PURE__ */ Object.create(null),
    Ci(e),
    Ci(t ?? {})
  ) : t;
}
function bo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = it(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    s[i] = ut(e[i], t[i]);
  return s;
}
function Pn() {
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
let _o = 0;
function yo(e, t) {
  return function(i, n = null) {
    j(i) || (i = it({}, i)), n != null && !tt(n) && (n = null);
    const r = Pn(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: _o++,
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
        return o.has(c) || (c && j(c.install) ? (o.add(c), c.install(d, ...h)) : j(c) && (o.add(c), c(d, ...h))), d;
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
          const m = d._ceVNode || St(i, n);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, c, p), a = !0, d._container = c, c.__vue_app__ = d, vs(m.component);
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a && (Nt(
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
function Co(e, t) {
  if (ft) {
    let s = ft.provides;
    const i = ft.parent && ft.parent.provides;
    i === s && (s = ft.provides = Object.create(i)), s[e] = t;
  }
}
function qe(e, t, s = !1) {
  const i = ft || xt;
  if (i || fe) {
    let n = fe ? fe._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return s && j(t) ? t.call(i && i.proxy) : t;
  }
}
const An = {}, On = () => Object.create(An), Dn = (e) => Object.getPrototypeOf(e) === An;
function xo(e, t, s, i = !1) {
  const n = {}, r = On();
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
  } = e, l = Z(n), [a] = e.propsOptions;
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
        const m = t[p];
        if (a)
          if (U(r, p))
            m !== r[p] && (r[p] = m, d = !0);
          else {
            const S = Et(p);
            n[S] = Fs(
              a,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== r[p] && (r[p] = m, d = !0);
      }
    }
  } else {
    kn(e, t, n, r) && (d = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !U(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Ct(h)) === h || !U(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (n[h] = Fs(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete n[h]);
    if (r !== l)
      for (const h in r)
        (!t || !U(t, h)) && (delete r[h], d = !0);
  }
  d && Ht(e.attrs, "set", "");
}
function kn(e, t, s, i) {
  const [n, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Ee(a))
        continue;
      const d = t[a];
      let c;
      n && U(n, c = Et(a)) ? !r || !r.includes(c) ? s[c] = d : (l || (l = {}))[c] = d : gs(e.emitsOptions, a) || (!(a in i) || d !== i[a]) && (i[a] = d, o = !0);
    }
  if (r) {
    const a = Z(s), d = l || X;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = Fs(
        n,
        a,
        h,
        d[h],
        e,
        !U(d, h)
      );
    }
  }
  return o;
}
function Fs(e, t, s, i, n, r) {
  const o = e[s];
  if (o != null) {
    const l = U(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && j(a)) {
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
    ] && (i === "" || i === Ct(s)) && (i = !0));
  }
  return i;
}
const So = /* @__PURE__ */ new WeakMap();
function In(e, t, s = !1) {
  const i = s ? So : t.propsCache, n = i.get(e);
  if (n)
    return n;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!j(e)) {
    const c = (h) => {
      a = !0;
      const [p, m] = In(h, t, !0);
      it(o, p), m && l.push(...m);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return tt(e) && i.set(e, ae), ae;
  if (W(r))
    for (let c = 0; c < r.length; c++) {
      const h = Et(r[c]);
      Ei(h) && (o[h] = X);
    }
  else if (r)
    for (const c in r) {
      const h = Et(c);
      if (Ei(h)) {
        const p = r[c], m = o[h] = W(p) || j(p) ? { type: p } : it({}, p), S = m.type;
        let I = !1, A = !0;
        if (W(S))
          for (let R = 0; R < S.length; ++R) {
            const T = S[R], $ = j(T) && T.name;
            if ($ === "Boolean") {
              I = !0;
              break;
            } else $ === "String" && (A = !1);
          }
        else
          I = j(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = I, m[
          1
          /* shouldCastTrue */
        ] = A, (I || U(m, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return tt(e) && i.set(e, d), d;
}
function Ei(e) {
  return e[0] !== "$" && !Ee(e);
}
const oi = (e) => e[0] === "_" || e === "$stable", li = (e) => W(e) ? e.map(kt) : [kt(e)], Eo = (e, t, s) => {
  if (t._n)
    return t;
  const i = Gr((...n) => li(t(...n)), s);
  return i._c = !1, i;
}, $n = (e, t, s) => {
  const i = e._ctx;
  for (const n in e) {
    if (oi(n)) continue;
    const r = e[n];
    if (j(r))
      t[n] = Eo(n, r, i);
    else if (r != null) {
      const o = li(r);
      t[n] = () => o;
    }
  }
}, Nn = (e, t) => {
  const s = li(t);
  e.slots.default = () => s;
}, Wn = (e, t, s) => {
  for (const i in t)
    (s || !oi(i)) && (e[i] = t[i]);
}, Lo = (e, t, s) => {
  const i = e.slots = On();
  if (e.vnode.shapeFlag & 32) {
    const n = t.__;
    n && As(i, "__", n, !0);
    const r = t._;
    r ? (Wn(i, t, s), s && As(i, "_", r, !0)) : $n(t, i);
  } else t && Nn(e, t);
}, To = (e, t, s) => {
  const { vnode: i, slots: n } = e;
  let r = !0, o = X;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Wn(n, t, s) : (r = !t.$stable, $n(t, n)), o = t;
  } else t && (Nn(e, t), o = { default: 1 });
  if (r)
    for (const l in n)
      !oi(l) && o[l] == null && delete n[l];
}, bt = Ho;
function Mo(e) {
  return Ro(e);
}
function Ro(e, t) {
  const s = us();
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
    setScopeId: m = $t,
    insertStaticContent: S
  } = e, I = (u, f, g, _ = null, v = null, b = null, E = void 0, w = null, x = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Ce(u, f) && (_ = Be(u), Tt(u, v, b, !0), u = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: y, ref: k, shapeFlag: L } = f;
    switch (y) {
      case ms:
        A(u, f, g, _);
        break;
      case Yt:
        R(u, f, g, _);
        break;
      case Ts:
        u == null && T(f, g, _, E);
        break;
      case Dt:
        Wt(
          u,
          f,
          g,
          _,
          v,
          b,
          E,
          w,
          x
        );
        break;
      default:
        L & 1 ? O(
          u,
          f,
          g,
          _,
          v,
          b,
          E,
          w,
          x
        ) : L & 6 ? re(
          u,
          f,
          g,
          _,
          v,
          b,
          E,
          w,
          x
        ) : (L & 64 || L & 128) && y.process(
          u,
          f,
          g,
          _,
          v,
          b,
          E,
          w,
          x,
          be
        );
    }
    k != null && v ? Me(k, u && u.ref, b, f || u, !f) : k == null && u && u.ref != null && Me(u.ref, null, b, u, !0);
  }, A = (u, f, g, _) => {
    if (u == null)
      i(
        f.el = l(f.children),
        g,
        _
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && d(v, f.children);
    }
  }, R = (u, f, g, _) => {
    u == null ? i(
      f.el = a(f.children || ""),
      g,
      _
    ) : f.el = u.el;
  }, T = (u, f, g, _) => {
    [u.el, u.anchor] = S(
      u.children,
      f,
      g,
      _,
      u.el,
      u.anchor
    );
  }, $ = ({ el: u, anchor: f }, g, _) => {
    let v;
    for (; u && u !== f; )
      v = p(u), i(u, g, _), u = v;
    i(f, g, _);
  }, C = ({ el: u, anchor: f }) => {
    let g;
    for (; u && u !== f; )
      g = p(u), n(u), u = g;
    n(f);
  }, O = (u, f, g, _, v, b, E, w, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), u == null ? q(
      f,
      g,
      _,
      v,
      b,
      E,
      w,
      x
    ) : nt(
      u,
      f,
      v,
      b,
      E,
      w,
      x
    );
  }, q = (u, f, g, _, v, b, E, w) => {
    let x, y;
    const { props: k, shapeFlag: L, transition: D, dirs: F } = u;
    if (x = u.el = o(
      u.type,
      b,
      k && k.is,
      k
    ), L & 8 ? c(x, u.children) : L & 16 && Q(
      u.children,
      x,
      null,
      _,
      v,
      Ls(u, b),
      E,
      w
    ), F && te(u, null, _, "created"), G(x, u, u.scopeId, E, _), k) {
      for (const Y in k)
        Y !== "value" && !Ee(Y) && r(x, Y, null, k[Y], b, _);
      "value" in k && r(x, "value", null, k.value, b), (y = k.onVnodeBeforeMount) && At(y, _, u);
    }
    F && te(u, null, _, "beforeMount");
    const B = Po(v, D);
    B && D.beforeEnter(x), i(x, f, g), ((y = k && k.onVnodeMounted) || B || F) && bt(() => {
      y && At(y, _, u), B && D.enter(x), F && te(u, null, _, "mounted");
    }, v);
  }, G = (u, f, g, _, v) => {
    if (g && m(u, g), _)
      for (let b = 0; b < _.length; b++)
        m(u, _[b]);
    if (v) {
      let b = v.subTree;
      if (f === b || zn(b.type) && (b.ssContent === f || b.ssFallback === f)) {
        const E = v.vnode;
        G(
          u,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, Q = (u, f, g, _, v, b, E, w, x = 0) => {
    for (let y = x; y < u.length; y++) {
      const k = u[y] = w ? qt(u[y]) : kt(u[y]);
      I(
        null,
        k,
        f,
        g,
        _,
        v,
        b,
        E,
        w
      );
    }
  }, nt = (u, f, g, _, v, b, E) => {
    const w = f.el = u.el;
    let { patchFlag: x, dynamicChildren: y, dirs: k } = f;
    x |= u.patchFlag & 16;
    const L = u.props || X, D = f.props || X;
    let F;
    if (g && ee(g, !1), (F = D.onVnodeBeforeUpdate) && At(F, g, f, u), k && te(f, u, g, "beforeUpdate"), g && ee(g, !0), (L.innerHTML && D.innerHTML == null || L.textContent && D.textContent == null) && c(w, ""), y ? et(
      u.dynamicChildren,
      y,
      w,
      g,
      _,
      Ls(f, v),
      b
    ) : E || z(
      u,
      f,
      w,
      null,
      g,
      _,
      Ls(f, v),
      b,
      !1
    ), x > 0) {
      if (x & 16)
        ht(w, L, D, g, v);
      else if (x & 2 && L.class !== D.class && r(w, "class", null, D.class, v), x & 4 && r(w, "style", L.style, D.style, v), x & 8) {
        const B = f.dynamicProps;
        for (let Y = 0; Y < B.length; Y++) {
          const K = B[Y], pt = L[K], gt = D[K];
          (gt !== pt || K === "value") && r(w, K, pt, gt, v, g);
        }
      }
      x & 1 && u.children !== f.children && c(w, f.children);
    } else !E && y == null && ht(w, L, D, g, v);
    ((F = D.onVnodeUpdated) || k) && bt(() => {
      F && At(F, g, f, u), k && te(f, u, g, "updated");
    }, _);
  }, et = (u, f, g, _, v, b, E) => {
    for (let w = 0; w < f.length; w++) {
      const x = u[w], y = f[w], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Dt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ce(x, y) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? h(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      I(
        x,
        y,
        k,
        null,
        _,
        v,
        b,
        E,
        !0
      );
    }
  }, ht = (u, f, g, _, v) => {
    if (f !== g) {
      if (f !== X)
        for (const b in f)
          !Ee(b) && !(b in g) && r(
            u,
            b,
            f[b],
            null,
            v,
            _
          );
      for (const b in g) {
        if (Ee(b)) continue;
        const E = g[b], w = f[b];
        E !== w && b !== "value" && r(u, b, w, E, v, _);
      }
      "value" in g && r(u, "value", f.value, g.value, v);
    }
  }, Wt = (u, f, g, _, v, b, E, w, x) => {
    const y = f.el = u ? u.el : l(""), k = f.anchor = u ? u.anchor : l("");
    let { patchFlag: L, dynamicChildren: D, slotScopeIds: F } = f;
    F && (w = w ? w.concat(F) : F), u == null ? (i(y, g, _), i(k, g, _), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      k,
      v,
      b,
      E,
      w,
      x
    )) : L > 0 && L & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (et(
      u.dynamicChildren,
      D,
      g,
      v,
      b,
      E,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && Fn(
      u,
      f,
      !0
      /* shallow */
    )) : z(
      u,
      f,
      g,
      k,
      v,
      b,
      E,
      w,
      x
    );
  }, re = (u, f, g, _, v, b, E, w, x) => {
    f.slotScopeIds = w, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      g,
      _,
      E,
      x
    ) : M(
      f,
      g,
      _,
      v,
      b,
      E,
      x
    ) : P(u, f, x);
  }, M = (u, f, g, _, v, b, E) => {
    const w = u.component = Go(
      u,
      _,
      v
    );
    if (Ln(u) && (w.ctx.renderer = be), Xo(w, !1, E), w.asyncDep) {
      if (v && v.registerDep(w, H, E), !u.el) {
        const x = w.subTree = St(Yt);
        R(null, x, f, g);
      }
    } else
      H(
        w,
        u,
        f,
        g,
        v,
        b,
        E
      );
  }, P = (u, f, g) => {
    const _ = f.component = u.component;
    if (Fo(u, f, g))
      if (_.asyncDep && !_.asyncResolved) {
        V(_, f, g);
        return;
      } else
        _.next = f, _.update();
    else
      f.el = u.el, _.vnode = f;
  }, H = (u, f, g, _, v, b, E) => {
    const w = () => {
      if (u.isMounted) {
        let { next: L, bu: D, u: F, parent: B, vnode: Y } = u;
        {
          const Rt = jn(u);
          if (Rt) {
            L && (L.el = Y.el, V(u, L, E)), Rt.asyncDep.then(() => {
              u.isUnmounted || w();
            });
            return;
          }
        }
        let K = L, pt;
        ee(u, !1), L ? (L.el = Y.el, V(u, L, E)) : L = Y, D && ys(D), (pt = L.props && L.props.onVnodeBeforeUpdate) && At(pt, B, L, Y), ee(u, !0);
        const gt = Ti(u), Mt = u.subTree;
        u.subTree = gt, I(
          Mt,
          gt,
          // parent may have changed if it's in a teleport
          h(Mt.el),
          // anchor may have changed if it's in a fragment
          Be(Mt),
          u,
          v,
          b
        ), L.el = gt.el, K === null && jo(u, gt.el), F && bt(F, v), (pt = L.props && L.props.onVnodeUpdated) && bt(
          () => At(pt, B, L, Y),
          v
        );
      } else {
        let L;
        const { el: D, props: F } = f, { bm: B, m: Y, parent: K, root: pt, type: gt } = u, Mt = Re(f);
        ee(u, !1), B && ys(B), !Mt && (L = F && F.onVnodeBeforeMount) && At(L, K, f), ee(u, !0);
        {
          pt.ce && // @ts-expect-error _def is private
          pt.ce._def.shadowRoot !== !1 && pt.ce._injectChildStyle(gt);
          const Rt = u.subTree = Ti(u);
          I(
            null,
            Rt,
            g,
            _,
            u,
            v,
            b
          ), f.el = Rt.el;
        }
        if (Y && bt(Y, v), !Mt && (L = F && F.onVnodeMounted)) {
          const Rt = f;
          bt(
            () => At(L, K, Rt),
            v
          );
        }
        (f.shapeFlag & 256 || K && Re(K.vnode) && K.vnode.shapeFlag & 256) && u.a && bt(u.a, v), u.isMounted = !0, f = g = _ = null;
      }
    };
    u.scope.on();
    const x = u.effect = new sn(w);
    u.scope.off();
    const y = u.update = x.run.bind(x), k = u.job = x.runIfDirty.bind(x);
    k.i = u, k.id = u.uid, x.scheduler = () => si(k), ee(u, !0), y();
  }, V = (u, f, g) => {
    f.component = u;
    const _ = u.vnode.props;
    u.vnode = f, u.next = null, wo(u, f.props, _, g), To(u, f.children, g), zt(), yi(u), Ut();
  }, z = (u, f, g, _, v, b, E, w, x = !1) => {
    const y = u && u.children, k = u ? u.shapeFlag : 0, L = f.children, { patchFlag: D, shapeFlag: F } = f;
    if (D > 0) {
      if (D & 128) {
        He(
          y,
          L,
          g,
          _,
          v,
          b,
          E,
          w,
          x
        );
        return;
      } else if (D & 256) {
        yt(
          y,
          L,
          g,
          _,
          v,
          b,
          E,
          w,
          x
        );
        return;
      }
    }
    F & 8 ? (k & 16 && ve(y, v, b), L !== y && c(g, L)) : k & 16 ? F & 16 ? He(
      y,
      L,
      g,
      _,
      v,
      b,
      E,
      w,
      x
    ) : ve(y, v, b, !0) : (k & 8 && c(g, ""), F & 16 && Q(
      L,
      g,
      _,
      v,
      b,
      E,
      w,
      x
    ));
  }, yt = (u, f, g, _, v, b, E, w, x) => {
    u = u || ae, f = f || ae;
    const y = u.length, k = f.length, L = Math.min(y, k);
    let D;
    for (D = 0; D < L; D++) {
      const F = f[D] = x ? qt(f[D]) : kt(f[D]);
      I(
        u[D],
        F,
        g,
        null,
        v,
        b,
        E,
        w,
        x
      );
    }
    y > k ? ve(
      u,
      v,
      b,
      !0,
      !1,
      L
    ) : Q(
      f,
      g,
      _,
      v,
      b,
      E,
      w,
      x,
      L
    );
  }, He = (u, f, g, _, v, b, E, w, x) => {
    let y = 0;
    const k = f.length;
    let L = u.length - 1, D = k - 1;
    for (; y <= L && y <= D; ) {
      const F = u[y], B = f[y] = x ? qt(f[y]) : kt(f[y]);
      if (Ce(F, B))
        I(
          F,
          B,
          g,
          null,
          v,
          b,
          E,
          w,
          x
        );
      else
        break;
      y++;
    }
    for (; y <= L && y <= D; ) {
      const F = u[L], B = f[D] = x ? qt(f[D]) : kt(f[D]);
      if (Ce(F, B))
        I(
          F,
          B,
          g,
          null,
          v,
          b,
          E,
          w,
          x
        );
      else
        break;
      L--, D--;
    }
    if (y > L) {
      if (y <= D) {
        const F = D + 1, B = F < k ? f[F].el : _;
        for (; y <= D; )
          I(
            null,
            f[y] = x ? qt(f[y]) : kt(f[y]),
            g,
            B,
            v,
            b,
            E,
            w,
            x
          ), y++;
      }
    } else if (y > D)
      for (; y <= L; )
        Tt(u[y], v, b, !0), y++;
    else {
      const F = y, B = y, Y = /* @__PURE__ */ new Map();
      for (y = B; y <= D; y++) {
        const vt = f[y] = x ? qt(f[y]) : kt(f[y]);
        vt.key != null && Y.set(vt.key, y);
      }
      let K, pt = 0;
      const gt = D - B + 1;
      let Mt = !1, Rt = 0;
      const _e = new Array(gt);
      for (y = 0; y < gt; y++) _e[y] = 0;
      for (y = F; y <= L; y++) {
        const vt = u[y];
        if (pt >= gt) {
          Tt(vt, v, b, !0);
          continue;
        }
        let Pt;
        if (vt.key != null)
          Pt = Y.get(vt.key);
        else
          for (K = B; K <= D; K++)
            if (_e[K - B] === 0 && Ce(vt, f[K])) {
              Pt = K;
              break;
            }
        Pt === void 0 ? Tt(vt, v, b, !0) : (_e[Pt - B] = y + 1, Pt >= Rt ? Rt = Pt : Mt = !0, I(
          vt,
          f[Pt],
          g,
          null,
          v,
          b,
          E,
          w,
          x
        ), pt++);
      }
      const pi = Mt ? Ao(_e) : ae;
      for (K = pi.length - 1, y = gt - 1; y >= 0; y--) {
        const vt = B + y, Pt = f[vt], gi = vt + 1 < k ? f[vt + 1].el : _;
        _e[y] === 0 ? I(
          null,
          Pt,
          g,
          gi,
          v,
          b,
          E,
          w,
          x
        ) : Mt && (K < 0 || y !== pi[K] ? Qt(Pt, g, gi, 2) : K--);
      }
    }
  }, Qt = (u, f, g, _, v = null) => {
    const { el: b, type: E, transition: w, children: x, shapeFlag: y } = u;
    if (y & 6) {
      Qt(u.component.subTree, f, g, _);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, g, _);
      return;
    }
    if (y & 64) {
      E.move(u, f, g, be);
      return;
    }
    if (E === Dt) {
      i(b, f, g);
      for (let L = 0; L < x.length; L++)
        Qt(x[L], f, g, _);
      i(u.anchor, f, g);
      return;
    }
    if (E === Ts) {
      $(u, f, g);
      return;
    }
    if (_ !== 2 && y & 1 && w)
      if (_ === 0)
        w.beforeEnter(b), i(b, f, g), bt(() => w.enter(b), v);
      else {
        const { leave: L, delayLeave: D, afterLeave: F } = w, B = () => {
          u.ctx.isUnmounted ? n(b) : i(b, f, g);
        }, Y = () => {
          L(b, () => {
            B(), F && F();
          });
        };
        D ? D(b, B, Y) : Y();
      }
    else
      i(b, f, g);
  }, Tt = (u, f, g, _ = !1, v = !1) => {
    const {
      type: b,
      props: E,
      ref: w,
      children: x,
      dynamicChildren: y,
      shapeFlag: k,
      patchFlag: L,
      dirs: D,
      cacheIndex: F
    } = u;
    if (L === -2 && (v = !1), w != null && (zt(), Me(w, null, g, u, !0), Ut()), F != null && (f.renderCache[F] = void 0), k & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const B = k & 1 && D, Y = !Re(u);
    let K;
    if (Y && (K = E && E.onVnodeBeforeUnmount) && At(K, f, u), k & 6)
      nr(u.component, g, _);
    else {
      if (k & 128) {
        u.suspense.unmount(g, _);
        return;
      }
      B && te(u, null, f, "beforeUnmount"), k & 64 ? u.type.remove(
        u,
        f,
        g,
        be,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Dt || L > 0 && L & 64) ? ve(
        y,
        f,
        g,
        !1,
        !0
      ) : (b === Dt && L & 384 || !v && k & 16) && ve(x, f, g), _ && fi(u);
    }
    (Y && (K = E && E.onVnodeUnmounted) || B) && bt(() => {
      K && At(K, f, u), B && te(u, null, f, "unmounted");
    }, g);
  }, fi = (u) => {
    const { type: f, el: g, anchor: _, transition: v } = u;
    if (f === Dt) {
      ir(g, _);
      return;
    }
    if (f === Ts) {
      C(u);
      return;
    }
    const b = () => {
      n(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: w } = v, x = () => E(g, b);
      w ? w(u.el, b, x) : x();
    } else
      b();
  }, ir = (u, f) => {
    let g;
    for (; u !== f; )
      g = p(u), n(u), u = g;
    n(f);
  }, nr = (u, f, g) => {
    const {
      bum: _,
      scope: v,
      job: b,
      subTree: E,
      um: w,
      m: x,
      a: y,
      parent: k,
      slots: { __: L }
    } = u;
    Li(x), Li(y), _ && ys(_), k && W(L) && L.forEach((D) => {
      k.renderCache[D] = void 0;
    }), v.stop(), b && (b.flags |= 8, Tt(E, u, f, g)), w && bt(w, f), bt(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ve = (u, f, g, _ = !1, v = !1, b = 0) => {
    for (let E = b; E < u.length; E++)
      Tt(u[E], f, g, _, v);
  }, Be = (u) => {
    if (u.shapeFlag & 6)
      return Be(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = p(u.anchor || u.el), g = f && f[Yr];
    return g ? p(g) : f;
  };
  let bs = !1;
  const hi = (u, f, g) => {
    u == null ? f._vnode && Tt(f._vnode, null, null, !0) : I(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = u, bs || (bs = !0, yi(), xn(), bs = !1);
  }, be = {
    p: I,
    um: Tt,
    m: Qt,
    r: fi,
    mt: M,
    mc: Q,
    pc: z,
    pbc: et,
    n: Be,
    o: e
  };
  return {
    render: hi,
    hydrate: void 0,
    createApp: yo(hi)
  };
}
function Ls({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ee({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Po(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fn(e, t, s = !1) {
  const i = e.children, n = t.children;
  if (W(i) && W(n))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = n[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = n[r] = qt(n[r]), l.el = o.el), !s && l.patchFlag !== -2 && Fn(o, l)), l.type === ms && (l.el = o.el), l.type === Yt && !l.el && (l.el = o.el);
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
function jn(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jn(t);
}
function Li(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Oo = Symbol.for("v-scx"), Do = () => qe(Oo);
function he(e, t, s) {
  return Hn(e, t, s);
}
function Hn(e, t, s = X) {
  const { immediate: i, deep: n, flush: r, once: o } = s, l = it({}, s), a = t && i || !t && r !== "post";
  let d;
  if ($e) {
    if (r === "sync") {
      const m = Do();
      d = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = $t, m.resume = $t, m.pause = $t, m;
    }
  }
  const c = ft;
  l.call = (m, S, I) => Nt(m, c, S, I);
  let h = !1;
  r === "post" ? l.scheduler = (m) => {
    bt(m, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (m, S) => {
    S ? m() : si(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
  };
  const p = Ur(e, t, l);
  return $e && (d ? d.push(p) : a && p()), p;
}
function ko(e, t, s) {
  const i = this.proxy, n = st(e) ? e.includes(".") ? Bn(i, e) : () => i[e] : e.bind(i, i);
  let r;
  j(t) ? r = t : (r = t.handler, s = t);
  const o = Fe(this), l = Hn(n, r.bind(i), s);
  return o(), l;
}
function Bn(e, t) {
  const s = t.split(".");
  return () => {
    let i = e;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const Io = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Et(t)}Modifiers`] || e[`${Ct(t)}Modifiers`];
function $o(e, t, ...s) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || X;
  let n = s;
  const r = t.startsWith("update:"), o = r && Io(i, t.slice(7));
  o && (o.trim && (n = s.map((c) => st(c) ? c.trim() : c)), o.number && (n = s.map(ur)));
  let l, a = i[l = _s(t)] || // also try camelCase event handler (#2249)
  i[l = _s(Et(t))];
  !a && r && (a = i[l = _s(Ct(t))]), a && Nt(
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
    e.emitted[l] = !0, Nt(
      d,
      e,
      6,
      n
    );
  }
}
function Vn(e, t, s = !1) {
  const i = t.emitsCache, n = i.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let o = {}, l = !1;
  if (!j(e)) {
    const a = (d) => {
      const c = Vn(d, t, !0);
      c && (l = !0, it(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (tt(e) && i.set(e, null), null) : (W(r) ? r.forEach((a) => o[a] = null) : it(o, r), tt(e) && i.set(e, o), o);
}
function gs(e, t) {
  return !e || !os(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Ct(t)) || U(e, t));
}
function Ti(e) {
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
    setupState: m,
    ctx: S,
    inheritAttrs: I
  } = e, A = es(e);
  let R, T;
  try {
    if (s.shapeFlag & 4) {
      const C = n || i, O = C;
      R = kt(
        d.call(
          O,
          C,
          c,
          h,
          m,
          p,
          S
        )
      ), T = l;
    } else {
      const C = t;
      R = kt(
        C.length > 1 ? C(
          h,
          { attrs: l, slots: o, emit: a }
        ) : C(
          h,
          null
        )
      ), T = t.props ? l : No(l);
    }
  } catch (C) {
    Ae.length = 0, fs(C, e, 1), R = St(Yt);
  }
  let $ = R;
  if (T && I !== !1) {
    const C = Object.keys(T), { shapeFlag: O } = $;
    C.length && O & 7 && (r && C.some(Vs) && (T = Wo(
      T,
      r
    )), $ = ge($, T, !1, !0));
  }
  return s.dirs && ($ = ge($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(s.dirs) : s.dirs), s.transition && ii($, s.transition), R = $, es(A), R;
}
const No = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || os(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Wo = (e, t) => {
  const s = {};
  for (const i in e)
    (!Vs(i) || !(i.slice(9) in t)) && (s[i] = e[i]);
  return s;
};
function Fo(e, t, s) {
  const { props: i, children: n, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Mi(i, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (o[p] !== i[p] && !gs(d, p))
          return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Mi(i, o, d) : !0 : !!o;
  return !1;
}
function Mi(e, t, s) {
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
const zn = (e) => e.__isSuspense;
function Ho(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : qr(e);
}
const Dt = Symbol.for("v-fgt"), ms = Symbol.for("v-txt"), Yt = Symbol.for("v-cmt"), Ts = Symbol.for("v-stc"), Ae = [];
let _t = null;
function It(e = !1) {
  Ae.push(_t = e ? null : []);
}
function Bo() {
  Ae.pop(), _t = Ae[Ae.length - 1] || null;
}
let Ie = 1;
function Ri(e, t = !1) {
  Ie += e, e < 0 && _t && t && (_t.hasOnce = !0);
}
function Un(e) {
  return e.dynamicChildren = Ie > 0 ? _t || ae : null, Bo(), Ie > 0 && _t && _t.push(e), e;
}
function Vt(e, t, s, i, n, r) {
  return Un(
    N(
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
function Vo(e, t, s, i, n) {
  return Un(
    St(
      e,
      t,
      s,
      i,
      n,
      !0
    )
  );
}
function Zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ce(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Kn = ({ key: e }) => e ?? null, Ge = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || ct(e) || j(e) ? { i: xt, r: e, k: t, f: !!s } : e : null);
function N(e, t = null, s = null, i = 0, n = null, r = e === Dt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kn(t),
    ref: t && Ge(t),
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
    ctx: xt
  };
  return l ? (ai(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= st(s) ? 8 : 16), Ie > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && _t.push(a), a;
}
const St = zo;
function zo(e, t = null, s = null, i = 0, n = null, r = !1) {
  if ((!e || e === uo) && (e = Yt), Zn(e)) {
    const l = ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && ai(l, s), Ie > 0 && !r && _t && (l.shapeFlag & 6 ? _t[_t.indexOf(e)] = l : _t.push(l)), l.patchFlag = -2, l;
  }
  if (tl(e) && (e = e.__vccOpts), t) {
    t = Uo(t);
    let { class: l, style: a } = t;
    l && !st(l) && (t.class = pe(l)), tt(a) && (ti(a) && !W(a) && (a = it({}, a)), t.style = Zs(a));
  }
  const o = st(e) ? 1 : zn(e) ? 128 : Jr(e) ? 64 : tt(e) ? 4 : j(e) ? 2 : 0;
  return N(
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
  return e ? ti(e) || Dn(e) ? it({}, e) : e : null;
}
function ge(e, t, s = !1, i = !1) {
  const { props: n, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? Zo(n || {}, t) : n, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Kn(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? W(r) ? r.concat(Ge(t)) : [r, Ge(t)] : Ge(t)
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
    patchFlag: t && e.type !== Dt ? o === -1 ? 16 : o | 16 : o,
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
  return a && i && ii(
    c,
    a.clone(c)
  ), c;
}
function is(e = " ", t = 0) {
  return St(ms, null, e, t);
}
function Ze(e = "", t = !1) {
  return t ? (It(), Vo(Yt, null, e)) : St(Yt, null, e);
}
function kt(e) {
  return e == null || typeof e == "boolean" ? St(Yt) : W(e) ? St(
    Dt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zn(e) ? qt(e) : St(ms, null, String(e));
}
function qt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ge(e);
}
function ai(e, t) {
  let s = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (W(t))
    s = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), ai(e, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = t._;
      !n && !Dn(t) ? t._ctx = xt : n === 3 && xt && (xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: xt }, s = 32) : (t = String(t), i & 64 ? (s = 16, t = [is(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Zo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (const n in i)
      if (n === "class")
        t.class !== i.class && (t.class = pe([t.class, i.class]));
      else if (n === "style")
        t.style = Zs([t.style, i.style]);
      else if (os(n)) {
        const r = t[n], o = i[n];
        o && r !== o && !(W(r) && r.includes(o)) && (t[n] = r ? [].concat(r, o) : o);
      } else n !== "" && (t[n] = i[n]);
  }
  return t;
}
function At(e, t, s, i = null) {
  Nt(e, t, 7, [
    s,
    i
  ]);
}
const Ko = Pn();
let qo = 0;
function Go(e, t, s) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || Ko, r = {
    uid: qo++,
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
    propsOptions: In(i, n),
    emitsOptions: Vn(i, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
let ft = null, ns, js;
{
  const e = us(), t = (s, i) => {
    let n;
    return (n = e[s]) || (n = e[s] = []), n.push(i), (r) => {
      n.length > 1 ? n.forEach((o) => o(r)) : n[0](r);
    };
  };
  ns = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ft = s
  ), js = t(
    "__VUE_SSR_SETTERS__",
    (s) => $e = s
  );
}
const Fe = (e) => {
  const t = ft;
  return ns(e), e.scope.on(), () => {
    e.scope.off(), ns(t);
  };
}, Pi = () => {
  ft && ft.scope.off(), ns(null);
};
function qn(e) {
  return e.vnode.shapeFlag & 4;
}
let $e = !1;
function Xo(e, t = !1, s = !1) {
  t && js(t);
  const { props: i, children: n } = e.vnode, r = qn(e);
  xo(e, i, r, t), Lo(e, n, s || t);
  const o = r ? Yo(e, t) : void 0;
  return t && js(!1), o;
}
function Yo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ho);
  const { setup: i } = s;
  if (i) {
    zt();
    const n = e.setupContext = i.length > 1 ? Qo(e) : null, r = Fe(e), o = We(
      i,
      e,
      0,
      [
        e.props,
        n
      ]
    ), l = Xi(o);
    if (Ut(), r(), (l || e.sp) && !Re(e) && En(e), l) {
      if (o.then(Pi, Pi), t)
        return o.then((a) => {
          Ai(e, a);
        }).catch((a) => {
          fs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ai(e, o);
  } else
    Gn(e);
}
function Ai(e, t, s) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = _n(t)), Gn(e);
}
function Gn(e, t, s) {
  const i = e.type;
  e.render || (e.render = i.render || $t);
  {
    const n = Fe(e);
    zt();
    try {
      po(e);
    } finally {
      Ut(), n();
    }
  }
}
const Jo = {
  get(e, t) {
    return at(e, "get", ""), e[t];
  }
};
function Qo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_n(Wr(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Pe)
        return Pe[s](e);
    },
    has(t, s) {
      return s in t || s in Pe;
    }
  })) : e.proxy;
}
function tl(e) {
  return j(e) && "__vccOpts" in e;
}
const Xn = (e, t) => Vr(e, t, $e), el = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hs;
const Oi = typeof window < "u" && window.trustedTypes;
if (Oi)
  try {
    Hs = /* @__PURE__ */ Oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yn = Hs ? (e) => Hs.createHTML(e) : (e) => e, sl = "http://www.w3.org/2000/svg", il = "http://www.w3.org/1998/Math/MathML", jt = typeof document < "u" ? document : null, Di = jt && /* @__PURE__ */ jt.createElement("template"), nl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, i) => {
    const n = t === "svg" ? jt.createElementNS(sl, e) : t === "mathml" ? jt.createElementNS(il, e) : s ? jt.createElement(e, { is: s }) : jt.createElement(e);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => jt.createTextNode(e),
  createComment: (e) => jt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jt.querySelector(e),
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
      Di.innerHTML = Yn(
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
const rs = Symbol("_vod"), Jn = Symbol("_vsh"), ll = {
  beforeMount(e, { value: t }, { transition: s }) {
    e[rs] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : xe(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: i }) {
    !t != !s && (i ? t ? (i.beforeEnter(e), xe(e, !0), i.enter(e)) : i.leave(e, () => {
      xe(e, !1);
    }) : xe(e, t));
  },
  beforeUnmount(e, { value: t }) {
    xe(e, t);
  }
};
function xe(e, t) {
  e.style.display = t ? e[rs] : "none", e[Jn] = !t;
}
const al = Symbol(""), cl = /(^|;)\s*display\s*:/;
function ul(e, t, s) {
  const i = e.style, n = st(s);
  let r = !1;
  if (s && !n) {
    if (t)
      if (st(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Xe(i, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Xe(i, o, "");
    for (const o in s)
      o === "display" && (r = !0), Xe(i, o, s[o]);
  } else if (n) {
    if (t !== s) {
      const o = i[al];
      o && (s += ";" + o), i.cssText = s, r = cl.test(s);
    }
  } else t && e.removeAttribute("style");
  rs in e && (e[rs] = r ? i.display : "", e[Jn] && (i.display = "none"));
}
const ki = /\s*!important$/;
function Xe(e, t, s) {
  if (W(s))
    s.forEach((i) => Xe(e, t, i));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const i = dl(e, t);
    ki.test(s) ? e.setProperty(
      Ct(i),
      s.replace(ki, ""),
      "important"
    ) : e[i] = s;
  }
}
const Ii = ["Webkit", "Moz", "ms"], Ms = {};
function dl(e, t) {
  const s = Ms[t];
  if (s)
    return s;
  let i = Et(t);
  if (i !== "filter" && i in e)
    return Ms[t] = i;
  i = Ji(i);
  for (let n = 0; n < Ii.length; n++) {
    const r = Ii[n] + i;
    if (r in e)
      return Ms[t] = r;
  }
  return t;
}
const $i = "http://www.w3.org/1999/xlink";
function Ni(e, t, s, i, n, r = mr(t)) {
  i && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS($i, t.slice(6, t.length)) : e.setAttributeNS($i, t, s) : s == null || r && !Qi(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Jt(s) ? String(s) : s
  );
}
function Wi(e, t, s, i, n) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Yn(s) : s);
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
const Fi = Symbol("_vei");
function pl(e, t, s, i, n = null) {
  const r = e[Fi] || (e[Fi] = {}), o = r[t];
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
const ji = /(?:Once|Passive|Capture)$/;
function gl(e) {
  let t;
  if (ji.test(e)) {
    t = {};
    let i;
    for (; i = e.match(ji); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let Rs = 0;
const ml = /* @__PURE__ */ Promise.resolve(), vl = () => Rs || (ml.then(() => Rs = 0), Rs = Date.now());
function bl(e, t) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    Nt(
      _l(i, s.value),
      t,
      5,
      [i]
    );
  };
  return s.value = e, s.attached = vl(), s;
}
function _l(e, t) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yl = (e, t, s, i, n, r) => {
  const o = n === "svg";
  t === "class" ? ol(e, i, o) : t === "style" ? ul(e, s, i) : os(t) ? Vs(t) || pl(e, t, s, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cl(e, t, i, o)) ? (Wi(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !st(i)) ? Wi(e, Et(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Ni(e, t, i, o));
};
function Cl(e, t, s, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && j(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Hi(t) && st(s) ? !1 : t in e;
}
const Bi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xl(e, t, s) {
  const i = /* @__PURE__ */ hs(e, t);
  as(i) && it(i, t);
  class n extends ci {
    constructor(o) {
      super(i, o, s);
    }
  }
  return n.def = i, n;
}
const wl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class ci extends wl {
  constructor(t, s = {}, i = zi) {
    super(), this._def = t, this._props = s, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && i !== zi ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof ci) {
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
    this._connected = !1, ei(() => {
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
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = mi(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Et(a)] = !0);
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
        U(this, i) || Object.defineProperty(this, i, {
          // unwrap ref to be consistent with public instance behavior
          get: () => bn(s[i])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, i = W(s) ? s : Object.keys(s || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n]);
    for (const n of i.map(Et))
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
    let i = s ? this.getAttribute(t) : Bi;
    const n = Et(t);
    s && this._numberProps && this._numberProps[n] && (i = mi(i)), this._setProp(n, i, !1, !0);
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
    if (s !== this._props[t] && (s === Bi ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), n && this._instance && this._update(), i)) {
      const r = this._ob;
      r && r.disconnect(), s === !0 ? this.setAttribute(Ct(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(Ct(t), s + "") : s || this.removeAttribute(Ct(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), El(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = St(this._def, it(t, this._props));
    return this._instance || (s.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const n = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            as(o[0]) ? it({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      i.emit = (r, ...o) => {
        n(r, o), Ct(r) !== r && n(Ct(r), o);
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
const Sl = /* @__PURE__ */ it({ patchProp: yl }, nl);
let Vi;
function Qn() {
  return Vi || (Vi = Mo(Sl));
}
const El = (...e) => {
  Qn().render(...e);
}, zi = (...e) => {
  const t = Qn().createApp(...e), { mount: s } = t;
  return t.mount = (i) => {
    const n = Tl(i);
    if (!n) return;
    const r = t._component;
    !j(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Ll(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, t;
};
function Ll(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tl(e) {
  return st(e) ? document.querySelector(e) : e;
}
function lt(e, t, s, i) {
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
let je = class {
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
const Ke = { decode: function(e, t) {
  return lt(this, void 0, void 0, function* () {
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
function Ui(e, t, s) {
  const i = tr(e, t || {});
  return s == null || s.appendChild(i), i;
}
var Ml = Object.freeze({ __proto__: null, createElement: Ui, default: Ui });
const Rl = { fetchBlob: function(e, t, s) {
  return lt(this, void 0, void 0, function* () {
    const i = yield fetch(e, s);
    if (i.status >= 400) throw new Error(`Failed to fetch ${e}: ${i.status} (${i.statusText})`);
    return function(n, r) {
      lt(this, void 0, void 0, function* () {
        if (!n.body || !n.headers) return;
        const o = n.body.getReader(), l = Number(n.headers.get("Content-Length")) || 0;
        let a = 0;
        const d = (h) => lt(this, void 0, void 0, function* () {
          a += (h == null ? void 0 : h.length) || 0;
          const p = Math.round(a / l * 100);
          r(p);
        }), c = () => lt(this, void 0, void 0, function* () {
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
class Pl extends je {
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
    return lt(this, void 0, void 0, function* () {
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
class me extends je {
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
        let p = h.clientX, m = h.clientY, S = !1;
        const I = Date.now(), A = (O) => {
          if (O.preventDefault(), O.stopPropagation(), a && Date.now() - I < l) return;
          const q = O.clientX, G = O.clientY, Q = q - p, nt = G - m;
          if (S || Math.abs(Q) > r || Math.abs(nt) > r) {
            const et = t.getBoundingClientRect(), { left: ht, top: Wt } = et;
            S || (i == null || i(p - ht, m - Wt), S = !0), s(Q, nt, q - ht, G - Wt), p = q, m = G;
          }
        }, R = (O) => {
          if (S) {
            const q = O.clientX, G = O.clientY, Q = t.getBoundingClientRect(), { left: nt, top: et } = Q;
            n == null || n(q - nt, G - et);
          }
          d();
        }, T = (O) => {
          O.relatedTarget && O.relatedTarget !== document.documentElement || R(O);
        }, $ = (O) => {
          S && (O.stopPropagation(), O.preventDefault());
        }, C = (O) => {
          S && O.preventDefault();
        };
        document.addEventListener("pointermove", A), document.addEventListener("pointerup", R), document.addEventListener("pointerout", T), document.addEventListener("pointercancel", T), document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("click", $, { capture: !0 }), d = () => {
          document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", R), document.removeEventListener("pointerout", T), document.removeEventListener("pointercancel", T), document.removeEventListener("touchmove", C), setTimeout(() => {
            document.removeEventListener("click", $, { capture: !0 });
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
    const r = t[0], o = t[1] || t[0], l = r.length, { width: a, height: d } = i.canvas, c = d / 2, h = this.getPixelRatio(), p = s.barWidth ? s.barWidth * h : 1, m = s.barGap ? s.barGap * h : s.barWidth ? p / 2 : 0, S = s.barRadius || 0, I = a / (p + m) / l, A = S && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let R = 0, T = 0, $ = 0;
    for (let C = 0; C <= l; C++) {
      const O = Math.round(C * I);
      if (O > R) {
        const Q = Math.round(T * c * n), nt = Q + Math.round($ * c * n) || 1;
        let et = c - Q;
        s.barAlign === "top" ? et = 0 : s.barAlign === "bottom" && (et = d - nt), i[A](R * (p + m), et, p, nt, S), R = O, T = 0, $ = 0;
      }
      const q = Math.abs(r[C] || 0), G = Math.abs(o[C] || 0);
      q > T && (T = q), G > $ && ($ = G);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(t, s, i, n) {
    const r = (o) => {
      const l = t[o] || t[0], a = l.length, { height: d } = i.canvas, c = d / 2, h = i.canvas.width / a;
      i.moveTo(0, c);
      let p = 0, m = 0;
      for (let S = 0; S <= a; S++) {
        const I = Math.round(S * h);
        if (I > p) {
          const R = c + (Math.round(m * c * n) || 1) * (o === 0 ? -1 : 1);
          i.lineTo(p, R), p = I, m = 0;
        }
        const A = Math.abs(l[S] || 0);
        A > m && (m = A);
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
      const A = s.barWidth || 0.5, R = A + (s.barGap || A / 2);
      c % R != 0 && (c = Math.floor(c / R) * R);
    }
    if (c === 0) return;
    const p = (A) => {
      if (A < 0 || A >= m || h[A]) return;
      h[A] = !0;
      const R = A * c;
      let T = Math.min(d - R, c);
      if (s.barWidth || s.barGap) {
        const C = s.barWidth || 0.5, O = C + (s.barGap || C / 2);
        T = Math.floor(T / O) * O;
      }
      if (T <= 0) return;
      const $ = t.map((C) => {
        const O = Math.floor(R / d * C.length), q = Math.floor((R + T) / d * C.length);
        return C.slice(O, q);
      });
      this.renderSingleCanvas($, s, T, n, R, r, o);
    }, m = Math.ceil(d / c);
    if (!this.isScrollable) {
      for (let A = 0; A < m; A++) p(A);
      return;
    }
    const S = this.scrollContainer.scrollLeft / d, I = Math.floor(S * m);
    if (p(I - 1), p(I), p(I + 1), m > 1) {
      const A = this.on("scroll", () => {
        const { scrollLeft: R } = this.scrollContainer, T = Math.floor(R / d * m);
        Object.keys(h).length > me.MAX_NODES && (r.innerHTML = "", o.innerHTML = "", h = {}), p(T - 1), p(T), p(T + 1);
      });
      this.unsubscribeOnScroll.push(A);
    }
  }
  renderChannel(t, s, i, n) {
    var { overlay: r } = s, o = function(c, h) {
      var p = {};
      for (var m in c) Object.prototype.hasOwnProperty.call(c, m) && h.indexOf(m) < 0 && (p[m] = c[m]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function") {
        var S = 0;
        for (m = Object.getOwnPropertySymbols(c); S < m.length; S++) h.indexOf(m[S]) < 0 && Object.prototype.propertyIsEnumerable.call(c, m[S]) && (p[m[S]] = c[m[S]]);
      }
      return p;
    }(s, ["overlay"]);
    const l = document.createElement("div"), a = this.getHeight(o.height, o.splitChannels);
    l.style.height = `${a}px`, r && n > 0 && (l.style.marginTop = `-${a}px`), this.canvasWrapper.style.minHeight = `${a}px`, this.canvasWrapper.appendChild(l);
    const d = l.cloneNode();
    this.progressWrapper.appendChild(d), this.renderMultiCanvas(t, o, i, a, l, d);
  }
  render(t) {
    return lt(this, void 0, void 0, function* () {
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
    return lt(this, void 0, void 0, function* () {
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
class Al extends je {
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
class Ps extends je {
  constructor(t = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return lt(this, void 0, void 0, function* () {
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
    return lt(this, void 0, void 0, function* () {
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
    return lt(this, void 0, void 0, function* () {
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
const Ol = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class Ne extends Pl {
  static create(t) {
    return new Ne(t);
  }
  constructor(t) {
    const s = t.media || (t.backend === "WebAudio" ? new Ps() : void 0);
    super({ media: s, mediaControls: t.mediaControls, autoplay: t.autoplay, playbackRate: t.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, Ol, t), this.timer = new Al();
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
    this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = Ke.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = Ke.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), t.mediaControls != null && (this.getMediaElement().controls = t.mediaControls);
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
    return lt(this, void 0, void 0, function* () {
      var r;
      if (this.emit("load", t), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (r = this.abortController) === null || r === void 0 ? void 0 : r.signal);
        const a = (c) => this.emit("loading", c);
        s = yield Rl.fetchBlob(t, a, l);
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
        l instanceof Ps && (l.duration = o);
      }
      if (i) this.decodedData = Ke.createBuffer(i, o || 0);
      else if (s) {
        const l = yield s.arrayBuffer();
        this.decodedData = yield Ke.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(t, s, i) {
    return lt(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(t, void 0, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  loadBlob(t, s, i) {
    return lt(this, void 0, void 0, function* () {
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
        for (let m = 0; m < h.length; m++) {
          const S = h[m];
          Math.abs(S) > Math.abs(p) && (p = S);
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
    return lt(this, void 0, void 0, function* () {
      t != null && this.setTime(t);
      const n = yield i.play.call(this);
      return s != null && (this.media instanceof Ps ? this.media.stopAt(s) : this.stopAtPosition = s), n;
    });
  }
  playPause() {
    return lt(this, void 0, void 0, function* () {
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
    return lt(this, arguments, void 0, function* (t = "image/png", s = 1, i = "dataURL") {
      return this.renderer.exportImage(t, s, i);
    });
  }
  destroy() {
    var t;
    this.emit("destroy"), (t = this.abortController) === null || t === void 0 || t.abort(), this.plugins.forEach((s) => s.destroy()), this.subscriptions.forEach((s) => s()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
Ne.BasePlugin = class extends je {
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
}, Ne.dom = Ml;
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
function Ye(e, t, s, i, n = 3, r = 0, o = 100) {
  if (!e) return () => {
  };
  const l = matchMedia("(pointer: coarse)").matches;
  let a = () => {
  };
  const d = (c) => {
    if (c.button !== r) return;
    c.preventDefault(), c.stopPropagation();
    let h = c.clientX, p = c.clientY, m = !1;
    const S = Date.now(), I = (C) => {
      if (C.preventDefault(), C.stopPropagation(), l && Date.now() - S < o) return;
      const O = C.clientX, q = C.clientY, G = O - h, Q = q - p;
      if (m || Math.abs(G) > n || Math.abs(Q) > n) {
        const nt = e.getBoundingClientRect(), { left: et, top: ht } = nt;
        m || (s == null || s(h - et, p - ht), m = !0), t(G, Q, O - et, q - ht), h = O, p = q;
      }
    }, A = (C) => {
      if (m) {
        const O = C.clientX, q = C.clientY, G = e.getBoundingClientRect(), { left: Q, top: nt } = G;
        i == null || i(O - Q, q - nt);
      }
      a();
    }, R = (C) => {
      C.relatedTarget && C.relatedTarget !== document.documentElement || A(C);
    }, T = (C) => {
      m && (C.stopPropagation(), C.preventDefault());
    }, $ = (C) => {
      m && C.preventDefault();
    };
    document.addEventListener("pointermove", I), document.addEventListener("pointerup", A), document.addEventListener("pointerout", R), document.addEventListener("pointercancel", R), document.addEventListener("touchmove", $, { passive: !1 }), document.addEventListener("click", T, { capture: !0 }), a = () => {
      document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", A), document.removeEventListener("pointerout", R), document.removeEventListener("pointercancel", R), document.removeEventListener("touchmove", $), setTimeout(() => {
        document.removeEventListener("click", T, { capture: !0 });
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
function Se(e, t, s) {
  const i = sr(e, t || {});
  return s == null || s.appendChild(i), i;
}
class Zi extends er {
  constructor(t, s, i = 0) {
    var n, r, o, l, a, d, c, h, p, m;
    super(), this.totalDuration = s, this.numberOfChannels = i, this.element = null, this.minLength = 0, this.maxLength = 1 / 0, this.contentEditable = !1, this.subscriptions = [], this.isRemoved = !1, this.subscriptions = [], this.id = t.id || `region-${Math.random().toString(32).slice(2)}`, this.start = this.clampPosition(t.start), this.end = this.clampPosition((n = t.end) !== null && n !== void 0 ? n : t.start), this.drag = (r = t.drag) === null || r === void 0 || r, this.resize = (o = t.resize) === null || o === void 0 || o, this.resizeStart = (l = t.resizeStart) === null || l === void 0 || l, this.resizeEnd = (a = t.resizeEnd) === null || a === void 0 || a, this.color = (d = t.color) !== null && d !== void 0 ? d : "rgba(0, 0, 0, 0.1)", this.minLength = (c = t.minLength) !== null && c !== void 0 ? c : this.minLength, this.maxLength = (h = t.maxLength) !== null && h !== void 0 ? h : this.maxLength, this.channelIdx = (p = t.channelIdx) !== null && p !== void 0 ? p : -1, this.contentEditable = (m = t.contentEditable) !== null && m !== void 0 ? m : this.contentEditable, this.element = this.initElement(), this.setContent(t.content), this.setPart(), this.renderPosition(), this.initMouseEvents();
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
    const s = { position: "absolute", zIndex: "2", width: "6px", height: "100%", top: "0", cursor: "ew-resize", wordBreak: "keep-all" }, i = Se("div", { part: "region-handle region-handle-left", style: Object.assign(Object.assign({}, s), { left: "0", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "2px 0 0 2px" }) }, t), n = Se("div", { part: "region-handle region-handle-right", style: Object.assign(Object.assign({}, s), { right: "0", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderRadius: "0 2px 2px 0" }) }, t);
    this.subscriptions.push(Ye(i, (r) => this.onResize(r, "start"), () => null, () => this.onEndResizing(), 1), Ye(n, (r) => this.onResize(r, "end"), () => null, () => this.onEndResizing(), 1));
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
    const n = Se("div", { style: { position: "absolute", top: `${s}%`, height: `${i}%`, backgroundColor: t ? "none" : this.color, borderLeft: t ? "2px solid " + this.color : "none", borderRadius: "2px", boxSizing: "border-box", transition: "background-color 0.2s ease", cursor: this.drag ? "grab" : "default", pointerEvents: "all" } });
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
    t && (t.addEventListener("click", (s) => this.emit("click", s)), t.addEventListener("mouseenter", (s) => this.emit("over", s)), t.addEventListener("mouseleave", (s) => this.emit("leave", s)), t.addEventListener("dblclick", (s) => this.emit("dblclick", s)), t.addEventListener("pointerdown", () => this.toggleCursor(!0)), t.addEventListener("pointerup", () => this.toggleCursor(!1)), this.subscriptions.push(Ye(t, (s) => this.onMove(s), () => this.toggleCursor(!0), () => {
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
        this.content = Se("div", { style: { padding: `0.2em ${i ? 0.2 : 0.4}em`, display: "inline-block" }, textContent: t });
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
class ui extends Dl {
  constructor(t) {
    super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(t) {
    return new ui(t);
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
    return Se("div", { style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "5", pointerEvents: "none" } });
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
    const n = this.wavesurfer.getDuration(), r = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getDecodedData()) === null || i === void 0 ? void 0 : i.numberOfChannels, o = new Zi(t, n, r);
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
    return Ye(n, (l, a, d) => {
      r && r._onUpdate(l, d > o ? "end" : "start");
    }, (l) => {
      var a, d;
      if (o = l, !this.wavesurfer) return;
      const c = this.wavesurfer.getDuration(), h = (d = (a = this.wavesurfer) === null || a === void 0 ? void 0 : a.getDecodedData()) === null || d === void 0 ? void 0 : d.numberOfChannels, { width: p } = this.wavesurfer.getWrapper().getBoundingClientRect(), m = l / p * c, S = (l + 5) / p * c;
      r = new Zi(Object.assign(Object.assign({}, t), { start: m, end: S }), c, h), this.emit("region-initialized", r), r.element && this.regionsContainer.appendChild(r.element);
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
const kl = { class: "waveform-player card" }, Il = { class: "card-header" }, $l = { class: "waveform-wrapper flex-1" }, Nl = {
  key: 0,
  class: "overlay"
}, Wl = {
  key: 0,
  class: "controls"
}, Fl = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, jl = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Hl = { class: "time-display" }, Bl = { class: "current-time" }, Vl = { class: "duration" }, zl = /* @__PURE__ */ hs({
  __name: "WaveformPlayer",
  props: {
    audioFile: { type: null },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["timeUpdate", "ready", "regionsSelected"],
  setup(e, { expose: t, emit: s }) {
    const i = e, n = s, r = rt(), o = rt(null), l = rt(!1), a = rt(0), d = rt(0), c = rt(!1), h = rt(!1), p = rt(!1), m = rt(), S = rt(!1), I = Xn(() => i.isLoading || h.value);
    let A = ui.create();
    const R = () => "rgba(140, 193, 236, 0.3)";
    function T() {
      const M = A.getRegions().map((P) => {
        var H;
        return {
          start: P.start,
          end: P.end,
          color: P.color || ((H = P.options) == null ? void 0 : H.color) || R()
        };
      });
      n("regionsSelected", M);
    }
    he(() => i.audioFile, async (M) => {
      if (M && (!o.value && r.value && await $(), o.value))
        try {
          const P = URL.createObjectURL(M);
          h.value = !0, await o.value.load(P);
        } catch (P) {
          console.error("Error loading audio file:", P);
        }
    }), he(m, (M) => {
      M && (M.addEventListener("dragover", (P) => {
        P.preventDefault(), p.value = !0;
      }), M.addEventListener("dragleave", () => {
        p.value = !1;
      }), M.addEventListener("drop", (P) => {
        var V;
        P.preventDefault();
        const H = (V = P.dataTransfer) == null ? void 0 : V.getData("text/plain");
        if (H) {
          const z = A.getRegions().find((yt) => yt.id === H);
          z && (z.remove(), T());
        }
        p.value = !1;
      }));
    });
    const $ = async () => {
      if (r.value)
        try {
          o.value = Ne.create({
            container: r.value,
            waveColor: "#424242",
            progressColor: "#D4D4D4",
            cursorColor: "#1580d8",
            barWidth: 2,
            cursorWidth: 2,
            barRadius: 3,
            height: 200,
            normalize: !0,
            backend: "WebAudio",
            dragToSeek: !1,
            interact: !1,
            plugins: [A]
          }), A.enableDragSelection({ color: R() }, 0), A.on("region-created", (M) => {
            M.setOptions({ color: R() }), ht(M), re(M), A.getRegions().forEach((H) => {
              H !== M && H.remove();
            }), T();
          }), A.on("region-updated", T), A.on("region-removed", T), A.on("region-clicked", (M, P) => {
            P.stopPropagation(), o.value && (o.value.setTime(M.start), a.value = M.start, n("timeUpdate", M.start));
          }), o.value.on("ready", () => {
            var M;
            c.value = !0, d.value = ((M = o.value) == null ? void 0 : M.getDuration()) || 0, h.value = !1, n("ready");
          }), o.value.on("play", () => {
            l.value = !0;
          }), o.value.on("pause", () => {
            l.value = !1;
          }), o.value.on("finish", () => {
            l.value = !1, a.value = 0;
          }), o.value.on("timeupdate", (M) => {
            a.value = M, n("timeUpdate", M);
          }), o.value.on("seeking", (M) => {
            a.value = M, n("timeUpdate", M);
          });
        } catch (M) {
          console.error("Error initializing WaveSurfer:", M);
        }
    }, C = () => {
      !o.value || !c.value || (l.value ? o.value.pause() : o.value.play());
    }, O = () => {
      o.value && (o.value.stop(), a.value = 0);
    }, q = (M) => {
      if (!o.value || !c.value) return;
      const P = M / d.value;
      o.value.seekTo(P);
    }, G = (M) => {
      const P = Math.floor(M / 60), H = Math.floor(M % 60);
      return `${P.toString().padStart(2, "0")}:${H.toString().padStart(2, "0")}`;
    }, Q = () => {
      S.value = !S.value, S.value ? nt() : et();
    };
    function nt() {
      A.getRegions().forEach((M) => ht(M));
    }
    function et() {
      A.getRegions().forEach((M) => Wt(M));
    }
    function ht(M) {
      var yt;
      if (M.__delAttached) return;
      const P = M.element;
      if (!P) return;
      M._origColor = M.color || ((yt = M.options) == null ? void 0 : yt.color);
      const H = () => {
        S.value && M.setOptions({ color: "rgba(255,0,0,0.4)" });
      }, V = () => {
        S.value && M.setOptions({ color: M._origColor });
      }, z = () => {
        S.value && (M.remove(), T(), S.value = !1, et());
      };
      P.addEventListener("mouseenter", H), P.addEventListener("mouseleave", V), P.addEventListener("click", z), M.__delAttached = { enter: H, leave: V, click: z };
    }
    function Wt(M) {
      const P = M.__delAttached;
      if (!P || !M.element) return;
      const H = M.element;
      H.removeEventListener("mouseenter", P.enter), H.removeEventListener("mouseleave", P.leave), H.removeEventListener("click", P.click), M.setOptions({ color: M._origColor }), delete M.__delAttached;
    }
    function re(M) {
      if (!(M != null && M.element)) return;
      const P = M.element;
      P.setAttribute("draggable", "true"), P.addEventListener("dragstart", (H) => {
        var V;
        (V = H.dataTransfer) == null || V.setData("text/plain", M.id), document.body.classList.add("dragging-region");
      }), P.addEventListener("dragend", () => {
        document.body.classList.remove("dragging-region"), p.value = !1;
      });
    }
    return ni(async () => {
      await ei(), await $();
    }), ri(() => {
      o.value && o.value.destroy();
    }), t({
      seekTo: q,
      togglePlayPause: C,
      stop: O
    }), (M, P) => (It(), Vt("div", kl, [
      N("div", Il, [
        P[1] || (P[1] = N("svg", {
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          N("path", {
            d: "M15.1464 4.64645C15.3417 4.45118 15.6582 4.45118 15.8535 4.64645C16.0487 4.84171 16.0487 5.15822 15.8535 5.35348L9.85348 11.3535C9.65822 11.5487 9.34171 11.5487 9.14645 11.3535L5.49996 7.70699L0.853478 12.3535C0.658216 12.5487 0.341709 12.5487 0.146447 12.3535C-0.0488155 12.1582 -0.0488155 11.8417 0.146447 11.6464L5.14645 6.64645L5.22457 6.58199C5.41865 6.45383 5.68261 6.47558 5.85348 6.64645L9.49996 10.2929L15.1464 4.64645Z",
            fill: "#AFAFAF"
          })
        ], -1)),
        P[2] || (P[2] = N("span", { class: "title" }, "Audio Waveform", -1)),
        P[3] || (P[3] = N("div", { class: "flex-1" }, null, -1)),
        N("button", {
          class: pe(["btn btn-icon", { shake: S.value, "btn-danger": S.value }]),
          onClick: Q,
          title: "Delete mode",
          style: { display: "none" }
        }, P[0] || (P[0] = [
          N("i", { class: "mdi mdi-delete" }, null, -1)
        ]), 2)
      ]),
      N("div", $l, [
        I.value ? (It(), Vt("div", Nl, P[4] || (P[4] = [
          N("div", { class: "spinner" }, [
            N("svg", {
              width: "27",
              height: "27",
              viewBox: "0 0 27 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              N("g", { "clip-path": "url(#clip0_3446_31)" }, [
                N("g", {
                  "clip-path": "url(#paint0_angular_3446_31_clip_path)",
                  "data-figma-skip-parse": "true"
                }, [
                  N("g", { transform: "matrix(-0.0024 -0.0144 0.0144 -0.0024 13.4707 13.4687)" }, [
                    N("foreignObject", {
                      x: "-1182.43",
                      y: "-1182.43",
                      width: "2364.86",
                      height: "2364.86"
                    }, [
                      N("div", {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: { background: "conic-gradient(from 90deg,rgba(255, 255, 255, 0.0018) 0deg,rgba(255, 255, 255, 1) 260.571deg,rgba(255, 255, 255, 0) 359.525deg,rgba(255, 255, 255, 0.0018) 360deg)", height: "100%", width: "100%", opacity: "1" }
                      })
                    ])
                  ])
                ]),
                N("path", {
                  d: "M13.4707 -0.0312521C12.6423 -0.031252 11.9707 0.640321 11.9707 1.46875C11.9707 2.29718 12.6423 2.96875 13.4707 2.96875L13.4707 -0.0312521ZM23.863 7.46875L22.564 8.21875L23.863 7.46875ZM25.4707 13.4687L23.9707 13.4687L25.4707 13.4687ZM23.863 19.4687L22.564 18.7187L23.863 19.4687ZM19.4707 23.8611L20.2207 25.1601L19.4707 23.8611ZM13.4707 25.4687L13.4707 26.9687L13.4707 25.4687ZM7.47071 23.8611L6.72071 25.1601L7.47071 23.8611ZM4.37744 18.7187C3.96323 18.0013 3.04584 17.7555 2.3284 18.1697C1.61096 18.5839 1.36515 19.5013 1.77936 20.2187L4.37744 18.7187ZM13.4707 1.46875L13.4707 2.96875C15.3138 2.96875 17.1245 3.45391 18.7207 4.37548L19.4707 3.07644L20.2207 1.7774C18.1684 0.592532 15.8404 -0.0312525 13.4707 -0.0312521L13.4707 1.46875ZM19.4707 3.07644L18.7207 4.37548C20.3169 5.29705 21.6424 6.62254 22.564 8.21875L23.863 7.46875L25.162 6.71875C23.9772 4.66649 22.273 2.96228 20.2207 1.7774L19.4707 3.07644ZM23.863 7.46875L22.564 8.21875C23.4855 9.81495 23.9707 11.6256 23.9707 13.4687L25.4707 13.4687L26.9707 13.4687C26.9707 11.099 26.3469 8.771 25.162 6.71875L23.863 7.46875ZM25.4707 13.4687L23.9707 13.4687C23.9707 15.3119 23.4855 17.1225 22.564 18.7187L23.863 19.4687L25.162 20.2187C26.3469 18.1665 26.9707 15.8385 26.9707 13.4687L25.4707 13.4687ZM23.863 19.4687L22.564 18.7187C21.6424 20.3149 20.3169 21.6404 18.7207 22.562L19.4707 23.8611L20.2207 25.1601C22.273 23.9752 23.9772 22.271 25.162 20.2187L23.863 19.4687ZM19.4707 23.8611L18.7207 22.562C17.1245 23.4836 15.3138 23.9687 13.4707 23.9687L13.4707 25.4687L13.4707 26.9687C15.8405 26.9687 18.1684 26.345 20.2207 25.1601L19.4707 23.8611ZM13.4707 25.4687L13.4707 23.9687C11.6276 23.9687 9.81691 23.4836 8.22071 22.562L7.47071 23.8611L6.72071 25.1601C8.77296 26.345 11.101 26.9687 13.4707 26.9687L13.4707 25.4687ZM7.47071 23.8611L8.22071 22.562C6.6245 21.6404 5.29901 20.3149 4.37744 18.7187L3.0784 19.4687L1.77936 20.2187C2.96423 22.271 4.66845 23.9752 6.72071 25.1601L7.47071 23.8611Z",
                  "data-figma-gradient-fill": '{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":1.0,"g":1.0,"b":1.0,"a":1.0},"position":0.72380936145782471},{"color":{"r":1.0,"g":1.0,"b":1.0,"a":0.0},"position":0.99868124723434448}],"stopsVar":[],"transform":{"m00":-4.8000044822692871,"m01":28.799997329711914,"m02":1.4707082509994507,"m10":-28.799997329711914,"m11":-4.8000044822692871,"m12":30.268749237060547},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
                })
              ]),
              N("defs", null, [
                N("clipPath", { id: "paint0_angular_3446_31_clip_path" }, [
                  N("path", { d: "M13.4707 -0.0312521C12.6423 -0.031252 11.9707 0.640321 11.9707 1.46875C11.9707 2.29718 12.6423 2.96875 13.4707 2.96875L13.4707 -0.0312521ZM23.863 7.46875L22.564 8.21875L23.863 7.46875ZM25.4707 13.4687L23.9707 13.4687L25.4707 13.4687ZM23.863 19.4687L22.564 18.7187L23.863 19.4687ZM19.4707 23.8611L20.2207 25.1601L19.4707 23.8611ZM13.4707 25.4687L13.4707 26.9687L13.4707 25.4687ZM7.47071 23.8611L6.72071 25.1601L7.47071 23.8611ZM4.37744 18.7187C3.96323 18.0013 3.04584 17.7555 2.3284 18.1697C1.61096 18.5839 1.36515 19.5013 1.77936 20.2187L4.37744 18.7187ZM13.4707 1.46875L13.4707 2.96875C15.3138 2.96875 17.1245 3.45391 18.7207 4.37548L19.4707 3.07644L20.2207 1.7774C18.1684 0.592532 15.8404 -0.0312525 13.4707 -0.0312521L13.4707 1.46875ZM19.4707 3.07644L18.7207 4.37548C20.3169 5.29705 21.6424 6.62254 22.564 8.21875L23.863 7.46875L25.162 6.71875C23.9772 4.66649 22.273 2.96228 20.2207 1.7774L19.4707 3.07644ZM23.863 7.46875L22.564 8.21875C23.4855 9.81495 23.9707 11.6256 23.9707 13.4687L25.4707 13.4687L26.9707 13.4687C26.9707 11.099 26.3469 8.771 25.162 6.71875L23.863 7.46875ZM25.4707 13.4687L23.9707 13.4687C23.9707 15.3119 23.4855 17.1225 22.564 18.7187L23.863 19.4687L25.162 20.2187C26.3469 18.1665 26.9707 15.8385 26.9707 13.4687L25.4707 13.4687ZM23.863 19.4687L22.564 18.7187C21.6424 20.3149 20.3169 21.6404 18.7207 22.562L19.4707 23.8611L20.2207 25.1601C22.273 23.9752 23.9772 22.271 25.162 20.2187L23.863 19.4687ZM19.4707 23.8611L18.7207 22.562C17.1245 23.4836 15.3138 23.9687 13.4707 23.9687L13.4707 25.4687L13.4707 26.9687C15.8405 26.9687 18.1684 26.345 20.2207 25.1601L19.4707 23.8611ZM13.4707 25.4687L13.4707 23.9687C11.6276 23.9687 9.81691 23.4836 8.22071 22.562L7.47071 23.8611L6.72071 25.1601C8.77296 26.345 11.101 26.9687 13.4707 26.9687L13.4707 25.4687ZM7.47071 23.8611L8.22071 22.562C6.6245 21.6404 5.29901 20.3149 4.37744 18.7187L3.0784 19.4687L1.77936 20.2187C2.96423 22.271 4.66845 23.9752 6.72071 25.1601L7.47071 23.8611Z" })
                ]),
                N("clipPath", { id: "clip0_3446_31" }, [
                  N("rect", {
                    width: "27",
                    height: "27",
                    fill: "white"
                  })
                ])
              ])
            ])
          ], -1)
        ]))) : Ze("", !0),
        Xr(N("div", {
          ref_key: "waveformContainer",
          ref: r,
          class: "waveform-container"
        }, null, 512), [
          [ll, M.audioFile]
        ])
      ]),
      M.audioFile ? (It(), Vt("div", Wl, [
        N("button", {
          class: pe(["btn", { "btn-danger": l.value }]),
          onClick: C,
          title: "Play / Pause"
        }, [
          l.value ? Ze("", !0) : (It(), Vt("svg", Fl, P[5] || (P[5] = [
            N("path", {
              d: "M4.37402 2.45908C4.81749 2.26744 5.34848 2.30934 5.74512 2.5665L12.7285 7.09287C13.0581 7.30656 13.2519 7.642 13.252 7.99814C13.252 8.35434 13.0581 8.68969 12.7285 8.90342L5.74512 13.4308C5.34846 13.6879 4.81749 13.7289 4.37402 13.5372C3.93053 13.3455 3.65039 12.9532 3.65039 12.5245V3.47178C3.65039 3.04313 3.93053 2.65078 4.37402 2.45908ZM5.20117 3.40537C5.09252 3.33492 4.91509 3.31456 4.77051 3.37705C4.70564 3.40512 4.67266 3.43924 4.65918 3.4581C4.64672 3.47553 4.65034 3.47976 4.65039 3.47178V12.5245C4.65026 12.517 4.64704 12.5211 4.65918 12.5382C4.67266 12.557 4.70571 12.5912 4.77051 12.6192C4.91509 12.6817 5.09252 12.6614 5.20117 12.5909L12.1846 8.06455L12.2295 8.02842C12.2395 8.01797 12.2458 8.00954 12.249 8.004C12.2504 8.0016 12.2513 7.99958 12.252 7.99814C12.252 8.00414 12.2547 8.00316 12.249 7.99326C12.2426 7.98209 12.2243 7.95748 12.1846 7.93174L5.20117 3.40537Z",
              fill: "white"
            }, null, -1)
          ]))),
          l.value ? (It(), Vt("svg", jl, P[6] || (P[6] = [
            N("path", {
              d: "M4.5 2C5.60457 2 6.5 2.89543 6.5 4V12L6.48926 12.2041C6.387 13.2128 5.53565 14 4.5 14C3.46435 14 2.613 13.2128 2.51074 12.2041L2.5 12V4C2.5 2.89543 3.39543 2 4.5 2ZM11.5 2C12.6046 2 13.5 2.89543 13.5 4V12L13.4893 12.2041C13.387 13.2128 12.5357 14 11.5 14C10.4643 14 9.613 13.2128 9.51074 12.2041L9.5 12V4C9.5 2.89543 10.3954 2 11.5 2ZM4.5 3C3.98232 3 3.55621 3.39333 3.50488 3.89746L3.5 4V12C3.5 12.5523 3.94772 13 4.5 13C5.05228 13 5.5 12.5523 5.5 12V4C5.5 3.44772 5.05228 3 4.5 3ZM11.5 3C10.9823 3 10.5562 3.39333 10.5049 3.89746L10.5 4V12C10.5 12.5523 10.9477 13 11.5 13C12.0523 13 12.5 12.5523 12.5 12V4C12.5 3.44772 12.0523 3 11.5 3Z",
              fill: "white"
            }, null, -1)
          ]))) : Ze("", !0),
          is(" " + ie(l.value ? "Pause" : "Play"), 1)
        ], 2),
        N("button", {
          class: "btn btn-gray",
          onClick: O,
          title: "Stop"
        }, P[7] || (P[7] = [
          N("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            N("path", {
              d: "M11.7236 1.77734C13.1043 1.77734 14.2236 2.89663 14.2236 4.27734V11.7246C14.2236 13.1053 13.1043 14.2246 11.7236 14.2246H4.27637C2.89566 14.2246 1.77637 13.1053 1.77637 11.7246V4.27734C1.77637 2.89663 2.89566 1.77734 4.27637 1.77734H11.7236ZM4.27637 2.77734C3.44794 2.77734 2.77637 3.44892 2.77637 4.27734V11.7246C2.77637 12.553 3.44794 13.2246 4.27637 13.2246H11.7236C12.5521 13.2246 13.2236 12.553 13.2236 11.7246V4.27734C13.2236 3.44892 12.5521 2.77734 11.7236 2.77734H4.27637Z",
              fill: "white"
            })
          ], -1),
          is(" Stop ")
        ])),
        P[9] || (P[9] = N("div", { class: "flex-1" }, null, -1)),
        N("div", Hl, [
          N("span", Bl, ie(G(a.value)), 1),
          P[8] || (P[8] = N("span", { class: "separator" }, "/", -1)),
          N("span", Vl, ie(G(d.value)), 1)
        ])
      ])) : Ze("", !0)
    ]));
  }
}), Ul = ".waveform-wrapper[data-v-2122fd03]{flex:1;display:flex;align-items:center;justify-content:center}.card-header[data-v-2122fd03]{display:flex;align-items:center;gap:6px;color:#d4d4d4;font-weight:500;padding:12px 14px}.waveform-container[data-v-2122fd03]{width:100%;border-radius:8px;padding:12px 14px}.controls[data-v-2122fd03]{display:flex;align-items:center;padding:12px 14px;border-top:1px solid #343434;background:#2b2b2b}.controls .btn+.btn[data-v-2122fd03]{margin-left:6px}.time-display[data-v-2122fd03]{font-family:Inter,sans-serif;font-size:14px;color:#afafaf}.time-display .separator[data-v-2122fd03]{margin:0 6px;color:gray}.time-display .current-time[data-v-2122fd03]{font-weight:500}@keyframes shake-2122fd03{0%{transform:rotate(0)}25%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}to{transform:rotate(0)}}.shake[data-v-2122fd03]{animation:shake-2122fd03 .6s infinite}", di = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, n] of t)
    s[i] = n;
  return s;
}, Zl = /* @__PURE__ */ di(zl, [["styles", [Ul]], ["__scopeId", "data-v-2122fd03"]]);
function Kl(e) {
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
      const c = Ki(a), h = Ki(d), p = n.slice(2).join(`
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
function Ki(e) {
  const t = e.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!t)
    throw new Error(`Invalid SRT timestamp format: ${e}`);
  const s = parseInt(t[1], 10), i = parseInt(t[2], 10), n = parseInt(t[3], 10), r = parseInt(t[4], 10);
  if (s < 0 || i < 0 || i >= 60 || n < 0 || n >= 60 || r < 0 || r >= 1e3)
    throw new Error(`Invalid time values in SRT timestamp: ${e}`);
  return s * 3600 + i * 60 + n + r / 1e3;
}
function qi(e) {
  const t = Math.floor(e), s = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), n = t % 60;
  return s > 0 ? `${s.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}` : `${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
const ql = { class: "subtitle-panel card" }, Gl = { class: "subtitle-wrapper flex-1" }, Xl = { class: "subtitle-content" }, Yl = ["onClick", "onMouseenter"], Jl = { class: "entry-bottom" }, Ql = { class: "duration" }, ta = { class: "timestamp" }, ea = /* @__PURE__ */ hs({
  __name: "SubtitlePanel",
  props: {
    subtitleEntries: { type: Array },
    currentTime: { type: Number },
    isLoading: { type: Boolean },
    selectedRanges: { type: Array }
  },
  emits: ["seekTo"],
  setup(e, { emit: t }) {
    const s = e, i = t, n = rt(null), r = (h) => s.currentTime >= h.startTime && s.currentTime < h.endTime, o = (h, p) => `${qi(h)} -> ${qi(p)}`, l = (h) => `${Math.round(h * 10) / 10}s`, a = (h) => {
      n.value = h;
    }, d = () => {
      n.value = null;
    }, c = (h) => (s.selectedRanges ?? []).some((p) => h.endTime >= p.start && h.startTime <= p.end);
    return (h, p) => (It(), Vt("div", ql, [
      p[0] || (p[0] = N("div", { class: "card-header" }, [
        N("svg", {
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          N("path", {
            d: "M13.9707 6.69336C14.1977 6.53655 14.509 6.59338 14.666 6.82031C15.1929 7.58181 15.501 8.47536 15.501 9.43359C15.5009 10.449 15.1515 11.3859 14.5674 12.1748V15.5C14.5673 15.6841 14.4659 15.8533 14.3037 15.9404C14.1413 16.0274 13.9434 16.0181 13.79 15.916L11.3887 14.3154C10.7658 14.4975 10.0971 14.5996 9.40039 14.5996C7.72433 14.5995 6.19329 14.0267 5.08203 13.085C4.87137 12.9064 4.84489 12.5905 5.02344 12.3799C5.17976 12.1957 5.44161 12.1528 5.64551 12.2646L5.72852 12.3223L5.90527 12.4648C6.8124 13.1629 8.03915 13.5995 9.40039 13.5996C10.0759 13.5996 10.7204 13.4886 11.3115 13.293L11.4229 13.2695C11.5352 13.2594 11.6493 13.2878 11.7451 13.3516L13.5674 14.5654V12.0107C13.5674 11.8977 13.6063 11.7877 13.6768 11.6992C14.2025 11.0391 14.5009 10.2621 14.501 9.43359C14.501 8.69527 14.2648 7.99718 13.8438 7.38867C13.6869 7.16164 13.7438 6.85043 13.9707 6.69336ZM6.59961 1C9.87963 1 12.7002 3.23247 12.7002 6.16699C12.7 9.10135 9.87951 11.333 6.59961 11.333C5.83212 11.333 5.09873 11.2104 4.42188 10.9902L2.2334 12.6338C2.08198 12.7472 1.87924 12.7652 1.70996 12.6807C1.54058 12.596 1.43362 12.4228 1.43359 12.2334V8.9082C0.849294 8.11908 0.500074 7.18159 0.5 6.16699C0.5 3.23259 3.31975 1.00018 6.59961 1ZM6.59961 2C3.6937 2.00017 1.5 3.94775 1.5 6.16699C1.50008 6.99474 1.79835 7.77245 2.32422 8.43262C2.39467 8.52104 2.43351 8.63109 2.43359 8.74414V11.2324L4.03516 10.0322L4.08789 9.99707C4.21525 9.92475 4.36946 9.91125 4.50879 9.96289C5.14607 10.1991 5.85231 10.333 6.59961 10.333C9.50558 10.333 11.7 8.3862 11.7002 6.16699C11.7002 3.94765 9.50572 2 6.59961 2Z",
            fill: "#afafaf"
          })
        ]),
        N("span", { class: "title" }, "Subtitles")
      ], -1)),
      N("div", Gl, [
        N("div", Xl, [
          (It(!0), Vt(Dt, null, fo(h.subtitleEntries, (m) => (It(), Vt("div", {
            key: m.id,
            class: pe([
              "subtitle-entry",
              { active: r(m) },
              { hover: n.value === m.id },
              { selected: c(m) }
            ]),
            onClick: (S) => i("seekTo", m.startTime),
            onMouseenter: (S) => a(m.id),
            onMouseleave: d
          }, [
            is(ie(m.text) + " ", 1),
            N("div", Jl, [
              N("span", Ql, ie(l(m.endTime - m.startTime)), 1),
              N("span", ta, ie(o(m.startTime, m.endTime)), 1)
            ])
          ], 42, Yl))), 128))
        ])
      ])
    ]));
  }
}), sa = ".subtitle-panel[data-v-9ad5e4c4]{padding:12px 14px 0;max-height:100%;overflow-y:auto;border-right:1px solid #343434}.subtitle-content[data-v-9ad5e4c4]{overflow-y:auto}.card-header[data-v-9ad5e4c4]{display:flex;align-items:center;gap:6px;margin-bottom:14px;color:#d4d4d4;font-weight:500}.subtitle-wrapper[data-v-9ad5e4c4]{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden}.subtitle-entry[data-v-9ad5e4c4]{padding:8px;margin-bottom:12px;border-radius:6px;cursor:pointer;transition:border-color .1s ease;border:2px solid transparent;font-size:14px;color:#f8f8f8;background-color:#2b2b2b}.subtitle-entry.hover[data-v-9ad5e4c4]{border-color:#155999}.subtitle-entry.active[data-v-9ad5e4c4]{border-color:#5aaef2}.subtitle-entry.selected[data-v-9ad5e4c4]{background-color:#15599959}.subtitle-entry .entry-bottom[data-v-9ad5e4c4]{display:flex;gap:6px;align-items:center;margin-top:8px}.subtitle-entry .entry-bottom .timestamp[data-v-9ad5e4c4]{font-family:Inter,sans-serif;font-size:12px;color:#ffffffb0;background-color:#ffffff18;padding:1px 6px 0;line-height:1.2;border-radius:9px}.subtitle-entry .entry-bottom .duration[data-v-9ad5e4c4]{font-size:12px;color:#ffffffc8}.region-colors[data-v-9ad5e4c4]{display:flex;gap:1px;margin-left:1px}.region-colors .color-box[data-v-9ad5e4c4]{width:12px;height:12px;border-radius:2px}", ia = /* @__PURE__ */ di(ea, [["styles", [sa]], ["__scopeId", "data-v-9ad5e4c4"]]), na = { class: "app-container" }, ra = { class: "main-content grid-2col" }, oa = { class: "subtitle-column card flex-1" }, la = { class: "waveform-column card flex-1" }, aa = /* @__PURE__ */ hs({
  __name: "App",
  props: {
    audioUrl: { type: String }
  },
  setup(e) {
    const t = e, s = rt(null), i = rt([]), n = rt(0), r = rt(!1), o = rt(!1), l = rt(), a = rt([]), d = (T) => T.replace(/\.mp3$/, ".srt"), c = () => {
      s.value = null, i.value = [];
    }, h = async (T) => {
      r.value = !0;
      try {
        const $ = await fetch(T);
        if (!$.ok) throw new Error("Subtitle not found");
        const C = await $.text();
        i.value = Kl(C);
      } catch {
        i.value = [];
      }
      r.value = !1;
    }, p = async (T) => {
      o.value = !0;
      try {
        const $ = await fetch(T);
        if (!$.ok) throw new Error("Audio not found");
        const C = await $.blob(), O = C.type.split("/")[1] || "mp3";
        s.value = new File([C], `audio.${O}`, {
          type: C.type
        });
      } catch {
        s.value = null;
      }
      o.value = !1;
    }, m = (T) => {
      n.value = T;
    }, S = () => {
      o.value = !1;
    }, I = (T) => {
      var $;
      ($ = l.value) == null || $.seekTo(T);
    }, A = (T) => {
      a.value = T;
    }, R = async (T) => {
      if (!T) {
        c();
        return;
      }
      await Promise.all([
        h(d(T)),
        p(T)
      ]), (!s.value || i.value.length === 0) && c();
    };
    return he(
      () => t.audioUrl,
      (T) => {
        R(T);
      },
      { immediate: !0 }
    ), ni(() => {
      t.audioUrl ? R(t.audioUrl) : R("/assets/audio.mp3");
    }), (T, $) => (It(), Vt("div", na, [
      N("main", ra, [
        N("div", oa, [
          St(ia, {
            "subtitle-entries": i.value,
            "current-time": n.value,
            "is-loading": r.value,
            "selected-ranges": a.value,
            onSeekTo: I
          }, null, 8, ["subtitle-entries", "current-time", "is-loading", "selected-ranges"])
        ]),
        N("div", la, [
          St(Zl, {
            "audio-file": s.value,
            "is-loading": o.value,
            onTimeUpdate: m,
            onReady: S,
            onRegionsSelected: A,
            ref_key: "waveformPlayer",
            ref: l
          }, null, 8, ["audio-file", "is-loading"])
        ])
      ])
    ]));
  }
}), ca = "*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,sans-serif;font-size:14px;line-height:1.2;background-color:#1c1c1c}.app-container{display:flex;flex-direction:column}.main-content{flex:1;display:flex;max-height:100%}.flex{display:flex}.flex-center,.overlay{display:flex;justify-content:center;align-items:center}.flex-1{flex:1}.grid-2col{display:flex;height:100%}.card{background:#232323;display:flex;flex-direction:column;height:500px}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;padding:6px 8px;border-radius:8px;font-size:14px;display:inline-flex;align-items:center;gap:6px;background:#1976d2;color:#f8f8f8}.btn.btn-gray{background:#424242}.btn.btn-danger{background:#e43838}.icon{font-size:24px}.overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#0f0f0f80;z-index:10}.spinner{width:27px;height:27px;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.header{display:flex;align-items:center;padding:8px;background:#1976d2;color:#fff}.header .spacer{flex:1}.controls{display:flex;align-items:center;gap:6px;padding:8px;background:#f5f5f5}.text-muted{color:#9e9e9e}.mt-4{margin-top:8px}", ua = /* @__PURE__ */ di(aa, [["styles", [ca]]]), da = /* @__PURE__ */ xl(ua, { shadowRoot: !0 });
customElements.define("subtitle-wave-player", da);
