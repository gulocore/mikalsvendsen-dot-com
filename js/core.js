(()=>{var pa=!1,ma=!1,$n=[],ga=-1;function Mf(n){wf(n)}function wf(n){$n.includes(n)||$n.push(n),Ef()}function Tf(n){let e=$n.indexOf(n);e!==-1&&e>ga&&$n.splice(e,1)}function Ef(){!ma&&!pa&&(pa=!0,queueMicrotask(Af))}function Af(){pa=!1,ma=!0;for(let n=0;n<$n.length;n++)$n[n](),ga=n;$n.length=0,ga=-1,ma=!1}var Mi,jn,wi,zc,_a=!0;function Cf(n){_a=!1,n(),_a=!0}function Rf(n){Mi=n.reactive,wi=n.release,jn=e=>n.effect(e,{scheduler:t=>{_a?Mf(t):t()}}),zc=n.raw}function Ec(n){jn=n}function If(n){let e=()=>{};return[i=>{let r=jn(i);return n._x_effects||(n._x_effects=new Set,n._x_runEffects=()=>{n._x_effects.forEach(s=>s())}),n._x_effects.add(r),e=()=>{r!==void 0&&(n._x_effects.delete(r),wi(r))},r},()=>{e()}]}function Vc(n,e){let t=!0,i,r=jn(()=>{let s=n();JSON.stringify(s),t?i=s:queueMicrotask(()=>{e(s,i),i=s}),t=!1});return()=>wi(r)}var Hc=[],Gc=[],Wc=[];function Pf(n){Wc.push(n)}function Pa(n,e){typeof e=="function"?(n._x_cleanups||(n._x_cleanups=[]),n._x_cleanups.push(e)):(e=n,Gc.push(e))}function Xc(n){Hc.push(n)}function qc(n,e,t){n._x_attributeCleanups||(n._x_attributeCleanups={}),n._x_attributeCleanups[e]||(n._x_attributeCleanups[e]=[]),n._x_attributeCleanups[e].push(t)}function $c(n,e){n._x_attributeCleanups&&Object.entries(n._x_attributeCleanups).forEach(([t,i])=>{(e===void 0||e.includes(t))&&(i.forEach(r=>r()),delete n._x_attributeCleanups[t])})}function Lf(n){for(n._x_effects?.forEach(Tf);n._x_cleanups?.length;)n._x_cleanups.pop()()}var La=new MutationObserver(Fa),Da=!1;function Na(){La.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Da=!0}function Yc(){Df(),La.disconnect(),Da=!1}var rr=[];function Df(){let n=La.takeRecords();rr.push(()=>n.length>0&&Fa(n));let e=rr.length;queueMicrotask(()=>{if(rr.length===e)for(;rr.length>0;)rr.shift()()})}function st(n){if(!Da)return n();Yc();let e=n();return Na(),e}var Ua=!1,es=[];function Nf(){Ua=!0}function Uf(){Ua=!1,Fa(es),es=[]}function Fa(n){if(Ua){es=es.concat(n);return}let e=[],t=new Set,i=new Map,r=new Map;for(let s=0;s<n.length;s++)if(!n[s].target._x_ignoreMutationObserver&&(n[s].type==="childList"&&(n[s].removedNodes.forEach(o=>{o.nodeType===1&&o._x_marker&&t.add(o)}),n[s].addedNodes.forEach(o=>{if(o.nodeType===1){if(t.has(o)){t.delete(o);return}o._x_marker||e.push(o)}})),n[s].type==="attributes")){let o=n[s].target,a=n[s].attributeName,l=n[s].oldValue,c=()=>{i.has(o)||i.set(o,[]),i.get(o).push({name:a,value:o.getAttribute(a)})},u=()=>{r.has(o)||r.set(o,[]),r.get(o).push(a)};o.hasAttribute(a)&&l===null?c():o.hasAttribute(a)?(u(),c()):u()}r.forEach((s,o)=>{$c(o,s)}),i.forEach((s,o)=>{Hc.forEach(a=>a(o,s))});for(let s of t)e.some(o=>o.contains(s))||Gc.forEach(o=>o(s));for(let s of e)s.isConnected&&Wc.forEach(o=>o(s));e=null,t=null,i=null,r=null}function Zc(n){return dr(Si(n))}function hr(n,e,t){return n._x_dataStack=[e,...Si(t||n)],()=>{n._x_dataStack=n._x_dataStack.filter(i=>i!==e)}}function Si(n){return n._x_dataStack?n._x_dataStack:typeof ShadowRoot=="function"&&n instanceof ShadowRoot?Si(n.host):n.parentNode?Si(n.parentNode):[]}function dr(n){return new Proxy({objects:n},Ff)}var Ff={ownKeys({objects:n}){return Array.from(new Set(n.flatMap(e=>Object.keys(e))))},has({objects:n},e){return e==Symbol.unscopables?!1:n.some(t=>Object.prototype.hasOwnProperty.call(t,e)||Reflect.has(t,e))},get({objects:n},e,t){return e=="toJSON"?Of:Reflect.get(n.find(i=>Reflect.has(i,e))||{},e,t)},set({objects:n},e,t,i){let r=n.find(o=>Object.prototype.hasOwnProperty.call(o,e))||n[n.length-1],s=Object.getOwnPropertyDescriptor(r,e);return s?.set&&s?.get?s.set.call(i,t)||!0:Reflect.set(r,e,t)}};function Of(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function Jc(n){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,t=(i,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:o,enumerable:a}])=>{if(a===!1||o===void 0||typeof o=="object"&&o!==null&&o.__v_skip)return;let l=r===""?s:`${r}.${s}`;typeof o=="object"&&o!==null&&o._x_interceptor?i[s]=o.initialize(n,l,s):e(o)&&o!==i&&!(o instanceof Element)&&t(o,l)})};return t(n)}function Kc(n,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(i,r,s){return n(this.initialValue,()=>Bf(i,r),o=>xa(i,r,o),r,s)}};return e(t),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let r=t.initialize.bind(t);t.initialize=(s,o,a)=>{let l=i.initialize(s,o,a);return t.initialValue=l,r(s,o,a)}}else t.initialValue=i;return t}}function Bf(n,e){return e.split(".").reduce((t,i)=>t[i],n)}function xa(n,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)n[e[0]]=t;else{if(e.length===0)throw error;return n[e[0]]||(n[e[0]]={}),xa(n[e[0]],e.slice(1),t)}}var jc={};function $t(n,e){jc[n]=e}function va(n,e){let t=kf(e);return Object.entries(jc).forEach(([i,r])=>{Object.defineProperty(n,`$${i}`,{get(){return r(e,t)},enumerable:!1})}),n}function kf(n){let[e,t]=ru(n),i={interceptor:Kc,...e};return Pa(n,t),i}function zf(n,e,t,...i){try{return t(...i)}catch(r){ur(r,n,e)}}function ur(n,e,t=void 0){n=Object.assign(n??{message:"No error message given."},{el:e,expression:t}),console.warn(`Alpine Expression Error: ${n.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw n},0)}var jr=!0;function Qc(n){let e=jr;jr=!1;let t=n();return jr=e,t}function Yn(n,e,t={}){let i;return wt(n,e)(r=>i=r,t),i}function wt(...n){return eu(...n)}var eu=tu;function Vf(n){eu=n}function tu(n,e){let t={};va(t,n);let i=[t,...Si(n)],r=typeof e=="function"?Hf(i,e):Wf(i,e,n);return zf.bind(null,n,e,r)}function Hf(n,e){return(t=()=>{},{scope:i={},params:r=[]}={})=>{let s=e.apply(dr([i,...n]),r);ts(t,s)}}var ca={};function Gf(n,e){if(ca[n])return ca[n];let t=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(n.trim())||/^(let|const)\s/.test(n.trim())?`(async()=>{ ${n} })()`:n,s=(()=>{try{let o=new t(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);return Object.defineProperty(o,"name",{value:`[Alpine] ${n}`}),o}catch(o){return ur(o,e,n),Promise.resolve()}})();return ca[n]=s,s}function Wf(n,e,t){let i=Gf(e,t);return(r=()=>{},{scope:s={},params:o=[]}={})=>{i.result=void 0,i.finished=!1;let a=dr([s,...n]);if(typeof i=="function"){let l=i(i,a).catch(c=>ur(c,t,e));i.finished?(ts(r,i.result,a,o,t),i.result=void 0):l.then(c=>{ts(r,c,a,o,t)}).catch(c=>ur(c,t,e)).finally(()=>i.result=void 0)}}}function ts(n,e,t,i,r){if(jr&&typeof e=="function"){let s=e.apply(t,i);s instanceof Promise?s.then(o=>ts(n,o,t,i)).catch(o=>ur(o,r,e)):n(s)}else typeof e=="object"&&e instanceof Promise?e.then(s=>n(s)):n(e)}var Oa="x-";function Ti(n=""){return Oa+n}function Xf(n){Oa=n}var ns={};function lt(n,e){return ns[n]=e,{before(t){if(!ns[t]){console.warn(String.raw`Cannot find directive \`${t}\`. \`${n}\` will use the default order of execution`);return}let i=qn.indexOf(t);qn.splice(i>=0?i:qn.indexOf("DEFAULT"),0,n)}}}function qf(n){return Object.keys(ns).includes(n)}function Ba(n,e,t){if(e=Array.from(e),n._x_virtualDirectives){let s=Object.entries(n._x_virtualDirectives).map(([a,l])=>({name:a,value:l})),o=nu(s);s=s.map(a=>o.find(l=>l.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),e=e.concat(s)}let i={};return e.map(au((s,o)=>i[s]=o)).filter(cu).map(Zf(i,t)).sort(Jf).map(s=>Yf(n,s))}function nu(n){return Array.from(n).map(au()).filter(e=>!cu(e))}var ya=!1,ar=new Map,iu=Symbol();function $f(n){ya=!0;let e=Symbol();iu=e,ar.set(e,[]);let t=()=>{for(;ar.get(e).length;)ar.get(e).shift()();ar.delete(e)},i=()=>{ya=!1,t()};n(t),i()}function ru(n){let e=[],t=a=>e.push(a),[i,r]=If(n);return e.push(r),[{Alpine:fr,effect:i,cleanup:t,evaluateLater:wt.bind(wt,n),evaluate:Yn.bind(Yn,n)},()=>e.forEach(a=>a())]}function Yf(n,e){let t=()=>{},i=ns[e.type]||t,[r,s]=ru(n);qc(n,e.original,s);let o=()=>{n._x_ignore||n._x_ignoreSelf||(i.inline&&i.inline(n,e,r),i=i.bind(i,n,e,r),ya?ar.get(iu).push(i):i())};return o.runCleanups=s,o}var su=(n,e)=>({name:t,value:i})=>(t.startsWith(n)&&(t=t.replace(n,e)),{name:t,value:i}),ou=n=>n;function au(n=()=>{}){return({name:e,value:t})=>{let{name:i,value:r}=lu.reduce((s,o)=>o(s),{name:e,value:t});return i!==e&&n(i,e),{name:i,value:r}}}var lu=[];function ka(n){lu.push(n)}function cu({name:n}){return uu().test(n)}var uu=()=>new RegExp(`^${Oa}([^:^.]+)\\b`);function Zf(n,e){return({name:t,value:i})=>{let r=t.match(uu()),s=t.match(/:([a-zA-Z0-9\-_:]+)/),o=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||n[t]||t;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:i,original:a}}}var Sa="DEFAULT",qn=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Sa,"teleport"];function Jf(n,e){let t=qn.indexOf(n.type)===-1?Sa:n.type,i=qn.indexOf(e.type)===-1?Sa:e.type;return qn.indexOf(t)-qn.indexOf(i)}function lr(n,e,t={}){n.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}function Kn(n,e){if(typeof ShadowRoot=="function"&&n instanceof ShadowRoot){Array.from(n.children).forEach(r=>Kn(r,e));return}let t=!1;if(e(n,()=>t=!0),t)return;let i=n.firstElementChild;for(;i;)Kn(i,e,!1),i=i.nextElementSibling}function kt(n,...e){console.warn(`Alpine Warning: ${n}`,...e)}var Ac=!1;function Kf(){Ac&&kt("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Ac=!0,document.body||kt("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),lr(document,"alpine:init"),lr(document,"alpine:initializing"),Na(),Pf(e=>hn(e,Kn)),Pa(e=>Ai(e)),Xc((e,t)=>{Ba(e,t).forEach(i=>i())});let n=e=>!rs(e.parentElement,!0);Array.from(document.querySelectorAll(fu().join(","))).filter(n).forEach(e=>{hn(e)}),lr(document,"alpine:initialized"),setTimeout(()=>{tp()})}var za=[],hu=[];function du(){return za.map(n=>n())}function fu(){return za.concat(hu).map(n=>n())}function pu(n){za.push(n)}function mu(n){hu.push(n)}function rs(n,e=!1){return Ei(n,t=>{if((e?fu():du()).some(r=>t.matches(r)))return!0})}function Ei(n,e){if(n){if(e(n))return n;if(n._x_teleportBack&&(n=n._x_teleportBack),!!n.parentElement)return Ei(n.parentElement,e)}}function jf(n){return du().some(e=>n.matches(e))}var gu=[];function Qf(n){gu.push(n)}var ep=1;function hn(n,e=Kn,t=()=>{}){Ei(n,i=>i._x_ignore)||$f(()=>{e(n,(i,r)=>{i._x_marker||(t(i,r),gu.forEach(s=>s(i,r)),Ba(i,i.attributes).forEach(s=>s()),i._x_ignore||(i._x_marker=ep++),i._x_ignore&&r())})})}function Ai(n,e=Kn){e(n,t=>{Lf(t),$c(t),delete t._x_marker})}function tp(){[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,t,i])=>{qf(t)||i.some(r=>{if(document.querySelector(r))return kt(`found "${r}", but missing ${e} plugin`),!0})})}var ba=[],Va=!1;function Ha(n=()=>{}){return queueMicrotask(()=>{Va||setTimeout(()=>{Ma()})}),new Promise(e=>{ba.push(()=>{n(),e()})})}function Ma(){for(Va=!1;ba.length;)ba.shift()()}function np(){Va=!0}function Ga(n,e){return Array.isArray(e)?Cc(n,e.join(" ")):typeof e=="object"&&e!==null?ip(n,e):typeof e=="function"?Ga(n,e()):Cc(n,e)}function Cc(n,e){let t=s=>s.split(" ").filter(Boolean),i=s=>s.split(" ").filter(o=>!n.classList.contains(o)).filter(Boolean),r=s=>(n.classList.add(...s),()=>{n.classList.remove(...s)});return e=e===!0?e="":e||"",r(i(e))}function ip(n,e){let t=a=>a.split(" ").filter(Boolean),i=Object.entries(e).flatMap(([a,l])=>l?t(a):!1).filter(Boolean),r=Object.entries(e).flatMap(([a,l])=>l?!1:t(a)).filter(Boolean),s=[],o=[];return r.forEach(a=>{n.classList.contains(a)&&(n.classList.remove(a),o.push(a))}),i.forEach(a=>{n.classList.contains(a)||(n.classList.add(a),s.push(a))}),()=>{o.forEach(a=>n.classList.add(a)),s.forEach(a=>n.classList.remove(a))}}function ss(n,e){return typeof e=="object"&&e!==null?rp(n,e):sp(n,e)}function rp(n,e){let t={};return Object.entries(e).forEach(([i,r])=>{t[i]=n.style[i],i.startsWith("--")||(i=op(i)),n.style.setProperty(i,r)}),setTimeout(()=>{n.style.length===0&&n.removeAttribute("style")}),()=>{ss(n,t)}}function sp(n,e){let t=n.getAttribute("style",e);return n.setAttribute("style",e),()=>{n.setAttribute("style",t||"")}}function op(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function wa(n,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,n.apply(this,arguments))}}lt("transition",(n,{value:e,modifiers:t,expression:i},{evaluate:r})=>{typeof i=="function"&&(i=r(i)),i!==!1&&(!i||typeof i=="boolean"?lp(n,t,e):ap(n,i,e))});function ap(n,e,t){_u(n,Ga,""),{enter:r=>{n._x_transition.enter.during=r},"enter-start":r=>{n._x_transition.enter.start=r},"enter-end":r=>{n._x_transition.enter.end=r},leave:r=>{n._x_transition.leave.during=r},"leave-start":r=>{n._x_transition.leave.start=r},"leave-end":r=>{n._x_transition.leave.end=r}}[t](e)}function lp(n,e,t){_u(n,ss);let i=!e.includes("in")&&!e.includes("out")&&!t,r=i||e.includes("in")||["enter"].includes(t),s=i||e.includes("out")||["leave"].includes(t);e.includes("in")&&!i&&(e=e.filter((d,A)=>A<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((d,A)=>A>e.indexOf("out")));let o=!e.includes("opacity")&&!e.includes("scale"),a=o||e.includes("opacity"),l=o||e.includes("scale"),c=a?0:1,u=l?sr(e,"scale",95)/100:1,h=sr(e,"delay",0)/1e3,f=sr(e,"origin","center"),m="opacity, transform",_=sr(e,"duration",150)/1e3,y=sr(e,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(n._x_transition.enter.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${_}s`,transitionTimingFunction:p},n._x_transition.enter.start={opacity:c,transform:`scale(${u})`},n._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(n._x_transition.leave.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${y}s`,transitionTimingFunction:p},n._x_transition.leave.start={opacity:1,transform:"scale(1)"},n._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function _u(n,e,t={}){n._x_transition||(n._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(i=()=>{},r=()=>{}){Ta(n,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,r)},out(i=()=>{},r=()=>{}){Ta(n,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(n,e,t,i){let r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout,s=()=>r(t);if(e){n._x_transition&&(n._x_transition.enter||n._x_transition.leave)?n._x_transition.enter&&(Object.entries(n._x_transition.enter.during).length||Object.entries(n._x_transition.enter.start).length||Object.entries(n._x_transition.enter.end).length)?n._x_transition.in(t):s():n._x_transition?n._x_transition.in(t):s();return}n._x_hidePromise=n._x_transition?new Promise((o,a)=>{n._x_transition.out(()=>{},()=>o(i)),n._x_transitioning&&n._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let o=xu(n);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(n)):r(()=>{let a=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(a)]).then(([u])=>u?.());return delete l._x_hidePromise,delete l._x_hideChildren,c};a(n).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function xu(n){let e=n.parentNode;if(e)return e._x_hidePromise?e:xu(e)}function Ta(n,e,{during:t,start:i,end:r}={},s=()=>{},o=()=>{}){if(n._x_transitioning&&n._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(i).length===0&&Object.keys(r).length===0){s(),o();return}let a,l,c;cp(n,{start(){a=e(n,i)},during(){l=e(n,t)},before:s,end(){a(),c=e(n,r)},after:o,cleanup(){l(),c()}})}function cp(n,e){let t,i,r,s=wa(()=>{st(()=>{t=!0,i||e.before(),r||(e.end(),Ma()),e.after(),n.isConnected&&e.cleanup(),delete n._x_transitioning})});n._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:wa(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},st(()=>{e.start(),e.during()}),np(),requestAnimationFrame(()=>{if(t)return;let o=Number(getComputedStyle(n).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(n).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(n).animationDuration.replace("s",""))*1e3),st(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{t||(st(()=>{e.end()}),Ma(),setTimeout(n._x_transitioning.finish,o+a),r=!0)})})}function sr(n,e,t){if(n.indexOf(e)===-1)return t;let i=n[n.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return t;if(e==="duration"||e==="delay"){let r=i.match(/([0-9]+)ms/);if(r)return r[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(n[n.indexOf(e)+2])?[i,n[n.indexOf(e)+2]].join(" "):i}var En=!1;function Cn(n,e=()=>{}){return(...t)=>En?e(...t):n(...t)}function up(n){return(...e)=>En&&n(...e)}var vu=[];function os(n){vu.push(n)}function hp(n,e){vu.forEach(t=>t(n,e)),En=!0,yu(()=>{hn(e,(t,i)=>{i(t,()=>{})})}),En=!1}var Ea=!1;function dp(n,e){e._x_dataStack||(e._x_dataStack=n._x_dataStack),En=!0,Ea=!0,yu(()=>{fp(e)}),En=!1,Ea=!1}function fp(n){let e=!1;hn(n,(i,r)=>{Kn(i,(s,o)=>{if(e&&jf(s))return o();e=!0,r(s,o)})})}function yu(n){let e=jn;Ec((t,i)=>{let r=e(t);return wi(r),()=>{}}),n(),Ec(e)}function Su(n,e,t,i=[]){switch(n._x_bindings||(n._x_bindings=Mi({})),n._x_bindings[e]=t,e=i.includes("camel")?Sp(e):e,e){case"value":pp(n,t);break;case"style":gp(n,t);break;case"class":mp(n,t);break;case"selected":case"checked":_p(n,e,t);break;default:bu(n,e,t);break}}function pp(n,e){if(Tu(n))n.attributes.value===void 0&&(n.value=e),window.fromModel&&(typeof e=="boolean"?n.checked=Qr(n.value)===e:n.checked=Rc(n.value,e));else if(Wa(n))Number.isInteger(e)?n.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?n.value=String(e):Array.isArray(e)?n.checked=e.some(t=>Rc(t,n.value)):n.checked=!!e;else if(n.tagName==="SELECT")yp(n,e);else{if(n.value===e)return;n.value=e===void 0?"":e}}function mp(n,e){n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedClasses=Ga(n,e)}function gp(n,e){n._x_undoAddedStyles&&n._x_undoAddedStyles(),n._x_undoAddedStyles=ss(n,e)}function _p(n,e,t){bu(n,e,t),vp(n,e,t)}function bu(n,e,t){[null,void 0,!1].includes(t)&&Mp(e)?n.removeAttribute(e):(Mu(e)&&(t=e),xp(n,e,t))}function xp(n,e,t){n.getAttribute(e)!=t&&n.setAttribute(e,t)}function vp(n,e,t){n[e]!==t&&(n[e]=t)}function yp(n,e){let t=[].concat(e).map(i=>i+"");Array.from(n.options).forEach(i=>{i.selected=t.includes(i.value)})}function Sp(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Rc(n,e){return n==e}function Qr(n){return[1,"1","true","on","yes",!0].includes(n)?!0:[0,"0","false","off","no",!1].includes(n)?!1:n?!!n:null}var bp=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Mu(n){return bp.has(n)}function Mp(n){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(n)}function wp(n,e,t){return n._x_bindings&&n._x_bindings[e]!==void 0?n._x_bindings[e]:wu(n,e,t)}function Tp(n,e,t,i=!0){if(n._x_bindings&&n._x_bindings[e]!==void 0)return n._x_bindings[e];if(n._x_inlineBindings&&n._x_inlineBindings[e]!==void 0){let r=n._x_inlineBindings[e];return r.extract=i,Qc(()=>Yn(n,r.expression))}return wu(n,e,t)}function wu(n,e,t){let i=n.getAttribute(e);return i===null?typeof t=="function"?t():t:i===""?!0:Mu(e)?!![e,"true"].includes(i):i}function Wa(n){return n.type==="checkbox"||n.localName==="ui-checkbox"||n.localName==="ui-switch"}function Tu(n){return n.type==="radio"||n.localName==="ui-radio"}function Eu(n,e){var t;return function(){var i=this,r=arguments,s=function(){t=null,n.apply(i,r)};clearTimeout(t),t=setTimeout(s,e)}}function Au(n,e){let t;return function(){let i=this,r=arguments;t||(n.apply(i,r),t=!0,setTimeout(()=>t=!1,e))}}function Cu({get:n,set:e},{get:t,set:i}){let r=!0,s,o,a=jn(()=>{let l=n(),c=t();if(r)i(ua(l)),r=!1;else{let u=JSON.stringify(l),h=JSON.stringify(c);u!==s?i(ua(l)):u!==h&&e(ua(c))}s=JSON.stringify(n()),o=JSON.stringify(t())});return()=>{wi(a)}}function ua(n){return typeof n=="object"?JSON.parse(JSON.stringify(n)):n}function Ep(n){(Array.isArray(n)?n:[n]).forEach(t=>t(fr))}var Xn={},Ic=!1;function Ap(n,e){if(Ic||(Xn=Mi(Xn),Ic=!0),e===void 0)return Xn[n];Xn[n]=e,Jc(Xn[n]),typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Xn[n].init()}function Cp(){return Xn}var Ru={};function Rp(n,e){let t=typeof e!="function"?()=>e:e;return n instanceof Element?Iu(n,t()):(Ru[n]=t,()=>{})}function Ip(n){return Object.entries(Ru).forEach(([e,t])=>{Object.defineProperty(n,e,{get(){return(...i)=>t(...i)}})}),n}function Iu(n,e,t){let i=[];for(;i.length;)i.pop()();let r=Object.entries(e).map(([o,a])=>({name:o,value:a})),s=nu(r);return r=r.map(o=>s.find(a=>a.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),Ba(n,r,t).map(o=>{i.push(o.runCleanups),o()}),()=>{for(;i.length;)i.pop()()}}var Pu={};function Pp(n,e){Pu[n]=e}function Lp(n,e){return Object.entries(Pu).forEach(([t,i])=>{Object.defineProperty(n,t,{get(){return(...r)=>i.bind(e)(...r)},enumerable:!1})}),n}var Dp={get reactive(){return Mi},get release(){return wi},get effect(){return jn},get raw(){return zc},version:"3.14.9",flushAndStopDeferringMutations:Uf,dontAutoEvaluateFunctions:Qc,disableEffectScheduling:Cf,startObservingMutations:Na,stopObservingMutations:Yc,setReactivityEngine:Rf,onAttributeRemoved:qc,onAttributesAdded:Xc,closestDataStack:Si,skipDuringClone:Cn,onlyDuringClone:up,addRootSelector:pu,addInitSelector:mu,interceptClone:os,addScopeToNode:hr,deferMutations:Nf,mapAttributes:ka,evaluateLater:wt,interceptInit:Qf,setEvaluator:Vf,mergeProxies:dr,extractProp:Tp,findClosest:Ei,onElRemoved:Pa,closestRoot:rs,destroyTree:Ai,interceptor:Kc,transition:Ta,setStyles:ss,mutateDom:st,directive:lt,entangle:Cu,throttle:Au,debounce:Eu,evaluate:Yn,initTree:hn,nextTick:Ha,prefixed:Ti,prefix:Xf,plugin:Ep,magic:$t,store:Ap,start:Kf,clone:dp,cloneNode:hp,bound:wp,$data:Zc,watch:Vc,walk:Kn,data:Pp,bind:Rp},fr=Dp;function Lu(n,e){let t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}var Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S0=Lu(Np+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"),Up=Object.freeze({}),b0=Object.freeze([]),Fp=Object.prototype.hasOwnProperty,as=(n,e)=>Fp.call(n,e),Zn=Array.isArray,cr=n=>Du(n)==="[object Map]",Op=n=>typeof n=="string",Xa=n=>typeof n=="symbol",ls=n=>n!==null&&typeof n=="object",Bp=Object.prototype.toString,Du=n=>Bp.call(n),Nu=n=>Du(n).slice(8,-1),qa=n=>Op(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,cs=n=>{let e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kp=/-(\w)/g,M0=cs(n=>n.replace(kp,(e,t)=>t?t.toUpperCase():"")),zp=/\B([A-Z])/g,w0=cs(n=>n.replace(zp,"-$1").toLowerCase()),Uu=cs(n=>n.charAt(0).toUpperCase()+n.slice(1)),T0=cs(n=>n?`on${Uu(n)}`:""),Fu=(n,e)=>n!==e&&(n===n||e===e),Aa=new WeakMap,or=[],jt,Jn=Symbol("iterate"),Ca=Symbol("Map key iterate");function Vp(n){return n&&n._isEffect===!0}function Hp(n,e=Up){Vp(n)&&(n=n.raw);let t=Xp(n,e);return e.lazy||t(),t}function Gp(n){n.active&&(Ou(n),n.options.onStop&&n.options.onStop(),n.active=!1)}var Wp=0;function Xp(n,e){let t=function(){if(!t.active)return n();if(!or.includes(t)){Ou(t);try{return $p(),or.push(t),jt=t,n()}finally{or.pop(),Bu(),jt=or[or.length-1]}}};return t.id=Wp++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=n,t.deps=[],t.options=e,t}function Ou(n){let{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}var bi=!0,$a=[];function qp(){$a.push(bi),bi=!1}function $p(){$a.push(bi),bi=!0}function Bu(){let n=$a.pop();bi=n===void 0?!0:n}function qt(n,e,t){if(!bi||jt===void 0)return;let i=Aa.get(n);i||Aa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=new Set),r.has(jt)||(r.add(jt),jt.deps.push(r),jt.options.onTrack&&jt.options.onTrack({effect:jt,target:n,type:e,key:t}))}function An(n,e,t,i,r,s){let o=Aa.get(n);if(!o)return;let a=new Set,l=u=>{u&&u.forEach(h=>{(h!==jt||h.allowRecurse)&&a.add(h)})};if(e==="clear")o.forEach(l);else if(t==="length"&&Zn(n))o.forEach((u,h)=>{(h==="length"||h>=i)&&l(u)});else switch(t!==void 0&&l(o.get(t)),e){case"add":Zn(n)?qa(t)&&l(o.get("length")):(l(o.get(Jn)),cr(n)&&l(o.get(Ca)));break;case"delete":Zn(n)||(l(o.get(Jn)),cr(n)&&l(o.get(Ca)));break;case"set":cr(n)&&l(o.get(Jn));break}let c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:n,key:t,type:e,newValue:i,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};a.forEach(c)}var Yp=Lu("__proto__,__v_isRef,__isVue"),ku=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Xa)),Zp=zu(),Jp=zu(!0),Pc=Kp();function Kp(){let n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){let i=Qe(this);for(let s=0,o=this.length;s<o;s++)qt(i,"get",s+"");let r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qp();let i=Qe(this)[e].apply(this,t);return Bu(),i}}),n}function zu(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_raw"&&s===(n?e?fm:Wu:e?dm:Gu).get(i))return i;let o=Zn(i);if(!n&&o&&as(Pc,r))return Reflect.get(Pc,r,s);let a=Reflect.get(i,r,s);return(Xa(r)?ku.has(r):Yp(r))||(n||qt(i,"get",r),e)?a:Ra(a)?!o||!qa(r)?a.value:a:ls(a)?n?Xu(a):Ka(a):a}}var jp=Qp();function Qp(n=!1){return function(t,i,r,s){let o=t[i];if(!n&&(r=Qe(r),o=Qe(o),!Zn(t)&&Ra(o)&&!Ra(r)))return o.value=r,!0;let a=Zn(t)&&qa(i)?Number(i)<t.length:as(t,i),l=Reflect.set(t,i,r,s);return t===Qe(s)&&(a?Fu(r,o)&&An(t,"set",i,r,o):An(t,"add",i,r)),l}}function em(n,e){let t=as(n,e),i=n[e],r=Reflect.deleteProperty(n,e);return r&&t&&An(n,"delete",e,void 0,i),r}function tm(n,e){let t=Reflect.has(n,e);return(!Xa(e)||!ku.has(e))&&qt(n,"has",e),t}function nm(n){return qt(n,"iterate",Zn(n)?"length":Jn),Reflect.ownKeys(n)}var im={get:Zp,set:jp,deleteProperty:em,has:tm,ownKeys:nm},rm={get:Jp,set(n,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,n),!0},deleteProperty(n,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,n),!0}},Ya=n=>ls(n)?Ka(n):n,Za=n=>ls(n)?Xu(n):n,Ja=n=>n,us=n=>Reflect.getPrototypeOf(n);function $r(n,e,t=!1,i=!1){n=n.__v_raw;let r=Qe(n),s=Qe(e);e!==s&&!t&&qt(r,"get",e),!t&&qt(r,"get",s);let{has:o}=us(r),a=i?Ja:t?Za:Ya;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Yr(n,e=!1){let t=this.__v_raw,i=Qe(t),r=Qe(n);return n!==r&&!e&&qt(i,"has",n),!e&&qt(i,"has",r),n===r?t.has(n):t.has(n)||t.has(r)}function Zr(n,e=!1){return n=n.__v_raw,!e&&qt(Qe(n),"iterate",Jn),Reflect.get(n,"size",n)}function Lc(n){n=Qe(n);let e=Qe(this);return us(e).has.call(e,n)||(e.add(n),An(e,"add",n,n)),this}function Dc(n,e){e=Qe(e);let t=Qe(this),{has:i,get:r}=us(t),s=i.call(t,n);s?Hu(t,i,n):(n=Qe(n),s=i.call(t,n));let o=r.call(t,n);return t.set(n,e),s?Fu(e,o)&&An(t,"set",n,e,o):An(t,"add",n,e),this}function Nc(n){let e=Qe(this),{has:t,get:i}=us(e),r=t.call(e,n);r?Hu(e,t,n):(n=Qe(n),r=t.call(e,n));let s=i?i.call(e,n):void 0,o=e.delete(n);return r&&An(e,"delete",n,void 0,s),o}function Uc(){let n=Qe(this),e=n.size!==0,t=cr(n)?new Map(n):new Set(n),i=n.clear();return e&&An(n,"clear",void 0,void 0,t),i}function Jr(n,e){return function(i,r){let s=this,o=s.__v_raw,a=Qe(o),l=e?Ja:n?Za:Ya;return!n&&qt(a,"iterate",Jn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Kr(n,e,t){return function(...i){let r=this.__v_raw,s=Qe(r),o=cr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ja:e?Za:Ya;return!e&&qt(s,"iterate",l?Ca:Jn),{next(){let{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Tn(n){return function(...e){{let t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Uu(n)} operation ${t}failed: target is readonly.`,Qe(this))}return n==="delete"?!1:this}}function sm(){let n={get(s){return $r(this,s)},get size(){return Zr(this)},has:Yr,add:Lc,set:Dc,delete:Nc,clear:Uc,forEach:Jr(!1,!1)},e={get(s){return $r(this,s,!1,!0)},get size(){return Zr(this)},has:Yr,add:Lc,set:Dc,delete:Nc,clear:Uc,forEach:Jr(!1,!0)},t={get(s){return $r(this,s,!0)},get size(){return Zr(this,!0)},has(s){return Yr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Jr(!0,!1)},i={get(s){return $r(this,s,!0,!0)},get size(){return Zr(this,!0)},has(s){return Yr.call(this,s,!0)},add:Tn("add"),set:Tn("set"),delete:Tn("delete"),clear:Tn("clear"),forEach:Jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Kr(s,!1,!1),t[s]=Kr(s,!0,!1),e[s]=Kr(s,!1,!0),i[s]=Kr(s,!0,!0)}),[n,t,e,i]}var[om,am,lm,cm]=sm();function Vu(n,e){let t=e?n?cm:lm:n?am:om;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(as(t,r)&&r in i?t:i,r,s)}var um={get:Vu(!1,!1)},hm={get:Vu(!0,!1)};function Hu(n,e,t){let i=Qe(t);if(i!==t&&e.call(n,i)){let r=Nu(n);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Gu=new WeakMap,dm=new WeakMap,Wu=new WeakMap,fm=new WeakMap;function pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(n){return n.__v_skip||!Object.isExtensible(n)?0:pm(Nu(n))}function Ka(n){return n&&n.__v_isReadonly?n:qu(n,!1,im,um,Gu)}function Xu(n){return qu(n,!0,rm,hm,Wu)}function qu(n,e,t,i,r){if(!ls(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(e&&n.__v_isReactive))return n;let s=r.get(n);if(s)return s;let o=mm(n);if(o===0)return n;let a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Qe(n){return n&&Qe(n.__v_raw)||n}function Ra(n){return!!(n&&n.__v_isRef===!0)}$t("nextTick",()=>Ha);$t("dispatch",n=>lr.bind(lr,n));$t("watch",(n,{evaluateLater:e,cleanup:t})=>(i,r)=>{let s=e(i),a=Vc(()=>{let l;return s(c=>l=c),l},r);t(a)});$t("store",Cp);$t("data",n=>Zc(n));$t("root",n=>rs(n));$t("refs",n=>(n._x_refs_proxy||(n._x_refs_proxy=dr(gm(n))),n._x_refs_proxy));function gm(n){let e=[];return Ei(n,t=>{t._x_refs&&e.push(t._x_refs)}),e}var ha={};function $u(n){return ha[n]||(ha[n]=0),++ha[n]}function _m(n,e){return Ei(n,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function xm(n,e){n._x_ids||(n._x_ids={}),n._x_ids[e]||(n._x_ids[e]=$u(e))}$t("id",(n,{cleanup:e})=>(t,i=null)=>{let r=`${t}${i?`-${i}`:""}`;return vm(n,r,e,()=>{let s=_m(n,t),o=s?s._x_ids[t]:$u(t);return i?`${t}-${o}-${i}`:`${t}-${o}`})});os((n,e)=>{n._x_id&&(e._x_id=n._x_id)});function vm(n,e,t,i){if(n._x_id||(n._x_id={}),n._x_id[e])return n._x_id[e];let r=i();return n._x_id[e]=r,t(()=>{delete n._x_id[e]}),r}$t("el",n=>n);Yu("Focus","focus","focus");Yu("Persist","persist","persist");function Yu(n,e,t){$t(e,i=>kt(`You can't use [$${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}lt("modelable",(n,{expression:e},{effect:t,evaluateLater:i,cleanup:r})=>{let s=i(e),o=()=>{let u;return s(h=>u=h),u},a=i(`${e} = __placeholder`),l=u=>a(()=>{},{scope:{__placeholder:u}}),c=o();l(c),queueMicrotask(()=>{if(!n._x_model)return;n._x_removeModelListeners.default();let u=n._x_model.get,h=n._x_model.set,f=Cu({get(){return u()},set(m){h(m)}},{get(){return o()},set(m){l(m)}});r(f)})});lt("teleport",(n,{modifiers:e,expression:t},{cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&kt("x-teleport can only be used on a <template> tag",n);let r=Fc(t),s=n.content.cloneNode(!0).firstElementChild;n._x_teleport=s,s._x_teleportBack=n,n.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),n._x_forwardEvents&&n._x_forwardEvents.forEach(a=>{s.addEventListener(a,l=>{l.stopPropagation(),n.dispatchEvent(new l.constructor(l.type,l))})}),hr(s,{},n);let o=(a,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(a,l):c.includes("append")?l.parentNode.insertBefore(a,l.nextSibling):l.appendChild(a)};st(()=>{o(s,r,e),Cn(()=>{hn(s)})()}),n._x_teleportPutBack=()=>{let a=Fc(t);st(()=>{o(n._x_teleport,a,e)})},i(()=>st(()=>{s.remove(),Ai(s)}))});var ym=document.createElement("div");function Fc(n){let e=Cn(()=>document.querySelector(n),()=>ym)();return e||kt(`Cannot find x-teleport element for selector: "${n}"`),e}var Zu=()=>{};Zu.inline=(n,{modifiers:e},{cleanup:t})=>{e.includes("self")?n._x_ignoreSelf=!0:n._x_ignore=!0,t(()=>{e.includes("self")?delete n._x_ignoreSelf:delete n._x_ignore})};lt("ignore",Zu);lt("effect",Cn((n,{expression:e},{effect:t})=>{t(wt(n,e))}));function Ia(n,e,t,i){let r=n,s=l=>i(l),o={},a=(l,c)=>u=>c(l,u);if(t.includes("dot")&&(e=Sm(e)),t.includes("camel")&&(e=bm(e)),t.includes("passive")&&(o.passive=!0),t.includes("capture")&&(o.capture=!0),t.includes("window")&&(r=window),t.includes("document")&&(r=document),t.includes("debounce")){let l=t[t.indexOf("debounce")+1]||"invalid-wait",c=is(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Eu(s,c)}if(t.includes("throttle")){let l=t[t.indexOf("throttle")+1]||"invalid-wait",c=is(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Au(s,c)}return t.includes("prevent")&&(s=a(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=a(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("once")&&(s=a(s,(l,c)=>{l(c),r.removeEventListener(e,s,o)})),(t.includes("away")||t.includes("outside"))&&(r=document,s=a(s,(l,c)=>{n.contains(c.target)||c.target.isConnected!==!1&&(n.offsetWidth<1&&n.offsetHeight<1||n._x_isShown!==!1&&l(c))})),t.includes("self")&&(s=a(s,(l,c)=>{c.target===n&&l(c)})),(wm(e)||Ju(e))&&(s=a(s,(l,c)=>{Tm(c,t)||l(c)})),r.addEventListener(e,s,o),()=>{r.removeEventListener(e,s,o)}}function Sm(n){return n.replace(/-/g,".")}function bm(n){return n.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function is(n){return!Array.isArray(n)&&!isNaN(n)}function Mm(n){return[" ","_"].includes(n)?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function wm(n){return["keydown","keyup"].includes(n)}function Ju(n){return["contextmenu","click","mouse"].some(e=>n.includes(e))}function Tm(n,e){let t=e.filter(s=>!["window","document","prevent","stop","once","capture","self","away","outside","passive"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,is((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.includes("throttle")){let s=t.indexOf("throttle");t.splice(s,is((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&Oc(n.key).includes(t[0]))return!1;let r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),n[`${o}Key`])).length===r.length&&(Ju(n.type)||Oc(n.key).includes(t[0])))}function Oc(n){if(!n)return[];n=Mm(n);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return e[n]=n,Object.keys(e).map(t=>{if(e[t]===n)return t}).filter(t=>t)}lt("model",(n,{modifiers:e,expression:t},{effect:i,cleanup:r})=>{let s=n;e.includes("parent")&&(s=n.parentNode);let o=wt(s,t),a;typeof t=="string"?a=wt(s,`${t} = __placeholder`):typeof t=="function"&&typeof t()=="string"?a=wt(s,`${t()} = __placeholder`):a=()=>{};let l=()=>{let f;return o(m=>f=m),Bc(f)?f.get():f},c=f=>{let m;o(_=>m=_),Bc(m)?m.set(f):a(()=>{},{scope:{__placeholder:f}})};typeof t=="string"&&n.type==="radio"&&st(()=>{n.hasAttribute("name")||n.setAttribute("name",t)});var u=n.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(n.type)||e.includes("lazy")?"change":"input";let h=En?()=>{}:Ia(n,u,e,f=>{c(da(n,e,f,l()))});if(e.includes("fill")&&([void 0,null,""].includes(l())||Wa(n)&&Array.isArray(l())||n.tagName.toLowerCase()==="select"&&n.multiple)&&c(da(n,e,{target:n},l())),n._x_removeModelListeners||(n._x_removeModelListeners={}),n._x_removeModelListeners.default=h,r(()=>n._x_removeModelListeners.default()),n.form){let f=Ia(n.form,"reset",[],m=>{Ha(()=>n._x_model&&n._x_model.set(da(n,e,{target:n},l())))});r(()=>f())}n._x_model={get(){return l()},set(f){c(f)}},n._x_forceModelUpdate=f=>{f===void 0&&typeof t=="string"&&t.match(/\./)&&(f=""),window.fromModel=!0,st(()=>Su(n,"value",f)),delete window.fromModel},i(()=>{let f=l();e.includes("unintrusive")&&document.activeElement.isSameNode(n)||n._x_forceModelUpdate(f)})});function da(n,e,t,i){return st(()=>{if(t instanceof CustomEvent&&t.detail!==void 0)return t.detail!==null&&t.detail!==void 0?t.detail:t.target.value;if(Wa(n))if(Array.isArray(i)){let r=null;return e.includes("number")?r=fa(t.target.value):e.includes("boolean")?r=Qr(t.target.value):r=t.target.value,t.target.checked?i.includes(r)?i:i.concat([r]):i.filter(s=>!Em(s,r))}else return t.target.checked;else{if(n.tagName.toLowerCase()==="select"&&n.multiple)return e.includes("number")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return fa(s)}):e.includes("boolean")?Array.from(t.target.selectedOptions).map(r=>{let s=r.value||r.text;return Qr(s)}):Array.from(t.target.selectedOptions).map(r=>r.value||r.text);{let r;return Tu(n)?t.target.checked?r=t.target.value:r=i:r=t.target.value,e.includes("number")?fa(r):e.includes("boolean")?Qr(r):e.includes("trim")?r.trim():r}}})}function fa(n){let e=n?parseFloat(n):null;return Am(e)?e:n}function Em(n,e){return n==e}function Am(n){return!Array.isArray(n)&&!isNaN(n)}function Bc(n){return n!==null&&typeof n=="object"&&typeof n.get=="function"&&typeof n.set=="function"}lt("cloak",n=>queueMicrotask(()=>st(()=>n.removeAttribute(Ti("cloak")))));mu(()=>`[${Ti("init")}]`);lt("init",Cn((n,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));lt("text",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{st(()=>{n.textContent=s})})})});lt("html",(n,{expression:e},{effect:t,evaluateLater:i})=>{let r=i(e);t(()=>{r(s=>{st(()=>{n.innerHTML=s,n._x_ignoreSelf=!0,hn(n),delete n._x_ignoreSelf})})})});ka(su(":",ou(Ti("bind:"))));var Ku=(n,{value:e,modifiers:t,expression:i,original:r},{effect:s,cleanup:o})=>{if(!e){let l={};Ip(l),wt(n,i)(u=>{Iu(n,u,r)},{scope:l});return}if(e==="key")return Cm(n,i);if(n._x_inlineBindings&&n._x_inlineBindings[e]&&n._x_inlineBindings[e].extract)return;let a=wt(n,i);s(()=>a(l=>{l===void 0&&typeof i=="string"&&i.match(/\./)&&(l=""),st(()=>Su(n,e,l,t))})),o(()=>{n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedStyles&&n._x_undoAddedStyles()})};Ku.inline=(n,{value:e,modifiers:t,expression:i})=>{e&&(n._x_inlineBindings||(n._x_inlineBindings={}),n._x_inlineBindings[e]={expression:i,extract:!1})};lt("bind",Ku);function Cm(n,e){n._x_keyExpression=e}pu(()=>`[${Ti("data")}]`);lt("data",(n,{expression:e},{cleanup:t})=>{if(Rm(n))return;e=e===""?"{}":e;let i={};va(i,n);let r={};Lp(r,i);let s=Yn(n,e,{scope:r});(s===void 0||s===!0)&&(s={}),va(s,n);let o=Mi(s);Jc(o);let a=hr(n,o);o.init&&Yn(n,o.init),t(()=>{o.destroy&&Yn(n,o.destroy),a()})});os((n,e)=>{n._x_dataStack&&(e._x_dataStack=n._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function Rm(n){return En?Ea?!0:n.hasAttribute("data-has-alpine-state"):!1}lt("show",(n,{modifiers:e,expression:t},{effect:i})=>{let r=wt(n,t);n._x_doHide||(n._x_doHide=()=>{st(()=>{n.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),n._x_doShow||(n._x_doShow=()=>{st(()=>{n.style.length===1&&n.style.display==="none"?n.removeAttribute("style"):n.style.removeProperty("display")})});let s=()=>{n._x_doHide(),n._x_isShown=!1},o=()=>{n._x_doShow(),n._x_isShown=!0},a=()=>setTimeout(o),l=wa(h=>h?o():s(),h=>{typeof n._x_toggleAndCascadeWithTransitions=="function"?n._x_toggleAndCascadeWithTransitions(n,h,o,s):h?a():s()}),c,u=!0;i(()=>r(h=>{!u&&h===c||(e.includes("immediate")&&(h?a():s()),l(h),c=h,u=!1)}))});lt("for",(n,{expression:e},{effect:t,cleanup:i})=>{let r=Pm(e),s=wt(n,r.items),o=wt(n,n._x_keyExpression||"index");n._x_prevKeys=[],n._x_lookup={},t(()=>Im(n,r,s,o)),i(()=>{Object.values(n._x_lookup).forEach(a=>st(()=>{Ai(a),a.remove()})),delete n._x_prevKeys,delete n._x_lookup})});function Im(n,e,t,i){let r=o=>typeof o=="object"&&!Array.isArray(o),s=n;t(o=>{Lm(o)&&o>=0&&(o=Array.from(Array(o).keys(),p=>p+1)),o===void 0&&(o=[]);let a=n._x_lookup,l=n._x_prevKeys,c=[],u=[];if(r(o))o=Object.entries(o).map(([p,d])=>{let A=kc(e,d,p,o);i(T=>{u.includes(T)&&kt("Duplicate key on x-for",n),u.push(T)},{scope:{index:p,...A}}),c.push(A)});else for(let p=0;p<o.length;p++){let d=kc(e,o[p],p,o);i(A=>{u.includes(A)&&kt("Duplicate key on x-for",n),u.push(A)},{scope:{index:p,...d}}),c.push(d)}let h=[],f=[],m=[],_=[];for(let p=0;p<l.length;p++){let d=l[p];u.indexOf(d)===-1&&m.push(d)}l=l.filter(p=>!m.includes(p));let y="template";for(let p=0;p<u.length;p++){let d=u[p],A=l.indexOf(d);if(A===-1)l.splice(p,0,d),h.push([y,p]);else if(A!==p){let T=l.splice(p,1)[0],b=l.splice(A-1,1)[0];l.splice(p,0,b),l.splice(A,0,T),f.push([T,b])}else _.push(d);y=d}for(let p=0;p<m.length;p++){let d=m[p];d in a&&(st(()=>{Ai(a[d]),a[d].remove()}),delete a[d])}for(let p=0;p<f.length;p++){let[d,A]=f[p],T=a[d],b=a[A],I=document.createElement("div");st(()=>{b||kt('x-for ":key" is undefined or invalid',s,A,a),b.after(I),T.after(b),b._x_currentIfEl&&b.after(b._x_currentIfEl),I.before(T),T._x_currentIfEl&&T.after(T._x_currentIfEl),I.remove()}),b._x_refreshXForScope(c[u.indexOf(A)])}for(let p=0;p<h.length;p++){let[d,A]=h[p],T=d==="template"?s:a[d];T._x_currentIfEl&&(T=T._x_currentIfEl);let b=c[A],I=u[A],M=document.importNode(s.content,!0).firstElementChild,w=Mi(b);hr(M,w,s),M._x_refreshXForScope=L=>{Object.entries(L).forEach(([S,v])=>{w[S]=v})},st(()=>{T.after(M),Cn(()=>hn(M))()}),typeof I=="object"&&kt("x-for key cannot be an object, it must be a string or an integer",s),a[I]=M}for(let p=0;p<_.length;p++)a[_[p]]._x_refreshXForScope(c[u.indexOf(_[p])]);s._x_prevKeys=u})}function Pm(n){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=n.match(i);if(!r)return;let s={};s.items=r[2].trim();let o=r[1].replace(t,"").trim(),a=o.match(e);return a?(s.item=o.replace(e,"").trim(),s.index=a[1].trim(),a[2]&&(s.collection=a[2].trim())):s.item=o,s}function kc(n,e,t,i){let r={};return/^\[.*\]$/.test(n.item)&&Array.isArray(e)?n.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,a)=>{r[o]=e[a]}):/^\{.*\}$/.test(n.item)&&!Array.isArray(e)&&typeof e=="object"?n.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{r[o]=e[o]}):r[n.item]=e,n.index&&(r[n.index]=t),n.collection&&(r[n.collection]=i),r}function Lm(n){return!Array.isArray(n)&&!isNaN(n)}function ju(){}ju.inline=(n,{expression:e},{cleanup:t})=>{let i=rs(n);i._x_refs||(i._x_refs={}),i._x_refs[e]=n,t(()=>delete i._x_refs[e])};lt("ref",ju);lt("if",(n,{expression:e},{effect:t,cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&kt("x-if can only be used on a <template> tag",n);let r=wt(n,e),s=()=>{if(n._x_currentIfEl)return n._x_currentIfEl;let a=n.content.cloneNode(!0).firstElementChild;return hr(a,{},n),st(()=>{n.after(a),Cn(()=>hn(a))()}),n._x_currentIfEl=a,n._x_undoIf=()=>{st(()=>{Ai(a),a.remove()}),delete n._x_currentIfEl},a},o=()=>{n._x_undoIf&&(n._x_undoIf(),delete n._x_undoIf)};t(()=>r(a=>{a?s():o()})),i(()=>n._x_undoIf&&n._x_undoIf())});lt("id",(n,{expression:e},{evaluate:t})=>{t(e).forEach(r=>xm(n,r))});os((n,e)=>{n._x_ids&&(e._x_ids=n._x_ids)});ka(su("@",ou(Ti("on:"))));lt("on",Cn((n,{value:e,modifiers:t,expression:i},{cleanup:r})=>{let s=i?wt(n,i):()=>{};n.tagName.toLowerCase()==="template"&&(n._x_forwardEvents||(n._x_forwardEvents=[]),n._x_forwardEvents.includes(e)||n._x_forwardEvents.push(e));let o=Ia(n,e,t,a=>{s(()=>{},{scope:{$event:a},params:[a]})});r(()=>o())}));hs("Collapse","collapse","collapse");hs("Intersect","intersect","intersect");hs("Focus","trap","focus");hs("Mask","mask","mask");function hs(n,e,t){lt(e,i=>kt(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}fr.setEvaluator(tu);fr.setReactivityEngine({reactive:Ka,effect:Hp,release:Gp,raw:Qe});var Dm=fr,Rn=Dm;function Nm(n){n.directive("intersect",n.skipDuringClone((e,{value:t,expression:i,modifiers:r},{evaluateLater:s,cleanup:o})=>{let a=s(i),l={rootMargin:Om(r),threshold:Um(r)},c=new IntersectionObserver(u=>{u.forEach(h=>{h.isIntersecting!==(t==="leave")&&(a(),r.includes("once")&&c.disconnect())})},l);c.observe(e),o(()=>{c.disconnect()})}))}function Um(n){if(n.includes("full"))return .99;if(n.includes("half"))return .5;if(!n.includes("threshold"))return 0;let e=n[n.indexOf("threshold")+1];return e==="100"?1:e==="0"?0:+`.${e}`}function Fm(n){let e=n.match(/^(-?[0-9]+)(px|%)?$/);return e?e[1]+(e[2]||"px"):void 0}function Om(n){let e="margin",t="0px 0px 0px 0px",i=n.indexOf(e);if(i===-1)return t;let r=[];for(let s=1;s<5;s++)r.push(Fm(n[i+s]||""));return r=r.filter(s=>s!==void 0),r.length?r.join(" ").trim():t}var Qu=Nm;function Bm(n){n.directive("resize",n.skipDuringClone((e,{value:t,expression:i,modifiers:r},{evaluateLater:s,cleanup:o})=>{let a=s(i),l=(u,h)=>{a(()=>{},{scope:{$width:u,$height:h}})},c=r.includes("document")?zm(l):km(e,l);o(()=>c())}))}function km(n,e){let t=new ResizeObserver(i=>{let[r,s]=eh(i);e(r,s)});return t.observe(n),()=>t.disconnect()}var ja,Qa=new Set;function zm(n){return Qa.add(n),ja||(ja=new ResizeObserver(e=>{let[t,i]=eh(e);Qa.forEach(r=>r(t,i))}),ja.observe(document.documentElement)),()=>{Qa.delete(n)}}function eh(n){let e,t;for(let i of n)e=i.borderBoxSize[0].inlineSize,t=i.borderBoxSize[0].blockSize;return[e,t]}var th=Bm;function Vm(n){let e=()=>{let t,i;try{i=localStorage}catch(r){console.error(r),console.warn("Alpine: $persist is using temporary storage since localStorage is unavailable.");let s=new Map;i={getItem:s.get.bind(s),setItem:s.set.bind(s)}}return n.interceptor((r,s,o,a,l)=>{let c=t||`_x_${a}`,u=nh(c,i)?ih(c,i):r;return o(u),n.effect(()=>{let h=s();rh(c,h,i),o(h)}),u},r=>{r.as=s=>(t=s,r),r.using=s=>(i=s,r)})};Object.defineProperty(n,"$persist",{get:()=>e()}),n.magic("persist",e),n.persist=(t,{get:i,set:r},s=localStorage)=>{let o=nh(t,s)?ih(t,s):i();r(o),n.effect(()=>{let a=i();rh(t,a,s),r(a)})}}function nh(n,e){return e.getItem(n)!==null}function ih(n,e){let t=e.getItem(n,e);if(t!==void 0)return JSON.parse(t)}function rh(n,e,t){t.setItem(n,JSON.stringify(e))}var sh=Vm;var fh=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],ms=fh.join(","),ph=typeof Element>"u",Qn=ph?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,el=!ph&&Element.prototype.getRootNode?function(n){return n.getRootNode()}:function(n){return n.ownerDocument},mh=function(e,t,i){var r=Array.prototype.slice.apply(e.querySelectorAll(ms));return t&&Qn.call(e,ms)&&r.unshift(e),r=r.filter(i),r},gh=function n(e,t,i){for(var r=[],s=Array.from(e);s.length;){var o=s.shift();if(o.tagName==="SLOT"){var a=o.assignedElements(),l=a.length?a:o.children,c=n(l,!0,i);i.flatten?r.push.apply(r,c):r.push({scope:o,candidates:c})}else{var u=Qn.call(o,ms);u&&i.filter(o)&&(t||!e.includes(o))&&r.push(o);var h=o.shadowRoot||typeof i.getShadowRoot=="function"&&i.getShadowRoot(o),f=!i.shadowRootFilter||i.shadowRootFilter(o);if(h&&f){var m=n(h===!0?o.children:h.children,!0,i);i.flatten?r.push.apply(r,m):r.push({scope:o,candidates:m})}else s.unshift.apply(s,o.children)}}return r},_h=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Hm=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},xh=function(e){return e.tagName==="INPUT"},Gm=function(e){return xh(e)&&e.type==="hidden"},Wm=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return t},Xm=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]},qm=function(e){if(!e.name)return!0;var t=e.form||el(e),i=function(a){return t.querySelectorAll('input[type="radio"][name="'+a+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(e.name));else try{r=i(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var s=Xm(r,e.form);return!s||s===e},$m=function(e){return xh(e)&&e.type==="radio"},Ym=function(e){return $m(e)&&!qm(e)},oh=function(e){var t=e.getBoundingClientRect(),i=t.width,r=t.height;return i===0&&r===0},Zm=function(e,t){var i=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=Qn.call(e,"details>summary:first-of-type"),o=s?e.parentElement:e;if(Qn.call(o,"details:not([open]) *"))return!0;var a=el(e).host,l=a?.ownerDocument.contains(a)||e.ownerDocument.contains(e);if(!i||i==="full"){if(typeof r=="function"){for(var c=e;e;){var u=e.parentElement,h=el(e);if(u&&!u.shadowRoot&&r(u)===!0)return oh(e);e.assignedSlot?e=e.assignedSlot:!u&&h!==e.ownerDocument?e=h.host:e=u}e=c}if(l)return!e.getClientRects().length}else if(i==="non-zero-area")return oh(e);return!1},Jm=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var i=0;i<t.children.length;i++){var r=t.children.item(i);if(r.tagName==="LEGEND")return Qn.call(t,"fieldset[disabled] *")?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},gs=function(e,t){return!(t.disabled||Gm(t)||Zm(t,e)||Wm(t)||Jm(t))},tl=function(e,t){return!(Ym(t)||_h(t)<0||!gs(e,t))},Km=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},jm=function n(e){var t=[],i=[];return e.forEach(function(r,s){var o=!!r.scope,a=o?r.scope:r,l=_h(a,o),c=o?n(r.candidates):a;l===0?o?t.push.apply(t,c):t.push(a):i.push({documentOrder:s,tabIndex:l,item:r,isScope:o,content:c})}),i.sort(Hm).reduce(function(r,s){return s.isScope?r.push.apply(r,s.content):r.push(s.content),r},[]).concat(t)},Qm=function(e,t){t=t||{};var i;return t.getShadowRoot?i=gh([e],t.includeContainer,{filter:tl.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Km}):i=mh(e,t.includeContainer,tl.bind(null,t)),jm(i)},vh=function(e,t){t=t||{};var i;return t.getShadowRoot?i=gh([e],t.includeContainer,{filter:gs.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i=mh(e,t.includeContainer,gs.bind(null,t)),i},ds=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Qn.call(e,ms)===!1?!1:tl(t,e)},eg=fh.concat("iframe").join(","),ps=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Qn.call(e,eg)===!1?!1:gs(t,e)};function ah(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function lh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ah(Object(t),!0).forEach(function(i){tg(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ah(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function tg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ch=function(){var n=[];return{activateTrap:function(t){if(n.length>0){var i=n[n.length-1];i!==t&&i.pause()}var r=n.indexOf(t);r===-1||n.splice(r,1),n.push(t)},deactivateTrap:function(t){var i=n.indexOf(t);i!==-1&&n.splice(i,1),n.length>0&&n[n.length-1].unpause()}}}(),ng=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ig=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},rg=function(e){return e.key==="Tab"||e.keyCode===9},uh=function(e){return setTimeout(e,0)},hh=function(e,t){var i=-1;return e.every(function(r,s){return t(r)?(i=s,!1):!0}),i},pr=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,i):e},fs=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},sg=function(e,t){var i=t?.document||document,r=lh({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o,a=function(M,w,L){return M&&M[w]!==void 0?M[w]:r[L||w]},l=function(M){return s.containerGroups.findIndex(function(w){var L=w.container,S=w.tabbableNodes;return L.contains(M)||S.find(function(v){return v===M})})},c=function(M){var w=r[M];if(typeof w=="function"){for(var L=arguments.length,S=new Array(L>1?L-1:0),v=1;v<L;v++)S[v-1]=arguments[v];w=w.apply(void 0,S)}if(w===!0&&(w=void 0),!w){if(w===void 0||w===!1)return w;throw new Error("`".concat(M,"` was specified but was not a node, or did not return a node"))}var R=w;if(typeof w=="string"&&(R=i.querySelector(w),!R))throw new Error("`".concat(M,"` as selector refers to no known node"));return R},u=function(){var M=c("initialFocus");if(M===!1)return!1;if(M===void 0)if(l(i.activeElement)>=0)M=i.activeElement;else{var w=s.tabbableGroups[0],L=w&&w.firstTabbableNode;M=L||c("fallbackFocus")}if(!M)throw new Error("Your focus-trap needs to have at least one focusable element");return M},h=function(){if(s.containerGroups=s.containers.map(function(M){var w=Qm(M,r.tabbableOptions),L=vh(M,r.tabbableOptions);return{container:M,tabbableNodes:w,focusableNodes:L,firstTabbableNode:w.length>0?w[0]:null,lastTabbableNode:w.length>0?w[w.length-1]:null,nextTabbableNode:function(v){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,H=L.findIndex(function(k){return k===v});if(!(H<0))return R?L.slice(H+1).find(function(k){return ds(k,r.tabbableOptions)}):L.slice(0,H).reverse().find(function(k){return ds(k,r.tabbableOptions)})}}}),s.tabbableGroups=s.containerGroups.filter(function(M){return M.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=function I(M){if(M!==!1&&M!==i.activeElement){if(!M||!M.focus){I(u());return}M.focus({preventScroll:!!r.preventScroll}),s.mostRecentlyFocusedNode=M,ng(M)&&M.select()}},m=function(M){var w=c("setReturnFocus",M);return w||(w===!1?!1:M)},_=function(M){var w=fs(M);if(!(l(w)>=0)){if(pr(r.clickOutsideDeactivates,M)){o.deactivate({returnFocus:r.returnFocusOnDeactivate&&!ps(w,r.tabbableOptions)});return}pr(r.allowOutsideClick,M)||M.preventDefault()}},y=function(M){var w=fs(M),L=l(w)>=0;L||w instanceof Document?L&&(s.mostRecentlyFocusedNode=w):(M.stopImmediatePropagation(),f(s.mostRecentlyFocusedNode||u()))},p=function(M){var w=fs(M);h();var L=null;if(s.tabbableGroups.length>0){var S=l(w),v=S>=0?s.containerGroups[S]:void 0;if(S<0)M.shiftKey?L=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:L=s.tabbableGroups[0].firstTabbableNode;else if(M.shiftKey){var R=hh(s.tabbableGroups,function(ee){var z=ee.firstTabbableNode;return w===z});if(R<0&&(v.container===w||ps(w,r.tabbableOptions)&&!ds(w,r.tabbableOptions)&&!v.nextTabbableNode(w,!1))&&(R=S),R>=0){var H=R===0?s.tabbableGroups.length-1:R-1,k=s.tabbableGroups[H];L=k.lastTabbableNode}}else{var G=hh(s.tabbableGroups,function(ee){var z=ee.lastTabbableNode;return w===z});if(G<0&&(v.container===w||ps(w,r.tabbableOptions)&&!ds(w,r.tabbableOptions)&&!v.nextTabbableNode(w))&&(G=S),G>=0){var J=G===s.tabbableGroups.length-1?0:G+1,W=s.tabbableGroups[J];L=W.firstTabbableNode}}}else L=c("fallbackFocus");L&&(M.preventDefault(),f(L))},d=function(M){if(ig(M)&&pr(r.escapeDeactivates,M)!==!1){M.preventDefault(),o.deactivate();return}if(rg(M)){p(M);return}},A=function(M){var w=fs(M);l(w)>=0||pr(r.clickOutsideDeactivates,M)||pr(r.allowOutsideClick,M)||(M.preventDefault(),M.stopImmediatePropagation())},T=function(){if(s.active)return ch.activateTrap(o),s.delayInitialFocusTimer=r.delayInitialFocus?uh(function(){f(u())}):f(u()),i.addEventListener("focusin",y,!0),i.addEventListener("mousedown",_,{capture:!0,passive:!1}),i.addEventListener("touchstart",_,{capture:!0,passive:!1}),i.addEventListener("click",A,{capture:!0,passive:!1}),i.addEventListener("keydown",d,{capture:!0,passive:!1}),o},b=function(){if(s.active)return i.removeEventListener("focusin",y,!0),i.removeEventListener("mousedown",_,!0),i.removeEventListener("touchstart",_,!0),i.removeEventListener("click",A,!0),i.removeEventListener("keydown",d,!0),o};return o={get active(){return s.active},get paused(){return s.paused},activate:function(M){if(s.active)return this;var w=a(M,"onActivate"),L=a(M,"onPostActivate"),S=a(M,"checkCanFocusTrap");S||h(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=i.activeElement,w&&w();var v=function(){S&&h(),T(),L&&L()};return S?(S(s.containers.concat()).then(v,v),this):(v(),this)},deactivate:function(M){if(!s.active)return this;var w=lh({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},M);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,b(),s.active=!1,s.paused=!1,ch.deactivateTrap(o);var L=a(w,"onDeactivate"),S=a(w,"onPostDeactivate"),v=a(w,"checkCanReturnFocus"),R=a(w,"returnFocus","returnFocusOnDeactivate");L&&L();var H=function(){uh(function(){R&&f(m(s.nodeFocusedBeforeActivation)),S&&S()})};return R&&v?(v(m(s.nodeFocusedBeforeActivation)).then(H,H),this):(H(),this)},pause:function(){return s.paused||!s.active?this:(s.paused=!0,b(),this)},unpause:function(){return!s.paused||!s.active?this:(s.paused=!1,h(),T(),this)},updateContainerElements:function(M){var w=[].concat(M).filter(Boolean);return s.containers=w.map(function(L){return typeof L=="string"?i.querySelector(L):L}),s.active&&h(),this}},o.updateContainerElements(e),o};function og(n){let e,t;window.addEventListener("focusin",()=>{e=t,t=document.activeElement}),n.magic("focus",i=>{let r=i;return{__noscroll:!1,__wrapAround:!1,within(s){return r=s,this},withoutScrolling(){return this.__noscroll=!0,this},noscroll(){return this.__noscroll=!0,this},withWrapAround(){return this.__wrapAround=!0,this},wrap(){return this.withWrapAround()},focusable(s){return ps(s)},previouslyFocused(){return e},lastFocused(){return e},focused(){return t},focusables(){return Array.isArray(r)?r:vh(r,{displayCheck:"none"})},all(){return this.focusables()},isFirst(s){let o=this.all();return o[0]&&o[0].isSameNode(s)},isLast(s){let o=this.all();return o.length&&o.slice(-1)[0].isSameNode(s)},getFirst(){return this.all()[0]},getLast(){return this.all().slice(-1)[0]},getNext(){let s=this.all(),o=document.activeElement;if(s.indexOf(o)!==-1)return this.__wrapAround&&s.indexOf(o)===s.length-1?s[0]:s[s.indexOf(o)+1]},getPrevious(){let s=this.all(),o=document.activeElement;if(s.indexOf(o)!==-1)return this.__wrapAround&&s.indexOf(o)===0?s.slice(-1)[0]:s[s.indexOf(o)-1]},first(){this.focus(this.getFirst())},last(){this.focus(this.getLast())},next(){this.focus(this.getNext())},previous(){this.focus(this.getPrevious())},prev(){return this.previous()},focus(s){s&&setTimeout(()=>{s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),s.focus({preventScroll:this.__noscroll})})}}}),n.directive("trap",n.skipDuringClone((i,{expression:r,modifiers:s},{effect:o,evaluateLater:a,cleanup:l})=>{let c=a(r),u=!1,h={escapeDeactivates:!1,allowOutsideClick:!0,fallbackFocus:()=>i};if(s.includes("noautofocus"))h.initialFocus=!1;else{let p=i.querySelector("[autofocus]");p&&(h.initialFocus=p)}let f=sg(i,h),m=()=>{},_=()=>{},y=()=>{m(),m=()=>{},_(),_=()=>{},f.deactivate({returnFocus:!s.includes("noreturn")})};o(()=>c(p=>{u!==p&&(p&&!u&&(s.includes("noscroll")&&(_=ag()),s.includes("inert")&&(m=dh(i)),setTimeout(()=>{f.activate()},15)),!p&&u&&y(),u=!!p)})),l(y)},(i,{expression:r,modifiers:s},{evaluate:o})=>{s.includes("inert")&&o(r)&&dh(i)}))}function dh(n){let e=[];return yh(n,t=>{let i=t.hasAttribute("aria-hidden");t.setAttribute("aria-hidden","true"),e.push(()=>i||t.removeAttribute("aria-hidden"))}),()=>{for(;e.length;)e.pop()()}}function yh(n,e){n.isSameNode(document.body)||!n.parentNode||Array.from(n.parentNode.children).forEach(t=>{t.isSameNode(n)?yh(n.parentNode,e):e(t)})}function ag(){let n=document.documentElement.style.overflow,e=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${t}px`,()=>{document.documentElement.style.overflow=n,document.documentElement.style.paddingRight=e}}var Sh=og;function lg(n){n.directive("collapse",e),e.inline=(t,{modifiers:i})=>{i.includes("min")&&(t._x_doShow=()=>{},t._x_doHide=()=>{})};function e(t,{modifiers:i}){let r=bh(i,"duration",250)/1e3,s=bh(i,"min",0),o=!i.includes("min");t._x_isShown||(t.style.height=`${s}px`),!t._x_isShown&&o&&(t.hidden=!0),t._x_isShown||(t.style.overflow="hidden");let a=(c,u)=>{let h=n.setStyles(c,u);return u.height?()=>{}:h},l={transitionProperty:"height",transitionDuration:`${r}s`,transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"};t._x_transition={in(c=()=>{},u=()=>{}){o&&(t.hidden=!1),o&&(t.style.display=null);let h=t.getBoundingClientRect().height;t.style.height="auto";let f=t.getBoundingClientRect().height;h===f&&(h=s),n.transition(t,n.setStyles,{during:l,start:{height:h+"px"},end:{height:f+"px"}},()=>t._x_isShown=!0,()=>{Math.abs(t.getBoundingClientRect().height-f)<1&&(t.style.overflow=null)})},out(c=()=>{},u=()=>{}){let h=t.getBoundingClientRect().height;n.transition(t,a,{during:l,start:{height:h+"px"},end:{height:s+"px"}},()=>t.style.overflow="hidden",()=>{t._x_isShown=!1,t.style.height==`${s}px`&&o&&(t.style.display="none",t.hidden=!0)})}}}}function bh(n,e,t){if(n.indexOf(e)===-1)return t;let i=n[n.indexOf(e)+1];if(!i)return t;if(e==="duration"){let r=i.match(/([0-9]+)ms/);if(r)return r[1]}if(e==="min"){let r=i.match(/([0-9]+)px/);if(r)return r[1]}return i}var Mh=lg;Rn.plugin(Qu);Rn.plugin(th);Rn.plugin(sh);Rn.plugin(Sh);Rn.plugin(Mh);window.Alpine=Rn;var Pt=Rn;var wh=()=>({isCollapsed:!1,isMobileOpen:!1,isMobile:!1,mobileBreakpoint:768,storageKey:"sidebarCollapsed",init(){this.updateMobileState(),this.syncWithCurrentState(),window.addEventListener("resize",()=>{this.handleResize()}),this.setupMobileContentClose(),this.syncWithStore(),this.$nextTick(()=>{setTimeout(()=>{this.markAlpineReadyAndCleanup()},100)}),console.log("\u{1F3A8} Alpine.js enhancement complete")},markAlpineReadyAndCleanup(){let n=document.documentElement;n.classList.add("alpine-ready"),n.classList.remove("should-be-collapsed"),n.classList.remove("transitions-disabled"),setTimeout(()=>{n.style.setProperty("--sidebar-active-transition-speed","var(--sidebar-transition-speed)"),console.log("\u{1F3A8} Alpine.js marked ready, all anti-flicker removed, transitions enabled")},10)},syncWithCurrentState(){let n=localStorage.getItem(this.storageKey);this.isCollapsed=n==="true",this.isMobile&&(this.isCollapsed=!1,document.body.classList.remove("sidebar-collapsed"),this.$el&&this.$el.classList.remove("collapsed")),console.log(`\u{1F3A8} Alpine.js synced with state: ${this.isCollapsed?"collapsed":"expanded"}`)},syncWithStore(){this.$store.sidebar.isCollapsed=this.isCollapsed,this.$store.sidebar.isMobile=this.isMobile,this.$watch("isCollapsed",n=>{this.$store.sidebar.isCollapsed=n}),this.$watch("isMobile",n=>{this.$store.sidebar.isMobile=n}),this.$watch("$store.sidebar.isMobileOpen",n=>{this.isMobileOpen=n})},toggleDesktop(){this.isCollapsed=!this.isCollapsed,this.saveState()},toggleMobile(){this.$store.sidebar.toggleMobile()},closeMobile(){this.$store.sidebar.closeMobile()},saveState(){localStorage.setItem(this.storageKey,this.isCollapsed.toString())},updateMobileState(){this.isMobile=window.innerWidth<=this.mobileBreakpoint},handleResize(){let n=this.isMobile;if(this.updateMobileState(),this.isMobile)this.isCollapsed=!1,this.$store.sidebar.isMobileOpen&&this.$store.sidebar.closeMobile();else if(n&&!this.isMobile){let e=localStorage.getItem(this.storageKey);this.isCollapsed=e==="true"}},setupMobileContentClose(){document.addEventListener("click",n=>{if(this.isMobile&&this.$store.sidebar.isMobileOpen){let e=this.$refs.sidebar,t=document.querySelector(".mobile-menu-toggle");e&&!e.contains(n.target)&&t&&!t.contains(n.target)&&this.$store.sidebar.closeMobile()}})},get sidebarClasses(){return{collapsed:this.isCollapsed&&!this.isMobile,open:this.$store.sidebar.isMobileOpen&&this.isMobile}},get bodyClasses(){return{"sidebar-collapsed":this.isCollapsed&&!this.isMobile}},get mobileAriaExpanded(){return this.isMobileOpen.toString()}});var Th=n=>({currentLang:n,storageKey:"languagePreference",init(){},selectLanguage(e,t){e!==this.currentLang&&this.storeLanguagePreference(e)},storeLanguagePreference(e){try{localStorage.setItem(this.storageKey,e),this.$store.language&&(this.$store.language.current=e)}catch(t){console.warn("\u26A0\uFE0F Could not store language preference:",t)}},getStoredLanguagePreference(){try{return localStorage.getItem(this.storageKey)}catch(e){return console.warn("\u26A0\uFE0F Could not read language preference:",e),null}}});var Eh=(n,e)=>({currentLang:n,currentPath:e,availableLanguages:window.SITE_LANGUAGES,storageKey:"languagePreference",ignorePrefLangParam:"ignorePrefLang",hasRedirected:!1,init(){this.$nextTick(()=>{this.checkAndRedirect()})},checkAndRedirect(){if(this.hasRedirected||this.shouldIgnorePreference())return;let t=this.getStoredLanguagePreference();if(!(!t||t===this.currentLang)){if(!this.availableLanguages.includes(t)){console.warn(`\u26A0\uFE0F Preferred language '${t}' not available`);return}this.redirectToPreferredLanguage(t)}},shouldIgnorePreference(){return new URLSearchParams(window.location.search).has(this.ignorePrefLangParam)},getStoredLanguagePreference(){try{return localStorage.getItem(this.storageKey)}catch(t){return console.warn("\u26A0\uFE0F Could not read language preference:",t),null}},getTargetLanguagePath(t){let i=this.currentPath;if(this.currentLang!=="en"){let r=`/${this.currentLang}/`;i.startsWith(r)&&(i=i.substring(r.length-1))}return i.startsWith("/")||(i="/"+i),t==="en"?i:`/${t}${i}`},redirectToPreferredLanguage(t){let i=this.getTargetLanguagePath(t),r=new URLSearchParams(window.location.search),s=i,o=urlToString(r);o&&(s+="?"+o),this.hasRedirected=!0,window.location.replace(s)}});var Ah=()=>({currentTheme:null,availableThemes:[],defaultTheme:null,isLoading:!1,isInitialized:!1,loadedThemeScripts:new Set,currentThemeComponents:new Set,storageKey:"selectedTheme",defaultCSS:"/css/default.css",baseCSS:"/css/base.css",fontAwesome:"/css/fontawesome.min.css",currentMode:"default",init(){if(console.log("\u{1F3A8} Initializing enhanced theme system with centralized paths..."),this.loadThemesFromDataAttributes(),!this.defaultTheme){console.error("\u274C No default theme found in data attributes");return}let n=this.getStoredTheme();this.currentTheme=n||this.defaultTheme,this.$watch("currentTheme",r=>{this.onThemeChange(r)});let e=document.getElementById("base-css"),t=document.getElementById("theme-css"),i=document.getElementById("default-css");console.log(`\u{1F50D} CSS state check: base=${!!e}, theme=${!!t}, default=${!!i}`),this.currentTheme!==this.defaultTheme?e&&t&&!i?(console.log(`\u2705 Early theme application successful for: ${this.currentTheme}`),this.currentMode="split"):(console.log(`\u{1F504} Early theme application incomplete, applying now: ${this.currentTheme}`),this.$nextTick(()=>{this.switchTheme(this.currentTheme)})):(console.log(`\u{1F3A8} Using default theme: ${this.defaultTheme}`),i?this.currentMode="default":(console.log("\u{1F504} Restoring default.css"),this.switchToDefaultMode())),this.$nextTick(()=>{this.loadThemeJavaScript(this.currentTheme).then(()=>{this.isInitialized=!0})}),console.log(`\u{1F3A8} Theme system initialized. Current: ${this.currentTheme}, Mode: ${this.currentMode}`)},loadThemesFromDataAttributes(){try{let n=this.$el.dataset.themes,e=this.$el.dataset.defaultTheme;n&&(this.availableThemes=JSON.parse(n),console.log("\u{1F3A8} Loaded themes from data attributes:",this.availableThemes)),e&&(this.defaultTheme=e,console.log("\u{1F3A8} Default theme from data attributes:",this.defaultTheme))}catch(n){console.error("\u274C Error parsing themes data from attributes:",n),this.availableThemes=[]}},async switchTheme(n){if(this.isLoading||n===this.currentTheme){console.log(`\u{1F3A8} Skipping theme switch: ${n} (loading: ${this.isLoading}, current: ${this.currentTheme})`);return}console.log(`\u{1F3A8} Switching theme from ${this.currentTheme} to ${n}`),this.isLoading=!0;try{await this.cleanupThemeJavaScript(this.currentTheme),n===this.defaultTheme?await this.switchToDefaultMode():await this.switchToSplitMode(n),await this.loadThemeJavaScript(n),this.currentTheme=n,this.storeTheme(n),this.announceThemeChange(n),console.log(`\u2705 Successfully switched to theme: ${n}`)}catch(e){if(console.error("\u274C Failed to switch theme:",e),this.announceError("Failed to switch theme"),n!==this.defaultTheme){console.log("\u{1F504} Attempting recovery to default theme...");try{await this.cleanupThemeJavaScript(n),await this.switchToDefaultMode(),await this.loadThemeJavaScript(this.defaultTheme),this.currentTheme=this.defaultTheme,this.storeTheme(this.defaultTheme),console.log("\u2705 Recovery to default successful")}catch(t){console.error("\u274C Recovery failed:",t)}}}finally{this.isLoading=!1,this.isInitialized=!0}},async loadThemeJavaScript(n){let e=this.getThemeById(n);if(!e||!e.hasJavaScript){console.log(`\u{1F3A8} Theme ${n} has no JavaScript, skipping JS loading`);return}let t=`theme-script-${n}`;if(this.loadedThemeScripts.has(n)){console.log(`\u{1F9E9} Theme ${n} JavaScript already loaded, skipping`);return}if(document.getElementById(t)){console.log(`\u{1F9E9} Theme ${n} script already in DOM, skipping`),this.loadedThemeScripts.add(n);return}try{console.log(`\u{1F9E9} Loading JavaScript for theme: ${n}`),await this.loadScript(e.jsPath,t),await this.waitForThemeComponents(`${n}ThemeComponentsReady`,n),this.loadedThemeScripts.add(n),console.log(`\u2705 Theme ${n} JavaScript loaded and components registered`)}catch(i){throw console.error(`\u274C Failed to load JavaScript for theme ${n}:`,i),this.removeScript(t),i}},async cleanupThemeJavaScript(n){if(!(!n||!this.loadedThemeScripts.has(n))){console.log(`\u{1F9F9} Cleaning up JavaScript for theme: ${n}`);try{let e=`theme-script-${n}`;this.removeScript(e),this.loadedThemeScripts.delete(n),console.log(`\u2705 Cleaned up JavaScript for theme: ${n}`)}catch(e){console.warn(`\u26A0\uFE0F Error cleaning up theme ${n} JavaScript:`,e)}}},async waitForThemeComponents(n,e,t=5e3){return new Promise((i,r)=>{let s=Date.now(),o=()=>{if(window[n]){console.log(`\u{1F9E9} Theme ${e} components are ready`),i();return}if(Date.now()-s>t){console.warn(`\u23F0 Timeout waiting for theme ${e} components`),i();return}setTimeout(o,50)};o()})},async loadScript(n,e){return new Promise((t,i)=>{if(document.getElementById(e)){t();return}let r=document.createElement("script");r.id=e,r.src=n,r.async=!0,r.onload=()=>{console.log(`\u{1F9E9} Successfully loaded script: ${n}`),t()},r.onerror=()=>{console.error(`\u274C Failed to load script: ${n}`),i(new Error(`Failed to load script: ${n}`))},document.head.appendChild(r)})},removeScript(n){let e=document.getElementById(n);e&&(e.remove(),console.log(`\u{1F5D1}\uFE0F Removed script: ${n}`))},async switchToDefaultMode(){console.log(`\u{1F504} Switching to default mode (${this.defaultTheme})...`),this.addLoadingState();try{this.removeAllManagedCSS(),await new Promise(n=>setTimeout(n,50)),await this.loadStylesheet(this.defaultCSS,"default-css"),this.currentMode="default",console.log(`\u2705 Switched to default mode (${this.defaultTheme})`)}finally{this.removeLoadingState()}},async switchToSplitMode(n){let e=this.getThemeById(n);if(!e)throw new Error(`Theme not found: ${n}`);if(e.isDefault)throw new Error(`Default theme ${n} should use default mode, not split mode`);console.log(`\u{1F504} Switching to split mode (base + ${n})...`),this.addLoadingState();try{this.removeAllManagedCSS(),await new Promise(t=>setTimeout(t,50)),await this.loadStylesheet(this.baseCSS,"base-css"),await new Promise(t=>setTimeout(t,50)),await this.loadStylesheet(e.cssPath,"theme-css"),this.currentMode="split",console.log(`\u2705 Switched to split mode: base + ${n}`)}finally{this.removeLoadingState()}},removeAllManagedCSS(){console.log("\u{1F5D1}\uFE0F Removing all managed CSS...");let n=["default-css","base-css","theme-css"],e=['link[href*="default.css"]','link[href*="/css/default.css"]'],t=0;n.forEach(i=>{this.removeStylesheet(i)&&t++}),e.forEach(i=>{document.querySelectorAll(i).forEach(s=>{s&&!s.dataset.keep&&(console.log(`\u{1F5D1}\uFE0F Removing default.css via selector: ${i}`),s.remove(),t++)})}),console.log(`\u{1F5D1}\uFE0F Removed ${t} managed stylesheets`)},async loadStylesheet(n,e){return new Promise((t,i)=>{console.log(`\u{1F4E6} Loading stylesheet: ${n} (id: ${e})`);let r=document.getElementById(e);if(r&&r.href.includes(n)){console.log(`\u{1F4E6} Stylesheet already loaded: ${n}`),t();return}r&&(console.log(`\u{1F5D1}\uFE0F Removing existing stylesheet with id: ${e}`),r.remove());let s=document.createElement("link");s.id=e,s.rel="stylesheet",s.href=n,s.onload=()=>{console.log(`\u2705 Successfully loaded: ${n}`),t()},s.onerror=()=>{console.error(`\u274C Failed to load: ${n}`),i(new Error(`Failed to load stylesheet: ${n}`))};let o=setTimeout(()=>{console.error(`\u23F0 Timeout loading: ${n}`),i(new Error(`Timeout loading stylesheet: ${n}`))},1e4),a=s.onload,l=s.onerror;s.onload=()=>{clearTimeout(o),a()},s.onerror=()=>{clearTimeout(o),l()},document.head.appendChild(s),console.log(`\u{1F4CE} Added stylesheet to head: ${n}`)})},removeStylesheet(n){let e=document.getElementById(n);return e?(console.log(`\u{1F5D1}\uFE0F Removing stylesheet: ${n}`),e.remove(),!0):!1},addLoadingState(){document.body.style.transition="opacity 0.3s ease",document.body.style.opacity="0.7"},removeLoadingState(){setTimeout(()=>{document.body.style.opacity="1",setTimeout(()=>{document.body.style.transition=""},300)},100)},async recoverToDefault(){console.log("\u{1F504} Attempting recovery to default theme...");try{await this.cleanupThemeJavaScript(this.currentTheme),await this.switchToDefaultMode(),await this.loadThemeJavaScript(this.defaultTheme),this.currentTheme=this.defaultTheme,console.log("\u2705 Recovery successful")}catch(n){console.error("\u274C Recovery failed:",n),setTimeout(()=>{window.location.reload()},1e3)}},getThemeById(n){return this.availableThemes.find(e=>e.id===n)},isActiveTheme(n){return this.currentTheme===n},isDefaultTheme(n){return n===this.defaultTheme},getThemeDisplayName(n){let e=this.getThemeById(n),t=e?e.name:n;return e&&e.isDefault?`${t} (default)`:t},storeTheme(n){try{localStorage.setItem(this.storageKey,n)}catch(e){console.warn("\u26A0\uFE0F Could not store theme preference:",e)}},getStoredTheme(){try{let n=localStorage.getItem(this.storageKey);return n&&this.getThemeById(n)?n:null}catch(n){return console.warn("\u26A0\uFE0F Could not read theme preference:",n),null}},onThemeChange(n){let e=new CustomEvent("themeChanged",{detail:{newTheme:n,themeData:this.getThemeById(n),mode:this.currentMode,isDefault:this.isDefaultTheme(n),hasJavaScript:this.getThemeById(n)?.hasJavaScript||!1}});document.dispatchEvent(e)},announceThemeChange(n){let t=`Theme changed to ${this.getThemeDisplayName(n)}`;this.announceToScreenReader(t)},announceError(n){this.announceToScreenReader(n,"assertive")},announceToScreenReader(n,e="polite"){let t=document.createElement("div");t.setAttribute("aria-live",e),t.setAttribute("aria-atomic","true"),t.className="sr-only",t.textContent=n,document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},1e3)},get themeDisplayName(){return this.getThemeDisplayName(this.currentTheme)},get currentThemeData(){return this.getThemeById(this.currentTheme)},debugCurrentState(){console.log("\u{1F50D} Current theme state:",{currentTheme:this.currentTheme,defaultTheme:this.defaultTheme,mode:this.currentMode,isInitialized:this.isInitialized,isLoading:this.isLoading,availableThemes:this.availableThemes,loadedThemeScripts:Array.from(this.loadedThemeScripts),currentThemeComponents:Array.from(this.currentThemeComponents)});let n=document.querySelectorAll('link[rel="stylesheet"]');console.log("\u{1F50D} Current stylesheets:"),n.forEach(t=>{console.log(`  - ${t.href} (id: ${t.id})`)});let e=document.querySelectorAll('script[id^="theme-script-"]');console.log("\u{1F50D} Current theme scripts:"),e.forEach(t=>{console.log(`  - ${t.src} (id: ${t.id})`)})}});var Ch=(n=null)=>({isActive:!1,isLoaded:!1,hasError:!1,errorMessage:"",config:n,init(){if(console.log("\u{1F30C} Initializing skybox Alpine component"),this.config=this.config||this.detectSkyboxConfig(),!this.config){console.log("\u{1F30C} No skybox configuration found, component will remain inactive");return}console.log("\u{1F30C} Skybox configuration detected:",this.config),this.setupThemeListener(),this.initializeSkybox()},detectSkyboxConfig(){if(window.currentThemeSkyboxConfig)return window.currentThemeSkyboxConfig;if(this.$store.theme&&this.$store.theme.current&&this.$store.theme.current.skybox)return this.$store.theme.current.skybox;if(this.$el.dataset.skyboxConfig)try{return JSON.parse(this.$el.dataset.skyboxConfig)}catch(e){console.warn("\u26A0\uFE0F Invalid skybox config in data attribute:",e)}return null},setupThemeListener(){document.addEventListener("themeChanged",e=>{let t=e.detail.themeData;t&&t.skybox?(console.log("\u{1F30C} New theme has skybox, activating..."),this.config=t.skybox,this.initializeSkybox()):(console.log("\u{1F30C} New theme has no skybox, deactivating..."),this.deactivateSkybox())}),document.addEventListener("themeHasSkybox",e=>{let{themeId:t,skyboxConfig:i}=e.detail;console.log(`\u{1F30C} Global event: Theme ${t} has skybox`),i&&!this.isActive&&(this.config=i,this.initializeSkybox())}),document.addEventListener("themeNoSkybox",e=>{let{themeId:t}=e.detail;console.log(`\u{1F30C} Global event: Theme ${t} has no skybox`),this.isActive&&this.deactivateSkybox()})},async initializeSkybox(){this.isActive||!this.config||(console.log("\u{1F30C} Initializing skybox via event system"),this.isActive=!0,this.hasError=!1,this.errorMessage="",this.$dispatch("skybox-init",{config:this.config,container:document.body,componentId:this.$id("skybox")}))},deactivateSkybox(){this.isActive&&(console.log("\u{1F30C} Deactivating skybox via event system"),this.$dispatch("skybox-cleanup",{componentId:this.$id("skybox")}),this.isActive=!1,this.isLoaded=!1,this.hasError=!1,this.errorMessage="")},handleSkyboxSuccess(){this.isLoaded=!0,this.hasError=!1,this.errorMessage="",console.log("\u2705 Skybox Alpine component: success confirmed")},handleSkyboxError(e){this.isLoaded=!1,this.hasError=!0,this.errorMessage=e,console.warn("\u26A0\uFE0F Skybox Alpine component: error confirmed -",e)},async restart(e){console.log("\u{1F504} Restarting skybox with new configuration"),this.deactivateSkybox(),this.config=e,await this.$nextTick(),this.initializeSkybox()},updateParallax(e){this.isLoaded&&(console.log("\u{1F504} Updating skybox parallax configuration"),this.config.parallax={...this.config.parallax,...e},this.$dispatch("skybox-update-parallax",{componentId:this.$id("skybox"),parallaxConfig:this.config.parallax}))},getStatus(){return{isActive:this.isActive,isLoaded:this.isLoaded,hasError:this.hasError,errorMessage:this.errorMessage,hasConfig:!!this.config,config:this.config}},destroy(){console.log("\u{1F9F9} Destroying skybox Alpine component"),this.deactivateSkybox()},get statusMessage(){return this.hasError?this.errorMessage:this.isLoaded?"Skybox active":this.isActive?"Loading skybox...":"Skybox inactive"},get isReady(){return this.isLoaded&&!this.hasError},get canRestart(){return!!this.config}});var oo="177";var qh=0,Ll=1,$h=2;var Dl=1,Yh=2,sn=3,xn=0,gt=1,on=2,bn=0,oi=1,Nl=2,Ul=3,Fl=4,Zh=5,On=100,Jh=101,Kh=102,jh=103,Qh=104,ed=200,td=201,nd=202,id=203,Fs=204,Os=205,rd=206,sd=207,od=208,ad=209,ld=210,cd=211,ud=212,hd=213,dd=214,ao=0,lo=1,co=2,ai=3,uo=4,ho=5,fo=6,po=7,Ol=0,fd=1,pd=2,Mn=0,md=1,gd=2,_d=3,mo=4,xd=5,vd=6,yd=7;var Bl=300,fi=301,pi=302,go=303,_o=304,Fr=306,Vi=1e3,en=1001,Bs=1002,Vt=1003,Sd=1004;var Or=1005;var At=1006,xo=1007;var Vn=1008;var an=1009,kl=1010,zl=1011,Zi=1012,vo=1013,Hn=1014,ln=1015,Ji=1016,yo=1017,So=1018,Ki=1020,Vl=35902,Hl=1021,Gl=1022,Gt=1023,Hi=1026,ji=1027,Wl=1028,bo=1029,Xl=1030,Mo=1031;var wo=1033,Br=33776,kr=33777,zr=33778,Vr=33779,To=35840,Eo=35841,Ao=35842,Co=35843,Ro=36196,Io=37492,Po=37496,Lo=37808,Do=37809,No=37810,Uo=37811,Fo=37812,Oo=37813,Bo=37814,ko=37815,zo=37816,Vo=37817,Ho=37818,Go=37819,Wo=37820,Xo=37821,Hr=36492,qo=36494,$o=36495,ql=36283,Yo=36284,Zo=36285,Jo=36286;var yr=2300,ks=2301,Us=2302,Tl=2400,El=2401,Al=2402;var bd=3200,Md=3201;var wd=0,Td=1,wn="",vt="srgb",li="srgb-linear",Sr="linear",Ye="srgb";var ri=7680;var Cl=519,Ed=512,Ad=513,Cd=514,$l=515,Rd=516,Id=517,Pd=518,Ld=519,Rl=35044;var Yl="300 es",tn=2e3,br=2001;var vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,zs=180/Math.PI;function Gr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Oe(n,e,t){return Math.max(e,Math.min(t,n))}function cg(n,e){return(n%e+e)%e}function il(n,e,t){return(1-t)*n+t*e}function mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ze=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=y;return}if(h!==y||l!==f||c!==m||u!==_){let p=1-a,d=l*f+c*m+u*_+h*y,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let I=Math.sqrt(T),M=Math.atan2(I,d*A);p=Math.sin(p*M)/I,a=Math.sin(a*M)/I}let b=a*A;if(l=l*p+f*b,c=c*p+m*b,u=u*p+_*b,h=h*p+y*b,p===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Oe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new O,Rh=new yn,Le=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=r[0],p=r[3],d=r[6],A=r[1],T=r[4],b=r[7],I=r[2],M=r[5],w=r[8];return s[0]=o*y+a*A+l*I,s[3]=o*p+a*T+l*M,s[6]=o*d+a*b+l*w,s[1]=c*y+u*A+h*I,s[4]=c*p+u*T+h*M,s[7]=c*d+u*b+h*w,s[2]=f*y+m*A+_*I,s[5]=f*p+m*T+_*M,s[8]=f*d+m*b+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new Le;function Zl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dd(){let n=Gi("canvas");return n.style.display="block",n}var Ih={};function ci(n){n in Ih||(Ih[n]=!0,console.warn(n))}function Nd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ud(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fd(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ph=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){let n={enabled:!0,workingColorSpace:li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ye&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ye&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wn?Sr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[li]:{primaries:e,whitePoint:i,transfer:Sr,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:i,transfer:Ye,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),n}var Be=ug();function _n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ci,Vs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ci===void 0&&(Ci=Gi("canvas")),Ci.width=e.width,Ci.height=e.height;let r=Ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gi("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_n(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_n(t[i]/255)*255):t[i]=_n(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hg=0,Wi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ol(r[o].image)):s.push(ol(r[o]))}else s=ol(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dg=0,al=new O,Ct=class n extends vn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=en,r=en,s=At,o=Vn,a=Gt,l=an,c=n.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Gr(),this.name="",this.source=new Wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Bl;Ct.DEFAULT_ANISOTROPY=1;var at=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(m+1)/2,I=(d+1)/2,M=(u+f)/4,w=(h+y)/4,L=(_+p)/4;return T>b&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=M/i,s=w/i):b>I?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=M/r,s=L/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=w/s,r=L/s),this.set(i,r,s,t),this}let A=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(h-y)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Oe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hs=class extends vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Ct(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wi(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Hs{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Mr=class extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Gs=class extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(s,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),xs.subVectors(this.max,gr),Ri.subVectors(e.a,gr),Ii.subVectors(e.b,gr),Pi.subVectors(e.c,gr),In.subVectors(Ii,Ri),Pn.subVectors(Pi,Ii),ei.subVectors(Ri,Pi);let t=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-ei.z,ei.y,In.z,0,-In.x,Pn.z,0,-Pn.x,ei.z,0,-ei.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-ei.y,ei.x,0];return!ll(t,Ri,Ii,Pi,xs)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,Ri,Ii,Pi,xs))?!1:(vs.crossVectors(In,Pn),t=[vs.x,vs.y,vs.z],ll(t,Ri,Ii,Pi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dn=[new O,new O,new O,new O,new O,new O,new O,new O],Yt=new O,_s=new Bn,Ri=new O,Ii=new O,Pi=new O,In=new O,Pn=new O,ei=new O,gr=new O,xs=new O,vs=new O,ti=new O;function ll(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ti.fromArray(n,s);let a=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),u=i.dot(ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var fg=new Bn,_r=new O,cl=new O,Xi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(cl)),this.expandByPoint(_r.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fn=new O,ul=new O,ys=new O,Ln=new O,hl=new O,Ss=new O,dl=new O,Ws=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ul.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(ul);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=Ln.dot(this.direction),l=-Ln.dot(ys),c=Ln.lengthSq(),u=Math.abs(1-o*o),h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){let y=1/u;h*=y,f*=y,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ul).addScaledVector(ys,f),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,s){hl.subVectors(t,e),Ss.subVectors(i,e),dl.crossVectors(hl,Ss);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);let l=a*this.direction.dot(Ss.crossVectors(Ln,Ss));if(l<0)return null;let c=a*this.direction.dot(hl.cross(Ln));if(c<0||l+c>o)return null;let u=-a*Ln.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class n{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,_,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,y,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,y,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,m=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,m=l*h,_=c*u,y=c*h;t[0]=f+y*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,m=l*h,_=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,m=o*h,_=a*u,y=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-y*h}else if(e.order==="XZY"){let f=o*l,m=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,i){let r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),Dn.crossVectors(i,Lt),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),Dn.crossVectors(i,Lt)),Dn.normalize(),bs.crossVectors(Lt,Dn),r[0]=Dn.x,r[4]=bs.x,r[8]=Lt.x,r[1]=Dn.y,r[5]=bs.y,r[9]=Lt.y,r[2]=Dn.z,r[6]=bs.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],d=i[14],A=i[3],T=i[7],b=i[11],I=i[15],M=r[0],w=r[4],L=r[8],S=r[12],v=r[1],R=r[5],H=r[9],k=r[13],G=r[2],J=r[6],W=r[10],ee=r[14],z=r[3],ae=r[7],he=r[11],be=r[15];return s[0]=o*M+a*v+l*G+c*z,s[4]=o*w+a*R+l*J+c*ae,s[8]=o*L+a*H+l*W+c*he,s[12]=o*S+a*k+l*ee+c*be,s[1]=u*M+h*v+f*G+m*z,s[5]=u*w+h*R+f*J+m*ae,s[9]=u*L+h*H+f*W+m*he,s[13]=u*S+h*k+f*ee+m*be,s[2]=_*M+y*v+p*G+d*z,s[6]=_*w+y*R+p*J+d*ae,s[10]=_*L+y*H+p*W+d*he,s[14]=_*S+y*k+p*ee+d*be,s[3]=A*M+T*v+b*G+I*z,s[7]=A*w+T*R+b*J+I*ae,s[11]=A*L+T*H+b*W+I*he,s[15]=A*S+T*k+b*ee+I*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],p=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+y*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],p=e[14],d=e[15],A=h*p*c-y*f*c+y*l*m-a*p*m-h*l*d+a*f*d,T=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,b=u*y*c-_*h*c+_*a*m-o*y*m-u*a*d+o*h*d,I=_*h*l-u*y*l-_*a*f+o*y*f+u*a*p-o*h*p,M=t*A+i*T+r*b+s*I;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return e[0]=A*w,e[1]=(y*f*s-h*p*s-y*r*m+i*p*m+h*r*d-i*f*d)*w,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*d+i*l*d)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*w,e[4]=T*w,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*d+t*f*d)*w,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*w,e[8]=b*w,e[9]=(_*h*s-u*y*s-_*i*m+t*y*m+u*i*d-t*h*d)*w,e[10]=(o*y*s-_*a*s+_*i*c-t*y*c-o*i*d+t*a*d)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*w,e[12]=I*w,e[13]=(u*y*r-_*h*r+_*i*f-t*y*f-u*i*p+t*h*p)*w,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*p-t*a*p)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,y=o*u,p=o*h,d=a*h,A=l*c,T=l*u,b=l*h,I=i.x,M=i.y,w=i.z;return r[0]=(1-(y+d))*I,r[1]=(m+b)*I,r[2]=(_-T)*I,r[3]=0,r[4]=(m-b)*M,r[5]=(1-(f+d))*M,r[6]=(p+A)*M,r[7]=0,r[8]=(_+T)*w,r[9]=(p-A)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Li.set(r[0],r[1],r[2]).length(),o=Li.set(r[4],r[5],r[6]).length(),a=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);let c=1/s,u=1/o,h=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=tn){let l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r),m,_;if(a===tn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===br)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=tn){let l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*u,_,y;if(a===tn)_=(o+s)*h,y=-2*h;else if(a===br)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Li=new O,Zt=new ut,pg=new O(0,0,0),mg=new O(1,1,1),Dn=new O,bs=new O,Lt=new O,Dh=new ut,Nh=new yn,rn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gg=0,Uh=new O,Di=new yn,pn=new ut,Ms=new O,xr=new O,_g=new O,xg=new yn,Fh=new O(1,0,0),Oh=new O(0,1,0),Bh=new O(0,0,1),kh={type:"added"},vg={type:"removed"},Ni={type:"childadded",child:null},fl={type:"childremoved",child:null},Ht=class n extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new rn,i=new yn,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Le}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(xr,Ms,this.up):pn.lookAt(Ms,xr,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(pn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vg),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new O,mn=new O,pl=new O,gn=new O,Ui=new O,Fi=new O,zh=new O,ml=new O,gl=new O,_l=new O,xl=new at,vl=new at,yl=new at,Fn=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),mn.subVectors(i,t),pl.subVectors(e,t);let o=Jt.dot(Jt),a=Jt.dot(mn),l=Jt.dot(pl),c=mn.dot(mn),u=mn.dot(pl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return xl.setScalar(0),vl.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,i),yl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xl,s.x),o.addScaledVector(vl,s.y),o.addScaledVector(yl,s.z),o}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),mn.subVectors(e,t),Jt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ui.subVectors(r,i),Fi.subVectors(s,i),ml.subVectors(e,i);let l=Ui.dot(ml),c=Fi.dot(ml);if(l<=0&&c<=0)return t.copy(i);gl.subVectors(e,r);let u=Ui.dot(gl),h=Fi.dot(gl);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ui,o);_l.subVectors(e,s);let m=Ui.dot(_l),_=Fi.dot(_l);if(_>=0&&m<=_)return t.copy(s);let y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Fi,a);let p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return zh.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(zh,a);let d=1/(p+y+f);return o=y*d,a=f*d,t.copy(i).addScaledVector(Ui,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var We=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Be.workingColorSpace){return this.r=e,this.g=t,this.b=i,Be.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Be.workingColorSpace){if(e=cg(e,1),t=Oe(t,0,1),i=Oe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Sl(o,s,e+1/3),this.g=Sl(o,s,e),this.b=Sl(o,s,e-1/3)}return Be.colorSpaceToWorking(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Be.workingToColorSpace(xt.copy(this),e),Math.round(Oe(xt.r*255,0,255))*65536+Math.round(Oe(xt.g*255,0,255))*256+Math.round(Oe(xt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.workingToColorSpace(xt.copy(this),t);let i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Be.workingColorSpace){return Be.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=vt){Be.workingToColorSpace(xt.copy(this),e);let t=xt.r,i=xt.g,r=xt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(ws);let i=il(Nn.h,ws.h,t),r=il(Nn.s,ws.s,t),s=il(Nn.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new We;We.NAMES=Od;var yg=0,ui=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=oi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fs,this.blendDst=Os,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fs&&(i.blendSrc=this.blendSrc),this.blendDst!==Os&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},hi=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ct=new O,Ts=new Ze,Sg=0,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}};var Tr=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Er=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ut=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}},bg=0,zt=new ut,bl=new Ht,Oi=new O,Dt=new Bn,vr=new Bn,pt=new O,Sn=class n extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?Er:Tr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Dt.min,vr.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,vr.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(vr.min),Dt.expandByPoint(vr.max))}Dt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),pt.add(Oi)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new O,l[L]=new O;let c=new O,u=new O,h=new O,f=new Ze,m=new Ze,_=new Ze,y=new O,p=new O;function d(L,S,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),m.sub(f),_.sub(f);let R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),a[L].add(y),a[S].add(y),a[v].add(y),l[L].add(p),l[S].add(p),l[v].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,S=A.length;L<S;++L){let v=A[L],R=v.start,H=v.count;for(let k=R,G=R+H;k<G;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let T=new O,b=new O,I=new O,M=new O;function w(L){I.fromBufferAttribute(r,L),M.copy(I);let S=a[L];T.copy(S),T.sub(I.multiplyScalar(I.dot(S))).normalize(),b.crossVectors(M,S);let R=b.dot(l[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,R)}for(let L=0,S=A.length;L<S;++L){let v=A[L],R=v.start,H=v.count;for(let k=R,G=R+H;k<G;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){let _=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),m=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Nt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vh=new ut,ni=new Ws,Es=new Xi,Hh=new O,As=new O,Cs=new O,Rs=new O,Ml=new O,Is=new O,Gh=new O,Ps=new O,Rt=class extends Ht{constructor(e=new Sn,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Ml.fromBufferAttribute(h,e),o?Is.addScaledVector(Ml,u):Is.addScaledVector(Ml.sub(t),u))}t.add(Is)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(Es.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Es,Hh)===null||ni.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Vh.copy(s).invert(),ni.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let p=f[_],d=o[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,I=T;b<I;b+=3){let M=a.getX(b),w=a.getX(b+1),L=a.getX(b+2);r=Ls(this,d,e,i,c,u,h,M,w,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){let A=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);r=Ls(this,o,e,i,c,u,h,A,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let p=f[_],d=o[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,I=T;b<I;b+=3){let M=b,w=b+1,L=b+2;r=Ls(this,d,e,i,c,u,h,M,w,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){let A=p,T=p+1,b=p+2;r=Ls(this,o,e,i,c,u,h,A,T,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Mg(n,e,t,i,r,s,o,a){let l;if(e.side===gt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xn,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:n}}function Ls(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,As),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Rs);let u=Mg(n,e,t,i,As,Cs,Rs,Gh);if(u){let h=new O;Fn.getBarycoord(Gh,As,Cs,Rs,h),r&&(u.uv=Fn.getInterpolatedAttribute(r,a,l,c,h,new Ze)),s&&(u.uv1=Fn.getInterpolatedAttribute(s,a,l,c,h,new Ze)),o&&(u.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};Fn.getNormal(As,Cs,Rs,f.normal),u.face=f,u.barycoord=h}return u}var qi=class n extends Sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function _(y,p,d,A,T,b,I,M,w,L,S){let v=b/w,R=I/L,H=b/2,k=I/2,G=M/2,J=w+1,W=L+1,ee=0,z=0,ae=new O;for(let he=0;he<W;he++){let be=he*R-k;for(let Ue=0;Ue<J;Ue++){let Je=Ue*v-H;ae[y]=Je*A,ae[p]=be*T,ae[d]=G,c.push(ae.x,ae.y,ae.z),ae[y]=0,ae[p]=0,ae[d]=M>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Ue/w),h.push(1-he/L),ee+=1}}for(let he=0;he<L;he++)for(let be=0;be<w;be++){let Ue=f+be+J*he,Je=f+be+J*(he+1),q=f+(be+1)+J*(he+1),te=f+(be+1)+J*he;l.push(Ue,Je,te),l.push(Je,q,te),z+=6}a.addGroup(m,z,S),m+=z,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){let e={};for(let t=0;t<n.length;t++){let i=mi(n[t]);for(let r in i)e[r]=i[r]}return e}function wg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}var Bd={clone:mi,merge:St},Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ar=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=new O,Wh=new Ze,Xh=new Ze,yt=class extends Ar{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bi=-90,ki=1,Xs=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yt(Bi,ki,e,t);r.layers=this.layers,this.add(r);let s=new yt(Bi,ki,e,t);s.layers=this.layers,this.add(s);let o=new yt(Bi,ki,e,t);o.layers=this.layers,this.add(o);let a=new yt(Bi,ki,e,t);a.layers=this.layers,this.add(a);let l=new yt(Bi,ki,e,t);l.layers=this.layers,this.add(l);let c=new yt(Bi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Cr=class extends Ct{constructor(e=[],t=fi,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qs=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gt,blending:bn});s.uniforms.tEquirect.value=t;let o=new Rt(r,s),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=At),new Xs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},si=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ag={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Rr=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var wl=new O,Cg=new O,Rg=new Le,Qt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=wl.subVectors(i,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rg.getNormalMatrix(e),r=this.coplanarPoint(wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new Xi,Ds=new O,Ir=class{constructor(e=new Qt,t=new Qt,i=new Qt,r=new Qt,s=new Qt,o=new Qt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tn){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],_=r[9],y=r[10],p=r[11],d=r[12],A=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,f-c,p-m,b-d).normalize(),i[1].setComponents(l+s,f+c,p+m,b+d).normalize(),i[2].setComponents(l+o,f+u,p+_,b+A).normalize(),i[3].setComponents(l-o,f-u,p-_,b-A).normalize(),i[4].setComponents(l-a,f-h,p-y,b-T).normalize(),t===tn)i[5].setComponents(l+a,f+h,p+y,b+T).normalize();else if(t===br)i[5].setComponents(a,h,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pr=class extends Ct{constructor(e,t,i=Hn,r,s,o,a=Vt,l=Vt,c,u=Hi,h=1){if(u!==Hi&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Lr=class n extends Sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],y=[],p=[];for(let d=0;d<u;d++){let A=d*f-o;for(let T=0;T<c;T++){let b=T*h-s;_.push(b,-A,0),y.push(0,0,1),p.push(T/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let T=A+c*d,b=A+c*(d+1),I=A+1+c*(d+1),M=A+1+c*d;m.push(T,b,M),m.push(b,I,M)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dr=class n extends Sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new O,f=new O,m=[],_=[],y=[],p=[];for(let d=0;d<=i;d++){let A=[],T=d/i,b=0;d===0&&o===0?b=.5/t:d===i&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){let M=I/t;h.x=-e*Math.cos(r+M*s)*Math.sin(o+T*a),h.y=e*Math.cos(o+T*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(M+b,1-T),A.push(c++)}u.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){let T=u[d][A+1],b=u[d][A],I=u[d+1][A],M=u[d+1][A+1];(d!==0||o>0)&&m.push(T,b,M),(d!==i-1||l<Math.PI)&&m.push(b,I,M)}this.setIndex(m),this.setAttribute("position",new Ut(_,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $s=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ys=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ns(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ig(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var di=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zs=class extends di{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:s=e,a=2*t-i;break;case Al:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case El:o=e,l=2*i-t;break;case Al:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-t)/(r-t),y=_*_,p=y*_,d=-f*p+2*f*y-f*_,A=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*_+1,T=(-1-m)*p+(1.5+m)*y+.5*_,b=m*p-m*y;for(let I=0;I!==a;++I)s[I]=d*o[u+I]+A*o[c+I]+T*o[l+I]+b*o[h+I];return s}},Js=class extends di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ks=class extends di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ft=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zs(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ig(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Us,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,f=h-i,m=h+i;for(let _=0;_!==i;++_){let y=t[h+_];if(y!==t[f+_]||y!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ft.prototype.ValueTypeName="";Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=ks;var kn=class extends Ft{constructor(e,t,i){super(e,t,i)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=yr;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};js.prototype.ValueTypeName="color";var Qs=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};Qs.prototype.ValueTypeName="number";var eo=class extends di{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)yn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Nr=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}};Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Ft{constructor(e,t,i){super(e,t,i)}};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=yr;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Ft{constructor(e,t,i,r){super(e,t,i,r)}};to.prototype.ValueTypeName="vector";var Il={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},no=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}},kd=new no,Yi=class{constructor(e){this.manager=e!==void 0?e:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends Yi{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Il.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Gi("img");function l(){u(),Il.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var Ur=class extends Yi{constructor(e){super(e)}load(e,t,i,r){let s=new Ct,o=new io(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}};var ro=class extends Ar{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var so=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Kl="\\[\\]\\.:\\/",Pg=new RegExp("["+Kl+"]","g"),jl="[^"+Kl+"]",Lg="[^"+Kl.replace("\\.","")+"]",Dg=/((?:WC+[\/:])*)/.source.replace("WC",jl),Ng=/(WCOD+)?/.source.replace("WCOD",Lg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),Fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),Og=new RegExp("^"+Dg+Ng+Ug+Fg+"$"),Bg=["material","materials","bones","map"],Pl=class{constructor(e,t,i){let r=i||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(e){let t=Og.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Bg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=Pl;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W0=new Float32Array(1);function Ql(n,e,t,i){let r=kg(i);switch(t){case Hl:return n*e;case Wl:return n*e/r.components*r.byteLength;case bo:return n*e/r.components*r.byteLength;case Xl:return n*e*2/r.components*r.byteLength;case Mo:return n*e*2/r.components*r.byteLength;case Gl:return n*e*3/r.components*r.byteLength;case Gt:return n*e*4/r.components*r.byteLength;case wo:return n*e*4/r.components*r.byteLength;case Br:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:case Co:return Math.max(n,16)*Math.max(e,8)/4;case To:case Ao:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hr:case qo:case $o:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ql:case Yo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kg(n){switch(n){case an:case kl:return{byteLength:1,components:1};case Zi:case zl:case Ji:return{byteLength:2,components:1};case yo:case So:return{byteLength:2,components:4};case Hn:case vo:case ln:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);function uf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zg(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){let _=h[f],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){let y=h[m];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$g=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Vg,alphahash_pars_fragment:Hg,alphamap_fragment:Gg,alphamap_pars_fragment:Wg,alphatest_fragment:Xg,alphatest_pars_fragment:qg,aomap_fragment:$g,aomap_pars_fragment:Yg,batching_pars_vertex:Zg,batching_vertex:Jg,begin_vertex:Kg,beginnormal_vertex:jg,bsdfs:Qg,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:d_,displacementmap_pars_vertex:f_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:v_,envmap_common_pars_fragment:y_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:D_,envmap_vertex:M_,fog_vertex:w_,fog_pars_vertex:T_,fog_fragment:E_,fog_pars_fragment:A_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:R_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:N_,lights_toon_pars_fragment:U_,lights_phong_fragment:F_,lights_phong_pars_fragment:O_,lights_physical_fragment:B_,lights_physical_pars_fragment:k_,lights_fragment_begin:z_,lights_fragment_maps:V_,lights_fragment_end:H_,logdepthbuf_fragment:G_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:q_,map_fragment:$_,map_pars_fragment:Y_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:j_,morphinstance_vertex:Q_,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:rx,normal_fragment_maps:sx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:xx,dithering_pars_fragment:vx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Mx,shadowmap_vertex:wx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Cx,skinnormal_vertex:Rx,specularmap_fragment:Ix,specularmap_pars_fragment:Px,tonemapping_fragment:Lx,tonemapping_pars_fragment:Dx,transmission_fragment:Nx,transmission_pars_fragment:Ux,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:kx,background_vert:zx,background_frag:Vx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:Xx,depth_vert:qx,depth_frag:$x,distanceRGBA_vert:Yx,distanceRGBA_frag:Zx,equirect_vert:Jx,equirect_frag:Kx,linedashed_vert:jx,linedashed_frag:Qx,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:rv,meshmatcap_frag:sv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:hv,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:xv,sprite_frag:vv},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},cn={basic:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:St([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:St([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:St([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:St([ie.points,ie.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:St([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:St([ie.common,ie.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:St([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:St([ie.sprite,ie.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:St([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:St([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};cn.physical={uniforms:St([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Ko={r:0,b:0,g:0},gi=new rn,yv=new ut;function Sv(n,e,t,i,r,s,o){let a=new We(0),l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function y(T){let b=!1,I=_(T);I===null?d(a,l):I&&I.isColor&&(d(I,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(T,b){let I=_(b);I&&(I.isCubeTexture||I.mapping===Fr)?(u===void 0&&(u=new Rt(new qi(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:mi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gi.copy(b.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(gi)),u.material.toneMapped=Be.getTransfer(I.colorSpace)!==Ye,(h!==I||f!==I.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,m=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Rt(new Lr(2,2),new Kt({name:"BackgroundMaterial",uniforms:mi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Be.getTransfer(I.colorSpace)!==Ye,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,m=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,b){T.getRGB(Ko,Jl(n)),i.buffers.color.setClear(Ko.r,Ko.g,Ko.b,b,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:y,addToRenderList:p,dispose:A}}function bv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(v,R,H,k,G){let J=!1,W=h(k,H,R);s!==W&&(s=W,c(s.object)),J=m(v,k,H,G),J&&_(v,k,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(v,R,H,k),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,R,H){let k=H.wireframe===!0,G=i[v.id];G===void 0&&(G={},i[v.id]=G);let J=G[R.id];J===void 0&&(J={},G[R.id]=J);let W=J[k];return W===void 0&&(W=f(l()),J[k]=W),W}function f(v){let R=[],H=[],k=[];for(let G=0;G<t;G++)R[G]=0,H[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:k,object:v,attributes:{},index:null}}function m(v,R,H,k){let G=s.attributes,J=R.attributes,W=0,ee=H.getAttributes();for(let z in ee)if(ee[z].location>=0){let he=G[z],be=J[z];if(be===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function _(v,R,H,k){let G={},J=R.attributes,W=0,ee=H.getAttributes();for(let z in ee)if(ee[z].location>=0){let he=J[z];he===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(he=v.instanceColor));let be={};be.attribute=he,he&&he.data&&(be.data=he.data),G[z]=be,W++}s.attributes=G,s.attributesNum=W,s.index=k}function y(){let v=s.newAttributes;for(let R=0,H=v.length;R<H;R++)v[R]=0}function p(v){d(v,0)}function d(v,R){let H=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;H[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),G[v]!==R&&(n.vertexAttribDivisor(v,R),G[v]=R)}function A(){let v=s.newAttributes,R=s.enabledAttributes;for(let H=0,k=R.length;H<k;H++)R[H]!==v[H]&&(n.disableVertexAttribArray(H),R[H]=0)}function T(v,R,H,k,G,J,W){W===!0?n.vertexAttribIPointer(v,R,H,G,J):n.vertexAttribPointer(v,R,H,k,G,J)}function b(v,R,H,k){y();let G=k.attributes,J=H.getAttributes(),W=R.defaultAttributeValues;for(let ee in J){let z=J[ee];if(z.location>=0){let ae=G[ee];if(ae===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ae!==void 0){let he=ae.normalized,be=ae.itemSize,Ue=e.get(ae);if(Ue===void 0)continue;let Je=Ue.buffer,q=Ue.type,te=Ue.bytesPerElement,ve=q===n.INT||q===n.UNSIGNED_INT||ae.gpuType===vo;if(ae.isInterleavedBufferAttribute){let le=ae.data,ye=le.stride,Ve=ae.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)d(z.location+Ae,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)p(z.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ae=0;Ae<z.locationSize;Ae++)T(z.location+Ae,be/z.locationSize,q,he,ye*te,(Ve+be/z.locationSize*Ae)*te,ve)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)d(z.location+le,ae.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<z.locationSize;le++)p(z.location+le);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let le=0;le<z.locationSize;le++)T(z.location+le,be/z.locationSize,q,he,be*te,be/z.locationSize*le*te,ve)}}else if(W!==void 0){let he=W[ee];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(z.location,he);break;case 3:n.vertexAttrib3fv(z.location,he);break;case 4:n.vertexAttrib4fv(z.location,he);break;default:n.vertexAttrib1fv(z.location,he)}}}}A()}function I(){L();for(let v in i){let R=i[v];for(let H in R){let k=R[H];for(let G in k)u(k[G].object),delete k[G];delete R[H]}delete i[v]}}function M(v){if(i[v.id]===void 0)return;let R=i[v.id];for(let H in R){let k=R[H];for(let G in k)u(k[G].object),delete k[G];delete R[H]}delete i[v.id]}function w(v){for(let R in i){let H=i[R];if(H[v.id]===void 0)continue;let k=H[v.id];for(let G in k)u(k[G].object),delete k[G];delete H[v.id]}}function L(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:A}}function Mv(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}function l(c,u,h,f){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y]*f[y];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Gt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let L=w===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==an&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:I,maxSamples:M}}function Tv(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Qt,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){let _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{let A=s?0:i,T=A*4,b=d.clippingState||null;l.value=b,b=u(_,f,T,m);for(let I=0;I!==T;++I)b[I]=t[I];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=l.value,_!==!0||p===null){let d=m+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=m;T!==y;++T,b+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Ev(n){let e=new WeakMap;function t(o,a){return a===go?o.mapping=fi:a===_o&&(o.mapping=pi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===go||a===_o)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qs(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var er=4,zd=[.125,.215,.35,.446,.526,.582],vi=20,ec=new ro,Vd=new We,tc=null,nc=0,ic=0,rc=!1,xi=(1+Math.sqrt(5))/2,Qi=1/xi,Hd=[new O(-xi,Qi,0),new O(xi,Qi,0),new O(-Qi,0,xi),new O(Qi,0,xi),new O(0,xi,-Qi),new O(0,xi,Qi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Av=new O,ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=Av}=s;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Ji,format:Gt,colorSpace:li,depthBuffer:!1},r=Gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(s)),this._blurMaterial=Rv(s,e,t)}return r}_compileMaterial(e){let t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,i,r,s){let l=new yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Vd),h.toneMapping=Mn,h.autoClear=!1;let _=new hi({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),y=new Rt(new qi,_),p=!1,d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,p=!0):(_.color.copy(Vd),p=!0);for(let A=0;A<6;A++){let T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));let b=this._cubeSize;jo(r,T*b,A>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fi||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ec)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hd[(r-s-1)%Hd.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Rt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vi-1),y=s/_,p=isFinite(s)?1+Math.floor(u*y):vi;p>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);let d=[],A=0;for(let w=0;w<vi;++w){let L=w/y,S=Math.exp(-L*L/2);d.push(S),w===0?A+=S:w<p&&(A+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-i;let b=this._sizeLods[r],I=3*b*(r>T-er?r-T+er:0),M=4*(this._cubeSize-b);jo(t,I,M,3*b,2*b),l.setRenderTarget(t),l.render(h,ec)}};function Cv(n){let e=[],t=[],i=[],r=n,s=n-er+1+zd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-er?l=zd[o-n+er-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,y=3,p=2,d=1,A=new Float32Array(y*_*m),T=new Float32Array(p*_*m),b=new Float32Array(d*_*m);for(let M=0;M<m;M++){let w=M%3*2/3-1,L=M>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];A.set(S,y*_*M),T.set(f,p*_*M);let v=[M,M,M,M,M,M];b.set(v,d*_*M)}let I=new Sn;I.setAttribute("position",new Nt(A,y)),I.setAttribute("uv",new Nt(T,p)),I.setAttribute("faceIndex",new Nt(b,d)),e.push(I),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gd(n,e,t){let i=new nn(n,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rv(n,e,t){let i=new Float32Array(vi),r=new O(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Wd(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Xd(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===go||l===_o,u=l===fi||l===pi;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ea(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new ea(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Pv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&ci("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lv(n,e,t,i){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){let f=[],m=h.index,_=h.attributes.position,y=0;if(m!==null){let A=m.array;y=m.version;for(let T=0,b=A.length;T<b;T+=3){let I=A[T+0],M=A[T+1],w=A[T+2];f.push(I,M,M,w,w,I)}}else if(_!==void 0){let A=_.array;y=_.version;for(let T=0,b=A.length/3-1;T<b;T+=3){let I=T+0,M=T+1,w=T+2;f.push(I,M,M,w,w,I)}}else return;let p=new(Zl(f)?Er:Tr)(f,1);p.version=y;let d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){let f=s.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dv(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,f*o,_),t.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function h(f,m,_,y){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,_);let d=0;for(let A=0;A<_;A++)d+=m[A]*y[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Nv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uv(n,e,t){let i=new WeakMap,r=new at;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],T=0;m===!0&&(T=1),_===!0&&(T=2),y===!0&&(T=3);let b=a.attributes.position.count*T,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let M=new Float32Array(b*I*4*h),w=new Mr(M,b,I,h);w.type=ln,w.needsUpdate=!0;let L=T*4;for(let v=0;v<h;v++){let R=p[v],H=d[v],k=A[v],G=b*I*4*v;for(let J=0;J<R.count;J++){let W=J*L;m===!0&&(r.fromBufferAttribute(R,J),M[G+W+0]=r.x,M[G+W+1]=r.y,M[G+W+2]=r.z,M[G+W+3]=0),_===!0&&(r.fromBufferAttribute(H,J),M[G+W+4]=r.x,M[G+W+5]=r.y,M[G+W+6]=r.z,M[G+W+7]=0),y===!0&&(r.fromBufferAttribute(k,J),M[G+W+8]=r.x,M[G+W+9]=r.y,M[G+W+10]=r.z,M[G+W+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:w,size:new Ze(b,I)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Fv(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var hf=new Ct,qd=new Pr(1,1),df=new Mr,ff=new Gs,pf=new Cr,$d=[],Yd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Kd=new Float32Array(4);function nr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=$d[r];if(s===void 0&&(s=new Float32Array(r),$d[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function na(n,e){let t=Yd[e];t===void 0&&(t=new Int32Array(e),Yd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ov(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Kd.set(i),n.uniformMatrix2fv(this.addr,!1,Kd),ft(t,i)}}function Hv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),ft(t,i)}}function Gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Zd.set(i),n.uniformMatrix4fv(this.addr,!1,Zd),ft(t,i)}}function Wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function jv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(qd.compareFunction=$l,s=qd):s=hf,t.setTexture2D(e||s,r)}function Qv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ff,r)}function ey(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||pf,r)}function ty(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||df,r)}function ny(n){switch(n){case 5126:return Ov;case 35664:return Bv;case 35665:return kv;case 35666:return zv;case 35674:return Vv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return $v;case 5125:return Yv;case 36294:return Zv;case 36295:return Jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(n,e){n.uniform1fv(this.addr,e)}function ry(n,e){let t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function sy(n,e){let t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function oy(n,e){let t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function ay(n,e){let t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ly(n,e){let t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cy(n,e){let t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uy(n,e){n.uniform1iv(this.addr,e)}function hy(n,e){n.uniform2iv(this.addr,e)}function dy(n,e){n.uniform3iv(this.addr,e)}function fy(n,e){n.uniform4iv(this.addr,e)}function py(n,e){n.uniform1uiv(this.addr,e)}function my(n,e){n.uniform2uiv(this.addr,e)}function gy(n,e){n.uniform3uiv(this.addr,e)}function _y(n,e){n.uniform4uiv(this.addr,e)}function xy(n,e,t){let i=this.cache,r=e.length,s=na(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hf,s[o])}function vy(n,e,t){let i=this.cache,r=e.length,s=na(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ff,s[o])}function yy(n,e,t){let i=this.cache,r=e.length,s=na(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||pf,s[o])}function Sy(n,e,t){let i=this.cache,r=e.length,s=na(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||df,s[o])}function by(n){switch(n){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Sy}}var oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}},ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=by(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},sc=/(\w+)(\])?(\[|\.)?/g;function jd(n,e){n.seq.push(e),n.map[e.id]=e}function My(n,e,t){let i=n.name,r=i.length;for(sc.lastIndex=0;;){let s=sc.exec(i),o=sc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jd(t,c===void 0?new oc(a,n,e):new ac(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new lc(a),jd(t,h)),t=h}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);My(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function Qd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var wy=37297,Ty=0;function Ey(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ef=new Le;function Ay(n){Be._getMatrix(ef,Be.workingColorSpace,n);let e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(n)){case Sr:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function tf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ey(n.getShaderSource(e),o)}else return r}function Cy(n,e){let t=Ay(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ry(n,e){let t;switch(e){case md:t="Linear";break;case gd:t="Reinhard";break;case _d:t="Cineon";break;case mo:t="ACESFilmic";break;case vd:t="AgX";break;case yd:t="Neutral";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qo=new O;function Iy(){Be.getLuminanceCoefficients(Qo);let n=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Py(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Ly(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wr(n){return n!==""}function nf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(Ny,Fy)}var Uy=new Map;function Fy(n,e){let t=Ne[e];if(t===void 0){let i=Uy.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}var Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(n){return n.replace(Oy,By)}function By(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function of(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ky(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===sn&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Hy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ol:e="ENVMAP_BLENDING_MULTIPLY";break;case fd:e="ENVMAP_BLENDING_MIX";break;case pd:e="ENVMAP_BLENDING_ADD";break}return e}function Gy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Wy(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ky(t),c=zy(t),u=Vy(t),h=Hy(t),f=Gy(t),m=Py(t),_=Ly(s),y=r.createProgram(),p,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Cy("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=cc(o),o=nf(o,t),o=rf(o,t),a=cc(a),a=nf(a,t),a=rf(a,t),o=sf(o),a=sf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=A+p+o,b=A+d+a,I=Qd(r,r.VERTEX_SHADER,T),M=Qd(r,r.FRAGMENT_SHADER,b);r.attachShader(y,I),r.attachShader(y,M),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(R){if(n.debug.checkShaderErrors){let H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(I).trim(),G=r.getShaderInfoLog(M).trim(),J=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,M);else{let ee=tf(r,I,"vertex"),z=tf(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+ee+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||G==="")&&(W=!1);W&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:d}})}r.deleteShader(I),r.deleteShader(M),L=new tr(r,y),S=Dy(r,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(y,wy)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ty++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=M,this}var Xy=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hc(e),t.set(e,i)),i}},hc=class{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}};function qy(n,e,t,i,r,s,o){let a=new wr,l=new uc,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,m=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,R,H,k){let G=H.fog,J=k.geometry,W=S.isMeshStandardMaterial?H.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=ee&&ee.mapping===Fr?ee.image.height:null,ae=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,be=he!==void 0?he.length:0,Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let Je,q,te,ve;if(ae){let qe=cn[ae];Je=qe.vertexShader,q=qe.fragmentShader}else Je=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);let le=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ve=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,nt=!!S.map,it=!!S.matcap,He=!!ee,C=!!S.aoMap,bt=!!S.lightMap,Ge=!!S.bumpMap,Ke=!!S.normalMap,ge=!!S.displacementMap,ke=!!S.emissiveMap,Me=!!S.metalnessMap,De=!!S.roughnessMap,ht=S.anisotropy>0,E=S.clearcoat>0,g=S.dispersion>0,U=S.iridescence>0,X=S.sheen>0,Y=S.transmission>0,V=ht&&!!S.anisotropyMap,_e=E&&!!S.clearcoatMap,re=E&&!!S.clearcoatNormalMap,me=E&&!!S.clearcoatRoughnessMap,xe=U&&!!S.iridescenceMap,Z=U&&!!S.iridescenceThicknessMap,ce=X&&!!S.sheenColorMap,Ee=X&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ne=!!S.specularColorMap,Ie=!!S.specularIntensityMap,P=Y&&!!S.transmissionMap,se=Y&&!!S.thicknessMap,K=!!S.gradientMap,de=!!S.alphaMap,j=S.alphaTest>0,$=!!S.alphaHash,fe=!!S.extensions,Pe=Mn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Pe=n.toneMapping);let je={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&k.instanceColor!==null,instancingMorph:Ve&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:li,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:it,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:z,aoMap:C,lightMap:bt,bumpMap:Ge,normalMap:Ke,displacementMap:f&&ge,emissiveMap:ke,normalMapObjectSpace:Ke&&S.normalMapType===Td,normalMapTangentSpace:Ke&&S.normalMapType===wd,metalnessMap:Me,roughnessMap:De,anisotropy:ht,anisotropyMap:V,clearcoat:E,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:me,dispersion:g,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Z,sheen:X,sheenColorMap:ce,sheenRoughnessMap:Ee,specularMap:Te,specularColorMap:ne,specularIntensityMap:Ie,transmission:Y,transmissionMap:P,thicknessMap:se,gradientMap:K,opaque:S.transparent===!1&&S.blending===oi&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:$,combine:S.combine,mapUv:nt&&y(S.map.channel),aoMapUv:C&&y(S.aoMap.channel),lightMapUv:bt&&y(S.lightMap.channel),bumpMapUv:Ge&&y(S.bumpMap.channel),normalMapUv:Ke&&y(S.normalMap.channel),displacementMapUv:ge&&y(S.displacementMap.channel),emissiveMapUv:ke&&y(S.emissiveMap.channel),metalnessMapUv:Me&&y(S.metalnessMap.channel),roughnessMapUv:De&&y(S.roughnessMap.channel),anisotropyMapUv:V&&y(S.anisotropyMap.channel),clearcoatMapUv:_e&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:ne&&y(S.specularColorMap.channel),specularIntensityMapUv:Ie&&y(S.specularIntensityMap.channel),transmissionMapUv:P&&y(S.transmissionMap.channel),thicknessMapUv:se&&y(S.thicknessMap.channel),alphaMapUv:de&&y(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ke||ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(nt||de),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&Be.getTransfer(S.map.colorSpace)===Ye,decodeVideoTextureEmissive:ke&&S.emissiveMap.isVideoTexture===!0&&Be.getTransfer(S.emissiveMap.colorSpace)===Ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function d(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(v,S),T(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function A(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){let v=_[S.type],R;if(v){let H=cn[v];R=Bd.clone(H.uniforms)}else R=S.uniforms;return R}function I(S,v){let R;for(let H=0,k=u.length;H<k;H++){let G=u[H];if(G.cacheKey===v){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Wy(n,v,S,s),u.push(R)),R}function M(S){if(--S.usedTimes===0){let v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:L}}function $y(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Yy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lf(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,_,y,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=y,d.group=p),e++,d}function a(h,f,m,_,y,p){let d=o(h,f,m,_,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,_,y,p){let d=o(h,f,m,_,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Yy),i.length>1&&i.sort(f||af),r.length>1&&r.sort(f||af)}function u(){for(let h=e,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Zy(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new lf,n.set(i,[o])):r>=s.length?(o=new lf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new We};break;case"SpotLight":t={position:new O,direction:new O,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Ky(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jy=0;function Qy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e0(n){let e=new Jy,t=Ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let r=new O,s=new ut,o=new ut;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,_=0,y=0,p=0,d=0,A=0,T=0,b=0,I=0,M=0,w=0;c.sort(Qy);for(let S=0,v=c.length;S<v;S++){let R=c[S],H=R.color,k=R.intensity,G=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*k,h+=H.g*k,f+=H.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],k);w++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,z=t.get(R);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=W,m++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(H).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[y]=W;let ee=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,ee.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[y]=ee.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=J,b++}y++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=W,p++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let ee=R.shadow,z=t.get(R);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=R.shadow.matrix,T++}i.point[_]=W,_++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[d]=W,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==y||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==A||L.numPointShadows!==T||L.numSpotShadows!==b||L.numSpotMaps!==I||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+I-M,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,L.directionalLength=m,L.pointLength=_,L.spotLength=y,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=A,L.numPointShadows=T,L.numSpotShadows=b,L.numSpotMaps=I,L.numLightProbes=w,i.version=jy++)}function l(c,u){let h=0,f=0,m=0,_=0,y=0,p=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let T=c[d];if(T.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(T.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function cf(n){let e=new e0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function t0(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new cf(n),e.set(r,[a])):s>=o.length?(a=new cf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r0(n,e,t){let i=new Ir,r=new Ze,s=new Ze,o=new at,a=new $s({depthPacking:Md}),l=new Ys,c={},u=t.maxTextureSize,h={[xn]:gt,[gt]:xn,[on]:on},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let _=new Sn;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Rt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let d=this.type;this.render=function(M,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),H=n.state;H.setBlending(bn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=d!==sn&&this.type===sn,G=d===sn&&this.type!==sn;for(let J=0,W=M.length;J<W;J++){let ee=M[J],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ae=z.getFrameExtents();if(r.multiply(ae),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,z.mapSize.y=s.y)),z.map===null||k===!0||G===!0){let be=this.type!==sn?{minFilter:Vt,magFilter:Vt}:{};z.map!==null&&z.map.dispose(),z.map=new nn(r.x,r.y,be),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let he=z.getViewportCount();for(let be=0;be<he;be++){let Ue=z.getViewport(be);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),H.viewport(o),z.updateMatrices(ee,be),i=z.getFrustum(),b(w,L,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===sn&&A(z,L),z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,v,R)};function A(M,w){let L=e.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new nn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,L,f,y,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,L,m,y,null)}function T(M,w,L,S){let v=null,R=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)v=R;else if(v=L.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=v.uuid,k=w.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let J=G[k];J===void 0&&(J=v.clone(),G[k]=J,w.addEventListener("dispose",I)),v=J}if(v.visible=w.visible,v.wireframe=w.wireframe,S===sn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=n.properties.get(v);H.light=L}return v}function b(M,w,L,S,v){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===sn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);let k=e.update(M),G=M.material;if(Array.isArray(G)){let J=k.groups;for(let W=0,ee=J.length;W<ee;W++){let z=J[W],ae=G[z.materialIndex];if(ae&&ae.visible){let he=T(M,ae,S,v);M.onBeforeShadow(n,M,w,L,k,he,z),n.renderBufferDirect(L,null,k,he,M,z),M.onAfterShadow(n,M,w,L,k,he,z)}}}else if(G.visible){let J=T(M,G,S,v);M.onBeforeShadow(n,M,w,L,k,J,null),n.renderBufferDirect(L,null,k,J,M,null),M.onAfterShadow(n,M,w,L,k,J,null)}}let H=M.children;for(let k=0,G=H.length;k<G;k++)b(H[k],w,L,S,v)}function I(M){M.target.removeEventListener("dispose",I);for(let L in c){let S=c[L],v=M.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var s0={[ao]:lo,[co]:fo,[uo]:po,[ai]:ho,[lo]:ao,[fo]:co,[po]:uo,[ho]:ai};function o0(n,e){function t(){let P=!1,se=new at,K=null,de=new at(0,0,0,0);return{setMask:function(j){K!==j&&!P&&(n.colorMask(j,j,j,j),K=j)},setLocked:function(j){P=j},setClear:function(j,$,fe,Pe,je){je===!0&&(j*=Pe,$*=Pe,fe*=Pe),se.set(j,$,fe,Pe),de.equals(se)===!1&&(n.clearColor(j,$,fe,Pe),de.copy(se))},reset:function(){P=!1,K=null,de.set(-1,0,0,0)}}}function i(){let P=!1,se=!1,K=null,de=null,j=null;return{setReversed:function($){if(se!==$){let fe=e.get("EXT_clip_control");$?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),se=$;let Pe=j;j=null,this.setClear(Pe)}},getReversed:function(){return se},setTest:function($){$?le(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function($){K!==$&&!P&&(n.depthMask($),K=$)},setFunc:function($){if(se&&($=s0[$]),de!==$){switch($){case ao:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case ai:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=$}},setLocked:function($){P=$},setClear:function($){j!==$&&(se&&($=1-$),n.clearDepth($),j=$)},reset:function(){P=!1,K=null,de=null,j=null,se=!1}}}function r(){let P=!1,se=null,K=null,de=null,j=null,$=null,fe=null,Pe=null,je=null;return{setTest:function(qe){P||(qe?le(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(qe){se!==qe&&!P&&(n.stencilMask(qe),se=qe)},setFunc:function(qe,Wt,un){(K!==qe||de!==Wt||j!==un)&&(n.stencilFunc(qe,Wt,un),K=qe,de=Wt,j=un)},setOp:function(qe,Wt,un){($!==qe||fe!==Wt||Pe!==un)&&(n.stencilOp(qe,Wt,un),$=qe,fe=Wt,Pe=un)},setLocked:function(qe){P=qe},setClear:function(qe){je!==qe&&(n.clearStencil(qe),je=qe)},reset:function(){P=!1,se=null,K=null,de=null,j=null,$=null,fe=null,Pe=null,je=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,m=[],_=null,y=!1,p=null,d=null,A=null,T=null,b=null,I=null,M=null,w=new We(0,0,0),L=0,S=!1,v=null,R=null,H=null,k=null,G=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=ee>=2);let ae=null,he={},be=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Je=new at().fromArray(be),q=new at().fromArray(Ue);function te(P,se,K,de){let j=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<K;fe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,j):n.texImage2D(se+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,j);return $}let ve={};ve[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(ai),Ge(!1),Ke(Ll),le(n.CULL_FACE),C(bn);function le(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function ye(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ve(P,se){return h[P]!==se?(n.bindFramebuffer(P,se),h[P]=se,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(P,se){let K=m,de=!1;if(P){K=f.get(se),K===void 0&&(K=[],f.set(se,K));let j=P.textures;if(K.length!==j.length||K[0]!==n.COLOR_ATTACHMENT0){for(let $=0,fe=j.length;$<fe;$++)K[$]=n.COLOR_ATTACHMENT0+$;K.length=j.length,de=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,de=!0);de&&n.drawBuffers(K)}function nt(P){return _!==P?(n.useProgram(P),_=P,!0):!1}let it={[On]:n.FUNC_ADD,[Jh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};it[jh]=n.MIN,it[Qh]=n.MAX;let He={[ed]:n.ZERO,[td]:n.ONE,[nd]:n.SRC_COLOR,[Fs]:n.SRC_ALPHA,[ld]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[rd]:n.DST_ALPHA,[id]:n.ONE_MINUS_SRC_COLOR,[Os]:n.ONE_MINUS_SRC_ALPHA,[ad]:n.ONE_MINUS_DST_COLOR,[sd]:n.ONE_MINUS_DST_ALPHA,[cd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[hd]:n.CONSTANT_ALPHA,[dd]:n.ONE_MINUS_CONSTANT_ALPHA};function C(P,se,K,de,j,$,fe,Pe,je,qe){if(P===bn){y===!0&&(ye(n.BLEND),y=!1);return}if(y===!1&&(le(n.BLEND),y=!0),P!==Zh){if(P!==p||qe!==S){if((d!==On||b!==On)&&(n.blendEquation(n.FUNC_ADD),d=On,b=On),qe)switch(P){case oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,I=null,M=null,w.set(0,0,0),L=0,p=P,S=qe}return}j=j||se,$=$||K,fe=fe||de,(se!==d||j!==b)&&(n.blendEquationSeparate(it[se],it[j]),d=se,b=j),(K!==A||de!==T||$!==I||fe!==M)&&(n.blendFuncSeparate(He[K],He[de],He[$],He[fe]),A=K,T=de,I=$,M=fe),(Pe.equals(w)===!1||je!==L)&&(n.blendColor(Pe.r,Pe.g,Pe.b,je),w.copy(Pe),L=je),p=P,S=!1}function bt(P,se){P.side===on?ye(n.CULL_FACE):le(n.CULL_FACE);let K=P.side===gt;se&&(K=!K),Ge(K),P.blending===oi&&P.transparent===!1?C(bn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let de=P.stencilWrite;a.setTest(de),de&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){v!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),v=P)}function Ke(P){P!==qh?(le(n.CULL_FACE),P!==R&&(P===Ll?n.cullFace(n.BACK):P===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),R=P}function ge(P){P!==H&&(W&&n.lineWidth(P),H=P)}function ke(P,se,K){P?(le(n.POLYGON_OFFSET_FILL),(k!==se||G!==K)&&(n.polygonOffset(se,K),k=se,G=K)):ye(n.POLYGON_OFFSET_FILL)}function Me(P){P?le(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function De(P){P===void 0&&(P=n.TEXTURE0+J-1),ae!==P&&(n.activeTexture(P),ae=P)}function ht(P,se,K){K===void 0&&(ae===null?K=n.TEXTURE0+J-1:K=ae);let de=he[K];de===void 0&&(de={type:void 0,texture:void 0},he[K]=de),(de.type!==P||de.texture!==se)&&(ae!==K&&(n.activeTexture(K),ae=K),n.bindTexture(P,se||ve[P]),de.type=P,de.texture=se)}function E(){let P=he[ae];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(P){Je.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Je.copy(P))}function Ee(P){q.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Te(P,se){let K=c.get(se);K===void 0&&(K=new WeakMap,c.set(se,K));let de=K.get(P);de===void 0&&(de=n.getUniformBlockIndex(se,P.name),K.set(P,de))}function ne(P,se){let de=c.get(se).get(P);l.get(se)!==de&&(n.uniformBlockBinding(se,de,P.__bindingPointIndex),l.set(se,de))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,he={},h={},f=new WeakMap,m=[],_=null,y=!1,p=null,d=null,A=null,T=null,b=null,I=null,M=null,w=new We(0,0,0),L=0,S=!1,v=null,R=null,H=null,k=null,G=null,Je.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:ye,bindFramebuffer:Ve,drawBuffers:Ae,useProgram:nt,setBlending:C,setMaterial:bt,setFlipSided:Ge,setCullFace:Ke,setLineWidth:ge,setPolygonOffset:ke,setScissorTest:Me,activeTexture:De,bindTexture:ht,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:U,texImage2D:xe,texImage3D:Z,updateUBOMapping:Te,uniformBlockBinding:ne,texStorage2D:re,texStorage3D:me,texSubImage2D:X,texSubImage3D:Y,compressedTexSubImage2D:V,compressedTexSubImage3D:_e,scissor:ce,viewport:Ee,reset:Ie}}function a0(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return m?new OffscreenCanvas(E,g):Gi("canvas")}function y(E,g,U){let X=1,Y=ht(E);if((Y.width>U||Y.height>U)&&(X=U/Math.max(Y.width,Y.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let V=Math.floor(X*Y.width),_e=Math.floor(X*Y.height);h===void 0&&(h=_(V,_e));let re=g?_(V,_e):h;return re.width=V,re.height=_e,re.getContext("2d").drawImage(E,0,0,V,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+V+"x"+_e+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function p(E){return E.generateMipmaps}function d(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,U,X,Y=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=g;if(g===n.RED&&(U===n.FLOAT&&(V=n.R32F),U===n.HALF_FLOAT&&(V=n.R16F),U===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(V=n.R8UI),U===n.UNSIGNED_SHORT&&(V=n.R16UI),U===n.UNSIGNED_INT&&(V=n.R32UI),U===n.BYTE&&(V=n.R8I),U===n.SHORT&&(V=n.R16I),U===n.INT&&(V=n.R32I)),g===n.RG&&(U===n.FLOAT&&(V=n.RG32F),U===n.HALF_FLOAT&&(V=n.RG16F),U===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(V=n.RG8UI),U===n.UNSIGNED_SHORT&&(V=n.RG16UI),U===n.UNSIGNED_INT&&(V=n.RG32UI),U===n.BYTE&&(V=n.RG8I),U===n.SHORT&&(V=n.RG16I),U===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(V=n.RGB8UI),U===n.UNSIGNED_SHORT&&(V=n.RGB16UI),U===n.UNSIGNED_INT&&(V=n.RGB32UI),U===n.BYTE&&(V=n.RGB8I),U===n.SHORT&&(V=n.RGB16I),U===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),U===n.UNSIGNED_INT&&(V=n.RGBA32UI),U===n.BYTE&&(V=n.RGBA8I),U===n.SHORT&&(V=n.RGBA16I),U===n.INT&&(V=n.RGBA32I)),g===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){let _e=Y?Sr:Be.getTransfer(X);U===n.FLOAT&&(V=n.RGBA32F),U===n.HALF_FLOAT&&(V=n.RGBA16F),U===n.UNSIGNED_BYTE&&(V=_e===Ye?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function b(E,g){let U;return E?g===null||g===Hn||g===Ki?U=n.DEPTH24_STENCIL8:g===ln?U=n.DEPTH32F_STENCIL8:g===Zi&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hn||g===Ki?U=n.DEPTH_COMPONENT24:g===ln?U=n.DEPTH_COMPONENT32F:g===Zi&&(U=n.DEPTH_COMPONENT16),U}function I(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function M(E){let g=E.target;g.removeEventListener("dispose",M),L(g),g.isVideoTexture&&u.delete(g)}function w(E){let g=E.target;g.removeEventListener("dispose",w),v(g)}function L(E){let g=i.get(E);if(g.__webglInit===void 0)return;let U=E.source,X=f.get(U);if(X){let Y=X[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(E),Object.keys(X).length===0&&f.delete(U)}i.remove(E)}function S(E){let g=i.get(E);n.deleteTexture(g.__webglTexture);let U=E.source,X=f.get(U);delete X[g.__cacheKey],o.memory.textures--}function v(E){let g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Y=0;Y<g.__webglFramebuffer[X].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[X][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=E.textures;for(let X=0,Y=U.length;X<Y;X++){let V=i.get(U[X]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(E)}let R=0;function H(){R=0}function k(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function G(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function J(E,g){let U=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){let X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,E,g);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+g)}function W(E,g){let U=i.get(E);if(E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+g)}function ee(E,g){let U=i.get(E);if(E.version>0&&U.__version!==E.version){ve(U,E,g);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+g)}function z(E,g){let U=i.get(E);if(E.version>0&&U.__version!==E.version){le(U,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+g)}let ae={[Vi]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[Bs]:n.MIRRORED_REPEAT},he={[Vt]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[xo]:n.LINEAR_MIPMAP_NEAREST,[Vn]:n.LINEAR_MIPMAP_LINEAR},be={[Ed]:n.NEVER,[Ld]:n.ALWAYS,[Ad]:n.LESS,[$l]:n.LEQUAL,[Cd]:n.EQUAL,[Pd]:n.GEQUAL,[Rd]:n.GREATER,[Id]:n.NOTEQUAL};function Ue(E,g){if(g.type===ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===xo||g.magFilter===Or||g.magFilter===Vn||g.minFilter===At||g.minFilter===xo||g.minFilter===Or||g.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ae[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ae[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ae[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,be[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Vt||g.minFilter!==Or&&g.minFilter!==Vn||g.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(E,g){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",M));let X=g.source,Y=f.get(X);Y===void 0&&(Y={},f.set(X,Y));let V=G(g);if(V!==E.__cacheKey){Y[V]===void 0&&(Y[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[V].usedTimes++;let _e=Y[E.__cacheKey];_e!==void 0&&(Y[E.__cacheKey].usedTimes--,_e.usedTimes===0&&S(g)),E.__cacheKey=V,E.__webglTexture=Y[V].texture}return U}function q(E,g,U){return Math.floor(Math.floor(E/U)/g)}function te(E,g,U,X){let V=E.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,U,X,g.data);else{V.sort((Z,ce)=>Z.start-ce.start);let _e=0;for(let Z=1;Z<V.length;Z++){let ce=V[_e],Ee=V[Z],Te=ce.start+ce.count,ne=q(Ee.start,g.width,4),Ie=q(ce.start,g.width,4);Ee.start<=Te+1&&ne===Ie&&q(Ee.start+Ee.count-1,g.width,4)===ne?ce.count=Math.max(ce.count,Ee.start+Ee.count-ce.start):(++_e,V[_e]=Ee)}V.length=_e+1;let re=n.getParameter(n.UNPACK_ROW_LENGTH),me=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Z=0,ce=V.length;Z<ce;Z++){let Ee=V[Z],Te=Math.floor(Ee.start/4),ne=Math.ceil(Ee.count/4),Ie=Te%g.width,P=Math.floor(Te/g.width),se=ne,K=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ie,P,se,K,U,X,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,me),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function ve(E,g,U){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);let Y=Je(E,g),V=g.source;t.bindTexture(X,E.__webglTexture,n.TEXTURE0+U);let _e=i.get(V);if(V.version!==_e.__version||Y===!0){t.activeTexture(n.TEXTURE0+U);let re=Be.getPrimaries(Be.workingColorSpace),me=g.colorSpace===wn?null:Be.getPrimaries(g.colorSpace),xe=g.colorSpace===wn||re===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Z=y(g.image,!1,r.maxTextureSize);Z=De(g,Z);let ce=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type),Te=T(g.internalFormat,ce,Ee,g.colorSpace,g.isVideoTexture);Ue(X,g);let ne,Ie=g.mipmaps,P=g.isVideoTexture!==!0,se=_e.__version===void 0||Y===!0,K=V.dataReady,de=I(g,Z);if(g.isDepthTexture)Te=b(g.format===ji,g.type),se&&(P?t.texStorage2D(n.TEXTURE_2D,1,Te,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Te,Z.width,Z.height,0,ce,Ee,null));else if(g.isDataTexture)if(Ie.length>0){P&&se&&t.texStorage2D(n.TEXTURE_2D,de,Te,Ie[0].width,Ie[0].height);for(let j=0,$=Ie.length;j<$;j++)ne=Ie[j],P?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ne.width,ne.height,ce,Ee,ne.data):t.texImage2D(n.TEXTURE_2D,j,Te,ne.width,ne.height,0,ce,Ee,ne.data);g.generateMipmaps=!1}else P?(se&&t.texStorage2D(n.TEXTURE_2D,de,Te,Z.width,Z.height),K&&te(g,Z,ce,Ee)):t.texImage2D(n.TEXTURE_2D,0,Te,Z.width,Z.height,0,ce,Ee,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Te,Ie[0].width,Ie[0].height,Z.depth);for(let j=0,$=Ie.length;j<$;j++)if(ne=Ie[j],g.format!==Gt)if(ce!==null)if(P){if(K)if(g.layerUpdates.size>0){let fe=Ql(ne.width,ne.height,g.format,g.type);for(let Pe of g.layerUpdates){let je=ne.data.subarray(Pe*fe/ne.data.BYTES_PER_ELEMENT,(Pe+1)*fe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Pe,ne.width,ne.height,1,ce,je)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ne.width,ne.height,Z.depth,ce,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Te,ne.width,ne.height,Z.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?K&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ne.width,ne.height,Z.depth,ce,Ee,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Te,ne.width,ne.height,Z.depth,0,ce,Ee,ne.data)}else{P&&se&&t.texStorage2D(n.TEXTURE_2D,de,Te,Ie[0].width,Ie[0].height);for(let j=0,$=Ie.length;j<$;j++)ne=Ie[j],g.format!==Gt?ce!==null?P?K&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ne.width,ne.height,ce,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Te,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ne.width,ne.height,ce,Ee,ne.data):t.texImage2D(n.TEXTURE_2D,j,Te,ne.width,ne.height,0,ce,Ee,ne.data)}else if(g.isDataArrayTexture)if(P){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Te,Z.width,Z.height,Z.depth),K)if(g.layerUpdates.size>0){let j=Ql(Z.width,Z.height,g.format,g.type);for(let $ of g.layerUpdates){let fe=Z.data.subarray($*j/Z.data.BYTES_PER_ELEMENT,($+1)*j/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Z.width,Z.height,1,ce,Ee,fe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ee,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,Z.width,Z.height,Z.depth,0,ce,Ee,Z.data);else if(g.isData3DTexture)P?(se&&t.texStorage3D(n.TEXTURE_3D,de,Te,Z.width,Z.height,Z.depth),K&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,Ee,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Te,Z.width,Z.height,Z.depth,0,ce,Ee,Z.data);else if(g.isFramebufferTexture){if(se)if(P)t.texStorage2D(n.TEXTURE_2D,de,Te,Z.width,Z.height);else{let j=Z.width,$=Z.height;for(let fe=0;fe<de;fe++)t.texImage2D(n.TEXTURE_2D,fe,Te,j,$,0,ce,Ee,null),j>>=1,$>>=1}}else if(Ie.length>0){if(P&&se){let j=ht(Ie[0]);t.texStorage2D(n.TEXTURE_2D,de,Te,j.width,j.height)}for(let j=0,$=Ie.length;j<$;j++)ne=Ie[j],P?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce,Ee,ne):t.texImage2D(n.TEXTURE_2D,j,Te,ce,Ee,ne);g.generateMipmaps=!1}else if(P){if(se){let j=ht(Z);t.texStorage2D(n.TEXTURE_2D,de,Te,j.width,j.height)}K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ee,Z)}else t.texImage2D(n.TEXTURE_2D,0,Te,ce,Ee,Z);p(g)&&d(X),_e.__version=V.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function le(E,g,U){if(g.image.length!==6)return;let X=Je(E,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);let V=i.get(Y);if(Y.version!==V.__version||X===!0){t.activeTexture(n.TEXTURE0+U);let _e=Be.getPrimaries(Be.workingColorSpace),re=g.colorSpace===wn?null:Be.getPrimaries(g.colorSpace),me=g.colorSpace===wn||_e===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Z=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!xe&&!Z?ce[$]=y(g.image[$],!0,r.maxCubemapSize):ce[$]=Z?g.image[$].image:g.image[$],ce[$]=De(g,ce[$]);let Ee=ce[0],Te=s.convert(g.format,g.colorSpace),ne=s.convert(g.type),Ie=T(g.internalFormat,Te,ne,g.colorSpace),P=g.isVideoTexture!==!0,se=V.__version===void 0||X===!0,K=Y.dataReady,de=I(g,Ee);Ue(n.TEXTURE_CUBE_MAP,g);let j;if(xe){P&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ie,Ee.width,Ee.height);for(let $=0;$<6;$++){j=ce[$].mipmaps;for(let fe=0;fe<j.length;fe++){let Pe=j[fe];g.format!==Gt?Te!==null?P?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,Pe.width,Pe.height,Te,ne,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,Ie,Pe.width,Pe.height,0,Te,ne,Pe.data)}}}else{if(j=g.mipmaps,P&&se){j.length>0&&de++;let $=ht(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Ie,$.width,$.height)}for(let $=0;$<6;$++)if(Z){P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,Te,ne,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,ce[$].width,ce[$].height,0,Te,ne,ce[$].data);for(let fe=0;fe<j.length;fe++){let je=j[fe].image[$].image;P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,je.width,je.height,Te,ne,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ie,je.width,je.height,0,Te,ne,je.data)}}else{P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,ne,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,Te,ne,ce[$]);for(let fe=0;fe<j.length;fe++){let Pe=j[fe];P?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,Te,ne,Pe.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,Ie,Te,ne,Pe.image[$])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),V.__version=Y.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ye(E,g,U,X,Y,V){let _e=s.convert(U.format,U.colorSpace),re=s.convert(U.type),me=T(U.internalFormat,_e,re,U.colorSpace),xe=i.get(g),Z=i.get(U);if(Z.__renderTarget=g,!xe.__hasExternalTextures){let ce=Math.max(1,g.width>>V),Ee=Math.max(1,g.height>>V);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,V,me,ce,Ee,g.depth,0,_e,re,null):t.texImage2D(Y,V,me,ce,Ee,0,_e,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ke(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Y,Z.__webglTexture,0,ge(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Y,Z.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(E,g,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){let X=g.depthTexture,Y=X&&X.isDepthTexture?X.type:null,V=b(g.stencilBuffer,Y),_e=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=ge(g);ke(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,V,g.width,g.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{let X=g.textures;for(let Y=0;Y<X.length;Y++){let V=X[Y],_e=s.convert(V.format,V.colorSpace),re=s.convert(V.type),me=T(V.internalFormat,_e,re,V.colorSpace),xe=ge(g);U&&ke(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,me,g.width,g.height):ke(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);let Y=X.__webglTexture,V=ge(g);if(g.depthTexture.format===Hi)ke(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(g.depthTexture.format===ji)ke(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function nt(E){let g=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Y)};X.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=X}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let X=E.texture.mipmaps;X&&X.length>0?Ae(g.__webglFramebuffer[0],E):Ae(g.__webglFramebuffer,E)}else if(U){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[X],E,!1);else{let Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,V)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(E,g,U){let X=i.get(E);g!==void 0&&ye(X.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&nt(E)}function He(E){let g=E.texture,U=i.get(E),X=i.get(g);E.addEventListener("dispose",w);let Y=E.textures,V=E.isWebGLCubeRenderTarget===!0,_e=Y.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let me=0;me<g.mipmaps.length;me++)U.__webglFramebuffer[re][me]=n.createFramebuffer()}else U.__webglFramebuffer[re]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)U.__webglFramebuffer[re]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(_e)for(let re=0,me=Y.length;re<me;re++){let xe=i.get(Y[re]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ke(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){let me=Y[re];U.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[re]);let xe=s.convert(me.format,me.colorSpace),Z=s.convert(me.type),ce=T(me.internalFormat,xe,Z,me.colorSpace,E.isXRRenderTarget===!0),Ee=ge(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,U.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)ye(U.__webglFramebuffer[re][me],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,me);else ye(U.__webglFramebuffer[re],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,me=Y.length;re<me;re++){let xe=Y[re],Z=i.get(xe);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),Ue(n.TEXTURE_2D,xe),ye(U.__webglFramebuffer,E,xe,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),p(xe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),Ue(re,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)ye(U.__webglFramebuffer[me],E,g,n.COLOR_ATTACHMENT0,re,me);else ye(U.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,re,0);p(g)&&d(re),t.unbindTexture()}E.depthBuffer&&nt(E)}function C(E){let g=E.textures;for(let U=0,X=g.length;U<X;U++){let Y=g[U];if(p(Y)){let V=A(E),_e=i.get(Y).__webglTexture;t.bindTexture(V,_e),d(V),t.unbindTexture()}}}let bt=[],Ge=[];function Ke(E){if(E.samples>0){if(ke(E)===!1){let g=E.textures,U=E.width,X=E.height,Y=n.COLOR_BUFFER_BIT,V=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),re=g.length>1;if(re)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let me=E.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);let Z=i.get(g[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,U,X,0,0,U,X,Y,n.NEAREST),l===!0&&(bt.length=0,Ge.length=0,bt.push(n.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(bt.push(V),Ge.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);let Z=i.get(g[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ge(E){return Math.min(r.maxSamples,E.samples)}function ke(E){let g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Me(E){let g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function De(E,g){let U=E.colorSpace,X=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==li&&U!==wn&&(Be.getTransfer(U)===Ye?(X!==Gt||Y!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),g}function ht(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=it,this.setupRenderTarget=He,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ke}function l0(n,e){function t(i,r=wn){let s,o=Be.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===So)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kl)return n.BYTE;if(i===zl)return n.SHORT;if(i===Zi)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===Hl)return n.ALPHA;if(i===Gl)return n.RGB;if(i===Gt)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===Wl)return n.RED;if(i===bo)return n.RED_INTEGER;if(i===Xl)return n.RG;if(i===Mo)return n.RG_INTEGER;if(i===wo)return n.RGBA_INTEGER;if(i===Br||i===kr||i===zr||i===Vr)if(o===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===Eo||i===Ao||i===Co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Io||i===Po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Io)return o===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Po)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lo||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===ko||i===zo||i===Vo||i===Ho||i===Go||i===Wo||i===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===No)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ko)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ho)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Go)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xo)return o===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hr||i===qo||i===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hr)return o===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ql||i===Yo||i===Zo||i===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Ct,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Kt({vertexShader:c0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends vn{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null,y=new dc,p=t.getContextAttributes(),d=null,A=null,T=[],b=[],I=new Ze,M=null,w=new yt;w.viewport=new at;let L=new yt;L.viewport=new at;let S=[w,L],v=new so,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=T[q];return te===void 0&&(te=new $i,T[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=T[q];return te===void 0&&(te=new $i,T[q]=te),te.getGripSpace()},this.getHand=function(q){let te=T[q];return te===void 0&&(te=new $i,T[q]=te),te.getHandSpace()};function k(q){let te=b.indexOf(q.inputSource);if(te===-1)return;let ve=T[te];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",J);for(let q=0;q<T.length;q++){let te=b[q];te!==null&&(b[q]=null,T[q].disconnect(te))}R=null,H=null,y.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,A=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,le=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=p.stencil?ji:Hi,le=p.stencil?Ki:Hn);let Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new nn(f.textureWidth,f.textureHeight,{format:Gt,type:an,depthTexture:new Pr(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new nn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:an,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(q){for(let te=0;te<q.removed.length;te++){let ve=q.removed[te],le=b.indexOf(ve);le>=0&&(b[le]=null,T[le].disconnect(ve))}for(let te=0;te<q.added.length;te++){let ve=q.added[te],le=b.indexOf(ve);if(le===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=b.length){b.push(ve),le=Ve;break}else if(b[Ve]===null){b[Ve]=ve,le=Ve;break}if(le===-1)break}let ye=T[le];ye&&ye.connect(ve)}}let W=new O,ee=new O;function z(q,te,ve){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);let le=W.distanceTo(ee),ye=te.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,Ae=ye[14]/(ye[10]-1),nt=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],He=(ye[9]-1)/ye[5],C=(ye[8]-1)/ye[0],bt=(Ve[8]+1)/Ve[0],Ge=Ae*C,Ke=Ae*bt,ge=le/(-C+bt),ke=ge*-C;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Me=Ae+ge,De=nt+ge,ht=Ge-ke,E=Ke+(le-ke),g=it*nt/De*Me,U=He*nt/De*Me;q.projectionMatrix.makePerspective(ht,E,g,U,Me,De),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ve=q.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),v.near=L.near=w.near=te,v.far=L.far=w.far=ve,(R!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,H=v.far),w.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,v.layers.mask=w.layers.mask|L.layers.mask;let le=q.parent,ye=v.cameras;ae(v,le);for(let Ve=0;Ve<ye.length;Ve++)ae(ye[Ve],le);ye.length===2?z(v,w,L):v.projectionMatrix.copy(w.projectionMatrix),he(q,v,le)};function he(q,te,ve){ve===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let be=null;function Ue(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){let ve=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let le=!1;ve.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Ae=0;Ae<ve.length;Ae++){let nt=ve[Ae],it=null;if(m!==null)it=m.getViewport(nt);else{let C=h.getViewSubImage(f,nt);it=C.viewport,Ae===0&&(e.setRenderTargetTextures(A,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(A))}let He=S[Ae];He===void 0&&(He=new yt,He.layers.enable(Ae),He.viewport=new at,S[Ae]=He),He.matrix.fromArray(nt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(nt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(it.x,it.y,it.width,it.height),Ae===0&&(v.matrix.copy(He.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(He)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let Ae=h.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let ve=0;ve<T.length;ve++){let le=b[ve],ye=T[ve];le!==null&&ye!==void 0&&ye.update(le,te,c||o)}be&&be(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}let Je=new uf;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}},_i=new rn,h0=new ut;function d0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Jl(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,A,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,A,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A=e.get(d),T=A.envMap,b=A.envMapRotation;T&&(p.envMap.value=T,_i.copy(b),_i.x*=-1,_i.y*=-1,_i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(_i)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){let A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function f0(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let b=T.program;i.uniformBlockBinding(A,b)}function c(A,T){let b=r[A.id];b===void 0&&(_(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",p));let I=T.program;i.updateUBOMapping(A,I);let M=e.render.frame;s[A.id]!==M&&(f(A),s[A.id]=M)}function u(A){let T=h();A.__bindingPointIndex=T;let b=n.createBuffer(),I=A.__size,M=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let T=r[A.id],b=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,w=b.length;M<w;M++){let L=Array.isArray(b[M])?b[M]:[b[M]];for(let S=0,v=L.length;S<v;S++){let R=L[S];if(m(R,M,S,I)===!0){let H=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],G=0;for(let J=0;J<k.length;J++){let W=k[J],ee=y(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+G,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,T,b,I){let M=A.value,w=T+"_"+b;if(I[w]===void 0)return typeof M=="number"||typeof M=="boolean"?I[w]=M:I[w]=M.clone(),!0;{let L=I[w];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return I[w]=M,!0}else if(L.equals(M)===!1)return L.copy(M),!0}return!1}function _(A){let T=A.uniforms,b=0,I=16;for(let w=0,L=T.length;w<L;w++){let S=Array.isArray(T[w])?T[w]:[T[w]];for(let v=0,R=S.length;v<R;v++){let H=S[v],k=Array.isArray(H.value)?H.value:[H.value];for(let G=0,J=k.length;G<J;G++){let W=k[G],ee=y(W),z=b%I,ae=z%ee.boundary,he=z+ae;b+=ae,he!==0&&I-he<ee.storage&&(b+=I-he),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=ee.storage}}}let M=b%I;return M>0&&(b+=I-M),A.__size=b,A.__cache={},this}function y(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){let T=A.target;T.removeEventListener("dispose",p);let b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(let A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var ta=class{constructor(e={}){let{canvas:t=Dd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=new Uint32Array(4),y=new Int32Array(4),p=null,d=null,A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,I=!1;this._outputColorSpace=vt;let M=0,w=0,L=null,S=-1,v=null,R=new at,H=new at,k=null,G=new We(0),J=0,W=t.width,ee=t.height,z=1,ae=null,he=null,be=new at(0,0,W,ee),Ue=new at(0,0,W,ee),Je=!1,q=new Ir,te=!1,ve=!1,le=new ut,ye=new ut,Ve=new O,Ae=new at,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function He(){return L===null?z:1}let C=i;function bt(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oo}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",$,!1),C===null){let D="webgl2";if(C=bt(D,x),C===null)throw bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ge,Ke,ge,ke,Me,De,ht,E,g,U,X,Y,V,_e,re,me,xe,Z,ce,Ee,Te,ne,Ie,P;function se(){Ge=new Pv(C),Ge.init(),ne=new l0(C,Ge),Ke=new wv(C,Ge,e,ne),ge=new o0(C,Ge),Ke.reverseDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),ke=new Nv(C),Me=new $y,De=new a0(C,Ge,ge,Me,Ke,ne,ke),ht=new Ev(b),E=new Iv(b),g=new zg(C),Ie=new bv(C,g),U=new Lv(C,g,ke,Ie),X=new Fv(C,U,g,ke),ce=new Uv(C,Ke,De),me=new Tv(Me),Y=new qy(b,ht,E,Ge,Ke,Ie,me),V=new d0(b,Me),_e=new Zy,re=new t0(Ge),Z=new Sv(b,ht,E,ge,X,m,l),xe=new r0(b,X,Ke),P=new f0(C,ke,Ke,ge),Ee=new Mv(C,Ge,ke),Te=new Dv(C,Ge,ke),ke.programs=Y.programs,b.capabilities=Ke,b.extensions=Ge,b.properties=Me,b.renderLists=_e,b.shadowMap=xe,b.state=ge,b.info=ke}se();let K=new fc(b,C);this.xr=K,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=Ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(W,ee,!1))},this.getSize=function(x){return x.set(W,ee)},this.setSize=function(x,D,F=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,ee=D,t.width=Math.floor(x*z),t.height=Math.floor(D*z),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(W*z,ee*z).floor()},this.setDrawingBufferSize=function(x,D,F){W=x,ee=D,z=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(be)},this.setViewport=function(x,D,F,B){x.isVector4?be.set(x.x,x.y,x.z,x.w):be.set(x,D,F,B),ge.viewport(R.copy(be).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(Ue)},this.setScissor=function(x,D,F,B){x.isVector4?Ue.set(x.x,x.y,x.z,x.w):Ue.set(x,D,F,B),ge.scissor(H.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){ge.setScissorTest(Je=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let B=0;if(x){let N=!1;if(L!==null){let Q=L.texture.format;N=Q===wo||Q===Mo||Q===bo}if(N){let Q=L.texture.type,oe=Q===an||Q===Hn||Q===Zi||Q===Ki||Q===yo||Q===So,pe=Z.getClearColor(),ue=Z.getClearAlpha(),Ce=pe.r,Re=pe.g,Se=pe.b;oe?(_[0]=Ce,_[1]=Re,_[2]=Se,_[3]=ue,C.clearBufferuiv(C.COLOR,0,_)):(y[0]=Ce,y[1]=Re,y[2]=Se,y[3]=ue,C.clearBufferiv(C.COLOR,0,y))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),F&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Z.dispose(),_e.dispose(),re.dispose(),Me.dispose(),ht.dispose(),E.dispose(),X.dispose(),Ie.dispose(),P.dispose(),Y.dispose(),K.dispose(),K.removeEventListener("sessionstart",vc),K.removeEventListener("sessionend",yc),Gn.stop()};function de(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let x=ke.autoReset,D=xe.enabled,F=xe.autoUpdate,B=xe.needsUpdate,N=xe.type;se(),ke.autoReset=x,xe.enabled=D,xe.autoUpdate=F,xe.needsUpdate=B,xe.type=N}function $(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function fe(x){let D=x.target;D.removeEventListener("dispose",fe),Pe(D)}function Pe(x){je(x),Me.remove(x)}function je(x){let D=Me.get(x).programs;D!==void 0&&(D.forEach(function(F){Y.releaseProgram(F)}),x.isShaderMaterial&&Y.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,B,N,Q){D===null&&(D=nt);let oe=N.isMesh&&N.matrixWorld.determinant()<0,pe=_f(x,D,F,B,N);ge.setMaterial(B,oe);let ue=F.index,Ce=1;if(B.wireframe===!0){if(ue=U.getWireframeAttribute(F),ue===void 0)return;Ce=2}let Re=F.drawRange,Se=F.attributes.position,Fe=Re.start*Ce,$e=(Re.start+Re.count)*Ce;Q!==null&&(Fe=Math.max(Fe,Q.start*Ce),$e=Math.min($e,(Q.start+Q.count)*Ce)),ue!==null?(Fe=Math.max(Fe,0),$e=Math.min($e,ue.count)):Se!=null&&(Fe=Math.max(Fe,0),$e=Math.min($e,Se.count));let rt=$e-Fe;if(rt<0||rt===1/0)return;Ie.setup(N,B,pe,F,ue);let ot,ze=Ee;if(ue!==null&&(ot=g.get(ue),ze=Te,ze.setIndex(ot)),N.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*He()),ze.setMode(C.LINES)):ze.setMode(C.TRIANGLES);else if(N.isLine){let we=B.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*He()),N.isLineSegments?ze.setMode(C.LINES):N.isLineLoop?ze.setMode(C.LINE_LOOP):ze.setMode(C.LINE_STRIP)}else N.isPoints?ze.setMode(C.POINTS):N.isSprite&&ze.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let we=N._multiDrawStarts,mt=N._multiDrawCounts,Xe=N._multiDrawCount,Xt=ue?g.get(ue).bytesPerElement:1,yi=Me.get(B).currentProgram.getUniforms();for(let It=0;It<Xe;It++)yi.setValue(C,"_gl_DrawID",It),ze.render(we[It]/Xt,mt[It])}else if(N.isInstancedMesh)ze.renderInstances(Fe,rt,N.count);else if(F.isInstancedBufferGeometry){let we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,mt=Math.min(F.instanceCount,we);ze.renderInstances(Fe,rt,mt)}else ze.render(Fe,rt)};function qe(x,D,F){x.transparent===!0&&x.side===on&&x.forceSinglePass===!1?(x.side=gt,x.needsUpdate=!0,qr(x,D,F),x.side=xn,x.needsUpdate=!0,qr(x,D,F),x.side=on):qr(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),d=re.get(F),d.init(D),T.push(d),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),x!==F&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let B=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){let pe=Q[oe];qe(pe,F,N),B.add(pe)}else qe(Q,F,N),B.add(Q)}),d=T.pop(),B},this.compileAsync=function(x,D,F=null){let B=this.compile(x,D,F);return new Promise(N=>{function Q(){if(B.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&B.delete(oe)}),B.size===0){N(x);return}setTimeout(Q,10)}Ge.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Wt=null;function un(x){Wt&&Wt(x)}function vc(){Gn.stop()}function yc(){Gn.start()}let Gn=new uf;Gn.setAnimationLoop(un),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(x){Wt=x,K.setAnimationLoop(x),x===null?Gn.stop():Gn.start()},K.addEventListener("sessionstart",vc),K.addEventListener("sessionend",yc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(D),D=K.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,D,L),d=re.get(x,T.length),d.init(D),T.push(d),ye.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(ye),ve=this.localClippingEnabled,te=me.init(this.clippingPlanes,ve),p=_e.get(x,A.length),p.init(),A.push(p),K.enabled===!0&&K.isPresenting===!0){let Q=b.xr.getDepthSensingMesh();Q!==null&&aa(Q,D,-1/0,b.sortObjects)}aa(x,D,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(ae,he),it=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,it&&Z.addToRenderList(p,x),this.info.render.frame++,te===!0&&me.beginShadows();let F=d.state.shadowsArray;xe.render(F,x,D),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=p.opaque,N=p.transmissive;if(d.setupLights(),D.isArrayCamera){let Q=D.cameras;if(N.length>0)for(let oe=0,pe=Q.length;oe<pe;oe++){let ue=Q[oe];bc(B,N,x,ue)}it&&Z.render(x);for(let oe=0,pe=Q.length;oe<pe;oe++){let ue=Q[oe];Sc(p,x,ue,ue.viewport)}}else N.length>0&&bc(B,N,x,D),it&&Z.render(x),Sc(p,x,D);L!==null&&w===0&&(De.updateMultisampleRenderTarget(L),De.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(b,x,D),Ie.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(d=T[T.length-1],te===!0&&me.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function aa(x,D,F,B){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){B&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ye);let oe=X.update(x),pe=x.material;pe.visible&&p.push(x,oe,pe,F,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){let oe=X.update(x),pe=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(ye)),Array.isArray(pe)){let ue=oe.groups;for(let Ce=0,Re=ue.length;Ce<Re;Ce++){let Se=ue[Ce],Fe=pe[Se.materialIndex];Fe&&Fe.visible&&p.push(x,oe,Fe,F,Ae.z,Se)}}else pe.visible&&p.push(x,oe,pe,F,Ae.z,null)}}let Q=x.children;for(let oe=0,pe=Q.length;oe<pe;oe++)aa(Q[oe],D,F,B)}function Sc(x,D,F,B){let N=x.opaque,Q=x.transmissive,oe=x.transparent;d.setupLightsView(F),te===!0&&me.setGlobalState(b.clippingPlanes,F),B&&ge.viewport(R.copy(B)),N.length>0&&Xr(N,D,F),Q.length>0&&Xr(Q,D,F),oe.length>0&&Xr(oe,D,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function bc(x,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new nn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ji:an,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));let Q=d.state.transmissionRenderTarget[B.id],oe=B.viewport||R;Q.setSize(oe.z*b.transmissionResolutionScale,oe.w*b.transmissionResolutionScale);let pe=b.getRenderTarget();b.setRenderTarget(Q),b.getClearColor(G),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),it&&Z.render(F);let ue=b.toneMapping;b.toneMapping=Mn;let Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),te===!0&&me.setGlobalState(b.clippingPlanes,B),Xr(x,F,B),De.updateMultisampleRenderTarget(Q),De.updateRenderTargetMipmap(Q),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Se=0,Fe=D.length;Se<Fe;Se++){let $e=D[Se],rt=$e.object,ot=$e.geometry,ze=$e.material,we=$e.group;if(ze.side===on&&rt.layers.test(B.layers)){let mt=ze.side;ze.side=gt,ze.needsUpdate=!0,Mc(rt,F,B,ot,ze,we),ze.side=mt,ze.needsUpdate=!0,Re=!0}}Re===!0&&(De.updateMultisampleRenderTarget(Q),De.updateRenderTargetMipmap(Q))}b.setRenderTarget(pe),b.setClearColor(G,J),Ce!==void 0&&(B.viewport=Ce),b.toneMapping=ue}function Xr(x,D,F){let B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=x.length;N<Q;N++){let oe=x[N],pe=oe.object,ue=oe.geometry,Ce=oe.group,Re=oe.material;Re.allowOverride===!0&&B!==null&&(Re=B),pe.layers.test(F.layers)&&Mc(pe,D,F,ue,Re,Ce)}}function Mc(x,D,F,B,N,Q){x.onBeforeRender(b,D,F,B,N,Q),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(b,D,F,B,x,Q),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=gt,N.needsUpdate=!0,b.renderBufferDirect(F,D,B,N,x,Q),N.side=xn,N.needsUpdate=!0,b.renderBufferDirect(F,D,B,N,x,Q),N.side=on):b.renderBufferDirect(F,D,B,N,x,Q),x.onAfterRender(b,D,F,B,N,Q)}function qr(x,D,F){D.isScene!==!0&&(D=nt);let B=Me.get(x),N=d.state.lights,Q=d.state.shadowsArray,oe=N.state.version,pe=Y.getParameters(x,N.state,Q,D,F),ue=Y.getProgramCacheKey(pe),Ce=B.programs;B.environment=x.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(x.isMeshStandardMaterial?E:ht).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",fe),Ce=new Map,B.programs=Ce);let Re=Ce.get(ue);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===oe)return Tc(x,pe),Re}else pe.uniforms=Y.getUniforms(x),x.onBeforeCompile(pe,b),Re=Y.acquireProgram(pe,ue),Ce.set(ue,Re),B.uniforms=pe.uniforms;let Se=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=me.uniform),Tc(x,pe),B.needsLights=vf(x),B.lightsStateVersion=oe,B.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function wc(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=tr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Tc(x,D){let F=Me.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function _f(x,D,F,B,N){D.isScene!==!0&&(D=nt),De.resetTextureUnits();let Q=D.fog,oe=B.isMeshStandardMaterial?D.environment:null,pe=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:li,ue=(B.isMeshStandardMaterial?E:ht).get(B.envMap||oe),Ce=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!F.morphAttributes.position,Fe=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color,rt=Mn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(rt=b.toneMapping);let ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ze=ot!==void 0?ot.length:0,we=Me.get(B),mt=d.state.lights;if(te===!0&&(ve===!0||x!==v)){let Mt=x===v&&B.id===S;me.setState(B,x,Mt)}let Xe=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==mt.state.version||we.outputColorSpace!==pe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==ue||B.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==me.numPlanes||we.numIntersection!==me.numIntersection)||we.vertexAlphas!==Ce||we.vertexTangents!==Re||we.morphTargets!==Se||we.morphNormals!==Fe||we.morphColors!==$e||we.toneMapping!==rt||we.morphTargetsCount!==ze)&&(Xe=!0):(Xe=!0,we.__version=B.version);let Xt=we.currentProgram;Xe===!0&&(Xt=qr(B,D,N));let yi=!1,It=!1,ir=!1,tt=Xt.getUniforms(),Ot=we.uniforms;if(ge.useProgram(Xt.program)&&(yi=!0,It=!0,ir=!0),B.id!==S&&(S=B.id,It=!0),yi||v!==x){ge.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),Ud(le),Fd(le),tt.setValue(C,"projectionMatrix",le)):tt.setValue(C,"projectionMatrix",x.projectionMatrix),tt.setValue(C,"viewMatrix",x.matrixWorldInverse);let Tt=tt.map.cameraPosition;Tt!==void 0&&Tt.setValue(C,Ve.setFromMatrixPosition(x.matrixWorld)),Ke.logarithmicDepthBuffer&&tt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,It=!0,ir=!0)}if(N.isSkinnedMesh){tt.setOptional(C,N,"bindMatrix"),tt.setOptional(C,N,"bindMatrixInverse");let Mt=N.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),tt.setValue(C,"boneTexture",Mt.boneTexture,De))}N.isBatchedMesh&&(tt.setOptional(C,N,"batchingTexture"),tt.setValue(C,"batchingTexture",N._matricesTexture,De),tt.setOptional(C,N,"batchingIdTexture"),tt.setValue(C,"batchingIdTexture",N._indirectTexture,De),tt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(C,"batchingColorTexture",N._colorsTexture,De));let Bt=F.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&ce.update(N,F,Xt),(It||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,tt.setValue(C,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ot.envMap.value=ue,Ot.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),It&&(tt.setValue(C,"toneMappingExposure",b.toneMappingExposure),we.needsLights&&xf(Ot,ir),Q&&B.fog===!0&&V.refreshFogUniforms(Ot,Q),V.refreshMaterialUniforms(Ot,B,z,ee,d.state.transmissionRenderTarget[x.id]),tr.upload(C,wc(we),Ot,De)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(tr.upload(C,wc(we),Ot,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(C,"center",N.center),tt.setValue(C,"modelViewMatrix",N.modelViewMatrix),tt.setValue(C,"normalMatrix",N.normalMatrix),tt.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Mt=B.uniformsGroups;for(let Tt=0,la=Mt.length;Tt<la;Tt++){let Wn=Mt[Tt];P.update(Wn,Xt),P.bind(Wn,Xt)}}return Xt}function xf(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function vf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,D,F){let B=Me.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Me.get(x.texture).__webglTexture=D,Me.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:F,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let F=Me.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};let yf=C.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){L=x,M=D,w=F;let B=!0,N=null,Q=!1,oe=!1;if(x){let ue=Me.get(x);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)De.setupRenderTarget(x);else if(ue.__hasExternalTextures)De.rebindTextures(x,Me.get(x.texture).__webglTexture,Me.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Se=x.depthTexture;if(ue.__boundDepthTexture!==Se){if(Se!==null&&Me.has(Se)&&(x.width!==Se.image.width||x.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(x)}}let Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(oe=!0);let Re=Me.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][F]:N=Re[D],Q=!0):x.samples>0&&De.useMultisampledRTT(x)===!1?N=Me.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[F]:N=Re,R.copy(x.viewport),H.copy(x.scissor),k=x.scissorTest}else R.copy(be).multiplyScalar(z).floor(),H.copy(Ue).multiplyScalar(z).floor(),k=Je;if(F!==0&&(N=yf),ge.bindFramebuffer(C.FRAMEBUFFER,N)&&B&&ge.drawBuffers(x,N),ge.viewport(R),ge.scissor(H),ge.setScissorTest(k),Q){let ue=Me.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,F)}else if(oe){let ue=Me.get(x.texture),Ce=D;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ue.__webglTexture,F,Ce)}else if(x!==null&&F!==0){let ue=Me.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ue.__webglTexture,F)}S=-1},this.readRenderTargetPixels=function(x,D,F,B,N,Q,oe,pe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){ge.bindFramebuffer(C.FRAMEBUFFER,ue);try{let Ce=x.textures[pe],Re=Ce.format,Se=Ce.type;if(!Ke.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-B&&F>=0&&F<=x.height-N&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(D,F,B,N,ne.convert(Re),ne.convert(Se),Q))}finally{let Ce=L!==null?Me.get(L).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,B,N,Q,oe,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=Me.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue)if(D>=0&&D<=x.width-B&&F>=0&&F<=x.height-N){ge.bindFramebuffer(C.FRAMEBUFFER,ue);let Ce=x.textures[pe],Re=Ce.format,Se=Ce.type;if(!Ke.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+pe),C.readPixels(D,F,B,N,ne.convert(Re),ne.convert(Se),0);let $e=L!==null?Me.get(L).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,$e);let rt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nd(C,rt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Fe),C.deleteSync(rt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){let B=Math.pow(2,-F),N=Math.floor(x.image.width*B),Q=Math.floor(x.image.height*B),oe=D!==null?D.x:0,pe=D!==null?D.y:0;De.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,oe,pe,N,Q),ge.unbindTexture()};let Sf=C.createFramebuffer(),bf=C.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,B=null,N=0,Q=null){Q===null&&(N!==0?(ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let oe,pe,ue,Ce,Re,Se,Fe,$e,rt,ot=x.isCompressedTexture?x.mipmaps[Q]:x.image;if(F!==null)oe=F.max.x-F.min.x,pe=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,Ce=F.min.x,Re=F.min.y,Se=F.isBox3?F.min.z:0;else{let Bt=Math.pow(2,-N);oe=Math.floor(ot.width*Bt),pe=Math.floor(ot.height*Bt),x.isDataArrayTexture?ue=ot.depth:x.isData3DTexture?ue=Math.floor(ot.depth*Bt):ue=1,Ce=0,Re=0,Se=0}B!==null?(Fe=B.x,$e=B.y,rt=B.z):(Fe=0,$e=0,rt=0);let ze=ne.convert(D.format),we=ne.convert(D.type),mt;D.isData3DTexture?(De.setTexture3D(D,0),mt=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(De.setTexture2DArray(D,0),mt=C.TEXTURE_2D_ARRAY):(De.setTexture2D(D,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Xe=C.getParameter(C.UNPACK_ROW_LENGTH),Xt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yi=C.getParameter(C.UNPACK_SKIP_PIXELS),It=C.getParameter(C.UNPACK_SKIP_ROWS),ir=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);let tt=x.isDataArrayTexture||x.isData3DTexture,Ot=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let Bt=Me.get(x),Mt=Me.get(D),Tt=Me.get(Bt.__renderTarget),la=Me.get(Mt.__renderTarget);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let Wn=0;Wn<ue;Wn++)tt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(x).__webglTexture,N,Se+Wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,Q,rt+Wn)),C.blitFramebuffer(Ce,Re,oe,pe,Fe,$e,oe,pe,C.DEPTH_BUFFER_BIT,C.NEAREST);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Me.has(x)){let Bt=Me.get(x),Mt=Me.get(D);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Sf),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,bf);for(let Tt=0;Tt<ue;Tt++)tt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,N,Se+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,N),Ot?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.__webglTexture,Q,rt+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mt.__webglTexture,Q),N!==0?C.blitFramebuffer(Ce,Re,oe,pe,Fe,$e,oe,pe,C.COLOR_BUFFER_BIT,C.NEAREST):Ot?C.copyTexSubImage3D(mt,Q,Fe,$e,rt+Tt,Ce,Re,oe,pe):C.copyTexSubImage2D(mt,Q,Fe,$e,Ce,Re,oe,pe);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ot?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(mt,Q,Fe,$e,rt,oe,pe,ue,ze,we,ot.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,Q,Fe,$e,rt,oe,pe,ue,ze,ot.data):C.texSubImage3D(mt,Q,Fe,$e,rt,oe,pe,ue,ze,we,ot):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Fe,$e,oe,pe,ze,we,ot.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Fe,$e,ot.width,ot.height,ze,ot.data):C.texSubImage2D(C.TEXTURE_2D,Q,Fe,$e,oe,pe,ze,we,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yi),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ir),Q===0&&D.generateMipmaps&&C.generateMipmap(mt),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,B=null,N=0){return ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,B,N)},this.initRenderTarget=function(x){Me.get(x).__webglFramebuffer===void 0&&De.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?De.setTextureCube(x,0):x.isData3DTexture?De.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?De.setTexture2DArray(x,0):De.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){M=0,w=0,L=null,ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}};var mc={async detectCapabilities(){let n={webgl2:!1,webgl1:!1,hardwareAcceleration:!1,maxTextureSize:0,devicePixelRatio:window.devicePixelRatio||1,isMobile:this.detectMobile(),isLowEnd:!1,estimatedMemory:this.estimateMemory(),gpuTier:"unknown",renderer:"unknown"};try{let e=this.testWebGL();Object.assign(n,e)}catch(e){console.warn("\u{1F50D} WebGL detection failed:",e)}return n.isLowEnd=this.isLowEndDevice(n),n.gpuTier=this.estimateGPUTier(n),console.log("\u{1F50D} Device capabilities detected:",n),n},testWebGL(){let n=document.createElement("canvas"),e=n.getContext("webgl2"),t=n.getContext("webgl")||n.getContext("experimental-webgl"),i={webgl2:!!e,webgl1:!!t,hardwareAcceleration:!1,maxTextureSize:0,renderer:"unknown"},r=e||t;return r&&(i.hardwareAcceleration=!0,i.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),i.renderer=this.getRendererInfo(r)),n.remove(),i},getRendererInfo(n){try{let e=n.getParameter(n.RENDERER);if(e&&e!=="WebGL")return console.log("\u{1F50D} Using standard RENDERER parameter:",e),e}catch{console.debug("\u{1F50D} Standard RENDERER parameter not available")}try{let e=n.getExtension("WEBGL_debug_renderer_info");if(e){let t=n.getParameter(e.UNMASKED_RENDERER_WEBGL);if(t)return console.log("\u{1F50D} Using debug renderer info (legacy):",t),t}}catch{console.debug("\u{1F50D} Debug renderer info not available (likely Firefox)")}try{let e=n.getParameter(n.VENDOR),t=n.getParameter(n.VERSION),i=n.getParameter(n.SHADING_LANGUAGE_VERSION);if(e||t){let r=`${e||"Unknown"} (${t||"WebGL"})`;return console.log("\u{1F50D} Using inferred renderer info:",r),r}}catch{console.debug("\u{1F50D} Could not infer renderer info")}return"Hardware Accelerated GPU"},detectMobile(){let n=navigator.userAgent.toLowerCase(),t=["android","iphone","ipad","ipod","mobile"].some(r=>n.includes(r)),i=window.screen.width<=768;return t||navigator.maxTouchPoints>0&&i},estimateMemory(){if(navigator.deviceMemory)return navigator.deviceMemory;let n=this.detectMobile(),e=window.screen.width*window.screen.height;return n?e>2e6?4:e>1e6?3:2:e>8e6?32:e>4e6?16:e>2e6?8:6},isLowEndDevice(n){console.log("\u{1F50D} Low-end device check for:",n);let e=n.webgl1||n.webgl2,i=[!e,n.maxTextureSize<1024,n.estimatedMemory<1].some(a=>a),r=n.renderer.toLowerCase(),s=r.includes("swiftshader")||r.includes("llvmpipe")||r.includes("software rasterizer"),o=i||s;return console.log("\u{1F50D} Low-end check results:",{hasWebGL:e,hasWebGL1:n.webgl1,hasWebGL2:n.webgl2,maxTextureSize:n.maxTextureSize,estimatedMemory:n.estimatedMemory,renderer:n.renderer,hasCriticalFailure:i,isSoftwareRendering:s,finalResult:o}),o},estimateGPUTier(n){if(n.isLowEnd)return"low";let e=n.renderer.toLowerCase(),t=["rtx","quadro","tesla","titan","radeon pro","rx 6","rx 7","geforce gtx 1","geforce gtx 2","geforce rtx","arc a"],i=["iris xe","iris plus","uhd graphics","hd graphics","gtx","radeon","vega","nvidia","amd"],r=t.some(u=>e.includes(u)),s=i.some(u=>e.includes(u)),o=n.maxTextureSize>=8192&&n.estimatedMemory>=4&&(n.webgl2||n.webgl1),a=n.maxTextureSize>=16384&&n.estimatedMemory>=8&&n.webgl2,c=[n.webgl2,n.maxTextureSize>=4096,n.estimatedMemory>=4,!n.isMobile,o].filter(Boolean).length;return console.log("\u{1F50D} GPU tier calculation:",{renderer:e,hasHighEndGpu:r,hasDecentGpu:s,hasGoodPerformance:o,hasExcellentPerformance:a,performanceCount:c,maxTextureSize:n.maxTextureSize,estimatedMemory:n.estimatedMemory}),r||a?"high":o||s||c>=4?(console.log("\u{1F3AF} Good performance detected, assigning medium tier"),"medium"):c>=3?"medium":"low"},getRecommendedQuality(n,e){if(!e||e.length===0)return null;console.log("\u{1F3AF} Quality selection for:",{gpuTier:n.gpuTier,maxTextureSize:n.maxTextureSize,estimatedMemory:n.estimatedMemory,renderer:n.renderer});let t=e.filter(r=>!(r.requiresDesktop&&n.isMobile||r.minMemory&&n.estimatedMemory<r.minMemory||r.minTextureSize&&n.maxTextureSize<r.minTextureSize));if(t.length===0)return e[e.length-1];if(n.gpuTier==="high"){let r=t[0];return console.log(`\u{1F3AF} High-end system, selecting: ${r.name}`),r}if(n.gpuTier==="medium"){let r=n.maxTextureSize>=8192?0:Math.min(1,t.length-1),s=t[r];return console.log(`\u{1F3AF} Medium system with good texture support, selecting: ${s.name}`),s}let i=t[t.length-1];return console.log(`\u{1F3AF} Conservative selection: ${i.name}`),i}};var ia=class{constructor(e){this.config=e,this.scrollY=0,this.time=0,this.current={rotationY:0,rotationX:0},this.target={rotationY:0,rotationX:0},this.bobbingConfig={verticalAmount:.025,verticalSpeed:8e-4,horizontalAmount:.008,horizontalSpeed:5e-4,...e.bobbing},this.scenicRoute=e.scenicRoute?.path||[{viewportHeight:0,rotationY:0,rotationX:0},{viewportHeight:10,rotationY:6.28,rotationX:0}],console.log("\u{1F30C} Simplified parallax system created")}update(e,t){this.scrollY=e,this.time+=t,this.updateTargetFromRoute(),this.addBobbingEffects(),this.smoothFollow()}updateTargetFromRoute(){let e=this.getViewportProgress(),t=this.interpolateScenicRoute(e);this.target.rotationY=t.rotationY,this.target.rotationX=t.rotationX}addBobbingEffects(){let e=Math.sin(this.time*this.bobbingConfig.verticalSpeed)*this.bobbingConfig.verticalAmount,t=Math.cos(this.time*this.bobbingConfig.horizontalSpeed)*this.bobbingConfig.horizontalAmount;this.target.rotationX+=Math.abs(e),this.target.rotationY+=t}smoothFollow(){this.current.rotationY+=(this.target.rotationY-this.current.rotationY)*.08,this.current.rotationX+=(this.target.rotationX-this.current.rotationX)*.08}getViewportProgress(){let e=window.innerHeight;return Math.max(0,Math.min(10,this.scrollY/e))}interpolateScenicRoute(e){if(this.scenicRoute.length===0)return{rotationY:0,rotationX:0};if(this.scenicRoute.length===1)return{rotationY:this.scenicRoute[0].rotationY,rotationX:this.scenicRoute[0].rotationX};let t=0,i=1;for(let c=0;c<this.scenicRoute.length-1;c++)if(e>=this.scenicRoute[c].viewportHeight&&e<=this.scenicRoute[c+1].viewportHeight){t=c,i=c+1;break}let r=this.scenicRoute[t],s=this.scenicRoute[i],o=s.viewportHeight-r.viewportHeight,a=e-r.viewportHeight,l=o>0?a/o:0;return{rotationY:r.rotationY+(s.rotationY-r.rotationY)*l,rotationX:r.rotationX+(s.rotationX-r.rotationX)*l}}getCurrentRotation(){return{rotationY:this.current.rotationY,rotationX:this.current.rotationX}}updateConfig(e){e.bobbing&&(this.bobbingConfig={...this.bobbingConfig,...e.bobbing}),e.scenicRoute?.path&&(this.scenicRoute=e.scenicRoute.path),console.log("\u{1F504} Parallax config updated")}};var ra=class{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.skyboxMesh=null,this.isInitialized=!1,this.isDisposed=!1,this.capabilities=null,this.config=null,this.parallaxSystem=null,this.animationId=null,this.lastFrameTime=performance.now(),this.scrollContainer=null,this.scrollListener=null,this.resizeListener=null,this.scrollY=0}async init(e,t){if(this.isDisposed)return console.warn("\u{1F30C} Cannot initialize disposed skybox manager"),!1;if(this.config=this.validateConfig(t),!this.config)return console.error("\u274C Invalid skybox configuration"),!1;try{return console.log("\u{1F30C} Initializing skybox manager..."),this.capabilities=await mc.detectCapabilities(),this.capabilities.isLowEnd?(console.log("\u{1F6AB} Low-end device detected, using CSS fallback"),this.showFallback(e),!1):(await this.initThreeJS(e),await this.loadSkybox(),this.initParallax(),this.setupEventListeners(),this.startAnimation(),this.isInitialized=!0,console.log("\u2705 Skybox manager initialized successfully"),!0)}catch(i){return console.error("\u274C Failed to initialize skybox:",i),this.showFallback(e),!1}}validateConfig(e){return!e||!e.basePath||!e.qualities?(console.error("\u274C Missing required skybox config: basePath, qualities"),null):{basePath:e.basePath,qualities:e.qualities,fallbackClass:e.fallbackClass||"skybox-fallback",scrollContainer:e.scrollContainer||".content-wrapper",parallax:e.parallax||{}}}async initThreeJS(e){this.scene=new Rr,this.camera=new yt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,0),this.renderer=new ta({antialias:!this.capabilities.isMobile,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=vt,this.renderer.toneMapping=mo,this.renderer.toneMappingExposure=1,this.renderer.domElement.className="skybox-canvas",this.renderer.domElement.style.cssText=`
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            z-index: -1 !important;
            pointer-events: none !important;
        `,e.appendChild(this.renderer.domElement)}async loadSkybox(){let e=mc.getRecommendedQuality(this.capabilities,this.config.qualities);if(!e)throw new Error("No compatible quality levels found");console.log(`\u{1F3AF} Selected quality: ${e.name}`);let t=new Dr(500,60,40),i=this.buildFallbackChain(e);for(let r of i)try{let s=this.getSkyboxPath(r);console.log(`\u{1F4E6} Loading: ${s}`);let o=await this.loadTextureMaterial(s);this.skyboxMesh=new Rt(t,o),this.scene.add(this.skyboxMesh),console.log(`\u2705 Successfully loaded ${r.name} quality skybox`);return}catch(s){console.warn(`\u26A0\uFE0F Failed to load ${r.name} quality:`,s)}throw new Error("All skybox quality levels failed to load")}buildFallbackChain(e){let t=this.config.qualities.findIndex(i=>i.name===e.name);return t===-1?this.config.qualities:this.config.qualities.slice(t)}getSkyboxPath(e){return`${this.config.basePath.replace(/\.[^/.]+$/,"")}${e.suffix}.jpg`}async loadTextureMaterial(e){return new Promise((t,i)=>{new Ur().load(e,s=>{s.wrapS=Vi,s.wrapT=en,s.minFilter=At,s.magFilter=At,s.generateMipmaps=!1,s.colorSpace=vt;let o=new hi({map:s,side:gt});t(o)},s=>{let o=(s.loaded/s.total*100).toFixed(1);console.log(`\u{1F4CA} Loading progress: ${o}%`)},s=>{i(s)})})}initParallax(){this.parallaxSystem=new ia(this.config.parallax),console.log("\u{1F30C} Parallax system initialized")}setupEventListeners(){this.scrollContainer=this.detectScrollContainer(),this.scrollListener=()=>{let e=this.scrollContainer===window?window.scrollY:this.scrollContainer.scrollTop;this.scrollY=e},this.scrollContainer.addEventListener("scroll",this.scrollListener,{passive:!0}),this.resizeListener=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))},window.addEventListener("resize",this.resizeListener)}detectScrollContainer(){if(this.config.scrollContainer){let e=document.querySelector(this.config.scrollContainer);if(e){let t=window.getComputedStyle(e);if(t.overflowY==="auto"||t.overflowY==="scroll")return e}}return window}startAnimation(){this.animationId&&cancelAnimationFrame(this.animationId);let e=()=>{this.isDisposed||(this.updateAnimation(),this.applyTransformations(),this.render(),this.animationId=requestAnimationFrame(e))};e()}updateAnimation(){let e=performance.now(),t=e-this.lastFrameTime;this.lastFrameTime=e,this.parallaxSystem&&this.parallaxSystem.update(this.scrollY,t)}applyTransformations(){if(this.skyboxMesh&&this.parallaxSystem){let e=this.parallaxSystem.getCurrentRotation();this.skyboxMesh.rotation.y=e.rotationY,this.skyboxMesh.rotation.x=e.rotationX}this.camera&&this.camera.position.setLength(1)}render(){this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}updateParallaxConfig(e){this.parallaxSystem&&this.isInitialized&&(console.log("\u{1F504} Updating parallax configuration"),this.parallaxSystem.updateConfig(e))}showFallback(e){console.log("\u{1F3A8} Showing CSS fallback background");let t=e.querySelector(".skybox-canvas");t&&t.remove(),this.config&&this.config.fallbackClass&&(document.body.classList.add(this.config.fallbackClass),console.log(`\u2705 Applied fallback class: ${this.config.fallbackClass}`))}dispose(){console.log("\u{1F9F9} Disposing skybox manager..."),this.isDisposed=!0,this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null),this.scrollListener&&this.scrollContainer&&this.scrollContainer.removeEventListener("scroll",this.scrollListener),this.resizeListener&&window.removeEventListener("resize",this.resizeListener),this.skyboxMesh&&(this.skyboxMesh.geometry&&this.skyboxMesh.geometry.dispose(),this.skyboxMesh.material&&(this.skyboxMesh.material.map&&this.skyboxMesh.material.map.dispose(),this.skyboxMesh.material.dispose&&this.skyboxMesh.material.dispose()),this.scene?.remove(this.skyboxMesh)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement?.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.config&&this.config.fallbackClass&&document.body.classList.remove(this.config.fallbackClass),this.scene=null,this.camera=null,this.renderer=null,this.skyboxMesh=null,this.scrollContainer=null,this.parallaxSystem=null,this.isInitialized=!1,console.log("\u2705 Skybox manager disposed")}};var _c=class{constructor(){this.activeManagers=new Map,this.setupEventListeners(),console.log("\u{1F309} Skybox bridge initialized")}setupEventListeners(){document.addEventListener("skybox-init",async e=>{await this.handleSkyboxInit(e)}),document.addEventListener("skybox-cleanup",e=>{this.handleSkyboxCleanup(e)}),document.addEventListener("skybox-update-parallax",e=>{this.handleParallaxUpdate(e)}),document.addEventListener("themeChanged",e=>{this.handleThemeChange(e)})}async handleSkyboxInit(e){let{config:t,container:i,componentId:r}=e.detail;console.log(`\u{1F309} Bridge: Initializing skybox for component ${r}`);try{this.cleanupManager(r);let s=new ra;await s.init(i,t)?(this.activeManagers.set(r,s),this.notifyAlpineComponent(r,"success",null),console.log(`\u2705 Bridge: Skybox initialized for component ${r}`)):(this.notifyAlpineComponent(r,"error","Skybox initialization failed (using CSS fallback)"),console.log(`\u26A0\uFE0F Bridge: Skybox failed for component ${r} (fallback mode)`))}catch(s){console.error(`\u274C Bridge: Error initializing skybox for component ${r}:`,s),this.notifyAlpineComponent(r,"error",`Skybox initialization error: ${s.message}`)}}handleSkyboxCleanup(e){let{componentId:t}=e.detail;console.log(`\u{1F309} Bridge: Cleaning up skybox for component ${t}`),this.cleanupManager(t)}handleParallaxUpdate(e){let{componentId:t,parallaxConfig:i}=e.detail;console.log(`\u{1F309} Bridge: Updating parallax for component ${t}`);let r=this.activeManagers.get(t);r?r.updateParallaxConfig(i):console.warn(`\u26A0\uFE0F Bridge: No active manager found for component ${t}`)}handleThemeChange(e){let{newTheme:t,themeData:i}=e.detail;console.log(`\u{1F309} Bridge: Theme changed to ${t}`),i?.skybox||(console.log("\u{1F309} Bridge: New theme has no skybox, cleaning up all managers"),this.cleanupAllManagers())}cleanupManager(e){let t=this.activeManagers.get(e);t&&(t.dispose(),this.activeManagers.delete(e),console.log(`\u{1F9F9} Bridge: Cleaned up manager for component ${e}`))}cleanupAllManagers(){for(let[e,t]of this.activeManagers)t.dispose(),console.log(`\u{1F9F9} Bridge: Cleaned up manager for component ${e}`);this.activeManagers.clear()}notifyAlpineComponent(e,t,i){let r=document.querySelector(`[x-id*="${e}"]`);if(r){let s=t==="success"?"skybox-ready":"skybox-failed",o=new CustomEvent(s,{detail:{componentId:e,message:i},bubbles:!1});r.dispatchEvent(o)}else{let s=new CustomEvent("skybox-status-update",{detail:{componentId:e,status:t,message:i}});document.dispatchEvent(s)}}getStatus(){return{activeManagers:this.activeManagers.size,componentIds:Array.from(this.activeManagers.keys())}}destroy(){console.log("\u{1F9F9} Bridge: Destroying skybox bridge"),this.cleanupAllManagers()}},gc=null;function sa(){return gc||(gc=new _c),gc}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sa):sa();window.currentThemeSkyboxConfig=null;var xc=class{constructor(){this.initialized=!1,this.STORAGE_KEY="selectedTheme"}async initialize(){if(!this.initialized){console.log("\u{1F30C} Initializing global skybox system...");try{await this.loadCurrentThemeSkyboxConfig(),this.setupThemeChangeListener(),this.initialized=!0,console.log("\u2705 Global skybox system initialized")}catch(e){console.warn("\u26A0\uFE0F Error initializing global skybox system:",e)}}}async loadCurrentThemeSkyboxConfig(){try{let e=this.getCurrentTheme();e?(console.log(`\u{1F30C} Loading skybox config for current theme: ${e}`),await this.loadThemeSkyboxConfig(e)):(console.log("\u{1F30C} No current theme detected"),window.currentThemeSkyboxConfig=null)}catch(e){console.warn("\u26A0\uFE0F Error loading current theme skybox config:",e),window.currentThemeSkyboxConfig=null}}getCurrentTheme(){try{let e=localStorage.getItem(this.STORAGE_KEY);if(e)return e;let t=document.documentElement.innerHTML.match(/DEFAULT_THEME = '([^']+)'/);return t?t[1]:"nordic-twilight"}catch(e){return console.warn("\u26A0\uFE0F Could not detect current theme:",e),null}}async loadThemeSkyboxConfig(e,t=null){try{let i=`/themes/${e}/skybox.json`;console.log(`\u{1F30C} Fetching skybox config: ${i}`);let r=await fetch(i);if(r.ok){let s=await r.json();console.log(`\u{1F30C} Theme ${e} has skybox configuration:`,s),window.currentThemeSkyboxConfig=this.normalizeSkyboxConfig(e,s),this.dispatchSkyboxEvent("themeHasSkybox",{themeId:e,themeData:t,skyboxConfig:window.currentThemeSkyboxConfig})}else if(r.status===404)console.log(`\u{1F30C} Theme ${e} has no skybox configuration`),window.currentThemeSkyboxConfig=null,this.dispatchSkyboxEvent("themeNoSkybox",{themeId:e,themeData:t});else throw new Error(`HTTP ${r.status}: ${r.statusText}`)}catch(i){console.warn(`\u26A0\uFE0F Could not load skybox config for theme ${e}:`,i),window.currentThemeSkyboxConfig=null,this.dispatchSkyboxEvent("themeNoSkybox",{themeId:e,themeData:t,error:i.message})}}normalizeSkyboxConfig(e,t){return t?{...t,basePath:t.basePath||`/themes/${e}/assets/skybox`,fallbackClass:t.fallbackClass||`${e}-skybox-fallback`,scrollContainer:t.scrollContainer||".content-wrapper"}:null}setupThemeChangeListener(){document.addEventListener("themeChanged",async e=>{let{newTheme:t,themeData:i}=e.detail;t&&(console.log(`\u{1F30C} Theme changed to ${t}, checking for skybox config`),await this.loadThemeSkyboxConfig(t,i))}),console.log("\u{1F30C} Theme change listener registered")}dispatchSkyboxEvent(e,t){let i=new CustomEvent(e,{detail:t,bubbles:!0});document.dispatchEvent(i)}getCurrentSkyboxConfig(){return window.currentThemeSkyboxConfig}async refreshCurrentTheme(){await this.loadCurrentThemeSkyboxConfig()}getStatus(){return{initialized:this.initialized,currentTheme:this.getCurrentTheme(),hasSkyboxConfig:!!window.currentThemeSkyboxConfig,skyboxConfig:window.currentThemeSkyboxConfig}}},m0=new xc;async function oa(){await m0.initialize()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",oa):oa();var g0=(n=null)=>{let e=Ch(n);return{...e,init(){e.init.call(this),this.setupBridgeListeners()},setupBridgeListeners(){this.$el.addEventListener("skybox-ready",t=>{this.handleSkyboxSuccess()}),this.$el.addEventListener("skybox-failed",t=>{this.handleSkyboxError(t.detail.message)}),document.addEventListener("skybox-status-update",t=>{let{componentId:i,status:r,message:s}=t.detail;i===this.$id("skybox")&&(r==="success"?this.handleSkyboxSuccess():this.handleSkyboxError(s))})}}};function mf(n){if(!n)return console.error("\u274C Alpine.js instance required for skybox component registration"),!1;try{return n.data("skybox",g0),console.log("\u2705 Skybox component registered with Alpine.js"),!0}catch(e){return console.error("\u274C Failed to register skybox component:",e),!1}}async function gf(){try{console.log("\u{1F30C} Initializing skybox supporting systems..."),sa(),await oa(),console.log("\u2705 Skybox supporting systems initialized")}catch(n){console.warn("\u26A0\uFE0F Error initializing skybox supporting systems:",n)}}console.log("\u{1F680} Loading core bundle...");document.addEventListener("alpine:init",()=>{console.log("\u{1F527} Registering core Alpine components..."),Pt.store("sidebar",{isCollapsed:!1,isMobileOpen:!1,isMobile:window.innerWidth<=768,toggleMobile(){this.isMobileOpen=!this.isMobileOpen},closeMobile(){this.isMobile&&this.isMobileOpen&&(this.isMobileOpen=!1)}}),Pt.data("sidebar",wh),Pt.data("languageSwitcher",Th),Pt.data("languageRedirector",Eh),Pt.data("themeSwitcher",Ah),mf(Pt),console.log("\u2705 Core components registered")});window.Alpine=Pt;function _0(){try{let n=document.body.getAttribute("data-required-bundles"),e=n?JSON.parse(n):[];return Array.isArray(e)?e.filter(t=>typeof t=="string"&&t.length>0):[]}catch(n){return console.warn("\u26A0\uFE0F Failed to parse required bundles, proceeding with core only:",n),[]}}async function x0(n){if(n.length===0)return Promise.resolve();console.log(`\u{1F4E6} Loading additional bundles: ${n.join(", ")}`);let e=n.map(t=>new Promise((i,r)=>{let s=document.createElement("script");s.src=`/js/${t}.js`,s.onload=()=>{console.log(`\u2705 Bundle loaded: ${t}`),i(t)},s.onerror=()=>{console.error(`\u274C Failed to load bundle: ${t}`),r(new Error(`Failed to load bundle: ${t}`))},document.head.appendChild(s)}));try{await Promise.all(e),console.log("\u{1F4E6} All bundles loaded successfully")}catch(t){console.warn("\u26A0\uFE0F Some bundles failed to load, continuing anyway:",t)}}function v0(n){if(n.length===0){console.log("\u{1F3A8} No additional bundles required, starting Alpine..."),Pt.start(),console.log("\u2705 Core bundle loaded and Alpine.js started");return}console.log(`\u23F3 Waiting for bundle components: ${n.join(", ")}`);let e=()=>{n.every(i=>{switch(i){case"qa":return window.qaComponentsReady;case"blog":return window.blogComponentsReady;case"error":return window.errorComponentsReady;default:return console.warn(`\u26A0\uFE0F Unknown bundle: ${i}`),!0}})?(console.log("\u{1F3A8} All bundle components ready, starting Alpine..."),Pt.start(),console.log("\u2705 Core bundle loaded and Alpine.js started")):setTimeout(e,50)};e(),setTimeout(()=>{Pt.version||(console.warn("\u26A0\uFE0F Bundle component timeout, starting Alpine anyway..."),Pt.start(),console.log("\u2705 Core bundle loaded and Alpine.js started (timeout fallback)"))},5e3)}async function y0(){let n=_0();try{await gf()}catch(e){console.warn("\u26A0\uFE0F Skybox system initialization failed:",e)}n.length>0?(console.log(`\u{1F3AF} Page explicitly requires bundles: ${n.join(", ")}`),await x0(n),v0(n)):(console.log("\u{1F3AF} Page requires core bundle only"),console.log("\u{1F3A8} Starting Alpine..."),Pt.start(),console.log("\u2705 Core bundle loaded and Alpine.js started"))}y0();})();
