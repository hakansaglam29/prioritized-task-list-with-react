(this["webpackJsonpprioritized-task-list-with-react"]=this["webpackJsonpprioritized-task-list-with-react"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(19),a=c.n(s),r=(c(25),c(3)),o=c(2),l=c(4),j=(c(26),c(0)),d=Object(n.createContext)(),b=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(1e4),r=Object(l.a)(a,2),o=r[0],b=r[1];Object(n.useEffect)((function(){u()}),[]),Object(n.useEffect)((function(){h()}),[i]);var h=function(){localStorage.setItem("tasks",JSON.stringify(i)),localStorage.setItem("lastId",JSON.stringify(o))},u=function(){if(null===localStorage.getItem("tasks"))localStorage.setItem("tasks",JSON.stringify([])),localStorage.setItem("lastId",JSON.stringify(1e4));else{var e=JSON.parse(localStorage.getItem("tasks")),t=JSON.parse(localStorage.getItem("lastId"));s(e),b(t)}};return Object(j.jsx)(d.Provider,{value:{value1:[i,s],value2:[o,b]},children:e.children})},h=function(){var e=i.a.useContext(d).value1,t=Object(l.a)(e,1)[0],c=0;return t.map((function(e){return e.completed&&c++,e})),Object(j.jsxs)("nav",{className:"navBar",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("h1",{className:"btn btn-info",children:"Home"})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/5",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"badge badge-warning",children:["All : ",t.length]})}),Object(j.jsxs)("div",{className:"badge badge-danger",children:["Done : ",c," "]})]})},u=(c(33),function(){var e=Object(n.useContext)(d).value1,t=Object(l.a)(e,1)[0],c=0,i=0,s=0,a=0;return t.map((function(e){return 1===e.categorie&&c++,2===e.categorie&&i++,3===e.categorie&&s++,4===e.categorie&&a++,e})),Object(j.jsxs)("div",{className:"HomePage",children:[Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/1",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup UrgentImp",children:[Object(j.jsx)("h5",{children:"Urgent & Important"}),Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-secondary",children:c})})]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/2",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup notUrgentImp",children:[Object(j.jsx)("h5",{children:"Important"}),Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-secondary",children:i})})]})})]}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none"},children:Object(j.jsx)("div",{className:"AddHome",children:Object(j.jsx)("h1",{children:" + "})})}),Object(j.jsxs)("div",{className:"TaskGroupRow",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/3",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup UrgentNotImp",children:[Object(j.jsx)("h5",{children:"Urgent"}),Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-secondary",children:s})})]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/4",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsxs)("div",{className:"TaskGroup notUrgentNotImp",children:[Object(j.jsx)("h5",{children:"others"}),Object(j.jsx)("h4",{children:Object(j.jsx)("span",{className:"badge rounded-pill bg-secondary",children:a})})]})})]}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/5",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"badge badge-warning",style:{minWidth:"90vw",minHeight:"10vh",paddingTop:"3.5vh",marginTop:"10px"},children:["All : ",t.length]})})]})}),O=(c(34),c(12)),x=function(e){var t=e.cat,c=Object(n.useContext)(d).value1,i=Object(l.a)(c,2),s=i[0],a=i[1],r=s.map((function(e){var c;if(e.categorie===t||5===t)return c=e.completed&&"checked",Object(j.jsxs)("div",{className:"taskrow",children:[Object(j.jsx)("li",{className:c,onClick:function(){return t=e.id,void a(Object(O.a)(s).map((function(e){return e.id===t&&(e.completed=!e.completed),e})));var t},children:e.title},e.id),Object(j.jsx)("p",{onClick:function(){return t=e.id,void a(Object(O.a)(s).filter((function(e){return e.id!==t})));var t},className:"formButton",style:{minWidth:"3vw",padding:"1vw",backgroundColor:"#ec5858",color:"whitesmoke"},children:" del  "})]})}));return Object(j.jsx)("ul",{id:"myUL",children:r})},m=function(){var e=Object(n.useContext)(d).value1,t=Object(l.a)(e,1)[0],c=0,i=0,s=0,a=0;return t.map((function(e){return 1===e.categorie&&c++,2===e.categorie&&i++,3===e.categorie&&s++,4===e.categorie&&a++,e})),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/1",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#99CC00"},children:["Urgent & Important : ",c]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/2",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#36A4DD"},children:["Important :",i]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/3",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#FF9F00"},children:["Urgent : ",s]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/4",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"formButton link",style:{backgroundColor:"#FF4D4E"},children:["others : ",a]})}),Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/5",style:{textDecoration:"none"},children:Object(j.jsxs)("div",{className:"badge badge-warning",style:{minWidth:"45vw",minHeight:"10vh",paddingTop:"3.5vh",marginTop:"10px"},children:["All : ",t.length]})})]})},p=function(e){var t=e.match,c=Number(t.params.cat),n={color:"#d8c292",fontSize:"calc(15px + 2vmin)"};return Object(j.jsxs)("div",{className:"taskListContainer",children:[1===c?Object(j.jsx)("p",{style:n,children:"Urgent & Important"}):2===c?Object(j.jsx)("p",{style:n,children:"Important"}):3===c?Object(j.jsx)("p",{style:n,children:"Urgent"}):4===c?Object(j.jsx)("p",{style:n,children:"Others"}):Object(j.jsx)("p",{style:n,children:"All Tasks"}),Object(j.jsx)(x,{cat:c}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)(r.b,{to:"/prioritized-task-list-with-react/new-task",style:{textDecoration:"none",color:"whitesmoke"},children:Object(j.jsx)("button",{className:"formButton",style:{backgroundColor:"#54e346",color:"#aa3a3a"},children:"Add"})}),Object(j.jsx)(m,{})]})]})},g=(c(35),function(){var e=Object(n.useContext)(d),t=e.value1,c=e.value2,i=Object(l.a)(t,2),s=i[0],a=i[1],r=Object(l.a)(c,2),o=r[0],b=r[1],h=Object(n.useState)(""),u=Object(l.a)(h,2),x=u[0],p=u[1],g=Object(n.useState)(""),k=Object(l.a)(g,2),v=k[0],f=k[1],w=Object(n.useState)(null),N=Object(l.a)(w,2),y=N[0],C=N[1],I=Object(n.useState)(!1),S=Object(l.a)(I,2),D=S[0],z=S[1],T=Object(n.useState)(!1),B=Object(l.a)(T,2),U=B[0],F=B[1],A=D?"formButton clicked ":"formButton",J=U?"formButton clicked ":"formButton";Object(n.useEffect)((function(){C(D&&U?1:!D&&U?2:D&&!U?3:4)}),[D,U]);return Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=[].concat(Object(O.a)(s),[{id:o,title:x,text:v,categorie:y,completed:!1}]);a(t),b(o+1),p(""),f(""),z(!1),F(!1)},children:[Object(j.jsx)("input",{className:"newTaskInput",type:"text",name:"title",value:x,placeholder:"New Task Title",onChange:function(e){p(e.target.value)},required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:A,onClick:function(){z(!D)},children:"Urgent"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:J,onClick:function(){F(!U)},children:"Important"}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"newTaskDetail",name:"newTaskDetail",id:"taskDetail",value:v,cols:"24",rows:"2",placeholder:"New Task details...",onChange:function(e){f(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"formButton",style:{backgroundColor:"#54e346",color:"#aa3a3a"},children:"Add"})]}),Object(j.jsx)("br",{}),Object(j.jsx)(m,{})]})});var k=function(){return Object(j.jsx)(b,{children:Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/",exact:!0,component:u}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/new-task",component:g}),Object(j.jsx)(o.a,{path:"/prioritized-task-list-with-react/:cat",component:p})]})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};c(36);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.47fd5513.chunk.js.map