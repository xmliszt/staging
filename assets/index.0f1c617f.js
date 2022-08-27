(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yl(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ng=yl(Og);function Tf(t){return!!t||t===""}function qs(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=De(r)?Pg(r):qs(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(De(t))return t;if(Te(t))return t}}const Rg=/;(?![^(]*\))/g,Dg=/:(.+)/;function Pg(t){const e={};return t.split(Rg).forEach(n=>{if(n){const r=n.split(Dg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lr(t){let e="";if(De(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=lr(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sf=t=>De(t)?t:t==null?"":K(t)||Te(t)&&(t.toString===xf||!q(t.toString))?JSON.stringify(t,Af,2):String(t),Af=(t,e)=>e&&e.__v_isRef?Af(t,e.value):tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:kf(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!K(e)&&!Of(e)?String(e):e,oe={},er=[],lt=()=>{},Mg=()=>!1,Lg=/^on[^a-z]/,Ws=t=>Lg.test(t),bl=t=>t.startsWith("onUpdate:"),je=Object.assign,wl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fg=Object.prototype.hasOwnProperty,X=(t,e)=>Fg.call(t,e),K=Array.isArray,tr=t=>Gs(t)==="[object Map]",kf=t=>Gs(t)==="[object Set]",q=t=>typeof t=="function",De=t=>typeof t=="string",_l=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Cf=t=>Te(t)&&q(t.then)&&q(t.catch),xf=Object.prototype.toString,Gs=t=>xf.call(t),Ug=t=>Gs(t).slice(8,-1),Of=t=>Gs(t)==="[object Object]",El=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ns=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$g=/-(\w)/g,wt=Ys(t=>t.replace($g,(e,n)=>n?n.toUpperCase():"")),Vg=/\B([A-Z])/g,wr=Ys(t=>t.replace(Vg,"-$1").toLowerCase()),Xs=Ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=Ys(t=>t?`on${Xs(t)}`:""),ps=(t,e)=>!Object.is(t,e),Bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},gs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ou;const jg=()=>ou||(ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ft;class zg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ft&&(this.parent=ft,this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Hg(t,e=ft){e&&e.active&&e.effects.push(t)}const Il=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nf=t=>(t.w&rn)>0,Rf=t=>(t.n&rn)>0,Kg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rn},qg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Nf(i)&&!Rf(i)?i.delete(t):e[n++]=i,i.w&=~rn,i.n&=~rn}e.length=n}},pa=new WeakMap;let Lr=0,rn=1;const ga=30;let it;const In=Symbol(""),va=Symbol("");class Tl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hg(this,r)}run(){if(!this.active)return this.fn();let e=it,n=Qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,Qt=!0,rn=1<<++Lr,Lr<=ga?Kg(this):au(this),this.fn()}finally{Lr<=ga&&qg(this),rn=1<<--Lr,it=this.parent,Qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(au(this),this.onStop&&this.onStop(),this.active=!1)}}function au(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Qt=!0;const Df=[];function _r(){Df.push(Qt),Qt=!1}function Er(){const t=Df.pop();Qt=t===void 0?!0:t}function Je(t,e,n){if(Qt&&it){let r=pa.get(t);r||pa.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Il()),Pf(i)}}function Pf(t,e){let n=!1;Lr<=ga?Rf(t)||(t.n|=rn,n=!Nf(t)):n=!t.has(it),n&&(t.add(it),it.deps.push(t))}function Nt(t,e,n,r,i,s){const o=pa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?El(n)&&a.push(o.get("length")):(a.push(o.get(In)),tr(t)&&a.push(o.get(va)));break;case"delete":K(t)||(a.push(o.get(In)),tr(t)&&a.push(o.get(va)));break;case"set":tr(t)&&a.push(o.get(In));break}if(a.length===1)a[0]&&ya(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ya(Il(l))}}function ya(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&lu(r);for(const r of n)r.computed||lu(r)}function lu(t,e){(t!==it||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wg=yl("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_l)),Gg=Sl(),Yg=Sl(!1,!0),Xg=Sl(!0),cu=Qg();function Qg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let s=0,o=this.length;s<o;s++)Je(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_r();const r=re(this)[e].apply(this,n);return Er(),r}}),t}function Sl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?dv:Vf:e?$f:Uf).get(r))return r;const o=K(r);if(!t&&o&&X(cu,i))return Reflect.get(cu,i,s);const a=Reflect.get(r,i,s);return(_l(i)?Mf.has(i):Wg(i))||(t||Je(r,"get",i),e)?a:Ve(a)?o&&El(i)?a:a.value:Te(a)?t?Bf(a):Cl(a):a}}const Jg=Lf(),Zg=Lf(!0);function Lf(t=!1){return function(n,r,i,s){let o=n[r];if(ei(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&!ei(i)&&(ba(i)||(i=re(i),o=re(o)),!K(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=K(n)&&El(r)?Number(r)<n.length:X(n,r),l=Reflect.set(n,r,i,s);return n===re(s)&&(a?ps(i,o)&&Nt(n,"set",r,i):Nt(n,"add",r,i)),l}}function ev(t,e){const n=X(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nt(t,"delete",e,void 0),r}function tv(t,e){const n=Reflect.has(t,e);return(!_l(e)||!Mf.has(e))&&Je(t,"has",e),n}function nv(t){return Je(t,"iterate",K(t)?"length":In),Reflect.ownKeys(t)}const Ff={get:Gg,set:Jg,deleteProperty:ev,has:tv,ownKeys:nv},rv={get:Xg,set(t,e){return!0},deleteProperty(t,e){return!0}},iv=je({},Ff,{get:Yg,set:Zg}),Al=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function zi(t,e,n=!1,r=!1){t=t.__v_raw;const i=re(t),s=re(e);n||(e!==s&&Je(i,"get",e),Je(i,"get",s));const{has:o}=Qs(i),a=r?Al:n?Nl:Ol;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Hi(t,e=!1){const n=this.__v_raw,r=re(n),i=re(t);return e||(t!==i&&Je(r,"has",t),Je(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ki(t,e=!1){return t=t.__v_raw,!e&&Je(re(t),"iterate",In),Reflect.get(t,"size",t)}function uu(t){t=re(t);const e=re(this);return Qs(e).has.call(e,t)||(e.add(t),Nt(e,"add",t,t)),this}function hu(t,e){e=re(e);const n=re(this),{has:r,get:i}=Qs(n);let s=r.call(n,t);s||(t=re(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ps(e,o)&&Nt(n,"set",t,e):Nt(n,"add",t,e),this}function fu(t){const e=re(this),{has:n,get:r}=Qs(e);let i=n.call(e,t);i||(t=re(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Nt(e,"delete",t,void 0),s}function du(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Nt(t,"clear",void 0,void 0),n}function qi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=re(o),l=e?Al:t?Nl:Ol;return!t&&Je(a,"iterate",In),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Wi(t,e,n){return function(...r){const i=this.__v_raw,s=re(i),o=tr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Al:e?Nl:Ol;return!e&&Je(s,"iterate",l?va:In),{next(){const{value:h,done:m}=c.next();return m?{value:h,done:m}:{value:a?[u(h[0]),u(h[1])]:u(h),done:m}},[Symbol.iterator](){return this}}}}function zt(t){return function(...e){return t==="delete"?!1:this}}function sv(){const t={get(s){return zi(this,s)},get size(){return Ki(this)},has:Hi,add:uu,set:hu,delete:fu,clear:du,forEach:qi(!1,!1)},e={get(s){return zi(this,s,!1,!0)},get size(){return Ki(this)},has:Hi,add:uu,set:hu,delete:fu,clear:du,forEach:qi(!1,!0)},n={get(s){return zi(this,s,!0)},get size(){return Ki(this,!0)},has(s){return Hi.call(this,s,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:qi(!0,!1)},r={get(s){return zi(this,s,!0,!0)},get size(){return Ki(this,!0)},has(s){return Hi.call(this,s,!0)},add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Wi(s,!1,!1),n[s]=Wi(s,!0,!1),e[s]=Wi(s,!1,!0),r[s]=Wi(s,!0,!0)}),[t,n,e,r]}const[ov,av,lv,cv]=sv();function kl(t,e){const n=e?t?cv:lv:t?av:ov;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(X(n,i)&&i in r?n:r,i,s)}const uv={get:kl(!1,!1)},hv={get:kl(!1,!0)},fv={get:kl(!0,!1)},Uf=new WeakMap,$f=new WeakMap,Vf=new WeakMap,dv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(Ug(t))}function Cl(t){return ei(t)?t:xl(t,!1,Ff,uv,Uf)}function gv(t){return xl(t,!1,iv,hv,$f)}function Bf(t){return xl(t,!0,rv,fv,Vf)}function xl(t,e,n,r,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function nr(t){return ei(t)?nr(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function ba(t){return!!(t&&t.__v_isShallow)}function jf(t){return nr(t)||ei(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function zf(t){return gs(t,"__v_skip",!0),t}const Ol=t=>Te(t)?Cl(t):t,Nl=t=>Te(t)?Bf(t):t;function vv(t){Qt&&it&&(t=re(t),Pf(t.dep||(t.dep=Il())))}function yv(t,e){t=re(t),t.dep&&ya(t.dep)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function bv(t){return Ve(t)?t.value:t}const wv={get:(t,e,n)=>bv(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Hf(t){return nr(t)?t:new Proxy(t,wv)}class _v{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Tl(e,()=>{this._dirty||(this._dirty=!0,yv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=re(this);return vv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ev(t,e,n=!1){let r,i;const s=q(t);return s?(r=t,i=lt):(r=t.get,i=t.set),new _v(r,i,s||!i,n)}function Jt(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Js(s,e,n)}return i}function ct(t,e,n,r){if(q(t)){const s=Jt(t,e,n,r);return s&&Cf(s)&&s.catch(o=>{Js(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(ct(t[s],e,n,r));return i}function Js(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Jt(l,null,10,[t,o,a]);return}}Iv(t,n,i,r)}function Iv(t,e,n,r=!0){console.error(t)}let vs=!1,wa=!1;const Qe=[];let At=0;const Br=[];let Fr=null,Wn=0;const jr=[];let qt=null,Gn=0;const Kf=Promise.resolve();let Rl=null,_a=null;function Tv(t){const e=Rl||Kf;return t?e.then(this?t.bind(this):t):e}function Sv(t){let e=At+1,n=Qe.length;for(;e<n;){const r=e+n>>>1;ti(Qe[r])<t?e=r+1:n=r}return e}function qf(t){(!Qe.length||!Qe.includes(t,vs&&t.allowRecurse?At+1:At))&&t!==_a&&(t.id==null?Qe.push(t):Qe.splice(Sv(t.id),0,t),Wf())}function Wf(){!vs&&!wa&&(wa=!0,Rl=Kf.then(Xf))}function Av(t){const e=Qe.indexOf(t);e>At&&Qe.splice(e,1)}function Gf(t,e,n,r){K(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Wf()}function kv(t){Gf(t,Fr,Br,Wn)}function Cv(t){Gf(t,qt,jr,Gn)}function Zs(t,e=null){if(Br.length){for(_a=e,Fr=[...new Set(Br)],Br.length=0,Wn=0;Wn<Fr.length;Wn++)Fr[Wn]();Fr=null,Wn=0,_a=null,Zs(t,e)}}function Yf(t){if(Zs(),jr.length){const e=[...new Set(jr)];if(jr.length=0,qt){qt.push(...e);return}for(qt=e,qt.sort((n,r)=>ti(n)-ti(r)),Gn=0;Gn<qt.length;Gn++)qt[Gn]();qt=null,Gn=0}}const ti=t=>t.id==null?1/0:t.id;function Xf(t){wa=!1,vs=!0,Zs(t),Qe.sort((n,r)=>ti(n)-ti(r));const e=lt;try{for(At=0;At<Qe.length;At++){const n=Qe[At];n&&n.active!==!1&&Jt(n,null,14)}}finally{At=0,Qe.length=0,Yf(),vs=!1,Rl=null,(Qe.length||Br.length||jr.length)&&Xf(t)}}function xv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:m}=r[u]||oe;m&&(i=n.map(p=>p.trim())),h&&(i=n.map(Bg))}let a,l=r[a=Vo(e)]||r[a=Vo(wt(e))];!l&&s&&(l=r[a=Vo(wr(e))]),l&&ct(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(c,t,6,i)}}function Qf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Qf(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):je(o,s),r.set(t,o),o)}function eo(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,wr(e))||X(t,e))}let gt=null,to=null;function ys(t){const e=gt;return gt=t,to=t&&t.type.__scopeId||null,e}function Ov(t){to=t}function Nv(){to=null}function Rv(t,e=gt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Iu(-1);const s=ys(e),o=t(...i);return ys(s),r._d&&Iu(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function jo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:m,setupState:p,ctx:E,inheritAttrs:D}=t;let k,y;const A=ys(t);try{if(n.shapeFlag&4){const z=i||r;k=dt(u.call(z,z,h,s,p,m,E)),y=l}else{const z=e;k=dt(z.length>1?z(s,{attrs:l,slots:a,emit:c}):z(s,null)),y=e.props?l:Dv(l)}}catch(z){zr.length=0,Js(z,t,1),k=we(ni)}let M=k;if(y&&D!==!1){const z=Object.keys(y),{shapeFlag:Z}=M;z.length&&Z&7&&(o&&z.some(bl)&&(y=Pv(y,o)),M=cr(M,y))}return n.dirs&&(M=cr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),k=M,ys(A),k}const Dv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Pv=(t,e)=>{const n={};for(const r in t)(!bl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Mv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mu(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const m=u[h];if(o[m]!==r[m]&&!eo(c,m))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mu(r,o,c):!0:!!o;return!1}function mu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!eo(n,s))return!0}return!1}function Lv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Fv=t=>t.__isSuspense;function Uv(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Cv(t)}function $v(t,e){if(Oe){let n=Oe.provides;const r=Oe.parent&&Oe.parent.provides;r===n&&(n=Oe.provides=Object.create(r)),n[t]=e}}function zo(t,e,n=!1){const r=Oe||gt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(r.proxy):e}}const pu={};function rs(t,e,n){return Jf(t,e,n)}function Jf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=oe){const a=Oe;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=ba(t)):nr(t)?(l=()=>t,r=!0):K(t)?(u=!0,c=t.some(y=>nr(y)||ba(y)),l=()=>t.map(y=>{if(Ve(y))return y.value;if(nr(y))return Yn(y);if(q(y))return Jt(y,a,2)})):q(t)?e?l=()=>Jt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ct(t,a,3,[m])}:l=lt,e&&r){const y=l;l=()=>Yn(y())}let h,m=y=>{h=k.onStop=()=>{Jt(y,a,4)}};if(ii)return m=lt,e?n&&ct(e,a,3,[l(),u?[]:void 0,m]):l(),lt;let p=u?[]:pu;const E=()=>{if(!!k.active)if(e){const y=k.run();(r||c||(u?y.some((A,M)=>ps(A,p[M])):ps(y,p)))&&(h&&h(),ct(e,a,3,[y,p===pu?void 0:p,m]),p=y)}else k.run()};E.allowRecurse=!!e;let D;i==="sync"?D=E:i==="post"?D=()=>Ke(E,a&&a.suspense):D=()=>kv(E);const k=new Tl(l,D);return e?n?E():p=k.run():i==="post"?Ke(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&wl(a.scope.effects,k)}}function Vv(t,e,n){const r=this.proxy,i=De(t)?t.includes(".")?Zf(r,t):()=>r[t]:t.bind(r,r);let s;q(e)?s=e:(s=e.handler,n=e);const o=Oe;ur(this);const a=Jf(i,s.bind(r),n);return o?ur(o):Sn(),a}function Zf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Yn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(kf(t)||tr(t))t.forEach(n=>{Yn(n,e)});else if(Of(t))for(const n in t)Yn(t[n],e);return t}function Dl(t){return q(t)?{setup:t,name:t.name}:t}const is=t=>!!t.type.__asyncLoader,ed=t=>t.type.__isKeepAlive;function Bv(t,e){td(t,"a",e)}function jv(t,e){td(t,"da",e)}function td(t,e,n=Oe){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(no(e,r,n),n){let i=n.parent;for(;i&&i.parent;)ed(i.parent.vnode)&&zv(r,e,n,i),i=i.parent}}function zv(t,e,n,r){const i=no(e,t,r,!0);nd(()=>{wl(r[e],i)},n)}function no(t,e,n=Oe,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_r(),ur(n);const a=ct(e,n,t,o);return Sn(),Er(),a});return r?i.unshift(s):i.push(s),s}}const $t=t=>(e,n=Oe)=>(!ii||t==="sp")&&no(t,e,n),Hv=$t("bm"),Kv=$t("m"),qv=$t("bu"),Wv=$t("u"),Gv=$t("bum"),nd=$t("um"),Yv=$t("sp"),Xv=$t("rtg"),Qv=$t("rtc");function Jv(t,e=Oe){no("ec",t,e)}function dn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(_r(),ct(l,n,8,[t.el,a,t,e]),Er())}}const rd="components";function Tn(t,e){return ey(rd,t,!0,e)||t}const Zv=Symbol();function ey(t,e,n=!0,r=!1){const i=gt||Oe;if(i){const s=i.type;if(t===rd){const a=Oy(s,!1);if(a&&(a===e||a===wt(e)||a===Xs(wt(e))))return s}const o=gu(i[t]||s[t],e)||gu(i.appContext[t],e);return!o&&r?s:o}}function gu(t,e){return t&&(t[e]||t[wt(e)]||t[Xs(wt(e))])}const Ea=t=>t?pd(t)?Fl(t)||t.proxy:Ea(t.parent):null,bs=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ea(t.parent),$root:t=>Ea(t.root),$emit:t=>t.emit,$options:t=>sd(t),$forceUpdate:t=>t.f||(t.f=()=>qf(t.update)),$nextTick:t=>t.n||(t.n=Tv.bind(t.proxy)),$watch:t=>Vv.bind(t)}),ty={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==oe&&X(r,e))return o[e]=1,r[e];if(i!==oe&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,s[e];if(n!==oe&&X(n,e))return o[e]=4,n[e];Ia&&(o[e]=0)}}const u=bs[e];let h,m;if(u)return e==="$attrs"&&Je(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==oe&&X(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,X(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==oe&&X(i,e)?(i[e]=n,!0):r!==oe&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==oe&&X(t,o)||e!==oe&&X(e,o)||(a=s[0])&&X(a,o)||X(r,o)||X(bs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ia=!0;function ny(t){const e=sd(t),n=t.proxy,r=t.ctx;Ia=!1,e.beforeCreate&&vu(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:m,beforeUpdate:p,updated:E,activated:D,deactivated:k,beforeDestroy:y,beforeUnmount:A,destroyed:M,unmounted:z,render:Z,renderTracked:de,renderTriggered:be,errorCaptured:tt,serverPrefetch:Ee,expose:fn,inheritAttrs:jn,components:Nr,directives:Bi,filters:eu}=e;if(c&&ry(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ae=o[he];q(ae)&&(r[he]=ae.bind(n))}if(i){const he=i.call(n,n);Te(he)&&(t.data=Cl(he))}if(Ia=!0,s)for(const he in s){const ae=s[he],It=q(ae)?ae.bind(n,n):q(ae.get)?ae.get.bind(n,n):lt,Fo=!q(ae)&&q(ae.set)?ae.set.bind(n):lt,Rr=nt({get:It,set:Fo});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Rr.value,set:zn=>Rr.value=zn})}if(a)for(const he in a)id(a[he],r,n,he);if(l){const he=q(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ae=>{$v(ae,he[ae])})}u&&vu(u,t,"c");function ze(he,ae){K(ae)?ae.forEach(It=>he(It.bind(n))):ae&&he(ae.bind(n))}if(ze(Hv,h),ze(Kv,m),ze(qv,p),ze(Wv,E),ze(Bv,D),ze(jv,k),ze(Jv,tt),ze(Qv,de),ze(Xv,be),ze(Gv,A),ze(nd,z),ze(Yv,Ee),K(fn))if(fn.length){const he=t.exposed||(t.exposed={});fn.forEach(ae=>{Object.defineProperty(he,ae,{get:()=>n[ae],set:It=>n[ae]=It})})}else t.exposed||(t.exposed={});Z&&t.render===lt&&(t.render=Z),jn!=null&&(t.inheritAttrs=jn),Nr&&(t.components=Nr),Bi&&(t.directives=Bi)}function ry(t,e,n=lt,r=!1){K(t)&&(t=Ta(t));for(const i in t){const s=t[i];let o;Te(s)?"default"in s?o=zo(s.from||i,s.default,!0):o=zo(s.from||i):o=zo(s),Ve(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function vu(t,e,n){ct(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function id(t,e,n,r){const i=r.includes(".")?Zf(n,r):()=>n[r];if(De(t)){const s=e[t];q(s)&&rs(i,s)}else if(q(t))rs(i,t.bind(n));else if(Te(t))if(K(t))t.forEach(s=>id(s,e,n,r));else{const s=q(t.handler)?t.handler.bind(n):e[t.handler];q(s)&&rs(i,s,t)}}function sd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>ws(l,c,o,!0)),ws(l,e,o)),s.set(e,l),l}function ws(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ws(t,s,n,!0),i&&i.forEach(o=>ws(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=iy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iy={data:yu,props:pn,emits:pn,methods:pn,computed:pn,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:pn,directives:pn,watch:oy,provide:yu,inject:sy};function yu(t,e){return e?t?function(){return je(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function sy(t,e){return pn(Ta(t),Ta(e))}function Ta(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Fe(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?je(je(Object.create(null),t),e):e}function oy(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=Fe(t[r],e[r]);return n}function ay(t,e,n,r=!1){const i={},s={};gs(s,ro,1),t.propsDefaults=Object.create(null),od(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:gv(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function ly(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=re(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let m=u[h];if(eo(t.emitsOptions,m))continue;const p=e[m];if(l)if(X(s,m))p!==s[m]&&(s[m]=p,c=!0);else{const E=wt(m);i[E]=Sa(l,a,E,p,t,!1)}else p!==s[m]&&(s[m]=p,c=!0)}}}else{od(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=wr(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Sa(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!X(e,h)&&!0)&&(delete s[h],c=!0)}c&&Nt(t,"set","$attrs")}function od(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ns(l))continue;const c=e[l];let u;i&&X(i,u=wt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:eo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=re(n),c=a||oe;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Sa(i,l,h,c[h],t,!X(c,h))}}return o}function Sa(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&q(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(ur(i),r=c[n]=l.call(null,e),Sn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===wr(n))&&(r=!0))}return r}function ad(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!q(t)){const u=h=>{l=!0;const[m,p]=ad(h,e,!0);je(o,m),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,er),er;if(K(s))for(let u=0;u<s.length;u++){const h=wt(s[u]);bu(h)&&(o[h]=oe)}else if(s)for(const u in s){const h=wt(u);if(bu(h)){const m=s[u],p=o[h]=K(m)||q(m)?{type:m}:m;if(p){const E=Eu(Boolean,p.type),D=Eu(String,p.type);p[0]=E>-1,p[1]=D<0||E<D,(E>-1||X(p,"default"))&&a.push(h)}}}const c=[o,a];return r.set(t,c),c}function bu(t){return t[0]!=="$"}function wu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function _u(t,e){return wu(t)===wu(e)}function Eu(t,e){return K(e)?e.findIndex(n=>_u(n,t)):q(e)&&_u(e,t)?0:-1}const ld=t=>t[0]==="_"||t==="$stable",Pl=t=>K(t)?t.map(dt):[dt(t)],cy=(t,e,n)=>{if(e._n)return e;const r=Rv((...i)=>Pl(e(...i)),n);return r._c=!1,r},cd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ld(i))continue;const s=t[i];if(q(s))e[i]=cy(i,s,r);else if(s!=null){const o=Pl(s);e[i]=()=>o}}},ud=(t,e)=>{const n=Pl(e);t.slots.default=()=>n},uy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),gs(e,"_",n)):cd(e,t.slots={})}else t.slots={},e&&ud(t,e);gs(t.slots,ro,1)},hy=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(je(i,e),!n&&a===1&&delete i._):(s=!e.$stable,cd(e,i)),o=e}else e&&(ud(t,e),o={default:1});if(s)for(const a in i)!ld(a)&&!(a in o)&&delete i[a]};function hd(){return{app:null,config:{isNativeTag:Mg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fy=0;function dy(t,e){return function(r,i=null){q(r)||(r=Object.assign({},r)),i!=null&&!Te(i)&&(i=null);const s=hd(),o=new Set;let a=!1;const l=s.app={_uid:fy++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ry,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&q(c.install)?(o.add(c),c.install(l,...u)):q(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const m=we(r,i);return m.appContext=s,u&&e?e(m,c):t(m,c,h),a=!0,l._container=c,c.__vue_app__=l,Fl(m.component)||m.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Aa(t,e,n,r,i=!1){if(K(t)){t.forEach((m,p)=>Aa(m,e&&(K(e)?e[p]:e),n,r,i));return}if(is(r)&&!i)return;const s=r.shapeFlag&4?Fl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(De(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Ve(c)&&(c.value=null)),q(l))Jt(l,a,12,[o,u]);else{const m=De(l),p=Ve(l);if(m||p){const E=()=>{if(t.f){const D=m?u[l]:l.value;i?K(D)&&wl(D,s):K(D)?D.includes(s)||D.push(s):m?(u[l]=[s],X(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,X(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ke(E,n)):E()}}}const Ke=Uv;function my(t){return py(t)}function py(t,e){const n=jg();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:m,setScopeId:p=lt,cloneNode:E,insertStaticContent:D}=t,k=(f,d,g,b=null,v=null,T=null,C=!1,I=null,S=!!d.dynamicChildren)=>{if(f===d)return;f&&!Pr(f,d)&&(b=ji(f),jt(f,v,T,!0),f=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:w,ref:L,shapeFlag:R}=d;switch(w){case Ml:y(f,d,g,b);break;case ni:A(f,d,g,b);break;case Ho:f==null&&M(d,g,b,C);break;case St:Bi(f,d,g,b,v,T,C,I,S);break;default:R&1?de(f,d,g,b,v,T,C,I,S):R&6?eu(f,d,g,b,v,T,C,I,S):(R&64||R&128)&&w.process(f,d,g,b,v,T,C,I,S,Hn)}L!=null&&v&&Aa(L,f&&f.ref,T,d||f,!d)},y=(f,d,g,b)=>{if(f==null)r(d.el=a(d.children),g,b);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},A=(f,d,g,b)=>{f==null?r(d.el=l(d.children||""),g,b):d.el=f.el},M=(f,d,g,b)=>{[f.el,f.anchor]=D(f.children,d,g,b,f.el,f.anchor)},z=({el:f,anchor:d},g,b)=>{let v;for(;f&&f!==d;)v=m(f),r(f,g,b),f=v;r(d,g,b)},Z=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=m(f),i(f),f=g;i(d)},de=(f,d,g,b,v,T,C,I,S)=>{C=C||d.type==="svg",f==null?be(d,g,b,v,T,C,I,S):fn(f,d,v,T,C,I,S)},be=(f,d,g,b,v,T,C,I)=>{let S,w;const{type:L,props:R,shapeFlag:F,transition:j,patchFlag:Q,dirs:ie}=f;if(f.el&&E!==void 0&&Q===-1)S=f.el=E(f.el);else{if(S=f.el=o(f.type,T,R&&R.is,R),F&8?u(S,f.children):F&16&&Ee(f.children,S,null,b,v,T&&L!=="foreignObject",C,I),ie&&dn(f,null,b,"created"),R){for(const le in R)le!=="value"&&!ns(le)&&s(S,le,null,R[le],T,f.children,b,v,Tt);"value"in R&&s(S,"value",null,R.value),(w=R.onVnodeBeforeMount)&&ht(w,b,f)}tt(S,f,f.scopeId,C,b)}ie&&dn(f,null,b,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;se&&j.beforeEnter(S),r(S,d,g),((w=R&&R.onVnodeMounted)||se||ie)&&Ke(()=>{w&&ht(w,b,f),se&&j.enter(S),ie&&dn(f,null,b,"mounted")},v)},tt=(f,d,g,b,v)=>{if(g&&p(f,g),b)for(let T=0;T<b.length;T++)p(f,b[T]);if(v){let T=v.subTree;if(d===T){const C=v.vnode;tt(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},Ee=(f,d,g,b,v,T,C,I,S=0)=>{for(let w=S;w<f.length;w++){const L=f[w]=I?Wt(f[w]):dt(f[w]);k(null,L,d,g,b,v,T,C,I)}},fn=(f,d,g,b,v,T,C)=>{const I=d.el=f.el;let{patchFlag:S,dynamicChildren:w,dirs:L}=d;S|=f.patchFlag&16;const R=f.props||oe,F=d.props||oe;let j;g&&mn(g,!1),(j=F.onVnodeBeforeUpdate)&&ht(j,g,d,f),L&&dn(d,f,g,"beforeUpdate"),g&&mn(g,!0);const Q=v&&d.type!=="foreignObject";if(w?jn(f.dynamicChildren,w,I,g,b,Q,T):C||It(f,d,I,null,g,b,Q,T,!1),S>0){if(S&16)Nr(I,d,R,F,g,b,v);else if(S&2&&R.class!==F.class&&s(I,"class",null,F.class,v),S&4&&s(I,"style",R.style,F.style,v),S&8){const ie=d.dynamicProps;for(let se=0;se<ie.length;se++){const le=ie[se],rt=R[le],Kn=F[le];(Kn!==rt||le==="value")&&s(I,le,rt,Kn,v,f.children,g,b,Tt)}}S&1&&f.children!==d.children&&u(I,d.children)}else!C&&w==null&&Nr(I,d,R,F,g,b,v);((j=F.onVnodeUpdated)||L)&&Ke(()=>{j&&ht(j,g,d,f),L&&dn(d,f,g,"updated")},b)},jn=(f,d,g,b,v,T,C)=>{for(let I=0;I<d.length;I++){const S=f[I],w=d[I],L=S.el&&(S.type===St||!Pr(S,w)||S.shapeFlag&70)?h(S.el):g;k(S,w,L,null,b,v,T,C,!0)}},Nr=(f,d,g,b,v,T,C)=>{if(g!==b){for(const I in b){if(ns(I))continue;const S=b[I],w=g[I];S!==w&&I!=="value"&&s(f,I,w,S,C,d.children,v,T,Tt)}if(g!==oe)for(const I in g)!ns(I)&&!(I in b)&&s(f,I,g[I],null,C,d.children,v,T,Tt);"value"in b&&s(f,"value",g.value,b.value)}},Bi=(f,d,g,b,v,T,C,I,S)=>{const w=d.el=f?f.el:a(""),L=d.anchor=f?f.anchor:a("");let{patchFlag:R,dynamicChildren:F,slotScopeIds:j}=d;j&&(I=I?I.concat(j):j),f==null?(r(w,g,b),r(L,g,b),Ee(d.children,g,L,v,T,C,I,S)):R>0&&R&64&&F&&f.dynamicChildren?(jn(f.dynamicChildren,F,g,v,T,C,I),(d.key!=null||v&&d===v.subTree)&&fd(f,d,!0)):It(f,d,g,L,v,T,C,I,S)},eu=(f,d,g,b,v,T,C,I,S)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,g,b,C,S):Lo(d,g,b,v,T,C,S):ze(f,d,S)},Lo=(f,d,g,b,v,T,C)=>{const I=f.component=Sy(f,b,v);if(ed(f)&&(I.ctx.renderer=Hn),Ay(I),I.asyncDep){if(v&&v.registerDep(I,he),!f.el){const S=I.subTree=we(ni);A(null,S,d,g)}return}he(I,f,d,g,v,T,C)},ze=(f,d,g)=>{const b=d.component=f.component;if(Mv(f,d,g))if(b.asyncDep&&!b.asyncResolved){ae(b,d,g);return}else b.next=d,Av(b.update),b.update();else d.el=f.el,b.vnode=d},he=(f,d,g,b,v,T,C)=>{const I=()=>{if(f.isMounted){let{next:L,bu:R,u:F,parent:j,vnode:Q}=f,ie=L,se;mn(f,!1),L?(L.el=Q.el,ae(f,L,C)):L=Q,R&&Bo(R),(se=L.props&&L.props.onVnodeBeforeUpdate)&&ht(se,j,L,Q),mn(f,!0);const le=jo(f),rt=f.subTree;f.subTree=le,k(rt,le,h(rt.el),ji(rt),f,v,T),L.el=le.el,ie===null&&Lv(f,le.el),F&&Ke(F,v),(se=L.props&&L.props.onVnodeUpdated)&&Ke(()=>ht(se,j,L,Q),v)}else{let L;const{el:R,props:F}=d,{bm:j,m:Q,parent:ie}=f,se=is(d);if(mn(f,!1),j&&Bo(j),!se&&(L=F&&F.onVnodeBeforeMount)&&ht(L,ie,d),mn(f,!0),R&&$o){const le=()=>{f.subTree=jo(f),$o(R,f.subTree,f,v,null)};se?d.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=jo(f);k(null,le,g,b,f,v,T),d.el=le.el}if(Q&&Ke(Q,v),!se&&(L=F&&F.onVnodeMounted)){const le=d;Ke(()=>ht(L,ie,le),v)}(d.shapeFlag&256||ie&&is(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Ke(f.a,v),f.isMounted=!0,d=g=b=null}},S=f.effect=new Tl(I,()=>qf(w),f.scope),w=f.update=()=>S.run();w.id=f.uid,mn(f,!0),w()},ae=(f,d,g)=>{d.component=f;const b=f.vnode.props;f.vnode=d,f.next=null,ly(f,d.props,b,g),hy(f,d.children,g),_r(),Zs(void 0,f.update),Er()},It=(f,d,g,b,v,T,C,I,S=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,R=d.children,{patchFlag:F,shapeFlag:j}=d;if(F>0){if(F&128){Rr(w,R,g,b,v,T,C,I,S);return}else if(F&256){Fo(w,R,g,b,v,T,C,I,S);return}}j&8?(L&16&&Tt(w,v,T),R!==w&&u(g,R)):L&16?j&16?Rr(w,R,g,b,v,T,C,I,S):Tt(w,v,T,!0):(L&8&&u(g,""),j&16&&Ee(R,g,b,v,T,C,I,S))},Fo=(f,d,g,b,v,T,C,I,S)=>{f=f||er,d=d||er;const w=f.length,L=d.length,R=Math.min(w,L);let F;for(F=0;F<R;F++){const j=d[F]=S?Wt(d[F]):dt(d[F]);k(f[F],j,g,null,v,T,C,I,S)}w>L?Tt(f,v,T,!0,!1,R):Ee(d,g,b,v,T,C,I,S,R)},Rr=(f,d,g,b,v,T,C,I,S)=>{let w=0;const L=d.length;let R=f.length-1,F=L-1;for(;w<=R&&w<=F;){const j=f[w],Q=d[w]=S?Wt(d[w]):dt(d[w]);if(Pr(j,Q))k(j,Q,g,null,v,T,C,I,S);else break;w++}for(;w<=R&&w<=F;){const j=f[R],Q=d[F]=S?Wt(d[F]):dt(d[F]);if(Pr(j,Q))k(j,Q,g,null,v,T,C,I,S);else break;R--,F--}if(w>R){if(w<=F){const j=F+1,Q=j<L?d[j].el:b;for(;w<=F;)k(null,d[w]=S?Wt(d[w]):dt(d[w]),g,Q,v,T,C,I,S),w++}}else if(w>F)for(;w<=R;)jt(f[w],v,T,!0),w++;else{const j=w,Q=w,ie=new Map;for(w=Q;w<=F;w++){const Xe=d[w]=S?Wt(d[w]):dt(d[w]);Xe.key!=null&&ie.set(Xe.key,w)}let se,le=0;const rt=F-Q+1;let Kn=!1,ru=0;const Dr=new Array(rt);for(w=0;w<rt;w++)Dr[w]=0;for(w=j;w<=R;w++){const Xe=f[w];if(le>=rt){jt(Xe,v,T,!0);continue}let ut;if(Xe.key!=null)ut=ie.get(Xe.key);else for(se=Q;se<=F;se++)if(Dr[se-Q]===0&&Pr(Xe,d[se])){ut=se;break}ut===void 0?jt(Xe,v,T,!0):(Dr[ut-Q]=w+1,ut>=ru?ru=ut:Kn=!0,k(Xe,d[ut],g,null,v,T,C,I,S),le++)}const iu=Kn?gy(Dr):er;for(se=iu.length-1,w=rt-1;w>=0;w--){const Xe=Q+w,ut=d[Xe],su=Xe+1<L?d[Xe+1].el:b;Dr[w]===0?k(null,ut,g,su,v,T,C,I,S):Kn&&(se<0||w!==iu[se]?zn(ut,g,su,2):se--)}}},zn=(f,d,g,b,v=null)=>{const{el:T,type:C,transition:I,children:S,shapeFlag:w}=f;if(w&6){zn(f.component.subTree,d,g,b);return}if(w&128){f.suspense.move(d,g,b);return}if(w&64){C.move(f,d,g,Hn);return}if(C===St){r(T,d,g);for(let R=0;R<S.length;R++)zn(S[R],d,g,b);r(f.anchor,d,g);return}if(C===Ho){z(f,d,g);return}if(b!==2&&w&1&&I)if(b===0)I.beforeEnter(T),r(T,d,g),Ke(()=>I.enter(T),v);else{const{leave:R,delayLeave:F,afterLeave:j}=I,Q=()=>r(T,d,g),ie=()=>{R(T,()=>{Q(),j&&j()})};F?F(T,Q,ie):ie()}else r(T,d,g)},jt=(f,d,g,b=!1,v=!1)=>{const{type:T,props:C,ref:I,children:S,dynamicChildren:w,shapeFlag:L,patchFlag:R,dirs:F}=f;if(I!=null&&Aa(I,null,g,f,!0),L&256){d.ctx.deactivate(f);return}const j=L&1&&F,Q=!is(f);let ie;if(Q&&(ie=C&&C.onVnodeBeforeUnmount)&&ht(ie,d,f),L&6)xg(f.component,g,b);else{if(L&128){f.suspense.unmount(g,b);return}j&&dn(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,g,v,Hn,b):w&&(T!==St||R>0&&R&64)?Tt(w,d,g,!1,!0):(T===St&&R&384||!v&&L&16)&&Tt(S,d,g),b&&tu(f)}(Q&&(ie=C&&C.onVnodeUnmounted)||j)&&Ke(()=>{ie&&ht(ie,d,f),j&&dn(f,null,d,"unmounted")},g)},tu=f=>{const{type:d,el:g,anchor:b,transition:v}=f;if(d===St){Cg(g,b);return}if(d===Ho){Z(f);return}const T=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:I}=v,S=()=>C(g,T);I?I(f.el,T,S):S()}else T()},Cg=(f,d)=>{let g;for(;f!==d;)g=m(f),i(f),f=g;i(d)},xg=(f,d,g)=>{const{bum:b,scope:v,update:T,subTree:C,um:I}=f;b&&Bo(b),v.stop(),T&&(T.active=!1,jt(C,f,d,g)),I&&Ke(I,d),Ke(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Tt=(f,d,g,b=!1,v=!1,T=0)=>{for(let C=T;C<f.length;C++)jt(f[C],d,g,b,v)},ji=f=>f.shapeFlag&6?ji(f.component.subTree):f.shapeFlag&128?f.suspense.next():m(f.anchor||f.el),nu=(f,d,g)=>{f==null?d._vnode&&jt(d._vnode,null,null,!0):k(d._vnode||null,f,d,null,null,null,g),Yf(),d._vnode=f},Hn={p:k,um:jt,m:zn,r:tu,mt:Lo,mc:Ee,pc:It,pbc:jn,n:ji,o:t};let Uo,$o;return e&&([Uo,$o]=e(Hn)),{render:nu,hydrate:Uo,createApp:dy(nu,Uo)}}function mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fd(t,e,n=!1){const r=t.children,i=e.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Wt(i[s]),a.el=o.el),n||fd(o,a))}}function gy(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const vy=t=>t.__isTeleport,St=Symbol(void 0),Ml=Symbol(void 0),ni=Symbol(void 0),Ho=Symbol(void 0),zr=[];let ot=null;function Zt(t=!1){zr.push(ot=t?null:[])}function yy(){zr.pop(),ot=zr[zr.length-1]||null}let ri=1;function Iu(t){ri+=t}function by(t){return t.dynamicChildren=ri>0?ot||er:null,yy(),ri>0&&ot&&ot.push(t),t}function en(t,e,n,r,i,s){return by(me(t,e,n,r,i,s,!0))}function ka(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const ro="__vInternal",dd=({key:t})=>t!=null?t:null,ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Ve(t)||q(t)?{i:gt,r:t,k:e,f:!!n}:t:null;function me(t,e=null,n=null,r=0,i=null,s=t===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dd(e),ref:e&&ss(e),scopeId:to,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Ll(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),ri>0&&!o&&ot&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ot.push(l),l}const we=wy;function wy(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Zv)&&(t=ni),ka(t)){const a=cr(t,e,!0);return n&&Ll(a,n),ri>0&&!s&&ot&&(a.shapeFlag&6?ot[ot.indexOf(t)]=a:ot.push(a)),a.patchFlag|=-2,a}if(Ny(t)&&(t=t.__vccOpts),e){e=_y(e);let{class:a,style:l}=e;a&&!De(a)&&(e.class=lr(a)),Te(l)&&(jf(l)&&!K(l)&&(l=je({},l)),e.style=qs(l))}const o=De(t)?1:Fv(t)?128:vy(t)?64:Te(t)?4:q(t)?2:0;return me(t,e,n,r,i,o,s,!0)}function _y(t){return t?jf(t)||ro in t?je({},t):t:null}function cr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ey(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dd(a),ref:e&&e.ref?n&&i?K(i)?i.concat(ss(e)):[i,ss(e)]:ss(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor}}function md(t=" ",e=0){return we(Ml,null,t,e)}function dt(t){return t==null||typeof t=="boolean"?we(ni):K(t)?we(St,null,t.slice()):typeof t=="object"?Wt(t):we(Ml,null,String(t))}function Wt(t){return t.el===null||t.memo?t:cr(t)}function Ll(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ll(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ro in e)?e._ctx=gt:i===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[md(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ey(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=lr([e.class,r.class]));else if(i==="style")e.style=qs([e.style,r.style]);else if(Ws(i)){const s=e[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function ht(t,e,n,r=null){ct(t,e,7,[n,r])}const Iy=hd();let Ty=0;function Sy(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Iy,s={uid:Ty++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(r,i),emitsOptions:Qf(r,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xv.bind(null,s),t.ce&&t.ce(s),s}let Oe=null;const ur=t=>{Oe=t,t.scope.on()},Sn=()=>{Oe&&Oe.scope.off(),Oe=null};function pd(t){return t.vnode.shapeFlag&4}let ii=!1;function Ay(t,e=!1){ii=e;const{props:n,children:r}=t.vnode,i=pd(t);ay(t,n,i,e),uy(t,r);const s=i?ky(t,e):void 0;return ii=!1,s}function ky(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zf(new Proxy(t.ctx,ty));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?xy(t):null;ur(t),_r();const s=Jt(r,t,0,[t.props,i]);if(Er(),Sn(),Cf(s)){if(s.then(Sn,Sn),e)return s.then(o=>{Tu(t,o,e)}).catch(o=>{Js(o,t,0)});t.asyncDep=s}else Tu(t,s,e)}else gd(t,e)}function Tu(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Hf(e)),gd(t,n)}let Su;function gd(t,e,n){const r=t.type;if(!t.render){if(!e&&Su&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=je(je({isCustomElement:s,delimiters:a},o),l);r.render=Su(i,c)}}t.render=r.render||lt}ur(t),_r(),ny(t),Er(),Sn()}function Cy(t){return new Proxy(t.attrs,{get(e,n){return Je(t,"get","$attrs"),e[n]}})}function xy(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Cy(t))},slots:t.slots,emit:t.emit,expose:e}}function Fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Hf(zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)}}))}function Oy(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function Ny(t){return q(t)&&"__vccOpts"in t}const nt=(t,e)=>Ev(t,e,ii);function vd(t,e,n){const r=arguments.length;return r===2?Te(e)&&!K(e)?ka(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ka(n)&&(n=[n]),we(t,e,n))}const Ry="3.2.37",Dy="http://www.w3.org/2000/svg",vn=typeof document<"u"?document:null,Au=vn&&vn.createElement("template"),Py={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?vn.createElementNS(Dy,t):vn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Au.innerHTML=r?`<svg>${t}</svg>`:t;const a=Au.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function My(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ly(t,e,n){const r=t.style,i=De(n);if(n&&!i){for(const s in n)Ca(r,s,n[s]);if(e&&!De(e))for(const s in e)n[s]==null&&Ca(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const ku=/\s*!important$/;function Ca(t,e,n){if(K(n))n.forEach(r=>Ca(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Fy(t,e);ku.test(n)?t.setProperty(wr(r),n.replace(ku,""),"important"):t[r]=n}}const Cu=["Webkit","Moz","ms"],Ko={};function Fy(t,e){const n=Ko[e];if(n)return n;let r=wt(e);if(r!=="filter"&&r in t)return Ko[e]=r;r=Xs(r);for(let i=0;i<Cu.length;i++){const s=Cu[i]+r;if(s in t)return Ko[e]=s}return e}const xu="http://www.w3.org/1999/xlink";function Uy(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xu,e.slice(6,e.length)):t.setAttributeNS(xu,e,n);else{const s=Ng(e);n==null||s&&!Tf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function $y(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[yd,Vy]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let xa=0;const By=Promise.resolve(),jy=()=>{xa=0},zy=()=>xa||(By.then(jy),xa=yd());function Hy(t,e,n,r){t.addEventListener(e,n,r)}function Ky(t,e,n,r){t.removeEventListener(e,n,r)}function qy(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Wy(e);if(r){const c=s[e]=Gy(r,i);Hy(t,a,c,l)}else o&&(Ky(t,a,o,l),s[e]=void 0)}}const Ou=/(?:Once|Passive|Capture)$/;function Wy(t){let e;if(Ou.test(t)){e={};let n;for(;n=t.match(Ou);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[wr(t.slice(2)),e]}function Gy(t,e){const n=r=>{const i=r.timeStamp||yd();(Vy||i>=n.attached-1)&&ct(Yy(r,n.value),e,5,[r])};return n.value=t,n.attached=zy(),n}function Yy(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Nu=/^on[a-z]/,Xy=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?My(t,r,i):e==="style"?Ly(t,n,r):Ws(e)?bl(e)||qy(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qy(t,e,r,i))?$y(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Uy(t,e,r,i))};function Qy(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Nu.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Nu.test(e)&&De(n)?!1:e in t}const Jy=je({patchProp:Xy},Py);let Ru;function Zy(){return Ru||(Ru=my(Jy))}const eb=(...t)=>{const e=Zy().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=tb(r);if(!i)return;const s=e._component;!q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tb(t){return De(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Du(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Du(Object(n),!0).forEach(function(r){ib(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Du(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _s(t){return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(t)}function nb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rb(t,e,n){return e&&Pu(t.prototype,e),n&&Pu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ib(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ul(t,e){return ob(t)||lb(t,e)||bd(t,e)||ub()}function io(t){return sb(t)||ab(t)||bd(t)||cb()}function sb(t){if(Array.isArray(t))return Oa(t)}function ob(t){if(Array.isArray(t))return t}function ab(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function bd(t,e){if(!!t){if(typeof t=="string")return Oa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oa(t,e)}}function Oa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ub(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mu=function(){},$l={},wd={},_d=null,Ed={mark:Mu,measure:Mu};try{typeof window<"u"&&($l=window),typeof document<"u"&&(wd=document),typeof MutationObserver<"u"&&(_d=MutationObserver),typeof performance<"u"&&(Ed=performance)}catch{}var hb=$l.navigator||{},Lu=hb.userAgent,Fu=Lu===void 0?"":Lu,sn=$l,ce=wd,Uu=_d,Gi=Ed;sn.document;var Vt=!!ce.documentElement&&!!ce.head&&typeof ce.addEventListener=="function"&&typeof ce.createElement=="function",Id=~Fu.indexOf("MSIE")||~Fu.indexOf("Trident/"),Rt="___FONT_AWESOME___",Na=16,Td="fa",Sd="svg-inline--fa",Nn="data-fa-i2svg",Ra="data-fa-pseudo-element",fb="data-fa-pseudo-element-pending",Vl="data-prefix",Bl="data-icon",$u="fontawesome-i2svg",db="async",mb=["HTML","HEAD","STYLE","SCRIPT"],Ad=function(){try{return!0}catch{return!1}}(),jl={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Es={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},kd={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},pb={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},gb=/fa[srltdbk]?[\-\ ]/,Cd="fa-layers-text",vb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,yb={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},xd=[1,2,3,4,5,6,7,8,9,10],bb=xd.concat([11,12,13,14,15,16,17,18,19,20]),wb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_b=[].concat(io(Object.keys(Es)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yn.GROUP,yn.SWAP_OPACITY,yn.PRIMARY,yn.SECONDARY]).concat(xd.map(function(t){return"".concat(t,"x")})).concat(bb.map(function(t){return"w-".concat(t)})),Od=sn.FontAwesomeConfig||{};function Eb(t){var e=ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ib(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ce&&typeof ce.querySelector=="function"){var Tb=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tb.forEach(function(t){var e=Ul(t,2),n=e[0],r=e[1],i=Ib(Eb(n));i!=null&&(Od[r]=i)})}var Sb={familyPrefix:Td,styleDefault:"solid",replacementClass:Sd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Hr=O(O({},Sb),Od);Hr.autoReplaceSvg||(Hr.observeMutations=!1);var U={};Object.keys(Hr).forEach(function(t){Object.defineProperty(U,t,{enumerable:!0,set:function(n){Hr[t]=n,os.forEach(function(r){return r(U)})},get:function(){return Hr[t]}})});sn.FontAwesomeConfig=U;var os=[];function Ab(t){return os.push(t),function(){os.splice(os.indexOf(t),1)}}var Ht=Na,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kb(t){if(!(!t||!Vt)){var e=ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ce.head.insertBefore(e,r),t}}var Cb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function si(){for(var t=12,e="";t-- >0;)e+=Cb[Math.random()*62|0];return e}function Ir(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zl(t){return t.classList?Ir(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Nd(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Nd(t[n]),'" ')},"").trim()}function so(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Hl(t){return t.size!==vt.size||t.x!==vt.x||t.y!==vt.y||t.rotate!==vt.rotate||t.flipX||t.flipY}function Ob(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Nb(t){var e=t.transform,n=t.width,r=n===void 0?Na:n,i=t.height,s=i===void 0?Na:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Id?l+="translate(".concat(e.x/Ht-r/2,"em, ").concat(e.y/Ht-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Ht,"em), calc(-50% + ").concat(e.y/Ht,"em)) "):l+="translate(".concat(e.x/Ht,"em, ").concat(e.y/Ht,"em) "),l+="scale(".concat(e.size/Ht*(e.flipX?-1:1),", ").concat(e.size/Ht*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Rb=`:root, :host {
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
}`;function Rd(){var t=Td,e=Sd,n=U.familyPrefix,r=U.replacementClass,i=Rb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Vu=!1;function qo(){U.autoAddCss&&!Vu&&(kb(Rd()),Vu=!0)}var Db={mixout:function(){return{dom:{css:Rd,insertCss:qo}}},hooks:function(){return{beforeDOMElementCreation:function(){qo()},beforeI2svg:function(){qo()}}}},Dt=sn||{};Dt[Rt]||(Dt[Rt]={});Dt[Rt].styles||(Dt[Rt].styles={});Dt[Rt].hooks||(Dt[Rt].hooks={});Dt[Rt].shims||(Dt[Rt].shims=[]);var at=Dt[Rt],Dd=[],Pb=function t(){ce.removeEventListener("DOMContentLoaded",t),Is=1,Dd.map(function(e){return e()})},Is=!1;Vt&&(Is=(ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ce.readyState),Is||ce.addEventListener("DOMContentLoaded",Pb));function Mb(t){!Vt||(Is?setTimeout(t,0):Dd.push(t))}function wi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Nd(t):"<".concat(e," ").concat(xb(r),">").concat(s.map(wi).join(""),"</").concat(e,">")}function Bu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Lb=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wo=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Lb(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Fb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Da(t){var e=Fb(t);return e.length===1?e[0].toString(16):null}function Ub(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ju(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Pa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ju(e);typeof at.hooks.addPack=="function"&&!i?at.hooks.addPack(t,ju(e)):at.styles[t]=O(O({},at.styles[t]||{}),s),t==="fas"&&Pa("fa",e)}var Kr=at.styles,$b=at.shims,Vb=Object.values(kd),Kl=null,Pd={},Md={},Ld={},Fd={},Ud={},Bb=Object.keys(jl);function jb(t){return~_b.indexOf(t)}function zb(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!jb(i)?i:null}var $d=function(){var e=function(s){return Wo(Kr,function(o,a,l){return o[l]=Wo(a,s,{}),o},{})};Pd=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Md=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Ud=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Kr||U.autoFetchSvg,r=Wo($b,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Ld=r.names,Fd=r.unicodes,Kl=oo(U.styleDefault)};Ab(function(t){Kl=oo(t.styleDefault)});$d();function ql(t,e){return(Pd[t]||{})[e]}function Hb(t,e){return(Md[t]||{})[e]}function Xn(t,e){return(Ud[t]||{})[e]}function Vd(t){return Ld[t]||{prefix:null,iconName:null}}function Kb(t){var e=Fd[t],n=ql("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function on(){return Kl}var Wl=function(){return{prefix:null,iconName:null,rest:[]}};function oo(t){var e=jl[t],n=Es[t]||Es[e],r=t in at.styles?t:null;return n||r||null}function ao(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=zb(U.familyPrefix,a);if(Kr[a]?(a=Vb.includes(a)?pb[a]:a,i=a,o.prefix=a):Bb.indexOf(a)>-1?(i=a,o.prefix=oo(a)):l?o.iconName=l:a!==U.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var c=i==="fa"?Vd(o.iconName):{},u=Xn(o.prefix,o.iconName);c.prefix&&(i=null),o.iconName=c.iconName||u||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Kr.far&&Kr.fas&&!U.autoFetchSvg&&(o.prefix="fas")}return o},Wl());return(s.prefix==="fa"||i==="fa")&&(s.prefix=on()||"fas"),s}var qb=function(){function t(){nb(this,t),this.definitions={}}return rb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Pa(a,o[a]);var l=kd[a];l&&Pa(l,o[a]),$d()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),zu=[],Qn={},rr={},Wb=Object.keys(rr);function Gb(t,e){var n=e.mixoutsTo;return zu=t,Qn={},Object.keys(rr).forEach(function(r){Wb.indexOf(r)===-1&&delete rr[r]}),zu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),_s(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Qn[o]||(Qn[o]=[]),Qn[o].push(s[o])})}r.provides&&r.provides(rr)}),n}function Ma(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Qn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Rn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Qn[t]||[];i.forEach(function(s){s.apply(null,n)})}function Pt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rr[t]?rr[t].apply(null,e):void 0}function La(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||on();if(!!e)return e=Xn(n,e)||e,Bu(Bd.definitions,n,e)||Bu(at.styles,n,e)}var Bd=new qb,Yb=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Rn("noAuto")},Xb={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Rn("beforeI2svg",e),Pt("pseudoElements2svg",e),Pt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,Mb(function(){Jb({autoReplaceSvgRoot:n}),Rn("watch",e)})}},Qb={icon:function(e){if(e===null)return null;if(_s(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=oo(e[0]);return{prefix:r,iconName:Xn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(U.familyPrefix,"-"))>-1||e.match(gb))){var i=ao(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||on(),iconName:Xn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=on();return{prefix:s,iconName:Xn(s,e)||e}}}},et={noAuto:Yb,config:U,dom:Xb,parse:Qb,library:Bd,findIconDefinition:La,toHtml:wi},Jb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ce:n;(Object.keys(at.styles).length>0||U.autoFetchSvg)&&Vt&&U.autoReplaceSvg&&et.dom.i2svg({node:r})};function lo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return wi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Vt){var r=ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Zb(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Hl(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=so(O(O({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function e0(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(U.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function Gl(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,m=t.watchable,p=m===void 0?!1:m,E=r.found?r:n,D=E.width,k=E.height,y=i==="fak",A=[U.replacementClass,s?"".concat(U.familyPrefix,"-").concat(s):""].filter(function(Ee){return h.classes.indexOf(Ee)===-1}).filter(function(Ee){return Ee!==""||!!Ee}).concat(h.classes).join(" "),M={children:[],attributes:O(O({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:A,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(k)})},z=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(D/k*16*.0625,"em")}:{};p&&(M.attributes[Nn]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||si())},children:[l]}),delete M.attributes.title);var Z=O(O({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:O(O({},z),h.styles)}),de=r.found&&n.found?Pt("generateAbstractMask",Z)||{children:[],attributes:{}}:Pt("generateAbstractIcon",Z)||{children:[],attributes:{}},be=de.children,tt=de.attributes;return Z.children=be,Z.attributes=tt,a?e0(Z):Zb(Z)}function Hu(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Nn]="");var u=O({},o.styles);Hl(i)&&(u.transform=Nb({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=so(u);h.length>0&&(c.style=h);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function t0(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=so(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Go=at.styles;function Fa(t){var e=t[0],n=t[1],r=t.slice(4),i=Ul(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(U.familyPrefix,"-").concat(yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.familyPrefix,"-").concat(yn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.familyPrefix,"-").concat(yn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var n0={found:!1,width:512,height:512};function r0(t,e){!Ad&&!U.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ua(t,e){var n=e;return e==="fa"&&U.styleDefault!==null&&(e=on()),new Promise(function(r,i){if(Pt("missingIconAbstract"),n==="fa"){var s=Vd(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Go[e]&&Go[e][t]){var o=Go[e][t];return r(Fa(o))}r0(t,e),r(O(O({},n0),{},{icon:U.showMissingIcons&&t?Pt("missingIconAbstract")||{}:{}}))})}var Ku=function(){},$a=U.measurePerformance&&Gi&&Gi.mark&&Gi.measure?Gi:{mark:Ku,measure:Ku},Ur='FA "6.1.2"',i0=function(e){return $a.mark("".concat(Ur," ").concat(e," begins")),function(){return jd(e)}},jd=function(e){$a.mark("".concat(Ur," ").concat(e," ends")),$a.measure("".concat(Ur," ").concat(e),"".concat(Ur," ").concat(e," begins"),"".concat(Ur," ").concat(e," ends"))},Yl={begin:i0,end:jd},as=function(){};function qu(t){var e=t.getAttribute?t.getAttribute(Nn):null;return typeof e=="string"}function s0(t){var e=t.getAttribute?t.getAttribute(Vl):null,n=t.getAttribute?t.getAttribute(Bl):null;return e&&n}function o0(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(U.replacementClass)}function a0(){if(U.autoReplaceSvg===!0)return ls.replace;var t=ls[U.autoReplaceSvg];return t||ls.replace}function l0(t){return ce.createElementNS("http://www.w3.org/2000/svg",t)}function c0(t){return ce.createElement(t)}function zd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?l0:c0:n;if(typeof t=="string")return ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(zd(o,{ceFn:r}))}),i}function u0(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ls={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(zd(i),n)}),n.getAttribute(Nn)===null&&U.keepOriginalSource){var r=ce.createComment(u0(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zl(n).indexOf(U.replacementClass))return ls.replace(e);var i=new RegExp("".concat(U.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===U.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return wi(a)}).join(`
`);n.setAttribute(Nn,""),n.innerHTML=o}};function Wu(t){t()}function Hd(t,e){var n=typeof e=="function"?e:as;if(t.length===0)n();else{var r=Wu;U.mutateApproach===db&&(r=sn.requestAnimationFrame||Wu),r(function(){var i=a0(),s=Yl.begin("mutate");t.map(i),s(),n()})}}var Xl=!1;function Kd(){Xl=!0}function Va(){Xl=!1}var Ts=null;function Gu(t){if(!!Uu&&!!U.observeMutations){var e=t.treeCallback,n=e===void 0?as:e,r=t.nodeCallback,i=r===void 0?as:r,s=t.pseudoElementsCallback,o=s===void 0?as:s,a=t.observeMutationsRoot,l=a===void 0?ce:a;Ts=new Uu(function(c){if(!Xl){var u=on();Ir(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!qu(h.addedNodes[0])&&(U.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&U.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&qu(h.target)&&~wb.indexOf(h.attributeName))if(h.attributeName==="class"&&s0(h.target)){var m=ao(zl(h.target)),p=m.prefix,E=m.iconName;h.target.setAttribute(Vl,p||u),E&&h.target.setAttribute(Bl,E)}else o0(h.target)&&i(h.target)})}}),Vt&&Ts.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h0(){!Ts||Ts.disconnect()}function f0(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function d0(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ao(zl(t));return i.prefix||(i.prefix=on()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Hb(i.prefix,t.innerText)||ql(i.prefix,Da(t.innerText))),!i.iconName&&U.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function m0(t){var e=Ir(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return U.autoA11y&&(n?e["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||si()):(e["aria-hidden"]="true",e.focusable="false")),e}function p0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=d0(t),r=n.iconName,i=n.prefix,s=n.rest,o=m0(t),a=Ma("parseNodeAttributes",{},t),l=e.styleParser?f0(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var g0=at.styles;function qd(t){var e=U.autoReplaceSvg==="nest"?Yu(t,{styleParser:!1}):Yu(t);return~e.extra.classes.indexOf(Cd)?Pt("generateLayersText",t,e):Pt("generateSvgReplacementMutation",t,e)}function Xu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=ce.documentElement.classList,r=function(h){return n.add("".concat($u,"-").concat(h))},i=function(h){return n.remove("".concat($u,"-").concat(h))},s=U.autoFetchSvg?Object.keys(jl):Object.keys(g0);s.includes("fa")||s.push("fa");var o=[".".concat(Cd,":not([").concat(Nn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Nn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ir(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Yl.begin("onTree"),c=a.reduce(function(u,h){try{var m=qd(h);m&&u.push(m)}catch(p){Ad||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(m){Hd(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(m){l(),h(m)})})}function v0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qd(t).then(function(n){n&&Hd([n],e)})}function y0(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:La(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:La(i||{})),t(r,O(O({},n),{},{mask:i}))}}var b0=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,m=h===void 0?null:h,p=n.titleId,E=p===void 0?null:p,D=n.classes,k=D===void 0?[]:D,y=n.attributes,A=y===void 0?{}:y,M=n.styles,z=M===void 0?{}:M;if(!!e){var Z=e.prefix,de=e.iconName,be=e.icon;return lo(O({type:"icon"},e),function(){return Rn("beforeDOMElementCreation",{iconDefinition:e,params:n}),U.autoA11y&&(m?A["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(E||si()):(A["aria-hidden"]="true",A.focusable="false")),Gl({icons:{main:Fa(be),mask:l?Fa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Z,iconName:de,transform:O(O({},vt),i),symbol:o,title:m,maskId:u,titleId:E,extra:{attributes:A,styles:z,classes:k}})})}},w0={mixout:function(){return{icon:y0(b0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xu,n.nodeCallback=v0,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ce:r,s=n.callback,o=s===void 0?function(){}:s;return Xu(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,m=r.extra;return new Promise(function(p,E){Promise.all([Ua(i,a),u.iconName?Ua(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var k=Ul(D,2),y=k[0],A=k[1];p([n,Gl({icons:{main:y,mask:A},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:m,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=so(a);l.length>0&&(i.style=l);var c;return Hl(o)&&(c=Pt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},_0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return lo({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(U.familyPrefix,"-layers")].concat(io(s)).join(" ")},children:o}]})}}}},E0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return lo({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),t0({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(U.familyPrefix,"-layers-counter")].concat(io(a))}})})}}}},I0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vt:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,m=r.styles,p=m===void 0?{}:m;return lo({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),Hu({content:n,transform:O(O({},vt),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(U.familyPrefix,"-layers-text")].concat(io(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Id){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return U.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hu({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},T0=new RegExp('"',"ug"),Qu=[1105920,1112319];function S0(t){var e=t.replace(T0,""),n=Ub(e,0),r=n>=Qu[0]&&n<=Qu[1],i=e.length===2?e[0]===e[1]:!1;return{value:Da(i?e[0]:e),isSecondary:r||i}}function Ju(t,e){var n="".concat(fb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ir(t.children),o=s.filter(function(de){return de.getAttribute(Ra)===e})[0],a=sn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(vb),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Es[l[2].toLowerCase()]:yb[c],p=S0(h),E=p.value,D=p.isSecondary,k=l[0].startsWith("FontAwesome"),y=ql(m,E),A=y;if(k){var M=Kb(E);M.iconName&&M.prefix&&(y=M.iconName,m=M.prefix)}if(y&&!D&&(!o||o.getAttribute(Vl)!==m||o.getAttribute(Bl)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var z=p0(),Z=z.extra;Z.attributes[Ra]=e,Ua(y,m).then(function(de){var be=Gl(O(O({},z),{},{icons:{main:de,mask:Wl()},prefix:m,iconName:A,extra:Z,watchable:!0})),tt=ce.createElement("svg");e==="::before"?t.insertBefore(tt,t.firstChild):t.appendChild(tt),tt.outerHTML=be.map(function(Ee){return wi(Ee)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function A0(t){return Promise.all([Ju(t,"::before"),Ju(t,"::after")])}function k0(t){return t.parentNode!==document.head&&!~mb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ra)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Zu(t){if(!!Vt)return new Promise(function(e,n){var r=Ir(t.querySelectorAll("*")).filter(k0).map(A0),i=Yl.begin("searchPseudoElements");Kd(),Promise.all(r).then(function(){i(),Va(),e()}).catch(function(){i(),Va(),n()})})}var C0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zu,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ce:r;U.searchPseudoElements&&Zu(i)}}},eh=!1,x0={mixout:function(){return{dom:{unwatch:function(){Kd(),eh=!0}}}},hooks:function(){return{bootstrap:function(){Gu(Ma("mutationObserverCallbacks",{}))},noAuto:function(){h0()},watch:function(n){var r=n.observeMutationsRoot;eh?Va():Gu(Ma("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},th=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},O0={mixout:function(){return{parse:{transform:function(n){return th(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=th(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:m};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},Yo={x:0,y:0,width:"100%",height:"100%"};function nh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function N0(t){return t.tag==="g"?t.children:[t]}var R0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ao(i.split(" ").map(function(o){return o.trim()})):Wl();return s.prefix||(s.prefix=on()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,h=o.width,m=o.icon,p=Ob({transform:l,containerWidth:h,iconWidth:c}),E={tag:"rect",attributes:O(O({},Yo),{},{fill:"white"})},D=u.children?{children:u.children.map(nh)}:{},k={tag:"g",attributes:O({},p.inner),children:[nh(O({tag:u.tag,attributes:O(O({},u.attributes),p.path)},D))]},y={tag:"g",attributes:O({},p.outer),children:[k]},A="mask-".concat(a||si()),M="clip-".concat(a||si()),z={tag:"mask",attributes:O(O({},Yo),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,y]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:N0(m)},z]};return r.push(Z,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(A,")")},Yo)}),{children:r,attributes:i}}}},D0={provides:function(e){var n=!1;sn.matchMedia&&(n=sn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},P0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},M0=[Db,w0,_0,E0,I0,C0,x0,O0,R0,D0,P0];Gb(M0,{mixoutsTo:et});et.noAuto;var Wd=et.config,L0=et.library;et.dom;var Ss=et.parse;et.findIconDefinition;et.toHtml;var F0=et.icon;et.layer;var U0=et.text;et.counter;function rh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rh(Object(n),!0).forEach(function(r){He(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function As(t){return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},As(t)}function He(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function V0(t,e){if(t==null)return{};var n=$0(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Ba(t){return B0(t)||j0(t)||z0(t)||H0()}function B0(t){if(Array.isArray(t))return ja(t)}function j0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z0(t,e){if(!!t){if(typeof t=="string")return ja(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ja(t,e)}}function ja(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var K0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gd={exports:{}};(function(t){(function(e){var n=function(y,A,M){if(!c(A)||h(A)||m(A)||p(A)||l(A))return A;var z,Z=0,de=0;if(u(A))for(z=[],de=A.length;Z<de;Z++)z.push(n(y,A[Z],M));else{z={};for(var be in A)Object.prototype.hasOwnProperty.call(A,be)&&(z[y(be,M)]=n(y,A[be],M))}return z},r=function(y,A){A=A||{};var M=A.separator||"_",z=A.split||/(?=[A-Z])/;return y.split(z).join(M)},i=function(y){return E(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var A=i(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},a=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},m=function(y){return a.call(y)=="[object RegExp]"},p=function(y){return a.call(y)=="[object Boolean]"},E=function(y){return y=y-0,y===y},D=function(y,A){var M=A&&"process"in A?A.process:A;return typeof M!="function"?y:function(z,Z){return M(z,y,Z)}},k={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,A){return n(D(i,A),y)},decamelizeKeys:function(y,A){return n(D(o,A),y,A)},pascalizeKeys:function(y,A){return n(D(s,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(K0)})(Gd);var q0=Gd.exports,W0=["class","style"];function G0(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=q0.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Y0(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ql(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Ql(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Y0(u);break;case"style":l.style=G0(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=V0(n,W0);return vd(t.tag,st(st(st({},e),{},{class:i.class,style:st(st({},i.style),o)},i.attrs),a),r)}var Yd=!1;try{Yd=!0}catch{}function X0(){if(!Yd&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?He({},t,e):{}}function Q0(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},He(e,"fa-".concat(t.size),t.size!==null),He(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),He(e,"fa-pull-".concat(t.pull),t.pull!==null),He(e,"fa-swap-opacity",t.swapOpacity),He(e,"fa-bounce",t.bounce),He(e,"fa-shake",t.shake),He(e,"fa-beat",t.beat),He(e,"fa-fade",t.fade),He(e,"fa-beat-fade",t.beatFade),He(e,"fa-flash",t.flash),He(e,"fa-spin-pulse",t.spinPulse),He(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ih(t){if(t&&As(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ss.icon)return Ss.icon(t);if(t===null)return null;if(As(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Xd=Dl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=nt(function(){return ih(e.icon)}),s=nt(function(){return qr("classes",Q0(e))}),o=nt(function(){return qr("transform",typeof e.transform=="string"?Ss.transform(e.transform):e.transform)}),a=nt(function(){return qr("mask",ih(e.mask))}),l=nt(function(){return F0(i.value,st(st(st(st({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});rs(l,function(u){if(!u)return X0("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=nt(function(){return l.value?Ql(l.value.abstract[0],{},r):null});return function(){return c.value}}});Dl({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Wd.familyPrefix,s=nt(function(){return["".concat(i,"-layers")].concat(Ba(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return vd("div",{class:s.value},r.default?r.default():[])}}});Dl({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Wd.familyPrefix,s=nt(function(){return qr("classes",[].concat(Ba(e.counter?["".concat(i,"-layers-counter")]:[]),Ba(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=nt(function(){return qr("transform",typeof e.transform=="string"?Ss.transform(e.transform):e.transform)}),a=nt(function(){var c=U0(e.value.toString(),st(st({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=nt(function(){return Ql(a.value,{},r)});return function(){return l.value}}});/**
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
 */const Qd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(m=64)),r.push(n[u],n[h],n[m],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw Error();const m=s<<2|a>>4;if(r.push(m),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Z0=function(t){const e=Qd(t);return Jd.encodeByteArray(e,!0)},Zd=function(t){return Z0(t).replace(/\./g,"")},ew=function(t){try{return Jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function em(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){return Se().indexOf("Electron/")>=0}function rm(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rw(){return Se().indexOf("MSAppHost/")>=0}function iw(){return typeof indexedDB=="object"}function sw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ow="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ow,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function aw(t,e){return t.replace(lw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lw=/\{\$([^}]+)}/g;function cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sh(s)&&sh(o)){if(!ks(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uw(t,e){const n=new hw(t,e);return n.subscribe.bind(n)}class hw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xo),i.error===void 0&&(i.error=Xo),i.complete===void 0&&(i.complete=Xo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xo(){}/**
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
 */function Ii(t){return t&&t._delegate?t._delegate:t}class Dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class dw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pw(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mw(t){return t===gn?void 0:t}function pw(t){return t.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const vw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},yw=te.INFO,bw={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ww=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=yw,this._logHandler=ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const _w=(t,e)=>e.some(n=>t instanceof n);let oh,ah;function Ew(){return oh||(oh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return ah||(ah=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const im=new WeakMap,za=new WeakMap,sm=new WeakMap,Qo=new WeakMap,Zl=new WeakMap;function Tw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&im.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function Sw(t){if(za.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});za.set(t,e)}let Ha={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Aw(t){Ha=t(Ha)}function kw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jo(this),e,...n);return sm.set(r,e.sort?e.sort():[e]),tn(r)}:Iw().includes(t)?function(...e){return t.apply(Jo(this),e),tn(im.get(this))}:function(...e){return tn(t.apply(Jo(this),e))}}function Cw(t){return typeof t=="function"?kw(t):(t instanceof IDBTransaction&&Sw(t),_w(t,Ew())?new Proxy(t,Ha):t)}function tn(t){if(t instanceof IDBRequest)return Tw(t);if(Qo.has(t))return Qo.get(t);const e=Cw(t);return e!==t&&(Qo.set(t,e),Zl.set(e,t)),e}const Jo=t=>Zl.get(t);function xw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ow=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],Zo=new Map;function lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ow.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Zo.set(e,s),s}Aw(t=>({...t,get:(e,n,r)=>lh(e,n)||t.get(e,n,r),has:(e,n)=>!!lh(e,n)||t.has(e,n)}));/**
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
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ka="@firebase/app",ch="0.7.31";/**
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
 */const Pn=new Jl("@firebase/app"),Pw="@firebase/app-compat",Mw="@firebase/analytics-compat",Lw="@firebase/analytics",Fw="@firebase/app-check-compat",Uw="@firebase/app-check",$w="@firebase/auth",Vw="@firebase/auth-compat",Bw="@firebase/database",jw="@firebase/database-compat",zw="@firebase/functions",Hw="@firebase/functions-compat",Kw="@firebase/installations",qw="@firebase/installations-compat",Ww="@firebase/messaging",Gw="@firebase/messaging-compat",Yw="@firebase/performance",Xw="@firebase/performance-compat",Qw="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",e_="@firebase/storage-compat",t_="@firebase/firestore",n_="@firebase/firestore-compat",r_="firebase",i_="9.9.3";/**
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
 */const om="[DEFAULT]",s_={[Ka]:"fire-core",[Pw]:"fire-core-compat",[Lw]:"fire-analytics",[Mw]:"fire-analytics-compat",[Uw]:"fire-app-check",[Fw]:"fire-app-check-compat",[$w]:"fire-auth",[Vw]:"fire-auth-compat",[Bw]:"fire-rtdb",[jw]:"fire-rtdb-compat",[zw]:"fire-fn",[Hw]:"fire-fn-compat",[Kw]:"fire-iid",[qw]:"fire-iid-compat",[Ww]:"fire-fcm",[Gw]:"fire-fcm-compat",[Yw]:"fire-perf",[Xw]:"fire-perf-compat",[Qw]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[e_]:"fire-gcs-compat",[t_]:"fire-fst",[n_]:"fire-fst-compat","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const Cs=new Map,qa=new Map;function o_(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(qa.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of Cs.values())o_(n,t);return!0}function ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const a_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new _i("app","Firebase",a_);/**
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
 */class l_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=i_;function c_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:om,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Mn.create("bad-app-name",{appName:String(r)});const i=Cs.get(r);if(i){if(ks(t,i.options)&&ks(n,i.config))return i;throw Mn.create("duplicate-app",{appName:r})}const s=new gw(r);for(const a of qa.values())s.addComponent(a);const o=new l_(t,n,s);return Cs.set(r,o),o}function am(t=om){const e=Cs.get(t);if(!e)throw Mn.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=s_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}hr(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const u_="firebase-heartbeat-database",h_=1,oi="firebase-heartbeat-store";let ea=null;function lm(){return ea||(ea=xw(u_,h_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),ea}async function f_(t){var e;try{return(await lm()).transaction(oi).objectStore(oi).get(cm(t))}catch(n){if(n instanceof Bt)Pn.warn(n.message);else{const r=Mn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pn.warn(r.message)}}}async function uh(t,e){var n;try{const i=(await lm()).transaction(oi,"readwrite");return await i.objectStore(oi).put(e,cm(t)),i.done}catch(r){if(r instanceof Bt)Pn.warn(r.message);else{const i=Mn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Pn.warn(i.message)}}}function cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const d_=1024,m_=30*24*60*60*1e3;class p_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=m_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hh(),{heartbeatsToSend:n,unsentEntries:r}=g_(this._heartbeatsCache.heartbeats),i=Zd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function hh(){return new Date().toISOString().substring(0,10)}function g_(t,e=d_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await f_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fh(t){return Zd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function y_(t){hr(new Dn("platform-logger",e=>new Rw(e),"PRIVATE")),hr(new Dn("heartbeat",e=>new p_(e),"PRIVATE")),nn(Ka,ch,t),nn(Ka,ch,"esm2017"),nn("fire-js","")}y_("");var b_="firebase",w_="9.9.3";/**
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
 */nn(b_,w_,"app");function tc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function um(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const __=um,hm=new _i("auth","Firebase",um());/**
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
 */const dh=new Jl("@firebase/auth");function cs(t,...e){dh.logLevel<=te.ERROR&&dh.error(`Auth (${Ti}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw nc(t,...e)}function yt(t,...e){return nc(t,...e)}function fm(t,e,n){const r=Object.assign(Object.assign({},__()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function E_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(t,"argument-error"),fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hm.create(t,...e)}function H(t,e,...n){if(!t)throw nc(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cs(e),new Error(e)}function Mt(t,e){t||kt(e)}/**
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
 */const mh=new Map;function Ct(t){Mt(t instanceof Function,"Expected a class definition");let e=mh.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mh.set(t,e),e)}/**
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
 */function I_(t,e){const n=ec(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ks(s,e!=null?e:{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function T_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S_(){return ph()==="http:"||ph()==="https:"}function ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function A_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S_()||tm()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=em()||nm()}get(){return A_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rc(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const x_=new Si(3e4,6e4);function O_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function co(t,e,n,r,i={}){return mm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),dm.fetch()(pm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C_),e);try{const i=new R_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fm(t,u,c);_t(t,u)}}catch(i){if(i instanceof Bt)throw i;_t(t,"network-request-failed")}}async function N_(t,e,n,r,i={}){const s=await co(t,e,n,r,i);return"mfaPendingCredential"in s&&_t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rc(t.config,i):`${t.config.apiScheme}://${i}`}class R_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),x_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function D_(t,e){return co(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return co(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M_(t,e=!1){const n=Ii(t),r=await n.getIdToken(e),i=ic(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wr(ta(i.auth_time)),issuedAtTime:Wr(ta(i.iat)),expirationTime:Wr(ta(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ta(t){return Number(t)*1e3}function ic(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ew(r);return s?JSON.parse(s):(cs("Failed to decode base64 JWT payload"),null)}catch(s){return cs("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function L_(t){const e=ic(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&F_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function F_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class U_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ai(t,P_(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?B_(s.providerUserInfo):[],a=V_(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function $_(t){const e=Ii(t);await xs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,r=tc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function j_(t,e){const n=await mm(t,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=pm(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await j_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new li;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Kt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M_(this,e)}reload(){return $_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ai(this,D_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:z,isAnonymous:Z,providerData:de,stsTokenManager:be}=n;H(M&&be,e,"internal-error");const tt=li.fromJSON(this.name,be);H(typeof M=="string",e,"internal-error"),Kt(h,e.name),Kt(m,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof Z=="boolean",e,"internal-error"),Kt(p,e.name),Kt(E,e.name),Kt(D,e.name),Kt(k,e.name),Kt(y,e.name),Kt(A,e.name);const Ee=new An({uid:M,auth:e,email:m,emailVerified:z,displayName:h,isAnonymous:Z,photoURL:E,phoneNumber:p,tenantId:D,stsTokenManager:tt,createdAt:y,lastLoginAt:A});return de&&Array.isArray(de)&&(Ee.providerData=de.map(fn=>Object.assign({},fn))),k&&(Ee._redirectEventId=k),Ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new li;i.updateFromServerResponse(n);const s=new An({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xs(s),s}}/**
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
 */class vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vm.type="NONE";const gh=vm;/**
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
 */function us(t,e,n){return`firebase:${t}:${e}:${n}`}class ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ir(Ct(gh),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ct(gh);const o=us(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=An._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ir(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ir(s,e,r))}}/**
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
 */function vh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Em(e))return"Blackberry";if(Im(e))return"Webos";if(sc(e))return"Safari";if((e.includes("chrome/")||bm(e))&&!e.includes("edge/"))return"Chrome";if(_m(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ym(t=Se()){return/firefox\//i.test(t)}function sc(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bm(t=Se()){return/crios\//i.test(t)}function wm(t=Se()){return/iemobile/i.test(t)}function _m(t=Se()){return/android/i.test(t)}function Em(t=Se()){return/blackberry/i.test(t)}function Im(t=Se()){return/webos/i.test(t)}function uo(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function z_(t=Se()){var e;return uo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H_(){return rm()&&document.documentMode===10}function Tm(t=Se()){return uo(t)||_m(t)||Im(t)||Em(t)||/windows phone/i.test(t)||wm(t)}function K_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sm(t,e=[]){let n;switch(t){case"Browser":n=vh(Se());break;case"Worker":n=`${vh(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ti}/${r}`}/**
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
 */class q_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class W_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new q_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await xs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ii(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ir.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function oc(t){return Ii(t)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Am{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function sr(t,e){return N_(t,"POST","/v1/accounts:signInWithIdp",O_(t,e))}/**
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
 */const G_="http://localhost";class Ln extends Am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ln(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:G_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
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
 */class ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ai extends ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends Ai{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Yt extends Ai{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
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
 */class Xt extends Ai{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await An._fromIdTokenResponse(e,r,i),o=bh(r);return new fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bh(r);return new fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Os extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Os(e,n,r,i)}}function km(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(t,s,e,r):s})}async function Y_(t,e,n=!1){const r=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fr._forOperation(t,"link",r)}/**
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
 */async function X_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ai(t,km(i,s,e,t),n);H(o.idToken,i,"internal-error");const a=ic(o.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(t.uid===l,i,"user-mismatch"),fr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&_t(i,"user-mismatch"),o}}/**
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
 */async function Q_(t,e,n=!1){const r="signIn",i=await km(t,r,e),s=await fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const Ns="__sak";/**
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
 */class Cm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ns,"1"),this.storage.removeItem(Ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function J_(){const t=Se();return sc(t)||uo(t)}const Z_=1e3,e1=10;class xm extends Cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=J_()&&K_(),this.fallbackToPolling=Tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xm.type="LOCAL";const t1=xm;/**
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
 */class Om extends Cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Om.type="SESSION";const Nm=Om;/**
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
 */function n1(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await n1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
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
 */function lc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=lc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function i1(t){bt().location.href=t}/**
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
 */function Rm(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function s1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a1(){return Rm()?self:null}/**
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
 */const Dm="firebaseLocalStorageDb",l1=1,Rs="firebaseLocalStorage",Pm="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fo(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function c1(){const t=indexedDB.deleteDatabase(Dm);return new ki(t).toPromise()}function Ga(){const t=indexedDB.open(Dm,l1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rs,{keyPath:Pm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await c1(),e(await Ga()))})})}async function wh(t,e,n){const r=fo(t,!0).put({[Pm]:e,value:n});return new ki(r).toPromise()}async function u1(t,e){const n=fo(t,!1).get(e),r=await new ki(n).toPromise();return r===void 0?null:r.value}function _h(t,e){const n=fo(t,!0).delete(e);return new ki(n).toPromise()}const h1=800,f1=3;class Mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(a1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ga();return await wh(e,Ns,"1"),await _h(e,Ns),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_h(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fo(i,!1).getAll();return new ki(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mm.type="LOCAL";const d1=Mm;/**
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
 */function m1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function p1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",m1().appendChild(r)})}function g1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Si(3e4,6e4);/**
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
 */function Lm(t,e){return e?Ct(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class cc extends Am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v1(t){return Q_(t.auth,new cc(t),t.bypassAuthState)}function y1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),X_(n,new cc(t),t.bypassAuthState)}async function b1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Y_(n,new cc(t),t.bypassAuthState)}/**
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
 */class Fm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return y1;default:_t(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const w1=new Si(2e3,1e4);async function _1(t,e,n){const r=oc(t);E_(t,e,ac);const i=Lm(r,n);return new bn(r,"signInViaPopup",e,i).executeNotNull()}class bn extends Fm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,w1.get())};e()}}bn.currentPopupAction=null;/**
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
 */const E1="pendingRedirect",hs=new Map;class I1 extends Fm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hs.get(this.auth._key());if(!e){try{const r=await T1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hs.set(this.auth._key(),e)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T1(t,e){const n=k1(e),r=A1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S1(t,e){hs.set(t._key(),e)}function A1(t){return Ct(t._redirectPersistence)}function k1(t){return us(E1,t.config.apiKey,t.name)}async function C1(t,e,n=!1){const r=oc(t),i=Lm(r,e),o=await new I1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const x1=10*60*1e3;class O1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Um(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(e))}saveEventToCache(e){this.cachedEventUids.add(Eh(e)),this.lastProcessedEventTime=Date.now()}}function Eh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Um({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Um(t);default:return!1}}/**
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
 */async function R1(t,e={}){return co(t,"GET","/v1/projects",e)}/**
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
 */const D1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function M1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R1(t);for(const n of e)try{if(L1(n))return}catch{}_t(t,"unauthorized-domain")}function L1(t){const e=Wa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P1.test(n))return!1;if(D1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const F1=new Si(3e4,6e4);function Ih(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U1(t){return new Promise((e,n)=>{var r,i,s;function o(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),n(yt(t,"network-request-failed"))},timeout:F1.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)o();else{const a=g1("iframefcb");return bt()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},p1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fs=null,e})}let fs=null;function $1(t){return fs=fs||U1(t),fs}/**
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
 */const V1=new Si(5e3,15e3),B1="__/auth/iframe",j1="emulator/auth/iframe",z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K1(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rc(e,j1):`https://${t.config.authDomain}/${B1}`,r={apiKey:e.apiKey,appName:t.name,v:Ti},i=H1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ei(r).slice(1)}`}async function q1(t){const e=await $1(t),n=bt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:K1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=bt().setTimeout(()=>{s(o)},V1.get());function l(){bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const W1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G1=500,Y1=600,X1="_blank",Q1="http://localhost";class Th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J1(t,e,n,r=G1,i=Y1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},W1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Se().toLowerCase();n&&(a=bm(c)?X1:n),ym(c)&&(e=e||Q1,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[p,E])=>`${m}${p}=${E},`,"");if(z_(c)&&a!=="_self")return Z1(e||"",a),new Th(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Th(h)}function Z1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eE="__/auth/handler",tE="emulator/auth/handler";function Sh(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ti,eventId:i};if(e instanceof ac){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Ai){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${nE(t)}?${Ei(a).slice(1)}`}function nE({config:t}){return t.emulator?rc(t,tE):`https://${t.authDomain}/${eE}`}/**
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
 */const na="webStorageSupport";class rE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nm,this._completeRedirectFn=C1,this._overrideRedirectResult=S1}async _openPopup(e,n,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Sh(e,n,r,Wa(),i);return J1(e,o,lc())}async _openRedirect(e,n,r,i){return await this._originValidation(e),i1(Sh(e,n,r,Wa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q1(e),r=new O1(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(na,{type:na},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[na];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tm()||sc()||uo()}}const iE=rE;var Ah="@firebase/auth",kh="0.20.5";/**
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
 */class sE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aE(t){hr(new Dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sm(t)},u=new W_(a,l,c);return T_(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new Dn("auth-internal",e=>{const n=oc(e.getProvider("auth").getImmediate());return(r=>new sE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Ah,kh,oE(t)),nn(Ah,kh,"esm2017")}/**
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
 */function lE(t=am()){const e=ec(t,"auth");return e.isInitialized()?e.getImmediate():I_(t,{popupRedirectResolver:iE,persistence:[d1,t1,Nm]})}aE("Browser");var cE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,uc=uc||{},V=cE||self;function Ds(){}function Ya(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ci(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uE(t){return Object.prototype.hasOwnProperty.call(t,ra)&&t[ra]||(t[ra]=++hE)}var ra="closure_uid_"+(1e9*Math.random()>>>0),hE=0;function fE(t,e,n){return t.call.apply(t.bind,arguments)}function dE(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ne(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ne=fE:Ne=dE,Ne.apply(null,arguments)}function Xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function un(){this.s=this.s,this.o=this.o}var mE=0;un.prototype.s=!1;un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),mE!=0)&&uE(this)};un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $m=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Vm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function pE(t){e:{var e=oI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Ch(t){return Array.prototype.concat.apply([],arguments)}function hc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ps(t){return/^[\s\xa0]*$/.test(t)}var xh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ue(t,e){return t.indexOf(e)!=-1}function ia(t,e){return t<e?-1:t>e?1:0}var $e;e:{var Oh=V.navigator;if(Oh){var Nh=Oh.userAgent;if(Nh){$e=Nh;break e}}$e=""}function fc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Bm(t){const e={};for(const n in t)e[n]=t[n];return e}var Rh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jm(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rh.length;s++)n=Rh[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dc(t){return dc[" "](t),t}dc[" "]=Ds;function gE(t){var e=bE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vE=Ue($e,"Opera"),dr=Ue($e,"Trident")||Ue($e,"MSIE"),zm=Ue($e,"Edge"),Xa=zm||dr,Hm=Ue($e,"Gecko")&&!(Ue($e.toLowerCase(),"webkit")&&!Ue($e,"Edge"))&&!(Ue($e,"Trident")||Ue($e,"MSIE"))&&!Ue($e,"Edge"),yE=Ue($e.toLowerCase(),"webkit")&&!Ue($e,"Edge");function Km(){var t=V.document;return t?t.documentMode:void 0}var Ms;e:{var sa="",oa=function(){var t=$e;if(Hm)return/rv:([^\);]+)(\)|;)/.exec(t);if(zm)return/Edge\/([\d\.]+)/.exec(t);if(dr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yE)return/WebKit\/(\S+)/.exec(t);if(vE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(oa&&(sa=oa?oa[1]:""),dr){var aa=Km();if(aa!=null&&aa>parseFloat(sa)){Ms=String(aa);break e}}Ms=sa}var bE={};function wE(){return gE(function(){let t=0;const e=xh(String(Ms)).split("."),n=xh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ia(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ia(i[2].length==0,s[2].length==0)||ia(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Qa;if(V.document&&dr){var Dh=Km();Qa=Dh||parseInt(Ms,10)||void 0}else Qa=void 0;var _E=Qa,EE=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Ds,e),V.removeEventListener("test",Ds,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function ci(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hm){e:{try{dc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ci.Z.h.call(this)}}Me(ci,Le);var IE={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xi="closure_listenable_"+(1e6*Math.random()|0),TE=0;function SE(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++TE,this.ca=this.fa=!1}function mo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function po(t){this.src=t,this.g={},this.h=0}po.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Za(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new SE(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Ja(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$m(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Za(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var mc="closure_lm_"+(1e6*Math.random()|0),la={};function qm(t,e,n,r,i){if(r&&r.once)return Gm(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)qm(t,e[s],n,r,i);return null}return n=vc(n),t&&t[xi]?t.N(e,n,Ci(r)?!!r.capture:!!r,i):Wm(t,e,n,!1,r,i)}function Wm(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ci(i)?!!i.capture:!!i,a=gc(t);if(a||(t[mc]=a=new po(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=AE(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EE||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Xm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AE(){function t(n){return e.call(t.src,t.listener,n)}var e=kE;return t}function Gm(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gm(t,e[s],n,r,i);return null}return n=vc(n),t&&t[xi]?t.O(e,n,Ci(r)?!!r.capture:!!r,i):Wm(t,e,n,!0,r,i)}function Ym(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ym(t,e[s],n,r,i);else r=Ci(r)?!!r.capture:!!r,n=vc(n),t&&t[xi]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Za(s,n,r,i),-1<n&&(mo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Za(e,n,r,i)),(n=-1<t?e[t]:null)&&pc(n))}function pc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xi])Ja(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gc(e))?(Ja(n,t),n.h==0&&(n.src=null,e[mc]=null)):mo(t)}}}function Xm(t){return t in la?la[t]:la[t]="on"+t}function kE(t,e){if(t.ca)t=!0;else{e=new ci(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&pc(t),t=n.call(r,e)}return t}function gc(t){return t=t[mc],t instanceof po?t:null}var ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function vc(t){return typeof t=="function"?t:(t[ca]||(t[ca]=function(e){return t.handleEvent(e)}),t[ca])}function Ae(){un.call(this),this.i=new po(this),this.P=this,this.I=null}Me(Ae,un);Ae.prototype[xi]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){Ym(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(r,t),jm(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Qi(o,r,!0,e)&&i}if(o=e.g=t,i=Qi(o,r,!0,e)&&i,i=Qi(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Qi(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mo(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ja(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var yc=V.JSON.stringify;function CE(){var t=Jm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xE{constructor(){this.h=this.g=null}add(e,n){const r=Qm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OE,t=>t.reset());class OE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NE(t){V.setTimeout(()=>{throw t},0)}function bc(t,e){el||RE(),tl||(el(),tl=!0),Jm.add(t,e)}var el;function RE(){var t=V.Promise.resolve(void 0);el=function(){t.then(DE)}}var tl=!1,Jm=new xE;function DE(){for(var t;t=CE();){try{t.h.call(t.g)}catch(n){NE(n)}var e=Qm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tl=!1}function go(t,e){Ae.call(this),this.h=t||1,this.g=e||V,this.j=Ne(this.kb,this),this.l=Date.now()}Me(go,Ae);N=go.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(wc(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}N.M=function(){go.Z.M.call(this),wc(this),delete this.g};function _c(t,e,n){if(typeof t=="function")n&&(t=Ne(t,n));else if(t&&typeof t.handleEvent=="function")t=Ne(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function Zm(t){t.g=_c(()=>{t.g=null,t.i&&(t.i=!1,Zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PE extends un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zm(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(t){un.call(this),this.h=t,this.g={}}Me(ui,un);var Ph=[];function ep(t,e,n,r){Array.isArray(n)||(n&&(Ph[0]=n.toString()),n=Ph);for(var i=0;i<n.length;i++){var s=qm(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tp(t){fc(t.g,function(e,n){this.g.hasOwnProperty(n)&&pc(e)},t),t.g={}}ui.prototype.M=function(){ui.Z.M.call(this),tp(this)};ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vo(){this.g=!0}vo.prototype.Aa=function(){this.g=!1};function ME(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LE(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Jn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UE(t,n)+(r?" "+r:"")})}function FE(t,e){t.info(function(){return"TIMEOUT: "+e})}vo.prototype.info=function(){};function UE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return yc(n)}catch{return e}}var Bn={},Mh=null;function yo(){return Mh=Mh||new Ae}Bn.Ma="serverreachability";function np(t){Le.call(this,Bn.Ma,t)}Me(np,Le);function hi(t){const e=yo();Re(e,new np(e))}Bn.STAT_EVENT="statevent";function rp(t,e){Le.call(this,Bn.STAT_EVENT,t),this.stat=e}Me(rp,Le);function Be(t){const e=yo();Re(e,new rp(e,t))}Bn.Na="timingevent";function ip(t,e){Le.call(this,Bn.Na,t),this.size=e}Me(ip,Le);function Oi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var bo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},sp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ec(){}Ec.prototype.h=null;function Lh(t){return t.h||(t.h=t.i())}function op(){}var Ni={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ic(){Le.call(this,"d")}Me(Ic,Le);function Tc(){Le.call(this,"c")}Me(Tc,Le);var nl;function wo(){}Me(wo,Ec);wo.prototype.g=function(){return new XMLHttpRequest};wo.prototype.i=function(){return{}};nl=new wo;function Ri(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ui(this),this.P=$E,t=Xa?125:void 0,this.W=new go(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ap}function ap(){this.i=null,this.g="",this.h=!1}var $E=45e3,rl={},Ls={};N=Ri.prototype;N.setTimeout=function(t){this.P=t};function il(t,e,n){t.K=1,t.v=Eo(Lt(e)),t.s=n,t.U=!0,lp(t,null)}function lp(t,e){t.F=Date.now(),Di(t),t.A=Lt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),pp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ap,t.g=Mp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new PE(Ne(t.Ia,t,t.g),t.O)),ep(t.V,t.g,"readystatechange",t.gb),e=t.H?Bm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hi(),ME(t.j,t.u,t.A,t.m,t.X,t.s)}N.gb=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.Ia(t)};N.Ia=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Xa||this.g&&(this.h.h||this.g.ga()||Vh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?hi(3):hi(2)),_o(this);var n=this.g.ba();this.N=n;t:if(cp(this)){var r=Vh(this.g);t="";var i=r.length,s=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Gr(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,LE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ps(a)){var c=a;break t}}c=null}if(n=c)Jn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sl(this,n);else{this.i=!1,this.o=3,Be(12),wn(this),Gr(this);break e}}this.U?(up(this,u,o),Xa&&this.i&&u==3&&(ep(this.V,this.W,"tick",this.fb),this.W.start())):(Jn(this.j,this.m,o,null),sl(this,o)),u==4&&wn(this),this.i&&!this.I&&(u==4?Np(this.l,this):(this.i=!1,Di(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Be(12)):(this.o=0,Be(13)),wn(this),Gr(this)}}}catch{}finally{}};function cp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function up(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=VE(t,n),i==Ls){e==4&&(t.o=4,Be(14),r=!1),Jn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rl){t.o=4,Be(15),Jn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Jn(t.j,t.m,i,null),sl(t,i);cp(t)&&i!=Ls&&i!=rl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Be(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dc(e),e.L=!0,Be(11))):(Jn(t.j,t.m,n,"[Invalid Chunked Response]"),wn(t),Gr(t))}N.fb=function(){if(this.g){var t=xt(this.g),e=this.g.ga();this.C<e.length&&(_o(this),up(this,t,e),this.i&&t!=4&&Di(this))}};function VE(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ls:(n=Number(e.substring(n,r)),isNaN(n)?rl:(r+=1,r+n>e.length?Ls:(e=e.substr(r,n),t.C=r+n,e)))}N.cancel=function(){this.I=!0,wn(this)};function Di(t){t.Y=Date.now()+t.P,hp(t,t.P)}function hp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Oi(Ne(t.eb,t),e)}function _o(t){t.B&&(V.clearTimeout(t.B),t.B=null)}N.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FE(this.j,this.A),this.K!=2&&(hi(),Be(17)),wn(this),this.o=2,Gr(this)):hp(this,this.Y-t)};function Gr(t){t.l.G==0||t.I||Np(t.l,t)}function wn(t){_o(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wc(t.W),tp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ol(n.i,t))){if(n.I=t.N,!t.J&&ol(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vs(n),So(n);else break e;Rc(n),Be(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Oi(Ne(n.ab,n),6e3));if(1>=yp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else _n(n,11)}else if((t.J||n.g==t)&&Vs(n),!Ps(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(r=1.5*m,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const E=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;!s.g&&(Ue(E,"spdy")||Ue(E,"quic")||Ue(E,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kc(s,s.h),s.h=null))}if(r.D){const D=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.sa=D,ue(r.F,r.D,D))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Pp(r,r.H?r.la:null,r.W),o.J){bp(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(_o(a),Di(a)),r.g=o}else xp(r);0<n.l.length&&Ao(n)}else c[0]!="stop"&&c[0]!="close"||_n(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_n(n,7):Nc(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}hi(4)}catch{}}function BE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ya(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Sc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ya(t)||typeof t=="string")Vm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ya(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=BE(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Tr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Tr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}N=Tr.prototype;N.R=function(){Ac(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};N.T=function(){return Ac(this),this.g.concat()};function Ac(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Fn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Fn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}N.get=function(t,e){return Fn(this.h,t)?this.h[t]:e};N.set=function(t,e){Fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};N.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var fp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function jE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Un(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Un){this.g=e!==void 0?e:t.g,Fs(this,t.j),this.s=t.s,Us(this,t.i),$s(this,t.m),this.l=t.l,e=t.h;var n=new fi;n.i=e.i,e.g&&(n.g=new Tr(e.g),n.h=e.h),Fh(this,n),this.o=t.o}else t&&(n=String(t).match(fp))?(this.g=!!e,Fs(this,n[1]||"",!0),this.s=Yr(n[2]||""),Us(this,n[3]||"",!0),$s(this,n[4]),this.l=Yr(n[5]||"",!0),Fh(this,n[6]||"",!0),this.o=Yr(n[7]||"")):(this.g=!!e,this.h=new fi(null,this.g))}Un.prototype.toString=function(){var t=[],e=this.j;e&&t.push($r(e,Uh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($r(e,Uh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push($r(n,n.charAt(0)=="/"?WE:qE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$r(n,YE)),t.join("")};function Lt(t){return new Un(t)}function Fs(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Us(t,e,n){t.i=n?Yr(e,!0):e}function $s(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fh(t,e,n){e instanceof fi?(t.h=e,XE(t.h,t.g)):(n||(e=$r(e,GE)),t.h=new fi(e,t.g))}function ue(t,e,n){t.h.set(e,n)}function Eo(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zE(t){return t instanceof Un?Lt(t):new Un(t,void 0)}function HE(t,e,n,r){var i=new Un(null,void 0);return t&&Fs(i,t),e&&Us(i,e),n&&$s(i,n),r&&(i.l=r),i}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $r(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uh=/[#\/\?@]/g,qE=/[#\?:]/g,WE=/[#\?]/g,GE=/[#\?@]/g,YE=/#/g;function fi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Tr,t.h=0,t.i&&jE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=fi.prototype;N.add=function(t,e){hn(this),this.i=null,t=Sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dp(t,e){hn(t),e=Sr(t,e),Fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Fn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ac(t)))}function mp(t,e){return hn(t),e=Sr(t,e),Fn(t.g.h,e)}N.forEach=function(t,e){hn(this),this.g.forEach(function(n,r){Vm(n,function(i){t.call(e,i,r,this)},this)},this)};N.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};N.R=function(t){hn(this);var e=[];if(typeof t=="string")mp(this,t)&&(e=Ch(e,this.g.get(Sr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ch(e,t[n])}return e};N.set=function(t,e){return hn(this),this.i=null,t=Sr(this,t),mp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function pp(t,e,n){dp(t,e),0<n.length&&(t.i=null,t.g.set(Sr(t,e),hc(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function XE(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dp(this,r),pp(this,i,n))},t)),t.j=e}var QE=class{constructor(t,e){this.h=t,this.g=e}};function gp(t){this.l=t||JE,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ea&&V.g.Ea()&&V.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JE=10;function vp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yp(t){return t.h?1:t.g?t.g.size:0}function ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kc(t,e){t.g?t.g.add(e):t.h=e}function bp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}gp.prototype.cancel=function(){if(this.i=wp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hc(t.i)}function Cc(){}Cc.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Cc.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function ZE(){this.g=new Cc}function eI(t,e,n){const r=n||"";try{Sc(t,function(i,s){let o=i;Ci(i)&&(o=yc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tI(t,e){const n=new vo;if(V.Image){const r=new Image;r.onload=Xi(Ji,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xi(Ji,n,r,"TestLoadImage: error",!1,e),r.onabort=Xi(Ji,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xi(Ji,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ji(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pi(t){this.l=t.$b||null,this.j=t.ib||!1}Me(Pi,Ec);Pi.prototype.g=function(){return new Io(this.l,this.j)};Pi.prototype.i=function(t){return function(){return t}}({});function Io(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Io,Ae);var xc=0;N=Io.prototype;N.open=function(t,e){if(this.readyState!=xc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,di(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=xc};N.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_p(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function _p(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}N.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mi(this):di(this),this.readyState==3&&_p(this)}};N.Ua=function(t){this.g&&(this.response=this.responseText=t,Mi(this))};N.Ta=function(t){this.g&&(this.response=t,Mi(this))};N.ha=function(){this.g&&Mi(this)};function Mi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,di(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nI=V.JSON.parse;function ye(t){Ae.call(this),this.headers=new Tr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ep,this.K=this.L=!1}Me(ye,Ae);var Ep="",rI=/^https?$/i,iI=["POST","PUT"];N=ye.prototype;N.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?Lh(this.u):Lh(nl),this.g.onreadystatechange=Ne(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){$h(this,s);return}t=n||"";const i=new Tr(this.headers);r&&Sc(r,function(s,o){i.set(o,s)}),r=pE(i.T()),n=V.FormData&&t instanceof V.FormData,!(0<=$m(iI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Sp(this),0<this.B&&((this.K=sI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ne(this.pa,this)):this.A=_c(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$h(this,s)}};function sI(t){return dr&&wE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function oI(t){return t.toLowerCase()=="content-type"}N.pa=function(){typeof uc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function $h(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ip(t),To(t)}function Ip(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),To(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),To(this,!0)),ye.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?Tp(this):this.cb())};N.cb=function(){Tp(this)};function Tp(t){if(t.h&&typeof uc<"u"&&(!t.C[1]||xt(t)!=4||t.ba()!=2)){if(t.v&&xt(t)==4)_c(t.Fa,0,t);else if(Re(t,"readystatechange"),xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(fp)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!rI.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ip(t)}}finally{To(t)}}}}function To(t,e){if(t.g){Sp(t);const n=t.g,r=t.C[0]?Ds:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function Sp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}N.ba=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nI(e)}};function Vh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ep:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function aI(t){let e="";return fc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Oc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=aI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Mr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ap(t){this.za=0,this.l=[],this.h=new vo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Mr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Mr("baseRetryDelayMs",5e3,t),this.$a=Mr("retryDelaySeedMs",1e4,t),this.Ya=Mr("forwardChannelMaxRetries",2,t),this.ra=Mr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new gp(t&&t.concurrentRequestLimit),this.Ca=new ZE,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}N=Ap.prototype;N.ma=8;N.G=1;function Nc(t){if(kp(t),t.G==3){var e=t.V++,n=Lt(t.F);ue(n,"SID",t.J),ue(n,"RID",e),ue(n,"TYPE","terminate"),Li(t,n),e=new Ri(t,t.h,e,void 0),e.K=2,e.v=Eo(Lt(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Mp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Di(e)}Dp(t)}N.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function So(t){t.g&&(Dc(t),t.g.cancel(),t.g=null)}function kp(t){So(t),t.u&&(V.clearTimeout(t.u),t.u=null),Vs(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function ua(t,e){t.l.push(new QE(t.Za++,e)),t.G==3&&Ao(t)}function Ao(t){vp(t.i)||t.m||(t.m=!0,bc(t.Ha,t),t.C=0)}function lI(t,e){return yp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Oi(Ne(t.Ha,t,e),Rp(t,t.C)),t.C++,!0)}N.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ri(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Bm(s),jm(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Cp(this,i,e),n=Lt(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Li(this,n),this.o&&s&&Oc(n,this.o,s),kc(this.i,i),this.Ra&&ue(n,"TYPE","init"),this.ja?(ue(n,"$req",e),ue(n,"SID","null"),i.$=!0,il(i,n,null)):il(i,n,e),this.G=2}}else this.G==3&&(t?Bh(this,t):this.l.length==0||vp(this.i)||Bh(this))};function Bh(t,e){var n;e?n=e.m:n=t.V++;const r=Lt(t.F);ue(r,"SID",t.J),ue(r,"RID",n),ue(r,"AID",t.U),Li(t,r),t.o&&t.s&&Oc(r,t.o,t.s),n=new Ri(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Cp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kc(t.i,n),il(n,r,e)}function Li(t,e){t.j&&Sc({},function(n,r){ue(e,r,n)})}function Cp(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ne(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{eI(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function xp(t){t.g||t.u||(t.Y=1,bc(t.Ga,t),t.A=0)}function Rc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Oi(Ne(t.Ga,t),Rp(t,t.A)),t.A++,!0)}N.Ga=function(){if(this.u=null,Op(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Oi(Ne(this.bb,this),t)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Be(10),So(this),Op(this))};function Dc(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function Op(t){t.g=new Ri(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Lt(t.oa);ue(e,"RID","rpc"),ue(e,"SID",t.J),ue(e,"CI",t.N?"0":"1"),ue(e,"AID",t.U),Li(t,e),ue(e,"TYPE","xmlhttp"),t.o&&t.s&&Oc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Eo(Lt(e)),n.s=null,n.U=!0,lp(n,t)}N.ab=function(){this.v!=null&&(this.v=null,So(this),Rc(this),Be(19))};function Vs(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function Np(t,e){var n=null;if(t.g==e){Vs(t),Dc(t),t.g=null;var r=2}else if(ol(t.i,e))n=e.D,bp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=yo(),Re(r,new ip(r,n)),Ao(t)}else xp(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&lI(t,e)||r==2&&Rc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_n(t,5);break;case 4:_n(t,10);break;case 3:_n(t,6);break;default:_n(t,2)}}}function Rp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _n(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ne(t.jb,t);n||(n=new Un("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Fs(n,"https"),Eo(n)),tI(n.toString(),r)}else Be(2);t.G=0,t.j&&t.j.va(e),Dp(t),kp(t)}N.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Be(2)):(this.h.info("Failed to ping google.com"),Be(1))};function Dp(t){t.G=0,t.I=-1,t.j&&((wp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,hc(t.l),t.l.length=0),t.j.ua())}function Pp(t,e,n){let r=zE(n);if(r.i!="")e&&Us(r,e+"."+r.i),$s(r,r.m);else{const i=V.location;r=HE(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&fc(t.aa,function(i,s){ue(r,s,i)}),e=t.D,n=t.sa,e&&n&&ue(r,e,n),ue(r,"VER",t.ma),Li(t,r),r}function Mp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ye(new Pi({ib:!0})):new ye(t.qa),e.L=t.H,e}function Lp(){}N=Lp.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function Bs(){if(dr&&!(10<=Number(_E)))throw Error("Environmental error: no available transport.")}Bs.prototype.g=function(t,e){return new Ze(t,e)};function Ze(t,e){Ae.call(this),this.g=new Ap(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ps(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ps(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ar(this)}Me(Ze,Ae);Ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),bc(Ne(t.hb,t,e))),Be(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Pp(t,null,t.W),Ao(t)};Ze.prototype.close=function(){Nc(this.g)};Ze.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ua(this.g,e)}else this.v?(e={},e.__data__=yc(t),ua(this.g,e)):ua(this.g,t)};Ze.prototype.M=function(){this.g.j=null,delete this.j,Nc(this.g),delete this.g,Ze.Z.M.call(this)};function Fp(t){Ic.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Fp,Ic);function Up(){Tc.call(this),this.status=1}Me(Up,Tc);function Ar(t){this.g=t}Me(Ar,Lp);Ar.prototype.xa=function(){Re(this.g,"a")};Ar.prototype.wa=function(t){Re(this.g,new Fp(t))};Ar.prototype.va=function(t){Re(this.g,new Up)};Ar.prototype.ua=function(){Re(this.g,"b")};Bs.prototype.createWebChannel=Bs.prototype.g;Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;bo.NO_ERROR=0;bo.TIMEOUT=8;bo.HTTP_ERROR=6;sp.COMPLETE="complete";op.EventType=Ni;Ni.OPEN="a";Ni.CLOSE="b";Ni.ERROR="c";Ni.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.La;ye.prototype.getLastErrorCode=ye.prototype.Da;ye.prototype.getStatus=ye.prototype.ba;ye.prototype.getResponseJson=ye.prototype.Qa;ye.prototype.getResponseText=ye.prototype.ga;ye.prototype.send=ye.prototype.ea;var cI=function(){return new Bs},uI=function(){return yo()},ha=bo,hI=sp,fI=Bn,jh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dI=Pi,Zi=op,mI=ye;const zh="@firebase/firestore";/**
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
 */let kr="9.9.2";/**
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
 */const $n=new Jl("@firebase/firestore");function Hh(){return $n.logLevel}function P(t,...e){if($n.logLevel<=te.DEBUG){const n=e.map(Pc);$n.debug(`Firestore (${kr}): ${t}`,...n)}}function Ft(t,...e){if($n.logLevel<=te.ERROR){const n=e.map(Pc);$n.error(`Firestore (${kr}): ${t}`,...n)}}function Kh(t,...e){if($n.logLevel<=te.WARN){const n=e.map(Pc);$n.warn(`Firestore (${kr}): ${t}`,...n)}}function Pc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+t;throw Ft(e),new Error(e)}function ve(t,e){t||G()}function ee(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new pI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new qe(e)}}class yI{constructor(e,n,r){this.type="FirstParty",this.user=qe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class bI{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new yI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.p=n.token,new wI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function EI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $p{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=EI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function mr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class mi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends mi{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const II=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends mi{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return II.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(fe.fromString(e))}static fromName(e){return new $(fe.fromString(e).popFirst(5))}static empty(){return new $(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new fe(e.slice()))}}function TI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new an(i,$.empty(),e)}function SI(t){return new an(t.readTime,t.key,-1)}class an{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new an(W.min(),$.empty(),-1)}static max(){return new an(W.max(),$.empty(),-1)}}function AI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const kI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mc(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==kI)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function qh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Lc.ot=-1;class ke{constructor(e,n){this.comparator=e,this.root=n||Ce.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ce.RED,this.left=i!=null?i:Ce.EMPTY,this.right=s!=null?s:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ce(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1;Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ce(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wh(this.data.getIterator())}getIteratorFrom(e){return new Wh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Wh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new _e(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const OI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(t){if(ve(!!t),typeof t=="string"){let e=0;const n=OI.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pr(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
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
 */function Vp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bp(t){const e=t.mapValue.fields.__previous_value__;return Vp(e)?Bp(e):e}function pi(t){const e=ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class NI{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Co(t){return t==null}function al(t){return t===0&&1/t==-1/0}/**
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
 */const ts={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vp(t)?4:RI(t)?9007199254740991:10:G()}function Et(t,e){if(t===e)return!0;const n=Vn(t);if(n!==Vn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pi(t).isEqual(pi(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ln(r.timestampValue),o=ln(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return pr(r.bytesValue).isEqual(pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ge(r.doubleValue),o=ge(i.doubleValue);return s===o?al(s)===al(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mr(t.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qh(s)!==qh(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Et(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function gi(t,e){return(t.values||[]).find(n=>Et(n,e))!==void 0}function vr(t,e){if(t===e)return 0;const n=Vn(t),r=Vn(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ge(i.integerValue||i.doubleValue),a=ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gh(t.timestampValue,e.timestampValue);case 4:return Gh(pi(t),pi(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=pr(i),a=pr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ne(o[l],a[l]);if(c!==0)return c}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(ge(i.latitude),ge(s.latitude));return o!==0?o:ne(ge(i.longitude),ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=vr(o[l],a[l]);if(c)return c}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ts.mapValue&&s===ts.mapValue)return 0;if(i===ts.mapValue)return 1;if(s===ts.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ne(a[u],c[u]);if(h!==0)return h;const m=vr(o[a[u]],l[c[u]]);if(m!==0)return m}return ne(a.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function Gh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=ln(t),r=ln(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function or(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ln(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ll(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ll(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function cl(t){return!!t&&"integerValue"in t}function Fc(t){return!!t&&"arrayValue"in t}function Yh(t){return!!t&&"nullValue"in t}function Xh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fa(t){return!!t&&"mapValue"in t}function Xr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xr(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ko(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(Xr(this.value))}}/**
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
 */class xe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new xe(e,1,n,W.min(),r,0)}static newNoDocument(e,n){return new xe(e,2,n,W.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,W.min(),pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class DI{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Qh(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DI(t,e,n,r,i,s,o)}function Uc(t){const e=ee(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+or(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Co(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>or(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>or(r)).join(",")),e.ut=n}return e.ut}function PI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${or(r.value)}`;var r}).join(", ")}]`),Co(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>or(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>or(n)).join(",")),`Target(${e})`}function $c(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!jI(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Et(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zh(t.startAt,e.startAt)&&Zh(t.endAt,e.endAt)}function ul(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ge extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new MI(e,n,r):n==="array-contains"?new UI(e,r):n==="in"?new $I(e,r):n==="not-in"?new VI(e,r):n==="array-contains-any"?new BI(e,r):new Ge(e,n,r)}static ct(e,n,r){return n==="in"?new LI(e,r):new FI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(vr(n,this.value)):n!==null&&Vn(this.value)===Vn(n)&&this.at(vr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class MI extends Ge{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.at(n)}}class LI extends Ge{constructor(e,n){super(e,"in",n),this.keys=jp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FI extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=jp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class UI extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fc(n)&&gi(n.arrayValue,this.value)}}class $I extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class VI extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class BI extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}class js{constructor(e,n){this.position=e,this.inclusive=n}}class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function jI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Jh(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Et(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function zI(t,e,n,r,i,s,o,a){return new xo(t,e,n,r,i,s,o,a)}function Vc(t){return new xo(t)}function ef(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function KI(t){for(const e of t.filters)if(e.ht())return e.field;return null}function qI(t){return t.collectionGroup!==null}function vi(t){const e=ee(t);if(e.lt===null){e.lt=[];const n=KI(e),r=HI(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Qr(n)),e.lt.push(new Qr(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Qr(We.keyField(),s))}}}return e.lt}function Ut(t){const e=ee(t);if(!e.ft)if(e.limitType==="F")e.ft=Qh(e.path,e.collectionGroup,vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of vi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qr(s.field,o))}const r=e.endAt?new js(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new js(e.startAt.position,e.startAt.inclusive):null;e.ft=Qh(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function hl(t,e,n){return new xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oo(t,e){return $c(Ut(t),Ut(e))&&t.limitType===e.limitType}function zp(t){return`${Uc(Ut(t))}|lt:${t.limitType}`}function fl(t){return`Query(target=${PI(Ut(t))}; limitType=${t.limitType})`}function Bc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jh(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,vi(n),r)||n.endAt&&!function(i,s,o){const a=Jh(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,vi(n),r))}(t,e)}function WI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hp(t){return(e,n)=>{let r=!1;for(const i of vi(t)){const s=GI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GI(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vr(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */function YI(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:al(e)?"-0":e}}function XI(t){return{integerValue:""+t}}/**
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
 */class No{constructor(){this._=void 0}}function QI(t,e,n){return t instanceof dl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zs?Kp(t,e):t instanceof Hs?qp(t,e):function(r,i){const s=ZI(r,i),o=tf(s)+tf(r._t);return cl(s)&&cl(r._t)?XI(o):YI(r.wt,o)}(t,e)}function JI(t,e,n){return t instanceof zs?Kp(t,e):t instanceof Hs?qp(t,e):n}function ZI(t,e){return t instanceof ml?cl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class dl extends No{}class zs extends No{constructor(e){super(),this.elements=e}}function Kp(t,e){const n=Wp(e);for(const r of t.elements)n.some(i=>Et(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hs extends No{constructor(e){super(),this.elements=e}}function qp(t,e){let n=Wp(e);for(const r of t.elements)n=n.filter(i=>!Et(i,r));return{arrayValue:{values:n}}}class ml extends No{constructor(e,n){super(),this.wt=e,this._t=n}}function tf(t){return ge(t.integerValue||t.doubleValue)}function Wp(t){return Fc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zs&&r instanceof zs||n instanceof Hs&&r instanceof Hs?mr(n.elements,r.elements,Et):n instanceof ml&&r instanceof ml?Et(n._t,r._t):n instanceof dl&&r instanceof dl}(t.transform,e.transform)}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ds(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function Gp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nT(t.key,xn.none()):new zc(t.key,t.data,xn.none());{const n=t.data,r=pt.empty();let i=new _e(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ro(t.key,r,new Cn(i.toArray()),xn.none())}}function tT(t,e,n){t instanceof zc?function(r,i,s){const o=r.value.clone(),a=rf(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ro?function(r,i,s){if(!ds(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=rf(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Yp(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Jr(t,e,n,r){return t instanceof zc?function(i,s,o,a){if(!ds(i.precondition,s))return o;const l=i.value.clone(),c=sf(i.fieldTransforms,a,s);return l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ro?function(i,s,o,a){if(!ds(i.precondition,s))return o;const l=sf(i.fieldTransforms,a,s),c=s.data;return c.setAll(Yp(i)),c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return ds(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function nf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mr(n,r,(i,s)=>eT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zc extends jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ro extends jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rf(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,JI(o,a,n[i]))}return r}function sf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QI(s,o,e))}return r}class nT extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rT{constructor(e){this.count=e}}/**
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
 */var pe,Y;function Xp(t){if(t===void 0)return Ft("GRPC error has no .code"),x.UNKNOWN;switch(t){case pe.OK:return x.OK;case pe.CANCELLED:return x.CANCELLED;case pe.UNKNOWN:return x.UNKNOWN;case pe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case pe.INTERNAL:return x.INTERNAL;case pe.UNAVAILABLE:return x.UNAVAILABLE;case pe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case pe.NOT_FOUND:return x.NOT_FOUND;case pe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case pe.ABORTED:return x.ABORTED;case pe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case pe.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(Y=pe||(pe={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xI(this.inner)}size(){return this.innerSize}}/**
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
 */const iT=new ke($.comparator);function cn(){return iT}const Qp=new ke($.comparator);function Vr(...t){let e=Qp;for(const n of t)e=e.insert(n.key,n);return e}function sT(t){let e=Qp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function En(){return Zr()}function Jp(){return Zr()}function Zr(){return new Cr(t=>t.toString(),(t,e)=>t.isEqual(e))}new ke($.comparator);const oT=new _e($.comparator);function J(...t){let e=oT;for(const n of t)e=e.add(n);return e}const aT=new _e(ne);function Zp(){return aT}/**
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
 */class Do{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ui.createSynthesizedTargetChangeForCurrentChange(e,n)),new Do(W.min(),r,Zp(),cn(),J())}}class Ui{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ui(Pe.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
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
 */class ms{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class eg{constructor(e,n){this.targetId=e,this.It=n}}class tg{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class of{constructor(){this.Tt=0,this.Et=lf(),this.At=Pe.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=J(),n=J(),r=J();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ui(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=lf()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class lT{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=cn(),this.Bt=af(),this.Lt=new _e(ne)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(ul(s))if(r===0){const o=new $(s.path);this.Kt(n,o,xe.newNoDocument(o,W.min()))}else ve(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&ul(a.target)){const l=new $(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,xe.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=J();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new Do(e,n,this.Lt,this.$t,r);return this.$t=cn(),this.Bt=af(),this.Lt=new _e(ne),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new of,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new _e(ne),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new of),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function af(){return new ke($.comparator)}function lf(){return new ke($.comparator)}/**
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
 */const cT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hT{constructor(e,n){this.databaseId=e,this.dt=n}}function fT(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.dt?e.toBase64():e.toUint8Array()}function yi(t){return ve(!!t),W.fromTimestamp(function(e){const n=ln(e);return new Ye(n.seconds,n.nanos)}(t))}function mT(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ng(t){const e=fe.fromString(t);return ve(sg(e)),e}function da(t,e){const n=ng(e);if(n.get(1)!==t.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(rg(n))}function pl(t,e){return mT(t.databaseId,e)}function pT(t){const e=ng(t);return e.length===4?fe.emptyPath():rg(e)}function cf(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.dt?(ve(c===void 0||typeof c=="string"),Pe.fromBase64String(c||"")):(ve(c===void 0||c instanceof Uint8Array),Pe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:Xp(l.code);return new B(c,l.message||"")}(o);n=new tg(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=da(t,r.document.name),s=yi(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=xe.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ms(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=da(t,r.document),s=r.readTime?yi(r.readTime):W.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ms([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=da(t,r.document),s=r.removedTargetIds||[];n=new ms([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new rT(i),o=r.targetId;n=new eg(o,s)}}return n}function vT(t,e){return{documents:[pl(t,e.path)]}}function yT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(Xh(h.value))return{unaryFilter:{field:qn(h.field),op:"IS_NAN"}};if(Yh(h.value))return{unaryFilter:{field:qn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Xh(h.value))return{unaryFilter:{field:qn(h.field),op:"IS_NOT_NAN"}};if(Yh(h.value))return{unaryFilter:{field:qn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qn(h.field),op:ET(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:qn(u.field),direction:_T(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,c){return l.dt||Co(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function bT(t){let e=pT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=ig(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qr(Zn(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Co(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,m=u.values||[];return new js(m,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,m=u.values||[];return new js(m,h)}(n.endAt)),zI(e,i,o,s,a,"F",l,c)}function wT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ig(t){return t?t.unaryFilter!==void 0?[TT(t)]:t.fieldFilter!==void 0?[IT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ig(e)).reduce((e,n)=>e.concat(n)):G():[]}function _T(t){return cT[t]}function ET(t){return uT[t]}function qn(t){return{fieldPath:t.canonicalString()}}function Zn(t){return We.fromServerFormat(t.fieldPath)}function IT(t){return Ge.create(Zn(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function TT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Zn(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Zn(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zn(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zn(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function sg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ST{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jr(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jr(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Gp(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&mr(this.mutations,e.mutations,(n,r)=>nf(n,r))&&mr(this.baseMutations,e.baseMutations,(n,r)=>nf(n,r))}}/**
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
 */class AT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class On{constructor(e,n,r,i,s=W.min(),o=W.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class kT{constructor(e){this.ne=e}}function CT(t){const e=bT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hl(e,e.limit,"L"):e}/**
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
 */class xT{constructor(){this.ze=new OT}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(an.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(an.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class OT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(fe.comparator)).toArray()}}/**
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
 */class NT{constructor(){this.changes=new Cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class DT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Jr(r.mutation,i,Cn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=En();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vr();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=En();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=cn();const o=Zr(),a=Zr();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Ro)?s=s.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Jr(u.mutation,c,u.mutation.getFieldMask(),Ye.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new RT(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Zr();let i=new ke((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Cn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Jp();u.forEach(m=>{if(!s.has(m)){const p=Gp(n.get(m),r.get(m));p!==null&&h.set(m,p),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return $.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(En());let a=-1,l=s;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.getBaseDocument(e,u,h).next(m=>{l=l.insert(u,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,J())).next(u=>({batchId:a,changes:sT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=Vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Vr();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(c,u){return new xo(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,xe.newInvalidDocument(c)))});let o=Vr();return i.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Jr(c.mutation,l,Cn.empty(),Ye.now()),Bc(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(xe.newInvalidDocument(n))}}/**
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
 */class PT{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:yi(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:CT(r.bundledQuery),readTime:yi(r.readTime)}}(n)),_.resolve()}}/**
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
 */class MT{constructor(){this.overlays=new ke($.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=En();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=En(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=En(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=En(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AT(n,r));let s=this.Xn.get(n);s===void 0&&(s=J(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class Hc{constructor(){this.Zn=new _e(Ie.ts),this.es=new _e(Ie.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Ie(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Ie(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new $(new fe([])),r=new Ie(n,e),i=new Ie(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new $(new fe([])),r=new Ie(n,e),i=new Ie(n,e+1);let s=J();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ie(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ie{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return $.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||$.comparator(e.key,n.key)}}/**
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
 */class LT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new _e(Ie.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ST(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ie(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ie(n,0),i=new Ie(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(ne);return n.forEach(i=>{const s=new Ie(i,0),o=new Ie(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),_.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ie(new $(s),0);let a=new _e(ne);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return _.forEach(n.mutations,i=>{const s=new Ie(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Ie(n,0),i=this.ds.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FT{constructor(e){this.ps=e,this.docs=new ke($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=cn();const s=new $(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||AI(SI(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){G()}Is(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UT(this)}getSize(e){return _.resolve(this.size)}}class UT extends NT{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class $T{constructor(e){this.persistence=e,this.Ts=new Cr(n=>Uc(n),$c),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Es=0,this.As=new Hc,this.targetCount=0,this.Rs=yr.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
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
 */class VT{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Lc(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new $T(this),this.indexManager=new xT,this.remoteDocumentCache=function(r){return new FT(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new kT(n),this.Ds=new PT(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new LT(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new BT(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return _.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class BT extends CI{constructor(e){super(),this.currentSequenceNumber=e}}class Kc{constructor(e){this.persistence=e,this.ks=new Hc,this.Ms=null}static Os(e){return new Kc(e)}get Fs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,r=>{const i=$.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class qc{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qc(e,n.fromCache,r,i)}}/**
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
 */class jT{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(ef(n))return _.resolve(null);let r=Ut(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hl(n,null,"F"),r=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(e,hl(n,null,"F")):this.Oi(e,c,n,l)}))})))}xi(e,n,r,i){return ef(n)||i.isEqual(W.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(Hh()<=te.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fl(n)),this.Oi(e,o,n,TI(i,-1)))})}ki(e,n){let r=new _e(Hp(e));return n.forEach((i,s)=>{Bc(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Hh()<=te.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",fl(n)),this.Di.getDocumentsMatchingQuery(e,n,an.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zT{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new ke(ne),this.Bi=new Cr(s=>Uc(s),$c),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DT(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function HT(t,e,n,r){return new zT(t,e,n,r)}async function og(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function ag(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function KT(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const m=i.get(h);if(!m)return;a.push(n.Vs.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,u.addedDocuments,h)));let p=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Pe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),i=i.insert(h,p),function(E,D,k){return E.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,p,u)&&a.push(n.Vs.updateTargetData(s,p))});let l=cn(),c=J();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(qT(s,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!r.isEqual(W.min())){const u=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.$i=i,s))}function qT(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=cn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function WT(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new On(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function gl(t,e,n){const r=ee(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fi(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function uf(t,e,n){const r=ee(t);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ee(a),h=u.Bi.get(c);return h!==void 0?_.resolve(u.$i.get(h)):u.Vs.getTargetData(l,c)}(r,o,Ut(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:J())).next(a=>(GT(r,WI(e),a),{documents:a,ji:s})))}function GT(t,e,n){let r=W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class hf{constructor(){this.activeTargetIds=Zp()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YT{constructor(){this.Fr=new hf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new hf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XT{Br(e){}shutdown(){}}/**
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
 */class ff{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const QT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class JT{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class ZT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);P("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw Kh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+kr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=QT[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new mI;a.listenOnce(hI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ha.NO_ERROR:const c=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(c)),s(c);break;case ha.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const u=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(E)>=0?E:x.UNKNOWN}(h.status);o(new B(m,h.message))}else o(new B(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=cI(),o=uI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new dI({})),this.uo(a.initMessageHeaders,n,r),em()||nm()||nw()||rm()||rw()||tm()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const c=s.createWebChannel(l,a);let u=!1,h=!1;const m=new JT({jr:E=>{h?P("Connection","Not sending because WebChannel is closed:",E):(u||(P("Connection","Opening WebChannel transport."),c.open(),u=!0),P("Connection","WebChannel sending:",E),c.send(E))},Wr:()=>c.close()}),p=(E,D,k)=>{E.listen(D,y=>{try{k(y)}catch(A){setTimeout(()=>{throw A},0)}})};return p(c,Zi.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),p(c,Zi.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),m.eo())}),p(c,Zi.EventType.ERROR,E=>{h||(h=!0,Kh("Connection","WebChannel transport errored:",E),m.eo(new B(x.UNAVAILABLE,"The operation could not be completed")))}),p(c,Zi.EventType.MESSAGE,E=>{var D;if(!h){const k=E.data[0];ve(!!k);const y=k,A=y.error||((D=y[0])===null||D===void 0?void 0:D.error);if(A){P("Connection","WebChannel received error:",A);const M=A.status;let z=function(de){const be=pe[de];if(be!==void 0)return Xp(be)}(M),Z=A.message;z===void 0&&(z=x.INTERNAL,Z="Unknown error status: "+M+" with message "+A.message),h=!0,m.eo(new B(z,Z)),c.close()}else P("Connection","WebChannel received:",k),m.no(k)}}),p(o,fI.STAT_EVENT,E=>{E.stat===jh.PROXY?P("Connection","Detected buffering proxy"):E.stat===jh.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function ma(){return typeof document<"u"?document:null}/**
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
 */function lg(t){return new hT(t,!0)}class cg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class eS{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new cg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ft(n.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tS extends eS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=gT(this.wt,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?yi(s.readTime):W.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=cf(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=ul(a)?{documents:vT(i,a)}:{query:yT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=dT(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=fT(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=wT(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=cf(this.wt),n.removeTarget=e,this.Oo(n)}}/**
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
 */class nS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(x.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(x.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class rS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Ft(n),this.su=!1):P("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class iS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.lu.add(4),await $i(l),l._u.set("Unknown"),l.lu.delete(4),await Po(l)}(this))})}),this._u=new rS(r,i)}}async function Po(t){if(Vi(t))for(const e of t.fu)await e(!0)}async function $i(t){for(const e of t.fu)await e(!1)}function ug(t,e){const n=ee(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Yc(n)?Gc(n):xr(n).Co()&&Wc(n,e))}function hg(t,e){const n=ee(t),r=xr(n);n.hu.delete(e),r.Co()&&fg(n,e),n.hu.size===0&&(r.Co()?r.ko():Vi(n)&&n._u.set("Unknown"))}function Wc(t,e){t.wu.Nt(e.targetId),xr(t).Qo(e)}function fg(t,e){t.wu.Nt(e),xr(t).jo(e)}function Gc(t){t.wu=new lT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),xr(t).start(),t._u.iu()}function Yc(t){return Vi(t)&&!xr(t).Do()&&t.hu.size>0}function Vi(t){return ee(t).lu.size===0}function dg(t){t.wu=void 0}async function sS(t){t.hu.forEach((e,n)=>{Wc(t,e)})}async function oS(t,e){dg(t),Yc(t)?(t._u.uu(e),Gc(t)):t._u.set("Unknown")}async function aS(t,e,n){if(t._u.set("Online"),e instanceof tg&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await df(t,r)}else if(e instanceof ms?t.wu.Ut(e):e instanceof eg?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(W.min()))try{const r=await ag(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.hu.get(l);c&&i.hu.set(l,c.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Pe.EMPTY_BYTE_STRING,l.snapshotVersion)),fg(i,a);const c=new On(l.target,a,1,l.sequenceNumber);Wc(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await df(t,r)}}async function df(t,e,n){if(!Fi(e))throw e;t.lu.add(1),await $i(t),t._u.set("Offline"),n||(n=()=>ag(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Po(t)})}async function mf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=Vi(n);n.lu.add(3),await $i(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Po(n)}async function lS(t,e){const n=ee(t);e?(n.lu.delete(2),await Po(n)):e||(n.lu.add(2),await $i(n),n._u.set("Unknown"))}function xr(t){return t.mu||(t.mu=function(e,n,r){const i=ee(e);return i.tu(),new tS(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:sS.bind(null,t),Jr:oS.bind(null,t),Go:aS.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Yc(t)?Gc(t):t._u.set("Unknown")):(await t.mu.stop(),dg(t))})),t.mu}/**
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
 */class Xc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xc(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(t,e){if(Ft("AsyncQueue",`${e}: ${t}`),Fi(t))return new B(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ar{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Vr(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new ar(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ar)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pf{constructor(){this.yu=new ke($.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):G():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class br{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new br(e,n,ar.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cS{constructor(){this.Iu=void 0,this.listeners=[]}}class uS{constructor(){this.queries=new Cr(e=>zp(e),Oo),this.onlineState="Unknown",this.Tu=new Set}}async function hS(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cS),i)try{s.Iu=await n.onListen(r)}catch(o){const a=mg(o,`Initialization of query '${fl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Qc(n)}async function fS(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function dS(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Qc(n)}function mS(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qc(t){t.Tu.forEach(e=>{e.next()})}class pS{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class pg{constructor(e){this.key=e}}class gg{constructor(e){this.key=e}}class gS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=J(),this.mutatedKeys=J(),this.Lu=Hp(e),this.Uu=new ar(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new pf,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const m=i.get(u),p=Bc(this.query,h)?h:null,E=!!m&&this.mutatedKeys.has(m.key),D=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;m&&p?m.data.isEqual(p.data)?E!==D&&(r.track({type:3,doc:p}),k=!0):this.Qu(m,p)||(r.track({type:2,doc:p}),k=!0,(l&&this.Lu(p,l)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!m&&p?(r.track({type:0,doc:p}),k=!0):m&&!p&&(r.track({type:1,doc:m}),k=!0,(l||c)&&(a=!0)),k&&(p?(o=o.add(p),s=D?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((c,u)=>function(h,m){const p=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(h)-p(m)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new br(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new pf,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=J(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new gg(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new pg(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=J();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return br.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class vS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yS{constructor(e){this.key=e,this.Xu=!1}}class bS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Cr(a=>zp(a),Oo),this.ec=new Map,this.nc=new Set,this.sc=new ke($.comparator),this.ic=new Map,this.rc=new Hc,this.oc={},this.uc=new Map,this.cc=yr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function wS(t,e){const n=kS(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await WT(n.localStore,Ut(e));n.isPrimaryClient&&ug(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _S(n,e,r,a==="current")}return i}async function _S(t,e,n,r){t.hc=(u,h,m)=>async function(p,E,D,k){let y=E.view.Ku(D);y.Mi&&(y=await uf(p.localStore,E.query,!1).then(({documents:z})=>E.view.Ku(z,y)));const A=k&&k.targetChanges.get(E.targetId),M=E.view.applyChanges(y,p.isPrimaryClient,A);return vf(p,E.targetId,M.zu),M.snapshot}(t,u,h,m);const i=await uf(t.localStore,e,!0),s=new gS(e,i.ji),o=s.Ku(i.documents),a=Ui.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);vf(t,n,l.zu);const c=new vS(e,n,s);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function ES(t,e){const n=ee(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Oo(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hg(n.remoteStore,r.targetId),vl(n,r.targetId)}).catch(Mc)):(vl(n,r.targetId),await gl(n.localStore,r.targetId,!0))}async function vg(t,e){const n=ee(t);try{const r=await KT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ve(o.Xu):i.removedDocuments.size>0&&(ve(o.Xu),o.Xu=!1))}),await bg(n,r,e)}catch(r){await Mc(r)}}function gf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Qc(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IS(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new ke($.comparator);o=o.insert(s,xe.newNoDocument(s,W.min()));const a=J().add(s),l=new Do(W.min(),new Map,new _e(ne),o,a);await vg(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),Jc(r)}else await gl(r.localStore,e,!1).then(()=>vl(r,e,n)).catch(Mc)}function vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||yg(t,r)})}function yg(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(hg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Jc(t))}function vf(t,e,n){for(const r of n)r instanceof pg?(t.rc.addReference(r.key,e),TS(t,r)):r instanceof gg?(P("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||yg(t,r.key)):G()}function TS(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(P("SyncEngine","New document in limbo: "+n),t.nc.add(r),Jc(t))}function Jc(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new $(fe.fromString(e)),r=t.cc.next();t.ic.set(r,new yS(n)),t.sc=t.sc.insert(n,r),ug(t.remoteStore,new On(Ut(Vc(n.path)),r,2,Lc.ot))}}async function bg(t,e,n){const r=ee(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=qc.Vi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const c=ee(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,h=>_.forEach(h.Pi,m=>c.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>_.forEach(h.vi,m=>c.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!Fi(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const m=c.$i.get(h),p=m.snapshotVersion,E=m.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(h,E)}}}(r.localStore,s))}async function SS(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await og(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new B(x.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bg(n,r.Ki)}}function AS(t,e){const n=ee(t),r=n.ic.get(e);if(r&&r.Xu)return J().add(r.key);{let i=J();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function kS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.Zu.Go=dS.bind(null,e.eventManager),e.Zu.lc=mS.bind(null,e.eventManager),e}class CS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=lg(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return HT(this.persistence,new jT,e.initialUser,this.wt)}_c(e){return new VT(Kc.Os,this.wt)}dc(e){return new YT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SS.bind(null,this.syncEngine),await lS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uS}createDatastore(e){const n=lg(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ZT(i));var i;return function(s,o,a,l){return new nS(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>gf(this.syncEngine,a,0),o=ff.V()?new ff:new XT,new iS(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,c){const u=new bS(r,i,s,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);P("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await $i(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class OS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Ft("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NS{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=$p.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function RS(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await og(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PS(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>mf(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>mf(e.remoteStore,s)),t.onlineComponents=e}async function PS(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await RS(t,new CS)),t.offlineComponents}async function MS(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await DS(t,new xS)),t.onlineComponents}async function LS(t){const e=await MS(t),n=e.eventManager;return n.onListen=wS.bind(null,e.syncEngine),n.onUnlisten=ES.bind(null,e.syncEngine),n}function FS(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const c=new OS({next:h=>{s.enqueueAndForget(()=>fS(i,u));const m=h.docs.has(o);!m&&h.fromCache?l.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&a&&a.source==="server"?l.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new pS(Vc(o.path),c,{includeMetadataChanges:!0,Du:!0});return hS(i,u)}(await LS(t),t.asyncQueue,e,n,r)),r.promise}const yf=new Map;/**
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
 */function US(t,e,n){if(!n)throw new B(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $S(t,e,n,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bf(t){if(!$.isDocumentKey(t))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function VS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function wf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=VS(t);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class _f{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class wg{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _f({}),this._settingsFrozen=!1,e instanceof gr?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gr(i.options.projectId)}(e))}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _f(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gI;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new bI(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=yf.get(e);n&&(P("ComponentProvider","Removing Datastore"),yf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Zc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zc(this.firestore,e,this._query)}}class bi extends Zc{constructor(e,n,r){super(e,n,Vc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new $(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function BS(t,e,...n){if(t=Ii(t),arguments.length===1&&(e=$p.I()),US("doc","path",e),t instanceof wg){const r=fe.fromString(e,...n);return bf(r),new Ot(t,null,new $(r))}{if(!(t instanceof Ot||t instanceof bi))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return bf(r),new Ot(t.firestore,t instanceof bi?t.converter:null,new $(r))}}/**
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
 */class jS{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new cg(this,"async_queue_retry"),this.Kc=()=>{const n=ma();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=ma();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new kn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Fi(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Xc.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class _g extends wg{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new jS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Eg(this),this._firestoreClient.terminate()}}function zS(t=am()){return ec(t,"firestore").getImmediate()}function HS(t){return t._firestoreClient||Eg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eg(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new NI(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new NS(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class Ig{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Pe.fromBase64String(e))}catch(n){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class KS{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const qS=new RegExp("[~\\*/\\[\\]]");function WS(t,e,n){if(e.search(qS)>=0)throw Ef(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ig(...e.split("."))._internalPath}catch{throw Ef(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ef(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(x.INVALID_ARGUMENT,a+t+l)}/**
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
 */class Tg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GS extends Tg{data(){return super.data()}}function Sg(t,e){return typeof e=="string"?WS(t,e):e instanceof Ig?e._internalPath:e._delegate._internalPath}/**
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
 */class YS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ag extends Tg{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new XS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class XS extends Ag{data(e={}){return super.data(e)}}/**
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
 */class QS{convertValue(e,n="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return ko(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new KS(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const n=ln(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ve(sg(r));const i=new gr(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||Ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function JS(t){t=wf(t,Ot);const e=wf(t.firestore,_g);return FS(HS(e),t._key).then(n=>eA(e,t,n))}class ZS extends QS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function eA(t,e,n){const r=n.docs.get(e._key),i=new ZS(t);return new Ag(t,i,e._key,r,new YS(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){kr=n})(Ti),hr(new Dn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new _g(i,new vI(n.getProvider("auth-internal")),new _I(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),nn(zh,"3.4.14",t),nn(zh,"3.4.14","esm2017")})();const tA={apiKey:"AIzaSyBZqhlEk13_PeiPGAyKfFAfHyj-MATUGZ4",authDomain:"portfolio-35dfd.firebaseapp.com",databaseURL:"https://portfolio-35dfd.firebaseio.com",projectId:"portfolio-35dfd",storageBucket:"portfolio-35dfd.appspot.com",messagingSenderId:"632417181065",appId:"1:632417181065:web:6d18b76dc4e23443ed9558"},kg=c_(tA),If=lE(kg),nA=zS(kg),Or=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},rA={components:{FontAwesomeIcon:Xd},data(){return{buttonLabel:"login",user:null,token:null,isLoggedIn:!1}},methods:{login(){_1(If,new mt).then(t=>{const e=mt.credentialFromResult(t);this.token=e.accessToken,this.user=t.user}).catch(t=>{console.log(t.message),alert(t.message)})},logout(){confirm("Are you sure you want to logout?")&&this.authLogout()},async authLogout(){try{await If.signOut(),this.isLoggedIn=!1,this.user=null,this.token=null,console.log("logged out successfully")}catch(t){console.log(t.message)}}},watch:{user(t){t&&t.email!=="xmliszt@gmail.com"?this.authLogout().then(()=>{alert("You are not recognised as the owner of this page."),this.isLoggedIn=!1}).catch(e=>{console.log(e.message)}):t&&(this.isLoggedIn=!0,t&&JS(BS(nA,"v2",t.uid)).then(e=>{e.exists?console.log("Document data:",e.data()):console.log("No such document!")}).catch(e=>{console.log("Error getting document:",e)}))}}};function iA(t,e,n,r,i,s){const o=Tn("FontAwesomeIcon");return Zt(),en("div",null,[i.isLoggedIn?(Zt(),en("button",{key:1,class:"icon-button hover-effect",onClick:e[1]||(e[1]=(...a)=>s.logout&&s.logout(...a))},[we(o,{icon:"fa-solid fa-arrow-up-right-from-square"})])):(Zt(),en("button",{key:0,class:"icon-button hover-effect",onClick:e[0]||(e[0]=(...a)=>s.login&&s.login(...a))},[we(o,{icon:"fa-solid fa-arrow-right-to-bracket"})]))])}const sA=Or(rA,[["render",iA]]),oA="/staging/assets/avatar.42f08a86.jpeg";const aA={data(){return{imgUrl:oA,imgAlt:"No Image"}}},lA={class:"avatar drop-shadow-light morph-hover-effect"},cA=["src","alt"];function uA(t,e,n,r,i,s){return Zt(),en("div",lA,[me("img",{src:i.imgUrl,alt:i.imgAlt},null,8,cA)])}const hA=Or(aA,[["render",uA],["__scopeId","data-v-6233277b"]]);const fA={components:{AvatarView:hA,FontAwesomeIcon:Xd},data(){return{scrollingEnable:!0,scrollingEnableClass:"scrolling-enable",scrollingDisableClass:"scrolling-disable"}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){t+e>=n&&(this.scrollingEnable=!1)},enableScroll(){this.scrollingEnable=!0}}},Mo=t=>(Ov("data-v-1ef03db7"),t=t(),Nv(),t),dA=Mo(()=>me("div",{class:"parallax-background"},[me("div",null,[me("h1",null,"Hi! I'm Li Yuxuan. Nice to meet you! \u{1F64C}\u{1F3FB}")])],-1)),mA={class:"parallax-fixed"},pA={class:"parallax-base"},gA=Mo(()=>me("div",{class:"header-mountain"},null,-1)),vA={class:"keep-scrolling"},yA=Mo(()=>me("div",null,"Keep Scrolling",-1)),bA=Mo(()=>me("div",{class:"background"},null,-1));function wA(t,e,n,r,i,s){const o=Tn("AvatarView"),a=Tn("FontAwesomeIcon");return Zt(),en("div",{class:lr(["parallax",[i.scrollingEnable?i.scrollingEnableClass:i.scrollingDisableClass]]),ref:"parallax",onScroll:e[0]||(e[0]=(...l)=>this.handleScroll&&this.handleScroll(...l))},[dA,me("div",mA,[me("div",null,[we(o,{ref:"avatarView"},null,512)])]),me("div",pA,[me("div",null,[gA,me("div",vA,[we(a,{icon:"fa-solid fa-angles-down"}),yA]),bA])])],34)}const _A=Or(fA,[["render",wA],["__scopeId","data-v-1ef03db7"]]);const EA={props:{label:String}},IA={class:"fish-tag"};function TA(t,e,n,r,i,s){return Zt(),en("div",IA,Sf(n.label.toUpperCase()),1)}const SA=Or(EA,[["render",TA],["__scopeId","data-v-ba16cd5c"]]);const AA={components:{FishTag:SA},data(){return{typingDelay:100,erasingDelay:50,newSentenceDelay:2e3,charIndex:0,currentSkillIndex:0,isTyping:!0,isTypingClass:"typing",isWaiting:!1,showClass:"show",hideClass:"hide",typedOutText:"",displayedTag:"",skills:[{category:"technology",verb:"develop",adj:"",noun:"static websites",tools:["JavaScript","HTML","CSS","VueJS framework"]},{category:"photography",verb:"take",adj:"beautiful",noun:"photos",tools:["O-EM10 MKII","Photoshop","Lightroom"]}]}},methods:{buildSentence(t){return`${t.verb} ${t.adj} ${t.noun} using ${t.tools.slice(1).reduce((e,n)=>e+", "+n,t.tools[0])}.`},startTyping(){this.isWaiting=!1;let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.displayedTag=t.category,this.isTyping=this.charIndex<e.length,this.isTyping?(this.typedOutText+=e[this.charIndex],this.charIndex++,setTimeout(this.startTyping,this.typingDelay)):setTimeout(this.startErasing,this.newSentenceDelay)},startErasing(){let t=this.skills[this.currentSkillIndex],e=this.buildSentence(t);this.isTyping=this.charIndex>0,this.isTyping?(this.typedOutText=e.substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.startErasing,this.erasingDelay)):(this.currentSkillIndex++,this.currentSkillIndex>=this.skills.length&&(this.currentSkillIndex=0),this.isWaiting=!0,setTimeout(this.startTyping,this.typingDelay+1100))}},created(){this.skills.length>0&&(this.displayedTag=this.skills[this.currentSkillIndex].category,setTimeout(this.startTyping,this.newSentenceDelay+250))}},kA={class:"skills-overview"},CA={class:"typewriter drop-shadow-dark"},xA=md(" I "),OA={class:"typed-text"};function NA(t,e,n,r,i,s){const o=Tn("FishTag");return Zt(),en("div",kA,[me("div",CA,[me("p",null,[xA,me("span",OA,Sf(this.typedOutText),1),me("span",{class:lr(["cursor",[i.isTyping?i.isTypingClass:""]])},"\xA0",2)])]),we(o,{class:lr(["fish-tag drop-shadow-dark",[i.isWaiting?i.hideClass:i.showClass]]),label:i.displayedTag},null,8,["class","label"])])}const RA=Or(AA,[["render",NA],["__scopeId","data-v-130bd26a"]]);const DA={components:{AuthButton:sA,ParallaxView:_A,SkillsOverview:RA},data(){return{authBtnOpacity:1,authBtnHidden:!1}},methods:{handleScroll({target:{scrollTop:t,clientHeight:e,scrollHeight:n}}){this.authBtnOpacity=1-t/(n-e),this.authBtnHidden=t+e>=n},handleMainScroll(){window.scrollY===0&&this.$refs.parallaxView.enableScroll()}},mounted(){document.addEventListener("scroll",this.handleMainScroll)},unmounted(){document.removeEventListener("scroll",this.handleMainScroll)}},PA={id:"login"},MA={id:"skills"},LA=me("section",{id:"projects"},"PROJECTS",-1);function FA(t,e,n,r,i,s){const o=Tn("ParallaxView"),a=Tn("AuthButton"),l=Tn("SkillsOverview");return Zt(),en("main",null,[we(o,{ref:"parallaxView",onScroll:this.handleScroll},null,8,["onScroll"]),me("div",PA,[we(a,{ref:"authBtn",style:qs({opacity:i.authBtnOpacity}),hidden:i.authBtnHidden},null,8,["style","hidden"])]),me("section",MA,[we(l)]),LA])}const UA=Or(DA,[["render",FA]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var $A={prefix:"fas",iconName:"angles-down",icon:[384,512,["angle-double-down"],"f103","M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"]},VA={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},BA={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[448,512,["external-link"],"f08e","M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"]};L0.add(VA,BA,$A);eb(UA).mount("#app");
