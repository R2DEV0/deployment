(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){e.exports=a(54)},27:function(e,t,a){},28:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),o=a.n(c),i=(a(27),a(28),a(4)),r=a(2),s=a(3),u=a.n(s),m=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),m=Object(r.a)(s,2),d=m[0],p=m[1],b=Object(n.useState)([]),h=Object(r.a)(b,2),f=h[0],E=h[1],g=Object(n.useState)(""),y=Object(r.a)(g,2),j=y[0],v=y[1],O=Object(n.useState)(""),S=Object(r.a)(O,2),k=(S[0],S[1],Object(n.useState)("")),x=Object(r.a)(k,2);x[0],x[1];return l.a.createElement("div",{className:"container"},l.a.createElement(i.a,{to:"/"},"Back to Dashboard"),l.a.createElement("div",{className:"form",style:{marginTop:"20px"}},l.a.createElement("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),u.a.post("http://localhost:8000/api/projects",t).then((function(e){Object(i.c)("/")})).catch((function(e){for(var t=e.response.data.errors,a=[],n=0,l=Object.keys(t);n<l.length;n++){var c=l[n];a.push(t[c].message)}E(a)}))}(e,{name:c,due_date:d})}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Project: "),l.a.createElement("input",{type:"text",name:"name",onChange:function(e){o(e.target.value),e.target.value.length<3?v("Project name must have at least 3 characters."):e.target.value.length>2&&v("")}})),j?l.a.createElement("p",{style:{color:"red"}},j):"",l.a.createElement("div",null,l.a.createElement("lable",{htmlFor:"due_date"},"Due Date: "),l.a.createElement("input",{type:"date",name:"due_date",onChange:function(e){return p(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary btn-md",style:{marginTop:"20px"}},"Submit"))),f.map((function(e,t){return l.a.createElement("p",{style:{color:"red"},key:t},e)})))},d=a(21),p=a(8),b=(a(52),function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),m=Object(r.a)(s,2),b=m[0],h=m[1],f=Object(n.useState)({}),E=Object(r.a)(f,2),g=E[0],y=E[1],j=Object(n.useState)({}),v=Object(r.a)(j,2),O=v[0],S=v[1],k=Object(n.useState)({}),x=Object(r.a)(k,2),C=x[0],_=x[1];Object(n.useEffect)((function(){var e=[],t=[],a=[];u.a.get("http://localhost:8000/api/projects").then((function(n){o(n.data),n.data.map((function(n,l){!1===n.isStarted?e.push(n):1==n.isStarted&&!1===n.isComplete?t.push(n):1==n.isComplete&&!0===n.isStarted&&a.push(n)})),_(e),S(t),y(a),w(),h(!0)}))}),[]);var w=function(){var e=[],t=[],a=[];u.a.get("http://localhost:8000/api/projects").then((function(n){o(n.data),n.data.map((function(n,l){!1===n.isStarted?e.push(n):1==n.isStarted&&!1===n.isComplete||null===n.isComplete?t.push(n):1==n.isComplete&&a.push(n)})),_(e),S(t),y(a),h(!0)}))},N=function(e,t,a,n,l,i){u.a.put("http://localhost:8000/api/update/".concat(e),{isStarted:!t,name:n,due_date:l,isComplete:i}).then((function(e){console.log(e),function(e){var t=Object(p.a)(c),a=t[e];a.isStarted=!a.isStarted,o(t),w()}(a)})).catch((function(e){console.log(e)}))},A=function(e,t,a,n,l,i){u.a.put("http://localhost:8000/api/update/".concat(e),Object(d.a)({isComplete:!t,name:n,due_date:l},"isComplete",i)).then((function(e){console.log(e),function(e){var t=Object(p.a)(c),a=t[e];a.isComplete=!a.isComplete,o(t),w()}(a)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"350px"}},l.a.createElement("h4",{style:{textAlign:"center",fontWeight:"bold"}},"Backlog"),b&&l.a.createElement("div",{style:{display:"inline-block"}},C.map((function(e,t){return l.a.createElement("ul",{key:t,style:{border:"1px solid black",padding:"10px",listStyle:"none"}},l.a.createElement("li",null,"Project: ",e.name),l.a.createElement("li",null,"Due by: ",e.due_date),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(a){N(e._id,e.isStarted,t,e.name,e.due_date,e.isComplete)}},"Start Project")))})))),l.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"350px"}},l.a.createElement("h4",{style:{textAlign:"center",fontWeight:"bold"}},"Started"),b&&l.a.createElement("div",{style:{display:"inline-block",marginRight:"20px",marginLeft:"20px"}},O.map((function(e,t){return l.a.createElement("ul",{key:t,style:{border:"1px solid black",padding:"10px",listStyle:"none"}},l.a.createElement("li",null,"Project: ",e.name),l.a.createElement("li",null,"Due by: ",e.due_date),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(a){A(e._id,e.isComplete,t,e.name,e.due_date,e.isStarted)}},"Completed")))})))),l.a.createElement("div",{style:{display:"inline-block",verticalAlign:"top",width:"350px"}},l.a.createElement("h4",{style:{textAlign:"center",fontWeight:"bold"}},"Completed"),b&&l.a.createElement("div",{style:{display:"inline-block"}},g.map((function(e,t){return l.a.createElement("ul",{key:t,style:{border:"1px solid black",padding:"10px",listStyle:"none"}},l.a.createElement("li",null,"Project: ",e.name),l.a.createElement("li",null,"Due by: ",e.due_date),l.a.createElement("li",null,l.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(t){var a;a=e._id,u.a.delete("http://localhost:8000/api/projects/".concat(a)).then((function(e){console.log(e),o(c.filter((function(e){return e._id!==a}))),w()})).catch((function(e){console.log(e)}))}},"Delete Project")))})))),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary btn-md",onClick:function(e){Object(i.c)("/create")},style:{marginTop:"50px"}},"Add New Project")))});var h=function(){return l.a.createElement("div",{className:"container",style:{textAlign:"center"}},l.a.createElement("h2",{style:{textAlign:"center",marginBottom:"50px",textDecoration:"underline"}},"Project Manager"),l.a.createElement(i.b,null,l.a.createElement(b,{path:"/"}),l.a.createElement(m,{path:"/create"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f21e4bdc.chunk.js.map