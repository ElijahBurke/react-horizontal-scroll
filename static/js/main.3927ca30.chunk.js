(this["webpackJsonpreact-horizontal-scroll-example"]=this["webpackJsonpreact-horizontal-scroll-example"]||[]).push([[0],{14:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),c=a.n(r),s=(a(35),a(36),a(10)),o=a(1);a(37);var l=()=>{const e=Object(o.f)();return i.a.createElement("nav",{className:"Nav__nav"},i.a.createElement("a",{href:"https://github.com/ElijahBurke/react-horizontal-scroll",rel:"noopener noreferrer",target:"_blank"},"GITHUB"),i.a.createElement("a",{href:"https://www.npmjs.com/package/react-auto-glide",rel:"noopener noreferrer",target:"_blank"},"NPM"),i.a.createElement("a",{href:"#",onClick:()=>e.push("/docs/getting-started")},"DOCS"))},m=(a(43),a(3));a(13);const d=[{img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",title:"React"},{img:"https://cdn.worldvectorlogo.com/logos/redux.svg",title:"Redux"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png",title:"GraphQL"},{img:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png",title:"Ramda"},{img:"https://iconape.com/wp-content/files/fh/110909/png/typescript.png",title:"TypeScript"},{img:"https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",title:"NodeJS"},{img:"https://www.nextontop.com/assets/img/services/web/expressjs.svg",title:"Express"},{img:"https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",title:"Jest"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",title:"Postgres"},{img:"https://cdn.worldvectorlogo.com/logos/sequelize.svg",title:"Sequelize"},{img:"https://img.icons8.com/color/452/mongodb.png",title:"MongoDB"},{img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png",title:"Mongoose"}],p=e=>i.a.createElement("div",{className:"scrolling__container"},i.a.createElement("div",{className:"container__card"},i.a.createElement("img",{src:e.img,alt:""})));var g=function(){const e=Object(o.f)();return i.a.createElement("div",{className:"Hero__hero"},i.a.createElement("div",{className:"hero__title"},"React Auto Carousel"),i.a.createElement("div",{className:"hero__subtitle"},"Customisable Carousel That Displays Your Content In A Gliding React Component"),i.a.createElement("div",{className:"hero__glide-container"},i.a.createElement(m.a,{mapper:p,list:d,time:"30s",width:"200px"})),i.a.createElement("div",{className:"hero__buttons"},i.a.createElement("button",{type:"button"},i.a.createElement("a",{href:"https://github.com/ElijahBurke/react-horizontal-scroll",rel:"noopener noreferrer",target:"_blank"},"GitHub")),i.a.createElement("button",{type:"button",onClick:()=>e.push("/docs/getting-started")},"Docs")))},u=(a(44),a(45),a(259)),h=a(258);var v=function(){return i.a.createElement("div",{className:"GettingStarted__install"},i.a.createElement("div",{className:"install__inner"},i.a.createElement("div",{className:"install__title"},"Getting Started"),i.a.createElement("div",{className:"install__subsubtitle"},"To add this to your project run the following in your terminal:"),i.a.createElement("div",{className:"install__install__npm code__area"},i.a.createElement(u.a,{language:"bash",style:h.a},"# install the latest version\n$ npm i react-auto-slide")),i.a.createElement("div",{className:"install__import"},"Import the package in to the component you wish to use it in."),i.a.createElement("div",{className:"install__import-code code__area"},i.a.createElement(u.a,{language:"javascript",style:h.a},"import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';")),i.a.createElement("div",{className:"install__pre-reqs"},"Create a list and a function for converting items of that lists in to the elements you wish to render."),i.a.createElement("div",{className:"install__pre-reqs-code code__area"},i.a.createElement(u.a,{language:"javascript",style:h.a},'const imgs = [React, Redux, GraphQL, Ramda];\nconst mapper = (source) => <img src={source} alt="" />;')),i.a.createElement("div",{className:"install__pre-reqs"},"Now you can render the Auto Glide component inside of a container which controls where the div will be positioned."),i.a.createElement("div",{className:"install__pre-reqs-code code__area"},i.a.createElement(u.a,{language:"jsx",style:h.a},'<div className="glide-container">\n  <ReactScrolling mapper={mapper} list={imgs} />\n</div>')),i.a.createElement("div",{className:"install__pre-reqs"},"And That","'","s it! Below is what this would render. See further down for this example put into one block!"),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:e=>i.a.createElement("img",{src:e,alt:""}),list:["https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","https://cdn.worldvectorlogo.com/logos/redux.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png"]}))))},f=(a(253),a(8));a(254);var _=function({css:e,jsx:t,buttonsRight:a}){const r=Object(n.useState)("jsx"),c=Object(f.a)(r,2),s=c[0],o=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"display__tabs",style:{justifyContent:a?"flex-end":""}},i.a.createElement("button",{className:"jsx"===s?"active":"",type:"button",onClick:()=>o("jsx")},"JSX"),i.a.createElement("button",{className:"css"===s?"active":"",type:"button",onClick:()=>o("css")},"CSS")),i.a.createElement("div",{className:"display__css-jsx"},i.a.createElement(u.a,{language:s,style:h.a,wrapLongLines:!0},"jsx"===s?t:e)))};var E=function(){return i.a.createElement("div",{className:"BasicSetup__basic-setup"},i.a.createElement("div",{className:"basic-setup__containers"},i.a.createElement("div",{className:"containers__left"},i.a.createElement("div",{className:"left__title"},"Quick Setup"),i.a.createElement("div",{className:"left__subtitle"},"This is an out the box example with minimal customization. Check out how you can use other props to customise further!")),i.a.createElement("div",{className:"containers__right"},i.a.createElement(_,{jsx:"import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';\nimport { React, Redux, GraphQL, Ramda } from './images';\n// This is an array of locally saved images.\nconst imgs = [React, Redux, GraphQL, Ramda];\nconst mapper = (source) => <img src={source} alt=\"\" />;\nfunction App() {\n  return (\n  <div className=\"glide-container\">\n    <ReactScrolling mapper={mapper} list={imgs} />\n  </div>\n  )\n}",css:"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: centre;\n  align-items: centre;\n  padding: 3%\n}\n.glide-container {\n  width: 100%\n  height: 20%;\n}\n.glide-container img {\n  width: 80%\n}"})),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:e=>i.a.createElement("img",{src:e,alt:""}),list:["https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","https://cdn.worldvectorlogo.com/logos/redux.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png"]}))))};a(255);var w=function({name:e}){const t=Object(o.f)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"DocsSideNav__nav"},i.a.createElement("button",{className:"getting-started"===e?"active":void 0,type:"button",onClick:()=>t.push("/docs/getting-started")},"Getting Started"),i.a.createElement("button",{className:"width"===e?"active":void 0,type:"button",onClick:()=>t.push("/docs/width")},"Element Width"),i.a.createElement("button",{className:"time"===e?"active":void 0,type:"button",onClick:()=>t.push("/docs/time")},"Time"),i.a.createElement("button",{className:"delay"===e?"active":void 0,type:"button",onClick:()=>t.push("/docs/delay")},"Delay Scroll"),i.a.createElement("button",{className:"mappers"===e?"active":void 0,type:"button",onClick:()=>t.push("/docs/mappers")},"More Advanced Mappers")))};a(256);function b({img:e,title:t}){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"front"},i.a.createElement("img",{src:e,alt:""})),i.a.createElement("div",{className:"back"},t))}const x=[{img:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",title:"React"},{img:"https://cdn.worldvectorlogo.com/logos/redux.svg",title:"Redux"},{img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png",title:"GraphQL"},{img:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png",title:"Ramda"}];var N=function(){return i.a.createElement("div",{className:"Mappers__mappers"},i.a.createElement("div",{className:"mappers__container"},i.a.createElement("div",{className:"container__title"},"Advanced Mappers"),i.a.createElement("div",{className:"container__subtitle"},"By allowing you to pass in a mapper function, you can make the scrolling elements as complex as you want, using your own components or templates. Let","'s ","build a component we want to use."),i.a.createElement("div",{className:"container__component-code"},i.a.createElement(_,{jsx:'export default function FlipCard ({ img, title }) {\n  return (\n    <div className="card">\n      <div className="front">\n        <img src={img} alt="" />\n      </div>\n      <div className="back">\n        {title}\n      </div>\n    </div>\n  );\n};',css:".card{\n  position: relative;\n  margin: 2%;\n  width: 90%;\n  height: 90%;\n}\n.front,.back{\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  transition: transform .6s linear;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  border: 1px solid #111111;\n  background: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n}\n.front{\n  transform: perspective(600px) rotateY(0deg);\n}\n.back{\n  transform: perspective(600px) rotateY(180deg);\n}\n\n.front img {\n  width: 80%;\n}\n\n.card:hover > .front{\n  transform: perspective(600px) rotateY(-180deg);\n}\n.card:hover > .back{\n  transform: perspective(600px) rotateY(0deg);\n}"})),i.a.createElement("div",{className:"container__subtitle"},"And now we can use this component to render a list of FlipCards!"),i.a.createElement("div",{className:"container__component-code"},i.a.createElement(_,{jsx:"import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';\nimport FlipCard from './FlipCard';\nimport { React, Redux, GraphQL, Ramda } from './images';\n\nconst imgs = [\n  {img: React, title: 'React' },\n  {img: Redux, title: 'Redux' },\n  {img: GraphQL, title: 'GraphQL' },\n  {img: Ramda, title: 'Ramda' },\n];\n\nconst mapper = ({ img, title }) => <FlipCard img={img} title={title} />;\n\nfunction App() {\n  return (\n  <div className=\"glide-container\">\n    <ReactScrolling mapper={mapper} list={imgs} />\n  </div>\n  )\n};",css:"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: centre;\n  align-items: centre;\n}\n.glide-container {\n  width: 100%\n  height: 20%;\n}"})),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:({img:e,title:t})=>i.a.createElement(b,{img:e,title:t}),list:x,width:"200px"}))))};a(14);var y=function(){const e=Object(n.useState)("30px"),t=Object(f.a)(e,2),a=t[0],r=t[1],c="import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';\nimport { React, Redux, GraphQL, Ramda } from './images';\n// This is an array of locally saved images.\nconst imgs = [React, Redux, GraphQL, Ramda];\nconst mapper = (source) => <img src={source} alt=\"\" />;\nfunction App() {\n  return (\n  <div className=\"glide-container\">\n    <ReactScrolling mapper={mapper} list={imgs} width=\"".concat(a,'" />\n  </div>\n  )\n}');return i.a.createElement("div",{className:"Width__width"},i.a.createElement("div",{className:"width__container"},i.a.createElement("div",{className:"container__title"},"Element Width"),i.a.createElement("div",{className:"container__subtitle"},"Pass in the element width prop to define the width of each scrolling element."),i.a.createElement("div",{className:"container__subsubtitle"},"We need the width as a prop so that we can calculate whether the list needs to be repeated. As you can see below the images repeat to fill the container."),i.a.createElement("div",{className:"container__code"},i.a.createElement(_,{jsx:c,css:"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: centre;\n  align-items: centre;\n  padding: 3%\n}\n.glide-container {\n  width: 100%\n  height: 20%;\n}\n.glide-container img {\n  width: 80%\n}"})),i.a.createElement("input",{type:"range",id:"width",name:"width",min:"30",max:"200",onChange:e=>r("".concat(e.target.value,"px"))}),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:e=>i.a.createElement("img",{src:e,alt:""}),list:["https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","https://cdn.worldvectorlogo.com/logos/redux.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png"],width:a}))))};var R=function(){const e=Object(n.useState)("10s"),t=Object(f.a)(e,2),a=t[0],r=t[1],c="import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';\nimport { React, Redux, GraphQL, Ramda } from './images';\n// This is an array of locally saved images.\nconst imgs = [React, Redux, GraphQL, Ramda];\nconst mapper = (source) => <img src={source} alt=\"\" />;\nfunction App() {\n  return (\n  <div className=\"glide-container\">\n    <ReactScrolling mapper={mapper} list={imgs} time=\"".concat(a,'" />\n  </div>\n  )\n}');return i.a.createElement("div",{className:"Width__width"},i.a.createElement("div",{className:"width__container"},i.a.createElement("div",{className:"container__title"},"Scroll Time"),i.a.createElement("div",{className:"container__subtitle"},"Use the Time Prop to control how long the div takes to scroll from start to finish."),i.a.createElement("div",{className:"container__subsubtitle"},"Play around with the slider below and see how it effects the prop in the code snippet!"),i.a.createElement("div",{className:"container__code"},i.a.createElement(_,{jsx:c,css:"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: centre;\n  align-items: centre;\n  padding: 3%\n}\n.glide-container {\n  width: 100%\n  height: 20%;\n}\n.glide-container img {\n  width: 80%\n}"})),i.a.createElement("input",{type:"range",id:"width",name:"width",min:"10",max:"90",step:"5",value:a.replace("s",""),onChange:e=>{r("".concat(e.target.value,"s"))}}),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:e=>i.a.createElement("img",{src:e,alt:""}),list:["https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","https://cdn.worldvectorlogo.com/logos/redux.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png"],time:a,width:"150px"}))))};var k=function(){const e=Object(n.useState)("1"),t=Object(f.a)(e,2),a=t[0],r=t[1],c="import { ReactScrolling } from 'react-auto-glide';\nimport 'react-auto-glide/dist/index.css';\nimport { React, Redux, GraphQL, Ramda } from './images';\n// This is an array of locally saved images.\nconst imgs = [React, Redux, GraphQL, Ramda];\nconst mapper = (source) => <img src={source} alt=\"\" />;\nfunction App() {\n  return (\n  <div className=\"glide-container\">\n    <ReactScrolling mapper={mapper} list={imgs} delayBetweenScroll=\"".concat(a,'" />\n  </div>\n  )\n}');return i.a.createElement("div",{className:"Width__width"},i.a.createElement("div",{className:"width__container"},i.a.createElement("div",{className:"container__title"},"Delay Scroll"),i.a.createElement("div",{className:"container__subtitle"},"Use the delayBetweenScroll to control the time (in ms) between scrolls"),i.a.createElement("div",{className:"container__subsubtitle"},"Play around with the slider below and see how it effects the prop in the code snippet!"),i.a.createElement("div",{className:"container__code"},i.a.createElement(_,{jsx:c,css:"body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: centre;\n  align-items: centre;\n  padding: 3%\n}\n.glide-container {\n  width: 100%\n  height: 20%;\n}\n.glide-container img {\n  width: 80%\n}"})),i.a.createElement("input",{type:"range",id:"width",name:"width",min:"1",max:"5001",step:"500",value:a,onChange:e=>{r(e.target.value)}}),i.a.createElement("div",{className:"glide-container"},i.a.createElement(m.a,{mapper:e=>i.a.createElement("img",{src:e,alt:""}),list:["https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png","https://cdn.worldvectorlogo.com/logos/redux.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png","https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/943/full/ramda.png"],delayBetweenScroll:a,width:"150px"}))))};var L=function({name:e}){return i.a.createElement("div",null,i.a.createElement(w,{name:e}),"getting-started"===e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(E,null)),"mappers"===e&&i.a.createElement(N,null),"width"===e&&i.a.createElement(y,null),"time"===e&&i.a.createElement(R,null),"delay"===e&&i.a.createElement(k,null))};var j=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(l,null),i.a.createElement("div",{className:"nav-buffer"}),i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/",component:g}),i.a.createElement(o.a,{exact:!0,path:"/docs/:name",render:e=>i.a.createElement(L,{name:e.match.params.name})}))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root"))},28:function(e,t,a){e.exports=a(257)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.3927ca30.chunk.js.map