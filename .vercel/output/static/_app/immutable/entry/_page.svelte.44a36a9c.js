import{S as N,i as R,s as S,k as E,a as V,J as U,l as $,m as k,h as f,c as B,K as X,n as m,b as T,G as w,L as Q,M as W,N as _e,H as L,O as de,I as q,w as fe,C as Y,D as Z,E as ee,F as te,g as D,d as C,q as O,r as A,y as z,z as F,A as H,f as se,P as me,B as J,v as le,e as ne,u as ge}from"../chunks/index.2e573ba9.js";import{w as ue}from"../chunks/index.d6b20771.js";function pe(){const{subscribe:a,set:e,update:t}=ue([]);return{subscribe:a,addMessage:s=>t(n=>[...n,s])}}function be(){const{subscribe:a,set:e,update:t}=ue(!1);return{subscribe:a,setLoading:s=>e(s)}}const G=be(),P=pe();function ve(a){let e,t,s,n,l,r,u,h;return{c(){e=E("form"),t=E("textarea"),s=V(),n=E("button"),l=U("svg"),r=U("path"),this.h()},l(p){e=$(p,"FORM",{class:!0});var i=k(e);t=$(i,"TEXTAREA",{class:!0,placeholder:!0}),k(t).forEach(f),s=B(i),n=$(i,"BUTTON",{class:!0});var c=k(n);l=X(c,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var _=k(l);r=X(_,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),k(r).forEach(f),_.forEach(f),c.forEach(f),i.forEach(f),this.h()},h(){m(t,"class","textarea textarea-bordered resize-none w-full h-16"),m(t,"placeholder","Вопрос для чада..."),m(r,"stroke-linecap","round"),m(r,"stroke-linejoin","round"),m(r,"d","M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"),m(l,"xmlns","http://www.w3.org/2000/svg"),m(l,"fill","none"),m(l,"viewBox","0 0 24 24"),m(l,"stroke-width","1.5"),m(l,"stroke","currentColor"),m(l,"class","w-4 h-4"),m(n,"class","btn btn-square btn-sm"),m(e,"class","flex items-center gap-4 max-w-lg w-full")},m(p,i){T(p,e,i),w(e,t),Q(t,a[0]),a[5](t),w(e,s),w(e,n),w(n,l),w(l,r),u||(h=[W(t,"input",a[4]),W(e,"submit",_e(a[2]))],u=!0)},p(p,[i]){i&1&&Q(t,p[0])},i:L,o:L,d(p){p&&f(e),a[5](null),u=!1,de(h)}}}function ke(a,e,t){let s;q(a,P,c=>t(6,s=c));let{scrollToDiv:n}=e,l="",r;function u(){setTimeout(function(){n.scrollIntoView({behavior:"smooth"})},100)}const h=async()=>{G.setLoading(!0),P.addMessage({role:"user",content:l}),t(0,l=""),u();const _=await(await fetch("/",{method:"POST",body:JSON.stringify({messages:s})})).json();P.addMessage(_),u(),G.setLoading(!1)};function p(){l=this.value,t(0,l)}function i(c){fe[c?"unshift":"push"](()=>{r=c,t(1,r)})}return a.$$set=c=>{"scrollToDiv"in c&&t(3,n=c.scrollToDiv)},[l,r,h,n,p,i]}class we extends N{constructor(e){super(),R(this,e,ke,ve,S,{scrollToDiv:3})}}const Ee=a=>({}),ae=a=>({}),$e=a=>({}),re=a=>({});function Te(a){let e,t,s,n,l,r;const u=a[2].role,h=Y(u,a,a[1],re),p=a[2].content,i=Y(p,a,a[1],ae);return{c(){e=E("div"),t=E("div"),h&&h.c(),s=V(),n=E("div"),i&&i.c(),this.h()},l(c){e=$(c,"DIV",{class:!0});var _=k(e);t=$(_,"DIV",{class:!0});var I=k(t);h&&h.l(I),I.forEach(f),s=B(_),n=$(_,"DIV",{class:!0});var x=k(n);i&&i.l(x),x.forEach(f),_.forEach(f),this.h()},h(){m(t,"class","chat-header "),m(n,"class","chat-bubble "),m(e,"class",l="chat chat-"+(a[0]?"start":"end"))},m(c,_){T(c,e,_),w(e,t),h&&h.m(t,null),w(e,s),w(e,n),i&&i.m(n,null),r=!0},p(c,[_]){h&&h.p&&(!r||_&2)&&Z(h,u,c,c[1],r?te(u,c[1],_,$e):ee(c[1]),re),i&&i.p&&(!r||_&2)&&Z(i,p,c,c[1],r?te(p,c[1],_,Ee):ee(c[1]),ae),(!r||_&1&&l!==(l="chat chat-"+(c[0]?"start":"end")))&&m(e,"class",l)},i(c){r||(D(h,c),D(i,c),r=!0)},o(c){C(h,c),C(i,c),r=!1},d(c){c&&f(e),h&&h.d(c),i&&i.d(c)}}}function De(a,e,t){let{$$slots:s={},$$scope:n}=e,{start:l}=e;return a.$$set=r=>{"start"in r&&t(0,l=r.start),"$$scope"in r&&t(1,n=r.$$scope)},[l,n,s]}class xe extends N{constructor(e){super(),R(this,e,De,Te,S,{start:0})}}function ye(a){let e,t,s,n,l;return{c(){e=E("div"),t=E("div"),s=O("Chad thinking..."),n=V(),l=E("div"),this.h()},l(r){e=$(r,"DIV",{class:!0});var u=k(e);t=$(u,"DIV",{class:!0});var h=k(t);s=A(h,"Chad thinking..."),h.forEach(f),n=B(u),l=$(u,"DIV",{class:!0}),k(l).forEach(f),u.forEach(f),this.h()},h(){m(t,"class","chat-header "),m(l,"class","chat-bubble bg-gray-700 w-52 h-20"),m(e,"class","chat chat-start animate-pulse")},m(r,u){T(r,e,u),w(e,t),w(t,s),w(e,n),w(e,l)},p:L,i:L,o:L,d(r){r&&f(e)}}}class Ce extends N{constructor(e){super(),R(this,e,null,ye,S,{})}}function oe(a,e,t){const s=a.slice();return s[4]=e[t].content,s[5]=e[t].role,s[7]=t,s}function Ie(a){let e;return{c(){e=O("Chad")},l(t){e=A(t,"Chad")},m(t,s){T(t,e,s)},d(t){t&&f(e)}}}function Me(a){let e;return{c(){e=O("you")},l(t){e=A(t,"you")},m(t,s){T(t,e,s)},d(t){t&&f(e)}}}function Ve(a){let e;function t(l,r){return l[5]==="user"?Me:Ie}let s=t(a),n=s(a);return{c(){n.c(),e=ne()},l(l){n.l(l),e=ne()},m(l,r){n.m(l,r),T(l,e,r)},p(l,r){s!==(s=t(l))&&(n.d(1),n=s(l),n&&(n.c(),n.m(e.parentNode,e)))},d(l){n.d(l),l&&f(e)}}}function Be(a){let e=a[4]+"",t;return{c(){t=O(e)},l(s){t=A(s,e)},m(s,n){T(s,t,n)},p(s,n){n&2&&e!==(e=s[4]+"")&&ge(t,e)},d(s){s&&f(t)}}}function ce(a){let e,t;return e=new xe({props:{start:a[7]%2!==0,$$slots:{content:[Be],role:[Ve]},$$scope:{ctx:a}}}),{c(){z(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},p(s,n){const l={};n&258&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){J(e,s)}}}function ie(a){let e,t;return e=new Ce({}),{c(){z(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,n){H(e,s,n),t=!0},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){C(e.$$.fragment,s),t=!1},d(s){J(e,s)}}}function Le(a){let e,t,s,n,l,r,u,h,p,i,c,_,I,x=a[1],d=[];for(let o=0;o<x.length;o+=1)d[o]=ce(oe(a,x,o));const he=o=>C(d[o],1,1,()=>{d[o]=null});let b=a[2]&&ie();return i=new we({props:{scrollToDiv:a[0]}}),{c(){e=E("header"),t=E("h1"),s=O("Chad GPT 👺"),n=V(),l=E("main"),r=E("div");for(let o=0;o<d.length;o+=1)d[o].c();u=V(),b&&b.c(),h=V(),p=E("footer"),z(i.$$.fragment),c=V(),_=E("div"),this.h()},l(o){e=$(o,"HEADER",{class:!0});var g=k(e);t=$(g,"H1",{class:!0});var y=k(t);s=A(y,"Chad GPT 👺"),y.forEach(f),g.forEach(f),n=B(o),l=$(o,"MAIN",{class:!0});var v=k(l);r=$(v,"DIV",{});var M=k(r);for(let j=0;j<d.length;j+=1)d[j].l(M);u=B(M),b&&b.l(M),M.forEach(f),v.forEach(f),h=B(o),p=$(o,"FOOTER",{class:!0});var K=k(p);F(i.$$.fragment,K),K.forEach(f),c=B(o),_=$(o,"DIV",{}),k(_).forEach(f),this.h()},h(){m(t,"class","text-3xl font-bold"),m(e,"class","max-w-lg mx-auto mb-10"),m(l,"class","min-h-screen max-w-lg mx-auto mb-24"),m(p,"class","bg-base-100 w-full h-24 fixed bottom-0 left-1/2 transform -translate-x-1/2 flex align-center justify-center")},m(o,g){T(o,e,g),w(e,t),w(t,s),T(o,n,g),T(o,l,g),w(l,r);for(let y=0;y<d.length;y+=1)d[y]&&d[y].m(r,null);w(r,u),b&&b.m(r,null),T(o,h,g),T(o,p,g),H(i,p,null),T(o,c,g),T(o,_,g),a[3](_),I=!0},p(o,[g]){if(g&2){x=o[1];let v;for(v=0;v<x.length;v+=1){const M=oe(o,x,v);d[v]?(d[v].p(M,g),D(d[v],1)):(d[v]=ce(M),d[v].c(),D(d[v],1),d[v].m(r,u))}for(le(),v=x.length;v<d.length;v+=1)he(v);se()}o[2]?b?g&4&&D(b,1):(b=ie(),b.c(),D(b,1),b.m(r,null)):b&&(le(),C(b,1,1,()=>{b=null}),se());const y={};g&1&&(y.scrollToDiv=o[0]),i.$set(y)},i(o){if(!I){for(let g=0;g<x.length;g+=1)D(d[g]);D(b),D(i.$$.fragment,o),I=!0}},o(o){d=d.filter(Boolean);for(let g=0;g<d.length;g+=1)C(d[g]);C(b),C(i.$$.fragment,o),I=!1},d(o){o&&f(e),o&&f(n),o&&f(l),me(d,o),b&&b.d(),o&&f(h),o&&f(p),J(i),o&&f(c),o&&f(_),a[3](null)}}}function Oe(a,e,t){let s,n;q(a,P,u=>t(1,s=u)),q(a,G,u=>t(2,n=u));let l;function r(u){fe[u?"unshift":"push"](()=>{l=u,t(0,l)})}return[l,s,n,r]}class Ne extends N{constructor(e){super(),R(this,e,Oe,Le,S,{})}}export{Ne as default};