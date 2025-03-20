(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) f(v);
  new MutationObserver((v) => {
    for (const E of v)
      if (E.type === "childList")
        for (const z of E.addedNodes)
          z.tagName === "LINK" && z.rel === "modulepreload" && f(z);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(v) {
    const E = {};
    return (
      v.integrity && (E.integrity = v.integrity),
      v.referrerPolicy && (E.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : v.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function f(v) {
    if (v.ep) return;
    v.ep = !0;
    const E = o(v);
    fetch(v.href, E);
  }
})();
var Af = { exports: {} },
  Ca = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd;
function Xh() {
  if (Hd) return Ca;
  Hd = 1;
  var i = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function o(f, v, E) {
    var z = null;
    if (
      (E !== void 0 && (z = "" + E),
      v.key !== void 0 && (z = "" + v.key),
      "key" in v)
    ) {
      E = {};
      for (var M in v) M !== "key" && (E[M] = v[M]);
    } else E = v;
    return (
      (v = E.ref),
      { $$typeof: i, type: f, key: z, ref: v !== void 0 ? v : null, props: E }
    );
  }
  return (Ca.Fragment = s), (Ca.jsx = o), (Ca.jsxs = o), Ca;
}
var xd;
function Qh() {
  return xd || ((xd = 1), (Af.exports = Xh())), Af.exports;
}
var W = Qh(),
  zf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function Zh() {
  if (Cd) return $;
  Cd = 1;
  var i = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    H = Symbol.iterator;
  function Y(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (H && y[H]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    bt = {};
  function L(y, R, Z) {
    (this.props = y),
      (this.context = R),
      (this.refs = bt),
      (this.updater = Z || V);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (y, R) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, R, "setState");
    }),
    (L.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function dt() {}
  dt.prototype = L.prototype;
  function rt(y, R, Z) {
    (this.props = y),
      (this.context = R),
      (this.refs = bt),
      (this.updater = Z || V);
  }
  var J = (rt.prototype = new dt());
  (J.constructor = rt), F(J, L.prototype), (J.isPureReactComponent = !0);
  var et = Array.isArray,
    B = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function Dt(y, R, Z, X, x, at) {
    return (
      (Z = at.ref),
      { $$typeof: i, type: y, key: R, ref: Z !== void 0 ? Z : null, props: at }
    );
  }
  function Tt(y, R) {
    return Dt(y.type, R, void 0, void 0, void 0, y.props);
  }
  function G(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function it(y) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (Z) {
        return R[Z];
      })
    );
  }
  var $t = /\/+/g;
  function Bl(y, R) {
    return typeof y == "object" && y !== null && y.key != null
      ? it("" + y.key)
      : R.toString(36);
  }
  function Ml() {}
  function jl(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Ml, Ml)
            : ((y.status = "pending"),
              y.then(
                function (R) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = R));
                },
                function (R) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = R));
                },
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function Ft(y, R, Z, X, x) {
    var at = typeof y;
    (at === "undefined" || at === "boolean") && (y = null);
    var P = !1;
    if (y === null) P = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case s:
              P = !0;
              break;
            case U:
              return (P = y._init), Ft(P(y._payload), R, Z, X, x);
          }
      }
    if (P)
      return (
        (x = x(y)),
        (P = X === "" ? "." + Bl(y, 0) : X),
        et(x)
          ? ((Z = ""),
            P != null && (Z = P.replace($t, "$&/") + "/"),
            Ft(x, R, Z, "", function (Rt) {
              return Rt;
            }))
          : x != null &&
            (G(x) &&
              (x = Tt(
                x,
                Z +
                  (x.key == null || (y && y.key === x.key)
                    ? ""
                    : ("" + x.key).replace($t, "$&/") + "/") +
                  P,
              )),
            R.push(x)),
        1
      );
    P = 0;
    var Jt = X === "" ? "." : X + ":";
    if (et(y))
      for (var ot = 0; ot < y.length; ot++)
        (X = y[ot]), (at = Jt + Bl(X, ot)), (P += Ft(X, R, Z, at, x));
    else if (((ot = Y(y)), typeof ot == "function"))
      for (y = ot.call(y), ot = 0; !(X = y.next()).done; )
        (X = X.value), (at = Jt + Bl(X, ot++)), (P += Ft(X, R, Z, at, x));
    else if (at === "object") {
      if (typeof y.then == "function") return Ft(jl(y), R, Z, X, x);
      throw (
        ((R = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return P;
  }
  function N(y, R, Z) {
    if (y == null) return y;
    var X = [],
      x = 0;
    return (
      Ft(y, X, "", "", function (at) {
        return R.call(Z, at, x++);
      }),
      X
    );
  }
  function k(y) {
    if (y._status === -1) {
      var R = y._result;
      (R = R()),
        R.then(
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = Z));
          },
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = Z));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = R));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var w =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var R = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof y == "object" &&
                y !== null &&
                typeof y.message == "string"
                  ? String(y.message)
                  : String(y),
              error: y,
            });
            if (!window.dispatchEvent(R)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", y);
            return;
          }
          console.error(y);
        };
  function mt() {}
  return (
    ($.Children = {
      map: N,
      forEach: function (y, R, Z) {
        N(
          y,
          function () {
            R.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (y) {
        var R = 0;
        return (
          N(y, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (y) {
        return (
          N(y, function (R) {
            return R;
          }) || []
        );
      },
      only: function (y) {
        if (!G(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    ($.Component = L),
    ($.Fragment = o),
    ($.Profiler = v),
    ($.PureComponent = rt),
    ($.StrictMode = f),
    ($.Suspense = T),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    ($.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    ($.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    ($.cloneElement = function (y, R, Z) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var X = F({}, y.props),
        x = y.key,
        at = void 0;
      if (R != null)
        for (P in (R.ref !== void 0 && (at = void 0),
        R.key !== void 0 && (x = "" + R.key),
        R))
          !st.call(R, P) ||
            P === "key" ||
            P === "__self" ||
            P === "__source" ||
            (P === "ref" && R.ref === void 0) ||
            (X[P] = R[P]);
      var P = arguments.length - 2;
      if (P === 1) X.children = Z;
      else if (1 < P) {
        for (var Jt = Array(P), ot = 0; ot < P; ot++)
          Jt[ot] = arguments[ot + 2];
        X.children = Jt;
      }
      return Dt(y.type, x, void 0, void 0, at, X);
    }),
    ($.createContext = function (y) {
      return (
        (y = {
          $$typeof: z,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: E, _context: y }),
        y
      );
    }),
    ($.createElement = function (y, R, Z) {
      var X,
        x = {},
        at = null;
      if (R != null)
        for (X in (R.key !== void 0 && (at = "" + R.key), R))
          st.call(R, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (x[X] = R[X]);
      var P = arguments.length - 2;
      if (P === 1) x.children = Z;
      else if (1 < P) {
        for (var Jt = Array(P), ot = 0; ot < P; ot++)
          Jt[ot] = arguments[ot + 2];
        x.children = Jt;
      }
      if (y && y.defaultProps)
        for (X in ((P = y.defaultProps), P)) x[X] === void 0 && (x[X] = P[X]);
      return Dt(y, at, void 0, void 0, null, x);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (y) {
      return { $$typeof: M, render: y };
    }),
    ($.isValidElement = G),
    ($.lazy = function (y) {
      return { $$typeof: U, _payload: { _status: -1, _result: y }, _init: k };
    }),
    ($.memo = function (y, R) {
      return { $$typeof: b, type: y, compare: R === void 0 ? null : R };
    }),
    ($.startTransition = function (y) {
      var R = B.T,
        Z = {};
      B.T = Z;
      try {
        var X = y(),
          x = B.S;
        x !== null && x(Z, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(mt, w);
      } catch (at) {
        w(at);
      } finally {
        B.T = R;
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    ($.use = function (y) {
      return B.H.use(y);
    }),
    ($.useActionState = function (y, R, Z) {
      return B.H.useActionState(y, R, Z);
    }),
    ($.useCallback = function (y, R) {
      return B.H.useCallback(y, R);
    }),
    ($.useContext = function (y) {
      return B.H.useContext(y);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (y, R) {
      return B.H.useDeferredValue(y, R);
    }),
    ($.useEffect = function (y, R) {
      return B.H.useEffect(y, R);
    }),
    ($.useId = function () {
      return B.H.useId();
    }),
    ($.useImperativeHandle = function (y, R, Z) {
      return B.H.useImperativeHandle(y, R, Z);
    }),
    ($.useInsertionEffect = function (y, R) {
      return B.H.useInsertionEffect(y, R);
    }),
    ($.useLayoutEffect = function (y, R) {
      return B.H.useLayoutEffect(y, R);
    }),
    ($.useMemo = function (y, R) {
      return B.H.useMemo(y, R);
    }),
    ($.useOptimistic = function (y, R) {
      return B.H.useOptimistic(y, R);
    }),
    ($.useReducer = function (y, R, Z) {
      return B.H.useReducer(y, R, Z);
    }),
    ($.useRef = function (y) {
      return B.H.useRef(y);
    }),
    ($.useState = function (y) {
      return B.H.useState(y);
    }),
    ($.useSyncExternalStore = function (y, R, Z) {
      return B.H.useSyncExternalStore(y, R, Z);
    }),
    ($.useTransition = function () {
      return B.H.useTransition();
    }),
    ($.version = "19.0.0"),
    $
  );
}
var qd;
function ri() {
  return qd || ((qd = 1), (zf.exports = Zh())), zf.exports;
}
var xt = ri(),
  Of = { exports: {} },
  qa = {},
  Df = { exports: {} },
  Mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function wh() {
  return (
    Bd ||
      ((Bd = 1),
      (function (i) {
        function s(N, k) {
          var w = N.length;
          N.push(k);
          t: for (; 0 < w; ) {
            var mt = (w - 1) >>> 1,
              y = N[mt];
            if (0 < v(y, k)) (N[mt] = k), (N[w] = y), (w = mt);
            else break t;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function f(N) {
          if (N.length === 0) return null;
          var k = N[0],
            w = N.pop();
          if (w !== k) {
            N[0] = w;
            t: for (var mt = 0, y = N.length, R = y >>> 1; mt < R; ) {
              var Z = 2 * (mt + 1) - 1,
                X = N[Z],
                x = Z + 1,
                at = N[x];
              if (0 > v(X, w))
                x < y && 0 > v(at, X)
                  ? ((N[mt] = at), (N[x] = w), (mt = x))
                  : ((N[mt] = X), (N[Z] = w), (mt = Z));
              else if (x < y && 0 > v(at, w))
                (N[mt] = at), (N[x] = w), (mt = x);
              else break t;
            }
          }
          return k;
        }
        function v(N, k) {
          var w = N.sortIndex - k.sortIndex;
          return w !== 0 ? w : N.id - k.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          i.unstable_now = function () {
            return E.now();
          };
        } else {
          var z = Date,
            M = z.now();
          i.unstable_now = function () {
            return z.now() - M;
          };
        }
        var T = [],
          b = [],
          U = 1,
          H = null,
          Y = 3,
          V = !1,
          F = !1,
          bt = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          dt = typeof clearTimeout == "function" ? clearTimeout : null,
          rt = typeof setImmediate < "u" ? setImmediate : null;
        function J(N) {
          for (var k = o(b); k !== null; ) {
            if (k.callback === null) f(b);
            else if (k.startTime <= N)
              f(b), (k.sortIndex = k.expirationTime), s(T, k);
            else break;
            k = o(b);
          }
        }
        function et(N) {
          if (((bt = !1), J(N), !F))
            if (o(T) !== null) (F = !0), jl();
            else {
              var k = o(b);
              k !== null && Ft(et, k.startTime - N);
            }
        }
        var B = !1,
          st = -1,
          Dt = 5,
          Tt = -1;
        function G() {
          return !(i.unstable_now() - Tt < Dt);
        }
        function it() {
          if (B) {
            var N = i.unstable_now();
            Tt = N;
            var k = !0;
            try {
              t: {
                (F = !1), bt && ((bt = !1), dt(st), (st = -1)), (V = !0);
                var w = Y;
                try {
                  l: {
                    for (
                      J(N), H = o(T);
                      H !== null && !(H.expirationTime > N && G());

                    ) {
                      var mt = H.callback;
                      if (typeof mt == "function") {
                        (H.callback = null), (Y = H.priorityLevel);
                        var y = mt(H.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof y == "function")) {
                          (H.callback = y), J(N), (k = !0);
                          break l;
                        }
                        H === o(T) && f(T), J(N);
                      } else f(T);
                      H = o(T);
                    }
                    if (H !== null) k = !0;
                    else {
                      var R = o(b);
                      R !== null && Ft(et, R.startTime - N), (k = !1);
                    }
                  }
                  break t;
                } finally {
                  (H = null), (Y = w), (V = !1);
                }
                k = void 0;
              }
            } finally {
              k ? $t() : (B = !1);
            }
          }
        }
        var $t;
        if (typeof rt == "function")
          $t = function () {
            rt(it);
          };
        else if (typeof MessageChannel < "u") {
          var Bl = new MessageChannel(),
            Ml = Bl.port2;
          (Bl.port1.onmessage = it),
            ($t = function () {
              Ml.postMessage(null);
            });
        } else
          $t = function () {
            L(it, 0);
          };
        function jl() {
          B || ((B = !0), $t());
        }
        function Ft(N, k) {
          st = L(function () {
            N(i.unstable_now());
          }, k);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            F || V || ((F = !0), jl());
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Dt = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return Y;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return o(T);
          }),
          (i.unstable_next = function (N) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = Y;
            }
            var w = Y;
            Y = k;
            try {
              return N();
            } finally {
              Y = w;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (N, k) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var w = Y;
            Y = N;
            try {
              return k();
            } finally {
              Y = w;
            }
          }),
          (i.unstable_scheduleCallback = function (N, k, w) {
            var mt = i.unstable_now();
            switch (
              (typeof w == "object" && w !== null
                ? ((w = w.delay),
                  (w = typeof w == "number" && 0 < w ? mt + w : mt))
                : (w = mt),
              N)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = w + y),
              (N = {
                id: U++,
                callback: k,
                priorityLevel: N,
                startTime: w,
                expirationTime: y,
                sortIndex: -1,
              }),
              w > mt
                ? ((N.sortIndex = w),
                  s(b, N),
                  o(T) === null &&
                    N === o(b) &&
                    (bt ? (dt(st), (st = -1)) : (bt = !0), Ft(et, w - mt)))
                : ((N.sortIndex = y), s(T, N), F || V || ((F = !0), jl())),
              N
            );
          }),
          (i.unstable_shouldYield = G),
          (i.unstable_wrapCallback = function (N) {
            var k = Y;
            return function () {
              var w = Y;
              Y = k;
              try {
                return N.apply(this, arguments);
              } finally {
                Y = w;
              }
            };
          });
      })(Mf)),
    Mf
  );
}
var jd;
function Vh() {
  return jd || ((jd = 1), (Df.exports = wh())), Df.exports;
}
var Rf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Lh() {
  if (Yd) return Kt;
  Yd = 1;
  var i = ri();
  function s(T) {
    var b = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        b += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return (
      "Minified React error #" +
      T +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(s(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    v = Symbol.for("react.portal");
  function E(T, b, U) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: H == null ? null : "" + H,
      children: T,
      containerInfo: b,
      implementation: U,
    };
  }
  var z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function M(T, b) {
    if (T === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Kt.createPortal = function (T, b) {
      var U =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(s(299));
      return E(T, b, null, U);
    }),
    (Kt.flushSync = function (T) {
      var b = z.T,
        U = f.p;
      try {
        if (((z.T = null), (f.p = 2), T)) return T();
      } finally {
        (z.T = b), (f.p = U), f.d.f();
      }
    }),
    (Kt.preconnect = function (T, b) {
      typeof T == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        f.d.C(T, b));
    }),
    (Kt.prefetchDNS = function (T) {
      typeof T == "string" && f.d.D(T);
    }),
    (Kt.preinit = function (T, b) {
      if (typeof T == "string" && b && typeof b.as == "string") {
        var U = b.as,
          H = M(U, b.crossOrigin),
          Y = typeof b.integrity == "string" ? b.integrity : void 0,
          V = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        U === "style"
          ? f.d.S(T, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: H,
              integrity: Y,
              fetchPriority: V,
            })
          : U === "script" &&
            f.d.X(T, {
              crossOrigin: H,
              integrity: Y,
              fetchPriority: V,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (T, b) {
      if (typeof T == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var U = M(b.as, b.crossOrigin);
            f.d.M(T, {
              crossOrigin: U,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && f.d.M(T);
    }),
    (Kt.preload = function (T, b) {
      if (
        typeof T == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var U = b.as,
          H = M(U, b.crossOrigin);
        f.d.L(T, U, {
          crossOrigin: H,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (T, b) {
      if (typeof T == "string")
        if (b) {
          var U = M(b.as, b.crossOrigin);
          f.d.m(T, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: U,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else f.d.m(T);
    }),
    (Kt.requestFormReset = function (T) {
      f.d.r(T);
    }),
    (Kt.unstable_batchedUpdates = function (T, b) {
      return T(b);
    }),
    (Kt.useFormState = function (T, b, U) {
      return z.H.useFormState(T, b, U);
    }),
    (Kt.useFormStatus = function () {
      return z.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.0.0"),
    Kt
  );
}
var Gd;
function Kh() {
  if (Gd) return Rf.exports;
  Gd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Rf.exports = Lh()), Rf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function Jh() {
  if (Xd) return qa;
  Xd = 1;
  var i = Vh(),
    s = ri(),
    o = Kh();
  function f(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function v(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var E = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    bt = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    rt = Symbol.for("react.lazy"),
    J = Symbol.for("react.offscreen"),
    et = Symbol.for("react.memo_cache_sentinel"),
    B = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (B && t[B]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Dt = Symbol.for("react.client.reference");
  function Tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case T:
        return "Fragment";
      case M:
        return "Portal";
      case U:
        return "Profiler";
      case b:
        return "StrictMode";
      case bt:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return (t.displayName || "Context") + ".Provider";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case dt:
          return (
            (l = t.displayName || null), l !== null ? l : Tt(t.type) || "Memo"
          );
        case rt:
          (l = t._payload), (t = t._init);
          try {
            return Tt(t(l));
          } catch {}
      }
    return null;
  }
  var G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = Object.assign,
    $t,
    Bl;
  function Ml(t) {
    if ($t === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ($t = (l && l[1]) || ""),
          (Bl =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      $t +
      t +
      Bl
    );
  }
  var jl = !1;
  function Ft(t, l) {
    if (!t || jl) return "";
    jl = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var D = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(D.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(D, []);
                } catch (p) {
                  var _ = p;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (p) {
                  _ = p;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                _ = p;
              }
              (D = t()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (p) {
            if (p && _ && typeof p.stack == "string") return [p.stack, _.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      a &&
        a.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        r = n[1];
      if (c && r) {
        var d = c.split(`
`),
          m = r.split(`
`);
        for (
          a = u = 0;
          u < d.length && !d[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (u === d.length || a === m.length)
          for (
            u = d.length - 1, a = m.length - 1;
            1 <= u && 0 <= a && d[u] !== m[a];

          )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (d[u] !== m[a]) {
            if (u !== 1 || a !== 1)
              do
                if ((u--, a--, 0 > a || d[u] !== m[a])) {
                  var A =
                    `
` + d[u].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", t.displayName)),
                    A
                  );
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      (jl = !1), (Error.prepareStackTrace = e);
    }
    return (e = t ? t.displayName || t.name : "") ? Ml(e) : "";
  }
  function N(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ml(t.type);
      case 16:
        return Ml("Lazy");
      case 13:
        return Ml("Suspense");
      case 19:
        return Ml("SuspenseList");
      case 0:
      case 15:
        return (t = Ft(t.type, !1)), t;
      case 11:
        return (t = Ft(t.type.render, !1)), t;
      case 1:
        return (t = Ft(t.type, !0)), t;
      default:
        return "";
    }
  }
  function k(t) {
    try {
      var l = "";
      do (l += N(t)), (t = t.return);
      while (t);
      return l;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  function w(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return);
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function mt(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (w(t) !== t) throw Error(f(188));
  }
  function R(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = w(t)), l === null)) throw Error(f(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (((u = a.return), u !== null)) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return y(a), t;
          if (n === u) return y(a), l;
          n = n.sibling;
        }
        throw Error(f(188));
      }
      if (e.return !== u.return) (e = a), (u = n);
      else {
        for (var c = !1, r = a.child; r; ) {
          if (r === e) {
            (c = !0), (e = a), (u = n);
            break;
          }
          if (r === u) {
            (c = !0), (u = a), (e = n);
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = n.child; r; ) {
            if (r === e) {
              (c = !0), (e = n), (u = a);
              break;
            }
            if (r === u) {
              (c = !0), (u = n), (e = a);
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (e.alternate !== u) throw Error(f(190));
    }
    if (e.tag !== 3) throw Error(f(188));
    return e.stateNode.current === e ? t : l;
  }
  function Z(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((l = Z(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var X = Array.isArray,
    x = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    at = { pending: !1, data: null, method: null, action: null },
    P = [],
    Jt = -1;
  function ot(t) {
    return { current: t };
  }
  function Rt(t) {
    0 > Jt || ((t.current = P[Jt]), (P[Jt] = null), Jt--);
  }
  function _t(t, l) {
    Jt++, (P[Jt] = t.current), (t.current = l);
  }
  var Rl = ot(null),
    ju = ot(null),
    ue = ot(null),
    Qa = ot(null);
  function Za(t, l) {
    switch ((_t(ue, l), _t(ju, t), _t(Rl, null), (t = l.nodeType), t)) {
      case 9:
      case 11:
        l = (l = l.documentElement) && (l = l.namespaceURI) ? cd(l) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? l.parentNode : l),
          (l = t.tagName),
          (t = t.namespaceURI))
        )
          (t = cd(t)), (l = fd(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Rt(Rl), _t(Rl, l);
  }
  function tu() {
    Rt(Rl), Rt(ju), Rt(ue);
  }
  function hi(t) {
    t.memoizedState !== null && _t(Qa, t);
    var l = Rl.current,
      e = fd(l, t.type);
    l !== e && (_t(ju, t), _t(Rl, e));
  }
  function wa(t) {
    ju.current === t && (Rt(Rl), Rt(ju)),
      Qa.current === t && (Rt(Qa), (Ra._currentValue = at));
  }
  var vi = Object.prototype.hasOwnProperty,
    mi = i.unstable_scheduleCallback,
    gi = i.unstable_cancelCallback,
    S0 = i.unstable_shouldYield,
    b0 = i.unstable_requestPaint,
    Ul = i.unstable_now,
    _0 = i.unstable_getCurrentPriorityLevel,
    Wf = i.unstable_ImmediatePriority,
    $f = i.unstable_UserBlockingPriority,
    Va = i.unstable_NormalPriority,
    T0 = i.unstable_LowPriority,
    Ff = i.unstable_IdlePriority,
    E0 = i.log,
    p0 = i.unstable_setDisableYieldValue,
    Yu = null,
    ll = null;
  function A0(t) {
    if (ll && typeof ll.onCommitFiberRoot == "function")
      try {
        ll.onCommitFiberRoot(Yu, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function ae(t) {
    if (
      (typeof E0 == "function" && p0(t),
      ll && typeof ll.setStrictMode == "function")
    )
      try {
        ll.setStrictMode(Yu, t);
      } catch {}
  }
  var el = Math.clz32 ? Math.clz32 : D0,
    z0 = Math.log,
    O0 = Math.LN2;
  function D0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((z0(t) / O0) | 0)) | 0;
  }
  var La = 128,
    Ka = 4194304;
  function Re(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ja(t, l) {
    var e = t.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      a = t.suspendedLanes,
      n = t.pingedLanes,
      c = t.warmLanes;
    t = t.finishedLanes !== 0;
    var r = e & 134217727;
    return (
      r !== 0
        ? ((e = r & ~a),
          e !== 0
            ? (u = Re(e))
            : ((n &= r),
              n !== 0
                ? (u = Re(n))
                : t || ((c = r & ~c), c !== 0 && (u = Re(c)))))
        : ((r = e & ~a),
          r !== 0
            ? (u = Re(r))
            : n !== 0
              ? (u = Re(n))
              : t || ((c = e & ~c), c !== 0 && (u = Re(c)))),
      u === 0
        ? 0
        : l !== 0 &&
            l !== u &&
            (l & a) === 0 &&
            ((a = u & -u),
            (c = l & -l),
            a >= c || (a === 32 && (c & 4194176) !== 0))
          ? l
          : u
    );
  }
  function Gu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function M0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return l + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var t = La;
    return (La <<= 1), (La & 4194176) === 0 && (La = 128), t;
  }
  function If() {
    var t = Ka;
    return (Ka <<= 1), (Ka & 62914560) === 0 && (Ka = 4194304), t;
  }
  function Si(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Xu(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function R0(t, l, e, u, a, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var r = t.entanglements,
      d = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var A = 31 - el(e),
        D = 1 << A;
      (r[A] = 0), (d[A] = -1);
      var _ = m[A];
      if (_ !== null)
        for (m[A] = null, A = 0; A < _.length; A++) {
          var p = _[A];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~D;
    }
    u !== 0 && tr(t, u, 0),
      n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function tr(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var u = 31 - el(l);
    (t.entangledLanes |= l),
      (t.entanglements[u] = t.entanglements[u] | 1073741824 | (e & 4194218));
  }
  function lr(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var u = 31 - el(e),
        a = 1 << u;
      (a & l) | (t[u] & l) && (t[u] |= l), (e &= ~a);
    }
  }
  function er(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ur() {
    var t = x.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Od(t.type));
  }
  function U0(t, l) {
    var e = x.p;
    try {
      return (x.p = t), l();
    } finally {
      x.p = e;
    }
  }
  var ne = Math.random().toString(36).slice(2),
    Vt = "__reactFiber$" + ne,
    Pt = "__reactProps$" + ne,
    lu = "__reactContainer$" + ne,
    bi = "__reactEvents$" + ne,
    N0 = "__reactListeners$" + ne,
    H0 = "__reactHandles$" + ne,
    ar = "__reactResources$" + ne,
    Qu = "__reactMarker$" + ne;
  function _i(t) {
    delete t[Vt], delete t[Pt], delete t[bi], delete t[N0], delete t[H0];
  }
  function Ue(t) {
    var l = t[Vt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[lu] || e[Vt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = od(t); t !== null; ) {
            if ((e = t[Vt])) return e;
            t = od(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function eu(t) {
    if ((t = t[Vt] || t[lu])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Zu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(f(33));
  }
  function uu(t) {
    var l = t[ar];
    return (
      l ||
        (l = t[ar] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Bt(t) {
    t[Qu] = !0;
  }
  var nr = new Set(),
    ir = {};
  function Ne(t, l) {
    au(t, l), au(t + "Capture", l);
  }
  function au(t, l) {
    for (ir[t] = l, t = 0; t < l.length; t++) nr.add(l[t]);
  }
  var Yl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    x0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    cr = {},
    fr = {};
  function C0(t) {
    return vi.call(fr, t)
      ? !0
      : vi.call(cr, t)
        ? !1
        : x0.test(t)
          ? (fr[t] = !0)
          : ((cr[t] = !0), !1);
  }
  function ka(t, l, e) {
    if (C0(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Wa(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Gl(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + u);
    }
  }
  function sl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function rr(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function q0(t) {
    var l = rr(t) ? "checked" : "value",
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      u = "" + t[l];
    if (
      !t.hasOwnProperty(l) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var a = e.get,
        n = e.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function $a(t) {
    t._valueTracker || (t._valueTracker = q0(t));
  }
  function sr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      u = "";
    return (
      t && (u = rr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = u),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Fa(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var B0 = /[\n"\\]/g;
  function ol(t) {
    return t.replace(B0, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ti(t, l, e, u, a, n, c, r) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      l != null
        ? c === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + sl(l))
          : t.value !== "" + sl(l) && (t.value = "" + sl(l))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      l != null
        ? Ei(t, c, sl(l))
        : e != null
          ? Ei(t, c, sl(e))
          : u != null && t.removeAttribute("value"),
      a == null && n != null && (t.defaultChecked = !!n),
      a != null &&
        (t.checked = a && typeof a != "function" && typeof a != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (t.name = "" + sl(r))
        : t.removeAttribute("name");
  }
  function or(t, l, e, u, a, n, c, r) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || l != null)) return;
      (e = e != null ? "" + sl(e) : ""),
        (l = l != null ? "" + sl(l) : e),
        r || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (u = u ?? a),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (t.checked = r ? t.checked : !!u),
      (t.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function Ei(t, l, e) {
    (l === "number" && Fa(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function nu(t, l, e, u) {
    if (((t = t.options), l)) {
      l = {};
      for (var a = 0; a < e.length; a++) l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        (a = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== a && (t[e].selected = a),
          a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + sl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          (t[a].selected = !0), u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function dr(t, l, e) {
    if (
      l != null &&
      ((l = "" + sl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + sl(e) : "";
  }
  function yr(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(f(92));
        if (X(u)) {
          if (1 < u.length) throw Error(f(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), (l = e);
    }
    (e = sl(l)),
      (t.defaultValue = e),
      (u = t.textContent),
      u === e && u !== "" && u !== null && (t.value = u);
  }
  function iu(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var j0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function hr(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? u
        ? t.setProperty(l, "")
        : l === "float"
          ? (t.cssFloat = "")
          : (t[l] = "")
      : u
        ? t.setProperty(l, e)
        : typeof e != "number" || e === 0 || j0.has(l)
          ? l === "float"
            ? (t.cssFloat = e)
            : (t[l] = ("" + e).trim())
          : (t[l] = e + "px");
  }
  function vr(t, l, e) {
    if (l != null && typeof l != "object") throw Error(f(62));
    if (((t = t.style), e != null)) {
      for (var u in e)
        !e.hasOwnProperty(u) ||
          (l != null && l.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? t.setProperty(u, "")
            : u === "float"
              ? (t.cssFloat = "")
              : (t[u] = ""));
      for (var a in l)
        (u = l[a]), l.hasOwnProperty(a) && e[a] !== u && hr(t, a, u);
    } else for (var n in l) l.hasOwnProperty(n) && hr(t, n, l[n]);
  }
  function pi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Y0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    G0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pa(t) {
    return G0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ai = null;
  function zi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var cu = null,
    fu = null;
  function mr(t) {
    var l = eu(t);
    if (l && (t = l.stateNode)) {
      var e = t[Pt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (Ti(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + ol("" + l) + '"][type="radio"]',
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[Pt] || null;
                if (!a) throw Error(f(90));
                Ti(
                  u,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (l = 0; l < e.length; l++)
              (u = e[l]), u.form === t.form && sr(u);
          }
          break t;
        case "textarea":
          dr(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && nu(t, !!e.multiple, l, !1);
      }
    }
  }
  var Oi = !1;
  function gr(t, l, e) {
    if (Oi) return t(l, e);
    Oi = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (
        ((Oi = !1),
        (cu !== null || fu !== null) &&
          (Bn(), cu && ((l = cu), (t = fu), (fu = cu = null), mr(l), t)))
      )
        for (l = 0; l < t.length; l++) mr(t[l]);
    }
  }
  function wu(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[Pt] || null;
    if (u === null) return null;
    e = u[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((t = t.type),
          (u = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !u);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(f(231, l, typeof e));
    return e;
  }
  var Di = !1;
  if (Yl)
    try {
      var Vu = {};
      Object.defineProperty(Vu, "passive", {
        get: function () {
          Di = !0;
        },
      }),
        window.addEventListener("test", Vu, Vu),
        window.removeEventListener("test", Vu, Vu);
    } catch {
      Di = !1;
    }
  var ie = null,
    Mi = null,
    Ia = null;
  function Sr() {
    if (Ia) return Ia;
    var t,
      l = Mi,
      e = l.length,
      u,
      a = "value" in ie ? ie.value : ie.textContent,
      n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++);
    var c = e - t;
    for (u = 1; u <= c && l[e - u] === a[n - u]; u++);
    return (Ia = a.slice(t, 1 < u ? 1 - u : void 0));
  }
  function tn(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ln() {
    return !0;
  }
  function br() {
    return !1;
  }
  function It(t) {
    function l(e, u, a, n, c) {
      (this._reactName = e),
        (this._targetInst = a),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var r in t)
        t.hasOwnProperty(r) && ((e = t[r]), (this[r] = e ? e(n) : n[r]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? ln
          : br),
        (this.isPropagationStopped = br),
        this
      );
    }
    return (
      it(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = ln));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = ln));
        },
        persist: function () {},
        isPersistent: ln,
      }),
      l
    );
  }
  var He = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    en = It(He),
    Lu = it({}, He, { view: 0, detail: 0 }),
    X0 = It(Lu),
    Ri,
    Ui,
    Ku,
    un = it({}, Lu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Hi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ku &&
              (Ku && t.type === "mousemove"
                ? ((Ri = t.screenX - Ku.screenX), (Ui = t.screenY - Ku.screenY))
                : (Ui = Ri = 0),
              (Ku = t)),
            Ri);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ui;
      },
    }),
    _r = It(un),
    Q0 = it({}, un, { dataTransfer: 0 }),
    Z0 = It(Q0),
    w0 = it({}, Lu, { relatedTarget: 0 }),
    Ni = It(w0),
    V0 = it({}, He, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    L0 = It(V0),
    K0 = it({}, He, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    J0 = It(K0),
    k0 = it({}, He, { data: 0 }),
    Tr = It(k0),
    W0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    $0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    F0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function P0(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = F0[t])
        ? !!l[t]
        : !1;
  }
  function Hi() {
    return P0;
  }
  var I0 = it({}, Lu, {
      key: function (t) {
        if (t.key) {
          var l = W0[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = tn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? $0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hi,
      charCode: function (t) {
        return t.type === "keypress" ? tn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? tn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    ty = It(I0),
    ly = it({}, un, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Er = It(ly),
    ey = it({}, Lu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hi,
    }),
    uy = It(ey),
    ay = it({}, He, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ny = It(ay),
    iy = it({}, un, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    cy = It(iy),
    fy = it({}, He, { newState: 0, oldState: 0 }),
    ry = It(fy),
    sy = [9, 13, 27, 32],
    xi = Yl && "CompositionEvent" in window,
    Ju = null;
  Yl && "documentMode" in document && (Ju = document.documentMode);
  var oy = Yl && "TextEvent" in window && !Ju,
    pr = Yl && (!xi || (Ju && 8 < Ju && 11 >= Ju)),
    Ar = " ",
    zr = !1;
  function Or(t, l) {
    switch (t) {
      case "keyup":
        return sy.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Dr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ru = !1;
  function dy(t, l) {
    switch (t) {
      case "compositionend":
        return Dr(l);
      case "keypress":
        return l.which !== 32 ? null : ((zr = !0), Ar);
      case "textInput":
        return (t = l.data), t === Ar && zr ? null : t;
      default:
        return null;
    }
  }
  function yy(t, l) {
    if (ru)
      return t === "compositionend" || (!xi && Or(t, l))
        ? ((t = Sr()), (Ia = Mi = ie = null), (ru = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return pr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var hy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Mr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!hy[t.type] : l === "textarea";
  }
  function Rr(t, l, e, u) {
    cu ? (fu ? fu.push(u) : (fu = [u])) : (cu = u),
      (l = Qn(l, "onChange")),
      0 < l.length &&
        ((e = new en("onChange", "change", null, e, u)),
        t.push({ event: e, listeners: l }));
  }
  var ku = null,
    Wu = null;
  function vy(t) {
    ed(t, 0);
  }
  function an(t) {
    var l = Zu(t);
    if (sr(l)) return t;
  }
  function Ur(t, l) {
    if (t === "change") return l;
  }
  var Nr = !1;
  if (Yl) {
    var Ci;
    if (Yl) {
      var qi = "oninput" in document;
      if (!qi) {
        var Hr = document.createElement("div");
        Hr.setAttribute("oninput", "return;"),
          (qi = typeof Hr.oninput == "function");
      }
      Ci = qi;
    } else Ci = !1;
    Nr = Ci && (!document.documentMode || 9 < document.documentMode);
  }
  function xr() {
    ku && (ku.detachEvent("onpropertychange", Cr), (Wu = ku = null));
  }
  function Cr(t) {
    if (t.propertyName === "value" && an(Wu)) {
      var l = [];
      Rr(l, Wu, t, zi(t)), gr(vy, l);
    }
  }
  function my(t, l, e) {
    t === "focusin"
      ? (xr(), (ku = l), (Wu = e), ku.attachEvent("onpropertychange", Cr))
      : t === "focusout" && xr();
  }
  function gy(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return an(Wu);
  }
  function Sy(t, l) {
    if (t === "click") return an(l);
  }
  function by(t, l) {
    if (t === "input" || t === "change") return an(l);
  }
  function _y(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var ul = typeof Object.is == "function" ? Object.is : _y;
  function $u(t, l) {
    if (ul(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!vi.call(l, a) || !ul(t[a], l[a])) return !1;
    }
    return !0;
  }
  function qr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Br(t, l) {
    var e = qr(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (((u = t + e.textContent.length), t <= l && u >= l))
          return { node: e, offset: l - t };
        t = u;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = qr(e);
    }
  }
  function jr(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? jr(t, l.parentNode)
            : "contains" in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1;
  }
  function Yr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Fa(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Fa(t.document);
    }
    return l;
  }
  function Bi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function Ty(t, l) {
    var e = Yr(l);
    l = t.focusedElem;
    var u = t.selectionRange;
    if (
      e !== l &&
      l &&
      l.ownerDocument &&
      jr(l.ownerDocument.documentElement, l)
    ) {
      if (u !== null && Bi(l)) {
        if (
          ((t = u.start),
          (e = u.end),
          e === void 0 && (e = t),
          "selectionStart" in l)
        )
          (l.selectionStart = t),
            (l.selectionEnd = Math.min(e, l.value.length));
        else if (
          ((e = ((t = l.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var a = l.textContent.length,
            n = Math.min(u.start, a);
          (u = u.end === void 0 ? n : Math.min(u.end, a)),
            !e.extend && n > u && ((a = u), (u = n), (n = a)),
            (a = Br(l, n));
          var c = Br(l, u);
          a &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            n > u
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = l; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < t.length; l++)
        (e = t[l]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Ey = Yl && "documentMode" in document && 11 >= document.documentMode,
    su = null,
    ji = null,
    Fu = null,
    Yi = !1;
  function Gr(t, l, e) {
    var u =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Yi ||
      su == null ||
      su !== Fa(u) ||
      ((u = su),
      "selectionStart" in u && Bi(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Fu && $u(Fu, u)) ||
        ((Fu = u),
        (u = Qn(ji, "onSelect")),
        0 < u.length &&
          ((l = new en("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: u }),
          (l.target = su))));
  }
  function xe(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var ou = {
      animationend: xe("Animation", "AnimationEnd"),
      animationiteration: xe("Animation", "AnimationIteration"),
      animationstart: xe("Animation", "AnimationStart"),
      transitionrun: xe("Transition", "TransitionRun"),
      transitionstart: xe("Transition", "TransitionStart"),
      transitioncancel: xe("Transition", "TransitionCancel"),
      transitionend: xe("Transition", "TransitionEnd"),
    },
    Gi = {},
    Xr = {};
  Yl &&
    ((Xr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ou.animationend.animation,
      delete ou.animationiteration.animation,
      delete ou.animationstart.animation),
    "TransitionEvent" in window || delete ou.transitionend.transition);
  function Ce(t) {
    if (Gi[t]) return Gi[t];
    if (!ou[t]) return t;
    var l = ou[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in Xr) return (Gi[t] = l[e]);
    return t;
  }
  var Qr = Ce("animationend"),
    Zr = Ce("animationiteration"),
    wr = Ce("animationstart"),
    py = Ce("transitionrun"),
    Ay = Ce("transitionstart"),
    zy = Ce("transitioncancel"),
    Vr = Ce("transitionend"),
    Lr = new Map(),
    Kr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function pl(t, l) {
    Lr.set(t, l), Ne(l, [t]);
  }
  var dl = [],
    du = 0,
    Xi = 0;
  function nn() {
    for (var t = du, l = (Xi = du = 0); l < t; ) {
      var e = dl[l];
      dl[l++] = null;
      var u = dl[l];
      dl[l++] = null;
      var a = dl[l];
      dl[l++] = null;
      var n = dl[l];
      if (((dl[l++] = null), u !== null && a !== null)) {
        var c = u.pending;
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
          (u.pending = a);
      }
      n !== 0 && Jr(e, a, n);
    }
  }
  function cn(t, l, e, u) {
    (dl[du++] = t),
      (dl[du++] = l),
      (dl[du++] = e),
      (dl[du++] = u),
      (Xi |= u),
      (t.lanes |= u),
      (t = t.alternate),
      t !== null && (t.lanes |= u);
  }
  function Qi(t, l, e, u) {
    return cn(t, l, e, u), fn(t);
  }
  function ce(t, l) {
    return cn(t, null, null, l), fn(t);
  }
  function Jr(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (u = n.alternate),
        u !== null && (u.childLanes |= e),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (a = !0)),
        (t = n),
        (n = n.return);
    a &&
      l !== null &&
      t.tag === 3 &&
      ((n = t.stateNode),
      (a = 31 - el(e)),
      (n = n.hiddenUpdates),
      (t = n[a]),
      t === null ? (n[a] = [l]) : t.push(l),
      (l.lane = e | 536870912));
  }
  function fn(t) {
    if (50 < Ea) throw ((Ea = 0), (Jc = null), Error(f(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var yu = {},
    kr = new WeakMap();
  function yl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = kr.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: k(l) }), kr.set(t, l), l);
    }
    return { value: t, source: l, stack: k(l) };
  }
  var hu = [],
    vu = 0,
    rn = null,
    sn = 0,
    hl = [],
    vl = 0,
    qe = null,
    Xl = 1,
    Ql = "";
  function Be(t, l) {
    (hu[vu++] = sn), (hu[vu++] = rn), (rn = t), (sn = l);
  }
  function Wr(t, l, e) {
    (hl[vl++] = Xl), (hl[vl++] = Ql), (hl[vl++] = qe), (qe = t);
    var u = Xl;
    t = Ql;
    var a = 32 - el(u) - 1;
    (u &= ~(1 << a)), (e += 1);
    var n = 32 - el(l) + a;
    if (30 < n) {
      var c = a - (a % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (a -= c),
        (Xl = (1 << (32 - el(l) + a)) | (e << a) | u),
        (Ql = n + t);
    } else (Xl = (1 << n) | (e << a) | u), (Ql = t);
  }
  function Zi(t) {
    t.return !== null && (Be(t, 1), Wr(t, 1, 0));
  }
  function wi(t) {
    for (; t === rn; )
      (rn = hu[--vu]), (hu[vu] = null), (sn = hu[--vu]), (hu[vu] = null);
    for (; t === qe; )
      (qe = hl[--vl]),
        (hl[vl] = null),
        (Ql = hl[--vl]),
        (hl[vl] = null),
        (Xl = hl[--vl]),
        (hl[vl] = null);
  }
  var kt = null,
    Xt = null,
    ct = !1,
    Al = null,
    Nl = !1,
    Vi = Error(f(519));
  function je(t) {
    var l = Error(f(418, ""));
    throw (ta(yl(l, t)), Vi);
  }
  function $r(t) {
    var l = t.stateNode,
      e = t.type,
      u = t.memoizedProps;
    switch (((l[Vt] = t), (l[Pt] = u), e)) {
      case "dialog":
        ut("cancel", l), ut("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Aa.length; e++) ut(Aa[e], l);
        break;
      case "source":
        ut("error", l);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", l), ut("load", l);
        break;
      case "details":
        ut("toggle", l);
        break;
      case "input":
        ut("invalid", l),
          or(
            l,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          $a(l);
        break;
      case "select":
        ut("invalid", l);
        break;
      case "textarea":
        ut("invalid", l), yr(l, u.value, u.defaultValue, u.children), $a(l);
    }
    (e = u.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      u.suppressHydrationWarning === !0 ||
      id(l.textContent, e)
        ? (u.popover != null && (ut("beforetoggle", l), ut("toggle", l)),
          u.onScroll != null && ut("scroll", l),
          u.onScrollEnd != null && ut("scrollend", l),
          u.onClick != null && (l.onclick = Zn),
          (l = !0))
        : (l = !1),
      l || je(t);
  }
  function Fr(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 3:
        case 27:
          Nl = !0;
          return;
        case 5:
        case 13:
          Nl = !1;
          return;
        default:
          kt = kt.return;
      }
  }
  function Pu(t) {
    if (t !== kt) return !1;
    if (!ct) return Fr(t), (ct = !0), !1;
    var l = !1,
      e;
    if (
      ((e = t.tag !== 3 && t.tag !== 27) &&
        ((e = t.tag === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || of(t.type, t.memoizedProps))),
        (e = !e)),
      e && (l = !0),
      l && Xt && je(t),
      Fr(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                Xt = Ol(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else Xt = kt ? Ol(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Iu() {
    (Xt = kt = null), (ct = !1);
  }
  function ta(t) {
    Al === null ? (Al = [t]) : Al.push(t);
  }
  var la = Error(f(460)),
    Pr = Error(f(474)),
    Li = { then: function () {} };
  function Ir(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function on() {}
  function ts(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(on, on), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), t === la ? Error(f(483)) : t);
      default:
        if (typeof l.status == "string") l.then(on, on);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = l),
            (t.status = "pending"),
            t.then(
              function (u) {
                if (l.status === "pending") {
                  var a = l;
                  (a.status = "fulfilled"), (a.value = u);
                }
              },
              function (u) {
                if (l.status === "pending") {
                  var a = l;
                  (a.status = "rejected"), (a.reason = u);
                }
              },
            );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), t === la ? Error(f(483)) : t);
        }
        throw ((ea = l), la);
    }
  }
  var ea = null;
  function ls() {
    if (ea === null) throw Error(f(459));
    var t = ea;
    return (ea = null), t;
  }
  var mu = null,
    ua = 0;
  function dn(t) {
    var l = ua;
    return (ua += 1), mu === null && (mu = []), ts(mu, t, l);
  }
  function aa(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function yn(t, l) {
    throw l.$$typeof === E
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t,
          ),
        ));
  }
  function es(t) {
    var l = t._init;
    return l(t._payload);
  }
  function us(t) {
    function l(g, h) {
      if (t) {
        var S = g.deletions;
        S === null ? ((g.deletions = [h]), (g.flags |= 16)) : S.push(h);
      }
    }
    function e(g, h) {
      if (!t) return null;
      for (; h !== null; ) l(g, h), (h = h.sibling);
      return null;
    }
    function u(g) {
      for (var h = new Map(); g !== null; )
        g.key !== null ? h.set(g.key, g) : h.set(g.index, g), (g = g.sibling);
      return h;
    }
    function a(g, h) {
      return (g = be(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function n(g, h, S) {
      return (
        (g.index = S),
        t
          ? ((S = g.alternate),
            S !== null
              ? ((S = S.index), S < h ? ((g.flags |= 33554434), h) : S)
              : ((g.flags |= 33554434), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function c(g) {
      return t && g.alternate === null && (g.flags |= 33554434), g;
    }
    function r(g, h, S, O) {
      return h === null || h.tag !== 6
        ? ((h = Gc(S, g.mode, O)), (h.return = g), h)
        : ((h = a(h, S)), (h.return = g), h);
    }
    function d(g, h, S, O) {
      var C = S.type;
      return C === T
        ? A(g, h, S.props.children, O, S.key)
        : h !== null &&
            (h.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === rt &&
                es(C) === h.type))
          ? ((h = a(h, S.props)), aa(h, S), (h.return = g), h)
          : ((h = Nn(S.type, S.key, S.props, null, g.mode, O)),
            aa(h, S),
            (h.return = g),
            h);
    }
    function m(g, h, S, O) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== S.containerInfo ||
        h.stateNode.implementation !== S.implementation
        ? ((h = Xc(S, g.mode, O)), (h.return = g), h)
        : ((h = a(h, S.children || [])), (h.return = g), h);
    }
    function A(g, h, S, O, C) {
      return h === null || h.tag !== 7
        ? ((h = Je(S, g.mode, O, C)), (h.return = g), h)
        : ((h = a(h, S)), (h.return = g), h);
    }
    function D(g, h, S) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = Gc("" + h, g.mode, S)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case z:
            return (
              (S = Nn(h.type, h.key, h.props, null, g.mode, S)),
              aa(S, h),
              (S.return = g),
              S
            );
          case M:
            return (h = Xc(h, g.mode, S)), (h.return = g), h;
          case rt:
            var O = h._init;
            return (h = O(h._payload)), D(g, h, S);
        }
        if (X(h) || st(h))
          return (h = Je(h, g.mode, S, null)), (h.return = g), h;
        if (typeof h.then == "function") return D(g, dn(h), S);
        if (h.$$typeof === V) return D(g, Mn(g, h), S);
        yn(g, h);
      }
      return null;
    }
    function _(g, h, S, O) {
      var C = h !== null ? h.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return C !== null ? null : r(g, h, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case z:
            return S.key === C ? d(g, h, S, O) : null;
          case M:
            return S.key === C ? m(g, h, S, O) : null;
          case rt:
            return (C = S._init), (S = C(S._payload)), _(g, h, S, O);
        }
        if (X(S) || st(S)) return C !== null ? null : A(g, h, S, O, null);
        if (typeof S.then == "function") return _(g, h, dn(S), O);
        if (S.$$typeof === V) return _(g, h, Mn(g, S), O);
        yn(g, S);
      }
      return null;
    }
    function p(g, h, S, O, C) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (g = g.get(S) || null), r(h, g, "" + O, C);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case z:
            return (
              (g = g.get(O.key === null ? S : O.key) || null), d(h, g, O, C)
            );
          case M:
            return (
              (g = g.get(O.key === null ? S : O.key) || null), m(h, g, O, C)
            );
          case rt:
            var tt = O._init;
            return (O = tt(O._payload)), p(g, h, S, O, C);
        }
        if (X(O) || st(O)) return (g = g.get(S) || null), A(h, g, O, C, null);
        if (typeof O.then == "function") return p(g, h, S, dn(O), C);
        if (O.$$typeof === V) return p(g, h, S, Mn(h, O), C);
        yn(h, O);
      }
      return null;
    }
    function q(g, h, S, O) {
      for (
        var C = null, tt = null, j = h, Q = (h = 0), Gt = null;
        j !== null && Q < S.length;
        Q++
      ) {
        j.index > Q ? ((Gt = j), (j = null)) : (Gt = j.sibling);
        var ft = _(g, j, S[Q], O);
        if (ft === null) {
          j === null && (j = Gt);
          break;
        }
        t && j && ft.alternate === null && l(g, j),
          (h = n(ft, h, Q)),
          tt === null ? (C = ft) : (tt.sibling = ft),
          (tt = ft),
          (j = Gt);
      }
      if (Q === S.length) return e(g, j), ct && Be(g, Q), C;
      if (j === null) {
        for (; Q < S.length; Q++)
          (j = D(g, S[Q], O)),
            j !== null &&
              ((h = n(j, h, Q)),
              tt === null ? (C = j) : (tt.sibling = j),
              (tt = j));
        return ct && Be(g, Q), C;
      }
      for (j = u(j); Q < S.length; Q++)
        (Gt = p(j, g, Q, S[Q], O)),
          Gt !== null &&
            (t &&
              Gt.alternate !== null &&
              j.delete(Gt.key === null ? Q : Gt.key),
            (h = n(Gt, h, Q)),
            tt === null ? (C = Gt) : (tt.sibling = Gt),
            (tt = Gt));
      return (
        t &&
          j.forEach(function (Oe) {
            return l(g, Oe);
          }),
        ct && Be(g, Q),
        C
      );
    }
    function K(g, h, S, O) {
      if (S == null) throw Error(f(151));
      for (
        var C = null, tt = null, j = h, Q = (h = 0), Gt = null, ft = S.next();
        j !== null && !ft.done;
        Q++, ft = S.next()
      ) {
        j.index > Q ? ((Gt = j), (j = null)) : (Gt = j.sibling);
        var Oe = _(g, j, ft.value, O);
        if (Oe === null) {
          j === null && (j = Gt);
          break;
        }
        t && j && Oe.alternate === null && l(g, j),
          (h = n(Oe, h, Q)),
          tt === null ? (C = Oe) : (tt.sibling = Oe),
          (tt = Oe),
          (j = Gt);
      }
      if (ft.done) return e(g, j), ct && Be(g, Q), C;
      if (j === null) {
        for (; !ft.done; Q++, ft = S.next())
          (ft = D(g, ft.value, O)),
            ft !== null &&
              ((h = n(ft, h, Q)),
              tt === null ? (C = ft) : (tt.sibling = ft),
              (tt = ft));
        return ct && Be(g, Q), C;
      }
      for (j = u(j); !ft.done; Q++, ft = S.next())
        (ft = p(j, g, Q, ft.value, O)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              j.delete(ft.key === null ? Q : ft.key),
            (h = n(ft, h, Q)),
            tt === null ? (C = ft) : (tt.sibling = ft),
            (tt = ft));
      return (
        t &&
          j.forEach(function (Gh) {
            return l(g, Gh);
          }),
        ct && Be(g, Q),
        C
      );
    }
    function Ot(g, h, S, O) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === T &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case z:
            t: {
              for (var C = S.key; h !== null; ) {
                if (h.key === C) {
                  if (((C = S.type), C === T)) {
                    if (h.tag === 7) {
                      e(g, h.sibling),
                        (O = a(h, S.props.children)),
                        (O.return = g),
                        (g = O);
                      break t;
                    }
                  } else if (
                    h.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === rt &&
                      es(C) === h.type)
                  ) {
                    e(g, h.sibling),
                      (O = a(h, S.props)),
                      aa(O, S),
                      (O.return = g),
                      (g = O);
                    break t;
                  }
                  e(g, h);
                  break;
                } else l(g, h);
                h = h.sibling;
              }
              S.type === T
                ? ((O = Je(S.props.children, g.mode, O, S.key)),
                  (O.return = g),
                  (g = O))
                : ((O = Nn(S.type, S.key, S.props, null, g.mode, O)),
                  aa(O, S),
                  (O.return = g),
                  (g = O));
            }
            return c(g);
          case M:
            t: {
              for (C = S.key; h !== null; ) {
                if (h.key === C)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === S.containerInfo &&
                    h.stateNode.implementation === S.implementation
                  ) {
                    e(g, h.sibling),
                      (O = a(h, S.children || [])),
                      (O.return = g),
                      (g = O);
                    break t;
                  } else {
                    e(g, h);
                    break;
                  }
                else l(g, h);
                h = h.sibling;
              }
              (O = Xc(S, g.mode, O)), (O.return = g), (g = O);
            }
            return c(g);
          case rt:
            return (C = S._init), (S = C(S._payload)), Ot(g, h, S, O);
        }
        if (X(S)) return q(g, h, S, O);
        if (st(S)) {
          if (((C = st(S)), typeof C != "function")) throw Error(f(150));
          return (S = C.call(S)), K(g, h, S, O);
        }
        if (typeof S.then == "function") return Ot(g, h, dn(S), O);
        if (S.$$typeof === V) return Ot(g, h, Mn(g, S), O);
        yn(g, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          h !== null && h.tag === 6
            ? (e(g, h.sibling), (O = a(h, S)), (O.return = g), (g = O))
            : (e(g, h), (O = Gc(S, g.mode, O)), (O.return = g), (g = O)),
          c(g))
        : e(g, h);
    }
    return function (g, h, S, O) {
      try {
        ua = 0;
        var C = Ot(g, h, S, O);
        return (mu = null), C;
      } catch (j) {
        if (j === la) throw j;
        var tt = bl(29, j, null, g.mode);
        return (tt.lanes = O), (tt.return = g), tt;
      } finally {
      }
    };
  }
  var Ye = us(!0),
    as = us(!1),
    gu = ot(null),
    hn = ot(0);
  function ns(t, l) {
    (t = Pl), _t(hn, t), _t(gu, l), (Pl = t | l.baseLanes);
  }
  function Ki() {
    _t(hn, Pl), _t(gu, gu.current);
  }
  function Ji() {
    (Pl = hn.current), Rt(gu), Rt(hn);
  }
  var ml = ot(null),
    Hl = null;
  function fe(t) {
    var l = t.alternate;
    _t(Ct, Ct.current & 1),
      _t(ml, t),
      Hl === null &&
        (l === null || gu.current !== null || l.memoizedState !== null) &&
        (Hl = t);
  }
  function is(t) {
    if (t.tag === 22) {
      if ((_t(Ct, Ct.current), _t(ml, t), Hl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Hl = t);
      }
    } else re();
  }
  function re() {
    _t(Ct, Ct.current), _t(ml, ml.current);
  }
  function Zl(t) {
    Rt(ml), Hl === t && (Hl = null), Rt(Ct);
  }
  var Ct = ot(0);
  function vn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (
          e !== null &&
          ((e = e.dehydrated), e === null || e.data === "$?" || e.data === "$!")
        )
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        (l.child.return = l), (l = l.child);
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      (l.sibling.return = l.return), (l = l.sibling);
    }
    return null;
  }
  var Oy =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, u) {
                  t.push(u);
                },
              });
            this.abort = function () {
              (l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                });
            };
          },
    Dy = i.unstable_scheduleCallback,
    My = i.unstable_NormalPriority,
    qt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ki() {
    return { controller: new Oy(), data: new Map(), refCount: 0 };
  }
  function na(t) {
    t.refCount--,
      t.refCount === 0 &&
        Dy(My, function () {
          t.controller.abort();
        });
  }
  var ia = null,
    Wi = 0,
    Su = 0,
    bu = null;
  function Ry(t, l) {
    if (ia === null) {
      var e = (ia = []);
      (Wi = 0),
        (Su = lf()),
        (bu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            e.push(u);
          },
        });
    }
    return Wi++, l.then(cs, cs), l;
  }
  function cs() {
    if (--Wi === 0 && ia !== null) {
      bu !== null && (bu.status = "fulfilled");
      var t = ia;
      (ia = null), (Su = 0), (bu = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Uy(t, l) {
    var e = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          e.push(a);
        },
      };
    return (
      t.then(
        function () {
          (u.status = "fulfilled"), (u.value = l);
          for (var a = 0; a < e.length; a++) (0, e[a])(l);
        },
        function (a) {
          for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)
            (0, e[a])(void 0);
        },
      ),
      u
    );
  }
  var fs = G.S;
  G.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Ry(t, l),
      fs !== null && fs(t, l);
  };
  var Ge = ot(null);
  function $i() {
    var t = Ge.current;
    return t !== null ? t : gt.pooledCache;
  }
  function mn(t, l) {
    l === null ? _t(Ge, Ge.current) : _t(Ge, l.pool);
  }
  function rs() {
    var t = $i();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var se = 0,
    I = null,
    yt = null,
    Ut = null,
    gn = !1,
    _u = !1,
    Xe = !1,
    Sn = 0,
    ca = 0,
    Tu = null,
    Ny = 0;
  function Mt() {
    throw Error(f(321));
  }
  function Fi(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ul(t[e], l[e])) return !1;
    return !0;
  }
  function Pi(t, l, e, u, a, n) {
    return (
      (se = n),
      (I = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? Qe : oe),
      (Xe = !1),
      (n = e(u, a)),
      (Xe = !1),
      _u && (n = os(l, e, u, a)),
      ss(t),
      n
    );
  }
  function ss(t) {
    G.H = xl;
    var l = yt !== null && yt.next !== null;
    if (((se = 0), (Ut = yt = I = null), (gn = !1), (ca = 0), (Tu = null), l))
      throw Error(f(300));
    t === null ||
      jt ||
      ((t = t.dependencies), t !== null && Dn(t) && (jt = !0));
  }
  function os(t, l, e, u) {
    I = t;
    var a = 0;
    do {
      if ((_u && (Tu = null), (ca = 0), (_u = !1), 25 <= a))
        throw Error(f(301));
      if (((a += 1), (Ut = yt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (G.H = Ze), (n = l(e, u));
    } while (_u);
    return n;
  }
  function Hy() {
    var t = G.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? fa(l) : l),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (I.flags |= 1024),
      l
    );
  }
  function Ii() {
    var t = Sn !== 0;
    return (Sn = 0), t;
  }
  function tc(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function lc(t) {
    if (gn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      gn = !1;
    }
    (se = 0), (Ut = yt = I = null), (_u = !1), (ca = Sn = 0), (Tu = null);
  }
  function tl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (I.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Nt() {
    if (yt === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var l = Ut === null ? I.memoizedState : Ut.next;
    if (l !== null) (Ut = l), (yt = t);
    else {
      if (t === null)
        throw I.alternate === null ? Error(f(467)) : Error(f(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Ut === null ? (I.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  var bn;
  bn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function fa(t) {
    var l = ca;
    return (
      (ca += 1),
      Tu === null && (Tu = []),
      (t = ts(Tu, t, l)),
      (l = I),
      (Ut === null ? l.memoizedState : Ut.next) === null &&
        ((l = l.alternate),
        (G.H = l === null || l.memoizedState === null ? Qe : oe)),
      t
    );
  }
  function _n(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return fa(t);
      if (t.$$typeof === V) return Lt(t);
    }
    throw Error(f(438, String(t)));
  }
  function ec(t) {
    var l = null,
      e = I.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var u = I.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (l = {
              data: u.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = bn()), (I.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++) e[u] = et;
    return l.index++, e;
  }
  function wl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Tn(t) {
    var l = Nt();
    return uc(l, yt, t);
  }
  function uc(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(f(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var c = a.next;
        (a.next = n.next), (n.next = c);
      }
      (l.baseQueue = a = n), (u.pending = null);
    }
    if (((n = t.baseState), a === null)) t.memoizedState = n;
    else {
      l = a.next;
      var r = (c = null),
        d = null,
        m = l,
        A = !1;
      do {
        var D = m.lane & -536870913;
        if (D !== m.lane ? (nt & D) === D : (se & D) === D) {
          var _ = m.revertLane;
          if (_ === 0)
            d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              D === Su && (A = !0);
          else if ((se & _) === _) {
            (m = m.next), _ === Su && (A = !0);
            continue;
          } else
            (D = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              d === null ? ((r = d = D), (c = n)) : (d = d.next = D),
              (I.lanes |= _),
              (_e |= _);
          (D = m.action),
            Xe && e(n, D),
            (n = m.hasEagerState ? m.eagerState : e(n, D));
        } else
          (_ = {
            lane: D,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            d === null ? ((r = d = _), (c = n)) : (d = d.next = _),
            (I.lanes |= D),
            (_e |= D);
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (d === null ? (c = n) : (d.next = r),
        !ul(n, t.memoizedState) && ((jt = !0), A && ((e = bu), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = d),
        (u.lastRenderedState = n);
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function ac(t) {
    var l = Nt(),
      e = l.queue;
    if (e === null) throw Error(f(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch,
      a = e.pending,
      n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var c = (a = a.next);
      do (n = t(n, c.action)), (c = c.next);
      while (c !== a);
      ul(n, l.memoizedState) || (jt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, u];
  }
  function ds(t, l, e) {
    var u = I,
      a = Nt(),
      n = ct;
    if (n) {
      if (e === void 0) throw Error(f(407));
      e = e();
    } else e = l();
    var c = !ul((yt || a).memoizedState, e);
    if (
      (c && ((a.memoizedState = e), (jt = !0)),
      (a = a.queue),
      cc(vs.bind(null, u, a, t), [t]),
      a.getSnapshot !== l || c || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Eu(9, hs.bind(null, u, a, e, l), { destroy: void 0 }, null),
        gt === null)
      )
        throw Error(f(349));
      n || (se & 60) !== 0 || ys(u, l, e);
    }
    return e;
  }
  function ys(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = I.updateQueue),
      l === null
        ? ((l = bn()), (I.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function hs(t, l, e, u) {
    (l.value = e), (l.getSnapshot = u), ms(l) && gs(t);
  }
  function vs(t, l, e) {
    return e(function () {
      ms(l) && gs(t);
    });
  }
  function ms(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ul(t, e);
    } catch {
      return !0;
    }
  }
  function gs(t) {
    var l = ce(t, 2);
    l !== null && Wt(l, t, 2);
  }
  function nc(t) {
    var l = tl();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), Xe)) {
        ae(!0);
        try {
          e();
        } finally {
          ae(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Ss(t, l, e, u) {
    return (t.baseState = e), uc(t, yt, typeof u == "function" ? u : wl);
  }
  function xy(t, l, e, u, a) {
    if (An(t)) throw Error(f(485));
    if (((t = l.action), t !== null)) {
      var n = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      G.T !== null ? e(!0) : (n.isTransition = !1),
        u(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), bs(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function bs(t, l) {
    var e = l.action,
      u = l.payload,
      a = t.state;
    if (l.isTransition) {
      var n = G.T,
        c = {};
      G.T = c;
      try {
        var r = e(a, u),
          d = G.S;
        d !== null && d(c, r), _s(t, l, r);
      } catch (m) {
        ic(t, l, m);
      } finally {
        G.T = n;
      }
    } else
      try {
        (n = e(a, u)), _s(t, l, n);
      } catch (m) {
        ic(t, l, m);
      }
  }
  function _s(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (u) {
            Ts(t, l, u);
          },
          function (u) {
            return ic(t, l, u);
          },
        )
      : Ts(t, l, e);
  }
  function Ts(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      Es(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), bs(t, e)));
  }
  function ic(t, l, e) {
    var u = t.pending;
    if (((t.pending = null), u !== null)) {
      u = u.next;
      do (l.status = "rejected"), (l.reason = e), Es(l), (l = l.next);
      while (l !== u);
    }
    t.action = null;
  }
  function Es(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ps(t, l) {
    return l;
  }
  function As(t, l) {
    if (ct) {
      var e = gt.formState;
      if (e !== null) {
        t: {
          var u = I;
          if (ct) {
            if (Xt) {
              l: {
                for (var a = Xt, n = Nl; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (((a = Ol(a.nextSibling)), a === null)) {
                    a = null;
                    break l;
                  }
                }
                (n = a.data), (a = n === "F!" || n === "F" ? a : null);
              }
              if (a) {
                (Xt = Ol(a.nextSibling)), (u = a.data === "F!");
                break t;
              }
            }
            je(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return (
      (e = tl()),
      (e.memoizedState = e.baseState = l),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ps,
        lastRenderedState: l,
      }),
      (e.queue = u),
      (e = Zs.bind(null, I, u)),
      (u.dispatch = e),
      (u = nc(!1)),
      (n = dc.bind(null, I, !1, u.queue)),
      (u = tl()),
      (a = { state: l, dispatch: null, action: t, pending: null }),
      (u.queue = a),
      (e = xy.bind(null, I, a, n, e)),
      (a.dispatch = e),
      (u.memoizedState = t),
      [l, e, !1]
    );
  }
  function zs(t) {
    var l = Nt();
    return Os(l, yt, t);
  }
  function Os(t, l, e) {
    (l = uc(t, l, ps)[0]),
      (t = Tn(wl)[0]),
      (l =
        typeof l == "object" && l !== null && typeof l.then == "function"
          ? fa(l)
          : l);
    var u = Nt(),
      a = u.queue,
      n = a.dispatch;
    return (
      e !== u.memoizedState &&
        ((I.flags |= 2048),
        Eu(9, Cy.bind(null, a, e), { destroy: void 0 }, null)),
      [l, n, t]
    );
  }
  function Cy(t, l) {
    t.action = l;
  }
  function Ds(t) {
    var l = Nt(),
      e = yt;
    if (e !== null) return Os(l, e, t);
    Nt(), (l = l.memoizedState), (e = Nt());
    var u = e.queue.dispatch;
    return (e.memoizedState = t), [l, u, !1];
  }
  function Eu(t, l, e, u) {
    return (
      (t = { tag: t, create: l, inst: e, deps: u, next: null }),
      (l = I.updateQueue),
      l === null && ((l = bn()), (I.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((u = e.next), (e.next = t), (t.next = u), (l.lastEffect = t)),
      t
    );
  }
  function Ms() {
    return Nt().memoizedState;
  }
  function En(t, l, e, u) {
    var a = tl();
    (I.flags |= t),
      (a.memoizedState = Eu(
        1 | l,
        e,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function pn(t, l, e, u) {
    var a = Nt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    yt !== null && u !== null && Fi(u, yt.memoizedState.deps)
      ? (a.memoizedState = Eu(l, e, n, u))
      : ((I.flags |= t), (a.memoizedState = Eu(1 | l, e, n, u)));
  }
  function Rs(t, l) {
    En(8390656, 8, t, l);
  }
  function cc(t, l) {
    pn(2048, 8, t, l);
  }
  function Us(t, l) {
    return pn(4, 2, t, l);
  }
  function Ns(t, l) {
    return pn(4, 4, t, l);
  }
  function Hs(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function xs(t, l, e) {
    (e = e != null ? e.concat([t]) : null), pn(4, 4, Hs.bind(null, l, t), e);
  }
  function fc() {}
  function Cs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && Fi(l, u[1]) ? u[0] : ((e.memoizedState = [t, l]), t);
  }
  function qs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && Fi(l, u[1])) return u[0];
    if (((u = t()), Xe)) {
      ae(!0);
      try {
        t();
      } finally {
        ae(!1);
      }
    }
    return (e.memoizedState = [u, l]), u;
  }
  function rc(t, l, e) {
    return e === void 0 || (se & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = Yo()), (I.lanes |= t), (_e |= t), e);
  }
  function Bs(t, l, e, u) {
    return ul(e, l)
      ? e
      : gu.current !== null
        ? ((t = rc(t, e, u)), ul(t, l) || (jt = !0), t)
        : (se & 42) === 0
          ? ((jt = !0), (t.memoizedState = e))
          : ((t = Yo()), (I.lanes |= t), (_e |= t), l);
  }
  function js(t, l, e, u, a) {
    var n = x.p;
    x.p = n !== 0 && 8 > n ? n : 8;
    var c = G.T,
      r = {};
    (G.T = r), dc(t, !1, l, e);
    try {
      var d = a(),
        m = G.S;
      if (
        (m !== null && m(r, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var A = Uy(d, u);
        ra(t, l, A, cl(t));
      } else ra(t, l, u, cl(t));
    } catch (D) {
      ra(t, l, { then: function () {}, status: "rejected", reason: D }, cl());
    } finally {
      (x.p = n), (G.T = c);
    }
  }
  function qy() {}
  function sc(t, l, e, u) {
    if (t.tag !== 5) throw Error(f(476));
    var a = Ys(t).queue;
    js(
      t,
      a,
      l,
      at,
      e === null
        ? qy
        : function () {
            return Gs(t), e(u);
          },
    );
  }
  function Ys(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: at,
      baseState: at,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wl,
        lastRenderedState: at,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wl,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function Gs(t) {
    var l = Ys(t).next.queue;
    ra(t, l, {}, cl());
  }
  function oc() {
    return Lt(Ra);
  }
  function Xs() {
    return Nt().memoizedState;
  }
  function Qs() {
    return Nt().memoizedState;
  }
  function By(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = cl();
          t = he(e);
          var u = ve(l, t, e);
          u !== null && (Wt(u, l, e), da(u, l, e)),
            (l = { cache: ki() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function jy(t, l, e) {
    var u = cl();
    (e = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      An(t)
        ? ws(l, e)
        : ((e = Qi(t, l, e, u)), e !== null && (Wt(e, t, u), Vs(e, l, u)));
  }
  function Zs(t, l, e) {
    var u = cl();
    ra(t, l, e, u);
  }
  function ra(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (An(t)) ws(l, a);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var c = l.lastRenderedState,
            r = n(c, e);
          if (((a.hasEagerState = !0), (a.eagerState = r), ul(r, c)))
            return cn(t, l, a, 0), gt === null && nn(), !1;
        } catch {
        } finally {
        }
      if (((e = Qi(t, l, a, u)), e !== null))
        return Wt(e, t, u), Vs(e, l, u), !0;
    }
    return !1;
  }
  function dc(t, l, e, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: lf(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      An(t))
    ) {
      if (l) throw Error(f(479));
    } else (l = Qi(t, e, u, 2)), l !== null && Wt(l, t, 2);
  }
  function An(t) {
    var l = t.alternate;
    return t === I || (l !== null && l === I);
  }
  function ws(t, l) {
    _u = gn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function Vs(t, l, e) {
    if ((e & 4194176) !== 0) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), lr(t, e);
    }
  }
  var xl = {
    readContext: Lt,
    use: _n,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
  };
  (xl.useCacheRefresh = Mt),
    (xl.useMemoCache = Mt),
    (xl.useHostTransitionStatus = Mt),
    (xl.useFormState = Mt),
    (xl.useActionState = Mt),
    (xl.useOptimistic = Mt);
  var Qe = {
    readContext: Lt,
    use: _n,
    useCallback: function (t, l) {
      return (tl().memoizedState = [t, l === void 0 ? null : l]), t;
    },
    useContext: Lt,
    useEffect: Rs,
    useImperativeHandle: function (t, l, e) {
      (e = e != null ? e.concat([t]) : null),
        En(4194308, 4, Hs.bind(null, l, t), e);
    },
    useLayoutEffect: function (t, l) {
      return En(4194308, 4, t, l);
    },
    useInsertionEffect: function (t, l) {
      En(4, 2, t, l);
    },
    useMemo: function (t, l) {
      var e = tl();
      l = l === void 0 ? null : l;
      var u = t();
      if (Xe) {
        ae(!0);
        try {
          t();
        } finally {
          ae(!1);
        }
      }
      return (e.memoizedState = [u, l]), u;
    },
    useReducer: function (t, l, e) {
      var u = tl();
      if (e !== void 0) {
        var a = e(l);
        if (Xe) {
          ae(!0);
          try {
            e(l);
          } finally {
            ae(!1);
          }
        }
      } else a = l;
      return (
        (u.memoizedState = u.baseState = a),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: a,
        }),
        (u.queue = t),
        (t = t.dispatch = jy.bind(null, I, t)),
        [u.memoizedState, t]
      );
    },
    useRef: function (t) {
      var l = tl();
      return (t = { current: t }), (l.memoizedState = t);
    },
    useState: function (t) {
      t = nc(t);
      var l = t.queue,
        e = Zs.bind(null, I, l);
      return (l.dispatch = e), [t.memoizedState, e];
    },
    useDebugValue: fc,
    useDeferredValue: function (t, l) {
      var e = tl();
      return rc(e, t, l);
    },
    useTransition: function () {
      var t = nc(!1);
      return (
        (t = js.bind(null, I, t.queue, !0, !1)),
        (tl().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, l, e) {
      var u = I,
        a = tl();
      if (ct) {
        if (e === void 0) throw Error(f(407));
        e = e();
      } else {
        if (((e = l()), gt === null)) throw Error(f(349));
        (nt & 60) !== 0 || ys(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return (
        (a.queue = n),
        Rs(vs.bind(null, u, n, t), [t]),
        (u.flags |= 2048),
        Eu(9, hs.bind(null, u, n, e, l), { destroy: void 0 }, null),
        e
      );
    },
    useId: function () {
      var t = tl(),
        l = gt.identifierPrefix;
      if (ct) {
        var e = Ql,
          u = Xl;
        (e = (u & ~(1 << (32 - el(u) - 1))).toString(32) + e),
          (l = ":" + l + "R" + e),
          (e = Sn++),
          0 < e && (l += "H" + e.toString(32)),
          (l += ":");
      } else (e = Ny++), (l = ":" + l + "r" + e.toString(32) + ":");
      return (t.memoizedState = l);
    },
    useCacheRefresh: function () {
      return (tl().memoizedState = By.bind(null, I));
    },
  };
  (Qe.useMemoCache = ec),
    (Qe.useHostTransitionStatus = oc),
    (Qe.useFormState = As),
    (Qe.useActionState = As),
    (Qe.useOptimistic = function (t) {
      var l = tl();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (l.queue = e), (l = dc.bind(null, I, !0, e)), (e.dispatch = l), [t, l]
      );
    });
  var oe = {
    readContext: Lt,
    use: _n,
    useCallback: Cs,
    useContext: Lt,
    useEffect: cc,
    useImperativeHandle: xs,
    useInsertionEffect: Us,
    useLayoutEffect: Ns,
    useMemo: qs,
    useReducer: Tn,
    useRef: Ms,
    useState: function () {
      return Tn(wl);
    },
    useDebugValue: fc,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return Bs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = Tn(wl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: ds,
    useId: Xs,
  };
  (oe.useCacheRefresh = Qs),
    (oe.useMemoCache = ec),
    (oe.useHostTransitionStatus = oc),
    (oe.useFormState = zs),
    (oe.useActionState = zs),
    (oe.useOptimistic = function (t, l) {
      var e = Nt();
      return Ss(e, yt, t, l);
    });
  var Ze = {
    readContext: Lt,
    use: _n,
    useCallback: Cs,
    useContext: Lt,
    useEffect: cc,
    useImperativeHandle: xs,
    useInsertionEffect: Us,
    useLayoutEffect: Ns,
    useMemo: qs,
    useReducer: ac,
    useRef: Ms,
    useState: function () {
      return ac(wl);
    },
    useDebugValue: fc,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return yt === null ? rc(e, t, l) : Bs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = ac(wl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: ds,
    useId: Xs,
  };
  (Ze.useCacheRefresh = Qs),
    (Ze.useMemoCache = ec),
    (Ze.useHostTransitionStatus = oc),
    (Ze.useFormState = Ds),
    (Ze.useActionState = Ds),
    (Ze.useOptimistic = function (t, l) {
      var e = Nt();
      return yt !== null
        ? Ss(e, yt, t, l)
        : ((e.baseState = t), [t, e.queue.dispatch]);
    });
  function yc(t, l, e, u) {
    (l = t.memoizedState),
      (e = e(u, l)),
      (e = e == null ? l : it({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var hc = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? w(t) === t : !1;
    },
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var u = cl(),
        a = he(u);
      (a.payload = l),
        e != null && (a.callback = e),
        (l = ve(t, a, u)),
        l !== null && (Wt(l, t, u), da(l, t, u));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var u = cl(),
        a = he(u);
      (a.tag = 1),
        (a.payload = l),
        e != null && (a.callback = e),
        (l = ve(t, a, u)),
        l !== null && (Wt(l, t, u), da(l, t, u));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = cl(),
        u = he(e);
      (u.tag = 2),
        l != null && (u.callback = l),
        (l = ve(t, u, e)),
        l !== null && (Wt(l, t, e), da(l, t, e));
    },
  };
  function Ls(t, l, e, u, a, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, n, c)
        : l.prototype && l.prototype.isPureReactComponent
          ? !$u(e, u) || !$u(a, n)
          : !0
    );
  }
  function Ks(t, l, e, u) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, u),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, u),
      l.state !== t && hc.enqueueReplaceState(l, l.state, null);
  }
  function we(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l) u !== "ref" && (e[u] = l[u]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = it({}, e));
      for (var a in t) e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  var zn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Js(t) {
    zn(t);
  }
  function ks(t) {
    console.error(t);
  }
  function Ws(t) {
    zn(t);
  }
  function On(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function $s(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function vc(t, l, e) {
    return (
      (e = he(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        On(t, l);
      }),
      e
    );
  }
  function Fs(t) {
    return (t = he(t)), (t.tag = 3), t;
  }
  function Ps(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      (t.payload = function () {
        return a(n);
      }),
        (t.callback = function () {
          $s(l, e, u);
        });
    }
    var c = e.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        $s(l, e, u),
          typeof a != "function" &&
            (Te === null ? (Te = new Set([this])) : Te.add(this));
        var r = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function Yy(t, l, e, u, a) {
    if (
      ((e.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && oa(l, e, a, !0),
        (e = ml.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Hl === null ? $c() : e.alternate === null && zt === 0 && (zt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = a),
              u === Li
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([u])) : l.add(u),
                  Pc(t, u, a)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              u === Li
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([u])) : e.add(u)),
                  Pc(t, u, a)),
              !1
            );
        }
        throw Error(f(435, e.tag));
      }
      return Pc(t, u, a), $c(), !1;
    }
    if (ct)
      return (
        (l = ml.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = a),
            u !== Vi && ((t = Error(f(422), { cause: u })), ta(yl(t, e))))
          : (u !== Vi && ((l = Error(f(423), { cause: u })), ta(yl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (u = yl(u, e)),
            (a = vc(t.stateNode, u, a)),
            Uc(t, a),
            zt !== 4 && (zt = 2)),
        !1
      );
    var n = Error(f(520), { cause: u });
    if (
      ((n = yl(n, e)),
      _a === null ? (_a = [n]) : _a.push(n),
      zt !== 4 && (zt = 2),
      l === null)
    )
      return !0;
    (u = yl(u, e)), (e = l);
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = a & -a),
            (e.lanes |= t),
            (t = vc(e.stateNode, u, t)),
            Uc(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Te === null || !Te.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (a = Fs(a)),
              Ps(a, t, e, u),
              Uc(e, a),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Is = Error(f(461)),
    jt = !1;
  function Qt(t, l, e, u) {
    l.child = t === null ? as(l, null, e, u) : Ye(l, t.child, e, u);
  }
  function to(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var c = {};
      for (var r in u) r !== "ref" && (c[r] = u[r]);
    } else c = u;
    return (
      Le(l),
      (u = Pi(t, l, e, c, n, a)),
      (r = Ii()),
      t !== null && !jt
        ? (tc(t, l, a), Vl(t, l, a))
        : (ct && r && Zi(l), (l.flags |= 1), Qt(t, l, u, a), l.child)
    );
  }
  function lo(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Yc(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), eo(t, l, n, u, a))
        : ((t = Nn(e.type, null, u, l, l.mode, a)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !Ac(t, a))) {
      var c = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : $u), e(c, u) && t.ref === l.ref)
      )
        return Vl(t, l, a);
    }
    return (
      (l.flags |= 1),
      (t = be(n, u)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function eo(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if ($u(n, u) && t.ref === l.ref)
        if (((jt = !1), (l.pendingProps = u = n), Ac(t, a)))
          (t.flags & 131072) !== 0 && (jt = !0);
        else return (l.lanes = t.lanes), Vl(t, l, a);
    }
    return mc(t, l, e, u, a);
  }
  function uo(t, l, e) {
    var u = l.pendingProps,
      a = u.children,
      n = (l.stateNode._pendingVisibility & 2) !== 0,
      c = t !== null ? t.memoizedState : null;
    if ((sa(t, l), u.mode === "hidden" || n)) {
      if ((l.flags & 128) !== 0) {
        if (((u = c !== null ? c.baseLanes | e : e), t !== null)) {
          for (a = l.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          l.childLanes = n & ~u;
        } else (l.childLanes = 0), (l.child = null);
        return ao(t, l, u, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && mn(l, c !== null ? c.cachePool : null),
          c !== null ? ns(l, c) : Ki(),
          is(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          ao(t, l, c !== null ? c.baseLanes | e : e, e)
        );
    } else
      c !== null
        ? (mn(l, c.cachePool), ns(l, c), re(), (l.memoizedState = null))
        : (t !== null && mn(l, null), Ki(), re());
    return Qt(t, l, a, e), l.child;
  }
  function ao(t, l, e, u) {
    var a = $i();
    return (
      (a = a === null ? null : { parent: qt._currentValue, pool: a }),
      (l.memoizedState = { baseLanes: e, cachePool: a }),
      t !== null && mn(l, null),
      Ki(),
      is(l),
      t !== null && oa(t, l, u, !0),
      null
    );
  }
  function sa(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 2097664);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(f(284));
      (t === null || t.ref !== e) && (l.flags |= 2097664);
    }
  }
  function mc(t, l, e, u, a) {
    return (
      Le(l),
      (e = Pi(t, l, e, u, void 0, a)),
      (u = Ii()),
      t !== null && !jt
        ? (tc(t, l, a), Vl(t, l, a))
        : (ct && u && Zi(l), (l.flags |= 1), Qt(t, l, e, a), l.child)
    );
  }
  function no(t, l, e, u, a, n) {
    return (
      Le(l),
      (l.updateQueue = null),
      (e = os(l, u, e, a)),
      ss(t),
      (u = Ii()),
      t !== null && !jt
        ? (tc(t, l, n), Vl(t, l, n))
        : (ct && u && Zi(l), (l.flags |= 1), Qt(t, l, e, n), l.child)
    );
  }
  function io(t, l, e, u, a) {
    if ((Le(l), l.stateNode === null)) {
      var n = yu,
        c = e.contextType;
      typeof c == "object" && c !== null && (n = Lt(c)),
        (n = new e(u, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = hc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = u),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Mc(l),
        (c = e.contextType),
        (n.context = typeof c == "object" && c !== null ? Lt(c) : yu),
        (n.state = l.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && (yc(l, e, c, u), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && hc.enqueueReplaceState(n, n.state, null),
          ha(l, u, n, a),
          ya(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (u = !0);
    } else if (t === null) {
      n = l.stateNode;
      var r = l.memoizedProps,
        d = we(e, r);
      n.props = d;
      var m = n.context,
        A = e.contextType;
      (c = yu), typeof A == "object" && A !== null && (c = Lt(A));
      var D = e.getDerivedStateFromProps;
      (A =
        typeof D == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (r = l.pendingProps !== r),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((r || m !== c) && Ks(l, n, u, c)),
        (ye = !1);
      var _ = l.memoizedState;
      (n.state = _),
        ha(l, u, n, a),
        ya(),
        (m = l.memoizedState),
        r || _ !== m || ye
          ? (typeof D == "function" && (yc(l, e, D, u), (m = l.memoizedState)),
            (d = ye || Ls(l, e, d, u, _, m, c))
              ? (A ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = u),
                (l.memoizedState = m)),
            (n.props = u),
            (n.state = m),
            (n.context = c),
            (u = d))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (u = !1));
    } else {
      (n = l.stateNode),
        Rc(t, l),
        (c = l.memoizedProps),
        (A = we(e, c)),
        (n.props = A),
        (D = l.pendingProps),
        (_ = n.context),
        (m = e.contextType),
        (d = yu),
        typeof m == "object" && m !== null && (d = Lt(m)),
        (r = e.getDerivedStateFromProps),
        (m =
          typeof r == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== D || _ !== d) && Ks(l, n, u, d)),
        (ye = !1),
        (_ = l.memoizedState),
        (n.state = _),
        ha(l, u, n, a),
        ya();
      var p = l.memoizedState;
      c !== D ||
      _ !== p ||
      ye ||
      (t !== null && t.dependencies !== null && Dn(t.dependencies))
        ? (typeof r == "function" && (yc(l, e, r, u), (p = l.memoizedState)),
          (A =
            ye ||
            Ls(l, e, A, u, _, p, d) ||
            (t !== null && t.dependencies !== null && Dn(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, p, d),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, p, d)),
              typeof n.componentDidUpdate == "function" && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = u),
              (l.memoizedState = p)),
          (n.props = u),
          (n.state = p),
          (n.context = d),
          (u = A))
        : (typeof n.componentDidUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (l.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      sa(t, l),
      (u = (l.flags & 128) !== 0),
      n || u
        ? ((n = l.stateNode),
          (e =
            u && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && u
            ? ((l.child = Ye(l, t.child, null, a)),
              (l.child = Ye(l, null, e, a)))
            : Qt(t, l, e, a),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Vl(t, l, a)),
      t
    );
  }
  function co(t, l, e, u) {
    return Iu(), (l.flags |= 256), Qt(t, l, e, u), l.child;
  }
  var gc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Sc(t) {
    return { baseLanes: t, cachePool: rs() };
  }
  function bc(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= _l), t;
  }
  function fo(t, l, e) {
    var u = l.pendingProps,
      a = !1,
      n = (l.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      c && ((a = !0), (l.flags &= -129)),
      (c = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if ((a ? fe(l) : re(), ct)) {
          var r = Xt,
            d;
          if ((d = r)) {
            t: {
              for (d = r, r = Nl; d.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break t;
                }
                if (((d = Ol(d.nextSibling)), d === null)) {
                  r = null;
                  break t;
                }
              }
              r = d;
            }
            r !== null
              ? ((l.memoizedState = {
                  dehydrated: r,
                  treeContext: qe !== null ? { id: Xl, overflow: Ql } : null,
                  retryLane: 536870912,
                }),
                (d = bl(18, null, null, 0)),
                (d.stateNode = r),
                (d.return = l),
                (l.child = d),
                (kt = l),
                (Xt = null),
                (d = !0))
              : (d = !1);
          }
          d || je(l);
        }
        if (
          ((r = l.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return r.data === "$!" ? (l.lanes = 16) : (l.lanes = 536870912), null;
        Zl(l);
      }
      return (
        (r = u.children),
        (u = u.fallback),
        a
          ? (re(),
            (a = l.mode),
            (r = Tc({ mode: "hidden", children: r }, a)),
            (u = Je(u, a, e, null)),
            (r.return = l),
            (u.return = l),
            (r.sibling = u),
            (l.child = r),
            (a = l.child),
            (a.memoizedState = Sc(e)),
            (a.childLanes = bc(t, c, e)),
            (l.memoizedState = gc),
            u)
          : (fe(l), _c(l, r))
      );
    }
    if (
      ((d = t.memoizedState), d !== null && ((r = d.dehydrated), r !== null))
    ) {
      if (n)
        l.flags & 256
          ? (fe(l), (l.flags &= -257), (l = Ec(t, l, e)))
          : l.memoizedState !== null
            ? (re(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (re(),
              (a = u.fallback),
              (r = l.mode),
              (u = Tc({ mode: "visible", children: u.children }, r)),
              (a = Je(a, r, e, null)),
              (a.flags |= 2),
              (u.return = l),
              (a.return = l),
              (u.sibling = a),
              (l.child = u),
              Ye(l, t.child, null, e),
              (u = l.child),
              (u.memoizedState = Sc(e)),
              (u.childLanes = bc(t, c, e)),
              (l.memoizedState = gc),
              (l = a));
      else if ((fe(l), r.data === "$!")) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (u = Error(f(419))),
          (u.stack = ""),
          (u.digest = c),
          ta({ value: u, source: null, stack: null }),
          (l = Ec(t, l, e));
      } else if (
        (jt || oa(t, l, e, !1), (c = (e & t.childLanes) !== 0), jt || c)
      ) {
        if (((c = gt), c !== null)) {
          if (((u = e & -e), (u & 42) !== 0)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = (u & (c.suspendedLanes | e)) !== 0 ? 0 : u),
            u !== 0 && u !== d.retryLane)
          )
            throw ((d.retryLane = u), ce(t, u), Wt(c, t, u), Is);
        }
        r.data === "$?" || $c(), (l = Ec(t, l, e));
      } else
        r.data === "$?"
          ? ((l.flags |= 128),
            (l.child = t.child),
            (l = Iy.bind(null, t)),
            (r._reactRetry = l),
            (l = null))
          : ((t = d.treeContext),
            (Xt = Ol(r.nextSibling)),
            (kt = l),
            (ct = !0),
            (Al = null),
            (Nl = !1),
            t !== null &&
              ((hl[vl++] = Xl),
              (hl[vl++] = Ql),
              (hl[vl++] = qe),
              (Xl = t.id),
              (Ql = t.overflow),
              (qe = l)),
            (l = _c(l, u.children)),
            (l.flags |= 4096));
      return l;
    }
    return a
      ? (re(),
        (a = u.fallback),
        (r = l.mode),
        (d = t.child),
        (m = d.sibling),
        (u = be(d, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = d.subtreeFlags & 31457280),
        m !== null ? (a = be(m, a)) : ((a = Je(a, r, e, null)), (a.flags |= 2)),
        (a.return = l),
        (u.return = l),
        (u.sibling = a),
        (l.child = u),
        (u = a),
        (a = l.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = Sc(e))
          : ((d = r.cachePool),
            d !== null
              ? ((m = qt._currentValue),
                (d = d.parent !== m ? { parent: m, pool: m } : d))
              : (d = rs()),
            (r = { baseLanes: r.baseLanes | e, cachePool: d })),
        (a.memoizedState = r),
        (a.childLanes = bc(t, c, e)),
        (l.memoizedState = gc),
        u)
      : (fe(l),
        (e = t.child),
        (t = e.sibling),
        (e = be(e, { mode: "visible", children: u.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((c = l.deletions),
          c === null ? ((l.deletions = [t]), (l.flags |= 16)) : c.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function _c(t, l) {
    return (
      (l = Tc({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function Tc(t, l) {
    return qo(t, l, 0, null);
  }
  function Ec(t, l, e) {
    return (
      Ye(l, t.child, null, e),
      (t = _c(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function ro(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Oc(t.return, l, e);
  }
  function pc(t, l, e, u, a) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: e,
          tailMode: a,
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = e),
        (n.tailMode = a));
  }
  function so(t, l, e) {
    var u = l.pendingProps,
      a = u.revealOrder,
      n = u.tail;
    if ((Qt(t, l, u.children, e), (u = Ct.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ro(t, e, l);
          else if (t.tag === 19) ro(t, e, l);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      u &= 1;
    }
    switch ((_t(Ct, u), a)) {
      case "forwards":
        for (e = l.child, a = null; e !== null; )
          (t = e.alternate),
            t !== null && vn(t) === null && (a = e),
            (e = e.sibling);
        (e = a),
          e === null
            ? ((a = l.child), (l.child = null))
            : ((a = e.sibling), (e.sibling = null)),
          pc(l, !1, a, e, n);
        break;
      case "backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && vn(t) === null)) {
            l.child = a;
            break;
          }
          (t = a.sibling), (a.sibling = e), (e = a), (a = t);
        }
        pc(l, !0, e, null, n);
        break;
      case "together":
        pc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Vl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (_e |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((oa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(f(153));
    if (l.child !== null) {
      for (
        t = l.child, e = be(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = be(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function Ac(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Dn(t)));
  }
  function Gy(t, l, e) {
    switch (l.tag) {
      case 3:
        Za(l, l.stateNode.containerInfo),
          de(l, qt, t.memoizedState.cache),
          Iu();
        break;
      case 27:
      case 5:
        hi(l);
        break;
      case 4:
        Za(l, l.stateNode.containerInfo);
        break;
      case 10:
        de(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (fe(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? fo(t, l, e)
              : (fe(l), (t = Vl(t, l, e)), t !== null ? t.sibling : null);
        fe(l);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (
          ((u = (e & l.childLanes) !== 0),
          u || (oa(t, l, e, !1), (u = (e & l.childLanes) !== 0)),
          a)
        ) {
          if (u) return so(t, l, e);
          l.flags |= 128;
        }
        if (
          ((a = l.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          _t(Ct, Ct.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), uo(t, l, e);
      case 24:
        de(l, qt, t.memoizedState.cache);
    }
    return Vl(t, l, e);
  }
  function oo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) jt = !0;
      else {
        if (!Ac(t, e) && (l.flags & 128) === 0) return (jt = !1), Gy(t, l, e);
        jt = (t.flags & 131072) !== 0;
      }
    else (jt = !1), ct && (l.flags & 1048576) !== 0 && Wr(l, sn, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType,
            a = u._init;
          if (((u = a(u._payload)), (l.type = u), typeof u == "function"))
            Yc(u)
              ? ((t = we(u, t)), (l.tag = 1), (l = io(null, l, u, t, e)))
              : ((l.tag = 0), (l = mc(null, l, u, t, e)));
          else {
            if (u != null) {
              if (((a = u.$$typeof), a === F)) {
                (l.tag = 11), (l = to(null, l, u, t, e));
                break t;
              } else if (a === dt) {
                (l.tag = 14), (l = lo(null, l, u, t, e));
                break t;
              }
            }
            throw ((l = Tt(u) || u), Error(f(306, l, "")));
          }
        }
        return l;
      case 0:
        return mc(t, l, l.type, l.pendingProps, e);
      case 1:
        return (u = l.type), (a = we(u, l.pendingProps)), io(t, l, u, a, e);
      case 3:
        t: {
          if ((Za(l, l.stateNode.containerInfo), t === null))
            throw Error(f(387));
          var n = l.pendingProps;
          (a = l.memoizedState), (u = a.element), Rc(t, l), ha(l, n, null, e);
          var c = l.memoizedState;
          if (
            ((n = c.cache),
            de(l, qt, n),
            n !== a.cache && Dc(l, [qt], e, !0),
            ya(),
            (n = c.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: n, isDehydrated: !1, cache: c.cache }),
              (l.updateQueue.baseState = a),
              (l.memoizedState = a),
              l.flags & 256)
            ) {
              l = co(t, l, n, e);
              break t;
            } else if (n !== u) {
              (u = yl(Error(f(424)), l)), ta(u), (l = co(t, l, n, e));
              break t;
            } else
              for (
                Xt = Ol(l.stateNode.containerInfo.firstChild),
                  kt = l,
                  ct = !0,
                  Al = null,
                  Nl = !0,
                  e = as(l, null, n, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
          else {
            if ((Iu(), n === u)) {
              l = Vl(t, l, e);
              break t;
            }
            Qt(t, l, n, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          sa(t, l),
          t === null
            ? (e = vd(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : ct ||
                ((e = l.type),
                (t = l.pendingProps),
                (u = wn(ue.current).createElement(e)),
                (u[Vt] = l),
                (u[Pt] = t),
                Zt(u, e, t),
                Bt(u),
                (l.stateNode = u))
            : (l.memoizedState = vd(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          hi(l),
          t === null &&
            ct &&
            ((u = l.stateNode = dd(l.type, l.pendingProps, ue.current)),
            (kt = l),
            (Nl = !0),
            (Xt = Ol(u.firstChild))),
          (u = l.pendingProps.children),
          t !== null || ct ? Qt(t, l, u, e) : (l.child = Ye(l, null, u, e)),
          sa(t, l),
          l.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((a = u = Xt) &&
              ((u = vh(u, l.type, l.pendingProps, Nl)),
              u !== null
                ? ((l.stateNode = u),
                  (kt = l),
                  (Xt = Ol(u.firstChild)),
                  (Nl = !1),
                  (a = !0))
                : (a = !1)),
            a || je(l)),
          hi(l),
          (a = l.type),
          (n = l.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (u = n.children),
          of(a, n) ? (u = null) : c !== null && of(a, c) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((a = Pi(t, l, Hy, null, null, e)), (Ra._currentValue = a)),
          sa(t, l),
          Qt(t, l, u, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = e = Xt) &&
              ((e = mh(e, l.pendingProps, Nl)),
              e !== null
                ? ((l.stateNode = e), (kt = l), (Xt = null), (t = !0))
                : (t = !1)),
            t || je(l)),
          null
        );
      case 13:
        return fo(t, l, e);
      case 4:
        return (
          Za(l, l.stateNode.containerInfo),
          (u = l.pendingProps),
          t === null ? (l.child = Ye(l, null, u, e)) : Qt(t, l, u, e),
          l.child
        );
      case 11:
        return to(t, l, l.type, l.pendingProps, e);
      case 7:
        return Qt(t, l, l.pendingProps, e), l.child;
      case 8:
        return Qt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Qt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (u = l.pendingProps),
          de(l, l.type, u.value),
          Qt(t, l, u.children, e),
          l.child
        );
      case 9:
        return (
          (a = l.type._context),
          (u = l.pendingProps.children),
          Le(l),
          (a = Lt(a)),
          (u = u(a)),
          (l.flags |= 1),
          Qt(t, l, u, e),
          l.child
        );
      case 14:
        return lo(t, l, l.type, l.pendingProps, e);
      case 15:
        return eo(t, l, l.type, l.pendingProps, e);
      case 19:
        return so(t, l, e);
      case 22:
        return uo(t, l, e);
      case 24:
        return (
          Le(l),
          (u = Lt(qt)),
          t === null
            ? ((a = $i()),
              a === null &&
                ((a = gt),
                (n = ki()),
                (a.pooledCache = n),
                n.refCount++,
                n !== null && (a.pooledCacheLanes |= e),
                (a = n)),
              (l.memoizedState = { parent: u, cache: a }),
              Mc(l),
              de(l, qt, a))
            : ((t.lanes & e) !== 0 && (Rc(t, l), ha(l, null, null, e), ya()),
              (a = t.memoizedState),
              (n = l.memoizedState),
              a.parent !== u
                ? ((a = { parent: u, cache: u }),
                  (l.memoizedState = a),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = a),
                  de(l, qt, u))
                : ((u = n.cache),
                  de(l, qt, u),
                  u !== a.cache && Dc(l, [qt], e, !0))),
          Qt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(f(156, l.tag));
  }
  var zc = ot(null),
    Ve = null,
    Ll = null;
  function de(t, l, e) {
    _t(zc, l._currentValue), (l._currentValue = e);
  }
  function Kl(t) {
    (t._currentValue = zc.current), Rt(zc);
  }
  function Oc(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), u !== null && (u.childLanes |= l))
          : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function Dc(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var c = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var r = n;
          n = a;
          for (var d = 0; d < l.length; d++)
            if (r.context === l[d]) {
              (n.lanes |= e),
                (r = n.alternate),
                r !== null && (r.lanes |= e),
                Oc(n.return, e, t),
                u || (c = null);
              break t;
            }
          n = r.next;
        }
      } else if (a.tag === 18) {
        if (((c = a.return), c === null)) throw Error(f(341));
        (c.lanes |= e),
          (n = c.alternate),
          n !== null && (n.lanes |= e),
          Oc(c, e, t),
          (c = null);
      } else c = a.child;
      if (c !== null) c.return = a;
      else
        for (c = a; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((a = c.sibling), a !== null)) {
            (a.return = c.return), (c = a);
            break;
          }
          c = c.return;
        }
      a = c;
    }
  }
  function oa(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = a.type;
          ul(a.pendingProps.value, c.value) ||
            (t !== null ? t.push(r) : (t = [r]));
        }
      } else if (a === Qa.current) {
        if (((c = a.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (t !== null ? t.push(Ra) : (t = [Ra]));
      }
      a = a.return;
    }
    t !== null && Dc(l, t, e, u), (l.flags |= 262144);
  }
  function Dn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Le(t) {
    (Ve = t),
      (Ll = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Lt(t) {
    return yo(Ve, t);
  }
  function Mn(t, l) {
    return Ve === null && Le(t), yo(t, l);
  }
  function yo(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Ll === null)) {
      if (t === null) throw Error(f(308));
      (Ll = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Ll = Ll.next = l;
    return e;
  }
  var ye = !1;
  function Mc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Rc(t, l) {
    (t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function he(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ve(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (pt & 2) !== 0)) {
      var a = u.pending;
      return (
        a === null ? (l.next = l) : ((l.next = a.next), (a.next = l)),
        (u.pending = l),
        (l = fn(t)),
        Jr(t, null, e),
        l
      );
    }
    return cn(t, u, l, e), fn(t);
  }
  function da(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194176) !== 0))
    ) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), lr(t, e);
    }
  }
  function Uc(t, l) {
    var e = t.updateQueue,
      u = t.alternate;
    if (u !== null && ((u = u.updateQueue), e === u)) {
      var a = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (a = n = c) : (n = n.next = c), (e = e.next);
        } while (e !== null);
        n === null ? (a = n = l) : (n = n.next = l);
      } else a = n = l;
      (e = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (t.updateQueue = e);
      return;
    }
    (t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l);
  }
  var Nc = !1;
  function ya() {
    if (Nc) {
      var t = bu;
      if (t !== null) throw t;
    }
  }
  function ha(t, l, e, u) {
    Nc = !1;
    var a = t.updateQueue;
    ye = !1;
    var n = a.firstBaseUpdate,
      c = a.lastBaseUpdate,
      r = a.shared.pending;
    if (r !== null) {
      a.shared.pending = null;
      var d = r,
        m = d.next;
      (d.next = null), c === null ? (n = m) : (c.next = m), (c = d);
      var A = t.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (r = A.lastBaseUpdate),
        r !== c &&
          (r === null ? (A.firstBaseUpdate = m) : (r.next = m),
          (A.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var D = a.baseState;
      (c = 0), (A = m = d = null), (r = n);
      do {
        var _ = r.lane & -536870913,
          p = _ !== r.lane;
        if (p ? (nt & _) === _ : (u & _) === _) {
          _ !== 0 && _ === Su && (Nc = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var q = t,
              K = r;
            _ = l;
            var Ot = e;
            switch (K.tag) {
              case 1:
                if (((q = K.payload), typeof q == "function")) {
                  D = q.call(Ot, D, _);
                  break t;
                }
                D = q;
                break t;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = K.payload),
                  (_ = typeof q == "function" ? q.call(Ot, D, _) : q),
                  _ == null)
                )
                  break t;
                D = it({}, D, _);
                break t;
              case 2:
                ye = !0;
            }
          }
          (_ = r.callback),
            _ !== null &&
              ((t.flags |= 64),
              p && (t.flags |= 8192),
              (p = a.callbacks),
              p === null ? (a.callbacks = [_]) : p.push(_));
        } else
          (p = {
            lane: _,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            A === null ? ((m = A = p), (d = D)) : (A = A.next = p),
            (c |= _);
        if (((r = r.next), r === null)) {
          if (((r = a.shared.pending), r === null)) break;
          (p = r),
            (r = p.next),
            (p.next = null),
            (a.lastBaseUpdate = p),
            (a.shared.pending = null);
        }
      } while (!0);
      A === null && (d = D),
        (a.baseState = d),
        (a.firstBaseUpdate = m),
        (a.lastBaseUpdate = A),
        n === null && (a.shared.lanes = 0),
        (_e |= c),
        (t.lanes = c),
        (t.memoizedState = D);
    }
  }
  function ho(t, l) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(l);
  }
  function vo(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) ho(e[t], l);
  }
  function va(t, l) {
    try {
      var e = l.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create,
              c = e.inst;
            (u = n()), (c.destroy = u);
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (r) {
      vt(l, l.return, r);
    }
  }
  function me(t, l, e) {
    try {
      var u = l.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var c = u.inst,
              r = c.destroy;
            if (r !== void 0) {
              (c.destroy = void 0), (a = l);
              var d = e;
              try {
                r();
              } catch (m) {
                vt(a, d, m);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (m) {
      vt(l, l.return, m);
    }
  }
  function mo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        vo(l, e);
      } catch (u) {
        vt(t, t.return, u);
      }
    }
  }
  function go(t, l, e) {
    (e.props = we(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (u) {
      vt(t, l, u);
    }
  }
  function Ke(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        var u = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = u;
            break;
          default:
            a = u;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      vt(t, l, n);
    }
  }
  function al(t, l) {
    var e = t.ref,
      u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          vt(t, l, a);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          vt(t, l, a);
        }
      else e.current = null;
  }
  function So(t) {
    var l = t.type,
      e = t.memoizedProps,
      u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? (u.src = e.src) : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function bo(t, l, e) {
    try {
      var u = t.stateNode;
      sh(u, t.type, e, l), (u[Pt] = l);
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function _o(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Hc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || _o(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xc(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode),
        l
          ? e.nodeType === 8
            ? e.parentNode.insertBefore(t, l)
            : e.insertBefore(t, l)
          : (e.nodeType === 8
              ? ((l = e.parentNode), l.insertBefore(t, e))
              : ((l = e), l.appendChild(t)),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Zn));
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (xc(t, l, e), t = t.sibling; t !== null; )
        xc(t, l, e), (t = t.sibling);
  }
  function Rn(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (Rn(t, l, e), t = t.sibling; t !== null; )
        Rn(t, l, e), (t = t.sibling);
  }
  var Jl = !1,
    At = !1,
    Cc = !1,
    To = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null,
    Eo = !1;
  function Xy(t, l) {
    if (((t = t.containerInfo), (rf = Wn), (t = Yr(t)), Bi(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var u = e.getSelection && e.getSelection();
          if (u && u.rangeCount !== 0) {
            e = u.anchorNode;
            var a = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var c = 0,
              r = -1,
              d = -1,
              m = 0,
              A = 0,
              D = t,
              _ = null;
            l: for (;;) {
              for (
                var p;
                D !== e || (a !== 0 && D.nodeType !== 3) || (r = c + a),
                  D !== n || (u !== 0 && D.nodeType !== 3) || (d = c + u),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (p = D.firstChild) !== null;

              )
                (_ = D), (D = p);
              for (;;) {
                if (D === t) break l;
                if (
                  (_ === e && ++m === a && (r = c),
                  _ === n && ++A === u && (d = c),
                  (p = D.nextSibling) !== null)
                )
                  break;
                (D = _), (_ = D.parentNode);
              }
              D = p;
            }
            e = r === -1 || d === -1 ? null : { start: r, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      sf = { focusedElem: t, selectionRange: e }, Wn = !1, Yt = l;
      Yt !== null;

    )
      if (
        ((l = Yt), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = l), (Yt = t);
      else
        for (; Yt !== null; ) {
          switch (((l = Yt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (e = l),
                  (a = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = e.stateNode);
                try {
                  var q = we(e.type, a, e.elementType === e.type);
                  (t = u.getSnapshotBeforeUpdate(q, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = t);
                } catch (K) {
                  vt(e, e.return, K);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  hf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Yt = t);
            break;
          }
          Yt = l.return;
        }
    return (q = Eo), (Eo = !1), q;
  }
  function po(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wl(t, e), u & 4 && va(5, e);
        break;
      case 1:
        if ((Wl(t, e), u & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (r) {
              vt(e, e.return, r);
            }
          else {
            var a = we(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(a, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              vt(e, e.return, r);
            }
          }
        u & 64 && mo(e), u & 512 && Ke(e, e.return);
        break;
      case 3:
        if ((Wl(t, e), u & 64 && ((u = e.updateQueue), u !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            vo(u, t);
          } catch (r) {
            vt(e, e.return, r);
          }
        }
        break;
      case 26:
        Wl(t, e), u & 512 && Ke(e, e.return);
        break;
      case 27:
      case 5:
        Wl(t, e), l === null && u & 4 && So(e), u & 512 && Ke(e, e.return);
        break;
      case 12:
        Wl(t, e);
        break;
      case 13:
        Wl(t, e), u & 4 && Oo(t, e);
        break;
      case 22:
        if (((a = e.memoizedState !== null || Jl), !a)) {
          l = (l !== null && l.memoizedState !== null) || At;
          var n = Jl,
            c = At;
          (Jl = a),
            (At = l) && !c ? ge(t, e, (e.subtreeFlags & 8772) !== 0) : Wl(t, e),
            (Jl = n),
            (At = c);
        }
        u & 512 &&
          (e.memoizedProps.mode === "manual"
            ? Ke(e, e.return)
            : al(e, e.return));
        break;
      default:
        Wl(t, e);
    }
  }
  function Ao(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), Ao(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && _i(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ht = null,
    nl = !1;
  function kl(t, l, e) {
    for (e = e.child; e !== null; ) zo(t, l, e), (e = e.sibling);
  }
  function zo(t, l, e) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(Yu, e);
      } catch {}
    switch (e.tag) {
      case 26:
        At || al(e, l),
          kl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        At || al(e, l);
        var u = Ht,
          a = nl;
        for (
          Ht = e.stateNode, kl(t, l, e), e = e.stateNode, l = e.attributes;
          l.length;

        )
          e.removeAttributeNode(l[0]);
        _i(e), (Ht = u), (nl = a);
        break;
      case 5:
        At || al(e, l);
      case 6:
        a = Ht;
        var n = nl;
        if (((Ht = null), kl(t, l, e), (Ht = a), (nl = n), Ht !== null))
          if (nl)
            try {
              (t = Ht),
                (u = e.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(u)
                  : t.removeChild(u);
            } catch (c) {
              vt(e, l, c);
            }
          else
            try {
              Ht.removeChild(e.stateNode);
            } catch (c) {
              vt(e, l, c);
            }
        break;
      case 18:
        Ht !== null &&
          (nl
            ? ((l = Ht),
              (e = e.stateNode),
              l.nodeType === 8
                ? yf(l.parentNode, e)
                : l.nodeType === 1 && yf(l, e),
              xa(l))
            : yf(Ht, e.stateNode));
        break;
      case 4:
        (u = Ht),
          (a = nl),
          (Ht = e.stateNode.containerInfo),
          (nl = !0),
          kl(t, l, e),
          (Ht = u),
          (nl = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || me(2, e, l), At || me(4, e, l), kl(t, l, e);
        break;
      case 1:
        At ||
          (al(e, l),
          (u = e.stateNode),
          typeof u.componentWillUnmount == "function" && go(e, l, u)),
          kl(t, l, e);
        break;
      case 21:
        kl(t, l, e);
        break;
      case 22:
        At || al(e, l),
          (At = (u = At) || e.memoizedState !== null),
          kl(t, l, e),
          (At = u);
        break;
      default:
        kl(t, l, e);
    }
  }
  function Oo(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        xa(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function Qy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new To()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new To()),
          l
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function qc(t, l) {
    var e = Qy(t);
    l.forEach(function (u) {
      var a = th.bind(null, t, u);
      e.has(u) || (e.add(u), u.then(a, a));
    });
  }
  function gl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u],
          n = t,
          c = l,
          r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
            case 5:
              (Ht = r.stateNode), (nl = !1);
              break t;
            case 3:
              (Ht = r.stateNode.containerInfo), (nl = !0);
              break t;
            case 4:
              (Ht = r.stateNode.containerInfo), (nl = !0);
              break t;
          }
          r = r.return;
        }
        if (Ht === null) throw Error(f(160));
        zo(n, c, a),
          (Ht = null),
          (nl = !1),
          (n = a.alternate),
          n !== null && (n.return = null),
          (a.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) Do(l, t), (l = l.sibling);
  }
  var zl = null;
  function Do(t, l) {
    var e = t.alternate,
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl(l, t),
          Sl(t),
          u & 4 && (me(3, t, t.return), va(3, t), me(5, t, t.return));
        break;
      case 1:
        gl(l, t),
          Sl(t),
          u & 512 && (At || e === null || al(e, e.return)),
          u & 64 &&
            Jl &&
            ((t = t.updateQueue),
            t !== null &&
              ((u = t.callbacks),
              u !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? u : e.concat(u)))));
        break;
      case 26:
        var a = zl;
        if (
          (gl(l, t),
          Sl(t),
          u & 512 && (At || e === null || al(e, e.return)),
          u & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((u = t.memoizedState), e === null))
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  (u = t.type),
                    (e = t.memoizedProps),
                    (a = a.ownerDocument || a);
                  l: switch (u) {
                    case "title":
                      (n = a.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Qu] ||
                          n[Vt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = a.createElement(u)),
                          a.head.insertBefore(
                            n,
                            a.querySelector("head > title"),
                          )),
                        Zt(n, u, e),
                        (n[Vt] = t),
                        Bt(n),
                        (u = n);
                      break t;
                    case "link":
                      var c = Sd("link", "href", a).get(u + (e.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((n = c[r]),
                            n.getAttribute("href") ===
                              (e.href == null ? null : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break l;
                          }
                      }
                      (n = a.createElement(u)),
                        Zt(n, u, e),
                        a.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Sd("meta", "content", a).get(
                          u + (e.content || ""),
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((n = c[r]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            c.splice(r, 1);
                            break l;
                          }
                      }
                      (n = a.createElement(u)),
                        Zt(n, u, e),
                        a.head.appendChild(n);
                      break;
                    default:
                      throw Error(f(468, u));
                  }
                  (n[Vt] = t), Bt(n), (u = n);
                }
                t.stateNode = u;
              } else bd(a, t.type, t.stateNode);
            else t.stateNode = gd(a, u, t.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                u === null
                  ? bd(a, t.type, t.stateNode)
                  : gd(a, u, t.memoizedProps))
              : u === null &&
                t.stateNode !== null &&
                bo(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && t.alternate === null) {
          (a = t.stateNode), (n = t.memoizedProps);
          try {
            for (var d = a.firstChild; d; ) {
              var m = d.nextSibling,
                A = d.nodeName;
              d[Qu] ||
                A === "HEAD" ||
                A === "BODY" ||
                A === "SCRIPT" ||
                A === "STYLE" ||
                (A === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                a.removeChild(d),
                (d = m);
            }
            for (var D = t.type, _ = a.attributes; _.length; )
              a.removeAttributeNode(_[0]);
            Zt(a, D, n), (a[Vt] = t), (a[Pt] = n);
          } catch (q) {
            vt(t, t.return, q);
          }
        }
      case 5:
        if (
          (gl(l, t),
          Sl(t),
          u & 512 && (At || e === null || al(e, e.return)),
          t.flags & 32)
        ) {
          a = t.stateNode;
          try {
            iu(a, "");
          } catch (q) {
            vt(t, t.return, q);
          }
        }
        u & 4 &&
          t.stateNode != null &&
          ((a = t.memoizedProps), bo(t, a, e !== null ? e.memoizedProps : a)),
          u & 1024 && (Cc = !0);
        break;
      case 6:
        if ((gl(l, t), Sl(t), u & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (u = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = u;
          } catch (q) {
            vt(t, t.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Kn = null),
          (a = zl),
          (zl = Vn(l.containerInfo)),
          gl(l, t),
          (zl = a),
          Sl(t),
          u & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            xa(l.containerInfo);
          } catch (q) {
            vt(t, t.return, q);
          }
        Cc && ((Cc = !1), Mo(t));
        break;
      case 4:
        (u = zl),
          (zl = Vn(t.stateNode.containerInfo)),
          gl(l, t),
          Sl(t),
          (zl = u);
        break;
      case 12:
        gl(l, t), Sl(t);
        break;
      case 13:
        gl(l, t),
          Sl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Vc = Ul()),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), qc(t, u)));
        break;
      case 22:
        if (
          (u & 512 && (At || e === null || al(e, e.return)),
          (d = t.memoizedState !== null),
          (m = e !== null && e.memoizedState !== null),
          (A = Jl),
          (D = At),
          (Jl = A || d),
          (At = D || m),
          gl(l, t),
          (At = D),
          (Jl = A),
          Sl(t),
          (l = t.stateNode),
          (l._current = t),
          (l._visibility &= -3),
          (l._visibility |= l._pendingVisibility & 2),
          u & 8192 &&
            ((l._visibility = d ? l._visibility & -2 : l._visibility | 1),
            d && ((l = Jl || At), e === null || m || l || pu(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26 || l.tag === 27) {
              if (e === null) {
                m = e = l;
                try {
                  if (((a = m.stateNode), d))
                    (n = a.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = m.stateNode), (r = m.memoizedProps.style);
                    var p =
                      r != null && r.hasOwnProperty("display")
                        ? r.display
                        : null;
                    c.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (q) {
                  vt(m, m.return, q);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                m = l;
                try {
                  m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                } catch (q) {
                  vt(m, m.return, q);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), (l = l.return);
            }
            e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling);
          }
        u & 4 &&
          ((u = t.updateQueue),
          u !== null &&
            ((e = u.retryQueue),
            e !== null && ((u.retryQueue = null), qc(t, e))));
        break;
      case 19:
        gl(l, t),
          Sl(t),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), qc(t, u)));
        break;
      case 21:
        break;
      default:
        gl(l, t), Sl(t);
    }
  }
  function Sl(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var e = t.return; e !== null; ) {
              if (_o(e)) {
                var u = e;
                break t;
              }
              e = e.return;
            }
            throw Error(f(160));
          }
          switch (u.tag) {
            case 27:
              var a = u.stateNode,
                n = Hc(t);
              Rn(t, n, a);
              break;
            case 5:
              var c = u.stateNode;
              u.flags & 32 && (iu(c, ""), (u.flags &= -33));
              var r = Hc(t);
              Rn(t, r, c);
              break;
            case 3:
            case 4:
              var d = u.stateNode.containerInfo,
                m = Hc(t);
              xc(t, m, d);
              break;
            default:
              throw Error(f(161));
          }
        }
      } catch (A) {
        vt(t, t.return, A);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Mo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Mo(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Wl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) po(t, l.alternate, l), (l = l.sibling);
  }
  function pu(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          me(4, l, l.return), pu(l);
          break;
        case 1:
          al(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && go(l, l.return, e),
            pu(l);
          break;
        case 26:
        case 27:
        case 5:
          al(l, l.return), pu(l);
          break;
        case 22:
          al(l, l.return), l.memoizedState === null && pu(l);
          break;
        default:
          pu(l);
      }
      t = t.sibling;
    }
  }
  function ge(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate,
        a = t,
        n = l,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ge(a, n, e), va(4, n);
          break;
        case 1:
          if (
            (ge(a, n, e),
            (u = n),
            (a = u.stateNode),
            typeof a.componentDidMount == "function")
          )
            try {
              a.componentDidMount();
            } catch (m) {
              vt(u, u.return, m);
            }
          if (((u = n), (a = u.updateQueue), a !== null)) {
            var r = u.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  ho(d[a], r);
            } catch (m) {
              vt(u, u.return, m);
            }
          }
          e && c & 64 && mo(n), Ke(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          ge(a, n, e), e && u === null && c & 4 && So(n), Ke(n, n.return);
          break;
        case 12:
          ge(a, n, e);
          break;
        case 13:
          ge(a, n, e), e && c & 4 && Oo(a, n);
          break;
        case 22:
          n.memoizedState === null && ge(a, n, e), Ke(n, n.return);
          break;
        default:
          ge(a, n, e);
      }
      l = l.sibling;
    }
  }
  function Bc(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && na(e));
  }
  function jc(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && na(t));
  }
  function Se(t, l, e, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Ro(t, l, e, u), (l = l.sibling);
  }
  function Ro(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Se(t, l, e, u), a & 2048 && va(9, l);
        break;
      case 3:
        Se(t, l, e, u),
          a & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && na(t)));
        break;
      case 12:
        if (a & 2048) {
          Se(t, l, e, u), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              c = n.id,
              r = n.onPostCommit;
            typeof r == "function" &&
              r(
                c,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            vt(l, l.return, d);
          }
        } else Se(t, l, e, u);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          l.memoizedState !== null
            ? n._visibility & 4
              ? Se(t, l, e, u)
              : ma(t, l)
            : n._visibility & 4
              ? Se(t, l, e, u)
              : ((n._visibility |= 4),
                Au(t, l, e, u, (l.subtreeFlags & 10256) !== 0)),
          a & 2048 && Bc(l.alternate, l);
        break;
      case 24:
        Se(t, l, e, u), a & 2048 && jc(l.alternate, l);
        break;
      default:
        Se(t, l, e, u);
    }
  }
  function Au(t, l, e, u, a) {
    for (a = a && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        c = l,
        r = e,
        d = u,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Au(n, c, r, d, a), va(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null
            ? A._visibility & 4
              ? Au(n, c, r, d, a)
              : ma(n, c)
            : ((A._visibility |= 4), Au(n, c, r, d, a)),
            a && m & 2048 && Bc(c.alternate, c);
          break;
        case 24:
          Au(n, c, r, d, a), a && m & 2048 && jc(c.alternate, c);
          break;
        default:
          Au(n, c, r, d, a);
      }
      l = l.sibling;
    }
  }
  function ma(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          u = l,
          a = u.flags;
        switch (u.tag) {
          case 22:
            ma(e, u), a & 2048 && Bc(u.alternate, u);
            break;
          case 24:
            ma(e, u), a & 2048 && jc(u.alternate, u);
            break;
          default:
            ma(e, u);
        }
        l = l.sibling;
      }
  }
  var ga = 8192;
  function zu(t) {
    if (t.subtreeFlags & ga)
      for (t = t.child; t !== null; ) Uo(t), (t = t.sibling);
  }
  function Uo(t) {
    switch (t.tag) {
      case 26:
        zu(t),
          t.flags & ga &&
            t.memoizedState !== null &&
            Rh(zl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        zu(t);
        break;
      case 3:
      case 4:
        var l = zl;
        (zl = Vn(t.stateNode.containerInfo)), zu(t), (zl = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ga), (ga = 16777216), zu(t), (ga = l))
            : zu(t));
        break;
      default:
        zu(t);
    }
  }
  function No(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function Sa(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          (Yt = u), xo(u, t);
        }
      No(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ho(t), (t = t.sibling);
  }
  function Ho(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Sa(t), t.flags & 2048 && me(9, t, t.return);
        break;
      case 3:
        Sa(t);
        break;
      case 12:
        Sa(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -5), Un(t))
          : Sa(t);
        break;
      default:
        Sa(t);
    }
  }
  function Un(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          (Yt = u), xo(u, t);
        }
      No(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          me(8, l, l.return), Un(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 4 && ((e._visibility &= -5), Un(l));
          break;
        default:
          Un(l);
      }
      t = t.sibling;
    }
  }
  function xo(t, l) {
    for (; Yt !== null; ) {
      var e = Yt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          me(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          na(e.memoizedState.cache);
      }
      if (((u = e.child), u !== null)) (u.return = e), (Yt = u);
      else
        t: for (e = t; Yt !== null; ) {
          u = Yt;
          var a = u.sibling,
            n = u.return;
          if ((Ao(u), u === e)) {
            Yt = null;
            break t;
          }
          if (a !== null) {
            (a.return = n), (Yt = a);
            break t;
          }
          Yt = n;
        }
    }
  }
  function Zy(t, l, e, u) {
    (this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function bl(t, l, e, u) {
    return new Zy(t, l, e, u);
  }
  function Yc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function be(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = bl(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 31457280),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function Co(t, l) {
    t.flags &= 31457282;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function Nn(t, l, e, u, a, n) {
    var c = 0;
    if (((u = t), typeof t == "function")) Yc(t) && (c = 1);
    else if (typeof t == "string")
      c = Dh(t, e, Rl.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case T:
          return Je(e.children, a, n, l);
        case b:
          (c = 8), (a |= 24);
          break;
        case U:
          return (
            (t = bl(12, e, l, a | 2)), (t.elementType = U), (t.lanes = n), t
          );
        case bt:
          return (t = bl(13, e, l, a)), (t.elementType = bt), (t.lanes = n), t;
        case L:
          return (t = bl(19, e, l, a)), (t.elementType = L), (t.lanes = n), t;
        case J:
          return qo(e, a, n, l);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
              case V:
                c = 10;
                break t;
              case Y:
                c = 9;
                break t;
              case F:
                c = 11;
                break t;
              case dt:
                c = 14;
                break t;
              case rt:
                (c = 16), (u = null);
                break t;
            }
          (c = 29),
            (e = Error(f(130, t === null ? "null" : typeof t, ""))),
            (u = null);
      }
    return (
      (l = bl(c, e, l, a)), (l.elementType = t), (l.type = u), (l.lanes = n), l
    );
  }
  function Je(t, l, e, u) {
    return (t = bl(7, t, u, l)), (t.lanes = e), t;
  }
  function qo(t, l, e, u) {
    (t = bl(22, t, u, l)), (t.elementType = J), (t.lanes = e);
    var a = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = a._current;
        if (n === null) throw Error(f(456));
        if ((a._pendingVisibility & 2) === 0) {
          var c = ce(n, 2);
          c !== null && ((a._pendingVisibility |= 2), Wt(c, n, 2));
        }
      },
      attach: function () {
        var n = a._current;
        if (n === null) throw Error(f(456));
        if ((a._pendingVisibility & 2) !== 0) {
          var c = ce(n, 2);
          c !== null && ((a._pendingVisibility &= -3), Wt(c, n, 2));
        }
      },
    };
    return (t.stateNode = a), t;
  }
  function Gc(t, l, e) {
    return (t = bl(6, t, null, l)), (t.lanes = e), t;
  }
  function Xc(t, l, e) {
    return (
      (l = bl(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  function $l(t) {
    t.flags |= 4;
  }
  function Bo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !_d(l))) {
      if (
        ((l = ml.current),
        l !== null &&
          ((nt & 4194176) === nt
            ? Hl !== null
            : ((nt & 62914560) !== nt && (nt & 536870912) === 0) || l !== Hl))
      )
        throw ((ea = Li), Pr);
      t.flags |= 8192;
    }
  }
  function Hn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? If() : 536870912), (t.lanes |= l), (Du |= l));
  }
  function ba(t, l) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), (l = l.sibling);
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var u = null; e !== null; )
            e.alternate !== null && (u = e), (e = e.sibling);
          u === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function Et(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        (e |= a.lanes | a.childLanes),
          (u |= a.subtreeFlags & 31457280),
          (u |= a.flags & 31457280),
          (a.return = t),
          (a = a.sibling);
    else
      for (a = t.child; a !== null; )
        (e |= a.lanes | a.childLanes),
          (u |= a.subtreeFlags),
          (u |= a.flags),
          (a.return = t),
          (a = a.sibling);
    return (t.subtreeFlags |= u), (t.childLanes = e), l;
  }
  function wy(t, l, e) {
    var u = l.pendingProps;
    switch ((wi(l), l.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(l), null;
      case 1:
        return Et(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (u = null),
          t !== null && (u = t.memoizedState.cache),
          l.memoizedState.cache !== u && (l.flags |= 2048),
          Kl(qt),
          tu(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (Pu(l)
              ? $l(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Al !== null && (kc(Al), (Al = null)))),
          Et(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? ($l(l),
              e !== null ? (Et(l), Bo(l, e)) : (Et(l), (l.flags &= -16777217)))
            : e
              ? e !== t.memoizedState
                ? ($l(l), Et(l), Bo(l, e))
                : (Et(l), (l.flags &= -16777217))
              : (t.memoizedProps !== u && $l(l), Et(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        wa(l), (e = ue.current);
        var a = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== u && $l(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(f(166));
            return Et(l), null;
          }
          (t = Rl.current),
            Pu(l) ? $r(l) : ((t = dd(a, u, e)), (l.stateNode = t), $l(l));
        }
        return Et(l), null;
      case 5:
        if ((wa(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== u && $l(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(f(166));
            return Et(l), null;
          }
          if (((t = Rl.current), Pu(l))) $r(l);
          else {
            switch (((a = wn(ue.current)), t)) {
              case 1:
                t = a.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = a.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = a.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = a.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    (t = a.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof u.is == "string"
                        ? a.createElement("select", { is: u.is })
                        : a.createElement("select")),
                      u.multiple
                        ? (t.multiple = !0)
                        : u.size && (t.size = u.size);
                    break;
                  default:
                    t =
                      typeof u.is == "string"
                        ? a.createElement(e, { is: u.is })
                        : a.createElement(e);
                }
            }
            (t[Vt] = l), (t[Pt] = u);
            t: for (a = l.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                (a.child.return = a), (a = a.child);
                continue;
              }
              if (a === l) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === l) break t;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
            l.stateNode = t;
            t: switch ((Zt(t, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!u.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && $l(l);
          }
        }
        return Et(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== u && $l(l);
        else {
          if (typeof u != "string" && l.stateNode === null) throw Error(f(166));
          if (((t = ue.current), Pu(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (u = null),
              (a = kt),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            (t[Vt] = l),
              (t = !!(
                t.nodeValue === e ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                id(t.nodeValue, e)
              )),
              t || je(l);
          } else (t = wn(t).createTextNode(u)), (t[Vt] = l), (l.stateNode = t);
        }
        return Et(l), null;
      case 13:
        if (
          ((u = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((a = Pu(l)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((a = l.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(f(317));
              a[Vt] = l;
            } else
              Iu(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Et(l), (a = !1);
          } else Al !== null && (kc(Al), (Al = null)), (a = !0);
          if (!a) return l.flags & 256 ? (Zl(l), l) : (Zl(l), null);
        }
        if ((Zl(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
        if (
          ((e = u !== null), (t = t !== null && t.memoizedState !== null), e)
        ) {
          (u = l.child),
            (a = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (a = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== a && (u.flags |= 2048);
        }
        return (
          e !== t && e && (l.child.flags |= 8192),
          Hn(l, l.updateQueue),
          Et(l),
          null
        );
      case 4:
        return tu(), t === null && nf(l.stateNode.containerInfo), Et(l), null;
      case 10:
        return Kl(l.type), Et(l), null;
      case 19:
        if ((Rt(Ct), (a = l.memoizedState), a === null)) return Et(l), null;
        if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) ba(a, !1);
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = vn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      ba(a, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      Hn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    Co(e, t), (e = e.sibling);
                  return _t(Ct, (Ct.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Ul() > xn &&
              ((l.flags |= 128), (u = !0), ba(a, !1), (l.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = vn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                Hn(l, t),
                ba(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !ct)
              )
                return Et(l), null;
            } else
              2 * Ul() - a.renderingStartTime > xn &&
                e !== 536870912 &&
                ((l.flags |= 128), (u = !0), ba(a, !1), (l.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = a.last),
              t !== null ? (t.sibling = n) : (l.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = Ul()),
            (l.sibling = null),
            (t = Ct.current),
            _t(Ct, u ? (t & 1) | 2 : t & 1),
            l)
          : (Et(l), null);
      case 22:
      case 23:
        return (
          Zl(l),
          Ji(),
          (u = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== u && (l.flags |= 8192)
            : u && (l.flags |= 8192),
          u
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Et(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Et(l),
          (e = l.updateQueue),
          e !== null && Hn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (u = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          u !== e && (l.flags |= 2048),
          t !== null && Rt(Ge),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Kl(qt),
          Et(l),
          null
        );
      case 25:
        return null;
    }
    throw Error(f(156, l.tag));
  }
  function Vy(t, l) {
    switch ((wi(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Kl(qt),
          tu(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return wa(l), null;
      case 13:
        if (
          (Zl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(f(340));
          Iu();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return Rt(Ct), null;
      case 4:
        return tu(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return (
          Zl(l),
          Ji(),
          t !== null && Rt(Ge),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return Kl(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jo(t, l) {
    switch ((wi(l), l.tag)) {
      case 3:
        Kl(qt), tu();
        break;
      case 26:
      case 27:
      case 5:
        wa(l);
        break;
      case 4:
        tu();
        break;
      case 13:
        Zl(l);
        break;
      case 19:
        Rt(Ct);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        Zl(l), Ji(), t !== null && Rt(Ge);
        break;
      case 24:
        Kl(qt);
    }
  }
  var Ly = {
      getCacheForType: function (t) {
        var l = Lt(qt),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    Ky = typeof WeakMap == "function" ? WeakMap : Map,
    pt = 0,
    gt = null,
    lt = null,
    nt = 0,
    St = 0,
    il = null,
    Fl = !1,
    Ou = !1,
    Qc = !1,
    Pl = 0,
    zt = 0,
    _e = 0,
    ke = 0,
    Zc = 0,
    _l = 0,
    Du = 0,
    _a = null,
    Cl = null,
    wc = !1,
    Vc = 0,
    xn = 1 / 0,
    Cn = null,
    Te = null,
    qn = !1,
    We = null,
    Ta = 0,
    Lc = 0,
    Kc = null,
    Ea = 0,
    Jc = null;
  function cl() {
    if ((pt & 2) !== 0 && nt !== 0) return nt & -nt;
    if (G.T !== null) {
      var t = Su;
      return t !== 0 ? t : lf();
    }
    return ur();
  }
  function Yo() {
    _l === 0 && (_l = (nt & 536870912) === 0 || ct ? Pf() : 536870912);
    var t = ml.current;
    return t !== null && (t.flags |= 32), _l;
  }
  function Wt(t, l, e) {
    ((t === gt && St === 2) || t.cancelPendingCommit !== null) &&
      (Mu(t, 0), Il(t, nt, _l, !1)),
      Xu(t, e),
      ((pt & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((pt & 2) === 0 && (ke |= e), zt === 4 && Il(t, nt, _l, !1)),
        ql(t));
  }
  function Go(t, l, e) {
    if ((pt & 6) !== 0) throw Error(f(327));
    var u = (!e && (l & 60) === 0 && (l & t.expiredLanes) === 0) || Gu(t, l),
      a = u ? Wy(t, l) : Fc(t, l, !0),
      n = u;
    do {
      if (a === 0) {
        Ou && !u && Il(t, l, 0, !1);
        break;
      } else if (a === 6) Il(t, l, 0, !Fl);
      else {
        if (((e = t.current.alternate), n && !Jy(e))) {
          (a = Fc(t, l, !1)), (n = !1);
          continue;
        }
        if (a === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            l = c;
            t: {
              var r = t;
              a = _a;
              var d = r.current.memoizedState.isDehydrated;
              if ((d && (Mu(r, c).flags |= 256), (c = Fc(r, c, !1)), c !== 2)) {
                if (Qc && !d) {
                  (r.errorRecoveryDisabledLanes |= n), (ke |= n), (a = 4);
                  break t;
                }
                (n = Cl), (Cl = a), n !== null && kc(n);
              }
              a = c;
            }
            if (((n = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Mu(t, 0), Il(t, l, 0, !0);
          break;
        }
        t: {
          switch (((u = t), a)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((l & 4194176) === l) {
                Il(u, l, _l, !Fl);
                break t;
              }
              break;
            case 2:
              Cl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if (
            ((u.finishedWork = e),
            (u.finishedLanes = l),
            (l & 62914560) === l && ((n = Vc + 300 - Ul()), 10 < n))
          ) {
            if ((Il(u, l, _l, !Fl), Ja(u, 0) !== 0)) break t;
            u.timeoutHandle = rd(
              Xo.bind(null, u, e, Cl, Cn, wc, l, _l, ke, Du, Fl, 2, -0, 0),
              n,
            );
            break t;
          }
          Xo(u, e, Cl, Cn, wc, l, _l, ke, Du, Fl, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ql(t);
  }
  function kc(t) {
    Cl === null ? (Cl = t) : Cl.push.apply(Cl, t);
  }
  function Xo(t, l, e, u, a, n, c, r, d, m, A, D, _) {
    var p = l.subtreeFlags;
    if (
      (p & 8192 || (p & 16785408) === 16785408) &&
      ((Ma = { stylesheets: null, count: 0, unsuspend: Mh }),
      Uo(l),
      (l = Uh()),
      l !== null)
    ) {
      (t.cancelPendingCommit = l(Jo.bind(null, t, e, u, a, c, r, d, 1, D, _))),
        Il(t, n, c, !m);
      return;
    }
    Jo(t, e, u, a, c, r, d, A, D, _);
  }
  function Jy(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var u = 0; u < e.length; u++) {
          var a = e[u],
            n = a.getSnapshot;
          a = a.value;
          try {
            if (!ul(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        (e.return = l), (l = e);
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    }
    return !0;
  }
  function Il(t, l, e, u) {
    (l &= ~Zc),
      (l &= ~ke),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      u && (t.warmLanes |= l),
      (u = t.expirationTimes);
    for (var a = l; 0 < a; ) {
      var n = 31 - el(a),
        c = 1 << n;
      (u[n] = -1), (a &= ~c);
    }
    e !== 0 && tr(t, e, l);
  }
  function Bn() {
    return (pt & 6) === 0 ? (pa(0), !1) : !0;
  }
  function Wc() {
    if (lt !== null) {
      if (St === 0) var t = lt.return;
      else (t = lt), (Ll = Ve = null), lc(t), (mu = null), (ua = 0), (t = lt);
      for (; t !== null; ) jo(t.alternate, t), (t = t.return);
      lt = null;
    }
  }
  function Mu(t, l) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), dh(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Wc(),
      (gt = t),
      (lt = e = be(t.current, null)),
      (nt = l),
      (St = 0),
      (il = null),
      (Fl = !1),
      (Ou = Gu(t, l)),
      (Qc = !1),
      (Du = _l = Zc = ke = _e = zt = 0),
      (Cl = _a = null),
      (wc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var a = 31 - el(u),
          n = 1 << a;
        (l |= t[a]), (u &= ~n);
      }
    return (Pl = l), nn(), e;
  }
  function Qo(t, l) {
    (I = null),
      (G.H = xl),
      l === la
        ? ((l = ls()), (St = 3))
        : l === Pr
          ? ((l = ls()), (St = 4))
          : (St =
              l === Is
                ? 8
                : l !== null &&
                    typeof l == "object" &&
                    typeof l.then == "function"
                  ? 6
                  : 1),
      (il = l),
      lt === null && ((zt = 1), On(t, yl(l, t.current)));
  }
  function Zo() {
    var t = G.H;
    return (G.H = xl), t === null ? xl : t;
  }
  function wo() {
    var t = G.A;
    return (G.A = Ly), t;
  }
  function $c() {
    (zt = 4),
      Fl || ((nt & 4194176) !== nt && ml.current !== null) || (Ou = !0),
      ((_e & 134217727) === 0 && (ke & 134217727) === 0) ||
        gt === null ||
        Il(gt, nt, _l, !1);
  }
  function Fc(t, l, e) {
    var u = pt;
    pt |= 2;
    var a = Zo(),
      n = wo();
    (gt !== t || nt !== l) && ((Cn = null), Mu(t, l)), (l = !1);
    var c = zt;
    t: do
      try {
        if (St !== 0 && lt !== null) {
          var r = lt,
            d = il;
          switch (St) {
            case 8:
              Wc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 6:
              ml.current === null && (l = !0);
              var m = St;
              if (((St = 0), (il = null), Ru(t, r, d, m), e && Ou)) {
                c = 0;
                break t;
              }
              break;
            default:
              (m = St), (St = 0), (il = null), Ru(t, r, d, m);
          }
        }
        ky(), (c = zt);
        break;
      } catch (A) {
        Qo(t, A);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Ll = Ve = null),
      (pt = u),
      (G.H = a),
      (G.A = n),
      lt === null && ((gt = null), (nt = 0), nn()),
      c
    );
  }
  function ky() {
    for (; lt !== null; ) Vo(lt);
  }
  function Wy(t, l) {
    var e = pt;
    pt |= 2;
    var u = Zo(),
      a = wo();
    gt !== t || nt !== l
      ? ((Cn = null), (xn = Ul() + 500), Mu(t, l))
      : (Ou = Gu(t, l));
    t: do
      try {
        if (St !== 0 && lt !== null) {
          l = lt;
          var n = il;
          l: switch (St) {
            case 1:
              (St = 0), (il = null), Ru(t, l, n, 1);
              break;
            case 2:
              if (Ir(n)) {
                (St = 0), (il = null), Lo(l);
                break;
              }
              (l = function () {
                St === 2 && gt === t && (St = 7), ql(t);
              }),
                n.then(l, l);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Ir(n)
                ? ((St = 0), (il = null), Lo(l))
                : ((St = 0), (il = null), Ru(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (lt.tag) {
                case 26:
                  c = lt.memoizedState;
                case 5:
                case 27:
                  var r = lt;
                  if (!c || _d(c)) {
                    (St = 0), (il = null);
                    var d = r.sibling;
                    if (d !== null) lt = d;
                    else {
                      var m = r.return;
                      m !== null ? ((lt = m), jn(m)) : (lt = null);
                    }
                    break l;
                  }
              }
              (St = 0), (il = null), Ru(t, l, n, 5);
              break;
            case 6:
              (St = 0), (il = null), Ru(t, l, n, 6);
              break;
            case 8:
              Wc(), (zt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        $y();
        break;
      } catch (A) {
        Qo(t, A);
      }
    while (!0);
    return (
      (Ll = Ve = null),
      (G.H = u),
      (G.A = a),
      (pt = e),
      lt !== null ? 0 : ((gt = null), (nt = 0), nn(), zt)
    );
  }
  function $y() {
    for (; lt !== null && !S0(); ) Vo(lt);
  }
  function Vo(t) {
    var l = oo(t.alternate, t, Pl);
    (t.memoizedProps = t.pendingProps), l === null ? jn(t) : (lt = l);
  }
  function Lo(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = no(e, l, l.pendingProps, l.type, void 0, nt);
        break;
      case 11:
        l = no(e, l, l.pendingProps, l.type.render, l.ref, nt);
        break;
      case 5:
        lc(l);
      default:
        jo(e, l), (l = lt = Co(l, Pl)), (l = oo(e, l, Pl));
    }
    (t.memoizedProps = t.pendingProps), l === null ? jn(t) : (lt = l);
  }
  function Ru(t, l, e, u) {
    (Ll = Ve = null), lc(l), (mu = null), (ua = 0);
    var a = l.return;
    try {
      if (Yy(t, a, l, e, nt)) {
        (zt = 1), On(t, yl(e, t.current)), (lt = null);
        return;
      }
    } catch (n) {
      if (a !== null) throw ((lt = a), n);
      (zt = 1), On(t, yl(e, t.current)), (lt = null);
      return;
    }
    l.flags & 32768
      ? (ct || u === 1
          ? (t = !0)
          : Ou || (nt & 536870912) !== 0
            ? (t = !1)
            : ((Fl = t = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = ml.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        Ko(l, t))
      : jn(l);
  }
  function jn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Ko(l, Fl);
        return;
      }
      t = l.return;
      var e = wy(l.alternate, l, Pl);
      if (e !== null) {
        lt = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        lt = l;
        return;
      }
      lt = l = t;
    } while (l !== null);
    zt === 0 && (zt = 5);
  }
  function Ko(t, l) {
    do {
      var e = Vy(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (lt = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        lt = t;
        return;
      }
      lt = t = e;
    } while (t !== null);
    (zt = 6), (lt = null);
  }
  function Jo(t, l, e, u, a, n, c, r, d, m) {
    var A = G.T,
      D = x.p;
    try {
      (x.p = 2), (G.T = null), Fy(t, l, e, u, D, a, n, c, r, d, m);
    } finally {
      (G.T = A), (x.p = D);
    }
  }
  function Fy(t, l, e, u, a, n, c, r) {
    do Uu();
    while (We !== null);
    if ((pt & 6) !== 0) throw Error(f(327));
    var d = t.finishedWork;
    if (((u = t.finishedLanes), d === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), d === t.current))
      throw Error(f(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var m = d.lanes | d.childLanes;
    if (
      ((m |= Xi),
      R0(t, u, m, n, c, r),
      t === gt && ((lt = gt = null), (nt = 0)),
      ((d.subtreeFlags & 10256) === 0 && (d.flags & 10256) === 0) ||
        qn ||
        ((qn = !0),
        (Lc = m),
        (Kc = e),
        lh(Va, function () {
          return Uu(), null;
        })),
      (e = (d.flags & 15990) !== 0),
      (d.subtreeFlags & 15990) !== 0 || e
        ? ((e = G.T),
          (G.T = null),
          (n = x.p),
          (x.p = 2),
          (c = pt),
          (pt |= 4),
          Xy(t, d),
          Do(d, t),
          Ty(sf, t.containerInfo),
          (Wn = !!rf),
          (sf = rf = null),
          (t.current = d),
          po(t, d.alternate, d),
          b0(),
          (pt = c),
          (x.p = n),
          (G.T = e))
        : (t.current = d),
      qn ? ((qn = !1), (We = t), (Ta = u)) : ko(t, m),
      (m = t.pendingLanes),
      m === 0 && (Te = null),
      A0(d.stateNode),
      ql(t),
      l !== null)
    )
      for (a = t.onRecoverableError, d = 0; d < l.length; d++)
        (m = l[d]), a(m.value, { componentStack: m.stack });
    return (
      (Ta & 3) !== 0 && Uu(),
      (m = t.pendingLanes),
      (u & 4194218) !== 0 && (m & 42) !== 0
        ? t === Jc
          ? Ea++
          : ((Ea = 0), (Jc = t))
        : (Ea = 0),
      pa(0),
      null
    );
  }
  function ko(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), na(l)));
  }
  function Uu() {
    if (We !== null) {
      var t = We,
        l = Lc;
      Lc = 0;
      var e = er(Ta),
        u = G.T,
        a = x.p;
      try {
        if (((x.p = 32 > e ? 32 : e), (G.T = null), We === null)) var n = !1;
        else {
          (e = Kc), (Kc = null);
          var c = We,
            r = Ta;
          if (((We = null), (Ta = 0), (pt & 6) !== 0)) throw Error(f(331));
          var d = pt;
          if (
            ((pt |= 4),
            Ho(c.current),
            Ro(c, c.current, r, e),
            (pt = d),
            pa(0, !1),
            ll && typeof ll.onPostCommitFiberRoot == "function")
          )
            try {
              ll.onPostCommitFiberRoot(Yu, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (x.p = a), (G.T = u), ko(t, l);
      }
    }
    return !1;
  }
  function Wo(t, l, e) {
    (l = yl(e, l)),
      (l = vc(t.stateNode, l, 2)),
      (t = ve(t, l, 2)),
      t !== null && (Xu(t, 2), ql(t));
  }
  function vt(t, l, e) {
    if (t.tag === 3) Wo(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Wo(l, t, e);
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Te === null || !Te.has(u)))
          ) {
            (t = yl(e, t)),
              (e = Fs(2)),
              (u = ve(l, e, 2)),
              u !== null && (Ps(e, u, l, t), Xu(u, 2), ql(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function Pc(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Ky();
      var a = new Set();
      u.set(l, a);
    } else (a = u.get(l)), a === void 0 && ((a = new Set()), u.set(l, a));
    a.has(e) ||
      ((Qc = !0), a.add(e), (t = Py.bind(null, t, l, e)), l.then(t, t));
  }
  function Py(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      gt === t &&
        (nt & e) === e &&
        (zt === 4 || (zt === 3 && (nt & 62914560) === nt && 300 > Ul() - Vc)
          ? (pt & 2) === 0 && Mu(t, 0)
          : (Zc |= e),
        Du === nt && (Du = 0)),
      ql(t);
  }
  function $o(t, l) {
    l === 0 && (l = If()), (t = ce(t, l)), t !== null && (Xu(t, l), ql(t));
  }
  function Iy(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), $o(t, e);
  }
  function th(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode,
          a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    u !== null && u.delete(l), $o(t, e);
  }
  function lh(t, l) {
    return mi(t, l);
  }
  var Yn = null,
    Nu = null,
    Ic = !1,
    Gn = !1,
    tf = !1,
    $e = 0;
  function ql(t) {
    t !== Nu &&
      t.next === null &&
      (Nu === null ? (Yn = Nu = t) : (Nu = Nu.next = t)),
      (Gn = !0),
      Ic || ((Ic = !0), uh(eh));
  }
  function pa(t, l) {
    if (!tf && Gn) {
      tf = !0;
      do
        for (var e = !1, u = Yn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                r = u.pingedLanes;
              (n = (1 << (31 - el(42 | t) + 1)) - 1),
                (n &= a & ~(c & ~r)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), Io(u, n));
          } else
            (n = nt),
              (n = Ja(u, u === gt ? n : 0)),
              (n & 3) === 0 || Gu(u, n) || ((e = !0), Io(u, n));
          u = u.next;
        }
      while (e);
      tf = !1;
    }
  }
  function eh() {
    Gn = Ic = !1;
    var t = 0;
    $e !== 0 && (oh() && (t = $e), ($e = 0));
    for (var l = Ul(), e = null, u = Yn; u !== null; ) {
      var a = u.next,
        n = Fo(u, l);
      n === 0
        ? ((u.next = null),
          e === null ? (Yn = a) : (e.next = a),
          a === null && (Nu = e))
        : ((e = u), (t !== 0 || (n & 3) !== 0) && (Gn = !0)),
        (u = a);
    }
    pa(t);
  }
  function Fo(t, l) {
    for (
      var e = t.suspendedLanes,
        u = t.pingedLanes,
        a = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - el(n),
        r = 1 << c,
        d = a[c];
      d === -1
        ? ((r & e) === 0 || (r & u) !== 0) && (a[c] = M0(r, l))
        : d <= l && (t.expiredLanes |= r),
        (n &= ~r);
    }
    if (
      ((l = gt),
      (e = nt),
      (e = Ja(t, t === l ? e : 0)),
      (u = t.callbackNode),
      e === 0 || (t === l && St === 2) || t.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && gi(u),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Gu(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((u !== null && gi(u), er(e))) {
        case 2:
        case 8:
          e = $f;
          break;
        case 32:
          e = Va;
          break;
        case 268435456:
          e = Ff;
          break;
        default:
          e = Va;
      }
      return (
        (u = Po.bind(null, t)),
        (e = mi(e, u)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      u !== null && u !== null && gi(u),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Po(t, l) {
    var e = t.callbackNode;
    if (Uu() && t.callbackNode !== e) return null;
    var u = nt;
    return (
      (u = Ja(t, t === gt ? u : 0)),
      u === 0
        ? null
        : (Go(t, u, l),
          Fo(t, Ul()),
          t.callbackNode != null && t.callbackNode === e
            ? Po.bind(null, t)
            : null)
    );
  }
  function Io(t, l) {
    if (Uu()) return null;
    Go(t, l, !0);
  }
  function uh(t) {
    yh(function () {
      (pt & 6) !== 0 ? mi(Wf, t) : t();
    });
  }
  function lf() {
    return $e === 0 && ($e = Pf()), $e;
  }
  function td(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Pa("" + t);
  }
  function ld(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function ah(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = td((a[Pt] || null).action),
        c = u.submitter;
      c &&
        ((l = (l = c[Pt] || null)
          ? td(l.formAction)
          : c.getAttribute("formAction")),
        l !== null && ((n = l), (c = null)));
      var r = new en("action", "action", null, u, a);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if ($e !== 0) {
                  var d = c ? ld(a, c) : new FormData(a);
                  sc(
                    e,
                    { pending: !0, data: d, method: a.method, action: n },
                    null,
                    d,
                  );
                }
              } else
                typeof n == "function" &&
                  (r.preventDefault(),
                  (d = c ? ld(a, c) : new FormData(a)),
                  sc(
                    e,
                    { pending: !0, data: d, method: a.method, action: n },
                    n,
                    d,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var ef = 0; ef < Kr.length; ef++) {
    var uf = Kr[ef],
      nh = uf.toLowerCase(),
      ih = uf[0].toUpperCase() + uf.slice(1);
    pl(nh, "on" + ih);
  }
  pl(Qr, "onAnimationEnd"),
    pl(Zr, "onAnimationIteration"),
    pl(wr, "onAnimationStart"),
    pl("dblclick", "onDoubleClick"),
    pl("focusin", "onFocus"),
    pl("focusout", "onBlur"),
    pl(py, "onTransitionRun"),
    pl(Ay, "onTransitionStart"),
    pl(zy, "onTransitionCancel"),
    pl(Vr, "onTransitionEnd"),
    au("onMouseEnter", ["mouseout", "mouseover"]),
    au("onMouseLeave", ["mouseout", "mouseover"]),
    au("onPointerEnter", ["pointerout", "pointerover"]),
    au("onPointerLeave", ["pointerout", "pointerover"]),
    Ne(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ne(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ne(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ne(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Aa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ch = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Aa),
    );
  function ed(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e],
        a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var c = u.length - 1; 0 <= c; c--) {
            var r = u[c],
              d = r.instance,
              m = r.currentTarget;
            if (((r = r.listener), d !== n && a.isPropagationStopped()))
              break t;
            (n = r), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              zn(A);
            }
            (a.currentTarget = null), (n = d);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((r = u[c]),
              (d = r.instance),
              (m = r.currentTarget),
              (r = r.listener),
              d !== n && a.isPropagationStopped())
            )
              break t;
            (n = r), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              zn(A);
            }
            (a.currentTarget = null), (n = d);
          }
      }
    }
  }
  function ut(t, l) {
    var e = l[bi];
    e === void 0 && (e = l[bi] = new Set());
    var u = t + "__bubble";
    e.has(u) || (ud(l, t, 2, !1), e.add(u));
  }
  function af(t, l, e) {
    var u = 0;
    l && (u |= 4), ud(e, t, u, l);
  }
  var Xn = "_reactListening" + Math.random().toString(36).slice(2);
  function nf(t) {
    if (!t[Xn]) {
      (t[Xn] = !0),
        nr.forEach(function (e) {
          e !== "selectionchange" && (ch.has(e) || af(e, !1, t), af(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Xn] || ((l[Xn] = !0), af("selectionchange", !1, l));
    }
  }
  function ud(t, l, e, u) {
    switch (Od(l)) {
      case 2:
        var a = xh;
        break;
      case 8:
        a = Ch;
        break;
      default:
        a = bf;
    }
    (e = a.bind(null, l, e, t)),
      (a = void 0),
      !Di ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (a = !0),
      u
        ? a !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: a })
          : t.addEventListener(l, e, !0)
        : a !== void 0
          ? t.addEventListener(l, e, { passive: a })
          : t.addEventListener(l, e, !1);
  }
  function cf(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var r = u.stateNode.containerInfo;
          if (r === a || (r.nodeType === 8 && r.parentNode === a)) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var d = c.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = c.stateNode.containerInfo),
                d === a || (d.nodeType === 8 && d.parentNode === a))
              )
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (((c = Ue(r)), c === null)) return;
            if (((d = c.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              u = n = c;
              continue t;
            }
            r = r.parentNode;
          }
        }
        u = u.return;
      }
    gr(function () {
      var m = n,
        A = zi(e),
        D = [];
      t: {
        var _ = Lr.get(t);
        if (_ !== void 0) {
          var p = en,
            q = t;
          switch (t) {
            case "keypress":
              if (tn(e) === 0) break t;
            case "keydown":
            case "keyup":
              p = ty;
              break;
            case "focusin":
              (q = "focus"), (p = Ni);
              break;
            case "focusout":
              (q = "blur"), (p = Ni);
              break;
            case "beforeblur":
            case "afterblur":
              p = Ni;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = _r;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Z0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = uy;
              break;
            case Qr:
            case Zr:
            case wr:
              p = L0;
              break;
            case Vr:
              p = ny;
              break;
            case "scroll":
            case "scrollend":
              p = X0;
              break;
            case "wheel":
              p = cy;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = J0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Er;
              break;
            case "toggle":
            case "beforetoggle":
              p = ry;
          }
          var K = (l & 4) !== 0,
            Ot = !K && (t === "scroll" || t === "scrollend"),
            g = K ? (_ !== null ? _ + "Capture" : null) : _;
          K = [];
          for (var h = m, S; h !== null; ) {
            var O = h;
            if (
              ((S = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                S === null ||
                g === null ||
                ((O = wu(h, g)), O != null && K.push(za(h, O, S))),
              Ot)
            )
              break;
            h = h.return;
          }
          0 < K.length &&
            ((_ = new p(_, q, null, e, A)), D.push({ event: _, listeners: K }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (p = t === "mouseout" || t === "pointerout"),
            _ &&
              e !== Ai &&
              (q = e.relatedTarget || e.fromElement) &&
              (Ue(q) || q[lu]))
          )
            break t;
          if (
            (p || _) &&
            ((_ =
              A.window === A
                ? A
                : (_ = A.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            p
              ? ((q = e.relatedTarget || e.toElement),
                (p = m),
                (q = q ? Ue(q) : null),
                q !== null &&
                  ((Ot = w(q)),
                  (K = q.tag),
                  q !== Ot || (K !== 5 && K !== 27 && K !== 6)) &&
                  (q = null))
              : ((p = null), (q = m)),
            p !== q)
          ) {
            if (
              ((K = _r),
              (O = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((K = Er),
                (O = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (Ot = p == null ? _ : Zu(p)),
              (S = q == null ? _ : Zu(q)),
              (_ = new K(O, h + "leave", p, e, A)),
              (_.target = Ot),
              (_.relatedTarget = S),
              (O = null),
              Ue(A) === m &&
                ((K = new K(g, h + "enter", q, e, A)),
                (K.target = S),
                (K.relatedTarget = Ot),
                (O = K)),
              (Ot = O),
              p && q)
            )
              l: {
                for (K = p, g = q, h = 0, S = K; S; S = Hu(S)) h++;
                for (S = 0, O = g; O; O = Hu(O)) S++;
                for (; 0 < h - S; ) (K = Hu(K)), h--;
                for (; 0 < S - h; ) (g = Hu(g)), S--;
                for (; h--; ) {
                  if (K === g || (g !== null && K === g.alternate)) break l;
                  (K = Hu(K)), (g = Hu(g));
                }
                K = null;
              }
            else K = null;
            p !== null && ad(D, _, p, K, !1),
              q !== null && Ot !== null && ad(D, Ot, q, K, !0);
          }
        }
        t: {
          if (
            ((_ = m ? Zu(m) : window),
            (p = _.nodeName && _.nodeName.toLowerCase()),
            p === "select" || (p === "input" && _.type === "file"))
          )
            var C = Ur;
          else if (Mr(_))
            if (Nr) C = by;
            else {
              C = gy;
              var tt = my;
            }
          else
            (p = _.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? m && pi(m.elementType) && (C = Ur)
                : (C = Sy);
          if (C && (C = C(t, m))) {
            Rr(D, C, e, A);
            break t;
          }
          tt && tt(t, _, m),
            t === "focusout" &&
              m &&
              _.type === "number" &&
              m.memoizedProps.value != null &&
              Ei(_, "number", _.value);
        }
        switch (((tt = m ? Zu(m) : window), t)) {
          case "focusin":
            (Mr(tt) || tt.contentEditable === "true") &&
              ((su = tt), (ji = m), (Fu = null));
            break;
          case "focusout":
            Fu = ji = su = null;
            break;
          case "mousedown":
            Yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yi = !1), Gr(D, e, A);
            break;
          case "selectionchange":
            if (Ey) break;
          case "keydown":
          case "keyup":
            Gr(D, e, A);
        }
        var j;
        if (xi)
          t: {
            switch (t) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break t;
              case "compositionend":
                Q = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break t;
            }
            Q = void 0;
          }
        else
          ru
            ? Or(t, e) && (Q = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (pr &&
            e.locale !== "ko" &&
            (ru || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && ru && (j = Sr())
              : ((ie = A),
                (Mi = "value" in ie ? ie.value : ie.textContent),
                (ru = !0))),
          (tt = Qn(m, Q)),
          0 < tt.length &&
            ((Q = new Tr(Q, t, null, e, A)),
            D.push({ event: Q, listeners: tt }),
            j ? (Q.data = j) : ((j = Dr(e)), j !== null && (Q.data = j)))),
          (j = oy ? dy(t, e) : yy(t, e)) &&
            ((Q = Qn(m, "onBeforeInput")),
            0 < Q.length &&
              ((tt = new Tr("onBeforeInput", "beforeinput", null, e, A)),
              D.push({ event: tt, listeners: Q }),
              (tt.data = j))),
          ah(D, t, m, e, A);
      }
      ed(D, l);
    });
  }
  function za(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function Qn(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t,
        n = a.stateNode;
      (a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          n === null ||
          ((a = wu(t, e)),
          a != null && u.unshift(za(t, a, n)),
          (a = wu(t, l)),
          a != null && u.push(za(t, a, n))),
        (t = t.return);
    }
    return u;
  }
  function Hu(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ad(t, l, e, u, a) {
    for (var n = l._reactName, c = []; e !== null && e !== u; ) {
      var r = e,
        d = r.alternate,
        m = r.stateNode;
      if (((r = r.tag), d !== null && d === u)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        m === null ||
        ((d = m),
        a
          ? ((m = wu(e, n)), m != null && c.unshift(za(e, m, d)))
          : a || ((m = wu(e, n)), m != null && c.push(za(e, m, d)))),
        (e = e.return);
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var fh = /\r\n?/g,
    rh = /\u0000|\uFFFD/g;
  function nd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        fh,
        `
`,
      )
      .replace(rh, "");
  }
  function id(t, l) {
    return (l = nd(l)), nd(t) === l;
  }
  function Zn() {}
  function ht(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        typeof u == "string"
          ? l === "body" || (l === "textarea" && u === "") || iu(t, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            l !== "body" &&
            iu(t, "" + u);
        break;
      case "className":
        Wa(t, "class", u);
        break;
      case "tabIndex":
        Wa(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wa(t, e, u);
        break;
      case "style":
        vr(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          Wa(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        (u = Pa("" + u)), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (l !== "input" && ht(t, l, "name", a.name, a, null),
                ht(t, l, "formEncType", a.formEncType, a, null),
                ht(t, l, "formMethod", a.formMethod, a, null),
                ht(t, l, "formTarget", a.formTarget, a, null))
              : (ht(t, l, "encType", a.encType, a, null),
                ht(t, l, "method", a.method, a, null),
                ht(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        (u = Pa("" + u)), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Zn);
        break;
      case "onScroll":
        u != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        u != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(f(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(f(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (e = Pa("" + u)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? t.setAttribute(e, "" + u)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === !0
          ? t.setAttribute(e, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? t.setAttribute(e, u)
            : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? t.setAttribute(e, u)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? t.removeAttribute(e)
          : t.setAttribute(e, u);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), ka(t, "popover", u);
        break;
      case "xlinkActuate":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Gl(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        ka(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Y0.get(e) || e), ka(t, e, u));
    }
  }
  function ff(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        vr(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(f(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(f(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? iu(t, u)
          : (typeof u == "number" || typeof u == "bigint") && iu(t, "" + u);
        break;
      case "onScroll":
        u != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        u != null && ut("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Zn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ir.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((a = e.endsWith("Capture")),
              (l = e.slice(2, a ? e.length - 7 : void 0)),
              (n = t[Pt] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && t.removeEventListener(l, n, a),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, u, a);
              break t;
            }
            e in t
              ? (t[e] = u)
              : u === !0
                ? t.setAttribute(e, "")
                : ka(t, e, u);
          }
    }
  }
  function Zt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var u = !1,
          a = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, l));
                default:
                  ht(t, l, n, c, e, null);
              }
          }
        a && ht(t, l, "srcSet", e.srcSet, e, null),
          u && ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        ut("invalid", t);
        var r = (n = c = a = null),
          d = null,
          m = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var A = e[u];
            if (A != null)
              switch (u) {
                case "name":
                  a = A;
                  break;
                case "type":
                  c = A;
                  break;
                case "checked":
                  d = A;
                  break;
                case "defaultChecked":
                  m = A;
                  break;
                case "value":
                  n = A;
                  break;
                case "defaultValue":
                  r = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(f(137, l));
                  break;
                default:
                  ht(t, l, u, A, e, null);
              }
          }
        or(t, n, r, d, m, c, a, !1), $a(t);
        return;
      case "select":
        ut("invalid", t), (u = c = n = null);
        for (a in e)
          if (e.hasOwnProperty(a) && ((r = e[a]), r != null))
            switch (a) {
              case "value":
                n = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                u = r;
              default:
                ht(t, l, a, r, e, null);
            }
        (l = n),
          (e = c),
          (t.multiple = !!u),
          l != null ? nu(t, !!u, l, !1) : e != null && nu(t, !!u, e, !0);
        return;
      case "textarea":
        ut("invalid", t), (n = a = u = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((r = e[c]), r != null))
            switch (c) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                a = r;
                break;
              case "children":
                n = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                ht(t, l, c, r, e, null);
            }
        yr(t, u, a, n), $a(t);
        return;
      case "option":
        for (d in e)
          if (e.hasOwnProperty(d) && ((u = e[d]), u != null))
            switch (d) {
              case "selected":
                t.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ht(t, l, d, u, e, null);
            }
        return;
      case "dialog":
        ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Aa.length; u++) ut(Aa[u], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in e)
          if (e.hasOwnProperty(m) && ((u = e[m]), u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, l));
              default:
                ht(t, l, m, u, e, null);
            }
        return;
      default:
        if (pi(l)) {
          for (A in e)
            e.hasOwnProperty(A) &&
              ((u = e[A]), u !== void 0 && ff(t, l, A, u, e, void 0));
          return;
        }
    }
    for (r in e)
      e.hasOwnProperty(r) && ((u = e[r]), u != null && ht(t, l, r, u, e, null));
  }
  function sh(t, l, e, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null,
          n = null,
          c = null,
          r = null,
          d = null,
          m = null,
          A = null;
        for (p in e) {
          var D = e[p];
          if (e.hasOwnProperty(p) && D != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = D;
              default:
                u.hasOwnProperty(p) || ht(t, l, p, null, u, D);
            }
        }
        for (var _ in u) {
          var p = u[_];
          if (((D = e[_]), u.hasOwnProperty(_) && (p != null || D != null)))
            switch (_) {
              case "type":
                n = p;
                break;
              case "name":
                a = p;
                break;
              case "checked":
                m = p;
                break;
              case "defaultChecked":
                A = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                r = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(f(137, l));
                break;
              default:
                p !== D && ht(t, l, _, p, u, D);
            }
        }
        Ti(t, c, r, d, m, A, n, a);
        return;
      case "select":
        p = c = r = _ = null;
        for (n in e)
          if (((d = e[n]), e.hasOwnProperty(n) && d != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = d;
              default:
                u.hasOwnProperty(n) || ht(t, l, n, null, u, d);
            }
        for (a in u)
          if (
            ((n = u[a]),
            (d = e[a]),
            u.hasOwnProperty(a) && (n != null || d != null))
          )
            switch (a) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                r = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== d && ht(t, l, a, n, u, d);
            }
        (l = r),
          (e = c),
          (u = p),
          _ != null
            ? nu(t, !!e, _, !1)
            : !!u != !!e &&
              (l != null ? nu(t, !!e, l, !0) : nu(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = _ = null;
        for (r in e)
          if (
            ((a = e[r]),
            e.hasOwnProperty(r) && a != null && !u.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, l, r, null, u, a);
            }
        for (c in u)
          if (
            ((a = u[c]),
            (n = e[c]),
            u.hasOwnProperty(c) && (a != null || n != null))
          )
            switch (c) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                p = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== n && ht(t, l, c, a, u, n);
            }
        dr(t, _, p);
        return;
      case "option":
        for (var q in e)
          if (
            ((_ = e[q]),
            e.hasOwnProperty(q) && _ != null && !u.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ht(t, l, q, null, u, _);
            }
        for (d in u)
          if (
            ((_ = u[d]),
            (p = e[d]),
            u.hasOwnProperty(d) && _ !== p && (_ != null || p != null))
          )
            switch (d) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                ht(t, l, d, _, u, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in e)
          (_ = e[K]),
            e.hasOwnProperty(K) &&
              _ != null &&
              !u.hasOwnProperty(K) &&
              ht(t, l, K, null, u, _);
        for (m in u)
          if (
            ((_ = u[m]),
            (p = e[m]),
            u.hasOwnProperty(m) && _ !== p && (_ != null || p != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(f(137, l));
                break;
              default:
                ht(t, l, m, _, u, p);
            }
        return;
      default:
        if (pi(l)) {
          for (var Ot in e)
            (_ = e[Ot]),
              e.hasOwnProperty(Ot) &&
                _ !== void 0 &&
                !u.hasOwnProperty(Ot) &&
                ff(t, l, Ot, void 0, u, _);
          for (A in u)
            (_ = u[A]),
              (p = e[A]),
              !u.hasOwnProperty(A) ||
                _ === p ||
                (_ === void 0 && p === void 0) ||
                ff(t, l, A, _, u, p);
          return;
        }
    }
    for (var g in e)
      (_ = e[g]),
        e.hasOwnProperty(g) &&
          _ != null &&
          !u.hasOwnProperty(g) &&
          ht(t, l, g, null, u, _);
    for (D in u)
      (_ = u[D]),
        (p = e[D]),
        !u.hasOwnProperty(D) ||
          _ === p ||
          (_ == null && p == null) ||
          ht(t, l, D, _, u, p);
  }
  var rf = null,
    sf = null;
  function wn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function cd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function of(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var df = null;
  function oh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === df
        ? !1
        : ((df = t), !0)
      : ((df = null), !1);
  }
  var rd = typeof setTimeout == "function" ? setTimeout : void 0,
    dh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    sd = typeof Promise == "function" ? Promise : void 0,
    yh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof sd < "u"
          ? function (t) {
              return sd.resolve(null).then(t).catch(hh);
            }
          : rd;
  function hh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function yf(t, l) {
    var e = l,
      u = 0;
    do {
      var a = e.nextSibling;
      if ((t.removeChild(e), a && a.nodeType === 8))
        if (((e = a.data), e === "/$")) {
          if (u === 0) {
            t.removeChild(a), xa(l);
            return;
          }
          u--;
        } else (e !== "$" && e !== "$?" && e !== "$!") || u++;
      e = a;
    } while (e);
    xa(l);
  }
  function hf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hf(e), _i(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function vh(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (u) {
        if (!t[Qu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== a.rel ||
                t.getAttribute("href") !== (a.href == null ? null : a.href) ||
                t.getAttribute("crossorigin") !==
                  (a.crossOrigin == null ? null : a.crossOrigin) ||
                t.getAttribute("title") !== (a.title == null ? null : a.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (a.src == null ? null : a.src) ||
                  t.getAttribute("type") !== (a.type == null ? null : a.type) ||
                  t.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Ol(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function mh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ol(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ol(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
        )
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  function od(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function dd(t, l, e) {
    switch (((l = wn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  var Tl = new Map(),
    yd = new Set();
  function Vn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var te = x.d;
  x.d = { f: gh, r: Sh, D: bh, C: _h, L: Th, m: Eh, X: Ah, S: ph, M: zh };
  function gh() {
    var t = te.f(),
      l = Bn();
    return t || l;
  }
  function Sh(t) {
    var l = eu(t);
    l !== null && l.tag === 5 && l.type === "form" ? Gs(l) : te.r(t);
  }
  var xu = typeof document > "u" ? null : document;
  function hd(t, l, e) {
    var u = xu;
    if (u && typeof l == "string" && l) {
      var a = ol(l);
      (a = 'link[rel="' + t + '"][href="' + a + '"]'),
        typeof e == "string" && (a += '[crossorigin="' + e + '"]'),
        yd.has(a) ||
          (yd.add(a),
          (t = { rel: t, crossOrigin: e, href: l }),
          u.querySelector(a) === null &&
            ((l = u.createElement("link")),
            Zt(l, "link", t),
            Bt(l),
            u.head.appendChild(l)));
    }
  }
  function bh(t) {
    te.D(t), hd("dns-prefetch", t, null);
  }
  function _h(t, l) {
    te.C(t, l), hd("preconnect", t, l);
  }
  function Th(t, l, e) {
    te.L(t, l, e);
    var u = xu;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + ol(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((a += '[imagesrcset="' + ol(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (a += '[imagesizes="' + ol(e.imageSizes) + '"]'))
        : (a += '[href="' + ol(t) + '"]');
      var n = a;
      switch (l) {
        case "style":
          n = Cu(t);
          break;
        case "script":
          n = qu(t);
      }
      Tl.has(n) ||
        ((t = it(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e,
        )),
        Tl.set(n, t),
        u.querySelector(a) !== null ||
          (l === "style" && u.querySelector(Oa(n))) ||
          (l === "script" && u.querySelector(Da(n))) ||
          ((l = u.createElement("link")),
          Zt(l, "link", t),
          Bt(l),
          u.head.appendChild(l)));
    }
  }
  function Eh(t, l) {
    te.m(t, l);
    var e = xu;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script",
        a =
          'link[rel="modulepreload"][as="' + ol(u) + '"][href="' + ol(t) + '"]',
        n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = qu(t);
      }
      if (
        !Tl.has(n) &&
        ((t = it({ rel: "modulepreload", href: t }, l)),
        Tl.set(n, t),
        e.querySelector(a) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Da(n))) return;
        }
        (u = e.createElement("link")),
          Zt(u, "link", t),
          Bt(u),
          e.head.appendChild(u);
      }
    }
  }
  function ph(t, l, e) {
    te.S(t, l, e);
    var u = xu;
    if (u && t) {
      var a = uu(u).hoistableStyles,
        n = Cu(t);
      l = l || "default";
      var c = a.get(n);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = u.querySelector(Oa(n)))) r.loading = 5;
        else {
          (t = it({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = Tl.get(n)) && vf(t, e);
          var d = (c = u.createElement("link"));
          Bt(d),
            Zt(d, "link", t),
            (d._p = new Promise(function (m, A) {
              (d.onload = m), (d.onerror = A);
            })),
            d.addEventListener("load", function () {
              r.loading |= 1;
            }),
            d.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Ln(c, l, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: r }),
          a.set(n, c);
      }
    }
  }
  function Ah(t, l) {
    te.X(t, l);
    var e = xu;
    if (e && t) {
      var u = uu(e).hoistableScripts,
        a = qu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Da(a))),
        n ||
          ((t = it({ src: t, async: !0 }, l)),
          (l = Tl.get(a)) && mf(t, l),
          (n = e.createElement("script")),
          Bt(n),
          Zt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function zh(t, l) {
    te.M(t, l);
    var e = xu;
    if (e && t) {
      var u = uu(e).hoistableScripts,
        a = qu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Da(a))),
        n ||
          ((t = it({ src: t, async: !0, type: "module" }, l)),
          (l = Tl.get(a)) && mf(t, l),
          (n = e.createElement("script")),
          Bt(n),
          Zt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function vd(t, l, e, u) {
    var a = (a = ue.current) ? Vn(a) : null;
    if (!a) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Cu(e.href)),
            (e = uu(a).hoistableStyles),
            (u = e.get(l)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Cu(e.href);
          var n = uu(a).hoistableStyles,
            c = n.get(t);
          if (
            (c ||
              ((a = a.ownerDocument || a),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, c),
              (n = a.querySelector(Oa(t))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Tl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                Tl.set(t, e),
                n || Oh(a, t, e, c.state))),
            l && u === null)
          )
            throw Error(f(528, ""));
          return c;
        }
        if (l && u !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = qu(e)),
              (e = uu(a).hoistableScripts),
              (u = e.get(l)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Cu(t) {
    return 'href="' + ol(t) + '"';
  }
  function Oa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function md(t) {
    return it({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Oh(t, l, e, u) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (u.loading = 1)
      : ((l = t.createElement("link")),
        (u.preload = l),
        l.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Zt(l, "link", e),
        Bt(l),
        t.head.appendChild(l));
  }
  function qu(t) {
    return '[src="' + ol(t) + '"]';
  }
  function Da(t) {
    return "script[async]" + t;
  }
  function gd(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var u = t.querySelector('style[data-href~="' + ol(e.href) + '"]');
          if (u) return (l.instance = u), Bt(u), u;
          var a = it({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (t.ownerDocument || t).createElement("style")),
            Bt(u),
            Zt(u, "style", a),
            Ln(u, e.precedence, t),
            (l.instance = u)
          );
        case "stylesheet":
          a = Cu(e.href);
          var n = t.querySelector(Oa(a));
          if (n) return (l.state.loading |= 4), (l.instance = n), Bt(n), n;
          (u = md(e)),
            (a = Tl.get(a)) && vf(u, a),
            (n = (t.ownerDocument || t).createElement("link")),
            Bt(n);
          var c = n;
          return (
            (c._p = new Promise(function (r, d) {
              (c.onload = r), (c.onerror = d);
            })),
            Zt(n, "link", u),
            (l.state.loading |= 4),
            Ln(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = qu(e.src)),
            (a = t.querySelector(Da(n)))
              ? ((l.instance = a), Bt(a), a)
              : ((u = e),
                (a = Tl.get(n)) && ((u = it({}, e)), mf(u, a)),
                (t = t.ownerDocument || t),
                (a = t.createElement("script")),
                Bt(a),
                Zt(a, "link", u),
                t.head.appendChild(a),
                (l.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((u = l.instance), (l.state.loading |= 4), Ln(u, e.precedence, t));
    return l.instance;
  }
  function Ln(t, l, e) {
    for (
      var u = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = u.length ? u[u.length - 1] : null,
        n = a,
        c = 0;
      c < u.length;
      c++
    ) {
      var r = u[c];
      if (r.dataset.precedence === l) n = r;
      else if (n !== a) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function vf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function mf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Kn = null;
  function Sd(t, l, e) {
    if (Kn === null) {
      var u = new Map(),
        a = (Kn = new Map());
      a.set(e, u);
    } else (a = Kn), (u = a.get(e)), u || ((u = new Map()), a.set(e, u));
    if (u.has(t)) return u;
    for (
      u.set(t, null), e = e.getElementsByTagName(t), a = 0;
      a < e.length;
      a++
    ) {
      var n = e[a];
      if (
        !(
          n[Qu] ||
          n[Vt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var r = u.get(c);
        r ? r.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function bd(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null,
      );
  }
  function Dh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled), typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _d(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ma = null;
  function Mh() {}
  function Rh(t, l, e) {
    if (Ma === null) throw Error(f(475));
    var u = Ma;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = Cu(e.href),
          n = t.querySelector(Oa(a));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (u.count++, (u = Jn.bind(u)), t.then(u, u)),
            (l.state.loading |= 4),
            (l.instance = n),
            Bt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = md(e)),
          (a = Tl.get(a)) && vf(e, a),
          (n = n.createElement("link")),
          Bt(n);
        var c = n;
        (c._p = new Promise(function (r, d) {
          (c.onload = r), (c.onerror = d);
        })),
          Zt(n, "link", e),
          (l.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (u.count++,
          (l = Jn.bind(u)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function Uh() {
    if (Ma === null) throw Error(f(475));
    var t = Ma;
    return (
      t.stylesheets && t.count === 0 && gf(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && gf(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Jn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var kn = null;
  function gf(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (kn = new Map()),
        l.forEach(Nh, t),
        (kn = null),
        Jn.call(t));
  }
  function Nh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = kn.get(t);
      if (e) var u = e.get(null);
      else {
        (e = new Map()), kn.set(t, e);
        for (
          var a = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < a.length;
          n++
        ) {
          var c = a[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (e.set(c.dataset.precedence, c), (u = c));
        }
        u && e.set(null, u);
      }
      (a = l.instance),
        (c = a.getAttribute("data-precedence")),
        (n = e.get(c) || u),
        n === u && e.set(null, a),
        e.set(c, a),
        this.count++,
        (u = Jn.bind(this)),
        a.addEventListener("load", u),
        a.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(a, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(a, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var Ra = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: at,
    _currentValue2: at,
    _threadCount: 0,
  };
  function Hh(t, l, e, u, a, n, c, r) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Si(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Si(0)),
      (this.hiddenUpdates = Si(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = a),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function Td(t, l, e, u, a, n, c, r, d, m, A, D) {
    return (
      (t = new Hh(t, l, e, c, r, d, m, D)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = bl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = ki()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: u, isDehydrated: e, cache: l }),
      Mc(n),
      t
    );
  }
  function Ed(t) {
    return t ? ((t = yu), t) : yu;
  }
  function pd(t, l, e, u, a, n) {
    (a = Ed(a)),
      u.context === null ? (u.context = a) : (u.pendingContext = a),
      (u = he(l)),
      (u.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (e = ve(t, u, l)),
      e !== null && (Wt(e, t, l), da(e, t, l));
  }
  function Ad(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function Sf(t, l) {
    Ad(t, l), (t = t.alternate) && Ad(t, l);
  }
  function zd(t) {
    if (t.tag === 13) {
      var l = ce(t, 67108864);
      l !== null && Wt(l, t, 67108864), Sf(t, 67108864);
    }
  }
  var Wn = !0;
  function xh(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = x.p;
    try {
      (x.p = 2), bf(t, l, e, u);
    } finally {
      (x.p = n), (G.T = a);
    }
  }
  function Ch(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = x.p;
    try {
      (x.p = 8), bf(t, l, e, u);
    } finally {
      (x.p = n), (G.T = a);
    }
  }
  function bf(t, l, e, u) {
    if (Wn) {
      var a = _f(u);
      if (a === null) cf(t, l, u, $n, e), Dd(t, u);
      else if (Bh(a, t, l, e, u)) u.stopPropagation();
      else if ((Dd(t, u), l & 4 && -1 < qh.indexOf(t))) {
        for (; a !== null; ) {
          var n = eu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Re(n.pendingLanes);
                  if (c !== 0) {
                    var r = n;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var d = 1 << (31 - el(c));
                      (r.entanglements[1] |= d), (c &= ~d);
                    }
                    ql(n), (pt & 6) === 0 && ((xn = Ul() + 500), pa(0));
                  }
                }
                break;
              case 13:
                (r = ce(n, 2)), r !== null && Wt(r, n, 2), Bn(), Sf(n, 2);
            }
          if (((n = _f(u)), n === null && cf(t, l, u, $n, e), n === a)) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else cf(t, l, u, null, e);
    }
  }
  function _f(t) {
    return (t = zi(t)), Tf(t);
  }
  var $n = null;
  function Tf(t) {
    if ((($n = null), (t = Ue(t)), t !== null)) {
      var l = w(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = mt(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return ($n = t), null;
  }
  function Od(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_0()) {
          case Wf:
            return 2;
          case $f:
            return 8;
          case Va:
          case T0:
            return 32;
          case Ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ef = !1,
    Ee = null,
    pe = null,
    Ae = null,
    Ua = new Map(),
    Na = new Map(),
    ze = [],
    qh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Dd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ee = null;
        break;
      case "dragenter":
      case "dragleave":
        pe = null;
        break;
      case "mouseover":
      case "mouseout":
        Ae = null;
        break;
      case "pointerover":
      case "pointerout":
        Ua.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Na.delete(l.pointerId);
    }
  }
  function Ha(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [a],
        }),
        l !== null && ((l = eu(l)), l !== null && zd(l)),
        t)
      : ((t.eventSystemFlags |= u),
        (l = t.targetContainers),
        a !== null && l.indexOf(a) === -1 && l.push(a),
        t);
  }
  function Bh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return (Ee = Ha(Ee, t, l, e, u, a)), !0;
      case "dragenter":
        return (pe = Ha(pe, t, l, e, u, a)), !0;
      case "mouseover":
        return (Ae = Ha(Ae, t, l, e, u, a)), !0;
      case "pointerover":
        var n = a.pointerId;
        return Ua.set(n, Ha(Ua.get(n) || null, t, l, e, u, a)), !0;
      case "gotpointercapture":
        return (
          (n = a.pointerId), Na.set(n, Ha(Na.get(n) || null, t, l, e, u, a)), !0
        );
    }
    return !1;
  }
  function Md(t) {
    var l = Ue(t.target);
    if (l !== null) {
      var e = w(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = mt(e)), l !== null)) {
            (t.blockedOn = l),
              U0(t.priority, function () {
                if (e.tag === 13) {
                  var u = cl(),
                    a = ce(e, u);
                  a !== null && Wt(a, e, u), Sf(e, u);
                }
              });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = _f(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(e.type, e);
        (Ai = u), e.target.dispatchEvent(u), (Ai = null);
      } else return (l = eu(e)), l !== null && zd(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function Rd(t, l, e) {
    Fn(t) && e.delete(l);
  }
  function jh() {
    (Ef = !1),
      Ee !== null && Fn(Ee) && (Ee = null),
      pe !== null && Fn(pe) && (pe = null),
      Ae !== null && Fn(Ae) && (Ae = null),
      Ua.forEach(Rd),
      Na.forEach(Rd);
  }
  function Pn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      Ef ||
        ((Ef = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, jh)));
  }
  var In = null;
  function Ud(t) {
    In !== t &&
      ((In = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        In === t && (In = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            u = t[l + 1],
            a = t[l + 2];
          if (typeof u != "function") {
            if (Tf(u || e) === null) continue;
            break;
          }
          var n = eu(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            sc(n, { pending: !0, data: a, method: e.method, action: u }, u, a));
        }
      }));
  }
  function xa(t) {
    function l(d) {
      return Pn(d, t);
    }
    Ee !== null && Pn(Ee, t),
      pe !== null && Pn(pe, t),
      Ae !== null && Pn(Ae, t),
      Ua.forEach(l),
      Na.forEach(l);
    for (var e = 0; e < ze.length; e++) {
      var u = ze[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); )
      Md(e), e.blockedOn === null && ze.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (u = 0; u < e.length; u += 3) {
        var a = e[u],
          n = e[u + 1],
          c = a[Pt] || null;
        if (typeof n == "function") c || Ud(e);
        else if (c) {
          var r = null;
          if (n && n.hasAttribute("formAction")) {
            if (((a = n), (c = n[Pt] || null))) r = c.formAction;
            else if (Tf(a) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? (e[u + 1] = r) : (e.splice(u, 3), (u -= 3)),
            Ud(e);
        }
      }
  }
  function pf(t) {
    this._internalRoot = t;
  }
  (ti.prototype.render = pf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(f(409));
      var e = l.current,
        u = cl();
      pd(e, u, t, l, null, null);
    }),
    (ti.prototype.unmount = pf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          t.tag === 0 && Uu(),
            pd(t.current, 2, null, t, null, null),
            Bn(),
            (l[lu] = null);
        }
      });
  function ti(t) {
    this._internalRoot = t;
  }
  ti.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = ur();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < ze.length && l !== 0 && l < ze[e].priority; e++);
      ze.splice(e, 0, t), e === 0 && Md(t);
    }
  };
  var Nd = s.version;
  if (Nd !== "19.0.0") throw Error(f(527, Nd, "19.0.0"));
  x.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = R(l)),
      (t = t !== null ? Z(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Yh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Ue,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!li.isDisabled && li.supportsFiber)
      try {
        (Yu = li.inject(Yh)), (ll = li);
      } catch {}
  }
  return (
    (qa.createRoot = function (t, l) {
      if (!v(t)) throw Error(f(299));
      var e = !1,
        u = "",
        a = Js,
        n = ks,
        c = Ws,
        r = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (a = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (r = l.unstable_transitionCallbacks)),
        (l = Td(t, 1, !1, null, null, e, u, a, n, c, r, null)),
        (t[lu] = l.current),
        nf(t.nodeType === 8 ? t.parentNode : t),
        new pf(l)
      );
    }),
    (qa.hydrateRoot = function (t, l, e) {
      if (!v(t)) throw Error(f(299));
      var u = !1,
        a = "",
        n = Js,
        c = ks,
        r = Ws,
        d = null,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (u = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (r = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (m = e.formState)),
        (l = Td(t, 1, !0, l, e ?? null, u, a, n, c, r, d, m)),
        (l.context = Ed(null)),
        (e = l.current),
        (u = cl()),
        (a = he(u)),
        (a.callback = null),
        ve(e, a, u),
        (l.current.lanes = u),
        Xu(l, u),
        ql(l),
        (t[lu] = l.current),
        nf(t),
        new ti(l)
      );
    }),
    (qa.version = "19.0.0"),
    qa
  );
}
var Qd;
function kh() {
  if (Qd) return Of.exports;
  Qd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Of.exports = Jh()), Of.exports;
}
var Wh = kh(),
  Uf = { exports: {} },
  Nf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function $h() {
  if (Zd) return Nf;
  Zd = 1;
  var i = ri();
  function s(T, b) {
    return (T === b && (T !== 0 || 1 / T === 1 / b)) || (T !== T && b !== b);
  }
  var o = typeof Object.is == "function" ? Object.is : s,
    f = i.useSyncExternalStore,
    v = i.useRef,
    E = i.useEffect,
    z = i.useMemo,
    M = i.useDebugValue;
  return (
    (Nf.useSyncExternalStoreWithSelector = function (T, b, U, H, Y) {
      var V = v(null);
      if (V.current === null) {
        var F = { hasValue: !1, value: null };
        V.current = F;
      } else F = V.current;
      V = z(
        function () {
          function L(B) {
            if (!dt) {
              if (
                ((dt = !0), (rt = B), (B = H(B)), Y !== void 0 && F.hasValue)
              ) {
                var st = F.value;
                if (Y(st, B)) return (J = st);
              }
              return (J = B);
            }
            if (((st = J), o(rt, B))) return st;
            var Dt = H(B);
            return Y !== void 0 && Y(st, Dt)
              ? ((rt = B), st)
              : ((rt = B), (J = Dt));
          }
          var dt = !1,
            rt,
            J,
            et = U === void 0 ? null : U;
          return [
            function () {
              return L(b());
            },
            et === null
              ? void 0
              : function () {
                  return L(et());
                },
          ];
        },
        [b, U, H, Y],
      );
      var bt = f(T, V[0], V[1]);
      return (
        E(
          function () {
            (F.hasValue = !0), (F.value = bt);
          },
          [bt],
        ),
        M(bt),
        bt
      );
    }),
    Nf
  );
}
var wd;
function Fh() {
  return wd || ((wd = 1), (Uf.exports = $h())), Uf.exports;
}
var Ph = Fh();
function Ih(i) {
  i();
}
function tv() {
  let i = null,
    s = null;
  return {
    clear() {
      (i = null), (s = null);
    },
    notify() {
      Ih(() => {
        let o = i;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let f = i;
      for (; f; ) o.push(f), (f = f.next);
      return o;
    },
    subscribe(o) {
      let f = !0;
      const v = (s = { callback: o, next: null, prev: s });
      return (
        v.prev ? (v.prev.next = v) : (i = v),
        function () {
          !f ||
            i === null ||
            ((f = !1),
            v.next ? (v.next.prev = v.prev) : (s = v.prev),
            v.prev ? (v.prev.next = v.next) : (i = v.next));
        }
      );
    },
  };
}
var Vd = { notify() {}, get: () => [] };
function lv(i, s) {
  let o,
    f = Vd,
    v = 0,
    E = !1;
  function z(bt) {
    U();
    const L = f.subscribe(bt);
    let dt = !1;
    return () => {
      dt || ((dt = !0), L(), H());
    };
  }
  function M() {
    f.notify();
  }
  function T() {
    F.onStateChange && F.onStateChange();
  }
  function b() {
    return E;
  }
  function U() {
    v++, o || ((o = i.subscribe(T)), (f = tv()));
  }
  function H() {
    v--, o && v === 0 && (o(), (o = void 0), f.clear(), (f = Vd));
  }
  function Y() {
    E || ((E = !0), U());
  }
  function V() {
    E && ((E = !1), H());
  }
  const F = {
    addNestedSub: z,
    notifyNestedSubs: M,
    handleChangeWrapper: T,
    isSubscribed: b,
    trySubscribe: Y,
    tryUnsubscribe: V,
    getListeners: () => f,
  };
  return F;
}
var ev = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  uv = ev(),
  av = () => typeof navigator < "u" && navigator.product === "ReactNative",
  nv = av(),
  iv = () => (uv || nv ? xt.useLayoutEffect : xt.useEffect),
  cv = iv(),
  Hf = Symbol.for("react-redux-context"),
  xf = typeof globalThis < "u" ? globalThis : {};
function fv() {
  if (!xt.createContext) return {};
  const i = xf[Hf] ?? (xf[Hf] = new Map());
  let s = i.get(xt.createContext);
  return s || ((s = xt.createContext(null)), i.set(xt.createContext, s)), s;
}
var Me = fv();
function rv(i) {
  const { children: s, context: o, serverState: f, store: v } = i,
    E = xt.useMemo(() => {
      const T = lv(v);
      return {
        store: v,
        subscription: T,
        getServerState: f ? () => f : void 0,
      };
    }, [v, f]),
    z = xt.useMemo(() => v.getState(), [v]);
  cv(() => {
    const { subscription: T } = E;
    return (
      (T.onStateChange = T.notifyNestedSubs),
      T.trySubscribe(),
      z !== v.getState() && T.notifyNestedSubs(),
      () => {
        T.tryUnsubscribe(), (T.onStateChange = void 0);
      }
    );
  }, [E, z]);
  const M = o || Me;
  return xt.createElement(M.Provider, { value: E }, s);
}
var sv = rv;
function Lf(i = Me) {
  return function () {
    return xt.useContext(i);
  };
}
var e0 = Lf();
function u0(i = Me) {
  const s = i === Me ? e0 : Lf(i),
    o = () => {
      const { store: f } = s();
      return f;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var ov = u0();
function dv(i = Me) {
  const s = i === Me ? ov : u0(i),
    o = () => s().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var Xa = dv(),
  yv = (i, s) => i === s;
function hv(i = Me) {
  const s = i === Me ? e0 : Lf(i),
    o = (f, v = {}) => {
      const { equalityFn: E = yv } =
          typeof v == "function" ? { equalityFn: v } : v,
        z = s(),
        { store: M, subscription: T, getServerState: b } = z;
      xt.useRef(!0);
      const U = xt.useCallback(
          {
            [f.name](Y) {
              return f(Y);
            },
          }[f.name],
          [f],
        ),
        H = Ph.useSyncExternalStoreWithSelector(
          T.addNestedSub,
          M.getState,
          b || M.getState,
          U,
          E,
        );
      return xt.useDebugValue(H), H;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var ja = hv();
function wt(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var vv = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Ld = vv,
  Cf = () => Math.random().toString(36).substring(7).split("").join("."),
  mv = {
    INIT: `@@redux/INIT${Cf()}`,
    REPLACE: `@@redux/REPLACE${Cf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Cf()}`,
  },
  ai = mv;
function Kf(i) {
  if (typeof i != "object" || i === null) return !1;
  let s = i;
  for (; Object.getPrototypeOf(s) !== null; ) s = Object.getPrototypeOf(s);
  return Object.getPrototypeOf(i) === s || Object.getPrototypeOf(i) === null;
}
function a0(i, s, o) {
  if (typeof i != "function") throw new Error(wt(2));
  if (
    (typeof s == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(wt(0));
  if (
    (typeof s == "function" && typeof o > "u" && ((o = s), (s = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(wt(1));
    return o(a0)(i, s);
  }
  let f = i,
    v = s,
    E = new Map(),
    z = E,
    M = 0,
    T = !1;
  function b() {
    z === E &&
      ((z = new Map()),
      E.forEach((L, dt) => {
        z.set(dt, L);
      }));
  }
  function U() {
    if (T) throw new Error(wt(3));
    return v;
  }
  function H(L) {
    if (typeof L != "function") throw new Error(wt(4));
    if (T) throw new Error(wt(5));
    let dt = !0;
    b();
    const rt = M++;
    return (
      z.set(rt, L),
      function () {
        if (dt) {
          if (T) throw new Error(wt(6));
          (dt = !1), b(), z.delete(rt), (E = null);
        }
      }
    );
  }
  function Y(L) {
    if (!Kf(L)) throw new Error(wt(7));
    if (typeof L.type > "u") throw new Error(wt(8));
    if (typeof L.type != "string") throw new Error(wt(17));
    if (T) throw new Error(wt(9));
    try {
      (T = !0), (v = f(v, L));
    } finally {
      T = !1;
    }
    return (
      (E = z).forEach((rt) => {
        rt();
      }),
      L
    );
  }
  function V(L) {
    if (typeof L != "function") throw new Error(wt(10));
    (f = L), Y({ type: ai.REPLACE });
  }
  function F() {
    const L = H;
    return {
      subscribe(dt) {
        if (typeof dt != "object" || dt === null) throw new Error(wt(11));
        function rt() {
          const et = dt;
          et.next && et.next(U());
        }
        return rt(), { unsubscribe: L(rt) };
      },
      [Ld]() {
        return this;
      },
    };
  }
  return (
    Y({ type: ai.INIT }),
    { dispatch: Y, subscribe: H, getState: U, replaceReducer: V, [Ld]: F }
  );
}
function gv(i) {
  Object.keys(i).forEach((s) => {
    const o = i[s];
    if (typeof o(void 0, { type: ai.INIT }) > "u") throw new Error(wt(12));
    if (typeof o(void 0, { type: ai.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(wt(13));
  });
}
function Sv(i) {
  const s = Object.keys(i),
    o = {};
  for (let E = 0; E < s.length; E++) {
    const z = s[E];
    typeof i[z] == "function" && (o[z] = i[z]);
  }
  const f = Object.keys(o);
  let v;
  try {
    gv(o);
  } catch (E) {
    v = E;
  }
  return function (z = {}, M) {
    if (v) throw v;
    let T = !1;
    const b = {};
    for (let U = 0; U < f.length; U++) {
      const H = f[U],
        Y = o[H],
        V = z[H],
        F = Y(V, M);
      if (typeof F > "u") throw (M && M.type, new Error(wt(14)));
      (b[H] = F), (T = T || F !== V);
    }
    return (T = T || f.length !== Object.keys(z).length), T ? b : z;
  };
}
function ni(...i) {
  return i.length === 0
    ? (s) => s
    : i.length === 1
      ? i[0]
      : i.reduce(
          (s, o) =>
            (...f) =>
              s(o(...f)),
        );
}
function bv(...i) {
  return (s) => (o, f) => {
    const v = s(o, f);
    let E = () => {
      throw new Error(wt(15));
    };
    const z = { getState: v.getState, dispatch: (T, ...b) => E(T, ...b) },
      M = i.map((T) => T(z));
    return (E = ni(...M)(v.dispatch)), { ...v, dispatch: E };
  };
}
function _v(i) {
  return Kf(i) && "type" in i && typeof i.type == "string";
}
var n0 = Symbol.for("immer-nothing"),
  Kd = Symbol.for("immer-draftable"),
  fl = Symbol.for("immer-state");
function Dl(i, ...s) {
  throw new Error(
    `[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Bu = Object.getPrototypeOf;
function Pe(i) {
  return !!i && !!i[fl];
}
function ee(i) {
  var s;
  return i
    ? i0(i) ||
        Array.isArray(i) ||
        !!i[Kd] ||
        !!((s = i.constructor) != null && s[Kd]) ||
        oi(i) ||
        di(i)
    : !1;
}
var Tv = Object.prototype.constructor.toString();
function i0(i) {
  if (!i || typeof i != "object") return !1;
  const s = Bu(i);
  if (s === null) return !0;
  const o = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === Tv;
}
function ii(i, s) {
  si(i) === 0
    ? Reflect.ownKeys(i).forEach((o) => {
        s(o, i[o], i);
      })
    : i.forEach((o, f) => s(f, o, i));
}
function si(i) {
  const s = i[fl];
  return s ? s.type_ : Array.isArray(i) ? 1 : oi(i) ? 2 : di(i) ? 3 : 0;
}
function Gf(i, s) {
  return si(i) === 2 ? i.has(s) : Object.prototype.hasOwnProperty.call(i, s);
}
function c0(i, s, o) {
  const f = si(i);
  f === 2 ? i.set(s, o) : f === 3 ? i.add(o) : (i[s] = o);
}
function Ev(i, s) {
  return i === s ? i !== 0 || 1 / i === 1 / s : i !== i && s !== s;
}
function oi(i) {
  return i instanceof Map;
}
function di(i) {
  return i instanceof Set;
}
function Fe(i) {
  return i.copy_ || i.base_;
}
function Xf(i, s) {
  if (oi(i)) return new Map(i);
  if (di(i)) return new Set(i);
  if (Array.isArray(i)) return Array.prototype.slice.call(i);
  const o = i0(i);
  if (s === !0 || (s === "class_only" && !o)) {
    const f = Object.getOwnPropertyDescriptors(i);
    delete f[fl];
    let v = Reflect.ownKeys(f);
    for (let E = 0; E < v.length; E++) {
      const z = v[E],
        M = f[z];
      M.writable === !1 && ((M.writable = !0), (M.configurable = !0)),
        (M.get || M.set) &&
          (f[z] = {
            configurable: !0,
            writable: !0,
            enumerable: M.enumerable,
            value: i[z],
          });
    }
    return Object.create(Bu(i), f);
  } else {
    const f = Bu(i);
    if (f !== null && o) return { ...i };
    const v = Object.create(f);
    return Object.assign(v, i);
  }
}
function Jf(i, s = !1) {
  return (
    yi(i) ||
      Pe(i) ||
      !ee(i) ||
      (si(i) > 1 && (i.set = i.add = i.clear = i.delete = pv),
      Object.freeze(i),
      s && Object.entries(i).forEach(([o, f]) => Jf(f, !0))),
    i
  );
}
function pv() {
  Dl(2);
}
function yi(i) {
  return Object.isFrozen(i);
}
var Av = {};
function Ie(i) {
  const s = Av[i];
  return s || Dl(0, i), s;
}
var Ya;
function f0() {
  return Ya;
}
function zv(i, s) {
  return {
    drafts_: [],
    parent_: i,
    immer_: s,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Jd(i, s) {
  s &&
    (Ie("Patches"),
    (i.patches_ = []),
    (i.inversePatches_ = []),
    (i.patchListener_ = s));
}
function Qf(i) {
  Zf(i), i.drafts_.forEach(Ov), (i.drafts_ = null);
}
function Zf(i) {
  i === Ya && (Ya = i.parent_);
}
function kd(i) {
  return (Ya = zv(Ya, i));
}
function Ov(i) {
  const s = i[fl];
  s.type_ === 0 || s.type_ === 1 ? s.revoke_() : (s.revoked_ = !0);
}
function Wd(i, s) {
  s.unfinalizedDrafts_ = s.drafts_.length;
  const o = s.drafts_[0];
  return (
    i !== void 0 && i !== o
      ? (o[fl].modified_ && (Qf(s), Dl(4)),
        ee(i) && ((i = ci(s, i)), s.parent_ || fi(s, i)),
        s.patches_ &&
          Ie("Patches").generateReplacementPatches_(
            o[fl].base_,
            i,
            s.patches_,
            s.inversePatches_,
          ))
      : (i = ci(s, o, [])),
    Qf(s),
    s.patches_ && s.patchListener_(s.patches_, s.inversePatches_),
    i !== n0 ? i : void 0
  );
}
function ci(i, s, o) {
  if (yi(s)) return s;
  const f = s[fl];
  if (!f) return ii(s, (v, E) => $d(i, f, s, v, E, o)), s;
  if (f.scope_ !== i) return s;
  if (!f.modified_) return fi(i, f.base_, !0), f.base_;
  if (!f.finalized_) {
    (f.finalized_ = !0), f.scope_.unfinalizedDrafts_--;
    const v = f.copy_;
    let E = v,
      z = !1;
    f.type_ === 3 && ((E = new Set(v)), v.clear(), (z = !0)),
      ii(E, (M, T) => $d(i, f, v, M, T, o, z)),
      fi(i, v, !1),
      o &&
        i.patches_ &&
        Ie("Patches").generatePatches_(f, o, i.patches_, i.inversePatches_);
  }
  return f.copy_;
}
function $d(i, s, o, f, v, E, z) {
  if (Pe(v)) {
    const M =
        E && s && s.type_ !== 3 && !Gf(s.assigned_, f) ? E.concat(f) : void 0,
      T = ci(i, v, M);
    if ((c0(o, f, T), Pe(T))) i.canAutoFreeze_ = !1;
    else return;
  } else z && o.add(v);
  if (ee(v) && !yi(v)) {
    if (!i.immer_.autoFreeze_ && i.unfinalizedDrafts_ < 1) return;
    ci(i, v),
      (!s || !s.scope_.parent_) &&
        typeof f != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, f) &&
        fi(i, v);
  }
}
function fi(i, s, o = !1) {
  !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && Jf(s, o);
}
function Dv(i, s) {
  const o = Array.isArray(i),
    f = {
      type_: o ? 1 : 0,
      scope_: s ? s.scope_ : f0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: s,
      base_: i,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let v = f,
    E = kf;
  o && ((v = [f]), (E = Ga));
  const { revoke: z, proxy: M } = Proxy.revocable(v, E);
  return (f.draft_ = M), (f.revoke_ = z), M;
}
var kf = {
    get(i, s) {
      if (s === fl) return i;
      const o = Fe(i);
      if (!Gf(o, s)) return Mv(i, o, s);
      const f = o[s];
      return i.finalized_ || !ee(f)
        ? f
        : f === qf(i.base_, s)
          ? (Bf(i), (i.copy_[s] = Vf(f, i)))
          : f;
    },
    has(i, s) {
      return s in Fe(i);
    },
    ownKeys(i) {
      return Reflect.ownKeys(Fe(i));
    },
    set(i, s, o) {
      const f = r0(Fe(i), s);
      if (f != null && f.set) return f.set.call(i.draft_, o), !0;
      if (!i.modified_) {
        const v = qf(Fe(i), s),
          E = v == null ? void 0 : v[fl];
        if (E && E.base_ === o)
          return (i.copy_[s] = o), (i.assigned_[s] = !1), !0;
        if (Ev(o, v) && (o !== void 0 || Gf(i.base_, s))) return !0;
        Bf(i), wf(i);
      }
      return (
        (i.copy_[s] === o && (o !== void 0 || s in i.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(i.copy_[s])) ||
          ((i.copy_[s] = o), (i.assigned_[s] = !0)),
        !0
      );
    },
    deleteProperty(i, s) {
      return (
        qf(i.base_, s) !== void 0 || s in i.base_
          ? ((i.assigned_[s] = !1), Bf(i), wf(i))
          : delete i.assigned_[s],
        i.copy_ && delete i.copy_[s],
        !0
      );
    },
    getOwnPropertyDescriptor(i, s) {
      const o = Fe(i),
        f = Reflect.getOwnPropertyDescriptor(o, s);
      return (
        f && {
          writable: !0,
          configurable: i.type_ !== 1 || s !== "length",
          enumerable: f.enumerable,
          value: o[s],
        }
      );
    },
    defineProperty() {
      Dl(11);
    },
    getPrototypeOf(i) {
      return Bu(i.base_);
    },
    setPrototypeOf() {
      Dl(12);
    },
  },
  Ga = {};
ii(kf, (i, s) => {
  Ga[i] = function () {
    return (arguments[0] = arguments[0][0]), s.apply(this, arguments);
  };
});
Ga.deleteProperty = function (i, s) {
  return Ga.set.call(this, i, s, void 0);
};
Ga.set = function (i, s, o) {
  return kf.set.call(this, i[0], s, o, i[0]);
};
function qf(i, s) {
  const o = i[fl];
  return (o ? Fe(o) : i)[s];
}
function Mv(i, s, o) {
  var v;
  const f = r0(s, o);
  return f
    ? "value" in f
      ? f.value
      : (v = f.get) == null
        ? void 0
        : v.call(i.draft_)
    : void 0;
}
function r0(i, s) {
  if (!(s in i)) return;
  let o = Bu(i);
  for (; o; ) {
    const f = Object.getOwnPropertyDescriptor(o, s);
    if (f) return f;
    o = Bu(o);
  }
}
function wf(i) {
  i.modified_ || ((i.modified_ = !0), i.parent_ && wf(i.parent_));
}
function Bf(i) {
  i.copy_ || (i.copy_ = Xf(i.base_, i.scope_.immer_.useStrictShallowCopy_));
}
var Rv = class {
  constructor(i) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (s, o, f) => {
        if (typeof s == "function" && typeof o != "function") {
          const E = o;
          o = s;
          const z = this;
          return function (T = E, ...b) {
            return z.produce(T, (U) => o.call(this, U, ...b));
          };
        }
        typeof o != "function" && Dl(6),
          f !== void 0 && typeof f != "function" && Dl(7);
        let v;
        if (ee(s)) {
          const E = kd(this),
            z = Vf(s, void 0);
          let M = !0;
          try {
            (v = o(z)), (M = !1);
          } finally {
            M ? Qf(E) : Zf(E);
          }
          return Jd(E, f), Wd(v, E);
        } else if (!s || typeof s != "object") {
          if (
            ((v = o(s)),
            v === void 0 && (v = s),
            v === n0 && (v = void 0),
            this.autoFreeze_ && Jf(v, !0),
            f)
          ) {
            const E = [],
              z = [];
            Ie("Patches").generateReplacementPatches_(s, v, E, z), f(E, z);
          }
          return v;
        } else Dl(1, s);
      }),
      (this.produceWithPatches = (s, o) => {
        if (typeof s == "function")
          return (z, ...M) => this.produceWithPatches(z, (T) => s(T, ...M));
        let f, v;
        return [
          this.produce(s, o, (z, M) => {
            (f = z), (v = M);
          }),
          f,
          v,
        ];
      }),
      typeof (i == null ? void 0 : i.autoFreeze) == "boolean" &&
        this.setAutoFreeze(i.autoFreeze),
      typeof (i == null ? void 0 : i.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(i.useStrictShallowCopy);
  }
  createDraft(i) {
    ee(i) || Dl(8), Pe(i) && (i = Uv(i));
    const s = kd(this),
      o = Vf(i, void 0);
    return (o[fl].isManual_ = !0), Zf(s), o;
  }
  finishDraft(i, s) {
    const o = i && i[fl];
    (!o || !o.isManual_) && Dl(9);
    const { scope_: f } = o;
    return Jd(f, s), Wd(void 0, f);
  }
  setAutoFreeze(i) {
    this.autoFreeze_ = i;
  }
  setUseStrictShallowCopy(i) {
    this.useStrictShallowCopy_ = i;
  }
  applyPatches(i, s) {
    let o;
    for (o = s.length - 1; o >= 0; o--) {
      const v = s[o];
      if (v.path.length === 0 && v.op === "replace") {
        i = v.value;
        break;
      }
    }
    o > -1 && (s = s.slice(o + 1));
    const f = Ie("Patches").applyPatches_;
    return Pe(i) ? f(i, s) : this.produce(i, (v) => f(v, s));
  }
};
function Vf(i, s) {
  const o = oi(i)
    ? Ie("MapSet").proxyMap_(i, s)
    : di(i)
      ? Ie("MapSet").proxySet_(i, s)
      : Dv(i, s);
  return (s ? s.scope_ : f0()).drafts_.push(o), o;
}
function Uv(i) {
  return Pe(i) || Dl(10, i), s0(i);
}
function s0(i) {
  if (!ee(i) || yi(i)) return i;
  const s = i[fl];
  let o;
  if (s) {
    if (!s.modified_) return s.base_;
    (s.finalized_ = !0), (o = Xf(i, s.scope_.immer_.useStrictShallowCopy_));
  } else o = Xf(i, !0);
  return (
    ii(o, (f, v) => {
      c0(o, f, s0(v));
    }),
    s && (s.finalized_ = !1),
    o
  );
}
var rl = new Rv(),
  o0 = rl.produce;
rl.produceWithPatches.bind(rl);
rl.setAutoFreeze.bind(rl);
rl.setUseStrictShallowCopy.bind(rl);
rl.applyPatches.bind(rl);
rl.createDraft.bind(rl);
rl.finishDraft.bind(rl);
function d0(i) {
  return ({ dispatch: o, getState: f }) =>
    (v) =>
    (E) =>
      typeof E == "function" ? E(o, f, i) : v(E);
}
var Nv = d0(),
  Hv = d0,
  xv =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ni
              : ni.apply(null, arguments);
        };
function Fd(i, s) {
  function o(...f) {
    if (s) {
      let v = s(...f);
      if (!v) throw new Error(le(0));
      return {
        type: i,
        payload: v.payload,
        ...("meta" in v && { meta: v.meta }),
        ...("error" in v && { error: v.error }),
      };
    }
    return { type: i, payload: f[0] };
  }
  return (
    (o.toString = () => `${i}`),
    (o.type = i),
    (o.match = (f) => _v(f) && f.type === i),
    o
  );
}
var y0 = class Ba extends Array {
  constructor(...s) {
    super(...s), Object.setPrototypeOf(this, Ba.prototype);
  }
  static get [Symbol.species]() {
    return Ba;
  }
  concat(...s) {
    return super.concat.apply(this, s);
  }
  prepend(...s) {
    return s.length === 1 && Array.isArray(s[0])
      ? new Ba(...s[0].concat(this))
      : new Ba(...s.concat(this));
  }
};
function Pd(i) {
  return ee(i) ? o0(i, () => {}) : i;
}
function Id(i, s, o) {
  return i.has(s) ? i.get(s) : i.set(s, o(s)).get(s);
}
function Cv(i) {
  return typeof i == "boolean";
}
var qv = () =>
    function (s) {
      const {
        thunk: o = !0,
        immutableCheck: f = !0,
        serializableCheck: v = !0,
        actionCreatorCheck: E = !0,
      } = s ?? {};
      let z = new y0();
      return o && (Cv(o) ? z.push(Nv) : z.push(Hv(o.extraArgument))), z;
    },
  Bv = "RTK_autoBatch",
  t0 = (i) => (s) => {
    setTimeout(s, i);
  },
  jv =
    (i = { type: "raf" }) =>
    (s) =>
    (...o) => {
      const f = s(...o);
      let v = !0,
        E = !1,
        z = !1;
      const M = new Set(),
        T =
          i.type === "tick"
            ? queueMicrotask
            : i.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : t0(10)
              : i.type === "callback"
                ? i.queueNotification
                : t0(i.timeout),
        b = () => {
          (z = !1), E && ((E = !1), M.forEach((U) => U()));
        };
      return Object.assign({}, f, {
        subscribe(U) {
          const H = () => v && U(),
            Y = f.subscribe(H);
          return (
            M.add(U),
            () => {
              Y(), M.delete(U);
            }
          );
        },
        dispatch(U) {
          var H;
          try {
            return (
              (v = !((H = U == null ? void 0 : U.meta) != null && H[Bv])),
              (E = !v),
              E && (z || ((z = !0), T(b))),
              f.dispatch(U)
            );
          } finally {
            v = !0;
          }
        },
      });
    },
  Yv = (i) =>
    function (o) {
      const { autoBatch: f = !0 } = o ?? {};
      let v = new y0(i);
      return f && v.push(jv(typeof f == "object" ? f : void 0)), v;
    };
function Gv(i) {
  const s = qv(),
    {
      reducer: o = void 0,
      middleware: f,
      devTools: v = !0,
      preloadedState: E = void 0,
      enhancers: z = void 0,
    } = i || {};
  let M;
  if (typeof o == "function") M = o;
  else if (Kf(o)) M = Sv(o);
  else throw new Error(le(1));
  let T;
  typeof f == "function" ? (T = f(s)) : (T = s());
  let b = ni;
  v && (b = xv({ trace: !1, ...(typeof v == "object" && v) }));
  const U = bv(...T),
    H = Yv(U);
  let Y = typeof z == "function" ? z(H) : H();
  const V = b(...Y);
  return a0(M, E, V);
}
function h0(i) {
  const s = {},
    o = [];
  let f;
  const v = {
    addCase(E, z) {
      const M = typeof E == "string" ? E : E.type;
      if (!M) throw new Error(le(28));
      if (M in s) throw new Error(le(29));
      return (s[M] = z), v;
    },
    addMatcher(E, z) {
      return o.push({ matcher: E, reducer: z }), v;
    },
    addDefaultCase(E) {
      return (f = E), v;
    },
  };
  return i(v), [s, o, f];
}
function Xv(i) {
  return typeof i == "function";
}
function Qv(i, s) {
  let [o, f, v] = h0(s),
    E;
  if (Xv(i)) E = () => Pd(i());
  else {
    const M = Pd(i);
    E = () => M;
  }
  function z(M = E(), T) {
    let b = [
      o[T.type],
      ...f.filter(({ matcher: U }) => U(T)).map(({ reducer: U }) => U),
    ];
    return (
      b.filter((U) => !!U).length === 0 && (b = [v]),
      b.reduce((U, H) => {
        if (H)
          if (Pe(U)) {
            const V = H(U, T);
            return V === void 0 ? U : V;
          } else {
            if (ee(U)) return o0(U, (Y) => H(Y, T));
            {
              const Y = H(U, T);
              if (Y === void 0) {
                if (U === null) return U;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return Y;
            }
          }
        return U;
      }, M)
    );
  }
  return (z.getInitialState = E), z;
}
var Zv = Symbol.for("rtk-slice-createasyncthunk");
function wv(i, s) {
  return `${i}/${s}`;
}
function Vv({ creators: i } = {}) {
  var o;
  const s = (o = i == null ? void 0 : i.asyncThunk) == null ? void 0 : o[Zv];
  return function (v) {
    const { name: E, reducerPath: z = E } = v;
    if (!E) throw new Error(le(11));
    const M =
        (typeof v.reducers == "function" ? v.reducers(Kv()) : v.reducers) || {},
      T = Object.keys(M),
      b = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      U = {
        addCase(J, et) {
          const B = typeof J == "string" ? J : J.type;
          if (!B) throw new Error(le(12));
          if (B in b.sliceCaseReducersByType) throw new Error(le(13));
          return (b.sliceCaseReducersByType[B] = et), U;
        },
        addMatcher(J, et) {
          return b.sliceMatchers.push({ matcher: J, reducer: et }), U;
        },
        exposeAction(J, et) {
          return (b.actionCreators[J] = et), U;
        },
        exposeCaseReducer(J, et) {
          return (b.sliceCaseReducersByName[J] = et), U;
        },
      };
    T.forEach((J) => {
      const et = M[J],
        B = {
          reducerName: J,
          type: wv(E, J),
          createNotation: typeof v.reducers == "function",
        };
      kv(et) ? $v(B, et, U, s) : Jv(B, et, U);
    });
    function H() {
      const [J = {}, et = [], B = void 0] =
          typeof v.extraReducers == "function"
            ? h0(v.extraReducers)
            : [v.extraReducers],
        st = { ...J, ...b.sliceCaseReducersByType };
      return Qv(v.initialState, (Dt) => {
        for (let Tt in st) Dt.addCase(Tt, st[Tt]);
        for (let Tt of b.sliceMatchers) Dt.addMatcher(Tt.matcher, Tt.reducer);
        for (let Tt of et) Dt.addMatcher(Tt.matcher, Tt.reducer);
        B && Dt.addDefaultCase(B);
      });
    }
    const Y = (J) => J,
      V = new Map();
    let F;
    function bt(J, et) {
      return F || (F = H()), F(J, et);
    }
    function L() {
      return F || (F = H()), F.getInitialState();
    }
    function dt(J, et = !1) {
      function B(Dt) {
        let Tt = Dt[J];
        return typeof Tt > "u" && et && (Tt = L()), Tt;
      }
      function st(Dt = Y) {
        const Tt = Id(V, et, () => new WeakMap());
        return Id(Tt, Dt, () => {
          const G = {};
          for (const [it, $t] of Object.entries(v.selectors ?? {}))
            G[it] = Lv($t, Dt, L, et);
          return G;
        });
      }
      return {
        reducerPath: J,
        getSelectors: st,
        get selectors() {
          return st(B);
        },
        selectSlice: B,
      };
    }
    const rt = {
      name: E,
      reducer: bt,
      actions: b.actionCreators,
      caseReducers: b.sliceCaseReducersByName,
      getInitialState: L,
      ...dt(z),
      injectInto(J, { reducerPath: et, ...B } = {}) {
        const st = et ?? z;
        return (
          J.inject({ reducerPath: st, reducer: bt }, B),
          { ...rt, ...dt(st, !0) }
        );
      },
    };
    return rt;
  };
}
function Lv(i, s, o, f) {
  function v(E, ...z) {
    let M = s(E);
    return typeof M > "u" && f && (M = o()), i(M, ...z);
  }
  return (v.unwrapped = i), v;
}
var v0 = Vv();
function Kv() {
  function i(s, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: s, ...o };
  }
  return (
    (i.withTypes = () => i),
    {
      reducer(s) {
        return Object.assign(
          {
            [s.name](...o) {
              return s(...o);
            },
          }[s.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(s, o) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: s,
          reducer: o,
        };
      },
      asyncThunk: i,
    }
  );
}
function Jv({ type: i, reducerName: s, createNotation: o }, f, v) {
  let E, z;
  if ("reducer" in f) {
    if (o && !Wv(f)) throw new Error(le(17));
    (E = f.reducer), (z = f.prepare);
  } else E = f;
  v.addCase(i, E)
    .exposeCaseReducer(s, E)
    .exposeAction(s, z ? Fd(i, z) : Fd(i));
}
function kv(i) {
  return i._reducerDefinitionType === "asyncThunk";
}
function Wv(i) {
  return i._reducerDefinitionType === "reducerWithPrepare";
}
function $v({ type: i, reducerName: s }, o, f, v) {
  if (!v) throw new Error(le(18));
  const {
      payloadCreator: E,
      fulfilled: z,
      pending: M,
      rejected: T,
      settled: b,
      options: U,
    } = o,
    H = v(i, E, U);
  f.exposeAction(s, H),
    z && f.addCase(H.fulfilled, z),
    M && f.addCase(H.pending, M),
    T && f.addCase(H.rejected, T),
    b && f.addMatcher(H.settled, b),
    f.exposeCaseReducer(s, {
      fulfilled: z || ei,
      pending: M || ei,
      rejected: T || ei,
      settled: b || ei,
    });
}
function ei() {}
function le(i) {
  return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
const Fv = {
    tasks: [
      {
        id: "1",
        title: "Купить продукты",
        text: "Купить хлеб, молоко и яйца",
        completed: "newTask",
        date: "2025-03-20",
      },
      {
        id: "2",
        title: "Выучить Redux",
        text: "Разобраться с RTK, useSelector и useDispatch",
        completed: "newTask",
        date: "2025-03-15",
      },
      {
        id: "3",
        title: "Позаниматься спортом",
        text: "Сделать зарядку 15 минут",
        completed: "Done",
        date: "2025-03-10",
      },
      {
        id: "4",
        title: "Почитать книгу",
        text: "Прочитать 30 страниц",
        completed: "newTask",
        date: "2025-03-21",
      },
      {
        id: "5",
        title: "Написать статью",
        text: "Подготовить текст для блога",
        completed: "newTask",
        date: "2025-03-22",
      },
      {
        id: "6",
        title: "Посмотреть фильм",
        text: "Выбрать интересный фильм и посмотреть",
        completed: "newTask",
        date: "2025-03-23",
      },
      {
        id: "7",
        title: "Навести порядок",
        text: "Убрать рабочий стол",
        completed: "newTask",
        date: "2025-03-24",
      },
      {
        id: "8",
        title: "Позвонить родителям",
        text: "Поговорить о новостях",
        completed: "newTask",
        date: "2025-03-25",
      },
      {
        id: "9",
        title: "Сделать уборку",
        text: "Пропылесосить и вымыть полы",
        completed: "newTask",
        date: "2025-03-26",
      },
      {
        id: "10",
        title: "Записаться к врачу",
        text: "Проверить расписание и записаться",
        completed: "newTask",
        date: "2025-03-27",
      },
      {
        id: "11",
        title: "Выучить новую технику программирования",
        text: "Разобраться с TypeScript",
        completed: "newTask",
        date: "2025-03-28",
      },
      {
        id: "12",
        title: "Сходить на прогулку",
        text: "Пройти 5 км в парке",
        completed: "newTask",
        date: "2025-03-29",
      },
      {
        id: "13",
        title: "Заплатить счета",
        text: "Оплатить коммунальные услуги",
        completed: "newTask",
        date: "2025-03-30",
      },
      {
        id: "14",
        title: "Приготовить ужин",
        text: "Сделать новое блюдо",
        completed: "newTask",
        date: "2025-03-31",
      },
      {
        id: "15",
        title: "Обновить резюме",
        text: "Добавить новый опыт работы",
        completed: "newTask",
        date: "2025-04-01",
      },
      {
        id: "16",
        title: "Послушать подкаст",
        text: "Выбрать интересный выпуск",
        completed: "newTask",
        date: "2025-04-02",
      },
      {
        id: "17",
        title: "Посетить музей",
        text: "Сходить в художественную галерею",
        completed: "newTask",
        date: "2025-04-03",
      },
      {
        id: "18",
        title: "Выучить иностранное слово",
        text: "Добавить 10 слов в словарь",
        completed: "newTask",
        date: "2025-04-04",
      },
      {
        id: "19",
        title: "Подготовить презентацию",
        text: "Сделать слайды для доклада",
        completed: "newTask",
        date: "2025-04-05",
      },
      {
        id: "20",
        title: "Пройти онлайн-курс",
        text: "Закончить модуль по JavaScript",
        completed: "newTask",
        date: "2025-04-06",
      },
      {
        id: "21",
        title: "Записаться на спорт",
        text: "Выбрать секцию",
        completed: "newTask",
        date: "2025-04-07",
      },
      {
        id: "22",
        title: "Купить подарок",
        text: "Выбрать презент для друга",
        completed: "newTask",
        date: "2025-04-08",
      },
      {
        id: "23",
        title: "Посетить концерт",
        text: "Сходить на живую музыку",
        completed: "newTask",
        date: "2025-04-09",
      },
      {
        id: "24",
        title: "Начать медитировать",
        text: "Выделить 10 минут на медитацию",
        completed: "newTask",
        date: "2025-04-10",
      },
      {
        id: "25",
        title: "Починить велосипед",
        text: "Заменить камеру и смазать цепь",
        completed: "newTask",
        date: "2025-04-11",
      },
      {
        id: "26",
        title: "Разобраться с финансами",
        text: "Проанализировать бюджет",
        completed: "newTask",
        date: "2025-04-12",
      },
      {
        id: "27",
        title: "Организовать поездку",
        text: "Выбрать маршрут и даты",
        completed: "newTask",
        date: "2025-04-13",
      },
      {
        id: "28",
        title: "Написать другу",
        text: "Отправить сообщение или письмо",
        completed: "newTask",
        date: "2025-04-14",
      },
      {
        id: "29",
        title: "Прокачать навык",
        text: "Упражняться в решении задач",
        completed: "newTask",
        date: "2025-04-15",
      },
      {
        id: "30",
        title: "Сделать комплимент",
        text: "Сказать что-то приятное человеку",
        completed: "newTask",
        date: "2025-04-16",
      },
      {
        id: "31",
        title: "Попробовать йогу",
        text: "Сделать несколько упражнений",
        completed: "newTask",
        date: "2025-04-17",
      },
      {
        id: "32",
        title: "Нарисовать картину",
        text: "Использовать акварель или карандаш",
        completed: "newTask",
        date: "2025-04-18",
      },
      {
        id: "33",
        title: "Подписаться на интересный канал",
        text: "Найти что-то полезное",
        completed: "newTask",
        date: "2025-04-19",
      },
      {
        id: "34",
        title: "Посетить новую кофейню",
        text: "Попробовать необычный кофе",
        completed: "newTask",
        date: "2025-04-20",
      },
      {
        id: "35",
        title: "Выучить новый танец",
        text: "Разобраться с движениями",
        completed: "newTask",
        date: "2025-04-21",
      },
    ],
    filter: "",
    sort: "none",
  },
  m0 = v0({
    name: "Todos",
    initialState: Fv,
    reducers: {
      addTodo: (i, s) => {
        const o = s.payload;
        i.tasks.unshift(o);
      },
      removeTodo: (i, s) => ({
        ...i,
        tasks: i.tasks.filter((o) => o.id !== s.payload),
      }),
      toggleTodo: (i, s) => {
        const o = i.tasks.find((f) => f.id === s.payload);
        o &&
          (o.completed === "newTask"
            ? (o.completed = "inProgress")
            : o.completed === "inProgress"
              ? (o.completed = "Done")
              : o.completed === "Done" && (o.completed = "newTask")),
          console.log(o == null ? void 0 : o.completed);
      },
      editTodo: (i, s) => {
        const o = i.tasks.find((f) => f.id === s.payload.id);
        o && ((o.title = s.payload.title), (o.text = s.payload.text));
      },
      setSort: (i, s) => {
        i.sort = s.payload;
      },
    },
  }),
  {
    addTodo: Pv,
    removeTodo: Iv,
    toggleTodo: tm,
    editTodo: lm,
    setSort: em,
  } = m0.actions,
  um = m0.reducer,
  am = "_form_wdz6k_1",
  nm = "_input_wdz6k_12",
  im = "_textarea_wdz6k_13",
  cm = "_button_wdz6k_38",
  ui = { form: am, input: nm, textarea: im, button: cm };
function fm() {
  const i = Xa(),
    [s, o] = xt.useState({
      title: "",
      text: "",
      completed: "newTask",
      date: "",
    });
  function f(z) {
    const { name: M, value: T } = z.target;
    o((b) => ({ ...b, [M]: T }));
  }
  function v(z) {
    if ((z.preventDefault(), !s.title.trim() || !s.text.trim())) return;
    const M = { id: Date.now().toString(), ...s };
    i(Pv(M)),
      o({
        title: "",
        text: "",
        completed: "newTask",
        date: new Date().toISOString().split("T")[0],
      });
  }
  function E(z) {
    z.key === "Enter" && v(z);
  }
  return W.jsxs("form", {
    onSubmit: v,
    className: ui.form,
    children: [
      W.jsx("input", {
        type: "text",
        name: "title",
        placeholder: "Название задачи",
        value: s.title,
        onChange: f,
        onKeyDown: E,
        className: ui.input,
      }),
      W.jsx("textarea", {
        name: "text",
        placeholder: "Описание",
        value: s.text,
        onChange: f,
        onKeyDown: E,
        className: ui.textarea,
      }),
      W.jsx("button", {
        type: "submit",
        className: ui.button,
        children: "Добавить!",
      }),
    ],
  });
}
const rm = "_container_1c26z_1",
  sm = "_title_1c26z_12",
  om = "_content_1c26z_20",
  jf = { container: rm, title: sm, content: om },
  dm = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  ym = localStorage.getItem("theme") || dm,
  g0 = v0({
    name: "theme",
    initialState: ym,
    reducers: {
      toggleTheme: (i) => {
        const s = i === "light" ? "dark" : "light";
        return localStorage.setItem("theme", s), s;
      },
    },
  }),
  { toggleTheme: hm } = g0.actions,
  vm = g0.reducer,
  mm = "_button_arg0t_2",
  gm = "_light_arg0t_21",
  Sm = "_dark_arg0t_37",
  Yf = { button: mm, light: gm, dark: Sm };
function bm() {
  const i = Xa(),
    s = ja((f) => f.theme),
    o = () => {
      i(hm());
    };
  return W.jsx("button", {
    onClick: o,
    className: `${Yf.button} ${s === "light" ? Yf.light : Yf.dark}`,
    children: s === "light" ? "Темная тема" : "Светлая тема",
  });
}
const _m = "_modalOverlay_4rgm0_1",
  Tm = "_modalContent_4rgm0_13",
  Em = "_closeButton_4rgm0_23",
  pm = "_input_4rgm0_39",
  Am = "_textarea_4rgm0_40",
  zm = "_buttons_4rgm0_54",
  Om = "_buttonSave_4rgm0_60",
  Dm = "_buttonCancel_4rgm0_73",
  De = {
    modalOverlay: _m,
    modalContent: Tm,
    closeButton: Em,
    input: pm,
    textarea: Am,
    buttons: zm,
    buttonSave: Om,
    buttonCancel: Dm,
  };
function Mm({ task: i, onClose: s }) {
  const o = Xa(),
    [f, v] = xt.useState({ title: i.title, text: i.text }),
    E = (T) => {
      v({ ...f, [T.target.name]: T.target.value });
    },
    z = () => {
      const T = { ...i, title: f.title, text: f.text };
      o(lm(T)), s();
    },
    M = (T) => {
      T.key === "Enter" && z();
    };
  return (
    xt.useEffect(() => {
      const T = (b) => {
        b.key === "Escape" && s();
      };
      return (
        document.addEventListener("keydown", T),
        () => {
          document.removeEventListener("keydown", T);
        }
      );
    }, [s]),
    W.jsx("div", {
      className: De.modalOverlay,
      onClick: s,
      children: W.jsxs("div", {
        className: De.modalContent,
        onClick: (T) => T.stopPropagation(),
        children: [
          W.jsx("h2", { children: "Редактировать задачу" }),
          W.jsx("button", {
            className: De.closeButton,
            onClick: s,
            children: "✖",
          }),
          W.jsxs("form", {
            onSubmit: z,
            onKeyDown: M,
            children: [
              W.jsx("input", {
                type: "text",
                name: "title",
                value: f.title,
                onChange: E,
                className: De.input,
              }),
              W.jsx("textarea", {
                name: "text",
                value: f.text,
                onChange: E,
                className: De.textarea,
              }),
              W.jsxs("div", {
                className: De.buttons,
                children: [
                  W.jsx("button", {
                    type: "submit",
                    className: De.buttonSave,
                    children: "Сохранить",
                  }),
                  W.jsx("button", {
                    type: "button",
                    onClick: s,
                    className: De.buttonCancel,
                    children: "Отмена",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Rm = "_todoItem_1nc4a_1",
  Um = "_todoTitle_1nc4a_16",
  Nm = "_todoText_1nc4a_23",
  Hm = "_button_1nc4a_29",
  xm = "_buttonToggle_1nc4a_44",
  Cm = "_buttonRemove_1nc4a_49",
  qm = "_buttonEdit_1nc4a_57",
  Bm = "_todoDate_1nc4a_77",
  jm = "_dateGreen_1nc4a_83",
  Ym = "_dateYellow_1nc4a_87",
  Gm = "_dateRed_1nc4a_91",
  El = {
    todoItem: Rm,
    todoTitle: Um,
    todoText: Nm,
    button: Hm,
    buttonToggle: xm,
    buttonRemove: Cm,
    buttonEdit: qm,
    todoDate: Bm,
    dateGreen: jm,
    dateYellow: Ym,
    dateRed: Gm,
  };
function Xm({ id: i, title: s, text: o, completed: f, date: v }) {
  const E = Xa(),
    [z, M] = xt.useState(!1);
  function T() {
    E(tm(i));
  }
  function b() {
    E(Iv(i));
  }
  function U() {
    M(!0);
  }
  function H(Y) {
    const V = new Date(Y + "T00:00:00Z"),
      L = (new Date().getTime() - V.getTime()) / (1e3 * 3600 * 24);
    return L >= 0 && L <= 5
      ? El.dateGreen
      : L > 5 && L <= 10
        ? El.dateYellow
        : L > 10
          ? El.dateRed
          : "";
  }
  return W.jsxs("li", {
    className: El.todoItem,
    children: [
      W.jsx("h3", { className: El.todoTitle, children: s }),
      W.jsx("p", { className: El.todoText, children: o }),
      W.jsx("p", { className: `${El.todoDate} ${H(v)}`, children: v }),
      W.jsx("button", {
        onClick: T,
        className: `${El.button} ${El.buttonToggle}`,
        children: "Изменить статус",
      }),
      W.jsx("button", {
        onClick: U,
        className: El.buttonEdit,
        children: "✏️ Редактировать",
      }),
      W.jsx("button", {
        onClick: b,
        className: `${El.button} ${El.buttonRemove}`,
        children: "Удалить",
      }),
      z &&
        W.jsx(Mm, {
          task: { id: i, title: s, text: o, completed: f, date: v },
          onClose: () => M(!1),
        }),
    ],
  });
}
const Qm = "_sortContainer_tlsau_1",
  Zm = "_sortSelect_tlsau_8",
  l0 = { sortContainer: Qm, sortSelect: Zm },
  wm = () => {
    const i = Xa(),
      s = ja((o) => o.todos.sort);
    return W.jsx("div", {
      className: l0.sortContainer,
      children: W.jsxs("select", {
        onChange: (o) => i(em(o.target.value)),
        value: s,
        className: l0.sortSelect,
        children: [
          W.jsx("option", { value: "none", children: "Сортировать по..." }),
          W.jsx("option", { value: "status", children: "По статусу" }),
          W.jsx("option", { value: "date", children: "По времени" }),
          W.jsx("option", { value: "id", children: "По ID" }),
        ],
      }),
    });
  };
function Vm(i, s) {
  return s === "status"
    ? [...i].sort((o, f) => o.completed.localeCompare(f.completed))
    : s === "date"
      ? [...i].sort(
          (o, f) => new Date(f.date).getTime() - new Date(o.date).getTime(),
        )
      : s === "id"
        ? [...i].sort((o, f) => Number(o.id) - Number(f.id))
        : i;
}
function Lm() {
  const i = ja((f) => f.todos.tasks),
    s = ja((f) => f.todos.sort),
    o = xt.useMemo(() => Vm(i, s), [i, s]);
  return W.jsxs("div", {
    children: [
      W.jsx(wm, {}),
      W.jsx("ul", { children: o.map((f) => W.jsx(Xm, { ...f }, f.id)) }),
    ],
  });
}
function Km() {
  const i = ja((s) => s.theme);
  return (
    xt.useEffect(() => {
      document.body.setAttribute("data-theme", i);
    }, [i]),
    W.jsxs("div", {
      className: jf.container,
      children: [
        W.jsx("h1", { className: jf.title, children: "Todo List" }),
        W.jsx(bm, {}),
        W.jsxs("div", {
          className: jf.content,
          children: [W.jsx(fm, {}), W.jsx(Lm, {})],
        }),
      ],
    })
  );
}
const Jm = Gv({ reducer: { todos: um, theme: vm } });
Wh.createRoot(document.getElementById("root")).render(
  W.jsx(xt.StrictMode, {
    children: W.jsx(sv, { store: Jm, children: W.jsx(Km, {}) }),
  }),
);
