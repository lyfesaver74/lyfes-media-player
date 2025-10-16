/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,n=new RegExp(`${r}|${o}`);class a{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,h=0;const{strings:d,values:{length:m}}=t;for(;h<m;){const t=a.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)s(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=d[h],i=p.exec(e)[2],r=i.toLowerCase()+"$lit$",o=t.getAttribute(r);t.removeAttribute(r);const a=o.split(n);this.parts.push({type:"attribute",index:u,name:i,strings:a}),h+=a.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(n),a=o.length-1;for(let e=0;e<a;e++){let i,n=o[e];if(""===n)i=c();else{const t=p.exec(n);null!==t&&s(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}r.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[a]?(r.insertBefore(c(),t),i.push(t)):t.data=o[a],h+=a}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),h++}}else a.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const s=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:i},parts:r}=t,o=document.createTreeWalker(i,133,null,!1);let n=d(r),a=r[n],s=-1,l=0;const c=[];let p=null;for(;o.nextNode();){s++;const t=o.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==a&&a.index===s;)a.index=null!==p?-1:a.index-l,n=d(r,n),a=r[n]}c.forEach((t=>t.parentNode.removeChild(t)))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},d=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=t=>(...e)=>{const i=t(...e);return m.set(i,!0),i},f=t=>"function"==typeof t&&m.has(t),_={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,a=0,s=0,c=o.nextNode();for(;a<r.length;)if(n=r[a],l(n)){for(;s<n.index;)s++,"TEMPLATE"===c.nodeName&&(i.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=i.pop(),c=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${r} `;class x{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const s=p.exec(t);e+=null===s?t+(i?w:o):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const k=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ${constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let r="";for(let o=0;o<e;o++){r+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(k(t)||!S(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===_||k(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=_,t(this)}this.value!==_&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}const t=this.__pendingValue;t!==_&&(k(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const o of t)i=e[r],void 0===i&&(i=new C(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(o),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}if(this.__pendingValue===_)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=_}}class M extends ${constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends P{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=_,t(this)}if(this.__pendingValue===_)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=_}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function L(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r);return i=e.keyString.get(o),void 0===i&&(i=new a(t,t.getTemplateElement()),e.keyString.set(o,i)),e.stringsArray.set(t.strings,i),i}const N=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,r){const o=e[0];if("."===o){return new M(t,e.slice(1),i).parts}if("@"===o)return[new A(t,e.slice(1),r.eventContext)];if("?"===o)return[new E(t,e.slice(1),i)];return new $(t,e,i).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const I=(t,...e)=>new x(t,e,"html",D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,R=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const U=t=>e=>{const i=R(e.type,t);let o=N.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},N.set(i,o));let n=o.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(r);if(n=o.keyString.get(s),void 0===n){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),n=new a(e,i),o.keyString.set(s,n)}return o.stringsArray.set(e.strings,n),n},B=["html","svg"],q=new Set,F=(t,e,i)=>{q.add(t);const r=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(r,t);const a=document.createElement("style");for(let t=0;t<n;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{B.forEach((e=>{const i=N.get(R(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),u(t,i)}))}))})(t);const s=r.content;i?function(t,e,i=null){const{element:{content:r},parts:o}=t;if(null==i)return void r.appendChild(e);const n=document.createTreeWalker(r,133,null,!1);let a=d(o),s=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(s=h(e),i.parentNode.insertBefore(e,i));-1!==a&&o[a].index===l;){if(s>0){for(;-1!==a;)o[a].index+=s,a=d(o,a);return}a=d(o,a)}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),u(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const G={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:H};class Z extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=H){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||G,o="function"==typeof r?r:r.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||G.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const r=this.constructor,o=r._attributeNameForProperty(t,i);if(void 0!==o){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let r=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}const K=t=>function(t){return Y({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}(t)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const i=e.reduce(((e,i,r)=>e+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]);return new et(i,tt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const rt={};class ot extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),r=[];i.forEach((t=>r.unshift(t))),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new et(String(e),tt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==rt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return rt}}ot.finalized=!0,ot.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,n=j.has(e),a=z&&11===e.nodeType&&!!e.host,s=a&&!q.has(o),l=s?document.createDocumentFragment():e;if(((t,e,r)=>{let o=j.get(e);void 0===o&&(i(e,e.firstChild),j.set(e,o=new C(Object.assign({templateFactory:L},r))),o.appendInto(e)),o.setValue(t),o.commit()})(t,l,Object.assign({templateFactory:U(o)},r)),s){const t=j.get(l);j.delete(l);const r=t.value instanceof y?t.value.template:void 0;F(o,l,r),i(e,e.firstChild),e.appendChild(l),j.set(e,t)}!n&&a&&window.ShadyCSS.styleElement(e.host)},ot.shadowRootOptions={mode:"open"};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class nt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach((e=>t+=e+" ")),this.element.setAttribute("class",t)}}}const at=new WeakMap,st=g((t=>e=>{if(!(e instanceof P)||e instanceof T||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:r}=i;let o=at.get(e);void 0===o&&(r.setAttribute("class",i.strings.join(" ")),at.set(e,o=new Set));const n=r.classList||new nt(r);o.forEach((e=>{e in t||(n.remove(e),o.delete(e))}));for(const e in t){const i=t[e];i!=o.has(e)&&(i?(n.add(e),o.add(e)):(n.remove(e),o.delete(e)))}"function"==typeof n.commit&&n.commit()})),lt=new WeakMap,ct=g((t=>e=>{if(!(e instanceof P)||e instanceof T||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let o=lt.get(e);void 0===o&&(r.cssText=i.strings.join(" "),lt.set(e,o=new Set)),o.forEach((e=>{e in t||(o.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))}));for(const e in t)o.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])}));var pt=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,r){return t[0]===e&&(i=r,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i++){var o=r[i];t.call(e,o[1],o[0])}},e}()}(),ut="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,ht="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),dt="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(ht):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var mt=["top","right","bottom","left","width","height","size","weight"],gt="undefined"!=typeof MutationObserver,ft=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,o=0;function n(){i&&(i=!1,t()),r&&s()}function a(){dt(n)}function s(){var t=Date.now();if(i){if(t-o<2)return;r=!0}else i=!0,r=!1,setTimeout(a,e);o=t}return s}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){ut&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),gt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){ut&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;mt.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),_t=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i++){var o=r[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},vt=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||ht},yt=$t(0,0,0,0);function bt(t){return parseFloat(t)||0}function wt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+bt(t["border-"+i+"-width"])}),0)}function xt(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return yt;var r=vt(t).getComputedStyle(t),o=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var o=r[i],n=t["padding-"+o];e[o]=bt(n)}return e}(r),n=o.left+o.right,a=o.top+o.bottom,s=bt(r.width),l=bt(r.height);if("border-box"===r.boxSizing&&(Math.round(s+n)!==e&&(s-=wt(r,"left","right")+n),Math.round(l+a)!==i&&(l-=wt(r,"top","bottom")+a)),!function(t){return t===vt(t).document.documentElement}(t)){var c=Math.round(s+n)-e,p=Math.round(l+a)-i;1!==Math.abs(c)&&(s-=c),1!==Math.abs(p)&&(l-=p)}return $t(o.left,o.top,s,l)}var kt="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof vt(t).SVGGraphicsElement}:function(t){return t instanceof vt(t).SVGElement&&"function"==typeof t.getBBox};function St(t){return ut?kt(t)?function(t){var e=t.getBBox();return $t(0,0,e.width,e.height)}(t):xt(t):yt}function $t(t,e,i,r){return{x:t,y:e,width:i,height:r}}var Pt=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=$t(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=St(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Ct=function(t,e){var i=function(t){var e=t.x,i=t.y,r=t.width,o=t.height,n="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(n.prototype);return _t(a,{x:e,y:i,width:r,height:o,top:i,right:e+r,bottom:o+i,left:e}),a}(e);_t(this,{target:t,contentRect:i})},Et=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new pt,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof vt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Pt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof vt(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new Ct(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Mt="undefined"!=typeof WeakMap?new WeakMap:new pt,Tt=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=ft.getInstance(),r=new Et(e,i,this);Mt.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){Tt.prototype[t]=function(){var e;return(e=Mt.get(this))[t].apply(e,arguments)}}));var Ot=void 0!==ht.ResizeObserver?ht.ResizeObserver:Tt;const At={repeat:!0,shuffle:!0,power_state:!0,artwork_border:!0,icon_state:!0,sound_mode:!0,group_button:!1,runtime:!0,runtime_remaining:!0,volume:!1,volume_level:!0,controls:!1,play_pause:!1,play_stop:!0,prev:!1,next:!1,jump:!0,state_label:!1,progress:!1,icon:!1,name:!1,info:!1},Vt={OFF:"off",ALL:"all",ONE:"one"},Lt="mdi:chevron-down",Nt="mdi:speaker-multiple",jt={true:"mdi:volume-off",false:"mdi:volume-high"},Dt="mdi:skip-next",It={true:"mdi:pause",false:"mdi:play"},Rt="mdi:power",zt="mdi:skip-previous",Ut="mdi:shuffle",Bt={[Vt.OFF]:"mdi:repeat-off",[Vt.ONE]:"mdi:repeat-once",[Vt.ALL]:"mdi:repeat"},qt={true:"mdi:stop",false:"mdi:play"},Ft="mdi:volume-minus",Gt="mdi:volume-plus",Ht="mdi:fast-forward",Wt="mdi:rewind",Zt=["entity","groupMgmtEntity","_overflow","break","thumbnail","prevThumbnail","edit","idle","cardHeight","backgroundColor","foregroundColor"],Jt=["media_duration","media_position","media_position_updated_at"],Xt=[{attr:"media_title"},{attr:"media_artist"},{attr:"media_series_title"},{attr:"media_season",prefix:"S"},{attr:"media_episode",prefix:"E"},{attr:"media_channel"},{attr:"app_name"}],Yt="sonos",Kt="squeezebox",Qt="soundtouch",te="media_player",ee="heos";var ie;!function(t){t.MORE_INFO="more-info",t.NAVIGATE="navigate",t.CALL_SERVICE="call-service",t.URL="url",t.FIRE_DOM_EVENT="fire-dom-event",t.NONE="none"}(ie||(ie={}));const re=t=>{var e;(t=>{if(void 0===t.entity)throw new Error("You need to specify the required entity option.");if("media_player"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the media_player domain.");if(void 0===t.type)throw new Error("You need to specify the required type option.")})(t);const i=Object.assign(Object.assign({artwork:"default",info:"default",group:!1,volume_stateless:!1,more_info:!0,source:"default",sound_mode:"default",toggle_power:!0,tap_action:{action:ie.MORE_INFO},jump_amount:10},t),{hide:Object.assign(Object.assign({},At),t.hide),speaker_group:Object.assign(Object.assign({show_group_count:!0,platform:"sonos",supports_master:!0,entities:[]},t.sonos),t.speaker_group),shortcuts:Object.assign({label:"Shortcuts..."},t.shortcuts),max_volume:null!==(e=Number(t.max_volume))&&void 0!==e?e:100,min_volume:Number(t.min_volume)||0});return i.collapse=i.hide.controls||i.hide.volume,i.info=i.info,i.flow=i.hide.icon&&i.hide.name&&i.hide.info,i};var oe;!function(t){t.PLAYING="playing",t.PAUSED="paused",t.IDLE="idle",t.OFF="off",t.ON="on",t.UNAVAILABLE="unavailable",t.UNKNOWN="unknown",t.STANDBY="standby"}(oe||(oe={}));class ne{constructor(t,e,i){this.hass=t||{},this.config=e||{},this.entity=i||{},this.state=i.state,this._entityId=i&&i.entity_id||this.config.entity,this._attr=i.attributes||{},this.idle=!!e.idle_view&&this.idleView,this._active=this.isActive}get id(){return this.entity.entity_id}get icon(){return this._attr.icon}get isPaused(){return this.state===oe.PAUSED}get isPlaying(){return this.state===oe.PLAYING}get isIdle(){return this.state===oe.IDLE}get isStandby(){return this.state===oe.STANDBY}get isUnavailable(){return this.state===oe.UNAVAILABLE}get isOff(){return this.state===oe.OFF}get isActive(){return!this.isOff&&!this.isUnavailable&&!this.idle||!1}get assumedState(){return this._attr.assumed_state||!1}get shuffle(){return this._attr.shuffle||!1}get repeat(){return this._attr.repeat||Vt.OFF}get content(){return this._attr.media_content_type||"none"}get name(){return this._attr.custom_name||this._attr.friendly_name||""}get mediaDuration(){return this._attr.media_duration||0}get updatedAt(){return this._attr.media_position_updated_at||0}get secondaryLine(){var t,e,i,r,o,n;const a=(this._attr.media_content_type||"").toLowerCase();if("tvchannel"===a){const r=null!==(t=this._attr.channel_number)&&void 0!==t?t:"",o=null!==(e=this._attr.channel_name)&&void 0!==e?e:"",n=null!==(i=this._attr.program_series)&&void 0!==i?i:"";return`${[r,o].filter(Boolean).join(" ")}${n?`: ${n}`:""}`.trim()}if("tvshow"===a||"tv-series"===a||"episode"===a){const t=null!==(r=this._attr.media_series_title)&&void 0!==r?r:"",e=null!=this._attr.media_season?`S${this._attr.media_season}`:"",i=null!=this._attr.media_episode?`E${this._attr.media_episode}`:"",n=null!==(o=this._attr.media_title)&&void 0!==o?o:"";return[t,[e,i].filter(Boolean).join(""),n].filter(Boolean).join(" - ")}return"movie"===a||"film"===a?null!==(n=this._attr.media_title)&&void 0!==n?n:"":this._attr.media_title||this._attr.media_series_title||""}get position(){return this._attr.media_position||0}get streamParts(){const t=[];let e="";const i=this._attr.video_resolution||"";if(i){const t=String(i).match(/(\d+)x(\d+)/i);if(t){const i=parseInt(t[2]);e=i>=2160?"4K":i>=1440?"1440P":i>=1080?"1080P":i>=720?"720P":`${i}P`}}if(!e){const t=(this._attr.media_resolution||"").toString().toUpperCase();if(t)e=t;else{const t=Number(this._attr.video_height||0);t>=2160?e="4K":t>=1440?e="1440P":t>=1080?e="1080P":t>=720?e="720P":t>0&&(e=`${t}P`)}}e&&t.push({kind:"resolution",text:e});const r=(this._attr.video_codec||"").toString().toUpperCase();r&&t.push({kind:"vcodec",text:r});const o=Number(this._attr.video_framerate||this._attr.video_fps||this._attr.frame_rate||0);if(o>0){const e=`${Math.round(o)}FPS`;t.push({kind:"fps",text:e})}const n=(this._attr.audio_codec||"").toString().toUpperCase();n&&t.push({kind:"acodec",text:n});const a=this.computeTranscodingLabel();return a&&t.push({kind:"method",text:a}),t}get streamLine(){return this.streamParts.map((t=>t.text)).join(" ")}computeTranscodingLabel(){const t=(this._attr.playback_method||"").toString().toLowerCase();if("transcoding"===t)return"Transcoded";if("direct"===t)return"Direct";const e=(this._attr.play_method||"").toString().toLowerCase();return e.includes("transcode")?"Transcoded":e.includes("direct")?"Direct":""}get groupCount(){return this.group.length}get isGrouped(){return this.group.length>1}get group(){return this.platform===Kt?this._attr.sync_group||[]:this.platform===te||this.platform===ee||this.platform===Yt?this._attr.group_members||[]:this._attr[`${this.platform}_group`]||[]}get platform(){return this.config.speaker_group.platform}get master(){return this.supportsMaster&&this.group[0]||this._entityId}get isMaster(){return this.master===this._entityId}get sources(){return this._attr.source_list||[]}get source(){return this._attr.source||""}get soundModes(){return this._attr.sound_mode_list||[]}get soundMode(){return this._attr.sound_mode||""}get muted(){return this._attr.is_volume_muted||!1}get vol(){return this._attr.volume_level||0}get picture(){return this._attr.program_image_url?this._attr.program_image_url:this._attr.entity_picture_local||this._attr.entity_picture}get hasArtwork(){return!!this.picture&&"none"!==this.config.artwork&&this._active&&!this.idle}get mediaInfo(){return Xt.map((t=>Object.assign({text:this._attr[t.attr],prefix:""},t))).filter((t=>t.text))}get hasProgress(){var t;return!this.config.hide.progress&&!this.idle&&Jt.every((t=>t in this._attr))&&(null!==(t=this._attr.media_duration)&&void 0!==t?t:-1)>-1}get supportsPrev(){return!!this._attr.supported_features&&(16|this._attr.supported_features)===this._attr.supported_features}get supportsNext(){return!!this._attr.supported_features&&(32|this._attr.supported_features)===this._attr.supported_features}get progress(){return this.isPlaying?this.position+(Date.now()-new Date(this.updatedAt).getTime())/1e3:this.position}get idleView(){const t=this.config.idle_view;return!!((null==t?void 0:t.when_idle)&&this.isIdle||(null==t?void 0:t.when_standby)&&this.isStandby||(null==t?void 0:t.when_paused)&&this.isPaused)||!(!this.updatedAt||!(null==t?void 0:t.after)||this.isPlaying)&&this.checkIdleAfter(t.after)}get trackIdle(){var t,e;return Boolean(this._active&&!this.isPlaying&&this.updatedAt&&(null===(e=null===(t=this.config)||void 0===t?void 0:t.idle_view)||void 0===e?void 0:e.after))}checkIdleAfter(t){const e=(Date.now()-new Date(this.updatedAt).getTime())/1e3;return this.idle=e>60*t,this._active=this.isActive,this.idle}get supportsShuffle(){return void 0!==this._attr.shuffle}get supportsRepeat(){return void 0!==this._attr.repeat}get supportsMute(){return void 0!==this._attr.is_volume_muted}get supportsVolumeSet(){return void 0!==this._attr.volume_level}get supportsMaster(){return this.platform!==Kt&&this.config.speaker_group.supports_master}async fetchArtwork(){try{let t;if(this._attr.program_image_url&&"tvchannel"===this._attr.media_content_type)t=this._attr.program_image_url,console.log("Using TV program image:",t);else if(this._attr.entity_picture_local)t=this.hass.hassUrl(this._attr.entity_picture_local),console.log("Using local entity picture:",t);else{if(!this._attr.entity_picture)return console.log("No image URL available"),!1;t=this._attr.entity_picture,console.log("Using entity picture:",t)}const e=await fetch(new Request(t));if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const i=(t=>{let e="";return[].slice.call(new Uint8Array(t)).forEach((t=>e+=String.fromCharCode(t))),window.btoa(e)})(await e.arrayBuffer());return`url(data:${e.headers.get("Content-Type")||"image/jpeg"};base64,${i})`}catch(t){return console.error("Error fetching artwork:",t),!1}}getAttribute(t){return this._attr[t]}toggle(t){return this.config.toggle_power?this.callService(t,"toggle"):this.isOff?this.callService(t,"turn_on"):void this.callService(t,"turn_off")}toggleMute(t){this.config.speaker_group.sync_volume?this.group.forEach((e=>{this.callService(t,"volume_mute",{entity_id:e,is_volume_muted:!this.muted})})):this.callService(t,"volume_mute",{is_volume_muted:!this.muted})}toggleShuffle(t){this.callService(t,"shuffle_set",{shuffle:!this.shuffle})}toggleRepeat(t){const e=Object.values(Vt),{length:i}=e,r=e.indexOf(this.repeat)-1,o=e[(r-1%i+i)%i];this.callService(t,"repeat_set",{repeat:o})}setSource(t,e){this.callService(t,"select_source",{source:e})}setMedia(t,e){this.callService(t,"play_media",Object.assign({},e))}play(t){this.callService(t,"media_play")}pause(t){this.callService(t,"media_pause")}playPause(t){this.callService(t,"media_play_pause")}playStop(t){this.isPlaying?this.callService(t,"media_stop"):this.callService(t,"media_play")}setSoundMode(t,e){this.callService(t,"select_sound_mode",{sound_mode:e})}next(t){this.callService(t,"media_next_track")}prev(t){this.callService(t,"media_previous_track")}stop(t){this.callService(t,"media_stop")}volumeUp(t){this.supportsVolumeSet&&this.config.volume_step&&this.config.volume_step>0?this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:Math.min(this.vol+this.config.volume_step/100,1)}):this.callService(t,"volume_up")}volumeDown(t){this.supportsVolumeSet&&this.config.volume_step&&this.config.volume_step>0?this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:Math.max(this.vol-this.config.volume_step/100,0)}):this.callService(t,"volume_down")}seek(t,e){this.callService(t,"media_seek",{seek_position:e})}jump(t,e){const i=this.progress+e,r=Math.min(Math.max(i,0),Number(this.mediaDuration)||i);this.callService(t,"media_seek",{seek_position:r})}setVolume(t,e){this.config.speaker_group.sync_volume&&this.config.speaker_group.entities?this.group.forEach((i=>{var r;const o=null===(r=this.config.speaker_group.entities)||void 0===r?void 0:r.find((t=>t.entity_id===i));if(void 0===o)return;let n=e;o.volume_offset&&(n+=o.volume_offset/100,n>1&&(n=1),n<0&&(n=0)),this.callService(t,"volume_set",{entity_id:i,volume_level:n})})):this.callService(t,"volume_set",{entity_id:this._entityId,volume_level:e})}handleGroupChange(t,e,i){const{platform:r}=this,o={entity_id:e};if(i)switch(o.master=this._entityId,r){case Qt:return this.handleSoundtouch(t,this.isGrouped?"ADD_ZONE_SLAVE":"CREATE_ZONE",e);case Kt:return this.callService(t,"sync",{entity_id:this._entityId,other_player:e},Kt);case te:case Yt:return this.callService(t,"join",{entity_id:this._entityId,group_members:e},te);case ee:return this.callService(t,"join",{entity_id:this._entityId,group_members:this.group.concat("string"==typeof e?[e]:e)},te);default:return this.callService(t,"join",o,r)}else switch(r){case Qt:return this.handleSoundtouch(t,"REMOVE_ZONE_SLAVE",e);case Kt:return this.callService(t,"unsync",o,Kt);case te:case Yt:return this.callService(t,"unjoin",{entity_id:e},te);case ee:return this.callService(t,"unjoin",{entity_id:"string"==typeof e?e:e[0]},te);default:return this.callService(t,"unjoin",o,r)}}handleSoundtouch(t,e,i){return this.callService(t,e,{master:this.master,slaves:i},Qt,!0)}toggleScript(t,e,i={}){const[,r]=e.split(".");this.callService(t,r,Object.assign({},i),"script")}toggleService(t,e,i={}){t.stopPropagation();const[r,o]=e.split(".");this.hass.callService(r,o,Object.assign({},i))}callService(t,e,i,r="media_player",o=!1){t.stopPropagation(),this.hass.callService(r,e,Object.assign(Object.assign({},!o&&{entity_id:this._entityId}),i))}}const ae=it`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
    --mmp-name-font-weight: var(--mini-media-player-name-font-weight, 400);
    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));
    --mmp-base-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0, 0, 0, 0.5));
    --mmp-overlay-color-stop: var(--mini-media-player-overlay-color-stop, 25%);
    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);
    --mmp-overlay-accent-color: var(--mini-media-player-overlay-accent-color, --mmp-accent-color);
    --mmp-text-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);
    --mmp-text-color-inverted: var(--disabled-text-color);
    --mmp-active-color: var(--mmp-accent-color);
    --mmp-button-color: var(--mini-media-player-button-color, rgba(255, 255, 255, 0.25));
    --mmp-icon-color: var(
      --mini-media-player-icon-color,
      var(--mini-media-player-base-color, var(--paper-item-icon-color, #44739e))
    );
    --mmp-icon-active-color: var(--paper-item-icon-active-color, --mmp-active-color);
    --mmp-info-opacity: 0.75;
    --mmp-bg-opacity: var(--mini-media-player-background-opacity, 1);
    --mmp-artwork-opacity: var(--mini-media-player-artwork-opacity, 1);
    --mmp-progress-height: var(--mini-media-player-progress-height, 6px);
    --mmp-border-radius: var(--ha-card-border-radius, 12px);
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    color: var(--mmp-text-color);
  }
  ha-card.--bg {
    --mmp-info-opacity: 0.75;
  }
  ha-card.--has-artwork[artwork='material'],
  ha-card.--has-artwork[artwork*='cover'] {
    --mmp-accent-color: var(
      --mini-media-player-overlay-accent-color,
      var(--mini-media-player-accent-color, var(--accent-color, #f39c12))
    );
    --mmp-text-color: var(--mmp-overlay-base-color);
    --mmp-text-color-inverted: #000;
    --mmp-active-color: rgba(255, 255, 255, 0.5);
    --mmp-icon-color: var(--mmp-text-color);
    --mmp-icon-active-color: var(--mmp-text-color);
    --mmp-info-opacity: 0.75;
    --disabled-color: var(--mini-media-player-overlay-color, rgba(255, 255, 255, 0.75)) !important;
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    --switch-checked-color: var(--mmp-accent-color);
    --switch-checked-button-color: var(--mmp-accent-color);
    --switch-checked-track-color: var(--mmp-accent-color);
    --switch-unchecked-color: var(--mmp-text-color);
    --switch-unchecked-button-color: var(--mmp-text-color);
    --switch-unchecked-track-color: var(--mmp-text-color);
    --mdc-text-field-fill-color: transparent;
    --mdc-text-field-ink-color: var(--mmp-text-color);
    --mdc-text-field-idle-line-color: var(--mmp-text-color);
    --mdc-text-field-label-ink-color: var(--mmp-text-color);
    --mdc-text-field-hover-line-color: var(--mmp-text-color);
    --mdc-ripple-color: var(--mmp-text-color);
    --text-field-padding: 0;
    color: var(--mmp-text-color);
  }
  ha-card {
    cursor: default;
    display: flex;
    background: transparent;
    overflow: visible;
    padding: 0;
    position: relative;
    color: inherit;
    font-size: calc(var(--mmp-unit) * 0.35);
    --mdc-icon-button-size: calc(var(--mmp-unit));
    --mdc-icon-size: calc(var(--mmp-unit) * 0.6);
  }
  ha-card.--group {
    box-shadow: none;
    border: none;
    --mmp-progress-height: var(--mini-media-player-progress-height, 4px);
    --mmp-border-radius: 0px
  }
  ha-card.--more-info {
    cursor: pointer;
  }
  .lmp__bg,
  .lmp-player,
  .lmp__container {
    border-radius: var(--mmp-border-radius);
  }
  .lmp__container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ha-card:before {
    content: '';
    padding-top: 0px;
    transition: padding-top 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: padding-top;
  }
  ha-card.--initial .entity__artwork,
  ha-card.--initial .entity__icon {
    animation-duration: 0.001s;
  }
  ha-card.--initial:before,
  ha-card.--initial .lmp-player {
    transition: none;
  }
  header {
    display: none;
  }
  ha-card[artwork='full-cover'].--has-artwork:before {
    padding-top: 56%;
  }
  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,
  ha-card[artwork='full-cover-fit'].--has-artwork:before {
    padding-top: 100%;
  }
  .lmp__bg {
    background: var(--ha-card-background, var(--card-background-color, var(--paper-card-background-color, white)));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: var(--mmp-bg-opacity);
  }
  ha-card[artwork='material'].--has-artwork .lmp__bg,
  ha-card[artwork*='cover'].--has-artwork .lmp__bg {
    opacity: var(--mmp-artwork-opacity);
    background: transparent;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    height: 100%;
    right: 0;
    left: unset;
    animation: fade-in 4s cubic-bezier(0.21, 0.61, 0.35, 1) !important;
  }
  ha-card[artwork='material'].--has-artwork .cover.--prev {
    animation: fade-in 1s linear reverse forwards !important;
  }
  ha-card[artwork='material'].--has-artwork .cover-gradient {
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    opacity: 1;
  }
  ha-card.--group .lmp__bg {
    background: transparent;
  }
  ha-card.--inactive .cover {
    opacity: 0;
  }
  ha-card.--inactive .cover.--bg {
    opacity: 1;
  }
  .cover-gradient {
    transition: opacity 0.45s linear;
    opacity: 0;
  }
  .cover,
  .cover:before {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.75s linear, width 0.05s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: opacity;
  }
  .cover:before {
    content: '';
    background: var(--mmp-overlay-color);
  }
  .cover {
    animation: fade-in 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: var(--mmp-border-radius, 0);
    overflow: hidden;
  }
  .cover.--prev {
    animation: fade-in 0.5s linear reverse forwards;
  }
  .cover.--bg {
    opacity: 1;
  }
  ha-card[artwork*='full-cover'].--has-artwork .lmp-player {
    background: linear-gradient(to top, var(--mmp-overlay-color) var(--mmp-overlay-color-stop), transparent 100%);
  }
  ha-card.--has-artwork .cover,
  ha-card.--has-artwork[artwork='cover'] .cover:before {
    opacity: 0.999;
  }
  ha-card[artwork='default'] .cover {
    display: none;
  }
  ha-card.--bg .cover {
    display: block;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    background-size: cover;
  }
  ha-card[artwork='full-cover-fit'].--has-artwork .cover {
    background-color: black;
    background-size: contain;
  }
  .lmp-player {
    align-self: flex-end;
    box-sizing: border-box;
    position: relative;
    padding: 16px;
    transition: padding 0.25s ease-out;
    width: 100%;
    will-change: padding;
  }
  ha-card.--group .lmp-player {
    padding: 2px 0;
  }
  .flex {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
  }
  .lmp-player__core {
    position: relative;
  }
  .entity__info {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    position: relative;
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;

    /* Updated flex to match screenshot: flex: 2 1 0% */
    flex: 2 1 0%;
    min-width: 0;
  }

  ha-card.--rtl .entity__info {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) / 5);
  }
  ha-card[content='movie'] .attr__media_season,
  ha-card[content='movie'] .attr__media_episode {
    display: none;
  }
  .entity__icon {
    color: var(--mmp-icon-color);
  }
  .entity__icon[color] {
    color: var(--mmp-icon-active-color);
  }
  .entity__artwork,
  .entity__icon {
    animation: fade-in 0.25s ease-out;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    height: var(--mmp-unit);
    width: var(--mmp-unit);
    min-width: var(--mmp-unit);
    line-height: var(--mmp-unit);
    margin-right: calc(var(--mmp-unit) / 5);
    position: relative;
    text-align: center;
    will-change: border-color;
    transition: border-color 0.25s ease-out;
  }
  ha-card.--rtl .entity__artwork,
  ha-card.--rtl .entity__icon {
    margin-right: auto;
  }
  .entity__artwork[border] {
    border: 2px solid var(--primary-text-color);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .entity__artwork[border][state='playing'] {
    border-color: var(--mmp-accent-color);
  }
  .entity__info__name,
  .entity__info__media[short] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .entity__info__name {
    line-height: calc(var(--mmp-unit) / 2);
    color: var(--mmp-text-color);
    font-weight: var(--mmp-name-font-weight);
  }
  .entity__info__media {
    color: var(--secondary-text-color);
    max-height: 6em;
    word-break: break-word;
    opacity: var(--mmp-info-opacity);
    transition: color 0.5s;
    -webkit-text-size-adjust: 100%;
  }
  .entity__info__media .lmp-line-2,
  .entity__info__media .lmp-line-3 {
    line-height: calc(var(--mmp-unit) / 2);
    white-space: normal;
  }
  .entity__info__media[compact] .lmp-line-2,
  .entity__info__media[compact] .lmp-line-3 {
    line-height: calc(var(--mmp-unit) / 2.4);
  }
  .entity__info__media[compact] .lmp-line-3 {
    gap: 4px;
    margin-top: 3px;
  }
  .entity__info__media[compact] .lmp-pill {
    padding: 0px 7px;
    font-size: 0.68em;
    line-height: 1.15em;
  }
  .lmp-line-3 {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 2px;
  }
  .lmp-pill {
    display: inline-block;
    padding: 0px 8px;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-size: 0.7em;
    line-height: 1.25em;
    color: var(--mmp-text-color);
    background: color-mix(in srgb, var(--mmp-text-color) 10%, transparent);
    border: 1.5px solid var(--mmp-accent-color);
  }
  .lmp-pill.lmp-pill-resolution {
    background: rgba(255, 255, 255, 0.9) !important;
    color: #1a1a1a !important;
    border-color: rgba(0, 0, 0, 0.2) !important;
  }
  ha-card.--has-artwork .lmp-pill,
  ha-card.--bg .lmp-pill {
    color: var(--mmp-media-cover-info-color);
    background: color-mix(in srgb, var(--mmp-media-cover-info-color) 12%, transparent);
    border-color: var(--mmp-accent-color);
  }
    /* Resolution pill - light background tinted from palette with dark text */
  .lmp-pill.lmp-pill-resolution,
  ha-card .lmp-pill.lmp-pill-resolution {
      /* Default mode: derive tint from primary text color for palette cohesion */
      background: var(
        --mini-media-player-res-bg,
        color-mix(in srgb, var(--mmp-text-color, #d0d0d0) 35%, #ffffff)
      ) !important;
      color: var(--mini-media-player-res-fg, #151515) !important;
      border-color: var(--mini-media-player-res-border, var(--mmp-accent-color)) !important;
    }
  ha-card.--has-artwork .lmp-pill.lmp-pill-resolution,
  ha-card.--bg .lmp-pill.lmp-pill-resolution {
      /* Artwork/bg modes: tint from media cover info color like other pills */
      background: var(
        --mini-media-player-res-bg,
        color-mix(in srgb, var(--mmp-media-cover-info-color, #d0d0d0) 35%, #ffffff)
      ) !important;
      color: var(--mini-media-player-res-fg, #151515) !important;
      border-color: var(--mini-media-player-res-border, var(--mmp-accent-color)) !important;
    }
  .lmp-pill-vcodec {
    background: color-mix(in srgb, var(--mmp-accent-color) 14%, transparent);
  }
  .lmp-pill-fps {
    background: color-mix(in srgb, var(--mmp-text-color) 12%, transparent);
  }
  .lmp-pill-acodec {
    background: color-mix(in srgb, var(--mmp-text-color) 10%, transparent);
  }
  .lmp-pill-method {
    background: color-mix(in srgb, var(--mmp-text-color) 8%, transparent);
  }
  .lmp-pill-method--direct {
    border-color: color-mix(in srgb, var(--mmp-accent-color) 70%, #3fb950);
    background: color-mix(in srgb, #3fb950 18%, transparent);
  }
  .lmp-pill-method--transcoded {
    border-color: color-mix(in srgb, var(--mmp-accent-color) 70%, #d29922);
    background: color-mix(in srgb, #d29922 18%, transparent);
  }
  .entity__info__media[short] {
    max-height: calc(var(--mmp-unit) / 2);
    overflow: hidden;
  }
  .attr__app_name {
    display: none;
  }
  .attr__app_name:first-child,
  .attr__app_name:first-of-type {
    display: inline;
  }
  .lmp-player__core[inactive] .entity__info__media {
    color: var(--mmp-text-color);
    max-width: 200px;
    opacity: 0.5;
  }
  .entity__info__media[short-scroll] {
    max-height: calc(var(--mmp-unit) / 2);
    white-space: nowrap;
  }
  .entity__info__media[scroll] > span {
    visibility: hidden;
  }
  .entity__info__media[scroll] > div {
    animation: move linear infinite;
  }
  .entity__info__media[scroll] .marquee {
    animation: slide linear infinite;
  }
  .entity__info__media[scroll] .marquee,
  .entity__info__media[scroll] > div {
    animation-duration: inherit;
    visibility: visible;
  }
  .entity__info__media[scroll] {
    animation-duration: 10s;
    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }
  .marquee {
    visibility: hidden;
    position: absolute;
    white-space: nowrap;
  }
  ha-card[artwork*='cover'].--has-artwork .entity__info__media,
  ha-card.--bg .entity__info__media {
    color: var(--mmp-media-cover-info-color);
  }
  .entity__info__media span:before {
    content: ' - ';
  }
  .entity__info__media span:first-of-type:before {
    content: '';
  }
  .lmp-line-3 .lmp-pill:before { content: none; }
  .entity__info__media span:empty {
    display: none;
  }
  .lmp-player__adds {
    margin-left: calc(var(--mmp-unit) * 1.2);
    position: relative;
  }
  ha-card.--rtl .lmp-player__adds {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) * 1.2);
  }
  .lmp-player__adds > *:nth-child(2) {
    margin-top: 0px;
  }
  lmp-powerstrip {
    flex: 1;
    justify-content: flex-end;
    margin-right: 0;
    margin-left: auto;
    width: auto;
    max-width: 100%;
  }
  lmp-media-controls {
    flex-wrap: wrap;
  }
  ha-card.--flow lmp-powerstrip {
    justify-content: space-between;
    margin-left: auto;
  }
  ha-card.--flow.--rtl lmp-powerstrip {
    margin-right: auto;
  }
  ha-card.--flow .entity__info {
    display: none;
  }
  ha-card.--responsive .lmp-player__adds {
    margin-left: 0;
  }
  ha-card.--responsive.--rtl .lmp-player__adds {
    margin-right: 0;
  }
  ha-card.--responsive .lmp-player__adds > lmp-media-controls {
    padding: 0;
  }
  ha-card.--progress .lmp-player {
    padding-bottom: calc(16px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--progress.--group .lmp-player {
    padding-bottom: calc(10px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--runtime .lmp-player {
    padding-bottom: calc(16px + 16px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--runtime.--group .lmp-player {
    padding-bottom: calc(16px + 12px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--inactive .lmp-player {
    padding: 16px;
  }
  ha-card.--inactive.--group .lmp-player {
    padding: 2px 0;
  }
  .lmp-player div:empty {
    display: none;
  }
  @keyframes slide {
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes move {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ha-switch {
    padding: 16px 6px;
  }
`,se=it`
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * 0.6);
    height: calc(var(--mmp-unit) * 0.6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color 0.25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: 0.5;
  }
  ha-icon-button ha-icon {
    display: flex;
  }
`;var le=(t,e,i,r,o)=>{let n;switch(r.action){case"more-info":n=new Event("hass-more-info",{composed:!0}),n.detail={entityId:r.entity||o},t.dispatchEvent(n);break;case"navigate":if(!r.navigation_path)return;window.history.pushState(null,"",r.navigation_path),n=new Event("location-changed",{composed:!0}),n.detail={replace:!1},window.dispatchEvent(n);break;case"call-service":{if(!r.service)return;const[t,i]=r.service.split(".",2),o={...r.service_data};e.callService(t,i,o);break}case"url":if(!r.url)return;r.new_tab?window.open(r.url,"_blank"):window.location.href=r.url;break;case"fire-dom-event":n=new Event("ll-custom",{composed:!0,bubbles:!0}),n.detail=r,t.dispatchEvent(n)}r.haptic&&((t,e)=>{const i=new Event("haptic",{composed:!0});i.detail={haptic:e},t.dispatchEvent(i)})(t,r.haptic)};var ce,pe,ue,he=(ce=function(t,e){var i;window,i=function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=10)}([function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.assignDeep=e.mapValues=void 0,e.mapValues=function(t,e){var i={};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];i[r]=e(o)}return i},e.assignDeep=function t(e){for(var i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];return i.forEach((function(i){if(i)for(var r in i)if(i.hasOwnProperty(r)){var o=i[r];Array.isArray(o)?e[r]=o.slice(0):"object"==typeof o?(e[r]||(e[r]={}),t(e[r],o)):e[r]=o}})),e}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),n=r(i(8)),a=i(0),s=function(){function t(e,i){this._src=e,this.opts=a.assignDeep({},t.DefaultOpts,i)}return t.use=function(t){this._pipeline=t},t.from=function(t){return new n.default(t)},Object.defineProperty(t.prototype,"result",{get:function(){return this._result},enumerable:!1,configurable:!0}),t.prototype._process=function(e,i){this.opts.quantizer,e.scaleDown(this.opts);var r=o.buildProcessOptions(this.opts,i);return t._pipeline.process(e.getImageData(),r)},t.prototype.palette=function(){return this.swatches()},t.prototype.swatches=function(){throw new Error("Method deprecated. Use `Vibrant.result.palettes[name]` instead")},t.prototype.getPalette=function(){var t=this,e=arguments[0],i=arguments[1],r="string"==typeof e?e:"default",o="string"==typeof e?i:e,n=new this.opts.ImageClass;return n.load(this._src).then((function(e){return t._process(e,{generators:[r]})})).then((function(e){return t._result=e,e.palettes[r]})).then((function(t){return n.remove(),o&&o(void 0,t),t})).catch((function(t){return n.remove(),o&&o(t),Promise.reject(t)}))},t.prototype.getPalettes=function(){var t=this,e=arguments[0],i=arguments[1],r=Array.isArray(e)?e:["*"],o=Array.isArray(e)?i:e,n=new this.opts.ImageClass;return n.load(this._src).then((function(e){return t._process(e,{generators:r})})).then((function(e){return t._result=e,e.palettes})).then((function(t){return n.remove(),o&&o(void 0,t),t})).catch((function(t){return n.remove(),o&&o(t),Promise.reject(t)}))},t.DefaultOpts={colorCount:64,quality:5,filters:[]},t}();e.default=s},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.applyFilters=e.ImageBase=void 0;var r=function(){function t(){}return t.prototype.scaleDown=function(t){var e=this.getWidth(),i=this.getHeight(),r=1;if(t.maxDimension>0){var o=Math.max(e,i);o>t.maxDimension&&(r=t.maxDimension/o)}else r=1/t.quality;r<1&&this.resize(e*r,i*r,r)},t}();e.ImageBase=r,e.applyFilters=function(t,e){if(e.length>0)for(var i=t.data,r=i.length/4,o=void 0,n=void 0,a=void 0,s=void 0,l=void 0,c=0;c<r;c++){n=i[0+(o=4*c)],a=i[o+1],s=i[o+2],l=i[o+3];for(var p=0;p<e.length;p++)if(!e[p](n,a,s,l)){i[o+3]=0;break}}return t}},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.Swatch=void 0;var r=i(4),o=function(){function t(t,e){this._rgb=t,this._population=e}return t.applyFilters=function(t,e){return e.length>0?t.filter((function(t){for(var i=t.r,r=t.g,o=t.b,n=0;n<e.length;n++)if(!e[n](i,r,o,255))return!1;return!0})):t},t.clone=function(e){return new t(e._rgb,e._population)},Object.defineProperty(t.prototype,"r",{get:function(){return this._rgb[0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"g",{get:function(){return this._rgb[1]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"b",{get:function(){return this._rgb[2]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rgb",{get:function(){return this._rgb},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hsl",{get:function(){if(!this._hsl){var t=this._rgb,e=t[0],i=t[1],o=t[2];this._hsl=r.rgbToHsl(e,i,o)}return this._hsl},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hex",{get:function(){if(!this._hex){var t=this._rgb,e=t[0],i=t[1],o=t[2];this._hex=r.rgbToHex(e,i,o)}return this._hex},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"population",{get:function(){return this._population},enumerable:!1,configurable:!0}),t.prototype.toJSON=function(){return{rgb:this.rgb,population:this.population}},t.prototype.getRgb=function(){return this._rgb},t.prototype.getHsl=function(){return this.hsl},t.prototype.getPopulation=function(){return this._population},t.prototype.getHex=function(){return this.hex},t.prototype.getYiq=function(){if(!this._yiq){var t=this._rgb;this._yiq=(299*t[0]+587*t[1]+114*t[2])/1e3}return this._yiq},Object.defineProperty(t.prototype,"titleTextColor",{get:function(){return this._titleTextColor&&(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bodyTextColor",{get:function(){return this._bodyTextColor&&(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor},enumerable:!1,configurable:!0}),t.prototype.getTitleTextColor=function(){return this.titleTextColor},t.prototype.getBodyTextColor=function(){return this.bodyTextColor},t}();e.Swatch=o},function(t,e,i){function r(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!e)throw new RangeError("'"+t+"' is not a valid hex color");return[e[1],e[2],e[3]].map((function(t){return parseInt(t,16)}))}function o(t,e,i){return e/=255,i/=255,t=(t/=255)>.04045?Math.pow((t+.005)/1.055,2.4):t/12.92,e=e>.04045?Math.pow((e+.005)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.005)/1.055,2.4):i/12.92,[.4124*(t*=100)+.3576*(e*=100)+.1805*(i*=100),.2126*t+.7152*e+.0722*i,.0193*t+.1192*e+.9505*i]}function n(t,e,i){return e/=100,i/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(t-e),200*(e-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]}function a(t,e,i){var r=o(t,e,i);return n(r[0],r[1],r[2])}function s(t,e){var i=t[0],r=t[1],o=t[2],n=e[0],a=e[1],s=e[2],l=i-n,c=r-a,p=o-s,u=Math.sqrt(r*r+o*o),h=n-i,d=Math.sqrt(a*a+s*s)-u,m=Math.sqrt(l*l+c*c+p*p),g=Math.sqrt(m)>Math.sqrt(Math.abs(h))+Math.sqrt(Math.abs(d))?Math.sqrt(m*m-h*h-d*d):0;return h/=1,d/=1*(1+.045*u),g/=1*(1+.015*u),Math.sqrt(h*h+d*d+g*g)}function l(t,e){return s(a.apply(void 0,t),a.apply(void 0,e))}Object.defineProperty(e,"__esModule",{value:!0}),e.getColorDiffStatus=e.hexDiff=e.rgbDiff=e.deltaE94=e.rgbToCIELab=e.xyzToCIELab=e.rgbToXyz=e.hslToRgb=e.rgbToHsl=e.rgbToHex=e.hexToRgb=e.DELTAE94_DIFF_STATUS=void 0,e.DELTAE94_DIFF_STATUS={NA:0,PERFECT:1,CLOSE:2,GOOD:10,SIMILAR:50},e.hexToRgb=r,e.rgbToHex=function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1,7)},e.rgbToHsl=function(t,e,i){t/=255,e/=255,i/=255;var r=Math.max(t,e,i),o=Math.min(t,e,i),n=0,a=0,s=(r+o)/2;if(r!==o){var l=r-o;switch(a=s>.5?l/(2-r-o):l/(r+o),r){case t:n=(e-i)/l+(e<i?6:0);break;case e:n=(i-t)/l+2;break;case i:n=(t-e)/l+4}n/=6}return[n,a,s]},e.hslToRgb=function(t,e,i){var r,o,n;function a(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}if(0===e)r=o=n=i;else{var s=i<.5?i*(1+e):i+e-i*e,l=2*i-s;r=a(l,s,t+1/3),o=a(l,s,t),n=a(l,s,t-1/3)}return[255*r,255*o,255*n]},e.rgbToXyz=o,e.xyzToCIELab=n,e.rgbToCIELab=a,e.deltaE94=s,e.rgbDiff=l,e.hexDiff=function(t,e){return l(r(t),r(e))},e.getColorDiffStatus=function(t){return t<e.DELTAE94_DIFF_STATUS.NA?"N/A":t<=e.DELTAE94_DIFF_STATUS.PERFECT?"Perfect":t<=e.DELTAE94_DIFF_STATUS.CLOSE?"Close":t<=e.DELTAE94_DIFF_STATUS.GOOD?"Good":t<e.DELTAE94_DIFF_STATUS.SIMILAR?"Similar":"Wrong"}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=r(i(6)),n=r(i(9));o.default.DefaultOpts.ImageClass=n.default,t.exports=o.default},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(1));o.default.DefaultOpts.quantizer="mmcq",o.default.DefaultOpts.generators=["default"],o.default.DefaultOpts.filters=["default"],e.default=o.default},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.buildProcessOptions=void 0;var r=i(0);e.buildProcessOptions=function(t,e){var i=t.colorCount,o=t.quantizer,n=t.generators,a=t.filters,s={colorCount:i},l="string"==typeof o?{name:o,options:{}}:o;return l.options=r.assignDeep({},s,l.options),r.assignDeep({},{quantizer:l,generators:n,filters:a},e)}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(1)),n=i(0),a=function(){function t(t,e){void 0===e&&(e={}),this._src=t,this._opts=n.assignDeep({},o.default.DefaultOpts,e)}return t.prototype.maxColorCount=function(t){return this._opts.colorCount=t,this},t.prototype.maxDimension=function(t){return this._opts.maxDimension=t,this},t.prototype.addFilter=function(t){return this._opts.filters?this._opts.filters.push(t):this._opts.filters=[t],this},t.prototype.removeFilter=function(t){if(this._opts.filters){var e=this._opts.filters.indexOf(t);e>0&&this._opts.filters.splice(e)}return this},t.prototype.clearFilters=function(){return this._opts.filters=[],this},t.prototype.quality=function(t){return this._opts.quality=t,this},t.prototype.useImageClass=function(t){return this._opts.ImageClass=t,this},t.prototype.useGenerator=function(t,e){return this._opts.generators||(this._opts.generators=[]),this._opts.generators.push(e?{name:t,options:e}:t),this},t.prototype.useQuantizer=function(t,e){return this._opts.quantizer=e?{name:t,options:e}:t,this},t.prototype.build=function(){return new o.default(this._src,this._opts)},t.prototype.getPalette=function(t){return this.build().getPalette(t)},t.prototype.getSwatches=function(t){return this.build().getPalette(t)},t}();e.default=a},function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},r(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype._initCanvas=function(){var t=this.image,e=this._canvas=document.createElement("canvas"),i=e.getContext("2d");if(!i)throw new ReferenceError("Failed to create canvas context");this._context=i,e.className="@vibrant/canvas",e.style.display="none",this._width=e.width=t.width,this._height=e.height=t.height,i.drawImage(t,0,0),document.body.appendChild(e)},e.prototype.load=function(t){var e,i,r,o,n,a,s,l=this;if("string"==typeof t)e=document.createElement("img"),i=t,(s=new URL(i,location.href)).protocol===location.protocol&&s.host===location.host&&s.port===location.port||(r=window.location.href,o=i,n=new URL(r),a=new URL(o),n.protocol===a.protocol&&n.hostname===a.hostname&&n.port===a.port)||(e.crossOrigin="anonymous"),e.src=i;else{if(!(t instanceof HTMLImageElement))return Promise.reject(new Error("Cannot load buffer as an image in browser"));e=t,i=t.src}return this.image=e,new Promise((function(t,r){var o=function(){l._initCanvas(),t(l)};e.complete?o():(e.onload=o,e.onerror=function(t){return r(new Error("Fail to load image: "+i))})}))},e.prototype.clear=function(){this._context.clearRect(0,0,this._width,this._height)},e.prototype.update=function(t){this._context.putImageData(t,0,0)},e.prototype.getWidth=function(){return this._width},e.prototype.getHeight=function(){return this._height},e.prototype.resize=function(t,e,i){var r=this,o=r._canvas,n=r._context,a=r.image;this._width=o.width=t,this._height=o.height=e,n.scale(i,i),n.drawImage(a,0,0)},e.prototype.getPixelCount=function(){return this._width*this._height},e.prototype.getImageData=function(){return this._context.getImageData(0,0,this._width,this._height)},e.prototype.remove=function(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)},e}(i(2).ImageBase);e.default=n},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=i(5),n=r(i(11));o.use(n.default),t.exports=o},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(12)),n=r(i(16)),a=(new(i(17).BasicPipeline)).filter.register("default",(function(t,e,i,r){return r>=125&&!(t>250&&e>250&&i>250)})).quantizer.register("mmcq",o.default).generator.register("default",n.default);e.default=a},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(3),n=r(i(13)),a=r(i(15));function s(t,e){for(var i=t.size();t.size()<e;){var r=t.pop();if(!(r&&r.count()>0))break;var o=r.split(),n=o[0],a=o[1];if(t.push(n),a&&a.count()>0&&t.push(a),t.size()===i)break;i=t.size()}}e.default=function(t,e){if(0===t.length||e.colorCount<2||e.colorCount>256)throw new Error("Wrong MMCQ parameters");var i=n.default.build(t);i.histogram.colorCount;var r=new a.default((function(t,e){return t.count()-e.count()}));r.push(i),s(r,.75*e.colorCount);var l=new a.default((function(t,e){return t.count()*t.volume()-e.count()*e.volume()}));return l.contents=r.contents,s(l,e.colorCount-l.size()),function(t){for(var e=[];t.size();){var i=t.pop(),r=i.avg();r[0],r[1],r[2],e.push(new o.Swatch(r,i.count()))}return e}(l)}},function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(14)),n=function(){function t(t,e,i,r,o,n,a){this.histogram=a,this._volume=-1,this._count=-1,this.dimension={r1:t,r2:e,g1:i,g2:r,b1:o,b2:n}}return t.build=function(e){var i=new o.default(e,{sigBits:5});return new t(i.rmin,i.rmax,i.gmin,i.gmax,i.bmin,i.bmax,i)},t.prototype.invalidate=function(){this._volume=this._count=-1,this._avg=null},t.prototype.volume=function(){if(this._volume<0){var t=this.dimension,e=t.r1,i=t.r2,r=t.g1,o=t.g2,n=t.b1,a=t.b2;this._volume=(i-e+1)*(o-r+1)*(a-n+1)}return this._volume},t.prototype.count=function(){if(this._count<0){for(var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,o=r.r1,n=r.r2,a=r.g1,s=r.g2,l=r.b1,c=r.b2,p=0,u=o;u<=n;u++)for(var h=a;h<=s;h++)for(var d=l;d<=c;d++)p+=e[i(u,h,d)];this._count=p}return this._count},t.prototype.clone=function(){var e=this.histogram,i=this.dimension;return new t(i.r1,i.r2,i.g1,i.g2,i.b1,i.b2,e)},t.prototype.avg=function(){if(!this._avg){var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,o=r.r1,n=r.r2,a=r.g1,s=r.g2,l=r.b1,c=r.b2,p=0,u=void 0,h=void 0,d=void 0;u=h=d=0;for(var m=o;m<=n;m++)for(var g=a;g<=s;g++)for(var f=l;f<=c;f++){var _=e[i(m,g,f)];p+=_,u+=_*(m+.5)*8,h+=_*(g+.5)*8,d+=_*(f+.5)*8}this._avg=p?[~~(u/p),~~(h/p),~~(d/p)]:[~~(8*(o+n+1)/2),~~(8*(a+s+1)/2),~~(8*(l+c+1)/2)]}return this._avg},t.prototype.contains=function(t){var e=t[0],i=t[1],r=t[2],o=this.dimension,n=o.r1,a=o.r2,s=o.g1,l=o.g2,c=o.b1,p=o.b2;return i>>=3,r>>=3,(e>>=3)>=n&&e<=a&&i>=s&&i<=l&&r>=c&&r<=p},t.prototype.split=function(){var t=this.histogram,e=t.hist,i=t.getColorIndex,r=this.dimension,o=r.r1,n=r.r2,a=r.g1,s=r.g2,l=r.b1,c=r.b2,p=this.count();if(!p)return[];if(1===p)return[this.clone()];var u,h,d=n-o+1,m=s-a+1,g=c-l+1,f=Math.max(d,m,g),_=null;u=h=0;var v=null;if(f===d){v="r",_=new Uint32Array(n+1);for(var y=o;y<=n;y++){u=0;for(var b=a;b<=s;b++)for(var w=l;w<=c;w++)u+=e[i(y,b,w)];h+=u,_[y]=h}}else if(f===m)for(v="g",_=new Uint32Array(s+1),b=a;b<=s;b++){for(u=0,y=o;y<=n;y++)for(w=l;w<=c;w++)u+=e[i(y,b,w)];h+=u,_[b]=h}else for(v="b",_=new Uint32Array(c+1),w=l;w<=c;w++){for(u=0,y=o;y<=n;y++)for(b=a;b<=s;b++)u+=e[i(y,b,w)];h+=u,_[w]=h}for(var x=-1,k=new Uint32Array(_.length),S=0;S<_.length;S++){var $=_[S];x<0&&$>h/2&&(x=S),k[S]=h-$}var P=this;return function(t){var e=t+"1",i=t+"2",r=P.dimension[e],o=P.dimension[i],n=P.clone(),a=P.clone(),s=x-r,l=o-x;for(s<=l?(o=Math.min(o-1,~~(x+l/2)),o=Math.max(0,o)):(o=Math.max(r,~~(x-1-s/2)),o=Math.min(P.dimension[i],o));!_[o];)o++;for(var c=k[o];!c&&_[o-1];)c=k[--o];return n.dimension[i]=o,a.dimension[e]=o+1,[n,a]}(v)},t}();e.default=n},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){this.pixels=t,this.opts=e;var i=e.sigBits,r=function(t,e,r){return(t<<2*i)+(e<<i)+r};this.getColorIndex=r;var o,n,a,s,l,c,p,u,h,d=8-i,m=new Uint32Array(1<<3*i);o=a=l=0,n=s=c=Number.MAX_VALUE;for(var g=t.length/4,f=0;f<g;){var _=4*f;f++,p=t[_+0],u=t[_+1],h=t[_+2],0!==t[_+3]&&(m[r(p>>=d,u>>=d,h>>=d)]+=1,p>o&&(o=p),p<n&&(n=p),u>a&&(a=u),u<s&&(s=u),h>l&&(l=h),h<c&&(c=h))}this._colorCount=m.reduce((function(t,e){return e>0?t+1:t}),0),this.hist=m,this.rmax=o,this.rmin=n,this.gmax=a,this.gmin=s,this.bmax=l,this.bmin=c}return Object.defineProperty(t.prototype,"colorCount",{get:function(){return this._colorCount},enumerable:!1,configurable:!0}),t}();e.default=r},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this._comparator=t,this.contents=[],this._sorted=!1}return t.prototype._sort=function(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)},t.prototype.push=function(t){this.contents.push(t),this._sorted=!1},t.prototype.peek=function(t){return this._sort(),t="number"==typeof t?t:this.contents.length-1,this.contents[t]},t.prototype.pop=function(){return this._sort(),this.contents.pop()},t.prototype.size=function(){return this.contents.length},t.prototype.map=function(t){return this._sort(),this.contents.map(t)},t}();e.default=r},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var r=i(3),o=i(4),n={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function a(t,e,i,r,o,n,a,s,l,c){var p=null,u=0;return e.forEach((function(e){var h=e.hsl,d=h[1],m=h[2];if(d>=s&&d<=l&&m>=o&&m<=n&&!function(t,e){return t.Vibrant===e||t.DarkVibrant===e||t.LightVibrant===e||t.Muted===e||t.DarkMuted===e||t.LightMuted===e}(t,e)){var g=function(t,e,i,r,o,n,a){function s(t,e){return 1-Math.abs(t-e)}return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i=0,r=0,o=0;o<t.length;o+=2){var n=t[o],a=t[o+1];i+=n*a,r+=a}return i/r}(s(t,e),a.weightSaturation,s(i,r),a.weightLuma,o/n,a.weightPopulation)}(d,a,m,r,e.population,i,c);(null===p||g>u)&&(p=e,u=g)}})),p}e.default=function(t,e){e=Object.assign({},n,e);var i=function(t){var e=0;return t.forEach((function(t){e=Math.max(e,t.population)})),e}(t),s=function(t,e,i){var r={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return r.Vibrant=a(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.LightVibrant=a(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.DarkVibrant=a(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetVibrantSaturation,i.minVibrantSaturation,1,i),r.Muted=a(r,t,e,i.targetNormalLuma,i.minNormalLuma,i.maxNormalLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.LightMuted=a(r,t,e,i.targetLightLuma,i.minLightLuma,1,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r.DarkMuted=a(r,t,e,i.targetDarkLuma,0,i.maxDarkLuma,i.targetMutesSaturation,0,i.maxMutesSaturation,i),r}(t,i,e);return function(t,e,i){if(!t.Vibrant&&!t.DarkVibrant&&!t.LightVibrant){if(!t.DarkVibrant&&t.DarkMuted){var n=t.DarkMuted.hsl,a=n[0],s=n[1],l=n[2];l=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.LightVibrant&&t.LightMuted){var c=t.LightMuted.hsl;a=c[0],s=c[1],l=c[2],l=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}}if(!t.Vibrant&&t.DarkVibrant){var p=t.DarkVibrant.hsl;a=p[0],s=p[1],l=p[2],l=i.targetNormalLuma,t.Vibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}else if(!t.Vibrant&&t.LightVibrant){var u=t.LightVibrant.hsl;a=u[0],s=u[1],l=u[2],l=i.targetNormalLuma,t.Vibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.DarkVibrant&&t.Vibrant){var h=t.Vibrant.hsl;a=h[0],s=h[1],l=h[2],l=i.targetDarkLuma,t.DarkVibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.LightVibrant&&t.Vibrant){var d=t.Vibrant.hsl;a=d[0],s=d[1],l=d[2],l=i.targetLightLuma,t.LightVibrant=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.Muted&&t.Vibrant){var m=t.Vibrant.hsl;a=m[0],s=m[1],l=m[2],l=i.targetMutesSaturation,t.Muted=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.DarkMuted&&t.DarkVibrant){var g=t.DarkVibrant.hsl;a=g[0],s=g[1],l=g[2],l=i.targetMutesSaturation,t.DarkMuted=new r.Swatch(o.hslToRgb(a,s,l),0)}if(!t.LightMuted&&t.LightVibrant){var f=t.LightVibrant.hsl;a=f[0],s=f[1],l=f[2],l=i.targetMutesSaturation,t.LightMuted=new r.Swatch(o.hslToRgb(a,s,l),0)}}(s,0,e),s}},function(t,e,i){var r=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(o,n){function a(t){try{l(r.next(t))}catch(t){n(t)}}function s(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,s)}l((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var i,r,o,n,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(o=2&n[0]?r.return:n[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,n[1])).done)return o;switch(r=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],r=0}finally{i=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.BasicPipeline=e.Stage=void 0;var n=i(2),a=function(){function t(t){this.pipeline=t,this._map={}}return t.prototype.names=function(){return Object.keys(this._map)},t.prototype.has=function(t){return!!this._map[t]},t.prototype.get=function(t){return this._map[t]},t.prototype.register=function(t,e){return this._map[t]=e,this.pipeline},t}();e.Stage=a;var s=function(){function t(){this.filter=new a(this),this.quantizer=new a(this),this.generator=new a(this)}return t.prototype._buildProcessTasks=function(t){var e=this,i=t.filters,r=t.quantizer,o=t.generators;return 1===o.length&&"*"===o[0]&&(o=this.generator.names()),{filters:i.map((function(t){return n(e.filter,t)})),quantizer:n(this.quantizer,r),generators:o.map((function(t){return n(e.generator,t)}))};function n(t,e){var i,r;return"string"==typeof e?i=e:(i=e.name,r=e.options),{name:i,fn:t.get(i),options:r}}},t.prototype.process=function(t,e){return r(this,void 0,void 0,(function(){var i,r,n,a,s,l,c;return o(this,(function(o){switch(o.label){case 0:return i=this._buildProcessTasks(e),r=i.filters,n=i.quantizer,a=i.generators,[4,this._filterColors(r,t)];case 1:return s=o.sent(),[4,this._generateColors(n,s)];case 2:return l=o.sent(),[4,this._generatePalettes(a,l)];case 3:return c=o.sent(),[2,{colors:l,palettes:c}]}}))}))},t.prototype._filterColors=function(t,e){return Promise.resolve(n.applyFilters(e,t.map((function(t){return t.fn}))))},t.prototype._generateColors=function(t,e){return Promise.resolve(t.fn(e.data,t.options))},t.prototype._generatePalettes=function(t,e){return r(this,void 0,void 0,(function(){var i;return o(this,(function(r){switch(r.label){case 0:return[4,Promise.all(t.map((function(t){var i=t.fn,r=t.options;return Promise.resolve(i(e,r))})))];case 1:return i=r.sent(),[2,Promise.resolve(i.reduce((function(e,i,r){return e[t[r].name]=i,e}),{}))]}}))}))},t}();e.BasicPipeline=s}])},t.exports=i()},ce(pe={exports:{}},pe.exports),pe.exports),de=(ue=he)&&ue.__esModule&&Object.prototype.hasOwnProperty.call(ue,"default")?ue.default:ue;const me=(t,e,i)=>{const r=[t,e,i].map((t=>{let e=t;return e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4}));return.2126*r[0]+.7152*r[1]+.0722*r[2]},ge=(t,e)=>Math.round(100*(((t,e)=>{const i=me(...t),r=me(...e);return(Math.max(i,r)+.05)/(Math.min(i,r)+.05)})(t,e)+Number.EPSILON))/100;de._pipeline.generator.register("default",(t=>{if(!t.length)return["#ffffff","#000000"];t.sort(((t,e)=>e.population-t.population));const e=t[0],[i,r]=(()=>{let i=e,r=e,o=0;if(1===t.length){const i=[new e.constructor([Math.max(0,e.rgb[0]-50),Math.max(0,e.rgb[1]-50),Math.max(0,e.rgb[2]-50)],0),new e.constructor([Math.min(255,e.rgb[0]+50),Math.min(255,e.rgb[1]+50),Math.min(255,e.rgb[2]+50)],0),new e.constructor([0,0,0],0),new e.constructor([255,255,255],0)];t.push(...i)}for(let e=0;e<t.length;e++)for(let s=0;s<t.length;s++){if(e===s)continue;const l=(n=t[e].rgb,a=t[s].rgb,ge(n,a));l>o&&(o=l,me(...t[e].rgb)<me(...t[s].rgb)?(i=t[e],r=t[s]):(i=t[s],r=t[e]))}var n,a;return o<4.5&&(r=new e.constructor(e.getYiq()<200?[255,255,255]:[0,0,0],0)),[r.rgb,i.rgb]})();return[new e.constructor(i,0).hex,new e.constructor(r,0).hex]}));customElements.get("ha-slider")||customElements.define("ha-slider",class extends(customElements.get("paper-slider")){}),customElements.get("ha-icon-button")||customElements.define("ha-icon-button",class extends(customElements.get("paper-icon-button")){}),customElements.get("ha-icon")||customElements.define("ha-icon",class extends(customElements.get("iron-icon")){});const fe={en:{placeholder:{tts:"Text to speech"},label:{leave:"Leave",ungroup:"Ungroup",group_all:"Group all",send:"Send",master:"Master"},state:{idle:"Idle",unavailable:"Unavailable"},title:{speaker_management:"Group management"}},de:{placeholder:{tts:"Text zum Sprechen"},label:{leave:"Verlassen",ungroup:"Teilen",group_all:"Gruppieren",send:"Senden",master:"Master"},state:{idle:"Pause",unavailable:"Nicht verfügbar"},title:{speaker_management:"Wiedergabe auf"}},fi:{placeholder:{tts:"Teksti puheeksi"},label:{leave:"Jätä",ungroup:"Pura ryhmä",group_all:"Liitä kaikki",send:"Lähetä",master:"Master"},state:{idle:"Tauko",unavailable:"Ei käytettävissä"},title:{speaker_management:"Ryhmän hallinta"}},fr:{placeholder:{tts:"Texte à lire"},label:{leave:"Quitter",ungroup:"Dégrouper",group_all:"Grouper tous",send:"Envoyer"},state:{idle:"Inactif",unavailable:"Indisponible"},title:{speaker_management:"Gestion des groupes"}},he:{placeholder:{tts:"טקסט לדיבור"},label:{leave:"לעזוב",ungroup:"ביטול קבוצה",group_all:"לקבץ את כולם",send:"שליחה",master:"ראשי"},state:{idle:"לא פעיל",unavailable:"לא זמין"},title:{speaker_management:"ניהול קבוצות"}},hu:{placeholder:{tts:"Szövegfelolvasás"},label:{leave:"Kilépés",ungroup:"Összes ki",group_all:"Összes be",send:"Küldés",master:"Forrás"},state:{idle:"Tétlen",unavailable:"Nem elérhető"},title:{speaker_management:"Hangszórók csoportosítása"}},it:{placeholder:{tts:"Conversione testo in voce"},label:{leave:"Lascia",ungroup:"Separa",group_all:"Raggruppa tutti",send:"Invia",master:"Master"},state:{idle:"Inattivo",unavailable:"Non disponibile"},title:{speaker_management:"Gestione gruppo"}},is:{placeholder:{tts:"Texti sem á að segja"},label:{leave:"Yfirgefa",ungroup:"Aðskilja",group_all:"Sameina alla",send:"Senda",master:"Stjórnandi"},state:{idle:"Aðgerðalaus",unavailable:"Ekki tiltækt"},title:{speaker_management:"Stjórnun hópa"}},no:{placeholder:{tts:"Tekst til tale"},label:{leave:"Forlat",ungroup:"Oppløs gruppe",group_all:"Grupper alle",send:"Send",master:"Master"},state:{idle:"Inaktiv",unavailable:"Utilgjengelig"},title:{speaker_management:"Gruppestyring"}},pl:{placeholder:{tts:"Zamień tekst na mowę"},label:{leave:"Opuść",ungroup:"Usuń grupę",group_all:"Grupuj wszystkie",send:"Wyślij",master:"Główny"},state:{idle:"brak aktywności",unavailable:"niedostępny"},title:{speaker_management:"Zarządzanie grupą"}},sv:{placeholder:{tts:"Text till tal"},label:{leave:"Lämna",ungroup:"Avgruppera",group_all:"Gruppera alla",send:"Skicka",master:"Master"},state:{idle:"Inaktiv",unavailable:"Otillgänglig"},title:{speaker_management:"Gruppstyrning"}},uk:{placeholder:{tts:"Текст для відтворення"},label:{leave:"Залишити",ungroup:"Розгрупувати",group_all:"Згрупувати всі",send:"Надіслати",master:"Головний"},state:{idle:"бездіяльність",unavailable:"недоступний"},title:{speaker_management:"Управління групою"}},cz:{placeholder:{tts:"Převeď text na řeč"},label:{leave:"Odejít",ungroup:"Zrušit seskupení",group_all:"Seskupit vše",send:"Poslat",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupný"},title:{speaker_management:"Správa skupin"}},ru:{placeholder:{tts:"Преобразование текста в речь"},label:{leave:"Покинуть",ungroup:"Разгруппировать",group_all:"Сгруппировать все",send:"Отправить",master:"Мастер"},state:{idle:"Бездействие",unavailable:"Недоступен"},title:{speaker_management:"Управление группой"}},es:{placeholder:{tts:"Texto a voz"},label:{leave:"Salir",ungroup:"Desagrupar",group_all:"Agrupar todos",send:"Enviar",master:"Maestro"},state:{idle:"Inactivo",unavailable:"No disponible"},title:{speaker_management:"Gestión de grupo"}},zh:{placeholder:{tts:"播放文本"},label:{leave:"退出",ungroup:"取消组合",group_all:"组合全部",send:"发送",master:"主要的"},state:{idle:"空闲",unavailable:"不可用"},title:{speaker_management:"组合管理"}},sk:{placeholder:{tts:"Prevod textu na reč"},label:{leave:"Odísť",ungroup:"Zrušiť zoskupenie",group_all:"Zoskupiť všetky",send:"Poslať",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupné"},title:{speaker_management:"Manažment skupiny"}},ca:{placeholder:{tts:"Text a veu"},label:{leave:"Sortir",ungroup:"Desagrupar",group_all:"Agrupar-los tots",send:"Enviar",master:"Mestre"},state:{idle:"Inactiu",unavailable:"No disponible"},title:{speaker_management:"Gestió del grup"}},nl:{placeholder:{tts:"Tekst naar spraak"},label:{leave:"Verlaten",ungroup:"Ontgroeperen",group_all:"Alles groeperen",send:"Verzenden",master:"Master"},state:{idle:"Inactief",unavailable:"Niet beschikbaar"},title:{speaker_management:"Groepsbeheer"}},pt:{placeholder:{tts:"Texto para fala"},label:{leave:"Sair",ungroup:"Desagrupar",group_all:"Agrupar tudo",send:"Enviar",master:"Master"},state:{idle:"Ocioso",unavailable:"Indisponível"},title:{speaker_management:"Gerenciamento de grupo"}},cs:{placeholder:{tts:"Převod textu na řeč"},label:{leave:"Opustit",ungroup:"Zrušit seskupení",group_all:"Seskupit vše",send:"Poslat",master:"Master"},state:{idle:"Nečinný",unavailable:"Nedostupné"},title:{speaker_management:"Správa skupiny"}}},_e=(t,e)=>e.split(".").reduce(((t,e)=>t&&t[e]||null),t),ve=(t,e,i,r="unknown")=>{const o=t.selectedLanguage||t.language,n=o.split("-")[0];return fe[o]&&_e(fe[o],e)||t.resources[o]&&i&&t.resources[o][i]||fe[n]&&_e(fe[n],e)||_e(fe.en,e)||r};class ye extends ot{render(){return I`
      <ha-switch .checked=${this.checked} ?disabled=${this.disabled}></ha-switch>
      <span ?disabled=${this.disabled}>
        <slot>${this.label}</slot>
      </span>
    `}static get styles(){return it`
      :host {
        display: flex;
        padding: 0.6em 0;
        align-items: center;
      }
      span {
        margin-left: 1em;
        font-weight: 400;
      }
      span[disabled] {
        opacity: 0.65;
      }
    `}}t([Y({attribute:!1})],ye.prototype,"checked",void 0),t([Y({attribute:!1})],ye.prototype,"disabled",void 0),t([Y({attribute:!1})],ye.prototype,"label",void 0);customElements.get("lmp-checkbox")||customElements.define("lmp-checkbox",ye);let be=class extends ot{render(){return I`
      <lmp-checkbox
        .checked=${this.checked}
        .disabled=${this.disabled}
        @change="${t=>t.stopPropagation()}"
        @click="${this.handleClick}"
      >
        ${this.item.name} ${this.master?I`<span class="master">(${ve(this.hass,"label.master")})</span>`:""}
  </lmp-checkbox>
    `}handleClick(t){t.stopPropagation(),t.preventDefault(),this.disabled||this.dispatchEvent(new CustomEvent("change",{detail:{entity:this.item.entity_id,checked:!this.checked}}))}static get styles(){return it`
      .master {
        font-weight: 500;
      }
    `}};t([Y({attribute:!1})],be.prototype,"hass",void 0),t([Y({attribute:!1})],be.prototype,"item",void 0),t([Y({attribute:!1})],be.prototype,"checked",void 0),t([Y({attribute:!1})],be.prototype,"disabled",void 0),t([Y({attribute:!1})],be.prototype,"master",void 0),be=t([J("lmp-group-item")],be);let we=class extends ot{render(){return I`
      <div class="container">
        <div class="slot-container">
          <slot></slot>
        </div>
        <paper-ripple></paper-ripple>
      </div>
    `}static get styles(){return it`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 4px;
        min-width: 0;
        overflow: hidden;
        transition: background 0.5s;
        border-radius: 4px;
        font-weight: 500;
      }
      :host([raised]) {
        background: var(--mmp-button-color);
        min-height: calc(var(--mmp-unit) * 0.8);
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }
      :host([color]) {
        background: var(--mmp-active-color);
        transition: background 0.25s;
        opacity: 1;
      }
      :host([faded]) {
        opacity: 0.75;
      }
      :host([disabled]) {
        opacity: 0.25;
        pointer-events: none;
      }
      .container {
        height: 100%;
        width: 100%;
      }
      .slot-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        width: auto;
      }
      paper-ripple {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
    `}};we=t([J("lmp-button")],we);let xe=class extends ot{get group(){return this.player.group}get master(){return this.player.master}get isMaster(){return this.player.isMaster}get isGrouped(){return this.player.isGrouped}handleGroupChange(t){const{entity:e,checked:i}=t.detail;this.player.handleGroupChange(t,e,i)}render(){if(!this.visible)return I``;const{group:t,isMaster:e,isGrouped:i}=this,{id:r}=this.player;return I`
  <div class="lmp-group-list">
  <span class="lmp-group-list__title">${ve(this.hass,"title.speaker_management")}</span>
        ${this.entities.map((t=>this.renderItem(t,r)))}
  <div class="lmp-group-list__buttons">
          <lmp-button raised ?disabled=${!i} @click=${t=>this.player.handleGroupChange(t,r,!1)}>
            <span>${ve(this.hass,"label.leave")}</span>
          </lmp-button>
          ${i&&e?I`
                <lmp-button raised @click=${e=>this.player.handleGroupChange(e,t,!1)}>
                  <span>${ve(this.hass,"label.ungroup")}</span>
                </lmp-button>
              `:I``}
          <lmp-button
            raised
            ?disabled=${!e}
            @click=${t=>this.player.handleGroupChange(t,this.entities.map((t=>t.entity_id)),!0)}
          >
            <span>${ve(this.hass,"label.group_all")}</span>
          </lmp-button>
        </div>
      </div>
    `}renderItem(t,e){const i=t.entity_id;return I` <lmp-group-item
      @change=${this.handleGroupChange}
      .item=${t}
      .hass=${this.hass}
      .checked=${i===e||this.group.includes(i)}
      .disabled=${i===e||!this.isMaster}
      .master=${i===this.master}
    />`}static get styles(){return it`
  .lmp-group-list {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
        margin-bottom: 8px;
      }
  .lmp-group-list__title {
        font-weight: 500;
        letter-spacing: 0.1em;
        margin: 8px 0 4px;
        text-transform: uppercase;
      }
  .lmp-group-list__buttons {
        display: flex;
      }
  lmp-button {
        margin: 8px 8px 0 0;
        min-width: 0;
        text-transform: uppercase;
        text-align: center;
        width: 50%;
        --mdc-theme-primary: transparent;
      }
    `}};t([Y({attribute:!1})],xe.prototype,"hass",void 0),t([Y({attribute:!1})],xe.prototype,"entities",void 0),t([Y({attribute:!1})],xe.prototype,"player",void 0),t([Y({attribute:!1})],xe.prototype,"visible",void 0),xe=t([J("lmp-group-list")],xe);class ke extends ot{static get properties(){return{items:[],label:String,selected:String,id:String,isOpen:Boolean}}get selectedIndex(){return this.items.map((t=>t.id)).indexOf(this.selected)}firstUpdated(){const t=this.shadowRoot.querySelector("#menu"),e=this.shadowRoot.querySelector("#button");t.anchor=e}render(){return I`
      <div
  class='lmp-dropdown'
        @click=${t=>t.stopPropagation()}
        ?open=${this.isOpen}>
        ${this.icon?I`
          <ha-icon-button
            id='button'
            class='lmp-dropdown__button icon'
            .icon=${Lt}
            @click=${this.toggleMenu}>
            <ha-icon .icon=${Lt}></ha-icon>
          </ha-icon-button>
        `:I`
          <lmp-button id='button' class='lmp-dropdown__button' 
            @click=${this.toggleMenu}>
            <div>
              <span class='lmp-dropdown__label ellipsis'>
                ${this.selected||this.label}
              </span>
              <ha-icon class='lmp-dropdown__icon' .icon=${Lt}></ha-icon>
            </div>
          </lmp-button>
        `}
        <mwc-menu
          @closed=${this.handleClose}
          @selected=${this.onChange}
          activatable
          id='menu'
          corner='BOTTOM_RIGHT'
          menuCorner='END'>
          ${this.items.map((t=>I`
            <mwc-list-item value=${t.id||t.name}>
              ${t.icon?I`<ha-icon .icon=${t.icon}></ha-icon>`:""}
              ${t.name?I`<span class='lmp-dropdown__item__label'>${t.name}</span>`:""}
            </mwc-list-item>`))}
        </mwc-menu>
      </div>
    `}onChange(t){const{index:e}=t.detail;e!==this.selectedIndex&&this.items[e]&&this.dispatchEvent(new CustomEvent("change",{detail:this.items[e]}))}handleClose(t){t.stopPropagation(),this.isOpen=!1}toggleMenu(){const t=this.shadowRoot.querySelector("#menu");t.open=!t.open,this.isOpen=t.open}static get styles(){return[se,it`
        :host {
          display: block;
        }
        :host([faded]) {
          opacity: .75;
        }
  :host[small] .lmp-dropdown__label {
          max-width: 60px;
          display: block;
          position: relative;
          width: auto;
          text-transform: initial;
        }
  :host[full] .lmp-dropdown__label {
          max-width: none;
        }
  .lmp-dropdown {
          padding: 0;
          display: block;
          position: relative;
        }
  .lmp-dropdown__button {
          display: flex;
          font-size: 1em;
          justify-content: space-between;
          align-items: center;
          height: calc(var(--mmp-unit) - 4px);
          margin: 2px 0;
        }
  .lmp-dropdown__button.icon {
          height: var(--mmp-unit);
          margin: 0;
        }
  .lmp-dropdown__button > div {
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          height: calc(var(--mmp-unit) - 4px);
          max-width: 100%;
        }
  .lmp-dropdown__label {
          text-align: left;
          text-transform: none;
        }
  .lmp-dropdown__icon {
          height: auto;
          width: calc(var(--mmp-unit) * .6);
          min-width: calc(var(--mmp-unit) * .6);
        }
        mwc-list-item > *:nth-child(2) {
          margin-left: 4px;
        }
        .lmp-dropdown[open] lmp-button ha-icon {
          color: var(--mmp-accent-color);
          transform: rotate(180deg);
        }
        .lmp-dropdown[open] ha-icon-button {
          color: var(--mmp-accent-color);
          transform: rotate(180deg);
        }
        .lmp-dropdown[open] ha-icon-button[focused] {
          color: var(--mmp-text-color);
          transform: rotate(0deg);
        }
      `]}}customElements.get("lmp-dropdown")||customElements.define("lmp-dropdown",ke);class Se extends ot{static get properties(){return{player:{},shortcuts:{}}}get buttons(){return this.shortcuts.buttons}get list(){return this.shortcuts.list}get show(){return!this.shortcuts.hide_when_off||this.player.isActive}get active(){return this.player.getAttribute(this.shortcuts.attribute)}get height(){return this.shortcuts.column_height||36}render(){if(!this.show)return I``;const{active:t}=this,e=this.list?I`
  <lmp-dropdown class='lmp-shortcuts__dropdown'
        @change=${this.handleShortcut}
        .items=${this.list}
        .label=${this.shortcuts.label}
        .selected=${t}>
  </lmp-dropdown>
    `:"",i=this.buttons?I`
  <div class='lmp-shortcuts__buttons'>
        ${this.buttons.map((e=>I`
          <lmp-button
            style="${ct(this.shortcutStyle(e))}"
            raised
            columns=${this.shortcuts.columns}
            ?color=${e.id===t}
            class='lmp-shortcuts__button'
            @click=${t=>this.handleShortcut(t,e)}>
            <div align=${this.shortcuts.align_text}>
              ${e.icon?I`<ha-icon .icon=${e.icon}></ha-icon>`:""}
              ${e.image?I`<img src=${e.image}>`:""}
              ${e.name?I`<span class="ellipsis">${e.name}</span>`:""}
            </div>
          </lmp-button>`))}
      </div>
    `:"";return I`
      ${i}
      ${e}
    `}handleShortcut(t,e){const{type:i,id:r,data:o}=e||t.detail;if("source"===i)return this.player.setSource(t,r);if("service"===i)return this.player.toggleService(t,r,o);if("script"===i)return this.player.toggleScript(t,r,o);if("sound_mode"===i)return this.player.setSoundMode(t,r);const n={media_content_type:i,media_content_id:r};this.player.setMedia(t,n)}shortcutStyle(t){return{"min-height":`${this.height}px`,...t.cover&&{"background-image":`url(${t.cover})`}}}static get styles(){return[se,it`
  .lmp-shortcuts__buttons {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          margin-top: 8px;
        }
  .lmp-shortcuts__button {
          min-width: calc(50% - 8px);
          flex: 1;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
  .lmp-shortcuts__button > div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: .2em 0;
        }
  .lmp-shortcuts__button > div[align='left'] {
          justify-content: flex-start;
        }
  .lmp-shortcuts__button > div[align='right'] {
          justify-content: flex-end;
        }
  .lmp-shortcuts__button[columns='1'] {
          min-width: calc(100% - 8px);
        }
  .lmp-shortcuts__button[columns='3'] {
          min-width: calc(33.33% - 8px);
        }
  .lmp-shortcuts__button[columns='4'] {
          min-width: calc(25% - 8px);
        }
  .lmp-shortcuts__button[columns='5'] {
          min-width: calc(20% - 8px);
        }
  .lmp-shortcuts__button[columns='6'] {
          min-width: calc(16.66% - 8px);
        }
  .lmp-shortcuts__button > div > span {
          line-height: calc(var(--mmp-unit) * .6);
          text-transform: initial;
        }
  .lmp-shortcuts__button > div > ha-icon {
          width: calc(var(--mmp-unit) * .6);
          height: calc(var(--mmp-unit) * .6);
        }
  .lmp-shortcuts__button > div > *:nth-child(2) {
          margin-left: 4px;
        }
  .lmp-shortcuts__button > div > img {
          height: 24px;
        }
      `]}}customElements.get("lmp-shortcuts")||customElements.define("lmp-shortcuts",Se);class $e extends ot{static get properties(){return{hass:{},config:{},player:{}}}get label(){return ve(this.hass,"placeholder.tts","ui.card.media_player.text_to_speak","Say")}get input(){return this.shadowRoot.getElementById("tts-input")}get message(){return this.input.value}render(){return I`
      <ha-textfield
        id="tts-input"
  class="lmp-tts__input"
        placeholder="${this.label}..."
        @click=${t=>t.stopPropagation()}
      >
      </ha-textfield>
  <lmp-button class="lmp-tts__button" @click=${this.handleTts}>
        <span>${ve(this.hass,"label.send")}</span>
  </lmp-button>
    `}handleTts(t){const{config:e,message:i}=this,r={message:i,entity_id:e.entity_id||this.player.id,..."group"===e.entity_id&&{entity_id:this.player.group},...e.data};switch(e.language&&(r.language=e.language),e.platform){case"alexa":this.hass.callService("notify","alexa_media",{message:i,data:{type:e.type||"tts",...e.data},target:r.entity_id});break;case"sonos":this.hass.callService("script","sonos_say",{sonos_entity:r.entity_id,volume:e.volume||.5,message:i,...e.data});break;case"webos":this.hass.callService("notify",r.entity_id.split(".").slice(-1)[0],{message:i,...e.data});break;case"ga":this.hass.callService("notify","ga_broadcast",{message:i,...e.data});break;case"service":{const[t,o]=(e.data.service||"").split("."),n={[e.data.message_field||"message"]:i,entity_id:r.entity_id,...e.language?{language:r.language}:{},...e.data.service_data||{}};this.hass.callService(t,o,n);break}default:this.hass.callService("tts",`${e.platform}_say`,r)}t.stopPropagation(),this.reset()}reset(){this.input.value=""}static get styles(){return it`
      :host {
        align-items: center;
        margin: 8px 4px 0px;
        display: flex;
      }
  .lmp-tts__input {
        cursor: text;
        flex: 1;
        margin-right: 8px;
      }
  ha-card[rtl] .lmp-tts__input {
        margin-right: auto;
        margin-left: 8px;
      }
  .lmp-tts__button {
        margin: 0;
        height: 30px;
        padding: 0 .4em;
      }
    `}}customElements.get("lmp-tts")||customElements.define("lmp-tts",$e);var Pe=t=>{let e=Math.abs(parseInt(""+t%60,10)),i=Math.abs(parseInt(""+t/60%60,10)),r=Math.abs(parseInt(""+t/3600%24,10));return r=r<10?`0${r}`:r,i=i<10?`0${i}`:i,e=e<10?`0${e}`:e,`${"00"!==r?`${r}:`:""}${i}:${e}`};class Ce extends ot{static get properties(){return{_player:{},showTime:Boolean,showRemainingTime:Boolean,progress:Number,duration:Number,tracker:{},seekProgress:Number,seekWidth:Number,track:Boolean}}set player(t){this._player=t,this.hasProgress&&this.trackProgress()}get player(){return this._player}get duration(){return this.player.mediaDuration}get hasProgress(){return this.player.hasProgress}get width(){return this.shadowRoot.querySelector(".lmp-progress").offsetWidth}get offset(){return this.getBoundingClientRect().left}get classes(){return st({transiting:!this.seekProgress,seeking:this.seekProgress})}render(){return I`
  <div class='lmp-progress'
        @touchstart=${this.initSeek}
        @touchend=${this.handleSeek}
        @mousedown=${this.initSeek}
        @mouseup=${this.handleSeek}
        @mouseleave=${this.resetSeek}
        @click=${t=>t.stopPropagation()}
        ?paused=${!this.player.isPlaying}>
        ${this.showTime?I`
          <div class='lmp-progress__duration'>
            <span>${Pe(this.seekProgress||this.progress)}</span>
            <div>
              ${this.showTime?I`
                <span class='lmp-progress__duration__remaining'>
                  -${Pe(this.duration-(this.seekProgress||this.progress))} |
                </span>
              `:""}
              <span>${Pe(this.duration)}</span>
            </div>
          </div>
        `:""}
        <div class='progress-bar' style=${this.progressBarStyle()}></div>
      </div>
    `}progressBarStyle(){return ct({width:(this.seekProgress||this.progress)/this.duration*100+"%"})}trackProgress(){this.progress=this.player.progress,this.tracker||(this.tracker=setInterval((()=>this.trackProgress()),1e3)),this.player.isPlaying||(clearInterval(this.tracker),this.tracker=null)}initSeek(t){const e=t.offsetX||t.touches[0].pageX-this.offset;this.seekWidth=this.width,this.seekProgress=this.calcProgress(e),this.addEventListener("touchmove",this.moveSeek),this.addEventListener("mousemove",this.moveSeek)}resetSeek(){this.seekProgress=null,this.removeEventListener("touchmove",this.moveSeek),this.removeEventListener("mousemove",this.moveSeek)}moveSeek(t){t.preventDefault();const e=t.offsetX||t.touches[0].pageX-this.offset;this.seekProgress=this.calcProgress(e)}handleSeek(t){this.resetSeek();const e=t.offsetX||t.changedTouches[0].pageX-this.offset,i=this.calcProgress(e);this.player.seek(t,i)}disconnectedCallback(){super.disconnectedCallback(),this.resetSeek(),clearInterval(this.tracker),this.tracker=null}connectedCallback(){super.connectedCallback(),this.hasProgress&&this.trackProgress()}calcProgress(t){const e=t/this.seekWidth*this.duration;return Math.min(Math.max(e,.1),this.duration)}static get styles(){return it`
  .lmp-progress {
        cursor: pointer;
        left: 0; right: 0; bottom: 0;
        position: absolute;
        pointer-events: auto;
        min-height: calc(var(--mmp-progress-height) + 10px);
      }
  .lmp-progress:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--mmp-progress-height);
        background-color: rgba(100,100,100,.15);
      }
  .lmp-progress__duration {
        left: calc(var(--ha-card-border-radius, 4px) / 2);
        right: calc(var(--ha-card-border-radius, 4px) / 2);
        bottom: calc(var(--mmp-progress-height) + 6px);
        position: absolute;
        display: flex;
        justify-content: space-between;
        font-size: .8em;
        padding: 0 6px;
        z-index: 2
      }
  .lmp-progress__duration__remaining {
        opacity: .5;
      }
      .progress-bar {
        height: var(--mmp-progress-height);
        bottom: 0;
        position: absolute;
        width: 0;
        transition: height 0;
        z-index: 1;
        background-color: var(--mmp-accent-color);
      }
      .progress-bar.seeking {
        transition: height .15s ease-out;
        height: calc(var(--mmp-progress-height) + 4px);
      }
  .lmp-progress[paused] .progress-bar {
        background-color: var(--disabled-text-color, rgba(150,150,150,.5));
      }
    `}}customElements.get("lmp-progress")||customElements.define("lmp-progress",Ce);let Ee=class extends ot{get source(){return this.player.source}get alternatives(){return this.player.sources.map((t=>({name:t,id:t,type:"source"})))}render(){return I`
  <lmp-dropdown
        @change=${this.handleSource}
        .items=${this.alternatives}
        .label=${this.source}
        .selected=${this.source}
        .icon=${this.icon}
  ></lmp-dropdown>
    `}handleSource(t){const{id:e}=t.detail;this.player.setSource(t,e)}static get styles(){return it`
      :host {
        max-width: 120px;
        min-width: var(--mmp-unit);
      }
      :host([full]) {
        max-width: none;
      }
    `}};t([Y({attribute:!1})],Ee.prototype,"player",void 0),t([Y({attribute:!1})],Ee.prototype,"icon",void 0),Ee=t([J("lmp-source-menu")],Ee);let Me=class extends ot{constructor(){super(...arguments),this.selected=void 0}get mode(){return this.player.soundMode}get alternatives(){return this.player.soundModes.map((t=>({name:t,id:t,type:"soundMode"})))}render(){return I`
  <lmp-dropdown
        @change=${this.handleChange}
        .items=${this.alternatives}
        .label=${this.mode}
        .selected=${this.selected||this.mode}
        .icon=${this.icon}
  ></lmp-dropdown>
    `}handleChange(t){const{id:e}=t.detail;this.player.setSoundMode(t,e),this.selected=e}static get styles(){return it`
      :host {
        max-width: 120px;
        min-width: var(--mmp-unit);
      }
      :host([full]) {
        max-width: none;
      }
    `}};t([Y({attribute:!1})],Me.prototype,"player",void 0),t([Y({attribute:!1})],Me.prototype,"icon",void 0),t([K()],Me.prototype,"selected",void 0),Me=t([J("lmp-sound-menu")],Me);class Te extends ot{static get properties(){return{player:{},config:{},break:Boolean}}get showShuffle(){return!this.config.hide.shuffle&&this.player.supportsShuffle}get showRepeat(){return!this.config.hide.repeat&&this.player.supportsRepeat}get maxVol(){return this.config.max_volume||100}get minVol(){return this.config.min_volume||0}get vol(){return Math.round(100*this.player.vol)}get jumpAmount(){return this.config.jump_amount||10}render(){const{hide:t}=this.config;return I`
      ${t.volume?I``:this.renderVolControls(this.player.muted)}
      ${this.renderShuffleButton()}
      ${this.renderRepeatButton()}
      ${t.controls?I``:I`
  <div class='flex lmp-media-controls__media' ?flow=${this.config.flow||this.break}>
          ${!t.prev&&this.player.supportsPrev?I`
            <ha-icon-button
              @click=${t=>this.player.prev(t)}
              .icon=${zt}>
             <ha-icon .icon=${zt}></ha-icon>
            </ha-icon-button>`:""}
          ${this.renderJumpBackwardButton()}
          ${this.renderPlayButtons()}
          ${this.renderJumpForwardButton()}
          ${!t.next&&this.player.supportsNext?I`
            <ha-icon-button
              @click=${t=>this.player.next(t)}
              .icon=${Dt}>
             <ha-icon .icon=${Dt}></ha-icon>
            </ha-icon-button>`:""}
        </div>
      `}
    `}renderShuffleButton(){return this.showShuffle?I`
  <div class='flex lmp-media-controls__shuffle'>
        <ha-icon-button
          class='shuffle-button'
          @click=${t=>this.player.toggleShuffle(t)}
          .icon=${Ut}
          ?color=${this.player.shuffle}>
          <ha-icon .icon=${Ut}></ha-icon>
        </ha-icon-button>
      </div>
    `:I``}renderRepeatButton(){if(!this.showRepeat)return I``;const t=[Vt.ONE,Vt.ALL].includes(this.player.repeat);return I`
  <div class='flex lmp-media-controls__repeat'>
        <ha-icon-button
          class='repeat-button'
          @click=${t=>this.player.toggleRepeat(t)}
          .icon=${Bt[this.player.repeat]}
          ?color=${t}>
          <ha-icon .icon=${Bt[this.player.repeat]}></ha-icon>
        </ha-icon-button>
      </div>
    `}renderVolControls(t){const e=this.config.volume_stateless?this.renderVolButtons(t):this.renderVolSlider(t),i=st({"--buttons":this.config.volume_stateless,"lmp-media-controls__volume":!0,flex:!0}),r=!this.config.hide.volume_level;return I`
      <div class=${i}>
        ${e}
        ${r?this.renderVolLevel():""}
      </div>`}renderVolSlider(t){return I`
      ${this.renderMuteButton(t)}
      <ha-slider
        @change=${this.handleVolumeChange}
        @click=${t=>t.stopPropagation()}
        ?disabled=${t}
        min=${this.minVol} max=${this.maxVol}
        .value=${100*this.player.vol}
        step=${this.config.volume_step||1}
        dir=${"ltr"}
        ignore-bar-touch pin labeled>
      </ha-slider>
    `}renderVolButtons(t){return I`
      ${this.renderMuteButton(t)}
      <ha-icon-button
        @click=${t=>this.player.volumeDown(t)}
        .icon=${Ft}>
          <ha-icon .icon=${Ft}></ha-icon>
      </ha-icon-button>
      <ha-icon-button
        @click=${t=>this.player.volumeUp(t)}
        .icon=${Gt}>
          <ha-icon .icon=${Gt}></ha-icon>
      </ha-icon-button>
    `}renderVolLevel(){return I`
  <span class="lmp-media-controls__volume__level">${this.vol}%</span>
    `}renderMuteButton(t){if(!this.config.hide.mute)switch(this.config.replace_mute){case"play":case"play_pause":return I`
          <ha-icon-button
            @click=${t=>this.player.playPause(t)}
            .icon=${It[this.player.isPlaying]}>
            <ha-icon .icon=${It[this.player.isPlaying]}></ha-icon>
          </ha-icon-button>
        `;case"stop":return I`
          <ha-icon-button
            @click=${t=>this.player.stop(t)}
            .icon=${qt.true}>
            <ha-icon .icon=${qt.true}></ha-icon>
          </ha-icon-button>
        `;case"play_stop":return I`
          <ha-icon-button
            @click=${t=>this.player.playStop(t)}
            .icon=${qt[this.player.isPlaying]}>
            <ha-icon .icon=${qt[this.player.isPlaying]}></ha-icon>
          </ha-icon-button>
        `;case"next":return I`
          <ha-icon-button
            @click=${t=>this.player.next(t)}
            .icon=${Dt}>
            <ha-icon .icon=${Dt}></ha-icon>
          </ha-icon-button>
        `;default:if(!this.player.supportsMute)return;return I`
          <ha-icon-button
            @click=${t=>this.player.toggleMute(t)}
            .icon=${jt[t]}>
            <ha-icon .icon=${jt[t]}></ha-icon>
          </ha-icon-button>
        `}}renderPlayButtons(){const{hide:t}=this.config;return I`
      ${t.play_pause?I``:this.player.assumedState?I`
        <ha-icon-button
          @click=${t=>this.player.play(t)}
          .icon=${It.false}>
            <ha-icon .icon=${It.false}></ha-icon>
        </ha-icon-button>
        <ha-icon-button
          @click=${t=>this.player.pause(t)}
          .icon=${It.true}>
            <ha-icon .icon=${It.true}></ha-icon>
        </ha-icon-button>
      `:I`
        <ha-icon-button
          @click=${t=>this.player.playPause(t)}
          .icon=${It[this.player.isPlaying]}>
            <ha-icon .icon=${It[this.player.isPlaying]}></ha-icon>
        </ha-icon-button>
      `}
      ${t.play_stop?I``:I`
        <ha-icon-button
          @click=${t=>this.handleStop(t)}
          .icon=${t.play_pause?qt[this.player.isPlaying]:qt.true}>
            <ha-icon .icon=${t.play_pause?qt[this.player.isPlaying]:qt.true}></ha-icon>
        </ha-icon-button>
      `}
    `}renderJumpForwardButton(){return this.config.hide.jump||!this.player.hasProgress?I``:I`
      <ha-icon-button
        @click=${t=>this.player.jump(t,this.jumpAmount)}
        .icon=${Ht}>
        <ha-icon .icon=${Ht}></ha-icon>
      </ha-icon-button>
    `}renderJumpBackwardButton(){return this.config.hide.jump||!this.player.hasProgress?I``:I`
      <ha-icon-button
        @click=${t=>this.player.jump(t,-this.jumpAmount)}
        .icon=${Wt}>
        <ha-icon .icon=${Wt}></ha-icon>
      </ha-icon-button>
    `}handleStop(t){return this.config.hide.play_pause?this.player.playStop(t):this.player.stop(t)}handleVolumeChange(t){const e=parseFloat(t.target.value)/100;this.player.setVolume(t,e)}static get styles(){return[se,it`
        :host {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .flex {
          display: flex;
          flex: 1;
          justify-content: space-between;
        }
        ha-slider {
          max-width: none;
          min-width: 100px;
          width: 100%;
          --md-sys-color-primary: var(--mmp-accent-color); /* before 2025.10.0 */
          color: var(--primary-text-color);
        }
        ha-icon-button {
          min-width: var(--mmp-unit);
        }
  .lmp-media-controls__volume {
          flex: 100;
          max-height: var(--mmp-unit);
          align-items: center;
        }
  .lmp-media-controls__volume.--buttons {
          justify-content: left;
        }
  .lmp-media-controls__media {
          margin-right: 0;
          margin-left: auto;
          justify-content: inherit;
        }
  .lmp-media-controls__media[flow] {
          max-width: none;
          justify-content: space-between;
        }
  .lmp-media-controls__shuffle,
  .lmp-media-controls__repeat {
          flex: 3;
          flex-shrink: 200;
          justify-content: center;
        }
      `]}}customElements.get("lmp-media-controls")||customElements.define("lmp-media-controls",Te);class Oe extends ot{static get properties(){return{hass:{},player:{},config:{},groupVisible:Boolean,idle:Boolean}}get icon(){return this.config.speaker_group.icon||Nt}get showGroupButton(){return this.config.speaker_group.entities.length>0&&!this.config.hide.group_button}get showPowerButton(){return!this.config.hide.power}get powerColor(){return this.player.isActive&&!this.config.hide.power_state}get sourceSize(){return"icon"===this.config.source||this.hasControls||this.idle}get soundSize(){return"icon"===this.config.sound_mode||this.hasControls||this.idle}get hasControls(){return this.player.isActive&&this.config.hide.controls!==this.config.hide.volume}get hasSource(){return this.player.sources.length>0&&!this.config.hide.source}get hasSoundMode(){return this.player.soundModes.length>0&&!this.config.hide.sound_mode}get showLabel(){return!this.config.hide.state_label}render(){return this.player.isUnavailable&&this.showLabel?I`
        <span class="label ellipsis"> ${ve(this.hass,"state.unavailable","state.default.unavailable")} </span>
      `:I`
      ${this.idle?this.renderIdleView:""}
      ${this.hasControls?I` <lmp-media-controls .player=${this.player} .config=${this.config}> </lmp-media-controls> `:""}
      ${this.hasSource?I` <lmp-source-menu .player=${this.player} .icon=${this.sourceSize} ?full=${"full"===this.config.source}>
          </lmp-source-menu>`:""}
      ${this.hasSoundMode?I` <lmp-sound-menu
            .player=${this.player}
            .icon=${this.soundSize}
            ?full=${"full"===this.config.sound_mode}
          >
          </lmp-sound-menu>`:""}
      ${this.showGroupButton?I` <ha-icon-button
            class="group-button"
            .icon=${this.icon}
            ?inactive=${!this.player.isGrouped}
            ?color=${this.groupVisible}
            @click=${this.handleGroupClick}
          >
            <ha-icon .icon=${this.icon}></ha-icon>
          </ha-icon-button>`:""}
      ${this.showPowerButton?I` <ha-icon-button
            class="power-button"
            .icon=${Rt}
            @click=${t=>this.player.toggle(t)}
            ?color=${this.powerColor}
          >
            <ha-icon .icon=${Rt}></ha-icon>
          </ha-icon-button>`:""}
    `}handleGroupClick(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("toggleGroupList"))}get renderIdleView(){return this.player.isPaused?I` <ha-icon-button .icon=${It[this.player.isPlaying]} @click=${t=>this.player.playPause(t)}>
        <ha-icon .icon=${It[this.player.isPlaying]}></ha-icon>
      </ha-icon-button>`:this.showLabel?I` <span class="label ellipsis"> ${ve(this.hass,"state.idle","state.media_player.idle")} </span> `:I``}static get styles(){return[se,it`
        :host {
          display: flex;
          line-height: var(--mmp-unit);
          max-height: var(--mmp-unit);
        }
        :host([flow]) lmp-media-controls {
          max-width: unset;
        }
        lmp-media-controls {
          max-width: calc(var(--mmp-unit) * 5);
          line-height: initial;
          justify-content: flex-end;
        }
        .group-button {
          --mdc-icon-size: calc(var(--mmp-unit) * 0.5);
        }
        ha-icon-button {
          min-width: var(--mmp-unit);
        }
      `]}}customElements.get("lmp-powerstrip")||customElements.define("lmp-powerstrip",Oe);let Ae=class extends ot{constructor(){super(...arguments),this.initial=!0,this.picture=void 0,this.thumbnail="",this.prevThumbnail="",this.edit=!1,this.rtl=!1,this.cardHeight=0,this.foregroundColor="",this.backgroundColor="",this.break=!1}set hass(t){if(!t)return;const e=t.states[this.config.entity];if(this._hass=t,e&&this.entity!==e&&(this.entity=e,this.player=new ne(t,this.config,e),this.rtl=this.computeRTL(t),this.idle=this.player.idle,this.player.trackIdle&&this.updateIdleStatus()),this.config&&this.config.speaker_group&&this.config.speaker_group.group_mgmt_entity){const e=t.states[this.config.speaker_group.group_mgmt_entity];e&&this.groupMgmtEntity!==e&&(this.groupMgmtEntity=e,this.groupMgmtPlayer=new ne(t,this.config,e))}}get hass(){return this._hass}static async getConfigElement(){return await Promise.resolve().then((function(){return ze})),document.createElement("lyfes-media-player-editor")}static get styles(){return[se,ae]}set overflow(t){this._overflow!==t&&(this._overflow=t)}get overflow(){return this._overflow}get name(){return this.config.name||this.player.name}setConfig(t){this.config=re(t)}shouldUpdate(t){return void 0===this.break&&this.computeRect(this),t.has("prevThumbnail")&&this.prevThumbnail&&setTimeout((()=>{this.prevThumbnail=""}),1e3),t.has("player")&&"material"===this.config.artwork&&this.setColors(),Zt.some((e=>t.has(e)))&&Boolean(this.player)}firstUpdated(){new Ot((t=>{t.forEach((t=>{window.requestAnimationFrame((()=>{"scroll"===this.config.info&&this.computeOverflow(),this._resizeTimer||(this.computeRect(t),this._resizeTimer=setTimeout((()=>{this._resizeTimer=void 0,this._resizeEntry&&(this.computeRect(this._resizeEntry),this.measureCard())}),250)),this._resizeEntry=t}))}))})).observe(this),setTimeout((()=>this.initial=!1),250),this.edit=this.config.speaker_group.expanded||!1}updated(){"scroll"===this.config.info&&setTimeout((()=>{this.computeOverflow()}),10)}render({config:t}=this){return this.computeArtwork(),I`
      <ha-card
        class=${this.computeClasses()}
        style=${this.computeStyles()}
        @click=${t=>this.handlePopup(t)}
        artwork=${t.artwork}
        content=${this.player.content}
      >
        <div class="lmp__bg">${this.renderBackground()} ${this.renderArtwork()} ${this.renderGradient()}</div>
        <div class="lmp-player">
          <div class="lmp-player__core flex" ?inactive=${this.player.idle}>
            ${this.renderIcon()}
            <div class="entity__info">${this.renderEntityName()} ${this.renderCustomMediaInfo()}</div>
            <lmp-powerstrip
              @toggleGroupList=${this.toggleGroupList}
              .hass=${this.hass}
              .player=${this.player}
              .config=${t}
              .groupVisible=${this.edit}
              .idle=${this.idle}
              ?flow=${t.flow}
            >
            </lmp-powerstrip>
          </div>
          <div class="lmp-player__adds">
            ${!t.collapse&&this.player.isActive?I`
                  <lmp-media-controls .player=${this.player} .config=${t} .break=${this.break}>
                  </lmp-media-controls>
                `:""}
            <lmp-shortcuts .player=${this.player} .shortcuts=${t.shortcuts}> </lmp-shortcuts>
            ${t.tts?I` <lmp-tts .config=${t.tts} .hass=${this.hass} .player=${this.player}> </lmp-tts> `:""}
            <lmp-group-list
              .hass=${this.hass}
              .visible=${this.edit}
              .entities=${t.speaker_group.entities}
              .player=${this.groupMgmtPlayer?this.groupMgmtPlayer:this.player}
              >>
            </lmp-group-list>
          </div>
        </div>
         <div class="lmp__container">
          ${this.player.isActive&&this.player.hasProgress?I`
                <lmp-progress
                  .player=${this.player}
                  .showTime=${!this.config.hide.runtime}
                  .showRemainingTime=${!this.config.hide.runtime_remaining}
                >
                </lmp-progress>
              `:""}
        </div>
      </ha-card>
    `}computeClasses({config:t}=this){return st({"--responsive":this.break||t.hide.icon,"--initial":this.initial,"--bg":t.background||!1,"--group":t.group,"--more-info":"none"!==t.tap_action.action,"--has-artwork":this.player.hasArtwork&&this.thumbnail,"--flow":t.flow,"--collapse":t.collapse,"--rtl":this.rtl,"--progress":this.player.hasProgress,"--runtime":!t.hide.runtime&&this.player.hasProgress,"--inactive":!this.player.isActive})}renderArtwork(){if(!this.thumbnail||"default"===this.config.artwork)return;const t={backgroundImage:this.thumbnail,backgroundColor:this.backgroundColor||"",width:"material"===this.config.artwork&&this.player.isActive?`${this.cardHeight}px`:"100%"},e={backgroundImage:this.prevThumbnail,width:"material"===this.config.artwork?`${this.cardHeight}px`:""};return I` <div class="cover" style=${ct(t)}></div>
      ${this.prevThumbnail&&I` <div class="cover --prev" style=${ct(e)}></div> `}`}renderGradient(){if("material"!==this.config.artwork)return;const t={backgroundImage:`linear-gradient(to left,\n        transparent 0,\n        ${this.backgroundColor} ${this.cardHeight}px,\n        ${this.backgroundColor} 100%)`};return I`<div class="cover-gradient" style=${ct(t)}></div>`}renderBackground(){if(this.config.background)return I`
      <div class="cover --bg" style=${ct({backgroundImage:`url(${this.config.background})`})}></div>
    `}handlePopup(t){t.stopPropagation(),le(this,this._hass,this.config,this.config.tap_action,this.player.id)}renderIcon(){if(this.config.hide.icon)return;if(this.player.isActive&&this.thumbnail&&"default"===this.config.artwork)return I` <div
        class="entity__artwork"
        style="background-image: ${this.thumbnail};"
        ?border=${!this.config.hide.artwork_border}
        state=${this.player.state}
      >
        ${" "}
      </div>`;if(this.player._attr.user_img)return I` <div class="entity__icon">
          <img src="${this.player._attr.user_img}" style="height: 100%; border-radius: 50%;" />
        </div>`;if(null!=this.config.icon_image)return I` <div class="entity__icon">
        <img src="${this.config.icon_image}" height="100%" />
      </div>`;const t=!this.config.hide.icon_state&&this.player.isActive;return I` <div class="entity__icon" ?color=${t}>
      <ha-state-icon
        .hass=${this.hass}
        .icon=${this.config.icon}
        .state=${this.entity}
        .stateObj=${this.entity}
      ></ha-state-icon>
    </div>`}renderEntityName(){if(!this.config.hide.name)return I` <div class="entity__info__name">${this.name} ${this.speakerCount()}</div>`}renderCustomMediaInfo(){if(this.config.hide.info)return;const t=this.player.secondaryLine,e=this.player.streamParts;return I` <div
      class="entity__info__media"
      ?short=${"short"===this.config.info}
      ?short-scroll=${"scroll"===this.config.info}
      ?compact=${this.config.collapse&&"scroll"!==this.config.info}
      ?scroll=${this.overflow}
      style="animation-duration: ${this.overflow}s;"
    >
  ${t?I`<div class="lmp-line-2">${t}</div>`:""}
      ${e&&e.length?I`<div class="lmp-line-3">
            ${e.map((t=>{var e;const i="method"===t.kind?"direct"===(null===(e=t.text)||void 0===e?void 0:e.toLowerCase())?" lmp-pill-method--direct":" lmp-pill-method--transcoded":"",r="resolution"===t.kind?"background: var(--mini-media-player-res-bg, color-mix(in srgb, var(--mmp-media-cover-info-color, var(--mmp-accent-color, #888)) 35%, #ffffff)); color: var(--mini-media-player-res-fg, #111111); border-color: var(--mini-media-player-res-border, var(--mmp-accent-color));":"";return I`<span class="lmp-pill lmp-pill-${t.kind}${i}" style="${r}">${t.text}</span>`}))}
          </div>`:""}
    </div>`}speakerCount(){if(this.config.speaker_group.show_group_count){const t=this.groupMgmtPlayer?this.groupMgmtPlayer.groupCount:this.player.groupCount;return t>1?" +"+(t-1):""}}computeStyles(){const{scale:t}=this.config;return ct(Object.assign(Object.assign(Object.assign({},t&&{"--mmp-unit":40*t+"px"}),this.player.hasArtwork&&{"--mmp-artwork-reserve":"material"===this.config.artwork?`clamp(24px, 6%, ${Math.max(72,Math.floor(.18*this.cardHeight))}px)`:this.config.artwork&&this.config.artwork.includes("cover")?`clamp(12px, 4%, ${Math.max(56,Math.floor(.14*this.cardHeight))}px)`:`clamp(16px, 5%, ${Math.max(64,Math.floor(.16*this.cardHeight))}px)`}),this.foregroundColor&&this.player.isActive&&{"--mmp-text-color":this.foregroundColor,"--mmp-icon-color":this.foregroundColor,"--mmp-icon-active-color":this.foregroundColor,"--mmp-accent-color":this.foregroundColor,"--secondary-text-color":this.foregroundColor,"--mmp-media-cover-info-color":this.foregroundColor,"--ha-control-color":this.foregroundColor}))}async computeArtwork(){const{picture:t,hasArtwork:e}=this.player;if(e&&(t!==this.picture||"tvchannel"===this.player._attr.media_content_type&&this.player._attr.program_image_url!==this._lastProgramImage)){console.log("Updating artwork:",{current:t,previous:this.picture,program:this.player._attr.program_image_url,lastProgram:this._lastProgramImage}),this.picture=t,this._lastProgramImage=this.player._attr.program_image_url;const e=await this.player.fetchArtwork();this.thumbnail&&(this.prevThumbnail=this.thumbnail),this.thumbnail=e||`url(${t})`}}measureCard(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-card");e&&(this.cardHeight=e.offsetHeight)}computeOverflow(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".marquee");if(e&&e.parentNode){const t=e.clientWidth>e.parentNode.clientWidth;this.overflow=t&&this.player.isActive?7.5+e.clientWidth/50:void 0}}computeRect(t){if("contentRect"in t){const{left:e,width:i}=t.contentRect;this.break=i+2*e<390}else{const{left:e,width:i}=t.getBoundingClientRect();this.break=i+2*e<390}}computeRTL(t){const e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}toggleGroupList(){this.edit=!this.edit}updateIdleStatus(){var t,e;const i=null===(e=null===(t=this.config)||void 0===t?void 0:t.idle_view)||void 0===e?void 0:e.after;if(!i)return;this._idleTracker&&clearTimeout(this._idleTracker);const r=(Date.now()-new Date(this.player.updatedAt).getTime())/1e3;this._idleTracker=setTimeout((()=>{this.idle=this.player.checkIdleAfter(i),this.player.idle=this.idle,this._idleTracker=void 0}),1e3*(60*i-r))}getCardSize(){return this.config.collapse?1:2}async setColors(){if(this.player.picture!==this.picture){if(!this.player.picture)return this.foregroundColor="",void(this.backgroundColor="");try{[this.foregroundColor,this.backgroundColor]=await(async t=>new de(t,{colorCount:16}).getPalette())(this.player.picture)}catch(t){console.error("Error getting Image Colors",t),this.foregroundColor="",this.backgroundColor=""}}}};t([Y({attribute:!1})],Ae.prototype,"hass",null),t([K()],Ae.prototype,"_overflow",void 0),t([K()],Ae.prototype,"initial",void 0),t([K()],Ae.prototype,"picture",void 0),t([K()],Ae.prototype,"thumbnail",void 0),t([K()],Ae.prototype,"prevThumbnail",void 0),t([K()],Ae.prototype,"edit",void 0),t([K()],Ae.prototype,"_lastProgramImage",void 0),t([K()],Ae.prototype,"rtl",void 0),t([K()],Ae.prototype,"cardHeight",void 0),t([K()],Ae.prototype,"foregroundColor",void 0),t([K()],Ae.prototype,"backgroundColor",void 0),t([K()],Ae.prototype,"config",void 0),t([K()],Ae.prototype,"_hass",void 0),t([K()],Ae.prototype,"entity",void 0),t([K()],Ae.prototype,"player",void 0),t([K()],Ae.prototype,"idle",void 0),t([K()],Ae.prototype,"groupMgmtPlayer",void 0),t([K()],Ae.prototype,"groupMgmtEntity",void 0),t([K()],Ae.prototype,"break",void 0),t([K()],Ae.prototype,"_resizeEntry",void 0),t([K()],Ae.prototype,"_resizeTimer",void 0),t([K()],Ae.prototype,"_idleTracker",void 0),Ae=t([J("lyfes-media-player")],Ae),window.customCards=window.customCards||[],window.customCards.push({type:"lyfes-media-player",name:"Lyfes Media Player",preview:!1,description:"A customizable media player card"});const Ve=["cover","full-cover","full-cover-fit","material","none"],Le=["icon","full"],Ne=["icon","full"],je=["short","scroll"],De=["play_pause","stop","play_stop","next"],Ie=(t,e=!1)=>{const i=t.map((t=>({name:t,id:t})));return e&&i.push({name:"Default",id:void 0}),i};class Re extends ot{static get styles(){return[ae,it`
        .editor-side-by-side {
          display: flex;
          margin: 16px 0;
        }
        .editor-side-by-side > * {
          flex: 1;
          padding-right: 4px;
        }
        .editor-label {
          margin-left: 6px;
          font-size: 0.8em;
          opacity: 0.75;
        }
      `]}static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=Object.assign({},re,t)}get getMediaPlayerEntities(){return Object.keys(this.hass.states).filter((t=>"media_player"===t.substr(0,t.indexOf("."))))}get _group(){return this._config.group||!1}get _volume_stateless(){return this._config.volume_stateless||!1}get _toggle_power(){return this._config.toggle_power||!0}render(){if(!this.hass)return I``;const t=this.getMediaPlayerEntities.map((t=>({name:t,id:t})));return I`
      <div class="card-config">
        <div class="overall-config">
          <span class="editor-label">Entity (required)</span>
          <lmp-dropdown
            class="lmp-shortcuts__dropdown"
            @change=${({detail:t})=>this.valueChanged({target:{configValue:"entity",value:t.id}})}
            .items=${t}
            .label=${"Select entity"}
            .selected=${this._config.entity}
          >
          </lmp-dropdown>

          <div class="editor-side-by-side">
            <paper-input
              label="Name"
              .value="${this._config.name}"
              .configValue="${"name"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Icon"
              .value="${this._config.icon}"
              .configValue="${"icon"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Icon Image"
              .value="${this._config.icon_image}"
              .configValue="${"icon_image"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div class="editor-side-by-side">
            <ha-formfield label="Group cards">
              <ha-switch .checked=${this._group} .configValue="${"group"}" @change=${this.valueChanged}></ha-switch>
            </ha-formfield>

            <ha-formfield label="Swap volume slider for buttons">
              <ha-switch
                .checked="${this._volume_stateless}"
                .configValue="${"volume_stateless"}"
                @change=${this.valueChanged}
              ></ha-switch>
            </ha-formfield>

            <ha-formfield label="Toggle power button behavior">
              <ha-switch
                .checked="${this._toggle_power}"
                .configValue="${"toggle_power"}"
                @change=${this.valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="editor-side-by-side">
            <div>
              <span class="editor-label">Artwork</span>
              <lmp-dropdown
                class="lmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"artwork",value:t.id}})}
                .items=${Ie(Ve,!0)}
                .label=${"Default"}
                .selected=${this._config.artwork}
              >
              </lmp-dropdown>
            </div>
            <div>
              <span class="editor-label">Source</span>
              <lmp-dropdown
                class="lmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"source",value:t.id}})}
                .items=${Ie(Le,!0)}
                .label=${"Default"}
                .selected=${this._config.source}
              >
              </lmp-dropdown>
            </div>
            <div>
              <span class="editor-label">Sound mode</span>
              <lmp-dropdown
                class="lmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"sound_mode",value:t.id}})}
                .items=${Ie(Ne,!0)}
                .label=${"Default"}
                .selected=${this._config.sound_mode}
              >
              </lmp-dropdown>
            </div>
          </div>

          <div class="editor-side-by-side">
            <div>
              <span class="editor-label">Info</span>
              <lmp-dropdown
                class="lmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"info",value:t.id}})}
                .items=${Ie(je,!0)}
                .label=${"Default"}
                .selected=${this._config.info}
              >
              </lmp-dropdown>
            </div>

            <div>
              <span class="editor-label">Replace Mute</span>
              <lmp-dropdown
                class="lmp-shortcuts__dropdown"
                @change=${({detail:t})=>this.valueChanged({target:{configValue:"replace_mute",value:t.id}})}
                .items=${Ie(De,!0)}
                .label=${"Default"}
                .selected=${this._config.replace_mute}
              >
              </lmp-dropdown>
            </div>
          </div>

          <div class="editor-side-by-side">
            <paper-input
              label="Volume Step (1-100)"
              .value="${this._config.volume_step}"
              .configValue="${"volume_step"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Max Volume (1-100)"
              .value="${this._config.max_volume}"
              .configValue="${"max_volume"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Min Volume (1-100)"
              .value="${this._config.min_volume}"
              .configValue="${"min_volume"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div class="editor-side-by-side">
            <paper-input
              label="Background"
              .value="${this._config.background}"
              .configValue="${"background"}"
              @value-changed=${this.valueChanged}
            ></paper-input>

            <paper-input
              label="Scale"
              .value="${this._config.scale}"
              .configValue="${"scale"}"
              @value-changed=${this.valueChanged}
            ></paper-input>
          </div>

          <div>
            Settings for Tap actions, TTS, hiding UI elements, idle view, speaker groups and shortcuts can only be
            configured in the code editor
          </div>
        </div>
      </div>
    `}valueChanged(t){if(!this._config||!this.hass)return;const{target:e}=t;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config={...this._config,[e.configValue]:void 0!==e.checked?e.checked:e.value}),((t,e,i={},r={})=>{const o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});o.detail=i,t.dispatchEvent(o)})(this,"config-changed",{config:this._config}))}}customElements.get("lyfes-media-player-editor")||customElements.define("lyfes-media-player-editor",Re);var ze=Object.freeze({__proto__:null,default:Re});
