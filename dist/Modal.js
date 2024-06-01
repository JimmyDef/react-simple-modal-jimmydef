(function(ee,me){typeof exports=="object"&&typeof module<"u"?module.exports=me(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],me):(ee=typeof globalThis<"u"?globalThis:ee||self,ee.ReactSimpleModaljimmydef=me(ee.React,ee.ReactDOM))})(this,function(ee,me){"use strict";var Be=document.createElement("style");Be.textContent=`.rsmj_Overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#000c;display:flex;align-items:center;justify-content:center;z-index:500}.rsmj_Modal{position:absolute;text-align:center;background-color:#e6e6e6;margin:0 20px;padding:30px;border-radius:5px;min-width:280px;max-width:500px;animation:modalopen .3s;cursor:default}.rsmj_ChildrenSection{margin:0 auto 40px;text-align:left}.rsmj_ButtonSection{display:flex;flex-wrap:wrap;justify-content:center;gap:15px 20px}.rsmj_ConfirmButton,.rsmj_CancelButton{width:150px;height:35px;align-self:flex-end;box-shadow:#00000059 0 5px 15px;cursor:pointer;color:#fff;background-color:#485806;border:none;border-radius:5px;transition:all .25s;font-size:18px}.rsmj_ConfirmButton:hover,.rsmj_CancelButton:hover{background-color:#93ad18}.rsmj_ConfirmButton:focus-visible,.rsmj_CancelButton:focus-visible{background-color:#93ad18;border:solid 2px black;transition:all 0ms;outline:none}.rsmj_ConfirmButton:active,.rsmj_CancelButton:active{transform:scale(.98);border:none;transition:all 0ms}.rsmj_CloseButton{cursor:pointer;position:absolute;top:10px;right:10px;height:30px;width:30px;display:flex;justify-content:center;align-items:center;border:none;background-color:inherit;transition:all .25s}.rsmj_CloseButton:hover{transform:scale(1.1)}.rsmj_CloseButton:active{transform:scale(.98);border:none;transition:all 0ms}.rsmj_CloseButton:focus{transition:all 0ms}.rsmj_CloseButtonIcon{height:100%;width:100%}@keyframes modalopen{0%{opacity:0;transform:translateY(-100px)}to{opacity:1}}
`,document.head.appendChild(Be);function yr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Se={exports:{}},he={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe;function mr(){if(qe)return he;qe=1;var i=ee,M=Symbol.for("react.element"),I=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,P=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function w(d,y,R){var c,u={},C=null,F=null;R!==void 0&&(C=""+R),y.key!==void 0&&(C=""+y.key),y.ref!==void 0&&(F=y.ref);for(c in y)p.call(y,c)&&!l.hasOwnProperty(c)&&(u[c]=y[c]);if(d&&d.defaultProps)for(c in y=d.defaultProps,y)u[c]===void 0&&(u[c]=y[c]);return{$$typeof:M,type:d,key:C,ref:F,props:u,_owner:P.current}}return he.Fragment=I,he.jsx=w,he.jsxs=w,he}var be={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function hr(){return Ue||(Ue=1,process.env.NODE_ENV!=="production"&&function(){var i=ee,M=Symbol.for("react.element"),I=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),d=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),z=Symbol.iterator,$="@@iterator";function V(e){if(e===null||typeof e!="object")return null;var r=z&&e[z]||e[$];return typeof r=="function"?r:null}var q=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function Y(e){{for(var r=arguments.length,o=new Array(r>1?r-1:0),f=1;f<r;f++)o[f-1]=arguments[f];U("error",e,o)}}function U(e,r,o){{var f=q.ReactDebugCurrentFrame,k=f.getStackAddendum();k!==""&&(r+="%s",o=o.concat([k]));var D=o.map(function(S){return String(S)});D.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,D)}}var L=!1,a=!1,oe=!1,ge=!1,Ee=!1,ue;ue=Symbol.for("react.module.reference");function _e(e){return!!(typeof e=="string"||typeof e=="function"||e===p||e===l||Ee||e===P||e===R||e===c||ge||e===F||L||a||oe||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===u||e.$$typeof===w||e.$$typeof===d||e.$$typeof===y||e.$$typeof===ue||e.getModuleId!==void 0))}function fe(e,r,o){var f=e.displayName;if(f)return f;var k=r.displayName||r.name||"";return k!==""?o+"("+k+")":o}function le(e){return e.displayName||"Context"}function J(e){if(e==null)return null;if(typeof e.tag=="number"&&Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case I:return"Portal";case l:return"Profiler";case P:return"StrictMode";case R:return"Suspense";case c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return le(r)+".Consumer";case w:var o=e;return le(o._context)+".Provider";case y:return fe(e,e.render,"ForwardRef");case u:var f=e.displayName||null;return f!==null?f:J(e.type)||"Memo";case C:{var k=e,D=k._payload,S=k._init;try{return J(S(D))}catch{return null}}}return null}var K=Object.assign,ae=0,H,te,ie,de,t,s,g;function b(){}b.__reactDisabledLog=!0;function v(){{if(ae===0){H=console.log,te=console.info,ie=console.warn,de=console.error,t=console.group,s=console.groupCollapsed,g=console.groupEnd;var e={configurable:!0,enumerable:!0,value:b,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ae++}}function x(){{if(ae--,ae===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:K({},e,{value:H}),info:K({},e,{value:te}),warn:K({},e,{value:ie}),error:K({},e,{value:de}),group:K({},e,{value:t}),groupCollapsed:K({},e,{value:s}),groupEnd:K({},e,{value:g})})}ae<0&&Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var m=q.ReactCurrentDispatcher,h;function E(e,r,o){{if(h===void 0)try{throw Error()}catch(k){var f=k.stack.trim().match(/\n( *(at )?)/);h=f&&f[1]||""}return`
`+h+e}}var O=!1,_;{var N=typeof WeakMap=="function"?WeakMap:Map;_=new N}function n(e,r){if(!e||O)return"";{var o=_.get(e);if(o!==void 0)return o}var f;O=!0;var k=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var D;D=m.current,m.current=null,v();try{if(r){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(X){f=X}Reflect.construct(e,[],S)}else{try{S.call()}catch(X){f=X}e.call(S.prototype)}}else{try{throw Error()}catch(X){f=X}e()}}catch(X){if(X&&f&&typeof X.stack=="string"){for(var T=X.stack.split(`
`),G=f.stack.split(`
`),W=T.length-1,B=G.length-1;W>=1&&B>=0&&T[W]!==G[B];)B--;for(;W>=1&&B>=0;W--,B--)if(T[W]!==G[B]){if(W!==1||B!==1)do if(W--,B--,B<0||T[W]!==G[B]){var Q=`
`+T[W].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),typeof e=="function"&&_.set(e,Q),Q}while(W>=1&&B>=0);break}}}finally{O=!1,m.current=D,x(),Error.prepareStackTrace=k}var ye=e?e.displayName||e.name:"",ce=ye?E(ye):"";return typeof e=="function"&&_.set(e,ce),ce}function Z(e,r,o){return n(e,!1)}function pe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function se(e,r,o){if(e==null)return"";if(typeof e=="function")return n(e,pe(e));if(typeof e=="string")return E(e);switch(e){case R:return E("Suspense");case c:return E("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case y:return Z(e.render);case u:return se(e.type,r,o);case C:{var f=e,k=f._payload,D=f._init;try{return se(D(k),r,o)}catch{}}}return""}var Te=Object.prototype.hasOwnProperty,tr={},nr=q.ReactDebugCurrentFrame;function xe(e){if(e){var r=e._owner,o=se(e.type,e._source,r?r.type:null);nr.setExtraStackFrame(o)}else nr.setExtraStackFrame(null)}function Or(e,r,o,f,k){{var D=Function.call.bind(Te);for(var S in e)if(D(e,S)){var T=void 0;try{if(typeof e[S]!="function"){var G=Error((f||"React class")+": "+o+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw G.name="Invariant Violation",G}T=e[S](r,S,f,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(W){T=W}T&&!(T instanceof Error)&&(xe(k),Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",o,S,typeof T),xe(null)),T instanceof Error&&!(T.message in tr)&&(tr[T.message]=!0,xe(k),Y("Failed %s type: %s",o,T.message),xe(null))}}}var Pr=Array.isArray;function De(e){return Pr(e)}function jr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,o=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function Ar(e){try{return or(e),!1}catch{return!0}}function or(e){return""+e}function ar(e){if(Ar(e))return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",jr(e)),or(e)}var Re=q.ReactCurrentOwner,kr={key:!0,ref:!0,__self:!0,__source:!0},ir,sr,$e;$e={};function Ir(e){if(Te.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Mr(e){if(Te.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Dr(e,r){if(typeof e.ref=="string"&&Re.current&&r&&Re.current.stateNode!==r){var o=J(Re.current.type);$e[o]||(Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',J(Re.current.type),e.ref),$e[o]=!0)}}function $r(e,r){{var o=function(){ir||(ir=!0,Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function Fr(e,r){{var o=function(){sr||(sr=!0,Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var Yr=function(e,r,o,f,k,D,S){var T={$$typeof:M,type:e,key:r,ref:o,props:S,_owner:D};return T._store={},Object.defineProperty(T._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(T,"_self",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.defineProperty(T,"_source",{configurable:!1,enumerable:!1,writable:!1,value:k}),Object.freeze&&(Object.freeze(T.props),Object.freeze(T)),T};function Wr(e,r,o,f,k){{var D,S={},T=null,G=null;o!==void 0&&(ar(o),T=""+o),Mr(r)&&(ar(r.key),T=""+r.key),Ir(r)&&(G=r.ref,Dr(r,k));for(D in r)Te.call(r,D)&&!kr.hasOwnProperty(D)&&(S[D]=r[D]);if(e&&e.defaultProps){var W=e.defaultProps;for(D in W)S[D]===void 0&&(S[D]=W[D])}if(T||G){var B=typeof e=="function"?e.displayName||e.name||"Unknown":e;T&&$r(S,B),G&&Fr(S,B)}return Yr(e,T,G,k,f,Re.current,S)}}var Fe=q.ReactCurrentOwner,cr=q.ReactDebugCurrentFrame;function ve(e){if(e){var r=e._owner,o=se(e.type,e._source,r?r.type:null);cr.setExtraStackFrame(o)}else cr.setExtraStackFrame(null)}var Ye;Ye=!1;function We(e){return typeof e=="object"&&e!==null&&e.$$typeof===M}function ur(){{if(Fe.current){var e=J(Fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Lr(e){return""}var fr={};function Br(e){{var r=ur();if(!r){var o=typeof e=="string"?e:e.displayName||e.name;o&&(r=`

Check the top-level render call using <`+o+">.")}return r}}function lr(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=Br(r);if(fr[o])return;fr[o]=!0;var f="";e&&e._owner&&e._owner!==Fe.current&&(f=" It was passed a child from "+J(e._owner.type)+"."),ve(e),Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,f),ve(null)}}function dr(e,r){{if(typeof e!="object")return;if(De(e))for(var o=0;o<e.length;o++){var f=e[o];We(f)&&lr(f,r)}else if(We(e))e._store&&(e._store.validated=!0);else if(e){var k=V(e);if(typeof k=="function"&&k!==e.entries)for(var D=k.call(e),S;!(S=D.next()).done;)We(S.value)&&lr(S.value,r)}}}function qr(e){{var r=e.type;if(r==null||typeof r=="string")return;var o;if(typeof r=="function")o=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===y||r.$$typeof===u))o=r.propTypes;else return;if(o){var f=J(r);Or(o,e.props,"prop",f,e)}else if(r.PropTypes!==void 0&&!Ye){Ye=!0;var k=J(r);Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",k||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ur(e){{for(var r=Object.keys(e.props),o=0;o<r.length;o++){var f=r[o];if(f!=="children"&&f!=="key"){ve(e),Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",f),ve(null);break}}e.ref!==null&&(ve(e),Y("Invalid attribute `ref` supplied to `React.Fragment`."),ve(null))}}var pr={};function vr(e,r,o,f,k,D){{var S=_e(e);if(!S){var T="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(T+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var G=Lr();G?T+=G:T+=ur();var W;e===null?W="null":De(e)?W="array":e!==void 0&&e.$$typeof===M?(W="<"+(J(e.type)||"Unknown")+" />",T=" Did you accidentally export a JSX literal instead of a component?"):W=typeof e,Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",W,T)}var B=Wr(e,r,o,k,D);if(B==null)return B;if(S){var Q=r.children;if(Q!==void 0)if(f)if(De(Q)){for(var ye=0;ye<Q.length;ye++)dr(Q[ye],e);Object.freeze&&Object.freeze(Q)}else Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else dr(Q,e)}if(Te.call(r,"key")){var ce=J(e),X=Object.keys(r).filter(function(Kr){return Kr!=="key"}),Le=X.length>0?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}";if(!pr[ce+Le]){var Jr=X.length>0?"{"+X.join(": ..., ")+": ...}":"{}";Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Le,ce,Jr,ce),pr[ce+Le]=!0}}return e===p?Ur(B):qr(B),B}}function Vr(e,r,o){return vr(e,r,o,!0)}function zr(e,r,o){return vr(e,r,o,!1)}var Nr=zr,Gr=Vr;be.Fragment=p,be.jsx=Nr,be.jsxs=Gr}()),be}process.env.NODE_ENV==="production"?Se.exports=mr():Se.exports=hr();var ne=Se.exports,we={exports:{}},Ce={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve;function br(){if(Ve)return j;Ve=1;var i=typeof Symbol=="function"&&Symbol.for,M=i?Symbol.for("react.element"):60103,I=i?Symbol.for("react.portal"):60106,p=i?Symbol.for("react.fragment"):60107,P=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,w=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,y=i?Symbol.for("react.async_mode"):60111,R=i?Symbol.for("react.concurrent_mode"):60111,c=i?Symbol.for("react.forward_ref"):60112,u=i?Symbol.for("react.suspense"):60113,C=i?Symbol.for("react.suspense_list"):60120,F=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,$=i?Symbol.for("react.block"):60121,V=i?Symbol.for("react.fundamental"):60117,q=i?Symbol.for("react.responder"):60118,Y=i?Symbol.for("react.scope"):60119;function U(a){if(typeof a=="object"&&a!==null){var oe=a.$$typeof;switch(oe){case M:switch(a=a.type,a){case y:case R:case p:case l:case P:case u:return a;default:switch(a=a&&a.$$typeof,a){case d:case c:case z:case F:case w:return a;default:return oe}}case I:return oe}}}function L(a){return U(a)===R}return j.AsyncMode=y,j.ConcurrentMode=R,j.ContextConsumer=d,j.ContextProvider=w,j.Element=M,j.ForwardRef=c,j.Fragment=p,j.Lazy=z,j.Memo=F,j.Portal=I,j.Profiler=l,j.StrictMode=P,j.Suspense=u,j.isAsyncMode=function(a){return L(a)||U(a)===y},j.isConcurrentMode=L,j.isContextConsumer=function(a){return U(a)===d},j.isContextProvider=function(a){return U(a)===w},j.isElement=function(a){return typeof a=="object"&&a!==null&&a.$$typeof===M},j.isForwardRef=function(a){return U(a)===c},j.isFragment=function(a){return U(a)===p},j.isLazy=function(a){return U(a)===z},j.isMemo=function(a){return U(a)===F},j.isPortal=function(a){return U(a)===I},j.isProfiler=function(a){return U(a)===l},j.isStrictMode=function(a){return U(a)===P},j.isSuspense=function(a){return U(a)===u},j.isValidElementType=function(a){return typeof a=="string"||typeof a=="function"||a===p||a===R||a===l||a===P||a===u||a===C||typeof a=="object"&&a!==null&&(a.$$typeof===z||a.$$typeof===F||a.$$typeof===w||a.$$typeof===d||a.$$typeof===c||a.$$typeof===V||a.$$typeof===q||a.$$typeof===Y||a.$$typeof===$)},j.typeOf=U,j}var A={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function gr(){return ze||(ze=1,process.env.NODE_ENV!=="production"&&function(){var i=typeof Symbol=="function"&&Symbol.for,M=i?Symbol.for("react.element"):60103,I=i?Symbol.for("react.portal"):60106,p=i?Symbol.for("react.fragment"):60107,P=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,w=i?Symbol.for("react.provider"):60109,d=i?Symbol.for("react.context"):60110,y=i?Symbol.for("react.async_mode"):60111,R=i?Symbol.for("react.concurrent_mode"):60111,c=i?Symbol.for("react.forward_ref"):60112,u=i?Symbol.for("react.suspense"):60113,C=i?Symbol.for("react.suspense_list"):60120,F=i?Symbol.for("react.memo"):60115,z=i?Symbol.for("react.lazy"):60116,$=i?Symbol.for("react.block"):60121,V=i?Symbol.for("react.fundamental"):60117,q=i?Symbol.for("react.responder"):60118,Y=i?Symbol.for("react.scope"):60119;function U(n){return typeof n=="string"||typeof n=="function"||n===p||n===R||n===l||n===P||n===u||n===C||typeof n=="object"&&n!==null&&(n.$$typeof===z||n.$$typeof===F||n.$$typeof===w||n.$$typeof===d||n.$$typeof===c||n.$$typeof===V||n.$$typeof===q||n.$$typeof===Y||n.$$typeof===$)}function L(n){if(typeof n=="object"&&n!==null){var Z=n.$$typeof;switch(Z){case M:var pe=n.type;switch(pe){case y:case R:case p:case l:case P:case u:return pe;default:var se=pe&&pe.$$typeof;switch(se){case d:case c:case z:case F:case w:return se;default:return Z}}case I:return Z}}}var a=y,oe=R,ge=d,Ee=w,ue=M,_e=c,fe=p,le=z,J=F,K=I,ae=l,H=P,te=u,ie=!1;function de(n){return ie||(ie=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),t(n)||L(n)===y}function t(n){return L(n)===R}function s(n){return L(n)===d}function g(n){return L(n)===w}function b(n){return typeof n=="object"&&n!==null&&n.$$typeof===M}function v(n){return L(n)===c}function x(n){return L(n)===p}function m(n){return L(n)===z}function h(n){return L(n)===F}function E(n){return L(n)===I}function O(n){return L(n)===l}function _(n){return L(n)===P}function N(n){return L(n)===u}A.AsyncMode=a,A.ConcurrentMode=oe,A.ContextConsumer=ge,A.ContextProvider=Ee,A.Element=ue,A.ForwardRef=_e,A.Fragment=fe,A.Lazy=le,A.Memo=J,A.Portal=K,A.Profiler=ae,A.StrictMode=H,A.Suspense=te,A.isAsyncMode=de,A.isConcurrentMode=t,A.isContextConsumer=s,A.isContextProvider=g,A.isElement=b,A.isForwardRef=v,A.isFragment=x,A.isLazy=m,A.isMemo=h,A.isPortal=E,A.isProfiler=O,A.isStrictMode=_,A.isSuspense=N,A.isValidElementType=U,A.typeOf=L}()),A}var Ne;function Ge(){return Ne||(Ne=1,process.env.NODE_ENV==="production"?Ce.exports=br():Ce.exports=gr()),Ce.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Oe,Je;function Er(){if(Je)return Oe;Je=1;var i=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;function p(l){if(l==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(l)}function P(){try{if(!Object.assign)return!1;var l=new String("abc");if(l[5]="de",Object.getOwnPropertyNames(l)[0]==="5")return!1;for(var w={},d=0;d<10;d++)w["_"+String.fromCharCode(d)]=d;var y=Object.getOwnPropertyNames(w).map(function(c){return w[c]});if(y.join("")!=="0123456789")return!1;var R={};return"abcdefghijklmnopqrst".split("").forEach(function(c){R[c]=c}),Object.keys(Object.assign({},R)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Oe=P()?Object.assign:function(l,w){for(var d,y=p(l),R,c=1;c<arguments.length;c++){d=Object(arguments[c]);for(var u in d)M.call(d,u)&&(y[u]=d[u]);if(i){R=i(d);for(var C=0;C<R.length;C++)I.call(d,R[C])&&(y[R[C]]=d[R[C]])}}return y},Oe}var Pe,Ke;function je(){if(Ke)return Pe;Ke=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pe=i,Pe}var Ae,Xe;function He(){return Xe||(Xe=1,Ae=Function.call.bind(Object.prototype.hasOwnProperty)),Ae}var ke,Ze;function _r(){if(Ze)return ke;Ze=1;var i=function(){};if(process.env.NODE_ENV!=="production"){var M=je(),I={},p=He();i=function(l){var w="Warning: "+l;typeof console<"u"&&console.error(w);try{throw new Error(w)}catch{}}}function P(l,w,d,y,R){if(process.env.NODE_ENV!=="production"){for(var c in l)if(p(l,c)){var u;try{if(typeof l[c]!="function"){var C=Error((y||"React class")+": "+d+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}u=l[c](w,c,y,d,null,M)}catch(z){u=z}if(u&&!(u instanceof Error)&&i((y||"React class")+": type specification of "+d+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in I)){I[u.message]=!0;var F=R?R():"";i("Failed "+d+" type: "+u.message+(F??""))}}}}return P.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(I={})},ke=P,ke}var Ie,Qe;function Tr(){if(Qe)return Ie;Qe=1;var i=Ge(),M=Er(),I=je(),p=He(),P=_r(),l=function(){};process.env.NODE_ENV!=="production"&&(l=function(d){var y="Warning: "+d;typeof console<"u"&&console.error(y);try{throw new Error(y)}catch{}});function w(){return null}return Ie=function(d,y){var R=typeof Symbol=="function"&&Symbol.iterator,c="@@iterator";function u(t){var s=t&&(R&&t[R]||t[c]);if(typeof s=="function")return s}var C="<<anonymous>>",F={array:q("array"),bigint:q("bigint"),bool:q("boolean"),func:q("function"),number:q("number"),object:q("object"),string:q("string"),symbol:q("symbol"),any:Y(),arrayOf:U,element:L(),elementType:a(),instanceOf:oe,node:_e(),objectOf:Ee,oneOf:ge,oneOfType:ue,shape:le,exact:J};function z(t,s){return t===s?t!==0||1/t===1/s:t!==t&&s!==s}function $(t,s){this.message=t,this.data=s&&typeof s=="object"?s:{},this.stack=""}$.prototype=Error.prototype;function V(t){if(process.env.NODE_ENV!=="production")var s={},g=0;function b(x,m,h,E,O,_,N){if(E=E||C,_=_||h,N!==I){if(y){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var Z=E+":"+h;!s[Z]&&g<3&&(l("You are manually calling a React.PropTypes validation function for the `"+_+"` prop on `"+E+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),s[Z]=!0,g++)}}return m[h]==null?x?m[h]===null?new $("The "+O+" `"+_+"` is marked as required "+("in `"+E+"`, but its value is `null`.")):new $("The "+O+" `"+_+"` is marked as required in "+("`"+E+"`, but its value is `undefined`.")):null:t(m,h,E,O,_)}var v=b.bind(null,!1);return v.isRequired=b.bind(null,!0),v}function q(t){function s(g,b,v,x,m,h){var E=g[b],O=H(E);if(O!==t){var _=te(E);return new $("Invalid "+x+" `"+m+"` of type "+("`"+_+"` supplied to `"+v+"`, expected ")+("`"+t+"`."),{expectedType:t})}return null}return V(s)}function Y(){return V(w)}function U(t){function s(g,b,v,x,m){if(typeof t!="function")return new $("Property `"+m+"` of component `"+v+"` has invalid PropType notation inside arrayOf.");var h=g[b];if(!Array.isArray(h)){var E=H(h);return new $("Invalid "+x+" `"+m+"` of type "+("`"+E+"` supplied to `"+v+"`, expected an array."))}for(var O=0;O<h.length;O++){var _=t(h,O,v,x,m+"["+O+"]",I);if(_ instanceof Error)return _}return null}return V(s)}function L(){function t(s,g,b,v,x){var m=s[g];if(!d(m)){var h=H(m);return new $("Invalid "+v+" `"+x+"` of type "+("`"+h+"` supplied to `"+b+"`, expected a single ReactElement."))}return null}return V(t)}function a(){function t(s,g,b,v,x){var m=s[g];if(!i.isValidElementType(m)){var h=H(m);return new $("Invalid "+v+" `"+x+"` of type "+("`"+h+"` supplied to `"+b+"`, expected a single ReactElement type."))}return null}return V(t)}function oe(t){function s(g,b,v,x,m){if(!(g[b]instanceof t)){var h=t.name||C,E=de(g[b]);return new $("Invalid "+x+" `"+m+"` of type "+("`"+E+"` supplied to `"+v+"`, expected ")+("instance of `"+h+"`."))}return null}return V(s)}function ge(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&(arguments.length>1?l("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):l("Invalid argument supplied to oneOf, expected an array.")),w;function s(g,b,v,x,m){for(var h=g[b],E=0;E<t.length;E++)if(z(h,t[E]))return null;var O=JSON.stringify(t,function(N,n){var Z=te(n);return Z==="symbol"?String(n):n});return new $("Invalid "+x+" `"+m+"` of value `"+String(h)+"` "+("supplied to `"+v+"`, expected one of "+O+"."))}return V(s)}function Ee(t){function s(g,b,v,x,m){if(typeof t!="function")return new $("Property `"+m+"` of component `"+v+"` has invalid PropType notation inside objectOf.");var h=g[b],E=H(h);if(E!=="object")return new $("Invalid "+x+" `"+m+"` of type "+("`"+E+"` supplied to `"+v+"`, expected an object."));for(var O in h)if(p(h,O)){var _=t(h,O,v,x,m+"."+O,I);if(_ instanceof Error)return _}return null}return V(s)}function ue(t){if(!Array.isArray(t))return process.env.NODE_ENV!=="production"&&l("Invalid argument supplied to oneOfType, expected an instance of array."),w;for(var s=0;s<t.length;s++){var g=t[s];if(typeof g!="function")return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ie(g)+" at index "+s+"."),w}function b(v,x,m,h,E){for(var O=[],_=0;_<t.length;_++){var N=t[_],n=N(v,x,m,h,E,I);if(n==null)return null;n.data&&p(n.data,"expectedType")&&O.push(n.data.expectedType)}var Z=O.length>0?", expected one of type ["+O.join(", ")+"]":"";return new $("Invalid "+h+" `"+E+"` supplied to "+("`"+m+"`"+Z+"."))}return V(b)}function _e(){function t(s,g,b,v,x){return K(s[g])?null:new $("Invalid "+v+" `"+x+"` supplied to "+("`"+b+"`, expected a ReactNode."))}return V(t)}function fe(t,s,g,b,v){return new $((t||"React class")+": "+s+" type `"+g+"."+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+v+"`.")}function le(t){function s(g,b,v,x,m){var h=g[b],E=H(h);if(E!=="object")return new $("Invalid "+x+" `"+m+"` of type `"+E+"` "+("supplied to `"+v+"`, expected `object`."));for(var O in t){var _=t[O];if(typeof _!="function")return fe(v,x,m,O,te(_));var N=_(h,O,v,x,m+"."+O,I);if(N)return N}return null}return V(s)}function J(t){function s(g,b,v,x,m){var h=g[b],E=H(h);if(E!=="object")return new $("Invalid "+x+" `"+m+"` of type `"+E+"` "+("supplied to `"+v+"`, expected `object`."));var O=M({},g[b],t);for(var _ in O){var N=t[_];if(p(t,_)&&typeof N!="function")return fe(v,x,m,_,te(N));if(!N)return new $("Invalid "+x+" `"+m+"` key `"+_+"` supplied to `"+v+"`.\nBad object: "+JSON.stringify(g[b],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(t),null,"  "));var n=N(h,_,v,x,m+"."+_,I);if(n)return n}return null}return V(s)}function K(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(K);if(t===null||d(t))return!0;var s=u(t);if(s){var g=s.call(t),b;if(s!==t.entries){for(;!(b=g.next()).done;)if(!K(b.value))return!1}else for(;!(b=g.next()).done;){var v=b.value;if(v&&!K(v[1]))return!1}}else return!1;return!0;default:return!1}}function ae(t,s){return t==="symbol"?!0:s?s["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&s instanceof Symbol:!1}function H(t){var s=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":ae(s,t)?"symbol":s}function te(t){if(typeof t>"u"||t===null)return""+t;var s=H(t);if(s==="object"){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return s}function ie(t){var s=te(t);switch(s){case"array":case"object":return"an "+s;case"boolean":case"date":case"regexp":return"a "+s;default:return s}}function de(t){return!t.constructor||!t.constructor.name?C:t.constructor.name}return F.checkPropTypes=P,F.resetWarningCache=P.resetWarningCache,F.PropTypes=F,F},Ie}var Me,er;function Rr(){if(er)return Me;er=1;var i=je();function M(){}function I(){}return I.resetWarningCache=M,Me=function(){function p(w,d,y,R,c,u){if(u!==i){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}p.isRequired=p;function P(){return p}var l={array:p,bigint:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:P,element:p,elementType:p,instanceOf:P,node:p,objectOf:P,oneOf:P,oneOfType:P,shape:P,exact:P,checkPropTypes:I,resetWarningCache:M};return l.PropTypes=l,l},Me}if(process.env.NODE_ENV!=="production"){var Cr=Ge(),xr=!0;we.exports=Tr()(Cr.isElement,xr)}else we.exports=Rr()();var Sr=we.exports;const re=yr(Sr),wr="data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23485806'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='64px'%20height='64px'%20viewBox='0%200%20587.91%20587.91'%20xml:space='preserve'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M86.451,501.46c26.937,26.936,58.315,48.088,93.265,62.871c36.207,15.314,74.642,23.078,114.239,23.078%20c39.596,0,78.032-7.764,114.239-23.078c34.949-14.783,66.328-35.936,93.266-62.871c26.936-26.938,48.09-58.316,62.871-93.266%20c15.314-36.207,23.08-74.643,23.08-114.238c0-39.598-7.766-78.033-23.08-114.239c-14.781-34.95-35.936-66.328-62.871-93.265%20c-26.938-26.937-58.316-48.09-93.266-62.872C371.986,8.265,333.551,0.501,293.955,0.501c-39.597,0-78.032,7.765-114.239,23.079%20c-34.95,14.782-66.328,35.936-93.265,62.872s-48.09,58.315-62.873,93.264C8.265,215.923,0.5,254.358,0.5,293.956%20c0,39.596,7.765,78.031,23.079,114.238C38.361,443.144,59.515,474.522,86.451,501.46z%20M293.955,43.341%20c138.411,0,250.614,112.204,250.614,250.615c0,138.41-112.203,250.613-250.614,250.613S43.34,432.366,43.34,293.956%20C43.34,155.545,155.544,43.341,293.955,43.341z'/%3e%3cpath%20d='M293.955,587.909c-39.667,0-78.167-7.778-114.434-23.117c-35.01-14.809-66.442-35.998-93.423-62.979%20c-26.983-26.984-48.172-58.417-62.979-93.425C7.778,372.119,0,333.618,0,293.956c0-39.663,7.778-78.165,23.118-114.435%20c14.807-35.008,35.997-66.44,62.979-93.423c26.982-26.983,58.415-48.172,93.423-62.979c36.27-15.34,74.771-23.118,114.434-23.118%20c39.666,0,78.167,7.778,114.433,23.119c35.009,14.807,66.441,35.997,93.425,62.979c26.984,26.985,48.173,58.417,62.979,93.423%20c15.341,36.27,23.119,74.771,23.119,114.434c0,39.662-7.778,78.163-23.119,114.433c-14.806,35.007-35.994,66.439-62.979,93.425%20c-26.982,26.98-58.415,48.169-93.425,62.979C372.121,580.131,333.62,587.909,293.955,587.909z%20M293.955,1.001%20c-39.529,0-77.898,7.751-114.044,23.039c-34.889,14.757-66.215,35.874-93.106,62.765c-26.892,26.892-48.009,58.217-62.766,93.105%20C8.751,216.057,1,254.427,1,293.956C1,333.483,8.751,371.854,24.039,408c14.757,34.889,35.874,66.214,62.766,93.106%20c26.89,26.889,58.215,48.006,93.106,62.765c36.142,15.287,74.512,23.038,114.044,23.038s77.901-7.751,114.044-23.039%20c34.89-14.758,66.216-35.875,93.106-62.764c26.893-26.895,48.009-58.22,62.764-93.106%20c15.289-36.146,23.041-74.516,23.041-114.044c0-39.529-7.752-77.899-23.041-114.044c-14.754-34.887-35.871-66.212-62.764-93.106%20c-26.892-26.891-58.218-48.008-93.106-62.765C371.855,8.752,333.485,1.001,293.955,1.001z%20M293.955,545.069%20c-67.075,0-130.136-26.12-177.565-73.549c-47.429-47.43-73.55-110.489-73.55-177.564S68.96,163.82,116.39,116.391%20c47.429-47.429,110.49-73.55,177.565-73.55c67.075,0,130.135,26.121,177.564,73.55c47.43,47.43,73.55,110.49,73.55,177.565%20s-26.12,130.135-73.55,177.564C424.09,518.949,361.029,545.069,293.955,545.069z%20M293.955,43.841%20c-66.808,0-129.617,26.017-176.858,73.257c-47.24,47.241-73.257,110.05-73.257,176.858c0,66.808,26.017,129.617,73.257,176.856%20c47.24,47.24,110.05,73.257,176.858,73.257s129.617-26.017,176.857-73.257c47.24-47.239,73.257-110.049,73.257-176.856%20c0-66.808-26.017-129.618-73.257-176.858C423.571,69.857,360.763,43.841,293.955,43.841z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M184.92,402.989c4.183,4.184,9.664,6.275,15.146,6.275c5.482,0,10.964-2.092,15.146-6.275l78.742-78.742l78.743,78.742%20c4.182,4.184,9.664,6.275,15.146,6.275s10.963-2.092,15.146-6.275c8.365-8.363,8.365-21.926,0-30.291l-78.744-78.742%20l78.742-78.743c8.365-8.365,8.365-21.928,0-30.292c-8.363-8.365-21.926-8.365-30.291,0l-78.743,78.743l-78.742-78.743%20c-8.365-8.365-21.928-8.365-30.292,0c-8.365,8.365-8.365,21.927,0,30.292l78.743,78.743l-78.743,78.742%20C176.555,381.063,176.555,394.626,184.92,402.989z'/%3e%3cpath%20d='M387.844,409.765c-5.856,0-11.36-2.28-15.5-6.422l-78.389-78.389l-78.388,78.389c-4.14,4.142-9.645,6.422-15.5,6.422%20s-11.36-2.28-15.5-6.422c-4.14-4.14-6.42-9.644-6.42-15.498c0-5.855,2.28-11.359,6.42-15.5l78.389-78.389l-78.389-78.389%20c-8.546-8.547-8.546-22.453,0-31c4.14-4.14,9.644-6.42,15.5-6.42c5.855,0,11.36,2.28,15.5,6.42l78.389,78.389l78.389-78.389%20c4.141-4.14,9.645-6.42,15.5-6.42c5.854,0,11.358,2.28,15.498,6.42c4.141,4.14,6.42,9.645,6.42,15.5s-2.279,11.36-6.42,15.5%20l-78.389,78.389l78.391,78.389c4.141,4.141,6.421,9.645,6.421,15.5c0,5.854-2.28,11.358-6.421,15.498%20C399.202,407.484,393.698,409.765,387.844,409.765z%20M293.955,323.54l79.096,79.096c3.95,3.952,9.204,6.129,14.793,6.129%20c5.587,0,10.841-2.177,14.793-6.129c3.951-3.95,6.128-9.203,6.128-14.791s-2.177-10.842-6.128-14.793l-79.098-79.096%20l79.096-79.096c3.951-3.951,6.127-9.205,6.127-14.793s-2.176-10.841-6.127-14.792c-3.95-3.951-9.203-6.127-14.791-6.127%20s-10.842,2.176-14.793,6.127l-79.096,79.096l-79.096-79.096c-3.951-3.951-9.205-6.127-14.793-6.127%20c-5.588,0-10.841,2.176-14.792,6.127c-8.156,8.157-8.156,21.428,0,29.585l79.096,79.096l-79.096,79.096%20c-3.951,3.951-6.127,9.205-6.127,14.793s2.176,10.841,6.127,14.791c3.952,3.952,9.205,6.129,14.793,6.129%20s10.841-2.177,14.793-6.129L293.955,323.54z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",rr=({isOpen:i,onClose:M,title:I,onConfirmClick:p,confirmLabel:P="Confirm",showCancelButton:l=!0,cancelButtonLabel:w="Cancel",showCloseButtonIcon:d=!1,closeButtonIcon:y=wr,children:R})=>{const c=ee.useRef();return ee.useEffect(()=>{var C;const u=document.getElementById("root");i?(u.setAttribute("aria-hidden","true"),u.classList.add("modal-open"),(C=c.current)==null||C.focus()):(u.setAttribute("aria-hidden","false"),u.classList.remove("modal-open"))},[i]),ee.useEffect(()=>{const u=C=>{C.key==="Escape"&&M(),document.activeElement.id==="firstFocusedDiv"&&C.key==="Tab"&&C.shiftKey&&M()};return i?window.addEventListener("keydown",u):window.removeEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[i,M]),i?me.createPortal(ne.jsx("div",{"data-testid":"firstFocusedDiv",id:"firstFocusedDiv",tabIndex:0,ref:c,className:"rsmj_Overlay",role:"dialog","aria-modal":"true",children:ne.jsxs("div",{className:"rsmj_Modal",children:[ne.jsx("h1",{id:"modal-h1",className:"rsmj_Title",children:I}),ne.jsx("section",{className:"rsmj_ChildrenSection",children:R}),ne.jsxs("section",{className:"rsmj_ButtonSection",children:[p&&ne.jsx("button",{className:"rsmj_ConfirmButton",onClick:p,children:P}),l&&ne.jsx("button",{className:"rsmj_CancelButton",onClick:M,children:w}),d&&ne.jsx("button",{"data-testid":"closeIconButton",className:"rsmj_CloseButton",onClick:M,children:ne.jsx("img",{src:y,alt:"close icon",className:"rsmj_CloseButtonIcon"})})]})]})}),document.body):null};return rr.propTypes={isOpen:re.bool.isRequired,onClose:re.func.isRequired,title:re.string.isRequired,cancelButtonLabel:re.string,showCloseButtonIcon:re.bool,showCancelButton:re.bool,onConfirmClick:re.func,confirmLabel:re.string,children:re.node,closeButtonIcon:re.string},rr});
