/*! react-kui v1.0.1 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{299:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(l(6)),a=m(l(5)),u=m(l(4)),r=m(l(3)),d=m(l(2)),i=m(l(342)),o=m(l(319)),c=m(l(320)),f=m(l(1)),s=l(21);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"config",value:function(){s.Loading.config({type:"line",color:"green",height:5})}},{key:"upload",value:function(e){s.Loading.upload(e)}},{key:"start",value:function(e){s.Loading.start(e)}},{key:"loading",value:function(e){var t=this;s.Loading.start(e),setTimeout(function(){t.finish()},3e3)}},{key:"finish",value:function(){s.Loading.finish()}},{key:"error",value:function(){s.Loading.error()}},{key:"render",value:function(){var e=this;return f.default.createElement("div",null,f.default.createElement("h2",null,"LoadingBar 加载进度"),f.default.createElement("h3",null,"用处"),f.default.createElement("p",null,"全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条"),f.default.createElement("h3",null,"在路由中使用"),f.default.createElement("h3",null,"在异步请求中使用"),f.default.createElement(o.default,{title:"模拟请求"},f.default.createElement("div",null,f.default.createElement(s.Button,{onClick:function(){return e.start("line")}},"start"),f.default.createElement(s.Button,{onClick:function(){return e.finish()}},"finish"),f.default.createElement(s.Button,{onClick:function(){return e.error()}},"error"),f.default.createElement(s.Button,{onClick:function(){return e.config()}},"config"),f.default.createElement(s.Button,{onClick:function(){return e.upload(30)}},"upload 30"),f.default.createElement(s.Button,{onClick:function(){return e.upload(80)}},"upload 80")),f.default.createElement("div",null,f.default.createElement("code",null,"start"),"触发开始，",f.default.createElement("code",null,"finish"),"结束，",f.default.createElement("code",null,"upload"),"可以手动更新进度"),f.default.createElement("div",null,i.default.test)),f.default.createElement(o.default,{title:"主题"},f.default.createElement("div",null,f.default.createElement(s.Button,{onClick:function(){return e.loading("flip")}},"flip"),f.default.createElement(s.Button,{onClick:function(){return e.loading("bounce")}},"bounce"),f.default.createElement(s.Button,{onClick:function(){return e.loading("zoom")}},"zoom"),f.default.createElement(s.Button,{onClick:function(){return e.loading("rotate")}},"rotate")),f.default.createElement("div",null,"用",f.default.createElement("code",null,"Loading"),"来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到",f.default.createElement("code",null,"finish")," 才可以进行第二操作。"),f.default.createElement("div",null,i.default.theme)),f.default.createElement("h3",null,"API"),f.default.createElement("p",null,"通过直接调用以下方法来使用组件："),f.default.createElement(c.default,{lang:"js"},"this.$Loading.start() this.$Loading.finish() this.$Loading.error() this.$Loading.update(percent)"),f.default.createElement("p",null,"另外提供了全局配置和全局销毁的方法："),f.default.createElement(c.default,{lang:"js"},"this.$Loading.config(options) this.$Loading.destroy()"),f.default.createElement("div",{className:"table-border"},f.default.createElement("table",null,f.default.createElement("tbody",null,f.default.createElement("tr",null,f.default.createElement("th",null,"属性"),f.default.createElement("th",null,"说明"),f.default.createElement("th",null,"类型"),f.default.createElement("th",null,"默认值")),f.default.createElement("tr",null,f.default.createElement("td",null,"type"),f.default.createElement("td",null,"进度的主题，可取值为 line，zoom，flip，bounce，rotate"),f.default.createElement("td",null,"String"),f.default.createElement("td",null,"line")),f.default.createElement("tr",null,f.default.createElement("td",null,"loading-text"),f.default.createElement("td",null,"加载中的文字提示，type为line无效"),f.default.createElement("td",null,"String"),f.default.createElement("td",null,"空")),f.default.createElement("tr",null,f.default.createElement("td",null,"color"),f.default.createElement("td",null,"进度条的颜色，type为line 有效"),f.default.createElement("td",null,"String"),f.default.createElement("td",null,"默认为主题颜色")),f.default.createElement("tr",null,f.default.createElement("td",null,"height"),f.default.createElement("td",null,"进度条的高度，type为line 有效 "),f.default.createElement("td",null,"String，Number"),f.default.createElement("td",null,"2")),f.default.createElement("tr",null,f.default.createElement("td",null,"start"),f.default.createElement("td",null,"开始从 0 显示进度条，并自动加载进度，type为line有效，可传参[type,loading-text] "),f.default.createElement("td",null,"Function"),f.default.createElement("td",null,"-")),f.default.createElement("tr",null,f.default.createElement("td",null,"finish"),f.default.createElement("td",null,"结束进度条，自动补全剩余进度，type为line有效"),f.default.createElement("td",null,"Function"),f.default.createElement("td",null,"-")),f.default.createElement("tr",null,f.default.createElement("td",null,"error"),f.default.createElement("td",null,"以错误的类型结束进度条，自动补全剩余进度 ，type为line有效"),f.default.createElement("td",null,"Function"),f.default.createElement("td",null,"-")),f.default.createElement("tr",null,f.default.createElement("td",null,"update"),f.default.createElement("td",null,"精确加载到指定的进度，type为line有效"),f.default.createElement("td",null,"Function"),f.default.createElement("td",null,"-"))))))}}]),t}(f.default.Component);t.default=h},318:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(l(12)),a=h(l(6)),u=h(l(5)),r=h(l(4)),d=h(l(3)),i=h(l(2)),o=h(l(1)),c=h(l(320)),f=l(21),s=l(7),m=h(l(53));function h(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,u.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,i.default)(t,e),(0,r.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return o.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},o.default.createElement("div",{className:"k-demo-main",ref:"demo"},o.default.createElement("div",{className:"k-content"},this.props.children[0]),o.default.createElement("div",{className:"k-desc"},o.default.createElement("a",{className:"k-desc-title"},this.props.title),o.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),o.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},o.default.createElement(f.Icon,{type:this.icons()})))),o.default.createElement("div",{className:"k-demo-line"}),o.default.createElement(m.default,{show:this.state.expand},o.default.createElement(c.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(s.Kui);t.default=E,E.propTypes={layout:s.PropTypes.string,title:s.PropTypes.string,lang:s.PropTypes.string},E.defaultProps={layout:"vertical"}},319:function(e,t,l){"use strict";l.r(t);var n=l(318),a=l.n(n);t.default=a.a},342:function(e,t,l){"use strict";l.r(t);let n={useInRouter:"import { Input } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n        \n    </div>\n  )\n}",useInAjax:"import { Input } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n        \n    </div>\n  )\n}",test:"import { Input } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n        \n    </div>\n  )\n}",theme:"import { Input } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n        \n    </div>\n  )\n}"};t.default=n}}]);