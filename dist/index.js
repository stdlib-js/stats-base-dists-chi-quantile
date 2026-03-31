"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(d,a){
var q=require('@stdlib/stats-base-dists-gamma-quantile/dist'),v=require('@stdlib/math-base-special-sqrt/dist');function f(e,r){return v(q(e,r/2,.5))}a.exports=f
});var n=t(function(F,i){
var m=require('@stdlib/stats-base-dists-gamma-quantile/dist').factory,y=require('@stdlib/math-base-special-sqrt/dist');function l(e){var r=m(e/2,.5);return c;function c(o){return y(r(o))}}i.exports=l
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=u(),p=n();g(s,"factory",p);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
