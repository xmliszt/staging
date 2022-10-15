(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Pc(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const dv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pv=Pc(dv);function Jf(t){return!!t||t===""}function Ln(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ce(r)?vv(r):Ln(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ce(t))return t;if(Te(t))return t}}const mv=/;(?![^(]*\))/g,gv=/:(.+)/;function vv(t){const e={};return t.split(mv).forEach(n=>{if(n){const r=n.split(gv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gn(t){let e="";if(Ce(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Gn(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fn=t=>Ce(t)?t:t==null?"":q(t)||Te(t)&&(t.toString===nd||!K(t.toString))?JSON.stringify(t,Zf,2):String(t),Zf=(t,e)=>e&&e.__v_isRef?Zf(t,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!q(e)&&!rd(e)?String(e):e,ae={},lr=[],pt=()=>{},yv=()=>!1,bv=/^on[^a-z]/,so=t=>bv.test(t),Mc=t=>t.startsWith("onUpdate:"),qe=Object.assign,Lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wv=Object.prototype.hasOwnProperty,J=(t,e)=>wv.call(t,e),q=Array.isArray,ur=t=>oo(t)==="[object Map]",ed=t=>oo(t)==="[object Set]",K=t=>typeof t=="function",Ce=t=>typeof t=="string",Fc=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",td=t=>Te(t)&&K(t.then)&&K(t.catch),nd=Object.prototype.toString,oo=t=>nd.call(t),_v=t=>oo(t).slice(8,-1),rd=t=>oo(t)==="[object Object]",Uc=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,us=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ao=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ev=/-(\w)/g,At=ao(t=>t.replace(Ev,(e,n)=>n?n.toUpperCase():"")),Iv=/\B([A-Z])/g,Cr=ao(t=>t.replace(Iv,"-$1").toLowerCase()),co=ao(t=>t.charAt(0).toUpperCase()+t.slice(1)),ea=ao(t=>t?`on${co(t)}`:""),Ts=(t,e)=>!Object.is(t,e),ta=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ss=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cu;const Sv=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yt;class kv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&yt&&(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Cv(t,e=yt){e&&e.active&&e.effects.push(t)}const $c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},id=t=>(t.w&un)>0,sd=t=>(t.n&un)>0,Av=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=un},xv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];id(i)&&!sd(i)?i.delete(t):e[n++]=i,i.w&=~un,i.n&=~un}e.length=n}},Oa=new WeakMap;let zr=0,un=1;const Ra=30;let lt;const On=Symbol(""),Na=Symbol("");class Bc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cv(this,r)}run(){if(!this.active)return this.fn();let e=lt,n=sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=lt,lt=this,sn=!0,un=1<<++zr,zr<=Ra?Av(this):Au(this),this.fn()}finally{zr<=Ra&&xv(this),un=1<<--zr,lt=this.parent,sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){lt===this?this.deferStop=!0:this.active&&(Au(this),this.onStop&&this.onStop(),this.active=!1)}}function Au(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let sn=!0;const od=[];function Ar(){od.push(sn),sn=!1}function xr(){const t=od.pop();sn=t===void 0?!0:t}function rt(t,e,n){if(sn&&lt){let r=Oa.get(t);r||Oa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=$c()),ad(i)}}function ad(t,e){let n=!1;zr<=Ra?sd(t)||(t.n|=un,n=!id(t)):n=!t.has(lt),n&&(t.add(lt),lt.deps.push(t))}function $t(t,e,n,r,i,s){const o=Oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Uc(n)&&a.push(o.get("length")):(a.push(o.get(On)),ur(t)&&a.push(o.get(Na)));break;case"delete":q(t)||(a.push(o.get(On)),ur(t)&&a.push(o.get(Na)));break;case"set":ur(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&Da(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Da($c(c))}}function Da(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&xu(r);for(const r of n)r.computed||xu(r)}function xu(t,e){(t!==lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ov=Pc("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fc)),Rv=Vc(),Nv=Vc(!1,!0),Dv=Vc(!0),Ou=Pv();function Pv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let s=0,o=this.length;s<o;s++)rt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ar();const r=ie(this)[e].apply(this,n);return xr(),r}}),t}function Vc(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Xv:dd:e?fd:hd).get(r))return r;const o=q(r);if(!t&&o&&J(Ou,i))return Reflect.get(Ou,i,s);const a=Reflect.get(r,i,s);return(Fc(i)?cd.has(i):Ov(i))||(t||rt(r,"get",i),e)?a:ze(a)?o&&Uc(i)?a:a.value:Te(a)?t?pd(a):Hc(a):a}}const Mv=ld(),Lv=ld(!0);function ld(t=!1){return function(n,r,i,s){let o=n[r];if(ci(o)&&ze(o)&&!ze(i))return!1;if(!t&&!ci(i)&&(Pa(i)||(i=ie(i),o=ie(o)),!q(n)&&ze(o)&&!ze(i)))return o.value=i,!0;const a=q(n)&&Uc(r)?Number(r)<n.length:J(n,r),c=Reflect.set(n,r,i,s);return n===ie(s)&&(a?Ts(i,o)&&$t(n,"set",r,i):$t(n,"add",r,i)),c}}function Fv(t,e){const n=J(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&$t(t,"delete",e,void 0),r}function Uv(t,e){const n=Reflect.has(t,e);return(!Fc(e)||!cd.has(e))&&rt(t,"has",e),n}function $v(t){return rt(t,"iterate",q(t)?"length":On),Reflect.ownKeys(t)}const ud={get:Rv,set:Mv,deleteProperty:Fv,has:Uv,ownKeys:$v},Bv={get:Dv,set(t,e){return!0},deleteProperty(t,e){return!0}},Vv=qe({},ud,{get:Nv,set:Lv}),jc=t=>t,lo=t=>Reflect.getPrototypeOf(t);function Xi(t,e,n=!1,r=!1){t=t.__v_raw;const i=ie(t),s=ie(e);n||(e!==s&&rt(i,"get",e),rt(i,"get",s));const{has:o}=lo(i),a=r?jc:n?Wc:Kc;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Qi(t,e=!1){const n=this.__v_raw,r=ie(n),i=ie(t);return e||(t!==i&&rt(r,"has",t),rt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ji(t,e=!1){return t=t.__v_raw,!e&&rt(ie(t),"iterate",On),Reflect.get(t,"size",t)}function Ru(t){t=ie(t);const e=ie(this);return lo(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Nu(t,e){e=ie(e);const n=ie(this),{has:r,get:i}=lo(n);let s=r.call(n,t);s||(t=ie(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ts(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function Du(t){const e=ie(this),{has:n,get:r}=lo(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&$t(e,"delete",t,void 0),s}function Pu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function Zi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ie(o),c=e?jc:t?Wc:Kc;return!t&&rt(a,"iterate",On),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function es(t,e,n){return function(...r){const i=this.__v_raw,s=ie(i),o=ur(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?jc:e?Wc:Kc;return!e&&rt(s,"iterate",c?Na:On),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function jv(){const t={get(s){return Xi(this,s)},get size(){return Ji(this)},has:Qi,add:Ru,set:Nu,delete:Du,clear:Pu,forEach:Zi(!1,!1)},e={get(s){return Xi(this,s,!1,!0)},get size(){return Ji(this)},has:Qi,add:Ru,set:Nu,delete:Du,clear:Pu,forEach:Zi(!1,!0)},n={get(s){return Xi(this,s,!0)},get size(){return Ji(this,!0)},has(s){return Qi.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Zi(!0,!1)},r={get(s){return Xi(this,s,!0,!0)},get size(){return Ji(this,!0)},has(s){return Qi.call(this,s,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=es(s,!1,!1),n[s]=es(s,!0,!1),e[s]=es(s,!1,!0),r[s]=es(s,!0,!0)}),[t,n,e,r]}const[zv,Hv,qv,Kv]=jv();function zc(t,e){const n=e?t?Kv:qv:t?Hv:zv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(J(n,i)&&i in r?n:r,i,s)}const Wv={get:zc(!1,!1)},Gv={get:zc(!1,!0)},Yv={get:zc(!0,!1)},hd=new WeakMap,fd=new WeakMap,dd=new WeakMap,Xv=new WeakMap;function Qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Qv(_v(t))}function Hc(t){return ci(t)?t:qc(t,!1,ud,Wv,hd)}function Zv(t){return qc(t,!1,Vv,Gv,fd)}function pd(t){return qc(t,!0,Bv,Yv,dd)}function qc(t,e,n,r,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Jv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function hr(t){return ci(t)?hr(t.__v_raw):!!(t&&t.__v_isReactive)}function ci(t){return!!(t&&t.__v_isReadonly)}function Pa(t){return!!(t&&t.__v_isShallow)}function md(t){return hr(t)||ci(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function gd(t){return Ss(t,"__v_skip",!0),t}const Kc=t=>Te(t)?Hc(t):t,Wc=t=>Te(t)?pd(t):t;function ey(t){sn&&lt&&(t=ie(t),ad(t.dep||(t.dep=$c())))}function ty(t,e){t=ie(t),t.dep&&Da(t.dep)}function ze(t){return!!(t&&t.__v_isRef===!0)}function ny(t){return ze(t)?t.value:t}const ry={get:(t,e,n)=>ny(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return ze(i)&&!ze(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function vd(t){return hr(t)?t:new Proxy(t,ry)}class iy{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Bc(e,()=>{this._dirty||(this._dirty=!0,ty(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ie(this);return ey(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sy(t,e,n=!1){let r,i;const s=K(t);return s?(r=t,i=pt):(r=t.get,i=t.set),new iy(r,i,s||!i,n)}function on(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){uo(s,e,n)}return i}function mt(t,e,n,r){if(K(t)){const s=on(t,e,n,r);return s&&td(s)&&s.catch(o=>{uo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(mt(t[s],e,n,r));return i}function uo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}oy(t,n,i,r)}function oy(t,e,n,r=!0){console.error(t)}let ks=!1,Ma=!1;const nt=[];let Mt=0;const Yr=[];let Hr=null,nr=0;const Xr=[];let Zt=null,rr=0;const yd=Promise.resolve();let Gc=null,La=null;function ay(t){const e=Gc||yd;return t?e.then(this?t.bind(this):t):e}function cy(t){let e=Mt+1,n=nt.length;for(;e<n;){const r=e+n>>>1;li(nt[r])<t?e=r+1:n=r}return e}function bd(t){(!nt.length||!nt.includes(t,ks&&t.allowRecurse?Mt+1:Mt))&&t!==La&&(t.id==null?nt.push(t):nt.splice(cy(t.id),0,t),wd())}function wd(){!ks&&!Ma&&(Ma=!0,Gc=yd.then(Id))}function ly(t){const e=nt.indexOf(t);e>Mt&&nt.splice(e,1)}function _d(t,e,n,r){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),wd()}function uy(t){_d(t,Hr,Yr,nr)}function hy(t){_d(t,Zt,Xr,rr)}function ho(t,e=null){if(Yr.length){for(La=e,Hr=[...new Set(Yr)],Yr.length=0,nr=0;nr<Hr.length;nr++)Hr[nr]();Hr=null,nr=0,La=null,ho(t,e)}}function Ed(t){if(ho(),Xr.length){const e=[...new Set(Xr)];if(Xr.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,r)=>li(n)-li(r)),rr=0;rr<Zt.length;rr++)Zt[rr]();Zt=null,rr=0}}const li=t=>t.id==null?1/0:t.id;function Id(t){Ma=!1,ks=!0,ho(t),nt.sort((n,r)=>li(n)-li(r));const e=pt;try{for(Mt=0;Mt<nt.length;Mt++){const n=nt[Mt];n&&n.active!==!1&&on(n,null,14)}}finally{Mt=0,nt.length=0,Ed(),ks=!1,Gc=null,(nt.length||Yr.length||Xr.length)&&Id(t)}}function fy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ae;p&&(i=n.map(m=>m.trim())),h&&(i=n.map(Tv))}let a,c=r[a=ea(e)]||r[a=ea(At(e))];!c&&s&&(c=r[a=ea(Cr(e))]),c&&mt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(l,t,6,i)}}function Td(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=Td(l,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(q(s)?s.forEach(c=>o[c]=null):qe(o,s),r.set(t,o),o)}function fo(t,e){return!t||!so(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,Cr(e))||J(t,e))}let Et=null,po=null;function Cs(t){const e=Et;return Et=t,po=t&&t.type.__scopeId||null,e}function Ci(t){po=t}function Ai(){po=null}function dy(t,e=Et,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Hu(-1);const s=Cs(e),o=t(...i);return Cs(s),r._d&&Hu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function na(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:_,inheritAttrs:D}=t;let I,v;const C=Cs(t);try{if(n.shapeFlag&4){const M=i||r;I=bt(u.call(M,M,h,s,m,p,_)),v=c}else{const M=e;I=bt(M.length>1?M(s,{attrs:c,slots:a,emit:l}):M(s,null)),v=e.props?c:py(c)}}catch(M){Qr.length=0,uo(M,t,1),I=he(ui)}let N=I;if(v&&D!==!1){const M=Object.keys(v),{shapeFlag:Y}=N;M.length&&Y&7&&(o&&M.some(Mc)&&(v=my(v,o)),N=vr(N,v))}return n.dirs&&(N=vr(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,Cs(C),I}const py=t=>{let e;for(const n in t)(n==="class"||n==="style"||so(n))&&((e||(e={}))[n]=t[n]);return e},my=(t,e)=>{const n={};for(const r in t)(!Mc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gy(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mu(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!fo(l,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Mu(r,o,l):!0:!!o;return!1}function Mu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!fo(n,s))return!0}return!1}function vy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yy=t=>t.__isSuspense;function by(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):hy(t)}function wy(t,e){if(De){let n=De.provides;const r=De.parent&&De.parent.provides;r===n&&(n=De.provides=Object.create(r)),n[t]=e}}function ra(t,e,n=!1){const r=De||Et;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(r.proxy):e}}const Lu={};function hs(t,e,n){return Sd(t,e,n)}function Sd(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ae){const a=De;let c,l=!1,u=!1;if(ze(t)?(c=()=>t.value,l=Pa(t)):hr(t)?(c=()=>t,r=!0):q(t)?(u=!0,l=t.some(v=>hr(v)||Pa(v)),c=()=>t.map(v=>{if(ze(v))return v.value;if(hr(v))return ir(v);if(K(v))return on(v,a,2)})):K(t)?e?c=()=>on(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[p])}:c=pt,e&&r){const v=c;c=()=>ir(v())}let h,p=v=>{h=I.onStop=()=>{on(v,a,4)}};if(fi)return p=pt,e?n&&mt(e,a,3,[c(),u?[]:void 0,p]):c(),pt;let m=u?[]:Lu;const _=()=>{if(!!I.active)if(e){const v=I.run();(r||l||(u?v.some((C,N)=>Ts(C,m[N])):Ts(v,m)))&&(h&&h(),mt(e,a,3,[v,m===Lu?void 0:m,p]),m=v)}else I.run()};_.allowRecurse=!!e;let D;i==="sync"?D=_:i==="post"?D=()=>Ge(_,a&&a.suspense):D=()=>uy(_);const I=new Bc(c,D);return e?n?_():m=I.run():i==="post"?Ge(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&Lc(a.scope.effects,I)}}function _y(t,e,n){const r=this.proxy,i=Ce(t)?t.includes(".")?kd(r,t):()=>r[t]:t.bind(r,r);let s;K(e)?s=e:(s=e.handler,n=e);const o=De;yr(this);const a=Sd(i,s.bind(r),n);return o?yr(o):Rn(),a}function kd(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ir(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))ir(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(ed(t)||ur(t))t.forEach(n=>{ir(n,e)});else if(rd(t))for(const n in t)ir(t[n],e);return t}function Yc(t){return K(t)?{setup:t,name:t.name}:t}const fs=t=>!!t.type.__asyncLoader,Cd=t=>t.type.__isKeepAlive;function Ey(t,e){Ad(t,"a",e)}function Iy(t,e){Ad(t,"da",e)}function Ad(t,e,n=De){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Cd(i.parent.vnode)&&Ty(r,e,n,i),i=i.parent}}function Ty(t,e,n,r){const i=mo(e,t,r,!0);xd(()=>{Lc(r[e],i)},n)}function mo(t,e,n=De,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ar(),yr(n);const a=mt(e,n,t,o);return Rn(),xr(),a});return r?i.unshift(s):i.push(s),s}}const Wt=t=>(e,n=De)=>(!fi||t==="sp")&&mo(t,e,n),Sy=Wt("bm"),ky=Wt("m"),Cy=Wt("bu"),Ay=Wt("u"),xy=Wt("bum"),xd=Wt("um"),Oy=Wt("sp"),Ry=Wt("rtg"),Ny=Wt("rtc");function Dy(t,e=De){mo("ec",t,e)}function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ar(),mt(c,n,8,[t.el,a,t,e]),xr())}}const Od="components";function et(t,e){return My(Od,t,!0,e)||t}const Py=Symbol();function My(t,e,n=!0,r=!1){const i=Et||De;if(i){const s=i.type;if(t===Od){const a=u0(s,!1);if(a&&(a===e||a===At(e)||a===co(At(e))))return s}const o=Fu(i[t]||s[t],e)||Fu(i.appContext[t],e);return!o&&r?s:o}}function Fu(t,e){return t&&(t[e]||t[At(e)]||t[co(At(e))])}function As(t,e,n,r){let i;const s=n&&n[r];if(q(t)||Ce(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Fa=t=>t?zd(t)?Zc(t)||t.proxy:Fa(t.parent):null,xs=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fa(t.parent),$root:t=>Fa(t.root),$emit:t=>t.emit,$options:t=>Nd(t),$forceUpdate:t=>t.f||(t.f=()=>bd(t.update)),$nextTick:t=>t.n||(t.n=ay.bind(t.proxy)),$watch:t=>_y.bind(t)}),Ly={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ae&&J(r,e))return o[e]=1,r[e];if(i!==ae&&J(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,s[e];if(n!==ae&&J(n,e))return o[e]=4,n[e];Ua&&(o[e]=0)}}const u=xs[e];let h,p;if(u)return e==="$attrs"&&rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&J(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ae&&J(i,e)?(i[e]=n,!0):r!==ae&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ae&&J(t,o)||e!==ae&&J(e,o)||(a=s[0])&&J(a,o)||J(r,o)||J(xs,o)||J(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ua=!0;function Fy(t){const e=Nd(t),n=t.proxy,r=t.ctx;Ua=!1,e.beforeCreate&&Uu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:_,activated:D,deactivated:I,beforeDestroy:v,beforeUnmount:C,destroyed:N,unmounted:M,render:Y,renderTracked:ce,renderTriggered:ge,errorCaptured:Ue,serverPrefetch:Se,expose:bn,inheritAttrs:Qn,components:Ur,directives:Gi,filters:_u}=e;if(l&&Uy(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];K(le)&&(r[me]=le.bind(n))}if(i){const me=i.call(n,n);Te(me)&&(t.data=Hc(me))}if(Ua=!0,s)for(const me in s){const le=s[me],Dt=K(le)?le.bind(n,n):K(le.get)?le.get.bind(n,n):pt,Qo=!K(le)&&K(le.set)?le.set.bind(n):pt,$r=ot({get:Dt,set:Qo});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>$r.value,set:Jn=>$r.value=Jn})}if(a)for(const me in a)Rd(a[me],r,n,me);if(c){const me=K(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{wy(le,me[le])})}u&&Uu(u,t,"c");function Ke(me,le){q(le)?le.forEach(Dt=>me(Dt.bind(n))):le&&me(le.bind(n))}if(Ke(Sy,h),Ke(ky,p),Ke(Cy,m),Ke(Ay,_),Ke(Ey,D),Ke(Iy,I),Ke(Dy,Ue),Ke(Ny,ce),Ke(Ry,ge),Ke(xy,C),Ke(xd,M),Ke(Oy,Se),q(bn))if(bn.length){const me=t.exposed||(t.exposed={});bn.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:Dt=>n[le]=Dt})})}else t.exposed||(t.exposed={});Y&&t.render===pt&&(t.render=Y),Qn!=null&&(t.inheritAttrs=Qn),Ur&&(t.components=Ur),Gi&&(t.directives=Gi)}function Uy(t,e,n=pt,r=!1){q(t)&&(t=$a(t));for(const i in t){const s=t[i];let o;Te(s)?"default"in s?o=ra(s.from||i,s.default,!0):o=ra(s.from||i):o=ra(s),ze(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Uu(t,e,n){mt(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rd(t,e,n,r){const i=r.includes(".")?kd(n,r):()=>n[r];if(Ce(t)){const s=e[t];K(s)&&hs(i,s)}else if(K(t))hs(i,t.bind(n));else if(Te(t))if(q(t))t.forEach(s=>Rd(s,e,n,r));else{const s=K(t.handler)?t.handler.bind(n):e[t.handler];K(s)&&hs(i,s,t)}}function Nd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Os(c,l,o,!0)),Os(c,e,o)),s.set(e,c),c}function Os(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Os(t,s,n,!0),i&&i.forEach(o=>Os(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=$y[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $y={data:$u,props:En,emits:En,methods:En,computed:En,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:En,directives:En,watch:Vy,provide:$u,inject:By};function $u(t,e){return e?t?function(){return qe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function By(t,e){return En($a(t),$a(e))}function $a(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?qe(qe(Object.create(null),t),e):e}function Vy(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=Be(t[r],e[r]);return n}function jy(t,e,n,r=!1){const i={},s={};Ss(s,go,1),t.propsDefaults=Object.create(null),Dd(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Zv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function zy(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ie(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(fo(t.emitsOptions,p))continue;const m=e[p];if(c)if(J(s,p))m!==s[p]&&(s[p]=m,l=!0);else{const _=At(p);i[_]=Ba(c,a,_,m,t,!1)}else m!==s[p]&&(s[p]=m,l=!0)}}}else{Dd(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!J(e,h)&&((u=Cr(h))===h||!J(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ba(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!J(e,h)&&!0)&&(delete s[h],l=!0)}l&&$t(t,"set","$attrs")}function Dd(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(us(c))continue;const l=e[c];let u;i&&J(i,u=At(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:fo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ie(n),l=a||ae;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Ba(i,c,h,l[h],t,!J(l,h))}}return o}function Ba(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=J(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(yr(i),r=l[n]=c.call(null,e),Rn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}function Pd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!K(t)){const u=h=>{c=!0;const[p,m]=Pd(h,e,!0);qe(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,lr),lr;if(q(s))for(let u=0;u<s.length;u++){const h=At(s[u]);Bu(h)&&(o[h]=ae)}else if(s)for(const u in s){const h=At(u);if(Bu(h)){const p=s[u],m=o[h]=q(p)||K(p)?{type:p}:p;if(m){const _=zu(Boolean,m.type),D=zu(String,m.type);m[0]=_>-1,m[1]=D<0||_<D,(_>-1||J(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Bu(t){return t[0]!=="$"}function Vu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ju(t,e){return Vu(t)===Vu(e)}function zu(t,e){return q(e)?e.findIndex(n=>ju(n,t)):K(e)&&ju(e,t)?0:-1}const Md=t=>t[0]==="_"||t==="$stable",Xc=t=>q(t)?t.map(bt):[bt(t)],Hy=(t,e,n)=>{if(e._n)return e;const r=dy((...i)=>Xc(e(...i)),n);return r._c=!1,r},Ld=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Md(i))continue;const s=t[i];if(K(s))e[i]=Hy(i,s,r);else if(s!=null){const o=Xc(s);e[i]=()=>o}}},Fd=(t,e)=>{const n=Xc(e);t.slots.default=()=>n},qy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Ss(e,"_",n)):Ld(e,t.slots={})}else t.slots={},e&&Fd(t,e);Ss(t.slots,go,1)},Ky=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(qe(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Ld(e,i)),o=e}else e&&(Fd(t,e),o={default:1});if(s)for(const a in i)!Md(a)&&!(a in o)&&delete i[a]};function Ud(){return{app:null,config:{isNativeTag:yv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Gy(t,e){return function(r,i=null){K(r)||(r=Object.assign({},r)),i!=null&&!Te(i)&&(i=null);const s=Ud(),o=new Set;let a=!1;const c=s.app={_uid:Wy++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:f0,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const p=he(r,i);return p.appContext=s,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Zc(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Va(t,e,n,r,i=!1){if(q(t)){t.forEach((p,m)=>Va(p,e&&(q(e)?e[m]:e),n,r,i));return}if(fs(r)&&!i)return;const s=r.shapeFlag&4?Zc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ce(l)?(u[l]=null,J(h,l)&&(h[l]=null)):ze(l)&&(l.value=null)),K(c))on(c,a,12,[o,u]);else{const p=Ce(c),m=ze(c);if(p||m){const _=()=>{if(t.f){const D=p?u[c]:c.value;i?q(D)&&Lc(D,s):q(D)?D.includes(s)||D.push(s):p?(u[c]=[s],J(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,J(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,Ge(_,n)):_()}}}const Ge=by;function Yy(t){return Xy(t)}function Xy(t,e){const n=Sv();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=pt,cloneNode:_,insertStaticContent:D}=t,I=(f,d,g,b=null,y=null,S=null,x=!1,T=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!Vr(f,d)&&(b=Yi(f),Yt(f,y,S,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:w,ref:F,shapeFlag:P}=d;switch(w){case Qc:v(f,d,g,b);break;case ui:C(f,d,g,b);break;case ia:f==null&&N(d,g,b,x);break;case tt:Gi(f,d,g,b,y,S,x,T,k);break;default:P&1?ce(f,d,g,b,y,S,x,T,k):P&6?_u(f,d,g,b,y,S,x,T,k):(P&64||P&128)&&w.process(f,d,g,b,y,S,x,T,k,Zn)}F!=null&&y&&Va(F,f&&f.ref,S,d||f,!d)},v=(f,d,g,b)=>{if(f==null)r(d.el=a(d.children),g,b);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},C=(f,d,g,b)=>{f==null?r(d.el=c(d.children||""),g,b):d.el=f.el},N=(f,d,g,b)=>{[f.el,f.anchor]=D(f.children,d,g,b,f.el,f.anchor)},M=({el:f,anchor:d},g,b)=>{let y;for(;f&&f!==d;)y=p(f),r(f,g,b),f=y;r(d,g,b)},Y=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),i(f),f=g;i(d)},ce=(f,d,g,b,y,S,x,T,k)=>{x=x||d.type==="svg",f==null?ge(d,g,b,y,S,x,T,k):bn(f,d,y,S,x,T,k)},ge=(f,d,g,b,y,S,x,T)=>{let k,w;const{type:F,props:P,shapeFlag:U,transition:z,patchFlag:Z,dirs:se}=f;if(f.el&&_!==void 0&&Z===-1)k=f.el=_(f.el);else{if(k=f.el=o(f.type,S,P&&P.is,P),U&8?u(k,f.children):U&16&&Se(f.children,k,null,b,y,S&&F!=="foreignObject",x,T),se&&wn(f,null,b,"created"),P){for(const ue in P)ue!=="value"&&!us(ue)&&s(k,ue,null,P[ue],S,f.children,b,y,Pt);"value"in P&&s(k,"value",null,P.value),(w=P.onVnodeBeforeMount)&&vt(w,b,f)}Ue(k,f,f.scopeId,x,b)}se&&wn(f,null,b,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&z&&!z.persisted;oe&&z.beforeEnter(k),r(k,d,g),((w=P&&P.onVnodeMounted)||oe||se)&&Ge(()=>{w&&vt(w,b,f),oe&&z.enter(k),se&&wn(f,null,b,"mounted")},y)},Ue=(f,d,g,b,y)=>{if(g&&m(f,g),b)for(let S=0;S<b.length;S++)m(f,b[S]);if(y){let S=y.subTree;if(d===S){const x=y.vnode;Ue(f,x,x.scopeId,x.slotScopeIds,y.parent)}}},Se=(f,d,g,b,y,S,x,T,k=0)=>{for(let w=k;w<f.length;w++){const F=f[w]=T?en(f[w]):bt(f[w]);I(null,F,d,g,b,y,S,x,T)}},bn=(f,d,g,b,y,S,x)=>{const T=d.el=f.el;let{patchFlag:k,dynamicChildren:w,dirs:F}=d;k|=f.patchFlag&16;const P=f.props||ae,U=d.props||ae;let z;g&&_n(g,!1),(z=U.onVnodeBeforeUpdate)&&vt(z,g,d,f),F&&wn(d,f,g,"beforeUpdate"),g&&_n(g,!0);const Z=y&&d.type!=="foreignObject";if(w?Qn(f.dynamicChildren,w,T,g,b,Z,S):x||Dt(f,d,T,null,g,b,Z,S,!1),k>0){if(k&16)Ur(T,d,P,U,g,b,y);else if(k&2&&P.class!==U.class&&s(T,"class",null,U.class,y),k&4&&s(T,"style",P.style,U.style,y),k&8){const se=d.dynamicProps;for(let oe=0;oe<se.length;oe++){const ue=se[oe],ct=P[ue],er=U[ue];(er!==ct||ue==="value")&&s(T,ue,ct,er,y,f.children,g,b,Pt)}}k&1&&f.children!==d.children&&u(T,d.children)}else!x&&w==null&&Ur(T,d,P,U,g,b,y);((z=U.onVnodeUpdated)||F)&&Ge(()=>{z&&vt(z,g,d,f),F&&wn(d,f,g,"updated")},b)},Qn=(f,d,g,b,y,S,x)=>{for(let T=0;T<d.length;T++){const k=f[T],w=d[T],F=k.el&&(k.type===tt||!Vr(k,w)||k.shapeFlag&70)?h(k.el):g;I(k,w,F,null,b,y,S,x,!0)}},Ur=(f,d,g,b,y,S,x)=>{if(g!==b){for(const T in b){if(us(T))continue;const k=b[T],w=g[T];k!==w&&T!=="value"&&s(f,T,w,k,x,d.children,y,S,Pt)}if(g!==ae)for(const T in g)!us(T)&&!(T in b)&&s(f,T,g[T],null,x,d.children,y,S,Pt);"value"in b&&s(f,"value",g.value,b.value)}},Gi=(f,d,g,b,y,S,x,T,k)=>{const w=d.el=f?f.el:a(""),F=d.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:z}=d;z&&(T=T?T.concat(z):z),f==null?(r(w,g,b),r(F,g,b),Se(d.children,g,F,y,S,x,T,k)):P>0&&P&64&&U&&f.dynamicChildren?(Qn(f.dynamicChildren,U,g,y,S,x,T),(d.key!=null||y&&d===y.subTree)&&$d(f,d,!0)):Dt(f,d,g,F,y,S,x,T,k)},_u=(f,d,g,b,y,S,x,T,k)=>{d.slotScopeIds=T,f==null?d.shapeFlag&512?y.ctx.activate(d,g,b,x,k):Xo(d,g,b,y,S,x,k):Ke(f,d,k)},Xo=(f,d,g,b,y,S,x)=>{const T=f.component=s0(f,b,y);if(Cd(f)&&(T.ctx.renderer=Zn),o0(T),T.asyncDep){if(y&&y.registerDep(T,me),!f.el){const k=T.subTree=he(ui);C(null,k,d,g)}return}me(T,f,d,g,y,S,x)},Ke=(f,d,g)=>{const b=d.component=f.component;if(gy(f,d,g))if(b.asyncDep&&!b.asyncResolved){le(b,d,g);return}else b.next=d,ly(b.update),b.update();else d.el=f.el,b.vnode=d},me=(f,d,g,b,y,S,x)=>{const T=()=>{if(f.isMounted){let{next:F,bu:P,u:U,parent:z,vnode:Z}=f,se=F,oe;_n(f,!1),F?(F.el=Z.el,le(f,F,x)):F=Z,P&&ta(P),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&vt(oe,z,F,Z),_n(f,!0);const ue=na(f),ct=f.subTree;f.subTree=ue,I(ct,ue,h(ct.el),Yi(ct),f,y,S),F.el=ue.el,se===null&&vy(f,ue.el),U&&Ge(U,y),(oe=F.props&&F.props.onVnodeUpdated)&&Ge(()=>vt(oe,z,F,Z),y)}else{let F;const{el:P,props:U}=d,{bm:z,m:Z,parent:se}=f,oe=fs(d);if(_n(f,!1),z&&ta(z),!oe&&(F=U&&U.onVnodeBeforeMount)&&vt(F,se,d),_n(f,!0),P&&Zo){const ue=()=>{f.subTree=na(f),Zo(P,f.subTree,f,y,null)};oe?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=na(f);I(null,ue,g,b,f,y,S),d.el=ue.el}if(Z&&Ge(Z,y),!oe&&(F=U&&U.onVnodeMounted)){const ue=d;Ge(()=>vt(F,se,ue),y)}(d.shapeFlag&256||se&&fs(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Ge(f.a,y),f.isMounted=!0,d=g=b=null}},k=f.effect=new Bc(T,()=>bd(w),f.scope),w=f.update=()=>k.run();w.id=f.uid,_n(f,!0),w()},le=(f,d,g)=>{d.component=f;const b=f.vnode.props;f.vnode=d,f.next=null,zy(f,d.props,b,g),Ky(f,d.children,g),Ar(),ho(void 0,f.update),xr()},Dt=(f,d,g,b,y,S,x,T,k=!1)=>{const w=f&&f.children,F=f?f.shapeFlag:0,P=d.children,{patchFlag:U,shapeFlag:z}=d;if(U>0){if(U&128){$r(w,P,g,b,y,S,x,T,k);return}else if(U&256){Qo(w,P,g,b,y,S,x,T,k);return}}z&8?(F&16&&Pt(w,y,S),P!==w&&u(g,P)):F&16?z&16?$r(w,P,g,b,y,S,x,T,k):Pt(w,y,S,!0):(F&8&&u(g,""),z&16&&Se(P,g,b,y,S,x,T,k))},Qo=(f,d,g,b,y,S,x,T,k)=>{f=f||lr,d=d||lr;const w=f.length,F=d.length,P=Math.min(w,F);let U;for(U=0;U<P;U++){const z=d[U]=k?en(d[U]):bt(d[U]);I(f[U],z,g,null,y,S,x,T,k)}w>F?Pt(f,y,S,!0,!1,P):Se(d,g,b,y,S,x,T,k,P)},$r=(f,d,g,b,y,S,x,T,k)=>{let w=0;const F=d.length;let P=f.length-1,U=F-1;for(;w<=P&&w<=U;){const z=f[w],Z=d[w]=k?en(d[w]):bt(d[w]);if(Vr(z,Z))I(z,Z,g,null,y,S,x,T,k);else break;w++}for(;w<=P&&w<=U;){const z=f[P],Z=d[U]=k?en(d[U]):bt(d[U]);if(Vr(z,Z))I(z,Z,g,null,y,S,x,T,k);else break;P--,U--}if(w>P){if(w<=U){const z=U+1,Z=z<F?d[z].el:b;for(;w<=U;)I(null,d[w]=k?en(d[w]):bt(d[w]),g,Z,y,S,x,T,k),w++}}else if(w>U)for(;w<=P;)Yt(f[w],y,S,!0),w++;else{const z=w,Z=w,se=new Map;for(w=Z;w<=U;w++){const Ze=d[w]=k?en(d[w]):bt(d[w]);Ze.key!=null&&se.set(Ze.key,w)}let oe,ue=0;const ct=U-Z+1;let er=!1,Tu=0;const Br=new Array(ct);for(w=0;w<ct;w++)Br[w]=0;for(w=z;w<=P;w++){const Ze=f[w];if(ue>=ct){Yt(Ze,y,S,!0);continue}let gt;if(Ze.key!=null)gt=se.get(Ze.key);else for(oe=Z;oe<=U;oe++)if(Br[oe-Z]===0&&Vr(Ze,d[oe])){gt=oe;break}gt===void 0?Yt(Ze,y,S,!0):(Br[gt-Z]=w+1,gt>=Tu?Tu=gt:er=!0,I(Ze,d[gt],g,null,y,S,x,T,k),ue++)}const Su=er?Qy(Br):lr;for(oe=Su.length-1,w=ct-1;w>=0;w--){const Ze=Z+w,gt=d[Ze],ku=Ze+1<F?d[Ze+1].el:b;Br[w]===0?I(null,gt,g,ku,y,S,x,T,k):er&&(oe<0||w!==Su[oe]?Jn(gt,g,ku,2):oe--)}}},Jn=(f,d,g,b,y=null)=>{const{el:S,type:x,transition:T,children:k,shapeFlag:w}=f;if(w&6){Jn(f.component.subTree,d,g,b);return}if(w&128){f.suspense.move(d,g,b);return}if(w&64){x.move(f,d,g,Zn);return}if(x===tt){r(S,d,g);for(let P=0;P<k.length;P++)Jn(k[P],d,g,b);r(f.anchor,d,g);return}if(x===ia){M(f,d,g);return}if(b!==2&&w&1&&T)if(b===0)T.beforeEnter(S),r(S,d,g),Ge(()=>T.enter(S),y);else{const{leave:P,delayLeave:U,afterLeave:z}=T,Z=()=>r(S,d,g),se=()=>{P(S,()=>{Z(),z&&z()})};U?U(S,Z,se):se()}else r(S,d,g)},Yt=(f,d,g,b=!1,y=!1)=>{const{type:S,props:x,ref:T,children:k,dynamicChildren:w,shapeFlag:F,patchFlag:P,dirs:U}=f;if(T!=null&&Va(T,null,g,f,!0),F&256){d.ctx.deactivate(f);return}const z=F&1&&U,Z=!fs(f);let se;if(Z&&(se=x&&x.onVnodeBeforeUnmount)&&vt(se,d,f),F&6)fv(f.component,g,b);else{if(F&128){f.suspense.unmount(g,b);return}z&&wn(f,null,d,"beforeUnmount"),F&64?f.type.remove(f,d,g,y,Zn,b):w&&(S!==tt||P>0&&P&64)?Pt(w,d,g,!1,!0):(S===tt&&P&384||!y&&F&16)&&Pt(k,d,g),b&&Eu(f)}(Z&&(se=x&&x.onVnodeUnmounted)||z)&&Ge(()=>{se&&vt(se,d,f),z&&wn(f,null,d,"unmounted")},g)},Eu=f=>{const{type:d,el:g,anchor:b,transition:y}=f;if(d===tt){hv(g,b);return}if(d===ia){Y(f);return}const S=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:T}=y,k=()=>x(g,S);T?T(f.el,S,k):k()}else S()},hv=(f,d)=>{let g;for(;f!==d;)g=p(f),i(f),f=g;i(d)},fv=(f,d,g)=>{const{bum:b,scope:y,update:S,subTree:x,um:T}=f;b&&ta(b),y.stop(),S&&(S.active=!1,Yt(x,f,d,g)),T&&Ge(T,d),Ge(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Pt=(f,d,g,b=!1,y=!1,S=0)=>{for(let x=S;x<f.length;x++)Yt(f[x],d,g,b,y)},Yi=f=>f.shapeFlag&6?Yi(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Iu=(f,d,g)=>{f==null?d._vnode&&Yt(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,g),Ed(),d._vnode=f},Zn={p:I,um:Yt,m:Jn,r:Eu,mt:Xo,mc:Se,pc:Dt,pbc:Qn,n:Yi,o:t};let Jo,Zo;return e&&([Jo,Zo]=e(Zn)),{render:Iu,hydrate:Jo,createApp:Gy(Iu,Jo)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $d(t,e,n=!1){const r=t.children,i=e.children;if(q(r)&&q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=en(i[s]),a.el=o.el),n||$d(o,a))}}function Qy(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Jy=t=>t.__isTeleport,tt=Symbol(void 0),Qc=Symbol(void 0),ui=Symbol(void 0),ia=Symbol(void 0),Qr=[];let ht=null;function ve(t=!1){Qr.push(ht=t?null:[])}function Zy(){Qr.pop(),ht=Qr[Qr.length-1]||null}let hi=1;function Hu(t){hi+=t}function Bd(t){return t.dynamicChildren=hi>0?ht||lr:null,Zy(),hi>0&&ht&&ht.push(t),t}function Ee(t,e,n,r,i,s){return Bd(W(t,e,n,r,i,s,!0))}function qu(t,e,n,r,i){return Bd(he(t,e,n,r,i,!0))}function ja(t){return t?t.__v_isVNode===!0:!1}function Vr(t,e){return t.type===e.type&&t.key===e.key}const go="__vInternal",Vd=({key:t})=>t!=null?t:null,ds=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ce(t)||ze(t)||K(t)?{i:Et,r:t,k:e,f:!!n}:t:null;function W(t,e=null,n=null,r=0,i=null,s=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vd(e),ref:e&&ds(e),scopeId:po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Jc(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),hi>0&&!o&&ht&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ht.push(c),c}const he=e0;function e0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Py)&&(t=ui),ja(t)){const a=vr(t,e,!0);return n&&Jc(a,n),hi>0&&!s&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag|=-2,a}if(h0(t)&&(t=t.__vccOpts),e){e=t0(e);let{class:a,style:c}=e;a&&!Ce(a)&&(e.class=Gn(a)),Te(c)&&(md(c)&&!q(c)&&(c=qe({},c)),e.style=Ln(c))}const o=Ce(t)?1:yy(t)?128:Jy(t)?64:Te(t)?4:K(t)?2:0;return W(t,e,n,r,i,o,s,!0)}function t0(t){return t?md(t)||go in t?qe({},t):t:null}function vr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?n0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Vd(a),ref:e&&e.ref?n&&i?q(i)?i.concat(ds(e)):[i,ds(e)]:ds(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vr(t.ssContent),ssFallback:t.ssFallback&&vr(t.ssFallback),el:t.el,anchor:t.anchor}}function jd(t=" ",e=0){return he(Qc,null,t,e)}function bt(t){return t==null||typeof t=="boolean"?he(ui):q(t)?he(tt,null,t.slice()):typeof t=="object"?en(t):he(Qc,null,String(t))}function en(t){return t.el===null||t.memo?t:vr(t)}function Jc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Jc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(go in e)?e._ctx=Et:i===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[jd(e)]):n=8);t.children=e,t.shapeFlag|=n}function n0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Gn([e.class,r.class]));else if(i==="style")e.style=Ln([e.style,r.style]);else if(so(i)){const s=e[i],o=r[i];o&&s!==o&&!(q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function vt(t,e,n,r=null){mt(t,e,7,[n,r])}const r0=Ud();let i0=0;function s0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||r0,s={uid:i0++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(r,i),emitsOptions:Td(r,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fy.bind(null,s),t.ce&&t.ce(s),s}let De=null;const yr=t=>{De=t,t.scope.on()},Rn=()=>{De&&De.scope.off(),De=null};function zd(t){return t.vnode.shapeFlag&4}let fi=!1;function o0(t,e=!1){fi=e;const{props:n,children:r}=t.vnode,i=zd(t);jy(t,n,i,e),qy(t,r);const s=i?a0(t,e):void 0;return fi=!1,s}function a0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gd(new Proxy(t.ctx,Ly));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?l0(t):null;yr(t),Ar();const s=on(r,t,0,[t.props,i]);if(xr(),Rn(),td(s)){if(s.then(Rn,Rn),e)return s.then(o=>{Ku(t,o,e)}).catch(o=>{uo(o,t,0)});t.asyncDep=s}else Ku(t,s,e)}else Hd(t,e)}function Ku(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=vd(e)),Hd(t,n)}let Wu;function Hd(t,e,n){const r=t.type;if(!t.render){if(!e&&Wu&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=qe(qe({isCustomElement:s,delimiters:a},o),c);r.render=Wu(i,l)}}t.render=r.render||pt}yr(t),Ar(),Fy(t),xr(),Rn()}function c0(t){return new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}})}function l0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=c0(t))},slots:t.slots,emit:t.emit,expose:e}}function Zc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vd(gd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)}}))}function u0(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function h0(t){return K(t)&&"__vccOpts"in t}const ot=(t,e)=>sy(t,e,fi);function qd(t,e,n){const r=arguments.length;return r===2?Te(e)&&!q(e)?ja(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ja(n)&&(n=[n]),he(t,e,n))}const f0="3.2.37",d0="http://www.w3.org/2000/svg",Tn=typeof document<"u"?document:null,Gu=Tn&&Tn.createElement("template"),p0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Tn.createElementNS(d0,t):Tn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Gu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Gu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function m0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function g0(t,e,n){const r=t.style,i=Ce(n);if(n&&!i){for(const s in n)za(r,s,n[s]);if(e&&!Ce(e))for(const s in e)n[s]==null&&za(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Yu=/\s*!important$/;function za(t,e,n){if(q(n))n.forEach(r=>za(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=v0(t,e);Yu.test(n)?t.setProperty(Cr(r),n.replace(Yu,""),"important"):t[r]=n}}const Xu=["Webkit","Moz","ms"],sa={};function v0(t,e){const n=sa[e];if(n)return n;let r=At(e);if(r!=="filter"&&r in t)return sa[e]=r;r=co(r);for(let i=0;i<Xu.length;i++){const s=Xu[i]+r;if(s in t)return sa[e]=s}return e}const Qu="http://www.w3.org/1999/xlink";function y0(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qu,e.slice(6,e.length)):t.setAttributeNS(Qu,e,n);else{const s=pv(e);n==null||s&&!Jf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function b0(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Kd,w0]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ha=0;const _0=Promise.resolve(),E0=()=>{Ha=0},I0=()=>Ha||(_0.then(E0),Ha=Kd());function T0(t,e,n,r){t.addEventListener(e,n,r)}function S0(t,e,n,r){t.removeEventListener(e,n,r)}function k0(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=C0(e);if(r){const l=s[e]=A0(r,i);T0(t,a,l,c)}else o&&(S0(t,a,o,c),s[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function C0(t){let e;if(Ju.test(t)){e={};let n;for(;n=t.match(Ju);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Cr(t.slice(2)),e]}function A0(t,e){const n=r=>{const i=r.timeStamp||Kd();(w0||i>=n.attached-1)&&mt(x0(r,n.value),e,5,[r])};return n.value=t,n.attached=I0(),n}function x0(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Zu=/^on[a-z]/,O0=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?m0(t,r,i):e==="style"?g0(t,n,r):so(e)?Mc(e)||k0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):R0(t,e,r,i))?b0(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),y0(t,e,r,i))};function R0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Zu.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zu.test(e)&&Ce(n)?!1:e in t}const N0=qe({patchProp:O0},p0);let eh;function D0(){return eh||(eh=Yy(N0))}const P0=(...t)=>{const e=D0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=M0(r);if(!i)return;const s=e._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function M0(t){return Ce(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function th(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?th(Object(n),!0).forEach(function(r){U0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):th(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rs(t){return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rs(t)}function L0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nh(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F0(t,e,n){return e&&nh(t.prototype,e),n&&nh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function U0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function el(t,e){return B0(t)||j0(t,e)||Wd(t,e)||H0()}function vo(t){return $0(t)||V0(t)||Wd(t)||z0()}function $0(t){if(Array.isArray(t))return qa(t)}function B0(t){if(Array.isArray(t))return t}function V0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function j0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Wd(t,e){if(!!t){if(typeof t=="string")return qa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qa(t,e)}}function qa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rh=function(){},tl={},Gd={},Yd=null,Xd={mark:rh,measure:rh};try{typeof window<"u"&&(tl=window),typeof document<"u"&&(Gd=document),typeof MutationObserver<"u"&&(Yd=MutationObserver),typeof performance<"u"&&(Xd=performance)}catch{}var q0=tl.navigator||{},ih=q0.userAgent,sh=ih===void 0?"":ih,hn=tl,fe=Gd,oh=Yd,ts=Xd;hn.document;var Gt=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",Qd=~sh.indexOf("MSIE")||~sh.indexOf("Trident/"),Bt="___FONT_AWESOME___",Ka=16,Jd="fa",Zd="svg-inline--fa",Un="data-fa-i2svg",Wa="data-fa-pseudo-element",K0="data-fa-pseudo-element-pending",nl="data-prefix",rl="data-icon",ah="fontawesome-i2svg",W0="async",G0=["HTML","HEAD","STYLE","SCRIPT"],ep=function(){try{return!0}catch{return!1}}(),il={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Ns={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},tp={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Y0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},X0=/fa[srltdbk]?[\-\ ]/,np="fa-layers-text",Q0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,J0={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},rp=[1,2,3,4,5,6,7,8,9,10],Z0=rp.concat([11,12,13,14,15,16,17,18,19,20]),eb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Sn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tb=[].concat(vo(Object.keys(Ns)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sn.GROUP,Sn.SWAP_OPACITY,Sn.PRIMARY,Sn.SECONDARY]).concat(rp.map(function(t){return"".concat(t,"x")})).concat(Z0.map(function(t){return"w-".concat(t)})),ip=hn.FontAwesomeConfig||{};function nb(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function rb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var ib=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ib.forEach(function(t){var e=el(t,2),n=e[0],r=e[1],i=rb(nb(n));i!=null&&(ip[r]=i)})}var sb={familyPrefix:Jd,styleDefault:"solid",replacementClass:Zd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Jr=O(O({},sb),ip);Jr.autoReplaceSvg||(Jr.observeMutations=!1);var $={};Object.keys(Jr).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Jr[t]=n,ps.forEach(function(r){return r($)})},get:function(){return Jr[t]}})});hn.FontAwesomeConfig=$;var ps=[];function ob(t){return ps.push(t),function(){ps.splice(ps.indexOf(t),1)}}var Qt=Ka,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ab(t){if(!(!t||!Gt)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var cb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function di(){for(var t=12,e="";t-- >0;)e+=cb[Math.random()*62|0];return e}function Or(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sl(t){return t.classList?Or(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(sp(t[n]),'" ')},"").trim()}function yo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ol(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function ub(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function hb(t){var e=t.transform,n=t.width,r=n===void 0?Ka:n,i=t.height,s=i===void 0?Ka:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Qd?c+="translate(".concat(e.x/Qt-r/2,"em, ").concat(e.y/Qt-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Qt,"em), calc(-50% + ").concat(e.y/Qt,"em)) "):c+="translate(".concat(e.x/Qt,"em, ").concat(e.y/Qt,"em) "),c+="scale(".concat(e.size/Qt*(e.flipX?-1:1),", ").concat(e.size/Qt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var fb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function op(){var t=Jd,e=Zd,n=$.familyPrefix,r=$.replacementClass,i=fb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ch=!1;function oa(){$.autoAddCss&&!ch&&(ab(op()),ch=!0)}var db={mixout:function(){return{dom:{css:op,insertCss:oa}}},hooks:function(){return{beforeDOMElementCreation:function(){oa()},beforeI2svg:function(){oa()}}}},Vt=hn||{};Vt[Bt]||(Vt[Bt]={});Vt[Bt].styles||(Vt[Bt].styles={});Vt[Bt].hooks||(Vt[Bt].hooks={});Vt[Bt].shims||(Vt[Bt].shims=[]);var ft=Vt[Bt],ap=[],pb=function t(){fe.removeEventListener("DOMContentLoaded",t),Ds=1,ap.map(function(e){return e()})},Ds=!1;Gt&&(Ds=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Ds||fe.addEventListener("DOMContentLoaded",pb));function mb(t){!Gt||(Ds?setTimeout(t,0):ap.push(t))}function xi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?sp(t):"<".concat(e," ").concat(lb(r),">").concat(s.map(xi).join(""),"</").concat(e,">")}function lh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gb=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},aa=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?gb(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function vb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ga(t){var e=vb(t);return e.length===1?e[0].toString(16):null}function yb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function uh(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ya(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=uh(e);typeof ft.hooks.addPack=="function"&&!i?ft.hooks.addPack(t,uh(e)):ft.styles[t]=O(O({},ft.styles[t]||{}),s),t==="fas"&&Ya("fa",e)}var Zr=ft.styles,bb=ft.shims,wb=Object.values(tp),al=null,cp={},lp={},up={},hp={},fp={},_b=Object.keys(il);function Eb(t){return~tb.indexOf(t)}function Ib(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Eb(i)?i:null}var dp=function(){var e=function(s){return aa(Zr,function(o,a,c){return o[c]=aa(a,s,{}),o},{})};cp=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),lp=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),fp=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Zr||$.autoFetchSvg,r=aa(bb,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});up=r.names,hp=r.unicodes,al=bo($.styleDefault)};ob(function(t){al=bo(t.styleDefault)});dp();function cl(t,e){return(cp[t]||{})[e]}function Tb(t,e){return(lp[t]||{})[e]}function sr(t,e){return(fp[t]||{})[e]}function pp(t){return up[t]||{prefix:null,iconName:null}}function Sb(t){var e=hp[t],n=cl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fn(){return al}var ll=function(){return{prefix:null,iconName:null,rest:[]}};function bo(t){var e=il[t],n=Ns[t]||Ns[e],r=t in ft.styles?t:null;return n||r||null}function wo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var c=Ib($.familyPrefix,a);if(Zr[a]?(a=wb.includes(a)?Y0[a]:a,i=a,o.prefix=a):_b.indexOf(a)>-1?(i=a,o.prefix=bo(a)):c?o.iconName=c:a!==$.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var l=i==="fa"?pp(o.iconName):{},u=sr(o.prefix,o.iconName);l.prefix&&(i=null),o.iconName=l.iconName||u||o.iconName,o.prefix=l.prefix||o.prefix,o.prefix==="far"&&!Zr.far&&Zr.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},ll());return(s.prefix==="fa"||i==="fa")&&(s.prefix=fn()||"fas"),s}var kb=function(){function t(){L0(this,t),this.definitions={}}return F0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Ya(a,o[a]);var c=tp[a];c&&Ya(c,o[a]),dp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),hh=[],or={},fr={},Cb=Object.keys(fr);function Ab(t,e){var n=e.mixoutsTo;return hh=t,or={},Object.keys(fr).forEach(function(r){Cb.indexOf(r)===-1&&delete fr[r]}),hh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Rs(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){or[o]||(or[o]=[]),or[o].push(s[o])})}r.provides&&r.provides(fr)}),n}function Xa(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=or[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function $n(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=or[t]||[];i.forEach(function(s){s.apply(null,n)})}function jt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return fr[t]?fr[t].apply(null,e):void 0}function Qa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||fn();if(!!e)return e=sr(n,e)||e,lh(mp.definitions,n,e)||lh(ft.styles,n,e)}var mp=new kb,xb=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,$n("noAuto")},Ob={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?($n("beforeI2svg",e),jt("pseudoElements2svg",e),jt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,mb(function(){Nb({autoReplaceSvgRoot:n}),$n("watch",e)})}},Rb={icon:function(e){if(e===null)return null;if(Rs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:sr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=bo(e[0]);return{prefix:r,iconName:sr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.familyPrefix,"-"))>-1||e.match(X0))){var i=wo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||fn(),iconName:sr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=fn();return{prefix:s,iconName:sr(s,e)||e}}}},st={noAuto:xb,config:$,dom:Ob,parse:Rb,library:mp,findIconDefinition:Qa,toHtml:xi},Nb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(ft.styles).length>0||$.autoFetchSvg)&&Gt&&$.autoReplaceSvg&&st.dom.i2svg({node:r})};function _o(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return xi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Gt){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Db(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(ol(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=yo(O(O({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Pb(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function ul(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,p=t.watchable,m=p===void 0?!1:p,_=r.found?r:n,D=_.width,I=_.height,v=i==="fak",C=[$.replacementClass,s?"".concat($.familyPrefix,"-").concat(s):""].filter(function(Se){return h.classes.indexOf(Se)===-1}).filter(function(Se){return Se!==""||!!Se}).concat(h.classes).join(" "),N={children:[],attributes:O(O({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(I)})},M=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(D/I*16*.0625,"em")}:{};m&&(N.attributes[Un]=""),c&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||di())},children:[c]}),delete N.attributes.title);var Y=O(O({},N),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:O(O({},M),h.styles)}),ce=r.found&&n.found?jt("generateAbstractMask",Y)||{children:[],attributes:{}}:jt("generateAbstractIcon",Y)||{children:[],attributes:{}},ge=ce.children,Ue=ce.attributes;return Y.children=ge,Y.attributes=Ue,a?Pb(Y):Db(Y)}function fh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Un]="");var u=O({},o.styles);ol(i)&&(u.transform=hb({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=yo(u);h.length>0&&(l.style=h);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Mb(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=yo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ca=ft.styles;function Ja(t){var e=t[0],n=t[1],r=t.slice(4),i=el(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(Sn.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Sn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Sn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Lb={found:!1,width:512,height:512};function Fb(t,e){!ep&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Za(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=fn()),new Promise(function(r,i){if(jt("missingIconAbstract"),n==="fa"){var s=pp(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ca[e]&&ca[e][t]){var o=ca[e][t];return r(Ja(o))}Fb(t,e),r(O(O({},Lb),{},{icon:$.showMissingIcons&&t?jt("missingIconAbstract")||{}:{}}))})}var dh=function(){},ec=$.measurePerformance&&ts&&ts.mark&&ts.measure?ts:{mark:dh,measure:dh},qr='FA "6.1.2"',Ub=function(e){return ec.mark("".concat(qr," ").concat(e," begins")),function(){return gp(e)}},gp=function(e){ec.mark("".concat(qr," ").concat(e," ends")),ec.measure("".concat(qr," ").concat(e),"".concat(qr," ").concat(e," begins"),"".concat(qr," ").concat(e," ends"))},hl={begin:Ub,end:gp},ms=function(){};function ph(t){var e=t.getAttribute?t.getAttribute(Un):null;return typeof e=="string"}function $b(t){var e=t.getAttribute?t.getAttribute(nl):null,n=t.getAttribute?t.getAttribute(rl):null;return e&&n}function Bb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function Vb(){if($.autoReplaceSvg===!0)return gs.replace;var t=gs[$.autoReplaceSvg];return t||gs.replace}function jb(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function zb(t){return fe.createElement(t)}function vp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?jb:zb:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(vp(o,{ceFn:r}))}),i}function Hb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var gs={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(vp(i),n)}),n.getAttribute(Un)===null&&$.keepOriginalSource){var r=fe.createComment(Hb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~sl(n).indexOf($.replacementClass))return gs.replace(e);var i=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===$.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return xi(a)}).join(`
`);n.setAttribute(Un,""),n.innerHTML=o}};function mh(t){t()}function yp(t,e){var n=typeof e=="function"?e:ms;if(t.length===0)n();else{var r=mh;$.mutateApproach===W0&&(r=hn.requestAnimationFrame||mh),r(function(){var i=Vb(),s=hl.begin("mutate");t.map(i),s(),n()})}}var fl=!1;function bp(){fl=!0}function tc(){fl=!1}var Ps=null;function gh(t){if(!!oh&&!!$.observeMutations){var e=t.treeCallback,n=e===void 0?ms:e,r=t.nodeCallback,i=r===void 0?ms:r,s=t.pseudoElementsCallback,o=s===void 0?ms:s,a=t.observeMutationsRoot,c=a===void 0?fe:a;Ps=new oh(function(l){if(!fl){var u=fn();Or(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ph(h.addedNodes[0])&&($.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&$.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&ph(h.target)&&~eb.indexOf(h.attributeName))if(h.attributeName==="class"&&$b(h.target)){var p=wo(sl(h.target)),m=p.prefix,_=p.iconName;h.target.setAttribute(nl,m||u),_&&h.target.setAttribute(rl,_)}else Bb(h.target)&&i(h.target)})}}),Gt&&Ps.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function qb(){!Ps||Ps.disconnect()}function Kb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Wb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=wo(sl(t));return i.prefix||(i.prefix=fn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Tb(i.prefix,t.innerText)||cl(i.prefix,Ga(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Gb(t){var e=Or(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||di()):(e["aria-hidden"]="true",e.focusable="false")),e}function Yb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wb(t),r=n.iconName,i=n.prefix,s=n.rest,o=Gb(t),a=Xa("parseNodeAttributes",{},t),c=e.styleParser?Kb(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var Xb=ft.styles;function wp(t){var e=$.autoReplaceSvg==="nest"?vh(t,{styleParser:!1}):vh(t);return~e.extra.classes.indexOf(np)?jt("generateLayersText",t,e):jt("generateSvgReplacementMutation",t,e)}function yh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=fe.documentElement.classList,r=function(h){return n.add("".concat(ah,"-").concat(h))},i=function(h){return n.remove("".concat(ah,"-").concat(h))},s=$.autoFetchSvg?Object.keys(il):Object.keys(Xb);s.includes("fa")||s.push("fa");var o=[".".concat(np,":not([").concat(Un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Or(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=hl.begin("onTree"),l=a.reduce(function(u,h){try{var p=wp(h);p&&u.push(p)}catch(m){ep||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(p){yp(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(p){c(),h(p)})})}function Qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wp(t).then(function(n){n&&yp([n],e)})}function Jb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Qa(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Qa(i||{})),t(r,O(O({},n),{},{mask:i}))}}var Zb=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?It:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,p=h===void 0?null:h,m=n.titleId,_=m===void 0?null:m,D=n.classes,I=D===void 0?[]:D,v=n.attributes,C=v===void 0?{}:v,N=n.styles,M=N===void 0?{}:N;if(!!e){var Y=e.prefix,ce=e.iconName,ge=e.icon;return _o(O({type:"icon"},e),function(){return $n("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(p?C["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(_||di()):(C["aria-hidden"]="true",C.focusable="false")),ul({icons:{main:Ja(ge),mask:c?Ja(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ce,transform:O(O({},It),i),symbol:o,title:p,maskId:u,titleId:_,extra:{attributes:C,styles:M,classes:I}})})}},ew={mixout:function(){return{icon:Jb(Zb)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yh,n.nodeCallback=Qb,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return yh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,p=r.extra;return new Promise(function(m,_){Promise.all([Za(i,a),u.iconName?Za(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var I=el(D,2),v=I[0],C=I[1];m([n,ul({icons:{main:v,mask:C},prefix:a,iconName:i,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:p,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=yo(a);c.length>0&&(i.style=c);var l;return ol(o)&&(l=jt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},tw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return _o({type:"layer"},function(){$n("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(vo(s)).join(" ")},children:o}]})}}}},nw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return _o({type:"counter",content:n},function(){return $n("beforeDOMElementCreation",{content:n,params:r}),Mb({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat($.familyPrefix,"-layers-counter")].concat(vo(a))}})})}}}},rw={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?It:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,p=r.styles,m=p===void 0?{}:p;return _o({type:"text",content:n},function(){return $n("beforeDOMElementCreation",{content:n,params:r}),fh({content:n,transform:O(O({},It),s),title:a,extra:{attributes:h,styles:m,classes:["".concat($.familyPrefix,"-layers-text")].concat(vo(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(Qd){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fh({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},iw=new RegExp('"',"ug"),bh=[1105920,1112319];function sw(t){var e=t.replace(iw,""),n=yb(e,0),r=n>=bh[0]&&n<=bh[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ga(i?e[0]:e),isSecondary:r||i}}function wh(t,e){var n="".concat(K0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Or(t.children),o=s.filter(function(ce){return ce.getAttribute(Wa)===e})[0],a=hn.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(Q0),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Ns[c[2].toLowerCase()]:J0[l],m=sw(h),_=m.value,D=m.isSecondary,I=c[0].startsWith("FontAwesome"),v=cl(p,_),C=v;if(I){var N=Sb(_);N.iconName&&N.prefix&&(v=N.iconName,p=N.prefix)}if(v&&!D&&(!o||o.getAttribute(nl)!==p||o.getAttribute(rl)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var M=Yb(),Y=M.extra;Y.attributes[Wa]=e,Za(v,p).then(function(ce){var ge=ul(O(O({},M),{},{icons:{main:ce,mask:ll()},prefix:p,iconName:C,extra:Y,watchable:!0})),Ue=fe.createElement("svg");e==="::before"?t.insertBefore(Ue,t.firstChild):t.appendChild(Ue),Ue.outerHTML=ge.map(function(Se){return xi(Se)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ow(t){return Promise.all([wh(t,"::before"),wh(t,"::after")])}function aw(t){return t.parentNode!==document.head&&!~G0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wa)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _h(t){if(!!Gt)return new Promise(function(e,n){var r=Or(t.querySelectorAll("*")).filter(aw).map(ow),i=hl.begin("searchPseudoElements");bp(),Promise.all(r).then(function(){i(),tc(),e()}).catch(function(){i(),tc(),n()})})}var cw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_h,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;$.searchPseudoElements&&_h(i)}}},Eh=!1,lw={mixout:function(){return{dom:{unwatch:function(){bp(),Eh=!0}}}},hooks:function(){return{bootstrap:function(){gh(Xa("mutationObserverCallbacks",{}))},noAuto:function(){qb()},watch:function(n){var r=n.observeMutationsRoot;Eh?tc():gh(Xa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ih=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},uw={mixout:function(){return{parse:{transform:function(n){return Ih(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Ih(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:p};return{tag:"g",attributes:O({},m.outer),children:[{tag:"g",attributes:O({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),m.path)}]}]}}}},la={x:0,y:0,width:"100%",height:"100%"};function Th(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function hw(t){return t.tag==="g"?t.children:[t]}var fw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?wo(i.split(" ").map(function(o){return o.trim()})):ll();return s.prefix||(s.prefix=fn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,p=o.icon,m=ub({transform:c,containerWidth:h,iconWidth:l}),_={tag:"rect",attributes:O(O({},la),{},{fill:"white"})},D=u.children?{children:u.children.map(Th)}:{},I={tag:"g",attributes:O({},m.inner),children:[Th(O({tag:u.tag,attributes:O(O({},u.attributes),m.path)},D))]},v={tag:"g",attributes:O({},m.outer),children:[I]},C="mask-".concat(a||di()),N="clip-".concat(a||di()),M={tag:"mask",attributes:O(O({},la),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:hw(p)},M]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},la)}),{children:r,attributes:i}}}},dw={provides:function(e){var n=!1;hn.matchMedia&&(n=hn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},mw=[db,ew,tw,nw,rw,cw,lw,uw,fw,dw,pw];Ab(mw,{mixoutsTo:st});st.noAuto;var _p=st.config,gw=st.library;st.dom;var Ms=st.parse;st.findIconDefinition;st.toHtml;var vw=st.icon;st.layer;var yw=st.text;st.counter;function Sh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sh(Object(n),!0).forEach(function(r){We(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ls(t){return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(t)}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ww(t,e){if(t==null)return{};var n=bw(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function nc(t){return _w(t)||Ew(t)||Iw(t)||Tw()}function _w(t){if(Array.isArray(t))return rc(t)}function Ew(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Iw(t,e){if(!!t){if(typeof t=="string")return rc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return rc(t,e)}}function rc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Tw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ep={exports:{}};(function(t){(function(e){var n=function(v,C,N){if(!l(C)||h(C)||p(C)||m(C)||c(C))return C;var M,Y=0,ce=0;if(u(C))for(M=[],ce=C.length;Y<ce;Y++)M.push(n(v,C[Y],N));else{M={};for(var ge in C)Object.prototype.hasOwnProperty.call(C,ge)&&(M[v(ge,N)]=n(v,C[ge],N))}return M},r=function(v,C){C=C||{};var N=C.separator||"_",M=C.split||/(?=[A-Z])/;return v.split(M).join(N)},i=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var C=i(v);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(v,C){return r(v,C).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},p=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},D=function(v,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?v:function(M,Y){return N(M,v,Y)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,C){return n(D(i,C),v)},decamelizeKeys:function(v,C){return n(D(o,C),v,C)},pascalizeKeys:function(v,C){return n(D(s,C),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(Sw)})(Ep);var kw=Ep.exports,Cw=["class","style"];function Aw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=kw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function xw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function dl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return dl(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=xw(u);break;case"style":c.style=Aw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=ww(n,Cw);return qd(t.tag,ut(ut(ut({},e),{},{class:i.class,style:ut(ut({},i.style),o)},i.attrs),a),r)}var Ip=!1;try{Ip=!0}catch{}function Ow(){if(!Ip&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ei(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?We({},t,e):{}}function Rw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},We(e,"fa-".concat(t.size),t.size!==null),We(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),We(e,"fa-pull-".concat(t.pull),t.pull!==null),We(e,"fa-swap-opacity",t.swapOpacity),We(e,"fa-bounce",t.bounce),We(e,"fa-shake",t.shake),We(e,"fa-beat",t.beat),We(e,"fa-fade",t.fade),We(e,"fa-beat-fade",t.beatFade),We(e,"fa-flash",t.flash),We(e,"fa-spin-pulse",t.spinPulse),We(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function kh(t){if(t&&Ls(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ms.icon)return Ms.icon(t);if(t===null)return null;if(Ls(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Tp=Yc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ot(function(){return kh(e.icon)}),s=ot(function(){return ei("classes",Rw(e))}),o=ot(function(){return ei("transform",typeof e.transform=="string"?Ms.transform(e.transform):e.transform)}),a=ot(function(){return ei("mask",kh(e.mask))}),c=ot(function(){return vw(i.value,ut(ut(ut(ut({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});hs(c,function(u){if(!u)return Ow("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=ot(function(){return c.value?dl(c.value.abstract[0],{},r):null});return function(){return l.value}}});Yc({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=_p.familyPrefix,s=ot(function(){return["".concat(i,"-layers")].concat(nc(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return qd("div",{class:s.value},r.default?r.default():[])}}});Yc({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=_p.familyPrefix,s=ot(function(){return ei("classes",[].concat(nc(e.counter?["".concat(i,"-layers-counter")]:[]),nc(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ot(function(){return ei("transform",typeof e.transform=="string"?Ms.transform(e.transform):e.transform)}),a=ot(function(){var l=yw(e.value.toString(),ut(ut({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=ot(function(){return dl(a.value,{},r)});return function(){return c.value}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const p=s<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dw=function(t){const e=Sp(t);return kp.encodeByteArray(e,!0)},Cp=function(t){return Dw(t).replace(/\./g,"")},Pw=function(t){try{return kp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function xp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lw(){return Ae().indexOf("Electron/")>=0}function Rp(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fw(){return Ae().indexOf("MSAppHost/")>=0}function Uw(){return typeof indexedDB=="object"}function $w(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bw,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function Vw(t,e){return t.replace(jw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jw=/\{\$([^}]+)}/g;function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ch(s)&&Ch(o)){if(!Fs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ch(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hw(t,e){const n=new qw(t,e);return n.subscribe.bind(n)}class qw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yw(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gw(t){return t===In?void 0:t}function Yw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Qw={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Jw=ne.INFO,Zw={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},e_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=Jw,this._logHandler=e_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const t_=(t,e)=>e.some(n=>t instanceof n);let Ah,xh;function n_(){return Ah||(Ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r_(){return xh||(xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,ic=new WeakMap,Dp=new WeakMap,ha=new WeakMap,ml=new WeakMap;function i_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Np.set(n,t)}).catch(()=>{}),ml.set(e,t),e}function s_(t){if(ic.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o_(t){sc=t(sc)}function a_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fa(this),e,...n);return Dp.set(r,e.sort?e.sort():[e]),an(r)}:r_().includes(t)?function(...e){return t.apply(fa(this),e),an(Np.get(this))}:function(...e){return an(t.apply(fa(this),e))}}function c_(t){return typeof t=="function"?a_(t):(t instanceof IDBTransaction&&s_(t),t_(t,n_())?new Proxy(t,sc):t)}function an(t){if(t instanceof IDBRequest)return i_(t);if(ha.has(t))return ha.get(t);const e=c_(t);return e!==t&&(ha.set(t,e),ml.set(e,t)),e}const fa=t=>ml.get(t);function l_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",c=>{r(an(o.result),c.oldVersion,c.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const u_=["get","getKey","getAll","getAllKeys","count"],h_=["put","add","delete","clear"],da=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=h_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||u_.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return da.set(e,s),s}o_(t=>({...t,get:(e,n,r)=>Oh(e,n)||t.get(e,n,r),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",Rh="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new pl("@firebase/app"),p_="@firebase/app-compat",m_="@firebase/analytics-compat",g_="@firebase/analytics",v_="@firebase/app-check-compat",y_="@firebase/app-check",b_="@firebase/auth",w_="@firebase/auth-compat",__="@firebase/database",E_="@firebase/database-compat",I_="@firebase/functions",T_="@firebase/functions-compat",S_="@firebase/installations",k_="@firebase/installations-compat",C_="@firebase/messaging",A_="@firebase/messaging-compat",x_="@firebase/performance",O_="@firebase/performance-compat",R_="@firebase/remote-config",N_="@firebase/remote-config-compat",D_="@firebase/storage",P_="@firebase/storage-compat",M_="@firebase/firestore",L_="@firebase/firestore-compat",F_="firebase",U_="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="[DEFAULT]",$_={[oc]:"fire-core",[p_]:"fire-core-compat",[g_]:"fire-analytics",[m_]:"fire-analytics-compat",[y_]:"fire-app-check",[v_]:"fire-app-check-compat",[b_]:"fire-auth",[w_]:"fire-auth-compat",[__]:"fire-rtdb",[E_]:"fire-rtdb-compat",[I_]:"fire-fn",[T_]:"fire-fn-compat",[S_]:"fire-iid",[k_]:"fire-iid-compat",[C_]:"fire-fcm",[A_]:"fire-fcm-compat",[x_]:"fire-perf",[O_]:"fire-perf-compat",[R_]:"fire-rc",[N_]:"fire-rc-compat",[D_]:"fire-gcs",[P_]:"fire-gcs-compat",[M_]:"fire-fst",[L_]:"fire-fst-compat","fire-js":"fire-js",[F_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map,ac=new Map;function B_(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(ac.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of Us.values())B_(n,t);return!0}function Eo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jn=new Oi("app","Firebase",V_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=U_;function z_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pp,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw jn.create("bad-app-name",{appName:String(r)});const i=Us.get(r);if(i){if(Fs(t,i.options)&&Fs(n,i.config))return i;throw jn.create("duplicate-app",{appName:r})}const s=new Xw(r);for(const a of ac.values())s.addComponent(a);const o=new j_(t,n,s);return Us.set(r,o),o}function gl(t=Pp){const e=Us.get(t);if(!e)throw jn.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=$_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}Vn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="firebase-heartbeat-database",q_=1,pi="firebase-heartbeat-store";let pa=null;function Mp(){return pa||(pa=l_(H_,q_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function K_(t){var e;try{return(await Mp()).transaction(pi).objectStore(pi).get(Lp(t))}catch(n){if(n instanceof Rt)Bn.warn(n.message);else{const r=jn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bn.warn(r.message)}}}async function Nh(t,e){var n;try{const i=(await Mp()).transaction(pi,"readwrite");return await i.objectStore(pi).put(e,Lp(t)),i.done}catch(r){if(r instanceof Rt)Bn.warn(r.message);else{const i=jn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Bn.warn(i.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=1024,G_=30*24*60*60*1e3;class Y_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=G_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dh(),{heartbeatsToSend:n,unsentEntries:r}=X_(this._heartbeatsCache.heartbeats),i=Cp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dh(){return new Date().toISOString().substring(0,10)}function X_(t,e=W_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ph(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ph(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?$w().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await K_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ph(t){return Cp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){Vn(new dn("platform-logger",e=>new f_(e),"PRIVATE")),Vn(new dn("heartbeat",e=>new Y_(e),"PRIVATE")),Tt(oc,Rh,t),Tt(oc,Rh,"esm2017"),Tt("fire-js","")}J_("");var Z_="firebase",e1="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(Z_,e1,"app");function vl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t1=Fp,Up=new Oi("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new pl("@firebase/auth");function vs(t,...e){Mh.logLevel<=ne.ERROR&&Mh.error(`Auth (${Rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw yl(t,...e)}function St(t,...e){return yl(t,...e)}function $p(t,e,n){const r=Object.assign(Object.assign({},t1()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function n1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(t,"argument-error"),$p(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Up.create(t,...e)}function H(t,e,...n){if(!t)throw yl(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vs(e),new Error(e)}function zt(t,e){t||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new Map;function Ft(t){zt(t instanceof Function,"Expected a class definition");let e=Lh.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t,e){const n=Eo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fs(s,e!=null?e:{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function i1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function s1(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||xp()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||Op()}get(){return o1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1=new Ni(3e4,6e4);function u1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Io(t,e,n,r,i={}){return Vp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ri(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Bp.fetch()(jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},c1),e);try{const i=new f1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ns(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $p(t,u,l);xt(t,u)}}catch(i){if(i instanceof Rt)throw i;xt(t,"network-request-failed")}}async function h1(t,e,n,r,i={}){const s=await Io(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bl(t.config,i):`${t.config.apiScheme}://${i}`}class f1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),l1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=St(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){return Io(t,"POST","/v1/accounts:delete",e)}async function p1(t,e){return Io(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m1(t,e=!1){const n=Yn(t),r=await n.getIdToken(e),i=wl(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ti(ma(i.auth_time)),issuedAtTime:ti(ma(i.iat)),expirationTime:ti(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function wl(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pw(r);return s?JSON.parse(s):(vs("Failed to decode base64 JWT payload"),null)}catch(s){return vs("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function g1(t){const e=wl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&v1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function v1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mi(t,p1(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_1(s.providerUserInfo):[],a=w1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function b1(t){const e=Yn(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _1(t){return t.map(e=>{var{providerId:n}=e,r=vl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){const n=await Vp(t,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):g1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await E1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new gi;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return m1(this,e)}reload(){return b1(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,d1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:M,isAnonymous:Y,providerData:ce,stsTokenManager:ge}=n;H(N&&ge,e,"internal-error");const Ue=gi.fromJSON(this.name,ge);H(typeof N=="string",e,"internal-error"),Jt(h,e.name),Jt(p,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof Y=="boolean",e,"internal-error"),Jt(m,e.name),Jt(_,e.name),Jt(D,e.name),Jt(I,e.name),Jt(v,e.name),Jt(C,e.name);const Se=new Nn({uid:N,auth:e,email:p,emailVerified:M,displayName:h,isAnonymous:Y,photoURL:_,phoneNumber:m,tenantId:D,stsTokenManager:Ue,createdAt:v,lastLoginAt:C});return ce&&Array.isArray(ce)&&(Se.providerData=ce.map(bn=>Object.assign({},bn))),I&&(Se._redirectEventId=I),Se}static async _fromIdTokenResponse(e,n,r=!1){const i=new gi;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $s(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hp.type="NONE";const Uh=Hp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t,e,n){return`firebase:${t}:${e}:${n}`}class dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dr(Ft(Uh),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ft(Uh);const o=ys(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new dr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new dr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yp(e))return"Blackberry";if(Xp(e))return"Webos";if(_l(e))return"Safari";if((e.includes("chrome/")||Kp(e))&&!e.includes("edge/"))return"Chrome";if(Gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qp(t=Ae()){return/firefox\//i.test(t)}function _l(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kp(t=Ae()){return/crios\//i.test(t)}function Wp(t=Ae()){return/iemobile/i.test(t)}function Gp(t=Ae()){return/android/i.test(t)}function Yp(t=Ae()){return/blackberry/i.test(t)}function Xp(t=Ae()){return/webos/i.test(t)}function To(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I1(t=Ae()){var e;return To(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function T1(){return Rp()&&document.documentMode===10}function Qp(t=Ae()){return To(t)||Gp(t)||Xp(t)||Yp(t)||/windows phone/i.test(t)||Wp(t)}function S1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e=[]){let n;switch(t){case"Browser":n=$h(Ae());break;case"Worker":n=`${$h(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new k1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await $s(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await dr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function El(t){return Yn(t)}class Bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t,e){return h1(t,"POST","/v1/accounts:signInWithIdp",u1(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="http://localhost";class zn extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=vl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pr(e,n)}buildRequest(){const e={requestUri:A1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Il{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Di{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Di{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Di{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Vh(r);return new br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vh(r);return new br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bs(e,n,r,i)}}function em(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,s,e,r):s})}async function x1(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await mi(t,em(i,s,e,t),n);H(o.idToken,i,"internal-error");const a=wl(o.idToken);H(a,i,"internal-error");const{sub:c}=a;return H(t.uid===c,i,"user-mismatch"),br._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&xt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e,n=!1){const r="signIn",i=await em(t,r,e),s=await br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const Vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(){const t=Ae();return _l(t)||To(t)}const D1=1e3,P1=10;class nm extends tm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N1()&&S1(),this.fallbackToPolling=Qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);T1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nm.type="LOCAL";const M1=nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends tm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rm.type="SESSION";const im=rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new So(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await L1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Tl("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function U1(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function $1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function V1(){return sm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firebaseLocalStorageDb",j1=1,js="firebaseLocalStorage",am="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function z1(){const t=indexedDB.deleteDatabase(om);return new Pi(t).toPromise()}function lc(){const t=indexedDB.open(om,j1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(js,{keyPath:am})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(js)?e(r):(r.close(),await z1(),e(await lc()))})})}async function jh(t,e,n){const r=ko(t,!0).put({[am]:e,value:n});return new Pi(r).toPromise()}async function H1(t,e){const n=ko(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function zh(t,e){const n=ko(t,!0).delete(e);return new Pi(n).toPromise()}const q1=800,K1=3;class cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lc();return await jh(e,Vs,"1"),await zh(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>H1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ko(i,!1).getAll();return new Pi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cm.type="LOCAL";const W1=cm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Y1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",G1().appendChild(r)})}function X1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t,e){return e?Ft(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q1(t){return R1(t.auth,new Sl(t),t.bypassAuthState)}function J1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),O1(n,new Sl(t),t.bypassAuthState)}async function Z1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),x1(n,new Sl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q1;case"linkViaPopup":case"linkViaRedirect":return Z1;case"reauthViaPopup":case"reauthViaRedirect":return J1;default:xt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Ni(2e3,1e4);async function tE(t,e,n){const r=El(t);n1(t,e,Il);const i=lm(r,n);return new kn(r,"signInViaPopup",e,i).executeNotNull()}class kn extends um{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Tl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eE.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="pendingRedirect",bs=new Map;class rE extends um{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bs.get(this.auth._key());if(!e){try{const r=await iE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bs.set(this.auth._key(),e)}return this.bypassAuthState||bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iE(t,e){const n=aE(e),r=oE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sE(t,e){bs.set(t._key(),e)}function oE(t){return Ft(t._redirectPersistence)}function aE(t){return ys(nE,t.config.apiKey,t.name)}async function cE(t,e,n=!1){const r=El(t),i=lm(r,e),o=await new rE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=10*60*1e3;class uE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE(t,e={}){return Io(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pE=/^https?/;async function mE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fE(t);for(const n of e)try{if(gE(n))return}catch{}xt(t,"unauthorized-domain")}function gE(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pE.test(n))return!1;if(dE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new Ni(3e4,6e4);function qh(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yE(t){return new Promise((e,n)=>{var r,i,s;function o(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),n(St(t,"network-request-failed"))},timeout:vE.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kt().gapi)===null||s===void 0)&&s.load)o();else{const a=X1("iframefcb");return kt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},Y1(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ws=null,e})}let ws=null;function bE(t){return ws=ws||yE(t),ws}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Ni(5e3,15e3),_E="__/auth/iframe",EE="emulator/auth/iframe",IE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SE(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bl(e,EE):`https://${t.config.authDomain}/${_E}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},i=TE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ri(r).slice(1)}`}async function kE(t){const e=await bE(t),n=kt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:SE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},wE.get());function c(){kt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AE=500,xE=600,OE="_blank",RE="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NE(t,e,n,r=AE,i=xE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Ae().toLowerCase();n&&(a=Kp(l)?OE:n),qp(l)&&(e=e||RE,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(I1(l)&&a!=="_self")return DE(e||"",a),new Kh(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Kh(h)}function DE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="__/auth/handler",ME="emulator/auth/handler";function Wh(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:i};if(e instanceof Il){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Di){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${LE(t)}?${Ri(a).slice(1)}`}function LE({config:t}){return t.emulator?bl(t,ME):`https://${t.authDomain}/${PE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="webStorageSupport";class FE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=cE,this._overrideRedirectResult=sE}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Wh(e,n,r,cc(),i);return NE(e,o,Tl())}async _openRedirect(e,n,r,i){return await this._originValidation(e),U1(Wh(e,n,r,cc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kE(e),r=new uE(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ga];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qp()||_l()||To()}}const UE=FE;var Gh="@firebase/auth",Yh="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VE(t){Vn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jp(t)},u=new C1(a,c,l);return i1(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new dn("auth-internal",e=>{const n=El(e.getProvider("auth").getImmediate());return(r=>new $E(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Gh,Yh,BE(t)),Tt(Gh,Yh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t=gl()){const e=Eo(t,"auth");return e.isInitialized()?e.getImmediate():r1(t,{popupRedirectResolver:UE,persistence:[W1,M1,im]})}VE("Browser");var zE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,kl=kl||{},j=zE||self;function zs(){}function uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function HE(t){return Object.prototype.hasOwnProperty.call(t,va)&&t[va]||(t[va]=++qE)}var va="closure_uid_"+(1e9*Math.random()>>>0),qE=0;function KE(t,e,n){return t.call.apply(t.bind,arguments)}function WE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=KE:Pe=WE,Pe.apply(null,arguments)}function rs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var GE=0;vn.prototype.s=!1;vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),GE!=0)&&HE(this)};vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},dm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function YE(t){e:{var e=BI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Xh(t){return Array.prototype.concat.apply([],arguments)}function Cl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hs(t){return/^[\s\xa0]*$/.test(t)}var Qh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ve(t,e){return t.indexOf(e)!=-1}function ya(t,e){return t<e?-1:t>e?1:0}var je;e:{var Jh=j.navigator;if(Jh){var Zh=Jh.userAgent;if(Zh){je=Zh;break e}}je=""}function Al(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pm(t){const e={};for(const n in t)e[n]=t[n];return e}var ef="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mm(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ef.length;s++)n=ef[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xl(t){return xl[" "](t),t}xl[" "]=zs;function XE(t){var e=ZE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var QE=Ve(je,"Opera"),wr=Ve(je,"Trident")||Ve(je,"MSIE"),gm=Ve(je,"Edge"),hc=gm||wr,vm=Ve(je,"Gecko")&&!(Ve(je.toLowerCase(),"webkit")&&!Ve(je,"Edge"))&&!(Ve(je,"Trident")||Ve(je,"MSIE"))&&!Ve(je,"Edge"),JE=Ve(je.toLowerCase(),"webkit")&&!Ve(je,"Edge");function ym(){var t=j.document;return t?t.documentMode:void 0}var qs;e:{var ba="",wa=function(){var t=je;if(vm)return/rv:([^\);]+)(\)|;)/.exec(t);if(gm)return/Edge\/([\d\.]+)/.exec(t);if(wr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JE)return/WebKit\/(\S+)/.exec(t);if(QE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wa&&(ba=wa?wa[1]:""),wr){var _a=ym();if(_a!=null&&_a>parseFloat(ba)){qs=String(_a);break e}}qs=ba}var ZE={};function eI(){return XE(function(){let t=0;const e=Qh(String(qs)).split("."),n=Qh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ya(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ya(i[2].length==0,s[2].length==0)||ya(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var fc;if(j.document&&wr){var tf=ym();fc=tf||parseInt(qs,10)||void 0}else fc=void 0;var tI=fc,nI=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",zs,e),j.removeEventListener("test",zs,e)}catch{}return t}();function $e(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};function vi(t,e){if($e.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vm){e:{try{xl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vi.Z.h.call(this)}}Fe(vi,$e);var rI={2:"touch",3:"pen",4:"mouse"};vi.prototype.h=function(){vi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Li="closure_listenable_"+(1e6*Math.random()|0),iI=0;function sI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++iI,this.ca=this.fa=!1}function Co(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ao(t){this.src=t,this.g={},this.h=0}Ao.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=pc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new sI(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function dc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=fm(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Co(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ol="closure_lm_"+(1e6*Math.random()|0),Ea={};function bm(t,e,n,r,i){if(r&&r.once)return _m(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bm(t,e[s],n,r,i);return null}return n=Dl(n),t&&t[Li]?t.N(e,n,Mi(r)?!!r.capture:!!r,i):wm(t,e,n,!1,r,i)}function wm(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Mi(i)?!!i.capture:!!i,a=Nl(t);if(a||(t[Ol]=a=new Ao(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=oI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Im(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oI(){function t(n){return e.call(t.src,t.listener,n)}var e=aI;return t}function _m(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_m(t,e[s],n,r,i);return null}return n=Dl(n),t&&t[Li]?t.O(e,n,Mi(r)?!!r.capture:!!r,i):wm(t,e,n,!0,r,i)}function Em(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Em(t,e[s],n,r,i);else r=Mi(r)?!!r.capture:!!r,n=Dl(n),t&&t[Li]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=pc(s,n,r,i),-1<n&&(Co(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pc(e,n,r,i)),(n=-1<t?e[t]:null)&&Rl(n))}function Rl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Li])dc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Im(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nl(e))?(dc(n,t),n.h==0&&(n.src=null,e[Ol]=null)):Co(t)}}}function Im(t){return t in Ea?Ea[t]:Ea[t]="on"+t}function aI(t,e){if(t.ca)t=!0;else{e=new vi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Rl(t),t=n.call(r,e)}return t}function Nl(t){return t=t[Ol],t instanceof Ao?t:null}var Ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(t){return typeof t=="function"?t:(t[Ia]||(t[Ia]=function(e){return t.handleEvent(e)}),t[Ia])}function xe(){vn.call(this),this.i=new Ao(this),this.P=this,this.I=null}Fe(xe,vn);xe.prototype[Li]=!0;xe.prototype.removeEventListener=function(t,e,n,r){Em(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new $e(e,t);else if(e instanceof $e)e.target=e.target||t;else{var i=e;e=new $e(r,t),mm(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=is(o,r,!0,e)&&i}if(o=e.g=t,i=is(o,r,!0,e)&&i,i=is(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=is(o,r,!1,e)&&i}xe.prototype.M=function(){if(xe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Co(n[r]);delete t.g[e],t.h--}}this.I=null};xe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function is(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&dc(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pl=j.JSON.stringify;function cI(){var t=Sm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lI{constructor(){this.h=this.g=null}add(e,n){const r=Tm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Tm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new uI,t=>t.reset());class uI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hI(t){j.setTimeout(()=>{throw t},0)}function Ml(t,e){mc||fI(),gc||(mc(),gc=!0),Sm.add(t,e)}var mc;function fI(){var t=j.Promise.resolve(void 0);mc=function(){t.then(dI)}}var gc=!1,Sm=new lI;function dI(){for(var t;t=cI();){try{t.h.call(t.g)}catch(n){hI(n)}var e=Tm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gc=!1}function xo(t,e){xe.call(this),this.h=t||1,this.g=e||j,this.j=Pe(this.kb,this),this.l=Date.now()}Fe(xo,xe);R=xo.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(Ll(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ll(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){xo.Z.M.call(this),Ll(this),delete this.g};function Fl(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function km(t){t.g=Fl(()=>{t.g=null,t.i&&(t.i=!1,km(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pI extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:km(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(t){vn.call(this),this.h=t,this.g={}}Fe(yi,vn);var nf=[];function Cm(t,e,n,r){Array.isArray(n)||(n&&(nf[0]=n.toString()),n=nf);for(var i=0;i<n.length;i++){var s=bm(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Am(t){Al(t.g,function(e,n){this.g.hasOwnProperty(n)&&Rl(e)},t),t.g={}}yi.prototype.M=function(){yi.Z.M.call(this),Am(this)};yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oo(){this.g=!0}Oo.prototype.Aa=function(){this.g=!1};function mI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ar(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yI(t,n)+(r?" "+r:"")})}function vI(t,e){t.info(function(){return"TIMEOUT: "+e})}Oo.prototype.info=function(){};function yI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pl(n)}catch{return e}}var Xn={},rf=null;function Ro(){return rf=rf||new xe}Xn.Ma="serverreachability";function xm(t){$e.call(this,Xn.Ma,t)}Fe(xm,$e);function bi(t){const e=Ro();Me(e,new xm(e))}Xn.STAT_EVENT="statevent";function Om(t,e){$e.call(this,Xn.STAT_EVENT,t),this.stat=e}Fe(Om,$e);function He(t){const e=Ro();Me(e,new Om(e,t))}Xn.Na="timingevent";function Rm(t,e){$e.call(this,Xn.Na,t),this.size=e}Fe(Rm,$e);function Fi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var No={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Nm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ul(){}Ul.prototype.h=null;function sf(t){return t.h||(t.h=t.i())}function Dm(){}var Ui={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $l(){$e.call(this,"d")}Fe($l,$e);function Bl(){$e.call(this,"c")}Fe(Bl,$e);var vc;function Do(){}Fe(Do,Ul);Do.prototype.g=function(){return new XMLHttpRequest};Do.prototype.i=function(){return{}};vc=new Do;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new yi(this),this.P=bI,t=hc?125:void 0,this.W=new xo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Pm}function Pm(){this.i=null,this.g="",this.h=!1}var bI=45e3,yc={},Ks={};R=$i.prototype;R.setTimeout=function(t){this.P=t};function bc(t,e,n){t.K=1,t.v=Mo(Ht(e)),t.s=n,t.U=!0,Mm(t,null)}function Mm(t,e){t.F=Date.now(),Bi(t),t.A=Ht(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),jm(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Pm,t.g=cg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new pI(Pe(t.Ia,t,t.g),t.O)),Cm(t.V,t.g,"readystatechange",t.gb),e=t.H?pm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),bi(),mI(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&Ut(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const u=Ut(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||hc||this.g&&(this.h.h||this.g.ga()||lf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?bi(3):bi(2)),Po(this);var n=this.g.ba();this.N=n;t:if(Lm(this)){var r=lf(this.g);t="";var i=r.length,s=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),ni(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,gI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hs(a)){var l=a;break t}}l=null}if(n=l)ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wc(this,n);else{this.i=!1,this.o=3,He(12),Cn(this),ni(this);break e}}this.U?(Fm(this,u,o),hc&&this.i&&u==3&&(Cm(this.V,this.W,"tick",this.fb),this.W.start())):(ar(this.j,this.m,o,null),wc(this,o)),u==4&&Cn(this),this.i&&!this.I&&(u==4?ig(this.l,this):(this.i=!1,Bi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Cn(this),ni(this)}}}catch{}finally{}};function Lm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Fm(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=wI(t,n),i==Ks){e==4&&(t.o=4,He(14),r=!1),ar(t.j,t.m,null,"[Incomplete Response]");break}else if(i==yc){t.o=4,He(15),ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ar(t.j,t.m,i,null),wc(t,i);Lm(t)&&i!=Ks&&i!=yc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yl(e),e.L=!0,He(11))):(ar(t.j,t.m,n,"[Invalid Chunked Response]"),Cn(t),ni(t))}R.fb=function(){if(this.g){var t=Ut(this.g),e=this.g.ga();this.C<e.length&&(Po(this),Fm(this,t,e),this.i&&t!=4&&Bi(this))}};function wI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ks:(n=Number(e.substring(n,r)),isNaN(n)?yc:(r+=1,r+n>e.length?Ks:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Cn(this)};function Bi(t){t.Y=Date.now()+t.P,Um(t,t.P)}function Um(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fi(Pe(t.eb,t),e)}function Po(t){t.B&&(j.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vI(this.j,this.A),this.K!=2&&(bi(),He(17)),Cn(this),this.o=2,ni(this)):Um(this,this.Y-t)};function ni(t){t.l.G==0||t.I||ig(t.l,t)}function Cn(t){Po(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ll(t.W),Am(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_c(n.i,t))){if(n.I=t.N,!t.J&&_c(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xs(n),Uo(n);else break e;Gl(n),He(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fi(Pe(n.ab,n),6e3));if(1>=qm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else An(n,11)}else if((t.J||n.g==t)&&Xs(n),!Hs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;!s.g&&(Ve(_,"spdy")||Ve(_,"quic")||Ve(_,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(zl(s,s.h),s.h=null))}if(r.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.sa=D,de(r.F,r.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ag(r,r.H?r.la:null,r.W),o.J){Km(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Po(a),Bi(a)),r.g=o}else ng(r);0<n.l.length&&$o(n)}else l[0]!="stop"&&l[0]!="close"||An(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?An(n,7):Wl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}bi(4)}catch{}}function _I(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Vl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uc(t)||typeof t=="string")dm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(uc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=_I(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Nr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Nr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Nr.prototype;R.R=function(){jl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return jl(this),this.g.concat()};function jl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Hn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Hn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return Hn(this.h,t)?this.h[t]:e};R.set=function(t,e){Hn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var $m=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function EI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qn){this.g=e!==void 0?e:t.g,Ws(this,t.j),this.s=t.s,Gs(this,t.i),Ys(this,t.m),this.l=t.l,e=t.h;var n=new wi;n.i=e.i,e.g&&(n.g=new Nr(e.g),n.h=e.h),of(this,n),this.o=t.o}else t&&(n=String(t).match($m))?(this.g=!!e,Ws(this,n[1]||"",!0),this.s=ri(n[2]||""),Gs(this,n[3]||"",!0),Ys(this,n[4]),this.l=ri(n[5]||"",!0),of(this,n[6]||"",!0),this.o=ri(n[7]||"")):(this.g=!!e,this.h=new wi(null,this.g))}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Kr(e,af,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Kr(e,af,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Kr(n,n.charAt(0)=="/"?CI:kI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Kr(n,xI)),t.join("")};function Ht(t){return new qn(t)}function Ws(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gs(t,e,n){t.i=n?ri(e,!0):e}function Ys(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function of(t,e,n){e instanceof wi?(t.h=e,OI(t.h,t.g)):(n||(e=Kr(e,AI)),t.h=new wi(e,t.g))}function de(t,e,n){t.h.set(e,n)}function Mo(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function II(t){return t instanceof qn?Ht(t):new qn(t,void 0)}function TI(t,e,n,r){var i=new qn(null,void 0);return t&&Ws(i,t),e&&Gs(i,e),n&&Ys(i,n),r&&(i.l=r),i}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var af=/[#\/\?@]/g,kI=/[#\?:]/g,CI=/[#\?]/g,AI=/[#\?@]/g,xI=/#/g;function wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new Nr,t.h=0,t.i&&EI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=wi.prototype;R.add=function(t,e){yn(this),this.i=null,t=Dr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bm(t,e){yn(t),e=Dr(t,e),Hn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Hn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&jl(t)))}function Vm(t,e){return yn(t),e=Dr(t,e),Hn(t.g.h,e)}R.forEach=function(t,e){yn(this),this.g.forEach(function(n,r){dm(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){yn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){yn(this);var e=[];if(typeof t=="string")Vm(this,t)&&(e=Xh(e,this.g.get(Dr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xh(e,t[n])}return e};R.set=function(t,e){return yn(this),this.i=null,t=Dr(this,t),Vm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function jm(t,e,n){Bm(t,e),0<n.length&&(t.i=null,t.g.set(Dr(t,e),Cl(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Dr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function OI(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Bm(this,r),jm(this,i,n))},t)),t.j=e}var RI=class{constructor(t,e){this.h=t,this.g=e}};function zm(t){this.l=t||NI,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NI=10;function Hm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qm(t){return t.h?1:t.g?t.g.size:0}function _c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zl(t,e){t.g?t.g.add(e):t.h=e}function Km(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zm.prototype.cancel=function(){if(this.i=Wm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cl(t.i)}function Hl(){}Hl.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};Hl.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function DI(){this.g=new Hl}function PI(t,e,n){const r=n||"";try{Vl(t,function(i,s){let o=i;Mi(i)&&(o=Pl(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function MI(t,e){const n=new Oo;if(j.Image){const r=new Image;r.onload=rs(ss,n,r,"TestLoadImage: loaded",!0,e),r.onerror=rs(ss,n,r,"TestLoadImage: error",!1,e),r.onabort=rs(ss,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=rs(ss,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ss(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vi(t){this.l=t.$b||null,this.j=t.ib||!1}Fe(Vi,Ul);Vi.prototype.g=function(){return new Lo(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function Lo(t,e){xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Lo,xe);var ql=0;R=Lo.prototype;R.open=function(t,e){if(this.readyState!=ql)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ji(this)),this.readyState=ql};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gm(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Gm(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ji(this):_i(this),this.readyState==3&&Gm(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,ji(this))};R.Ta=function(t){this.g&&(this.response=t,ji(this))};R.ha=function(){this.g&&ji(this)};function ji(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LI=j.JSON.parse;function _e(t){xe.call(this),this.headers=new Nr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ym,this.K=this.L=!1}Fe(_e,xe);var Ym="",FI=/^https?$/i,UI=["POST","PUT"];R=_e.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vc.g(),this.C=this.u?sf(this.u):sf(vc),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){cf(this,s);return}t=n||"";const i=new Nr(this.headers);r&&Vl(r,function(s,o){i.set(o,s)}),r=YE(i.T()),n=j.FormData&&t instanceof j.FormData,!(0<=fm(UI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jm(this),0<this.B&&((this.K=$I(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Fl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){cf(this,s)}};function $I(t){return wr&&eI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function BI(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof kl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function cf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Xm(t),Fo(t)}function Xm(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Fo(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fo(this,!0)),_e.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?Qm(this):this.cb())};R.cb=function(){Qm(this)};function Qm(t){if(t.h&&typeof kl<"u"&&(!t.C[1]||Ut(t)!=4||t.ba()!=2)){if(t.v&&Ut(t)==4)Fl(t.Fa,0,t);else if(Me(t,"readystatechange"),Ut(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match($m)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!FI.test(i?i.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<Ut(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Xm(t)}}finally{Fo(t)}}}}function Fo(t,e){if(t.g){Jm(t);const n=t.g,r=t.C[0]?zs:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function Ut(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LI(e)}};function lf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ym:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function VI(t){let e="";return Al(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function jr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zm(t){this.za=0,this.l=[],this.h=new Oo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=jr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=jr("baseRetryDelayMs",5e3,t),this.$a=jr("retryDelaySeedMs",1e4,t),this.Ya=jr("forwardChannelMaxRetries",2,t),this.ra=jr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new zm(t&&t.concurrentRequestLimit),this.Ca=new DI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=Zm.prototype;R.ma=8;R.G=1;function Wl(t){if(eg(t),t.G==3){var e=t.V++,n=Ht(t.F);de(n,"SID",t.J),de(n,"RID",e),de(n,"TYPE","terminate"),zi(t,n),e=new $i(t,t.h,e,void 0),e.K=2,e.v=Mo(Ht(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=cg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Bi(e)}og(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Uo(t){t.g&&(Yl(t),t.g.cancel(),t.g=null)}function eg(t){Uo(t),t.u&&(j.clearTimeout(t.u),t.u=null),Xs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Ta(t,e){t.l.push(new RI(t.Za++,e)),t.G==3&&$o(t)}function $o(t){Hm(t.i)||t.m||(t.m=!0,Ml(t.Ha,t),t.C=0)}function jI(t,e){return qm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fi(Pe(t.Ha,t,e),sg(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new $i(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=pm(s),mm(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tg(this,i,e),n=Ht(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),zi(this,n),this.o&&s&&Kl(n,this.o,s),zl(this.i,i),this.Ra&&de(n,"TYPE","init"),this.ja?(de(n,"$req",e),de(n,"SID","null"),i.$=!0,bc(i,n,null)):bc(i,n,e),this.G=2}}else this.G==3&&(t?uf(this,t):this.l.length==0||Hm(this.i)||uf(this))};function uf(t,e){var n;e?n=e.m:n=t.V++;const r=Ht(t.F);de(r,"SID",t.J),de(r,"RID",n),de(r,"AID",t.U),zi(t,r),t.o&&t.s&&Kl(r,t.o,t.s),n=new $i(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=tg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),zl(t.i,n),bc(n,r,e)}function zi(t,e){t.j&&Vl({},function(n,r){de(e,r,n)})}function tg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{PI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ng(t){t.g||t.u||(t.Y=1,Ml(t.Ga,t),t.A=0)}function Gl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fi(Pe(t.Ga,t),sg(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,rg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fi(Pe(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,He(10),Uo(this),rg(this))};function Yl(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function rg(t){t.g=new $i(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ht(t.oa);de(e,"RID","rpc"),de(e,"SID",t.J),de(e,"CI",t.N?"0":"1"),de(e,"AID",t.U),zi(t,e),de(e,"TYPE","xmlhttp"),t.o&&t.s&&Kl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Mo(Ht(e)),n.s=null,n.U=!0,Mm(n,t)}R.ab=function(){this.v!=null&&(this.v=null,Uo(this),Gl(this),He(19))};function Xs(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function ig(t,e){var n=null;if(t.g==e){Xs(t),Yl(t),t.g=null;var r=2}else if(_c(t.i,e))n=e.D,Km(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ro(),Me(r,new Rm(r,n)),$o(t)}else ng(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&jI(t,e)||r==2&&Gl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:An(t,5);break;case 4:An(t,10);break;case 3:An(t,6);break;default:An(t,2)}}}function sg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function An(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Ws(n,"https"),Mo(n)),MI(n.toString(),r)}else He(2);t.G=0,t.j&&t.j.va(e),og(t),eg(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),He(2)):(this.h.info("Failed to ping google.com"),He(1))};function og(t){t.G=0,t.I=-1,t.j&&((Wm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Cl(t.l),t.l.length=0),t.j.ua())}function ag(t,e,n){let r=II(n);if(r.i!="")e&&Gs(r,e+"."+r.i),Ys(r,r.m);else{const i=j.location;r=TI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Al(t.aa,function(i,s){de(r,s,i)}),e=t.D,n=t.sa,e&&n&&de(r,e,n),de(r,"VER",t.ma),zi(t,r),r}function cg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new Vi({ib:!0})):new _e(t.qa),e.L=t.H,e}function lg(){}R=lg.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function Qs(){if(wr&&!(10<=Number(tI)))throw Error("Environmental error: no available transport.")}Qs.prototype.g=function(t,e){return new it(t,e)};function it(t,e){xe.call(this),this.g=new Zm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Hs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pr(this)}Fe(it,xe);it.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ml(Pe(t.hb,t,e))),He(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ag(t,null,t.W),$o(t)};it.prototype.close=function(){Wl(this.g)};it.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ta(this.g,e)}else this.v?(e={},e.__data__=Pl(t),Ta(this.g,e)):Ta(this.g,t)};it.prototype.M=function(){this.g.j=null,delete this.j,Wl(this.g),delete this.g,it.Z.M.call(this)};function ug(t){$l.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(ug,$l);function hg(){Bl.call(this),this.status=1}Fe(hg,Bl);function Pr(t){this.g=t}Fe(Pr,lg);Pr.prototype.xa=function(){Me(this.g,"a")};Pr.prototype.wa=function(t){Me(this.g,new ug(t))};Pr.prototype.va=function(t){Me(this.g,new hg)};Pr.prototype.ua=function(){Me(this.g,"b")};Qs.prototype.createWebChannel=Qs.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;No.NO_ERROR=0;No.TIMEOUT=8;No.HTTP_ERROR=6;Nm.COMPLETE="complete";Dm.EventType=Ui;Ui.OPEN="a";Ui.CLOSE="b";Ui.ERROR="c";Ui.MESSAGE="d";xe.prototype.listen=xe.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var zI=function(){return new Qs},HI=function(){return Ro()},Sa=No,qI=Nm,KI=Xn,hf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},WI=Vi,os=Dm,GI=_e;const ff="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new pl("@firebase/firestore");function df(){return Kn.logLevel}function L(t,...e){if(Kn.logLevel<=ne.DEBUG){const n=e.map(Xl);Kn.debug(`Firestore (${Mr}): ${t}`,...n)}}function qt(t,...e){if(Kn.logLevel<=ne.ERROR){const n=e.map(Xl);Kn.error(`Firestore (${Mr}): ${t}`,...n)}}function pf(t,...e){if(Kn.logLevel<=ne.WARN){const n=e.map(Xl);Kn.warn(`Firestore (${Mr}): ${t}`,...n)}}function Xl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+t;throw qt(e),new Error(e)}function we(t,e){t||G()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class QI{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new YI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ye(e)}}class JI{constructor(e,n,r){this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class ZI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new JI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.p=n.token,new eT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=nT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function _r(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Je(0,0))}static max(){return new X(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Ei{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const rT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ei{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return rT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(pe.fromString(e))}static fromName(e){return new B(pe.fromString(e).popFirst(5))}static empty(){return new B(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new pe(e.slice()))}}function iT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new pn(i,B.empty(),e)}function sT(t){return new pn(t.readTime,t.key,-1)}class pn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pn(X.min(),B.empty(),-1)}static max(){return new pn(X.max(),B.empty(),-1)}}function oT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==aT)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jl.ot=-1;class Oe{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new as(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new as(this.root,e,this.comparator,!1)}getReverseIterator(){return new as(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new as(this.root,e,this.comparator,!0)}}class as{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Re.RED,this.left=i!=null?i:Re.EMPTY,this.right=s!=null?s:Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Re(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(e){return new gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ie(this.comparator);return n.data=e,n}}class gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new Ie(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _r(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Le(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const uT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(we(!!t),typeof t=="string"){let e=0;const n=uT.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pg(t){const e=t.mapValue.fields.__previous_value__;return dg(e)?pg(e):e}function Ii(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ir{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ir&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dg(t)?4:fT(t)?9007199254740991:10:G()}function Ot(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=mn(r.timestampValue),o=mn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Er(r.bytesValue).isEqual(Er(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return be(r.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return be(r.integerValue)===be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=be(r.doubleValue),o=be(i.doubleValue);return s===o?Ec(s)===Ec(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return _r(t.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mf(s)!==mf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ot(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Ti(t,e){return(t.values||[]).find(n=>Ot(n,e))!==void 0}function Tr(t,e){if(t===e)return 0;const n=Wn(t),r=Wn(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=be(i.integerValue||i.doubleValue),a=be(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(Ii(t),Ii(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Er(i),a=Er(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=re(o[c],a[c]);if(l!==0)return l}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=re(be(i.latitude),be(s.latitude));return o!==0?o:re(be(i.longitude),be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Tr(o[c],a[c]);if(l)return l}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===cs.mapValue&&s===cs.mapValue)return 0;if(i===cs.mapValue)return 1;if(s===cs.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=re(a[u],l[u]);if(h!==0)return h;const p=Tr(o[a[u]],c[l[u]]);if(p!==0)return p}return re(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=mn(t),r=mn(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function mr(t){return Ic(t)}function Ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=mn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Er(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ic(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ic(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function Tc(t){return!!t&&"integerValue"in t}function Zl(t){return!!t&&"arrayValue"in t}function yf(t){return!!t&&"nullValue"in t}function bf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ka(t){return!!t&&"mapValue"in t}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ii(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(ii(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ne(e,0,X.min(),X.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new Ne(e,1,n,X.min(),r,0)}static newNoDocument(e,n){return new Ne(e,2,n,X.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,X.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function wf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dT(t,e,n,r,i,s,o)}function eu(t){const e=te(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+mr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mr(r)).join(",")),e.ut=n}return e.ut}function pT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${mr(r.value)}`;var r}).join(", ")}]`),Vo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>mr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>mr(n)).join(",")),`Target(${e})`}function tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!ET(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function Sc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Qe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new mT(e,n,r):n==="array-contains"?new yT(e,r):n==="in"?new bT(e,r):n==="not-in"?new wT(e,r):n==="array-contains-any"?new _T(e,r):new Qe(e,n,r)}static ct(e,n,r){return n==="in"?new gT(e,r):new vT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Tr(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.at(Tr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mT extends Qe{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class gT extends Qe{constructor(e,n){super(e,"in",n),this.keys=mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vT extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class yT extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zl(n)&&Ti(n.arrayValue,this.value)}}class bT extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class wT extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class _T extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}class Js{constructor(e,n){this.position=e,this.inclusive=n}}class si{constructor(e,n="asc"){this.field=e,this.dir=n}}function ET(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _f(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Tr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ot(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function IT(t,e,n,r,i,s,o,a){return new jo(t,e,n,r,i,s,o,a)}function nu(t){return new jo(t)}function If(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ST(t){for(const e of t.filters)if(e.ht())return e.field;return null}function kT(t){return t.collectionGroup!==null}function Si(t){const e=te(t);if(e.lt===null){e.lt=[];const n=ST(e),r=TT(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new si(n)),e.lt.push(new si(Xe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new si(Xe.keyField(),s))}}}return e.lt}function Kt(t){const e=te(t);if(!e.ft)if(e.limitType==="F")e.ft=wf(e.path,e.collectionGroup,Si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new si(s.field,o))}const r=e.endAt?new Js(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Js(e.startAt.position,e.startAt.inclusive):null;e.ft=wf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function kc(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zo(t,e){return tu(Kt(t),Kt(e))&&t.limitType===e.limitType}function gg(t){return`${eu(Kt(t))}|lt:${t.limitType}`}function Cc(t){return`Query(target=${pT(Kt(t))}; limitType=${t.limitType})`}function ru(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=_f(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Si(n),r)||n.endAt&&!function(i,s,o){const a=_f(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Si(n),r))}(t,e)}function CT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vg(t){return(e,n)=>{let r=!1;for(const i of Si(t)){const s=AT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AT(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Tr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function OT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this._=void 0}}function RT(t,e,n){return t instanceof Ac?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Zs?yg(t,e):t instanceof eo?bg(t,e):function(r,i){const s=DT(r,i),o=Tf(s)+Tf(r._t);return Tc(s)&&Tc(r._t)?OT(o):xT(r.wt,o)}(t,e)}function NT(t,e,n){return t instanceof Zs?yg(t,e):t instanceof eo?bg(t,e):n}function DT(t,e){return t instanceof xc?Tc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ac extends Ho{}class Zs extends Ho{constructor(e){super(),this.elements=e}}function yg(t,e){const n=wg(e);for(const r of t.elements)n.some(i=>Ot(i,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends Ho{constructor(e){super(),this.elements=e}}function bg(t,e){let n=wg(e);for(const r of t.elements)n=n.filter(i=>!Ot(i,r));return{arrayValue:{values:n}}}class xc extends Ho{constructor(e,n){super(),this.wt=e,this._t=n}}function Tf(t){return be(t.integerValue||t.doubleValue)}function wg(t){return Zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Zs&&r instanceof Zs||n instanceof eo&&r instanceof eo?_r(n.elements,r.elements,Ot):n instanceof xc&&r instanceof xc?Ot(n._t,r._t):n instanceof Ac&&r instanceof Ac}(t.transform,e.transform)}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _s(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function _g(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new LT(t.key,Pn.none()):new su(t.key,t.data,Pn.none());{const n=t.data,r=_t.empty();let i=new Ie(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new qo(t.key,r,new Dn(i.toArray()),Pn.none())}}function MT(t,e,n){t instanceof su?function(r,i,s){const o=r.value.clone(),a=kf(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qo?function(r,i,s){if(!_s(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=kf(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Eg(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function oi(t,e,n,r){return t instanceof su?function(i,s,o,a){if(!_s(i.precondition,s))return o;const c=i.value.clone(),l=Cf(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof qo?function(i,s,o,a){if(!_s(i.precondition,s))return o;const c=Cf(i.fieldTransforms,a,s),l=s.data;return l.setAll(Eg(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return _s(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&_r(n,r,(i,s)=>PT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class su extends iu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qo extends iu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Eg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kf(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NT(o,a,n[i]))}return r}function Cf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RT(s,o,e))}return r}class LT extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Q;function Ig(t){if(t===void 0)return qt("GRPC error has no .code"),A.UNKNOWN;switch(t){case ye.OK:return A.OK;case ye.CANCELLED:return A.CANCELLED;case ye.UNKNOWN:return A.UNKNOWN;case ye.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ye.INTERNAL:return A.INTERNAL;case ye.UNAVAILABLE:return A.UNAVAILABLE;case ye.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ye.NOT_FOUND:return A.NOT_FOUND;case ye.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ye.ABORTED:return A.ABORTED;case ye.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ye.DATA_LOSS:return A.DATA_LOSS;default:return G()}}(Q=ye||(ye={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=new Oe(B.comparator);function gn(){return UT}const Tg=new Oe(B.comparator);function Wr(...t){let e=Tg;for(const n of t)e=e.insert(n.key,n);return e}function $T(t){let e=Tg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return ai()}function Sg(){return ai()}function ai(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}new Oe(B.comparator);const BT=new Ie(B.comparator);function ee(...t){let e=BT;for(const n of t)e=e.add(n);return e}const VT=new Ie(re);function kg(){return VT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,qi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ko(X.min(),r,kg(),gn(),ee())}}class qi{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new qi(Le.EMPTY_BYTE_STRING,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class Cg{constructor(e,n){this.targetId=e,this.It=n}}class Ag{constructor(e,n,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Af{constructor(){this.Tt=0,this.Et=Of(),this.At=Le.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=ee(),n=ee(),r=ee();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new qi(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Of()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class jT{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=gn(),this.Bt=xf(),this.Lt=new Ie(re)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Sc(s))if(r===0){const o=new B(s.path);this.Kt(n,o,Ne.newNoDocument(o,X.min()))}else we(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Sc(a.target)){const c=new B(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ne.newNoDocument(c,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=ee();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Ko(e,n,this.Lt,this.$t,r);return this.$t=gn(),this.Bt=xf(),this.Lt=new Ie(re),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Af,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Ie(re),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Af),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function xf(){return new Oe(B.comparator)}function Of(){return new Oe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class qT{constructor(e,n){this.databaseId=e,this.dt=n}}function KT(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WT(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ki(t){return we(!!t),X.fromTimestamp(function(e){const n=mn(e);return new Je(n.seconds,n.nanos)}(t))}function GT(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xg(t){const e=pe.fromString(t);return we(Ng(e)),e}function Ca(t,e){const n=xg(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Og(n))}function Oc(t,e){return GT(t.databaseId,e)}function YT(t){const e=xg(t);return e.length===4?pe.emptyPath():Og(e)}function Rf(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Og(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function XT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.dt?(we(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(we(l===void 0||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:Ig(c.code);return new V(l,c.message||"")}(o);n=new Ag(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ca(t,r.document.name),s=ki(r.document.updateTime),o=new _t({mapValue:{fields:r.document.fields}}),a=Ne.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Es(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ca(t,r.document),s=r.readTime?ki(r.readTime):X.min(),o=Ne.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Es([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ca(t,r.document),s=r.removedTargetIds||[];n=new Es([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new FT(i),o=r.targetId;n=new Cg(o,s)}}return n}function QT(t,e){return{documents:[Oc(t,e.path)]}}function JT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Oc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Oc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(bf(h.value))return{unaryFilter:{field:tr(h.field),op:"IS_NAN"}};if(yf(h.value))return{unaryFilter:{field:tr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(bf(h.value))return{unaryFilter:{field:tr(h.field),op:"IS_NOT_NAN"}};if(yf(h.value))return{unaryFilter:{field:tr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(h.field),op:nS(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:tr(u.field),direction:tS(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.dt||Vo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ZT(t){let e=YT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=Rg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new si(cr(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Vo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,p=u.values||[];return new Js(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,p=u.values||[];return new Js(p,h)}(n.endAt)),IT(e,i,o,s,a,"F",c,l)}function eS(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rg(t){return t?t.unaryFilter!==void 0?[iS(t)]:t.fieldFilter!==void 0?[rS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Rg(e)).reduce((e,n)=>e.concat(n)):G():[]}function tS(t){return zT[t]}function nS(t){return HT[t]}function tr(t){return{fieldPath:t.canonicalString()}}function cr(t){return Xe.fromServerFormat(t.fieldPath)}function rS(t){return Qe.create(cr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function iS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=cr(t.unaryFilter.field);return Qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=cr(t.unaryFilter.field);return Qe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=cr(t.unaryFilter.field);return Qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=cr(t.unaryFilter.field);return Qe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function Ng(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=_g(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&_r(this.mutations,e.mutations,(n,r)=>Sf(n,r))&&_r(this.baseMutations,e.baseMutations,(n,r)=>Sf(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Le.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.ne=e}}function cS(t){const e=ZT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.ze=new uS}addToCollectionParentIndex(e,n){return this.ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(pn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class uS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ie(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Sr(0)}static Rn(){return new Sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&oi(r.mutation,i,Dn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=xn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Wr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gn();const o=ai(),a=ai();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof qo)?s=s.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),oi(u.mutation,l,u.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new fS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ai();let i=new Oe((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||ee()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Sg();u.forEach(p=>{if(!s.has(p)){const m=_g(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(xn());let a=-1,c=s;return o.next(l=>E.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.getBaseDocument(e,u,h).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,ee())).next(u=>({batchId:a,changes:$T(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=Wr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Wr();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(l,u){return new jo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ne.newInvalidDocument(l)))});let o=Wr();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&oi(l.mutation,c,Dn.empty(),Je.now()),ru(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):E.resolve(Ne.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return E.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:ki(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:cS(r.bundledQuery),readTime:ki(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.overlays=new Oe(B.comparator),this.Xn=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=xn(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=xn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=xn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return E.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oS(n,r));let s=this.Xn.get(n);s===void 0&&(s=ee(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.Zn=new Ie(ke.ts),this.es=new Ie(ke.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new ke(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new ke(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new B(new pe([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new pe([])),r=new ke(n,e),i=new ke(n,e+1);let s=ee();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||re(e.ls,n.ls)}static ns(e,n){return re(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Ie(ke.ts)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sS(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ie(re);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new ke(new B(s),0);let a=new Ie(re);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new ke(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.ps=e,this.docs=new Oe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ne.newInvalidDocument(i))}),E.resolve(r)}getAllFromCollection(e,n,r){let i=gn();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||oT(sT(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,i){G()}Is(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yS(this)}getSize(e){return E.resolve(this.size)}}class yS extends hS{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.persistence=e,this.Ts=new Lr(n=>eu(n),tu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Es=0,this.As=new ou,this.targetCount=0,this.Rs=Sr.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),E.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Sr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.vn(n),E.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Jl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new bS(this),this.indexManager=new lS,this.remoteDocumentCache=function(r){return new vS(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new aS(n),this.Ds=new pS(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new gS(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new _S(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class _S extends cT{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.ks=new ou,this.Ms=null}static Os(e){return new au(e)}get Fs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),E.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Fs,r=>{const i=B.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return E.or([()=>E.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cu(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(If(n))return E.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,kc(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,i){return If(n)||i.isEqual(X.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(df()<=ne.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cc(n)),this.Oi(e,o,n,iT(i,-1)))})}ki(e,n){let r=new Ie(vg(e));return n.forEach((i,s)=>{ru(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return df()<=ne.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Cc(n)),this.Di.getDocumentsMatchingQuery(e,n,pn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Oe(re),this.Bi=new Lr(s=>eu(s),tu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dS(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function TS(t,e,n,r){return new IS(t,e,n,r)}async function Dg(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=ee();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function Pg(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function SS(t,e){const n=te(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const p=i.get(h);if(!p)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Le.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(h,m),function(_,D,I){return _.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,m,u)&&a.push(n.Vs.updateTargetData(s,m))});let c=gn(),l=ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(kS(s,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(X.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.$i=i,s))}function kS(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function CS(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Mn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Rc(t,e,n){const r=te(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hi(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Nf(t,e,n){const r=te(t);let i=X.min(),s=ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Bi.get(l);return h!==void 0?E.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,Kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ee())).next(a=>(AS(r,CT(e),a),{documents:a,ji:s})))}function AS(t,e,n){let r=X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Df{constructor(){this.activeTargetIds=kg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xS{constructor(){this.Fr=new Df,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw pf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=RS[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new GI;a.listenOnce(qI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Sa.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Sa.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const p=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(_)>=0?_:A.UNKNOWN}(h.status);o(new V(p,h.message))}else o(new V(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(A.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=zI(),o=HI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WI({})),this.uo(a.initMessageHeaders,n,r),Ap()||Op()||Lw()||Rp()||Fw()||xp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");L("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const p=new NS({jr:_=>{h?L("Connection","Not sending because WebChannel is closed:",_):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",_),l.send(_))},Wr:()=>l.close()}),m=(_,D,I)=>{_.listen(D,v=>{try{I(v)}catch(C){setTimeout(()=>{throw C},0)}})};return m(l,os.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),m(l,os.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),p.eo())}),m(l,os.EventType.ERROR,_=>{h||(h=!0,pf("Connection","WebChannel transport errored:",_),p.eo(new V(A.UNAVAILABLE,"The operation could not be completed")))}),m(l,os.EventType.MESSAGE,_=>{var D;if(!h){const I=_.data[0];we(!!I);const v=I,C=v.error||((D=v[0])===null||D===void 0?void 0:D.error);if(C){L("Connection","WebChannel received error:",C);const N=C.status;let M=function(ce){const ge=ye[ce];if(ge!==void 0)return Ig(ge)}(N),Y=C.message;M===void 0&&(M=A.INTERNAL,Y="Unknown error status: "+N+" with message "+C.message),h=!0,p.eo(new V(M,Y)),l.close()}else L("Connection","WebChannel received:",I),p.no(I)}}),m(o,KI.STAT_EVENT,_=>{_.stat===hf.PROXY?L("Connection","Detected buffering proxy"):_.stat===hf.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Aa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return new qT(t,!0)}class Lg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,i,s,o,a,c){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Lg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(qt(n.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MS extends PS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=XT(this.wt,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?ki(s.readTime):X.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Rf(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Sc(a)?{documents:QT(i,a)}:{query:JT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=WT(i,s.resumeToken):s.snapshotVersion.compareTo(X.min())>0&&(o.readTime=KT(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=eS(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Rf(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(A.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class FS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(qt(n),this.su=!1):L("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Wi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c.lu.add(4),await Ki(c),c._u.set("Unknown"),c.lu.delete(4),await Wo(c)}(this))})}),this._u=new FS(r,i)}}async function Wo(t){if(Wi(t))for(const e of t.fu)await e(!0)}async function Ki(t){for(const e of t.fu)await e(!1)}function Fg(t,e){const n=te(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),hu(n)?uu(n):Fr(n).Co()&&lu(n,e))}function Ug(t,e){const n=te(t),r=Fr(n);n.hu.delete(e),r.Co()&&$g(n,e),n.hu.size===0&&(r.Co()?r.ko():Wi(n)&&n._u.set("Unknown"))}function lu(t,e){t.wu.Nt(e.targetId),Fr(t).Qo(e)}function $g(t,e){t.wu.Nt(e),Fr(t).jo(e)}function uu(t){t.wu=new jT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Fr(t).start(),t._u.iu()}function hu(t){return Wi(t)&&!Fr(t).Do()&&t.hu.size>0}function Wi(t){return te(t).lu.size===0}function Bg(t){t.wu=void 0}async function $S(t){t.hu.forEach((e,n)=>{lu(t,e)})}async function BS(t,e){Bg(t),hu(t)?(t._u.uu(e),uu(t)):t._u.set("Unknown")}async function VS(t,e,n){if(t._u.set("Online"),e instanceof Ag&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mf(t,r)}else if(e instanceof Es?t.wu.Ut(e):e instanceof Cg?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(X.min()))try{const r=await Pg(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(Le.EMPTY_BYTE_STRING,c.snapshotVersion)),$g(i,a);const l=new Mn(c.target,a,1,c.sequenceNumber);lu(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Mf(t,r)}}async function Mf(t,e,n){if(!Hi(e))throw e;t.lu.add(1),await Ki(t),t._u.set("Offline"),n||(n=()=>Pg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Wo(t)})}async function Lf(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Wi(n);n.lu.add(3),await Ki(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Wo(n)}async function jS(t,e){const n=te(t);e?(n.lu.delete(2),await Wo(n)):e||(n.lu.add(2),await Ki(n),n._u.set("Unknown"))}function Fr(t){return t.mu||(t.mu=function(e,n,r){const i=te(e);return i.tu(),new MS(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:$S.bind(null,t),Jr:BS.bind(null,t),Go:VS.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),hu(t)?uu(t):t._u.set("Unknown")):(await t.mu.stop(),Bg(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fu(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(t,e){if(qt("AsyncQueue",`${e}: ${t}`),Hi(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=Wr(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.yu=new Oe(B.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class kr{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new kr(e,n,gr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.Iu=void 0,this.listeners=[]}}class HS{constructor(){this.queries=new Lr(e=>gg(e),zo),this.onlineState="Unknown",this.Tu=new Set}}async function jg(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zS),i)try{s.Iu=await n.onListen(r)}catch(o){const a=Vg(o,`Initialization of query '${Cc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&du(n)}async function zg(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qS(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&du(n)}function KS(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function du(t){t.Tu.forEach(e=>{e.next()})}class Hg{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class Kg{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ee(),this.mutatedKeys=ee(),this.Lu=vg(e),this.Uu=new gr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Ff,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const p=i.get(u),m=ru(this.query,h)?h:null,_=!!p&&this.mutatedKeys.has(p.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;p&&m?p.data.isEqual(m.data)?_!==D&&(r.track({type:3,doc:m}),I=!0):this.Qu(p,m)||(r.track({type:2,doc:m}),I=!0,(c&&this.Lu(m,c)>0||l&&this.Lu(m,l)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),I=!0):p&&!m&&(r.track({type:1,doc:p}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),s=D?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,u)=>function(h,p){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return m(h)-m(p)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,s.length!==0||c?{snapshot:new kr(this.query,e.Uu,i,s,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Ff,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ee(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new Kg(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new qg(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=ee();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return kr.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class GS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YS{constructor(e){this.key=e,this.Xu=!1}}class XS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Lr(a=>gg(a),zo),this.ec=new Map,this.nc=new Set,this.sc=new Oe(B.comparator),this.ic=new Map,this.rc=new ou,this.oc={},this.uc=new Map,this.cc=Sr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function QS(t,e){const n=ik(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await CS(n.localStore,Kt(e));n.isPrimaryClient&&Fg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await JS(n,e,r,a==="current")}return i}async function JS(t,e,n,r){t.hc=(u,h,p)=>async function(m,_,D,I){let v=_.view.Ku(D);v.Mi&&(v=await Nf(m.localStore,_.query,!1).then(({documents:M})=>_.view.Ku(M,v)));const C=I&&I.targetChanges.get(_.targetId),N=_.view.applyChanges(v,m.isPrimaryClient,C);return $f(m,_.targetId,N.zu),N.snapshot}(t,u,h,p);const i=await Nf(t.localStore,e,!0),s=new WS(e,i.ji),o=s.Ku(i.documents),a=qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);$f(t,n,c.zu);const l=new GS(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function ZS(t,e){const n=te(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!zo(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ug(n.remoteStore,r.targetId),Nc(n,r.targetId)}).catch(Ql)):(Nc(n,r.targetId),await Rc(n.localStore,r.targetId,!0))}async function Wg(t,e){const n=te(t);try{const r=await SS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?we(o.Xu):i.removedDocuments.size>0&&(we(o.Xu),o.Xu=!1))}),await Yg(n,r,e)}catch(r){await Ql(r)}}function Uf(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=te(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&du(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ek(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Oe(B.comparator);o=o.insert(s,Ne.newNoDocument(s,X.min()));const a=ee().add(s),c=new Ko(X.min(),new Map,new Ie(re),o,a);await Wg(r,c),r.sc=r.sc.remove(s),r.ic.delete(e),pu(r)}else await Rc(r.localStore,e,!1).then(()=>Nc(r,e,n)).catch(Ql)}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Gg(t,r)})}function Gg(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ug(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),pu(t))}function $f(t,e,n){for(const r of n)r instanceof qg?(t.rc.addReference(r.key,e),tk(t,r)):r instanceof Kg?(L("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Gg(t,r.key)):G()}function tk(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.nc.add(r),pu(t))}function pu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(pe.fromString(e)),r=t.cc.next();t.ic.set(r,new YS(n)),t.sc=t.sc.insert(n,r),Fg(t.remoteStore,new Mn(Kt(nu(n.path)),r,2,Jl.ot))}}async function Yg(t,e,n){const r=te(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=cu.Vi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Pi,p=>l.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>E.forEach(h.vi,p=>l.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!Hi(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const p=l.$i.get(h),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);l.$i=l.$i.insert(h,_)}}}(r.localStore,s))}async function nk(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Dg(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new V(A.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yg(n,r.Ki)}}function rk(t,e){const n=te(t),r=n.ic.get(e);if(r&&r.Xu)return ee().add(r.key);{let i=ee();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function ik(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ek.bind(null,e),e.Zu.Go=qS.bind(null,e.eventManager),e.Zu.lc=KS.bind(null,e.eventManager),e}class sk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Mg(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return TS(this.persistence,new ES,e.initialUser,this.wt)}_c(e){return new wS(au.Os,this.wt)}dc(e){return new xS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ok{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nk.bind(null,this.syncEngine),await jS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HS}createDatastore(e){const n=Mg(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DS(i));var i;return function(s,o,a,c){return new LS(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Uf(this.syncEngine,a,0),o=Pf.V()?new Pf:new OS,new US(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new XS(r,i,s,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);L("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ki(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=fg.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ck(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Dg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uk(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Lf(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Lf(e.remoteStore,s)),t.onlineComponents=e}async function uk(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await ck(t,new sk)),t.offlineComponents}async function hk(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await lk(t,new ok)),t.onlineComponents}async function Qg(t){const e=await hk(t),n=e.eventManager;return n.onListen=QS.bind(null,e.syncEngine),n.onUnlisten=ZS.bind(null,e.syncEngine),n}function fk(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Xg({next:h=>{s.enqueueAndForget(()=>zg(i,u));const p=h.docs.has(o);!p&&h.fromCache?c.reject(new V(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&a&&a.source==="server"?c.reject(new V(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Hg(nu(o.path),l,{includeMetadataChanges:!0,Du:!0});return jg(i,u)}(await Qg(t),t.asyncQueue,e,n,r)),r.promise}function dk(t,e,n={}){const r=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Xg({next:h=>{s.enqueueAndForget(()=>zg(i,u)),h.fromCache&&a.source==="server"?c.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Hg(o,l,{includeMetadataChanges:!0,Du:!0});return jg(i,u)}(await Qg(t),t.asyncQueue,e,n,r)),r.promise}const Bf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pk(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vf(t){if(!B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jf(t){if(B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function to(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mk(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1,e instanceof Ir?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(i.options.projectId)}(e))}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new XI;switch(n.type){case"gapi":const r=n.client;return we(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ZI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bf.get(e);n&&(L("ComponentProvider","Removing Datastore"),Bf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Go{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class ln extends Go{constructor(e,n,r){super(e,n,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new B(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function gu(t,e,...n){if(t=Yn(t),Jg("collection","path",e),t instanceof mu){const r=pe.fromString(e,...n);return jf(r),new ln(t,null,r)}{if(!(t instanceof Ct||t instanceof ln))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return jf(r),new ln(t.firestore,null,r)}}function gk(t,e,...n){if(t=Yn(t),arguments.length===1&&(e=fg.I()),Jg("doc","path",e),t instanceof mu){const r=pe.fromString(e,...n);return Vf(r),new Ct(t,null,new B(r))}{if(!(t instanceof Ct||t instanceof ln))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return Vf(r),new Ct(t.firestore,t instanceof ln?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Lg(this,"async_queue_retry"),this.Kc=()=>{const n=Aa();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Aa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Aa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new cn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Hi(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw qt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=fu.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class vu extends mu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new vk,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ev(this),this._firestoreClient.terminate()}}function yk(t=gl()){return Eo(t,"firestore").getImmediate()}function Zg(t){return t._firestoreClient||ev(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ev(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new hT(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ak(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._byteString=e}static fromBase64String(e){try{return new no(Le.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new no(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}const wk=new RegExp("[~\\*/\\[\\]]");function _k(t,e,n){if(e.search(wk)>=0)throw Hf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tv(...e.split("."))._internalPath}catch{throw Hf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new V(A.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ek(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ek extends nv{data(){return super.data()}}function rv(t,e){return typeof e=="string"?_k(t,e):e instanceof tv?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iv extends nv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Is extends iv{data(e={}){return super.data(e)}}class Ik{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Is(this._firestore,this._userDataWriter,r.key,r,new Gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Is(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Gr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Is(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Gr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:Tk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Bo(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new bk(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=mn(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);we(Ng(r));const i=new Ir(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){t=to(t,Ct);const e=to(t.firestore,vu);return fk(Zg(e),t._key).then(n=>Ak(e,t,n))}class sv extends kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function yu(t){t=to(t,Go);const e=to(t.firestore,vu),n=Zg(e),r=new sv(e);return Sk(t._query),dk(n,t._query).then(i=>new Ik(e,r,t,i))}function Ak(t,e,n){const r=n.docs.get(e._key),i=new sv(t);return new iv(t,i,e._key,r,new Gr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Mr=n})(Rr),Vn(new dn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new vu(i,new QI(n.getProvider("auth-internal")),new tT(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Tt(ff,"3.4.14",t),Tt(ff,"3.4.14","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebasestorage.googleapis.com",xk="storageBucket",Ok=2*60*1e3,Rk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Rt{constructor(e,n){super(xa(e),`Firebase Storage: ${n} (${xa(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Nt.prototype)}_codeEquals(e){return xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function xa(t){return"storage/"+t}function Nk(){const t="An unknown error occurred, please check the error payload for server response.";return new Nt("unknown",t)}function Dk(){return new Nt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Pk(){return new Nt("canceled","User canceled the upload/download.")}function Mk(t){return new Nt("invalid-url","Invalid URL '"+t+"'.")}function Lk(t){return new Nt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function qf(t){return new Nt("invalid-argument",t)}function av(){return new Nt("app-deleted","The Firebase app was deleted.")}function Fk(t){return new Nt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(r.path==="")return r;throw Lk(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},D=n===ov?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${D}/${i}/${I}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:m,indices:_,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<N.length;M++){const Y=N[M],ce=Y.regex.exec(e);if(ce){const ge=ce[Y.indices.bucket];let Ue=ce[Y.indices.path];Ue||(Ue=""),r=new dt(ge,Ue),Y.postModify(r);break}}if(r==null)throw Mk(e);return r}}class Uk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(m,c())},I)}function p(){s&&clearTimeout(s)}function m(I,...v){if(l){p();return}if(I){p(),u.call(null,I,...v);return}if(c()||o){p(),u.call(null,I,...v);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let _=!1;function D(I){_||(_=!0,p(),!l&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function Bk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){return t!==void 0}function Kf(t,e,n,r){if(r<e)throw qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qf(`Invalid value for '${t}'. Expected ${n} or less.`)}function jk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ro;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ro||(ro={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,i,s,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ls(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ro.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=s.getErrorCode()===ro.ABORT;r(!1,new ls(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new ls(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Vk(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Nk();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?av():Pk();o(c)}else{const c=Dk();o(c)}};this.canceled_?n(!1,new ls(!1,null,!0)):this.backoffId_=$k(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class ls{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Hk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Kk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Wk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Gk(t,e,n,r,i,s){const o=jk(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Kk(c,e),Hk(c,n),qk(c,s),Wk(c,r),new zk(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Xk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new io(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xk(this._location.path)}get storage(){return this._service}get parent(){const e=Yk(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new io(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Fk(e)}}function Wf(t,e){const n=e==null?void 0:e[xk];return n==null?null:dt.makeFromBucketSpec(n,t)}class Qk{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ov,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ok,this._maxUploadRetryTime=Rk,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=Wf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=Wf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new io(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new Uk(av());{const s=Gk(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gf="@firebase/storage",Yf="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="storage";function Jk(t=gl(),e){return t=Yn(t),Eo(t,cv).getImmediate({identifier:e})}function Zk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Qk(n,r,i,e,Rr)}function eC(){Vn(new dn(cv,Zk,"PUBLIC").setMultipleInstances(!0)),Tt(Gf,Yf,""),Tt(Gf,Yf,"esm2017")}eC();const tC={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},bu="tAD6hG0KxDMM1OiiRmfhRgXyY1d2",wu=z_(tC),Xf=jE(wu),Yo=yk(wu);Jk(wu);const at=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},nC={components:{FontAwesomeIcon:Tp},data(){return{buttonLabel:"login",user:null,token:null,isLoggedIn:!1}},methods:{login(){tE(Xf,new wt).then(t=>{const e=wt.credentialFromResult(t);this.token=e.accessToken,this.user=t.user}).catch(t=>{console.log(t.message),alert(t.message)})},logout(){confirm("Are you sure you want to logout?")&&this.authLogout()},async authLogout(){try{await Xf.signOut(),this.isLoggedIn=!1,this.user=null,this.token=null,console.log("logged out successfully")}catch(t){console.log(t.message)}}},watch:{user(t){t&&t.email!=="xmliszt@gmail.com"?this.authLogout().then(()=>{alert("You are not recognised as the owner of this page."),this.isLoggedIn=!1}).catch(e=>{console.log(e.message)}):t&&(this.isLoggedIn=!0,t&&Ck(gk(Yo,"v2",t.uid)).then(e=>{e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(e=>{console.log("Error getting document:",e)}))}}};function rC(t,e,n,r,i,s){const o=et("FontAwesomeIcon");return ve(),Ee("div",null,[i.isLoggedIn?(ve(),Ee("button",{key:1,class:"icon-button hover-effect",onClick:e[1]||(e[1]=(...a)=>s.logout&&s.logout(...a))},[he(o,{icon:"fa-solid fa-arrow-up-right-from-square"})])):(ve(),Ee("button",{key:0,class:"icon-button hover-effect",onClick:e[0]||(e[0]=(...a)=>s.login&&s.login(...a))},[he(o,{icon:"fa-solid fa-arrow-right-to-bracket"})]))])}const iC=at(nC,[["render",rC]]),sC="/staging/assets/avatar.42f08a86.jpeg";const oC={data(){return{imgUrl:sC,imgAlt:"No Image"}}},aC={class:"avatar drop-shadow-light morph-hover-effect"},cC=["src","alt"];function lC(t,e,n,r,i,s){return ve(),Ee("div",aC,[W("img",{src:i.imgUrl,alt:i.imgAlt},null,8,cC)])}const uC=at(oC,[["render",lC],["__scopeId","data-v-318b29b9"]]);function Dc(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Qf(t,e){return Math.random()*(e-t+1)+t}const hC={props:["size","duration"],data(){return{starStyle:{animation:"risingStar 100s linear infinite"},starClassName:"star small"}},created(){let t=window.screen.availWidth,e=window.screen.availHeight,n=Qf(20,50),r=Qf(0,3),i=Dc(100,t-100);this.starStyle={position:"absolute",animation:`risingStar ${n}s linear infinite`,"animation-delay":`${r}s`,top:`${e/2+100}px`,left:`${i}px`};let s=["small","medium","large"],o=Dc(0,2),a=s[o];a==="small"?this.starClassName="star small":a==="medium"?this.starClassName="star medium":a==="large"&&(this.starClassName="star large")}};function fC(t,e,n,r,i,s){return ve(),Ee("div",{class:Gn(i.starClassName),style:Ln(i.starStyle)},null,6)}const dC=at(hC,[["render",fC],["__scopeId","data-v-4e1318db"]]);const pC={components:{FishAvatar:uC,FishStar:dC},data(){return{scrollingEnable:!0,scrollingEnableClass:"scrolling-enable",scrollingDisableClass:"scrolling-disable"}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){t+e>=n&&(this.scrollingEnable=!1)},enableScroll(){this.scrollingEnable=!0}}},lv=t=>(Ci("data-v-0e427859"),t=t(),Ai(),t),mC={class:"parallax-background"},gC=lv(()=>W("h1",null,"Hi! I'm Li Yuxuan. Nice to meet you! \u{1F64C}\u{1F3FB}",-1)),vC={class:"parallax-fixed"},yC=lv(()=>W("div",{class:"parallax-base"},[W("div",null,[W("div",{class:"header-mountain"}),W("div",{class:"background"})])],-1));function bC(t,e,n,r,i,s){const o=et("FishStar"),a=et("FishAvatar");return ve(),Ee("div",{class:Gn(["parallax",[i.scrollingEnable?i.scrollingEnableClass:i.scrollingDisableClass]]),ref:"parallax",onScroll:e[0]||(e[0]=(...c)=>this.handleScroll&&this.handleScroll(...c))},[W("div",mC,[W("div",null,[(ve(),Ee(tt,null,As(50,c=>he(o,{key:c})),64)),gC])]),W("div",vC,[W("div",null,[he(a,{ref:"avatarView"},null,512)])]),yC],34)}const wC=at(pC,[["render",bC],["__scopeId","data-v-0e427859"]]);async function _C(){return new Promise((t,e)=>{yu(gu(Yo,"v2",bu,"taglines")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const EC={props:{label:String}},IC={class:"fish-tag"};function TC(t,e,n,r,i,s){return ve(),Ee("div",IC,Fn(n.label.toUpperCase()),1)}const SC=at(EC,[["render",TC],["__scopeId","data-v-ba16cd5c"]]);const kC={props:["skills"],emits:["onSentenceChanged","onWaitingForNextSentence","onStartTypingNextSentence"],data(){return{typingDelayMin:10,typingDelayMax:150,erasingDelay:20,newSentenceDelay:3e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",typedOutText:"",displayedTag:""}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} using ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.$emit("onStartTypingNextSentence");let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.$emit("onSentenceChanged",t),this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,Dc(this.typingDelayMin,this.typingDelayMax))):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.$emit("onWaitingForNextSentence"),setTimeout(this.startTyping,this.typingDelayMax+1100))}},created(){this.skills.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)},watch:{skills:{immediate:!0,handler(t){t.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)}}}},CC={class:"typewriter drop-shadow-dark"},AC=jd(" I "),xC={class:"typed-text"};function OC(t,e,n,r,i,s){return ve(),Ee("div",CC,[W("p",null,[AC,W("span",xC,Fn(this.typedOutText),1),W("span",{class:Gn(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])])}const RC=at(kC,[["render",OC],["__scopeId","data-v-48dddbbe"]]);const NC={components:{FishTag:SC,FishTypeWriter:RC},created(){this._getTaglines()},data(){return{displayedTag:"",isWaiting:!0,tagShowClass:"show",tagHideClass:"hide",skills:[]}},methods:{onTypeWriterSentenceChanged(t){this.displayedTag=t.category},async _getTaglines(){try{this.skills=await _C()}catch(t){alert(t.message)}}}},DC={class:"skills-overview"};function PC(t,e,n,r,i,s){const o=et("FishTypeWriter"),a=et("FishTag");return ve(),Ee("div",DC,[he(o,{class:"typewriter",skills:i.skills,onOnSentenceChanged:s.onTypeWriterSentenceChanged,onOnStartTypingNextSentence:e[0]||(e[0]=c=>this.isWaiting=!1),onOnWaitingForNextSentence:e[1]||(e[1]=c=>this.isWaiting=!0)},null,8,["skills","onOnSentenceChanged"]),he(a,{class:Gn(["fish-tag drop-shadow-dark",[i.isWaiting?i.tagHideClass:i.tagShowClass]]),label:i.displayedTag},null,8,["class","label"])])}const MC=at(NC,[["render",PC],["__scopeId","data-v-fc3c7a04"]]);const LC={components:{FontAwesomeIcon:Tp},props:["project"],data(){return{interactionRemovalDelay:2e3}},methods:{setBackground(){return{background:`url(${this.project.imgUrl})`}},directTo(){window.open(this.project.link,"__blank")},interact(){this.$refs.fishCard.classList.add("interaction"),setTimeout(()=>{this.$refs.fishCard.classList.remove("interaction")},this.interactionRemovalDelay)}}},FC=t=>(Ci("data-v-ab9f7a69"),t=t(),Ai(),t),UC=FC(()=>W("div",{class:"glow"},null,-1)),$C={class:"fish-card-overlay"},BC={class:"title"},VC={class:"details"},jC={class:"plus"};function zC(t,e,n,r,i,s){const o=et("FontAwesomeIcon");return ve(),Ee("div",{ref:"fishCard",class:"fish-card",onClick:e[1]||(e[1]=(...a)=>s.directTo&&s.directTo(...a))},[W("div",{class:"fish-card-bg",style:Ln(s.setBackground())},null,4),UC,W("div",$C,[W("span",BC,Fn(n.project.title),1),W("span",VC,Fn(n.project.details),1)]),W("div",{class:"fish-card-expand hover-effect",onClick:e[0]||(e[0]=(...a)=>s.directTo&&s.directTo(...a))},[W("div",jC,[he(o,{icon:"fa-solid fa-expand"})])])],512)}const HC=at(LC,[["render",zC],["__scopeId","data-v-ab9f7a69"]]);async function qC(){return new Promise((t,e)=>{yu(gu(Yo,"v2",bu,"skills")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),r.sort((i,s)=>i.priority-s.priority),t(r)}).catch(n=>{e(n)})})}async function KC(){return new Promise((t,e)=>{yu(gu(Yo,"v2",bu,"projects")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const WC={props:["label"]},uv=t=>(Ci("data-v-c2862340"),t=t(),Ai(),t),GC={class:"divider-wrapper"},YC=uv(()=>W("div",{class:"divider left"},null,-1)),XC=uv(()=>W("div",{class:"divider right"},null,-1));function QC(t,e,n,r,i,s){return ve(),Ee("div",GC,[YC,W("span",null,Fn(n.label),1),XC])}const JC=at(WC,[["render",QC],["__scopeId","data-v-c2862340"]]);const ZC={},eA=t=>(Ci("data-v-59dd664a"),t=t(),Ai(),t),tA={class:"fish-scroller"},nA=eA(()=>W("div",null,[W("span")],-1)),rA=[nA];function iA(t,e,n,r,i,s){return ve(),Ee("div",tA,rA)}const sA=at(ZC,[["render",iA],["__scopeId","data-v-59dd664a"]]);const oA={props:["title","skills"]},aA=t=>(Ci("data-v-3ffc5356"),t=t(),Ai(),t),cA={class:"skill-card drop-shadow-dark hover-effect"},lA={class:"card-header"},uA={class:"card-body"},hA=aA(()=>W("div",{class:"card-foot"},null,-1));function fA(t,e,n,r,i,s){return ve(),Ee("div",cA,[W("div",lA,[W("h1",null,Fn(n.title.toUpperCase()),1)]),W("div",uA,[(ve(!0),Ee(tt,null,As(n.skills,o=>(ve(),Ee("span",{key:o},Fn(o),1))),128))]),hA])}const dA=at(oA,[["render",fA],["__scopeId","data-v-3ffc5356"]]);const pA={components:{AuthButton:iC,ParallaxView:wC,SkillsOverview:MC,FishCard:HC,FishDivider:JC,FishScroller:sA,SkillCard:dA},data(){return{authBtnOpacity:1,authBtnHidden:!1,projects:[],scrollerStyle:{opacity:1},skills:[]}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){this.authBtnOpacity=1-t/(n-e),this.authBtnHidden=t+e>=n,this.scrollerStyle.opacity=1-t/(n-e)},handleMainScroll(){window.scrollY===0&&this.$refs.parallaxView.enableScroll()},async loadProjects(){try{this.projects=await KC()}catch(t){alert(t.message)}},async loadSkills(){try{this.skills=await qC()}catch(t){alert(t.message)}}},created(){this.loadProjects(),this.loadSkills()},mounted(){document.addEventListener("scroll",this.handleMainScroll)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll)}},mA={id:"login"},gA={id:"skills"},vA={id:"projects"},yA={id:"skills-details"};function bA(t,e,n,r,i,s){const o=et("FishScroller"),a=et("ParallaxView"),c=et("AuthButton"),l=et("SkillsOverview"),u=et("FishDivider"),h=et("FishCard"),p=et("SkillCard");return ve(),Ee("main",null,[W("div",{class:"scroller",style:Ln(i.scrollerStyle)},[he(o)],4),he(a,{ref:"parallaxView",onScroll:this.handleScroll},null,8,["onScroll"]),W("div",mA,[he(c,{ref:"authBtn",style:Ln({opacity:i.authBtnOpacity}),hidden:i.authBtnHidden},null,8,["style","hidden"])]),W("section",gA,[he(l)]),he(u,{label:"Projects"}),W("section",vA,[W("div",null,[(ve(!0),Ee(tt,null,As(i.projects,(m,_)=>(ve(),qu(h,{class:"fish-card",key:_,project:m},null,8,["project"]))),128))])]),he(u,{label:"Skills"}),W("section",yA,[W("div",null,[(ve(!0),Ee(tt,null,As(i.skills,m=>(ve(),qu(p,{key:m.title,title:m.title,skills:m.skills},null,8,["title","skills"]))),128))])])])}const wA=at(pA,[["render",bA]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var _A={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},EA={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},IA={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]},TA={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var SA={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};gw.add(EA,IA,_A,SA,TA);P0(wA).mount("#app");
