webpackJsonp([2],{"21It":function(e,t,n){"use strict";var r=n("FtD3");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"5VQ+":function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},"7GwW":function(e,t,n){"use strict";var r=n("cGG2"),o=n("21It"),s=n("DQCr"),a=n("oJlt"),i=n("GHBc"),c=n("FtD3"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||i(e.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var v=e.auth.username||"",y=e.auth.password||"";l.Authorization="Basic "+u(v+":"+y)}if(d.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n("p1b6"),w=(e.withCredentials||i(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},CLk0:function(e,t){},DQCr:function(e,t,n){"use strict";var r=n("cGG2");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var a=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),s=a.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},FtD3:function(e,t,n){"use strict";var r=n("t8qj");e.exports=function(e,t,n,o,s){var a=new Error(e);return r(a,t,n,o,s)}},GHBc:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"JP+z":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},KCLY:function(e,t,n){"use strict";(function(t){var r=n("cGG2"),o=n("5VQ+"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:("undefined"!=typeof XMLHttpRequest?i=n("7GwW"):void 0!==t&&(i=n("7GwW")),i),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(s)}),e.exports=c}).call(t,n("W2nU"))},O8qY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("TToO"),o=n("443i"),s=n("mtWM"),a=n.n(s),i={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a()({method:"get",url:e,params:t,headers:n}).then(function(e){return e.data}).catch(function(e){return console.log(e),e})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a()({method:"post",url:e,data:t,headers:n}).then(function(e){return e.data}).catch(function(e){return console.log(e),e})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a()({method:"delete",url:e,params:t,headers:n}).then(function(e){return e.data}).catch(function(e){return console.log(e),e})}},c=n("jr2x"),u=n.n(c),f=(n("QmSG"),u.a.staging.server),p=u.a.staging.sseServer;var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.eventSource=null,t.qrcodeUrl="static/images/common/ele_pay_qrcode.png",t}return r.c(t,e),Object.defineProperty(t.prototype,"order",{get:function(){return this.$store.state.order},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"endInfo",{get:function(){return this.$store.state.endInfo||{}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alreadyPayPlates",{get:function(){return this.$store.state.alreadyPayPlates},enumerable:!0,configurable:!0}),t.prototype.mounted=function(){var e=this;this.$store.state.order.orderNum?(this.fetchQrcode(),this.eventSource=new EventSource(p+"/xcx/notify/push?payRecordId="+this.order.orderNum),this.eventSource.onmessage=function(t){t.data&&(e.alreadyPayPlates.push(e.endInfo.plate),e.$store.commit("setAlreadyPayPlates",e.alreadyPayPlates),e.eventSource.close(),e.$store.commit("setOrder",{}),e.$store.commit("setPaySuccess",!0),e.$router.replace({name:"map"}))}):this.$router.replace({name:"bindPlate"})},t.prototype.fetchQrcode=function(){var e,t,n=this;(e=this.endInfo.plate,t=f+"/park-pay/qrcode/xcx",i.get(t,{carNum:e})).then(function(e){e.data&&(n.qrcodeUrl=e.data)})},t.prototype.destroyed=function(){this.eventSource&&this.eventSource.close()},t=r.b([Object(o.a)({})],t)}(o.c),d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ele-payment"},[n("div",{staticClass:"content"},[n("p",{staticClass:"plate"},[e._v(e._s(e.endInfo.plate))]),e._v(" "),n("p",{staticClass:"park"},[e._v(e._s(e.order.parkName))]),e._v(" "),n("div",{staticClass:"details"},[n("p",{staticClass:"item"},[n("span",[e._v("入场时间")]),n("span",{staticClass:"data"},[e._v(e._s(e.order.startTime))])]),e._v(" "),n("p",{staticClass:"item"},[n("span",[e._v("停车时长")]),n("span",{staticClass:"data"},[e._v(e._s(e.order.stayTime)+"分钟")])])]),e._v(" "),n("div",{staticClass:"amount"},[n("span",[e._v("停车费用")]),e._v(" "),n("span",{staticClass:"num"},[e._v("￥"+e._s(e.order.receiveAmount))])]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"banner"},[n("img",{staticClass:"main-banner",attrs:{src:e.qrcodeUrl}}),e._v(" "),n("img",{staticClass:"sub-banner",attrs:{src:"static/images/common/pic_nostop_pay.png"}})]),e._v(" "),n("p",{staticClass:"tip"},[e._v("请在5分钟内完成支付，否则可能会加收停车费")]),e._v(" "),n("p",{staticClass:"tip"},[e._v("付款后请于15分钟内离场")])]),e._v(" "),n("img",{staticClass:"bottom-banner",attrs:{src:"https://palmap-bucket-parking.oss-cn-hangzhou.aliyuncs.com/img/face_search/open_nosense_bg.png"}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"tip-info"},[this._v("打开“"),t("span",{staticClass:"info"},[this._v("支付宝APP")]),this._v("”，扫描下方二维码进行支付")])}]};var h=n("VU/8")(l,d,!1,function(e){n("CLk0")},"data-v-f302c028",null);t.default=h.exports},Re3r:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},TNV1:function(e,t,n){"use strict";var r=n("cGG2");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},XmWM:function(e,t,n){"use strict";var r=n("KCLY"),o=n("cGG2"),s=n("fuGk"),a=n("xLtR");function i(e){this.defaults=e,this.interceptors={request:new s,response:new s}}i.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(r,this.defaults,{method:"get"},e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){i.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){i.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=i},cGG2:function(e,t,n){"use strict";var r=n("JP+z"),o=n("Re3r"),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===s.call(e)}function u(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(e,t,n){"use strict";var r=n("dVOP");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},dIwP:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},dVOP:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},fuGk:function(e,t,n){"use strict";var r=n("cGG2");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},mtWM:function(e,t,n){e.exports=n("tIFN")},oJlt:function(e,t,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},p1b6:function(e,t,n){"use strict";var r=n("cGG2");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},pxG4:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},qRfI:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},t8qj:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},tIFN:function(e,t,n){"use strict";var r=n("cGG2"),o=n("JP+z"),s=n("XmWM"),a=n("KCLY");function i(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=i(a);c.Axios=s,c.create=function(e){return i(r.merge(a,e))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(e){return Promise.all(e)},c.spread=n("pxG4"),e.exports=c,e.exports.default=c},thJu:function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,s=String(e),a="",i=0,c=r;s.charAt(0|i)||(c="=",i%1);a+=c.charAt(63&t>>8-i%1*8)){if((n=s.charCodeAt(i+=.75))>255)throw new o;t=t<<8|n}return a}},xLtR:function(e,t,n){"use strict";var r=n("cGG2"),o=n("TNV1"),s=n("pBtG"),a=n("KCLY"),i=n("dIwP"),c=n("qRfI");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}});