/*! react-kui v1.0.3 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{292:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(l(6)),a=f(l(5)),r=f(l(4)),u=f(l(3)),d=f(l(2)),i=f(l(1)),c=f(l(337)),s=f(l(325)),o=l(21);function f(e){return e&&e.__esModule?e:{default:e}}var m=o.Steps.Step,p=function(e){function t(e){(0,a.default)(this,t);var l=(0,u.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return l.state={code:c.default,current:0},l}return(0,d.default)(t,e),(0,r.default)(t,[{key:"setStep",value:function(e){var t=this.state.current;t="next"==e?t>=3?3:t+1:t<=0?0:t-1,this.setState({current:t})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"Steps 步骤条"),i.default.createElement("p",null,"拆分某项流程的步骤，引导用户按流程完成任务。"),i.default.createElement("h3",null,"代码示例"),i.default.createElement(s.default,{title:"基本",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:"1"},i.default.createElement(m,{title:"已完成",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"进行中",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"待进行",description:"这里是步骤的描述信息"}))),i.default.createElement("div",null,"简单的步骤条。"),i.default.createElement("div",null,c.default.base)),i.default.createElement(s.default,{title:"迷你版",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:"1",mini:!0},i.default.createElement(m,{title:"已完成"}),i.default.createElement(m,{title:"进行中"}),i.default.createElement(m,{title:"待进行"}))),i.default.createElement("div",null,"迷你版的步骤条，通过设置",i.default.createElement("code",null,"mini")," 启用."),i.default.createElement("div",null,c.default.mini)),i.default.createElement(s.default,{title:"自定义图标",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:"1"},i.default.createElement(m,{title:"登陆",icon:"unlocked"}),i.default.createElement(m,{title:"绑定手机",icon:"iphone"}),i.default.createElement(m,{title:"绑定邮箱",icon:"email"}))),i.default.createElement("div",null,"可以启用自定义图标。自定义",i.default.createElement("code",null,"icon")),i.default.createElement("div",null,c.default.icon)),i.default.createElement(s.default,{title:"步骤切换",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:this.state.current},i.default.createElement(m,{title:"步骤1"}),i.default.createElement(m,{title:"步骤2"}),i.default.createElement(m,{title:"步骤3"}),i.default.createElement(m,{title:"步骤4"})),i.default.createElement("br",null),i.default.createElement(o.Button,{onClick:this.setStep.bind(this,"next")},"下一步"),i.default.createElement(o.Button,{onClick:this.setStep.bind(this,"prev")},"上一步")),i.default.createElement("div",null,"通常配合内容及按钮使用，表示一个流程的处理进度。"),i.default.createElement("div",null,c.default.test)),i.default.createElement(s.default,{title:"步骤运行错误",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:"1",status:"error"},i.default.createElement(m,{title:"步骤1",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤2",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤3",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤4",description:"这里是步骤的描述信息"}))),i.default.createElement("div",null,"使用",i.default.createElement("code",null,"Steps")," 的",i.default.createElement("code",null,"status")," 属性来指定当前步骤的状态。"),i.default.createElement("div",null,c.default.status)),i.default.createElement(s.default,{title:"垂直方向",layout:"vertical"},i.default.createElement("div",null,i.default.createElement(o.Steps,{current:"1",vertical:!0},i.default.createElement(m,{title:"步骤1",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤2",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤3",description:"这里是步骤的描述信息"}),i.default.createElement(m,{title:"步骤4",description:"这里是步骤的描述信息"}))),i.default.createElement("div",null,"简单的竖直方向的小型步骤条。"),i.default.createElement("div",null,c.default.vertical)),i.default.createElement("h3",null,"Steps API"),i.default.createElement("div",{className:"table-border"},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"属性"),i.default.createElement("th",null,"说明"),i.default.createElement("th",null,"类型"),i.default.createElement("th",null,"默认值")),i.default.createElement("tr",null,i.default.createElement("td",null,"current"),i.default.createElement("td",null,"指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态"),i.default.createElement("td",null,"String,Number"),i.default.createElement("td",null,"0")),i.default.createElement("tr",null,i.default.createElement("td",null,"vertical"),i.default.createElement("td",null,"是否垂直显示，默认水平显示 "),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"mini"),i.default.createElement("td",null,"是否显示迷你模式 "),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"status"),i.default.createElement("td",null,"指定当前步骤的状态，可选 wait process finish error"),i.default.createElement("td",null,"String "),i.default.createElement("td",null,"process"))))),i.default.createElement("h3",null,"Step API"),i.default.createElement("div",{className:"table-border"},i.default.createElement("table",null,i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("th",null,"属性"),i.default.createElement("th",null,"说明"),i.default.createElement("th",null,"类型"),i.default.createElement("th",null,"默认值")),i.default.createElement("tr",null,i.default.createElement("td",null,"title"),i.default.createElement("td",null,"步骤标题"),i.default.createElement("td",null,"String"),i.default.createElement("td",null,"-")),i.default.createElement("tr",null,i.default.createElement("td",null,"description"),i.default.createElement("td",null,"步骤的详情描述，可选 "),i.default.createElement("td",null,"Boolean"),i.default.createElement("td",null,"false")),i.default.createElement("tr",null,i.default.createElement("td",null,"icon"),i.default.createElement("td",null,"步骤图标的类型，可选 "),i.default.createElement("td",null,"String"),i.default.createElement("td",null,"-")),i.default.createElement("tr",null,i.default.createElement("td",null,"status"),i.default.createElement("td",null,"指定当前步骤的状态，可选 wait process finish error"),i.default.createElement("td",null,"String "),i.default.createElement("td",null,"wait"))))))}}]),t}(i.default.Component);t.default=p},324:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(l(12)),a=p(l(6)),r=p(l(5)),u=p(l(4)),d=p(l(3)),i=p(l(2)),c=p(l(1)),s=p(l(326)),o=l(21),f=l(7),m=p(l(54));function p(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){(0,r.default)(this,t);var l=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},l.toggle=l.toggle.bind(l),l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,n.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return c.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},c.default.createElement("div",{className:"k-demo-main",ref:"demo"},c.default.createElement("div",{className:"k-content"},this.props.children[0]),c.default.createElement("div",{className:"k-desc"},c.default.createElement("a",{className:"k-desc-title"},this.props.title),c.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),c.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},c.default.createElement(o.Icon,{type:this.icons()})))),c.default.createElement("div",{className:"k-demo-line"}),c.default.createElement(m.default,{show:this.state.expand},c.default.createElement(s.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=E,E.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},E.defaultProps={layout:"vertical"}},325:function(e,t,l){"use strict";l.r(t);var n=l(324),a=l.n(n);t.default=a.a},337:function(e,t,l){"use strict";l.r(t);let n={base:'\nimport { Steps } from \'react-kui\';\nconst Step = Steps.Step\nReactDOM.render() {\n  return (<Steps current="1">\n  <Step title="已完成" description="这里是步骤的描述信息" />\n  <Step title="进行中" description="这里是步骤的描述信息" />\n  <Step title="待进行" description="这里是步骤的描述信息" />\n</Steps>)\n}',mini:'import { Steps } from \'react-kui\';\nconst Step = Steps.Step\nReactDOM.render() {\n  return (<Steps current="1" mini>\n  <Step title="已完成" />\n  <Step title="进行中" />\n  <Step title="待进行" />\n</Steps>) \n}',icon:'import { Steps } from \'react-kui\';\nconst Step = Steps.Step\nReactDOM.render() {\n  return (<Steps current="1">\n  <Step title="登陆" icon="unlocked" />\n  <Step title="绑定手机" icon="iphone" />\n  <Step title="绑定邮箱" icon="email" />\n</Steps>)\n}',test:"import { Steps } from 'react-kui';\nconst Step = Steps.Step\nconstructor(props) {\n  super(props)\n  this.state = {\n    code: code,\n    current: 0\n  }\n}\nsetStep(t) {\n  let { current } = this.state\n  current = t == 'next' ? (current >= 3 ? 3 : current + 1) : (current <= 0 ? 0 : current - 1)\n  this.setState({ current })\n}\nReactDOM.render() {\n  return (<Steps current={this.state.current}>\n    <Step title=\"步骤1\" />\n    <Step title=\"步骤2\" />\n    <Step title=\"步骤3\" />\n    <Step title=\"步骤4\" />\n  </Steps>\n  <br />\n  <Button onClick={this.setStep.bind(this, 'next')}>下一步</Button>\n  <Button onClick={this.setStep.bind(this, 'prev')}>上一步</Button>) \n}",status:'import { Steps } from \'react-kui\';\nconst Step = Steps.Step\nReactDOM.render() {\n  return (<Steps current="1" status="error">\n    <Step title="步骤1" description="这里是步骤的描述信息" />\n    <Step title="步骤2" description="这里是步骤的描述信息" />\n    <Step title="步骤3" description="这里是步骤的描述信息" />\n    <Step title="步骤4" description="这里是步骤的描述信息" />\n</Steps>) \n}',vertical:'import { Steps } from \'react-kui\';\nconst Step = Steps.Step\nReactDOM.render() {\n  return (<Steps current="1"  vertical>\n    <Step title="步骤1" description="这里是步骤的描述信息" />\n    <Step title="步骤2" description="这里是步骤的描述信息" />\n    <Step title="步骤3" description="这里是步骤的描述信息" />\n    <Step title="步骤4" description="这里是步骤的描述信息" />\n</Steps>) \n}'};t.default=n}}]);