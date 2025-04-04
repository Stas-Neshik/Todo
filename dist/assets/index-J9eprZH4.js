(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) r(h);
  new MutationObserver((h) => {
    for (const E of h)
      if (E.type === "childList")
        for (const z of E.addedNodes)
          z.tagName === "LINK" && z.rel === "modulepreload" && r(z);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(h) {
    const E = {};
    return (
      h.integrity && (E.integrity = h.integrity),
      h.referrerPolicy && (E.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function r(h) {
    if (h.ep) return;
    h.ep = !0;
    const E = o(h);
    fetch(h.href, E);
  }
})();
var Of = { exports: {} },
  Ya = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function wh() {
  if (Cd) return Ya;
  Cd = 1;
  var i = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function o(r, h, E) {
    var z = null;
    if (
      (E !== void 0 && (z = "" + E),
      h.key !== void 0 && (z = "" + h.key),
      "key" in h)
    ) {
      E = {};
      for (var M in h) M !== "key" && (E[M] = h[M]);
    } else E = h;
    return (
      (h = E.ref),
      { $$typeof: i, type: r, key: z, ref: h !== void 0 ? h : null, props: E }
    );
  }
  return (Ya.Fragment = f), (Ya.jsx = o), (Ya.jsxs = o), Ya;
}
var jd;
function Lh() {
  return jd || ((jd = 1), (Of.exports = wh())), Of.exports;
}
var q = Lh(),
  Mf = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Vh() {
  if (qd) return W;
  qd = 1;
  var i = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    U = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function G(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (x && y[x]) || y["@@iterator"]),
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
  function K(y, R, w) {
    (this.props = y),
      (this.context = R),
      (this.refs = bt),
      (this.updater = w || V);
  }
  (K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (y, R) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, R, "setState");
    }),
    (K.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function dt() {}
  dt.prototype = K.prototype;
  function rt(y, R, w) {
    (this.props = y),
      (this.context = R),
      (this.refs = bt),
      (this.updater = w || V);
  }
  var k = (rt.prototype = new dt());
  (k.constructor = rt), F(k, K.prototype), (k.isPureReactComponent = !0);
  var lt = Array.isArray,
    B = { H: null, A: null, T: null, S: null },
    st = Object.prototype.hasOwnProperty;
  function Ot(y, R, w, Q, H, at) {
    return (
      (w = at.ref),
      { $$typeof: i, type: y, key: R, ref: w !== void 0 ? w : null, props: at }
    );
  }
  function Et(y, R) {
    return Ot(y.type, R, void 0, void 0, void 0, y.props);
  }
  function X(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function it(y) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (w) {
        return R[w];
      })
    );
  }
  var Wt = /\/+/g;
  function qe(y, R) {
    return typeof y == "object" && y !== null && y.key != null
      ? it("" + y.key)
      : R.toString(36);
  }
  function Me() {}
  function Be(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Me, Me)
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
  function Ft(y, R, w, Q, H) {
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
            case f:
              P = !0;
              break;
            case U:
              return (P = y._init), Ft(P(y._payload), R, w, Q, H);
          }
      }
    if (P)
      return (
        (H = H(y)),
        (P = Q === "" ? "." + qe(y, 0) : Q),
        lt(H)
          ? ((w = ""),
            P != null && (w = P.replace(Wt, "$&/") + "/"),
            Ft(H, R, w, "", function (Ut) {
              return Ut;
            }))
          : H != null &&
            (X(H) &&
              (H = Et(
                H,
                w +
                  (H.key == null || (y && y.key === H.key)
                    ? ""
                    : ("" + H.key).replace(Wt, "$&/") + "/") +
                  P,
              )),
            R.push(H)),
        1
      );
    P = 0;
    var Jt = Q === "" ? "." : Q + ":";
    if (lt(y))
      for (var ot = 0; ot < y.length; ot++)
        (Q = y[ot]), (at = Jt + qe(Q, ot)), (P += Ft(Q, R, w, at, H));
    else if (((ot = G(y)), typeof ot == "function"))
      for (y = ot.call(y), ot = 0; !(Q = y.next()).done; )
        (Q = Q.value), (at = Jt + qe(Q, ot++)), (P += Ft(Q, R, w, at, H));
    else if (at === "object") {
      if (typeof y.then == "function") return Ft(Be(y), R, w, Q, H);
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
  function N(y, R, w) {
    if (y == null) return y;
    var Q = [],
      H = 0;
    return (
      Ft(y, Q, "", "", function (at) {
        return R.call(w, at, H++);
      }),
      Q
    );
  }
  function $(y) {
    if (y._status === -1) {
      var R = y._result;
      (R = R()),
        R.then(
          function (w) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = w));
          },
          function (w) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = w));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = R));
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
    (W.Children = {
      map: N,
      forEach: function (y, R, w) {
        N(
          y,
          function () {
            R.apply(this, arguments);
          },
          w,
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
        if (!X(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    (W.Component = K),
    (W.Fragment = o),
    (W.Profiler = h),
    (W.PureComponent = rt),
    (W.StrictMode = r),
    (W.Suspense = T),
    (W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (W.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (W.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (W.cloneElement = function (y, R, w) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var Q = F({}, y.props),
        H = y.key,
        at = void 0;
      if (R != null)
        for (P in (R.ref !== void 0 && (at = void 0),
        R.key !== void 0 && (H = "" + R.key),
        R))
          !st.call(R, P) ||
            P === "key" ||
            P === "__self" ||
            P === "__source" ||
            (P === "ref" && R.ref === void 0) ||
            (Q[P] = R[P]);
      var P = arguments.length - 2;
      if (P === 1) Q.children = w;
      else if (1 < P) {
        for (var Jt = Array(P), ot = 0; ot < P; ot++)
          Jt[ot] = arguments[ot + 2];
        Q.children = Jt;
      }
      return Ot(y.type, H, void 0, void 0, at, Q);
    }),
    (W.createContext = function (y) {
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
    (W.createElement = function (y, R, w) {
      var Q,
        H = {},
        at = null;
      if (R != null)
        for (Q in (R.key !== void 0 && (at = "" + R.key), R))
          st.call(R, Q) &&
            Q !== "key" &&
            Q !== "__self" &&
            Q !== "__source" &&
            (H[Q] = R[Q]);
      var P = arguments.length - 2;
      if (P === 1) H.children = w;
      else if (1 < P) {
        for (var Jt = Array(P), ot = 0; ot < P; ot++)
          Jt[ot] = arguments[ot + 2];
        H.children = Jt;
      }
      if (y && y.defaultProps)
        for (Q in ((P = y.defaultProps), P)) H[Q] === void 0 && (H[Q] = P[Q]);
      return Ot(y, at, void 0, void 0, null, H);
    }),
    (W.createRef = function () {
      return { current: null };
    }),
    (W.forwardRef = function (y) {
      return { $$typeof: M, render: y };
    }),
    (W.isValidElement = X),
    (W.lazy = function (y) {
      return { $$typeof: U, _payload: { _status: -1, _result: y }, _init: $ };
    }),
    (W.memo = function (y, R) {
      return { $$typeof: b, type: y, compare: R === void 0 ? null : R };
    }),
    (W.startTransition = function (y) {
      var R = B.T,
        w = {};
      B.T = w;
      try {
        var Q = y(),
          H = B.S;
        H !== null && H(w, Q),
          typeof Q == "object" &&
            Q !== null &&
            typeof Q.then == "function" &&
            Q.then(mt, L);
      } catch (at) {
        L(at);
      } finally {
        B.T = R;
      }
    }),
    (W.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (W.use = function (y) {
      return B.H.use(y);
    }),
    (W.useActionState = function (y, R, w) {
      return B.H.useActionState(y, R, w);
    }),
    (W.useCallback = function (y, R) {
      return B.H.useCallback(y, R);
    }),
    (W.useContext = function (y) {
      return B.H.useContext(y);
    }),
    (W.useDebugValue = function () {}),
    (W.useDeferredValue = function (y, R) {
      return B.H.useDeferredValue(y, R);
    }),
    (W.useEffect = function (y, R) {
      return B.H.useEffect(y, R);
    }),
    (W.useId = function () {
      return B.H.useId();
    }),
    (W.useImperativeHandle = function (y, R, w) {
      return B.H.useImperativeHandle(y, R, w);
    }),
    (W.useInsertionEffect = function (y, R) {
      return B.H.useInsertionEffect(y, R);
    }),
    (W.useLayoutEffect = function (y, R) {
      return B.H.useLayoutEffect(y, R);
    }),
    (W.useMemo = function (y, R) {
      return B.H.useMemo(y, R);
    }),
    (W.useOptimistic = function (y, R) {
      return B.H.useOptimistic(y, R);
    }),
    (W.useReducer = function (y, R, w) {
      return B.H.useReducer(y, R, w);
    }),
    (W.useRef = function (y) {
      return B.H.useRef(y);
    }),
    (W.useState = function (y) {
      return B.H.useState(y);
    }),
    (W.useSyncExternalStore = function (y, R, w) {
      return B.H.useSyncExternalStore(y, R, w);
    }),
    (W.useTransition = function () {
      return B.H.useTransition();
    }),
    (W.version = "19.0.0"),
    W
  );
}
var Bd;
function di() {
  return Bd || ((Bd = 1), (Mf.exports = Vh())), Mf.exports;
}
var Rt = di(),
  Rf = { exports: {} },
  Ga = {},
  Uf = { exports: {} },
  Nf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Kh() {
  return (
    Yd ||
      ((Yd = 1),
      (function (i) {
        function f(N, $) {
          var L = N.length;
          N.push($);
          t: for (; 0 < L; ) {
            var mt = (L - 1) >>> 1,
              y = N[mt];
            if (0 < h(y, $)) (N[mt] = $), (N[L] = y), (L = mt);
            else break t;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function r(N) {
          if (N.length === 0) return null;
          var $ = N[0],
            L = N.pop();
          if (L !== $) {
            N[0] = L;
            t: for (var mt = 0, y = N.length, R = y >>> 1; mt < R; ) {
              var w = 2 * (mt + 1) - 1,
                Q = N[w],
                H = w + 1,
                at = N[H];
              if (0 > h(Q, L))
                H < y && 0 > h(at, Q)
                  ? ((N[mt] = at), (N[H] = L), (mt = H))
                  : ((N[mt] = Q), (N[w] = L), (mt = w));
              else if (H < y && 0 > h(at, L))
                (N[mt] = at), (N[H] = L), (mt = H);
              else break t;
            }
          }
          return $;
        }
        function h(N, $) {
          var L = N.sortIndex - $.sortIndex;
          return L !== 0 ? L : N.id - $.id;
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
          x = null,
          G = 3,
          V = !1,
          F = !1,
          bt = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          dt = typeof clearTimeout == "function" ? clearTimeout : null,
          rt = typeof setImmediate < "u" ? setImmediate : null;
        function k(N) {
          for (var $ = o(b); $ !== null; ) {
            if ($.callback === null) r(b);
            else if ($.startTime <= N)
              r(b), ($.sortIndex = $.expirationTime), f(T, $);
            else break;
            $ = o(b);
          }
        }
        function lt(N) {
          if (((bt = !1), k(N), !F))
            if (o(T) !== null) (F = !0), Be();
            else {
              var $ = o(b);
              $ !== null && Ft(lt, $.startTime - N);
            }
        }
        var B = !1,
          st = -1,
          Ot = 5,
          Et = -1;
        function X() {
          return !(i.unstable_now() - Et < Ot);
        }
        function it() {
          if (B) {
            var N = i.unstable_now();
            Et = N;
            var $ = !0;
            try {
              t: {
                (F = !1), bt && ((bt = !1), dt(st), (st = -1)), (V = !0);
                var L = G;
                try {
                  e: {
                    for (
                      k(N), x = o(T);
                      x !== null && !(x.expirationTime > N && X());

                    ) {
                      var mt = x.callback;
                      if (typeof mt == "function") {
                        (x.callback = null), (G = x.priorityLevel);
                        var y = mt(x.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof y == "function")) {
                          (x.callback = y), k(N), ($ = !0);
                          break e;
                        }
                        x === o(T) && r(T), k(N);
                      } else r(T);
                      x = o(T);
                    }
                    if (x !== null) $ = !0;
                    else {
                      var R = o(b);
                      R !== null && Ft(lt, R.startTime - N), ($ = !1);
                    }
                  }
                  break t;
                } finally {
                  (x = null), (G = L), (V = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? Wt() : (B = !1);
            }
          }
        }
        var Wt;
        if (typeof rt == "function")
          Wt = function () {
            rt(it);
          };
        else if (typeof MessageChannel < "u") {
          var qe = new MessageChannel(),
            Me = qe.port2;
          (qe.port1.onmessage = it),
            (Wt = function () {
              Me.postMessage(null);
            });
        } else
          Wt = function () {
            K(it, 0);
          };
        function Be() {
          B || ((B = !0), Wt());
        }
        function Ft(N, $) {
          st = K(function () {
            N(i.unstable_now());
          }, $);
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
            F || V || ((F = !0), Be());
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ot = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return G;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return o(T);
          }),
          (i.unstable_next = function (N) {
            switch (G) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = G;
            }
            var L = G;
            G = $;
            try {
              return N();
            } finally {
              G = L;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (N, $) {
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
            var L = G;
            G = N;
            try {
              return $();
            } finally {
              G = L;
            }
          }),
          (i.unstable_scheduleCallback = function (N, $, L) {
            var mt = i.unstable_now();
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
                id: U++,
                callback: $,
                priorityLevel: N,
                startTime: L,
                expirationTime: y,
                sortIndex: -1,
              }),
              L > mt
                ? ((N.sortIndex = L),
                  f(b, N),
                  o(T) === null &&
                    N === o(b) &&
                    (bt ? (dt(st), (st = -1)) : (bt = !0), Ft(lt, L - mt)))
                : ((N.sortIndex = y), f(T, N), F || V || ((F = !0), Be())),
              N
            );
          }),
          (i.unstable_shouldYield = X),
          (i.unstable_wrapCallback = function (N) {
            var $ = G;
            return function () {
              var L = G;
              G = $;
              try {
                return N.apply(this, arguments);
              } finally {
                G = L;
              }
            };
          });
      })(Nf)),
    Nf
  );
}
var Gd;
function Jh() {
  return Gd || ((Gd = 1), (Uf.exports = Kh())), Uf.exports;
}
var xf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function kh() {
  if (Xd) return Kt;
  Xd = 1;
  var i = di();
  function f(T) {
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
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(f(522));
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
  function E(T, b, U) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: x == null ? null : "" + x,
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
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Kt.createPortal = function (T, b) {
      var U =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(f(299));
      return E(T, b, null, U);
    }),
    (Kt.flushSync = function (T) {
      var b = z.T,
        U = r.p;
      try {
        if (((z.T = null), (r.p = 2), T)) return T();
      } finally {
        (z.T = b), (r.p = U), r.d.f();
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
        r.d.C(T, b));
    }),
    (Kt.prefetchDNS = function (T) {
      typeof T == "string" && r.d.D(T);
    }),
    (Kt.preinit = function (T, b) {
      if (typeof T == "string" && b && typeof b.as == "string") {
        var U = b.as,
          x = M(U, b.crossOrigin),
          G = typeof b.integrity == "string" ? b.integrity : void 0,
          V = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        U === "style"
          ? r.d.S(T, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: x,
              integrity: G,
              fetchPriority: V,
            })
          : U === "script" &&
            r.d.X(T, {
              crossOrigin: x,
              integrity: G,
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
            r.d.M(T, {
              crossOrigin: U,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && r.d.M(T);
    }),
    (Kt.preload = function (T, b) {
      if (
        typeof T == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var U = b.as,
          x = M(U, b.crossOrigin);
        r.d.L(T, U, {
          crossOrigin: x,
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
          r.d.m(T, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: U,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else r.d.m(T);
    }),
    (Kt.requestFormReset = function (T) {
      r.d.r(T);
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
var Qd;
function $h() {
  if (Qd) return xf.exports;
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
      } catch (f) {
        console.error(f);
      }
  }
  return i(), (xf.exports = kh()), xf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function Wh() {
  if (Zd) return Ga;
  Zd = 1;
  var i = Jh(),
    f = di(),
    o = $h();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var E = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    U = Symbol.for("react.profiler"),
    x = Symbol.for("react.provider"),
    G = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    bt = Symbol.for("react.suspense"),
    K = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    rt = Symbol.for("react.lazy"),
    k = Symbol.for("react.offscreen"),
    lt = Symbol.for("react.memo_cache_sentinel"),
    B = Symbol.iterator;
  function st(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (B && t[B]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Ot = Symbol.for("react.client.reference");
  function Et(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ot ? null : t.displayName || t.name || null;
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
      case K:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return (t.displayName || "Context") + ".Provider";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case dt:
          return (
            (e = t.displayName || null), e !== null ? e : Et(t.type) || "Memo"
          );
        case rt:
          (e = t._payload), (t = t._init);
          try {
            return Et(t(e));
          } catch {}
      }
    return null;
  }
  var X = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    it = Object.assign,
    Wt,
    qe;
  function Me(t) {
    if (Wt === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Wt = (e && e[1]) || ""),
          (qe =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Wt +
      t +
      qe
    );
  }
  var Be = !1;
  function Ft(t, e) {
    if (!t || Be) return "";
    Be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var O = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(O.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(O, []);
                } catch (p) {
                  var _ = p;
                }
                Reflect.construct(t, [], O);
              } else {
                try {
                  O.call();
                } catch (p) {
                  _ = p;
                }
                t.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                _ = p;
              }
              (O = t()) &&
                typeof O.catch == "function" &&
                O.catch(function () {});
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
        s = n[1];
      if (c && s) {
        var d = c.split(`
`),
          m = s.split(`
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
      (Be = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Me(l) : "";
  }
  function N(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Me(t.type);
      case 16:
        return Me("Lazy");
      case 13:
        return Me("Suspense");
      case 19:
        return Me("SuspenseList");
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
  function $(t) {
    try {
      var e = "";
      do (e += N(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function L(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function mt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (L(t) !== t) throw Error(r(188));
  }
  function R(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = L(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, u = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (((u = a.return), u !== null)) {
          l = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === l) return y(a), t;
          if (n === u) return y(a), e;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== u.return) (l = a), (u = n);
      else {
        for (var c = !1, s = a.child; s; ) {
          if (s === l) {
            (c = !0), (l = a), (u = n);
            break;
          }
          if (s === u) {
            (c = !0), (u = a), (l = n);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = n.child; s; ) {
            if (s === l) {
              (c = !0), (l = n), (u = a);
              break;
            }
            if (s === u) {
              (c = !0), (u = n), (l = a);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (l.alternate !== u) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function w(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = w(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var Q = Array.isArray,
    H = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    at = { pending: !1, data: null, method: null, action: null },
    P = [],
    Jt = -1;
  function ot(t) {
    return { current: t };
  }
  function Ut(t) {
    0 > Jt || ((t.current = P[Jt]), (P[Jt] = null), Jt--);
  }
  function _t(t, e) {
    Jt++, (P[Jt] = t.current), (t.current = e);
  }
  var Re = ot(null),
    Qu = ot(null),
    ul = ot(null),
    wa = ot(null);
  function La(t, e) {
    switch ((_t(ul, e), _t(Qu, t), _t(Re, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? rd(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = rd(t)), (e = sd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Ut(Re), _t(Re, e);
  }
  function eu() {
    Ut(Re), Ut(Qu), Ut(ul);
  }
  function gi(t) {
    t.memoizedState !== null && _t(wa, t);
    var e = Re.current,
      l = sd(e, t.type);
    e !== l && (_t(Qu, t), _t(Re, l));
  }
  function Va(t) {
    Qu.current === t && (Ut(Re), Ut(Qu)),
      wa.current === t && (Ut(wa), (Ha._currentValue = at));
  }
  var Si = Object.prototype.hasOwnProperty,
    bi = i.unstable_scheduleCallback,
    _i = i.unstable_cancelCallback,
    E0 = i.unstable_shouldYield,
    T0 = i.unstable_requestPaint,
    Ue = i.unstable_now,
    p0 = i.unstable_getCurrentPriorityLevel,
    Ff = i.unstable_ImmediatePriority,
    Pf = i.unstable_UserBlockingPriority,
    Ka = i.unstable_NormalPriority,
    A0 = i.unstable_LowPriority,
    If = i.unstable_IdlePriority,
    z0 = i.log,
    D0 = i.unstable_setDisableYieldValue,
    Zu = null,
    ee = null;
  function O0(t) {
    if (ee && typeof ee.onCommitFiberRoot == "function")
      try {
        ee.onCommitFiberRoot(Zu, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function al(t) {
    if (
      (typeof z0 == "function" && D0(t),
      ee && typeof ee.setStrictMode == "function")
    )
      try {
        ee.setStrictMode(Zu, t);
      } catch {}
  }
  var le = Math.clz32 ? Math.clz32 : U0,
    M0 = Math.log,
    R0 = Math.LN2;
  function U0(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((M0(t) / R0) | 0)) | 0;
  }
  var Ja = 128,
    ka = 4194304;
  function Rl(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
  function $a(t, e) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      a = t.suspendedLanes,
      n = t.pingedLanes,
      c = t.warmLanes;
    t = t.finishedLanes !== 0;
    var s = l & 134217727;
    return (
      s !== 0
        ? ((l = s & ~a),
          l !== 0
            ? (u = Rl(l))
            : ((n &= s),
              n !== 0
                ? (u = Rl(n))
                : t || ((c = s & ~c), c !== 0 && (u = Rl(c)))))
        : ((s = l & ~a),
          s !== 0
            ? (u = Rl(s))
            : n !== 0
              ? (u = Rl(n))
              : t || ((c = l & ~c), c !== 0 && (u = Rl(c)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & a) === 0 &&
            ((a = u & -u),
            (c = e & -e),
            a >= c || (a === 32 && (c & 4194176) !== 0))
          ? e
          : u
    );
  }
  function wu(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function N0(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
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
        return e + 5e3;
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
  function tr() {
    var t = Ja;
    return (Ja <<= 1), (Ja & 4194176) === 0 && (Ja = 128), t;
  }
  function er() {
    var t = ka;
    return (ka <<= 1), (ka & 62914560) === 0 && (ka = 4194304), t;
  }
  function Ei(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Lu(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function x0(t, e, l, u, a, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var s = t.entanglements,
      d = t.expirationTimes,
      m = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var A = 31 - le(l),
        O = 1 << A;
      (s[A] = 0), (d[A] = -1);
      var _ = m[A];
      if (_ !== null)
        for (m[A] = null, A = 0; A < _.length; A++) {
          var p = _[A];
          p !== null && (p.lane &= -536870913);
        }
      l &= ~O;
    }
    u !== 0 && lr(t, u, 0),
      n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e));
  }
  function lr(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var u = 31 - le(e);
    (t.entangledLanes |= e),
      (t.entanglements[u] = t.entanglements[u] | 1073741824 | (l & 4194218));
  }
  function ur(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var u = 31 - le(l),
        a = 1 << u;
      (a & e) | (t[u] & e) && (t[u] |= e), (l &= ~a);
    }
  }
  function ar(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function nr() {
    var t = H.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Md(t.type));
  }
  function H0(t, e) {
    var l = H.p;
    try {
      return (H.p = t), e();
    } finally {
      H.p = l;
    }
  }
  var nl = Math.random().toString(36).slice(2),
    Lt = "__reactFiber$" + nl,
    Pt = "__reactProps$" + nl,
    lu = "__reactContainer$" + nl,
    Ti = "__reactEvents$" + nl,
    C0 = "__reactListeners$" + nl,
    j0 = "__reactHandles$" + nl,
    ir = "__reactResources$" + nl,
    Vu = "__reactMarker$" + nl;
  function pi(t) {
    delete t[Lt], delete t[Pt], delete t[Ti], delete t[C0], delete t[j0];
  }
  function Ul(t) {
    var e = t[Lt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[lu] || l[Lt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = yd(t); t !== null; ) {
            if ((l = t[Lt])) return l;
            t = yd(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function uu(t) {
    if ((t = t[Lt] || t[lu])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ku(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function au(t) {
    var e = t[ir];
    return (
      e ||
        (e = t[ir] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function qt(t) {
    t[Vu] = !0;
  }
  var cr = new Set(),
    fr = {};
  function Nl(t, e) {
    nu(t, e), nu(t + "Capture", e);
  }
  function nu(t, e) {
    for (fr[t] = e, t = 0; t < e.length; t++) cr.add(e[t]);
  }
  var Ye = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    q0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    rr = {},
    sr = {};
  function B0(t) {
    return Si.call(sr, t)
      ? !0
      : Si.call(rr, t)
        ? !1
        : q0.test(t)
          ? (sr[t] = !0)
          : ((rr[t] = !0), !1);
  }
  function Wa(t, e, l) {
    if (B0(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var u = e.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Fa(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ge(t, e, l, u) {
    if (u === null) t.removeAttribute(l);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + u);
    }
  }
  function oe(t) {
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
  function or(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Y0(t) {
    var e = or(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      u = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var a = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (c) {
            (u = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (c) {
            u = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Pa(t) {
    t._valueTracker || (t._valueTracker = Y0(t));
  }
  function dr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      u = "";
    return (
      t && (u = or(t) ? (t.checked ? "true" : "false") : t.value),
      (t = u),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Ia(t) {
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
  var G0 = /[\n"\\]/g;
  function de(t) {
    return t.replace(G0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ai(t, e, l, u, a, n, c, s) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + oe(e))
          : t.value !== "" + oe(e) && (t.value = "" + oe(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? zi(t, c, oe(e))
        : l != null
          ? zi(t, c, oe(l))
          : u != null && t.removeAttribute("value"),
      a == null && n != null && (t.defaultChecked = !!n),
      a != null &&
        (t.checked = a && typeof a != "function" && typeof a != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + oe(s))
        : t.removeAttribute("name");
  }
  function yr(t, e, l, u, a, n, c, s) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      (l = l != null ? "" + oe(l) : ""),
        (e = e != null ? "" + oe(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (u = u ?? a),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (t.checked = s ? t.checked : !!u),
      (t.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function zi(t, e, l) {
    (e === "number" && Ia(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function iu(t, e, l, u) {
    if (((t = t.options), e)) {
      e = {};
      for (var a = 0; a < l.length; a++) e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        (a = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== a && (t[l].selected = a),
          a && u && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + oe(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          (t[a].selected = !0), u && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function hr(t, e, l) {
    if (
      e != null &&
      ((e = "" + oe(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + oe(l) : "";
  }
  function vr(t, e, l, u) {
    if (e == null) {
      if (u != null) {
        if (l != null) throw Error(r(92));
        if (Q(u)) {
          if (1 < u.length) throw Error(r(93));
          u = u[0];
        }
        l = u;
      }
      l == null && (l = ""), (e = l);
    }
    (l = oe(e)),
      (t.defaultValue = l),
      (u = t.textContent),
      u === l && u !== "" && u !== null && (t.value = u);
  }
  function cu(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var X0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function mr(t, e, l) {
    var u = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? u
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : u
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || X0.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function gr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var u in l)
        !l.hasOwnProperty(u) ||
          (e != null && e.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? t.setProperty(u, "")
            : u === "float"
              ? (t.cssFloat = "")
              : (t[u] = ""));
      for (var a in e)
        (u = e[a]), e.hasOwnProperty(a) && l[a] !== u && mr(t, a, u);
    } else for (var n in e) e.hasOwnProperty(n) && mr(t, n, e[n]);
  }
  function Di(t) {
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
  var Q0 = new Map([
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
    Z0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function tn(t) {
    return Z0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Oi = null;
  function Mi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var fu = null,
    ru = null;
  function Sr(t) {
    var e = uu(t);
    if (e && (t = e.stateNode)) {
      var l = t[Pt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ai(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + de("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var u = l[e];
              if (u !== t && u.form === t.form) {
                var a = u[Pt] || null;
                if (!a) throw Error(r(90));
                Ai(
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
            for (e = 0; e < l.length; e++)
              (u = l[e]), u.form === t.form && dr(u);
          }
          break t;
        case "textarea":
          hr(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && iu(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ri = !1;
  function br(t, e, l) {
    if (Ri) return t(e, l);
    Ri = !0;
    try {
      var u = t(e);
      return u;
    } finally {
      if (
        ((Ri = !1),
        (fu !== null || ru !== null) &&
          (Yn(), fu && ((e = fu), (t = ru), (ru = fu = null), Sr(e), t)))
      )
        for (e = 0; e < t.length; e++) Sr(t[e]);
    }
  }
  function Ju(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var u = l[Pt] || null;
    if (u === null) return null;
    l = u[e];
    t: switch (e) {
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
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var Ui = !1;
  if (Ye)
    try {
      var ku = {};
      Object.defineProperty(ku, "passive", {
        get: function () {
          Ui = !0;
        },
      }),
        window.addEventListener("test", ku, ku),
        window.removeEventListener("test", ku, ku);
    } catch {
      Ui = !1;
    }
  var il = null,
    Ni = null,
    en = null;
  function _r() {
    if (en) return en;
    var t,
      e = Ni,
      l = e.length,
      u,
      a = "value" in il ? il.value : il.textContent,
      n = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++);
    var c = l - t;
    for (u = 1; u <= c && e[l - u] === a[n - u]; u++);
    return (en = a.slice(t, 1 < u ? 1 - u : void 0));
  }
  function ln(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function un() {
    return !0;
  }
  function Er() {
    return !1;
  }
  function It(t) {
    function e(l, u, a, n, c) {
      (this._reactName = l),
        (this._targetInst = a),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(n) : n[s]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? un
          : Er),
        (this.isPropagationStopped = Er),
        this
      );
    }
    return (
      it(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = un));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = un));
        },
        persist: function () {},
        isPersistent: un,
      }),
      e
    );
  }
  var xl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    an = It(xl),
    $u = it({}, xl, { view: 0, detail: 0 }),
    w0 = It($u),
    xi,
    Hi,
    Wu,
    nn = it({}, $u, {
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
      getModifierState: ji,
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
          : (t !== Wu &&
              (Wu && t.type === "mousemove"
                ? ((xi = t.screenX - Wu.screenX), (Hi = t.screenY - Wu.screenY))
                : (Hi = xi = 0),
              (Wu = t)),
            xi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Hi;
      },
    }),
    Tr = It(nn),
    L0 = it({}, nn, { dataTransfer: 0 }),
    V0 = It(L0),
    K0 = it({}, $u, { relatedTarget: 0 }),
    Ci = It(K0),
    J0 = it({}, xl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k0 = It(J0),
    $0 = it({}, xl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    W0 = It($0),
    F0 = it({}, xl, { data: 0 }),
    pr = It(F0),
    P0 = {
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
    I0 = {
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
    ty = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ey(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ty[t])
        ? !!e[t]
        : !1;
  }
  function ji() {
    return ey;
  }
  var ly = it({}, $u, {
      key: function (t) {
        if (t.key) {
          var e = P0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = ln(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? I0[t.keyCode] || "Unidentified"
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
      getModifierState: ji,
      charCode: function (t) {
        return t.type === "keypress" ? ln(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? ln(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    uy = It(ly),
    ay = it({}, nn, {
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
    Ar = It(ay),
    ny = it({}, $u, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ji,
    }),
    iy = It(ny),
    cy = it({}, xl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fy = It(cy),
    ry = it({}, nn, {
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
    sy = It(ry),
    oy = it({}, xl, { newState: 0, oldState: 0 }),
    dy = It(oy),
    yy = [9, 13, 27, 32],
    qi = Ye && "CompositionEvent" in window,
    Fu = null;
  Ye && "documentMode" in document && (Fu = document.documentMode);
  var hy = Ye && "TextEvent" in window && !Fu,
    zr = Ye && (!qi || (Fu && 8 < Fu && 11 >= Fu)),
    Dr = " ",
    Or = !1;
  function Mr(t, e) {
    switch (t) {
      case "keyup":
        return yy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Rr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var su = !1;
  function vy(t, e) {
    switch (t) {
      case "compositionend":
        return Rr(e);
      case "keypress":
        return e.which !== 32 ? null : ((Or = !0), Dr);
      case "textInput":
        return (t = e.data), t === Dr && Or ? null : t;
      default:
        return null;
    }
  }
  function my(t, e) {
    if (su)
      return t === "compositionend" || (!qi && Mr(t, e))
        ? ((t = _r()), (en = Ni = il = null), (su = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return zr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var gy = {
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
  function Ur(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!gy[t.type] : e === "textarea";
  }
  function Nr(t, e, l, u) {
    fu ? (ru ? ru.push(u) : (ru = [u])) : (fu = u),
      (e = wn(e, "onChange")),
      0 < e.length &&
        ((l = new an("onChange", "change", null, l, u)),
        t.push({ event: l, listeners: e }));
  }
  var Pu = null,
    Iu = null;
  function Sy(t) {
    ad(t, 0);
  }
  function cn(t) {
    var e = Ku(t);
    if (dr(e)) return t;
  }
  function xr(t, e) {
    if (t === "change") return e;
  }
  var Hr = !1;
  if (Ye) {
    var Bi;
    if (Ye) {
      var Yi = "oninput" in document;
      if (!Yi) {
        var Cr = document.createElement("div");
        Cr.setAttribute("oninput", "return;"),
          (Yi = typeof Cr.oninput == "function");
      }
      Bi = Yi;
    } else Bi = !1;
    Hr = Bi && (!document.documentMode || 9 < document.documentMode);
  }
  function jr() {
    Pu && (Pu.detachEvent("onpropertychange", qr), (Iu = Pu = null));
  }
  function qr(t) {
    if (t.propertyName === "value" && cn(Iu)) {
      var e = [];
      Nr(e, Iu, t, Mi(t)), br(Sy, e);
    }
  }
  function by(t, e, l) {
    t === "focusin"
      ? (jr(), (Pu = e), (Iu = l), Pu.attachEvent("onpropertychange", qr))
      : t === "focusout" && jr();
  }
  function _y(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return cn(Iu);
  }
  function Ey(t, e) {
    if (t === "click") return cn(e);
  }
  function Ty(t, e) {
    if (t === "input" || t === "change") return cn(e);
  }
  function py(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ue = typeof Object.is == "function" ? Object.is : py;
  function ta(t, e) {
    if (ue(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      u = Object.keys(e);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var a = l[u];
      if (!Si.call(e, a) || !ue(t[a], e[a])) return !1;
    }
    return !0;
  }
  function Br(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yr(t, e) {
    var l = Br(t);
    t = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (((u = t + l.textContent.length), t <= e && u >= e))
          return { node: l, offset: e - t };
        t = u;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Br(l);
    }
  }
  function Gr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Gr(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Xr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ia(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ia(t.document);
    }
    return e;
  }
  function Gi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function Ay(t, e) {
    var l = Xr(e);
    e = t.focusedElem;
    var u = t.selectionRange;
    if (
      l !== e &&
      e &&
      e.ownerDocument &&
      Gr(e.ownerDocument.documentElement, e)
    ) {
      if (u !== null && Gi(e)) {
        if (
          ((t = u.start),
          (l = u.end),
          l === void 0 && (l = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(l, e.value.length));
        else if (
          ((l = ((t = e.ownerDocument || document) && t.defaultView) || window),
          l.getSelection)
        ) {
          l = l.getSelection();
          var a = e.textContent.length,
            n = Math.min(u.start, a);
          (u = u.end === void 0 ? n : Math.min(u.end, a)),
            !l.extend && n > u && ((a = u), (u = n), (n = a)),
            (a = Yr(e, n));
          var c = Yr(e, u);
          a &&
            c &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== a.node ||
              l.anchorOffset !== a.offset ||
              l.focusNode !== c.node ||
              l.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(a.node, a.offset),
            l.removeAllRanges(),
            n > u
              ? (l.addRange(t), l.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), l.addRange(t)));
        }
      }
      for (t = [], l = e; (l = l.parentNode); )
        l.nodeType === 1 &&
          t.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (l = t[e]),
          (l.element.scrollLeft = l.left),
          (l.element.scrollTop = l.top);
    }
  }
  var zy = Ye && "documentMode" in document && 11 >= document.documentMode,
    ou = null,
    Xi = null,
    ea = null,
    Qi = !1;
  function Qr(t, e, l) {
    var u =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Qi ||
      ou == null ||
      ou !== Ia(u) ||
      ((u = ou),
      "selectionStart" in u && Gi(u)
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
      (ea && ta(ea, u)) ||
        ((ea = u),
        (u = wn(Xi, "onSelect")),
        0 < u.length &&
          ((e = new an("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: u }),
          (e.target = ou))));
  }
  function Hl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var du = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd"),
    },
    Zi = {},
    Zr = {};
  Ye &&
    ((Zr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete du.animationend.animation,
      delete du.animationiteration.animation,
      delete du.animationstart.animation),
    "TransitionEvent" in window || delete du.transitionend.transition);
  function Cl(t) {
    if (Zi[t]) return Zi[t];
    if (!du[t]) return t;
    var e = du[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Zr) return (Zi[t] = e[l]);
    return t;
  }
  var wr = Cl("animationend"),
    Lr = Cl("animationiteration"),
    Vr = Cl("animationstart"),
    Dy = Cl("transitionrun"),
    Oy = Cl("transitionstart"),
    My = Cl("transitioncancel"),
    Kr = Cl("transitionend"),
    Jr = new Map(),
    kr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function pe(t, e) {
    Jr.set(t, e), Nl(e, [t]);
  }
  var ye = [],
    yu = 0,
    wi = 0;
  function fn() {
    for (var t = yu, e = (wi = yu = 0); e < t; ) {
      var l = ye[e];
      ye[e++] = null;
      var u = ye[e];
      ye[e++] = null;
      var a = ye[e];
      ye[e++] = null;
      var n = ye[e];
      if (((ye[e++] = null), u !== null && a !== null)) {
        var c = u.pending;
        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
          (u.pending = a);
      }
      n !== 0 && $r(l, a, n);
    }
  }
  function rn(t, e, l, u) {
    (ye[yu++] = t),
      (ye[yu++] = e),
      (ye[yu++] = l),
      (ye[yu++] = u),
      (wi |= u),
      (t.lanes |= u),
      (t = t.alternate),
      t !== null && (t.lanes |= u);
  }
  function Li(t, e, l, u) {
    return rn(t, e, l, u), sn(t);
  }
  function cl(t, e) {
    return rn(t, null, null, e), sn(t);
  }
  function $r(t, e, l) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l);
    for (var a = !1, n = t.return; n !== null; )
      (n.childLanes |= l),
        (u = n.alternate),
        u !== null && (u.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (a = !0)),
        (t = n),
        (n = n.return);
    a &&
      e !== null &&
      t.tag === 3 &&
      ((n = t.stateNode),
      (a = 31 - le(l)),
      (n = n.hiddenUpdates),
      (t = n[a]),
      t === null ? (n[a] = [e]) : t.push(e),
      (e.lane = l | 536870912));
  }
  function sn(t) {
    if (50 < Da) throw ((Da = 0), (Wc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var hu = {},
    Wr = new WeakMap();
  function he(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Wr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: $(e) }), Wr.set(t, e), e);
    }
    return { value: t, source: e, stack: $(e) };
  }
  var vu = [],
    mu = 0,
    on = null,
    dn = 0,
    ve = [],
    me = 0,
    jl = null,
    Xe = 1,
    Qe = "";
  function ql(t, e) {
    (vu[mu++] = dn), (vu[mu++] = on), (on = t), (dn = e);
  }
  function Fr(t, e, l) {
    (ve[me++] = Xe), (ve[me++] = Qe), (ve[me++] = jl), (jl = t);
    var u = Xe;
    t = Qe;
    var a = 32 - le(u) - 1;
    (u &= ~(1 << a)), (l += 1);
    var n = 32 - le(e) + a;
    if (30 < n) {
      var c = a - (a % 5);
      (n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (a -= c),
        (Xe = (1 << (32 - le(e) + a)) | (l << a) | u),
        (Qe = n + t);
    } else (Xe = (1 << n) | (l << a) | u), (Qe = t);
  }
  function Vi(t) {
    t.return !== null && (ql(t, 1), Fr(t, 1, 0));
  }
  function Ki(t) {
    for (; t === on; )
      (on = vu[--mu]), (vu[mu] = null), (dn = vu[--mu]), (vu[mu] = null);
    for (; t === jl; )
      (jl = ve[--me]),
        (ve[me] = null),
        (Qe = ve[--me]),
        (ve[me] = null),
        (Xe = ve[--me]),
        (ve[me] = null);
  }
  var kt = null,
    Xt = null,
    ct = !1,
    Ae = null,
    Ne = !1,
    Ji = Error(r(519));
  function Bl(t) {
    var e = Error(r(418, ""));
    throw (aa(he(e, t)), Ji);
  }
  function Pr(t) {
    var e = t.stateNode,
      l = t.type,
      u = t.memoizedProps;
    switch (((e[Lt] = t), (e[Pt] = u), l)) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ma.length; l++) ut(Ma[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e),
          yr(
            e,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          Pa(e);
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), vr(e, u.value, u.defaultValue, u.children), Pa(e);
    }
    (l = u.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      u.suppressHydrationWarning === !0 ||
      fd(e.textContent, l)
        ? (u.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          u.onScroll != null && ut("scroll", e),
          u.onScrollEnd != null && ut("scrollend", e),
          u.onClick != null && (e.onclick = Ln),
          (e = !0))
        : (e = !1),
      e || Bl(t);
  }
  function Ir(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 3:
        case 27:
          Ne = !0;
          return;
        case 5:
        case 13:
          Ne = !1;
          return;
        default:
          kt = kt.return;
      }
  }
  function la(t) {
    if (t !== kt) return !1;
    if (!ct) return Ir(t), (ct = !0), !1;
    var e = !1,
      l;
    if (
      ((l = t.tag !== 3 && t.tag !== 27) &&
        ((l = t.tag === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || hf(t.type, t.memoizedProps))),
        (l = !l)),
      l && (e = !0),
      e && Xt && Bl(t),
      Ir(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Xt = De(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Xt = null;
      }
    } else Xt = kt ? De(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    (Xt = kt = null), (ct = !1);
  }
  function aa(t) {
    Ae === null ? (Ae = [t]) : Ae.push(t);
  }
  var na = Error(r(460)),
    ts = Error(r(474)),
    ki = { then: function () {} };
  function es(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function yn() {}
  function ls(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(yn, yn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === na ? Error(r(483)) : t);
      default:
        if (typeof e.status == "string") e.then(yn, yn);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (u) {
                if (e.status === "pending") {
                  var a = e;
                  (a.status = "fulfilled"), (a.value = u);
                }
              },
              function (u) {
                if (e.status === "pending") {
                  var a = e;
                  (a.status = "rejected"), (a.reason = u);
                }
              },
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === na ? Error(r(483)) : t);
        }
        throw ((ia = e), na);
    }
  }
  var ia = null;
  function us() {
    if (ia === null) throw Error(r(459));
    var t = ia;
    return (ia = null), t;
  }
  var gu = null,
    ca = 0;
  function hn(t) {
    var e = ca;
    return (ca += 1), gu === null && (gu = []), ls(gu, t, e);
  }
  function fa(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function vn(t, e) {
    throw e.$$typeof === E
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function as(t) {
    var e = t._init;
    return e(t._payload);
  }
  function ns(t) {
    function e(g, v) {
      if (t) {
        var S = g.deletions;
        S === null ? ((g.deletions = [v]), (g.flags |= 16)) : S.push(v);
      }
    }
    function l(g, v) {
      if (!t) return null;
      for (; v !== null; ) e(g, v), (v = v.sibling);
      return null;
    }
    function u(g) {
      for (var v = new Map(); g !== null; )
        g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
      return v;
    }
    function a(g, v) {
      return (g = bl(g, v)), (g.index = 0), (g.sibling = null), g;
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
    function c(g) {
      return t && g.alternate === null && (g.flags |= 33554434), g;
    }
    function s(g, v, S, D) {
      return v === null || v.tag !== 6
        ? ((v = Zc(S, g.mode, D)), (v.return = g), v)
        : ((v = a(v, S)), (v.return = g), v);
    }
    function d(g, v, S, D) {
      var C = S.type;
      return C === T
        ? A(g, v, S.props.children, D, S.key)
        : v !== null &&
            (v.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === rt &&
                as(C) === v.type))
          ? ((v = a(v, S.props)), fa(v, S), (v.return = g), v)
          : ((v = Hn(S.type, S.key, S.props, null, g.mode, D)),
            fa(v, S),
            (v.return = g),
            v);
    }
    function m(g, v, S, D) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== S.containerInfo ||
        v.stateNode.implementation !== S.implementation
        ? ((v = wc(S, g.mode, D)), (v.return = g), v)
        : ((v = a(v, S.children || [])), (v.return = g), v);
    }
    function A(g, v, S, D, C) {
      return v === null || v.tag !== 7
        ? ((v = Jl(S, g.mode, D, C)), (v.return = g), v)
        : ((v = a(v, S)), (v.return = g), v);
    }
    function O(g, v, S) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = Zc("" + v, g.mode, S)), (v.return = g), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case z:
            return (
              (S = Hn(v.type, v.key, v.props, null, g.mode, S)),
              fa(S, v),
              (S.return = g),
              S
            );
          case M:
            return (v = wc(v, g.mode, S)), (v.return = g), v;
          case rt:
            var D = v._init;
            return (v = D(v._payload)), O(g, v, S);
        }
        if (Q(v) || st(v))
          return (v = Jl(v, g.mode, S, null)), (v.return = g), v;
        if (typeof v.then == "function") return O(g, hn(v), S);
        if (v.$$typeof === V) return O(g, Un(g, v), S);
        vn(g, v);
      }
      return null;
    }
    function _(g, v, S, D) {
      var C = v !== null ? v.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return C !== null ? null : s(g, v, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case z:
            return S.key === C ? d(g, v, S, D) : null;
          case M:
            return S.key === C ? m(g, v, S, D) : null;
          case rt:
            return (C = S._init), (S = C(S._payload)), _(g, v, S, D);
        }
        if (Q(S) || st(S)) return C !== null ? null : A(g, v, S, D, null);
        if (typeof S.then == "function") return _(g, v, hn(S), D);
        if (S.$$typeof === V) return _(g, v, Un(g, S), D);
        vn(g, S);
      }
      return null;
    }
    function p(g, v, S, D, C) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (g = g.get(S) || null), s(v, g, "" + D, C);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case z:
            return (
              (g = g.get(D.key === null ? S : D.key) || null), d(v, g, D, C)
            );
          case M:
            return (
              (g = g.get(D.key === null ? S : D.key) || null), m(v, g, D, C)
            );
          case rt:
            var tt = D._init;
            return (D = tt(D._payload)), p(g, v, S, D, C);
        }
        if (Q(D) || st(D)) return (g = g.get(S) || null), A(v, g, D, C, null);
        if (typeof D.then == "function") return p(g, v, S, hn(D), C);
        if (D.$$typeof === V) return p(g, v, S, Un(v, D), C);
        vn(v, D);
      }
      return null;
    }
    function j(g, v, S, D) {
      for (
        var C = null, tt = null, Y = v, Z = (v = 0), Gt = null;
        Y !== null && Z < S.length;
        Z++
      ) {
        Y.index > Z ? ((Gt = Y), (Y = null)) : (Gt = Y.sibling);
        var ft = _(g, Y, S[Z], D);
        if (ft === null) {
          Y === null && (Y = Gt);
          break;
        }
        t && Y && ft.alternate === null && e(g, Y),
          (v = n(ft, v, Z)),
          tt === null ? (C = ft) : (tt.sibling = ft),
          (tt = ft),
          (Y = Gt);
      }
      if (Z === S.length) return l(g, Y), ct && ql(g, Z), C;
      if (Y === null) {
        for (; Z < S.length; Z++)
          (Y = O(g, S[Z], D)),
            Y !== null &&
              ((v = n(Y, v, Z)),
              tt === null ? (C = Y) : (tt.sibling = Y),
              (tt = Y));
        return ct && ql(g, Z), C;
      }
      for (Y = u(Y); Z < S.length; Z++)
        (Gt = p(Y, g, Z, S[Z], D)),
          Gt !== null &&
            (t &&
              Gt.alternate !== null &&
              Y.delete(Gt.key === null ? Z : Gt.key),
            (v = n(Gt, v, Z)),
            tt === null ? (C = Gt) : (tt.sibling = Gt),
            (tt = Gt));
      return (
        t &&
          Y.forEach(function (Dl) {
            return e(g, Dl);
          }),
        ct && ql(g, Z),
        C
      );
    }
    function J(g, v, S, D) {
      if (S == null) throw Error(r(151));
      for (
        var C = null, tt = null, Y = v, Z = (v = 0), Gt = null, ft = S.next();
        Y !== null && !ft.done;
        Z++, ft = S.next()
      ) {
        Y.index > Z ? ((Gt = Y), (Y = null)) : (Gt = Y.sibling);
        var Dl = _(g, Y, ft.value, D);
        if (Dl === null) {
          Y === null && (Y = Gt);
          break;
        }
        t && Y && Dl.alternate === null && e(g, Y),
          (v = n(Dl, v, Z)),
          tt === null ? (C = Dl) : (tt.sibling = Dl),
          (tt = Dl),
          (Y = Gt);
      }
      if (ft.done) return l(g, Y), ct && ql(g, Z), C;
      if (Y === null) {
        for (; !ft.done; Z++, ft = S.next())
          (ft = O(g, ft.value, D)),
            ft !== null &&
              ((v = n(ft, v, Z)),
              tt === null ? (C = ft) : (tt.sibling = ft),
              (tt = ft));
        return ct && ql(g, Z), C;
      }
      for (Y = u(Y); !ft.done; Z++, ft = S.next())
        (ft = p(Y, g, Z, ft.value, D)),
          ft !== null &&
            (t &&
              ft.alternate !== null &&
              Y.delete(ft.key === null ? Z : ft.key),
            (v = n(ft, v, Z)),
            tt === null ? (C = ft) : (tt.sibling = ft),
            (tt = ft));
      return (
        t &&
          Y.forEach(function (Zh) {
            return e(g, Zh);
          }),
        ct && ql(g, Z),
        C
      );
    }
    function Dt(g, v, S, D) {
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
              for (var C = S.key; v !== null; ) {
                if (v.key === C) {
                  if (((C = S.type), C === T)) {
                    if (v.tag === 7) {
                      l(g, v.sibling),
                        (D = a(v, S.props.children)),
                        (D.return = g),
                        (g = D);
                      break t;
                    }
                  } else if (
                    v.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === rt &&
                      as(C) === v.type)
                  ) {
                    l(g, v.sibling),
                      (D = a(v, S.props)),
                      fa(D, S),
                      (D.return = g),
                      (g = D);
                    break t;
                  }
                  l(g, v);
                  break;
                } else e(g, v);
                v = v.sibling;
              }
              S.type === T
                ? ((D = Jl(S.props.children, g.mode, D, S.key)),
                  (D.return = g),
                  (g = D))
                : ((D = Hn(S.type, S.key, S.props, null, g.mode, D)),
                  fa(D, S),
                  (D.return = g),
                  (g = D));
            }
            return c(g);
          case M:
            t: {
              for (C = S.key; v !== null; ) {
                if (v.key === C)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === S.containerInfo &&
                    v.stateNode.implementation === S.implementation
                  ) {
                    l(g, v.sibling),
                      (D = a(v, S.children || [])),
                      (D.return = g),
                      (g = D);
                    break t;
                  } else {
                    l(g, v);
                    break;
                  }
                else e(g, v);
                v = v.sibling;
              }
              (D = wc(S, g.mode, D)), (D.return = g), (g = D);
            }
            return c(g);
          case rt:
            return (C = S._init), (S = C(S._payload)), Dt(g, v, S, D);
        }
        if (Q(S)) return j(g, v, S, D);
        if (st(S)) {
          if (((C = st(S)), typeof C != "function")) throw Error(r(150));
          return (S = C.call(S)), J(g, v, S, D);
        }
        if (typeof S.then == "function") return Dt(g, v, hn(S), D);
        if (S.$$typeof === V) return Dt(g, v, Un(g, S), D);
        vn(g, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          v !== null && v.tag === 6
            ? (l(g, v.sibling), (D = a(v, S)), (D.return = g), (g = D))
            : (l(g, v), (D = Zc(S, g.mode, D)), (D.return = g), (g = D)),
          c(g))
        : l(g, v);
    }
    return function (g, v, S, D) {
      try {
        ca = 0;
        var C = Dt(g, v, S, D);
        return (gu = null), C;
      } catch (Y) {
        if (Y === na) throw Y;
        var tt = _e(29, Y, null, g.mode);
        return (tt.lanes = D), (tt.return = g), tt;
      } finally {
      }
    };
  }
  var Yl = ns(!0),
    is = ns(!1),
    Su = ot(null),
    mn = ot(0);
  function cs(t, e) {
    (t = Pe), _t(mn, t), _t(Su, e), (Pe = t | e.baseLanes);
  }
  function $i() {
    _t(mn, Pe), _t(Su, Su.current);
  }
  function Wi() {
    (Pe = mn.current), Ut(Su), Ut(mn);
  }
  var ge = ot(null),
    xe = null;
  function fl(t) {
    var e = t.alternate;
    _t(Ct, Ct.current & 1),
      _t(ge, t),
      xe === null &&
        (e === null || Su.current !== null || e.memoizedState !== null) &&
        (xe = t);
  }
  function fs(t) {
    if (t.tag === 22) {
      if ((_t(Ct, Ct.current), _t(ge, t), xe === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (xe = t);
      }
    } else rl();
  }
  function rl() {
    _t(Ct, Ct.current), _t(ge, ge.current);
  }
  function Ze(t) {
    Ut(ge), xe === t && (xe = null), Ut(Ct);
  }
  var Ct = ot(0);
  function gn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Ry =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, u) {
                  t.push(u);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    Uy = i.unstable_scheduleCallback,
    Ny = i.unstable_NormalPriority,
    jt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Fi() {
    return { controller: new Ry(), data: new Map(), refCount: 0 };
  }
  function ra(t) {
    t.refCount--,
      t.refCount === 0 &&
        Uy(Ny, function () {
          t.controller.abort();
        });
  }
  var sa = null,
    Pi = 0,
    bu = 0,
    _u = null;
  function xy(t, e) {
    if (sa === null) {
      var l = (sa = []);
      (Pi = 0),
        (bu = af()),
        (_u = {
          status: "pending",
          value: void 0,
          then: function (u) {
            l.push(u);
          },
        });
    }
    return Pi++, e.then(rs, rs), e;
  }
  function rs() {
    if (--Pi === 0 && sa !== null) {
      _u !== null && (_u.status = "fulfilled");
      var t = sa;
      (sa = null), (bu = 0), (_u = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Hy(t, e) {
    var l = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          l.push(a);
        },
      };
    return (
      t.then(
        function () {
          (u.status = "fulfilled"), (u.value = e);
          for (var a = 0; a < l.length; a++) (0, l[a])(e);
        },
        function (a) {
          for (u.status = "rejected", u.reason = a, a = 0; a < l.length; a++)
            (0, l[a])(void 0);
        },
      ),
      u
    );
  }
  var ss = X.S;
  X.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      xy(t, e),
      ss !== null && ss(t, e);
  };
  var Gl = ot(null);
  function Ii() {
    var t = Gl.current;
    return t !== null ? t : gt.pooledCache;
  }
  function Sn(t, e) {
    e === null ? _t(Gl, Gl.current) : _t(Gl, e.pool);
  }
  function os() {
    var t = Ii();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var sl = 0,
    I = null,
    yt = null,
    Nt = null,
    bn = !1,
    Eu = !1,
    Xl = !1,
    _n = 0,
    oa = 0,
    Tu = null,
    Cy = 0;
  function Mt() {
    throw Error(r(321));
  }
  function tc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ue(t[l], e[l])) return !1;
    return !0;
  }
  function ec(t, e, l, u, a, n) {
    return (
      (sl = n),
      (I = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (X.H = t === null || t.memoizedState === null ? Ql : ol),
      (Xl = !1),
      (n = l(u, a)),
      (Xl = !1),
      Eu && (n = ys(e, l, u, a)),
      ds(t),
      n
    );
  }
  function ds(t) {
    X.H = He;
    var e = yt !== null && yt.next !== null;
    if (((sl = 0), (Nt = yt = I = null), (bn = !1), (oa = 0), (Tu = null), e))
      throw Error(r(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && Rn(t) && (Bt = !0));
  }
  function ys(t, e, l, u) {
    I = t;
    var a = 0;
    do {
      if ((Eu && (Tu = null), (oa = 0), (Eu = !1), 25 <= a))
        throw Error(r(301));
      if (((a += 1), (Nt = yt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (X.H = Zl), (n = e(l, u));
    } while (Eu);
    return n;
  }
  function jy() {
    var t = X.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? da(e) : e),
      (t = t.useState()[0]),
      (yt !== null ? yt.memoizedState : null) !== t && (I.flags |= 1024),
      e
    );
  }
  function lc() {
    var t = _n !== 0;
    return (_n = 0), t;
  }
  function uc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function ac(t) {
    if (bn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      bn = !1;
    }
    (sl = 0), (Nt = yt = I = null), (Eu = !1), (oa = _n = 0), (Tu = null);
  }
  function te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Nt === null ? (I.memoizedState = Nt = t) : (Nt = Nt.next = t), Nt;
  }
  function xt() {
    if (yt === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = yt.next;
    var e = Nt === null ? I.memoizedState : Nt.next;
    if (e !== null) (Nt = e), (yt = t);
    else {
      if (t === null)
        throw I.alternate === null ? Error(r(467)) : Error(r(310));
      (yt = t),
        (t = {
          memoizedState: yt.memoizedState,
          baseState: yt.baseState,
          baseQueue: yt.baseQueue,
          queue: yt.queue,
          next: null,
        }),
        Nt === null ? (I.memoizedState = Nt = t) : (Nt = Nt.next = t);
    }
    return Nt;
  }
  var En;
  En = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function da(t) {
    var e = oa;
    return (
      (oa += 1),
      Tu === null && (Tu = []),
      (t = ls(Tu, t, e)),
      (e = I),
      (Nt === null ? e.memoizedState : Nt.next) === null &&
        ((e = e.alternate),
        (X.H = e === null || e.memoizedState === null ? Ql : ol)),
      t
    );
  }
  function Tn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return da(t);
      if (t.$$typeof === V) return Vt(t);
    }
    throw Error(r(438, String(t)));
  }
  function nc(t) {
    var e = null,
      l = I.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var u = I.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (e = {
              data: u.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = En()), (I.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), u = 0; u < t; u++) l[u] = lt;
    return e.index++, l;
  }
  function we(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function pn(t) {
    var e = xt();
    return ic(e, yt, t);
  }
  function ic(t, e, l) {
    var u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = t.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var c = a.next;
        (a.next = n.next), (n.next = c);
      }
      (e.baseQueue = a = n), (u.pending = null);
    }
    if (((n = t.baseState), a === null)) t.memoizedState = n;
    else {
      e = a.next;
      var s = (c = null),
        d = null,
        m = e,
        A = !1;
      do {
        var O = m.lane & -536870913;
        if (O !== m.lane ? (nt & O) === O : (sl & O) === O) {
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
              O === bu && (A = !0);
          else if ((sl & _) === _) {
            (m = m.next), _ === bu && (A = !0);
            continue;
          } else
            (O = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              d === null ? ((s = d = O), (c = n)) : (d = d.next = O),
              (I.lanes |= _),
              (_l |= _);
          (O = m.action),
            Xl && l(n, O),
            (n = m.hasEagerState ? m.eagerState : l(n, O));
        } else
          (_ = {
            lane: O,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            d === null ? ((s = d = _), (c = n)) : (d = d.next = _),
            (I.lanes |= O),
            (_l |= O);
        m = m.next;
      } while (m !== null && m !== e);
      if (
        (d === null ? (c = n) : (d.next = s),
        !ue(n, t.memoizedState) && ((Bt = !0), A && ((l = _u), l !== null)))
      )
        throw l;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = d),
        (u.lastRenderedState = n);
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function cc(t) {
    var e = xt(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var u = l.dispatch,
      a = l.pending,
      n = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var c = (a = a.next);
      do (n = t(n, c.action)), (c = c.next);
      while (c !== a);
      ue(n, e.memoizedState) || (Bt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n);
    }
    return [n, u];
  }
  function hs(t, e, l) {
    var u = I,
      a = xt(),
      n = ct;
    if (n) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var c = !ue((yt || a).memoizedState, l);
    if (
      (c && ((a.memoizedState = l), (Bt = !0)),
      (a = a.queue),
      sc(gs.bind(null, u, a, t), [t]),
      a.getSnapshot !== e || c || (Nt !== null && Nt.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        pu(9, ms.bind(null, u, a, l, e), { destroy: void 0 }, null),
        gt === null)
      )
        throw Error(r(349));
      n || (sl & 60) !== 0 || vs(u, e, l);
    }
    return l;
  }
  function vs(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = I.updateQueue),
      e === null
        ? ((e = En()), (I.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function ms(t, e, l, u) {
    (e.value = l), (e.getSnapshot = u), Ss(e) && bs(t);
  }
  function gs(t, e, l) {
    return l(function () {
      Ss(e) && bs(t);
    });
  }
  function Ss(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ue(t, l);
    } catch {
      return !0;
    }
  }
  function bs(t) {
    var e = cl(t, 2);
    e !== null && $t(e, t, 2);
  }
  function fc(t) {
    var e = te();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Xl)) {
        al(!0);
        try {
          l();
        } finally {
          al(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: t,
      }),
      e
    );
  }
  function _s(t, e, l, u) {
    return (t.baseState = l), ic(t, yt, typeof u == "function" ? u : we);
  }
  function qy(t, e, l, u, a) {
    if (Dn(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
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
      X.T !== null ? l(!0) : (n.isTransition = !1),
        u(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), Es(e, n))
          : ((n.next = l.next), (e.pending = l.next = n));
    }
  }
  function Es(t, e) {
    var l = e.action,
      u = e.payload,
      a = t.state;
    if (e.isTransition) {
      var n = X.T,
        c = {};
      X.T = c;
      try {
        var s = l(a, u),
          d = X.S;
        d !== null && d(c, s), Ts(t, e, s);
      } catch (m) {
        rc(t, e, m);
      } finally {
        X.T = n;
      }
    } else
      try {
        (n = l(a, u)), Ts(t, e, n);
      } catch (m) {
        rc(t, e, m);
      }
  }
  function Ts(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (u) {
            ps(t, e, u);
          },
          function (u) {
            return rc(t, e, u);
          },
        )
      : ps(t, e, l);
  }
  function ps(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      As(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Es(t, l)));
  }
  function rc(t, e, l) {
    var u = t.pending;
    if (((t.pending = null), u !== null)) {
      u = u.next;
      do (e.status = "rejected"), (e.reason = l), As(e), (e = e.next);
      while (e !== u);
    }
    t.action = null;
  }
  function As(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zs(t, e) {
    return e;
  }
  function Ds(t, e) {
    if (ct) {
      var l = gt.formState;
      if (l !== null) {
        t: {
          var u = I;
          if (ct) {
            if (Xt) {
              e: {
                for (var a = Xt, n = Ne; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break e;
                  }
                  if (((a = De(a.nextSibling)), a === null)) {
                    a = null;
                    break e;
                  }
                }
                (n = a.data), (a = n === "F!" || n === "F" ? a : null);
              }
              if (a) {
                (Xt = De(a.nextSibling)), (u = a.data === "F!");
                break t;
              }
            }
            Bl(u);
          }
          u = !1;
        }
        u && (e = l[0]);
      }
    }
    return (
      (l = te()),
      (l.memoizedState = l.baseState = e),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zs,
        lastRenderedState: e,
      }),
      (l.queue = u),
      (l = Ls.bind(null, I, u)),
      (u.dispatch = l),
      (u = fc(!1)),
      (n = vc.bind(null, I, !1, u.queue)),
      (u = te()),
      (a = { state: e, dispatch: null, action: t, pending: null }),
      (u.queue = a),
      (l = qy.bind(null, I, a, n, l)),
      (a.dispatch = l),
      (u.memoizedState = t),
      [e, l, !1]
    );
  }
  function Os(t) {
    var e = xt();
    return Ms(e, yt, t);
  }
  function Ms(t, e, l) {
    (e = ic(t, e, zs)[0]),
      (t = pn(we)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? da(e)
          : e);
    var u = xt(),
      a = u.queue,
      n = a.dispatch;
    return (
      l !== u.memoizedState &&
        ((I.flags |= 2048),
        pu(9, By.bind(null, a, l), { destroy: void 0 }, null)),
      [e, n, t]
    );
  }
  function By(t, e) {
    t.action = e;
  }
  function Rs(t) {
    var e = xt(),
      l = yt;
    if (l !== null) return Ms(e, l, t);
    xt(), (e = e.memoizedState), (l = xt());
    var u = l.queue.dispatch;
    return (l.memoizedState = t), [e, u, !1];
  }
  function pu(t, e, l, u) {
    return (
      (t = { tag: t, create: e, inst: l, deps: u, next: null }),
      (e = I.updateQueue),
      e === null && ((e = En()), (I.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((u = l.next), (l.next = t), (t.next = u), (e.lastEffect = t)),
      t
    );
  }
  function Us() {
    return xt().memoizedState;
  }
  function An(t, e, l, u) {
    var a = te();
    (I.flags |= t),
      (a.memoizedState = pu(
        1 | e,
        l,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function zn(t, e, l, u) {
    var a = xt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    yt !== null && u !== null && tc(u, yt.memoizedState.deps)
      ? (a.memoizedState = pu(e, l, n, u))
      : ((I.flags |= t), (a.memoizedState = pu(1 | e, l, n, u)));
  }
  function Ns(t, e) {
    An(8390656, 8, t, e);
  }
  function sc(t, e) {
    zn(2048, 8, t, e);
  }
  function xs(t, e) {
    return zn(4, 2, t, e);
  }
  function Hs(t, e) {
    return zn(4, 4, t, e);
  }
  function Cs(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function js(t, e, l) {
    (l = l != null ? l.concat([t]) : null), zn(4, 4, Cs.bind(null, e, t), l);
  }
  function oc() {}
  function qs(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var u = l.memoizedState;
    return e !== null && tc(e, u[1]) ? u[0] : ((l.memoizedState = [t, e]), t);
  }
  function Bs(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var u = l.memoizedState;
    if (e !== null && tc(e, u[1])) return u[0];
    if (((u = t()), Xl)) {
      al(!0);
      try {
        t();
      } finally {
        al(!1);
      }
    }
    return (l.memoizedState = [u, e]), u;
  }
  function dc(t, e, l) {
    return l === void 0 || (sl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Xo()), (I.lanes |= t), (_l |= t), l);
  }
  function Ys(t, e, l, u) {
    return ue(l, e)
      ? l
      : Su.current !== null
        ? ((t = dc(t, l, u)), ue(t, e) || (Bt = !0), t)
        : (sl & 42) === 0
          ? ((Bt = !0), (t.memoizedState = l))
          : ((t = Xo()), (I.lanes |= t), (_l |= t), e);
  }
  function Gs(t, e, l, u, a) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var c = X.T,
      s = {};
    (X.T = s), vc(t, !1, e, l);
    try {
      var d = a(),
        m = X.S;
      if (
        (m !== null && m(s, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var A = Hy(d, u);
        ya(t, e, A, ce(t));
      } else ya(t, e, u, ce(t));
    } catch (O) {
      ya(t, e, { then: function () {}, status: "rejected", reason: O }, ce());
    } finally {
      (H.p = n), (X.T = c);
    }
  }
  function Yy() {}
  function yc(t, e, l, u) {
    if (t.tag !== 5) throw Error(r(476));
    var a = Xs(t).queue;
    Gs(
      t,
      a,
      e,
      at,
      l === null
        ? Yy
        : function () {
            return Qs(t), l(u);
          },
    );
  }
  function Xs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: at,
      baseState: at,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: at,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: we,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Qs(t) {
    var e = Xs(t).next.queue;
    ya(t, e, {}, ce());
  }
  function hc() {
    return Vt(Ha);
  }
  function Zs() {
    return xt().memoizedState;
  }
  function ws() {
    return xt().memoizedState;
  }
  function Gy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ce();
          t = hl(l);
          var u = vl(e, t, l);
          u !== null && ($t(u, e, l), ma(u, e, l)),
            (e = { cache: Fi() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Xy(t, e, l) {
    var u = ce();
    (l = {
      lane: u,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Dn(t)
        ? Vs(e, l)
        : ((l = Li(t, e, l, u)), l !== null && ($t(l, t, u), Ks(l, e, u)));
  }
  function Ls(t, e, l) {
    var u = ce();
    ya(t, e, l, u);
  }
  function ya(t, e, l, u) {
    var a = {
      lane: u,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Dn(t)) Vs(e, a);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var c = e.lastRenderedState,
            s = n(c, l);
          if (((a.hasEagerState = !0), (a.eagerState = s), ue(s, c)))
            return rn(t, e, a, 0), gt === null && fn(), !1;
        } catch {
        } finally {
        }
      if (((l = Li(t, e, a, u)), l !== null))
        return $t(l, t, u), Ks(l, e, u), !0;
    }
    return !1;
  }
  function vc(t, e, l, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: af(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Dn(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = Li(t, l, u, 2)), e !== null && $t(e, t, 2);
  }
  function Dn(t) {
    var e = t.alternate;
    return t === I || (e !== null && e === I);
  }
  function Vs(t, e) {
    Eu = bn = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Ks(t, e, l) {
    if ((l & 4194176) !== 0) {
      var u = e.lanes;
      (u &= t.pendingLanes), (l |= u), (e.lanes = l), ur(t, l);
    }
  }
  var He = {
    readContext: Vt,
    use: Tn,
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
  (He.useCacheRefresh = Mt),
    (He.useMemoCache = Mt),
    (He.useHostTransitionStatus = Mt),
    (He.useFormState = Mt),
    (He.useActionState = Mt),
    (He.useOptimistic = Mt);
  var Ql = {
    readContext: Vt,
    use: Tn,
    useCallback: function (t, e) {
      return (te().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Vt,
    useEffect: Ns,
    useImperativeHandle: function (t, e, l) {
      (l = l != null ? l.concat([t]) : null),
        An(4194308, 4, Cs.bind(null, e, t), l);
    },
    useLayoutEffect: function (t, e) {
      return An(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      An(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var l = te();
      e = e === void 0 ? null : e;
      var u = t();
      if (Xl) {
        al(!0);
        try {
          t();
        } finally {
          al(!1);
        }
      }
      return (l.memoizedState = [u, e]), u;
    },
    useReducer: function (t, e, l) {
      var u = te();
      if (l !== void 0) {
        var a = l(e);
        if (Xl) {
          al(!0);
          try {
            l(e);
          } finally {
            al(!1);
          }
        }
      } else a = e;
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
        (t = t.dispatch = Xy.bind(null, I, t)),
        [u.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = te();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = fc(t);
      var e = t.queue,
        l = Ls.bind(null, I, e);
      return (e.dispatch = l), [t.memoizedState, l];
    },
    useDebugValue: oc,
    useDeferredValue: function (t, e) {
      var l = te();
      return dc(l, t, e);
    },
    useTransition: function () {
      var t = fc(!1);
      return (
        (t = Gs.bind(null, I, t.queue, !0, !1)),
        (te().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, l) {
      var u = I,
        a = te();
      if (ct) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else {
        if (((l = e()), gt === null)) throw Error(r(349));
        (nt & 60) !== 0 || vs(u, e, l);
      }
      a.memoizedState = l;
      var n = { value: l, getSnapshot: e };
      return (
        (a.queue = n),
        Ns(gs.bind(null, u, n, t), [t]),
        (u.flags |= 2048),
        pu(9, ms.bind(null, u, n, l, e), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var t = te(),
        e = gt.identifierPrefix;
      if (ct) {
        var l = Qe,
          u = Xe;
        (l = (u & ~(1 << (32 - le(u) - 1))).toString(32) + l),
          (e = ":" + e + "R" + l),
          (l = _n++),
          0 < l && (e += "H" + l.toString(32)),
          (e += ":");
      } else (l = Cy++), (e = ":" + e + "r" + l.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (te().memoizedState = Gy.bind(null, I));
    },
  };
  (Ql.useMemoCache = nc),
    (Ql.useHostTransitionStatus = hc),
    (Ql.useFormState = Ds),
    (Ql.useActionState = Ds),
    (Ql.useOptimistic = function (t) {
      var e = te();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = l), (e = vc.bind(null, I, !0, l)), (l.dispatch = e), [t, e]
      );
    });
  var ol = {
    readContext: Vt,
    use: Tn,
    useCallback: qs,
    useContext: Vt,
    useEffect: sc,
    useImperativeHandle: js,
    useInsertionEffect: xs,
    useLayoutEffect: Hs,
    useMemo: Bs,
    useReducer: pn,
    useRef: Us,
    useState: function () {
      return pn(we);
    },
    useDebugValue: oc,
    useDeferredValue: function (t, e) {
      var l = xt();
      return Ys(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = pn(we)[0],
        e = xt().memoizedState;
      return [typeof t == "boolean" ? t : da(t), e];
    },
    useSyncExternalStore: hs,
    useId: Zs,
  };
  (ol.useCacheRefresh = ws),
    (ol.useMemoCache = nc),
    (ol.useHostTransitionStatus = hc),
    (ol.useFormState = Os),
    (ol.useActionState = Os),
    (ol.useOptimistic = function (t, e) {
      var l = xt();
      return _s(l, yt, t, e);
    });
  var Zl = {
    readContext: Vt,
    use: Tn,
    useCallback: qs,
    useContext: Vt,
    useEffect: sc,
    useImperativeHandle: js,
    useInsertionEffect: xs,
    useLayoutEffect: Hs,
    useMemo: Bs,
    useReducer: cc,
    useRef: Us,
    useState: function () {
      return cc(we);
    },
    useDebugValue: oc,
    useDeferredValue: function (t, e) {
      var l = xt();
      return yt === null ? dc(l, t, e) : Ys(l, yt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = cc(we)[0],
        e = xt().memoizedState;
      return [typeof t == "boolean" ? t : da(t), e];
    },
    useSyncExternalStore: hs,
    useId: Zs,
  };
  (Zl.useCacheRefresh = ws),
    (Zl.useMemoCache = nc),
    (Zl.useHostTransitionStatus = hc),
    (Zl.useFormState = Rs),
    (Zl.useActionState = Rs),
    (Zl.useOptimistic = function (t, e) {
      var l = xt();
      return yt !== null
        ? _s(l, yt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    });
  function mc(t, e, l, u) {
    (e = t.memoizedState),
      (l = l(u, e)),
      (l = l == null ? e : it({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var gc = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? L(t) === t : !1;
    },
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var u = ce(),
        a = hl(u);
      (a.payload = e),
        l != null && (a.callback = l),
        (e = vl(t, a, u)),
        e !== null && ($t(e, t, u), ma(e, t, u));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var u = ce(),
        a = hl(u);
      (a.tag = 1),
        (a.payload = e),
        l != null && (a.callback = l),
        (e = vl(t, a, u)),
        e !== null && ($t(e, t, u), ma(e, t, u));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ce(),
        u = hl(l);
      (u.tag = 2),
        e != null && (u.callback = e),
        (e = vl(t, u, l)),
        e !== null && ($t(e, t, l), ma(e, t, l));
    },
  };
  function Js(t, e, l, u, a, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(u, n, c)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ta(l, u) || !ta(a, n)
          : !0
    );
  }
  function ks(t, e, l, u) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, u),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, u),
      e.state !== t && gc.enqueueReplaceState(e, e.state, null);
  }
  function wl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var u in e) u !== "ref" && (l[u] = e[u]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = it({}, l));
      for (var a in t) l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  var On =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function $s(t) {
    On(t);
  }
  function Ws(t) {
    console.error(t);
  }
  function Fs(t) {
    On(t);
  }
  function Mn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ps(t, e, l) {
    try {
      var u = t.onCaughtError;
      u(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Sc(t, e, l) {
    return (
      (l = hl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Mn(t, e);
      }),
      l
    );
  }
  function Is(t) {
    return (t = hl(t)), (t.tag = 3), t;
  }
  function to(t, e, l, u) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      (t.payload = function () {
        return a(n);
      }),
        (t.callback = function () {
          Ps(e, l, u);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        Ps(e, l, u),
          typeof a != "function" &&
            (El === null ? (El = new Set([this])) : El.add(this));
        var s = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Qy(t, e, l, u, a) {
    if (
      ((l.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && va(e, l, a, !0),
        (l = ge.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              xe === null ? Ic() : l.alternate === null && zt === 0 && (zt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              u === ki
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([u])) : e.add(u),
                  ef(t, u, a)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              u === ki
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([u])) : l.add(u)),
                  ef(t, u, a)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return ef(t, u, a), Ic(), !1;
    }
    if (ct)
      return (
        (e = ge.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = a),
            u !== Ji && ((t = Error(r(422), { cause: u })), aa(he(t, l))))
          : (u !== Ji && ((e = Error(r(423), { cause: u })), aa(he(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (u = he(u, l)),
            (a = Sc(t.stateNode, u, a)),
            Hc(t, a),
            zt !== 4 && (zt = 2)),
        !1
      );
    var n = Error(r(520), { cause: u });
    if (
      ((n = he(n, l)),
      Aa === null ? (Aa = [n]) : Aa.push(n),
      zt !== 4 && (zt = 2),
      e === null)
    )
      return !0;
    (u = he(u, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = a & -a),
            (l.lanes |= t),
            (t = Sc(l.stateNode, u, t)),
            Hc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (El === null || !El.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (a &= -a),
              (l.lanes |= a),
              (a = Is(a)),
              to(a, t, l, u),
              Hc(l, a),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var eo = Error(r(461)),
    Bt = !1;
  function Qt(t, e, l, u) {
    e.child = t === null ? is(e, null, l, u) : Yl(e, t.child, l, u);
  }
  function lo(t, e, l, u, a) {
    l = l.render;
    var n = e.ref;
    if ("ref" in u) {
      var c = {};
      for (var s in u) s !== "ref" && (c[s] = u[s]);
    } else c = u;
    return (
      Vl(e),
      (u = ec(t, e, l, c, n, a)),
      (s = lc()),
      t !== null && !Bt
        ? (uc(t, e, a), Le(t, e, a))
        : (ct && s && Vi(e), (e.flags |= 1), Qt(t, e, u, a), e.child)
    );
  }
  function uo(t, e, l, u, a) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" &&
        !Qc(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = n), ao(t, e, n, u, a))
        : ((t = Hn(l.type, null, u, e, e.mode, a)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !Oc(t, a))) {
      var c = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ta), l(c, u) && t.ref === e.ref)
      )
        return Le(t, e, a);
    }
    return (
      (e.flags |= 1),
      (t = bl(n, u)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ao(t, e, l, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (ta(n, u) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = u = n), Oc(t, a)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return (e.lanes = t.lanes), Le(t, e, a);
    }
    return bc(t, e, l, u, a);
  }
  function no(t, e, l) {
    var u = e.pendingProps,
      a = u.children,
      n = (e.stateNode._pendingVisibility & 2) !== 0,
      c = t !== null ? t.memoizedState : null;
    if ((ha(t, e), u.mode === "hidden" || n)) {
      if ((e.flags & 128) !== 0) {
        if (((u = c !== null ? c.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          e.childLanes = n & ~u;
        } else (e.childLanes = 0), (e.child = null);
        return io(t, e, u, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Sn(e, c !== null ? c.cachePool : null),
          c !== null ? cs(e, c) : $i(),
          fs(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          io(t, e, c !== null ? c.baseLanes | l : l, l)
        );
    } else
      c !== null
        ? (Sn(e, c.cachePool), cs(e, c), rl(), (e.memoizedState = null))
        : (t !== null && Sn(e, null), $i(), rl());
    return Qt(t, e, a, l), e.child;
  }
  function io(t, e, l, u) {
    var a = Ii();
    return (
      (a = a === null ? null : { parent: jt._currentValue, pool: a }),
      (e.memoizedState = { baseLanes: l, cachePool: a }),
      t !== null && Sn(e, null),
      $i(),
      fs(e),
      t !== null && va(t, e, u, !0),
      null
    );
  }
  function ha(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 2097664);
    }
  }
  function bc(t, e, l, u, a) {
    return (
      Vl(e),
      (l = ec(t, e, l, u, void 0, a)),
      (u = lc()),
      t !== null && !Bt
        ? (uc(t, e, a), Le(t, e, a))
        : (ct && u && Vi(e), (e.flags |= 1), Qt(t, e, l, a), e.child)
    );
  }
  function co(t, e, l, u, a, n) {
    return (
      Vl(e),
      (e.updateQueue = null),
      (l = ys(e, u, l, a)),
      ds(t),
      (u = lc()),
      t !== null && !Bt
        ? (uc(t, e, n), Le(t, e, n))
        : (ct && u && Vi(e), (e.flags |= 1), Qt(t, e, l, n), e.child)
    );
  }
  function fo(t, e, l, u, a) {
    if ((Vl(e), e.stateNode === null)) {
      var n = hu,
        c = l.contextType;
      typeof c == "object" && c !== null && (n = Vt(c)),
        (n = new l(u, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = gc),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = u),
        (n.state = e.memoizedState),
        (n.refs = {}),
        Nc(e),
        (c = l.contextType),
        (n.context = typeof c == "object" && c !== null ? Vt(c) : hu),
        (n.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (mc(e, l, c, u), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && gc.enqueueReplaceState(n, n.state, null),
          Sa(e, u, n, a),
          ga(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (u = !0);
    } else if (t === null) {
      n = e.stateNode;
      var s = e.memoizedProps,
        d = wl(l, s);
      n.props = d;
      var m = n.context,
        A = l.contextType;
      (c = hu), typeof A == "object" && A !== null && (c = Vt(A));
      var O = l.getDerivedStateFromProps;
      (A =
        typeof O == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        A ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((s || m !== c) && ks(e, n, u, c)),
        (yl = !1);
      var _ = e.memoizedState;
      (n.state = _),
        Sa(e, u, n, a),
        ga(),
        (m = e.memoizedState),
        s || _ !== m || yl
          ? (typeof O == "function" && (mc(e, l, O, u), (m = e.memoizedState)),
            (d = yl || Js(e, l, d, u, _, m, c))
              ? (A ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = u),
                (e.memoizedState = m)),
            (n.props = u),
            (n.state = m),
            (n.context = c),
            (u = d))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            (u = !1));
    } else {
      (n = e.stateNode),
        xc(t, e),
        (c = e.memoizedProps),
        (A = wl(l, c)),
        (n.props = A),
        (O = e.pendingProps),
        (_ = n.context),
        (m = l.contextType),
        (d = hu),
        typeof m == "object" && m !== null && (d = Vt(m)),
        (s = l.getDerivedStateFromProps),
        (m =
          typeof s == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== O || _ !== d) && ks(e, n, u, d)),
        (yl = !1),
        (_ = e.memoizedState),
        (n.state = _),
        Sa(e, u, n, a),
        ga();
      var p = e.memoizedState;
      c !== O ||
      _ !== p ||
      yl ||
      (t !== null && t.dependencies !== null && Rn(t.dependencies))
        ? (typeof s == "function" && (mc(e, l, s, u), (p = e.memoizedState)),
          (A =
            yl ||
            Js(e, l, A, u, _, p, d) ||
            (t !== null && t.dependencies !== null && Rn(t.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, p, d),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, p, d)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = u),
              (e.memoizedState = p)),
          (n.props = u),
          (n.state = p),
          (n.context = d),
          (u = A))
        : (typeof n.componentDidUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      ha(t, e),
      (u = (e.flags & 128) !== 0),
      n || u
        ? ((n = e.stateNode),
          (l =
            u && typeof l.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (e.flags |= 1),
          t !== null && u
            ? ((e.child = Yl(e, t.child, null, a)),
              (e.child = Yl(e, null, l, a)))
            : Qt(t, e, l, a),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Le(t, e, a)),
      t
    );
  }
  function ro(t, e, l, u) {
    return ua(), (e.flags |= 256), Qt(t, e, l, u), e.child;
  }
  var _c = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ec(t) {
    return { baseLanes: t, cachePool: os() };
  }
  function Tc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Ee), t;
  }
  function so(t, e, l) {
    var u = e.pendingProps,
      a = !1,
      n = (e.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      c && ((a = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if ((a ? fl(e) : rl(), ct)) {
          var s = Xt,
            d;
          if ((d = s)) {
            t: {
              for (d = s, s = Ne; d.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break t;
                }
                if (((d = De(d.nextSibling)), d === null)) {
                  s = null;
                  break t;
                }
              }
              s = d;
            }
            s !== null
              ? ((e.memoizedState = {
                  dehydrated: s,
                  treeContext: jl !== null ? { id: Xe, overflow: Qe } : null,
                  retryLane: 536870912,
                }),
                (d = _e(18, null, null, 0)),
                (d.stateNode = s),
                (d.return = e),
                (e.child = d),
                (kt = e),
                (Xt = null),
                (d = !0))
              : (d = !1);
          }
          d || Bl(e);
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return s.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        Ze(e);
      }
      return (
        (s = u.children),
        (u = u.fallback),
        a
          ? (rl(),
            (a = e.mode),
            (s = Ac({ mode: "hidden", children: s }, a)),
            (u = Jl(u, a, l, null)),
            (s.return = e),
            (u.return = e),
            (s.sibling = u),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = Ec(l)),
            (a.childLanes = Tc(t, c, l)),
            (e.memoizedState = _c),
            u)
          : (fl(e), pc(e, s))
      );
    }
    if (
      ((d = t.memoizedState), d !== null && ((s = d.dehydrated), s !== null))
    ) {
      if (n)
        e.flags & 256
          ? (fl(e), (e.flags &= -257), (e = zc(t, e, l)))
          : e.memoizedState !== null
            ? (rl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (rl(),
              (a = u.fallback),
              (s = e.mode),
              (u = Ac({ mode: "visible", children: u.children }, s)),
              (a = Jl(a, s, l, null)),
              (a.flags |= 2),
              (u.return = e),
              (a.return = e),
              (u.sibling = a),
              (e.child = u),
              Yl(e, t.child, null, l),
              (u = e.child),
              (u.memoizedState = Ec(l)),
              (u.childLanes = Tc(t, c, l)),
              (e.memoizedState = _c),
              (e = a));
      else if ((fl(e), s.data === "$!")) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (u = Error(r(419))),
          (u.stack = ""),
          (u.digest = c),
          aa({ value: u, source: null, stack: null }),
          (e = zc(t, e, l));
      } else if (
        (Bt || va(t, e, l, !1), (c = (l & t.childLanes) !== 0), Bt || c)
      ) {
        if (((c = gt), c !== null)) {
          if (((u = l & -l), (u & 42) !== 0)) u = 1;
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
            ((u = (u & (c.suspendedLanes | l)) !== 0 ? 0 : u),
            u !== 0 && u !== d.retryLane)
          )
            throw ((d.retryLane = u), cl(t, u), $t(c, t, u), eo);
        }
        s.data === "$?" || Ic(), (e = zc(t, e, l));
      } else
        s.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = lh.bind(null, t)),
            (s._reactRetry = e),
            (e = null))
          : ((t = d.treeContext),
            (Xt = De(s.nextSibling)),
            (kt = e),
            (ct = !0),
            (Ae = null),
            (Ne = !1),
            t !== null &&
              ((ve[me++] = Xe),
              (ve[me++] = Qe),
              (ve[me++] = jl),
              (Xe = t.id),
              (Qe = t.overflow),
              (jl = e)),
            (e = pc(e, u.children)),
            (e.flags |= 4096));
      return e;
    }
    return a
      ? (rl(),
        (a = u.fallback),
        (s = e.mode),
        (d = t.child),
        (m = d.sibling),
        (u = bl(d, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = d.subtreeFlags & 31457280),
        m !== null ? (a = bl(m, a)) : ((a = Jl(a, s, l, null)), (a.flags |= 2)),
        (a.return = e),
        (u.return = e),
        (u.sibling = a),
        (e.child = u),
        (u = a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = Ec(l))
          : ((d = s.cachePool),
            d !== null
              ? ((m = jt._currentValue),
                (d = d.parent !== m ? { parent: m, pool: m } : d))
              : (d = os()),
            (s = { baseLanes: s.baseLanes | l, cachePool: d })),
        (a.memoizedState = s),
        (a.childLanes = Tc(t, c, l)),
        (e.memoizedState = _c),
        u)
      : (fl(e),
        (l = t.child),
        (t = l.sibling),
        (l = bl(l, { mode: "visible", children: u.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function pc(t, e) {
    return (
      (e = Ac({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ac(t, e) {
    return Bo(t, e, 0, null);
  }
  function zc(t, e, l) {
    return (
      Yl(e, t.child, null, l),
      (t = pc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function oo(t, e, l) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e), Rc(t.return, e, l);
  }
  function Dc(t, e, l, u, a) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: l,
          tailMode: a,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = l),
        (n.tailMode = a));
  }
  function yo(t, e, l) {
    var u = e.pendingProps,
      a = u.revealOrder,
      n = u.tail;
    if ((Qt(t, e, u.children, l), (u = Ct.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && oo(t, l, e);
          else if (t.tag === 19) oo(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      u &= 1;
    }
    switch ((_t(Ct, u), a)) {
      case "forwards":
        for (l = e.child, a = null; l !== null; )
          (t = l.alternate),
            t !== null && gn(t) === null && (a = l),
            (l = l.sibling);
        (l = a),
          l === null
            ? ((a = e.child), (e.child = null))
            : ((a = l.sibling), (l.sibling = null)),
          Dc(e, !1, a, l, n);
        break;
      case "backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && gn(t) === null)) {
            e.child = a;
            break;
          }
          (t = a.sibling), (a.sibling = l), (l = a), (a = t);
        }
        Dc(e, !0, l, null, n);
        break;
      case "together":
        Dc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Le(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (_l |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((va(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = bl(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = bl(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Oc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Rn(t)));
  }
  function Zy(t, e, l) {
    switch (e.tag) {
      case 3:
        La(e, e.stateNode.containerInfo),
          dl(e, jt, t.memoizedState.cache),
          ua();
        break;
      case 27:
      case 5:
        gi(e);
        break;
      case 4:
        La(e, e.stateNode.containerInfo);
        break;
      case 10:
        dl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var u = e.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (fl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? so(t, e, l)
              : (fl(e), (t = Le(t, e, l)), t !== null ? t.sibling : null);
        fl(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (
          ((u = (l & e.childLanes) !== 0),
          u || (va(t, e, l, !1), (u = (l & e.childLanes) !== 0)),
          a)
        ) {
          if (u) return yo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((a = e.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          _t(Ct, Ct.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), no(t, e, l);
      case 24:
        dl(e, jt, t.memoizedState.cache);
    }
    return Le(t, e, l);
  }
  function ho(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!Oc(t, l) && (e.flags & 128) === 0) return (Bt = !1), Zy(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
    else (Bt = !1), ct && (e.flags & 1048576) !== 0 && Fr(e, dn, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var u = e.elementType,
            a = u._init;
          if (((u = a(u._payload)), (e.type = u), typeof u == "function"))
            Qc(u)
              ? ((t = wl(u, t)), (e.tag = 1), (e = fo(null, e, u, t, l)))
              : ((e.tag = 0), (e = bc(null, e, u, t, l)));
          else {
            if (u != null) {
              if (((a = u.$$typeof), a === F)) {
                (e.tag = 11), (e = lo(null, e, u, t, l));
                break t;
              } else if (a === dt) {
                (e.tag = 14), (e = uo(null, e, u, t, l));
                break t;
              }
            }
            throw ((e = Et(u) || u), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return bc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (u = e.type), (a = wl(u, e.pendingProps)), fo(t, e, u, a, l);
      case 3:
        t: {
          if ((La(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          var n = e.pendingProps;
          (a = e.memoizedState), (u = a.element), xc(t, e), Sa(e, n, null, l);
          var c = e.memoizedState;
          if (
            ((n = c.cache),
            dl(e, jt, n),
            n !== a.cache && Uc(e, [jt], l, !0),
            ga(),
            (n = c.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: n, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = a),
              (e.memoizedState = a),
              e.flags & 256)
            ) {
              e = ro(t, e, n, l);
              break t;
            } else if (n !== u) {
              (u = he(Error(r(424)), e)), aa(u), (e = ro(t, e, n, l));
              break t;
            } else
              for (
                Xt = De(e.stateNode.containerInfo.firstChild),
                  kt = e,
                  ct = !0,
                  Ae = null,
                  Ne = !0,
                  l = is(e, null, n, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((ua(), n === u)) {
              e = Le(t, e, l);
              break t;
            }
            Qt(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ha(t, e),
          t === null
            ? (l = gd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (u = Vn(ul.current).createElement(l)),
                (u[Lt] = e),
                (u[Pt] = t),
                Zt(u, l, t),
                qt(u),
                (e.stateNode = u))
            : (e.memoizedState = gd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          gi(e),
          t === null &&
            ct &&
            ((u = e.stateNode = hd(e.type, e.pendingProps, ul.current)),
            (kt = e),
            (Ne = !0),
            (Xt = De(u.firstChild))),
          (u = e.pendingProps.children),
          t !== null || ct ? Qt(t, e, u, l) : (e.child = Yl(e, null, u, l)),
          ha(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((a = u = Xt) &&
              ((u = Sh(u, e.type, e.pendingProps, Ne)),
              u !== null
                ? ((e.stateNode = u),
                  (kt = e),
                  (Xt = De(u.firstChild)),
                  (Ne = !1),
                  (a = !0))
                : (a = !1)),
            a || Bl(e)),
          gi(e),
          (a = e.type),
          (n = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (u = n.children),
          hf(a, n) ? (u = null) : c !== null && hf(a, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((a = ec(t, e, jy, null, null, l)), (Ha._currentValue = a)),
          ha(t, e),
          Qt(t, e, u, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = Xt) &&
              ((l = bh(l, e.pendingProps, Ne)),
              l !== null
                ? ((e.stateNode = l), (kt = e), (Xt = null), (t = !0))
                : (t = !1)),
            t || Bl(e)),
          null
        );
      case 13:
        return so(t, e, l);
      case 4:
        return (
          La(e, e.stateNode.containerInfo),
          (u = e.pendingProps),
          t === null ? (e.child = Yl(e, null, u, l)) : Qt(t, e, u, l),
          e.child
        );
      case 11:
        return lo(t, e, e.type, e.pendingProps, l);
      case 7:
        return Qt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Qt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (u = e.pendingProps),
          dl(e, e.type, u.value),
          Qt(t, e, u.children, l),
          e.child
        );
      case 9:
        return (
          (a = e.type._context),
          (u = e.pendingProps.children),
          Vl(e),
          (a = Vt(a)),
          (u = u(a)),
          (e.flags |= 1),
          Qt(t, e, u, l),
          e.child
        );
      case 14:
        return uo(t, e, e.type, e.pendingProps, l);
      case 15:
        return ao(t, e, e.type, e.pendingProps, l);
      case 19:
        return yo(t, e, l);
      case 22:
        return no(t, e, l);
      case 24:
        return (
          Vl(e),
          (u = Vt(jt)),
          t === null
            ? ((a = Ii()),
              a === null &&
                ((a = gt),
                (n = Fi()),
                (a.pooledCache = n),
                n.refCount++,
                n !== null && (a.pooledCacheLanes |= l),
                (a = n)),
              (e.memoizedState = { parent: u, cache: a }),
              Nc(e),
              dl(e, jt, a))
            : ((t.lanes & l) !== 0 && (xc(t, e), Sa(e, null, null, l), ga()),
              (a = t.memoizedState),
              (n = e.memoizedState),
              a.parent !== u
                ? ((a = { parent: u, cache: u }),
                  (e.memoizedState = a),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = a),
                  dl(e, jt, u))
                : ((u = n.cache),
                  dl(e, jt, u),
                  u !== a.cache && Uc(e, [jt], l, !0))),
          Qt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  var Mc = ot(null),
    Ll = null,
    Ve = null;
  function dl(t, e, l) {
    _t(Mc, e._currentValue), (e._currentValue = l);
  }
  function Ke(t) {
    (t._currentValue = Mc.current), Ut(Mc);
  }
  function Rc(t, e, l) {
    for (; t !== null; ) {
      var u = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), u !== null && (u.childLanes |= e))
          : u !== null && (u.childLanes & e) !== e && (u.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Uc(t, e, l, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var c = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var s = n;
          n = a;
          for (var d = 0; d < e.length; d++)
            if (s.context === e[d]) {
              (n.lanes |= l),
                (s = n.alternate),
                s !== null && (s.lanes |= l),
                Rc(n.return, l, t),
                u || (c = null);
              break t;
            }
          n = s.next;
        }
      } else if (a.tag === 18) {
        if (((c = a.return), c === null)) throw Error(r(341));
        (c.lanes |= l),
          (n = c.alternate),
          n !== null && (n.lanes |= l),
          Rc(c, l, t),
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
  function va(t, e, l, u) {
    t = null;
    for (var a = e, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(r(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = a.type;
          ue(a.pendingProps.value, c.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (a === wa.current) {
        if (((c = a.alternate), c === null)) throw Error(r(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (t !== null ? t.push(Ha) : (t = [Ha]));
      }
      a = a.return;
    }
    t !== null && Uc(e, t, l, u), (e.flags |= 262144);
  }
  function Rn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Vl(t) {
    (Ll = t),
      (Ve = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return vo(Ll, t);
  }
  function Un(t, e) {
    return Ll === null && Vl(t), vo(t, e);
  }
  function vo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ve === null)) {
      if (t === null) throw Error(r(308));
      (Ve = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ve = Ve.next = e;
    return l;
  }
  var yl = !1;
  function Nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function hl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(t, e, l) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (pt & 2) !== 0)) {
      var a = u.pending;
      return (
        a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
        (u.pending = e),
        (e = sn(t)),
        $r(t, null, l),
        e
      );
    }
    return rn(t, u, e, l), sn(t);
  }
  function ma(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194176) !== 0))
    ) {
      var u = e.lanes;
      (u &= t.pendingLanes), (l |= u), (e.lanes = l), ur(t, l);
    }
  }
  function Hc(t, e) {
    var l = t.updateQueue,
      u = t.alternate;
    if (u !== null && ((u = u.updateQueue), l === u)) {
      var a = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          n === null ? (a = n = c) : (n = n.next = c), (l = l.next);
        } while (l !== null);
        n === null ? (a = n = e) : (n = n.next = e);
      } else a = n = e;
      (l = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Cc = !1;
  function ga() {
    if (Cc) {
      var t = _u;
      if (t !== null) throw t;
    }
  }
  function Sa(t, e, l, u) {
    Cc = !1;
    var a = t.updateQueue;
    yl = !1;
    var n = a.firstBaseUpdate,
      c = a.lastBaseUpdate,
      s = a.shared.pending;
    if (s !== null) {
      a.shared.pending = null;
      var d = s,
        m = d.next;
      (d.next = null), c === null ? (n = m) : (c.next = m), (c = d);
      var A = t.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (s = A.lastBaseUpdate),
        s !== c &&
          (s === null ? (A.firstBaseUpdate = m) : (s.next = m),
          (A.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var O = a.baseState;
      (c = 0), (A = m = d = null), (s = n);
      do {
        var _ = s.lane & -536870913,
          p = _ !== s.lane;
        if (p ? (nt & _) === _ : (u & _) === _) {
          _ !== 0 && _ === bu && (Cc = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var j = t,
              J = s;
            _ = e;
            var Dt = l;
            switch (J.tag) {
              case 1:
                if (((j = J.payload), typeof j == "function")) {
                  O = j.call(Dt, O, _);
                  break t;
                }
                O = j;
                break t;
              case 3:
                j.flags = (j.flags & -65537) | 128;
              case 0:
                if (
                  ((j = J.payload),
                  (_ = typeof j == "function" ? j.call(Dt, O, _) : j),
                  _ == null)
                )
                  break t;
                O = it({}, O, _);
                break t;
              case 2:
                yl = !0;
            }
          }
          (_ = s.callback),
            _ !== null &&
              ((t.flags |= 64),
              p && (t.flags |= 8192),
              (p = a.callbacks),
              p === null ? (a.callbacks = [_]) : p.push(_));
        } else
          (p = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            A === null ? ((m = A = p), (d = O)) : (A = A.next = p),
            (c |= _);
        if (((s = s.next), s === null)) {
          if (((s = a.shared.pending), s === null)) break;
          (p = s),
            (s = p.next),
            (p.next = null),
            (a.lastBaseUpdate = p),
            (a.shared.pending = null);
        }
      } while (!0);
      A === null && (d = O),
        (a.baseState = d),
        (a.firstBaseUpdate = m),
        (a.lastBaseUpdate = A),
        n === null && (a.shared.lanes = 0),
        (_l |= c),
        (t.lanes = c),
        (t.memoizedState = O);
    }
  }
  function mo(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function go(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) mo(l[t], e);
  }
  function ba(t, e) {
    try {
      var l = e.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            u = void 0;
            var n = l.create,
              c = l.inst;
            (u = n()), (c.destroy = u);
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (s) {
      vt(e, e.return, s);
    }
  }
  function ml(t, e, l) {
    try {
      var u = e.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var c = u.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (a = e);
              var d = l;
              try {
                s();
              } catch (m) {
                vt(a, d, m);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (m) {
      vt(e, e.return, m);
    }
  }
  function So(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        go(e, l);
      } catch (u) {
        vt(t, t.return, u);
      }
    }
  }
  function bo(t, e, l) {
    (l.props = wl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (u) {
      vt(t, e, u);
    }
  }
  function Kl(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
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
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      vt(t, e, n);
    }
  }
  function ae(t, e) {
    var l = t.ref,
      u = t.refCleanup;
    if (l !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          vt(t, e, a);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          vt(t, e, a);
        }
      else l.current = null;
  }
  function _o(t) {
    var e = t.type,
      l = t.memoizedProps,
      u = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && u.focus();
          break t;
        case "img":
          l.src ? (u.src = l.src) : l.srcSet && (u.srcset = l.srcSet);
      }
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function Eo(t, e, l) {
    try {
      var u = t.stateNode;
      yh(u, t.type, l, e), (u[Pt] = e);
    } catch (a) {
      vt(t, t.return, a);
    }
  }
  function To(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function jc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || To(t.return)) return null;
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
  function qc(t, e, l) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode),
        e
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(t, e)
            : l.insertBefore(t, e)
          : (l.nodeType === 8
              ? ((e = l.parentNode), e.insertBefore(t, l))
              : ((e = l), e.appendChild(t)),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Ln));
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (qc(t, e, l), t = t.sibling; t !== null; )
        qc(t, e, l), (t = t.sibling);
  }
  function Nn(t, e, l) {
    var u = t.tag;
    if (u === 5 || u === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (u !== 4 && u !== 27 && ((t = t.child), t !== null))
      for (Nn(t, e, l), t = t.sibling; t !== null; )
        Nn(t, e, l), (t = t.sibling);
  }
  var Je = !1,
    At = !1,
    Bc = !1,
    po = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null,
    Ao = !1;
  function wy(t, e) {
    if (((t = t.containerInfo), (df = Fn), (t = Xr(t)), Gi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var a = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, n.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              s = -1,
              d = -1,
              m = 0,
              A = 0,
              O = t,
              _ = null;
            e: for (;;) {
              for (
                var p;
                O !== l || (a !== 0 && O.nodeType !== 3) || (s = c + a),
                  O !== n || (u !== 0 && O.nodeType !== 3) || (d = c + u),
                  O.nodeType === 3 && (c += O.nodeValue.length),
                  (p = O.firstChild) !== null;

              )
                (_ = O), (O = p);
              for (;;) {
                if (O === t) break e;
                if (
                  (_ === l && ++m === a && (s = c),
                  _ === n && ++A === u && (d = c),
                  (p = O.nextSibling) !== null)
                )
                  break;
                (O = _), (_ = O.parentNode);
              }
              O = p;
            }
            l = s === -1 || d === -1 ? null : { start: s, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      yf = { focusedElem: t, selectionRange: l }, Fn = !1, Yt = e;
      Yt !== null;

    )
      if (
        ((e = Yt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Yt = t);
      else
        for (; Yt !== null; ) {
          switch (((e = Yt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (l = e),
                  (a = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = l.stateNode);
                try {
                  var j = wl(l.type, a, l.elementType === l.type);
                  (t = u.getSnapshotBeforeUpdate(j, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = t);
                } catch (J) {
                  vt(l, l.return, J);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  gf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gf(t);
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
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Yt = t);
            break;
          }
          Yt = e.return;
        }
    return (j = Ao), (Ao = !1), j;
  }
  function zo(t, e, l) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $e(t, l), u & 4 && ba(5, l);
        break;
      case 1:
        if (($e(t, l), u & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (s) {
              vt(l, l.return, s);
            }
          else {
            var a = wl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              vt(l, l.return, s);
            }
          }
        u & 64 && So(l), u & 512 && Kl(l, l.return);
        break;
      case 3:
        if (($e(t, l), u & 64 && ((u = l.updateQueue), u !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            go(u, t);
          } catch (s) {
            vt(l, l.return, s);
          }
        }
        break;
      case 26:
        $e(t, l), u & 512 && Kl(l, l.return);
        break;
      case 27:
      case 5:
        $e(t, l), e === null && u & 4 && _o(l), u & 512 && Kl(l, l.return);
        break;
      case 12:
        $e(t, l);
        break;
      case 13:
        $e(t, l), u & 4 && Mo(t, l);
        break;
      case 22:
        if (((a = l.memoizedState !== null || Je), !a)) {
          e = (e !== null && e.memoizedState !== null) || At;
          var n = Je,
            c = At;
          (Je = a),
            (At = e) && !c ? gl(t, l, (l.subtreeFlags & 8772) !== 0) : $e(t, l),
            (Je = n),
            (At = c);
        }
        u & 512 &&
          (l.memoizedProps.mode === "manual"
            ? Kl(l, l.return)
            : ae(l, l.return));
        break;
      default:
        $e(t, l);
    }
  }
  function Do(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Do(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && pi(e)),
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
    ne = !1;
  function ke(t, e, l) {
    for (l = l.child; l !== null; ) Oo(t, e, l), (l = l.sibling);
  }
  function Oo(t, e, l) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(Zu, l);
      } catch {}
    switch (l.tag) {
      case 26:
        At || ae(l, e),
          ke(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        At || ae(l, e);
        var u = Ht,
          a = ne;
        for (
          Ht = l.stateNode, ke(t, e, l), l = l.stateNode, e = l.attributes;
          e.length;

        )
          l.removeAttributeNode(e[0]);
        pi(l), (Ht = u), (ne = a);
        break;
      case 5:
        At || ae(l, e);
      case 6:
        a = Ht;
        var n = ne;
        if (((Ht = null), ke(t, e, l), (Ht = a), (ne = n), Ht !== null))
          if (ne)
            try {
              (t = Ht),
                (u = l.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(u)
                  : t.removeChild(u);
            } catch (c) {
              vt(l, e, c);
            }
          else
            try {
              Ht.removeChild(l.stateNode);
            } catch (c) {
              vt(l, e, c);
            }
        break;
      case 18:
        Ht !== null &&
          (ne
            ? ((e = Ht),
              (l = l.stateNode),
              e.nodeType === 8
                ? mf(e.parentNode, l)
                : e.nodeType === 1 && mf(e, l),
              Ba(e))
            : mf(Ht, l.stateNode));
        break;
      case 4:
        (u = Ht),
          (a = ne),
          (Ht = l.stateNode.containerInfo),
          (ne = !0),
          ke(t, e, l),
          (Ht = u),
          (ne = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || ml(2, l, e), At || ml(4, l, e), ke(t, e, l);
        break;
      case 1:
        At ||
          (ae(l, e),
          (u = l.stateNode),
          typeof u.componentWillUnmount == "function" && bo(l, e, u)),
          ke(t, e, l);
        break;
      case 21:
        ke(t, e, l);
        break;
      case 22:
        At || ae(l, e),
          (At = (u = At) || l.memoizedState !== null),
          ke(t, e, l),
          (At = u);
        break;
      default:
        ke(t, e, l);
    }
  }
  function Mo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ba(t);
      } catch (l) {
        vt(e, e.return, l);
      }
  }
  function Ly(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new po()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new po()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Yc(t, e) {
    var l = Ly(t);
    e.forEach(function (u) {
      var a = uh.bind(null, t, u);
      l.has(u) || (l.add(u), u.then(a, a));
    });
  }
  function Se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var a = l[u],
          n = t,
          c = e,
          s = c;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
            case 5:
              (Ht = s.stateNode), (ne = !1);
              break t;
            case 3:
              (Ht = s.stateNode.containerInfo), (ne = !0);
              break t;
            case 4:
              (Ht = s.stateNode.containerInfo), (ne = !0);
              break t;
          }
          s = s.return;
        }
        if (Ht === null) throw Error(r(160));
        Oo(n, c, a),
          (Ht = null),
          (ne = !1),
          (n = a.alternate),
          n !== null && (n.return = null),
          (a.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Ro(e, t), (e = e.sibling);
  }
  var ze = null;
  function Ro(t, e) {
    var l = t.alternate,
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Se(e, t),
          be(t),
          u & 4 && (ml(3, t, t.return), ba(3, t), ml(5, t, t.return));
        break;
      case 1:
        Se(e, t),
          be(t),
          u & 512 && (At || l === null || ae(l, l.return)),
          u & 64 &&
            Je &&
            ((t = t.updateQueue),
            t !== null &&
              ((u = t.callbacks),
              u !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? u : l.concat(u)))));
        break;
      case 26:
        var a = ze;
        if (
          (Se(e, t),
          be(t),
          u & 512 && (At || l === null || ae(l, l.return)),
          u & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((u = t.memoizedState), l === null))
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  (u = t.type),
                    (l = t.memoizedProps),
                    (a = a.ownerDocument || a);
                  e: switch (u) {
                    case "title":
                      (n = a.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Vu] ||
                          n[Lt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = a.createElement(u)),
                          a.head.insertBefore(
                            n,
                            a.querySelector("head > title"),
                          )),
                        Zt(n, u, l),
                        (n[Lt] = t),
                        qt(n),
                        (u = n);
                      break t;
                    case "link":
                      var c = _d("link", "href", a).get(u + (l.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((n = c[s]),
                            n.getAttribute("href") ===
                              (l.href == null ? null : l.href) &&
                              n.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (n = a.createElement(u)),
                        Zt(n, u, l),
                        a.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = _d("meta", "content", a).get(
                          u + (l.content || ""),
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((n = c[s]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(s, 1);
                            break e;
                          }
                      }
                      (n = a.createElement(u)),
                        Zt(n, u, l),
                        a.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, u));
                  }
                  (n[Lt] = t), qt(n), (u = n);
                }
                t.stateNode = u;
              } else Ed(a, t.type, t.stateNode);
            else t.stateNode = bd(a, u, t.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                u === null
                  ? Ed(a, t.type, t.stateNode)
                  : bd(a, u, t.memoizedProps))
              : u === null &&
                t.stateNode !== null &&
                Eo(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && t.alternate === null) {
          (a = t.stateNode), (n = t.memoizedProps);
          try {
            for (var d = a.firstChild; d; ) {
              var m = d.nextSibling,
                A = d.nodeName;
              d[Vu] ||
                A === "HEAD" ||
                A === "BODY" ||
                A === "SCRIPT" ||
                A === "STYLE" ||
                (A === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                a.removeChild(d),
                (d = m);
            }
            for (var O = t.type, _ = a.attributes; _.length; )
              a.removeAttributeNode(_[0]);
            Zt(a, O, n), (a[Lt] = t), (a[Pt] = n);
          } catch (j) {
            vt(t, t.return, j);
          }
        }
      case 5:
        if (
          (Se(e, t),
          be(t),
          u & 512 && (At || l === null || ae(l, l.return)),
          t.flags & 32)
        ) {
          a = t.stateNode;
          try {
            cu(a, "");
          } catch (j) {
            vt(t, t.return, j);
          }
        }
        u & 4 &&
          t.stateNode != null &&
          ((a = t.memoizedProps), Eo(t, a, l !== null ? l.memoizedProps : a)),
          u & 1024 && (Bc = !0);
        break;
      case 6:
        if ((Se(e, t), be(t), u & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (u = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = u;
          } catch (j) {
            vt(t, t.return, j);
          }
        }
        break;
      case 3:
        if (
          ((kn = null),
          (a = ze),
          (ze = Kn(e.containerInfo)),
          Se(e, t),
          (ze = a),
          be(t),
          u & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ba(e.containerInfo);
          } catch (j) {
            vt(t, t.return, j);
          }
        Bc && ((Bc = !1), Uo(t));
        break;
      case 4:
        (u = ze),
          (ze = Kn(t.stateNode.containerInfo)),
          Se(e, t),
          be(t),
          (ze = u);
        break;
      case 12:
        Se(e, t), be(t);
        break;
      case 13:
        Se(e, t),
          be(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Jc = Ue()),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), Yc(t, u)));
        break;
      case 22:
        if (
          (u & 512 && (At || l === null || ae(l, l.return)),
          (d = t.memoizedState !== null),
          (m = l !== null && l.memoizedState !== null),
          (A = Je),
          (O = At),
          (Je = A || d),
          (At = O || m),
          Se(e, t),
          (At = O),
          (Je = A),
          be(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          u & 8192 &&
            ((e._visibility = d ? e._visibility & -2 : e._visibility | 1),
            d && ((e = Je || At), l === null || m || e || Au(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (l === null) {
                m = l = e;
                try {
                  if (((a = m.stateNode), d))
                    (n = a.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = m.stateNode), (s = m.memoizedProps.style);
                    var p =
                      s != null && s.hasOwnProperty("display")
                        ? s.display
                        : null;
                    c.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (j) {
                  vt(m, m.return, j);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = d ? "" : m.memoizedProps;
                } catch (j) {
                  vt(m, m.return, j);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        u & 4 &&
          ((u = t.updateQueue),
          u !== null &&
            ((l = u.retryQueue),
            l !== null && ((u.retryQueue = null), Yc(t, l))));
        break;
      case 19:
        Se(e, t),
          be(t),
          u & 4 &&
            ((u = t.updateQueue),
            u !== null && ((t.updateQueue = null), Yc(t, u)));
        break;
      case 21:
        break;
      default:
        Se(e, t), be(t);
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var l = t.return; l !== null; ) {
              if (To(l)) {
                var u = l;
                break t;
              }
              l = l.return;
            }
            throw Error(r(160));
          }
          switch (u.tag) {
            case 27:
              var a = u.stateNode,
                n = jc(t);
              Nn(t, n, a);
              break;
            case 5:
              var c = u.stateNode;
              u.flags & 32 && (cu(c, ""), (u.flags &= -33));
              var s = jc(t);
              Nn(t, s, c);
              break;
            case 3:
            case 4:
              var d = u.stateNode.containerInfo,
                m = jc(t);
              qc(t, m, d);
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
    e & 4096 && (t.flags &= -4097);
  }
  function Uo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Uo(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function $e(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) zo(t, e.alternate, e), (e = e.sibling);
  }
  function Au(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ml(4, e, e.return), Au(e);
          break;
        case 1:
          ae(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && bo(e, e.return, l),
            Au(e);
          break;
        case 26:
        case 27:
        case 5:
          ae(e, e.return), Au(e);
          break;
        case 22:
          ae(e, e.return), e.memoizedState === null && Au(e);
          break;
        default:
          Au(e);
      }
      t = t.sibling;
    }
  }
  function gl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var u = e.alternate,
        a = t,
        n = e,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          gl(a, n, l), ba(4, n);
          break;
        case 1:
          if (
            (gl(a, n, l),
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
            var s = u.stateNode;
            try {
              var d = a.shared.hiddenCallbacks;
              if (d !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < d.length; a++)
                  mo(d[a], s);
            } catch (m) {
              vt(u, u.return, m);
            }
          }
          l && c & 64 && So(n), Kl(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          gl(a, n, l), l && u === null && c & 4 && _o(n), Kl(n, n.return);
          break;
        case 12:
          gl(a, n, l);
          break;
        case 13:
          gl(a, n, l), l && c & 4 && Mo(a, n);
          break;
        case 22:
          n.memoizedState === null && gl(a, n, l), Kl(n, n.return);
          break;
        default:
          gl(a, n, l);
      }
      e = e.sibling;
    }
  }
  function Gc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && ra(l));
  }
  function Xc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ra(t));
  }
  function Sl(t, e, l, u) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) No(t, e, l, u), (e = e.sibling);
  }
  function No(t, e, l, u) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Sl(t, e, l, u), a & 2048 && ba(9, e);
        break;
      case 3:
        Sl(t, e, l, u),
          a & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ra(t)));
        break;
      case 12:
        if (a & 2048) {
          Sl(t, e, l, u), (t = e.stateNode);
          try {
            var n = e.memoizedProps,
              c = n.id,
              s = n.onPostCommit;
            typeof s == "function" &&
              s(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            vt(e, e.return, d);
          }
        } else Sl(t, e, l, u);
        break;
      case 23:
        break;
      case 22:
        (n = e.stateNode),
          e.memoizedState !== null
            ? n._visibility & 4
              ? Sl(t, e, l, u)
              : _a(t, e)
            : n._visibility & 4
              ? Sl(t, e, l, u)
              : ((n._visibility |= 4),
                zu(t, e, l, u, (e.subtreeFlags & 10256) !== 0)),
          a & 2048 && Gc(e.alternate, e);
        break;
      case 24:
        Sl(t, e, l, u), a & 2048 && Xc(e.alternate, e);
        break;
      default:
        Sl(t, e, l, u);
    }
  }
  function zu(t, e, l, u, a) {
    for (a = a && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        c = e,
        s = l,
        d = u,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          zu(n, c, s, d, a), ba(8, c);
          break;
        case 23:
          break;
        case 22:
          var A = c.stateNode;
          c.memoizedState !== null
            ? A._visibility & 4
              ? zu(n, c, s, d, a)
              : _a(n, c)
            : ((A._visibility |= 4), zu(n, c, s, d, a)),
            a && m & 2048 && Gc(c.alternate, c);
          break;
        case 24:
          zu(n, c, s, d, a), a && m & 2048 && Xc(c.alternate, c);
          break;
        default:
          zu(n, c, s, d, a);
      }
      e = e.sibling;
    }
  }
  function _a(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          u = e,
          a = u.flags;
        switch (u.tag) {
          case 22:
            _a(l, u), a & 2048 && Gc(u.alternate, u);
            break;
          case 24:
            _a(l, u), a & 2048 && Xc(u.alternate, u);
            break;
          default:
            _a(l, u);
        }
        e = e.sibling;
      }
  }
  var Ea = 8192;
  function Du(t) {
    if (t.subtreeFlags & Ea)
      for (t = t.child; t !== null; ) xo(t), (t = t.sibling);
  }
  function xo(t) {
    switch (t.tag) {
      case 26:
        Du(t),
          t.flags & Ea &&
            t.memoizedState !== null &&
            xh(ze, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Du(t);
        break;
      case 3:
      case 4:
        var e = ze;
        (ze = Kn(t.stateNode.containerInfo)), Du(t), (ze = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Ea), (Ea = 16777216), Du(t), (Ea = e))
            : Du(t));
        break;
      default:
        Du(t);
    }
  }
  function Ho(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Ta(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var u = e[l];
          (Yt = u), jo(u, t);
        }
      Ho(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Co(t), (t = t.sibling);
  }
  function Co(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ta(t), t.flags & 2048 && ml(9, t, t.return);
        break;
      case 3:
        Ta(t);
        break;
      case 12:
        Ta(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), xn(t))
          : Ta(t);
        break;
      default:
        Ta(t);
    }
  }
  function xn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var u = e[l];
          (Yt = u), jo(u, t);
        }
      Ho(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ml(8, e, e.return), xn(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 4 && ((l._visibility &= -5), xn(e));
          break;
        default:
          xn(e);
      }
      t = t.sibling;
    }
  }
  function jo(t, e) {
    for (; Yt !== null; ) {
      var l = Yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var u = l.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ra(l.memoizedState.cache);
      }
      if (((u = l.child), u !== null)) (u.return = l), (Yt = u);
      else
        t: for (l = t; Yt !== null; ) {
          u = Yt;
          var a = u.sibling,
            n = u.return;
          if ((Do(u), u === l)) {
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
  function Vy(t, e, l, u) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
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
  function _e(t, e, l, u) {
    return new Vy(t, e, l, u);
  }
  function Qc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function bl(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = _e(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 31457280),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function qo(t, e) {
    t.flags &= 31457282;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Hn(t, e, l, u, a, n) {
    var c = 0;
    if (((u = t), typeof t == "function")) Qc(t) && (c = 1);
    else if (typeof t == "string")
      c = Uh(t, l, Re.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case T:
          return Jl(l.children, a, n, e);
        case b:
          (c = 8), (a |= 24);
          break;
        case U:
          return (
            (t = _e(12, l, e, a | 2)), (t.elementType = U), (t.lanes = n), t
          );
        case bt:
          return (t = _e(13, l, e, a)), (t.elementType = bt), (t.lanes = n), t;
        case K:
          return (t = _e(19, l, e, a)), (t.elementType = K), (t.lanes = n), t;
        case k:
          return Bo(l, a, n, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case x:
              case V:
                c = 10;
                break t;
              case G:
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
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (u = null);
      }
    return (
      (e = _e(c, l, e, a)), (e.elementType = t), (e.type = u), (e.lanes = n), e
    );
  }
  function Jl(t, e, l, u) {
    return (t = _e(7, t, u, e)), (t.lanes = l), t;
  }
  function Bo(t, e, l, u) {
    (t = _e(22, t, u, e)), (t.elementType = k), (t.lanes = l);
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
          var c = cl(n, 2);
          c !== null && ((a._pendingVisibility |= 2), $t(c, n, 2));
        }
      },
      attach: function () {
        var n = a._current;
        if (n === null) throw Error(r(456));
        if ((a._pendingVisibility & 2) !== 0) {
          var c = cl(n, 2);
          c !== null && ((a._pendingVisibility &= -3), $t(c, n, 2));
        }
      },
    };
    return (t.stateNode = a), t;
  }
  function Zc(t, e, l) {
    return (t = _e(6, t, null, e)), (t.lanes = l), t;
  }
  function wc(t, e, l) {
    return (
      (e = _e(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function We(t) {
    t.flags |= 4;
  }
  function Yo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Td(e))) {
      if (
        ((e = ge.current),
        e !== null &&
          ((nt & 4194176) === nt
            ? xe !== null
            : ((nt & 62914560) !== nt && (nt & 536870912) === 0) || e !== xe))
      )
        throw ((ia = ki), ts);
      t.flags |= 8192;
    }
  }
  function Cn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? er() : 536870912), (t.lanes |= e), (Mu |= e));
  }
  function pa(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), (l = l.sibling);
          u === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function Tt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      u = 0;
    if (e)
      for (var a = t.child; a !== null; )
        (l |= a.lanes | a.childLanes),
          (u |= a.subtreeFlags & 31457280),
          (u |= a.flags & 31457280),
          (a.return = t),
          (a = a.sibling);
    else
      for (a = t.child; a !== null; )
        (l |= a.lanes | a.childLanes),
          (u |= a.subtreeFlags),
          (u |= a.flags),
          (a.return = t),
          (a = a.sibling);
    return (t.subtreeFlags |= u), (t.childLanes = l), e;
  }
  function Ky(t, e, l) {
    var u = e.pendingProps;
    switch ((Ki(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(e), null;
      case 1:
        return Tt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (u = null),
          t !== null && (u = t.memoizedState.cache),
          e.memoizedState.cache !== u && (e.flags |= 2048),
          Ke(jt),
          eu(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (la(e)
              ? We(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ae !== null && (Fc(Ae), (Ae = null)))),
          Tt(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (We(e),
              l !== null ? (Tt(e), Yo(e, l)) : (Tt(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (We(e), Tt(e), Yo(e, l))
                : (Tt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== u && We(e), Tt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Va(e), (l = ul.current);
        var a = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== u && We(e);
        else {
          if (!u) {
            if (e.stateNode === null) throw Error(r(166));
            return Tt(e), null;
          }
          (t = Re.current),
            la(e) ? Pr(e) : ((t = hd(a, u, l)), (e.stateNode = t), We(e));
        }
        return Tt(e), null;
      case 5:
        if ((Va(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== u && We(e);
        else {
          if (!u) {
            if (e.stateNode === null) throw Error(r(166));
            return Tt(e), null;
          }
          if (((t = Re.current), la(e))) Pr(e);
          else {
            switch (((a = Vn(ul.current)), t)) {
              case 1:
                t = a.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = a.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = a.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
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
                        ? a.createElement(l, { is: u.is })
                        : a.createElement(l);
                }
            }
            (t[Lt] = e), (t[Pt] = u);
            t: for (a = e.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                (a.child.return = a), (a = a.child);
                continue;
              }
              if (a === e) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === e) break t;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
            e.stateNode = t;
            t: switch ((Zt(t, l, u), l)) {
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
            t && We(e);
          }
        }
        return Tt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== u && We(e);
        else {
          if (typeof u != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = ul.current), la(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (u = null),
              (a = kt),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            (t[Lt] = e),
              (t = !!(
                t.nodeValue === l ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                fd(t.nodeValue, l)
              )),
              t || Bl(e);
          } else (t = Vn(t).createTextNode(u)), (t[Lt] = e), (e.stateNode = t);
        }
        return Tt(e), null;
      case 13:
        if (
          ((u = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((a = la(e)), u !== null && u.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((a = e.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(r(317));
              a[Lt] = e;
            } else
              ua(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Tt(e), (a = !1);
          } else Ae !== null && (Fc(Ae), (Ae = null)), (a = !0);
          if (!a) return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        if ((Ze(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = u !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (u = e.child),
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
          l !== t && l && (e.child.flags |= 8192),
          Cn(e, e.updateQueue),
          Tt(e),
          null
        );
      case 4:
        return eu(), t === null && rf(e.stateNode.containerInfo), Tt(e), null;
      case 10:
        return Ke(e.type), Tt(e), null;
      case 19:
        if ((Ut(Ct), (a = e.memoizedState), a === null)) return Tt(e), null;
        if (((u = (e.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) pa(a, !1);
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = gn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      pa(a, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      Cn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    qo(l, t), (l = l.sibling);
                  return _t(Ct, (Ct.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Ue() > jn &&
              ((e.flags |= 128), (u = !0), pa(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = gn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Cn(e, t),
                pa(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !ct)
              )
                return Tt(e), null;
            } else
              2 * Ue() - a.renderingStartTime > jn &&
                l !== 536870912 &&
                ((e.flags |= 128), (u = !0), pa(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = a.last),
              t !== null ? (t.sibling = n) : (e.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = Ue()),
            (e.sibling = null),
            (t = Ct.current),
            _t(Ct, u ? (t & 1) | 2 : t & 1),
            e)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          Ze(e),
          Wi(),
          (u = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== u && (e.flags |= 8192)
            : u && (e.flags |= 8192),
          u
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Tt(e),
          (l = e.updateQueue),
          l !== null && Cn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (u = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (u = e.memoizedState.cachePool.pool),
          u !== l && (e.flags |= 2048),
          t !== null && Ut(Gl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ke(jt),
          Tt(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Jy(t, e) {
    switch ((Ki(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ke(jt),
          eu(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Va(e), null;
      case 13:
        if (
          (Ze(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          ua();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Ut(Ct), null;
      case 4:
        return eu(), null;
      case 10:
        return Ke(e.type), null;
      case 22:
      case 23:
        return (
          Ze(e),
          Wi(),
          t !== null && Ut(Gl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ke(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Go(t, e) {
    switch ((Ki(e), e.tag)) {
      case 3:
        Ke(jt), eu();
        break;
      case 26:
      case 27:
      case 5:
        Va(e);
        break;
      case 4:
        eu();
        break;
      case 13:
        Ze(e);
        break;
      case 19:
        Ut(Ct);
        break;
      case 10:
        Ke(e.type);
        break;
      case 22:
      case 23:
        Ze(e), Wi(), t !== null && Ut(Gl);
        break;
      case 24:
        Ke(jt);
    }
  }
  var ky = {
      getCacheForType: function (t) {
        var e = Vt(jt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    $y = typeof WeakMap == "function" ? WeakMap : Map,
    pt = 0,
    gt = null,
    et = null,
    nt = 0,
    St = 0,
    ie = null,
    Fe = !1,
    Ou = !1,
    Lc = !1,
    Pe = 0,
    zt = 0,
    _l = 0,
    kl = 0,
    Vc = 0,
    Ee = 0,
    Mu = 0,
    Aa = null,
    Ce = null,
    Kc = !1,
    Jc = 0,
    jn = 1 / 0,
    qn = null,
    El = null,
    Bn = !1,
    $l = null,
    za = 0,
    kc = 0,
    $c = null,
    Da = 0,
    Wc = null;
  function ce() {
    if ((pt & 2) !== 0 && nt !== 0) return nt & -nt;
    if (X.T !== null) {
      var t = bu;
      return t !== 0 ? t : af();
    }
    return nr();
  }
  function Xo() {
    Ee === 0 && (Ee = (nt & 536870912) === 0 || ct ? tr() : 536870912);
    var t = ge.current;
    return t !== null && (t.flags |= 32), Ee;
  }
  function $t(t, e, l) {
    ((t === gt && St === 2) || t.cancelPendingCommit !== null) &&
      (Ru(t, 0), Ie(t, nt, Ee, !1)),
      Lu(t, l),
      ((pt & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((pt & 2) === 0 && (kl |= l), zt === 4 && Ie(t, nt, Ee, !1)),
        je(t));
  }
  function Qo(t, e, l) {
    if ((pt & 6) !== 0) throw Error(r(327));
    var u = (!l && (e & 60) === 0 && (e & t.expiredLanes) === 0) || wu(t, e),
      a = u ? Py(t, e) : tf(t, e, !0),
      n = u;
    do {
      if (a === 0) {
        Ou && !u && Ie(t, e, 0, !1);
        break;
      } else if (a === 6) Ie(t, e, 0, !Fe);
      else {
        if (((l = t.current.alternate), n && !Wy(l))) {
          (a = tf(t, e, !1)), (n = !1);
          continue;
        }
        if (a === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var s = t;
              a = Aa;
              var d = s.current.memoizedState.isDehydrated;
              if ((d && (Ru(s, c).flags |= 256), (c = tf(s, c, !1)), c !== 2)) {
                if (Lc && !d) {
                  (s.errorRecoveryDisabledLanes |= n), (kl |= n), (a = 4);
                  break t;
                }
                (n = Ce), (Ce = a), n !== null && Fc(n);
              }
              a = c;
            }
            if (((n = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          Ru(t, 0), Ie(t, e, 0, !0);
          break;
        }
        t: {
          switch (((u = t), a)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194176) === e) {
                Ie(u, e, Ee, !Fe);
                break t;
              }
              break;
            case 2:
              Ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (
            ((u.finishedWork = l),
            (u.finishedLanes = e),
            (e & 62914560) === e && ((n = Jc + 300 - Ue()), 10 < n))
          ) {
            if ((Ie(u, e, Ee, !Fe), $a(u, 0) !== 0)) break t;
            u.timeoutHandle = od(
              Zo.bind(null, u, l, Ce, qn, Kc, e, Ee, kl, Mu, Fe, 2, -0, 0),
              n,
            );
            break t;
          }
          Zo(u, l, Ce, qn, Kc, e, Ee, kl, Mu, Fe, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    je(t);
  }
  function Fc(t) {
    Ce === null ? (Ce = t) : Ce.push.apply(Ce, t);
  }
  function Zo(t, e, l, u, a, n, c, s, d, m, A, O, _) {
    var p = e.subtreeFlags;
    if (
      (p & 8192 || (p & 16785408) === 16785408) &&
      ((xa = { stylesheets: null, count: 0, unsuspend: Nh }),
      xo(e),
      (e = Hh()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e($o.bind(null, t, l, u, a, c, s, d, 1, O, _))),
        Ie(t, n, c, !m);
      return;
    }
    $o(t, l, u, a, c, s, d, A, O, _);
  }
  function Wy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var u = 0; u < l.length; u++) {
          var a = l[u],
            n = a.getSnapshot;
          a = a.value;
          try {
            if (!ue(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Ie(t, e, l, u) {
    (e &= ~Vc),
      (e &= ~kl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      u && (t.warmLanes |= e),
      (u = t.expirationTimes);
    for (var a = e; 0 < a; ) {
      var n = 31 - le(a),
        c = 1 << n;
      (u[n] = -1), (a &= ~c);
    }
    l !== 0 && lr(t, l, e);
  }
  function Yn() {
    return (pt & 6) === 0 ? (Oa(0), !1) : !0;
  }
  function Pc() {
    if (et !== null) {
      if (St === 0) var t = et.return;
      else (t = et), (Ve = Ll = null), ac(t), (gu = null), (ca = 0), (t = et);
      for (; t !== null; ) Go(t.alternate, t), (t = t.return);
      et = null;
    }
  }
  function Ru(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), vh(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Pc(),
      (gt = t),
      (et = l = bl(t.current, null)),
      (nt = e),
      (St = 0),
      (ie = null),
      (Fe = !1),
      (Ou = wu(t, e)),
      (Lc = !1),
      (Mu = Ee = Vc = kl = _l = zt = 0),
      (Ce = Aa = null),
      (Kc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= e; 0 < u; ) {
        var a = 31 - le(u),
          n = 1 << a;
        (e |= t[a]), (u &= ~n);
      }
    return (Pe = e), fn(), l;
  }
  function wo(t, e) {
    (I = null),
      (X.H = He),
      e === na
        ? ((e = us()), (St = 3))
        : e === ts
          ? ((e = us()), (St = 4))
          : (St =
              e === eo
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ie = e),
      et === null && ((zt = 1), Mn(t, he(e, t.current)));
  }
  function Lo() {
    var t = X.H;
    return (X.H = He), t === null ? He : t;
  }
  function Vo() {
    var t = X.A;
    return (X.A = ky), t;
  }
  function Ic() {
    (zt = 4),
      Fe || ((nt & 4194176) !== nt && ge.current !== null) || (Ou = !0),
      ((_l & 134217727) === 0 && (kl & 134217727) === 0) ||
        gt === null ||
        Ie(gt, nt, Ee, !1);
  }
  function tf(t, e, l) {
    var u = pt;
    pt |= 2;
    var a = Lo(),
      n = Vo();
    (gt !== t || nt !== e) && ((qn = null), Ru(t, e)), (e = !1);
    var c = zt;
    t: do
      try {
        if (St !== 0 && et !== null) {
          var s = et,
            d = ie;
          switch (St) {
            case 8:
              Pc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 6:
              ge.current === null && (e = !0);
              var m = St;
              if (((St = 0), (ie = null), Uu(t, s, d, m), l && Ou)) {
                c = 0;
                break t;
              }
              break;
            default:
              (m = St), (St = 0), (ie = null), Uu(t, s, d, m);
          }
        }
        Fy(), (c = zt);
        break;
      } catch (A) {
        wo(t, A);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ve = Ll = null),
      (pt = u),
      (X.H = a),
      (X.A = n),
      et === null && ((gt = null), (nt = 0), fn()),
      c
    );
  }
  function Fy() {
    for (; et !== null; ) Ko(et);
  }
  function Py(t, e) {
    var l = pt;
    pt |= 2;
    var u = Lo(),
      a = Vo();
    gt !== t || nt !== e
      ? ((qn = null), (jn = Ue() + 500), Ru(t, e))
      : (Ou = wu(t, e));
    t: do
      try {
        if (St !== 0 && et !== null) {
          e = et;
          var n = ie;
          e: switch (St) {
            case 1:
              (St = 0), (ie = null), Uu(t, e, n, 1);
              break;
            case 2:
              if (es(n)) {
                (St = 0), (ie = null), Jo(e);
                break;
              }
              (e = function () {
                St === 2 && gt === t && (St = 7), je(t);
              }),
                n.then(e, e);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              es(n)
                ? ((St = 0), (ie = null), Jo(e))
                : ((St = 0), (ie = null), Uu(t, e, n, 7));
              break;
            case 5:
              var c = null;
              switch (et.tag) {
                case 26:
                  c = et.memoizedState;
                case 5:
                case 27:
                  var s = et;
                  if (!c || Td(c)) {
                    (St = 0), (ie = null);
                    var d = s.sibling;
                    if (d !== null) et = d;
                    else {
                      var m = s.return;
                      m !== null ? ((et = m), Gn(m)) : (et = null);
                    }
                    break e;
                  }
              }
              (St = 0), (ie = null), Uu(t, e, n, 5);
              break;
            case 6:
              (St = 0), (ie = null), Uu(t, e, n, 6);
              break;
            case 8:
              Pc(), (zt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        Iy();
        break;
      } catch (A) {
        wo(t, A);
      }
    while (!0);
    return (
      (Ve = Ll = null),
      (X.H = u),
      (X.A = a),
      (pt = l),
      et !== null ? 0 : ((gt = null), (nt = 0), fn(), zt)
    );
  }
  function Iy() {
    for (; et !== null && !E0(); ) Ko(et);
  }
  function Ko(t) {
    var e = ho(t.alternate, t, Pe);
    (t.memoizedProps = t.pendingProps), e === null ? Gn(t) : (et = e);
  }
  function Jo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = co(l, e, e.pendingProps, e.type, void 0, nt);
        break;
      case 11:
        e = co(l, e, e.pendingProps, e.type.render, e.ref, nt);
        break;
      case 5:
        ac(e);
      default:
        Go(l, e), (e = et = qo(e, Pe)), (e = ho(l, e, Pe));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Gn(t) : (et = e);
  }
  function Uu(t, e, l, u) {
    (Ve = Ll = null), ac(e), (gu = null), (ca = 0);
    var a = e.return;
    try {
      if (Qy(t, a, e, l, nt)) {
        (zt = 1), Mn(t, he(l, t.current)), (et = null);
        return;
      }
    } catch (n) {
      if (a !== null) throw ((et = a), n);
      (zt = 1), Mn(t, he(l, t.current)), (et = null);
      return;
    }
    e.flags & 32768
      ? (ct || u === 1
          ? (t = !0)
          : Ou || (nt & 536870912) !== 0
            ? (t = !1)
            : ((Fe = t = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = ge.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        ko(e, t))
      : Gn(e);
  }
  function Gn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ko(e, Fe);
        return;
      }
      t = e.return;
      var l = Ky(e.alternate, e, Pe);
      if (l !== null) {
        et = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        et = e;
        return;
      }
      et = e = t;
    } while (e !== null);
    zt === 0 && (zt = 5);
  }
  function ko(t, e) {
    do {
      var l = Jy(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (et = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        et = t;
        return;
      }
      et = t = l;
    } while (t !== null);
    (zt = 6), (et = null);
  }
  function $o(t, e, l, u, a, n, c, s, d, m) {
    var A = X.T,
      O = H.p;
    try {
      (H.p = 2), (X.T = null), th(t, e, l, u, O, a, n, c, s, d, m);
    } finally {
      (X.T = A), (H.p = O);
    }
  }
  function th(t, e, l, u, a, n, c, s) {
    do Nu();
    while ($l !== null);
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
      ((m |= wi),
      x0(t, u, m, n, c, s),
      t === gt && ((et = gt = null), (nt = 0)),
      ((d.subtreeFlags & 10256) === 0 && (d.flags & 10256) === 0) ||
        Bn ||
        ((Bn = !0),
        (kc = m),
        ($c = l),
        ah(Ka, function () {
          return Nu(), null;
        })),
      (l = (d.flags & 15990) !== 0),
      (d.subtreeFlags & 15990) !== 0 || l
        ? ((l = X.T),
          (X.T = null),
          (n = H.p),
          (H.p = 2),
          (c = pt),
          (pt |= 4),
          wy(t, d),
          Ro(d, t),
          Ay(yf, t.containerInfo),
          (Fn = !!df),
          (yf = df = null),
          (t.current = d),
          zo(t, d.alternate, d),
          T0(),
          (pt = c),
          (H.p = n),
          (X.T = l))
        : (t.current = d),
      Bn ? ((Bn = !1), ($l = t), (za = u)) : Wo(t, m),
      (m = t.pendingLanes),
      m === 0 && (El = null),
      O0(d.stateNode),
      je(t),
      e !== null)
    )
      for (a = t.onRecoverableError, d = 0; d < e.length; d++)
        (m = e[d]), a(m.value, { componentStack: m.stack });
    return (
      (za & 3) !== 0 && Nu(),
      (m = t.pendingLanes),
      (u & 4194218) !== 0 && (m & 42) !== 0
        ? t === Wc
          ? Da++
          : ((Da = 0), (Wc = t))
        : (Da = 0),
      Oa(0),
      null
    );
  }
  function Wo(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ra(e)));
  }
  function Nu() {
    if ($l !== null) {
      var t = $l,
        e = kc;
      kc = 0;
      var l = ar(za),
        u = X.T,
        a = H.p;
      try {
        if (((H.p = 32 > l ? 32 : l), (X.T = null), $l === null)) var n = !1;
        else {
          (l = $c), ($c = null);
          var c = $l,
            s = za;
          if ((($l = null), (za = 0), (pt & 6) !== 0)) throw Error(r(331));
          var d = pt;
          if (
            ((pt |= 4),
            Co(c.current),
            No(c, c.current, s, l),
            (pt = d),
            Oa(0, !1),
            ee && typeof ee.onPostCommitFiberRoot == "function")
          )
            try {
              ee.onPostCommitFiberRoot(Zu, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (H.p = a), (X.T = u), Wo(t, e);
      }
    }
    return !1;
  }
  function Fo(t, e, l) {
    (e = he(l, e)),
      (e = Sc(t.stateNode, e, 2)),
      (t = vl(t, e, 2)),
      t !== null && (Lu(t, 2), je(t));
  }
  function vt(t, e, l) {
    if (t.tag === 3) Fo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Fo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var u = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (El === null || !El.has(u)))
          ) {
            (t = he(l, t)),
              (l = Is(2)),
              (u = vl(e, l, 2)),
              u !== null && (to(l, u, e, t), Lu(u, 2), je(u));
            break;
          }
        }
        e = e.return;
      }
  }
  function ef(t, e, l) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new $y();
      var a = new Set();
      u.set(e, a);
    } else (a = u.get(e)), a === void 0 && ((a = new Set()), u.set(e, a));
    a.has(l) ||
      ((Lc = !0), a.add(l), (t = eh.bind(null, t, e, l)), e.then(t, t));
  }
  function eh(t, e, l) {
    var u = t.pingCache;
    u !== null && u.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      gt === t &&
        (nt & l) === l &&
        (zt === 4 || (zt === 3 && (nt & 62914560) === nt && 300 > Ue() - Jc)
          ? (pt & 2) === 0 && Ru(t, 0)
          : (Vc |= l),
        Mu === nt && (Mu = 0)),
      je(t);
  }
  function Po(t, e) {
    e === 0 && (e = er()), (t = cl(t, e)), t !== null && (Lu(t, e), je(t));
  }
  function lh(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Po(t, l);
  }
  function uh(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode,
          a = t.memoizedState;
        a !== null && (l = a.retryLane);
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
    u !== null && u.delete(e), Po(t, l);
  }
  function ah(t, e) {
    return bi(t, e);
  }
  var Xn = null,
    xu = null,
    lf = !1,
    Qn = !1,
    uf = !1,
    Wl = 0;
  function je(t) {
    t !== xu &&
      t.next === null &&
      (xu === null ? (Xn = xu = t) : (xu = xu.next = t)),
      (Qn = !0),
      lf || ((lf = !0), ih(nh));
  }
  function Oa(t, e) {
    if (!uf && Qn) {
      uf = !0;
      do
        for (var l = !1, u = Xn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                s = u.pingedLanes;
              (n = (1 << (31 - le(42 | t) + 1)) - 1),
                (n &= a & ~(c & ~s)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((l = !0), ed(u, n));
          } else
            (n = nt),
              (n = $a(u, u === gt ? n : 0)),
              (n & 3) === 0 || wu(u, n) || ((l = !0), ed(u, n));
          u = u.next;
        }
      while (l);
      uf = !1;
    }
  }
  function nh() {
    Qn = lf = !1;
    var t = 0;
    Wl !== 0 && (hh() && (t = Wl), (Wl = 0));
    for (var e = Ue(), l = null, u = Xn; u !== null; ) {
      var a = u.next,
        n = Io(u, e);
      n === 0
        ? ((u.next = null),
          l === null ? (Xn = a) : (l.next = a),
          a === null && (xu = l))
        : ((l = u), (t !== 0 || (n & 3) !== 0) && (Qn = !0)),
        (u = a);
    }
    Oa(t);
  }
  function Io(t, e) {
    for (
      var l = t.suspendedLanes,
        u = t.pingedLanes,
        a = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - le(n),
        s = 1 << c,
        d = a[c];
      d === -1
        ? ((s & l) === 0 || (s & u) !== 0) && (a[c] = N0(s, e))
        : d <= e && (t.expiredLanes |= s),
        (n &= ~s);
    }
    if (
      ((e = gt),
      (l = nt),
      (l = $a(t, t === e ? l : 0)),
      (u = t.callbackNode),
      l === 0 || (t === e && St === 2) || t.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && _i(u),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || wu(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((u !== null && _i(u), ar(l))) {
        case 2:
        case 8:
          l = Pf;
          break;
        case 32:
          l = Ka;
          break;
        case 268435456:
          l = If;
          break;
        default:
          l = Ka;
      }
      return (
        (u = td.bind(null, t)),
        (l = bi(l, u)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      u !== null && u !== null && _i(u),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function td(t, e) {
    var l = t.callbackNode;
    if (Nu() && t.callbackNode !== l) return null;
    var u = nt;
    return (
      (u = $a(t, t === gt ? u : 0)),
      u === 0
        ? null
        : (Qo(t, u, e),
          Io(t, Ue()),
          t.callbackNode != null && t.callbackNode === l
            ? td.bind(null, t)
            : null)
    );
  }
  function ed(t, e) {
    if (Nu()) return null;
    Qo(t, e, !0);
  }
  function ih(t) {
    mh(function () {
      (pt & 6) !== 0 ? bi(Ff, t) : t();
    });
  }
  function af() {
    return Wl === 0 && (Wl = tr()), Wl;
  }
  function ld(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : tn("" + t);
  }
  function ud(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function ch(t, e, l, u, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var n = ld((a[Pt] || null).action),
        c = u.submitter;
      c &&
        ((e = (e = c[Pt] || null)
          ? ld(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((n = e), (c = null)));
      var s = new an("action", "action", null, u, a);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Wl !== 0) {
                  var d = c ? ud(a, c) : new FormData(a);
                  yc(
                    l,
                    { pending: !0, data: d, method: a.method, action: n },
                    null,
                    d,
                  );
                }
              } else
                typeof n == "function" &&
                  (s.preventDefault(),
                  (d = c ? ud(a, c) : new FormData(a)),
                  yc(
                    l,
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
  for (var nf = 0; nf < kr.length; nf++) {
    var cf = kr[nf],
      fh = cf.toLowerCase(),
      rh = cf[0].toUpperCase() + cf.slice(1);
    pe(fh, "on" + rh);
  }
  pe(wr, "onAnimationEnd"),
    pe(Lr, "onAnimationIteration"),
    pe(Vr, "onAnimationStart"),
    pe("dblclick", "onDoubleClick"),
    pe("focusin", "onFocus"),
    pe("focusout", "onBlur"),
    pe(Dy, "onTransitionRun"),
    pe(Oy, "onTransitionStart"),
    pe(My, "onTransitionCancel"),
    pe(Kr, "onTransitionEnd"),
    nu("onMouseEnter", ["mouseout", "mouseover"]),
    nu("onMouseLeave", ["mouseout", "mouseover"]),
    nu("onPointerEnter", ["pointerout", "pointerover"]),
    nu("onPointerLeave", ["pointerout", "pointerover"]),
    Nl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Nl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Nl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Nl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Nl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Nl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Ma =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    sh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ma),
    );
  function ad(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var u = t[l],
        a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var c = u.length - 1; 0 <= c; c--) {
            var s = u[c],
              d = s.instance,
              m = s.currentTarget;
            if (((s = s.listener), d !== n && a.isPropagationStopped()))
              break t;
            (n = s), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              On(A);
            }
            (a.currentTarget = null), (n = d);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((s = u[c]),
              (d = s.instance),
              (m = s.currentTarget),
              (s = s.listener),
              d !== n && a.isPropagationStopped())
            )
              break t;
            (n = s), (a.currentTarget = m);
            try {
              n(a);
            } catch (A) {
              On(A);
            }
            (a.currentTarget = null), (n = d);
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Ti];
    l === void 0 && (l = e[Ti] = new Set());
    var u = t + "__bubble";
    l.has(u) || (nd(e, t, 2, !1), l.add(u));
  }
  function ff(t, e, l) {
    var u = 0;
    e && (u |= 4), nd(l, t, u, e);
  }
  var Zn = "_reactListening" + Math.random().toString(36).slice(2);
  function rf(t) {
    if (!t[Zn]) {
      (t[Zn] = !0),
        cr.forEach(function (l) {
          l !== "selectionchange" && (sh.has(l) || ff(l, !1, t), ff(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zn] || ((e[Zn] = !0), ff("selectionchange", !1, e));
    }
  }
  function nd(t, e, l, u) {
    switch (Md(e)) {
      case 2:
        var a = qh;
        break;
      case 8:
        a = Bh;
        break;
      default:
        a = Tf;
    }
    (l = a.bind(null, e, l, t)),
      (a = void 0),
      !Ui ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (a = !0),
      u
        ? a !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: a })
          : t.addEventListener(e, l, !0)
        : a !== void 0
          ? t.addEventListener(e, l, { passive: a })
          : t.addEventListener(e, l, !1);
  }
  function sf(t, e, l, u, a) {
    var n = u;
    if ((e & 1) === 0 && (e & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var s = u.stateNode.containerInfo;
          if (s === a || (s.nodeType === 8 && s.parentNode === a)) break;
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
          for (; s !== null; ) {
            if (((c = Ul(s)), c === null)) return;
            if (((d = c.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              u = n = c;
              continue t;
            }
            s = s.parentNode;
          }
        }
        u = u.return;
      }
    br(function () {
      var m = n,
        A = Mi(l),
        O = [];
      t: {
        var _ = Jr.get(t);
        if (_ !== void 0) {
          var p = an,
            j = t;
          switch (t) {
            case "keypress":
              if (ln(l) === 0) break t;
            case "keydown":
            case "keyup":
              p = uy;
              break;
            case "focusin":
              (j = "focus"), (p = Ci);
              break;
            case "focusout":
              (j = "blur"), (p = Ci);
              break;
            case "beforeblur":
            case "afterblur":
              p = Ci;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Tr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = V0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = iy;
              break;
            case wr:
            case Lr:
            case Vr:
              p = k0;
              break;
            case Kr:
              p = fy;
              break;
            case "scroll":
            case "scrollend":
              p = w0;
              break;
            case "wheel":
              p = sy;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = W0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Ar;
              break;
            case "toggle":
            case "beforetoggle":
              p = dy;
          }
          var J = (e & 4) !== 0,
            Dt = !J && (t === "scroll" || t === "scrollend"),
            g = J ? (_ !== null ? _ + "Capture" : null) : _;
          J = [];
          for (var v = m, S; v !== null; ) {
            var D = v;
            if (
              ((S = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                S === null ||
                g === null ||
                ((D = Ju(v, g)), D != null && J.push(Ra(v, D, S))),
              Dt)
            )
              break;
            v = v.return;
          }
          0 < J.length &&
            ((_ = new p(_, j, null, l, A)), O.push({ event: _, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (p = t === "mouseout" || t === "pointerout"),
            _ &&
              l !== Oi &&
              (j = l.relatedTarget || l.fromElement) &&
              (Ul(j) || j[lu]))
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
              ? ((j = l.relatedTarget || l.toElement),
                (p = m),
                (j = j ? Ul(j) : null),
                j !== null &&
                  ((Dt = L(j)),
                  (J = j.tag),
                  j !== Dt || (J !== 5 && J !== 27 && J !== 6)) &&
                  (j = null))
              : ((p = null), (j = m)),
            p !== j)
          ) {
            if (
              ((J = Tr),
              (D = "onMouseLeave"),
              (g = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((J = Ar),
                (D = "onPointerLeave"),
                (g = "onPointerEnter"),
                (v = "pointer")),
              (Dt = p == null ? _ : Ku(p)),
              (S = j == null ? _ : Ku(j)),
              (_ = new J(D, v + "leave", p, l, A)),
              (_.target = Dt),
              (_.relatedTarget = S),
              (D = null),
              Ul(A) === m &&
                ((J = new J(g, v + "enter", j, l, A)),
                (J.target = S),
                (J.relatedTarget = Dt),
                (D = J)),
              (Dt = D),
              p && j)
            )
              e: {
                for (J = p, g = j, v = 0, S = J; S; S = Hu(S)) v++;
                for (S = 0, D = g; D; D = Hu(D)) S++;
                for (; 0 < v - S; ) (J = Hu(J)), v--;
                for (; 0 < S - v; ) (g = Hu(g)), S--;
                for (; v--; ) {
                  if (J === g || (g !== null && J === g.alternate)) break e;
                  (J = Hu(J)), (g = Hu(g));
                }
                J = null;
              }
            else J = null;
            p !== null && id(O, _, p, J, !1),
              j !== null && Dt !== null && id(O, Dt, j, J, !0);
          }
        }
        t: {
          if (
            ((_ = m ? Ku(m) : window),
            (p = _.nodeName && _.nodeName.toLowerCase()),
            p === "select" || (p === "input" && _.type === "file"))
          )
            var C = xr;
          else if (Ur(_))
            if (Hr) C = Ty;
            else {
              C = _y;
              var tt = by;
            }
          else
            (p = _.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? m && Di(m.elementType) && (C = xr)
                : (C = Ey);
          if (C && (C = C(t, m))) {
            Nr(O, C, l, A);
            break t;
          }
          tt && tt(t, _, m),
            t === "focusout" &&
              m &&
              _.type === "number" &&
              m.memoizedProps.value != null &&
              zi(_, "number", _.value);
        }
        switch (((tt = m ? Ku(m) : window), t)) {
          case "focusin":
            (Ur(tt) || tt.contentEditable === "true") &&
              ((ou = tt), (Xi = m), (ea = null));
            break;
          case "focusout":
            ea = Xi = ou = null;
            break;
          case "mousedown":
            Qi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Qi = !1), Qr(O, l, A);
            break;
          case "selectionchange":
            if (zy) break;
          case "keydown":
          case "keyup":
            Qr(O, l, A);
        }
        var Y;
        if (qi)
          t: {
            switch (t) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break t;
              case "compositionend":
                Z = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break t;
            }
            Z = void 0;
          }
        else
          su
            ? Mr(t, l) && (Z = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (Z = "onCompositionStart");
        Z &&
          (zr &&
            l.locale !== "ko" &&
            (su || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && su && (Y = _r())
              : ((il = A),
                (Ni = "value" in il ? il.value : il.textContent),
                (su = !0))),
          (tt = wn(m, Z)),
          0 < tt.length &&
            ((Z = new pr(Z, t, null, l, A)),
            O.push({ event: Z, listeners: tt }),
            Y ? (Z.data = Y) : ((Y = Rr(l)), Y !== null && (Z.data = Y)))),
          (Y = hy ? vy(t, l) : my(t, l)) &&
            ((Z = wn(m, "onBeforeInput")),
            0 < Z.length &&
              ((tt = new pr("onBeforeInput", "beforeinput", null, l, A)),
              O.push({ event: tt, listeners: Z }),
              (tt.data = Y))),
          ch(O, t, m, l, A);
      }
      ad(O, e);
    });
  }
  function Ra(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function wn(t, e) {
    for (var l = e + "Capture", u = []; t !== null; ) {
      var a = t,
        n = a.stateNode;
      (a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          n === null ||
          ((a = Ju(t, l)),
          a != null && u.unshift(Ra(t, a, n)),
          (a = Ju(t, e)),
          a != null && u.push(Ra(t, a, n))),
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
  function id(t, e, l, u, a) {
    for (var n = e._reactName, c = []; l !== null && l !== u; ) {
      var s = l,
        d = s.alternate,
        m = s.stateNode;
      if (((s = s.tag), d !== null && d === u)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        m === null ||
        ((d = m),
        a
          ? ((m = Ju(l, n)), m != null && c.unshift(Ra(l, m, d)))
          : a || ((m = Ju(l, n)), m != null && c.push(Ra(l, m, d)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var oh = /\r\n?/g,
    dh = /\u0000|\uFFFD/g;
  function cd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        oh,
        `
`,
      )
      .replace(dh, "");
  }
  function fd(t, e) {
    return (e = cd(e)), cd(t) === e;
  }
  function Ln() {}
  function ht(t, e, l, u, a, n) {
    switch (l) {
      case "children":
        typeof u == "string"
          ? e === "body" || (e === "textarea" && u === "") || cu(t, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            e !== "body" &&
            cu(t, "" + u);
        break;
      case "className":
        Fa(t, "class", u);
        break;
      case "tabIndex":
        Fa(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fa(t, l, u);
        break;
      case "style":
        gr(t, u, n);
        break;
      case "data":
        if (e !== "object") {
          Fa(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (u = tn("" + u)), t.setAttribute(l, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && ht(t, e, "name", a.name, a, null),
                ht(t, e, "formEncType", a.formEncType, a, null),
                ht(t, e, "formMethod", a.formMethod, a, null),
                ht(t, e, "formTarget", a.formTarget, a, null))
              : (ht(t, e, "encType", a.encType, a, null),
                ht(t, e, "method", a.method, a, null),
                ht(t, e, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (u = tn("" + u)), t.setAttribute(l, u);
        break;
      case "onClick":
        u != null && (t.onclick = Ln);
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
          if (((l = u.__html), l != null)) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
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
        (l = tn("" + u)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
          ? t.setAttribute(l, "" + u)
          : t.removeAttribute(l);
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
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        u === !0
          ? t.setAttribute(l, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? t.setAttribute(l, u)
            : t.removeAttribute(l);
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
          ? t.setAttribute(l, u)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? t.removeAttribute(l)
          : t.setAttribute(l, u);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), Wa(t, "popover", u);
        break;
      case "xlinkActuate":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ge(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ge(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ge(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ge(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Wa(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Q0.get(l) || l), Wa(t, l, u));
    }
  }
  function of(t, e, l, u, a, n) {
    switch (l) {
      case "style":
        gr(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
          if (((l = u.__html), l != null)) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? cu(t, u)
          : (typeof u == "number" || typeof u == "bigint") && cu(t, "" + u);
        break;
      case "onScroll":
        u != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        u != null && ut("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Ln);
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
        if (!fr.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((a = l.endsWith("Capture")),
              (e = l.slice(2, a ? l.length - 7 : void 0)),
              (n = t[Pt] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, a),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, u, a);
              break t;
            }
            l in t
              ? (t[l] = u)
              : u === !0
                ? t.setAttribute(l, "")
                : Wa(t, l, u);
          }
    }
  }
  function Zt(t, e, l) {
    switch (e) {
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
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var c = l[n];
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
                  throw Error(r(137, e));
                default:
                  ht(t, e, n, c, l, null);
              }
          }
        a && ht(t, e, "srcSet", l.srcSet, l, null),
          u && ht(t, e, "src", l.src, l, null);
        return;
      case "input":
        ut("invalid", t);
        var s = (n = c = a = null),
          d = null,
          m = null;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var A = l[u];
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
                  s = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(r(137, e));
                  break;
                default:
                  ht(t, e, u, A, l, null);
              }
          }
        yr(t, n, s, d, m, c, a, !1), Pa(t);
        return;
      case "select":
        ut("invalid", t), (u = c = n = null);
        for (a in l)
          if (l.hasOwnProperty(a) && ((s = l[a]), s != null))
            switch (a) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                u = s;
              default:
                ht(t, e, a, s, l, null);
            }
        (e = n),
          (l = c),
          (t.multiple = !!u),
          e != null ? iu(t, !!u, e, !1) : l != null && iu(t, !!u, l, !0);
        return;
      case "textarea":
        ut("invalid", t), (n = a = u = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                a = s;
                break;
              case "children":
                n = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                ht(t, e, c, s, l, null);
            }
        vr(t, u, a, n), Pa(t);
        return;
      case "option":
        for (d in l)
          if (l.hasOwnProperty(d) && ((u = l[d]), u != null))
            switch (d) {
              case "selected":
                t.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ht(t, e, d, u, l, null);
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
        for (u = 0; u < Ma.length; u++) ut(Ma[u], t);
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
        for (m in l)
          if (l.hasOwnProperty(m) && ((u = l[m]), u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                ht(t, e, m, u, l, null);
            }
        return;
      default:
        if (Di(e)) {
          for (A in l)
            l.hasOwnProperty(A) &&
              ((u = l[A]), u !== void 0 && of(t, e, A, u, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((u = l[s]), u != null && ht(t, e, s, u, l, null));
  }
  function yh(t, e, l, u) {
    switch (e) {
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
          s = null,
          d = null,
          m = null,
          A = null;
        for (p in l) {
          var O = l[p];
          if (l.hasOwnProperty(p) && O != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = O;
              default:
                u.hasOwnProperty(p) || ht(t, e, p, null, u, O);
            }
        }
        for (var _ in u) {
          var p = u[_];
          if (((O = l[_]), u.hasOwnProperty(_) && (p != null || O != null)))
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
                s = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(137, e));
                break;
              default:
                p !== O && ht(t, e, _, p, u, O);
            }
        }
        Ai(t, c, s, d, m, A, n, a);
        return;
      case "select":
        p = c = s = _ = null;
        for (n in l)
          if (((d = l[n]), l.hasOwnProperty(n) && d != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = d;
              default:
                u.hasOwnProperty(n) || ht(t, e, n, null, u, d);
            }
        for (a in u)
          if (
            ((n = u[a]),
            (d = l[a]),
            u.hasOwnProperty(a) && (n != null || d != null))
          )
            switch (a) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                s = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== d && ht(t, e, a, n, u, d);
            }
        (e = s),
          (l = c),
          (u = p),
          _ != null
            ? iu(t, !!l, _, !1)
            : !!u != !!l &&
              (e != null ? iu(t, !!l, e, !0) : iu(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        p = _ = null;
        for (s in l)
          if (
            ((a = l[s]),
            l.hasOwnProperty(s) && a != null && !u.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ht(t, e, s, null, u, a);
            }
        for (c in u)
          if (
            ((a = u[c]),
            (n = l[c]),
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
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== n && ht(t, e, c, a, u, n);
            }
        hr(t, _, p);
        return;
      case "option":
        for (var j in l)
          if (
            ((_ = l[j]),
            l.hasOwnProperty(j) && _ != null && !u.hasOwnProperty(j))
          )
            switch (j) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ht(t, e, j, null, u, _);
            }
        for (d in u)
          if (
            ((_ = u[d]),
            (p = l[d]),
            u.hasOwnProperty(d) && _ !== p && (_ != null || p != null))
          )
            switch (d) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                ht(t, e, d, _, u, p);
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
        for (var J in l)
          (_ = l[J]),
            l.hasOwnProperty(J) &&
              _ != null &&
              !u.hasOwnProperty(J) &&
              ht(t, e, J, null, u, _);
        for (m in u)
          if (
            ((_ = u[m]),
            (p = l[m]),
            u.hasOwnProperty(m) && _ !== p && (_ != null || p != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(137, e));
                break;
              default:
                ht(t, e, m, _, u, p);
            }
        return;
      default:
        if (Di(e)) {
          for (var Dt in l)
            (_ = l[Dt]),
              l.hasOwnProperty(Dt) &&
                _ !== void 0 &&
                !u.hasOwnProperty(Dt) &&
                of(t, e, Dt, void 0, u, _);
          for (A in u)
            (_ = u[A]),
              (p = l[A]),
              !u.hasOwnProperty(A) ||
                _ === p ||
                (_ === void 0 && p === void 0) ||
                of(t, e, A, _, u, p);
          return;
        }
    }
    for (var g in l)
      (_ = l[g]),
        l.hasOwnProperty(g) &&
          _ != null &&
          !u.hasOwnProperty(g) &&
          ht(t, e, g, null, u, _);
    for (O in u)
      (_ = u[O]),
        (p = l[O]),
        !u.hasOwnProperty(O) ||
          _ === p ||
          (_ == null && p == null) ||
          ht(t, e, O, _, u, p);
  }
  var df = null,
    yf = null;
  function Vn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function hf(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function hh() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === vf
        ? !1
        : ((vf = t), !0)
      : ((vf = null), !1);
  }
  var od = typeof setTimeout == "function" ? setTimeout : void 0,
    vh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dd = typeof Promise == "function" ? Promise : void 0,
    mh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof dd < "u"
          ? function (t) {
              return dd.resolve(null).then(t).catch(gh);
            }
          : od;
  function gh(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function mf(t, e) {
    var l = e,
      u = 0;
    do {
      var a = l.nextSibling;
      if ((t.removeChild(l), a && a.nodeType === 8))
        if (((l = a.data), l === "/$")) {
          if (u === 0) {
            t.removeChild(a), Ba(e);
            return;
          }
          u--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || u++;
      l = a;
    } while (l);
    Ba(e);
  }
  function gf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gf(l), pi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Sh(t, e, l, u) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (u) {
        if (!t[Vu])
          switch (e) {
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
      } else if (e === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = De(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function bh(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = De(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function De(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function yd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function hd(t, e, l) {
    switch (((e = Vn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  var Te = new Map(),
    vd = new Set();
  function Kn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var tl = H.d;
  H.d = { f: _h, r: Eh, D: Th, C: ph, L: Ah, m: zh, X: Oh, S: Dh, M: Mh };
  function _h() {
    var t = tl.f(),
      e = Yn();
    return t || e;
  }
  function Eh(t) {
    var e = uu(t);
    e !== null && e.tag === 5 && e.type === "form" ? Qs(e) : tl.r(t);
  }
  var Cu = typeof document > "u" ? null : document;
  function md(t, e, l) {
    var u = Cu;
    if (u && typeof e == "string" && e) {
      var a = de(e);
      (a = 'link[rel="' + t + '"][href="' + a + '"]'),
        typeof l == "string" && (a += '[crossorigin="' + l + '"]'),
        vd.has(a) ||
          (vd.add(a),
          (t = { rel: t, crossOrigin: l, href: e }),
          u.querySelector(a) === null &&
            ((e = u.createElement("link")),
            Zt(e, "link", t),
            qt(e),
            u.head.appendChild(e)));
    }
  }
  function Th(t) {
    tl.D(t), md("dns-prefetch", t, null);
  }
  function ph(t, e) {
    tl.C(t, e), md("preconnect", t, e);
  }
  function Ah(t, e, l) {
    tl.L(t, e, l);
    var u = Cu;
    if (u && t && e) {
      var a = 'link[rel="preload"][as="' + de(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + de(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (a += '[imagesizes="' + de(l.imageSizes) + '"]'))
        : (a += '[href="' + de(t) + '"]');
      var n = a;
      switch (e) {
        case "style":
          n = ju(t);
          break;
        case "script":
          n = qu(t);
      }
      Te.has(n) ||
        ((t = it(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        Te.set(n, t),
        u.querySelector(a) !== null ||
          (e === "style" && u.querySelector(Ua(n))) ||
          (e === "script" && u.querySelector(Na(n))) ||
          ((e = u.createElement("link")),
          Zt(e, "link", t),
          qt(e),
          u.head.appendChild(e)));
    }
  }
  function zh(t, e) {
    tl.m(t, e);
    var l = Cu;
    if (l && t) {
      var u = e && typeof e.as == "string" ? e.as : "script",
        a =
          'link[rel="modulepreload"][as="' + de(u) + '"][href="' + de(t) + '"]',
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
        !Te.has(n) &&
        ((t = it({ rel: "modulepreload", href: t }, e)),
        Te.set(n, t),
        l.querySelector(a) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Na(n))) return;
        }
        (u = l.createElement("link")),
          Zt(u, "link", t),
          qt(u),
          l.head.appendChild(u);
      }
    }
  }
  function Dh(t, e, l) {
    tl.S(t, e, l);
    var u = Cu;
    if (u && t) {
      var a = au(u).hoistableStyles,
        n = ju(t);
      e = e || "default";
      var c = a.get(n);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = u.querySelector(Ua(n)))) s.loading = 5;
        else {
          (t = it({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Te.get(n)) && Sf(t, l);
          var d = (c = u.createElement("link"));
          qt(d),
            Zt(d, "link", t),
            (d._p = new Promise(function (m, A) {
              (d.onload = m), (d.onerror = A);
            })),
            d.addEventListener("load", function () {
              s.loading |= 1;
            }),
            d.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Jn(c, e, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: s }),
          a.set(n, c);
      }
    }
  }
  function Oh(t, e) {
    tl.X(t, e);
    var l = Cu;
    if (l && t) {
      var u = au(l).hoistableScripts,
        a = qu(t),
        n = u.get(a);
      n ||
        ((n = l.querySelector(Na(a))),
        n ||
          ((t = it({ src: t, async: !0 }, e)),
          (e = Te.get(a)) && bf(t, e),
          (n = l.createElement("script")),
          qt(n),
          Zt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function Mh(t, e) {
    tl.M(t, e);
    var l = Cu;
    if (l && t) {
      var u = au(l).hoistableScripts,
        a = qu(t),
        n = u.get(a);
      n ||
        ((n = l.querySelector(Na(a))),
        n ||
          ((t = it({ src: t, async: !0, type: "module" }, e)),
          (e = Te.get(a)) && bf(t, e),
          (n = l.createElement("script")),
          qt(n),
          Zt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(a, n));
    }
  }
  function gd(t, e, l, u) {
    var a = (a = ul.current) ? Kn(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = ju(l.href)),
            (l = au(a).hoistableStyles),
            (u = l.get(e)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = ju(l.href);
          var n = au(a).hoistableStyles,
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
              (n = a.querySelector(Ua(t))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Te.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Te.set(t, l),
                n || Rh(a, t, l, c.state))),
            e && u === null)
          )
            throw Error(r(528, ""));
          return c;
        }
        if (e && u !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = qu(l)),
              (l = au(a).hoistableScripts),
              (u = l.get(e)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ju(t) {
    return 'href="' + de(t) + '"';
  }
  function Ua(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Sd(t) {
    return it({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Rh(t, e, l, u) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (u.loading = 1)
      : ((e = t.createElement("link")),
        (u.preload = e),
        e.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Zt(e, "link", l),
        qt(e),
        t.head.appendChild(e));
  }
  function qu(t) {
    return '[src="' + de(t) + '"]';
  }
  function Na(t) {
    return "script[async]" + t;
  }
  function bd(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var u = t.querySelector('style[data-href~="' + de(l.href) + '"]');
          if (u) return (e.instance = u), qt(u), u;
          var a = it({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (t.ownerDocument || t).createElement("style")),
            qt(u),
            Zt(u, "style", a),
            Jn(u, l.precedence, t),
            (e.instance = u)
          );
        case "stylesheet":
          a = ju(l.href);
          var n = t.querySelector(Ua(a));
          if (n) return (e.state.loading |= 4), (e.instance = n), qt(n), n;
          (u = Sd(l)),
            (a = Te.get(a)) && Sf(u, a),
            (n = (t.ownerDocument || t).createElement("link")),
            qt(n);
          var c = n;
          return (
            (c._p = new Promise(function (s, d) {
              (c.onload = s), (c.onerror = d);
            })),
            Zt(n, "link", u),
            (e.state.loading |= 4),
            Jn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = qu(l.src)),
            (a = t.querySelector(Na(n)))
              ? ((e.instance = a), qt(a), a)
              : ((u = l),
                (a = Te.get(n)) && ((u = it({}, l)), bf(u, a)),
                (t = t.ownerDocument || t),
                (a = t.createElement("script")),
                qt(a),
                Zt(a, "link", u),
                t.head.appendChild(a),
                (e.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((u = e.instance), (e.state.loading |= 4), Jn(u, l.precedence, t));
    return e.instance;
  }
  function Jn(t, e, l) {
    for (
      var u = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = u.length ? u[u.length - 1] : null,
        n = a,
        c = 0;
      c < u.length;
      c++
    ) {
      var s = u[c];
      if (s.dataset.precedence === e) n = s;
      else if (n !== a) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function bf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var kn = null;
  function _d(t, e, l) {
    if (kn === null) {
      var u = new Map(),
        a = (kn = new Map());
      a.set(l, u);
    } else (a = kn), (u = a.get(l)), u || ((u = new Map()), a.set(l, u));
    if (u.has(t)) return u;
    for (
      u.set(t, null), l = l.getElementsByTagName(t), a = 0;
      a < l.length;
      a++
    ) {
      var n = l[a];
      if (
        !(
          n[Vu] ||
          n[Lt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(e) || "";
        c = t + c;
        var s = u.get(c);
        s ? s.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function Ed(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function Uh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Td(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var xa = null;
  function Nh() {}
  function xh(t, e, l) {
    if (xa === null) throw Error(r(475));
    var u = xa;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var a = ju(l.href),
          n = t.querySelector(Ua(a));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (u.count++, (u = $n.bind(u)), t.then(u, u)),
            (e.state.loading |= 4),
            (e.instance = n),
            qt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (l = Sd(l)),
          (a = Te.get(a)) && Sf(l, a),
          (n = n.createElement("link")),
          qt(n);
        var c = n;
        (c._p = new Promise(function (s, d) {
          (c.onload = s), (c.onerror = d);
        })),
          Zt(n, "link", l),
          (e.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (u.count++,
          (e = $n.bind(u)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Hh() {
    if (xa === null) throw Error(r(475));
    var t = xa;
    return (
      t.stylesheets && t.count === 0 && _f(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && _f(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function $n() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) _f(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Wn = null;
  function _f(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Wn = new Map()),
        e.forEach(Ch, t),
        (Wn = null),
        $n.call(t));
  }
  function Ch(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Wn.get(t);
      if (l) var u = l.get(null);
      else {
        (l = new Map()), Wn.set(t, l);
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
            (l.set(c.dataset.precedence, c), (u = c));
        }
        u && l.set(null, u);
      }
      (a = e.instance),
        (c = a.getAttribute("data-precedence")),
        (n = l.get(c) || u),
        n === u && l.set(null, a),
        l.set(c, a),
        this.count++,
        (u = $n.bind(this)),
        a.addEventListener("load", u),
        a.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(a, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(a, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Ha = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: at,
    _currentValue2: at,
    _threadCount: 0,
  };
  function jh(t, e, l, u, a, n, c, s) {
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
      (this.expirationTimes = Ei(-1)),
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
      (this.entanglements = Ei(0)),
      (this.hiddenUpdates = Ei(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = a),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function pd(t, e, l, u, a, n, c, s, d, m, A, O) {
    return (
      (t = new jh(t, e, l, c, s, d, m, O)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = _e(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = Fi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: u, isDehydrated: l, cache: e }),
      Nc(n),
      t
    );
  }
  function Ad(t) {
    return t ? ((t = hu), t) : hu;
  }
  function zd(t, e, l, u, a, n) {
    (a = Ad(a)),
      u.context === null ? (u.context = a) : (u.pendingContext = a),
      (u = hl(e)),
      (u.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (l = vl(t, u, e)),
      l !== null && ($t(l, t, e), ma(l, t, e));
  }
  function Dd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ef(t, e) {
    Dd(t, e), (t = t.alternate) && Dd(t, e);
  }
  function Od(t) {
    if (t.tag === 13) {
      var e = cl(t, 67108864);
      e !== null && $t(e, t, 67108864), Ef(t, 67108864);
    }
  }
  var Fn = !0;
  function qh(t, e, l, u) {
    var a = X.T;
    X.T = null;
    var n = H.p;
    try {
      (H.p = 2), Tf(t, e, l, u);
    } finally {
      (H.p = n), (X.T = a);
    }
  }
  function Bh(t, e, l, u) {
    var a = X.T;
    X.T = null;
    var n = H.p;
    try {
      (H.p = 8), Tf(t, e, l, u);
    } finally {
      (H.p = n), (X.T = a);
    }
  }
  function Tf(t, e, l, u) {
    if (Fn) {
      var a = pf(u);
      if (a === null) sf(t, e, u, Pn, l), Rd(t, u);
      else if (Gh(a, t, e, l, u)) u.stopPropagation();
      else if ((Rd(t, u), e & 4 && -1 < Yh.indexOf(t))) {
        for (; a !== null; ) {
          var n = uu(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Rl(n.pendingLanes);
                  if (c !== 0) {
                    var s = n;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var d = 1 << (31 - le(c));
                      (s.entanglements[1] |= d), (c &= ~d);
                    }
                    je(n), (pt & 6) === 0 && ((jn = Ue() + 500), Oa(0));
                  }
                }
                break;
              case 13:
                (s = cl(n, 2)), s !== null && $t(s, n, 2), Yn(), Ef(n, 2);
            }
          if (((n = pf(u)), n === null && sf(t, e, u, Pn, l), n === a)) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else sf(t, e, u, null, l);
    }
  }
  function pf(t) {
    return (t = Mi(t)), Af(t);
  }
  var Pn = null;
  function Af(t) {
    if (((Pn = null), (t = Ul(t)), t !== null)) {
      var e = L(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = mt(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Pn = t), null;
  }
  function Md(t) {
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
        switch (p0()) {
          case Ff:
            return 2;
          case Pf:
            return 8;
          case Ka:
          case A0:
            return 32;
          case If:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zf = !1,
    Tl = null,
    pl = null,
    Al = null,
    Ca = new Map(),
    ja = new Map(),
    zl = [],
    Yh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Rd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Tl = null;
        break;
      case "dragenter":
      case "dragleave":
        pl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        Ca.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ja.delete(e.pointerId);
    }
  }
  function qa(t, e, l, u, a, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [a],
        }),
        e !== null && ((e = uu(e)), e !== null && Od(e)),
        t)
      : ((t.eventSystemFlags |= u),
        (e = t.targetContainers),
        a !== null && e.indexOf(a) === -1 && e.push(a),
        t);
  }
  function Gh(t, e, l, u, a) {
    switch (e) {
      case "focusin":
        return (Tl = qa(Tl, t, e, l, u, a)), !0;
      case "dragenter":
        return (pl = qa(pl, t, e, l, u, a)), !0;
      case "mouseover":
        return (Al = qa(Al, t, e, l, u, a)), !0;
      case "pointerover":
        var n = a.pointerId;
        return Ca.set(n, qa(Ca.get(n) || null, t, e, l, u, a)), !0;
      case "gotpointercapture":
        return (
          (n = a.pointerId), ja.set(n, qa(ja.get(n) || null, t, e, l, u, a)), !0
        );
    }
    return !1;
  }
  function Ud(t) {
    var e = Ul(t.target);
    if (e !== null) {
      var l = L(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = mt(l)), e !== null)) {
            (t.blockedOn = e),
              H0(t.priority, function () {
                if (l.tag === 13) {
                  var u = ce(),
                    a = cl(l, u);
                  a !== null && $t(a, l, u), Ef(l, u);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function In(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = pf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var u = new l.constructor(l.type, l);
        (Oi = u), l.target.dispatchEvent(u), (Oi = null);
      } else return (e = uu(l)), e !== null && Od(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function Nd(t, e, l) {
    In(t) && l.delete(e);
  }
  function Xh() {
    (zf = !1),
      Tl !== null && In(Tl) && (Tl = null),
      pl !== null && In(pl) && (pl = null),
      Al !== null && In(Al) && (Al = null),
      Ca.forEach(Nd),
      ja.forEach(Nd);
  }
  function ti(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      zf ||
        ((zf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Xh)));
  }
  var ei = null;
  function xd(t) {
    ei !== t &&
      ((ei = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        ei === t && (ei = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            u = t[e + 1],
            a = t[e + 2];
          if (typeof u != "function") {
            if (Af(u || l) === null) continue;
            break;
          }
          var n = uu(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            yc(n, { pending: !0, data: a, method: l.method, action: u }, u, a));
        }
      }));
  }
  function Ba(t) {
    function e(d) {
      return ti(d, t);
    }
    Tl !== null && ti(Tl, t),
      pl !== null && ti(pl, t),
      Al !== null && ti(Al, t),
      Ca.forEach(e),
      ja.forEach(e);
    for (var l = 0; l < zl.length; l++) {
      var u = zl[l];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < zl.length && ((l = zl[0]), l.blockedOn === null); )
      Ud(l), l.blockedOn === null && zl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (u = 0; u < l.length; u += 3) {
        var a = l[u],
          n = l[u + 1],
          c = a[Pt] || null;
        if (typeof n == "function") c || xd(l);
        else if (c) {
          var s = null;
          if (n && n.hasAttribute("formAction")) {
            if (((a = n), (c = n[Pt] || null))) s = c.formAction;
            else if (Af(a) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? (l[u + 1] = s) : (l.splice(u, 3), (u -= 3)),
            xd(l);
        }
      }
  }
  function Df(t) {
    this._internalRoot = t;
  }
  (li.prototype.render = Df.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        u = ce();
      zd(l, u, t, e, null, null);
    }),
    (li.prototype.unmount = Df.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Nu(),
            zd(t.current, 2, null, t, null, null),
            Yn(),
            (e[lu] = null);
        }
      });
  function li(t) {
    this._internalRoot = t;
  }
  li.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = nr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < zl.length && e !== 0 && e < zl[l].priority; l++);
      zl.splice(l, 0, t), l === 0 && Ud(t);
    }
  };
  var Hd = f.version;
  if (Hd !== "19.0.0") throw Error(r(527, Hd, "19.0.0"));
  H.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = R(e)),
      (t = t !== null ? w(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Qh = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    findFiberByHostInstance: Ul,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ui.isDisabled && ui.supportsFiber)
      try {
        (Zu = ui.inject(Qh)), (ee = ui);
      } catch {}
  }
  return (
    (Ga.createRoot = function (t, e) {
      if (!h(t)) throw Error(r(299));
      var l = !1,
        u = "",
        a = $s,
        n = Ws,
        c = Fs,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (s = e.unstable_transitionCallbacks)),
        (e = pd(t, 1, !1, null, null, l, u, a, n, c, s, null)),
        (t[lu] = e.current),
        rf(t.nodeType === 8 ? t.parentNode : t),
        new Df(e)
      );
    }),
    (Ga.hydrateRoot = function (t, e, l) {
      if (!h(t)) throw Error(r(299));
      var u = !1,
        a = "",
        n = $s,
        c = Ws,
        s = Fs,
        d = null,
        m = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (u = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (d = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (m = l.formState)),
        (e = pd(t, 1, !0, e, l ?? null, u, a, n, c, s, d, m)),
        (e.context = Ad(null)),
        (l = e.current),
        (u = ce()),
        (a = hl(u)),
        (a.callback = null),
        vl(l, a, u),
        (e.current.lanes = u),
        Lu(e, u),
        je(e),
        (t[lu] = e.current),
        rf(t),
        new li(e)
      );
    }),
    (Ga.version = "19.0.0"),
    Ga
  );
}
var wd;
function Fh() {
  if (wd) return Rf.exports;
  wd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (f) {
        console.error(f);
      }
  }
  return i(), (Rf.exports = Wh()), Rf.exports;
}
var Ph = Fh();
const Ih = "_container_1c26z_1",
  tv = "_content_1c26z_20",
  Ld = { container: Ih, content: tv };
var Hf = { exports: {} },
  Cf = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function ev() {
  if (Vd) return Cf;
  Vd = 1;
  var i = di();
  function f(T, b) {
    return (T === b && (T !== 0 || 1 / T === 1 / b)) || (T !== T && b !== b);
  }
  var o = typeof Object.is == "function" ? Object.is : f,
    r = i.useSyncExternalStore,
    h = i.useRef,
    E = i.useEffect,
    z = i.useMemo,
    M = i.useDebugValue;
  return (
    (Cf.useSyncExternalStoreWithSelector = function (T, b, U, x, G) {
      var V = h(null);
      if (V.current === null) {
        var F = { hasValue: !1, value: null };
        V.current = F;
      } else F = V.current;
      V = z(
        function () {
          function K(B) {
            if (!dt) {
              if (
                ((dt = !0), (rt = B), (B = x(B)), G !== void 0 && F.hasValue)
              ) {
                var st = F.value;
                if (G(st, B)) return (k = st);
              }
              return (k = B);
            }
            if (((st = k), o(rt, B))) return st;
            var Ot = x(B);
            return G !== void 0 && G(st, Ot)
              ? ((rt = B), st)
              : ((rt = B), (k = Ot));
          }
          var dt = !1,
            rt,
            k,
            lt = U === void 0 ? null : U;
          return [
            function () {
              return K(b());
            },
            lt === null
              ? void 0
              : function () {
                  return K(lt());
                },
          ];
        },
        [b, U, x, G],
      );
      var bt = r(T, V[0], V[1]);
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
    Cf
  );
}
var Kd;
function lv() {
  return Kd || ((Kd = 1), (Hf.exports = ev())), Hf.exports;
}
var uv = lv();
function av(i) {
  i();
}
function nv() {
  let i = null,
    f = null;
  return {
    clear() {
      (i = null), (f = null);
    },
    notify() {
      av(() => {
        let o = i;
        for (; o; ) o.callback(), (o = o.next);
      });
    },
    get() {
      const o = [];
      let r = i;
      for (; r; ) o.push(r), (r = r.next);
      return o;
    },
    subscribe(o) {
      let r = !0;
      const h = (f = { callback: o, next: null, prev: f });
      return (
        h.prev ? (h.prev.next = h) : (i = h),
        function () {
          !r ||
            i === null ||
            ((r = !1),
            h.next ? (h.next.prev = h.prev) : (f = h.prev),
            h.prev ? (h.prev.next = h.next) : (i = h.next));
        }
      );
    },
  };
}
var Jd = { notify() {}, get: () => [] };
function iv(i, f) {
  let o,
    r = Jd,
    h = 0,
    E = !1;
  function z(bt) {
    U();
    const K = r.subscribe(bt);
    let dt = !1;
    return () => {
      dt || ((dt = !0), K(), x());
    };
  }
  function M() {
    r.notify();
  }
  function T() {
    F.onStateChange && F.onStateChange();
  }
  function b() {
    return E;
  }
  function U() {
    h++, o || ((o = i.subscribe(T)), (r = nv()));
  }
  function x() {
    h--, o && h === 0 && (o(), (o = void 0), r.clear(), (r = Jd));
  }
  function G() {
    E || ((E = !0), U());
  }
  function V() {
    E && ((E = !1), x());
  }
  const F = {
    addNestedSub: z,
    notifyNestedSubs: M,
    handleChangeWrapper: T,
    isSubscribed: b,
    trySubscribe: G,
    tryUnsubscribe: V,
    getListeners: () => r,
  };
  return F;
}
var cv = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fv = cv(),
  rv = () => typeof navigator < "u" && navigator.product === "ReactNative",
  sv = rv(),
  ov = () => (fv || sv ? Rt.useLayoutEffect : Rt.useEffect),
  dv = ov(),
  jf = Symbol.for("react-redux-context"),
  qf = typeof globalThis < "u" ? globalThis : {};
function yv() {
  if (!Rt.createContext) return {};
  const i = qf[jf] ?? (qf[jf] = new Map());
  let f = i.get(Rt.createContext);
  return f || ((f = Rt.createContext(null)), i.set(Rt.createContext, f)), f;
}
var Ml = yv();
function hv(i) {
  const { children: f, context: o, serverState: r, store: h } = i,
    E = Rt.useMemo(() => {
      const T = iv(h);
      return {
        store: h,
        subscription: T,
        getServerState: r ? () => r : void 0,
      };
    }, [h, r]),
    z = Rt.useMemo(() => h.getState(), [h]);
  dv(() => {
    const { subscription: T } = E;
    return (
      (T.onStateChange = T.notifyNestedSubs),
      T.trySubscribe(),
      z !== h.getState() && T.notifyNestedSubs(),
      () => {
        T.tryUnsubscribe(), (T.onStateChange = void 0);
      }
    );
  }, [E, z]);
  const M = o || Ml;
  return Rt.createElement(M.Provider, { value: E }, f);
}
var vv = hv;
function Jf(i = Ml) {
  return function () {
    return Rt.useContext(i);
  };
}
var n0 = Jf();
function i0(i = Ml) {
  const f = i === Ml ? n0 : Jf(i),
    o = () => {
      const { store: r } = f();
      return r;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var mv = i0();
function gv(i = Ml) {
  const f = i === Ml ? mv : i0(i),
    o = () => f().dispatch;
  return Object.assign(o, { withTypes: () => o }), o;
}
var Xu = gv(),
  Sv = (i, f) => i === f;
function bv(i = Ml) {
  const f = i === Ml ? n0 : Jf(i),
    o = (r, h = {}) => {
      const { equalityFn: E = Sv } =
          typeof h == "function" ? { equalityFn: h } : h,
        z = f(),
        { store: M, subscription: T, getServerState: b } = z;
      Rt.useRef(!0);
      const U = Rt.useCallback(
          {
            [r.name](G) {
              return r(G);
            },
          }[r.name],
          [r],
        ),
        x = uv.useSyncExternalStoreWithSelector(
          T.addNestedSub,
          M.getState,
          b || M.getState,
          U,
          E,
        );
      return Rt.useDebugValue(x), x;
    };
  return Object.assign(o, { withTypes: () => o }), o;
}
var Yu = bv();
function wt(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var _v = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  kd = _v,
  Bf = () => Math.random().toString(36).substring(7).split("").join("."),
  Ev = {
    INIT: `@@redux/INIT${Bf()}`,
    REPLACE: `@@redux/REPLACE${Bf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bf()}`,
  },
  ci = Ev;
function kf(i) {
  if (typeof i != "object" || i === null) return !1;
  let f = i;
  for (; Object.getPrototypeOf(f) !== null; ) f = Object.getPrototypeOf(f);
  return Object.getPrototypeOf(i) === f || Object.getPrototypeOf(i) === null;
}
function c0(i, f, o) {
  if (typeof i != "function") throw new Error(wt(2));
  if (
    (typeof f == "function" && typeof o == "function") ||
    (typeof o == "function" && typeof arguments[3] == "function")
  )
    throw new Error(wt(0));
  if (
    (typeof f == "function" && typeof o > "u" && ((o = f), (f = void 0)),
    typeof o < "u")
  ) {
    if (typeof o != "function") throw new Error(wt(1));
    return o(c0)(i, f);
  }
  let r = i,
    h = f,
    E = new Map(),
    z = E,
    M = 0,
    T = !1;
  function b() {
    z === E &&
      ((z = new Map()),
      E.forEach((K, dt) => {
        z.set(dt, K);
      }));
  }
  function U() {
    if (T) throw new Error(wt(3));
    return h;
  }
  function x(K) {
    if (typeof K != "function") throw new Error(wt(4));
    if (T) throw new Error(wt(5));
    let dt = !0;
    b();
    const rt = M++;
    return (
      z.set(rt, K),
      function () {
        if (dt) {
          if (T) throw new Error(wt(6));
          (dt = !1), b(), z.delete(rt), (E = null);
        }
      }
    );
  }
  function G(K) {
    if (!kf(K)) throw new Error(wt(7));
    if (typeof K.type > "u") throw new Error(wt(8));
    if (typeof K.type != "string") throw new Error(wt(17));
    if (T) throw new Error(wt(9));
    try {
      (T = !0), (h = r(h, K));
    } finally {
      T = !1;
    }
    return (
      (E = z).forEach((rt) => {
        rt();
      }),
      K
    );
  }
  function V(K) {
    if (typeof K != "function") throw new Error(wt(10));
    (r = K), G({ type: ci.REPLACE });
  }
  function F() {
    const K = x;
    return {
      subscribe(dt) {
        if (typeof dt != "object" || dt === null) throw new Error(wt(11));
        function rt() {
          const lt = dt;
          lt.next && lt.next(U());
        }
        return rt(), { unsubscribe: K(rt) };
      },
      [kd]() {
        return this;
      },
    };
  }
  return (
    G({ type: ci.INIT }),
    { dispatch: G, subscribe: x, getState: U, replaceReducer: V, [kd]: F }
  );
}
function Tv(i) {
  Object.keys(i).forEach((f) => {
    const o = i[f];
    if (typeof o(void 0, { type: ci.INIT }) > "u") throw new Error(wt(12));
    if (typeof o(void 0, { type: ci.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(wt(13));
  });
}
function pv(i) {
  const f = Object.keys(i),
    o = {};
  for (let E = 0; E < f.length; E++) {
    const z = f[E];
    typeof i[z] == "function" && (o[z] = i[z]);
  }
  const r = Object.keys(o);
  let h;
  try {
    Tv(o);
  } catch (E) {
    h = E;
  }
  return function (z = {}, M) {
    if (h) throw h;
    let T = !1;
    const b = {};
    for (let U = 0; U < r.length; U++) {
      const x = r[U],
        G = o[x],
        V = z[x],
        F = G(V, M);
      if (typeof F > "u") throw (M && M.type, new Error(wt(14)));
      (b[x] = F), (T = T || F !== V);
    }
    return (T = T || r.length !== Object.keys(z).length), T ? b : z;
  };
}
function fi(...i) {
  return i.length === 0
    ? (f) => f
    : i.length === 1
      ? i[0]
      : i.reduce(
          (f, o) =>
            (...r) =>
              f(o(...r)),
        );
}
function Av(...i) {
  return (f) => (o, r) => {
    const h = f(o, r);
    let E = () => {
      throw new Error(wt(15));
    };
    const z = { getState: h.getState, dispatch: (T, ...b) => E(T, ...b) },
      M = i.map((T) => T(z));
    return (E = fi(...M)(h.dispatch)), { ...h, dispatch: E };
  };
}
function zv(i) {
  return kf(i) && "type" in i && typeof i.type == "string";
}
var f0 = Symbol.for("immer-nothing"),
  $d = Symbol.for("immer-draftable"),
  re = Symbol.for("immer-state");
function Oe(i, ...f) {
  throw new Error(
    `[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Gu = Object.getPrototypeOf;
function Il(i) {
  return !!i && !!i[re];
}
function ll(i) {
  var f;
  return i
    ? r0(i) ||
        Array.isArray(i) ||
        !!i[$d] ||
        !!((f = i.constructor) != null && f[$d]) ||
        hi(i) ||
        vi(i)
    : !1;
}
var Dv = Object.prototype.constructor.toString();
function r0(i) {
  if (!i || typeof i != "object") return !1;
  const f = Gu(i);
  if (f === null) return !0;
  const o = Object.hasOwnProperty.call(f, "constructor") && f.constructor;
  return o === Object
    ? !0
    : typeof o == "function" && Function.toString.call(o) === Dv;
}
function ri(i, f) {
  yi(i) === 0
    ? Reflect.ownKeys(i).forEach((o) => {
        f(o, i[o], i);
      })
    : i.forEach((o, r) => f(r, o, i));
}
function yi(i) {
  const f = i[re];
  return f ? f.type_ : Array.isArray(i) ? 1 : hi(i) ? 2 : vi(i) ? 3 : 0;
}
function Qf(i, f) {
  return yi(i) === 2 ? i.has(f) : Object.prototype.hasOwnProperty.call(i, f);
}
function s0(i, f, o) {
  const r = yi(i);
  r === 2 ? i.set(f, o) : r === 3 ? i.add(o) : (i[f] = o);
}
function Ov(i, f) {
  return i === f ? i !== 0 || 1 / i === 1 / f : i !== i && f !== f;
}
function hi(i) {
  return i instanceof Map;
}
function vi(i) {
  return i instanceof Set;
}
function Pl(i) {
  return i.copy_ || i.base_;
}
function Zf(i, f) {
  if (hi(i)) return new Map(i);
  if (vi(i)) return new Set(i);
  if (Array.isArray(i)) return Array.prototype.slice.call(i);
  const o = r0(i);
  if (f === !0 || (f === "class_only" && !o)) {
    const r = Object.getOwnPropertyDescriptors(i);
    delete r[re];
    let h = Reflect.ownKeys(r);
    for (let E = 0; E < h.length; E++) {
      const z = h[E],
        M = r[z];
      M.writable === !1 && ((M.writable = !0), (M.configurable = !0)),
        (M.get || M.set) &&
          (r[z] = {
            configurable: !0,
            writable: !0,
            enumerable: M.enumerable,
            value: i[z],
          });
    }
    return Object.create(Gu(i), r);
  } else {
    const r = Gu(i);
    if (r !== null && o) return { ...i };
    const h = Object.create(r);
    return Object.assign(h, i);
  }
}
function $f(i, f = !1) {
  return (
    mi(i) ||
      Il(i) ||
      !ll(i) ||
      (yi(i) > 1 && (i.set = i.add = i.clear = i.delete = Mv),
      Object.freeze(i),
      f && Object.entries(i).forEach(([o, r]) => $f(r, !0))),
    i
  );
}
function Mv() {
  Oe(2);
}
function mi(i) {
  return Object.isFrozen(i);
}
var Rv = {};
function tu(i) {
  const f = Rv[i];
  return f || Oe(0, i), f;
}
var Qa;
function o0() {
  return Qa;
}
function Uv(i, f) {
  return {
    drafts_: [],
    parent_: i,
    immer_: f,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Wd(i, f) {
  f &&
    (tu("Patches"),
    (i.patches_ = []),
    (i.inversePatches_ = []),
    (i.patchListener_ = f));
}
function wf(i) {
  Lf(i), i.drafts_.forEach(Nv), (i.drafts_ = null);
}
function Lf(i) {
  i === Qa && (Qa = i.parent_);
}
function Fd(i) {
  return (Qa = Uv(Qa, i));
}
function Nv(i) {
  const f = i[re];
  f.type_ === 0 || f.type_ === 1 ? f.revoke_() : (f.revoked_ = !0);
}
function Pd(i, f) {
  f.unfinalizedDrafts_ = f.drafts_.length;
  const o = f.drafts_[0];
  return (
    i !== void 0 && i !== o
      ? (o[re].modified_ && (wf(f), Oe(4)),
        ll(i) && ((i = si(f, i)), f.parent_ || oi(f, i)),
        f.patches_ &&
          tu("Patches").generateReplacementPatches_(
            o[re].base_,
            i,
            f.patches_,
            f.inversePatches_,
          ))
      : (i = si(f, o, [])),
    wf(f),
    f.patches_ && f.patchListener_(f.patches_, f.inversePatches_),
    i !== f0 ? i : void 0
  );
}
function si(i, f, o) {
  if (mi(f)) return f;
  const r = f[re];
  if (!r) return ri(f, (h, E) => Id(i, r, f, h, E, o)), f;
  if (r.scope_ !== i) return f;
  if (!r.modified_) return oi(i, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const h = r.copy_;
    let E = h,
      z = !1;
    r.type_ === 3 && ((E = new Set(h)), h.clear(), (z = !0)),
      ri(E, (M, T) => Id(i, r, h, M, T, o, z)),
      oi(i, h, !1),
      o &&
        i.patches_ &&
        tu("Patches").generatePatches_(r, o, i.patches_, i.inversePatches_);
  }
  return r.copy_;
}
function Id(i, f, o, r, h, E, z) {
  if (Il(h)) {
    const M =
        E && f && f.type_ !== 3 && !Qf(f.assigned_, r) ? E.concat(r) : void 0,
      T = si(i, h, M);
    if ((s0(o, r, T), Il(T))) i.canAutoFreeze_ = !1;
    else return;
  } else z && o.add(h);
  if (ll(h) && !mi(h)) {
    if (!i.immer_.autoFreeze_ && i.unfinalizedDrafts_ < 1) return;
    si(i, h),
      (!f || !f.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(o, r) &&
        oi(i, h);
  }
}
function oi(i, f, o = !1) {
  !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && $f(f, o);
}
function xv(i, f) {
  const o = Array.isArray(i),
    r = {
      type_: o ? 1 : 0,
      scope_: f ? f.scope_ : o0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: f,
      base_: i,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let h = r,
    E = Wf;
  o && ((h = [r]), (E = Za));
  const { revoke: z, proxy: M } = Proxy.revocable(h, E);
  return (r.draft_ = M), (r.revoke_ = z), M;
}
var Wf = {
    get(i, f) {
      if (f === re) return i;
      const o = Pl(i);
      if (!Qf(o, f)) return Hv(i, o, f);
      const r = o[f];
      return i.finalized_ || !ll(r)
        ? r
        : r === Yf(i.base_, f)
          ? (Gf(i), (i.copy_[f] = Kf(r, i)))
          : r;
    },
    has(i, f) {
      return f in Pl(i);
    },
    ownKeys(i) {
      return Reflect.ownKeys(Pl(i));
    },
    set(i, f, o) {
      const r = d0(Pl(i), f);
      if (r != null && r.set) return r.set.call(i.draft_, o), !0;
      if (!i.modified_) {
        const h = Yf(Pl(i), f),
          E = h == null ? void 0 : h[re];
        if (E && E.base_ === o)
          return (i.copy_[f] = o), (i.assigned_[f] = !1), !0;
        if (Ov(o, h) && (o !== void 0 || Qf(i.base_, f))) return !0;
        Gf(i), Vf(i);
      }
      return (
        (i.copy_[f] === o && (o !== void 0 || f in i.copy_)) ||
          (Number.isNaN(o) && Number.isNaN(i.copy_[f])) ||
          ((i.copy_[f] = o), (i.assigned_[f] = !0)),
        !0
      );
    },
    deleteProperty(i, f) {
      return (
        Yf(i.base_, f) !== void 0 || f in i.base_
          ? ((i.assigned_[f] = !1), Gf(i), Vf(i))
          : delete i.assigned_[f],
        i.copy_ && delete i.copy_[f],
        !0
      );
    },
    getOwnPropertyDescriptor(i, f) {
      const o = Pl(i),
        r = Reflect.getOwnPropertyDescriptor(o, f);
      return (
        r && {
          writable: !0,
          configurable: i.type_ !== 1 || f !== "length",
          enumerable: r.enumerable,
          value: o[f],
        }
      );
    },
    defineProperty() {
      Oe(11);
    },
    getPrototypeOf(i) {
      return Gu(i.base_);
    },
    setPrototypeOf() {
      Oe(12);
    },
  },
  Za = {};
ri(Wf, (i, f) => {
  Za[i] = function () {
    return (arguments[0] = arguments[0][0]), f.apply(this, arguments);
  };
});
Za.deleteProperty = function (i, f) {
  return Za.set.call(this, i, f, void 0);
};
Za.set = function (i, f, o) {
  return Wf.set.call(this, i[0], f, o, i[0]);
};
function Yf(i, f) {
  const o = i[re];
  return (o ? Pl(o) : i)[f];
}
function Hv(i, f, o) {
  var h;
  const r = d0(f, o);
  return r
    ? "value" in r
      ? r.value
      : (h = r.get) == null
        ? void 0
        : h.call(i.draft_)
    : void 0;
}
function d0(i, f) {
  if (!(f in i)) return;
  let o = Gu(i);
  for (; o; ) {
    const r = Object.getOwnPropertyDescriptor(o, f);
    if (r) return r;
    o = Gu(o);
  }
}
function Vf(i) {
  i.modified_ || ((i.modified_ = !0), i.parent_ && Vf(i.parent_));
}
function Gf(i) {
  i.copy_ || (i.copy_ = Zf(i.base_, i.scope_.immer_.useStrictShallowCopy_));
}
var Cv = class {
  constructor(i) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (f, o, r) => {
        if (typeof f == "function" && typeof o != "function") {
          const E = o;
          o = f;
          const z = this;
          return function (T = E, ...b) {
            return z.produce(T, (U) => o.call(this, U, ...b));
          };
        }
        typeof o != "function" && Oe(6),
          r !== void 0 && typeof r != "function" && Oe(7);
        let h;
        if (ll(f)) {
          const E = Fd(this),
            z = Kf(f, void 0);
          let M = !0;
          try {
            (h = o(z)), (M = !1);
          } finally {
            M ? wf(E) : Lf(E);
          }
          return Wd(E, r), Pd(h, E);
        } else if (!f || typeof f != "object") {
          if (
            ((h = o(f)),
            h === void 0 && (h = f),
            h === f0 && (h = void 0),
            this.autoFreeze_ && $f(h, !0),
            r)
          ) {
            const E = [],
              z = [];
            tu("Patches").generateReplacementPatches_(f, h, E, z), r(E, z);
          }
          return h;
        } else Oe(1, f);
      }),
      (this.produceWithPatches = (f, o) => {
        if (typeof f == "function")
          return (z, ...M) => this.produceWithPatches(z, (T) => f(T, ...M));
        let r, h;
        return [
          this.produce(f, o, (z, M) => {
            (r = z), (h = M);
          }),
          r,
          h,
        ];
      }),
      typeof (i == null ? void 0 : i.autoFreeze) == "boolean" &&
        this.setAutoFreeze(i.autoFreeze),
      typeof (i == null ? void 0 : i.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(i.useStrictShallowCopy);
  }
  createDraft(i) {
    ll(i) || Oe(8), Il(i) && (i = jv(i));
    const f = Fd(this),
      o = Kf(i, void 0);
    return (o[re].isManual_ = !0), Lf(f), o;
  }
  finishDraft(i, f) {
    const o = i && i[re];
    (!o || !o.isManual_) && Oe(9);
    const { scope_: r } = o;
    return Wd(r, f), Pd(void 0, r);
  }
  setAutoFreeze(i) {
    this.autoFreeze_ = i;
  }
  setUseStrictShallowCopy(i) {
    this.useStrictShallowCopy_ = i;
  }
  applyPatches(i, f) {
    let o;
    for (o = f.length - 1; o >= 0; o--) {
      const h = f[o];
      if (h.path.length === 0 && h.op === "replace") {
        i = h.value;
        break;
      }
    }
    o > -1 && (f = f.slice(o + 1));
    const r = tu("Patches").applyPatches_;
    return Il(i) ? r(i, f) : this.produce(i, (h) => r(h, f));
  }
};
function Kf(i, f) {
  const o = hi(i)
    ? tu("MapSet").proxyMap_(i, f)
    : vi(i)
      ? tu("MapSet").proxySet_(i, f)
      : xv(i, f);
  return (f ? f.scope_ : o0()).drafts_.push(o), o;
}
function jv(i) {
  return Il(i) || Oe(10, i), y0(i);
}
function y0(i) {
  if (!ll(i) || mi(i)) return i;
  const f = i[re];
  let o;
  if (f) {
    if (!f.modified_) return f.base_;
    (f.finalized_ = !0), (o = Zf(i, f.scope_.immer_.useStrictShallowCopy_));
  } else o = Zf(i, !0);
  return (
    ri(o, (r, h) => {
      s0(o, r, y0(h));
    }),
    f && (f.finalized_ = !1),
    o
  );
}
var se = new Cv(),
  h0 = se.produce;
se.produceWithPatches.bind(se);
se.setAutoFreeze.bind(se);
se.setUseStrictShallowCopy.bind(se);
se.applyPatches.bind(se);
se.createDraft.bind(se);
se.finishDraft.bind(se);
function v0(i) {
  return ({ dispatch: o, getState: r }) =>
    (h) =>
    (E) =>
      typeof E == "function" ? E(o, r, i) : h(E);
}
var qv = v0(),
  Bv = v0,
  Yv =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? fi
              : fi.apply(null, arguments);
        };
function t0(i, f) {
  function o(...r) {
    if (f) {
      let h = f(...r);
      if (!h) throw new Error(el(0));
      return {
        type: i,
        payload: h.payload,
        ...("meta" in h && { meta: h.meta }),
        ...("error" in h && { error: h.error }),
      };
    }
    return { type: i, payload: r[0] };
  }
  return (
    (o.toString = () => `${i}`),
    (o.type = i),
    (o.match = (r) => zv(r) && r.type === i),
    o
  );
}
var m0 = class Xa extends Array {
  constructor(...f) {
    super(...f), Object.setPrototypeOf(this, Xa.prototype);
  }
  static get [Symbol.species]() {
    return Xa;
  }
  concat(...f) {
    return super.concat.apply(this, f);
  }
  prepend(...f) {
    return f.length === 1 && Array.isArray(f[0])
      ? new Xa(...f[0].concat(this))
      : new Xa(...f.concat(this));
  }
};
function e0(i) {
  return ll(i) ? h0(i, () => {}) : i;
}
function l0(i, f, o) {
  return i.has(f) ? i.get(f) : i.set(f, o(f)).get(f);
}
function Gv(i) {
  return typeof i == "boolean";
}
var Xv = () =>
    function (f) {
      const {
        thunk: o = !0,
        immutableCheck: r = !0,
        serializableCheck: h = !0,
        actionCreatorCheck: E = !0,
      } = f ?? {};
      let z = new m0();
      return o && (Gv(o) ? z.push(qv) : z.push(Bv(o.extraArgument))), z;
    },
  Qv = "RTK_autoBatch",
  u0 = (i) => (f) => {
    setTimeout(f, i);
  },
  Zv =
    (i = { type: "raf" }) =>
    (f) =>
    (...o) => {
      const r = f(...o);
      let h = !0,
        E = !1,
        z = !1;
      const M = new Set(),
        T =
          i.type === "tick"
            ? queueMicrotask
            : i.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : u0(10)
              : i.type === "callback"
                ? i.queueNotification
                : u0(i.timeout),
        b = () => {
          (z = !1), E && ((E = !1), M.forEach((U) => U()));
        };
      return Object.assign({}, r, {
        subscribe(U) {
          const x = () => h && U(),
            G = r.subscribe(x);
          return (
            M.add(U),
            () => {
              G(), M.delete(U);
            }
          );
        },
        dispatch(U) {
          var x;
          try {
            return (
              (h = !((x = U == null ? void 0 : U.meta) != null && x[Qv])),
              (E = !h),
              E && (z || ((z = !0), T(b))),
              r.dispatch(U)
            );
          } finally {
            h = !0;
          }
        },
      });
    },
  wv = (i) =>
    function (o) {
      const { autoBatch: r = !0 } = o ?? {};
      let h = new m0(i);
      return r && h.push(Zv(typeof r == "object" ? r : void 0)), h;
    };
function Lv(i) {
  const f = Xv(),
    {
      reducer: o = void 0,
      middleware: r,
      devTools: h = !0,
      preloadedState: E = void 0,
      enhancers: z = void 0,
    } = i || {};
  let M;
  if (typeof o == "function") M = o;
  else if (kf(o)) M = pv(o);
  else throw new Error(el(1));
  let T;
  typeof r == "function" ? (T = r(f)) : (T = f());
  let b = fi;
  h && (b = Yv({ trace: !1, ...(typeof h == "object" && h) }));
  const U = Av(...T),
    x = wv(U);
  let G = typeof z == "function" ? z(x) : x();
  const V = b(...G);
  return c0(M, E, V);
}
function g0(i) {
  const f = {},
    o = [];
  let r;
  const h = {
    addCase(E, z) {
      const M = typeof E == "string" ? E : E.type;
      if (!M) throw new Error(el(28));
      if (M in f) throw new Error(el(29));
      return (f[M] = z), h;
    },
    addMatcher(E, z) {
      return o.push({ matcher: E, reducer: z }), h;
    },
    addDefaultCase(E) {
      return (r = E), h;
    },
  };
  return i(h), [f, o, r];
}
function Vv(i) {
  return typeof i == "function";
}
function Kv(i, f) {
  let [o, r, h] = g0(f),
    E;
  if (Vv(i)) E = () => e0(i());
  else {
    const M = e0(i);
    E = () => M;
  }
  function z(M = E(), T) {
    let b = [
      o[T.type],
      ...r.filter(({ matcher: U }) => U(T)).map(({ reducer: U }) => U),
    ];
    return (
      b.filter((U) => !!U).length === 0 && (b = [h]),
      b.reduce((U, x) => {
        if (x)
          if (Il(U)) {
            const V = x(U, T);
            return V === void 0 ? U : V;
          } else {
            if (ll(U)) return h0(U, (G) => x(G, T));
            {
              const G = x(U, T);
              if (G === void 0) {
                if (U === null) return U;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return G;
            }
          }
        return U;
      }, M)
    );
  }
  return (z.getInitialState = E), z;
}
var Jv = Symbol.for("rtk-slice-createasyncthunk");
function kv(i, f) {
  return `${i}/${f}`;
}
function $v({ creators: i } = {}) {
  var o;
  const f = (o = i == null ? void 0 : i.asyncThunk) == null ? void 0 : o[Jv];
  return function (h) {
    const { name: E, reducerPath: z = E } = h;
    if (!E) throw new Error(el(11));
    const M =
        (typeof h.reducers == "function" ? h.reducers(Fv()) : h.reducers) || {},
      T = Object.keys(M),
      b = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      U = {
        addCase(k, lt) {
          const B = typeof k == "string" ? k : k.type;
          if (!B) throw new Error(el(12));
          if (B in b.sliceCaseReducersByType) throw new Error(el(13));
          return (b.sliceCaseReducersByType[B] = lt), U;
        },
        addMatcher(k, lt) {
          return b.sliceMatchers.push({ matcher: k, reducer: lt }), U;
        },
        exposeAction(k, lt) {
          return (b.actionCreators[k] = lt), U;
        },
        exposeCaseReducer(k, lt) {
          return (b.sliceCaseReducersByName[k] = lt), U;
        },
      };
    T.forEach((k) => {
      const lt = M[k],
        B = {
          reducerName: k,
          type: kv(E, k),
          createNotation: typeof h.reducers == "function",
        };
      Iv(lt) ? em(B, lt, U, f) : Pv(B, lt, U);
    });
    function x() {
      const [k = {}, lt = [], B = void 0] =
          typeof h.extraReducers == "function"
            ? g0(h.extraReducers)
            : [h.extraReducers],
        st = { ...k, ...b.sliceCaseReducersByType };
      return Kv(h.initialState, (Ot) => {
        for (let Et in st) Ot.addCase(Et, st[Et]);
        for (let Et of b.sliceMatchers) Ot.addMatcher(Et.matcher, Et.reducer);
        for (let Et of lt) Ot.addMatcher(Et.matcher, Et.reducer);
        B && Ot.addDefaultCase(B);
      });
    }
    const G = (k) => k,
      V = new Map();
    let F;
    function bt(k, lt) {
      return F || (F = x()), F(k, lt);
    }
    function K() {
      return F || (F = x()), F.getInitialState();
    }
    function dt(k, lt = !1) {
      function B(Ot) {
        let Et = Ot[k];
        return typeof Et > "u" && lt && (Et = K()), Et;
      }
      function st(Ot = G) {
        const Et = l0(V, lt, () => new WeakMap());
        return l0(Et, Ot, () => {
          const X = {};
          for (const [it, Wt] of Object.entries(h.selectors ?? {}))
            X[it] = Wv(Wt, Ot, K, lt);
          return X;
        });
      }
      return {
        reducerPath: k,
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
      getInitialState: K,
      ...dt(z),
      injectInto(k, { reducerPath: lt, ...B } = {}) {
        const st = lt ?? z;
        return (
          k.inject({ reducerPath: st, reducer: bt }, B),
          { ...rt, ...dt(st, !0) }
        );
      },
    };
    return rt;
  };
}
function Wv(i, f, o, r) {
  function h(E, ...z) {
    let M = f(E);
    return typeof M > "u" && r && (M = o()), i(M, ...z);
  }
  return (h.unwrapped = i), h;
}
var S0 = $v();
function Fv() {
  function i(f, o) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: f, ...o };
  }
  return (
    (i.withTypes = () => i),
    {
      reducer(f) {
        return Object.assign(
          {
            [f.name](...o) {
              return f(...o);
            },
          }[f.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(f, o) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: f,
          reducer: o,
        };
      },
      asyncThunk: i,
    }
  );
}
function Pv({ type: i, reducerName: f, createNotation: o }, r, h) {
  let E, z;
  if ("reducer" in r) {
    if (o && !tm(r)) throw new Error(el(17));
    (E = r.reducer), (z = r.prepare);
  } else E = r;
  h.addCase(i, E)
    .exposeCaseReducer(f, E)
    .exposeAction(f, z ? t0(i, z) : t0(i));
}
function Iv(i) {
  return i._reducerDefinitionType === "asyncThunk";
}
function tm(i) {
  return i._reducerDefinitionType === "reducerWithPrepare";
}
function em({ type: i, reducerName: f }, o, r, h) {
  if (!h) throw new Error(el(18));
  const {
      payloadCreator: E,
      fulfilled: z,
      pending: M,
      rejected: T,
      settled: b,
      options: U,
    } = o,
    x = h(i, E, U);
  r.exposeAction(f, x),
    z && r.addCase(x.fulfilled, z),
    M && r.addCase(x.pending, M),
    T && r.addCase(x.rejected, T),
    b && r.addMatcher(x.settled, b),
    r.exposeCaseReducer(f, {
      fulfilled: z || ai,
      pending: M || ai,
      rejected: T || ai,
      settled: b || ai,
    });
}
function ai() {}
function el(i) {
  return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
const lm = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  um = localStorage.getItem("theme") || lm,
  b0 = S0({
    name: "theme",
    initialState: um,
    reducers: {
      toggleTheme: (i) => {
        const f = i === "light" ? "dark" : "light";
        return localStorage.setItem("theme", f), f;
      },
    },
  }),
  { toggleTheme: am } = b0.actions,
  nm = b0.reducer,
  im = "_button_1p1ja_2",
  cm = "_light_1p1ja_21",
  fm = "_dark_1p1ja_37",
  Xf = { button: im, light: cm, dark: fm };
function rm() {
  const i = Xu(),
    f = Yu((r) => r.theme),
    o = () => {
      i(am());
    };
  return q.jsx("button", {
    onClick: o,
    className: `${Xf.button} ${f === "light" ? Xf.light : Xf.dark}`,
    children: f === "light" ? "Темная тема" : "Светлая тема",
  });
}
const sm = "_header_7cfqj_1",
  om = "_logo_7cfqj_12",
  dm = "_nav_7cfqj_19",
  ym = "_navButton_7cfqj_27",
  Fl = { header: sm, logo: om, nav: dm, navButton: ym },
  hm = {
    tasks: [
      {
        id: "1",
        title: "Купить продукты",
        text: "Купить хлеб, молоко и яйца",
        completed: "Done",
        date: "2025-03-20",
      },
      {
        id: "2",
        title: "Выучить Redux",
        text: "Разобраться с RTK, useSelector и useDispatch",
        completed: "Done",
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
        completed: "Done",
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
        completed: "Done",
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
        completed: "Done",
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
        completed: "inProgress",
        date: "2025-04-04",
      },
      {
        id: "19",
        title: "Подготовить презентацию",
        text: "Сделать слайды для доклада",
        completed: "inProgress",
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
        completed: "inProgress",
        date: "2025-04-08",
      },
      {
        id: "23",
        title: "Посетить концерт",
        text: "Сходить на живую музыку",
        completed: "inProgress",
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
        completed: "inProgress",
        date: "2025-04-11",
      },
      {
        id: "26",
        title: "Разобраться с финансами",
        text: "Проанализировать бюджет",
        completed: "inProgress",
        date: "2025-04-12",
      },
      {
        id: "27",
        title: "Организовать поездку",
        text: "Выбрать маршрут и даты",
        completed: "inProgress",
        date: "2025-04-13",
      },
      {
        id: "28",
        title: "Написать другу",
        text: "Отправить сообщение или письмо",
        completed: "inProgress",
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
        completed: "inProgress",
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
    filter: "Done",
    sort: "none",
  },
  _0 = S0({
    name: "Todos",
    initialState: hm,
    reducers: {
      addTodo: (i, f) => {
        const o = f.payload;
        i.tasks.unshift(o);
      },
      removeTodo: (i, f) => ({
        ...i,
        tasks: i.tasks.filter((o) => o.id !== f.payload),
      }),
      toggleTodo: (i, f) => {
        const o = i.tasks.find((r) => r.id === f.payload);
        o &&
          (o.completed === "newTask"
            ? (o.completed = "inProgress")
            : o.completed === "inProgress"
              ? (o.completed = "Done")
              : o.completed === "Done" && (o.completed = "newTask")),
          console.log(o == null ? void 0 : o.completed);
      },
      editTodo: (i, f) => {
        const o = i.tasks.find((r) => r.id === f.payload.id);
        o && ((o.title = f.payload.title), (o.text = f.payload.text));
      },
      setSort: (i, f) => {
        i.sort = f.payload;
      },
      setFilter: (i, f) => {
        i.filter = f.payload;
      },
    },
  }),
  {
    addTodo: vm,
    removeTodo: mm,
    toggleTodo: gm,
    editTodo: Sm,
    setSort: bm,
    setFilter: ni,
  } = _0.actions,
  _m = _0.reducer;
function Em() {
  const i = Xu();
  function f() {
    i(ni("all"));
  }
  function o() {
    i(ni("Done"));
  }
  function r() {
    i(ni("inProgress"));
  }
  function h() {
    i(ni("newTask"));
  }
  return q.jsxs("header", {
    className: Fl.header,
    children: [
      q.jsx("h1", { className: Fl.logo, children: "Менеджер задач" }),
      q.jsxs("nav", {
        className: Fl.nav,
        children: [
          q.jsx("button", {
            className: Fl.navButton,
            onClick: f,
            children: "Все задачи",
          }),
          q.jsx("button", {
            className: Fl.navButton,
            onClick: r,
            children: "В работе",
          }),
          q.jsx("button", {
            className: Fl.navButton,
            onClick: o,
            children: "Завершенные",
          }),
          q.jsx("button", {
            className: Fl.navButton,
            onClick: h,
            children: "Новые",
          }),
          q.jsx(rm, {}),
        ],
      }),
    ],
  });
}
const Tm = "_footer_10wph_1",
  pm = "_footerContent_10wph_13",
  Am = "_footerNav_10wph_24",
  zm = "_footerLink_10wph_30",
  Bu = { footer: Tm, footerContent: pm, footerNav: Am, footerLink: zm };
function Dm() {
  return q.jsx("footer", {
    className: Bu.footer,
    children: q.jsxs("div", {
      className: Bu.footerContent,
      children: [
        q.jsx("p", { children: "© 2025 Менеджер задач. Все права защищены." }),
        q.jsxs("nav", {
          className: Bu.footerNav,
          children: [
            q.jsx("a", {
              href: "#",
              className: Bu.footerLink,
              children: "О нас",
            }),
            q.jsx("a", {
              href: "#",
              className: Bu.footerLink,
              children: "Политика конфиденциальности",
            }),
            q.jsx("a", {
              href: "#",
              className: Bu.footerLink,
              children: "Контакты",
            }),
          ],
        }),
      ],
    }),
  });
}
const Om = "_modalOverlay_4rgm0_1",
  Mm = "_modalContent_4rgm0_13",
  Rm = "_closeButton_4rgm0_23",
  Um = "_input_4rgm0_39",
  Nm = "_textarea_4rgm0_40",
  xm = "_buttons_4rgm0_54",
  Hm = "_buttonSave_4rgm0_60",
  Cm = "_buttonCancel_4rgm0_73",
  Ol = {
    modalOverlay: Om,
    modalContent: Mm,
    closeButton: Rm,
    input: Um,
    textarea: Nm,
    buttons: xm,
    buttonSave: Hm,
    buttonCancel: Cm,
  };
function jm({ task: i, onClose: f }) {
  const o = Xu(),
    [r, h] = Rt.useState({ title: i.title, text: i.text }),
    E = (T) => {
      h({ ...r, [T.target.name]: T.target.value });
    },
    z = () => {
      const T = { ...i, title: r.title, text: r.text };
      o(Sm(T)), f();
    },
    M = (T) => {
      T.key === "Enter" && z();
    };
  return (
    Rt.useEffect(() => {
      const T = (b) => {
        b.key === "Escape" && f();
      };
      return (
        document.addEventListener("keydown", T),
        () => {
          document.removeEventListener("keydown", T);
        }
      );
    }, [f]),
    q.jsx("div", {
      className: Ol.modalOverlay,
      onClick: f,
      children: q.jsxs("div", {
        className: Ol.modalContent,
        onClick: (T) => T.stopPropagation(),
        children: [
          q.jsx("h2", { children: "Редактировать задачу" }),
          q.jsx("button", {
            className: Ol.closeButton,
            onClick: f,
            children: "✖",
          }),
          q.jsxs("form", {
            onSubmit: z,
            onKeyDown: M,
            children: [
              q.jsx("input", {
                type: "text",
                name: "title",
                value: r.title,
                onChange: E,
                className: Ol.input,
              }),
              q.jsx("textarea", {
                name: "text",
                value: r.text,
                onChange: E,
                className: Ol.textarea,
              }),
              q.jsxs("div", {
                className: Ol.buttons,
                children: [
                  q.jsx("button", {
                    type: "submit",
                    className: Ol.buttonSave,
                    children: "Сохранить",
                  }),
                  q.jsx("button", {
                    type: "button",
                    onClick: f,
                    className: Ol.buttonCancel,
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
const qm = "_todoItem_1nc4a_1",
  Bm = "_todoTitle_1nc4a_16",
  Ym = "_todoText_1nc4a_23",
  Gm = "_button_1nc4a_29",
  Xm = "_buttonToggle_1nc4a_44",
  Qm = "_buttonRemove_1nc4a_49",
  Zm = "_buttonEdit_1nc4a_57",
  wm = "_todoDate_1nc4a_77",
  Lm = "_dateGreen_1nc4a_83",
  Vm = "_dateYellow_1nc4a_87",
  Km = "_dateRed_1nc4a_91",
  fe = {
    todoItem: qm,
    todoTitle: Bm,
    todoText: Ym,
    button: Gm,
    buttonToggle: Xm,
    buttonRemove: Qm,
    buttonEdit: Zm,
    todoDate: wm,
    dateGreen: Lm,
    dateYellow: Vm,
    dateRed: Km,
  };
function Jm({ id: i, title: f, text: o, completed: r, date: h }) {
  const E = Xu(),
    [z, M] = Rt.useState(!1);
  function T() {
    E(gm(i));
  }
  function b() {
    E(mm(i));
  }
  function U() {
    M(!0);
  }
  function x(G) {
    const V = new Date(G + "T00:00:00Z"),
      K = (new Date().getTime() - V.getTime()) / (1e3 * 3600 * 24);
    return K >= 0 && K <= 5
      ? fe.dateGreen
      : K > 5 && K <= 10
        ? fe.dateYellow
        : K > 10
          ? fe.dateRed
          : "";
  }
  return q.jsxs("li", {
    className: fe.todoItem,
    children: [
      q.jsx("h3", { className: fe.todoTitle, children: f }),
      q.jsx("p", { className: fe.todoText, children: o }),
      q.jsx("p", { className: fe.todoText, children: r }),
      q.jsx("p", { className: `${fe.todoDate} ${x(h)}`, children: h }),
      q.jsx("button", {
        onClick: T,
        className: `${fe.button} ${fe.buttonToggle}`,
        children: "Изменить статус",
      }),
      q.jsx("button", {
        onClick: U,
        className: fe.buttonEdit,
        children: "✏️ Редактировать",
      }),
      q.jsx("button", {
        onClick: b,
        className: `${fe.button} ${fe.buttonRemove}`,
        children: "Удалить",
      }),
      z &&
        q.jsx(jm, {
          task: { id: i, title: f, text: o, completed: r, date: h },
          onClose: () => M(!1),
        }),
    ],
  });
}
const km = "_sortContainer_ez40l_1",
  $m = "_sortSelect_ez40l_8",
  a0 = { sortContainer: km, sortSelect: $m },
  Wm = () => {
    const i = Xu(),
      f = Yu((o) => o.todos.sort);
    return q.jsx("div", {
      className: a0.sortContainer,
      children: q.jsxs("select", {
        onChange: (o) => i(bm(o.target.value)),
        value: f,
        className: a0.sortSelect,
        children: [
          q.jsx("option", { value: "none", children: "Сортировать по..." }),
          q.jsx("option", { value: "status", children: "По статусу" }),
          q.jsx("option", { value: "date", children: "По времени" }),
          q.jsx("option", { value: "id", children: "По ID" }),
        ],
      }),
    });
  };
function Fm(i, f) {
  return f === "status"
    ? [...i].sort((o, r) => o.completed.localeCompare(r.completed))
    : f === "date"
      ? [...i].sort(
          (o, r) => new Date(r.date).getTime() - new Date(o.date).getTime(),
        )
      : f === "id"
        ? [...i].sort((o, r) => Number(o.id) - Number(r.id))
        : i;
}
function Pm() {
  const i = Yu((E) => E.todos.tasks),
    f = Yu((E) => E.todos.sort),
    o = Yu((E) => E.todos.filter),
    r = Rt.useMemo(
      () => (o === "all" ? i : i.filter((E) => E.completed === o)),
      [i, o],
    ),
    h = Rt.useMemo(() => Fm(r, f), [r, f]);
  return q.jsxs("div", {
    children: [
      q.jsx(Wm, {}),
      q.jsx("ul", { children: h.map((E) => q.jsx(Jm, { ...E }, E.id)) }),
    ],
  });
}
const Im = "_form_wdz6k_1",
  t1 = "_input_wdz6k_12",
  e1 = "_textarea_wdz6k_13",
  l1 = "_button_wdz6k_38",
  ii = { form: Im, input: t1, textarea: e1, button: l1 };
function u1() {
  const i = Xu(),
    [f, o] = Rt.useState({
      title: "",
      text: "",
      completed: "newTask",
      date: "",
    });
  function r(z) {
    const { name: M, value: T } = z.target;
    o((b) => ({ ...b, [M]: T }));
  }
  function h(z) {
    if ((z.preventDefault(), !f.title.trim() || !f.text.trim())) return;
    const M = { id: Date.now().toString(), ...f };
    i(vm(M)),
      o({
        title: "",
        text: "",
        completed: "newTask",
        date: new Date().toISOString().split("T")[0],
      });
  }
  function E(z) {
    z.key === "Enter" && h(z);
  }
  return q.jsxs("form", {
    onSubmit: h,
    className: ii.form,
    children: [
      q.jsx("input", {
        type: "text",
        name: "title",
        placeholder: "Название задачи",
        value: f.title,
        onChange: r,
        onKeyDown: E,
        className: ii.input,
      }),
      q.jsx("textarea", {
        name: "text",
        placeholder: "Описание",
        value: f.text,
        onChange: r,
        onKeyDown: E,
        className: ii.textarea,
      }),
      q.jsx("button", {
        type: "submit",
        className: ii.button,
        children: "Добавить!",
      }),
    ],
  });
}
function a1() {
  const i = Yu((f) => f.theme);
  return (
    Rt.useEffect(() => {
      document.body.setAttribute("data-theme", i);
    }, [i]),
    q.jsxs("div", {
      className: Ld.container,
      children: [
        q.jsx(Em, {}),
        q.jsxs("div", {
          className: Ld.content,
          children: [q.jsx(u1, {}), q.jsx(Pm, {})],
        }),
        q.jsx(Dm, {}),
      ],
    })
  );
}
function n1() {
  return q.jsx(a1, {});
}
const i1 = Lv({ reducer: { todos: _m, theme: nm } });
Ph.createRoot(document.getElementById("root")).render(
  q.jsx(Rt.StrictMode, {
    children: q.jsx(vv, { store: i1, children: q.jsx(n1, {}) }),
  }),
);
