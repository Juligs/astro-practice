function k(){}const M=t=>t;function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function j(t){t.forEach(w)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const c of n)c(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(E(n,e))}function B(t,n,e,c){if(t){const o=g(t,n,e,c);return t[0](o)}}function g(t,n,e,c){return t[1]&&c?x(e.ctx.slice(),t[1](c(n))):e.ctx}function C(t,n,e,c){if(t[2]&&c){const o=t[2](c(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],f=Math.max(n.dirty.length,o.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function D(t,n,e,c,o,a){if(o){const f=g(n,e,c,a);t.p(f,o)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function H(t,n,e){return t.set(e),n}let i;function _(t){i=t}function y(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){y().$$.on_mount.push(t)}function J(t){y().$$.after_update.push(t)}function K(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const l=[],p=[];let s=[];const b=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function L(){return v(),m}function O(t){s.push(t)}const d=new Set;let r=0;function q(){if(r!==0)return;const t=i;do{try{for(;r<l.length;){const n=l[r];r++,_(n),z(n.$$)}}catch(n){throw l.length=0,r=0,n}for(_(null),l.length=0,r=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(l.length);for(;b.length;)b.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];s.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),s=n}export{J as a,p as b,B as c,C as d,K as e,A as f,G as g,H as h,M as i,O as j,P as k,F as l,q as m,k as n,I as o,U as p,N as q,j as r,S as s,L as t,D as u,i as v,_ as w,w as x,l as y,v as z};
