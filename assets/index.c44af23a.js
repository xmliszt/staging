(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pg=bl(Rg);function Af(t){return!!t||t===""}function wi(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Se(r)?Fg(r):wi(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Se(t))return t;if(Ee(t))return t}}const Mg=/;(?![^(]*\))/g,Lg=/:(.+)/;function Fg(t){const e={};return t.split(Mg).forEach(n=>{if(n){const r=n.split(Lg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function wr(t){let e="";if(Se(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=wr(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gs=t=>Se(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===Of||!q(t.toString))?JSON.stringify(t,kf,2):String(t),kf=(t,e)=>e&&e.__v_isRef?kf(t,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Cf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!K(e)&&!Nf(e)?String(e):e,ae={},tr=[],ct=()=>{},Ug=()=>!1,$g=/^on[^a-z]/,Gs=t=>$g.test(t),wl=t=>t.startsWith("onUpdate:"),je=Object.assign,_l=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vg=Object.prototype.hasOwnProperty,X=(t,e)=>Vg.call(t,e),K=Array.isArray,nr=t=>Ys(t)==="[object Map]",Cf=t=>Ys(t)==="[object Set]",q=t=>typeof t=="function",Se=t=>typeof t=="string",El=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",xf=t=>Ee(t)&&q(t.then)&&q(t.catch),Of=Object.prototype.toString,Ys=t=>Of.call(t),Bg=t=>Ys(t).slice(8,-1),Nf=t=>Ys(t)==="[object Object]",Il=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jg=/-(\w)/g,Tt=Xs(t=>t.replace(jg,(e,n)=>n?n.toUpperCase():"")),zg=/\B([A-Z])/g,_r=Xs(t=>t.replace(zg,"-$1").toLowerCase()),Qs=Xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bo=Xs(t=>t?`on${Qs(t)}`:""),vs=(t,e)=>!Object.is(t,e),jo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ys=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lu;const Kg=()=>lu||(lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mt;class qg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mt&&(this.parent=mt,this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Wg(t,e=mt){e&&e.active&&e.effects.push(t)}const Tl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Df=t=>(t.w&sn)>0,Rf=t=>(t.n&sn)>0,Gg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},Yg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Df(i)&&!Rf(i)?i.delete(t):e[n++]=i,i.w&=~sn,i.n&=~sn}e.length=n}},ga=new WeakMap;let Lr=0,sn=1;const va=30;let st;const Sn=Symbol(""),ya=Symbol("");class Sl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Wg(this,r)}run(){if(!this.active)return this.fn();let e=st,n=en;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=st,st=this,en=!0,sn=1<<++Lr,Lr<=va?Gg(this):cu(this),this.fn()}finally{Lr<=va&&Yg(this),sn=1<<--Lr,st=this.parent,en=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){st===this?this.deferStop=!0:this.active&&(cu(this),this.onStop&&this.onStop(),this.active=!1)}}function cu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let en=!0;const Pf=[];function Er(){Pf.push(en),en=!1}function Ir(){const t=Pf.pop();en=t===void 0?!0:t}function Je(t,e,n){if(en&&st){let r=ga.get(t);r||ga.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Tl()),Mf(i)}}function Mf(t,e){let n=!1;Lr<=va?Rf(t)||(t.n|=sn,n=!Df(t)):n=!t.has(st),n&&(t.add(st),st.deps.push(t))}function Pt(t,e,n,r,i,s){const o=ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Il(n)&&a.push(o.get("length")):(a.push(o.get(Sn)),nr(t)&&a.push(o.get(ya)));break;case"delete":K(t)||(a.push(o.get(Sn)),nr(t)&&a.push(o.get(ya)));break;case"set":nr(t)&&a.push(o.get(Sn));break}if(a.length===1)a[0]&&ba(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ba(Tl(l))}}function ba(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&uu(r);for(const r of n)r.computed||uu(r)}function uu(t,e){(t!==st||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Xg=bl("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(El)),Qg=Al(),Jg=Al(!1,!0),Zg=Al(!0),hu=ev();function ev(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let s=0,o=this.length;s<o;s++)Je(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Er();const r=ie(this)[e].apply(this,n);return Ir(),r}}),t}function Al(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?gv:Bf:e?Vf:$f).get(r))return r;const o=K(r);if(!t&&o&&X(hu,i))return Reflect.get(hu,i,s);const a=Reflect.get(r,i,s);return(El(i)?Lf.has(i):Xg(i))||(t||Je(r,"get",i),e)?a:Ve(a)?o&&Il(i)?a:a.value:Ee(a)?t?jf(a):xl(a):a}}const tv=Ff(),nv=Ff(!0);function Ff(t=!1){return function(n,r,i,s){let o=n[r];if(ei(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&!ei(i)&&(wa(i)||(i=ie(i),o=ie(o)),!K(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=K(n)&&Il(r)?Number(r)<n.length:X(n,r),l=Reflect.set(n,r,i,s);return n===ie(s)&&(a?vs(i,o)&&Pt(n,"set",r,i):Pt(n,"add",r,i)),l}}function rv(t,e){const n=X(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Pt(t,"delete",e,void 0),r}function iv(t,e){const n=Reflect.has(t,e);return(!El(e)||!Lf.has(e))&&Je(t,"has",e),n}function sv(t){return Je(t,"iterate",K(t)?"length":Sn),Reflect.ownKeys(t)}const Uf={get:Qg,set:tv,deleteProperty:rv,has:iv,ownKeys:sv},ov={get:Zg,set(t,e){return!0},deleteProperty(t,e){return!0}},av=je({},Uf,{get:Jg,set:nv}),kl=t=>t,Js=t=>Reflect.getPrototypeOf(t);function Hi(t,e,n=!1,r=!1){t=t.__v_raw;const i=ie(t),s=ie(e);n||(e!==s&&Je(i,"get",e),Je(i,"get",s));const{has:o}=Js(i),a=r?kl:n?Dl:Nl;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ki(t,e=!1){const n=this.__v_raw,r=ie(n),i=ie(t);return e||(t!==i&&Je(r,"has",t),Je(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function qi(t,e=!1){return t=t.__v_raw,!e&&Je(ie(t),"iterate",Sn),Reflect.get(t,"size",t)}function fu(t){t=ie(t);const e=ie(this);return Js(e).has.call(e,t)||(e.add(t),Pt(e,"add",t,t)),this}function du(t,e){e=ie(e);const n=ie(this),{has:r,get:i}=Js(n);let s=r.call(n,t);s||(t=ie(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?vs(e,o)&&Pt(n,"set",t,e):Pt(n,"add",t,e),this}function mu(t){const e=ie(this),{has:n,get:r}=Js(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Pt(e,"delete",t,void 0),s}function pu(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Pt(t,"clear",void 0,void 0),n}function Wi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ie(o),l=e?kl:t?Dl:Nl;return!t&&Je(a,"iterate",Sn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Gi(t,e,n){return function(...r){const i=this.__v_raw,s=ie(i),o=nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?kl:e?Dl:Nl;return!e&&Je(s,"iterate",l?ya:Sn),{next(){const{value:h,done:m}=c.next();return m?{value:h,done:m}:{value:a?[u(h[0]),u(h[1])]:u(h),done:m}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function lv(){const t={get(s){return Hi(this,s)},get size(){return qi(this)},has:Ki,add:fu,set:du,delete:mu,clear:pu,forEach:Wi(!1,!1)},e={get(s){return Hi(this,s,!1,!0)},get size(){return qi(this)},has:Ki,add:fu,set:du,delete:mu,clear:pu,forEach:Wi(!1,!0)},n={get(s){return Hi(this,s,!0)},get size(){return qi(this,!0)},has(s){return Ki.call(this,s,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Wi(!0,!1)},r={get(s){return Hi(this,s,!0,!0)},get size(){return qi(this,!0)},has(s){return Ki.call(this,s,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Wi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Gi(s,!1,!1),n[s]=Gi(s,!0,!1),e[s]=Gi(s,!1,!0),r[s]=Gi(s,!0,!0)}),[t,n,e,r]}const[cv,uv,hv,fv]=lv();function Cl(t,e){const n=e?t?fv:hv:t?uv:cv;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(X(n,i)&&i in r?n:r,i,s)}const dv={get:Cl(!1,!1)},mv={get:Cl(!1,!0)},pv={get:Cl(!0,!1)},$f=new WeakMap,Vf=new WeakMap,Bf=new WeakMap,gv=new WeakMap;function vv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yv(t){return t.__v_skip||!Object.isExtensible(t)?0:vv(Bg(t))}function xl(t){return ei(t)?t:Ol(t,!1,Uf,dv,$f)}function bv(t){return Ol(t,!1,av,mv,Vf)}function jf(t){return Ol(t,!0,ov,pv,Bf)}function Ol(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=yv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function rr(t){return ei(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function wa(t){return!!(t&&t.__v_isShallow)}function zf(t){return rr(t)||ei(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Hf(t){return ys(t,"__v_skip",!0),t}const Nl=t=>Ee(t)?xl(t):t,Dl=t=>Ee(t)?jf(t):t;function wv(t){en&&st&&(t=ie(t),Mf(t.dep||(t.dep=Tl())))}function _v(t,e){t=ie(t),t.dep&&ba(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Ev(t){return Ve(t)?t.value:t}const Iv={get:(t,e,n)=>Ev(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Kf(t){return rr(t)?t:new Proxy(t,Iv)}class Tv{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Sl(e,()=>{this._dirty||(this._dirty=!0,_v(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ie(this);return wv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Sv(t,e,n=!1){let r,i;const s=q(t);return s?(r=t,i=ct):(r=t.get,i=t.set),new Tv(r,i,s||!i,n)}function tn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Zs(s,e,n)}return i}function ut(t,e,n,r){if(q(t)){const s=tn(t,e,n,r);return s&&xf(s)&&s.catch(o=>{Zs(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(ut(t[s],e,n,r));return i}function Zs(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){tn(l,null,10,[t,o,a]);return}}Av(t,n,i,r)}function Av(t,e,n,r=!0){console.error(t)}let bs=!1,_a=!1;const Qe=[];let xt=0;const Br=[];let Fr=null,Gn=0;const jr=[];let Yt=null,Yn=0;const qf=Promise.resolve();let Rl=null,Ea=null;function kv(t){const e=Rl||qf;return t?e.then(this?t.bind(this):t):e}function Cv(t){let e=xt+1,n=Qe.length;for(;e<n;){const r=e+n>>>1;ti(Qe[r])<t?e=r+1:n=r}return e}function Wf(t){(!Qe.length||!Qe.includes(t,bs&&t.allowRecurse?xt+1:xt))&&t!==Ea&&(t.id==null?Qe.push(t):Qe.splice(Cv(t.id),0,t),Gf())}function Gf(){!bs&&!_a&&(_a=!0,Rl=qf.then(Qf))}function xv(t){const e=Qe.indexOf(t);e>xt&&Qe.splice(e,1)}function Yf(t,e,n,r){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Gf()}function Ov(t){Yf(t,Fr,Br,Gn)}function Nv(t){Yf(t,Yt,jr,Yn)}function eo(t,e=null){if(Br.length){for(Ea=e,Fr=[...new Set(Br)],Br.length=0,Gn=0;Gn<Fr.length;Gn++)Fr[Gn]();Fr=null,Gn=0,Ea=null,eo(t,e)}}function Xf(t){if(eo(),jr.length){const e=[...new Set(jr)];if(jr.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>ti(n)-ti(r)),Yn=0;Yn<Yt.length;Yn++)Yt[Yn]();Yt=null,Yn=0}}const ti=t=>t.id==null?1/0:t.id;function Qf(t){_a=!1,bs=!0,eo(t),Qe.sort((n,r)=>ti(n)-ti(r));const e=ct;try{for(xt=0;xt<Qe.length;xt++){const n=Qe[xt];n&&n.active!==!1&&tn(n,null,14)}}finally{xt=0,Qe.length=0,Xf(),bs=!1,Rl=null,(Qe.length||Br.length||jr.length)&&Qf(t)}}function Dv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:m}=r[u]||ae;m&&(i=n.map(p=>p.trim())),h&&(i=n.map(Hg))}let a,l=r[a=Bo(e)]||r[a=Bo(Tt(e))];!l&&s&&(l=r[a=Bo(_r(e))]),l&&ut(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function Jf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Jf(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):je(o,s),r.set(t,o),o)}function to(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,_r(e))||X(t,e))}let bt=null,no=null;function ws(t){const e=bt;return bt=t,no=t&&t.type.__scopeId||null,e}function Zf(t){no=t}function ed(){no=null}function Rv(t,e=bt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Su(-1);const s=ws(e),o=t(...i);return ws(s),r._d&&Su(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function zo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:m,setupState:p,ctx:E,inheritAttrs:R}=t;let k,y;const A=ws(t);try{if(n.shapeFlag&4){const z=i||r;k=gt(u.call(z,z,h,s,p,m,E)),y=l}else{const z=e;k=gt(z.length>1?z(s,{attrs:l,slots:a,emit:c}):z(s,null)),y=e.props?l:Pv(l)}}catch(z){zr.length=0,Zs(z,t,1),k=fe(ni)}let M=k;if(y&&R!==!1){const z=Object.keys(y),{shapeFlag:Z}=M;z.length&&Z&7&&(o&&z.some(wl)&&(y=Mv(y,o)),M=cr(M,y))}return n.dirs&&(M=cr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),k=M,ws(A),k}const Pv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const r in t)(!wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const m=u[h];if(o[m]!==r[m]&&!to(c,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gu(r,o,c):!0:!!o;return!1}function gu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!to(n,s))return!0}return!1}function Fv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Uv=t=>t.__isSuspense;function $v(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Nv(t)}function Vv(t,e){if(Ne){let n=Ne.provides;const r=Ne.parent&&Ne.parent.provides;r===n&&(n=Ne.provides=Object.create(r)),n[t]=e}}function Ho(t,e,n=!1){const r=Ne||bt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(r.proxy):e}}const vu={};function is(t,e,n){return td(t,e,n)}function td(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ae){const a=Ne;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=wa(t)):rr(t)?(l=()=>t,r=!0):K(t)?(u=!0,c=t.some(y=>rr(y)||wa(y)),l=()=>t.map(y=>{if(Ve(y))return y.value;if(rr(y))return Xn(y);if(q(y))return tn(y,a,2)})):q(t)?e?l=()=>tn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ut(t,a,3,[m])}:l=ct,e&&r){const y=l;l=()=>Xn(y())}let h,m=y=>{h=k.onStop=()=>{tn(y,a,4)}};if(ii)return m=ct,e?n&&ut(e,a,3,[l(),u?[]:void 0,m]):l(),ct;let p=u?[]:vu;const E=()=>{if(!!k.active)if(e){const y=k.run();(r||c||(u?y.some((A,M)=>vs(A,p[M])):vs(y,p)))&&(h&&h(),ut(e,a,3,[y,p===vu?void 0:p,m]),p=y)}else k.run()};E.allowRecurse=!!e;let R;i==="sync"?R=E:i==="post"?R=()=>Ke(E,a&&a.suspense):R=()=>Ov(E);const k=new Sl(l,R);return e?n?E():p=k.run():i==="post"?Ke(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&_l(a.scope.effects,k)}}function Bv(t,e,n){const r=this.proxy,i=Se(t)?t.includes(".")?nd(r,t):()=>r[t]:t.bind(r,r);let s;q(e)?s=e:(s=e.handler,n=e);const o=Ne;ur(this);const a=td(i,s.bind(r),n);return o?ur(o):An(),a}function nd(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Xn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Xn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(Cf(t)||nr(t))t.forEach(n=>{Xn(n,e)});else if(Nf(t))for(const n in t)Xn(t[n],e);return t}function Pl(t){return q(t)?{setup:t,name:t.name}:t}const ss=t=>!!t.type.__asyncLoader,rd=t=>t.type.__isKeepAlive;function jv(t,e){id(t,"a",e)}function zv(t,e){id(t,"da",e)}function id(t,e,n=Ne){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ro(e,r,n),n){let i=n.parent;for(;i&&i.parent;)rd(i.parent.vnode)&&Hv(r,e,n,i),i=i.parent}}function Hv(t,e,n,r){const i=ro(e,t,r,!0);sd(()=>{_l(r[e],i)},n)}function ro(t,e,n=Ne,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Er(),ur(n);const a=ut(e,n,t,o);return An(),Ir(),a});return r?i.unshift(s):i.push(s),s}}const jt=t=>(e,n=Ne)=>(!ii||t==="sp")&&ro(t,e,n),Kv=jt("bm"),qv=jt("m"),Wv=jt("bu"),Gv=jt("u"),Yv=jt("bum"),sd=jt("um"),Xv=jt("sp"),Qv=jt("rtg"),Jv=jt("rtc");function Zv(t,e=Ne){ro("ec",t,e)}function pn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Er(),ut(l,n,8,[t.el,a,t,e]),Ir())}}const od="components";function wt(t,e){return ty(od,t,!0,e)||t}const ey=Symbol();function ty(t,e,n=!0,r=!1){const i=bt||Ne;if(i){const s=i.type;if(t===od){const a=Dy(s,!1);if(a&&(a===e||a===Tt(e)||a===Qs(Tt(e))))return s}const o=yu(i[t]||s[t],e)||yu(i.appContext[t],e);return!o&&r?s:o}}function yu(t,e){return t&&(t[e]||t[Tt(e)]||t[Qs(Tt(e))])}function ny(t,e,n,r){let i;const s=n&&n[r];if(K(t)||Se(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Ia=t=>t?bd(t)?Ul(t)||t.proxy:Ia(t.parent):null,_s=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ia(t.parent),$root:t=>Ia(t.root),$emit:t=>t.emit,$options:t=>ld(t),$forceUpdate:t=>t.f||(t.f=()=>Wf(t.update)),$nextTick:t=>t.n||(t.n=kv.bind(t.proxy)),$watch:t=>Bv.bind(t)}),ry={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ae&&X(r,e))return o[e]=1,r[e];if(i!==ae&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,s[e];if(n!==ae&&X(n,e))return o[e]=4,n[e];Ta&&(o[e]=0)}}const u=_s[e];let h,m;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ae&&X(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,X(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ae&&X(i,e)?(i[e]=n,!0):r!==ae&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ae&&X(t,o)||e!==ae&&X(e,o)||(a=s[0])&&X(a,o)||X(r,o)||X(_s,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ta=!0;function iy(t){const e=ld(t),n=t.proxy,r=t.ctx;Ta=!1,e.beforeCreate&&bu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:m,beforeUpdate:p,updated:E,activated:R,deactivated:k,beforeDestroy:y,beforeUnmount:A,destroyed:M,unmounted:z,render:Z,renderTracked:pe,renderTriggered:we,errorCaptured:tt,serverPrefetch:Ie,expose:mn,inheritAttrs:zn,components:Nr,directives:ji,filters:nu}=e;if(c&&sy(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const le=o[de];q(le)&&(r[de]=le.bind(n))}if(i){const de=i.call(n,n);Ee(de)&&(t.data=xl(de))}if(Ta=!0,s)for(const de in s){const le=s[de],kt=q(le)?le.bind(n,n):q(le.get)?le.get.bind(n,n):ct,Uo=!q(le)&&q(le.set)?le.set.bind(n):ct,Dr=nt({get:kt,set:Uo});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Dr.value,set:Hn=>Dr.value=Hn})}if(a)for(const de in a)ad(a[de],r,n,de);if(l){const de=q(l)?l.call(n):l;Reflect.ownKeys(de).forEach(le=>{Vv(le,de[le])})}u&&bu(u,t,"c");function ze(de,le){K(le)?le.forEach(kt=>de(kt.bind(n))):le&&de(le.bind(n))}if(ze(Kv,h),ze(qv,m),ze(Wv,p),ze(Gv,E),ze(jv,R),ze(zv,k),ze(Zv,tt),ze(Jv,pe),ze(Qv,we),ze(Yv,A),ze(sd,z),ze(Xv,Ie),K(mn))if(mn.length){const de=t.exposed||(t.exposed={});mn.forEach(le=>{Object.defineProperty(de,le,{get:()=>n[le],set:kt=>n[le]=kt})})}else t.exposed||(t.exposed={});Z&&t.render===ct&&(t.render=Z),zn!=null&&(t.inheritAttrs=zn),Nr&&(t.components=Nr),ji&&(t.directives=ji)}function sy(t,e,n=ct,r=!1){K(t)&&(t=Sa(t));for(const i in t){const s=t[i];let o;Ee(s)?"default"in s?o=Ho(s.from||i,s.default,!0):o=Ho(s.from||i):o=Ho(s),Ve(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function bu(t,e,n){ut(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ad(t,e,n,r){const i=r.includes(".")?nd(n,r):()=>n[r];if(Se(t)){const s=e[t];q(s)&&is(i,s)}else if(q(t))is(i,t.bind(n));else if(Ee(t))if(K(t))t.forEach(s=>ad(s,e,n,r));else{const s=q(t.handler)?t.handler.bind(n):e[t.handler];q(s)&&is(i,s,t)}}function ld(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Es(l,c,o,!0)),Es(l,e,o)),s.set(e,l),l}function Es(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Es(t,s,n,!0),i&&i.forEach(o=>Es(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=oy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const oy={data:wu,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:vn,directives:vn,watch:ly,provide:wu,inject:ay};function wu(t,e){return e?t?function(){return je(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function ay(t,e){return vn(Sa(t),Sa(e))}function Sa(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?je(je(Object.create(null),t),e):e}function ly(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=Fe(t[r],e[r]);return n}function cy(t,e,n,r=!1){const i={},s={};ys(s,io,1),t.propsDefaults=Object.create(null),cd(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:bv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function uy(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let m=u[h];if(to(t.emitsOptions,m))continue;const p=e[m];if(l)if(X(s,m))p!==s[m]&&(s[m]=p,c=!0);else{const E=Tt(m);i[E]=Aa(l,a,E,p,t,!1)}else p!==s[m]&&(s[m]=p,c=!0)}}}else{cd(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=_r(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Aa(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!X(e,h)&&!0)&&(delete s[h],c=!0)}c&&Pt(t,"set","$attrs")}function cd(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;i&&X(i,u=Tt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:to(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ie(n),c=a||ae;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Aa(i,l,h,c[h],t,!X(c,h))}}return o}function Aa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&q(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(ur(i),r=c[n]=l.call(null,e),An())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===_r(n))&&(r=!0))}return r}function ud(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!q(t)){const u=h=>{l=!0;const[m,p]=ud(h,e,!0);je(o,m),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,tr),tr;if(K(s))for(let u=0;u<s.length;u++){const h=Tt(s[u]);_u(h)&&(o[h]=ae)}else if(s)for(const u in s){const h=Tt(u);if(_u(h)){const m=s[u],p=o[h]=K(m)||q(m)?{type:m}:m;if(p){const E=Tu(Boolean,p.type),R=Tu(String,p.type);p[0]=E>-1,p[1]=R<0||E<R,(E>-1||X(p,"default"))&&a.push(h)}}}const c=[o,a];return r.set(t,c),c}function _u(t){return t[0]!=="$"}function Eu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Iu(t,e){return Eu(t)===Eu(e)}function Tu(t,e){return K(e)?e.findIndex(n=>Iu(n,t)):q(e)&&Iu(e,t)?0:-1}const hd=t=>t[0]==="_"||t==="$stable",Ml=t=>K(t)?t.map(gt):[gt(t)],hy=(t,e,n)=>{if(e._n)return e;const r=Rv((...i)=>Ml(e(...i)),n);return r._c=!1,r},fd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(hd(i))continue;const s=t[i];if(q(s))e[i]=hy(i,s,r);else if(s!=null){const o=Ml(s);e[i]=()=>o}}},dd=(t,e)=>{const n=Ml(e);t.slots.default=()=>n},fy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),ys(e,"_",n)):fd(e,t.slots={})}else t.slots={},e&&dd(t,e);ys(t.slots,io,1)},dy=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(je(i,e),!n&&a===1&&delete i._):(s=!e.$stable,fd(e,i)),o=e}else e&&(dd(t,e),o={default:1});if(s)for(const a in i)!hd(a)&&!(a in o)&&delete i[a]};function md(){return{app:null,config:{isNativeTag:Ug,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function py(t,e){return function(r,i=null){q(r)||(r=Object.assign({},r)),i!=null&&!Ee(i)&&(i=null);const s=md(),o=new Set;let a=!1;const l=s.app={_uid:my++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Py,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const m=fe(r,i);return m.appContext=s,u&&e?e(m,c):t(m,c,h),a=!0,l._container=c,c.__vue_app__=l,Ul(m.component)||m.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ka(t,e,n,r,i=!1){if(K(t)){t.forEach((m,p)=>ka(m,e&&(K(e)?e[p]:e),n,r,i));return}if(ss(r)&&!i)return;const s=r.shapeFlag&4?Ul(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Ve(c)&&(c.value=null)),q(l))tn(l,a,12,[o,u]);else{const m=Se(l),p=Ve(l);if(m||p){const E=()=>{if(t.f){const R=m?u[l]:l.value;i?K(R)&&_l(R,s):K(R)?R.includes(s)||R.push(s):m?(u[l]=[s],X(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,X(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ke(E,n)):E()}}}const Ke=$v;function gy(t){return vy(t)}function vy(t,e){const n=Kg();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:m,setScopeId:p=ct,cloneNode:E,insertStaticContent:R}=t,k=(f,d,g,b=null,v=null,T=null,C=!1,I=null,S=!!d.dynamicChildren)=>{if(f===d)return;f&&!Pr(f,d)&&(b=zi(f),Kt(f,v,T,!0),f=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:L,shapeFlag:D}=d;switch(w){case Ll:y(f,d,g,b);break;case ni:A(f,d,g,b);break;case Ko:f==null&&M(d,g,b,C);break;case pt:ji(f,d,g,b,v,T,C,I,S);break;default:D&1?pe(f,d,g,b,v,T,C,I,S):D&6?nu(f,d,g,b,v,T,C,I,S):(D&64||D&128)&&w.process(f,d,g,b,v,T,C,I,S,Kn)}L!=null&&v&&ka(L,f&&f.ref,T,d||f,!d)},y=(f,d,g,b)=>{if(f==null)r(d.el=a(d.children),g,b);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},A=(f,d,g,b)=>{f==null?r(d.el=l(d.children||""),g,b):d.el=f.el},M=(f,d,g,b)=>{[f.el,f.anchor]=R(f.children,d,g,b,f.el,f.anchor)},z=({el:f,anchor:d},g,b)=>{let v;for(;f&&f!==d;)v=m(f),r(f,g,b),f=v;r(d,g,b)},Z=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=m(f),i(f),f=g;i(d)},pe=(f,d,g,b,v,T,C,I,S)=>{C=C||d.type==="svg",f==null?we(d,g,b,v,T,C,I,S):mn(f,d,v,T,C,I,S)},we=(f,d,g,b,v,T,C,I)=>{let S,w;const{type:L,props:D,shapeFlag:F,transition:j,patchFlag:Q,dirs:se}=f;if(f.el&&E!==void 0&&Q===-1)S=f.el=E(f.el);else{if(S=f.el=o(f.type,T,D&&D.is,D),F&8?u(S,f.children):F&16&&Ie(f.children,S,null,b,v,T&&L!=="foreignObject",C,I),se&&pn(f,null,b,"created"),D){for(const ce in D)ce!=="value"&&!rs(ce)&&s(S,ce,null,D[ce],T,f.children,b,v,Ct);"value"in D&&s(S,"value",null,D.value),(w=D.onVnodeBeforeMount)&&dt(w,b,f)}tt(S,f,f.scopeId,C,b)}se&&pn(f,null,b,"beforeMount");const oe=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;oe&&j.beforeEnter(S),r(S,d,g),((w=D&&D.onVnodeMounted)||oe||se)&&Ke(()=>{w&&dt(w,b,f),oe&&j.enter(S),se&&pn(f,null,b,"mounted")},v)},tt=(f,d,g,b,v)=>{if(g&&p(f,g),b)for(let T=0;T<b.length;T++)p(f,b[T]);if(v){let T=v.subTree;if(d===T){const C=v.vnode;tt(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},Ie=(f,d,g,b,v,T,C,I,S=0)=>{for(let w=S;w<f.length;w++){const L=f[w]=I?Xt(f[w]):gt(f[w]);k(null,L,d,g,b,v,T,C,I)}},mn=(f,d,g,b,v,T,C)=>{const I=d.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:L}=d;S|=f.patchFlag&16;const D=f.props||ae,F=d.props||ae;let j;g&&gn(g,!1),(j=F.onVnodeBeforeUpdate)&&dt(j,g,d,f),L&&pn(d,f,g,"beforeUpdate"),g&&gn(g,!0);const Q=v&&d.type!=="foreignObject";if(w?zn(f.dynamicChildren,w,I,g,b,Q,T):C||kt(f,d,I,null,g,b,Q,T,!1),S>0){if(S&16)Nr(I,d,D,F,g,b,v);else if(S&2&&D.class!==F.class&&s(I,"class",null,F.class,v),S&4&&s(I,"style",D.style,F.style,v),S&8){const se=d.dynamicProps;for(let oe=0;oe<se.length;oe++){const ce=se[oe],it=D[ce],qn=F[ce];(qn!==it||ce==="value")&&s(I,ce,it,qn,v,f.children,g,b,Ct)}}S&1&&f.children!==d.children&&u(I,d.children)}else!C&&w==null&&Nr(I,d,D,F,g,b,v);((j=F.onVnodeUpdated)||L)&&Ke(()=>{j&&dt(j,g,d,f),L&&pn(d,f,g,"updated")},b)},zn=(f,d,g,b,v,T,C)=>{for(let I=0;I<d.length;I++){const S=f[I],w=d[I],L=S.el&&(S.type===pt||!Pr(S,w)||S.shapeFlag&70)?h(S.el):g;k(S,w,L,null,b,v,T,C,!0)}},Nr=(f,d,g,b,v,T,C)=>{if(g!==b){for(const I in b){if(rs(I))continue;const S=b[I],w=g[I];S!==w&&I!=="value"&&s(f,I,w,S,C,d.children,v,T,Ct)}if(g!==ae)for(const I in g)!rs(I)&&!(I in b)&&s(f,I,g[I],null,C,d.children,v,T,Ct);"value"in b&&s(f,"value",g.value,b.value)}},ji=(f,d,g,b,v,T,C,I,S)=>{const w=d.el=f?f.el:a(""),L=d.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:j}=d;j&&(I=I?I.concat(j):j),f==null?(r(w,g,b),r(L,g,b),Ie(d.children,g,L,v,T,C,I,S)):D>0&&D&64&&F&&f.dynamicChildren?(zn(f.dynamicChildren,F,g,v,T,C,I),(d.key!=null||v&&d===v.subTree)&&pd(f,d,!0)):kt(f,d,g,L,v,T,C,I,S)},nu=(f,d,g,b,v,T,C,I,S)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,g,b,C,S):Fo(d,g,b,v,T,C,S):ze(f,d,S)},Fo=(f,d,g,b,v,T,C)=>{const I=f.component=ky(f,b,v);if(rd(f)&&(I.ctx.renderer=Kn),Cy(I),I.asyncDep){if(v&&v.registerDep(I,de),!f.el){const S=I.subTree=fe(ni);A(null,S,d,g)}return}de(I,f,d,g,v,T,C)},ze=(f,d,g)=>{const b=d.component=f.component;if(Lv(f,d,g))if(b.asyncDep&&!b.asyncResolved){le(b,d,g);return}else b.next=d,xv(b.update),b.update();else d.el=f.el,b.vnode=d},de=(f,d,g,b,v,T,C)=>{const I=()=>{if(f.isMounted){let{next:L,bu:D,u:F,parent:j,vnode:Q}=f,se=L,oe;gn(f,!1),L?(L.el=Q.el,le(f,L,C)):L=Q,D&&jo(D),(oe=L.props&&L.props.onVnodeBeforeUpdate)&&dt(oe,j,L,Q),gn(f,!0);const ce=zo(f),it=f.subTree;f.subTree=ce,k(it,ce,h(it.el),zi(it),f,v,T),L.el=ce.el,se===null&&Fv(f,ce.el),F&&Ke(F,v),(oe=L.props&&L.props.onVnodeUpdated)&&Ke(()=>dt(oe,j,L,Q),v)}else{let L;const{el:D,props:F}=d,{bm:j,m:Q,parent:se}=f,oe=ss(d);if(gn(f,!1),j&&jo(j),!oe&&(L=F&&F.onVnodeBeforeMount)&&dt(L,se,d),gn(f,!0),D&&Vo){const ce=()=>{f.subTree=zo(f),Vo(D,f.subTree,f,v,null)};oe?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ce()):ce()}else{const ce=f.subTree=zo(f);k(null,ce,g,b,f,v,T),d.el=ce.el}if(Q&&Ke(Q,v),!oe&&(L=F&&F.onVnodeMounted)){const ce=d;Ke(()=>dt(L,se,ce),v)}(d.shapeFlag&256||se&&ss(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Ke(f.a,v),f.isMounted=!0,d=g=b=null}},S=f.effect=new Sl(I,()=>Wf(w),f.scope),w=f.update=()=>S.run();w.id=f.uid,gn(f,!0),w()},le=(f,d,g)=>{d.component=f;const b=f.vnode.props;f.vnode=d,f.next=null,uy(f,d.props,b,g),dy(f,d.children,g),Er(),eo(void 0,f.update),Ir()},kt=(f,d,g,b,v,T,C,I,S=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,D=d.children,{patchFlag:F,shapeFlag:j}=d;if(F>0){if(F&128){Dr(w,D,g,b,v,T,C,I,S);return}else if(F&256){Uo(w,D,g,b,v,T,C,I,S);return}}j&8?(L&16&&Ct(w,v,T),D!==w&&u(g,D)):L&16?j&16?Dr(w,D,g,b,v,T,C,I,S):Ct(w,v,T,!0):(L&8&&u(g,""),j&16&&Ie(D,g,b,v,T,C,I,S))},Uo=(f,d,g,b,v,T,C,I,S)=>{f=f||tr,d=d||tr;const w=f.length,L=d.length,D=Math.min(w,L);let F;for(F=0;F<D;F++){const j=d[F]=S?Xt(d[F]):gt(d[F]);k(f[F],j,g,null,v,T,C,I,S)}w>L?Ct(f,v,T,!0,!1,D):Ie(d,g,b,v,T,C,I,S,D)},Dr=(f,d,g,b,v,T,C,I,S)=>{let w=0;const L=d.length;let D=f.length-1,F=L-1;for(;w<=D&&w<=F;){const j=f[w],Q=d[w]=S?Xt(d[w]):gt(d[w]);if(Pr(j,Q))k(j,Q,g,null,v,T,C,I,S);else break;w++}for(;w<=D&&w<=F;){const j=f[D],Q=d[F]=S?Xt(d[F]):gt(d[F]);if(Pr(j,Q))k(j,Q,g,null,v,T,C,I,S);else break;D--,F--}if(w>D){if(w<=F){const j=F+1,Q=j<L?d[j].el:b;for(;w<=F;)k(null,d[w]=S?Xt(d[w]):gt(d[w]),g,Q,v,T,C,I,S),w++}}else if(w>F)for(;w<=D;)Kt(f[w],v,T,!0),w++;else{const j=w,Q=w,se=new Map;for(w=Q;w<=F;w++){const Xe=d[w]=S?Xt(d[w]):gt(d[w]);Xe.key!=null&&se.set(Xe.key,w)}let oe,ce=0;const it=F-Q+1;let qn=!1,su=0;const Rr=new Array(it);for(w=0;w<it;w++)Rr[w]=0;for(w=j;w<=D;w++){const Xe=f[w];if(ce>=it){Kt(Xe,v,T,!0);continue}let ft;if(Xe.key!=null)ft=se.get(Xe.key);else for(oe=Q;oe<=F;oe++)if(Rr[oe-Q]===0&&Pr(Xe,d[oe])){ft=oe;break}ft===void 0?Kt(Xe,v,T,!0):(Rr[ft-Q]=w+1,ft>=su?su=ft:qn=!0,k(Xe,d[ft],g,null,v,T,C,I,S),ce++)}const ou=qn?yy(Rr):tr;for(oe=ou.length-1,w=it-1;w>=0;w--){const Xe=Q+w,ft=d[Xe],au=Xe+1<L?d[Xe+1].el:b;Rr[w]===0?k(null,ft,g,au,v,T,C,I,S):qn&&(oe<0||w!==ou[oe]?Hn(ft,g,au,2):oe--)}}},Hn=(f,d,g,b,v=null)=>{const{el:T,type:C,transition:I,children:S,shapeFlag:w}=f;if(w&6){Hn(f.component.subTree,d,g,b);return}if(w&128){f.suspense.move(d,g,b);return}if(w&64){C.move(f,d,g,Kn);return}if(C===pt){r(T,d,g);for(let D=0;D<S.length;D++)Hn(S[D],d,g,b);r(f.anchor,d,g);return}if(C===Ko){z(f,d,g);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(T),r(T,d,g),Ke(()=>I.enter(T),v);else{const{leave:D,delayLeave:F,afterLeave:j}=I,Q=()=>r(T,d,g),se=()=>{D(T,()=>{Q(),j&&j()})};F?F(T,Q,se):se()}else r(T,d,g)},Kt=(f,d,g,b=!1,v=!1)=>{const{type:T,props:C,ref:I,children:S,dynamicChildren:w,shapeFlag:L,patchFlag:D,dirs:F}=f;if(I!=null&&ka(I,null,g,f,!0),L&256){d.ctx.deactivate(f);return}const j=L&1&&F,Q=!ss(f);let se;if(Q&&(se=C&&C.onVnodeBeforeUnmount)&&dt(se,d,f),L&6)Dg(f.component,g,b);else{if(L&128){f.suspense.unmount(g,b);return}j&&pn(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,g,v,Kn,b):w&&(T!==pt||D>0&&D&64)?Ct(w,d,g,!1,!0):(T===pt&&D&384||!v&&L&16)&&Ct(S,d,g),b&&ru(f)}(Q&&(se=C&&C.onVnodeUnmounted)||j)&&Ke(()=>{se&&dt(se,d,f),j&&pn(f,null,d,"unmounted")},g)},ru=f=>{const{type:d,el:g,anchor:b,transition:v}=f;if(d===pt){Ng(g,b);return}if(d===Ko){Z(f);return}const T=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:I}=v,S=()=>C(g,T);I?I(f.el,T,S):S()}else T()},Ng=(f,d)=>{let g;for(;f!==d;)g=m(f),i(f),f=g;i(d)},Dg=(f,d,g)=>{const{bum:b,scope:v,update:T,subTree:C,um:I}=f;b&&jo(b),v.stop(),T&&(T.active=!1,Kt(C,f,d,g)),I&&Ke(I,d),Ke(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ct=(f,d,g,b=!1,v=!1,T=0)=>{for(let C=T;C<f.length;C++)Kt(f[C],d,g,b,v)},zi=f=>f.shapeFlag&6?zi(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),iu=(f,d,g)=>{f==null?d._vnode&&Kt(d._vnode,null,null,!0):k(d._vnode||null,f,d,null,null,null,g),Xf(),d._vnode=f},Kn={p:k,um:Kt,m:Hn,r:ru,mt:Fo,mc:Ie,pc:kt,pbc:zn,n:zi,o:t};let $o,Vo;return e&&([$o,Vo]=e(Kn)),{render:iu,hydrate:$o,createApp:py(iu,$o)}}function gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pd(t,e,n=!1){const r=t.children,i=e.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Xt(i[s]),a.el=o.el),n||pd(o,a))}}function yy(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const by=t=>t.__isTeleport,pt=Symbol(void 0),Ll=Symbol(void 0),ni=Symbol(void 0),Ko=Symbol(void 0),zr=[];let at=null;function rt(t=!1){zr.push(at=t?null:[])}function wy(){zr.pop(),at=zr[zr.length-1]||null}let ri=1;function Su(t){ri+=t}function gd(t){return t.dynamicChildren=ri>0?at||tr:null,wy(),ri>0&&at&&at.push(t),t}function ht(t,e,n,r,i,s){return gd(re(t,e,n,r,i,s,!0))}function _y(t,e,n,r,i){return gd(fe(t,e,n,r,i,!0))}function Ca(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const io="__vInternal",vd=({key:t})=>t!=null?t:null,os=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Ve(t)||q(t)?{i:bt,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,r=0,i=null,s=t===pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vd(e),ref:e&&os(e),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Fl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),ri>0&&!o&&at&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&at.push(l),l}const fe=Ey;function Ey(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===ey)&&(t=ni),Ca(t)){const a=cr(t,e,!0);return n&&Fl(a,n),ri>0&&!s&&at&&(a.shapeFlag&6?at[at.indexOf(t)]=a:at.push(a)),a.patchFlag|=-2,a}if(Ry(t)&&(t=t.__vccOpts),e){e=Iy(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=wr(a)),Ee(l)&&(zf(l)&&!K(l)&&(l=je({},l)),e.style=wi(l))}const o=Se(t)?1:Uv(t)?128:by(t)?64:Ee(t)?4:q(t)?2:0;return re(t,e,n,r,i,o,s,!0)}function Iy(t){return t?zf(t)||io in t?je({},t):t:null}function cr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ty(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vd(a),ref:e&&e.ref?n&&i?K(i)?i.concat(os(e)):[i,os(e)]:os(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor}}function yd(t=" ",e=0){return fe(Ll,null,t,e)}function gt(t){return t==null||typeof t=="boolean"?fe(ni):K(t)?fe(pt,null,t.slice()):typeof t=="object"?Xt(t):fe(Ll,null,String(t))}function Xt(t){return t.el===null||t.memo?t:cr(t)}function Fl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Fl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(io in e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[yd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ty(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=wr([e.class,r.class]));else if(i==="style")e.style=wi([e.style,r.style]);else if(Gs(i)){const s=e[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function dt(t,e,n,r=null){ut(t,e,7,[n,r])}const Sy=md();let Ay=0;function ky(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Sy,s={uid:Ay++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ud(r,i),emitsOptions:Jf(r,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dv.bind(null,s),t.ce&&t.ce(s),s}let Ne=null;const ur=t=>{Ne=t,t.scope.on()},An=()=>{Ne&&Ne.scope.off(),Ne=null};function bd(t){return t.vnode.shapeFlag&4}let ii=!1;function Cy(t,e=!1){ii=e;const{props:n,children:r}=t.vnode,i=bd(t);cy(t,n,i,e),fy(t,r);const s=i?xy(t,e):void 0;return ii=!1,s}function xy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hf(new Proxy(t.ctx,ry));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Ny(t):null;ur(t),Er();const s=tn(r,t,0,[t.props,i]);if(Ir(),An(),xf(s)){if(s.then(An,An),e)return s.then(o=>{Au(t,o,e)}).catch(o=>{Zs(o,t,0)});t.asyncDep=s}else Au(t,s,e)}else wd(t,e)}function Au(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Kf(e)),wd(t,n)}let ku;function wd(t,e,n){const r=t.type;if(!t.render){if(!e&&ku&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=je(je({isCustomElement:s,delimiters:a},o),l);r.render=ku(i,c)}}t.render=r.render||ct}ur(t),Er(),iy(t),Ir(),An()}function Oy(t){return new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}})}function Ny(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Oy(t))},slots:t.slots,emit:t.emit,expose:e}}function Ul(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kf(Hf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)}}))}function Dy(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Ry(t){return q(t)&&"__vccOpts"in t}const nt=(t,e)=>Sv(t,e,ii);function _d(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!K(e)?Ca(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ca(n)&&(n=[n]),fe(t,e,n))}const Py="3.2.37",My="http://www.w3.org/2000/svg",bn=typeof document<"u"?document:null,Cu=bn&&bn.createElement("template"),Ly={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?bn.createElementNS(My,t):bn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Cu.innerHTML=r?`<svg>${t}</svg>`:t;const a=Cu.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Fy(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Uy(t,e,n){const r=t.style,i=Se(n);if(n&&!i){for(const s in n)xa(r,s,n[s]);if(e&&!Se(e))for(const s in e)n[s]==null&&xa(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const xu=/\s*!important$/;function xa(t,e,n){if(K(n))n.forEach(r=>xa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$y(t,e);xu.test(n)?t.setProperty(_r(r),n.replace(xu,""),"important"):t[r]=n}}const Ou=["Webkit","Moz","ms"],qo={};function $y(t,e){const n=qo[e];if(n)return n;let r=Tt(e);if(r!=="filter"&&r in t)return qo[e]=r;r=Qs(r);for(let i=0;i<Ou.length;i++){const s=Ou[i]+r;if(s in t)return qo[e]=s}return e}const Nu="http://www.w3.org/1999/xlink";function Vy(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Nu,e.slice(6,e.length)):t.setAttributeNS(Nu,e,n);else{const s=Pg(e);n==null||s&&!Af(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function By(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Af(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ed,jy]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Oa=0;const zy=Promise.resolve(),Hy=()=>{Oa=0},Ky=()=>Oa||(zy.then(Hy),Oa=Ed());function qy(t,e,n,r){t.addEventListener(e,n,r)}function Wy(t,e,n,r){t.removeEventListener(e,n,r)}function Gy(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Yy(e);if(r){const c=s[e]=Xy(r,i);qy(t,a,c,l)}else o&&(Wy(t,a,o,l),s[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function Yy(t){let e;if(Du.test(t)){e={};let n;for(;n=t.match(Du);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[_r(t.slice(2)),e]}function Xy(t,e){const n=r=>{const i=r.timeStamp||Ed();(jy||i>=n.attached-1)&&ut(Qy(r,n.value),e,5,[r])};return n.value=t,n.attached=Ky(),n}function Qy(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Ru=/^on[a-z]/,Jy=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Fy(t,r,i):e==="style"?Uy(t,n,r):Gs(e)?wl(e)||Gy(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zy(t,e,r,i))?By(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vy(t,e,r,i))};function Zy(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ru.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ru.test(e)&&Se(n)?!1:e in t}const e0=je({patchProp:Jy},Ly);let Pu;function t0(){return Pu||(Pu=gy(e0))}const n0=(...t)=>{const e=t0().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=r0(r);if(!i)return;const s=e._component;!q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function r0(t){return Se(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Mu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mu(Object(n),!0).forEach(function(r){o0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Is(t){return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Is(t)}function i0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s0(t,e,n){return e&&Lu(t.prototype,e),n&&Lu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $l(t,e){return l0(t)||u0(t,e)||Id(t,e)||f0()}function so(t){return a0(t)||c0(t)||Id(t)||h0()}function a0(t){if(Array.isArray(t))return Na(t)}function l0(t){if(Array.isArray(t))return t}function c0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u0(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Id(t,e){if(!!t){if(typeof t=="string")return Na(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Na(t,e)}}function Na(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fu=function(){},Vl={},Td={},Sd=null,Ad={mark:Fu,measure:Fu};try{typeof window<"u"&&(Vl=window),typeof document<"u"&&(Td=document),typeof MutationObserver<"u"&&(Sd=MutationObserver),typeof performance<"u"&&(Ad=performance)}catch{}var d0=Vl.navigator||{},Uu=d0.userAgent,$u=Uu===void 0?"":Uu,on=Vl,ue=Td,Vu=Sd,Yi=Ad;on.document;var zt=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",kd=~$u.indexOf("MSIE")||~$u.indexOf("Trident/"),Mt="___FONT_AWESOME___",Da=16,Cd="fa",xd="svg-inline--fa",Dn="data-fa-i2svg",Ra="data-fa-pseudo-element",m0="data-fa-pseudo-element-pending",Bl="data-prefix",jl="data-icon",Bu="fontawesome-i2svg",p0="async",g0=["HTML","HEAD","STYLE","SCRIPT"],Od=function(){try{return!0}catch{return!1}}(),zl={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Ts={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Nd={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},v0={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},y0=/fa[srltdbk]?[\-\ ]/,Dd="fa-layers-text",b0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,w0={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Rd=[1,2,3,4,5,6,7,8,9,10],_0=Rd.concat([11,12,13,14,15,16,17,18,19,20]),E0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},I0=[].concat(so(Object.keys(Ts)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wn.GROUP,wn.SWAP_OPACITY,wn.PRIMARY,wn.SECONDARY]).concat(Rd.map(function(t){return"".concat(t,"x")})).concat(_0.map(function(t){return"w-".concat(t)})),Pd=on.FontAwesomeConfig||{};function T0(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function S0(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var A0=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];A0.forEach(function(t){var e=$l(t,2),n=e[0],r=e[1],i=S0(T0(n));i!=null&&(Pd[r]=i)})}var k0={familyPrefix:Cd,styleDefault:"solid",replacementClass:xd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Hr=O(O({},k0),Pd);Hr.autoReplaceSvg||(Hr.observeMutations=!1);var U={};Object.keys(Hr).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Hr[t]=n,as.forEach(function(r){return r(U)})},get:function(){return Hr[t]}})});on.FontAwesomeConfig=U;var as=[];function C0(t){return as.push(t),function(){as.splice(as.indexOf(t),1)}}var Wt=Da,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function x0(t){if(!(!t||!zt)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var O0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function si(){for(var t=12,e="";t-- >0;)e+=O0[Math.random()*62|0];return e}function Tr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Hl(t){return t.classList?Tr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Md(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N0(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Md(t[n]),'" ')},"").trim()}function oo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Kl(t){return t.size!==_t.size||t.x!==_t.x||t.y!==_t.y||t.rotate!==_t.rotate||t.flipX||t.flipY}function D0(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function R0(t){var e=t.transform,n=t.width,r=n===void 0?Da:n,i=t.height,s=i===void 0?Da:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&kd?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var P0=`:root, :host {
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
}`;function Ld(){var t=Cd,e=xd,n=U.familyPrefix,r=U.replacementClass,i=P0;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var ju=!1;function Wo(){U.autoAddCss&&!ju&&(x0(Ld()),ju=!0)}var M0={mixout:function(){return{dom:{css:Ld,insertCss:Wo}}},hooks:function(){return{beforeDOMElementCreation:function(){Wo()},beforeI2svg:function(){Wo()}}}},Lt=on||{};Lt[Mt]||(Lt[Mt]={});Lt[Mt].styles||(Lt[Mt].styles={});Lt[Mt].hooks||(Lt[Mt].hooks={});Lt[Mt].shims||(Lt[Mt].shims=[]);var lt=Lt[Mt],Fd=[],L0=function t(){ue.removeEventListener("DOMContentLoaded",t),Ss=1,Fd.map(function(e){return e()})},Ss=!1;zt&&(Ss=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Ss||ue.addEventListener("DOMContentLoaded",L0));function F0(t){!zt||(Ss?setTimeout(t,0):Fd.push(t))}function _i(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Md(t):"<".concat(e," ").concat(N0(r),">").concat(s.map(_i).join(""),"</").concat(e,">")}function zu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var U0=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Go=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?U0(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function $0(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pa(t){var e=$0(t);return e.length===1?e[0].toString(16):null}function V0(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Hu(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ma(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Hu(e);typeof lt.hooks.addPack=="function"&&!i?lt.hooks.addPack(t,Hu(e)):lt.styles[t]=O(O({},lt.styles[t]||{}),s),t==="fas"&&Ma("fa",e)}var Kr=lt.styles,B0=lt.shims,j0=Object.values(Nd),ql=null,Ud={},$d={},Vd={},Bd={},jd={},z0=Object.keys(zl);function H0(t){return~I0.indexOf(t)}function K0(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!H0(i)?i:null}var zd=function(){var e=function(s){return Go(Kr,function(o,a,l){return o[l]=Go(a,s,{}),o},{})};Ud=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),$d=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),jd=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Kr||U.autoFetchSvg,r=Go(B0,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Vd=r.names,Bd=r.unicodes,ql=ao(U.styleDefault)};C0(function(t){ql=ao(t.styleDefault)});zd();function Wl(t,e){return(Ud[t]||{})[e]}function q0(t,e){return($d[t]||{})[e]}function Qn(t,e){return(jd[t]||{})[e]}function Hd(t){return Vd[t]||{prefix:null,iconName:null}}function W0(t){var e=Bd[t],n=Wl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function an(){return ql}var Gl=function(){return{prefix:null,iconName:null,rest:[]}};function ao(t){var e=zl[t],n=Ts[t]||Ts[e],r=t in lt.styles?t:null;return n||r||null}function lo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=K0(U.familyPrefix,a);if(Kr[a]?(a=j0.includes(a)?v0[a]:a,i=a,o.prefix=a):z0.indexOf(a)>-1?(i=a,o.prefix=ao(a)):l?o.iconName=l:a!==U.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var c=i==="fa"?Hd(o.iconName):{},u=Qn(o.prefix,o.iconName);c.prefix&&(i=null),o.iconName=c.iconName||u||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Kr.far&&Kr.fas&&!U.autoFetchSvg&&(o.prefix="fas")}return o},Gl());return(s.prefix==="fa"||i==="fa")&&(s.prefix=an()||"fas"),s}var G0=function(){function t(){i0(this,t),this.definitions={}}return s0(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Ma(a,o[a]);var l=Nd[a];l&&Ma(l,o[a]),zd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),Ku=[],Jn={},ir={},Y0=Object.keys(ir);function X0(t,e){var n=e.mixoutsTo;return Ku=t,Jn={},Object.keys(ir).forEach(function(r){Y0.indexOf(r)===-1&&delete ir[r]}),Ku.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Is(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Jn[o]||(Jn[o]=[]),Jn[o].push(s[o])})}r.provides&&r.provides(ir)}),n}function La(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Jn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Rn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Jn[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ir[t]?ir[t].apply(null,e):void 0}function Fa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||an();if(!!e)return e=Qn(n,e)||e,zu(Kd.definitions,n,e)||zu(lt.styles,n,e)}var Kd=new G0,Q0=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Rn("noAuto")},J0={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Rn("beforeI2svg",e),Ft("pseudoElements2svg",e),Ft("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,F0(function(){eb({autoReplaceSvgRoot:n}),Rn("watch",e)})}},Z0={icon:function(e){if(e===null)return null;if(Is(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ao(e[0]);return{prefix:r,iconName:Qn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.familyPrefix,"-"))>-1||e.match(y0))){var i=lo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||an(),iconName:Qn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=an();return{prefix:s,iconName:Qn(s,e)||e}}}},et={noAuto:Q0,config:U,dom:J0,parse:Z0,library:Kd,findIconDefinition:Fa,toHtml:_i},eb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(lt.styles).length>0||U.autoFetchSvg)&&zt&&U.autoReplaceSvg&&et.dom.i2svg({node:r})};function co(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return _i(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!zt){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function tb(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Kl(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=oo(O(O({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function nb(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function Yl(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,m=t.watchable,p=m===void 0?!1:m,E=r.found?r:n,R=E.width,k=E.height,y=i==="fak",A=[U.replacementClass,s?"".concat(U.familyPrefix,"-").concat(s):""].filter(function(Ie){return h.classes.indexOf(Ie)===-1}).filter(function(Ie){return Ie!==""||!!Ie}).concat(h.classes).join(" "),M={children:[],attributes:O(O({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(k)})},z=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(R/k*16*.0625,"em")}:{};p&&(M.attributes[Dn]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||si())},children:[l]}),delete M.attributes.title);var Z=O(O({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:O(O({},z),h.styles)}),pe=r.found&&n.found?Ft("generateAbstractMask",Z)||{children:[],attributes:{}}:Ft("generateAbstractIcon",Z)||{children:[],attributes:{}},we=pe.children,tt=pe.attributes;return Z.children=we,Z.attributes=tt,a?nb(Z):tb(Z)}function qu(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Dn]="");var u=O({},o.styles);Kl(i)&&(u.transform=R0({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=oo(u);h.length>0&&(c.style=h);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function rb(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=oo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yo=lt.styles;function Ua(t){var e=t[0],n=t[1],r=t.slice(4),i=$l(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.familyPrefix,"-").concat(wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.familyPrefix,"-").concat(wn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.familyPrefix,"-").concat(wn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var ib={found:!1,width:512,height:512};function sb(t,e){!Od&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $a(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=an()),new Promise(function(r,i){if(Ft("missingIconAbstract"),n==="fa"){var s=Hd(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Yo[e]&&Yo[e][t]){var o=Yo[e][t];return r(Ua(o))}sb(t,e),r(O(O({},ib),{},{icon:U.showMissingIcons&&t?Ft("missingIconAbstract")||{}:{}}))})}var Wu=function(){},Va=U.measurePerformance&&Yi&&Yi.mark&&Yi.measure?Yi:{mark:Wu,measure:Wu},Ur='FA "6.1.2"',ob=function(e){return Va.mark("".concat(Ur," ").concat(e," begins")),function(){return qd(e)}},qd=function(e){Va.mark("".concat(Ur," ").concat(e," ends")),Va.measure("".concat(Ur," ").concat(e),"".concat(Ur," ").concat(e," begins"),"".concat(Ur," ").concat(e," ends"))},Xl={begin:ob,end:qd},ls=function(){};function Gu(t){var e=t.getAttribute?t.getAttribute(Dn):null;return typeof e=="string"}function ab(t){var e=t.getAttribute?t.getAttribute(Bl):null,n=t.getAttribute?t.getAttribute(jl):null;return e&&n}function lb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function cb(){if(U.autoReplaceSvg===!0)return cs.replace;var t=cs[U.autoReplaceSvg];return t||cs.replace}function ub(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function hb(t){return ue.createElement(t)}function Wd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ub:hb:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Wd(o,{ceFn:r}))}),i}function fb(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var cs={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Wd(i),n)}),n.getAttribute(Dn)===null&&U.keepOriginalSource){var r=ue.createComment(fb(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Hl(n).indexOf(U.replacementClass))return cs.replace(e);var i=new RegExp("".concat(U.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return _i(a)}).join(`
`);n.setAttribute(Dn,""),n.innerHTML=o}};function Yu(t){t()}function Gd(t,e){var n=typeof e=="function"?e:ls;if(t.length===0)n();else{var r=Yu;U.mutateApproach===p0&&(r=on.requestAnimationFrame||Yu),r(function(){var i=cb(),s=Xl.begin("mutate");t.map(i),s(),n()})}}var Ql=!1;function Yd(){Ql=!0}function Ba(){Ql=!1}var As=null;function Xu(t){if(!!Vu&&!!U.observeMutations){var e=t.treeCallback,n=e===void 0?ls:e,r=t.nodeCallback,i=r===void 0?ls:r,s=t.pseudoElementsCallback,o=s===void 0?ls:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;As=new Vu(function(c){if(!Ql){var u=an();Tr(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Gu(h.addedNodes[0])&&(U.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&U.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Gu(h.target)&&~E0.indexOf(h.attributeName))if(h.attributeName==="class"&&ab(h.target)){var m=lo(Hl(h.target)),p=m.prefix,E=m.iconName;h.target.setAttribute(Bl,p||u),E&&h.target.setAttribute(jl,E)}else lb(h.target)&&i(h.target)})}}),zt&&As.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function db(){!As||As.disconnect()}function mb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function pb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=lo(Hl(t));return i.prefix||(i.prefix=an()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=q0(i.prefix,t.innerText)||Wl(i.prefix,Pa(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gb(t){var e=Tr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||si()):(e["aria-hidden"]="true",e.focusable="false")),e}function vb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pb(t),r=n.iconName,i=n.prefix,s=n.rest,o=gb(t),a=La("parseNodeAttributes",{},t),l=e.styleParser?mb(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var yb=lt.styles;function Xd(t){var e=U.autoReplaceSvg==="nest"?Qu(t,{styleParser:!1}):Qu(t);return~e.extra.classes.indexOf(Dd)?Ft("generateLayersText",t,e):Ft("generateSvgReplacementMutation",t,e)}function Ju(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();var n=ue.documentElement.classList,r=function(h){return n.add("".concat(Bu,"-").concat(h))},i=function(h){return n.remove("".concat(Bu,"-").concat(h))},s=U.autoFetchSvg?Object.keys(zl):Object.keys(yb);s.includes("fa")||s.push("fa");var o=[".".concat(Dd,":not([").concat(Dn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Dn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Tr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Xl.begin("onTree"),c=a.reduce(function(u,h){try{var m=Xd(h);m&&u.push(m)}catch(p){Od||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(m){Gd(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(m){l(),h(m)})})}function bb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xd(t).then(function(n){n&&Gd([n],e)})}function wb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Fa(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fa(i||{})),t(r,O(O({},n),{},{mask:i}))}}var _b=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,m=h===void 0?null:h,p=n.titleId,E=p===void 0?null:p,R=n.classes,k=R===void 0?[]:R,y=n.attributes,A=y===void 0?{}:y,M=n.styles,z=M===void 0?{}:M;if(!!e){var Z=e.prefix,pe=e.iconName,we=e.icon;return co(O({type:"icon"},e),function(){return Rn("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(m?A["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(E||si()):(A["aria-hidden"]="true",A.focusable="false")),Yl({icons:{main:Ua(we),mask:l?Ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Z,iconName:pe,transform:O(O({},_t),i),symbol:o,title:m,maskId:u,titleId:E,extra:{attributes:A,styles:z,classes:k}})})}},Eb={mixout:function(){return{icon:wb(_b)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ju,n.nodeCallback=bb,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return Ju(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,m=r.extra;return new Promise(function(p,E){Promise.all([$a(i,a),u.iconName?$a(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var k=$l(R,2),y=k[0],A=k[1];p([n,Yl({icons:{main:y,mask:A},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:m,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=oo(a);l.length>0&&(i.style=l);var c;return Kl(o)&&(c=Ft("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Ib={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return co({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.familyPrefix,"-layers")].concat(so(s)).join(" ")},children:o}]})}}}},Tb={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return co({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),rb({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(U.familyPrefix,"-layers-counter")].concat(so(a))}})})}}}},Sb={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?_t:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return co({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),qu({content:n,transform:O(O({},_t),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(U.familyPrefix,"-layers-text")].concat(so(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(kd){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qu({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Ab=new RegExp('"',"ug"),Zu=[1105920,1112319];function kb(t){var e=t.replace(Ab,""),n=V0(e,0),r=n>=Zu[0]&&n<=Zu[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pa(i?e[0]:e),isSecondary:r||i}}function eh(t,e){var n="".concat(m0).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Tr(t.children),o=s.filter(function(pe){return pe.getAttribute(Ra)===e})[0],a=on.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(b0),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ts[l[2].toLowerCase()]:w0[c],p=kb(h),E=p.value,R=p.isSecondary,k=l[0].startsWith("FontAwesome"),y=Wl(m,E),A=y;if(k){var M=W0(E);M.iconName&&M.prefix&&(y=M.iconName,m=M.prefix)}if(y&&!R&&(!o||o.getAttribute(Bl)!==m||o.getAttribute(jl)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var z=vb(),Z=z.extra;Z.attributes[Ra]=e,$a(y,m).then(function(pe){var we=Yl(O(O({},z),{},{icons:{main:pe,mask:Gl()},prefix:m,iconName:A,extra:Z,watchable:!0})),tt=ue.createElement("svg");e==="::before"?t.insertBefore(tt,t.firstChild):t.appendChild(tt),tt.outerHTML=we.map(function(Ie){return _i(Ie)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Cb(t){return Promise.all([eh(t,"::before"),eh(t,"::after")])}function xb(t){return t.parentNode!==document.head&&!~g0.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ra)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function th(t){if(!!zt)return new Promise(function(e,n){var r=Tr(t.querySelectorAll("*")).filter(xb).map(Cb),i=Xl.begin("searchPseudoElements");Yd(),Promise.all(r).then(function(){i(),Ba(),e()}).catch(function(){i(),Ba(),n()})})}var Ob={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=th,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;U.searchPseudoElements&&th(i)}}},nh=!1,Nb={mixout:function(){return{dom:{unwatch:function(){Yd(),nh=!0}}}},hooks:function(){return{bootstrap:function(){Xu(La("mutationObserverCallbacks",{}))},noAuto:function(){db()},watch:function(n){var r=n.observeMutationsRoot;nh?Ba():Xu(La("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},rh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Db={mixout:function(){return{parse:{transform:function(n){return rh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=rh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:m};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},Xo={x:0,y:0,width:"100%",height:"100%"};function ih(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Rb(t){return t.tag==="g"?t.children:[t]}var Pb={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?lo(i.split(" ").map(function(o){return o.trim()})):Gl();return s.prefix||(s.prefix=an()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,m=o.icon,p=D0({transform:l,containerWidth:h,iconWidth:c}),E={tag:"rect",attributes:O(O({},Xo),{},{fill:"white"})},R=u.children?{children:u.children.map(ih)}:{},k={tag:"g",attributes:O({},p.inner),children:[ih(O({tag:u.tag,attributes:O(O({},u.attributes),p.path)},R))]},y={tag:"g",attributes:O({},p.outer),children:[k]},A="mask-".concat(a||si()),M="clip-".concat(a||si()),z={tag:"mask",attributes:O(O({},Xo),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Rb(m)},z]};return r.push(Z,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},Xo)}),{children:r,attributes:i}}}},Mb={provides:function(e){var n=!1;on.matchMedia&&(n=on.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lb={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Fb=[M0,Eb,Ib,Tb,Sb,Ob,Nb,Db,Pb,Mb,Lb];X0(Fb,{mixoutsTo:et});et.noAuto;var Qd=et.config,Ub=et.library;et.dom;var ks=et.parse;et.findIconDefinition;et.toHtml;var $b=et.icon;et.layer;var Vb=et.text;et.counter;function sh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sh(Object(n),!0).forEach(function(r){He(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cs(t){return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cs(t)}function He(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jb(t,e){if(t==null)return{};var n=Bb(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function ja(t){return zb(t)||Hb(t)||Kb(t)||qb()}function zb(t){if(Array.isArray(t))return za(t)}function Hb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Kb(t,e){if(!!t){if(typeof t=="string")return za(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return za(t,e)}}function za(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jd={exports:{}};(function(t){(function(e){var n=function(y,A,M){if(!c(A)||h(A)||m(A)||p(A)||l(A))return A;var z,Z=0,pe=0;if(u(A))for(z=[],pe=A.length;Z<pe;Z++)z.push(n(y,A[Z],M));else{z={};for(var we in A)Object.prototype.hasOwnProperty.call(A,we)&&(z[y(we,M)]=n(y,A[we],M))}return z},r=function(y,A){A=A||{};var M=A.separator||"_",z=A.split||/(?=[A-Z])/;return y.split(z).join(M)},i=function(y){return E(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var A=i(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},a=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},m=function(y){return a.call(y)=="[object RegExp]"},p=function(y){return a.call(y)=="[object Boolean]"},E=function(y){return y=y-0,y===y},R=function(y,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?y:function(z,Z){return M(z,y,Z)}},k={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,A){return n(R(i,A),y)},decamelizeKeys:function(y,A){return n(R(o,A),y,A)},pascalizeKeys:function(y,A){return n(R(s,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(Wb)})(Jd);var Gb=Jd.exports,Yb=["class","style"];function Xb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Gb.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Qb(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Jl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Jl(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Qb(u);break;case"style":l.style=Xb(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=jb(n,Yb);return _d(t.tag,ot(ot(ot({},e),{},{class:i.class,style:ot(ot({},i.style),o)},i.attrs),a),r)}var Zd=!1;try{Zd=!0}catch{}function Jb(){if(!Zd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?He({},t,e):{}}function Zb(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},He(e,"fa-".concat(t.size),t.size!==null),He(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),He(e,"fa-pull-".concat(t.pull),t.pull!==null),He(e,"fa-swap-opacity",t.swapOpacity),He(e,"fa-bounce",t.bounce),He(e,"fa-shake",t.shake),He(e,"fa-beat",t.beat),He(e,"fa-fade",t.fade),He(e,"fa-beat-fade",t.beatFade),He(e,"fa-flash",t.flash),He(e,"fa-spin-pulse",t.spinPulse),He(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function oh(t){if(t&&Cs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ks.icon)return ks.icon(t);if(t===null)return null;if(Cs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Zl=Pl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=nt(function(){return oh(e.icon)}),s=nt(function(){return qr("classes",Zb(e))}),o=nt(function(){return qr("transform",typeof e.transform=="string"?ks.transform(e.transform):e.transform)}),a=nt(function(){return qr("mask",oh(e.mask))}),l=nt(function(){return $b(i.value,ot(ot(ot(ot({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});is(l,function(u){if(!u)return Jb("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=nt(function(){return l.value?Jl(l.value.abstract[0],{},r):null});return function(){return c.value}}});Pl({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Qd.familyPrefix,s=nt(function(){return["".concat(i,"-layers")].concat(ja(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return _d("div",{class:s.value},r.default?r.default():[])}}});Pl({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Qd.familyPrefix,s=nt(function(){return qr("classes",[].concat(ja(e.counter?["".concat(i,"-layers-counter")]:[]),ja(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=nt(function(){return qr("transform",typeof e.transform=="string"?ks.transform(e.transform):e.transform)}),a=nt(function(){var c=Vb(e.value.toString(),ot(ot({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=nt(function(){return Jl(a.value,{},r)});return function(){return l.value}}});/**
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
 */const em=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(m=64)),r.push(n[u],n[h],n[m],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(em(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const m=s<<2|a>>4;if(r.push(m),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},tw=function(t){const e=em(t);return tm.encodeByteArray(e,!0)},nm=function(t){return tw(t).replace(/\./g,"")},nw=function(t){try{return tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class rw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function im(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iw(){return Ae().indexOf("Electron/")>=0}function om(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sw(){return Ae().indexOf("MSAppHost/")>=0}function ow(){return typeof indexedDB=="object"}function aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const lw="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lw,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function cw(t,e){return t.replace(uw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uw=/\{\$([^}]+)}/g;function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ah(s)&&ah(o)){if(!xs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ah(t){return t!==null&&typeof t=="object"}/**
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
 */function Ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fw(t,e){const n=new dw(t,e);return n.subscribe.bind(n)}class dw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qo),i.error===void 0&&(i.error=Qo),i.complete===void 0&&(i.complete=Qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qo(){}/**
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
 */function Ti(t){return t&&t._delegate?t._delegate:t}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class pw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vw(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(t){return t===yn?void 0:t}function vw(t){return t.instantiationMode==="EAGER"}/**
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
 */class yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const bw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ww=te.INFO,_w={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Ew=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_w[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Iw=(t,e)=>e.some(n=>t instanceof n);let lh,ch;function Tw(){return lh||(lh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sw(){return ch||(ch=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const am=new WeakMap,Ha=new WeakMap,lm=new WeakMap,Jo=new WeakMap,tc=new WeakMap;function Aw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&am.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function kw(t){if(Ha.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ha.set(t,e)}let Ka={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cw(t){Ka=t(Ka)}function xw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zo(this),e,...n);return lm.set(r,e.sort?e.sort():[e]),nn(r)}:Sw().includes(t)?function(...e){return t.apply(Zo(this),e),nn(am.get(this))}:function(...e){return nn(t.apply(Zo(this),e))}}function Ow(t){return typeof t=="function"?xw(t):(t instanceof IDBTransaction&&kw(t),Iw(t,Tw())?new Proxy(t,Ka):t)}function nn(t){if(t instanceof IDBRequest)return Aw(t);if(Jo.has(t))return Jo.get(t);const e=Ow(t);return e!==t&&(Jo.set(t,e),tc.set(e,t)),e}const Zo=t=>tc.get(t);function Nw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Dw=["get","getKey","getAll","getAllKeys","count"],Rw=["put","add","delete","clear"],ea=new Map;function uh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ea.get(e))return ea.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Rw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ea.set(e,s),s}Cw(t=>({...t,get:(e,n,r)=>uh(e,n)||t.get(e,n,r),has:(e,n)=>!!uh(e,n)||t.has(e,n)}));/**
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
 */class Pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qa="@firebase/app",hh="0.7.31";/**
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
 */const Mn=new ec("@firebase/app"),Lw="@firebase/app-compat",Fw="@firebase/analytics-compat",Uw="@firebase/analytics",$w="@firebase/app-check-compat",Vw="@firebase/app-check",Bw="@firebase/auth",jw="@firebase/auth-compat",zw="@firebase/database",Hw="@firebase/database-compat",Kw="@firebase/functions",qw="@firebase/functions-compat",Ww="@firebase/installations",Gw="@firebase/installations-compat",Yw="@firebase/messaging",Xw="@firebase/messaging-compat",Qw="@firebase/performance",Jw="@firebase/performance-compat",Zw="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",n_="@firebase/storage-compat",r_="@firebase/firestore",i_="@firebase/firestore-compat",s_="firebase",o_="9.9.3";/**
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
 */const cm="[DEFAULT]",a_={[qa]:"fire-core",[Lw]:"fire-core-compat",[Uw]:"fire-analytics",[Fw]:"fire-analytics-compat",[Vw]:"fire-app-check",[$w]:"fire-app-check-compat",[Bw]:"fire-auth",[jw]:"fire-auth-compat",[zw]:"fire-rtdb",[Hw]:"fire-rtdb-compat",[Kw]:"fire-fn",[qw]:"fire-fn-compat",[Ww]:"fire-iid",[Gw]:"fire-iid-compat",[Yw]:"fire-fcm",[Xw]:"fire-fcm-compat",[Qw]:"fire-perf",[Jw]:"fire-perf-compat",[Zw]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[n_]:"fire-gcs-compat",[r_]:"fire-fst",[i_]:"fire-fst-compat","fire-js":"fire-js",[s_]:"fire-js-all"};/**
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
 */const Os=new Map,Wa=new Map;function l_(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Wa.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Wa.set(e,t);for(const n of Os.values())l_(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const c_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Ei("app","Firebase",c_);/**
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
 */class u_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Si=o_;function h_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:cm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ln.create("bad-app-name",{appName:String(r)});const i=Os.get(r);if(i){if(xs(t,i.options)&&xs(n,i.config))return i;throw Ln.create("duplicate-app",{appName:r})}const s=new yw(r);for(const a of Wa.values())s.addComponent(a);const o=new u_(t,n,s);return Os.set(r,o),o}function um(t=cm){const e=Os.get(t);if(!e)throw Ln.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=a_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}hr(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const f_="firebase-heartbeat-database",d_=1,oi="firebase-heartbeat-store";let ta=null;function hm(){return ta||(ta=Nw(f_,d_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),ta}async function m_(t){var e;try{return(await hm()).transaction(oi).objectStore(oi).get(fm(t))}catch(n){if(n instanceof Ht)Mn.warn(n.message);else{const r=Ln.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mn.warn(r.message)}}}async function fh(t,e){var n;try{const i=(await hm()).transaction(oi,"readwrite");return await i.objectStore(oi).put(e,fm(t)),i.done}catch(r){if(r instanceof Ht)Mn.warn(r.message);else{const i=Ln.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mn.warn(i.message)}}}function fm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const p_=1024,g_=30*24*60*60*1e3;class v_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=g_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dh(),{heartbeatsToSend:n,unsentEntries:r}=y_(this._heartbeatsCache.heartbeats),i=nm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function dh(){return new Date().toISOString().substring(0,10)}function y_(t,e=p_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class b_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ow()?aw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await m_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mh(t){return nm(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function w_(t){hr(new Pn("platform-logger",e=>new Pw(e),"PRIVATE")),hr(new Pn("heartbeat",e=>new v_(e),"PRIVATE")),rn(qa,hh,t),rn(qa,hh,"esm2017"),rn("fire-js","")}w_("");var __="firebase",E_="9.9.3";/**
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
 */rn(__,E_,"app");function rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I_=dm,mm=new Ei("auth","Firebase",dm());/**
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
 */const ph=new ec("@firebase/auth");function us(t,...e){ph.logLevel<=te.ERROR&&ph.error(`Auth (${Si}): ${t}`,...e)}/**
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
 */function St(t,...e){throw ic(t,...e)}function Et(t,...e){return ic(t,...e)}function pm(t,e,n){const r=Object.assign(Object.assign({},I_()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function T_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),pm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mm.create(t,...e)}function H(t,e,...n){if(!t)throw ic(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw us(e),new Error(e)}function Ut(t,e){t||Ot(e)}/**
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
 */const gh=new Map;function Nt(t){Ut(t instanceof Function,"Expected a class definition");let e=gh.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gh.set(t,e),e)}/**
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
 */function S_(t,e){const n=nc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xs(s,e!=null?e:{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function A_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function k_(){return vh()==="http:"||vh()==="https:"}function vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function C_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k_()||im()||"connection"in navigator)?navigator.onLine:!0}function x_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=rm()||sm()}get(){return C_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sc(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const O_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const N_=new Ai(3e4,6e4);function D_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,n,r,i={}){return vm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gm.fetch()(ym(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},O_),e);try{const i=new P_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pm(t,u,c);St(t,u)}}catch(i){if(i instanceof Ht)throw i;St(t,"network-request-failed")}}async function R_(t,e,n,r,i={}){const s=await uo(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ym(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sc(t.config,i):`${t.config.apiScheme}://${i}`}class P_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),N_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function M_(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function L_(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F_(t,e=!1){const n=Ti(t),r=await n.getIdToken(e),i=oc(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wr(na(i.auth_time)),issuedAtTime:Wr(na(i.iat)),expirationTime:Wr(na(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function na(t){return Number(t)*1e3}function oc(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return us("JWT malformed, contained fewer than 3 sections"),null;try{const s=nw(r);return s?JSON.parse(s):(us("Failed to decode base64 JWT payload"),null)}catch(s){return us("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function U_(t){const e=oc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&$_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class V_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ns(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ai(t,L_(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z_(s.providerUserInfo):[],a=j_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bm(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function B_(t){const e=Ti(t);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z_(t){return t.map(e=>{var{providerId:n}=e,r=rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function H_(t,e){const n=await vm(t,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ym(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):U_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await H_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new li;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Gt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return F_(this,e)}reload(){return B_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ai(this,M_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:z,isAnonymous:Z,providerData:pe,stsTokenManager:we}=n;H(M&&we,e,"internal-error");const tt=li.fromJSON(this.name,we);H(typeof M=="string",e,"internal-error"),Gt(h,e.name),Gt(m,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof Z=="boolean",e,"internal-error"),Gt(p,e.name),Gt(E,e.name),Gt(R,e.name),Gt(k,e.name),Gt(y,e.name),Gt(A,e.name);const Ie=new kn({uid:M,auth:e,email:m,emailVerified:z,displayName:h,isAnonymous:Z,photoURL:E,phoneNumber:p,tenantId:R,stsTokenManager:tt,createdAt:y,lastLoginAt:A});return pe&&Array.isArray(pe)&&(Ie.providerData=pe.map(mn=>Object.assign({},mn))),k&&(Ie._redirectEventId=k),Ie}static async _fromIdTokenResponse(e,n,r=!1){const i=new li;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ns(s),s}}/**
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
 */class wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wm.type="NONE";const yh=wm;/**
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
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class sr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,s),this.fullPersistenceKey=hs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sr(Nt(yh),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nt(yh);const o=hs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=kn._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new sr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new sr(s,e,r))}}/**
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
 */function bh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sm(e))return"Blackberry";if(Am(e))return"Webos";if(ac(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(Tm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _m(t=Ae()){return/firefox\//i.test(t)}function ac(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=Ae()){return/crios\//i.test(t)}function Im(t=Ae()){return/iemobile/i.test(t)}function Tm(t=Ae()){return/android/i.test(t)}function Sm(t=Ae()){return/blackberry/i.test(t)}function Am(t=Ae()){return/webos/i.test(t)}function ho(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function K_(t=Ae()){var e;return ho(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q_(){return om()&&document.documentMode===10}function km(t=Ae()){return ho(t)||Tm(t)||Am(t)||Sm(t)||/windows phone/i.test(t)||Im(t)}function W_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cm(t,e=[]){let n;switch(t){case"Browser":n=bh(Ae());break;case"Worker":n=`${bh(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${r}`}/**
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
 */class G_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Y_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wh(this),this.idTokenSubscription=new wh(this),this.beforeStateQueue=new G_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ns(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ti(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function lc(t){return Ti(t)}class wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=fw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
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
 */async function or(t,e){return R_(t,"POST","/v1/accounts:signInWithIdp",D_(t,e))}/**
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
 */const X_="http://localhost";class Fn extends xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,or(e,n)}buildRequest(){const e={requestUri:X_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
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
 */class cc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ki extends cc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends ki{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class Jt extends ki{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */class Zt extends ki{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=_h(r);return new fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_h(r);return new fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _h(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ds extends Ht{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ds(e,n,r,i)}}function Om(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(t,s,e,r):s})}async function Q_(t,e,n=!1){const r=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fr._forOperation(t,"link",r)}/**
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
 */async function J_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ai(t,Om(i,s,e,t),n);H(o.idToken,i,"internal-error");const a=oc(o.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(t.uid===l,i,"user-mismatch"),fr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&St(i,"user-mismatch"),o}}/**
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
 */async function Z_(t,e,n=!1){const r="signIn",i=await Om(t,r,e),s=await fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const Rs="__sak";/**
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
 */class Nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rs,"1"),this.storage.removeItem(Rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e1(){const t=Ae();return ac(t)||ho(t)}const t1=1e3,n1=10;class Dm extends Nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e1()&&W_(),this.fallbackToPolling=km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);q_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dm.type="LOCAL";const r1=Dm;/**
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
 */class Rm extends Nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rm.type="SESSION";const Pm=Rm;/**
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
 */function i1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await i1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fo.receivers=[];/**
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
 */function uc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=uc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function o1(t){It().location.href=t}/**
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
 */function Mm(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function a1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function c1(){return Mm()?self:null}/**
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
 */const Lm="firebaseLocalStorageDb",u1=1,Ps="firebaseLocalStorage",Fm="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mo(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function h1(){const t=indexedDB.deleteDatabase(Lm);return new Ci(t).toPromise()}function Ya(){const t=indexedDB.open(Lm,u1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ps,{keyPath:Fm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ps)?e(r):(r.close(),await h1(),e(await Ya()))})})}async function Eh(t,e,n){const r=mo(t,!0).put({[Fm]:e,value:n});return new Ci(r).toPromise()}async function f1(t,e){const n=mo(t,!1).get(e),r=await new Ci(n).toPromise();return r===void 0?null:r.value}function Ih(t,e){const n=mo(t,!0).delete(e);return new Ci(n).toPromise()}const d1=800,m1=3;class Um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>m1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fo._getInstance(c1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a1(),!this.activeServiceWorker)return;this.sender=new s1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await Eh(e,Rs,"1"),await Ih(e,Rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mo(i,!1).getAll();return new Ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Um.type="LOCAL";const p1=Um;/**
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
 */function g1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function v1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",g1().appendChild(r)})}function y1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ai(3e4,6e4);/**
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
 */function $m(t,e){return e?Nt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hc extends xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b1(t){return Z_(t.auth,new hc(t),t.bypassAuthState)}function w1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),J_(n,new hc(t),t.bypassAuthState)}async function _1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Q_(n,new hc(t),t.bypassAuthState)}/**
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
 */class Vm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b1;case"linkViaPopup":case"linkViaRedirect":return _1;case"reauthViaPopup":case"reauthViaRedirect":return w1;default:St(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const E1=new Ai(2e3,1e4);async function I1(t,e,n){const r=lc(t);T_(t,e,cc);const i=$m(r,n);return new _n(r,"signInViaPopup",e,i).executeNotNull()}class _n extends Vm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,E1.get())};e()}}_n.currentPopupAction=null;/**
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
 */const T1="pendingRedirect",fs=new Map;class S1 extends Vm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await A1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(t,e){const n=x1(e),r=C1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function k1(t,e){fs.set(t._key(),e)}function C1(t){return Nt(t._redirectPersistence)}function x1(t){return hs(T1,t.config.apiKey,t.name)}async function O1(t,e,n=!1){const r=lc(t),i=$m(r,e),o=await new S1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const N1=10*60*1e3;class D1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Th(e))}saveEventToCache(e){this.cachedEventUids.add(Th(e)),this.lastProcessedEventTime=Date.now()}}function Th(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bm(t);default:return!1}}/**
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
 */async function P1(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
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
 */const M1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L1=/^https?/;async function F1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P1(t);for(const n of e)try{if(U1(n))return}catch{}St(t,"unauthorized-domain")}function U1(t){const e=Ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!L1.test(n))return!1;if(M1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $1=new Ai(3e4,6e4);function Sh(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V1(t){return new Promise((e,n)=>{var r,i,s;function o(){Sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sh(),n(Et(t,"network-request-failed"))},timeout:$1.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const a=y1("iframefcb");return It()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},v1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ds=null,e})}let ds=null;function B1(t){return ds=ds||V1(t),ds}/**
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
 */const j1=new Ai(5e3,15e3),z1="__/auth/iframe",H1="emulator/auth/iframe",K1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W1(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sc(e,H1):`https://${t.config.authDomain}/${z1}`,r={apiKey:e.apiKey,appName:t.name,v:Si},i=q1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}async function G1(t){const e=await B1(t),n=It().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:W1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=It().setTimeout(()=>{s(o)},j1.get());function l(){It().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Y1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X1=500,Q1=600,J1="_blank",Z1="http://localhost";class Ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eE(t,e,n,r=X1,i=Q1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Y1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ae().toLowerCase();n&&(a=Em(c)?J1:n),_m(c)&&(e=e||Z1,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[p,E])=>`${m}${p}=${E},`,"");if(K_(c)&&a!=="_self")return tE(e||"",a),new Ah(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Ah(h)}function tE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nE="__/auth/handler",rE="emulator/auth/handler";function kh(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Si,eventId:i};if(e instanceof cc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof ki){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${iE(t)}?${Ii(a).slice(1)}`}function iE({config:t}){return t.emulator?sc(t,rE):`https://${t.authDomain}/${nE}`}/**
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
 */const ra="webStorageSupport";class sE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pm,this._completeRedirectFn=O1,this._overrideRedirectResult=k1}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=kh(e,n,r,Ga(),i);return eE(e,o,uc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),o1(kh(e,n,r,Ga(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G1(e),r=new D1(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ra,{type:ra},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ra];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return km()||ac()||ho()}}const oE=sE;var Ch="@firebase/auth",xh="0.20.5";/**
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
 */class aE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cE(t){hr(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cm(t)},u=new Y_(a,l,c);return A_(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new Pn("auth-internal",e=>{const n=lc(e.getProvider("auth").getImmediate());return(r=>new aE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Ch,xh,lE(t)),rn(Ch,xh,"esm2017")}/**
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
 */function uE(t=um()){const e=nc(t,"auth");return e.isInitialized()?e.getImmediate():S_(t,{popupRedirectResolver:oE,persistence:[p1,r1,Pm]})}cE("Browser");var hE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,fc=fc||{},V=hE||self;function Ms(){}function Xa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fE(t){return Object.prototype.hasOwnProperty.call(t,ia)&&t[ia]||(t[ia]=++dE)}var ia="closure_uid_"+(1e9*Math.random()>>>0),dE=0;function mE(t,e,n){return t.call.apply(t.bind,arguments)}function pE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function De(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?De=mE:De=pE,De.apply(null,arguments)}function Qi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function hn(){this.s=this.s,this.o=this.o}var gE=0;hn.prototype.s=!1;hn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gE!=0)&&fE(this)};hn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},zm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function vE(t){e:{var e=lI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Oh(t){return Array.prototype.concat.apply([],arguments)}function dc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ls(t){return/^[\s\xa0]*$/.test(t)}var Nh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ue(t,e){return t.indexOf(e)!=-1}function sa(t,e){return t<e?-1:t>e?1:0}var $e;e:{var Dh=V.navigator;if(Dh){var Rh=Dh.userAgent;if(Rh){$e=Rh;break e}}$e=""}function mc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Hm(t){const e={};for(const n in t)e[n]=t[n];return e}var Ph="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Km(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ph.length;s++)n=Ph[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pc(t){return pc[" "](t),t}pc[" "]=Ms;function yE(t){var e=_E;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var bE=Ue($e,"Opera"),dr=Ue($e,"Trident")||Ue($e,"MSIE"),qm=Ue($e,"Edge"),Qa=qm||dr,Wm=Ue($e,"Gecko")&&!(Ue($e.toLowerCase(),"webkit")&&!Ue($e,"Edge"))&&!(Ue($e,"Trident")||Ue($e,"MSIE"))&&!Ue($e,"Edge"),wE=Ue($e.toLowerCase(),"webkit")&&!Ue($e,"Edge");function Gm(){var t=V.document;return t?t.documentMode:void 0}var Fs;e:{var oa="",aa=function(){var t=$e;if(Wm)return/rv:([^\);]+)(\)|;)/.exec(t);if(qm)return/Edge\/([\d\.]+)/.exec(t);if(dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wE)return/WebKit\/(\S+)/.exec(t);if(bE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(aa&&(oa=aa?aa[1]:""),dr){var la=Gm();if(la!=null&&la>parseFloat(oa)){Fs=String(la);break e}}Fs=oa}var _E={};function EE(){return yE(function(){let t=0;const e=Nh(String(Fs)).split("."),n=Nh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=sa(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||sa(i[2].length==0,s[2].length==0)||sa(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ja;if(V.document&&dr){var Mh=Gm();Ja=Mh||parseInt(Fs,10)||void 0}else Ja=void 0;var IE=Ja,TE=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Ms,e),V.removeEventListener("test",Ms,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function ci(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Wm){e:{try{pc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ci.Z.h.call(this)}}Me(ci,Le);var SE={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oi="closure_listenable_"+(1e6*Math.random()|0),AE=0;function kE(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++AE,this.ca=this.fa=!1}function po(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function go(t){this.src=t,this.g={},this.h=0}go.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=el(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new kE(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Za(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=jm(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(po(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function el(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var gc="closure_lm_"+(1e6*Math.random()|0),ca={};function Ym(t,e,n,r,i){if(r&&r.once)return Qm(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ym(t,e[s],n,r,i);return null}return n=bc(n),t&&t[Oi]?t.N(e,n,xi(r)?!!r.capture:!!r,i):Xm(t,e,n,!1,r,i)}function Xm(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xi(i)?!!i.capture:!!i,a=yc(t);if(a||(t[gc]=a=new go(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Zm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CE(){function t(n){return e.call(t.src,t.listener,n)}var e=xE;return t}function Qm(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Qm(t,e[s],n,r,i);return null}return n=bc(n),t&&t[Oi]?t.O(e,n,xi(r)?!!r.capture:!!r,i):Xm(t,e,n,!0,r,i)}function Jm(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Jm(t,e[s],n,r,i);else r=xi(r)?!!r.capture:!!r,n=bc(n),t&&t[Oi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=el(s,n,r,i),-1<n&&(po(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=el(e,n,r,i)),(n=-1<t?e[t]:null)&&vc(n))}function vc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Oi])Za(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Zm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yc(e))?(Za(n,t),n.h==0&&(n.src=null,e[gc]=null)):po(t)}}}function Zm(t){return t in ca?ca[t]:ca[t]="on"+t}function xE(t,e){if(t.ca)t=!0;else{e=new ci(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&vc(t),t=n.call(r,e)}return t}function yc(t){return t=t[gc],t instanceof go?t:null}var ua="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(t){return typeof t=="function"?t:(t[ua]||(t[ua]=function(e){return t.handleEvent(e)}),t[ua])}function ke(){hn.call(this),this.i=new go(this),this.P=this,this.I=null}Me(ke,hn);ke.prototype[Oi]=!0;ke.prototype.removeEventListener=function(t,e,n,r){Jm(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(r,t),Km(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ji(o,r,!0,e)&&i}if(o=e.g=t,i=Ji(o,r,!0,e)&&i,i=Ji(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ji(o,r,!1,e)&&i}ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)po(n[r]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ji(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Za(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wc=V.JSON.stringify;function OE(){var t=tp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NE{constructor(){this.h=this.g=null}add(e,n){const r=ep.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ep=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new DE,t=>t.reset());class DE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RE(t){V.setTimeout(()=>{throw t},0)}function _c(t,e){tl||PE(),nl||(tl(),nl=!0),tp.add(t,e)}var tl;function PE(){var t=V.Promise.resolve(void 0);tl=function(){t.then(ME)}}var nl=!1,tp=new NE;function ME(){for(var t;t=OE();){try{t.h.call(t.g)}catch(n){RE(n)}var e=ep;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nl=!1}function vo(t,e){ke.call(this),this.h=t||1,this.g=e||V,this.j=De(this.kb,this),this.l=Date.now()}Me(vo,ke);N=vo.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(Ec(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ec(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){vo.Z.M.call(this),Ec(this),delete this.g};function Ic(t,e,n){if(typeof t=="function")n&&(t=De(t,n));else if(t&&typeof t.handleEvent=="function")t=De(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function np(t){t.g=Ic(()=>{t.g=null,t.i&&(t.i=!1,np(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LE extends hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:np(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){hn.call(this),this.h=t,this.g={}}Me(ui,hn);var Lh=[];function rp(t,e,n,r){Array.isArray(n)||(n&&(Lh[0]=n.toString()),n=Lh);for(var i=0;i<n.length;i++){var s=Ym(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ip(t){mc(t.g,function(e,n){this.g.hasOwnProperty(n)&&vc(e)},t),t.g={}}ui.prototype.M=function(){ui.Z.M.call(this),ip(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yo(){this.g=!0}yo.prototype.Aa=function(){this.g=!1};function FE(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function UE(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Zn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VE(t,n)+(r?" "+r:"")})}function $E(t,e){t.info(function(){return"TIMEOUT: "+e})}yo.prototype.info=function(){};function VE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wc(n)}catch{return e}}var jn={},Fh=null;function bo(){return Fh=Fh||new ke}jn.Ma="serverreachability";function sp(t){Le.call(this,jn.Ma,t)}Me(sp,Le);function hi(t){const e=bo();Re(e,new sp(e))}jn.STAT_EVENT="statevent";function op(t,e){Le.call(this,jn.STAT_EVENT,t),this.stat=e}Me(op,Le);function Be(t){const e=bo();Re(e,new op(e,t))}jn.Na="timingevent";function ap(t,e){Le.call(this,jn.Na,t),this.size=e}Me(ap,Le);function Ni(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var wo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},lp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tc(){}Tc.prototype.h=null;function Uh(t){return t.h||(t.h=t.i())}function cp(){}var Di={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Sc(){Le.call(this,"d")}Me(Sc,Le);function Ac(){Le.call(this,"c")}Me(Ac,Le);var rl;function _o(){}Me(_o,Tc);_o.prototype.g=function(){return new XMLHttpRequest};_o.prototype.i=function(){return{}};rl=new _o;function Ri(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ui(this),this.P=BE,t=Qa?125:void 0,this.W=new vo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new up}function up(){this.i=null,this.g="",this.h=!1}var BE=45e3,il={},Us={};N=Ri.prototype;N.setTimeout=function(t){this.P=t};function sl(t,e,n){t.K=1,t.v=Io($t(e)),t.s=n,t.U=!0,hp(t,null)}function hp(t,e){t.F=Date.now(),Pi(t),t.A=$t(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new up,t.g=Up(t.l,n?e:null,!t.s),0<t.O&&(t.L=new LE(De(t.Ia,t,t.g),t.O)),rp(t.V,t.g,"readystatechange",t.gb),e=t.H?Hm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hi(),FE(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&Dt(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const u=Dt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Qa||this.g&&(this.h.h||this.g.ga()||jh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),Eo(this);var n=this.g.ba();this.N=n;t:if(fp(this)){var r=jh(this.g);t="";var i=r.length,s=Dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Gr(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,UE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ls(a)){var c=a;break t}}c=null}if(n=c)Zn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ol(this,n);else{this.i=!1,this.o=3,Be(12),En(this),Gr(this);break e}}this.U?(dp(this,u,o),Qa&&this.i&&u==3&&(rp(this.V,this.W,"tick",this.fb),this.W.start())):(Zn(this.j,this.m,o,null),ol(this,o)),u==4&&En(this),this.i&&!this.I&&(u==4?Pp(this.l,this):(this.i=!1,Pi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),En(this),Gr(this)}}}catch{}finally{}};function fp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function dp(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jE(t,n),i==Us){e==4&&(t.o=4,Be(14),r=!1),Zn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==il){t.o=4,Be(15),Zn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Zn(t.j,t.m,i,null),ol(t,i);fp(t)&&i!=Us&&i!=il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mc(e),e.L=!0,Be(11))):(Zn(t.j,t.m,n,"[Invalid Chunked Response]"),En(t),Gr(t))}N.fb=function(){if(this.g){var t=Dt(this.g),e=this.g.ga();this.C<e.length&&(Eo(this),dp(this,t,e),this.i&&t!=4&&Pi(this))}};function jE(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Us:(n=Number(e.substring(n,r)),isNaN(n)?il:(r+=1,r+n>e.length?Us:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.I=!0,En(this)};function Pi(t){t.Y=Date.now()+t.P,mp(t,t.P)}function mp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ni(De(t.eb,t),e)}function Eo(t){t.B&&(V.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($E(this.j,this.A),this.K!=2&&(hi(),Be(17)),En(this),this.o=2,Gr(this)):mp(this,this.Y-t)};function Gr(t){t.l.G==0||t.I||Pp(t.l,t)}function En(t){Eo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ec(t.W),ip(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ol(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||al(n.i,t))){if(n.I=t.N,!t.J&&al(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)js(n),Ao(n);else break e;Pc(n),Be(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ni(De(n.ab,n),6e3));if(1>=_p(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else In(n,11)}else if((t.J||n.g==t)&&js(n),!Ls(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;!s.g&&(Ue(E,"spdy")||Ue(E,"quic")||Ue(E,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xc(s,s.h),s.h=null))}if(r.D){const R=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.sa=R,he(r.F,r.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Fp(r,r.H?r.la:null,r.W),o.J){Ep(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Eo(a),Pi(a)),r.g=o}else Dp(r);0<n.l.length&&ko(n)}else c[0]!="stop"&&c[0]!="close"||In(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?In(n,7):Rc(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}hi(4)}catch{}}function zE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Xa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xa(t)||typeof t=="string")zm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Xa(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=zE(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Sr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Sr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}N=Sr.prototype;N.R=function(){Cc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return Cc(this),this.g.concat()};function Cc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Un(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Un(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}N.get=function(t,e){return Un(this.h,t)?this.h[t]:e};N.set=function(t,e){Un(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var pp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function HE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $n(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $n){this.g=e!==void 0?e:t.g,$s(this,t.j),this.s=t.s,Vs(this,t.i),Bs(this,t.m),this.l=t.l,e=t.h;var n=new fi;n.i=e.i,e.g&&(n.g=new Sr(e.g),n.h=e.h),$h(this,n),this.o=t.o}else t&&(n=String(t).match(pp))?(this.g=!!e,$s(this,n[1]||"",!0),this.s=Yr(n[2]||""),Vs(this,n[3]||"",!0),Bs(this,n[4]),this.l=Yr(n[5]||"",!0),$h(this,n[6]||"",!0),this.o=Yr(n[7]||"")):(this.g=!!e,this.h=new fi(null,this.g))}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push($r(e,Vh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($r(e,Vh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push($r(n,n.charAt(0)=="/"?YE:GE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$r(n,QE)),t.join("")};function $t(t){return new $n(t)}function $s(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vs(t,e,n){t.i=n?Yr(e,!0):e}function Bs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $h(t,e,n){e instanceof fi?(t.h=e,JE(t.h,t.g)):(n||(e=$r(e,XE)),t.h=new fi(e,t.g))}function he(t,e,n){t.h.set(e,n)}function Io(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function KE(t){return t instanceof $n?$t(t):new $n(t,void 0)}function qE(t,e,n,r){var i=new $n(null,void 0);return t&&$s(i,t),e&&Vs(i,e),n&&Bs(i,n),r&&(i.l=r),i}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $r(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,WE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function WE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vh=/[#\/\?@]/g,GE=/[#\?:]/g,YE=/[#\?]/g,XE=/[#\?@]/g,QE=/#/g;function fi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new Sr,t.h=0,t.i&&HE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=fi.prototype;N.add=function(t,e){fn(this),this.i=null,t=Ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gp(t,e){fn(t),e=Ar(t,e),Un(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Un(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Cc(t)))}function vp(t,e){return fn(t),e=Ar(t,e),Un(t.g.h,e)}N.forEach=function(t,e){fn(this),this.g.forEach(function(n,r){zm(n,function(i){t.call(e,i,r,this)},this)},this)};N.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};N.R=function(t){fn(this);var e=[];if(typeof t=="string")vp(this,t)&&(e=Oh(e,this.g.get(Ar(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Oh(e,t[n])}return e};N.set=function(t,e){return fn(this),this.i=null,t=Ar(this,t),vp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function yp(t,e,n){gp(t,e),0<n.length&&(t.i=null,t.g.set(Ar(t,e),dc(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JE(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gp(this,r),yp(this,i,n))},t)),t.j=e}var ZE=class{constructor(t,e){this.h=t,this.g=e}};function bp(t){this.l=t||eI,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eI=10;function wp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _p(t){return t.h?1:t.g?t.g.size:0}function al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xc(t,e){t.g?t.g.add(e):t.h=e}function Ep(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bp.prototype.cancel=function(){if(this.i=Ip(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ip(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return dc(t.i)}function Oc(){}Oc.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Oc.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function tI(){this.g=new Oc}function nI(t,e,n){const r=n||"";try{kc(t,function(i,s){let o=i;xi(i)&&(o=wc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rI(t,e){const n=new yo;if(V.Image){const r=new Image;r.onload=Qi(Zi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qi(Zi,n,r,"TestLoadImage: error",!1,e),r.onabort=Qi(Zi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qi(Zi,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zi(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Mi(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Mi,Tc);Mi.prototype.g=function(){return new To(this.l,this.j)};Mi.prototype.i=function(t){return function(){return t}}({});function To(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(To,ke);var Nc=0;N=To.prototype;N.open=function(t,e){if(this.readyState!=Nc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=Nc};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Tp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Li(this):di(this),this.readyState==3&&Tp(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Li(this))};N.Ta=function(t){this.g&&(this.response=t,Li(this))};N.ha=function(){this.g&&Li(this)};function Li(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iI=V.JSON.parse;function be(t){ke.call(this),this.headers=new Sr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sp,this.K=this.L=!1}Me(be,ke);var Sp="",sI=/^https?$/i,oI=["POST","PUT"];N=be.prototype;N.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rl.g(),this.C=this.u?Uh(this.u):Uh(rl),this.g.onreadystatechange=De(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Bh(this,s);return}t=n||"";const i=new Sr(this.headers);r&&kc(r,function(s,o){i.set(o,s)}),r=vE(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=jm(oI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Cp(this),0<this.B&&((this.K=aI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=De(this.pa,this)):this.A=Ic(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Bh(this,s)}};function aI(t){return dr&&EE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function lI(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof fc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function Bh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ap(t),So(t)}function Ap(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),So(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),So(this,!0)),be.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?kp(this):this.cb())};N.cb=function(){kp(this)};function kp(t){if(t.h&&typeof fc<"u"&&(!t.C[1]||Dt(t)!=4||t.ba()!=2)){if(t.v&&Dt(t)==4)Ic(t.Fa,0,t);else if(Re(t,"readystatechange"),Dt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(pp)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!sI.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<Dt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ap(t)}}finally{So(t)}}}}function So(t,e){if(t.g){Cp(t);const n=t.g,r=t.C[0]?Ms:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function Cp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function Dt(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<Dt(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iI(e)}};function jh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Sp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function cI(t){let e="";return mc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Dc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Mr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xp(t){this.za=0,this.l=[],this.h=new yo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Mr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Mr("baseRetryDelayMs",5e3,t),this.$a=Mr("retryDelaySeedMs",1e4,t),this.Ya=Mr("forwardChannelMaxRetries",2,t),this.ra=Mr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bp(t&&t.concurrentRequestLimit),this.Ca=new tI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=xp.prototype;N.ma=8;N.G=1;function Rc(t){if(Op(t),t.G==3){var e=t.V++,n=$t(t.F);he(n,"SID",t.J),he(n,"RID",e),he(n,"TYPE","terminate"),Fi(t,n),e=new Ri(t,t.h,e,void 0),e.K=2,e.v=Io($t(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Up(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pi(e)}Lp(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ao(t){t.g&&(Mc(t),t.g.cancel(),t.g=null)}function Op(t){Ao(t),t.u&&(V.clearTimeout(t.u),t.u=null),js(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function ha(t,e){t.l.push(new ZE(t.Za++,e)),t.G==3&&ko(t)}function ko(t){wp(t.i)||t.m||(t.m=!0,_c(t.Ha,t),t.C=0)}function uI(t,e){return _p(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ni(De(t.Ha,t,e),Mp(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ri(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Hm(s),Km(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Np(this,i,e),n=$t(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Fi(this,n),this.o&&s&&Dc(n,this.o,s),xc(this.i,i),this.Ra&&he(n,"TYPE","init"),this.ja?(he(n,"$req",e),he(n,"SID","null"),i.$=!0,sl(i,n,null)):sl(i,n,e),this.G=2}}else this.G==3&&(t?zh(this,t):this.l.length==0||wp(this.i)||zh(this))};function zh(t,e){var n;e?n=e.m:n=t.V++;const r=$t(t.F);he(r,"SID",t.J),he(r,"RID",n),he(r,"AID",t.U),Fi(t,r),t.o&&t.s&&Dc(r,t.o,t.s),n=new Ri(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Np(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xc(t.i,n),sl(n,r,e)}function Fi(t,e){t.j&&kc({},function(n,r){he(e,r,n)})}function Np(t,e,n){n=Math.min(t.l.length,n);var r=t.j?De(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{nI(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Dp(t){t.g||t.u||(t.Y=1,_c(t.Ga,t),t.A=0)}function Pc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ni(De(t.Ga,t),Mp(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,Rp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ni(De(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Be(10),Ao(this),Rp(this))};function Mc(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Rp(t){t.g=new Ri(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);he(e,"RID","rpc"),he(e,"SID",t.J),he(e,"CI",t.N?"0":"1"),he(e,"AID",t.U),Fi(t,e),he(e,"TYPE","xmlhttp"),t.o&&t.s&&Dc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Io($t(e)),n.s=null,n.U=!0,hp(n,t)}N.ab=function(){this.v!=null&&(this.v=null,Ao(this),Pc(this),Be(19))};function js(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Pp(t,e){var n=null;if(t.g==e){js(t),Mc(t),t.g=null;var r=2}else if(al(t.i,e))n=e.D,Ep(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=bo(),Re(r,new ap(r,n)),ko(t)}else Dp(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&uI(t,e)||r==2&&Pc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:In(t,5);break;case 4:In(t,10);break;case 3:In(t,6);break;default:In(t,2)}}}function Mp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function In(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=De(t.jb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||$s(n,"https"),Io(n)),rI(n.toString(),r)}else Be(2);t.G=0,t.j&&t.j.va(e),Lp(t),Op(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Be(2)):(this.h.info("Failed to ping google.com"),Be(1))};function Lp(t){t.G=0,t.I=-1,t.j&&((Ip(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,dc(t.l),t.l.length=0),t.j.ua())}function Fp(t,e,n){let r=KE(n);if(r.i!="")e&&Vs(r,e+"."+r.i),Bs(r,r.m);else{const i=V.location;r=qE(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&mc(t.aa,function(i,s){he(r,s,i)}),e=t.D,n=t.sa,e&&n&&he(r,e,n),he(r,"VER",t.ma),Fi(t,r),r}function Up(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new be(new Mi({ib:!0})):new be(t.qa),e.L=t.H,e}function $p(){}N=$p.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function zs(){if(dr&&!(10<=Number(IE)))throw Error("Environmental error: no available transport.")}zs.prototype.g=function(t,e){return new Ze(t,e)};function Ze(t,e){ke.call(this),this.g=new xp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ls(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ls(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}Me(Ze,ke);Ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),_c(De(t.hb,t,e))),Be(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Fp(t,null,t.W),ko(t)};Ze.prototype.close=function(){Rc(this.g)};Ze.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ha(this.g,e)}else this.v?(e={},e.__data__=wc(t),ha(this.g,e)):ha(this.g,t)};Ze.prototype.M=function(){this.g.j=null,delete this.j,Rc(this.g),delete this.g,Ze.Z.M.call(this)};function Vp(t){Sc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Vp,Sc);function Bp(){Ac.call(this),this.status=1}Me(Bp,Ac);function kr(t){this.g=t}Me(kr,$p);kr.prototype.xa=function(){Re(this.g,"a")};kr.prototype.wa=function(t){Re(this.g,new Vp(t))};kr.prototype.va=function(t){Re(this.g,new Bp)};kr.prototype.ua=function(){Re(this.g,"b")};zs.prototype.createWebChannel=zs.prototype.g;Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;wo.NO_ERROR=0;wo.TIMEOUT=8;wo.HTTP_ERROR=6;lp.COMPLETE="complete";cp.EventType=Di;Di.OPEN="a";Di.CLOSE="b";Di.ERROR="c";Di.MESSAGE="d";ke.prototype.listen=ke.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.La;be.prototype.getLastErrorCode=be.prototype.Da;be.prototype.getStatus=be.prototype.ba;be.prototype.getResponseJson=be.prototype.Qa;be.prototype.getResponseText=be.prototype.ga;be.prototype.send=be.prototype.ea;var hI=function(){return new zs},fI=function(){return bo()},fa=wo,dI=lp,mI=jn,Hh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},pI=Mi,es=cp,gI=be;const Kh="@firebase/firestore";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let Cr="9.9.2";/**
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
 */const Vn=new ec("@firebase/firestore");function qh(){return Vn.logLevel}function P(t,...e){if(Vn.logLevel<=te.DEBUG){const n=e.map(Lc);Vn.debug(`Firestore (${Cr}): ${t}`,...n)}}function Vt(t,...e){if(Vn.logLevel<=te.ERROR){const n=e.map(Lc);Vn.error(`Firestore (${Cr}): ${t}`,...n)}}function Wh(t,...e){if(Vn.logLevel<=te.WARN){const n=e.map(Lc);Vn.warn(`Firestore (${Cr}): ${t}`,...n)}}function Lc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+t;throw Vt(e),new Error(e)}function ye(t,e){t||G()}function ee(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class bI{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new vI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new qe(e)}}class wI{constructor(e,n,r){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class _I{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new wI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class II{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.p=n.token,new EI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function TI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function mr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ye(0,0))}static max(){return new W(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends mi{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const SI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends mi{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return SI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(me.fromString(e))}static fromName(e){return new $(me.fromString(e).popFirst(5))}static empty(){return new $(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new me(e.slice()))}}function AI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new ln(i,$.empty(),e)}function kI(t){return new ln(t.readTime,t.key,-1)}class ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ln(W.min(),$.empty(),-1)}static max(){return new ln(W.max(),$.empty(),-1)}}function CI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fc(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==xI)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Gh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Co(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Uc.ot=-1;class Ce{constructor(e,n){this.comparator=e,this.root=n||xe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ts(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ts(this.root,e,this.comparator,!1)}getReverseIterator(){return new ts(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ts(this.root,e,this.comparator,!0)}}class ts{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:xe.RED,this.left=i!=null?i:xe.EMPTY,this.right=s!=null?s:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yh(this.data.getIterator())}getIteratorFrom(e){return new Yh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Yh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xn{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new xn([])}unionWith(e){let n=new _e(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const DI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=DI.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
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
 */function zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hp(t){const e=t.mapValue.fields.__previous_value__;return zp(e)?Hp(e):e}function pi(t){const e=cn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class RI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function xo(t){return t==null}function ll(t){return t===0&&1/t==-1/0}/**
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
 */const ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zp(t)?4:PI(t)?9007199254740991:10:G()}function At(t,e){if(t===e)return!0;const n=Bn(t);if(n!==Bn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=cn(r.timestampValue),o=cn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return pr(r.bytesValue).isEqual(pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ve(r.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ve(r.integerValue)===ve(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ve(r.doubleValue),o=ve(i.doubleValue);return s===o?ll(s)===ll(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mr(t.arrayValue.values||[],e.arrayValue.values||[],At);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Gh(s)!==Gh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!At(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function gi(t,e){return(t.values||[]).find(n=>At(n,e))!==void 0}function vr(t,e){if(t===e)return 0;const n=Bn(t),r=Bn(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ve(i.integerValue||i.doubleValue),a=ve(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xh(t.timestampValue,e.timestampValue);case 4:return Xh(pi(t),pi(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=pr(i),a=pr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ne(o[l],a[l]);if(c!==0)return c}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(ve(i.latitude),ve(s.latitude));return o!==0?o:ne(ve(i.longitude),ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=vr(o[l],a[l]);if(c)return c}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ns.mapValue&&s===ns.mapValue)return 0;if(i===ns.mapValue)return 1;if(s===ns.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ne(a[u],c[u]);if(h!==0)return h;const m=vr(o[a[u]],l[c[u]]);if(m!==0)return m}return ne(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Xh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=cn(t),r=cn(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function ar(t){return cl(t)}function cl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=cn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=cl(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${cl(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function ul(t){return!!t&&"integerValue"in t}function $c(t){return!!t&&"arrayValue"in t}function Qh(t){return!!t&&"nullValue"in t}function Jh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function Xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Co(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];da(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Co(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Xr(this.value))}}/**
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
 */class Oe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Oe(e,0,W.min(),W.min(),yt.empty(),0)}static newFoundDocument(e,n,r){return new Oe(e,1,n,W.min(),r,0)}static newNoDocument(e,n){return new Oe(e,2,n,W.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,W.min(),yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class MI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Zh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MI(t,e,n,r,i,s,o)}function Vc(t){const e=ee(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ar(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ar(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ar(r)).join(",")),e.ut=n}return e.ut}function LI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ar(r.value)}`;var r}).join(", ")}]`),xo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ar(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ar(n)).join(",")),`Target(${e})`}function Bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!HI(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!At(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tf(t.startAt,e.startAt)&&tf(t.endAt,e.endAt)}function hl(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ge extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new FI(e,n,r):n==="array-contains"?new VI(e,r):n==="in"?new BI(e,r):n==="not-in"?new jI(e,r):n==="array-contains-any"?new zI(e,r):new Ge(e,n,r)}static ct(e,n,r){return n==="in"?new UI(e,r):new $I(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(vr(n,this.value)):n!==null&&Bn(this.value)===Bn(n)&&this.at(vr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class FI extends Ge{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.at(n)}}class UI extends Ge{constructor(e,n){super(e,"in",n),this.keys=Kp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $I extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Kp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class VI extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $c(n)&&gi(n.arrayValue,this.value)}}class BI extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class jI extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class zI extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}class Hs{constructor(e,n){this.position=e,this.inclusive=n}}class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function HI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ef(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!At(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function KI(t,e,n,r,i,s,o,a){return new Oo(t,e,n,r,i,s,o,a)}function jc(t){return new Oo(t)}function nf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function WI(t){for(const e of t.filters)if(e.ht())return e.field;return null}function GI(t){return t.collectionGroup!==null}function vi(t){const e=ee(t);if(e.lt===null){e.lt=[];const n=WI(e),r=qI(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Qr(n)),e.lt.push(new Qr(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Qr(We.keyField(),s))}}}return e.lt}function Bt(t){const e=ee(t);if(!e.ft)if(e.limitType==="F")e.ft=Zh(e.path,e.collectionGroup,vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of vi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qr(s.field,o))}const r=e.endAt?new Hs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Hs(e.startAt.position,e.startAt.inclusive):null;e.ft=Zh(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function fl(t,e,n){return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function No(t,e){return Bc(Bt(t),Bt(e))&&t.limitType===e.limitType}function qp(t){return`${Vc(Bt(t))}|lt:${t.limitType}`}function dl(t){return`Query(target=${LI(Bt(t))}; limitType=${t.limitType})`}function zc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=ef(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,vi(n),r)||n.endAt&&!function(i,s,o){const a=ef(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,vi(n),r))}(t,e)}function YI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wp(t){return(e,n)=>{let r=!1;for(const i of vi(t)){const s=XI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XI(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vr(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */function QI(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ll(e)?"-0":e}}function JI(t){return{integerValue:""+t}}/**
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
 */class Do{constructor(){this._=void 0}}function ZI(t,e,n){return t instanceof ml?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ks?Gp(t,e):t instanceof qs?Yp(t,e):function(r,i){const s=tT(r,i),o=rf(s)+rf(r._t);return ul(s)&&ul(r._t)?JI(o):QI(r.wt,o)}(t,e)}function eT(t,e,n){return t instanceof Ks?Gp(t,e):t instanceof qs?Yp(t,e):n}function tT(t,e){return t instanceof pl?ul(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ml extends Do{}class Ks extends Do{constructor(e){super(),this.elements=e}}function Gp(t,e){const n=Xp(e);for(const r of t.elements)n.some(i=>At(i,r))||n.push(r);return{arrayValue:{values:n}}}class qs extends Do{constructor(e){super(),this.elements=e}}function Yp(t,e){let n=Xp(e);for(const r of t.elements)n=n.filter(i=>!At(i,r));return{arrayValue:{values:n}}}class pl extends Do{constructor(e,n){super(),this.wt=e,this._t=n}}function rf(t){return ve(t.integerValue||t.doubleValue)}function Xp(t){return $c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ks&&r instanceof Ks||n instanceof qs&&r instanceof qs?mr(n.elements,r.elements,At):n instanceof pl&&r instanceof pl?At(n._t,r._t):n instanceof ml&&r instanceof ml}(t.transform,e.transform)}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hc{}function Qp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iT(t.key,On.none()):new Kc(t.key,t.data,On.none());{const n=t.data,r=yt.empty();let i=new _e(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ro(t.key,r,new xn(i.toArray()),On.none())}}function rT(t,e,n){t instanceof Kc?function(r,i,s){const o=r.value.clone(),a=of(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ro?function(r,i,s){if(!ms(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=of(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Jp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Jr(t,e,n,r){return t instanceof Kc?function(i,s,o,a){if(!ms(i.precondition,s))return o;const l=i.value.clone(),c=af(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ro?function(i,s,o,a){if(!ms(i.precondition,s))return o;const l=af(i.fieldTransforms,a,s),c=s.data;return c.setAll(Jp(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return ms(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mr(n,r,(i,s)=>nT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kc extends Hc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ro extends Hc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Jp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function of(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eT(o,a,n[i]))}return r}function af(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZI(s,o,e))}return r}class iT extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sT{constructor(e){this.count=e}}/**
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
 */var ge,Y;function Zp(t){if(t===void 0)return Vt("GRPC error has no .code"),x.UNKNOWN;switch(t){case ge.OK:return x.OK;case ge.CANCELLED:return x.CANCELLED;case ge.UNKNOWN:return x.UNKNOWN;case ge.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ge.INTERNAL:return x.INTERNAL;case ge.UNAVAILABLE:return x.UNAVAILABLE;case ge.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ge.NOT_FOUND:return x.NOT_FOUND;case ge.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ge.ABORTED:return x.ABORTED;case ge.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ge.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(Y=ge||(ge={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Co(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NI(this.inner)}size(){return this.innerSize}}/**
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
 */const oT=new Ce($.comparator);function un(){return oT}const eg=new Ce($.comparator);function Vr(...t){let e=eg;for(const n of t)e=e.insert(n.key,n);return e}function aT(t){let e=eg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tn(){return Zr()}function tg(){return Zr()}function Zr(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}new Ce($.comparator);const lT=new _e($.comparator);function J(...t){let e=lT;for(const n of t)e=e.add(n);return e}const cT=new _e(ne);function ng(){return cT}/**
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
 */class Po{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n)),new Po(W.min(),r,ng(),un(),J())}}class $i{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new $i(Pe.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
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
 */class ps{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class rg{constructor(e,n){this.targetId=e,this.It=n}}class ig{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lf{constructor(){this.Tt=0,this.Et=uf(),this.At=Pe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=J(),n=J(),r=J();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new $i(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=uf()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class uT{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=un(),this.Bt=cf(),this.Lt=new _e(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(hl(s))if(r===0){const o=new $(s.path);this.Kt(n,o,Oe.newNoDocument(o,W.min()))}else ye(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&hl(a.target)){const l=new $(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Oe.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=J();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Po(e,n,this.Lt,this.$t,r);return this.$t=un(),this.Bt=cf(),this.Lt=new _e(ne),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new lf,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new _e(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new lf),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function cf(){return new Ce($.comparator)}function uf(){return new Ce($.comparator)}/**
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
 */const hT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dT{constructor(e,n){this.databaseId=e,this.dt=n}}function mT(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pT(t,e){return t.dt?e.toBase64():e.toUint8Array()}function yi(t){return ye(!!t),W.fromTimestamp(function(e){const n=cn(e);return new Ye(n.seconds,n.nanos)}(t))}function gT(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sg(t){const e=me.fromString(t);return ye(lg(e)),e}function ma(t,e){const n=sg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(og(n))}function gl(t,e){return gT(t.databaseId,e)}function vT(t){const e=sg(t);return e.length===4?me.emptyPath():og(e)}function hf(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function og(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.dt?(ye(c===void 0||typeof c=="string"),Pe.fromBase64String(c||"")):(ye(c===void 0||c instanceof Uint8Array),Pe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:Zp(l.code);return new B(c,l.message||"")}(o);n=new ig(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(t,r.document.name),s=yi(r.document.updateTime),o=new yt({mapValue:{fields:r.document.fields}}),a=Oe.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ps(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(t,r.document),s=r.readTime?yi(r.readTime):W.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ps([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(t,r.document),s=r.removedTargetIds||[];n=new ps([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new sT(i),o=r.targetId;n=new rg(o,s)}}return n}function bT(t,e){return{documents:[gl(t,e.path)]}}function wT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Jh(h.value))return{unaryFilter:{field:Wn(h.field),op:"IS_NAN"}};if(Qh(h.value))return{unaryFilter:{field:Wn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Jh(h.value))return{unaryFilter:{field:Wn(h.field),op:"IS_NOT_NAN"}};if(Qh(h.value))return{unaryFilter:{field:Wn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(h.field),op:TT(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Wn(u.field),direction:IT(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.dt||xo(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _T(t){let e=vT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=ag(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qr(er(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,xo(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,m=u.values||[];return new Hs(m,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,m=u.values||[];return new Hs(m,h)}(n.endAt)),KI(e,i,o,s,a,"F",l,c)}function ET(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ag(t){return t?t.unaryFilter!==void 0?[AT(t)]:t.fieldFilter!==void 0?[ST(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ag(e)).reduce((e,n)=>e.concat(n)):G():[]}function IT(t){return hT[t]}function TT(t){return fT[t]}function Wn(t){return{fieldPath:t.canonicalString()}}function er(t){return We.fromServerFormat(t.fieldPath)}function ST(t){return Ge.create(er(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function AT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=er(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=er(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=er(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=er(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tg();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Qp(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(n,r)=>sf(n,r))&&mr(this.baseMutations,e.baseMutations,(n,r)=>sf(n,r))}}/**
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
 */class CT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Nn{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class xT{constructor(e){this.ne=e}}function OT(t){const e=_T({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fl(e,e.limit,"L"):e}/**
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
 */class NT{constructor(){this.ze=new DT}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(ln.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class DT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(me.comparator)).toArray()}}/**
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
 */class yr{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new yr(0)}static Rn(){return new yr(-1)}}/**
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
 */class RT{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class MT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Jr(r.mutation,i,xn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=Tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vr();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=un();const o=Zr(),a=Zr();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ro)?s=s.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Jr(u.mutation,c,u.mutation.getFieldMask(),Ye.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new PT(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zr();let i=new Ce((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||xn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=tg();u.forEach(m=>{if(!s.has(m)){const p=Qp(n.get(m),r.get(m));p!==null&&h.set(m,p),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Tn());let a=-1,l=s;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.getBaseDocument(e,u,h).next(m=>{l=l.insert(u,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,J())).next(u=>({batchId:a,changes:aT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Vr();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(c,u){return new Oo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,Oe.newInvalidDocument(c)))});let o=Vr();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Jr(c.mutation,l,xn.empty(),Ye.now()),zc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Oe.newInvalidDocument(n))}}/**
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
 */class LT{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:yi(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:OT(r.bundledQuery),readTime:yi(r.readTime)}}(n)),_.resolve()}}/**
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
 */class FT{constructor(){this.overlays=new Ce($.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Tn(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Tn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Tn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CT(n,r));let s=this.Xn.get(n);s===void 0&&(s=J(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class qc{constructor(){this.Zn=new _e(Te.ts),this.es=new _e(Te.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Te(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Te(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new $(new me([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new $(new me([])),r=new Te(n,e),i=new Te(n,e+1);let s=J();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return $.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||$.comparator(e.key,n.key)}}/**
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
 */class UT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new _e(Te.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kT(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ne);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),_.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Te(new $(s),0);let a=new _e(ne);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return _.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Te(n,0),i=this.ds.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $T{constructor(e){this.ps=e,this.docs=new Ce($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=un();const s=new $(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||CI(kI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){G()}Is(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VT(this)}getSize(e){return _.resolve(this.size)}}class VT extends RT{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class BT{constructor(e){this.persistence=e,this.Ts=new xr(n=>Vc(n),Bc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Es=0,this.As=new qc,this.targetCount=0,this.Rs=yr.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
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
 */class jT{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Uc(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new BT(this),this.indexManager=new NT,this.remoteDocumentCache=function(r){return new $T(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new xT(n),this.Ds=new LT(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new UT(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new zT(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return _.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class zT extends OI{constructor(e){super(),this.currentSequenceNumber=e}}class Wc{constructor(e){this.persistence=e,this.ks=new qc,this.Ms=null}static Os(e){return new Wc(e)}get Fs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,r=>{const i=$.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Gc{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gc(e,n.fromCache,r,i)}}/**
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
 */class HT{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(nf(n))return _.resolve(null);let r=Bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fl(n,null,"F"),r=Bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(e,fl(n,null,"F")):this.Oi(e,c,n,l)}))})))}xi(e,n,r,i){return nf(n)||i.isEqual(W.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(qh()<=te.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dl(n)),this.Oi(e,o,n,AI(i,-1)))})}ki(e,n){let r=new _e(Wp(e));return n.forEach((i,s)=>{zc(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return qh()<=te.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",dl(n)),this.Di.getDocumentsMatchingQuery(e,n,ln.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class KT{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Ce(ne),this.Bi=new xr(s=>Vc(s),Bc),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MT(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function qT(t,e,n,r){return new KT(t,e,n,r)}async function cg(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function ug(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function WT(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const m=i.get(h);if(!m)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let p=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Pe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(E,R,k){return E.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let l=un(),c=J();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(GT(s,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!r.isEqual(W.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.$i=i,s))}function GT(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=un();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function YT(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new Nn(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function vl(t,e,n){const r=ee(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ui(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function ff(t,e,n){const r=ee(t);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ee(a),h=u.Bi.get(c);return h!==void 0?_.resolve(u.$i.get(h)):u.Vs.getTargetData(l,c)}(r,o,Bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:J())).next(a=>(XT(r,YI(e),a),{documents:a,ji:s})))}function XT(t,e,n){let r=W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class df{constructor(){this.activeTargetIds=ng()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QT{constructor(){this.Fr=new df,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JT{Br(e){}shutdown(){}}/**
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
 */class mf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const ZT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class eS{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class tS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw Wh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=ZT[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new gI;a.listenOnce(dI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fa.NO_ERROR:const c=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(c)),s(c);break;case fa.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const u=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(E)>=0?E:x.UNKNOWN}(h.status);o(new B(m,h.message))}else o(new B(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=hI(),o=fI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new pI({})),this.uo(a.initMessageHeaders,n,r),rm()||sm()||iw()||om()||sw()||im()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const m=new eS({jr:E=>{h?P("Connection","Not sending because WebChannel is closed:",E):(u||(P("Connection","Opening WebChannel transport."),c.open(),u=!0),P("Connection","WebChannel sending:",E),c.send(E))},Wr:()=>c.close()}),p=(E,R,k)=>{E.listen(R,y=>{try{k(y)}catch(A){setTimeout(()=>{throw A},0)}})};return p(c,es.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),p(c,es.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),m.eo())}),p(c,es.EventType.ERROR,E=>{h||(h=!0,Wh("Connection","WebChannel transport errored:",E),m.eo(new B(x.UNAVAILABLE,"The operation could not be completed")))}),p(c,es.EventType.MESSAGE,E=>{var R;if(!h){const k=E.data[0];ye(!!k);const y=k,A=y.error||((R=y[0])===null||R===void 0?void 0:R.error);if(A){P("Connection","WebChannel received error:",A);const M=A.status;let z=function(pe){const we=ge[pe];if(we!==void 0)return Zp(we)}(M),Z=A.message;z===void 0&&(z=x.INTERNAL,Z="Unknown error status: "+M+" with message "+A.message),h=!0,m.eo(new B(z,Z)),c.close()}else P("Connection","WebChannel received:",k),m.no(k)}}),p(o,mI.STAT_EVENT,E=>{E.stat===Hh.PROXY?P("Connection","Detected buffering proxy"):E.stat===Hh.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function pa(){return typeof document<"u"?document:null}/**
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
 */function hg(t){return new dT(t,!0)}class fg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class nS{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new fg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Vt(n.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rS extends nS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=yT(this.wt,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?yi(s.readTime):W.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=hf(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=hl(a)?{documents:bT(i,a)}:{query:wT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=pT(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=mT(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=ET(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=hf(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class iS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(x.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(x.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class sS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Vt(n),this.su=!1):P("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class oS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Bi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.lu.add(4),await Vi(l),l._u.set("Unknown"),l.lu.delete(4),await Mo(l)}(this))})}),this._u=new sS(r,i)}}async function Mo(t){if(Bi(t))for(const e of t.fu)await e(!0)}async function Vi(t){for(const e of t.fu)await e(!1)}function dg(t,e){const n=ee(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Qc(n)?Xc(n):Or(n).Co()&&Yc(n,e))}function mg(t,e){const n=ee(t),r=Or(n);n.hu.delete(e),r.Co()&&pg(n,e),n.hu.size===0&&(r.Co()?r.ko():Bi(n)&&n._u.set("Unknown"))}function Yc(t,e){t.wu.Nt(e.targetId),Or(t).Qo(e)}function pg(t,e){t.wu.Nt(e),Or(t).jo(e)}function Xc(t){t.wu=new uT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Or(t).start(),t._u.iu()}function Qc(t){return Bi(t)&&!Or(t).Do()&&t.hu.size>0}function Bi(t){return ee(t).lu.size===0}function gg(t){t.wu=void 0}async function aS(t){t.hu.forEach((e,n)=>{Yc(t,e)})}async function lS(t,e){gg(t),Qc(t)?(t._u.uu(e),Xc(t)):t._u.set("Unknown")}async function cS(t,e,n){if(t._u.set("Online"),e instanceof ig&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pf(t,r)}else if(e instanceof ps?t.wu.Ut(e):e instanceof rg?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(W.min()))try{const r=await ug(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.hu.get(l);c&&i.hu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Pe.EMPTY_BYTE_STRING,l.snapshotVersion)),pg(i,a);const c=new Nn(l.target,a,1,l.sequenceNumber);Yc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await pf(t,r)}}async function pf(t,e,n){if(!Ui(e))throw e;t.lu.add(1),await Vi(t),t._u.set("Offline"),n||(n=()=>ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Mo(t)})}async function gf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Bi(n);n.lu.add(3),await Vi(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Mo(n)}async function uS(t,e){const n=ee(t);e?(n.lu.delete(2),await Mo(n)):e||(n.lu.add(2),await Vi(n),n._u.set("Unknown"))}function Or(t){return t.mu||(t.mu=function(e,n,r){const i=ee(e);return i.tu(),new rS(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:aS.bind(null,t),Jr:lS.bind(null,t),Go:cS.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Qc(t)?Xc(t):t._u.set("Unknown")):(await t.mu.stop(),gg(t))})),t.mu}/**
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
 */class Jc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jc(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(t,e){if(Vt("AsyncQueue",`${e}: ${t}`),Ui(t))return new B(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class lr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Vr(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new lr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vf{constructor(){this.yu=new Ce($.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class br{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new br(e,n,lr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&No(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class hS{constructor(){this.Iu=void 0,this.listeners=[]}}class fS{constructor(){this.queries=new xr(e=>qp(e),No),this.onlineState="Unknown",this.Tu=new Set}}async function dS(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new hS),i)try{s.Iu=await n.onListen(r)}catch(o){const a=vg(o,`Initialization of query '${dl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Zc(n)}async function mS(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pS(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Zc(n)}function gS(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Zc(t){t.Tu.forEach(e=>{e.next()})}class vS{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class yg{constructor(e){this.key=e}}class bg{constructor(e){this.key=e}}class yS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=J(),this.mutatedKeys=J(),this.Lu=Wp(e),this.Uu=new lr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new vf,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const m=i.get(u),p=zc(this.query,h)?h:null,E=!!m&&this.mutatedKeys.has(m.key),R=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;m&&p?m.data.isEqual(p.data)?E!==R&&(r.track({type:3,doc:p}),k=!0):this.Qu(m,p)||(r.track({type:2,doc:p}),k=!0,(l&&this.Lu(p,l)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!m&&p?(r.track({type:0,doc:p}),k=!0):m&&!p&&(r.track({type:1,doc:m}),k=!0,(l||c)&&(a=!0)),k&&(p?(o=o.add(p),s=R?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((c,u)=>function(h,m){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(m)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new br(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new vf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=J(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new bg(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new yg(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=J();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return br.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class bS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wS{constructor(e){this.key=e,this.Xu=!1}}class _S{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new xr(a=>qp(a),No),this.ec=new Map,this.nc=new Set,this.sc=new Ce($.comparator),this.ic=new Map,this.rc=new qc,this.oc={},this.uc=new Map,this.cc=yr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function ES(t,e){const n=xS(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await YT(n.localStore,Bt(e));n.isPrimaryClient&&dg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await IS(n,e,r,a==="current")}return i}async function IS(t,e,n,r){t.hc=(u,h,m)=>async function(p,E,R,k){let y=E.view.Ku(R);y.Mi&&(y=await ff(p.localStore,E.query,!1).then(({documents:z})=>E.view.Ku(z,y)));const A=k&&k.targetChanges.get(E.targetId),M=E.view.applyChanges(y,p.isPrimaryClient,A);return bf(p,E.targetId,M.zu),M.snapshot}(t,u,h,m);const i=await ff(t.localStore,e,!0),s=new yS(e,i.ji),o=s.Ku(i.documents),a=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);bf(t,n,l.zu);const c=new bS(e,n,s);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function TS(t,e){const n=ee(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!No(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mg(n.remoteStore,r.targetId),yl(n,r.targetId)}).catch(Fc)):(yl(n,r.targetId),await vl(n.localStore,r.targetId,!0))}async function wg(t,e){const n=ee(t);try{const r=await WT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ye(o.Xu):i.removedDocuments.size>0&&(ye(o.Xu),o.Xu=!1))}),await Eg(n,r,e)}catch(r){await Fc(r)}}function yf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Zc(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SS(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Ce($.comparator);o=o.insert(s,Oe.newNoDocument(s,W.min()));const a=J().add(s),l=new Po(W.min(),new Map,new _e(ne),o,a);await wg(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),eu(r)}else await vl(r.localStore,e,!1).then(()=>yl(r,e,n)).catch(Fc)}function yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||_g(t,r)})}function _g(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(mg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),eu(t))}function bf(t,e,n){for(const r of n)r instanceof yg?(t.rc.addReference(r.key,e),AS(t,r)):r instanceof bg?(P("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||_g(t,r.key)):G()}function AS(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.nc.add(r),eu(t))}function eu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new $(me.fromString(e)),r=t.cc.next();t.ic.set(r,new wS(n)),t.sc=t.sc.insert(n,r),dg(t.remoteStore,new Nn(Bt(jc(n.path)),r,2,Uc.ot))}}async function Eg(t,e,n){const r=ee(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=Gc.Vi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const c=ee(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,h=>_.forEach(h.Pi,m=>c.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>_.forEach(h.vi,m=>c.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!Ui(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const m=c.$i.get(h),p=m.snapshotVersion,E=m.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(h,E)}}}(r.localStore,s))}async function kS(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await cg(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new B(x.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eg(n,r.Ki)}}function CS(t,e){const n=ee(t),r=n.ic.get(e);if(r&&r.Xu)return J().add(r.key);{let i=J();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function xS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SS.bind(null,e),e.Zu.Go=pS.bind(null,e.eventManager),e.Zu.lc=gS.bind(null,e.eventManager),e}class OS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=hg(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return qT(this.persistence,new HT,e.initialUser,this.wt)}_c(e){return new jT(Wc.Os,this.wt)}dc(e){return new QT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kS.bind(null,this.syncEngine),await uS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fS}createDatastore(e){const n=hg(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new tS(i));var i;return function(s,o,a,l){return new iS(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>yf(this.syncEngine,a,0),o=mf.V()?new mf:new JT,new oS(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new _S(r,i,s,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);P("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Vi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class DS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RS{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=jp.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function PS(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function MS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LS(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>gf(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>gf(e.remoteStore,s)),t.onlineComponents=e}async function LS(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await PS(t,new OS)),t.offlineComponents}async function FS(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await MS(t,new NS)),t.onlineComponents}async function US(t){const e=await FS(t),n=e.eventManager;return n.onListen=ES.bind(null,e.syncEngine),n.onUnlisten=TS.bind(null,e.syncEngine),n}function $S(t,e,n={}){const r=new Cn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new DS({next:h=>{s.enqueueAndForget(()=>mS(i,u));const m=h.docs.has(o);!m&&h.fromCache?l.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&a&&a.source==="server"?l.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new vS(jc(o.path),c,{includeMetadataChanges:!0,Du:!0});return dS(i,u)}(await US(t),t.asyncQueue,e,n,r)),r.promise}const wf=new Map;/**
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
 */function VS(t,e,n){if(!n)throw new B(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BS(t,e,n,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _f(t){if(!$.isDocumentKey(t))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ef(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jS(t);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class If{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,BS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ig{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,e instanceof gr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(i.options.projectId)}(e))}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yI;switch(n.type){case"gapi":const r=n.client;return ye(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new _I(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wf.get(e);n&&(P("ComponentProvider","Removing Datastore"),wf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class tu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tu(this.firestore,e,this._query)}}class bi extends tu{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new $(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function zS(t,e,...n){if(t=Ti(t),arguments.length===1&&(e=jp.I()),VS("doc","path",e),t instanceof Ig){const r=me.fromString(e,...n);return _f(r),new Rt(t,null,new $(r))}{if(!(t instanceof Rt||t instanceof bi))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return _f(r),new Rt(t.firestore,t instanceof bi?t.converter:null,new $(r))}}/**
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
 */class HS{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new fg(this,"async_queue_retry"),this.Kc=()=>{const n=pa();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=pa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=pa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Cn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Ui(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Jc.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Tg extends Ig{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new HS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Sg(this),this._firestoreClient.terminate()}}function KS(t=um()){return nc(t,"firestore").getImmediate()}function qS(t){return t._firestoreClient||Sg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Sg(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new RI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new RS(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Ag{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(Pe.fromBase64String(e))}catch(n){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class WS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const GS=new RegExp("[~\\*/\\[\\]]");function YS(t,e,n){if(e.search(GS)>=0)throw Tf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ag(...e.split("."))._internalPath}catch{throw Tf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(x.INVALID_ARGUMENT,a+t+l)}/**
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
 */class kg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XS extends kg{data(){return super.data()}}function Cg(t,e){return typeof e=="string"?YS(t,e):e instanceof Ag?e._internalPath:e._delegate._internalPath}/**
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
 */class QS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xg extends kg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new JS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class JS extends xg{data(e={}){return super.data(e)}}/**
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
 */class ZS{convertValue(e,n="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Co(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new WS(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=cn(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ye(lg(r));const i=new gr(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function eA(t){t=Ef(t,Rt);const e=Ef(t.firestore,Tg);return $S(qS(e),t._key).then(n=>nA(e,t,n))}class tA extends ZS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function nA(t,e,n){const r=n.docs.get(e._key),i=new tA(t);return new xg(t,i,e._key,r,new QS(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Cr=n})(Si),hr(new Pn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Tg(i,new bI(n.getProvider("auth-internal")),new II(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),rn(Kh,"3.4.14",t),rn(Kh,"3.4.14","esm2017")})();const rA={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},Og=h_(rA),Sf=uE(Og),iA=KS(Og),dn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},sA={components:{FontAwesomeIcon:Zl},data(){return{buttonLabel:"login",user:null,token:null,isLoggedIn:!1}},methods:{login(){I1(Sf,new vt).then(t=>{const e=vt.credentialFromResult(t);this.token=e.accessToken,this.user=t.user}).catch(t=>{console.log(t.message),alert(t.message)})},logout(){confirm("Are you sure you want to logout?")&&this.authLogout()},async authLogout(){try{await Sf.signOut(),this.isLoggedIn=!1,this.user=null,this.token=null,console.log("logged out successfully")}catch(t){console.log(t.message)}}},watch:{user(t){t&&t.email!=="xmliszt@gmail.com"?this.authLogout().then(()=>{alert("You are not recognised as the owner of this page."),this.isLoggedIn=!1}).catch(e=>{console.log(e.message)}):t&&(this.isLoggedIn=!0,t&&eA(zS(iA,"v2",t.uid)).then(e=>{e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(e=>{console.log("Error getting document:",e)}))}}};function oA(t,e,n,r,i,s){const o=wt("FontAwesomeIcon");return rt(),ht("div",null,[i.isLoggedIn?(rt(),ht("button",{key:1,class:"icon-button hover-effect",onClick:e[1]||(e[1]=(...a)=>s.logout&&s.logout(...a))},[fe(o,{icon:"fa-solid fa-arrow-up-right-from-square"})])):(rt(),ht("button",{key:0,class:"icon-button hover-effect",onClick:e[0]||(e[0]=(...a)=>s.login&&s.login(...a))},[fe(o,{icon:"fa-solid fa-arrow-right-to-bracket"})]))])}const aA=dn(sA,[["render",oA]]),lA="/staging/assets/avatar.42f08a86.jpeg";const cA={data(){return{imgUrl:lA,imgAlt:"No Image"}}},uA={class:"avatar drop-shadow-light morph-hover-effect"},hA=["src","alt"];function fA(t,e,n,r,i,s){return rt(),ht("div",uA,[re("img",{src:i.imgUrl,alt:i.imgAlt},null,8,hA)])}const dA=dn(cA,[["render",fA],["__scopeId","data-v-318b29b9"]]);const mA={components:{FishAvatar:dA,FontAwesomeIcon:Zl},data(){return{scrollingEnable:!0,scrollingEnableClass:"scrolling-enable",scrollingDisableClass:"scrolling-disable"}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){t+e>=n&&(this.scrollingEnable=!1)},enableScroll(){this.scrollingEnable=!0}}},Lo=t=>(Zf("data-v-0e3db07e"),t=t(),ed(),t),pA=Lo(()=>re("div",{class:"parallax-background"},[re("div",null,[re("h1",null,"Hi! I'm Li Yuxuan. Nice to meet you! \u{1F64C}\u{1F3FB}")])],-1)),gA={class:"parallax-fixed"},vA={class:"parallax-base"},yA=Lo(()=>re("div",{class:"header-mountain"},null,-1)),bA={class:"keep-scrolling"},wA=Lo(()=>re("div",null,"Keep Scrolling",-1)),_A=Lo(()=>re("div",{class:"background"},null,-1));function EA(t,e,n,r,i,s){const o=wt("FishAvatar"),a=wt("FontAwesomeIcon");return rt(),ht("div",{class:wr(["parallax",[i.scrollingEnable?i.scrollingEnableClass:i.scrollingDisableClass]]),ref:"parallax",onScroll:e[0]||(e[0]=(...l)=>this.handleScroll&&this.handleScroll(...l))},[pA,re("div",gA,[re("div",null,[fe(o,{ref:"avatarView"},null,512)])]),re("div",vA,[re("div",null,[yA,re("div",bA,[fe(a,{icon:"fa-solid fa-angles-down"}),wA]),_A])])],34)}const IA=dn(mA,[["render",EA],["__scopeId","data-v-0e3db07e"]]);const TA={props:{label:String}},SA={class:"fish-tag"};function AA(t,e,n,r,i,s){return rt(),ht("div",SA,gs(n.label.toUpperCase()),1)}const kA=dn(TA,[["render",AA],["__scopeId","data-v-ba16cd5c"]]);function CA(t,e){return Math.floor(Math.random()*(e-t+1)+t)}const xA={props:["skills"],emits:["onSentenceChanged","onWaitingForNextSentence","onStartTypingNextSentence"],data(){return{typingDelayMin:10,typingDelayMax:200,erasingDelay:50,newSentenceDelay:2e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",typedOutText:"",displayedTag:""}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} using ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.$emit("onStartTypingNextSentence");let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.$emit("onSentenceChanged",t),this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,CA(this.typingDelayMin,this.typingDelayMax))):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.$emit("onWaitingForNextSentence"),setTimeout(this.startTyping,this.typingDelayMax+1100))}},created(){this.skills.length>0&&setTimeout(this.startTyping,this.newSentenceDelay+250)}},OA={class:"typewriter drop-shadow-dark"},NA=yd(" I "),DA={class:"typed-text"};function RA(t,e,n,r,i,s){return rt(),ht("div",OA,[re("p",null,[NA,re("span",DA,gs(this.typedOutText),1),re("span",{class:wr(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])])}const PA=dn(xA,[["render",RA],["__scopeId","data-v-e717c7ba"]]);const MA={components:{FishTag:kA,FishTypeWriter:PA},data(){return{displayedTag:"",isWaiting:!1,tagShowClass:"show",tagHideClass:"hide",skills:[{category:"technology",verb:"develop",adj:"",noun:"static websites",tools:["JavaScript","HTML","CSS","VueJS framework"]},{category:"photography",verb:"take",adj:"beautiful",noun:"photos",tools:["O-EM10 MKII","Photoshop","Lightroom"]}]}},methods:{onTypeWriterSentenceChanged(t){this.displayedTag=t.category}}},LA={class:"skills-overview"};function FA(t,e,n,r,i,s){const o=wt("FishTypeWriter"),a=wt("FishTag");return rt(),ht("div",LA,[fe(o,{class:"typewriter",skills:i.skills,onOnSentenceChanged:s.onTypeWriterSentenceChanged,onOnStartTypingNextSentence:e[0]||(e[0]=l=>this.isWaiting=!1),onOnWaitingForNextSentence:e[1]||(e[1]=l=>this.isWaiting=!0)},null,8,["skills","onOnSentenceChanged"]),fe(a,{class:wr(["fish-tag drop-shadow-dark",[i.isWaiting?i.tagHideClass:i.tagShowClass]]),label:i.displayedTag},null,8,["class","label"])])}const UA=dn(MA,[["render",FA],["__scopeId","data-v-a495e322"]]);const $A={components:{FontAwesomeIcon:Zl},props:["project"],methods:{setBackgroundStyles(){return{background:`url(${this.project.imgUrl}) no-repeat center center`,position:"absolute",top:0,left:0,"background-size":"cover",width:"100%",height:"100%",overflow:"hidden",opacity:.7,filter:"blur(0px)","-webkit-filter":"blur(0px)",transition:"all 0.5s"}},directTo(){window.open(this.project.link,"__blank")}}},VA=t=>(Zf("data-v-ae861b06"),t=t(),ed(),t),BA={class:"fish-card"},jA=VA(()=>re("div",{class:"glow"},null,-1)),zA={class:"fish-card-overlay"},HA={class:"title"},KA={class:"details"},qA={class:"circle"},WA={class:"plus"};function GA(t,e,n,r,i,s){const o=wt("FontAwesomeIcon");return rt(),ht("div",BA,[re("div",{class:"fish-card-bg",style:wi(s.setBackgroundStyles())},null,4),jA,re("div",zA,[re("span",HA,gs(n.project.title),1),re("span",KA,gs(n.project.details),1)]),re("div",{class:"fish-card-expand hover-effect",onClick:e[0]||(e[0]=(...a)=>s.directTo&&s.directTo(...a))},[re("div",qA,[fe(o,{icon:"fa-regular fa-circle"})]),re("div",WA,[fe(o,{icon:"fa-solid fa-plus"})])])])}const YA=dn($A,[["render",GA],["__scopeId","data-v-ae861b06"]]);const XA={components:{AuthButton:aA,ParallaxView:IA,SkillsOverview:UA,FishCard:YA},data(){return{authBtnOpacity:1,authBtnHidden:!1,projects:[{title:"Resume Generator",details:"Resume Generator produces resume based on your data uploaded. Writing resume cannot be simpler!",imgUrl:"https://images.unsplash.com/photo-1661630807560-654a6b3735bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",link:"https://www.google.com"},{title:"Portfolio",details:"My very own portfolio website. A playground for CSS animations. I aim to achieve 'Apple-like' user experience.",imgUrl:"https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",link:"https://www.google.com"},{title:"iPhone 14 Simulator",details:"No money to buy an iPhone 14? No worries! This simulator will give you first-hand virtual experience of owning an iPhone 14.",imgUrl:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",link:"https://www.google.com"}]}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){this.authBtnOpacity=1-t/(n-e),this.authBtnHidden=t+e>=n},handleMainScroll(){window.scrollY===0&&this.$refs.parallaxView.enableScroll()}},mounted(){document.addEventListener("scroll",this.handleMainScroll)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll)}},QA={id:"login"},JA={id:"skills"},ZA={id:"projects"};function ek(t,e,n,r,i,s){const o=wt("ParallaxView"),a=wt("AuthButton"),l=wt("SkillsOverview"),c=wt("FishCard");return rt(),ht("main",null,[fe(o,{ref:"parallaxView",onScroll:this.handleScroll},null,8,["onScroll"]),re("div",QA,[fe(a,{ref:"authBtn",style:wi({opacity:i.authBtnOpacity}),hidden:i.authBtnHidden},null,8,["style","hidden"])]),re("section",JA,[fe(l)]),re("section",ZA,[re("div",null,[(rt(!0),ht(pt,null,ny(i.projects,(u,h)=>(rt(),_y(c,{class:"fish-card",key:h,project:u},null,8,["project"]))),128))])])])}const tk=dn(XA,[["render",ek]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var nk={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},rk={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},ik={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]},sk={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ok={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};Ub.add(rk,ik,nk,ok,sk);n0(tk).mount("#app");
