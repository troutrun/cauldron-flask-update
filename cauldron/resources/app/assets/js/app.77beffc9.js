(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function i(t){return c.p+"assets/js/"+({"create~project":"create~project",create:"create",project:"project"}[t]||t)+"."+{"create~project":"3c27727e",create:"1a08fe47",project:"3bb7d65c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"create~project":1,create:1,project:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="assets/css/"+({"create~project":"create~project",create:"create",project:"project"}[t]||t)+"."+{"create~project":"783c2068",create:"3d647978",project:"0cb24598"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/v1/app/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"025e":function(t,e,n){"use strict";function r(t,e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}e["a"]={thenWait:r}},"0fd6":function(t,e,n){},"193e":function(t,e,n){},"1aaf":function(t,e,n){"use strict";var r=n("8711"),o=n.n(r);o.a},"1f1d":function(t,e,n){"use strict";var r=n("193e"),o=n.n(r);o.a},2423:function(t,e,n){t.exports=n.p+"assets/img/logo-128.a32de47b.png"},"3fa3":function(t,e,n){"use strict";var r=n("bd86"),o=(n("ac6a"),n("456d"),n("7f7f"),n("a481"),n("025e")),a=n("c0d6"),s=Math.round((new Date).getTime()/1e3);function i(){var t=window.location.origin,e=window.location.pathname.replace("app/project","notebook");return"".concat(t).concat(e,"/display.html?no-cache=").concat(s)}function c(){var t=a["a"].getters.view;if(!t)return"";var e=window.location.origin,n=window.location.pathname.replace("/app",""),r=encodeURIComponent("".concat(n,"/cache/").concat(t.id));return"".concat(e).concat(n,"/notebook/project.html?no-cache=").concat(s,"&data_root=").concat(r)}function u(){return document.querySelector(".Notebook__frame")}function l(){s=Math.round((new Date).getTime()/1e3);var t=u();t&&t.contentWindow.location.reload()}function d(){try{var t=u();return((t||{}).contentWindow||{}).CAULDRON}catch(e){return null}}function f(t,e){var n=d();if(n)if(t)n.scrollToAnchor(t,e);else{var r=(a["a"].getters.project||{}).steps||[],o=r.filter((function(t){var e=t.status.running||t.name===a["a"].getters.runningStepName;return e&&(t.status.selected||a["a"].getters.followSteps)}));if(0!==o.length){var s=o[0].status.error?"error":"end";n.scrollToAnchor(o[0].name,e||s)}}}function p(t){var e=a["a"].getters.previousStepChanges;return t.filter((function(t){var n=e[t.name]||{},r=(t.step||{}).body||"",o=(n.step||{}).body||"",a=t.timestamp||1,s=n.timestamp||0;return"added"===t.action||"removed"===t.action||r!==o&&a>s}))}function m(t,e,n){var s=p(e||[]),i=0===Object.keys(t||{}).length&&0===(s||[]).length;if(i)return Promise.resolve();var c=d();return c?c.processStepRenames(t||{}).then((function(){c.processStepUpdates(s);var t=a["a"].getters.previousStepChanges,e=s.reduce((function(t,e){return Object.assign(t,Object(r["a"])({},e.name,e))}),{}),n=Object.assign({},t,e);return a["a"].commit("previousStepChanges",n),o["a"].thenWait(300)})).then((function(){if(n||a["a"].getters.followSteps){var t=(a["a"].getters.project||{}).steps||[],r=t.filter((function(t){return t.name===n})).concat(e.filter((function(t){return t.step})).reverse());if(0!==r.length){var o=r[0],s=(o.status||{}).error;f(o.name,s?"error":"end")}}})):Promise.resolve()}function v(){return new Promise((function(t,e){var n=0,r=0,o=setInterval((function(){var s=d(),i=a["a"].getters,c=i.project,u=i.view;return c||u?s&&s.on&&s.on.ready?s.RUNNING?(clearInterval(o),void s.on.ready.then((function(){return t(s)}))):(r+=1,void(r>10&&(r=0,console.warn("Notebook load running timeout reached. Refreshing..."),l()))):(n+=1,void(n>10&&(n=0,console.warn("Notebook load wait timeout reached. Refreshing..."),l()))):(clearInterval(o),void e())}),200)}))}e["a"]={applyStepModifications:m,getUrl:i,getViewUrl:c,getCauldronObject:d,getIframe:u,refresh:l,onLoaded:v,scrollToStep:f}},"46aa":function(t,e,n){"use strict";var r=n("a88a"),o=n.n(r);o.a},"473f":function(t,e,n){},"491d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("6018"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App",attrs:{id:"app"}},[n("router-view",{staticClass:"App__routerView"}),t.warning?n("warning-overlay",{attrs:{warning:t.warning},on:{close:t.onDismissWarning}}):t._e(),t.error?n("error-overlay",{attrs:{error:t.error},on:{close:t.onDismissError}}):t._e(),t.showLostConnection?n("lost-connection-overlay"):t._e(),t.loadingMessage.id?n("loader",{attrs:{message:t.loadingMessage.message}}):t._e()],1)},s=[],i=(n("f559"),n("ba6a")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WarningOverlay"},[n("div",{staticClass:"WarningOverlay__focus"},[n("div",{staticClass:"WarningOverlay__headerBox"},[n("i",{staticClass:"WarningOverlay__icon material-icons md-36"},[t._v("warning")]),n("div",{staticClass:"WarningOverlay__titleBox"},[n("div",{staticClass:"WarningOverlay__titleHeader"},[t._v("Warning")]),n("div",{staticClass:"WarningOverlay__title"},[t._v(t._s(t.warning.code))])])]),n("div",{staticClass:"WarningOverlay__infoBox"},[n("div",{staticClass:"WarningOverlay__message"},[t._v(t._s(t.warning.message))])]),n("div",{staticClass:"WarningOverlay__buttonBox"},[n("div",{staticClass:"WarningOverlay__spacer"}),n("button",{staticClass:"WarningOverlay__button button is-small is-dark",on:{click:t.onDismiss}},[t._v("OK")])])])])},u=[];function l(){return{}}function d(){this.$emit("close")}var f={name:"WarningOverlay",props:{warning:{type:Object,default:function(){}}},data:l,methods:{onDismiss:d}},p=f,m=(n("1f1d"),n("2877")),v=Object(m["a"])(p,c,u,!1,null,"15015cde",null),g=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ErrorOverlay"},[n("div",{staticClass:"ErrorOverlay__focus"},[n("div",{staticClass:"ErrorOverlay__headerBox"},[n("i",{staticClass:"ErrorOverlay__icon material-icons md-36"},[t._v("error_outline")]),n("div",{staticClass:"ErrorOverlay__titleBox"},[n("div",{staticClass:"ErrorOverlay__titleHeader"},[t._v("Error")]),n("div",{staticClass:"ErrorOverlay__title"},[t._v(t._s(t.error.code))])])]),n("div",{staticClass:"ErrorOverlay__infoBox"},[n("div",{staticClass:"ErrorOverlay__message"},[t._v(t._s(t.error.message))])]),n("div",{staticClass:"ErrorOverlay__buttonBox"},[n("div",{staticClass:"ErrorOverlay__spacer"}),n("button",{staticClass:"ErrorOverlay__button button is-small",on:{click:t.onDismiss}},[t._v("OK")])])])])},_=[];function y(){return{}}function C(){this.$emit("close")}var b={name:"ErrorOverlay",props:{error:{type:Object,default:function(){}}},data:y,methods:{onDismiss:C}},w=b,S=(n("ff27"),Object(m["a"])(w,h,_,!1,null,"1dde40ec",null)),O=S.exports,j=n("726c"),R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LostConnectionOverlay"},[n("div",{staticClass:"LostConnectionOverlay__focus"},[n("div",{staticClass:"LostConnectionOverlay__headerBox"},[n("i",{staticClass:"LostConnectionOverlay__icon material-icons md-36"},[t._v("signal_wifi_off")]),n("div",{staticClass:"LostConnectionOverlay__titleBox"},[n("div",{staticClass:"LostConnectionOverlay__titleHeader"},[t._v("No Response")]),n("div",{staticClass:"LostConnectionOverlay__title"},[t._v("Lost Kernel Connection")])])]),n("div",{staticClass:"LostConnectionOverlay__infoBox"},[n("div",{staticClass:"LostConnectionOverlay__message"},[t._v("Trying to re-establish communication with the Cauldron kernel...")])])])])}],T={name:"LostConnectionOverlay"},x=T,k=(n("771f"),Object(m["a"])(x,R,E,!1,null,"73a56477",null)),L=k.exports,N=n("025e"),P=n("ea2f"),$="success",W="failure",D="lost";function I(){var t=this.$store.getters.loading||[];return t.length>0?t.splice(-1)[0]:{}}function M(){var t=this.$store.getters.warnings;return t.length<1?null:t[0]}function q(){var t=this.$store.getters.warnings.concat();t.length<1||(t.shift(),this.$store.commit("warnings",t))}function H(){var t=this.$store.getters.errors;return t.length<1?null:t[0]}function B(){var t=this.$store.getters.errors.concat();t.length<1||(t.shift(),this.$store.commit("errors",t))}function A(t,e){return this.recentResponses.push({kind:t,responseOrError:e,success:t===$}),this.recentResponses.length>50&&this.recentResponses.shift(),e}function F(){var t=this,e=this.$store.getters,n=e.isStatusDirty,r=e.isNotebookLoading,o=e.errors,a=e.warnings;if(o.length>0||a.length>0)return n||this.$store.commit("isStatusDirty",!0),clearTimeout(this.timeoutHandle),this.timeoutHandle=setTimeout(this.updateStatusLoop,100),Promise.resolve();if(r)return clearTimeout(this.timeoutHandle),this.timeoutHandle=setTimeout(this.updateStatusLoop,200),Promise.resolve();n&&this.$store.commit("isStatusDirty",!1);var s=this.$store.getters.running?500:1e3;return i["a"].updateStatus(n?0:s).then((function(e){if(e.data.success)return t.recordResponse($,e),e;var n=e.data.errors.map((function(t){return t.code}));return-1!==n.indexOf("LOST_REMOTE_CONNECTION")?t.recordResponse(D,e):(t.recordResponse(W,e),console.error("Failed update response",e.data),e)})).catch((function(e){return e.request?"ECONNABORTED"===e.code||408===(e.response||{}).status?(t.recordResponse(D,e),N["a"].thenWait(200)):e.response?(t.recordResponse(W,e),N["a"].thenWait(200)):(t.recordResponse(D,e),N["a"].thenWait(500)):(t.recordResponse(W,e),j["a"].addError({code:"UNKNOWN_ERROR",message:"Malformed request attempt has halted communication with the kernel."}),console.warn(e),Promise.resolve())})).finally((function(){var e=t.$router.currentRoute.path,n=t.$store.getters,r=n.project,o=n.view;o&&!e.startsWith("/view")?t.$router.push("/view"):o||!r||e.startsWith("/project")?null===r&&e.startsWith("/project")?t.$router.push("/"):null===o&&e.startsWith("/view")&&t.$router.push("/"):t.$router.push("/project"),clearTimeout(t.timeoutHandle),t.timeoutHandle=setTimeout(t.updateStatusLoop,100)}))}function U(){if(0===this.recentResponses.length)return!1;var t=this.recentResponses.slice(-1)[0].kind;return t===D}function z(){return{timeoutHandle:null,recentResponses:[]}}function K(){return this.updateStatusLoop()}function Q(){clearInterval(this.timeoutHandle)}var G={name:"App",components:{Loader:P["a"],LostConnectionOverlay:L,ErrorOverlay:O,WarningOverlay:g},data:z,computed:{warning:M,error:H,showLostConnection:U,loadingMessage:I},mounted:K,beforeDestroy:Q,methods:{recordResponse:A,updateStatusLoop:F,onDismissWarning:q,onDismissError:B}},J=G,V=(n("5c0b"),Object(m["a"])(J,a,s,!1,null,null,null)),X=V.exports,Y=n("8c4f"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("div",{staticClass:"Home__splash"},[n("div",{staticClass:"Home__focus"},[n("img",{staticClass:"Home__logo",attrs:{src:t.logo}}),n("div",{staticClass:"Home__title"},[t._v("Cauldron")]),n("div",{staticClass:"Home__tagline"},[n("div",[t._v("Interactive Computing Environment")]),n("div",{staticClass:"Home__version"},[t._v("v"+t._s(t.info.version))])]),n("div",{staticClass:"Home__buttonBox"},[n("div",{staticClass:"button Home__button tooltip",attrs:{"data-tooltip":"A new notebook project"},on:{click:t.createProject}},[t._v("Create")]),n("div",{staticClass:"button Home__button tooltip",attrs:{"data-tooltip":"An existing notebook project from a local directory"},on:{click:t.openProjectBrowser}},[t._v("Open")])])])]),t.recentProjects.length>0?n("div",{staticClass:"Home__recent"},t._l(t.recentProjects,(function(e){return n("recent-item",{attrs:{item:e},on:{click:t.onProjectClick}})})),1):t._e(),t.loadingMessage?n("loader",{attrs:{message:t.loadingMessage}}):t._e()],1)},tt=[],et=(n("7f7f"),n("2423")),nt=n.n(et),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RecentItem",on:{click:t.openProject}},[t._m(0),n("div",{staticClass:"RecentItem__box"},[n("div",{staticClass:"RecentItem__title"},[t._v(t._s(t.item.name))]),n("div",{staticClass:"RecentItem__path"},[t._v(t._s(t.item.directory.short))]),n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top"},expression:"{ placement: 'top' }"}],staticClass:"RecentItem__date",attrs:{content:t.item.modified.display}},[t._v(t._s(t.item.modified.elapsed))])]),n("div",{staticClass:"RecentItem__rightBox"},[n("div",{staticClass:"RecentItem__remove tooltip is-tooltip-left is-tooltip-danger",attrs:{"data-tooltip":"Remove from recent list"},on:{click:function(e){return e.stopPropagation(),t.removeFromRecent(e)}}},[n("i",{staticClass:"material-icons md-18"},[t._v("close")])])])])},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RecentItem__leftBox"},[n("div",{staticClass:"material-icons RecentItem__icon"},[t._v("folder_open")])])}];function at(t){return this.$emit("click",{action:"remove",event:t,item:this.item})}function st(t){return this.$emit("click",{action:"open",event:t,item:this.item})}var it={name:"RecentItem",props:{item:{type:Object,default:function(){}}},methods:{openProject:st,removeFromRecent:at}},ct=it,ut=(n("46aa"),Object(m["a"])(ct,rt,ot,!1,null,"48a6cff4",null)),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RemoteConnect tooltip is-tooltip-right",class:{"RemoteConnect--connected":t.connected,"RemoteConnect--disconnected":!t.connected},attrs:{"data-tooltip":"Manage remote connection"}},[n("div",{staticClass:"material-icons"},[t._v(t._s(t.icon))])])},ft=[];function pt(){return this.status.connected?"link":"link_off"}function mt(){return this.status.connected||!1}var vt={name:"RemoteConnect",props:{status:{type:Object,default:function(){}}},computed:{connected:mt,icon:pt}},gt=vt,ht=(n("6f64"),Object(m["a"])(gt,dt,ft,!1,null,"1504decf",null)),_t=ht.exports;function yt(){return this.$router.push("/create")}function Ct(){return this.$router.push("/open")}function bt(t){var e=this,n=t.item.uid;if("remove"===t.action)return this.loadingMessage="Removing Recent Project Entry",i["a"].execute("list erase ".concat(n," --yes")).then((function(t){e.recentProjects=t.data.data.projects,e.loadingMessage=null}));var r=t.item.name,o=t.item.directory.absolute;return this.loadingMessage='Loading "'.concat(r,'" Project'),i["a"].execute('open "'.concat(o,'"')).then((function(t){i["a"].markStatusDirty(),t.data.success||(e.loadingMessage=null)}))}function wt(){return{logo:nt.a,loadingMessage:"Synchronizing with Cauldron Kernel",info:{version:"unknown"},recentProjects:[]}}function St(){var t=this;return i["a"].updateStatus(500).then((function(e){return t.info=e.data.data,i["a"].execute("list recent")})).then((function(e){t.recentProjects=e.data.data.projects,t.loadingMessage=null}))}var Ot={name:"Home",components:{Loader:P["a"],RecentItem:lt,RemoteConnect:_t},data:wt,mounted:St,methods:{createProject:yt,onProjectClick:bt,openProjectBrowser:Ct}},jt=Ot,Rt=(n("80cf"),Object(m["a"])(jt,Z,tt,!1,null,"5d9f75e5",null)),Et=Rt.exports;r["a"].use(Y["a"]);var Tt=new Y["a"]({mode:"history",base:"/v1/app/",routes:[{path:"/",name:"home",component:Et},{path:"/project",name:"project",component:function(){return Promise.all([n.e("create~project"),n.e("project")]).then(n.bind(null,"b7bc"))}},{path:"/create",name:"create",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"f28d"))}},{path:"/open",name:"open",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"8d29"))}},{path:"/view",name:"viewer",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"03e7"))}}]}),xt=n("c0d6");r["a"].use(o["b"]),r["a"].component("tippy",o["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Tt,store:xt["a"],render:function(t){return t(X)}}).$mount("#app")},5843:function(t,e,n){"use strict";n("7f7f");var r=n("c0d6");function o(t){var e=(r["a"].getters.project||{}).steps||[],n=e.filter((function(e){return e.name===t}));return n.length>0?n[0]:null}function a(){var t=(r["a"].getters.project||{}).steps||[],e=t.filter((function(t){return t.status.selected}));return e.length>0?e[0]:null}function s(t){return r["a"].getters.queuedStepsToRun.filter((function(e){return e===t})).length>0}function i(t){var e=o(t);return null!==e&&e.status.running}function c(t){if(!s(t)&&!i(t)){var e=r["a"].getters.queuedStepsToRun.concat([t]);r["a"].commit("queuedStepsToRun",e)}}function u(t){var e=r["a"].getters.queuedStepsToRun.concat(),n=e.indexOf(t);return!(n<0)&&(e.splice(n,1),r["a"].commit("queuedStepsToRun",e),!0)}function l(t){var e=r["a"].getters.queuedStepsToRun.concat(),n=t.filter((function(t){return e.indexOf(t)<0}));n.length>0&&r["a"].commit("queuedStepsToRun",e.concat(n))}function d(t){r["a"].commit("runningStepName",t),r["a"].commit("running",null!==t)}function f(){r["a"].commit("queuedStepsToRun",[])}e["a"]={addToQueue:l,clearQueue:f,getStep:o,getSelectedStep:a,isStepQueued:s,isStepRunning:i,queueStepToRun:c,removeStepFromQueue:u,setStepRunning:d}},"5c0b":function(t,e,n){"use strict";var r=n("e332"),o=n.n(r);o.a},"6f64":function(t,e,n){"use strict";var r=n("473f"),o=n.n(r);o.a},"726c":function(t,e,n){"use strict";var r=n("c0d6"),o=["EXECUTION_ERROR"];function a(t){var e=r["a"].getters.errors.concat(),n=e.map((function(t){return t.code})).concat(o),a=(t||[]).filter((function(t){return-1===n.indexOf(t.code)}));a&&r["a"].commit("errors",e.concat(a))}function s(t){return a([t])}function i(t){var e=r["a"].getters.warnings.concat(),n=e.map((function(t){return t.code})),o=(t||[]).filter((function(t){return-1===n.indexOf(t.code)}));o&&r["a"].commit("warnings",e.concat(o))}function c(t){return i([t])}e["a"]={addErrors:a,addError:s,addWarnings:i,addWarning:c}},"771f":function(t,e,n){"use strict";var r=n("b3be"),o=n.n(r);o.a},"80cf":function(t,e,n){"use strict";var r=n("491d"),o=n.n(r);o.a},8382:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Spinner"},[n("svg",{staticClass:"Spinner__box",attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size}},[n("circle",{staticClass:"Spinner__path",class:t.themingClasses,attrs:{fill:"none","stroke-linecap":"round","stroke-width":t.thickness,cx:t.half,cy:t.half,r:t.radius}})])])},o=[];n("c5f6");function a(){return this.size}function s(){return Math.floor(this.size/2)}function i(){return this.half-this.thickness}function c(){return Math.max(2,Math.floor(6*Math.min(1,this.size/60)))}function u(){return"Spinner__path--".concat(this.theme)}var l={name:"Spinner",props:{size:{type:Number,default:40},theme:{type:String,default:"light"}},computed:{extent:a,half:s,radius:i,thickness:c,themingClasses:u}},d=l,f=(n("e675"),n("2877")),p=Object(f["a"])(d,r,o,!1,null,"38b6b456",null);e["a"]=p.exports},8711:function(t,e,n){},a88a:function(t,e,n){},b3be:function(t,e,n){},ba6a:function(t,e,n){"use strict";n("7f7f");var r=n("bc3a"),o=n.n(r),a=n("c0d6"),s=n("5843"),i=n("3fa3"),c=n("726c"),u=n("025e"),l={lastInvocationTimestamp:0};function d(){a["a"].commit("isStatusDirty",!0)}function f(t){var e=((t||{}).data||{}).errors||[];c["a"].addErrors(e)}function p(t){var e=((t||{}).data||{}).warnings||[];c["a"].addWarnings(e)}function m(){var t=window.location.origin;return o.a.create({baseURL:"".concat(t,"/v1/api/"),timeout:1e4,headers:{"Content-Type":"application/json"}})}function v(t){return m().get(t).catch((function(e){throw console.error("FAILED GET::".concat(t),e),e}))}function g(t,e){return m().post(t,e||{}).catch((function(n){throw console.error("FAILED POST::".concat(t),e,n),n}))}function h(t){return g("/command/sync",{command:t}).then((function(t){return f(t),p(t),t}))}function _(t){return g("/command/async",{command:t}).then((function(t){return f(t),p(t),t}))}function y(t){var e=t.data.data.step_changes||[],n=!t.data.success||(t.data.errors||[]).length>0||e.filter((function(t){return t.has_error})).length>0;return n&&(s["a"].clearQueue(),a["a"].commit("running",!1)),n}function C(t){return a["a"].commit("running",!0),a["a"].commit("runningStepName",t),_('run "'.concat(t,'" --print-status'),t).then((function(t){y(t);var e=t.data;return i["a"].applyStepModifications(e.data.step_renames,e.data.step_changes).then((function(){return d(),t}))}))}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Math.max(l.lastInvocationTimestamp,0);if(t>0){var r=(new Date).getTime(),o=r-n;if(o<t)return Promise.resolve({data:a["a"].getters.status})}var s=e?"yes":null,c=(a["a"].getters.status||{}).timestamp||0,f={last_timestamp:c,force:s};return l.lastInvocationTimestamp=(new Date).getTime(),g("/status",f).then((function(t){var e=t.data;if(!e)return Promise.resolve(t);e.success||(l.lastInvocationTimestamp=0);var n=e.data,r=n.project,o=n.remote,s=e.data.is_active_async,c=(r||{}).steps||[],f=y(t),p=(a["a"].getters.status||{}).hash||"",m=e.hash||"",v=c.filter((function(t){return t.status.running})),g=!f&&v.length>0,h=((o||{}).sync||{}).active;p!==m&&(a["a"].commit("status",e),a["a"].commit("project",r));var _=a["a"].getters.running,b=h||g||s||a["a"].getters.queuedStepsToRun.length>0;_!==b&&a["a"].commit("running",b);var w=a["a"].getters.runningStepName,S=[g?v[0].name:null,b?w:null],O=S.reduce((function(t,e){return e||t}),null);return w!==O&&a["a"].commit("runningStepName",O),_&&!b&&d(),i["a"].applyStepModifications(e.data.step_renames,e.data.step_changes).then((function(){var e=!h&&!g&&!s&&a["a"].getters.queuedStepsToRun.length>0;if(e){var n=a["a"].getters.queuedStepsToRun[0];return a["a"].commit("queuedStepsToRun",a["a"].getters.queuedStepsToRun.slice(1)),u["a"].thenWait(100).then((function(){return C(n)})).then((function(){return u["a"].thenWait(100)})).then((function(){return t}))}return t}))}))}function w(){return s["a"].clearQueue(),g("/command/abort").then((function(t){return f(t),p(t),a["a"].commit("running",!1),d(),t}))}e["a"]={abortExecution:w,get:v,post:g,execute:h,executeAsync:_,updateStatus:b,markStatusDirty:d}},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62");function a(){return{data:{success:!0,timestamp:0}}}r["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{followSteps:!0,errors:[],warnings:[],isStatusDirty:!0,project:null,queuedStepsToRun:[],running:!1,runningStepName:null,savingFile:!1,status:a(),loading:[],isNotebookLoading:!1,previousStepChanges:{}},mutations:{followSteps:function(t,e){t.followSteps=e||!1},errors:function(t,e){t.errors=e||[]},warnings:function(t,e){t.warnings=e||[]},isStatusDirty:function(t,e){t.isStatusDirty=e||!1},project:function(t,e){t.project=e||null},queuedStepsToRun:function(t,e){t.queuedStepsToRun=e||[]},running:function(t,e){t.running=e||!1},runningStepName:function(t,e){t.runningStepName=e||null},savingFile:function(t,e){t.savingFile=e||!1},status:function(t,e){t.status=e||a()},loading:function(t,e){t.loading=e||[]},isNotebookLoading:function(t,e){t.isNotebookLoading=e||!1},previousStepChanges:function(t,e){t.previousStepChanges=e||{}}},getters:{followSteps:function(t){return t.followSteps},errors:function(t){return t.errors},warnings:function(t){return t.warnings},isStatusDirty:function(t){return t.isStatusDirty},project:function(t){return t.project},queuedStepsToRun:function(t){return t.queuedStepsToRun},running:function(t){return t.running},runningStepName:function(t){return t.runningStepName},savingFile:function(t){return t.savingFile},status:function(t){return t.status},view:function(t){return((t.status||{}).data||{}).view||null},loading:function(t){return t.loading},isNotebookLoading:function(t){return t.isNotebookLoading},previousStepChanges:function(t){return t.previousStepChanges}}})},cea1:function(t,e,n){},e332:function(t,e,n){},e675:function(t,e,n){"use strict";var r=n("cea1"),o=n.n(r);o.a},ea2f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Loader"},[n("div",{staticClass:"Loader__focus"},[n("spinner",{staticClass:"Loader__spinner"}),t.message?n("div",{staticClass:"Loader__message"},[t._v(t._s(t.message))]):t._e()],1)])},o=[],a=n("8382");function s(){return{}}var i={name:"Loader",components:{Spinner:a["a"]},props:{message:{type:String,default:""}},data:s},c=i,u=(n("1aaf"),n("2877")),l=Object(u["a"])(c,r,o,!1,null,"d43f3f76",null);e["a"]=l.exports},ff27:function(t,e,n){"use strict";var r=n("0fd6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.77beffc9.js.map