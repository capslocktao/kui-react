/*! react-kui v1.0.3 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(l(6)),n=m(l(5)),u=m(l(4)),d=m(l(3)),r=m(l(2)),c=m(l(1)),i=m(l(325)),o=m(l(351)),f=l(21);function m(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,n.default)(this,t),(0,d.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,u.default)(t,[{key:"iconClick",value:function(){f.Message.info("点击图标事件")}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h2",null,"Input 输入框"),c.default.createElement("h3",null,"代码示例"),c.default.createElement(f.Row,{gutter:"8"},c.default.createElement(f.Col,{span:"12"},c.default.createElement(i.default,{title:"基础用法",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(f.Input,{width:"200",placeholder:"请输入内容..."})," ",c.default.createElement("br",null),c.default.createElement(f.Input,{width:"200",placeholder:"disabled...",disabled:!0})),c.default.createElement("div",null,"基础用法"),c.default.createElement("div",null,o.default.base)),c.default.createElement(i.default,{title:"可清除",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(f.Input,{width:"200",placeholder:"请输入内容...",clearable:!0})),c.default.createElement("div",null,"通过设置",c.default.createElement("code",null,"clearble"),"属性可控制是否显示清空按钮"),c.default.createElement("div",null,o.default.clearable)),c.default.createElement(i.default,{title:"带图标",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(f.Input,{width:"200",placeholder:"请输入内容...",icon:"ios-person",onIconClick:this.iconClick}),c.default.createElement("br",null),c.default.createElement(f.Input,{width:"200",placeholder:"请输入内容...",icon:"ios-search",onIconClick:this.iconClick})),c.default.createElement("div",null,"通过设置",c.default.createElement("code",null,"icon"),"属性，可设置按钮图标，",c.default.createElement("code",null,"iconClick"),"可触发图标点击事件"),c.default.createElement("div",null,o.default.withIcon))),c.default.createElement(f.Col,{span:"12"},c.default.createElement(i.default,{title:"尺寸",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(f.Input,{width:"200",placeholder:"请输入内容..."}),c.default.createElement("br",null),c.default.createElement(f.Input,{width:"200",mini:!0,placeholder:"mini...",icon:"ios-person",onIconClick:this.iconClick})),c.default.createElement("div",null,"通过设置",c.default.createElement("code",null,"mini"),"可设置组件大小，",c.default.createElement("code",null,"width"),"属性可控制组件宽度"),c.default.createElement("div",null,o.default.size)),c.default.createElement(i.default,{title:"文本域",layout:"vertical"},c.default.createElement("div",null,c.default.createElement(f.Input,{width:"300",type:"textarea",rows:"4",placeholder:"请输入内容..."})," ",c.default.createElement("br",null),c.default.createElement(f.Input,{width:"300",type:"textarea",rows:"1",placeholder:"请输入内容..."})),c.default.createElement("div",null,"当",c.default.createElement("code",null,"type"),"属性取值为",c.default.createElement("code",null,"textarea"),"时组件呈现文本玉"),c.default.createElement("div",null,o.default.textArea)))),c.default.createElement("h3",null,"API"),c.default.createElement("div",{className:"table-border"},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("th",null,"属性"),c.default.createElement("th",null,"说明"),c.default.createElement("th",null,"类型"),c.default.createElement("th",null,"默认值")),c.default.createElement("tr",null,c.default.createElement("td",null,"type"),c.default.createElement("td",null,"输入框类型，可选值为 text、password、textarea、url、email、date"),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"text")),c.default.createElement("tr",null,c.default.createElement("td",null,"width"),c.default.createElement("td",null,"组件的宽度"),c.default.createElement("td",null,"String,Number"),c.default.createElement("td",null,"200")),c.default.createElement("tr",null,c.default.createElement("td",null,"value "),c.default.createElement("td",null,"组件取值 "),c.default.createElement("td",null,"String | Number"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"icon "),c.default.createElement("td",null,"输入框尾部图标，仅在 text 类型下有效 "),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"placeholder"),c.default.createElement("td",null,"占位文本 "),c.default.createElement("td",null,"String"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"disabled"),c.default.createElement("td",null,"设置输入框为禁用状态"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"readonly"),c.default.createElement("td",null,"设置输入框为只读"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"maxlength"),c.default.createElement("td",null,"最大输入长度"),c.default.createElement("td",null,"Number"),c.default.createElement("td",null,"-")),c.default.createElement("tr",null,c.default.createElement("td",null,"rows"),c.default.createElement("td",null,"文本域默认行数，仅在 textarea 类型下有效"),c.default.createElement("td",null,"Number"),c.default.createElement("td",null,"2")),c.default.createElement("tr",null,c.default.createElement("td",null,"number"),c.default.createElement("td",null,"将用户的输入转换为 Number 类型"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"autoComplete"),c.default.createElement("td",null,"原生的自动完成功能，可选值为 off 和 on"),c.default.createElement("td",null,"Boolean"),c.default.createElement("td",null,"false")),c.default.createElement("tr",null,c.default.createElement("td",null,"iconClick"),c.default.createElement("td",null,"icon的点击事件"),c.default.createElement("td",null,"Function"),c.default.createElement("td",null,"-"))))))}}]),t}(c.default.Component);t.default=s},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(l(12)),n=E(l(6)),u=E(l(5)),d=E(l(4)),r=E(l(3)),c=E(l(2)),i=E(l(1)),o=E(l(326)),f=l(21),m=l(7),s=E(l(54));function E(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,u.default)(this,t);var l=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,c.default)(t,e),(0,d.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return i.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},i.default.createElement("div",{className:"k-demo-main",ref:"demo"},i.default.createElement("div",{className:"k-content"},this.props.children[0]),i.default.createElement("div",{className:"k-desc"},i.default.createElement("a",{className:"k-desc-title"},this.props.title),i.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),i.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},i.default.createElement(f.Icon,{type:this.icons()})))),i.default.createElement("div",{className:"k-demo-line"}),i.default.createElement(s.default,{show:this.state.expand},i.default.createElement(o.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(m.Kui);t.default=p,p.propTypes={layout:m.PropTypes.string,title:m.PropTypes.string,lang:m.PropTypes.string},p.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var a=l(324),n=l.n(a);t.default=n.a},351:function(e,t,l){"use strict";l.r(t);let a={base:'import { Input } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n       <Input placeholder="请输入内容..."></Input>\n       <Input width="200" placeholder="disabled..." disabled />\n    </div>\n  )\n}',clearable:"import { Input } from 'react-kui';\nReactDOM.render() {\n  return (\n    <div>\n      <Input placeholder=\"请输入内容...\" clearable/>\n    </div>\n  )\n}",withIcon:'import { Input } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Input placeholder="请输入内容..." icon="ios-person" />\n      <Input placeholder="请输入内容..." icon="ios-search" />\n    </div>\n  )\n}',size:'import { Input } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Input placeholder="请输入内容..."/>\n      <Input mini placeholder="请输入内容..." icon="ios-person"/>\n    </div>\n  )\n}',textArea:'import { Input } from \'react-kui\';\nReactDOM.render() {\n  return (\n    <div>\n      <Input type="textarea" rows="4" placeholder="请输入内容..." /> <br />\n      <Input type="textarea" rows="1" placeholder="请输入内容..." />\n    </div>\n  )\n}\n'};t.default=a}}]);