(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Oc(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lv=Oc(cv);function qf(t){return!!t||t===""}function ki(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ke(r)?fv(r):ki(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ke(t))return t;if(Ee(t))return t}}const uv=/;(?![^(]*\))/g,hv=/:(.+)/;function fv(t){const e={};return t.split(uv).forEach(n=>{if(n){const r=n.split(hv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tr(t){let e="";if(ke(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=Tr(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _s=t=>ke(t)?t:t==null?"":q(t)||Ee(t)&&(t.toString===Yf||!K(t.toString))?JSON.stringify(t,Kf,2):String(t),Kf=(t,e)=>e&&e.__v_isRef?Kf(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Wf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!q(e)&&!Xf(e)?String(e):e,ae={},or=[],ut=()=>{},dv=()=>!1,mv=/^on[^a-z]/,no=t=>mv.test(t),Rc=t=>t.startsWith("onUpdate:"),ze=Object.assign,Nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pv=Object.prototype.hasOwnProperty,Q=(t,e)=>pv.call(t,e),q=Array.isArray,ar=t=>ro(t)==="[object Map]",Wf=t=>ro(t)==="[object Set]",K=t=>typeof t=="function",ke=t=>typeof t=="string",Dc=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Gf=t=>Ee(t)&&K(t.then)&&K(t.catch),Yf=Object.prototype.toString,ro=t=>Yf.call(t),gv=t=>ro(t).slice(8,-1),Xf=t=>ro(t)==="[object Object]",Pc=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,as=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vv=/-(\w)/g,Ct=io(t=>t.replace(vv,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,kr=io(t=>t.replace(yv,"-$1").toLowerCase()),so=io(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=io(t=>t?`on${so(t)}`:""),Es=(t,e)=>!Object.is(t,e),Jo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Is=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Eu;const wv=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pt;class _v{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ev(t,e=pt){e&&e.active&&e.effects.push(t)}const Mc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qf=t=>(t.w&ln)>0,Jf=t=>(t.n&ln)>0,Iv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ln},Tv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Qf(i)&&!Jf(i)?i.delete(t):e[n++]=i,i.w&=~ln,i.n&=~ln}e.length=n}},Ca=new WeakMap;let Vr=0,ln=1;const Aa=30;let st;const On=Symbol(""),xa=Symbol("");class Lc{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ev(this,r)}run(){if(!this.active)return this.fn();let e=st,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=st,st=this,rn=!0,ln=1<<++Vr,Vr<=Aa?Iv(this):Iu(this),this.fn()}finally{Vr<=Aa&&Tv(this),ln=1<<--Vr,st=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&(Iu(this),this.onStop&&this.onStop(),this.active=!1)}}function Iu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const Zf=[];function Sr(){Zf.push(rn),rn=!1}function Cr(){const t=Zf.pop();rn=t===void 0?!0:t}function Ze(t,e,n){if(rn&&st){let r=Ca.get(t);r||Ca.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Mc()),ed(i)}}function ed(t,e){let n=!1;Vr<=Aa?Jf(t)||(t.n|=ln,n=!Qf(t)):n=!t.has(st),n&&(t.add(st),st.deps.push(t))}function Ut(t,e,n,r,i,s){const o=Ca.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Pc(n)&&a.push(o.get("length")):(a.push(o.get(On)),ar(t)&&a.push(o.get(xa)));break;case"delete":q(t)||(a.push(o.get(On)),ar(t)&&a.push(o.get(xa)));break;case"set":ar(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&Oa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Oa(Mc(c))}}function Oa(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&Tu(r);for(const r of n)r.computed||Tu(r)}function Tu(t,e){(t!==st||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const kv=Oc("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dc)),Sv=Fc(),Cv=Fc(!1,!0),Av=Fc(!0),ku=xv();function xv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let s=0,o=this.length;s<o;s++)Ze(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr();const r=ie(this)[e].apply(this,n);return Cr(),r}}),t}function Fc(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?qv:od:e?sd:id).get(r))return r;const o=q(r);if(!t&&o&&Q(ku,i))return Reflect.get(ku,i,s);const a=Reflect.get(r,i,s);return(Dc(i)?td.has(i):kv(i))||(t||Ze(r,"get",i),e)?a:Ve(a)?o&&Pc(i)?a:a.value:Ee(a)?t?ad(a):Bc(a):a}}const Ov=nd(),Rv=nd(!0);function nd(t=!1){return function(n,r,i,s){let o=n[r];if(oi(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&!oi(i)&&(Ra(i)||(i=ie(i),o=ie(o)),!q(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=q(n)&&Pc(r)?Number(r)<n.length:Q(n,r),c=Reflect.set(n,r,i,s);return n===ie(s)&&(a?Es(i,o)&&Ut(n,"set",r,i):Ut(n,"add",r,i)),c}}function Nv(t,e){const n=Q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ut(t,"delete",e,void 0),r}function Dv(t,e){const n=Reflect.has(t,e);return(!Dc(e)||!td.has(e))&&Ze(t,"has",e),n}function Pv(t){return Ze(t,"iterate",q(t)?"length":On),Reflect.ownKeys(t)}const rd={get:Sv,set:Ov,deleteProperty:Nv,has:Dv,ownKeys:Pv},Mv={get:Av,set(t,e){return!0},deleteProperty(t,e){return!0}},Lv=ze({},rd,{get:Cv,set:Rv}),Uc=t=>t,oo=t=>Reflect.getPrototypeOf(t);function Wi(t,e,n=!1,r=!1){t=t.__v_raw;const i=ie(t),s=ie(e);n||(e!==s&&Ze(i,"get",e),Ze(i,"get",s));const{has:o}=oo(i),a=r?Uc:n?zc:jc;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Gi(t,e=!1){const n=this.__v_raw,r=ie(n),i=ie(t);return e||(t!==i&&Ze(r,"has",t),Ze(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Yi(t,e=!1){return t=t.__v_raw,!e&&Ze(ie(t),"iterate",On),Reflect.get(t,"size",t)}function Su(t){t=ie(t);const e=ie(this);return oo(e).has.call(e,t)||(e.add(t),Ut(e,"add",t,t)),this}function Cu(t,e){e=ie(e);const n=ie(this),{has:r,get:i}=oo(n);let s=r.call(n,t);s||(t=ie(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Es(e,o)&&Ut(n,"set",t,e):Ut(n,"add",t,e),this}function Au(t){const e=ie(this),{has:n,get:r}=oo(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ut(e,"delete",t,void 0),s}function xu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Ut(t,"clear",void 0,void 0),n}function Xi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ie(o),c=e?Uc:t?zc:jc;return!t&&Ze(a,"iterate",On),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Qi(t,e,n){return function(...r){const i=this.__v_raw,s=ie(i),o=ar(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Uc:e?zc:jc;return!e&&Ze(s,"iterate",c?xa:On),{next(){const{value:h,done:m}=l.next();return m?{value:h,done:m}:{value:a?[u(h[0]),u(h[1])]:u(h),done:m}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function Fv(){const t={get(s){return Wi(this,s)},get size(){return Yi(this)},has:Gi,add:Su,set:Cu,delete:Au,clear:xu,forEach:Xi(!1,!1)},e={get(s){return Wi(this,s,!1,!0)},get size(){return Yi(this)},has:Gi,add:Su,set:Cu,delete:Au,clear:xu,forEach:Xi(!1,!0)},n={get(s){return Wi(this,s,!0)},get size(){return Yi(this,!0)},has(s){return Gi.call(this,s,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Xi(!0,!1)},r={get(s){return Wi(this,s,!0,!0)},get size(){return Yi(this,!0)},has(s){return Gi.call(this,s,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Xi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Qi(s,!1,!1),n[s]=Qi(s,!0,!1),e[s]=Qi(s,!1,!0),r[s]=Qi(s,!0,!0)}),[t,n,e,r]}const[Uv,$v,Bv,Vv]=Fv();function $c(t,e){const n=e?t?Vv:Bv:t?$v:Uv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const jv={get:$c(!1,!1)},zv={get:$c(!1,!0)},Hv={get:$c(!0,!1)},id=new WeakMap,sd=new WeakMap,od=new WeakMap,qv=new WeakMap;function Kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wv(t){return t.__v_skip||!Object.isExtensible(t)?0:Kv(gv(t))}function Bc(t){return oi(t)?t:Vc(t,!1,rd,jv,id)}function Gv(t){return Vc(t,!1,Lv,zv,sd)}function ad(t){return Vc(t,!0,Mv,Hv,od)}function Vc(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Wv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function cr(t){return oi(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function oi(t){return!!(t&&t.__v_isReadonly)}function Ra(t){return!!(t&&t.__v_isShallow)}function cd(t){return cr(t)||oi(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function ld(t){return Is(t,"__v_skip",!0),t}const jc=t=>Ee(t)?Bc(t):t,zc=t=>Ee(t)?ad(t):t;function Yv(t){rn&&st&&(t=ie(t),ed(t.dep||(t.dep=Mc())))}function Xv(t,e){t=ie(t),t.dep&&Oa(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Qv(t){return Ve(t)?t.value:t}const Jv={get:(t,e,n)=>Qv(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function ud(t){return cr(t)?t:new Proxy(t,Jv)}class Zv{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lc(e,()=>{this._dirty||(this._dirty=!0,Xv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ie(this);return Yv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ey(t,e,n=!1){let r,i;const s=K(t);return s?(r=t,i=ut):(r=t.get,i=t.set),new Zv(r,i,s||!i,n)}function sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){ao(s,e,n)}return i}function ht(t,e,n,r){if(K(t)){const s=sn(t,e,n,r);return s&&Gf(s)&&s.catch(o=>{ao(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(ht(t[s],e,n,r));return i}function ao(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){sn(c,null,10,[t,o,a]);return}}ty(t,n,i,r)}function ty(t,e,n,r=!0){console.error(t)}let Ts=!1,Na=!1;const Je=[];let Pt=0;const Wr=[];let jr=null,Zn=0;const Gr=[];let Jt=null,er=0;const hd=Promise.resolve();let Hc=null,Da=null;function ny(t){const e=Hc||hd;return t?e.then(this?t.bind(this):t):e}function ry(t){let e=Pt+1,n=Je.length;for(;e<n;){const r=e+n>>>1;ai(Je[r])<t?e=r+1:n=r}return e}function fd(t){(!Je.length||!Je.includes(t,Ts&&t.allowRecurse?Pt+1:Pt))&&t!==Da&&(t.id==null?Je.push(t):Je.splice(ry(t.id),0,t),dd())}function dd(){!Ts&&!Na&&(Na=!0,Hc=hd.then(gd))}function iy(t){const e=Je.indexOf(t);e>Pt&&Je.splice(e,1)}function md(t,e,n,r){q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),dd()}function sy(t){md(t,jr,Wr,Zn)}function oy(t){md(t,Jt,Gr,er)}function co(t,e=null){if(Wr.length){for(Da=e,jr=[...new Set(Wr)],Wr.length=0,Zn=0;Zn<jr.length;Zn++)jr[Zn]();jr=null,Zn=0,Da=null,co(t,e)}}function pd(t){if(co(),Gr.length){const e=[...new Set(Gr)];if(Gr.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,r)=>ai(n)-ai(r)),er=0;er<Jt.length;er++)Jt[er]();Jt=null,er=0}}const ai=t=>t.id==null?1/0:t.id;function gd(t){Na=!1,Ts=!0,co(t),Je.sort((n,r)=>ai(n)-ai(r));const e=ut;try{for(Pt=0;Pt<Je.length;Pt++){const n=Je[Pt];n&&n.active!==!1&&sn(n,null,14)}}finally{Pt=0,Je.length=0,pd(),Ts=!1,Hc=null,(Je.length||Wr.length||Gr.length)&&gd(t)}}function ay(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:m}=r[u]||ae;m&&(i=n.map(p=>p.trim())),h&&(i=n.map(bv))}let a,c=r[a=Qo(e)]||r[a=Qo(Ct(e))];!c&&s&&(c=r[a=Qo(kr(e))]),c&&ht(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ht(l,t,6,i)}}function vd(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!K(t)){const c=l=>{const u=vd(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(q(s)?s.forEach(c=>o[c]=null):ze(o,s),r.set(t,o),o)}function lo(t,e){return!t||!no(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,kr(e))||Q(t,e))}let wt=null,uo=null;function ks(t){const e=wt;return wt=t,uo=t&&t.type.__scopeId||null,e}function yd(t){uo=t}function bd(){uo=null}function cy(t,e=wt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&$u(-1);const s=ks(e),o=t(...i);return ks(s),r._d&&$u(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Zo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:m,setupState:p,ctx:E,inheritAttrs:D}=t;let I,v;const C=ks(t);try{if(n.shapeFlag&4){const M=i||r;I=vt(u.call(M,M,h,s,p,m,E)),v=c}else{const M=e;I=vt(M.length>1?M(s,{attrs:c,slots:a,emit:l}):M(s,null)),v=e.props?c:ly(c)}}catch(M){Yr.length=0,ao(M,t,1),I=me(ci)}let N=I;if(v&&D!==!1){const M=Object.keys(v),{shapeFlag:G}=N;M.length&&G&7&&(o&&M.some(Rc)&&(v=uy(v,o)),N=mr(N,v))}return n.dirs&&(N=mr(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,ks(C),I}const ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||no(n))&&((e||(e={}))[n]=t[n]);return e},uy=(t,e)=>{const n={};for(const r in t)(!Rc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hy(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ou(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const m=u[h];if(o[m]!==r[m]&&!lo(l,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ou(r,o,l):!0:!!o;return!1}function Ou(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!lo(n,s))return!0}return!1}function fy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dy=t=>t.__isSuspense;function my(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):oy(t)}function py(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function ea(t,e,n=!1){const r=Re||wt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(r.proxy):e}}const Ru={};function cs(t,e,n){return wd(t,e,n)}function wd(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ae){const a=Re;let c,l=!1,u=!1;if(Ve(t)?(c=()=>t.value,l=Ra(t)):cr(t)?(c=()=>t,r=!0):q(t)?(u=!0,l=t.some(v=>cr(v)||Ra(v)),c=()=>t.map(v=>{if(Ve(v))return v.value;if(cr(v))return tr(v);if(K(v))return sn(v,a,2)})):K(t)?e?c=()=>sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ht(t,a,3,[m])}:c=ut,e&&r){const v=c;c=()=>tr(v())}let h,m=v=>{h=I.onStop=()=>{sn(v,a,4)}};if(ui)return m=ut,e?n&&ht(e,a,3,[c(),u?[]:void 0,m]):c(),ut;let p=u?[]:Ru;const E=()=>{if(!!I.active)if(e){const v=I.run();(r||l||(u?v.some((C,N)=>Es(C,p[N])):Es(v,p)))&&(h&&h(),ht(e,a,3,[v,p===Ru?void 0:p,m]),p=v)}else I.run()};E.allowRecurse=!!e;let D;i==="sync"?D=E:i==="post"?D=()=>Ke(E,a&&a.suspense):D=()=>sy(E);const I=new Lc(c,D);return e?n?E():p=I.run():i==="post"?Ke(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&Nc(a.scope.effects,I)}}function gy(t,e,n){const r=this.proxy,i=ke(t)?t.includes(".")?_d(r,t):()=>r[t]:t.bind(r,r);let s;K(e)?s=e:(s=e.handler,n=e);const o=Re;pr(this);const a=wd(i,s.bind(r),n);return o?pr(o):Rn(),a}function _d(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function tr(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))tr(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)tr(t[n],e);else if(Wf(t)||ar(t))t.forEach(n=>{tr(n,e)});else if(Xf(t))for(const n in t)tr(t[n],e);return t}function qc(t){return K(t)?{setup:t,name:t.name}:t}const ls=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function vy(t,e){Id(t,"a",e)}function yy(t,e){Id(t,"da",e)}function Id(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ho(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ed(i.parent.vnode)&&by(r,e,n,i),i=i.parent}}function by(t,e,n,r){const i=ho(e,t,r,!0);Td(()=>{Nc(r[e],i)},n)}function ho(t,e,n=Re,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sr(),pr(n);const a=ht(e,n,t,o);return Rn(),Cr(),a});return r?i.unshift(s):i.push(s),s}}const Kt=t=>(e,n=Re)=>(!ui||t==="sp")&&ho(t,e,n),wy=Kt("bm"),_y=Kt("m"),Ey=Kt("bu"),Iy=Kt("u"),Ty=Kt("bum"),Td=Kt("um"),ky=Kt("sp"),Sy=Kt("rtg"),Cy=Kt("rtc");function Ay(t,e=Re){ho("ec",t,e)}function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Sr(),ht(c,n,8,[t.el,a,t,e]),Cr())}}const kd="components";function _t(t,e){return Oy(kd,t,!0,e)||t}const xy=Symbol();function Oy(t,e,n=!0,r=!1){const i=wt||Re;if(i){const s=i.type;if(t===kd){const a=a0(s,!1);if(a&&(a===e||a===Ct(e)||a===so(Ct(e))))return s}const o=Nu(i[t]||s[t],e)||Nu(i.appContext[t],e);return!o&&r?s:o}}function Nu(t,e){return t&&(t[e]||t[Ct(e)]||t[so(Ct(e))])}function Ry(t,e,n,r){let i;const s=n&&n[r];if(q(t)||ke(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Pa=t=>t?Ud(t)?Yc(t)||t.proxy:Pa(t.parent):null,Ss=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$emit:t=>t.emit,$options:t=>Cd(t),$forceUpdate:t=>t.f||(t.f=()=>fd(t.update)),$nextTick:t=>t.n||(t.n=ny.bind(t.proxy)),$watch:t=>gy.bind(t)}),Ny={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ae&&Q(r,e))return o[e]=1,r[e];if(i!==ae&&Q(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,s[e];if(n!==ae&&Q(n,e))return o[e]=4,n[e];Ma&&(o[e]=0)}}const u=Ss[e];let h,m;if(u)return e==="$attrs"&&Ze(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&Q(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Q(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ae&&Q(i,e)?(i[e]=n,!0):r!==ae&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ae&&Q(t,o)||e!==ae&&Q(e,o)||(a=s[0])&&Q(a,o)||Q(r,o)||Q(Ss,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ma=!0;function Dy(t){const e=Cd(t),n=t.proxy,r=t.ctx;Ma=!1,e.beforeCreate&&Du(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:m,beforeUpdate:p,updated:E,activated:D,deactivated:I,beforeDestroy:v,beforeUnmount:C,destroyed:N,unmounted:M,render:G,renderTracked:ce,renderTriggered:ge,errorCaptured:Le,serverPrefetch:Ie,expose:bn,inheritAttrs:Gn,components:Lr,directives:qi,filters:gu}=e;if(l&&Py(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const le=o[pe];K(le)&&(r[pe]=le.bind(n))}if(i){const pe=i.call(n,n);Ee(pe)&&(t.data=Bc(pe))}if(Ma=!0,s)for(const pe in s){const le=s[pe],Nt=K(le)?le.bind(n,n):K(le.get)?le.get.bind(n,n):ut,Go=!K(le)&&K(le.set)?le.set.bind(n):ut,Fr=nt({get:Nt,set:Go});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Fr.value,set:Yn=>Fr.value=Yn})}if(a)for(const pe in a)Sd(a[pe],r,n,pe);if(c){const pe=K(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(le=>{py(le,pe[le])})}u&&Du(u,t,"c");function He(pe,le){q(le)?le.forEach(Nt=>pe(Nt.bind(n))):le&&pe(le.bind(n))}if(He(wy,h),He(_y,m),He(Ey,p),He(Iy,E),He(vy,D),He(yy,I),He(Ay,Le),He(Cy,ce),He(Sy,ge),He(Ty,C),He(Td,M),He(ky,Ie),q(bn))if(bn.length){const pe=t.exposed||(t.exposed={});bn.forEach(le=>{Object.defineProperty(pe,le,{get:()=>n[le],set:Nt=>n[le]=Nt})})}else t.exposed||(t.exposed={});G&&t.render===ut&&(t.render=G),Gn!=null&&(t.inheritAttrs=Gn),Lr&&(t.components=Lr),qi&&(t.directives=qi)}function Py(t,e,n=ut,r=!1){q(t)&&(t=La(t));for(const i in t){const s=t[i];let o;Ee(s)?"default"in s?o=ea(s.from||i,s.default,!0):o=ea(s.from||i):o=ea(s),Ve(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Du(t,e,n){ht(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sd(t,e,n,r){const i=r.includes(".")?_d(n,r):()=>n[r];if(ke(t)){const s=e[t];K(s)&&cs(i,s)}else if(K(t))cs(i,t.bind(n));else if(Ee(t))if(q(t))t.forEach(s=>Sd(s,e,n,r));else{const s=K(t.handler)?t.handler.bind(n):e[t.handler];K(s)&&cs(i,s,t)}}function Cd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Cs(c,l,o,!0)),Cs(c,e,o)),s.set(e,c),c}function Cs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Cs(t,s,n,!0),i&&i.forEach(o=>Cs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=My[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const My={data:Pu,props:En,emits:En,methods:En,computed:En,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:En,directives:En,watch:Fy,provide:Pu,inject:Ly};function Pu(t,e){return e?t?function(){return ze(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Ly(t,e){return En(La(t),La(e))}function La(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?ze(ze(Object.create(null),t),e):e}function Fy(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=Ue(t[r],e[r]);return n}function Uy(t,e,n,r=!1){const i={},s={};Is(s,fo,1),t.propsDefaults=Object.create(null),Ad(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Gv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function $y(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ie(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let m=u[h];if(lo(t.emitsOptions,m))continue;const p=e[m];if(c)if(Q(s,m))p!==s[m]&&(s[m]=p,l=!0);else{const E=Ct(m);i[E]=Fa(c,a,E,p,t,!1)}else p!==s[m]&&(s[m]=p,l=!0)}}}else{Ad(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=kr(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Fa(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Q(e,h)&&!0)&&(delete s[h],l=!0)}l&&Ut(t,"set","$attrs")}function Ad(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(as(c))continue;const l=e[c];let u;i&&Q(i,u=Ct(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:lo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ie(n),l=a||ae;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Fa(i,c,h,l[h],t,!Q(l,h))}}return o}function Fa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(pr(i),r=l[n]=c.call(null,e),Rn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===kr(n))&&(r=!0))}return r}function xd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!K(t)){const u=h=>{c=!0;const[m,p]=xd(h,e,!0);ze(o,m),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,or),or;if(q(s))for(let u=0;u<s.length;u++){const h=Ct(s[u]);Mu(h)&&(o[h]=ae)}else if(s)for(const u in s){const h=Ct(u);if(Mu(h)){const m=s[u],p=o[h]=q(m)||K(m)?{type:m}:m;if(p){const E=Uu(Boolean,p.type),D=Uu(String,p.type);p[0]=E>-1,p[1]=D<0||E<D,(E>-1||Q(p,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Mu(t){return t[0]!=="$"}function Lu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fu(t,e){return Lu(t)===Lu(e)}function Uu(t,e){return q(e)?e.findIndex(n=>Fu(n,t)):K(e)&&Fu(e,t)?0:-1}const Od=t=>t[0]==="_"||t==="$stable",Kc=t=>q(t)?t.map(vt):[vt(t)],By=(t,e,n)=>{if(e._n)return e;const r=cy((...i)=>Kc(e(...i)),n);return r._c=!1,r},Rd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Od(i))continue;const s=t[i];if(K(s))e[i]=By(i,s,r);else if(s!=null){const o=Kc(s);e[i]=()=>o}}},Nd=(t,e)=>{const n=Kc(e);t.slots.default=()=>n},Vy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Is(e,"_",n)):Rd(e,t.slots={})}else t.slots={},e&&Nd(t,e);Is(t.slots,fo,1)},jy=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ze(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Rd(e,i)),o=e}else e&&(Nd(t,e),o={default:1});if(s)for(const a in i)!Od(a)&&!(a in o)&&delete i[a]};function Dd(){return{app:null,config:{isNativeTag:dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zy=0;function Hy(t,e){return function(r,i=null){K(r)||(r=Object.assign({},r)),i!=null&&!Ee(i)&&(i=null);const s=Dd(),o=new Set;let a=!1;const c=s.app={_uid:zy++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:l0,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const m=me(r,i);return m.appContext=s,u&&e?e(m,l):t(m,l,h),a=!0,c._container=l,l.__vue_app__=c,Yc(m.component)||m.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ua(t,e,n,r,i=!1){if(q(t)){t.forEach((m,p)=>Ua(m,e&&(q(e)?e[p]:e),n,r,i));return}if(ls(r)&&!i)return;const s=r.shapeFlag&4?Yc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ke(l)?(u[l]=null,Q(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),K(c))sn(c,a,12,[o,u]);else{const m=ke(c),p=Ve(c);if(m||p){const E=()=>{if(t.f){const D=m?u[c]:c.value;i?q(D)&&Nc(D,s):q(D)?D.includes(s)||D.push(s):m?(u[c]=[s],Q(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else m?(u[c]=o,Q(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ke(E,n)):E()}}}const Ke=my;function qy(t){return Ky(t)}function Ky(t,e){const n=wv();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:m,setScopeId:p=ut,cloneNode:E,insertStaticContent:D}=t,I=(f,d,g,b=null,y=null,k=null,x=!1,T=null,S=!!d.dynamicChildren)=>{if(f===d)return;f&&!$r(f,d)&&(b=Ki(f),Gt(f,y,k,!0),f=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:F,shapeFlag:P}=d;switch(w){case Wc:v(f,d,g,b);break;case ci:C(f,d,g,b);break;case ta:f==null&&N(d,g,b,x);break;case gt:qi(f,d,g,b,y,k,x,T,S);break;default:P&1?ce(f,d,g,b,y,k,x,T,S):P&6?gu(f,d,g,b,y,k,x,T,S):(P&64||P&128)&&w.process(f,d,g,b,y,k,x,T,S,Xn)}F!=null&&y&&Ua(F,f&&f.ref,k,d||f,!d)},v=(f,d,g,b)=>{if(f==null)r(d.el=a(d.children),g,b);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},C=(f,d,g,b)=>{f==null?r(d.el=c(d.children||""),g,b):d.el=f.el},N=(f,d,g,b)=>{[f.el,f.anchor]=D(f.children,d,g,b,f.el,f.anchor)},M=({el:f,anchor:d},g,b)=>{let y;for(;f&&f!==d;)y=m(f),r(f,g,b),f=y;r(d,g,b)},G=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=m(f),i(f),f=g;i(d)},ce=(f,d,g,b,y,k,x,T,S)=>{x=x||d.type==="svg",f==null?ge(d,g,b,y,k,x,T,S):bn(f,d,y,k,x,T,S)},ge=(f,d,g,b,y,k,x,T)=>{let S,w;const{type:F,props:P,shapeFlag:U,transition:z,patchFlag:J,dirs:se}=f;if(f.el&&E!==void 0&&J===-1)S=f.el=E(f.el);else{if(S=f.el=o(f.type,k,P&&P.is,P),U&8?u(S,f.children):U&16&&Ie(f.children,S,null,b,y,k&&F!=="foreignObject",x,T),se&&wn(f,null,b,"created"),P){for(const ue in P)ue!=="value"&&!as(ue)&&s(S,ue,null,P[ue],k,f.children,b,y,Dt);"value"in P&&s(S,"value",null,P.value),(w=P.onVnodeBeforeMount)&&mt(w,b,f)}Le(S,f,f.scopeId,x,b)}se&&wn(f,null,b,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&z&&!z.persisted;oe&&z.beforeEnter(S),r(S,d,g),((w=P&&P.onVnodeMounted)||oe||se)&&Ke(()=>{w&&mt(w,b,f),oe&&z.enter(S),se&&wn(f,null,b,"mounted")},y)},Le=(f,d,g,b,y)=>{if(g&&p(f,g),b)for(let k=0;k<b.length;k++)p(f,b[k]);if(y){let k=y.subTree;if(d===k){const x=y.vnode;Le(f,x,x.scopeId,x.slotScopeIds,y.parent)}}},Ie=(f,d,g,b,y,k,x,T,S=0)=>{for(let w=S;w<f.length;w++){const F=f[w]=T?Zt(f[w]):vt(f[w]);I(null,F,d,g,b,y,k,x,T)}},bn=(f,d,g,b,y,k,x)=>{const T=d.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:F}=d;S|=f.patchFlag&16;const P=f.props||ae,U=d.props||ae;let z;g&&_n(g,!1),(z=U.onVnodeBeforeUpdate)&&mt(z,g,d,f),F&&wn(d,f,g,"beforeUpdate"),g&&_n(g,!0);const J=y&&d.type!=="foreignObject";if(w?Gn(f.dynamicChildren,w,T,g,b,J,k):x||Nt(f,d,T,null,g,b,J,k,!1),S>0){if(S&16)Lr(T,d,P,U,g,b,y);else if(S&2&&P.class!==U.class&&s(T,"class",null,U.class,y),S&4&&s(T,"style",P.style,U.style,y),S&8){const se=d.dynamicProps;for(let oe=0;oe<se.length;oe++){const ue=se[oe],it=P[ue],Qn=U[ue];(Qn!==it||ue==="value")&&s(T,ue,it,Qn,y,f.children,g,b,Dt)}}S&1&&f.children!==d.children&&u(T,d.children)}else!x&&w==null&&Lr(T,d,P,U,g,b,y);((z=U.onVnodeUpdated)||F)&&Ke(()=>{z&&mt(z,g,d,f),F&&wn(d,f,g,"updated")},b)},Gn=(f,d,g,b,y,k,x)=>{for(let T=0;T<d.length;T++){const S=f[T],w=d[T],F=S.el&&(S.type===gt||!$r(S,w)||S.shapeFlag&70)?h(S.el):g;I(S,w,F,null,b,y,k,x,!0)}},Lr=(f,d,g,b,y,k,x)=>{if(g!==b){for(const T in b){if(as(T))continue;const S=b[T],w=g[T];S!==w&&T!=="value"&&s(f,T,w,S,x,d.children,y,k,Dt)}if(g!==ae)for(const T in g)!as(T)&&!(T in b)&&s(f,T,g[T],null,x,d.children,y,k,Dt);"value"in b&&s(f,"value",g.value,b.value)}},qi=(f,d,g,b,y,k,x,T,S)=>{const w=d.el=f?f.el:a(""),F=d.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:z}=d;z&&(T=T?T.concat(z):z),f==null?(r(w,g,b),r(F,g,b),Ie(d.children,g,F,y,k,x,T,S)):P>0&&P&64&&U&&f.dynamicChildren?(Gn(f.dynamicChildren,U,g,y,k,x,T),(d.key!=null||y&&d===y.subTree)&&Pd(f,d,!0)):Nt(f,d,g,F,y,k,x,T,S)},gu=(f,d,g,b,y,k,x,T,S)=>{d.slotScopeIds=T,f==null?d.shapeFlag&512?y.ctx.activate(d,g,b,x,S):Wo(d,g,b,y,k,x,S):He(f,d,S)},Wo=(f,d,g,b,y,k,x)=>{const T=f.component=n0(f,b,y);if(Ed(f)&&(T.ctx.renderer=Xn),r0(T),T.asyncDep){if(y&&y.registerDep(T,pe),!f.el){const S=T.subTree=me(ci);C(null,S,d,g)}return}pe(T,f,d,g,y,k,x)},He=(f,d,g)=>{const b=d.component=f.component;if(hy(f,d,g))if(b.asyncDep&&!b.asyncResolved){le(b,d,g);return}else b.next=d,iy(b.update),b.update();else d.el=f.el,b.vnode=d},pe=(f,d,g,b,y,k,x)=>{const T=()=>{if(f.isMounted){let{next:F,bu:P,u:U,parent:z,vnode:J}=f,se=F,oe;_n(f,!1),F?(F.el=J.el,le(f,F,x)):F=J,P&&Jo(P),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&mt(oe,z,F,J),_n(f,!0);const ue=Zo(f),it=f.subTree;f.subTree=ue,I(it,ue,h(it.el),Ki(it),f,y,k),F.el=ue.el,se===null&&fy(f,ue.el),U&&Ke(U,y),(oe=F.props&&F.props.onVnodeUpdated)&&Ke(()=>mt(oe,z,F,J),y)}else{let F;const{el:P,props:U}=d,{bm:z,m:J,parent:se}=f,oe=ls(d);if(_n(f,!1),z&&Jo(z),!oe&&(F=U&&U.onVnodeBeforeMount)&&mt(F,se,d),_n(f,!0),P&&Xo){const ue=()=>{f.subTree=Zo(f),Xo(P,f.subTree,f,y,null)};oe?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=Zo(f);I(null,ue,g,b,f,y,k),d.el=ue.el}if(J&&Ke(J,y),!oe&&(F=U&&U.onVnodeMounted)){const ue=d;Ke(()=>mt(F,se,ue),y)}(d.shapeFlag&256||se&&ls(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Ke(f.a,y),f.isMounted=!0,d=g=b=null}},S=f.effect=new Lc(T,()=>fd(w),f.scope),w=f.update=()=>S.run();w.id=f.uid,_n(f,!0),w()},le=(f,d,g)=>{d.component=f;const b=f.vnode.props;f.vnode=d,f.next=null,$y(f,d.props,b,g),jy(f,d.children,g),Sr(),co(void 0,f.update),Cr()},Nt=(f,d,g,b,y,k,x,T,S=!1)=>{const w=f&&f.children,F=f?f.shapeFlag:0,P=d.children,{patchFlag:U,shapeFlag:z}=d;if(U>0){if(U&128){Fr(w,P,g,b,y,k,x,T,S);return}else if(U&256){Go(w,P,g,b,y,k,x,T,S);return}}z&8?(F&16&&Dt(w,y,k),P!==w&&u(g,P)):F&16?z&16?Fr(w,P,g,b,y,k,x,T,S):Dt(w,y,k,!0):(F&8&&u(g,""),z&16&&Ie(P,g,b,y,k,x,T,S))},Go=(f,d,g,b,y,k,x,T,S)=>{f=f||or,d=d||or;const w=f.length,F=d.length,P=Math.min(w,F);let U;for(U=0;U<P;U++){const z=d[U]=S?Zt(d[U]):vt(d[U]);I(f[U],z,g,null,y,k,x,T,S)}w>F?Dt(f,y,k,!0,!1,P):Ie(d,g,b,y,k,x,T,S,P)},Fr=(f,d,g,b,y,k,x,T,S)=>{let w=0;const F=d.length;let P=f.length-1,U=F-1;for(;w<=P&&w<=U;){const z=f[w],J=d[w]=S?Zt(d[w]):vt(d[w]);if($r(z,J))I(z,J,g,null,y,k,x,T,S);else break;w++}for(;w<=P&&w<=U;){const z=f[P],J=d[U]=S?Zt(d[U]):vt(d[U]);if($r(z,J))I(z,J,g,null,y,k,x,T,S);else break;P--,U--}if(w>P){if(w<=U){const z=U+1,J=z<F?d[z].el:b;for(;w<=U;)I(null,d[w]=S?Zt(d[w]):vt(d[w]),g,J,y,k,x,T,S),w++}}else if(w>U)for(;w<=P;)Gt(f[w],y,k,!0),w++;else{const z=w,J=w,se=new Map;for(w=J;w<=U;w++){const Qe=d[w]=S?Zt(d[w]):vt(d[w]);Qe.key!=null&&se.set(Qe.key,w)}let oe,ue=0;const it=U-J+1;let Qn=!1,bu=0;const Ur=new Array(it);for(w=0;w<it;w++)Ur[w]=0;for(w=z;w<=P;w++){const Qe=f[w];if(ue>=it){Gt(Qe,y,k,!0);continue}let dt;if(Qe.key!=null)dt=se.get(Qe.key);else for(oe=J;oe<=U;oe++)if(Ur[oe-J]===0&&$r(Qe,d[oe])){dt=oe;break}dt===void 0?Gt(Qe,y,k,!0):(Ur[dt-J]=w+1,dt>=bu?bu=dt:Qn=!0,I(Qe,d[dt],g,null,y,k,x,T,S),ue++)}const wu=Qn?Wy(Ur):or;for(oe=wu.length-1,w=it-1;w>=0;w--){const Qe=J+w,dt=d[Qe],_u=Qe+1<F?d[Qe+1].el:b;Ur[w]===0?I(null,dt,g,_u,y,k,x,T,S):Qn&&(oe<0||w!==wu[oe]?Yn(dt,g,_u,2):oe--)}}},Yn=(f,d,g,b,y=null)=>{const{el:k,type:x,transition:T,children:S,shapeFlag:w}=f;if(w&6){Yn(f.component.subTree,d,g,b);return}if(w&128){f.suspense.move(d,g,b);return}if(w&64){x.move(f,d,g,Xn);return}if(x===gt){r(k,d,g);for(let P=0;P<S.length;P++)Yn(S[P],d,g,b);r(f.anchor,d,g);return}if(x===ta){M(f,d,g);return}if(b!==2&&w&1&&T)if(b===0)T.beforeEnter(k),r(k,d,g),Ke(()=>T.enter(k),y);else{const{leave:P,delayLeave:U,afterLeave:z}=T,J=()=>r(k,d,g),se=()=>{P(k,()=>{J(),z&&z()})};U?U(k,J,se):se()}else r(k,d,g)},Gt=(f,d,g,b=!1,y=!1)=>{const{type:k,props:x,ref:T,children:S,dynamicChildren:w,shapeFlag:F,patchFlag:P,dirs:U}=f;if(T!=null&&Ua(T,null,g,f,!0),F&256){d.ctx.deactivate(f);return}const z=F&1&&U,J=!ls(f);let se;if(J&&(se=x&&x.onVnodeBeforeUnmount)&&mt(se,d,f),F&6)av(f.component,g,b);else{if(F&128){f.suspense.unmount(g,b);return}z&&wn(f,null,d,"beforeUnmount"),F&64?f.type.remove(f,d,g,y,Xn,b):w&&(k!==gt||P>0&&P&64)?Dt(w,d,g,!1,!0):(k===gt&&P&384||!y&&F&16)&&Dt(S,d,g),b&&vu(f)}(J&&(se=x&&x.onVnodeUnmounted)||z)&&Ke(()=>{se&&mt(se,d,f),z&&wn(f,null,d,"unmounted")},g)},vu=f=>{const{type:d,el:g,anchor:b,transition:y}=f;if(d===gt){ov(g,b);return}if(d===ta){G(f);return}const k=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:T}=y,S=()=>x(g,k);T?T(f.el,k,S):S()}else k()},ov=(f,d)=>{let g;for(;f!==d;)g=m(f),i(f),f=g;i(d)},av=(f,d,g)=>{const{bum:b,scope:y,update:k,subTree:x,um:T}=f;b&&Jo(b),y.stop(),k&&(k.active=!1,Gt(x,f,d,g)),T&&Ke(T,d),Ke(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Dt=(f,d,g,b=!1,y=!1,k=0)=>{for(let x=k;x<f.length;x++)Gt(f[x],d,g,b,y)},Ki=f=>f.shapeFlag&6?Ki(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),yu=(f,d,g)=>{f==null?d._vnode&&Gt(d._vnode,null,null,!0):I(d._vnode||null,f,d,null,null,null,g),pd(),d._vnode=f},Xn={p:I,um:Gt,m:Yn,r:vu,mt:Wo,mc:Ie,pc:Nt,pbc:Gn,n:Ki,o:t};let Yo,Xo;return e&&([Yo,Xo]=e(Xn)),{render:yu,hydrate:Yo,createApp:Hy(yu,Yo)}}function _n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pd(t,e,n=!1){const r=t.children,i=e.children;if(q(r)&&q(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Zt(i[s]),a.el=o.el),n||Pd(o,a))}}function Wy(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Gy=t=>t.__isTeleport,gt=Symbol(void 0),Wc=Symbol(void 0),ci=Symbol(void 0),ta=Symbol(void 0),Yr=[];let at=null;function rt(t=!1){Yr.push(at=t?null:[])}function Yy(){Yr.pop(),at=Yr[Yr.length-1]||null}let li=1;function $u(t){li+=t}function Md(t){return t.dynamicChildren=li>0?at||or:null,Yy(),li>0&&at&&at.push(t),t}function ft(t,e,n,r,i,s){return Md(re(t,e,n,r,i,s,!0))}function Xy(t,e,n,r,i){return Md(me(t,e,n,r,i,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function $r(t,e){return t.type===e.type&&t.key===e.key}const fo="__vInternal",Ld=({key:t})=>t!=null?t:null,us=({ref:t,ref_key:e,ref_for:n})=>t!=null?ke(t)||Ve(t)||K(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,r=0,i=null,s=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ld(e),ref:e&&us(e),scopeId:uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Gc(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),li>0&&!o&&at&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&at.push(c),c}const me=Qy;function Qy(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===xy)&&(t=ci),$a(t)){const a=mr(t,e,!0);return n&&Gc(a,n),li>0&&!s&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag|=-2,a}if(c0(t)&&(t=t.__vccOpts),e){e=Jy(e);let{class:a,style:c}=e;a&&!ke(a)&&(e.class=Tr(a)),Ee(c)&&(cd(c)&&!q(c)&&(c=ze({},c)),e.style=ki(c))}const o=ke(t)?1:dy(t)?128:Gy(t)?64:Ee(t)?4:K(t)?2:0;return re(t,e,n,r,i,o,s,!0)}function Jy(t){return t?cd(t)||fo in t?ze({},t):t:null}function mr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Zy(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ld(a),ref:e&&e.ref?n&&i?q(i)?i.concat(us(e)):[i,us(e)]:us(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor}}function Fd(t=" ",e=0){return me(Wc,null,t,e)}function vt(t){return t==null||typeof t=="boolean"?me(ci):q(t)?me(gt,null,t.slice()):typeof t=="object"?Zt(t):me(Wc,null,String(t))}function Zt(t){return t.el===null||t.memo?t:mr(t)}function Gc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Gc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(fo in e)?e._ctx=wt:i===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Fd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Tr([e.class,r.class]));else if(i==="style")e.style=ki([e.style,r.style]);else if(no(i)){const s=e[i],o=r[i];o&&s!==o&&!(q(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function mt(t,e,n,r=null){ht(t,e,7,[n,r])}const e0=Dd();let t0=0;function n0(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||e0,s={uid:t0++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(r,i),emitsOptions:vd(r,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ay.bind(null,s),t.ce&&t.ce(s),s}let Re=null;const pr=t=>{Re=t,t.scope.on()},Rn=()=>{Re&&Re.scope.off(),Re=null};function Ud(t){return t.vnode.shapeFlag&4}let ui=!1;function r0(t,e=!1){ui=e;const{props:n,children:r}=t.vnode,i=Ud(t);Uy(t,n,i,e),Vy(t,r);const s=i?i0(t,e):void 0;return ui=!1,s}function i0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ld(new Proxy(t.ctx,Ny));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?o0(t):null;pr(t),Sr();const s=sn(r,t,0,[t.props,i]);if(Cr(),Rn(),Gf(s)){if(s.then(Rn,Rn),e)return s.then(o=>{Bu(t,o,e)}).catch(o=>{ao(o,t,0)});t.asyncDep=s}else Bu(t,s,e)}else $d(t,e)}function Bu(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=ud(e)),$d(t,n)}let Vu;function $d(t,e,n){const r=t.type;if(!t.render){if(!e&&Vu&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:s,delimiters:a},o),c);r.render=Vu(i,l)}}t.render=r.render||ut}pr(t),Sr(),Dy(t),Cr(),Rn()}function s0(t){return new Proxy(t.attrs,{get(e,n){return Ze(t,"get","$attrs"),e[n]}})}function o0(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=s0(t))},slots:t.slots,emit:t.emit,expose:e}}function Yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ud(ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ss)return Ss[n](t)}}))}function a0(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function c0(t){return K(t)&&"__vccOpts"in t}const nt=(t,e)=>ey(t,e,ui);function Bd(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!q(e)?$a(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),me(t,e,n))}const l0="3.2.37",u0="http://www.w3.org/2000/svg",Tn=typeof document<"u"?document:null,ju=Tn&&Tn.createElement("template"),h0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Tn.createElementNS(u0,t):Tn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ju.innerHTML=r?`<svg>${t}</svg>`:t;const a=ju.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function f0(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function d0(t,e,n){const r=t.style,i=ke(n);if(n&&!i){for(const s in n)Ba(r,s,n[s]);if(e&&!ke(e))for(const s in e)n[s]==null&&Ba(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const zu=/\s*!important$/;function Ba(t,e,n){if(q(n))n.forEach(r=>Ba(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=m0(t,e);zu.test(n)?t.setProperty(kr(r),n.replace(zu,""),"important"):t[r]=n}}const Hu=["Webkit","Moz","ms"],na={};function m0(t,e){const n=na[e];if(n)return n;let r=Ct(e);if(r!=="filter"&&r in t)return na[e]=r;r=so(r);for(let i=0;i<Hu.length;i++){const s=Hu[i]+r;if(s in t)return na[e]=s}return e}const qu="http://www.w3.org/1999/xlink";function p0(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qu,e.slice(6,e.length)):t.setAttributeNS(qu,e,n);else{const s=lv(e);n==null||s&&!qf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function g0(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Vd,v0]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Va=0;const y0=Promise.resolve(),b0=()=>{Va=0},w0=()=>Va||(y0.then(b0),Va=Vd());function _0(t,e,n,r){t.addEventListener(e,n,r)}function E0(t,e,n,r){t.removeEventListener(e,n,r)}function I0(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=T0(e);if(r){const l=s[e]=k0(r,i);_0(t,a,l,c)}else o&&(E0(t,a,o,c),s[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function T0(t){let e;if(Ku.test(t)){e={};let n;for(;n=t.match(Ku);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[kr(t.slice(2)),e]}function k0(t,e){const n=r=>{const i=r.timeStamp||Vd();(v0||i>=n.attached-1)&&ht(S0(r,n.value),e,5,[r])};return n.value=t,n.attached=w0(),n}function S0(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Wu=/^on[a-z]/,C0=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?f0(t,r,i):e==="style"?d0(t,n,r):no(e)?Rc(e)||I0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A0(t,e,r,i))?g0(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),p0(t,e,r,i))};function A0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wu.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wu.test(e)&&ke(n)?!1:e in t}const x0=ze({patchProp:C0},h0);let Gu;function O0(){return Gu||(Gu=qy(x0))}const R0=(...t)=>{const e=O0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=N0(r);if(!i)return;const s=e._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function N0(t){return ke(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Yu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Yu(Object(n),!0).forEach(function(r){M0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function As(t){return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},As(t)}function D0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P0(t,e,n){return e&&Xu(t.prototype,e),n&&Xu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function M0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xc(t,e){return F0(t)||$0(t,e)||jd(t,e)||V0()}function mo(t){return L0(t)||U0(t)||jd(t)||B0()}function L0(t){if(Array.isArray(t))return ja(t)}function F0(t){if(Array.isArray(t))return t}function U0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jd(t,e){if(!!t){if(typeof t=="string")return ja(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ja(t,e)}}function ja(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function B0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qu=function(){},Qc={},zd={},Hd=null,qd={mark:Qu,measure:Qu};try{typeof window<"u"&&(Qc=window),typeof document<"u"&&(zd=document),typeof MutationObserver<"u"&&(Hd=MutationObserver),typeof performance<"u"&&(qd=performance)}catch{}var j0=Qc.navigator||{},Ju=j0.userAgent,Zu=Ju===void 0?"":Ju,un=Qc,he=zd,eh=Hd,Ji=qd;un.document;var Wt=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",Kd=~Zu.indexOf("MSIE")||~Zu.indexOf("Trident/"),$t="___FONT_AWESOME___",za=16,Wd="fa",Gd="svg-inline--fa",Ln="data-fa-i2svg",Ha="data-fa-pseudo-element",z0="data-fa-pseudo-element-pending",Jc="data-prefix",Zc="data-icon",th="fontawesome-i2svg",H0="async",q0=["HTML","HEAD","STYLE","SCRIPT"],Yd=function(){try{return!0}catch{return!1}}(),el={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},xs={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Xd={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},K0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},W0=/fa[srltdbk]?[\-\ ]/,Qd="fa-layers-text",G0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Y0={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Jd=[1,2,3,4,5,6,7,8,9,10],X0=Jd.concat([11,12,13,14,15,16,17,18,19,20]),Q0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J0=[].concat(mo(Object.keys(xs)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",kn.GROUP,kn.SWAP_OPACITY,kn.PRIMARY,kn.SECONDARY]).concat(Jd.map(function(t){return"".concat(t,"x")})).concat(X0.map(function(t){return"w-".concat(t)})),Zd=un.FontAwesomeConfig||{};function Z0(t){var e=he.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(he&&typeof he.querySelector=="function"){var tb=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tb.forEach(function(t){var e=Xc(t,2),n=e[0],r=e[1],i=eb(Z0(n));i!=null&&(Zd[r]=i)})}var nb={familyPrefix:Wd,styleDefault:"solid",replacementClass:Gd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xr=O(O({},nb),Zd);Xr.autoReplaceSvg||(Xr.observeMutations=!1);var $={};Object.keys(Xr).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){Xr[t]=n,hs.forEach(function(r){return r($)})},get:function(){return Xr[t]}})});un.FontAwesomeConfig=$;var hs=[];function rb(t){return hs.push(t),function(){hs.splice(hs.indexOf(t),1)}}var Xt=za,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ib(t){if(!(!t||!Wt)){var e=he.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=he.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return he.head.insertBefore(e,r),t}}var sb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hi(){for(var t=12,e="";t-- >0;)e+=sb[Math.random()*62|0];return e}function Ar(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function tl(t){return t.classList?Ar(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function em(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ob(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(em(t[n]),'" ')},"").trim()}function po(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function nl(t){return t.size!==Et.size||t.x!==Et.x||t.y!==Et.y||t.rotate!==Et.rotate||t.flipX||t.flipY}function ab(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function cb(t){var e=t.transform,n=t.width,r=n===void 0?za:n,i=t.height,s=i===void 0?za:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&Kd?c+="translate(".concat(e.x/Xt-r/2,"em, ").concat(e.y/Xt-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Xt,"em), calc(-50% + ").concat(e.y/Xt,"em)) "):c+="translate(".concat(e.x/Xt,"em, ").concat(e.y/Xt,"em) "),c+="scale(".concat(e.size/Xt*(e.flipX?-1:1),", ").concat(e.size/Xt*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var lb=`:root, :host {
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
}`;function tm(){var t=Wd,e=Gd,n=$.familyPrefix,r=$.replacementClass,i=lb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var nh=!1;function ra(){$.autoAddCss&&!nh&&(ib(tm()),nh=!0)}var ub={mixout:function(){return{dom:{css:tm,insertCss:ra}}},hooks:function(){return{beforeDOMElementCreation:function(){ra()},beforeI2svg:function(){ra()}}}},Bt=un||{};Bt[$t]||(Bt[$t]={});Bt[$t].styles||(Bt[$t].styles={});Bt[$t].hooks||(Bt[$t].hooks={});Bt[$t].shims||(Bt[$t].shims=[]);var ct=Bt[$t],nm=[],hb=function t(){he.removeEventListener("DOMContentLoaded",t),Os=1,nm.map(function(e){return e()})},Os=!1;Wt&&(Os=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),Os||he.addEventListener("DOMContentLoaded",hb));function fb(t){!Wt||(Os?setTimeout(t,0):nm.push(t))}function Si(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?em(t):"<".concat(e," ").concat(ob(r),">").concat(s.map(Si).join(""),"</").concat(e,">")}function rh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var db=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ia=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?db(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function mb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function qa(t){var e=mb(t);return e.length===1?e[0].toString(16):null}function pb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ih(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ka(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ih(e);typeof ct.hooks.addPack=="function"&&!i?ct.hooks.addPack(t,ih(e)):ct.styles[t]=O(O({},ct.styles[t]||{}),s),t==="fas"&&Ka("fa",e)}var Qr=ct.styles,gb=ct.shims,vb=Object.values(Xd),rl=null,rm={},im={},sm={},om={},am={},yb=Object.keys(el);function bb(t){return~J0.indexOf(t)}function wb(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!bb(i)?i:null}var cm=function(){var e=function(s){return ia(Qr,function(o,a,c){return o[c]=ia(a,s,{}),o},{})};rm=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),im=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),am=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in Qr||$.autoFetchSvg,r=ia(gb,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});sm=r.names,om=r.unicodes,rl=go($.styleDefault)};rb(function(t){rl=go(t.styleDefault)});cm();function il(t,e){return(rm[t]||{})[e]}function _b(t,e){return(im[t]||{})[e]}function nr(t,e){return(am[t]||{})[e]}function lm(t){return sm[t]||{prefix:null,iconName:null}}function Eb(t){var e=om[t],n=il("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function hn(){return rl}var sl=function(){return{prefix:null,iconName:null,rest:[]}};function go(t){var e=el[t],n=xs[t]||xs[e],r=t in ct.styles?t:null;return n||r||null}function vo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var c=wb($.familyPrefix,a);if(Qr[a]?(a=vb.includes(a)?K0[a]:a,i=a,o.prefix=a):yb.indexOf(a)>-1?(i=a,o.prefix=go(a)):c?o.iconName=c:a!==$.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var l=i==="fa"?lm(o.iconName):{},u=nr(o.prefix,o.iconName);l.prefix&&(i=null),o.iconName=l.iconName||u||o.iconName,o.prefix=l.prefix||o.prefix,o.prefix==="far"&&!Qr.far&&Qr.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},sl());return(s.prefix==="fa"||i==="fa")&&(s.prefix=hn()||"fas"),s}var Ib=function(){function t(){D0(this,t),this.definitions={}}return P0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Ka(a,o[a]);var c=Xd[a];c&&Ka(c,o[a]),cm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),sh=[],rr={},lr={},Tb=Object.keys(lr);function kb(t,e){var n=e.mixoutsTo;return sh=t,rr={},Object.keys(lr).forEach(function(r){Tb.indexOf(r)===-1&&delete lr[r]}),sh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),As(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){rr[o]||(rr[o]=[]),rr[o].push(s[o])})}r.provides&&r.provides(lr)}),n}function Wa(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=rr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Fn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=rr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Vt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lr[t]?lr[t].apply(null,e):void 0}function Ga(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||hn();if(!!e)return e=nr(n,e)||e,rh(um.definitions,n,e)||rh(ct.styles,n,e)}var um=new Ib,Sb=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Fn("noAuto")},Cb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(Fn("beforeI2svg",e),Vt("pseudoElements2svg",e),Vt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,fb(function(){xb({autoReplaceSvgRoot:n}),Fn("watch",e)})}},Ab={icon:function(e){if(e===null)return null;if(As(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=go(e[0]);return{prefix:r,iconName:nr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.familyPrefix,"-"))>-1||e.match(W0))){var i=vo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||hn(),iconName:nr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=hn();return{prefix:s,iconName:nr(s,e)||e}}}},tt={noAuto:Sb,config:$,dom:Cb,parse:Ab,library:um,findIconDefinition:Ga,toHtml:Si},xb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?he:n;(Object.keys(ct.styles).length>0||$.autoFetchSvg)&&Wt&&$.autoReplaceSvg&&tt.dom.i2svg({node:r})};function yo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Si(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Wt){var r=he.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ob(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(nl(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=po(O(O({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Rb(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function ol(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,m=t.watchable,p=m===void 0?!1:m,E=r.found?r:n,D=E.width,I=E.height,v=i==="fak",C=[$.replacementClass,s?"".concat($.familyPrefix,"-").concat(s):""].filter(function(Ie){return h.classes.indexOf(Ie)===-1}).filter(function(Ie){return Ie!==""||!!Ie}).concat(h.classes).join(" "),N={children:[],attributes:O(O({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(I)})},M=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(D/I*16*.0625,"em")}:{};p&&(N.attributes[Ln]=""),c&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||hi())},children:[c]}),delete N.attributes.title);var G=O(O({},N),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:O(O({},M),h.styles)}),ce=r.found&&n.found?Vt("generateAbstractMask",G)||{children:[],attributes:{}}:Vt("generateAbstractIcon",G)||{children:[],attributes:{}},ge=ce.children,Le=ce.attributes;return G.children=ge,G.attributes=Le,a?Rb(G):Ob(G)}function oh(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Ln]="");var u=O({},o.styles);nl(i)&&(u.transform=cb({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=po(u);h.length>0&&(l.style=h);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function Nb(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=po(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var sa=ct.styles;function Ya(t){var e=t[0],n=t[1],r=t.slice(4),i=Xc(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(kn.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(kn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(kn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Db={found:!1,width:512,height:512};function Pb(t,e){!Yd&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xa(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=hn()),new Promise(function(r,i){if(Vt("missingIconAbstract"),n==="fa"){var s=lm(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&sa[e]&&sa[e][t]){var o=sa[e][t];return r(Ya(o))}Pb(t,e),r(O(O({},Db),{},{icon:$.showMissingIcons&&t?Vt("missingIconAbstract")||{}:{}}))})}var ah=function(){},Qa=$.measurePerformance&&Ji&&Ji.mark&&Ji.measure?Ji:{mark:ah,measure:ah},zr='FA "6.1.2"',Mb=function(e){return Qa.mark("".concat(zr," ").concat(e," begins")),function(){return hm(e)}},hm=function(e){Qa.mark("".concat(zr," ").concat(e," ends")),Qa.measure("".concat(zr," ").concat(e),"".concat(zr," ").concat(e," begins"),"".concat(zr," ").concat(e," ends"))},al={begin:Mb,end:hm},fs=function(){};function ch(t){var e=t.getAttribute?t.getAttribute(Ln):null;return typeof e=="string"}function Lb(t){var e=t.getAttribute?t.getAttribute(Jc):null,n=t.getAttribute?t.getAttribute(Zc):null;return e&&n}function Fb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function Ub(){if($.autoReplaceSvg===!0)return ds.replace;var t=ds[$.autoReplaceSvg];return t||ds.replace}function $b(t){return he.createElementNS("http://www.w3.org/2000/svg",t)}function Bb(t){return he.createElement(t)}function fm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?$b:Bb:n;if(typeof t=="string")return he.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(fm(o,{ceFn:r}))}),i}function Vb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ds={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(fm(i),n)}),n.getAttribute(Ln)===null&&$.keepOriginalSource){var r=he.createComment(Vb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~tl(n).indexOf($.replacementClass))return ds.replace(e);var i=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===$.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Si(a)}).join(`
`);n.setAttribute(Ln,""),n.innerHTML=o}};function lh(t){t()}function dm(t,e){var n=typeof e=="function"?e:fs;if(t.length===0)n();else{var r=lh;$.mutateApproach===H0&&(r=un.requestAnimationFrame||lh),r(function(){var i=Ub(),s=al.begin("mutate");t.map(i),s(),n()})}}var cl=!1;function mm(){cl=!0}function Ja(){cl=!1}var Rs=null;function uh(t){if(!!eh&&!!$.observeMutations){var e=t.treeCallback,n=e===void 0?fs:e,r=t.nodeCallback,i=r===void 0?fs:r,s=t.pseudoElementsCallback,o=s===void 0?fs:s,a=t.observeMutationsRoot,c=a===void 0?he:a;Rs=new eh(function(l){if(!cl){var u=hn();Ar(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ch(h.addedNodes[0])&&($.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&$.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&ch(h.target)&&~Q0.indexOf(h.attributeName))if(h.attributeName==="class"&&Lb(h.target)){var m=vo(tl(h.target)),p=m.prefix,E=m.iconName;h.target.setAttribute(Jc,p||u),E&&h.target.setAttribute(Zc,E)}else Fb(h.target)&&i(h.target)})}}),Wt&&Rs.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jb(){!Rs||Rs.disconnect()}function zb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Hb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=vo(tl(t));return i.prefix||(i.prefix=hn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_b(i.prefix,t.innerText)||il(i.prefix,qa(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function qb(t){var e=Ar(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||hi()):(e["aria-hidden"]="true",e.focusable="false")),e}function Kb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Hb(t),r=n.iconName,i=n.prefix,s=n.rest,o=qb(t),a=Wa("parseNodeAttributes",{},t),c=e.styleParser?zb(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var Wb=ct.styles;function pm(t){var e=$.autoReplaceSvg==="nest"?hh(t,{styleParser:!1}):hh(t);return~e.extra.classes.indexOf(Qd)?Vt("generateLayersText",t,e):Vt("generateSvgReplacementMutation",t,e)}function fh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=he.documentElement.classList,r=function(h){return n.add("".concat(th,"-").concat(h))},i=function(h){return n.remove("".concat(th,"-").concat(h))},s=$.autoFetchSvg?Object.keys(el):Object.keys(Wb);s.includes("fa")||s.push("fa");var o=[".".concat(Qd,":not([").concat(Ln,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Ln,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ar(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=al.begin("onTree"),l=a.reduce(function(u,h){try{var m=pm(h);m&&u.push(m)}catch(p){Yd||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(m){dm(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(m){c(),h(m)})})}function Gb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pm(t).then(function(n){n&&dm([n],e)})}function Yb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ga(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ga(i||{})),t(r,O(O({},n),{},{mask:i}))}}var Xb=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Et:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,m=h===void 0?null:h,p=n.titleId,E=p===void 0?null:p,D=n.classes,I=D===void 0?[]:D,v=n.attributes,C=v===void 0?{}:v,N=n.styles,M=N===void 0?{}:N;if(!!e){var G=e.prefix,ce=e.iconName,ge=e.icon;return yo(O({type:"icon"},e),function(){return Fn("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(m?C["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(E||hi()):(C["aria-hidden"]="true",C.focusable="false")),ol({icons:{main:Ya(ge),mask:c?Ya(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:ce,transform:O(O({},Et),i),symbol:o,title:m,maskId:u,titleId:E,extra:{attributes:C,styles:M,classes:I}})})}},Qb={mixout:function(){return{icon:Yb(Xb)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fh,n.nodeCallback=Gb,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?he:r,s=n.callback,o=s===void 0?function(){}:s;return fh(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,m=r.extra;return new Promise(function(p,E){Promise.all([Xa(i,a),u.iconName?Xa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var I=Xc(D,2),v=I[0],C=I[1];p([n,ol({icons:{main:v,mask:C},prefix:a,iconName:i,transform:c,symbol:l,maskId:h,title:s,titleId:o,extra:m,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=po(a);c.length>0&&(i.style=c);var l;return nl(o)&&(l=Vt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},Jb={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return yo({type:"layer"},function(){Fn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(mo(s)).join(" ")},children:o}]})}}}},Zb={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return yo({type:"counter",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:r}),Nb({content:n.toString(),title:s,extra:{attributes:l,styles:h,classes:["".concat($.familyPrefix,"-layers-counter")].concat(mo(a))}})})}}}},ew={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Et:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return yo({type:"text",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:r}),oh({content:n,transform:O(O({},Et),s),title:a,extra:{attributes:h,styles:p,classes:["".concat($.familyPrefix,"-layers-text")].concat(mo(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(Kd){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,oh({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},tw=new RegExp('"',"ug"),dh=[1105920,1112319];function nw(t){var e=t.replace(tw,""),n=pb(e,0),r=n>=dh[0]&&n<=dh[1],i=e.length===2?e[0]===e[1]:!1;return{value:qa(i?e[0]:e),isSecondary:r||i}}function mh(t,e){var n="".concat(z0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ar(t.children),o=s.filter(function(ce){return ce.getAttribute(Ha)===e})[0],a=un.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(G0),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?xs[c[2].toLowerCase()]:Y0[l],p=nw(h),E=p.value,D=p.isSecondary,I=c[0].startsWith("FontAwesome"),v=il(m,E),C=v;if(I){var N=Eb(E);N.iconName&&N.prefix&&(v=N.iconName,m=N.prefix)}if(v&&!D&&(!o||o.getAttribute(Jc)!==m||o.getAttribute(Zc)!==C)){t.setAttribute(n,C),o&&t.removeChild(o);var M=Kb(),G=M.extra;G.attributes[Ha]=e,Xa(v,m).then(function(ce){var ge=ol(O(O({},M),{},{icons:{main:ce,mask:sl()},prefix:m,iconName:C,extra:G,watchable:!0})),Le=he.createElement("svg");e==="::before"?t.insertBefore(Le,t.firstChild):t.appendChild(Le),Le.outerHTML=ge.map(function(Ie){return Si(Ie)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function rw(t){return Promise.all([mh(t,"::before"),mh(t,"::after")])}function iw(t){return t.parentNode!==document.head&&!~q0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ha)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ph(t){if(!!Wt)return new Promise(function(e,n){var r=Ar(t.querySelectorAll("*")).filter(iw).map(rw),i=al.begin("searchPseudoElements");mm(),Promise.all(r).then(function(){i(),Ja(),e()}).catch(function(){i(),Ja(),n()})})}var sw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ph,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?he:r;$.searchPseudoElements&&ph(i)}}},gh=!1,ow={mixout:function(){return{dom:{unwatch:function(){mm(),gh=!0}}}},hooks:function(){return{bootstrap:function(){uh(Wa("mutationObserverCallbacks",{}))},noAuto:function(){jb()},watch:function(n){var r=n.observeMutationsRoot;gh?Ja():uh(Wa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},aw={mixout:function(){return{parse:{transform:function(n){return vh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:m};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},oa={x:0,y:0,width:"100%",height:"100%"};function yh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cw(t){return t.tag==="g"?t.children:[t]}var lw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?vo(i.split(" ").map(function(o){return o.trim()})):sl();return s.prefix||(s.prefix=hn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,h=o.width,m=o.icon,p=ab({transform:c,containerWidth:h,iconWidth:l}),E={tag:"rect",attributes:O(O({},oa),{},{fill:"white"})},D=u.children?{children:u.children.map(yh)}:{},I={tag:"g",attributes:O({},p.inner),children:[yh(O({tag:u.tag,attributes:O(O({},u.attributes),p.path)},D))]},v={tag:"g",attributes:O({},p.outer),children:[I]},C="mask-".concat(a||hi()),N="clip-".concat(a||hi()),M={tag:"mask",attributes:O(O({},oa),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,v]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:cw(m)},M]};return r.push(G,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},oa)}),{children:r,attributes:i}}}},uw={provides:function(e){var n=!1;un.matchMedia&&(n=un.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},fw=[ub,Qb,Jb,Zb,ew,sw,ow,aw,lw,uw,hw];kb(fw,{mixoutsTo:tt});tt.noAuto;var gm=tt.config,dw=tt.library;tt.dom;var Ns=tt.parse;tt.findIconDefinition;tt.toHtml;var mw=tt.icon;tt.layer;var pw=tt.text;tt.counter;function bh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bh(Object(n),!0).forEach(function(r){qe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ds(t){return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ds(t)}function qe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vw(t,e){if(t==null)return{};var n=gw(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Za(t){return yw(t)||bw(t)||ww(t)||_w()}function yw(t){if(Array.isArray(t))return ec(t)}function bw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ww(t,e){if(!!t){if(typeof t=="string")return ec(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ec(t,e)}}function ec(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vm={exports:{}};(function(t){(function(e){var n=function(v,C,N){if(!l(C)||h(C)||m(C)||p(C)||c(C))return C;var M,G=0,ce=0;if(u(C))for(M=[],ce=C.length;G<ce;G++)M.push(n(v,C[G],N));else{M={};for(var ge in C)Object.prototype.hasOwnProperty.call(C,ge)&&(M[v(ge,N)]=n(v,C[ge],N))}return M},r=function(v,C){C=C||{};var N=C.separator||"_",M=C.split||/(?=[A-Z])/;return v.split(M).join(N)},i=function(v){return E(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var C=i(v);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(v,C){return r(v,C).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},m=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},E=function(v){return v=v-0,v===v},D=function(v,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?v:function(M,G){return N(M,v,G)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,C){return n(D(i,C),v)},decamelizeKeys:function(v,C){return n(D(o,C),v,C)},pascalizeKeys:function(v,C){return n(D(s,C),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(Ew)})(vm);var Iw=vm.exports,Tw=["class","style"];function kw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Iw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Sw(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ll(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return ll(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=Sw(u);break;case"style":c.style=kw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=vw(n,Tw);return Bd(t.tag,ot(ot(ot({},e),{},{class:i.class,style:ot(ot({},i.style),o)},i.attrs),a),r)}var ym=!1;try{ym=!0}catch{}function Cw(){if(!ym&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?qe({},t,e):{}}function Aw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},qe(e,"fa-".concat(t.size),t.size!==null),qe(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),qe(e,"fa-pull-".concat(t.pull),t.pull!==null),qe(e,"fa-swap-opacity",t.swapOpacity),qe(e,"fa-bounce",t.bounce),qe(e,"fa-shake",t.shake),qe(e,"fa-beat",t.beat),qe(e,"fa-fade",t.fade),qe(e,"fa-beat-fade",t.beatFade),qe(e,"fa-flash",t.flash),qe(e,"fa-spin-pulse",t.spinPulse),qe(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function wh(t){if(t&&Ds(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ns.icon)return Ns.icon(t);if(t===null)return null;if(Ds(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ul=qc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=nt(function(){return wh(e.icon)}),s=nt(function(){return Jr("classes",Aw(e))}),o=nt(function(){return Jr("transform",typeof e.transform=="string"?Ns.transform(e.transform):e.transform)}),a=nt(function(){return Jr("mask",wh(e.mask))}),c=nt(function(){return mw(i.value,ot(ot(ot(ot({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});cs(c,function(u){if(!u)return Cw("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=nt(function(){return c.value?ll(c.value.abstract[0],{},r):null});return function(){return l.value}}});qc({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=gm.familyPrefix,s=nt(function(){return["".concat(i,"-layers")].concat(Za(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Bd("div",{class:s.value},r.default?r.default():[])}}});qc({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=gm.familyPrefix,s=nt(function(){return Jr("classes",[].concat(Za(e.counter?["".concat(i,"-layers-counter")]:[]),Za(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=nt(function(){return Jr("transform",typeof e.transform=="string"?Ns.transform(e.transform):e.transform)}),a=nt(function(){var l=pw(e.value.toString(),ot(ot({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=nt(function(){return ll(a.value,{},r)});return function(){return c.value}}});/**
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
 */const bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(m=64)),r.push(n[u],n[h],n[m],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const m=s<<2|a>>4;if(r.push(m),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ow=function(t){const e=bm(t);return wm.encodeByteArray(e,!0)},_m=function(t){return Ow(t).replace(/\./g,"")},Rw=function(t){try{return wm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Nw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Im(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){return Se().indexOf("Electron/")>=0}function km(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pw(){return Se().indexOf("MSAppHost/")>=0}function Mw(){return typeof indexedDB=="object"}function Lw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fw="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fw,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Uw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function Uw(t,e){return t.replace($w,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $w=/\{\$([^}]+)}/g;function Bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_h(s)&&_h(o)){if(!Ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _h(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vw(t,e){const n=new jw(t,e);return n.subscribe.bind(n)}class jw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function aa(){}/**
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
 */function Kn(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kw(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(t){return t===In?void 0:t}function Kw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Gw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Yw=te.INFO,Xw={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Qw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Xw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let Eh,Ih;function Zw(){return Eh||(Eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e_(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,tc=new WeakMap,Cm=new WeakMap,ca=new WeakMap,fl=new WeakMap;function t_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sm.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function n_(t){if(tc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tc.set(t,e)}let nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function r_(t){nc=t(nc)}function i_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(la(this),e,...n);return Cm.set(r,e.sort?e.sort():[e]),on(r)}:e_().includes(t)?function(...e){return t.apply(la(this),e),on(Sm.get(this))}:function(...e){return on(t.apply(la(this),e))}}function s_(t){return typeof t=="function"?i_(t):(t instanceof IDBTransaction&&n_(t),Jw(t,Zw())?new Proxy(t,nc):t)}function on(t){if(t instanceof IDBRequest)return t_(t);if(ca.has(t))return ca.get(t);const e=s_(t);return e!==t&&(ca.set(t,e),fl.set(e,t)),e}const la=t=>fl.get(t);function o_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=on(o);return r&&o.addEventListener("upgradeneeded",c=>{r(on(o.result),c.oldVersion,c.newVersion,on(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const a_=["get","getKey","getAll","getAllKeys","count"],c_=["put","add","delete","clear"],ua=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=c_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a_.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ua.set(e,s),s}r_(t=>({...t,get:(e,n,r)=>Th(e,n)||t.get(e,n,r),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
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
 */class l_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",kh="0.7.31";/**
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
 */const Un=new hl("@firebase/app"),h_="@firebase/app-compat",f_="@firebase/analytics-compat",d_="@firebase/analytics",m_="@firebase/app-check-compat",p_="@firebase/app-check",g_="@firebase/auth",v_="@firebase/auth-compat",y_="@firebase/database",b_="@firebase/database-compat",w_="@firebase/functions",__="@firebase/functions-compat",E_="@firebase/installations",I_="@firebase/installations-compat",T_="@firebase/messaging",k_="@firebase/messaging-compat",S_="@firebase/performance",C_="@firebase/performance-compat",A_="@firebase/remote-config",x_="@firebase/remote-config-compat",O_="@firebase/storage",R_="@firebase/storage-compat",N_="@firebase/firestore",D_="@firebase/firestore-compat",P_="firebase",M_="9.9.3";/**
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
 */const Am="[DEFAULT]",L_={[rc]:"fire-core",[h_]:"fire-core-compat",[d_]:"fire-analytics",[f_]:"fire-analytics-compat",[p_]:"fire-app-check",[m_]:"fire-app-check-compat",[g_]:"fire-auth",[v_]:"fire-auth-compat",[y_]:"fire-rtdb",[b_]:"fire-rtdb-compat",[w_]:"fire-fn",[__]:"fire-fn-compat",[E_]:"fire-iid",[I_]:"fire-iid-compat",[T_]:"fire-fcm",[k_]:"fire-fcm-compat",[S_]:"fire-perf",[C_]:"fire-perf-compat",[A_]:"fire-rc",[x_]:"fire-rc-compat",[O_]:"fire-gcs",[R_]:"fire-gcs-compat",[N_]:"fire-fst",[D_]:"fire-fst-compat","fire-js":"fire-js",[P_]:"fire-js-all"};/**
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
 */const Ms=new Map,ic=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(ic.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,t);for(const n of Ms.values())F_(n,t);return!0}function bo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const U_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Ci("app","Firebase",U_);/**
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
 */class $_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=M_;function B_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Am,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});const i=Ms.get(r);if(i){if(Ps(t,i.options)&&Ps(n,i.config))return i;throw Bn.create("duplicate-app",{appName:r})}const s=new Ww(r);for(const a of ic.values())s.addComponent(a);const o=new $_(t,n,s);return Ms.set(r,o),o}function dl(t=Am){const e=Ms.get(t);if(!e)throw Bn.create("no-app",{appName:t});return e}function It(t,e,n){var r;let i=(r=L_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}$n(new fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const V_="firebase-heartbeat-database",j_=1,fi="firebase-heartbeat-store";let ha=null;function xm(){return ha||(ha=o_(V_,j_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),ha}async function z_(t){var e;try{return(await xm()).transaction(fi).objectStore(fi).get(Om(t))}catch(n){if(n instanceof Ot)Un.warn(n.message);else{const r=Bn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Un.warn(r.message)}}}async function Sh(t,e){var n;try{const i=(await xm()).transaction(fi,"readwrite");return await i.objectStore(fi).put(e,Om(t)),i.done}catch(r){if(r instanceof Ot)Un.warn(r.message);else{const i=Bn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Un.warn(i.message)}}}function Om(t){return`${t.name}!${t.options.appId}`}/**
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
 */const H_=1024,q_=30*24*60*60*1e3;class K_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ch();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=q_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ch(),{heartbeatsToSend:n,unsentEntries:r}=W_(this._heartbeatsCache.heartbeats),i=_m(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ch(){return new Date().toISOString().substring(0,10)}function W_(t,e=H_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ah(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ah(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mw()?Lw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await z_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ah(t){return _m(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Y_(t){$n(new fn("platform-logger",e=>new l_(e),"PRIVATE")),$n(new fn("heartbeat",e=>new K_(e),"PRIVATE")),It(rc,kh,t),It(rc,kh,"esm2017"),It("fire-js","")}Y_("");var X_="firebase",Q_="9.9.3";/**
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
 */It(X_,Q_,"app");function ml(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Rm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J_=Rm,Nm=new Ci("auth","Firebase",Rm());/**
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
 */const xh=new hl("@firebase/auth");function ms(t,...e){xh.logLevel<=te.ERROR&&xh.error(`Auth (${xr}): ${t}`,...e)}/**
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
 */function At(t,...e){throw pl(t,...e)}function Tt(t,...e){return pl(t,...e)}function Dm(t,e,n){const r=Object.assign(Object.assign({},J_()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function Z_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&At(t,"argument-error"),Dm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nm.create(t,...e)}function H(t,e,...n){if(!t)throw pl(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ms(e),new Error(e)}function jt(t,e){t||Mt(e)}/**
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
 */const Oh=new Map;function Lt(t){jt(t instanceof Function,"Expected a class definition");let e=Oh.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oh.set(t,e),e)}/**
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
 */function e1(t,e){const n=bo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ps(s,e!=null?e:{}))return i;At(i,"already-initialized")}return n.initialize({options:e})}function t1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function sc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function n1(){return Rh()==="http:"||Rh()==="https:"}function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function r1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n1()||Im()||"connection"in navigator)?navigator.onLine:!0}function i1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Em()||Tm()}get(){return r1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gl(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const s1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const o1=new xi(3e4,6e4);function a1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wo(t,e,n,r,i={}){return Mm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pm.fetch()(Lm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Mm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},s1),e);try{const i=new l1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Dm(t,u,l);At(t,u)}}catch(i){if(i instanceof Ot)throw i;At(t,"network-request-failed")}}async function c1(t,e,n,r,i={}){const s=await wo(t,e,n,r,i);return"mfaPendingCredential"in s&&At(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Lm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gl(t.config,i):`${t.config.apiScheme}://${i}`}class l1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),o1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function u1(t,e){return wo(t,"POST","/v1/accounts:delete",e)}async function h1(t,e){return wo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f1(t,e=!1){const n=Kn(t),r=await n.getIdToken(e),i=vl(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zr(fa(i.auth_time)),issuedAtTime:Zr(fa(i.iat)),expirationTime:Zr(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function vl(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rw(r);return s?JSON.parse(s):(ms("Failed to decode base64 JWT payload"),null)}catch(s){return ms("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function d1(t){const e=vl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&m1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zr(this.lastLoginAt),this.creationTime=Zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(t){var e;const n=t.auth,r=await t.getIdToken(),i=await di(t,h1(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y1(s.providerUserInfo):[],a=v1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fm(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function g1(t){const e=Kn(t);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y1(t){return t.map(e=>{var{providerId:n}=e,r=ml(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function b1(t,e){const n=await Mm(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Lm(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await b1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mi;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Qt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f1(this,e)}reload(){return g1(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await di(this,u1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:M,isAnonymous:G,providerData:ce,stsTokenManager:ge}=n;H(N&&ge,e,"internal-error");const Le=mi.fromJSON(this.name,ge);H(typeof N=="string",e,"internal-error"),Qt(h,e.name),Qt(m,e.name),H(typeof M=="boolean",e,"internal-error"),H(typeof G=="boolean",e,"internal-error"),Qt(p,e.name),Qt(E,e.name),Qt(D,e.name),Qt(I,e.name),Qt(v,e.name),Qt(C,e.name);const Ie=new Nn({uid:N,auth:e,email:m,emailVerified:M,displayName:h,isAnonymous:G,photoURL:E,phoneNumber:p,tenantId:D,stsTokenManager:Le,createdAt:v,lastLoginAt:C});return ce&&Array.isArray(ce)&&(Ie.providerData=ce.map(bn=>Object.assign({},bn))),I&&(Ie._redirectEventId=I),Ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new mi;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ls(s),s}}/**
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
 */class Um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Um.type="NONE";const Nh=Um;/**
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
 */function ps(t,e,n){return`firebase:${t}:${e}:${n}`}class ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=ps("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ur(Lt(Nh),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Lt(Nh);const o=ps(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Nn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ur(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ur(s,e,r))}}/**
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
 */function Dh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Hm(e))return"Webos";if(yl(e))return"Safari";if((e.includes("chrome/")||Bm(e))&&!e.includes("edge/"))return"Chrome";if(jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $m(t=Se()){return/firefox\//i.test(t)}function yl(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bm(t=Se()){return/crios\//i.test(t)}function Vm(t=Se()){return/iemobile/i.test(t)}function jm(t=Se()){return/android/i.test(t)}function zm(t=Se()){return/blackberry/i.test(t)}function Hm(t=Se()){return/webos/i.test(t)}function _o(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w1(t=Se()){var e;return _o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _1(){return km()&&document.documentMode===10}function qm(t=Se()){return _o(t)||jm(t)||Hm(t)||zm(t)||/windows phone/i.test(t)||Vm(t)}function E1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Km(t,e=[]){let n;switch(t){case"Browser":n=Dh(Se());break;case"Worker":n=`${Dh(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class T1{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ls(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Kn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Km(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function bl(t){return Kn(t)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function hr(t,e){return c1(t,"POST","/v1/accounts:signInWithIdp",a1(t,e))}/**
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
 */const k1="http://localhost";class Vn extends Wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ml(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hr(e,n)}buildRequest(){const e={requestUri:k1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */class wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends Oi{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class yt extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
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
 */class tn extends Oi{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Mh(r);return new gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mh(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fs extends Ot{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fs(e,n,r,i)}}function Gm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,s,e,r):s})}async function S1(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
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
 */async function C1(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await di(t,Gm(i,s,e,t),n);H(o.idToken,i,"internal-error");const a=vl(o.idToken);H(a,i,"internal-error");const{sub:c}=a;return H(t.uid===c,i,"user-mismatch"),gr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&At(i,"user-mismatch"),o}}/**
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
 */async function A1(t,e,n=!1){const r="signIn",i=await Gm(t,r,e),s=await gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const Us="__sak";/**
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
 */class Ym{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function x1(){const t=Se();return yl(t)||_o(t)}const O1=1e3,R1=10;class Xm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=x1()&&E1(),this.fallbackToPolling=qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,R1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},O1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xm.type="LOCAL";const N1=Xm;/**
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
 */class Qm extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qm.type="SESSION";const Jm=Qm;/**
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
 */function D1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await D1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eo.receivers=[];/**
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
 */function _l(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class P1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=_l("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function M1(t){kt().location.href=t}/**
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
 */function Zm(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function L1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U1(){return Zm()?self:null}/**
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
 */const ep="firebaseLocalStorageDb",$1=1,$s="firebaseLocalStorage",tp="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Io(t,e){return t.transaction([$s],e?"readwrite":"readonly").objectStore($s)}function B1(){const t=indexedDB.deleteDatabase(ep);return new Ri(t).toPromise()}function oc(){const t=indexedDB.open(ep,$1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($s,{keyPath:tp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($s)?e(r):(r.close(),await B1(),e(await oc()))})})}async function Lh(t,e,n){const r=Io(t,!0).put({[tp]:e,value:n});return new Ri(r).toPromise()}async function V1(t,e){const n=Io(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function Fh(t,e){const n=Io(t,!0).delete(e);return new Ri(n).toPromise()}const j1=800,z1=3;class np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>z1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eo._getInstance(U1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await L1(),!this.activeServiceWorker)return;this.sender=new P1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oc();return await Lh(e,Us,"1"),await Fh(e,Us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>V1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Io(i,!1).getAll();return new Ri(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}np.type="LOCAL";const H1=np;/**
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
 */function q1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function K1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",q1().appendChild(r)})}function W1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new xi(3e4,6e4);/**
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
 */function rp(t,e){return e?Lt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class El extends Wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G1(t){return A1(t.auth,new El(t),t.bypassAuthState)}function Y1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),C1(n,new El(t),t.bypassAuthState)}async function X1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),S1(n,new El(t),t.bypassAuthState)}/**
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
 */class ip{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G1;case"linkViaPopup":case"linkViaRedirect":return X1;case"reauthViaPopup":case"reauthViaRedirect":return Y1;default:At(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Q1=new xi(2e3,1e4);async function J1(t,e,n){const r=bl(t);Z_(t,e,wl);const i=rp(r,n);return new Sn(r,"signInViaPopup",e,i).executeNotNull()}class Sn extends ip{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Q1.get())};e()}}Sn.currentPopupAction=null;/**
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
 */const Z1="pendingRedirect",gs=new Map;class eE extends ip{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gs.get(this.auth._key());if(!e){try{const r=await tE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gs.set(this.auth._key(),e)}return this.bypassAuthState||gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tE(t,e){const n=iE(e),r=rE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nE(t,e){gs.set(t._key(),e)}function rE(t){return Lt(t._redirectPersistence)}function iE(t){return ps(Z1,t.config.apiKey,t.name)}async function sE(t,e,n=!1){const r=bl(t),i=rp(r,e),o=await new eE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oE=10*60*1e3;class aE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sp(t);default:return!1}}/**
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
 */async function lE(t,e={}){return wo(t,"GET","/v1/projects",e)}/**
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
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function fE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lE(t);for(const n of e)try{if(dE(n))return}catch{}At(t,"unauthorized-domain")}function dE(t){const e=sc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hE.test(n))return!1;if(uE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const mE=new xi(3e4,6e4);function $h(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pE(t){return new Promise((e,n)=>{var r,i,s;function o(){$h(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$h(),n(Tt(t,"network-request-failed"))},timeout:mE.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kt().gapi)===null||s===void 0)&&s.load)o();else{const a=W1("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},K1(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vs=null,e})}let vs=null;function gE(t){return vs=vs||pE(t),vs}/**
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
 */const vE=new xi(5e3,15e3),yE="__/auth/iframe",bE="emulator/auth/iframe",wE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EE(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gl(e,bE):`https://${t.config.authDomain}/${yE}`,r={apiKey:e.apiKey,appName:t.name,v:xr},i=_E.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ai(r).slice(1)}`}async function IE(t){const e=await gE(t),n=kt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:EE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},vE.get());function c(){kt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const TE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kE=500,SE=600,CE="_blank",AE="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xE(t,e,n,r=kE,i=SE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},TE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Se().toLowerCase();n&&(a=Bm(l)?CE:n),$m(l)&&(e=e||AE,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[p,E])=>`${m}${p}=${E},`,"");if(w1(l)&&a!=="_self")return OE(e||"",a),new Bh(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Bh(h)}function OE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RE="__/auth/handler",NE="emulator/auth/handler";function Vh(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(e instanceof wl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Oi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${DE(t)}?${Ai(a).slice(1)}`}function DE({config:t}){return t.emulator?gl(t,NE):`https://${t.authDomain}/${RE}`}/**
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
 */const da="webStorageSupport";class PE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jm,this._completeRedirectFn=sE,this._overrideRedirectResult=nE}async _openPopup(e,n,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vh(e,n,r,sc(),i);return xE(e,o,_l())}async _openRedirect(e,n,r,i){return await this._originValidation(e),M1(Vh(e,n,r,sc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IE(e),r=new aE(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(da,{type:da},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[da];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qm()||yl()||_o()}}const ME=PE;var jh="@firebase/auth",zh="0.20.5";/**
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
 */class LE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UE(t){$n(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Km(t)},u=new T1(a,c,l);return t1(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new fn("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(r=>new LE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(jh,zh,FE(t)),It(jh,zh,"esm2017")}/**
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
 */function $E(t=dl()){const e=bo(t,"auth");return e.isInitialized()?e.getImmediate():e1(t,{popupRedirectResolver:ME,persistence:[H1,N1,Jm]})}UE("Browser");var BE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Il=Il||{},j=BE||self;function Bs(){}function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VE(t){return Object.prototype.hasOwnProperty.call(t,ma)&&t[ma]||(t[ma]=++jE)}var ma="closure_uid_"+(1e9*Math.random()>>>0),jE=0;function zE(t,e,n){return t.call.apply(t.bind,arguments)}function HE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ne(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=zE:Ne=HE,Ne.apply(null,arguments)}function es(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function gn(){this.s=this.s,this.o=this.o}var qE=0;gn.prototype.s=!1;gn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qE!=0)&&VE(this)};gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const op=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ap=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function KE(t){e:{var e=FI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Hh(t){return Array.prototype.concat.apply([],arguments)}function Tl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vs(t){return/^[\s\xa0]*$/.test(t)}var qh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $e(t,e){return t.indexOf(e)!=-1}function pa(t,e){return t<e?-1:t>e?1:0}var Be;e:{var Kh=j.navigator;if(Kh){var Wh=Kh.userAgent;if(Wh){Be=Wh;break e}}Be=""}function kl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cp(t){const e={};for(const n in t)e[n]=t[n];return e}var Gh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lp(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Gh.length;s++)n=Gh[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Sl(t){return Sl[" "](t),t}Sl[" "]=Bs;function WE(t){var e=XE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var GE=$e(Be,"Opera"),vr=$e(Be,"Trident")||$e(Be,"MSIE"),up=$e(Be,"Edge"),cc=up||vr,hp=$e(Be,"Gecko")&&!($e(Be.toLowerCase(),"webkit")&&!$e(Be,"Edge"))&&!($e(Be,"Trident")||$e(Be,"MSIE"))&&!$e(Be,"Edge"),YE=$e(Be.toLowerCase(),"webkit")&&!$e(Be,"Edge");function fp(){var t=j.document;return t?t.documentMode:void 0}var js;e:{var ga="",va=function(){var t=Be;if(hp)return/rv:([^\);]+)(\)|;)/.exec(t);if(up)return/Edge\/([\d\.]+)/.exec(t);if(vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YE)return/WebKit\/(\S+)/.exec(t);if(GE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(va&&(ga=va?va[1]:""),vr){var ya=fp();if(ya!=null&&ya>parseFloat(ga)){js=String(ya);break e}}js=ga}var XE={};function QE(){return WE(function(){let t=0;const e=qh(String(js)).split("."),n=qh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=pa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||pa(i[2].length==0,s[2].length==0)||pa(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lc;if(j.document&&vr){var Yh=fp();lc=Yh||parseInt(js,10)||void 0}else lc=void 0;var JE=lc,ZE=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Bs,e),j.removeEventListener("test",Bs,e)}catch{}return t}();function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};function pi(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(hp){e:{try{Sl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&pi.Z.h.call(this)}}Me(pi,Fe);var eI={2:"touch",3:"pen",4:"mouse"};pi.prototype.h=function(){pi.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),tI=0;function nI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++tI,this.ca=this.fa=!1}function To(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ko(t){this.src=t,this.g={},this.h=0}ko.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nI(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=op(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(To(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Cl="closure_lm_"+(1e6*Math.random()|0),ba={};function dp(t,e,n,r,i){if(r&&r.once)return pp(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dp(t,e[s],n,r,i);return null}return n=Ol(n),t&&t[Di]?t.N(e,n,Ni(r)?!!r.capture:!!r,i):mp(t,e,n,!1,r,i)}function mp(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ni(i)?!!i.capture:!!i,a=xl(t);if(a||(t[Cl]=a=new ko(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rI(){function t(n){return e.call(t.src,t.listener,n)}var e=iI;return t}function pp(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pp(t,e[s],n,r,i);return null}return n=Ol(n),t&&t[Di]?t.O(e,n,Ni(r)?!!r.capture:!!r,i):mp(t,e,n,!0,r,i)}function gp(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gp(t,e[s],n,r,i);else r=Ni(r)?!!r.capture:!!r,n=Ol(n),t&&t[Di]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hc(s,n,r,i),-1<n&&(To(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=xl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hc(e,n,r,i)),(n=-1<t?e[t]:null)&&Al(n))}function Al(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Di])uc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=xl(e))?(uc(n,t),n.h==0&&(n.src=null,e[Cl]=null)):To(t)}}}function vp(t){return t in ba?ba[t]:ba[t]="on"+t}function iI(t,e){if(t.ca)t=!0;else{e=new pi(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Al(t),t=n.call(r,e)}return t}function xl(t){return t=t[Cl],t instanceof ko?t:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ol(t){return typeof t=="function"?t:(t[wa]||(t[wa]=function(e){return t.handleEvent(e)}),t[wa])}function Ce(){gn.call(this),this.i=new ko(this),this.P=this,this.I=null}Me(Ce,gn);Ce.prototype[Di]=!0;Ce.prototype.removeEventListener=function(t,e,n,r){gp(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(r,t),lp(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ts(o,r,!0,e)&&i}if(o=e.g=t,i=ts(o,r,!0,e)&&i,i=ts(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ts(o,r,!1,e)&&i}Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)To(n[r]);delete t.g[e],t.h--}}this.I=null};Ce.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ce.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ts(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&uc(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Rl=j.JSON.stringify;function sI(){var t=bp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oI{constructor(){this.h=this.g=null}add(e,n){const r=yp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aI,t=>t.reset());class aI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cI(t){j.setTimeout(()=>{throw t},0)}function Nl(t,e){fc||lI(),dc||(fc(),dc=!0),bp.add(t,e)}var fc;function lI(){var t=j.Promise.resolve(void 0);fc=function(){t.then(uI)}}var dc=!1,bp=new oI;function uI(){for(var t;t=sI();){try{t.h.call(t.g)}catch(n){cI(n)}var e=yp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dc=!1}function So(t,e){Ce.call(this),this.h=t||1,this.g=e||j,this.j=Ne(this.kb,this),this.l=Date.now()}Me(So,Ce);R=So.prototype;R.da=!1;R.S=null;R.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(Dl(this),this.start()))}};R.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}R.M=function(){So.Z.M.call(this),Dl(this),delete this.g};function Pl(t,e,n){if(typeof t=="function")n&&(t=Ne(t,n));else if(t&&typeof t.handleEvent=="function")t=Ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function wp(t){t.g=Pl(()=>{t.g=null,t.i&&(t.i=!1,wp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hI extends gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wp(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(t){gn.call(this),this.h=t,this.g={}}Me(gi,gn);var Xh=[];function _p(t,e,n,r){Array.isArray(n)||(n&&(Xh[0]=n.toString()),n=Xh);for(var i=0;i<n.length;i++){var s=dp(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ep(t){kl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Al(e)},t),t.g={}}gi.prototype.M=function(){gi.Z.M.call(this),Ep(this)};gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Co(){this.g=!0}Co.prototype.Aa=function(){this.g=!1};function fI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dI(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ir(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pI(t,n)+(r?" "+r:"")})}function mI(t,e){t.info(function(){return"TIMEOUT: "+e})}Co.prototype.info=function(){};function pI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Rl(n)}catch{return e}}var Wn={},Qh=null;function Ao(){return Qh=Qh||new Ce}Wn.Ma="serverreachability";function Ip(t){Fe.call(this,Wn.Ma,t)}Me(Ip,Fe);function vi(t){const e=Ao();De(e,new Ip(e))}Wn.STAT_EVENT="statevent";function Tp(t,e){Fe.call(this,Wn.STAT_EVENT,t),this.stat=e}Me(Tp,Fe);function je(t){const e=Ao();De(e,new Tp(e,t))}Wn.Na="timingevent";function kp(t,e){Fe.call(this,Wn.Na,t),this.size=e}Me(kp,Fe);function Pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var xo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Sp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ml(){}Ml.prototype.h=null;function Jh(t){return t.h||(t.h=t.i())}function Cp(){}var Mi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ll(){Fe.call(this,"d")}Me(Ll,Fe);function Fl(){Fe.call(this,"c")}Me(Fl,Fe);var mc;function Oo(){}Me(Oo,Ml);Oo.prototype.g=function(){return new XMLHttpRequest};Oo.prototype.i=function(){return{}};mc=new Oo;function Li(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new gi(this),this.P=gI,t=cc?125:void 0,this.W=new So(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ap}function Ap(){this.i=null,this.g="",this.h=!1}var gI=45e3,pc={},zs={};R=Li.prototype;R.setTimeout=function(t){this.P=t};function gc(t,e,n){t.K=1,t.v=No(zt(e)),t.s=n,t.U=!0,xp(t,null)}function xp(t,e){t.F=Date.now(),Fi(t),t.A=zt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Lp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ap,t.g=ng(t.l,n?e:null,!t.s),0<t.O&&(t.L=new hI(Ne(t.Ia,t,t.g),t.O)),_p(t.V,t.g,"readystatechange",t.gb),e=t.H?cp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),vi(),fI(t.j,t.u,t.A,t.m,t.X,t.s)}R.gb=function(t){t=t.target;const e=this.L;e&&Ft(t)==3?e.l():this.Ia(t)};R.Ia=function(t){try{if(t==this.g)e:{const u=Ft(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||cc||this.g&&(this.h.h||this.g.ga()||nf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vi(3):vi(2)),Ro(this);var n=this.g.ba();this.N=n;t:if(Op(this)){var r=nf(this.g);t="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),ei(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,dI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vs(a)){var l=a;break t}}l=null}if(n=l)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vc(this,n);else{this.i=!1,this.o=3,je(12),Cn(this),ei(this);break e}}this.U?(Rp(this,u,o),cc&&this.i&&u==3&&(_p(this.V,this.W,"tick",this.fb),this.W.start())):(ir(this.j,this.m,o,null),vc(this,o)),u==4&&Cn(this),this.i&&!this.I&&(u==4?Jp(this.l,this):(this.i=!1,Fi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),Cn(this),ei(this)}}}catch{}finally{}};function Op(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Rp(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=vI(t,n),i==zs){e==4&&(t.o=4,je(14),r=!1),ir(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pc){t.o=4,je(15),ir(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ir(t.j,t.m,i,null),vc(t,i);Op(t)&&i!=zs&&i!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kl(e),e.L=!0,je(11))):(ir(t.j,t.m,n,"[Invalid Chunked Response]"),Cn(t),ei(t))}R.fb=function(){if(this.g){var t=Ft(this.g),e=this.g.ga();this.C<e.length&&(Ro(this),Rp(this,t,e),this.i&&t!=4&&Fi(this))}};function vI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zs:(n=Number(e.substring(n,r)),isNaN(n)?pc:(r+=1,r+n>e.length?zs:(e=e.substr(r,n),t.C=r+n,e)))}R.cancel=function(){this.I=!0,Cn(this)};function Fi(t){t.Y=Date.now()+t.P,Np(t,t.P)}function Np(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pi(Ne(t.eb,t),e)}function Ro(t){t.B&&(j.clearTimeout(t.B),t.B=null)}R.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mI(this.j,this.A),this.K!=2&&(vi(),je(17)),Cn(this),this.o=2,ei(this)):Np(this,this.Y-t)};function ei(t){t.l.G==0||t.I||Jp(t.l,t)}function Cn(t){Ro(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Dl(t.W),Ep(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.i,t))){if(n.I=t.N,!t.J&&yc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ws(n),Mo(n);else break e;ql(n),je(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Pi(Ne(n.ab,n),6e3));if(1>=$p(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else An(n,11)}else if((t.J||n.g==t)&&Ws(n),!Vs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;!s.g&&($e(E,"spdy")||$e(E,"quic")||$e(E,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Bl(s,s.h),s.h=null))}if(r.D){const D=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.sa=D,fe(r.F,r.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=tg(r,r.H?r.la:null,r.W),o.J){Bp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ro(a),Fi(a)),r.g=o}else Xp(r);0<n.l.length&&Lo(n)}else l[0]!="stop"&&l[0]!="close"||An(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?An(n,7):Hl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}vi(4)}catch{}}function yI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ul(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")ap(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ac(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=yI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Or(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Or)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}R=Or.prototype;R.R=function(){$l(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};R.T=function(){return $l(this),this.g.concat()};function $l(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];jn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],jn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}R.get=function(t,e){return jn(this.h,t)?this.h[t]:e};R.set=function(t,e){jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};R.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Dp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof zn){this.g=e!==void 0?e:t.g,Hs(this,t.j),this.s=t.s,qs(this,t.i),Ks(this,t.m),this.l=t.l,e=t.h;var n=new yi;n.i=e.i,e.g&&(n.g=new Or(e.g),n.h=e.h),Zh(this,n),this.o=t.o}else t&&(n=String(t).match(Dp))?(this.g=!!e,Hs(this,n[1]||"",!0),this.s=ti(n[2]||""),qs(this,n[3]||"",!0),Ks(this,n[4]),this.l=ti(n[5]||"",!0),Zh(this,n[6]||"",!0),this.o=ti(n[7]||"")):(this.g=!!e,this.h=new yi(null,this.g))}zn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hr(e,ef,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hr(e,ef,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Hr(n,n.charAt(0)=="/"?TI:II,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hr(n,SI)),t.join("")};function zt(t){return new zn(t)}function Hs(t,e,n){t.j=n?ti(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qs(t,e,n){t.i=n?ti(e,!0):e}function Ks(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zh(t,e,n){e instanceof yi?(t.h=e,CI(t.h,t.g)):(n||(e=Hr(e,kI)),t.h=new yi(e,t.g))}function fe(t,e,n){t.h.set(e,n)}function No(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wI(t){return t instanceof zn?zt(t):new zn(t,void 0)}function _I(t,e,n,r){var i=new zn(null,void 0);return t&&Hs(i,t),e&&qs(i,e),n&&Ks(i,n),r&&(i.l=r),i}function ti(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ef=/[#\/\?@]/g,II=/[#\?:]/g,TI=/[#\?]/g,kI=/[#\?@]/g,SI=/#/g;function yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vn(t){t.g||(t.g=new Or,t.h=0,t.i&&bI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=yi.prototype;R.add=function(t,e){vn(this),this.i=null,t=Rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pp(t,e){vn(t),e=Rr(t,e),jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&$l(t)))}function Mp(t,e){return vn(t),e=Rr(t,e),jn(t.g.h,e)}R.forEach=function(t,e){vn(this),this.g.forEach(function(n,r){ap(n,function(i){t.call(e,i,r,this)},this)},this)};R.T=function(){vn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};R.R=function(t){vn(this);var e=[];if(typeof t=="string")Mp(this,t)&&(e=Hh(e,this.g.get(Rr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Hh(e,t[n])}return e};R.set=function(t,e){return vn(this),this.i=null,t=Rr(this,t),Mp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Lp(t,e,n){Pp(t,e),0<n.length&&(t.i=null,t.g.set(Rr(t,e),Tl(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CI(t,e){e&&!t.j&&(vn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Pp(this,r),Lp(this,i,n))},t)),t.j=e}var AI=class{constructor(t,e){this.h=t,this.g=e}};function Fp(t){this.l=t||xI,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xI=10;function Up(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $p(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bl(t,e){t.g?t.g.add(e):t.h=e}function Bp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Vp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tl(t.i)}function Vl(){}Vl.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};Vl.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function OI(){this.g=new Vl}function RI(t,e,n){const r=n||"";try{Ul(t,function(i,s){let o=i;Ni(i)&&(o=Rl(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function NI(t,e){const n=new Co;if(j.Image){const r=new Image;r.onload=es(ns,n,r,"TestLoadImage: loaded",!0,e),r.onerror=es(ns,n,r,"TestLoadImage: error",!1,e),r.onabort=es(ns,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=es(ns,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ns(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ui(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Ui,Ml);Ui.prototype.g=function(){return new Do(this.l,this.j)};Ui.prototype.i=function(t){return function(){return t}}({});function Do(t,e){Ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Do,Ce);var jl=0;R=Do.prototype;R.open=function(t,e){if(this.readyState!=jl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bi(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=jl};R.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function jp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}R.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$i(this):bi(this),this.readyState==3&&jp(this)}};R.Ua=function(t){this.g&&(this.response=this.responseText=t,$i(this))};R.Ta=function(t){this.g&&(this.response=t,$i(this))};R.ha=function(){this.g&&$i(this)};function $i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bi(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DI=j.JSON.parse;function we(t){Ce.call(this),this.headers=new Or,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zp,this.K=this.L=!1}Me(we,Ce);var zp="",PI=/^https?$/i,MI=["POST","PUT"];R=we.prototype;R.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mc.g(),this.C=this.u?Jh(this.u):Jh(mc),this.g.onreadystatechange=Ne(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){tf(this,s);return}t=n||"";const i=new Or(this.headers);r&&Ul(r,function(s,o){i.set(o,s)}),r=KE(i.T()),n=j.FormData&&t instanceof j.FormData,!(0<=op(MI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kp(this),0<this.B&&((this.K=LI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.pa,this)):this.A=Pl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){tf(this,s)}};function LI(t){return vr&&QE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function FI(t){return t.toLowerCase()=="content-type"}R.pa=function(){typeof Il<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function tf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hp(t),Po(t)}function Hp(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Po(this))};R.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Po(this,!0)),we.Z.M.call(this)};R.Fa=function(){this.s||(this.F||this.v||this.l?qp(this):this.cb())};R.cb=function(){qp(this)};function qp(t){if(t.h&&typeof Il<"u"&&(!t.C[1]||Ft(t)!=4||t.ba()!=2)){if(t.v&&Ft(t)==4)Pl(t.Fa,0,t);else if(De(t,"readystatechange"),Ft(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Dp)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!PI.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Ft(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Hp(t)}}finally{Po(t)}}}}function Po(t,e){if(t.g){Kp(t);const n=t.g,r=t.C[0]?Bs:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function Kp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function Ft(t){return t.g?t.g.readyState:0}R.ba=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};R.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DI(e)}};function nf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case zp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}R.Da=function(){return this.m};R.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function UI(t){let e="";return kl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Br(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wp(t){this.za=0,this.l=[],this.h=new Co,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Br("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Br("baseRetryDelayMs",5e3,t),this.$a=Br("retryDelaySeedMs",1e4,t),this.Ya=Br("forwardChannelMaxRetries",2,t),this.ra=Br("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Fp(t&&t.concurrentRequestLimit),this.Ca=new OI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}R=Wp.prototype;R.ma=8;R.G=1;function Hl(t){if(Gp(t),t.G==3){var e=t.V++,n=zt(t.F);fe(n,"SID",t.J),fe(n,"RID",e),fe(n,"TYPE","terminate"),Bi(t,n),e=new Li(t,t.h,e,void 0),e.K=2,e.v=No(zt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=ng(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fi(e)}eg(t)}R.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Mo(t){t.g&&(Kl(t),t.g.cancel(),t.g=null)}function Gp(t){Mo(t),t.u&&(j.clearTimeout(t.u),t.u=null),Ws(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function _a(t,e){t.l.push(new AI(t.Za++,e)),t.G==3&&Lo(t)}function Lo(t){Up(t.i)||t.m||(t.m=!0,Nl(t.Ha,t),t.C=0)}function $I(t,e){return $p(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Pi(Ne(t.Ha,t,e),Zp(t,t.C)),t.C++,!0)}R.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Li(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=cp(s),lp(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yp(this,i,e),n=zt(this.F),fe(n,"RID",t),fe(n,"CVER",22),this.D&&fe(n,"X-HTTP-Session-Id",this.D),Bi(this,n),this.o&&s&&zl(n,this.o,s),Bl(this.i,i),this.Ra&&fe(n,"TYPE","init"),this.ja?(fe(n,"$req",e),fe(n,"SID","null"),i.$=!0,gc(i,n,null)):gc(i,n,e),this.G=2}}else this.G==3&&(t?rf(this,t):this.l.length==0||Up(this.i)||rf(this))};function rf(t,e){var n;e?n=e.m:n=t.V++;const r=zt(t.F);fe(r,"SID",t.J),fe(r,"RID",n),fe(r,"AID",t.U),Bi(t,r),t.o&&t.s&&zl(r,t.o,t.s),n=new Li(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Yp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Bl(t.i,n),gc(n,r,e)}function Bi(t,e){t.j&&Ul({},function(n,r){fe(e,r,n)})}function Yp(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ne(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{RI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Xp(t){t.g||t.u||(t.Y=1,Nl(t.Ga,t),t.A=0)}function ql(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Pi(Ne(t.Ga,t),Zp(t,t.A)),t.A++,!0)}R.Ga=function(){if(this.u=null,Qp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Pi(Ne(this.bb,this),t)}};R.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,je(10),Mo(this),Qp(this))};function Kl(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function Qp(t){t.g=new Li(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=zt(t.oa);fe(e,"RID","rpc"),fe(e,"SID",t.J),fe(e,"CI",t.N?"0":"1"),fe(e,"AID",t.U),Bi(t,e),fe(e,"TYPE","xmlhttp"),t.o&&t.s&&zl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=No(zt(e)),n.s=null,n.U=!0,xp(n,t)}R.ab=function(){this.v!=null&&(this.v=null,Mo(this),ql(this),je(19))};function Ws(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function Jp(t,e){var n=null;if(t.g==e){Ws(t),Kl(t),t.g=null;var r=2}else if(yc(t.i,e))n=e.D,Bp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ao(),De(r,new kp(r,n)),Lo(t)}else Xp(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&$I(t,e)||r==2&&ql(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:An(t,5);break;case 4:An(t,10);break;case 3:An(t,6);break;default:An(t,2)}}}function Zp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function An(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ne(t.jb,t);n||(n=new zn("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Hs(n,"https"),No(n)),NI(n.toString(),r)}else je(2);t.G=0,t.j&&t.j.va(e),eg(t),Gp(t)}R.jb=function(t){t?(this.h.info("Successfully pinged google.com"),je(2)):(this.h.info("Failed to ping google.com"),je(1))};function eg(t){t.G=0,t.I=-1,t.j&&((Vp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Tl(t.l),t.l.length=0),t.j.ua())}function tg(t,e,n){let r=wI(n);if(r.i!="")e&&qs(r,e+"."+r.i),Ks(r,r.m);else{const i=j.location;r=_I(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&kl(t.aa,function(i,s){fe(r,s,i)}),e=t.D,n=t.sa,e&&n&&fe(r,e,n),fe(r,"VER",t.ma),Bi(t,r),r}function ng(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new we(new Ui({ib:!0})):new we(t.qa),e.L=t.H,e}function rg(){}R=rg.prototype;R.xa=function(){};R.wa=function(){};R.va=function(){};R.ua=function(){};R.Oa=function(){};function Gs(){if(vr&&!(10<=Number(JE)))throw Error("Environmental error: no available transport.")}Gs.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ce.call(this),this.g=new Wp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Vs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nr(this)}Me(et,Ce);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Nl(Ne(t.hb,t,e))),je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=tg(t,null,t.W),Lo(t)};et.prototype.close=function(){Hl(this.g)};et.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,_a(this.g,e)}else this.v?(e={},e.__data__=Rl(t),_a(this.g,e)):_a(this.g,t)};et.prototype.M=function(){this.g.j=null,delete this.j,Hl(this.g),delete this.g,et.Z.M.call(this)};function ig(t){Ll.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(ig,Ll);function sg(){Fl.call(this),this.status=1}Me(sg,Fl);function Nr(t){this.g=t}Me(Nr,rg);Nr.prototype.xa=function(){De(this.g,"a")};Nr.prototype.wa=function(t){De(this.g,new ig(t))};Nr.prototype.va=function(t){De(this.g,new sg)};Nr.prototype.ua=function(){De(this.g,"b")};Gs.prototype.createWebChannel=Gs.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;xo.NO_ERROR=0;xo.TIMEOUT=8;xo.HTTP_ERROR=6;Sp.COMPLETE="complete";Cp.EventType=Mi;Mi.OPEN="a";Mi.CLOSE="b";Mi.ERROR="c";Mi.MESSAGE="d";Ce.prototype.listen=Ce.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.La;we.prototype.getLastErrorCode=we.prototype.Da;we.prototype.getStatus=we.prototype.ba;we.prototype.getResponseJson=we.prototype.Qa;we.prototype.getResponseText=we.prototype.ga;we.prototype.send=we.prototype.ea;var BI=function(){return new Gs},VI=function(){return Ao()},Ea=xo,jI=Sp,zI=Wn,sf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},HI=Ui,rs=Cp,qI=we;const of="@firebase/firestore";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let Dr="9.9.2";/**
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
 */const Hn=new hl("@firebase/firestore");function af(){return Hn.logLevel}function L(t,...e){if(Hn.logLevel<=te.DEBUG){const n=e.map(Wl);Hn.debug(`Firestore (${Dr}): ${t}`,...n)}}function Ht(t,...e){if(Hn.logLevel<=te.ERROR){const n=e.map(Wl);Hn.error(`Firestore (${Dr}): ${t}`,...n)}}function cf(t,...e){if(Hn.logLevel<=te.WARN){const n=e.map(Wl);Hn.warn(`Firestore (${Dr}): ${t}`,...n)}}function Wl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+t;throw Ht(e),new Error(e)}function be(t,e){t||W()}function ee(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class an{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class KI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class GI{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new an;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new an,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new an)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new We(e)}}class YI{constructor(e,n,r){this.type="FirstParty",this.user=We.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class XI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new YI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.p=n.token,new QI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class og{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function yr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Xe(0,0))}static max(){return new Y(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends wi{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const eT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends wi{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return eT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(de.fromString(e))}static fromName(e){return new B(de.fromString(e).popFirst(5))}static empty(){return new B(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new de(e.slice()))}}function tT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new dn(i,B.empty(),e)}function nT(t){return new dn(t.readTime,t.key,-1)}class dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new dn(Y.min(),B.empty(),-1)}static max(){return new dn(Y.max(),B.empty(),-1)}}function rT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const iT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==iT)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Yl.ot=-1;class Ae{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:xe.RED,this.left=i!=null?i:xe.EMPTY,this.right=s!=null?s:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(e){return new uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dn{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Dn([])}unionWith(e){let n=new _e(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const aT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(be(!!t),typeof t=="string"){let e=0;const n=aT.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
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
 */function ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cg(t){const e=t.mapValue.fields.__previous_value__;return ag(e)?cg(e):e}function _i(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class cT{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Uo(t){return t==null}function bc(t){return t===0&&1/t==-1/0}/**
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
 */const ss={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ag(t)?4:lT(t)?9007199254740991:10:W()}function xt(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=mn(r.timestampValue),o=mn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return br(r.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?bc(s)===bc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return yr(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(lf(s)!==lf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!xt(s[a],o[a])))return!1;return!0}(t,e);default:return W()}}function Ei(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function _r(t,e){if(t===e)return 0;const n=qn(t),r=qn(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hf(t.timestampValue,e.timestampValue);case 4:return hf(_i(t),_i(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=br(i),a=br(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(ye(i.latitude),ye(s.latitude));return o!==0?o:ne(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=_r(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ss.mapValue&&s===ss.mapValue)return 0;if(i===ss.mapValue)return 1;if(s===ss.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const m=_r(o[a[u]],c[l[u]]);if(m!==0)return m}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function hf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=mn(t),r=mn(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function fr(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=mn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?br(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=wc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${wc(r.fields[a])}`;return s+"}"}(t.mapValue):W();var e,n}function _c(t){return!!t&&"integerValue"in t}function Xl(t){return!!t&&"arrayValue"in t}function ff(t){return!!t&&"nullValue"in t}function df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ia(t){return!!t&&"mapValue"in t}function ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ni(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ni(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ia(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(ni(this.value))}}/**
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
 */class Oe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Oe(e,0,Y.min(),Y.min(),bt.empty(),0)}static newFoundDocument(e,n,r){return new Oe(e,1,n,Y.min(),r,0)}static newNoDocument(e,n){return new Oe(e,2,n,Y.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,Y.min(),bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function mf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uT(t,e,n,r,i,s,o)}function Ql(t){const e=ee(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+fr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fr(r)).join(",")),e.ut=n}return e.ut}function hT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${fr(r.value)}`;var r}).join(", ")}]`),Uo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fr(n)).join(",")),`Target(${e})`}function Jl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!bT(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!xt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gf(t.startAt,e.startAt)&&gf(t.endAt,e.endAt)}function Ec(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ye extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new fT(e,n,r):n==="array-contains"?new pT(e,r):n==="in"?new gT(e,r):n==="not-in"?new vT(e,r):n==="array-contains-any"?new yT(e,r):new Ye(e,n,r)}static ct(e,n,r){return n==="in"?new dT(e,r):new mT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(_r(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.at(_r(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fT extends Ye{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.at(n)}}class dT extends Ye{constructor(e,n){super(e,"in",n),this.keys=lg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mT extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=lg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class pT extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xl(n)&&Ei(n.arrayValue,this.value)}}class gT extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ei(this.value.arrayValue,n)}}class vT extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ei(this.value.arrayValue,n)}}class yT extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ei(this.value.arrayValue,r))}}class Ys{constructor(e,n){this.position=e,this.inclusive=n}}class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function bT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function pf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=_r(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $o{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function wT(t,e,n,r,i,s,o,a){return new $o(t,e,n,r,i,s,o,a)}function Zl(t){return new $o(t)}function vf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _T(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ET(t){for(const e of t.filters)if(e.ht())return e.field;return null}function IT(t){return t.collectionGroup!==null}function Ii(t){const e=ee(t);if(e.lt===null){e.lt=[];const n=ET(e),r=_T(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new ri(n)),e.lt.push(new ri(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ri(Ge.keyField(),s))}}}return e.lt}function qt(t){const e=ee(t);if(!e.ft)if(e.limitType==="F")e.ft=mf(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ri(s.field,o))}const r=e.endAt?new Ys(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ys(e.startAt.position,e.startAt.inclusive):null;e.ft=mf(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function Ic(t,e,n){return new $o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bo(t,e){return Jl(qt(t),qt(e))&&t.limitType===e.limitType}function ug(t){return`${Ql(qt(t))}|lt:${t.limitType}`}function Tc(t){return`Query(target=${hT(qt(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=pf(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(i,s,o){const a=pf(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function TT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hg(t){return(e,n)=>{let r=!1;for(const i of Ii(t)){const s=kT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kT(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?_r(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */function ST(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function CT(t){return{integerValue:""+t}}/**
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
 */class Vo{constructor(){this._=void 0}}function AT(t,e,n){return t instanceof kc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Xs?fg(t,e):t instanceof Qs?dg(t,e):function(r,i){const s=OT(r,i),o=yf(s)+yf(r._t);return _c(s)&&_c(r._t)?CT(o):ST(r.wt,o)}(t,e)}function xT(t,e,n){return t instanceof Xs?fg(t,e):t instanceof Qs?dg(t,e):n}function OT(t,e){return t instanceof Sc?_c(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class kc extends Vo{}class Xs extends Vo{constructor(e){super(),this.elements=e}}function fg(t,e){const n=mg(e);for(const r of t.elements)n.some(i=>xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qs extends Vo{constructor(e){super(),this.elements=e}}function dg(t,e){let n=mg(e);for(const r of t.elements)n=n.filter(i=>!xt(i,r));return{arrayValue:{values:n}}}class Sc extends Vo{constructor(e,n){super(),this.wt=e,this._t=n}}function yf(t){return ye(t.integerValue||t.doubleValue)}function mg(t){return Xl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function RT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Xs&&r instanceof Xs||n instanceof Qs&&r instanceof Qs?yr(n.elements,r.elements,xt):n instanceof Sc&&r instanceof Sc?xt(n._t,r._t):n instanceof kc&&r instanceof kc}(t.transform,e.transform)}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ys(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function pg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new DT(t.key,Pn.none()):new nu(t.key,t.data,Pn.none());{const n=t.data,r=bt.empty();let i=new _e(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jo(t.key,r,new Dn(i.toArray()),Pn.none())}}function NT(t,e,n){t instanceof nu?function(r,i,s){const o=r.value.clone(),a=wf(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jo?function(r,i,s){if(!ys(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=wf(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(gg(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ii(t,e,n,r){return t instanceof nu?function(i,s,o,a){if(!ys(i.precondition,s))return o;const c=i.value.clone(),l=_f(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof jo?function(i,s,o,a){if(!ys(i.precondition,s))return o;const c=_f(i.fieldTransforms,a,s),l=s.data;return l.setAll(gg(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return ys(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&yr(n,r,(i,s)=>RT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nu extends tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jo extends tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function gg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wf(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,xT(o,a,n[i]))}return r}function _f(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AT(s,o,e))}return r}class DT extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PT{constructor(e){this.count=e}}/**
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
 */var ve,X;function vg(t){if(t===void 0)return Ht("GRPC error has no .code"),A.UNKNOWN;switch(t){case ve.OK:return A.OK;case ve.CANCELLED:return A.CANCELLED;case ve.UNKNOWN:return A.UNKNOWN;case ve.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ve.INTERNAL:return A.INTERNAL;case ve.UNAVAILABLE:return A.UNAVAILABLE;case ve.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ve.NOT_FOUND:return A.NOT_FOUND;case ve.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ve.ABORTED:return A.ABORTED;case ve.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ve.DATA_LOSS:return A.DATA_LOSS;default:return W()}}(X=ve||(ve={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return oT(this.inner)}size(){return this.innerSize}}/**
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
 */const MT=new Ae(B.comparator);function pn(){return MT}const yg=new Ae(B.comparator);function qr(...t){let e=yg;for(const n of t)e=e.insert(n.key,n);return e}function LT(t){let e=yg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return si()}function bg(){return si()}function si(){return new Pr(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ae(B.comparator);const FT=new _e(B.comparator);function Z(...t){let e=FT;for(const n of t)e=e.add(n);return e}const UT=new _e(ne);function wg(){return UT}/**
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
 */class zo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n)),new zo(Y.min(),r,wg(),pn(),Z())}}class ji{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ji(Pe.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
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
 */class bs{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class _g{constructor(e,n){this.targetId=e,this.It=n}}class Eg{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ef{constructor(){this.Tt=0,this.Et=Tf(),this.At=Pe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Z(),n=Z(),r=Z();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new ji(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Tf()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class $T{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=pn(),this.Bt=If(),this.Lt=new _e(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Ec(s))if(r===0){const o=new B(s.path);this.Kt(n,o,Oe.newNoDocument(o,Y.min()))}else be(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&Ec(a.target)){const c=new B(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Oe.newNoDocument(c,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=Z();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new zo(e,n,this.Lt,this.$t,r);return this.$t=pn(),this.Bt=If(),this.Lt=new _e(ne),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Ef,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new _e(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Ef),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function If(){return new Ae(B.comparator)}function Tf(){return new Ae(B.comparator)}/**
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
 */const BT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class jT{constructor(e,n){this.databaseId=e,this.dt=n}}function zT(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ti(t){return be(!!t),Y.fromTimestamp(function(e){const n=mn(e);return new Xe(n.seconds,n.nanos)}(t))}function qT(t,e){return function(n){return new de(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ig(t){const e=de.fromString(t);return be(Sg(e)),e}function Ta(t,e){const n=Ig(e);if(n.get(1)!==t.databaseId.projectId)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Tg(n))}function Cc(t,e){return qT(t.databaseId,e)}function KT(t){const e=Ig(t);return e.length===4?de.emptyPath():Tg(e)}function kf(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tg(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.dt?(be(l===void 0||typeof l=="string"),Pe.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),Pe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?A.UNKNOWN:vg(c.code);return new V(l,c.message||"")}(o);n=new Eg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ta(t,r.document.name),s=Ti(r.document.updateTime),o=new bt({mapValue:{fields:r.document.fields}}),a=Oe.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new bs(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ta(t,r.document),s=r.readTime?Ti(r.readTime):Y.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ta(t,r.document),s=r.removedTargetIds||[];n=new bs([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new PT(i),o=r.targetId;n=new _g(o,s)}}return n}function GT(t,e){return{documents:[Cc(t,e.path)]}}function YT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(df(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NAN"}};if(ff(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(df(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NOT_NAN"}};if(ff(h.value))return{unaryFilter:{field:Jn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(h.field),op:ZT(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Jn(u.field),direction:JT(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.dt||Uo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function XT(t){let e=KT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=kg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ri(sr(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Uo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,m=u.values||[];return new Ys(m,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,m=u.values||[];return new Ys(m,h)}(n.endAt)),wT(e,i,o,s,a,"F",c,l)}function QT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return W()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t?t.unaryFilter!==void 0?[tk(t)]:t.fieldFilter!==void 0?[ek(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>kg(e)).reduce((e,n)=>e.concat(n)):W():[]}function JT(t){return BT[t]}function ZT(t){return VT[t]}function Jn(t){return{fieldPath:t.canonicalString()}}function sr(t){return Ge.fromServerFormat(t.fieldPath)}function ek(t){return Ye.create(sr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}function tk(t){switch(t.unaryFilter.op){case"IS_NAN":const e=sr(t.unaryFilter.field);return Ye.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=sr(t.unaryFilter.field);return Ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=sr(t.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=sr(t.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return W()}}function Sg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=pg(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&yr(this.mutations,e.mutations,(n,r)=>bf(n,r))&&yr(this.baseMutations,e.baseMutations,(n,r)=>bf(n,r))}}/**
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
 */class rk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class ik{constructor(e){this.ne=e}}function sk(t){const e=XT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
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
 */class ok{constructor(){this.ze=new ak}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(dn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class ak{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(de.comparator)).toArray()}}/**
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
 */class Er{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Er(0)}static Rn(){return new Er(-1)}}/**
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
 */class ck{constructor(){this.changes=new Pr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class uk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ii(r.mutation,i,Dn.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=xn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qr();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=pn();const o=si(),a=si();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof jo)?s=s.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ii(u.mutation,l,u.mutation.getFieldMask(),Xe.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new lk(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=si();let i=new Ae((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dn.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||Z()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=bg();u.forEach(m=>{if(!s.has(m)){const p=pg(n.get(m),r.get(m));p!==null&&h.set(m,p),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(xn());let a=-1,c=s;return o.next(l=>_.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.getBaseDocument(e,u,h).next(m=>{c=c.insert(u,m)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,Z())).next(u=>({batchId:a,changes:LT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=qr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=qr();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const c=function(l,u){return new $o(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Oe.newInvalidDocument(l)))});let o=qr();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&ii(l.mutation,c,Dn.empty(),Xe.now()),eu(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Oe.newInvalidDocument(n))}}/**
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
 */class hk{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ti(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:sk(r.bundledQuery),readTime:Ti(r.readTime)}}(n)),_.resolve()}}/**
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
 */class fk{constructor(){this.overlays=new Ae(B.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=xn(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=xn(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=xn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rk(n,r));let s=this.Xn.get(n);s===void 0&&(s=Z(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class ru{constructor(){this.Zn=new _e(Te.ts),this.es=new _e(Te.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Te(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Te(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new B(new de([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new B(new de([])),r=new Te(n,e),i=new Te(n,e+1);let s=Z();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return B.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||B.comparator(e.key,n.key)}}/**
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
 */class dk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new _e(Te.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ne);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),_.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Te(new B(s),0);let a=new _e(ne);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return _.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Te(n,0),i=this.ds.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class mk{constructor(e){this.ps=e,this.docs=new Ae(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=pn();const s=new B(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||rT(nT(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){W()}Is(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pk(this)}getSize(e){return _.resolve(this.size)}}class pk extends ck{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class gk{constructor(e){this.persistence=e,this.Ts=new Pr(n=>Ql(n),Jl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Es=0,this.As=new ru,this.targetCount=0,this.Rs=Er.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Er(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
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
 */class vk{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Yl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new gk(this),this.indexManager=new ok,this.remoteDocumentCache=function(r){return new mk(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new ik(n),this.Ds=new hk(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new dk(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new yk(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return _.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class yk extends sT{constructor(e){super(),this.currentSequenceNumber=e}}class iu{constructor(e){this.persistence=e,this.ks=new ru,this.Ms=null}static Os(e){return new iu(e)}get Fs(){if(this.Ms)return this.Ms;throw W()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,r=>{const i=B.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class su{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new su(e,n.fromCache,r,i)}}/**
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
 */class bk{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(vf(n))return _.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ic(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,Ic(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,r,i){return vf(n)||i.isEqual(Y.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(af()<=te.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tc(n)),this.Oi(e,o,n,tT(i,-1)))})}ki(e,n){let r=new _e(hg(e));return n.forEach((i,s)=>{eu(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return af()<=te.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Tc(n)),this.Di.getDocumentsMatchingQuery(e,n,dn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class wk{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Ae(ne),this.Bi=new Pr(s=>Ql(s),Jl),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uk(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function _k(t,e,n,r){return new wk(t,e,n,r)}async function Cg(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Z();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function Ag(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Ek(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const m=i.get(h);if(!m)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let p=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Pe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(E,D,I){return E.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let c=pn(),l=Z();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Ik(s,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!r.isEqual(Y.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.$i=i,s))}function Ik(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=pn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function Tk(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Mn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Ac(t,e,n){const r=ee(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Sf(t,e,n){const r=ee(t);let i=Y.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Bi.get(l);return h!==void 0?_.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(r,o,qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:Z())).next(a=>(kk(r,TT(e),a),{documents:a,ji:s})))}function kk(t,e,n){let r=Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Cf{constructor(){this.activeTargetIds=wg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sk{constructor(){this.Fr=new Cf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ck{Br(e){}shutdown(){}}/**
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
 */class Af{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ak={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class xk{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class Ok extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);L("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw cf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=Ak[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new qI;a.listenOnce(jI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ea.NO_ERROR:const l=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Ea.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new V(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(h.status);o(new V(m,h.message))}else o(new V(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(A.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=BI(),o=VI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HI({})),this.uo(a.initMessageHeaders,n,r),Em()||Tm()||Dw()||km()||Pw()||Im()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");L("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const m=new xk({jr:E=>{h?L("Connection","Not sending because WebChannel is closed:",E):(u||(L("Connection","Opening WebChannel transport."),l.open(),u=!0),L("Connection","WebChannel sending:",E),l.send(E))},Wr:()=>l.close()}),p=(E,D,I)=>{E.listen(D,v=>{try{I(v)}catch(C){setTimeout(()=>{throw C},0)}})};return p(l,rs.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),p(l,rs.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),m.eo())}),p(l,rs.EventType.ERROR,E=>{h||(h=!0,cf("Connection","WebChannel transport errored:",E),m.eo(new V(A.UNAVAILABLE,"The operation could not be completed")))}),p(l,rs.EventType.MESSAGE,E=>{var D;if(!h){const I=E.data[0];be(!!I);const v=I,C=v.error||((D=v[0])===null||D===void 0?void 0:D.error);if(C){L("Connection","WebChannel received error:",C);const N=C.status;let M=function(ce){const ge=ve[ce];if(ge!==void 0)return vg(ge)}(N),G=C.message;M===void 0&&(M=A.INTERNAL,G="Unknown error status: "+N+" with message "+C.message),h=!0,m.eo(new V(M,G)),l.close()}else L("Connection","WebChannel received:",I),m.no(I)}}),p(o,zI.STAT_EVENT,E=>{E.stat===sf.PROXY?L("Connection","Detected buffering proxy"):E.stat===sf.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function ka(){return typeof document<"u"?document:null}/**
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
 */function xg(t){return new jT(t,!0)}class Og{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Rk{constructor(e,n,r,i,s,o,a,c){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Og(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Ht(n.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new V(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nk extends Rk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=WT(this.wt,e),r=function(i){if(!("targetChange"in i))return Y.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?Ti(s.readTime):Y.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=kf(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=Ec(a)?{documents:GT(i,a)}:{query:YT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=HT(i,s.resumeToken):s.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=zT(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=QT(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=kf(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class Dk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(A.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(A.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class Pk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ht(n),this.su=!1):L("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Mk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Hi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.lu.add(4),await zi(c),c._u.set("Unknown"),c.lu.delete(4),await Ho(c)}(this))})}),this._u=new Pk(r,i)}}async function Ho(t){if(Hi(t))for(const e of t.fu)await e(!0)}async function zi(t){for(const e of t.fu)await e(!1)}function Rg(t,e){const n=ee(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),cu(n)?au(n):Mr(n).Co()&&ou(n,e))}function Ng(t,e){const n=ee(t),r=Mr(n);n.hu.delete(e),r.Co()&&Dg(n,e),n.hu.size===0&&(r.Co()?r.ko():Hi(n)&&n._u.set("Unknown"))}function ou(t,e){t.wu.Nt(e.targetId),Mr(t).Qo(e)}function Dg(t,e){t.wu.Nt(e),Mr(t).jo(e)}function au(t){t.wu=new $T({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Mr(t).start(),t._u.iu()}function cu(t){return Hi(t)&&!Mr(t).Do()&&t.hu.size>0}function Hi(t){return ee(t).lu.size===0}function Pg(t){t.wu=void 0}async function Lk(t){t.hu.forEach((e,n)=>{ou(t,e)})}async function Fk(t,e){Pg(t),cu(t)?(t._u.uu(e),au(t)):t._u.set("Unknown")}async function Uk(t,e,n){if(t._u.set("Online"),e instanceof Eg&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xf(t,r)}else if(e instanceof bs?t.wu.Ut(e):e instanceof _g?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Y.min()))try{const r=await Ag(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(Pe.EMPTY_BYTE_STRING,c.snapshotVersion)),Dg(i,a);const l=new Mn(c.target,a,1,c.sequenceNumber);ou(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await xf(t,r)}}async function xf(t,e,n){if(!Vi(e))throw e;t.lu.add(1),await zi(t),t._u.set("Offline"),n||(n=()=>Ag(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Ho(t)})}async function Of(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Hi(n);n.lu.add(3),await zi(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Ho(n)}async function $k(t,e){const n=ee(t);e?(n.lu.delete(2),await Ho(n)):e||(n.lu.add(2),await zi(n),n._u.set("Unknown"))}function Mr(t){return t.mu||(t.mu=function(e,n,r){const i=ee(e);return i.tu(),new Nk(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:Lk.bind(null,t),Jr:Fk.bind(null,t),Go:Uk.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),cu(t)?au(t):t._u.set("Unknown")):(await t.mu.stop(),Pg(t))})),t.mu}/**
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
 */class lu{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lu(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mg(t,e){if(Ht("AsyncQueue",`${e}: ${t}`),Vi(t))return new V(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class dr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=qr(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof dr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Rf{constructor(){this.yu=new Ae(B.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):W():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ir{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ir(e,n,dr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Bk{constructor(){this.Iu=void 0,this.listeners=[]}}class Vk{constructor(){this.queries=new Pr(e=>ug(e),Bo),this.onlineState="Unknown",this.Tu=new Set}}async function Lg(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bk),i)try{s.Iu=await n.onListen(r)}catch(o){const a=Mg(o,`Initialization of query '${Tc(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&uu(n)}async function Fg(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jk(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&uu(n)}function zk(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function uu(t){t.Tu.forEach(e=>{e.next()})}class Ug{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ir(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class $g{constructor(e){this.key=e}}class Bg{constructor(e){this.key=e}}class Hk{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Z(),this.mutatedKeys=Z(),this.Lu=hg(e),this.Uu=new dr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Rf,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const m=i.get(u),p=eu(this.query,h)?h:null,E=!!m&&this.mutatedKeys.has(m.key),D=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;m&&p?m.data.isEqual(p.data)?E!==D&&(r.track({type:3,doc:p}),I=!0):this.Qu(m,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.Lu(p,c)>0||l&&this.Lu(p,l)<0)&&(a=!0)):!m&&p?(r.track({type:0,doc:p}),I=!0):m&&!p&&(r.track({type:1,doc:m}),I=!0,(c||l)&&(a=!0)),I&&(p?(o=o.add(p),s=D?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((l,u)=>function(h,m){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return p(h)-p(m)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,s.length!==0||c?{snapshot:new Ir(this.query,e.Uu,i,s,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Rf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Z(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new Bg(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new $g(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Z();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Ir.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class qk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Kk{constructor(e){this.key=e,this.Xu=!1}}class Wk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Pr(a=>ug(a),Bo),this.ec=new Map,this.nc=new Set,this.sc=new Ae(B.comparator),this.ic=new Map,this.rc=new ru,this.oc={},this.uc=new Map,this.cc=Er.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Gk(t,e){const n=tS(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await Tk(n.localStore,qt(e));n.isPrimaryClient&&Rg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Yk(n,e,r,a==="current")}return i}async function Yk(t,e,n,r){t.hc=(u,h,m)=>async function(p,E,D,I){let v=E.view.Ku(D);v.Mi&&(v=await Sf(p.localStore,E.query,!1).then(({documents:M})=>E.view.Ku(M,v)));const C=I&&I.targetChanges.get(E.targetId),N=E.view.applyChanges(v,p.isPrimaryClient,C);return Df(p,E.targetId,N.zu),N.snapshot}(t,u,h,m);const i=await Sf(t.localStore,e,!0),s=new Hk(e,i.ji),o=s.Ku(i.documents),a=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Df(t,n,c.zu);const l=new qk(e,n,s);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Xk(t,e){const n=ee(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Bo(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ac(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ng(n.remoteStore,r.targetId),xc(n,r.targetId)}).catch(Gl)):(xc(n,r.targetId),await Ac(n.localStore,r.targetId,!0))}async function Vg(t,e){const n=ee(t);try{const r=await Ek(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?be(o.Xu):i.removedDocuments.size>0&&(be(o.Xu),o.Xu=!1))}),await zg(n,r,e)}catch(r){await Gl(r)}}function Nf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&uu(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qk(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Ae(B.comparator);o=o.insert(s,Oe.newNoDocument(s,Y.min()));const a=Z().add(s),c=new zo(Y.min(),new Map,new _e(ne),o,a);await Vg(r,c),r.sc=r.sc.remove(s),r.ic.delete(e),hu(r)}else await Ac(r.localStore,e,!1).then(()=>xc(r,e,n)).catch(Gl)}function xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||jg(t,r)})}function jg(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ng(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),hu(t))}function Df(t,e,n){for(const r of n)r instanceof $g?(t.rc.addReference(r.key,e),Jk(t,r)):r instanceof Bg?(L("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||jg(t,r.key)):W()}function Jk(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(L("SyncEngine","New document in limbo: "+n),t.nc.add(r),hu(t))}function hu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new B(de.fromString(e)),r=t.cc.next();t.ic.set(r,new Kk(n)),t.sc=t.sc.insert(n,r),Rg(t.remoteStore,new Mn(qt(Zl(n.path)),r,2,Yl.ot))}}async function zg(t,e,n){const r=ee(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=su.Vi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(c,h=>_.forEach(h.Pi,m=>l.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>_.forEach(h.vi,m=>l.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!Vi(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const m=l.$i.get(h),p=m.snapshotVersion,E=m.withLastLimboFreeSnapshotVersion(p);l.$i=l.$i.insert(h,E)}}}(r.localStore,s))}async function Zk(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Cg(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new V(A.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zg(n,r.Ki)}}function eS(t,e){const n=ee(t),r=n.ic.get(e);if(r&&r.Xu)return Z().add(r.key);{let i=Z();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function tS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qk.bind(null,e),e.Zu.Go=jk.bind(null,e.eventManager),e.Zu.lc=zk.bind(null,e.eventManager),e}class nS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=xg(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return _k(this.persistence,new bk,e.initialUser,this.wt)}_c(e){return new vk(iu.Os,this.wt)}dc(e){return new Sk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zk.bind(null,this.syncEngine),await $k(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vk}createDatastore(e){const n=xg(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Ok(i));var i;return function(s,o,a,c){return new Dk(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Nf(this.syncEngine,a,0),o=Af.V()?new Af:new Ck,new Mk(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new Wk(r,i,s,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);L("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await zi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class Hg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iS{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=og.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sS(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Cg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function oS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aS(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Of(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Of(e.remoteStore,s)),t.onlineComponents=e}async function aS(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await sS(t,new nS)),t.offlineComponents}async function cS(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await oS(t,new rS)),t.onlineComponents}async function qg(t){const e=await cS(t),n=e.eventManager;return n.onListen=Gk.bind(null,e.syncEngine),n.onUnlisten=Xk.bind(null,e.syncEngine),n}function lS(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Hg({next:h=>{s.enqueueAndForget(()=>Fg(i,u));const m=h.docs.has(o);!m&&h.fromCache?c.reject(new V(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&a&&a.source==="server"?c.reject(new V(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ug(Zl(o.path),l,{includeMetadataChanges:!0,Du:!0});return Lg(i,u)}(await qg(t),t.asyncQueue,e,n,r)),r.promise}function uS(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Hg({next:h=>{s.enqueueAndForget(()=>Fg(i,u)),h.fromCache&&a.source==="server"?c.reject(new V(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Ug(o,l,{includeMetadataChanges:!0,Du:!0});return Lg(i,u)}(await qg(t),t.asyncQueue,e,n,r)),r.promise}const Pf=new Map;/**
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
 */function Kg(t,e,n){if(!n)throw new V(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hS(t,e,n,r){if(e===!0&&r===!0)throw new V(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mf(t){if(!B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(B.isDocumentKey(t))throw new V(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Js(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fS(t);throw new V(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1,e instanceof wr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new V(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(i.options.projectId)}(e))}get app(){if(!this._app)throw new V(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new WI;switch(n.type){case"gapi":const r=n.client;return be(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new XI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new V(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pf.get(e);n&&(L("ComponentProvider","Removing Datastore"),Pf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class qo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class cn extends qo{constructor(e,n,r){super(e,n,Zl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new B(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function Wg(t,e,...n){if(t=Kn(t),Kg("collection","path",e),t instanceof fu){const r=de.fromString(e,...n);return Lf(r),new cn(t,null,r)}{if(!(t instanceof St||t instanceof cn))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Lf(r),new cn(t.firestore,null,r)}}function dS(t,e,...n){if(t=Kn(t),arguments.length===1&&(e=og.I()),Kg("doc","path",e),t instanceof fu){const r=de.fromString(e,...n);return Mf(r),new St(t,null,new B(r))}{if(!(t instanceof St||t instanceof cn))throw new V(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Mf(r),new St(t.firestore,t instanceof cn?t.converter:null,new B(r))}}/**
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
 */class mS{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Og(this,"async_queue_retry"),this.Kc=()=>{const n=ka();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ka();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new an;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Vi(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=lu.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&W()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class du extends fu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new mS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yg(this),this._firestoreClient.terminate()}}function pS(t=dl()){return bo(t,"firestore").getImmediate()}function Gg(t){return t._firestoreClient||Yg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yg(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new cT(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new iS(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Xg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(Pe.fromBase64String(e))}catch(n){throw new V(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const vS=new RegExp("[~\\*/\\[\\]]");function yS(t,e,n){if(e.search(vS)>=0)throw Uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xg(...e.split("."))._internalPath}catch{throw Uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new V(A.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Qg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bS extends Qg{data(){return super.data()}}function Jg(t,e){return typeof e=="string"?yS(t,e):e instanceof Xg?e._internalPath:e._delegate._internalPath}/**
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
 */class Kr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zg extends Qg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ws extends Zg{data(e={}){return super.data(e)}}class wS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Kr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ws(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ws(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Kr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ws(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Kr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:_S(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _S(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function ES(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class IS{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){const r={};return Fo(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gS(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const n=mn(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);be(Sg(r));const i=new wr(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Ht(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function TS(t){t=Js(t,St);const e=Js(t.firestore,du);return lS(Gg(e),t._key).then(n=>kS(e,t,n))}class ev extends IS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function tv(t){t=Js(t,qo);const e=Js(t.firestore,du),n=Gg(e),r=new ev(e);return ES(t._query),uS(n,t._query).then(i=>new wS(e,r,t,i))}function kS(t,e,n){const r=n.docs.get(e._key),i=new ev(t);return new Zg(t,i,e._key,r,new Kr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Dr=n})(xr),$n(new fn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new du(i,new GI(n.getProvider("auth-internal")),new JI(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),It(of,"3.4.14",t),It(of,"3.4.14","esm2017")})();/**
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
 */const nv="firebasestorage.googleapis.com",SS="storageBucket",CS=2*60*1e3,AS=10*60*1e3;/**
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
 */class Rt extends Ot{constructor(e,n){super(Sa(e),`Firebase Storage: ${n} (${Sa(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rt.prototype)}_codeEquals(e){return Sa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Sa(t){return"storage/"+t}function xS(){const t="An unknown error occurred, please check the error payload for server response.";return new Rt("unknown",t)}function OS(){return new Rt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function RS(){return new Rt("canceled","User canceled the upload/download.")}function NS(t){return new Rt("invalid-url","Invalid URL '"+t+"'.")}function DS(t){return new Rt("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function $f(t){return new Rt("invalid-argument",t)}function rv(){return new Rt("app-deleted","The Firebase app was deleted.")}function PS(t){return new Rt("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=lt.makeFromUrl(e,n)}catch{return new lt(e,"")}if(r.path==="")return r;throw DS(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(M){M.path_=decodeURIComponent(M.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${m}`,"i"),E={bucket:1,path:3},D=n===nv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",v=new RegExp(`^https?://${D}/${i}/${I}`,"i"),N=[{regex:a,indices:c,postModify:s},{regex:p,indices:E,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let M=0;M<N.length;M++){const G=N[M],ce=G.regex.exec(e);if(ce){const ge=ce[G.indices.bucket];let Le=ce[G.indices.path];Le||(Le=""),r=new lt(ge,Le),G.postModify(r);break}}if(r==null)throw NS(e);return r}}class MS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LS(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(p,c())},I)}function m(){s&&clearTimeout(s)}function p(I,...v){if(l){m();return}if(I){m(),u.call(null,I,...v);return}if(c()||o){m(),u.call(null,I,...v);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let E=!1;function D(I){E||(E=!0,m(),!l&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function FS(t){t(!1)}/**
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
 */function US(t){return t!==void 0}function Bf(t,e,n,r){if(r<e)throw $f(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $f(`Invalid value for '${t}'. Expected ${n} or less.`)}function $S(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var eo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(eo||(eo={}));/**
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
 */class BS{constructor(e,n,r,i,s,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,p)=>{this.resolve_=m,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new os(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===eo.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=s.getErrorCode()===eo.ABORT;r(!1,new os(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new os(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());US(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=xS();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?rv():RS();o(c)}else{const c=OS();o(c)}};this.canceled_?n(!1,new os(!1,null,!0)):this.backoffId_=LS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class os{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function zS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qS(t,e,n,r,i,s){const o=$S(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return zS(c,e),VS(c,n),jS(c,s),HS(c,r),new BS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
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
 */function KS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class to{constructor(e,n){this._service=e,n instanceof lt?this._location=n:this._location=lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new to(e,n)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WS(this._location.path)}get storage(){return this._service}get parent(){const e=KS(this._location.path);if(e===null)return null;const n=new lt(this._location.bucket,e);return new to(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PS(e)}}function Vf(t,e){const n=e==null?void 0:e[SS];return n==null?null:lt.makeFromBucketSpec(n,t)}class GS{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CS,this._maxUploadRetryTime=AS,this._requests=new Set,i!=null?this._bucket=lt.makeFromBucketSpec(i,this._host):this._bucket=Vf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=Vf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new to(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new MS(rv());{const s=qS(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jf="@firebase/storage",zf="0.9.9";/**
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
 */const iv="storage";function YS(t=dl(),e){return t=Kn(t),bo(t,iv).getImmediate({identifier:e})}function XS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new GS(n,r,i,e,xr)}function QS(){$n(new fn(iv,XS,"PUBLIC").setMultipleInstances(!0)),It(jf,zf,""),It(jf,zf,"esm2017")}QS();const JS={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},sv="tAD6hG0KxDMM1OiiRmfhRgXyY1d2",mu=B_(JS),Hf=$E(mu),pu=pS(mu);YS(mu);const yn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},ZS={components:{FontAwesomeIcon:ul},data(){return{buttonLabel:"login",user:null,token:null,isLoggedIn:!1}},methods:{login(){J1(Hf,new yt).then(t=>{const e=yt.credentialFromResult(t);this.token=e.accessToken,this.user=t.user}).catch(t=>{console.log(t.message),alert(t.message)})},logout(){confirm("Are you sure you want to logout?")&&this.authLogout()},async authLogout(){try{await Hf.signOut(),this.isLoggedIn=!1,this.user=null,this.token=null,console.log("logged out successfully")}catch(t){console.log(t.message)}}},watch:{user(t){t&&t.email!=="xmliszt@gmail.com"?this.authLogout().then(()=>{alert("You are not recognised as the owner of this page."),this.isLoggedIn=!1}).catch(e=>{console.log(e.message)}):t&&(this.isLoggedIn=!0,t&&TS(dS(pu,"v2",t.uid)).then(e=>{e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(e=>{console.log("Error getting document:",e)}))}}};function eC(t,e,n,r,i,s){const o=_t("FontAwesomeIcon");return rt(),ft("div",null,[i.isLoggedIn?(rt(),ft("button",{key:1,class:"icon-button hover-effect",onClick:e[1]||(e[1]=(...a)=>s.logout&&s.logout(...a))},[me(o,{icon:"fa-solid fa-arrow-up-right-from-square"})])):(rt(),ft("button",{key:0,class:"icon-button hover-effect",onClick:e[0]||(e[0]=(...a)=>s.login&&s.login(...a))},[me(o,{icon:"fa-solid fa-arrow-right-to-bracket"})]))])}const tC=yn(ZS,[["render",eC]]),nC="/staging/assets/avatar.42f08a86.jpeg";const rC={data(){return{imgUrl:nC,imgAlt:"No Image"}}},iC={class:"avatar drop-shadow-light morph-hover-effect"},sC=["src","alt"];function oC(t,e,n,r,i,s){return rt(),ft("div",iC,[re("img",{src:i.imgUrl,alt:i.imgAlt},null,8,sC)])}const aC=yn(rC,[["render",oC],["__scopeId","data-v-318b29b9"]]);const cC={components:{FishAvatar:aC,FontAwesomeIcon:ul},data(){return{scrollingEnable:!0,scrollingEnableClass:"scrolling-enable",scrollingDisableClass:"scrolling-disable"}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){t+e>=n&&(this.scrollingEnable=!1)},enableScroll(){this.scrollingEnable=!0}}},Ko=t=>(yd("data-v-0e3db07e"),t=t(),bd(),t),lC=Ko(()=>re("div",{class:"parallax-background"},[re("div",null,[re("h1",null,"Hi! I'm Li Yuxuan. Nice to meet you! \u{1F64C}\u{1F3FB}")])],-1)),uC={class:"parallax-fixed"},hC={class:"parallax-base"},fC=Ko(()=>re("div",{class:"header-mountain"},null,-1)),dC={class:"keep-scrolling"},mC=Ko(()=>re("div",null,"Keep Scrolling",-1)),pC=Ko(()=>re("div",{class:"background"},null,-1));function gC(t,e,n,r,i,s){const o=_t("FishAvatar"),a=_t("FontAwesomeIcon");return rt(),ft("div",{class:Tr(["parallax",[i.scrollingEnable?i.scrollingEnableClass:i.scrollingDisableClass]]),ref:"parallax",onScroll:e[0]||(e[0]=(...c)=>this.handleScroll&&this.handleScroll(...c))},[lC,re("div",uC,[re("div",null,[me(o,{ref:"avatarView"},null,512)])]),re("div",hC,[re("div",null,[fC,re("div",dC,[me(a,{icon:"fa-solid fa-angles-down"}),mC]),pC])])],34)}const vC=yn(cC,[["render",gC],["__scopeId","data-v-0e3db07e"]]);async function yC(){return new Promise((t,e)=>{tv(Wg(pu,"v2",sv,"taglines")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const bC={props:{label:String}},wC={class:"fish-tag"};function _C(t,e,n,r,i,s){return rt(),ft("div",wC,_s(n.label.toUpperCase()),1)}const EC=yn(bC,[["render",_C],["__scopeId","data-v-ba16cd5c"]]);function IC(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const TC={props:["skills"],emits:["onSentenceChanged","onWaitingForNextSentence","onStartTypingNextSentence"],data(){return{typingDelayMin:10,typingDelayMax:150,erasingDelay:20,newSentenceDelay:3e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",typedOutText:"",displayedTag:""}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} using ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.$emit("onStartTypingNextSentence");let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.$emit("onSentenceChanged",t),this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,IC(this.typingDelayMin,this.typingDelayMax))):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.$emit("onWaitingForNextSentence"),setTimeout(this.startTyping,this.typingDelayMax+1100))}},created(){this.skills.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)},watch:{skills:{immediate:!0,handler(t){t.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)}}}},kC={class:"typewriter drop-shadow-dark"},SC=Fd(" I "),CC={class:"typed-text"};function AC(t,e,n,r,i,s){return rt(),ft("div",kC,[re("p",null,[SC,re("span",CC,_s(this.typedOutText),1),re("span",{class:Tr(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])])}const xC=yn(TC,[["render",AC],["__scopeId","data-v-48dddbbe"]]);const OC={components:{FishTag:EC,FishTypeWriter:xC},created(){this._getTaglines()},data(){return{displayedTag:"",isWaiting:!1,tagShowClass:"show",tagHideClass:"hide",skills:[]}},methods:{onTypeWriterSentenceChanged(t){this.displayedTag=t.category},async _getTaglines(){try{this.skills=await yC()}catch(t){alert(t.message)}}}},RC={class:"skills-overview"};function NC(t,e,n,r,i,s){const o=_t("FishTypeWriter"),a=_t("FishTag");return rt(),ft("div",RC,[me(o,{class:"typewriter",skills:i.skills,onOnSentenceChanged:s.onTypeWriterSentenceChanged,onOnStartTypingNextSentence:e[0]||(e[0]=c=>this.isWaiting=!1),onOnWaitingForNextSentence:e[1]||(e[1]=c=>this.isWaiting=!0)},null,8,["skills","onOnSentenceChanged"]),me(a,{class:Tr(["fish-tag drop-shadow-dark",[i.isWaiting?i.tagHideClass:i.tagShowClass]]),label:i.displayedTag},null,8,["class","label"])])}const DC=yn(OC,[["render",NC],["__scopeId","data-v-001c9bbc"]]);const PC={components:{FontAwesomeIcon:ul},props:["project"],data(){return{interactionRemovalDelay:2e3}},methods:{setBackgroundStyles(){return{background:`url(${this.project.imgUrl}) no-repeat center center`,position:"absolute",top:0,left:0,"background-size":"cover",width:"100%",height:"100%",overflow:"hidden",opacity:.7,filter:"blur(0px)","-webkit-filter":"blur(0px)",transition:"all 0.5s","pointer-events":"none"}},directTo(){window.open(this.project.link,"__blank")},interact(){this.$refs.fishCard.classList.add("interaction"),setTimeout(()=>{this.$refs.fishCard.classList.remove("interaction")},this.interactionRemovalDelay)}}},MC=t=>(yd("data-v-c7a983cb"),t=t(),bd(),t),LC=MC(()=>re("div",{class:"glow"},null,-1)),FC={class:"fish-card-overlay"},UC={class:"title"},$C={class:"details"},BC={class:"circle"},VC={class:"plus"};function jC(t,e,n,r,i,s){const o=_t("FontAwesomeIcon");return rt(),ft("div",{ref:"fishCard",class:"fish-card",onClick:e[1]||(e[1]=(...a)=>s.directTo&&s.directTo(...a))},[re("div",{class:"fish-card-bg",style:ki(s.setBackgroundStyles())},null,4),LC,re("div",FC,[re("span",UC,_s(n.project.title),1),re("span",$C,_s(n.project.details),1)]),re("div",{class:"fish-card-expand hover-effect",onClick:e[0]||(e[0]=(...a)=>s.directTo&&s.directTo(...a))},[re("div",BC,[me(o,{icon:"fa-regular fa-circle"})]),re("div",VC,[me(o,{icon:"fa-solid fa-plus"})])])],512)}const zC=yn(PC,[["render",jC],["__scopeId","data-v-c7a983cb"]]);async function HC(){return new Promise((t,e)=>{tv(Wg(pu,"v2",sv,"projects")).then(n=>{const r=[];n.docs.map(i=>{r.push(i.data())}),t(r)}).catch(n=>{e(n)})})}const qC={components:{AuthButton:tC,ParallaxView:vC,SkillsOverview:DC,FishCard:zC},data(){return{authBtnOpacity:1,authBtnHidden:!1,projects:[]}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){this.authBtnOpacity=1-t/(n-e),this.authBtnHidden=t+e>=n},handleMainScroll(){window.scrollY===0&&this.$refs.parallaxView.enableScroll()},async loadProjects(){try{this.projects=await HC()}catch(t){alert(t.message)}}},created(){this.loadProjects()},mounted(){document.addEventListener("scroll",this.handleMainScroll)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll)}},KC={id:"login"},WC={id:"skills"},GC={id:"projects"};function YC(t,e,n,r,i,s){const o=_t("ParallaxView"),a=_t("AuthButton"),c=_t("SkillsOverview"),l=_t("FishCard");return rt(),ft("main",null,[me(o,{ref:"parallaxView",onScroll:this.handleScroll},null,8,["onScroll"]),re("div",KC,[me(a,{ref:"authBtn",style:ki({opacity:i.authBtnOpacity}),hidden:i.authBtnHidden},null,8,["style","hidden"])]),re("section",WC,[me(c)]),re("section",GC,[re("div",null,[(rt(!0),ft(gt,null,Ry(i.projects,(u,h)=>(rt(),Xy(l,{class:"fish-card",key:h,project:u},null,8,["project"]))),128))])])])}const XC=yn(qC,[["render",YC]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var QC={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},JC={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},ZC={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]},eA={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var tA={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};dw.add(JC,ZC,QC,tA,eA);R0(XC).mount("#app");
