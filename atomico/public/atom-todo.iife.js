var atomTodo=function(t,e){"use strict";function o(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var i=":host{display:block}form{border-bottom:1px solid #ededed}form,input{font-size:24px;position:relative}input{background:rgba(0,0,0,.003);border:1px solid #ccc;box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;color:inherit;font-family:inherit;font-weight:inherit;line-height:1.4em;margin:0;outline:none;padding:6px;width:100%}";o(i);var n=':host,li{display:block}li{border-bottom:1px solid #ededed;font-size:24px;position:relative}li input{-webkit-appearance:none;appearance:none;border:none;bottom:0;box-shadow:none;height:auto;margin:auto 0;padding:0;position:absolute;text-align:center;top:9px;width:40px}li input:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}li input:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}li label{display:block;line-height:1.2;margin-left:45px;padding:15px 60px 15px 15px;transition:color .4s;white-space:pre;word-break:break-word}li.completed label{color:#d9d9d9;text-decoration:line-through}li button,li input[type=checkbox]{outline:none}li button{-moz-font-smoothing:antialiased;-webkit-appearance:none;-webkit-font-smoothing:antialiased;appearance:none;background:none;border:0;bottom:0;color:inherit;color:#cc9a9a;font-family:inherit;font-size:100%;font-size:30px;font-smoothing:antialiased;font-weight:inherit;height:40px;margin:0;margin:auto 0 11px;padding:0;position:absolute;right:10px;top:0;transition:color .2s ease-out;vertical-align:baseline;width:40px}li button:hover{color:#af5b5e}';o(n);var a=":host{display:block}h1{color:rgba(175,47,47,.15);font-size:70px;font-weight:100;line-height:70px;text-align:center}section{background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);margin:30px 0 40px;position:relative}#list-container{border-top:1px solid #e6e6e6;list-style:none;margin:0;padding:0}";o(a);class r extends e.Element{constructor(){super(),this.attachShadow({mode:"open"}),this.state.list=[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}render(){var t=this,o=this.state.list;return void 0===o&&(o=[]),e.h("div",null,e.h("h1",null,"Todos Atomico"),e.h("section",null,e.h("style",null,a),e.h("atom-todo-input",{placeholder:"What needs to be done?",create:function(e){var i=e.detail;t.setState({list:o.concat({text:i.text,checked:!1})})}}),e.h("div",{id:"list-container"},o.map(function(i,n){var a=i.text,r=i.checked;return e.h("atom-todo-item",{text:a,checked:r,remove:function(){t.setState({list:o.filter(function(t,e){return e!==n})})},toggle:function(){t.setState({list:o.map(function(t,e){return e===n?Object.assign({},t,{checked:!t.checked}):t})})}})}))))}}return customElements.define("atom-todo-item",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["text","checked"]}render(){var t=this;return e.h("li",{class:this.props.checked?"completed":""},e.h("style",null,n),e.h("input",{type:"checkbox",change:function(){t.dispatch("toggle")},checked:this.props.checked}),e.h("label",null,this.props.text),e.h("button",{click:function(){t.dispatch("remove")}},"x"))}}),customElements.define("atom-todo-input",class extends e.Element{constructor(){super(),this.attachShadow({mode:"open"})}static get props(){return["placeholder"]}render(){var t=this;return e.h("form",{submit:function(e){e.preventDefault(),t.dispatch("create",{text:e.target.task.value}),e.target.reset()}},e.h("style",null,i),e.h("input",{name:"task",type:"text",placeholder:this.props.placeholder}))}}),customElements.define("atom-todo",r),t.TAG_TODO="atom-todo",t.TAG_ITEM="atom-todo-item",t.TAG_INPUT="atom-todo-input",t.default=r,t}({},atomico);
//# sourceMappingURL=atom-todo.iife.js.map
