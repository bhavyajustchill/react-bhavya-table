import { n as e } from "./chunk-Cr9pTUWm.mjs";
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
function t(e) {
	"@babel/helpers - typeof";
	return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, t(e);
}
var n = e((() => {}));
//#endregion
export { n, t };
