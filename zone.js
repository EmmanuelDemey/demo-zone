!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(this,function(){"use strict";function e(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function t(t,n){for(var r=t.constructor.name,o=function(o){var a=n[o],i=t[a];i&&(t[a]=function(t){return function(){return t.apply(this,e(arguments,r+"."+a))}}(i))},a=0;a<n.length;a++)o(a)}function n(e,t){var n=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};delete n.writable,delete n.value;var r=t.substr(2),o="_"+t;n.set=function(e){if(this[o]&&this.removeEventListener(r,this[o]),"function"==typeof e){var t=function(t){var n;n=e.apply(this,arguments),void 0==n||n||t.preventDefault()};this[o]=t,this.addEventListener(r,t,!1)}else this[o]=null},n.get=function(){return this[o]||null},Object.defineProperty(e,t,n)}function r(e,t){var r=[];for(var o in e)"on"==o.substr(0,2)&&r.push(o);for(var a=0;a<r.length;a++)n(e,r[a]);if(t)for(var i=0;i<t.length;i++)n(e,"on"+t[i])}function o(e,t,n,r,o){var a=e[j];if(a)for(var i=0;i<a.length;i++){var s=a[i],u=s.data;if(u.handler===t&&u.useCapturing===r&&u.eventName===n)return o&&a.splice(i,1),s}return null}function a(e,t){var n=e[j];n||(n=e[j]=[]),n.push(t)}function i(e,t,n,r){function i(e){var t=e.data;return a(t.target,e),t.target[u](t.eventName,e.invoke,t.useCapturing)}function s(e){var t=e.data;o(t.target,e.invoke,t.eventName,t.useCapturing,!0),t.target[c](t.eventName,e.invoke,t.useCapturing)}void 0===n&&(n=!0),void 0===r&&(r=!1);var u=E(e),c=E(t),l=!n&&void 0;return function(t,n){var a=n[0],c=n[1],f=n[2]||l,p=t||S,h=null;"function"==typeof c?h=c:c&&c.handleEvent&&(h=function(e){return c.handleEvent(e)});var d=!1;try{d=c&&"[object FunctionWrapper]"===c.toString()}catch(v){return}if(!h||d)return p[u](a,c,f);if(!r){var g=o(p,c,a,f,!1);if(g)return p[u](a,g.invoke,f)}var y=Zone.current,k=p.constructor.name+"."+e+":"+a,b={target:p,eventName:a,name:a,useCapturing:f,handler:c};y.scheduleEventTask(k,h,b,i,s)}}function s(e,t){void 0===t&&(t=!0);var n=E(e),r=!t&&void 0;return function(e,t){var a=t[0],i=t[1],s=t[2]||r,u=e||S,c=o(u,i,a,s,!0);c?c.zone.cancelTask(c):u[n](a,i,s)}}function u(e){return!(!e||!e.addEventListener)&&(f(e,z,function(){return C}),f(e,I,function(){return M}),!0)}function c(t){var n=S[t];if(n){S[t]=function(){var r=e(arguments,t);switch(r.length){case 0:this[L]=new n;break;case 1:this[L]=new n(r[0]);break;case 2:this[L]=new n(r[0],r[1]);break;case 3:this[L]=new n(r[0],r[1],r[2]);break;case 4:this[L]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}};var r,o=new n(function(){});for(r in o)"XMLHttpRequest"===t&&"responseBlob"===r||!function(e){"function"==typeof o[e]?S[t].prototype[e]=function(){return this[L][e].apply(this[L],arguments)}:Object.defineProperty(S[t].prototype,e,{set:function(n){"function"==typeof n?this[L][e]=Zone.current.wrap(n,t+"."+e):this[L][e]=n},get:function(){return this[L][e]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(S[t][r]=n[r])}}function l(e,t){try{return Function("f","return function "+e+"(){return f(this, arguments)}")(t)}catch(n){return function(){return t(this,arguments)}}}function f(e,t,n){for(var r=e;r&&Object.getOwnPropertyNames(r).indexOf(t)===-1;)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,a=E(t);return r&&!(o=r[a])&&(o=r[a]=r[t],r[t]=l(t,n(o,a,t))),o}function p(e,t,n,r){function o(t){var n=t.data;return n.args[0]=function(){t.invoke.apply(this,arguments),delete u[n.handleId]},n.handleId=i.apply(e,n.args),u[n.handleId]=t,t}function a(e){return delete u[e.data.handleId],s(e.data.handleId)}var i=null,s=null;t+=r,n+=r;var u={};i=f(e,t,function(n){return function(i,s){if("function"==typeof s[0]){var u=Zone.current,c={handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?s[1]||0:null,args:s},l=u.scheduleMacroTask(t,s[0],c,o,a);if(!l)return l;var f=l.data.handleId;return f.ref&&f.unref&&(l.ref=f.ref.bind(f),l.unref=f.unref.bind(f)),l}return n.apply(e,s)}}),s=f(e,n,function(t){return function(n,r){var o="number"==typeof r[0]?u[r[0]]:r[0];o&&"string"==typeof o.type?(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}function h(){Object.defineProperty=function(e,t,n){if(v(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=g(e,t,n)),y(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=g(e,n,t[n])}),R(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=H(e,t);return v(e,t)&&(n.configurable=!1),n}}function d(e,t,n){var r=n.configurable;return n=g(e,t,n),y(e,t,n,r)}function v(e,t){return e&&e[q]&&e[q][t]}function g(e,t,n){return n.configurable=!0,n.configurable||(e[q]||F(e,q,{writable:!0,value:{}}),e[q][t]=!0),n}function y(e,t,n,r){try{return F(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return F(e,t,n)}catch(o){var a=null;try{a=JSON.stringify(n)}catch(o){a=a.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+a+"' on object '"+e+"' and got error, giving up: "+o)}}}function k(e){var t=[],n=e.wtf;n?t=B.split(",").map(function(e){return"HTML"+e+"Element"}).concat(x):e[W]?t.push(W):t=x;for(var r=0;r<t.length;r++){var o=e[t[r]];u(o&&o.prototype)}}function b(e){var t=e.WebSocket;e.EventTarget||u(t.prototype),e.WebSocket=function(e,n){var o,a=arguments.length>1?new t(e,n):new t(e),i=Object.getOwnPropertyDescriptor(a,"onmessage");return i&&i.configurable===!1?(o=Object.create(a),["addEventListener","removeEventListener","send","close"].forEach(function(e){o[e]=function(){return a[e].apply(a,arguments)}})):o=a,r(o,["close","error","message","open"]),o};for(var n in t)e.WebSocket[n]=t[n]}function m(e){if(!P){var t="undefined"!=typeof WebSocket;T()?(Z&&r(HTMLElement.prototype,X),r(XMLHttpRequest.prototype,null),"undefined"!=typeof IDBIndex&&(r(IDBIndex.prototype,null),r(IDBRequest.prototype,null),r(IDBOpenDBRequest.prototype,null),r(IDBDatabase.prototype,null),r(IDBTransaction.prototype,null),r(IDBCursor.prototype,null)),t&&r(WebSocket.prototype,null)):(w(),c("XMLHttpRequest"),t&&b(e))}}function T(){if(Z&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{get:function(){return!0}});var t=new XMLHttpRequest,n=!!t.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{}),n}function w(){for(var e=function(e){var t=X[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][A]&&(t=Zone.current.wrap(o[n],r),t[A]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<X.length;t++)e(t)}function _(e){if(Z&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,r){return r&&r.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(r.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(r.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),d(r.prototype,e,n)):r.prototype[e]=Zone.current.wrap(r.prototype[e],t)}else r.prototype[e]&&(r.prototype[e]=Zone.current.wrap(r.prototype[e],t))}),t.apply(document,[e,r])}}}function D(e){function t(e){var t=e[Q];return t}function n(e){var t=e.data;t.target.addEventListener("readystatechange",function(){t.target.readyState===t.target.DONE&&(t.aborted||e.invoke())});var n=t.target[Q];return n||(t.target[Q]=e),i.apply(t.target,t.args),e}function r(){}function o(e){var t=e.data;return t.aborted=!0,s.apply(t.target,t.args)}var a=f(e.XMLHttpRequest.prototype,"open",function(){return function(e,t){return e[Y]=0==t[2],a.apply(e,t)}}),i=f(e.XMLHttpRequest.prototype,"send",function(){return function(e,t){var a=Zone.current;if(e[Y])return i.apply(e,t);var s={target:e,isPeriodic:!1,delay:null,args:t,aborted:!1};return a.scheduleMacroTask("XMLHttpRequest.send",r,s,n,o)}}),s=f(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,n){var r=t(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn)return;r.zone.cancelTask(r)}}})}var E=(function(e){function t(e){return"__zone_symbol__"+e}function n(){0==E&&0==w.length&&(e[k]?e[k].resolve(0)[b](a):e[y](a,0))}function r(e){n(),w.push(e)}function o(e){var t=e&&e.rejection;t&&console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0),console.error(e)}function a(){if(!_){for(_=!0;w.length;){var e=w;w=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){o(r)}}}for(;D.length;)for(var a=function(){var e=D.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){o(t)}};D.length;)a();_=!1}}function i(e){return e&&e.then}function s(e){return e}function u(e){return C.reject(e)}function c(e,t){return function(n){l(e,t,n)}}function l(e,t,r){if(e[S]===Z)if(r instanceof C&&r[S]!==Z)f(r),l(e,r[S],r[O]);else if(i(r))r.then(c(e,t),c(e,!1));else{e[S]=t;var o=e[O];e[O]=r;for(var a=0;a<o.length;)p(e,o[a++],o[a++],o[a++],o[a++]);if(0==o.length&&t==z){e[S]=I;try{throw new Error("Uncaught (in promise): "+r+(r&&r.stack?"\n"+r.stack:""))}catch(s){var u=s;u.rejection=r,u.promise=e,u.zone=d.current,u.task=d.currentTask,D.push(u),n()}}}return e}function f(e){if(e[S]===I){e[S]=z;for(var t=0;t<D.length;t++)if(e===D[t].promise){D.splice(t,1);break}}}function p(e,t,n,r,o){f(e);var a=e[S]?r||s:o||u;t.scheduleMicroTask(P,function(){try{l(n,!0,t.run(a,null,[e[O]]))}catch(r){l(n,!1,r)}})}function h(e){var n=e.prototype,r=n[t("then")]=n.then;n.then=function(e,t){var n=this;return new C(function(e,t){r.call(n,e,t)}).then(e,t)}}if(e.Zone)throw new Error("Zone already loaded.");var d=function(){function n(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,t)}return n.assertZonePatched=function(){if(e.Promise!==C)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(n,"current",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(n,"currentTask",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),n.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},n.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},n.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},n.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},n.prototype.run=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=m;m=this;try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{m=o}},n.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=m;m=this;try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{m=o}},n.prototype.runTask=function(e,t,n){if(e.runCount++,e.zone!=this)throw new Error("A task can only be run in the zone which created it! (Creation: "+e.zone.name+"; Execution: "+this.name+")");var r=T;T=e;var o=m;m=this;try{"macroTask"==e.type&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{m=o,T=r}},n.prototype.scheduleMicroTask=function(e,t,n,r){return this._zoneDelegate.scheduleTask(this,new g("microTask",this,e,t,n,r,null))},n.prototype.scheduleMacroTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new g("macroTask",this,e,t,n,r,o))},n.prototype.scheduleEventTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new g("eventTask",this,e,t,n,r,o))},n.prototype.cancelTask=function(e){var t=this._zoneDelegate.cancelTask(this,e);return e.runCount=-1,e.cancelFn=null,t},n.__symbol__=t,n}(),v=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._hasTaskZS=n&&(n.onHasTask?n:t._hasTaskZS),this._hasTaskDlgt=n&&(n.onHasTask?t:t._hasTaskDlgt)}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new d(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this.zone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this.zone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this.zone,e,t)},e.prototype.scheduleTask=function(e,t){try{if(this._scheduleTaskZS)return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this.zone,e,t);if(t.scheduleFn)t.scheduleFn(t);else{if("microTask"!=t.type)throw new Error("Task is missing scheduleFn.");r(t)}return t}finally{e==this.zone&&this._updateTaskCount(t.type,1)}},e.prototype.invokeTask=function(e,t,n,r){try{return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this.zone,e,t,n,r):t.callback.apply(n,r)}finally{e!=this.zone||"eventTask"==t.type||t.data&&t.data.isPeriodic||this._updateTaskCount(t.type,-1)}},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this.zone,e,t);else{if(!t.cancelFn)throw new Error("Task does not support cancellation, or is already canceled.");n=t.cancelFn(t)}return e==this.zone&&this._updateTaskCount(t.type,-1),n},e.prototype.hasTask=function(e,t){return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this.zone,e,t)},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};try{this.hasTask(this.zone,a)}finally{this._parentDelegate&&this._parentDelegate._updateTaskCount(e,t)}}},e}(),g=function(){function e(e,t,n,r,o,i,s){this.runCount=0,this.type=e,this.zone=t,this.source=n,this.data=o,this.scheduleFn=i,this.cancelFn=s,this.callback=r;var u=this;this.invoke=function(){E++;try{return t.runTask(u,this,arguments)}finally{1==E&&a(),E--}}}return e.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e}(),y=t("setTimeout"),k=t("Promise"),b=t("then"),m=new d(null,null),T=null,w=[],_=!1,D=[],E=0,S=t("state"),O=t("value"),P="Promise.then",Z=null,j=!0,z=!1,I=0,C=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[S]=Z,n[O]=[];try{t&&t(c(n,j),c(n,z))}catch(r){l(n,!1,r)}}return e.resolve=function(e){return l(new this(null),j,e)},e.reject=function(e){return l(new this(null),z,e)},e.race=function(e){function t(e){a&&(a=r(e))}function n(e){a&&(a=o(e))}for(var r,o,a=new this(function(e,t){n=[e,t],r=n[0],o=n[1];var n}),s=0,u=e;s<u.length;s++){var c=u[s];i(c)||(c=this.resolve(c)),c.then(t,n)}return a},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,a=[],s=0,u=e;s<u.length;s++){var c=u[s];i(c)||(c=this.resolve(c)),c.then(function(e){return function(n){a[e]=n,o--,o||t(a)}}(o),n),o++}return o||t(a),r},e.prototype.then=function(e,t){var n=new this.constructor(null),r=d.current;return this[S]==Z?this[O].push(r,n,e,t):p(this,r,n,e,t),n},e.prototype["catch"]=function(e){return this.then(null,e)},e}();C.resolve=C.resolve,C.reject=C.reject,C.race=C.race,C.all=C.all;var M=e[t("Promise")]=e.Promise;if(e.Promise=C,M&&(h(M),"undefined"!=typeof e.fetch)){var L=void 0;try{L=e.fetch()}catch(F){L=e.fetch("about:blank")}L.then(function(){return null},function(){return null}),L.constructor!=M&&L.constructor!=C&&h(L.constructor)}return Promise[d.__symbol__("uncaughtPromiseErrors")]=D,e.Zone=d}("object"==typeof window&&window||"object"==typeof self&&self||global),Zone.__symbol__),S="object"==typeof window&&window||"object"==typeof self&&self||global,O="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,P="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z=!P&&!O&&!("undefined"==typeof window||!window.HTMLElement),j=E("eventTasks"),z="addEventListener",I="removeEventListener",C=i(z,I),M=s(I),L=E("originalInstance"),F=Object[E("defineProperty")]=Object.defineProperty,H=Object[E("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,R=Object.create,q=E("unconfigurables"),B="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",x="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex".split(","),W="EventTarget",X="copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror".split(" "),A=E("unbound"),N="set",G="clear",U=["alert","prompt","confirm"],K="object"==typeof window&&window||"object"==typeof self&&self||global;p(K,N,G,"Timeout"),p(K,N,G,"Interval"),p(K,N,G,"Immediate"),p(K,"request","cancel","AnimationFrame"),p(K,"mozRequest","mozCancel","AnimationFrame"),p(K,"webkitRequest","webkitCancel","AnimationFrame");for(var V=0;V<U.length;V++){var J=U[V];f(K,J,function(e,t,n){return function(t,r){return Zone.current.run(e,K,r,n)}})}k(K),m(K),c("MutationObserver"),c("WebKitMutationObserver"),c("FileReader"),h(),_(K),D(K);var Q=E("xhrTask"),Y=E("xhrSync");K.navigator&&K.navigator.geolocation&&t(K.navigator.geolocation,["getCurrentPosition","watchPosition"])});