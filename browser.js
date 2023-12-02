// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor;function n(r){return e(r)===r}function t(r){return n(r/2)}function i(r){return t(r>0?r-1:r+1)}var a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;function u(r){return r===a||r===o}var c=Math.sqrt;function f(r){return Math.abs(r)}var s="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function g(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+y(i):y(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!p(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=g(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=g(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===h.call(r.specifier)?h.call(n):d.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function w(r){return"string"==typeof r}var b=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,U=/e-(\d)$/,I=/^(\d+)$/,S=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,F=/(\..*[^0])0*e/;function j(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":b(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_.call(n,F,"$1e"),n=_.call(n,k,"e"),n=_.call(n,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_.call(n,E,"e+0$1"),n=_.call(n,U,"e-0$1"),r.alternate&&(n=_.call(n,I,"$1."),n=_.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):m.call(n)}function T(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+T(t):T(t)+r}var O=String.fromCharCode,V=isNaN,$=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,n,t,i,a,o,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(w(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=G(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,V(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=v(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!V(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(a)?String(t.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=j(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=g(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function L(r){var e,n,t,i;for(n=[],i=0,t=W.exec(r);t;)(e=r.slice(i,W.lastIndex-t[0].length)).length&&n.push(e),n.push(C(t)),i=W.lastIndex,t=W.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function P(r){return"string"==typeof r}function R(r){var e,n,t;if(!P(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=L(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return H.apply(null,n)}var Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,Y=Z.__defineSetter__,q=Z.__lookupGetter__,z=Z.__lookupSetter__,B=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(q.call(r,e)||z.call(r,e)?(t=r.__proto__,r.__proto__=Z,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(r,e,n.get),o&&Y&&Y.call(r,e,n.set),r};function D(r,e,n){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,cr=J,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:vr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,Ir,Sr=52===new Er.uint8(_r.buffer)[0];!0===Sr?(Ur=1,Ir=0):(Ur=0,Ir=1);var xr={HIGH:Ur,LOW:Ir},kr=new yr(1),Fr=new cr(kr.buffer),jr=xr.HIGH,Tr=xr.LOW;function Nr(r,e,n,t){return kr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Tr],e}function Or(r){return Nr(r,[0,0],1,0)}D(Or,"assign",Nr);var Vr=!0===Sr?0:1,$r=new yr(1),Gr=new cr($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=2147483647,Rr=!0===Sr?1:0,Zr=new yr(1),Mr=new cr(Zr.buffer);function Xr(r){return Zr[0]=r,Mr[Rr]}!0===Sr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr={HIGH:Cr,LOW:Lr},qr=new yr(1),zr=new cr(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,qr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Or.assign(r,Kr,1,0),n=Kr[0],n&=Pr,t=Xr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===Sr?1:0,ee=new yr(1),ne=new cr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=1023,ae=1048576,oe=[1,1.5],ue=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function fe(e,n,t,i){return r(e)||u(e)?(n[i]=e,n[i+t]=0,n):0!==e&&f(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}D((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=[0,0],le=[0,0];function pe(e,n){var t,i;return 0===n||0===e||r(e)||u(e)?e:(fe(e,se,1,0),n+=se[1],n+=function(r){var e=Xr(r);return(e=(2146435072&e)>>>20)-ie|0}(e=se[0]),n<-1074?Qr(0,e):n>1023?e<0?o:a:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Or.assign(e,le,1,0),t=le[0],t&=2148532223,i*Jr(t|=n+ie<<20,le[1])))}var ye=1048575,ge=1048576,de=1083179008,he=1e300,ve=1e-300,we=[0,0],be=[0,0];function me(e,t){var s,l,p,y,g,d,h,v,w,b,m,A,_,E;if(r(e)||r(t))return NaN;if(Or.assign(t,we,1,0),g=we[0],0===we[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return c(e);if(-.5===t)return 1/c(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(u(t))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:f(r)<1==(e===a)?0:a}(e,t)}if(Or.assign(e,we,1,0),y=we[0],0===we[1]){if(0===y)return function(r,e){return e===o?a:e===a?0:e>0?i(e)?r:0:i(e)?Qr(a,r):a}(e,t);if(1===e)return 1;if(-1===e&&i(t))return-1;if(u(e))return e===o?me(-0,-t):t<0?0:a}if(e<0&&!1===n(t))return(e-e)/(e-e);if(p=f(e),s=y&Pr|0,l=g&Pr|0,h=g>>>31|0,d=(d=y>>>31|0)&&i(t)?-1:1,l>1105199104){if(l>1139802112)return function(r,e){return(Xr(r)&Pr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,t);if(s<1072693247)return 1===h?d*he*he:d*ve*ve;if(s>1072693248)return 0===h?d*he*he:d*ve*ve;m=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(be,p)}else m=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<ae&&(m-=53,n=Xr(e*=9007199254740992)),m+=(n>>20)-ie|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ae),o=Hr(i=(w=(e=te(e,n))-(f=oe[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=te(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Hr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ce[_])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=ue[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(be,p,s);if(A=(b=(t-(v=Hr(t,0)))*m[0]+t*m[1])+(w=v*m[0]),Or.assign(A,we,1,0),_=Wr(we[0]),E=Wr(we[1]),_>=de){if(0!=(_-de|E))return d*he*he;if(b+8008566259537294e-32>A-w)return d*he*he}else if((_&Pr)>=1083231232){if(0!=(_-3230714880|E))return d*ve*ve;if(b<=A-w)return d*ve*ve}return A=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Pr|0)>>20)-ie|0,f=0,s>1071644672&&(i=te(0,((f=r+(ge>>l+1)>>>0)&~(ye>>(l=((f&Pr)>>20)-ie|0)))>>>0),f=(f&ye|ge)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Wr(r=Xr(c=1-((c=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?pe(c,f):te(c,r)}(_,w,b),d*A}return function(r,e){return r<=0||e<=0?NaN:e*me(2,1/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).median=e();
//# sourceMappingURL=browser.js.map
