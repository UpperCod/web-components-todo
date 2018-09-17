define(["exports","atomico/dist/atomico.umd.js"],function(t,e){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n,r,i=(function(t,e){!function(t){var e="Atomico",n="elementMount",r="elementUnmount",i="elementReceiveProps";function o(t,e){for(var n={},r=0;r<t.length;r++){var i=t[r],o=e instanceof HTMLElement?e.getAttribute(i):e[i];n[i.replace(/-+([\w])/g,function(t,e){return e.toUpperCase()})]=o}return n}function s(t){return t.shadowRoot||t}function a(t,e){s(t).removeChild(e)}function c(t,e){s(t).appendChild(e)}function d(t,e,n){s(t).replaceChild(e,n)}function l(t,e,n){this.tag=t,this.props=e||{},this.children=n||[]}function h(t){return"object"==typeof t&&11!==t.nodeType}function p(t,e){void 0===e&&(e=[]);for(var n=0;n<t.length;n++){var r=t[n];Array.isArray(r)?p(r,e):e.push("object"==typeof(i=r)&&i instanceof l?r:h(r)?new l(r,{},""):new l("",{},r||""))}var i;return e}function u(t,e,n,r,o){for(var s=Object.keys(e).concat(Object.keys(n)),a=0;a<s.length;a++){var c=s[a];if(e[c]!==n[c]){if(o&&t._props.indexOf(c)>-1){o[c]=n[c];continue}if("function"==typeof n[c]||"function"==typeof e[c])e[c]&&t.removeEventListener(c,e[c]),t.addEventListener(c,n[c]);else if(c in n)if(c in t&&!r||r&&"style"===c)if("style"===c)if("object"==typeof n[c])for(var d in n[c])t.style[d]=n[c][d];else t.style.cssText=n[c];else t[c]=n[c];else{if(r&&"xmlns"===c)continue;r?t.setAttributeNS(null,c,n[c]):t.setAttribute(c,n[c])}else t.removeAttribute(c)}}o&&t.dispatch(i,o)}function f(t,e){return"slot"===t.tag&&(t.tag=e.slots[t.props.name]||""),t}t.h=function(t,e){for(var n=arguments,r=[],i=arguments.length-2;i-- >0;)r[i]=n[i+2];return new l(t,e,p(r))},t.Element=class extends HTMLElement{constructor(){for(super(),this[e]=!0,this.state={},this.slots={},this._props=this.constructor.props||[],this._render=[],this.props=o(this._props,this),this.props.children=[],this.fragment=document.createDocumentFragment();this.firstChild;){var t=this.firstChild,n=t.getAttribute&&t.getAttribute("slot");n&&(this.slots[n]=t),c(this.fragment,t),this.props.children.push(t)}this.livecycle()}static get observedAttributes(){return this.props||[]}livecycle(){var t=this,e=!0;this.listeners=[n,r,i].map(function(r){var o=function(o){o.type===r&&(r===n&&(e=!1),e||(t[r]&&t[r](o),o.defaultPrevented||(r===i&&(t.props=Object.assign({},t.props,o.detail)),t.setState({}))))};return t.addEventListener(r,o),function(){return t.removeEventListener(r,o)}})}connectedCallback(){this.dispatch(n)}disconnectedCallback(){this.dispatch(r),this.listeners.forEach(function(t){return t()})}attributeChangedCallback(t,e,n){var r;e!==n&&this.dispatch(i,o([t],((r={})[t]=n,r)))}dispatch(t,e){this.dispatchEvent(new CustomEvent(t,{cancelable:!0,detail:e}))}setState(t){if(t){this.state=Object.assign({},this.state,t);var n=p([this.render()]);!function t(n,r,i,o,s){void 0===o&&(o=n);for(var p=n.childNodes||[],m=Math.max(r.length,i.length),g=0;g<m;g++){var v=r[g]||new l,x=i[g],b=p[g];if(x){x=f(x,o),v=f(v,o);var y=b,w=h(x.tag);if(s=s||"svg"===x.tag,v.tag!==x.tag)if(w)y=x.tag,b?d(n,y,b):c(n,y);else if(x.tag)if(y=s?document.createElementNS("http://www.w3.org/2000/svg",x.tag):document.createElement(x.tag),b){if(d(n,y,b),!y[e])for(;b.firstChild;)c(y,b.firstChild)}else c(n,y);else y=document.createTextNode(""),v.tag?d(n,y,b):c(n,y);w||"#text"!==y.nodeName?(u(y,v.props,x.props,s,y[e]&&{children:x.children.map(function(t){return t.tag?t:t.children})}),w||!y||y[e]||t(y,v.children,x.children,o,s)):v.children!==x.children&&(y.textContent=x.children)}else b&&a(n,b)}}(s(this),this._render,n),this._render=n}}render(){}},Object.defineProperty(t,"__esModule",{value:!0})}(e)}(n={exports:{}},n.exports),n.exports);function o(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(r=i)&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")&&r.default;var s="input{background:rgba(0,0,0,.003);border:1px solid #ccc;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;color:inherit;font-size:24px;padding:6px;width:100%}";o(s);var a='input{-webkit-appearance:none;appearance:none;border:none;outline:none;padding:.2rem .5rem;text-align:center}input:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}input:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-0 0 100 100"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}input:checked~.text{color:#d9d9d9;text-decoration:line-through}.group{align-items:center;display:flex}.text{flex:0%;font-size:24px;padding:1rem;text-align:left}button{background:none;border:0;color:#cc9a9a;font-size:30px;margin-right:1rem}';o(a);var c=":host{box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);display:block;width:100%}.group{background:#fff}";o(c);class d extends e.Element{constructor(){super(),this.attachShadow({mode:"open"}),this.state.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}render(){var t=this,n=this.state.list;return void 0===n&&(n=[]),e.h("div",{class:"group"},e.h("style",null,c),e.h("atom-todo-input",{placeholder:"What needs to be done?",create:function(e){var r=e.detail;t.setState({list:n.concat({text:r.text,checked:!1})})}}),e.h("div",null,n.map(function(r,i){var o=r.text,s=r.checked;return e.h("atom-todo-item",{text:o,checked:s,remove:function(){t.setState({list:n.filter(function(t,e){return e!==i})})},toggle:function(){t.setState({list:n.map(function(t,e){return e===i?Object.assign({},t,{checked:!t.checked}):t})})}})})))}}customElements.define("atom-todo-item",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["text","checked"]}render(){var t=this;return e.h("div",{class:"group"},e.h("style",null,a),e.h("input",{type:"checkbox",change:function(){t.dispatch("toggle")},checked:this.props.checked}),e.h("div",{class:"text"},this.props.text),e.h("button",{click:function(){t.dispatch("remove")}},"x"))}}),customElements.define("atom-todo-input",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["placeholder"]}render(){var t=this;return e.h("form",{submit:function(e){e.preventDefault(),t.dispatch("create",{text:e.target.task.value}),e.target.reset()}},e.h("style",null,s),e.h("input",{name:"task",type:"text",placeholder:this.props.placeholder}))}}),customElements.define("atom-todo",d),t.TAG_TODO="atom-todo",t.TAG_ITEM="atom-todo-item",t.TAG_INPUT="atom-todo-input",t.default=d,Object.defineProperty(t,"__esModule",{value:!0})});
