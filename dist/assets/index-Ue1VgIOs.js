(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) r(h);
  new MutationObserver((h) => {
    for (const T of h)
      if (T.type === "childList")
        for (const O of T.addedNodes)
          O.tagName === "LINK" && O.rel === "modulepreload" && r(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(h) {
    const T = {};
    return (
      h.integrity && (T.integrity = h.integrity),
      h.referrerPolicy && (T.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (T.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (T.credentials = "omit")
          : (T.credentials = "same-origin"),
      T
    );
  }
  function r(h) {
    if (h.ep) return;
    h.ep = !0;
    const T = o(h);
    fetch(h.href, T);
  }
})();
var Ti = { exports: {} },
  Ca = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rd;
function jh() {
  if (Rd) return Ca;
  Rd = 1;
  var c = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function o(r, h, T) {
    var O = null;
    if (
      (T !== void 0 && (O = "" + T),
      h.key !== void 0 && (O = "" + h.key),
      "key" in h)
    ) {
      T = {};
      for (var U in h) U !== "key" && (T[U] = h[U]);
    } else T = h;
    return (
      (h = T.ref),
      { $$typeof: c, type: r, key: O, ref: h !== void 0 ? h : null, props: T }
    );
  }
  return (Ca.Fragment = s), (Ca.jsx = o), (Ca.jsxs = o), Ca;
}
var Ud;
function Yh() {
  return Ud || ((Ud = 1), (Ti.exports = jh())), Ti.exports;
}
var k = Yh(),
  pi = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd;
function xh() {
  if (Nd) return W;
  Nd = 1;
  var c = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    T = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function x(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (C && y[C]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    P = Object.assign,
    _t = {};
  function I(y, M, Z) {
    (this.props = y),
      (this.context = M),
      (this.refs = _t),
      (this.updater = Z || w);
  }
  (I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (y, M) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, M, "setState");
    }),
    (I.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function dt() {}
  dt.prototype = I.prototype;
  function rt(y, M, Z) {
    (this.props = y),
      (this.context = M),
      (this.refs = _t),
      (this.updater = Z || w);
  }
  var K = (rt.prototype = new dt());
  (K.constructor = rt), P(K, I.prototype), (K.isPureReactComponent = !0);
  var et = Array.isArray,
    j = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function Dt(y, M, Z, X, H, at) {
    return (
      (Z = at.ref),
      { $$typeof: c, type: y, key: M, ref: Z !== void 0 ? Z : null, props: at }
    );
  }
  function Et(y, M) {
    return Dt(y.type, M, void 0, void 0, void 0, y.props);
  }
  function G(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function ct(y) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (Z) {
        return M[Z];
      })
    );
  }
  var $t = /\/+/g;
  function ql(y, M) {
    return typeof y == "object" && y !== null && y.key != null
      ? ct("" + y.key)
      : M.toString(36);
  }
  function Dl() {}
  function jl(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Dl, Dl)
            : ((y.status = "pending"),
              y.then(
                function (M) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = M));
                },
                function (M) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = M));
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
  function Ft(y, M, Z, X, H) {
    var at = typeof y;
    (at === "undefined" || at === "boolean") && (y = null);
    var $ = !1;
    if (y === null) $ = !0;
    else
      switch (at) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case s:
              $ = !0;
              break;
            case R:
              return ($ = y._init), Ft($(y._payload), M, Z, X, H);
          }
      }
    if ($)
      return (
        (H = H(y)),
        ($ = X === "" ? "." + ql(y, 0) : X),
        et(H)
          ? ((Z = ""),
            $ != null && (Z = $.replace($t, "$&/") + "/"),
            Ft(H, M, Z, "", function (Rt) {
              return Rt;
            }))
          : H != null &&
            (G(H) &&
              (H = Et(
                H,
                Z +
                  (H.key == null || (y && y.key === H.key)
                    ? ""
                    : ("" + H.key).replace($t, "$&/") + "/") +
                  $,
              )),
            M.push(H)),
        1
      );
    $ = 0;
    var Jt = X === "" ? "." : X + ":";
    if (et(y))
      for (var ot = 0; ot < y.length; ot++)
        (X = y[ot]), (at = Jt + ql(X, ot)), ($ += Ft(X, M, Z, at, H));
    else if (((ot = x(y)), typeof ot == "function"))
      for (y = ot.call(y), ot = 0; !(X = y.next()).done; )
        (X = X.value), (at = Jt + ql(X, ot++)), ($ += Ft(X, M, Z, at, H));
    else if (at === "object") {
      if (typeof y.then == "function") return Ft(jl(y), M, Z, X, H);
      throw (
        ((M = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return $;
  }
  function N(y, M, Z) {
    if (y == null) return y;
    var X = [],
      H = 0;
    return (
      Ft(y, X, "", "", function (at) {
        return M.call(Z, at, H++);
      }),
      X
    );
  }
  function J(y) {
    if (y._status === -1) {
      var M = y._result;
      (M = M()),
        M.then(
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = Z));
          },
          function (Z) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = Z));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = M));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var L =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(M)) return;
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
    (W.Children = {
      map: N,
      forEach: function (y, M, Z) {
        N(
          y,
          function () {
            M.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (y) {
        var M = 0;
        return (
          N(y, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (y) {
        return (
          N(y, function (M) {
            return M;
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
    (W.Component = I),
    (W.Fragment = o),
    (W.Profiler = h),
    (W.PureComponent = rt),
    (W.StrictMode = r),
    (W.Suspense = E),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (W.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (W.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (y, M, Z) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var X = P({}, y.props),
        H = y.key,
        at = void 0;
      if (M != null)
        for ($ in (M.ref !== void 0 && (at = void 0),
        M.key !== void 0 && (H = "" + M.key),
        M))
          !st.call(M, $) ||
            $ === "key" ||
            $ === "__self" ||
            $ === "__source" ||
            ($ === "ref" && M.ref === void 0) ||
            (X[$] = M[$]);
      var $ = arguments.length - 2;
      if ($ === 1) X.children = Z;
      else if (1 < $) {
        for (var Jt = Array($), ot = 0; ot < $; ot++)
          Jt[ot] = arguments[ot + 2];
        X.children = Jt;
      }
      return Dt(y.type, H, void 0, void 0, at, X);
    }),
    (W.createContext = function (y) {
      return (
        (y = {
          $$typeof: O,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: T, _context: y }),
        y
      );
    }),
    (W.createElement = function (y, M, Z) {
      var X,
        H = {},
        at = null;
      if (M != null)
        for (X in (M.key !== void 0 && (at = "" + M.key), M))
          st.call(M, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (H[X] = M[X]);
      var $ = arguments.length - 2;
      if ($ === 1) H.children = Z;
      else if (1 < $) {
        for (var Jt = Array($), ot = 0; ot < $; ot++)
          Jt[ot] = arguments[ot + 2];
        H.children = Jt;
      }
      if (y && y.defaultProps)
        for (X in (($ = y.defaultProps), $)) H[X] === void 0 && (H[X] = $[X]);
      return Dt(y, at, void 0, void 0, null, H);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (y) {
      return { $$typeof: U, render: y };
    }),
    (W.isValidElement = G),
    (W.lazy = function (y) {
      return { $$typeof: R, _payload: { _status: -1, _result: y }, _init: J };
    }),
    (W.memo = function (y, M) {
      return { $$typeof: b, type: y, compare: M === void 0 ? null : M };
    }),
    (W.startTransition = function (y) {
      var M = j.T,
        Z = {};
      j.T = Z;
      try {
        var X = y(),
          H = j.S;
        H !== null && H(Z, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(mt, L);
      } catch (at) {
        L(at);
      } finally {
        j.T = M;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (W.use = function (y) {
      return j.H.use(y);
    }),
    (W.useActionState = function (y, M, Z) {
      return j.H.useActionState(y, M, Z);
    }),
    (W.useCallback = function (y, M) {
      return j.H.useCallback(y, M);
    }),
    (W.useContext = function (y) {
      return j.H.useContext(y);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (y, M) {
      return j.H.useDeferredValue(y, M);
    }),
    (W.useEffect = function (y, M) {
      return j.H.useEffect(y, M);
    }),
    (W.useId = function () {
      return j.H.useId();
    }),
    (W.useImperativeHandle = function (y, M, Z) {
      return j.H.useImperativeHandle(y, M, Z);
    }),
    (W.useInsertionEffect = function (y, M) {
      return j.H.useInsertionEffect(y, M);
    }),
    (W.useLayoutEffect = function (y, M) {
      return j.H.useLayoutEffect(y, M);
    }),
    (W.useMemo = function (y, M) {
      return j.H.useMemo(y, M);
    }),
    (W.useOptimistic = function (y, M) {
      return j.H.useOptimistic(y, M);
    }),
    (W.useReducer = function (y, M, Z) {
      return j.H.useReducer(y, M, Z);
    }),
    (W.useRef = function (y) {
      return j.H.useRef(y);
    }),
    (W.useState = function (y) {
      return j.H.useState(y);
    }),
    (W.useSyncExternalStore = function (y, M, Z) {
      return j.H.useSyncExternalStore(y, M, Z);
    }),
    (W.useTransition = function () {
      return j.H.useTransition();
    }),
    (W.version = "19.0.0"),
    W
  );
}
var Hd;
function fc() {
  return Hd || ((Hd = 1), (pi.exports = xh())), pi.exports;
}
var wt = fc(),
  Ai = { exports: {} },
  Ba = {},
  zi = { exports: {} },
  Oi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function Gh() {
  return (
    Cd ||
      ((Cd = 1),
      (function (c) {
        function s(N, J) {
          var L = N.length;
          N.push(J);
          t: for (; 0 < L; ) {
            var mt = (L - 1) >>> 1,
              y = N[mt];
            if (0 < h(y, J)) (N[mt] = J), (N[L] = y), (L = mt);
            else break t;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function r(N) {
          if (N.length === 0) return null;
          var J = N[0],
            L = N.pop();
          if (L !== J) {
            N[0] = L;
            t: for (var mt = 0, y = N.length, M = y >>> 1; mt < M; ) {
              var Z = 2 * (mt + 1) - 1,
                X = N[Z],
                H = Z + 1,
                at = N[H];
              if (0 > h(X, L))
                H < y && 0 > h(at, X)
                  ? ((N[mt] = at), (N[H] = L), (mt = H))
                  : ((N[mt] = X), (N[Z] = L), (mt = Z));
              else if (H < y && 0 > h(at, L))
                (N[mt] = at), (N[H] = L), (mt = H);
              else break t;
            }
          }
          return J;
        }
        function h(N, J) {
          var L = N.sortIndex - J.sortIndex;
          return L !== 0 ? L : N.id - J.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var T = performance;
          c.unstable_now = function () {
            return T.now();
          };
        } else {
          var O = Date,
            U = O.now();
          c.unstable_now = function () {
            return O.now() - U;
          };
        }
        var E = [],
          b = [],
          R = 1,
          C = null,
          x = 3,
          w = !1,
          P = !1,
          _t = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          dt = typeof clearTimeout == "function" ? clearTimeout : null,
          rt = typeof setImmediate < "u" ? setImmediate : null;
        function K(N) {
          for (var J = o(b); J !== null; ) {
            if (J.callback === null) r(b);
            else if (J.startTime <= N)
              r(b), (J.sortIndex = J.expirationTime), s(E, J);
            else break;
            J = o(b);
          }
        }
        function et(N) {
          if (((_t = !1), K(N), !P))
            if (o(E) !== null) (P = !0), jl();
            else {
              var J = o(b);
              J !== null && Ft(et, J.startTime - N);
            }
        }
        var j = !1,
          st = -1,
          Dt = 5,
          Et = -1;
        function G() {
          return !(c.unstable_now() - Et < Dt);
        }
        function ct() {
          if (j) {
            var N = c.unstable_now();
            Et = N;
            var J = !0;
            try {
              t: {
                (P = !1), _t && ((_t = !1), dt(st), (st = -1)), (w = !0);
                var L = x;
                try {
                  l: {
                    for (
                      K(N), C = o(E);
                      C !== null && !(C.expirationTime > N && G());

                    ) {
                      var mt = C.callback;
                      if (typeof mt == "function") {
                        (C.callback = null), (x = C.priorityLevel);
                        var y = mt(C.expirationTime <= N);
                        if (((N = c.unstable_now()), typeof y == "function")) {
                          (C.callback = y), K(N), (J = !0);
                          break l;
                        }
                        C === o(E) && r(E), K(N);
                      } else r(E);
                      C = o(E);
                    }
                    if (C !== null) J = !0;
                    else {
                      var M = o(b);
                      M !== null && Ft(et, M.startTime - N), (J = !1);
                    }
                  }
                  break t;
                } finally {
                  (C = null), (x = L), (w = !1);
                }
                J = void 0;
              }
            } finally {
              J ? $t() : (j = !1);
            }
          }
        }
        var $t;
        if (typeof rt == "function")
          $t = function () {
            rt(ct);
          };
        else if (typeof MessageChannel < "u") {
          var ql = new MessageChannel(),
            Dl = ql.port2;
          (ql.port1.onmessage = ct),
            ($t = function () {
              Dl.postMessage(null);
            });
        } else
          $t = function () {
            I(ct, 0);
          };
        function jl() {
          j || ((j = !0), $t());
        }
        function Ft(N, J) {
          st = I(function () {
            N(c.unstable_now());
          }, J);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            P || w || ((P = !0), jl());
          }),
          (c.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Dt = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return o(E);
          }),
          (c.unstable_next = function (N) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = x;
            }
            var L = x;
            x = J;
            try {
              return N();
            } finally {
              x = L;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (N, J) {
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
            var L = x;
            x = N;
            try {
              return J();
            } finally {
              x = L;
            }
          }),
          (c.unstable_scheduleCallback = function (N, J, L) {
            var mt = c.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? mt + L : mt))
                : (L = mt),
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
              (y = L + y),
              (N = {
                id: R++,
                callback: J,
                priorityLevel: N,
                startTime: L,
                expirationTime: y,
                sortIndex: -1,
              }),
              L > mt
                ? ((N.sortIndex = L),
                  s(b, N),
                  o(E) === null &&
                    N === o(b) &&
                    (_t ? (dt(st), (st = -1)) : (_t = !0), Ft(et, L - mt)))
                : ((N.sortIndex = y), s(E, N), P || w || ((P = !0), jl())),
              N
            );
          }),
          (c.unstable_shouldYield = G),
          (c.unstable_wrapCallback = function (N) {
            var J = x;
            return function () {
              var L = x;
              x = J;
              try {
                return N.apply(this, arguments);
              } finally {
                x = L;
              }
            };
          });
      })(Oi)),
    Oi
  );
}
var Bd;
function Xh() {
  return Bd || ((Bd = 1), (zi.exports = Gh())), zi.exports;
}
var Di = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Qh() {
  if (qd) return Kt;
  qd = 1;
  var c = fc();
  function s(E) {
    var b = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        b += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      E +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
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
    h = Symbol.for("react.portal");
  function T(E, b, R) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: C == null ? null : "" + C,
      children: E,
      containerInfo: b,
      implementation: R,
    };
  }
  var O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function U(E, b) {
    if (E === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Kt.createPortal = function (E, b) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(s(299));
      return T(E, b, null, R);
    }),
    (Kt.flushSync = function (E) {
      var b = O.T,
        R = r.p;
      try {
        if (((O.T = null), (r.p = 2), E)) return E();
      } finally {
        (O.T = b), (r.p = R), r.d.f();
      }
    }),
    (Kt.preconnect = function (E, b) {
      typeof E == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        r.d.C(E, b));
    }),
    (Kt.prefetchDNS = function (E) {
      typeof E == "string" && r.d.D(E);
    }),
    (Kt.preinit = function (E, b) {
      if (typeof E == "string" && b && typeof b.as == "string") {
        var R = b.as,
          C = U(R, b.crossOrigin),
          x = typeof b.integrity == "string" ? b.integrity : void 0,
          w = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        R === "style"
          ? r.d.S(E, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: C,
              integrity: x,
              fetchPriority: w,
            })
          : R === "script" &&
            r.d.X(E, {
              crossOrigin: C,
              integrity: x,
              fetchPriority: w,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (E, b) {
      if (typeof E == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var R = U(b.as, b.crossOrigin);
            r.d.M(E, {
              crossOrigin: R,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && r.d.M(E);
    }),
    (Kt.preload = function (E, b) {
      if (
        typeof E == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var R = b.as,
          C = U(R, b.crossOrigin);
        r.d.L(E, R, {
          crossOrigin: C,
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
    (Kt.preloadModule = function (E, b) {
      if (typeof E == "string")
        if (b) {
          var R = U(b.as, b.crossOrigin);
          r.d.m(E, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: R,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else r.d.m(E);
    }),
    (Kt.requestFormReset = function (E) {
      r.d.r(E);
    }),
    (Kt.unstable_batchedUpdates = function (E, b) {
      return E(b);
    }),
    (Kt.useFormState = function (E, b, R) {
      return O.H.useFormState(E, b, R);
    }),
    (Kt.useFormStatus = function () {
      return O.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.0.0"),
    Kt
  );
}
var jd;
function Zh() {
  if (jd) return Di.exports;
  jd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), (Di.exports = Qh()), Di.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Lh() {
  if (Yd) return Ba;
  Yd = 1;
  var c = Xh(),
    s = fc(),
    o = Zh();
  function r(t) {
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
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var T = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    U = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    C = Symbol.for("react.provider"),
    x = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    _t = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    rt = Symbol.for("react.lazy"),
    K = Symbol.for("react.offscreen"),
    et = Symbol.for("react.memo_cache_sentinel"),
    j = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (j && t[j]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Dt = Symbol.for("react.client.reference");
  function Et(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Dt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case E:
        return "Fragment";
      case U:
        return "Portal";
      case R:
        return "Profiler";
      case b:
        return "StrictMode";
      case _t:
        return "Suspense";
      case I:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return (t.displayName || "Context") + ".Provider";
        case x:
          return (t._context.displayName || "Context") + ".Consumer";
        case P:
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
            (l = t.displayName || null), l !== null ? l : Et(t.type) || "Memo"
          );
        case rt:
          (l = t._payload), (t = t._init);
          try {
            return Et(t(l));
          } catch {}
      }
    return null;
  }
  var G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ct = Object.assign,
    $t,
    ql;
  function Dl(t) {
    if ($t === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ($t = (l && l[1]) || ""),
          (ql =
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
      ql
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
        f = n[0],
        i = n[1];
      if (f && i) {
        var d = f.split(`
`),
          m = i.split(`
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
    return (e = t ? t.displayName || t.name : "") ? Dl(e) : "";
  }
  function N(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Dl(t.type);
      case 16:
        return Dl("Lazy");
      case 13:
        return Dl("Suspense");
      case 19:
        return Dl("SuspenseList");
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
  function J(t) {
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
  function L(t) {
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
    if (L(t) !== t) throw Error(r(188));
  }
  function M(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = L(t)), l === null)) throw Error(r(188));
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
        throw Error(r(188));
      }
      if (e.return !== u.return) (e = a), (u = n);
      else {
        for (var f = !1, i = a.child; i; ) {
          if (i === e) {
            (f = !0), (e = a), (u = n);
            break;
          }
          if (i === u) {
            (f = !0), (u = a), (e = n);
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === e) {
              (f = !0), (e = n), (u = a);
              break;
            }
            if (i === u) {
              (f = !0), (u = n), (e = a);
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (e.alternate !== u) throw Error(r(190));
    }
    if (e.tag !== 3) throw Error(r(188));
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
    H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    at = { pending: !1, data: null, method: null, action: null },
    $ = [],
    Jt = -1;
  function ot(t) {
    return { current: t };
  }
  function Rt(t) {
    0 > Jt || ((t.current = $[Jt]), ($[Jt] = null), Jt--);
  }
  function bt(t, l) {
    Jt++, ($[Jt] = t.current), (t.current = l);
  }
  var Ml = ot(null),
    ju = ot(null),
    ee = ot(null),
    xa = ot(null);
  function Ga(t, l) {
    switch ((bt(ee, l), bt(ju, t), bt(Ml, null), (t = l.nodeType), t)) {
      case 9:
      case 11:
        l = (l = l.documentElement) && (l = l.namespaceURI) ? ad(l) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? l.parentNode : l),
          (l = t.tagName),
          (t = t.namespaceURI))
        )
          (t = ad(t)), (l = nd(t, l));
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
    Rt(Ml), bt(Ml, l);
  }
  function Ie() {
    Rt(Ml), Rt(ju), Rt(ee);
  }
  function dc(t) {
    t.memoizedState !== null && bt(xa, t);
    var l = Ml.current,
      e = nd(l, t.type);
    l !== e && (bt(ju, t), bt(Ml, e));
  }
  function Xa(t) {
    ju.current === t && (Rt(Ml), Rt(ju)),
      xa.current === t && (Rt(xa), (Ma._currentValue = at));
  }
  var yc = Object.prototype.hasOwnProperty,
    hc = c.unstable_scheduleCallback,
    vc = c.unstable_cancelCallback,
    hy = c.unstable_shouldYield,
    vy = c.unstable_requestPaint,
    Rl = c.unstable_now,
    my = c.unstable_getCurrentPriorityLevel,
    wi = c.unstable_ImmediatePriority,
    Ji = c.unstable_UserBlockingPriority,
    Qa = c.unstable_NormalPriority,
    gy = c.unstable_LowPriority,
    Wi = c.unstable_IdlePriority,
    Sy = c.log,
    by = c.unstable_setDisableYieldValue,
    Yu = null,
    ll = null;
  function _y(t) {
    if (ll && typeof ll.onCommitFiberRoot == "function")
      try {
        ll.onCommitFiberRoot(Yu, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function ue(t) {
    if (
      (typeof Sy == "function" && by(t),
      ll && typeof ll.setStrictMode == "function")
    )
      try {
        ll.setStrictMode(Yu, t);
      } catch {}
  }
  var el = Math.clz32 ? Math.clz32 : py,
    Ey = Math.log,
    Ty = Math.LN2;
  function py(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Ey(t) / Ty) | 0)) | 0;
  }
  var Za = 128,
    La = 4194304;
  function De(t) {
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
  function Va(t, l) {
    var e = t.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      a = t.suspendedLanes,
      n = t.pingedLanes,
      f = t.warmLanes;
    t = t.finishedLanes !== 0;
    var i = e & 134217727;
    return (
      i !== 0
        ? ((e = i & ~a),
          e !== 0
            ? (u = De(e))
            : ((n &= i),
              n !== 0
                ? (u = De(n))
                : t || ((f = i & ~f), f !== 0 && (u = De(f)))))
        : ((i = e & ~a),
          i !== 0
            ? (u = De(i))
            : n !== 0
              ? (u = De(n))
              : t || ((f = e & ~f), f !== 0 && (u = De(f)))),
      u === 0
        ? 0
        : l !== 0 &&
            l !== u &&
            (l & a) === 0 &&
            ((a = u & -u),
            (f = l & -l),
            a >= f || (a === 32 && (f & 4194176) !== 0))
          ? l
          : u
    );
  }
  function xu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Ay(t, l) {
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
  function ki() {
    var t = Za;
    return (Za <<= 1), (Za & 4194176) === 0 && (Za = 128), t;
  }
  function $i() {
    var t = La;
    return (La <<= 1), (La & 62914560) === 0 && (La = 4194304), t;
  }
  function mc(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Gu(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function zy(t, l, e, u, a, n) {
    var f = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var i = t.entanglements,
      d = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = f & ~e; 0 < e; ) {
      var A = 31 - el(e),
        D = 1 << A;
      (i[A] = 0), (d[A] = -1);
      var _ = m[A];
      if (_ !== null)
        for (m[A] = null, A = 0; A < _.length; A++) {
          var p = _[A];
          p !== null && (p.lane &= -536870913);
        }
      e &= ~D;
    }
    u !== 0 && Fi(t, u, 0),
      n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
  }
  function Fi(t, l, e) {
    (t.pendingLanes |= l), (t.suspendedLanes &= ~l);
    var u = 31 - el(l);
    (t.entangledLanes |= l),
      (t.entanglements[u] = t.entanglements[u] | 1073741824 | (e & 4194218));
  }
  function Pi(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e; ) {
      var u = 31 - el(e),
        a = 1 << u;
      (a & l) | (t[u] & l) && (t[u] |= l), (e &= ~a);
    }
  }
  function Ii(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function tr() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : pd(t.type));
  }
  function Oy(t, l) {
    var e = H.p;
    try {
      return (H.p = t), l();
    } finally {
      H.p = e;
    }
  }
  var ae = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + ae,
    Pt = "__reactProps$" + ae,
    tu = "__reactContainer$" + ae,
    gc = "__reactEvents$" + ae,
    Dy = "__reactListeners$" + ae,
    My = "__reactHandles$" + ae,
    lr = "__reactResources$" + ae,
    Xu = "__reactMarker$" + ae;
  function Sc(t) {
    delete t[Lt], delete t[Pt], delete t[gc], delete t[Dy], delete t[My];
  }
  function Me(t) {
    var l = t[Lt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[tu] || e[Lt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = id(t); t !== null; ) {
            if ((e = t[Lt])) return e;
            t = id(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function lu(t) {
    if ((t = t[Lt] || t[tu])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Qu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(r(33));
  }
  function eu(t) {
    var l = t[lr];
    return (
      l ||
        (l = t[lr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function qt(t) {
    t[Xu] = !0;
  }
  var er = new Set(),
    ur = {};
  function Re(t, l) {
    uu(t, l), uu(t + "Capture", l);
  }
  function uu(t, l) {
    for (ur[t] = l, t = 0; t < l.length; t++) er.add(l[t]);
  }
  var Yl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ry = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ar = {},
    nr = {};
  function Uy(t) {
    return yc.call(nr, t)
      ? !0
      : yc.call(ar, t)
        ? !1
        : Ry.test(t)
          ? (nr[t] = !0)
          : ((ar[t] = !0), !1);
  }
  function Ka(t, l, e) {
    if (Uy(l))
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
  function wa(t, l, e) {
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
  function xl(t, l, e, u) {
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
  function cr(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function Ny(t) {
    var l = cr(t) ? "checked" : "value",
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
          set: function (f) {
            (u = "" + f), n.call(this, f);
          },
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (f) {
            u = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[l];
          },
        }
      );
    }
  }
  function Ja(t) {
    t._valueTracker || (t._valueTracker = Ny(t));
  }
  function fr(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      u = "";
    return (
      t && (u = cr(t) ? (t.checked ? "true" : "false") : t.value),
      (t = u),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Wa(t) {
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
  var Hy = /[\n"\\]/g;
  function ol(t) {
    return t.replace(Hy, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function bc(t, l, e, u, a, n, f, i) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      l != null
        ? f === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + sl(l))
          : t.value !== "" + sl(l) && (t.value = "" + sl(l))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      l != null
        ? _c(t, f, sl(l))
        : e != null
          ? _c(t, f, sl(e))
          : u != null && t.removeAttribute("value"),
      a == null && n != null && (t.defaultChecked = !!n),
      a != null &&
        (t.checked = a && typeof a != "function" && typeof a != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.name = "" + sl(i))
        : t.removeAttribute("name");
  }
  function ir(t, l, e, u, a, n, f, i) {
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
        i || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (u = u ?? a),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (t.checked = i ? t.checked : !!u),
      (t.defaultChecked = !!u),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f);
  }
  function _c(t, l, e) {
    (l === "number" && Wa(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function au(t, l, e, u) {
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
  function rr(t, l, e) {
    if (
      l != null &&
      ((l = "" + sl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + sl(e) : "";
  }
  function sr(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(r(92));
        if (X(u)) {
          if (1 < u.length) throw Error(r(93));
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
  function nu(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Cy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function or(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? u
        ? t.setProperty(l, "")
        : l === "float"
          ? (t.cssFloat = "")
          : (t[l] = "")
      : u
        ? t.setProperty(l, e)
        : typeof e != "number" || e === 0 || Cy.has(l)
          ? l === "float"
            ? (t.cssFloat = e)
            : (t[l] = ("" + e).trim())
          : (t[l] = e + "px");
  }
  function dr(t, l, e) {
    if (l != null && typeof l != "object") throw Error(r(62));
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
        (u = l[a]), l.hasOwnProperty(a) && e[a] !== u && or(t, a, u);
    } else for (var n in l) l.hasOwnProperty(n) && or(t, n, l[n]);
  }
  function Ec(t) {
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
  var By = new Map([
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
    qy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ka(t) {
    return qy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Tc = null;
  function pc(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var cu = null,
    fu = null;
  function yr(t) {
    var l = lu(t);
    if (l && (t = l.stateNode)) {
      var e = t[Pt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (bc(
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
                if (!a) throw Error(r(90));
                bc(
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
              (u = e[l]), u.form === t.form && fr(u);
          }
          break t;
        case "textarea":
          rr(t, e.value, e.defaultValue);
          break t;
        case "select":
          (l = e.value), l != null && au(t, !!e.multiple, l, !1);
      }
    }
  }
  var Ac = !1;
  function hr(t, l, e) {
    if (Ac) return t(l, e);
    Ac = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (
        ((Ac = !1),
        (cu !== null || fu !== null) &&
          (Cn(), cu && ((l = cu), (t = fu), (fu = cu = null), yr(l), t)))
      )
        for (l = 0; l < t.length; l++) yr(t[l]);
    }
  }
  function Zu(t, l) {
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
    if (e && typeof e != "function") throw Error(r(231, l, typeof e));
    return e;
  }
  var zc = !1;
  if (Yl)
    try {
      var Lu = {};
      Object.defineProperty(Lu, "passive", {
        get: function () {
          zc = !0;
        },
      }),
        window.addEventListener("test", Lu, Lu),
        window.removeEventListener("test", Lu, Lu);
    } catch {
      zc = !1;
    }
  var ne = null,
    Oc = null,
    $a = null;
  function vr() {
    if ($a) return $a;
    var t,
      l = Oc,
      e = l.length,
      u,
      a = "value" in ne ? ne.value : ne.textContent,
      n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++);
    var f = e - t;
    for (u = 1; u <= f && l[e - u] === a[n - u]; u++);
    return ($a = a.slice(t, 1 < u ? 1 - u : void 0));
  }
  function Fa(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Pa() {
    return !0;
  }
  function mr() {
    return !1;
  }
  function It(t) {
    function l(e, u, a, n, f) {
      (this._reactName = e),
        (this._targetInst = a),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var i in t)
        t.hasOwnProperty(i) && ((e = t[i]), (this[i] = e ? e(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Pa
          : mr),
        (this.isPropagationStopped = mr),
        this
      );
    }
    return (
      ct(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Pa));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Pa));
        },
        persist: function () {},
        isPersistent: Pa,
      }),
      l
    );
  }
  var Ue = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ia = It(Ue),
    Vu = ct({}, Ue, { view: 0, detail: 0 }),
    jy = It(Vu),
    Dc,
    Mc,
    Ku,
    tn = ct({}, Vu, {
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
      getModifierState: Uc,
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
                ? ((Dc = t.screenX - Ku.screenX), (Mc = t.screenY - Ku.screenY))
                : (Mc = Dc = 0),
              (Ku = t)),
            Dc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Mc;
      },
    }),
    gr = It(tn),
    Yy = ct({}, tn, { dataTransfer: 0 }),
    xy = It(Yy),
    Gy = ct({}, Vu, { relatedTarget: 0 }),
    Rc = It(Gy),
    Xy = ct({}, Ue, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qy = It(Xy),
    Zy = ct({}, Ue, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Ly = It(Zy),
    Vy = ct({}, Ue, { data: 0 }),
    Sr = It(Vy),
    Ky = {
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
    wy = {
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
    Jy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Wy(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = Jy[t])
        ? !!l[t]
        : !1;
  }
  function Uc() {
    return Wy;
  }
  var ky = ct({}, Vu, {
      key: function (t) {
        if (t.key) {
          var l = Ky[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Fa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? wy[t.keyCode] || "Unidentified"
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
      getModifierState: Uc,
      charCode: function (t) {
        return t.type === "keypress" ? Fa(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Fa(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    $y = It(ky),
    Fy = ct({}, tn, {
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
    br = It(Fy),
    Py = ct({}, Vu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Uc,
    }),
    Iy = It(Py),
    t0 = ct({}, Ue, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l0 = It(t0),
    e0 = ct({}, tn, {
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
    u0 = It(e0),
    a0 = ct({}, Ue, { newState: 0, oldState: 0 }),
    n0 = It(a0),
    c0 = [9, 13, 27, 32],
    Nc = Yl && "CompositionEvent" in window,
    wu = null;
  Yl && "documentMode" in document && (wu = document.documentMode);
  var f0 = Yl && "TextEvent" in window && !wu,
    _r = Yl && (!Nc || (wu && 8 < wu && 11 >= wu)),
    Er = " ",
    Tr = !1;
  function pr(t, l) {
    switch (t) {
      case "keyup":
        return c0.indexOf(l.keyCode) !== -1;
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
  function Ar(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var iu = !1;
  function i0(t, l) {
    switch (t) {
      case "compositionend":
        return Ar(l);
      case "keypress":
        return l.which !== 32 ? null : ((Tr = !0), Er);
      case "textInput":
        return (t = l.data), t === Er && Tr ? null : t;
      default:
        return null;
    }
  }
  function r0(t, l) {
    if (iu)
      return t === "compositionend" || (!Nc && pr(t, l))
        ? ((t = vr()), ($a = Oc = ne = null), (iu = !1), t)
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
        return _r && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var s0 = {
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
  function zr(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!s0[t.type] : l === "textarea";
  }
  function Or(t, l, e, u) {
    cu ? (fu ? fu.push(u) : (fu = [u])) : (cu = u),
      (l = xn(l, "onChange")),
      0 < l.length &&
        ((e = new Ia("onChange", "change", null, e, u)),
        t.push({ event: e, listeners: l }));
  }
  var Ju = null,
    Wu = null;
  function o0(t) {
    Io(t, 0);
  }
  function ln(t) {
    var l = Qu(t);
    if (fr(l)) return t;
  }
  function Dr(t, l) {
    if (t === "change") return l;
  }
  var Mr = !1;
  if (Yl) {
    var Hc;
    if (Yl) {
      var Cc = "oninput" in document;
      if (!Cc) {
        var Rr = document.createElement("div");
        Rr.setAttribute("oninput", "return;"),
          (Cc = typeof Rr.oninput == "function");
      }
      Hc = Cc;
    } else Hc = !1;
    Mr = Hc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ur() {
    Ju && (Ju.detachEvent("onpropertychange", Nr), (Wu = Ju = null));
  }
  function Nr(t) {
    if (t.propertyName === "value" && ln(Wu)) {
      var l = [];
      Or(l, Wu, t, pc(t)), hr(o0, l);
    }
  }
  function d0(t, l, e) {
    t === "focusin"
      ? (Ur(), (Ju = l), (Wu = e), Ju.attachEvent("onpropertychange", Nr))
      : t === "focusout" && Ur();
  }
  function y0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ln(Wu);
  }
  function h0(t, l) {
    if (t === "click") return ln(l);
  }
  function v0(t, l) {
    if (t === "input" || t === "change") return ln(l);
  }
  function m0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var ul = typeof Object.is == "function" ? Object.is : m0;
  function ku(t, l) {
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
      if (!yc.call(l, a) || !ul(t[a], l[a])) return !1;
    }
    return !0;
  }
  function Hr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Cr(t, l) {
    var e = Hr(t);
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
      e = Hr(e);
    }
  }
  function Br(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? Br(t, l.parentNode)
            : "contains" in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1;
  }
  function qr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Wa(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Wa(t.document);
    }
    return l;
  }
  function Bc(t) {
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
  function g0(t, l) {
    var e = qr(l);
    l = t.focusedElem;
    var u = t.selectionRange;
    if (
      e !== l &&
      l &&
      l.ownerDocument &&
      Br(l.ownerDocument.documentElement, l)
    ) {
      if (u !== null && Bc(l)) {
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
            (a = Cr(l, n));
          var f = Cr(l, u);
          a &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            e.removeAllRanges(),
            n > u
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
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
  var S0 = Yl && "documentMode" in document && 11 >= document.documentMode,
    ru = null,
    qc = null,
    $u = null,
    jc = !1;
  function jr(t, l, e) {
    var u =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    jc ||
      ru == null ||
      ru !== Wa(u) ||
      ((u = ru),
      "selectionStart" in u && Bc(u)
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
      ($u && ku($u, u)) ||
        (($u = u),
        (u = xn(qc, "onSelect")),
        0 < u.length &&
          ((l = new Ia("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: u }),
          (l.target = ru))));
  }
  function Ne(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var su = {
      animationend: Ne("Animation", "AnimationEnd"),
      animationiteration: Ne("Animation", "AnimationIteration"),
      animationstart: Ne("Animation", "AnimationStart"),
      transitionrun: Ne("Transition", "TransitionRun"),
      transitionstart: Ne("Transition", "TransitionStart"),
      transitioncancel: Ne("Transition", "TransitionCancel"),
      transitionend: Ne("Transition", "TransitionEnd"),
    },
    Yc = {},
    Yr = {};
  Yl &&
    ((Yr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete su.animationend.animation,
      delete su.animationiteration.animation,
      delete su.animationstart.animation),
    "TransitionEvent" in window || delete su.transitionend.transition);
  function He(t) {
    if (Yc[t]) return Yc[t];
    if (!su[t]) return t;
    var l = su[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in Yr) return (Yc[t] = l[e]);
    return t;
  }
  var xr = He("animationend"),
    Gr = He("animationiteration"),
    Xr = He("animationstart"),
    b0 = He("transitionrun"),
    _0 = He("transitionstart"),
    E0 = He("transitioncancel"),
    Qr = He("transitionend"),
    Zr = new Map(),
    Lr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Tl(t, l) {
    Zr.set(t, l), Re(l, [t]);
  }
  var dl = [],
    ou = 0,
    xc = 0;
  function en() {
    for (var t = ou, l = (xc = ou = 0); l < t; ) {
      var e = dl[l];
      dl[l++] = null;
      var u = dl[l];
      dl[l++] = null;
      var a = dl[l];
      dl[l++] = null;
      var n = dl[l];
      if (((dl[l++] = null), u !== null && a !== null)) {
        var f = u.pending;
        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)),
          (u.pending = a);
      }
      n !== 0 && Vr(e, a, n);
    }
  }
  function un(t, l, e, u) {
    (dl[ou++] = t),
      (dl[ou++] = l),
      (dl[ou++] = e),
      (dl[ou++] = u),
      (xc |= u),
      (t.lanes |= u),
      (t = t.alternate),
      t !== null && (t.lanes |= u);
  }
  function Gc(t, l, e, u) {
    return un(t, l, e, u), an(t);
  }
  function ce(t, l) {
    return un(t, null, null, l), an(t);
  }
  function Vr(t, l, e) {
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
  function an(t) {
    if (50 < Ea) throw ((Ea = 0), (wf = null), Error(r(185)));
    for (var l = t.return; l !== null; ) (t = l), (l = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var du = {},
    Kr = new WeakMap();
  function yl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Kr.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: J(l) }), Kr.set(t, l), l);
    }
    return { value: t, source: l, stack: J(l) };
  }
  var yu = [],
    hu = 0,
    nn = null,
    cn = 0,
    hl = [],
    vl = 0,
    Ce = null,
    Gl = 1,
    Xl = "";
  function Be(t, l) {
    (yu[hu++] = cn), (yu[hu++] = nn), (nn = t), (cn = l);
  }
  function wr(t, l, e) {
    (hl[vl++] = Gl), (hl[vl++] = Xl), (hl[vl++] = Ce), (Ce = t);
    var u = Gl;
    t = Xl;
    var a = 32 - el(u) - 1;
    (u &= ~(1 << a)), (e += 1);
    var n = 32 - el(l) + a;
    if (30 < n) {
      var f = a - (a % 5);
      (n = (u & ((1 << f) - 1)).toString(32)),
        (u >>= f),
        (a -= f),
        (Gl = (1 << (32 - el(l) + a)) | (e << a) | u),
        (Xl = n + t);
    } else (Gl = (1 << n) | (e << a) | u), (Xl = t);
  }
  function Xc(t) {
    t.return !== null && (Be(t, 1), wr(t, 1, 0));
  }
  function Qc(t) {
    for (; t === nn; )
      (nn = yu[--hu]), (yu[hu] = null), (cn = yu[--hu]), (yu[hu] = null);
    for (; t === Ce; )
      (Ce = hl[--vl]),
        (hl[vl] = null),
        (Xl = hl[--vl]),
        (hl[vl] = null),
        (Gl = hl[--vl]),
        (hl[vl] = null);
  }
  var Wt = null,
    Gt = null,
    ft = !1,
    pl = null,
    Ul = !1,
    Zc = Error(r(519));
  function qe(t) {
    var l = Error(r(418, ""));
    throw (Iu(yl(l, t)), Zc);
  }
  function Jr(t) {
    var l = t.stateNode,
      e = t.type,
      u = t.memoizedProps;
    switch (((l[Lt] = t), (l[Pt] = u), e)) {
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
        for (e = 0; e < pa.length; e++) ut(pa[e], l);
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
          ir(
            l,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          Ja(l);
        break;
      case "select":
        ut("invalid", l);
        break;
      case "textarea":
        ut("invalid", l), sr(l, u.value, u.defaultValue, u.children), Ja(l);
    }
    (e = u.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      u.suppressHydrationWarning === !0 ||
      ud(l.textContent, e)
        ? (u.popover != null && (ut("beforetoggle", l), ut("toggle", l)),
          u.onScroll != null && ut("scroll", l),
          u.onScrollEnd != null && ut("scrollend", l),
          u.onClick != null && (l.onclick = Gn),
          (l = !0))
        : (l = !1),
      l || qe(t);
  }
  function Wr(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 3:
        case 27:
          Ul = !0;
          return;
        case 5:
        case 13:
          Ul = !1;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function Fu(t) {
    if (t !== Wt) return !1;
    if (!ft) return Wr(t), (ft = !0), !1;
    var l = !1,
      e;
    if (
      ((e = t.tag !== 3 && t.tag !== 27) &&
        ((e = t.tag === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || ri(t.type, t.memoizedProps))),
        (e = !e)),
      e && (l = !0),
      l && Gt && qe(t),
      Wr(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                Gt = zl(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        Gt = null;
      }
    } else Gt = Wt ? zl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Pu() {
    (Gt = Wt = null), (ft = !1);
  }
  function Iu(t) {
    pl === null ? (pl = [t]) : pl.push(t);
  }
  var ta = Error(r(460)),
    kr = Error(r(474)),
    Lc = { then: function () {} };
  function $r(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fn() {}
  function Fr(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(fn, fn), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), t === ta ? Error(r(483)) : t);
      default:
        if (typeof l.status == "string") l.then(fn, fn);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
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
            throw ((t = l.reason), t === ta ? Error(r(483)) : t);
        }
        throw ((la = l), ta);
    }
  }
  var la = null;
  function Pr() {
    if (la === null) throw Error(r(459));
    var t = la;
    return (la = null), t;
  }
  var vu = null,
    ea = 0;
  function rn(t) {
    var l = ea;
    return (ea += 1), vu === null && (vu = []), Fr(vu, t, l);
  }
  function ua(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function sn(t, l) {
    throw l.$$typeof === T
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Ir(t) {
    var l = t._init;
    return l(t._payload);
  }
  function ts(t) {
    function l(g, v) {
      if (t) {
        var S = g.deletions;
        S === null ? ((g.deletions = [v]), (g.flags |= 16)) : S.push(v);
      }
    }
    function e(g, v) {
      if (!t) return null;
      for (; v !== null; ) l(g, v), (v = v.sibling);
      return null;
    }
    function u(g) {
      for (var v = new Map(); g !== null; )
        g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
      return v;
    }
    function a(g, v) {
      return (g = Se(g, v)), (g.index = 0), (g.sibling = null), g;
    }
    function n(g, v, S) {
      return (
        (g.index = S),
        t
          ? ((S = g.alternate),
            S !== null
              ? ((S = S.index), S < v ? ((g.flags |= 33554434), v) : S)
              : ((g.flags |= 33554434), v))
          : ((g.flags |= 1048576), v)
      );
    }
    function f(g) {
      return t && g.alternate === null && (g.flags |= 33554434), g;
    }
    function i(g, v, S, z) {
      return v === null || v.tag !== 6
        ? ((v = xf(S, g.mode, z)), (v.return = g), v)
        : ((v = a(v, S)), (v.return = g), v);
    }
    function d(g, v, S, z) {
      var B = S.type;
      return B === E
        ? A(g, v, S.props.children, z, S.key)
        : v !== null &&
            (v.elementType === B ||
              (typeof B == "object" &&
                B !== null &&
                B.$$typeof === rt &&
                Ir(B) === v.type))
          ? ((v = a(v, S.props)), ua(v, S), (v.return = g), v)
          : ((v = Mn(S.type, S.key, S.props, null, g.mode, z)),
            ua(v, S),
            (v.return = g),
            v);
    }
    function m(g, v, S, z) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== S.containerInfo ||
        v.stateNode.implementation !== S.implementation
        ? ((v = Gf(S, g.mode, z)), (v.return = g), v)
        : ((v = a(v, S.children || [])), (v.return = g), v);
    }
    function A(g, v, S, z, B) {
      return v === null || v.tag !== 7
        ? ((v = Ke(S, g.mode, z, B)), (v.return = g), v)
        : ((v = a(v, S)), (v.return = g), v);
    }
    function D(g, v, S) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = xf("" + v, g.mode, S)), (v.return = g), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case O:
            return (
              (S = Mn(v.type, v.key, v.props, null, g.mode, S)),
              ua(S, v),
              (S.return = g),
              S
            );
          case U:
            return (v = Gf(v, g.mode, S)), (v.return = g), v;
          case rt:
            var z = v._init;
            return (v = z(v._payload)), D(g, v, S);
        }
        if (X(v) || st(v))
          return (v = Ke(v, g.mode, S, null)), (v.return = g), v;
        if (typeof v.then == "function") return D(g, rn(v), S);
        if (v.$$typeof === w) return D(g, zn(g, v), S);
        sn(g, v);
      }
      return null;
    }
    function _(g, v, S, z) {
      var B = v !== null ? v.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return B !== null ? null : i(g, v, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case O:
            return S.key === B ? d(g, v, S, z) : null;
          case U:
            return S.key === B ? m(g, v, S, z) : null;
          case rt:
            return (B = S._init), (S = B(S._payload)), _(g, v, S, z);
        }
        if (X(S) || st(S)) return B !== null ? null : A(g, v, S, z, null);
        if (typeof S.then == "function") return _(g, v, rn(S), z);
        if (S.$$typeof === w) return _(g, v, zn(g, S), z);
        sn(g, S);
      }
      return null;
    }
    function p(g, v, S, z, B) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (g = g.get(S) || null), i(v, g, "" + z, B);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case O:
            return (
              (g = g.get(z.key === null ? S : z.key) || null), d(v, g, z, B)
            );
          case U:
            return (
              (g = g.get(z.key === null ? S : z.key) || null), m(v, g, z, B)
            );
          case rt:
            var tt = z._init;
            return (z = tt(z._payload)), p(g, v, S, z, B);
        }
        if (X(z) || st(z)) return (g = g.get(S) || null), A(v, g, z, B, null);
        if (typeof z.then == "function") return p(g, v, S, rn(z), B);
        if (z.$$typeof === w) return p(g, v, S, zn(v, z), B);
        sn(v, z);
      }
      return null;
    }
    function q(g, v, S, z) {
      for (
        var B = null, tt = null, Y = v, Q = (v = 0), xt = null;
        Y !== null && Q < S.length;
        Q++
      ) {
        Y.index > Q ? ((xt = Y), (Y = null)) : (xt = Y.sibling);
        var it = _(g, Y, S[Q], z);
        if (it === null) {
          Y === null && (Y = xt);
          break;
        }
        t && Y && it.alternate === null && l(g, Y),
          (v = n(it, v, Q)),
          tt === null ? (B = it) : (tt.sibling = it),
          (tt = it),
          (Y = xt);
      }
      if (Q === S.length) return e(g, Y), ft && Be(g, Q), B;
      if (Y === null) {
        for (; Q < S.length; Q++)
          (Y = D(g, S[Q], z)),
            Y !== null &&
              ((v = n(Y, v, Q)),
              tt === null ? (B = Y) : (tt.sibling = Y),
              (tt = Y));
        return ft && Be(g, Q), B;
      }
      for (Y = u(Y); Q < S.length; Q++)
        (xt = p(Y, g, Q, S[Q], z)),
          xt !== null &&
            (t &&
              xt.alternate !== null &&
              Y.delete(xt.key === null ? Q : xt.key),
            (v = n(xt, v, Q)),
            tt === null ? (B = xt) : (tt.sibling = xt),
            (tt = xt));
      return (
        t &&
          Y.forEach(function (ze) {
            return l(g, ze);
          }),
        ft && Be(g, Q),
        B
      );
    }
    function V(g, v, S, z) {
      if (S == null) throw Error(r(151));
      for (
        var B = null, tt = null, Y = v, Q = (v = 0), xt = null, it = S.next();
        Y !== null && !it.done;
        Q++, it = S.next()
      ) {
        Y.index > Q ? ((xt = Y), (Y = null)) : (xt = Y.sibling);
        var ze = _(g, Y, it.value, z);
        if (ze === null) {
          Y === null && (Y = xt);
          break;
        }
        t && Y && ze.alternate === null && l(g, Y),
          (v = n(ze, v, Q)),
          tt === null ? (B = ze) : (tt.sibling = ze),
          (tt = ze),
          (Y = xt);
      }
      if (it.done) return e(g, Y), ft && Be(g, Q), B;
      if (Y === null) {
        for (; !it.done; Q++, it = S.next())
          (it = D(g, it.value, z)),
            it !== null &&
              ((v = n(it, v, Q)),
              tt === null ? (B = it) : (tt.sibling = it),
              (tt = it));
        return ft && Be(g, Q), B;
      }
      for (Y = u(Y); !it.done; Q++, it = S.next())
        (it = p(Y, g, Q, it.value, z)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Y.delete(it.key === null ? Q : it.key),
            (v = n(it, v, Q)),
            tt === null ? (B = it) : (tt.sibling = it),
            (tt = it));
      return (
        t &&
          Y.forEach(function (qh) {
            return l(g, qh);
          }),
        ft && Be(g, Q),
        B
      );
    }
    function Ot(g, v, S, z) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === E &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case O:
            t: {
              for (var B = S.key; v !== null; ) {
                if (v.key === B) {
                  if (((B = S.type), B === E)) {
                    if (v.tag === 7) {
                      e(g, v.sibling),
                        (z = a(v, S.props.children)),
                        (z.return = g),
                        (g = z);
                      break t;
                    }
                  } else if (
                    v.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === rt &&
                      Ir(B) === v.type)
                  ) {
                    e(g, v.sibling),
                      (z = a(v, S.props)),
                      ua(z, S),
                      (z.return = g),
                      (g = z);
                    break t;
                  }
                  e(g, v);
                  break;
                } else l(g, v);
                v = v.sibling;
              }
              S.type === E
                ? ((z = Ke(S.props.children, g.mode, z, S.key)),
                  (z.return = g),
                  (g = z))
                : ((z = Mn(S.type, S.key, S.props, null, g.mode, z)),
                  ua(z, S),
                  (z.return = g),
                  (g = z));
            }
            return f(g);
          case U:
            t: {
              for (B = S.key; v !== null; ) {
                if (v.key === B)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === S.containerInfo &&
                    v.stateNode.implementation === S.implementation
                  ) {
                    e(g, v.sibling),
                      (z = a(v, S.children || [])),
                      (z.return = g),
                      (g = z);
                    break t;
                  } else {
                    e(g, v);
                    break;
                  }
                else l(g, v);
                v = v.sibling;
              }
              (z = Gf(S, g.mode, z)), (z.return = g), (g = z);
            }
            return f(g);
          case rt:
            return (B = S._init), (S = B(S._payload)), Ot(g, v, S, z);
        }
        if (X(S)) return q(g, v, S, z);
        if (st(S)) {
          if (((B = st(S)), typeof B != "function")) throw Error(r(150));
          return (S = B.call(S)), V(g, v, S, z);
        }
        if (typeof S.then == "function") return Ot(g, v, rn(S), z);
        if (S.$$typeof === w) return Ot(g, v, zn(g, S), z);
        sn(g, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          v !== null && v.tag === 6
            ? (e(g, v.sibling), (z = a(v, S)), (z.return = g), (g = z))
            : (e(g, v), (z = xf(S, g.mode, z)), (z.return = g), (g = z)),
          f(g))
        : e(g, v);
    }
    return function (g, v, S, z) {
      try {
        ea = 0;
        var B = Ot(g, v, S, z);
        return (vu = null), B;
      } catch (Y) {
        if (Y === ta) throw Y;
        var tt = bl(29, Y, null, g.mode);
        return (tt.lanes = z), (tt.return = g), tt;
      } finally {
      }
    };
  }
  var je = ts(!0),
    ls = ts(!1),
    mu = ot(null),
    on = ot(0);
  function es(t, l) {
    (t = Fl), bt(on, t), bt(mu, l), (Fl = t | l.baseLanes);
  }
  function Vc() {
    bt(on, Fl), bt(mu, mu.current);
  }
  function Kc() {
    (Fl = on.current), Rt(mu), Rt(on);
  }
  var ml = ot(null),
    Nl = null;
  function fe(t) {
    var l = t.alternate;
    bt(Ct, Ct.current & 1),
      bt(ml, t),
      Nl === null &&
        (l === null || mu.current !== null || l.memoizedState !== null) &&
        (Nl = t);
  }
  function us(t) {
    if (t.tag === 22) {
      if ((bt(Ct, Ct.current), bt(ml, t), Nl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Nl = t);
      }
    } else ie();
  }
  function ie() {
    bt(Ct, Ct.current), bt(ml, ml.current);
  }
  function Ql(t) {
    Rt(ml), Nl === t && (Nl = null), Rt(Ct);
  }
  var Ct = ot(0);
  function dn(t) {
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
  var T0 =
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
    p0 = c.unstable_scheduleCallback,
    A0 = c.unstable_NormalPriority,
    Bt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wc() {
    return { controller: new T0(), data: new Map(), refCount: 0 };
  }
  function aa(t) {
    t.refCount--,
      t.refCount === 0 &&
        p0(A0, function () {
          t.controller.abort();
        });
  }
  var na = null,
    Jc = 0,
    gu = 0,
    Su = null;
  function z0(t, l) {
    if (na === null) {
      var e = (na = []);
      (Jc = 0),
        (gu = ti()),
        (Su = {
          status: "pending",
          value: void 0,
          then: function (u) {
            e.push(u);
          },
        });
    }
    return Jc++, l.then(as, as), l;
  }
  function as() {
    if (--Jc === 0 && na !== null) {
      Su !== null && (Su.status = "fulfilled");
      var t = na;
      (na = null), (gu = 0), (Su = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function O0(t, l) {
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
  var ns = G.S;
  G.S = function (t, l) {
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      z0(t, l),
      ns !== null && ns(t, l);
  };
  var Ye = ot(null);
  function Wc() {
    var t = Ye.current;
    return t !== null ? t : gt.pooledCache;
  }
  function yn(t, l) {
    l === null ? bt(Ye, Ye.current) : bt(Ye, l.pool);
  }
  function cs() {
    var t = Wc();
    return t === null ? null : { parent: Bt._currentValue, pool: t };
  }
  var re = 0,
    F = null,
    yt = null,
    Ut = null,
    hn = !1,
    bu = !1,
    xe = !1,
    vn = 0,
    ca = 0,
    _u = null,
    D0 = 0;
  function Mt() {
    throw Error(r(321));
  }
  function kc(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ul(t[e], l[e])) return !1;
    return !0;
  }
  function $c(t, l, e, u, a, n) {
    return (
      (re = n),
      (F = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? Ge : se),
      (xe = !1),
      (n = e(u, a)),
      (xe = !1),
      bu && (n = is(l, e, u, a)),
      fs(t),
      n
    );
  }
  function fs(t) {
    G.H = Hl;
    var l = yt !== null && yt.next !== null;
    if (((re = 0), (Ut = yt = F = null), (hn = !1), (ca = 0), (_u = null), l))
      throw Error(r(300));
    t === null ||
      jt ||
      ((t = t.dependencies), t !== null && An(t) && (jt = !0));
  }
  function is(t, l, e, u) {
    F = t;
    var a = 0;
    do {
      if ((bu && (_u = null), (ca = 0), (bu = !1), 25 <= a))
        throw Error(r(301));
      if (((a += 1), (Ut = yt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (G.H = Xe), (n = l(e, u));
    } while (bu);
    return n;
  }
  function M0() {
    var t = G.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? fa(l) : l),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (F.flags |= 1024),
      l
    );
  }
  function Fc() {
    var t = vn !== 0;
    return (vn = 0), t;
  }
  function Pc(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function Ic(t) {
    if (hn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      hn = !1;
    }
    (re = 0), (Ut = yt = F = null), (bu = !1), (ca = vn = 0), (_u = null);
  }
  function tl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? (F.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Nt() {
    if (yt === null) {
      var t = F.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var l = Ut === null ? F.memoizedState : Ut.next;
    if (l !== null) (Ut = l), (yt = t);
    else {
      if (t === null)
        throw F.alternate === null ? Error(r(467)) : Error(r(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Ut === null ? (F.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  var mn;
  mn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function fa(t) {
    var l = ca;
    return (
      (ca += 1),
      _u === null && (_u = []),
      (t = Fr(_u, t, l)),
      (l = F),
      (Ut === null ? l.memoizedState : Ut.next) === null &&
        ((l = l.alternate),
        (G.H = l === null || l.memoizedState === null ? Ge : se)),
      t
    );
  }
  function gn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return fa(t);
      if (t.$$typeof === w) return Vt(t);
    }
    throw Error(r(438, String(t)));
  }
  function tf(t) {
    var l = null,
      e = F.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var u = F.alternate;
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
      e === null && ((e = mn()), (F.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++) e[u] = et;
    return l.index++, e;
  }
  function Zl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function Sn(t) {
    var l = Nt();
    return lf(l, yt, t);
  }
  function lf(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var f = a.next;
        (a.next = n.next), (n.next = f);
      }
      (l.baseQueue = a = n), (u.pending = null);
    }
    if (((n = t.baseState), a === null)) t.memoizedState = n;
    else {
      l = a.next;
      var i = (f = null),
        d = null,
        m = l,
        A = !1;
      do {
        var D = m.lane & -536870913;
        if (D !== m.lane ? (nt & D) === D : (re & D) === D) {
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
              D === gu && (A = !0);
          else if ((re & _) === _) {
            (m = m.next), _ === gu && (A = !0);
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
              d === null ? ((i = d = D), (f = n)) : (d = d.next = D),
              (F.lanes |= _),
              (be |= _);
          (D = m.action),
            xe && e(n, D),
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
            d === null ? ((i = d = _), (f = n)) : (d = d.next = _),
            (F.lanes |= D),
            (be |= D);
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (d === null ? (f = n) : (d.next = i),
        !ul(n, t.memoizedState) && ((jt = !0), A && ((e = Su), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = f),
        (t.baseQueue = d),
        (u.lastRenderedState = n);
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function ef(t) {
    var l = Nt(),
      e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch,
      a = e.pending,
      n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var f = (a = a.next);
      do (n = t(n, f.action)), (f = f.next);
      while (f !== a);
      ul(n, l.memoizedState) || (jt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n);
    }
    return [n, u];
  }
  function rs(t, l, e) {
    var u = F,
      a = Nt(),
      n = ft;
    if (n) {
      if (e === void 0) throw Error(r(407));
      e = e();
    } else e = l();
    var f = !ul((yt || a).memoizedState, e);
    if (
      (f && ((a.memoizedState = e), (jt = !0)),
      (a = a.queue),
      nf(ds.bind(null, u, a, t), [t]),
      a.getSnapshot !== l || f || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Eu(9, os.bind(null, u, a, e, l), { destroy: void 0 }, null),
        gt === null)
      )
        throw Error(r(349));
      n || (re & 60) !== 0 || ss(u, l, e);
    }
    return e;
  }
  function ss(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = F.updateQueue),
      l === null
        ? ((l = mn()), (F.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t));
  }
  function os(t, l, e, u) {
    (l.value = e), (l.getSnapshot = u), ys(l) && hs(t);
  }
  function ds(t, l, e) {
    return e(function () {
      ys(l) && hs(t);
    });
  }
  function ys(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ul(t, e);
    } catch {
      return !0;
    }
  }
  function hs(t) {
    var l = ce(t, 2);
    l !== null && kt(l, t, 2);
  }
  function uf(t) {
    var l = tl();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), xe)) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function vs(t, l, e, u) {
    return (t.baseState = e), lf(t, yt, typeof u == "function" ? u : Zl);
  }
  function R0(t, l, e, u, a) {
    if (En(t)) throw Error(r(485));
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
        then: function (f) {
          n.listeners.push(f);
        },
      };
      G.T !== null ? e(!0) : (n.isTransition = !1),
        u(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), ms(l, n))
          : ((n.next = e.next), (l.pending = e.next = n));
    }
  }
  function ms(t, l) {
    var e = l.action,
      u = l.payload,
      a = t.state;
    if (l.isTransition) {
      var n = G.T,
        f = {};
      G.T = f;
      try {
        var i = e(a, u),
          d = G.S;
        d !== null && d(f, i), gs(t, l, i);
      } catch (m) {
        af(t, l, m);
      } finally {
        G.T = n;
      }
    } else
      try {
        (n = e(a, u)), gs(t, l, n);
      } catch (m) {
        af(t, l, m);
      }
  }
  function gs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (u) {
            Ss(t, l, u);
          },
          function (u) {
            return af(t, l, u);
          },
        )
      : Ss(t, l, e);
  }
  function Ss(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      bs(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), ms(t, e)));
  }
  function af(t, l, e) {
    var u = t.pending;
    if (((t.pending = null), u !== null)) {
      u = u.next;
      do (l.status = "rejected"), (l.reason = e), bs(l), (l = l.next);
      while (l !== u);
    }
    t.action = null;
  }
  function bs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function _s(t, l) {
    return l;
  }
  function Es(t, l) {
    if (ft) {
      var e = gt.formState;
      if (e !== null) {
        t: {
          var u = F;
          if (ft) {
            if (Gt) {
              l: {
                for (var a = Gt, n = Ul; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (((a = zl(a.nextSibling)), a === null)) {
                    a = null;
                    break l;
                  }
                }
                (n = a.data), (a = n === "F!" || n === "F" ? a : null);
              }
              if (a) {
                (Gt = zl(a.nextSibling)), (u = a.data === "F!");
                break t;
              }
            }
            qe(u);
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
        lastRenderedReducer: _s,
        lastRenderedState: l,
      }),
      (e.queue = u),
      (e = Gs.bind(null, F, u)),
      (u.dispatch = e),
      (u = uf(!1)),
      (n = of.bind(null, F, !1, u.queue)),
      (u = tl()),
      (a = { state: l, dispatch: null, action: t, pending: null }),
      (u.queue = a),
      (e = R0.bind(null, F, a, n, e)),
      (a.dispatch = e),
      (u.memoizedState = t),
      [l, e, !1]
    );
  }
  function Ts(t) {
    var l = Nt();
    return ps(l, yt, t);
  }
  function ps(t, l, e) {
    (l = lf(t, l, _s)[0]),
      (t = Sn(Zl)[0]),
      (l =
        typeof l == "object" && l !== null && typeof l.then == "function"
          ? fa(l)
          : l);
    var u = Nt(),
      a = u.queue,
      n = a.dispatch;
    return (
      e !== u.memoizedState &&
        ((F.flags |= 2048),
        Eu(9, U0.bind(null, a, e), { destroy: void 0 }, null)),
      [l, n, t]
    );
  }
  function U0(t, l) {
    t.action = l;
  }
  function As(t) {
    var l = Nt(),
      e = yt;
    if (e !== null) return ps(l, e, t);
    Nt(), (l = l.memoizedState), (e = Nt());
    var u = e.queue.dispatch;
    return (e.memoizedState = t), [l, u, !1];
  }
  function Eu(t, l, e, u) {
    return (
      (t = { tag: t, create: l, inst: e, deps: u, next: null }),
      (l = F.updateQueue),
      l === null && ((l = mn()), (F.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((u = e.next), (e.next = t), (t.next = u), (l.lastEffect = t)),
      t
    );
  }
  function zs() {
    return Nt().memoizedState;
  }
  function bn(t, l, e, u) {
    var a = tl();
    (F.flags |= t),
      (a.memoizedState = Eu(
        1 | l,
        e,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function _n(t, l, e, u) {
    var a = Nt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    yt !== null && u !== null && kc(u, yt.memoizedState.deps)
      ? (a.memoizedState = Eu(l, e, n, u))
      : ((F.flags |= t), (a.memoizedState = Eu(1 | l, e, n, u)));
  }
  function Os(t, l) {
    bn(8390656, 8, t, l);
  }
  function nf(t, l) {
    _n(2048, 8, t, l);
  }
  function Ds(t, l) {
    return _n(4, 2, t, l);
  }
  function Ms(t, l) {
    return _n(4, 4, t, l);
  }
  function Rs(t, l) {
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
  function Us(t, l, e) {
    (e = e != null ? e.concat([t]) : null), _n(4, 4, Rs.bind(null, l, t), e);
  }
  function cf() {}
  function Ns(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && kc(l, u[1]) ? u[0] : ((e.memoizedState = [t, l]), t);
  }
  function Hs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && kc(l, u[1])) return u[0];
    if (((u = t()), xe)) {
      ue(!0);
      try {
        t();
      } finally {
        ue(!1);
      }
    }
    return (e.memoizedState = [u, l]), u;
  }
  function ff(t, l, e) {
    return e === void 0 || (re & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = qo()), (F.lanes |= t), (be |= t), e);
  }
  function Cs(t, l, e, u) {
    return ul(e, l)
      ? e
      : mu.current !== null
        ? ((t = ff(t, e, u)), ul(t, l) || (jt = !0), t)
        : (re & 42) === 0
          ? ((jt = !0), (t.memoizedState = e))
          : ((t = qo()), (F.lanes |= t), (be |= t), l);
  }
  function Bs(t, l, e, u, a) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var f = G.T,
      i = {};
    (G.T = i), of(t, !1, l, e);
    try {
      var d = a(),
        m = G.S;
      if (
        (m !== null && m(i, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var A = O0(d, u);
        ia(t, l, A, fl(t));
      } else ia(t, l, u, fl(t));
    } catch (D) {
      ia(t, l, { then: function () {}, status: "rejected", reason: D }, fl());
    } finally {
      (H.p = n), (G.T = f);
    }
  }
  function N0() {}
  function rf(t, l, e, u) {
    if (t.tag !== 5) throw Error(r(476));
    var a = qs(t).queue;
    Bs(
      t,
      a,
      l,
      at,
      e === null
        ? N0
        : function () {
            return js(t), e(u);
          },
    );
  }
  function qs(t) {
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
        lastRenderedReducer: Zl,
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
          lastRenderedReducer: Zl,
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
  function js(t) {
    var l = qs(t).next.queue;
    ia(t, l, {}, fl());
  }
  function sf() {
    return Vt(Ma);
  }
  function Ys() {
    return Nt().memoizedState;
  }
  function xs() {
    return Nt().memoizedState;
  }
  function H0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = fl();
          t = ye(e);
          var u = he(l, t, e);
          u !== null && (kt(u, l, e), oa(u, l, e)),
            (l = { cache: wc() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function C0(t, l, e) {
    var u = fl();
    (e = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      En(t)
        ? Xs(l, e)
        : ((e = Gc(t, l, e, u)), e !== null && (kt(e, t, u), Qs(e, l, u)));
  }
  function Gs(t, l, e) {
    var u = fl();
    ia(t, l, e, u);
  }
  function ia(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (En(t)) Xs(l, a);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var f = l.lastRenderedState,
            i = n(f, e);
          if (((a.hasEagerState = !0), (a.eagerState = i), ul(i, f)))
            return un(t, l, a, 0), gt === null && en(), !1;
        } catch {
        } finally {
        }
      if (((e = Gc(t, l, a, u)), e !== null))
        return kt(e, t, u), Qs(e, l, u), !0;
    }
    return !1;
  }
  function of(t, l, e, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: ti(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      En(t))
    ) {
      if (l) throw Error(r(479));
    } else (l = Gc(t, e, u, 2)), l !== null && kt(l, t, 2);
  }
  function En(t) {
    var l = t.alternate;
    return t === F || (l !== null && l === F);
  }
  function Xs(t, l) {
    bu = hn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function Qs(t, l, e) {
    if ((e & 4194176) !== 0) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), Pi(t, e);
    }
  }
  var Hl = {
    readContext: Vt,
    use: gn,
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
  (Hl.useCacheRefresh = Mt),
    (Hl.useMemoCache = Mt),
    (Hl.useHostTransitionStatus = Mt),
    (Hl.useFormState = Mt),
    (Hl.useActionState = Mt),
    (Hl.useOptimistic = Mt);
  var Ge = {
    readContext: Vt,
    use: gn,
    useCallback: function (t, l) {
      return (tl().memoizedState = [t, l === void 0 ? null : l]), t;
    },
    useContext: Vt,
    useEffect: Os,
    useImperativeHandle: function (t, l, e) {
      (e = e != null ? e.concat([t]) : null),
        bn(4194308, 4, Rs.bind(null, l, t), e);
    },
    useLayoutEffect: function (t, l) {
      return bn(4194308, 4, t, l);
    },
    useInsertionEffect: function (t, l) {
      bn(4, 2, t, l);
    },
    useMemo: function (t, l) {
      var e = tl();
      l = l === void 0 ? null : l;
      var u = t();
      if (xe) {
        ue(!0);
        try {
          t();
        } finally {
          ue(!1);
        }
      }
      return (e.memoizedState = [u, l]), u;
    },
    useReducer: function (t, l, e) {
      var u = tl();
      if (e !== void 0) {
        var a = e(l);
        if (xe) {
          ue(!0);
          try {
            e(l);
          } finally {
            ue(!1);
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
        (t = t.dispatch = C0.bind(null, F, t)),
        [u.memoizedState, t]
      );
    },
    useRef: function (t) {
      var l = tl();
      return (t = { current: t }), (l.memoizedState = t);
    },
    useState: function (t) {
      t = uf(t);
      var l = t.queue,
        e = Gs.bind(null, F, l);
      return (l.dispatch = e), [t.memoizedState, e];
    },
    useDebugValue: cf,
    useDeferredValue: function (t, l) {
      var e = tl();
      return ff(e, t, l);
    },
    useTransition: function () {
      var t = uf(!1);
      return (
        (t = Bs.bind(null, F, t.queue, !0, !1)),
        (tl().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, l, e) {
      var u = F,
        a = tl();
      if (ft) {
        if (e === void 0) throw Error(r(407));
        e = e();
      } else {
        if (((e = l()), gt === null)) throw Error(r(349));
        (nt & 60) !== 0 || ss(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return (
        (a.queue = n),
        Os(ds.bind(null, u, n, t), [t]),
        (u.flags |= 2048),
        Eu(9, os.bind(null, u, n, e, l), { destroy: void 0 }, null),
        e
      );
    },
    useId: function () {
      var t = tl(),
        l = gt.identifierPrefix;
      if (ft) {
        var e = Xl,
          u = Gl;
        (e = (u & ~(1 << (32 - el(u) - 1))).toString(32) + e),
          (l = ":" + l + "R" + e),
          (e = vn++),
          0 < e && (l += "H" + e.toString(32)),
          (l += ":");
      } else (e = D0++), (l = ":" + l + "r" + e.toString(32) + ":");
      return (t.memoizedState = l);
    },
    useCacheRefresh: function () {
      return (tl().memoizedState = H0.bind(null, F));
    },
  };
  (Ge.useMemoCache = tf),
    (Ge.useHostTransitionStatus = sf),
    (Ge.useFormState = Es),
    (Ge.useActionState = Es),
    (Ge.useOptimistic = function (t) {
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
        (l.queue = e), (l = of.bind(null, F, !0, e)), (e.dispatch = l), [t, l]
      );
    });
  var se = {
    readContext: Vt,
    use: gn,
    useCallback: Ns,
    useContext: Vt,
    useEffect: nf,
    useImperativeHandle: Us,
    useInsertionEffect: Ds,
    useLayoutEffect: Ms,
    useMemo: Hs,
    useReducer: Sn,
    useRef: zs,
    useState: function () {
      return Sn(Zl);
    },
    useDebugValue: cf,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return Cs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = Sn(Zl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: rs,
    useId: Ys,
  };
  (se.useCacheRefresh = xs),
    (se.useMemoCache = tf),
    (se.useHostTransitionStatus = sf),
    (se.useFormState = Ts),
    (se.useActionState = Ts),
    (se.useOptimistic = function (t, l) {
      var e = Nt();
      return vs(e, yt, t, l);
    });
  var Xe = {
    readContext: Vt,
    use: gn,
    useCallback: Ns,
    useContext: Vt,
    useEffect: nf,
    useImperativeHandle: Us,
    useInsertionEffect: Ds,
    useLayoutEffect: Ms,
    useMemo: Hs,
    useReducer: ef,
    useRef: zs,
    useState: function () {
      return ef(Zl);
    },
    useDebugValue: cf,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return yt === null ? ff(e, t, l) : Cs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = ef(Zl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: rs,
    useId: Ys,
  };
  (Xe.useCacheRefresh = xs),
    (Xe.useMemoCache = tf),
    (Xe.useHostTransitionStatus = sf),
    (Xe.useFormState = As),
    (Xe.useActionState = As),
    (Xe.useOptimistic = function (t, l) {
      var e = Nt();
      return yt !== null
        ? vs(e, yt, t, l)
        : ((e.baseState = t), [t, e.queue.dispatch]);
    });
  function df(t, l, e, u) {
    (l = t.memoizedState),
      (e = e(u, l)),
      (e = e == null ? l : ct({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var yf = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? L(t) === t : !1;
    },
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var u = fl(),
        a = ye(u);
      (a.payload = l),
        e != null && (a.callback = e),
        (l = he(t, a, u)),
        l !== null && (kt(l, t, u), oa(l, t, u));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var u = fl(),
        a = ye(u);
      (a.tag = 1),
        (a.payload = l),
        e != null && (a.callback = e),
        (l = he(t, a, u)),
        l !== null && (kt(l, t, u), oa(l, t, u));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = fl(),
        u = ye(e);
      (u.tag = 2),
        l != null && (u.callback = l),
        (l = he(t, u, e)),
        l !== null && (kt(l, t, e), oa(l, t, e));
    },
  };
  function Zs(t, l, e, u, a, n, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, n, f)
        : l.prototype && l.prototype.isPureReactComponent
          ? !ku(e, u) || !ku(a, n)
          : !0
    );
  }
  function Ls(t, l, e, u) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, u),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, u),
      l.state !== t && yf.enqueueReplaceState(l, l.state, null);
  }
  function Qe(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l) u !== "ref" && (e[u] = l[u]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = ct({}, e));
      for (var a in t) e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  var Tn =
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
  function Vs(t) {
    Tn(t);
  }
  function Ks(t) {
    console.error(t);
  }
  function ws(t) {
    Tn(t);
  }
  function pn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Js(t, l, e) {
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
  function hf(t, l, e) {
    return (
      (e = ye(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        pn(t, l);
      }),
      e
    );
  }
  function Ws(t) {
    return (t = ye(t)), (t.tag = 3), t;
  }
  function ks(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      (t.payload = function () {
        return a(n);
      }),
        (t.callback = function () {
          Js(l, e, u);
        });
    }
    var f = e.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        Js(l, e, u),
          typeof a != "function" &&
            (_e === null ? (_e = new Set([this])) : _e.add(this));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function B0(t, l, e, u, a) {
    if (
      ((e.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && sa(l, e, a, !0),
        (e = ml.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 13:
            return (
              Nl === null ? kf() : e.alternate === null && zt === 0 && (zt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = a),
              u === Lc
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([u])) : l.add(u),
                  Ff(t, u, a)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              u === Lc
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
                  Ff(t, u, a)),
              !1
            );
        }
        throw Error(r(435, e.tag));
      }
      return Ff(t, u, a), kf(), !1;
    }
    if (ft)
      return (
        (l = ml.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = a),
            u !== Zc && ((t = Error(r(422), { cause: u })), Iu(yl(t, e))))
          : (u !== Zc && ((l = Error(r(423), { cause: u })), Iu(yl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (u = yl(u, e)),
            (a = hf(t.stateNode, u, a)),
            Rf(t, a),
            zt !== 4 && (zt = 2)),
        !1
      );
    var n = Error(r(520), { cause: u });
    if (
      ((n = yl(n, e)),
      ba === null ? (ba = [n]) : ba.push(n),
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
            (t = hf(e.stateNode, u, t)),
            Rf(e, t),
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
                  (_e === null || !_e.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (a = Ws(a)),
              ks(a, t, e, u),
              Rf(e, a),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var $s = Error(r(461)),
    jt = !1;
  function Xt(t, l, e, u) {
    l.child = t === null ? ls(l, null, e, u) : je(l, t.child, e, u);
  }
  function Fs(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var f = {};
      for (var i in u) i !== "ref" && (f[i] = u[i]);
    } else f = u;
    return (
      Le(l),
      (u = $c(t, l, e, f, n, a)),
      (i = Fc()),
      t !== null && !jt
        ? (Pc(t, l, a), Ll(t, l, a))
        : (ft && i && Xc(l), (l.flags |= 1), Xt(t, l, u, a), l.child)
    );
  }
  function Ps(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Yf(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), Is(t, l, n, u, a))
        : ((t = Mn(e.type, null, u, l, l.mode, a)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !pf(t, a))) {
      var f = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : ku), e(f, u) && t.ref === l.ref)
      )
        return Ll(t, l, a);
    }
    return (
      (l.flags |= 1),
      (t = Se(n, u)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Is(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (ku(n, u) && t.ref === l.ref)
        if (((jt = !1), (l.pendingProps = u = n), pf(t, a)))
          (t.flags & 131072) !== 0 && (jt = !0);
        else return (l.lanes = t.lanes), Ll(t, l, a);
    }
    return vf(t, l, e, u, a);
  }
  function to(t, l, e) {
    var u = l.pendingProps,
      a = u.children,
      n = (l.stateNode._pendingVisibility & 2) !== 0,
      f = t !== null ? t.memoizedState : null;
    if ((ra(t, l), u.mode === "hidden" || n)) {
      if ((l.flags & 128) !== 0) {
        if (((u = f !== null ? f.baseLanes | e : e), t !== null)) {
          for (a = l.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          l.childLanes = n & ~u;
        } else (l.childLanes = 0), (l.child = null);
        return lo(t, l, u, e);
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && yn(l, f !== null ? f.cachePool : null),
          f !== null ? es(l, f) : Vc(),
          us(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          lo(t, l, f !== null ? f.baseLanes | e : e, e)
        );
    } else
      f !== null
        ? (yn(l, f.cachePool), es(l, f), ie(), (l.memoizedState = null))
        : (t !== null && yn(l, null), Vc(), ie());
    return Xt(t, l, a, e), l.child;
  }
  function lo(t, l, e, u) {
    var a = Wc();
    return (
      (a = a === null ? null : { parent: Bt._currentValue, pool: a }),
      (l.memoizedState = { baseLanes: e, cachePool: a }),
      t !== null && yn(l, null),
      Vc(),
      us(l),
      t !== null && sa(t, l, u, !0),
      null
    );
  }
  function ra(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 2097664);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(r(284));
      (t === null || t.ref !== e) && (l.flags |= 2097664);
    }
  }
  function vf(t, l, e, u, a) {
    return (
      Le(l),
      (e = $c(t, l, e, u, void 0, a)),
      (u = Fc()),
      t !== null && !jt
        ? (Pc(t, l, a), Ll(t, l, a))
        : (ft && u && Xc(l), (l.flags |= 1), Xt(t, l, e, a), l.child)
    );
  }
  function eo(t, l, e, u, a, n) {
    return (
      Le(l),
      (l.updateQueue = null),
      (e = is(l, u, e, a)),
      fs(t),
      (u = Fc()),
      t !== null && !jt
        ? (Pc(t, l, n), Ll(t, l, n))
        : (ft && u && Xc(l), (l.flags |= 1), Xt(t, l, e, n), l.child)
    );
  }
  function uo(t, l, e, u, a) {
    if ((Le(l), l.stateNode === null)) {
      var n = du,
        f = e.contextType;
      typeof f == "object" && f !== null && (n = Vt(f)),
        (n = new e(u, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yf),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = u),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Df(l),
        (f = e.contextType),
        (n.context = typeof f == "object" && f !== null ? Vt(f) : du),
        (n.state = l.memoizedState),
        (f = e.getDerivedStateFromProps),
        typeof f == "function" && (df(l, e, f, u), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && yf.enqueueReplaceState(n, n.state, null),
          ya(l, u, n, a),
          da(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (u = !0);
    } else if (t === null) {
      n = l.stateNode;
      var i = l.memoizedProps,
        d = Qe(e, i);
      n.props = d;
      var m = n.context,
        A = e.contextType;
      (f = du), typeof A == "object" && A !== null && (f = Vt(A));
      var D = e.getDerivedStateFromProps;
      (A =
        typeof D == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = l.pendingProps !== i),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || m !== f) && Ls(l, n, u, f)),
        (de = !1);
      var _ = l.memoizedState;
      (n.state = _),
        ya(l, u, n, a),
        da(),
        (m = l.memoizedState),
        i || _ !== m || de
          ? (typeof D == "function" && (df(l, e, D, u), (m = l.memoizedState)),
            (d = de || Zs(l, e, d, u, _, m, f))
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
            (n.context = f),
            (u = d))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (u = !1));
    } else {
      (n = l.stateNode),
        Mf(t, l),
        (f = l.memoizedProps),
        (A = Qe(e, f)),
        (n.props = A),
        (D = l.pendingProps),
        (_ = n.context),
        (m = e.contextType),
        (d = du),
        typeof m == "object" && m !== null && (d = Vt(m)),
        (i = e.getDerivedStateFromProps),
        (m =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== D || _ !== d) && Ls(l, n, u, d)),
        (de = !1),
        (_ = l.memoizedState),
        (n.state = _),
        ya(l, u, n, a),
        da();
      var p = l.memoizedState;
      f !== D ||
      _ !== p ||
      de ||
      (t !== null && t.dependencies !== null && An(t.dependencies))
        ? (typeof i == "function" && (df(l, e, i, u), (p = l.memoizedState)),
          (A =
            de ||
            Zs(l, e, A, u, _, p, d) ||
            (t !== null && t.dependencies !== null && An(t.dependencies)))
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
                (f === t.memoizedProps && _ === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && _ === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = u),
              (l.memoizedState = p)),
          (n.props = u),
          (n.state = p),
          (n.context = d),
          (u = A))
        : (typeof n.componentDidUpdate != "function" ||
            (f === t.memoizedProps && _ === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && _ === t.memoizedState) ||
            (l.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      ra(t, l),
      (u = (l.flags & 128) !== 0),
      n || u
        ? ((n = l.stateNode),
          (e =
            u && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (l.flags |= 1),
          t !== null && u
            ? ((l.child = je(l, t.child, null, a)),
              (l.child = je(l, null, e, a)))
            : Xt(t, l, e, a),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Ll(t, l, a)),
      t
    );
  }
  function ao(t, l, e, u) {
    return Pu(), (l.flags |= 256), Xt(t, l, e, u), l.child;
  }
  var mf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gf(t) {
    return { baseLanes: t, cachePool: cs() };
  }
  function Sf(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= _l), t;
  }
  function no(t, l, e) {
    var u = l.pendingProps,
      a = !1,
      n = (l.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      f && ((a = !0), (l.flags &= -129)),
      (f = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (ft) {
        if ((a ? fe(l) : ie(), ft)) {
          var i = Gt,
            d;
          if ((d = i)) {
            t: {
              for (d = i, i = Ul; d.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break t;
                }
                if (((d = zl(d.nextSibling)), d === null)) {
                  i = null;
                  break t;
                }
              }
              i = d;
            }
            i !== null
              ? ((l.memoizedState = {
                  dehydrated: i,
                  treeContext: Ce !== null ? { id: Gl, overflow: Xl } : null,
                  retryLane: 536870912,
                }),
                (d = bl(18, null, null, 0)),
                (d.stateNode = i),
                (d.return = l),
                (l.child = d),
                (Wt = l),
                (Gt = null),
                (d = !0))
              : (d = !1);
          }
          d || qe(l);
        }
        if (
          ((i = l.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return i.data === "$!" ? (l.lanes = 16) : (l.lanes = 536870912), null;
        Ql(l);
      }
      return (
        (i = u.children),
        (u = u.fallback),
        a
          ? (ie(),
            (a = l.mode),
            (i = _f({ mode: "hidden", children: i }, a)),
            (u = Ke(u, a, e, null)),
            (i.return = l),
            (u.return = l),
            (i.sibling = u),
            (l.child = i),
            (a = l.child),
            (a.memoizedState = gf(e)),
            (a.childLanes = Sf(t, f, e)),
            (l.memoizedState = mf),
            u)
          : (fe(l), bf(l, i))
      );
    }
    if (
      ((d = t.memoizedState), d !== null && ((i = d.dehydrated), i !== null))
    ) {
      if (n)
        l.flags & 256
          ? (fe(l), (l.flags &= -257), (l = Ef(t, l, e)))
          : l.memoizedState !== null
            ? (ie(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (ie(),
              (a = u.fallback),
              (i = l.mode),
              (u = _f({ mode: "visible", children: u.children }, i)),
              (a = Ke(a, i, e, null)),
              (a.flags |= 2),
              (u.return = l),
              (a.return = l),
              (u.sibling = a),
              (l.child = u),
              je(l, t.child, null, e),
              (u = l.child),
              (u.memoizedState = gf(e)),
              (u.childLanes = Sf(t, f, e)),
              (l.memoizedState = mf),
              (l = a));
      else if ((fe(l), i.data === "$!")) {
        if (((f = i.nextSibling && i.nextSibling.dataset), f)) var m = f.dgst;
        (f = m),
          (u = Error(r(419))),
          (u.stack = ""),
          (u.digest = f),
          Iu({ value: u, source: null, stack: null }),
          (l = Ef(t, l, e));
      } else if (
        (jt || sa(t, l, e, !1), (f = (e & t.childLanes) !== 0), jt || f)
      ) {
        if (((f = gt), f !== null)) {
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
            ((u = (u & (f.suspendedLanes | e)) !== 0 ? 0 : u),
            u !== 0 && u !== d.retryLane)
          )
            throw ((d.retryLane = u), ce(t, u), kt(f, t, u), $s);
        }
        i.data === "$?" || kf(), (l = Ef(t, l, e));
      } else
        i.data === "$?"
          ? ((l.flags |= 128),
            (l.child = t.child),
            (l = k0.bind(null, t)),
            (i._reactRetry = l),
            (l = null))
          : ((t = d.treeContext),
            (Gt = zl(i.nextSibling)),
            (Wt = l),
            (ft = !0),
            (pl = null),
            (Ul = !1),
            t !== null &&
              ((hl[vl++] = Gl),
              (hl[vl++] = Xl),
              (hl[vl++] = Ce),
              (Gl = t.id),
              (Xl = t.overflow),
              (Ce = l)),
            (l = bf(l, u.children)),
            (l.flags |= 4096));
      return l;
    }
    return a
      ? (ie(),
        (a = u.fallback),
        (i = l.mode),
        (d = t.child),
        (m = d.sibling),
        (u = Se(d, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = d.subtreeFlags & 31457280),
        m !== null ? (a = Se(m, a)) : ((a = Ke(a, i, e, null)), (a.flags |= 2)),
        (a.return = l),
        (u.return = l),
        (u.sibling = a),
        (l.child = u),
        (u = a),
        (a = l.child),
        (i = t.child.memoizedState),
        i === null
          ? (i = gf(e))
          : ((d = i.cachePool),
            d !== null
              ? ((m = Bt._currentValue),
                (d = d.parent !== m ? { parent: m, pool: m } : d))
              : (d = cs()),
            (i = { baseLanes: i.baseLanes | e, cachePool: d })),
        (a.memoizedState = i),
        (a.childLanes = Sf(t, f, e)),
        (l.memoizedState = mf),
        u)
      : (fe(l),
        (e = t.child),
        (t = e.sibling),
        (e = Se(e, { mode: "visible", children: u.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((f = l.deletions),
          f === null ? ((l.deletions = [t]), (l.flags |= 16)) : f.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function bf(t, l) {
    return (
      (l = _f({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function _f(t, l) {
    return Ho(t, l, 0, null);
  }
  function Ef(t, l, e) {
    return (
      je(l, t.child, null, e),
      (t = bf(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function co(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), zf(t.return, l, e);
  }
  function Tf(t, l, e, u, a) {
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
  function fo(t, l, e) {
    var u = l.pendingProps,
      a = u.revealOrder,
      n = u.tail;
    if ((Xt(t, l, u.children, e), (u = Ct.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (l.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && co(t, e, l);
          else if (t.tag === 19) co(t, e, l);
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
    switch ((bt(Ct, u), a)) {
      case "forwards":
        for (e = l.child, a = null; e !== null; )
          (t = e.alternate),
            t !== null && dn(t) === null && (a = e),
            (e = e.sibling);
        (e = a),
          e === null
            ? ((a = l.child), (l.child = null))
            : ((a = e.sibling), (e.sibling = null)),
          Tf(l, !1, a, e, n);
        break;
      case "backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && dn(t) === null)) {
            l.child = a;
            break;
          }
          (t = a.sibling), (a.sibling = e), (e = a), (a = t);
        }
        Tf(l, !0, e, null, n);
        break;
      case "together":
        Tf(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Ll(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (be |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((sa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(r(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Se(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;

      )
        (t = t.sibling),
          (e = e.sibling = Se(t, t.pendingProps)),
          (e.return = l);
      e.sibling = null;
    }
    return l.child;
  }
  function pf(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && An(t)));
  }
  function q0(t, l, e) {
    switch (l.tag) {
      case 3:
        Ga(l, l.stateNode.containerInfo),
          oe(l, Bt, t.memoizedState.cache),
          Pu();
        break;
      case 27:
      case 5:
        dc(l);
        break;
      case 4:
        Ga(l, l.stateNode.containerInfo);
        break;
      case 10:
        oe(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (fe(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? no(t, l, e)
              : (fe(l), (t = Ll(t, l, e)), t !== null ? t.sibling : null);
        fe(l);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (
          ((u = (e & l.childLanes) !== 0),
          u || (sa(t, l, e, !1), (u = (e & l.childLanes) !== 0)),
          a)
        ) {
          if (u) return fo(t, l, e);
          l.flags |= 128;
        }
        if (
          ((a = l.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          bt(Ct, Ct.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), to(t, l, e);
      case 24:
        oe(l, Bt, t.memoizedState.cache);
    }
    return Ll(t, l, e);
  }
  function io(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) jt = !0;
      else {
        if (!pf(t, e) && (l.flags & 128) === 0) return (jt = !1), q0(t, l, e);
        jt = (t.flags & 131072) !== 0;
      }
    else (jt = !1), ft && (l.flags & 1048576) !== 0 && wr(l, cn, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType,
            a = u._init;
          if (((u = a(u._payload)), (l.type = u), typeof u == "function"))
            Yf(u)
              ? ((t = Qe(u, t)), (l.tag = 1), (l = uo(null, l, u, t, e)))
              : ((l.tag = 0), (l = vf(null, l, u, t, e)));
          else {
            if (u != null) {
              if (((a = u.$$typeof), a === P)) {
                (l.tag = 11), (l = Fs(null, l, u, t, e));
                break t;
              } else if (a === dt) {
                (l.tag = 14), (l = Ps(null, l, u, t, e));
                break t;
              }
            }
            throw ((l = Et(u) || u), Error(r(306, l, "")));
          }
        }
        return l;
      case 0:
        return vf(t, l, l.type, l.pendingProps, e);
      case 1:
        return (u = l.type), (a = Qe(u, l.pendingProps)), uo(t, l, u, a, e);
      case 3:
        t: {
          if ((Ga(l, l.stateNode.containerInfo), t === null))
            throw Error(r(387));
          var n = l.pendingProps;
          (a = l.memoizedState), (u = a.element), Mf(t, l), ya(l, n, null, e);
          var f = l.memoizedState;
          if (
            ((n = f.cache),
            oe(l, Bt, n),
            n !== a.cache && Of(l, [Bt], e, !0),
            da(),
            (n = f.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: n, isDehydrated: !1, cache: f.cache }),
              (l.updateQueue.baseState = a),
              (l.memoizedState = a),
              l.flags & 256)
            ) {
              l = ao(t, l, n, e);
              break t;
            } else if (n !== u) {
              (u = yl(Error(r(424)), l)), Iu(u), (l = ao(t, l, n, e));
              break t;
            } else
              for (
                Gt = zl(l.stateNode.containerInfo.firstChild),
                  Wt = l,
                  ft = !0,
                  pl = null,
                  Ul = !0,
                  e = ls(l, null, n, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling);
          else {
            if ((Pu(), n === u)) {
              l = Ll(t, l, e);
              break t;
            }
            Xt(t, l, n, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          ra(t, l),
          t === null
            ? (e = dd(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : ft ||
                ((e = l.type),
                (t = l.pendingProps),
                (u = Xn(ee.current).createElement(e)),
                (u[Lt] = l),
                (u[Pt] = t),
                Qt(u, e, t),
                qt(u),
                (l.stateNode = u))
            : (l.memoizedState = dd(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          dc(l),
          t === null &&
            ft &&
            ((u = l.stateNode = rd(l.type, l.pendingProps, ee.current)),
            (Wt = l),
            (Ul = !0),
            (Gt = zl(u.firstChild))),
          (u = l.pendingProps.children),
          t !== null || ft ? Xt(t, l, u, e) : (l.child = je(l, null, u, e)),
          ra(t, l),
          l.child
        );
      case 5:
        return (
          t === null &&
            ft &&
            ((a = u = Gt) &&
              ((u = oh(u, l.type, l.pendingProps, Ul)),
              u !== null
                ? ((l.stateNode = u),
                  (Wt = l),
                  (Gt = zl(u.firstChild)),
                  (Ul = !1),
                  (a = !0))
                : (a = !1)),
            a || qe(l)),
          dc(l),
          (a = l.type),
          (n = l.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (u = n.children),
          ri(a, n) ? (u = null) : f !== null && ri(a, f) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((a = $c(t, l, M0, null, null, e)), (Ma._currentValue = a)),
          ra(t, l),
          Xt(t, l, u, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            ft &&
            ((t = e = Gt) &&
              ((e = dh(e, l.pendingProps, Ul)),
              e !== null
                ? ((l.stateNode = e), (Wt = l), (Gt = null), (t = !0))
                : (t = !1)),
            t || qe(l)),
          null
        );
      case 13:
        return no(t, l, e);
      case 4:
        return (
          Ga(l, l.stateNode.containerInfo),
          (u = l.pendingProps),
          t === null ? (l.child = je(l, null, u, e)) : Xt(t, l, u, e),
          l.child
        );
      case 11:
        return Fs(t, l, l.type, l.pendingProps, e);
      case 7:
        return Xt(t, l, l.pendingProps, e), l.child;
      case 8:
        return Xt(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Xt(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return (
          (u = l.pendingProps),
          oe(l, l.type, u.value),
          Xt(t, l, u.children, e),
          l.child
        );
      case 9:
        return (
          (a = l.type._context),
          (u = l.pendingProps.children),
          Le(l),
          (a = Vt(a)),
          (u = u(a)),
          (l.flags |= 1),
          Xt(t, l, u, e),
          l.child
        );
      case 14:
        return Ps(t, l, l.type, l.pendingProps, e);
      case 15:
        return Is(t, l, l.type, l.pendingProps, e);
      case 19:
        return fo(t, l, e);
      case 22:
        return to(t, l, e);
      case 24:
        return (
          Le(l),
          (u = Vt(Bt)),
          t === null
            ? ((a = Wc()),
              a === null &&
                ((a = gt),
                (n = wc()),
                (a.pooledCache = n),
                n.refCount++,
                n !== null && (a.pooledCacheLanes |= e),
                (a = n)),
              (l.memoizedState = { parent: u, cache: a }),
              Df(l),
              oe(l, Bt, a))
            : ((t.lanes & e) !== 0 && (Mf(t, l), ya(l, null, null, e), da()),
              (a = t.memoizedState),
              (n = l.memoizedState),
              a.parent !== u
                ? ((a = { parent: u, cache: u }),
                  (l.memoizedState = a),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = a),
                  oe(l, Bt, u))
                : ((u = n.cache),
                  oe(l, Bt, u),
                  u !== a.cache && Of(l, [Bt], e, !0))),
          Xt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(r(156, l.tag));
  }
  var Af = ot(null),
    Ze = null,
    Vl = null;
  function oe(t, l, e) {
    bt(Af, l._currentValue), (l._currentValue = e);
  }
  function Kl(t) {
    (t._currentValue = Af.current), Rt(Af);
  }
  function zf(t, l, e) {
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
  function Of(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var f = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var i = n;
          n = a;
          for (var d = 0; d < l.length; d++)
            if (i.context === l[d]) {
              (n.lanes |= e),
                (i = n.alternate),
                i !== null && (i.lanes |= e),
                zf(n.return, e, t),
                u || (f = null);
              break t;
            }
          n = i.next;
        }
      } else if (a.tag === 18) {
        if (((f = a.return), f === null)) throw Error(r(341));
        (f.lanes |= e),
          (n = f.alternate),
          n !== null && (n.lanes |= e),
          zf(f, e, t),
          (f = null);
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((a = f.sibling), a !== null)) {
            (a.return = f.return), (f = a);
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function sa(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(r(387));
        if (((f = f.memoizedProps), f !== null)) {
          var i = a.type;
          ul(a.pendingProps.value, f.value) ||
            (t !== null ? t.push(i) : (t = [i]));
        }
      } else if (a === xa.current) {
        if (((f = a.alternate), f === null)) throw Error(r(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (t !== null ? t.push(Ma) : (t = [Ma]));
      }
      a = a.return;
    }
    t !== null && Of(l, t, e, u), (l.flags |= 262144);
  }
  function An(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Le(t) {
    (Ze = t),
      (Vl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return ro(Ze, t);
  }
  function zn(t, l) {
    return Ze === null && Le(t), ro(t, l);
  }
  function ro(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Vl === null)) {
      if (t === null) throw Error(r(308));
      (Vl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Vl = Vl.next = l;
    return e;
  }
  var de = !1;
  function Df(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mf(t, l) {
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
  function ye(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function he(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (pt & 2) !== 0)) {
      var a = u.pending;
      return (
        a === null ? (l.next = l) : ((l.next = a.next), (a.next = l)),
        (u.pending = l),
        (l = an(t)),
        Vr(t, null, e),
        l
      );
    }
    return un(t, u, l, e), an(t);
  }
  function oa(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194176) !== 0))
    ) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), Pi(t, e);
    }
  }
  function Rf(t, l) {
    var e = t.updateQueue,
      u = t.alternate;
    if (u !== null && ((u = u.updateQueue), e === u)) {
      var a = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var f = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          n === null ? (a = n = f) : (n = n.next = f), (e = e.next);
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
  var Uf = !1;
  function da() {
    if (Uf) {
      var t = Su;
      if (t !== null) throw t;
    }
  }
  function ya(t, l, e, u) {
    Uf = !1;
    var a = t.updateQueue;
    de = !1;
    var n = a.firstBaseUpdate,
      f = a.lastBaseUpdate,
      i = a.shared.pending;
    if (i !== null) {
      a.shared.pending = null;
      var d = i,
        m = d.next;
      (d.next = null), f === null ? (n = m) : (f.next = m), (f = d);
      var A = t.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (i = A.lastBaseUpdate),
        i !== f &&
          (i === null ? (A.firstBaseUpdate = m) : (i.next = m),
          (A.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var D = a.baseState;
      (f = 0), (A = m = d = null), (i = n);
      do {
        var _ = i.lane & -536870913,
          p = _ !== i.lane;
        if (p ? (nt & _) === _ : (u & _) === _) {
          _ !== 0 && _ === gu && (Uf = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var q = t,
              V = i;
            _ = l;
            var Ot = e;
            switch (V.tag) {
              case 1:
                if (((q = V.payload), typeof q == "function")) {
                  D = q.call(Ot, D, _);
                  break t;
                }
                D = q;
                break t;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = V.payload),
                  (_ = typeof q == "function" ? q.call(Ot, D, _) : q),
                  _ == null)
                )
                  break t;
                D = ct({}, D, _);
                break t;
              case 2:
                de = !0;
            }
          }
          (_ = i.callback),
            _ !== null &&
              ((t.flags |= 64),
              p && (t.flags |= 8192),
              (p = a.callbacks),
              p === null ? (a.callbacks = [_]) : p.push(_));
        } else
          (p = {
            lane: _,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            A === null ? ((m = A = p), (d = D)) : (A = A.next = p),
            (f |= _);
        if (((i = i.next), i === null)) {
          if (((i = a.shared.pending), i === null)) break;
          (p = i),
            (i = p.next),
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
        (be |= f),
        (t.lanes = f),
        (t.memoizedState = D);
    }
  }
  function so(t, l) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(l);
  }
  function oo(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) so(e[t], l);
  }
  function ha(t, l) {
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
              f = e.inst;
            (u = n()), (f.destroy = u);
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (i) {
      vt(l, l.return, i);
    }
  }
  function ve(t, l, e) {
    try {
      var u = l.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var f = u.inst,
              i = f.destroy;
            if (i !== void 0) {
              (f.destroy = void 0), (a = l);
              var d = e;
              try {
                i();
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
  function yo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        oo(l, e);
      } catch (u) {
        vt(t, t.return, u);
      }
    }
  }
  function ho(t, l, e) {
    (e.props = Qe(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (u) {
      vt(t, l, u);
    }
  }
  function Ve(t, l) {
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
  function vo(t) {
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
  function mo(t, l, e) {
    try {
      var u = t.stateNode;
      ch(u, t.type, e, l), (u[Pt] = l);
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function go(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Nf(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || go(t.return)) return null;
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
  function Hf(t, l, e) {
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
            e != null || l.onclick !== null || (l.onclick = Gn));
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (Hf(t, l, e), t = t.sibling; t !== null; )
        Hf(t, l, e), (t = t.sibling);
  }
  function On(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (On(t, l, e), t = t.sibling; t !== null; )
        On(t, l, e), (t = t.sibling);
  }
  var wl = !1,
    At = !1,
    Cf = !1,
    So = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null,
    bo = !1;
  function j0(t, l) {
    if (((t = t.containerInfo), (fi = wn), (t = qr(t)), Bc(t))) {
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
            var f = 0,
              i = -1,
              d = -1,
              m = 0,
              A = 0,
              D = t,
              _ = null;
            l: for (;;) {
              for (
                var p;
                D !== e || (a !== 0 && D.nodeType !== 3) || (i = f + a),
                  D !== n || (u !== 0 && D.nodeType !== 3) || (d = f + u),
                  D.nodeType === 3 && (f += D.nodeValue.length),
                  (p = D.firstChild) !== null;

              )
                (_ = D), (D = p);
              for (;;) {
                if (D === t) break l;
                if (
                  (_ === e && ++m === a && (i = f),
                  _ === n && ++A === u && (d = f),
                  (p = D.nextSibling) !== null)
                )
                  break;
                (D = _), (_ = D.parentNode);
              }
              D = p;
            }
            e = i === -1 || d === -1 ? null : { start: i, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      ii = { focusedElem: t, selectionRange: e }, wn = !1, Yt = l;
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
                  var q = Qe(e.type, a, e.elementType === e.type);
                  (t = u.getSnapshotBeforeUpdate(q, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = t);
                } catch (V) {
                  vt(e, e.return, V);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  di(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      di(t);
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Yt = t);
            break;
          }
          Yt = l.return;
        }
    return (q = bo), (bo = !1), q;
  }
  function _o(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wl(t, e), u & 4 && ha(5, e);
        break;
      case 1:
        if ((Wl(t, e), u & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              vt(e, e.return, i);
            }
          else {
            var a = Qe(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(a, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              vt(e, e.return, i);
            }
          }
        u & 64 && yo(e), u & 512 && Ve(e, e.return);
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
            oo(u, t);
          } catch (i) {
            vt(e, e.return, i);
          }
        }
        break;
      case 26:
        Wl(t, e), u & 512 && Ve(e, e.return);
        break;
      case 27:
      case 5:
        Wl(t, e), l === null && u & 4 && vo(e), u & 512 && Ve(e, e.return);
        break;
      case 12:
        Wl(t, e);
        break;
      case 13:
        Wl(t, e), u & 4 && po(t, e);
        break;
      case 22:
        if (((a = e.memoizedState !== null || wl), !a)) {
          l = (l !== null && l.memoizedState !== null) || At;
          var n = wl,
            f = At;
          (wl = a),
            (At = l) && !f ? me(t, e, (e.subtreeFlags & 8772) !== 0) : Wl(t, e),
            (wl = n),
            (At = f);
        }
        u & 512 &&
          (e.memoizedProps.mode === "manual"
            ? Ve(e, e.return)
            : al(e, e.return));
        break;
      default:
        Wl(t, e);
    }
  }
  function Eo(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), Eo(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && Sc(l)),
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
  function Jl(t, l, e) {
    for (e = e.child; e !== null; ) To(t, l, e), (e = e.sibling);
  }
  function To(t, l, e) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(Yu, e);
      } catch {}
    switch (e.tag) {
      case 26:
        At || al(e, l),
          Jl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        At || al(e, l);
        var u = Ht,
          a = nl;
        for (
          Ht = e.stateNode, Jl(t, l, e), e = e.stateNode, l = e.attributes;
          l.length;

        )
          e.removeAttributeNode(l[0]);
        Sc(e), (Ht = u), (nl = a);
        break;
      case 5:
        At || al(e, l);
      case 6:
        a = Ht;
        var n = nl;
        if (((Ht = null), Jl(t, l, e), (Ht = a), (nl = n), Ht !== null))
          if (nl)
            try {
              (t = Ht),
                (u = e.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(u)
                  : t.removeChild(u);
            } catch (f) {
              vt(e, l, f);
            }
          else
            try {
              Ht.removeChild(e.stateNode);
            } catch (f) {
              vt(e, l, f);
            }
        break;
      case 18:
        Ht !== null &&
          (nl
            ? ((l = Ht),
              (e = e.stateNode),
              l.nodeType === 8
                ? oi(l.parentNode, e)
                : l.nodeType === 1 && oi(l, e),
              Ha(l))
            : oi(Ht, e.stateNode));
        break;
      case 4:
        (u = Ht),
          (a = nl),
          (Ht = e.stateNode.containerInfo),
          (nl = !0),
          Jl(t, l, e),
          (Ht = u),
          (nl = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || ve(2, e, l), At || ve(4, e, l), Jl(t, l, e);
        break;
      case 1:
        At ||
          (al(e, l),
          (u = e.stateNode),
          typeof u.componentWillUnmount == "function" && ho(e, l, u)),
          Jl(t, l, e);
        break;
      case 21:
        Jl(t, l, e);
        break;
      case 22:
        At || al(e, l),
          (At = (u = At) || e.memoizedState !== null),
          Jl(t, l, e),
          (At = u);
        break;
      default:
        Jl(t, l, e);
    }
  }
  function po(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ha(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function Y0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new So()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new So()),
          l
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Bf(t, l) {
    var e = Y0(t);
    l.forEach(function (u) {
      var a = $0.bind(null, t, u);
      e.has(u) || (e.add(u), u.then(a, a));
    });
  }
  function gl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u],
          n = t,
          f = l,
          i = f;
        t: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
            case 5:
              (Ht = i.stateNode), (nl = !1);
              break t;
            case 3:
              (Ht = i.stateNode.containerInfo), (nl = !0);
              break t;
            case 4:
              (Ht = i.stateNode.containerInfo), (nl = !0);
              break t;
          }
          i = i.return;
        }
        if (Ht === null) throw Error(r(160));
        To(n, f, a),
          (Ht = null),
          (nl = !1),
          (n = a.alternate),
          n !== null && (n.return = null),
          (a.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) Ao(l, t), (l = l.sibling);
  }
  var Al = null;
  function Ao(t, l) {
    var e = t.alternate,
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl(l, t),
          Sl(t),
          u & 4 && (ve(3, t, t.return), ha(3, t), ve(5, t, t.return));
        break;
      case 1:
        gl(l, t),
          Sl(t),
          u & 512 && (At || e === null || al(e, e.return)),
          u & 64 &&
            wl &&
            ((t = t.updateQueue),
            t !== null &&
              ((u = t.callbacks),
              u !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? u : e.concat(u)))));
        break;
      case 26:
        var a = Al;
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
                          n[Xu] ||
                          n[Lt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = a.createElement(u)),
                          a.head.insertBefore(
                            n,
                            a.querySelector("head > title"),
                          )),
                        Qt(n, u, e),
                        (n[Lt] = t),
                        qt(n),
                        (u = n);
                      break t;
                    case "link":
                      var f = vd("link", "href", a).get(u + (e.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (
                            ((n = f[i]),
                            n.getAttribute("href") ===
                              (e.href == null ? null : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            f.splice(i, 1);
                            break l;
                          }
                      }
                      (n = a.createElement(u)),
                        Qt(n, u, e),
                        a.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = vd("meta", "content", a).get(
                          u + (e.content || ""),
                        ))
                      ) {
                        for (i = 0; i < f.length; i++)
                          if (
                            ((n = f[i]),
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
                            f.splice(i, 1);
                            break l;
                          }
                      }
                      (n = a.createElement(u)),
                        Qt(n, u, e),
                        a.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, u));
                  }
                  (n[Lt] = t), qt(n), (u = n);
                }
                t.stateNode = u;
              } else md(a, t.type, t.stateNode);
            else t.stateNode = hd(a, u, t.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                u === null
                  ? md(a, t.type, t.stateNode)
                  : hd(a, u, t.memoizedProps))
              : u === null &&
                t.stateNode !== null &&
                mo(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && t.alternate === null) {
          (a = t.stateNode), (n = t.memoizedProps);
          try {
            for (var d = a.firstChild; d; ) {
              var m = d.nextSibling,
                A = d.nodeName;
              d[Xu] ||
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
            Qt(a, D, n), (a[Lt] = t), (a[Pt] = n);
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
            nu(a, "");
          } catch (q) {
            vt(t, t.return, q);
          }
        }
        u & 4 &&
          t.stateNode != null &&
          ((a = t.memoizedProps), mo(t, a, e !== null ? e.memoizedProps : a)),
          u & 1024 && (Cf = !0);
        break;
      case 6:
        if ((gl(l, t), Sl(t), u & 4)) {
          if (t.stateNode === null) throw Error(r(162));
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
          ((Ln = null),
          (a = Al),
          (Al = Qn(l.containerInfo)),
          gl(l, t),
          (Al = a),
          Sl(t),
          u & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ha(l.containerInfo);
          } catch (q) {
            vt(t, t.return, q);
          }
        Cf && ((Cf = !1), zo(t));
        break;
      case 4:
        (u = Al),
          (Al = Qn(t.stateNode.containerInfo)),
          gl(l, t),
          Sl(t),
          (Al = u);
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
            (Lf = Rl()),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), Bf(t, u)));
        break;
      case 22:
        if (
          (u & 512 && (At || e === null || al(e, e.return)),
          (d = t.memoizedState !== null),
          (m = e !== null && e.memoizedState !== null),
          (A = wl),
          (D = At),
          (wl = A || d),
          (At = D || m),
          gl(l, t),
          (At = D),
          (wl = A),
          Sl(t),
          (l = t.stateNode),
          (l._current = t),
          (l._visibility &= -3),
          (l._visibility |= l._pendingVisibility & 2),
          u & 8192 &&
            ((l._visibility = d ? l._visibility & -2 : l._visibility | 1),
            d && ((l = wl || At), e === null || m || l || Tu(t)),
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
                    (f = m.stateNode), (i = m.memoizedProps.style);
                    var p =
                      i != null && i.hasOwnProperty("display")
                        ? i.display
                        : null;
                    f.style.display =
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
            e !== null && ((u.retryQueue = null), Bf(t, e))));
        break;
      case 19:
        gl(l, t),
          Sl(t),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), Bf(t, u)));
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
              if (go(e)) {
                var u = e;
                break t;
              }
              e = e.return;
            }
            throw Error(r(160));
          }
          switch (u.tag) {
            case 27:
              var a = u.stateNode,
                n = Nf(t);
              On(t, n, a);
              break;
            case 5:
              var f = u.stateNode;
              u.flags & 32 && (nu(f, ""), (u.flags &= -33));
              var i = Nf(t);
              On(t, i, f);
              break;
            case 3:
            case 4:
              var d = u.stateNode.containerInfo,
                m = Nf(t);
              Hf(t, m, d);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (A) {
        vt(t, t.return, A);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function zo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        zo(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Wl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) _o(t, l.alternate, l), (l = l.sibling);
  }
  function Tu(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ve(4, l, l.return), Tu(l);
          break;
        case 1:
          al(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && ho(l, l.return, e),
            Tu(l);
          break;
        case 26:
        case 27:
        case 5:
          al(l, l.return), Tu(l);
          break;
        case 22:
          al(l, l.return), l.memoizedState === null && Tu(l);
          break;
        default:
          Tu(l);
      }
      t = t.sibling;
    }
  }
  function me(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate,
        a = t,
        n = l,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          me(a, n, e), ha(4, n);
          break;
        case 1:
          if (
            (me(a, n, e),
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
            var i = u.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  so(d[a], i);
            } catch (m) {
              vt(u, u.return, m);
            }
          }
          e && f & 64 && yo(n), Ve(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          me(a, n, e), e && u === null && f & 4 && vo(n), Ve(n, n.return);
          break;
        case 12:
          me(a, n, e);
          break;
        case 13:
          me(a, n, e), e && f & 4 && po(a, n);
          break;
        case 22:
          n.memoizedState === null && me(a, n, e), Ve(n, n.return);
          break;
        default:
          me(a, n, e);
      }
      l = l.sibling;
    }
  }
  function qf(t, l) {
    var e = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && aa(e));
  }
  function jf(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && aa(t));
  }
  function ge(t, l, e, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Oo(t, l, e, u), (l = l.sibling);
  }
  function Oo(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ge(t, l, e, u), a & 2048 && ha(9, l);
        break;
      case 3:
        ge(t, l, e, u),
          a & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && aa(t)));
        break;
      case 12:
        if (a & 2048) {
          ge(t, l, e, u), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              f = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                f,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            vt(l, l.return, d);
          }
        } else ge(t, l, e, u);
        break;
      case 23:
        break;
      case 22:
        (n = l.stateNode),
          l.memoizedState !== null
            ? n._visibility & 4
              ? ge(t, l, e, u)
              : va(t, l)
            : n._visibility & 4
              ? ge(t, l, e, u)
              : ((n._visibility |= 4),
                pu(t, l, e, u, (l.subtreeFlags & 10256) !== 0)),
          a & 2048 && qf(l.alternate, l);
        break;
      case 24:
        ge(t, l, e, u), a & 2048 && jf(l.alternate, l);
        break;
      default:
        ge(t, l, e, u);
    }
  }
  function pu(t, l, e, u, a) {
    for (a = a && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        f = l,
        i = e,
        d = u,
        m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          pu(n, f, i, d, a), ha(8, f);
          break;
        case 23:
          break;
        case 22:
          var A = f.stateNode;
          f.memoizedState !== null
            ? A._visibility & 4
              ? pu(n, f, i, d, a)
              : va(n, f)
            : ((A._visibility |= 4), pu(n, f, i, d, a)),
            a && m & 2048 && qf(f.alternate, f);
          break;
        case 24:
          pu(n, f, i, d, a), a && m & 2048 && jf(f.alternate, f);
          break;
        default:
          pu(n, f, i, d, a);
      }
      l = l.sibling;
    }
  }
  function va(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          u = l,
          a = u.flags;
        switch (u.tag) {
          case 22:
            va(e, u), a & 2048 && qf(u.alternate, u);
            break;
          case 24:
            va(e, u), a & 2048 && jf(u.alternate, u);
            break;
          default:
            va(e, u);
        }
        l = l.sibling;
      }
  }
  var ma = 8192;
  function Au(t) {
    if (t.subtreeFlags & ma)
      for (t = t.child; t !== null; ) Do(t), (t = t.sibling);
  }
  function Do(t) {
    switch (t.tag) {
      case 26:
        Au(t),
          t.flags & ma &&
            t.memoizedState !== null &&
            zh(Al, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Au(t);
        break;
      case 3:
      case 4:
        var l = Al;
        (Al = Qn(t.stateNode.containerInfo)), Au(t), (Al = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ma), (ma = 16777216), Au(t), (ma = l))
            : Au(t));
        break;
      default:
        Au(t);
    }
  }
  function Mo(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do (l = t.sibling), (t.sibling = null), (t = l);
      while (t !== null);
    }
  }
  function ga(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          (Yt = u), Uo(u, t);
        }
      Mo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ro(t), (t = t.sibling);
  }
  function Ro(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ga(t), t.flags & 2048 && ve(9, t, t.return);
        break;
      case 3:
        ga(t);
        break;
      case 12:
        ga(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -5), Dn(t))
          : ga(t);
        break;
      default:
        ga(t);
    }
  }
  function Dn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          (Yt = u), Uo(u, t);
        }
      Mo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          ve(8, l, l.return), Dn(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 4 && ((e._visibility &= -5), Dn(l));
          break;
        default:
          Dn(l);
      }
      t = t.sibling;
    }
  }
  function Uo(t, l) {
    for (; Yt !== null; ) {
      var e = Yt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ve(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          aa(e.memoizedState.cache);
      }
      if (((u = e.child), u !== null)) (u.return = e), (Yt = u);
      else
        t: for (e = t; Yt !== null; ) {
          u = Yt;
          var a = u.sibling,
            n = u.return;
          if ((Eo(u), u === e)) {
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
  function x0(t, l, e, u) {
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
    return new x0(t, l, e, u);
  }
  function Yf(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Se(t, l) {
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
  function No(t, l) {
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
  function Mn(t, l, e, u, a, n) {
    var f = 0;
    if (((u = t), typeof t == "function")) Yf(t) && (f = 1);
    else if (typeof t == "string")
      f = ph(t, e, Ml.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case E:
          return Ke(e.children, a, n, l);
        case b:
          (f = 8), (a |= 24);
          break;
        case R:
          return (
            (t = bl(12, e, l, a | 2)), (t.elementType = R), (t.lanes = n), t
          );
        case _t:
          return (t = bl(13, e, l, a)), (t.elementType = _t), (t.lanes = n), t;
        case I:
          return (t = bl(19, e, l, a)), (t.elementType = I), (t.lanes = n), t;
        case K:
          return Ho(e, a, n, l);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case C:
              case w:
                f = 10;
                break t;
              case x:
                f = 9;
                break t;
              case P:
                f = 11;
                break t;
              case dt:
                f = 14;
                break t;
              case rt:
                (f = 16), (u = null);
                break t;
            }
          (f = 29),
            (e = Error(r(130, t === null ? "null" : typeof t, ""))),
            (u = null);
      }
    return (
      (l = bl(f, e, l, a)), (l.elementType = t), (l.type = u), (l.lanes = n), l
    );
  }
  function Ke(t, l, e, u) {
    return (t = bl(7, t, u, l)), (t.lanes = e), t;
  }
  function Ho(t, l, e, u) {
    (t = bl(22, t, u, l)), (t.elementType = K), (t.lanes = e);
    var a = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = a._current;
        if (n === null) throw Error(r(456));
        if ((a._pendingVisibility & 2) === 0) {
          var f = ce(n, 2);
          f !== null && ((a._pendingVisibility |= 2), kt(f, n, 2));
        }
      },
      attach: function () {
        var n = a._current;
        if (n === null) throw Error(r(456));
        if ((a._pendingVisibility & 2) !== 0) {
          var f = ce(n, 2);
          f !== null && ((a._pendingVisibility &= -3), kt(f, n, 2));
        }
      },
    };
    return (t.stateNode = a), t;
  }
  function xf(t, l, e) {
    return (t = bl(6, t, null, l)), (t.lanes = e), t;
  }
  function Gf(t, l, e) {
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
  function kl(t) {
    t.flags |= 4;
  }
  function Co(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !gd(l))) {
      if (
        ((l = ml.current),
        l !== null &&
          ((nt & 4194176) === nt
            ? Nl !== null
            : ((nt & 62914560) !== nt && (nt & 536870912) === 0) || l !== Nl))
      )
        throw ((la = Lc), kr);
      t.flags |= 8192;
    }
  }
  function Rn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? $i() : 536870912), (t.lanes |= l), (Ou |= l));
  }
  function Sa(t, l) {
    if (!ft)
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
  function Tt(t) {
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
  function G0(t, l, e) {
    var u = l.pendingProps;
    switch ((Qc(l), l.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(l), null;
      case 1:
        return Tt(l), null;
      case 3:
        return (
          (e = l.stateNode),
          (u = null),
          t !== null && (u = t.memoizedState.cache),
          l.memoizedState.cache !== u && (l.flags |= 2048),
          Kl(Bt),
          Ie(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (Fu(l)
              ? kl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), pl !== null && (Jf(pl), (pl = null)))),
          Tt(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (kl(l),
              e !== null ? (Tt(l), Co(l, e)) : (Tt(l), (l.flags &= -16777217)))
            : e
              ? e !== t.memoizedState
                ? (kl(l), Tt(l), Co(l, e))
                : (Tt(l), (l.flags &= -16777217))
              : (t.memoizedProps !== u && kl(l), Tt(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Xa(l), (e = ee.current);
        var a = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== u && kl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(r(166));
            return Tt(l), null;
          }
          (t = Ml.current),
            Fu(l) ? Jr(l) : ((t = rd(a, u, e)), (l.stateNode = t), kl(l));
        }
        return Tt(l), null;
      case 5:
        if ((Xa(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== u && kl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(r(166));
            return Tt(l), null;
          }
          if (((t = Ml.current), Fu(l))) Jr(l);
          else {
            switch (((a = Xn(ee.current)), t)) {
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
            (t[Lt] = l), (t[Pt] = u);
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
            t: switch ((Qt(t, e, u), e)) {
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
            t && kl(l);
          }
        }
        return Tt(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== u && kl(l);
        else {
          if (typeof u != "string" && l.stateNode === null) throw Error(r(166));
          if (((t = ee.current), Fu(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (u = null),
              (a = Wt),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            (t[Lt] = l),
              (t = !!(
                t.nodeValue === e ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                ud(t.nodeValue, e)
              )),
              t || qe(l);
          } else (t = Xn(t).createTextNode(u)), (t[Lt] = l), (l.stateNode = t);
        }
        return Tt(l), null;
      case 13:
        if (
          ((u = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((a = Fu(l)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((a = l.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(r(317));
              a[Lt] = l;
            } else
              Pu(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Tt(l), (a = !1);
          } else pl !== null && (Jf(pl), (pl = null)), (a = !0);
          if (!a) return l.flags & 256 ? (Ql(l), l) : (Ql(l), null);
        }
        if ((Ql(l), (l.flags & 128) !== 0)) return (l.lanes = e), l;
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
          Rn(l, l.updateQueue),
          Tt(l),
          null
        );
      case 4:
        return Ie(), t === null && ai(l.stateNode.containerInfo), Tt(l), null;
      case 10:
        return Kl(l.type), Tt(l), null;
      case 19:
        if ((Rt(Ct), (a = l.memoizedState), a === null)) return Tt(l), null;
        if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) Sa(a, !1);
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = dn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      Sa(a, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      Rn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    No(e, t), (e = e.sibling);
                  return bt(Ct, (Ct.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Rl() > Un &&
              ((l.flags |= 128), (u = !0), Sa(a, !1), (l.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = dn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                Rn(l, t),
                Sa(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !ft)
              )
                return Tt(l), null;
            } else
              2 * Rl() - a.renderingStartTime > Un &&
                e !== 536870912 &&
                ((l.flags |= 128), (u = !0), Sa(a, !1), (l.lanes = 4194304));
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
            (a.renderingStartTime = Rl()),
            (l.sibling = null),
            (t = Ct.current),
            bt(Ct, u ? (t & 1) | 2 : t & 1),
            l)
          : (Tt(l), null);
      case 22:
      case 23:
        return (
          Ql(l),
          Kc(),
          (u = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== u && (l.flags |= 8192)
            : u && (l.flags |= 8192),
          u
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Tt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Tt(l),
          (e = l.updateQueue),
          e !== null && Rn(l, e.retryQueue),
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
          t !== null && Rt(Ye),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Kl(Bt),
          Tt(l),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, l.tag));
  }
  function X0(t, l) {
    switch ((Qc(l), l.tag)) {
      case 1:
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          Kl(Bt),
          Ie(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Xa(l), null;
      case 13:
        if (
          (Ql(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(r(340));
          Pu();
        }
        return (
          (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return Rt(Ct), null;
      case 4:
        return Ie(), null;
      case 10:
        return Kl(l.type), null;
      case 22:
      case 23:
        return (
          Ql(l),
          Kc(),
          t !== null && Rt(Ye),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return Kl(Bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bo(t, l) {
    switch ((Qc(l), l.tag)) {
      case 3:
        Kl(Bt), Ie();
        break;
      case 26:
      case 27:
      case 5:
        Xa(l);
        break;
      case 4:
        Ie();
        break;
      case 13:
        Ql(l);
        break;
      case 19:
        Rt(Ct);
        break;
      case 10:
        Kl(l.type);
        break;
      case 22:
      case 23:
        Ql(l), Kc(), t !== null && Rt(Ye);
        break;
      case 24:
        Kl(Bt);
    }
  }
  var Q0 = {
      getCacheForType: function (t) {
        var l = Vt(Bt),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    Z0 = typeof WeakMap == "function" ? WeakMap : Map,
    pt = 0,
    gt = null,
    lt = null,
    nt = 0,
    St = 0,
    cl = null,
    $l = !1,
    zu = !1,
    Xf = !1,
    Fl = 0,
    zt = 0,
    be = 0,
    we = 0,
    Qf = 0,
    _l = 0,
    Ou = 0,
    ba = null,
    Cl = null,
    Zf = !1,
    Lf = 0,
    Un = 1 / 0,
    Nn = null,
    _e = null,
    Hn = !1,
    Je = null,
    _a = 0,
    Vf = 0,
    Kf = null,
    Ea = 0,
    wf = null;
  function fl() {
    if ((pt & 2) !== 0 && nt !== 0) return nt & -nt;
    if (G.T !== null) {
      var t = gu;
      return t !== 0 ? t : ti();
    }
    return tr();
  }
  function qo() {
    _l === 0 && (_l = (nt & 536870912) === 0 || ft ? ki() : 536870912);
    var t = ml.current;
    return t !== null && (t.flags |= 32), _l;
  }
  function kt(t, l, e) {
    ((t === gt && St === 2) || t.cancelPendingCommit !== null) &&
      (Du(t, 0), Pl(t, nt, _l, !1)),
      Gu(t, e),
      ((pt & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((pt & 2) === 0 && (we |= e), zt === 4 && Pl(t, nt, _l, !1)),
        Bl(t));
  }
  function jo(t, l, e) {
    if ((pt & 6) !== 0) throw Error(r(327));
    var u = (!e && (l & 60) === 0 && (l & t.expiredLanes) === 0) || xu(t, l),
      a = u ? K0(t, l) : $f(t, l, !0),
      n = u;
    do {
      if (a === 0) {
        zu && !u && Pl(t, l, 0, !1);
        break;
      } else if (a === 6) Pl(t, l, 0, !$l);
      else {
        if (((e = t.current.alternate), n && !L0(e))) {
          (a = $f(t, l, !1)), (n = !1);
          continue;
        }
        if (a === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            l = f;
            t: {
              var i = t;
              a = ba;
              var d = i.current.memoizedState.isDehydrated;
              if ((d && (Du(i, f).flags |= 256), (f = $f(i, f, !1)), f !== 2)) {
                if (Xf && !d) {
                  (i.errorRecoveryDisabledLanes |= n), (we |= n), (a = 4);
                  break t;
                }
                (n = Cl), (Cl = a), n !== null && Jf(n);
              }
              a = f;
            }
            if (((n = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Du(t, 0), Pl(t, l, 0, !0);
          break;
        }
        t: {
          switch (((u = t), a)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((l & 4194176) === l) {
                Pl(u, l, _l, !$l);
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
              throw Error(r(329));
          }
          if (
            ((u.finishedWork = e),
            (u.finishedLanes = l),
            (l & 62914560) === l && ((n = Lf + 300 - Rl()), 10 < n))
          ) {
            if ((Pl(u, l, _l, !$l), Va(u, 0) !== 0)) break t;
            u.timeoutHandle = cd(
              Yo.bind(null, u, e, Cl, Nn, Zf, l, _l, we, Ou, $l, 2, -0, 0),
              n,
            );
            break t;
          }
          Yo(u, e, Cl, Nn, Zf, l, _l, we, Ou, $l, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Bl(t);
  }
  function Jf(t) {
    Cl === null ? (Cl = t) : Cl.push.apply(Cl, t);
  }
  function Yo(t, l, e, u, a, n, f, i, d, m, A, D, _) {
    var p = l.subtreeFlags;
    if (
      (p & 8192 || (p & 16785408) === 16785408) &&
      ((Da = { stylesheets: null, count: 0, unsuspend: Ah }),
      Do(l),
      (l = Oh()),
      l !== null)
    ) {
      (t.cancelPendingCommit = l(Vo.bind(null, t, e, u, a, f, i, d, 1, D, _))),
        Pl(t, n, f, !m);
      return;
    }
    Vo(t, e, u, a, f, i, d, A, D, _);
  }
  function L0(t) {
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
  function Pl(t, l, e, u) {
    (l &= ~Qf),
      (l &= ~we),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      u && (t.warmLanes |= l),
      (u = t.expirationTimes);
    for (var a = l; 0 < a; ) {
      var n = 31 - el(a),
        f = 1 << n;
      (u[n] = -1), (a &= ~f);
    }
    e !== 0 && Fi(t, e, l);
  }
  function Cn() {
    return (pt & 6) === 0 ? (Ta(0), !1) : !0;
  }
  function Wf() {
    if (lt !== null) {
      if (St === 0) var t = lt.return;
      else (t = lt), (Vl = Ze = null), Ic(t), (vu = null), (ea = 0), (t = lt);
      for (; t !== null; ) Bo(t.alternate, t), (t = t.return);
      lt = null;
    }
  }
  function Du(t, l) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), ih(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Wf(),
      (gt = t),
      (lt = e = Se(t.current, null)),
      (nt = l),
      (St = 0),
      (cl = null),
      ($l = !1),
      (zu = xu(t, l)),
      (Xf = !1),
      (Ou = _l = Qf = we = be = zt = 0),
      (Cl = ba = null),
      (Zf = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var a = 31 - el(u),
          n = 1 << a;
        (l |= t[a]), (u &= ~n);
      }
    return (Fl = l), en(), e;
  }
  function xo(t, l) {
    (F = null),
      (G.H = Hl),
      l === ta
        ? ((l = Pr()), (St = 3))
        : l === kr
          ? ((l = Pr()), (St = 4))
          : (St =
              l === $s
                ? 8
                : l !== null &&
                    typeof l == "object" &&
                    typeof l.then == "function"
                  ? 6
                  : 1),
      (cl = l),
      lt === null && ((zt = 1), pn(t, yl(l, t.current)));
  }
  function Go() {
    var t = G.H;
    return (G.H = Hl), t === null ? Hl : t;
  }
  function Xo() {
    var t = G.A;
    return (G.A = Q0), t;
  }
  function kf() {
    (zt = 4),
      $l || ((nt & 4194176) !== nt && ml.current !== null) || (zu = !0),
      ((be & 134217727) === 0 && (we & 134217727) === 0) ||
        gt === null ||
        Pl(gt, nt, _l, !1);
  }
  function $f(t, l, e) {
    var u = pt;
    pt |= 2;
    var a = Go(),
      n = Xo();
    (gt !== t || nt !== l) && ((Nn = null), Du(t, l)), (l = !1);
    var f = zt;
    t: do
      try {
        if (St !== 0 && lt !== null) {
          var i = lt,
            d = cl;
          switch (St) {
            case 8:
              Wf(), (f = 6);
              break t;
            case 3:
            case 2:
            case 6:
              ml.current === null && (l = !0);
              var m = St;
              if (((St = 0), (cl = null), Mu(t, i, d, m), e && zu)) {
                f = 0;
                break t;
              }
              break;
            default:
              (m = St), (St = 0), (cl = null), Mu(t, i, d, m);
          }
        }
        V0(), (f = zt);
        break;
      } catch (A) {
        xo(t, A);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Vl = Ze = null),
      (pt = u),
      (G.H = a),
      (G.A = n),
      lt === null && ((gt = null), (nt = 0), en()),
      f
    );
  }
  function V0() {
    for (; lt !== null; ) Qo(lt);
  }
  function K0(t, l) {
    var e = pt;
    pt |= 2;
    var u = Go(),
      a = Xo();
    gt !== t || nt !== l
      ? ((Nn = null), (Un = Rl() + 500), Du(t, l))
      : (zu = xu(t, l));
    t: do
      try {
        if (St !== 0 && lt !== null) {
          l = lt;
          var n = cl;
          l: switch (St) {
            case 1:
              (St = 0), (cl = null), Mu(t, l, n, 1);
              break;
            case 2:
              if ($r(n)) {
                (St = 0), (cl = null), Zo(l);
                break;
              }
              (l = function () {
                St === 2 && gt === t && (St = 7), Bl(t);
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
              $r(n)
                ? ((St = 0), (cl = null), Zo(l))
                : ((St = 0), (cl = null), Mu(t, l, n, 7));
              break;
            case 5:
              var f = null;
              switch (lt.tag) {
                case 26:
                  f = lt.memoizedState;
                case 5:
                case 27:
                  var i = lt;
                  if (!f || gd(f)) {
                    (St = 0), (cl = null);
                    var d = i.sibling;
                    if (d !== null) lt = d;
                    else {
                      var m = i.return;
                      m !== null ? ((lt = m), Bn(m)) : (lt = null);
                    }
                    break l;
                  }
              }
              (St = 0), (cl = null), Mu(t, l, n, 5);
              break;
            case 6:
              (St = 0), (cl = null), Mu(t, l, n, 6);
              break;
            case 8:
              Wf(), (zt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        w0();
        break;
      } catch (A) {
        xo(t, A);
      }
    while (!0);
    return (
      (Vl = Ze = null),
      (G.H = u),
      (G.A = a),
      (pt = e),
      lt !== null ? 0 : ((gt = null), (nt = 0), en(), zt)
    );
  }
  function w0() {
    for (; lt !== null && !hy(); ) Qo(lt);
  }
  function Qo(t) {
    var l = io(t.alternate, t, Fl);
    (t.memoizedProps = t.pendingProps), l === null ? Bn(t) : (lt = l);
  }
  function Zo(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = eo(e, l, l.pendingProps, l.type, void 0, nt);
        break;
      case 11:
        l = eo(e, l, l.pendingProps, l.type.render, l.ref, nt);
        break;
      case 5:
        Ic(l);
      default:
        Bo(e, l), (l = lt = No(l, Fl)), (l = io(e, l, Fl));
    }
    (t.memoizedProps = t.pendingProps), l === null ? Bn(t) : (lt = l);
  }
  function Mu(t, l, e, u) {
    (Vl = Ze = null), Ic(l), (vu = null), (ea = 0);
    var a = l.return;
    try {
      if (B0(t, a, l, e, nt)) {
        (zt = 1), pn(t, yl(e, t.current)), (lt = null);
        return;
      }
    } catch (n) {
      if (a !== null) throw ((lt = a), n);
      (zt = 1), pn(t, yl(e, t.current)), (lt = null);
      return;
    }
    l.flags & 32768
      ? (ft || u === 1
          ? (t = !0)
          : zu || (nt & 536870912) !== 0
            ? (t = !1)
            : (($l = t = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = ml.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        Lo(l, t))
      : Bn(l);
  }
  function Bn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        Lo(l, $l);
        return;
      }
      t = l.return;
      var e = G0(l.alternate, l, Fl);
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
  function Lo(t, l) {
    do {
      var e = X0(t.alternate, t);
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
  function Vo(t, l, e, u, a, n, f, i, d, m) {
    var A = G.T,
      D = H.p;
    try {
      (H.p = 2), (G.T = null), J0(t, l, e, u, D, a, n, f, i, d, m);
    } finally {
      (G.T = A), (H.p = D);
    }
  }
  function J0(t, l, e, u, a, n, f, i) {
    do Ru();
    while (Je !== null);
    if ((pt & 6) !== 0) throw Error(r(327));
    var d = t.finishedWork;
    if (((u = t.finishedLanes), d === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), d === t.current))
      throw Error(r(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var m = d.lanes | d.childLanes;
    if (
      ((m |= xc),
      zy(t, u, m, n, f, i),
      t === gt && ((lt = gt = null), (nt = 0)),
      ((d.subtreeFlags & 10256) === 0 && (d.flags & 10256) === 0) ||
        Hn ||
        ((Hn = !0),
        (Vf = m),
        (Kf = e),
        F0(Qa, function () {
          return Ru(), null;
        })),
      (e = (d.flags & 15990) !== 0),
      (d.subtreeFlags & 15990) !== 0 || e
        ? ((e = G.T),
          (G.T = null),
          (n = H.p),
          (H.p = 2),
          (f = pt),
          (pt |= 4),
          j0(t, d),
          Ao(d, t),
          g0(ii, t.containerInfo),
          (wn = !!fi),
          (ii = fi = null),
          (t.current = d),
          _o(t, d.alternate, d),
          vy(),
          (pt = f),
          (H.p = n),
          (G.T = e))
        : (t.current = d),
      Hn ? ((Hn = !1), (Je = t), (_a = u)) : Ko(t, m),
      (m = t.pendingLanes),
      m === 0 && (_e = null),
      _y(d.stateNode),
      Bl(t),
      l !== null)
    )
      for (a = t.onRecoverableError, d = 0; d < l.length; d++)
        (m = l[d]), a(m.value, { componentStack: m.stack });
    return (
      (_a & 3) !== 0 && Ru(),
      (m = t.pendingLanes),
      (u & 4194218) !== 0 && (m & 42) !== 0
        ? t === wf
          ? Ea++
          : ((Ea = 0), (wf = t))
        : (Ea = 0),
      Ta(0),
      null
    );
  }
  function Ko(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), aa(l)));
  }
  function Ru() {
    if (Je !== null) {
      var t = Je,
        l = Vf;
      Vf = 0;
      var e = Ii(_a),
        u = G.T,
        a = H.p;
      try {
        if (((H.p = 32 > e ? 32 : e), (G.T = null), Je === null)) var n = !1;
        else {
          (e = Kf), (Kf = null);
          var f = Je,
            i = _a;
          if (((Je = null), (_a = 0), (pt & 6) !== 0)) throw Error(r(331));
          var d = pt;
          if (
            ((pt |= 4),
            Ro(f.current),
            Oo(f, f.current, i, e),
            (pt = d),
            Ta(0, !1),
            ll && typeof ll.onPostCommitFiberRoot == "function")
          )
            try {
              ll.onPostCommitFiberRoot(Yu, f);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (H.p = a), (G.T = u), Ko(t, l);
      }
    }
    return !1;
  }
  function wo(t, l, e) {
    (l = yl(e, l)),
      (l = hf(t.stateNode, l, 2)),
      (t = he(t, l, 2)),
      t !== null && (Gu(t, 2), Bl(t));
  }
  function vt(t, l, e) {
    if (t.tag === 3) wo(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          wo(l, t, e);
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (_e === null || !_e.has(u)))
          ) {
            (t = yl(e, t)),
              (e = Ws(2)),
              (u = he(l, e, 2)),
              u !== null && (ks(e, u, l, t), Gu(u, 2), Bl(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function Ff(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Z0();
      var a = new Set();
      u.set(l, a);
    } else (a = u.get(l)), a === void 0 && ((a = new Set()), u.set(l, a));
    a.has(e) ||
      ((Xf = !0), a.add(e), (t = W0.bind(null, t, l, e)), l.then(t, t));
  }
  function W0(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      gt === t &&
        (nt & e) === e &&
        (zt === 4 || (zt === 3 && (nt & 62914560) === nt && 300 > Rl() - Lf)
          ? (pt & 2) === 0 && Du(t, 0)
          : (Qf |= e),
        Ou === nt && (Ou = 0)),
      Bl(t);
  }
  function Jo(t, l) {
    l === 0 && (l = $i()), (t = ce(t, l)), t !== null && (Gu(t, l), Bl(t));
  }
  function k0(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), Jo(t, e);
  }
  function $0(t, l) {
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
        throw Error(r(314));
    }
    u !== null && u.delete(l), Jo(t, e);
  }
  function F0(t, l) {
    return hc(t, l);
  }
  var qn = null,
    Uu = null,
    Pf = !1,
    jn = !1,
    If = !1,
    We = 0;
  function Bl(t) {
    t !== Uu &&
      t.next === null &&
      (Uu === null ? (qn = Uu = t) : (Uu = Uu.next = t)),
      (jn = !0),
      Pf || ((Pf = !0), I0(P0));
  }
  function Ta(t, l) {
    if (!If && jn) {
      If = !0;
      do
        for (var e = !1, u = qn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var f = u.suspendedLanes,
                i = u.pingedLanes;
              (n = (1 << (31 - el(42 | t) + 1)) - 1),
                (n &= a & ~(f & ~i)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), $o(u, n));
          } else
            (n = nt),
              (n = Va(u, u === gt ? n : 0)),
              (n & 3) === 0 || xu(u, n) || ((e = !0), $o(u, n));
          u = u.next;
        }
      while (e);
      If = !1;
    }
  }
  function P0() {
    jn = Pf = !1;
    var t = 0;
    We !== 0 && (fh() && (t = We), (We = 0));
    for (var l = Rl(), e = null, u = qn; u !== null; ) {
      var a = u.next,
        n = Wo(u, l);
      n === 0
        ? ((u.next = null),
          e === null ? (qn = a) : (e.next = a),
          a === null && (Uu = e))
        : ((e = u), (t !== 0 || (n & 3) !== 0) && (jn = !0)),
        (u = a);
    }
    Ta(t);
  }
  function Wo(t, l) {
    for (
      var e = t.suspendedLanes,
        u = t.pingedLanes,
        a = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - el(n),
        i = 1 << f,
        d = a[f];
      d === -1
        ? ((i & e) === 0 || (i & u) !== 0) && (a[f] = Ay(i, l))
        : d <= l && (t.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((l = gt),
      (e = nt),
      (e = Va(t, t === l ? e : 0)),
      (u = t.callbackNode),
      e === 0 || (t === l && St === 2) || t.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && vc(u),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || xu(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((u !== null && vc(u), Ii(e))) {
        case 2:
        case 8:
          e = Ji;
          break;
        case 32:
          e = Qa;
          break;
        case 268435456:
          e = Wi;
          break;
        default:
          e = Qa;
      }
      return (
        (u = ko.bind(null, t)),
        (e = hc(e, u)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      u !== null && u !== null && vc(u),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ko(t, l) {
    var e = t.callbackNode;
    if (Ru() && t.callbackNode !== e) return null;
    var u = nt;
    return (
      (u = Va(t, t === gt ? u : 0)),
      u === 0
        ? null
        : (jo(t, u, l),
          Wo(t, Rl()),
          t.callbackNode != null && t.callbackNode === e
            ? ko.bind(null, t)
            : null)
    );
  }
  function $o(t, l) {
    if (Ru()) return null;
    jo(t, l, !0);
  }
  function I0(t) {
    rh(function () {
      (pt & 6) !== 0 ? hc(wi, t) : t();
    });
  }
  function ti() {
    return We === 0 && (We = ki()), We;
  }
  function Fo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : ka("" + t);
  }
  function Po(t, l) {
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
  function th(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = Fo((a[Pt] || null).action),
        f = u.submitter;
      f &&
        ((l = (l = f[Pt] || null)
          ? Fo(l.formAction)
          : f.getAttribute("formAction")),
        l !== null && ((n = l), (f = null)));
      var i = new Ia("action", "action", null, u, a);
      t.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (We !== 0) {
                  var d = f ? Po(a, f) : new FormData(a);
                  rf(
                    e,
                    { pending: !0, data: d, method: a.method, action: n },
                    null,
                    d,
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (d = f ? Po(a, f) : new FormData(a)),
                  rf(
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
  for (var li = 0; li < Lr.length; li++) {
    var ei = Lr[li],
      lh = ei.toLowerCase(),
      eh = ei[0].toUpperCase() + ei.slice(1);
    Tl(lh, "on" + eh);
  }
  Tl(xr, "onAnimationEnd"),
    Tl(Gr, "onAnimationIteration"),
    Tl(Xr, "onAnimationStart"),
    Tl("dblclick", "onDoubleClick"),
    Tl("focusin", "onFocus"),
    Tl("focusout", "onBlur"),
    Tl(b0, "onTransitionRun"),
    Tl(_0, "onTransitionStart"),
    Tl(E0, "onTransitionCancel"),
    Tl(Qr, "onTransitionEnd"),
    uu("onMouseEnter", ["mouseout", "mouseover"]),
    uu("onMouseLeave", ["mouseout", "mouseover"]),
    uu("onPointerEnter", ["pointerout", "pointerover"]),
    uu("onPointerLeave", ["pointerout", "pointerover"]),
    Re(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Re(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Re(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Re(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Re(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var pa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    uh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pa),
    );
  function Io(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e],
        a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var f = u.length - 1; 0 <= f; f--) {
            var i = u[f],
              d = i.instance,
              m = i.currentTarget;
            if (((i = i.listener), d !== n && a.isPropagationStopped()))
              break t;
            (n = i), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              Tn(A);
            }
            (a.currentTarget = null), (n = d);
          }
        else
          for (f = 0; f < u.length; f++) {
            if (
              ((i = u[f]),
              (d = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              d !== n && a.isPropagationStopped())
            )
              break t;
            (n = i), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              Tn(A);
            }
            (a.currentTarget = null), (n = d);
          }
      }
    }
  }
  function ut(t, l) {
    var e = l[gc];
    e === void 0 && (e = l[gc] = new Set());
    var u = t + "__bubble";
    e.has(u) || (td(l, t, 2, !1), e.add(u));
  }
  function ui(t, l, e) {
    var u = 0;
    l && (u |= 4), td(e, t, u, l);
  }
  var Yn = "_reactListening" + Math.random().toString(36).slice(2);
  function ai(t) {
    if (!t[Yn]) {
      (t[Yn] = !0),
        er.forEach(function (e) {
          e !== "selectionchange" && (uh.has(e) || ui(e, !1, t), ui(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Yn] || ((l[Yn] = !0), ui("selectionchange", !1, l));
    }
  }
  function td(t, l, e, u) {
    switch (pd(l)) {
      case 2:
        var a = Rh;
        break;
      case 8:
        a = Uh;
        break;
      default:
        a = gi;
    }
    (e = a.bind(null, l, e, t)),
      (a = void 0),
      !zc ||
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
  function ni(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var i = u.stateNode.containerInfo;
          if (i === a || (i.nodeType === 8 && i.parentNode === a)) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var d = f.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = f.stateNode.containerInfo),
                d === a || (d.nodeType === 8 && d.parentNode === a))
              )
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (((f = Me(i)), f === null)) return;
            if (((d = f.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              u = n = f;
              continue t;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    hr(function () {
      var m = n,
        A = pc(e),
        D = [];
      t: {
        var _ = Zr.get(t);
        if (_ !== void 0) {
          var p = Ia,
            q = t;
          switch (t) {
            case "keypress":
              if (Fa(e) === 0) break t;
            case "keydown":
            case "keyup":
              p = $y;
              break;
            case "focusin":
              (q = "focus"), (p = Rc);
              break;
            case "focusout":
              (q = "blur"), (p = Rc);
              break;
            case "beforeblur":
            case "afterblur":
              p = Rc;
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
              p = gr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = xy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Iy;
              break;
            case xr:
            case Gr:
            case Xr:
              p = Qy;
              break;
            case Qr:
              p = l0;
              break;
            case "scroll":
            case "scrollend":
              p = jy;
              break;
            case "wheel":
              p = u0;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = br;
              break;
            case "toggle":
            case "beforetoggle":
              p = n0;
          }
          var V = (l & 4) !== 0,
            Ot = !V && (t === "scroll" || t === "scrollend"),
            g = V ? (_ !== null ? _ + "Capture" : null) : _;
          V = [];
          for (var v = m, S; v !== null; ) {
            var z = v;
            if (
              ((S = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                S === null ||
                g === null ||
                ((z = Zu(v, g)), z != null && V.push(Aa(v, z, S))),
              Ot)
            )
              break;
            v = v.return;
          }
          0 < V.length &&
            ((_ = new p(_, q, null, e, A)), D.push({ event: _, listeners: V }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (p = t === "mouseout" || t === "pointerout"),
            _ &&
              e !== Tc &&
              (q = e.relatedTarget || e.fromElement) &&
              (Me(q) || q[tu]))
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
                (q = q ? Me(q) : null),
                q !== null &&
                  ((Ot = L(q)),
                  (V = q.tag),
                  q !== Ot || (V !== 5 && V !== 27 && V !== 6)) &&
                  (q = null))
              : ((p = null), (q = m)),
            p !== q)
          ) {
            if (
              ((V = gr),
              (z = "onMouseLeave"),
              (g = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((V = br),
                (z = "onPointerLeave"),
                (g = "onPointerEnter"),
                (v = "pointer")),
              (Ot = p == null ? _ : Qu(p)),
              (S = q == null ? _ : Qu(q)),
              (_ = new V(z, v + "leave", p, e, A)),
              (_.target = Ot),
              (_.relatedTarget = S),
              (z = null),
              Me(A) === m &&
                ((V = new V(g, v + "enter", q, e, A)),
                (V.target = S),
                (V.relatedTarget = Ot),
                (z = V)),
              (Ot = z),
              p && q)
            )
              l: {
                for (V = p, g = q, v = 0, S = V; S; S = Nu(S)) v++;
                for (S = 0, z = g; z; z = Nu(z)) S++;
                for (; 0 < v - S; ) (V = Nu(V)), v--;
                for (; 0 < S - v; ) (g = Nu(g)), S--;
                for (; v--; ) {
                  if (V === g || (g !== null && V === g.alternate)) break l;
                  (V = Nu(V)), (g = Nu(g));
                }
                V = null;
              }
            else V = null;
            p !== null && ld(D, _, p, V, !1),
              q !== null && Ot !== null && ld(D, Ot, q, V, !0);
          }
        }
        t: {
          if (
            ((_ = m ? Qu(m) : window),
            (p = _.nodeName && _.nodeName.toLowerCase()),
            p === "select" || (p === "input" && _.type === "file"))
          )
            var B = Dr;
          else if (zr(_))
            if (Mr) B = v0;
            else {
              B = y0;
              var tt = d0;
            }
          else
            (p = _.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? m && Ec(m.elementType) && (B = Dr)
                : (B = h0);
          if (B && (B = B(t, m))) {
            Or(D, B, e, A);
            break t;
          }
          tt && tt(t, _, m),
            t === "focusout" &&
              m &&
              _.type === "number" &&
              m.memoizedProps.value != null &&
              _c(_, "number", _.value);
        }
        switch (((tt = m ? Qu(m) : window), t)) {
          case "focusin":
            (zr(tt) || tt.contentEditable === "true") &&
              ((ru = tt), (qc = m), ($u = null));
            break;
          case "focusout":
            $u = qc = ru = null;
            break;
          case "mousedown":
            jc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (jc = !1), jr(D, e, A);
            break;
          case "selectionchange":
            if (S0) break;
          case "keydown":
          case "keyup":
            jr(D, e, A);
        }
        var Y;
        if (Nc)
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
          iu
            ? pr(t, e) && (Q = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (_r &&
            e.locale !== "ko" &&
            (iu || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && iu && (Y = vr())
              : ((ne = A),
                (Oc = "value" in ne ? ne.value : ne.textContent),
                (iu = !0))),
          (tt = xn(m, Q)),
          0 < tt.length &&
            ((Q = new Sr(Q, t, null, e, A)),
            D.push({ event: Q, listeners: tt }),
            Y ? (Q.data = Y) : ((Y = Ar(e)), Y !== null && (Q.data = Y)))),
          (Y = f0 ? i0(t, e) : r0(t, e)) &&
            ((Q = xn(m, "onBeforeInput")),
            0 < Q.length &&
              ((tt = new Sr("onBeforeInput", "beforeinput", null, e, A)),
              D.push({ event: tt, listeners: Q }),
              (tt.data = Y))),
          th(D, t, m, e, A);
      }
      Io(D, l);
    });
  }
  function Aa(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function xn(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t,
        n = a.stateNode;
      (a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          n === null ||
          ((a = Zu(t, e)),
          a != null && u.unshift(Aa(t, a, n)),
          (a = Zu(t, l)),
          a != null && u.push(Aa(t, a, n))),
        (t = t.return);
    }
    return u;
  }
  function Nu(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ld(t, l, e, u, a) {
    for (var n = l._reactName, f = []; e !== null && e !== u; ) {
      var i = e,
        d = i.alternate,
        m = i.stateNode;
      if (((i = i.tag), d !== null && d === u)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        m === null ||
        ((d = m),
        a
          ? ((m = Zu(e, n)), m != null && f.unshift(Aa(e, m, d)))
          : a || ((m = Zu(e, n)), m != null && f.push(Aa(e, m, d)))),
        (e = e.return);
    }
    f.length !== 0 && t.push({ event: l, listeners: f });
  }
  var ah = /\r\n?/g,
    nh = /\u0000|\uFFFD/g;
  function ed(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ah,
        `
`,
      )
      .replace(nh, "");
  }
  function ud(t, l) {
    return (l = ed(l)), ed(t) === l;
  }
  function Gn() {}
  function ht(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        typeof u == "string"
          ? l === "body" || (l === "textarea" && u === "") || nu(t, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            l !== "body" &&
            nu(t, "" + u);
        break;
      case "className":
        wa(t, "class", u);
        break;
      case "tabIndex":
        wa(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        wa(t, e, u);
        break;
      case "style":
        dr(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          wa(t, "data", u);
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
        (u = ka("" + u)), t.setAttribute(e, u);
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
        (u = ka("" + u)), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Gn);
        break;
      case "onScroll":
        u != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        u != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(r(60));
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
        (e = ka("" + u)),
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
        ut("beforetoggle", t), ut("toggle", t), Ka(t, "popover", u);
        break;
      case "xlinkActuate":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        xl(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        xl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        xl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        xl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Ka(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = By.get(e) || e), Ka(t, e, u));
    }
  }
  function ci(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        dr(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? nu(t, u)
          : (typeof u == "number" || typeof u == "bigint") && nu(t, "" + u);
        break;
      case "onScroll":
        u != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        u != null && ut("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Gn);
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
        if (!ur.hasOwnProperty(e))
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
                : Ka(t, e, u);
          }
    }
  }
  function Qt(t, l, e) {
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
            var f = e[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, l));
                default:
                  ht(t, l, n, f, e, null);
              }
          }
        a && ht(t, l, "srcSet", e.srcSet, e, null),
          u && ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        ut("invalid", t);
        var i = (n = f = a = null),
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
                  f = A;
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
                  i = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(r(137, l));
                  break;
                default:
                  ht(t, l, u, A, e, null);
              }
          }
        ir(t, n, i, d, m, f, a, !1), Ja(t);
        return;
      case "select":
        ut("invalid", t), (u = f = n = null);
        for (a in e)
          if (e.hasOwnProperty(a) && ((i = e[a]), i != null))
            switch (a) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                u = i;
              default:
                ht(t, l, a, i, e, null);
            }
        (l = n),
          (e = f),
          (t.multiple = !!u),
          l != null ? au(t, !!u, l, !1) : e != null && au(t, !!u, e, !0);
        return;
      case "textarea":
        ut("invalid", t), (n = a = u = null);
        for (f in e)
          if (e.hasOwnProperty(f) && ((i = e[f]), i != null))
            switch (f) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                a = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(r(91));
                break;
              default:
                ht(t, l, f, i, e, null);
            }
        sr(t, u, a, n), Ja(t);
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
        for (u = 0; u < pa.length; u++) ut(pa[u], t);
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
                throw Error(r(137, l));
              default:
                ht(t, l, m, u, e, null);
            }
        return;
      default:
        if (Ec(l)) {
          for (A in e)
            e.hasOwnProperty(A) &&
              ((u = e[A]), u !== void 0 && ci(t, l, A, u, e, void 0));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && ((u = e[i]), u != null && ht(t, l, i, u, e, null));
  }
  function ch(t, l, e, u) {
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
          f = null,
          i = null,
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
                f = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(137, l));
                break;
              default:
                p !== D && ht(t, l, _, p, u, D);
            }
        }
        bc(t, f, i, d, m, A, n, a);
        return;
      case "select":
        p = f = i = _ = null;
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
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== d && ht(t, l, a, n, u, d);
            }
        (l = i),
          (e = f),
          (u = p),
          _ != null
            ? au(t, !!e, _, !1)
            : !!u != !!e &&
              (l != null ? au(t, !!e, l, !0) : au(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        p = _ = null;
        for (i in e)
          if (
            ((a = e[i]),
            e.hasOwnProperty(i) && a != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, l, i, null, u, a);
            }
        for (f in u)
          if (
            ((a = u[f]),
            (n = e[f]),
            u.hasOwnProperty(f) && (a != null || n != null))
          )
            switch (f) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                p = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== n && ht(t, l, f, a, u, n);
            }
        rr(t, _, p);
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
        for (var V in e)
          (_ = e[V]),
            e.hasOwnProperty(V) &&
              _ != null &&
              !u.hasOwnProperty(V) &&
              ht(t, l, V, null, u, _);
        for (m in u)
          if (
            ((_ = u[m]),
            (p = e[m]),
            u.hasOwnProperty(m) && _ !== p && (_ != null || p != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(137, l));
                break;
              default:
                ht(t, l, m, _, u, p);
            }
        return;
      default:
        if (Ec(l)) {
          for (var Ot in e)
            (_ = e[Ot]),
              e.hasOwnProperty(Ot) &&
                _ !== void 0 &&
                !u.hasOwnProperty(Ot) &&
                ci(t, l, Ot, void 0, u, _);
          for (A in u)
            (_ = u[A]),
              (p = e[A]),
              !u.hasOwnProperty(A) ||
                _ === p ||
                (_ === void 0 && p === void 0) ||
                ci(t, l, A, _, u, p);
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
  var fi = null,
    ii = null;
  function Xn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ad(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nd(t, l) {
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
  function ri(t, l) {
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
  var si = null;
  function fh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === si
        ? !1
        : ((si = t), !0)
      : ((si = null), !1);
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0,
    ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fd = typeof Promise == "function" ? Promise : void 0,
    rh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fd < "u"
          ? function (t) {
              return fd.resolve(null).then(t).catch(sh);
            }
          : cd;
  function sh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function oi(t, l) {
    var e = l,
      u = 0;
    do {
      var a = e.nextSibling;
      if ((t.removeChild(e), a && a.nodeType === 8))
        if (((e = a.data), e === "/$")) {
          if (u === 0) {
            t.removeChild(a), Ha(l);
            return;
          }
          u--;
        } else (e !== "$" && e !== "$?" && e !== "$!") || u++;
      e = a;
    } while (e);
    Ha(l);
  }
  function di(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          di(e), Sc(e);
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
  function oh(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (u) {
        if (!t[Xu])
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
      if (((t = zl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function dh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = zl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function zl(t) {
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
  function id(t) {
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
  function rd(t, l, e) {
    switch (((l = Xn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var El = new Map(),
    sd = new Set();
  function Qn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Il = H.d;
  H.d = { f: yh, r: hh, D: vh, C: mh, L: gh, m: Sh, X: _h, S: bh, M: Eh };
  function yh() {
    var t = Il.f(),
      l = Cn();
    return t || l;
  }
  function hh(t) {
    var l = lu(t);
    l !== null && l.tag === 5 && l.type === "form" ? js(l) : Il.r(t);
  }
  var Hu = typeof document > "u" ? null : document;
  function od(t, l, e) {
    var u = Hu;
    if (u && typeof l == "string" && l) {
      var a = ol(l);
      (a = 'link[rel="' + t + '"][href="' + a + '"]'),
        typeof e == "string" && (a += '[crossorigin="' + e + '"]'),
        sd.has(a) ||
          (sd.add(a),
          (t = { rel: t, crossOrigin: e, href: l }),
          u.querySelector(a) === null &&
            ((l = u.createElement("link")),
            Qt(l, "link", t),
            qt(l),
            u.head.appendChild(l)));
    }
  }
  function vh(t) {
    Il.D(t), od("dns-prefetch", t, null);
  }
  function mh(t, l) {
    Il.C(t, l), od("preconnect", t, l);
  }
  function gh(t, l, e) {
    Il.L(t, l, e);
    var u = Hu;
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
          n = Bu(t);
      }
      El.has(n) ||
        ((t = ct(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e,
        )),
        El.set(n, t),
        u.querySelector(a) !== null ||
          (l === "style" && u.querySelector(za(n))) ||
          (l === "script" && u.querySelector(Oa(n))) ||
          ((l = u.createElement("link")),
          Qt(l, "link", t),
          qt(l),
          u.head.appendChild(l)));
    }
  }
  function Sh(t, l) {
    Il.m(t, l);
    var e = Hu;
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
          n = Bu(t);
      }
      if (
        !El.has(n) &&
        ((t = ct({ rel: "modulepreload", href: t }, l)),
        El.set(n, t),
        e.querySelector(a) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Oa(n))) return;
        }
        (u = e.createElement("link")),
          Qt(u, "link", t),
          qt(u),
          e.head.appendChild(u);
      }
    }
  }
  function bh(t, l, e) {
    Il.S(t, l, e);
    var u = Hu;
    if (u && t) {
      var a = eu(u).hoistableStyles,
        n = Cu(t);
      l = l || "default";
      var f = a.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if ((f = u.querySelector(za(n)))) i.loading = 5;
        else {
          (t = ct({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = El.get(n)) && yi(t, e);
          var d = (f = u.createElement("link"));
          qt(d),
            Qt(d, "link", t),
            (d._p = new Promise(function (m, A) {
              (d.onload = m), (d.onerror = A);
            })),
            d.addEventListener("load", function () {
              i.loading |= 1;
            }),
            d.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Zn(f, l, u);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: i }),
          a.set(n, f);
      }
    }
  }
  function _h(t, l) {
    Il.X(t, l);
    var e = Hu;
    if (e && t) {
      var u = eu(e).hoistableScripts,
        a = Bu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Oa(a))),
        n ||
          ((t = ct({ src: t, async: !0 }, l)),
          (l = El.get(a)) && hi(t, l),
          (n = e.createElement("script")),
          qt(n),
          Qt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function Eh(t, l) {
    Il.M(t, l);
    var e = Hu;
    if (e && t) {
      var u = eu(e).hoistableScripts,
        a = Bu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Oa(a))),
        n ||
          ((t = ct({ src: t, async: !0, type: "module" }, l)),
          (l = El.get(a)) && hi(t, l),
          (n = e.createElement("script")),
          qt(n),
          Qt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function dd(t, l, e, u) {
    var a = (a = ee.current) ? Qn(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Cu(e.href)),
            (e = eu(a).hoistableStyles),
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
          var n = eu(a).hoistableStyles,
            f = n.get(t);
          if (
            (f ||
              ((a = a.ownerDocument || a),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, f),
              (n = a.querySelector(za(t))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              El.has(t) ||
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
                El.set(t, e),
                n || Th(a, t, e, f.state))),
            l && u === null)
          )
            throw Error(r(528, ""));
          return f;
        }
        if (l && u !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Bu(e)),
              (e = eu(a).hoistableScripts),
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
        throw Error(r(444, t));
    }
  }
  function Cu(t) {
    return 'href="' + ol(t) + '"';
  }
  function za(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yd(t) {
    return ct({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Th(t, l, e, u) {
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
        Qt(l, "link", e),
        qt(l),
        t.head.appendChild(l));
  }
  function Bu(t) {
    return '[src="' + ol(t) + '"]';
  }
  function Oa(t) {
    return "script[async]" + t;
  }
  function hd(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var u = t.querySelector('style[data-href~="' + ol(e.href) + '"]');
          if (u) return (l.instance = u), qt(u), u;
          var a = ct({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (t.ownerDocument || t).createElement("style")),
            qt(u),
            Qt(u, "style", a),
            Zn(u, e.precedence, t),
            (l.instance = u)
          );
        case "stylesheet":
          a = Cu(e.href);
          var n = t.querySelector(za(a));
          if (n) return (l.state.loading |= 4), (l.instance = n), qt(n), n;
          (u = yd(e)),
            (a = El.get(a)) && yi(u, a),
            (n = (t.ownerDocument || t).createElement("link")),
            qt(n);
          var f = n;
          return (
            (f._p = new Promise(function (i, d) {
              (f.onload = i), (f.onerror = d);
            })),
            Qt(n, "link", u),
            (l.state.loading |= 4),
            Zn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = Bu(e.src)),
            (a = t.querySelector(Oa(n)))
              ? ((l.instance = a), qt(a), a)
              : ((u = e),
                (a = El.get(n)) && ((u = ct({}, e)), hi(u, a)),
                (t = t.ownerDocument || t),
                (a = t.createElement("script")),
                qt(a),
                Qt(a, "link", u),
                t.head.appendChild(a),
                (l.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((u = l.instance), (l.state.loading |= 4), Zn(u, e.precedence, t));
    return l.instance;
  }
  function Zn(t, l, e) {
    for (
      var u = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = u.length ? u[u.length - 1] : null,
        n = a,
        f = 0;
      f < u.length;
      f++
    ) {
      var i = u[f];
      if (i.dataset.precedence === l) n = i;
      else if (n !== a) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function yi(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function hi(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Ln = null;
  function vd(t, l, e) {
    if (Ln === null) {
      var u = new Map(),
        a = (Ln = new Map());
      a.set(e, u);
    } else (a = Ln), (u = a.get(e)), u || ((u = new Map()), a.set(e, u));
    if (u.has(t)) return u;
    for (
      u.set(t, null), e = e.getElementsByTagName(t), a = 0;
      a < e.length;
      a++
    ) {
      var n = e[a];
      if (
        !(
          n[Xu] ||
          n[Lt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(l) || "";
        f = t + f;
        var i = u.get(f);
        i ? i.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function md(t, l, e) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null,
      );
  }
  function ph(t, l, e) {
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
  function gd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Da = null;
  function Ah() {}
  function zh(t, l, e) {
    if (Da === null) throw Error(r(475));
    var u = Da;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = Cu(e.href),
          n = t.querySelector(za(a));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (u.count++, (u = Vn.bind(u)), t.then(u, u)),
            (l.state.loading |= 4),
            (l.instance = n),
            qt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = yd(e)),
          (a = El.get(a)) && yi(e, a),
          (n = n.createElement("link")),
          qt(n);
        var f = n;
        (f._p = new Promise(function (i, d) {
          (f.onload = i), (f.onerror = d);
        })),
          Qt(n, "link", e),
          (l.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (u.count++,
          (l = Vn.bind(u)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function Oh() {
    if (Da === null) throw Error(r(475));
    var t = Da;
    return (
      t.stylesheets && t.count === 0 && vi(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && vi(t, t.stylesheets), t.unsuspend)) {
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
  function Vn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) vi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Kn = null;
  function vi(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Kn = new Map()),
        l.forEach(Dh, t),
        (Kn = null),
        Vn.call(t));
  }
  function Dh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Kn.get(t);
      if (e) var u = e.get(null);
      else {
        (e = new Map()), Kn.set(t, e);
        for (
          var a = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < a.length;
          n++
        ) {
          var f = a[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (e.set(f.dataset.precedence, f), (u = f));
        }
        u && e.set(null, u);
      }
      (a = l.instance),
        (f = a.getAttribute("data-precedence")),
        (n = e.get(f) || u),
        n === u && e.set(null, a),
        e.set(f, a),
        this.count++,
        (u = Vn.bind(this)),
        a.addEventListener("load", u),
        a.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(a, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(a, t.firstChild)),
        (l.state.loading |= 4);
    }
  }
  var Ma = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: at,
    _currentValue2: at,
    _threadCount: 0,
  };
  function Mh(t, l, e, u, a, n, f, i) {
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
      (this.expirationTimes = mc(-1)),
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
      (this.entanglements = mc(0)),
      (this.hiddenUpdates = mc(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = a),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Sd(t, l, e, u, a, n, f, i, d, m, A, D) {
    return (
      (t = new Mh(t, l, e, f, i, d, m, D)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = bl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = wc()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: u, isDehydrated: e, cache: l }),
      Df(n),
      t
    );
  }
  function bd(t) {
    return t ? ((t = du), t) : du;
  }
  function _d(t, l, e, u, a, n) {
    (a = bd(a)),
      u.context === null ? (u.context = a) : (u.pendingContext = a),
      (u = ye(l)),
      (u.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (e = he(t, u, l)),
      e !== null && (kt(e, t, l), oa(e, t, l));
  }
  function Ed(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function mi(t, l) {
    Ed(t, l), (t = t.alternate) && Ed(t, l);
  }
  function Td(t) {
    if (t.tag === 13) {
      var l = ce(t, 67108864);
      l !== null && kt(l, t, 67108864), mi(t, 67108864);
    }
  }
  var wn = !0;
  function Rh(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = H.p;
    try {
      (H.p = 2), gi(t, l, e, u);
    } finally {
      (H.p = n), (G.T = a);
    }
  }
  function Uh(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = H.p;
    try {
      (H.p = 8), gi(t, l, e, u);
    } finally {
      (H.p = n), (G.T = a);
    }
  }
  function gi(t, l, e, u) {
    if (wn) {
      var a = Si(u);
      if (a === null) ni(t, l, u, Jn, e), Ad(t, u);
      else if (Hh(a, t, l, e, u)) u.stopPropagation();
      else if ((Ad(t, u), l & 4 && -1 < Nh.indexOf(t))) {
        for (; a !== null; ) {
          var n = lu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = De(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var d = 1 << (31 - el(f));
                      (i.entanglements[1] |= d), (f &= ~d);
                    }
                    Bl(n), (pt & 6) === 0 && ((Un = Rl() + 500), Ta(0));
                  }
                }
                break;
              case 13:
                (i = ce(n, 2)), i !== null && kt(i, n, 2), Cn(), mi(n, 2);
            }
          if (((n = Si(u)), n === null && ni(t, l, u, Jn, e), n === a)) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else ni(t, l, u, null, e);
    }
  }
  function Si(t) {
    return (t = pc(t)), bi(t);
  }
  var Jn = null;
  function bi(t) {
    if (((Jn = null), (t = Me(t)), t !== null)) {
      var l = L(t);
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
    return (Jn = t), null;
  }
  function pd(t) {
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
        switch (my()) {
          case wi:
            return 2;
          case Ji:
            return 8;
          case Qa:
          case gy:
            return 32;
          case Wi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _i = !1,
    Ee = null,
    Te = null,
    pe = null,
    Ra = new Map(),
    Ua = new Map(),
    Ae = [],
    Nh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Ad(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ee = null;
        break;
      case "dragenter":
      case "dragleave":
        Te = null;
        break;
      case "mouseover":
      case "mouseout":
        pe = null;
        break;
      case "pointerover":
      case "pointerout":
        Ra.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ua.delete(l.pointerId);
    }
  }
  function Na(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [a],
        }),
        l !== null && ((l = lu(l)), l !== null && Td(l)),
        t)
      : ((t.eventSystemFlags |= u),
        (l = t.targetContainers),
        a !== null && l.indexOf(a) === -1 && l.push(a),
        t);
  }
  function Hh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return (Ee = Na(Ee, t, l, e, u, a)), !0;
      case "dragenter":
        return (Te = Na(Te, t, l, e, u, a)), !0;
      case "mouseover":
        return (pe = Na(pe, t, l, e, u, a)), !0;
      case "pointerover":
        var n = a.pointerId;
        return Ra.set(n, Na(Ra.get(n) || null, t, l, e, u, a)), !0;
      case "gotpointercapture":
        return (
          (n = a.pointerId), Ua.set(n, Na(Ua.get(n) || null, t, l, e, u, a)), !0
        );
    }
    return !1;
  }
  function zd(t) {
    var l = Me(t.target);
    if (l !== null) {
      var e = L(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = mt(e)), l !== null)) {
            (t.blockedOn = l),
              Oy(t.priority, function () {
                if (e.tag === 13) {
                  var u = fl(),
                    a = ce(e, u);
                  a !== null && kt(a, e, u), mi(e, u);
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
  function Wn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Si(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(e.type, e);
        (Tc = u), e.target.dispatchEvent(u), (Tc = null);
      } else return (l = lu(e)), l !== null && Td(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function Od(t, l, e) {
    Wn(t) && e.delete(l);
  }
  function Ch() {
    (_i = !1),
      Ee !== null && Wn(Ee) && (Ee = null),
      Te !== null && Wn(Te) && (Te = null),
      pe !== null && Wn(pe) && (pe = null),
      Ra.forEach(Od),
      Ua.forEach(Od);
  }
  function kn(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      _i ||
        ((_i = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Ch)));
  }
  var $n = null;
  function Dd(t) {
    $n !== t &&
      (($n = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        $n === t && ($n = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            u = t[l + 1],
            a = t[l + 2];
          if (typeof u != "function") {
            if (bi(u || e) === null) continue;
            break;
          }
          var n = lu(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            rf(n, { pending: !0, data: a, method: e.method, action: u }, u, a));
        }
      }));
  }
  function Ha(t) {
    function l(d) {
      return kn(d, t);
    }
    Ee !== null && kn(Ee, t),
      Te !== null && kn(Te, t),
      pe !== null && kn(pe, t),
      Ra.forEach(l),
      Ua.forEach(l);
    for (var e = 0; e < Ae.length; e++) {
      var u = Ae[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < Ae.length && ((e = Ae[0]), e.blockedOn === null); )
      zd(e), e.blockedOn === null && Ae.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (u = 0; u < e.length; u += 3) {
        var a = e[u],
          n = e[u + 1],
          f = a[Pt] || null;
        if (typeof n == "function") f || Dd(e);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((a = n), (f = n[Pt] || null))) i = f.formAction;
            else if (bi(a) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? (e[u + 1] = i) : (e.splice(u, 3), (u -= 3)),
            Dd(e);
        }
      }
  }
  function Ei(t) {
    this._internalRoot = t;
  }
  (Fn.prototype.render = Ei.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(r(409));
      var e = l.current,
        u = fl();
      _d(e, u, t, l, null, null);
    }),
    (Fn.prototype.unmount = Ei.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          t.tag === 0 && Ru(),
            _d(t.current, 2, null, t, null, null),
            Cn(),
            (l[tu] = null);
        }
      });
  function Fn(t) {
    this._internalRoot = t;
  }
  Fn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = tr();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Ae.length && l !== 0 && l < Ae[e].priority; e++);
      Ae.splice(e, 0, t), e === 0 && zd(t);
    }
  };
  var Md = s.version;
  if (Md !== "19.0.0") throw Error(r(527, Md, "19.0.0"));
  H.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = M(l)),
      (t = t !== null ? Z(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Bh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Me,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pn.isDisabled && Pn.supportsFiber)
      try {
        (Yu = Pn.inject(Bh)), (ll = Pn);
      } catch {}
  }
  return (
    (Ba.createRoot = function (t, l) {
      if (!h(t)) throw Error(r(299));
      var e = !1,
        u = "",
        a = Vs,
        n = Ks,
        f = ws,
        i = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (a = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (i = l.unstable_transitionCallbacks)),
        (l = Sd(t, 1, !1, null, null, e, u, a, n, f, i, null)),
        (t[tu] = l.current),
        ai(t.nodeType === 8 ? t.parentNode : t),
        new Ei(l)
      );
    }),
    (Ba.hydrateRoot = function (t, l, e) {
      if (!h(t)) throw Error(r(299));
      var u = !1,
        a = "",
        n = Vs,
        f = Ks,
        i = ws,
        d = null,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (u = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (f = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (m = e.formState)),
        (l = Sd(t, 1, !0, l, e ?? null, u, a, n, f, i, d, m)),
        (l.context = bd(null)),
        (e = l.current),
        (u = fl()),
        (a = ye(u)),
        (a.callback = null),
        he(e, a, u),
        (l.current.lanes = u),
        Gu(l, u),
        Bl(l),
        (t[tu] = l.current),
        ai(t),
        new Fn(l)
      );
    }),
    (Ba.version = "19.0.0"),
    Ba
  );
}
var xd;
function Vh() {
  if (xd) return Ai.exports;
  xd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), (Ai.exports = Lh()), Ai.exports;
}
var Kh = Vh(),
  Mi = { exports: {} },
  Ri = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd;
function wh() {
  if (Gd) return Ri;
  Gd = 1;
  var c = fc();
  function s(E, b) {
    return (E === b && (E !== 0 || 1 / E === 1 / b)) || (E !== E && b !== b);
  }
  var o = typeof Object.is == "function" ? Object.is : s,
    r = c.useSyncExternalStore,
    h = c.useRef,
    T = c.useEffect,
    O = c.useMemo,
    U = c.useDebugValue;
  return (
    (Ri.useSyncExternalStoreWithSelector = function (E, b, R, C, x) {
      var w = h(null);
      if (w.current === null) {
        var P = { hasValue: !1, value: null };
        w.current = P;
      } else P = w.current;
      w = O(
        function () {
          function I(j) {
            if (!dt) {
              if (
                ((dt = !0), (rt = j), (j = C(j)), x !== void 0 && P.hasValue)
              ) {
                var st = P.value;
                if (x(st, j)) return (K = st);
              }
              return (K = j);
            }
            if (((st = K), o(rt, j))) return st;
            var Dt = C(j);
            return x !== void 0 && x(st, Dt)
              ? ((rt = j), st)
              : ((rt = j), (K = Dt));
          }
          var dt = !1,
            rt,
            K,
            et = R === void 0 ? null : R;
          return [
            function () {
              return I(b());
            },
            et === null
              ? void 0
              : function () {
                  return I(et());
                },
          ];
        },
        [b, R, C, x],
      );
      var _t = r(E, w[0], w[1]);
      return (
        T(
          function () {
            (P.hasValue = !0), (P.value = _t);
          },
          [_t],
        ),
        U(_t),
        _t
      );
    }),
    Ri
  );
}
var Xd;
function Jh() {
  return Xd || ((Xd = 1), (Mi.exports = wh())), Mi.exports;
}
var Wh = Jh();
function kh(c) {
  c();
}
function $h() {
  let c = null,
    s = null;
  return {
    clear() {
      (c = null), (s = null);
    },
    notify() {
      kh(() => {
        let o = c;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let r = c;
      for (; r; ) o.push(r), (r = r.next);
      return o;
    },
    subscribe(o) {
      let r = !0;
      const h = (s = { callback: o, next: null, prev: s });
      return (
        h.prev ? (h.prev.next = h) : (c = h),
        function () {
          !r ||
            c === null ||
            ((r = !1),
            h.next ? (h.next.prev = h.prev) : (s = h.prev),
            h.prev ? (h.prev.next = h.next) : (c = h.next));
        }
      );
    },
  };
}
var Qd = { notify() {}, get: () => [] };
function Fh(c, s) {
  let o,
    r = Qd,
    h = 0,
    T = !1;
  function O(_t) {
    R();
    const I = r.subscribe(_t);
    let dt = !1;
    return () => {
      dt || ((dt = !0), I(), C());
    };
  }
  function U() {
    r.notify();
  }
  function E() {
    P.onStateChange && P.onStateChange();
  }
  function b() {
    return T;
  }
  function R() {
    h++, o || ((o = c.subscribe(E)), (r = $h()));
  }
  function C() {
    h--, o && h === 0 && (o(), (o = void 0), r.clear(), (r = Qd));
  }
  function x() {
    T || ((T = !0), R());
  }
  function w() {
    T && ((T = !1), C());
  }
  const P = {
    addNestedSub: O,
    notifyNestedSubs: U,
    handleChangeWrapper: E,
    isSubscribed: b,
    trySubscribe: x,
    tryUnsubscribe: w,
    getListeners: () => r,
  };
  return P;
}
var Ph = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ih = Ph(),
  tv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  lv = tv(),
  ev = () => (Ih || lv ? wt.useLayoutEffect : wt.useEffect),
  uv = ev(),
  Ui = Symbol.for("react-redux-context"),
  Ni = typeof globalThis < "u" ? globalThis : {};
function av() {
  if (!wt.createContext) return {};
  const c = Ni[Ui] ?? (Ni[Ui] = new Map());
  let s = c.get(wt.createContext);
  return s || ((s = wt.createContext(null)), c.set(wt.createContext, s)), s;
}
var Oe = av();
function nv(c) {
  const { children: s, context: o, serverState: r, store: h } = c,
    T = wt.useMemo(() => {
      const E = Fh(h);
      return {
        store: h,
        subscription: E,
        getServerState: r ? () => r : void 0,
      };
    }, [h, r]),
    O = wt.useMemo(() => h.getState(), [h]);
  uv(() => {
    const { subscription: E } = T;
    return (
      (E.onStateChange = E.notifyNestedSubs),
      E.trySubscribe(),
      O !== h.getState() && E.notifyNestedSubs(),
      () => {
        E.tryUnsubscribe(), (E.onStateChange = void 0);
      }
    );
  }, [T, O]);
  const U = o || Oe;
  return wt.createElement(U.Provider, { value: T }, s);
}
var cv = nv;
function Zi(c = Oe) {
  return function () {
    return wt.useContext(c);
  };
}
var Pd = Zi();
function Id(c = Oe) {
  const s = c === Oe ? Pd : Zi(c),
    o = () => {
      const { store: r } = s();
      return r;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var fv = Id();
function iv(c = Oe) {
  const s = c === Oe ? fv : Id(c),
    o = () => s().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var ty = iv(),
  rv = (c, s) => c === s;
function sv(c = Oe) {
  const s = c === Oe ? Pd : Zi(c),
    o = (r, h = {}) => {
      const { equalityFn: T = rv } =
          typeof h == "function" ? { equalityFn: h } : h,
        O = s(),
        { store: U, subscription: E, getServerState: b } = O;
      wt.useRef(!0);
      const R = wt.useCallback(
          {
            [r.name](x) {
              return r(x);
            },
          }[r.name],
          [r],
        ),
        C = Wh.useSyncExternalStoreWithSelector(
          E.addNestedSub,
          U.getState,
          b || U.getState,
          R,
          T,
        );
      return wt.useDebugValue(C), C;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var ly = sv();
function Zt(c) {
  return `Minified Redux error #${c}; visit https://redux.js.org/Errors?code=${c} for the full message or use the non-minified dev environment for full errors. `;
}
var ov = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Zd = ov,
  Hi = () => Math.random().toString(36).substring(7).split("").join("."),
  dv = {
    INIT: `@@redux/INIT${Hi()}`,
    REPLACE: `@@redux/REPLACE${Hi()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Hi()}`,
  },
  ec = dv;
function Li(c) {
  if (typeof c != "object" || c === null) return !1;
  let s = c;
  for (; Object.getPrototypeOf(s) !== null; ) s = Object.getPrototypeOf(s);
  return Object.getPrototypeOf(c) === s || Object.getPrototypeOf(c) === null;
}
function ey(c, s, o) {
  if (typeof c != "function") throw new Error(Zt(2));
  if (
    (typeof s == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Zt(0));
  if (
    (typeof s == "function" && typeof o > "u" && ((o = s), (s = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(Zt(1));
    return o(ey)(c, s);
  }
  let r = c,
    h = s,
    T = new Map(),
    O = T,
    U = 0,
    E = !1;
  function b() {
    O === T &&
      ((O = new Map()),
      T.forEach((I, dt) => {
        O.set(dt, I);
      }));
  }
  function R() {
    if (E) throw new Error(Zt(3));
    return h;
  }
  function C(I) {
    if (typeof I != "function") throw new Error(Zt(4));
    if (E) throw new Error(Zt(5));
    let dt = !0;
    b();
    const rt = U++;
    return (
      O.set(rt, I),
      function () {
        if (dt) {
          if (E) throw new Error(Zt(6));
          (dt = !1), b(), O.delete(rt), (T = null);
        }
      }
    );
  }
  function x(I) {
    if (!Li(I)) throw new Error(Zt(7));
    if (typeof I.type > "u") throw new Error(Zt(8));
    if (typeof I.type != "string") throw new Error(Zt(17));
    if (E) throw new Error(Zt(9));
    try {
      (E = !0), (h = r(h, I));
    } finally {
      E = !1;
    }
    return (
      (T = O).forEach((rt) => {
        rt();
      }),
      I
    );
  }
  function w(I) {
    if (typeof I != "function") throw new Error(Zt(10));
    (r = I), x({ type: ec.REPLACE });
  }
  function P() {
    const I = C;
    return {
      subscribe(dt) {
        if (typeof dt != "object" || dt === null) throw new Error(Zt(11));
        function rt() {
          const et = dt;
          et.next && et.next(R());
        }
        return rt(), { unsubscribe: I(rt) };
      },
      [Zd]() {
        return this;
      },
    };
  }
  return (
    x({ type: ec.INIT }),
    { dispatch: x, subscribe: C, getState: R, replaceReducer: w, [Zd]: P }
  );
}
function yv(c) {
  Object.keys(c).forEach((s) => {
    const o = c[s];
    if (typeof o(void 0, { type: ec.INIT }) > "u") throw new Error(Zt(12));
    if (typeof o(void 0, { type: ec.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Zt(13));
  });
}
function hv(c) {
  const s = Object.keys(c),
    o = {};
  for (let T = 0; T < s.length; T++) {
    const O = s[T];
    typeof c[O] == "function" && (o[O] = c[O]);
  }
  const r = Object.keys(o);
  let h;
  try {
    yv(o);
  } catch (T) {
    h = T;
  }
  return function (O = {}, U) {
    if (h) throw h;
    let E = !1;
    const b = {};
    for (let R = 0; R < r.length; R++) {
      const C = r[R],
        x = o[C],
        w = O[C],
        P = x(w, U);
      if (typeof P > "u") throw (U && U.type, new Error(Zt(14)));
      (b[C] = P), (E = E || P !== w);
    }
    return (E = E || r.length !== Object.keys(O).length), E ? b : O;
  };
}
function uc(...c) {
  return c.length === 0
    ? (s) => s
    : c.length === 1
      ? c[0]
      : c.reduce(
          (s, o) =>
            (...r) =>
              s(o(...r)),
        );
}
function vv(...c) {
  return (s) => (o, r) => {
    const h = s(o, r);
    let T = () => {
      throw new Error(Zt(15));
    };
    const O = { getState: h.getState, dispatch: (E, ...b) => T(E, ...b) },
      U = c.map((E) => E(O));
    return (T = uc(...U)(h.dispatch)), { ...h, dispatch: T };
  };
}
function mv(c) {
  return Li(c) && "type" in c && typeof c.type == "string";
}
var uy = Symbol.for("immer-nothing"),
  Ld = Symbol.for("immer-draftable"),
  il = Symbol.for("immer-state");
function Ol(c, ...s) {
  throw new Error(
    `[Immer] minified error nr: ${c}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var qu = Object.getPrototypeOf;
function Fe(c) {
  return !!c && !!c[il];
}
function le(c) {
  var s;
  return c
    ? ay(c) ||
        Array.isArray(c) ||
        !!c[Ld] ||
        !!((s = c.constructor) != null && s[Ld]) ||
        rc(c) ||
        sc(c)
    : !1;
}
var gv = Object.prototype.constructor.toString();
function ay(c) {
  if (!c || typeof c != "object") return !1;
  const s = qu(c);
  if (s === null) return !0;
  const o = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === gv;
}
function ac(c, s) {
  ic(c) === 0
    ? Reflect.ownKeys(c).forEach((o) => {
        s(o, c[o], c);
      })
    : c.forEach((o, r) => s(r, o, c));
}
function ic(c) {
  const s = c[il];
  return s ? s.type_ : Array.isArray(c) ? 1 : rc(c) ? 2 : sc(c) ? 3 : 0;
}
function ji(c, s) {
  return ic(c) === 2 ? c.has(s) : Object.prototype.hasOwnProperty.call(c, s);
}
function ny(c, s, o) {
  const r = ic(c);
  r === 2 ? c.set(s, o) : r === 3 ? c.add(o) : (c[s] = o);
}
function Sv(c, s) {
  return c === s ? c !== 0 || 1 / c === 1 / s : c !== c && s !== s;
}
function rc(c) {
  return c instanceof Map;
}
function sc(c) {
  return c instanceof Set;
}
function $e(c) {
  return c.copy_ || c.base_;
}
function Yi(c, s) {
  if (rc(c)) return new Map(c);
  if (sc(c)) return new Set(c);
  if (Array.isArray(c)) return Array.prototype.slice.call(c);
  const o = ay(c);
  if (s === !0 || (s === "class_only" && !o)) {
    const r = Object.getOwnPropertyDescriptors(c);
    delete r[il];
    let h = Reflect.ownKeys(r);
    for (let T = 0; T < h.length; T++) {
      const O = h[T],
        U = r[O];
      U.writable === !1 && ((U.writable = !0), (U.configurable = !0)),
        (U.get || U.set) &&
          (r[O] = {
            configurable: !0,
            writable: !0,
            enumerable: U.enumerable,
            value: c[O],
          });
    }
    return Object.create(qu(c), r);
  } else {
    const r = qu(c);
    if (r !== null && o) return { ...c };
    const h = Object.create(r);
    return Object.assign(h, c);
  }
}
function Vi(c, s = !1) {
  return (
    oc(c) ||
      Fe(c) ||
      !le(c) ||
      (ic(c) > 1 && (c.set = c.add = c.clear = c.delete = bv),
      Object.freeze(c),
      s && Object.entries(c).forEach(([o, r]) => Vi(r, !0))),
    c
  );
}
function bv() {
  Ol(2);
}
function oc(c) {
  return Object.isFrozen(c);
}
var _v = {};
function Pe(c) {
  const s = _v[c];
  return s || Ol(0, c), s;
}
var ja;
function cy() {
  return ja;
}
function Ev(c, s) {
  return {
    drafts_: [],
    parent_: c,
    immer_: s,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Vd(c, s) {
  s &&
    (Pe("Patches"),
    (c.patches_ = []),
    (c.inversePatches_ = []),
    (c.patchListener_ = s));
}
function xi(c) {
  Gi(c), c.drafts_.forEach(Tv), (c.drafts_ = null);
}
function Gi(c) {
  c === ja && (ja = c.parent_);
}
function Kd(c) {
  return (ja = Ev(ja, c));
}
function Tv(c) {
  const s = c[il];
  s.type_ === 0 || s.type_ === 1 ? s.revoke_() : (s.revoked_ = !0);
}
function wd(c, s) {
  s.unfinalizedDrafts_ = s.drafts_.length;
  const o = s.drafts_[0];
  return (
    c !== void 0 && c !== o
      ? (o[il].modified_ && (xi(s), Ol(4)),
        le(c) && ((c = nc(s, c)), s.parent_ || cc(s, c)),
        s.patches_ &&
          Pe("Patches").generateReplacementPatches_(
            o[il].base_,
            c,
            s.patches_,
            s.inversePatches_,
          ))
      : (c = nc(s, o, [])),
    xi(s),
    s.patches_ && s.patchListener_(s.patches_, s.inversePatches_),
    c !== uy ? c : void 0
  );
}
function nc(c, s, o) {
  if (oc(s)) return s;
  const r = s[il];
  if (!r) return ac(s, (h, T) => Jd(c, r, s, h, T, o)), s;
  if (r.scope_ !== c) return s;
  if (!r.modified_) return cc(c, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const h = r.copy_;
    let T = h,
      O = !1;
    r.type_ === 3 && ((T = new Set(h)), h.clear(), (O = !0)),
      ac(T, (U, E) => Jd(c, r, h, U, E, o, O)),
      cc(c, h, !1),
      o &&
        c.patches_ &&
        Pe("Patches").generatePatches_(r, o, c.patches_, c.inversePatches_);
  }
  return r.copy_;
}
function Jd(c, s, o, r, h, T, O) {
  if (Fe(h)) {
    const U =
        T && s && s.type_ !== 3 && !ji(s.assigned_, r) ? T.concat(r) : void 0,
      E = nc(c, h, U);
    if ((ny(o, r, E), Fe(E))) c.canAutoFreeze_ = !1;
    else return;
  } else O && o.add(h);
  if (le(h) && !oc(h)) {
    if (!c.immer_.autoFreeze_ && c.unfinalizedDrafts_ < 1) return;
    nc(c, h),
      (!s || !s.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, r) &&
        cc(c, h);
  }
}
function cc(c, s, o = !1) {
  !c.parent_ && c.immer_.autoFreeze_ && c.canAutoFreeze_ && Vi(s, o);
}
function pv(c, s) {
  const o = Array.isArray(c),
    r = {
      type_: o ? 1 : 0,
      scope_: s ? s.scope_ : cy(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: s,
      base_: c,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let h = r,
    T = Ki;
  o && ((h = [r]), (T = Ya));
  const { revoke: O, proxy: U } = Proxy.revocable(h, T);
  return (r.draft_ = U), (r.revoke_ = O), U;
}
var Ki = {
    get(c, s) {
      if (s === il) return c;
      const o = $e(c);
      if (!ji(o, s)) return Av(c, o, s);
      const r = o[s];
      return c.finalized_ || !le(r)
        ? r
        : r === Ci(c.base_, s)
          ? (Bi(c), (c.copy_[s] = Qi(r, c)))
          : r;
    },
    has(c, s) {
      return s in $e(c);
    },
    ownKeys(c) {
      return Reflect.ownKeys($e(c));
    },
    set(c, s, o) {
      const r = fy($e(c), s);
      if (r != null && r.set) return r.set.call(c.draft_, o), !0;
      if (!c.modified_) {
        const h = Ci($e(c), s),
          T = h == null ? void 0 : h[il];
        if (T && T.base_ === o)
          return (c.copy_[s] = o), (c.assigned_[s] = !1), !0;
        if (Sv(o, h) && (o !== void 0 || ji(c.base_, s))) return !0;
        Bi(c), Xi(c);
      }
      return (
        (c.copy_[s] === o && (o !== void 0 || s in c.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(c.copy_[s])) ||
          ((c.copy_[s] = o), (c.assigned_[s] = !0)),
        !0
      );
    },
    deleteProperty(c, s) {
      return (
        Ci(c.base_, s) !== void 0 || s in c.base_
          ? ((c.assigned_[s] = !1), Bi(c), Xi(c))
          : delete c.assigned_[s],
        c.copy_ && delete c.copy_[s],
        !0
      );
    },
    getOwnPropertyDescriptor(c, s) {
      const o = $e(c),
        r = Reflect.getOwnPropertyDescriptor(o, s);
      return (
        r && {
          writable: !0,
          configurable: c.type_ !== 1 || s !== "length",
          enumerable: r.enumerable,
          value: o[s],
        }
      );
    },
    defineProperty() {
      Ol(11);
    },
    getPrototypeOf(c) {
      return qu(c.base_);
    },
    setPrototypeOf() {
      Ol(12);
    },
  },
  Ya = {};
ac(Ki, (c, s) => {
  Ya[c] = function () {
    return (arguments[0] = arguments[0][0]), s.apply(this, arguments);
  };
});
Ya.deleteProperty = function (c, s) {
  return Ya.set.call(this, c, s, void 0);
};
Ya.set = function (c, s, o) {
  return Ki.set.call(this, c[0], s, o, c[0]);
};
function Ci(c, s) {
  const o = c[il];
  return (o ? $e(o) : c)[s];
}
function Av(c, s, o) {
  var h;
  const r = fy(s, o);
  return r
    ? "value" in r
      ? r.value
      : (h = r.get) == null
        ? void 0
        : h.call(c.draft_)
    : void 0;
}
function fy(c, s) {
  if (!(s in c)) return;
  let o = qu(c);
  for (; o; ) {
    const r = Object.getOwnPropertyDescriptor(o, s);
    if (r) return r;
    o = qu(o);
  }
}
function Xi(c) {
  c.modified_ || ((c.modified_ = !0), c.parent_ && Xi(c.parent_));
}
function Bi(c) {
  c.copy_ || (c.copy_ = Yi(c.base_, c.scope_.immer_.useStrictShallowCopy_));
}
var zv = class {
  constructor(c) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (s, o, r) => {
        if (typeof s == "function" && typeof o != "function") {
          const T = o;
          o = s;
          const O = this;
          return function (E = T, ...b) {
            return O.produce(E, (R) => o.call(this, R, ...b));
          };
        }
        typeof o != "function" && Ol(6),
          r !== void 0 && typeof r != "function" && Ol(7);
        let h;
        if (le(s)) {
          const T = Kd(this),
            O = Qi(s, void 0);
          let U = !0;
          try {
            (h = o(O)), (U = !1);
          } finally {
            U ? xi(T) : Gi(T);
          }
          return Vd(T, r), wd(h, T);
        } else if (!s || typeof s != "object") {
          if (
            ((h = o(s)),
            h === void 0 && (h = s),
            h === uy && (h = void 0),
            this.autoFreeze_ && Vi(h, !0),
            r)
          ) {
            const T = [],
              O = [];
            Pe("Patches").generateReplacementPatches_(s, h, T, O), r(T, O);
          }
          return h;
        } else Ol(1, s);
      }),
      (this.produceWithPatches = (s, o) => {
        if (typeof s == "function")
          return (O, ...U) => this.produceWithPatches(O, (E) => s(E, ...U));
        let r, h;
        return [
          this.produce(s, o, (O, U) => {
            (r = O), (h = U);
          }),
          r,
          h,
        ];
      }),
      typeof (c == null ? void 0 : c.autoFreeze) == "boolean" &&
        this.setAutoFreeze(c.autoFreeze),
      typeof (c == null ? void 0 : c.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(c.useStrictShallowCopy);
  }
  createDraft(c) {
    le(c) || Ol(8), Fe(c) && (c = Ov(c));
    const s = Kd(this),
      o = Qi(c, void 0);
    return (o[il].isManual_ = !0), Gi(s), o;
  }
  finishDraft(c, s) {
    const o = c && c[il];
    (!o || !o.isManual_) && Ol(9);
    const { scope_: r } = o;
    return Vd(r, s), wd(void 0, r);
  }
  setAutoFreeze(c) {
    this.autoFreeze_ = c;
  }
  setUseStrictShallowCopy(c) {
    this.useStrictShallowCopy_ = c;
  }
  applyPatches(c, s) {
    let o;
    for (o = s.length - 1; o >= 0; o--) {
      const h = s[o];
      if (h.path.length === 0 && h.op === "replace") {
        c = h.value;
        break;
      }
    }
    o > -1 && (s = s.slice(o + 1));
    const r = Pe("Patches").applyPatches_;
    return Fe(c) ? r(c, s) : this.produce(c, (h) => r(h, s));
  }
};
function Qi(c, s) {
  const o = rc(c)
    ? Pe("MapSet").proxyMap_(c, s)
    : sc(c)
      ? Pe("MapSet").proxySet_(c, s)
      : pv(c, s);
  return (s ? s.scope_ : cy()).drafts_.push(o), o;
}
function Ov(c) {
  return Fe(c) || Ol(10, c), iy(c);
}
function iy(c) {
  if (!le(c) || oc(c)) return c;
  const s = c[il];
  let o;
  if (s) {
    if (!s.modified_) return s.base_;
    (s.finalized_ = !0), (o = Yi(c, s.scope_.immer_.useStrictShallowCopy_));
  } else o = Yi(c, !0);
  return (
    ac(o, (r, h) => {
      ny(o, r, iy(h));
    }),
    s && (s.finalized_ = !1),
    o
  );
}
var rl = new zv(),
  ry = rl.produce;
rl.produceWithPatches.bind(rl);
rl.setAutoFreeze.bind(rl);
rl.setUseStrictShallowCopy.bind(rl);
rl.applyPatches.bind(rl);
rl.createDraft.bind(rl);
rl.finishDraft.bind(rl);
function sy(c) {
  return ({ dispatch: o, getState: r }) =>
    (h) =>
    (T) =>
      typeof T == "function" ? T(o, r, c) : h(T);
}
var Dv = sy(),
  Mv = sy,
  Rv =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? uc
              : uc.apply(null, arguments);
        };
function Wd(c, s) {
  function o(...r) {
    if (s) {
      let h = s(...r);
      if (!h) throw new Error(te(0));
      return {
        type: c,
        payload: h.payload,
        ...("meta" in h && { meta: h.meta }),
        ...("error" in h && { error: h.error }),
      };
    }
    return { type: c, payload: r[0] };
  }
  return (
    (o.toString = () => `${c}`),
    (o.type = c),
    (o.match = (r) => mv(r) && r.type === c),
    o
  );
}
var oy = class qa extends Array {
  constructor(...s) {
    super(...s), Object.setPrototypeOf(this, qa.prototype);
  }
  static get [Symbol.species]() {
    return qa;
  }
  concat(...s) {
    return super.concat.apply(this, s);
  }
  prepend(...s) {
    return s.length === 1 && Array.isArray(s[0])
      ? new qa(...s[0].concat(this))
      : new qa(...s.concat(this));
  }
};
function kd(c) {
  return le(c) ? ry(c, () => {}) : c;
}
function $d(c, s, o) {
  return c.has(s) ? c.get(s) : c.set(s, o(s)).get(s);
}
function Uv(c) {
  return typeof c == "boolean";
}
var Nv = () =>
    function (s) {
      const {
        thunk: o = !0,
        immutableCheck: r = !0,
        serializableCheck: h = !0,
        actionCreatorCheck: T = !0,
      } = s ?? {};
      let O = new oy();
      return o && (Uv(o) ? O.push(Dv) : O.push(Mv(o.extraArgument))), O;
    },
  Hv = "RTK_autoBatch",
  Fd = (c) => (s) => {
    setTimeout(s, c);
  },
  Cv =
    (c = { type: "raf" }) =>
    (s) =>
    (...o) => {
      const r = s(...o);
      let h = !0,
        T = !1,
        O = !1;
      const U = new Set(),
        E =
          c.type === "tick"
            ? queueMicrotask
            : c.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Fd(10)
              : c.type === "callback"
                ? c.queueNotification
                : Fd(c.timeout),
        b = () => {
          (O = !1), T && ((T = !1), U.forEach((R) => R()));
        };
      return Object.assign({}, r, {
        subscribe(R) {
          const C = () => h && R(),
            x = r.subscribe(C);
          return (
            U.add(R),
            () => {
              x(), U.delete(R);
            }
          );
        },
        dispatch(R) {
          var C;
          try {
            return (
              (h = !((C = R == null ? void 0 : R.meta) != null && C[Hv])),
              (T = !h),
              T && (O || ((O = !0), E(b))),
              r.dispatch(R)
            );
          } finally {
            h = !0;
          }
        },
      });
    },
  Bv = (c) =>
    function (o) {
      const { autoBatch: r = !0 } = o ?? {};
      let h = new oy(c);
      return r && h.push(Cv(typeof r == "object" ? r : void 0)), h;
    };
function qv(c) {
  const s = Nv(),
    {
      reducer: o = void 0,
      middleware: r,
      devTools: h = !0,
      preloadedState: T = void 0,
      enhancers: O = void 0,
    } = c || {};
  let U;
  if (typeof o == "function") U = o;
  else if (Li(o)) U = hv(o);
  else throw new Error(te(1));
  let E;
  typeof r == "function" ? (E = r(s)) : (E = s());
  let b = uc;
  h && (b = Rv({ trace: !1, ...(typeof h == "object" && h) }));
  const R = vv(...E),
    C = Bv(R);
  let x = typeof O == "function" ? O(C) : C();
  const w = b(...x);
  return ey(U, T, w);
}
function dy(c) {
  const s = {},
    o = [];
  let r;
  const h = {
    addCase(T, O) {
      const U = typeof T == "string" ? T : T.type;
      if (!U) throw new Error(te(28));
      if (U in s) throw new Error(te(29));
      return (s[U] = O), h;
    },
    addMatcher(T, O) {
      return o.push({ matcher: T, reducer: O }), h;
    },
    addDefaultCase(T) {
      return (r = T), h;
    },
  };
  return c(h), [s, o, r];
}
function jv(c) {
  return typeof c == "function";
}
function Yv(c, s) {
  let [o, r, h] = dy(s),
    T;
  if (jv(c)) T = () => kd(c());
  else {
    const U = kd(c);
    T = () => U;
  }
  function O(U = T(), E) {
    let b = [
      o[E.type],
      ...r.filter(({ matcher: R }) => R(E)).map(({ reducer: R }) => R),
    ];
    return (
      b.filter((R) => !!R).length === 0 && (b = [h]),
      b.reduce((R, C) => {
        if (C)
          if (Fe(R)) {
            const w = C(R, E);
            return w === void 0 ? R : w;
          } else {
            if (le(R)) return ry(R, (x) => C(x, E));
            {
              const x = C(R, E);
              if (x === void 0) {
                if (R === null) return R;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return x;
            }
          }
        return R;
      }, U)
    );
  }
  return (O.getInitialState = T), O;
}
var xv = Symbol.for("rtk-slice-createasyncthunk");
function Gv(c, s) {
  return `${c}/${s}`;
}
function Xv({ creators: c } = {}) {
  var o;
  const s = (o = c == null ? void 0 : c.asyncThunk) == null ? void 0 : o[xv];
  return function (h) {
    const { name: T, reducerPath: O = T } = h;
    if (!T) throw new Error(te(11));
    const U =
        (typeof h.reducers == "function" ? h.reducers(Lv()) : h.reducers) || {},
      E = Object.keys(U),
      b = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      R = {
        addCase(K, et) {
          const j = typeof K == "string" ? K : K.type;
          if (!j) throw new Error(te(12));
          if (j in b.sliceCaseReducersByType) throw new Error(te(13));
          return (b.sliceCaseReducersByType[j] = et), R;
        },
        addMatcher(K, et) {
          return b.sliceMatchers.push({ matcher: K, reducer: et }), R;
        },
        exposeAction(K, et) {
          return (b.actionCreators[K] = et), R;
        },
        exposeCaseReducer(K, et) {
          return (b.sliceCaseReducersByName[K] = et), R;
        },
      };
    E.forEach((K) => {
      const et = U[K],
        j = {
          reducerName: K,
          type: Gv(T, K),
          createNotation: typeof h.reducers == "function",
        };
      Kv(et) ? Jv(j, et, R, s) : Vv(j, et, R);
    });
    function C() {
      const [K = {}, et = [], j = void 0] =
          typeof h.extraReducers == "function"
            ? dy(h.extraReducers)
            : [h.extraReducers],
        st = { ...K, ...b.sliceCaseReducersByType };
      return Yv(h.initialState, (Dt) => {
        for (let Et in st) Dt.addCase(Et, st[Et]);
        for (let Et of b.sliceMatchers) Dt.addMatcher(Et.matcher, Et.reducer);
        for (let Et of et) Dt.addMatcher(Et.matcher, Et.reducer);
        j && Dt.addDefaultCase(j);
      });
    }
    const x = (K) => K,
      w = new Map();
    let P;
    function _t(K, et) {
      return P || (P = C()), P(K, et);
    }
    function I() {
      return P || (P = C()), P.getInitialState();
    }
    function dt(K, et = !1) {
      function j(Dt) {
        let Et = Dt[K];
        return typeof Et > "u" && et && (Et = I()), Et;
      }
      function st(Dt = x) {
        const Et = $d(w, et, () => new WeakMap());
        return $d(Et, Dt, () => {
          const G = {};
          for (const [ct, $t] of Object.entries(h.selectors ?? {}))
            G[ct] = Qv($t, Dt, I, et);
          return G;
        });
      }
      return {
        reducerPath: K,
        getSelectors: st,
        get selectors() {
          return st(j);
        },
        selectSlice: j,
      };
    }
    const rt = {
      name: T,
      reducer: _t,
      actions: b.actionCreators,
      caseReducers: b.sliceCaseReducersByName,
      getInitialState: I,
      ...dt(O),
      injectInto(K, { reducerPath: et, ...j } = {}) {
        const st = et ?? O;
        return (
          K.inject({ reducerPath: st, reducer: _t }, j),
          { ...rt, ...dt(st, !0) }
        );
      },
    };
    return rt;
  };
}
function Qv(c, s, o, r) {
  function h(T, ...O) {
    let U = s(T);
    return typeof U > "u" && r && (U = o()), c(U, ...O);
  }
  return (h.unwrapped = c), h;
}
var Zv = Xv();
function Lv() {
  function c(s, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: s, ...o };
  }
  return (
    (c.withTypes = () => c),
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
      asyncThunk: c,
    }
  );
}
function Vv({ type: c, reducerName: s, createNotation: o }, r, h) {
  let T, O;
  if ("reducer" in r) {
    if (o && !wv(r)) throw new Error(te(17));
    (T = r.reducer), (O = r.prepare);
  } else T = r;
  h.addCase(c, T)
    .exposeCaseReducer(s, T)
    .exposeAction(s, O ? Wd(c, O) : Wd(c));
}
function Kv(c) {
  return c._reducerDefinitionType === "asyncThunk";
}
function wv(c) {
  return c._reducerDefinitionType === "reducerWithPrepare";
}
function Jv({ type: c, reducerName: s }, o, r, h) {
  if (!h) throw new Error(te(18));
  const {
      payloadCreator: T,
      fulfilled: O,
      pending: U,
      rejected: E,
      settled: b,
      options: R,
    } = o,
    C = h(c, T, R);
  r.exposeAction(s, C),
    O && r.addCase(C.fulfilled, O),
    U && r.addCase(C.pending, U),
    E && r.addCase(C.rejected, E),
    b && r.addMatcher(C.settled, b),
    r.exposeCaseReducer(s, {
      fulfilled: O || In,
      pending: U || In,
      rejected: E || In,
      settled: b || In,
    });
}
function In() {}
function te(c) {
  return `Minified Redux Toolkit error #${c}; visit https://redux-toolkit.js.org/Errors?code=${c} for the full message or use the non-minified dev environment for full errors. `;
}
const Wv = { items: [], totalAmount: 0 },
  yy = Zv({
    name: "cart",
    initialState: Wv,
    reducers: {
      addToCart(c, s) {
        const o = s.payload,
          r = c.items.find((h) => h.productName === o.productName);
        r ? (r.productCount += 1) : c.items.push({ ...o, productCount: 1 }),
          (c.totalAmount += o.productPrice);
      },
      removeFromCart(c, s) {
        c.items = c.items.filter((o) =>
          o.productId === s.payload.productId
            ? (console.log(o.productCount),
              (c.totalAmount = Math.max(
                0,
                c.totalAmount - o.productPrice * o.productCount,
              )),
              !1)
            : !0,
        );
      },
      increaseProduct(c, s) {
        const o = c.items.find((r) => r.productId === s.payload.productId);
        o && ((c.totalAmount += o.productPrice), (o.productCount += 1));
      },
      decreaseProduct(c, s) {
        const o = c.items.find((r) => r.productId === s.payload.productId);
        o &&
          ((c.totalAmount -= o.productPrice),
          (o.productCount -= 1),
          o.productCount === 0 &&
            (c.items = c.items.filter(
              (r) => r.productId != s.payload.productId,
            )));
      },
      clearState(c) {
        (c.items = []), (c.totalAmount = 0);
      },
    },
  }),
  {
    addToCart: kv,
    removeFromCart: $v,
    increaseProduct: Fv,
    decreaseProduct: Pv,
    clearState: Iv,
  } = yy.actions,
  t1 = yy.reducer,
  l1 = "_cartOverlay_1gg81_2",
  e1 = "_cartModal_1gg81_16",
  u1 = "_increase_1gg81_68",
  a1 = "_decrease_1gg81_69",
  n1 = "_remove_1gg81_70",
  c1 = "_closeButton_1gg81_80",
  ke = {
    cartOverlay: l1,
    cartModal: e1,
    increase: u1,
    decrease: a1,
    remove: n1,
    closeButton: c1,
  },
  f1 = (c) => {
    wt.useEffect(() => {
      const E = (b) => {
        b.key === "Escape" && c.onClose();
      };
      return (
        document.addEventListener("keydown", E),
        () => {
          document.removeEventListener("keydown", E);
        }
      );
    });
    const s = ty(),
      o = ly((E) => E.cart),
      r = (E) => {
        s($v(E));
      },
      h = (E) => {
        s(Fv(E));
      },
      T = (E) => {
        s(Pv(E));
      },
      O = () => {
        s(Iv());
      },
      U = (E) => {
        E.target === E.currentTarget && (console.log(E.target), c.onClose());
      };
    return k.jsx("div", {
      className: ke.cartOverlay,
      onClick: U,
      children: k.jsxs("div", {
        className: ke.cartModal,
        children: [
          k.jsx("button", {
            className: ke.closeButton,
            onClick: () => c.onClose(),
            children: "✖",
          }),
          k.jsx("h2", { children: "Корзина покупок" }),
          o.items.length === 0
            ? k.jsx("p", { children: "Ваша корзина пуста! " })
            : k.jsxs("div", {
                children: [
                  k.jsx("ul", {
                    children: o.items.map((E) =>
                      k.jsx(
                        "li",
                        {
                          children: k.jsxs("div", {
                            children: [
                              k.jsx("h3", { children: E.productName }),
                              k.jsxs("p", {
                                children: ["Цена: $", E.productPrice],
                              }),
                              k.jsxs("p", {
                                children: ["количество: ", E.productCount],
                              }),
                              k.jsx("button", {
                                className: ke.increase,
                                onClick: () => h(E),
                                children: "Увеличить количество",
                              }),
                              k.jsx("button", {
                                className: ke.decrease,
                                onClick: () => T(E),
                                children: "Уменьшить количества",
                              }),
                              k.jsx("button", {
                                className: ke.remove,
                                onClick: () => r(E),
                                children: "Удалить",
                              }),
                            ],
                          }),
                        },
                        E.productId,
                      ),
                    ),
                  }),
                  k.jsxs("div", {
                    children: [
                      k.jsxs("h3", {
                        children: ["Итоговая стоимость: $", o.totalAmount],
                      }),
                      k.jsx("button", {
                        className: ke.clearCart,
                        onClick: O,
                        children: "Очистить корзину",
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    });
  },
  i1 = "_header_1tg8b_1",
  r1 = "_logo_1tg8b_10",
  s1 = "_cartButton_1tg8b_15",
  o1 = "_cartBadge_1tg8b_30",
  tc = { header: i1, logo: r1, cartButton: s1, cartBadge: o1 },
  d1 = ({ onCartOpen: c }) => {
    const s = ly((o) => o.cart.totalAmount);
    return k.jsxs("header", {
      className: tc.header,
      children: [
        k.jsx("div", { className: tc.logo, children: "🛍️ MyShop" }),
        k.jsxs("button", {
          className: tc.cartButton,
          onClick: c,
          children: [
            "🛒 Корзина",
            s > 0 && k.jsx("span", { className: tc.cartBadge, children: s }),
          ],
        }),
      ],
    });
  },
  y1 = "_linkStyle_1m33r_28",
  qi = { linkStyle: y1 },
  h1 = () =>
    k.jsxs("footer", {
      className: qi.footer,
      children: [
        k.jsx("p", {
          children: "© 2025 Магазн шнюка. Все права защищены шнюком.",
        }),
        k.jsx("div", {
          className: qi.socialLinks,
          children: k.jsx("a", {
            href: "https://t.me/StanislavNeshik",
            target: "_blank",
            rel: "noopener noreferrer",
            className: qi.linkStyle,
            children: "Написать в Telegram",
          }),
        }),
      ],
    }),
  v1 = "_productsList_lbhd2_2",
  lc = { productsList: v1 },
  m1 = [
    {
      productName: "Завтрак",
      productPrice: 20,
      productCategory: "Category 1",
      productId: 1,
      productCount: 0,
    },
    {
      productName: "Обед",
      productPrice: 30,
      productCategory: "Category 2",
      productId: 2,
      productCount: 0,
    },
    {
      productName: "Конфетка",
      productPrice: 40,
      productCategory: "Category 3",
      productId: 3,
      productCount: 0,
    },
  ];
function g1() {
  const c = ty(),
    [s, o] = wt.useState(!1),
    r = (h) => {
      c(kv(h));
    };
  return k.jsxs("div", {
    className: lc.container,
    children: [
      k.jsx(d1, { onCartOpen: () => o(!0) }),
      k.jsx("h1", {
        className: lc.heading,
        children: "Добро пожаловать в магазин шнюка и его друзей!",
      }),
      k.jsxs("div", {
        children: [
          k.jsx("h2", { children: "Наш современный каталог товаров!" }),
          k.jsx("div", {
            className: lc.productsList,
            children: m1.map((h) =>
              k.jsxs(
                "div",
                {
                  className: "product-card",
                  children: [
                    k.jsx("h3", { children: h.productName }),
                    k.jsxs("p", { children: ["Цена: $", h.productPrice] }),
                    k.jsx("button", {
                      className: lc.button,
                      onClick: () => r(h),
                      children: "Добавить в корзину!",
                    }),
                  ],
                },
                h.productId,
              ),
            ),
          }),
        ],
      }),
      s && k.jsx(f1, { onClose: () => o(!1) }),
      k.jsx(h1, {}),
    ],
  });
}
const S1 = qv({ reducer: { cart: t1 } });
Kh.createRoot(document.getElementById("root")).render(
  k.jsx(wt.StrictMode, {
    children: k.jsx(cv, { store: S1, children: k.jsx(g1, {}) }),
  }),
);
