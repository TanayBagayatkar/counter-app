(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),u=n(4),r=n.n(u),i=(n(9),n(2)),s=(n(10),n(0));var o=function(t){var e=Object(a.useState)(1),n=Object(i.a)(e,2),c=n[0],u=n[1],r=Object(a.useState)(1),o=Object(i.a)(r,2),l=o[0],b=(o[1],Object(a.useState)(1e3)),d=Object(i.a)(b,2),j=d[0];d[1],Object(a.useEffect)((function(){c===j&&(alert("Reached Maximum Counter Value"),u(c-1)),c<l&&(alert("Reached at Start of Counter"),u(1));var t=document.getElementById("txt"),e=document.getElementById("container");c>99?(t.style.width="38px",e.style.width="200px"):(t.style.width="30px",e.style.width="180px")}),[c,l,j]);var p=function(t){return function(){var e=Number(t);isNaN(e)?u(l):u(t)}};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{id:"container",className:"container",children:[Object(s.jsx)("input",{type:"button",onClick:p(c-1),disabled:c<=l,className:"minus-button",value:"-"}),Object(s.jsx)("input",{id:"txt",className:"num-input",onChange:function(t){var e=Number(t.target.value);isNaN(e)?alert("Please enter a valid number"):e>j?alert("Value cannot be greater than ".concat(j)):u(e)},value:c}),Object(s.jsx)("input",{type:"button",onClick:p(c+1),disabled:c>=j,className:"plus-button",value:"+"})]})})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5ab2b962.chunk.js.map