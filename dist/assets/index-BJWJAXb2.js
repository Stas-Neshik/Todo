(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const v of document.querySelectorAll('link[rel="modulepreload"]')) s(v);
  new MutationObserver((v) => {
    for (const T of v)
      if (T.type === "childList")
        for (const A of T.addedNodes)
          A.tagName === "LINK" && A.rel === "modulepreload" && s(A);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(v) {
    const T = {};
    return (
      v.integrity && (T.integrity = v.integrity),
      v.referrerPolicy && (T.referrerPolicy = v.referrerPolicy),
      v.crossOrigin === "use-credentials"
        ? (T.credentials = "include")
        : v.crossOrigin === "anonymous"
          ? (T.credentials = "omit")
          : (T.credentials = "same-origin"),
      T
    );
  }
  function s(v) {
    if (v.ep) return;
    v.ep = !0;
    const T = d(v);
    fetch(v.href, T);
  }
})();
var zf = { exports: {} },
  qa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hd;
function Gh() {
  if (Hd) return qa;
  Hd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function d(s, v, T) {
    var A = null;
    if (
      (T !== void 0 && (A = "" + T),
      v.key !== void 0 && (A = "" + v.key),
      "key" in v)
    ) {
      T = {};
      for (var R in v) R !== "key" && (T[R] = v[R]);
    } else T = v;
    return (
      (v = T.ref),
      { $$typeof: i, type: s, key: A, ref: v !== void 0 ? v : null, props: T }
    );
  }
  return (qa.Fragment = r), (qa.jsx = d), (qa.jsxs = d), qa;
}
var Cd;
function Xh() {
  return Cd || ((Cd = 1), (zf.exports = Gh())), zf.exports;
}
var it = Xh(),
  pf = { exports: {} },
  k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Qh() {
  if (qd) return k;
  qd = 1;
  var i = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    v = Symbol.for("react.profiler"),
    T = Symbol.for("react.consumer"),
    A = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function Y(y) {
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
    F = Object.assign,
    _t = {};
  function P(y, M, Z) {
    (this.props = y),
      (this.context = M),
      (this.refs = _t),
      (this.updater = Z || w);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (y, M) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, M, "setState");
    }),
    (P.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function dt() {}
  dt.prototype = P.prototype;
  function rt(y, M, Z) {
    (this.props = y),
      (this.context = M),
      (this.refs = _t),
      (this.updater = Z || w);
  }
  var K = (rt.prototype = new dt());
  (K.constructor = rt), F(K, P.prototype), (K.isPureReactComponent = !0);
  var lt = Array.isArray,
    B = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function Dt(y, M, Z, X, H, ut) {
    return (
      (Z = ut.ref),
      { $$typeof: i, type: y, key: M, ref: Z !== void 0 ? Z : null, props: ut }
    );
  }
  function Et(y, M) {
    return Dt(y.type, M, void 0, void 0, void 0, y.props);
  }
  function G(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function nt(y) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (Z) {
        return M[Z];
      })
    );
  }
  var $t = /\/+/g;
  function xl(y, M) {
    return typeof y == "object" && y !== null && y.key != null
      ? nt("" + y.key)
      : M.toString(36);
  }
  function Dl() {}
  function Bl(y) {
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
    var ut = typeof y;
    (ut === "undefined" || ut === "boolean") && (y = null);
    var W = !1;
    if (y === null) W = !0;
    else
      switch (ut) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case r:
              W = !0;
              break;
            case U:
              return (W = y._init), Ft(W(y._payload), M, Z, X, H);
          }
      }
    if (W)
      return (
        (H = H(y)),
        (W = X === "" ? "." + xl(y, 0) : X),
        lt(H)
          ? ((Z = ""),
            W != null && (Z = W.replace($t, "$&/") + "/"),
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
                  W,
              )),
            M.push(H)),
        1
      );
    W = 0;
    var Jt = X === "" ? "." : X + ":";
    if (lt(y))
      for (var ot = 0; ot < y.length; ot++)
        (X = y[ot]), (ut = Jt + xl(X, ot)), (W += Ft(X, M, Z, ut, H));
    else if (((ot = Y(y)), typeof ot == "function"))
      for (y = ot.call(y), ot = 0; !(X = y.next()).done; )
        (X = X.value), (ut = Jt + xl(X, ot++)), (W += Ft(X, M, Z, ut, H));
    else if (ut === "object") {
      if (typeof y.then == "function") return Ft(Bl(y), M, Z, X, H);
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
    return W;
  }
  function N(y, M, Z) {
    if (y == null) return y;
    var X = [],
      H = 0;
    return (
      Ft(y, X, "", "", function (ut) {
        return M.call(Z, ut, H++);
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
  var V =
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
    (k.Children = {
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
    (k.Component = P),
    (k.Fragment = d),
    (k.Profiler = v),
    (k.PureComponent = rt),
    (k.StrictMode = s),
    (k.Suspense = E),
    (k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (k.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (k.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (k.cloneElement = function (y, M, Z) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var X = F({}, y.props),
        H = y.key,
        ut = void 0;
      if (M != null)
        for (W in (M.ref !== void 0 && (ut = void 0),
        M.key !== void 0 && (H = "" + M.key),
        M))
          !st.call(M, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && M.ref === void 0) ||
            (X[W] = M[W]);
      var W = arguments.length - 2;
      if (W === 1) X.children = Z;
      else if (1 < W) {
        for (var Jt = Array(W), ot = 0; ot < W; ot++)
          Jt[ot] = arguments[ot + 2];
        X.children = Jt;
      }
      return Dt(y.type, H, void 0, void 0, ut, X);
    }),
    (k.createContext = function (y) {
      return (
        (y = {
          $$typeof: A,
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
    (k.createElement = function (y, M, Z) {
      var X,
        H = {},
        ut = null;
      if (M != null)
        for (X in (M.key !== void 0 && (ut = "" + M.key), M))
          st.call(M, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (H[X] = M[X]);
      var W = arguments.length - 2;
      if (W === 1) H.children = Z;
      else if (1 < W) {
        for (var Jt = Array(W), ot = 0; ot < W; ot++)
          Jt[ot] = arguments[ot + 2];
        H.children = Jt;
      }
      if (y && y.defaultProps)
        for (X in ((W = y.defaultProps), W)) H[X] === void 0 && (H[X] = W[X]);
      return Dt(y, ut, void 0, void 0, null, H);
    }),
    (k.createRef = function () {
      return { current: null };
    }),
    (k.forwardRef = function (y) {
      return { $$typeof: R, render: y };
    }),
    (k.isValidElement = G),
    (k.lazy = function (y) {
      return { $$typeof: U, _payload: { _status: -1, _result: y }, _init: J };
    }),
    (k.memo = function (y, M) {
      return { $$typeof: b, type: y, compare: M === void 0 ? null : M };
    }),
    (k.startTransition = function (y) {
      var M = B.T,
        Z = {};
      B.T = Z;
      try {
        var X = y(),
          H = B.S;
        H !== null && H(Z, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(mt, V);
      } catch (ut) {
        V(ut);
      } finally {
        B.T = M;
      }
    }),
    (k.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (k.use = function (y) {
      return B.H.use(y);
    }),
    (k.useActionState = function (y, M, Z) {
      return B.H.useActionState(y, M, Z);
    }),
    (k.useCallback = function (y, M) {
      return B.H.useCallback(y, M);
    }),
    (k.useContext = function (y) {
      return B.H.useContext(y);
    }),
    (k.useDebugValue = function () {}),
    (k.useDeferredValue = function (y, M) {
      return B.H.useDeferredValue(y, M);
    }),
    (k.useEffect = function (y, M) {
      return B.H.useEffect(y, M);
    }),
    (k.useId = function () {
      return B.H.useId();
    }),
    (k.useImperativeHandle = function (y, M, Z) {
      return B.H.useImperativeHandle(y, M, Z);
    }),
    (k.useInsertionEffect = function (y, M) {
      return B.H.useInsertionEffect(y, M);
    }),
    (k.useLayoutEffect = function (y, M) {
      return B.H.useLayoutEffect(y, M);
    }),
    (k.useMemo = function (y, M) {
      return B.H.useMemo(y, M);
    }),
    (k.useOptimistic = function (y, M) {
      return B.H.useOptimistic(y, M);
    }),
    (k.useReducer = function (y, M, Z) {
      return B.H.useReducer(y, M, Z);
    }),
    (k.useRef = function (y) {
      return B.H.useRef(y);
    }),
    (k.useState = function (y) {
      return B.H.useState(y);
    }),
    (k.useSyncExternalStore = function (y, M, Z) {
      return B.H.useSyncExternalStore(y, M, Z);
    }),
    (k.useTransition = function () {
      return B.H.useTransition();
    }),
    (k.version = "19.0.0"),
    k
  );
}
var xd;
function ci() {
  return xd || ((xd = 1), (pf.exports = Qh())), pf.exports;
}
var xt = ci(),
  Af = { exports: {} },
  xa = {},
  Of = { exports: {} },
  Df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bd;
function Zh() {
  return (
    Bd ||
      ((Bd = 1),
      (function (i) {
        function r(N, J) {
          var V = N.length;
          N.push(J);
          t: for (; 0 < V; ) {
            var mt = (V - 1) >>> 1,
              y = N[mt];
            if (0 < v(y, J)) (N[mt] = J), (N[V] = y), (V = mt);
            else break t;
          }
        }
        function d(N) {
          return N.length === 0 ? null : N[0];
        }
        function s(N) {
          if (N.length === 0) return null;
          var J = N[0],
            V = N.pop();
          if (V !== J) {
            N[0] = V;
            t: for (var mt = 0, y = N.length, M = y >>> 1; mt < M; ) {
              var Z = 2 * (mt + 1) - 1,
                X = N[Z],
                H = Z + 1,
                ut = N[H];
              if (0 > v(X, V))
                H < y && 0 > v(ut, X)
                  ? ((N[mt] = ut), (N[H] = V), (mt = H))
                  : ((N[mt] = X), (N[Z] = V), (mt = Z));
              else if (H < y && 0 > v(ut, V))
                (N[mt] = ut), (N[H] = V), (mt = H);
              else break t;
            }
          }
          return J;
        }
        function v(N, J) {
          var V = N.sortIndex - J.sortIndex;
          return V !== 0 ? V : N.id - J.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var T = performance;
          i.unstable_now = function () {
            return T.now();
          };
        } else {
          var A = Date,
            R = A.now();
          i.unstable_now = function () {
            return A.now() - R;
          };
        }
        var E = [],
          b = [],
          U = 1,
          C = null,
          Y = 3,
          w = !1,
          F = !1,
          _t = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          dt = typeof clearTimeout == "function" ? clearTimeout : null,
          rt = typeof setImmediate < "u" ? setImmediate : null;
        function K(N) {
          for (var J = d(b); J !== null; ) {
            if (J.callback === null) s(b);
            else if (J.startTime <= N)
              s(b), (J.sortIndex = J.expirationTime), r(E, J);
            else break;
            J = d(b);
          }
        }
        function lt(N) {
          if (((_t = !1), K(N), !F))
            if (d(E) !== null) (F = !0), Bl();
            else {
              var J = d(b);
              J !== null && Ft(lt, J.startTime - N);
            }
        }
        var B = !1,
          st = -1,
          Dt = 5,
          Et = -1;
        function G() {
          return !(i.unstable_now() - Et < Dt);
        }
        function nt() {
          if (B) {
            var N = i.unstable_now();
            Et = N;
            var J = !0;
            try {
              t: {
                (F = !1), _t && ((_t = !1), dt(st), (st = -1)), (w = !0);
                var V = Y;
                try {
                  l: {
                    for (
                      K(N), C = d(E);
                      C !== null && !(C.expirationTime > N && G());

                    ) {
                      var mt = C.callback;
                      if (typeof mt == "function") {
                        (C.callback = null), (Y = C.priorityLevel);
                        var y = mt(C.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof y == "function")) {
                          (C.callback = y), K(N), (J = !0);
                          break l;
                        }
                        C === d(E) && s(E), K(N);
                      } else s(E);
                      C = d(E);
                    }
                    if (C !== null) J = !0;
                    else {
                      var M = d(b);
                      M !== null && Ft(lt, M.startTime - N), (J = !1);
                    }
                  }
                  break t;
                } finally {
                  (C = null), (Y = V), (w = !1);
                }
                J = void 0;
              }
            } finally {
              J ? $t() : (B = !1);
            }
          }
        }
        var $t;
        if (typeof rt == "function")
          $t = function () {
            rt(nt);
          };
        else if (typeof MessageChannel < "u") {
          var xl = new MessageChannel(),
            Dl = xl.port2;
          (xl.port1.onmessage = nt),
            ($t = function () {
              Dl.postMessage(null);
            });
        } else
          $t = function () {
            P(nt, 0);
          };
        function Bl() {
          B || ((B = !0), $t());
        }
        function Ft(N, J) {
          st = P(function () {
            N(i.unstable_now());
          }, J);
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
            F || w || ((F = !0), Bl());
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
            return d(E);
          }),
          (i.unstable_next = function (N) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = Y;
            }
            var V = Y;
            Y = J;
            try {
              return N();
            } finally {
              Y = V;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (N, J) {
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
            var V = Y;
            Y = N;
            try {
              return J();
            } finally {
              Y = V;
            }
          }),
          (i.unstable_scheduleCallback = function (N, J, V) {
            var mt = i.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? mt + V : mt))
                : (V = mt),
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
              (y = V + y),
              (N = {
                id: U++,
                callback: J,
                priorityLevel: N,
                startTime: V,
                expirationTime: y,
                sortIndex: -1,
              }),
              V > mt
                ? ((N.sortIndex = V),
                  r(b, N),
                  d(E) === null &&
                    N === d(b) &&
                    (_t ? (dt(st), (st = -1)) : (_t = !0), Ft(lt, V - mt)))
                : ((N.sortIndex = y), r(E, N), F || w || ((F = !0), Bl())),
              N
            );
          }),
          (i.unstable_shouldYield = G),
          (i.unstable_wrapCallback = function (N) {
            var J = Y;
            return function () {
              var V = Y;
              Y = J;
              try {
                return N.apply(this, arguments);
              } finally {
                Y = V;
              }
            };
          });
      })(Df)),
    Df
  );
}
var jd;
function Vh() {
  return jd || ((jd = 1), (Of.exports = Zh())), Of.exports;
}
var Mf = { exports: {} },
  wt = {};
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
  if (Yd) return wt;
  Yd = 1;
  var i = ci();
  function r(E) {
    var b = "https://react.dev/errors/" + E;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++)
        b += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return (
      "Minified React error #" +
      E +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d() {}
  var s = {
      d: {
        f: d,
        r: function () {
          throw Error(r(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    v = Symbol.for("react.portal");
  function T(E, b, U) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: C == null ? null : "" + C,
      children: E,
      containerInfo: b,
      implementation: U,
    };
  }
  var A = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(E, b) {
    if (E === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (wt.createPortal = function (E, b) {
      var U =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(r(299));
      return T(E, b, null, U);
    }),
    (wt.flushSync = function (E) {
      var b = A.T,
        U = s.p;
      try {
        if (((A.T = null), (s.p = 2), E)) return E();
      } finally {
        (A.T = b), (s.p = U), s.d.f();
      }
    }),
    (wt.preconnect = function (E, b) {
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
        s.d.C(E, b));
    }),
    (wt.prefetchDNS = function (E) {
      typeof E == "string" && s.d.D(E);
    }),
    (wt.preinit = function (E, b) {
      if (typeof E == "string" && b && typeof b.as == "string") {
        var U = b.as,
          C = R(U, b.crossOrigin),
          Y = typeof b.integrity == "string" ? b.integrity : void 0,
          w = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        U === "style"
          ? s.d.S(E, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: C,
              integrity: Y,
              fetchPriority: w,
            })
          : U === "script" &&
            s.d.X(E, {
              crossOrigin: C,
              integrity: Y,
              fetchPriority: w,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (wt.preinitModule = function (E, b) {
      if (typeof E == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var U = R(b.as, b.crossOrigin);
            s.d.M(E, {
              crossOrigin: U,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && s.d.M(E);
    }),
    (wt.preload = function (E, b) {
      if (
        typeof E == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var U = b.as,
          C = R(U, b.crossOrigin);
        s.d.L(E, U, {
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
    (wt.preloadModule = function (E, b) {
      if (typeof E == "string")
        if (b) {
          var U = R(b.as, b.crossOrigin);
          s.d.m(E, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: U,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else s.d.m(E);
    }),
    (wt.requestFormReset = function (E) {
      s.d.r(E);
    }),
    (wt.unstable_batchedUpdates = function (E, b) {
      return E(b);
    }),
    (wt.useFormState = function (E, b, U) {
      return A.H.useFormState(E, b, U);
    }),
    (wt.useFormStatus = function () {
      return A.H.useHostTransitionStatus();
    }),
    (wt.version = "19.0.0"),
    wt
  );
}
var Gd;
function Kh() {
  if (Gd) return Mf.exports;
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
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (Mf.exports = Lh()), Mf.exports;
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
function wh() {
  if (Xd) return xa;
  Xd = 1;
  var i = Vh(),
    r = ci(),
    d = Kh();
  function s(t) {
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
  var T = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    E = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    C = Symbol.for("react.provider"),
    Y = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    _t = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    rt = Symbol.for("react.lazy"),
    K = Symbol.for("react.offscreen"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    B = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (B && t[B]) || t["@@iterator"]),
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
      case R:
        return "Portal";
      case U:
        return "Profiler";
      case b:
        return "StrictMode";
      case _t:
        return "Suspense";
      case P:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
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
  var G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    nt = Object.assign,
    $t,
    xl;
  function Dl(t) {
    if ($t === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ($t = (l && l[1]) || ""),
          (xl =
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
      xl
    );
  }
  var Bl = !1;
  function Ft(t, l) {
    if (!t || Bl) return "";
    Bl = !0;
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
                } catch (z) {
                  var _ = z;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (z) {
                  _ = z;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                _ = z;
              }
              (D = t()) &&
                typeof D.catch == "function" &&
                D.catch(function () {});
            }
          } catch (z) {
            if (z && _ && typeof z.stack == "string") return [z.stack, _.stack];
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
        f = n[1];
      if (c && f) {
        var o = c.split(`
`),
          m = f.split(`
`);
        for (
          a = u = 0;
          u < o.length && !o[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (u === o.length || a === m.length)
          for (
            u = o.length - 1, a = m.length - 1;
            1 <= u && 0 <= a && o[u] !== m[a];

          )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (o[u] !== m[a]) {
            if (u !== 1 || a !== 1)
              do
                if ((u--, a--, 0 > a || o[u] !== m[a])) {
                  var p =
                    `
` + o[u].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      p.includes("<anonymous>") &&
                      (p = p.replace("<anonymous>", t.displayName)),
                    p
                  );
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      (Bl = !1), (Error.prepareStackTrace = e);
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
  function V(t) {
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
    if (V(t) !== t) throw Error(s(188));
  }
  function M(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = V(t)), l === null)) throw Error(s(188));
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
        throw Error(s(188));
      }
      if (e.return !== u.return) (e = a), (u = n);
      else {
        for (var c = !1, f = a.child; f; ) {
          if (f === e) {
            (c = !0), (e = a), (u = n);
            break;
          }
          if (f === u) {
            (c = !0), (u = a), (e = n);
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === e) {
              (c = !0), (e = n), (u = a);
              break;
            }
            if (f === u) {
              (c = !0), (u = n), (e = a);
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== u) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
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
    H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ut = { pending: !1, data: null, method: null, action: null },
    W = [],
    Jt = -1;
  function ot(t) {
    return { current: t };
  }
  function Rt(t) {
    0 > Jt || ((t.current = W[Jt]), (W[Jt] = null), Jt--);
  }
  function bt(t, l) {
    Jt++, (W[Jt] = t.current), (t.current = l);
  }
  var Ml = ot(null),
    ju = ot(null),
    ee = ot(null),
    Ga = ot(null);
  function Xa(t, l) {
    switch ((bt(ee, l), bt(ju, t), bt(Ml, null), (t = l.nodeType), t)) {
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
    Rt(Ml), bt(Ml, l);
  }
  function tu() {
    Rt(Ml), Rt(ju), Rt(ee);
  }
  function yi(t) {
    t.memoizedState !== null && bt(Ga, t);
    var l = Ml.current,
      e = fd(l, t.type);
    l !== e && (bt(ju, t), bt(Ml, e));
  }
  function Qa(t) {
    ju.current === t && (Rt(Ml), Rt(ju)),
      Ga.current === t && (Rt(Ga), (Ra._currentValue = ut));
  }
  var hi = Object.prototype.hasOwnProperty,
    vi = i.unstable_scheduleCallback,
    mi = i.unstable_cancelCallback,
    gy = i.unstable_shouldYield,
    Sy = i.unstable_requestPaint,
    Rl = i.unstable_now,
    by = i.unstable_getCurrentPriorityLevel,
    Wf = i.unstable_ImmediatePriority,
    $f = i.unstable_UserBlockingPriority,
    Za = i.unstable_NormalPriority,
    _y = i.unstable_LowPriority,
    Ff = i.unstable_IdlePriority,
    Ey = i.log,
    Ty = i.unstable_setDisableYieldValue,
    Yu = null,
    ll = null;
  function zy(t) {
    if (ll && typeof ll.onCommitFiberRoot == "function")
      try {
        ll.onCommitFiberRoot(Yu, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function ue(t) {
    if (
      (typeof Ey == "function" && Ty(t),
      ll && typeof ll.setStrictMode == "function")
    )
      try {
        ll.setStrictMode(Yu, t);
      } catch {}
  }
  var el = Math.clz32 ? Math.clz32 : Oy,
    py = Math.log,
    Ay = Math.LN2;
  function Oy(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((py(t) / Ay) | 0)) | 0;
  }
  var Va = 128,
    La = 4194304;
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
  function Ka(t, l) {
    var e = t.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      a = t.suspendedLanes,
      n = t.pingedLanes,
      c = t.warmLanes;
    t = t.finishedLanes !== 0;
    var f = e & 134217727;
    return (
      f !== 0
        ? ((e = f & ~a),
          e !== 0
            ? (u = Re(e))
            : ((n &= f),
              n !== 0
                ? (u = Re(n))
                : t || ((c = f & ~c), c !== 0 && (u = Re(c)))))
        : ((f = e & ~a),
          f !== 0
            ? (u = Re(f))
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
  function Dy(t, l) {
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
    var t = Va;
    return (Va <<= 1), (Va & 4194176) === 0 && (Va = 128), t;
  }
  function If() {
    var t = La;
    return (La <<= 1), (La & 62914560) === 0 && (La = 4194304), t;
  }
  function gi(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Xu(t, l) {
    (t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function My(t, l, e, u, a, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0);
    var f = t.entanglements,
      o = t.expirationTimes,
      m = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var p = 31 - el(e),
        D = 1 << p;
      (f[p] = 0), (o[p] = -1);
      var _ = m[p];
      if (_ !== null)
        for (m[p] = null, p = 0; p < _.length; p++) {
          var z = _[p];
          z !== null && (z.lane &= -536870913);
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
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Od(t.type));
  }
  function Ry(t, l) {
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
    lu = "__reactContainer$" + ae,
    Si = "__reactEvents$" + ae,
    Uy = "__reactListeners$" + ae,
    Ny = "__reactHandles$" + ae,
    ar = "__reactResources$" + ae,
    Qu = "__reactMarker$" + ae;
  function bi(t) {
    delete t[Lt], delete t[Pt], delete t[Si], delete t[Uy], delete t[Ny];
  }
  function Ue(t) {
    var l = t[Lt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if ((l = e[lu] || e[Lt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = od(t); t !== null; ) {
            if ((e = t[Lt])) return e;
            t = od(t);
          }
        return l;
      }
      (t = e), (e = t.parentNode);
    }
    return null;
  }
  function eu(t) {
    if ((t = t[Lt] || t[lu])) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Zu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
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
  var jl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Hy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    cr = {},
    fr = {};
  function Cy(t) {
    return hi.call(fr, t)
      ? !0
      : hi.call(cr, t)
        ? !1
        : Hy.test(t)
          ? (fr[t] = !0)
          : ((cr[t] = !0), !1);
  }
  function wa(t, l, e) {
    if (Cy(l))
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
  function Ja(t, l, e) {
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
  function Yl(t, l, e, u) {
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
  function qy(t) {
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
  function ka(t) {
    t._valueTracker || (t._valueTracker = qy(t));
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
  var xy = /[\n"\\]/g;
  function ol(t) {
    return t.replace(xy, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function _i(t, l, e, u, a, n, c, f) {
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
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + sl(f))
        : t.removeAttribute("name");
  }
  function or(t, l, e, u, a, n, c, f) {
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
        f || l === t.value || (t.value = l),
        (t.defaultValue = l);
    }
    (u = u ?? a),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (t.checked = f ? t.checked : !!u),
      (t.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function Ei(t, l, e) {
    (l === "number" && Wa(t.ownerDocument) === t) ||
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
        if (e != null) throw Error(s(92));
        if (X(u)) {
          if (1 < u.length) throw Error(s(93));
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
  var By = new Set(
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
        : typeof e != "number" || e === 0 || By.has(l)
          ? l === "float"
            ? (t.cssFloat = e)
            : (t[l] = ("" + e).trim())
          : (t[l] = e + "px");
  }
  function vr(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
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
  function Ti(t) {
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
  var jy = new Map([
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
    Yy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $a(t) {
    return Yy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var zi = null;
  function pi(t) {
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
            (_i(
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
                if (!a) throw Error(s(90));
                _i(
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
  var Ai = !1;
  function gr(t, l, e) {
    if (Ai) return t(l, e);
    Ai = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (
        ((Ai = !1),
        (cu !== null || fu !== null) &&
          (qn(), cu && ((l = cu), (t = fu), (fu = cu = null), mr(l), t)))
      )
        for (l = 0; l < t.length; l++) mr(t[l]);
    }
  }
  function Vu(t, l) {
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
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var Oi = !1;
  if (jl)
    try {
      var Lu = {};
      Object.defineProperty(Lu, "passive", {
        get: function () {
          Oi = !0;
        },
      }),
        window.addEventListener("test", Lu, Lu),
        window.removeEventListener("test", Lu, Lu);
    } catch {
      Oi = !1;
    }
  var ne = null,
    Di = null,
    Fa = null;
  function Sr() {
    if (Fa) return Fa;
    var t,
      l = Di,
      e = l.length,
      u,
      a = "value" in ne ? ne.value : ne.textContent,
      n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++);
    var c = e - t;
    for (u = 1; u <= c && l[e - u] === a[n - u]; u++);
    return (Fa = a.slice(t, 1 < u ? 1 - u : void 0));
  }
  function Pa(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ia() {
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
      for (var f in t)
        t.hasOwnProperty(f) && ((e = t[f]), (this[f] = e ? e(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ia
          : br),
        (this.isPropagationStopped = br),
        this
      );
    }
    return (
      nt(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Ia));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Ia));
        },
        persist: function () {},
        isPersistent: Ia,
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
    tn = It(He),
    Ku = nt({}, He, { view: 0, detail: 0 }),
    Gy = It(Ku),
    Mi,
    Ri,
    wu,
    ln = nt({}, Ku, {
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
      getModifierState: Ni,
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
          : (t !== wu &&
              (wu && t.type === "mousemove"
                ? ((Mi = t.screenX - wu.screenX), (Ri = t.screenY - wu.screenY))
                : (Ri = Mi = 0),
              (wu = t)),
            Mi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ri;
      },
    }),
    _r = It(ln),
    Xy = nt({}, ln, { dataTransfer: 0 }),
    Qy = It(Xy),
    Zy = nt({}, Ku, { relatedTarget: 0 }),
    Ui = It(Zy),
    Vy = nt({}, He, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ly = It(Vy),
    Ky = nt({}, He, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    wy = It(Ky),
    Jy = nt({}, He, { data: 0 }),
    Er = It(Jy),
    ky = {
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
    Wy = {
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
    $y = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Fy(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = $y[t])
        ? !!l[t]
        : !1;
  }
  function Ni() {
    return Fy;
  }
  var Py = nt({}, Ku, {
      key: function (t) {
        if (t.key) {
          var l = ky[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Pa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Wy[t.keyCode] || "Unidentified"
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
      getModifierState: Ni,
      charCode: function (t) {
        return t.type === "keypress" ? Pa(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Pa(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Iy = It(Py),
    t0 = nt({}, ln, {
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
    Tr = It(t0),
    l0 = nt({}, Ku, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ni,
    }),
    e0 = It(l0),
    u0 = nt({}, He, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    a0 = It(u0),
    n0 = nt({}, ln, {
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
    i0 = It(n0),
    c0 = nt({}, He, { newState: 0, oldState: 0 }),
    f0 = It(c0),
    r0 = [9, 13, 27, 32],
    Hi = jl && "CompositionEvent" in window,
    Ju = null;
  jl && "documentMode" in document && (Ju = document.documentMode);
  var s0 = jl && "TextEvent" in window && !Ju,
    zr = jl && (!Hi || (Ju && 8 < Ju && 11 >= Ju)),
    pr = " ",
    Ar = !1;
  function Or(t, l) {
    switch (t) {
      case "keyup":
        return r0.indexOf(l.keyCode) !== -1;
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
  function o0(t, l) {
    switch (t) {
      case "compositionend":
        return Dr(l);
      case "keypress":
        return l.which !== 32 ? null : ((Ar = !0), pr);
      case "textInput":
        return (t = l.data), t === pr && Ar ? null : t;
      default:
        return null;
    }
  }
  function d0(t, l) {
    if (ru)
      return t === "compositionend" || (!Hi && Or(t, l))
        ? ((t = Sr()), (Fa = Di = ne = null), (ru = !1), t)
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
        return zr && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var y0 = {
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
    return l === "input" ? !!y0[t.type] : l === "textarea";
  }
  function Rr(t, l, e, u) {
    cu ? (fu ? fu.push(u) : (fu = [u])) : (cu = u),
      (l = Gn(l, "onChange")),
      0 < l.length &&
        ((e = new tn("onChange", "change", null, e, u)),
        t.push({ event: e, listeners: l }));
  }
  var ku = null,
    Wu = null;
  function h0(t) {
    ed(t, 0);
  }
  function en(t) {
    var l = Zu(t);
    if (sr(l)) return t;
  }
  function Ur(t, l) {
    if (t === "change") return l;
  }
  var Nr = !1;
  if (jl) {
    var Ci;
    if (jl) {
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
  function Cr() {
    ku && (ku.detachEvent("onpropertychange", qr), (Wu = ku = null));
  }
  function qr(t) {
    if (t.propertyName === "value" && en(Wu)) {
      var l = [];
      Rr(l, Wu, t, pi(t)), gr(h0, l);
    }
  }
  function v0(t, l, e) {
    t === "focusin"
      ? (Cr(), (ku = l), (Wu = e), ku.attachEvent("onpropertychange", qr))
      : t === "focusout" && Cr();
  }
  function m0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return en(Wu);
  }
  function g0(t, l) {
    if (t === "click") return en(l);
  }
  function S0(t, l) {
    if (t === "input" || t === "change") return en(l);
  }
  function b0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var ul = typeof Object.is == "function" ? Object.is : b0;
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
      if (!hi.call(l, a) || !ul(t[a], l[a])) return !1;
    }
    return !0;
  }
  function xr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Br(t, l) {
    var e = xr(t);
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
      e = xr(e);
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
  function xi(t) {
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
  function _0(t, l) {
    var e = Yr(l);
    l = t.focusedElem;
    var u = t.selectionRange;
    if (
      e !== l &&
      l &&
      l.ownerDocument &&
      jr(l.ownerDocument.documentElement, l)
    ) {
      if (u !== null && xi(l)) {
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
  var E0 = jl && "documentMode" in document && 11 >= document.documentMode,
    su = null,
    Bi = null,
    Fu = null,
    ji = !1;
  function Gr(t, l, e) {
    var u =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    ji ||
      su == null ||
      su !== Wa(u) ||
      ((u = su),
      "selectionStart" in u && xi(u)
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
        (u = Gn(Bi, "onSelect")),
        0 < u.length &&
          ((l = new tn("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: u }),
          (l.target = su))));
  }
  function Ce(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var ou = {
      animationend: Ce("Animation", "AnimationEnd"),
      animationiteration: Ce("Animation", "AnimationIteration"),
      animationstart: Ce("Animation", "AnimationStart"),
      transitionrun: Ce("Transition", "TransitionRun"),
      transitionstart: Ce("Transition", "TransitionStart"),
      transitioncancel: Ce("Transition", "TransitionCancel"),
      transitionend: Ce("Transition", "TransitionEnd"),
    },
    Yi = {},
    Xr = {};
  jl &&
    ((Xr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ou.animationend.animation,
      delete ou.animationiteration.animation,
      delete ou.animationstart.animation),
    "TransitionEvent" in window || delete ou.transitionend.transition);
  function qe(t) {
    if (Yi[t]) return Yi[t];
    if (!ou[t]) return t;
    var l = ou[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in Xr) return (Yi[t] = l[e]);
    return t;
  }
  var Qr = qe("animationend"),
    Zr = qe("animationiteration"),
    Vr = qe("animationstart"),
    T0 = qe("transitionrun"),
    z0 = qe("transitionstart"),
    p0 = qe("transitioncancel"),
    Lr = qe("transitionend"),
    Kr = new Map(),
    wr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Tl(t, l) {
    Kr.set(t, l), Ne(l, [t]);
  }
  var dl = [],
    du = 0,
    Gi = 0;
  function un() {
    for (var t = du, l = (Gi = du = 0); l < t; ) {
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
  function an(t, l, e, u) {
    (dl[du++] = t),
      (dl[du++] = l),
      (dl[du++] = e),
      (dl[du++] = u),
      (Gi |= u),
      (t.lanes |= u),
      (t = t.alternate),
      t !== null && (t.lanes |= u);
  }
  function Xi(t, l, e, u) {
    return an(t, l, e, u), nn(t);
  }
  function ie(t, l) {
    return an(t, null, null, l), nn(t);
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
  function nn(t) {
    if (50 < Ta) throw ((Ta = 0), (wc = null), Error(s(185)));
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
        : ((l = { value: t, source: l, stack: J(l) }), kr.set(t, l), l);
    }
    return { value: t, source: l, stack: J(l) };
  }
  var hu = [],
    vu = 0,
    cn = null,
    fn = 0,
    hl = [],
    vl = 0,
    xe = null,
    Gl = 1,
    Xl = "";
  function Be(t, l) {
    (hu[vu++] = fn), (hu[vu++] = cn), (cn = t), (fn = l);
  }
  function Wr(t, l, e) {
    (hl[vl++] = Gl), (hl[vl++] = Xl), (hl[vl++] = xe), (xe = t);
    var u = Gl;
    t = Xl;
    var a = 32 - el(u) - 1;
    (u &= ~(1 << a)), (e += 1);
    var n = 32 - el(l) + a;
    if (30 < n) {
      var c = a - (a % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (a -= c),
        (Gl = (1 << (32 - el(l) + a)) | (e << a) | u),
        (Xl = n + t);
    } else (Gl = (1 << n) | (e << a) | u), (Xl = t);
  }
  function Qi(t) {
    t.return !== null && (Be(t, 1), Wr(t, 1, 0));
  }
  function Zi(t) {
    for (; t === cn; )
      (cn = hu[--vu]), (hu[vu] = null), (fn = hu[--vu]), (hu[vu] = null);
    for (; t === xe; )
      (xe = hl[--vl]),
        (hl[vl] = null),
        (Xl = hl[--vl]),
        (hl[vl] = null),
        (Gl = hl[--vl]),
        (hl[vl] = null);
  }
  var kt = null,
    Xt = null,
    ct = !1,
    zl = null,
    Ul = !1,
    Vi = Error(s(519));
  function je(t) {
    var l = Error(s(418, ""));
    throw (ta(yl(l, t)), Vi);
  }
  function $r(t) {
    var l = t.stateNode,
      e = t.type,
      u = t.memoizedProps;
    switch (((l[Lt] = t), (l[Pt] = u), e)) {
      case "dialog":
        et("cancel", l), et("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < pa.length; e++) et(pa[e], l);
        break;
      case "source":
        et("error", l);
        break;
      case "img":
      case "image":
      case "link":
        et("error", l), et("load", l);
        break;
      case "details":
        et("toggle", l);
        break;
      case "input":
        et("invalid", l),
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
          ka(l);
        break;
      case "select":
        et("invalid", l);
        break;
      case "textarea":
        et("invalid", l), yr(l, u.value, u.defaultValue, u.children), ka(l);
    }
    (e = u.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      u.suppressHydrationWarning === !0 ||
      id(l.textContent, e)
        ? (u.popover != null && (et("beforetoggle", l), et("toggle", l)),
          u.onScroll != null && et("scroll", l),
          u.onScrollEnd != null && et("scrollend", l),
          u.onClick != null && (l.onclick = Xn),
          (l = !0))
        : (l = !1),
      l || je(t);
  }
  function Fr(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 3:
        case 27:
          Ul = !0;
          return;
        case 5:
        case 13:
          Ul = !1;
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
            !(e !== "form" && e !== "button") || sf(t.type, t.memoizedProps))),
        (e = !e)),
      e && (l = !0),
      l && Xt && je(t),
      Fr(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === "/$")) {
              if (l === 0) {
                Xt = Al(t.nextSibling);
                break t;
              }
              l--;
            } else (e !== "$" && e !== "$!" && e !== "$?") || l++;
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else Xt = kt ? Al(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Iu() {
    (Xt = kt = null), (ct = !1);
  }
  function ta(t) {
    zl === null ? (zl = [t]) : zl.push(t);
  }
  var la = Error(s(460)),
    Pr = Error(s(474)),
    Li = { then: function () {} };
  function Ir(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function rn() {}
  function ts(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(rn, rn), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), t === la ? Error(s(483)) : t);
      default:
        if (typeof l.status == "string") l.then(rn, rn);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
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
            throw ((t = l.reason), t === la ? Error(s(483)) : t);
        }
        throw ((ea = l), la);
    }
  }
  var ea = null;
  function ls() {
    if (ea === null) throw Error(s(459));
    var t = ea;
    return (ea = null), t;
  }
  var mu = null,
    ua = 0;
  function sn(t) {
    var l = ua;
    return (ua += 1), mu === null && (mu = []), ts(mu, t, l);
  }
  function aa(t, l) {
    (l = l.props.ref), (t.ref = l !== void 0 ? l : null);
  }
  function on(t, l) {
    throw l.$$typeof === T
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          s(
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
      return (g = Se(g, h)), (g.index = 0), (g.sibling = null), g;
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
    function f(g, h, S, O) {
      return h === null || h.tag !== 6
        ? ((h = Yc(S, g.mode, O)), (h.return = g), h)
        : ((h = a(h, S)), (h.return = g), h);
    }
    function o(g, h, S, O) {
      var q = S.type;
      return q === E
        ? p(g, h, S.props.children, O, S.key)
        : h !== null &&
            (h.elementType === q ||
              (typeof q == "object" &&
                q !== null &&
                q.$$typeof === rt &&
                es(q) === h.type))
          ? ((h = a(h, S.props)), aa(h, S), (h.return = g), h)
          : ((h = Rn(S.type, S.key, S.props, null, g.mode, O)),
            aa(h, S),
            (h.return = g),
            h);
    }
    function m(g, h, S, O) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== S.containerInfo ||
        h.stateNode.implementation !== S.implementation
        ? ((h = Gc(S, g.mode, O)), (h.return = g), h)
        : ((h = a(h, S.children || [])), (h.return = g), h);
    }
    function p(g, h, S, O, q) {
      return h === null || h.tag !== 7
        ? ((h = Je(S, g.mode, O, q)), (h.return = g), h)
        : ((h = a(h, S)), (h.return = g), h);
    }
    function D(g, h, S) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = Yc("" + h, g.mode, S)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case A:
            return (
              (S = Rn(h.type, h.key, h.props, null, g.mode, S)),
              aa(S, h),
              (S.return = g),
              S
            );
          case R:
            return (h = Gc(h, g.mode, S)), (h.return = g), h;
          case rt:
            var O = h._init;
            return (h = O(h._payload)), D(g, h, S);
        }
        if (X(h) || st(h))
          return (h = Je(h, g.mode, S, null)), (h.return = g), h;
        if (typeof h.then == "function") return D(g, sn(h), S);
        if (h.$$typeof === w) return D(g, On(g, h), S);
        on(g, h);
      }
      return null;
    }
    function _(g, h, S, O) {
      var q = h !== null ? h.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return q !== null ? null : f(g, h, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case A:
            return S.key === q ? o(g, h, S, O) : null;
          case R:
            return S.key === q ? m(g, h, S, O) : null;
          case rt:
            return (q = S._init), (S = q(S._payload)), _(g, h, S, O);
        }
        if (X(S) || st(S)) return q !== null ? null : p(g, h, S, O, null);
        if (typeof S.then == "function") return _(g, h, sn(S), O);
        if (S.$$typeof === w) return _(g, h, On(g, S), O);
        on(g, S);
      }
      return null;
    }
    function z(g, h, S, O, q) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (g = g.get(S) || null), f(h, g, "" + O, q);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case A:
            return (
              (g = g.get(O.key === null ? S : O.key) || null), o(h, g, O, q)
            );
          case R:
            return (
              (g = g.get(O.key === null ? S : O.key) || null), m(h, g, O, q)
            );
          case rt:
            var I = O._init;
            return (O = I(O._payload)), z(g, h, S, O, q);
        }
        if (X(O) || st(O)) return (g = g.get(S) || null), p(h, g, O, q, null);
        if (typeof O.then == "function") return z(g, h, S, sn(O), q);
        if (O.$$typeof === w) return z(g, h, S, On(h, O), q);
        on(h, O);
      }
      return null;
    }
    function x(g, h, S, O) {
      for (
        var q = null, I = null, j = h, Q = (h = 0), Gt = null;
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
          I === null ? (q = ft) : (I.sibling = ft),
          (I = ft),
          (j = Gt);
      }
      if (Q === S.length) return e(g, j), ct && Be(g, Q), q;
      if (j === null) {
        for (; Q < S.length; Q++)
          (j = D(g, S[Q], O)),
            j !== null &&
              ((h = n(j, h, Q)),
              I === null ? (q = j) : (I.sibling = j),
              (I = j));
        return ct && Be(g, Q), q;
      }
      for (j = u(j); Q < S.length; Q++)
        (Gt = z(j, g, Q, S[Q], O)),
          Gt !== null &&
            (t &&
              Gt.alternate !== null &&
              j.delete(Gt.key === null ? Q : Gt.key),
            (h = n(Gt, h, Q)),
            I === null ? (q = Gt) : (I.sibling = Gt),
            (I = Gt));
      return (
        t &&
          j.forEach(function (Ae) {
            return l(g, Ae);
          }),
        ct && Be(g, Q),
        q
      );
    }
    function L(g, h, S, O) {
      if (S == null) throw Error(s(151));
      for (
        var q = null, I = null, j = h, Q = (h = 0), Gt = null, ft = S.next();
        j !== null && !ft.done;
        Q++, ft = S.next()
      ) {
        j.index > Q ? ((Gt = j), (j = null)) : (Gt = j.sibling);
        var Ae = _(g, j, ft.value, O);
        if (Ae === null) {
          j === null && (j = Gt);
          break;
        }
        t && j && Ae.alternate === null && l(g, j),
          (h = n(Ae, h, Q)),
          I === null ? (q = Ae) : (I.sibling = Ae),
          (I = Ae),
          (j = Gt);
      }
      if (ft.done) return e(g, j), ct && Be(g, Q), q;
      if (j === null) {
        for (; !ft.done; Q++, ft = S.next())
          (ft = D(g, ft.value, O)),
            ft !== null &&
              ((h = n(ft, h, Q)),
              I === null ? (q = ft) : (I.sibling = ft),
              (I = ft));
        return ct && Be(g, Q), q;
      }
      for (j = u(j); !ft.done; Q++, ft = S.next())
        (ft = z(j, g, Q, ft.value, O)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              j.delete(ft.key === null ? Q : ft.key),
            (h = n(ft, h, Q)),
            I === null ? (q = ft) : (I.sibling = ft),
            (I = ft));
      return (
        t &&
          j.forEach(function (Yh) {
            return l(g, Yh);
          }),
        ct && Be(g, Q),
        q
      );
    }
    function Ot(g, h, S, O) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === E &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case A:
            t: {
              for (var q = S.key; h !== null; ) {
                if (h.key === q) {
                  if (((q = S.type), q === E)) {
                    if (h.tag === 7) {
                      e(g, h.sibling),
                        (O = a(h, S.props.children)),
                        (O.return = g),
                        (g = O);
                      break t;
                    }
                  } else if (
                    h.elementType === q ||
                    (typeof q == "object" &&
                      q !== null &&
                      q.$$typeof === rt &&
                      es(q) === h.type)
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
              S.type === E
                ? ((O = Je(S.props.children, g.mode, O, S.key)),
                  (O.return = g),
                  (g = O))
                : ((O = Rn(S.type, S.key, S.props, null, g.mode, O)),
                  aa(O, S),
                  (O.return = g),
                  (g = O));
            }
            return c(g);
          case R:
            t: {
              for (q = S.key; h !== null; ) {
                if (h.key === q)
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
              (O = Gc(S, g.mode, O)), (O.return = g), (g = O);
            }
            return c(g);
          case rt:
            return (q = S._init), (S = q(S._payload)), Ot(g, h, S, O);
        }
        if (X(S)) return x(g, h, S, O);
        if (st(S)) {
          if (((q = st(S)), typeof q != "function")) throw Error(s(150));
          return (S = q.call(S)), L(g, h, S, O);
        }
        if (typeof S.then == "function") return Ot(g, h, sn(S), O);
        if (S.$$typeof === w) return Ot(g, h, On(g, S), O);
        on(g, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          h !== null && h.tag === 6
            ? (e(g, h.sibling), (O = a(h, S)), (O.return = g), (g = O))
            : (e(g, h), (O = Yc(S, g.mode, O)), (O.return = g), (g = O)),
          c(g))
        : e(g, h);
    }
    return function (g, h, S, O) {
      try {
        ua = 0;
        var q = Ot(g, h, S, O);
        return (mu = null), q;
      } catch (j) {
        if (j === la) throw j;
        var I = bl(29, j, null, g.mode);
        return (I.lanes = O), (I.return = g), I;
      } finally {
      }
    };
  }
  var Ye = us(!0),
    as = us(!1),
    gu = ot(null),
    dn = ot(0);
  function ns(t, l) {
    (t = Fl), bt(dn, t), bt(gu, l), (Fl = t | l.baseLanes);
  }
  function Ki() {
    bt(dn, Fl), bt(gu, gu.current);
  }
  function wi() {
    (Fl = dn.current), Rt(gu), Rt(dn);
  }
  var ml = ot(null),
    Nl = null;
  function ce(t) {
    var l = t.alternate;
    bt(Ct, Ct.current & 1),
      bt(ml, t),
      Nl === null &&
        (l === null || gu.current !== null || l.memoizedState !== null) &&
        (Nl = t);
  }
  function is(t) {
    if (t.tag === 22) {
      if ((bt(Ct, Ct.current), bt(ml, t), Nl === null)) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (Nl = t);
      }
    } else fe();
  }
  function fe() {
    bt(Ct, Ct.current), bt(ml, ml.current);
  }
  function Ql(t) {
    Rt(ml), Nl === t && (Nl = null), Rt(Ct);
  }
  var Ct = ot(0);
  function yn(t) {
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
  var A0 =
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
    O0 = i.unstable_scheduleCallback,
    D0 = i.unstable_NormalPriority,
    qt = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ji() {
    return { controller: new A0(), data: new Map(), refCount: 0 };
  }
  function na(t) {
    t.refCount--,
      t.refCount === 0 &&
        O0(D0, function () {
          t.controller.abort();
        });
  }
  var ia = null,
    ki = 0,
    Su = 0,
    bu = null;
  function M0(t, l) {
    if (ia === null) {
      var e = (ia = []);
      (ki = 0),
        (Su = tf()),
        (bu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            e.push(u);
          },
        });
    }
    return ki++, l.then(cs, cs), l;
  }
  function cs() {
    if (--ki === 0 && ia !== null) {
      bu !== null && (bu.status = "fulfilled");
      var t = ia;
      (ia = null), (Su = 0), (bu = null);
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function R0(t, l) {
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
      M0(t, l),
      fs !== null && fs(t, l);
  };
  var Ge = ot(null);
  function Wi() {
    var t = Ge.current;
    return t !== null ? t : gt.pooledCache;
  }
  function hn(t, l) {
    l === null ? bt(Ge, Ge.current) : bt(Ge, l.pool);
  }
  function rs() {
    var t = Wi();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var re = 0,
    $ = null,
    yt = null,
    Ut = null,
    vn = !1,
    _u = !1,
    Xe = !1,
    mn = 0,
    ca = 0,
    Eu = null,
    U0 = 0;
  function Mt() {
    throw Error(s(321));
  }
  function $i(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ul(t[e], l[e])) return !1;
    return !0;
  }
  function Fi(t, l, e, u, a, n) {
    return (
      (re = n),
      ($ = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? Qe : se),
      (Xe = !1),
      (n = e(u, a)),
      (Xe = !1),
      _u && (n = os(l, e, u, a)),
      ss(t),
      n
    );
  }
  function ss(t) {
    G.H = Hl;
    var l = yt !== null && yt.next !== null;
    if (((re = 0), (Ut = yt = $ = null), (vn = !1), (ca = 0), (Eu = null), l))
      throw Error(s(300));
    t === null ||
      jt ||
      ((t = t.dependencies), t !== null && An(t) && (jt = !0));
  }
  function os(t, l, e, u) {
    $ = t;
    var a = 0;
    do {
      if ((_u && (Eu = null), (ca = 0), (_u = !1), 25 <= a))
        throw Error(s(301));
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
  function N0() {
    var t = G.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? fa(l) : l),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && ($.flags |= 1024),
      l
    );
  }
  function Pi() {
    var t = mn !== 0;
    return (mn = 0), t;
  }
  function Ii(t, l, e) {
    (l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e);
  }
  function tc(t) {
    if (vn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), (t = t.next);
      }
      vn = !1;
    }
    (re = 0), (Ut = yt = $ = null), (_u = !1), (ca = mn = 0), (Eu = null);
  }
  function tl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ut === null ? ($.memoizedState = Ut = t) : (Ut = Ut.next = t), Ut;
  }
  function Nt() {
    if (yt === null) {
      var t = $.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var l = Ut === null ? $.memoizedState : Ut.next;
    if (l !== null) (Ut = l), (yt = t);
    else {
      if (t === null)
        throw $.alternate === null ? Error(s(467)) : Error(s(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Ut === null ? ($.memoizedState = Ut = t) : (Ut = Ut.next = t);
    }
    return Ut;
  }
  var gn;
  gn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function fa(t) {
    var l = ca;
    return (
      (ca += 1),
      Eu === null && (Eu = []),
      (t = ts(Eu, t, l)),
      (l = $),
      (Ut === null ? l.memoizedState : Ut.next) === null &&
        ((l = l.alternate),
        (G.H = l === null || l.memoizedState === null ? Qe : se)),
      t
    );
  }
  function Sn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return fa(t);
      if (t.$$typeof === w) return Kt(t);
    }
    throw Error(s(438, String(t)));
  }
  function lc(t) {
    var l = null,
      e = $.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var u = $.alternate;
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
      e === null && ((e = gn()), ($.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++) e[u] = lt;
    return l.index++, e;
  }
  function Zl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function bn(t) {
    var l = Nt();
    return ec(l, yt, t);
  }
  function ec(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(s(311));
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
      var f = (c = null),
        o = null,
        m = l,
        p = !1;
      do {
        var D = m.lane & -536870913;
        if (D !== m.lane ? (at & D) === D : (re & D) === D) {
          var _ = m.revertLane;
          if (_ === 0)
            o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              D === Su && (p = !0);
          else if ((re & _) === _) {
            (m = m.next), _ === Su && (p = !0);
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
              o === null ? ((f = o = D), (c = n)) : (o = o.next = D),
              ($.lanes |= _),
              (be |= _);
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
            o === null ? ((f = o = _), (c = n)) : (o = o.next = _),
            ($.lanes |= D),
            (be |= D);
        m = m.next;
      } while (m !== null && m !== l);
      if (
        (o === null ? (c = n) : (o.next = f),
        !ul(n, t.memoizedState) && ((jt = !0), p && ((e = bu), e !== null)))
      )
        throw e;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = o),
        (u.lastRenderedState = n);
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function uc(t) {
    var l = Nt(),
      e = l.queue;
    if (e === null) throw Error(s(311));
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
    var u = $,
      a = Nt(),
      n = ct;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var c = !ul((yt || a).memoizedState, e);
    if (
      (c && ((a.memoizedState = e), (jt = !0)),
      (a = a.queue),
      ic(vs.bind(null, u, a, t), [t]),
      a.getSnapshot !== l || c || (Ut !== null && Ut.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Tu(9, hs.bind(null, u, a, e, l), { destroy: void 0 }, null),
        gt === null)
      )
        throw Error(s(349));
      n || (re & 60) !== 0 || ys(u, l, e);
    }
    return e;
  }
  function ys(t, l, e) {
    (t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = $.updateQueue),
      l === null
        ? ((l = gn()), ($.updateQueue = l), (l.stores = [t]))
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
    var l = ie(t, 2);
    l !== null && Wt(l, t, 2);
  }
  function ac(t) {
    var l = tl();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), Xe)) {
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
  function Ss(t, l, e, u) {
    return (t.baseState = e), ec(t, yt, typeof u == "function" ? u : Zl);
  }
  function H0(t, l, e, u, a) {
    if (Tn(t)) throw Error(s(485));
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
        var f = e(a, u),
          o = G.S;
        o !== null && o(c, f), _s(t, l, f);
      } catch (m) {
        nc(t, l, m);
      } finally {
        G.T = n;
      }
    } else
      try {
        (n = e(a, u)), _s(t, l, n);
      } catch (m) {
        nc(t, l, m);
      }
  }
  function _s(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (u) {
            Es(t, l, u);
          },
          function (u) {
            return nc(t, l, u);
          },
        )
      : Es(t, l, e);
  }
  function Es(t, l, e) {
    (l.status = "fulfilled"),
      (l.value = e),
      Ts(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), bs(t, e)));
  }
  function nc(t, l, e) {
    var u = t.pending;
    if (((t.pending = null), u !== null)) {
      u = u.next;
      do (l.status = "rejected"), (l.reason = e), Ts(l), (l = l.next);
      while (l !== u);
    }
    t.action = null;
  }
  function Ts(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function zs(t, l) {
    return l;
  }
  function ps(t, l) {
    if (ct) {
      var e = gt.formState;
      if (e !== null) {
        t: {
          var u = $;
          if (ct) {
            if (Xt) {
              l: {
                for (var a = Xt, n = Ul; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (((a = Al(a.nextSibling)), a === null)) {
                    a = null;
                    break l;
                  }
                }
                (n = a.data), (a = n === "F!" || n === "F" ? a : null);
              }
              if (a) {
                (Xt = Al(a.nextSibling)), (u = a.data === "F!");
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
        lastRenderedReducer: zs,
        lastRenderedState: l,
      }),
      (e.queue = u),
      (e = Zs.bind(null, $, u)),
      (u.dispatch = e),
      (u = ac(!1)),
      (n = oc.bind(null, $, !1, u.queue)),
      (u = tl()),
      (a = { state: l, dispatch: null, action: t, pending: null }),
      (u.queue = a),
      (e = H0.bind(null, $, a, n, e)),
      (a.dispatch = e),
      (u.memoizedState = t),
      [l, e, !1]
    );
  }
  function As(t) {
    var l = Nt();
    return Os(l, yt, t);
  }
  function Os(t, l, e) {
    (l = ec(t, l, zs)[0]),
      (t = bn(Zl)[0]),
      (l =
        typeof l == "object" && l !== null && typeof l.then == "function"
          ? fa(l)
          : l);
    var u = Nt(),
      a = u.queue,
      n = a.dispatch;
    return (
      e !== u.memoizedState &&
        (($.flags |= 2048),
        Tu(9, C0.bind(null, a, e), { destroy: void 0 }, null)),
      [l, n, t]
    );
  }
  function C0(t, l) {
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
  function Tu(t, l, e, u) {
    return (
      (t = { tag: t, create: l, inst: e, deps: u, next: null }),
      (l = $.updateQueue),
      l === null && ((l = gn()), ($.updateQueue = l)),
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
  function _n(t, l, e, u) {
    var a = tl();
    ($.flags |= t),
      (a.memoizedState = Tu(
        1 | l,
        e,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function En(t, l, e, u) {
    var a = Nt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    yt !== null && u !== null && $i(u, yt.memoizedState.deps)
      ? (a.memoizedState = Tu(l, e, n, u))
      : (($.flags |= t), (a.memoizedState = Tu(1 | l, e, n, u)));
  }
  function Rs(t, l) {
    _n(8390656, 8, t, l);
  }
  function ic(t, l) {
    En(2048, 8, t, l);
  }
  function Us(t, l) {
    return En(4, 2, t, l);
  }
  function Ns(t, l) {
    return En(4, 4, t, l);
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
  function Cs(t, l, e) {
    (e = e != null ? e.concat([t]) : null), En(4, 4, Hs.bind(null, l, t), e);
  }
  function cc() {}
  function qs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && $i(l, u[1]) ? u[0] : ((e.memoizedState = [t, l]), t);
  }
  function xs(t, l) {
    var e = Nt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && $i(l, u[1])) return u[0];
    if (((u = t()), Xe)) {
      ue(!0);
      try {
        t();
      } finally {
        ue(!1);
      }
    }
    return (e.memoizedState = [u, l]), u;
  }
  function fc(t, l, e) {
    return e === void 0 || (re & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = Yo()), ($.lanes |= t), (be |= t), e);
  }
  function Bs(t, l, e, u) {
    return ul(e, l)
      ? e
      : gu.current !== null
        ? ((t = fc(t, e, u)), ul(t, l) || (jt = !0), t)
        : (re & 42) === 0
          ? ((jt = !0), (t.memoizedState = e))
          : ((t = Yo()), ($.lanes |= t), (be |= t), l);
  }
  function js(t, l, e, u, a) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var c = G.T,
      f = {};
    (G.T = f), oc(t, !1, l, e);
    try {
      var o = a(),
        m = G.S;
      if (
        (m !== null && m(f, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var p = R0(o, u);
        ra(t, l, p, cl(t));
      } else ra(t, l, u, cl(t));
    } catch (D) {
      ra(t, l, { then: function () {}, status: "rejected", reason: D }, cl());
    } finally {
      (H.p = n), (G.T = c);
    }
  }
  function q0() {}
  function rc(t, l, e, u) {
    if (t.tag !== 5) throw Error(s(476));
    var a = Ys(t).queue;
    js(
      t,
      a,
      l,
      ut,
      e === null
        ? q0
        : function () {
            return Gs(t), e(u);
          },
    );
  }
  function Ys(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: ut,
      baseState: ut,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zl,
        lastRenderedState: ut,
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
  function Gs(t) {
    var l = Ys(t).next.queue;
    ra(t, l, {}, cl());
  }
  function sc() {
    return Kt(Ra);
  }
  function Xs() {
    return Nt().memoizedState;
  }
  function Qs() {
    return Nt().memoizedState;
  }
  function x0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = cl();
          t = ye(e);
          var u = he(l, t, e);
          u !== null && (Wt(u, l, e), da(u, l, e)),
            (l = { cache: Ji() }),
            (t.payload = l);
          return;
      }
      l = l.return;
    }
  }
  function B0(t, l, e) {
    var u = cl();
    (e = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tn(t)
        ? Vs(l, e)
        : ((e = Xi(t, l, e, u)), e !== null && (Wt(e, t, u), Ls(e, l, u)));
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
    if (Tn(t)) Vs(l, a);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var c = l.lastRenderedState,
            f = n(c, e);
          if (((a.hasEagerState = !0), (a.eagerState = f), ul(f, c)))
            return an(t, l, a, 0), gt === null && un(), !1;
        } catch {
        } finally {
        }
      if (((e = Xi(t, l, a, u)), e !== null))
        return Wt(e, t, u), Ls(e, l, u), !0;
    }
    return !1;
  }
  function oc(t, l, e, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: tf(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tn(t))
    ) {
      if (l) throw Error(s(479));
    } else (l = Xi(t, e, u, 2)), l !== null && Wt(l, t, 2);
  }
  function Tn(t) {
    var l = t.alternate;
    return t === $ || (l !== null && l === $);
  }
  function Vs(t, l) {
    _u = vn = !0;
    var e = t.pending;
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l);
  }
  function Ls(t, l, e) {
    if ((e & 4194176) !== 0) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), lr(t, e);
    }
  }
  var Hl = {
    readContext: Kt,
    use: Sn,
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
  var Qe = {
    readContext: Kt,
    use: Sn,
    useCallback: function (t, l) {
      return (tl().memoizedState = [t, l === void 0 ? null : l]), t;
    },
    useContext: Kt,
    useEffect: Rs,
    useImperativeHandle: function (t, l, e) {
      (e = e != null ? e.concat([t]) : null),
        _n(4194308, 4, Hs.bind(null, l, t), e);
    },
    useLayoutEffect: function (t, l) {
      return _n(4194308, 4, t, l);
    },
    useInsertionEffect: function (t, l) {
      _n(4, 2, t, l);
    },
    useMemo: function (t, l) {
      var e = tl();
      l = l === void 0 ? null : l;
      var u = t();
      if (Xe) {
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
        if (Xe) {
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
        (t = t.dispatch = B0.bind(null, $, t)),
        [u.memoizedState, t]
      );
    },
    useRef: function (t) {
      var l = tl();
      return (t = { current: t }), (l.memoizedState = t);
    },
    useState: function (t) {
      t = ac(t);
      var l = t.queue,
        e = Zs.bind(null, $, l);
      return (l.dispatch = e), [t.memoizedState, e];
    },
    useDebugValue: cc,
    useDeferredValue: function (t, l) {
      var e = tl();
      return fc(e, t, l);
    },
    useTransition: function () {
      var t = ac(!1);
      return (
        (t = js.bind(null, $, t.queue, !0, !1)),
        (tl().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, l, e) {
      var u = $,
        a = tl();
      if (ct) {
        if (e === void 0) throw Error(s(407));
        e = e();
      } else {
        if (((e = l()), gt === null)) throw Error(s(349));
        (at & 60) !== 0 || ys(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return (
        (a.queue = n),
        Rs(vs.bind(null, u, n, t), [t]),
        (u.flags |= 2048),
        Tu(9, hs.bind(null, u, n, e, l), { destroy: void 0 }, null),
        e
      );
    },
    useId: function () {
      var t = tl(),
        l = gt.identifierPrefix;
      if (ct) {
        var e = Xl,
          u = Gl;
        (e = (u & ~(1 << (32 - el(u) - 1))).toString(32) + e),
          (l = ":" + l + "R" + e),
          (e = mn++),
          0 < e && (l += "H" + e.toString(32)),
          (l += ":");
      } else (e = U0++), (l = ":" + l + "r" + e.toString(32) + ":");
      return (t.memoizedState = l);
    },
    useCacheRefresh: function () {
      return (tl().memoizedState = x0.bind(null, $));
    },
  };
  (Qe.useMemoCache = lc),
    (Qe.useHostTransitionStatus = sc),
    (Qe.useFormState = ps),
    (Qe.useActionState = ps),
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
        (l.queue = e), (l = oc.bind(null, $, !0, e)), (e.dispatch = l), [t, l]
      );
    });
  var se = {
    readContext: Kt,
    use: Sn,
    useCallback: qs,
    useContext: Kt,
    useEffect: ic,
    useImperativeHandle: Cs,
    useInsertionEffect: Us,
    useLayoutEffect: Ns,
    useMemo: xs,
    useReducer: bn,
    useRef: Ms,
    useState: function () {
      return bn(Zl);
    },
    useDebugValue: cc,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return Bs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = bn(Zl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: ds,
    useId: Xs,
  };
  (se.useCacheRefresh = Qs),
    (se.useMemoCache = lc),
    (se.useHostTransitionStatus = sc),
    (se.useFormState = As),
    (se.useActionState = As),
    (se.useOptimistic = function (t, l) {
      var e = Nt();
      return Ss(e, yt, t, l);
    });
  var Ze = {
    readContext: Kt,
    use: Sn,
    useCallback: qs,
    useContext: Kt,
    useEffect: ic,
    useImperativeHandle: Cs,
    useInsertionEffect: Us,
    useLayoutEffect: Ns,
    useMemo: xs,
    useReducer: uc,
    useRef: Ms,
    useState: function () {
      return uc(Zl);
    },
    useDebugValue: cc,
    useDeferredValue: function (t, l) {
      var e = Nt();
      return yt === null ? fc(e, t, l) : Bs(e, yt.memoizedState, t, l);
    },
    useTransition: function () {
      var t = uc(Zl)[0],
        l = Nt().memoizedState;
      return [typeof t == "boolean" ? t : fa(t), l];
    },
    useSyncExternalStore: ds,
    useId: Xs,
  };
  (Ze.useCacheRefresh = Qs),
    (Ze.useMemoCache = lc),
    (Ze.useHostTransitionStatus = sc),
    (Ze.useFormState = Ds),
    (Ze.useActionState = Ds),
    (Ze.useOptimistic = function (t, l) {
      var e = Nt();
      return yt !== null
        ? Ss(e, yt, t, l)
        : ((e.baseState = t), [t, e.queue.dispatch]);
    });
  function dc(t, l, e, u) {
    (l = t.memoizedState),
      (e = e(u, l)),
      (e = e == null ? l : nt({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var yc = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? V(t) === t : !1;
    },
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var u = cl(),
        a = ye(u);
      (a.payload = l),
        e != null && (a.callback = e),
        (l = he(t, a, u)),
        l !== null && (Wt(l, t, u), da(l, t, u));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var u = cl(),
        a = ye(u);
      (a.tag = 1),
        (a.payload = l),
        e != null && (a.callback = e),
        (l = he(t, a, u)),
        l !== null && (Wt(l, t, u), da(l, t, u));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = cl(),
        u = ye(e);
      (u.tag = 2),
        l != null && (u.callback = l),
        (l = he(t, u, e)),
        l !== null && (Wt(l, t, e), da(l, t, e));
    },
  };
  function Ks(t, l, e, u, a, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, n, c)
        : l.prototype && l.prototype.isPureReactComponent
          ? !$u(e, u) || !$u(a, n)
          : !0
    );
  }
  function ws(t, l, e, u) {
    (t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, u),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, u),
      l.state !== t && yc.enqueueReplaceState(l, l.state, null);
  }
  function Ve(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l) u !== "ref" && (e[u] = l[u]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = nt({}, e));
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
  function hc(t, l, e) {
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
  function Fs(t) {
    return (t = ye(t)), (t.tag = 3), t;
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
            (_e === null ? (_e = new Set([this])) : _e.add(this));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function j0(t, l, e, u, a) {
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
              Nl === null ? Wc() : e.alternate === null && At === 0 && (At = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = a),
              u === Li
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([u])) : l.add(u),
                  Fc(t, u, a)),
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
                  Fc(t, u, a)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return Fc(t, u, a), Wc(), !1;
    }
    if (ct)
      return (
        (l = ml.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = a),
            u !== Vi && ((t = Error(s(422), { cause: u })), ta(yl(t, e))))
          : (u !== Vi && ((l = Error(s(423), { cause: u })), ta(yl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (u = yl(u, e)),
            (a = hc(t.stateNode, u, a)),
            Rc(t, a),
            At !== 4 && (At = 2)),
        !1
      );
    var n = Error(s(520), { cause: u });
    if (
      ((n = yl(n, e)),
      _a === null ? (_a = [n]) : _a.push(n),
      At !== 4 && (At = 2),
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
            (t = hc(e.stateNode, u, t)),
            Rc(e, t),
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
              (a = Fs(a)),
              Ps(a, t, e, u),
              Rc(e, a),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Is = Error(s(461)),
    jt = !1;
  function Qt(t, l, e, u) {
    l.child = t === null ? as(l, null, e, u) : Ye(l, t.child, e, u);
  }
  function to(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return (
      Ke(l),
      (u = Fi(t, l, e, c, n, a)),
      (f = Pi()),
      t !== null && !jt
        ? (Ii(t, l, a), Vl(t, l, a))
        : (ct && f && Qi(l), (l.flags |= 1), Qt(t, l, u, a), l.child)
    );
  }
  function lo(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" &&
        !jc(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = n), eo(t, l, n, u, a))
        : ((t = Rn(e.type, null, u, l, l.mode, a)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((n = t.child), !zc(t, a))) {
      var c = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : $u), e(c, u) && t.ref === l.ref)
      )
        return Vl(t, l, a);
    }
    return (
      (l.flags |= 1),
      (t = Se(n, u)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function eo(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if ($u(n, u) && t.ref === l.ref)
        if (((jt = !1), (l.pendingProps = u = n), zc(t, a)))
          (t.flags & 131072) !== 0 && (jt = !0);
        else return (l.lanes = t.lanes), Vl(t, l, a);
    }
    return vc(t, l, e, u, a);
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
          t !== null && hn(l, c !== null ? c.cachePool : null),
          c !== null ? ns(l, c) : Ki(),
          is(l);
      else
        return (
          (l.lanes = l.childLanes = 536870912),
          ao(t, l, c !== null ? c.baseLanes | e : e, e)
        );
    } else
      c !== null
        ? (hn(l, c.cachePool), ns(l, c), fe(), (l.memoizedState = null))
        : (t !== null && hn(l, null), Ki(), fe());
    return Qt(t, l, a, e), l.child;
  }
  function ao(t, l, e, u) {
    var a = Wi();
    return (
      (a = a === null ? null : { parent: qt._currentValue, pool: a }),
      (l.memoizedState = { baseLanes: e, cachePool: a }),
      t !== null && hn(l, null),
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
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 2097664);
    }
  }
  function vc(t, l, e, u, a) {
    return (
      Ke(l),
      (e = Fi(t, l, e, u, void 0, a)),
      (u = Pi()),
      t !== null && !jt
        ? (Ii(t, l, a), Vl(t, l, a))
        : (ct && u && Qi(l), (l.flags |= 1), Qt(t, l, e, a), l.child)
    );
  }
  function no(t, l, e, u, a, n) {
    return (
      Ke(l),
      (l.updateQueue = null),
      (e = os(l, u, e, a)),
      ss(t),
      (u = Pi()),
      t !== null && !jt
        ? (Ii(t, l, n), Vl(t, l, n))
        : (ct && u && Qi(l), (l.flags |= 1), Qt(t, l, e, n), l.child)
    );
  }
  function io(t, l, e, u, a) {
    if ((Ke(l), l.stateNode === null)) {
      var n = yu,
        c = e.contextType;
      typeof c == "object" && c !== null && (n = Kt(c)),
        (n = new e(u, n)),
        (l.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yc),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = u),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Dc(l),
        (c = e.contextType),
        (n.context = typeof c == "object" && c !== null ? Kt(c) : yu),
        (n.state = l.memoizedState),
        (c = e.getDerivedStateFromProps),
        typeof c == "function" && (dc(l, e, c, u), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && yc.enqueueReplaceState(n, n.state, null),
          ha(l, u, n, a),
          ya(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == "function" && (l.flags |= 4194308),
        (u = !0);
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps,
        o = Ve(e, f);
      n.props = o;
      var m = n.context,
        p = e.contextType;
      (c = yu), typeof p == "object" && p !== null && (c = Kt(p));
      var D = e.getDerivedStateFromProps;
      (p =
        typeof D == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = l.pendingProps !== f),
        p ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || m !== c) && ws(l, n, u, c)),
        (de = !1);
      var _ = l.memoizedState;
      (n.state = _),
        ha(l, u, n, a),
        ya(),
        (m = l.memoizedState),
        f || _ !== m || de
          ? (typeof D == "function" && (dc(l, e, D, u), (m = l.memoizedState)),
            (o = de || Ks(l, e, o, u, _, m, c))
              ? (p ||
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
            (u = o))
          : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
            (u = !1));
    } else {
      (n = l.stateNode),
        Mc(t, l),
        (c = l.memoizedProps),
        (p = Ve(e, c)),
        (n.props = p),
        (D = l.pendingProps),
        (_ = n.context),
        (m = e.contextType),
        (o = yu),
        typeof m == "object" && m !== null && (o = Kt(m)),
        (f = e.getDerivedStateFromProps),
        (m =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== D || _ !== o) && ws(l, n, u, o)),
        (de = !1),
        (_ = l.memoizedState),
        (n.state = _),
        ha(l, u, n, a),
        ya();
      var z = l.memoizedState;
      c !== D ||
      _ !== z ||
      de ||
      (t !== null && t.dependencies !== null && An(t.dependencies))
        ? (typeof f == "function" && (dc(l, e, f, u), (z = l.memoizedState)),
          (p =
            de ||
            Ks(l, e, p, u, _, z, o) ||
            (t !== null && t.dependencies !== null && An(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, z, o),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, z, o)),
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
              (l.memoizedState = z)),
          (n.props = u),
          (n.state = z),
          (n.context = o),
          (u = p))
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
  var mc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function gc(t) {
    return { baseLanes: t, cachePool: rs() };
  }
  function Sc(t, l, e) {
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
        if ((a ? ce(l) : fe(), ct)) {
          var f = Xt,
            o;
          if ((o = f)) {
            t: {
              for (o = f, f = Ul; o.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (((o = Al(o.nextSibling)), o === null)) {
                  f = null;
                  break t;
                }
              }
              f = o;
            }
            f !== null
              ? ((l.memoizedState = {
                  dehydrated: f,
                  treeContext: xe !== null ? { id: Gl, overflow: Xl } : null,
                  retryLane: 536870912,
                }),
                (o = bl(18, null, null, 0)),
                (o.stateNode = f),
                (o.return = l),
                (l.child = o),
                (kt = l),
                (Xt = null),
                (o = !0))
              : (o = !1);
          }
          o || je(l);
        }
        if (
          ((f = l.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return f.data === "$!" ? (l.lanes = 16) : (l.lanes = 536870912), null;
        Ql(l);
      }
      return (
        (f = u.children),
        (u = u.fallback),
        a
          ? (fe(),
            (a = l.mode),
            (f = _c({ mode: "hidden", children: f }, a)),
            (u = Je(u, a, e, null)),
            (f.return = l),
            (u.return = l),
            (f.sibling = u),
            (l.child = f),
            (a = l.child),
            (a.memoizedState = gc(e)),
            (a.childLanes = Sc(t, c, e)),
            (l.memoizedState = mc),
            u)
          : (ce(l), bc(l, f))
      );
    }
    if (
      ((o = t.memoizedState), o !== null && ((f = o.dehydrated), f !== null))
    ) {
      if (n)
        l.flags & 256
          ? (ce(l), (l.flags &= -257), (l = Ec(t, l, e)))
          : l.memoizedState !== null
            ? (fe(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (fe(),
              (a = u.fallback),
              (f = l.mode),
              (u = _c({ mode: "visible", children: u.children }, f)),
              (a = Je(a, f, e, null)),
              (a.flags |= 2),
              (u.return = l),
              (a.return = l),
              (u.sibling = a),
              (l.child = u),
              Ye(l, t.child, null, e),
              (u = l.child),
              (u.memoizedState = gc(e)),
              (u.childLanes = Sc(t, c, e)),
              (l.memoizedState = mc),
              (l = a));
      else if ((ce(l), f.data === "$!")) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (u = Error(s(419))),
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
            u !== 0 && u !== o.retryLane)
          )
            throw ((o.retryLane = u), ie(t, u), Wt(c, t, u), Is);
        }
        f.data === "$?" || Wc(), (l = Ec(t, l, e));
      } else
        f.data === "$?"
          ? ((l.flags |= 128),
            (l.child = t.child),
            (l = P0.bind(null, t)),
            (f._reactRetry = l),
            (l = null))
          : ((t = o.treeContext),
            (Xt = Al(f.nextSibling)),
            (kt = l),
            (ct = !0),
            (zl = null),
            (Ul = !1),
            t !== null &&
              ((hl[vl++] = Gl),
              (hl[vl++] = Xl),
              (hl[vl++] = xe),
              (Gl = t.id),
              (Xl = t.overflow),
              (xe = l)),
            (l = bc(l, u.children)),
            (l.flags |= 4096));
      return l;
    }
    return a
      ? (fe(),
        (a = u.fallback),
        (f = l.mode),
        (o = t.child),
        (m = o.sibling),
        (u = Se(o, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = o.subtreeFlags & 31457280),
        m !== null ? (a = Se(m, a)) : ((a = Je(a, f, e, null)), (a.flags |= 2)),
        (a.return = l),
        (u.return = l),
        (u.sibling = a),
        (l.child = u),
        (u = a),
        (a = l.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = gc(e))
          : ((o = f.cachePool),
            o !== null
              ? ((m = qt._currentValue),
                (o = o.parent !== m ? { parent: m, pool: m } : o))
              : (o = rs()),
            (f = { baseLanes: f.baseLanes | e, cachePool: o })),
        (a.memoizedState = f),
        (a.childLanes = Sc(t, c, e)),
        (l.memoizedState = mc),
        u)
      : (ce(l),
        (e = t.child),
        (t = e.sibling),
        (e = Se(e, { mode: "visible", children: u.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((c = l.deletions),
          c === null ? ((l.deletions = [t]), (l.flags |= 16)) : c.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function bc(t, l) {
    return (
      (l = _c({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function _c(t, l) {
    return xo(t, l, 0, null);
  }
  function Ec(t, l, e) {
    return (
      Ye(l, t.child, null, e),
      (t = bc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function ro(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Ac(t.return, l, e);
  }
  function Tc(t, l, e, u, a) {
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
    switch ((bt(Ct, u), a)) {
      case "forwards":
        for (e = l.child, a = null; e !== null; )
          (t = e.alternate),
            t !== null && yn(t) === null && (a = e),
            (e = e.sibling);
        (e = a),
          e === null
            ? ((a = l.child), (l.child = null))
            : ((a = e.sibling), (e.sibling = null)),
          Tc(l, !1, a, e, n);
        break;
      case "backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && yn(t) === null)) {
            l.child = a;
            break;
          }
          (t = a.sibling), (a.sibling = e), (e = a), (a = t);
        }
        Tc(l, !0, e, null, n);
        break;
      case "together":
        Tc(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Vl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (be |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((oa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
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
  function zc(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && An(t)));
  }
  function Y0(t, l, e) {
    switch (l.tag) {
      case 3:
        Xa(l, l.stateNode.containerInfo),
          oe(l, qt, t.memoizedState.cache),
          Iu();
        break;
      case 27:
      case 5:
        yi(l);
        break;
      case 4:
        Xa(l, l.stateNode.containerInfo);
        break;
      case 10:
        oe(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ce(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? fo(t, l, e)
              : (ce(l), (t = Vl(t, l, e)), t !== null ? t.sibling : null);
        ce(l);
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
          bt(Ct, Ct.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (l.lanes = 0), uo(t, l, e);
      case 24:
        oe(l, qt, t.memoizedState.cache);
    }
    return Vl(t, l, e);
  }
  function oo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) jt = !0;
      else {
        if (!zc(t, e) && (l.flags & 128) === 0) return (jt = !1), Y0(t, l, e);
        jt = (t.flags & 131072) !== 0;
      }
    else (jt = !1), ct && (l.flags & 1048576) !== 0 && Wr(l, fn, l.index);
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType,
            a = u._init;
          if (((u = a(u._payload)), (l.type = u), typeof u == "function"))
            jc(u)
              ? ((t = Ve(u, t)), (l.tag = 1), (l = io(null, l, u, t, e)))
              : ((l.tag = 0), (l = vc(null, l, u, t, e)));
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
            throw ((l = Et(u) || u), Error(s(306, l, "")));
          }
        }
        return l;
      case 0:
        return vc(t, l, l.type, l.pendingProps, e);
      case 1:
        return (u = l.type), (a = Ve(u, l.pendingProps)), io(t, l, u, a, e);
      case 3:
        t: {
          if ((Xa(l, l.stateNode.containerInfo), t === null))
            throw Error(s(387));
          var n = l.pendingProps;
          (a = l.memoizedState), (u = a.element), Mc(t, l), ha(l, n, null, e);
          var c = l.memoizedState;
          if (
            ((n = c.cache),
            oe(l, qt, n),
            n !== a.cache && Oc(l, [qt], e, !0),
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
              (u = yl(Error(s(424)), l)), ta(u), (l = co(t, l, n, e));
              break t;
            } else
              for (
                Xt = Al(l.stateNode.containerInfo.firstChild),
                  kt = l,
                  ct = !0,
                  zl = null,
                  Ul = !0,
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
                (u = Qn(ee.current).createElement(e)),
                (u[Lt] = l),
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
          yi(l),
          t === null &&
            ct &&
            ((u = l.stateNode = dd(l.type, l.pendingProps, ee.current)),
            (kt = l),
            (Ul = !0),
            (Xt = Al(u.firstChild))),
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
              ((u = hh(u, l.type, l.pendingProps, Ul)),
              u !== null
                ? ((l.stateNode = u),
                  (kt = l),
                  (Xt = Al(u.firstChild)),
                  (Ul = !1),
                  (a = !0))
                : (a = !1)),
            a || je(l)),
          yi(l),
          (a = l.type),
          (n = l.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (u = n.children),
          sf(a, n) ? (u = null) : c !== null && sf(a, c) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((a = Fi(t, l, N0, null, null, e)), (Ra._currentValue = a)),
          sa(t, l),
          Qt(t, l, u, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = e = Xt) &&
              ((e = vh(e, l.pendingProps, Ul)),
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
          Xa(l, l.stateNode.containerInfo),
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
          oe(l, l.type, u.value),
          Qt(t, l, u.children, e),
          l.child
        );
      case 9:
        return (
          (a = l.type._context),
          (u = l.pendingProps.children),
          Ke(l),
          (a = Kt(a)),
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
          Ke(l),
          (u = Kt(qt)),
          t === null
            ? ((a = Wi()),
              a === null &&
                ((a = gt),
                (n = Ji()),
                (a.pooledCache = n),
                n.refCount++,
                n !== null && (a.pooledCacheLanes |= e),
                (a = n)),
              (l.memoizedState = { parent: u, cache: a }),
              Dc(l),
              oe(l, qt, a))
            : ((t.lanes & e) !== 0 && (Mc(t, l), ha(l, null, null, e), ya()),
              (a = t.memoizedState),
              (n = l.memoizedState),
              a.parent !== u
                ? ((a = { parent: u, cache: u }),
                  (l.memoizedState = a),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = a),
                  oe(l, qt, u))
                : ((u = n.cache),
                  oe(l, qt, u),
                  u !== a.cache && Oc(l, [qt], e, !0))),
          Qt(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  var pc = ot(null),
    Le = null,
    Ll = null;
  function oe(t, l, e) {
    bt(pc, l._currentValue), (l._currentValue = e);
  }
  function Kl(t) {
    (t._currentValue = pc.current), Rt(pc);
  }
  function Ac(t, l, e) {
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
  function Oc(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var c = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = a;
          for (var o = 0; o < l.length; o++)
            if (f.context === l[o]) {
              (n.lanes |= e),
                (f = n.alternate),
                f !== null && (f.lanes |= e),
                Ac(n.return, e, t),
                u || (c = null);
              break t;
            }
          n = f.next;
        }
      } else if (a.tag === 18) {
        if (((c = a.return), c === null)) throw Error(s(341));
        (c.lanes |= e),
          (n = c.alternate),
          n !== null && (n.lanes |= e),
          Ac(c, e, t),
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
        if (c === null) throw Error(s(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = a.type;
          ul(a.pendingProps.value, c.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (a === Ga.current) {
        if (((c = a.alternate), c === null)) throw Error(s(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (t !== null ? t.push(Ra) : (t = [Ra]));
      }
      a = a.return;
    }
    t !== null && Oc(l, t, e, u), (l.flags |= 262144);
  }
  function An(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ke(t) {
    (Le = t),
      (Ll = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Kt(t) {
    return yo(Le, t);
  }
  function On(t, l) {
    return Le === null && Ke(t), yo(t, l);
  }
  function yo(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), Ll === null)) {
      if (t === null) throw Error(s(308));
      (Ll = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288);
    } else Ll = Ll.next = l;
    return e;
  }
  var de = !1;
  function Dc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mc(t, l) {
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
    if (((u = u.shared), (zt & 2) !== 0)) {
      var a = u.pending;
      return (
        a === null ? (l.next = l) : ((l.next = a.next), (a.next = l)),
        (u.pending = l),
        (l = nn(t)),
        Jr(t, null, e),
        l
      );
    }
    return an(t, u, l, e), nn(t);
  }
  function da(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194176) !== 0))
    ) {
      var u = l.lanes;
      (u &= t.pendingLanes), (e |= u), (l.lanes = e), lr(t, e);
    }
  }
  function Rc(t, l) {
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
  var Uc = !1;
  function ya() {
    if (Uc) {
      var t = bu;
      if (t !== null) throw t;
    }
  }
  function ha(t, l, e, u) {
    Uc = !1;
    var a = t.updateQueue;
    de = !1;
    var n = a.firstBaseUpdate,
      c = a.lastBaseUpdate,
      f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var o = f,
        m = o.next;
      (o.next = null), c === null ? (n = m) : (c.next = m), (c = o);
      var p = t.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (f = p.lastBaseUpdate),
        f !== c &&
          (f === null ? (p.firstBaseUpdate = m) : (f.next = m),
          (p.lastBaseUpdate = o)));
    }
    if (n !== null) {
      var D = a.baseState;
      (c = 0), (p = m = o = null), (f = n);
      do {
        var _ = f.lane & -536870913,
          z = _ !== f.lane;
        if (z ? (at & _) === _ : (u & _) === _) {
          _ !== 0 && _ === Su && (Uc = !0),
            p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var x = t,
              L = f;
            _ = l;
            var Ot = e;
            switch (L.tag) {
              case 1:
                if (((x = L.payload), typeof x == "function")) {
                  D = x.call(Ot, D, _);
                  break t;
                }
                D = x;
                break t;
              case 3:
                x.flags = (x.flags & -65537) | 128;
              case 0:
                if (
                  ((x = L.payload),
                  (_ = typeof x == "function" ? x.call(Ot, D, _) : x),
                  _ == null)
                )
                  break t;
                D = nt({}, D, _);
                break t;
              case 2:
                de = !0;
            }
          }
          (_ = f.callback),
            _ !== null &&
              ((t.flags |= 64),
              z && (t.flags |= 8192),
              (z = a.callbacks),
              z === null ? (a.callbacks = [_]) : z.push(_));
        } else
          (z = {
            lane: _,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            p === null ? ((m = p = z), (o = D)) : (p = p.next = z),
            (c |= _);
        if (((f = f.next), f === null)) {
          if (((f = a.shared.pending), f === null)) break;
          (z = f),
            (f = z.next),
            (z.next = null),
            (a.lastBaseUpdate = z),
            (a.shared.pending = null);
        }
      } while (!0);
      p === null && (o = D),
        (a.baseState = o),
        (a.firstBaseUpdate = m),
        (a.lastBaseUpdate = p),
        n === null && (a.shared.lanes = 0),
        (be |= c),
        (t.lanes = c),
        (t.memoizedState = D);
    }
  }
  function ho(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
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
    } catch (f) {
      vt(l, l.return, f);
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
            var c = u.inst,
              f = c.destroy;
            if (f !== void 0) {
              (c.destroy = void 0), (a = l);
              var o = e;
              try {
                f();
              } catch (m) {
                vt(a, o, m);
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
    (e.props = Ve(t.type, t.memoizedProps)), (e.state = t.memoizedState);
    try {
      e.componentWillUnmount();
    } catch (u) {
      vt(t, l, u);
    }
  }
  function we(t, l) {
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
      rh(u, t.type, e, l), (u[Pt] = l);
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function _o(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Nc(t) {
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
  function Hc(t, l, e) {
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
            e != null || l.onclick !== null || (l.onclick = Xn));
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (Hc(t, l, e), t = t.sibling; t !== null; )
        Hc(t, l, e), (t = t.sibling);
  }
  function Dn(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (Dn(t, l, e), t = t.sibling; t !== null; )
        Dn(t, l, e), (t = t.sibling);
  }
  var wl = !1,
    pt = !1,
    Cc = !1,
    Eo = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null,
    To = !1;
  function G0(t, l) {
    if (((t = t.containerInfo), (ff = Jn), (t = Yr(t)), xi(t))) {
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
              f = -1,
              o = -1,
              m = 0,
              p = 0,
              D = t,
              _ = null;
            l: for (;;) {
              for (
                var z;
                D !== e || (a !== 0 && D.nodeType !== 3) || (f = c + a),
                  D !== n || (u !== 0 && D.nodeType !== 3) || (o = c + u),
                  D.nodeType === 3 && (c += D.nodeValue.length),
                  (z = D.firstChild) !== null;

              )
                (_ = D), (D = z);
              for (;;) {
                if (D === t) break l;
                if (
                  (_ === e && ++m === a && (f = c),
                  _ === n && ++p === u && (o = c),
                  (z = D.nextSibling) !== null)
                )
                  break;
                (D = _), (_ = D.parentNode);
              }
              D = z;
            }
            e = f === -1 || o === -1 ? null : { start: f, end: o };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      rf = { focusedElem: t, selectionRange: e }, Jn = !1, Yt = l;
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
                  var x = Ve(e.type, a, e.elementType === e.type);
                  (t = u.getSnapshotBeforeUpdate(x, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = t);
                } catch (L) {
                  vt(e, e.return, L);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  yf(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yf(t);
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
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = l.sibling), t !== null)) {
            (t.return = l.return), (Yt = t);
            break;
          }
          Yt = l.return;
        }
    return (x = To), (To = !1), x;
  }
  function zo(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kl(t, e), u & 4 && va(5, e);
        break;
      case 1:
        if ((kl(t, e), u & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (f) {
              vt(e, e.return, f);
            }
          else {
            var a = Ve(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(a, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              vt(e, e.return, f);
            }
          }
        u & 64 && mo(e), u & 512 && we(e, e.return);
        break;
      case 3:
        if ((kl(t, e), u & 64 && ((u = e.updateQueue), u !== null))) {
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
          } catch (f) {
            vt(e, e.return, f);
          }
        }
        break;
      case 26:
        kl(t, e), u & 512 && we(e, e.return);
        break;
      case 27:
      case 5:
        kl(t, e), l === null && u & 4 && So(e), u & 512 && we(e, e.return);
        break;
      case 12:
        kl(t, e);
        break;
      case 13:
        kl(t, e), u & 4 && Oo(t, e);
        break;
      case 22:
        if (((a = e.memoizedState !== null || wl), !a)) {
          l = (l !== null && l.memoizedState !== null) || pt;
          var n = wl,
            c = pt;
          (wl = a),
            (pt = l) && !c ? me(t, e, (e.subtreeFlags & 8772) !== 0) : kl(t, e),
            (wl = n),
            (pt = c);
        }
        u & 512 &&
          (e.memoizedProps.mode === "manual"
            ? we(e, e.return)
            : al(e, e.return));
        break;
      default:
        kl(t, e);
    }
  }
  function po(t) {
    var l = t.alternate;
    l !== null && ((t.alternate = null), po(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && bi(l)),
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
    for (e = e.child; e !== null; ) Ao(t, l, e), (e = e.sibling);
  }
  function Ao(t, l, e) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(Yu, e);
      } catch {}
    switch (e.tag) {
      case 26:
        pt || al(e, l),
          Jl(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e));
        break;
      case 27:
        pt || al(e, l);
        var u = Ht,
          a = nl;
        for (
          Ht = e.stateNode, Jl(t, l, e), e = e.stateNode, l = e.attributes;
          l.length;

        )
          e.removeAttributeNode(l[0]);
        bi(e), (Ht = u), (nl = a);
        break;
      case 5:
        pt || al(e, l);
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
                ? df(l.parentNode, e)
                : l.nodeType === 1 && df(l, e),
              Ca(l))
            : df(Ht, e.stateNode));
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
        pt || ve(2, e, l), pt || ve(4, e, l), Jl(t, l, e);
        break;
      case 1:
        pt ||
          (al(e, l),
          (u = e.stateNode),
          typeof u.componentWillUnmount == "function" && go(e, l, u)),
          Jl(t, l, e);
        break;
      case 21:
        Jl(t, l, e);
        break;
      case 22:
        pt || al(e, l),
          (pt = (u = pt) || e.memoizedState !== null),
          Jl(t, l, e),
          (pt = u);
        break;
      default:
        Jl(t, l, e);
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
        Ca(t);
      } catch (e) {
        vt(l, l.return, e);
      }
  }
  function X0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Eo()), l;
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new Eo()),
          l
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function qc(t, l) {
    var e = X0(t);
    l.forEach(function (u) {
      var a = I0.bind(null, t, u);
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
          f = c;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
            case 5:
              (Ht = f.stateNode), (nl = !1);
              break t;
            case 3:
              (Ht = f.stateNode.containerInfo), (nl = !0);
              break t;
            case 4:
              (Ht = f.stateNode.containerInfo), (nl = !0);
              break t;
          }
          f = f.return;
        }
        if (Ht === null) throw Error(s(160));
        Ao(n, c, a),
          (Ht = null),
          (nl = !1),
          (n = a.alternate),
          n !== null && (n.return = null),
          (a.return = null);
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; ) Do(l, t), (l = l.sibling);
  }
  var pl = null;
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
          u & 4 && (ve(3, t, t.return), va(3, t), ve(5, t, t.return));
        break;
      case 1:
        gl(l, t),
          Sl(t),
          u & 512 && (pt || e === null || al(e, e.return)),
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
        var a = pl;
        if (
          (gl(l, t),
          Sl(t),
          u & 512 && (pt || e === null || al(e, e.return)),
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
                          n[Lt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = a.createElement(u)),
                          a.head.insertBefore(
                            n,
                            a.querySelector("head > title"),
                          )),
                        Zt(n, u, e),
                        (n[Lt] = t),
                        Bt(n),
                        (u = n);
                      break t;
                    case "link":
                      var c = Sd("link", "href", a).get(u + (e.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (e.href == null ? null : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            c.splice(f, 1);
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
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
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
                            c.splice(f, 1);
                            break l;
                          }
                      }
                      (n = a.createElement(u)),
                        Zt(n, u, e),
                        a.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  (n[Lt] = t), Bt(n), (u = n);
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
            for (var o = a.firstChild; o; ) {
              var m = o.nextSibling,
                p = o.nodeName;
              o[Qu] ||
                p === "HEAD" ||
                p === "BODY" ||
                p === "SCRIPT" ||
                p === "STYLE" ||
                (p === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
                a.removeChild(o),
                (o = m);
            }
            for (var D = t.type, _ = a.attributes; _.length; )
              a.removeAttributeNode(_[0]);
            Zt(a, D, n), (a[Lt] = t), (a[Pt] = n);
          } catch (x) {
            vt(t, t.return, x);
          }
        }
      case 5:
        if (
          (gl(l, t),
          Sl(t),
          u & 512 && (pt || e === null || al(e, e.return)),
          t.flags & 32)
        ) {
          a = t.stateNode;
          try {
            iu(a, "");
          } catch (x) {
            vt(t, t.return, x);
          }
        }
        u & 4 &&
          t.stateNode != null &&
          ((a = t.memoizedProps), bo(t, a, e !== null ? e.memoizedProps : a)),
          u & 1024 && (Cc = !0);
        break;
      case 6:
        if ((gl(l, t), Sl(t), u & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (u = t.memoizedProps), (e = t.stateNode);
          try {
            e.nodeValue = u;
          } catch (x) {
            vt(t, t.return, x);
          }
        }
        break;
      case 3:
        if (
          ((Ln = null),
          (a = pl),
          (pl = Zn(l.containerInfo)),
          gl(l, t),
          (pl = a),
          Sl(t),
          u & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Ca(l.containerInfo);
          } catch (x) {
            vt(t, t.return, x);
          }
        Cc && ((Cc = !1), Mo(t));
        break;
      case 4:
        (u = pl),
          (pl = Zn(t.stateNode.containerInfo)),
          gl(l, t),
          Sl(t),
          (pl = u);
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
            (Vc = Rl()),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), qc(t, u)));
        break;
      case 22:
        if (
          (u & 512 && (pt || e === null || al(e, e.return)),
          (o = t.memoizedState !== null),
          (m = e !== null && e.memoizedState !== null),
          (p = wl),
          (D = pt),
          (wl = p || o),
          (pt = D || m),
          gl(l, t),
          (pt = D),
          (wl = p),
          Sl(t),
          (l = t.stateNode),
          (l._current = t),
          (l._visibility &= -3),
          (l._visibility |= l._pendingVisibility & 2),
          u & 8192 &&
            ((l._visibility = o ? l._visibility & -2 : l._visibility | 1),
            o && ((l = wl || pt), e === null || m || l || zu(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26 || l.tag === 27) {
              if (e === null) {
                m = e = l;
                try {
                  if (((a = m.stateNode), o))
                    (n = a.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = m.stateNode), (f = m.memoizedProps.style);
                    var z =
                      f != null && f.hasOwnProperty("display")
                        ? f.display
                        : null;
                    c.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (x) {
                  vt(m, m.return, x);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                m = l;
                try {
                  m.stateNode.nodeValue = o ? "" : m.memoizedProps;
                } catch (x) {
                  vt(m, m.return, x);
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
            throw Error(s(160));
          }
          switch (u.tag) {
            case 27:
              var a = u.stateNode,
                n = Nc(t);
              Dn(t, n, a);
              break;
            case 5:
              var c = u.stateNode;
              u.flags & 32 && (iu(c, ""), (u.flags &= -33));
              var f = Nc(t);
              Dn(t, f, c);
              break;
            case 3:
            case 4:
              var o = u.stateNode.containerInfo,
                m = Nc(t);
              Hc(t, m, o);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (p) {
        vt(t, t.return, p);
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
  function kl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) zo(t, l.alternate, l), (l = l.sibling);
  }
  function zu(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ve(4, l, l.return), zu(l);
          break;
        case 1:
          al(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && go(l, l.return, e),
            zu(l);
          break;
        case 26:
        case 27:
        case 5:
          al(l, l.return), zu(l);
          break;
        case 22:
          al(l, l.return), l.memoizedState === null && zu(l);
          break;
        default:
          zu(l);
      }
      t = t.sibling;
    }
  }
  function me(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate,
        a = t,
        n = l,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          me(a, n, e), va(4, n);
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
            var f = u.stateNode;
            try {
              var o = a.shared.hiddenCallbacks;
              if (o !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < o.length; a++)
                  ho(o[a], f);
            } catch (m) {
              vt(u, u.return, m);
            }
          }
          e && c & 64 && mo(n), we(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          me(a, n, e), e && u === null && c & 4 && So(n), we(n, n.return);
          break;
        case 12:
          me(a, n, e);
          break;
        case 13:
          me(a, n, e), e && c & 4 && Oo(a, n);
          break;
        case 22:
          n.memoizedState === null && me(a, n, e), we(n, n.return);
          break;
        default:
          me(a, n, e);
      }
      l = l.sibling;
    }
  }
  function xc(t, l) {
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
  function Bc(t, l) {
    (t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && na(t));
  }
  function ge(t, l, e, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Ro(t, l, e, u), (l = l.sibling);
  }
  function Ro(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ge(t, l, e, u), a & 2048 && va(9, l);
        break;
      case 3:
        ge(t, l, e, u),
          a & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && na(t)));
        break;
      case 12:
        if (a & 2048) {
          ge(t, l, e, u), (t = l.stateNode);
          try {
            var n = l.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (o) {
            vt(l, l.return, o);
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
              : ma(t, l)
            : n._visibility & 4
              ? ge(t, l, e, u)
              : ((n._visibility |= 4),
                pu(t, l, e, u, (l.subtreeFlags & 10256) !== 0)),
          a & 2048 && xc(l.alternate, l);
        break;
      case 24:
        ge(t, l, e, u), a & 2048 && Bc(l.alternate, l);
        break;
      default:
        ge(t, l, e, u);
    }
  }
  function pu(t, l, e, u, a) {
    for (a = a && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        c = l,
        f = e,
        o = u,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          pu(n, c, f, o, a), va(8, c);
          break;
        case 23:
          break;
        case 22:
          var p = c.stateNode;
          c.memoizedState !== null
            ? p._visibility & 4
              ? pu(n, c, f, o, a)
              : ma(n, c)
            : ((p._visibility |= 4), pu(n, c, f, o, a)),
            a && m & 2048 && xc(c.alternate, c);
          break;
        case 24:
          pu(n, c, f, o, a), a && m & 2048 && Bc(c.alternate, c);
          break;
        default:
          pu(n, c, f, o, a);
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
            ma(e, u), a & 2048 && xc(u.alternate, u);
            break;
          case 24:
            ma(e, u), a & 2048 && Bc(u.alternate, u);
            break;
          default:
            ma(e, u);
        }
        l = l.sibling;
      }
  }
  var ga = 8192;
  function Au(t) {
    if (t.subtreeFlags & ga)
      for (t = t.child; t !== null; ) Uo(t), (t = t.sibling);
  }
  function Uo(t) {
    switch (t.tag) {
      case 26:
        Au(t),
          t.flags & ga &&
            t.memoizedState !== null &&
            Mh(pl, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Au(t);
        break;
      case 3:
      case 4:
        var l = pl;
        (pl = Zn(t.stateNode.containerInfo)), Au(t), (pl = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ga), (ga = 16777216), Au(t), (ga = l))
            : Au(t));
        break;
      default:
        Au(t);
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
          (Yt = u), Co(u, t);
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
        Sa(t), t.flags & 2048 && ve(9, t, t.return);
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
          ? ((l._visibility &= -5), Mn(t))
          : Sa(t);
        break;
      default:
        Sa(t);
    }
  }
  function Mn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          (Yt = u), Co(u, t);
        }
      No(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          ve(8, l, l.return), Mn(l);
          break;
        case 22:
          (e = l.stateNode),
            e._visibility & 4 && ((e._visibility &= -5), Mn(l));
          break;
        default:
          Mn(l);
      }
      t = t.sibling;
    }
  }
  function Co(t, l) {
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
          na(e.memoizedState.cache);
      }
      if (((u = e.child), u !== null)) (u.return = e), (Yt = u);
      else
        t: for (e = t; Yt !== null; ) {
          u = Yt;
          var a = u.sibling,
            n = u.return;
          if ((po(u), u === e)) {
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
  function Q0(t, l, e, u) {
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
    return new Q0(t, l, e, u);
  }
  function jc(t) {
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
  function qo(t, l) {
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
  function Rn(t, l, e, u, a, n) {
    var c = 0;
    if (((u = t), typeof t == "function")) jc(t) && (c = 1);
    else if (typeof t == "string")
      c = Oh(t, e, Ml.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case E:
          return Je(e.children, a, n, l);
        case b:
          (c = 8), (a |= 24);
          break;
        case U:
          return (
            (t = bl(12, e, l, a | 2)), (t.elementType = U), (t.lanes = n), t
          );
        case _t:
          return (t = bl(13, e, l, a)), (t.elementType = _t), (t.lanes = n), t;
        case P:
          return (t = bl(19, e, l, a)), (t.elementType = P), (t.lanes = n), t;
        case K:
          return xo(e, a, n, l);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case C:
              case w:
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
            (e = Error(s(130, t === null ? "null" : typeof t, ""))),
            (u = null);
      }
    return (
      (l = bl(c, e, l, a)), (l.elementType = t), (l.type = u), (l.lanes = n), l
    );
  }
  function Je(t, l, e, u) {
    return (t = bl(7, t, u, l)), (t.lanes = e), t;
  }
  function xo(t, l, e, u) {
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
        if (n === null) throw Error(s(456));
        if ((a._pendingVisibility & 2) === 0) {
          var c = ie(n, 2);
          c !== null && ((a._pendingVisibility |= 2), Wt(c, n, 2));
        }
      },
      attach: function () {
        var n = a._current;
        if (n === null) throw Error(s(456));
        if ((a._pendingVisibility & 2) !== 0) {
          var c = ie(n, 2);
          c !== null && ((a._pendingVisibility &= -3), Wt(c, n, 2));
        }
      },
    };
    return (t.stateNode = a), t;
  }
  function Yc(t, l, e) {
    return (t = bl(6, t, null, l)), (t.lanes = e), t;
  }
  function Gc(t, l, e) {
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
  function Wl(t) {
    t.flags |= 4;
  }
  function Bo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !_d(l))) {
      if (
        ((l = ml.current),
        l !== null &&
          ((at & 4194176) === at
            ? Nl !== null
            : ((at & 62914560) !== at && (at & 536870912) === 0) || l !== Nl))
      )
        throw ((ea = Li), Pr);
      t.flags |= 8192;
    }
  }
  function Un(t, l) {
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
  function Z0(t, l, e) {
    var u = l.pendingProps;
    switch ((Zi(l), l.tag)) {
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
          Kl(qt),
          tu(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (Pu(l)
              ? Wl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), zl !== null && (Jc(zl), (zl = null)))),
          Tt(l),
          null
        );
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (Wl(l),
              e !== null ? (Tt(l), Bo(l, e)) : (Tt(l), (l.flags &= -16777217)))
            : e
              ? e !== t.memoizedState
                ? (Wl(l), Tt(l), Bo(l, e))
                : (Tt(l), (l.flags &= -16777217))
              : (t.memoizedProps !== u && Wl(l), Tt(l), (l.flags &= -16777217)),
          null
        );
      case 27:
        Qa(l), (e = ee.current);
        var a = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== u && Wl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(s(166));
            return Tt(l), null;
          }
          (t = Ml.current),
            Pu(l) ? $r(l) : ((t = dd(a, u, e)), (l.stateNode = t), Wl(l));
        }
        return Tt(l), null;
      case 5:
        if ((Qa(l), (e = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== u && Wl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(s(166));
            return Tt(l), null;
          }
          if (((t = Ml.current), Pu(l))) $r(l);
          else {
            switch (((a = Qn(ee.current)), t)) {
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
            t && Wl(l);
          }
        }
        return Tt(l), (l.flags &= -16777217), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== u && Wl(l);
        else {
          if (typeof u != "string" && l.stateNode === null) throw Error(s(166));
          if (((t = ee.current), Pu(l))) {
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
            (t[Lt] = l),
              (t = !!(
                t.nodeValue === e ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                id(t.nodeValue, e)
              )),
              t || je(l);
          } else (t = Qn(t).createTextNode(u)), (t[Lt] = l), (l.stateNode = t);
        }
        return Tt(l), null;
      case 13:
        if (
          ((u = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((a = Pu(l)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (
                ((a = l.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(s(317));
              a[Lt] = l;
            } else
              Iu(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4);
            Tt(l), (a = !1);
          } else zl !== null && (Jc(zl), (zl = null)), (a = !0);
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
          Un(l, l.updateQueue),
          Tt(l),
          null
        );
      case 4:
        return tu(), t === null && af(l.stateNode.containerInfo), Tt(l), null;
      case 10:
        return Kl(l.type), Tt(l), null;
      case 19:
        if ((Rt(Ct), (a = l.memoizedState), a === null)) return Tt(l), null;
        if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) ba(a, !1);
          else {
            if (At !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = yn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      ba(a, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      Un(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    qo(e, t), (e = e.sibling);
                  return bt(Ct, (Ct.current & 1) | 2), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Rl() > Nn &&
              ((l.flags |= 128), (u = !0), ba(a, !1), (l.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = yn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                Un(l, t),
                ba(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !ct)
              )
                return Tt(l), null;
            } else
              2 * Rl() - a.renderingStartTime > Nn &&
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
          wi(),
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
          e !== null && Un(l, e.retryQueue),
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
          Tt(l),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function V0(t, l) {
    switch ((Zi(l), l.tag)) {
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
        return Qa(l), null;
      case 13:
        if (
          (Ql(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(s(340));
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
          Ql(l),
          wi(),
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
    switch ((Zi(l), l.tag)) {
      case 3:
        Kl(qt), tu();
        break;
      case 26:
      case 27:
      case 5:
        Qa(l);
        break;
      case 4:
        tu();
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
        Ql(l), wi(), t !== null && Rt(Ge);
        break;
      case 24:
        Kl(qt);
    }
  }
  var L0 = {
      getCacheForType: function (t) {
        var l = Kt(qt),
          e = l.data.get(t);
        return e === void 0 && ((e = t()), l.data.set(t, e)), e;
      },
    },
    K0 = typeof WeakMap == "function" ? WeakMap : Map,
    zt = 0,
    gt = null,
    tt = null,
    at = 0,
    St = 0,
    il = null,
    $l = !1,
    Ou = !1,
    Xc = !1,
    Fl = 0,
    At = 0,
    be = 0,
    ke = 0,
    Qc = 0,
    _l = 0,
    Du = 0,
    _a = null,
    Cl = null,
    Zc = !1,
    Vc = 0,
    Nn = 1 / 0,
    Hn = null,
    _e = null,
    Cn = !1,
    We = null,
    Ea = 0,
    Lc = 0,
    Kc = null,
    Ta = 0,
    wc = null;
  function cl() {
    if ((zt & 2) !== 0 && at !== 0) return at & -at;
    if (G.T !== null) {
      var t = Su;
      return t !== 0 ? t : tf();
    }
    return ur();
  }
  function Yo() {
    _l === 0 && (_l = (at & 536870912) === 0 || ct ? Pf() : 536870912);
    var t = ml.current;
    return t !== null && (t.flags |= 32), _l;
  }
  function Wt(t, l, e) {
    ((t === gt && St === 2) || t.cancelPendingCommit !== null) &&
      (Mu(t, 0), Pl(t, at, _l, !1)),
      Xu(t, e),
      ((zt & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((zt & 2) === 0 && (ke |= e), At === 4 && Pl(t, at, _l, !1)),
        ql(t));
  }
  function Go(t, l, e) {
    if ((zt & 6) !== 0) throw Error(s(327));
    var u = (!e && (l & 60) === 0 && (l & t.expiredLanes) === 0) || Gu(t, l),
      a = u ? k0(t, l) : $c(t, l, !0),
      n = u;
    do {
      if (a === 0) {
        Ou && !u && Pl(t, l, 0, !1);
        break;
      } else if (a === 6) Pl(t, l, 0, !$l);
      else {
        if (((e = t.current.alternate), n && !w0(e))) {
          (a = $c(t, l, !1)), (n = !1);
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
              var f = t;
              a = _a;
              var o = f.current.memoizedState.isDehydrated;
              if ((o && (Mu(f, c).flags |= 256), (c = $c(f, c, !1)), c !== 2)) {
                if (Xc && !o) {
                  (f.errorRecoveryDisabledLanes |= n), (ke |= n), (a = 4);
                  break t;
                }
                (n = Cl), (Cl = a), n !== null && Jc(n);
              }
              a = c;
            }
            if (((n = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Mu(t, 0), Pl(t, l, 0, !0);
          break;
        }
        t: {
          switch (((u = t), a)) {
            case 0:
            case 1:
              throw Error(s(345));
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
              throw Error(s(329));
          }
          if (
            ((u.finishedWork = e),
            (u.finishedLanes = l),
            (l & 62914560) === l && ((n = Vc + 300 - Rl()), 10 < n))
          ) {
            if ((Pl(u, l, _l, !$l), Ka(u, 0) !== 0)) break t;
            u.timeoutHandle = rd(
              Xo.bind(null, u, e, Cl, Hn, Zc, l, _l, ke, Du, $l, 2, -0, 0),
              n,
            );
            break t;
          }
          Xo(u, e, Cl, Hn, Zc, l, _l, ke, Du, $l, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ql(t);
  }
  function Jc(t) {
    Cl === null ? (Cl = t) : Cl.push.apply(Cl, t);
  }
  function Xo(t, l, e, u, a, n, c, f, o, m, p, D, _) {
    var z = l.subtreeFlags;
    if (
      (z & 8192 || (z & 16785408) === 16785408) &&
      ((Ma = { stylesheets: null, count: 0, unsuspend: Dh }),
      Uo(l),
      (l = Rh()),
      l !== null)
    ) {
      (t.cancelPendingCommit = l(Jo.bind(null, t, e, u, a, c, f, o, 1, D, _))),
        Pl(t, n, c, !m);
      return;
    }
    Jo(t, e, u, a, c, f, o, p, D, _);
  }
  function w0(t) {
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
    (l &= ~Qc),
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
  function qn() {
    return (zt & 6) === 0 ? (za(0), !1) : !0;
  }
  function kc() {
    if (tt !== null) {
      if (St === 0) var t = tt.return;
      else (t = tt), (Ll = Le = null), tc(t), (mu = null), (ua = 0), (t = tt);
      for (; t !== null; ) jo(t.alternate, t), (t = t.return);
      tt = null;
    }
  }
  function Mu(t, l) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var e = t.timeoutHandle;
    e !== -1 && ((t.timeoutHandle = -1), oh(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      kc(),
      (gt = t),
      (tt = e = Se(t.current, null)),
      (at = l),
      (St = 0),
      (il = null),
      ($l = !1),
      (Ou = Gu(t, l)),
      (Xc = !1),
      (Du = _l = Qc = ke = be = At = 0),
      (Cl = _a = null),
      (Zc = !1),
      (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var a = 31 - el(u),
          n = 1 << a;
        (l |= t[a]), (u &= ~n);
      }
    return (Fl = l), un(), e;
  }
  function Qo(t, l) {
    ($ = null),
      (G.H = Hl),
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
      tt === null && ((At = 1), pn(t, yl(l, t.current)));
  }
  function Zo() {
    var t = G.H;
    return (G.H = Hl), t === null ? Hl : t;
  }
  function Vo() {
    var t = G.A;
    return (G.A = L0), t;
  }
  function Wc() {
    (At = 4),
      $l || ((at & 4194176) !== at && ml.current !== null) || (Ou = !0),
      ((be & 134217727) === 0 && (ke & 134217727) === 0) ||
        gt === null ||
        Pl(gt, at, _l, !1);
  }
  function $c(t, l, e) {
    var u = zt;
    zt |= 2;
    var a = Zo(),
      n = Vo();
    (gt !== t || at !== l) && ((Hn = null), Mu(t, l)), (l = !1);
    var c = At;
    t: do
      try {
        if (St !== 0 && tt !== null) {
          var f = tt,
            o = il;
          switch (St) {
            case 8:
              kc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 6:
              ml.current === null && (l = !0);
              var m = St;
              if (((St = 0), (il = null), Ru(t, f, o, m), e && Ou)) {
                c = 0;
                break t;
              }
              break;
            default:
              (m = St), (St = 0), (il = null), Ru(t, f, o, m);
          }
        }
        J0(), (c = At);
        break;
      } catch (p) {
        Qo(t, p);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (Ll = Le = null),
      (zt = u),
      (G.H = a),
      (G.A = n),
      tt === null && ((gt = null), (at = 0), un()),
      c
    );
  }
  function J0() {
    for (; tt !== null; ) Lo(tt);
  }
  function k0(t, l) {
    var e = zt;
    zt |= 2;
    var u = Zo(),
      a = Vo();
    gt !== t || at !== l
      ? ((Hn = null), (Nn = Rl() + 500), Mu(t, l))
      : (Ou = Gu(t, l));
    t: do
      try {
        if (St !== 0 && tt !== null) {
          l = tt;
          var n = il;
          l: switch (St) {
            case 1:
              (St = 0), (il = null), Ru(t, l, n, 1);
              break;
            case 2:
              if (Ir(n)) {
                (St = 0), (il = null), Ko(l);
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
                ? ((St = 0), (il = null), Ko(l))
                : ((St = 0), (il = null), Ru(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch (tt.tag) {
                case 26:
                  c = tt.memoizedState;
                case 5:
                case 27:
                  var f = tt;
                  if (!c || _d(c)) {
                    (St = 0), (il = null);
                    var o = f.sibling;
                    if (o !== null) tt = o;
                    else {
                      var m = f.return;
                      m !== null ? ((tt = m), xn(m)) : (tt = null);
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
              kc(), (At = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        W0();
        break;
      } catch (p) {
        Qo(t, p);
      }
    while (!0);
    return (
      (Ll = Le = null),
      (G.H = u),
      (G.A = a),
      (zt = e),
      tt !== null ? 0 : ((gt = null), (at = 0), un(), At)
    );
  }
  function W0() {
    for (; tt !== null && !gy(); ) Lo(tt);
  }
  function Lo(t) {
    var l = oo(t.alternate, t, Fl);
    (t.memoizedProps = t.pendingProps), l === null ? xn(t) : (tt = l);
  }
  function Ko(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = no(e, l, l.pendingProps, l.type, void 0, at);
        break;
      case 11:
        l = no(e, l, l.pendingProps, l.type.render, l.ref, at);
        break;
      case 5:
        tc(l);
      default:
        jo(e, l), (l = tt = qo(l, Fl)), (l = oo(e, l, Fl));
    }
    (t.memoizedProps = t.pendingProps), l === null ? xn(t) : (tt = l);
  }
  function Ru(t, l, e, u) {
    (Ll = Le = null), tc(l), (mu = null), (ua = 0);
    var a = l.return;
    try {
      if (j0(t, a, l, e, at)) {
        (At = 1), pn(t, yl(e, t.current)), (tt = null);
        return;
      }
    } catch (n) {
      if (a !== null) throw ((tt = a), n);
      (At = 1), pn(t, yl(e, t.current)), (tt = null);
      return;
    }
    l.flags & 32768
      ? (ct || u === 1
          ? (t = !0)
          : Ou || (at & 536870912) !== 0
            ? (t = !1)
            : (($l = t = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = ml.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        wo(l, t))
      : xn(l);
  }
  function xn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        wo(l, $l);
        return;
      }
      t = l.return;
      var e = Z0(l.alternate, l, Fl);
      if (e !== null) {
        tt = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        tt = l;
        return;
      }
      tt = l = t;
    } while (l !== null);
    At === 0 && (At = 5);
  }
  function wo(t, l) {
    do {
      var e = V0(t.alternate, t);
      if (e !== null) {
        (e.flags &= 32767), (tt = e);
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        tt = t;
        return;
      }
      tt = t = e;
    } while (t !== null);
    (At = 6), (tt = null);
  }
  function Jo(t, l, e, u, a, n, c, f, o, m) {
    var p = G.T,
      D = H.p;
    try {
      (H.p = 2), (G.T = null), $0(t, l, e, u, D, a, n, c, f, o, m);
    } finally {
      (G.T = p), (H.p = D);
    }
  }
  function $0(t, l, e, u, a, n, c, f) {
    do Uu();
    while (We !== null);
    if ((zt & 6) !== 0) throw Error(s(327));
    var o = t.finishedWork;
    if (((u = t.finishedLanes), o === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), o === t.current))
      throw Error(s(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var m = o.lanes | o.childLanes;
    if (
      ((m |= Gi),
      My(t, u, m, n, c, f),
      t === gt && ((tt = gt = null), (at = 0)),
      ((o.subtreeFlags & 10256) === 0 && (o.flags & 10256) === 0) ||
        Cn ||
        ((Cn = !0),
        (Lc = m),
        (Kc = e),
        th(Za, function () {
          return Uu(), null;
        })),
      (e = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || e
        ? ((e = G.T),
          (G.T = null),
          (n = H.p),
          (H.p = 2),
          (c = zt),
          (zt |= 4),
          G0(t, o),
          Do(o, t),
          _0(rf, t.containerInfo),
          (Jn = !!ff),
          (rf = ff = null),
          (t.current = o),
          zo(t, o.alternate, o),
          Sy(),
          (zt = c),
          (H.p = n),
          (G.T = e))
        : (t.current = o),
      Cn ? ((Cn = !1), (We = t), (Ea = u)) : ko(t, m),
      (m = t.pendingLanes),
      m === 0 && (_e = null),
      zy(o.stateNode),
      ql(t),
      l !== null)
    )
      for (a = t.onRecoverableError, o = 0; o < l.length; o++)
        (m = l[o]), a(m.value, { componentStack: m.stack });
    return (
      (Ea & 3) !== 0 && Uu(),
      (m = t.pendingLanes),
      (u & 4194218) !== 0 && (m & 42) !== 0
        ? t === wc
          ? Ta++
          : ((Ta = 0), (wc = t))
        : (Ta = 0),
      za(0),
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
      var e = er(Ea),
        u = G.T,
        a = H.p;
      try {
        if (((H.p = 32 > e ? 32 : e), (G.T = null), We === null)) var n = !1;
        else {
          (e = Kc), (Kc = null);
          var c = We,
            f = Ea;
          if (((We = null), (Ea = 0), (zt & 6) !== 0)) throw Error(s(331));
          var o = zt;
          if (
            ((zt |= 4),
            Ho(c.current),
            Ro(c, c.current, f, e),
            (zt = o),
            za(0, !1),
            ll && typeof ll.onPostCommitFiberRoot == "function")
          )
            try {
              ll.onPostCommitFiberRoot(Yu, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (H.p = a), (G.T = u), ko(t, l);
      }
    }
    return !1;
  }
  function Wo(t, l, e) {
    (l = yl(e, l)),
      (l = hc(t.stateNode, l, 2)),
      (t = he(t, l, 2)),
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
              (_e === null || !_e.has(u)))
          ) {
            (t = yl(e, t)),
              (e = Fs(2)),
              (u = he(l, e, 2)),
              u !== null && (Ps(e, u, l, t), Xu(u, 2), ql(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function Fc(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new K0();
      var a = new Set();
      u.set(l, a);
    } else (a = u.get(l)), a === void 0 && ((a = new Set()), u.set(l, a));
    a.has(e) ||
      ((Xc = !0), a.add(e), (t = F0.bind(null, t, l, e)), l.then(t, t));
  }
  function F0(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      gt === t &&
        (at & e) === e &&
        (At === 4 || (At === 3 && (at & 62914560) === at && 300 > Rl() - Vc)
          ? (zt & 2) === 0 && Mu(t, 0)
          : (Qc |= e),
        Du === at && (Du = 0)),
      ql(t);
  }
  function $o(t, l) {
    l === 0 && (l = If()), (t = ie(t, l)), t !== null && (Xu(t, l), ql(t));
  }
  function P0(t) {
    var l = t.memoizedState,
      e = 0;
    l !== null && (e = l.retryLane), $o(t, e);
  }
  function I0(t, l) {
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
        throw Error(s(314));
    }
    u !== null && u.delete(l), $o(t, e);
  }
  function th(t, l) {
    return vi(t, l);
  }
  var Bn = null,
    Nu = null,
    Pc = !1,
    jn = !1,
    Ic = !1,
    $e = 0;
  function ql(t) {
    t !== Nu &&
      t.next === null &&
      (Nu === null ? (Bn = Nu = t) : (Nu = Nu.next = t)),
      (jn = !0),
      Pc || ((Pc = !0), eh(lh));
  }
  function za(t, l) {
    if (!Ic && jn) {
      Ic = !0;
      do
        for (var e = !1, u = Bn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                f = u.pingedLanes;
              (n = (1 << (31 - el(42 | t) + 1)) - 1),
                (n &= a & ~(c & ~f)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((e = !0), Io(u, n));
          } else
            (n = at),
              (n = Ka(u, u === gt ? n : 0)),
              (n & 3) === 0 || Gu(u, n) || ((e = !0), Io(u, n));
          u = u.next;
        }
      while (e);
      Ic = !1;
    }
  }
  function lh() {
    jn = Pc = !1;
    var t = 0;
    $e !== 0 && (sh() && (t = $e), ($e = 0));
    for (var l = Rl(), e = null, u = Bn; u !== null; ) {
      var a = u.next,
        n = Fo(u, l);
      n === 0
        ? ((u.next = null),
          e === null ? (Bn = a) : (e.next = a),
          a === null && (Nu = e))
        : ((e = u), (t !== 0 || (n & 3) !== 0) && (jn = !0)),
        (u = a);
    }
    za(t);
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
        f = 1 << c,
        o = a[c];
      o === -1
        ? ((f & e) === 0 || (f & u) !== 0) && (a[c] = Dy(f, l))
        : o <= l && (t.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((l = gt),
      (e = at),
      (e = Ka(t, t === l ? e : 0)),
      (u = t.callbackNode),
      e === 0 || (t === l && St === 2) || t.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && mi(u),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Gu(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((u !== null && mi(u), er(e))) {
        case 2:
        case 8:
          e = $f;
          break;
        case 32:
          e = Za;
          break;
        case 268435456:
          e = Ff;
          break;
        default:
          e = Za;
      }
      return (
        (u = Po.bind(null, t)),
        (e = vi(e, u)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      u !== null && u !== null && mi(u),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Po(t, l) {
    var e = t.callbackNode;
    if (Uu() && t.callbackNode !== e) return null;
    var u = at;
    return (
      (u = Ka(t, t === gt ? u : 0)),
      u === 0
        ? null
        : (Go(t, u, l),
          Fo(t, Rl()),
          t.callbackNode != null && t.callbackNode === e
            ? Po.bind(null, t)
            : null)
    );
  }
  function Io(t, l) {
    if (Uu()) return null;
    Go(t, l, !0);
  }
  function eh(t) {
    dh(function () {
      (zt & 6) !== 0 ? vi(Wf, t) : t();
    });
  }
  function tf() {
    return $e === 0 && ($e = Pf()), $e;
  }
  function td(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : $a("" + t);
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
  function uh(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = td((a[Pt] || null).action),
        c = u.submitter;
      c &&
        ((l = (l = c[Pt] || null)
          ? td(l.formAction)
          : c.getAttribute("formAction")),
        l !== null && ((n = l), (c = null)));
      var f = new tn("action", "action", null, u, a);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if ($e !== 0) {
                  var o = c ? ld(a, c) : new FormData(a);
                  rc(
                    e,
                    { pending: !0, data: o, method: a.method, action: n },
                    null,
                    o,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (o = c ? ld(a, c) : new FormData(a)),
                  rc(
                    e,
                    { pending: !0, data: o, method: a.method, action: n },
                    n,
                    o,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var lf = 0; lf < wr.length; lf++) {
    var ef = wr[lf],
      ah = ef.toLowerCase(),
      nh = ef[0].toUpperCase() + ef.slice(1);
    Tl(ah, "on" + nh);
  }
  Tl(Qr, "onAnimationEnd"),
    Tl(Zr, "onAnimationIteration"),
    Tl(Vr, "onAnimationStart"),
    Tl("dblclick", "onDoubleClick"),
    Tl("focusin", "onFocus"),
    Tl("focusout", "onBlur"),
    Tl(T0, "onTransitionRun"),
    Tl(z0, "onTransitionStart"),
    Tl(p0, "onTransitionCancel"),
    Tl(Lr, "onTransitionEnd"),
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
  var pa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ih = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pa),
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
            var f = u[c],
              o = f.instance,
              m = f.currentTarget;
            if (((f = f.listener), o !== n && a.isPropagationStopped()))
              break t;
            (n = f), (a.currentTarget = m);
            try {
              n(a);
            } catch (p) {
              zn(p);
            }
            (a.currentTarget = null), (n = o);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((f = u[c]),
              (o = f.instance),
              (m = f.currentTarget),
              (f = f.listener),
              o !== n && a.isPropagationStopped())
            )
              break t;
            (n = f), (a.currentTarget = m);
            try {
              n(a);
            } catch (p) {
              zn(p);
            }
            (a.currentTarget = null), (n = o);
          }
      }
    }
  }
  function et(t, l) {
    var e = l[Si];
    e === void 0 && (e = l[Si] = new Set());
    var u = t + "__bubble";
    e.has(u) || (ud(l, t, 2, !1), e.add(u));
  }
  function uf(t, l, e) {
    var u = 0;
    l && (u |= 4), ud(e, t, u, l);
  }
  var Yn = "_reactListening" + Math.random().toString(36).slice(2);
  function af(t) {
    if (!t[Yn]) {
      (t[Yn] = !0),
        nr.forEach(function (e) {
          e !== "selectionchange" && (ih.has(e) || uf(e, !1, t), uf(e, !0, t));
        });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Yn] || ((l[Yn] = !0), uf("selectionchange", !1, l));
    }
  }
  function ud(t, l, e, u) {
    switch (Od(l)) {
      case 2:
        var a = Hh;
        break;
      case 8:
        a = Ch;
        break;
      default:
        a = Sf;
    }
    (e = a.bind(null, l, e, t)),
      (a = void 0),
      !Oi ||
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
  function nf(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === a || (f.nodeType === 8 && f.parentNode === a)) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var o = c.tag;
              if (
                (o === 3 || o === 4) &&
                ((o = c.stateNode.containerInfo),
                o === a || (o.nodeType === 8 && o.parentNode === a))
              )
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = Ue(f)), c === null)) return;
            if (((o = c.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              u = n = c;
              continue t;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    gr(function () {
      var m = n,
        p = pi(e),
        D = [];
      t: {
        var _ = Kr.get(t);
        if (_ !== void 0) {
          var z = tn,
            x = t;
          switch (t) {
            case "keypress":
              if (Pa(e) === 0) break t;
            case "keydown":
            case "keyup":
              z = Iy;
              break;
            case "focusin":
              (x = "focus"), (z = Ui);
              break;
            case "focusout":
              (x = "blur"), (z = Ui);
              break;
            case "beforeblur":
            case "afterblur":
              z = Ui;
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
              z = _r;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Qy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = e0;
              break;
            case Qr:
            case Zr:
            case Vr:
              z = Ly;
              break;
            case Lr:
              z = a0;
              break;
            case "scroll":
            case "scrollend":
              z = Gy;
              break;
            case "wheel":
              z = i0;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Tr;
              break;
            case "toggle":
            case "beforetoggle":
              z = f0;
          }
          var L = (l & 4) !== 0,
            Ot = !L && (t === "scroll" || t === "scrollend"),
            g = L ? (_ !== null ? _ + "Capture" : null) : _;
          L = [];
          for (var h = m, S; h !== null; ) {
            var O = h;
            if (
              ((S = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                S === null ||
                g === null ||
                ((O = Vu(h, g)), O != null && L.push(Aa(h, O, S))),
              Ot)
            )
              break;
            h = h.return;
          }
          0 < L.length &&
            ((_ = new z(_, x, null, e, p)), D.push({ event: _, listeners: L }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (z = t === "mouseout" || t === "pointerout"),
            _ &&
              e !== zi &&
              (x = e.relatedTarget || e.fromElement) &&
              (Ue(x) || x[lu]))
          )
            break t;
          if (
            (z || _) &&
            ((_ =
              p.window === p
                ? p
                : (_ = p.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            z
              ? ((x = e.relatedTarget || e.toElement),
                (z = m),
                (x = x ? Ue(x) : null),
                x !== null &&
                  ((Ot = V(x)),
                  (L = x.tag),
                  x !== Ot || (L !== 5 && L !== 27 && L !== 6)) &&
                  (x = null))
              : ((z = null), (x = m)),
            z !== x)
          ) {
            if (
              ((L = _r),
              (O = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((L = Tr),
                (O = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (Ot = z == null ? _ : Zu(z)),
              (S = x == null ? _ : Zu(x)),
              (_ = new L(O, h + "leave", z, e, p)),
              (_.target = Ot),
              (_.relatedTarget = S),
              (O = null),
              Ue(p) === m &&
                ((L = new L(g, h + "enter", x, e, p)),
                (L.target = S),
                (L.relatedTarget = Ot),
                (O = L)),
              (Ot = O),
              z && x)
            )
              l: {
                for (L = z, g = x, h = 0, S = L; S; S = Hu(S)) h++;
                for (S = 0, O = g; O; O = Hu(O)) S++;
                for (; 0 < h - S; ) (L = Hu(L)), h--;
                for (; 0 < S - h; ) (g = Hu(g)), S--;
                for (; h--; ) {
                  if (L === g || (g !== null && L === g.alternate)) break l;
                  (L = Hu(L)), (g = Hu(g));
                }
                L = null;
              }
            else L = null;
            z !== null && ad(D, _, z, L, !1),
              x !== null && Ot !== null && ad(D, Ot, x, L, !0);
          }
        }
        t: {
          if (
            ((_ = m ? Zu(m) : window),
            (z = _.nodeName && _.nodeName.toLowerCase()),
            z === "select" || (z === "input" && _.type === "file"))
          )
            var q = Ur;
          else if (Mr(_))
            if (Nr) q = S0;
            else {
              q = m0;
              var I = v0;
            }
          else
            (z = _.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? m && Ti(m.elementType) && (q = Ur)
                : (q = g0);
          if (q && (q = q(t, m))) {
            Rr(D, q, e, p);
            break t;
          }
          I && I(t, _, m),
            t === "focusout" &&
              m &&
              _.type === "number" &&
              m.memoizedProps.value != null &&
              Ei(_, "number", _.value);
        }
        switch (((I = m ? Zu(m) : window), t)) {
          case "focusin":
            (Mr(I) || I.contentEditable === "true") &&
              ((su = I), (Bi = m), (Fu = null));
            break;
          case "focusout":
            Fu = Bi = su = null;
            break;
          case "mousedown":
            ji = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ji = !1), Gr(D, e, p);
            break;
          case "selectionchange":
            if (E0) break;
          case "keydown":
          case "keyup":
            Gr(D, e, p);
        }
        var j;
        if (Hi)
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
          (zr &&
            e.locale !== "ko" &&
            (ru || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && ru && (j = Sr())
              : ((ne = p),
                (Di = "value" in ne ? ne.value : ne.textContent),
                (ru = !0))),
          (I = Gn(m, Q)),
          0 < I.length &&
            ((Q = new Er(Q, t, null, e, p)),
            D.push({ event: Q, listeners: I }),
            j ? (Q.data = j) : ((j = Dr(e)), j !== null && (Q.data = j)))),
          (j = s0 ? o0(t, e) : d0(t, e)) &&
            ((Q = Gn(m, "onBeforeInput")),
            0 < Q.length &&
              ((I = new Er("onBeforeInput", "beforeinput", null, e, p)),
              D.push({ event: I, listeners: Q }),
              (I.data = j))),
          uh(D, t, m, e, p);
      }
      ed(D, l);
    });
  }
  function Aa(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function Gn(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t,
        n = a.stateNode;
      (a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          n === null ||
          ((a = Vu(t, e)),
          a != null && u.unshift(Aa(t, a, n)),
          (a = Vu(t, l)),
          a != null && u.push(Aa(t, a, n))),
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
      var f = e,
        o = f.alternate,
        m = f.stateNode;
      if (((f = f.tag), o !== null && o === u)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        m === null ||
        ((o = m),
        a
          ? ((m = Vu(e, n)), m != null && c.unshift(Aa(e, m, o)))
          : a || ((m = Vu(e, n)), m != null && c.push(Aa(e, m, o)))),
        (e = e.return);
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var ch = /\r\n?/g,
    fh = /\u0000|\uFFFD/g;
  function nd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ch,
        `
`,
      )
      .replace(fh, "");
  }
  function id(t, l) {
    return (l = nd(l)), nd(t) === l;
  }
  function Xn() {}
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
        Ja(t, "class", u);
        break;
      case "tabIndex":
        Ja(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ja(t, e, u);
        break;
      case "style":
        vr(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          Ja(t, "data", u);
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
        (u = $a("" + u)), t.setAttribute(e, u);
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
        (u = $a("" + u)), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Xn);
        break;
      case "onScroll":
        u != null && et("scroll", t);
        break;
      case "onScrollEnd":
        u != null && et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(s(60));
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
        (e = $a("" + u)),
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
        et("beforetoggle", t), et("toggle", t), wa(t, "popover", u);
        break;
      case "xlinkActuate":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Yl(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Yl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        wa(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = jy.get(e) || e), wa(t, e, u));
    }
  }
  function cf(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        vr(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((e = u.__html), e != null)) {
            if (a.children != null) throw Error(s(60));
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
        u != null && et("scroll", t);
        break;
      case "onScrollEnd":
        u != null && et("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Xn);
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
                : wa(t, e, u);
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
        et("error", t), et("load", t);
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
                  throw Error(s(137, l));
                default:
                  ht(t, l, n, c, e, null);
              }
          }
        a && ht(t, l, "srcSet", e.srcSet, e, null),
          u && ht(t, l, "src", e.src, e, null);
        return;
      case "input":
        et("invalid", t);
        var f = (n = c = a = null),
          o = null,
          m = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var p = e[u];
            if (p != null)
              switch (u) {
                case "name":
                  a = p;
                  break;
                case "type":
                  c = p;
                  break;
                case "checked":
                  o = p;
                  break;
                case "defaultChecked":
                  m = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  f = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null) throw Error(s(137, l));
                  break;
                default:
                  ht(t, l, u, p, e, null);
              }
          }
        or(t, n, f, o, m, c, a, !1), ka(t);
        return;
      case "select":
        et("invalid", t), (u = c = n = null);
        for (a in e)
          if (e.hasOwnProperty(a) && ((f = e[a]), f != null))
            switch (a) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                ht(t, l, a, f, e, null);
            }
        (l = n),
          (e = c),
          (t.multiple = !!u),
          l != null ? nu(t, !!u, l, !1) : e != null && nu(t, !!u, e, !0);
        return;
      case "textarea":
        et("invalid", t), (n = a = u = null);
        for (c in e)
          if (e.hasOwnProperty(c) && ((f = e[c]), f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                ht(t, l, c, f, e, null);
            }
        yr(t, u, a, n), ka(t);
        return;
      case "option":
        for (o in e)
          if (e.hasOwnProperty(o) && ((u = e[o]), u != null))
            switch (o) {
              case "selected":
                t.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ht(t, l, o, u, e, null);
            }
        return;
      case "dialog":
        et("cancel", t), et("close", t);
        break;
      case "iframe":
      case "object":
        et("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < pa.length; u++) et(pa[u], t);
        break;
      case "image":
        et("error", t), et("load", t);
        break;
      case "details":
        et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        et("error", t), et("load", t);
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
                throw Error(s(137, l));
              default:
                ht(t, l, m, u, e, null);
            }
        return;
      default:
        if (Ti(l)) {
          for (p in e)
            e.hasOwnProperty(p) &&
              ((u = e[p]), u !== void 0 && cf(t, l, p, u, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((u = e[f]), u != null && ht(t, l, f, u, e, null));
  }
  function rh(t, l, e, u) {
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
          f = null,
          o = null,
          m = null,
          p = null;
        for (z in e) {
          var D = e[z];
          if (e.hasOwnProperty(z) && D != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = D;
              default:
                u.hasOwnProperty(z) || ht(t, l, z, null, u, D);
            }
        }
        for (var _ in u) {
          var z = u[_];
          if (((D = e[_]), u.hasOwnProperty(_) && (z != null || D != null)))
            switch (_) {
              case "type":
                n = z;
                break;
              case "name":
                a = z;
                break;
              case "checked":
                m = z;
                break;
              case "defaultChecked":
                p = z;
                break;
              case "value":
                c = z;
                break;
              case "defaultValue":
                f = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, l));
                break;
              default:
                z !== D && ht(t, l, _, z, u, D);
            }
        }
        _i(t, c, f, o, m, p, n, a);
        return;
      case "select":
        z = c = f = _ = null;
        for (n in e)
          if (((o = e[n]), e.hasOwnProperty(n) && o != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                z = o;
              default:
                u.hasOwnProperty(n) || ht(t, l, n, null, u, o);
            }
        for (a in u)
          if (
            ((n = u[a]),
            (o = e[a]),
            u.hasOwnProperty(a) && (n != null || o != null))
          )
            switch (a) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== o && ht(t, l, a, n, u, o);
            }
        (l = f),
          (e = c),
          (u = z),
          _ != null
            ? nu(t, !!e, _, !1)
            : !!u != !!e &&
              (l != null ? nu(t, !!e, l, !0) : nu(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        z = _ = null;
        for (f in e)
          if (
            ((a = e[f]),
            e.hasOwnProperty(f) && a != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, l, f, null, u, a);
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
                z = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== n && ht(t, l, c, a, u, n);
            }
        dr(t, _, z);
        return;
      case "option":
        for (var x in e)
          if (
            ((_ = e[x]),
            e.hasOwnProperty(x) && _ != null && !u.hasOwnProperty(x))
          )
            switch (x) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ht(t, l, x, null, u, _);
            }
        for (o in u)
          if (
            ((_ = u[o]),
            (z = e[o]),
            u.hasOwnProperty(o) && _ !== z && (_ != null || z != null))
          )
            switch (o) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                ht(t, l, o, _, u, z);
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
        for (var L in e)
          (_ = e[L]),
            e.hasOwnProperty(L) &&
              _ != null &&
              !u.hasOwnProperty(L) &&
              ht(t, l, L, null, u, _);
        for (m in u)
          if (
            ((_ = u[m]),
            (z = e[m]),
            u.hasOwnProperty(m) && _ !== z && (_ != null || z != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(s(137, l));
                break;
              default:
                ht(t, l, m, _, u, z);
            }
        return;
      default:
        if (Ti(l)) {
          for (var Ot in e)
            (_ = e[Ot]),
              e.hasOwnProperty(Ot) &&
                _ !== void 0 &&
                !u.hasOwnProperty(Ot) &&
                cf(t, l, Ot, void 0, u, _);
          for (p in u)
            (_ = u[p]),
              (z = e[p]),
              !u.hasOwnProperty(p) ||
                _ === z ||
                (_ === void 0 && z === void 0) ||
                cf(t, l, p, _, u, z);
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
        (z = e[D]),
        !u.hasOwnProperty(D) ||
          _ === z ||
          (_ == null && z == null) ||
          ht(t, l, D, _, u, z);
  }
  var ff = null,
    rf = null;
  function Qn(t) {
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
  function sf(t, l) {
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
  var of = null;
  function sh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === of
        ? !1
        : ((of = t), !0)
      : ((of = null), !1);
  }
  var rd = typeof setTimeout == "function" ? setTimeout : void 0,
    oh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    sd = typeof Promise == "function" ? Promise : void 0,
    dh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof sd < "u"
          ? function (t) {
              return sd.resolve(null).then(t).catch(yh);
            }
          : rd;
  function yh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function df(t, l) {
    var e = l,
      u = 0;
    do {
      var a = e.nextSibling;
      if ((t.removeChild(e), a && a.nodeType === 8))
        if (((e = a.data), e === "/$")) {
          if (u === 0) {
            t.removeChild(a), Ca(l);
            return;
          }
          u--;
        } else (e !== "$" && e !== "$?" && e !== "$!") || u++;
      e = a;
    } while (e);
    Ca(l);
  }
  function yf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yf(e), bi(e);
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
  function hh(t, l, e, u) {
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
      if (((t = Al(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function vh(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Al(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Al(t) {
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
    switch (((l = Qn(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  var El = new Map(),
    yd = new Set();
  function Zn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Il = H.d;
  H.d = { f: mh, r: gh, D: Sh, C: bh, L: _h, m: Eh, X: zh, S: Th, M: ph };
  function mh() {
    var t = Il.f(),
      l = qn();
    return t || l;
  }
  function gh(t) {
    var l = eu(t);
    l !== null && l.tag === 5 && l.type === "form" ? Gs(l) : Il.r(t);
  }
  var Cu = typeof document > "u" ? null : document;
  function hd(t, l, e) {
    var u = Cu;
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
  function Sh(t) {
    Il.D(t), hd("dns-prefetch", t, null);
  }
  function bh(t, l) {
    Il.C(t, l), hd("preconnect", t, l);
  }
  function _h(t, l, e) {
    Il.L(t, l, e);
    var u = Cu;
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
          n = qu(t);
          break;
        case "script":
          n = xu(t);
      }
      El.has(n) ||
        ((t = nt(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e,
        )),
        El.set(n, t),
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
    Il.m(t, l);
    var e = Cu;
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
          n = xu(t);
      }
      if (
        !El.has(n) &&
        ((t = nt({ rel: "modulepreload", href: t }, l)),
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
            if (e.querySelector(Da(n))) return;
        }
        (u = e.createElement("link")),
          Zt(u, "link", t),
          Bt(u),
          e.head.appendChild(u);
      }
    }
  }
  function Th(t, l, e) {
    Il.S(t, l, e);
    var u = Cu;
    if (u && t) {
      var a = uu(u).hoistableStyles,
        n = qu(t);
      l = l || "default";
      var c = a.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = u.querySelector(Oa(n)))) f.loading = 5;
        else {
          (t = nt({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = El.get(n)) && hf(t, e);
          var o = (c = u.createElement("link"));
          Bt(o),
            Zt(o, "link", t),
            (o._p = new Promise(function (m, p) {
              (o.onload = m), (o.onerror = p);
            })),
            o.addEventListener("load", function () {
              f.loading |= 1;
            }),
            o.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Vn(c, l, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: f }),
          a.set(n, c);
      }
    }
  }
  function zh(t, l) {
    Il.X(t, l);
    var e = Cu;
    if (e && t) {
      var u = uu(e).hoistableScripts,
        a = xu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Da(a))),
        n ||
          ((t = nt({ src: t, async: !0 }, l)),
          (l = El.get(a)) && vf(t, l),
          (n = e.createElement("script")),
          Bt(n),
          Zt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function ph(t, l) {
    Il.M(t, l);
    var e = Cu;
    if (e && t) {
      var u = uu(e).hoistableScripts,
        a = xu(t),
        n = u.get(a);
      n ||
        ((n = e.querySelector(Da(a))),
        n ||
          ((t = nt({ src: t, async: !0, type: "module" }, l)),
          (l = El.get(a)) && vf(t, l),
          (n = e.createElement("script")),
          Bt(n),
          Zt(n, "link", t),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function vd(t, l, e, u) {
    var a = (a = ee.current) ? Zn(a) : null;
    if (!a) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = qu(e.href)),
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
          t = qu(e.href);
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
                n || Ah(a, t, e, c.state))),
            l && u === null)
          )
            throw Error(s(528, ""));
          return c;
        }
        if (l && u !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = xu(e)),
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
        throw Error(s(444, t));
    }
  }
  function qu(t) {
    return 'href="' + ol(t) + '"';
  }
  function Oa(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function md(t) {
    return nt({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Ah(t, l, e, u) {
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
  function xu(t) {
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
          var a = nt({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (t.ownerDocument || t).createElement("style")),
            Bt(u),
            Zt(u, "style", a),
            Vn(u, e.precedence, t),
            (l.instance = u)
          );
        case "stylesheet":
          a = qu(e.href);
          var n = t.querySelector(Oa(a));
          if (n) return (l.state.loading |= 4), (l.instance = n), Bt(n), n;
          (u = md(e)),
            (a = El.get(a)) && hf(u, a),
            (n = (t.ownerDocument || t).createElement("link")),
            Bt(n);
          var c = n;
          return (
            (c._p = new Promise(function (f, o) {
              (c.onload = f), (c.onerror = o);
            })),
            Zt(n, "link", u),
            (l.state.loading |= 4),
            Vn(n, e.precedence, t),
            (l.instance = n)
          );
        case "script":
          return (
            (n = xu(e.src)),
            (a = t.querySelector(Da(n)))
              ? ((l.instance = a), Bt(a), a)
              : ((u = e),
                (a = El.get(n)) && ((u = nt({}, e)), vf(u, a)),
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
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((u = l.instance), (l.state.loading |= 4), Vn(u, e.precedence, t));
    return l.instance;
  }
  function Vn(t, l, e) {
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
      var f = u[c];
      if (f.dataset.precedence === l) n = f;
      else if (n !== a) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function hf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title);
  }
  function vf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity);
  }
  var Ln = null;
  function Sd(t, l, e) {
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
          n[Qu] ||
          n[Lt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
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
  function Oh(t, l, e) {
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
  function Dh() {}
  function Mh(t, l, e) {
    if (Ma === null) throw Error(s(475));
    var u = Ma;
    if (
      l.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var a = qu(e.href),
          n = t.querySelector(Oa(a));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (u.count++, (u = Kn.bind(u)), t.then(u, u)),
            (l.state.loading |= 4),
            (l.instance = n),
            Bt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (e = md(e)),
          (a = El.get(a)) && hf(e, a),
          (n = n.createElement("link")),
          Bt(n);
        var c = n;
        (c._p = new Promise(function (f, o) {
          (c.onload = f), (c.onerror = o);
        })),
          Zt(n, "link", e),
          (l.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (u.count++,
          (l = Kn.bind(u)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  function Rh() {
    if (Ma === null) throw Error(s(475));
    var t = Ma;
    return (
      t.stylesheets && t.count === 0 && mf(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && mf(t, t.stylesheets), t.unsuspend)) {
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
  function Kn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) mf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var wn = null;
  function mf(t, l) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (wn = new Map()),
        l.forEach(Uh, t),
        (wn = null),
        Kn.call(t));
  }
  function Uh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = wn.get(t);
      if (e) var u = e.get(null);
      else {
        (e = new Map()), wn.set(t, e);
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
        (u = Kn.bind(this)),
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
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: ut,
    _currentValue2: ut,
    _threadCount: 0,
  };
  function Nh(t, l, e, u, a, n, c, f) {
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
      (this.expirationTimes = gi(-1)),
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
      (this.entanglements = gi(0)),
      (this.hiddenUpdates = gi(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = a),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Ed(t, l, e, u, a, n, c, f, o, m, p, D) {
    return (
      (t = new Nh(t, l, e, c, f, o, m, D)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = bl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Ji()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: u, isDehydrated: e, cache: l }),
      Dc(n),
      t
    );
  }
  function Td(t) {
    return t ? ((t = yu), t) : yu;
  }
  function zd(t, l, e, u, a, n) {
    (a = Td(a)),
      u.context === null ? (u.context = a) : (u.pendingContext = a),
      (u = ye(l)),
      (u.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (e = he(t, u, l)),
      e !== null && (Wt(e, t, l), da(e, t, l));
  }
  function pd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function gf(t, l) {
    pd(t, l), (t = t.alternate) && pd(t, l);
  }
  function Ad(t) {
    if (t.tag === 13) {
      var l = ie(t, 67108864);
      l !== null && Wt(l, t, 67108864), gf(t, 67108864);
    }
  }
  var Jn = !0;
  function Hh(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = H.p;
    try {
      (H.p = 2), Sf(t, l, e, u);
    } finally {
      (H.p = n), (G.T = a);
    }
  }
  function Ch(t, l, e, u) {
    var a = G.T;
    G.T = null;
    var n = H.p;
    try {
      (H.p = 8), Sf(t, l, e, u);
    } finally {
      (H.p = n), (G.T = a);
    }
  }
  function Sf(t, l, e, u) {
    if (Jn) {
      var a = bf(u);
      if (a === null) nf(t, l, u, kn, e), Dd(t, u);
      else if (xh(a, t, l, e, u)) u.stopPropagation();
      else if ((Dd(t, u), l & 4 && -1 < qh.indexOf(t))) {
        for (; a !== null; ) {
          var n = eu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Re(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var o = 1 << (31 - el(c));
                      (f.entanglements[1] |= o), (c &= ~o);
                    }
                    ql(n), (zt & 6) === 0 && ((Nn = Rl() + 500), za(0));
                  }
                }
                break;
              case 13:
                (f = ie(n, 2)), f !== null && Wt(f, n, 2), qn(), gf(n, 2);
            }
          if (((n = bf(u)), n === null && nf(t, l, u, kn, e), n === a)) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else nf(t, l, u, null, e);
    }
  }
  function bf(t) {
    return (t = pi(t)), _f(t);
  }
  var kn = null;
  function _f(t) {
    if (((kn = null), (t = Ue(t)), t !== null)) {
      var l = V(t);
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
    return (kn = t), null;
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
        switch (by()) {
          case Wf:
            return 2;
          case $f:
            return 8;
          case Za:
          case _y:
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
    Te = null,
    ze = null,
    Ua = new Map(),
    Na = new Map(),
    pe = [],
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
        Te = null;
        break;
      case "mouseover":
      case "mouseout":
        ze = null;
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
        l !== null && ((l = eu(l)), l !== null && Ad(l)),
        t)
      : ((t.eventSystemFlags |= u),
        (l = t.targetContainers),
        a !== null && l.indexOf(a) === -1 && l.push(a),
        t);
  }
  function xh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return (Ee = Ha(Ee, t, l, e, u, a)), !0;
      case "dragenter":
        return (Te = Ha(Te, t, l, e, u, a)), !0;
      case "mouseover":
        return (ze = Ha(ze, t, l, e, u, a)), !0;
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
      var e = V(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = mt(e)), l !== null)) {
            (t.blockedOn = l),
              Ry(t.priority, function () {
                if (e.tag === 13) {
                  var u = cl(),
                    a = ie(e, u);
                  a !== null && Wt(a, e, u), gf(e, u);
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
      var e = bf(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(e.type, e);
        (zi = u), e.target.dispatchEvent(u), (zi = null);
      } else return (l = eu(e)), l !== null && Ad(l), (t.blockedOn = e), !1;
      l.shift();
    }
    return !0;
  }
  function Rd(t, l, e) {
    Wn(t) && e.delete(l);
  }
  function Bh() {
    (Ef = !1),
      Ee !== null && Wn(Ee) && (Ee = null),
      Te !== null && Wn(Te) && (Te = null),
      ze !== null && Wn(ze) && (ze = null),
      Ua.forEach(Rd),
      Na.forEach(Rd);
  }
  function $n(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      Ef ||
        ((Ef = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Bh)));
  }
  var Fn = null;
  function Ud(t) {
    Fn !== t &&
      ((Fn = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Fn === t && (Fn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            u = t[l + 1],
            a = t[l + 2];
          if (typeof u != "function") {
            if (_f(u || e) === null) continue;
            break;
          }
          var n = eu(e);
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            rc(n, { pending: !0, data: a, method: e.method, action: u }, u, a));
        }
      }));
  }
  function Ca(t) {
    function l(o) {
      return $n(o, t);
    }
    Ee !== null && $n(Ee, t),
      Te !== null && $n(Te, t),
      ze !== null && $n(ze, t),
      Ua.forEach(l),
      Na.forEach(l);
    for (var e = 0; e < pe.length; e++) {
      var u = pe[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < pe.length && ((e = pe[0]), e.blockedOn === null); )
      Md(e), e.blockedOn === null && pe.shift();
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (u = 0; u < e.length; u += 3) {
        var a = e[u],
          n = e[u + 1],
          c = a[Pt] || null;
        if (typeof n == "function") c || Ud(e);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((a = n), (c = n[Pt] || null))) f = c.formAction;
            else if (_f(a) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? (e[u + 1] = f) : (e.splice(u, 3), (u -= 3)),
            Ud(e);
        }
      }
  }
  function Tf(t) {
    this._internalRoot = t;
  }
  (Pn.prototype.render = Tf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(s(409));
      var e = l.current,
        u = cl();
      zd(e, u, t, l, null, null);
    }),
    (Pn.prototype.unmount = Tf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          t.tag === 0 && Uu(),
            zd(t.current, 2, null, t, null, null),
            qn(),
            (l[lu] = null);
        }
      });
  function Pn(t) {
    this._internalRoot = t;
  }
  Pn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = ur();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < pe.length && l !== 0 && l < pe[e].priority; e++);
      pe.splice(e, 0, t), e === 0 && Md(t);
    }
  };
  var Nd = r.version;
  if (Nd !== "19.0.0") throw Error(s(527, Nd, "19.0.0"));
  H.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = M(l)),
      (t = t !== null ? Z(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var jh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Ue,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var In = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!In.isDisabled && In.supportsFiber)
      try {
        (Yu = In.inject(jh)), (ll = In);
      } catch {}
  }
  return (
    (xa.createRoot = function (t, l) {
      if (!v(t)) throw Error(s(299));
      var e = !1,
        u = "",
        a = Js,
        n = ks,
        c = Ws,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (a = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (f = l.unstable_transitionCallbacks)),
        (l = Ed(t, 1, !1, null, null, e, u, a, n, c, f, null)),
        (t[lu] = l.current),
        af(t.nodeType === 8 ? t.parentNode : t),
        new Tf(l)
      );
    }),
    (xa.hydrateRoot = function (t, l, e) {
      if (!v(t)) throw Error(s(299));
      var u = !1,
        a = "",
        n = Js,
        c = ks,
        f = Ws,
        o = null,
        m = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (u = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (o = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (m = e.formState)),
        (l = Ed(t, 1, !0, l, e ?? null, u, a, n, c, f, o, m)),
        (l.context = Td(null)),
        (e = l.current),
        (u = cl()),
        (a = ye(u)),
        (a.callback = null),
        he(e, a, u),
        (l.current.lanes = u),
        Xu(l, u),
        ql(l),
        (t[lu] = l.current),
        af(t),
        new Pn(l)
      );
    }),
    (xa.version = "19.0.0"),
    xa
  );
}
var Qd;
function Jh() {
  if (Qd) return Af.exports;
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
      } catch (r) {
        console.error(r);
      }
  }
  return i(), (Af.exports = wh()), Af.exports;
}
var kh = Jh(),
  Rf = { exports: {} },
  Uf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Wh() {
  if (Zd) return Uf;
  Zd = 1;
  var i = ci();
  function r(E, b) {
    return (E === b && (E !== 0 || 1 / E === 1 / b)) || (E !== E && b !== b);
  }
  var d = typeof Object.is == "function" ? Object.is : r,
    s = i.useSyncExternalStore,
    v = i.useRef,
    T = i.useEffect,
    A = i.useMemo,
    R = i.useDebugValue;
  return (
    (Uf.useSyncExternalStoreWithSelector = function (E, b, U, C, Y) {
      var w = v(null);
      if (w.current === null) {
        var F = { hasValue: !1, value: null };
        w.current = F;
      } else F = w.current;
      w = A(
        function () {
          function P(B) {
            if (!dt) {
              if (
                ((dt = !0), (rt = B), (B = C(B)), Y !== void 0 && F.hasValue)
              ) {
                var st = F.value;
                if (Y(st, B)) return (K = st);
              }
              return (K = B);
            }
            if (((st = K), d(rt, B))) return st;
            var Dt = C(B);
            return Y !== void 0 && Y(st, Dt)
              ? ((rt = B), st)
              : ((rt = B), (K = Dt));
          }
          var dt = !1,
            rt,
            K,
            lt = U === void 0 ? null : U;
          return [
            function () {
              return P(b());
            },
            lt === null
              ? void 0
              : function () {
                  return P(lt());
                },
          ];
        },
        [b, U, C, Y],
      );
      var _t = s(E, w[0], w[1]);
      return (
        T(
          function () {
            (F.hasValue = !0), (F.value = _t);
          },
          [_t],
        ),
        R(_t),
        _t
      );
    }),
    Uf
  );
}
var Vd;
function $h() {
  return Vd || ((Vd = 1), (Rf.exports = Wh())), Rf.exports;
}
var Fh = $h();
function Ph(i) {
  i();
}
function Ih() {
  let i = null,
    r = null;
  return {
    clear() {
      (i = null), (r = null);
    },
    notify() {
      Ph(() => {
        let d = i;
        for (; d; ) d.callback(), (d = d.next);
      });
    },
    get() {
      const d = [];
      let s = i;
      for (; s; ) d.push(s), (s = s.next);
      return d;
    },
    subscribe(d) {
      let s = !0;
      const v = (r = { callback: d, next: null, prev: r });
      return (
        v.prev ? (v.prev.next = v) : (i = v),
        function () {
          !s ||
            i === null ||
            ((s = !1),
            v.next ? (v.next.prev = v.prev) : (r = v.prev),
            v.prev ? (v.prev.next = v.next) : (i = v.next));
        }
      );
    },
  };
}
var Ld = { notify() {}, get: () => [] };
function tv(i, r) {
  let d,
    s = Ld,
    v = 0,
    T = !1;
  function A(_t) {
    U();
    const P = s.subscribe(_t);
    let dt = !1;
    return () => {
      dt || ((dt = !0), P(), C());
    };
  }
  function R() {
    s.notify();
  }
  function E() {
    F.onStateChange && F.onStateChange();
  }
  function b() {
    return T;
  }
  function U() {
    v++, d || ((d = i.subscribe(E)), (s = Ih()));
  }
  function C() {
    v--, d && v === 0 && (d(), (d = void 0), s.clear(), (s = Ld));
  }
  function Y() {
    T || ((T = !0), U());
  }
  function w() {
    T && ((T = !1), C());
  }
  const F = {
    addNestedSub: A,
    notifyNestedSubs: R,
    handleChangeWrapper: E,
    isSubscribed: b,
    trySubscribe: Y,
    tryUnsubscribe: w,
    getListeners: () => s,
  };
  return F;
}
var lv = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ev = lv(),
  uv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  av = uv(),
  nv = () => (ev || av ? xt.useLayoutEffect : xt.useEffect),
  iv = nv(),
  Nf = Symbol.for("react-redux-context"),
  Hf = typeof globalThis < "u" ? globalThis : {};
function cv() {
  if (!xt.createContext) return {};
  const i = Hf[Nf] ?? (Hf[Nf] = new Map());
  let r = i.get(xt.createContext);
  return r || ((r = xt.createContext(null)), i.set(xt.createContext, r)), r;
}
var Me = cv();
function fv(i) {
  const { children: r, context: d, serverState: s, store: v } = i,
    T = xt.useMemo(() => {
      const E = tv(v);
      return {
        store: v,
        subscription: E,
        getServerState: s ? () => s : void 0,
      };
    }, [v, s]),
    A = xt.useMemo(() => v.getState(), [v]);
  iv(() => {
    const { subscription: E } = T;
    return (
      (E.onStateChange = E.notifyNestedSubs),
      E.trySubscribe(),
      A !== v.getState() && E.notifyNestedSubs(),
      () => {
        E.tryUnsubscribe(), (E.onStateChange = void 0);
      }
    );
  }, [T, A]);
  const R = d || Me;
  return xt.createElement(R.Provider, { value: T }, r);
}
var rv = fv;
function Lf(i = Me) {
  return function () {
    return xt.useContext(i);
  };
}
var ly = Lf();
function ey(i = Me) {
  const r = i === Me ? ly : Lf(i),
    d = () => {
      const { store: s } = r();
      return s;
    };
  return Object.assign(d, { withTypes: () => d }), d;
}
var sv = ey();
function ov(i = Me) {
  const r = i === Me ? sv : ey(i),
    d = () => r().dispatch;
  return Object.assign(d, { withTypes: () => d }), d;
}
var fi = ov(),
  dv = (i, r) => i === r;
function yv(i = Me) {
  const r = i === Me ? ly : Lf(i),
    d = (s, v = {}) => {
      const { equalityFn: T = dv } =
          typeof v == "function" ? { equalityFn: v } : v,
        A = r(),
        { store: R, subscription: E, getServerState: b } = A;
      xt.useRef(!0);
      const U = xt.useCallback(
          {
            [s.name](Y) {
              return s(Y);
            },
          }[s.name],
          [s],
        ),
        C = Fh.useSyncExternalStoreWithSelector(
          E.addNestedSub,
          R.getState,
          b || R.getState,
          U,
          T,
        );
      return xt.useDebugValue(C), C;
    };
  return Object.assign(d, { withTypes: () => d }), d;
}
var Kf = yv();
function Vt(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var hv = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Kd = hv,
  Cf = () => Math.random().toString(36).substring(7).split("").join("."),
  vv = {
    INIT: `@@redux/INIT${Cf()}`,
    REPLACE: `@@redux/REPLACE${Cf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Cf()}`,
  },
  ei = vv;
function wf(i) {
  if (typeof i != "object" || i === null) return !1;
  let r = i;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(i) === r || Object.getPrototypeOf(i) === null;
}
function uy(i, r, d) {
  if (typeof i != "function") throw new Error(Vt(2));
  if (
    (typeof r == "function" && typeof d == "function") ||
    (typeof d == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Vt(0));
  if (
    (typeof r == "function" && typeof d > "u" && ((d = r), (r = void 0)),
    typeof d < "u")
  ) {
    if (typeof d != "function") throw new Error(Vt(1));
    return d(uy)(i, r);
  }
  let s = i,
    v = r,
    T = new Map(),
    A = T,
    R = 0,
    E = !1;
  function b() {
    A === T &&
      ((A = new Map()),
      T.forEach((P, dt) => {
        A.set(dt, P);
      }));
  }
  function U() {
    if (E) throw new Error(Vt(3));
    return v;
  }
  function C(P) {
    if (typeof P != "function") throw new Error(Vt(4));
    if (E) throw new Error(Vt(5));
    let dt = !0;
    b();
    const rt = R++;
    return (
      A.set(rt, P),
      function () {
        if (dt) {
          if (E) throw new Error(Vt(6));
          (dt = !1), b(), A.delete(rt), (T = null);
        }
      }
    );
  }
  function Y(P) {
    if (!wf(P)) throw new Error(Vt(7));
    if (typeof P.type > "u") throw new Error(Vt(8));
    if (typeof P.type != "string") throw new Error(Vt(17));
    if (E) throw new Error(Vt(9));
    try {
      (E = !0), (v = s(v, P));
    } finally {
      E = !1;
    }
    return (
      (T = A).forEach((rt) => {
        rt();
      }),
      P
    );
  }
  function w(P) {
    if (typeof P != "function") throw new Error(Vt(10));
    (s = P), Y({ type: ei.REPLACE });
  }
  function F() {
    const P = C;
    return {
      subscribe(dt) {
        if (typeof dt != "object" || dt === null) throw new Error(Vt(11));
        function rt() {
          const lt = dt;
          lt.next && lt.next(U());
        }
        return rt(), { unsubscribe: P(rt) };
      },
      [Kd]() {
        return this;
      },
    };
  }
  return (
    Y({ type: ei.INIT }),
    { dispatch: Y, subscribe: C, getState: U, replaceReducer: w, [Kd]: F }
  );
}
function mv(i) {
  Object.keys(i).forEach((r) => {
    const d = i[r];
    if (typeof d(void 0, { type: ei.INIT }) > "u") throw new Error(Vt(12));
    if (typeof d(void 0, { type: ei.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Vt(13));
  });
}
function gv(i) {
  const r = Object.keys(i),
    d = {};
  for (let T = 0; T < r.length; T++) {
    const A = r[T];
    typeof i[A] == "function" && (d[A] = i[A]);
  }
  const s = Object.keys(d);
  let v;
  try {
    mv(d);
  } catch (T) {
    v = T;
  }
  return function (A = {}, R) {
    if (v) throw v;
    let E = !1;
    const b = {};
    for (let U = 0; U < s.length; U++) {
      const C = s[U],
        Y = d[C],
        w = A[C],
        F = Y(w, R);
      if (typeof F > "u") throw (R && R.type, new Error(Vt(14)));
      (b[C] = F), (E = E || F !== w);
    }
    return (E = E || s.length !== Object.keys(A).length), E ? b : A;
  };
}
function ui(...i) {
  return i.length === 0
    ? (r) => r
    : i.length === 1
      ? i[0]
      : i.reduce(
          (r, d) =>
            (...s) =>
              r(d(...s)),
        );
}
function Sv(...i) {
  return (r) => (d, s) => {
    const v = r(d, s);
    let T = () => {
      throw new Error(Vt(15));
    };
    const A = { getState: v.getState, dispatch: (E, ...b) => T(E, ...b) },
      R = i.map((E) => E(A));
    return (T = ui(...R)(v.dispatch)), { ...v, dispatch: T };
  };
}
function bv(i) {
  return wf(i) && "type" in i && typeof i.type == "string";
}
var ay = Symbol.for("immer-nothing"),
  wd = Symbol.for("immer-draftable"),
  fl = Symbol.for("immer-state");
function Ol(i, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Bu = Object.getPrototypeOf;
function Pe(i) {
  return !!i && !!i[fl];
}
function le(i) {
  var r;
  return i
    ? ny(i) ||
        Array.isArray(i) ||
        !!i[wd] ||
        !!((r = i.constructor) != null && r[wd]) ||
        si(i) ||
        oi(i)
    : !1;
}
var _v = Object.prototype.constructor.toString();
function ny(i) {
  if (!i || typeof i != "object") return !1;
  const r = Bu(i);
  if (r === null) return !0;
  const d = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return d === Object
    ? !0
    : typeof d == "function" && Function.toString.call(d) === _v;
}
function ai(i, r) {
  ri(i) === 0
    ? Reflect.ownKeys(i).forEach((d) => {
        r(d, i[d], i);
      })
    : i.forEach((d, s) => r(s, d, i));
}
function ri(i) {
  const r = i[fl];
  return r ? r.type_ : Array.isArray(i) ? 1 : si(i) ? 2 : oi(i) ? 3 : 0;
}
function Yf(i, r) {
  return ri(i) === 2 ? i.has(r) : Object.prototype.hasOwnProperty.call(i, r);
}
function iy(i, r, d) {
  const s = ri(i);
  s === 2 ? i.set(r, d) : s === 3 ? i.add(d) : (i[r] = d);
}
function Ev(i, r) {
  return i === r ? i !== 0 || 1 / i === 1 / r : i !== i && r !== r;
}
function si(i) {
  return i instanceof Map;
}
function oi(i) {
  return i instanceof Set;
}
function Fe(i) {
  return i.copy_ || i.base_;
}
function Gf(i, r) {
  if (si(i)) return new Map(i);
  if (oi(i)) return new Set(i);
  if (Array.isArray(i)) return Array.prototype.slice.call(i);
  const d = ny(i);
  if (r === !0 || (r === "class_only" && !d)) {
    const s = Object.getOwnPropertyDescriptors(i);
    delete s[fl];
    let v = Reflect.ownKeys(s);
    for (let T = 0; T < v.length; T++) {
      const A = v[T],
        R = s[A];
      R.writable === !1 && ((R.writable = !0), (R.configurable = !0)),
        (R.get || R.set) &&
          (s[A] = {
            configurable: !0,
            writable: !0,
            enumerable: R.enumerable,
            value: i[A],
          });
    }
    return Object.create(Bu(i), s);
  } else {
    const s = Bu(i);
    if (s !== null && d) return { ...i };
    const v = Object.create(s);
    return Object.assign(v, i);
  }
}
function Jf(i, r = !1) {
  return (
    di(i) ||
      Pe(i) ||
      !le(i) ||
      (ri(i) > 1 && (i.set = i.add = i.clear = i.delete = Tv),
      Object.freeze(i),
      r && Object.entries(i).forEach(([d, s]) => Jf(s, !0))),
    i
  );
}
function Tv() {
  Ol(2);
}
function di(i) {
  return Object.isFrozen(i);
}
var zv = {};
function Ie(i) {
  const r = zv[i];
  return r || Ol(0, i), r;
}
var ja;
function cy() {
  return ja;
}
function pv(i, r) {
  return {
    drafts_: [],
    parent_: i,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Jd(i, r) {
  r &&
    (Ie("Patches"),
    (i.patches_ = []),
    (i.inversePatches_ = []),
    (i.patchListener_ = r));
}
function Xf(i) {
  Qf(i), i.drafts_.forEach(Av), (i.drafts_ = null);
}
function Qf(i) {
  i === ja && (ja = i.parent_);
}
function kd(i) {
  return (ja = pv(ja, i));
}
function Av(i) {
  const r = i[fl];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function Wd(i, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const d = r.drafts_[0];
  return (
    i !== void 0 && i !== d
      ? (d[fl].modified_ && (Xf(r), Ol(4)),
        le(i) && ((i = ni(r, i)), r.parent_ || ii(r, i)),
        r.patches_ &&
          Ie("Patches").generateReplacementPatches_(
            d[fl].base_,
            i,
            r.patches_,
            r.inversePatches_,
          ))
      : (i = ni(r, d, [])),
    Xf(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    i !== ay ? i : void 0
  );
}
function ni(i, r, d) {
  if (di(r)) return r;
  const s = r[fl];
  if (!s) return ai(r, (v, T) => $d(i, s, r, v, T, d)), r;
  if (s.scope_ !== i) return r;
  if (!s.modified_) return ii(i, s.base_, !0), s.base_;
  if (!s.finalized_) {
    (s.finalized_ = !0), s.scope_.unfinalizedDrafts_--;
    const v = s.copy_;
    let T = v,
      A = !1;
    s.type_ === 3 && ((T = new Set(v)), v.clear(), (A = !0)),
      ai(T, (R, E) => $d(i, s, v, R, E, d, A)),
      ii(i, v, !1),
      d &&
        i.patches_ &&
        Ie("Patches").generatePatches_(s, d, i.patches_, i.inversePatches_);
  }
  return s.copy_;
}
function $d(i, r, d, s, v, T, A) {
  if (Pe(v)) {
    const R =
        T && r && r.type_ !== 3 && !Yf(r.assigned_, s) ? T.concat(s) : void 0,
      E = ni(i, v, R);
    if ((iy(d, s, E), Pe(E))) i.canAutoFreeze_ = !1;
    else return;
  } else A && d.add(v);
  if (le(v) && !di(v)) {
    if (!i.immer_.autoFreeze_ && i.unfinalizedDrafts_ < 1) return;
    ni(i, v),
      (!r || !r.scope_.parent_) &&
        typeof s != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(d, s) &&
        ii(i, v);
  }
}
function ii(i, r, d = !1) {
  !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && Jf(r, d);
}
function Ov(i, r) {
  const d = Array.isArray(i),
    s = {
      type_: d ? 1 : 0,
      scope_: r ? r.scope_ : cy(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: i,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let v = s,
    T = kf;
  d && ((v = [s]), (T = Ya));
  const { revoke: A, proxy: R } = Proxy.revocable(v, T);
  return (s.draft_ = R), (s.revoke_ = A), R;
}
var kf = {
    get(i, r) {
      if (r === fl) return i;
      const d = Fe(i);
      if (!Yf(d, r)) return Dv(i, d, r);
      const s = d[r];
      return i.finalized_ || !le(s)
        ? s
        : s === qf(i.base_, r)
          ? (xf(i), (i.copy_[r] = Vf(s, i)))
          : s;
    },
    has(i, r) {
      return r in Fe(i);
    },
    ownKeys(i) {
      return Reflect.ownKeys(Fe(i));
    },
    set(i, r, d) {
      const s = fy(Fe(i), r);
      if (s != null && s.set) return s.set.call(i.draft_, d), !0;
      if (!i.modified_) {
        const v = qf(Fe(i), r),
          T = v == null ? void 0 : v[fl];
        if (T && T.base_ === d)
          return (i.copy_[r] = d), (i.assigned_[r] = !1), !0;
        if (Ev(d, v) && (d !== void 0 || Yf(i.base_, r))) return !0;
        xf(i), Zf(i);
      }
      return (
        (i.copy_[r] === d && (d !== void 0 || r in i.copy_)) ||
          (Number.isNaN(d) && Number.isNaN(i.copy_[r])) ||
          ((i.copy_[r] = d), (i.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(i, r) {
      return (
        qf(i.base_, r) !== void 0 || r in i.base_
          ? ((i.assigned_[r] = !1), xf(i), Zf(i))
          : delete i.assigned_[r],
        i.copy_ && delete i.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(i, r) {
      const d = Fe(i),
        s = Reflect.getOwnPropertyDescriptor(d, r);
      return (
        s && {
          writable: !0,
          configurable: i.type_ !== 1 || r !== "length",
          enumerable: s.enumerable,
          value: d[r],
        }
      );
    },
    defineProperty() {
      Ol(11);
    },
    getPrototypeOf(i) {
      return Bu(i.base_);
    },
    setPrototypeOf() {
      Ol(12);
    },
  },
  Ya = {};
ai(kf, (i, r) => {
  Ya[i] = function () {
    return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
  };
});
Ya.deleteProperty = function (i, r) {
  return Ya.set.call(this, i, r, void 0);
};
Ya.set = function (i, r, d) {
  return kf.set.call(this, i[0], r, d, i[0]);
};
function qf(i, r) {
  const d = i[fl];
  return (d ? Fe(d) : i)[r];
}
function Dv(i, r, d) {
  var v;
  const s = fy(r, d);
  return s
    ? "value" in s
      ? s.value
      : (v = s.get) == null
        ? void 0
        : v.call(i.draft_)
    : void 0;
}
function fy(i, r) {
  if (!(r in i)) return;
  let d = Bu(i);
  for (; d; ) {
    const s = Object.getOwnPropertyDescriptor(d, r);
    if (s) return s;
    d = Bu(d);
  }
}
function Zf(i) {
  i.modified_ || ((i.modified_ = !0), i.parent_ && Zf(i.parent_));
}
function xf(i) {
  i.copy_ || (i.copy_ = Gf(i.base_, i.scope_.immer_.useStrictShallowCopy_));
}
var Mv = class {
  constructor(i) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, d, s) => {
        if (typeof r == "function" && typeof d != "function") {
          const T = d;
          d = r;
          const A = this;
          return function (E = T, ...b) {
            return A.produce(E, (U) => d.call(this, U, ...b));
          };
        }
        typeof d != "function" && Ol(6),
          s !== void 0 && typeof s != "function" && Ol(7);
        let v;
        if (le(r)) {
          const T = kd(this),
            A = Vf(r, void 0);
          let R = !0;
          try {
            (v = d(A)), (R = !1);
          } finally {
            R ? Xf(T) : Qf(T);
          }
          return Jd(T, s), Wd(v, T);
        } else if (!r || typeof r != "object") {
          if (
            ((v = d(r)),
            v === void 0 && (v = r),
            v === ay && (v = void 0),
            this.autoFreeze_ && Jf(v, !0),
            s)
          ) {
            const T = [],
              A = [];
            Ie("Patches").generateReplacementPatches_(r, v, T, A), s(T, A);
          }
          return v;
        } else Ol(1, r);
      }),
      (this.produceWithPatches = (r, d) => {
        if (typeof r == "function")
          return (A, ...R) => this.produceWithPatches(A, (E) => r(E, ...R));
        let s, v;
        return [
          this.produce(r, d, (A, R) => {
            (s = A), (v = R);
          }),
          s,
          v,
        ];
      }),
      typeof (i == null ? void 0 : i.autoFreeze) == "boolean" &&
        this.setAutoFreeze(i.autoFreeze),
      typeof (i == null ? void 0 : i.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(i.useStrictShallowCopy);
  }
  createDraft(i) {
    le(i) || Ol(8), Pe(i) && (i = Rv(i));
    const r = kd(this),
      d = Vf(i, void 0);
    return (d[fl].isManual_ = !0), Qf(r), d;
  }
  finishDraft(i, r) {
    const d = i && i[fl];
    (!d || !d.isManual_) && Ol(9);
    const { scope_: s } = d;
    return Jd(s, r), Wd(void 0, s);
  }
  setAutoFreeze(i) {
    this.autoFreeze_ = i;
  }
  setUseStrictShallowCopy(i) {
    this.useStrictShallowCopy_ = i;
  }
  applyPatches(i, r) {
    let d;
    for (d = r.length - 1; d >= 0; d--) {
      const v = r[d];
      if (v.path.length === 0 && v.op === "replace") {
        i = v.value;
        break;
      }
    }
    d > -1 && (r = r.slice(d + 1));
    const s = Ie("Patches").applyPatches_;
    return Pe(i) ? s(i, r) : this.produce(i, (v) => s(v, r));
  }
};
function Vf(i, r) {
  const d = si(i)
    ? Ie("MapSet").proxyMap_(i, r)
    : oi(i)
      ? Ie("MapSet").proxySet_(i, r)
      : Ov(i, r);
  return (r ? r.scope_ : cy()).drafts_.push(d), d;
}
function Rv(i) {
  return Pe(i) || Ol(10, i), ry(i);
}
function ry(i) {
  if (!le(i) || di(i)) return i;
  const r = i[fl];
  let d;
  if (r) {
    if (!r.modified_) return r.base_;
    (r.finalized_ = !0), (d = Gf(i, r.scope_.immer_.useStrictShallowCopy_));
  } else d = Gf(i, !0);
  return (
    ai(d, (s, v) => {
      iy(d, s, ry(v));
    }),
    r && (r.finalized_ = !1),
    d
  );
}
var rl = new Mv(),
  sy = rl.produce;
rl.produceWithPatches.bind(rl);
rl.setAutoFreeze.bind(rl);
rl.setUseStrictShallowCopy.bind(rl);
rl.applyPatches.bind(rl);
rl.createDraft.bind(rl);
rl.finishDraft.bind(rl);
function oy(i) {
  return ({ dispatch: d, getState: s }) =>
    (v) =>
    (T) =>
      typeof T == "function" ? T(d, s, i) : v(T);
}
var Uv = oy(),
  Nv = oy,
  Hv =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ui
              : ui.apply(null, arguments);
        };
function Fd(i, r) {
  function d(...s) {
    if (r) {
      let v = r(...s);
      if (!v) throw new Error(te(0));
      return {
        type: i,
        payload: v.payload,
        ...("meta" in v && { meta: v.meta }),
        ...("error" in v && { error: v.error }),
      };
    }
    return { type: i, payload: s[0] };
  }
  return (
    (d.toString = () => `${i}`),
    (d.type = i),
    (d.match = (s) => bv(s) && s.type === i),
    d
  );
}
var dy = class Ba extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Ba.prototype);
  }
  static get [Symbol.species]() {
    return Ba;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new Ba(...r[0].concat(this))
      : new Ba(...r.concat(this));
  }
};
function Pd(i) {
  return le(i) ? sy(i, () => {}) : i;
}
function Id(i, r, d) {
  return i.has(r) ? i.get(r) : i.set(r, d(r)).get(r);
}
function Cv(i) {
  return typeof i == "boolean";
}
var qv = () =>
    function (r) {
      const {
        thunk: d = !0,
        immutableCheck: s = !0,
        serializableCheck: v = !0,
        actionCreatorCheck: T = !0,
      } = r ?? {};
      let A = new dy();
      return d && (Cv(d) ? A.push(Uv) : A.push(Nv(d.extraArgument))), A;
    },
  xv = "RTK_autoBatch",
  ty = (i) => (r) => {
    setTimeout(r, i);
  },
  Bv =
    (i = { type: "raf" }) =>
    (r) =>
    (...d) => {
      const s = r(...d);
      let v = !0,
        T = !1,
        A = !1;
      const R = new Set(),
        E =
          i.type === "tick"
            ? queueMicrotask
            : i.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : ty(10)
              : i.type === "callback"
                ? i.queueNotification
                : ty(i.timeout),
        b = () => {
          (A = !1), T && ((T = !1), R.forEach((U) => U()));
        };
      return Object.assign({}, s, {
        subscribe(U) {
          const C = () => v && U(),
            Y = s.subscribe(C);
          return (
            R.add(U),
            () => {
              Y(), R.delete(U);
            }
          );
        },
        dispatch(U) {
          var C;
          try {
            return (
              (v = !((C = U == null ? void 0 : U.meta) != null && C[xv])),
              (T = !v),
              T && (A || ((A = !0), E(b))),
              s.dispatch(U)
            );
          } finally {
            v = !0;
          }
        },
      });
    },
  jv = (i) =>
    function (d) {
      const { autoBatch: s = !0 } = d ?? {};
      let v = new dy(i);
      return s && v.push(Bv(typeof s == "object" ? s : void 0)), v;
    };
function Yv(i) {
  const r = qv(),
    {
      reducer: d = void 0,
      middleware: s,
      devTools: v = !0,
      preloadedState: T = void 0,
      enhancers: A = void 0,
    } = i || {};
  let R;
  if (typeof d == "function") R = d;
  else if (wf(d)) R = gv(d);
  else throw new Error(te(1));
  let E;
  typeof s == "function" ? (E = s(r)) : (E = r());
  let b = ui;
  v && (b = Hv({ trace: !1, ...(typeof v == "object" && v) }));
  const U = Sv(...E),
    C = jv(U);
  let Y = typeof A == "function" ? A(C) : C();
  const w = b(...Y);
  return uy(R, T, w);
}
function yy(i) {
  const r = {},
    d = [];
  let s;
  const v = {
    addCase(T, A) {
      const R = typeof T == "string" ? T : T.type;
      if (!R) throw new Error(te(28));
      if (R in r) throw new Error(te(29));
      return (r[R] = A), v;
    },
    addMatcher(T, A) {
      return d.push({ matcher: T, reducer: A }), v;
    },
    addDefaultCase(T) {
      return (s = T), v;
    },
  };
  return i(v), [r, d, s];
}
function Gv(i) {
  return typeof i == "function";
}
function Xv(i, r) {
  let [d, s, v] = yy(r),
    T;
  if (Gv(i)) T = () => Pd(i());
  else {
    const R = Pd(i);
    T = () => R;
  }
  function A(R = T(), E) {
    let b = [
      d[E.type],
      ...s.filter(({ matcher: U }) => U(E)).map(({ reducer: U }) => U),
    ];
    return (
      b.filter((U) => !!U).length === 0 && (b = [v]),
      b.reduce((U, C) => {
        if (C)
          if (Pe(U)) {
            const w = C(U, E);
            return w === void 0 ? U : w;
          } else {
            if (le(U)) return sy(U, (Y) => C(Y, E));
            {
              const Y = C(U, E);
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
      }, R)
    );
  }
  return (A.getInitialState = T), A;
}
var Qv = Symbol.for("rtk-slice-createasyncthunk");
function Zv(i, r) {
  return `${i}/${r}`;
}
function Vv({ creators: i } = {}) {
  var d;
  const r = (d = i == null ? void 0 : i.asyncThunk) == null ? void 0 : d[Qv];
  return function (v) {
    const { name: T, reducerPath: A = T } = v;
    if (!T) throw new Error(te(11));
    const R =
        (typeof v.reducers == "function" ? v.reducers(Kv()) : v.reducers) || {},
      E = Object.keys(R),
      b = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      U = {
        addCase(K, lt) {
          const B = typeof K == "string" ? K : K.type;
          if (!B) throw new Error(te(12));
          if (B in b.sliceCaseReducersByType) throw new Error(te(13));
          return (b.sliceCaseReducersByType[B] = lt), U;
        },
        addMatcher(K, lt) {
          return b.sliceMatchers.push({ matcher: K, reducer: lt }), U;
        },
        exposeAction(K, lt) {
          return (b.actionCreators[K] = lt), U;
        },
        exposeCaseReducer(K, lt) {
          return (b.sliceCaseReducersByName[K] = lt), U;
        },
      };
    E.forEach((K) => {
      const lt = R[K],
        B = {
          reducerName: K,
          type: Zv(T, K),
          createNotation: typeof v.reducers == "function",
        };
      Jv(lt) ? Wv(B, lt, U, r) : wv(B, lt, U);
    });
    function C() {
      const [K = {}, lt = [], B = void 0] =
          typeof v.extraReducers == "function"
            ? yy(v.extraReducers)
            : [v.extraReducers],
        st = { ...K, ...b.sliceCaseReducersByType };
      return Xv(v.initialState, (Dt) => {
        for (let Et in st) Dt.addCase(Et, st[Et]);
        for (let Et of b.sliceMatchers) Dt.addMatcher(Et.matcher, Et.reducer);
        for (let Et of lt) Dt.addMatcher(Et.matcher, Et.reducer);
        B && Dt.addDefaultCase(B);
      });
    }
    const Y = (K) => K,
      w = new Map();
    let F;
    function _t(K, lt) {
      return F || (F = C()), F(K, lt);
    }
    function P() {
      return F || (F = C()), F.getInitialState();
    }
    function dt(K, lt = !1) {
      function B(Dt) {
        let Et = Dt[K];
        return typeof Et > "u" && lt && (Et = P()), Et;
      }
      function st(Dt = Y) {
        const Et = Id(w, lt, () => new WeakMap());
        return Id(Et, Dt, () => {
          const G = {};
          for (const [nt, $t] of Object.entries(v.selectors ?? {}))
            G[nt] = Lv($t, Dt, P, lt);
          return G;
        });
      }
      return {
        reducerPath: K,
        getSelectors: st,
        get selectors() {
          return st(B);
        },
        selectSlice: B,
      };
    }
    const rt = {
      name: T,
      reducer: _t,
      actions: b.actionCreators,
      caseReducers: b.sliceCaseReducersByName,
      getInitialState: P,
      ...dt(A),
      injectInto(K, { reducerPath: lt, ...B } = {}) {
        const st = lt ?? A;
        return (
          K.inject({ reducerPath: st, reducer: _t }, B),
          { ...rt, ...dt(st, !0) }
        );
      },
    };
    return rt;
  };
}
function Lv(i, r, d, s) {
  function v(T, ...A) {
    let R = r(T);
    return typeof R > "u" && s && (R = d()), i(R, ...A);
  }
  return (v.unwrapped = i), v;
}
var hy = Vv();
function Kv() {
  function i(r, d) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: r, ...d };
  }
  return (
    (i.withTypes = () => i),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...d) {
              return r(...d);
            },
          }[r.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(r, d) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: r,
          reducer: d,
        };
      },
      asyncThunk: i,
    }
  );
}
function wv({ type: i, reducerName: r, createNotation: d }, s, v) {
  let T, A;
  if ("reducer" in s) {
    if (d && !kv(s)) throw new Error(te(17));
    (T = s.reducer), (A = s.prepare);
  } else T = s;
  v.addCase(i, T)
    .exposeCaseReducer(r, T)
    .exposeAction(r, A ? Fd(i, A) : Fd(i));
}
function Jv(i) {
  return i._reducerDefinitionType === "asyncThunk";
}
function kv(i) {
  return i._reducerDefinitionType === "reducerWithPrepare";
}
function Wv({ type: i, reducerName: r }, d, s, v) {
  if (!v) throw new Error(te(18));
  const {
      payloadCreator: T,
      fulfilled: A,
      pending: R,
      rejected: E,
      settled: b,
      options: U,
    } = d,
    C = v(i, T, U);
  s.exposeAction(r, C),
    A && s.addCase(C.fulfilled, A),
    R && s.addCase(C.pending, R),
    E && s.addCase(C.rejected, E),
    b && s.addMatcher(C.settled, b),
    s.exposeCaseReducer(r, {
      fulfilled: A || ti,
      pending: R || ti,
      rejected: E || ti,
      settled: b || ti,
    });
}
function ti() {}
function te(i) {
  return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
const $v = [
    {
      id: "1",
      title: "Купить продукты",
      text: "Купить хлеб, молоко и яйца",
      completed: !1,
    },
    {
      id: "2",
      title: "Выучить Redux",
      text: "Разобраться с RTK, useSelector и useDispatch",
      completed: !1,
    },
    {
      id: "3",
      title: "Позаниматься спортом",
      text: "Сделать зарядку 15 минут",
      completed: !0,
    },
  ],
  vy = hy({
    name: "Todos",
    initialState: $v,
    reducers: {
      addTodo: (i, r) => {
        const d = r.payload;
        i.unshift(d);
      },
      removeTodo: (i, r) => i.filter((d) => d.id !== r.payload),
      toggleTodo: (i, r) => {
        const d = i.find((s) => s.id === r.payload);
        d && (d.completed = !d.completed);
      },
      editTodo: (i, r) => {
        const d = i.find((s) => s.id === r.payload.id);
        d && ((d.title = r.payload.title), (d.text = r.payload.text));
      },
    },
  }),
  { addTodo: Fv, removeTodo: Pv, toggleTodo: Iv, editTodo: tm } = vy.actions,
  lm = vy.reducer,
  em = "_form_wdz6k_1",
  um = "_input_wdz6k_12",
  am = "_textarea_wdz6k_13",
  nm = "_button_wdz6k_38",
  li = { form: em, input: um, textarea: am, button: nm };
function im() {
  const i = fi(),
    [r, d] = xt.useState({ title: "", text: "", completed: !1 });
  function s(A) {
    const { name: R, value: E } = A.target;
    d((b) => ({ ...b, [R]: E }));
  }
  function v(A) {
    if ((A.preventDefault(), !r.title.trim() || !r.text.trim())) return;
    const R = { id: Date.now().toString(), ...r };
    i(Fv(R)), d({ title: "", text: "", completed: !1 });
  }
  function T(A) {
    A.key === "Enter" && v(A);
  }
  return it.jsxs("form", {
    onSubmit: v,
    className: li.form,
    children: [
      it.jsx("input", {
        type: "text",
        name: "title",
        placeholder: "Название задачи",
        value: r.title,
        onChange: s,
        onKeyDown: T,
        className: li.input,
      }),
      it.jsx("textarea", {
        name: "text",
        placeholder: "Описание",
        value: r.text,
        onChange: s,
        onKeyDown: T,
        className: li.textarea,
      }),
      it.jsx("button", {
        type: "submit",
        className: li.button,
        children: "Добавить!",
      }),
    ],
  });
}
const cm = "_container_5zit1_3",
  fm = { container: cm },
  rm = "_modalOverlay_r7gmj_1",
  sm = "_modalContent_r7gmj_13",
  om = "_closeButton_r7gmj_23",
  dm = "_input_r7gmj_39",
  ym = "_textarea_r7gmj_40",
  hm = "_buttons_r7gmj_54",
  vm = "_buttonSave_r7gmj_60",
  mm = "_buttonCancel_r7gmj_73",
  Oe = {
    modalOverlay: rm,
    modalContent: sm,
    closeButton: om,
    input: dm,
    textarea: ym,
    buttons: hm,
    buttonSave: vm,
    buttonCancel: mm,
  };
function gm({ task: i, onClose: r }) {
  const d = fi(),
    [s, v] = xt.useState({ title: i.title, text: i.text }),
    T = (E) => {
      v({ ...s, [E.target.name]: E.target.value });
    },
    A = () => {
      const E = { ...i, title: s.title, text: s.text };
      d(tm(E)), r();
    },
    R = (E) => {
      E.key === "Enter" && A();
    };
  return (
    xt.useEffect(() => {
      const E = (b) => {
        b.key === "Escape" && r();
      };
      return (
        document.addEventListener("keydown", E),
        () => {
          document.removeEventListener("keydown", E);
        }
      );
    }, [r]),
    it.jsx("div", {
      className: Oe.modalOverlay,
      onClick: r,
      children: it.jsxs("div", {
        className: Oe.modalContent,
        onClick: (E) => E.stopPropagation(),
        children: [
          it.jsx("h2", { children: "Редактировать задачу" }),
          it.jsx("button", {
            className: Oe.closeButton,
            onClick: r,
            children: "✖",
          }),
          it.jsxs("form", {
            onSubmit: A,
            onKeyDown: R,
            children: [
              it.jsx("input", {
                type: "text",
                name: "title",
                value: s.title,
                onChange: T,
                className: Oe.input,
              }),
              it.jsx("textarea", {
                name: "text",
                value: s.text,
                onChange: T,
                className: Oe.textarea,
              }),
              it.jsxs("div", {
                className: Oe.buttons,
                children: [
                  it.jsx("button", {
                    type: "submit",
                    className: Oe.buttonSave,
                    children: "Сохранить",
                  }),
                  it.jsx("button", {
                    type: "button",
                    onClick: r,
                    className: Oe.buttonCancel,
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
const Sm = "_todoItem_y8zf5_2",
  bm = "_todoTitle_y8zf5_17",
  _m = "_todoText_y8zf5_24",
  Em = "_button_y8zf5_30",
  Tm = "_buttonToggle_y8zf5_45",
  zm = "_buttonRemove_y8zf5_50",
  pm = "_buttonEdit_y8zf5_59",
  De = {
    todoItem: Sm,
    todoTitle: bm,
    todoText: _m,
    button: Em,
    buttonToggle: Tm,
    buttonRemove: zm,
    buttonEdit: pm,
  };
function Am({ id: i, title: r, text: d, completed: s }) {
  const v = fi(),
    [T, A] = xt.useState(!1);
  function R() {
    v(Iv(i));
  }
  function E() {
    v(Pv(i));
  }
  function b() {
    A(!0);
  }
  return it.jsxs("li", {
    className: De.todoItem,
    children: [
      it.jsx("h3", { className: De.todoTitle, children: r }),
      it.jsx("p", { className: De.todoText, children: d }),
      it.jsx("button", {
        onClick: R,
        className: `${De.button} ${De.buttonToggle}`,
        children: "Изменить статус",
      }),
      it.jsx("button", {
        onClick: b,
        className: De.buttonEdit,
        children: "✏️ Редактировать",
      }),
      it.jsx("button", {
        onClick: E,
        className: `${De.button} ${De.buttonRemove}`,
        children: "Удалить",
      }),
      T &&
        it.jsx(gm, {
          task: { id: i, title: r, text: d, completed: s },
          onClose: () => A(!1),
        }),
    ],
  });
}
function Om() {
  const i = Kf((r) => r.todos);
  return it.jsx("ul", {
    className: fm.container,
    children: i.map((r) =>
      it.jsx(
        Am,
        { id: r.id, title: r.title, text: r.text, completed: r.completed },
        r.id,
      ),
    ),
  });
}
const Dm = "_container_1c26z_1",
  Mm = "_title_1c26z_12",
  Rm = "_content_1c26z_20",
  Bf = { container: Dm, title: Mm, content: Rm },
  Um = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  Nm = localStorage.getItem("theme") || Um,
  my = hy({
    name: "theme",
    initialState: Nm,
    reducers: {
      toggleTheme: (i) => {
        const r = i === "light" ? "dark" : "light";
        return localStorage.setItem("theme", r), r;
      },
    },
  }),
  { toggleTheme: Hm } = my.actions,
  Cm = my.reducer,
  qm = "_button_arg0t_2",
  xm = "_light_arg0t_21",
  Bm = "_dark_arg0t_37",
  jf = { button: qm, light: xm, dark: Bm };
function jm() {
  const i = fi(),
    r = Kf((s) => s.theme),
    d = () => {
      i(Hm());
    };
  return it.jsx("button", {
    onClick: d,
    className: `${jf.button} ${r === "light" ? jf.light : jf.dark}`,
    children: r === "light" ? "Темная тема" : "Светлая тема",
  });
}
function Ym() {
  const i = Kf((r) => r.theme);
  return (
    xt.useEffect(() => {
      document.body.setAttribute("data-theme", i);
    }, [i]),
    it.jsxs("div", {
      className: Bf.container,
      children: [
        it.jsx("h1", { className: Bf.title, children: "Todo List" }),
        it.jsx(jm, {}),
        it.jsxs("div", {
          className: Bf.content,
          children: [it.jsx(im, {}), it.jsx(Om, {})],
        }),
      ],
    })
  );
}
const Gm = Yv({ reducer: { todos: lm, theme: Cm } });
kh.createRoot(document.getElementById("root")).render(
  it.jsx(xt.StrictMode, {
    children: it.jsx(rv, { store: Gm, children: it.jsx(Ym, {}) }),
  }),
);
