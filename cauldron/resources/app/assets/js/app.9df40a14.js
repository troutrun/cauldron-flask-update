(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"assets/js/"+({"create~project":"create~project",create:"create",project:"project"}[t]||t)+"."+{"create~project":"f13dd061",create:"586afc8e",project:"ec1531aa"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"create~project":1,create:1,project:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="assets/css/"+({"create~project":"create~project",create:"create",project:"project"}[t]||t)+"."+{"create~project":"e17290c0",create:"b0ccee39",project:"8fb607a8"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/v1/app/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"025e":function(t,e,n){"use strict";function r(t,e){return new Promise((function(n){setTimeout((function(){n(e)}),t)}))}e["a"]={thenWait:r}},"0fd6":function(t,e,n){},"193e":function(t,e,n){},"1aaf":function(t,e,n){"use strict";var r=n("8711"),a=n.n(r);a.a},"1f1d":function(t,e,n){"use strict";var r=n("193e"),a=n.n(r);a.a},2423:function(t,e,n){t.exports=n.p+"assets/img/logo-128.a32de47b.png"},"3fa3":function(t,e,n){"use strict";n("ac6a"),n("456d"),n("7f7f"),n("a481");var r=n("025e"),a=n("c0d6"),o=Math.round((new Date).getTime()/1e3);function s(){var t=window.location.origin,e=window.location.pathname.replace("app/project","notebook");return"".concat(t).concat(e,"/display.html?no-cache=").concat(o)}function i(){var t=a["a"].getters.view;if(!t)return"";var e=window.location.origin,n=window.location.pathname.replace("/app",""),r=encodeURIComponent("".concat(n,"/cache/").concat(t.id));return"".concat(e).concat(n,"/notebook/project.html?no-cache=").concat(o,"&data_root=").concat(r)}function c(){return document.querySelector(".Notebook__frame")}function u(){o=Math.round((new Date).getTime()/1e3);var t=c();t&&t.contentWindow.location.reload()}function l(){try{var t=c();return((t||{}).contentWindow||{}).CAULDRON}catch(e){return null}}function f(t,e){var n=l();if(t)n.scrollToAnchor(t,e);else{var r=(a["a"].getters.project||{}).steps||[],o=r.filter((function(t){var e=t.status.running||t.name===a["a"].getters.runningStepName;return e&&(t.status.selected||a["a"].getters.followSteps)}));if(0!==o.length){var s=o[0].status.error?"error":"end";n.scrollToAnchor(o[0].name,e||s)}}}function d(t,e,n){var o=0===Object.keys(t||{}).length&&0===(e||[]).length;if(o)return Promise.resolve();var s=l();return s?s.processStepRenames(t||{}).then((function(){return s.processStepUpdates(e||[]),r["a"].thenWait(500)})).then((function(){if(n||a["a"].getters.followSteps){var t=(a["a"].getters.project||{}).steps||[],r=t.filter((function(t){return t.name===n})).concat(e.filter((function(t){return t.step})).reverse());if(0!==r.length){var o=r[0],s=(o.status||{}).error;f(o.name,s?"error":"end")}}})):Promise.resolve()}function p(){return new Promise((function(t,e){var n=0,r=0,o=setInterval((function(){var s=l(),i=a["a"].getters,c=i.project,f=i.view;return c||f?s&&s.on&&s.on.ready?s.RUNNING?(clearInterval(o),void s.on.ready.then((function(){return t(s)}))):(r+=1,void(r>10&&(r=0,console.warn("Notebook load running timeout reached. Refreshing..."),u()))):(n+=1,void(n>10&&(n=0,console.warn("Notebook load wait timeout reached. Refreshing..."),u()))):(clearInterval(o),void e())}),200)}))}e["a"]={applyStepModifications:d,getUrl:s,getViewUrl:i,getCauldronObject:l,getIframe:c,refresh:u,onLoaded:p,scrollToStep:f}},"46aa":function(t,e,n){"use strict";var r=n("a88a"),a=n.n(r);a.a},"473f":function(t,e,n){},"491d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("6018"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App",attrs:{id:"app"}},[n("router-view",{staticClass:"App__routerView"}),t.warning?n("warning-overlay",{attrs:{warning:t.warning},on:{close:t.onDismissWarning}}):t._e(),t.error?n("error-overlay",{attrs:{error:t.error},on:{close:t.onDismissError}}):t._e(),t.showLostConnection?n("lost-connection-overlay"):t._e()],1)},s=[],i=(n("f559"),n("ba6a")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WarningOverlay"},[n("div",{staticClass:"WarningOverlay__focus"},[n("div",{staticClass:"WarningOverlay__headerBox"},[n("i",{staticClass:"WarningOverlay__icon material-icons md-36"},[t._v("warning")]),n("div",{staticClass:"WarningOverlay__titleBox"},[n("div",{staticClass:"WarningOverlay__titleHeader"},[t._v("Warning")]),n("div",{staticClass:"WarningOverlay__title"},[t._v(t._s(t.warning.code))])])]),n("div",{staticClass:"WarningOverlay__infoBox"},[n("div",{staticClass:"WarningOverlay__message"},[t._v(t._s(t.warning.message))])]),n("div",{staticClass:"WarningOverlay__buttonBox"},[n("div",{staticClass:"WarningOverlay__spacer"}),n("button",{staticClass:"WarningOverlay__button button is-small is-dark",on:{click:t.onDismiss}},[t._v("OK")])])])])},u=[];function l(){return{}}function f(){this.$emit("close")}var d={name:"WarningOverlay",props:{warning:{type:Object,default:function(){}}},data:l,methods:{onDismiss:f}},p=d,m=(n("1f1d"),n("2877")),v=Object(m["a"])(p,c,u,!1,null,"15015cde",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ErrorOverlay"},[n("div",{staticClass:"ErrorOverlay__focus"},[n("div",{staticClass:"ErrorOverlay__headerBox"},[n("i",{staticClass:"ErrorOverlay__icon material-icons md-36"},[t._v("error_outline")]),n("div",{staticClass:"ErrorOverlay__titleBox"},[n("div",{staticClass:"ErrorOverlay__titleHeader"},[t._v("Error")]),n("div",{staticClass:"ErrorOverlay__title"},[t._v(t._s(t.error.code))])])]),n("div",{staticClass:"ErrorOverlay__infoBox"},[n("div",{staticClass:"ErrorOverlay__message"},[t._v(t._s(t.error.message))])]),n("div",{staticClass:"ErrorOverlay__buttonBox"},[n("div",{staticClass:"ErrorOverlay__spacer"}),n("button",{staticClass:"ErrorOverlay__button button is-small",on:{click:t.onDismiss}},[t._v("OK")])])])])},_=[];function y(){return{}}function C(){this.$emit("close")}var w={name:"ErrorOverlay",props:{error:{type:Object,default:function(){}}},data:y,methods:{onDismiss:C}},b=w,S=(n("ff27"),Object(m["a"])(b,g,_,!1,null,"1dde40ec",null)),j=S.exports,O=n("726c"),R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"LostConnectionOverlay"},[n("div",{staticClass:"LostConnectionOverlay__focus"},[n("div",{staticClass:"LostConnectionOverlay__headerBox"},[n("i",{staticClass:"LostConnectionOverlay__icon material-icons md-36"},[t._v("signal_wifi_off")]),n("div",{staticClass:"LostConnectionOverlay__titleBox"},[n("div",{staticClass:"LostConnectionOverlay__titleHeader"},[t._v("No Response")]),n("div",{staticClass:"LostConnectionOverlay__title"},[t._v("Lost Kernel Connection")])])]),n("div",{staticClass:"LostConnectionOverlay__infoBox"},[n("div",{staticClass:"LostConnectionOverlay__message"},[t._v("Trying to re-establish communication with the Cauldron kernel...")])])])])}],x={name:"LostConnectionOverlay"},T=x,k=(n("771f"),Object(m["a"])(T,R,E,!1,null,"73a56477",null)),P=k.exports,L=n("025e"),N="success",$="failure",W="lost";function D(){var t=this.$store.getters.warnings;return t.length<1?null:t[0]}function I(){var t=this.$store.getters.warnings.concat();t.length<1||(t.shift(),this.$store.commit("warnings",t))}function M(){var t=this.$store.getters.errors;return t.length<1?null:t[0]}function q(){var t=this.$store.getters.errors.concat();t.length<1||(t.shift(),this.$store.commit("errors",t))}function B(t,e){return this.recentResponses.push({kind:t,responseOrError:e,success:t===N}),this.recentResponses.length>50&&this.recentResponses.shift(),e}function H(){var t=this,e=this.$store.getters.isStatusDirty;e&&this.$store.commit("isStatusDirty",!1);var n=this.$store.getters.running?500:1e3;return i["a"].updateStatus(e?0:n).then((function(e){if(e.data.success)return t.recordResponse(N,e),e;var n=e.data.errors.map((function(t){return t.code}));return-1!==n.indexOf("LOST_REMOTE_CONNECTION")?t.recordResponse(W,e):(t.recordResponse($,e),console.error("Failed update response",e.data),e)})).catch((function(e){return e.request?"ECONNABORTED"===e.code||408===(e.response||{}).status?(t.recordResponse(W,e),L["a"].thenWait(200)):e.response?(t.recordResponse($,e),L["a"].thenWait(200)):(t.recordResponse(W,e),L["a"].thenWait(500)):(t.recordResponse($,e),O["a"].addError({code:"UNKNOWN_ERROR",message:"Malformed request attempt has halted communication with the kernel."}),console.warn(e),Promise.resolve())})).finally((function(){var e=t.$router.currentRoute.path,n=t.$store.getters,r=n.project,a=n.view;a&&!e.startsWith("/view")?t.$router.push("/view"):a||!r||e.startsWith("/project")?null===r&&e.startsWith("/project")?t.$router.push("/"):null===a&&e.startsWith("/view")&&t.$router.push("/"):t.$router.push("/project"),clearTimeout(t.timeoutHandle),t.timeoutHandle=setTimeout(t.updateStatusLoop,100)}))}function A(){if(0===this.recentResponses.length)return!1;var t=this.recentResponses.slice(-1)[0].kind;return t===W}function F(){return{timeoutHandle:null,recentResponses:[]}}function U(){return this.updateStatusLoop()}function z(){clearInterval(this.timeoutHandle)}var K={name:"App",components:{LostConnectionOverlay:P,ErrorOverlay:j,WarningOverlay:h},data:F,computed:{warning:D,error:M,showLostConnection:A},mounted:U,beforeDestroy:z,methods:{recordResponse:B,updateStatusLoop:H,onDismissWarning:I,onDismissError:q}},Q=K,G=(n("5c0b"),Object(m["a"])(Q,o,s,!1,null,null,null)),J=G.exports,V=n("8c4f"),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home"},[n("div",{staticClass:"Home__splash"},[n("div",{staticClass:"Home__focus"},[n("img",{staticClass:"Home__logo",attrs:{src:t.logo}}),n("div",{staticClass:"Home__title"},[t._v("Cauldron")]),n("div",{staticClass:"Home__tagline"},[n("div",[t._v("Interactive Computing Environment")]),n("div",{staticClass:"Home__version"},[t._v("v"+t._s(t.info.version))])]),n("div",{staticClass:"Home__buttonBox"},[n("div",{staticClass:"button Home__button tooltip",attrs:{"data-tooltip":"A new notebook project"},on:{click:t.createProject}},[t._v("Create")]),n("div",{staticClass:"button Home__button tooltip",attrs:{"data-tooltip":"An existing notebook project from a local directory"},on:{click:t.openProjectBrowser}},[t._v("Open")])])])]),t.recentProjects.length>0?n("div",{staticClass:"Home__recent"},t._l(t.recentProjects,(function(e){return n("recent-item",{attrs:{item:e},on:{click:t.onProjectClick}})})),1):t._e(),t.loadingMessage?n("loader",{attrs:{message:t.loadingMessage}}):t._e()],1)},Y=[],Z=(n("7f7f"),n("2423")),tt=n.n(Z),et=n("ea2f"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RecentItem",on:{click:t.openProject}},[t._m(0),n("div",{staticClass:"RecentItem__box"},[n("div",{staticClass:"RecentItem__title"},[t._v(t._s(t.item.name))]),n("div",{staticClass:"RecentItem__path"},[t._v(t._s(t.item.directory.short))]),n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"top"},expression:"{ placement: 'top' }"}],staticClass:"RecentItem__date",attrs:{content:t.item.modified.display}},[t._v(t._s(t.item.modified.elapsed))])]),n("div",{staticClass:"RecentItem__rightBox"},[n("div",{staticClass:"RecentItem__remove tooltip is-tooltip-left is-tooltip-danger",attrs:{"data-tooltip":"Remove from recent list"},on:{click:function(e){return e.stopPropagation(),t.removeFromRecent(e)}}},[n("i",{staticClass:"material-icons md-18"},[t._v("close")])])])])},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RecentItem__leftBox"},[n("div",{staticClass:"material-icons RecentItem__icon"},[t._v("folder_open")])])}];function at(t){return this.$emit("click",{action:"remove",event:t,item:this.item})}function ot(t){return this.$emit("click",{action:"open",event:t,item:this.item})}var st={name:"RecentItem",props:{item:{type:Object,default:function(){}}},methods:{openProject:ot,removeFromRecent:at}},it=st,ct=(n("46aa"),Object(m["a"])(it,nt,rt,!1,null,"48a6cff4",null)),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RemoteConnect tooltip is-tooltip-right",class:{"RemoteConnect--connected":t.connected,"RemoteConnect--disconnected":!t.connected},attrs:{"data-tooltip":"Manage remote connection"}},[n("div",{staticClass:"material-icons"},[t._v(t._s(t.icon))])])},ft=[];function dt(){return this.status.connected?"link":"link_off"}function pt(){return this.status.connected||!1}var mt={name:"RemoteConnect",props:{status:{type:Object,default:function(){}}},computed:{connected:pt,icon:dt}},vt=mt,ht=(n("6f64"),Object(m["a"])(vt,lt,ft,!1,null,"1504decf",null)),gt=ht.exports;function _t(){return this.$router.push("/create")}function yt(){return this.$router.push("/open")}function Ct(t){var e=this,n=t.item.uid;if("remove"===t.action)return this.loadingMessage="Removing Recent Project Entry",i["a"].execute("list erase ".concat(n," --yes")).then((function(t){e.recentProjects=t.data.data.projects,e.loadingMessage=null}));var r=t.item.name,a=t.item.directory.absolute;return this.loadingMessage='Loading "'.concat(r,'" Project'),i["a"].execute('open "'.concat(a,'"')).then((function(t){i["a"].markStatusDirty(),t.data.success||(e.loadingMessage=null)}))}function wt(){return{logo:tt.a,loadingMessage:"Synchronizing with Cauldron Kernel",info:{version:"unknown"},recentProjects:[]}}function bt(){var t=this;return i["a"].updateStatus(500).then((function(e){return t.info=e.data.data,i["a"].execute("list recent")})).then((function(e){t.recentProjects=e.data.data.projects,t.loadingMessage=null}))}var St={name:"Home",components:{Loader:et["a"],RecentItem:ut,RemoteConnect:gt},data:wt,mounted:bt,methods:{createProject:_t,onProjectClick:Ct,openProjectBrowser:yt}},jt=St,Ot=(n("80cf"),Object(m["a"])(jt,X,Y,!1,null,"5d9f75e5",null)),Rt=Ot.exports;r["a"].use(V["a"]);var Et=new V["a"]({mode:"history",base:"/v1/app/",routes:[{path:"/",name:"home",component:Rt},{path:"/project",name:"project",component:function(){return Promise.all([n.e("create~project"),n.e("project")]).then(n.bind(null,"b7bc"))}},{path:"/create",name:"create",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"f28d"))}},{path:"/open",name:"open",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"8d29"))}},{path:"/view",name:"viewer",component:function(){return Promise.all([n.e("create~project"),n.e("create")]).then(n.bind(null,"03e7"))}}]}),xt=n("c0d6");r["a"].use(a["b"]),r["a"].component("tippy",a["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Et,store:xt["a"],render:function(t){return t(J)}}).$mount("#app")},5843:function(t,e,n){"use strict";n("7f7f");var r=n("c0d6");function a(t){var e=(r["a"].getters.project||{}).steps||[],n=e.filter((function(e){return e.name===t}));return n.length>0?n[0]:null}function o(){var t=(r["a"].getters.project||{}).steps||[],e=t.filter((function(t){return t.status.selected}));return e.length>0?e[0]:null}function s(t){return r["a"].getters.queuedStepsToRun.filter((function(e){return e===t})).length>0}function i(t){var e=a(t);return null!==e&&e.status.running}function c(t){if(!s(t)&&!i(t)){var e=r["a"].getters.queuedStepsToRun.concat([t]);r["a"].commit("queuedStepsToRun",e)}}function u(t){var e=r["a"].getters.queuedStepsToRun.concat(),n=e.indexOf(t);return!(n<0)&&(e.splice(n,1),r["a"].commit("queuedStepsToRun",e),!0)}function l(t){var e=r["a"].getters.queuedStepsToRun.concat(),n=t.filter((function(t){return e.indexOf(t)<0}));n.length>0&&r["a"].commit("queuedStepsToRun",e.concat(n))}function f(t){r["a"].commit("runningStepName",t),r["a"].commit("running",null!==t)}function d(){r["a"].commit("queuedStepsToRun",[])}e["a"]={addToQueue:l,clearQueue:d,getStep:a,getSelectedStep:o,isStepQueued:s,isStepRunning:i,queueStepToRun:c,removeStepFromQueue:u,setStepRunning:f}},"5c0b":function(t,e,n){"use strict";var r=n("e332"),a=n.n(r);a.a},"6f64":function(t,e,n){"use strict";var r=n("473f"),a=n.n(r);a.a},"726c":function(t,e,n){"use strict";var r=n("c0d6"),a=["EXECUTION_ERROR"];function o(t){var e=r["a"].getters.errors.concat(),n=e.map((function(t){return t.code})).concat(a),o=(t||[]).filter((function(t){return-1===n.indexOf(t.code)}));o&&r["a"].commit("errors",e.concat(o))}function s(t){return o([t])}function i(t){var e=r["a"].getters.warnings.concat(),n=e.map((function(t){return t.code})),a=(t||[]).filter((function(t){return-1===n.indexOf(t.code)}));a&&r["a"].commit("warnings",e.concat(a))}function c(t){return i([t])}e["a"]={addErrors:o,addError:s,addWarnings:i,addWarning:c}},"771f":function(t,e,n){"use strict";var r=n("b3be"),a=n.n(r);a.a},"80cf":function(t,e,n){"use strict";var r=n("491d"),a=n.n(r);a.a},8382:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Spinner"},[n("svg",{staticClass:"Spinner__box",attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size}},[n("circle",{staticClass:"Spinner__path",class:t.themingClasses,attrs:{fill:"none","stroke-linecap":"round","stroke-width":t.thickness,cx:t.half,cy:t.half,r:t.radius}})])])},a=[];n("c5f6");function o(){return this.size}function s(){return Math.floor(this.size/2)}function i(){return this.half-this.thickness}function c(){return Math.max(2,Math.floor(6*Math.min(1,this.size/60)))}function u(){return"Spinner__path--".concat(this.theme)}var l={name:"Spinner",props:{size:{type:Number,default:40},theme:{type:String,default:"light"}},computed:{extent:o,half:s,radius:i,thickness:c,themingClasses:u}},f=l,d=(n("e675"),n("2877")),p=Object(d["a"])(f,r,a,!1,null,"38b6b456",null);e["a"]=p.exports},8711:function(t,e,n){},a88a:function(t,e,n){},b3be:function(t,e,n){},ba6a:function(t,e,n){"use strict";n("7f7f");var r=n("bc3a"),a=n.n(r),o=n("c0d6"),s=n("5843"),i=n("3fa3"),c=n("726c"),u={lastInvocationTimestamp:0};function l(){o["a"].commit("isStatusDirty",!0)}function f(t){var e=((t||{}).data||{}).errors||[];c["a"].addErrors(e)}function d(t){var e=((t||{}).data||{}).warnings||[];c["a"].addWarnings(e)}function p(){var t=window.location.origin;return a.a.create({baseURL:"".concat(t,"/v1/api/"),timeout:5e3,headers:{"Content-Type":"application/json"}})}function m(t){return p().get(t).catch((function(e){throw console.error("FAILED GET::".concat(t),e),e}))}function v(t,e){return p().post(t,e||{}).catch((function(n){throw console.error("FAILED POST::".concat(t),e,n),n}))}function h(t){return v("/command/sync",{command:t}).then((function(t){return f(t),d(t),t}))}function g(t){return v("/command/async",{command:t}).then((function(t){return f(t),d(t),t}))}function _(t){var e=t.data.data.step_changes||[],n=!t.data.success||(t.data.errors||[]).length>0||e.filter((function(t){return t.has_error})).length>0;return n&&s["a"].clearQueue(),n}function y(t){return o["a"].commit("running",!0),o["a"].commit("runningStepName",t),g('run "'.concat(t,'" --print-status'),t).then((function(t){_(t);var e=t.data;return i["a"].applyStepModifications(e.data.step_renames,e.data.step_changes).then((function(){return l(),t}))}))}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Math.max(u.lastInvocationTimestamp,0);if(t>0){var r=(new Date).getTime(),a=r-n;if(a<t)return Promise.resolve({data:o["a"].getters.status})}var s=e?"yes":null,c=(o["a"].getters.status||{}).timestamp||0,l={last_timestamp:c,force:s};return u.lastInvocationTimestamp=(new Date).getTime(),v("/status",l).then((function(t){var e=t.data;if(!e)return Promise.resolve(t);e.success||(u.lastInvocationTimestamp=0);var n=e.data.project,r=(n||{}).steps||[],a=_(t),s=(o["a"].getters.status||{}).hash||"",c=e.hash||"";if(s===c)return t;var l=r.filter((function(t){return t.status.running})),f=!a&&l.length>0;return o["a"].commit("status",e),o["a"].commit("project",n),o["a"].commit("running",f||o["a"].getters.queuedStepsToRun.length>0),i["a"].applyStepModifications(e.data.step_renames,e.data.step_changes).then((function(){if(!f&&o["a"].getters.queuedStepsToRun.length>0){var e=o["a"].getters.queuedStepsToRun[0];return o["a"].commit("queuedStepsToRun",o["a"].getters.queuedStepsToRun.slice(1)),y(e)}return o["a"].commit("runningStepName",f?l[0].name:null),t}))}))}function w(){return v("/command/abort").then((function(t){f(t),d(t);var e=t.data;return o["a"].commit("project",e.data.project),o["a"].commit("running",!1),i["a"].applyStepModifications(e.data.step_renames,e.data.step_changes).then((function(){return l(),t}))}))}e["a"]={abortExecution:w,get:m,post:v,execute:h,executeAsync:g,updateStatus:C,runStep:y,markStatusDirty:l}},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62");function o(){return{data:{success:!0,timestamp:0}}}r["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{followSteps:!0,errors:[],warnings:[],isStatusDirty:!0,project:null,queuedStepsToRun:[],running:!1,runningStepName:null,savingFile:!1,status:o()},mutations:{followSteps:function(t,e){t.followSteps=e||!1},errors:function(t,e){t.errors=e||[]},warnings:function(t,e){t.warnings=e||[]},isStatusDirty:function(t,e){t.isStatusDirty=e||!1},project:function(t,e){t.project=e||null},queuedStepsToRun:function(t,e){t.queuedStepsToRun=e||[]},running:function(t,e){t.running=e||!1},runningStepName:function(t,e){t.runningStepName=e||null},savingFile:function(t,e){t.savingFile=e||!1},status:function(t,e){t.status=e||o()}},getters:{followSteps:function(t){return t.followSteps},errors:function(t){return t.errors},warnings:function(t){return t.warnings},isStatusDirty:function(t){return t.isStatusDirty},project:function(t){return t.project},queuedStepsToRun:function(t){return t.queuedStepsToRun},running:function(t){return t.running},runningStepName:function(t){return t.runningStepName},savingFile:function(t){return t.savingFile},status:function(t){return t.status},view:function(t){return((t.status||{}).data||{}).view||null}}})},cea1:function(t,e,n){},e332:function(t,e,n){},e675:function(t,e,n){"use strict";var r=n("cea1"),a=n.n(r);a.a},ea2f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Loader"},[n("div",{staticClass:"Loader__focus"},[n("spinner",{staticClass:"Loader__spinner"}),t.message?n("div",{staticClass:"Loader__message"},[t._v(t._s(t.message))]):t._e()],1)])},a=[],o=n("8382");function s(){return{}}var i={name:"Loader",components:{Spinner:o["a"]},props:{message:{type:String,default:""}},data:s},c=i,u=(n("1aaf"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,"d43f3f76",null);e["a"]=l.exports},ff27:function(t,e,n){"use strict";var r=n("0fd6"),a=n.n(r);a.a}});
//# sourceMappingURL=app.9df40a14.js.map