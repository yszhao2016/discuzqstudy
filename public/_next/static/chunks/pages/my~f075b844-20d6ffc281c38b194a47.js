_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(s.default.useContext(a.AmpStateContext))};var n,s=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||s&&c}},"4Brf":function(e,t,r){"use strict";var n=r("I+eb"),s=r("g6v/"),a=r("2oRo"),c=r("UTVS"),o=r("hh1v"),i=r("m/L8").f,u=r("6JNq"),l=a.Symbol;if(s&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(d[t]=!0),t};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,m="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;i(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=h.call(e);if(c(d,e))return"";var r=m?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},"4xcg":function(e,t,r){"use strict";r("pNMO"),r("4Brf"),r("ma9I");var n,s=r("nKUr"),a=r("lwsE"),c=r.n(a),o=r("W8MJ"),i=r.n(o),u=r("7W2i"),l=r.n(u),d=r("a1gu"),f=r.n(d),p=r("Nsbk"),h=r.n(p),m=r("q1tI"),v=r.n(m),j=r("kMSe"),b=r("+3IH"),y=r("g4pe"),O=r.n(y),x=(r("yXV3"),r("rB9j"),function(e,t,r,n){var s=g(e+t),a=[],c=[];if(r||!w(s,a)){r&&document.getElementById(s)&&document.getElementById(s).parentNode.removeChild(document.getElementById(s)),a.push(s);var o=document.createElement("script");o.type="text/javascript",o.id=s;try{e?(o.src=e,o.onloadDone=!1,o.onload=function(){o.onloadDone=!0,c[e]=1},o.onreadystatechange=function(){"loaded"!==o.readyState&&"complete"!==o.readyState||o.onloadDone||(o.onloadDone=!0,c[e]=1)}):t&&(o.text=t),document.getElementsByTagName("head")[0].appendChild(o)}catch(i){console.log(i)}}}),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,r=0,n=0,s="",a="";for(a=t-e.length%t,n=0;n<a;n+=1)e+="0";for(;r<e.length;)s=C(s,e.substr(r,t)),r+=t;return s},C=function(e,t){for(var r="",n=Math.max(e.length,t.length),s=0;s<n;s++){var a=e.charCodeAt(s)^t.charCodeAt(s);r+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52)}return r},w=function(e,t){if("string"===typeof e||"number"===typeof e)for(var r in t)if(t[r]===e)return!0;return!1};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var k=Object(j.c)("site")(n=Object(j.d)(n=function(e){l()(r,e);var t=N(r);function r(e){return c()(this,r),t.call(this,e)}return i()(r,[{key:"componentDidMount",value:function(){var e,t,r;!function(e){if(-1===e.indexOf("<script"))return e;for(var t=/<script[^\>]*?>([^\x00]*?)<\/script>/gi,r=[];r=t.exec(e);){var n=/<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i,s=[];(s=n.exec(r[0]))?x(s[1],"",s[2],s[3]):(s=(n=/<script(.*?)>([^\x00]+?)<\/script>/i).exec(r[0]),x("",s[2],-1!==s[1].indexOf("reload=")))}}((null===(e=this.props.site)||void 0===e||null===(t=e.webConfig)||void 0===t||null===(r=t.setSite)||void 0===r?void 0:r.siteStat)||"")}},{key:"formatTitle",value:function(){var e=this.props,t=e.site,r=e.title,n=e.showSiteName,s=void 0===n||n,a=Object(b.a)(t,"webConfig.setSite.siteName","\u6b22\u8fce\u60a8");return r&&""!==r&&(a="".concat(r).concat(s?" - ".concat(a):"")),a}},{key:"formatKeywords",value:function(){var e=this.props,t=e.site,r=e.keywords,n=Object(b.a)(t,"webConfig.setSite.siteKeywords","\u6b22\u8fce\u60a8");return r&&""!==r&&(n="".concat(r," - ").concat(n)),n}},{key:"formatDescription",value:function(){var e=this.props,t=e.site,r=e.description,n=Object(b.a)(t,"webConfig.setSite.siteIntroduction","\u6b22\u8fce\u60a8");return r&&""!==r&&(n=r),n}},{key:"render",value:function(){var e,t,r,n=(null===(e=this.props.site)||void 0===e||null===(t=e.webConfig)||void 0===t||null===(r=t.setSite)||void 0===r?void 0:r.siteFavicon)||"";return Object(s.jsxs)(O.a,{children:[Object(s.jsx)("meta",{name:"keywords",content:this.formatKeywords()}),Object(s.jsx)("meta",{name:"description",content:this.formatDescription()}),n&&Object(s.jsx)("link",{rel:"icon",href:n}),Object(s.jsx)("title",{children:this.formatTitle()})]})}}]),r}(v.a.Component))||n)||n;t.a=k},"5Tg+":function(e,t,r){var n=r("tiKp");t.f=n},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=n?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},c=r("lwAK"),o=r("FYa8"),i=r("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=s.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var a=!0,c=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){c=!0;var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(s.type){case"title":case"base":t.has(s.type)?a=!1:t.add(s.type);break;case"meta":for(var i=0,u=f.length;i<u;i++){var l=f[i];if(s.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var d=s.props[l],p=n[l]||new Set;"name"===l&&c||!p.has(d)?(p.add(d),n[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,s.useContext)(c.AmpStateContext),n=(0,s.useContext)(o.HeadManagerContext);return s.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,i.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},ARGO:function(e,t,r){"use strict";r.r(t);r("ma9I"),r("rB9j"),r("UxlC");var n,s=r("nKUr"),a=r("lwsE"),c=r.n(a),o=r("W8MJ"),i=r.n(o),u=r("7W2i"),l=r.n(u),d=r("a1gu"),f=r.n(d),p=r("Nsbk"),h=r.n(p),m=r("q1tI"),v=r.n(m),j=r("QcND"),b=r("zZWi"),y=r("kMSe"),O=(r("E9XD"),r("tkto"),r("07d7"),r("B6y2"),r("5s+n"),r("RIqP")),x=r.n(O),g=r("o0o1"),C=r.n(g),w=(r("ls82"),r("yXPU")),N=r.n(w),k=r("2rmp"),I=r("x2xJ"),S=r.n(I),M=r("wdT/"),P=r.n(M),R=r("GuWI"),A=r("QLYM"),T=r("E+SJ"),D=r("JhUJ"),U=r("Niza"),E=r("INMq"),_=r("20a2");function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var B,W=Object(y.c)("site")(n=Object(y.c)("user")(n=Object(y.d)(n=function(e){l()(r,e);var t=L(r);function r(e){var n;return c()(this,r),(n=t.call(this,e)).fetchUserThreads=N()(C.a.mark((function e(){var t,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.props.user.getUserThreads();case 3:t=e.sent,n.props.user.setUserThreads(t),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),r="\u52a0\u8f7d\u7528\u6237\u5217\u8868\u5931\u8d25",e.t0.Code&&0!==e.t0.Code&&(r=e.t0.Msg),P.a.error({content:r,duration:2e3,hasMask:!1});case 13:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.onRefresh=N()(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.isLoading){e.next=5;break}return e.next=4,n.fetchUserThreads();case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",Promise.resolve());case 6:case"end":return e.stop()}}),e)}))),n.fetchUserThreads=N()(C.a.mark((function e(){var t,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.props.user.getUserThreads();case 3:t=e.sent,n.unMount||n.props.user.setUserThreads(t),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),r="\u52a0\u8f7d\u7528\u6237\u5217\u8868\u5931\u8d25",e.t0.Code&&0!==e.t0.Code&&(r=e.t0.Msg),P.a.error({content:r,duration:2e3,hasMask:!1});case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.beforeRouterChange=function(e){"/my"!==e&&(/thread\//.test(e)||n.props.user.clearUserThreadsInfo())},n.componentDidMount=N()(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.router.events.on("routeChangeStart",n.beforeRouterChange),!n.props.user.id){e.next=18;break}return e.next=4,n.props.user.updateUserInfo(n.props.user.id);case 4:if(e.prev=4,n.props.user.userThreads[1]){e.next=11;break}return n.props.user.userThreadsPage=1,n.props.user.userThreadsTotalCount=0,n.props.user.userThreadsTotalPage=1,e.next=11,n.fetchUserThreads();case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0),e.t0.Code&&P.a.error({content:e.t0.Msg||"\u83b7\u53d6\u7528\u6237\u4e3b\u9898\u5217\u8868\u5931\u8d25",duration:2e3});case 17:n.setState({isLoading:!1});case 18:case"end":return e.stop()}}),e,null,[[4,13]])}))),n.componentWillUnmount=function(){n.unMount=!0,n.props.router.events.off("routeChangeStart",n.beforeRouterChange)},n.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(x()(e),x()(t))}))},n.isUnmount=!1,n.state={isLoading:!0},n}return i()(r,[{key:"render",value:function(){var e=this.state.isLoading,t=this.props,r=t.site,n=t.user,a=r.platform,c=n.userThreads,o=n.userThreadsTotalCount,i=n.userThreadsPage,u=n.userThreadsTotalPage,l=this.formatUserThreadsData(c);return Object(s.jsx)(E.a,{curr:"my",pageName:"my",showHeader:!1,showTabBar:!0,onRefresh:this.onRefresh,noMore:!e&&i>=u,immediateCheck:!0,children:Object(s.jsxs)("div",{className:k.a.mobileLayout,children:[Object(s.jsx)(R.a,{}),Object(s.jsx)(A.a,{platform:a}),Object(s.jsx)("div",{className:k.a.unit,children:Object(s.jsx)(D.a,{})}),Object(s.jsx)("div",{className:k.a.unit,children:Object(s.jsx)(T.a,{})}),Object(s.jsxs)("div",{className:k.a.unit,children:[Object(s.jsxs)("div",{className:k.a.threadUnit,children:[Object(s.jsx)("div",{className:k.a.threadTitle,children:"\u4e3b\u9898"}),Object(s.jsxs)("div",{className:k.a.threadCount,children:[o,"\u4e2a\u4e3b\u9898"]})]}),Object(s.jsx)("div",{className:k.a.dividerContainer,children:Object(s.jsx)(S.a,{className:k.a.divider})}),Object(s.jsx)("div",{className:k.a.threadItemContainer,children:(null===l||void 0===l?void 0:l.length)>0&&Object(s.jsx)(U.a,{data:l})})]})]})})}}]),r}(v.a.Component))||n)||n)||n,z=Object(_.withRouter)(W),J=(r("2B1R"),r("RygP")),F=r("bK+J"),H=r("2FFH"),K=r("DetZ"),q=r.n(K),X=r("MCNy"),V=r.n(X),G=r("bAjH"),Q=r("uPFr"),Y=r("B5JU"),Z=r.n(Y),$=r("Bvw4");function ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var te=Object(y.c)("user")(B=Object(y.d)(B=function(e){l()(r,e);var t=ee(r);function r(){return c()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props.user;return Object(s.jsxs)("div",{className:H.a.userCenterPost,onClick:function(){Z.a.push({url:"/thread/post"})},children:[Object(s.jsx)("div",{className:H.a.userCenterPostTitle,children:"\u53d1\u5e16"}),Object(s.jsxs)("div",{className:H.a.userCenterPostContent,children:[Object(s.jsx)("div",{className:H.a.userCenterPostAvatar,children:Object(s.jsx)($.a,{image:e.avatarUrl,name:e.nickname,circle:!0})}),Object(s.jsxs)("div",{style:{width:"100%"},children:[Object(s.jsx)("div",{className:H.a.userCenterPostInfo,children:Object(s.jsx)("div",{className:H.a.userCenterPostInput,children:Object(s.jsx)(q.a,{style:{width:"100%",cursor:"pointer"},className:H.a.postInput,disabled:!0,placeholder:"\u5206\u4eab\u65b0\u9c9c\u4e8b"})})}),Object(s.jsxs)("div",{className:H.a.userCenterPostList,children:[this.props.user.threadExtendPermissions[Q.h.image]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"PictureOutlinedBig"})}),this.props.user.threadExtendPermissions[Q.h.video]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"VideoOutlined"})}),this.props.user.threadExtendPermissions[Q.h.voice]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"MicroOutlined"})}),this.props.user.threadExtendPermissions[Q.h.goods]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"ShoppingCartOutlined"})}),this.props.user.threadExtendPermissions.createThread&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"QuestionOutlined"})}),this.props.user.threadExtendPermissions[G.c.attach]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"PaperClipOutlined"})}),this.props.user.threadExtendPermissions[G.c.redpacket]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"RedPacketOutlined"})}),this.props.user.threadExtendPermissions[G.c.pay]&&Object(s.jsx)("div",{className:H.a.userCenterPostListItem,children:Object(s.jsx)(V.a,{color:"#8590A6",size:20,name:"GoldCoinOutlined"})})]})]})]})]})}}]),r}(v.a.Component))||B)||B;te.displayName="UserCenterPost";var re,ne=te,se=r("Bqkf"),ae=r("cZ5D");function ce(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var oe,ie=Object(y.c)("user")(re=Object(y.c)("message")(re=Object(y.d)(re=function(e){l()(r,e);var t=ce(r);function r(){var e;c()(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).handleMyMessage=function(){Z.a.push({url:"/message"})},e.handleMyWallet=function(){Z.a.push({url:"/wallet"})},e.handleMySiteInfo=function(){Z.a.push({url:"/forum"})},e.handleMyInvite=function(){Z.a.push({url:"/invite"})},e.handleMyBan=function(){Z.a.push({url:"/my/block"})},e.handleMyBuy=function(){Z.a.push({url:"/my/buy"})},e.handleMyDraft=function(){Z.a.push({url:"/my/draft"})},e.handleMyCollect=function(){Z.a.push({url:"/my/collect"})},e.handleMyLike=function(){Z.a.push({url:"/my/like"})},e}return i()(r,[{key:"render",value:function(){var e=this.props.message.totalUnread;return Object(s.jsxs)("div",{className:"".concat(se.a.userCenterAction," ").concat(this.props.user.isAdmini&&se.a.userCenterColumnStyle),children:[Object(s.jsxs)("div",{onClick:this.handleMyMessage,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)("div",{className:se.a.userMessage,children:Object(s.jsx)(ae.a,{unreadCount:e,children:Object(s.jsx)(V.a,{name:"MailOutlined",size:20})})})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u6d88\u606f"})]}),Object(s.jsxs)("div",{onClick:this.handleMyWallet,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"PayOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u94b1\u5305"})]}),Object(s.jsxs)("div",{onClick:this.handleMyCollect,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"CollectOutlinedBig",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u6536\u85cf"})]}),Object(s.jsxs)("div",{onClick:this.handleMyLike,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"LikeOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u70b9\u8d5e"})]}),Object(s.jsxs)("div",{onClick:this.handleMyBan,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"ShieldOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u5c4f\u853d"})]}),Object(s.jsxs)("div",{onClick:this.handleMyBuy,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"ShoppingCartOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u8d2d\u4e70"})]}),Object(s.jsxs)("div",{onClick:this.handleMyDraft,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"RetrieveOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u6211\u7684\u8349\u7a3f\u7bb1"})]}),Object(s.jsxs)("div",{onClick:this.handleMySiteInfo,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"NotepadOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u7ad9\u70b9\u4fe1\u606f"})]}),!this.props.user.isAdmini&&Object(s.jsxs)("div",{onClick:this.handleMyInvite,className:se.a.userCenterActionItem,children:[Object(s.jsx)("div",{className:se.a.userCenterActionItemIcon,children:Object(s.jsx)(V.a,{name:"NotbookOutlined",size:20})}),Object(s.jsx)("div",{className:se.a.userCenterActionItemDesc,children:"\u63a8\u5e7f\u9080\u8bf7"})]})]})}}]),r}(v.a.Component))||re)||re)||re,ue=r("pN5v"),le=r("WNcC"),de=r("wXCO"),fe=(r("VVxn"),r("b+pO"),r("HoAE"),r("9XgB")),pe=r("7KEy"),he=r("z/8X");r("Xc7j");function me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var ve,je=Object(y.c)("site")(oe=Object(y.c)("user")(oe=Object(y.d)(oe=function(e){l()(r,e);var t=me(r);function r(e){var n;return c()(this,r),(n=t.call(this,e)).fetchUserThreads=N()(C.a.mark((function e(){var t,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.props.user.getUserThreads();case 3:t=e.sent,n.unMount||n.props.user.setUserThreads(t),e.next=13;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),r="\u52a0\u8f7d\u7528\u6237\u5217\u8868\u5931\u8d25",e.t0.Code&&0!==e.t0.Code&&(r=e.t0.Msg),P.a.error({content:r,duration:2e3,hasMask:!1});case 13:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.componentWillUnmount=function(){n.unMount=!0,n.props.user.clearUserThreadsInfo()},n.moreFans=function(){n.setState({showFansPopup:!0})},n.moreFollow=function(){n.setState({showFollowPopup:!0})},n.onSearch=function(e){n.props.router.replace("/search?keyword=".concat(e))},n.onContainerClick=function(e){var t=e.id;Z.a.push({url:"/user/".concat(t)})},n.formatUserThreadsData=function(e){return 0===Object.keys(e).length?[]:Object.values(e).reduce((function(e,t){return[].concat(x()(e),x()(t))}))},n.renderRight=function(){var e,t="none"!==n.props.site.wechatEnv&&!!n.props.user.wxNickname;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(le.a,{platform:"h5",type:"normal",title:"\u4e2a\u4eba\u8d44\u6599",isShowMore:!0,noData:!1,moreText:"\u7f16\u8f91\u8d44\u6599",onShowMore:function(){Z.a.push({url:"/my/edit"})},className:"".concat(J.a.borderRadius),children:[(null===(e=n.props.site)||void 0===e?void 0:e.isSmsOpen)&&Object(s.jsxs)("div",{className:J.a.userInfoWrapper,children:[Object(s.jsx)("div",{className:J.a.userInfoKey,children:"\u624b\u673a\u53f7\u7801"}),Object(s.jsx)("div",{className:J.a.userInfoValue,children:n.props.user.mobile||"\u672a\u7ed1\u5b9a"})]}),t&&Object(s.jsxs)("div",{className:J.a.userInfoWrapper,children:[Object(s.jsx)("div",{className:J.a.userInfoKey,children:"\u5fae\u4fe1"}),Object(s.jsxs)("div",{className:"".concat(J.a.userInfoValue," ").concat(J.a.wxContent),children:[Object(s.jsx)($.a,{size:"small",image:n.props.user.wxHeadImgUrl,name:n.props.user.wxNickname}),Object(s.jsx)("span",{className:J.a.wecahtNickname,children:n.props.user.wxNickname})]})]}),Object(s.jsxs)("div",{className:J.a.userInfoWrapper,children:[Object(s.jsx)("div",{className:J.a.userInfoKey,children:"\u7b7e\u540d"}),Object(s.jsx)("div",{className:J.a.userInfoValue,children:n.props.user.signature||"\u8fd9\u4e2a\u4eba\u5f88\u61d2\uff0c\u4ec0\u4e48\u4e5f\u6ca1\u7559\u4e0b~"})]})]}),Object(s.jsx)(fe.a,{userId:n.props.user.id}),Object(s.jsx)(pe.a,{userId:n.props.user.id}),Object(s.jsx)(de.a,{})]})},n.renderContent=function(){var e=n.state.isLoading,t=n.props.user,r=t.userThreads,a=t.userThreadsTotalCount,c=n.formatUserThreadsData(r),o=!0;return void 0!==a&&null!==a||(o=!1),Object(s.jsxs)("div",{className:J.a.userContent,children:[Object(s.jsx)("div",{className:J.a.section,children:Object(s.jsx)(ne,{})}),Object(s.jsx)("div",{className:J.a.section,children:Object(s.jsx)(ie,{})}),Object(s.jsx)(le.a,{title:"\u4e3b\u9898",type:"normal",isShowMore:!1,noData:!(null!==c&&void 0!==c&&c.length),isLoading:e,leftNum:o?"".concat(a,"\u4e2a\u4e3b\u9898"):"",mold:"plane",children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(s.jsx)(he.a,{data:e,className:0===t&&J.a.threadStyle},t)}))})]})},n.isUnmount=!1,n.state={showFansPopup:!1,showFollowPopup:!1,isLoading:!0},n}return i()(r,[{key:"componentDidMount",value:function(){var e=N()(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.user.updateUserInfo(this.props.user.id);case 2:return e.next=4,this.fetchUserThreads();case 4:this.setState({isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loginOut",value:function(){Object(F.a)(),window.location.replace("/")}},{key:"render",value:function(){var e,t=this.state.isLoading,r=this.props.user,n=r.userThreadsPage,a=r.userThreadsTotalPage,c=(r.getUserThreads,r.userThreads),o=this.formatUserThreadsData(c),i=!(null!==(e=this.props.user)&&void 0!==e&&e.username),u=n;return a>1&&(u-=1),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(ue.a,{showRefresh:!1,onSearch:this.onSearch,right:this.renderRight,immediateCheck:!1,noMore:a<=u,onRefresh:this.fetchUserThreads,showLayoutRefresh:!t&&!(null===o||void 0===o||!o.length),showHeaderLoading:i,children:this.renderContent()})})}}]),r}(v.a.Component))||oe)||oe)||oe,be=r("J0pL");function ye(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var Oe=Object(y.c)("site")(ve=Object(y.d)(ve=function(e){l()(r,e);var t=ye(r);function r(){var e;c()(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).logout=function(){Object(F.a)(),window.location.replace("/")},e}return i()(r,[{key:"render",value:function(){return Object(s.jsx)(be.a,{h5:Object(s.jsx)(z,{}),pc:Object(s.jsx)(je,{}),title:"\u4e2a\u4eba\u4e2d\u5fc3"})}}]),r}(v.a.Component))||ve)||ve;t.default=Object(j.a)(Object(b.a)(Oe))},AT0X:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my",function(){return r("ARGO")}])},"BX/b":function(e,t,r){var n=r("/GqU"),s=r("JBy8").f,a={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==a.call(e)?function(e){try{return s(e)}catch(t){return c.slice()}}(e):s(n(e))}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var s=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=s},J0pL:function(e,t,r){"use strict";r("pNMO"),r("4Brf");var n,s=r("nKUr"),a=r("lwsE"),c=r.n(a),o=r("W8MJ"),i=r.n(o),u=r("7W2i"),l=r.n(u),d=r("a1gu"),f=r.n(d),p=r("Nsbk"),h=r.n(p),m=r("q1tI"),v=r.n(m),j=r("kMSe"),b=r("4xcg");function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h()(e);if(t){var s=h()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return f()(this,r)}}var O=Object(j.c)("site")(n=Object(j.c)("search")(n=Object(j.d)(n=function(e){l()(r,e);var t=y(r);function r(){return c()(this,r),t.apply(this,arguments)}return i()(r,[{key:"renderView",value:function(){var e=this.props,t=e.pc,r=e.h5,n=e.title,a=void 0===n?"":n,c=e.keywords,o=void 0===c?"":c,i=e.description,u=void 0===i?"":i,l=e.showSiteName,d=void 0===l||l,f="pc"===this.props.site.platform?t||null:r||null;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b.a,{title:a,keywords:o,description:u,showSiteName:d}),f]})}},{key:"render",value:function(){return this.renderView()}}]),r}(v.a.Component))||n)||n)||n;t.a=O},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),s=r("lwsE"),a=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),o=r("a1gu"),i=r("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var s=i(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),d=function(e){c(r,e);var t=u(r);function r(e){var a;return s(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},"dG/n":function(e,t,r){var n=r("Qo9l"),s=r("UTVS"),a=r("5Tg+"),c=r("m/L8").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});s(t,e)||c(t,e,{value:a.f(e)})}},g4pe:function(e,t,r){e.exports=r("8Kt/")},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},pNMO:function(e,t,r){"use strict";var n=r("I+eb"),s=r("2oRo"),a=r("0GbY"),c=r("xDBR"),o=r("g6v/"),i=r("STAE"),u=r("/b8u"),l=r("0Dky"),d=r("UTVS"),f=r("6LWA"),p=r("hh1v"),h=r("glrk"),m=r("ewvW"),v=r("/GqU"),j=r("wE6v"),b=r("XGwC"),y=r("fHMY"),O=r("33Wh"),x=r("JBy8"),g=r("BX/b"),C=r("dBg+"),w=r("Bs8V"),N=r("m/L8"),k=r("0eef"),I=r("kRJp"),S=r("busE"),M=r("VpIT"),P=r("93I0"),R=r("0BK2"),A=r("kOOl"),T=r("tiKp"),D=r("5Tg+"),U=r("dG/n"),E=r("1E5z"),_=r("afO8"),L=r("tycR").forEach,B=P("hidden"),W="Symbol",z=T("toPrimitive"),J=_.set,F=_.getterFor(W),H=Object.prototype,K=s.Symbol,q=a("JSON","stringify"),X=w.f,V=N.f,G=g.f,Q=k.f,Y=M("symbols"),Z=M("op-symbols"),$=M("string-to-symbol-registry"),ee=M("symbol-to-string-registry"),te=M("wks"),re=s.QObject,ne=!re||!re.prototype||!re.prototype.findChild,se=o&&l((function(){return 7!=y(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=X(H,t);n&&delete H[t],V(e,t,r),n&&e!==H&&V(H,t,n)}:V,ae=function(e,t){var r=Y[e]=y(K.prototype);return J(r,{type:W,tag:e,description:t}),o||(r.description=t),r},ce=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof K},oe=function(e,t,r){e===H&&oe(Z,t,r),h(e);var n=j(t,!0);return h(r),d(Y,n)?(r.enumerable?(d(e,B)&&e[B][n]&&(e[B][n]=!1),r=y(r,{enumerable:b(0,!1)})):(d(e,B)||V(e,B,b(1,{})),e[B][n]=!0),se(e,n,r)):V(e,n,r)},ie=function(e,t){h(e);var r=v(t),n=O(r).concat(fe(r));return L(n,(function(t){o&&!ue.call(r,t)||oe(e,t,r[t])})),e},ue=function(e){var t=j(e,!0),r=Q.call(this,t);return!(this===H&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,B)&&this[B][t])||r)},le=function(e,t){var r=v(e),n=j(t,!0);if(r!==H||!d(Y,n)||d(Z,n)){var s=X(r,n);return!s||!d(Y,n)||d(r,B)&&r[B][n]||(s.enumerable=!0),s}},de=function(e){var t=G(v(e)),r=[];return L(t,(function(e){d(Y,e)||d(R,e)||r.push(e)})),r},fe=function(e){var t=e===H,r=G(t?Z:v(e)),n=[];return L(r,(function(e){!d(Y,e)||t&&!d(H,e)||n.push(Y[e])})),n};(i||(S((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=A(e),r=function(e){this===H&&r.call(Z,e),d(this,B)&&d(this[B],t)&&(this[B][t]=!1),se(this,t,b(1,e))};return o&&ne&&se(H,t,{configurable:!0,set:r}),ae(t,e)}).prototype,"toString",(function(){return F(this).tag})),S(K,"withoutSetter",(function(e){return ae(A(e),e)})),k.f=ue,N.f=oe,w.f=le,x.f=g.f=de,C.f=fe,D.f=function(e){return ae(T(e),e)},o&&(V(K.prototype,"description",{configurable:!0,get:function(){return F(this).description}}),c||S(H,"propertyIsEnumerable",ue,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!i,sham:!i},{Symbol:K}),L(O(te),(function(e){U(e)})),n({target:W,stat:!0,forced:!i},{for:function(e){var t=String(e);if(d($,t))return $[t];var r=K(t);return $[t]=r,ee[r]=t,r},keyFor:function(e){if(!ce(e))throw TypeError(e+" is not a symbol");if(d(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),n({target:"Object",stat:!0,forced:!i,sham:!o},{create:function(e,t){return void 0===t?y(e):ie(y(e),t)},defineProperty:oe,defineProperties:ie,getOwnPropertyDescriptor:le}),n({target:"Object",stat:!0,forced:!i},{getOwnPropertyNames:de,getOwnPropertySymbols:fe}),n({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(m(e))}}),q)&&n({target:"JSON",stat:!0,forced:!i||l((function(){var e=K();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}))},{stringify:function(e,t,r){for(var n,s=[e],a=1;arguments.length>a;)s.push(arguments[a++]);if(n=t,(p(t)||void 0!==e)&&!ce(e))return f(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ce(t))return t}),s[1]=t,q.apply(null,s)}});K.prototype[z]||I(K.prototype,z,K.prototype.valueOf),E(K,W),R[B]=!0},zZWi:function(e,t,r){"use strict";r.d(t,"a",(function(){return M}));var n=r("nKUr"),s=r("o0o1"),a=r.n(s),c=r("lSNA"),o=r.n(c),i=(r("ls82"),r("yXPU")),u=r.n(i),l=r("lwsE"),d=r.n(l),f=r("W8MJ"),p=r.n(f),h=r("7W2i"),m=r.n(h),v=r("a1gu"),j=r.n(v),b=r("Nsbk"),y=r.n(b),O=r("q1tI"),x=r.n(O),g=r("kMSe"),C=r("n4oF"),w=r("B5JU"),N=r.n(w);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y()(e);if(t){var s=y()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return j()(this,r)}}function M(e){var t;return Object(g.c)("user")(t=Object(g.d)(t=function(t){m()(s,t);var r=S(s);function s(e){return d()(this,s),r.call(this,e)}return p()(s,null,[{key:"getInitialProps",value:function(){var t=u()(a.a.mark((function t(r,n){var s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}throw Error("CheckLoginStatus\u5fc5\u987b\u524d\u7f6e\u4f7f\u7528HOCFetchSiteData");case 2:if(t.prev=2,s={},!Object(C.a)()){t.next=9;break}if(!e.getInitialProps){t.next=9;break}return t.next=8,e.getInitialProps(r);case 8:s=t.sent;case 9:return t.abrupt("return",I({},s));case 12:return t.prev=12,t.t0=t.catch(2),console.log("err",t.t0),t.abrupt("return",{});case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e,r){return t.apply(this,arguments)}}()}]),p()(s,[{key:"componentDidMount",value:function(){this.props.user.loginStatus||N.a.redirect({url:"/user/login"})}},{key:"componentDidUpdate",value:function(){this.props.user.loginStatus||N.a.redirect({url:"/user/login"})}},{key:"render",value:function(){var t=this.props.user.loginStatus;return"padding"!==t&&t?Object(n.jsx)(e,I({},this.props)):null}}]),s}(x.a.Component))||t)||t}}},[["AT0X",1,0,3,5,4,6,2]]]);