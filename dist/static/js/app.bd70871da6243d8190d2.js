webpackJsonp([13],{"/Hv2":function(n,e){},"5JzB":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};t.d(r,"getStatus",function(){return d}),t.d(r,"getMobile",function(){return h}),t.d(r,"getLogo",function(){return m}),t.d(r,"getReport",function(){return v});var o={};t.d(o,"setStatus",function(){return g}),t.d(o,"setMobile",function(){return w}),t.d(o,"setLogo",function(){return y}),t.d(o,"setReport",function(){return T});var u=t("IvJb"),i={render:function(){var n=this.$createElement;return(this._self._c||n)("router-view")},staticRenderFns:[]};var a=t("C7Lr")({data:function(){return{}}},i,!1,function(n){t("5JzB")},null,null).exports,c=t("zO6J"),s=function(n){return Promise.all([t.e(0),t.e(4)]).then(function(){return n(t("XdsE"))}.bind(null,t)).catch(t.oe)},l=function(n){return Promise.all([t.e(0),t.e(1)]).then(function(){return n(t("+ldI"))}.bind(null,t)).catch(t.oe)};u.default.use(c.a);var f=new c.a({routes:[{path:"/forb1234",component:function(n){return Promise.all([t.e(0),t.e(5)]).then(function(){return n(t("EV1k"))}.bind(null,t)).catch(t.oe)}},{path:"/primary",component:s,children:[{path:"/primary/report",component:function(n){return t.e(7).then(function(){return n(t("G23+"))}.bind(null,t)).catch(t.oe)},children:[{path:"/primary/report/personal",component:function(n){return Promise.all([t.e(0),t.e(3)]).then(function(){return n(t("jj4O"))}.bind(null,t)).catch(t.oe)}},{path:"/primary/report/enterprise",component:function(n){return t.e(10).then(function(){return n(t("65FA"))}.bind(null,t)).catch(t.oe)}}]},{path:"/primary/strate",component:function(n){return t.e(8).then(function(){return n(t("zGUj"))}.bind(null,t)).catch(t.oe)},children:[{path:"/primary/strate/strate_build",component:function(n){return Promise.all([t.e(0),t.e(2)]).then(function(){return n(t("jue+"))}.bind(null,t)).catch(t.oe)}}]},{path:"/primary/screen",component:l},{path:"/primary/user",component:function(n){return t.e(9).then(function(){return n(t("PPXT"))}.bind(null,t)).catch(t.oe)},children:[{path:"/primary/user/usermsg",component:function(n){return Promise.all([t.e(0),t.e(6)]).then(function(){return n(t("neKP"))}.bind(null,t)).catch(t.oe)}},{path:"/primary/user/code_change",component:function(n){return Promise.all([t.e(0),t.e(11)]).then(function(){return n(t("kUaz"))}.bind(null,t)).catch(t.oe)}}]}]},{path:"/*",component:s,children:[{path:"/*",component:l}]}]}),p=t("9rMa"),d=function(n){return n.status},h=function(n){return n.mobile},m=function(n){return n.companyLogo},v=function(n){return n.report},g=function(n,e){(0,n.commit)("SET_STATUS",e)},w=function(n,e){(0,n.commit)("SET_MOBILE",e)},y=function(n,e){(0,n.commit)("SET_LOGO",e)},T=function(n,e){(0,n.commit)("SET_REPORT",e)};u.default.use(p.a);var b=new p.a.Store({state:{status:"0",mobile:"",companyLogo:"",report:!0},mutations:{SET_STATUS:function(n,e){n.status=e},SET_MOBILE:function(n,e){n.mobile=e},SET_LOGO:function(n,e){n.companyLogo=e},SET_REPORT:function(n,e){n.report=e}},getters:r,actions:o}),O=t("3cXf"),E=t.n(O),P=t("rVsN"),S=t.n(P),L=t("t+b9"),_=t.n(L),A=t("vgQg");var M=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments[2];try{var r=null;t&&(r=L.Loading.service({fullscreen:!0}));var o=function(n){if(!n)throw new Error("Please input legal api");return n.startsWith("http")||n.startsWith("//")?n:n.startsWith("/")?A.a.DOMAIN+n:A.a.DOMAIN+"/"+n}(n),u=new XMLHttpRequest;return new S.a(function(n,i){u.open("post",o,!0),u.setRequestHeader("Content-Type","application/json; charset=UTF-8"),u.setRequestHeader("TOKEN_AUTH",function(n){for(var e=document.cookie.split("; "),t=0;t<e.length;t++){var r=e[t].split("=");if(r[0]===n)return r[1]}return""}("TOKEN_AUTH")),u.send(E()(e)),u.onreadystatechange=function(){if(4===u.readyState)if(t&&r.close(),200===u.status){var e=JSON.parse(u.responseText);if(200===e.statusCode)e.token&&(document.cookie="TOKEN_AUTH="+e.token+";Path=/;domain="+A.a.PD),n(e);else{if(401===e.statusCode){var o=window.location.href.split("#")[1]||"";return void(window.location.href="http://login"+A.a.PD+"/#/login?from=r&suffix="+o)}e.message?Object(L.Message)({showClose:!0,message:e.message,type:"error"}):(console.error("Request failed, resData: "+E()(e)),console.error(e),console.error("--------------------------------"),i(e))}}else Object(L.Message)({showClose:!0,message:"请求失败, 请检查网络或重试",type:"error"}),t&&r.close(),console.error("Request failed, status code: "+u.status)}})}catch(n){console.error(n)}},N=t("HzJ8"),R=t.n(N);var H=function(n,e){try{return function(n,e){var t=void 0,r=[];e||(t=L.Loading.service({fullscreen:!0}),setTimeout(function(){t.close()},1e4));var o=!0,u=!1,i=void 0;try{for(var a,c=R()(n);!(o=(a=c.next()).done);o=!0){var s=a.value;r.push(M(s.url,s.param||{}))}}catch(n){u=!0,i=n}finally{try{!o&&c.return&&c.return()}finally{if(u)throw i}}return new S.a(function(n,o){S.a.all(r).then(function(r){e||t.close(),n(r)}).catch(function(n){console.error(n)})})}(n,e)}catch(n){console.error(n)}};t("/Hv2");u.default.prototype.$ajax=M,u.default.prototype.$ajaxAll=H,u.default.config.productionTip=!1,u.default.use(_.a);var j=new u.default({el:"#app",router:f,store:b,components:{App:a},template:"<App/>"});window.$vue=j},vgQg:function(n,e,t){"use strict";var r="DNULL"==window.config.domain?"//aapi.fhld-inc.com":window.config.domain,o={DOMAIN:r,OSS:r+"/userCenter/grantAccess4OrgAvatar",PD:"PNULL"==window.config.pd?".fhld-inc.com":window.config.pd};e.a=o}},["NHnr"]);