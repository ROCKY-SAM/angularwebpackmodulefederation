(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[496],{3496:(e,t,n)=>{"use strict";n.r(t);var r=n(508),o=n(7443);class s extends r["\u0275DomAdapter"]{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class i extends s{static makeCurrent(){(0,r["\u0275setRootDomAdapter"])(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=(l=l||document.querySelector("base"),l?l.getAttribute("href"):null);return null==t?null:function(e){a=a||document.createElement("a"),a.setAttribute("href",e);const t=a.pathname;return"/"===t.charAt(0)?t:`/${t}`}(t)}resetBaseElement(){l=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return(0,r["\u0275parseCookieValue"])(document.cookie,e)}}let a,l=null;const d=new o.InjectionToken("TRANSITION_ID"),c=[{provide:o.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(o.ApplicationInitStatus).donePromise.then(()=>{const n=(0,r["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[d,r.DOCUMENT,o.Injector],multi:!0}];class u{static init(){(0,o.setTestabilityGetter)(new u)}addToWindow(e){o["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},o["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),o["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),o["\u0275global"].frameworkStabilizers||(o["\u0275global"].frameworkStabilizers=[]),o["\u0275global"].frameworkStabilizers.push(e=>{const t=o["\u0275global"].getAllAngularTestabilities();let n=t.length,r=!1;const s=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(s)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const o=e.getTestability(t);return null!=o?o:n?(0,r["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}let p=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const h=new o.InjectionToken("EventManagerPlugins");let m=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](h),o["\u0275\u0275inject"](o.NgZone))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class f{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const o=(0,r["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${t}`);return this.addEventListener(o,t,n)}}let g=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),y=(()=>{class e extends g{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,n){e.forEach(e=>{const r=this._doc.createElement("style");r.textContent=e,n.push(t.appendChild(r))})}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(v),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((t,n)=>{this._addStylesToHost(e,n,t)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(v))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function v(e){(0,r["\u0275getDOM"])().remove(e)}const w={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},E=/%COMP%/g;function b(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?b(e,o,n):(o=o.replace(E,e),n.push(o))}return n}function C(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let S=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new A(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new M(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case o.ViewEncapsulation.ShadowDom:return new I(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=b(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](m),o["\u0275\u0275inject"](y),o["\u0275\u0275inject"](o.APP_ID))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class A{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(w[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=w[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=w[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?e.style.setProperty(t,n,r&o.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&o.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,C(n)):this.eventManager.addEventListener(e,t,C(n))}}class M extends A{constructor(e,t,n,r){super(e),this.component=n;const o=b(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(E,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(E,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class I extends A{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=b(r.id,r.styles,[]);for(let s=0;s<o.length;s++){const e=document.createElement("style");e.textContent=o[s],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let N=(()=>{class e extends f{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const T=["alt","control","meta","shift"],_={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},x={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},R={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let O=(()=>{class e extends f{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,o){const s=e.parseEventName(n),i=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,r["\u0275getDOM"])().onAndCancel(t,s.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let s="";if(T.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),s+=e+".")}),s+=o,0!=n.length||0===o.length)return null;const i={};return i.domEventName=r,i.fullKey=s,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&x.hasOwnProperty(t)&&(t=x[t]))}return _[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),T.forEach(r=>{r!=n&&(0,R[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const D=(0,o.createPlatformFactory)(o.platformCore,"browser",[{provide:o.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]},{provide:o.PLATFORM_INITIALIZER,useValue:function(){i.makeCurrent(),u.init()},multi:!0},{provide:r.DOCUMENT,useFactory:function(){return(0,o["\u0275setDocument"])(document),document},deps:[]}]),k=[[],{provide:o["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:o.ErrorHandler,useFactory:function(){return new o.ErrorHandler},deps:[]},{provide:h,useClass:N,multi:!0,deps:[r.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:h,useClass:O,multi:!0,deps:[r.DOCUMENT]},[],{provide:S,useClass:S,deps:[m,y,o.APP_ID]},{provide:o.RendererFactory2,useExisting:S},{provide:g,useExisting:y},{provide:y,useClass:y,deps:[r.DOCUMENT]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone]},{provide:m,useClass:m,deps:[h,o.NgZone]},{provide:r.XhrFactory,useClass:p,deps:[]},[]];let L=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:o.APP_ID,useValue:t.appId},{provide:d,useExisting:o.APP_ID},c]}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](e,12))},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:k,imports:[r.CommonModule,o.ApplicationModule]}),e})();"undefined"!=typeof window&&window;var P=n(2066),j=n(379);let F=(()=>{class e{constructor(){this.title="mfe1"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=P["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(e,t){1&e&&(P["\u0275\u0275text"](0,"\nhiii\n"),P["\u0275\u0275element"](1,"router-outlet"))},directives:[j.RouterOutlet],styles:[""]}),e})();var H=n(2562);const B=[{path:"flights-search",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=P["\u0275\u0275defineComponent"]({type:e,selectors:[["app-flights-search"]],decls:9,vars:0,consts:[["id","container"],["type","text","placeholder","From"],["type","text","placeholder","To"]],template:function(e,t){1&e&&(P["\u0275\u0275elementStart"](0,"div",0),P["\u0275\u0275elementStart"](1,"h1"),P["\u0275\u0275text"](2,"Flights"),P["\u0275\u0275elementEnd"](),P["\u0275\u0275elementStart"](3,"div"),P["\u0275\u0275element"](4,"input",1),P["\u0275\u0275elementEnd"](),P["\u0275\u0275elementStart"](5,"div"),P["\u0275\u0275element"](6,"input",2),P["\u0275\u0275elementEnd"](),P["\u0275\u0275element"](7,"div"),P["\u0275\u0275element"](8,"div"),P["\u0275\u0275elementEnd"]())},styles:["input[type=text][_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: 400px;\n        box-sizing: border-box;\n        border: none;\n        border-bottom: 2px solid silver;\n        font-size: 20px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n    }\n\n    button[_ngcontent-%COMP%] {\n        border: 2px solid silver;\n        background-color: white;\n        font-size: 16px;\n        padding: 10px;\n        padding-left: 40px;\n        padding-right: 40px;\n        border-radius: 10px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n        cursor: pointer;\n    }\n\n    button[_ngcontent-%COMP%]:active {\n        border-color: black;\n    }\n\n    #container[_ngcontent-%COMP%] {\n        border: 2px darkred dashed;\n        padding: 20px;\n    }"]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=P["\u0275\u0275defineInjector"]({imports:[[H.CommonModule,j.RouterModule.forChild(B)]]}),e})();const z=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=P["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:7,vars:0,consts:[["src","../../assets/angular.png","width","50"],["routerLink","/flights-search"]],template:function(e,t){1&e&&(P["\u0275\u0275elementStart"](0,"div"),P["\u0275\u0275element"](1,"img",0),P["\u0275\u0275elementEnd"](),P["\u0275\u0275elementStart"](2,"h1"),P["\u0275\u0275text"](3,"Welcome!"),P["\u0275\u0275elementEnd"](),P["\u0275\u0275elementStart"](4,"p"),P["\u0275\u0275elementStart"](5,"a",1),P["\u0275\u0275text"](6,"Search Flights"),P["\u0275\u0275elementEnd"](),P["\u0275\u0275elementEnd"]())},directives:[j.RouterLinkWithHref],encapsulation:2}),e})(),pathMatch:"full"}],K=[{path:"flights-view",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=P["\u0275\u0275defineComponent"]({type:e,selectors:[["app-flight-view"]],decls:2,vars:0,template:function(e,t){1&e&&(P["\u0275\u0275elementStart"](0,"p"),P["\u0275\u0275text"](1,"flight-view works!"),P["\u0275\u0275elementEnd"]())},styles:[""]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=P["\u0275\u0275defineInjector"]({imports:[[j.RouterModule.forChild(K)],j.RouterModule]}),e})(),G=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=P["\u0275\u0275defineInjector"]({imports:[[H.CommonModule,V]]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=P["\u0275\u0275defineNgModule"]({type:e,bootstrap:[F]}),e.\u0275inj=P["\u0275\u0275defineInjector"]({providers:[],imports:[[L,U,G,j.RouterModule.forRoot(z)]]}),e})();(0,P.enableProdMode)(),D().bootstrapModule(Z).catch(e=>console.error(e))}}]);