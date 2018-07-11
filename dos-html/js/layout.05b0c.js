/*! react-kui v1.0.3 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(6)),l=s(n(5)),u=s(n(4)),r=s(n(3)),o=s(n(2)),d=s(n(1)),m=n(7),c=s(n(350)),i=s(n(325)),f=n(21);function s(e){return e&&e.__esModule?e:{default:e}}var E=f.Layout.Header,p=f.Layout.Footer,h=f.Layout.Sider,y=f.Layout.Content,M=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("h2",null,"Layout 布局"),d.default.createElement("p",null,"协助进行页面级整体布局。"),d.default.createElement("h3",null,"设计规则"),d.default.createElement("h4",null,"尺寸"),d.default.createElement("p",null,"一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。"),d.default.createElement("ul",{className:"k-item-list"},d.default.createElement("li",null,"顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。"),d.default.createElement("li",null,"顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。"),d.default.createElement("li",null,"顶部导航高度的范围计算公式为：48+8n。"),d.default.createElement("li",null,"侧边导航宽度的范围计算公式：200+8n。")),d.default.createElement("h4",null,"交互"),d.default.createElement("ul",{className:"k-item-list"},d.default.createElement("li",null,"一级导航和末级的导航需要在可视化的层面被强调出来；"),d.default.createElement("li",null,"当前项应该在呈现上优先级最高；"),d.default.createElement("li",null,"当导航收起的时候，当前项的样式自动赋予给它的上一个层级；"),d.default.createElement("li",null,"左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。")),d.default.createElement("h4",null,"视觉"),d.default.createElement("p",null,"导航样式上需要根据信息层级合理的选择样式："),d.default.createElement("ul",{className:"k-item-list"},d.default.createElement("li",null,d.default.createElement("strong",null,"大色块强调"),d.default.createElement("p",null,"建议用于底色为深色系时，当前页面父级的导航项。")),d.default.createElement("li",null,d.default.createElement("strong",null,"高亮火柴棍"),d.default.createElement("p",null,"当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。")),d.default.createElement("li",null,d.default.createElement("strong",null,"字体高亮变色"),d.default.createElement("p",null,"从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。")),d.default.createElement("li",null,d.default.createElement("strong",null,"字体放大"),d.default.createElement("p",null,"12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。"))),d.default.createElement("h3",null,"组件概述"),d.default.createElement("ul",{className:"k-item-list"},d.default.createElement("li",null,d.default.createElement("code",null,"Layout"),"：布局容器，其下可嵌套",d.default.createElement("code",null,"Header"),d.default.createElement("code",null,"Sider"),d.default.createElement("code",null,"Content"),d.default.createElement("code",null,"Footer"),"或",d.default.createElement("code",null,"Layout")," 本身，可以放在任何父容器中。"),d.default.createElement("li",null,d.default.createElement("code",null,"Header"),"：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在",d.default.createElement("code",null,"Layout")," 中。"),d.default.createElement("li",null,d.default.createElement("code",null,"Sider"),"：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在",d.default.createElement("code",null,"Layout")," 中。"),d.default.createElement("li",null,d.default.createElement("code",null,"Content"),"：内容部分，自带默认样式，其下可嵌套任何元素，只能放在",d.default.createElement("code",null,"Layout")," 中。"),d.default.createElement("li",null,d.default.createElement("code",null,"Footer"),"：底部布局，自带默认样式，其下可嵌套任何元素，只能放在",d.default.createElement("code",null,"Layout")," 中。")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(f.Alert,null,"功能不多，他就是简单的布局。未采用",d.default.createElement("code",null,"flex")),d.default.createElement("h3",null,"代码示例"),d.default.createElement(i.default,{title:"典型布局",layout:"vertical"},d.default.createElement("div",{slot:"content"},d.default.createElement(f.Layout,{className:"demo-k-layout"},d.default.createElement(E,null,"Header"),d.default.createElement(y,null,"Content"),d.default.createElement(p,null,"Footer")),d.default.createElement(f.Layout,{className:"demo-k-layout"},d.default.createElement(E,null,"Header"),d.default.createElement(f.Layout,null,d.default.createElement(h,null,"Sider"),d.default.createElement(y,null,"Content")),d.default.createElement(p,null,"Footer")),d.default.createElement(f.Layout,{className:"demo-k-layout"},d.default.createElement(E,null,"Header"),d.default.createElement(f.Layout,null,d.default.createElement(y,{"pull-left":!0},"Content"),d.default.createElement(h,null,"Sider")),d.default.createElement(p,null,"Footer")),d.default.createElement(f.Layout,{className:"demo-k-layout"},d.default.createElement(h,null,"Sider"),d.default.createElement(f.Layout,null,d.default.createElement(E,null,"Header"),d.default.createElement(y,null,"Content"),d.default.createElement(p,null,"Footer")))),d.default.createElement("div",{slot:"desc"},"典型的页面布局。"),d.default.createElement("div",{slot:"code"},c.default.base)),d.default.createElement(i.default,{title:"上中下布局",layout:"vertical"},d.default.createElement("div",{slot:"content"},d.default.createElement(f.Layout,null,d.default.createElement(E,null,d.default.createElement("div",{style:{width:"120px",height:"31px",position:"relative",zIndex:999,backgroundColor:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),d.default.createElement(f.Menu,{mode:"horizontal",theme:"dark",activeName:"1",style:{lineHeight:"62px"}},d.default.createElement(f.Menu.Item,{name:"1",icon:"home"},"首页"),d.default.createElement(f.Menu.Item,{name:"2",icon:"social-buffer"},"文章"),d.default.createElement(f.Menu.Item,{name:"3",icon:"heart"},"评论"))),d.default.createElement(y,{style:{padding:"0 50px"}},d.default.createElement(f.Breadcrumb,{style:{margin:"20px 0"}},d.default.createElement(f.Breadcrumb.Item,{to:"/",icon:"home"},"Home"),d.default.createElement(f.Breadcrumb.Item,{to:"/breadcrumb",icon:"social-buffer"},"breadcrumb"),d.default.createElement(f.Breadcrumb.Item,{icon:"heart"},"other")),d.default.createElement("div",{style:{border:"1px solid #eee",padding:"20px",height:"200px",backgroundColor:"#fff"}},"Content")),d.default.createElement(p,null,"2009-2018 © KUI"))),d.default.createElement("div",{slot:"desc"},"最基本的『上-中-下』布局。 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。"),d.default.createElement("div",{slot:"code"},c.default.tmb)),d.default.createElement(i.default,{title:"顶部-侧边布局-通栏",layout:"vertical"},d.default.createElement("div",{slot:"content"},d.default.createElement(f.Layout,null,d.default.createElement(E,null,d.default.createElement("div",{style:{width:"120px",height:"31px",position:"relative",zIndex:999,backgroundColor:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),d.default.createElement(f.Menu,{mode:"horizontal",theme:"dark",activeName:"1",style:{lineHeight:"62px"}},d.default.createElement(f.Menu.Item,{name:"1",icon:"home"},"首页"),d.default.createElement(f.Menu.Item,{name:"2",icon:"social-buffer"},"文章"),d.default.createElement(f.Menu.Item,{name:"3",icon:"heart"},"评论"))),d.default.createElement(f.Layout,null,d.default.createElement(h,null,d.default.createElement(f.Menu,{theme:"dark","active-name":"1",width:"auto"},d.default.createElement(f.Menu.SubMenu,{name:"0",title:d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Icon,{type:"ios-paper"}),"我的产品")},d.default.createElement(f.Menu.Item,{name:"0-1"},"我的产品1"),d.default.createElement(f.Menu.Item,{name:"0-2"},"我的产品2"),d.default.createElement(f.Menu.Item,{name:"0-3"},"我的产品3"),d.default.createElement(f.Menu.Item,{name:"0-4"},"我的产品4")),d.default.createElement(f.Menu.SubMenu,{name:"1",title:d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Icon,{type:"social-apple"}),"商品管理")},d.default.createElement(f.Menu.Item,{name:"1-1"},"商品信息"),d.default.createElement(f.Menu.Item,{name:"1-2"},"商品列表"),d.default.createElement(f.Menu.Item,{name:"1-3"},"商品新增"),d.default.createElement(f.Menu.Item,{name:"1-4"},"商品筛选")),d.default.createElement(f.Menu.SubMenu,{name:"2",title:d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Icon,{type:"android-walk"}),"用户管理")},d.default.createElement(f.Menu.Group,{title:"超级管理"},d.default.createElement(f.Menu.Item,{name:"2-1"},"用户信息"),d.default.createElement(f.Menu.Item,{name:"2-2"},"用户列表")),d.default.createElement(f.Menu.Group,{title:"普通管理"},d.default.createElement(f.Menu.Item,{name:"2-3"},"用户新增"),d.default.createElement(f.Menu.Item,{name:"2-4"},"用户筛选"))))),d.default.createElement(y,{style:{padding:"20px 50px"}},d.default.createElement(f.Breadcrumb,{style:{margin:"0 0 20px 0"}},d.default.createElement(f.Breadcrumb.Item,{to:"/",icon:"home"},"Home"),d.default.createElement(f.Breadcrumb.Item,{to:"/breadcrumb",icon:"social-buffer"},"breadcrumb"),d.default.createElement(f.Breadcrumb.Item,{icon:"heart"},"other")),d.default.createElement("div",{style:{border:"1px solid #eee",padding:"20px",height:"200px",background:"#fff"}},"Content"))))),d.default.createElement("div",{slot:"desc"},"同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。 "),d.default.createElement("div",{slot:"code"},c.default.tlc)))}}]),t}(m.Kui);t.default=M},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=E(n(12)),l=E(n(6)),u=E(n(5)),r=E(n(4)),o=E(n(3)),d=E(n(2)),m=E(n(1)),c=E(n(326)),i=n(21),f=n(7),s=E(n(54));function E(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){(0,u.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.state={domHeight:0,demoHeight:0,codeHeight:0,expand:!1},n.toggle=n.toggle.bind(n),n}return(0,d.default)(t,e),(0,r.default)(t,[{key:"icons",value:function(){return this.state.expand?"code-working":"code"}},{key:"classes",value:function(){return this.className(["k-demo",(0,a.default)({},"k-demo-"+this.props.layout,this.props.layout)])}},{key:"demoStyles",value:function(){return"horizontal"==this.props.layout?{height:this.state.expand?this.state.domHeight+"px":this.state.demoHeight+"px"}:{}}},{key:"codeStyles",value:function(){return"horizontal"==this.props.layout?{}:{height:""+this.state.codeHeight}}},{key:"toggle",value:function(){this.state.expand;this.setState({expand:!this.state.expand}),"vertical"==this.props.layout&&this.setState({codeHeight:this.state.expand?"auto":0})}},{key:"setHeight",value:function(){"horizontal"==this.props.layout&&this.setState({domHeight:this.refs.dom.scrollHeight,demoHeight:this.refs.demo.scrollHeight})}},{key:"componentDidMount",value:function(){this.setHeight()}},{key:"render",value:function(){return m.default.createElement("div",{className:this.classes(),style:this.styles(this.demoStyles()),ref:"dom"},m.default.createElement("div",{className:"k-demo-main",ref:"demo"},m.default.createElement("div",{className:"k-content"},this.props.children[0]),m.default.createElement("div",{className:"k-desc"},m.default.createElement("a",{className:"k-desc-title"},this.props.title),m.default.createElement("div",{className:"k-desc-content"},this.props.children[1]),m.default.createElement("a",{className:"k-code-expan",onClick:this.toggle},m.default.createElement(i.Icon,{type:this.icons()})))),m.default.createElement("div",{className:"k-demo-line"}),m.default.createElement(s.default,{show:this.state.expand},m.default.createElement(c.default,{style:this.styles(this.codeStyles()),ref:"code",lang:this.props.lang},this.props.children[2])))}}]),t}(f.Kui);t.default=p,p.propTypes={layout:f.PropTypes.string,title:f.PropTypes.string,lang:f.PropTypes.string},p.defaultProps={layout:"vertical"}},325:function(e,t,n){"use strict";n.r(t);var a=n(324),l=n.n(a);t.default=l.a},350:function(e,t,n){"use strict";n.r(t);let a={base:'\nimport {Layout} from \'react-kui\'\nconst Header = Layout.Header\nconst Footer = Layout.Footer\nconst Sider = Layout.Sider\nconst Content = Layout.Content\n\nReactDOM.render() {\n  return (\n    <div>\n    <Layout className="demo-k-layout">\n      <Header>Header</Header>\n      <Content>Content</Content>\n      <Footer>Footer</Footer>\n    </Layout>\n    <Layout className="demo-k-layout">\n      <Header>Header</Header>\n      <Layout>\n        <Sider>Sider</Sider>\n        <Content>Content</Content>\n      </Layout>\n      <Footer>Footer</Footer>\n    </Layout>\n    <Layout className="demo-k-layout">\n      <Header>Header</Header>\n      <Layout>\n        <Content pull-left>Content</Content>\n        <Sider>Sider</Sider>\n      </Layout>\n      <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className="demo-k-layout">\n      <Sider>Sider</Sider>\n      <Layout>\n        <Header>Header</Header>\n        <Content>Content</Content>\n        <Footer>Footer</Footer>\n      </Layout>\n    </Layout>\n    </div>\n  )\n}\n',tmb:"import {Layout} from 'react-kui'\nconst Header = Layout.Header\nconst Footer = Layout.Footer\nconst Sider = Layout.Sider\nconst Content = Layout.Content\nReactDOM.render() {\n  return (\n    <div>\n      <Layout>\n        <Header>\n          <div style={{ width: '120px', height: '31px', position: 'relative', zIndex: 999, backgroundColor: '#848b9c', float: 'left', margin: '15px 30px 0 0' }}></div>\n          <Menu mode=\"horizontal\" theme=\"dark\" activeName=\"1\" style={{ lineHeight: '62px' }}>\n            <Menu.Item name=\"1\" icon=\"home\">首页</Menu.Item>\n            <Menu.Item name=\"2\" icon=\"social-buffer\">文章</Menu.Item>\n            <Menu.Item name=\"3\" icon=\"heart\">评论</Menu.Item>\n          </Menu>\n        </Header>\n        <Content style={{ padding: '0 50px' }}>\n          <Breadcrumb style={{ margin: '20px 0' }}>\n            <Breadcrumb.Item to=\"/\" icon=\"home\">Home</Breadcrumb.Item>\n            <Breadcrumb.Item to=\"/breadcrumb\" icon=\"social-buffer\">breadcrumb</Breadcrumb.Item>\n            <Breadcrumb.Item icon=\"heart\">other</Breadcrumb.Item>\n          </Breadcrumb>\n          <div style={{ border: '1px solid #eee', padding: '20px', height: '200px', backgroundColor: '#fff' }}>\n            Content\n          </div>\n        </Content>\n        <Footer>\n          2009-2018 &copy; KUI\n        </Footer>\n      </Layout>\n    </div>\n  )\n}",tlc:'import { Layout, Menu, Breadcrumb, Icon } from \'react-kui\'\nconst Header = Layout.Header\nconst Footer = Layout.Footer\nconst Sider = Layout.Sider\nconst Content = Layout.Content\nReactDOM.render() {\n  return (\n    <div>\n    <Layout>\n        <Header>\n          <div style={{ width: \'120px\', height: \'31px\', position: \'relative\', zIndex: 999, backgroundColor: \'#848b9c\', float: \'left\', margin: \'15px 30px 0 0\' }}></div>\n          <Menu mode="horizontal" theme="dark" activeName="1" style={{ lineHeight: \'62px\' }}>\n            <Menu.Item name="1" icon="home">首页</Menu.Item>\n            <Menu.Item name="2" icon="social-buffer">文章</Menu.Item>\n            <Menu.Item name="3" icon="heart">评论</Menu.Item>\n          </Menu>\n        </Header>\n        <Layout>\n          <Sider>\n            <Menu theme=\'dark\' active-name="1" width="auto">\n              <Menu.SubMenu name="0" title={<React.Fragment><Icon type="ios-paper" />我的产品</React.Fragment>}>\n                <Menu.Item name="0-1">我的产品1</Menu.Item>\n                <Menu.Item name="0-2">我的产品2</Menu.Item>\n                <Menu.Item name="0-3">我的产品3</Menu.Item>\n                <Menu.Item name="0-4">我的产品4</Menu.Item>\n              </Menu.SubMenu>\n              <Menu.SubMenu name="1" title={<React.Fragment><Icon type="social-apple" />商品管理</React.Fragment>}>\n                <Menu.Item name="1-1">商品信息</Menu.Item>\n                <Menu.Item name="1-2">商品列表</Menu.Item>\n                <Menu.Item name="1-3">商品新增</Menu.Item>\n                <Menu.Item name="1-4">商品筛选</Menu.Item>\n              </Menu.SubMenu>\n\n              <Menu.SubMenu name="2" title={<React.Fragment><Icon type="android-walk" />用户管理</React.Fragment>}>\n                <Menu.Group title="超级管理">\n                  <Menu.Item name="2-1">用户信息</Menu.Item>\n                  <Menu.Item name="2-2">用户列表</Menu.Item>\n                </Menu.Group>\n                <Menu.Group title="普通管理">\n                  <Menu.Item name="2-3">用户新增</Menu.Item>\n                  <Menu.Item name="2-4">用户筛选</Menu.Item>\n                </Menu.Group>\n              </Menu.SubMenu>\n            </Menu>\n          </Sider>\n          <Content style={{ padding: \'20px 50px\' }}>\n            <Breadcrumb style={{ margin: \'0 0 20px 0\' }}>\n              <Breadcrumb.Item to="/" icon="home">Home</Breadcrumb.Item>\n              <Breadcrumb.Item to="/breadcrumb" icon="social-buffer">breadcrumb</Breadcrumb.Item>\n              <Breadcrumb.Item icon="heart">other</Breadcrumb.Item>\n            </Breadcrumb>\n            <div style={{ border: \'1px solid #eee\', padding: \'20px\', height: \'200px\', background: \'#fff\' }}>\n              Content\n            </div>\n          </Content>\n        </Layout>\n      </Layout>\n    </div>\n  )\n}'};t.default=a}}]);