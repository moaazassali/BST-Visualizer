(this.webpackJsonpavl=this.webpackJsonpavl||[]).push([[0],{18:function(t,e,r){},20:function(t,e,r){},21:function(t,e,r){},22:function(t,e,r){},23:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(1),i=r(11),a=r.n(i),d=(r(18),r(10)),c=r(12),s=r(3),l=r(4),h=r(2),u=r(6),w=r(5),S=r(9),E=(r(19),r(20),r(21),r(22),function t(e){Object(s.a)(this,t),this.value=e,this.parent=null,this.left=null,this.right=null,this.height=0,this.key=0}),b=function(){function t(){Object(s.a)(this,t),this.root=null,this.size=0,this.height=-1}return Object(l.a)(t,[{key:"height",value:function(t){return null===t?-1:t.height}},{key:"calculateTreeHeight",value:function(){this.height=this.root.height=this.calculateHeight(this.root)}},{key:"calculateHeight",value:function(t){if(null===t)return-1;var e=this.calculateHeight(t.left),r=this.calculateHeight(t.right);return 1+Math.max(e,r)}},{key:"getNode",value:function(t){for(var e=this.root;e;){if(t===e.value)return e;e=t<Number(e.value)?e.left:e.right}return e}},{key:"insert",value:function(t){if(this.getNode(t))return-1;this.root=this.insertHelper(this.root,t),this.setKey(t),this.size+=1,this.calculateTreeHeight()}},{key:"insertHelper",value:function(t,e){if(null===t)return new E(e);if(e<t.value){var r=this.insertHelper(t.left,e);t.left=r,r.parent=t}else if(e>t.value){var o=this.insertHelper(t.right,e);t.right=o,o.parent=t}return t}},{key:"delete",value:function(t){var e=this.getNode(t);e.value>e.parent.value?e.parent.right=null:e.parent.left=null,e.parent=null,this.size-=1}},{key:"setKey",value:function(t){for(var e=this.root,r=[1];e&&t!==e.value;)t>e.value?(e=e.right,r.push(1)):(e=e.left,r.push(0));var o=r.join("");e.key=parseInt(o,2)}}]),t}(),m=function(t){Object(u.a)(r,t);var e=Object(w.a)(r);function r(t){var o;return Object(s.a)(this,r),(o=e.call(this,t)).state={value:t.value,colStart:t.colStart,colEnd:t.colEnd,rowStart:t.rowStart,rowEnd:t.rowEnd,border:"1px solid white",boxShadow:"0px 0px 3px 2px white",color:"white",animation:"null",animationDone:!1},o.animateGreen=o.animateGreen.bind(Object(h.a)(o)),o.animateRed=o.animateRed.bind(Object(h.a)(o)),o}return Object(l.a)(r,[{key:"animateGreen",value:function(){this.setState({animation:"changeToGreen 0.5s"})}},{key:"animateRed",value:function(){this.setState({animation:"changeToRed 0.5s"})}},{key:"render",value:function(){var t=this,e={height:"2.5em",width:"2.5em",gridColumnStart:this.state.colStart,gridColumnEnd:this.state.colEnd,gridRowStart:this.state.rowStart,gridRowEnd:this.state.rowEnd,borderRadius:"50%",border:this.state.border,boxShadow:this.state.boxShadow,color:this.state.color,fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",animation:this.state.animation};return Object(o.jsx)("div",{style:e,onAnimationEnd:function(){t.setState({animation:null},(function(){return t.props.animateNode()}))},children:this.state.value})}}]),r}(n.Component),j=[{id:1,colStart:19,colEnd:20,rowStart:1,rowEnd:2},{id:2,colStart:9,colEnd:10,rowStart:4,rowEnd:5},{id:3,colStart:29,colEnd:30,rowStart:4,rowEnd:5},{id:4,colStart:5,colEnd:6,rowStart:7,rowEnd:8},{id:5,colStart:13,colEnd:14,rowStart:7,rowEnd:8},{id:6,colStart:25,colEnd:26,rowStart:7,rowEnd:8},{id:7,colStart:33,colEnd:34,rowStart:7,rowEnd:8},{id:8,colStart:3,colEnd:4,rowStart:10,rowEnd:11},{id:9,colStart:7,colEnd:8,rowStart:10,rowEnd:11},{id:10,colStart:11,colEnd:12,rowStart:10,rowEnd:11},{id:11,colStart:15,colEnd:16,rowStart:10,rowEnd:11},{id:12,colStart:23,colEnd:24,rowStart:10,rowEnd:11},{id:13,colStart:27,colEnd:28,rowStart:10,rowEnd:11},{id:14,colStart:31,colEnd:32,rowStart:10,rowEnd:11},{id:15,colStart:35,colEnd:36,rowStart:10,rowEnd:11},{id:16,colStart:2,colEnd:3,rowStart:13,rowEnd:14},{id:17,colStart:4,colEnd:5,rowStart:13,rowEnd:14},{id:18,colStart:6,colEnd:7,rowStart:13,rowEnd:14},{id:19,colStart:8,colEnd:9,rowStart:13,rowEnd:14},{id:20,colStart:10,colEnd:11,rowStart:13,rowEnd:14},{id:21,colStart:12,colEnd:13,rowStart:13,rowEnd:14},{id:22,colStart:14,colEnd:15,rowStart:13,rowEnd:14},{id:23,colStart:16,colEnd:17,rowStart:13,rowEnd:14},{id:24,colStart:22,colEnd:23,rowStart:13,rowEnd:14},{id:25,colStart:24,colEnd:25,rowStart:13,rowEnd:14},{id:26,colStart:26,colEnd:27,rowStart:13,rowEnd:14},{id:27,colStart:28,colEnd:29,rowStart:13,rowEnd:14},{id:28,colStart:30,colEnd:31,rowStart:13,rowEnd:14},{id:29,colStart:32,colEnd:33,rowStart:13,rowEnd:14},{id:30,colStart:34,colEnd:35,rowStart:13,rowEnd:14},{id:31,colStart:36,colEnd:37,rowStart:13,rowEnd:14}],p=r(7),f=r.n(p),v=function(t){Object(u.a)(r,t);var e=Object(w.a)(r);function r(t){var o;return Object(s.a)(this,r),(o=e.call(this,t)).state={},o}return Object(l.a)(r,[{key:"render",value:function(){var t,e,r=this,n={gridColumnStart:this.props.colStart,gridColumnEnd:this.props.colEnd,gridRowStart:this.props.rowStart,gridRowEnd:this.props.rowEnd,position:"relative"};return 0===this.props.direction&&(t="topRight"),1===this.props.direction&&(t="topLeft"),2===this.props.direction&&(t="topRight33"),3===this.props.direction&&(t="topLeft33"),4===this.props.direction&&(t="topRight60"),5===this.props.direction&&(t="topLeft60"),0===this.props.direction&&(e="bottomLeft"),1===this.props.direction&&(e="bottomRight"),2===this.props.direction&&(e="bottomLeft33"),3===this.props.direction&&(e="bottomRight33"),4===this.props.direction&&(e="bottomLeft60"),5===this.props.direction&&(e="bottomRight60"),Object(o.jsxs)("div",{style:n,children:[Object(o.jsx)("div",{id:"".concat(this.props.id,"x1"),className:t}),Object(o.jsx)("div",{id:"".concat(this.props.id,"x2"),className:e}),Object(o.jsx)(f.a,{className:"arrow",from:{direction:p.DIRECTION.BOTTOM,node:function(){return document.getElementById("".concat(r.props.id,"x1"))},translation:[0,0]},to:{direction:p.DIRECTION.TOP,node:function(){return document.getElementById("".concat(r.props.id,"x2"))},translation:[0,0]},head:{distance:.99}})]})}}]),r}(n.Component),g=[{id:"2",colStart:10,colEnd:19,rowStart:2,rowEnd:4,direction:0},{id:"3",colStart:20,colEnd:29,rowStart:2,rowEnd:4,direction:1},{id:"4",colStart:6,colEnd:9,rowStart:5,rowEnd:7,direction:0},{id:"5",colStart:10,colEnd:13,rowStart:5,rowEnd:7,direction:1},{id:"6",colStart:26,colEnd:29,rowStart:5,rowEnd:7,direction:0},{id:"7",colStart:30,colEnd:33,rowStart:5,rowEnd:7,direction:1},{id:"8",colStart:3,colEnd:6,rowStart:8,rowEnd:10,direction:2},{id:"9",colStart:5,colEnd:8,rowStart:8,rowEnd:10,direction:3},{id:"10",colStart:11,colEnd:14,rowStart:8,rowEnd:10,direction:2},{id:"11",colStart:13,colEnd:16,rowStart:8,rowEnd:10,direction:3},{id:"12",colStart:23,colEnd:26,rowStart:8,rowEnd:10,direction:2},{id:"13",colStart:25,colEnd:28,rowStart:8,rowEnd:10,direction:3},{id:"14",colStart:31,colEnd:34,rowStart:8,rowEnd:10,direction:2},{id:"15",colStart:33,colEnd:36,rowStart:8,rowEnd:10,direction:3},{id:"16",colStart:2,colEnd:4,rowStart:11,rowEnd:13,direction:4},{id:"17",colStart:3,colEnd:5,rowStart:11,rowEnd:13,direction:5},{id:"18",colStart:6,colEnd:8,rowStart:11,rowEnd:13,direction:4},{id:"19",colStart:7,colEnd:9,rowStart:11,rowEnd:13,direction:5},{id:"20",colStart:10,colEnd:12,rowStart:11,rowEnd:13,direction:4},{id:"21",colStart:11,colEnd:13,rowStart:11,rowEnd:13,direction:5},{id:"22",colStart:14,colEnd:16,rowStart:11,rowEnd:13,direction:4},{id:"23",colStart:15,colEnd:17,rowStart:11,rowEnd:13,direction:5},{id:"24",colStart:22,colEnd:24,rowStart:11,rowEnd:13,direction:4},{id:"25",colStart:23,colEnd:25,rowStart:11,rowEnd:13,direction:5},{id:"26",colStart:26,colEnd:28,rowStart:11,rowEnd:13,direction:4},{id:"27",colStart:27,colEnd:29,rowStart:11,rowEnd:13,direction:5},{id:"28",colStart:30,colEnd:32,rowStart:11,rowEnd:13,direction:4},{id:"29",colStart:31,colEnd:33,rowStart:11,rowEnd:13,direction:5},{id:"30",colStart:34,colEnd:36,rowStart:11,rowEnd:13,direction:4},{id:"31",colStart:35,colEnd:37,rowStart:11,rowEnd:13,direction:5}],O=function(t){Object(u.a)(r,t);var e=Object(w.a)(r);function r(){var t;return Object(s.a)(this,r),(t=e.call(this)).state={number:"",tree:new b,nodesArray:[],arrowsArray:[],animatedNodesKeys:[],animatedKeyCounter:0,isInputDisabled:!1},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleClick=t.handleClick.bind(Object(h.a)(t)),t.spawnNode=t.spawnNode.bind(Object(h.a)(t)),t.pathAnimation=t.pathAnimation.bind(Object(h.a)(t)),t.animateNext=t.animateNext.bind(Object(h.a)(t)),t}return Object(l.a)(r,[{key:"handleChange",value:function(t){var e=t.target,r=e.name,o=e.value;this.setState(Object(c.a)({},r,Number(o)))}},{key:"handleClick",value:function(t){var e=this;if(t.preventDefault(),""!==this.state.number)if(isNaN(this.state.number))alert("Please insert a number instead"),this.setState({number:""});else if(31===this.state.tree.size)alert("Maximum tree size of 31 nodes has been reached!"),this.setState({number:""});else if(this.state.number>9999)alert("Please enter a value less than 10,000"),this.setState({number:""});else{var r=this.state.number;if(-1===this.state.tree.insert(r))alert("Value already exists in the tree!"),this.setState({number:""});else if(this.state.tree.height>4)alert("Inserting this value will result in a total depth of 6 levels. Maximum depth allowed is 5."),this.setState({number:""}),this.state.tree.delete(r);else{var o=this.state.tree.getNode(r);this.setState({currentNode:o},(function(){return e.pathAnimation(o)})),this.setState({isInputDisabled:!0})}}}},{key:"animateNext",value:function(){var t=this,e=this.state.currentNode;if(this.state.animatedKeyCounter<this.state.animatedNodesKeys.length){var r=this["nodeRef".concat(this.state.animatedNodesKeys[this.state.animatedKeyCounter])].current;this.setState((function(t){return{animatedKeyCounter:t.animatedKeyCounter+1}})),e.value>=r.state.value?r.animateGreen():r.animateRed()}else this.setState({animatedKeyCounter:0},(function(){return t.spawnNode(e)}))}},{key:"pathAnimation",value:function(){for(var t=this.state.currentNode,e=Number(t.key).toString(2),r=[],o=1;o<e.length;o++){var n=e.slice(0,o),i=parseInt(n,2);r.push(i)}this.setState({animatedNodesKeys:r},(function(){this.animateNext(t)}))}},{key:"spawnNode",value:function(t){var e=j[t.key-1];this["nodeRef".concat(t.key)]=Object(n.createRef)();var r=Object(o.jsx)(m,{id:"nodeID".concat(t.key),ref:this["nodeRef".concat(t.key)],value:t.value,colStart:e.colStart,colEnd:e.colEnd,rowStart:e.rowStart,rowEnd:e.rowEnd,animateNode:this.animateNext},t.key),i=Object(d.a)(this.state.nodesArray);i[t.key]=r;var a=Object(d.a)(this.state.arrowsArray);if(1!==t.key){var c=g[t.key-2],s=Object(o.jsx)(v,{id:"arrowID".concat(t.key),ref:this["arrowRef".concat(t.key)],colStart:c.colStart,colEnd:c.colEnd,rowStart:c.rowStart,rowEnd:c.rowEnd,direction:c.direction},t.key);a[t.key]=s}this.setState({nodesArray:i}),this.setState({arrowsArray:a}),this.setState({isInputDisabled:!1}),this.setState({number:""})}},{key:"render",value:function(){return Object(o.jsxs)("div",{style:{height:"100vh"},children:[Object(o.jsx)("div",{className:"header",children:"BINARY SEARCH TREE VISUALIZER"}),Object(o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 6fr",height:"93vh"},children:[Object(o.jsxs)("div",{className:"sideBar",style:{gridColumnStart:1,gridColumnEnd:2},children:[Object(o.jsx)("form",{onSubmit:this.handleClick,children:Object(o.jsxs)("div",{className:"form__group field",children:[Object(o.jsx)("input",{type:"text",value:this.state.number,className:"form__field",id:"name",placeholder:"Insert a Value",name:"number",onChange:this.handleChange,disabled:this.state.isInputDisabled}),Object(o.jsx)("label",{for:"name",className:"form__label",children:"Insert value"})]})}),Object(o.jsxs)("a",{className:"bt more-bt",onClick:this.handleClick,children:[Object(o.jsx)("span",{className:"fl"}),Object(o.jsx)("span",{className:"sfl"}),Object(o.jsx)("span",{className:"cross"}),Object(o.jsx)("i",{}),Object(o.jsx)("div",{children:"add"})]}),Object(o.jsxs)("div",{className:"otherInfo",style:{marginTop:"auto"},children:[Object(o.jsxs)("span",{style:{fontSize:"1.2em",color:"white"},children:[Object(o.jsx)("strong",{children:"Changelog:"})," "]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:" Added a circular bar representing the size of the tree"}),Object(o.jsx)("li",{children:" Added new style and animations to the insert field and button"})]})]}),Object(o.jsxs)("div",{className:"otherInfo",children:[Object(o.jsxs)("span",{style:{fontSize:"1.2em",color:"white"},children:[Object(o.jsx)("strong",{children:"Planned Features:"})," "]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:" Animating the arrows with color as well "}),Object(o.jsx)("li",{children:" Adding a slider to change animation speed "}),Object(o.jsx)("li",{children:" An option to delete specific nodes"}),Object(o.jsx)("li",{children:" Implementing AVL tree data structure "})]})]})]}),Object(o.jsxs)("div",{style:{gridColumnStart:2,gridColumnEnd:3,display:"grid",gridTemplateRows:"20% 80%",padding:"1% 1% 2.5% 1%",gridRowGap:"2.5%"},children:[Object(o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"9% 90%",height:"100%",gridColumnGap:"1%"},children:[Object(o.jsxs)("div",{style:{backgroundColor:"#424242",borderRadius:"2vh",alignSelf:"center",padding:"5%"},children:[Object(o.jsx)(S.a,{value:this.state.tree.size,maxValue:31,text:"".concat(Math.round(this.state.tree.size/31*100),"%"),circleRatio:.75,styles:Object(S.b)({rotation:.625,pathColor:"#ba68c8",textColor:"#ba68c8"})}),Object(o.jsxs)("div",{style:{color:"white",textAlign:"center",fontSize:"1.2em"},children:[" ",Object(o.jsxs)("strong",{children:["Size: ".concat(this.state.tree.size," /31")," "]})]})]}),Object(o.jsxs)("div",{style:{backgroundColor:"#424242",borderRadius:"2vh",padding:"1%",color:"white"},children:[Object(o.jsxs)("span",{style:{fontSize:"1.5em"},children:[Object(o.jsx)("strong",{children:"Tutorial:"})," "]})," ",Object(o.jsx)("br",{}),"  ",Object(o.jsx)("br",{}),"Simply use the interface on the left to interact with the tree by adding a value anywhere from 0 to 9,999. ",Object(o.jsx)("br",{})," ",Object(o.jsx)("br",{}),"Limitations: Negative values are not accepted / Repeated values are not accepted / Maximum depth of 5 levels / Maximum of 31 nodes"]})]}),Object(o.jsxs)("div",{className:"grid",children:[this.state.nodesArray,this.state.arrowsArray]})]})]})]})}}]),r}(n.Component);var y=function(){return Object(o.jsx)(O,{})};a.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5aab728b.chunk.js.map