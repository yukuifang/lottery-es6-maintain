"use strict";

!function (o) {
  var e = {};function n(r) {
    if (e[r]) return e[r].exports;var t = e[r] = { "i": r, "l": !1, "exports": {} };return o[r].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }n.m = o, n.c = e, n.d = function (o, e, r) {
    n.o(o, e) || Object.defineProperty(o, e, { "configurable": !1, "enumerable": !0, "get": r });
  }, n.n = function (o) {
    var e = o && o.__esModule ? function () {
      return o["default"];
    } : function () {
      return o;
    };return n.d(e, "a", e), e;
  }, n.o = function (o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }, n.p = "", n(n.s = 0);
}([function (o, e, n) {
  o.exports = n(1);
}, function (o, e, n) {
  "use strict";
  n(2);
}, function (o, e, n) {
  "use strict";
  console.log(Number.isInteger(25)), console.log(Number.isInteger(25)), console.log(Number.isInteger(25.1)), console.log(Number.isInteger("haha")), console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), console.log(Number.isSafeInteger(10)), console.log(Number.isSafeInteger("a")), console.log(Math.trunc(4.1)), console.log(Math.trunc(4.8)), console.log(Math.ceil(2.3)), console.log(Math.ceil(2.8)), console.log(Math.floor(5.1)), console.log(Math.floor(5.8));
}]);

//# sourceMappingURL=cp.min-compiled.js.map