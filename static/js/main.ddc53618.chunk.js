(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,n){e.exports=n(95)},73:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(59),o=n.n(c),l=(n(73),n(10)),i=n(143),u=n(144),s=n(145);var f=function(e){var t=e.note,n=e.setStart;return r.a.createElement(i.a,{display:"inline-block",onClick:function(){n(!0)}},r.a.createElement(u.a,{sx:{backgroundColor:"#415986ff",borderRadius:"50%",minWidth:"20vw",minHeight:"20vw"}},r.a.createElement(s.a,{sx:{fontSize:"25vh",color:"#FBF3EAff",display:"flex",justifyContent:"center",alignItems:"center"}},t)))},m=n(142),v=n(138),d=n(139),E=n(63),b=n.n(E),j=n(83),p=n.n(j),O=n(39),g=function(e){var t=e.collapsed,n=e.setTimerTotal,c=e.setTimerInterval,o=Object(a.useState)(t),i=Object(l.a)(o,2),u=i[0],s=i[1],f=Object(a.useState)(900),m=Object(l.a)(f,2),E=m[0],j=m[1],g=Object(a.useState)(30),S=Object(l.a)(g,2),h=S[0],I=S[1],C=function(e){n(e),j(e)},T=function(e){c(e),I(e)};return r.a.createElement(O.c,{collapsed:u,style:{height:"100%",color:"#658D87ff"}},r.a.createElement(O.a,{renderExpandIcon:function(){return null}},r.a.createElement(O.b,{onClick:function(){s(!u)}},r.a.createElement(b.a,null)),r.a.createElement(O.d,{icon:r.a.createElement(p.a,null),label:"Ajustes del Reloj"},r.a.createElement(O.b,null,r.a.createElement(v.a,{value:E/60,label:"Tiempo Total",variant:"standard",InputProps:{endAdornment:r.a.createElement(d.a,{position:"start"},"minutos")},onChange:function(e){var t=parseFloat(e.target.value);isNaN(t)?C(0):C(60*t)}})),r.a.createElement(O.b,null,r.a.createElement(v.a,{value:h,label:"Intervalo",variant:"standard",InputProps:{endAdornment:r.a.createElement(d.a,{position:"start"},"segundos")},onChange:function(e){var t=parseInt(e.target.value);isNaN(t)?T(0):T(t)}})))))};var S=function(e){var t=e.timerTotal,n=e.timerInterval,c=e.start,o=e.removeNote,i=e.notes,u=e.setCurrentNote,s=Object(a.useState)(t),f=Object(l.a)(s,2),m=f[0],v=f[1],d=Object(a.useState)(c),E=Object(l.a)(d,2),b=E[0],j=E[1];return Object(a.useEffect)(function(){j(c)},[c]),Object(a.useEffect)(function(){v(t)},[t]),Object(a.useEffect)(function(){if(b){var e=setInterval(function(){v(function(e){return e-1})},1e3);return function(){return clearInterval(e)}}},[b]),Object(a.useEffect)(function(){if(b){var e=setInterval(function(){var e=Math.floor(Math.random()*i.length),t=i[e];o(t),u(t)},1e3*n);return function(){return clearInterval(e)}}},[n,b]),Object(a.useEffect)(function(){m<=0&&j(!1)},[m,n]),m>0?r.a.createElement("div",{style:{fontSize:"7vh",color:"#415986ff"}},function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60,r=t.toString().padStart(2,"0"),c=n.toString().padStart(2,"0"),o=a.toString().padStart(2,"0");return"".concat(r,":").concat(c,":").concat(o)}(m)):null},h=["A","B","C","D","E","F","G","A\u266f","B\u266f","C\u266f","D\u266f","E\u266f","F\u266f","G\u266f","A\u266d","B\u266d","C\u266d","D\u266d","E\u266d","F\u266d","G\u266d"],I=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(900),i=Object(l.a)(o,2),u=i[0],s=i[1],v=Object(a.useState)(30),d=Object(l.a)(v,2),E=d[0],b=d[1],j=Object(a.useState)(h),p=Object(l.a)(j,2),O=p[0],I=p[1],C=Object(a.useState)("\ud834\udd1e"),T=Object(l.a)(C,2),F=T[0],x=T[1],w=function(e){var t=O.filter(function(t){return t!==e});I(t)};return Object(a.useEffect)(function(){var e=function(e){!function(e){if("Space"===e.code){c(!0);var t=Math.floor(Math.random()*O.length),n=O[t];w(n),x(n)}}(e)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}},[]),r.a.createElement(m.a,{container:!0,sx:{height:"100vh",backgroundColor:"#FBF3EAff"}},r.a.createElement(m.a,{item:!0,xs:2},r.a.createElement(g,{collapsed:!0,timerTotal:u,timerInterval:E,setTimerTotal:s,setTimerInterval:b})),r.a.createElement(m.a,{item:!0,xs:8,sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(f,{note:F,setStart:c}),r.a.createElement(S,{timerTotal:u,timerInterval:E,start:n,removeNote:w,notes:O,setCurrentNote:x})))};var C=function(){return r.a.createElement(I,null)},T=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,137)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),T()}},[[65,3,2]]]);
//# sourceMappingURL=main.ddc53618.chunk.js.map