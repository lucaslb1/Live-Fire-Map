(function(t){function e(e){for(var s,r,u=e[0],l=e[1],o=e[2],m=0,d=[];m<u.length;m++)r=u[m],a[r]&&d.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,u=1;u<i.length;u++){var l=i[u];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),a=i.n(s);a.a},"1b93":function(t,e,i){"use strict";var s=i("505e"),a=i.n(s);a.a},"505e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("website")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[t._v('"Logo"')]),i("div",{staticClass:"nav"},[i("nav",[i("ul",{directives:[{name:"scroll-spy-active",rawName:"v-scroll-spy-active"},{name:"scroll-spy-link",rawName:"v-scroll-spy-link"}],attrs:{id:"tabs"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])])])])]),i("br"),i("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}]},[t._m(5),i("div",{staticClass:"home",attrs:{id:"about"}},[i("div",{staticClass:"container2"},[i("div",{staticClass:"title"},[t._v('"About"')]),i("br"),i("div",{staticClass:"text2"},[t._v("\n        Yuh\n        "),i("button",{staticClass:"btn primary",on:{click:t.notify}},[t._v(" button ")]),i("br")])])]),t._m(6),i("div",{staticClass:"home",attrs:{id:"testimonials"}},[i("div",{staticClass:"container2"},[i("div",{staticClass:"title"},[t._v('"Testimonials"')]),i("table",{staticClass:"tbl"},[i("td",t._l(t.testimonials,function(e,s){return i("div",{key:e+s,staticClass:"testimonials"},[i("div",{staticClass:"item"},[t._v(" "+t._s(e.body)),i("br"),t._v("-"+t._s(e.person))]),i("div",{staticClass:"remove-item",on:{click:function(e){return t.removeItem(s)}}},[t._v(" \n            × ")])])}),0)])])]),i("div",{staticClass:"home",attrs:{id:"contact"}},[i("div",{staticClass:"container2"},[i("div",{staticClass:"title"},[t._v('"Contact Us"')]),i("form",{attrs:{id:"form"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text",id:"msg",placeholder:"    Message"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",placeholder:"    Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("br"),i("input",{attrs:{type:"submit"},on:{click:function(e){return t.submit()}}})])])])])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#home"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#about"}},[t._v("About")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#services"}},[t._v("Services")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#testimonials"}},[t._v("Testimonials")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"#contact"}},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",attrs:{id:"home"}},[i("div",{staticClass:"container2"},[i("div",{staticClass:"title"},[t._v('"Home"')]),i("div",{staticClass:"text1"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula auctor feugiat. Proin lacinia accumsan orci, id varius odio iaculis accumsan. Praesent nec faucibus augue. Nam nisi justo, aliquet et egestas a, aliquam quis eros. Vestibulum in velit quis purus faucibus posuere. Donec nec nisl vestibulum, mollis mi eu, ultrices justo. Praesent elementum mi vitae ligula faucibus euismod a ac sem. Aliquam sed porta mauris. Duis condimentum facilisis sapien eget placerat. Donec ut quam mattis, dapibus quam vel, efficitur enim. Sed scelerisque turpis nec erat condimentum, quis pretium leo venenatis. Vestibulum in semper lorem, vel porta urna. Integer eu bibendum nisi. Morbi sed risus et dui condimentum tincidunt at eget ligula. Duis finibus dui eu nunc ultrices vulputate. ")]),i("p",[t._v("Vivamus in neque purus. Aliquam ac dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec blandit elit. Etiam porta velit semper, viverra turpis sed, faucibus sem. Fusce elementum, felis at fermentum sodales, nisl enim congue velit, sed iaculis leo lectus sed nulla. Aliquam rutrum accumsan malesuada. Mauris vel augue ipsum. Sed faucibus blandit eros, vel porta urna dapibus sed. Nulla at leo massa.")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",attrs:{id:"services"}},[i("div",{staticClass:"container2"},[i("div",{staticClass:"title"},[t._v(' "Services" ')]),i("div",{staticClass:"text3"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quos nulla quaerat ipsam. Voluptatem fugiat incidunt quaerat, aliquam molestias modi harum rem ratione aperiam omnis fugit quo temporibus pariatur perferendis corrupti unde eos officiis, animi aut ab, architecto cupiditate facilis.")]),i("div",{staticClass:"slides"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"slide"},[i("h1",{staticClass:"slide-number"},[t._v("Integer quis metus molestie")])]),i("div",{staticClass:"slide"},[i("h1",{staticClass:"slide-number"},[t._v("viverra justo a")])]),i("div",{staticClass:"slide"},[i("h1",{staticClass:"slide-number"},[t._v("sagittis risus")])]),i("div",{staticClass:"slide"},[i("h1",{staticClass:"slide-number"},[t._v("Cras pulvina")])])])])])])}],l=(i("7f7f"),{data:function(){return{testimonials:[],msg:"",name:""}},methods:{removeItem:function(t){this.testimonials.splice(t,1)},submit:function(){this.testimonials.push({body:this.msg,person:this.name}),this.msg="",this.name=""},notify:function(){alert("Notification")}},mounted:function(){localStorage.getItem("testimonials")&&(this.testimonials=JSON.parse(localStorage.getItem("testimonials"))),this.interval=setInterval(this.time,1e3)},watch:{testimonials:{handler:function(){localStorage.setItem("testimonials",JSON.stringify(this.testimonials))},deep:!0}}}),o=l,c=(i("1b93"),i("2877")),m=Object(c["a"])(o,r,u,!1,null,null,null),d=m.exports,v={name:"pp",components:{website:d}},p=v,f=(i("034f"),Object(c["a"])(p,a,n,!1,null,null,null)),b=f.exports,h=i("33bc"),_=i("5f5b");i("f9e3"),i("2dd8");s["default"].use(_["a"]),s["default"].use(h["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,i){}});
//# sourceMappingURL=app.f4ebb131.js.map