import{S as O,i as P,s as z,K as N,e as _,t as B,k as E,c as d,a as b,h as D,d as i,m as y,b as p,g as h,J as v,L as J,M as K,n as f,N as S,x,y as C,z as j,r as T,p as q,C as G}from"../chunks/index-27a94007.js";import{H as L}from"../chunks/Header-75c9596c.js";import"../chunks/paths-1c47712a.js";function U(r){return{c:f,l:f,m:f,p:f,d:f}}function F(r){let e,t;return{c(){e=_("img"),this.h()},l(n){e=d(n,"IMG",{id:!0,src:!0,alt:!0,class:!0}),this.h()},h(){p(e,"id","img_dog"),S(e.src,t=r[2].message)||p(e,"src",t),p(e,"alt",""),p(e,"class","svelte-plc62i")},m(n,s){h(n,e,s)},p(n,s){s&1&&!S(e.src,t=n[2].message)&&p(e,"src",t)},d(n){n&&i(e)}}}function Q(r){let e,t;return{c(){e=_("p"),t=B("...")},l(n){e=d(n,"P",{});var s=b(e);t=D(s,"..."),s.forEach(i)},m(n,s){h(n,e,s),v(e,t)},p:f,d(n){n&&i(e)}}}function R(r){let e,t,n,s,o,l,u,g,$,k,w,c={ctx:r,current:null,token:null,hasCatch:!1,pending:Q,then:F,catch:U,value:2};return N(l=r[0],c),{c(){e=_("p"),t=_("button"),n=B("Surprise!"),s=E(),o=_("section"),c.block.c(),u=E(),g=_("main"),$=_("img"),this.h()},l(a){e=d(a,"P",{});var m=b(e);t=d(m,"BUTTON",{id:!0,class:!0});var A=b(t);n=D(A,"Surprise!"),A.forEach(i),m.forEach(i),s=y(a),o=d(a,"SECTION",{});var I=b(o);c.block.l(I),I.forEach(i),u=y(a),g=d(a,"MAIN",{});var M=b(g);$=d(M,"IMG",{id:!0,alt:!0,class:!0}),M.forEach(i),this.h()},h(){p(t,"id","btn"),p(t,"class","svelte-plc62i"),p($,"id","img_dog"),p($,"alt",""),p($,"class","svelte-plc62i")},m(a,m){h(a,e,m),v(e,t),v(t,n),h(a,s,m),h(a,o,m),c.block.m(o,c.anchor=null),c.mount=()=>o,c.anchor=null,h(a,u,m),h(a,g,m),v(g,$),k||(w=J(t,"click",r[1]),k=!0)},p(a,[m]){r=a,c.ctx=r,m&1&&l!==(l=r[0])&&N(l,c)||K(c,r,m)},i:f,o:f,d(a){a&&i(e),a&&i(s),a&&i(o),c.block.d(),c.token=null,c=null,a&&i(u),a&&i(g),k=!1,w()}}}async function H(){return await(await fetch("https://dog.ceo/api/breeds/image/random")).json()}function V(r,e,t){let n=H();return[n,()=>t(0,n=H())]}class W extends O{constructor(e){super(),P(this,e,V,R,z,{})}}function X(r){let e,t,n,s,o;return t=new L({props:{condition:Y}}),s=new W({}),{c(){e=_("main"),x(t.$$.fragment),n=E(),x(s.$$.fragment)},l(l){e=d(l,"MAIN",{});var u=b(e);C(t.$$.fragment,u),n=y(u),C(s.$$.fragment,u),u.forEach(i)},m(l,u){h(l,e,u),j(t,e,null),v(e,n),j(s,e,null),o=!0},p:f,i(l){o||(T(t.$$.fragment,l),T(s.$$.fragment,l),o=!0)},o(l){q(t.$$.fragment,l),q(s.$$.fragment,l),o=!1},d(l){l&&i(e),G(t),G(s)}}}let Y=2;class ne extends O{constructor(e){super(),P(this,e,null,X,z,{})}}export{ne as default};
