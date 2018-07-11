/*! react-kui v1.0.3 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{302:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(l(6)),a=m(l(5)),u=m(l(4)),r=m(l(3)),s=m(l(2)),o=m(l(1)),d=m(l(325)),c=m(l(326)),i=m(l(348)),f=l(21);function m(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"config",value:function(){f.Message.config({type:"info",duration:0,closable:!0,content:"手动关闭",onClose:function(){alert("callback")}})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Message 全局提示"),o.default.createElement("h3",null,"代码示例"),o.default.createElement(d.default,{title:"基础用法"},o.default.createElement("div",null,o.default.createElement(f.Button,{onClick:function(){return f.Message.info("普通提示")},type:"primary"},"普通提示 ")),o.default.createElement("div",null,o.default.createElement("code",null,"Message"),"的基本用法"),o.default.createElement("div",null,i.default.base)),o.default.createElement(d.default,{title:"提示类型"},o.default.createElement("div",null,o.default.createElement(f.Button,{onClick:function(){return f.Message.warning("警告提示")},type:"warning"},"警告提示 "),o.default.createElement(f.Button,{onClick:function(){return f.Message.success("成功提示")},type:"success"},"成功提示 "),o.default.createElement(f.Button,{onClick:function(){return f.Message.error("错误提示")},type:"danger"},"错误提示 ")),o.default.createElement("div",null,"通过",o.default.createElement("code",null,"type"),"来设置提示类型"),o.default.createElement("div",null,i.default.type)),o.default.createElement(d.default,{title:"自定义时长"},o.default.createElement("div",null,o.default.createElement(f.Button,{onClick:function(){return f.Message.success("10秒后关闭的",10)},type:"success"},"10秒后关闭"),o.default.createElement(f.Button,{onClick:function(){return f.Message.error("5秒后关闭的",5)},type:"primary"},"5秒后关闭"),o.default.createElement(f.Button,{onClick:this.config,type:"primary"},"手动关闭")),o.default.createElement("div",null,"可以自定义配置，其中",o.default.createElement("code",null,"duration"),"来控制自动关闭时长"),o.default.createElement("div",null,i.default.time)),o.default.createElement("h3",null,"API"),o.default.createElement(f.Alert,null,"组件提供了一些静态方法，使用方式如下"),o.default.createElement(c.default,{lang:"js"},i.default.static),o.default.createElement(f.Alert,null,"另外提供了全局配置和全局销毁的方法："),o.default.createElement(c.default,{lang:"js"},i.default.destory),o.default.createElement("p",null,"参数 options 为对象，具体说明如下："),o.default.createElement("div",{className:"table-border"},o.default.createElement("table",null,o.default.createElement("tbody",null,o.default.createElement("tr",null,o.default.createElement("th",null,"属性"),o.default.createElement("th",null,"说明"),o.default.createElement("th",null,"类型"),o.default.createElement("th",null,"默认值")),o.default.createElement("tr",null,o.default.createElement("td",null,"type"),o.default.createElement("td",null,"提示类型，提供 info、success、error、warning四种可选类型"),o.default.createElement("td",null,"String"),o.default.createElement("td",null,"info")),o.default.createElement("tr",null,o.default.createElement("td",null,"content"),o.default.createElement("td",null,"提示内容"),o.default.createElement("td",null,"String"),o.default.createElement("td",null,"-")),o.default.createElement("tr",null,o.default.createElement("td",null,"duration"),o.default.createElement("td",null,"自动关闭的延时，单位秒,0为 不自动关闭"),o.default.createElement("td",null,"Number"),o.default.createElement("td",null,"3")),o.default.createElement("tr",null,o.default.createElement("td",null,"closable"),o.default.createElement("td",null,"是否可手动关闭"),o.default.createElement("td",null,"Boolean"),o.default.createElement("td",null,"false")),o.default.createElement("tr",null,o.default.createElement("td",null,"onClose"),o.default.createElement("td",null,"关闭时的回调"),o.default.createElement("td",null,"Function"),o.default.createElement("td",null,"-"))))))}}]),t}(o.default.Component);t.default=p},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(l(12)),a=p(l(6)),u=p(l(5)),r=p(l(4)),s=p(l(3)),o=p(l(2)),d=p(l(1)),c=p(l(326)),i=l(21),f=l(7),m=p(l(54));function p(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,u.default)(this,t);var l=(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,o.default)(t,e),(0,r.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return d.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},d.default.createElement("div",{className:"k-demo-main",ref:"demo"},d.default.createElement("div",{className:"k-content"},this.props.children[0]),d.default.createElement("div",{className:"k-desc"},d.default.createElement("a",{className:"k-desc-title"},this.props.title),d.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),d.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},d.default.createElement(i.Icon,{type:this.icons()})))),d.default.createElement("div",{className:"k-demo-line"}),d.default.createElement(m.default,{show:this.state.expand},d.default.createElement(c.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=E,E.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},E.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var n=l(324),a=l.n(n);t.default=a.a},348:function(e,t,l){"use strict";l.r(t);let n={base:'import { Message } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <Button onClick={()=>Message.info("普通提示")} type="primary">普通提示 </Button>\n  )\n}',type:'import { Message } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={()=>Message.warning("警告提示")} type="warning">警告提示 </Button>\n      <Button onClick={()=>Message.success("成功提示")} type="success">成功提示 </Button>\n      <Button onClick={()=>Message.error("错误提示")} type="danger">错误提示 </Button>  \n    </div>\n  )\n}',time:'import { Message } from \'react-kui\';\nconfig() {\n  Message.config({\n    type: "info",\n    duration: 0,\n    closable: true,\n    content: "手动关闭",\n    onClose: () => { alert(\'callback\') }\n  });\n}\nReactDOM.render() {\n  return (\n    <div>\n      <Button onClick={()=>Message.success("10秒后关闭的", 10)} type="success">10秒后关闭</Button>\n      <Button onClick={()=>Message.error("5秒后关闭的", 5)} type="primary">5秒后关闭</Button>\n      <Button onClick={this.config} type="primary">手动关闭</Button>     \n    </div>\n  )\n}',static:"Message.info(content, [duration], onClose)\nMessage.success(content, [duration], onClose)\nMessage.warning(content, [duration], onClose)\nMessage.error(content, [duration], onClose)",destory:"Message.config(options)\nMessage.destroy()"};t.default=n}}]);