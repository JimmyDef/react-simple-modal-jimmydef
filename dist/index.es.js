import lr, { useRef as Dr, useEffect as Qe } from "react";
import { createPortal as Yr } from "react-dom";
function Fr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ye = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Wr() {
  if (er)
    return _e;
  er = 1;
  var i = lr, I = Symbol.for("react.element"), k = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, P = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(l, y, T) {
    var s, v = {}, $ = null, Y = null;
    T !== void 0 && ($ = "" + T), y.key !== void 0 && ($ = "" + y.key), y.ref !== void 0 && (Y = y.ref);
    for (s in y)
      d.call(y, s) && !f.hasOwnProperty(s) && (v[s] = y[s]);
    if (l && l.defaultProps)
      for (s in y = l.defaultProps, y)
        v[s] === void 0 && (v[s] = y[s]);
    return { $$typeof: I, type: l, key: $, ref: Y, props: v, _owner: P.current };
  }
  return _e.Fragment = k, _e.jsx = w, _e.jsxs = w, _e;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Br() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = lr, I = Symbol.for("react.element"), k = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), l = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), N = Symbol.iterator, D = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[D];
      return typeof r == "function" ? r : null;
    }
    var q = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          o[u - 1] = arguments[u];
        U("error", e, o);
      }
    }
    function U(e, r, o) {
      {
        var u = q.ReactDebugCurrentFrame, x = u.getStackAddendum();
        x !== "" && (r += "%s", o = o.concat([x]));
        var M = o.map(function(C) {
          return String(C);
        });
        M.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var B = !1, a = !1, re = !1, me = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === f || he || e === P || e === T || e === s || me || e === Y || B || a || re || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === v || e.$$typeof === w || e.$$typeof === l || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function fe(e, r, o) {
      var u = e.displayName;
      if (u)
        return u;
      var x = r.displayName || r.name || "";
      return x !== "" ? o + "(" + x + ")" : o;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function J(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case k:
          return "Portal";
        case f:
          return "Profiler";
        case P:
          return "StrictMode";
        case T:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return le(r) + ".Consumer";
          case w:
            var o = e;
            return le(o._context) + ".Provider";
          case y:
            return fe(e, e.render, "ForwardRef");
          case v:
            var u = e.displayName || null;
            return u !== null ? u : J(e.type) || "Memo";
          case $: {
            var x = e, M = x._payload, C = x._init;
            try {
              return J(C(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, te = 0, H, ee, ie, de, t, c, g;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function p() {
      {
        if (te === 0) {
          H = console.log, ee = console.info, ie = console.warn, de = console.error, t = console.group, c = console.groupCollapsed, g = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function S() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: H
            }),
            info: K({}, e, {
              value: ee
            }),
            warn: K({}, e, {
              value: ie
            }),
            error: K({}, e, {
              value: de
            }),
            group: K({}, e, {
              value: t
            }),
            groupCollapsed: K({}, e, {
              value: c
            }),
            groupEnd: K({}, e, {
              value: g
            })
          });
        }
        te < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = q.ReactCurrentDispatcher, h;
    function E(e, r, o) {
      {
        if (h === void 0)
          try {
            throw Error();
          } catch (x) {
            var u = x.stack.trim().match(/\n( *(at )?)/);
            h = u && u[1] || "";
          }
        return `
` + h + e;
      }
    }
    var O = !1, _;
    {
      var z = typeof WeakMap == "function" ? WeakMap : Map;
      _ = new z();
    }
    function n(e, r) {
      if (!e || O)
        return "";
      {
        var o = _.get(e);
        if (o !== void 0)
          return o;
      }
      var u;
      O = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = m.current, m.current = null, p();
      try {
        if (r) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (X) {
              u = X;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (X) {
              u = X;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            u = X;
          }
          e();
        }
      } catch (X) {
        if (X && u && typeof X.stack == "string") {
          for (var R = X.stack.split(`
`), G = u.stack.split(`
`), W = R.length - 1, L = G.length - 1; W >= 1 && L >= 0 && R[W] !== G[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (R[W] !== G[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || R[W] !== G[L]) {
                    var Q = `
` + R[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && _.set(e, Q), Q;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        O = !1, m.current = M, S(), Error.prepareStackTrace = x;
      }
      var ye = e ? e.displayName || e.name : "", se = ye ? E(ye) : "";
      return typeof e == "function" && _.set(e, se), se;
    }
    function Z(e, r, o) {
      return n(e, !1);
    }
    function ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ce(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, ve(e));
      if (typeof e == "string")
        return E(e);
      switch (e) {
        case T:
          return E("Suspense");
        case s:
          return E("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Z(e.render);
          case v:
            return ce(e.type, r, o);
          case $: {
            var u = e, x = u._payload, M = u._init;
            try {
              return ce(M(x), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Be = {}, Le = q.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, o = ce(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(o);
      } else
        Le.setExtraStackFrame(null);
    }
    function pr(e, r, o, u, x) {
      {
        var M = Function.call.bind(ge);
        for (var C in e)
          if (M(e, C)) {
            var R = void 0;
            try {
              if (typeof e[C] != "function") {
                var G = Error((u || "React class") + ": " + o + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              R = e[C](r, C, u, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              R = W;
            }
            R && !(R instanceof Error) && (Re(x), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", o, C, typeof R), Re(null)), R instanceof Error && !(R.message in Be) && (Be[R.message] = !0, Re(x), F("Failed %s type: %s", o, R.message), Re(null));
          }
      }
    }
    var yr = Array.isArray;
    function Ce(e) {
      return yr(e);
    }
    function mr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function hr(e) {
      try {
        return qe(e), !1;
      } catch {
        return !0;
      }
    }
    function qe(e) {
      return "" + e;
    }
    function Ue(e) {
      if (hr(e))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), qe(e);
    }
    var Ee = q.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, Ne, we;
    we = {};
    function gr(e) {
      if (ge.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Er(e) {
      if (ge.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function _r(e, r) {
      if (typeof e.ref == "string" && Ee.current && r && Ee.current.stateNode !== r) {
        var o = J(Ee.current.type);
        we[o] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(Ee.current.type), e.ref), we[o] = !0);
      }
    }
    function Tr(e, r) {
      {
        var o = function() {
          Ve || (Ve = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Rr(e, r) {
      {
        var o = function() {
          Ne || (Ne = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Sr = function(e, r, o, u, x, M, C) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: C,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Cr(e, r, o, u, x) {
      {
        var M, C = {}, R = null, G = null;
        o !== void 0 && (Ue(o), R = "" + o), Er(r) && (Ue(r.key), R = "" + r.key), gr(r) && (G = r.ref, _r(r, x));
        for (M in r)
          ge.call(r, M) && !br.hasOwnProperty(M) && (C[M] = r[M]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for (M in W)
            C[M] === void 0 && (C[M] = W[M]);
        }
        if (R || G) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && Tr(C, L), G && Rr(C, L);
        }
        return Sr(e, R, G, x, u, Ee.current, C);
      }
    }
    var Oe = q.ReactCurrentOwner, ze = q.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, o = ce(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(o);
      } else
        ze.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function Ge() {
      {
        if (Oe.current) {
          var e = J(Oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      return "";
    }
    var Je = {};
    function Or(e) {
      {
        var r = Ge();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Or(r);
        if (Je[o])
          return;
        Je[o] = !0;
        var u = "";
        e && e._owner && e._owner !== Oe.current && (u = " It was passed a child from " + J(e._owner.type) + "."), pe(e), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, u), pe(null);
      }
    }
    function Xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var o = 0; o < e.length; o++) {
            var u = e[o];
            xe(u) && Ke(u, r);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = V(e);
          if (typeof x == "function" && x !== e.entries)
            for (var M = x.call(e), C; !(C = M.next()).done; )
              xe(C.value) && Ke(C.value, r);
        }
      }
    }
    function Pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          o = r.propTypes;
        else
          return;
        if (o) {
          var u = J(r);
          pr(o, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var x = J(r);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var u = r[o];
          if (u !== "children" && u !== "key") {
            pe(e), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), F("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var He = {};
    function Ze(e, r, o, u, x, M) {
      {
        var C = be(e);
        if (!C) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = wr();
          G ? R += G : R += Ge();
          var W;
          e === null ? W = "null" : Ce(e) ? W = "array" : e !== void 0 && e.$$typeof === I ? (W = "<" + (J(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, R);
        }
        var L = Cr(e, r, o, x, M);
        if (L == null)
          return L;
        if (C) {
          var Q = r.children;
          if (Q !== void 0)
            if (u)
              if (Ce(Q)) {
                for (var ye = 0; ye < Q.length; ye++)
                  Xe(Q[ye], e);
                Object.freeze && Object.freeze(Q);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(Q, e);
        }
        if (ge.call(r, "key")) {
          var se = J(e), X = Object.keys(r).filter(function(Mr) {
            return Mr !== "key";
          }), je = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[se + je]) {
            var $r = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, se, $r, se), He[se + je] = !0;
          }
        }
        return e === d ? xr(L) : Pr(L), L;
      }
    }
    function jr(e, r, o) {
      return Ze(e, r, o, !0);
    }
    function Ar(e, r, o) {
      return Ze(e, r, o, !1);
    }
    var kr = Ar, Ir = jr;
    Te.Fragment = d, Te.jsx = kr, Te.jsxs = Ir;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Ye.exports = Wr() : Ye.exports = Br();
var ne = Ye.exports, Fe = { exports: {} }, Se = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Lr() {
  if (tr)
    return j;
  tr = 1;
  var i = typeof Symbol == "function" && Symbol.for, I = i ? Symbol.for("react.element") : 60103, k = i ? Symbol.for("react.portal") : 60106, d = i ? Symbol.for("react.fragment") : 60107, P = i ? Symbol.for("react.strict_mode") : 60108, f = i ? Symbol.for("react.profiler") : 60114, w = i ? Symbol.for("react.provider") : 60109, l = i ? Symbol.for("react.context") : 60110, y = i ? Symbol.for("react.async_mode") : 60111, T = i ? Symbol.for("react.concurrent_mode") : 60111, s = i ? Symbol.for("react.forward_ref") : 60112, v = i ? Symbol.for("react.suspense") : 60113, $ = i ? Symbol.for("react.suspense_list") : 60120, Y = i ? Symbol.for("react.memo") : 60115, N = i ? Symbol.for("react.lazy") : 60116, D = i ? Symbol.for("react.block") : 60121, V = i ? Symbol.for("react.fundamental") : 60117, q = i ? Symbol.for("react.responder") : 60118, F = i ? Symbol.for("react.scope") : 60119;
  function U(a) {
    if (typeof a == "object" && a !== null) {
      var re = a.$$typeof;
      switch (re) {
        case I:
          switch (a = a.type, a) {
            case y:
            case T:
            case d:
            case f:
            case P:
            case v:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case l:
                case s:
                case N:
                case Y:
                case w:
                  return a;
                default:
                  return re;
              }
          }
        case k:
          return re;
      }
    }
  }
  function B(a) {
    return U(a) === T;
  }
  return j.AsyncMode = y, j.ConcurrentMode = T, j.ContextConsumer = l, j.ContextProvider = w, j.Element = I, j.ForwardRef = s, j.Fragment = d, j.Lazy = N, j.Memo = Y, j.Portal = k, j.Profiler = f, j.StrictMode = P, j.Suspense = v, j.isAsyncMode = function(a) {
    return B(a) || U(a) === y;
  }, j.isConcurrentMode = B, j.isContextConsumer = function(a) {
    return U(a) === l;
  }, j.isContextProvider = function(a) {
    return U(a) === w;
  }, j.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === I;
  }, j.isForwardRef = function(a) {
    return U(a) === s;
  }, j.isFragment = function(a) {
    return U(a) === d;
  }, j.isLazy = function(a) {
    return U(a) === N;
  }, j.isMemo = function(a) {
    return U(a) === Y;
  }, j.isPortal = function(a) {
    return U(a) === k;
  }, j.isProfiler = function(a) {
    return U(a) === f;
  }, j.isStrictMode = function(a) {
    return U(a) === P;
  }, j.isSuspense = function(a) {
    return U(a) === v;
  }, j.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === d || a === T || a === f || a === P || a === v || a === $ || typeof a == "object" && a !== null && (a.$$typeof === N || a.$$typeof === Y || a.$$typeof === w || a.$$typeof === l || a.$$typeof === s || a.$$typeof === V || a.$$typeof === q || a.$$typeof === F || a.$$typeof === D);
  }, j.typeOf = U, j;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function qr() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var i = typeof Symbol == "function" && Symbol.for, I = i ? Symbol.for("react.element") : 60103, k = i ? Symbol.for("react.portal") : 60106, d = i ? Symbol.for("react.fragment") : 60107, P = i ? Symbol.for("react.strict_mode") : 60108, f = i ? Symbol.for("react.profiler") : 60114, w = i ? Symbol.for("react.provider") : 60109, l = i ? Symbol.for("react.context") : 60110, y = i ? Symbol.for("react.async_mode") : 60111, T = i ? Symbol.for("react.concurrent_mode") : 60111, s = i ? Symbol.for("react.forward_ref") : 60112, v = i ? Symbol.for("react.suspense") : 60113, $ = i ? Symbol.for("react.suspense_list") : 60120, Y = i ? Symbol.for("react.memo") : 60115, N = i ? Symbol.for("react.lazy") : 60116, D = i ? Symbol.for("react.block") : 60121, V = i ? Symbol.for("react.fundamental") : 60117, q = i ? Symbol.for("react.responder") : 60118, F = i ? Symbol.for("react.scope") : 60119;
    function U(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === d || n === T || n === f || n === P || n === v || n === $ || typeof n == "object" && n !== null && (n.$$typeof === N || n.$$typeof === Y || n.$$typeof === w || n.$$typeof === l || n.$$typeof === s || n.$$typeof === V || n.$$typeof === q || n.$$typeof === F || n.$$typeof === D);
    }
    function B(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case I:
            var ve = n.type;
            switch (ve) {
              case y:
              case T:
              case d:
              case f:
              case P:
              case v:
                return ve;
              default:
                var ce = ve && ve.$$typeof;
                switch (ce) {
                  case l:
                  case s:
                  case N:
                  case Y:
                  case w:
                    return ce;
                  default:
                    return Z;
                }
            }
          case k:
            return Z;
        }
      }
    }
    var a = y, re = T, me = l, he = w, ue = I, be = s, fe = d, le = N, J = Y, K = k, te = f, H = P, ee = v, ie = !1;
    function de(n) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || B(n) === y;
    }
    function t(n) {
      return B(n) === T;
    }
    function c(n) {
      return B(n) === l;
    }
    function g(n) {
      return B(n) === w;
    }
    function b(n) {
      return typeof n == "object" && n !== null && n.$$typeof === I;
    }
    function p(n) {
      return B(n) === s;
    }
    function S(n) {
      return B(n) === d;
    }
    function m(n) {
      return B(n) === N;
    }
    function h(n) {
      return B(n) === Y;
    }
    function E(n) {
      return B(n) === k;
    }
    function O(n) {
      return B(n) === f;
    }
    function _(n) {
      return B(n) === P;
    }
    function z(n) {
      return B(n) === v;
    }
    A.AsyncMode = a, A.ConcurrentMode = re, A.ContextConsumer = me, A.ContextProvider = he, A.Element = ue, A.ForwardRef = be, A.Fragment = fe, A.Lazy = le, A.Memo = J, A.Portal = K, A.Profiler = te, A.StrictMode = H, A.Suspense = ee, A.isAsyncMode = de, A.isConcurrentMode = t, A.isContextConsumer = c, A.isContextProvider = g, A.isElement = b, A.isForwardRef = p, A.isFragment = S, A.isLazy = m, A.isMemo = h, A.isPortal = E, A.isProfiler = O, A.isStrictMode = _, A.isSuspense = z, A.isValidElementType = U, A.typeOf = B;
  }()), A;
}
var or;
function dr() {
  return or || (or = 1, process.env.NODE_ENV === "production" ? Se.exports = Lr() : Se.exports = qr()), Se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ae, ar;
function Ur() {
  if (ar)
    return Ae;
  ar = 1;
  var i = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
  function d(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function P() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var w = {}, l = 0; l < 10; l++)
        w["_" + String.fromCharCode(l)] = l;
      var y = Object.getOwnPropertyNames(w).map(function(s) {
        return w[s];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var T = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(s) {
        T[s] = s;
      }), Object.keys(Object.assign({}, T)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ae = P() ? Object.assign : function(f, w) {
    for (var l, y = d(f), T, s = 1; s < arguments.length; s++) {
      l = Object(arguments[s]);
      for (var v in l)
        I.call(l, v) && (y[v] = l[v]);
      if (i) {
        T = i(l);
        for (var $ = 0; $ < T.length; $++)
          k.call(l, T[$]) && (y[T[$]] = l[T[$]]);
      }
    }
    return y;
  }, Ae;
}
var ke, ir;
function We() {
  if (ir)
    return ke;
  ir = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = i, ke;
}
var Ie, cr;
function vr() {
  return cr || (cr = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, sr;
function Vr() {
  if (sr)
    return $e;
  sr = 1;
  var i = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var I = We(), k = {}, d = vr();
    i = function(f) {
      var w = "Warning: " + f;
      typeof console < "u" && console.error(w);
      try {
        throw new Error(w);
      } catch {
      }
    };
  }
  function P(f, w, l, y, T) {
    if (process.env.NODE_ENV !== "production") {
      for (var s in f)
        if (d(f, s)) {
          var v;
          try {
            if (typeof f[s] != "function") {
              var $ = Error(
                (y || "React class") + ": " + l + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            v = f[s](w, s, y, l, null, I);
          } catch (N) {
            v = N;
          }
          if (v && !(v instanceof Error) && i(
            (y || "React class") + ": type specification of " + l + " `" + s + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in k)) {
            k[v.message] = !0;
            var Y = T ? T() : "";
            i(
              "Failed " + l + " type: " + v.message + (Y ?? "")
            );
          }
        }
    }
  }
  return P.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (k = {});
  }, $e = P, $e;
}
var Me, ur;
function Nr() {
  if (ur)
    return Me;
  ur = 1;
  var i = dr(), I = Ur(), k = We(), d = vr(), P = Vr(), f = function() {
  };
  process.env.NODE_ENV !== "production" && (f = function(l) {
    var y = "Warning: " + l;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function w() {
    return null;
  }
  return Me = function(l, y) {
    var T = typeof Symbol == "function" && Symbol.iterator, s = "@@iterator";
    function v(t) {
      var c = t && (T && t[T] || t[s]);
      if (typeof c == "function")
        return c;
    }
    var $ = "<<anonymous>>", Y = {
      array: q("array"),
      bigint: q("bigint"),
      bool: q("boolean"),
      func: q("function"),
      number: q("number"),
      object: q("object"),
      string: q("string"),
      symbol: q("symbol"),
      any: F(),
      arrayOf: U,
      element: B(),
      elementType: a(),
      instanceOf: re,
      node: be(),
      objectOf: he,
      oneOf: me,
      oneOfType: ue,
      shape: le,
      exact: J
    };
    function N(t, c) {
      return t === c ? t !== 0 || 1 / t === 1 / c : t !== t && c !== c;
    }
    function D(t, c) {
      this.message = t, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    D.prototype = Error.prototype;
    function V(t) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, g = 0;
      function b(S, m, h, E, O, _, z) {
        if (E = E || $, _ = _ || h, z !== k) {
          if (y) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = E + ":" + h;
            !c[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            g < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + E + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[Z] = !0, g++);
          }
        }
        return m[h] == null ? S ? m[h] === null ? new D("The " + O + " `" + _ + "` is marked as required " + ("in `" + E + "`, but its value is `null`.")) : new D("The " + O + " `" + _ + "` is marked as required in " + ("`" + E + "`, but its value is `undefined`.")) : null : t(m, h, E, O, _);
      }
      var p = b.bind(null, !1);
      return p.isRequired = b.bind(null, !0), p;
    }
    function q(t) {
      function c(g, b, p, S, m, h) {
        var E = g[b], O = H(E);
        if (O !== t) {
          var _ = ee(E);
          return new D(
            "Invalid " + S + " `" + m + "` of type " + ("`" + _ + "` supplied to `" + p + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return V(c);
    }
    function F() {
      return V(w);
    }
    function U(t) {
      function c(g, b, p, S, m) {
        if (typeof t != "function")
          return new D("Property `" + m + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var h = g[b];
        if (!Array.isArray(h)) {
          var E = H(h);
          return new D("Invalid " + S + " `" + m + "` of type " + ("`" + E + "` supplied to `" + p + "`, expected an array."));
        }
        for (var O = 0; O < h.length; O++) {
          var _ = t(h, O, p, S, m + "[" + O + "]", k);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return V(c);
    }
    function B() {
      function t(c, g, b, p, S) {
        var m = c[g];
        if (!l(m)) {
          var h = H(m);
          return new D("Invalid " + p + " `" + S + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return V(t);
    }
    function a() {
      function t(c, g, b, p, S) {
        var m = c[g];
        if (!i.isValidElementType(m)) {
          var h = H(m);
          return new D("Invalid " + p + " `" + S + "` of type " + ("`" + h + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return V(t);
    }
    function re(t) {
      function c(g, b, p, S, m) {
        if (!(g[b] instanceof t)) {
          var h = t.name || $, E = de(g[b]);
          return new D("Invalid " + S + " `" + m + "` of type " + ("`" + E + "` supplied to `" + p + "`, expected ") + ("instance of `" + h + "`."));
        }
        return null;
      }
      return V(c);
    }
    function me(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array.")), w;
      function c(g, b, p, S, m) {
        for (var h = g[b], E = 0; E < t.length; E++)
          if (N(h, t[E]))
            return null;
        var O = JSON.stringify(t, function(z, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new D("Invalid " + S + " `" + m + "` of value `" + String(h) + "` " + ("supplied to `" + p + "`, expected one of " + O + "."));
      }
      return V(c);
    }
    function he(t) {
      function c(g, b, p, S, m) {
        if (typeof t != "function")
          return new D("Property `" + m + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var h = g[b], E = H(h);
        if (E !== "object")
          return new D("Invalid " + S + " `" + m + "` of type " + ("`" + E + "` supplied to `" + p + "`, expected an object."));
        for (var O in h)
          if (d(h, O)) {
            var _ = t(h, O, p, S, m + "." + O, k);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return V(c);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && f("Invalid argument supplied to oneOfType, expected an instance of array."), w;
      for (var c = 0; c < t.length; c++) {
        var g = t[c];
        if (typeof g != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(g) + " at index " + c + "."
          ), w;
      }
      function b(p, S, m, h, E) {
        for (var O = [], _ = 0; _ < t.length; _++) {
          var z = t[_], n = z(p, S, m, h, E, k);
          if (n == null)
            return null;
          n.data && d(n.data, "expectedType") && O.push(n.data.expectedType);
        }
        var Z = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new D("Invalid " + h + " `" + E + "` supplied to " + ("`" + m + "`" + Z + "."));
      }
      return V(b);
    }
    function be() {
      function t(c, g, b, p, S) {
        return K(c[g]) ? null : new D("Invalid " + p + " `" + S + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return V(t);
    }
    function fe(t, c, g, b, p) {
      return new D(
        (t || "React class") + ": " + c + " type `" + g + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function le(t) {
      function c(g, b, p, S, m) {
        var h = g[b], E = H(h);
        if (E !== "object")
          return new D("Invalid " + S + " `" + m + "` of type `" + E + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var O in t) {
          var _ = t[O];
          if (typeof _ != "function")
            return fe(p, S, m, O, ee(_));
          var z = _(h, O, p, S, m + "." + O, k);
          if (z)
            return z;
        }
        return null;
      }
      return V(c);
    }
    function J(t) {
      function c(g, b, p, S, m) {
        var h = g[b], E = H(h);
        if (E !== "object")
          return new D("Invalid " + S + " `" + m + "` of type `" + E + "` " + ("supplied to `" + p + "`, expected `object`."));
        var O = I({}, g[b], t);
        for (var _ in O) {
          var z = t[_];
          if (d(t, _) && typeof z != "function")
            return fe(p, S, m, _, ee(z));
          if (!z)
            return new D(
              "Invalid " + S + " `" + m + "` key `" + _ + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(g[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = z(h, _, p, S, m + "." + _, k);
          if (n)
            return n;
        }
        return null;
      }
      return V(c);
    }
    function K(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(K);
          if (t === null || l(t))
            return !0;
          var c = v(t);
          if (c) {
            var g = c.call(t), b;
            if (c !== t.entries) {
              for (; !(b = g.next()).done; )
                if (!K(b.value))
                  return !1;
            } else
              for (; !(b = g.next()).done; ) {
                var p = b.value;
                if (p && !K(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, c) {
      return t === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function H(t) {
      var c = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(c, t) ? "symbol" : c;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var c = H(t);
      if (c === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function ie(t) {
      var c = ee(t);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function de(t) {
      return !t.constructor || !t.constructor.name ? $ : t.constructor.name;
    }
    return Y.checkPropTypes = P, Y.resetWarningCache = P.resetWarningCache, Y.PropTypes = Y, Y;
  }, Me;
}
var De, fr;
function zr() {
  if (fr)
    return De;
  fr = 1;
  var i = We();
  function I() {
  }
  function k() {
  }
  return k.resetWarningCache = I, De = function() {
    function d(w, l, y, T, s, v) {
      if (v !== i) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    d.isRequired = d;
    function P() {
      return d;
    }
    var f = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: P,
      element: d,
      elementType: d,
      instanceOf: P,
      node: d,
      objectOf: P,
      oneOf: P,
      oneOfType: P,
      shape: P,
      exact: P,
      checkPropTypes: k,
      resetWarningCache: I
    };
    return f.PropTypes = f, f;
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var Gr = dr(), Jr = !0;
  Fe.exports = Nr()(Gr.isElement, Jr);
} else
  Fe.exports = zr()();
var Kr = Fe.exports;
const oe = /* @__PURE__ */ Fr(Kr), Xr = "_overlay_120x5_1", Hr = "_content_120x5_27", Zr = "_modalopen_120x5_1", Qr = "_title_120x5_51", et = "_childrenSection_120x5_55", rt = "_buttonSection_120x5_65", tt = "_confirmButton_120x5_79", nt = "_cancelButton_120x5_81", ot = "_closeButton_120x5_149", at = "_closeButtonIcon_120x5_207", ae = {
  overlay: Xr,
  content: Hr,
  modalopen: Zr,
  title: Qr,
  childrenSection: et,
  buttonSection: rt,
  confirmButton: tt,
  cancelButton: nt,
  closeButton: ot,
  closeButtonIcon: at
}, it = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23485806'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='64px'%20height='64px'%20viewBox='0%200%20587.91%20587.91'%20xml:space='preserve'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M86.451,501.46c26.937,26.936,58.315,48.088,93.265,62.871c36.207,15.314,74.642,23.078,114.239,23.078%20c39.596,0,78.032-7.764,114.239-23.078c34.949-14.783,66.328-35.936,93.266-62.871c26.936-26.938,48.09-58.316,62.871-93.266%20c15.314-36.207,23.08-74.643,23.08-114.238c0-39.598-7.766-78.033-23.08-114.239c-14.781-34.95-35.936-66.328-62.871-93.265%20c-26.938-26.937-58.316-48.09-93.266-62.872C371.986,8.265,333.551,0.501,293.955,0.501c-39.597,0-78.032,7.765-114.239,23.079%20c-34.95,14.782-66.328,35.936-93.265,62.872s-48.09,58.315-62.873,93.264C8.265,215.923,0.5,254.358,0.5,293.956%20c0,39.596,7.765,78.031,23.079,114.238C38.361,443.144,59.515,474.522,86.451,501.46z%20M293.955,43.341%20c138.411,0,250.614,112.204,250.614,250.615c0,138.41-112.203,250.613-250.614,250.613S43.34,432.366,43.34,293.956%20C43.34,155.545,155.544,43.341,293.955,43.341z'/%3e%3cpath%20d='M293.955,587.909c-39.667,0-78.167-7.778-114.434-23.117c-35.01-14.809-66.442-35.998-93.423-62.979%20c-26.983-26.984-48.172-58.417-62.979-93.425C7.778,372.119,0,333.618,0,293.956c0-39.663,7.778-78.165,23.118-114.435%20c14.807-35.008,35.997-66.44,62.979-93.423c26.982-26.983,58.415-48.172,93.423-62.979c36.27-15.34,74.771-23.118,114.434-23.118%20c39.666,0,78.167,7.778,114.433,23.119c35.009,14.807,66.441,35.997,93.425,62.979c26.984,26.985,48.173,58.417,62.979,93.423%20c15.341,36.27,23.119,74.771,23.119,114.434c0,39.662-7.778,78.163-23.119,114.433c-14.806,35.007-35.994,66.439-62.979,93.425%20c-26.982,26.98-58.415,48.169-93.425,62.979C372.121,580.131,333.62,587.909,293.955,587.909z%20M293.955,1.001%20c-39.529,0-77.898,7.751-114.044,23.039c-34.889,14.757-66.215,35.874-93.106,62.765c-26.892,26.892-48.009,58.217-62.766,93.105%20C8.751,216.057,1,254.427,1,293.956C1,333.483,8.751,371.854,24.039,408c14.757,34.889,35.874,66.214,62.766,93.106%20c26.89,26.889,58.215,48.006,93.106,62.765c36.142,15.287,74.512,23.038,114.044,23.038s77.901-7.751,114.044-23.039%20c34.89-14.758,66.216-35.875,93.106-62.764c26.893-26.895,48.009-58.22,62.764-93.106%20c15.289-36.146,23.041-74.516,23.041-114.044c0-39.529-7.752-77.899-23.041-114.044c-14.754-34.887-35.871-66.212-62.764-93.106%20c-26.892-26.891-58.218-48.008-93.106-62.765C371.855,8.752,333.485,1.001,293.955,1.001z%20M293.955,545.069%20c-67.075,0-130.136-26.12-177.565-73.549c-47.429-47.43-73.55-110.489-73.55-177.564S68.96,163.82,116.39,116.391%20c47.429-47.429,110.49-73.55,177.565-73.55c67.075,0,130.135,26.121,177.564,73.55c47.43,47.43,73.55,110.49,73.55,177.565%20s-26.12,130.135-73.55,177.564C424.09,518.949,361.029,545.069,293.955,545.069z%20M293.955,43.841%20c-66.808,0-129.617,26.017-176.858,73.257c-47.24,47.241-73.257,110.05-73.257,176.858c0,66.808,26.017,129.617,73.257,176.856%20c47.24,47.24,110.05,73.257,176.858,73.257s129.617-26.017,176.857-73.257c47.24-47.239,73.257-110.049,73.257-176.856%20c0-66.808-26.017-129.618-73.257-176.858C423.571,69.857,360.763,43.841,293.955,43.841z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M184.92,402.989c4.183,4.184,9.664,6.275,15.146,6.275c5.482,0,10.964-2.092,15.146-6.275l78.742-78.742l78.743,78.742%20c4.182,4.184,9.664,6.275,15.146,6.275s10.963-2.092,15.146-6.275c8.365-8.363,8.365-21.926,0-30.291l-78.744-78.742%20l78.742-78.743c8.365-8.365,8.365-21.928,0-30.292c-8.363-8.365-21.926-8.365-30.291,0l-78.743,78.743l-78.742-78.743%20c-8.365-8.365-21.928-8.365-30.292,0c-8.365,8.365-8.365,21.927,0,30.292l78.743,78.743l-78.743,78.742%20C176.555,381.063,176.555,394.626,184.92,402.989z'/%3e%3cpath%20d='M387.844,409.765c-5.856,0-11.36-2.28-15.5-6.422l-78.389-78.389l-78.388,78.389c-4.14,4.142-9.645,6.422-15.5,6.422%20s-11.36-2.28-15.5-6.422c-4.14-4.14-6.42-9.644-6.42-15.498c0-5.855,2.28-11.359,6.42-15.5l78.389-78.389l-78.389-78.389%20c-8.546-8.547-8.546-22.453,0-31c4.14-4.14,9.644-6.42,15.5-6.42c5.855,0,11.36,2.28,15.5,6.42l78.389,78.389l78.389-78.389%20c4.141-4.14,9.645-6.42,15.5-6.42c5.854,0,11.358,2.28,15.498,6.42c4.141,4.14,6.42,9.645,6.42,15.5s-2.279,11.36-6.42,15.5%20l-78.389,78.389l78.391,78.389c4.141,4.141,6.421,9.645,6.421,15.5c0,5.854-2.28,11.358-6.421,15.498%20C399.202,407.484,393.698,409.765,387.844,409.765z%20M293.955,323.54l79.096,79.096c3.95,3.952,9.204,6.129,14.793,6.129%20c5.587,0,10.841-2.177,14.793-6.129c3.951-3.95,6.128-9.203,6.128-14.791s-2.177-10.842-6.128-14.793l-79.098-79.096%20l79.096-79.096c3.951-3.951,6.127-9.205,6.127-14.793s-2.176-10.841-6.127-14.792c-3.95-3.951-9.203-6.127-14.791-6.127%20s-10.842,2.176-14.793,6.127l-79.096,79.096l-79.096-79.096c-3.951-3.951-9.205-6.127-14.793-6.127%20c-5.588,0-10.841,2.176-14.792,6.127c-8.156,8.157-8.156,21.428,0,29.585l79.096,79.096l-79.096,79.096%20c-3.951,3.951-6.127,9.205-6.127,14.793s2.176,10.841,6.127,14.791c3.952,3.952,9.205,6.129,14.793,6.129%20s10.841-2.177,14.793-6.129L293.955,323.54z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ct = ({
  isOpen: i,
  onClose: I,
  title: k,
  onConfirmClick: d,
  showCancelButton: P = !0,
  cancelButtonLabel: f = "Cancel",
  showCloseButtonIcon: w = !1,
  closeButtonIcon: l = it,
  children: y
}) => {
  const T = Dr();
  return Qe(() => {
    var v;
    const s = document.getElementById("root");
    i ? (s.setAttribute("aria-hidden", "true"), s.classList.add("modal-open"), (v = T.current) == null || v.focus()) : (s.setAttribute("aria-hidden", "false"), s.classList.remove("modal-open"));
  }, [i]), Qe(() => {
    const s = (v) => {
      v.key === "Escape" && I();
    };
    return i ? window.addEventListener("keydown", s) : window.removeEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s);
    };
  }, [i, I]), i ? Yr(
    /* @__PURE__ */ ne.jsx(
      "div",
      {
        tabIndex: 0,
        ref: T,
        className: `${ae.overlay} rsmj_Overlay`,
        role: "dialog",
        "aria-modal": "true",
        children: /* @__PURE__ */ ne.jsxs("div", { className: `${ae.content} rsmj_Modal`, children: [
          /* @__PURE__ */ ne.jsx("h1", { id: "modal-h1", className: `${ae.title} rsmj_Title`, children: k }),
          /* @__PURE__ */ ne.jsx("section", { className: `${ae.childrenSection} rsmj_ChildrenSection`, children: y }),
          /* @__PURE__ */ ne.jsxs("section", { className: `${ae.buttonSection} rsmj_ButtonSection`, children: [
            d && /* @__PURE__ */ ne.jsx(
              "button",
              {
                className: `${ae.confirmButton} rsmj_ConfirmButton`,
                onClick: d,
                children: "Confirmation"
              }
            ),
            P && /* @__PURE__ */ ne.jsx(
              "button",
              {
                className: `${ae.cancelButton} rsmj_CancelButton`,
                onClick: I,
                children: f
              }
            ),
            w && /* @__PURE__ */ ne.jsx(
              "button",
              {
                className: `${ae.closeButton} rsmj_CloseButton`,
                onClick: I,
                children: /* @__PURE__ */ ne.jsx(
                  "img",
                  {
                    src: l,
                    alt: "close icon",
                    className: `${ae.closeButtonIcon} rsmj_CloseButtonIcon`
                  }
                )
              }
            )
          ] })
        ] })
      }
    ),
    document.body
  ) : null;
};
ct.propTypes = {
  isOpen: oe.bool.isRequired,
  onClose: oe.func.isRequired,
  title: oe.string.isRequired,
  cancelButtonLabel: oe.string,
  showCloseButtonIcon: oe.bool,
  showCancelButton: oe.bool,
  onConfirmClick: oe.func,
  children: oe.node,
  closeButtonIcon: oe.string
};
export {
  ct as default
};
