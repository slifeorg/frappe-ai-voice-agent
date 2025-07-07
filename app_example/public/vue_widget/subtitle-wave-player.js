/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const G = {}, ce = [], Nt = () => {
}, pr = () => !1, ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ks = (e) => e.startsWith("onUpdate:"), st = Object.assign, qs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, gr = Object.prototype.hasOwnProperty, B = (e, t) => gr.call(e, t), I = Array.isArray, ue = (e) => je(e) === "[object Map]", as = (e) => je(e) === "[object Set]", bi = (e) => je(e) === "[object Date]", F = (e) => typeof e == "function", tt = (e) => typeof e == "string", Wt = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", sn = (e) => (J(e) || F(e)) && F(e.then) && F(e.catch), nn = Object.prototype.toString, je = (e) => nn.call(e), mr = (e) => je(e).slice(8, -1), cs = (e) => je(e) === "[object Object]", Gs = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Te = /* @__PURE__ */ Vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, vr = /-(\w)/g, Mt = us(
  (e) => e.replace(vr, (t, s) => s ? s.toUpperCase() : "")
), br = /\B([A-Z])/g, St = us(
  (e) => e.replace(br, "-$1").toLowerCase()
), rn = us((e) => e.charAt(0).toUpperCase() + e.slice(1)), ws = us(
  (e) => e ? `on${rn(e)}` : ""
), Yt = (e, t) => !Object.is(e, t), Xe = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, ks = (e, t, s, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: s
  });
}, yr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, yi = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _i;
const ds = () => _i || (_i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  if (I(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const i = e[s], n = tt(i) ? Cr(i) : fs(i);
      if (n)
        for (const r in n)
          t[r] = n[r];
    }
    return t;
  } else if (tt(e) || J(e))
    return e;
}
const _r = /;(?![^(]*\))/g, xr = /:([^]+)/, wr = /\/\*[^]*?\*\//g;
function Cr(e) {
  const t = {};
  return e.replace(wr, "").split(_r).forEach((s) => {
    if (s) {
      const i = s.split(xr);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (I(e))
    for (let s = 0; s < e.length; s++) {
      const i = ge(e[s]);
      i && (t += i + " ");
    }
  else if (J(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Sr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Er = /* @__PURE__ */ Vs(Sr);
function on(e) {
  return !!e || e === "";
}
function Tr(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = hs(e[i], t[i]);
  return s;
}
function hs(e, t) {
  if (e === t) return !0;
  let s = bi(e), i = bi(t);
  if (s || i)
    return s && i ? e.getTime() === t.getTime() : !1;
  if (s = Wt(e), i = Wt(t), s || i)
    return e === t;
  if (s = I(e), i = I(t), s || i)
    return s && i ? Tr(e, t) : !1;
  if (s = J(e), i = J(t), s || i) {
    if (!s || !i)
      return !1;
    const n = Object.keys(e).length, r = Object.keys(t).length;
    if (n !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
      if (l && !a || !l && a || !hs(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ln(e, t) {
  return e.findIndex((s) => hs(s, t));
}
const an = (e) => !!(e && e.__v_isRef === !0), de = (e) => tt(e) ? e : e == null ? "" : I(e) || J(e) && (e.toString === nn || !F(e.toString)) ? an(e) ? de(e.value) : JSON.stringify(e, cn, 2) : String(e), cn = (e, t) => an(t) ? cn(e, t.value) : ue(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [i, n], r) => (s[Cs(i, r) + " =>"] = n, s),
    {}
  )
} : as(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => Cs(s))
} : Wt(t) ? Cs(t) : J(t) && !I(t) && !cs(t) ? String(t) : t, Cs = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Wt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mt;
class Rr {
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
function Pr() {
  return mt;
}
let Y;
const Ss = /* @__PURE__ */ new WeakSet();
class un {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, mt && mt.active && mt.effects.push(this);
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
    const t = Y, s = At;
    Y = this, At = !0;
    try {
      return this.fn();
    } finally {
      pn(this), Y = t, At = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Js(t);
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
let dn = 0, Re, Pe;
function fn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pe, Pe = e;
    return;
  }
  e.next = Re, Re = e;
}
function Xs() {
  dn++;
}
function Ys() {
  if (--dn > 0)
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
function hn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function pn(e) {
  let t, s = e.depsTail, i = s;
  for (; i; ) {
    const n = i.prevDep;
    i.version === -1 ? (i === s && (s = n), Js(i), Mr(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = n;
  }
  e.deps = t, e.depsTail = s;
}
function $s(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (gn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function gn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Le) || (e.globalVersion = Le, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$s(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Y, i = At;
  Y = e, At = !0;
  try {
    hn(e);
    const n = e.fn(e._value);
    (t.version === 0 || Yt(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    Y = s, At = i, pn(e), e.flags &= -3;
  }
}
function Js(e, t = !1) {
  const { dep: s, prevSub: i, nextSub: n } = e;
  if (i && (i.nextSub = n, e.prevSub = void 0), n && (n.prevSub = i, e.nextSub = void 0), s.subs === e && (s.subs = i, !i && s.computed)) {
    s.computed.flags &= -5;
    for (let r = s.computed.deps; r; r = r.nextDep)
      Js(r, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Mr(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let At = !0;
const mn = [];
function Vt() {
  mn.push(At), At = !1;
}
function Kt() {
  const e = mn.pop();
  At = e === void 0 ? !0 : e;
}
function xi(e) {
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
let Le = 0;
class Ar {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Y || !At || Y === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Y)
      s = this.activeLink = new Ar(Y, this), Y.deps ? (s.prevDep = Y.depsTail, Y.depsTail.nextDep = s, Y.depsTail = s) : Y.deps = Y.depsTail = s, vn(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const i = s.nextDep;
      i.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = i), s.prevDep = Y.depsTail, s.nextDep = void 0, Y.depsTail.nextDep = s, Y.depsTail = s, Y.deps === s && (Y.deps = i);
    }
    return s;
  }
  trigger(t) {
    this.version++, Le++, this.notify(t);
  }
  notify(t) {
    Xs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ys();
    }
  }
}
function vn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        vn(i);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Is = /* @__PURE__ */ new WeakMap(), ne = Symbol(
  ""
), Ns = Symbol(
  ""
), ke = Symbol(
  ""
);
function lt(e, t, s) {
  if (At && Y) {
    let i = Is.get(e);
    i || Is.set(e, i = /* @__PURE__ */ new Map());
    let n = i.get(s);
    n || (i.set(s, n = new Zs()), n.map = i, n.key = s), n.track();
  }
}
function Bt(e, t, s, i, n, r) {
  const o = Is.get(e);
  if (!o) {
    Le++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Xs(), t === "clear")
    o.forEach(l);
  else {
    const a = I(e), d = a && Gs(s);
    if (a && s === "length") {
      const c = Number(i);
      o.forEach((h, p) => {
        (p === "length" || p === ke || !Wt(p) && p >= c) && l(h);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(ke)), t) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(ne)), ue(e) && l(o.get(Ns)));
          break;
        case "delete":
          a || (l(o.get(ne)), ue(e) && l(o.get(Ns)));
          break;
        case "set":
          ue(e) && l(o.get(ne));
          break;
      }
  }
  Ys();
}
function le(e) {
  const t = U(e);
  return t === e ? t : (lt(t, "iterate", ke), Tt(e) ? t : t.map(rt));
}
function ps(e) {
  return lt(e = U(e), "iterate", ke), e;
}
const Or = {
  __proto__: null,
  [Symbol.iterator]() {
    return Es(this, Symbol.iterator, rt);
  },
  concat(...e) {
    return le(this).concat(
      ...e.map((t) => I(t) ? le(t) : t)
    );
  },
  entries() {
    return Es(this, "entries", (e) => (e[1] = rt(e[1]), e));
  },
  every(e, t) {
    return Ht(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ht(this, "filter", e, t, (s) => s.map(rt), arguments);
  },
  find(e, t) {
    return Ht(this, "find", e, t, rt, arguments);
  },
  findIndex(e, t) {
    return Ht(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ht(this, "findLast", e, t, rt, arguments);
  },
  findLastIndex(e, t) {
    return Ht(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ht(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ts(this, "includes", e);
  },
  indexOf(...e) {
    return Ts(this, "indexOf", e);
  },
  join(e) {
    return le(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ht(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xe(this, "pop");
  },
  push(...e) {
    return xe(this, "push", e);
  },
  reduce(e, ...t) {
    return wi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wi(this, "reduceRight", e, t);
  },
  shift() {
    return xe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ht(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xe(this, "splice", e);
  },
  toReversed() {
    return le(this).toReversed();
  },
  toSorted(e) {
    return le(this).toSorted(e);
  },
  toSpliced(...e) {
    return le(this).toSpliced(...e);
  },
  unshift(...e) {
    return xe(this, "unshift", e);
  },
  values() {
    return Es(this, "values", rt);
  }
};
function Es(e, t, s) {
  const i = ps(e), n = i[t]();
  return i !== e && !Tt(e) && (n._next = n.next, n.next = () => {
    const r = n._next();
    return r.value && (r.value = s(r.value)), r;
  }), n;
}
const Dr = Array.prototype;
function Ht(e, t, s, i, n, r) {
  const o = ps(e), l = o !== e && !Tt(e), a = o[t];
  if (a !== Dr[t]) {
    const h = a.apply(e, r);
    return l ? rt(h) : h;
  }
  let d = s;
  o !== e && (l ? d = function(h, p) {
    return s.call(this, rt(h), p, e);
  } : s.length > 2 && (d = function(h, p) {
    return s.call(this, h, p, e);
  }));
  const c = a.call(o, d, i);
  return l && n ? n(c) : c;
}
function wi(e, t, s, i) {
  const n = ps(e);
  let r = s;
  return n !== e && (Tt(e) ? s.length > 3 && (r = function(o, l, a) {
    return s.call(this, o, l, a, e);
  }) : r = function(o, l, a) {
    return s.call(this, o, rt(l), a, e);
  }), n[t](r, ...i);
}
function Ts(e, t, s) {
  const i = U(e);
  lt(i, "iterate", ke);
  const n = i[t](...s);
  return (n === -1 || n === !1) && si(s[0]) ? (s[0] = U(s[0]), i[t](...s)) : n;
}
function xe(e, t, s = []) {
  Vt(), Xs();
  const i = U(e)[t].apply(e, s);
  return Ys(), Kt(), i;
}
const Lr = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), bn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Wt)
);
function kr(e) {
  Wt(e) || (e = String(e));
  const t = U(this);
  return lt(t, "has", e), t.hasOwnProperty(e);
}
class yn {
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
      return i === (n ? r ? Ur : Cn : r ? wn : xn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = I(t);
    if (!n) {
      let a;
      if (o && (a = Or[s]))
        return a;
      if (s === "hasOwnProperty")
        return kr;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      at(t) ? t : i
    );
    return (Wt(s) ? bn.has(s) : Lr(s)) || (n || lt(t, "get", s), r) ? l : at(l) ? o && Gs(s) ? l : l.value : J(l) ? n ? Sn(l) : ti(l) : l;
  }
}
class _n extends yn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, i, n) {
    let r = t[s];
    if (!this._isShallow) {
      const a = Jt(r);
      if (!Tt(i) && !Jt(i) && (r = U(r), i = U(i)), !I(t) && at(r) && !at(i))
        return a ? !1 : (r.value = i, !0);
    }
    const o = I(t) && Gs(s) ? Number(s) < t.length : B(t, s), l = Reflect.set(
      t,
      s,
      i,
      at(t) ? t : n
    );
    return t === U(n) && (o ? Yt(i, r) && Bt(t, "set", s, i) : Bt(t, "add", s, i)), l;
  }
  deleteProperty(t, s) {
    const i = B(t, s);
    t[s];
    const n = Reflect.deleteProperty(t, s);
    return n && i && Bt(t, "delete", s, void 0), n;
  }
  has(t, s) {
    const i = Reflect.has(t, s);
    return (!Wt(s) || !bn.has(s)) && lt(t, "has", s), i;
  }
  ownKeys(t) {
    return lt(
      t,
      "iterate",
      I(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class $r extends yn {
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
const Ir = /* @__PURE__ */ new _n(), Nr = /* @__PURE__ */ new $r(), Wr = /* @__PURE__ */ new _n(!0);
const Ws = (e) => e, Ve = (e) => Reflect.getPrototypeOf(e);
function jr(e, t, s) {
  return function(...i) {
    const n = this.__v_raw, r = U(n), o = ue(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, d = n[e](...i), c = s ? Ws : t ? ts : rt;
    return !t && lt(
      r,
      "iterate",
      a ? Ns : ne
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
function Ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fr(e, t) {
  const s = {
    get(n) {
      const r = this.__v_raw, o = U(r), l = U(n);
      e || (Yt(n, l) && lt(o, "get", n), lt(o, "get", l));
      const { has: a } = Ve(o), d = t ? Ws : e ? ts : rt;
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
      return e || (Yt(n, l) && lt(o, "has", n), lt(o, "has", l)), n === l ? r.has(n) : r.has(n) || r.has(l);
    },
    forEach(n, r) {
      const o = this, l = o.__v_raw, a = U(l), d = t ? Ws : e ? ts : rt;
      return !e && lt(a, "iterate", ne), l.forEach((c, h) => n.call(r, d(c), d(h), o));
    }
  };
  return st(
    s,
    e ? {
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear")
    } : {
      add(n) {
        !t && !Tt(n) && !Jt(n) && (n = U(n));
        const r = U(this);
        return Ve(r).has.call(r, n) || (r.add(n), Bt(r, "add", n, n)), this;
      },
      set(n, r) {
        !t && !Tt(r) && !Jt(r) && (r = U(r));
        const o = U(this), { has: l, get: a } = Ve(o);
        let d = l.call(o, n);
        d || (n = U(n), d = l.call(o, n));
        const c = a.call(o, n);
        return o.set(n, r), d ? Yt(r, c) && Bt(o, "set", n, r) : Bt(o, "add", n, r), this;
      },
      delete(n) {
        const r = U(this), { has: o, get: l } = Ve(r);
        let a = o.call(r, n);
        a || (n = U(n), a = o.call(r, n)), l && l.call(r, n);
        const d = r.delete(n);
        return a && Bt(r, "delete", n, void 0), d;
      },
      clear() {
        const n = U(this), r = n.size !== 0, o = n.clear();
        return r && Bt(
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
    s[n] = jr(n, e, t);
  }), s;
}
function Qs(e, t) {
  const s = Fr(e, t);
  return (i, n, r) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? i : Reflect.get(
    B(s, n) && n in i ? s : i,
    n,
    r
  );
}
const Hr = {
  get: /* @__PURE__ */ Qs(!1, !1)
}, zr = {
  get: /* @__PURE__ */ Qs(!1, !0)
}, Br = {
  get: /* @__PURE__ */ Qs(!0, !1)
};
const xn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap();
function Vr(e) {
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
function Kr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vr(mr(e));
}
function ti(e) {
  return Jt(e) ? e : ei(
    e,
    !1,
    Ir,
    Hr,
    xn
  );
}
function qr(e) {
  return ei(
    e,
    !1,
    Wr,
    zr,
    wn
  );
}
function Sn(e) {
  return ei(
    e,
    !0,
    Nr,
    Br,
    Cn
  );
}
function ei(e, t, s, i, n) {
  if (!J(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Kr(e);
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
function fe(e) {
  return Jt(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Jt(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function si(e) {
  return e ? !!e.__v_raw : !1;
}
function U(e) {
  const t = e && e.__v_raw;
  return t ? U(t) : e;
}
function Gr(e) {
  return !B(e, "__v_skip") && Object.isExtensible(e) && ks(e, "__v_skip", !0), e;
}
const rt = (e) => J(e) ? ti(e) : e, ts = (e) => J(e) ? Sn(e) : e;
function at(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function et(e) {
  return Xr(e, !1);
}
function Xr(e, t) {
  return at(e) ? e : new Yr(e, t);
}
class Yr {
  constructor(t, s) {
    this.dep = new Zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : U(t), this._value = s ? t : rt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, i = this.__v_isShallow || Tt(t) || Jt(t);
    t = i ? t : U(t), Yt(t, s) && (this._rawValue = t, this._value = i ? t : rt(t), this.dep.trigger());
  }
}
function En(e) {
  return at(e) ? e.value : e;
}
const Jr = {
  get: (e, t, s) => t === "__v_raw" ? e : En(Reflect.get(e, t, s)),
  set: (e, t, s, i) => {
    const n = e[t];
    return at(n) && !at(s) ? (n.value = s, !0) : Reflect.set(e, t, s, i);
  }
};
function Tn(e) {
  return fe(e) ? e : new Proxy(e, Jr);
}
class Zr {
  constructor(t, s, i) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new Zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Le - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return fn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return gn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Qr(e, t, s = !1) {
  let i, n;
  return F(e) ? i = e : (i = e.get, n = e.set), new Zr(i, n, s);
}
const qe = {}, es = /* @__PURE__ */ new WeakMap();
let se;
function to(e, t = !1, s = se) {
  if (s) {
    let i = es.get(s);
    i || es.set(s, i = []), i.push(e);
  }
}
function eo(e, t, s = G) {
  const { immediate: i, deep: n, once: r, scheduler: o, augmentJob: l, call: a } = s, d = (C) => n ? C : Tt(C) || n === !1 || n === 0 ? Ut(C, 1) : Ut(C);
  let c, h, p, g, S = !1, A = !1;
  if (at(e) ? (h = () => e.value, S = Tt(e)) : fe(e) ? (h = () => d(e), S = !0) : I(e) ? (A = !0, S = e.some((C) => fe(C) || Tt(C)), h = () => e.map((C) => {
    if (at(C))
      return C.value;
    if (fe(C))
      return d(C);
    if (F(C))
      return a ? a(C, 2) : C();
  })) : F(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (p) {
      Vt();
      try {
        p();
      } finally {
        Kt();
      }
    }
    const C = se;
    se = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      se = C;
    }
  } : h = Nt, t && n) {
    const C = h, D = n === !0 ? 1 / 0 : n;
    h = () => Ut(C(), D);
  }
  const N = Pr(), O = () => {
    c.stop(), N && N.active && qs(N.effects, c);
  };
  if (r && t) {
    const C = t;
    t = (...D) => {
      C(...D), O();
    };
  }
  let M = A ? new Array(e.length).fill(qe) : qe;
  const L = (C) => {
    if (!(!(c.flags & 1) || !c.dirty && !C))
      if (t) {
        const D = c.run();
        if (n || S || (A ? D.some((K, q) => Yt(K, M[q])) : Yt(D, M))) {
          p && p();
          const K = se;
          se = c;
          try {
            const q = [
              D,
              // pass undefined as the old value when it's changed for the first time
              M === qe ? void 0 : A && M[0] === qe ? [] : M,
              g
            ];
            M = D, a ? a(t, 3, q) : (
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
  return l && l(L), c = new un(h), c.scheduler = o ? () => o(L, !1) : L, g = (C) => to(C, !1, c), p = c.onStop = () => {
    const C = es.get(c);
    if (C) {
      if (a)
        a(C, 4);
      else
        for (const D of C) D();
      es.delete(c);
    }
  }, t ? i ? L(!0) : M = c.run() : o ? o(L.bind(null, !0), !0) : c.run(), O.pause = c.pause.bind(c), O.resume = c.resume.bind(c), O.stop = O, O;
}
function Ut(e, t = 1 / 0, s) {
  if (t <= 0 || !J(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, at(e))
    Ut(e.value, t, s);
  else if (I(e))
    for (let i = 0; i < e.length; i++)
      Ut(e[i], t, s);
  else if (as(e) || ue(e))
    e.forEach((i) => {
      Ut(i, t, s);
    });
  else if (cs(e)) {
    for (const i in e)
      Ut(e[i], t, s);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Ut(e[i], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fe(e, t, s, i) {
  try {
    return i ? e(...i) : e();
  } catch (n) {
    gs(n, t, s);
  }
}
function jt(e, t, s, i) {
  if (F(e)) {
    const n = Fe(e, t, s, i);
    return n && sn(n) && n.catch((r) => {
      gs(r, t, s);
    }), n;
  }
  if (I(e)) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      n.push(jt(e[r], t, s, i));
    return n;
  }
}
function gs(e, t, s, i = !0) {
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
      Vt(), Fe(r, null, 10, [
        e,
        a,
        d
      ]), Kt();
      return;
    }
  }
  so(e, s, n, i, o);
}
function so(e, t, s, i = !0, n = !1) {
  if (n)
    throw e;
  console.error(e);
}
const ft = [];
let $t = -1;
const he = [];
let Gt = null, ae = 0;
const Rn = /* @__PURE__ */ Promise.resolve();
let ss = null;
function ii(e) {
  const t = ss || Rn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function io(e) {
  let t = $t + 1, s = ft.length;
  for (; t < s; ) {
    const i = t + s >>> 1, n = ft[i], r = $e(n);
    r < e || r === e && n.flags & 2 ? t = i + 1 : s = i;
  }
  return t;
}
function ni(e) {
  if (!(e.flags & 1)) {
    const t = $e(e), s = ft[ft.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $e(s) ? ft.push(e) : ft.splice(io(t), 0, e), e.flags |= 1, Pn();
  }
}
function Pn() {
  ss || (ss = Rn.then(An));
}
function no(e) {
  I(e) ? he.push(...e) : Gt && e.id === -1 ? Gt.splice(ae + 1, 0, e) : e.flags & 1 || (he.push(e), e.flags |= 1), Pn();
}
function Ci(e, t, s = $t + 1) {
  for (; s < ft.length; s++) {
    const i = ft[s];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      ft.splice(s, 1), s--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Mn(e) {
  if (he.length) {
    const t = [...new Set(he)].sort(
      (s, i) => $e(s) - $e(i)
    );
    if (he.length = 0, Gt) {
      Gt.push(...t);
      return;
    }
    for (Gt = t, ae = 0; ae < Gt.length; ae++) {
      const s = Gt[ae];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Gt = null, ae = 0;
  }
}
const $e = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function An(e) {
  try {
    for ($t = 0; $t < ft.length; $t++) {
      const t = ft[$t];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Fe(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $t < ft.length; $t++) {
      const t = ft[$t];
      t && (t.flags &= -2);
    }
    $t = -1, ft.length = 0, Mn(), ss = null, (ft.length || he.length) && An();
  }
}
let Et = null, On = null;
function is(e) {
  const t = Et;
  return Et = e, On = e && e.type.__scopeId || null, t;
}
function ro(e, t = Et, s) {
  if (!t || e._n)
    return e;
  const i = (...n) => {
    i._d && ki(-1);
    const r = is(t);
    let o;
    try {
      o = e(...n);
    } finally {
      is(r), i._d && ki(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Si(e, t) {
  if (Et === null)
    return e;
  const s = _s(Et), i = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [r, o, l, a = G] = t[n];
    r && (F(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ut(o), i.push({
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
    a && (Vt(), jt(a, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Kt());
  }
}
const oo = Symbol("_vte"), lo = (e) => e.__isTeleport;
function ri(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ri(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ms(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, t, { setup: e })
  ) : e;
}
function Dn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Me(e, t, s, i, n = !1) {
  if (I(e)) {
    e.forEach(
      (S, A) => Me(
        S,
        t && (I(t) ? t[A] : t),
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
  const r = i.shapeFlag & 4 ? _s(i.component) : i.el, o = n ? null : r, { i: l, r: a } = e, d = t && t.r, c = l.refs === G ? l.refs = {} : l.refs, h = l.setupState, p = U(h), g = h === G ? () => !1 : (S) => B(p, S);
  if (d != null && d !== a && (tt(d) ? (c[d] = null, g(d) && (h[d] = null)) : at(d) && (d.value = null)), F(a))
    Fe(a, l, 12, [o, c]);
  else {
    const S = tt(a), A = at(a);
    if (S || A) {
      const N = () => {
        if (e.f) {
          const O = S ? g(a) ? h[a] : c[a] : a.value;
          n ? I(O) && qs(O, r) : I(O) ? O.includes(r) || O.push(r) : S ? (c[a] = [r], g(a) && (h[a] = c[a])) : (a.value = [r], e.k && (c[e.k] = a.value));
        } else S ? (c[a] = o, g(a) && (h[a] = o)) : A && (a.value = o, e.k && (c[e.k] = o));
      };
      o ? (N.id = -1, wt(N, s)) : N();
    }
  }
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const Ae = (e) => !!e.type.__asyncLoader, Ln = (e) => e.type.__isKeepAlive;
function ao(e, t) {
  kn(e, "a", t);
}
function co(e, t) {
  kn(e, "da", t);
}
function kn(e, t, s = ht) {
  const i = e.__wdc || (e.__wdc = () => {
    let n = s;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (vs(t, i, s), s) {
    let n = s.parent;
    for (; n && n.parent; )
      Ln(n.parent.vnode) && uo(i, t, s, n), n = n.parent;
  }
}
function uo(e, t, s, i) {
  const n = vs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  li(() => {
    qs(i[t], n);
  }, s);
}
function vs(e, t, s = ht, i = !1) {
  if (s) {
    const n = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Vt();
      const l = He(s), a = jt(t, s, e, o);
      return l(), Kt(), a;
    });
    return i ? n.unshift(r) : n.push(r), r;
  }
}
const qt = (e) => (t, s = ht) => {
  (!Ne || e === "sp") && vs(e, (...i) => t(...i), s);
}, fo = qt("bm"), oi = qt("m"), ho = qt(
  "bu"
), po = qt("u"), go = qt(
  "bum"
), li = qt("um"), mo = qt(
  "sp"
), vo = qt("rtg"), bo = qt("rtc");
function yo(e, t = ht) {
  vs("ec", e, t);
}
const _o = Symbol.for("v-ndc");
function Ei(e, t, s, i) {
  let n;
  const r = s, o = I(e);
  if (o || tt(e)) {
    const l = o && fe(e);
    let a = !1, d = !1;
    l && (a = !Tt(e), d = Jt(e), e = ps(e)), n = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      n[c] = t(
        a ? d ? ts(rt(e[c])) : rt(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    n = new Array(e);
    for (let l = 0; l < e; l++)
      n[l] = t(l + 1, l, void 0, r);
  } else if (J(e))
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
const js = (e) => e ? er(e) ? _s(e) : js(e.parent) : null, Oe = (
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
    $parent: (e) => js(e.parent),
    $root: (e) => js(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => In(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ni(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ii.bind(e.proxy)),
    $watch: (e) => zo.bind(e)
  })
), Rs = (e, t) => e !== G && !e.__isScriptSetup && B(e, t), xo = {
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
        if (Rs(i, t))
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
        Fs && (o[t] = 0);
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
    return Rs(n, t) ? (n[t] = s, !0) : i !== G && B(i, t) ? (i[t] = s, !0) : B(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: i, appContext: n, propsOptions: r }
  }, o) {
    let l;
    return !!s[o] || e !== G && B(e, o) || Rs(t, o) || (l = r[0]) && B(l, o) || B(i, o) || B(Oe, o) || B(n.config.globalProperties, o);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : B(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Ti(e) {
  return I(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Fs = !0;
function wo(e) {
  const t = In(e), s = e.proxy, i = e.ctx;
  Fs = !1, t.beforeCreate && Ri(t.beforeCreate, e, "bc");
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
    activated: A,
    deactivated: N,
    beforeDestroy: O,
    beforeUnmount: M,
    destroyed: L,
    unmounted: C,
    render: D,
    renderTracked: K,
    renderTriggered: q,
    errorCaptured: Z,
    serverPrefetch: it,
    // public API
    expose: Q,
    inheritAttrs: bt,
    // assets
    components: Ft,
    directives: Qt,
    filters: oe
  } = t;
  if (d && Co(d, i, null), o)
    for (const y in o) {
      const _ = o[y];
      F(_) && (i[y] = _.bind(s));
    }
  if (n) {
    const y = n.call(s, s);
    J(y) && (e.data = ti(y));
  }
  if (Fs = !0, r)
    for (const y in r) {
      const _ = r[y], z = F(_) ? _.bind(s, s) : F(_.get) ? _.get.bind(s, s) : Nt, yt = !F(_) && F(_.set) ? _.set.bind(s) : Nt, _t = ir({
        get: z,
        set: yt
      });
      Object.defineProperty(i, y, {
        enumerable: !0,
        configurable: !0,
        get: () => _t.value,
        set: (ct) => _t.value = ct
      });
    }
  if (l)
    for (const y in l)
      $n(l[y], i, s, y);
  if (a) {
    const y = F(a) ? a.call(s) : a;
    Reflect.ownKeys(y).forEach((_) => {
      Mo(_, y[_]);
    });
  }
  c && Ri(c, e, "c");
  function nt(y, _) {
    I(_) ? _.forEach((z) => y(z.bind(s))) : _ && y(_.bind(s));
  }
  if (nt(fo, h), nt(oi, p), nt(ho, g), nt(po, S), nt(ao, A), nt(co, N), nt(yo, Z), nt(bo, K), nt(vo, q), nt(go, M), nt(li, C), nt(mo, it), I(Q))
    if (Q.length) {
      const y = e.exposed || (e.exposed = {});
      Q.forEach((_) => {
        Object.defineProperty(y, _, {
          get: () => s[_],
          set: (z) => s[_] = z
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === Nt && (e.render = D), bt != null && (e.inheritAttrs = bt), Ft && (e.components = Ft), Qt && (e.directives = Qt), it && Dn(e);
}
function Co(e, t, s = Nt) {
  I(e) && (e = Hs(e));
  for (const i in e) {
    const n = e[i];
    let r;
    J(n) ? "default" in n ? r = Ye(
      n.from || i,
      n.default,
      !0
    ) : r = Ye(n.from || i) : r = Ye(n), at(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Ri(e, t, s) {
  jt(
    I(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function $n(e, t, s, i) {
  let n = i.includes(".") ? Xn(s, i) : () => s[i];
  if (tt(e)) {
    const r = t[e];
    F(r) && re(n, r);
  } else if (F(e))
    re(n, e.bind(s));
  else if (J(e))
    if (I(e))
      e.forEach((r) => $n(r, t, s, i));
    else {
      const r = F(e.handler) ? e.handler.bind(s) : t[e.handler];
      F(r) && re(n, r, e);
    }
}
function In(e) {
  const t = e.type, { mixins: s, extends: i } = t, {
    mixins: n,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !n.length && !s && !i ? a = t : (a = {}, n.length && n.forEach(
    (d) => ns(a, d, o, !0)
  ), ns(a, t, o)), J(t) && r.set(t, a), a;
}
function ns(e, t, s, i = !1) {
  const { mixins: n, extends: r } = t;
  r && ns(e, r, s, !0), n && n.forEach(
    (o) => ns(e, o, s, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const l = So[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const So = {
  data: Pi,
  props: Mi,
  emits: Mi,
  // objects
  methods: Se,
  computed: Se,
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
  components: Se,
  directives: Se,
  // watch
  watch: To,
  // provide / inject
  provide: Pi,
  inject: Eo
};
function Pi(e, t) {
  return t ? e ? function() {
    return st(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Eo(e, t) {
  return Se(Hs(e), Hs(t));
}
function Hs(e) {
  if (I(e)) {
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
function Se(e, t) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mi(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : st(
    /* @__PURE__ */ Object.create(null),
    Ti(e),
    Ti(t ?? {})
  ) : t;
}
function To(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = st(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    s[i] = ut(e[i], t[i]);
  return s;
}
function Nn() {
  return {
    app: null,
    config: {
      isNativeTag: pr,
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
let Ro = 0;
function Po(e, t) {
  return function(i, n = null) {
    F(i) || (i = st({}, i)), n != null && !J(n) && (n = null);
    const r = Nn(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Ro++,
      _component: i,
      _props: n,
      _container: null,
      _context: r,
      _instance: null,
      version: ul,
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
          const g = d._ceVNode || Rt(i, n);
          return g.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, c, p), a = !0, d._container = c, c.__vue_app__ = d, _s(g.component);
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
        const h = pe;
        pe = d;
        try {
          return c();
        } finally {
          pe = h;
        }
      }
    };
    return d;
  };
}
let pe = null;
function Mo(e, t) {
  if (ht) {
    let s = ht.provides;
    const i = ht.parent && ht.parent.provides;
    i === s && (s = ht.provides = Object.create(i)), s[e] = t;
  }
}
function Ye(e, t, s = !1) {
  const i = ht || Et;
  if (i || pe) {
    let n = pe ? pe._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return s && F(t) ? t.call(i && i.proxy) : t;
  }
}
const Wn = {}, jn = () => Object.create(Wn), Fn = (e) => Object.getPrototypeOf(e) === Wn;
function Ao(e, t, s, i = !1) {
  const n = {}, r = jn();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hn(e, t, n, r);
  for (const o in e.propsOptions[0])
    o in n || (n[o] = void 0);
  s ? e.props = i ? n : qr(n) : e.type.props ? e.props = n : e.props = r, e.attrs = r;
}
function Oo(e, t, s, i) {
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
        if (bs(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (a)
          if (B(r, p))
            g !== r[p] && (r[p] = g, d = !0);
          else {
            const S = Mt(p);
            n[S] = zs(
              a,
              l,
              S,
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
    Hn(e, t, n, r) && (d = !0);
    let c;
    for (const h in l)
      (!t || // for camelCase
      !B(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = St(h)) === h || !B(t, c))) && (a ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[c] !== void 0) && (n[h] = zs(
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
  d && Bt(e.attrs, "set", "");
}
function Hn(e, t, s, i) {
  const [n, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (Te(a))
        continue;
      const d = t[a];
      let c;
      n && B(n, c = Mt(a)) ? !r || !r.includes(c) ? s[c] = d : (l || (l = {}))[c] = d : bs(e.emitsOptions, a) || (!(a in i) || d !== i[a]) && (i[a] = d, o = !0);
    }
  if (r) {
    const a = U(s), d = l || G;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      s[h] = zs(
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
function zs(e, t, s, i, n, r) {
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
          const c = He(n);
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
    ] && (i === "" || i === St(s)) && (i = !0));
  }
  return i;
}
const Do = /* @__PURE__ */ new WeakMap();
function zn(e, t, s = !1) {
  const i = s ? Do : t.propsCache, n = i.get(e);
  if (n)
    return n;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!F(e)) {
    const c = (h) => {
      a = !0;
      const [p, g] = zn(h, t, !0);
      st(o, p), g && l.push(...g);
    };
    !s && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return J(e) && i.set(e, ce), ce;
  if (I(r))
    for (let c = 0; c < r.length; c++) {
      const h = Mt(r[c]);
      Ai(h) && (o[h] = G);
    }
  else if (r)
    for (const c in r) {
      const h = Mt(c);
      if (Ai(h)) {
        const p = r[c], g = o[h] = I(p) || F(p) ? { type: p } : st({}, p), S = g.type;
        let A = !1, N = !0;
        if (I(S))
          for (let O = 0; O < S.length; ++O) {
            const M = S[O], L = F(M) && M.name;
            if (L === "Boolean") {
              A = !0;
              break;
            } else L === "String" && (N = !1);
          }
        else
          A = F(S) && S.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = A, g[
          1
          /* shouldCastTrue */
        ] = N, (A || B(g, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return J(e) && i.set(e, d), d;
}
function Ai(e) {
  return e[0] !== "$" && !Te(e);
}
const ai = (e) => e[0] === "_" || e === "$stable", ci = (e) => I(e) ? e.map(It) : [It(e)], Lo = (e, t, s) => {
  if (t._n)
    return t;
  const i = ro((...n) => ci(t(...n)), s);
  return i._c = !1, i;
}, Bn = (e, t, s) => {
  const i = e._ctx;
  for (const n in e) {
    if (ai(n)) continue;
    const r = e[n];
    if (F(r))
      t[n] = Lo(n, r, i);
    else if (r != null) {
      const o = ci(r);
      t[n] = () => o;
    }
  }
}, Un = (e, t) => {
  const s = ci(t);
  e.slots.default = () => s;
}, Vn = (e, t, s) => {
  for (const i in t)
    (s || !ai(i)) && (e[i] = t[i]);
}, ko = (e, t, s) => {
  const i = e.slots = jn();
  if (e.vnode.shapeFlag & 32) {
    const n = t.__;
    n && ks(i, "__", n, !0);
    const r = t._;
    r ? (Vn(i, t, s), s && ks(i, "_", r, !0)) : Bn(t, i);
  } else t && Un(e, t);
}, $o = (e, t, s) => {
  const { vnode: i, slots: n } = e;
  let r = !0, o = G;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? r = !1 : Vn(n, t, s) : (r = !t.$stable, Bn(t, n)), o = t;
  } else t && (Un(e, t), o = { default: 1 });
  if (r)
    for (const l in n)
      !ai(l) && o[l] == null && delete n[l];
}, wt = Xo;
function Io(e) {
  return No(e);
}
function No(e, t) {
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
    setScopeId: g = Nt,
    insertStaticContent: S
  } = e, A = (u, f, m, x = null, v = null, b = null, R = void 0, T = null, E = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !we(u, f) && (x = Ue(u), ct(u, v, b, !0), u = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: w, ref: $, shapeFlag: P } = f;
    switch (w) {
      case ys:
        N(u, f, m, x);
        break;
      case Zt:
        O(u, f, m, x);
        break;
      case Ms:
        u == null && M(f, m, x, R);
        break;
      case Pt:
        Ft(
          u,
          f,
          m,
          x,
          v,
          b,
          R,
          T,
          E
        );
        break;
      default:
        P & 1 ? D(
          u,
          f,
          m,
          x,
          v,
          b,
          R,
          T,
          E
        ) : P & 6 ? Qt(
          u,
          f,
          m,
          x,
          v,
          b,
          R,
          T,
          E
        ) : (P & 64 || P & 128) && w.process(
          u,
          f,
          m,
          x,
          v,
          b,
          R,
          T,
          E,
          ye
        );
    }
    $ != null && v ? Me($, u && u.ref, b, f || u, !f) : $ == null && u && u.ref != null && Me(u.ref, null, b, u, !0);
  }, N = (u, f, m, x) => {
    if (u == null)
      i(
        f.el = l(f.children),
        m,
        x
      );
    else {
      const v = f.el = u.el;
      f.children !== u.children && d(v, f.children);
    }
  }, O = (u, f, m, x) => {
    u == null ? i(
      f.el = a(f.children || ""),
      m,
      x
    ) : f.el = u.el;
  }, M = (u, f, m, x) => {
    [u.el, u.anchor] = S(
      u.children,
      f,
      m,
      x,
      u.el,
      u.anchor
    );
  }, L = ({ el: u, anchor: f }, m, x) => {
    let v;
    for (; u && u !== f; )
      v = p(u), i(u, m, x), u = v;
    i(f, m, x);
  }, C = ({ el: u, anchor: f }) => {
    let m;
    for (; u && u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, D = (u, f, m, x, v, b, R, T, E) => {
    f.type === "svg" ? R = "svg" : f.type === "math" && (R = "mathml"), u == null ? K(
      f,
      m,
      x,
      v,
      b,
      R,
      T,
      E
    ) : it(
      u,
      f,
      v,
      b,
      R,
      T,
      E
    );
  }, K = (u, f, m, x, v, b, R, T) => {
    let E, w;
    const { props: $, shapeFlag: P, transition: k, dirs: W } = u;
    if (E = u.el = o(
      u.type,
      b,
      $ && $.is,
      $
    ), P & 8 ? c(E, u.children) : P & 16 && Z(
      u.children,
      E,
      null,
      x,
      v,
      Ps(u, b),
      R,
      T
    ), W && te(u, null, x, "created"), q(E, u, u.scopeId, R, x), $) {
      for (const X in $)
        X !== "value" && !Te(X) && r(E, X, null, $[X], b, x);
      "value" in $ && r(E, "value", null, $.value, b), (w = $.onVnodeBeforeMount) && kt(w, x, u);
    }
    W && te(u, null, x, "beforeMount");
    const H = Wo(v, k);
    H && k.beforeEnter(E), i(E, f, m), ((w = $ && $.onVnodeMounted) || H || W) && wt(() => {
      w && kt(w, x, u), H && k.enter(E), W && te(u, null, x, "mounted");
    }, v);
  }, q = (u, f, m, x, v) => {
    if (m && g(u, m), x)
      for (let b = 0; b < x.length; b++)
        g(u, x[b]);
    if (v) {
      let b = v.subTree;
      if (f === b || Jn(b.type) && (b.ssContent === f || b.ssFallback === f)) {
        const R = v.vnode;
        q(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          v.parent
        );
      }
    }
  }, Z = (u, f, m, x, v, b, R, T, E = 0) => {
    for (let w = E; w < u.length; w++) {
      const $ = u[w] = T ? Xt(u[w]) : It(u[w]);
      A(
        null,
        $,
        f,
        m,
        x,
        v,
        b,
        R,
        T
      );
    }
  }, it = (u, f, m, x, v, b, R) => {
    const T = f.el = u.el;
    let { patchFlag: E, dynamicChildren: w, dirs: $ } = f;
    E |= u.patchFlag & 16;
    const P = u.props || G, k = f.props || G;
    let W;
    if (m && ee(m, !1), (W = k.onVnodeBeforeUpdate) && kt(W, m, f, u), $ && te(f, u, m, "beforeUpdate"), m && ee(m, !0), (P.innerHTML && k.innerHTML == null || P.textContent && k.textContent == null) && c(T, ""), w ? Q(
      u.dynamicChildren,
      w,
      T,
      m,
      x,
      Ps(f, v),
      b
    ) : R || _(
      u,
      f,
      T,
      null,
      m,
      x,
      Ps(f, v),
      b,
      !1
    ), E > 0) {
      if (E & 16)
        bt(T, P, k, m, v);
      else if (E & 2 && P.class !== k.class && r(T, "class", null, k.class, v), E & 4 && r(T, "style", P.style, k.style, v), E & 8) {
        const H = f.dynamicProps;
        for (let X = 0; X < H.length; X++) {
          const V = H[X], pt = P[V], gt = k[V];
          (gt !== pt || V === "value") && r(T, V, pt, gt, v, m);
        }
      }
      E & 1 && u.children !== f.children && c(T, f.children);
    } else !R && w == null && bt(T, P, k, m, v);
    ((W = k.onVnodeUpdated) || $) && wt(() => {
      W && kt(W, m, f, u), $ && te(f, u, m, "updated");
    }, x);
  }, Q = (u, f, m, x, v, b, R) => {
    for (let T = 0; T < f.length; T++) {
      const E = u[T], w = f[T], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Pt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !we(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? h(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      A(
        E,
        w,
        $,
        null,
        x,
        v,
        b,
        R,
        !0
      );
    }
  }, bt = (u, f, m, x, v) => {
    if (f !== m) {
      if (f !== G)
        for (const b in f)
          !Te(b) && !(b in m) && r(
            u,
            b,
            f[b],
            null,
            v,
            x
          );
      for (const b in m) {
        if (Te(b)) continue;
        const R = m[b], T = f[b];
        R !== T && b !== "value" && r(u, b, T, R, v, x);
      }
      "value" in m && r(u, "value", f.value, m.value, v);
    }
  }, Ft = (u, f, m, x, v, b, R, T, E) => {
    const w = f.el = u ? u.el : l(""), $ = f.anchor = u ? u.anchor : l("");
    let { patchFlag: P, dynamicChildren: k, slotScopeIds: W } = f;
    W && (T = T ? T.concat(W) : W), u == null ? (i(w, m, x), i($, m, x), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      m,
      $,
      v,
      b,
      R,
      T,
      E
    )) : P > 0 && P & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (Q(
      u.dynamicChildren,
      k,
      m,
      v,
      b,
      R,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && Kn(
      u,
      f,
      !0
      /* shallow */
    )) : _(
      u,
      f,
      m,
      $,
      v,
      b,
      R,
      T,
      E
    );
  }, Qt = (u, f, m, x, v, b, R, T, E) => {
    f.slotScopeIds = T, u == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      m,
      x,
      R,
      E
    ) : oe(
      f,
      m,
      x,
      v,
      b,
      R,
      E
    ) : Be(u, f, E);
  }, oe = (u, f, m, x, v, b, R) => {
    const T = u.component = nl(
      u,
      x,
      v
    );
    if (Ln(u) && (T.ctx.renderer = ye), rl(T, !1, R), T.asyncDep) {
      if (v && v.registerDep(T, nt, R), !u.el) {
        const E = T.subTree = Rt(Zt);
        O(null, E, f, m);
      }
    } else
      nt(
        T,
        u,
        f,
        m,
        v,
        b,
        R
      );
  }, Be = (u, f, m) => {
    const x = f.component = u.component;
    if (qo(u, f, m))
      if (x.asyncDep && !x.asyncResolved) {
        y(x, f, m);
        return;
      } else
        x.next = f, x.update();
    else
      f.el = u.el, x.vnode = f;
  }, nt = (u, f, m, x, v, b, R) => {
    const T = () => {
      if (u.isMounted) {
        let { next: P, bu: k, u: W, parent: H, vnode: X } = u;
        {
          const Dt = qn(u);
          if (Dt) {
            P && (P.el = X.el, y(u, P, R)), Dt.asyncDep.then(() => {
              u.isUnmounted || T();
            });
            return;
          }
        }
        let V = P, pt;
        ee(u, !1), P ? (P.el = X.el, y(u, P, R)) : P = X, k && Xe(k), (pt = P.props && P.props.onVnodeBeforeUpdate) && kt(pt, H, P, X), ee(u, !0);
        const gt = Di(u), Ot = u.subTree;
        u.subTree = gt, A(
          Ot,
          gt,
          // parent may have changed if it's in a teleport
          h(Ot.el),
          // anchor may have changed if it's in a fragment
          Ue(Ot),
          u,
          v,
          b
        ), P.el = gt.el, V === null && Go(u, gt.el), W && wt(W, v), (pt = P.props && P.props.onVnodeUpdated) && wt(
          () => kt(pt, H, P, X),
          v
        );
      } else {
        let P;
        const { el: k, props: W } = f, { bm: H, m: X, parent: V, root: pt, type: gt } = u, Ot = Ae(f);
        ee(u, !1), H && Xe(H), !Ot && (P = W && W.onVnodeBeforeMount) && kt(P, V, f), ee(u, !0);
        {
          pt.ce && // @ts-expect-error _def is private
          pt.ce._def.shadowRoot !== !1 && pt.ce._injectChildStyle(gt);
          const Dt = u.subTree = Di(u);
          A(
            null,
            Dt,
            m,
            x,
            u,
            v,
            b
          ), f.el = Dt.el;
        }
        if (X && wt(X, v), !Ot && (P = W && W.onVnodeMounted)) {
          const Dt = f;
          wt(
            () => kt(P, V, Dt),
            v
          );
        }
        (f.shapeFlag & 256 || V && Ae(V.vnode) && V.vnode.shapeFlag & 256) && u.a && wt(u.a, v), u.isMounted = !0, f = m = x = null;
      }
    };
    u.scope.on();
    const E = u.effect = new un(T);
    u.scope.off();
    const w = u.update = E.run.bind(E), $ = u.job = E.runIfDirty.bind(E);
    $.i = u, $.id = u.uid, E.scheduler = () => ni($), ee(u, !0), w();
  }, y = (u, f, m) => {
    f.component = u;
    const x = u.vnode.props;
    u.vnode = f, u.next = null, Oo(u, f.props, x, m), $o(u, f.children, m), Vt(), Ci(u), Kt();
  }, _ = (u, f, m, x, v, b, R, T, E = !1) => {
    const w = u && u.children, $ = u ? u.shapeFlag : 0, P = f.children, { patchFlag: k, shapeFlag: W } = f;
    if (k > 0) {
      if (k & 128) {
        yt(
          w,
          P,
          m,
          x,
          v,
          b,
          R,
          T,
          E
        );
        return;
      } else if (k & 256) {
        z(
          w,
          P,
          m,
          x,
          v,
          b,
          R,
          T,
          E
        );
        return;
      }
    }
    W & 8 ? ($ & 16 && be(w, v, b), P !== w && c(m, P)) : $ & 16 ? W & 16 ? yt(
      w,
      P,
      m,
      x,
      v,
      b,
      R,
      T,
      E
    ) : be(w, v, b, !0) : ($ & 8 && c(m, ""), W & 16 && Z(
      P,
      m,
      x,
      v,
      b,
      R,
      T,
      E
    ));
  }, z = (u, f, m, x, v, b, R, T, E) => {
    u = u || ce, f = f || ce;
    const w = u.length, $ = f.length, P = Math.min(w, $);
    let k;
    for (k = 0; k < P; k++) {
      const W = f[k] = E ? Xt(f[k]) : It(f[k]);
      A(
        u[k],
        W,
        m,
        null,
        v,
        b,
        R,
        T,
        E
      );
    }
    w > $ ? be(
      u,
      v,
      b,
      !0,
      !1,
      P
    ) : Z(
      f,
      m,
      x,
      v,
      b,
      R,
      T,
      E,
      P
    );
  }, yt = (u, f, m, x, v, b, R, T, E) => {
    let w = 0;
    const $ = f.length;
    let P = u.length - 1, k = $ - 1;
    for (; w <= P && w <= k; ) {
      const W = u[w], H = f[w] = E ? Xt(f[w]) : It(f[w]);
      if (we(W, H))
        A(
          W,
          H,
          m,
          null,
          v,
          b,
          R,
          T,
          E
        );
      else
        break;
      w++;
    }
    for (; w <= P && w <= k; ) {
      const W = u[P], H = f[k] = E ? Xt(f[k]) : It(f[k]);
      if (we(W, H))
        A(
          W,
          H,
          m,
          null,
          v,
          b,
          R,
          T,
          E
        );
      else
        break;
      P--, k--;
    }
    if (w > P) {
      if (w <= k) {
        const W = k + 1, H = W < $ ? f[W].el : x;
        for (; w <= k; )
          A(
            null,
            f[w] = E ? Xt(f[w]) : It(f[w]),
            m,
            H,
            v,
            b,
            R,
            T,
            E
          ), w++;
      }
    } else if (w > k)
      for (; w <= P; )
        ct(u[w], v, b, !0), w++;
    else {
      const W = w, H = w, X = /* @__PURE__ */ new Map();
      for (w = H; w <= k; w++) {
        const xt = f[w] = E ? Xt(f[w]) : It(f[w]);
        xt.key != null && X.set(xt.key, w);
      }
      let V, pt = 0;
      const gt = k - H + 1;
      let Ot = !1, Dt = 0;
      const _e = new Array(gt);
      for (w = 0; w < gt; w++) _e[w] = 0;
      for (w = W; w <= P; w++) {
        const xt = u[w];
        if (pt >= gt) {
          ct(xt, v, b, !0);
          continue;
        }
        let Lt;
        if (xt.key != null)
          Lt = X.get(xt.key);
        else
          for (V = H; V <= k; V++)
            if (_e[V - H] === 0 && we(xt, f[V])) {
              Lt = V;
              break;
            }
        Lt === void 0 ? ct(xt, v, b, !0) : (_e[Lt - H] = w + 1, Lt >= Dt ? Dt = Lt : Ot = !0, A(
          xt,
          f[Lt],
          m,
          null,
          v,
          b,
          R,
          T,
          E
        ), pt++);
      }
      const mi = Ot ? jo(_e) : ce;
      for (V = mi.length - 1, w = gt - 1; w >= 0; w--) {
        const xt = H + w, Lt = f[xt], vi = xt + 1 < $ ? f[xt + 1].el : x;
        _e[w] === 0 ? A(
          null,
          Lt,
          m,
          vi,
          v,
          b,
          R,
          T,
          E
        ) : Ot && (V < 0 || w !== mi[V] ? _t(Lt, m, vi, 2) : V--);
      }
    }
  }, _t = (u, f, m, x, v = null) => {
    const { el: b, type: R, transition: T, children: E, shapeFlag: w } = u;
    if (w & 6) {
      _t(u.component.subTree, f, m, x);
      return;
    }
    if (w & 128) {
      u.suspense.move(f, m, x);
      return;
    }
    if (w & 64) {
      R.move(u, f, m, ye);
      return;
    }
    if (R === Pt) {
      i(b, f, m);
      for (let P = 0; P < E.length; P++)
        _t(E[P], f, m, x);
      i(u.anchor, f, m);
      return;
    }
    if (R === Ms) {
      L(u, f, m);
      return;
    }
    if (x !== 2 && w & 1 && T)
      if (x === 0)
        T.beforeEnter(b), i(b, f, m), wt(() => T.enter(b), v);
      else {
        const { leave: P, delayLeave: k, afterLeave: W } = T, H = () => {
          u.ctx.isUnmounted ? n(b) : i(b, f, m);
        }, X = () => {
          P(b, () => {
            H(), W && W();
          });
        };
        k ? k(b, H, X) : X();
      }
    else
      i(b, f, m);
  }, ct = (u, f, m, x = !1, v = !1) => {
    const {
      type: b,
      props: R,
      ref: T,
      children: E,
      dynamicChildren: w,
      shapeFlag: $,
      patchFlag: P,
      dirs: k,
      cacheIndex: W
    } = u;
    if (P === -2 && (v = !1), T != null && (Vt(), Me(T, null, m, u, !0), Kt()), W != null && (f.renderCache[W] = void 0), $ & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const H = $ & 1 && k, X = !Ae(u);
    let V;
    if (X && (V = R && R.onVnodeBeforeUnmount) && kt(V, f, u), $ & 6)
      hr(u.component, m, x);
    else {
      if ($ & 128) {
        u.suspense.unmount(m, x);
        return;
      }
      H && te(u, null, f, "beforeUnmount"), $ & 64 ? u.type.remove(
        u,
        f,
        m,
        ye,
        x
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Pt || P > 0 && P & 64) ? be(
        w,
        f,
        m,
        !1,
        !0
      ) : (b === Pt && P & 384 || !v && $ & 16) && be(E, f, m), x && pi(u);
    }
    (X && (V = R && R.onVnodeUnmounted) || H) && wt(() => {
      V && kt(V, f, u), H && te(u, null, f, "unmounted");
    }, m);
  }, pi = (u) => {
    const { type: f, el: m, anchor: x, transition: v } = u;
    if (f === Pt) {
      fr(m, x);
      return;
    }
    if (f === Ms) {
      C(u);
      return;
    }
    const b = () => {
      n(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (u.shapeFlag & 1 && v && !v.persisted) {
      const { leave: R, delayLeave: T } = v, E = () => R(m, b);
      T ? T(u.el, b, E) : E();
    } else
      b();
  }, fr = (u, f) => {
    let m;
    for (; u !== f; )
      m = p(u), n(u), u = m;
    n(f);
  }, hr = (u, f, m) => {
    const {
      bum: x,
      scope: v,
      job: b,
      subTree: R,
      um: T,
      m: E,
      a: w,
      parent: $,
      slots: { __: P }
    } = u;
    Oi(E), Oi(w), x && Xe(x), $ && I(P) && P.forEach((k) => {
      $.renderCache[k] = void 0;
    }), v.stop(), b && (b.flags |= 8, ct(R, u, f, m)), T && wt(T, f), wt(() => {
      u.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, be = (u, f, m, x = !1, v = !1, b = 0) => {
    for (let R = b; R < u.length; R++)
      ct(u[R], f, m, x, v);
  }, Ue = (u) => {
    if (u.shapeFlag & 6)
      return Ue(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = p(u.anchor || u.el), m = f && f[oo];
    return m ? p(m) : f;
  };
  let xs = !1;
  const gi = (u, f, m) => {
    u == null ? f._vnode && ct(f._vnode, null, null, !0) : A(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      m
    ), f._vnode = u, xs || (xs = !0, Ci(), Mn(), xs = !1);
  }, ye = {
    p: A,
    um: ct,
    m: _t,
    r: pi,
    mt: oe,
    mc: Z,
    pc: _,
    pbc: Q,
    n: Ue,
    o: e
  };
  return {
    render: gi,
    hydrate: void 0,
    createApp: Po(gi)
  };
}
function Ps({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ee({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kn(e, t, s = !1) {
  const i = e.children, n = t.children;
  if (I(i) && I(n))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = n[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = n[r] = Xt(n[r]), l.el = o.el), !s && l.patchFlag !== -2 && Kn(o, l)), l.type === ys && (l.el = o.el), l.type === Zt && !l.el && (l.el = o.el);
    }
}
function jo(e) {
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
function qn(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qn(t);
}
function Oi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Fo = Symbol.for("v-scx"), Ho = () => Ye(Fo);
function re(e, t, s) {
  return Gn(e, t, s);
}
function Gn(e, t, s = G) {
  const { immediate: i, deep: n, flush: r, once: o } = s, l = st({}, s), a = t && i || !t && r !== "post";
  let d;
  if (Ne) {
    if (r === "sync") {
      const g = Ho();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Nt, g.resume = Nt, g.pause = Nt, g;
    }
  }
  const c = ht;
  l.call = (g, S, A) => jt(g, c, S, A);
  let h = !1;
  r === "post" ? l.scheduler = (g) => {
    wt(g, c && c.suspense);
  } : r !== "sync" && (h = !0, l.scheduler = (g, S) => {
    S ? g() : ni(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), h && (g.flags |= 2, c && (g.id = c.uid, g.i = c));
  };
  const p = eo(e, t, l);
  return Ne && (d ? d.push(p) : a && p()), p;
}
function zo(e, t, s) {
  const i = this.proxy, n = tt(e) ? e.includes(".") ? Xn(i, e) : () => i[e] : e.bind(i, i);
  let r;
  F(t) ? r = t : (r = t.handler, s = t);
  const o = He(this), l = Gn(n, r.bind(i), s);
  return o(), l;
}
function Xn(e, t) {
  const s = t.split(".");
  return () => {
    let i = e;
    for (let n = 0; n < s.length && i; n++)
      i = i[s[n]];
    return i;
  };
}
const Bo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mt(t)}Modifiers`] || e[`${St(t)}Modifiers`];
function Uo(e, t, ...s) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || G;
  let n = s;
  const r = t.startsWith("update:"), o = r && Bo(i, t.slice(7));
  o && (o.trim && (n = s.map((c) => tt(c) ? c.trim() : c)), o.number && (n = s.map(yr)));
  let l, a = i[l = ws(t)] || // also try camelCase event handler (#2249)
  i[l = ws(Mt(t))];
  !a && r && (a = i[l = ws(St(t))]), a && jt(
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
function Yn(e, t, s = !1) {
  const i = t.emitsCache, n = i.get(e);
  if (n !== void 0)
    return n;
  const r = e.emits;
  let o = {}, l = !1;
  if (!F(e)) {
    const a = (d) => {
      const c = Yn(d, t, !0);
      c && (l = !0, st(o, c));
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (J(e) && i.set(e, null), null) : (I(r) ? r.forEach((a) => o[a] = null) : st(o, r), J(e) && i.set(e, o), o);
}
function bs(e, t) {
  return !e || !ls(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), B(e, t[0].toLowerCase() + t.slice(1)) || B(e, St(t)) || B(e, t));
}
function Di(e) {
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
    ctx: S,
    inheritAttrs: A
  } = e, N = is(e);
  let O, M;
  try {
    if (s.shapeFlag & 4) {
      const C = n || i, D = C;
      O = It(
        d.call(
          D,
          C,
          c,
          h,
          g,
          p,
          S
        )
      ), M = l;
    } else {
      const C = t;
      O = It(
        C.length > 1 ? C(
          h,
          { attrs: l, slots: o, emit: a }
        ) : C(
          h,
          null
        )
      ), M = t.props ? l : Vo(l);
    }
  } catch (C) {
    De.length = 0, gs(C, e, 1), O = Rt(Zt);
  }
  let L = O;
  if (M && A !== !1) {
    const C = Object.keys(M), { shapeFlag: D } = L;
    C.length && D & 7 && (r && C.some(Ks) && (M = Ko(
      M,
      r
    )), L = me(L, M, !1, !0));
  }
  return s.dirs && (L = me(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs), s.transition && ri(L, s.transition), O = L, is(N), O;
}
const Vo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || ls(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ko = (e, t) => {
  const s = {};
  for (const i in e)
    (!Ks(i) || !(i.slice(9) in t)) && (s[i] = e[i]);
  return s;
};
function qo(e, t, s) {
  const { props: i, children: n, component: r } = e, { props: o, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Li(i, o, d) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const p = c[h];
        if (o[p] !== i[p] && !bs(d, p))
          return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Li(i, o, d) : !0 : !!o;
  return !1;
}
function Li(e, t, s) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    if (t[r] !== e[r] && !bs(s, r))
      return !0;
  }
  return !1;
}
function Go({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Jn = (e) => e.__isSuspense;
function Xo(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : no(e);
}
const Pt = Symbol.for("v-fgt"), ys = Symbol.for("v-txt"), Zt = Symbol.for("v-cmt"), Ms = Symbol.for("v-stc"), De = [];
let Ct = null;
function dt(e = !1) {
  De.push(Ct = e ? null : []);
}
function Yo() {
  De.pop(), Ct = De[De.length - 1] || null;
}
let Ie = 1;
function ki(e, t = !1) {
  Ie += e, e < 0 && Ct && t && (Ct.hasOnce = !0);
}
function Zn(e) {
  return e.dynamicChildren = Ie > 0 ? Ct || ce : null, Yo(), Ie > 0 && Ct && Ct.push(e), e;
}
function vt(e, t, s, i, n, r) {
  return Zn(
    j(
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
function Jo(e, t, s, i, n) {
  return Zn(
    Rt(
      e,
      t,
      s,
      i,
      n,
      !0
    )
  );
}
function Qn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function we(e, t) {
  return e.type === t.type && e.key === t.key;
}
const tr = ({ key: e }) => e ?? null, Je = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || at(e) || F(e) ? { i: Et, r: e, k: t, f: !!s } : e : null);
function j(e, t = null, s = null, i = 0, n = null, r = e === Pt ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tr(t),
    ref: t && Je(t),
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
    ctx: Et
  };
  return l ? (ui(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= tt(s) ? 8 : 16), Ie > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ct.push(a), a;
}
const Rt = Zo;
function Zo(e, t = null, s = null, i = 0, n = null, r = !1) {
  if ((!e || e === _o) && (e = Zt), Qn(e)) {
    const l = me(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && ui(l, s), Ie > 0 && !r && Ct && (l.shapeFlag & 6 ? Ct[Ct.indexOf(e)] = l : Ct.push(l)), l.patchFlag = -2, l;
  }
  if (cl(e) && (e = e.__vccOpts), t) {
    t = Qo(t);
    let { class: l, style: a } = t;
    l && !tt(l) && (t.class = ge(l)), J(a) && (si(a) && !I(a) && (a = st({}, a)), t.style = fs(a));
  }
  const o = tt(e) ? 1 : Jn(e) ? 128 : lo(e) ? 64 : J(e) ? 4 : F(e) ? 2 : 0;
  return j(
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
function Qo(e) {
  return e ? si(e) || Fn(e) ? st({}, e) : e : null;
}
function me(e, t, s = !1, i = !1) {
  const { props: n, ref: r, patchFlag: o, children: l, transition: a } = e, d = t ? el(n || {}, t) : n, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && tr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? I(r) ? r.concat(Je(t)) : [r, Je(t)] : Je(t)
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
    patchFlag: t && e.type !== Pt ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && me(e.ssContent),
    ssFallback: e.ssFallback && me(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && ri(
    c,
    a.clone(c)
  ), c;
}
function tl(e = " ", t = 0) {
  return Rt(ys, null, e, t);
}
function ie(e = "", t = !1) {
  return t ? (dt(), Jo(Zt, null, e)) : Rt(Zt, null, e);
}
function It(e) {
  return e == null || typeof e == "boolean" ? Rt(Zt) : I(e) ? Rt(
    Pt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qn(e) ? Xt(e) : Rt(ys, null, String(e));
}
function Xt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : me(e);
}
function ui(e, t) {
  let s = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (I(t))
    s = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), ui(e, n()), n._c && (n._d = !0));
      return;
    } else {
      s = 32;
      const n = t._;
      !n && !Fn(t) ? t._ctx = Et : n === 3 && Et && (Et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: Et }, s = 32) : (t = String(t), i & 64 ? (s = 16, t = [tl(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function el(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (const n in i)
      if (n === "class")
        t.class !== i.class && (t.class = ge([t.class, i.class]));
      else if (n === "style")
        t.style = fs([t.style, i.style]);
      else if (ls(n)) {
        const r = t[n], o = i[n];
        o && r !== o && !(I(r) && r.includes(o)) && (t[n] = r ? [].concat(r, o) : o);
      } else n !== "" && (t[n] = i[n]);
  }
  return t;
}
function kt(e, t, s, i = null) {
  jt(e, t, 7, [
    s,
    i
  ]);
}
const sl = Nn();
let il = 0;
function nl(e, t, s) {
  const i = e.type, n = (t ? t.appContext : e.appContext) || sl, r = {
    uid: il++,
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
    scope: new Rr(
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
    propsOptions: zn(i, n),
    emitsOptions: Yn(i, n),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Uo.bind(null, r), e.ce && e.ce(r), r;
}
let ht = null, rs, Bs;
{
  const e = ds(), t = (s, i) => {
    let n;
    return (n = e[s]) || (n = e[s] = []), n.push(i), (r) => {
      n.length > 1 ? n.forEach((o) => o(r)) : n[0](r);
    };
  };
  rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ht = s
  ), Bs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Ne = s
  );
}
const He = (e) => {
  const t = ht;
  return rs(e), e.scope.on(), () => {
    e.scope.off(), rs(t);
  };
}, $i = () => {
  ht && ht.scope.off(), rs(null);
};
function er(e) {
  return e.vnode.shapeFlag & 4;
}
let Ne = !1;
function rl(e, t = !1, s = !1) {
  t && Bs(t);
  const { props: i, children: n } = e.vnode, r = er(e);
  Ao(e, i, r, t), ko(e, n, s || t);
  const o = r ? ol(e, t) : void 0;
  return t && Bs(!1), o;
}
function ol(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xo);
  const { setup: i } = s;
  if (i) {
    Vt();
    const n = e.setupContext = i.length > 1 ? al(e) : null, r = He(e), o = Fe(
      i,
      e,
      0,
      [
        e.props,
        n
      ]
    ), l = sn(o);
    if (Kt(), r(), (l || e.sp) && !Ae(e) && Dn(e), l) {
      if (o.then($i, $i), t)
        return o.then((a) => {
          Ii(e, a);
        }).catch((a) => {
          gs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ii(e, o);
  } else
    sr(e);
}
function Ii(e, t, s) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) && (e.setupState = Tn(t)), sr(e);
}
function sr(e, t, s) {
  const i = e.type;
  e.render || (e.render = i.render || Nt);
  {
    const n = He(e);
    Vt();
    try {
      wo(e);
    } finally {
      Kt(), n();
    }
  }
}
const ll = {
  get(e, t) {
    return lt(e, "get", ""), e[t];
  }
};
function al(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, ll),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Tn(Gr(e.exposed)), {
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
function cl(e) {
  return F(e) && "__vccOpts" in e;
}
const ir = (e, t) => Qr(e, t, Ne), ul = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Us;
const Ni = typeof window < "u" && window.trustedTypes;
if (Ni)
  try {
    Us = /* @__PURE__ */ Ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nr = Us ? (e) => Us.createHTML(e) : (e) => e, dl = "http://www.w3.org/2000/svg", fl = "http://www.w3.org/1998/Math/MathML", zt = typeof document < "u" ? document : null, Wi = zt && /* @__PURE__ */ zt.createElement("template"), hl = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, i) => {
    const n = t === "svg" ? zt.createElementNS(dl, e) : t === "mathml" ? zt.createElementNS(fl, e) : s ? zt.createElement(e, { is: s }) : zt.createElement(e);
    return e === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (e) => zt.createTextNode(e),
  createComment: (e) => zt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zt.querySelector(e),
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
      Wi.innerHTML = nr(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Wi.content;
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
}, pl = Symbol("_vtc");
function gl(e, t, s) {
  const i = e[pl];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const os = Symbol("_vod"), rr = Symbol("_vsh"), ml = {
  beforeMount(e, { value: t }, { transition: s }) {
    e[os] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Ce(e, t);
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
  e.style.display = t ? e[os] : "none", e[rr] = !t;
}
const vl = Symbol(""), bl = /(^|;)\s*display\s*:/;
function yl(e, t, s) {
  const i = e.style, n = tt(s);
  let r = !1;
  if (s && !n) {
    if (t)
      if (tt(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Ze(i, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Ze(i, o, "");
    for (const o in s)
      o === "display" && (r = !0), Ze(i, o, s[o]);
  } else if (n) {
    if (t !== s) {
      const o = i[vl];
      o && (s += ";" + o), i.cssText = s, r = bl.test(s);
    }
  } else t && e.removeAttribute("style");
  os in e && (e[os] = r ? i.display : "", e[rr] && (i.display = "none"));
}
const ji = /\s*!important$/;
function Ze(e, t, s) {
  if (I(s))
    s.forEach((i) => Ze(e, t, i));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const i = _l(e, t);
    ji.test(s) ? e.setProperty(
      St(i),
      s.replace(ji, ""),
      "important"
    ) : e[i] = s;
  }
}
const Fi = ["Webkit", "Moz", "ms"], As = {};
function _l(e, t) {
  const s = As[t];
  if (s)
    return s;
  let i = Mt(t);
  if (i !== "filter" && i in e)
    return As[t] = i;
  i = rn(i);
  for (let n = 0; n < Fi.length; n++) {
    const r = Fi[n] + i;
    if (r in e)
      return As[t] = r;
  }
  return t;
}
const Hi = "http://www.w3.org/1999/xlink";
function zi(e, t, s, i, n, r = Er(t)) {
  i && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Hi, t.slice(6, t.length)) : e.setAttributeNS(Hi, t, s) : s == null || r && !on(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Wt(s) ? String(s) : s
  );
}
function Bi(e, t, s, i, n) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? nr(s) : s);
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
    l === "boolean" ? s = on(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(n || t);
}
function or(e, t, s, i) {
  e.addEventListener(t, s, i);
}
function xl(e, t, s, i) {
  e.removeEventListener(t, s, i);
}
const Ui = Symbol("_vei");
function wl(e, t, s, i, n = null) {
  const r = e[Ui] || (e[Ui] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [l, a] = Cl(t);
    if (i) {
      const d = r[t] = Tl(
        i,
        n
      );
      or(e, l, d, a);
    } else o && (xl(e, l, o, a), r[t] = void 0);
  }
}
const Vi = /(?:Once|Passive|Capture)$/;
function Cl(e) {
  let t;
  if (Vi.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Vi); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : St(e.slice(2)), t];
}
let Os = 0;
const Sl = /* @__PURE__ */ Promise.resolve(), El = () => Os || (Sl.then(() => Os = 0), Os = Date.now());
function Tl(e, t) {
  const s = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= s.attached)
      return;
    jt(
      Rl(i, s.value),
      t,
      5,
      [i]
    );
  };
  return s.value = e, s.attached = El(), s;
}
function Rl(e, t) {
  if (I(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (i) => (n) => !n._stopped && i && i(n)
    );
  } else
    return t;
}
const Ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Pl = (e, t, s, i, n, r) => {
  const o = n === "svg";
  t === "class" ? gl(e, i, o) : t === "style" ? yl(e, s, i) : ls(t) ? Ks(t) || wl(e, t, s, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ml(e, t, i, o)) ? (Bi(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zi(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !tt(i)) ? Bi(e, Mt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), zi(e, t, i, o));
};
function Ml(e, t, s, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ki(t) && F(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Ki(t) && tt(s) ? !1 : t in e;
}
const qi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Al(e, t, s) {
  const i = /* @__PURE__ */ ms(e, t);
  cs(i) && st(i, t);
  class n extends di {
    constructor(o) {
      super(i, o, s);
    }
  }
  return n.def = i, n;
}
const Ol = typeof HTMLElement < "u" ? HTMLElement : class {
};
class di extends Ol {
  constructor(t, s = {}, i = Ji) {
    super(), this._def = t, this._props = s, this._createApp = i, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && i !== Ji ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof di) {
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
    this._connected = !1, ii(() => {
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
      if (r && !I(r))
        for (const a in r) {
          const d = r[a];
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = yi(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Mt(a)] = !0);
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
          get: () => En(s[i])
        });
  }
  _resolveProps(t) {
    const { props: s } = t, i = I(s) ? s : Object.keys(s || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n]);
    for (const n of i.map(Mt))
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
    let i = s ? this.getAttribute(t) : qi;
    const n = Mt(t);
    s && this._numberProps && this._numberProps[n] && (i = yi(i)), this._setProp(n, i, !1, !0);
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
    if (s !== this._props[t] && (s === qi ? delete this._props[t] : (this._props[t] = s, t === "key" && this._app && (this._app._ceVNode.key = s)), n && this._instance && this._update(), i)) {
      const r = this._ob;
      r && r.disconnect(), s === !0 ? this.setAttribute(St(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(St(t), s + "") : s || this.removeAttribute(St(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), $l(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const s = Rt(this._def, st(t, this._props));
    return this._instance || (s.ce = (i) => {
      this._instance = i, i.ce = this, i.isCE = !0;
      const n = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            cs(o[0]) ? st({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      i.emit = (r, ...o) => {
        n(r, o), St(r) !== r && n(St(r), o);
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
const Gi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (s) => Xe(t, s) : t;
}, Ds = Symbol("_assign"), Dl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, s) {
    e[Ds] = Gi(s), or(e, "change", () => {
      const i = e._modelValue, n = Ll(e), r = e.checked, o = e[Ds];
      if (I(i)) {
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
        o(lr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Xi,
  beforeUpdate(e, t, s) {
    e[Ds] = Gi(s), Xi(e, t, s);
  }
};
function Xi(e, { value: t, oldValue: s }, i) {
  e._modelValue = t;
  let n;
  if (I(t))
    n = ln(t, i.props.value) > -1;
  else if (as(t))
    n = t.has(i.props.value);
  else {
    if (t === s) return;
    n = hs(t, lr(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
function Ll(e) {
  return "_value" in e ? e._value : e.value;
}
function lr(e, t) {
  const s = t ? "_trueValue" : "_falseValue";
  return s in e ? e[s] : t;
}
const kl = /* @__PURE__ */ st({ patchProp: Pl }, hl);
let Yi;
function ar() {
  return Yi || (Yi = Io(kl));
}
const $l = (...e) => {
  ar().render(...e);
}, Ji = (...e) => {
  const t = ar().createApp(...e), { mount: s } = t;
  return t.mount = (i) => {
    const n = Nl(i);
    if (!n) return;
    const r = t._component;
    !F(r) && !r.render && !r.template && (r.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const o = s(n, !1, Il(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), o;
  }, t;
};
function Il(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nl(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function ot(e, t, s, i) {
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
let ze = class {
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
const Ge = { decode: function(e, t) {
  return ot(this, void 0, void 0, function* () {
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
function cr(e, t) {
  const s = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
  for (const [i, n] of Object.entries(t)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(cr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Zi(e, t, s) {
  const i = cr(e, t || {});
  return s == null || s.appendChild(i), i;
}
var Wl = Object.freeze({ __proto__: null, createElement: Zi, default: Zi });
const jl = { fetchBlob: function(e, t, s) {
  return ot(this, void 0, void 0, function* () {
    const i = yield fetch(e, s);
    if (i.status >= 400) throw new Error(`Failed to fetch ${e}: ${i.status} (${i.statusText})`);
    return function(n, r) {
      ot(this, void 0, void 0, function* () {
        if (!n.body || !n.headers) return;
        const o = n.body.getReader(), l = Number(n.headers.get("Content-Length")) || 0;
        let a = 0;
        const d = (h) => ot(this, void 0, void 0, function* () {
          a += (h == null ? void 0 : h.length) || 0;
          const p = Math.round(a / l * 100);
          r(p);
        }), c = () => ot(this, void 0, void 0, function* () {
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
class Fl extends ze {
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
    return ot(this, void 0, void 0, function* () {
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
class ve extends ze {
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
        let p = h.clientX, g = h.clientY, S = !1;
        const A = Date.now(), N = (D) => {
          if (D.preventDefault(), D.stopPropagation(), a && Date.now() - A < l) return;
          const K = D.clientX, q = D.clientY, Z = K - p, it = q - g;
          if (S || Math.abs(Z) > r || Math.abs(it) > r) {
            const Q = t.getBoundingClientRect(), { left: bt, top: Ft } = Q;
            S || (i == null || i(p - bt, g - Ft), S = !0), s(Z, it, K - bt, q - Ft), p = K, g = q;
          }
        }, O = (D) => {
          if (S) {
            const K = D.clientX, q = D.clientY, Z = t.getBoundingClientRect(), { left: it, top: Q } = Z;
            n == null || n(K - it, q - Q);
          }
          d();
        }, M = (D) => {
          D.relatedTarget && D.relatedTarget !== document.documentElement || O(D);
        }, L = (D) => {
          S && (D.stopPropagation(), D.preventDefault());
        }, C = (D) => {
          S && D.preventDefault();
        };
        document.addEventListener("pointermove", N), document.addEventListener("pointerup", O), document.addEventListener("pointerout", M), document.addEventListener("pointercancel", M), document.addEventListener("touchmove", C, { passive: !1 }), document.addEventListener("click", L, { capture: !0 }), d = () => {
          document.removeEventListener("pointermove", N), document.removeEventListener("pointerup", O), document.removeEventListener("pointerout", M), document.removeEventListener("pointercancel", M), document.removeEventListener("touchmove", C), setTimeout(() => {
            document.removeEventListener("click", L, { capture: !0 });
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
    const r = t[0], o = t[1] || t[0], l = r.length, { width: a, height: d } = i.canvas, c = d / 2, h = this.getPixelRatio(), p = s.barWidth ? s.barWidth * h : 1, g = s.barGap ? s.barGap * h : s.barWidth ? p / 2 : 0, S = s.barRadius || 0, A = a / (p + g) / l, N = S && "roundRect" in i ? "roundRect" : "rect";
    i.beginPath();
    let O = 0, M = 0, L = 0;
    for (let C = 0; C <= l; C++) {
      const D = Math.round(C * A);
      if (D > O) {
        const Z = Math.round(M * c * n), it = Z + Math.round(L * c * n) || 1;
        let Q = c - Z;
        s.barAlign === "top" ? Q = 0 : s.barAlign === "bottom" && (Q = d - it), i[N](O * (p + g), Q, p, it, S), O = D, M = 0, L = 0;
      }
      const K = Math.abs(r[C] || 0), q = Math.abs(o[C] || 0);
      K > M && (M = K), q > L && (L = q);
    }
    i.fill(), i.closePath();
  }
  renderLineWaveform(t, s, i, n) {
    const r = (o) => {
      const l = t[o] || t[0], a = l.length, { height: d } = i.canvas, c = d / 2, h = i.canvas.width / a;
      i.moveTo(0, c);
      let p = 0, g = 0;
      for (let S = 0; S <= a; S++) {
        const A = Math.round(S * h);
        if (A > p) {
          const O = c + (Math.round(g * c * n) || 1) * (o === 0 ? -1 : 1);
          i.lineTo(p, O), p = A, g = 0;
        }
        const N = Math.abs(l[S] || 0);
        N > g && (g = N);
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
    let c = Math.min(ve.MAX_CANVAS_WIDTH, a, d), h = {};
    if (s.barWidth || s.barGap) {
      const N = s.barWidth || 0.5, O = N + (s.barGap || N / 2);
      c % O != 0 && (c = Math.floor(c / O) * O);
    }
    if (c === 0) return;
    const p = (N) => {
      if (N < 0 || N >= g || h[N]) return;
      h[N] = !0;
      const O = N * c;
      let M = Math.min(d - O, c);
      if (s.barWidth || s.barGap) {
        const C = s.barWidth || 0.5, D = C + (s.barGap || C / 2);
        M = Math.floor(M / D) * D;
      }
      if (M <= 0) return;
      const L = t.map((C) => {
        const D = Math.floor(O / d * C.length), K = Math.floor((O + M) / d * C.length);
        return C.slice(D, K);
      });
      this.renderSingleCanvas(L, s, M, n, O, r, o);
    }, g = Math.ceil(d / c);
    if (!this.isScrollable) {
      for (let N = 0; N < g; N++) p(N);
      return;
    }
    const S = this.scrollContainer.scrollLeft / d, A = Math.floor(S * g);
    if (p(A - 1), p(A), p(A + 1), g > 1) {
      const N = this.on("scroll", () => {
        const { scrollLeft: O } = this.scrollContainer, M = Math.floor(O / d * g);
        Object.keys(h).length > ve.MAX_NODES && (r.innerHTML = "", o.innerHTML = "", h = {}), p(M - 1), p(M), p(M + 1);
      });
      this.unsubscribeOnScroll.push(N);
    }
  }
  renderChannel(t, s, i, n) {
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
    this.progressWrapper.appendChild(d), this.renderMultiCanvas(t, o, i, a, l, d);
  }
  render(t) {
    return ot(this, void 0, void 0, function* () {
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
    return ot(this, void 0, void 0, function* () {
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
ve.MAX_CANVAS_WIDTH = 8e3, ve.MAX_NODES = 10;
class Hl extends ze {
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
class Ls extends ze {
  constructor(t = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = !1, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = !0, this.crossOrigin = null, this.seeking = !1, this.autoplay = !1, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return ot(this, void 0, void 0, function* () {
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
    return ot(this, void 0, void 0, function* () {
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
    return ot(this, void 0, void 0, function* () {
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
const zl = { waveColor: "#999", progressColor: "#555", cursorWidth: 1, minPxPerSec: 0, fillParent: !0, interact: !0, dragToSeek: !1, autoScroll: !0, autoCenter: !0, sampleRate: 8e3 };
class We extends Fl {
  static create(t) {
    return new We(t);
  }
  constructor(t) {
    const s = t.media || (t.backend === "WebAudio" ? new Ls() : void 0);
    super({ media: s, mediaControls: t.mediaControls, autoplay: t.autoplay, playbackRate: t.audioRate }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, zl, t), this.timer = new Hl();
    const i = s ? void 0 : this.getMediaElement();
    this.renderer = new ve(this.options, i), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
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
    this.options = Object.assign({}, this.options, t), t.duration && !t.peaks && (this.decodedData = Ge.createBuffer(this.exportPeaks(), t.duration)), t.peaks && t.duration && (this.decodedData = Ge.createBuffer(t.peaks, t.duration)), this.renderer.setOptions(this.options), t.audioRate && this.setPlaybackRate(t.audioRate), t.mediaControls != null && (this.getMediaElement().controls = t.mediaControls);
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
    return ot(this, void 0, void 0, function* () {
      var r;
      if (this.emit("load", t), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s && !i) {
        const l = this.options.fetchParams || {};
        window.AbortController && !l.signal && (this.abortController = new AbortController(), l.signal = (r = this.abortController) === null || r === void 0 ? void 0 : r.signal);
        const a = (c) => this.emit("loading", c);
        s = yield jl.fetchBlob(t, a, l);
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
        l instanceof Ls && (l.duration = o);
      }
      if (i) this.decodedData = Ge.createBuffer(i, o || 0);
      else if (s) {
        const l = yield s.arrayBuffer();
        this.decodedData = yield Ge.decode(l, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(t, s, i) {
    return ot(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(t, void 0, s, i);
      } catch (n) {
        throw this.emit("error", n), n;
      }
    });
  }
  loadBlob(t, s, i) {
    return ot(this, void 0, void 0, function* () {
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
    return ot(this, void 0, void 0, function* () {
      t != null && this.setTime(t);
      const n = yield i.play.call(this);
      return s != null && (this.media instanceof Ls ? this.media.stopAt(s) : this.stopAtPosition = s), n;
    });
  }
  playPause() {
    return ot(this, void 0, void 0, function* () {
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
    return ot(this, arguments, void 0, function* (t = "image/png", s = 1, i = "dataURL") {
      return this.renderer.exportImage(t, s, i);
    });
  }
  destroy() {
    var t;
    this.emit("destroy"), (t = this.abortController) === null || t === void 0 || t.abort(), this.plugins.forEach((s) => s.destroy()), this.subscriptions.forEach((s) => s()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
}
We.BasePlugin = class extends ze {
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
}, We.dom = Wl;
class ur {
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
class Bl extends ur {
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
function Qe(e, t, s, i, n = 3, r = 0, o = 100) {
  if (!e) return () => {
  };
  const l = matchMedia("(pointer: coarse)").matches;
  let a = () => {
  };
  const d = (c) => {
    if (c.button !== r) return;
    c.preventDefault(), c.stopPropagation();
    let h = c.clientX, p = c.clientY, g = !1;
    const S = Date.now(), A = (C) => {
      if (C.preventDefault(), C.stopPropagation(), l && Date.now() - S < o) return;
      const D = C.clientX, K = C.clientY, q = D - h, Z = K - p;
      if (g || Math.abs(q) > n || Math.abs(Z) > n) {
        const it = e.getBoundingClientRect(), { left: Q, top: bt } = it;
        g || (s == null || s(h - Q, p - bt), g = !0), t(q, Z, D - Q, K - bt), h = D, p = K;
      }
    }, N = (C) => {
      if (g) {
        const D = C.clientX, K = C.clientY, q = e.getBoundingClientRect(), { left: Z, top: it } = q;
        i == null || i(D - Z, K - it);
      }
      a();
    }, O = (C) => {
      C.relatedTarget && C.relatedTarget !== document.documentElement || N(C);
    }, M = (C) => {
      g && (C.stopPropagation(), C.preventDefault());
    }, L = (C) => {
      g && C.preventDefault();
    };
    document.addEventListener("pointermove", A), document.addEventListener("pointerup", N), document.addEventListener("pointerout", O), document.addEventListener("pointercancel", O), document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("click", M, { capture: !0 }), a = () => {
      document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", N), document.removeEventListener("pointerout", O), document.removeEventListener("pointercancel", O), document.removeEventListener("touchmove", L), setTimeout(() => {
        document.removeEventListener("click", M, { capture: !0 });
      }, 10);
    };
  };
  return e.addEventListener("pointerdown", d), () => {
    a(), e.removeEventListener("pointerdown", d);
  };
}
function dr(e, t) {
  const s = t.xmlns ? document.createElementNS(t.xmlns, e) : document.createElement(e);
  for (const [i, n] of Object.entries(t)) if (i === "children" && n) for (const [r, o] of Object.entries(n)) o instanceof Node ? s.appendChild(o) : typeof o == "string" ? s.appendChild(document.createTextNode(o)) : s.appendChild(dr(r, o));
  else i === "style" ? Object.assign(s.style, n) : i === "textContent" ? s.textContent = n : s.setAttribute(i, n.toString());
  return s;
}
function Ee(e, t, s) {
  const i = dr(e, t || {});
  return s == null || s.appendChild(i), i;
}
class Qi extends ur {
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
    this.subscriptions.push(Qe(i, (r) => this.onResize(r, "start"), () => null, () => this.onEndResizing(), 1), Qe(n, (r) => this.onResize(r, "end"), () => null, () => this.onEndResizing(), 1));
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
    t && (t.addEventListener("click", (s) => this.emit("click", s)), t.addEventListener("mouseenter", (s) => this.emit("over", s)), t.addEventListener("mouseleave", (s) => this.emit("leave", s)), t.addEventListener("dblclick", (s) => this.emit("dblclick", s)), t.addEventListener("pointerdown", () => this.toggleCursor(!0)), t.addEventListener("pointerup", () => this.toggleCursor(!1)), this.subscriptions.push(Qe(t, (s) => this.onMove(s), () => this.toggleCursor(!0), () => {
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
class fi extends Bl {
  constructor(t) {
    super(t), this.regions = [], this.regionsContainer = this.initRegionsContainer();
  }
  static create(t) {
    return new fi(t);
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
    const n = this.wavesurfer.getDuration(), r = (i = (s = this.wavesurfer) === null || s === void 0 ? void 0 : s.getDecodedData()) === null || i === void 0 ? void 0 : i.numberOfChannels, o = new Qi(t, n, r);
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
    return Qe(n, (l, a, d) => {
      r && r._onUpdate(l, d > o ? "end" : "start");
    }, (l) => {
      var a, d;
      if (o = l, !this.wavesurfer) return;
      const c = this.wavesurfer.getDuration(), h = (d = (a = this.wavesurfer) === null || a === void 0 ? void 0 : a.getDecodedData()) === null || d === void 0 ? void 0 : d.numberOfChannels, { width: p } = this.wavesurfer.getWrapper().getBoundingClientRect(), g = l / p * c, S = (l + 5) / p * c;
      r = new Qi(Object.assign(Object.assign({}, t), { start: g, end: S }), c, h), this.emit("region-initialized", r), r.element && this.regionsContainer.appendChild(r.element);
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
const Ul = { class: "waveform-player card" }, Vl = { class: "card-header" }, Kl = { class: "switch" }, ql = { class: "waveform-wrapper flex-1" }, Gl = {
  key: 0,
  class: "overlay"
}, Xl = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, Yl = {
  key: 0,
  class: "controls"
}, Jl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512",
  width: "12",
  fill: "white"
}, Zl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512",
  width: "12",
  fill: "white"
}, Ql = { class: "time-display" }, ta = { class: "current-time" }, ea = { class: "duration" }, sa = /* @__PURE__ */ ms({
  __name: "WaveformPlayer",
  props: {
    audioFile: { type: null },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["timeUpdate", "ready", "regionsSelected"],
  setup(e, { expose: t, emit: s }) {
    const i = e, n = s, r = et(), o = et(null), l = et(!1), a = et(0), d = et(0), c = et(!1), h = et(!1), p = et(!1), g = et(!1), S = et(), A = et(!1), N = ir(() => i.isLoading || h.value), O = (y, _) => Math.random() * (_ - y) + y, M = () => `rgba(${O(0, 255)}, ${O(0, 255)}, ${O(0, 255)}, 0.5)`;
    let L = fi.create();
    const C = () => M();
    function D() {
      const y = L.getRegions().map((_) => {
        var z;
        return { start: _.start, end: _.end, color: _.color || ((z = _.options) == null ? void 0 : z.color) || C() };
      });
      n("regionsSelected", y);
    }
    re(() => i.audioFile, async (y) => {
      if (y && (!o.value && r.value && await K(), o.value))
        try {
          const _ = URL.createObjectURL(y);
          h.value = !0, await o.value.load(_);
        } catch (_) {
          console.error("Error loading audio file:", _);
        }
    }), re(p, (y) => {
      if (!y) {
        const _ = L.getRegions();
        _.length > 1 && (_.slice(0, -1).forEach((z) => z.remove()), D());
      }
    }), re(S, (y) => {
      y && (y.addEventListener("dragover", (_) => {
        _.preventDefault(), g.value = !0;
      }), y.addEventListener("dragleave", () => {
        g.value = !1;
      }), y.addEventListener("drop", (_) => {
        var yt;
        _.preventDefault();
        const z = (yt = _.dataTransfer) == null ? void 0 : yt.getData("text/plain");
        if (z) {
          const _t = L.getRegions().find((ct) => ct.id === z);
          _t && (_t.remove(), D());
        }
        g.value = !1;
      }));
    });
    const K = async () => {
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
            plugins: [L]
          }), L.enableDragSelection({ color: C() }, 0), L.on("region-created", (y) => {
            y.setOptions({ color: C() }), oe(y), nt(y), p.value || L.getRegions().forEach((z) => {
              z !== y && z.remove();
            }), D();
          }), L.on("region-updated", D), L.on("region-removed", D), L.on("region-clicked", (y, _) => {
            _.stopPropagation(), o.value && (o.value.setTime(y.start), a.value = y.start, n("timeUpdate", y.start));
          }), o.value.on("ready", () => {
            var y;
            c.value = !0, d.value = ((y = o.value) == null ? void 0 : y.getDuration()) || 0, h.value = !1, n("ready");
          }), o.value.on("play", () => {
            l.value = !0;
          }), o.value.on("pause", () => {
            l.value = !1;
          }), o.value.on("finish", () => {
            l.value = !1, a.value = 0;
          }), o.value.on("timeupdate", (y) => {
            a.value = y, n("timeUpdate", y);
          }), o.value.on("seeking", (y) => {
            a.value = y, n("timeUpdate", y);
          });
        } catch (y) {
          console.error("Error initializing WaveSurfer:", y);
        }
    }, q = () => {
      !o.value || !c.value || (l.value ? o.value.pause() : o.value.play());
    }, Z = () => {
      o.value && (o.value.stop(), a.value = 0);
    }, it = (y) => {
      if (!o.value || !c.value) return;
      const _ = y / d.value;
      o.value.seekTo(_);
    }, Q = (y) => {
      const _ = Math.floor(y / 60), z = Math.floor(y % 60);
      return `${_.toString().padStart(2, "0")}:${z.toString().padStart(2, "0")}`;
    }, bt = () => {
      A.value = !A.value, A.value ? Ft() : Qt();
    };
    function Ft() {
      L.getRegions().forEach((y) => oe(y));
    }
    function Qt() {
      L.getRegions().forEach((y) => Be(y));
    }
    function oe(y) {
      var ct;
      if (y.__delAttached) return;
      const _ = y.element;
      if (!_) return;
      y._origColor = y.color || ((ct = y.options) == null ? void 0 : ct.color);
      const z = () => {
        A.value && y.setOptions({ color: "rgba(255,0,0,0.4)" });
      }, yt = () => {
        A.value && y.setOptions({ color: y._origColor });
      }, _t = () => {
        A.value && (y.remove(), D(), A.value = !1, Qt());
      };
      _.addEventListener("mouseenter", z), _.addEventListener("mouseleave", yt), _.addEventListener("click", _t), y.__delAttached = { enter: z, leave: yt, click: _t };
    }
    function Be(y) {
      const _ = y.__delAttached;
      if (!_ || !y.element) return;
      const z = y.element;
      z.removeEventListener("mouseenter", _.enter), z.removeEventListener("mouseleave", _.leave), z.removeEventListener("click", _.click), y.setOptions({ color: y._origColor }), delete y.__delAttached;
    }
    function nt(y) {
      if (!(y != null && y.element)) return;
      const _ = y.element;
      _.setAttribute("draggable", "true"), _.addEventListener("dragstart", (z) => {
        var yt;
        (yt = z.dataTransfer) == null || yt.setData("text/plain", y.id), document.body.classList.add("dragging-region");
      }), _.addEventListener("dragend", () => {
        document.body.classList.remove("dragging-region"), g.value = !1;
      });
    }
    return oi(async () => {
      await ii(), await K();
    }), li(() => {
      o.value && o.value.destroy();
    }), t({
      seekTo: it,
      togglePlayPause: q,
      stop: Z
    }), (y, _) => (dt(), vt("div", Ul, [
      j("div", Vl, [
        _[4] || (_[4] = j("i", { class: "mdi mdi-waveform icon" }, null, -1)),
        _[5] || (_[5] = j("span", { class: "title" }, "Audio Waveform", -1)),
        _[6] || (_[6] = j("div", { class: "flex-1" }, null, -1)),
        j("label", Kl, [
          Si(j("input", {
            type: "checkbox",
            "onUpdate:modelValue": _[0] || (_[0] = (z) => p.value = z)
          }, null, 512), [
            [Dl, p.value]
          ]),
          _[1] || (_[1] = j("span", { class: "slider" }, null, -1)),
          _[2] || (_[2] = j("span", { class: "switch-label" }, "Multiple", -1))
        ]),
        j("button", {
          class: ge(["btn btn-icon", { shake: A.value, "btn-danger": A.value }]),
          onClick: bt,
          title: "Delete mode"
        }, _[3] || (_[3] = [
          j("i", { class: "mdi mdi-delete" }, null, -1)
        ]), 2)
      ]),
      j("div", ql, [
        N.value ? (dt(), vt("div", Gl, _[7] || (_[7] = [
          j("div", { class: "spinner" }, null, -1)
        ]))) : ie("", !0),
        y.audioFile ? ie("", !0) : (dt(), vt("div", Xl, _[8] || (_[8] = [
          j("i", {
            class: "mdi mdi-waveform icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          j("p", { class: "text-muted mt-4" }, "Load an audio file to see waveform", -1)
        ]))),
        Si(j("div", {
          ref_key: "waveformContainer",
          ref: r,
          class: "waveform-container"
        }, null, 512), [
          [ml, y.audioFile]
        ])
      ]),
      y.audioFile ? (dt(), vt("div", Yl, [
        j("button", {
          class: ge(["btn btn-icon", { "btn-danger": l.value }]),
          onClick: q,
          title: "Play / Pause"
        }, [
          l.value ? ie("", !0) : (dt(), vt("svg", Jl, _[9] || (_[9] = [
            j("path", { d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" }, null, -1)
          ]))),
          l.value ? (dt(), vt("svg", Zl, _[10] || (_[10] = [
            j("path", { d: "M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" }, null, -1)
          ]))) : ie("", !0)
        ], 2),
        j("button", {
          class: "btn btn-icon btn-outline",
          onClick: Z,
          title: "Stop"
        }, _[11] || (_[11] = [
          j("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            width: "12",
            fill: "#1976d2"
          }, [
            j("path", { d: "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" })
          ], -1)
        ])),
        _[13] || (_[13] = j("div", { class: "flex-1" }, null, -1)),
        j("div", Ql, [
          j("span", ta, de(Q(a.value)), 1),
          _[12] || (_[12] = j("span", { class: "separator" }, "/", -1)),
          j("span", ea, de(Q(d.value)), 1)
        ])
      ])) : ie("", !0)
    ]));
  }
}), ia = '.waveform-wrapper[data-v-6bca7151]{flex:1;display:flex;align-items:center;justify-content:center;padding:16px}.empty-state[data-v-6bca7151]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-6bca7151]{font-size:18px;margin:0}.waveform-container[data-v-6bca7151]{width:100%;background:#fff;border-radius:8px}.card-header[data-v-6bca7151]{display:flex;align-items:center;padding:16px;gap:8px;margin-bottom:8px}.switch[data-v-6bca7151]{position:relative;display:inline-flex;align-items:center;margin-right:8px}.switch input[data-v-6bca7151]{opacity:0;width:0;height:0}.switch .slider[data-v-6bca7151]{width:34px;height:14px;background:#ccc;border-radius:14px;position:relative;transition:background .2s;margin-right:4px}.switch .slider[data-v-6bca7151]:before{content:"";position:absolute;width:18px;height:18px;background:#fff;border-radius:50%;top:-2px;left:-2px;transition:transform .2s;box-shadow:0 0 2px #0000004d}.switch input:checked+.slider[data-v-6bca7151]{background:#4caf50}.switch input:checked+.slider[data-v-6bca7151]:before{transform:translate(18px)}.switch .switch-label[data-v-6bca7151]{font-size:14px;-webkit-user-select:none;user-select:none}.controls[data-v-6bca7151]{display:flex;align-items:center;padding:16px;border-top:1px solid #e0e0e0;background:#f5f5f5}.controls .btn+.btn[data-v-6bca7151]{margin-left:8px}.time-display[data-v-6bca7151]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:16px;color:#424242}.time-display .separator[data-v-6bca7151]{margin:0 8px;color:#999}.time-display .current-time[data-v-6bca7151]{font-weight:500}@keyframes shake-6bca7151{0%{transform:rotate(0)}25%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}75%{transform:rotate(10deg)}to{transform:rotate(0)}}.shake[data-v-6bca7151]{animation:shake-6bca7151 .6s infinite}', hi = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, n] of t)
    s[i] = n;
  return s;
}, na = /* @__PURE__ */ hi(sa, [["styles", [ia]], ["__scopeId", "data-v-6bca7151"]]);
function ra(e) {
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
      const c = tn(a), h = tn(d), p = n.slice(2).join(`
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
function tn(e) {
  const t = e.match(/^(\d{2}):(\d{2}):(\d{2}),(\d{3})$/);
  if (!t)
    throw new Error(`Invalid SRT timestamp format: ${e}`);
  const s = parseInt(t[1], 10), i = parseInt(t[2], 10), n = parseInt(t[3], 10), r = parseInt(t[4], 10);
  if (s < 0 || i < 0 || i >= 60 || n < 0 || n >= 60 || r < 0 || r >= 1e3)
    throw new Error(`Invalid time values in SRT timestamp: ${e}`);
  return s * 3600 + i * 60 + n + r / 1e3;
}
function en(e) {
  const t = Math.floor(e), s = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), n = t % 60;
  return s > 0 ? `${s.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}` : `${i.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
}
const oa = { class: "subtitle-panel card" }, la = { class: "subtitle-wrapper flex-1" }, aa = {
  key: 0,
  class: "overlay"
}, ca = {
  key: 1,
  class: "empty-state flex-center flex-1"
}, ua = { class: "subtitle-content" }, da = ["onClick", "onMouseenter"], fa = { class: "entry-header" }, ha = { class: "timestamp" }, pa = { class: "region-colors" }, ga = { class: "duration" }, ma = { class: "entry-text" }, va = /* @__PURE__ */ ms({
  __name: "SubtitlePanel",
  props: {
    subtitleEntries: { type: Array },
    currentTime: { type: Number },
    isLoading: { type: Boolean },
    selectedRanges: { type: Array }
  },
  emits: ["seekTo"],
  setup(e, { emit: t }) {
    const s = e, i = t, n = et(null), r = (p) => s.currentTime >= p.startTime && s.currentTime < p.endTime, o = (p, g) => `${en(p)} → ${en(g)}`, l = (p) => `${Math.round(p * 10) / 10}s`, a = (p) => {
      n.value = p;
    }, d = () => {
      n.value = null;
    }, c = (p) => (s.selectedRanges ?? []).some((g) => p.endTime >= g.start && p.startTime <= g.end), h = (p) => (s.selectedRanges ?? []).filter((g) => p.endTime >= g.start && p.startTime <= g.end).map((g) => g.color);
    return (p, g) => (dt(), vt("div", oa, [
      g[2] || (g[2] = j("div", { class: "card-header" }, [
        j("i", { class: "mdi mdi-subtitles icon" }),
        j("span", { class: "title" }, "Subtitles")
      ], -1)),
      j("div", la, [
        p.isLoading && p.subtitleEntries.length === 0 ? (dt(), vt("div", aa, g[0] || (g[0] = [
          j("div", { class: "spinner" }, null, -1)
        ]))) : ie("", !0),
        p.subtitleEntries.length === 0 && !p.isLoading ? (dt(), vt("div", ca, g[1] || (g[1] = [
          j("i", {
            class: "mdi mdi-subtitles-outline icon",
            style: { "font-size": "64px", color: "#bdbdbd" }
          }, null, -1),
          j("p", { class: "text-muted mt-4" }, "Load an SRT subtitle file to see entries here", -1)
        ]))) : ie("", !0),
        j("div", ua, [
          (dt(!0), vt(Pt, null, Ei(p.subtitleEntries, (S) => (dt(), vt("div", {
            key: S.id,
            class: ge([
              "subtitle-entry",
              { active: r(S) },
              { hover: n.value === S.id },
              { selected: c(S) }
            ]),
            onClick: (A) => i("seekTo", S.startTime),
            onMouseenter: (A) => a(S.id),
            onMouseleave: d
          }, [
            j("div", fa, [
              j("span", ha, de(o(S.startTime, S.endTime)), 1),
              j("div", pa, [
                (dt(!0), vt(Pt, null, Ei(h(S), (A, N) => (dt(), vt("span", {
                  key: N,
                  class: "color-box",
                  style: fs({ backgroundColor: A })
                }, null, 4))), 128))
              ]),
              j("span", ga, de(l(S.endTime - S.startTime)), 1)
            ]),
            j("div", ma, de(S.text), 1)
          ], 42, da))), 128))
        ])
      ])
    ]));
  }
}), ba = ".subtitle-panel[data-v-79055703]{padding:16px 8px 16px 16px;max-height:100%;overflow-y:auto}.subtitle-content[data-v-79055703]{overflow-y:auto;padding:8px}.empty-state[data-v-79055703]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.empty-state p[data-v-79055703]{font-size:18px;margin:0}.subtitle-entry[data-v-79055703]{padding:16px;margin-bottom:4px;border-radius:8px;cursor:pointer;transition:all .2s ease;border:2px solid transparent}.subtitle-entry[data-v-79055703]:hover{background-color:#1976d20d}.subtitle-entry.active[data-v-79055703]{background-color:#1976d21a;border-left:4px solid #1976d2;transform:translate(-4px);box-shadow:0 2px 8px #1976d233}.subtitle-entry.selected[data-v-79055703]{background-color:#4caf501f;border-left:4px solid #4caf50}.subtitle-entry.hover[data-v-79055703]{transform:scale(1.02);font-weight:500}.subtitle-entry .entry-header[data-v-79055703]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.subtitle-entry .entry-header .timestamp[data-v-79055703]{font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:14px;color:#424242;background:#4242421a;padding:2px 8px;border-radius:4px}.subtitle-entry .entry-header .duration[data-v-79055703]{font-size:14px;color:#1976d2b3;font-weight:500}.subtitle-entry .entry-text[data-v-79055703]{line-height:1.6;color:#000000de;font-size:16px}.region-colors[data-v-79055703]{display:flex;gap:4px;margin-left:4px}.region-colors .color-box[data-v-79055703]{width:12px;height:12px;border-radius:2px}.card-header[data-v-79055703]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.subtitle-wrapper[data-v-79055703]{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden}", ya = /* @__PURE__ */ hi(va, [["styles", [ba]], ["__scopeId", "data-v-79055703"]]), _a = { class: "app-container" }, xa = { class: "main-content grid-2col" }, wa = { class: "subtitle-column card flex-1" }, Ca = { class: "waveform-column card flex-1" }, Sa = /* @__PURE__ */ ms({
  __name: "App",
  props: {
    audioUrl: { type: String }
  },
  setup(e) {
    const t = e, s = et(null), i = et([]), n = et(0), r = et(!1), o = et(!1), l = et(), a = et([]), d = (M) => M.replace(/\.mp3$/, ".srt"), c = () => {
      s.value = null, i.value = [];
    }, h = async (M) => {
      r.value = !0;
      try {
        const L = await fetch(M);
        if (!L.ok) throw new Error("Subtitle not found");
        const C = await L.text();
        i.value = ra(C);
      } catch {
        i.value = [];
      }
      r.value = !1;
    }, p = async (M) => {
      o.value = !0;
      try {
        const L = await fetch(M);
        if (!L.ok) throw new Error("Audio not found");
        const C = await L.blob(), D = C.type.split("/")[1] || "mp3";
        s.value = new File([C], `audio.${D}`, {
          type: C.type
        });
      } catch {
        s.value = null;
      }
      o.value = !1;
    }, g = (M) => {
      n.value = M;
    }, S = () => {
      o.value = !1;
    }, A = (M) => {
      var L;
      (L = l.value) == null || L.seekTo(M);
    }, N = (M) => {
      a.value = M;
    }, O = async (M) => {
      if (!M) {
        c();
        return;
      }
      await Promise.all([
        h(d(M)),
        p(M)
      ]), (!s.value || i.value.length === 0) && c();
    };
    return re(
      () => t.audioUrl,
      (M) => {
        O(M);
      },
      { immediate: !0 }
    ), oi(() => {
      t.audioUrl ? O(t.audioUrl) : c();
    }), (M, L) => (dt(), vt("div", _a, [
      j("main", xa, [
        j("div", wa, [
          Rt(ya, {
            "subtitle-entries": i.value,
            "current-time": n.value,
            "is-loading": r.value,
            "selected-ranges": a.value,
            onSeekTo: A
          }, null, 8, ["subtitle-entries", "current-time", "is-loading", "selected-ranges"])
        ]),
        j("div", Ca, [
          Rt(na, {
            "audio-file": s.value,
            "is-loading": o.value,
            onTimeUpdate: g,
            onReady: S,
            onRegionsSelected: N,
            ref_key: "waveformPlayer",
            ref: l
          }, null, 8, ["audio-file", "is-loading"])
        ])
      ])
    ]));
  }
}), Ea = "*{box-sizing:border-box}body{margin:0;padding:0;font-family:Roboto,sans-serif;font-size:16px;line-height:1.5;background-color:#fafafa}.app-container{display:flex;flex-direction:column}.main-content{flex:1;display:flex;max-height:100%}.flex{display:flex}.flex-center,.overlay{display:flex;justify-content:center;align-items:center}.flex-1{flex:1}.grid-2col{display:flex;height:100%}.card{background:#fff;box-shadow:0 2px 4px #0000001a;display:flex;flex-direction:column;height:500px}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;cursor:pointer;padding:8px 16px;border-radius:8px;font-size:16px;display:inline-flex;align-items:center;gap:4px;background:#1976d2;color:#fff}.btn.btn-outline{background:transparent;border:2px solid #82b1ff;color:#82b1ff}.btn.btn-danger{background:#ff5252}.btn.btn-icon{padding:4px}.icon{font-size:24px}.overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff9;z-index:10}.spinner{width:48px;height:48px;border:4px solid rgba(25,118,210,.2);border-top-color:#1976d2;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.header{display:flex;align-items:center;padding:16px;background:#1976d2;color:#fff}.header .spacer{flex:1}.controls{display:flex;align-items:center;gap:8px;padding:16px;background:#f5f5f5}.text-muted{color:#9e9e9e}.mt-4{margin-top:16px}", Ta = /* @__PURE__ */ hi(Sa, [["styles", [Ea]]]), Ra = /* @__PURE__ */ Al(Ta, { shadowRoot: !0 });
customElements.define("subtitle-wave-player", Ra);
