(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:[Object(u.jsx)("p",{children:r}),Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})]})},d=n(10),j=n(6),l=n.n(j),b=n(8),h=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=VUPyMuIAA0hApu5a5KF1FByyhgyYdiKL&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__bounce animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__bounce animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(m,Object(d.a)({},e),e.id)}))})]})},O=function(e){var t=e.defaultCategories,n=void 0===t?[]:t,c=Object(a.useState)(n),r=Object(i.a)(c,2),s=r[0],d=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Search"}),Object(u.jsx)("p",{children:"Escriba para visualizar lo que desee ver"}),Object(u.jsx)(o,{setCategories:d}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:s.map((function(e){return Object(u.jsx)(f,{category:e},e)}))}),Object(u.jsxs)("div",{class:"footer",children:["Made with \u2764, by ",Object(u.jsx)("a",{href:"https://github.com/rodrigomp88",children:"Rodrigo"})]})]})};n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.be9cf79e.chunk.js.map