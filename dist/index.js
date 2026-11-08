"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=a(function(d,u){
var q=require('@stdlib/stats-base-dists-gamma-quantile/dist'),v=require('@stdlib/math-base-special-sqrt/dist');function f(e,r){return v(q(e,r/2,.5))}u.exports=f
});var s=a(function(F,n){
var m=require('@stdlib/stats-base-dists-gamma-quantile/dist').factory,y=require('@stdlib/math-base-special-sqrt/dist');function l(e){var r=m(e/2,.5);return t;function t(o){return y(r(o))}}n.exports=l
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=i(),p=s();g(c,"factory",p);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
