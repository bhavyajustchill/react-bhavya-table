import { a as e, i as t, n, o as r, r as i, t as a } from "./chunk-Cr9pTUWm.mjs";
import { n as o, t as s } from "./typeof-ChQU5ZDT.mjs";
import c, { useEffect as l, useState as u } from "react";
//#region node_modules/react-csv/src/core.js
var d = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent), f = ((e) => Array.isArray(e) && e.every((e) => typeof e == "object" && !(e instanceof Array))), p = ((e) => Array.isArray(e) && e.every((e) => Array.isArray(e))), m = ((e) => Array.from(e.map((e) => Object.keys(e)).reduce((e, t) => new Set([...e, ...t]), []))), h = (e, t) => {
	t ||= m(e);
	let n = t, r = t;
	f(t) && (n = t.map((e) => e.label), r = t.map((e) => e.key));
	let i = e.map((e) => r.map((t) => g(t, e)));
	return [n, ...i];
}, g = (e, t) => {
	let n = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(e, t, n, r) {
		let i = e[t];
		if (i == null) r.splice(1);
		else return i;
	}, t);
	return n === void 0 ? e in t ? t[e] : "" : n;
}, _ = (e) => e ?? "", v = ((e, t = ",", n = "\"") => e.filter((e) => e).map((e) => e.map((e) => _(e)).map((e) => `${n}${e}${n}`).join(t)).join("\n")), y = ((e, t, n, r) => v(t ? [t, ...e] : e, n, r)), b = ((e, t, n, r) => v(h(e, t), n, r)), x = ((e, t, n, r) => t ? `${t.join(n)}\n${e}` : e.replace(/"/g, "\"\"")), S = (e, t, n, r) => {
	if (f(e)) return b(e, t, n, r);
	if (p(e)) return y(e, t, n, r);
	if (typeof e == "string") return x(e, t, n);
	throw TypeError("Data should be a \"String\", \"Array of arrays\" OR \"Array of objects\" ");
}, C = ((e, t, n, r, i) => {
	let a = S(e, n, r, i), o = d() ? "application/csv" : "text/csv", s = new Blob([t ? "﻿" : "", a], { type: o }), c = `data:${o};charset=utf-8,${t ? "﻿" : ""}${a}`, l = window.URL || window.webkitURL;
	return l.createObjectURL === void 0 ? c : l.createObjectURL(s);
}), w = /* @__PURE__ */ a(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), T = /* @__PURE__ */ a(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(e) || x(e) === l;
		}
		function L(e) {
			return x(e) === u;
		}
		function ee(e) {
			return x(e) === c;
		}
		function R(e) {
			return x(e) === s;
		}
		function z(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function B(e) {
			return x(e) === d;
		}
		function te(e) {
			return x(e) === i;
		}
		function V(e) {
			return x(e) === h;
		}
		function H(e) {
			return x(e) === m;
		}
		function U(e) {
			return x(e) === r;
		}
		function ne(e) {
			return x(e) === o;
		}
		function re(e) {
			return x(e) === a;
		}
		function W(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = L, e.isContextConsumer = ee, e.isContextProvider = R, e.isElement = z, e.isForwardRef = B, e.isFragment = te, e.isLazy = V, e.isMemo = H, e.isPortal = U, e.isProfiler = ne, e.isStrictMode = re, e.isSuspense = W, e.isValidElementType = b, e.typeOf = x;
	})();
})), E = /* @__PURE__ */ a(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = w() : t.exports = T();
})), D = /* @__PURE__ */ a(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), O = /* @__PURE__ */ a(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), k = /* @__PURE__ */ a(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), A = /* @__PURE__ */ a(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = O(), i = {}, a = k();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), j = /* @__PURE__ */ a(((e, t) => {
	var n = E(), r = D(), i = O(), a = k(), o = A(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = F(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function F(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), M = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), N = (/* @__PURE__ */ a(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = E();
		t.exports = j()(n.isElement, !0);
	} else t.exports = M()();
})))(), P = {
	data: (0, N.oneOfType)([
		N.string,
		N.array,
		N.func
	]).isRequired,
	headers: N.array,
	target: N.string,
	separator: N.string,
	filename: N.string,
	uFEFF: N.bool,
	onClick: N.func,
	asyncOnClick: N.bool,
	enclosingCharacter: N.string
}, F = {
	separator: ",",
	filename: "generatedBy_react-csv.csv",
	uFEFF: !0,
	asyncOnClick: !1,
	enclosingCharacter: "\""
}, I = { target: "_blank" };
(class extends c.Component {
	static defaultProps = Object.assign(F, I);
	static propTypes = P;
	constructor(e) {
		super(e), this.state = {};
	}
	buildURI() {
		return C(...arguments);
	}
	componentDidMount() {
		let { data: e, headers: t, separator: n, enclosingCharacter: r, uFEFF: i, target: a, specs: o, replace: s } = this.props;
		this.state.page = window.open(this.buildURI(e, i, t, n, r), a, o, s);
	}
	getWindow() {
		return this.state.page;
	}
	render() {
		return null;
	}
});
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.min.js
var L = /* @__PURE__ */ a(((e) => {
	var n = t("react"), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function c(e, t, n) {
		var i, c = {}, l = null, u = null;
		for (i in n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !s.hasOwnProperty(i) && (c[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) c[i] === void 0 && (c[i] = t[i]);
		return {
			$$typeof: r,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = c, e.jsxs = c;
})), ee = /* @__PURE__ */ a(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var n = t("react"), r = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
		function v(e) {
			if (typeof e != "object" || !e) return null;
			var t = g && e[g] || e[_];
			return typeof t == "function" ? t : null;
		}
		var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function b(e) {
			x("error", e, [...arguments].slice(1));
		}
		function x(e, t, n) {
			var r = y.ReactDebugCurrentFrame.getStackAddendum();
			r !== "" && (t += "%s", n = n.concat([r]));
			var i = n.map(function(e) {
				return String(e);
			});
			i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
		}
		var S = !1, C = !1, w = !1, T = !1, E = !1, D = Symbol.for("react.module.reference");
		function O(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || E || e === o || e === d || e === f || T || e === h || S || C || w || typeof e == "object" && e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === c || e.$$typeof === l || e.$$typeof === u || e.$$typeof === D || e.getModuleId !== void 0));
		}
		function k(e, t, n) {
			var r = e.displayName;
			if (r) return r;
			var i = t.displayName || t.name || "";
			return i === "" ? n : n + "(" + i + ")";
		}
		function A(e) {
			return e.displayName || "Context";
		}
		function j(e) {
			if (e == null) return null;
			if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case a: return "Fragment";
				case i: return "Portal";
				case s: return "Profiler";
				case o: return "StrictMode";
				case d: return "Suspense";
				case f: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case l: return A(e) + ".Consumer";
				case c: return A(e._context) + ".Provider";
				case u: return k(e, e.render, "ForwardRef");
				case p:
					var t = e.displayName || null;
					return t === null ? j(e.type) || "Memo" : t;
				case m:
					var n = e, r = n._payload, h = n._init;
					try {
						return j(h(r));
					} catch {
						return null;
					}
			}
			return null;
		}
		var M = Object.assign, N = 0, P, F, I, L, ee, R, z;
		function B() {}
		B.__reactDisabledLog = !0;
		function te() {
			if (N === 0) {
				P = console.log, F = console.info, I = console.warn, L = console.error, ee = console.group, R = console.groupCollapsed, z = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: B,
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
			N++;
		}
		function V() {
			if (N--, N === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: M({}, e, { value: P }),
					info: M({}, e, { value: F }),
					warn: M({}, e, { value: I }),
					error: M({}, e, { value: L }),
					group: M({}, e, { value: ee }),
					groupCollapsed: M({}, e, { value: R }),
					groupEnd: M({}, e, { value: z })
				});
			}
			N < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		var H = y.ReactCurrentDispatcher, U;
		function ne(e, t, n) {
			if (U === void 0) try {
				throw Error();
			} catch (e) {
				var r = e.stack.trim().match(/\n( *(at )?)/);
				U = r && r[1] || "";
			}
			return "\n" + U + e;
		}
		var re = !1, W = new (typeof WeakMap == "function" ? WeakMap : Map)();
		function ie(e, t) {
			if (!e || re) return "";
			var n = W.get(e);
			if (n !== void 0) return n;
			var r;
			re = !0;
			var i = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			var a = H.current;
			H.current = null, te();
			try {
				if (t) {
					var o = function() {
						throw Error();
					};
					if (Object.defineProperty(o.prototype, "props", { set: function() {
						throw Error();
					} }), typeof Reflect == "object" && Reflect.construct) {
						try {
							Reflect.construct(o, []);
						} catch (e) {
							r = e;
						}
						Reflect.construct(e, [], o);
					} else {
						try {
							o.call();
						} catch (e) {
							r = e;
						}
						e.call(o.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (e) {
						r = e;
					}
					e();
				}
			} catch (t) {
				if (t && r && typeof t.stack == "string") {
					for (var s = t.stack.split("\n"), c = r.stack.split("\n"), l = s.length - 1, u = c.length - 1; l >= 1 && u >= 0 && s[l] !== c[u];) u--;
					for (; l >= 1 && u >= 0; l--, u--) if (s[l] !== c[u]) {
						if (l !== 1 || u !== 1) do
							if (l--, u--, u < 0 || s[l] !== c[u]) {
								var d = "\n" + s[l].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, d), d;
							}
						while (l >= 1 && u >= 0);
						break;
					}
				}
			} finally {
				re = !1, H.current = a, V(), Error.prepareStackTrace = i;
			}
			var f = e ? e.displayName || e.name : "", p = f ? ne(f) : "";
			return typeof e == "function" && W.set(e, p), p;
		}
		function ae(e, t, n) {
			return ie(e, !1);
		}
		function oe(e) {
			var t = e.prototype;
			return !!(t && t.isReactComponent);
		}
		function se(e, t, n) {
			if (e == null) return "";
			if (typeof e == "function") return ie(e, oe(e));
			if (typeof e == "string") return ne(e);
			switch (e) {
				case d: return ne("Suspense");
				case f: return ne("SuspenseList");
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case u: return ae(e.render);
				case p: return se(e.type, t, n);
				case m:
					var r = e, i = r._payload, a = r._init;
					try {
						return se(a(i), t, n);
					} catch {}
			}
			return "";
		}
		var G = Object.prototype.hasOwnProperty, ce = {}, le = y.ReactDebugCurrentFrame;
		function ue(e) {
			if (e) {
				var t = e._owner, n = se(e.type, e._source, t ? t.type : null);
				le.setExtraStackFrame(n);
			} else le.setExtraStackFrame(null);
		}
		function K(e, t, n, r, i) {
			var a = Function.call.bind(G);
			for (var o in e) if (a(e, o)) {
				var s = void 0;
				try {
					if (typeof e[o] != "function") {
						var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw c.name = "Invariant Violation", c;
					}
					s = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
				} catch (e) {
					s = e;
				}
				s && !(s instanceof Error) && (ue(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof s), ue(null)), s instanceof Error && !(s.message in ce) && (ce[s.message] = !0, ue(i), b("Failed %s type: %s", n, s.message), ue(null));
			}
		}
		var de = Array.isArray;
		function fe(e) {
			return de(e);
		}
		function pe(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function me(e) {
			try {
				return he(e), !1;
			} catch {
				return !0;
			}
		}
		function he(e) {
			return "" + e;
		}
		function ge(e) {
			if (me(e)) return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pe(e)), he(e);
		}
		var _e = y.ReactCurrentOwner, ve = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		}, ye, be, q = {};
		function xe(e) {
			if (G.call(e, "ref")) {
				var t = Object.getOwnPropertyDescriptor(e, "ref").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.ref !== void 0;
		}
		function Se(e) {
			if (G.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function Ce(e, t) {
			if (typeof e.ref == "string" && _e.current && t && _e.current.stateNode !== t) {
				var n = j(_e.current.type);
				q[n] || (b("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", j(_e.current.type), e.ref), q[n] = !0);
			}
		}
		function J(e, t) {
			var n = function() {
				ye || (ye = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function we(e, t) {
			var n = function() {
				be || (be = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "ref", {
				get: n,
				configurable: !0
			});
		}
		var Te = function(e, t, n, i, a, o, s) {
			var c = {
				$$typeof: r,
				type: e,
				key: t,
				ref: n,
				props: s,
				_owner: o
			};
			return c._store = {}, Object.defineProperty(c._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: !1
			}), Object.defineProperty(c, "_self", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: i
			}), Object.defineProperty(c, "_source", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: a
			}), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
		};
		function Ee(e, t, n, r, i) {
			var a, o = {}, s = null, c = null;
			for (a in n !== void 0 && (ge(n), s = "" + n), Se(t) && (ge(t.key), s = "" + t.key), xe(t) && (c = t.ref, Ce(t, i)), t) G.call(t, a) && !ve.hasOwnProperty(a) && (o[a] = t[a]);
			if (e && e.defaultProps) {
				var l = e.defaultProps;
				for (a in l) o[a] === void 0 && (o[a] = l[a]);
			}
			if (s || c) {
				var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
				s && J(o, u), c && we(o, u);
			}
			return Te(e, s, c, i, r, _e.current, o);
		}
		var De = y.ReactCurrentOwner, Oe = y.ReactDebugCurrentFrame;
		function ke(e) {
			if (e) {
				var t = e._owner, n = se(e.type, e._source, t ? t.type : null);
				Oe.setExtraStackFrame(n);
			} else Oe.setExtraStackFrame(null);
		}
		var Ae = !1;
		function je(e) {
			return typeof e == "object" && !!e && e.$$typeof === r;
		}
		function Me() {
			if (De.current) {
				var e = j(De.current.type);
				if (e) return "\n\nCheck the render method of `" + e + "`.";
			}
			return "";
		}
		function Ne(e) {
			if (e !== void 0) {
				var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
				return "\n\nCheck your code at " + t + ":" + n + ".";
			}
			return "";
		}
		var Pe = {};
		function Fe(e) {
			var t = Me();
			if (!t) {
				var n = typeof e == "string" ? e : e.displayName || e.name;
				n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
			}
			return t;
		}
		function Ie(e, t) {
			if (!(!e._store || e._store.validated || e.key != null)) {
				e._store.validated = !0;
				var n = Fe(t);
				if (!Pe[n]) {
					Pe[n] = !0;
					var r = "";
					e && e._owner && e._owner !== De.current && (r = " It was passed a child from " + j(e._owner.type) + "."), ke(e), b("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", n, r), ke(null);
				}
			}
		}
		function Le(e, t) {
			if (typeof e == "object") {
				if (fe(e)) for (var n = 0; n < e.length; n++) {
					var r = e[n];
					je(r) && Ie(r, t);
				}
				else if (je(e)) e._store && (e._store.validated = !0);
				else if (e) {
					var i = v(e);
					if (typeof i == "function" && i !== e.entries) for (var a = i.call(e), o; !(o = a.next()).done;) je(o.value) && Ie(o.value, t);
				}
			}
		}
		function Y(e) {
			var t = e.type;
			if (!(t == null || typeof t == "string")) {
				var n;
				if (typeof t == "function") n = t.propTypes;
				else if (typeof t == "object" && (t.$$typeof === u || t.$$typeof === p)) n = t.propTypes;
				else return;
				if (n) {
					var r = j(t);
					K(n, e.props, "prop", r, e);
				} else t.PropTypes !== void 0 && !Ae && (Ae = !0, b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j(t) || "Unknown"));
				typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		function Re(e) {
			for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
				var r = t[n];
				if (r !== "children" && r !== "key") {
					ke(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r), ke(null);
					break;
				}
			}
			e.ref !== null && (ke(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
		}
		function ze(e, t, n, i, o, s) {
			var c = O(e);
			if (!c) {
				var l = "";
				(e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
				var u = Ne(o);
				u ? l += u : l += Me();
				var d;
				e === null ? d = "null" : fe(e) ? d = "array" : e !== void 0 && e.$$typeof === r ? (d = "<" + (j(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
			}
			var f = Ee(e, t, n, o, s);
			if (f == null) return f;
			if (c) {
				var p = t.children;
				if (p !== void 0) if (i) if (fe(p)) {
					for (var m = 0; m < p.length; m++) Le(p[m], e);
					Object.freeze && Object.freeze(p);
				} else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				else Le(p, e);
			}
			return e === a ? Re(f) : Y(f), f;
		}
		function Be(e, t, n) {
			return ze(e, t, n, !0);
		}
		function Ve(e, t, n) {
			return ze(e, t, n, !1);
		}
		var He = Ve, Ue = Be;
		e.Fragment = a, e.jsx = He, e.jsxs = Ue;
	})();
})), R = (/* @__PURE__ */ a(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = L() : t.exports = ee();
})))(), z = class extends c.Component {
	static defaultProps = F;
	static propTypes = P;
	constructor(e) {
		super(e), this.buildURI = this.buildURI.bind(this);
	}
	buildURI() {
		return C(...arguments);
	}
	handleLegacy(e, t = !1) {
		if (window.navigator.msSaveOrOpenBlob) {
			e.preventDefault();
			let { data: n, headers: r, separator: i, filename: a, enclosingCharacter: o, uFEFF: s } = this.props, c = t && typeof n == "function" ? n() : n, l = new Blob([s ? "﻿" : "", S(c, r, i, o)]);
			return window.navigator.msSaveBlob(l, a), !1;
		}
	}
	handleAsyncClick(e) {
		this.props.onClick(e, (t) => {
			if (t === !1) {
				e.preventDefault();
				return;
			}
			this.handleLegacy(e, !0);
		});
	}
	handleSyncClick(e) {
		if (this.props.onClick(e) === !1) {
			e.preventDefault();
			return;
		}
		this.handleLegacy(e);
	}
	handleClick() {
		return (e) => {
			if (typeof this.props.onClick == "function") return this.props.asyncOnClick ? this.handleAsyncClick(e) : this.handleSyncClick(e);
			this.handleLegacy(e);
		};
	}
	render() {
		let { data: e, headers: t, separator: n, filename: r, uFEFF: i, children: a, onClick: o, asyncOnClick: s, enclosingCharacter: c, ...l } = this.props, u = typeof window > "u" ? "" : this.buildURI(e, i, t, n, c);
		return /* @__PURE__ */ (0, R.jsx)("a", {
			download: r,
			...l,
			ref: (e) => this.link = e,
			target: "_self",
			href: u,
			onClick: this.handleClick(),
			children: a
		});
	}
};
//#endregion
//#region node_modules/fflate/esm/browser.js
function B(e, t) {
	t === void 0 && (t = {});
	var n = Pe();
	n.p(e);
	var r = Fe(e, t, 2, 4);
	return Le(r, t), Ie(r, r.length - 4, n.d()), r;
}
function te(e, t) {
	return Ce((Y(e), e.subarray(2, -4)), t);
}
var V, H, U, ne, re, W, ie, ae, oe, se, G, ce, le, ue, K, de, fe, pe, me, he, ge, _e, ve, ye, be, q, xe, Se, Ce, J, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Y, Re = n((() => {
	for (V = Uint8Array, H = Uint16Array, U = Uint32Array, ne = new V([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		5,
		5,
		5,
		5,
		0,
		0,
		0,
		0
	]), re = new V([
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		5,
		6,
		6,
		7,
		7,
		8,
		8,
		9,
		9,
		10,
		10,
		11,
		11,
		12,
		12,
		13,
		13,
		0,
		0
	]), W = new V([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]), ie = function(e, t) {
		for (var n = new H(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
		for (var i = new U(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
		return [n, i];
	}, ae = ie(ne, 2), oe = ae[0], se = ae[1], oe[28] = 258, se[258] = 28, G = ie(re, 0), ce = G[0], le = G[1], ue = new H(32768), K = 0; K < 32768; ++K) de = (K & 43690) >>> 1 | (K & 21845) << 1, de = (de & 52428) >>> 2 | (de & 13107) << 2, de = (de & 61680) >>> 4 | (de & 3855) << 4, ue[K] = ((de & 65280) >>> 8 | (de & 255) << 8) >>> 1;
	for (fe = (function(e, t, n) {
		for (var r = e.length, i = 0, a = new H(t); i < r; ++i) ++a[e[i] - 1];
		var o = new H(t);
		for (i = 0; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
		var s;
		if (n) {
			s = new H(1 << t);
			var c = 15 - t;
			for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[ue[d] >>> c] = l;
		} else for (s = new H(r), i = 0; i < r; ++i) s[i] = ue[o[e[i] - 1]++] >>> 15 - e[i];
		return s;
	}), pe = new V(288), K = 0; K < 144; ++K) pe[K] = 8;
	for (K = 144; K < 256; ++K) pe[K] = 9;
	for (K = 256; K < 280; ++K) pe[K] = 7;
	for (K = 280; K < 288; ++K) pe[K] = 8;
	for (me = new V(32), K = 0; K < 32; ++K) me[K] = 5;
	he = /* @__PURE__ */ fe(pe, 9, 0), ge = /* @__PURE__ */ fe(pe, 9, 1), _e = /* @__PURE__ */ fe(me, 5, 0), ve = /* @__PURE__ */ fe(me, 5, 1), ye = function(e) {
		for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
		return t;
	}, be = function(e, t, n) {
		var r = t / 8 >> 0;
		return (e[r] | e[r + 1] << 8) >>> (t & 7) & n;
	}, q = function(e, t) {
		var n = t / 8 >> 0;
		return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >>> (t & 7);
	}, xe = function(e) {
		return (e / 8 >> 0) + (e & 7 && 1);
	}, Se = function(e, t, n) {
		(t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length);
		var r = new (e instanceof H ? H : e instanceof U ? U : V)(n - t);
		return r.set(e.subarray(t, n)), r;
	}, Ce = function(e, t, n) {
		var r = e.length, i = !t || n, a = !n || n.i;
		n ||= {}, t ||= new V(r * 3);
		var o = function(e) {
			var n = t.length;
			if (e > n) {
				var r = new V(Math.max(n * 2, e));
				r.set(t), t = r;
			}
		}, s = n.f || 0, c = n.p || 0, l = n.b || 0, u = n.l, d = n.d, f = n.m, p = n.n, m = r * 8;
		do {
			if (!u) {
				n.f = s = be(e, c, 1);
				var h = be(e, c + 1, 3);
				if (c += 3, !h) {
					var g = xe(c) + 4, _ = e[g - 4] | e[g - 3] << 8, v = g + _;
					if (v > r) {
						if (a) throw "unexpected EOF";
						break;
					}
					i && o(l + _), t.set(e.subarray(g, v), l), n.b = l += _, n.p = c = v * 8;
					continue;
				} else if (h == 1) u = ge, d = ve, f = 9, p = 5;
				else if (h == 2) {
					var y = be(e, c, 31) + 257, b = be(e, c + 10, 15) + 4, x = y + be(e, c + 5, 31) + 1;
					c += 14;
					for (var S = new V(x), C = new V(19), w = 0; w < b; ++w) C[W[w]] = be(e, c + w * 3, 7);
					c += b * 3;
					var T = ye(C), E = (1 << T) - 1;
					if (!a && c + x * (T + 7) > m) break;
					for (var D = fe(C, T, 1), w = 0; w < x;) {
						var O = D[be(e, c, E)];
						c += O & 15;
						var g = O >>> 4;
						if (g < 16) S[w++] = g;
						else {
							var k = 0, A = 0;
							for (g == 16 ? (A = 3 + be(e, c, 3), c += 2, k = S[w - 1]) : g == 17 ? (A = 3 + be(e, c, 7), c += 3) : g == 18 && (A = 11 + be(e, c, 127), c += 7); A--;) S[w++] = k;
						}
					}
					var j = S.subarray(0, y), M = S.subarray(y);
					f = ye(j), p = ye(M), u = fe(j, f, 1), d = fe(M, p, 1);
				} else throw "invalid block type";
				if (c > m) throw "unexpected EOF";
			}
			i && o(l + 131072);
			for (var N = (1 << f) - 1, P = (1 << p) - 1, F = f + p + 18; a || c + F < m;) {
				var k = u[q(e, c) & N], I = k >>> 4;
				if (c += k & 15, c > m) throw "unexpected EOF";
				if (!k) throw "invalid length/literal";
				if (I < 256) t[l++] = I;
				else if (I == 256) {
					u = null;
					break;
				} else {
					var L = I - 254;
					if (I > 264) {
						var w = I - 257, ee = ne[w];
						L = be(e, c, (1 << ee) - 1) + oe[w], c += ee;
					}
					var R = d[q(e, c) & P], z = R >>> 4;
					if (!R) throw "invalid distance";
					c += R & 15;
					var M = ce[z];
					if (z > 3) {
						var ee = re[z];
						M += q(e, c) & (1 << ee) - 1, c += ee;
					}
					if (c > m) throw "unexpected EOF";
					i && o(l + 131072);
					for (var B = l + L; l < B; l += 4) t[l] = t[l - M], t[l + 1] = t[l + 1 - M], t[l + 2] = t[l + 2 - M], t[l + 3] = t[l + 3 - M];
					l = B;
				}
			}
			n.l = u, n.p = c, n.b = l, u && (s = 1, n.m = f, n.d = d, n.n = p);
		} while (!s);
		return l == t.length ? t : Se(t, 0, l);
	}, J = function(e, t, n) {
		n <<= t & 7;
		var r = t / 8 >> 0;
		e[r] |= n, e[r + 1] |= n >>> 8;
	}, we = function(e, t, n) {
		n <<= t & 7;
		var r = t / 8 >> 0;
		e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
	}, Te = function(e, t) {
		for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
			s: r,
			f: e[r]
		});
		var i = n.length, a = n.slice();
		if (!i) return [new V(0), 0];
		if (i == 1) {
			var o = new V(n[0].s + 1);
			return o[n[0].s] = 1, [o, 1];
		}
		n.sort(function(e, t) {
			return e.f - t.f;
		}), n.push({
			s: -1,
			f: 25001
		});
		var s = n[0], c = n[1], l = 0, u = 1, d = 2;
		for (n[0] = {
			s: -1,
			f: s.f + c.f,
			l: s,
			r: c
		}; u != i - 1;) s = n[n[l].f < n[d].f ? l++ : d++], c = n[l != u && n[l].f < n[d].f ? l++ : d++], n[u++] = {
			s: -1,
			f: s.f + c.f,
			l: s,
			r: c
		};
		for (var f = a[0].s, r = 1; r < i; ++r) a[r].s > f && (f = a[r].s);
		var p = new H(f + 1), m = Ee(n[u - 1], p, 0);
		if (m > t) {
			var r = 0, h = 0, g = m - t, _ = 1 << g;
			for (a.sort(function(e, t) {
				return p[t.s] - p[e.s] || e.f - t.f;
			}); r < i; ++r) {
				var v = a[r].s;
				if (p[v] > t) h += _ - (1 << m - p[v]), p[v] = t;
				else break;
			}
			for (h >>>= g; h > 0;) {
				var y = a[r].s;
				p[y] < t ? h -= 1 << t - p[y]++ - 1 : ++r;
			}
			for (; r >= 0 && h; --r) {
				var b = a[r].s;
				p[b] == t && (--p[b], ++h);
			}
			m = t;
		}
		return [new V(p), m];
	}, Ee = function(e, t, n) {
		return e.s == -1 ? Math.max(Ee(e.l, t, n + 1), Ee(e.r, t, n + 1)) : t[e.s] = n;
	}, De = function(e) {
		for (var t = e.length; t && !e[--t];);
		for (var n = new H(++t), r = 0, i = e[0], a = 1, o = function(e) {
			n[r++] = e;
		}, s = 1; s <= t; ++s) if (e[s] == i && s != t) ++a;
		else {
			if (!i && a > 2) {
				for (; a > 138; a -= 138) o(32754);
				a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
			} else if (a > 3) {
				for (o(i), --a; a > 6; a -= 6) o(8304);
				a > 2 && (o(a - 3 << 5 | 8208), a = 0);
			}
			for (; a--;) o(i);
			a = 1, i = e[s];
		}
		return [n.subarray(0, r), t];
	}, Oe = function(e, t) {
		for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
		return n;
	}, ke = function(e, t, n) {
		var r = n.length, i = xe(t + 2);
		e[i] = r & 255, e[i + 1] = r >>> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
		for (var a = 0; a < r; ++a) e[i + a + 4] = n[a];
		return (i + 4 + r) * 8;
	}, Ae = function(e, t, n, r, i, a, o, s, c, l, u) {
		J(t, u++, n), ++i[256];
		for (var d = Te(i, 15), f = d[0], p = d[1], m = Te(a, 15), h = m[0], g = m[1], _ = De(f), v = _[0], y = _[1], b = De(h), x = b[0], S = b[1], C = new H(19), w = 0; w < v.length; ++w) C[v[w] & 31]++;
		for (var w = 0; w < x.length; ++w) C[x[w] & 31]++;
		for (var T = Te(C, 7), E = T[0], D = T[1], O = 19; O > 4 && !E[W[O - 1]]; --O);
		var k = l + 5 << 3, A = Oe(i, pe) + Oe(a, me) + o, j = Oe(i, f) + Oe(a, h) + o + 14 + 3 * O + Oe(C, E) + (2 * C[16] + 3 * C[17] + 7 * C[18]);
		if (k <= A && k <= j) return ke(t, u, e.subarray(c, c + l));
		var M, N, P, F;
		if (J(t, u, 1 + (j < A)), u += 2, j < A) {
			M = fe(f, p, 0), N = f, P = fe(h, g, 0), F = h;
			var I = fe(E, D, 0);
			J(t, u, y - 257), J(t, u + 5, S - 1), J(t, u + 10, O - 4), u += 14;
			for (var w = 0; w < O; ++w) J(t, u + 3 * w, E[W[w]]);
			u += 3 * O;
			for (var L = [v, x], ee = 0; ee < 2; ++ee) for (var R = L[ee], w = 0; w < R.length; ++w) {
				var z = R[w] & 31;
				J(t, u, I[z]), u += E[z], z > 15 && (J(t, u, R[w] >>> 5 & 127), u += R[w] >>> 12);
			}
		} else M = he, N = pe, P = _e, F = me;
		for (var w = 0; w < s; ++w) if (r[w] > 255) {
			var z = r[w] >>> 18 & 31;
			we(t, u, M[z + 257]), u += N[z + 257], z > 7 && (J(t, u, r[w] >>> 23 & 31), u += ne[z]);
			var B = r[w] & 31;
			we(t, u, P[B]), u += F[B], B > 3 && (we(t, u, r[w] >>> 5 & 8191), u += re[B]);
		} else we(t, u, M[r[w]]), u += N[r[w]];
		return we(t, u, M[256]), u + N[256];
	}, je = /* @__PURE__ */ new U([
		65540,
		131080,
		131088,
		131104,
		262176,
		1048704,
		1048832,
		2114560,
		2117632
	]), Me = /* @__PURE__ */ new V(0), Ne = function(e, t, n, r, i, a) {
		var o = e.length, s = new V(r + o + 5 * (1 + Math.floor(o / 7e3)) + i), c = s.subarray(r, s.length - i), l = 0;
		if (!t || o < 8) for (var u = 0; u <= o; u += 65535) {
			var d = u + 65535;
			d < o ? l = ke(c, l, e.subarray(u, d)) : (c[u] = a, l = ke(c, l, e.subarray(u, o)));
		}
		else {
			for (var f = je[t - 1], p = f >>> 13, m = f & 8191, h = (1 << n) - 1, g = new H(32768), _ = new H(h + 1), v = Math.ceil(n / 3), y = 2 * v, b = function(t) {
				return (e[t] ^ e[t + 1] << v ^ e[t + 2] << y) & h;
			}, x = new U(25e3), S = new H(288), C = new H(32), w = 0, T = 0, u = 0, E = 0, D = 0, O = 0; u < o; ++u) {
				var k = b(u), A = u & 32767, j = _[k];
				if (g[A] = j, _[k] = A, D <= u) {
					var M = o - u;
					if ((w > 7e3 || E > 24576) && M > 423) {
						l = Ae(e, c, 0, x, S, C, T, E, O, u - O, l), E = w = T = 0, O = u;
						for (var N = 0; N < 286; ++N) S[N] = 0;
						for (var N = 0; N < 30; ++N) C[N] = 0;
					}
					var P = 2, F = 0, I = m, L = A - j & 32767;
					if (M > 2 && k == b(u - L)) for (var ee = Math.min(p, M) - 1, R = Math.min(32767, u), z = Math.min(258, M); L <= R && --I && A != j;) {
						if (e[u + P] == e[u + P - L]) {
							for (var B = 0; B < z && e[u + B] == e[u + B - L]; ++B);
							if (B > P) {
								if (P = B, F = L, B > ee) break;
								for (var te = Math.min(L, B - 2), W = 0, N = 0; N < te; ++N) {
									var ie = u - L + N + 32768 & 32767, ae = ie - g[ie] + 32768 & 32767;
									ae > W && (W = ae, j = ie);
								}
							}
						}
						A = j, j = g[A], L += A - j + 32768 & 32767;
					}
					if (F) {
						x[E++] = 268435456 | se[P] << 18 | le[F];
						var oe = se[P] & 31, G = le[F] & 31;
						T += ne[oe] + re[G], ++S[257 + oe], ++C[G], D = u + P, ++w;
					} else x[E++] = e[u], ++S[e[u]];
				}
			}
			l = Ae(e, c, a, x, S, C, T, E, O, u - O, l), a || (l = ke(c, l, Me));
		}
		return Se(s, 0, r + xe(l) + i);
	}, Pe = function() {
		var e = 1, t = 0;
		return {
			p: function(n) {
				for (var r = e, i = t, a = n.length, o = 0; o != a;) {
					for (var s = Math.min(o + 5552, a); o < s; ++o) r += n[o], i += r;
					r %= 65521, i %= 65521;
				}
				e = r, t = i;
			},
			d: function() {
				return (e >>> 8 << 16 | (t & 255) << 8 | t >>> 8) + ((e & 255) << 23) * 2;
			}
		};
	}, Fe = function(e, t, n, r, i) {
		return Ne(e, t.level == null ? 6 : t.level, t.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 12 + t.mem, n, r, !i);
	}, Ie = function(e, t, n) {
		for (; n; ++t) e[t] = n, n >>>= 8;
	}, Le = function(e, t) {
		var n = t.level, r = n == 0 ? 0 : n < 6 ? 1 : n == 9 ? 3 : 2;
		e[0] = 120, e[1] = r << 6 | (r ? 32 - 2 * r : 1);
	}, Y = function(e) {
		if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) throw "invalid zlib data";
		if (e[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
	};
})), ze = /* @__PURE__ */ i({
	AcroForm: () => vn,
	AcroFormAppearance: () => $,
	AcroFormButton: () => un,
	AcroFormCheckBox: () => mn,
	AcroFormChoiceField: () => on,
	AcroFormComboBox: () => cn,
	AcroFormEditBox: () => ln,
	AcroFormListBox: () => sn,
	AcroFormPasswordField: () => gn,
	AcroFormPushButton: () => dn,
	AcroFormRadioButton: () => fn,
	AcroFormTextField: () => hn,
	GState: () => st,
	ShadingPattern: () => lt,
	TilingPattern: () => ut,
	default: () => X,
	jsPDF: () => X
});
function Be() {
	Z.console && typeof Z.console.log == "function" && Z.console.log.apply(Z.console, arguments);
}
function Ve(e, t, n) {
	var r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Dt(r.response, t, n);
	}, r.onerror = function() {
		wt.error("could not download file");
	}, r.send();
}
function He(e) {
	var t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Ue(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		var t = document.createEvent("MouseEvents");
		t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
	}
}
function We(e) {
	var t;
	e ||= "", this.ok = !1, e.charAt(0) == "#" && (e = e.substr(1, 6)), e = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	}[e = (e = e.replace(/ /g, "")).toLowerCase()] || e;
	for (var n = [
		{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
			process: function(e) {
				return [
					parseInt(e[1]),
					parseInt(e[2]),
					parseInt(e[3])
				];
			}
		},
		{
			re: /^(\w{2})(\w{2})(\w{2})$/,
			example: ["#00ff00", "336699"],
			process: function(e) {
				return [
					parseInt(e[1], 16),
					parseInt(e[2], 16),
					parseInt(e[3], 16)
				];
			}
		},
		{
			re: /^(\w{1})(\w{1})(\w{1})$/,
			example: ["#fb0", "f0f"],
			process: function(e) {
				return [
					parseInt(e[1] + e[1], 16),
					parseInt(e[2] + e[2], 16),
					parseInt(e[3] + e[3], 16)
				];
			}
		}
	], r = 0; r < n.length; r++) {
		var i = n[r].re, a = n[r].process, o = i.exec(e);
		o && (t = a(o), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
	}
	this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
	}, this.toHex = function() {
		var e = this.r.toString(16), t = this.g.toString(16), n = this.b.toString(16);
		return e.length == 1 && (e = "0" + e), t.length == 1 && (t = "0" + t), n.length == 1 && (n = "0" + n), "#" + e + t + n;
	};
}
function Ge(e, t) {
	var n = e[0], r = e[1], i = e[2], a = e[3];
	n = qe(n, r, i, a, t[0], 7, -680876936), a = qe(a, n, r, i, t[1], 12, -389564586), i = qe(i, a, n, r, t[2], 17, 606105819), r = qe(r, i, a, n, t[3], 22, -1044525330), n = qe(n, r, i, a, t[4], 7, -176418897), a = qe(a, n, r, i, t[5], 12, 1200080426), i = qe(i, a, n, r, t[6], 17, -1473231341), r = qe(r, i, a, n, t[7], 22, -45705983), n = qe(n, r, i, a, t[8], 7, 1770035416), a = qe(a, n, r, i, t[9], 12, -1958414417), i = qe(i, a, n, r, t[10], 17, -42063), r = qe(r, i, a, n, t[11], 22, -1990404162), n = qe(n, r, i, a, t[12], 7, 1804603682), a = qe(a, n, r, i, t[13], 12, -40341101), i = qe(i, a, n, r, t[14], 17, -1502002290), n = Je(n, r = qe(r, i, a, n, t[15], 22, 1236535329), i, a, t[1], 5, -165796510), a = Je(a, n, r, i, t[6], 9, -1069501632), i = Je(i, a, n, r, t[11], 14, 643717713), r = Je(r, i, a, n, t[0], 20, -373897302), n = Je(n, r, i, a, t[5], 5, -701558691), a = Je(a, n, r, i, t[10], 9, 38016083), i = Je(i, a, n, r, t[15], 14, -660478335), r = Je(r, i, a, n, t[4], 20, -405537848), n = Je(n, r, i, a, t[9], 5, 568446438), a = Je(a, n, r, i, t[14], 9, -1019803690), i = Je(i, a, n, r, t[3], 14, -187363961), r = Je(r, i, a, n, t[8], 20, 1163531501), n = Je(n, r, i, a, t[13], 5, -1444681467), a = Je(a, n, r, i, t[2], 9, -51403784), i = Je(i, a, n, r, t[7], 14, 1735328473), n = Ye(n, r = Je(r, i, a, n, t[12], 20, -1926607734), i, a, t[5], 4, -378558), a = Ye(a, n, r, i, t[8], 11, -2022574463), i = Ye(i, a, n, r, t[11], 16, 1839030562), r = Ye(r, i, a, n, t[14], 23, -35309556), n = Ye(n, r, i, a, t[1], 4, -1530992060), a = Ye(a, n, r, i, t[4], 11, 1272893353), i = Ye(i, a, n, r, t[7], 16, -155497632), r = Ye(r, i, a, n, t[10], 23, -1094730640), n = Ye(n, r, i, a, t[13], 4, 681279174), a = Ye(a, n, r, i, t[0], 11, -358537222), i = Ye(i, a, n, r, t[3], 16, -722521979), r = Ye(r, i, a, n, t[6], 23, 76029189), n = Ye(n, r, i, a, t[9], 4, -640364487), a = Ye(a, n, r, i, t[12], 11, -421815835), i = Ye(i, a, n, r, t[15], 16, 530742520), n = Xe(n, r = Ye(r, i, a, n, t[2], 23, -995338651), i, a, t[0], 6, -198630844), a = Xe(a, n, r, i, t[7], 10, 1126891415), i = Xe(i, a, n, r, t[14], 15, -1416354905), r = Xe(r, i, a, n, t[5], 21, -57434055), n = Xe(n, r, i, a, t[12], 6, 1700485571), a = Xe(a, n, r, i, t[3], 10, -1894986606), i = Xe(i, a, n, r, t[10], 15, -1051523), r = Xe(r, i, a, n, t[1], 21, -2054922799), n = Xe(n, r, i, a, t[8], 6, 1873313359), a = Xe(a, n, r, i, t[15], 10, -30611744), i = Xe(i, a, n, r, t[6], 15, -1560198380), r = Xe(r, i, a, n, t[13], 21, 1309151649), n = Xe(n, r, i, a, t[4], 6, -145523070), a = Xe(a, n, r, i, t[11], 10, -1120210379), i = Xe(i, a, n, r, t[2], 15, 718787259), r = Xe(r, i, a, n, t[9], 21, -343485551), e[0] = nt(n, e[0]), e[1] = nt(r, e[1]), e[2] = nt(i, e[2]), e[3] = nt(a, e[3]);
}
function Ke(e, t, n, r, i, a) {
	return t = nt(nt(t, e), nt(r, a)), nt(t << i | t >>> 32 - i, n);
}
function qe(e, t, n, r, i, a, o) {
	return Ke(t & n | ~t & r, e, t, i, a, o);
}
function Je(e, t, n, r, i, a, o) {
	return Ke(t & r | n & ~r, e, t, i, a, o);
}
function Ye(e, t, n, r, i, a, o) {
	return Ke(t ^ n ^ r, e, t, i, a, o);
}
function Xe(e, t, n, r, i, a, o) {
	return Ke(n ^ (t | ~r), e, t, i, a, o);
}
function Ze(e) {
	var t, n = e.length, r = [
		1732584193,
		-271733879,
		-1732584194,
		271733878
	];
	for (t = 64; t <= e.length; t += 64) Ge(r, Qe(e.substring(t - 64, t)));
	e = e.substring(t - 64);
	var i = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	];
	for (t = 0; t < e.length; t++) i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
	if (i[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (Ge(r, i), t = 0; t < 16; t++) i[t] = 0;
	return i[14] = 8 * n, Ge(r, i), r;
}
function Qe(e) {
	var t, n = [];
	for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
	return n;
}
function $e(e) {
	for (var t = "", n = 0; n < 4; n++) t += Ot[e >> 8 * n + 4 & 15] + Ot[e >> 8 * n & 15];
	return t;
}
function et(e) {
	return String.fromCharCode((255 & e) >> 0, (65280 & e) >> 8, (16711680 & e) >> 16, (4278190080 & e) >> 24);
}
function tt(e) {
	return Ze(e).map(et).join("");
}
function nt(e, t) {
	if (kt) {
		var n = (65535 & e) + (65535 & t);
		return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
	}
	return e + t & 4294967295;
}
function rt(e, t) {
	var n, r, i, a;
	if (e !== n) {
		for (var o = (i = e, a = 1 + (256 / e.length >> 0), Array(a + 1).join(i)), s = [], c = 0; c < 256; c++) s[c] = c;
		var l = 0;
		for (c = 0; c < 256; c++) {
			var u = s[c];
			l = (l + u + o.charCodeAt(c)) % 256, s[c] = s[l], s[l] = u;
		}
		n = e, r = s;
	} else s = r;
	var d = t.length, f = 0, p = 0, m = "";
	for (c = 0; c < d; c++) p = (p + (u = s[f = (f + 1) % 256])) % 256, s[f] = s[p], s[p] = u, o = s[(s[f] + s[p]) % 256], m += String.fromCharCode(t.charCodeAt(c) ^ o);
	return m;
}
function it(e, t, n, r) {
	this.v = 1, this.r = 2;
	var i = 192;
	e.forEach((function(e) {
		if (At.perm !== void 0) throw Error("Invalid permission: " + e);
		i += At[e];
	})), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
	var a = (t + this.padding).substr(0, 32), o = (n + this.padding).substr(0, 32);
	this.O = this.processOwnerPassword(a, o), this.P = -(1 + (255 ^ i)), this.encryptionKey = tt(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = rt(this.encryptionKey, this.padding);
}
function at(e) {
	if (/[^\u0000-\u00ff]/.test(e)) throw Error("Invalid PDF Name Object: " + e + ", Only accept ASCII characters.");
	for (var t = "", n = e.length, r = 0; r < n; r++) {
		var i = e.charCodeAt(r);
		i < 33 || i === 35 || i === 37 || i === 40 || i === 41 || i === 47 || i === 60 || i === 62 || i === 91 || i === 93 || i === 123 || i === 125 || i > 126 ? t += "#" + ("0" + i.toString(16)).slice(-2) : t += e[r];
	}
	return t;
}
function ot(e) {
	if (s(e) !== "object") throw Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
	var t = {};
	this.subscribe = function(e, n, r) {
		if (r ||= !1, typeof e != "string" || typeof n != "function" || typeof r != "boolean") throw Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
		t.hasOwnProperty(e) || (t[e] = {});
		var i = Math.random().toString(35);
		return t[e][i] = [n, !!r], i;
	}, this.unsubscribe = function(e) {
		for (var n in t) if (t[n][e]) return delete t[n][e], Object.keys(t[n]).length === 0 && delete t[n], !0;
		return !1;
	}, this.publish = function(n) {
		if (t.hasOwnProperty(n)) {
			var r = Array.prototype.slice.call(arguments, 1), i = [];
			for (var a in t[n]) {
				var o = t[n][a];
				try {
					o[0].apply(e, r);
				} catch (e) {
					Z.console && wt.error("jsPDF PubSub Error", e.message, e);
				}
				o[1] && i.push(a);
			}
			i.length && i.forEach(this.unsubscribe);
		}
	}, this.getTopics = function() {
		return t;
	};
}
function st(e) {
	if (!(this instanceof st)) return new st(e);
	var t = "opacity,stroke-opacity".split(",");
	for (var n in e) e.hasOwnProperty(n) && t.indexOf(n) >= 0 && (this[n] = e[n]);
	this.id = "", this.objectNumber = -1;
}
function ct(e, t) {
	this.gState = e, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function lt(e, t, n, r, i) {
	if (!(this instanceof lt)) return new lt(e, t, n, r, i);
	this.type = e === "axial" ? 2 : 3, this.coords = t, this.colors = n, ct.call(this, r, i);
}
function ut(e, t, n, r, i) {
	if (!(this instanceof ut)) return new ut(e, t, n, r, i);
	this.boundingBox = e, this.xStep = t, this.yStep = n, this.stream = "", this.cloneIndex = 0, ct.call(this, r, i);
}
function X(e) {
	var t, n = typeof arguments[0] == "string" ? arguments[0] : "p", r = arguments[1], i = arguments[2], a = arguments[3], o = [], c = 1, l = 16, u = "S", d = null;
	s(e ||= {}) === "object" && (n = e.orientation, r = e.unit || r, i = e.format || i, a = e.compress || e.compressPdf || a, (d = e.encryption || null) !== null && (d.userPassword = d.userPassword || "", d.ownerPassword = d.ownerPassword || "", d.userPermissions = d.userPermissions || []), c = typeof e.userUnit == "number" ? Math.abs(e.userUnit) : 1, e.precision !== void 0 && (t = e.precision), e.floatPrecision !== void 0 && (l = e.floatPrecision), u = e.defaultPathOperation || "S"), o = e.filters || (!0 === a ? ["FlateEncode"] : o), r ||= "mm", n = ("" + (n || "P")).toLowerCase();
	var f = e.putOnlyUsedFonts || !1, p = {}, m = {
		internal: {},
		__private__: {}
	};
	m.__private__.PubSub = ot;
	var h = "1.3", g = m.__private__.getPdfVersion = function() {
		return h;
	};
	m.__private__.setPdfVersion = function(e) {
		h = e;
	};
	var _ = {
		a0: [2383.94, 3370.39],
		a1: [1683.78, 2383.94],
		a2: [1190.55, 1683.78],
		a3: [841.89, 1190.55],
		a4: [595.28, 841.89],
		a5: [419.53, 595.28],
		a6: [297.64, 419.53],
		a7: [209.76, 297.64],
		a8: [147.4, 209.76],
		a9: [104.88, 147.4],
		a10: [73.7, 104.88],
		b0: [2834.65, 4008.19],
		b1: [2004.09, 2834.65],
		b2: [1417.32, 2004.09],
		b3: [1000.63, 1417.32],
		b4: [708.66, 1000.63],
		b5: [498.9, 708.66],
		b6: [354.33, 498.9],
		b7: [249.45, 354.33],
		b8: [175.75, 249.45],
		b9: [124.72, 175.75],
		b10: [87.87, 124.72],
		c0: [2599.37, 3676.54],
		c1: [1836.85, 2599.37],
		c2: [1298.27, 1836.85],
		c3: [918.43, 1298.27],
		c4: [649.13, 918.43],
		c5: [459.21, 649.13],
		c6: [323.15, 459.21],
		c7: [229.61, 323.15],
		c8: [161.57, 229.61],
		c9: [113.39, 161.57],
		c10: [79.37, 113.39],
		dl: [311.81, 623.62],
		letter: [612, 792],
		"government-letter": [576, 756],
		legal: [612, 1008],
		"junior-legal": [576, 360],
		ledger: [1224, 792],
		tabloid: [792, 1224],
		"credit-card": [153, 243]
	};
	m.__private__.getPageFormats = function() {
		return _;
	};
	var v = m.__private__.getPageFormat = function(e) {
		return _[e];
	};
	i ||= "a4";
	var y = {
		COMPAT: "compat",
		ADVANCED: "advanced"
	}, b = y.COMPAT;
	function x() {
		this.saveGraphicsState(), G(new Y(q, 0, 0, -q, 0, Bn() * q).toString() + " cm"), this.setFontSize(this.getFontSize() / q), u = "n", b = y.ADVANCED;
	}
	function S() {
		this.restoreGraphicsState(), u = "S", b = y.COMPAT;
	}
	var C = m.__private__.combineFontStyleAndFontWeight = function(e, t) {
		if (e == "bold" && t == "normal" || e == "bold" && t == 400 || e == "normal" && t == "italic" || e == "bold" && t == "italic") throw Error("Invalid Combination of fontweight and fontstyle");
		return t && (e = t == 400 || t === "normal" ? e === "italic" ? "italic" : "normal" : t != 700 && t !== "bold" || e !== "normal" ? (t == 700 ? "bold" : t) + "" + e : "bold"), e;
	};
	m.advancedAPI = function(e) {
		var t = b === y.COMPAT;
		return t && x.call(this), typeof e != "function" || (e(this), t && S.call(this)), this;
	}, m.compatAPI = function(e) {
		var t = b === y.ADVANCED;
		return t && S.call(this), typeof e != "function" || (e(this), t && x.call(this)), this;
	}, m.isAdvancedAPI = function() {
		return b === y.ADVANCED;
	};
	var w, T = function(e) {
		if (b !== y.ADVANCED) throw Error(e + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
	}, E = m.roundToPrecision = m.__private__.roundToPrecision = function(e, n) {
		var r = t || n;
		if (isNaN(e) || isNaN(r)) throw Error("Invalid argument passed to jsPDF.roundToPrecision");
		return e.toFixed(r).replace(/0+$/, "");
	};
	w = m.hpf = m.__private__.hpf = typeof l == "number" ? function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.hpf");
		return E(e, l);
	} : l === "smart" ? function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.hpf");
		return E(e, e > -1 && e < 1 ? 16 : 5);
	} : function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.hpf");
		return E(e, 16);
	};
	var D = m.f2 = m.__private__.f2 = function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.f2");
		return E(e, 2);
	}, O = m.__private__.f3 = function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.f3");
		return E(e, 3);
	}, k = m.scale = m.__private__.scale = function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.scale");
		return b === y.COMPAT ? e * q : b === y.ADVANCED ? e : void 0;
	}, A = function(e) {
		return b === y.COMPAT ? Bn() - e : b === y.ADVANCED ? e : void 0;
	}, j = function(e) {
		return k(A(e));
	};
	m.__private__.setPrecision = m.setPrecision = function(e) {
		typeof parseInt(e, 10) == "number" && (t = parseInt(e, 10));
	};
	var M, N = "00000000000000000000000000000000", P = m.__private__.getFileId = function() {
		return N;
	}, F = m.__private__.setFileId = function(e) {
		return N = e !== void 0 && /^[a-fA-F0-9]{32}$/.test(e) ? e.toUpperCase() : N.split("").map((function() {
			return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
		})).join(""), d !== null && (Jt = new it(d.userPermissions, d.userPassword, d.ownerPassword, N)), N;
	};
	m.setFileId = function(e) {
		return F(e), this;
	}, m.getFileId = function() {
		return P();
	};
	var I = m.__private__.convertDateToPDFDate = function(e) {
		var t = e.getTimezoneOffset(), n = t < 0 ? "+" : "-", r = Math.floor(Math.abs(t / 60)), i = Math.abs(t % 60), a = [
			n,
			B(r),
			"'",
			B(i),
			"'"
		].join("");
		return [
			"D:",
			e.getFullYear(),
			B(e.getMonth() + 1),
			B(e.getDate()),
			B(e.getHours()),
			B(e.getMinutes()),
			B(e.getSeconds()),
			a
		].join("");
	}, L = m.__private__.convertPDFDateToDate = function(e) {
		var t = parseInt(e.substr(2, 4), 10), n = parseInt(e.substr(6, 2), 10) - 1, r = parseInt(e.substr(8, 2), 10), i = parseInt(e.substr(10, 2), 10), a = parseInt(e.substr(12, 2), 10), o = parseInt(e.substr(14, 2), 10);
		return new Date(t, n, r, i, a, o, 0);
	}, ee = m.__private__.setCreationDate = function(e) {
		var t;
		if (e === void 0 && (e = /* @__PURE__ */ new Date()), e instanceof Date) t = I(e);
		else {
			if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(e)) throw Error("Invalid argument passed to jsPDF.setCreationDate");
			t = e;
		}
		return M = t;
	}, R = m.__private__.getCreationDate = function(e) {
		var t = M;
		return e === "jsDate" && (t = L(M)), t;
	};
	m.setCreationDate = function(e) {
		return ee(e), this;
	}, m.getCreationDate = function(e) {
		return R(e);
	};
	var z, B = m.__private__.padd2 = function(e) {
		return ("0" + parseInt(e)).slice(-2);
	}, te = m.__private__.padd2Hex = function(e) {
		return ("00" + (e = e.toString())).substr(e.length);
	}, V = 0, H = [], U = [], ne = 0, re = [], W = [], ie = !1, ae = U, oe = function() {
		V = 0, ne = 0, U = [], H = [], re = [], Ke = He(), qe = He();
	};
	m.__private__.setCustomOutputDestination = function(e) {
		ie = !0, ae = e;
	};
	var se = function(e) {
		ie || (ae = e);
	};
	m.__private__.resetCustomOutputDestination = function() {
		ie = !1, ae = U;
	};
	var G = m.__private__.out = function(e) {
		return e = e.toString(), ne += e.length + 1, ae.push(e), ae;
	}, ce = m.__private__.write = function(e) {
		return G(arguments.length === 1 ? e.toString() : Array.prototype.join.call(arguments, " "));
	}, le = m.__private__.getArrayBuffer = function(e) {
		for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n); t--;) r[t] = e.charCodeAt(t);
		return n;
	}, ue = [
		[
			"Helvetica",
			"helvetica",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-Bold",
			"helvetica",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-Oblique",
			"helvetica",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Helvetica-BoldOblique",
			"helvetica",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"Courier",
			"courier",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Courier-Bold",
			"courier",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Courier-Oblique",
			"courier",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Courier-BoldOblique",
			"courier",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"Times-Roman",
			"times",
			"normal",
			"WinAnsiEncoding"
		],
		[
			"Times-Bold",
			"times",
			"bold",
			"WinAnsiEncoding"
		],
		[
			"Times-Italic",
			"times",
			"italic",
			"WinAnsiEncoding"
		],
		[
			"Times-BoldItalic",
			"times",
			"bolditalic",
			"WinAnsiEncoding"
		],
		[
			"ZapfDingbats",
			"zapfdingbats",
			"normal",
			null
		],
		[
			"Symbol",
			"symbol",
			"normal",
			null
		]
	];
	m.__private__.getStandardFonts = function() {
		return ue;
	};
	var K = e.fontSize || 16;
	m.__private__.setFontSize = m.setFontSize = function(e) {
		return K = b === y.ADVANCED ? e / q : e, this;
	};
	var de, fe = m.__private__.getFontSize = m.getFontSize = function() {
		return b === y.COMPAT ? K : K * q;
	}, pe = e.R2L || !1;
	m.__private__.setR2L = m.setR2L = function(e) {
		return pe = e, this;
	}, m.__private__.getR2L = m.getR2L = function() {
		return pe;
	};
	var me, he = m.__private__.setZoomMode = function(e) {
		var t = [
			void 0,
			null,
			"fullwidth",
			"fullheight",
			"fullpage",
			"original"
		];
		if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(e)) de = e;
		else if (isNaN(e)) {
			if (t.indexOf(e) === -1) throw Error("zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. \"" + e + "\" is not recognized.");
			de = e;
		} else de = parseInt(e, 10);
	};
	m.__private__.getZoomMode = function() {
		return de;
	};
	var ge, _e = m.__private__.setPageMode = function(e) {
		if ([
			void 0,
			null,
			"UseNone",
			"UseOutlines",
			"UseThumbs",
			"FullScreen"
		].indexOf(e) == -1) throw Error("Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. \"" + e + "\" is not recognized.");
		me = e;
	};
	m.__private__.getPageMode = function() {
		return me;
	};
	var ve = m.__private__.setLayoutMode = function(e) {
		if ([
			void 0,
			null,
			"continuous",
			"single",
			"twoleft",
			"tworight",
			"two"
		].indexOf(e) == -1) throw Error("Layout mode must be one of continuous, single, twoleft, tworight. \"" + e + "\" is not recognized.");
		ge = e;
	};
	m.__private__.getLayoutMode = function() {
		return ge;
	}, m.__private__.setDisplayMode = m.setDisplayMode = function(e, t, n) {
		return he(e), ve(t), _e(n), this;
	};
	var ye = {
		title: "",
		subject: "",
		author: "",
		keywords: "",
		creator: ""
	};
	m.__private__.getDocumentProperty = function(e) {
		if (Object.keys(ye).indexOf(e) === -1) throw Error("Invalid argument passed to jsPDF.getDocumentProperty");
		return ye[e];
	}, m.__private__.getDocumentProperties = function() {
		return ye;
	}, m.__private__.setDocumentProperties = m.setProperties = m.setDocumentProperties = function(e) {
		for (var t in ye) ye.hasOwnProperty(t) && e[t] && (ye[t] = e[t]);
		return this;
	}, m.__private__.setDocumentProperty = function(e, t) {
		if (Object.keys(ye).indexOf(e) === -1) throw Error("Invalid arguments passed to jsPDF.setDocumentProperty");
		return ye[e] = t;
	};
	var be, q, xe, Se, Ce, J = {}, we = {}, Te = [], Ee = {}, De = {}, Oe = {}, ke = {}, Ae = null, je = 0, Me = [], Ne = new ot(m), Pe = e.hotfixes || [], Fe = {}, Ie = {}, Le = [], Y = function e(t, n, r, i, a, o) {
		if (!(this instanceof e)) return new e(t, n, r, i, a, o);
		isNaN(t) && (t = 1), isNaN(n) && (n = 0), isNaN(r) && (r = 0), isNaN(i) && (i = 1), isNaN(a) && (a = 0), isNaN(o) && (o = 0), this._matrix = [
			t,
			n,
			r,
			i,
			a,
			o
		];
	};
	Object.defineProperty(Y.prototype, "sx", {
		get: function() {
			return this._matrix[0];
		},
		set: function(e) {
			this._matrix[0] = e;
		}
	}), Object.defineProperty(Y.prototype, "shy", {
		get: function() {
			return this._matrix[1];
		},
		set: function(e) {
			this._matrix[1] = e;
		}
	}), Object.defineProperty(Y.prototype, "shx", {
		get: function() {
			return this._matrix[2];
		},
		set: function(e) {
			this._matrix[2] = e;
		}
	}), Object.defineProperty(Y.prototype, "sy", {
		get: function() {
			return this._matrix[3];
		},
		set: function(e) {
			this._matrix[3] = e;
		}
	}), Object.defineProperty(Y.prototype, "tx", {
		get: function() {
			return this._matrix[4];
		},
		set: function(e) {
			this._matrix[4] = e;
		}
	}), Object.defineProperty(Y.prototype, "ty", {
		get: function() {
			return this._matrix[5];
		},
		set: function(e) {
			this._matrix[5] = e;
		}
	}), Object.defineProperty(Y.prototype, "a", {
		get: function() {
			return this._matrix[0];
		},
		set: function(e) {
			this._matrix[0] = e;
		}
	}), Object.defineProperty(Y.prototype, "b", {
		get: function() {
			return this._matrix[1];
		},
		set: function(e) {
			this._matrix[1] = e;
		}
	}), Object.defineProperty(Y.prototype, "c", {
		get: function() {
			return this._matrix[2];
		},
		set: function(e) {
			this._matrix[2] = e;
		}
	}), Object.defineProperty(Y.prototype, "d", {
		get: function() {
			return this._matrix[3];
		},
		set: function(e) {
			this._matrix[3] = e;
		}
	}), Object.defineProperty(Y.prototype, "e", {
		get: function() {
			return this._matrix[4];
		},
		set: function(e) {
			this._matrix[4] = e;
		}
	}), Object.defineProperty(Y.prototype, "f", {
		get: function() {
			return this._matrix[5];
		},
		set: function(e) {
			this._matrix[5] = e;
		}
	}), Object.defineProperty(Y.prototype, "rotation", { get: function() {
		return Math.atan2(this.shx, this.sx);
	} }), Object.defineProperty(Y.prototype, "scaleX", { get: function() {
		return this.decompose().scale.sx;
	} }), Object.defineProperty(Y.prototype, "scaleY", { get: function() {
		return this.decompose().scale.sy;
	} }), Object.defineProperty(Y.prototype, "isIdentity", { get: function() {
		return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
	} }), Y.prototype.join = function(e) {
		return [
			this.sx,
			this.shy,
			this.shx,
			this.sy,
			this.tx,
			this.ty
		].map(w).join(e);
	}, Y.prototype.multiply = function(e) {
		return new Y(e.sx * this.sx + e.shy * this.shx, e.sx * this.shy + e.shy * this.sy, e.shx * this.sx + e.sy * this.shx, e.shx * this.shy + e.sy * this.sy, e.tx * this.sx + e.ty * this.shx + this.tx, e.tx * this.shy + e.ty * this.sy + this.ty);
	}, Y.prototype.decompose = function() {
		var e = this.sx, t = this.shy, n = this.shx, r = this.sy, i = this.tx, a = this.ty, o = Math.sqrt(e * e + t * t), s = (e /= o) * n + (t /= o) * r;
		n -= e * s, r -= t * s;
		var c = Math.sqrt(n * n + r * r);
		return s /= c, e * (r /= c) < t * (n /= c) && (e = -e, t = -t, s = -s, o = -o), {
			scale: new Y(o, 0, 0, c, 0, 0),
			translate: new Y(1, 0, 0, 1, i, a),
			rotate: new Y(e, t, -t, e, 0, 0),
			skew: new Y(1, 0, s, 1, 0, 0)
		};
	}, Y.prototype.toString = function(e) {
		return this.join(" ");
	}, Y.prototype.inversed = function() {
		var e = this.sx, t = this.shy, n = this.shx, r = this.sy, i = this.tx, a = this.ty, o = 1 / (e * r - t * n), s = r * o, c = -t * o, l = -n * o, u = e * o;
		return new Y(s, c, l, u, -s * i - l * a, -c * i - u * a);
	}, Y.prototype.applyToPoint = function(e) {
		return new Mn(e.x * this.sx + e.y * this.shx + this.tx, e.x * this.shy + e.y * this.sy + this.ty);
	}, Y.prototype.applyToRectangle = function(e) {
		var t = this.applyToPoint(e), n = this.applyToPoint(new Mn(e.x + e.w, e.y + e.h));
		return new Nn(t.x, t.y, n.x - t.x, n.y - t.y);
	}, Y.prototype.clone = function() {
		var e = this.sx, t = this.shy, n = this.shx, r = this.sy, i = this.tx, a = this.ty;
		return new Y(e, t, n, r, i, a);
	}, m.Matrix = Y;
	var Re = m.matrixMult = function(e, t) {
		return t.multiply(e);
	}, ze = new Y(1, 0, 0, 1, 0, 0);
	m.unitMatrix = m.identityMatrix = ze;
	var Be = function(e, t) {
		if (!De[e]) {
			var n = (t instanceof lt ? "Sh" : "P") + (Object.keys(Ee).length + 1).toString(10);
			t.id = n, De[e] = n, Ee[n] = t, Ne.publish("addPattern", t);
		}
	};
	m.ShadingPattern = lt, m.TilingPattern = ut, m.addShadingPattern = function(e, t) {
		return T("addShadingPattern()"), Be(e, t), this;
	}, m.beginTilingPattern = function(e) {
		T("beginTilingPattern()"), Fn(e.boundingBox[0], e.boundingBox[1], e.boundingBox[2] - e.boundingBox[0], e.boundingBox[3] - e.boundingBox[1], e.matrix);
	}, m.endTilingPattern = function(e, t) {
		T("endTilingPattern()"), t.stream = W[z].join("\n"), Be(e, t), Ne.publish("endTilingPattern", t), Le.pop().restore();
	};
	var Ve = m.__private__.newObject = function() {
		var e = He();
		return Ue(e, !0), e;
	}, He = m.__private__.newObjectDeferred = function() {
		return V++, H[V] = function() {
			return ne;
		}, V;
	}, Ue = function(e, t) {
		return t = typeof t == "boolean" && t, H[e] = ne, t && G(e + " 0 obj"), e;
	}, Ge = m.__private__.newAdditionalObject = function() {
		var e = {
			objId: He(),
			content: ""
		};
		return re.push(e), e;
	}, Ke = He(), qe = He(), Je = m.__private__.decodeColorString = function(e) {
		var t = e.split(" ");
		if (t.length !== 2 || t[1] !== "g" && t[1] !== "G") t.length === 5 && (t[4] === "k" || t[4] === "K") && (t = [
			(1 - t[0]) * (1 - t[3]),
			(1 - t[1]) * (1 - t[3]),
			(1 - t[2]) * (1 - t[3]),
			"r"
		]);
		else {
			var n = parseFloat(t[0]);
			t = [
				n,
				n,
				n,
				"r"
			];
		}
		for (var r = "#", i = 0; i < 3; i++) r += ("0" + Math.floor(255 * parseFloat(t[i])).toString(16)).slice(-2);
		return r;
	}, Ye = m.__private__.encodeColorString = function(e) {
		var t;
		typeof e == "string" && (e = { ch1: e });
		var n = e.ch1, r = e.ch2, i = e.ch3, a = e.ch4, o = e.pdfColorType === "draw" ? [
			"G",
			"RG",
			"K"
		] : [
			"g",
			"rg",
			"k"
		];
		if (typeof n == "string" && n.charAt(0) !== "#") {
			var c = new We(n);
			if (c.ok) n = c.toHex();
			else if (!/^\d*\.?\d*$/.test(n)) throw Error("Invalid color \"" + n + "\" passed to jsPDF.encodeColorString.");
		}
		if (typeof n == "string" && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), typeof n == "string" && /^#[0-9A-Fa-f]{6}$/.test(n)) {
			var l = parseInt(n.substr(1), 16);
			n = l >> 16 & 255, r = l >> 8 & 255, i = 255 & l;
		}
		if (r === void 0 || a === void 0 && n === r && r === i) if (typeof n == "string") t = n + " " + o[0];
		else switch (e.precision) {
			case 2:
				t = D(n / 255) + " " + o[0];
				break;
			case 3:
			default: t = O(n / 255) + " " + o[0];
		}
		else if (a === void 0 || s(a) === "object") {
			if (a && !isNaN(a.a) && a.a === 0) return t = [
				"1.",
				"1.",
				"1.",
				o[1]
			].join(" ");
			if (typeof n == "string") t = [
				n,
				r,
				i,
				o[1]
			].join(" ");
			else switch (e.precision) {
				case 2:
					t = [
						D(n / 255),
						D(r / 255),
						D(i / 255),
						o[1]
					].join(" ");
					break;
				default:
				case 3: t = [
					O(n / 255),
					O(r / 255),
					O(i / 255),
					o[1]
				].join(" ");
			}
		} else if (typeof n == "string") t = [
			n,
			r,
			i,
			a,
			o[2]
		].join(" ");
		else switch (e.precision) {
			case 2:
				t = [
					D(n),
					D(r),
					D(i),
					D(a),
					o[2]
				].join(" ");
				break;
			case 3:
			default: t = [
				O(n),
				O(r),
				O(i),
				O(a),
				o[2]
			].join(" ");
		}
		return t;
	}, Xe = m.__private__.getFilters = function() {
		return o;
	}, Ze = m.__private__.putStream = function(e) {
		var t = (e ||= {}).data || "", n = e.filters || Xe(), r = e.alreadyAppliedFilters || [], i = e.addLength1 || !1, a = t.length, o = e.objectId, s = function(e) {
			return e;
		};
		if (d !== null && o === void 0) throw Error("ObjectId must be passed to putStream for file encryption");
		d !== null && (s = Jt.encryptor(o, 0));
		var c = {};
		!0 === n && (n = ["FlateEncode"]);
		var l = e.additionalKeyValues || [], u = (c = X.API.processDataByFilters === void 0 ? {
			data: t,
			reverseChain: []
		} : X.API.processDataByFilters(t, n)).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
		if (c.data.length !== 0 && (l.push({
			key: "Length",
			value: c.data.length
		}), !0 === i && l.push({
			key: "Length1",
			value: a
		})), u.length != 0) if (u.split("/").length - 1 == 1) l.push({
			key: "Filter",
			value: u
		});
		else {
			l.push({
				key: "Filter",
				value: "[" + u + "]"
			});
			for (var f = 0; f < l.length; f += 1) if (l[f].key === "DecodeParms") {
				for (var p = [], m = 0; m < c.reverseChain.split("/").length - 1; m += 1) p.push("null");
				p.push(l[f].value), l[f].value = "[" + p.join(" ") + "]";
			}
		}
		G("<<");
		for (var h = 0; h < l.length; h++) G("/" + l[h].key + " " + l[h].value);
		G(">>"), c.data.length !== 0 && (G("stream"), G(s(c.data)), G("endstream"));
	}, Qe = m.__private__.putPage = function(e) {
		var t = e.number, n = e.data, r = e.objId, i = e.contentsObjId;
		Ue(r, !0), G("<</Type /Page"), G("/Parent " + e.rootDictionaryObjId + " 0 R"), G("/Resources " + e.resourceDictionaryObjId + " 0 R"), G("/MediaBox [" + parseFloat(w(e.mediaBox.bottomLeftX)) + " " + parseFloat(w(e.mediaBox.bottomLeftY)) + " " + w(e.mediaBox.topRightX) + " " + w(e.mediaBox.topRightY) + "]"), e.cropBox !== null && G("/CropBox [" + w(e.cropBox.bottomLeftX) + " " + w(e.cropBox.bottomLeftY) + " " + w(e.cropBox.topRightX) + " " + w(e.cropBox.topRightY) + "]"), e.bleedBox !== null && G("/BleedBox [" + w(e.bleedBox.bottomLeftX) + " " + w(e.bleedBox.bottomLeftY) + " " + w(e.bleedBox.topRightX) + " " + w(e.bleedBox.topRightY) + "]"), e.trimBox !== null && G("/TrimBox [" + w(e.trimBox.bottomLeftX) + " " + w(e.trimBox.bottomLeftY) + " " + w(e.trimBox.topRightX) + " " + w(e.trimBox.topRightY) + "]"), e.artBox !== null && G("/ArtBox [" + w(e.artBox.bottomLeftX) + " " + w(e.artBox.bottomLeftY) + " " + w(e.artBox.topRightX) + " " + w(e.artBox.topRightY) + "]"), typeof e.userUnit == "number" && e.userUnit !== 1 && G("/UserUnit " + e.userUnit), Ne.publish("putPage", {
			objId: r,
			pageContext: Me[t],
			pageNumber: t,
			page: n
		}), G("/Contents " + i + " 0 R"), G(">>"), G("endobj");
		var a = n.join("\n");
		return b === y.ADVANCED && (a += "\nQ"), Ue(i, !0), Ze({
			data: a,
			filters: Xe(),
			objectId: i
		}), G("endobj"), r;
	}, $e = m.__private__.putPages = function() {
		var e, t, n = [];
		for (e = 1; e <= je; e++) Me[e].objId = He(), Me[e].contentsObjId = He();
		for (e = 1; e <= je; e++) n.push(Qe({
			number: e,
			data: W[e],
			objId: Me[e].objId,
			contentsObjId: Me[e].contentsObjId,
			mediaBox: Me[e].mediaBox,
			cropBox: Me[e].cropBox,
			bleedBox: Me[e].bleedBox,
			trimBox: Me[e].trimBox,
			artBox: Me[e].artBox,
			userUnit: Me[e].userUnit,
			rootDictionaryObjId: Ke,
			resourceDictionaryObjId: qe
		}));
		Ue(Ke, !0), G("<</Type /Pages");
		var r = "/Kids [";
		for (t = 0; t < je; t++) r += n[t] + " 0 R ";
		G(r + "]"), G("/Count " + je), G(">>"), G("endobj"), Ne.publish("postPutPages");
	}, et = function(e) {
		Ne.publish("putFont", {
			font: e,
			out: G,
			newObject: Ve,
			putStream: Ze
		}), !0 !== e.isAlreadyPutted && (e.objectNumber = Ve(), G("<<"), G("/Type /Font"), G("/BaseFont /" + at(e.postScriptName)), G("/Subtype /Type1"), typeof e.encoding == "string" && G("/Encoding /" + e.encoding), G("/FirstChar 32"), G("/LastChar 255"), G(">>"), G("endobj"));
	}, tt = function() {
		for (var e in J) J.hasOwnProperty(e) && (!1 === f || !0 === f && p.hasOwnProperty(e)) && et(J[e]);
	}, nt = function(e) {
		e.objectNumber = Ve();
		var t = [];
		t.push({
			key: "Type",
			value: "/XObject"
		}), t.push({
			key: "Subtype",
			value: "/Form"
		}), t.push({
			key: "BBox",
			value: "[" + [
				w(e.x),
				w(e.y),
				w(e.x + e.width),
				w(e.y + e.height)
			].join(" ") + "]"
		}), t.push({
			key: "Matrix",
			value: "[" + e.matrix.toString() + "]"
		}), Ze({
			data: e.pages[1].join("\n"),
			additionalKeyValues: t,
			objectId: e.objectNumber
		}), G("endobj");
	}, rt = function() {
		for (var e in Fe) Fe.hasOwnProperty(e) && nt(Fe[e]);
	}, ct = function(e, t) {
		var n, r = [], i = 1 / (t - 1);
		for (n = 0; n < 1; n += i) r.push(n);
		if (r.push(1), e[0].offset != 0) {
			var a = {
				offset: 0,
				color: e[0].color
			};
			e.unshift(a);
		}
		if (e[e.length - 1].offset != 1) {
			var o = {
				offset: 1,
				color: e[e.length - 1].color
			};
			e.push(o);
		}
		for (var s = "", c = 0, l = 0; l < r.length; l++) {
			for (n = r[l]; n > e[c + 1].offset;) c++;
			var u = e[c].offset, d = (n - u) / (e[c + 1].offset - u), f = e[c].color, p = e[c + 1].color;
			s += te(Math.round((1 - d) * f[0] + d * p[0]).toString(16)) + te(Math.round((1 - d) * f[1] + d * p[1]).toString(16)) + te(Math.round((1 - d) * f[2] + d * p[2]).toString(16));
		}
		return s.trim();
	}, dt = function(e, t) {
		t ||= 21;
		var n = Ve(), r = ct(e.colors, t), i = [];
		i.push({
			key: "FunctionType",
			value: "0"
		}), i.push({
			key: "Domain",
			value: "[0.0 1.0]"
		}), i.push({
			key: "Size",
			value: "[" + t + "]"
		}), i.push({
			key: "BitsPerSample",
			value: "8"
		}), i.push({
			key: "Range",
			value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
		}), i.push({
			key: "Decode",
			value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
		}), Ze({
			data: r,
			additionalKeyValues: i,
			alreadyAppliedFilters: ["/ASCIIHexDecode"],
			objectId: n
		}), G("endobj"), e.objectNumber = Ve(), G("<< /ShadingType " + e.type), G("/ColorSpace /DeviceRGB");
		var a = "/Coords [" + w(parseFloat(e.coords[0])) + " " + w(parseFloat(e.coords[1])) + " ";
		e.type === 2 ? a += w(parseFloat(e.coords[2])) + " " + w(parseFloat(e.coords[3])) : a += w(parseFloat(e.coords[2])) + " " + w(parseFloat(e.coords[3])) + " " + w(parseFloat(e.coords[4])) + " " + w(parseFloat(e.coords[5])), G(a += "]"), e.matrix && G("/Matrix [" + e.matrix.toString() + "]"), G("/Function " + n + " 0 R"), G("/Extend [true true]"), G(">>"), G("endobj");
	}, ft = function(e, t) {
		var n = He(), r = Ve();
		t.push({
			resourcesOid: n,
			objectOid: r
		}), e.objectNumber = r;
		var i = [];
		i.push({
			key: "Type",
			value: "/Pattern"
		}), i.push({
			key: "PatternType",
			value: "1"
		}), i.push({
			key: "PaintType",
			value: "1"
		}), i.push({
			key: "TilingType",
			value: "1"
		}), i.push({
			key: "BBox",
			value: "[" + e.boundingBox.map(w).join(" ") + "]"
		}), i.push({
			key: "XStep",
			value: w(e.xStep)
		}), i.push({
			key: "YStep",
			value: w(e.yStep)
		}), i.push({
			key: "Resources",
			value: n + " 0 R"
		}), e.matrix && i.push({
			key: "Matrix",
			value: "[" + e.matrix.toString() + "]"
		}), Ze({
			data: e.stream,
			additionalKeyValues: i,
			objectId: e.objectNumber
		}), G("endobj");
	}, pt = function(e) {
		for (var t in Ee) Ee.hasOwnProperty(t) && (Ee[t] instanceof lt ? dt(Ee[t]) : Ee[t] instanceof ut && ft(Ee[t], e));
	}, mt = function(e) {
		for (var t in e.objectNumber = Ve(), G("<<"), e) switch (t) {
			case "opacity":
				G("/ca " + D(e[t]));
				break;
			case "stroke-opacity": G("/CA " + D(e[t]));
		}
		G(">>"), G("endobj");
	}, ht = function() {
		for (var e in Oe) Oe.hasOwnProperty(e) && mt(Oe[e]);
	}, gt = function() {
		for (var e in G("/XObject <<"), Fe) Fe.hasOwnProperty(e) && Fe[e].objectNumber >= 0 && G("/" + e + " " + Fe[e].objectNumber + " 0 R");
		Ne.publish("putXobjectDict"), G(">>");
	}, _t = function() {
		Jt.oid = Ve(), G("<<"), G("/Filter /Standard"), G("/V " + Jt.v), G("/R " + Jt.r), G("/U <" + Jt.toHexString(Jt.U) + ">"), G("/O <" + Jt.toHexString(Jt.O) + ">"), G("/P " + Jt.P), G(">>"), G("endobj");
	}, vt = function() {
		for (var e in G("/Font <<"), J) J.hasOwnProperty(e) && (!1 === f || !0 === f && p.hasOwnProperty(e)) && G("/" + e + " " + J[e].objectNumber + " 0 R");
		G(">>");
	}, yt = function() {
		if (Object.keys(Ee).length > 0) {
			for (var e in G("/Shading <<"), Ee) Ee.hasOwnProperty(e) && Ee[e] instanceof lt && Ee[e].objectNumber >= 0 && G("/" + e + " " + Ee[e].objectNumber + " 0 R");
			Ne.publish("putShadingPatternDict"), G(">>");
		}
	}, bt = function(e) {
		if (Object.keys(Ee).length > 0) {
			for (var t in G("/Pattern <<"), Ee) Ee.hasOwnProperty(t) && Ee[t] instanceof m.TilingPattern && Ee[t].objectNumber >= 0 && Ee[t].objectNumber < e && G("/" + t + " " + Ee[t].objectNumber + " 0 R");
			Ne.publish("putTilingPatternDict"), G(">>");
		}
	}, xt = function() {
		if (Object.keys(Oe).length > 0) {
			for (var e in G("/ExtGState <<"), Oe) Oe.hasOwnProperty(e) && Oe[e].objectNumber >= 0 && G("/" + e + " " + Oe[e].objectNumber + " 0 R");
			Ne.publish("putGStateDict"), G(">>");
		}
	}, St = function(e) {
		Ue(e.resourcesOid, !0), G("<<"), G("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), vt(), yt(), bt(e.objectOid), xt(), gt(), G(">>"), G("endobj");
	}, Ct = function() {
		var e = [];
		tt(), ht(), rt(), pt(e), Ne.publish("putResources"), e.forEach(St), St({
			resourcesOid: qe,
			objectOid: 2 ** 53 - 1
		}), Ne.publish("postPutResources");
	}, Tt = function() {
		Ne.publish("putAdditionalObjects");
		for (var e = 0; e < re.length; e++) {
			var t = re[e];
			Ue(t.objId, !0), G(t.content), G("endobj");
		}
		Ne.publish("postPutAdditionalObjects");
	}, Ot = function(e) {
		we[e.fontName] = we[e.fontName] || {}, we[e.fontName][e.fontStyle] = e.id;
	}, kt = function(e, t, n, r, i) {
		var a = {
			id: "F" + (Object.keys(J).length + 1).toString(10),
			postScriptName: e,
			fontName: t,
			fontStyle: n,
			encoding: r,
			isStandardFont: i || !1,
			metadata: {}
		};
		return Ne.publish("addFont", {
			font: a,
			instance: this
		}), J[a.id] = a, Ot(a), a.id;
	}, At = function(e) {
		for (var t = 0, n = ue.length; t < n; t++) {
			var r = kt.call(this, e[t][0], e[t][1], e[t][2], ue[t][3], !0);
			!1 === f && (p[r] = !0);
			var i = e[t][0].split("-");
			Ot({
				id: r,
				fontName: i[0],
				fontStyle: i[1] || ""
			});
		}
		Ne.publish("addFonts", {
			fonts: J,
			dictionary: we
		});
	}, jt = function(e) {
		return e.foo = function() {
			try {
				return e.apply(this, arguments);
			} catch (e) {
				var t = e.stack || "";
				~t.indexOf(" at ") && (t = t.split(" at ")[1]);
				var n = "Error in function " + t.split("\n")[0].split("<")[0] + ": " + e.message;
				if (!Z.console) throw Error(n);
				Z.console.error(n, e), Z.alert && alert(n);
			}
		}, e.foo.bar = e, e.foo;
	}, Mt = function(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (i = (t ||= {}).sourceEncoding || "Unicode", o = t.outputEncoding, (t.autoencode || o) && J[be].metadata && J[be].metadata[i] && J[be].metadata[i].encoding && (a = J[be].metadata[i].encoding, !o && J[be].encoding && (o = J[be].encoding), !o && a.codePages && (o = a.codePages[0]), typeof o == "string" && (o = a[o]), o)) {
			for (c = !1, s = [], n = 0, r = e.length; n < r; n++) (l = o[e.charCodeAt(n)]) ? s.push(String.fromCharCode(l)) : s.push(e[n]), s[n].charCodeAt(0) >> 8 && (c = !0);
			e = s.join("");
		}
		for (n = e.length; c === void 0 && n !== 0;) e.charCodeAt(n - 1) >> 8 && (c = !0), n--;
		if (!c) return e;
		for (s = t.noBOM ? [] : [254, 255], n = 0, r = e.length; n < r; n++) {
			if ((u = (l = e.charCodeAt(n)) >> 8) >> 8) throw Error("Character at position " + n + " of string '" + e + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
			s.push(u), s.push(l - (u << 8));
		}
		return String.fromCharCode.apply(void 0, s);
	}, Nt = m.__private__.pdfEscape = m.pdfEscape = function(e, t) {
		return Mt(e, t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
	}, Pt = m.__private__.beginPage = function(e) {
		W[++je] = [], Me[je] = {
			objId: 0,
			contentsObjId: 0,
			userUnit: Number(c),
			artBox: null,
			bleedBox: null,
			cropBox: null,
			trimBox: null,
			mediaBox: {
				bottomLeftX: 0,
				bottomLeftY: 0,
				topRightX: Number(e[0]),
				topRightY: Number(e[1])
			}
		}, It(je), se(W[z]);
	}, Q = function(e, t) {
		var r, a, o;
		switch (n = t || n, typeof e == "string" && (r = v(e.toLowerCase()), Array.isArray(r) && (a = r[0], o = r[1])), Array.isArray(e) && (a = e[0] * q, o = e[1] * q), isNaN(a) && (a = i[0], o = i[1]), (a > 14400 || o > 14400) && (wt.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), a = Math.min(14400, a), o = Math.min(14400, o)), i = [a, o], n.substr(0, 1)) {
			case "l":
				o > a && (i = [o, a]);
				break;
			case "p": a > o && (i = [o, a]);
		}
		Pt(i), gn(mn), G(Cn), kn !== 0 && G(kn + " J"), An !== 0 && G(An + " j"), Ne.publish("addPage", { pageNumber: je });
	}, Ft = function(e) {
		e > 0 && e <= je && (W.splice(e, 1), Me.splice(e, 1), je--, z > je && (z = je), this.setPage(z));
	}, It = function(e) {
		e > 0 && e <= je && (z = e);
	}, Lt = m.__private__.getNumberOfPages = m.getNumberOfPages = function() {
		return W.length - 1;
	}, Rt = function(e, t, n) {
		var r, i = void 0;
		return n ||= {}, e = e === void 0 ? J[be].fontName : e, t = t === void 0 ? J[be].fontStyle : t, r = e.toLowerCase(), we[r] !== void 0 && we[r][t] !== void 0 ? i = we[r][t] : we[e] !== void 0 && we[e][t] !== void 0 ? i = we[e][t] : !1 === n.disableWarning && wt.warn("Unable to look up font label for font '" + e + "', '" + t + "'. Refer to getFontList() for available fonts."), i || n.noFallback || ((i = we.times[t]) ?? (i = we.times.normal)), i;
	}, zt = m.__private__.putInfo = function() {
		var e = Ve(), t = function(e) {
			return e;
		};
		for (var n in d !== null && (t = Jt.encryptor(e, 0)), G("<<"), G("/Producer (" + Nt(t("jsPDF " + X.version)) + ")"), ye) ye.hasOwnProperty(n) && ye[n] && G("/" + n.substr(0, 1).toUpperCase() + n.substr(1) + " (" + Nt(t(ye[n])) + ")");
		G("/CreationDate (" + Nt(t(M)) + ")"), G(">>"), G("endobj");
	}, Bt = m.__private__.putCatalog = function(e) {
		var t = (e ||= {}).rootDictionaryObjId || Ke;
		switch (Ve(), G("<<"), G("/Type /Catalog"), G("/Pages " + t + " 0 R"), de ||= "fullwidth", de) {
			case "fullwidth":
				G("/OpenAction [3 0 R /FitH null]");
				break;
			case "fullheight":
				G("/OpenAction [3 0 R /FitV null]");
				break;
			case "fullpage":
				G("/OpenAction [3 0 R /Fit]");
				break;
			case "original":
				G("/OpenAction [3 0 R /XYZ null null 1]");
				break;
			default:
				var n = "" + de;
				n.substr(n.length - 1) === "%" && (de = parseInt(de) / 100), typeof de == "number" && G("/OpenAction [3 0 R /XYZ null null " + D(de) + "]");
		}
		switch (ge ||= "continuous", ge) {
			case "continuous":
				G("/PageLayout /OneColumn");
				break;
			case "single":
				G("/PageLayout /SinglePage");
				break;
			case "two":
			case "twoleft":
				G("/PageLayout /TwoColumnLeft");
				break;
			case "tworight": G("/PageLayout /TwoColumnRight");
		}
		me && G("/PageMode /" + me), Ne.publish("putCatalog"), G(">>"), G("endobj");
	}, Vt = m.__private__.putTrailer = function() {
		G("trailer"), G("<<"), G("/Size " + (V + 1)), G("/Root " + V + " 0 R"), G("/Info " + (V - 1) + " 0 R"), d !== null && G("/Encrypt " + Jt.oid + " 0 R"), G("/ID [ <" + N + "> <" + N + "> ]"), G(">>");
	}, Ht = m.__private__.putHeader = function() {
		G("%PDF-" + h), G("%ºß¬à");
	}, Ut = m.__private__.putXRef = function() {
		var e = "0000000000";
		G("xref"), G("0 " + (V + 1)), G("0000000000 65535 f ");
		for (var t = 1; t <= V; t++) typeof H[t] == "function" ? G((e + H[t]()).slice(-10) + " 00000 n ") : H[t] === void 0 ? G("0000000000 00000 n ") : G((e + H[t]).slice(-10) + " 00000 n ");
	}, Wt = m.__private__.buildDocument = function() {
		oe(), se(U), Ne.publish("buildDocument"), Ht(), $e(), Tt(), Ct(), d !== null && _t(), zt(), Bt();
		var e = ne;
		return Ut(), Vt(), G("startxref"), G("" + e), G("%%EOF"), se(W[z]), U.join("\n");
	}, Gt = m.__private__.getBlob = function(e) {
		return new Blob([le(e)], { type: "application/pdf" });
	}, Kt = m.output = m.__private__.output = jt((function(e, t) {
		switch (typeof (t ||= {}) == "string" ? t = { filename: t } : t.filename = t.filename || "generated.pdf", e) {
			case void 0: return Wt();
			case "save":
				m.save(t.filename);
				break;
			case "arraybuffer": return le(Wt());
			case "blob": return Gt(Wt());
			case "bloburi":
			case "bloburl":
				if (Z.URL !== void 0 && typeof Z.URL.createObjectURL == "function") return Z.URL && Z.URL.createObjectURL(Gt(Wt())) || void 0;
				wt.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
				break;
			case "datauristring":
			case "dataurlstring":
				var n = "", r = Wt();
				try {
					n = Et(r);
				} catch {
					n = Et(unescape(encodeURIComponent(r)));
				}
				return "data:application/pdf;filename=" + t.filename + ";base64," + n;
			case "pdfobjectnewwindow":
				if (Object.prototype.toString.call(Z) === "[object Window]") {
					var i = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", a = " integrity=\"sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==\" crossorigin=\"anonymous\"";
					t.pdfObjectUrl && (i = t.pdfObjectUrl, a = "");
					var o = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src=\"" + i + "\"" + a + "><\/script><script >PDFObject.embed(\"" + this.output("dataurlstring") + "\", " + JSON.stringify(t) + ");<\/script></body></html>", s = Z.open();
					return s !== null && s.document.write(o), s;
				}
				throw Error("The option pdfobjectnewwindow just works in a browser-environment.");
			case "pdfjsnewwindow":
				if (Object.prototype.toString.call(Z) === "[object Window]") {
					var c = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id=\"pdfViewer\" src=\"" + (t.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + t.filename + "\" width=\"500px\" height=\"400px\" /></body></html>", l = Z.open();
					if (l !== null) {
						l.document.write(c);
						var u = this;
						l.document.documentElement.querySelector("#pdfViewer").onload = function() {
							l.document.title = t.filename, l.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(u.output("bloburl"));
						};
					}
					return l;
				}
				throw Error("The option pdfjsnewwindow just works in a browser-environment.");
			case "dataurlnewwindow":
				if (Object.prototype.toString.call(Z) !== "[object Window]") throw Error("The option dataurlnewwindow just works in a browser-environment.");
				var d = "<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src=\"" + this.output("datauristring", t) + "\"></iframe></body></html>", f = Z.open();
				if (f !== null && (f.document.write(d), f.document.title = t.filename), f || typeof safari > "u") return f;
				break;
			case "datauri":
			case "dataurl": return Z.document.location.href = this.output("datauristring", t);
			default: return null;
		}
	})), qt = function(e) {
		return !0 === Array.isArray(Pe) && Pe.indexOf(e) > -1;
	};
	switch (r) {
		case "pt":
			q = 1;
			break;
		case "mm":
			q = 72 / 25.4;
			break;
		case "cm":
			q = 72 / 2.54;
			break;
		case "in":
			q = 72;
			break;
		case "px":
			q = qt("px_scaling") == 1 ? .75 : 96 / 72;
			break;
		case "pc":
		case "em":
			q = 12;
			break;
		case "ex":
			q = 6;
			break;
		default:
			if (typeof r != "number") throw Error("Invalid unit: " + r);
			q = r;
	}
	var Jt = null;
	ee(), F();
	var Yt = function(e) {
		return d === null ? function(e) {
			return e;
		} : Jt.encryptor(e, 0);
	}, Xt = m.__private__.getPageInfo = m.getPageInfo = function(e) {
		if (isNaN(e) || e % 1 != 0) throw Error("Invalid argument passed to jsPDF.getPageInfo");
		return {
			objId: Me[e].objId,
			pageNumber: e,
			pageContext: Me[e]
		};
	}, Zt = m.__private__.getPageInfoByObjId = function(e) {
		if (isNaN(e) || e % 1 != 0) throw Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
		for (var t in Me) if (Me[t].objId === e) break;
		return Xt(t);
	}, Qt = m.__private__.getCurrentPageInfo = m.getCurrentPageInfo = function() {
		return {
			objId: Me[z].objId,
			pageNumber: z,
			pageContext: Me[z]
		};
	};
	m.addPage = function() {
		return Q.apply(this, arguments), this;
	}, m.setPage = function() {
		return It.apply(this, arguments), se.call(this, W[z]), this;
	}, m.insertPage = function(e) {
		return this.addPage(), this.movePage(z, e), this;
	}, m.movePage = function(e, t) {
		var n, r;
		if (e > t) {
			n = W[e], r = Me[e];
			for (var i = e; i > t; i--) W[i] = W[i - 1], Me[i] = Me[i - 1];
			W[t] = n, Me[t] = r, this.setPage(t);
		} else if (e < t) {
			n = W[e], r = Me[e];
			for (var a = e; a < t; a++) W[a] = W[a + 1], Me[a] = Me[a + 1];
			W[t] = n, Me[t] = r, this.setPage(t);
		}
		return this;
	}, m.deletePage = function() {
		return Ft.apply(this, arguments), this;
	}, m.__private__.text = m.text = function(e, t, n, r, i) {
		var a, o, c, l, u, d, f, m, h, g = (r ||= {}).scope || this;
		if (typeof e == "number" && typeof t == "number" && (typeof n == "string" || Array.isArray(n))) {
			var _ = n;
			n = t, t = e, e = _;
		}
		if (arguments[3] instanceof Y == 0 ? (c = arguments[4], l = arguments[5], s(f = arguments[3]) === "object" && f !== null || (typeof c == "string" && (l = c, c = null), typeof f == "string" && (l = f, f = null), typeof f == "number" && (c = f, f = null), r = {
			flags: f,
			angle: c,
			align: l
		})) : (T("The transform parameter of text() with a Matrix value"), h = i), isNaN(t) || isNaN(n) || e == null) throw Error("Invalid arguments passed to jsPDF.text");
		if (e.length === 0) return g;
		var v = "", x = !1, S = typeof r.lineHeightFactor == "number" ? r.lineHeightFactor : pn, C = g.internal.scaleFactor;
		function E(e) {
			return e = e.split("	").join(Array(r.TabLen || 9).join(" ")), Nt(e, f);
		}
		function D(e) {
			for (var t, n = e.concat(), r = [], i = n.length; i--;) typeof (t = n.shift()) == "string" ? r.push(t) : Array.isArray(e) && (t.length === 1 || t[1] === void 0 && t[2] === void 0) ? r.push(t[0]) : r.push([
				t[0],
				t[1],
				t[2]
			]);
			return r;
		}
		function O(e, t) {
			var n;
			if (typeof e == "string") n = t(e)[0];
			else if (Array.isArray(e)) {
				for (var r, i, a = e.concat(), o = [], s = a.length; s--;) typeof (r = a.shift()) == "string" ? o.push(t(r)[0]) : Array.isArray(r) && typeof r[0] == "string" && (i = t(r[0], r[1], r[2]), o.push([
					i[0],
					i[1],
					i[2]
				]));
				n = o;
			}
			return n;
		}
		var A = !1, j = !0;
		if (typeof e == "string") A = !0;
		else if (Array.isArray(e)) {
			var M = e.concat();
			o = [];
			for (var N, P = M.length; P--;) (typeof (N = M.shift()) != "string" || Array.isArray(N) && typeof N[0] != "string") && (j = !1);
			A = j;
		}
		if (!1 === A) throw Error("Type of text must be string or Array. \"" + e + "\" is not recognized.");
		typeof e == "string" && (e = e.match(/[\r?\n]/) ? e.split(/\r\n|\r|\n/g) : [e]);
		var F = K / g.internal.scaleFactor, I = F * (S - 1);
		switch (r.baseline) {
			case "bottom":
				n -= I;
				break;
			case "top":
				n += F - I;
				break;
			case "hanging":
				n += F - 2 * I;
				break;
			case "middle": n += F / 2 - I;
		}
		if ((d = r.maxWidth || 0) > 0 && (typeof e == "string" ? e = g.splitTextToSize(e, d) : Object.prototype.toString.call(e) === "[object Array]" && (e = e.reduce((function(e, t) {
			return e.concat(g.splitTextToSize(t, d));
		}), []))), a = {
			text: e,
			x: t,
			y: n,
			options: r,
			mutex: {
				pdfEscape: Nt,
				activeFontKey: be,
				fonts: J,
				activeFontSize: K
			}
		}, Ne.publish("preProcessText", a), e = a.text, c = (r = a.options).angle, h instanceof Y == 0 && c && typeof c == "number") {
			c *= Math.PI / 180, r.rotationDirection === 0 && (c = -c), b === y.ADVANCED && (c = -c);
			var L = Math.cos(c), ee = Math.sin(c);
			h = new Y(L, ee, -ee, L, 0, 0);
		} else c && c instanceof Y && (h = c);
		b !== y.ADVANCED || h || (h = ze), (u = r.charSpace || Dn) !== void 0 && (v += w(k(u)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), (m = r.horizontalScale) !== void 0 && (v += w(100 * m) + " Tz\n"), r.lang;
		var R = -1, z = r.renderingMode === void 0 ? r.stroke : r.renderingMode, B = g.internal.getCurrentPageInfo().pageContext;
		switch (z) {
			case 0:
			case !1:
			case "fill":
				R = 0;
				break;
			case 1:
			case !0:
			case "stroke":
				R = 1;
				break;
			case 2:
			case "fillThenStroke":
				R = 2;
				break;
			case 3:
			case "invisible":
				R = 3;
				break;
			case 4:
			case "fillAndAddForClipping":
				R = 4;
				break;
			case 5:
			case "strokeAndAddPathForClipping":
				R = 5;
				break;
			case 6:
			case "fillThenStrokeAndAddToPathForClipping":
				R = 6;
				break;
			case 7:
			case "addToPathForClipping": R = 7;
		}
		var te = B.usedRenderingMode === void 0 ? -1 : B.usedRenderingMode;
		R === -1 ? te !== -1 && (v += "0 Tr\n") : v += R + " Tr\n", R !== -1 && (B.usedRenderingMode = R), l = r.align || "left";
		var V, H = K * S, U = g.internal.pageSize.getWidth(), ne = J[be];
		u = r.charSpace || Dn, d = r.maxWidth || 0, f = Object.assign({
			autoencode: !0,
			noBOM: !0
		}, r.flags);
		var re = [];
		if (Object.prototype.toString.call(e) === "[object Array]") {
			var W;
			o = D(e), l !== "left" && (V = o.map((function(e) {
				return g.getStringUnitWidth(e, {
					font: ne,
					charSpace: u,
					fontSize: K,
					doKerning: !1
				}) * K / C;
			})));
			var ie, ae = 0;
			if (l === "right") {
				t -= V[0], e = [], P = o.length;
				for (var oe = 0; oe < P; oe++) oe === 0 ? (ie = yn(t), W = bn(n)) : (ie = k(ae - V[oe]), W = -H), e.push([
					o[oe],
					ie,
					W
				]), ae = V[oe];
			} else if (l === "center") {
				t -= V[0] / 2, e = [], P = o.length;
				for (var se = 0; se < P; se++) se === 0 ? (ie = yn(t), W = bn(n)) : (ie = k((ae - V[se]) / 2), W = -H), e.push([
					o[se],
					ie,
					W
				]), ae = V[se];
			} else if (l === "left") {
				e = [], P = o.length;
				for (var ce = 0; ce < P; ce++) e.push(o[ce]);
			} else {
				if (l !== "justify") throw Error("Unrecognized alignment option, use \"left\", \"center\", \"right\" or \"justify\".");
				e = [], P = o.length, d = d === 0 ? U : d;
				for (var le = 0; le < P; le++) W = le === 0 ? bn(n) : -H, ie = le === 0 ? yn(t) : 0, le < P - 1 ? re.push(w(k((d - V[le]) / (o[le].split(" ").length - 1)))) : re.push(0), e.push([
					o[le],
					ie,
					W
				]);
			}
		}
		!0 === (typeof r.R2L == "boolean" ? r.R2L : pe) && (e = O(e, (function(e, t, n) {
			return [
				e.split("").reverse().join(""),
				t,
				n
			];
		}))), a = {
			text: e,
			x: t,
			y: n,
			options: r,
			mutex: {
				pdfEscape: Nt,
				activeFontKey: be,
				fonts: J,
				activeFontSize: K
			}
		}, Ne.publish("postProcessText", a), e = a.text, x = a.mutex.isHex || !1;
		var ue = J[be].encoding;
		ue !== "WinAnsiEncoding" && ue !== "StandardEncoding" || (e = O(e, (function(e, t, n) {
			return [
				E(e),
				t,
				n
			];
		}))), o = D(e), e = [];
		for (var de, fe, me, he = 0, ge = 1, _e = Array.isArray(o[0]) ? ge : he, ve = "", ye = function(e, t, n) {
			var i = "";
			return n instanceof Y ? (n = typeof r.angle == "number" ? Re(n, new Y(1, 0, 0, 1, e, t)) : Re(new Y(1, 0, 0, 1, e, t), n), b === y.ADVANCED && (n = Re(new Y(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = w(e) + " " + w(t) + " Td\n", i;
		}, q = 0; q < o.length; q++) {
			switch (ve = "", _e) {
				case ge:
					me = (x ? "<" : "(") + o[q][0] + (x ? ">" : ")"), de = parseFloat(o[q][1]), fe = parseFloat(o[q][2]);
					break;
				case he: me = (x ? "<" : "(") + o[q] + (x ? ">" : ")"), de = yn(t), fe = bn(n);
			}
			re !== void 0 && re[q] !== void 0 && (ve = re[q] + " Tw\n"), q === 0 ? e.push(ve + ye(de, fe, h) + me) : _e === he ? e.push(ve + me) : _e === ge && e.push(ve + ye(de, fe, h) + me);
		}
		e = _e === he ? e.join(" Tj\nT* ") : e.join(" Tj\n"), e += " Tj\n";
		var xe = "BT\n/";
		return xe += be + " " + K + " Tf\n", xe += w(K * S) + " TL\n", xe += Tn + "\n", xe += v, xe += e, G(xe += "ET"), p[be] = !0, g;
	};
	var $t = m.__private__.clip = m.clip = function(e) {
		return G(e === "evenodd" ? "W*" : "W"), this;
	};
	m.clipEvenOdd = function() {
		return $t("evenodd");
	}, m.__private__.discardPath = m.discardPath = function() {
		return G("n"), this;
	};
	var en = m.__private__.isValidStyle = function(e) {
		var t = !1;
		return [
			void 0,
			null,
			"S",
			"D",
			"F",
			"DF",
			"FD",
			"f",
			"f*",
			"B",
			"B*",
			"n"
		].indexOf(e) !== -1 && (t = !0), t;
	};
	m.__private__.setDefaultPathOperation = m.setDefaultPathOperation = function(e) {
		return en(e) && (u = e), this;
	};
	var tn = m.__private__.getStyle = m.getStyle = function(e) {
		var t = u;
		switch (e) {
			case "D":
			case "S":
				t = "S";
				break;
			case "F":
				t = "f";
				break;
			case "FD":
			case "DF":
				t = "B";
				break;
			case "f":
			case "f*":
			case "B":
			case "B*": t = e;
		}
		return t;
	}, nn = m.close = function() {
		return G("h"), this;
	};
	m.stroke = function() {
		return G("S"), this;
	}, m.fill = function(e) {
		return rn("f", e), this;
	}, m.fillEvenOdd = function(e) {
		return rn("f*", e), this;
	}, m.fillStroke = function(e) {
		return rn("B", e), this;
	}, m.fillStrokeEvenOdd = function(e) {
		return rn("B*", e), this;
	};
	var rn = function(e, t) {
		s(t) === "object" ? sn(t, e) : G(e);
	}, an = function(e) {
		e === null || b === y.ADVANCED && e === void 0 || (e = tn(e), G(e));
	};
	function on(e, t, n, r, i) {
		var a = new ut(t || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
		return a.stream = this.stream, Be(e + "$$" + this.cloneIndex++ + "$$", a), a;
	}
	var sn = function(e, t) {
		var n = De[e.key], r = Ee[n];
		if (r instanceof lt) G("q"), G(cn(t)), r.gState && m.setGState(r.gState), G(e.matrix.toString() + " cm"), G("/" + n + " sh"), G("Q");
		else if (r instanceof ut) {
			var i = new Y(1, 0, 0, -1, 0, Bn());
			e.matrix && (i = i.multiply(e.matrix || ze), n = on.call(r, e.key, e.boundingBox, e.xStep, e.yStep, i).id), G("q"), G("/Pattern cs"), G("/" + n + " scn"), r.gState && m.setGState(r.gState), G(t), G("Q");
		}
	}, cn = function(e) {
		switch (e) {
			case "f":
			case "F": return "W n";
			case "f*": return "W* n";
			case "B": return "W S";
			case "B*": return "W* S";
			case "S": return "W S";
			case "n": return "W n";
		}
	}, ln = m.moveTo = function(e, t) {
		return G(w(k(e)) + " " + w(j(t)) + " m"), this;
	}, un = m.lineTo = function(e, t) {
		return G(w(k(e)) + " " + w(j(t)) + " l"), this;
	}, dn = m.curveTo = function(e, t, n, r, i, a) {
		return G([
			w(k(e)),
			w(j(t)),
			w(k(n)),
			w(j(r)),
			w(k(i)),
			w(j(a)),
			"c"
		].join(" ")), this;
	};
	m.__private__.line = m.line = function(e, t, n, r, i) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !en(i)) throw Error("Invalid arguments passed to jsPDF.line");
		return b === y.COMPAT ? this.lines([[n - e, r - t]], e, t, [1, 1], i || "S") : this.lines([[n - e, r - t]], e, t, [1, 1]).stroke();
	}, m.__private__.lines = m.lines = function(e, t, n, r, i, a) {
		var o, s, c, l, u, d, f, p, m, h, g, _;
		if (typeof e == "number" && (_ = n, n = t, t = e, e = _), r ||= [1, 1], a ||= !1, isNaN(t) || isNaN(n) || !Array.isArray(e) || !Array.isArray(r) || !en(i) || typeof a != "boolean") throw Error("Invalid arguments passed to jsPDF.lines");
		for (ln(t, n), o = r[0], s = r[1], l = e.length, h = t, g = n, c = 0; c < l; c++) (u = e[c]).length === 2 ? (h = u[0] * o + h, g = u[1] * s + g, un(h, g)) : (d = u[0] * o + h, f = u[1] * s + g, p = u[2] * o + h, m = u[3] * s + g, h = u[4] * o + h, g = u[5] * s + g, dn(d, f, p, m, h, g));
		return a && nn(), an(i), this;
	}, m.path = function(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t], r = n.c;
			switch (n.op) {
				case "m":
					ln(r[0], r[1]);
					break;
				case "l":
					un(r[0], r[1]);
					break;
				case "c":
					dn.apply(this, r);
					break;
				case "h": nn();
			}
		}
		return this;
	}, m.__private__.rect = m.rect = function(e, t, n, r, i) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !en(i)) throw Error("Invalid arguments passed to jsPDF.rect");
		return b === y.COMPAT && (r = -r), G([
			w(k(e)),
			w(j(t)),
			w(k(n)),
			w(k(r)),
			"re"
		].join(" ")), an(i), this;
	}, m.__private__.triangle = m.triangle = function(e, t, n, r, i, a, o) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !en(o)) throw Error("Invalid arguments passed to jsPDF.triangle");
		return this.lines([
			[n - e, r - t],
			[i - n, a - r],
			[e - i, t - a]
		], e, t, [1, 1], o, !0), this;
	}, m.__private__.roundedRect = m.roundedRect = function(e, t, n, r, i, a, o) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a) || !en(o)) throw Error("Invalid arguments passed to jsPDF.roundedRect");
		var s = 4 / 3 * (Math.SQRT2 - 1);
		return i = Math.min(i, .5 * n), a = Math.min(a, .5 * r), this.lines([
			[n - 2 * i, 0],
			[
				i * s,
				0,
				i,
				a - a * s,
				i,
				a
			],
			[0, r - 2 * a],
			[
				0,
				a * s,
				-i * s,
				a,
				-i,
				a
			],
			[2 * i - n, 0],
			[
				-i * s,
				0,
				-i,
				-a * s,
				-i,
				-a
			],
			[0, 2 * a - r],
			[
				0,
				-a * s,
				i * s,
				-a,
				i,
				-a
			]
		], e + i, t, [1, 1], o, !0), this;
	}, m.__private__.ellipse = m.ellipse = function(e, t, n, r, i) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || !en(i)) throw Error("Invalid arguments passed to jsPDF.ellipse");
		var a = 4 / 3 * (Math.SQRT2 - 1) * n, o = 4 / 3 * (Math.SQRT2 - 1) * r;
		return ln(e + n, t), dn(e + n, t - o, e + a, t - r, e, t - r), dn(e - a, t - r, e - n, t - o, e - n, t), dn(e - n, t + o, e - a, t + r, e, t + r), dn(e + a, t + r, e + n, t + o, e + n, t), an(i), this;
	}, m.__private__.circle = m.circle = function(e, t, n, r) {
		if (isNaN(e) || isNaN(t) || isNaN(n) || !en(r)) throw Error("Invalid arguments passed to jsPDF.circle");
		return this.ellipse(e, t, n, n, r);
	}, m.setFont = function(e, t, n) {
		return n && (t = C(t, n)), be = Rt(e, t, { disableWarning: !1 }), this;
	};
	var fn = m.__private__.getFont = m.getFont = function() {
		return J[Rt.apply(m, arguments)];
	};
	m.__private__.getFontList = m.getFontList = function() {
		var e, t, n = {};
		for (e in we) if (we.hasOwnProperty(e)) for (t in n[e] = [], we[e]) we[e].hasOwnProperty(t) && n[e].push(t);
		return n;
	}, m.addFont = function(e, t, n, r, i) {
		var a = [
			"StandardEncoding",
			"MacRomanEncoding",
			"Identity-H",
			"WinAnsiEncoding"
		];
		return arguments[3] && a.indexOf(arguments[3]) !== -1 ? i = arguments[3] : arguments[3] && a.indexOf(arguments[3]) == -1 && (n = C(n, r)), i ||= "Identity-H", kt.call(this, e, t, n, i);
	};
	var pn, mn = e.lineWidth || .200025, hn = m.__private__.getLineWidth = m.getLineWidth = function() {
		return mn;
	}, gn = m.__private__.setLineWidth = m.setLineWidth = function(e) {
		return mn = e, G(w(k(e)) + " w"), this;
	};
	m.__private__.setLineDash = X.API.setLineDash = X.API.setLineDashPattern = function(e, t) {
		if (e ||= [], t ||= 0, isNaN(t) || !Array.isArray(e)) throw Error("Invalid arguments passed to jsPDF.setLineDash");
		return e = e.map((function(e) {
			return w(k(e));
		})).join(" "), t = w(k(t)), G("[" + e + "] " + t + " d"), this;
	};
	var $ = m.__private__.getLineHeight = m.getLineHeight = function() {
		return K * pn;
	};
	m.__private__.getLineHeight = m.getLineHeight = function() {
		return K * pn;
	};
	var _n = m.__private__.setLineHeightFactor = m.setLineHeightFactor = function(e) {
		return typeof (e ||= 1.15) == "number" && (pn = e), this;
	}, vn = m.__private__.getLineHeightFactor = m.getLineHeightFactor = function() {
		return pn;
	};
	_n(e.lineHeight);
	var yn = m.__private__.getHorizontalCoordinate = function(e) {
		return k(e);
	}, bn = m.__private__.getVerticalCoordinate = function(e) {
		return b === y.ADVANCED ? e : Me[z].mediaBox.topRightY - Me[z].mediaBox.bottomLeftY - k(e);
	}, xn = m.__private__.getHorizontalCoordinateString = m.getHorizontalCoordinateString = function(e) {
		return w(yn(e));
	}, Sn = m.__private__.getVerticalCoordinateString = m.getVerticalCoordinateString = function(e) {
		return w(bn(e));
	}, Cn = e.strokeColor || "0 G";
	m.__private__.getStrokeColor = m.getDrawColor = function() {
		return Je(Cn);
	}, m.__private__.setStrokeColor = m.setDrawColor = function(e, t, n, r) {
		return Cn = Ye({
			ch1: e,
			ch2: t,
			ch3: n,
			ch4: r,
			pdfColorType: "draw",
			precision: 2
		}), G(Cn), this;
	};
	var wn = e.fillColor || "0 g";
	m.__private__.getFillColor = m.getFillColor = function() {
		return Je(wn);
	}, m.__private__.setFillColor = m.setFillColor = function(e, t, n, r) {
		return wn = Ye({
			ch1: e,
			ch2: t,
			ch3: n,
			ch4: r,
			pdfColorType: "fill",
			precision: 2
		}), G(wn), this;
	};
	var Tn = e.textColor || "0 g", En = m.__private__.getTextColor = m.getTextColor = function() {
		return Je(Tn);
	};
	m.__private__.setTextColor = m.setTextColor = function(e, t, n, r) {
		return Tn = Ye({
			ch1: e,
			ch2: t,
			ch3: n,
			ch4: r,
			pdfColorType: "text",
			precision: 3
		}), this;
	};
	var Dn = e.charSpace, On = m.__private__.getCharSpace = m.getCharSpace = function() {
		return parseFloat(Dn || 0);
	};
	m.__private__.setCharSpace = m.setCharSpace = function(e) {
		if (isNaN(e)) throw Error("Invalid argument passed to jsPDF.setCharSpace");
		return Dn = e, this;
	};
	var kn = 0;
	m.CapJoinStyles = {
		0: 0,
		butt: 0,
		but: 0,
		miter: 0,
		1: 1,
		round: 1,
		rounded: 1,
		circle: 1,
		2: 2,
		projecting: 2,
		project: 2,
		square: 2,
		bevel: 2
	}, m.__private__.setLineCap = m.setLineCap = function(e) {
		var t = m.CapJoinStyles[e];
		if (t === void 0) throw Error("Line cap style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return kn = t, G(t + " J"), this;
	};
	var An = 0;
	m.__private__.setLineJoin = m.setLineJoin = function(e) {
		var t = m.CapJoinStyles[e];
		if (t === void 0) throw Error("Line join style of '" + e + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
		return An = t, G(t + " j"), this;
	}, m.__private__.setLineMiterLimit = m.__private__.setMiterLimit = m.setLineMiterLimit = m.setMiterLimit = function(e) {
		if (e ||= 0, isNaN(e)) throw Error("Invalid argument passed to jsPDF.setLineMiterLimit");
		return G(w(k(e)) + " M"), this;
	}, m.GState = st, m.setGState = function(e) {
		(e = typeof e == "string" ? Oe[ke[e]] : jn(null, e)).equals(Ae) || (G("/" + e.id + " gs"), Ae = e);
	};
	var jn = function(e, t) {
		if (!e || !ke[e]) {
			var n = !1;
			for (var r in Oe) if (Oe.hasOwnProperty(r) && Oe[r].equals(t)) {
				n = !0;
				break;
			}
			if (n) t = Oe[r];
			else {
				var i = "GS" + (Object.keys(Oe).length + 1).toString(10);
				Oe[i] = t, t.id = i;
			}
			return e && (ke[e] = t.id), Ne.publish("addGState", t), t;
		}
	};
	m.addGState = function(e, t) {
		return jn(e, t), this;
	}, m.saveGraphicsState = function() {
		return G("q"), Te.push({
			key: be,
			size: K,
			color: Tn
		}), this;
	}, m.restoreGraphicsState = function() {
		G("Q");
		var e = Te.pop();
		return be = e.key, K = e.size, Tn = e.color, Ae = null, this;
	}, m.setCurrentTransformationMatrix = function(e) {
		return G(e.toString() + " cm"), this;
	}, m.comment = function(e) {
		return G("#" + e), this;
	};
	var Mn = function(e, t) {
		var n = e || 0;
		Object.defineProperty(this, "x", {
			enumerable: !0,
			get: function() {
				return n;
			},
			set: function(e) {
				isNaN(e) || (n = parseFloat(e));
			}
		});
		var r = t || 0;
		Object.defineProperty(this, "y", {
			enumerable: !0,
			get: function() {
				return r;
			},
			set: function(e) {
				isNaN(e) || (r = parseFloat(e));
			}
		});
		var i = "pt";
		return Object.defineProperty(this, "type", {
			enumerable: !0,
			get: function() {
				return i;
			},
			set: function(e) {
				i = e.toString();
			}
		}), this;
	}, Nn = function(e, t, n, r) {
		Mn.call(this, e, t), this.type = "rect";
		var i = n || 0;
		Object.defineProperty(this, "w", {
			enumerable: !0,
			get: function() {
				return i;
			},
			set: function(e) {
				isNaN(e) || (i = parseFloat(e));
			}
		});
		var a = r || 0;
		return Object.defineProperty(this, "h", {
			enumerable: !0,
			get: function() {
				return a;
			},
			set: function(e) {
				isNaN(e) || (a = parseFloat(e));
			}
		}), this;
	}, Pn = function() {
		this.page = je, this.currentPage = z, this.pages = W.slice(0), this.pagesContext = Me.slice(0), this.x = xe, this.y = Se, this.matrix = Ce, this.width = Rn(z), this.height = Bn(z), this.outputDestination = ae, this.id = "", this.objectNumber = -1;
	};
	Pn.prototype.restore = function() {
		je = this.page, z = this.currentPage, Me = this.pagesContext, W = this.pages, xe = this.x, Se = this.y, Ce = this.matrix, zn(z, this.width), Vn(z, this.height), ae = this.outputDestination;
	};
	var Fn = function(e, t, n, r, i) {
		Le.push(new Pn()), je = z = 0, W = [], xe = e, Se = t, Ce = i, Pt([n, r]);
	}, In = function(e) {
		if (Ie[e]) Le.pop().restore();
		else {
			var t = new Pn(), n = "Xo" + (Object.keys(Fe).length + 1).toString(10);
			t.id = n, Ie[e] = n, Fe[n] = t, Ne.publish("addFormObject", t), Le.pop().restore();
		}
	};
	for (var Ln in m.beginFormObject = function(e, t, n, r, i) {
		return Fn(e, t, n, r, i), this;
	}, m.endFormObject = function(e) {
		return In(e), this;
	}, m.doFormObject = function(e, t) {
		var n = Fe[Ie[e]];
		return G("q"), G(t.toString() + " cm"), G("/" + n.id + " Do"), G("Q"), this;
	}, m.getFormObject = function(e) {
		var t = Fe[Ie[e]];
		return {
			x: t.x,
			y: t.y,
			width: t.width,
			height: t.height,
			matrix: t.matrix
		};
	}, m.save = function(e, t) {
		return e ||= "generated.pdf", (t ||= {}).returnPromise = t.returnPromise || !1, !1 === t.returnPromise ? (Dt(Gt(Wt()), e), typeof Dt.unload == "function" && Z.setTimeout && setTimeout(Dt.unload, 911), this) : new Promise((function(t, n) {
			try {
				var r = Dt(Gt(Wt()), e);
				typeof Dt.unload == "function" && Z.setTimeout && setTimeout(Dt.unload, 911), t(r);
			} catch (e) {
				n(e.message);
			}
		}));
	}, X.API) X.API.hasOwnProperty(Ln) && (Ln === "events" && X.API.events.length ? function(e, t) {
		var n, r, i;
		for (i = t.length - 1; i !== -1; i--) n = t[i][0], r = t[i][1], e.subscribe.apply(e, [n].concat(typeof r == "function" ? [r] : r));
	}(Ne, X.API.events) : m[Ln] = X.API[Ln]);
	var Rn = m.getPageWidth = function(e) {
		return (Me[e ||= z].mediaBox.topRightX - Me[e].mediaBox.bottomLeftX) / q;
	}, zn = m.setPageWidth = function(e, t) {
		Me[e].mediaBox.topRightX = t * q + Me[e].mediaBox.bottomLeftX;
	}, Bn = m.getPageHeight = function(e) {
		return (Me[e ||= z].mediaBox.topRightY - Me[e].mediaBox.bottomLeftY) / q;
	}, Vn = m.setPageHeight = function(e, t) {
		Me[e].mediaBox.topRightY = t * q + Me[e].mediaBox.bottomLeftY;
	};
	return m.internal = {
		pdfEscape: Nt,
		getStyle: tn,
		getFont: fn,
		getFontSize: fe,
		getCharSpace: On,
		getTextColor: En,
		getLineHeight: $,
		getLineHeightFactor: vn,
		getLineWidth: hn,
		write: ce,
		getHorizontalCoordinate: yn,
		getVerticalCoordinate: bn,
		getCoordinateString: xn,
		getVerticalCoordinateString: Sn,
		collections: {},
		newObject: Ve,
		newAdditionalObject: Ge,
		newObjectDeferred: He,
		newObjectDeferredBegin: Ue,
		getFilters: Xe,
		putStream: Ze,
		events: Ne,
		scaleFactor: q,
		pageSize: {
			getWidth: function() {
				return Rn(z);
			},
			setWidth: function(e) {
				zn(z, e);
			},
			getHeight: function() {
				return Bn(z);
			},
			setHeight: function(e) {
				Vn(z, e);
			}
		},
		encryptionOptions: d,
		encryption: Jt,
		getEncryptor: Yt,
		output: Kt,
		getNumberOfPages: Lt,
		pages: W,
		out: G,
		f2: D,
		f3: O,
		getPageInfo: Xt,
		getPageInfoByObjId: Zt,
		getCurrentPageInfo: Qt,
		getPDFVersion: g,
		Point: Mn,
		Rectangle: Nn,
		Matrix: Y,
		hasHotfix: qt
	}, Object.defineProperty(m.internal.pageSize, "width", {
		get: function() {
			return Rn(z);
		},
		set: function(e) {
			zn(z, e);
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(m.internal.pageSize, "height", {
		get: function() {
			return Bn(z);
		},
		set: function(e) {
			Vn(z, e);
		},
		enumerable: !0,
		configurable: !0
	}), At.call(m, ue), be = "F1", Q(i, n), Ne.publish("initialized"), m;
}
function dt(e) {
	return e.reduce((function(e, t, n) {
		return e[t] = n, e;
	}), {});
}
function ft(e) {
	var t = e.family.replace(/"|'/g, "").toLowerCase(), n = function(e) {
		return yn[e ||= "normal"] ? e : "normal";
	}(e.style), r = function(e) {
		if (!e) return 400;
		if (typeof e == "number") return e >= 100 && e <= 900 && e % 100 == 0 ? e : 400;
		if (/^\d00$/.test(e)) return parseInt(e);
		switch (e) {
			case "bold": return 700;
			default: return 400;
		}
	}(e.weight), i = function(e) {
		return typeof xn[e ||= "normal"] == "number" ? e : "normal";
	}(e.stretch);
	return {
		family: t,
		style: n,
		weight: r,
		stretch: i,
		src: e.src || [],
		ref: e.ref || {
			name: t,
			style: [
				i,
				n,
				r
			].join(" ")
		}
	};
}
function pt(e, t, n, r) {
	var i;
	for (i = n; i >= 0 && i < t.length; i += r) if (e[t[i]]) return e[t[i]];
	for (i = n; i >= 0 && i < t.length; i -= r) if (e[t[i]]) return e[t[i]];
}
function mt(e) {
	return [
		e.stretch,
		e.style,
		e.weight,
		e.family
	].join(" ");
}
function ht(e, t, n) {
	for (var r = (n ||= {}).defaultFontFamily || "times", i = Object.assign({}, wn, n.genericFontFamilies || {}), a = null, o = null, s = 0; s < t.length; ++s) if (i[(a = ft(t[s])).family] && (a.family = i[a.family]), e.hasOwnProperty(a.family)) {
		o = e[a.family];
		break;
	}
	if (!(o ||= e[r])) throw Error("Could not find a font-family for the rule '" + mt(a) + "' and default family '" + r + "'.");
	if (o = function(e, t) {
		if (t[e]) return t[e];
		var n = xn[e], r = pt(t, bn, n, n <= xn.normal ? -1 : 1);
		if (!r) throw Error("Could not find a matching font-stretch value for " + e);
		return r;
	}(a.stretch, o), o = function(e, t) {
		if (t[e]) return t[e];
		for (var n = yn[e], r = 0; r < n.length; ++r) if (t[n[r]]) return t[n[r]];
		throw Error("Could not find a matching font-style for " + e);
	}(a.style, o), !(o = function(e, t) {
		if (t[e]) return t[e];
		if (e === 400 && t[500]) return t[500];
		if (e === 500 && t[400]) return t[400];
		var n = Cn[e], r = pt(t, Sn, n, e < 400 ? -1 : 1);
		if (!r) throw Error("Could not find a matching font-weight for value " + e);
		return r;
	}(a.weight, o))) throw Error("Failed to resolve a font for the rule '" + mt(a) + "'.");
	return o;
}
function gt(e) {
	return e.trimLeft();
}
function _t(e, t) {
	for (var n = 0; n < e.length;) {
		if (e.charAt(n) === t) return [e.substring(0, n), e.substring(n + 1)];
		n += 1;
	}
	return null;
}
function vt(e) {
	var t = e.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
	return t === null ? null : [t[0], e.substring(t[0].length)];
}
function yt(e) {
	var t = 0;
	if (e[t++] !== 71 || e[t++] !== 73 || e[t++] !== 70 || e[t++] !== 56 || (e[t++] + 1 & 253) != 56 || e[t++] !== 97) throw Error("Invalid GIF 87a/89a header.");
	var n = e[t++] | e[t++] << 8, r = e[t++] | e[t++] << 8, i = e[t++], a = i >> 7, o = 1 << (7 & i) + 1;
	e[t++], e[t++];
	var s = null, c = null;
	a && (s = t, c = o, t += 3 * o);
	var l = !0, u = [], d = 0, f = null, p = 0, m = null;
	for (this.width = n, this.height = r; l && t < e.length;) switch (e[t++]) {
		case 33:
			switch (e[t++]) {
				case 255:
					if (e[t] !== 11 || e[t + 1] == 78 && e[t + 2] == 69 && e[t + 3] == 84 && e[t + 4] == 83 && e[t + 5] == 67 && e[t + 6] == 65 && e[t + 7] == 80 && e[t + 8] == 69 && e[t + 9] == 50 && e[t + 10] == 46 && e[t + 11] == 48 && e[t + 12] == 3 && e[t + 13] == 1 && e[t + 16] == 0) t += 14, m = e[t++] | e[t++] << 8, t++;
					else for (t += 12;;) {
						if (!((D = e[t++]) >= 0)) throw Error("Invalid block size");
						if (D === 0) break;
						t += D;
					}
					break;
				case 249:
					if (e[t++] !== 4 || e[t + 4] !== 0) throw Error("Invalid graphics extension block.");
					var h = e[t++];
					d = e[t++] | e[t++] << 8, f = e[t++], !(1 & h) && (f = null), p = h >> 2 & 7, t++;
					break;
				case 254:
					for (;;) {
						if (!((D = e[t++]) >= 0)) throw Error("Invalid block size");
						if (D === 0) break;
						t += D;
					}
					break;
				default: throw Error("Unknown graphic control label: 0x" + e[t - 1].toString(16));
			}
			break;
		case 44:
			var g = e[t++] | e[t++] << 8, _ = e[t++] | e[t++] << 8, v = e[t++] | e[t++] << 8, y = e[t++] | e[t++] << 8, b = e[t++], x = b >> 6 & 1, S = 1 << (7 & b) + 1, C = s, w = c, T = !1;
			b >> 7 && (T = !0, C = t, w = S, t += 3 * S);
			var E = t;
			for (t++;;) {
				var D;
				if (!((D = e[t++]) >= 0)) throw Error("Invalid block size");
				if (D === 0) break;
				t += D;
			}
			u.push({
				x: g,
				y: _,
				width: v,
				height: y,
				has_local_palette: T,
				palette_offset: C,
				palette_size: w,
				data_offset: E,
				data_length: t - E,
				transparent_index: f,
				interlaced: !!x,
				delay: d,
				disposal: p
			});
			break;
		case 59:
			l = !1;
			break;
		default: throw Error("Unknown gif block: 0x" + e[t - 1].toString(16));
	}
	this.numFrames = function() {
		return u.length;
	}, this.loopCount = function() {
		return m;
	}, this.frameInfo = function(e) {
		if (e < 0 || e >= u.length) throw Error("Frame index out of range.");
		return u[e];
	}, this.decodeAndBlitFrameBGRA = function(t, r) {
		var i = this.frameInfo(t), a = i.width * i.height, o = new Uint8Array(a);
		bt(e, i.data_offset, o, a);
		var s = i.palette_offset, c = i.transparent_index;
		c === null && (c = 256);
		var l = i.width, u = n - l, d = l, f = 4 * (i.y * n + i.x), p = 4 * ((i.y + i.height) * n + i.x), m = f, h = 4 * u;
		!0 === i.interlaced && (h += 4 * n * 7);
		for (var g = 8, _ = 0, v = o.length; _ < v; ++_) {
			var y = o[_];
			if (d === 0 && (d = l, (m += h) >= p && (h = 4 * u + 4 * n * (g - 1), m = f + (l + u) * (g << 1), g >>= 1)), y === c) m += 4;
			else {
				var b = e[s + 3 * y], x = e[s + 3 * y + 1], S = e[s + 3 * y + 2];
				r[m++] = S, r[m++] = x, r[m++] = b, r[m++] = 255;
			}
			--d;
		}
	}, this.decodeAndBlitFrameRGBA = function(t, r) {
		var i = this.frameInfo(t), a = i.width * i.height, o = new Uint8Array(a);
		bt(e, i.data_offset, o, a);
		var s = i.palette_offset, c = i.transparent_index;
		c === null && (c = 256);
		var l = i.width, u = n - l, d = l, f = 4 * (i.y * n + i.x), p = 4 * ((i.y + i.height) * n + i.x), m = f, h = 4 * u;
		!0 === i.interlaced && (h += 4 * n * 7);
		for (var g = 8, _ = 0, v = o.length; _ < v; ++_) {
			var y = o[_];
			if (d === 0 && (d = l, (m += h) >= p && (h = 4 * u + 4 * n * (g - 1), m = f + (l + u) * (g << 1), g >>= 1)), y === c) m += 4;
			else {
				var b = e[s + 3 * y], x = e[s + 3 * y + 1], S = e[s + 3 * y + 2];
				r[m++] = b, r[m++] = x, r[m++] = S, r[m++] = 255;
			}
			--d;
		}
	};
}
function bt(e, t, n, r) {
	for (var i = e[t++], a = 1 << i, o = a + 1, s = o + 1, c = i + 1, l = (1 << c) - 1, u = 0, d = 0, f = 0, p = e[t++], m = new Int32Array(4096), h = null;;) {
		for (; u < 16 && p !== 0;) d |= e[t++] << u, u += 8, p === 1 ? p = e[t++] : --p;
		if (u < c) break;
		var g = d & l;
		if (d >>= c, u -= c, g !== a) {
			if (g === o) break;
			for (var _ = g < s ? g : h, v = 0, y = _; y > a;) y = m[y] >> 8, ++v;
			var b = y;
			if (f + v + (_ === g ? 0 : 1) > r) return void wt.log("Warning, gif stream longer than expected.");
			n[f++] = b;
			var x = f += v;
			for (_ !== g && (n[f++] = b), y = _; v--;) y = m[y], n[--x] = 255 & y, y >>= 8;
			h !== null && s < 4096 && (m[s++] = h << 8 | b, s >= l + 1 && c < 12 && (++c, l = l << 1 | 1)), h = g;
		} else s = o + 1, l = (1 << (c = i + 1)) - 1, h = null;
	}
	return f !== r && wt.log("Warning, gif stream shorter than expected."), n;
}
function xt(e) {
	var t, n, r, i, a, o = Math.floor, s = Array(64), c = Array(64), l = Array(64), u = Array(64), d = Array(65535), f = Array(65535), p = Array(64), m = Array(64), h = [], g = 0, _ = 7, v = Array(64), y = Array(64), b = Array(64), x = Array(256), S = Array(2048), C = [
		0,
		1,
		5,
		6,
		14,
		15,
		27,
		28,
		2,
		4,
		7,
		13,
		16,
		26,
		29,
		42,
		3,
		8,
		12,
		17,
		25,
		30,
		41,
		43,
		9,
		11,
		18,
		24,
		31,
		40,
		44,
		53,
		10,
		19,
		23,
		32,
		39,
		45,
		52,
		54,
		20,
		22,
		33,
		38,
		46,
		51,
		55,
		60,
		21,
		34,
		37,
		47,
		50,
		56,
		59,
		61,
		35,
		36,
		48,
		49,
		57,
		58,
		62,
		63
	], w = [
		0,
		0,
		1,
		5,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	], T = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	], E = [
		0,
		0,
		2,
		1,
		3,
		3,
		2,
		4,
		3,
		5,
		5,
		4,
		4,
		0,
		0,
		1,
		125
	], D = [
		1,
		2,
		3,
		0,
		4,
		17,
		5,
		18,
		33,
		49,
		65,
		6,
		19,
		81,
		97,
		7,
		34,
		113,
		20,
		50,
		129,
		145,
		161,
		8,
		35,
		66,
		177,
		193,
		21,
		82,
		209,
		240,
		36,
		51,
		98,
		114,
		130,
		9,
		10,
		22,
		23,
		24,
		25,
		26,
		37,
		38,
		39,
		40,
		41,
		42,
		52,
		53,
		54,
		55,
		56,
		57,
		58,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		99,
		100,
		101,
		102,
		103,
		104,
		105,
		106,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122,
		131,
		132,
		133,
		134,
		135,
		136,
		137,
		138,
		146,
		147,
		148,
		149,
		150,
		151,
		152,
		153,
		154,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		178,
		179,
		180,
		181,
		182,
		183,
		184,
		185,
		186,
		194,
		195,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		210,
		211,
		212,
		213,
		214,
		215,
		216,
		217,
		218,
		225,
		226,
		227,
		228,
		229,
		230,
		231,
		232,
		233,
		234,
		241,
		242,
		243,
		244,
		245,
		246,
		247,
		248,
		249,
		250
	], O = [
		0,
		0,
		3,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0
	], k = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11
	], A = [
		0,
		0,
		2,
		1,
		2,
		4,
		4,
		3,
		4,
		7,
		5,
		4,
		4,
		0,
		1,
		2,
		119
	], j = [
		0,
		1,
		2,
		3,
		17,
		4,
		5,
		33,
		49,
		6,
		18,
		65,
		81,
		7,
		97,
		113,
		19,
		34,
		50,
		129,
		8,
		20,
		66,
		145,
		161,
		177,
		193,
		9,
		35,
		51,
		82,
		240,
		21,
		98,
		114,
		209,
		10,
		22,
		36,
		52,
		225,
		37,
		241,
		23,
		24,
		25,
		26,
		38,
		39,
		40,
		41,
		42,
		53,
		54,
		55,
		56,
		57,
		58,
		67,
		68,
		69,
		70,
		71,
		72,
		73,
		74,
		83,
		84,
		85,
		86,
		87,
		88,
		89,
		90,
		99,
		100,
		101,
		102,
		103,
		104,
		105,
		106,
		115,
		116,
		117,
		118,
		119,
		120,
		121,
		122,
		130,
		131,
		132,
		133,
		134,
		135,
		136,
		137,
		138,
		146,
		147,
		148,
		149,
		150,
		151,
		152,
		153,
		154,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		178,
		179,
		180,
		181,
		182,
		183,
		184,
		185,
		186,
		194,
		195,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		210,
		211,
		212,
		213,
		214,
		215,
		216,
		217,
		218,
		226,
		227,
		228,
		229,
		230,
		231,
		232,
		233,
		234,
		242,
		243,
		244,
		245,
		246,
		247,
		248,
		249,
		250
	];
	function M(e, t) {
		for (var n = 0, r = 0, i = [], a = 1; a <= 16; a++) {
			for (var o = 1; o <= e[a]; o++) i[t[r]] = [], i[t[r]][0] = n, i[t[r]][1] = a, r++, n++;
			n *= 2;
		}
		return i;
	}
	function N(e) {
		for (var t = e[0], n = e[1] - 1; n >= 0;) t & 1 << n && (g |= 1 << _), n--, --_ < 0 && (g == 255 ? (P(255), P(0)) : P(g), _ = 7, g = 0);
	}
	function P(e) {
		h.push(e);
	}
	function F(e) {
		P(e >> 8 & 255), P(255 & e);
	}
	function I(e, t, n, r, i) {
		for (var a, o = i[0], s = i[240], c = function(e, t) {
			var n, r, i, a, o, s, c, l, u, d, f = 0;
			for (u = 0; u < 8; ++u) {
				n = e[f], r = e[f + 1], i = e[f + 2], a = e[f + 3], o = e[f + 4], s = e[f + 5], c = e[f + 6];
				var m = n + (l = e[f + 7]), h = n - l, g = r + c, _ = r - c, v = i + s, y = i - s, b = a + o, x = a - o, S = m + b, C = m - b, w = g + v, T = g - v;
				e[f] = S + w, e[f + 4] = S - w;
				var E = .707106781 * (T + C);
				e[f + 2] = C + E, e[f + 6] = C - E;
				var D = .382683433 * ((S = x + y) - (T = _ + h)), O = .5411961 * S + D, k = 1.306562965 * T + D, A = .707106781 * (w = y + _), j = h + A, M = h - A;
				e[f + 5] = M + O, e[f + 3] = M - O, e[f + 1] = j + k, e[f + 7] = j - k, f += 8;
			}
			for (f = 0, u = 0; u < 8; ++u) {
				n = e[f], r = e[f + 8], i = e[f + 16], a = e[f + 24], o = e[f + 32], s = e[f + 40], c = e[f + 48];
				var N = n + (l = e[f + 56]), P = n - l, F = r + c, I = r - c, L = i + s, ee = i - s, R = a + o, z = a - o, B = N + R, te = N - R, V = F + L, H = F - L;
				e[f] = B + V, e[f + 32] = B - V;
				var U = .707106781 * (H + te);
				e[f + 16] = te + U, e[f + 48] = te - U;
				var ne = .382683433 * ((B = z + ee) - (H = I + P)), re = .5411961 * B + ne, W = 1.306562965 * H + ne, ie = .707106781 * (V = ee + I), ae = P + ie, oe = P - ie;
				e[f + 40] = oe + re, e[f + 24] = oe - re, e[f + 8] = ae + W, e[f + 56] = ae - W, f++;
			}
			for (u = 0; u < 64; ++u) d = e[u] * t[u], p[u] = d > 0 ? d + .5 | 0 : d - .5 | 0;
			return p;
		}(e, t), l = 0; l < 64; ++l) m[C[l]] = c[l];
		var u = m[0] - n;
		n = m[0], u == 0 ? N(r[0]) : (N(r[f[a = 32767 + u]]), N(d[a]));
		for (var h = 63; h > 0 && m[h] == 0;) h--;
		if (h == 0) return N(o), n;
		for (var g, _ = 1; _ <= h;) {
			for (var v = _; m[_] == 0 && _ <= h;) ++_;
			var y = _ - v;
			if (y >= 16) {
				g = y >> 4;
				for (var b = 1; b <= g; ++b) N(s);
				y &= 15;
			}
			a = 32767 + m[_], N(i[(y << 4) + f[a]]), N(d[a]), _++;
		}
		return h != 63 && N(o), n;
	}
	function L(e) {
		(e = Math.min(Math.max(e, 1), 100), a != e) && (function(e) {
			for (var t = [
				16,
				11,
				10,
				16,
				24,
				40,
				51,
				61,
				12,
				12,
				14,
				19,
				26,
				58,
				60,
				55,
				14,
				13,
				16,
				24,
				40,
				57,
				69,
				56,
				14,
				17,
				22,
				29,
				51,
				87,
				80,
				62,
				18,
				22,
				37,
				56,
				68,
				109,
				103,
				77,
				24,
				35,
				55,
				64,
				81,
				104,
				113,
				92,
				49,
				64,
				78,
				87,
				103,
				121,
				120,
				101,
				72,
				92,
				95,
				98,
				112,
				100,
				103,
				99
			], n = 0; n < 64; n++) {
				var r = o((t[n] * e + 50) / 100);
				r = Math.min(Math.max(r, 1), 255), s[C[n]] = r;
			}
			for (var i = [
				17,
				18,
				24,
				47,
				99,
				99,
				99,
				99,
				18,
				21,
				26,
				66,
				99,
				99,
				99,
				99,
				24,
				26,
				56,
				99,
				99,
				99,
				99,
				99,
				47,
				66,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99,
				99
			], a = 0; a < 64; a++) {
				var d = o((i[a] * e + 50) / 100);
				d = Math.min(Math.max(d, 1), 255), c[C[a]] = d;
			}
			for (var f = [
				1,
				1.387039845,
				1.306562965,
				1.175875602,
				1,
				.785694958,
				.5411961,
				.275899379
			], p = 0, m = 0; m < 8; m++) for (var h = 0; h < 8; h++) l[p] = 1 / (s[C[p]] * f[m] * f[h] * 8), u[p] = 1 / (c[C[p]] * f[m] * f[h] * 8), p++;
		}(Math.floor(e < 50 ? 5e3 / e : 200 - 2 * e)), a = e);
	}
	this.encode = function(e, a) {
		a && L(a), h = [], g = 0, _ = 7, F(65496), F(65504), F(16), P(74), P(70), P(73), P(70), P(0), P(1), P(1), P(0), F(1), F(1), P(0), P(0), function() {
			F(65499), F(132), P(0);
			for (var e = 0; e < 64; e++) P(s[e]);
			P(1);
			for (var t = 0; t < 64; t++) P(c[t]);
		}(), function(e, t) {
			F(65472), F(17), P(8), F(t), F(e), P(3), P(1), P(17), P(0), P(2), P(17), P(1), P(3), P(17), P(1);
		}(e.width, e.height), function() {
			F(65476), F(418), P(0);
			for (var e = 0; e < 16; e++) P(w[e + 1]);
			for (var t = 0; t <= 11; t++) P(T[t]);
			P(16);
			for (var n = 0; n < 16; n++) P(E[n + 1]);
			for (var r = 0; r <= 161; r++) P(D[r]);
			P(1);
			for (var i = 0; i < 16; i++) P(O[i + 1]);
			for (var a = 0; a <= 11; a++) P(k[a]);
			P(17);
			for (var o = 0; o < 16; o++) P(A[o + 1]);
			for (var s = 0; s <= 161; s++) P(j[s]);
		}(), F(65498), F(12), P(3), P(1), P(0), P(2), P(17), P(3), P(17), P(0), P(63), P(0);
		var o = 0, d = 0, f = 0;
		g = 0, _ = 7, this.encode.displayName = "_encode_";
		for (var p, m, x, C, M, ee, R, z, B, te = e.data, V = e.width, H = e.height, U = 4 * V, ne = 0; ne < H;) {
			for (p = 0; p < U;) {
				for (M = U * ne + p, R = -1, z = 0, B = 0; B < 64; B++) ee = M + (z = B >> 3) * U + (R = 4 * (7 & B)), ne + z >= H && (ee -= U * (ne + 1 + z - H)), p + R >= U && (ee -= p + R - U + 4), m = te[ee++], x = te[ee++], C = te[ee++], v[B] = (S[m] + S[x + 256 >> 0] + S[C + 512 >> 0] >> 16) - 128, y[B] = (S[m + 768 >> 0] + S[x + 1024 >> 0] + S[C + 1280 >> 0] >> 16) - 128, b[B] = (S[m + 1280 >> 0] + S[x + 1536 >> 0] + S[C + 1792 >> 0] >> 16) - 128;
				o = I(v, l, o, t, r), d = I(y, u, d, n, i), f = I(b, u, f, n, i), p += 32;
			}
			ne += 8;
		}
		if (_ >= 0) {
			var re = [];
			re[1] = _ + 1, re[0] = (1 << _ + 1) - 1, N(re);
		}
		return F(65497), new Uint8Array(h);
	}, e ||= 50, function() {
		for (var e = String.fromCharCode, t = 0; t < 256; t++) x[t] = e(t);
	}(), t = M(w, T), n = M(O, k), r = M(E, D), i = M(A, j), function() {
		for (var e = 1, t = 2, n = 1; n <= 15; n++) {
			for (var r = e; r < t; r++) f[32767 + r] = n, d[32767 + r] = [], d[32767 + r][1] = n, d[32767 + r][0] = r;
			for (var i = -(t - 1); i <= -e; i++) f[32767 + i] = n, d[32767 + i] = [], d[32767 + i][1] = n, d[32767 + i][0] = t - 1 + i;
			e <<= 1, t <<= 1;
		}
	}(), function() {
		for (var e = 0; e < 256; e++) S[e] = 19595 * e, S[e + 256 >> 0] = 38470 * e, S[e + 512 >> 0] = 7471 * e + 32768, S[e + 768 >> 0] = -11059 * e, S[e + 1024 >> 0] = -21709 * e, S[e + 1280 >> 0] = 32768 * e + 8421375, S[e + 1536 >> 0] = -27439 * e, S[e + 1792 >> 0] = -5329 * e;
	}(), L(e);
}
function St(e, t) {
	if (this.pos = 0, this.buffer = e, this.datav = new DataView(e.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, [
		"BM",
		"BA",
		"CI",
		"CP",
		"IC",
		"PT"
	].indexOf(this.flag) === -1) throw Error("Invalid BMP File");
	this.parseHeader(), this.parseBGR();
}
function Ct(e) {
	function t(e) {
		if (!e) throw Error("assert :P");
	}
	function n(e, t, n) {
		for (var r = 0; 4 > r; r++) if (e[t + r] != n.charCodeAt(r)) return !0;
		return !1;
	}
	function r(e, t, n, r, i) {
		for (var a = 0; a < i; a++) e[t + a] = n[r + a];
	}
	function i(e, t, n, r) {
		for (var i = 0; i < r; i++) e[t + i] = n;
	}
	function a(e) {
		return new Int32Array(e);
	}
	function o(e, t) {
		for (var n = [], r = 0; r < e; r++) n.push(new t());
		return n;
	}
	function s(e, t) {
		var n = [];
		return function e(n, r, i) {
			for (var a = i[r], o = 0; o < a && (n.push(i.length > r + 1 ? [] : new t()), !(i.length < r + 1)); o++) e(n[o], r + 1, i);
		}(n, 0, e), n;
	}
	var c = function() {
		var e = this;
		function c(e, t) {
			for (var n = 1 << t - 1 >>> 0; e & n;) n >>>= 1;
			return n ? (e & n - 1) + n : e;
		}
		function l(e, n, r, i, a) {
			t(!(i % r));
			do
				e[n + (i -= r)] = a;
			while (0 < i);
		}
		function u(e, n, r, i, o) {
			if (t(2328 >= o), 512 >= o) var s = a(512);
			else if ((s = a(o)) == null) return 0;
			return function(e, n, r, i, o, s) {
				var u, f, p = n, m = 1 << r, h = a(16), g = a(16);
				for (t(o != 0), t(i != null), t(e != null), t(0 < r), f = 0; f < o; ++f) {
					if (15 < i[f]) return 0;
					++h[i[f]];
				}
				if (h[0] == o) return 0;
				for (g[1] = 0, u = 1; 15 > u; ++u) {
					if (h[u] > 1 << u) return 0;
					g[u + 1] = g[u] + h[u];
				}
				for (f = 0; f < o; ++f) u = i[f], 0 < i[f] && (s[g[u]++] = f);
				if (g[15] == 1) return (i = new d()).g = 0, i.value = s[0], l(e, p, 1, m, i), m;
				var _, v = -1, y = m - 1, b = 0, x = 1, S = 1, C = 1 << r;
				for (f = 0, u = 1, o = 2; u <= r; ++u, o <<= 1) {
					if (x += S <<= 1, 0 > (S -= h[u])) return 0;
					for (; 0 < h[u]; --h[u]) (i = new d()).g = u, i.value = s[f++], l(e, p + b, o, C, i), b = c(b, u);
				}
				for (u = r + 1, o = 2; 15 >= u; ++u, o <<= 1) {
					if (x += S <<= 1, 0 > (S -= h[u])) return 0;
					for (; 0 < h[u]; --h[u]) {
						if (i = new d(), (b & y) != v) {
							for (p += C, _ = 1 << (v = u) - r; 15 > v && !(0 >= (_ -= h[v]));) ++v, _ <<= 1;
							m += C = 1 << (_ = v - r), e[n + (v = b & y)].g = _ + r, e[n + v].value = p - n - v;
						}
						i.g = u - r, i.value = s[f++], l(e, p + (b >> r), o, C, i), b = c(b, u);
					}
				}
				return x == 2 * g[15] - 1 ? m : 0;
			}(e, n, r, i, o, s);
		}
		function d() {
			this.value = this.g = 0;
		}
		function f() {
			this.value = this.g = 0;
		}
		function p() {
			this.G = o(5, d), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o(zn, f);
		}
		function m(e, n, r, i) {
			t(e != null), t(n != null), t(2147483648 > i), e.Ca = 254, e.I = 0, e.b = -8, e.Ka = 0, e.oa = n, e.pa = r, e.Jd = n, e.Yc = r + i, e.Zc = 4 <= i ? r + i - 4 + 1 : r, E(e);
		}
		function h(e, t) {
			for (var n = 0; 0 < t--;) n |= O(e, 128) << t;
			return n;
		}
		function g(e, t) {
			var n = h(e, t);
			return D(e) ? -n : n;
		}
		function _(e, n, r, i) {
			var a, o = 0;
			for (t(e != null), t(n != null), t(4294967288 > i), e.Sb = i, e.Ra = 0, e.u = 0, e.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a) o += n[r + a] << 8 * a;
			e.Ra = o, e.bb = i, e.oa = n, e.pa = r;
		}
		function v(e) {
			for (; 8 <= e.u && e.bb < e.Sb;) e.Ra >>>= 8, e.Ra += e.oa[e.pa + e.bb] << Hn - 8 >>> 0, ++e.bb, e.u -= 8;
			C(e) && (e.h = 1, e.u = 0);
		}
		function y(e, n) {
			if (t(0 <= n), !e.h && n <= Vn) {
				var r = S(e) & Bn[n];
				return e.u += n, v(e), r;
			}
			return e.h = 1, e.u = 0;
		}
		function b() {
			this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
		}
		function x() {
			this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
		}
		function S(e) {
			return e.Ra >>> (e.u & Hn - 1) >>> 0;
		}
		function C(e) {
			return t(e.bb <= e.Sb), e.h || e.bb == e.Sb && e.u > Hn;
		}
		function w(e, t) {
			e.u = t, e.h = C(e);
		}
		function T(e) {
			e.u >= Un && (t(e.u >= Un), v(e));
		}
		function E(e) {
			t(e != null && e.oa != null), e.pa < e.Zc ? (e.I = (e.oa[e.pa++] | e.I << 8) >>> 0, e.b += 8) : (t(e != null && e.oa != null), e.pa < e.Yc ? (e.b += 8, e.I = e.oa[e.pa++] | e.I << 8) : e.Ka ? e.b = 0 : (e.I <<= 8, e.b += 8, e.Ka = 1));
		}
		function D(e) {
			return h(e, 1);
		}
		function O(e, t) {
			var n = e.Ca;
			0 > e.b && E(e);
			var r = e.b, i = n * t >>> 8, a = (e.I >>> r > i) + 0;
			for (a ? (n -= i, e.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
			return r = 7 ^ i + Wn[r], e.b -= r, e.Ca = (n << r) - 1, a;
		}
		function k(e, t, n) {
			e[t + 0] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255;
		}
		function A(e, t) {
			return e[t + 0] << 0 | e[t + 1] << 8;
		}
		function j(e, t) {
			return A(e, t) | e[t + 2] << 16;
		}
		function M(e, t) {
			return A(e, t) | A(e, t + 2) << 16;
		}
		function N(e, n) {
			var r = 1 << n;
			return t(e != null), t(0 < n), e.X = a(r), e.X == null ? 0 : (e.Mb = 32 - n, e.Xa = n, 1);
		}
		function P(e, n) {
			t(e != null), t(n != null), t(e.Xa == n.Xa), r(n.X, 0, e.X, 0, 1 << n.Xa);
		}
		function F() {
			this.X = [], this.Xa = this.Mb = 0;
		}
		function I(e, n, r, i) {
			t(r != null), t(i != null);
			var a = r[0], o = i[0];
			return a == 0 && (a = (e * o + n / 2) / n), o == 0 && (o = (n * a + e / 2) / e), 0 >= a || 0 >= o ? 0 : (r[0] = a, i[0] = o, 1);
		}
		function L(e, t) {
			return e + (1 << t) - 1 >>> t;
		}
		function ee(e, t) {
			return ((4278255360 & e) + (4278255360 & t) >>> 0 & 4278255360) + ((16711935 & e) + (16711935 & t) >>> 0 & 16711935) >>> 0;
		}
		function R(t, n) {
			e[n] = function(n, r, i, a, o, s, c) {
				var l;
				for (l = 0; l < o; ++l) {
					var u = e[t](s[c + l - 1], i, a + l);
					s[c + l] = ee(n[r + l], u);
				}
			};
		}
		function z() {
			this.ud = this.hd = this.jd = 0;
		}
		function B(e, t) {
			return ((4278124286 & (e ^ t)) >>> 1) + (e & t) >>> 0;
		}
		function te(e) {
			return 0 <= e && 256 > e ? e : 0 > e ? 0 : 255 < e ? 255 : void 0;
		}
		function V(e, t) {
			return te(e + (e - t + .5 >> 1));
		}
		function H(e, t, n) {
			return Math.abs(t - n) - Math.abs(e - n);
		}
		function U(e, t, n, r, i, a, o) {
			for (r = a[o - 1], n = 0; n < i; ++n) a[o + n] = r = ee(e[t + n], r);
		}
		function ne(e, t, n, r, i) {
			var a;
			for (a = 0; a < n; ++a) {
				var o = e[t + a], s = o >> 8 & 255, c = 16711935 & (c = (c = 16711935 & o) + ((s << 16) + s));
				r[i + a] = (4278255360 & o) + c >>> 0;
			}
		}
		function re(e, t) {
			t.jd = e >> 0 & 255, t.hd = e >> 8 & 255, t.ud = e >> 16 & 255;
		}
		function W(e, t, n, r, i, a) {
			var o;
			for (o = 0; o < r; ++o) {
				var s = t[n + o], c = s >>> 8, l = s, u = 255 & (u = (u = s >>> 16) + ((e.jd << 24 >> 24) * (c << 24 >> 24) >>> 5));
				l = 255 & (l = (l += (e.hd << 24 >> 24) * (c << 24 >> 24) >>> 5) + ((e.ud << 24 >> 24) * (u << 24 >> 24) >>> 5)), i[a + o] = (4278255360 & s) + (u << 16) + l;
			}
		}
		function ie(t, n, r, i, a) {
			e[n] = function(e, t, n, r, o, s, c, l, u) {
				for (r = c; r < l; ++r) for (c = 0; c < u; ++c) o[s++] = a(n[i(e[t++])]);
			}, e[t] = function(t, n, o, s, c, l, u) {
				var d = 8 >> t.b, f = t.Ea, p = t.K[0], m = t.w;
				if (8 > d) for (t = (1 << t.b) - 1, m = (1 << d) - 1; n < o; ++n) {
					var h, g = 0;
					for (h = 0; h < f; ++h) h & t || (g = i(s[c++])), l[u++] = a(p[g & m]), g >>= d;
				}
				else e["VP8LMapColor" + r](s, c, p, m, l, u, n, o, f);
			};
		}
		function ae(e, t, n, r, i) {
			for (n = t + n; t < n;) {
				var a = e[t++];
				r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255;
			}
		}
		function oe(e, t, n, r, i) {
			for (n = t + n; t < n;) {
				var a = e[t++];
				r[i++] = a >> 16 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 0 & 255, r[i++] = a >> 24 & 255;
			}
		}
		function se(e, t, n, r, i) {
			for (n = t + n; t < n;) {
				var a = (o = e[t++]) >> 16 & 240 | o >> 12 & 15, o = o >> 0 & 240 | o >> 28 & 15;
				r[i++] = a, r[i++] = o;
			}
		}
		function G(e, t, n, r, i) {
			for (n = t + n; t < n;) {
				var a = (o = e[t++]) >> 16 & 248 | o >> 13 & 7, o = o >> 5 & 224 | o >> 3 & 31;
				r[i++] = a, r[i++] = o;
			}
		}
		function ce(e, t, n, r, i) {
			for (n = t + n; t < n;) {
				var a = e[t++];
				r[i++] = a >> 0 & 255, r[i++] = a >> 8 & 255, r[i++] = a >> 16 & 255;
			}
		}
		function le(e, t, n, i, a, o) {
			if (o == 0) for (n = t + n; t < n;) k(i, ((o = e[t++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
			else r(i, a, e, t, n);
		}
		function ue(t, n) {
			e[n][0] = e[t + "0"], e[n][1] = e[t + "1"], e[n][2] = e[t + "2"], e[n][3] = e[t + "3"], e[n][4] = e[t + "4"], e[n][5] = e[t + "5"], e[n][6] = e[t + "6"], e[n][7] = e[t + "7"], e[n][8] = e[t + "8"], e[n][9] = e[t + "9"], e[n][10] = e[t + "10"], e[n][11] = e[t + "11"], e[n][12] = e[t + "12"], e[n][13] = e[t + "13"], e[n][14] = e[t + "0"], e[n][15] = e[t + "0"];
		}
		function K(e) {
			return e == Ur || e == Wr || e == Gr || e == Kr;
		}
		function de() {
			this.eb = [], this.size = this.A = this.fb = 0;
		}
		function fe() {
			this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
		}
		function pe() {
			this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new de(), this.f.kb = new fe(), this.sd = null;
		}
		function me() {
			this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
		}
		function he() {
			this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
		}
		function ge(e) {
			return alert("todo:WebPSamplerProcessPlane"), e.T;
		}
		function _e(e, t) {
			var n = e.T, i = t.ba.f.RGBA, a = i.eb, o = i.fb + e.ka * i.A, s = _i[t.ba.S], c = e.y, l = e.O, u = e.f, d = e.N, f = e.ea, p = e.W, m = t.cc, h = t.dc, g = t.Mc, _ = t.Nc, v = e.ka, y = e.ka + e.T, b = e.U, x = b + 1 >> 1;
			for (v == 0 ? s(c, l, null, null, u, d, f, p, u, d, f, p, a, o, null, null, b) : (s(t.ec, t.fc, c, l, m, h, g, _, u, d, f, p, a, o - i.A, a, o, b), ++n); v + 2 < y; v += 2) m = u, h = d, g = f, _ = p, d += e.Rc, p += e.Rc, o += 2 * i.A, s(c, (l += 2 * e.fa) - e.fa, c, l, m, h, g, _, u, d, f, p, a, o - i.A, a, o, b);
			return l += e.fa, e.j + y < e.o ? (r(t.ec, t.fc, c, l, b), r(t.cc, t.dc, u, d, x), r(t.Mc, t.Nc, f, p, x), n--) : 1 & y || s(c, l, null, null, u, d, f, p, u, d, f, p, a, o + i.A, null, null, b), n;
		}
		function ve(e, n, r) {
			var i = e.F, a = [e.J];
			if (i != null) {
				var o = e.U, s = n.ba.S, c = s == Br || s == Gr;
				n = n.ba.f.RGBA;
				var l = [0], u = e.ka;
				l[0] = e.T, e.Kb && (u == 0 ? --l[0] : (--u, a[0] -= e.width), e.j + e.ka + e.T == e.o && (l[0] = e.o - e.j - u));
				var d = n.eb;
				u = n.fb + u * n.A, e = Tr(i, a[0], e.width, o, l, d, u + (c ? 0 : 3), n.A), t(r == l), e && K(s) && Cr(d, u, c, o, l, n.A);
			}
			return 0;
		}
		function ye(e) {
			var t = e.ma, n = t.ba.S, r = 11 > n, i = n == Lr || n == zr || n == Br || n == Vr || n == 12 || K(n);
			if (t.memory = null, t.Ib = null, t.Jb = null, t.Nd = null, !In(t.Oa, e, i ? 11 : 12)) return 0;
			if (i && K(n) && yn(), e.da) alert("todo:use_scaling");
			else {
				if (r) {
					if (t.Ib = ge, e.Kb) {
						if (n = e.U + 1 >> 1, t.memory = a(e.U + 2 * n), t.memory == null) return 0;
						t.ec = t.memory, t.fc = 0, t.cc = t.ec, t.dc = t.fc + e.U, t.Mc = t.cc, t.Nc = t.dc + n, t.Ib = _e, yn();
					}
				} else alert("todo:EmitYUV");
				i && (t.Jb = ve, r && _n());
			}
			if (r && !ji) {
				for (e = 0; 256 > e; ++e) Mi[e] = 89858 * (e - 128) + Ei >> Ti, Fi[e] = -22014 * (e - 128) + Ei, Pi[e] = -45773 * (e - 128), Ni[e] = 113618 * (e - 128) + Ei >> Ti;
				for (e = Di; e < Oi; ++e) t = 76283 * (e - 16) + Ei >> Ti, Ii[e - Di] = Ye(t, 255), Li[e - Di] = Ye(t + 8 >> 4, 15);
				ji = 1;
			}
			return 1;
		}
		function be(e) {
			var n = e.ma, r = e.U, i = e.T;
			return t(!(1 & e.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(e, n), n.Jb != null && n.Jb(e, n, r), n.Dc += r, 1);
		}
		function q(e) {
			e.ma.memory = null;
		}
		function xe(e, t, n, r) {
			return y(e, 8) == 47 ? (t[0] = y(e, 14) + 1, n[0] = y(e, 14) + 1, r[0] = y(e, 1), y(e, 3) == 0 ? !e.h : 0) : 0;
		}
		function Se(e, t) {
			if (4 > e) return e + 1;
			var n = e - 2 >> 1;
			return (2 + (1 & e) << n) + y(t, n) + 1;
		}
		function Ce(e, t) {
			return 120 < t ? t - 120 : 1 <= (n = ((n = Qr[t - 1]) >> 4) * e + (8 - (15 & n))) ? n : 1;
			var n;
		}
		function J(e, t, n) {
			var r = S(n), i = e[t += 255 & r].g - 8;
			return 0 < i && (w(n, n.u + 8), r = S(n), t += e[t].value, t += r & (1 << i) - 1), w(n, n.u + e[t].g), e[t].value;
		}
		function we(e, n, r) {
			return r.g += e.g, r.value += e.value << n >>> 0, t(8 >= r.g), e.g;
		}
		function Te(e, n, r) {
			var i = e.xc;
			return t((n = i == 0 ? 0 : e.vc[e.md * (r >> i) + (n >> i)]) < e.Wb), e.Ya[n];
		}
		function Ee(e, n, i, a) {
			var o = e.ab, s = e.c * n, c = e.C;
			n = c + n;
			var l = i, u = a;
			for (a = e.Ta, i = e.Ua; 0 < o--;) {
				var d = e.gc[o], f = c, p = n, m = l, h = u, g = (u = a, l = i, d.Ea);
				switch (t(f < p), t(p <= d.nc), d.hc) {
					case 2:
						qn(m, h, (p - f) * g, u, l);
						break;
					case 0:
						var _ = f, v = p, y = u, b = l, x = (E = d).Ea;
						_ == 0 && (Gn(m, h, null, null, 1, y, b), U(m, h + 1, 0, 0, x - 1, y, b + 1), h += x, b += x, ++_);
						for (var S = 1 << E.b, C = S - 1, w = L(x, E.b), T = E.K, E = E.w + (_ >> E.b) * w; _ < v;) {
							var D = T, O = E, k = 1;
							for (Kn(m, h, y, b - x, 1, y, b); k < x;) {
								var A = (k & ~C) + S;
								A > x && (A = x), (0, Qn[D[O++] >> 8 & 15])(m, h + +k, y, b + k - x, A - k, y, b + k), k = A;
							}
							h += x, b += x, ++_ & C || (E += w);
						}
						p != d.nc && r(u, l - g, u, l + (p - f - 1) * g, g);
						break;
					case 1:
						for (g = m, v = h, x = (m = d.Ea) - (b = m & ~(y = (h = 1 << d.b) - 1)), _ = L(m, d.b), S = d.K, d = d.w + (f >> d.b) * _; f < p;) {
							for (C = S, w = d, T = new z(), E = v + b, D = v + m; v < E;) re(C[w++], T), $n(T, g, v, h, u, l), v += h, l += h;
							v < D && (re(C[w++], T), $n(T, g, v, x, u, l), v += x, l += x), ++f & y || (d += _);
						}
						break;
					case 3: if (m == u && h == l && 0 < d.b) {
						for (v = u, m = g = l + (p - f) * g - (b = (p - f) * L(d.Ea, d.b)), h = u, y = l, _ = [], b = (x = b) - 1; 0 <= b; --b) _[b] = h[y + b];
						for (b = x - 1; 0 <= b; --b) v[m + b] = _[b];
						Jn(d, f, p, u, g, u, l);
					} else Jn(d, f, p, m, h, u, l);
				}
				l = a, u = i;
			}
			u != i && r(a, i, l, u, s);
		}
		function De(e, n) {
			var r = e.V, i = e.Ba + e.c * e.C, a = n - e.C;
			if (t(n <= e.l.o), t(16 >= a), 0 < a) {
				var o = e.l, s = e.Ta, c = e.Ua, l = o.width;
				if (Ee(e, a, r, i), a = c = [c], t((r = e.C) < (i = n)), t(o.v < o.va), i > o.o && (i = o.o), r < o.j) {
					var u = o.j - r;
					r = o.j, a[0] += u * l;
				}
				if (r >= i ? r = 0 : (a[0] += 4 * o.v, o.ka = r - o.j, o.U = o.va - o.v, o.T = i - r, r = 1), r) {
					if (c = c[0], 11 > (r = e.ca).S) {
						var d = r.f.RGBA, f = (i = r.S, a = o.U, o = o.T, u = d.eb, d.A), p = o;
						for (d = d.fb + e.Ma * d.A; 0 < p--;) {
							var m = s, h = c, g = a, _ = u, v = d;
							switch (i) {
								case Ir:
									er(m, h, g, _, v);
									break;
								case Lr:
									tr(m, h, g, _, v);
									break;
								case Ur:
									tr(m, h, g, _, v), Cr(_, v, 0, g, 1, 0);
									break;
								case Rr:
									ir(m, h, g, _, v);
									break;
								case zr:
									le(m, h, g, _, v, 1);
									break;
								case Wr:
									le(m, h, g, _, v, 1), Cr(_, v, 0, g, 1, 0);
									break;
								case Br:
									le(m, h, g, _, v, 0);
									break;
								case Gr:
									le(m, h, g, _, v, 0), Cr(_, v, 1, g, 1, 0);
									break;
								case Vr:
									nr(m, h, g, _, v);
									break;
								case Kr:
									nr(m, h, g, _, v), wr(_, v, g, 1, 0);
									break;
								case Hr:
									rr(m, h, g, _, v);
									break;
								default: t(0);
							}
							c += l, d += f;
						}
						e.Ma += o;
					} else alert("todo:EmitRescaledRowsYUVA");
					t(e.Ma <= r.height);
				}
			}
			e.C = n, t(e.C <= e.i);
		}
		function Oe(e) {
			var t;
			if (0 < e.ua) return 0;
			for (t = 0; t < e.Wb; ++t) {
				var n = e.Ya[t].G, r = e.Ya[t].H;
				if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0;
			}
			return 1;
		}
		function ke(e, n, r, i, a, o) {
			if (e.Z != 0) {
				var s = e.qd, c = e.rd;
				for (t(gi[e.Z] != null); n < r; ++n) gi[e.Z](s, c, i, a, i, a, o), s = i, c = a, a += o;
				e.qd = s, e.rd = c;
			}
		}
		function Ae(e, n) {
			var r = e.l.ma, i = r.Z == 0 || r.Z == 1 ? e.l.j : e.C;
			if (i = e.C < i ? i : e.C, t(n <= e.l.o), n > i) {
				var a = e.l.width, o = r.ca, s = r.tb + a * i, c = e.V, l = e.Ba + e.c * i, u = e.gc;
				t(e.ab == 1), t(u[0].hc == 3), Xn(u[0], i, n, c, l, o, s), ke(r, i, n, o, s, a);
			}
			e.C = e.Ma = n;
		}
		function je(e, n, r, i, a, o, s) {
			var c = e.$ / i, l = e.$ % i, u = e.m, d = e.s, f = r + e.$, p = f;
			a = r + i * a;
			var m = r + i * o, h = 280 + d.ua, g = e.Pb ? c : 16777216, _ = 0 < d.ua ? d.Wa : null, v = d.wc, y = f < m ? Te(d, l, c) : null;
			t(e.C < o), t(m <= a);
			var b = !1;
			t: for (;;) {
				for (; b || f < m;) {
					var x = 0;
					if (c >= g) {
						var E = f - r;
						t((g = e).Pb), g.wd = g.m, g.xd = E, 0 < g.s.ua && P(g.s.Wa, g.s.vb), g = c + ei;
					}
					if (l & v || (y = Te(d, l, c)), t(y != null), y.Qb && (n[f] = y.qb, b = !0), !b) if (T(u), y.jc) {
						x = u, E = n;
						var D = f, O = y.pd[S(x) & zn - 1];
						t(y.jc), 256 > O.g ? (w(x, x.u + O.g), E[D] = O.value, x = 0) : (w(x, x.u + O.g - 256), t(256 <= O.value), x = O.value), x == 0 && (b = !0);
					} else x = J(y.G[0], y.H[0], u);
					if (u.h) break;
					if (b || 256 > x) {
						if (!b) if (y.nd) n[f] = (y.qb | x << 8) >>> 0;
						else {
							if (T(u), b = J(y.G[1], y.H[1], u), T(u), E = J(y.G[2], y.H[2], u), D = J(y.G[3], y.H[3], u), u.h) break;
							n[f] = (D << 24 | b << 16 | x << 8 | E) >>> 0;
						}
						if (b = !1, ++f, ++l >= i && (l = 0, ++c, s != null && c <= o && !(c % 16) && s(e, c), _ != null)) for (; p < f;) x = n[p++], _.X[(506832829 * x & 4294967295) >>> _.Mb] = x;
					} else if (280 > x) {
						if (x = Se(x - 256, u), E = J(y.G[4], y.H[4], u), T(u), E = Ce(i, E = Se(E, u)), u.h) break;
						if (f - r < E || a - f < x) break t;
						for (D = 0; D < x; ++D) n[f + D] = n[f + D - E];
						for (f += x, l += x; l >= i;) l -= i, ++c, s != null && c <= o && !(c % 16) && s(e, c);
						if (t(f <= a), l & v && (y = Te(d, l, c)), _ != null) for (; p < f;) x = n[p++], _.X[(506832829 * x & 4294967295) >>> _.Mb] = x;
					} else {
						if (!(x < h)) break t;
						for (b = x - 280, t(_ != null); p < f;) x = n[p++], _.X[(506832829 * x & 4294967295) >>> _.Mb] = x;
						x = f, t(!(b >>> (E = _).Xa)), n[x] = E.X[b], b = !0;
					}
					b || t(u.h == C(u));
				}
				if (e.Pb && u.h && f < a) t(e.m.h), e.a = 5, e.m = e.wd, e.$ = e.xd, 0 < e.s.ua && P(e.s.vb, e.s.Wa);
				else {
					if (u.h) break t;
					s?.(e, c > o ? o : c), e.a = 0, e.$ = f - r;
				}
				return 1;
			}
			return e.a = 3, 0;
		}
		function Me(e) {
			t(e != null), e.vc = null, e.yc = null, e.Ya = null;
			var n = e.Wa;
			n != null && (n.X = null), e.vb = null, t(e != null);
		}
		function Ne() {
			var t = new cn();
			return t == null ? null : (t.a = 0, t.xb = hi, ue("Predictor", "VP8LPredictors"), ue("Predictor", "VP8LPredictors_C"), ue("PredictorAdd", "VP8LPredictorsAdd"), ue("PredictorAdd", "VP8LPredictorsAdd_C"), qn = ne, $n = W, er = ae, tr = oe, nr = se, rr = G, ir = ce, e.VP8LMapColor32b = Yn, e.VP8LMapColor8b = Zn, t);
		}
		function Pe(e, n, r, s, c) {
			var l = 1, f = [e], m = [n], h = s.m, g = s.s, _ = null, v = 0;
			t: for (;;) {
				if (r) for (; l && y(h, 1);) {
					var b = f, x = m, C = s, E = 1, D = C.m, O = C.gc[C.ab], k = y(D, 2);
					if (C.Oc & 1 << k) l = 0;
					else {
						switch (C.Oc |= 1 << k, O.hc = k, O.Ea = b[0], O.nc = x[0], O.K = [null], ++C.ab, t(4 >= C.ab), k) {
							case 0:
							case 1:
								O.b = y(D, 3) + 2, E = Pe(L(O.Ea, O.b), L(O.nc, O.b), 0, C, O.K), O.K = O.K[0];
								break;
							case 3:
								var A, j = y(D, 8) + 1, M = 16 < j ? 0 : 4 < j ? 1 : 2 < j ? 2 : 3;
								if (b[0] = L(O.Ea, M), O.b = M, A = E = Pe(j, 1, 0, C, O.K)) {
									var P, F = j, I = O, R = 1 << (8 >> I.b), z = a(R);
									if (z == null) A = 0;
									else {
										var B = I.K[0], te = I.w;
										for (z[0] = I.K[0][0], P = 1; P < 1 * F; ++P) z[P] = ee(B[te + P], z[P - 1]);
										for (; P < 4 * R; ++P) z[P] = 0;
										I.K[0] = null, I.K[0] = z, A = 1;
									}
								}
								E = A;
								break;
							case 2: break;
							default: t(0);
						}
						l = E;
					}
				}
				if (f = f[0], m = m[0], l && y(h, 1) && !(l = 1 <= (v = y(h, 4)) && 11 >= v)) {
					s.a = 3;
					break t;
				}
				var V;
				if (V = l) e: {
					var H, U, ne, re = s, W = f, ie = m, ae = v, oe = r, se = re.m, G = re.s, ce = [null], le = 1, ue = 0, K = $r[ae];
					r: for (;;) {
						if (oe && y(se, 1)) {
							var de = y(se, 3) + 2, fe = L(W, de), pe = L(ie, de), me = fe * pe;
							if (!Pe(fe, pe, 0, re, ce)) break r;
							for (ce = ce[0], G.xc = de, H = 0; H < me; ++H) {
								var he = ce[H] >> 8 & 65535;
								ce[H] = he, he >= le && (le = he + 1);
							}
						}
						if (se.h) break r;
						for (U = 0; 5 > U; ++U) {
							var ge = Yr[U];
							!U && 0 < ae && (ge += 1 << ae), ue < ge && (ue = ge);
						}
						var _e = o(le * K, d), ve = le, ye = o(ve, p);
						if (ye == null) var be = null;
						else t(65536 >= ve), be = ye;
						var q = a(ue);
						if (be == null || q == null || _e == null) {
							re.a = 1;
							break r;
						}
						var xe = _e;
						for (H = ne = 0; H < le; ++H) {
							var Se = be[H], Ce = Se.G, J = Se.H, Te = 0, Ee = 1, De = 0;
							for (U = 0; 5 > U; ++U) {
								ge = Yr[U], Ce[U] = xe, J[U] = ne, !U && 0 < ae && (ge += 1 << ae);
								n: {
									var Oe, ke = ge, Ae = re, Ne = q, Fe = xe, Ie = ne, Le = 0, Y = Ae.m, Re = y(Y, 1);
									if (i(Ne, 0, 0, ke), Re) {
										var ze = y(Y, 1) + 1, Be = y(Y, y(Y, 1) == 0 ? 1 : 8);
										Ne[Be] = 1, ze == 2 && (Ne[Be = y(Y, 8)] = 1);
										var Ve = 1;
									} else {
										var He = a(19), Ue = y(Y, 4) + 4;
										if (19 < Ue) {
											Ae.a = 3;
											var We = 0;
											break n;
										}
										for (Oe = 0; Oe < Ue; ++Oe) He[Zr[Oe]] = y(Y, 3);
										var Ge = void 0, Ke = void 0, qe = Ae, Je = He, Ye = ke, Xe = Ne, Ze = 0, Qe = qe.m, $e = 8, et = o(128, d);
										i: for (; u(et, 0, 7, Je, 19);) {
											if (y(Qe, 1)) {
												if ((Ge = 2 + y(Qe, 2 + 2 * y(Qe, 3))) > Ye) break i;
											} else Ge = Ye;
											for (Ke = 0; Ke < Ye && Ge--;) {
												T(Qe);
												var tt = et[0 + (127 & S(Qe))];
												w(Qe, Qe.u + tt.g);
												var nt = tt.value;
												if (16 > nt) Xe[Ke++] = nt, nt != 0 && ($e = nt);
												else {
													var rt = nt == 16, it = nt - 16, at = Jr[it], ot = y(Qe, qr[it]) + at;
													if (Ke + ot > Ye) break i;
													for (var st = rt ? $e : 0; 0 < ot--;) Xe[Ke++] = st;
												}
											}
											Ze = 1;
											break i;
										}
										Ze || (qe.a = 3), Ve = Ze;
									}
									(Ve &&= !Y.h) && (Le = u(Fe, Ie, 8, Ne, ke)), Ve && Le != 0 ? We = Le : (Ae.a = 3, We = 0);
								}
								if (We == 0) break r;
								if (Ee && Xr[U] == 1 && (Ee = xe[ne].g == 0), Te += xe[ne].g, ne += We, 3 >= U) {
									var ct, lt = q[0];
									for (ct = 1; ct < ge; ++ct) q[ct] > lt && (lt = q[ct]);
									De += lt;
								}
							}
							if (Se.nd = Ee, Se.Qb = 0, Ee && (Se.qb = (Ce[3][J[3] + 0].value << 24 | Ce[1][J[1] + 0].value << 16 | Ce[2][J[2] + 0].value) >>> 0, Te == 0 && 256 > Ce[0][J[0] + 0].value && (Se.Qb = 1, Se.qb += Ce[0][J[0] + 0].value << 8)), Se.jc = !Se.Qb && 6 > De, Se.jc) {
								var ut, X = Se;
								for (ut = 0; ut < zn; ++ut) {
									var dt = ut, ft = X.pd[dt], pt = X.G[0][X.H[0] + dt];
									256 <= pt.value ? (ft.g = pt.g + 256, ft.value = pt.value) : (ft.g = 0, ft.value = 0, dt >>= we(pt, 8, ft), dt >>= we(X.G[1][X.H[1] + dt], 16, ft), dt >>= we(X.G[2][X.H[2] + dt], 0, ft), we(X.G[3][X.H[3] + dt], 24, ft));
								}
							}
						}
						G.vc = ce, G.Wb = le, G.Ya = be, G.yc = _e, V = 1;
						break e;
					}
					V = 0;
				}
				if (!(l = V)) {
					s.a = 3;
					break t;
				}
				if (0 < v) {
					if (g.ua = 1 << v, !N(g.Wa, v)) {
						s.a = 1, l = 0;
						break t;
					}
				} else g.ua = 0;
				var mt = s, ht = f, gt = m, _t = mt.s, vt = _t.xc;
				if (mt.c = ht, mt.i = gt, _t.md = L(ht, vt), _t.wc = vt == 0 ? -1 : (1 << vt) - 1, r) {
					s.xb = mi;
					break t;
				}
				if ((_ = a(f * m)) == null) {
					s.a = 1, l = 0;
					break t;
				}
				l = (l = je(s, _, 0, f, m, m, null)) && !h.h;
				break t;
			}
			return l ? (c == null ? (t(_ == null), t(r)) : c[0] = _, s.$ = 0, r || Me(g)) : Me(g), l;
		}
		function Fe(e, n) {
			var r = e.c * e.i, i = r + n + 16 * n;
			return t(e.c <= n), e.V = a(i), e.V == null ? (e.Ta = null, e.Ua = 0, e.a = 1, 0) : (e.Ta = e.V, e.Ua = e.Ba + r + n, 1);
		}
		function Ie(e, n) {
			var r = e.C, i = n - r, a = e.V, o = e.Ba + e.c * r;
			for (t(n <= e.l.o); 0 < i;) {
				var s = 16 < i ? 16 : i, c = e.l.ma, l = e.l.width, u = l * s, d = c.ca, f = c.tb + l * r, p = e.Ta, m = e.Ua;
				Ee(e, s, a, o), Er(p, m, d, f, u), ke(c, r, r + s, d, f, l), i -= s, a += s * e.c, r += s;
			}
			t(r == n), e.C = e.Ma = n;
		}
		function Le() {
			this.ub = this.yd = this.td = this.Rb = 0;
		}
		function Y() {
			this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
		}
		function Re() {
			this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4);
		}
		function ze() {
			this.Yb = function() {
				var e = [];
				return function e(t, n, r) {
					for (var i = r[n], a = 0; a < i && (t.push(r.length > n + 1 ? [] : 0), !(r.length < n + 1)); a++) e(t[a], n + 1, r);
				}(e, 0, [3, 11]), e;
			}();
		}
		function Be() {
			this.jb = a(3), this.Wc = s([4, 8], ze), this.Xc = s([4, 17], ze);
		}
		function Ve() {
			this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4);
		}
		function He() {
			this.ld = this.La = this.dd = this.tc = 0;
		}
		function Ue() {
			this.Na = this.la = 0;
		}
		function We() {
			this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
		}
		function Ge() {
			this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
		}
		function Ke() {
			this.uc = this.M = this.Nb = 0, this.wa = Array(new He()), this.Y = 0, this.ya = Array(new Ge()), this.aa = 0, this.l = new Xe();
		}
		function qe() {
			this.y = a(16), this.f = a(8), this.ea = a(8);
		}
		function Je() {
			this.cb = this.a = 0, this.sc = "", this.m = new b(), this.Od = new Le(), this.Kc = new Y(), this.ed = new Ve(), this.Qa = new Re(), this.Ic = this.$c = this.Aa = 0, this.D = new Ke(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o(8, b), this.ia = 0, this.pb = o(4, We), this.Pa = new Be(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
				0,
				0,
				0,
				0
			], this.Gd = Array(new qe()), this.Hd = 0, this.rb = Array(new Ue()), this.sb = 0, this.wa = Array(new He()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Ge()), this.L = this.aa = 0, this.gd = s([4, 2], He), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
		}
		function Ye(e, t) {
			return 0 > e ? 0 : e > t ? t : e;
		}
		function Xe() {
			this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
		}
		function Ze() {
			var e = new Je();
			return e != null && (e.a = 0, e.sc = "OK", e.cb = 0, e.Xb = 0, ri ||= tt), e;
		}
		function Qe(e, t, n) {
			return e.a == 0 && (e.a = t, e.sc = n, e.cb = 0), 0;
		}
		function $e(e, t, n) {
			return 3 <= n && e[t + 0] == 157 && e[t + 1] == 1 && e[t + 2] == 42;
		}
		function et(e, n) {
			if (e == null) return 0;
			if (e.a = 0, e.sc = "OK", n == null) return Qe(e, 2, "null VP8Io passed to VP8GetHeaders()");
			var r = n.data, a = n.w, o = n.ha;
			if (4 > o) return Qe(e, 7, "Truncated header.");
			var s = r[a + 0] | r[a + 1] << 8 | r[a + 2] << 16, c = e.Od;
			if (c.Rb = !(1 & s), c.td = s >> 1 & 7, c.yd = s >> 4 & 1, c.ub = s >> 5, 3 < c.td) return Qe(e, 3, "Incorrect keyframe parameters.");
			if (!c.yd) return Qe(e, 4, "Frame not displayable.");
			a += 3, o -= 3;
			var l = e.Kc;
			if (c.Rb) {
				if (7 > o) return Qe(e, 7, "cannot parse picture header");
				if (!$e(r, a, o)) return Qe(e, 3, "Bad code word");
				l.c = 16383 & (r[a + 4] << 8 | r[a + 3]), l.Td = r[a + 4] >> 6, l.i = 16383 & (r[a + 6] << 8 | r[a + 5]), l.Ud = r[a + 6] >> 6, a += 7, o -= 7, e.za = l.c + 15 >> 4, e.Ub = l.i + 15 >> 4, n.width = l.c, n.height = l.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, i((s = e.Pa).jb, 0, 255, s.jb.length), t((s = e.Qa) != null), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb);
			}
			if (c.ub > o) return Qe(e, 7, "bad partition length");
			m(s = e.m, r, a, c.ub), a += c.ub, o -= c.ub, c.Rb && (l.Ld = D(s), l.Kd = D(s)), l = e.Qa;
			var u, d = e.Pa;
			if (t(s != null), t(l != null), l.Cb = D(s), l.Cb) {
				if (l.Bb = D(s), D(s)) {
					for (l.Fb = D(s), u = 0; 4 > u; ++u) l.Zb[u] = D(s) ? g(s, 7) : 0;
					for (u = 0; 4 > u; ++u) l.Lb[u] = D(s) ? g(s, 6) : 0;
				}
				if (l.Bb) for (u = 0; 3 > u; ++u) d.jb[u] = D(s) ? h(s, 8) : 255;
			} else l.Bb = 0;
			if (s.Ka) return Qe(e, 3, "cannot parse segment header");
			if ((l = e.ed).zd = D(s), l.Tb = h(s, 6), l.wb = h(s, 3), l.Pc = D(s), l.Pc && D(s)) {
				for (d = 0; 4 > d; ++d) D(s) && (l.vd[d] = g(s, 6));
				for (d = 0; 4 > d; ++d) D(s) && (l.od[d] = g(s, 6));
			}
			if (e.L = l.Tb == 0 ? 0 : l.zd ? 1 : 2, s.Ka) return Qe(e, 3, "cannot parse filter header");
			var f = o;
			if (o = u = a, a = u + f, l = f, e.Xb = (1 << h(e.m, 2)) - 1, f < 3 * (d = e.Xb)) r = 7;
			else {
				for (u += 3 * d, l -= 3 * d, f = 0; f < d; ++f) {
					var p = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16;
					p > l && (p = l), m(e.Jc[+f], r, u, p), u += p, l -= p, o += 3;
				}
				m(e.Jc[+d], r, u, l), r = u < a ? 0 : 5;
			}
			if (r != 0) return Qe(e, r, "cannot parse partitions");
			for (r = h(u = e.m, 7), o = D(u) ? g(u, 4) : 0, a = D(u) ? g(u, 4) : 0, l = D(u) ? g(u, 4) : 0, d = D(u) ? g(u, 4) : 0, u = D(u) ? g(u, 4) : 0, f = e.Qa, p = 0; 4 > p; ++p) {
				if (f.Cb) {
					var _ = f.Zb[p];
					f.Fb || (_ += r);
				} else {
					if (0 < p) {
						e.pb[p] = e.pb[0];
						continue;
					}
					_ = r;
				}
				var v = e.pb[p];
				v.Sc[0] = ti[Ye(_ + o, 127)], v.Sc[1] = ni[Ye(_ + 0, 127)], v.Eb[0] = 2 * ti[Ye(_ + a, 127)], v.Eb[1] = 101581 * ni[Ye(_ + l, 127)] >> 16, 8 > v.Eb[1] && (v.Eb[1] = 8), v.Qc[0] = ti[Ye(_ + d, 117)], v.Qc[1] = ni[Ye(_ + u, 127)], v.lc = _ + u;
			}
			if (!c.Rb) return Qe(e, 4, "Not a key frame.");
			for (D(s), c = e.Pa, r = 0; 4 > r; ++r) {
				for (o = 0; 8 > o; ++o) for (a = 0; 3 > a; ++a) for (l = 0; 11 > l; ++l) d = O(s, li[r][o][a][l]) ? h(s, 8) : si[r][o][a][l], c.Wc[r][o].Yb[a][l] = d;
				for (o = 0; 17 > o; ++o) c.Xc[r][o] = c.Wc[r][ui[o]];
			}
			return e.kc = D(s), e.kc && (e.Bd = h(s, 8)), e.cb = 1;
		}
		function tt(e, t, n, r, i, a, o) {
			var s = t[i].Yb[n];
			for (n = 0; 16 > i; ++i) {
				if (!O(e, s[n + 0])) return i;
				for (; !O(e, s[n + 1]);) if (s = t[++i].Yb[0], n = 0, i == 16) return 16;
				var c = t[i + 1].Yb;
				if (O(e, s[n + 2])) {
					var l = e, u = 0;
					if (O(l, (f = s)[(d = n) + 3])) if (O(l, f[d + 6])) {
						for (s = 0, d = 2 * (u = O(l, f[d + 8])) + (f = O(l, f[d + 9 + u])), u = 0, f = ii[d]; f[s]; ++s) u += u + O(l, f[s]);
						u += 3 + (8 << d);
					} else O(l, f[d + 7]) ? (u = 7 + 2 * O(l, 165), u += O(l, 145)) : u = 5 + O(l, 159);
					else u = O(l, f[d + 4]) ? 3 + O(l, f[d + 5]) : 2;
					s = c[2];
				} else u = 1, s = c[1];
				c = o + ai[i], 0 > (l = e).b && E(l);
				var d, f = l.b, p = (d = l.Ca >> 1) - (l.I >> f) >> 31;
				--l.b, l.Ca += p, l.Ca |= 1, l.I -= (d + 1 & p) << f, a[c] = ((u ^ p) - p) * r[(0 < i) + 0];
			}
			return 16;
		}
		function nt(e) {
			var t = e.rb[e.sb - 1];
			t.la = 0, t.Na = 0, i(e.zc, 0, 0, e.zc.length), e.ja = 0;
		}
		function rt(e, n) {
			if (e == null) return 0;
			if (n == null) return Qe(e, 2, "NULL VP8Io parameter in VP8Decode().");
			if (!e.cb && !et(e, n)) return 0;
			if (t(e.cb), n.ac == null || n.ac(n)) {
				n.ob && (e.L = 0);
				var s = zi[e.L];
				if (e.L == 2 ? (e.yb = 0, e.zb = 0) : (e.yb = n.v - s >> 4, e.zb = n.j - s >> 4, 0 > e.yb && (e.yb = 0), 0 > e.zb && (e.zb = 0)), e.Va = n.o + 15 + s >> 4, e.Hb = n.va + 15 + s >> 4, e.Hb > e.za && (e.Hb = e.za), e.Va > e.Ub && (e.Va = e.Ub), 0 < e.L) {
					var c = e.ed;
					for (s = 0; 4 > s; ++s) {
						var l;
						if (e.Qa.Cb) {
							var u = e.Qa.Lb[s];
							e.Qa.Fb || (u += c.Tb);
						} else u = c.Tb;
						for (l = 0; 1 >= l; ++l) {
							var d = e.gd[s][l], f = u;
							if (c.Pc && (f += c.vd[0], l && (f += c.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
								var p = f;
								0 < c.wb && (p = 4 < c.wb ? p >> 2 : p >> 1) > 9 - c.wb && (p = 9 - c.wb), 1 > p && (p = 1), d.dd = p, d.tc = 2 * f + p, d.ld = 40 <= f ? 2 : +(15 <= f);
							} else d.tc = 0;
							d.La = l;
						}
					}
				}
				s = 0;
			} else Qe(e, 6, "Frame setup failed"), s = e.a;
			if (s = s == 0) {
				if (s) {
					e.$c = 0, 0 < e.Aa || (e.Ic = Vi);
					t: {
						s = e.Ic, c = 4 * (p = e.za);
						var m = 32 * p, h = p + 1, g = 0 < e.L ? p * (0 < e.Aa ? 2 : 1) : 0, _ = (e.Aa == 2 ? 2 : 1) * p;
						if ((d = c + 832 + (l = 3 * (16 * s + zi[e.L]) / 2 * m) + (u = e.Fa != null && 0 < e.Fa.length ? e.Kc.c * e.Kc.i : 0)) != d) s = 0;
						else {
							if (d > e.Vb) {
								if (e.Vb = 0, e.Ec = a(d), e.Fc = 0, e.Ec == null) {
									s = Qe(e, 1, "no memory during frame initialization.");
									break t;
								}
								e.Vb = d;
							}
							d = e.Ec, f = e.Fc, e.Ac = d, e.Bc = f, f += c, e.Gd = o(m, qe), e.Hd = 0, e.rb = o(h + 1, Ue), e.sb = 1, e.wa = g ? o(g, He) : null, e.Y = 0, e.D.Nb = 0, e.D.wa = e.wa, e.D.Y = e.Y, 0 < e.Aa && (e.D.Y += p), t(!0), e.oc = d, e.pc = f, f += 832, e.ya = o(_, Ge), e.aa = 0, e.D.ya = e.ya, e.D.aa = e.aa, e.Aa == 2 && (e.D.aa += p), e.R = 16 * p, e.B = 8 * p, p = (m = zi[e.L]) * e.R, m = m / 2 * e.B, e.sa = d, e.ta = f + p, e.qa = e.sa, e.ra = e.ta + 16 * s * e.R + m, e.Ha = e.qa, e.Ia = e.ra + 8 * s * e.B + m, e.$c = 0, f += l, e.mb = u ? d : null, e.nb = u ? f : null, t(f + u <= e.Fc + e.Vb), nt(e), i(e.Ac, e.Bc, 0, c), s = 1;
						}
					}
					if (s) {
						if (n.ka = 0, n.y = e.sa, n.O = e.ta, n.f = e.qa, n.N = e.ra, n.ea = e.Ha, n.Vd = e.Ia, n.fa = e.R, n.Rc = e.B, n.F = null, n.J = 0, !jr) {
							for (s = -255; 255 >= s; ++s) Dr[255 + s] = 0 > s ? -s : s;
							for (s = -1020; 1020 >= s; ++s) Or[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
							for (s = -112; 112 >= s; ++s) kr[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
							for (s = -255; 510 >= s; ++s) Ar[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
							jr = 1;
						}
						ar = ft, or = lt, cr = ut, lr = X, ur = dt, sr = ct, dr = Yt, fr = Xt, pr = $t, mr = en, hr = Zt, gr = Qt, _r = tn, vr = nn, yr = Ut, br = Wt, xr = Gt, Sr = Kt, fi[0] = Et, fi[1] = mt, fi[2] = wt, fi[3] = Tt, fi[4] = Dt, fi[5] = kt, fi[6] = Ot, fi[7] = At, fi[8] = Mt, fi[9] = jt, di[0] = bt, di[1] = gt, di[2] = _t, di[3] = vt, di[4] = xt, di[5] = St, di[6] = Ct, pi[0] = Ft, pi[1] = ht, pi[2] = Nt, pi[3] = Pt, pi[4] = Lt, pi[5] = It, pi[6] = Rt, s = 1;
					} else s = 0;
				}
				s &&= function(e, n) {
					for (e.M = 0; e.M < e.Va; ++e.M) {
						var o, s = e.Jc[e.M & e.Xb], c = e.m, l = e;
						for (o = 0; o < l.za; ++o) {
							var u = c, d = l, f = d.Ac, p = d.Bc + 4 * o, m = d.zc, h = d.ya[d.aa + o];
							if (d.Qa.Bb ? h.$b = O(u, d.Pa.jb[0]) ? 2 + O(u, d.Pa.jb[2]) : O(u, d.Pa.jb[1]) : h.$b = 0, d.kc && (h.Ad = O(u, d.Bd)), h.Za = !O(u, 145) + 0, h.Za) {
								var g = h.Ob, _ = 0;
								for (d = 0; 4 > d; ++d) {
									var v, y = m[0 + d];
									for (v = 0; 4 > v; ++v) {
										y = ci[f[p + v]][y];
										for (var b = oi[O(u, y[0])]; 0 < b;) b = oi[2 * b + O(u, y[b])];
										y = -b, f[p + v] = y;
									}
									r(g, _, f, p, 4), _ += 4, m[0 + d] = y;
								}
							} else y = O(u, 156) ? O(u, 128) ? 1 : 3 : O(u, 163) ? 2 : 0, h.Ob[0] = y, i(f, p, y, 4), i(m, 0, y, 4);
							h.Dd = O(u, 142) ? O(u, 114) ? O(u, 183) ? 1 : 3 : 2 : 0;
						}
						if (l.m.Ka) return Qe(e, 7, "Premature end-of-partition0 encountered.");
						for (; e.ja < e.za; ++e.ja) {
							if (l = s, u = (c = e).rb[c.sb - 1], f = c.rb[c.sb + c.ja], o = c.ya[c.aa + c.ja], p = c.kc ? o.Ad : 0) u.la = f.la = 0, o.Za || (u.Na = f.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
							else {
								var x, S;
								if (u = f, f = l, p = c.Pa.Xc, m = c.ya[c.aa + c.ja], h = c.pb[m.$b], d = m.ad, g = 0, _ = c.rb[c.sb - 1], y = v = 0, i(d, g, 0, 384), m.Za) var C = 0, w = p[3];
								else {
									b = a(16);
									var T = u.Na + _.Na;
									if (T = ri(f, p[1], T, h.Eb, 0, b, 0), u.Na = _.Na = (0 < T) + 0, 1 < T) ar(b, 0, d, g);
									else {
										var E = b[0] + 3 >> 3;
										for (b = 0; 256 > b; b += 16) d[g + b] = E;
									}
									C = 1, w = p[0];
								}
								var D = 15 & u.la, k = 15 & _.la;
								for (b = 0; 4 > b; ++b) {
									var A = 1 & k;
									for (E = S = 0; 4 > E; ++E) D = D >> 1 | (A = (T = ri(f, w, T = A + (1 & D), h.Sc, C, d, g)) > C) << 7, S = S << 2 | (3 < T ? 3 : 1 < T ? 2 : d[g + 0] != 0), g += 16;
									D >>= 4, k = k >> 1 | A << 7, v = (v << 8 | S) >>> 0;
								}
								for (w = D, C = k >> 4, x = 0; 4 > x; x += 2) {
									for (S = 0, D = u.la >> 4 + x, k = _.la >> 4 + x, b = 0; 2 > b; ++b) {
										for (A = 1 & k, E = 0; 2 > E; ++E) T = A + (1 & D), D = D >> 1 | (A = 0 < (T = ri(f, p[2], T, h.Qc, 0, d, g))) << 3, S = S << 2 | (3 < T ? 3 : 1 < T ? 2 : d[g + 0] != 0), g += 16;
										D >>= 2, k = k >> 1 | A << 5;
									}
									y |= S << 4 * x, w |= D << 4 << x, C |= (240 & k) << x;
								}
								u.la = w, _.la = C, m.Hc = v, m.Gc = y, m.ia = 43690 & y ? 0 : h.ia, p = !(v | y);
							}
							if (0 < c.L && (c.wa[c.Y + c.ja] = c.gd[o.$b][o.Za], c.wa[c.Y + c.ja].La |= !p), l.Ka) return Qe(e, 7, "Premature end-of-file encountered.");
						}
						if (nt(e), c = n, l = 1, o = (s = e).D, u = 0 < s.L && s.M >= s.zb && s.M <= s.Va, s.Aa == 0) t: {
							if (o.M = s.M, o.uc = u, Pn(s, o), l = 1, o = (S = s.D).Nb, u = (y = zi[s.L]) * s.R, f = y / 2 * s.B, b = 16 * o * s.R, E = 8 * o * s.B, p = s.sa, m = s.ta - u + b, h = s.qa, d = s.ra - f + E, g = s.Ha, _ = s.Ia - f + E, k = (D = S.M) == 0, v = D >= s.Va - 1, s.Aa == 2 && Pn(s, S), S.uc) for (A = (T = s).D.M, t(T.D.uc), S = T.yb; S < T.Hb; ++S) {
								C = S, w = A;
								var j = (M = (B = T).D).Nb;
								x = B.R;
								var M = M.wa[M.Y + C], N = B.sa, P = B.ta + 16 * j * x + 16 * C, F = M.dd, I = M.tc;
								if (I != 0) if (t(3 <= I), B.L == 1) 0 < C && br(N, P, x, I + 4), M.La && Sr(N, P, x, I), 0 < w && yr(N, P, x, I + 4), M.La && xr(N, P, x, I);
								else {
									var L = B.B, ee = B.qa, R = B.ra + 8 * j * L + 8 * C, z = B.Ha, B = B.Ia + 8 * j * L + 8 * C;
									j = M.ld, 0 < C && (fr(N, P, x, I + 4, F, j), mr(ee, R, z, B, L, I + 4, F, j)), M.La && (gr(N, P, x, I, F, j), vr(ee, R, z, B, L, I, F, j)), 0 < w && (dr(N, P, x, I + 4, F, j), pr(ee, R, z, B, L, I + 4, F, j)), M.La && (hr(N, P, x, I, F, j), _r(ee, R, z, B, L, I, F, j));
								}
							}
							if (s.ia && alert("todo:DitherRow"), c.put != null) {
								if (S = 16 * D, D = 16 * (D + 1), k ? (c.y = s.sa, c.O = s.ta + b, c.f = s.qa, c.N = s.ra + E, c.ea = s.Ha, c.W = s.Ia + E) : (S -= y, c.y = p, c.O = m, c.f = h, c.N = d, c.ea = g, c.W = _), v || (D -= y), D > c.o && (D = c.o), c.F = null, c.J = null, s.Fa != null && 0 < s.Fa.length && S < D && (c.J = pn(s, c, S, D - S), c.F = s.mb, c.F == null && c.F.length == 0)) {
									l = Qe(s, 3, "Could not decode alpha data.");
									break t;
								}
								S < c.j && (y = c.j - S, S = c.j, t(!(1 & y)), c.O += s.R * y, c.N += s.B * (y >> 1), c.W += s.B * (y >> 1), c.F != null && (c.J += c.width * y)), S < D && (c.O += c.v, c.N += c.v >> 1, c.W += c.v >> 1, c.F != null && (c.J += c.v), c.ka = S - c.j, c.U = c.va - c.v, c.T = D - S, l = c.put(c));
							}
							o + 1 != s.Ic || v || (r(s.sa, s.ta - u, p, m + 16 * s.R, u), r(s.qa, s.ra - f, h, d + 8 * s.B, f), r(s.Ha, s.Ia - f, g, _ + 8 * s.B, f));
						}
						if (!l) return Qe(e, 6, "Output aborted.");
					}
					return 1;
				}(e, n), n.bc != null && n.bc(n), s &= 1;
			}
			return s ? (e.cb = 0, s) : 0;
		}
		function it(e, t, n, r, i) {
			i = e[t + n + 32 * r] + (i >> 3), e[t + n + 32 * r] = -256 & i ? 0 > i ? 0 : 255 : i;
		}
		function at(e, t, n, r, i, a) {
			it(e, t, 0, n, r + i), it(e, t, 1, n, r + a), it(e, t, 2, n, r - a), it(e, t, 3, n, r - i);
		}
		function ot(e) {
			return (20091 * e >> 16) + e;
		}
		function st(e, t, n, r) {
			var i, o = 0, s = a(16);
			for (i = 0; 4 > i; ++i) {
				var c = e[t + 0] + e[t + 8], l = e[t + 0] - e[t + 8], u = (35468 * e[t + 4] >> 16) - ot(e[t + 12]), d = ot(e[t + 4]) + (35468 * e[t + 12] >> 16);
				s[o + 0] = c + d, s[o + 1] = l + u, s[o + 2] = l - u, s[o + 3] = c - d, o += 4, t++;
			}
			for (i = o = 0; 4 > i; ++i) c = (e = s[o + 0] + 4) + s[o + 8], l = e - s[o + 8], u = (35468 * s[o + 4] >> 16) - ot(s[o + 12]), it(n, r, 0, 0, c + (d = ot(s[o + 4]) + (35468 * s[o + 12] >> 16))), it(n, r, 1, 0, l + u), it(n, r, 2, 0, l - u), it(n, r, 3, 0, c - d), o++, r += 32;
		}
		function ct(e, t, n, r) {
			var i = e[t + 0] + 4, a = 35468 * e[t + 4] >> 16, o = ot(e[t + 4]), s = 35468 * e[t + 1] >> 16;
			at(n, r, 0, i + o, e = ot(e[t + 1]), s), at(n, r, 1, i + a, e, s), at(n, r, 2, i - a, e, s), at(n, r, 3, i - o, e, s);
		}
		function lt(e, t, n, r, i) {
			st(e, t, n, r), i && st(e, t + 16, n, r + 4);
		}
		function ut(e, t, n, r) {
			or(e, t + 0, n, r, 1), or(e, t + 32, n, r + 128, 1);
		}
		function X(e, t, n, r) {
			var i;
			for (e = e[t + 0] + 4, i = 0; 4 > i; ++i) for (t = 0; 4 > t; ++t) it(n, r, t, i, e);
		}
		function dt(e, t, n, r) {
			e[t + 0] && lr(e, t + 0, n, r), e[t + 16] && lr(e, t + 16, n, r + 4), e[t + 32] && lr(e, t + 32, n, r + 128), e[t + 48] && lr(e, t + 48, n, r + 128 + 4);
		}
		function ft(e, t, n, r) {
			var i, o = a(16);
			for (i = 0; 4 > i; ++i) {
				var s = e[t + 0 + i] + e[t + 12 + i], c = e[t + 4 + i] + e[t + 8 + i], l = e[t + 4 + i] - e[t + 8 + i], u = e[t + 0 + i] - e[t + 12 + i];
				o[0 + i] = s + c, o[8 + i] = s - c, o[4 + i] = u + l, o[12 + i] = u - l;
			}
			for (i = 0; 4 > i; ++i) s = (e = o[0 + 4 * i] + 3) + o[3 + 4 * i], c = o[1 + 4 * i] + o[2 + 4 * i], l = o[1 + 4 * i] - o[2 + 4 * i], u = e - o[3 + 4 * i], n[r + 0] = s + c >> 3, n[r + 16] = u + l >> 3, n[r + 32] = s - c >> 3, n[r + 48] = u - l >> 3, r += 64;
		}
		function pt(e, t, n) {
			var r, i = t - 32, a = Pr, o = 255 - e[i - 1];
			for (r = 0; r < n; ++r) {
				var s, c = a, l = o + e[t - 1];
				for (s = 0; s < n; ++s) e[t + s] = c[l + e[i + s]];
				t += 32;
			}
		}
		function mt(e, t) {
			pt(e, t, 4);
		}
		function ht(e, t) {
			pt(e, t, 8);
		}
		function gt(e, t) {
			pt(e, t, 16);
		}
		function _t(e, t) {
			var n;
			for (n = 0; 16 > n; ++n) r(e, t + 32 * n, e, t - 32, 16);
		}
		function vt(e, t) {
			var n;
			for (n = 16; 0 < n; --n) i(e, t, e[t - 1], 16), t += 32;
		}
		function yt(e, t, n) {
			var r;
			for (r = 0; 16 > r; ++r) i(t, n + 32 * r, e, 16);
		}
		function bt(e, t) {
			var n, r = 16;
			for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n] + e[t + n - 32];
			yt(r >> 5, e, t);
		}
		function xt(e, t) {
			var n, r = 8;
			for (n = 0; 16 > n; ++n) r += e[t - 1 + 32 * n];
			yt(r >> 4, e, t);
		}
		function St(e, t) {
			var n, r = 8;
			for (n = 0; 16 > n; ++n) r += e[t + n - 32];
			yt(r >> 4, e, t);
		}
		function Ct(e, t) {
			yt(128, e, t);
		}
		function Z(e, t, n) {
			return e + 2 * t + n + 2 >> 2;
		}
		function wt(e, t) {
			var n, i = t - 32;
			for (i = new Uint8Array([
				Z(e[i - 1], e[i + 0], e[i + 1]),
				Z(e[i + 0], e[i + 1], e[i + 2]),
				Z(e[i + 1], e[i + 2], e[i + 3]),
				Z(e[i + 2], e[i + 3], e[i + 4])
			]), n = 0; 4 > n; ++n) r(e, t + 32 * n, i, 0, i.length);
		}
		function Tt(e, t) {
			var n = e[t - 1], r = e[t - 1 + 32], i = e[t - 1 + 64], a = e[t - 1 + 96];
			k(e, t + 0, 16843009 * Z(e[t - 1 - 32], n, r)), k(e, t + 32, 16843009 * Z(n, r, i)), k(e, t + 64, 16843009 * Z(r, i, a)), k(e, t + 96, 16843009 * Z(i, a, a));
		}
		function Et(e, t) {
			var n, r = 4;
			for (n = 0; 4 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
			for (r >>= 3, n = 0; 4 > n; ++n) i(e, t + 32 * n, r, 4);
		}
		function Dt(e, t) {
			var n = e[t - 1 + 0], r = e[t - 1 + 32], i = e[t - 1 + 64], a = e[t - 1 - 32], o = e[t + 0 - 32], s = e[t + 1 - 32], c = e[t + 2 - 32], l = e[t + 3 - 32];
			e[t + 0 + 96] = Z(r, i, e[t - 1 + 96]), e[t + 1 + 96] = e[t + 0 + 64] = Z(n, r, i), e[t + 2 + 96] = e[t + 1 + 64] = e[t + 0 + 32] = Z(a, n, r), e[t + 3 + 96] = e[t + 2 + 64] = e[t + 1 + 32] = e[t + 0 + 0] = Z(o, a, n), e[t + 3 + 64] = e[t + 2 + 32] = e[t + 1 + 0] = Z(s, o, a), e[t + 3 + 32] = e[t + 2 + 0] = Z(c, s, o), e[t + 3 + 0] = Z(l, c, s);
		}
		function Ot(e, t) {
			var n = e[t + 1 - 32], r = e[t + 2 - 32], i = e[t + 3 - 32], a = e[t + 4 - 32], o = e[t + 5 - 32], s = e[t + 6 - 32], c = e[t + 7 - 32];
			e[t + 0 + 0] = Z(e[t + 0 - 32], n, r), e[t + 1 + 0] = e[t + 0 + 32] = Z(n, r, i), e[t + 2 + 0] = e[t + 1 + 32] = e[t + 0 + 64] = Z(r, i, a), e[t + 3 + 0] = e[t + 2 + 32] = e[t + 1 + 64] = e[t + 0 + 96] = Z(i, a, o), e[t + 3 + 32] = e[t + 2 + 64] = e[t + 1 + 96] = Z(a, o, s), e[t + 3 + 64] = e[t + 2 + 96] = Z(o, s, c), e[t + 3 + 96] = Z(s, c, c);
		}
		function kt(e, t) {
			var n = e[t - 1 + 0], r = e[t - 1 + 32], i = e[t - 1 + 64], a = e[t - 1 - 32], o = e[t + 0 - 32], s = e[t + 1 - 32], c = e[t + 2 - 32], l = e[t + 3 - 32];
			e[t + 0 + 0] = e[t + 1 + 64] = a + o + 1 >> 1, e[t + 1 + 0] = e[t + 2 + 64] = o + s + 1 >> 1, e[t + 2 + 0] = e[t + 3 + 64] = s + c + 1 >> 1, e[t + 3 + 0] = c + l + 1 >> 1, e[t + 0 + 96] = Z(i, r, n), e[t + 0 + 64] = Z(r, n, a), e[t + 0 + 32] = e[t + 1 + 96] = Z(n, a, o), e[t + 1 + 32] = e[t + 2 + 96] = Z(a, o, s), e[t + 2 + 32] = e[t + 3 + 96] = Z(o, s, c), e[t + 3 + 32] = Z(s, c, l);
		}
		function At(e, t) {
			var n = e[t + 0 - 32], r = e[t + 1 - 32], i = e[t + 2 - 32], a = e[t + 3 - 32], o = e[t + 4 - 32], s = e[t + 5 - 32], c = e[t + 6 - 32], l = e[t + 7 - 32];
			e[t + 0 + 0] = n + r + 1 >> 1, e[t + 1 + 0] = e[t + 0 + 64] = r + i + 1 >> 1, e[t + 2 + 0] = e[t + 1 + 64] = i + a + 1 >> 1, e[t + 3 + 0] = e[t + 2 + 64] = a + o + 1 >> 1, e[t + 0 + 32] = Z(n, r, i), e[t + 1 + 32] = e[t + 0 + 96] = Z(r, i, a), e[t + 2 + 32] = e[t + 1 + 96] = Z(i, a, o), e[t + 3 + 32] = e[t + 2 + 96] = Z(a, o, s), e[t + 3 + 64] = Z(o, s, c), e[t + 3 + 96] = Z(s, c, l);
		}
		function jt(e, t) {
			var n = e[t - 1 + 0], r = e[t - 1 + 32], i = e[t - 1 + 64], a = e[t - 1 + 96];
			e[t + 0 + 0] = n + r + 1 >> 1, e[t + 2 + 0] = e[t + 0 + 32] = r + i + 1 >> 1, e[t + 2 + 32] = e[t + 0 + 64] = i + a + 1 >> 1, e[t + 1 + 0] = Z(n, r, i), e[t + 3 + 0] = e[t + 1 + 32] = Z(r, i, a), e[t + 3 + 32] = e[t + 1 + 64] = Z(i, a, a), e[t + 3 + 64] = e[t + 2 + 64] = e[t + 0 + 96] = e[t + 1 + 96] = e[t + 2 + 96] = e[t + 3 + 96] = a;
		}
		function Mt(e, t) {
			var n = e[t - 1 + 0], r = e[t - 1 + 32], i = e[t - 1 + 64], a = e[t - 1 + 96], o = e[t - 1 - 32], s = e[t + 0 - 32], c = e[t + 1 - 32], l = e[t + 2 - 32];
			e[t + 0 + 0] = e[t + 2 + 32] = n + o + 1 >> 1, e[t + 0 + 32] = e[t + 2 + 64] = r + n + 1 >> 1, e[t + 0 + 64] = e[t + 2 + 96] = i + r + 1 >> 1, e[t + 0 + 96] = a + i + 1 >> 1, e[t + 3 + 0] = Z(s, c, l), e[t + 2 + 0] = Z(o, s, c), e[t + 1 + 0] = e[t + 3 + 32] = Z(n, o, s), e[t + 1 + 32] = e[t + 3 + 64] = Z(r, n, o), e[t + 1 + 64] = e[t + 3 + 96] = Z(i, r, n), e[t + 1 + 96] = Z(a, i, r);
		}
		function Nt(e, t) {
			var n;
			for (n = 0; 8 > n; ++n) r(e, t + 32 * n, e, t - 32, 8);
		}
		function Pt(e, t) {
			var n;
			for (n = 0; 8 > n; ++n) i(e, t, e[t - 1], 8), t += 32;
		}
		function Q(e, t, n) {
			var r;
			for (r = 0; 8 > r; ++r) i(t, n + 32 * r, e, 8);
		}
		function Ft(e, t) {
			var n, r = 8;
			for (n = 0; 8 > n; ++n) r += e[t + n - 32] + e[t - 1 + 32 * n];
			Q(r >> 4, e, t);
		}
		function It(e, t) {
			var n, r = 4;
			for (n = 0; 8 > n; ++n) r += e[t + n - 32];
			Q(r >> 3, e, t);
		}
		function Lt(e, t) {
			var n, r = 4;
			for (n = 0; 8 > n; ++n) r += e[t - 1 + 32 * n];
			Q(r >> 3, e, t);
		}
		function Rt(e, t) {
			Q(128, e, t);
		}
		function zt(e, t, n) {
			var r = e[t - n], i = e[t + 0], a = 3 * (i - r) + Mr[1020 + e[t - 2 * n] - e[t + n]], o = Nr[112 + (a + 4 >> 3)];
			e[t - n] = Pr[255 + r + Nr[112 + (a + 3 >> 3)]], e[t + 0] = Pr[255 + i - o];
		}
		function Bt(e, t, n, r) {
			var i = e[t + 0], a = e[t + n];
			return Fr[255 + e[t - 2 * n] - e[t - n]] > r || Fr[255 + a - i] > r;
		}
		function Vt(e, t, n, r) {
			return 4 * Fr[255 + e[t - n] - e[t + 0]] + Fr[255 + e[t - 2 * n] - e[t + n]] <= r;
		}
		function Ht(e, t, n, r, i) {
			var a = e[t - 3 * n], o = e[t - 2 * n], s = e[t - n], c = e[t + 0], l = e[t + n], u = e[t + 2 * n], d = e[t + 3 * n];
			return 4 * Fr[255 + s - c] + Fr[255 + o - l] > r ? 0 : Fr[255 + e[t - 4 * n] - a] <= i && Fr[255 + a - o] <= i && Fr[255 + o - s] <= i && Fr[255 + d - u] <= i && Fr[255 + u - l] <= i && Fr[255 + l - c] <= i;
		}
		function Ut(e, t, n, r) {
			var i = 2 * r + 1;
			for (r = 0; 16 > r; ++r) Vt(e, t + r, n, i) && zt(e, t + r, n);
		}
		function Wt(e, t, n, r) {
			var i = 2 * r + 1;
			for (r = 0; 16 > r; ++r) Vt(e, t + r * n, 1, i) && zt(e, t + r * n, 1);
		}
		function Gt(e, t, n, r) {
			var i;
			for (i = 3; 0 < i; --i) Ut(e, t += 4 * n, n, r);
		}
		function Kt(e, t, n, r) {
			var i;
			for (i = 3; 0 < i; --i) Wt(e, t += 4, n, r);
		}
		function qt(e, t, n, r, i, a, o, s) {
			for (a = 2 * a + 1; 0 < i--;) {
				if (Ht(e, t, n, a, o)) if (Bt(e, t, n, s)) zt(e, t, n);
				else {
					var c = e, l = t, u = n, d = c[l - 2 * u], f = c[l - u], p = c[l + 0], m = c[l + u], h = c[l + 2 * u], g = 27 * (v = Mr[1020 + 3 * (p - f) + Mr[1020 + d - m]]) + 63 >> 7, _ = 18 * v + 63 >> 7, v = 9 * v + 63 >> 7;
					c[l - 3 * u] = Pr[255 + c[l - 3 * u] + v], c[l - 2 * u] = Pr[255 + d + _], c[l - u] = Pr[255 + f + g], c[l + 0] = Pr[255 + p - g], c[l + u] = Pr[255 + m - _], c[l + 2 * u] = Pr[255 + h - v];
				}
				t += r;
			}
		}
		function Jt(e, t, n, r, i, a, o, s) {
			for (a = 2 * a + 1; 0 < i--;) {
				if (Ht(e, t, n, a, o)) if (Bt(e, t, n, s)) zt(e, t, n);
				else {
					var c = e, l = t, u = n, d = c[l - u], f = c[l + 0], p = c[l + u], m = Nr[112 + ((h = 3 * (f - d)) + 4 >> 3)], h = Nr[112 + (h + 3 >> 3)], g = m + 1 >> 1;
					c[l - 2 * u] = Pr[255 + c[l - 2 * u] + g], c[l - u] = Pr[255 + d + h], c[l + 0] = Pr[255 + f - m], c[l + u] = Pr[255 + p - g];
				}
				t += r;
			}
		}
		function Yt(e, t, n, r, i, a) {
			qt(e, t, n, 1, 16, r, i, a);
		}
		function Xt(e, t, n, r, i, a) {
			qt(e, t, 1, n, 16, r, i, a);
		}
		function Zt(e, t, n, r, i, a) {
			var o;
			for (o = 3; 0 < o; --o) Jt(e, t += 4 * n, n, 1, 16, r, i, a);
		}
		function Qt(e, t, n, r, i, a) {
			var o;
			for (o = 3; 0 < o; --o) Jt(e, t += 4, 1, n, 16, r, i, a);
		}
		function $t(e, t, n, r, i, a, o, s) {
			qt(e, t, i, 1, 8, a, o, s), qt(n, r, i, 1, 8, a, o, s);
		}
		function en(e, t, n, r, i, a, o, s) {
			qt(e, t, 1, i, 8, a, o, s), qt(n, r, 1, i, 8, a, o, s);
		}
		function tn(e, t, n, r, i, a, o, s) {
			Jt(e, t + 4 * i, i, 1, 8, a, o, s), Jt(n, r + 4 * i, i, 1, 8, a, o, s);
		}
		function nn(e, t, n, r, i, a, o, s) {
			Jt(e, t + 4, 1, i, 8, a, o, s), Jt(n, r + 4, 1, i, 8, a, o, s);
		}
		function rn() {
			this.ba = new pe(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new he(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
		}
		function an() {
			this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
		}
		function on() {
			this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
		}
		function sn() {
			this.ua = 0, this.Wa = new F(), this.vb = new F(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new p(), this.yc = new d();
		}
		function cn() {
			this.xb = this.a = 0, this.l = new Xe(), this.ca = new pe(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new x(), this.Pb = 0, this.wd = new x(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new sn(), this.ab = 0, this.gc = o(4, on), this.Oc = 0;
		}
		function ln() {
			this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Xe(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
		}
		function un(e, t, n, r, i, a, o) {
			for (e = e == null ? 0 : e[t + 0], t = 0; t < o; ++t) i[a + t] = e + n[r + t] & 255, e = i[a + t];
		}
		function dn(e, t, n, r, i, a, o) {
			var s;
			if (e == null) un(null, null, n, r, i, a, o);
			else for (s = 0; s < o; ++s) i[a + s] = e[t + s] + n[r + s] & 255;
		}
		function fn(e, t, n, r, i, a, o) {
			if (e == null) un(null, null, n, r, i, a, o);
			else {
				var s, c = e[t + 0], l = c, u = c;
				for (s = 0; s < o; ++s) l = u + (c = e[t + s]) - l, u = n[r + s] + (-256 & l ? 0 > l ? 0 : 255 : l) & 255, l = c, i[a + s] = u;
			}
		}
		function pn(e, n, i, o) {
			var s = n.width, c = n.o;
			if (t(e != null && n != null), 0 > i || 0 >= o || i + o > c) return null;
			if (!e.Cc) {
				if (e.ga == null) {
					var l;
					if (e.ga = new ln(), (l = e.ga == null) || (l = n.width * n.o, t(e.Gb.length == 0), e.Gb = a(l), e.Uc = 0, e.Gb == null ? l = 0 : (e.mb = e.Gb, e.nb = e.Uc, e.rc = null, l = 1), l = !l), !l) {
						l = e.ga;
						var u = e.Fa, d = e.P, f = e.qc, p = e.mb, m = e.nb, h = d + 1, g = f - 1, v = l.l;
						if (t(u != null && p != null && n != null), gi[0] = null, gi[1] = un, gi[2] = dn, gi[3] = fn, l.ca = p, l.tb = m, l.c = n.width, l.i = n.height, t(0 < l.c && 0 < l.i), 1 >= f) n = 0;
						else if (l.$a = u[d + 0] >> 0 & 3, l.Z = u[d + 0] >> 2 & 3, l.Lc = u[d + 0] >> 4 & 3, d = u[d + 0] >> 6 & 3, 0 > l.$a || 1 < l.$a || 4 <= l.Z || 1 < l.Lc || d) n = 0;
						else if (v.put = be, v.ac = ye, v.bc = q, v.ma = l, v.width = n.width, v.height = n.height, v.Da = n.Da, v.v = n.v, v.va = n.va, v.j = n.j, v.o = n.o, l.$a) t: {
							t(l.$a == 1), n = Ne();
							e: for (;;) {
								if (n == null) {
									n = 0;
									break t;
								}
								if (t(l != null), l.mc = n, n.c = l.c, n.i = l.i, n.l = l.l, n.l.ma = l, n.l.width = l.c, n.l.height = l.i, n.a = 0, _(n.m, u, h, g), !Pe(l.c, l.i, 1, n, null) || (n.ab == 1 && n.gc[0].hc == 3 && Oe(n.s) ? (l.ic = 1, u = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = a(u), n.Ba = 0, n.V == null ? (n.a = 1, n = 0) : n = 1) : (l.ic = 0, n = Fe(n, l.c)), !n)) break e;
								n = 1;
								break t;
							}
							l.mc = null, n = 0;
						}
						else n = g >= l.c * l.i;
						l = !n;
					}
					if (l) return null;
					e.ga.Lc == 1 ? o = c - i : e.Ga = 0;
				}
				t(e.ga != null), t(i + o <= c);
				t: {
					if (n = (u = e.ga).c, c = u.l.o, u.$a == 0) {
						if (h = e.rc, g = e.Vc, v = e.Fa, d = e.P + 1 + i * n, f = e.mb, p = e.nb + i * n, t(d <= e.P + e.qc), u.Z != 0) for (t(gi[u.Z] != null), l = 0; l < o; ++l) gi[u.Z](h, g, v, d, f, p, n), h = f, g = p, p += n, d += n;
						else for (l = 0; l < o; ++l) r(f, p, v, d, n), h = f, g = p, p += n, d += n;
						e.rc = h, e.Vc = g;
					} else {
						if (t(u.mc != null), n = i + o, t((l = u.mc) != null), t(n <= l.i), l.C >= n) n = 1;
						else if (u.ic || _n(), u.ic) {
							u = l.V, h = l.Ba, g = l.c;
							var y = l.i, b = (v = 1, d = l.$ / g, f = l.$ % g, p = l.m, m = l.s, l.$), x = g * y, S = g * n, w = m.wc, E = b < S ? Te(m, f, d) : null;
							t(b <= x), t(n <= y), t(Oe(m));
							e: for (;;) {
								for (; !p.h && b < S;) {
									if (f & w || (E = Te(m, f, d)), t(E != null), T(p), 256 > (y = J(E.G[0], E.H[0], p))) u[h + b] = y, ++b, ++f >= g && (f = 0, ++d <= n && !(d % 16) && Ae(l, d));
									else {
										if (!(280 > y)) {
											v = 0;
											break e;
										}
										y = Se(y - 256, p);
										var D, O = J(E.G[4], E.H[4], p);
										if (T(p), !(b >= (O = Ce(g, O = Se(O, p))) && x - b >= y)) {
											v = 0;
											break e;
										}
										for (D = 0; D < y; ++D) u[h + b + D] = u[h + b + D - O];
										for (b += y, f += y; f >= g;) f -= g, ++d <= n && !(d % 16) && Ae(l, d);
										b < S && f & w && (E = Te(m, f, d));
									}
									t(p.h == C(p));
								}
								Ae(l, d > n ? n : d);
								break e;
							}
							!v || p.h && b < x ? (v = 0, l.a = p.h ? 5 : 3) : l.$ = b, n = v;
						} else n = je(l, l.V, l.Ba, l.c, l.i, n, Ie);
						if (!n) {
							o = 0;
							break t;
						}
					}
					i + o >= c && (e.Cc = 1), o = 1;
				}
				if (!o) return null;
				if (e.Cc && ((o = e.ga) != null && (o.mc = null), e.ga = null, 0 < e.Ga)) return alert("todo:WebPDequantizeLevels"), null;
			}
			return e.nb + i * s;
		}
		function mn(e, t, n, r, i, a) {
			for (; 0 < i--;) {
				var o, s = e, c = t + +!!n, l = e, u = t + (n ? 0 : 3);
				for (o = 0; o < r; ++o) {
					var d = l[u + 4 * o];
					d != 255 && (d *= 32897, s[c + 4 * o + 0] = s[c + 4 * o + 0] * d >> 23, s[c + 4 * o + 1] = s[c + 4 * o + 1] * d >> 23, s[c + 4 * o + 2] = s[c + 4 * o + 2] * d >> 23);
				}
				t += a;
			}
		}
		function hn(e, t, n, r, i) {
			for (; 0 < r--;) {
				var a;
				for (a = 0; a < n; ++a) {
					var o = e[t + 2 * a + 0], s = 15 & (l = e[t + 2 * a + 1]), c = 4369 * s, l = (240 & l | l >> 4) * c >> 16;
					e[t + 2 * a + 0] = (240 & o | o >> 4) * c >> 16 & 240 | (15 & o | o << 4) * c >> 16 >> 4 & 15, e[t + 2 * a + 1] = 240 & l | s;
				}
				t += i;
			}
		}
		function gn(e, t, n, r, i, a, o, s) {
			var c, l, u = 255;
			for (l = 0; l < i; ++l) {
				for (c = 0; c < r; ++c) {
					var d = e[t + c];
					a[o + 4 * c] = d, u &= d;
				}
				t += n, o += s;
			}
			return u != 255;
		}
		function $(e, t, n, r, i) {
			var a;
			for (a = 0; a < i; ++a) n[r + a] = e[t + a] >> 8;
		}
		function _n() {
			Cr = mn, wr = hn, Tr = gn, Er = $;
		}
		function vn(n, r, i) {
			e[n] = function(e, n, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y) {
				var b, x = y - 1 >> 1, S = s[c + 0] | l[u + 0] << 16, C = d[f + 0] | p[m + 0] << 16;
				t(e != null);
				var w = 3 * S + C + 131074 >> 2;
				for (r(e[n + 0], 255 & w, w >> 16, h, g), a != null && (w = 3 * C + S + 131074 >> 2, r(a[o + 0], 255 & w, w >> 16, _, v)), b = 1; b <= x; ++b) {
					var T = s[c + b] | l[u + b] << 16, E = d[f + b] | p[m + b] << 16, D = S + T + C + E + 524296, O = D + 2 * (T + C) >> 3;
					w = O + S >> 1, S = (D = D + 2 * (S + E) >> 3) + T >> 1, r(e[n + 2 * b - 1], 255 & w, w >> 16, h, g + (2 * b - 1) * i), r(e[n + 2 * b - 0], 255 & S, S >> 16, h, g + (2 * b - 0) * i), a != null && (w = D + C >> 1, S = O + E >> 1, r(a[o + 2 * b - 1], 255 & w, w >> 16, _, v + (2 * b - 1) * i), r(a[o + 2 * b + 0], 255 & S, S >> 16, _, v + (2 * b + 0) * i)), S = T, C = E;
				}
				1 & y || (w = 3 * S + C + 131074 >> 2, r(e[n + y - 1], 255 & w, w >> 16, h, g + (y - 1) * i), a != null && (w = 3 * C + S + 131074 >> 2, r(a[o + y - 1], 255 & w, w >> 16, _, v + (y - 1) * i)));
			};
		}
		function yn() {
			_i[Ir] = vi, _i[Lr] = bi, _i[Rr] = yi, _i[zr] = xi, _i[Br] = Si, _i[Vr] = Ci, _i[Hr] = wi, _i[Ur] = bi, _i[Wr] = xi, _i[Gr] = Si, _i[Kr] = Ci;
		}
		function bn(e) {
			return e & ~Ai ? 0 > e ? 0 : 255 : e >> ki;
		}
		function xn(e, t) {
			return bn((19077 * e >> 8) + (26149 * t >> 8) - 14234);
		}
		function Sn(e, t, n) {
			return bn((19077 * e >> 8) - (6419 * t >> 8) - (13320 * n >> 8) + 8708);
		}
		function Cn(e, t) {
			return bn((19077 * e >> 8) + (33050 * t >> 8) - 17685);
		}
		function wn(e, t, n, r, i) {
			r[i + 0] = xn(e, n), r[i + 1] = Sn(e, t, n), r[i + 2] = Cn(e, t);
		}
		function Tn(e, t, n, r, i) {
			r[i + 0] = Cn(e, t), r[i + 1] = Sn(e, t, n), r[i + 2] = xn(e, n);
		}
		function En(e, t, n, r, i) {
			var a = Sn(e, t, n);
			t = a << 3 & 224 | Cn(e, t) >> 3, r[i + 0] = 248 & xn(e, n) | a >> 5, r[i + 1] = t;
		}
		function Dn(e, t, n, r, i) {
			var a = 240 & Cn(e, t) | 15;
			r[i + 0] = 240 & xn(e, n) | Sn(e, t, n) >> 4, r[i + 1] = a;
		}
		function On(e, t, n, r, i) {
			r[i + 0] = 255, wn(e, t, n, r, i + 1);
		}
		function kn(e, t, n, r, i) {
			Tn(e, t, n, r, i), r[i + 3] = 255;
		}
		function An(e, t, n, r, i) {
			wn(e, t, n, r, i), r[i + 3] = 255;
		}
		function Ye(e, t) {
			return 0 > e ? 0 : e > t ? t : e;
		}
		function jn(t, n, r) {
			e[t] = function(e, t, i, a, o, s, c, l, u) {
				for (var d = l + (-2 & u) * r; l != d;) n(e[t + 0], i[a + 0], o[s + 0], c, l), n(e[t + 1], i[a + 0], o[s + 0], c, l + r), t += 2, ++a, ++s, l += 2 * r;
				1 & u && n(e[t + 0], i[a + 0], o[s + 0], c, l);
			};
		}
		function Mn(e, t, n) {
			return n == 0 ? e == 0 ? t == 0 ? 6 : 5 : t == 0 ? 4 : 0 : n;
		}
		function Nn(e, t, n, r, i) {
			switch (e >>> 30) {
				case 3:
					or(t, n, r, i, 0);
					break;
				case 2:
					sr(t, n, r, i);
					break;
				case 1: lr(t, n, r, i);
			}
		}
		function Pn(e, t) {
			var n, a, o = t.M, s = t.Nb, c = e.oc, l = e.pc + 40, u = e.oc, d = e.pc + 584, f = e.oc, p = e.pc + 600;
			for (n = 0; 16 > n; ++n) c[l + 32 * n - 1] = 129;
			for (n = 0; 8 > n; ++n) u[d + 32 * n - 1] = 129, f[p + 32 * n - 1] = 129;
			for (0 < o ? c[l - 1 - 32] = u[d - 1 - 32] = f[p - 1 - 32] = 129 : (i(c, l - 32 - 1, 127, 21), i(u, d - 32 - 1, 127, 9), i(f, p - 32 - 1, 127, 9)), a = 0; a < e.za; ++a) {
				var m = t.ya[t.aa + a];
				if (0 < a) {
					for (n = -1; 16 > n; ++n) r(c, l + 32 * n - 4, c, l + 32 * n + 12, 4);
					for (n = -1; 8 > n; ++n) r(u, d + 32 * n - 4, u, d + 32 * n + 4, 4), r(f, p + 32 * n - 4, f, p + 32 * n + 4, 4);
				}
				var h = e.Gd, g = e.Hd + a, _ = m.ad, v = m.Hc;
				if (0 < o && (r(c, l - 32, h[g].y, 0, 16), r(u, d - 32, h[g].f, 0, 8), r(f, p - 32, h[g].ea, 0, 8)), m.Za) {
					var y = c, b = l - 32 + 16;
					for (0 < o && (a >= e.za - 1 ? i(y, b, h[g].y[15], 4) : r(y, b, h[g + 1].y, 0, 4)), n = 0; 4 > n; n++) y[b + 128 + n] = y[b + 256 + n] = y[b + 384 + n] = y[b + 0 + n];
					for (n = 0; 16 > n; ++n, v <<= 2) y = c, b = l + Ri[n], fi[m.Ob[n]](y, b), Nn(v, _, 16 * n, y, b);
				} else if (y = Mn(a, o, m.Ob[0]), di[y](c, l), v != 0) for (n = 0; 16 > n; ++n, v <<= 2) Nn(v, _, 16 * n, c, l + Ri[n]);
				for (n = m.Gc, y = Mn(a, o, m.Dd), pi[y](u, d), pi[y](f, p), v = _, y = u, b = d, 255 & (m = n >> 0) && (170 & m ? cr(v, 256, y, b) : ur(v, 256, y, b)), m = f, v = p, 255 & (n >>= 8) && (170 & n ? cr(_, 320, m, v) : ur(_, 320, m, v)), o < e.Ub - 1 && (r(h[g].y, 0, c, l + 480, 16), r(h[g].f, 0, u, d + 224, 8), r(h[g].ea, 0, f, p + 224, 8)), n = 8 * s * e.B, h = e.sa, g = e.ta + 16 * a + 16 * s * e.R, _ = e.qa, m = e.ra + 8 * a + n, v = e.Ha, y = e.Ia + 8 * a + n, n = 0; 16 > n; ++n) r(h, g + n * e.R, c, l + 32 * n, 16);
				for (n = 0; 8 > n; ++n) r(_, m + n * e.B, u, d + 32 * n, 8), r(v, y + n * e.B, f, p + 32 * n, 8);
			}
		}
		function Fn(e, r, i, a, o, s, c, l, u) {
			var d = [0], f = [0], p = 0, m = u == null ? 0 : u.kd, h = u ?? new an();
			if (e == null || 12 > i) return 7;
			h.data = e, h.w = r, h.ha = i, r = [r], i = [i], h.gb = [h.gb];
			t: {
				var g = r, v = i, y = h.gb;
				if (t(e != null), t(v != null), t(y != null), y[0] = 0, 12 <= v[0] && !n(e, g[0], "RIFF")) {
					if (n(e, g[0] + 8, "WEBP")) {
						y = 3;
						break t;
					}
					var b = M(e, g[0] + 4);
					if (12 > b || 4294967286 < b) {
						y = 3;
						break t;
					}
					if (m && b > v[0] - 8) {
						y = 7;
						break t;
					}
					y[0] = b, g[0] += 12, v[0] -= 12;
				}
				y = 0;
			}
			if (y != 0) return y;
			for (b = 0 < h.gb[0], i = i[0];;) {
				t: {
					var S = e;
					v = r, y = i;
					var C = d, w = f, T = g = [0];
					if ((O = p = [p])[0] = 0, 8 > y[0]) y = 7;
					else {
						if (!n(S, v[0], "VP8X")) {
							if (M(S, v[0] + 4) != 10) {
								y = 3;
								break t;
							}
							if (18 > y[0]) {
								y = 7;
								break t;
							}
							var E = M(S, v[0] + 8), D = 1 + j(S, v[0] + 12);
							if (2147483648 <= D * (S = 1 + j(S, v[0] + 15))) {
								y = 3;
								break t;
							}
							T != null && (T[0] = E), C != null && (C[0] = D), w != null && (w[0] = S), v[0] += 18, y[0] -= 18, O[0] = 1;
						}
						y = 0;
					}
				}
				if (p = p[0], g = g[0], y != 0) return y;
				if (v = !!(2 & g), !b && p) return 3;
				if (s != null && (s[0] = !!(16 & g)), c != null && (c[0] = v), l != null && (l[0] = 0), c = d[0], g = f[0], p && v && u == null) {
					y = 0;
					break;
				}
				if (4 > i) {
					y = 7;
					break;
				}
				if (b && p || !b && !p && !n(e, r[0], "ALPH")) {
					i = [i], h.na = [h.na], h.P = [h.P], h.Sa = [h.Sa];
					t: {
						E = e, y = r, b = i;
						var O = h.gb;
						C = h.na, w = h.P, T = h.Sa, D = 22, t(E != null), t(b != null), S = y[0];
						var k = b[0];
						for (t(C != null), t(T != null), C[0] = null, w[0] = null, T[0] = 0;;) {
							if (y[0] = S, b[0] = k, 8 > k) {
								y = 7;
								break t;
							}
							var A = M(E, S + 4);
							if (4294967286 < A) {
								y = 3;
								break t;
							}
							var N = 8 + A + 1 & -2;
							if (D += N, 0 < O && D > O) {
								y = 3;
								break t;
							}
							if (!n(E, S, "VP8 ") || !n(E, S, "VP8L")) {
								y = 0;
								break t;
							}
							if (k[0] < N) {
								y = 7;
								break t;
							}
							n(E, S, "ALPH") || (C[0] = E, w[0] = S + 8, T[0] = A), S += N, k -= N;
						}
					}
					if (i = i[0], h.na = h.na[0], h.P = h.P[0], h.Sa = h.Sa[0], y != 0) break;
				}
				i = [i], h.Ja = [h.Ja], h.xa = [h.xa];
				t: if (O = e, y = r, b = i, C = h.gb[0], w = h.Ja, T = h.xa, E = y[0], S = !n(O, E, "VP8 "), D = !n(O, E, "VP8L"), t(O != null), t(b != null), t(w != null), t(T != null), 8 > b[0]) y = 7;
				else {
					if (S || D) {
						if (O = M(O, E + 4), 12 <= C && O > C - 12) {
							y = 3;
							break t;
						}
						if (m && O > b[0] - 8) {
							y = 7;
							break t;
						}
						w[0] = O, y[0] += 8, b[0] -= 8, T[0] = D;
					} else T[0] = 5 <= b[0] && O[E + 0] == 47 && !(O[E + 4] >> 5), w[0] = b[0];
					y = 0;
				}
				if (i = i[0], h.Ja = h.Ja[0], h.xa = h.xa[0], r = r[0], y != 0) break;
				if (4294967286 < h.Ja) return 3;
				if (l == null || v || (l[0] = h.xa ? 2 : 1), c = [c], g = [g], h.xa) {
					if (5 > i) {
						y = 7;
						break;
					}
					l = c, m = g, v = s, e == null || 5 > i ? e = 0 : 5 <= i && e[r + 0] == 47 && !(e[r + 4] >> 5) ? (b = [0], O = [0], C = [0], _(w = new x(), e, r, i), xe(w, b, O, C) ? (l != null && (l[0] = b[0]), m != null && (m[0] = O[0]), v != null && (v[0] = C[0]), e = 1) : e = 0) : e = 0;
				} else {
					if (10 > i) {
						y = 7;
						break;
					}
					l = g, e == null || 10 > i || !$e(e, r + 3, i - 3) ? e = 0 : (m = e[r + 0] | e[r + 1] << 8 | e[r + 2] << 16, v = 16383 & (e[r + 7] << 8 | e[r + 6]), e = 16383 & (e[r + 9] << 8 | e[r + 8]), 1 & m || 3 < (m >> 1 & 7) || !(m >> 4 & 1) || m >> 5 >= h.Ja || !v || !e ? e = 0 : (c && (c[0] = v), l && (l[0] = e), e = 1));
				}
				if (!e || (c = c[0], g = g[0], p && (d[0] != c || f[0] != g))) return 3;
				u != null && (u[0] = h, u.offset = r - u.w, t(4294967286 > r - u.w), t(u.offset == u.ha - i));
				break;
			}
			return y == 0 || y == 7 && p && u == null ? (s != null && (s[0] |= h.na != null && 0 < h.na.length), a != null && (a[0] = c), o != null && (o[0] = g), 0) : y;
		}
		function In(e, t, n) {
			var r = t.width, i = t.height, a = 0, o = 0, s = r, c = i;
			if (t.Da = e != null && 0 < e.Da, t.Da && (s = e.cd, c = e.bd, a = e.v, o = e.j, 11 > n || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= c || a + s > r || o + c > i)) return 0;
			if (t.v = a, t.j = o, t.va = a + s, t.o = o + c, t.U = s, t.T = c, t.da = e != null && 0 < e.da, t.da) {
				if (!I(s, c, n = [e.ib], a = [e.hb])) return 0;
				t.ib = n[0], t.hb = a[0];
			}
			return t.ob = e != null && e.ob, t.Kb = e == null || !e.Sd, t.da && (t.ob = t.ib < 3 * r / 4 && t.hb < 3 * i / 4, t.Kb = 0), 1;
		}
		function Ln(e) {
			if (e == null) return 2;
			if (11 > e.S) {
				var t = e.f.RGBA;
				t.fb += (e.height - 1) * t.A, t.A = -t.A;
			} else t = e.f.kb, e = e.height, t.O += (e - 1) * t.fa, t.fa = -t.fa, t.N += (e - 1 >> 1) * t.Ab, t.Ab = -t.Ab, t.W += (e - 1 >> 1) * t.Db, t.Db = -t.Db, t.F != null && (t.J += (e - 1) * t.lb, t.lb = -t.lb);
			return 0;
		}
		function Rn(e, t, n, r) {
			if (r == null || 0 >= e || 0 >= t) return 2;
			if (n != null) {
				if (n.Da) {
					var i = n.cd, o = n.bd, s = -2 & n.v, c = -2 & n.j;
					if (0 > s || 0 > c || 0 >= i || 0 >= o || s + i > e || c + o > t) return 2;
					e = i, t = o;
				}
				if (n.da) {
					if (!I(e, t, i = [n.ib], o = [n.hb])) return 2;
					e = i[0], t = o[0];
				}
			}
			r.width = e, r.height = t;
			t: {
				var l = r.width, u = r.height;
				if (e = r.S, 0 >= l || 0 >= u || !(e >= Ir && 13 > e)) e = 2;
				else {
					if (0 >= r.Rd && r.sd == null) {
						s = o = i = t = 0;
						var d = (c = l * Hi[e]) * u;
						if (11 > e || (o = (u + 1) / 2 * (t = (l + 1) / 2), e == 12 && (s = (i = l) * u)), (u = a(d + 2 * o + s)) == null) {
							e = 1;
							break t;
						}
						r.sd = u, 11 > e ? ((l = r.f.RGBA).eb = u, l.fb = 0, l.A = c, l.size = d) : ((l = r.f.kb).y = u, l.O = 0, l.fa = c, l.Fd = d, l.f = u, l.N = 0 + d, l.Ab = t, l.Cd = o, l.ea = u, l.W = 0 + d + o, l.Db = t, l.Ed = o, e == 12 && (l.F = u, l.J = 0 + d + 2 * o), l.Tc = s, l.lb = i);
					}
					if (t = 1, i = r.S, o = r.width, s = r.height, i >= Ir && 13 > i) if (11 > i) e = r.f.RGBA, t &= (c = Math.abs(e.A)) * (s - 1) + o <= e.size, t &= c >= o * Hi[i], t &= e.eb != null;
					else {
						e = r.f.kb, c = (o + 1) / 2, d = (s + 1) / 2, l = Math.abs(e.fa), u = Math.abs(e.Ab);
						var f = Math.abs(e.Db), p = Math.abs(e.lb), m = p * (s - 1) + o;
						t &= l * (s - 1) + o <= e.Fd, t &= u * (d - 1) + c <= e.Cd, t = (t &= f * (d - 1) + c <= e.Ed) & l >= o & u >= c & f >= c, t &= e.y != null, t &= e.f != null, t &= e.ea != null, i == 12 && (t &= p >= o, t &= m <= e.Tc, t &= e.F != null);
					}
					else t = 0;
					e = t ? 0 : 2;
				}
			}
			return e != 0 || n != null && n.fd && (e = Ln(r)), e;
		}
		var zn = 64, Bn = [
			0,
			1,
			3,
			7,
			15,
			31,
			63,
			127,
			255,
			511,
			1023,
			2047,
			4095,
			8191,
			16383,
			32767,
			65535,
			131071,
			262143,
			524287,
			1048575,
			2097151,
			4194303,
			8388607,
			16777215
		], Vn = 24, Hn = 32, Un = 8, Wn = [
			0,
			0,
			1,
			1,
			2,
			2,
			2,
			2,
			3,
			3,
			3,
			3,
			3,
			3,
			3,
			3,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			5,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7,
			7
		];
		R("Predictor0", "PredictorAdd0"), e.Predictor0 = function() {
			return 4278190080;
		}, e.Predictor1 = function(e) {
			return e;
		}, e.Predictor2 = function(e, t, n) {
			return t[n + 0];
		}, e.Predictor3 = function(e, t, n) {
			return t[n + 1];
		}, e.Predictor4 = function(e, t, n) {
			return t[n - 1];
		}, e.Predictor5 = function(e, t, n) {
			return B(B(e, t[n + 1]), t[n + 0]);
		}, e.Predictor6 = function(e, t, n) {
			return B(e, t[n - 1]);
		}, e.Predictor7 = function(e, t, n) {
			return B(e, t[n + 0]);
		}, e.Predictor8 = function(e, t, n) {
			return B(t[n - 1], t[n + 0]);
		}, e.Predictor9 = function(e, t, n) {
			return B(t[n + 0], t[n + 1]);
		}, e.Predictor10 = function(e, t, n) {
			return B(B(e, t[n - 1]), B(t[n + 0], t[n + 1]));
		}, e.Predictor11 = function(e, t, n) {
			var r = t[n + 0];
			return 0 >= H(r >> 24 & 255, e >> 24 & 255, (t = t[n - 1]) >> 24 & 255) + H(r >> 16 & 255, e >> 16 & 255, t >> 16 & 255) + H(r >> 8 & 255, e >> 8 & 255, t >> 8 & 255) + H(255 & r, 255 & e, 255 & t) ? r : e;
		}, e.Predictor12 = function(e, t, n) {
			var r = t[n + 0];
			return (te((e >> 24 & 255) + (r >> 24 & 255) - ((t = t[n - 1]) >> 24 & 255)) << 24 | te((e >> 16 & 255) + (r >> 16 & 255) - (t >> 16 & 255)) << 16 | te((e >> 8 & 255) + (r >> 8 & 255) - (t >> 8 & 255)) << 8 | te((255 & e) + (255 & r) - (255 & t))) >>> 0;
		}, e.Predictor13 = function(e, t, n) {
			var r = t[n - 1];
			return (V((e = B(e, t[n + 0])) >> 24 & 255, r >> 24 & 255) << 24 | V(e >> 16 & 255, r >> 16 & 255) << 16 | V(e >> 8 & 255, r >> 8 & 255) << 8 | V(e >> 0 & 255, r >> 0 & 255)) >>> 0;
		};
		var Gn = e.PredictorAdd0;
		e.PredictorAdd1 = U, R("Predictor2", "PredictorAdd2"), R("Predictor3", "PredictorAdd3"), R("Predictor4", "PredictorAdd4"), R("Predictor5", "PredictorAdd5"), R("Predictor6", "PredictorAdd6"), R("Predictor7", "PredictorAdd7"), R("Predictor8", "PredictorAdd8"), R("Predictor9", "PredictorAdd9"), R("Predictor10", "PredictorAdd10"), R("Predictor11", "PredictorAdd11"), R("Predictor12", "PredictorAdd12"), R("Predictor13", "PredictorAdd13");
		var Kn = e.PredictorAdd2;
		ie("ColorIndexInverseTransform", "MapARGB", "32b", (function(e) {
			return e >> 8 & 255;
		}), (function(e) {
			return e;
		})), ie("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(e) {
			return e;
		}), (function(e) {
			return e >> 8 & 255;
		}));
		var qn, Jn = e.ColorIndexInverseTransform, Yn = e.MapARGB, Xn = e.VP8LColorIndexInverseTransformAlpha, Zn = e.MapAlpha, Qn = e.VP8LPredictorsAdd = [];
		Qn.length = 16, (e.VP8LPredictors = []).length = 16, (e.VP8LPredictorsAdd_C = []).length = 16, (e.VP8LPredictors_C = []).length = 16;
		var $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr = a(511), Or = a(2041), kr = a(225), Ar = a(767), jr = 0, Mr = Or, Nr = kr, Pr = Ar, Fr = Dr, Ir = 0, Lr = 1, Rr = 2, zr = 3, Br = 4, Vr = 5, Hr = 6, Ur = 7, Wr = 8, Gr = 9, Kr = 10, qr = [
			2,
			3,
			7
		], Jr = [
			3,
			3,
			11
		], Yr = [
			280,
			256,
			256,
			256,
			40
		], Xr = [
			0,
			1,
			1,
			1,
			0
		], Zr = [
			17,
			18,
			0,
			1,
			2,
			3,
			4,
			5,
			16,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15
		], Qr = [
			24,
			7,
			23,
			25,
			40,
			6,
			39,
			41,
			22,
			26,
			38,
			42,
			56,
			5,
			55,
			57,
			21,
			27,
			54,
			58,
			37,
			43,
			72,
			4,
			71,
			73,
			20,
			28,
			53,
			59,
			70,
			74,
			36,
			44,
			88,
			69,
			75,
			52,
			60,
			3,
			87,
			89,
			19,
			29,
			86,
			90,
			35,
			45,
			68,
			76,
			85,
			91,
			51,
			61,
			104,
			2,
			103,
			105,
			18,
			30,
			102,
			106,
			34,
			46,
			84,
			92,
			67,
			77,
			101,
			107,
			50,
			62,
			120,
			1,
			119,
			121,
			83,
			93,
			17,
			31,
			100,
			108,
			66,
			78,
			118,
			122,
			33,
			47,
			117,
			123,
			49,
			63,
			99,
			109,
			82,
			94,
			0,
			116,
			124,
			65,
			79,
			16,
			32,
			98,
			110,
			48,
			115,
			125,
			81,
			95,
			64,
			114,
			126,
			97,
			111,
			80,
			113,
			127,
			96,
			112
		], $r = [
			2954,
			2956,
			2958,
			2962,
			2970,
			2986,
			3018,
			3082,
			3212,
			3468,
			3980,
			5004
		], ei = 8, ti = [
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			17,
			18,
			19,
			20,
			20,
			21,
			21,
			22,
			22,
			23,
			23,
			24,
			25,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
			60,
			61,
			62,
			63,
			64,
			65,
			66,
			67,
			68,
			69,
			70,
			71,
			72,
			73,
			74,
			75,
			76,
			76,
			77,
			78,
			79,
			80,
			81,
			82,
			83,
			84,
			85,
			86,
			87,
			88,
			89,
			91,
			93,
			95,
			96,
			98,
			100,
			101,
			102,
			104,
			106,
			108,
			110,
			112,
			114,
			116,
			118,
			122,
			124,
			126,
			128,
			130,
			132,
			134,
			136,
			138,
			140,
			143,
			145,
			148,
			151,
			154,
			157
		], ni = [
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			60,
			62,
			64,
			66,
			68,
			70,
			72,
			74,
			76,
			78,
			80,
			82,
			84,
			86,
			88,
			90,
			92,
			94,
			96,
			98,
			100,
			102,
			104,
			106,
			108,
			110,
			112,
			114,
			116,
			119,
			122,
			125,
			128,
			131,
			134,
			137,
			140,
			143,
			146,
			149,
			152,
			155,
			158,
			161,
			164,
			167,
			170,
			173,
			177,
			181,
			185,
			189,
			193,
			197,
			201,
			205,
			209,
			213,
			217,
			221,
			225,
			229,
			234,
			239,
			245,
			249,
			254,
			259,
			264,
			269,
			274,
			279,
			284
		], ri = null, ii = [
			[
				173,
				148,
				140,
				0
			],
			[
				176,
				155,
				140,
				135,
				0
			],
			[
				180,
				157,
				141,
				134,
				130,
				0
			],
			[
				254,
				254,
				243,
				230,
				196,
				177,
				153,
				140,
				133,
				130,
				129,
				0
			]
		], ai = [
			0,
			1,
			4,
			8,
			5,
			2,
			3,
			6,
			9,
			12,
			13,
			10,
			7,
			11,
			14,
			15
		], oi = [
			-0,
			1,
			-1,
			2,
			-2,
			3,
			4,
			6,
			-3,
			5,
			-4,
			-5,
			-6,
			7,
			-7,
			8,
			-8,
			-9
		], si = [
			[
				[
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						253,
						136,
						254,
						255,
						228,
						219,
						128,
						128,
						128,
						128,
						128
					],
					[
						189,
						129,
						242,
						255,
						227,
						213,
						255,
						219,
						128,
						128,
						128
					],
					[
						106,
						126,
						227,
						252,
						214,
						209,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						98,
						248,
						255,
						236,
						226,
						255,
						255,
						128,
						128,
						128
					],
					[
						181,
						133,
						238,
						254,
						221,
						234,
						255,
						154,
						128,
						128,
						128
					],
					[
						78,
						134,
						202,
						247,
						198,
						180,
						255,
						219,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						185,
						249,
						255,
						243,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						184,
						150,
						247,
						255,
						236,
						224,
						128,
						128,
						128,
						128,
						128
					],
					[
						77,
						110,
						216,
						255,
						236,
						230,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						101,
						251,
						255,
						241,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						170,
						139,
						241,
						252,
						236,
						209,
						255,
						255,
						128,
						128,
						128
					],
					[
						37,
						116,
						196,
						243,
						228,
						255,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						204,
						254,
						255,
						245,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						207,
						160,
						250,
						255,
						238,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						102,
						103,
						231,
						255,
						211,
						171,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						152,
						252,
						255,
						240,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						177,
						135,
						243,
						255,
						234,
						225,
						128,
						128,
						128,
						128,
						128
					],
					[
						80,
						129,
						211,
						255,
						194,
						224,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						246,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						198,
						35,
						237,
						223,
						193,
						187,
						162,
						160,
						145,
						155,
						62
					],
					[
						131,
						45,
						198,
						221,
						172,
						176,
						220,
						157,
						252,
						221,
						1
					],
					[
						68,
						47,
						146,
						208,
						149,
						167,
						221,
						162,
						255,
						223,
						128
					]
				],
				[
					[
						1,
						149,
						241,
						255,
						221,
						224,
						255,
						255,
						128,
						128,
						128
					],
					[
						184,
						141,
						234,
						253,
						222,
						220,
						255,
						199,
						128,
						128,
						128
					],
					[
						81,
						99,
						181,
						242,
						176,
						190,
						249,
						202,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						129,
						232,
						253,
						214,
						197,
						242,
						196,
						255,
						255,
						128
					],
					[
						99,
						121,
						210,
						250,
						201,
						198,
						255,
						202,
						128,
						128,
						128
					],
					[
						23,
						91,
						163,
						242,
						170,
						187,
						247,
						210,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						200,
						246,
						255,
						234,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						109,
						178,
						241,
						255,
						231,
						245,
						255,
						255,
						128,
						128,
						128
					],
					[
						44,
						130,
						201,
						253,
						205,
						192,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						132,
						239,
						251,
						219,
						209,
						255,
						165,
						128,
						128,
						128
					],
					[
						94,
						136,
						225,
						251,
						218,
						190,
						255,
						255,
						128,
						128,
						128
					],
					[
						22,
						100,
						174,
						245,
						186,
						161,
						255,
						199,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						182,
						249,
						255,
						232,
						235,
						128,
						128,
						128,
						128,
						128
					],
					[
						124,
						143,
						241,
						255,
						227,
						234,
						128,
						128,
						128,
						128,
						128
					],
					[
						35,
						77,
						181,
						251,
						193,
						211,
						255,
						205,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						157,
						247,
						255,
						236,
						231,
						255,
						255,
						128,
						128,
						128
					],
					[
						121,
						141,
						235,
						255,
						225,
						227,
						255,
						255,
						128,
						128,
						128
					],
					[
						45,
						99,
						188,
						251,
						195,
						217,
						255,
						224,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						251,
						255,
						213,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						203,
						1,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						137,
						1,
						177,
						255,
						224,
						255,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						253,
						9,
						248,
						251,
						207,
						208,
						255,
						192,
						128,
						128,
						128
					],
					[
						175,
						13,
						224,
						243,
						193,
						185,
						249,
						198,
						255,
						255,
						128
					],
					[
						73,
						17,
						171,
						221,
						161,
						179,
						236,
						167,
						255,
						234,
						128
					]
				],
				[
					[
						1,
						95,
						247,
						253,
						212,
						183,
						255,
						255,
						128,
						128,
						128
					],
					[
						239,
						90,
						244,
						250,
						211,
						209,
						255,
						255,
						128,
						128,
						128
					],
					[
						155,
						77,
						195,
						248,
						188,
						195,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						24,
						239,
						251,
						218,
						219,
						255,
						205,
						128,
						128,
						128
					],
					[
						201,
						51,
						219,
						255,
						196,
						186,
						128,
						128,
						128,
						128,
						128
					],
					[
						69,
						46,
						190,
						239,
						201,
						218,
						255,
						228,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						191,
						251,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						223,
						165,
						249,
						255,
						213,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						141,
						124,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						16,
						248,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						190,
						36,
						230,
						255,
						236,
						255,
						128,
						128,
						128,
						128,
						128
					],
					[
						149,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						226,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						247,
						192,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						240,
						128,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						134,
						252,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						213,
						62,
						250,
						255,
						255,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						55,
						93,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				],
				[
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			],
			[
				[
					[
						202,
						24,
						213,
						235,
						186,
						191,
						220,
						160,
						240,
						175,
						255
					],
					[
						126,
						38,
						182,
						232,
						169,
						184,
						228,
						174,
						255,
						187,
						128
					],
					[
						61,
						46,
						138,
						219,
						151,
						178,
						240,
						170,
						255,
						216,
						128
					]
				],
				[
					[
						1,
						112,
						230,
						250,
						199,
						191,
						247,
						159,
						255,
						255,
						128
					],
					[
						166,
						109,
						228,
						252,
						211,
						215,
						255,
						174,
						128,
						128,
						128
					],
					[
						39,
						77,
						162,
						232,
						172,
						180,
						245,
						178,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						52,
						220,
						246,
						198,
						199,
						249,
						220,
						255,
						255,
						128
					],
					[
						124,
						74,
						191,
						243,
						183,
						193,
						250,
						221,
						255,
						255,
						128
					],
					[
						24,
						71,
						130,
						219,
						154,
						170,
						243,
						182,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						182,
						225,
						249,
						219,
						240,
						255,
						224,
						128,
						128,
						128
					],
					[
						149,
						150,
						226,
						252,
						216,
						205,
						255,
						171,
						128,
						128,
						128
					],
					[
						28,
						108,
						170,
						242,
						183,
						194,
						254,
						223,
						255,
						255,
						128
					]
				],
				[
					[
						1,
						81,
						230,
						252,
						204,
						203,
						255,
						192,
						128,
						128,
						128
					],
					[
						123,
						102,
						209,
						247,
						188,
						196,
						255,
						233,
						128,
						128,
						128
					],
					[
						20,
						95,
						153,
						243,
						164,
						173,
						255,
						203,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						222,
						248,
						255,
						216,
						213,
						128,
						128,
						128,
						128,
						128
					],
					[
						168,
						175,
						246,
						252,
						235,
						205,
						255,
						255,
						128,
						128,
						128
					],
					[
						47,
						116,
						215,
						255,
						211,
						212,
						255,
						255,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						121,
						236,
						253,
						212,
						214,
						255,
						255,
						128,
						128,
						128
					],
					[
						141,
						84,
						213,
						252,
						201,
						202,
						255,
						219,
						128,
						128,
						128
					],
					[
						42,
						80,
						160,
						240,
						162,
						185,
						255,
						205,
						128,
						128,
						128
					]
				],
				[
					[
						1,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						244,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					],
					[
						238,
						1,
						255,
						128,
						128,
						128,
						128,
						128,
						128,
						128,
						128
					]
				]
			]
		], ci = [
			[
				[
					231,
					120,
					48,
					89,
					115,
					113,
					120,
					152,
					112
				],
				[
					152,
					179,
					64,
					126,
					170,
					118,
					46,
					70,
					95
				],
				[
					175,
					69,
					143,
					80,
					85,
					82,
					72,
					155,
					103
				],
				[
					56,
					58,
					10,
					171,
					218,
					189,
					17,
					13,
					152
				],
				[
					114,
					26,
					17,
					163,
					44,
					195,
					21,
					10,
					173
				],
				[
					121,
					24,
					80,
					195,
					26,
					62,
					44,
					64,
					85
				],
				[
					144,
					71,
					10,
					38,
					171,
					213,
					144,
					34,
					26
				],
				[
					170,
					46,
					55,
					19,
					136,
					160,
					33,
					206,
					71
				],
				[
					63,
					20,
					8,
					114,
					114,
					208,
					12,
					9,
					226
				],
				[
					81,
					40,
					11,
					96,
					182,
					84,
					29,
					16,
					36
				]
			],
			[
				[
					134,
					183,
					89,
					137,
					98,
					101,
					106,
					165,
					148
				],
				[
					72,
					187,
					100,
					130,
					157,
					111,
					32,
					75,
					80
				],
				[
					66,
					102,
					167,
					99,
					74,
					62,
					40,
					234,
					128
				],
				[
					41,
					53,
					9,
					178,
					241,
					141,
					26,
					8,
					107
				],
				[
					74,
					43,
					26,
					146,
					73,
					166,
					49,
					23,
					157
				],
				[
					65,
					38,
					105,
					160,
					51,
					52,
					31,
					115,
					128
				],
				[
					104,
					79,
					12,
					27,
					217,
					255,
					87,
					17,
					7
				],
				[
					87,
					68,
					71,
					44,
					114,
					51,
					15,
					186,
					23
				],
				[
					47,
					41,
					14,
					110,
					182,
					183,
					21,
					17,
					194
				],
				[
					66,
					45,
					25,
					102,
					197,
					189,
					23,
					18,
					22
				]
			],
			[
				[
					88,
					88,
					147,
					150,
					42,
					46,
					45,
					196,
					205
				],
				[
					43,
					97,
					183,
					117,
					85,
					38,
					35,
					179,
					61
				],
				[
					39,
					53,
					200,
					87,
					26,
					21,
					43,
					232,
					171
				],
				[
					56,
					34,
					51,
					104,
					114,
					102,
					29,
					93,
					77
				],
				[
					39,
					28,
					85,
					171,
					58,
					165,
					90,
					98,
					64
				],
				[
					34,
					22,
					116,
					206,
					23,
					34,
					43,
					166,
					73
				],
				[
					107,
					54,
					32,
					26,
					51,
					1,
					81,
					43,
					31
				],
				[
					68,
					25,
					106,
					22,
					64,
					171,
					36,
					225,
					114
				],
				[
					34,
					19,
					21,
					102,
					132,
					188,
					16,
					76,
					124
				],
				[
					62,
					18,
					78,
					95,
					85,
					57,
					50,
					48,
					51
				]
			],
			[
				[
					193,
					101,
					35,
					159,
					215,
					111,
					89,
					46,
					111
				],
				[
					60,
					148,
					31,
					172,
					219,
					228,
					21,
					18,
					111
				],
				[
					112,
					113,
					77,
					85,
					179,
					255,
					38,
					120,
					114
				],
				[
					40,
					42,
					1,
					196,
					245,
					209,
					10,
					25,
					109
				],
				[
					88,
					43,
					29,
					140,
					166,
					213,
					37,
					43,
					154
				],
				[
					61,
					63,
					30,
					155,
					67,
					45,
					68,
					1,
					209
				],
				[
					100,
					80,
					8,
					43,
					154,
					1,
					51,
					26,
					71
				],
				[
					142,
					78,
					78,
					16,
					255,
					128,
					34,
					197,
					171
				],
				[
					41,
					40,
					5,
					102,
					211,
					183,
					4,
					1,
					221
				],
				[
					51,
					50,
					17,
					168,
					209,
					192,
					23,
					25,
					82
				]
			],
			[
				[
					138,
					31,
					36,
					171,
					27,
					166,
					38,
					44,
					229
				],
				[
					67,
					87,
					58,
					169,
					82,
					115,
					26,
					59,
					179
				],
				[
					63,
					59,
					90,
					180,
					59,
					166,
					93,
					73,
					154
				],
				[
					40,
					40,
					21,
					116,
					143,
					209,
					34,
					39,
					175
				],
				[
					47,
					15,
					16,
					183,
					34,
					223,
					49,
					45,
					183
				],
				[
					46,
					17,
					33,
					183,
					6,
					98,
					15,
					32,
					183
				],
				[
					57,
					46,
					22,
					24,
					128,
					1,
					54,
					17,
					37
				],
				[
					65,
					32,
					73,
					115,
					28,
					128,
					23,
					128,
					205
				],
				[
					40,
					3,
					9,
					115,
					51,
					192,
					18,
					6,
					223
				],
				[
					87,
					37,
					9,
					115,
					59,
					77,
					64,
					21,
					47
				]
			],
			[
				[
					104,
					55,
					44,
					218,
					9,
					54,
					53,
					130,
					226
				],
				[
					64,
					90,
					70,
					205,
					40,
					41,
					23,
					26,
					57
				],
				[
					54,
					57,
					112,
					184,
					5,
					41,
					38,
					166,
					213
				],
				[
					30,
					34,
					26,
					133,
					152,
					116,
					10,
					32,
					134
				],
				[
					39,
					19,
					53,
					221,
					26,
					114,
					32,
					73,
					255
				],
				[
					31,
					9,
					65,
					234,
					2,
					15,
					1,
					118,
					73
				],
				[
					75,
					32,
					12,
					51,
					192,
					255,
					160,
					43,
					51
				],
				[
					88,
					31,
					35,
					67,
					102,
					85,
					55,
					186,
					85
				],
				[
					56,
					21,
					23,
					111,
					59,
					205,
					45,
					37,
					192
				],
				[
					55,
					38,
					70,
					124,
					73,
					102,
					1,
					34,
					98
				]
			],
			[
				[
					125,
					98,
					42,
					88,
					104,
					85,
					117,
					175,
					82
				],
				[
					95,
					84,
					53,
					89,
					128,
					100,
					113,
					101,
					45
				],
				[
					75,
					79,
					123,
					47,
					51,
					128,
					81,
					171,
					1
				],
				[
					57,
					17,
					5,
					71,
					102,
					57,
					53,
					41,
					49
				],
				[
					38,
					33,
					13,
					121,
					57,
					73,
					26,
					1,
					85
				],
				[
					41,
					10,
					67,
					138,
					77,
					110,
					90,
					47,
					114
				],
				[
					115,
					21,
					2,
					10,
					102,
					255,
					166,
					23,
					6
				],
				[
					101,
					29,
					16,
					10,
					85,
					128,
					101,
					196,
					26
				],
				[
					57,
					18,
					10,
					102,
					102,
					213,
					34,
					20,
					43
				],
				[
					117,
					20,
					15,
					36,
					163,
					128,
					68,
					1,
					26
				]
			],
			[
				[
					102,
					61,
					71,
					37,
					34,
					53,
					31,
					243,
					192
				],
				[
					69,
					60,
					71,
					38,
					73,
					119,
					28,
					222,
					37
				],
				[
					68,
					45,
					128,
					34,
					1,
					47,
					11,
					245,
					171
				],
				[
					62,
					17,
					19,
					70,
					146,
					85,
					55,
					62,
					70
				],
				[
					37,
					43,
					37,
					154,
					100,
					163,
					85,
					160,
					1
				],
				[
					63,
					9,
					92,
					136,
					28,
					64,
					32,
					201,
					85
				],
				[
					75,
					15,
					9,
					9,
					64,
					255,
					184,
					119,
					16
				],
				[
					86,
					6,
					28,
					5,
					64,
					255,
					25,
					248,
					1
				],
				[
					56,
					8,
					17,
					132,
					137,
					255,
					55,
					116,
					128
				],
				[
					58,
					15,
					20,
					82,
					135,
					57,
					26,
					121,
					40
				]
			],
			[
				[
					164,
					50,
					31,
					137,
					154,
					133,
					25,
					35,
					218
				],
				[
					51,
					103,
					44,
					131,
					131,
					123,
					31,
					6,
					158
				],
				[
					86,
					40,
					64,
					135,
					148,
					224,
					45,
					183,
					128
				],
				[
					22,
					26,
					17,
					131,
					240,
					154,
					14,
					1,
					209
				],
				[
					45,
					16,
					21,
					91,
					64,
					222,
					7,
					1,
					197
				],
				[
					56,
					21,
					39,
					155,
					60,
					138,
					23,
					102,
					213
				],
				[
					83,
					12,
					13,
					54,
					192,
					255,
					68,
					47,
					28
				],
				[
					85,
					26,
					85,
					85,
					128,
					128,
					32,
					146,
					171
				],
				[
					18,
					11,
					7,
					63,
					144,
					171,
					4,
					4,
					246
				],
				[
					35,
					27,
					10,
					146,
					174,
					171,
					12,
					26,
					128
				]
			],
			[
				[
					190,
					80,
					35,
					99,
					180,
					80,
					126,
					54,
					45
				],
				[
					85,
					126,
					47,
					87,
					176,
					51,
					41,
					20,
					32
				],
				[
					101,
					75,
					128,
					139,
					118,
					146,
					116,
					128,
					85
				],
				[
					56,
					41,
					15,
					176,
					236,
					85,
					37,
					9,
					62
				],
				[
					71,
					30,
					17,
					119,
					118,
					255,
					17,
					18,
					138
				],
				[
					101,
					38,
					60,
					138,
					55,
					70,
					43,
					26,
					142
				],
				[
					146,
					36,
					19,
					30,
					171,
					255,
					97,
					27,
					20
				],
				[
					138,
					45,
					61,
					62,
					219,
					1,
					81,
					188,
					64
				],
				[
					32,
					41,
					20,
					117,
					151,
					142,
					20,
					21,
					163
				],
				[
					112,
					19,
					12,
					61,
					195,
					128,
					48,
					4,
					24
				]
			]
		], li = [
			[
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						176,
						246,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						223,
						241,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						244,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						234,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						246,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						239,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						248,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						253,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						254,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						217,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						225,
						252,
						241,
						253,
						255,
						255,
						254,
						255,
						255,
						255,
						255
					],
					[
						234,
						250,
						241,
						250,
						253,
						255,
						253,
						254,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						223,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						238,
						253,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						248,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						247,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						186,
						251,
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						234,
						251,
						244,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						251,
						243,
						253,
						254,
						255,
						254,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						236,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						251,
						253,
						253,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			],
			[
				[
					[
						248,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						254,
						252,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						248,
						254,
						249,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						246,
						253,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						254,
						251,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						254,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						248,
						254,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						255,
						254,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						251,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						245,
						251,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						253,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						251,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						252,
						253,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						252,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						249,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						253,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						250,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				],
				[
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						254,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					],
					[
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255,
						255
					]
				]
			]
		], ui = [
			0,
			1,
			2,
			3,
			6,
			4,
			5,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			6,
			7,
			0
		], di = [], fi = [], pi = [], mi = 1, hi = 2, gi = [], _i = [];
		vn("UpsampleRgbLinePair", wn, 3), vn("UpsampleBgrLinePair", Tn, 3), vn("UpsampleRgbaLinePair", An, 4), vn("UpsampleBgraLinePair", kn, 4), vn("UpsampleArgbLinePair", On, 4), vn("UpsampleRgba4444LinePair", Dn, 2), vn("UpsampleRgb565LinePair", En, 2);
		var vi = e.UpsampleRgbLinePair, yi = e.UpsampleBgrLinePair, bi = e.UpsampleRgbaLinePair, xi = e.UpsampleBgraLinePair, Si = e.UpsampleArgbLinePair, Ci = e.UpsampleRgba4444LinePair, wi = e.UpsampleRgb565LinePair, Ti = 16, Ei = 1 << Ti - 1, Di = -227, Oi = 482, ki = 6, Ai = (256 << ki) - 1, ji = 0, Mi = a(256), Ni = a(256), Pi = a(256), Fi = a(256), Ii = a(Oi - Di), Li = a(Oi - Di);
		jn("YuvToRgbRow", wn, 3), jn("YuvToBgrRow", Tn, 3), jn("YuvToRgbaRow", An, 4), jn("YuvToBgraRow", kn, 4), jn("YuvToArgbRow", On, 4), jn("YuvToRgba4444Row", Dn, 2), jn("YuvToRgb565Row", En, 2);
		var Ri = [
			0,
			4,
			8,
			12,
			128,
			132,
			136,
			140,
			256,
			260,
			264,
			268,
			384,
			388,
			392,
			396
		], zi = [
			0,
			2,
			8
		], Bi = [
			8,
			7,
			6,
			4,
			4,
			2,
			2,
			2,
			1,
			1,
			1,
			1
		], Vi = 1;
		this.WebPDecodeRGBA = function(e, n, r, i, a) {
			var o = Lr, s = new rn(), c = new pe();
			s.ba = c, c.S = o, c.width = [c.width], c.height = [c.height];
			var l = c.width, u = c.height, d = new me();
			if (d == null || e == null) var f = 2;
			else t(d != null), f = Fn(e, n, r, d.width, d.height, d.Pd, d.Qd, d.format, null);
			if (f == 0 ? (l != null && (l[0] = d.width[0]), u != null && (u[0] = d.height[0]), l = 1) : l = 0, l) {
				c.width = c.width[0], c.height = c.height[0], i != null && (i[0] = c.width), a != null && (a[0] = c.height);
				t: {
					if (i = new Xe(), (a = new an()).data = e, a.w = n, a.ha = r, a.kd = 1, n = [0], t(a != null), ((e = Fn(a.data, a.w, a.ha, null, null, null, n, null, a)) == 0 || e == 7) && n[0] && (e = 4), (n = e) == 0) {
						if (t(s != null), i.data = a.data, i.w = a.w + a.offset, i.ha = a.ha - a.offset, i.put = be, i.ac = ye, i.bc = q, i.ma = s, a.xa) {
							if ((e = Ne()) == null) {
								s = 1;
								break t;
							}
							if (function(e, n) {
								var r = [0], i = [0], a = [0];
								e: for (;;) {
									if (e == null) return 0;
									if (n == null) return e.a = 2, 0;
									if (e.l = n, e.a = 0, _(e.m, n.data, n.w, n.ha), !xe(e.m, r, i, a)) {
										e.a = 3;
										break e;
									}
									if (e.xb = hi, n.width = r[0], n.height = i[0], !Pe(r[0], i[0], 1, e, null)) break e;
									return 1;
								}
								return t(e.a != 0), 0;
							}(e, i)) {
								if (i = (n = Rn(i.width, i.height, s.Oa, s.ba)) == 0) {
									e: {
										i = e;
										r: for (;;) {
											if (i == null) {
												i = 0;
												break e;
											}
											if (t(i.s.yc != null), t(i.s.Ya != null), t(0 < i.s.Wb), t((r = i.l) != null), t((a = r.ma) != null), i.xb != 0) {
												if (i.ca = a.ba, i.tb = a.tb, t(i.ca != null), !In(a.Oa, r, zr)) {
													i.a = 2;
													break r;
												}
												if (!Fe(i, r.width) || r.da) break r;
												if ((r.da || K(i.ca.S)) && _n(), 11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), i.ca.f.kb.F != null && _n()), i.Pb && 0 < i.s.ua && i.s.vb.X == null && !N(i.s.vb, i.s.Wa.Xa)) {
													i.a = 1;
													break r;
												}
												i.xb = 0;
											}
											if (!je(i, i.V, i.Ba, i.c, i.i, r.o, De)) break r;
											a.Dc = i.Ma, i = 1;
											break e;
										}
										t(i.a != 0), i = 0;
									}
									i = !i;
								}
								i && (n = e.a);
							} else n = e.a;
						} else {
							if ((e = new Ze()) == null) {
								s = 1;
								break t;
							}
							if (e.Fa = a.na, e.P = a.P, e.qc = a.Sa, et(e, i)) {
								if ((n = Rn(i.width, i.height, s.Oa, s.ba)) == 0) {
									if (e.Aa = 0, r = s.Oa, t((a = e) != null), r != null) {
										if (0 < (l = 0 > (l = r.Md) ? 0 : 100 < l ? 255 : 255 * l / 100)) {
											for (u = d = 0; 4 > u; ++u) 12 > (f = a.pb[u]).lc && (f.ia = l * Bi[0 > f.lc ? 0 : f.lc] >> 3), d |= f.ia;
											d && (alert("todo:VP8InitRandom"), a.ia = 1);
										}
										a.Ga = r.Id, 100 < a.Ga ? a.Ga = 100 : 0 > a.Ga && (a.Ga = 0);
									}
									rt(e, i) || (n = e.a);
								}
							} else n = e.a;
						}
						n == 0 && s.Oa != null && s.Oa.fd && (n = Ln(s.ba));
					}
					s = n;
				}
				o = s == 0 ? 11 > o ? c.f.RGBA.eb : c.f.kb.y : null;
			} else o = null;
			return o;
		};
		var Hi = [
			3,
			4,
			3,
			4,
			4,
			2,
			2,
			4,
			4,
			4,
			2,
			1,
			1
		];
	};
	function l(e, t) {
		for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(e[t++]);
		return n;
	}
	function u(e, t) {
		return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16) >>> 0;
	}
	function d(e, t) {
		return (e[t + 0] << 0 | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
	}
	new c();
	var f = [0], p = [0], m = [], h = new c(), g = e, _ = function(e, t) {
		var n = {}, r = 0, i = !1, a = 0, o = 0;
		if (n.frames = [], !function(e, t, n, r) {
			for (var i = 0; i < r; i++) if (e[t + i] != n.charCodeAt(i)) return !0;
			return !1;
		}(e, t, "RIFF", 4)) {
			var s, c;
			for (d(e, t += 4), t += 8; t < e.length;) {
				var f = l(e, t), p = d(e, t += 4);
				t += 4;
				var m = p + (1 & p);
				switch (f) {
					case "VP8 ":
					case "VP8L":
						n.frames[r] === void 0 && (n.frames[r] = {}), (_ = n.frames[r]).src_off = i ? o : t - 8, _.src_size = a + p + 8, r++, i && (i = !1, a = 0, o = 0);
						break;
					case "VP8X":
						(_ = n.header = {}).feature_flags = e[t];
						var h = t + 4;
						_.canvas_width = 1 + u(e, h), h += 3, _.canvas_height = 1 + u(e, h), h += 3;
						break;
					case "ALPH":
						i = !0, a = m + 8, o = t - 8;
						break;
					case "ANIM":
						(_ = n.header).bgcolor = d(e, t), h = t + 4, _.loop_count = (s = e)[(c = h) + 0] << 0 | s[c + 1] << 8, h += 2;
						break;
					case "ANMF":
						var g, _;
						(_ = n.frames[r] = {}).offset_x = 2 * u(e, t), t += 3, _.offset_y = 2 * u(e, t), t += 3, _.width = 1 + u(e, t), t += 3, _.height = 1 + u(e, t), t += 3, _.duration = u(e, t), t += 3, g = e[t++], _.dispose = 1 & g, _.blend = g >> 1 & 1;
				}
				f != "ANMF" && (t += m);
			}
			return n;
		}
	}(g, 0);
	_.response = g, _.rgbaoutput = !0, _.dataurl = !1;
	var v = _.header ? _.header : null, y = _.frames ? _.frames : null;
	if (v) {
		v.loop_counter = v.loop_count, f = [v.canvas_height], p = [v.canvas_width];
		for (var b = 0; b < y.length && y[b].blend != 0; b++);
	}
	var x = y[0], S = h.WebPDecodeRGBA(g, x.src_off, x.src_size, p, f);
	x.rgba = S, x.imgwidth = p[0], x.imgheight = f[0];
	for (var C = 0; C < p[0] * f[0] * 4; C++) m[C] = S[C];
	return this.width = p, this.height = f, this.data = m, this;
}
var Z, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Q, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, $, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr = n((() => {
	o(), Re(), Z = function() {
		return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
	}(), wt = {
		log: Be,
		warn: function(e) {
			Z.console && (typeof Z.console.warn == "function" ? Z.console.warn.apply(Z.console, arguments) : Be.call(null, arguments));
		},
		error: function(e) {
			Z.console && (typeof Z.console.error == "function" ? Z.console.error.apply(Z.console, arguments) : Be(e));
		}
	}, Dt = Z.saveAs || ((typeof window > "u" ? "undefined" : s(window)) !== "object" || window !== Z ? function() {} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(e, t, n) {
		var r = Z.URL || Z.webkitURL, i = document.createElement("a");
		t = t || e.name || "download", i.download = t, i.rel = "noopener", typeof e == "string" ? (i.href = e, i.origin === location.origin ? Ue(i) : He(i.href) ? Ve(e, t, n) : Ue(i, i.target = "_blank")) : (i.href = r.createObjectURL(e), setTimeout((function() {
			r.revokeObjectURL(i.href);
		}), 4e4), setTimeout((function() {
			Ue(i);
		}), 0));
	} : "msSaveOrOpenBlob" in navigator ? function(e, t, n) {
		if (t = t || e.name || "download", typeof e == "string") if (He(e)) Ve(e, t, n);
		else {
			var r = document.createElement("a");
			r.href = e, r.target = "_blank", setTimeout((function() {
				Ue(r);
			}));
		}
		else navigator.msSaveOrOpenBlob(function(e, t) {
			return t === void 0 ? t = { autoBom: !1 } : s(t) !== "object" && (wt.warn("Deprecated: Expected third argument to be a object"), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
		}(e, n), t);
	} : function(e, t, n, r) {
		if ((r ||= open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ve(e, t, n);
		var i = e.type === "application/octet-stream", a = /constructor/i.test(Z.HTMLElement) || Z.safari, o = /CriOS\/[\d]+/.test(navigator.userAgent);
		if ((o || i && a) && (typeof FileReader > "u" ? "undefined" : s(FileReader)) === "object") {
			var c = new FileReader();
			c.onloadend = function() {
				var e = c.result;
				e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location = e, r = null;
			}, c.readAsDataURL(e);
		} else {
			var l = Z.URL || Z.webkitURL, u = l.createObjectURL(e);
			r ? r.location = u : location.href = u, r = null, setTimeout((function() {
				l.revokeObjectURL(u);
			}), 4e4);
		}
	}), Tt = Z.atob.bind(Z), Et = Z.btoa.bind(Z), Ot = "0123456789abcdef".split(""), kt = function(e) {
		for (var t = 0; t < e.length; t++) e[t] = $e(e[t]);
		return e.join("");
	}(Ze("hello")) != "5d41402abc4b2a76b9719d911017c592", At = {
		print: 4,
		modify: 8,
		copy: 16,
		"annot-forms": 32
	}, it.prototype.lsbFirstWord = function(e) {
		return String.fromCharCode(e >> 0 & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255);
	}, it.prototype.toHexString = function(e) {
		return e.split("").map((function(e) {
			return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
		})).join("");
	}, it.prototype.hexToBytes = function(e) {
		for (var t = [], n = 0; n < e.length; n += 2) t.push(String.fromCharCode(parseInt(e.substr(n, 2), 16)));
		return t.join("");
	}, it.prototype.processOwnerPassword = function(e, t) {
		return rt(tt(t).substr(0, 5), e);
	}, it.prototype.encryptor = function(e, t) {
		var n = tt(this.encryptionKey + String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
		return function(e) {
			return rt(n, e);
		};
	}, st.prototype.equals = function(e) {
		var t, n = "id,objectNumber,equals";
		if (!e || s(e) !== s(this)) return !1;
		var r = 0;
		for (t in this) if (!(n.indexOf(t) >= 0)) {
			if (this.hasOwnProperty(t) && !e.hasOwnProperty(t) || this[t] !== e[t]) return !1;
			r++;
		}
		for (t in e) e.hasOwnProperty(t) && n.indexOf(t) < 0 && r--;
		return r === 0;
	}, X.API = { events: [] }, X.version = "2.5.1", jt = X.API, Mt = 1, Nt = function(e) {
		return e.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
	}, Pt = function(e) {
		return e.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
	}, Q = function(e) {
		return e.toFixed(2);
	}, Ft = function(e) {
		return e.toFixed(5);
	}, jt.__acroform__ = {}, It = function(e, t) {
		e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
	}, Lt = function(e) {
		return e * Mt;
	}, Rt = function(e) {
		var t = new nn(), n = $.internal.getHeight(e) || 0, r = $.internal.getWidth(e) || 0;
		return t.BBox = [
			0,
			0,
			Number(Q(r)),
			Number(Q(n))
		], t;
	}, zt = jt.__acroform__.setBit = function(e, t) {
		if (e ||= 0, t ||= 0, isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
		return e |= 1 << t;
	}, Bt = jt.__acroform__.clearBit = function(e, t) {
		if (e ||= 0, t ||= 0, isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
		return e &= ~(1 << t);
	}, Vt = jt.__acroform__.getBit = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
		return e & 1 << t ? 1 : 0;
	}, Ht = jt.__acroform__.getBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
		return Vt(e, t - 1);
	}, Ut = jt.__acroform__.setBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
		return zt(e, t - 1);
	}, Wt = jt.__acroform__.clearBitForPdf = function(e, t) {
		if (isNaN(e) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
		return Bt(e, t - 1);
	}, Gt = jt.__acroform__.calculateCoordinates = function(e, t) {
		var n = t.internal.getHorizontalCoordinate, r = t.internal.getVerticalCoordinate, i = e[0], a = e[1], o = e[2], s = e[3], c = {};
		return c.lowerLeft_X = n(i) || 0, c.lowerLeft_Y = r(a + s) || 0, c.upperRight_X = n(i + o) || 0, c.upperRight_Y = r(a) || 0, [
			Number(Q(c.lowerLeft_X)),
			Number(Q(c.lowerLeft_Y)),
			Number(Q(c.upperRight_X)),
			Number(Q(c.upperRight_Y))
		];
	}, Kt = function(e) {
		if (e.appearanceStreamContent) return e.appearanceStreamContent;
		if (e.V || e.DV) {
			var t = [], n = qt(e, e._V || e.DV), r = e.scope.internal.getFont(e.fontName, e.fontStyle).id;
			t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e.scope.__private__.encodeColorString(e.color)), t.push("/" + r + " " + Q(n.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(n.text), t.push("ET"), t.push("Q"), t.push("EMC");
			var i = Rt(e);
			return i.scope = e.scope, i.stream = t.join("\n"), i;
		}
	}, qt = function(e, t) {
		var n = e.fontSize === 0 ? e.maxFontSize : e.fontSize, r = {
			text: "",
			fontSize: ""
		}, i = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
		i = e.multiline ? i.map((function(e) {
			return e.split("\n");
		})) : i.map((function(e) {
			return [e];
		}));
		var a = n, o = $.internal.getHeight(e) || 0;
		o = o < 0 ? -o : o;
		var s = $.internal.getWidth(e) || 0;
		s = s < 0 ? -s : s;
		var c = function(t, n, r) {
			return t + 1 < i.length ? Jt(n + " " + i[t + 1][0], e, r).width <= s - 4 : !1;
		};
		a++;
		t: for (; a > 0;) {
			t = "", a--;
			var l, u, d = Jt("3", e, a).height, f = e.multiline ? o - a : (o - d) / 2, p = f += 2, m = 0, h = 0, g = 0;
			if (a <= 0) {
				t = "(...) Tj\n", t += "% Width of Text: " + Jt(t, e, a = 12).width + ", FieldWidth:" + s + "\n";
				break;
			}
			for (var _ = "", v = 0, y = 0; y < i.length; y++) if (i.hasOwnProperty(y)) {
				var b = !1;
				if (i[y].length !== 1 && g !== i[y].length - 1) {
					if ((d + 2) * (v + 2) + 2 > o) continue t;
					_ += i[y][g], b = !0, h = y, y--;
				} else {
					_ = (_ += i[y][g] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
					var x = parseInt(y), S = c(x, _, a), C = y >= i.length - 1;
					if (S && !C) {
						_ += " ", g = 0;
						continue;
					}
					if (S || C) {
						if (C) h = x;
						else if (e.multiline && (d + 2) * (v + 2) + 2 > o) continue t;
					} else {
						if (!e.multiline || (d + 2) * (v + 2) + 2 > o) continue t;
						h = x;
					}
				}
				for (var w = "", T = m; T <= h; T++) {
					var E = i[T];
					if (e.multiline) {
						if (T === h) {
							w += E[g] + " ", g = (g + 1) % E.length;
							continue;
						}
						if (T === m) {
							w += E[E.length - 1] + " ";
							continue;
						}
					}
					w += E[0] + " ";
				}
				switch (w = w.substr(w.length - 1) == " " ? w.substr(0, w.length - 1) : w, u = Jt(w, e, a).width, e.textAlign) {
					case "right":
						l = s - u - 2;
						break;
					case "center":
						l = (s - u) / 2;
						break;
					default: l = 2;
				}
				t += Q(l) + " " + Q(p) + " Td\n", t += "(" + Nt(w) + ") Tj\n", t += -Q(l) + " 0 Td\n", p = -(a + 2), u = 0, m = b ? h : h + 1, v++, _ = "";
			}
			break;
		}
		return r.text = t, r.fontSize = a, r;
	}, Jt = function(e, t, n) {
		var r = t.scope.internal.getFont(t.fontName, t.fontStyle), i = t.scope.getStringUnitWidth(e, {
			font: r,
			fontSize: parseFloat(n),
			charSpace: 0
		}) * parseFloat(n);
		return {
			height: t.scope.getStringUnitWidth("3", {
				font: r,
				fontSize: parseFloat(n),
				charSpace: 0
			}) * parseFloat(n) * 1.5,
			width: i
		};
	}, Yt = {
		fields: [],
		xForms: [],
		acroFormDictionaryRoot: null,
		printedOut: !1,
		internal: null,
		isInitialized: !1
	}, Xt = function(e, t) {
		var n = {
			type: "reference",
			object: e
		};
		t.internal.getPageInfo(e.page).pageContext.annotations.find((function(e) {
			return e.type === n.type && e.object === n.object;
		})) === void 0 && t.internal.getPageInfo(e.page).pageContext.annotations.push(n);
	}, Zt = function(e, t) {
		for (var n in e) if (e.hasOwnProperty(n)) {
			var r = n, i = e[n];
			t.internal.newObjectDeferredBegin(i.objId, !0), s(i) === "object" && typeof i.putStream == "function" && i.putStream(), delete e[r];
		}
	}, Qt = function(e, t) {
		if (t.scope = e, e.internal !== void 0 && (e.internal.acroformPlugin === void 0 || !1 === e.internal.acroformPlugin.isInitialized)) {
			if (an.FieldNum = 0, e.internal.acroformPlugin = JSON.parse(JSON.stringify(Yt)), e.internal.acroformPlugin.acroFormDictionaryRoot) throw Error("Exception while creating AcroformDictionary");
			Mt = e.internal.scaleFactor, e.internal.acroformPlugin.acroFormDictionaryRoot = new rn(), e.internal.acroformPlugin.acroFormDictionaryRoot.scope = e, e.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e.internal.events.subscribe("postPutResources", (function() {
				(function(e) {
					e.internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID, e.internal.acroformPlugin.printedOut = !0;
				})(e);
			})), e.internal.events.subscribe("buildDocument", (function() {
				(function(e) {
					e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
					var t = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
					for (var n in t) if (t.hasOwnProperty(n)) {
						var r = t[n];
						r.objId = void 0, r.hasAnnotation && Xt(r, e);
					}
				})(e);
			})), e.internal.events.subscribe("putCatalog", (function() {
				(function(e) {
					if (e.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw Error("putCatalogCallback: Root missing.");
					e.internal.write("/AcroForm " + e.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
				})(e);
			})), e.internal.events.subscribe("postPutPages", (function(t) {
				(function(e, t) {
					var n = !e;
					for (var r in e || (t.internal.newObjectDeferredBegin(t.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), t.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e ||= t.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (e.hasOwnProperty(r)) {
						var i = e[r], a = [], o = i.Rect;
						if (i.Rect &&= Gt(i.Rect, t), t.internal.newObjectDeferredBegin(i.objId, !0), i.DA = $.createDefaultAppearanceStream(i), s(i) === "object" && typeof i.getKeyValueListForStream == "function" && (a = i.getKeyValueListForStream()), i.Rect = o, i.hasAppearanceStream && !i.appearanceStreamContent) {
							var c = Kt(i);
							a.push({
								key: "AP",
								value: "<</N " + c + ">>"
							}), t.internal.acroformPlugin.xForms.push(c);
						}
						if (i.appearanceStreamContent) {
							var l = "";
							for (var u in i.appearanceStreamContent) if (i.appearanceStreamContent.hasOwnProperty(u)) {
								var d = i.appearanceStreamContent[u];
								if (l += "/" + u + " ", l += "<<", Object.keys(d).length >= 1 || Array.isArray(d)) {
									for (var r in d) if (d.hasOwnProperty(r)) {
										var f = d[r];
										typeof f == "function" && (f = f.call(t, i)), l += "/" + r + " " + f + " ", t.internal.acroformPlugin.xForms.indexOf(f) >= 0 || t.internal.acroformPlugin.xForms.push(f);
									}
								} else typeof (f = d) == "function" && (f = f.call(t, i)), l += "/" + r + " " + f, t.internal.acroformPlugin.xForms.indexOf(f) >= 0 || t.internal.acroformPlugin.xForms.push(f);
								l += ">>";
							}
							a.push({
								key: "AP",
								value: "<<\n" + l + ">>"
							});
						}
						t.internal.putStream({
							additionalKeyValues: a,
							objectId: i.objId
						}), t.internal.out("endobj");
					}
					n && Zt(t.internal.acroformPlugin.xForms, t);
				})(t, e);
			})), e.internal.acroformPlugin.isInitialized = !0;
		}
	}, $t = jt.__acroform__.arrayToPdfArray = function(e, t, n) {
		var r = function(e) {
			return e;
		};
		if (Array.isArray(e)) {
			for (var i = "[", a = 0; a < e.length; a++) switch (a !== 0 && (i += " "), s(e[a])) {
				case "boolean":
				case "number":
				case "object":
					i += e[a].toString();
					break;
				case "string": e[a].substr(0, 1) === "/" ? i += e[a].toString() : (t !== void 0 && n && (r = n.internal.getEncryptor(t)), i += "(" + Nt(r(e[a].toString())) + ")");
			}
			return i += "]";
		}
		throw Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
	}, en = function(e, t, n) {
		var r = function(e) {
			return e;
		};
		return t !== void 0 && n && (r = n.internal.getEncryptor(t)), (e ||= "").toString(), e = "(" + Nt(r(e)) + ")";
	}, tn = function() {
		this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
			get: function() {
				if (this._objId === void 0) {
					if (this.scope === void 0) return;
					this._objId = this.scope.internal.newObjectDeferred();
				}
				return this._objId;
			},
			set: function(e) {
				this._objId = e;
			}
		}), Object.defineProperty(this, "scope", {
			value: this._scope,
			writable: !0
		});
	}, tn.prototype.toString = function() {
		return this.objId + " 0 R";
	}, tn.prototype.putStream = function() {
		var e = this.getKeyValueListForStream();
		this.scope.internal.putStream({
			data: this.stream,
			additionalKeyValues: e,
			objectId: this.objId
		}), this.scope.internal.out("endobj");
	}, tn.prototype.getKeyValueListForStream = function() {
		var e = [], t = Object.getOwnPropertyNames(this).filter((function(e) {
			return e != "content" && e != "appearanceStreamContent" && e != "scope" && e != "objId" && e.substring(0, 1) != "_";
		}));
		for (var n in t) if (!1 === Object.getOwnPropertyDescriptor(this, t[n]).configurable) {
			var r = t[n], i = this[r];
			i && (Array.isArray(i) ? e.push({
				key: r,
				value: $t(i, this.objId, this.scope)
			}) : i instanceof tn ? (i.scope = this.scope, e.push({
				key: r,
				value: i.objId + " 0 R"
			})) : typeof i != "function" && e.push({
				key: r,
				value: i
			}));
		}
		return e;
	}, nn = function() {
		tn.call(this), Object.defineProperty(this, "Type", {
			value: "/XObject",
			configurable: !1,
			writable: !0
		}), Object.defineProperty(this, "Subtype", {
			value: "/Form",
			configurable: !1,
			writable: !0
		}), Object.defineProperty(this, "FormType", {
			value: 1,
			configurable: !1,
			writable: !0
		});
		var e, t = [];
		Object.defineProperty(this, "BBox", {
			configurable: !1,
			get: function() {
				return t;
			},
			set: function(e) {
				t = e;
			}
		}), Object.defineProperty(this, "Resources", {
			value: "2 0 R",
			configurable: !1,
			writable: !0
		}), Object.defineProperty(this, "stream", {
			enumerable: !1,
			configurable: !0,
			set: function(t) {
				e = t.trim();
			},
			get: function() {
				return e || null;
			}
		});
	}, It(nn, tn), rn = function() {
		tn.call(this);
		var e, t = [];
		Object.defineProperty(this, "Kids", {
			enumerable: !1,
			configurable: !0,
			get: function() {
				return t.length > 0 ? t : void 0;
			}
		}), Object.defineProperty(this, "Fields", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return t;
			}
		}), Object.defineProperty(this, "DA", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				if (e) {
					var t = function(e) {
						return e;
					};
					return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + Nt(t(e)) + ")";
				}
			},
			set: function(t) {
				e = t;
			}
		});
	}, It(rn, tn), an = function e() {
		tn.call(this);
		var t = 4;
		Object.defineProperty(this, "F", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return t;
			},
			set: function(e) {
				if (isNaN(e)) throw Error("Invalid value \"" + e + "\" for attribute F supplied.");
				t = e;
			}
		}), Object.defineProperty(this, "showWhenPrinted", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(t, 3);
			},
			set: function(e) {
				!!e == 1 ? this.F = Ut(t, 3) : this.F = Wt(t, 3);
			}
		});
		var n = 0;
		Object.defineProperty(this, "Ff", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return n;
			},
			set: function(e) {
				if (isNaN(e)) throw Error("Invalid value \"" + e + "\" for attribute Ff supplied.");
				n = e;
			}
		});
		var r = [];
		Object.defineProperty(this, "Rect", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				if (r.length !== 0) return r;
			},
			set: function(e) {
				r = e === void 0 ? [] : e;
			}
		}), Object.defineProperty(this, "x", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !r || isNaN(r[0]) ? 0 : r[0];
			},
			set: function(e) {
				r[0] = e;
			}
		}), Object.defineProperty(this, "y", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !r || isNaN(r[1]) ? 0 : r[1];
			},
			set: function(e) {
				r[1] = e;
			}
		}), Object.defineProperty(this, "width", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !r || isNaN(r[2]) ? 0 : r[2];
			},
			set: function(e) {
				r[2] = e;
			}
		}), Object.defineProperty(this, "height", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !r || isNaN(r[3]) ? 0 : r[3];
			},
			set: function(e) {
				r[3] = e;
			}
		});
		var i = "";
		Object.defineProperty(this, "FT", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return i;
			},
			set: function(e) {
				switch (e) {
					case "/Btn":
					case "/Tx":
					case "/Ch":
					case "/Sig":
						i = e;
						break;
					default: throw Error("Invalid value \"" + e + "\" for attribute FT supplied.");
				}
			}
		});
		var a = null;
		Object.defineProperty(this, "T", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				if (!a || a.length < 1) {
					if (this instanceof pn) return;
					a = "FieldObject" + e.FieldNum++;
				}
				var t = function(e) {
					return e;
				};
				return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + Nt(t(a)) + ")";
			},
			set: function(e) {
				a = e.toString();
			}
		}), Object.defineProperty(this, "fieldName", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				return a;
			},
			set: function(e) {
				a = e;
			}
		});
		var o = "helvetica";
		Object.defineProperty(this, "fontName", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return o;
			},
			set: function(e) {
				o = e;
			}
		});
		var s = "normal";
		Object.defineProperty(this, "fontStyle", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return s;
			},
			set: function(e) {
				s = e;
			}
		});
		var c = 0;
		Object.defineProperty(this, "fontSize", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return c;
			},
			set: function(e) {
				c = e;
			}
		});
		var l = void 0;
		Object.defineProperty(this, "maxFontSize", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return l === void 0 ? 50 / Mt : l;
			},
			set: function(e) {
				l = e;
			}
		});
		var u = "black";
		Object.defineProperty(this, "color", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return u;
			},
			set: function(e) {
				u = e;
			}
		});
		var d = "/F1 0 Tf 0 g";
		Object.defineProperty(this, "DA", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				if (!(!d || this instanceof pn || this instanceof hn)) return en(d, this.objId, this.scope);
			},
			set: function(e) {
				e = e.toString(), d = e;
			}
		});
		var f = null;
		Object.defineProperty(this, "DV", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				if (f) return this instanceof un == 0 ? en(f, this.objId, this.scope) : f;
			},
			set: function(e) {
				e = e.toString(), f = this instanceof un == 0 ? e.substr(0, 1) === "(" ? Pt(e.substr(1, e.length - 2)) : Pt(e) : e;
			}
		}), Object.defineProperty(this, "defaultValue", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return this instanceof un == 1 ? Pt(f.substr(1, f.length - 1)) : f;
			},
			set: function(e) {
				e = e.toString(), f = this instanceof un == 1 ? "/" + e : e;
			}
		});
		var p = null;
		Object.defineProperty(this, "_V", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				if (p) return p;
			},
			set: function(e) {
				this.V = e;
			}
		}), Object.defineProperty(this, "V", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				if (p) return this instanceof un == 0 ? en(p, this.objId, this.scope) : p;
			},
			set: function(e) {
				e = e.toString(), p = this instanceof un == 0 ? e.substr(0, 1) === "(" ? Pt(e.substr(1, e.length - 2)) : Pt(e) : e;
			}
		}), Object.defineProperty(this, "value", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return this instanceof un == 1 ? Pt(p.substr(1, p.length - 1)) : p;
			},
			set: function(e) {
				e = e.toString(), p = this instanceof un == 1 ? "/" + e : e;
			}
		}), Object.defineProperty(this, "hasAnnotation", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return this.Rect;
			}
		}), Object.defineProperty(this, "Type", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return this.hasAnnotation ? "/Annot" : null;
			}
		}), Object.defineProperty(this, "Subtype", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return this.hasAnnotation ? "/Widget" : null;
			}
		});
		var m, h = !1;
		Object.defineProperty(this, "hasAppearanceStream", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return h;
			},
			set: function(e) {
				e = !!e, h = e;
			}
		}), Object.defineProperty(this, "page", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				if (m) return m;
			},
			set: function(e) {
				m = e;
			}
		}), Object.defineProperty(this, "readOnly", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 1);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 1) : this.Ff = Wt(this.Ff, 1);
			}
		}), Object.defineProperty(this, "required", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 2);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 2) : this.Ff = Wt(this.Ff, 2);
			}
		}), Object.defineProperty(this, "noExport", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 3);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 3) : this.Ff = Wt(this.Ff, 3);
			}
		});
		var g = null;
		Object.defineProperty(this, "Q", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				if (g !== null) return g;
			},
			set: function(e) {
				if ([
					0,
					1,
					2
				].indexOf(e) === -1) throw Error("Invalid value \"" + e + "\" for attribute Q supplied.");
				g = e;
			}
		}), Object.defineProperty(this, "textAlign", {
			get: function() {
				var e;
				switch (g) {
					case 0:
					default:
						e = "left";
						break;
					case 1:
						e = "center";
						break;
					case 2: e = "right";
				}
				return e;
			},
			configurable: !0,
			enumerable: !0,
			set: function(e) {
				switch (e) {
					case "right":
					case 2:
						g = 2;
						break;
					case "center":
					case 1:
						g = 1;
						break;
					default: g = 0;
				}
			}
		});
	}, It(an, tn), on = function() {
		an.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
		var e = 0;
		Object.defineProperty(this, "TI", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t;
			}
		}), Object.defineProperty(this, "topIndex", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t;
			}
		});
		var t = [];
		Object.defineProperty(this, "Opt", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return $t(t, this.objId, this.scope);
			},
			set: function(e) {
				var n, r = [];
				typeof (n = e) == "string" && (r = function(e, t, n) {
					n ||= 1;
					for (var r, i = []; r = t.exec(e);) i.push(r[n]);
					return i;
				}(n, /\((.*?)\)/g)), t = r;
			}
		}), this.getOptions = function() {
			return t;
		}, this.setOptions = function(e) {
			t = e, this.sort && t.sort();
		}, this.addOption = function(e) {
			e = (e ||= "").toString(), t.push(e), this.sort && t.sort();
		}, this.removeOption = function(e, n) {
			for (n ||= !1, e = (e ||= "").toString(); t.indexOf(e) !== -1 && (t.splice(t.indexOf(e), 1), !1 !== n););
		}, Object.defineProperty(this, "combo", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 18);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 18) : this.Ff = Wt(this.Ff, 18);
			}
		}), Object.defineProperty(this, "edit", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 19);
			},
			set: function(e) {
				!0 === this.combo && (!!e == 1 ? this.Ff = Ut(this.Ff, 19) : this.Ff = Wt(this.Ff, 19));
			}
		}), Object.defineProperty(this, "sort", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 20);
			},
			set: function(e) {
				!!e == 1 ? (this.Ff = Ut(this.Ff, 20), t.sort()) : this.Ff = Wt(this.Ff, 20);
			}
		}), Object.defineProperty(this, "multiSelect", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 22);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 22) : this.Ff = Wt(this.Ff, 22);
			}
		}), Object.defineProperty(this, "doNotSpellCheck", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 23);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 23) : this.Ff = Wt(this.Ff, 23);
			}
		}), Object.defineProperty(this, "commitOnSelChange", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 27);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 27) : this.Ff = Wt(this.Ff, 27);
			}
		}), this.hasAppearanceStream = !1;
	}, It(on, an), sn = function() {
		on.call(this), this.fontName = "helvetica", this.combo = !1;
	}, It(sn, on), cn = function() {
		sn.call(this), this.combo = !0;
	}, It(cn, sn), ln = function() {
		cn.call(this), this.edit = !0;
	}, It(ln, cn), un = function() {
		an.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 15);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 15) : this.Ff = Wt(this.Ff, 15);
			}
		}), Object.defineProperty(this, "radio", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 16);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 16) : this.Ff = Wt(this.Ff, 16);
			}
		}), Object.defineProperty(this, "pushButton", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 17);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 17) : this.Ff = Wt(this.Ff, 17);
			}
		}), Object.defineProperty(this, "radioIsUnison", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 26);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 26) : this.Ff = Wt(this.Ff, 26);
			}
		});
		var e, t = {};
		Object.defineProperty(this, "MK", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				var e = function(e) {
					return e;
				};
				if (this.scope && (e = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
					var n, r = [];
					for (n in r.push("<<"), t) r.push("/" + n + " (" + Nt(e(t[n])) + ")");
					return r.push(">>"), r.join("\n");
				}
			},
			set: function(e) {
				s(e) === "object" && (t = e);
			}
		}), Object.defineProperty(this, "caption", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return t.CA || "";
			},
			set: function(e) {
				typeof e == "string" && (t.CA = e);
			}
		}), Object.defineProperty(this, "AS", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t;
			}
		}), Object.defineProperty(this, "appearanceState", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return e.substr(1, e.length - 1);
			},
			set: function(t) {
				e = "/" + t;
			}
		});
	}, It(un, an), dn = function() {
		un.call(this), this.pushButton = !0;
	}, It(dn, un), fn = function() {
		un.call(this), this.radio = !0, this.pushButton = !1;
		var e = [];
		Object.defineProperty(this, "Kids", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t === void 0 ? [] : t;
			}
		});
	}, It(fn, un), pn = function() {
		var e, t;
		an.call(this), Object.defineProperty(this, "Parent", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t;
			}
		}), Object.defineProperty(this, "optionName", {
			enumerable: !1,
			configurable: !0,
			get: function() {
				return t;
			},
			set: function(e) {
				t = e;
			}
		});
		var n, r = {};
		Object.defineProperty(this, "MK", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				var e = function(e) {
					return e;
				};
				this.scope && (e = this.scope.internal.getEncryptor(this.objId));
				var t, n = [];
				for (t in n.push("<<"), r) n.push("/" + t + " (" + Nt(e(r[t])) + ")");
				return n.push(">>"), n.join("\n");
			},
			set: function(e) {
				s(e) === "object" && (r = e);
			}
		}), Object.defineProperty(this, "caption", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return r.CA || "";
			},
			set: function(e) {
				typeof e == "string" && (r.CA = e);
			}
		}), Object.defineProperty(this, "AS", {
			enumerable: !1,
			configurable: !1,
			get: function() {
				return n;
			},
			set: function(e) {
				n = e;
			}
		}), Object.defineProperty(this, "appearanceState", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return n.substr(1, n.length - 1);
			},
			set: function(e) {
				n = "/" + e;
			}
		}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = $.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
	}, It(pn, an), fn.prototype.setAppearance = function(e) {
		if (!("createAppearanceStream" in e) || !("getCA" in e)) throw Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
		for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
			var n = this.Kids[t];
			n.appearanceStreamContent = e.createAppearanceStream(n.optionName), n.caption = e.getCA();
		}
	}, fn.prototype.createOption = function(e) {
		var t = new pn();
		return t.Parent = this, t.optionName = e, this.Kids.push(t), _n.call(this.scope, t), t;
	}, mn = function() {
		un.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = $.CheckBox.createAppearanceStream();
	}, It(mn, un), hn = function() {
		an.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 13);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 13) : this.Ff = Wt(this.Ff, 13);
			}
		}), Object.defineProperty(this, "fileSelect", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 21);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 21) : this.Ff = Wt(this.Ff, 21);
			}
		}), Object.defineProperty(this, "doNotSpellCheck", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 23);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 23) : this.Ff = Wt(this.Ff, 23);
			}
		}), Object.defineProperty(this, "doNotScroll", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 24);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 24) : this.Ff = Wt(this.Ff, 24);
			}
		}), Object.defineProperty(this, "comb", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 25);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 25) : this.Ff = Wt(this.Ff, 25);
			}
		}), Object.defineProperty(this, "richText", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 26);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 26) : this.Ff = Wt(this.Ff, 26);
			}
		});
		var e = null;
		Object.defineProperty(this, "MaxLen", {
			enumerable: !0,
			configurable: !1,
			get: function() {
				return e;
			},
			set: function(t) {
				e = t;
			}
		}), Object.defineProperty(this, "maxLength", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return e;
			},
			set: function(t) {
				Number.isInteger(t) && (e = t);
			}
		}), Object.defineProperty(this, "hasAppearanceStream", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return this.V || this.DV;
			}
		});
	}, It(hn, an), gn = function() {
		hn.call(this), Object.defineProperty(this, "password", {
			enumerable: !0,
			configurable: !0,
			get: function() {
				return !!Ht(this.Ff, 14);
			},
			set: function(e) {
				!!e == 1 ? this.Ff = Ut(this.Ff, 14) : this.Ff = Wt(this.Ff, 14);
			}
		}), this.password = !0;
	}, It(gn, hn), $ = {
		CheckBox: {
			createAppearanceStream: function() {
				return {
					N: { On: $.CheckBox.YesNormal },
					D: {
						On: $.CheckBox.YesPushDown,
						Off: $.CheckBox.OffPushDown
					}
				};
			},
			YesPushDown: function(e) {
				var t = Rt(e);
				t.scope = e.scope;
				var n = [], r = e.scope.internal.getFont(e.fontName, e.fontStyle).id, i = e.scope.__private__.encodeColorString(e.color), a = qt(e, e.caption);
				return n.push("0.749023 g"), n.push("0 0 " + Q($.internal.getWidth(e)) + " " + Q($.internal.getHeight(e)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + Q(a.fontSize) + " Tf " + i), n.push("BT"), n.push(a.text), n.push("ET"), n.push("Q"), n.push("EMC"), t.stream = n.join("\n"), t;
			},
			YesNormal: function(e) {
				var t = Rt(e);
				t.scope = e.scope;
				var n = e.scope.internal.getFont(e.fontName, e.fontStyle).id, r = e.scope.__private__.encodeColorString(e.color), i = [], a = $.internal.getHeight(e), o = $.internal.getWidth(e), s = qt(e, e.caption);
				return i.push("1 g"), i.push("0 0 " + Q(o) + " " + Q(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + Q(o - 1) + " " + Q(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + Q(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), t.stream = i.join("\n"), t;
			},
			OffPushDown: function(e) {
				var t = Rt(e);
				t.scope = e.scope;
				var n = [];
				return n.push("0.749023 g"), n.push("0 0 " + Q($.internal.getWidth(e)) + " " + Q($.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t;
			}
		},
		RadioButton: {
			Circle: {
				createAppearanceStream: function(e) {
					var t = {
						D: { Off: $.RadioButton.Circle.OffPushDown },
						N: {}
					};
					return t.N[e] = $.RadioButton.Circle.YesNormal, t.D[e] = $.RadioButton.Circle.YesPushDown, t;
				},
				getCA: function() {
					return "l";
				},
				YesNormal: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = [], r = $.internal.getWidth(e) <= $.internal.getHeight(e) ? $.internal.getWidth(e) / 4 : $.internal.getHeight(e) / 4;
					r = Number((.9 * r).toFixed(5));
					var i = $.internal.Bezier_C, a = Number((r * i).toFixed(5));
					return n.push("q"), n.push("1 0 0 1 " + Ft($.internal.getWidth(e) / 2) + " " + Ft($.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t;
				},
				YesPushDown: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = [], r = $.internal.getWidth(e) <= $.internal.getHeight(e) ? $.internal.getWidth(e) / 4 : $.internal.getHeight(e) / 4;
					r = Number((.9 * r).toFixed(5));
					var i = Number((2 * r).toFixed(5)), a = Number((i * $.internal.Bezier_C).toFixed(5)), o = Number((r * $.internal.Bezier_C).toFixed(5));
					return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Ft($.internal.getWidth(e) / 2) + " " + Ft($.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + Ft($.internal.getWidth(e) / 2) + " " + Ft($.internal.getHeight(e) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t;
				},
				OffPushDown: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = [], r = $.internal.getWidth(e) <= $.internal.getHeight(e) ? $.internal.getWidth(e) / 4 : $.internal.getHeight(e) / 4;
					r = Number((.9 * r).toFixed(5));
					var i = Number((2 * r).toFixed(5)), a = Number((i * $.internal.Bezier_C).toFixed(5));
					return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Ft($.internal.getWidth(e) / 2) + " " + Ft($.internal.getHeight(e) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), n.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), n.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), n.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), n.push("f"), n.push("Q"), t.stream = n.join("\n"), t;
				}
			},
			Cross: {
				createAppearanceStream: function(e) {
					var t = {
						D: { Off: $.RadioButton.Cross.OffPushDown },
						N: {}
					};
					return t.N[e] = $.RadioButton.Cross.YesNormal, t.D[e] = $.RadioButton.Cross.YesPushDown, t;
				},
				getCA: function() {
					return "8";
				},
				YesNormal: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = [], r = $.internal.calculateCross(e);
					return n.push("q"), n.push("1 1 " + Q($.internal.getWidth(e) - 2) + " " + Q($.internal.getHeight(e) - 2) + " re"), n.push("W"), n.push("n"), n.push(Q(r.x1.x) + " " + Q(r.x1.y) + " m"), n.push(Q(r.x2.x) + " " + Q(r.x2.y) + " l"), n.push(Q(r.x4.x) + " " + Q(r.x4.y) + " m"), n.push(Q(r.x3.x) + " " + Q(r.x3.y) + " l"), n.push("s"), n.push("Q"), t.stream = n.join("\n"), t;
				},
				YesPushDown: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = $.internal.calculateCross(e), r = [];
					return r.push("0.749023 g"), r.push("0 0 " + Q($.internal.getWidth(e)) + " " + Q($.internal.getHeight(e)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + Q($.internal.getWidth(e) - 2) + " " + Q($.internal.getHeight(e) - 2) + " re"), r.push("W"), r.push("n"), r.push(Q(n.x1.x) + " " + Q(n.x1.y) + " m"), r.push(Q(n.x2.x) + " " + Q(n.x2.y) + " l"), r.push(Q(n.x4.x) + " " + Q(n.x4.y) + " m"), r.push(Q(n.x3.x) + " " + Q(n.x3.y) + " l"), r.push("s"), r.push("Q"), t.stream = r.join("\n"), t;
				},
				OffPushDown: function(e) {
					var t = Rt(e);
					t.scope = e.scope;
					var n = [];
					return n.push("0.749023 g"), n.push("0 0 " + Q($.internal.getWidth(e)) + " " + Q($.internal.getHeight(e)) + " re"), n.push("f"), t.stream = n.join("\n"), t;
				}
			}
		},
		createDefaultAppearanceStream: function(e) {
			var t = e.scope.internal.getFont(e.fontName, e.fontStyle).id, n = e.scope.__private__.encodeColorString(e.color);
			return "/" + t + " " + e.fontSize + " Tf " + n;
		}
	}, $.internal = {
		Bezier_C: .551915024494,
		calculateCross: function(e) {
			var t = $.internal.getWidth(e), n = $.internal.getHeight(e), r = Math.min(t, n);
			return {
				x1: {
					x: (t - r) / 2,
					y: (n - r) / 2 + r
				},
				x2: {
					x: (t - r) / 2 + r,
					y: (n - r) / 2
				},
				x3: {
					x: (t - r) / 2,
					y: (n - r) / 2
				},
				x4: {
					x: (t - r) / 2 + r,
					y: (n - r) / 2 + r
				}
			};
		}
	}, $.internal.getWidth = function(e) {
		var t = 0;
		return s(e) === "object" && (t = Lt(e.Rect[2])), t;
	}, $.internal.getHeight = function(e) {
		var t = 0;
		return s(e) === "object" && (t = Lt(e.Rect[3])), t;
	}, _n = jt.addField = function(e) {
		if (Qt(this, e), !(e instanceof an)) throw Error("Invalid argument passed to jsPDF.addField.");
		var t;
		return (t = e).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), e.page = e.scope.internal.getCurrentPageInfo().pageNumber, this;
	}, jt.AcroFormChoiceField = on, jt.AcroFormListBox = sn, jt.AcroFormComboBox = cn, jt.AcroFormEditBox = ln, jt.AcroFormButton = un, jt.AcroFormPushButton = dn, jt.AcroFormRadioButton = fn, jt.AcroFormCheckBox = mn, jt.AcroFormTextField = hn, jt.AcroFormPasswordField = gn, jt.AcroFormAppearance = $, jt.AcroForm = {
		ChoiceField: on,
		ListBox: sn,
		ComboBox: cn,
		EditBox: ln,
		Button: un,
		PushButton: dn,
		RadioButton: fn,
		CheckBox: mn,
		TextField: hn,
		PasswordField: gn,
		Appearance: $
	}, X.AcroForm = {
		ChoiceField: on,
		ListBox: sn,
		ComboBox: cn,
		EditBox: ln,
		Button: un,
		PushButton: dn,
		RadioButton: fn,
		CheckBox: mn,
		TextField: hn,
		PasswordField: gn,
		Appearance: $
	}, vn = X.AcroForm, (function(e) {
		e.__addimage__ = {};
		var t = "UNKNOWN", n = {
			PNG: [[
				137,
				80,
				78,
				71
			]],
			TIFF: [[
				77,
				77,
				0,
				42
			], [
				73,
				73,
				42,
				0
			]],
			JPEG: [
				[
					255,
					216,
					255,
					224,
					void 0,
					void 0,
					74,
					70,
					73,
					70,
					0
				],
				[
					255,
					216,
					255,
					225,
					void 0,
					void 0,
					69,
					120,
					105,
					102,
					0,
					0
				],
				[
					255,
					216,
					255,
					219
				],
				[
					255,
					216,
					255,
					238
				]
			],
			JPEG2000: [[
				0,
				0,
				0,
				12,
				106,
				80,
				32,
				32
			]],
			GIF87a: [[
				71,
				73,
				70,
				56,
				55,
				97
			]],
			GIF89a: [[
				71,
				73,
				70,
				56,
				57,
				97
			]],
			WEBP: [[
				82,
				73,
				70,
				70,
				void 0,
				void 0,
				void 0,
				void 0,
				87,
				69,
				66,
				80
			]],
			BMP: [
				[66, 77],
				[66, 65],
				[67, 73],
				[67, 80],
				[73, 67],
				[80, 84]
			]
		}, r = e.__addimage__.getImageFileTypeByImageData = function(e, r) {
			var i, a, o, s, c, l = t;
			if ((r ||= t) === "RGBA" || e.data !== void 0 && e.data instanceof Uint8ClampedArray && "height" in e && "width" in e) return "RGBA";
			if (C(e)) for (c in n) for (o = n[c], i = 0; i < o.length; i += 1) {
				for (s = !0, a = 0; a < o[i].length; a += 1) if (o[i][a] !== void 0 && o[i][a] !== e[a]) {
					s = !1;
					break;
				}
				if (!0 === s) {
					l = c;
					break;
				}
			}
			else for (c in n) for (o = n[c], i = 0; i < o.length; i += 1) {
				for (s = !0, a = 0; a < o[i].length; a += 1) if (o[i][a] !== void 0 && o[i][a] !== e.charCodeAt(a)) {
					s = !1;
					break;
				}
				if (!0 === s) {
					l = c;
					break;
				}
			}
			return l === t && r !== t && (l = r), l;
		}, i = function e(t) {
			for (var n = this.internal.write, r = this.internal.putStream, i = (0, this.internal.getFilters)(); i.indexOf("FlateEncode") !== -1;) i.splice(i.indexOf("FlateEncode"), 1);
			t.objectId = this.internal.newObject();
			var a = [];
			if (a.push({
				key: "Type",
				value: "/XObject"
			}), a.push({
				key: "Subtype",
				value: "/Image"
			}), a.push({
				key: "Width",
				value: t.width
			}), a.push({
				key: "Height",
				value: t.height
			}), t.colorSpace === _.INDEXED ? a.push({
				key: "ColorSpace",
				value: "[/Indexed /DeviceRGB " + (t.palette.length / 3 - 1) + " " + ("sMask" in t && t.sMask !== void 0 ? t.objectId + 2 : t.objectId + 1) + " 0 R]"
			}) : (a.push({
				key: "ColorSpace",
				value: "/" + t.colorSpace
			}), t.colorSpace === _.DEVICE_CMYK && a.push({
				key: "Decode",
				value: "[1 0 1 0 1 0 1 0]"
			})), a.push({
				key: "BitsPerComponent",
				value: t.bitsPerComponent
			}), "decodeParameters" in t && t.decodeParameters !== void 0 && a.push({
				key: "DecodeParms",
				value: "<<" + t.decodeParameters + ">>"
			}), "transparency" in t && Array.isArray(t.transparency)) {
				for (var o = "", s = 0, c = t.transparency.length; s < c; s++) o += t.transparency[s] + " " + t.transparency[s] + " ";
				a.push({
					key: "Mask",
					value: "[" + o + "]"
				});
			}
			t.sMask !== void 0 && a.push({
				key: "SMask",
				value: t.objectId + 1 + " 0 R"
			});
			var l = t.filter === void 0 ? void 0 : ["/" + t.filter];
			if (r({
				data: t.data,
				additionalKeyValues: a,
				alreadyAppliedFilters: l,
				objectId: t.objectId
			}), n("endobj"), "sMask" in t && t.sMask !== void 0) {
				var u = "/Predictor " + t.predictor + " /Colors 1 /BitsPerComponent " + t.bitsPerComponent + " /Columns " + t.width, d = {
					width: t.width,
					height: t.height,
					colorSpace: "DeviceGray",
					bitsPerComponent: t.bitsPerComponent,
					decodeParameters: u,
					data: t.sMask
				};
				"filter" in t && (d.filter = t.filter), e.call(this, d);
			}
			if (t.colorSpace === _.INDEXED) {
				var f = this.internal.newObject();
				r({
					data: T(new Uint8Array(t.palette)),
					objectId: f
				}), n("endobj");
			}
		}, a = function() {
			var e = this.internal.collections.addImage_images;
			for (var t in e) i.call(this, e[t]);
		}, o = function() {
			var e, t = this.internal.collections.addImage_images, n = this.internal.write;
			for (var r in t) n("/I" + (e = t[r]).index, e.objectId, "0", "R");
		}, c = function() {
			this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", a), this.internal.events.subscribe("putXobjectDict", o));
		}, l = function() {
			var e = this.internal.collections.addImage_images;
			return c.call(this), e;
		}, u = function() {
			return Object.keys(this.internal.collections.addImage_images).length;
		}, d = function(t) {
			return typeof e["process" + t.toUpperCase()] == "function";
		}, f = function(e) {
			return s(e) === "object" && e.nodeType === 1;
		}, p = function(t, n) {
			if (t.nodeName === "IMG" && t.hasAttribute("src")) {
				var r = "" + t.getAttribute("src");
				if (r.indexOf("data:image/") === 0) return Tt(unescape(r).split("base64,").pop());
				var i = e.loadFile(r, !0);
				if (i !== void 0) return i;
			}
			if (t.nodeName === "CANVAS") {
				if (t.width === 0 || t.height === 0) throw Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
				var a;
				switch (n) {
					case "PNG":
						a = "image/png";
						break;
					case "WEBP":
						a = "image/webp";
						break;
					default: a = "image/jpeg";
				}
				return Tt(t.toDataURL(a, 1).split("base64,").pop());
			}
		}, m = function(e) {
			var t = this.internal.collections.addImage_images;
			if (t) {
				for (var n in t) if (e === t[n].alias) return t[n];
			}
		}, h = function(e, t, n) {
			return e || t || (e = -96, t = -96), e < 0 && (e = -1 * n.width * 72 / e / this.internal.scaleFactor), t < 0 && (t = -1 * n.height * 72 / t / this.internal.scaleFactor), e === 0 && (e = t * n.width / n.height), t === 0 && (t = e * n.height / n.width), [e, t];
		}, g = function(e, t, n, r, i, a) {
			var o = h.call(this, n, r, i), s = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, u = l.call(this);
			if (n = o[0], r = o[1], u[i.index] = i, a) {
				a *= Math.PI / 180;
				var d = Math.cos(a), f = Math.sin(a), p = function(e) {
					return e.toFixed(4);
				}, m = [
					p(d),
					p(f),
					p(-1 * f),
					p(d),
					0,
					0,
					"cm"
				];
			}
			this.internal.write("q"), a ? (this.internal.write([
				1,
				"0",
				"0",
				1,
				s(e),
				c(t + r),
				"cm"
			].join(" ")), this.internal.write(m.join(" ")), this.internal.write([
				s(n),
				"0",
				"0",
				s(r),
				"0",
				"0",
				"cm"
			].join(" "))) : this.internal.write([
				s(n),
				"0",
				"0",
				s(r),
				s(e),
				c(t + r),
				"cm"
			].join(" ")), this.isAdvancedAPI() && this.internal.write([
				1,
				0,
				0,
				-1,
				0,
				0,
				"cm"
			].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q");
		}, _ = e.color_spaces = {
			DEVICE_RGB: "DeviceRGB",
			DEVICE_GRAY: "DeviceGray",
			DEVICE_CMYK: "DeviceCMYK",
			CAL_GREY: "CalGray",
			CAL_RGB: "CalRGB",
			LAB: "Lab",
			ICC_BASED: "ICCBased",
			INDEXED: "Indexed",
			PATTERN: "Pattern",
			SEPARATION: "Separation",
			DEVICE_N: "DeviceN"
		};
		e.decode = {
			DCT_DECODE: "DCTDecode",
			FLATE_DECODE: "FlateDecode",
			LZW_DECODE: "LZWDecode",
			JPX_DECODE: "JPXDecode",
			JBIG2_DECODE: "JBIG2Decode",
			ASCII85_DECODE: "ASCII85Decode",
			ASCII_HEX_DECODE: "ASCIIHexDecode",
			RUN_LENGTH_DECODE: "RunLengthDecode",
			CCITT_FAX_DECODE: "CCITTFaxDecode"
		};
		var v = e.image_compression = {
			NONE: "NONE",
			FAST: "FAST",
			MEDIUM: "MEDIUM",
			SLOW: "SLOW"
		}, y = e.__addimage__.sHashCode = function(e) {
			var t, n, r = 0;
			if (typeof e == "string") for (n = e.length, t = 0; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
			else if (C(e)) for (n = e.byteLength / 2, t = 0; t < n; t++) r = (r << 5) - r + e[t], r |= 0;
			return r;
		}, b = e.__addimage__.validateStringAsBase64 = function(e) {
			(e ||= "").toString().trim();
			var t = !0;
			return e.length === 0 && (t = !1), e.length % 4 != 0 && (t = !1), !1 === /^[A-Za-z0-9+/]+$/.test(e.substr(0, e.length - 2)) && (t = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(e.substr(-2)) && (t = !1), t;
		}, x = e.__addimage__.extractImageFromDataUrl = function(e) {
			var t = (e ||= "").split("base64,"), n = null;
			if (t.length === 2) {
				var r = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(t[0]);
				Array.isArray(r) && (n = {
					mimeType: r[1],
					charset: r[2],
					data: t[1]
				});
			}
			return n;
		}, S = e.__addimage__.supportsArrayBuffer = function() {
			return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
		};
		e.__addimage__.isArrayBuffer = function(e) {
			return S() && e instanceof ArrayBuffer;
		};
		var C = e.__addimage__.isArrayBufferView = function(e) {
			return S() && typeof Uint32Array < "u" && (e instanceof Int8Array || e instanceof Uint8Array || typeof Uint8ClampedArray < "u" && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array);
		}, w = e.__addimage__.binaryStringToUint8Array = function(e) {
			for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
			return n;
		}, T = e.__addimage__.arrayBufferToBinaryString = function(e) {
			for (var t = "", n = C(e) ? e : new Uint8Array(e), r = 0; r < n.length; r += 8192) t += String.fromCharCode.apply(null, n.subarray(r, r + 8192));
			return t;
		};
		e.addImage = function() {
			var e, n, r, i, a, o, l, u, d;
			if (typeof arguments[1] == "number" ? (n = t, r = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], l = arguments[5], u = arguments[6], d = arguments[7]) : (n = arguments[1], r = arguments[2], i = arguments[3], a = arguments[4], o = arguments[5], l = arguments[6], u = arguments[7], d = arguments[8]), s(e = arguments[0]) === "object" && !f(e) && "imageData" in e) {
				var p = e;
				e = p.imageData, n = p.format || n || t, r = p.x || r || 0, i = p.y || i || 0, a = p.w || p.width || a, o = p.h || p.height || o, l = p.alias || l, u = p.compression || u, d = p.rotation || p.angle || d;
			}
			var m = this.internal.getFilters();
			if (u === void 0 && m.indexOf("FlateEncode") !== -1 && (u = "SLOW"), isNaN(r) || isNaN(i)) throw Error("Invalid coordinates passed to jsPDF.addImage");
			c.call(this);
			var h = E.call(this, e, n, l, u);
			return g.call(this, r, i, a, o, h, d), this;
		};
		var E = function(n, i, a, o) {
			var s, c, l;
			if (typeof n == "string" && r(n) === t) {
				n = unescape(n);
				var h = D(n, !1);
				(h !== "" || (h = e.loadFile(n, !0)) !== void 0) && (n = h);
			}
			if (f(n) && (n = p(n, i)), i = r(n, i), !d(i)) throw Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
			if (((l = a) == null || l.length === 0) && (a = function(e) {
				return typeof e == "string" || C(e) ? y(e) : C(e.data) ? y(e.data) : null;
			}(n)), (s = m.call(this, a)) || (S() && (n instanceof Uint8Array || i === "RGBA" || (c = n, n = w(n))), s = this["process" + i.toUpperCase()](n, u.call(this), a, function(t) {
				return t && typeof t == "string" && (t = t.toUpperCase()), t in e.image_compression ? t : v.NONE;
			}(o), c)), !s) throw Error("An unknown error occurred whilst processing the image.");
			return s;
		}, D = e.__addimage__.convertBase64ToBinaryString = function(e, t) {
			var n;
			t = typeof t != "boolean" || t;
			var r, i = "";
			if (typeof e == "string") {
				r = (n = x(e)) === null ? e : n.data;
				try {
					i = Tt(r);
				} catch (e) {
					if (t) throw b(r) ? /* @__PURE__ */ Error("atob-Error in jsPDF.convertBase64ToBinaryString " + e.message) : /* @__PURE__ */ Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
				}
			}
			return i;
		};
		e.getImageProperties = function(n) {
			var i, a, o = "";
			if (f(n) && (n = p(n)), typeof n == "string" && r(n) === t && ((o = D(n, !1)) === "" && (o = e.loadFile(n) || ""), n = o), a = r(n), !d(a)) throw Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
			if (!S() || n instanceof Uint8Array || (n = w(n)), !(i = this["process" + a.toUpperCase()](n))) throw Error("An unknown error occurred whilst processing the image");
			return i.fileType = a, i;
		};
	})(X.API), function(e) {
		var t = function(e) {
			if (e !== void 0 && e != "") return !0;
		};
		X.API.events.push(["addPage", function(e) {
			this.internal.getPageInfo(e.pageNumber).pageContext.annotations = [];
		}]), e.events.push(["putPage", function(e) {
			for (var n, r, i, a = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(e.objId), c = e.pageContext.annotations, l = !1, u = 0; u < c.length && !l; u++) switch ((n = c[u]).type) {
				case "link":
					(t(n.options.url) || t(n.options.pageNumber)) && (l = !0);
					break;
				case "reference":
				case "text":
				case "freetext": l = !0;
			}
			if (l != 0) {
				this.internal.write("/Annots [");
				for (var d = 0; d < c.length; d++) {
					n = c[d];
					var f = this.internal.pdfEscape, p = this.internal.getEncryptor(e.objId);
					switch (n.type) {
						case "reference":
							this.internal.write(" " + n.object.objId + " 0 R ");
							break;
						case "text":
							var m = this.internal.newAdditionalObject(), h = this.internal.newAdditionalObject(), g = this.internal.getEncryptor(m.objId), _ = n.title || "Note";
							i = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y) + "] ") + "/Contents (" + f(g(n.contents)) + ")", i += " /Popup " + h.objId + " 0 R", i += " /P " + s.objId + " 0 R", i += " /T (" + f(g(_)) + ") >>", m.content = i;
							var v = m.objId + " 0 R";
							i = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + a(n.bounds.x + 30) + " " + o(n.bounds.y + n.bounds.h) + " " + a(n.bounds.x + n.bounds.w + 30) + " " + o(n.bounds.y) + "] ") + " /Parent " + v, n.open && (i += " /Open true"), i += " >>", h.content = i, this.internal.write(m.objId, "0 R", h.objId, "0 R");
							break;
						case "freetext":
							r = "/Rect [" + a(n.bounds.x) + " " + o(n.bounds.y) + " " + a(n.bounds.x + n.bounds.w) + " " + o(n.bounds.y + n.bounds.h) + "] ";
							var y = n.color || "#000000";
							i = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + f(p(n.contents)) + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + y + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
							break;
						case "link":
							if (n.options.name) {
								var b = this.annotations._nameMap[n.options.name];
								n.options.pageNumber = b.page, n.options.top = b.y;
							} else n.options.top || (n.options.top = 0);
							if (r = "/Rect [" + n.finalBounds.x + " " + n.finalBounds.y + " " + n.finalBounds.w + " " + n.finalBounds.h + "] ", i = "", n.options.url) i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + f(p(n.options.url)) + ") >>";
							else if (n.options.pageNumber) switch (i = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(n.options.pageNumber).objId + " 0 R", n.options.magFactor = n.options.magFactor || "XYZ", n.options.magFactor) {
								case "Fit":
									i += " /Fit]";
									break;
								case "FitH":
									i += " /FitH " + n.options.top + "]";
									break;
								case "FitV":
									n.options.left = n.options.left || 0, i += " /FitV " + n.options.left + "]";
									break;
								default:
									var x = o(n.options.top);
									n.options.left = n.options.left || 0, n.options.zoom === void 0 && (n.options.zoom = 0), i += " /XYZ " + n.options.left + " " + x + " " + n.options.zoom + "]";
							}
							i != "" && (i += " >>", this.internal.write(i));
					}
				}
				this.internal.write("]");
			}
		}]), e.createAnnotation = function(e) {
			var t = this.internal.getCurrentPageInfo();
			switch (e.type) {
				case "link":
					this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
					break;
				case "text":
				case "freetext": t.pageContext.annotations.push(e);
			}
		}, e.link = function(e, t, n, r, i) {
			var a = this.internal.getCurrentPageInfo(), o = this.internal.getCoordinateString, s = this.internal.getVerticalCoordinateString;
			a.pageContext.annotations.push({
				finalBounds: {
					x: o(e),
					y: s(t),
					w: o(e + n),
					h: s(t + r)
				},
				options: i,
				type: "link"
			});
		}, e.textWithLink = function(e, t, n, r) {
			var i, a, o = this.getTextWidth(e), s = this.internal.getLineHeight() / this.internal.scaleFactor;
			if (r.maxWidth !== void 0) {
				a = r.maxWidth;
				var c = this.splitTextToSize(e, a).length;
				i = Math.ceil(s * c);
			} else a = o, i = s;
			return this.text(e, t, n, r), n += .2 * s, r.align === "center" && (t -= o / 2), r.align === "right" && (t -= o), this.link(t, n - s, a, i, r), o;
		}, e.getTextWidth = function(e) {
			var t = this.internal.getFontSize();
			return this.getStringUnitWidth(e) * t / this.internal.scaleFactor;
		};
	}(X.API), function(e) {
		var t = {
			1569: [65152],
			1570: [65153, 65154],
			1571: [65155, 65156],
			1572: [65157, 65158],
			1573: [65159, 65160],
			1574: [
				65161,
				65162,
				65163,
				65164
			],
			1575: [65165, 65166],
			1576: [
				65167,
				65168,
				65169,
				65170
			],
			1577: [65171, 65172],
			1578: [
				65173,
				65174,
				65175,
				65176
			],
			1579: [
				65177,
				65178,
				65179,
				65180
			],
			1580: [
				65181,
				65182,
				65183,
				65184
			],
			1581: [
				65185,
				65186,
				65187,
				65188
			],
			1582: [
				65189,
				65190,
				65191,
				65192
			],
			1583: [65193, 65194],
			1584: [65195, 65196],
			1585: [65197, 65198],
			1586: [65199, 65200],
			1587: [
				65201,
				65202,
				65203,
				65204
			],
			1588: [
				65205,
				65206,
				65207,
				65208
			],
			1589: [
				65209,
				65210,
				65211,
				65212
			],
			1590: [
				65213,
				65214,
				65215,
				65216
			],
			1591: [
				65217,
				65218,
				65219,
				65220
			],
			1592: [
				65221,
				65222,
				65223,
				65224
			],
			1593: [
				65225,
				65226,
				65227,
				65228
			],
			1594: [
				65229,
				65230,
				65231,
				65232
			],
			1601: [
				65233,
				65234,
				65235,
				65236
			],
			1602: [
				65237,
				65238,
				65239,
				65240
			],
			1603: [
				65241,
				65242,
				65243,
				65244
			],
			1604: [
				65245,
				65246,
				65247,
				65248
			],
			1605: [
				65249,
				65250,
				65251,
				65252
			],
			1606: [
				65253,
				65254,
				65255,
				65256
			],
			1607: [
				65257,
				65258,
				65259,
				65260
			],
			1608: [65261, 65262],
			1609: [
				65263,
				65264,
				64488,
				64489
			],
			1610: [
				65265,
				65266,
				65267,
				65268
			],
			1649: [64336, 64337],
			1655: [64477],
			1657: [
				64358,
				64359,
				64360,
				64361
			],
			1658: [
				64350,
				64351,
				64352,
				64353
			],
			1659: [
				64338,
				64339,
				64340,
				64341
			],
			1662: [
				64342,
				64343,
				64344,
				64345
			],
			1663: [
				64354,
				64355,
				64356,
				64357
			],
			1664: [
				64346,
				64347,
				64348,
				64349
			],
			1667: [
				64374,
				64375,
				64376,
				64377
			],
			1668: [
				64370,
				64371,
				64372,
				64373
			],
			1670: [
				64378,
				64379,
				64380,
				64381
			],
			1671: [
				64382,
				64383,
				64384,
				64385
			],
			1672: [64392, 64393],
			1676: [64388, 64389],
			1677: [64386, 64387],
			1678: [64390, 64391],
			1681: [64396, 64397],
			1688: [64394, 64395],
			1700: [
				64362,
				64363,
				64364,
				64365
			],
			1702: [
				64366,
				64367,
				64368,
				64369
			],
			1705: [
				64398,
				64399,
				64400,
				64401
			],
			1709: [
				64467,
				64468,
				64469,
				64470
			],
			1711: [
				64402,
				64403,
				64404,
				64405
			],
			1713: [
				64410,
				64411,
				64412,
				64413
			],
			1715: [
				64406,
				64407,
				64408,
				64409
			],
			1722: [64414, 64415],
			1723: [
				64416,
				64417,
				64418,
				64419
			],
			1726: [
				64426,
				64427,
				64428,
				64429
			],
			1728: [64420, 64421],
			1729: [
				64422,
				64423,
				64424,
				64425
			],
			1733: [64480, 64481],
			1734: [64473, 64474],
			1735: [64471, 64472],
			1736: [64475, 64476],
			1737: [64482, 64483],
			1739: [64478, 64479],
			1740: [
				64508,
				64509,
				64510,
				64511
			],
			1744: [
				64484,
				64485,
				64486,
				64487
			],
			1746: [64430, 64431],
			1747: [64432, 64433]
		}, n = {
			65247: {
				65154: 65269,
				65156: 65271,
				65160: 65273,
				65166: 65275
			},
			65248: {
				65154: 65270,
				65156: 65272,
				65160: 65274,
				65166: 65276
			},
			65165: { 65247: { 65248: { 65258: 65010 } } },
			1617: {
				1612: 64606,
				1613: 64607,
				1614: 64608,
				1615: 64609,
				1616: 64610
			}
		}, r = {
			1612: 64606,
			1613: 64607,
			1614: 64608,
			1615: 64609,
			1616: 64610
		}, i = [
			1570,
			1571,
			1573,
			1575
		];
		e.__arabicParser__ = {};
		var a = e.__arabicParser__.isInArabicSubstitutionA = function(e) {
			return t[e.charCodeAt(0)] !== void 0;
		}, o = e.__arabicParser__.isArabicLetter = function(e) {
			return typeof e == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(e);
		}, s = e.__arabicParser__.isArabicEndLetter = function(e) {
			return o(e) && a(e) && t[e.charCodeAt(0)].length <= 2;
		}, c = e.__arabicParser__.isArabicAlfLetter = function(e) {
			return o(e) && i.indexOf(e.charCodeAt(0)) >= 0;
		};
		e.__arabicParser__.arabicLetterHasIsolatedForm = function(e) {
			return o(e) && a(e) && t[e.charCodeAt(0)].length >= 1;
		};
		var l = e.__arabicParser__.arabicLetterHasFinalForm = function(e) {
			return o(e) && a(e) && t[e.charCodeAt(0)].length >= 2;
		};
		e.__arabicParser__.arabicLetterHasInitialForm = function(e) {
			return o(e) && a(e) && t[e.charCodeAt(0)].length >= 3;
		};
		var u = e.__arabicParser__.arabicLetterHasMedialForm = function(e) {
			return o(e) && a(e) && t[e.charCodeAt(0)].length == 4;
		}, d = e.__arabicParser__.resolveLigatures = function(e) {
			var t = 0, r = n, i = "", a = 0;
			for (t = 0; t < e.length; t += 1) r[e.charCodeAt(t)] === void 0 ? (r = n, i += e.charAt(t - a), t -= a, a = 0) : (a++, typeof (r = r[e.charCodeAt(t)]) == "number" && (i += String.fromCharCode(r), r = n, a = 0), t === e.length - 1 && (r = n, i += e.charAt(t - (a - 1)), t -= a - 1, a = 0));
			return i;
		};
		e.__arabicParser__.isArabicDiacritic = function(e) {
			return e !== void 0 && r[e.charCodeAt(0)] !== void 0;
		};
		var f = e.__arabicParser__.getCorrectForm = function(e, t, n) {
			return o(e) ? !1 === a(e) ? -1 : !l(e) || !o(t) && !o(n) || !o(n) && s(t) || s(e) && !o(t) || s(e) && c(t) || s(e) && s(t) ? 0 : u(e) && o(t) && !s(t) && o(n) && l(n) ? 3 : s(e) || !o(n) ? 1 : 2 : -1;
		}, p = function(e) {
			var n = 0, r = 0, i = 0, a = "", s = "", c = "", l = (e ||= "").split("\\s+"), u = [];
			for (n = 0; n < l.length; n += 1) {
				for (u.push(""), r = 0; r < l[n].length; r += 1) a = l[n][r], s = l[n][r - 1], c = l[n][r + 1], o(a) ? (i = f(a, s, c), u[n] += i === -1 ? a : String.fromCharCode(t[a.charCodeAt(0)][i])) : u[n] += a;
				u[n] = d(u[n]);
			}
			return u.join(" ");
		}, m = e.__arabicParser__.processArabic = e.processArabic = function() {
			var e, t = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, n = [];
			if (Array.isArray(t)) {
				var r = 0;
				for (n = [], r = 0; r < t.length; r += 1) Array.isArray(t[r]) ? n.push([
					p(t[r][0]),
					t[r][1],
					t[r][2]
				]) : n.push([p(t[r])]);
				e = n;
			} else e = p(t);
			return typeof arguments[0] == "string" ? e : (arguments[0].text = e, arguments[0]);
		};
		e.events.push(["preProcessText", m]);
	}(X.API), X.API.autoPrint = function(e) {
		var t;
		switch ((e ||= {}).variant = e.variant || "non-conform", e.variant) {
			case "javascript":
				this.addJS("print({});");
				break;
			default: this.internal.events.subscribe("postPutResources", (function() {
				t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
			})), this.internal.events.subscribe("putCatalog", (function() {
				this.internal.out("/OpenAction " + t + " 0 R");
			}));
		}
		return this;
	}, function(e) {
		var t = function() {
			var e = void 0;
			Object.defineProperty(this, "pdf", {
				get: function() {
					return e;
				},
				set: function(t) {
					e = t;
				}
			});
			var t = 150;
			Object.defineProperty(this, "width", {
				get: function() {
					return t;
				},
				set: function(e) {
					t = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 150 : e, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = t + 1);
				}
			});
			var n = 300;
			Object.defineProperty(this, "height", {
				get: function() {
					return n;
				},
				set: function(e) {
					n = isNaN(e) || !1 === Number.isInteger(e) || e < 0 ? 300 : e, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1);
				}
			});
			var r = [];
			Object.defineProperty(this, "childNodes", {
				get: function() {
					return r;
				},
				set: function(e) {
					r = e;
				}
			});
			var i = {};
			Object.defineProperty(this, "style", {
				get: function() {
					return i;
				},
				set: function(e) {
					i = e;
				}
			}), Object.defineProperty(this, "parentNode", {});
		};
		t.prototype.getContext = function(e, t) {
			var n;
			if ((e ||= "2d") !== "2d") return null;
			for (n in t) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = t[n]);
			return this.pdf.context2d._canvas = this, this.pdf.context2d;
		}, t.prototype.toDataURL = function() {
			throw Error("toDataURL is not implemented.");
		}, e.events.push(["initialized", function() {
			this.canvas = new t(), this.canvas.pdf = this;
		}]);
	}(X.API), function(e) {
		var t = {
			left: 0,
			top: 0,
			bottom: 0,
			right: 0
		}, n = !1, r = function() {
			this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this));
		}, i = function() {
			this.internal.__cell__.lastCell = new a(), this.internal.__cell__.pages = 1;
		}, a = function() {
			var e = arguments[0];
			Object.defineProperty(this, "x", {
				enumerable: !0,
				get: function() {
					return e;
				},
				set: function(t) {
					e = t;
				}
			});
			var t = arguments[1];
			Object.defineProperty(this, "y", {
				enumerable: !0,
				get: function() {
					return t;
				},
				set: function(e) {
					t = e;
				}
			});
			var n = arguments[2];
			Object.defineProperty(this, "width", {
				enumerable: !0,
				get: function() {
					return n;
				},
				set: function(e) {
					n = e;
				}
			});
			var r = arguments[3];
			Object.defineProperty(this, "height", {
				enumerable: !0,
				get: function() {
					return r;
				},
				set: function(e) {
					r = e;
				}
			});
			var i = arguments[4];
			Object.defineProperty(this, "text", {
				enumerable: !0,
				get: function() {
					return i;
				},
				set: function(e) {
					i = e;
				}
			});
			var a = arguments[5];
			Object.defineProperty(this, "lineNumber", {
				enumerable: !0,
				get: function() {
					return a;
				},
				set: function(e) {
					a = e;
				}
			});
			var o = arguments[6];
			return Object.defineProperty(this, "align", {
				enumerable: !0,
				get: function() {
					return o;
				},
				set: function(e) {
					o = e;
				}
			}), this;
		};
		a.prototype.clone = function() {
			return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
		}, a.prototype.toArray = function() {
			return [
				this.x,
				this.y,
				this.width,
				this.height,
				this.text,
				this.lineNumber,
				this.align
			];
		}, e.setHeaderFunction = function(e) {
			return r.call(this), this.internal.__cell__.headerFunction = typeof e == "function" ? e : void 0, this;
		}, e.getTextDimensions = function(e, t) {
			r.call(this);
			var n = (t ||= {}).fontSize || this.getFontSize(), i = t.font || this.getFont(), a = t.scaleFactor || this.internal.scaleFactor, o = 0, s = 0, c = 0, l = this;
			if (!Array.isArray(e) && typeof e != "string") {
				if (typeof e != "number") throw Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
				e = String(e);
			}
			var u = t.maxWidth;
			u > 0 ? typeof e == "string" ? e = this.splitTextToSize(e, u) : Object.prototype.toString.call(e) === "[object Array]" && (e = e.reduce((function(e, t) {
				return e.concat(l.splitTextToSize(t, u));
			}), [])) : e = Array.isArray(e) ? e : [e];
			for (var d = 0; d < e.length; d++) o < (c = this.getStringUnitWidth(e[d], { font: i }) * n) && (o = c);
			return o !== 0 && (s = e.length), {
				w: o /= a,
				h: Math.max((s * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / a, 0)
			};
		}, e.cellAddPage = function() {
			r.call(this), this.addPage();
			var e = this.internal.__cell__.margins || t;
			return this.internal.__cell__.lastCell = new a(e.left, e.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
		};
		var o = e.cell = function() {
			var e = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
			r.call(this);
			var i = this.internal.__cell__.lastCell, o = this.internal.__cell__.padding, s = this.internal.__cell__.margins || t, c = this.internal.__cell__.tableHeaderRow, l = this.internal.__cell__.printHeaders;
			return i.lineNumber !== void 0 && (i.lineNumber === e.lineNumber ? (e.x = (i.x || 0) + (i.width || 0), e.y = i.y || 0) : i.y + i.height + e.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), e.y = s.top, l && c && (this.printHeaderRow(e.lineNumber, !0), e.y += c[0].height)) : e.y = i.y + i.height || e.y), e.text[0] !== void 0 && (this.rect(e.x, e.y, e.width, e.height, !0 === n ? "FD" : void 0), e.align === "right" ? this.text(e.text, e.x + e.width - o, e.y + o, {
				align: "right",
				baseline: "top"
			}) : e.align === "center" ? this.text(e.text, e.x + e.width / 2, e.y + o, {
				align: "center",
				baseline: "top",
				maxWidth: e.width - o - o
			}) : this.text(e.text, e.x + o, e.y + o, {
				align: "left",
				baseline: "top",
				maxWidth: e.width - o - o
			})), this.internal.__cell__.lastCell = e, this;
		};
		e.table = function(e, n, l, u, d) {
			if (r.call(this), !l) throw Error("No data for PDF table.");
			var f, p, m, h, g = [], _ = [], v = [], y = {}, b = {}, x = [], S = [], C = (d ||= {}).autoSize || !1, w = !1 !== d.printHeaders, T = d.css && d.css["font-size"] !== void 0 ? 16 * d.css["font-size"] : d.fontSize || 12, E = d.margins || Object.assign({ width: this.getPageWidth() }, t), D = typeof d.padding == "number" ? d.padding : 3, O = d.headerBackgroundColor || "#c8c8c8", k = d.headerTextColor || "#000";
			if (i.call(this), this.internal.__cell__.printHeaders = w, this.internal.__cell__.margins = E, this.internal.__cell__.table_font_size = T, this.internal.__cell__.padding = D, this.internal.__cell__.headerBackgroundColor = O, this.internal.__cell__.headerTextColor = k, this.setFontSize(T), u == null) _ = g = Object.keys(l[0]), v = g.map((function() {
				return "left";
			}));
			else if (Array.isArray(u) && s(u[0]) === "object") for (g = u.map((function(e) {
				return e.name;
			})), _ = u.map((function(e) {
				return e.prompt || e.name || "";
			})), v = u.map((function(e) {
				return e.align || "left";
			})), f = 0; f < u.length; f += 1) b[u[f].name] = u[f].width * (19.049976 / 25.4);
			else Array.isArray(u) && typeof u[0] == "string" && (_ = g = u, v = g.map((function() {
				return "left";
			})));
			if (C || Array.isArray(u) && typeof u[0] == "string") for (f = 0; f < g.length; f += 1) {
				for (y[h = g[f]] = l.map((function(e) {
					return e[h];
				})), this.setFont(void 0, "bold"), x.push(this.getTextDimensions(_[f], {
					fontSize: this.internal.__cell__.table_font_size,
					scaleFactor: this.internal.scaleFactor
				}).w), p = y[h], this.setFont(void 0, "normal"), m = 0; m < p.length; m += 1) x.push(this.getTextDimensions(p[m], {
					fontSize: this.internal.__cell__.table_font_size,
					scaleFactor: this.internal.scaleFactor
				}).w);
				b[h] = Math.max.apply(null, x) + D + D, x = [];
			}
			if (w) {
				var A = {};
				for (f = 0; f < g.length; f += 1) A[g[f]] = {}, A[g[f]].text = _[f], A[g[f]].align = v[f];
				var j = c.call(this, A, b);
				S = g.map((function(t) {
					return new a(e, n, b[t], j, A[t].text, void 0, A[t].align);
				})), this.setTableHeaderRow(S), this.printHeaderRow(1, !1);
			}
			var M = u.reduce((function(e, t) {
				return e[t.name] = t.align, e;
			}), {});
			for (f = 0; f < l.length; f += 1) {
				"rowStart" in d && d.rowStart instanceof Function && d.rowStart({
					row: f,
					data: l[f]
				}, this);
				var N = c.call(this, l[f], b);
				for (m = 0; m < g.length; m += 1) {
					var P = l[f][g[m]];
					"cellStart" in d && d.cellStart instanceof Function && d.cellStart({
						row: f,
						col: m,
						data: P
					}, this), o.call(this, new a(e, n, b[g[m]], N, P, f + 2, M[g[m]]));
				}
			}
			return this.internal.__cell__.table_x = e, this.internal.__cell__.table_y = n, this;
		};
		var c = function(e, t) {
			var n = this.internal.__cell__.padding, r = this.internal.__cell__.table_font_size, i = this.internal.scaleFactor;
			return Object.keys(e).map((function(r) {
				var i = e[r];
				return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, t[r] - n - n);
			}), this).map((function(e) {
				return this.getLineHeightFactor() * e.length * r / i + n + n;
			}), this).reduce((function(e, t) {
				return Math.max(e, t);
			}), 0);
		};
		e.setTableHeaderRow = function(e) {
			r.call(this), this.internal.__cell__.tableHeaderRow = e;
		}, e.printHeaderRow = function(e, t) {
			if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw Error("Property tableHeaderRow does not exist.");
			var i;
			if (n = !0, typeof this.internal.__cell__.headerFunction == "function") {
				var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
				this.internal.__cell__.lastCell = new a(s[0], s[1], s[2], s[3], void 0, -1);
			}
			this.setFont(void 0, "bold");
			for (var c = [], l = 0; l < this.internal.__cell__.tableHeaderRow.length; l += 1) {
				i = this.internal.__cell__.tableHeaderRow[l].clone(), t && (i.y = this.internal.__cell__.margins.top || 0, c.push(i)), i.lineNumber = e;
				var u = this.getTextColor();
				this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), o.call(this, i), this.setTextColor(u);
			}
			c.length > 0 && this.setTableHeaderRow(c), this.setFont(void 0, "normal"), n = !1;
		};
	}(X.API), yn = {
		italic: [
			"italic",
			"oblique",
			"normal"
		],
		oblique: [
			"oblique",
			"italic",
			"normal"
		],
		normal: [
			"normal",
			"oblique",
			"italic"
		]
	}, bn = [
		"ultra-condensed",
		"extra-condensed",
		"condensed",
		"semi-condensed",
		"normal",
		"semi-expanded",
		"expanded",
		"extra-expanded",
		"ultra-expanded"
	], xn = dt(bn), Sn = [
		100,
		200,
		300,
		400,
		500,
		600,
		700,
		800,
		900
	], Cn = dt(Sn), wn = {
		"sans-serif": "helvetica",
		fixed: "courier",
		monospace: "courier",
		terminal: "courier",
		cursive: "times",
		fantasy: "times",
		serif: "times"
	}, Tn = {
		caption: "times",
		icon: "times",
		menu: "times",
		"message-box": "times",
		"small-caption": "times",
		"status-bar": "times"
	}, kn = ["times"], (function(e) {
		var t, n, r, i, a, o, c, l, u, d = function(e) {
			return e ||= {}, this.isStrokeTransparent = e.isStrokeTransparent || !1, this.strokeOpacity = e.strokeOpacity || 1, this.strokeStyle = e.strokeStyle || "#000000", this.fillStyle = e.fillStyle || "#000000", this.isFillTransparent = e.isFillTransparent || !1, this.fillOpacity = e.fillOpacity || 1, this.font = e.font || "10px sans-serif", this.textBaseline = e.textBaseline || "alphabetic", this.textAlign = e.textAlign || "left", this.lineWidth = e.lineWidth || 1, this.lineJoin = e.lineJoin || "miter", this.lineCap = e.lineCap || "butt", this.path = e.path || [], this.transform = e.transform === void 0 ? new l() : e.transform.clone(), this.globalCompositeOperation = e.globalCompositeOperation || "normal", this.globalAlpha = e.globalAlpha || 1, this.clip_path = e.clip_path || [], this.currentPoint = e.currentPoint || new o(), this.miterLimit = e.miterLimit || 10, this.lastPoint = e.lastPoint || new o(), this.lineDashOffset = e.lineDashOffset || 0, this.lineDash = e.lineDash || [], this.margin = e.margin || [
				0,
				0,
				0,
				0
			], this.prevPageLastElemOffset = e.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof e.ignoreClearRect != "boolean" || e.ignoreClearRect, this;
		};
		e.events.push(["initialized", function() {
			this.context2d = new f(this), t = this.internal.f2, n = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, i = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, o = this.internal.Point, c = this.internal.Rectangle, l = this.internal.Matrix, u = new d();
		}]);
		var f = function(e) {
			Object.defineProperty(this, "canvas", { get: function() {
				return {
					parentNode: !1,
					style: !1
				};
			} });
			var t = e;
			Object.defineProperty(this, "pdf", { get: function() {
				return t;
			} });
			var n = !1;
			Object.defineProperty(this, "pageWrapXEnabled", {
				get: function() {
					return n;
				},
				set: function(e) {
					n = !!e;
				}
			});
			var r = !1;
			Object.defineProperty(this, "pageWrapYEnabled", {
				get: function() {
					return r;
				},
				set: function(e) {
					r = !!e;
				}
			});
			var i = 0;
			Object.defineProperty(this, "posX", {
				get: function() {
					return i;
				},
				set: function(e) {
					isNaN(e) || (i = e);
				}
			});
			var a = 0;
			Object.defineProperty(this, "posY", {
				get: function() {
					return a;
				},
				set: function(e) {
					isNaN(e) || (a = e);
				}
			}), Object.defineProperty(this, "margin", {
				get: function() {
					return u.margin;
				},
				set: function(e) {
					var t;
					typeof e == "number" ? t = [
						e,
						e,
						e,
						e
					] : ((t = [
						,
						,
						,
						,
					])[0] = e[0], t[1] = e.length >= 2 ? e[1] : t[0], t[2] = e.length >= 3 ? e[2] : t[0], t[3] = e.length >= 4 ? e[3] : t[1]), u.margin = t;
				}
			});
			var o = !1;
			Object.defineProperty(this, "autoPaging", {
				get: function() {
					return o;
				},
				set: function(e) {
					o = e;
				}
			});
			var s = 0;
			Object.defineProperty(this, "lastBreak", {
				get: function() {
					return s;
				},
				set: function(e) {
					s = e;
				}
			});
			var c = [];
			Object.defineProperty(this, "pageBreaks", {
				get: function() {
					return c;
				},
				set: function(e) {
					c = e;
				}
			}), Object.defineProperty(this, "ctx", {
				get: function() {
					return u;
				},
				set: function(e) {
					e instanceof d && (u = e);
				}
			}), Object.defineProperty(this, "path", {
				get: function() {
					return u.path;
				},
				set: function(e) {
					u.path = e;
				}
			});
			var l = [];
			Object.defineProperty(this, "ctxStack", {
				get: function() {
					return l;
				},
				set: function(e) {
					l = e;
				}
			}), Object.defineProperty(this, "fillStyle", {
				get: function() {
					return this.ctx.fillStyle;
				},
				set: function(e) {
					var t = p(e);
					this.ctx.fillStyle = t.style, this.ctx.isFillTransparent = t.a === 0, this.ctx.fillOpacity = t.a, this.pdf.setFillColor(t.r, t.g, t.b, { a: t.a }), this.pdf.setTextColor(t.r, t.g, t.b, { a: t.a });
				}
			}), Object.defineProperty(this, "strokeStyle", {
				get: function() {
					return this.ctx.strokeStyle;
				},
				set: function(e) {
					var t = p(e);
					this.ctx.strokeStyle = t.style, this.ctx.isStrokeTransparent = t.a === 0, this.ctx.strokeOpacity = t.a, t.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (t.a, this.pdf.setDrawColor(t.r, t.g, t.b));
				}
			}), Object.defineProperty(this, "lineCap", {
				get: function() {
					return this.ctx.lineCap;
				},
				set: function(e) {
					[
						"butt",
						"round",
						"square"
					].indexOf(e) !== -1 && (this.ctx.lineCap = e, this.pdf.setLineCap(e));
				}
			}), Object.defineProperty(this, "lineWidth", {
				get: function() {
					return this.ctx.lineWidth;
				},
				set: function(e) {
					isNaN(e) || (this.ctx.lineWidth = e, this.pdf.setLineWidth(e));
				}
			}), Object.defineProperty(this, "lineJoin", {
				get: function() {
					return this.ctx.lineJoin;
				},
				set: function(e) {
					[
						"bevel",
						"round",
						"miter"
					].indexOf(e) !== -1 && (this.ctx.lineJoin = e, this.pdf.setLineJoin(e));
				}
			}), Object.defineProperty(this, "miterLimit", {
				get: function() {
					return this.ctx.miterLimit;
				},
				set: function(e) {
					isNaN(e) || (this.ctx.miterLimit = e, this.pdf.setMiterLimit(e));
				}
			}), Object.defineProperty(this, "textBaseline", {
				get: function() {
					return this.ctx.textBaseline;
				},
				set: function(e) {
					this.ctx.textBaseline = e;
				}
			}), Object.defineProperty(this, "textAlign", {
				get: function() {
					return this.ctx.textAlign;
				},
				set: function(e) {
					[
						"right",
						"end",
						"center",
						"left",
						"start"
					].indexOf(e) !== -1 && (this.ctx.textAlign = e);
				}
			});
			var f = null;
			function m(e, t) {
				return f === null && (f = function(e) {
					for (var t = {}, n = 0; n < e.length; ++n) {
						var r = ft(e[n]), i = r.family, a = r.stretch, o = r.style, s = r.weight;
						t[i] = t[i] || {}, t[i][a] = t[i][a] || {}, t[i][a][o] = t[i][a][o] || {}, t[i][a][o][s] = r;
					}
					return t;
				}(function(e) {
					var t = [];
					return Object.keys(e).forEach((function(n) {
						e[n].forEach((function(e) {
							var r = null;
							switch (e) {
								case "bold":
									r = {
										family: n,
										weight: "bold"
									};
									break;
								case "italic":
									r = {
										family: n,
										style: "italic"
									};
									break;
								case "bolditalic":
									r = {
										family: n,
										weight: "bold",
										style: "italic"
									};
									break;
								case "":
								case "normal": r = { family: n };
							}
							r !== null && (r.ref = {
								name: n,
								style: e
							}, t.push(r));
						}));
					})), t;
				}(e.getFontList()).concat(t))), f;
			}
			var h = null;
			Object.defineProperty(this, "fontFaces", {
				get: function() {
					return h;
				},
				set: function(e) {
					f = null, h = e;
				}
			}), Object.defineProperty(this, "font", {
				get: function() {
					return this.ctx.font;
				},
				set: function(e) {
					var t;
					if (this.ctx.font = e, (t = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(e)) !== null) {
						var n = t[1], r = (t[2], t[3]), i = t[4], a = (t[5], t[6]), o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
						i = Math.floor(o === "px" ? parseFloat(i) * this.pdf.internal.scaleFactor : o === "em" ? parseFloat(i) * this.pdf.getFontSize() : parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
						var s = function(e) {
							var t, n, r = [], i = e.trim();
							if (i === "") return kn;
							if (i in Tn) return [Tn[i]];
							for (; i !== "";) {
								switch (n = null, t = (i = gt(i)).charAt(0)) {
									case "\"":
									case "'":
										n = _t(i.substring(1), t);
										break;
									default: n = vt(i);
								}
								if (n === null || (r.push(n[0]), (i = gt(n[1])) !== "" && i.charAt(0) !== ",")) return kn;
								i = i.replace(/^,/, "");
							}
							return r;
						}(a);
						if (this.fontFaces) {
							var c = ht(m(this.pdf, this.fontFaces), s.map((function(e) {
								return {
									family: e,
									stretch: "normal",
									weight: r,
									style: n
								};
							})));
							this.pdf.setFont(c.ref.name, c.ref.style);
						} else {
							var l = "";
							(r === "bold" || parseInt(r, 10) >= 700 || n === "bold") && (l = "bold"), n === "italic" && (l += "italic"), l.length === 0 && (l = "normal");
							for (var u = "", d = {
								arial: "Helvetica",
								Arial: "Helvetica",
								verdana: "Helvetica",
								Verdana: "Helvetica",
								helvetica: "Helvetica",
								Helvetica: "Helvetica",
								"sans-serif": "Helvetica",
								fixed: "Courier",
								monospace: "Courier",
								terminal: "Courier",
								cursive: "Times",
								fantasy: "Times",
								serif: "Times"
							}, f = 0; f < s.length; f++) {
								if (this.pdf.internal.getFont(s[f], l, {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) {
									u = s[f];
									break;
								}
								if (l === "bolditalic" && this.pdf.internal.getFont(s[f], "bold", {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) u = s[f], l = "bold";
								else if (this.pdf.internal.getFont(s[f], "normal", {
									noFallback: !0,
									disableWarning: !0
								}) !== void 0) {
									u = s[f], l = "normal";
									break;
								}
							}
							if (u === "") {
								for (var p = 0; p < s.length; p++) if (d[s[p]]) {
									u = d[s[p]];
									break;
								}
							}
							u = u === "" ? "Times" : u, this.pdf.setFont(u, l);
						}
					}
				}
			}), Object.defineProperty(this, "globalCompositeOperation", {
				get: function() {
					return this.ctx.globalCompositeOperation;
				},
				set: function(e) {
					this.ctx.globalCompositeOperation = e;
				}
			}), Object.defineProperty(this, "globalAlpha", {
				get: function() {
					return this.ctx.globalAlpha;
				},
				set: function(e) {
					this.ctx.globalAlpha = e;
				}
			}), Object.defineProperty(this, "lineDashOffset", {
				get: function() {
					return this.ctx.lineDashOffset;
				},
				set: function(e) {
					this.ctx.lineDashOffset = e, ee.call(this);
				}
			}), Object.defineProperty(this, "lineDash", {
				get: function() {
					return this.ctx.lineDash;
				},
				set: function(e) {
					this.ctx.lineDash = e, ee.call(this);
				}
			}), Object.defineProperty(this, "ignoreClearRect", {
				get: function() {
					return this.ctx.ignoreClearRect;
				},
				set: function(e) {
					this.ctx.ignoreClearRect = !!e;
				}
			});
		};
		f.prototype.setLineDash = function(e) {
			this.lineDash = e;
		}, f.prototype.getLineDash = function() {
			return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
		}, f.prototype.fill = function() {
			x.call(this, "fill", !1);
		}, f.prototype.stroke = function() {
			x.call(this, "stroke", !1);
		}, f.prototype.beginPath = function() {
			this.path = [{ type: "begin" }];
		}, f.prototype.moveTo = function(e, t) {
			if (isNaN(e) || isNaN(t)) throw wt.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.moveTo");
			var n = this.ctx.transform.applyToPoint(new o(e, t));
			this.path.push({
				type: "mt",
				x: n.x,
				y: n.y
			}), this.ctx.lastPoint = new o(e, t);
		}, f.prototype.closePath = function() {
			var e = new o(0, 0), t = 0;
			for (t = this.path.length - 1; t !== -1; t--) if (this.path[t].type === "begin" && s(this.path[t + 1]) === "object" && typeof this.path[t + 1].x == "number") {
				e = new o(this.path[t + 1].x, this.path[t + 1].y);
				break;
			}
			this.path.push({ type: "close" }), this.ctx.lastPoint = new o(e.x, e.y);
		}, f.prototype.lineTo = function(e, t) {
			if (isNaN(e) || isNaN(t)) throw wt.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.lineTo");
			var n = this.ctx.transform.applyToPoint(new o(e, t));
			this.path.push({
				type: "lt",
				x: n.x,
				y: n.y
			}), this.ctx.lastPoint = new o(n.x, n.y);
		}, f.prototype.clip = function() {
			this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), x.call(this, null, !0);
		}, f.prototype.quadraticCurveTo = function(e, t, n, r) {
			if (isNaN(n) || isNaN(r) || isNaN(e) || isNaN(t)) throw wt.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
			var i = this.ctx.transform.applyToPoint(new o(n, r)), a = this.ctx.transform.applyToPoint(new o(e, t));
			this.path.push({
				type: "qct",
				x1: a.x,
				y1: a.y,
				x: i.x,
				y: i.y
			}), this.ctx.lastPoint = new o(i.x, i.y);
		}, f.prototype.bezierCurveTo = function(e, t, n, r, i, a) {
			if (isNaN(i) || isNaN(a) || isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw wt.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
			var s = this.ctx.transform.applyToPoint(new o(i, a)), c = this.ctx.transform.applyToPoint(new o(e, t)), l = this.ctx.transform.applyToPoint(new o(n, r));
			this.path.push({
				type: "bct",
				x1: c.x,
				y1: c.y,
				x2: l.x,
				y2: l.y,
				x: s.x,
				y: s.y
			}), this.ctx.lastPoint = new o(s.x, s.y);
		}, f.prototype.arc = function(e, t, n, r, i, a) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i)) throw wt.error("jsPDF.context2d.arc: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.arc");
			if (a = !!a, !this.ctx.transform.isIdentity) {
				var s = this.ctx.transform.applyToPoint(new o(e, t));
				e = s.x, t = s.y;
				var c = this.ctx.transform.applyToPoint(new o(0, n)), l = this.ctx.transform.applyToPoint(new o(0, 0));
				n = Math.sqrt((c.x - l.x) ** 2 + (c.y - l.y) ** 2);
			}
			Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
				type: "arc",
				x: e,
				y: t,
				radius: n,
				startAngle: r,
				endAngle: i,
				counterclockwise: a
			});
		}, f.prototype.arcTo = function(e, t, n, r, i) {
			throw Error("arcTo not implemented.");
		}, f.prototype.rect = function(e, t, n, r) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw wt.error("jsPDF.context2d.rect: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.rect");
			this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.lineTo(e, t), this.lineTo(e + n, t), this.lineTo(e, t);
		}, f.prototype.fillRect = function(e, t, n, r) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw wt.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.fillRect");
			if (!m.call(this)) {
				var i = {};
				this.lineCap !== "butt" && (i.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(e, t, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin);
			}
		}, f.prototype.strokeRect = function(e, t, n, r) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw wt.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
			h.call(this) || (this.beginPath(), this.rect(e, t, n, r), this.stroke());
		}, f.prototype.clearRect = function(e, t, n, r) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r)) throw wt.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.clearRect");
			this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(e, t, n, r));
		}, f.prototype.save = function(e) {
			e = typeof e != "boolean" || e;
			for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("q");
			if (this.pdf.setPage(t), e) {
				this.ctx.fontSize = this.pdf.internal.getFontSize();
				var r = new d(this.ctx);
				this.ctxStack.push(this.ctx), this.ctx = r;
			}
		}, f.prototype.restore = function(e) {
			e = typeof e != "boolean" || e;
			for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
			this.pdf.setPage(t), e && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
		}, f.prototype.toDataURL = function() {
			throw Error("toDataUrl not implemented.");
		};
		var p = function(e) {
			var t, n, r, i;
			if (!0 === e.isCanvasGradient && (e = e.getColor()), !e) return {
				r: 0,
				g: 0,
				b: 0,
				a: 0,
				style: e
			};
			if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(e)) t = 0, n = 0, r = 0, i = 0;
			else {
				var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(e);
				if (a !== null) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = 1;
				else if ((a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(e)) !== null) t = parseInt(a[1]), n = parseInt(a[2]), r = parseInt(a[3]), i = parseFloat(a[4]);
				else {
					if (i = 1, typeof e == "string" && e.charAt(0) !== "#") {
						var o = new We(e);
						e = o.ok ? o.toHex() : "#000000";
					}
					e.length === 4 ? (t = e.substring(1, 2), t += t, n = e.substring(2, 3), n += n, r = e.substring(3, 4), r += r) : (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7)), t = parseInt(t, 16), n = parseInt(n, 16), r = parseInt(r, 16);
				}
			}
			return {
				r: t,
				g: n,
				b: r,
				a: i,
				style: e
			};
		}, m = function() {
			return this.ctx.isFillTransparent || this.globalAlpha == 0;
		}, h = function() {
			return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
		};
		f.prototype.fillText = function(e, t, n, r) {
			if (isNaN(t) || isNaN(n) || typeof e != "string") throw wt.error("jsPDF.context2d.fillText: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.fillText");
			if (r = isNaN(r) ? void 0 : r, !m.call(this)) {
				var i = F(this.ctx.transform.rotation), a = this.ctx.transform.scaleX;
				k.call(this, {
					text: e,
					x: t,
					y: n,
					scale: a,
					angle: i,
					align: this.textAlign,
					maxWidth: r
				});
			}
		}, f.prototype.strokeText = function(e, t, n, r) {
			if (isNaN(t) || isNaN(n) || typeof e != "string") throw wt.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.strokeText");
			if (!h.call(this)) {
				r = isNaN(r) ? void 0 : r;
				var i = F(this.ctx.transform.rotation), a = this.ctx.transform.scaleX;
				k.call(this, {
					text: e,
					x: t,
					y: n,
					scale: a,
					renderingMode: "stroke",
					angle: i,
					align: this.textAlign,
					maxWidth: r
				});
			}
		}, f.prototype.measureText = function(e) {
			if (typeof e != "string") throw wt.error("jsPDF.context2d.measureText: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.measureText");
			var t = this.pdf, n = this.pdf.internal.scaleFactor, r = t.internal.getFontSize(), i = t.getStringUnitWidth(e) * r / t.internal.scaleFactor;
			return new function(e) {
				var t = (e ||= {}).width || 0;
				return Object.defineProperty(this, "width", { get: function() {
					return t;
				} }), this;
			}({ width: i *= Math.round(96 * n / 72 * 1e4) / 1e4 });
		}, f.prototype.scale = function(e, t) {
			if (isNaN(e) || isNaN(t)) throw wt.error("jsPDF.context2d.scale: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.scale");
			var n = new l(e, 0, 0, t, 0, 0);
			this.ctx.transform = this.ctx.transform.multiply(n);
		}, f.prototype.rotate = function(e) {
			if (isNaN(e)) throw wt.error("jsPDF.context2d.rotate: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.rotate");
			var t = new l(Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0);
			this.ctx.transform = this.ctx.transform.multiply(t);
		}, f.prototype.translate = function(e, t) {
			if (isNaN(e) || isNaN(t)) throw wt.error("jsPDF.context2d.translate: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.translate");
			var n = new l(1, 0, 0, 1, e, t);
			this.ctx.transform = this.ctx.transform.multiply(n);
		}, f.prototype.transform = function(e, t, n, r, i, a) {
			if (isNaN(e) || isNaN(t) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(a)) throw wt.error("jsPDF.context2d.transform: Invalid arguments", arguments), /* @__PURE__ */ Error("Invalid arguments passed to jsPDF.context2d.transform");
			var o = new l(e, t, n, r, i, a);
			this.ctx.transform = this.ctx.transform.multiply(o);
		}, f.prototype.setTransform = function(e, t, n, r, i, a) {
			e = isNaN(e) ? 1 : e, t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new l(e, t, n, r, i, a);
		};
		var g = function() {
			return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
		};
		f.prototype.drawImage = function(e, t, n, r, i, a, o, s, u) {
			var d = this.pdf.getImageProperties(e), f = 1, p = 1, m = 1, h = 1;
			r !== void 0 && s !== void 0 && (m = s / r, h = u / i, f = d.width / r * s / r, p = d.height / i * u / i), a === void 0 && (a = t, o = n, t = 0, n = 0), r !== void 0 && s === void 0 && (s = r, u = i), r === void 0 && s === void 0 && (s = d.width, u = d.height);
			for (var v, x = this.ctx.transform.decompose(), C = F(x.rotate.shx), w = new l(), T = (w = (w = (w = w.multiply(x.translate)).multiply(x.skew)).multiply(x.scale)).applyToRectangle(new c(a - t * m, o - n * h, r * f, i * p)), E = _.call(this, T), D = [], O = 0; O < E.length; O += 1) D.indexOf(E[O]) === -1 && D.push(E[O]);
			if (b(D), this.autoPaging) for (var k = D[0], A = D[D.length - 1], j = k; j < A + 1; j++) {
				this.pdf.setPage(j);
				var M = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], N = j === 1 ? this.posY + this.margin[0] : this.margin[0], P = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], I = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], L = j === 1 ? 0 : P + (j - 2) * I;
				if (this.ctx.clip_path.length !== 0) {
					var ee = this.path;
					v = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(v, this.posX + this.margin[3], -L + N + this.ctx.prevPageLastElemOffset), S.call(this, "fill", !0), this.path = ee;
				}
				var R = JSON.parse(JSON.stringify(T));
				R = y([R], this.posX + this.margin[3], -L + N + this.ctx.prevPageLastElemOffset)[0];
				var z = (j > k || j < A) && g.call(this);
				z && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], M, I, null).clip().discardPath()), this.pdf.addImage(e, "JPEG", R.x, R.y, R.w, R.h, null, null, C), z && this.pdf.restoreGraphicsState();
			}
			else this.pdf.addImage(e, "JPEG", T.x, T.y, T.w, T.h, null, null, C);
		};
		var _ = function(e, t, n) {
			var r = [];
			t ||= this.pdf.internal.pageSize.width, n ||= this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
			var i = this.posY + this.ctx.prevPageLastElemOffset;
			switch (e.type) {
				default:
				case "mt":
				case "lt":
					r.push(Math.floor((e.y + i) / n) + 1);
					break;
				case "arc":
					r.push(Math.floor((e.y + i - e.radius) / n) + 1), r.push(Math.floor((e.y + i + e.radius) / n) + 1);
					break;
				case "qct":
					var a = I(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x, e.y);
					r.push(Math.floor((a.y + i) / n) + 1), r.push(Math.floor((a.y + a.h + i) / n) + 1);
					break;
				case "bct":
					var o = L(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e.x1, e.y1, e.x2, e.y2, e.x, e.y);
					r.push(Math.floor((o.y + i) / n) + 1), r.push(Math.floor((o.y + o.h + i) / n) + 1);
					break;
				case "rect": r.push(Math.floor((e.y + i) / n) + 1), r.push(Math.floor((e.y + e.h + i) / n) + 1);
			}
			for (var s = 0; s < r.length; s += 1) for (; this.pdf.internal.getNumberOfPages() < r[s];) v.call(this);
			return r;
		}, v = function() {
			var e = this.fillStyle, t = this.strokeStyle, n = this.font, r = this.lineCap, i = this.lineWidth, a = this.lineJoin;
			this.pdf.addPage(), this.fillStyle = e, this.strokeStyle = t, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = a;
		}, y = function(e, t, n) {
			for (var r = 0; r < e.length; r++) switch (e[r].type) {
				case "bct": e[r].x2 += t, e[r].y2 += n;
				case "qct": e[r].x1 += t, e[r].y1 += n;
				case "mt":
				case "lt":
				case "arc":
				default: e[r].x += t, e[r].y += n;
			}
			return e;
		}, b = function(e) {
			return e.sort((function(e, t) {
				return e - t;
			}));
		}, x = function(e, t) {
			for (var n, r, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, c = Math.abs(s * this.ctx.transform.scaleX), l = this.lineJoin, u = JSON.parse(JSON.stringify(this.path)), d = JSON.parse(JSON.stringify(this.path)), f = [], p = 0; p < d.length; p++) if (d[p].x !== void 0) for (var m = _.call(this, d[p]), h = 0; h < m.length; h += 1) f.indexOf(m[h]) === -1 && f.push(m[h]);
			for (var x = 0; x < f.length; x++) for (; this.pdf.internal.getNumberOfPages() < f[x];) v.call(this);
			if (b(f), this.autoPaging) for (var C = f[0], w = f[f.length - 1], T = C; T < w + 1; T++) {
				this.pdf.setPage(T), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = c, this.lineJoin = l;
				var E = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], D = T === 1 ? this.posY + this.margin[0] : this.margin[0], O = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], k = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], A = T === 1 ? 0 : O + (T - 2) * k;
				if (this.ctx.clip_path.length !== 0) {
					var j = this.path;
					n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(n, this.posX + this.margin[3], -A + D + this.ctx.prevPageLastElemOffset), S.call(this, e, !0), this.path = j;
				}
				if (r = JSON.parse(JSON.stringify(u)), this.path = y(r, this.posX + this.margin[3], -A + D + this.ctx.prevPageLastElemOffset), !1 === t || T === 0) {
					var M = (T > C || T < w) && g.call(this);
					M && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], E, k, null).clip().discardPath()), S.call(this, e, t), M && this.pdf.restoreGraphicsState();
				}
				this.lineWidth = s;
			}
			else this.lineWidth = c, S.call(this, e, t), this.lineWidth = s;
			this.path = u;
		}, S = function(e, t) {
			if ((e !== "stroke" || t || !h.call(this)) && (e === "stroke" || t || !m.call(this))) {
				for (var n, r, i = [], a = this.path, o = 0; o < a.length; o++) {
					var s = a[o];
					switch (s.type) {
						case "begin":
							i.push({ begin: !0 });
							break;
						case "close":
							i.push({ close: !0 });
							break;
						case "mt":
							i.push({
								start: s,
								deltas: [],
								abs: []
							});
							break;
						case "lt":
							var c = i.length;
							if (a[o - 1] && !isNaN(a[o - 1].x) && (n = [s.x - a[o - 1].x, s.y - a[o - 1].y], c > 0)) {
								for (; c >= 0; c--) if (!0 !== i[c - 1].close && !0 !== i[c - 1].begin) {
									i[c - 1].deltas.push(n), i[c - 1].abs.push(s);
									break;
								}
							}
							break;
						case "bct":
							n = [
								s.x1 - a[o - 1].x,
								s.y1 - a[o - 1].y,
								s.x2 - a[o - 1].x,
								s.y2 - a[o - 1].y,
								s.x - a[o - 1].x,
								s.y - a[o - 1].y
							], i[i.length - 1].deltas.push(n);
							break;
						case "qct":
							var l = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x), u = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y), d = s.x + 2 / 3 * (s.x1 - s.x), f = s.y + 2 / 3 * (s.y1 - s.y), p = s.x, g = s.y;
							n = [
								l - a[o - 1].x,
								u - a[o - 1].y,
								d - a[o - 1].x,
								f - a[o - 1].y,
								p - a[o - 1].x,
								g - a[o - 1].y
							], i[i.length - 1].deltas.push(n);
							break;
						case "arc": i.push({
							deltas: [],
							abs: [],
							arc: !0
						}), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s);
					}
				}
				r = t ? null : e === "stroke" ? "stroke" : "fill";
				for (var _ = !1, v = 0; v < i.length; v++) if (i[v].arc) for (var y = i[v].abs, b = 0; b < y.length; b++) {
					var x = y[b];
					x.type === "arc" ? T.call(this, x.x, x.y, x.radius, x.startAngle, x.endAngle, x.counterclockwise, void 0, t, !_) : A.call(this, x.x, x.y), _ = !0;
				}
				else if (!0 === i[v].close) this.pdf.internal.out("h"), _ = !1;
				else if (!0 !== i[v].begin) {
					var S = i[v].start.x, C = i[v].start.y;
					j.call(this, i[v].deltas, S, C), _ = !0;
				}
				r && E.call(this, r), t && D.call(this);
			}
		}, C = function(e) {
			var t = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, n = t * (this.pdf.internal.getLineHeightFactor() - 1);
			switch (this.ctx.textBaseline) {
				case "bottom": return e - n;
				case "top": return e + t - n;
				case "hanging": return e + t - 2 * n;
				case "middle": return e + t / 2 - n;
				case "ideographic": return e;
				default: return e;
			}
		}, w = function(e) {
			return e + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
		};
		f.prototype.createLinearGradient = function() {
			var e = function() {};
			return e.colorStops = [], e.addColorStop = function(e, t) {
				this.colorStops.push([e, t]);
			}, e.getColor = function() {
				return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
			}, e.isCanvasGradient = !0, e;
		}, f.prototype.createPattern = function() {
			return this.createLinearGradient();
		}, f.prototype.createRadialGradient = function() {
			return this.createLinearGradient();
		};
		var T = function(e, t, n, r, i, a, o, s, c) {
			for (var l = N.call(this, n, r, i, a), u = 0; u < l.length; u++) {
				var d = l[u];
				u === 0 && (c ? O.call(this, d.x1 + e, d.y1 + t) : A.call(this, d.x1 + e, d.y1 + t)), M.call(this, e, t, d.x2, d.y2, d.x3, d.y3, d.x4, d.y4);
			}
			s ? D.call(this) : E.call(this, o);
		}, E = function(e) {
			switch (e) {
				case "stroke":
					this.pdf.internal.out("S");
					break;
				case "fill": this.pdf.internal.out("f");
			}
		}, D = function() {
			this.pdf.clip(), this.pdf.discardPath();
		}, O = function(e, t) {
			this.pdf.internal.out(n(e) + " " + r(t) + " m");
		}, k = function(e) {
			var t;
			switch (e.align) {
				case "right":
				case "end":
					t = "right";
					break;
				case "center":
					t = "center";
					break;
				default: t = "left";
			}
			var n = this.pdf.getTextDimensions(e.text), r = C.call(this, e.y), i = w.call(this, r) - n.h, a = this.ctx.transform.applyToPoint(new o(e.x, r)), s = this.ctx.transform.decompose(), u = new l();
			u = (u = (u = u.multiply(s.translate)).multiply(s.skew)).multiply(s.scale);
			for (var d, f, p, m = this.ctx.transform.applyToRectangle(new c(e.x, r, n.w, n.h)), h = u.applyToRectangle(new c(e.x, i, n.w, n.h)), v = _.call(this, h), x = [], T = 0; T < v.length; T += 1) x.indexOf(v[T]) === -1 && x.push(v[T]);
			if (b(x), this.autoPaging) for (var E = x[0], D = x[x.length - 1], O = E; O < D + 1; O++) {
				this.pdf.setPage(O);
				var k = O === 1 ? this.posY + this.margin[0] : this.margin[0], A = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], j = this.pdf.internal.pageSize.height - this.margin[2], M = j - this.margin[0], N = this.pdf.internal.pageSize.width - this.margin[1], P = N - this.margin[3], F = O === 1 ? 0 : A + (O - 2) * M;
				if (this.ctx.clip_path.length !== 0) {
					var I = this.path;
					d = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(d, this.posX + this.margin[3], -1 * F + k), S.call(this, "fill", !0), this.path = I;
				}
				var L = y([JSON.parse(JSON.stringify(h))], this.posX + this.margin[3], -F + k + this.ctx.prevPageLastElemOffset)[0];
				e.scale >= .01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * e.scale), p = this.lineWidth, this.lineWidth = p * e.scale);
				var ee = this.autoPaging !== "text";
				if (ee || L.y + L.h <= j) {
					if (ee || L.y >= k && L.x <= N) {
						var R = ee ? e.text : this.pdf.splitTextToSize(e.text, e.maxWidth || N - L.x)[0], z = y([JSON.parse(JSON.stringify(m))], this.posX + this.margin[3], -F + k + this.ctx.prevPageLastElemOffset)[0], B = ee && (O > E || O < D) && g.call(this);
						B && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], P, M, null).clip().discardPath()), this.pdf.text(R, z.x, z.y, {
							angle: e.angle,
							align: t,
							renderingMode: e.renderingMode
						}), B && this.pdf.restoreGraphicsState();
					}
				} else L.y < j && (this.ctx.prevPageLastElemOffset += j - L.y);
				e.scale >= .01 && (this.pdf.setFontSize(f), this.lineWidth = p);
			}
			else e.scale >= .01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * e.scale), p = this.lineWidth, this.lineWidth = p * e.scale), this.pdf.text(e.text, a.x + this.posX, a.y + this.posY, {
				angle: e.angle,
				align: t,
				renderingMode: e.renderingMode,
				maxWidth: e.maxWidth
			}), e.scale >= .01 && (this.pdf.setFontSize(f), this.lineWidth = p);
		}, A = function(e, t, i, a) {
			i ||= 0, a ||= 0, this.pdf.internal.out(n(e + i) + " " + r(t + a) + " l");
		}, j = function(e, t, n) {
			return this.pdf.lines(e, t, n, null, null);
		}, M = function(e, n, r, o, s, c, l, u) {
			this.pdf.internal.out([
				t(i(r + e)),
				t(a(o + n)),
				t(i(s + e)),
				t(a(c + n)),
				t(i(l + e)),
				t(a(u + n)),
				"c"
			].join(" "));
		}, N = function(e, t, n, r) {
			for (var i = 2 * Math.PI, a = Math.PI / 2; t > n;) t -= i;
			var o = Math.abs(n - t);
			o < i && r && (o = i - o);
			for (var s = [], c = r ? -1 : 1, l = t; o > 1e-5;) {
				var u = l + c * Math.min(o, a);
				s.push(P.call(this, e, l, u)), o -= Math.abs(u - l), l = u;
			}
			return s;
		}, P = function(e, t, n) {
			var r = (n - t) / 2, i = e * Math.cos(r), a = e * Math.sin(r), o = i, s = -a, c = o * o + s * s, l = c + o * i + s * a, u = 4 / 3 * (Math.sqrt(2 * c * l) - l) / (o * a - s * i), d = o - u * s, f = s + u * o, p = d, m = -f, h = r + t, g = Math.cos(h), _ = Math.sin(h);
			return {
				x1: e * Math.cos(t),
				y1: e * Math.sin(t),
				x2: d * g - f * _,
				y2: d * _ + f * g,
				x3: p * g - m * _,
				y3: p * _ + m * g,
				x4: e * Math.cos(n),
				y4: e * Math.sin(n)
			};
		}, F = function(e) {
			return 180 * e / Math.PI;
		}, I = function(e, t, n, r, i, a) {
			var o = e + .5 * (n - e), s = t + .5 * (r - t), l = i + .5 * (n - i), u = a + .5 * (r - a), d = Math.min(e, i, o, l), f = Math.max(e, i, o, l), p = Math.min(t, a, s, u), m = Math.max(t, a, s, u);
			return new c(d, p, f - d, m - p);
		}, L = function(e, t, n, r, i, a, o, s) {
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C = n - e, w = r - t, T = i - n, E = a - r, D = o - i, O = s - a;
			for (u = 0; u < 41; u++) _ = (h = (d = e + (l = u / 40) * C) + l * ((p = n + l * T) - d)) + l * (p + l * (i + l * D - p) - h), v = (g = (f = t + l * w) + l * ((m = r + l * E) - f)) + l * (m + l * (a + l * O - m) - g), u == 0 ? (y = _, b = v, x = _, S = v) : (y = Math.min(y, _), b = Math.min(b, v), x = Math.max(x, _), S = Math.max(S, v));
			return new c(Math.round(y), Math.round(b), Math.round(x - y), Math.round(S - b));
		}, ee = function() {
			if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
				var e, t, n = (e = this.ctx.lineDash, t = this.ctx.lineDashOffset, JSON.stringify({
					lineDash: e,
					lineDashOffset: t
				}));
				this.prevLineDash !== n && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = n);
			}
		};
	})(X.API), function(e) {
		var t = function(e) {
			var t, n, r, i, a, o, s, c, l, u;
			for (/[^\x00-\xFF]/.test(e), n = [], r = 0, i = (e += t = "\0\0\0\0".slice(e.length % 4 || 4)).length; i > r; r += 4) (a = (e.charCodeAt(r) << 24) + (e.charCodeAt(r + 1) << 16) + (e.charCodeAt(r + 2) << 8) + e.charCodeAt(r + 3)) === 0 ? n.push(122) : (o = (a = ((a = ((a = ((a = (a - (u = a % 85)) / 85) - (l = a % 85)) / 85) - (c = a % 85)) / 85) - (s = a % 85)) / 85) % 85, n.push(o + 33, s + 33, c + 33, l + 33, u + 33));
			return function(e, t) {
				for (var n = t; n > 0; n--) e.pop();
			}(n, t.length), String.fromCharCode.apply(String, n) + "~>";
		}, n = function(e) {
			var t, n, r, i, a, o = String, s = "length", c = 255, l = "charCodeAt", u = "slice", d = "replace";
			for (e[u](-2), e = e[u](0, -2)[d](/\s/g, "")[d]("z", "!!!!!"), r = [], i = 0, a = (e += t = "uuuuu"[u](e[s] % 5 || 5))[s]; a > i; i += 5) n = 52200625 * (e[l](i) - 33) + 614125 * (e[l](i + 1) - 33) + 7225 * (e[l](i + 2) - 33) + 85 * (e[l](i + 3) - 33) + (e[l](i + 4) - 33), r.push(c & n >> 24, c & n >> 16, c & n >> 8, c & n);
			return function(e, t) {
				for (var n = t; n > 0; n--) e.pop();
			}(r, t[s]), o.fromCharCode.apply(o, r);
		}, r = function(e) {
			var t = /* @__PURE__ */ new RegExp(/^([0-9A-Fa-f]{2})+$/);
			if ((e = e.replace(/\s/g, "")).indexOf(">") !== -1 && (e = e.substr(0, e.indexOf(">"))), e.length % 2 && (e += "0"), !1 === t.test(e)) return "";
			for (var n = "", r = 0; r < e.length; r += 2) n += String.fromCharCode("0x" + (e[r] + e[r + 1]));
			return n;
		}, i = function(e) {
			for (var t = new Uint8Array(e.length), n = e.length; n--;) t[n] = e.charCodeAt(n);
			return e = (t = B(t)).reduce((function(e, t) {
				return e + String.fromCharCode(t);
			}), "");
		};
		e.processDataByFilters = function(e, a) {
			var o = 0, s = e || "", c = [];
			for (typeof (a ||= []) == "string" && (a = [a]), o = 0; o < a.length; o += 1) switch (a[o]) {
				case "ASCII85Decode":
				case "/ASCII85Decode":
					s = n(s), c.push("/ASCII85Encode");
					break;
				case "ASCII85Encode":
				case "/ASCII85Encode":
					s = t(s), c.push("/ASCII85Decode");
					break;
				case "ASCIIHexDecode":
				case "/ASCIIHexDecode":
					s = r(s), c.push("/ASCIIHexEncode");
					break;
				case "ASCIIHexEncode":
				case "/ASCIIHexEncode":
					s = s.split("").map((function(e) {
						return ("0" + e.charCodeAt().toString(16)).slice(-2);
					})).join("") + ">", c.push("/ASCIIHexDecode");
					break;
				case "FlateEncode":
				case "/FlateEncode":
					s = i(s), c.push("/FlateDecode");
					break;
				default: throw Error("The filter: \"" + a[o] + "\" is not implemented");
			}
			return {
				data: s,
				reverseChain: c.reverse().join(" ")
			};
		};
	}(X.API), function(e) {
		e.loadFile = function(e, t, n) {
			return function(e, t, n) {
				t = !1 !== t, n = typeof n == "function" ? n : function() {};
				var r = void 0;
				try {
					r = function(e, t, n) {
						var r = new XMLHttpRequest(), i = 0, a = function(e) {
							var t = e.length, n = [], r = String.fromCharCode;
							for (i = 0; i < t; i += 1) n.push(r(255 & e.charCodeAt(i)));
							return n.join("");
						};
						if (r.open("GET", e, !t), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === t && (r.onload = function() {
							r.status === 200 ? n(a(this.responseText)) : n(void 0);
						}), r.send(null), t && r.status === 200) return a(r.responseText);
					}(e, t, n);
				} catch {}
				return r;
			}(e, t, n);
		}, e.loadImageFile = e.loadFile;
	}(X.API), function(e) {
		function t() {
			return (Z.html2canvas ? Promise.resolve(Z.html2canvas) : import("./html2canvas-B0Abhib8.mjs").then((e) => /* @__PURE__ */ r(e.default))).catch((function(e) {
				return Promise.reject(/* @__PURE__ */ Error("Could not load html2canvas: " + e));
			})).then((function(e) {
				return e.default ? e.default : e;
			}));
		}
		function n() {
			return (Z.DOMPurify ? Promise.resolve(Z.DOMPurify) : import("./purify-DrzkSJfg.mjs").then((e) => /* @__PURE__ */ r(e.default))).catch((function(e) {
				return Promise.reject(/* @__PURE__ */ Error("Could not load dompurify: " + e));
			})).then((function(e) {
				return e.default ? e.default : e;
			}));
		}
		var i = function(e) {
			var t = s(e);
			return t === "undefined" ? "undefined" : t === "string" || e instanceof String ? "string" : t === "number" || e instanceof Number ? "number" : t === "function" || e instanceof Function ? "function" : e && e.constructor === Array ? "array" : e && e.nodeType === 1 ? "element" : t === "object" ? "object" : "unknown";
		}, a = function(e, t) {
			var n = document.createElement(e);
			for (var r in t.className && (n.className = t.className), t.innerHTML && t.dompurify && (n.innerHTML = t.dompurify.sanitize(t.innerHTML)), t.style) n.style[r] = t.style[r];
			return n;
		}, o = function e(t) {
			var n = Object.assign(e.convert(Promise.resolve()), JSON.parse(JSON.stringify(e.template))), r = e.convert(Promise.resolve(), n);
			return r = (r = r.setProgress(1, e, 1, [e])).set(t);
		};
		(o.prototype = Object.create(Promise.prototype)).constructor = o, o.convert = function(e, t) {
			return e.__proto__ = t || o.prototype, e;
		}, o.template = {
			prop: {
				src: null,
				container: null,
				overlay: null,
				canvas: null,
				img: null,
				pdf: null,
				pageSize: null,
				callback: function() {}
			},
			progress: {
				val: 0,
				state: null,
				n: 0,
				stack: []
			},
			opt: {
				filename: "file.pdf",
				margin: [
					0,
					0,
					0,
					0
				],
				enableLinks: !0,
				x: 0,
				y: 0,
				html2canvas: {},
				jsPDF: {},
				backgroundColor: "transparent"
			}
		}, o.prototype.from = function(e, t) {
			return this.then((function() {
				switch (t ||= function(e) {
					switch (i(e)) {
						case "string": return "string";
						case "element": return e.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
						default: return "unknown";
					}
				}(e)) {
					case "string": return this.then(n).then((function(t) {
						return this.set({ src: a("div", {
							innerHTML: e,
							dompurify: t
						}) });
					}));
					case "element": return this.set({ src: e });
					case "canvas": return this.set({ canvas: e });
					case "img": return this.set({ img: e });
					default: return this.error("Unknown source type.");
				}
			}));
		}, o.prototype.to = function(e) {
			switch (e) {
				case "container": return this.toContainer();
				case "canvas": return this.toCanvas();
				case "img": return this.toImg();
				case "pdf": return this.toPdf();
				default: return this.error("Invalid target.");
			}
		}, o.prototype.toContainer = function() {
			return this.thenList([function() {
				return this.prop.src || this.error("Cannot duplicate - no source HTML.");
			}, function() {
				return this.prop.pageSize || this.setPageSize();
			}]).then((function() {
				var e = {
					position: "relative",
					display: "inline-block",
					width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
					left: 0,
					right: 0,
					top: 0,
					margin: "auto",
					backgroundColor: this.opt.backgroundColor
				}, t = function e(t, n) {
					for (var r = t.nodeType === 3 ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), i = t.firstChild; i; i = i.nextSibling) !0 !== n && i.nodeType === 1 && i.nodeName === "SCRIPT" || r.appendChild(e(i, n));
					return t.nodeType === 1 && (t.nodeName === "CANVAS" ? (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(t, 0, 0)) : t.nodeName !== "TEXTAREA" && t.nodeName !== "SELECT" || (r.value = t.value), r.addEventListener("load", (function() {
						r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft;
					}), !0)), r;
				}(this.prop.src, this.opt.html2canvas.javascriptEnabled);
				t.tagName === "BODY" && (e.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = a("div", {
					className: "html2pdf__overlay",
					style: {
						position: "fixed",
						overflow: "hidden",
						zIndex: 1e3,
						left: "-100000px",
						right: 0,
						bottom: 0,
						top: 0
					}
				}), this.prop.container = a("div", {
					className: "html2pdf__container",
					style: e
				}), this.prop.container.appendChild(t), this.prop.container.firstChild.appendChild(a("div", { style: {
					clear: "both",
					border: "0 none transparent",
					margin: 0,
					padding: 0,
					height: 0
				} })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
			}));
		}, o.prototype.toCanvas = function() {
			return this.thenList([function() {
				return document.body.contains(this.prop.container) || this.toContainer();
			}]).then(t).then((function(e) {
				var t = Object.assign({}, this.opt.html2canvas);
				return delete t.onrendered, e(this.prop.container, t);
			})).then((function(e) {
				(this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay);
			}));
		}, o.prototype.toContext2d = function() {
			return this.thenList([function() {
				return document.body.contains(this.prop.container) || this.toContainer();
			}]).then(t).then((function(e) {
				var t = this.opt.jsPDF, n = this.opt.fontFaces, r = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, i = Object.assign({
					async: !0,
					allowTaint: !0,
					scale: r,
					scrollX: this.opt.scrollX || 0,
					scrollY: this.opt.scrollY || 0,
					backgroundColor: "#ffffff",
					imageTimeout: 15e3,
					logging: !0,
					proxy: null,
					removeContainer: !0,
					foreignObjectRendering: !1,
					useCORS: !1
				}, this.opt.html2canvas);
				if (delete i.onrendered, t.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, t.context2d.margin = this.opt.margin, t.context2d.fontFaces = n, n) for (var a = 0; a < n.length; ++a) {
					var o = n[a], s = o.src.find((function(e) {
						return e.format === "truetype";
					}));
					s && t.addFont(s.url, o.ref.name, o.ref.style);
				}
				return i.windowHeight = i.windowHeight || 0, i.windowHeight = i.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i.windowHeight, t.context2d.save(!0), e(this.prop.container, i);
			})).then((function(e) {
				this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(e), this.prop.canvas = e, document.body.removeChild(this.prop.overlay);
			}));
		}, o.prototype.toImg = function() {
			return this.thenList([function() {
				return this.prop.canvas || this.toCanvas();
			}]).then((function() {
				var e = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
				this.prop.img = document.createElement("img"), this.prop.img.src = e;
			}));
		}, o.prototype.toPdf = function() {
			return this.thenList([function() {
				return this.toContext2d();
			}]).then((function() {
				this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
			}));
		}, o.prototype.output = function(e, t, n) {
			return (n ||= "pdf").toLowerCase() === "img" || n.toLowerCase() === "image" ? this.outputImg(e, t) : this.outputPdf(e, t);
		}, o.prototype.outputPdf = function(e, t) {
			return this.thenList([function() {
				return this.prop.pdf || this.toPdf();
			}]).then((function() {
				return this.prop.pdf.output(e, t);
			}));
		}, o.prototype.outputImg = function(e) {
			return this.thenList([function() {
				return this.prop.img || this.toImg();
			}]).then((function() {
				switch (e) {
					case void 0:
					case "img": return this.prop.img;
					case "datauristring":
					case "dataurlstring": return this.prop.img.src;
					case "datauri":
					case "dataurl": return document.location.href = this.prop.img.src;
					default: throw "Image output type \"" + e + "\" is not supported.";
				}
			}));
		}, o.prototype.save = function(e) {
			return this.thenList([function() {
				return this.prop.pdf || this.toPdf();
			}]).set(e ? { filename: e } : null).then((function() {
				this.prop.pdf.save(this.opt.filename);
			}));
		}, o.prototype.doCallback = function() {
			return this.thenList([function() {
				return this.prop.pdf || this.toPdf();
			}]).then((function() {
				this.prop.callback(this.prop.pdf);
			}));
		}, o.prototype.set = function(e) {
			if (i(e) !== "object") return this;
			var t = Object.keys(e || {}).map((function(t) {
				if (t in o.template.prop) return function() {
					this.prop[t] = e[t];
				};
				switch (t) {
					case "margin": return this.setMargin.bind(this, e.margin);
					case "jsPDF": return function() {
						return this.opt.jsPDF = e.jsPDF, this.setPageSize();
					};
					case "pageSize": return this.setPageSize.bind(this, e.pageSize);
					default: return function() {
						this.opt[t] = e[t];
					};
				}
			}), this);
			return this.then((function() {
				return this.thenList(t);
			}));
		}, o.prototype.get = function(e, t) {
			return this.then((function() {
				var n = e in o.template.prop ? this.prop[e] : this.opt[e];
				return t ? t(n) : n;
			}));
		}, o.prototype.setMargin = function(e) {
			return this.then((function() {
				switch (i(e)) {
					case "number": e = [
						e,
						e,
						e,
						e
					];
					case "array": if (e.length === 2 && (e = [
						e[0],
						e[1],
						e[0],
						e[1]
					]), e.length === 4) break;
					default: return this.error("Invalid margin array.");
				}
				this.opt.margin = e;
			})).then(this.setPageSize);
		}, o.prototype.setPageSize = function(e) {
			function t(e, t) {
				return Math.floor(e * t / 72 * 96);
			}
			return this.then((function() {
				(e ||= X.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (e.inner = {
					width: e.width - this.opt.margin[1] - this.opt.margin[3],
					height: e.height - this.opt.margin[0] - this.opt.margin[2]
				}, e.inner.px = {
					width: t(e.inner.width, e.k),
					height: t(e.inner.height, e.k)
				}, e.inner.ratio = e.inner.height / e.inner.width), this.prop.pageSize = e;
			}));
		}, o.prototype.setProgress = function(e, t, n, r) {
			return e != null && (this.progress.val = e), t != null && (this.progress.state = t), n != null && (this.progress.n = n), r != null && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this;
		}, o.prototype.updateProgress = function(e, t, n, r) {
			return this.setProgress(e ? this.progress.val + e : null, t || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null);
		}, o.prototype.then = function(e, t) {
			var n = this;
			return this.thenCore(e, t, (function(e, t) {
				return n.updateProgress(null, null, 1, [e]), Promise.prototype.then.call(this, (function(t) {
					return n.updateProgress(null, e), t;
				})).then(e, t).then((function(e) {
					return n.updateProgress(1), e;
				}));
			}));
		}, o.prototype.thenCore = function(e, t, n) {
			n ||= Promise.prototype.then, e &&= e.bind(this), t &&= t.bind(this);
			var r = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? this : o.convert(Object.assign({}, this), Promise.prototype), i = n.call(r, e, t);
			return o.convert(i, this.__proto__);
		}, o.prototype.thenExternal = function(e, t) {
			return Promise.prototype.then.call(this, e, t);
		}, o.prototype.thenList = function(e) {
			var t = this;
			return e.forEach((function(e) {
				t = t.thenCore(e);
			})), t;
		}, o.prototype.catch = function(e) {
			e &&= e.bind(this);
			var t = Promise.prototype.catch.call(this, e);
			return o.convert(t, this);
		}, o.prototype.catchExternal = function(e) {
			return Promise.prototype.catch.call(this, e);
		}, o.prototype.error = function(e) {
			return this.then((function() {
				throw Error(e);
			}));
		}, o.prototype.using = o.prototype.set, o.prototype.saveAs = o.prototype.save, o.prototype.export = o.prototype.output, o.prototype.run = o.prototype.then, X.getPageSize = function(e, t, n) {
			if (s(e) === "object") {
				var r = e;
				e = r.orientation, t = r.unit || t, n = r.format || n;
			}
			t ||= "mm", n ||= "a4", e = ("" + (e || "P")).toLowerCase();
			var i, a = ("" + n).toLowerCase(), o = {
				a0: [2383.94, 3370.39],
				a1: [1683.78, 2383.94],
				a2: [1190.55, 1683.78],
				a3: [841.89, 1190.55],
				a4: [595.28, 841.89],
				a5: [419.53, 595.28],
				a6: [297.64, 419.53],
				a7: [209.76, 297.64],
				a8: [147.4, 209.76],
				a9: [104.88, 147.4],
				a10: [73.7, 104.88],
				b0: [2834.65, 4008.19],
				b1: [2004.09, 2834.65],
				b2: [1417.32, 2004.09],
				b3: [1000.63, 1417.32],
				b4: [708.66, 1000.63],
				b5: [498.9, 708.66],
				b6: [354.33, 498.9],
				b7: [249.45, 354.33],
				b8: [175.75, 249.45],
				b9: [124.72, 175.75],
				b10: [87.87, 124.72],
				c0: [2599.37, 3676.54],
				c1: [1836.85, 2599.37],
				c2: [1298.27, 1836.85],
				c3: [918.43, 1298.27],
				c4: [649.13, 918.43],
				c5: [459.21, 649.13],
				c6: [323.15, 459.21],
				c7: [229.61, 323.15],
				c8: [161.57, 229.61],
				c9: [113.39, 161.57],
				c10: [79.37, 113.39],
				dl: [311.81, 623.62],
				letter: [612, 792],
				"government-letter": [576, 756],
				legal: [612, 1008],
				"junior-legal": [576, 360],
				ledger: [1224, 792],
				tabloid: [792, 1224],
				"credit-card": [153, 243]
			};
			switch (t) {
				case "pt":
					i = 1;
					break;
				case "mm":
					i = 72 / 25.4;
					break;
				case "cm":
					i = 72 / 2.54;
					break;
				case "in":
					i = 72;
					break;
				case "px":
					i = .75;
					break;
				case "pc":
				case "em":
					i = 12;
					break;
				case "ex":
					i = 6;
					break;
				default: throw "Invalid unit: " + t;
			}
			var c, l = 0, u = 0;
			if (o.hasOwnProperty(a)) l = o[a][1] / i, u = o[a][0] / i;
			else try {
				l = n[1], u = n[0];
			} catch {
				throw Error("Invalid format: " + n);
			}
			if (e === "p" || e === "portrait") e = "p", u > l && (c = u, u = l, l = c);
			else {
				if (e !== "l" && e !== "landscape") throw "Invalid orientation: " + e;
				e = "l", l > u && (c = u, u = l, l = c);
			}
			return {
				width: u,
				height: l,
				unit: t,
				k: i,
				orientation: e
			};
		}, e.html = function(e, t) {
			(t ||= {}).callback = t.callback || function() {}, t.html2canvas = t.html2canvas || {}, t.html2canvas.canvas = t.html2canvas.canvas || this.canvas, t.jsPDF = t.jsPDF || this, t.fontFaces = t.fontFaces ? t.fontFaces.map(ft) : null;
			var n = new o(t);
			return t.worker ? n : n.from(e).doCallback();
		};
	}(X.API), X.API.addJS = function(e) {
		return On = e, this.internal.events.subscribe("postPutResources", (function() {
			En = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (En + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Dn = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + On + ")"), this.internal.out(">>"), this.internal.out("endobj");
		})), this.internal.events.subscribe("putCatalog", (function() {
			En !== void 0 && Dn !== void 0 && this.internal.out("/Names <</JavaScript " + En + " 0 R>>");
		})), this;
	}, function(e) {
		var t;
		e.events.push(["postPutResources", function() {
			var e = this, n = /^(\d+) 0 obj$/;
			if (this.outline.root.children.length > 0) for (var r = e.outline.render().split(/\r\n/), i = 0; i < r.length; i++) {
				var a = r[i], o = n.exec(a);
				if (o != null) {
					var s = o[1];
					e.internal.newObjectDeferredBegin(s, !1);
				}
				e.internal.write(a);
			}
			if (this.outline.createNamedDestinations) {
				var c = this.internal.pages.length, l = [];
				for (i = 0; i < c; i++) {
					var u = e.internal.newObject();
					l.push(u);
					var d = e.internal.getPageInfo(i + 1);
					e.internal.write("<< /D[" + d.objId + " 0 R /XYZ null null null]>> endobj");
				}
				var f = e.internal.newObject();
				for (e.internal.write("<< /Names [ "), i = 0; i < l.length; i++) e.internal.write("(page_" + (i + 1) + ")" + l[i] + " 0 R");
				e.internal.write(" ] >>", "endobj"), t = e.internal.newObject(), e.internal.write("<< /Dests " + f + " 0 R"), e.internal.write(">>", "endobj");
			}
		}]), e.events.push(["putCatalog", function() {
			this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + t + " 0 R"));
		}]), e.events.push(["initialized", function() {
			var e = this;
			e.outline = {
				createNamedDestinations: !1,
				root: { children: [] }
			}, e.outline.add = function(e, t, n) {
				var r = {
					title: t,
					options: n,
					children: []
				};
				return e ??= this.root, e.children.push(r), r;
			}, e.outline.render = function() {
				return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
			}, e.outline.genIds_r = function(t) {
				t.id = e.internal.newObjectDeferred();
				for (var n = 0; n < t.children.length; n++) this.genIds_r(t.children[n]);
			}, e.outline.renderRoot = function(e) {
				this.objStart(e), this.line("/Type /Outlines"), e.children.length > 0 && (this.line("/First " + this.makeRef(e.children[0])), this.line("/Last " + this.makeRef(e.children[e.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, e)), this.objEnd();
			}, e.outline.renderItems = function(t) {
				for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < t.children.length; r++) {
					var i = t.children[r];
					this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(t)), r > 0 && this.line("/Prev " + this.makeRef(t.children[r - 1])), r < t.children.length - 1 && this.line("/Next " + this.makeRef(t.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
					var a = this.count = this.count_r({ count: 0 }, i);
					if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
						var o = e.internal.getPageInfo(i.options.pageNumber);
						this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + n(0) + " 0]");
					}
					this.objEnd();
				}
				for (var s = 0; s < t.children.length; s++) this.renderItems(t.children[s]);
			}, e.outline.line = function(e) {
				this.ctx.val += e + "\r\n";
			}, e.outline.makeRef = function(e) {
				return e.id + " 0 R";
			}, e.outline.makeString = function(t) {
				return "(" + e.internal.pdfEscape(t) + ")";
			}, e.outline.objStart = function(e) {
				this.ctx.val += "\r\n" + e.id + " 0 obj\r\n<<\r\n";
			}, e.outline.objEnd = function() {
				this.ctx.val += ">> \r\nendobj\r\n";
			}, e.outline.count_r = function(e, t) {
				for (var n = 0; n < t.children.length; n++) e.count++, this.count_r(e, t.children[n]);
				return e.count;
			};
		}]);
	}(X.API), function(e) {
		var t = [
			192,
			193,
			194,
			195,
			196,
			197,
			198,
			199
		];
		e.processJPEG = function(e, n, r, i, a, o) {
			var s, c = this.decode.DCT_DECODE, l = null;
			if (typeof e == "string" || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
				switch (e = a || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, (s = function(e) {
					for (var n, r = 256 * e.charCodeAt(4) + e.charCodeAt(5), i = e.length, a = {
						width: 0,
						height: 0,
						numcomponents: 1
					}, o = 4; o < i; o += 2) {
						if (o += r, t.indexOf(e.charCodeAt(o + 1)) !== -1) {
							n = 256 * e.charCodeAt(o + 5) + e.charCodeAt(o + 6), a = {
								width: 256 * e.charCodeAt(o + 7) + e.charCodeAt(o + 8),
								height: n,
								numcomponents: e.charCodeAt(o + 9)
							};
							break;
						}
						r = 256 * e.charCodeAt(o + 2) + e.charCodeAt(o + 3);
					}
					return a;
				}(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e)).numcomponents) {
					case 1:
						o = this.color_spaces.DEVICE_GRAY;
						break;
					case 4:
						o = this.color_spaces.DEVICE_CMYK;
						break;
					case 3: o = this.color_spaces.DEVICE_RGB;
				}
				l = {
					data: e,
					width: s.width,
					height: s.height,
					colorSpace: o,
					bitsPerComponent: 8,
					filter: c,
					index: n,
					alias: r
				};
			}
			return l;
		};
	}(X.API), Fn = function() {
		var e, t, n;
		function r(e) {
			var t, n, r, i, a, o, s, c, l, u, d, f, p, m;
			for (this.data = e, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, o = null;;) {
				switch (t = this.readUInt32(), l = function() {
					var e, t;
					for (t = [], e = 0; e < 4; ++e) t.push(String.fromCharCode(this.data[this.pos++]));
					return t;
				}.call(this).join("")) {
					case "IHDR":
						this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
						break;
					case "acTL":
						this.animation = {
							numFrames: this.readUInt32(),
							numPlays: this.readUInt32() || Infinity,
							frames: []
						};
						break;
					case "PLTE":
						this.palette = this.read(t);
						break;
					case "fcTL":
						o && this.animation.frames.push(o), this.pos += 4, o = {
							width: this.readUInt32(),
							height: this.readUInt32(),
							xOffset: this.readUInt32(),
							yOffset: this.readUInt32()
						}, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1e3 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
						break;
					case "IDAT":
					case "fdAT":
						for (l === "fdAT" && (this.pos += 4, t -= 4), e = o?.data || this.imgData, f = 0; 0 <= t ? f < t : f > t; 0 <= t ? ++f : --f) e.push(this.data[this.pos++]);
						break;
					case "tRNS":
						switch (this.transparency = {}, this.colorType) {
							case 3:
								if (r = this.palette.length / 3, this.transparency.indexed = this.read(t), this.transparency.indexed.length > r) throw Error("More transparent colors than palette size");
								if ((u = r - this.transparency.indexed.length) > 0) for (p = 0; 0 <= u ? p < u : p > u; 0 <= u ? ++p : --p) this.transparency.indexed.push(255);
								break;
							case 0:
								this.transparency.grayscale = this.read(t)[0];
								break;
							case 2: this.transparency.rgb = this.read(t);
						}
						break;
					case "tEXt":
						s = (d = this.read(t)).indexOf(0), c = String.fromCharCode.apply(String, d.slice(0, s)), this.text[c] = String.fromCharCode.apply(String, d.slice(s + 1));
						break;
					case "IEND":
						o && this.animation.frames.push(o), this.colors = function() {
							switch (this.colorType) {
								case 0:
								case 3:
								case 4: return 1;
								case 2:
								case 6: return 3;
							}
						}.call(this), this.hasAlphaChannel = (m = this.colorType) === 4 || m === 6, n = this.colors + +!!this.hasAlphaChannel, this.pixelBitlength = this.bits * n, this.colorSpace = function() {
							switch (this.colors) {
								case 1: return "DeviceGray";
								case 3: return "DeviceRGB";
							}
						}.call(this), this.imgData = new Uint8Array(this.imgData);
						return;
					default: this.pos += t;
				}
				if (this.pos += 4, this.pos > this.data.length) throw Error("Incomplete or corrupt PNG file");
			}
		}
		r.prototype.read = function(e) {
			var t, n;
			for (n = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t) n.push(this.data[this.pos++]);
			return n;
		}, r.prototype.readUInt32 = function() {
			return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
		}, r.prototype.readUInt16 = function() {
			return this.data[this.pos++] << 8 | this.data[this.pos++];
		}, r.prototype.decodePixels = function(e) {
			var t = this.pixelBitlength / 8, n = new Uint8Array(this.width * this.height * t), r = 0, i = this;
			if (e ??= this.imgData, e.length === 0) return new Uint8Array();
			function a(a, o, s, c) {
				var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A = Math.ceil((i.width - a) / s), j = Math.ceil((i.height - o) / c), M = i.width == A && i.height == j;
				for (S = t * A, b = M ? n : new Uint8Array(S * j), m = e.length, x = 0, u = 0; x < j && r < m;) {
					switch (e[r++]) {
						case 0:
							for (f = T = 0; T < S; f = T += 1) b[u++] = e[r++];
							break;
						case 1:
							for (f = E = 0; E < S; f = E += 1) l = e[r++], p = f < t ? 0 : b[u - t], b[u++] = (l + p) % 256;
							break;
						case 2:
							for (f = D = 0; D < S; f = D += 1) l = e[r++], d = (f - f % t) / t, C = x && b[(x - 1) * S + d * t + f % t], b[u++] = (C + l) % 256;
							break;
						case 3:
							for (f = O = 0; O < S; f = O += 1) l = e[r++], d = (f - f % t) / t, p = f < t ? 0 : b[u - t], C = x && b[(x - 1) * S + d * t + f % t], b[u++] = (l + Math.floor((p + C) / 2)) % 256;
							break;
						case 4:
							for (f = k = 0; k < S; f = k += 1) l = e[r++], d = (f - f % t) / t, p = f < t ? 0 : b[u - t], x === 0 ? C = w = 0 : (C = b[(x - 1) * S + d * t + f % t], w = d && b[(x - 1) * S + (d - 1) * t + f % t]), h = p + C - w, g = Math.abs(h - p), v = Math.abs(h - C), y = Math.abs(h - w), _ = g <= v && g <= y ? p : v <= y ? C : w, b[u++] = (l + _) % 256;
							break;
						default: throw Error("Invalid filter algorithm: " + e[r - 1]);
					}
					if (!M) {
						var N = ((o + x * c) * i.width + a) * t, P = x * S;
						for (f = 0; f < A; f += 1) {
							for (var F = 0; F < t; F += 1) n[N++] = b[P++];
							N += (s - 1) * t;
						}
					}
					x++;
				}
			}
			return e = te(e), i.interlaceMethod == 1 ? (a(0, 0, 8, 8), a(4, 0, 8, 8), a(0, 4, 4, 8), a(2, 0, 4, 4), a(0, 2, 2, 4), a(1, 0, 2, 2), a(0, 1, 1, 2)) : a(0, 0, 1, 1), n;
		}, r.prototype.decodePalette = function() {
			var e, t, n, r, i, a, o, s;
			for (n = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + n.length), r = 0, e = 0, t = o = 0, s = n.length; o < s; t = o += 3) i[r++] = n[t], i[r++] = n[t + 1], i[r++] = n[t + 2], i[r++] = a[e++] ?? 255;
			return i;
		}, r.prototype.copyToImageData = function(e, t) {
			var n, r, i, a, o, s, c, l, u, d;
			if (r = this.colors, u = null, n = this.hasAlphaChannel, this.palette.length && (u = this._decodedPalette ??= this.decodePalette(), r = 4, n = !0), l = (i = e.data || e).length, o = u || t, a = s = 0, r === 1) for (; a < l;) c = u ? 4 * t[a / 4] : s, d = o[c++], i[a++] = d, i[a++] = d, i[a++] = d, i[a++] = n ? o[c++] : 255, s = c;
			else for (; a < l;) c = u ? 4 * t[a / 4] : s, i[a++] = o[c++], i[a++] = o[c++], i[a++] = o[c++], i[a++] = n ? o[c++] : 255, s = c;
		}, r.prototype.decode = function() {
			var e;
			return e = new Uint8Array(this.width * this.height * 4), this.copyToImageData(e, this.decodePixels()), e;
		};
		var i = function() {
			if (Object.prototype.toString.call(Z) === "[object Window]") {
				try {
					t = Z.document.createElement("canvas"), n = t.getContext("2d");
				} catch {
					return !1;
				}
				return !0;
			}
			return !1;
		};
		return i(), e = function(e) {
			var r;
			if (!0 === i()) return n.width = e.width, n.height = e.height, n.clearRect(0, 0, e.width, e.height), n.putImageData(e, 0, 0), (r = new Image()).src = t.toDataURL(), r;
			throw Error("This method requires a Browser with Canvas-capability.");
		}, r.prototype.decodeFrames = function(t) {
			var n, r, i, a, o, s, c, l;
			if (this.animation) {
				for (l = [], r = o = 0, s = (c = this.animation.frames).length; o < s; r = ++o) n = c[r], i = t.createImageData(n.width, n.height), a = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, a), n.imageData = i, l.push(n.image = e(i));
				return l;
			}
		}, r.prototype.renderFrame = function(e, t) {
			var n, r, i;
			return n = (r = this.animation.frames)[t], i = r[t - 1], t === 0 && e.clearRect(0, 0, this.width, this.height), i?.disposeOp === 1 ? e.clearRect(i.xOffset, i.yOffset, i.width, i.height) : i?.disposeOp === 2 && e.putImageData(i.imageData, i.xOffset, i.yOffset), n.blendOp === 0 && e.clearRect(n.xOffset, n.yOffset, n.width, n.height), e.drawImage(n.image, n.xOffset, n.yOffset);
		}, r.prototype.animate = function(e) {
			var t, n, r, i, a, o, s = this;
			return n = 0, o = this.animation, i = o.numFrames, r = o.frames, a = o.numPlays, (t = function() {
				var o, c;
				if (o = n++ % i, c = r[o], s.renderFrame(e, o), i > 1 && n / i < a) return s.animation._timeout = setTimeout(t, c.delay);
			})();
		}, r.prototype.stopAnimation = function() {
			return clearTimeout(this.animation?._timeout);
		}, r.prototype.render = function(e) {
			var t, n;
			return e._png && e._png.stopAnimation(), e._png = this, e.width = this.width, e.height = this.height, t = e.getContext("2d"), this.animation ? (this.decodeFrames(t), this.animate(t)) : (n = t.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), t.putImageData(n, 0, 0));
		}, r;
	}(), (function(e) {
		var t = function() {
			return typeof B == "function";
		}, n = function(t, n, i, l) {
			var u = 4, d = o;
			switch (l) {
				case e.image_compression.FAST:
					u = 1, d = a;
					break;
				case e.image_compression.MEDIUM:
					u = 6, d = s;
					break;
				case e.image_compression.SLOW: u = 9, d = c;
			}
			t = r(t, n, i, d);
			var f = B(t, { level: u });
			return e.__addimage__.arrayBufferToBinaryString(f);
		}, r = function(e, t, n, r) {
			for (var i, a, o, s = e.length / t, c = new Uint8Array(e.length + s), l = u(), f = 0; f < s; f += 1) {
				if (o = f * t, i = e.subarray(o, o + t), r) c.set(r(i, n, a), o + f);
				else {
					for (var p, m = l.length, h = []; p < m; p += 1) h[p] = l[p](i, n, a);
					var g = d(h.concat());
					c.set(h[g], o + f);
				}
				a = i;
			}
			return c;
		}, i = function(e) {
			var t = Array.apply([], e);
			return t.unshift(0), t;
		}, a = function(e, t) {
			var n, r = [], i = e.length;
			r[0] = 1;
			for (var a = 0; a < i; a += 1) n = e[a - t] || 0, r[a + 1] = e[a] - n + 256 & 255;
			return r;
		}, o = function(e, t, n) {
			var r, i = [], a = e.length;
			i[0] = 2;
			for (var o = 0; o < a; o += 1) r = n && n[o] || 0, i[o + 1] = e[o] - r + 256 & 255;
			return i;
		}, s = function(e, t, n) {
			var r, i, a = [], o = e.length;
			a[0] = 3;
			for (var s = 0; s < o; s += 1) r = e[s - t] || 0, i = n && n[s] || 0, a[s + 1] = e[s] + 256 - (r + i >>> 1) & 255;
			return a;
		}, c = function(e, t, n) {
			var r, i, a, o, s = [], c = e.length;
			s[0] = 4;
			for (var u = 0; u < c; u += 1) r = e[u - t] || 0, i = n && n[u] || 0, a = n && n[u - t] || 0, o = l(r, i, a), s[u + 1] = e[u] - o + 256 & 255;
			return s;
		}, l = function(e, t, n) {
			if (e === t && t === n) return e;
			var r = Math.abs(t - n), i = Math.abs(e - n), a = Math.abs(e + t - n - n);
			return r <= i && r <= a ? e : i <= a ? t : n;
		}, u = function() {
			return [
				i,
				a,
				o,
				s,
				c
			];
		}, d = function(e) {
			var t = e.map((function(e) {
				return e.reduce((function(e, t) {
					return e + Math.abs(t);
				}), 0);
			}));
			return t.indexOf(Math.min.apply(null, t));
		};
		e.processPNG = function(r, i, a, o) {
			var s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S = this.decode.FLATE_DECODE, C = "";
			if (this.__addimage__.isArrayBuffer(r) && (r = new Uint8Array(r)), this.__addimage__.isArrayBufferView(r)) {
				if (r = (l = new Fn(r)).imgData, c = l.bits, s = l.colorSpace, d = l.colors, [4, 6].indexOf(l.colorType) !== -1) {
					if (l.bits === 8) {
						h = (m = l.pixelBitlength == 32 ? new Uint32Array(l.decodePixels().buffer) : l.pixelBitlength == 16 ? new Uint16Array(l.decodePixels().buffer) : new Uint8Array(l.decodePixels().buffer)).length, _ = new Uint8Array(h * l.colors), g = new Uint8Array(h);
						var w, T = l.pixelBitlength - l.bits;
						for (b = 0, x = 0; b < h; b++) {
							for (y = m[b], w = 0; w < T;) _[x++] = y >>> w & 255, w += l.bits;
							g[b] = y >>> w & 255;
						}
					}
					if (l.bits === 16) {
						h = (m = new Uint32Array(l.decodePixels().buffer)).length, _ = new Uint8Array(h * (32 / l.pixelBitlength) * l.colors), g = new Uint8Array(h * (32 / l.pixelBitlength)), v = l.colors > 1, b = 0, x = 0;
						for (var E = 0; b < h;) y = m[b++], _[x++] = y >>> 0 & 255, v && (_[x++] = y >>> 16 & 255, y = m[b++], _[x++] = y >>> 0 & 255), g[E++] = y >>> 16 & 255;
						c = 8;
					}
					o !== e.image_compression.NONE && t() ? (r = n(_, l.width * l.colors, l.colors, o), p = n(g, l.width, 1, o)) : (r = _, p = g, S = void 0);
				}
				if (l.colorType === 3 && (s = this.color_spaces.INDEXED, f = l.palette, l.transparency.indexed)) {
					var D = l.transparency.indexed, O = 0;
					for (b = 0, h = D.length; b < h; ++b) O += D[b];
					if ((O /= 255) == h - 1 && D.indexOf(0) !== -1) u = [D.indexOf(0)];
					else if (O !== h) {
						for (m = l.decodePixels(), g = new Uint8Array(m.length), b = 0, h = m.length; b < h; b++) g[b] = D[m[b]];
						p = n(g, l.width, 1);
					}
				}
				var k = function(t) {
					var n;
					switch (t) {
						case e.image_compression.FAST:
							n = 11;
							break;
						case e.image_compression.MEDIUM:
							n = 13;
							break;
						case e.image_compression.SLOW:
							n = 14;
							break;
						default: n = 12;
					}
					return n;
				}(o);
				return S === this.decode.FLATE_DECODE && (C = "/Predictor " + k + " "), C += "/Colors " + d + " /BitsPerComponent " + c + " /Columns " + l.width, (this.__addimage__.isArrayBuffer(r) || this.__addimage__.isArrayBufferView(r)) && (r = this.__addimage__.arrayBufferToBinaryString(r)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
					alias: a,
					data: r,
					index: i,
					filter: S,
					decodeParameters: C,
					transparency: u,
					palette: f,
					sMask: p,
					predictor: k,
					width: l.width,
					height: l.height,
					bitsPerComponent: c,
					colorSpace: s
				};
			}
		};
	})(X.API), function(e) {
		e.processGIF89A = function(t, n, r, i) {
			var a = new yt(t), o = a.width, s = a.height, c = [];
			a.decodeAndBlitFrameRGBA(0, c);
			var l = {
				data: c,
				width: o,
				height: s
			}, u = new xt(100).encode(l, 100);
			return e.processJPEG.call(this, u, n, r, i);
		}, e.processGIF87A = e.processGIF89A;
	}(X.API), St.prototype.parseHeader = function() {
		if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
			var e = this.colors === 0 ? 1 << this.bitPP : this.colors;
			this.palette = Array(e);
			for (var t = 0; t < e; t++) {
				var n = this.datav.getUint8(this.pos++, !0), r = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0);
				this.palette[t] = {
					red: i,
					green: r,
					blue: n,
					quad: a
				};
			}
		}
		this.height < 0 && (this.height *= -1, this.bottom_up = !1);
	}, St.prototype.parseBGR = function() {
		this.pos = this.offset;
		try {
			var e = "bit" + this.bitPP, t = this.width * this.height * 4;
			this.data = new Uint8Array(t), this[e]();
		} catch (e) {
			wt.log("bit decode error:" + e);
		}
	}, St.prototype.bit1 = function() {
		var e, t = Math.ceil(this.width / 8), n = t % 4;
		for (e = this.height - 1; e >= 0; e--) {
			for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < t; i++) for (var a = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
				var c = this.palette[a >> 7 - s & 1];
				this.data[o + 4 * s] = c.blue, this.data[o + 4 * s + 1] = c.green, this.data[o + 4 * s + 2] = c.red, this.data[o + 4 * s + 3] = 255;
			}
			n !== 0 && (this.pos += 4 - n);
		}
	}, St.prototype.bit4 = function() {
		for (var e = Math.ceil(this.width / 2), t = e % 4, n = this.height - 1; n >= 0; n--) {
			for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < e; i++) {
				var a = this.datav.getUint8(this.pos++, !0), o = r * this.width * 4 + 2 * i * 4, s = a >> 4, c = 15 & a, l = this.palette[s];
				if (this.data[o] = l.blue, this.data[o + 1] = l.green, this.data[o + 2] = l.red, this.data[o + 3] = 255, 2 * i + 1 >= this.width) break;
				l = this.palette[c], this.data[o + 4] = l.blue, this.data[o + 4 + 1] = l.green, this.data[o + 4 + 2] = l.red, this.data[o + 4 + 3] = 255;
			}
			t !== 0 && (this.pos += 4 - t);
		}
	}, St.prototype.bit8 = function() {
		for (var e = this.width % 4, t = this.height - 1; t >= 0; t--) {
			for (var n = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++) {
				var i = this.datav.getUint8(this.pos++, !0), a = n * this.width * 4 + 4 * r;
				if (i < this.palette.length) {
					var o = this.palette[i];
					this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255;
				} else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
			}
			e !== 0 && (this.pos += 4 - e);
		}
	}, St.prototype.bit15 = function() {
		for (var e = this.width % 3, t = 31, n = this.height - 1; n >= 0; n--) {
			for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
				var a = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var o = (a & t) / t * 255 | 0, s = (a >> 5 & t) / t * 255 | 0, c = (a >> 10 & t) / t * 255 | 0, l = a >> 15 ? 255 : 0, u = r * this.width * 4 + 4 * i;
				this.data[u] = c, this.data[u + 1] = s, this.data[u + 2] = o, this.data[u + 3] = l;
			}
			this.pos += e;
		}
	}, St.prototype.bit16 = function() {
		for (var e = this.width % 3, t = 31, n = 63, r = this.height - 1; r >= 0; r--) {
			for (var i = this.bottom_up ? r : this.height - 1 - r, a = 0; a < this.width; a++) {
				var o = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var s = (o & t) / t * 255 | 0, c = (o >> 5 & n) / n * 255 | 0, l = (o >> 11) / t * 255 | 0, u = i * this.width * 4 + 4 * a;
				this.data[u] = l, this.data[u + 1] = c, this.data[u + 2] = s, this.data[u + 3] = 255;
			}
			this.pos += e;
		}
	}, St.prototype.bit24 = function() {
		for (var e = this.height - 1; e >= 0; e--) {
			for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
				var r = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = t * this.width * 4 + 4 * n;
				this.data[o] = a, this.data[o + 1] = i, this.data[o + 2] = r, this.data[o + 3] = 255;
			}
			this.pos += this.width % 4;
		}
	}, St.prototype.bit32 = function() {
		for (var e = this.height - 1; e >= 0; e--) for (var t = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++) {
			var r = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), s = t * this.width * 4 + 4 * n;
			this.data[s] = a, this.data[s + 1] = i, this.data[s + 2] = r, this.data[s + 3] = o;
		}
	}, St.prototype.getData = function() {
		return this.data;
	}, function(e) {
		e.processBMP = function(t, n, r, i) {
			var a = new St(t, !1), o = a.width, s = a.height, c = {
				data: a.getData(),
				width: o,
				height: s
			}, l = new xt(100).encode(c, 100);
			return e.processJPEG.call(this, l, n, r, i);
		};
	}(X.API), Ct.prototype.getData = function() {
		return this.data;
	}, function(e) {
		e.processWEBP = function(t, n, r, i) {
			var a = new Ct(t, !1), o = a.width, s = a.height, c = {
				data: a.getData(),
				width: o,
				height: s
			}, l = new xt(100).encode(c, 100);
			return e.processJPEG.call(this, l, n, r, i);
		};
	}(X.API), X.API.processRGBA = function(e, t, n) {
		for (var r = e.data, i = r.length, a = new Uint8Array(i / 4 * 3), o = new Uint8Array(i / 4), s = 0, c = 0, l = 0; l < i; l += 4) {
			var u = r[l], d = r[l + 1], f = r[l + 2], p = r[l + 3];
			a[s++] = u, a[s++] = d, a[s++] = f, o[c++] = p;
		}
		var m = this.__addimage__.arrayBufferToBinaryString(a);
		return {
			alpha: this.__addimage__.arrayBufferToBinaryString(o),
			data: m,
			index: t,
			alias: n,
			colorSpace: "DeviceRGB",
			bitsPerComponent: 8,
			width: e.width,
			height: e.height
		};
	}, X.API.setLanguage = function(e) {
		return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), {
			af: "Afrikaans",
			sq: "Albanian",
			ar: "Arabic (Standard)",
			"ar-DZ": "Arabic (Algeria)",
			"ar-BH": "Arabic (Bahrain)",
			"ar-EG": "Arabic (Egypt)",
			"ar-IQ": "Arabic (Iraq)",
			"ar-JO": "Arabic (Jordan)",
			"ar-KW": "Arabic (Kuwait)",
			"ar-LB": "Arabic (Lebanon)",
			"ar-LY": "Arabic (Libya)",
			"ar-MA": "Arabic (Morocco)",
			"ar-OM": "Arabic (Oman)",
			"ar-QA": "Arabic (Qatar)",
			"ar-SA": "Arabic (Saudi Arabia)",
			"ar-SY": "Arabic (Syria)",
			"ar-TN": "Arabic (Tunisia)",
			"ar-AE": "Arabic (U.A.E.)",
			"ar-YE": "Arabic (Yemen)",
			an: "Aragonese",
			hy: "Armenian",
			as: "Assamese",
			ast: "Asturian",
			az: "Azerbaijani",
			eu: "Basque",
			be: "Belarusian",
			bn: "Bengali",
			bs: "Bosnian",
			br: "Breton",
			bg: "Bulgarian",
			my: "Burmese",
			ca: "Catalan",
			ch: "Chamorro",
			ce: "Chechen",
			zh: "Chinese",
			"zh-HK": "Chinese (Hong Kong)",
			"zh-CN": "Chinese (PRC)",
			"zh-SG": "Chinese (Singapore)",
			"zh-TW": "Chinese (Taiwan)",
			cv: "Chuvash",
			co: "Corsican",
			cr: "Cree",
			hr: "Croatian",
			cs: "Czech",
			da: "Danish",
			nl: "Dutch (Standard)",
			"nl-BE": "Dutch (Belgian)",
			en: "English",
			"en-AU": "English (Australia)",
			"en-BZ": "English (Belize)",
			"en-CA": "English (Canada)",
			"en-IE": "English (Ireland)",
			"en-JM": "English (Jamaica)",
			"en-NZ": "English (New Zealand)",
			"en-PH": "English (Philippines)",
			"en-ZA": "English (South Africa)",
			"en-TT": "English (Trinidad & Tobago)",
			"en-GB": "English (United Kingdom)",
			"en-US": "English (United States)",
			"en-ZW": "English (Zimbabwe)",
			eo: "Esperanto",
			et: "Estonian",
			fo: "Faeroese",
			fj: "Fijian",
			fi: "Finnish",
			fr: "French (Standard)",
			"fr-BE": "French (Belgium)",
			"fr-CA": "French (Canada)",
			"fr-FR": "French (France)",
			"fr-LU": "French (Luxembourg)",
			"fr-MC": "French (Monaco)",
			"fr-CH": "French (Switzerland)",
			fy: "Frisian",
			fur: "Friulian",
			gd: "Gaelic (Scots)",
			"gd-IE": "Gaelic (Irish)",
			gl: "Galacian",
			ka: "Georgian",
			de: "German (Standard)",
			"de-AT": "German (Austria)",
			"de-DE": "German (Germany)",
			"de-LI": "German (Liechtenstein)",
			"de-LU": "German (Luxembourg)",
			"de-CH": "German (Switzerland)",
			el: "Greek",
			gu: "Gujurati",
			ht: "Haitian",
			he: "Hebrew",
			hi: "Hindi",
			hu: "Hungarian",
			is: "Icelandic",
			id: "Indonesian",
			iu: "Inuktitut",
			ga: "Irish",
			it: "Italian (Standard)",
			"it-CH": "Italian (Switzerland)",
			ja: "Japanese",
			kn: "Kannada",
			ks: "Kashmiri",
			kk: "Kazakh",
			km: "Khmer",
			ky: "Kirghiz",
			tlh: "Klingon",
			ko: "Korean",
			"ko-KP": "Korean (North Korea)",
			"ko-KR": "Korean (South Korea)",
			la: "Latin",
			lv: "Latvian",
			lt: "Lithuanian",
			lb: "Luxembourgish",
			mk: "North Macedonia",
			ms: "Malay",
			ml: "Malayalam",
			mt: "Maltese",
			mi: "Maori",
			mr: "Marathi",
			mo: "Moldavian",
			nv: "Navajo",
			ng: "Ndonga",
			ne: "Nepali",
			no: "Norwegian",
			nb: "Norwegian (Bokmal)",
			nn: "Norwegian (Nynorsk)",
			oc: "Occitan",
			or: "Oriya",
			om: "Oromo",
			fa: "Persian",
			"fa-IR": "Persian/Iran",
			pl: "Polish",
			pt: "Portuguese",
			"pt-BR": "Portuguese (Brazil)",
			pa: "Punjabi",
			"pa-IN": "Punjabi (India)",
			"pa-PK": "Punjabi (Pakistan)",
			qu: "Quechua",
			rm: "Rhaeto-Romanic",
			ro: "Romanian",
			"ro-MO": "Romanian (Moldavia)",
			ru: "Russian",
			"ru-MO": "Russian (Moldavia)",
			sz: "Sami (Lappish)",
			sg: "Sango",
			sa: "Sanskrit",
			sc: "Sardinian",
			sd: "Sindhi",
			si: "Singhalese",
			sr: "Serbian",
			sk: "Slovak",
			sl: "Slovenian",
			so: "Somani",
			sb: "Sorbian",
			es: "Spanish",
			"es-AR": "Spanish (Argentina)",
			"es-BO": "Spanish (Bolivia)",
			"es-CL": "Spanish (Chile)",
			"es-CO": "Spanish (Colombia)",
			"es-CR": "Spanish (Costa Rica)",
			"es-DO": "Spanish (Dominican Republic)",
			"es-EC": "Spanish (Ecuador)",
			"es-SV": "Spanish (El Salvador)",
			"es-GT": "Spanish (Guatemala)",
			"es-HN": "Spanish (Honduras)",
			"es-MX": "Spanish (Mexico)",
			"es-NI": "Spanish (Nicaragua)",
			"es-PA": "Spanish (Panama)",
			"es-PY": "Spanish (Paraguay)",
			"es-PE": "Spanish (Peru)",
			"es-PR": "Spanish (Puerto Rico)",
			"es-ES": "Spanish (Spain)",
			"es-UY": "Spanish (Uruguay)",
			"es-VE": "Spanish (Venezuela)",
			sx: "Sutu",
			sw: "Swahili",
			sv: "Swedish",
			"sv-FI": "Swedish (Finland)",
			"sv-SV": "Swedish (Sweden)",
			ta: "Tamil",
			tt: "Tatar",
			te: "Teluga",
			th: "Thai",
			tig: "Tigre",
			ts: "Tsonga",
			tn: "Tswana",
			tr: "Turkish",
			tk: "Turkmen",
			uk: "Ukrainian",
			hsb: "Upper Sorbian",
			ur: "Urdu",
			ve: "Venda",
			vi: "Vietnamese",
			vo: "Volapuk",
			wa: "Walloon",
			cy: "Welsh",
			xh: "Xhosa",
			ji: "Yiddish",
			zu: "Zulu"
		}[e] !== void 0 && (this.internal.languageSettings.languageCode = e, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
			this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
		})), this.internal.languageSettings.isSubscribed = !0)), this;
	}, An = X.API, jn = An.getCharWidthsArray = function(e, t) {
		var n, r, i = (t ||= {}).font || this.internal.getFont(), a = t.fontSize || this.internal.getFontSize(), o = t.charSpace || this.internal.getCharSpace(), c = t.widths ? t.widths : i.metadata.Unicode.widths, l = c.fof ? c.fof : 1, u = t.kerning ? t.kerning : i.metadata.Unicode.kerning, d = u.fof ? u.fof : 1, f = !1 !== t.doKerning, p = 0, m = e.length, h = 0, g = c[0] || l, _ = [];
		for (n = 0; n < m; n++) r = e.charCodeAt(n), typeof i.metadata.widthOfString == "function" ? _.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r)) + 1e3 / a * o || 0) / 1e3) : (p = f && s(u[r]) === "object" && !isNaN(parseInt(u[r][h], 10)) ? u[r][h] / d : 0, _.push((c[r] || g) / l + p)), h = r;
		return _;
	}, Mn = An.getStringUnitWidth = function(e, t) {
		var n = (t ||= {}).fontSize || this.internal.getFontSize(), r = t.font || this.internal.getFont(), i = t.charSpace || this.internal.getCharSpace();
		return An.processArabic && (e = An.processArabic(e)), typeof r.metadata.widthOfString == "function" ? r.metadata.widthOfString(e, n, i) / n : jn.apply(this, arguments).reduce((function(e, t) {
			return e + t;
		}), 0);
	}, Nn = function(e, t, n, r) {
		for (var i = [], a = 0, o = e.length, s = 0; a !== o && s + t[a] < n;) s += t[a], a++;
		i.push(e.slice(0, a));
		var c = a;
		for (s = 0; a !== o;) s + t[a] > r && (i.push(e.slice(c, a)), s = 0, c = a), s += t[a], a++;
		return c !== a && i.push(e.slice(c, a)), i;
	}, Pn = function(e, t, n) {
		n ||= {};
		var r, i, a, o, s, c, l, u = [], d = [u], f = n.textIndent || 0, p = 0, m = 0, h = e.split(" "), g = jn.apply(this, [" ", n])[0];
		if (c = n.lineIndent === -1 ? h[0].length + 2 : n.lineIndent || 0) {
			var _ = Array(c).join(" "), v = [];
			h.map((function(e) {
				(e = e.split(/\s*\n/)).length > 1 ? v = v.concat(e.map((function(e, t) {
					return (t && e.length ? "\n" : "") + e;
				}))) : v.push(e[0]);
			})), h = v, c = Mn.apply(this, [_, n]);
		}
		for (a = 0, o = h.length; a < o; a++) {
			var y = 0;
			if (r = h[a], c && r[0] == "\n" && (r = r.substr(1), y = 1), f + p + (m = (i = jn.apply(this, [r, n])).reduce((function(e, t) {
				return e + t;
			}), 0)) > t || y) {
				if (m > t) {
					for (s = Nn.apply(this, [
						r,
						i,
						t - (f + p),
						t
					]), u.push(s.shift()), u = [s.pop()]; s.length;) d.push([s.shift()]);
					m = i.slice(r.length - (u[0] ? u[0].length : 0)).reduce((function(e, t) {
						return e + t;
					}), 0);
				} else u = [r];
				d.push(u), f = m + c, p = g;
			} else u.push(r), f += p + m, p = g;
		}
		return l = c ? function(e, t) {
			return (t ? _ : "") + e.join(" ");
		} : function(e) {
			return e.join(" ");
		}, d.map(l);
	}, An.splitTextToSize = function(e, t, n) {
		var r, i = (n ||= {}).fontSize || this.internal.getFontSize(), a = function(e) {
			if (e.widths && e.kerning) return {
				widths: e.widths,
				kerning: e.kerning
			};
			var t = this.internal.getFont(e.fontName, e.fontStyle);
			return t.metadata.Unicode ? {
				widths: t.metadata.Unicode.widths || { 0: 1 },
				kerning: t.metadata.Unicode.kerning || {}
			} : {
				font: t.metadata,
				fontSize: this.internal.getFontSize(),
				charSpace: this.internal.getCharSpace()
			};
		}.call(this, n);
		r = Array.isArray(e) ? e : String(e).split(/\r?\n/);
		var o = 1 * this.internal.scaleFactor * t / i;
		a.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0, a.lineIndent = n.lineIndent;
		var s, c, l = [];
		for (s = 0, c = r.length; s < c; s++) l = l.concat(Pn.apply(this, [
			r[s],
			o,
			a
		]));
		return l;
	}, function(e) {
		e.__fontmetrics__ = e.__fontmetrics__ || {};
		for (var t = "klmnopqrstuvwxyz", n = {}, r = {}, i = 0; i < t.length; i++) n[t[i]] = "0123456789abcdef"[i], r["0123456789abcdef"[i]] = t[i];
		var a = function(e) {
			return "0x" + parseInt(e, 10).toString(16);
		}, o = e.__fontmetrics__.compress = function(e) {
			var t, n, i, c, l = ["{"];
			for (var u in e) {
				if (t = e[u], isNaN(parseInt(u, 10)) ? n = "'" + u + "'" : (u = parseInt(u, 10), n = (n = a(u).slice(2)).slice(0, -1) + r[n.slice(-1)]), typeof t == "number") t < 0 ? (i = a(t).slice(3), c = "-") : (i = a(t).slice(2), c = ""), i = c + i.slice(0, -1) + r[i.slice(-1)];
				else {
					if (s(t) !== "object") throw Error("Don't know what to do with value type " + s(t) + ".");
					i = o(t);
				}
				l.push(n + i);
			}
			return l.push("}"), l.join("");
		}, c = e.__fontmetrics__.uncompress = function(e) {
			if (typeof e != "string") throw Error("Invalid argument passed to uncompress.");
			for (var t, r, i, a, o = {}, s = 1, c = o, l = [], u = "", d = "", f = e.length - 1, p = 1; p < f; p += 1) (a = e[p]) == "'" ? t ? (i = t.join(""), t = void 0) : t = [] : t ? t.push(a) : a == "{" ? (l.push([c, i]), c = {}, i = void 0) : a == "}" ? ((r = l.pop())[0][r[1]] = c, i = void 0, c = r[0]) : a == "-" ? s = -1 : i === void 0 ? n.hasOwnProperty(a) ? (u += n[a], i = parseInt(u, 16) * s, s = 1, u = "") : u += a : n.hasOwnProperty(a) ? (d += n[a], c[i] = parseInt(d, 16) * s, s = 1, i = void 0, d = "") : d += a;
			return o;
		}, l = {
			codePages: ["WinAnsiEncoding"],
			WinAnsiEncoding: c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
		}, u = { Unicode: {
			Courier: l,
			"Courier-Bold": l,
			"Courier-BoldOblique": l,
			"Courier-Oblique": l,
			Helvetica: l,
			"Helvetica-Bold": l,
			"Helvetica-BoldOblique": l,
			"Helvetica-Oblique": l,
			"Times-Roman": l,
			"Times-Bold": l,
			"Times-BoldItalic": l,
			"Times-Italic": l
		} }, d = { Unicode: {
			"Courier-Oblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			"Times-BoldItalic": c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
			"Helvetica-Bold": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
			Courier: c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			"Courier-BoldOblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			"Times-Bold": c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
			Symbol: c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
			Helvetica: c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
			"Helvetica-BoldOblique": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
			ZapfDingbats: c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
			"Courier-Bold": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
			"Times-Italic": c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
			"Times-Roman": c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
			"Helvetica-Oblique": c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
		} };
		e.events.push(["addFont", function(e) {
			var t = e.font, n = d.Unicode[t.postScriptName];
			n && (t.metadata.Unicode = {}, t.metadata.Unicode.widths = n.widths, t.metadata.Unicode.kerning = n.kerning);
			var r = u.Unicode[t.postScriptName];
			r && (t.metadata.Unicode.encoding = r, t.encoding = r.codePages[0]);
		}]);
	}(X.API), function(e) {
		var t = function(e) {
			for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
			return n;
		};
		e.API.events.push(["addFont", function(n) {
			var r = void 0, i = n.font, a = n.instance;
			if (!i.isStandardFont) {
				if (a === void 0) throw Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
				if (typeof (r = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName)) != "string") throw Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
				(function(n, r) {
					r = /^\x00\x01\x00\x00/.test(r) ? t(r) : t(Tt(r)), n.metadata = e.API.TTFFont.open(r), n.metadata.Unicode = n.metadata.Unicode || {
						encoding: {},
						kerning: {},
						widths: []
					}, n.metadata.glyIdsUsed = [0];
				})(i, r);
			}
		}]);
	}(X), function(e) {
		function t() {
			return (Z.canvg ? Promise.resolve(Z.canvg) : import("./index.es-Dkn-g_zP.mjs")).catch((function(e) {
				return Promise.reject(/* @__PURE__ */ Error("Could not load canvg: " + e));
			})).then((function(e) {
				return e.default ? e.default : e;
			}));
		}
		X.API.addSvgAsImage = function(e, n, r, i, a, o, s, c) {
			if (isNaN(n) || isNaN(r)) throw wt.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), /* @__PURE__ */ Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
			if (isNaN(i) || isNaN(a)) throw wt.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), /* @__PURE__ */ Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
			var l = document.createElement("canvas");
			l.width = i, l.height = a;
			var u = l.getContext("2d");
			u.fillStyle = "#fff", u.fillRect(0, 0, l.width, l.height);
			var d = {
				ignoreMouse: !0,
				ignoreAnimation: !0,
				ignoreDimensions: !0
			}, f = this;
			return t().then((function(t) {
				return t.fromString(u, e, d);
			}), (function() {
				return Promise.reject(/* @__PURE__ */ Error("Could not load canvg."));
			})).then((function(e) {
				return e.render(d);
			})).then((function() {
				f.addImage(l.toDataURL("image/jpeg", 1), n, r, i, a, s, c);
			}));
		};
	}(), X.API.putTotalPages = function(e) {
		var t, n = 0;
		parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(e, "g"), n = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(e, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
		for (var r = 1; r <= this.internal.getNumberOfPages(); r++) for (var i = 0; i < this.internal.pages[r].length; i++) this.internal.pages[r][i] = this.internal.pages[r][i].replace(t, n);
		return this;
	}, X.API.viewerPreferences = function(e, t) {
		var n;
		e ||= {}, t ||= !1;
		var r, i, a, o = {
			HideToolbar: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.3
			},
			HideMenubar: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.3
			},
			HideWindowUI: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.3
			},
			FitWindow: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.3
			},
			CenterWindow: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.3
			},
			DisplayDocTitle: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.4
			},
			NonFullScreenPageMode: {
				defaultValue: "UseNone",
				value: "UseNone",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"UseNone",
					"UseOutlines",
					"UseThumbs",
					"UseOC"
				],
				pdfVersion: 1.3
			},
			Direction: {
				defaultValue: "L2R",
				value: "L2R",
				type: "name",
				explicitSet: !1,
				valueSet: ["L2R", "R2L"],
				pdfVersion: 1.3
			},
			ViewArea: {
				defaultValue: "CropBox",
				value: "CropBox",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"MediaBox",
					"CropBox",
					"TrimBox",
					"BleedBox",
					"ArtBox"
				],
				pdfVersion: 1.4
			},
			ViewClip: {
				defaultValue: "CropBox",
				value: "CropBox",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"MediaBox",
					"CropBox",
					"TrimBox",
					"BleedBox",
					"ArtBox"
				],
				pdfVersion: 1.4
			},
			PrintArea: {
				defaultValue: "CropBox",
				value: "CropBox",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"MediaBox",
					"CropBox",
					"TrimBox",
					"BleedBox",
					"ArtBox"
				],
				pdfVersion: 1.4
			},
			PrintClip: {
				defaultValue: "CropBox",
				value: "CropBox",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"MediaBox",
					"CropBox",
					"TrimBox",
					"BleedBox",
					"ArtBox"
				],
				pdfVersion: 1.4
			},
			PrintScaling: {
				defaultValue: "AppDefault",
				value: "AppDefault",
				type: "name",
				explicitSet: !1,
				valueSet: ["AppDefault", "None"],
				pdfVersion: 1.6
			},
			Duplex: {
				defaultValue: "",
				value: "none",
				type: "name",
				explicitSet: !1,
				valueSet: [
					"Simplex",
					"DuplexFlipShortEdge",
					"DuplexFlipLongEdge",
					"none"
				],
				pdfVersion: 1.7
			},
			PickTrayByPDFSize: {
				defaultValue: !1,
				value: !1,
				type: "boolean",
				explicitSet: !1,
				valueSet: [!0, !1],
				pdfVersion: 1.7
			},
			PrintPageRange: {
				defaultValue: "",
				value: "",
				type: "array",
				explicitSet: !1,
				valueSet: null,
				pdfVersion: 1.7
			},
			NumCopies: {
				defaultValue: 1,
				value: 1,
				type: "integer",
				explicitSet: !1,
				valueSet: null,
				pdfVersion: 1.7
			}
		}, c = Object.keys(o), l = [], u = 0, d = 0, f = 0;
		function p(e, t) {
			var n, r = !1;
			for (n = 0; n < e.length; n += 1) e[n] === t && (r = !0);
			return r;
		}
		if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, e === "reset" || !0 === t) {
			var m = c.length;
			for (f = 0; f < m; f += 1) n[c[f]].value = n[c[f]].defaultValue, n[c[f]].explicitSet = !1;
		}
		if (s(e) === "object") {
			for (i in e) if (a = e[i], p(c, i) && a !== void 0) {
				if (n[i].type === "boolean" && typeof a == "boolean") n[i].value = a;
				else if (n[i].type === "name" && p(n[i].valueSet, a)) n[i].value = a;
				else if (n[i].type === "integer" && Number.isInteger(a)) n[i].value = a;
				else if (n[i].type === "array") {
					for (u = 0; u < a.length; u += 1) if (r = !0, a[u].length === 1 && typeof a[u][0] == "number") l.push(String(a[u] - 1));
					else if (a[u].length > 1) {
						for (d = 0; d < a[u].length; d += 1) typeof a[u][d] != "number" && (r = !1);
						!0 === r && l.push([a[u][0] - 1, a[u][1] - 1].join(" "));
					}
					n[i].value = "[" + l.join(" ") + "]";
				} else n[i].value = n[i].defaultValue;
				n[i].explicitSet = !0;
			}
		}
		return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
			var e, t = [];
			for (e in n) !0 === n[e].explicitSet && (n[e].type === "name" ? t.push("/" + e + " /" + n[e].value) : t.push("/" + e + " " + n[e].value));
			t.length !== 0 && this.internal.write("/ViewerPreferences\n<<\n" + t.join("\n") + "\n>>");
		})), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this;
	}, function(e) {
		var t = function() {
			var e = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"><rdf:Description rdf:about=\"\" xmlns:jspdf=\"" + this.internal.__metadata__.namespaceuri + "\"><jspdf:metadata>", t = unescape("%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%3E"), n = unescape(encodeURIComponent(e)), r = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), i = unescape("%3C%2Fjspdf%3Ametadata%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E"), a = unescape("%3C%2Fx%3Axmpmeta%3E"), o = n.length + r.length + i.length + t.length + a.length;
			this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(t + n + r + i + a), this.internal.write("endstream"), this.internal.write("endobj");
		}, n = function() {
			this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
		};
		e.addMetadata = function(e, r) {
			return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
				metadata: e,
				namespaceuri: r || "http://jspdf.default.namespaceuri/"
			}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", t)), this;
		};
	}(X.API), function(e) {
		var t = e.API, n = t.pdfEscape16 = function(e, t) {
			for (var n, r = t.metadata.Unicode.widths, i = [
				"",
				"0",
				"00",
				"000",
				"0000"
			], a = [""], o = 0, s = e.length; o < s; ++o) {
				if (n = t.metadata.characterToGlyph(e.charCodeAt(o)), t.metadata.glyIdsUsed.push(n), t.metadata.toUnicode[n] = e.charCodeAt(o), r.indexOf(n) == -1 && (r.push(n), r.push([parseInt(t.metadata.widthOfGlyph(n), 10)])), n == "0") return a.join("");
				n = n.toString(16), a.push(i[4 - n.length], n);
			}
			return a.join("");
		}, r = function(e) {
			var t, n, r, i, a, o, s;
			for (a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], o = 0, s = (n = Object.keys(e).sort((function(e, t) {
				return e - t;
			}))).length; o < s; o++) t = n[o], r.length >= 100 && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), e[t] !== void 0 && e[t] !== null && typeof e[t].toString == "function" && (i = ("0000" + e[t].toString(16)).slice(-4), t = ("0000" + (+t).toString(16)).slice(-4), r.push("<" + t + "><" + i + ">"));
			return r.length && (a += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), a += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
		};
		t.events.push(["putFont", function(t) {
			(function(t) {
				var n = t.font, i = t.out, a = t.newObject, o = t.putStream;
				if (n.metadata instanceof e.API.TTFFont && n.encoding === "Identity-H") {
					for (var s = n.metadata.Unicode.widths, c = n.metadata.subset.encode(n.metadata.glyIdsUsed, 1), l = "", u = 0; u < c.length; u++) l += String.fromCharCode(c[u]);
					var d = a();
					o({
						data: l,
						addLength1: !0,
						objectId: d
					}), i("endobj");
					var f = a();
					o({
						data: r(n.metadata.toUnicode),
						addLength1: !0,
						objectId: f
					}), i("endobj");
					var p = a();
					i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + at(n.fontName)), i("/FontFile2 " + d + " 0 R"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/Flags " + n.metadata.flags), i("/StemV " + n.metadata.stemV), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i(">>"), i("endobj");
					var m = a();
					i("<<"), i("/Type /Font"), i("/BaseFont /" + at(n.fontName)), i("/FontDescriptor " + p + " 0 R"), i("/W " + e.API.PDFObject.convert(s)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + n.encoding + ")"), i(">>"), i(">>"), i("endobj"), n.objectNumber = a(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + f + " 0 R"), i("/BaseFont /" + at(n.fontName)), i("/Encoding /" + n.encoding), i("/DescendantFonts [" + m + " 0 R]"), i(">>"), i("endobj"), n.isAlreadyPutted = !0;
				}
			})(t);
		}]), t.events.push(["putFont", function(t) {
			(function(t) {
				var n = t.font, i = t.out, a = t.newObject, o = t.putStream;
				if (n.metadata instanceof e.API.TTFFont && n.encoding === "WinAnsiEncoding") {
					for (var s = n.metadata.rawData, c = "", l = 0; l < s.length; l++) c += String.fromCharCode(s[l]);
					var u = a();
					o({
						data: c,
						addLength1: !0,
						objectId: u
					}), i("endobj");
					var d = a();
					o({
						data: r(n.metadata.toUnicode),
						addLength1: !0,
						objectId: d
					}), i("endobj");
					var f = a();
					i("<<"), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i("/StemV " + n.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + u + " 0 R"), i("/Flags 96"), i("/FontBBox " + e.API.PDFObject.convert(n.metadata.bbox)), i("/FontName /" + at(n.fontName)), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i(">>"), i("endobj"), n.objectNumber = a();
					for (var p = 0; p < n.metadata.hmtx.widths.length; p++) n.metadata.hmtx.widths[p] = parseInt(n.metadata.hmtx.widths[p] * (1e3 / n.metadata.head.unitsPerEm));
					i("<</Subtype/TrueType/Type/Font/ToUnicode " + d + " 0 R/BaseFont/" + at(n.fontName) + "/FontDescriptor " + f + " 0 R/Encoding/" + n.encoding + " /FirstChar 29 /LastChar 255 /Widths " + e.API.PDFObject.convert(n.metadata.hmtx.widths) + ">>"), i("endobj"), n.isAlreadyPutted = !0;
				}
			})(t);
		}]);
		var i = function(e) {
			var t, r = e.text || "", i = e.x, a = e.y, o = e.options || {}, s = e.mutex || {}, c = s.pdfEscape, l = s.activeFontKey, u = s.fonts, d = l, f = "", p = 0, m = "", h = u[d].encoding;
			if (u[d].encoding !== "Identity-H") return {
				text: r,
				x: i,
				y: a,
				options: o,
				mutex: s
			};
			for (m = r, d = l, Array.isArray(r) && (m = r[0]), p = 0; p < m.length; p += 1) u[d].metadata.hasOwnProperty("cmap") && (t = u[d].metadata.cmap.unicode.codeMap[m[p].charCodeAt(0)]), t || m[p].charCodeAt(0) < 256 && u[d].metadata.hasOwnProperty("Unicode") ? f += m[p] : f += "";
			var g = "";
			return parseInt(d.slice(1)) < 14 || h === "WinAnsiEncoding" ? g = c(f, d).split("").map((function(e) {
				return e.charCodeAt(0).toString(16);
			})).join("") : h === "Identity-H" && (g = n(f, u[d])), s.isHex = !0, {
				text: g,
				x: i,
				y: a,
				options: o,
				mutex: s
			};
		};
		t.events.push(["postProcessText", function(e) {
			var t = e.text || "", n = [], r = {
				text: t,
				x: e.x,
				y: e.y,
				options: e.options,
				mutex: e.mutex
			};
			if (Array.isArray(t)) {
				var a = 0;
				for (a = 0; a < t.length; a += 1) Array.isArray(t[a]) && t[a].length === 3 ? n.push([
					i(Object.assign({}, r, { text: t[a][0] })).text,
					t[a][1],
					t[a][2]
				]) : n.push(i(Object.assign({}, r, { text: t[a] })).text);
				e.text = n;
			} else e.text = i(Object.assign({}, r, { text: t })).text;
		}]);
	}(X), function(e) {
		var t = function() {
			return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
		};
		e.existsFileInVFS = function(e) {
			return t.call(this), this.internal.vFS[e] !== void 0;
		}, e.addFileToVFS = function(e, n) {
			return t.call(this), this.internal.vFS[e] = n, this;
		}, e.getFileFromVFS = function(e) {
			return t.call(this), this.internal.vFS[e] === void 0 ? null : this.internal.vFS[e];
		};
	}(X.API), function(e) {
		e.__bidiEngine__ = e.prototype.__bidiEngine__ = function(e) {
			var n, r, i, a, o, s, c, l = t, u = [
				[
					0,
					3,
					0,
					1,
					0,
					0,
					0
				],
				[
					0,
					3,
					0,
					1,
					2,
					2,
					0
				],
				[
					0,
					3,
					0,
					17,
					2,
					0,
					1
				],
				[
					0,
					3,
					5,
					5,
					4,
					1,
					0
				],
				[
					0,
					3,
					21,
					21,
					4,
					0,
					1
				],
				[
					0,
					3,
					5,
					5,
					4,
					2,
					0
				]
			], d = [
				[
					2,
					0,
					1,
					1,
					0,
					1,
					0
				],
				[
					2,
					0,
					1,
					1,
					0,
					2,
					0
				],
				[
					2,
					0,
					2,
					1,
					3,
					2,
					0
				],
				[
					2,
					0,
					2,
					33,
					3,
					1,
					1
				]
			], f = {
				L: 0,
				R: 1,
				EN: 2,
				AN: 3,
				N: 4,
				B: 5,
				S: 6
			}, p = {
				0: 0,
				5: 1,
				6: 2,
				7: 3,
				32: 4,
				251: 5,
				254: 6,
				255: 7
			}, m = /* @__PURE__ */ "(.).(.<.>.<.[.].[.{.}.{.«.».«.‹.›.‹.⁅.⁆.⁅.⁽.⁾.⁽.₍.₎.₍.≤.≥.≤.〈.〉.〈.﹙.﹚.﹙.﹛.﹜.﹛.﹝.﹞.﹝.﹤.﹥.﹤".split("."), h = /* @__PURE__ */ new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), g = !1, _ = 0;
			this.__bidiEngine__ = {};
			var v = function(e) {
				var t = e.charCodeAt(), n = t >> 8, r = p[n];
				return r === void 0 ? n === 252 || n === 253 ? "AL" : h.test(n) ? "L" : n === 8 ? "R" : "N" : l[256 * r + (255 & t)];
			}, y = function(e) {
				for (var t, n = 0; n < e.length; n++) {
					if ((t = v(e.charAt(n))) === "L") return !1;
					if (t === "R") return !0;
				}
				return !1;
			}, b = function(e, t, o, s) {
				var c, l, u, d, f = t[s];
				switch (f) {
					case "L":
					case "R":
						g = !1;
						break;
					case "N":
					case "AN": break;
					case "EN":
						g && (f = "AN");
						break;
					case "AL":
						g = !0, f = "R";
						break;
					case "WS":
						f = "N";
						break;
					case "CS":
						s < 1 || s + 1 >= t.length || (c = o[s - 1]) !== "EN" && c !== "AN" || (l = t[s + 1]) !== "EN" && l !== "AN" ? f = "N" : g && (l = "AN"), f = l === c ? l : "N";
						break;
					case "ES":
						f = (c = s > 0 ? o[s - 1] : "B") === "EN" && s + 1 < t.length && t[s + 1] === "EN" ? "EN" : "N";
						break;
					case "ET":
						if (s > 0 && o[s - 1] === "EN") {
							f = "EN";
							break;
						}
						if (g) {
							f = "N";
							break;
						}
						for (u = s + 1, d = t.length; u < d && t[u] === "ET";) u++;
						f = u < d && t[u] === "EN" ? "EN" : "N";
						break;
					case "NSM":
						if (i && !a) {
							for (d = t.length, u = s + 1; u < d && t[u] === "NSM";) u++;
							if (u < d) {
								var p = e[s], m = p >= 1425 && p <= 2303 || p === 64286;
								if (c = t[u], m && (c === "R" || c === "AL")) {
									f = "R";
									break;
								}
							}
						}
						f = s < 1 || (c = t[s - 1]) === "B" ? "N" : o[s - 1];
						break;
					case "B":
						g = !1, n = !0, f = _;
						break;
					case "S":
						r = !0, f = "N";
						break;
					case "LRE":
					case "RLE":
					case "LRO":
					case "RLO":
					case "PDF":
						g = !1;
						break;
					case "BN": f = "N";
				}
				return f;
			}, x = function(e, t, n) {
				var r = e.split("");
				return n && S(r, n, { hiLevel: _ }), r.reverse(), t && t.reverse(), r.join("");
			}, S = function(e, t, i) {
				var a, o, s, c, l, p = -1, m = e.length, h = 0, y = [], x = _ ? d : u, S = [];
				for (g = !1, n = !1, r = !1, o = 0; o < m; o++) S[o] = v(e[o]);
				for (s = 0; s < m; s++) {
					if (l = h, y[s] = b(e, S, y, s), a = 240 & (h = x[l][f[y[s]]]), h &= 15, t[s] = c = x[h][5], a > 0) if (a === 16) {
						for (o = p; o < s; o++) t[o] = 1;
						p = -1;
					} else p = -1;
					if (x[h][6]) p === -1 && (p = s);
					else if (p > -1) {
						for (o = p; o < s; o++) t[o] = c;
						p = -1;
					}
					S[s] === "B" && (t[s] = 0), i.hiLevel |= c;
				}
				r && function(e, t, n) {
					for (var r = 0; r < n; r++) if (e[r] === "S") {
						t[r] = _;
						for (var i = r - 1; i >= 0 && e[i] === "WS"; i--) t[i] = _;
					}
				}(S, t, m);
			}, C = function(e, t, r, i, a) {
				if (!(a.hiLevel < e)) {
					if (e === 1 && _ === 1 && !n) return t.reverse(), void (r && r.reverse());
					for (var o, s, c, l, u = t.length, d = 0; d < u;) {
						if (i[d] >= e) {
							for (c = d + 1; c < u && i[c] >= e;) c++;
							for (l = d, s = c - 1; l < s; l++, s--) o = t[l], t[l] = t[s], t[s] = o, r && (o = r[l], r[l] = r[s], r[s] = o);
							d = c;
						}
						d++;
					}
				}
			}, w = function(e, t, n) {
				var r = e.split(""), i = { hiLevel: _ };
				return n ||= [], S(r, n, i), function(e, t, n) {
					if (n.hiLevel !== 0 && c) for (var r, i = 0; i < e.length; i++) t[i] === 1 && (r = m.indexOf(e[i])) >= 0 && (e[i] = m[r + 1]);
				}(r, n, i), C(2, r, t, n, i), C(1, r, t, n, i), r.join("");
			};
			return this.__bidiEngine__.doBidiReorder = function(e, t, n) {
				if (function(e, t) {
					if (t) for (var n = 0; n < e.length; n++) t[n] = n;
					a === void 0 && (a = y(e)), s === void 0 && (s = y(e));
				}(e, t), i || !o || s) if (i && o && a ^ s) _ = +!!a, e = x(e, t, n);
				else if (!i && o && s) _ = +!!a, e = w(e, t, n), e = x(e, t);
				else if (!i || a || o || s) {
					if (i && !o && a ^ s) e = x(e, t), a ? (_ = 0, e = w(e, t, n)) : (_ = 1, e = w(e, t, n), e = x(e, t));
					else if (i && a && !o && s) _ = 1, e = w(e, t, n), e = x(e, t);
					else if (!i && !o && a ^ s) {
						var r = c;
						a ? (_ = 1, e = w(e, t, n), _ = 0, c = !1, e = w(e, t, n), c = r) : (_ = 0, e = w(e, t, n), e = x(e, t), _ = 1, c = !1, e = w(e, t, n), c = r, e = x(e, t));
					}
				} else _ = 0, e = w(e, t, n);
				else _ = +!!a, e = w(e, t, n);
				return e;
			}, this.__bidiEngine__.setOptions = function(e) {
				e && (i = e.isInputVisual, o = e.isOutputVisual, a = e.isInputRtl, s = e.isOutputRtl, c = e.isSymmetricSwapping);
			}, this.__bidiEngine__.setOptions(e), this.__bidiEngine__;
		};
		var t = /* @__PURE__ */ "BN.BN.BN.BN.BN.BN.BN.BN.BN.S.B.S.WS.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.B.B.B.S.WS.N.N.ET.ET.ET.N.N.N.N.N.ES.CS.ES.CS.CS.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.CS.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.BN.BN.BN.BN.BN.BN.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.CS.N.ET.ET.ET.ET.N.N.N.N.L.N.N.BN.N.N.ET.ET.EN.EN.N.L.N.N.N.EN.L.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.N.N.N.N.N.ET.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.R.NSM.R.NSM.NSM.R.NSM.NSM.R.NSM.N.N.N.N.N.N.N.N.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.N.N.N.N.N.R.R.R.R.R.N.N.N.N.N.N.N.N.N.N.N.AN.AN.AN.AN.AN.AN.N.N.AL.ET.ET.AL.CS.AL.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AN.AN.AN.AN.AN.AN.AN.AN.AN.AN.ET.AN.AN.AL.AL.AL.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AN.N.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.NSM.NSM.N.NSM.NSM.NSM.NSM.AL.AL.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.AL.AL.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AL.N.N.N.N.N.N.N.N.N.N.N.N.N.N.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.R.R.N.N.N.N.R.N.N.N.N.N.WS.WS.WS.WS.WS.WS.WS.WS.WS.WS.WS.BN.BN.BN.L.R.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.WS.B.LRE.RLE.PDF.LRO.RLO.CS.ET.ET.ET.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.CS.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.WS.BN.BN.BN.BN.BN.N.LRI.RLI.FSI.PDI.BN.BN.BN.BN.BN.BN.EN.L.N.N.EN.EN.EN.EN.EN.EN.ES.ES.N.N.N.L.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.ES.ES.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.L.L.N.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.N.N.N.N.N.R.NSM.R.R.R.R.R.R.R.R.R.R.ES.R.R.R.R.R.R.R.R.R.R.R.R.R.N.R.R.R.R.R.N.R.N.R.R.N.R.R.N.R.R.R.R.R.R.R.R.R.R.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.CS.N.CS.N.N.CS.N.N.N.N.N.N.N.N.N.ET.N.N.ES.ES.N.N.N.N.N.ET.ET.N.N.N.N.N.AL.AL.AL.AL.AL.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.N.BN.N.N.N.ET.ET.ET.N.N.N.N.N.ES.CS.ES.CS.CS.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.CS.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.L.L.L.L.L.L.N.N.L.L.L.L.L.L.N.N.L.L.L.L.L.L.N.N.L.L.L.N.N.N.ET.ET.N.N.N.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N".split("."), n = new e.__bidiEngine__({ isInputVisual: !0 });
		e.API.events.push(["postProcessText", function(e) {
			var t = e.text, r = (e.x, e.y, e.options || {}), i = (e.mutex, r.lang, []);
			if (r.isInputVisual = typeof r.isInputVisual != "boolean" || r.isInputVisual, n.setOptions(r), Object.prototype.toString.call(t) === "[object Array]") {
				var a = 0;
				for (i = [], a = 0; a < t.length; a += 1) Object.prototype.toString.call(t[a]) === "[object Array]" ? i.push([
					n.doBidiReorder(t[a][0]),
					t[a][1],
					t[a][2]
				]) : i.push([n.doBidiReorder(t[a])]);
				e.text = i;
			} else e.text = n.doBidiReorder(t);
			n.setOptions({ isInputVisual: !0 });
		}]);
	}(X), X.API.TTFFont = function() {
		function e(e) {
			var t;
			if (this.rawData = e, t = this.contents = new Ln(e), this.contents.pos = 4, t.readString(4) === "ttcf") throw Error("TTCF not supported.");
			t.pos = 0, this.parse(), this.subset = new nr(this), this.registerTTF();
		}
		return e.open = function(t) {
			return new e(t);
		}, e.prototype.parse = function() {
			return this.directory = new Rn(this.contents), this.head = new Vn(this), this.name = new Jn(this), this.cmap = new Un(this), this.toUnicode = {}, this.hhea = new Wn(this), this.maxp = new Yn(this), this.hmtx = new Xn(this), this.post = new Kn(this), this.os2 = new Gn(this), this.loca = new tr(this), this.glyf = new Qn(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
				this.head.xMin,
				this.head.yMin,
				this.head.xMax,
				this.head.yMax
			];
		}, e.prototype.registerTTF = function() {
			var e, t, n, r, i;
			if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
				var t, n, r, i;
				for (i = [], t = 0, n = (r = this.bbox).length; t < n; t++) e = r[t], i.push(Math.round(e * this.scaleFactor));
				return i;
			}.call(this), this.stemV = 0, this.post.exists ? (n = 255 & (r = this.post.italic_angle), 32768 & (t = r >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + n)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (i = this.familyClass) === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw Error("No unicode cmap for font");
		}, e.prototype.characterToGlyph = function(e) {
			return this.cmap.unicode?.codeMap[e] || 0;
		}, e.prototype.widthOfGlyph = function(e) {
			var t;
			return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * t;
		}, e.prototype.widthOfString = function(e, t, n) {
			var r, i, a, o;
			for (a = 0, i = 0, o = (e = "" + e).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i) r = e.charCodeAt(i), a += this.widthOfGlyph(this.characterToGlyph(r)) + 1e3 / t * n || 0;
			return t / 1e3 * a;
		}, e.prototype.lineHeight = function(e, t) {
			var n;
			return t ??= !1, n = t ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * e;
		}, e;
	}(), Ln = function() {
		function e(e) {
			this.data = e ?? [], this.pos = 0, this.length = this.data.length;
		}
		return e.prototype.readByte = function() {
			return this.data[this.pos++];
		}, e.prototype.writeByte = function(e) {
			return this.data[this.pos++] = e;
		}, e.prototype.readUInt32 = function() {
			return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
		}, e.prototype.writeUInt32 = function(e) {
			return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
		}, e.prototype.readInt32 = function() {
			var e;
			return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
		}, e.prototype.writeInt32 = function(e) {
			return e < 0 && (e += 4294967296), this.writeUInt32(e);
		}, e.prototype.readUInt16 = function() {
			return this.readByte() << 8 | this.readByte();
		}, e.prototype.writeUInt16 = function(e) {
			return this.writeByte(e >> 8 & 255), this.writeByte(255 & e);
		}, e.prototype.readInt16 = function() {
			var e;
			return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
		}, e.prototype.writeInt16 = function(e) {
			return e < 0 && (e += 65536), this.writeUInt16(e);
		}, e.prototype.readString = function(e) {
			var t, n;
			for (n = [], t = 0; 0 <= e ? t < e : t > e; t = 0 <= e ? ++t : --t) n[t] = String.fromCharCode(this.readByte());
			return n.join("");
		}, e.prototype.writeString = function(e) {
			var t, n, r;
			for (r = [], t = 0, n = e.length; 0 <= n ? t < n : t > n; t = 0 <= n ? ++t : --t) r.push(this.writeByte(e.charCodeAt(t)));
			return r;
		}, e.prototype.readShort = function() {
			return this.readInt16();
		}, e.prototype.writeShort = function(e) {
			return this.writeInt16(e);
		}, e.prototype.readLongLong = function() {
			var e, t, n, r, i, a, o, s;
			return e = this.readByte(), t = this.readByte(), n = this.readByte(), r = this.readByte(), i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * e + 281474976710656 * t + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * a + 256 * o + s;
		}, e.prototype.writeLongLong = function(e) {
			var t, n;
			return t = Math.floor(e / 4294967296), n = 4294967295 & e, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n);
		}, e.prototype.readInt = function() {
			return this.readInt32();
		}, e.prototype.writeInt = function(e) {
			return this.writeInt32(e);
		}, e.prototype.read = function(e) {
			var t, n;
			for (t = [], n = 0; 0 <= e ? n < e : n > e; n = 0 <= e ? ++n : --n) t.push(this.readByte());
			return t;
		}, e.prototype.write = function(e) {
			var t, n, r, i;
			for (i = [], n = 0, r = e.length; n < r; n++) t = e[n], i.push(this.writeByte(t));
			return i;
		}, e;
	}(), Rn = function() {
		var e;
		function t(e) {
			var t, n, r;
			for (this.scalarType = e.readInt(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) t = {
				tag: e.readString(4),
				checksum: e.readInt(),
				offset: e.readInt(),
				length: e.readInt()
			}, this.tables[t.tag] = t;
		}
		return t.prototype.encode = function(t) {
			var n, r, i, a, o, s, c, l, u, d, f, p, m;
			for (m in f = Object.keys(t).length, s = Math.log(2), u = 16 * Math.floor(Math.log(f) / s), a = Math.floor(u / s), l = 16 * f - u, (r = new Ln()).writeInt(this.scalarType), r.writeShort(f), r.writeShort(u), r.writeShort(a), r.writeShort(l), i = 16 * f, c = r.pos + i, o = null, p = [], t) for (d = t[m], r.writeString(m), r.writeInt(e(d)), r.writeInt(c), r.writeInt(d.length), p = p.concat(d), m === "head" && (o = c), c += d.length; c % 4;) p.push(0), c++;
			return r.write(p), n = 2981146554 - e(r.data), r.pos = o + 8, r.writeUInt32(n), r.data;
		}, e = function(e) {
			var t, n, r, i;
			for (e = Zn.call(e); e.length % 4;) e.push(0);
			for (r = new Ln(e), n = 0, t = 0, i = e.length; t < i; t = t += 4) n += r.readUInt32();
			return 4294967295 & n;
		}, t;
	}(), zn = {}.hasOwnProperty, Bn = function(e, t) {
		for (var n in t) zn.call(t, n) && (e[n] = t[n]);
		function r() {
			this.constructor = e;
		}
		return r.prototype = t.prototype, e.prototype = new r(), e.__super__ = t.prototype, e;
	}, In = function() {
		function e(e) {
			var t;
			this.file = e, t = this.file.directory.tables[this.tag], this.exists = !!t, t && (this.offset = t.offset, this.length = t.length, this.parse(this.file.contents));
		}
		return e.prototype.parse = function() {}, e.prototype.encode = function() {}, e.prototype.raw = function() {
			return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
		}, e;
	}(), Vn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "head", t.prototype.parse = function(e) {
			return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort();
		}, t.prototype.encode = function(e) {
			var t;
			return (t = new Ln()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e), t.writeShort(this.glyphDataFormat), t.data;
		}, t;
	}(), Hn = function() {
		function e(e, t) {
			var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v;
			switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = t + e.readInt(), u = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
				case 0:
					for (s = 0; s < 256; ++s) this.codeMap[s] = e.readByte();
					break;
				case 4: for (f = e.readUInt16(), d = f / 2, e.pos += 6, i = function() {
					var t, n;
					for (n = [], s = t = 0; 0 <= d ? t < d : t > d; s = 0 <= d ? ++t : --t) n.push(e.readUInt16());
					return n;
				}(), e.pos += 2, m = function() {
					var t, n;
					for (n = [], s = t = 0; 0 <= d ? t < d : t > d; s = 0 <= d ? ++t : --t) n.push(e.readUInt16());
					return n;
				}(), c = function() {
					var t, n;
					for (n = [], s = t = 0; 0 <= d ? t < d : t > d; s = 0 <= d ? ++t : --t) n.push(e.readUInt16());
					return n;
				}(), l = function() {
					var t, n;
					for (n = [], s = t = 0; 0 <= d ? t < d : t > d; s = 0 <= d ? ++t : --t) n.push(e.readUInt16());
					return n;
				}(), r = (this.length - e.pos + this.offset) / 2, o = function() {
					var t, n;
					for (n = [], s = t = 0; 0 <= r ? t < r : t > r; s = 0 <= r ? ++t : --t) n.push(e.readUInt16());
					return n;
				}(), s = g = 0, v = i.length; g < v; s = ++g) for (h = i[s], n = _ = p = m[s]; p <= h ? _ <= h : _ >= h; n = p <= h ? ++_ : --_) l[s] === 0 ? a = n + c[s] : (a = o[l[s] / 2 + (n - p) - (d - s)] || 0) !== 0 && (a += c[s]), this.codeMap[n] = 65535 & a;
			}
			e.pos = u;
		}
		return e.encode = function(e, t) {
			var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, ee, R, z, B, te, V, H, U, ne, re;
			switch (k = new Ln(), a = Object.keys(e).sort((function(e, t) {
				return e - t;
			})), t) {
				case "macroman":
					for (m = 0, h = function() {
						var e = [];
						for (p = 0; p < 256; ++p) e.push(0);
						return e;
					}(), _ = { 0: 0 }, i = {}, A = 0, P = a.length; A < P; A++) _[H = e[r = a[A]]] ?? (_[H] = ++m), i[r] = {
						old: e[r],
						new: _[e[r]]
					}, h[r] = _[e[r]];
					return k.writeUInt16(1), k.writeUInt16(0), k.writeUInt32(12), k.writeUInt16(0), k.writeUInt16(262), k.writeUInt16(0), k.write(h), {
						charMap: i,
						subtable: k.data,
						maxGlyphID: m + 1
					};
				case "unicode":
					for (D = [], u = [], v = 0, _ = {}, n = {}, g = c = null, j = 0, F = a.length; j < F; j++) _[b = e[r = a[j]]] ?? (_[b] = ++v), n[r] = {
						old: b,
						new: _[b]
					}, o = _[b] - r, g != null && o === c || (g && u.push(g), D.push(r), c = o), g = r;
					for (g && u.push(g), u.push(65535), D.push(65535), T = 2 * (w = D.length), C = 2 * (Math.log(w) / Math.LN2) ** 2, d = Math.log(C / 2) / Math.LN2, S = 2 * w - C, s = [], x = [], f = [], p = M = 0, I = D.length; M < I; p = ++M) {
						if (E = D[p], l = u[p], E === 65535) {
							s.push(0), x.push(0);
							break;
						}
						if (E - (O = n[E].new) >= 32768) for (s.push(0), x.push(2 * (f.length + w - p)), r = N = E; E <= l ? N <= l : N >= l; r = E <= l ? ++N : --N) f.push(n[r].new);
						else s.push(O - E), x.push(0);
					}
					for (k.writeUInt16(3), k.writeUInt16(1), k.writeUInt32(12), k.writeUInt16(4), k.writeUInt16(16 + 8 * w + 2 * f.length), k.writeUInt16(0), k.writeUInt16(T), k.writeUInt16(C), k.writeUInt16(d), k.writeUInt16(S), te = 0, L = u.length; te < L; te++) r = u[te], k.writeUInt16(r);
					for (k.writeUInt16(0), V = 0, ee = D.length; V < ee; V++) r = D[V], k.writeUInt16(r);
					for (U = 0, R = s.length; U < R; U++) o = s[U], k.writeUInt16(o);
					for (ne = 0, z = x.length; ne < z; ne++) y = x[ne], k.writeUInt16(y);
					for (re = 0, B = f.length; re < B; re++) m = f[re], k.writeUInt16(m);
					return {
						charMap: n,
						subtable: k.data,
						maxGlyphID: v + 1
					};
			}
		}, e;
	}(), Un = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "cmap", t.prototype.parse = function(e) {
			var t, n, r;
			for (e.pos = this.offset, this.version = e.readUInt16(), r = e.readUInt16(), this.tables = [], this.unicode = null, n = 0; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) t = new Hn(e, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
			return !0;
		}, t.encode = function(e, t) {
			var n, r;
			return t ??= "macroman", n = Hn.encode(e, t), (r = new Ln()).writeUInt16(0), r.writeUInt16(1), n.table = r.data.concat(n.subtable), n;
		}, t;
	}(), Wn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "hhea", t.prototype.parse = function(e) {
			return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16();
		}, t;
	}(), Gn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "OS/2", t.prototype.parse = function(e) {
			if (e.pos = this.offset, this.version = e.readUInt16(), this.averageCharWidth = e.readShort(), this.weightClass = e.readUInt16(), this.widthClass = e.readUInt16(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort(), this.ySubscriptYSize = e.readShort(), this.ySubscriptXOffset = e.readShort(), this.ySubscriptYOffset = e.readShort(), this.ySuperscriptXSize = e.readShort(), this.ySuperscriptYSize = e.readShort(), this.ySuperscriptXOffset = e.readShort(), this.ySuperscriptYOffset = e.readShort(), this.yStrikeoutSize = e.readShort(), this.yStrikeoutPosition = e.readShort(), this.familyClass = e.readShort(), this.panose = function() {
				var t, n;
				for (n = [], t = 0; t < 10; ++t) n.push(e.readByte());
				return n;
			}(), this.charRange = function() {
				var t, n;
				for (n = [], t = 0; t < 4; ++t) n.push(e.readInt());
				return n;
			}(), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort(), this.descent = e.readShort(), this.lineGap = e.readShort(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = function() {
				var t, n;
				for (n = [], t = 0; t < 2; t = ++t) n.push(e.readInt());
				return n;
			}(), this.version > 1)) return this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort();
		}, t;
	}(), Kn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "post", t.prototype.parse = function(e) {
			var t, n, r;
			switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
				case 65536: break;
				case 131072:
					var i;
					for (n = e.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= n ? i < n : i > n; i = 0 <= n ? ++i : --i) this.glyphNameIndex.push(e.readUInt16());
					for (this.names = [], r = []; e.pos < this.offset + this.length;) t = e.readByte(), r.push(this.names.push(e.readString(t)));
					return r;
				case 151552: return n = e.readUInt16(), this.offsets = e.read(n);
				case 196608: break;
				case 262144: return this.map = function() {
					var t, n, r;
					for (r = [], i = t = 0, n = this.file.maxp.numGlyphs; 0 <= n ? t < n : t > n; i = 0 <= n ? ++t : --t) r.push(e.readUInt32());
					return r;
				}.call(this);
			}
		}, t;
	}(), qn = function(e, t) {
		this.raw = e, this.length = e.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
	}, Jn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "name", t.prototype.parse = function(e) {
			var t, n, r, i, a, o, s, c, l, u, d;
			for (e.pos = this.offset, e.readShort(), t = e.readShort(), o = e.readShort(), n = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) n.push({
				platformID: e.readShort(),
				encodingID: e.readShort(),
				languageID: e.readShort(),
				nameID: e.readShort(),
				length: e.readShort(),
				offset: this.offset + o + e.readShort()
			});
			for (s = {}, i = l = 0, u = n.length; l < u; i = ++l) r = n[i], e.pos = r.offset, c = e.readString(r.length), a = new qn(c, r), s[d = r.nameID] ?? (s[d] = []), s[r.nameID].push(a);
			this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
			try {
				this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
			} catch {
				this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
			}
			return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19];
		}, t;
	}(), Yn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "maxp", t.prototype.parse = function(e) {
			return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16();
		}, t;
	}(), Xn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "hmtx", t.prototype.parse = function(e) {
			var t, n, r, i, a, o, s;
			for (e.pos = this.offset, this.metrics = [], t = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? t < o : t > o; t = 0 <= o ? ++t : --t) this.metrics.push({
				advance: e.readUInt16(),
				lsb: e.readInt16()
			});
			for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
				var n, i;
				for (i = [], t = n = 0; 0 <= r ? n < r : n > r; t = 0 <= r ? ++n : --n) i.push(e.readInt16());
				return i;
			}(), this.widths = function() {
				var e, t, n, r;
				for (r = [], e = 0, t = (n = this.metrics).length; e < t; e++) i = n[e], r.push(i.advance);
				return r;
			}.call(this), n = this.widths[this.widths.length - 1], s = [], t = a = 0; 0 <= r ? a < r : a > r; t = 0 <= r ? ++a : --a) s.push(this.widths.push(n));
			return s;
		}, t.prototype.forGlyph = function(e) {
			return e in this.metrics ? this.metrics[e] : {
				advance: this.metrics[this.metrics.length - 1].advance,
				lsb: this.leftSideBearings[e - this.metrics.length]
			};
		}, t;
	}(), Zn = [].slice, Qn = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "glyf", t.prototype.parse = function() {
			return this.cache = {};
		}, t.prototype.glyphFor = function(e) {
			var t, n, r, i, a, o, s, c, l, u;
			return e in this.cache ? this.cache[e] : (i = this.file.loca, t = this.file.contents, n = i.indexOf(e), (r = i.lengthOf(e)) === 0 ? this.cache[e] = null : (t.pos = this.offset + n, a = (o = new Ln(t.read(r))).readShort(), c = o.readShort(), u = o.readShort(), s = o.readShort(), l = o.readShort(), this.cache[e] = a === -1 ? new er(o, c, u, s, l) : new $n(o, a, c, u, s, l), this.cache[e]));
		}, t.prototype.encode = function(e, t, n) {
			var r, i, a, o, s;
			for (a = [], i = [], o = 0, s = t.length; o < s; o++) r = e[t[o]], i.push(a.length), r && (a = a.concat(r.encode(n)));
			return i.push(a.length), {
				table: a,
				offsets: i
			};
		}, t;
	}(), $n = function() {
		function e(e, t, n, r, i, a) {
			this.raw = e, this.numberOfContours = t, this.xMin = n, this.yMin = r, this.xMax = i, this.yMax = a, this.compound = !1;
		}
		return e.prototype.encode = function() {
			return this.raw.data;
		}, e;
	}(), er = function() {
		function e(e, t, n, r, i) {
			var a, o;
			for (this.raw = e, this.xMin = t, this.yMin = n, this.xMax = r, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a = this.raw; o = a.readShort(), this.glyphOffsets.push(a.pos), this.glyphIDs.push(a.readUInt16()), 32 & o;) a.pos += 1 & o ? 4 : 2, 128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2);
		}
		return e.prototype.encode = function() {
			var e, t, n;
			for (t = new Ln(Zn.call(this.raw.data)), e = 0, n = this.glyphIDs.length; e < n; ++e) t.pos = this.glyphOffsets[e];
			return t.data;
		}, e;
	}(), tr = function(e) {
		function t() {
			return t.__super__.constructor.apply(this, arguments);
		}
		return Bn(t, In), t.prototype.tag = "loca", t.prototype.parse = function(e) {
			var t, n;
			return e.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = t === 0 ? function() {
				var t, r;
				for (r = [], n = 0, t = this.length; n < t; n += 2) r.push(2 * e.readUInt16());
				return r;
			}.call(this) : function() {
				var t, r;
				for (r = [], n = 0, t = this.length; n < t; n += 4) r.push(e.readUInt32());
				return r;
			}.call(this);
		}, t.prototype.indexOf = function(e) {
			return this.offsets[e];
		}, t.prototype.lengthOf = function(e) {
			return this.offsets[e + 1] - this.offsets[e];
		}, t.prototype.encode = function(e, t) {
			for (var n = new Uint32Array(this.offsets.length), r = 0, i = 0, a = 0; a < n.length; ++a) if (n[a] = r, i < t.length && t[i] == a) {
				++i, n[a] = r;
				var o = this.offsets[a], s = this.offsets[a + 1] - o;
				s > 0 && (r += s);
			}
			for (var c = Array(4 * n.length), l = 0; l < n.length; ++l) c[4 * l + 3] = 255 & n[l], c[4 * l + 2] = (65280 & n[l]) >> 8, c[4 * l + 1] = (16711680 & n[l]) >> 16, c[4 * l] = (4278190080 & n[l]) >> 24;
			return c;
		}, t;
	}(), nr = function() {
		function e(e) {
			this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33;
		}
		return e.prototype.generateCmap = function() {
			var e, t, n, r, i;
			for (t in r = this.font.cmap.tables[0].codeMap, e = {}, i = this.subset) n = i[t], e[t] = r[n];
			return e;
		}, e.prototype.glyphsFor = function(e) {
			var t, n, r, i, a, o, s;
			for (r = {}, a = 0, o = e.length; a < o; a++) r[i = e[a]] = this.font.glyf.glyphFor(i);
			for (i in t = [], r) (n = r[i]) != null && n.compound && t.push.apply(t, n.glyphIDs);
			if (t.length > 0) for (i in s = this.glyphsFor(t)) n = s[i], r[i] = n;
			return r;
		}, e.prototype.encode = function(e, t) {
			var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g;
			for (r in n = Un.encode(this.generateCmap(), "unicode"), a = this.glyphsFor(e), f = { 0: 0 }, g = n.charMap) f[(s = g[r]).old] = s.new;
			for (p in d = n.maxGlyphID, a) p in f || (f[p] = d++);
			return l = function(e) {
				var t, n;
				for (t in n = {}, e) n[e[t]] = t;
				return n;
			}(f), u = Object.keys(l).sort((function(e, t) {
				return e - t;
			})), m = function() {
				var e, t, n;
				for (n = [], e = 0, t = u.length; e < t; e++) o = u[e], n.push(l[o]);
				return n;
			}(), i = this.font.glyf.encode(a, m, f), c = this.font.loca.encode(i.offsets, m), h = {
				cmap: this.font.cmap.raw(),
				glyf: i.table,
				loca: c,
				hmtx: this.font.hmtx.raw(),
				hhea: this.font.hhea.raw(),
				maxp: this.font.maxp.raw(),
				post: this.font.post.raw(),
				name: this.font.name.raw(),
				head: this.font.head.encode(t)
			}, this.font.os2.exists && (h["OS/2"] = this.font.os2.raw()), this.font.directory.encode(h);
		}, e;
	}(), X.API.PDFObject = function() {
		var e;
		function t() {}
		return e = function(e, t) {
			return (Array(t + 1).join("0") + e).slice(-t);
		}, t.convert = function(n) {
			var r, i, a, o;
			if (Array.isArray(n)) return "[" + function() {
				var e, i, a;
				for (a = [], e = 0, i = n.length; e < i; e++) r = n[e], a.push(t.convert(r));
				return a;
			}().join(" ") + "]";
			if (typeof n == "string") return "/" + n;
			if (n?.isString) return "(" + n + ")";
			if (n instanceof Date) return "(D:" + e(n.getUTCFullYear(), 4) + e(n.getUTCMonth(), 2) + e(n.getUTCDate(), 2) + e(n.getUTCHours(), 2) + e(n.getUTCMinutes(), 2) + e(n.getUTCSeconds(), 2) + "Z)";
			if ({}.toString.call(n) === "[object Object]") {
				for (i in a = ["<<"], n) o = n[i], a.push("/" + i + " " + t.convert(o));
				return a.push(">>"), a.join("\n");
			}
			return "" + n;
		}, t;
	}();
})), ir = /* @__PURE__ */ a(((t, n) => {
	(function(r, i) {
		if (typeof t == "object" && typeof n == "object") n.exports = i(function() {
			try {
				return rr(), e(ze);
			} catch {}
		}());
		else if (typeof define == "function" && define.amd) define(["jspdf"], i);
		else {
			var a = i(typeof t == "object" ? function() {
				try {
					return rr(), e(ze);
				} catch {}
			}() : r.jspdf);
			for (var o in a) (typeof t == "object" ? t : r)[o] = a[o];
		}
	})(typeof globalThis < "u" ? globalThis : t === void 0 ? typeof window < "u" ? window : typeof self < "u" ? self : global : t, function(e) {
		return (function() {
			var t = {
				662: (function(e, t) {
					var n = this && this.__extends || (function() {
						var e = function(t, n) {
							return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
								e.__proto__ = t;
							} || function(e, t) {
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}, e(t, n);
						};
						return function(t, n) {
							if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
							e(t, n);
							function r() {
								this.constructor = t;
							}
							t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
						};
					})();
					Object.defineProperty(t, "__esModule", { value: !0 }), t.CellHookData = t.HookData = void 0;
					var r = function() {
						function e(e, t, n) {
							this.table = t, this.pageNumber = t.pageNumber, this.pageCount = this.pageNumber, this.settings = t.settings, this.cursor = n, this.doc = e.getDocument();
						}
						return e;
					}();
					t.HookData = r, t.CellHookData = function(e) {
						n(t, e);
						function t(t, n, r, i, a, o) {
							var s = e.call(this, t, n, o) || this;
							return s.cell = r, s.row = i, s.column = a, s.section = i.section, s;
						}
						return t;
					}(r);
				}),
				790: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 });
					var r = n(148), i = n(938), a = n(323), o = n(587), s = n(49), c = n(858);
					function l(e) {
						e.API.autoTable = function() {
							var e = [...arguments], t;
							e.length === 1 ? t = e[0] : (console.error("Use of deprecated autoTable initiation"), t = e[2] || {}, t.columns = e[0], t.body = e[1]);
							var n = (0, o.parseInput)(this, t), r = (0, c.createTable)(this, n);
							return (0, s.drawTable)(this, r), this;
						}, e.API.lastAutoTable = !1, e.API.previousAutoTable = !1, e.API.autoTable.previous = !1, e.API.autoTableText = function(e, t, n, r) {
							(0, i.default)(e, t, n, r, this);
						}, e.API.autoTableSetDefaults = function(e) {
							return a.DocHandler.setDefaults(e, this), this;
						}, e.autoTableSetDefaults = function(e, t) {
							a.DocHandler.setDefaults(e, t);
						}, e.API.autoTableHtmlToJson = function(e, t) {
							if (t === void 0 && (t = !1), typeof window > "u") return console.error("Cannot run autoTableHtmlToJson in non browser environment"), null;
							var n = new a.DocHandler(this), i = (0, r.parseHtml)(n, e, window, t, !1), o = i.head, s = i.body;
							return {
								columns: o[0].map(function(e) {
									return e.content;
								}),
								rows: s,
								data: s
							};
						}, e.API.autoTableEndPosY = function() {
							console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");
							var e = this.lastAutoTable;
							return e && e.finalY ? e.finalY : 0;
						}, e.API.autoTableAddPageContent = function(t) {
							return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."), e.API.autoTable.globalDefaults || (e.API.autoTable.globalDefaults = {}), e.API.autoTable.globalDefaults.addPageContent = t, this;
						}, e.API.autoTableAddPage = function() {
							return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"), this.addPage(), this;
						};
					}
					t.default = l;
				}),
				938: (function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 });
					function n(e, t, n, r, i) {
						r ||= {};
						var a = 1.15, o = i.internal.scaleFactor, s = i.internal.getFontSize() / o, c = /\r\n|\r|\n/g, l = "", u = 1;
						if ((r.valign === "middle" || r.valign === "bottom" || r.halign === "center" || r.halign === "right") && (l = typeof e == "string" ? e.split(c) : e, u = l.length || 1), n += s * (2 - a), r.valign === "middle" ? n -= u / 2 * s * a : r.valign === "bottom" && (n -= u * s * a), r.halign === "center" || r.halign === "right") {
							var d = s;
							if (r.halign === "center" && (d *= .5), l && u >= 1) {
								for (var f = 0; f < l.length; f++) i.text(l[f], t - i.getStringUnitWidth(l[f]) * d, n), n += s * a;
								return i;
							}
							t -= i.getStringUnitWidth(e) * d;
						}
						return r.halign === "justify" ? i.text(e, t, n, {
							maxWidth: r.maxWidth || 100,
							align: "justify"
						}) : i.text(e, t, n), i;
					}
					t.default = n;
				}),
				200: (function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.parseSpacing = t.getFillStyle = t.addTableBorder = t.getStringWidth = void 0;
					function n(e, t, n) {
						return n.applyStyles(t, !0), (Array.isArray(e) ? e : [e]).map(function(e) {
							return n.getTextWidth(e);
						}).reduce(function(e, t) {
							return Math.max(e, t);
						}, 0);
					}
					t.getStringWidth = n;
					function r(e, t, n, r) {
						var a = t.settings.tableLineWidth, o = t.settings.tableLineColor;
						e.applyStyles({
							lineWidth: a,
							lineColor: o
						});
						var s = i(a, !1);
						s && e.rect(n.x, n.y, t.getWidth(e.pageSize().width), r.y - n.y, s);
					}
					t.addTableBorder = r;
					function i(e, t) {
						var n = e > 0, r = t || t === 0;
						return n && r ? "DF" : n ? "S" : r ? "F" : null;
					}
					t.getFillStyle = i;
					function a(e, t) {
						if (e ||= t, Array.isArray(e)) {
							if (e.length >= 4) return {
								top: e[0],
								right: e[1],
								bottom: e[2],
								left: e[3]
							};
							if (e.length === 3) return {
								top: e[0],
								right: e[1],
								bottom: e[2],
								left: e[1]
							};
							if (e.length === 2) return {
								top: e[0],
								right: e[1],
								bottom: e[0],
								left: e[1]
							};
							e = e.length === 1 ? e[0] : t;
						}
						return typeof e == "object" ? (typeof e.vertical == "number" && (e.top = e.vertical, e.bottom = e.vertical), typeof e.horizontal == "number" && (e.right = e.horizontal, e.left = e.horizontal), {
							left: e.left ?? t,
							top: e.top ?? t,
							right: e.right ?? t,
							bottom: e.bottom ?? t
						}) : (typeof e != "number" && (e = t), {
							top: e,
							right: e,
							bottom: e,
							left: e
						});
					}
					t.parseSpacing = a;
				}),
				913: (function(e, t) {
					var n = this && this.__extends || (function() {
						var e = function(t, n) {
							return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
								e.__proto__ = t;
							} || function(e, t) {
								for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
							}, e(t, n);
						};
						return function(t, n) {
							if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
							e(t, n);
							function r() {
								this.constructor = t;
							}
							t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
						};
					})();
					Object.defineProperty(t, "__esModule", { value: !0 }), t.getTheme = t.defaultStyles = t.HtmlRowInput = t.FONT_ROW_RATIO = void 0, t.FONT_ROW_RATIO = 1.15, t.HtmlRowInput = function(e) {
						n(t, e);
						function t(t) {
							var n = e.call(this) || this;
							return n._element = t, n;
						}
						return t;
					}(Array);
					function r(e) {
						return {
							font: "helvetica",
							fontStyle: "normal",
							overflow: "linebreak",
							fillColor: !1,
							textColor: 20,
							halign: "left",
							valign: "top",
							fontSize: 10,
							cellPadding: 5 / e,
							lineColor: 200,
							lineWidth: 0,
							cellWidth: "auto",
							minCellHeight: 0,
							minCellWidth: 0
						};
					}
					t.defaultStyles = r;
					function i(e) {
						return {
							striped: {
								table: {
									fillColor: 255,
									textColor: 80,
									fontStyle: "normal"
								},
								head: {
									textColor: 255,
									fillColor: [
										41,
										128,
										185
									],
									fontStyle: "bold"
								},
								body: {},
								foot: {
									textColor: 255,
									fillColor: [
										41,
										128,
										185
									],
									fontStyle: "bold"
								},
								alternateRow: { fillColor: 245 }
							},
							grid: {
								table: {
									fillColor: 255,
									textColor: 80,
									fontStyle: "normal",
									lineWidth: .1
								},
								head: {
									textColor: 255,
									fillColor: [
										26,
										188,
										156
									],
									fontStyle: "bold",
									lineWidth: 0
								},
								body: {},
								foot: {
									textColor: 255,
									fillColor: [
										26,
										188,
										156
									],
									fontStyle: "bold",
									lineWidth: 0
								},
								alternateRow: {}
							},
							plain: {
								head: { fontStyle: "bold" },
								foot: { fontStyle: "bold" }
							}
						}[e];
					}
					t.getTheme = i;
				}),
				259: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.parseCss = void 0;
					var r = n(200);
					function i(e, t, n, r, i) {
						var s = {}, l = 96 / 72, u = o(t, function(e) {
							return i.getComputedStyle(e).backgroundColor;
						});
						u != null && (s.fillColor = u);
						var d = o(t, function(e) {
							return i.getComputedStyle(e).color;
						});
						d != null && (s.textColor = d);
						var f = o(t, function(e) {
							return i.getComputedStyle(e).borderTopColor;
						});
						f != null && (s.lineColor = f);
						var p = c(r, n);
						p && (s.cellPadding = p);
						var m = parseInt(r.borderTopWidth || "");
						m = m / l / n, m && (s.lineWidth = m);
						var h = [
							"left",
							"right",
							"center",
							"justify"
						];
						h.indexOf(r.textAlign) !== -1 && (s.halign = r.textAlign), h = [
							"middle",
							"bottom",
							"top"
						], h.indexOf(r.verticalAlign) !== -1 && (s.valign = r.verticalAlign);
						var g = parseInt(r.fontSize || "");
						isNaN(g) || (s.fontSize = g / l);
						var _ = a(r);
						_ && (s.fontStyle = _);
						var v = (r.fontFamily || "").toLowerCase();
						return e.indexOf(v) !== -1 && (s.font = v), s;
					}
					t.parseCss = i;
					function a(e) {
						var t = "";
						return (e.fontWeight === "bold" || e.fontWeight === "bolder" || parseInt(e.fontWeight) >= 700) && (t = "bold"), (e.fontStyle === "italic" || e.fontStyle === "oblique") && (t += "italic"), t;
					}
					function o(e, t) {
						var n = s(e, t);
						if (!n) return null;
						var r = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
						if (!r || !Array.isArray(r)) return null;
						var i = [
							parseInt(r[1]),
							parseInt(r[2]),
							parseInt(r[3])
						];
						return parseInt(r[4]) === 0 || isNaN(i[0]) || isNaN(i[1]) || isNaN(i[2]) ? null : i;
					}
					function s(e, t) {
						var n = t(e);
						return n === "rgba(0, 0, 0, 0)" || n === "transparent" || n === "initial" || n === "inherit" ? e.parentElement == null ? null : s(e.parentElement, t) : n;
					}
					function c(e, t) {
						var n = [
							e.paddingTop,
							e.paddingRight,
							e.paddingBottom,
							e.paddingLeft
						], i = 96 / (72 / t), a = (parseInt(e.lineHeight) - parseInt(e.fontSize)) / t / 2, o = n.map(function(e) {
							return parseInt(e || "0") / i;
						}), s = (0, r.parseSpacing)(o, 0);
						return a > s.top && (s.top = a), a > s.bottom && (s.bottom = a), s;
					}
				}),
				323: (function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.DocHandler = void 0;
					var n = {};
					t.DocHandler = function() {
						function e(e) {
							this.jsPDFDocument = e, this.userStyles = {
								textColor: e.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
								fontSize: e.internal.getFontSize(),
								fontStyle: e.internal.getFont().fontStyle,
								font: e.internal.getFont().fontName,
								lineWidth: e.getLineWidth ? this.jsPDFDocument.getLineWidth() : 0,
								lineColor: e.getDrawColor ? this.jsPDFDocument.getDrawColor() : 0
							};
						}
						return e.setDefaults = function(e, t) {
							t === void 0 && (t = null), t ? t.__autoTableDocumentDefaults = e : n = e;
						}, e.unifyColor = function(e) {
							return Array.isArray(e) ? e : typeof e == "number" ? [
								e,
								e,
								e
							] : typeof e == "string" ? [e] : null;
						}, e.prototype.applyStyles = function(t, n) {
							var r, i, a;
							n === void 0 && (n = !1), t.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(t.fontStyle);
							var o = this.jsPDFDocument.internal.getFont(), s = o.fontStyle, c = o.fontName;
							if (t.font && (c = t.font), t.fontStyle) {
								s = t.fontStyle;
								var l = this.getFontList()[c];
								l && l.indexOf(s) === -1 && (this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(l[0]), s = l[0]);
							}
							if (this.jsPDFDocument.setFont(c, s), t.fontSize && this.jsPDFDocument.setFontSize(t.fontSize), !n) {
								var u = e.unifyColor(t.fillColor);
								u && (r = this.jsPDFDocument).setFillColor.apply(r, u), u = e.unifyColor(t.textColor), u && (i = this.jsPDFDocument).setTextColor.apply(i, u), u = e.unifyColor(t.lineColor), u && (a = this.jsPDFDocument).setDrawColor.apply(a, u), typeof t.lineWidth == "number" && this.jsPDFDocument.setLineWidth(t.lineWidth);
							}
						}, e.prototype.splitTextToSize = function(e, t, n) {
							return this.jsPDFDocument.splitTextToSize(e, t, n);
						}, e.prototype.rect = function(e, t, n, r, i) {
							return this.jsPDFDocument.rect(e, t, n, r, i);
						}, e.prototype.getLastAutoTable = function() {
							return this.jsPDFDocument.lastAutoTable || null;
						}, e.prototype.getTextWidth = function(e) {
							return this.jsPDFDocument.getTextWidth(e);
						}, e.prototype.getDocument = function() {
							return this.jsPDFDocument;
						}, e.prototype.setPage = function(e) {
							this.jsPDFDocument.setPage(e);
						}, e.prototype.addPage = function() {
							return this.jsPDFDocument.addPage();
						}, e.prototype.getFontList = function() {
							return this.jsPDFDocument.getFontList();
						}, e.prototype.getGlobalOptions = function() {
							return n || {};
						}, e.prototype.getDocumentOptions = function() {
							return this.jsPDFDocument.__autoTableDocumentDefaults || {};
						}, e.prototype.pageSize = function() {
							var e = this.jsPDFDocument.internal.pageSize;
							return e.width ?? (e = {
								width: e.getWidth(),
								height: e.getHeight()
							}), e;
						}, e.prototype.scaleFactor = function() {
							return this.jsPDFDocument.internal.scaleFactor;
						}, e.prototype.pageNumber = function() {
							var e = this.jsPDFDocument.internal.getCurrentPageInfo();
							return e ? e.pageNumber : this.jsPDFDocument.internal.getNumberOfPages();
						}, e;
					}();
				}),
				148: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.parseHtml = void 0;
					var r = n(259), i = n(913);
					function a(e, t, n, r, i) {
						r === void 0 && (r = !1), i === void 0 && (i = !1);
						var a = typeof t == "string" ? n.document.querySelector(t) : t, s = Object.keys(e.getFontList()), c = e.scaleFactor(), l = [], u = [], d = [];
						if (!a) return console.error("Html table could not be found with input: ", t), {
							head: l,
							body: u,
							foot: d
						};
						for (var f = 0; f < a.rows.length; f++) {
							var p = a.rows[f], m = (p?.parentElement?.tagName)?.toLowerCase(), h = o(s, c, n, p, r, i);
							h && (m === "thead" ? l.push(h) : m === "tfoot" ? d.push(h) : u.push(h));
						}
						return {
							head: l,
							body: u,
							foot: d
						};
					}
					t.parseHtml = a;
					function o(e, t, n, a, o, c) {
						for (var l = new i.HtmlRowInput(a), u = 0; u < a.cells.length; u++) {
							var d = a.cells[u], f = n.getComputedStyle(d);
							if (o || f.display !== "none") {
								var p = void 0;
								c && (p = (0, r.parseCss)(e, d, t, f, n)), l.push({
									rowSpan: d.rowSpan,
									colSpan: d.colSpan,
									styles: p,
									_element: d,
									content: s(d)
								});
							}
						}
						var m = n.getComputedStyle(a);
						if (l.length > 0 && (o || m.display !== "none")) return l;
					}
					function s(e) {
						var t = e.cloneNode(!0);
						return t.innerHTML = t.innerHTML.replace(/\n/g, "").replace(/ +/g, " "), t.innerHTML = t.innerHTML.split(/\<br.*?\>/).map(function(e) {
							return e.trim();
						}).join("\n"), t.innerText || t.textContent || "";
					}
				}),
				587: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.parseInput = void 0;
					var r = n(148), i = n(360), a = n(200), o = n(323), s = n(291);
					function c(e, t) {
						var n = new o.DocHandler(e), r = n.getDocumentOptions(), a = n.getGlobalOptions();
						(0, s.default)(n, a, r, t);
						var c = (0, i.assign)({}, a, r, t), f;
						typeof window < "u" && (f = window);
						var m = l(a, r, t), h = u(a, r, t), g = d(n, c), _ = p(n, c, f);
						return {
							id: t.tableId,
							content: _,
							hooks: h,
							styles: m,
							settings: g
						};
					}
					t.parseInput = c;
					function l(e, t, n) {
						for (var r = {
							styles: {},
							headStyles: {},
							bodyStyles: {},
							footStyles: {},
							alternateRowStyles: {},
							columnStyles: {}
						}, a = function(a) {
							if (a === "columnStyles") {
								var o = e[a], s = t[a], c = n[a];
								r.columnStyles = (0, i.assign)({}, o, s, c);
							} else {
								var l = [
									e,
									t,
									n
								].map(function(e) {
									return e[a] || {};
								});
								r[a] = (0, i.assign)({}, l[0], l[1], l[2]);
							}
						}, o = 0, s = Object.keys(r); o < s.length; o++) {
							var c = s[o];
							a(c);
						}
						return r;
					}
					function u(e, t, n) {
						for (var r = [
							e,
							t,
							n
						], i = {
							didParseCell: [],
							willDrawCell: [],
							didDrawCell: [],
							didDrawPage: []
						}, a = 0, o = r; a < o.length; a++) {
							var s = o[a];
							s.didParseCell && i.didParseCell.push(s.didParseCell), s.willDrawCell && i.willDrawCell.push(s.willDrawCell), s.didDrawCell && i.didDrawCell.push(s.didDrawCell), s.didDrawPage && i.didDrawPage.push(s.didDrawPage);
						}
						return i;
					}
					function d(e, t) {
						var n = (0, a.parseSpacing)(t.margin, 40 / e.scaleFactor()), r = f(e, t.startY) ?? n.top, i = t.showFoot === !0 ? "everyPage" : t.showFoot === !1 ? "never" : t.showFoot ?? "everyPage", o = t.showHead === !0 ? "everyPage" : t.showHead === !1 ? "never" : t.showHead ?? "everyPage", s = t.useCss ?? !1, c = t.theme || (s ? "plain" : "striped"), l = !!t.horizontalPageBreak, u = t.horizontalPageBreakRepeat ?? null;
						return {
							includeHiddenHtml: t.includeHiddenHtml ?? !1,
							useCss: s,
							theme: c,
							startY: r,
							margin: n,
							pageBreak: t.pageBreak ?? "auto",
							rowPageBreak: t.rowPageBreak ?? "auto",
							tableWidth: t.tableWidth ?? "auto",
							showHead: o,
							showFoot: i,
							tableLineWidth: t.tableLineWidth ?? 0,
							tableLineColor: t.tableLineColor ?? 200,
							horizontalPageBreak: l,
							horizontalPageBreakRepeat: u
						};
					}
					function f(e, t) {
						var n = e.getLastAutoTable(), r = e.scaleFactor(), i = e.pageNumber(), a = !1;
						return n && n.startPageNumber && (a = n.startPageNumber + n.pageNumber - 1 === i), typeof t == "number" ? t : (t == null || t === !1) && a && n?.finalY != null ? n.finalY + 20 / r : null;
					}
					function p(e, t, n) {
						var i = t.head || [], a = t.body || [], o = t.foot || [];
						if (t.html) {
							var s = t.includeHiddenHtml;
							if (n) {
								var c = (0, r.parseHtml)(e, t.html, n, s, t.useCss) || {};
								i = c.head || i, a = c.body || i, o = c.foot || i;
							} else console.error("Cannot parse html in non browser environment");
						}
						return {
							columns: t.columns || m(i, a, o),
							head: i,
							body: a,
							foot: o
						};
					}
					function m(e, t, n) {
						var r = e[0] || t[0] || n[0] || [], i = [];
						return Object.keys(r).filter(function(e) {
							return e !== "_element";
						}).forEach(function(e) {
							var t = 1, n = Array.isArray(r) ? r[parseInt(e)] : r[e];
							typeof n == "object" && !Array.isArray(n) && (t = n?.colSpan || 1);
							for (var a = 0; a < t; a++) {
								var o = void 0;
								o = Array.isArray(r) ? i.length : e + (a > 0 ? `_${a}` : "");
								var s = { dataKey: o };
								i.push(s);
							}
						}), i;
					}
				}),
				291: (function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 });
					function n(e, t, n, i) {
						for (var a = function(t) {
							t && typeof t != "object" && console.error("The options parameter should be of type object, is: " + typeof t), t.extendWidth !== void 0 && (t.tableWidth = t.extendWidth ? "auto" : "wrap", console.error("Use of deprecated option: extendWidth, use tableWidth instead.")), t.margins !== void 0 && (t.margin === void 0 && (t.margin = t.margins), console.error("Use of deprecated option: margins, use margin instead.")), t.startY && typeof t.startY != "number" && (console.error("Invalid value for startY option", t.startY), delete t.startY), !t.didDrawPage && (t.afterPageContent || t.beforePageContent || t.afterPageAdd) && (console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"), t.didDrawPage = function(n) {
								e.applyStyles(e.userStyles), t.beforePageContent && t.beforePageContent(n), e.applyStyles(e.userStyles), t.afterPageContent && t.afterPageContent(n), e.applyStyles(e.userStyles), t.afterPageAdd && n.pageNumber > 1 && n.afterPageAdd(n), e.applyStyles(e.userStyles);
							}), [
								"createdHeaderCell",
								"drawHeaderRow",
								"drawRow",
								"drawHeaderCell"
							].forEach(function(e) {
								t[e] && console.error(`The "${e}" hook has changed in version 3.0, check the changelog for how to migrate.`);
							}), [
								["showFoot", "showFooter"],
								["showHead", "showHeader"],
								["didDrawPage", "addPageContent"],
								["didParseCell", "createdCell"],
								["headStyles", "headerStyles"]
							].forEach(function(e) {
								var n = e[0], r = e[1];
								t[r] && (console.error(`Use of deprecated option ${r}. Use ${n} instead`), t[n] = t[r]);
							}), [
								["padding", "cellPadding"],
								["lineHeight", "rowHeight"],
								"fontSize",
								"overflow"
							].forEach(function(e) {
								var n = typeof e == "string" ? e : e[0], r = typeof e == "string" ? e : e[1];
								t[n] !== void 0 && (t.styles[r] === void 0 && (t.styles[r] = t[n]), console.error("Use of deprecated option: " + n + ", use the style " + r + " instead."));
							});
							for (var n = 0, i = [
								"styles",
								"bodyStyles",
								"headStyles",
								"footStyles"
							]; n < i.length; n++) {
								var a = i[n];
								r(t[a] || {});
							}
							for (var o = t.columnStyles || {}, s = 0, c = Object.keys(o); s < c.length; s++) {
								var l = c[s];
								r(o[l] || {});
							}
						}, o = 0, s = [
							t,
							n,
							i
						]; o < s.length; o++) {
							var c = s[o];
							a(c);
						}
					}
					t.default = n;
					function r(e) {
						e.rowHeight ? (console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."), e.minCellHeight ||= e.rowHeight) : e.columnWidth && (console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."), e.cellWidth ||= e.columnWidth);
					}
				}),
				287: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.Column = t.Cell = t.Row = t.Table = void 0;
					var r = n(913), i = n(662), a = n(200);
					t.Table = function() {
						function e(e, t) {
							this.pageNumber = 1, this.pageCount = 1, this.id = e.id, this.settings = e.settings, this.styles = e.styles, this.hooks = e.hooks, this.columns = t.columns, this.head = t.head, this.body = t.body, this.foot = t.foot;
						}
						return e.prototype.getHeadHeight = function(e) {
							return this.head.reduce(function(t, n) {
								return t + n.getMaxCellHeight(e);
							}, 0);
						}, e.prototype.getFootHeight = function(e) {
							return this.foot.reduce(function(t, n) {
								return t + n.getMaxCellHeight(e);
							}, 0);
						}, e.prototype.allRows = function() {
							return this.head.concat(this.body).concat(this.foot);
						}, e.prototype.callCellHooks = function(e, t, n, r, a, o) {
							for (var s = 0, c = t; s < c.length; s++) {
								var l = c[s], u = l(new i.CellHookData(e, this, n, r, a, o)) === !1;
								if (n.text = Array.isArray(n.text) ? n.text : [n.text], u) return !1;
							}
							return !0;
						}, e.prototype.callEndPageHooks = function(e, t) {
							e.applyStyles(e.userStyles);
							for (var n = 0, r = this.hooks.didDrawPage; n < r.length; n++) {
								var a = r[n];
								a(new i.HookData(e, this, t));
							}
						}, e.prototype.getWidth = function(e) {
							if (typeof this.settings.tableWidth == "number") return this.settings.tableWidth;
							if (this.settings.tableWidth === "wrap") return this.columns.reduce(function(e, t) {
								return e + t.wrappedWidth;
							}, 0);
							var t = this.settings.margin;
							return e - t.left - t.right;
						}, e;
					}(), t.Row = function() {
						function e(e, t, n, i, a) {
							a === void 0 && (a = !1), this.height = 0, this.raw = e, e instanceof r.HtmlRowInput && (this.raw = e._element, this.element = e._element), this.index = t, this.section = n, this.cells = i, this.spansMultiplePages = a;
						}
						return e.prototype.getMaxCellHeight = function(e) {
							var t = this;
							return e.reduce(function(e, n) {
								return Math.max(e, t.cells[n.index]?.height || 0);
							}, 0);
						}, e.prototype.hasRowSpan = function(e) {
							var t = this;
							return e.filter(function(e) {
								var n = t.cells[e.index];
								return n ? n.rowSpan > 1 : !1;
							}).length > 0;
						}, e.prototype.canEntireRowFit = function(e, t) {
							return this.getMaxCellHeight(t) <= e;
						}, e.prototype.getMinimumRowHeight = function(e, t) {
							var n = this;
							return e.reduce(function(e, i) {
								var a = n.cells[i.index];
								if (!a) return 0;
								var o = a.styles.fontSize / t.scaleFactor() * r.FONT_ROW_RATIO, s = a.padding("vertical") + o;
								return s > e ? s : e;
							}, 0);
						}, e;
					}(), t.Cell = function() {
						function e(e, t, n) {
							this.contentHeight = 0, this.contentWidth = 0, this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0, this.styles = t, this.section = n, this.raw = e;
							var r = e;
							typeof e == "object" && e && !Array.isArray(e) ? (this.rowSpan = e.rowSpan || 1, this.colSpan = e.colSpan || 1, r = e.content ?? e.title ?? e, e._element && (this.raw = e._element)) : (this.rowSpan = 1, this.colSpan = 1), this.text = (r == null ? "" : "" + r).split(/\r\n|\r|\n/g);
						}
						return e.prototype.getTextPos = function() {
							var e;
							if (this.styles.valign === "top") e = this.y + this.padding("top");
							else if (this.styles.valign === "bottom") e = this.y + this.height - this.padding("bottom");
							else {
								var t = this.height - this.padding("vertical");
								e = this.y + t / 2 + this.padding("top");
							}
							var n;
							if (this.styles.halign === "right") n = this.x + this.width - this.padding("right");
							else if (this.styles.halign === "center") {
								var r = this.width - this.padding("horizontal");
								n = this.x + r / 2 + this.padding("left");
							} else n = this.x + this.padding("left");
							return {
								x: n,
								y: e
							};
						}, e.prototype.getContentHeight = function(e) {
							var t = (Array.isArray(this.text) ? this.text.length : 1) * (this.styles.fontSize / e * r.FONT_ROW_RATIO) + this.padding("vertical");
							return Math.max(t, this.styles.minCellHeight);
						}, e.prototype.padding = function(e) {
							var t = (0, a.parseSpacing)(this.styles.cellPadding, 0);
							return e === "vertical" ? t.top + t.bottom : e === "horizontal" ? t.left + t.right : t[e];
						}, e;
					}(), t.Column = function() {
						function e(e, t, n) {
							this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.dataKey = e, this.raw = t, this.index = n;
						}
						return e.prototype.getMaxCustomCellWidth = function(e) {
							for (var t = 0, n = 0, r = e.allRows(); n < r.length; n++) {
								var i = r[n].cells[this.index];
								i && typeof i.styles.cellWidth == "number" && (t = Math.max(t, i.styles.cellWidth));
							}
							return t;
						}, e;
					}();
				}),
				360: (function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.assign = void 0;
					function n(e, t, n, r, i) {
						if (e == null) throw TypeError("Cannot convert undefined or null to object");
						for (var a = Object(e), o = 1; o < arguments.length; o++) {
							var s = arguments[o];
							if (s != null) for (var c in s) Object.prototype.hasOwnProperty.call(s, c) && (a[c] = s[c]);
						}
						return a;
					}
					t.assign = n;
				}),
				858: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.createTable = void 0;
					var r = n(323), i = n(287), a = n(189), o = n(913), s = n(360);
					function c(e, t) {
						var n = new r.DocHandler(e), o = l(t, n.scaleFactor()), s = new i.Table(t, o);
						return (0, a.calculateWidths)(n, s), n.applyStyles(n.userStyles), s;
					}
					t.createTable = c;
					function l(e, t) {
						var n = e.content, r = p(n.columns);
						if (n.head.length === 0) {
							var i = d(r, "head");
							i && n.head.push(i);
						}
						if (n.foot.length === 0) {
							var i = d(r, "foot");
							i && n.foot.push(i);
						}
						var a = e.settings.theme, o = e.styles;
						return {
							columns: r,
							head: u("head", n.head, r, o, a, t),
							body: u("body", n.body, r, o, a, t),
							foot: u("foot", n.foot, r, o, a, t)
						};
					}
					function u(e, t, n, r, a, o) {
						var s = {};
						return t.map(function(t, c) {
							for (var l = 0, u = {}, d = 0, f = 0, p = 0, h = n; p < h.length; p++) {
								var g = h[p];
								if (s[g.index] == null || s[g.index].left === 0) if (f === 0) {
									var _ = void 0;
									_ = Array.isArray(t) ? t[g.index - d - l] : t[g.dataKey];
									var v = {};
									typeof _ == "object" && !Array.isArray(_) && (v = _?.styles || {});
									var y = m(e, g, c, a, r, o, v), b = new i.Cell(_, y, e);
									u[g.dataKey] = b, u[g.index] = b, f = b.colSpan - 1, s[g.index] = {
										left: b.rowSpan - 1,
										times: f
									};
								} else f--, d++;
								else s[g.index].left--, f = s[g.index].times, l++;
							}
							return new i.Row(t, c, e, u);
						});
					}
					function d(e, t) {
						var n = {};
						return e.forEach(function(e) {
							if (e.raw != null) {
								var r = f(t, e.raw);
								r != null && (n[e.dataKey] = r);
							}
						}), Object.keys(n).length > 0 ? n : null;
					}
					function f(e, t) {
						if (e === "head") {
							if (typeof t == "object") return t.header || t.title || null;
							if (typeof t == "string" || typeof t == "number") return t;
						} else if (e === "foot" && typeof t == "object") return t.footer;
						return null;
					}
					function p(e) {
						return e.map(function(e, t) {
							var n = typeof e == "object" ? e.dataKey ?? e.key ?? t : t;
							return new i.Column(n, e, t);
						});
					}
					function m(e, t, n, r, i, a, c) {
						var l = (0, o.getTheme)(r), u;
						e === "head" ? u = i.headStyles : e === "body" ? u = i.bodyStyles : e === "foot" && (u = i.footStyles);
						var d = (0, s.assign)({}, l.table, l[e], i.styles, u), f = i.columnStyles[t.dataKey] || i.columnStyles[t.index] || {}, p = e === "body" ? f : {}, m = e === "body" && n % 2 == 0 ? (0, s.assign)({}, l.alternateRow, i.alternateRowStyles) : {}, h = (0, o.defaultStyles)(a), g = (0, s.assign)({}, h, d, m, p);
						return (0, s.assign)(g, c);
					}
				}),
				49: (function(e, t, n) {
					var r = this && this.__spreadArray || function(e, t, n) {
						if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
						return e.concat(a || Array.prototype.slice.call(t));
					};
					Object.defineProperty(t, "__esModule", { value: !0 }), t.addPage = t.drawTable = void 0;
					var i = n(913), a = n(200), o = n(287), s = n(323), c = n(360), l = n(938), u = n(435);
					function d(e, t) {
						var n = t.settings, r = n.startY, i = n.margin, o = {
							x: i.left,
							y: r
						}, l = t.getHeadHeight(t.columns) + t.getFootHeight(t.columns), u = r + i.bottom + l;
						if (n.pageBreak === "avoid") {
							var d = t.allRows().reduce(function(e, t) {
								return e + t.height;
							}, 0);
							u += d;
						}
						var p = new s.DocHandler(e);
						(n.pageBreak === "always" || n.startY != null && u > p.pageSize().height) && (E(p), o.y = i.top);
						var m = (0, c.assign)({}, o);
						t.startPageNumber = p.pageNumber(), n.horizontalPageBreak === !0 ? f(p, t, m, o) : (p.applyStyles(p.userStyles), (n.showHead === "firstPage" || n.showHead === "everyPage") && t.head.forEach(function(e) {
							return b(p, t, e, o, t.columns);
						}), p.applyStyles(p.userStyles), t.body.forEach(function(e, n) {
							y(p, t, e, n === t.body.length - 1, m, o, t.columns);
						}), p.applyStyles(p.userStyles), (n.showFoot === "lastPage" || n.showFoot === "everyPage") && t.foot.forEach(function(e) {
							return b(p, t, e, o, t.columns);
						})), (0, a.addTableBorder)(p, t, m, o), t.callEndPageHooks(p, o), t.finalY = o.y, e.lastAutoTable = t, e.previousAutoTable = t, e.autoTable && (e.autoTable.previous = t), p.applyStyles(p.userStyles);
					}
					t.drawTable = d;
					function f(e, t, n, r) {
						u.default.calculateAllColumnsCanFitInPage(e, t).map(function(i, a) {
							e.applyStyles(e.userStyles), a > 0 ? T(e, t, n, r, i.columns) : p(e, t, r, i.columns), m(e, t, n, r, i.columns), h(e, t, r, i.columns);
						});
					}
					function p(e, t, n, r) {
						var i = t.settings;
						e.applyStyles(e.userStyles), (i.showHead === "firstPage" || i.showHead === "everyPage") && t.head.forEach(function(i) {
							return b(e, t, i, n, r);
						});
					}
					function m(e, t, n, r, i) {
						e.applyStyles(e.userStyles), t.body.forEach(function(a, o) {
							y(e, t, a, o === t.body.length - 1, n, r, i);
						});
					}
					function h(e, t, n, r) {
						var i = t.settings;
						e.applyStyles(e.userStyles), (i.showFoot === "lastPage" || i.showFoot === "everyPage") && t.foot.forEach(function(i) {
							return b(e, t, i, n, r);
						});
					}
					function g(e, t, n) {
						var r = e.styles.fontSize / n.scaleFactor() * i.FONT_ROW_RATIO, a = e.padding("vertical"), o = Math.floor((t - a) / r);
						return Math.max(0, o);
					}
					function _(e, t, n, r) {
						var i = {};
						e.spansMultiplePages = !0, e.height = 0;
						for (var a = 0, s = 0, l = n.columns; s < l.length; s++) {
							var u = l[s], d = e.cells[u.index];
							if (d) {
								Array.isArray(d.text) || (d.text = [d.text]);
								var f = new o.Cell(d.raw, d.styles, d.section);
								f = (0, c.assign)(f, d), f.text = [];
								var p = g(d, t, r);
								d.text.length > p && (f.text = d.text.splice(p, d.text.length));
								var m = r.scaleFactor();
								d.contentHeight = d.getContentHeight(m), d.contentHeight >= t && (d.contentHeight = t, f.styles.minCellHeight -= t), d.contentHeight > e.height && (e.height = d.contentHeight), f.contentHeight = f.getContentHeight(m), f.contentHeight > a && (a = f.contentHeight), i[u.index] = f;
							}
						}
						var h = new o.Row(e.raw, -1, e.section, i, !0);
						h.height = a;
						for (var _ = 0, v = n.columns; _ < v.length; _++) {
							var u = v[_], f = h.cells[u.index];
							f && (f.height = h.height);
							var d = e.cells[u.index];
							d && (d.height = e.height);
						}
						return h;
					}
					function v(e, t, n, r) {
						var i = e.pageSize().height, a = r.settings.margin, o = i - (a.top + a.bottom);
						t.section === "body" && (o -= r.getHeadHeight(r.columns) + r.getFootHeight(r.columns));
						var s = t.getMinimumRowHeight(r.columns, e), c = s < n;
						if (s > o) return console.error(`Will not be able to print row ${t.index} correctly since it's minimum height is larger than page height`), !0;
						if (!c) return !1;
						var l = t.hasRowSpan(r.columns);
						return t.getMaxCellHeight(r.columns) > o ? (l && console.error(`The content of row ${t.index} will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.`), !0) : !(l || r.settings.rowPageBreak === "avoid");
					}
					function y(e, t, n, r, i, a, o) {
						var s = w(e, t, r, a);
						if (n.canEntireRowFit(s, o)) b(e, t, n, a, o);
						else if (v(e, n, s, t)) {
							var c = _(n, s, t, e);
							b(e, t, n, a, o), T(e, t, i, a, o), y(e, t, c, r, i, a, o);
						} else T(e, t, i, a, o), y(e, t, n, r, i, a, o);
					}
					function b(e, t, n, r, i) {
						r.x = t.settings.margin.left;
						for (var a = 0, o = i; a < o.length; a++) {
							var s = o[a], c = n.cells[s.index];
							if (!c) {
								r.x += s.width;
								continue;
							}
							if (e.applyStyles(c.styles), c.x = r.x, c.y = r.y, t.callCellHooks(e, t.hooks.willDrawCell, c, n, s, r) === !1) {
								r.x += s.width;
								continue;
							}
							x(e, c, r);
							var u = c.getTextPos();
							(0, l.default)(c.text, u.x, u.y, {
								halign: c.styles.halign,
								valign: c.styles.valign,
								maxWidth: Math.ceil(c.width - c.padding("left") - c.padding("right"))
							}, e.getDocument()), t.callCellHooks(e, t.hooks.didDrawCell, c, n, s, r), r.x += s.width;
						}
						r.y += n.height;
					}
					function x(e, t, n) {
						var r = t.styles;
						if (e.getDocument().setFillColor(e.getDocument().getFillColor()), typeof r.lineWidth == "number") {
							var i = (0, a.getFillStyle)(r.lineWidth, r.fillColor);
							i && e.rect(t.x, n.y, t.width, t.height, i);
						} else typeof r.lineWidth == "object" && (S(e, t, n, r.fillColor), C(e, t, n, r.fillColor, r.lineWidth));
					}
					function S(e, t, n, r) {
						var i = r === !1 ? null : typeof r == "string" ? r : "F";
						e.rect(t.x, n.y, t.width, t.height, i);
					}
					function C(e, t, n, i, o) {
						var s, c, l, u;
						o.top && (s = n.x, c = n.y, l = n.x + t.width, u = n.y, o.right && (l += .5 * o.right), o.left && (s -= .5 * o.left), d([
							s,
							c,
							l,
							u
						], o.top, i)), o.bottom && (s = n.x, c = n.y + t.height, l = n.x + t.width, u = n.y + t.height, o.right && (l += .5 * o.right), o.left && (s -= .5 * o.left), d([
							s,
							c,
							l,
							u
						], o.bottom, i)), o.left && (s = n.x, c = n.y, l = n.x, u = n.y + t.height, o.top && (c -= .5 * o.top), o.bottom && (u += .5 * o.bottom), d([
							s,
							c,
							l,
							u
						], o.left, i)), o.right && (s = n.x + t.width, c = n.y, l = n.x + t.width, u = n.y + t.height, o.top && (c -= .5 * o.top), o.bottom && (u += .5 * o.bottom), d([
							s,
							c,
							l,
							u
						], o.right, i));
						function d(t, n, i) {
							var o;
							e.getDocument().setLineWidth(n), (o = e.getDocument()).line.apply(o, r(r([], t, !1), [(0, a.getFillStyle)(n, i)], !1));
						}
					}
					function w(e, t, n, r) {
						var i = t.settings.margin.bottom, a = t.settings.showFoot;
						return (a === "everyPage" || a === "lastPage" && n) && (i += t.getFootHeight(t.columns)), e.pageSize().height - r.y - i;
					}
					function T(e, t, n, r, i) {
						i === void 0 && (i = []), e.applyStyles(e.userStyles), t.settings.showFoot === "everyPage" && t.foot.forEach(function(n) {
							return b(e, t, n, r, i);
						}), t.callEndPageHooks(e, r);
						var o = t.settings.margin;
						(0, a.addTableBorder)(e, t, n, r), E(e), t.pageNumber++, t.pageCount++, r.x = o.left, r.y = o.top, n.y = o.top, t.settings.showHead === "everyPage" && (t.head.forEach(function(n) {
							return b(e, t, n, r, i);
						}), e.applyStyles(e.userStyles));
					}
					t.addPage = T;
					function E(e) {
						var t = e.pageNumber();
						e.setPage(t + 1), e.pageNumber() === t && e.addPage();
					}
				}),
				435: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 });
					var r = n(200), i = function(e, t) {
						var n = (0, r.parseSpacing)(t.settings.margin, 0);
						return e.pageSize().width - (n.left + n.right);
					}, a = function(e, t, n) {
						n === void 0 && (n = {});
						var r = i(e, t), a = t.settings.horizontalPageBreakRepeat, o = null, s = [], c = [], l = t.columns.length, u = n && n.start ? n.start : 0;
						for (a != null && (o = t.columns.find(function(e) {
							return e.dataKey === a || e.index === a;
						}), o && (s.push(o.index), c.push(t.columns[o.index]), r -= o.wrappedWidth)); u < l;) {
							if (o?.index === u) {
								u++;
								continue;
							}
							var d = t.columns[u].wrappedWidth;
							if (r < d) {
								(u === 0 || u === n.start) && (s.push(u), c.push(t.columns[u]));
								break;
							}
							s.push(u), c.push(t.columns[u]), r -= d, u++;
						}
						return {
							colIndexes: s,
							columns: c,
							lastIndex: u
						};
					};
					t.default = {
						getColumnsCanFitInPage: a,
						calculateAllColumnsCanFitInPage: function(e, t) {
							for (var n = [], r = 0, i = t.columns.length; r < i;) {
								var o = a(e, t, { start: r === 0 ? 0 : r });
								o && o.columns && o.columns.length ? (r = o.lastIndex, n.push(o)) : r++;
							}
							return n;
						},
						getPageAvailableWidth: i
					};
				}),
				189: (function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.ellipsize = t.resizeColumns = t.calculateWidths = void 0;
					var r = n(200), i = n(435);
					function a(e, t) {
						o(e, t);
						var n = [], r = 0;
						t.columns.forEach(function(e) {
							var i = e.getMaxCustomCellWidth(t);
							i ? e.width = i : (e.width = e.wrappedWidth, n.push(e)), r += e.width;
						});
						var i = t.getWidth(e.pageSize().width) - r;
						i &&= s(n, i, function(e) {
							return Math.max(e.minReadableWidth, e.minWidth);
						}), i &&= s(n, i, function(e) {
							return e.minWidth;
						}), i = Math.abs(i), !t.settings.horizontalPageBreak && i > .1 / e.scaleFactor() && (i = i < 1 ? i : Math.round(i), console.error(`Of the table content, ${i} units width could not fit page`)), l(t), u(t, e), c(t);
					}
					t.calculateWidths = a;
					function o(e, t) {
						var n = e.scaleFactor(), a = t.settings.horizontalPageBreak, o = i.default.getPageAvailableWidth(e, t);
						t.allRows().forEach(function(i) {
							for (var s = 0, c = t.columns; s < c.length; s++) {
								var l = c[s], u = i.cells[l.index];
								if (u) {
									var d = t.hooks.didParseCell;
									t.callCellHooks(e, d, u, i, l, null);
									var f = u.padding("horizontal");
									if (u.contentWidth = (0, r.getStringWidth)(u.text, u.styles, e) + f, u.minReadableWidth = (0, r.getStringWidth)(u.text.join(" ").split(/\s+/), u.styles, e) + u.padding("horizontal"), typeof u.styles.cellWidth == "number") u.minWidth = u.styles.cellWidth, u.wrappedWidth = u.styles.cellWidth;
									else if (u.styles.cellWidth === "wrap" || a === !0) u.contentWidth > o ? (u.minWidth = o, u.wrappedWidth = o) : (u.minWidth = u.contentWidth, u.wrappedWidth = u.contentWidth);
									else {
										var p = 10 / n;
										u.minWidth = u.styles.minCellWidth || p, u.wrappedWidth = u.contentWidth, u.minWidth > u.wrappedWidth && (u.wrappedWidth = u.minWidth);
									}
								}
							}
						}), t.allRows().forEach(function(e) {
							for (var n = 0, r = t.columns; n < r.length; n++) {
								var i = r[n], a = e.cells[i.index];
								if (a && a.colSpan === 1) i.wrappedWidth = Math.max(i.wrappedWidth, a.wrappedWidth), i.minWidth = Math.max(i.minWidth, a.minWidth), i.minReadableWidth = Math.max(i.minReadableWidth, a.minReadableWidth);
								else {
									var o = t.styles.columnStyles[i.dataKey] || t.styles.columnStyles[i.index] || {}, s = o.cellWidth || o.minCellWidth;
									s && typeof s == "number" && (i.minWidth = s, i.wrappedWidth = s);
								}
								a && (a.colSpan > 1 && !i.minWidth && (i.minWidth = a.minWidth), a.colSpan > 1 && !i.wrappedWidth && (i.wrappedWidth = a.minWidth));
							}
						});
					}
					function s(e, t, n) {
						for (var r = t, i = e.reduce(function(e, t) {
							return e + t.wrappedWidth;
						}, 0), a = 0; a < e.length; a++) {
							var o = e[a], c = r * (o.wrappedWidth / i), l = o.width + c, u = n(o), d = l < u ? u : l;
							t -= d - o.width, o.width = d;
						}
						if (t = Math.round(t * 1e10) / 1e10, t) {
							var f = e.filter(function(e) {
								return t < 0 ? e.width > n(e) : !0;
							});
							f.length && (t = s(f, t, n));
						}
						return t;
					}
					t.resizeColumns = s;
					function c(e) {
						for (var t = {}, n = 1, r = e.allRows(), i = 0; i < r.length; i++) for (var a = r[i], o = 0, s = e.columns; o < s.length; o++) {
							var c = s[o], l = t[c.index];
							if (n > 1) n--, delete a.cells[c.index];
							else if (l) l.cell.height += a.height, n = l.cell.colSpan, delete a.cells[c.index], l.left--, l.left <= 1 && delete t[c.index];
							else {
								var u = a.cells[c.index];
								if (!u) continue;
								if (u.height = a.height, u.rowSpan > 1) {
									var d = r.length - i, f = u.rowSpan > d ? d : u.rowSpan;
									t[c.index] = {
										cell: u,
										left: f,
										row: a
									};
								}
							}
						}
					}
					function l(e) {
						for (var t = e.allRows(), n = 0; n < t.length; n++) for (var r = t[n], i = null, a = 0, o = 0, s = 0; s < e.columns.length; s++) {
							var c = e.columns[s];
							if (--o, o > 1 && e.columns[s + 1]) a += c.width, delete r.cells[c.index];
							else if (i) {
								var l = i;
								delete r.cells[c.index], i = null, l.width = c.width + a;
							} else {
								var l = r.cells[c.index];
								if (!l) continue;
								if (o = l.colSpan, a = 0, l.colSpan > 1) {
									i = l, a += c.width;
									continue;
								}
								l.width = c.width + a;
							}
						}
					}
					function u(e, t) {
						for (var n = {
							count: 0,
							height: 0
						}, r = 0, i = e.allRows(); r < i.length; r++) {
							for (var a = i[r], o = 0, s = e.columns; o < s.length; o++) {
								var c = s[o], l = a.cells[c.index];
								if (l) {
									t.applyStyles(l.styles, !0);
									var u = l.width - l.padding("horizontal");
									if (l.styles.overflow === "linebreak") l.text = t.splitTextToSize(l.text, u + 1 / t.scaleFactor(), { fontSize: l.styles.fontSize });
									else if (l.styles.overflow === "ellipsize") l.text = d(l.text, u, l.styles, t, "...");
									else if (l.styles.overflow === "hidden") l.text = d(l.text, u, l.styles, t, "");
									else if (typeof l.styles.overflow == "function") {
										var f = l.styles.overflow(l.text, u);
										typeof f == "string" ? l.text = [f] : l.text = f;
									}
									l.contentHeight = l.getContentHeight(t.scaleFactor());
									var p = l.contentHeight / l.rowSpan;
									l.rowSpan > 1 && n.count * n.height < p * l.rowSpan ? n = {
										height: p,
										count: l.rowSpan
									} : n && n.count > 0 && n.height > p && (p = n.height), p > a.height && (a.height = p);
								}
							}
							n.count--;
						}
					}
					function d(e, t, n, r, i) {
						return e.map(function(e) {
							return f(e, t, n, r, i);
						});
					}
					t.ellipsize = d;
					function f(e, t, n, i, a) {
						var o = 1e4 * i.scaleFactor();
						if (t = Math.ceil(t * o) / o, t >= (0, r.getStringWidth)(e, n, i)) return e;
						for (; t < (0, r.getStringWidth)(e + a, n, i) && !(e.length <= 1);) e = e.substring(0, e.length - 1);
						return e.trim() + a;
					}
				}),
				84: (function(t) {
					if (e === void 0) {
						var n = /* @__PURE__ */ Error("Cannot find module 'undefined'");
						throw n.code = "MODULE_NOT_FOUND", n;
					}
					t.exports = e;
				})
			}, n = {};
			function r(e) {
				var i = n[e];
				if (i !== void 0) return i.exports;
				var a = n[e] = { exports: {} };
				return t[e].call(a.exports, a, a.exports, r), a.exports;
			}
			var i = {};
			return (function() {
				var e = i;
				Object.defineProperty(e, "__esModule", { value: !0 }), e.Cell = e.Column = e.Row = e.Table = e.CellHookData = e.__drawTable = e.__createTable = e.applyPlugin = void 0;
				var t = r(790), n = r(587), a = r(49), o = r(858), s = r(287);
				Object.defineProperty(e, "Table", {
					enumerable: !0,
					get: function() {
						return s.Table;
					}
				});
				var c = r(662);
				Object.defineProperty(e, "CellHookData", {
					enumerable: !0,
					get: function() {
						return c.CellHookData;
					}
				});
				var l = r(287);
				Object.defineProperty(e, "Cell", {
					enumerable: !0,
					get: function() {
						return l.Cell;
					}
				}), Object.defineProperty(e, "Column", {
					enumerable: !0,
					get: function() {
						return l.Column;
					}
				}), Object.defineProperty(e, "Row", {
					enumerable: !0,
					get: function() {
						return l.Row;
					}
				});
				function u(e) {
					(0, t.default)(e);
				}
				e.applyPlugin = u;
				function d(e, t) {
					var r = (0, n.parseInput)(e, t), i = (0, o.createTable)(e, r);
					(0, a.drawTable)(e, i);
				}
				function f(e, t) {
					var r = (0, n.parseInput)(e, t);
					return (0, o.createTable)(e, r);
				}
				e.__createTable = f;
				function p(e, t) {
					(0, a.drawTable)(e, t);
				}
				e.__drawTable = p;
				try {
					var m = r(84);
					m.jsPDF && (m = m.jsPDF), u(m);
				} catch {}
				e.default = d;
			})(), i;
		})();
	});
}));
rr(), ir();
//#endregion
//#region src/components/CheckboxDropdown.jsx
function ar(e) {
	let [t, n] = u([]), [r, i] = u(!1);
	l(() => {
		n(e.colData);
	}, [e.colData]);
	let a = () => {
		i(!r);
	}, o = (r) => {
		let i = t.map((e) => e.name === r ? {
			...e,
			selected: !e.selected
		} : e);
		e.handleColumnToggle(r), n(i);
	};
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: `dropdown ${r ? "open" : ""}`,
		children: [/* @__PURE__ */ (0, R.jsxs)("div", {
			className: "dropdown__header",
			onClick: a,
			children: [/* @__PURE__ */ (0, R.jsx)("span", {
				className: "dropdown__title",
				children: "Select Columns "
			}), /* @__PURE__ */ (0, R.jsx)("span", {
				className: "dropdown__arrow",
				children: "▾"
			})]
		}), r && /* @__PURE__ */ (0, R.jsx)("ul", {
			className: "dropdown__options",
			children: t.map((e) => /* @__PURE__ */ (0, R.jsx)("li", {
				className: "dropdown__option",
				children: /* @__PURE__ */ (0, R.jsxs)("label", {
					className: "dropdown__option-label",
					children: [/* @__PURE__ */ (0, R.jsx)("input", {
						type: "checkbox",
						className: "me-2",
						checked: e.selected,
						onChange: () => o(e.name)
					}), e.name.charAt(0).toUpperCase() + e.name.slice(1)]
				})
			}, e.name))
		})]
	});
}
(/* @__PURE__ */ a(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.bootstrap = r());
	})(e, (function() {
		let e = /* @__PURE__ */ new Map(), t = {
			set(t, n, r) {
				e.has(t) || e.set(t, /* @__PURE__ */ new Map());
				let i = e.get(t);
				if (!i.has(n) && i.size !== 0) {
					console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
					return;
				}
				i.set(n, r);
			},
			get(t, n) {
				return e.has(t) && e.get(t).get(n) || null;
			},
			remove(t, n) {
				if (!e.has(t)) return;
				let r = e.get(t);
				r.delete(n), r.size === 0 && e.delete(t);
			}
		}, n = "transitionend", r = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e), i = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), a = (e) => {
			do
				e += Math.floor(Math.random() * 1e6);
			while (document.getElementById(e));
			return e;
		}, o = (e) => {
			if (!e) return 0;
			let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
			return !Number.parseFloat(t) && !Number.parseFloat(n) ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * 1e3);
		}, s = (e) => {
			e.dispatchEvent(new Event(n));
		}, c = (e) => !e || typeof e != "object" ? !1 : (e.jquery !== void 0 && (e = e[0]), e.nodeType !== void 0), l = (e) => c(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(r(e)) : null, u = (e) => {
			if (!c(e) || e.getClientRects().length === 0) return !1;
			let t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
			if (!n) return t;
			if (n !== e) {
				let t = e.closest("summary");
				if (t && t.parentNode !== n || t === null) return !1;
			}
			return t;
		}, d = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.disabled === void 0 ? e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false" : e.disabled, f = (e) => {
			if (!document.documentElement.attachShadow) return null;
			if (typeof e.getRootNode == "function") {
				let t = e.getRootNode();
				return t instanceof ShadowRoot ? t : null;
			}
			return e instanceof ShadowRoot ? e : e.parentNode ? f(e.parentNode) : null;
		}, p = () => {}, m = (e) => {
			e.offsetHeight;
		}, h = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, g = [], _ = (e) => {
			document.readyState === "loading" ? (g.length || document.addEventListener("DOMContentLoaded", () => {
				for (let e of g) e();
			}), g.push(e)) : e();
		}, v = () => document.documentElement.dir === "rtl", y = (e) => {
			_(() => {
				let t = h();
				/* istanbul ignore if */
				if (t) {
					let n = e.NAME, r = t.fn[n];
					t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
				}
			});
		}, b = (e, t = [], n = e) => typeof e == "function" ? e(...t) : n, x = (e, t, r = !0) => {
			if (!r) {
				b(e);
				return;
			}
			let i = o(t) + 5, a = !1, c = ({ target: r }) => {
				r === t && (a = !0, t.removeEventListener(n, c), b(e));
			};
			t.addEventListener(n, c), setTimeout(() => {
				a || s(t);
			}, i);
		}, S = (e, t, n, r) => {
			let i = e.length, a = e.indexOf(t);
			return a === -1 ? !n && r ? e[i - 1] : e[0] : (a += n ? 1 : -1, r && (a = (a + i) % i), e[Math.max(0, Math.min(a, i - 1))]);
		}, C = /[^.]*(?=\..*)\.|.*/, w = /\..*/, T = /::\d+$/, E = {}, D = 1, O = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, k = new Set(/* @__PURE__ */ "click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll".split("."));
		function A(e, t) {
			return t && `${t}::${D++}` || e.uidEvent || D++;
		}
		function j(e) {
			let t = A(e);
			return e.uidEvent = t, E[t] = E[t] || {}, E[t];
		}
		function M(e, t) {
			return function n(r) {
				return B(r, { delegateTarget: e }), n.oneOff && z.off(e, r.type, t), t.apply(e, [r]);
			};
		}
		function N(e, t, n) {
			return function r(i) {
				let a = e.querySelectorAll(t);
				for (let { target: o } = i; o && o !== this; o = o.parentNode) for (let s of a) if (s === o) return B(i, { delegateTarget: o }), r.oneOff && z.off(e, i.type, t, n), n.apply(o, [i]);
			};
		}
		function P(e, t, n = null) {
			return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
		}
		function F(e, t, n) {
			let r = typeof t == "string", i = r ? n : t || n, a = R(e);
			return k.has(a) || (a = e), [
				r,
				i,
				a
			];
		}
		function I(e, t, n, r, i) {
			if (typeof t != "string" || !e) return;
			let [a, o, s] = F(t, n, r);
			t in O && (o = ((e) => function(t) {
				if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
			})(o));
			let c = j(e), l = c[s] || (c[s] = {}), u = P(l, o, a ? n : null);
			if (u) {
				u.oneOff = u.oneOff && i;
				return;
			}
			let d = A(o, t.replace(C, "")), f = a ? N(e, n, o) : M(e, o);
			f.delegationSelector = a ? n : null, f.callable = o, f.oneOff = i, f.uidEvent = d, l[d] = f, e.addEventListener(s, f, a);
		}
		function L(e, t, n, r, i) {
			let a = P(t[n], r, i);
			a && (e.removeEventListener(n, a, !!i), delete t[n][a.uidEvent]);
		}
		function ee(e, t, n, r) {
			let i = t[n] || {};
			for (let [a, o] of Object.entries(i)) a.includes(r) && L(e, t, n, o.callable, o.delegationSelector);
		}
		function R(e) {
			return e = e.replace(w, ""), O[e] || e;
		}
		let z = {
			on(e, t, n, r) {
				I(e, t, n, r, !1);
			},
			one(e, t, n, r) {
				I(e, t, n, r, !0);
			},
			off(e, t, n, r) {
				if (typeof t != "string" || !e) return;
				let [i, a, o] = F(t, n, r), s = o !== t, c = j(e), l = c[o] || {}, u = t.startsWith(".");
				if (a !== void 0) {
					if (!Object.keys(l).length) return;
					L(e, c, o, a, i ? n : null);
					return;
				}
				if (u) for (let n of Object.keys(c)) ee(e, c, n, t.slice(1));
				for (let [n, r] of Object.entries(l)) {
					let i = n.replace(T, "");
					(!s || t.includes(i)) && L(e, c, o, r.callable, r.delegationSelector);
				}
			},
			trigger(e, t, n) {
				if (typeof t != "string" || !e) return null;
				let r = h(), i = t !== R(t), a = null, o = !0, s = !0, c = !1;
				i && r && (a = r.Event(t, n), r(e).trigger(a), o = !a.isPropagationStopped(), s = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented());
				let l = B(new Event(t, {
					bubbles: o,
					cancelable: !0
				}), n);
				return c && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && a && a.preventDefault(), l;
			}
		};
		function B(e, t = {}) {
			for (let [n, r] of Object.entries(t)) try {
				e[n] = r;
			} catch {
				Object.defineProperty(e, n, {
					configurable: !0,
					get() {
						return r;
					}
				});
			}
			return e;
		}
		function te(e) {
			if (e === "true") return !0;
			if (e === "false") return !1;
			if (e === Number(e).toString()) return Number(e);
			if (e === "" || e === "null") return null;
			if (typeof e != "string") return e;
			try {
				return JSON.parse(decodeURIComponent(e));
			} catch {
				return e;
			}
		}
		function V(e) {
			return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
		}
		let H = {
			setDataAttribute(e, t, n) {
				e.setAttribute(`data-bs-${V(t)}`, n);
			},
			removeDataAttribute(e, t) {
				e.removeAttribute(`data-bs-${V(t)}`);
			},
			getDataAttributes(e) {
				if (!e) return {};
				let t = {}, n = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
				for (let r of n) {
					let n = r.replace(/^bs/, "");
					n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = te(e.dataset[r]);
				}
				return t;
			},
			getDataAttribute(e, t) {
				return te(e.getAttribute(`data-bs-${V(t)}`));
			}
		};
		class U {
			static get Default() {
				return {};
			}
			static get DefaultType() {
				return {};
			}
			static get NAME() {
				throw Error("You have to implement the static method \"NAME\", for each component!");
			}
			_getConfig(e) {
				return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
			}
			_configAfterMerge(e) {
				return e;
			}
			_mergeConfigObj(e, t) {
				let n = c(t) ? H.getDataAttribute(t, "config") : {};
				return {
					...this.constructor.Default,
					...typeof n == "object" ? n : {},
					...c(t) ? H.getDataAttributes(t) : {},
					...typeof e == "object" ? e : {}
				};
			}
			_typeCheckConfig(e, t = this.constructor.DefaultType) {
				for (let [n, r] of Object.entries(t)) {
					let t = e[n], a = c(t) ? "element" : i(t);
					if (!new RegExp(r).test(a)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`);
				}
			}
		}
		class ne extends U {
			constructor(e, n) {
				super(), e = l(e), e && (this._element = e, this._config = this._getConfig(n), t.set(this._element, this.constructor.DATA_KEY, this));
			}
			dispose() {
				t.remove(this._element, this.constructor.DATA_KEY), z.off(this._element, this.constructor.EVENT_KEY);
				for (let e of Object.getOwnPropertyNames(this)) this[e] = null;
			}
			_queueCallback(e, t, n = !0) {
				x(e, t, n);
			}
			_getConfig(e) {
				return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
			}
			static getInstance(e) {
				return t.get(l(e), this.DATA_KEY);
			}
			static getOrCreateInstance(e, t = {}) {
				return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
			}
			static get VERSION() {
				return "5.3.0";
			}
			static get DATA_KEY() {
				return `bs.${this.NAME}`;
			}
			static get EVENT_KEY() {
				return `.${this.DATA_KEY}`;
			}
			static eventName(e) {
				return `${e}${this.EVENT_KEY}`;
			}
		}
		let re = (e) => {
			let t = e.getAttribute("data-bs-target");
			if (!t || t === "#") {
				let n = e.getAttribute("href");
				if (!n || !n.includes("#") && !n.startsWith(".")) return null;
				n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
			}
			return r(t);
		}, W = {
			find(e, t = document.documentElement) {
				return [].concat(...Element.prototype.querySelectorAll.call(t, e));
			},
			findOne(e, t = document.documentElement) {
				return Element.prototype.querySelector.call(t, e);
			},
			children(e, t) {
				return [].concat(...e.children).filter((e) => e.matches(t));
			},
			parents(e, t) {
				let n = [], r = e.parentNode.closest(t);
				for (; r;) n.push(r), r = r.parentNode.closest(t);
				return n;
			},
			prev(e, t) {
				let n = e.previousElementSibling;
				for (; n;) {
					if (n.matches(t)) return [n];
					n = n.previousElementSibling;
				}
				return [];
			},
			next(e, t) {
				let n = e.nextElementSibling;
				for (; n;) {
					if (n.matches(t)) return [n];
					n = n.nextElementSibling;
				}
				return [];
			},
			focusableChildren(e) {
				let t = [
					"a",
					"button",
					"input",
					"textarea",
					"select",
					"details",
					"[tabindex]",
					"[contenteditable=\"true\"]"
				].map((e) => `${e}:not([tabindex^="-"])`).join(",");
				return this.find(t, e).filter((e) => !d(e) && u(e));
			},
			getSelectorFromElement(e) {
				let t = re(e);
				return t && W.findOne(t) ? t : null;
			},
			getElementFromSelector(e) {
				let t = re(e);
				return t ? W.findOne(t) : null;
			},
			getMultipleElementsFromSelector(e) {
				let t = re(e);
				return t ? W.find(t) : [];
			}
		}, ie = (e, t = "hide") => {
			let n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
			z.on(document, n, `[data-bs-dismiss="${r}"]`, function(n) {
				if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), d(this)) return;
				let i = W.getElementFromSelector(this) || this.closest(`.${r}`);
				e.getOrCreateInstance(i)[t]();
			});
		}, ae = ".bs.alert", oe = `close${ae}`, se = `closed${ae}`;
		class G extends ne {
			static get NAME() {
				return "alert";
			}
			close() {
				if (z.trigger(this._element, oe).defaultPrevented) return;
				this._element.classList.remove("show");
				let e = this._element.classList.contains("fade");
				this._queueCallback(() => this._destroyElement(), this._element, e);
			}
			_destroyElement() {
				this._element.remove(), z.trigger(this._element, se), this.dispose();
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = G.getOrCreateInstance(this);
					if (typeof e == "string") {
						if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw TypeError(`No method named "${e}"`);
						t[e](this);
					}
				});
			}
		}
		ie(G, "close"), y(G);
		let ce = "[data-bs-toggle=\"button\"]";
		class le extends ne {
			static get NAME() {
				return "button";
			}
			toggle() {
				this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = le.getOrCreateInstance(this);
					e === "toggle" && t[e]();
				});
			}
		}
		z.on(document, "click.bs.button.data-api", ce, (e) => {
			e.preventDefault();
			let t = e.target.closest(ce);
			le.getOrCreateInstance(t).toggle();
		}), y(le);
		let ue = ".bs.swipe", K = `touchstart${ue}`, de = `touchmove${ue}`, fe = `touchend${ue}`, pe = `pointerdown${ue}`, me = `pointerup${ue}`, he = {
			endCallback: null,
			leftCallback: null,
			rightCallback: null
		}, ge = {
			endCallback: "(function|null)",
			leftCallback: "(function|null)",
			rightCallback: "(function|null)"
		};
		class _e extends U {
			constructor(e, t) {
				super(), this._element = e, !(!e || !_e.isSupported()) && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
			}
			static get Default() {
				return he;
			}
			static get DefaultType() {
				return ge;
			}
			static get NAME() {
				return "swipe";
			}
			dispose() {
				z.off(this._element, ue);
			}
			_start(e) {
				if (!this._supportPointerEvents) {
					this._deltaX = e.touches[0].clientX;
					return;
				}
				this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
			}
			_end(e) {
				this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), b(this._config.endCallback);
			}
			_move(e) {
				this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
			}
			_handleSwipe() {
				let e = Math.abs(this._deltaX);
				if (e <= 40) return;
				let t = e / this._deltaX;
				this._deltaX = 0, t && b(t > 0 ? this._config.rightCallback : this._config.leftCallback);
			}
			_initEvents() {
				this._supportPointerEvents ? (z.on(this._element, pe, (e) => this._start(e)), z.on(this._element, me, (e) => this._end(e)), this._element.classList.add("pointer-event")) : (z.on(this._element, K, (e) => this._start(e)), z.on(this._element, de, (e) => this._move(e)), z.on(this._element, fe, (e) => this._end(e)));
			}
			_eventIsPointerPenTouch(e) {
				return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
			}
			static isSupported() {
				return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
			}
		}
		let ve = ".bs.carousel", ye = ".data-api", be = "next", q = "prev", xe = "left", Se = "right", Ce = `slide${ve}`, J = `slid${ve}`, we = `keydown${ve}`, Te = `mouseenter${ve}`, Ee = `mouseleave${ve}`, De = `dragstart${ve}`, Oe = `load${ve}${ye}`, ke = `click${ve}${ye}`, Ae = "carousel", je = "active", Me = ".active", Ne = ".carousel-item", Pe = Me + Ne, Fe = {
			ArrowLeft: Se,
			ArrowRight: xe
		}, Ie = {
			interval: 5e3,
			keyboard: !0,
			pause: "hover",
			ride: !1,
			touch: !0,
			wrap: !0
		}, Le = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			pause: "(string|boolean)",
			ride: "(boolean|string)",
			touch: "boolean",
			wrap: "boolean"
		};
		class Y extends ne {
			constructor(e, t) {
				super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = W.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Ae && this.cycle();
			}
			static get Default() {
				return Ie;
			}
			static get DefaultType() {
				return Le;
			}
			static get NAME() {
				return "carousel";
			}
			next() {
				this._slide(be);
			}
			nextWhenVisible() {
				!document.hidden && u(this._element) && this.next();
			}
			prev() {
				this._slide(q);
			}
			pause() {
				this._isSliding && s(this._element), this._clearInterval();
			}
			cycle() {
				this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
			}
			_maybeEnableCycle() {
				if (this._config.ride) {
					if (this._isSliding) {
						z.one(this._element, J, () => this.cycle());
						return;
					}
					this.cycle();
				}
			}
			to(e) {
				let t = this._getItems();
				if (e > t.length - 1 || e < 0) return;
				if (this._isSliding) {
					z.one(this._element, J, () => this.to(e));
					return;
				}
				let n = this._getItemIndex(this._getActive());
				if (n === e) return;
				let r = e > n ? be : q;
				this._slide(r, t[e]);
			}
			dispose() {
				this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
			}
			_configAfterMerge(e) {
				return e.defaultInterval = e.interval, e;
			}
			_addEventListeners() {
				this._config.keyboard && z.on(this._element, we, (e) => this._keydown(e)), this._config.pause === "hover" && (z.on(this._element, Te, () => this.pause()), z.on(this._element, Ee, () => this._maybeEnableCycle())), this._config.touch && _e.isSupported() && this._addTouchEventListeners();
			}
			_addTouchEventListeners() {
				for (let e of W.find(".carousel-item img", this._element)) z.on(e, De, (e) => e.preventDefault());
				this._swipeHelper = new _e(this._element, {
					leftCallback: () => this._slide(this._directionToOrder(xe)),
					rightCallback: () => this._slide(this._directionToOrder(Se)),
					endCallback: () => {
						this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
					}
				});
			}
			_keydown(e) {
				if (/input|textarea/i.test(e.target.tagName)) return;
				let t = Fe[e.key];
				t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
			}
			_getItemIndex(e) {
				return this._getItems().indexOf(e);
			}
			_setActiveIndicatorElement(e) {
				if (!this._indicatorsElement) return;
				let t = W.findOne(Me, this._indicatorsElement);
				t.classList.remove(je), t.removeAttribute("aria-current");
				let n = W.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
				n && (n.classList.add(je), n.setAttribute("aria-current", "true"));
			}
			_updateInterval() {
				let e = this._activeElement || this._getActive();
				if (!e) return;
				let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
				this._config.interval = t || this._config.defaultInterval;
			}
			_slide(e, t = null) {
				if (this._isSliding) return;
				let n = this._getActive(), r = e === be, i = t || S(this._getItems(), n, r, this._config.wrap);
				if (i === n) return;
				let a = this._getItemIndex(i), o = (t) => z.trigger(this._element, t, {
					relatedTarget: i,
					direction: this._orderToDirection(e),
					from: this._getItemIndex(n),
					to: a
				});
				if (o(Ce).defaultPrevented || !n || !i) return;
				let s = !!this._interval;
				this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = i;
				let c = r ? "carousel-item-start" : "carousel-item-end", l = r ? "carousel-item-next" : "carousel-item-prev";
				i.classList.add(l), m(i), n.classList.add(c), i.classList.add(c), this._queueCallback(() => {
					i.classList.remove(c, l), i.classList.add(je), n.classList.remove(je, l, c), this._isSliding = !1, o(J);
				}, n, this._isAnimated()), s && this.cycle();
			}
			_isAnimated() {
				return this._element.classList.contains("slide");
			}
			_getActive() {
				return W.findOne(Pe, this._element);
			}
			_getItems() {
				return W.find(Ne, this._element);
			}
			_clearInterval() {
				this._interval &&= (clearInterval(this._interval), null);
			}
			_directionToOrder(e) {
				return v() ? e === xe ? q : be : e === xe ? be : q;
			}
			_orderToDirection(e) {
				return v() ? e === q ? xe : Se : e === q ? Se : xe;
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = Y.getOrCreateInstance(this, e);
					if (typeof e == "number") {
						t.to(e);
						return;
					}
					if (typeof e == "string") {
						if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
		}
		z.on(document, ke, "[data-bs-slide], [data-bs-slide-to]", function(e) {
			let t = W.getElementFromSelector(this);
			if (!t || !t.classList.contains(Ae)) return;
			e.preventDefault();
			let n = Y.getOrCreateInstance(t), r = this.getAttribute("data-bs-slide-to");
			if (r) {
				n.to(r), n._maybeEnableCycle();
				return;
			}
			if (H.getDataAttribute(this, "slide") === "next") {
				n.next(), n._maybeEnableCycle();
				return;
			}
			n.prev(), n._maybeEnableCycle();
		}), z.on(window, Oe, () => {
			let e = W.find("[data-bs-ride=\"carousel\"]");
			for (let t of e) Y.getOrCreateInstance(t);
		}), y(Y);
		let Re = ".bs.collapse", ze = `show${Re}`, Be = `shown${Re}`, Ve = `hide${Re}`, He = `hidden${Re}`, Ue = `click${Re}.data-api`, We = "show", Ge = "collapse", Ke = "collapsing", qe = `:scope .${Ge} .${Ge}`, Je = "[data-bs-toggle=\"collapse\"]", Ye = {
			parent: null,
			toggle: !0
		}, Xe = {
			parent: "(null|element)",
			toggle: "boolean"
		};
		class Ze extends ne {
			constructor(e, t) {
				super(e, t), this._isTransitioning = !1, this._triggerArray = [];
				let n = W.find(Je);
				for (let e of n) {
					let t = W.getSelectorFromElement(e), n = W.find(t).filter((e) => e === this._element);
					t !== null && n.length && this._triggerArray.push(e);
				}
				this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
			}
			static get Default() {
				return Ye;
			}
			static get DefaultType() {
				return Xe;
			}
			static get NAME() {
				return "collapse";
			}
			toggle() {
				this._isShown() ? this.hide() : this.show();
			}
			show() {
				if (this._isTransitioning || this._isShown()) return;
				let e = [];
				if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e) => e !== this._element).map((e) => Ze.getOrCreateInstance(e, { toggle: !1 }))), e.length && e[0]._isTransitioning || z.trigger(this._element, ze).defaultPrevented) return;
				for (let t of e) t.hide();
				let t = this._getDimension();
				this._element.classList.remove(Ge), this._element.classList.add(Ke), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
				let n = () => {
					this._isTransitioning = !1, this._element.classList.remove(Ke), this._element.classList.add(Ge, We), this._element.style[t] = "", z.trigger(this._element, Be);
				}, r = `scroll${t[0].toUpperCase() + t.slice(1)}`;
				this._queueCallback(n, this._element, !0), this._element.style[t] = `${this._element[r]}px`;
			}
			hide() {
				if (this._isTransitioning || !this._isShown() || z.trigger(this._element, Ve).defaultPrevented) return;
				let e = this._getDimension();
				this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, m(this._element), this._element.classList.add(Ke), this._element.classList.remove(Ge, We);
				for (let e of this._triggerArray) {
					let t = W.getElementFromSelector(e);
					t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
				}
				this._isTransitioning = !0;
				let t = () => {
					this._isTransitioning = !1, this._element.classList.remove(Ke), this._element.classList.add(Ge), z.trigger(this._element, He);
				};
				this._element.style[e] = "", this._queueCallback(t, this._element, !0);
			}
			_isShown(e = this._element) {
				return e.classList.contains(We);
			}
			_configAfterMerge(e) {
				return e.toggle = !!e.toggle, e.parent = l(e.parent), e;
			}
			_getDimension() {
				return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
			}
			_initializeChildren() {
				if (!this._config.parent) return;
				let e = this._getFirstLevelChildren(Je);
				for (let t of e) {
					let e = W.getElementFromSelector(t);
					e && this._addAriaAndCollapsedClass([t], this._isShown(e));
				}
			}
			_getFirstLevelChildren(e) {
				let t = W.find(qe, this._config.parent);
				return W.find(e, this._config.parent).filter((e) => !t.includes(e));
			}
			_addAriaAndCollapsedClass(e, t) {
				if (e.length) for (let n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t);
			}
			static jQueryInterface(e) {
				let t = {};
				return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
					let n = Ze.getOrCreateInstance(this, t);
					if (typeof e == "string") {
						if (n[e] === void 0) throw TypeError(`No method named "${e}"`);
						n[e]();
					}
				});
			}
		}
		z.on(document, Ue, Je, function(e) {
			(e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
			for (let e of W.getMultipleElementsFromSelector(this)) Ze.getOrCreateInstance(e, { toggle: !1 }).toggle();
		}), y(Ze);
		var Qe = "top", $e = "bottom", et = "right", tt = "left", nt = "auto", rt = [
			Qe,
			$e,
			et,
			tt
		], it = "start", at = "end", ot = "clippingParents", st = "viewport", ct = "popper", lt = "reference", ut = /* @__PURE__ */ rt.reduce(function(e, t) {
			return e.concat([t + "-" + it, t + "-" + at]);
		}, []), X = /* @__PURE__ */ [].concat(rt, [nt]).reduce(function(e, t) {
			return e.concat([
				t,
				t + "-" + it,
				t + "-" + at
			]);
		}, []), dt = "beforeRead", ft = "read", pt = "afterRead", mt = "beforeMain", ht = "main", gt = "afterMain", _t = "beforeWrite", vt = "write", yt = "afterWrite", bt = [
			dt,
			ft,
			pt,
			mt,
			ht,
			gt,
			_t,
			vt,
			yt
		];
		function xt(e) {
			return e ? (e.nodeName || "").toLowerCase() : null;
		}
		function St(e) {
			if (e == null) return window;
			if (e.toString() !== "[object Window]") {
				var t = e.ownerDocument;
				return t && t.defaultView || window;
			}
			return e;
		}
		function Ct(e) {
			return e instanceof St(e).Element || e instanceof Element;
		}
		function Z(e) {
			return e instanceof St(e).HTMLElement || e instanceof HTMLElement;
		}
		function wt(e) {
			return typeof ShadowRoot > "u" ? !1 : e instanceof St(e).ShadowRoot || e instanceof ShadowRoot;
		}
		function Tt(e) {
			var t = e.state;
			Object.keys(t.elements).forEach(function(e) {
				var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
				!Z(i) || !xt(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
					var t = r[e];
					t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
				}));
			});
		}
		function Et(e) {
			var t = e.state, n = {
				popper: {
					position: t.options.strategy,
					left: "0",
					top: "0",
					margin: "0"
				},
				arrow: { position: "absolute" },
				reference: {}
			};
			return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
				Object.keys(t.elements).forEach(function(e) {
					var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
						return e[t] = "", e;
					}, {});
					!Z(r) || !xt(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
						r.removeAttribute(e);
					}));
				});
			};
		}
		let Dt = {
			name: "applyStyles",
			enabled: !0,
			phase: "write",
			fn: Tt,
			effect: Et,
			requires: ["computeStyles"]
		};
		function Ot(e) {
			return e.split("-")[0];
		}
		var kt = Math.max, At = Math.min, jt = Math.round;
		function Mt() {
			var e = navigator.userAgentData;
			return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
				return e.brand + "/" + e.version;
			}).join(" ") : navigator.userAgent;
		}
		function Nt() {
			return !/^((?!chrome|android).)*safari/i.test(Mt());
		}
		function Pt(e, t, n) {
			t === void 0 && (t = !1), n === void 0 && (n = !1);
			var r = e.getBoundingClientRect(), i = 1, a = 1;
			t && Z(e) && (i = e.offsetWidth > 0 && jt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && jt(r.height) / e.offsetHeight || 1);
			var o = (Ct(e) ? St(e) : window).visualViewport, s = !Nt() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
			return {
				width: u,
				height: d,
				top: l,
				right: c + u,
				bottom: l + d,
				left: c,
				x: c,
				y: l
			};
		}
		function Q(e) {
			var t = Pt(e), n = e.offsetWidth, r = e.offsetHeight;
			return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
				x: e.offsetLeft,
				y: e.offsetTop,
				width: n,
				height: r
			};
		}
		function Ft(e, t) {
			var n = t.getRootNode && t.getRootNode();
			if (e.contains(t)) return !0;
			if (n && wt(n)) {
				var r = t;
				do {
					if (r && e.isSameNode(r)) return !0;
					r = r.parentNode || r.host;
				} while (r);
			}
			return !1;
		}
		function It(e) {
			return St(e).getComputedStyle(e);
		}
		function Lt(e) {
			return [
				"table",
				"td",
				"th"
			].indexOf(xt(e)) >= 0;
		}
		function Rt(e) {
			return ((Ct(e) ? e.ownerDocument : e.document) || window.document).documentElement;
		}
		function zt(e) {
			return xt(e) === "html" ? e : e.assignedSlot || e.parentNode || (wt(e) ? e.host : null) || Rt(e);
		}
		function Bt(e) {
			return !Z(e) || It(e).position === "fixed" ? null : e.offsetParent;
		}
		function Vt(e) {
			var t = /firefox/i.test(Mt());
			if (/Trident/i.test(Mt()) && Z(e) && It(e).position === "fixed") return null;
			var n = zt(e);
			for (wt(n) && (n = n.host); Z(n) && ["html", "body"].indexOf(xt(n)) < 0;) {
				var r = It(n);
				if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
				n = n.parentNode;
			}
			return null;
		}
		function Ht(e) {
			for (var t = St(e), n = Bt(e); n && Lt(n) && It(n).position === "static";) n = Bt(n);
			return n && (xt(n) === "html" || xt(n) === "body" && It(n).position === "static") ? t : n || Vt(e) || t;
		}
		function Ut(e) {
			return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
		}
		function Wt(e, t, n) {
			return kt(e, At(t, n));
		}
		function Gt(e, t, n) {
			var r = Wt(e, t, n);
			return r > n ? n : r;
		}
		function Kt() {
			return {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			};
		}
		function qt(e) {
			return Object.assign({}, Kt(), e);
		}
		function Jt(e, t) {
			return t.reduce(function(t, n) {
				return t[n] = e, t;
			}, {});
		}
		var Yt = function(e, t) {
			return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, qt(typeof e == "number" ? Jt(e, rt) : e);
		};
		function Xt(e) {
			var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ot(n.placement), c = Ut(s), l = [tt, et].indexOf(s) >= 0 ? "height" : "width";
			if (!(!a || !o)) {
				var u = Yt(i.padding, n), d = Q(a), f = c === "y" ? Qe : tt, p = c === "y" ? $e : et, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Ht(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = Wt(y, x, b), C = c;
				n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
			}
		}
		function Zt(e) {
			var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
			r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ft(t.elements.popper, r) && (t.elements.arrow = r));
		}
		let Qt = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: Xt,
			effect: Zt,
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"]
		};
		function $t(e) {
			return e.split("-")[1];
		}
		var en = {
			top: "auto",
			right: "auto",
			bottom: "auto",
			left: "auto"
		};
		function tn(e, t) {
			var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
			return {
				x: jt(n * i) / i || 0,
				y: jt(r * i) / i || 0
			};
		}
		function nn(e) {
			var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
				x: p,
				y: h
			}) : {
				x: p,
				y: h
			};
			p = g.x, h = g.y;
			var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = tt, b = Qe, x = window;
			if (l) {
				var S = Ht(n), C = "clientHeight", w = "clientWidth";
				if (S === St(n) && (S = Rt(n), It(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === Qe || (i === tt || i === et) && a === at) {
					b = $e;
					var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
					h -= T - r.height, h *= c ? 1 : -1;
				}
				if (i === tt || (i === Qe || i === $e) && a === at) {
					y = et;
					var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
					p -= E - r.width, p *= c ? 1 : -1;
				}
			}
			var D = Object.assign({ position: s }, l && en), O = u === !0 ? tn({
				x: p,
				y: h
			}, St(n)) : {
				x: p,
				y: h
			};
			if (p = O.x, h = O.y, c) {
				var k;
				return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
			}
			return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
		}
		function rn(e) {
			var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, s = n.roundOffsets, c = s === void 0 ? !0 : s, l = {
				placement: Ot(t.placement),
				variation: $t(t.placement),
				popper: t.elements.popper,
				popperRect: t.rects.popper,
				gpuAcceleration: i,
				isFixed: t.options.strategy === "fixed"
			};
			t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, nn(Object.assign({}, l, {
				offsets: t.modifiersData.popperOffsets,
				position: t.options.strategy,
				adaptive: o,
				roundOffsets: c
			})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, nn(Object.assign({}, l, {
				offsets: t.modifiersData.arrow,
				position: "absolute",
				adaptive: !1,
				roundOffsets: c
			})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
		}
		let an = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: rn,
			data: {}
		};
		var on = { passive: !0 };
		function sn(e) {
			var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 ? !0 : i, o = r.resize, s = o === void 0 ? !0 : o, c = St(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
			return a && l.forEach(function(e) {
				e.addEventListener("scroll", n.update, on);
			}), s && c.addEventListener("resize", n.update, on), function() {
				a && l.forEach(function(e) {
					e.removeEventListener("scroll", n.update, on);
				}), s && c.removeEventListener("resize", n.update, on);
			};
		}
		let cn = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: sn,
			data: {}
		};
		var ln = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};
		function un(e) {
			return e.replace(/left|right|bottom|top/g, function(e) {
				return ln[e];
			});
		}
		var dn = {
			start: "end",
			end: "start"
		};
		function fn(e) {
			return e.replace(/start|end/g, function(e) {
				return dn[e];
			});
		}
		function pn(e) {
			var t = St(e);
			return {
				scrollLeft: t.pageXOffset,
				scrollTop: t.pageYOffset
			};
		}
		function mn(e) {
			return Pt(Rt(e)).left + pn(e).scrollLeft;
		}
		function hn(e, t) {
			var n = St(e), r = Rt(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
			if (i) {
				a = i.width, o = i.height;
				var l = Nt();
				(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
			}
			return {
				width: a,
				height: o,
				x: s + mn(e),
				y: c
			};
		}
		function gn(e) {
			var t = Rt(e), n = pn(e), r = e.ownerDocument?.body, i = kt(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = kt(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + mn(e), s = -n.scrollTop;
			return It(r || t).direction === "rtl" && (o += kt(t.clientWidth, r ? r.clientWidth : 0) - i), {
				width: i,
				height: a,
				x: o,
				y: s
			};
		}
		function $(e) {
			var t = It(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
			return /auto|scroll|overlay|hidden/.test(n + i + r);
		}
		function _n(e) {
			return [
				"html",
				"body",
				"#document"
			].indexOf(xt(e)) >= 0 ? e.ownerDocument.body : Z(e) && $(e) ? e : _n(zt(e));
		}
		function vn(e, t) {
			t === void 0 && (t = []);
			var n = _n(e), r = n === e.ownerDocument?.body, i = St(n), a = r ? [i].concat(i.visualViewport || [], $(n) ? n : []) : n, o = t.concat(a);
			return r ? o : o.concat(vn(zt(a)));
		}
		function yn(e) {
			return Object.assign({}, e, {
				left: e.x,
				top: e.y,
				right: e.x + e.width,
				bottom: e.y + e.height
			});
		}
		function bn(e, t) {
			var n = Pt(e, !1, t === "fixed");
			return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
		}
		function xn(e, t, n) {
			return t === st ? yn(hn(e, n)) : Ct(t) ? bn(t, n) : yn(gn(Rt(e)));
		}
		function Sn(e) {
			var t = vn(zt(e)), n = ["absolute", "fixed"].indexOf(It(e).position) >= 0 && Z(e) ? Ht(e) : e;
			return Ct(n) ? t.filter(function(e) {
				return Ct(e) && Ft(e, n) && xt(e) !== "body";
			}) : [];
		}
		function Cn(e, t, n, r) {
			var i = t === "clippingParents" ? Sn(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
				var i = xn(e, n, r);
				return t.top = kt(i.top, t.top), t.right = At(i.right, t.right), t.bottom = At(i.bottom, t.bottom), t.left = kt(i.left, t.left), t;
			}, xn(e, o, r));
			return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
		}
		function wn(e) {
			var t = e.reference, n = e.element, r = e.placement, i = r ? Ot(r) : null, a = r ? $t(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
			switch (i) {
				case Qe:
					c = {
						x: o,
						y: t.y - n.height
					};
					break;
				case $e:
					c = {
						x: o,
						y: t.y + t.height
					};
					break;
				case et:
					c = {
						x: t.x + t.width,
						y: s
					};
					break;
				case tt:
					c = {
						x: t.x - n.width,
						y: s
					};
					break;
				default: c = {
					x: t.x,
					y: t.y
				};
			}
			var l = i ? Ut(i) : null;
			if (l != null) {
				var u = l === "y" ? "height" : "width";
				switch (a) {
					case it:
						c[l] = c[l] - (t[u] / 2 - n[u] / 2);
						break;
					case at:
						c[l] = c[l] + (t[u] / 2 - n[u] / 2);
						break;
				}
			}
			return c;
		}
		function Tn(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? ot : s, l = n.rootBoundary, u = l === void 0 ? st : l, d = n.elementContext, f = d === void 0 ? ct : d, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, g = h === void 0 ? 0 : h, _ = qt(typeof g == "number" ? Jt(g, rt) : g), v = f === ct ? lt : ct, y = e.rects.popper, b = e.elements[m ? v : f], x = Cn(Ct(b) ? b : b.contextElement || Rt(e.elements.popper), c, u, o), S = Pt(e.elements.reference), C = wn({
				reference: S,
				element: y,
				strategy: "absolute",
				placement: i
			}), w = yn(Object.assign({}, y, C)), T = f === ct ? w : S, E = {
				top: x.top - T.top + _.top,
				bottom: T.bottom - x.bottom + _.bottom,
				left: x.left - T.left + _.left,
				right: T.right - x.right + _.right
			}, D = e.modifiersData.offset;
			if (f === ct && D) {
				var O = D[i];
				Object.keys(E).forEach(function(e) {
					var t = [et, $e].indexOf(e) >= 0 ? 1 : -1, n = [Qe, $e].indexOf(e) >= 0 ? "y" : "x";
					E[e] += O[n] * t;
				});
			}
			return E;
		}
		function En(e, t) {
			t === void 0 && (t = {});
			var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? X : c, u = $t(r), d = u ? s ? ut : ut.filter(function(e) {
				return $t(e) === u;
			}) : rt, f = d.filter(function(e) {
				return l.indexOf(e) >= 0;
			});
			f.length === 0 && (f = d);
			var p = f.reduce(function(t, n) {
				return t[n] = Tn(e, {
					placement: n,
					boundary: i,
					rootBoundary: a,
					padding: o
				})[Ot(n)], t;
			}, {});
			return Object.keys(p).sort(function(e, t) {
				return p[e] - p[t];
			});
		}
		function Dn(e) {
			if (Ot(e) === nt) return [];
			var t = un(e);
			return [
				fn(e),
				t,
				fn(t)
			];
		}
		function On(e) {
			var t = e.state, n = e.options, r = e.name;
			if (!t.modifiersData[r]._skip) {
				for (var i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !0 : o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Ot(g) === g, v = c || (_ || !m ? [un(g)] : Dn(g)), y = [g].concat(v).reduce(function(e, n) {
					return e.concat(Ot(n) === nt ? En(t, {
						placement: n,
						boundary: u,
						rootBoundary: d,
						padding: l,
						flipVariations: m,
						allowedAutoPlacements: h
					}) : n);
				}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
					var E = y[T], D = Ot(E), O = $t(E) === it, k = [Qe, $e].indexOf(D) >= 0, A = k ? "width" : "height", j = Tn(t, {
						placement: E,
						boundary: u,
						rootBoundary: d,
						altBoundary: f,
						padding: l
					}), M = k ? O ? et : tt : O ? $e : Qe;
					b[A] > x[A] && (M = un(M));
					var N = un(M), P = [];
					if (a && P.push(j[D] <= 0), s && P.push(j[M] <= 0, j[N] <= 0), P.every(function(e) {
						return e;
					})) {
						w = E, C = !1;
						break;
					}
					S.set(E, P);
				}
				if (C) for (var F = m ? 3 : 1, I = function(e) {
					var t = y.find(function(t) {
						var n = S.get(t);
						if (n) return n.slice(0, e).every(function(e) {
							return e;
						});
					});
					if (t) return w = t, "break";
				}, L = F; L > 0 && I(L) !== "break"; L--);
				t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
			}
		}
		let kn = {
			name: "flip",
			enabled: !0,
			phase: "main",
			fn: On,
			requiresIfExists: ["offset"],
			data: { _skip: !1 }
		};
		function An(e, t, n) {
			return n === void 0 && (n = {
				x: 0,
				y: 0
			}), {
				top: e.top - t.height - n.y,
				right: e.right - t.width + n.x,
				bottom: e.bottom - t.height + n.y,
				left: e.left - t.width - n.x
			};
		}
		function jn(e) {
			return [
				Qe,
				et,
				$e,
				tt
			].some(function(t) {
				return e[t] >= 0;
			});
		}
		function Mn(e) {
			var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Tn(t, { elementContext: "reference" }), s = Tn(t, { altBoundary: !0 }), c = An(o, r), l = An(s, i, a), u = jn(c), d = jn(l);
			t.modifiersData[n] = {
				referenceClippingOffsets: c,
				popperEscapeOffsets: l,
				isReferenceHidden: u,
				hasPopperEscaped: d
			}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
				"data-popper-reference-hidden": u,
				"data-popper-escaped": d
			});
		}
		let Nn = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: Mn
		};
		function Pn(e, t, n) {
			var r = Ot(e), i = [tt, Qe].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
			return o ||= 0, s = (s || 0) * i, [tt, et].indexOf(r) >= 0 ? {
				x: s,
				y: o
			} : {
				x: o,
				y: s
			};
		}
		function Fn(e) {
			var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = X.reduce(function(e, n) {
				return e[n] = Pn(n, t.rects, a), e;
			}, {}), s = o[t.placement], c = s.x, l = s.y;
			t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
		}
		let In = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: Fn
		};
		function Ln(e) {
			var t = e.state, n = e.name;
			t.modifiersData[n] = wn({
				reference: t.rects.reference,
				element: t.rects.popper,
				strategy: "absolute",
				placement: t.placement
			});
		}
		let Rn = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: Ln,
			data: {}
		};
		function zn(e) {
			return e === "x" ? "y" : "x";
		}
		function Bn(e) {
			var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 ? !0 : i, o = n.altAxis, s = o === void 0 ? !1 : o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Tn(t, {
				boundary: c,
				rootBoundary: l,
				padding: d,
				altBoundary: u
			}), _ = Ot(t.placement), v = $t(t.placement), y = !v, b = Ut(_), x = zn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
				mainAxis: T,
				altAxis: T
			} : Object.assign({
				mainAxis: 0,
				altAxis: 0
			}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
				x: 0,
				y: 0
			};
			if (S) {
				if (a) {
					var k = b === "y" ? Qe : tt, A = b === "y" ? $e : et, j = b === "y" ? "height" : "width", M = S[b], N = M + g[k], P = M - g[A], F = p ? -w[j] / 2 : 0, I = v === it ? C[j] : w[j], L = v === it ? -w[j] : -C[j], ee = t.elements.arrow, R = p && ee ? Q(ee) : {
						width: 0,
						height: 0
					}, z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Kt(), B = z[k], te = z[A], V = Wt(0, C[j], R[j]), H = y ? C[j] / 2 - F - V - B - E.mainAxis : I - V - B - E.mainAxis, U = y ? -C[j] / 2 + F + V + te + E.mainAxis : L + V + te + E.mainAxis, ne = t.elements.arrow && Ht(t.elements.arrow), re = ne ? b === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, W = D?.[b] ?? 0, ie = M + H - W - re, ae = M + U - W, oe = Wt(p ? At(N, ie) : N, M, p ? kt(P, ae) : P);
					S[b] = oe, O[b] = oe - M;
				}
				if (s) {
					var se = b === "x" ? Qe : tt, G = b === "x" ? $e : et, ce = S[x], le = x === "y" ? "height" : "width", ue = ce + g[se], K = ce - g[G], de = [Qe, tt].indexOf(_) !== -1, fe = D?.[x] ?? 0, pe = de ? ue : ce - C[le] - w[le] - fe + E.altAxis, me = de ? ce + C[le] + w[le] - fe - E.altAxis : K, he = p && de ? Gt(pe, ce, me) : Wt(p ? pe : ue, ce, p ? me : K);
					S[x] = he, O[x] = he - ce;
				}
				t.modifiersData[r] = O;
			}
		}
		let Vn = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: Bn,
			requiresIfExists: ["offset"]
		};
		function Hn(e) {
			return {
				scrollLeft: e.scrollLeft,
				scrollTop: e.scrollTop
			};
		}
		function Un(e) {
			return e === St(e) || !Z(e) ? pn(e) : Hn(e);
		}
		function Wn(e) {
			var t = e.getBoundingClientRect(), n = jt(t.width) / e.offsetWidth || 1, r = jt(t.height) / e.offsetHeight || 1;
			return n !== 1 || r !== 1;
		}
		function Gn(e, t, n) {
			n === void 0 && (n = !1);
			var r = Z(t), i = Z(t) && Wn(t), a = Rt(t), o = Pt(e, i, n), s = {
				scrollLeft: 0,
				scrollTop: 0
			}, c = {
				x: 0,
				y: 0
			};
			return (r || !r && !n) && ((xt(t) !== "body" || $(a)) && (s = Un(t)), Z(t) ? (c = Pt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = mn(a))), {
				x: o.left + s.scrollLeft - c.x,
				y: o.top + s.scrollTop - c.y,
				width: o.width,
				height: o.height
			};
		}
		function Kn(e) {
			var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
			e.forEach(function(e) {
				t.set(e.name, e);
			});
			function i(e) {
				n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
					if (!n.has(e)) {
						var r = t.get(e);
						r && i(r);
					}
				}), r.push(e);
			}
			return e.forEach(function(e) {
				n.has(e.name) || i(e);
			}), r;
		}
		function qn(e) {
			var t = Kn(e);
			return bt.reduce(function(e, n) {
				return e.concat(t.filter(function(e) {
					return e.phase === n;
				}));
			}, []);
		}
		function Jn(e) {
			var t;
			return function() {
				return t ||= new Promise(function(n) {
					Promise.resolve().then(function() {
						t = void 0, n(e());
					});
				}), t;
			};
		}
		function Yn(e) {
			var t = e.reduce(function(e, t) {
				var n = e[t.name];
				return e[t.name] = n ? Object.assign({}, n, t, {
					options: Object.assign({}, n.options, t.options),
					data: Object.assign({}, n.data, t.data)
				}) : t, e;
			}, {});
			return Object.keys(t).map(function(e) {
				return t[e];
			});
		}
		var Xn = {
			placement: "bottom",
			modifiers: [],
			strategy: "absolute"
		};
		function Zn() {
			return ![...arguments].some(function(e) {
				return !(e && typeof e.getBoundingClientRect == "function");
			});
		}
		function Qn(e) {
			e === void 0 && (e = {});
			var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? Xn : i;
			return function(e, t, n) {
				n === void 0 && (n = a);
				var i = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, Xn, a),
					modifiersData: {},
					elements: {
						reference: e,
						popper: t
					},
					attributes: {},
					styles: {}
				}, o = [], s = !1, c = {
					state: i,
					setOptions: function(n) {
						var o = typeof n == "function" ? n(i.options) : n;
						u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
							reference: Ct(e) ? vn(e) : e.contextElement ? vn(e.contextElement) : [],
							popper: vn(t)
						};
						var s = qn(Yn([].concat(r, i.options.modifiers)));
						return i.orderedModifiers = s.filter(function(e) {
							return e.enabled;
						}), l(), c.update();
					},
					forceUpdate: function() {
						if (!s) {
							var e = i.elements, t = e.reference, n = e.popper;
							if (Zn(t, n)) {
								i.rects = {
									reference: Gn(t, Ht(n), i.options.strategy === "fixed"),
									popper: Q(n)
								}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
									return i.modifiersData[e.name] = Object.assign({}, e.data);
								});
								for (var r = 0; r < i.orderedModifiers.length; r++) {
									if (i.reset === !0) {
										i.reset = !1, r = -1;
										continue;
									}
									var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
									typeof o == "function" && (i = o({
										state: i,
										options: u,
										name: d,
										instance: c
									}) || i);
								}
							}
						}
					},
					update: Jn(function() {
						return new Promise(function(e) {
							c.forceUpdate(), e(i);
						});
					}),
					destroy: function() {
						u(), s = !0;
					}
				};
				if (!Zn(e, t)) return c;
				c.setOptions(n).then(function(e) {
					!s && n.onFirstUpdate && n.onFirstUpdate(e);
				});
				function l() {
					i.orderedModifiers.forEach(function(e) {
						var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
						if (typeof a == "function") {
							var s = a({
								state: i,
								name: t,
								instance: c,
								options: r
							});
							o.push(s || function() {});
						}
					});
				}
				function u() {
					o.forEach(function(e) {
						return e();
					}), o = [];
				}
				return c;
			};
		}
		var $n = /* @__PURE__ */ Qn(), er = /* @__PURE__ */ Qn({ defaultModifiers: [
			cn,
			Rn,
			an,
			Dt
		] }), tr = /* @__PURE__ */ Qn({ defaultModifiers: [
			cn,
			Rn,
			an,
			Dt,
			In,
			kn,
			Vn,
			Qt,
			Nn
		] });
		let nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
			__proto__: null,
			afterMain: gt,
			afterRead: pt,
			afterWrite: yt,
			applyStyles: Dt,
			arrow: Qt,
			auto: nt,
			basePlacements: rt,
			beforeMain: mt,
			beforeRead: dt,
			beforeWrite: _t,
			bottom: $e,
			clippingParents: ot,
			computeStyles: an,
			createPopper: tr,
			createPopperBase: $n,
			createPopperLite: er,
			detectOverflow: Tn,
			end: at,
			eventListeners: cn,
			flip: kn,
			hide: Nn,
			left: tt,
			main: ht,
			modifierPhases: bt,
			offset: In,
			placements: X,
			popper: ct,
			popperGenerator: Qn,
			popperOffsets: Rn,
			preventOverflow: Vn,
			read: ft,
			reference: lt,
			right: et,
			start: it,
			top: Qe,
			variationPlacements: ut,
			viewport: st,
			write: vt
		}, Symbol.toStringTag, { value: "Module" })), rr = ".bs.dropdown", ir = ".data-api", ar = "ArrowDown", or = `hide${rr}`, sr = `hidden${rr}`, cr = `show${rr}`, lr = `shown${rr}`, ur = `click${rr}${ir}`, dr = `keydown${rr}${ir}`, fr = `keyup${rr}${ir}`, pr = "show", mr = "[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)", hr = `${mr}.${pr}`, gr = ".dropdown-menu", _r = v() ? "top-end" : "top-start", vr = v() ? "top-start" : "top-end", yr = v() ? "bottom-end" : "bottom-start", br = v() ? "bottom-start" : "bottom-end", xr = v() ? "left-start" : "right-start", Sr = v() ? "right-start" : "left-start", Cr = {
			autoClose: !0,
			boundary: "clippingParents",
			display: "dynamic",
			offset: [0, 2],
			popperConfig: null,
			reference: "toggle"
		}, wr = {
			autoClose: "(boolean|string)",
			boundary: "(string|element)",
			display: "string",
			offset: "(array|string|function)",
			popperConfig: "(null|object|function)",
			reference: "(string|element|object)"
		};
		class Tr extends ne {
			constructor(e, t) {
				super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = W.next(this._element, gr)[0] || W.prev(this._element, gr)[0] || W.findOne(gr, this._parent), this._inNavbar = this._detectNavbar();
			}
			static get Default() {
				return Cr;
			}
			static get DefaultType() {
				return wr;
			}
			static get NAME() {
				return "dropdown";
			}
			toggle() {
				return this._isShown() ? this.hide() : this.show();
			}
			show() {
				if (d(this._element) || this._isShown()) return;
				let e = { relatedTarget: this._element };
				if (!z.trigger(this._element, cr, e).defaultPrevented) {
					if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (let e of [].concat(...document.body.children)) z.on(e, "mouseover", p);
					this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(pr), this._element.classList.add(pr), z.trigger(this._element, lr, e);
				}
			}
			hide() {
				if (d(this._element) || !this._isShown()) return;
				let e = { relatedTarget: this._element };
				this._completeHide(e);
			}
			dispose() {
				this._popper && this._popper.destroy(), super.dispose();
			}
			update() {
				this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
			}
			_completeHide(e) {
				if (!z.trigger(this._element, or, e).defaultPrevented) {
					if ("ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) z.off(e, "mouseover", p);
					this._popper && this._popper.destroy(), this._menu.classList.remove(pr), this._element.classList.remove(pr), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), z.trigger(this._element, sr, e);
				}
			}
			_getConfig(e) {
				if (e = super._getConfig(e), typeof e.reference == "object" && !c(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw TypeError("DROPDOWN: Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.");
				return e;
			}
			_createPopper() {
				if (nr === void 0) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
				let e = this._element;
				this._config.reference === "parent" ? e = this._parent : c(this._config.reference) ? e = l(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
				let t = this._getPopperConfig();
				this._popper = tr(e, this._menu, t);
			}
			_isShown() {
				return this._menu.classList.contains(pr);
			}
			_getPlacement() {
				let e = this._parent;
				if (e.classList.contains("dropend")) return xr;
				if (e.classList.contains("dropstart")) return Sr;
				if (e.classList.contains("dropup-center")) return "top";
				if (e.classList.contains("dropdown-center")) return "bottom";
				let t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
				return e.classList.contains("dropup") ? t ? vr : _r : t ? br : yr;
			}
			_detectNavbar() {
				return this._element.closest(".navbar") !== null;
			}
			_getOffset() {
				let { offset: e } = this._config;
				return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
			}
			_getPopperConfig() {
				let e = {
					placement: this._getPlacement(),
					modifiers: [{
						name: "preventOverflow",
						options: { boundary: this._config.boundary }
					}, {
						name: "offset",
						options: { offset: this._getOffset() }
					}]
				};
				return (this._inNavbar || this._config.display === "static") && (H.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
					name: "applyStyles",
					enabled: !1
				}]), {
					...e,
					...b(this._config.popperConfig, [e])
				};
			}
			_selectMenuItem({ key: e, target: t }) {
				let n = W.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e) => u(e));
				n.length && S(n, t, e === ar, !n.includes(t)).focus();
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = Tr.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0) throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
			static clearMenus(e) {
				if (e.button === 2 || e.type === "keyup" && e.key !== "Tab") return;
				let t = W.find(hr);
				for (let n of t) {
					let t = Tr.getInstance(n);
					if (!t || t._config.autoClose === !1) continue;
					let r = e.composedPath(), i = r.includes(t._menu);
					if (r.includes(t._element) || t._config.autoClose === "inside" && !i || t._config.autoClose === "outside" && i || t._menu.contains(e.target) && (e.type === "keyup" && e.key === "Tab" || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
					let a = { relatedTarget: t._element };
					e.type === "click" && (a.clickEvent = e), t._completeHide(a);
				}
			}
			static dataApiKeydownHandler(e) {
				let t = /input|textarea/i.test(e.target.tagName), n = e.key === "Escape", r = ["ArrowUp", ar].includes(e.key);
				if (!r && !n || t && !n) return;
				e.preventDefault();
				let i = this.matches(mr) ? this : W.prev(this, mr)[0] || W.next(this, mr)[0] || W.findOne(mr, e.delegateTarget.parentNode), a = Tr.getOrCreateInstance(i);
				if (r) {
					e.stopPropagation(), a.show(), a._selectMenuItem(e);
					return;
				}
				a._isShown() && (e.stopPropagation(), a.hide(), i.focus());
			}
		}
		z.on(document, dr, mr, Tr.dataApiKeydownHandler), z.on(document, dr, gr, Tr.dataApiKeydownHandler), z.on(document, ur, Tr.clearMenus), z.on(document, fr, Tr.clearMenus), z.on(document, ur, mr, function(e) {
			e.preventDefault(), Tr.getOrCreateInstance(this).toggle();
		}), y(Tr);
		let Er = "backdrop", Dr = "show", Or = `mousedown.bs.${Er}`, kr = {
			className: "modal-backdrop",
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: "body"
		}, Ar = {
			className: "string",
			clickCallback: "(function|null)",
			isAnimated: "boolean",
			isVisible: "boolean",
			rootElement: "(element|string)"
		};
		class jr extends U {
			constructor(e) {
				super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
			}
			static get Default() {
				return kr;
			}
			static get DefaultType() {
				return Ar;
			}
			static get NAME() {
				return Er;
			}
			show(e) {
				if (!this._config.isVisible) {
					b(e);
					return;
				}
				this._append();
				let t = this._getElement();
				this._config.isAnimated && m(t), t.classList.add(Dr), this._emulateAnimation(() => {
					b(e);
				});
			}
			hide(e) {
				if (!this._config.isVisible) {
					b(e);
					return;
				}
				this._getElement().classList.remove(Dr), this._emulateAnimation(() => {
					this.dispose(), b(e);
				});
			}
			dispose() {
				this._isAppended &&= (z.off(this._element, Or), this._element.remove(), !1);
			}
			_getElement() {
				if (!this._element) {
					let e = document.createElement("div");
					e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
				}
				return this._element;
			}
			_configAfterMerge(e) {
				return e.rootElement = l(e.rootElement), e;
			}
			_append() {
				if (this._isAppended) return;
				let e = this._getElement();
				this._config.rootElement.append(e), z.on(e, Or, () => {
					b(this._config.clickCallback);
				}), this._isAppended = !0;
			}
			_emulateAnimation(e) {
				x(e, this._getElement(), this._config.isAnimated);
			}
		}
		let Mr = ".bs.focustrap", Nr = `focusin${Mr}`, Pr = `keydown.tab${Mr}`, Fr = "backward", Ir = {
			autofocus: !0,
			trapElement: null
		}, Lr = {
			autofocus: "boolean",
			trapElement: "element"
		};
		class Rr extends U {
			constructor(e) {
				super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
			}
			static get Default() {
				return Ir;
			}
			static get DefaultType() {
				return Lr;
			}
			static get NAME() {
				return "focustrap";
			}
			activate() {
				this._isActive ||= (this._config.autofocus && this._config.trapElement.focus(), z.off(document, Mr), z.on(document, Nr, (e) => this._handleFocusin(e)), z.on(document, Pr, (e) => this._handleKeydown(e)), !0);
			}
			deactivate() {
				this._isActive && (this._isActive = !1, z.off(document, Mr));
			}
			_handleFocusin(e) {
				let { trapElement: t } = this._config;
				if (e.target === document || e.target === t || t.contains(e.target)) return;
				let n = W.focusableChildren(t);
				n.length === 0 ? t.focus() : this._lastTabNavDirection === Fr ? n[n.length - 1].focus() : n[0].focus();
			}
			_handleKeydown(e) {
				e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? Fr : "forward");
			}
		}
		let zr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Br = ".sticky-top", Vr = "padding-right", Hr = "margin-right";
		class Ur {
			constructor() {
				this._element = document.body;
			}
			getWidth() {
				let e = document.documentElement.clientWidth;
				return Math.abs(window.innerWidth - e);
			}
			hide() {
				let e = this.getWidth();
				this._disableOverFlow(), this._setElementAttributes(this._element, Vr, (t) => t + e), this._setElementAttributes(zr, Vr, (t) => t + e), this._setElementAttributes(Br, Hr, (t) => t - e);
			}
			reset() {
				this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Vr), this._resetElementAttributes(zr, Vr), this._resetElementAttributes(Br, Hr);
			}
			isOverflowing() {
				return this.getWidth() > 0;
			}
			_disableOverFlow() {
				this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
			}
			_setElementAttributes(e, t, n) {
				let r = this.getWidth();
				this._applyManipulationCallback(e, (e) => {
					if (e !== this._element && window.innerWidth > e.clientWidth + r) return;
					this._saveInitialAttribute(e, t);
					let i = window.getComputedStyle(e).getPropertyValue(t);
					e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
				});
			}
			_saveInitialAttribute(e, t) {
				let n = e.style.getPropertyValue(t);
				n && H.setDataAttribute(e, t, n);
			}
			_resetElementAttributes(e, t) {
				this._applyManipulationCallback(e, (e) => {
					let n = H.getDataAttribute(e, t);
					if (n === null) {
						e.style.removeProperty(t);
						return;
					}
					H.removeDataAttribute(e, t), e.style.setProperty(t, n);
				});
			}
			_applyManipulationCallback(e, t) {
				if (c(e)) {
					t(e);
					return;
				}
				for (let n of W.find(e, this._element)) t(n);
			}
		}
		let Wr = ".bs.modal", Gr = `hide${Wr}`, Kr = `hidePrevented${Wr}`, qr = `hidden${Wr}`, Jr = `show${Wr}`, Yr = `shown${Wr}`, Xr = `resize${Wr}`, Zr = `click.dismiss${Wr}`, Qr = `mousedown.dismiss${Wr}`, $r = `keydown.dismiss${Wr}`, ei = `click${Wr}.data-api`, ti = "modal-open", ni = "show", ri = "modal-static", ii = {
			backdrop: !0,
			focus: !0,
			keyboard: !0
		}, ai = {
			backdrop: "(boolean|string)",
			focus: "boolean",
			keyboard: "boolean"
		};
		class oi extends ne {
			constructor(e, t) {
				super(e, t), this._dialog = W.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ur(), this._addEventListeners();
			}
			static get Default() {
				return ii;
			}
			static get DefaultType() {
				return ai;
			}
			static get NAME() {
				return "modal";
			}
			toggle(e) {
				return this._isShown ? this.hide() : this.show(e);
			}
			show(e) {
				this._isShown || this._isTransitioning || z.trigger(this._element, Jr, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ti), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
			}
			hide() {
				!this._isShown || this._isTransitioning || z.trigger(this._element, Gr).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ni), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
			}
			dispose() {
				z.off(window, Wr), z.off(this._dialog, Wr), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
			}
			handleUpdate() {
				this._adjustDialog();
			}
			_initializeBackDrop() {
				return new jr({
					isVisible: !!this._config.backdrop,
					isAnimated: this._isAnimated()
				});
			}
			_initializeFocusTrap() {
				return new Rr({ trapElement: this._element });
			}
			_showElement(e) {
				document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
				let t = W.findOne(".modal-body", this._dialog);
				t && (t.scrollTop = 0), m(this._element), this._element.classList.add(ni), this._queueCallback(() => {
					this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, z.trigger(this._element, Yr, { relatedTarget: e });
				}, this._dialog, this._isAnimated());
			}
			_addEventListeners() {
				z.on(this._element, $r, (e) => {
					if (e.key === "Escape") {
						if (this._config.keyboard) {
							this.hide();
							return;
						}
						this._triggerBackdropTransition();
					}
				}), z.on(window, Xr, () => {
					this._isShown && !this._isTransitioning && this._adjustDialog();
				}), z.on(this._element, Qr, (e) => {
					z.one(this._element, Zr, (t) => {
						if (!(this._element !== e.target || this._element !== t.target)) {
							if (this._config.backdrop === "static") {
								this._triggerBackdropTransition();
								return;
							}
							this._config.backdrop && this.hide();
						}
					});
				});
			}
			_hideModal() {
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
					document.body.classList.remove(ti), this._resetAdjustments(), this._scrollBar.reset(), z.trigger(this._element, qr);
				});
			}
			_isAnimated() {
				return this._element.classList.contains("fade");
			}
			_triggerBackdropTransition() {
				if (z.trigger(this._element, Kr).defaultPrevented) return;
				let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
				t === "hidden" || this._element.classList.contains(ri) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(ri), this._queueCallback(() => {
					this._element.classList.remove(ri), this._queueCallback(() => {
						this._element.style.overflowY = t;
					}, this._dialog);
				}, this._dialog), this._element.focus());
			}
			_adjustDialog() {
				let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
				if (n && !e) {
					let e = v() ? "paddingLeft" : "paddingRight";
					this._element.style[e] = `${t}px`;
				}
				if (!n && e) {
					let e = v() ? "paddingRight" : "paddingLeft";
					this._element.style[e] = `${t}px`;
				}
			}
			_resetAdjustments() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
			}
			static jQueryInterface(e, t) {
				return this.each(function() {
					let n = oi.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (n[e] === void 0) throw TypeError(`No method named "${e}"`);
						n[e](t);
					}
				});
			}
		}
		z.on(document, ei, "[data-bs-toggle=\"modal\"]", function(e) {
			let t = W.getElementFromSelector(this);
			["A", "AREA"].includes(this.tagName) && e.preventDefault(), z.one(t, Jr, (e) => {
				e.defaultPrevented || z.one(t, qr, () => {
					u(this) && this.focus();
				});
			});
			let n = W.findOne(".modal.show");
			n && oi.getInstance(n).hide(), oi.getOrCreateInstance(t).toggle(this);
		}), ie(oi), y(oi);
		let si = ".bs.offcanvas", ci = ".data-api", li = `load${si}${ci}`, ui = "show", di = "showing", fi = "hiding", pi = ".offcanvas.show", mi = `show${si}`, hi = `shown${si}`, gi = `hide${si}`, _i = `hidePrevented${si}`, vi = `hidden${si}`, yi = `resize${si}`, bi = `click${si}${ci}`, xi = `keydown.dismiss${si}`, Si = {
			backdrop: !0,
			keyboard: !0,
			scroll: !1
		}, Ci = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			scroll: "boolean"
		};
		class wi extends ne {
			constructor(e, t) {
				super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
			}
			static get Default() {
				return Si;
			}
			static get DefaultType() {
				return Ci;
			}
			static get NAME() {
				return "offcanvas";
			}
			toggle(e) {
				return this._isShown ? this.hide() : this.show(e);
			}
			show(e) {
				this._isShown || z.trigger(this._element, mi, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ur().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(di), this._queueCallback(() => {
					(!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ui), this._element.classList.remove(di), z.trigger(this._element, hi, { relatedTarget: e });
				}, this._element, !0));
			}
			hide() {
				!this._isShown || z.trigger(this._element, gi).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(fi), this._backdrop.hide(), this._queueCallback(() => {
					this._element.classList.remove(ui, fi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ur().reset(), z.trigger(this._element, vi);
				}, this._element, !0));
			}
			dispose() {
				this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
			}
			_initializeBackDrop() {
				let e = () => {
					if (this._config.backdrop === "static") {
						z.trigger(this._element, _i);
						return;
					}
					this.hide();
				}, t = !!this._config.backdrop;
				return new jr({
					className: "offcanvas-backdrop",
					isVisible: t,
					isAnimated: !0,
					rootElement: this._element.parentNode,
					clickCallback: t ? e : null
				});
			}
			_initializeFocusTrap() {
				return new Rr({ trapElement: this._element });
			}
			_addEventListeners() {
				z.on(this._element, xi, (e) => {
					if (e.key === "Escape") {
						if (this._config.keyboard) {
							this.hide();
							return;
						}
						z.trigger(this._element, _i);
					}
				});
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = wi.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw TypeError(`No method named "${e}"`);
						t[e](this);
					}
				});
			}
		}
		z.on(document, bi, "[data-bs-toggle=\"offcanvas\"]", function(e) {
			let t = W.getElementFromSelector(this);
			if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), d(this)) return;
			z.one(t, vi, () => {
				u(this) && this.focus();
			});
			let n = W.findOne(pi);
			n && n !== t && wi.getInstance(n).hide(), wi.getOrCreateInstance(t).toggle(this);
		}), z.on(window, li, () => {
			for (let e of W.find(pi)) wi.getOrCreateInstance(e).show();
		}), z.on(window, yi, () => {
			for (let e of W.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && wi.getOrCreateInstance(e).hide();
		}), ie(wi), y(wi);
		let Ti = {
			"*": [
				"class",
				"dir",
				"id",
				"lang",
				"role",
				/^aria-[\w-]*$/i
			],
			a: [
				"target",
				"href",
				"title",
				"rel"
			],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: [
				"src",
				"srcset",
				"alt",
				"title",
				"width",
				"height"
			],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		}, Ei = new Set([
			"background",
			"cite",
			"href",
			"itemtype",
			"longdesc",
			"poster",
			"src",
			"xlink:href"
		]), Di = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Oi = (e, t) => {
			let n = e.nodeName.toLowerCase();
			return t.includes(n) ? Ei.has(n) ? !!Di.test(e.nodeValue) : !0 : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
		};
		function ki(e, t, n) {
			if (!e.length) return e;
			if (n && typeof n == "function") return n(e);
			let r = new window.DOMParser().parseFromString(e, "text/html"), i = [].concat(...r.body.querySelectorAll("*"));
			for (let e of i) {
				let n = e.nodeName.toLowerCase();
				if (!Object.keys(t).includes(n)) {
					e.remove();
					continue;
				}
				let r = [].concat(...e.attributes), i = [].concat(t["*"] || [], t[n] || []);
				for (let t of r) Oi(t, i) || e.removeAttribute(t.nodeName);
			}
			return r.body.innerHTML;
		}
		let Ai = {
			allowList: Ti,
			content: {},
			extraClass: "",
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: "<div></div>"
		}, ji = {
			allowList: "object",
			content: "object",
			extraClass: "(string|function)",
			html: "boolean",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			template: "string"
		}, Mi = {
			entry: "(string|element|function|null)",
			selector: "(string|element)"
		};
		class Ni extends U {
			constructor(e) {
				super(), this._config = this._getConfig(e);
			}
			static get Default() {
				return Ai;
			}
			static get DefaultType() {
				return ji;
			}
			static get NAME() {
				return "TemplateFactory";
			}
			getContent() {
				return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
			}
			hasContent() {
				return this.getContent().length > 0;
			}
			changeContent(e) {
				return this._checkContent(e), this._config.content = {
					...this._config.content,
					...e
				}, this;
			}
			toHtml() {
				let e = document.createElement("div");
				e.innerHTML = this._maybeSanitize(this._config.template);
				for (let [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
				let t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
				return n && t.classList.add(...n.split(" ")), t;
			}
			_typeCheckConfig(e) {
				super._typeCheckConfig(e), this._checkContent(e.content);
			}
			_checkContent(e) {
				for (let [t, n] of Object.entries(e)) super._typeCheckConfig({
					selector: t,
					entry: n
				}, Mi);
			}
			_setContent(e, t, n) {
				let r = W.findOne(n, e);
				if (r) {
					if (t = this._resolvePossibleFunction(t), !t) {
						r.remove();
						return;
					}
					if (c(t)) {
						this._putElementInTemplate(l(t), r);
						return;
					}
					if (this._config.html) {
						r.innerHTML = this._maybeSanitize(t);
						return;
					}
					r.textContent = t;
				}
			}
			_maybeSanitize(e) {
				return this._config.sanitize ? ki(e, this._config.allowList, this._config.sanitizeFn) : e;
			}
			_resolvePossibleFunction(e) {
				return b(e, [this]);
			}
			_putElementInTemplate(e, t) {
				if (this._config.html) {
					t.innerHTML = "", t.append(e);
					return;
				}
				t.textContent = e.textContent;
			}
		}
		let Pi = new Set([
			"sanitize",
			"allowList",
			"sanitizeFn"
		]), Fi = "fade", Ii = "show", Li = ".modal", Ri = "hide.bs.modal", zi = "hover", Bi = "focus", Vi = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: v() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: v() ? "right" : "left"
		}, Hi = {
			allowList: Ti,
			animation: !0,
			boundary: "clippingParents",
			container: !1,
			customClass: "",
			delay: 0,
			fallbackPlacements: [
				"top",
				"right",
				"bottom",
				"left"
			],
			html: !1,
			offset: [0, 6],
			placement: "top",
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
			title: "",
			trigger: "hover focus"
		}, Ui = {
			allowList: "object",
			animation: "boolean",
			boundary: "(string|element)",
			container: "(string|element|boolean)",
			customClass: "(string|function)",
			delay: "(number|object)",
			fallbackPlacements: "array",
			html: "boolean",
			offset: "(array|string|function)",
			placement: "(string|function)",
			popperConfig: "(null|object|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			selector: "(string|boolean)",
			template: "string",
			title: "(string|element|function)",
			trigger: "string"
		};
		class Wi extends ne {
			constructor(e, t) {
				if (nr === void 0) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
				super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
			}
			static get Default() {
				return Hi;
			}
			static get DefaultType() {
				return Ui;
			}
			static get NAME() {
				return "tooltip";
			}
			enable() {
				this._isEnabled = !0;
			}
			disable() {
				this._isEnabled = !1;
			}
			toggleEnabled() {
				this._isEnabled = !this._isEnabled;
			}
			toggle() {
				if (this._isEnabled) {
					if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
						this._leave();
						return;
					}
					this._enter();
				}
			}
			dispose() {
				clearTimeout(this._timeout), z.off(this._element.closest(Li), Ri, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
			}
			show() {
				if (this._element.style.display === "none") throw Error("Please use show on visible elements");
				if (!(this._isWithContent() && this._isEnabled)) return;
				let e = z.trigger(this._element, this.constructor.eventName("show")), t = (f(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
				if (e.defaultPrevented || !t) return;
				this._disposePopper();
				let n = this._getTipElement();
				this._element.setAttribute("aria-describedby", n.getAttribute("id"));
				let { container: r } = this._config;
				if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(n), z.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(Ii), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) z.on(e, "mouseover", p);
				this._queueCallback(() => {
					z.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
				}, this.tip, this._isAnimated());
			}
			hide() {
				if (!(!this._isShown() || z.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented)) {
					if (this._getTipElement().classList.remove(Ii), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) z.off(e, "mouseover", p);
					this._activeTrigger.click = !1, this._activeTrigger[Bi] = !1, this._activeTrigger[zi] = !1, this._isHovered = null, this._queueCallback(() => {
						this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), z.trigger(this._element, this.constructor.eventName("hidden")));
					}, this.tip, this._isAnimated());
				}
			}
			update() {
				this._popper && this._popper.update();
			}
			_isWithContent() {
				return !!this._getTitle();
			}
			_getTipElement() {
				return this.tip ||= this._createTipElement(this._newContent || this._getContentForTemplate()), this.tip;
			}
			_createTipElement(e) {
				let t = this._getTemplateFactory(e).toHtml();
				if (!t) return null;
				t.classList.remove(Fi, Ii), t.classList.add(`bs-${this.constructor.NAME}-auto`);
				let n = a(this.constructor.NAME).toString();
				return t.setAttribute("id", n), this._isAnimated() && t.classList.add(Fi), t;
			}
			setContent(e) {
				this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
			}
			_getTemplateFactory(e) {
				return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Ni({
					...this._config,
					content: e,
					extraClass: this._resolvePossibleFunction(this._config.customClass)
				}), this._templateFactory;
			}
			_getContentForTemplate() {
				return { ".tooltip-inner": this._getTitle() };
			}
			_getTitle() {
				return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
			}
			_initializeOnDelegatedTarget(e) {
				return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
			}
			_isAnimated() {
				return this._config.animation || this.tip && this.tip.classList.contains(Fi);
			}
			_isShown() {
				return this.tip && this.tip.classList.contains(Ii);
			}
			_createPopper(e) {
				let t = Vi[b(this._config.placement, [
					this,
					e,
					this._element
				]).toUpperCase()];
				return tr(this._element, e, this._getPopperConfig(t));
			}
			_getOffset() {
				let { offset: e } = this._config;
				return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
			}
			_resolvePossibleFunction(e) {
				return b(e, [this._element]);
			}
			_getPopperConfig(e) {
				let t = {
					placement: e,
					modifiers: [
						{
							name: "flip",
							options: { fallbackPlacements: this._config.fallbackPlacements }
						},
						{
							name: "offset",
							options: { offset: this._getOffset() }
						},
						{
							name: "preventOverflow",
							options: { boundary: this._config.boundary }
						},
						{
							name: "arrow",
							options: { element: `.${this.constructor.NAME}-arrow` }
						},
						{
							name: "preSetPlacement",
							enabled: !0,
							phase: "beforeMain",
							fn: (e) => {
								this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
							}
						}
					]
				};
				return {
					...t,
					...b(this._config.popperConfig, [t])
				};
			}
			_setListeners() {
				let e = this._config.trigger.split(" ");
				for (let t of e) if (t === "click") z.on(this._element, this.constructor.eventName("click"), this._config.selector, (e) => {
					this._initializeOnDelegatedTarget(e).toggle();
				});
				else if (t !== "manual") {
					let e = t === zi ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), n = t === zi ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
					z.on(this._element, e, this._config.selector, (e) => {
						let t = this._initializeOnDelegatedTarget(e);
						t._activeTrigger[e.type === "focusin" ? Bi : zi] = !0, t._enter();
					}), z.on(this._element, n, this._config.selector, (e) => {
						let t = this._initializeOnDelegatedTarget(e);
						t._activeTrigger[e.type === "focusout" ? Bi : zi] = t._element.contains(e.relatedTarget), t._leave();
					});
				}
				this._hideModalHandler = () => {
					this._element && this.hide();
				}, z.on(this._element.closest(Li), Ri, this._hideModalHandler);
			}
			_fixTitle() {
				let e = this._element.getAttribute("title");
				e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
			}
			_enter() {
				if (this._isShown() || this._isHovered) {
					this._isHovered = !0;
					return;
				}
				this._isHovered = !0, this._setTimeout(() => {
					this._isHovered && this.show();
				}, this._config.delay.show);
			}
			_leave() {
				this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
					this._isHovered || this.hide();
				}, this._config.delay.hide));
			}
			_setTimeout(e, t) {
				clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
			}
			_isWithActiveTrigger() {
				return Object.values(this._activeTrigger).includes(!0);
			}
			_getConfig(e) {
				let t = H.getDataAttributes(this._element);
				for (let e of Object.keys(t)) Pi.has(e) && delete t[e];
				return e = {
					...t,
					...typeof e == "object" && e ? e : {}
				}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
			}
			_configAfterMerge(e) {
				return e.container = e.container === !1 ? document.body : l(e.container), typeof e.delay == "number" && (e.delay = {
					show: e.delay,
					hide: e.delay
				}), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
			}
			_getDelegateConfig() {
				let e = {};
				for (let [t, n] of Object.entries(this._config)) this.constructor.Default[t] !== n && (e[t] = n);
				return e.selector = !1, e.trigger = "manual", e;
			}
			_disposePopper() {
				this._popper &&= (this._popper.destroy(), null), this.tip &&= (this.tip.remove(), null);
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = Wi.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0) throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
		}
		y(Wi);
		let Gi = {
			...Wi.Default,
			content: "",
			offset: [0, 8],
			placement: "right",
			template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>",
			trigger: "click"
		}, Ki = {
			...Wi.DefaultType,
			content: "(null|string|element|function)"
		};
		class qi extends Wi {
			static get Default() {
				return Gi;
			}
			static get DefaultType() {
				return Ki;
			}
			static get NAME() {
				return "popover";
			}
			_isWithContent() {
				return this._getTitle() || this._getContent();
			}
			_getContentForTemplate() {
				return {
					".popover-header": this._getTitle(),
					".popover-body": this._getContent()
				};
			}
			_getContent() {
				return this._resolvePossibleFunction(this._config.content);
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = qi.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0) throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
		}
		y(qi);
		let Ji = ".bs.scrollspy", Yi = `activate${Ji}`, Xi = `click${Ji}`, Zi = `load${Ji}.data-api`, Qi = "active", $i = "[href]", ea = ".nav-link", ta = `${ea}, .nav-item > ${ea}, .list-group-item`, na = {
			offset: null,
			rootMargin: "0px 0px -25%",
			smoothScroll: !1,
			target: null,
			threshold: [
				.1,
				.5,
				1
			]
		}, ra = {
			offset: "(number|null)",
			rootMargin: "string",
			smoothScroll: "boolean",
			target: "element",
			threshold: "array"
		};
		class ia extends ne {
			constructor(e, t) {
				super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
					visibleEntryTop: 0,
					parentScrollTop: 0
				}, this.refresh();
			}
			static get Default() {
				return na;
			}
			static get DefaultType() {
				return ra;
			}
			static get NAME() {
				return "scrollspy";
			}
			refresh() {
				this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
				for (let e of this._observableSections.values()) this._observer.observe(e);
			}
			dispose() {
				this._observer.disconnect(), super.dispose();
			}
			_configAfterMerge(e) {
				return e.target = l(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e;
			}
			_maybeEnableSmoothScroll() {
				this._config.smoothScroll && (z.off(this._config.target, Xi), z.on(this._config.target, Xi, $i, (e) => {
					let t = this._observableSections.get(e.target.hash);
					if (t) {
						e.preventDefault();
						let n = this._rootElement || window, r = t.offsetTop - this._element.offsetTop;
						if (n.scrollTo) {
							n.scrollTo({
								top: r,
								behavior: "smooth"
							});
							return;
						}
						n.scrollTop = r;
					}
				}));
			}
			_getNewObserver() {
				let e = {
					root: this._rootElement,
					threshold: this._config.threshold,
					rootMargin: this._config.rootMargin
				};
				return new IntersectionObserver((e) => this._observerCallback(e), e);
			}
			_observerCallback(e) {
				let t = (e) => this._targetLinks.get(`#${e.target.id}`), n = (e) => {
					this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e));
				}, r = (this._rootElement || document.documentElement).scrollTop, i = r >= this._previousScrollData.parentScrollTop;
				this._previousScrollData.parentScrollTop = r;
				for (let a of e) {
					if (!a.isIntersecting) {
						this._activeTarget = null, this._clearActiveClass(t(a));
						continue;
					}
					let e = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
					if (i && e) {
						if (n(a), !r) return;
						continue;
					}
					!i && !e && n(a);
				}
			}
			_initializeTargetsAndObservables() {
				this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
				let e = W.find($i, this._config.target);
				for (let t of e) {
					if (!t.hash || d(t)) continue;
					let e = W.findOne(decodeURI(t.hash), this._element);
					u(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e));
				}
			}
			_process(e) {
				this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Qi), this._activateParents(e), z.trigger(this._element, Yi, { relatedTarget: e }));
			}
			_activateParents(e) {
				if (e.classList.contains("dropdown-item")) {
					W.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Qi);
					return;
				}
				for (let t of W.parents(e, ".nav, .list-group")) for (let e of W.prev(t, ta)) e.classList.add(Qi);
			}
			_clearActiveClass(e) {
				e.classList.remove(Qi);
				let t = W.find(`${$i}.${Qi}`, e);
				for (let e of t) e.classList.remove(Qi);
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = ia.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
		}
		z.on(window, Zi, () => {
			for (let e of W.find("[data-bs-spy=\"scroll\"]")) ia.getOrCreateInstance(e);
		}), y(ia);
		let aa = ".bs.tab", oa = `hide${aa}`, sa = `hidden${aa}`, ca = `show${aa}`, la = `shown${aa}`, ua = `click${aa}`, da = `keydown${aa}`, fa = `load${aa}`, pa = "ArrowRight", ma = "ArrowDown", ha = "active", ga = "fade", _a = "show", va = ":not(.dropdown-toggle)", ya = `.nav-link${va}, .list-group-item${va}, [role="tab"]${va}`, ba = "[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]", xa = `${ya}, ${ba}`, Sa = `.${ha}[data-bs-toggle="tab"], .${ha}[data-bs-toggle="pill"], .${ha}[data-bs-toggle="list"]`;
		class Ca extends ne {
			constructor(e) {
				super(e), this._parent = this._element.closest(".list-group, .nav, [role=\"tablist\"]"), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), z.on(this._element, da, (e) => this._keydown(e)));
			}
			static get NAME() {
				return "tab";
			}
			show() {
				let e = this._element;
				if (this._elemIsActive(e)) return;
				let t = this._getActiveElem(), n = t ? z.trigger(t, oa, { relatedTarget: e }) : null;
				z.trigger(e, ca, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
			}
			_activate(e, t) {
				e && (e.classList.add(ha), this._activate(W.getElementFromSelector(e)), this._queueCallback(() => {
					if (e.getAttribute("role") !== "tab") {
						e.classList.add(_a);
						return;
					}
					e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), z.trigger(e, la, { relatedTarget: t });
				}, e, e.classList.contains(ga)));
			}
			_deactivate(e, t) {
				e && (e.classList.remove(ha), e.blur(), this._deactivate(W.getElementFromSelector(e)), this._queueCallback(() => {
					if (e.getAttribute("role") !== "tab") {
						e.classList.remove(_a);
						return;
					}
					e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), z.trigger(e, sa, { relatedTarget: t });
				}, e, e.classList.contains(ga)));
			}
			_keydown(e) {
				if (![
					"ArrowLeft",
					pa,
					"ArrowUp",
					ma
				].includes(e.key)) return;
				e.stopPropagation(), e.preventDefault();
				let t = [pa, ma].includes(e.key), n = S(this._getChildren().filter((e) => !d(e)), e.target, t, !0);
				n && (n.focus({ preventScroll: !0 }), Ca.getOrCreateInstance(n).show());
			}
			_getChildren() {
				return W.find(xa, this._parent);
			}
			_getActiveElem() {
				return this._getChildren().find((e) => this._elemIsActive(e)) || null;
			}
			_setInitialAttributes(e, t) {
				this._setAttributeIfNotExists(e, "role", "tablist");
				for (let e of t) this._setInitialAttributesOnChild(e);
			}
			_setInitialAttributesOnChild(e) {
				e = this._getInnerElement(e);
				let t = this._elemIsActive(e), n = this._getOuterElement(e);
				e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
			}
			_setInitialAttributesOnTargetPanel(e) {
				let t = W.getElementFromSelector(e);
				t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
			}
			_toggleDropDown(e, t) {
				let n = this._getOuterElement(e);
				if (!n.classList.contains("dropdown")) return;
				let r = (e, r) => {
					let i = W.findOne(e, n);
					i && i.classList.toggle(r, t);
				};
				r(".dropdown-toggle", ha), r(".dropdown-menu", _a), n.setAttribute("aria-expanded", t);
			}
			_setAttributeIfNotExists(e, t, n) {
				e.hasAttribute(t) || e.setAttribute(t, n);
			}
			_elemIsActive(e) {
				return e.classList.contains(ha);
			}
			_getInnerElement(e) {
				return e.matches(xa) ? e : W.findOne(xa, e);
			}
			_getOuterElement(e) {
				return e.closest(".nav-item, .list-group-item") || e;
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = Ca.getOrCreateInstance(this);
					if (typeof e == "string") {
						if (t[e] === void 0 || e.startsWith("_") || e === "constructor") throw TypeError(`No method named "${e}"`);
						t[e]();
					}
				});
			}
		}
		z.on(document, ua, ba, function(e) {
			["A", "AREA"].includes(this.tagName) && e.preventDefault(), !d(this) && Ca.getOrCreateInstance(this).show();
		}), z.on(window, fa, () => {
			for (let e of W.find(Sa)) Ca.getOrCreateInstance(e);
		}), y(Ca);
		let wa = ".bs.toast", Ta = `mouseover${wa}`, Ea = `mouseout${wa}`, Da = `focusin${wa}`, Oa = `focusout${wa}`, ka = `hide${wa}`, Aa = `hidden${wa}`, ja = `show${wa}`, Ma = `shown${wa}`, Na = "hide", Pa = "show", Fa = "showing", Ia = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		}, La = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		};
		class Ra extends ne {
			constructor(e, t) {
				super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
			}
			static get Default() {
				return La;
			}
			static get DefaultType() {
				return Ia;
			}
			static get NAME() {
				return "toast";
			}
			show() {
				z.trigger(this._element, ja).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Na), m(this._element), this._element.classList.add(Pa, Fa), this._queueCallback(() => {
					this._element.classList.remove(Fa), z.trigger(this._element, Ma), this._maybeScheduleHide();
				}, this._element, this._config.animation));
			}
			hide() {
				!this.isShown() || z.trigger(this._element, ka).defaultPrevented || (this._element.classList.add(Fa), this._queueCallback(() => {
					this._element.classList.add(Na), this._element.classList.remove(Fa, Pa), z.trigger(this._element, Aa);
				}, this._element, this._config.animation));
			}
			dispose() {
				this._clearTimeout(), this.isShown() && this._element.classList.remove(Pa), super.dispose();
			}
			isShown() {
				return this._element.classList.contains(Pa);
			}
			_maybeScheduleHide() {
				this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
					this.hide();
				}, this._config.delay)));
			}
			_onInteraction(e, t) {
				switch (e.type) {
					case "mouseover":
					case "mouseout":
						this._hasMouseInteraction = t;
						break;
					case "focusin":
					case "focusout":
						this._hasKeyboardInteraction = t;
						break;
				}
				if (t) {
					this._clearTimeout();
					return;
				}
				let n = e.relatedTarget;
				this._element === n || this._element.contains(n) || this._maybeScheduleHide();
			}
			_setListeners() {
				z.on(this._element, Ta, (e) => this._onInteraction(e, !0)), z.on(this._element, Ea, (e) => this._onInteraction(e, !1)), z.on(this._element, Da, (e) => this._onInteraction(e, !0)), z.on(this._element, Oa, (e) => this._onInteraction(e, !1));
			}
			_clearTimeout() {
				clearTimeout(this._timeout), this._timeout = null;
			}
			static jQueryInterface(e) {
				return this.each(function() {
					let t = Ra.getOrCreateInstance(this, e);
					if (typeof e == "string") {
						if (t[e] === void 0) throw TypeError(`No method named "${e}"`);
						t[e](this);
					}
				});
			}
		}
		return ie(Ra), y(Ra), {
			Alert: G,
			Button: le,
			Carousel: Y,
			Collapse: Ze,
			Dropdown: Tr,
			Modal: oi,
			Offcanvas: wi,
			Popover: qi,
			ScrollSpy: ia,
			Tab: Ca,
			Toast: Ra,
			Tooltip: Wi
		};
	}));
})))();
function or(e) {
	let t = e.data, n = t.reduce((e, t) => {
		let n = Object.keys(e).length;
		return Object.keys(t).length > n ? t : e;
	}, {}), r = Object.keys(n).map((e) => ({
		name: e,
		visible: !0
	})), [i, a] = u([]), [o, s] = u(r), [c, l] = u(t), [d, f] = u(-1), [p, m] = u({}), [h, g] = u("");
	if (i.length <= 0) {
		let e = [];
		o.forEach((t) => {
			e.push({
				name: t.name,
				selected: !0
			});
		}), a(e);
	}
	let _ = (e) => {
		let t = null;
		d === -1 ? (t = [...c].sort((t, n) => t[e] > n[e] ? 1 : -1), t[e] === c[e] ? (t = t.reverse(), f(1)) : f(0)) : (d === 0 || d === 1) && (d === 0 ? (t = [...c].sort((t, n) => t[e] < n[e] ? 1 : -1), f(1)) : d === 1 ? (t = [...c].sort((t, n) => t[e] > n[e] ? 1 : -1), f(0)) : (t = c.reverse(), f(0))), l(t);
	}, v = (e, t) => {
		let n = p[e] || [], r = n.includes(t) ? n.filter((e) => e !== t) : [...n, t];
		m({
			...p,
			[e]: r
		});
	}, y = () => {
		l(t.filter((e) => Object.entries(p).every(([t, n]) => n.length === 0 || n.includes(e[t]))));
	}, b = () => {
		let e = t.filter((e) => Object.entries(p).every(([t, n]) => n.length === 0 || n.includes(e[t]))), n = document.getElementById("search-input");
		n.value === "" ? l(e) : l(e.filter((e) => o.filter((e) => e.visible).some((t) => {
			let r = e[t.name];
			return r && r.toString().toLowerCase().includes(n.value.toString().toLowerCase());
		})));
	}, x = (e) => {
		s(o.map((t) => t.name === e ? {
			...t,
			visible: !t.visible
		} : t));
	}, S = () => {
		let e = o.filter((e) => e.visible);
		return c.map((t) => e.reduce((e, n) => (e[n.name] = t[n.name], e), {}));
	}, C = () => {
		let e = o.filter((e) => e.visible), t = new X(), n = c.map((t) => e.map((e) => String(t[e.name])));
		t.autoTable({
			head: [e.map((e) => String(e.name))],
			body: n
		}), t.save("table.pdf");
	}, w = (e, t) => {
		e.dataTransfer.setData("text/plain", t);
	}, T = (e, t) => {
		let n = e.dataTransfer.getData("text/plain"), r = [...o], i = r.findIndex((e) => e.name === n), a = r.findIndex((e) => e.name === t), [c] = r.splice(i, 1);
		r.splice(a, 0, c), s(r);
	}, E = (e) => {
		e.preventDefault();
	};
	return /* @__PURE__ */ (0, R.jsxs)("div", { children: [/* @__PURE__ */ (0, R.jsx)("div", {
		className: "container d-grid",
		children: /* @__PURE__ */ (0, R.jsxs)("div", {
			className: "d-flex justify-content-between",
			children: [
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: "d-flex justify-content-start my-3",
					children: /* @__PURE__ */ (0, R.jsx)(ar, {
						colData: i,
						handleColumnToggle: x
					})
				}),
				/* @__PURE__ */ (0, R.jsx)("div", {
					className: "my-3 d-table-cell justify-content-center",
					children: /* @__PURE__ */ (0, R.jsxs)("div", {
						className: "input-group",
						children: [/* @__PURE__ */ (0, R.jsx)("span", {
							className: "input-group-text",
							id: "basic-addon1",
							children: /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-search" })
						}), /* @__PURE__ */ (0, R.jsx)("input", {
							id: "search-input",
							type: "text",
							value: h,
							onChange: (e) => {
								g(e.target.value), b();
							},
							className: "form-control",
							placeholder: "Search..."
						})]
					})
				}),
				/* @__PURE__ */ (0, R.jsxs)("div", {
					className: "d-flex justify-content-end my-3",
					children: [
						/* @__PURE__ */ (0, R.jsxs)("button", {
							className: "btn btn-primary mx-1",
							onClick: () => window.print(),
							children: ["Print\xA0\xA0", /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-printer-fill" })]
						}),
						/* @__PURE__ */ (0, R.jsxs)("button", {
							className: "btn btn-danger mx-1",
							onClick: C,
							children: ["Export PDF\xA0\xA0", /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-file-earmark-pdf-fill" })]
						}),
						/* @__PURE__ */ (0, R.jsx)("button", {
							className: "btn btn-success mx-1",
							children: /* @__PURE__ */ (0, R.jsxs)(z, {
								className: "text-light text-decoration-none",
								data: S(),
								filename: "table.csv",
								children: ["Export CSV\xA0\xA0", /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-filetype-csv" })]
							})
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, R.jsx)("div", {
		className: "table-responsive",
		children: /* @__PURE__ */ (0, R.jsxs)("table", {
			className: "table table-striped",
			children: [/* @__PURE__ */ (0, R.jsx)("thead", {
				className: "table-dark",
				children: /* @__PURE__ */ (0, R.jsx)("tr", { children: o.map((e, n) => e.visible ? /* @__PURE__ */ (0, R.jsxs)("th", {
					draggable: !0,
					onDragStart: (t) => w(t, e.name),
					onDragOver: E,
					onDrop: (t) => T(t, e.name),
					children: [/* @__PURE__ */ (0, R.jsx)("div", {
						className: "row d-flex justify-content-center mt-2",
						children: /* @__PURE__ */ (0, R.jsxs)("div", {
							className: "col-12 text-end p-1 me-3",
							children: [
								/* @__PURE__ */ (0, R.jsx)("div", {
									className: "float-start ms-3",
									children: e.name.charAt(0).toUpperCase() + e.name.slice(1)
								}),
								/* @__PURE__ */ (0, R.jsx)("button", {
									className: "btn btn-link text-info text-decoration-none p-1",
									onClick: () => _(e.name),
									children: /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-arrow-down-up" })
								}),
								/* @__PURE__ */ (0, R.jsx)("button", {
									className: "btn btn-sm btn-link text-warning text-decoration-none p-1",
									"data-bs-toggle": "modal",
									"data-bs-target": `#filterModal_${e.name}`,
									children: /* @__PURE__ */ (0, R.jsx)("i", { className: "bi bi-funnel-fill" })
								})
							]
						})
					}), /* @__PURE__ */ (0, R.jsx)("div", {
						className: "modal fade",
						id: `filterModal_${e.name}`,
						tabIndex: "-1",
						"aria-labelledby": `filterModalLabel_${e.name}`,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, R.jsx)("div", {
							className: "modal-dialog modal-dialog-centered modal-dialog-scrollable",
							children: /* @__PURE__ */ (0, R.jsxs)("div", {
								className: "modal-content",
								children: [
									/* @__PURE__ */ (0, R.jsxs)("div", {
										className: "modal-header",
										children: [/* @__PURE__ */ (0, R.jsxs)("h5", {
											className: "modal-title text-dark",
											id: `filterModalLabel_${e.name}`,
											children: [e.name.charAt(0).toUpperCase() + e.name.slice(1), " Filters"]
										}), /* @__PURE__ */ (0, R.jsx)("button", {
											type: "button",
											className: "btn-close",
											"data-bs-dismiss": "modal",
											"aria-label": "Close"
										})]
									}),
									/* @__PURE__ */ (0, R.jsx)("div", {
										className: "modal-body fw-normal",
										children: Array.from(new Set(t.map((t) => t[e.name]))).map((t) => /* @__PURE__ */ (0, R.jsxs)("div", {
											className: "form-check my-4",
											children: [/* @__PURE__ */ (0, R.jsx)("input", {
												className: "form-check-input",
												type: "checkbox",
												id: `filter_${e.name}_${t}`,
												value: t,
												checked: p[e.name]?.includes(t) || !1,
												onChange: () => v(e.name, t)
											}), /* @__PURE__ */ (0, R.jsx)("label", {
												className: "form-check-label text-dark",
												htmlFor: `filter_${e.name}_${t}`,
												children: t
											})]
										}, t))
									}),
									/* @__PURE__ */ (0, R.jsxs)("div", {
										className: "modal-footer",
										children: [/* @__PURE__ */ (0, R.jsx)("button", {
											type: "button",
											"data-bs-dismiss": "modal",
											className: "btn btn-success",
											onClick: y,
											children: "Apply Filters"
										}), /* @__PURE__ */ (0, R.jsx)("button", {
											type: "button",
											className: "btn btn-danger",
											"data-bs-dismiss": "modal",
											children: "Close"
										})]
									})
								]
							})
						})
					})]
				}, e.name) : null) })
			}), /* @__PURE__ */ (0, R.jsx)("tbody", { children: c.map((e, t) => /* @__PURE__ */ (0, R.jsx)("tr", { children: o.map((t) => t.visible ? /* @__PURE__ */ (0, R.jsx)("td", { children: e[t.name] }, t.name) : null) }, t)) })]
		})
	})] });
}
//#endregion
export { or as BhavyaTable };
