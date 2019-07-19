(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),i=(a(23),a(24),a(17)),c=a(1),s=a(2),m=a(4),p=a(3),u=a(5),d=a(6),h=a.n(d),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){h.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"Home",className:"scrollspy"},l.a.createElement("div",{className:"nav-wrapper blue lighten-2"},l.a.createElement("a",{href:"#Home","data-target":"mobile-demo",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("a",{href:"#Home",className:"brand-logo center"},"Michael Fearnley"),l.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"#About"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Portfolio"},"Portfolio"))))),l.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement("a",{href:"#About",className:"sidenav-close white-text"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#Portfolio",className:"sidenav-close white-text"},"Portfolio"))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={ref:Object(n.createRef)()},a.handleClick=e.toTop,a.scrollRef=Object(n.createRef)(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){h.a.AutoInit(),console.log(this.props)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"black valign-wrapper"},l.a.createElement("div",{className:"row nopadding nomargin"},l.a.createElement("div",{className:"col l6 s12"},l.a.createElement("div",{className:"center-align"},l.a.createElement("img",{className:"responsive-img",src:"images/Fearnley-Headshot-Small-edited.jpg",alt:"Michael Fearnley"}))),l.a.createElement("div",{className:"col l6 s12 valign-wrapper titleButtons"},l.a.createElement("div",{className:"center-align"},l.a.createElement("h1",{className:"white-text title"},"Full Stack Web Developer"),l.a.createElement("a",{href:"mailto:mtfear@hotmail.com"},l.a.createElement("button",{className:"btn btn-large blue lighten-2"},l.a.createElement("i",{className:"material-icons icon-left"},"email"),"Email Me")),l.a.createElement("hr",{className:"line"}),l.a.createElement("a",{href:"https://www.linkedin.com/in/michaelfearnley/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"logoimg",src:"images/linkedin-logo.png",alt:"linked in logo"})),l.a.createElement("a",{href:"https://github.com/FearMichael",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"logoimg",src:"images/github-logo.png",alt:"github logo"})))))),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"Portfolio",ref:this.props.innerRef,className:"center-align"},"About",l.a.createElement("i",{className:"small material-icons",onClick:this.props.toTop},"arrow_upward"))),l.a.createElement("hr",{className:"line-blue"}),l.a.createElement("div",null,l.a.createElement("div",{className:"nopadding row nomargin scrollspy",id:"About"},l.a.createElement("div",{className:"col l6 m12 s12 nomargin nopadding"},l.a.createElement("h2",{className:"blue lighten-2 pst center-align white-text"},"Hobbies & Interests"),l.a.createElement("div",{className:"container center-align"},l.a.createElement("h4",{className:"sectionContent"},"About me"),l.a.createElement("p",{className:"sectionContent"},"A Full Stack Web Developer with significant experience working with teams to accomplish a common goal. A strong perseverance to solve problems and do everything with excellence. Always keeping up to date with the latest technologies in order to create modern and intuitive web applications."),l.a.createElement("h4",{className:"sectionContent"},"How I like to spend my time"),l.a.createElement("ul",{className:"sectionList"},l.a.createElement("li",null,"Creating"),l.a.createElement("li",null,"Photography"),l.a.createElement("li",null,"Being with people"),l.a.createElement("li",null,"Video gaming with friends")))),l.a.createElement("div",{className:"col l6 m12 s12"},l.a.createElement("div",{className:"blue lighten-2"},l.a.createElement("h2",{className:"blue lighten-2 pst center-align white-text"},"Skills & Attributes")),l.a.createElement("div",{className:"container skillsSection row center-align"},l.a.createElement("div",{className:"col l6 m6 s12"},l.a.createElement("h4",null,"Personal"),l.a.createElement("ul",null,l.a.createElement("li",null,"Collaborative"),l.a.createElement("li",null,"Team Player"),l.a.createElement("li",null,"Organized"),l.a.createElement("li",null,"Communication"))),l.a.createElement("div",{className:"col l6 m6 s12 center-align"},l.a.createElement("h4",null,"Professional"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML & CSS"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"Materialize"),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Angular 7"),l.a.createElement("li",null,"MySQL"))))))))}}]),t}(n.Component),E=[{name:"Bench Strength",picture:"./images/benchstrength.png",description:"The app that provides Team Leaders the ability to assess employee skills and interests to build smarter, more invested teams.",tools:["Angular 7","Typescript","Bootstrap","Sequelize","Auth0","AWS"],deployedLink:"http://ec2-3-80-218-219.compute-1.amazonaws.com:3000/"},{name:"Daily Dash",picture:"./images/dailydash.png",description:"Ever been annoyed at needing to go several different apps/websites to get some basic info? DailyDash consolidates all of that information into a personalized experience for you.",tools:["Sequelize","Heroku","Materialize","Node.js","Passportjs"],deployedLink:"http://dailydashboardproject2.herokuapp.com/"},{name:"A Night In",picture:"./images/aNightIn.jpg",description:"This app is designed to provide an easy user experience for finding a movie to watch and food to eat for entertainment.",tools:["Movie and Food API's","Github","Materialize","Firebase"],deployedLink:"https://anightout-1548896687179.firebaseapp.com/"},{name:"Giftastic",picture:"./images/gifTastic.png",description:"This fun web app will provide the user with 10 gifs as well as creating a button for easy re-use.",tools:["Giphy API","Github","Materialize","jQuery"],deployedLink:"https://fearmichael.github.io/giftastic/"},{name:"Train Tracker",picture:"./images/trainTracker.png",description:"This is a prototype for tracking train schedules. This utilizes a NoSQL database (Firebase) along with authentication.",tools:["Firebase","Moment JS","Materialize","User input validation"],deployedLink:"https://traintracker-e3faf.firebaseapp.com/"},{name:"Word Guess Game",picture:"./images/wordGuess.png",description:"A fun photography themed word guess game.",tools:["Input validation","Github Version Control","Bootstrap","jQuery"],deployedLink:"https://fearmichael.github.io/word-guess-game/"}];var b=function(e){return l.a.createElement("div",{className:"row nomargin pl portfolio-info",key:e.portInfo.name.toString()},l.a.createElement("div",{className:"container col l4 offset-l2 s12 valign-wrapper"},l.a.createElement("img",{className:"portfolio-img",src:e.portInfo.picture,alt:e.portInfo.name})),l.a.createElement("div",{className:"container col l4 s12 pl center-align"},l.a.createElement("h3",null,e.portInfo.name),l.a.createElement("p",null,e.portInfo.description),l.a.createElement("p",{className:"tools"},"Tools Used:"),l.a.createElement("hr",{className:"toolsLine"}),l.a.createElement("ul",null,e.portInfo.tools.map(function(e){return l.a.createElement("li",{key:e.toString()},e)})),l.a.createElement("a",{href:e.portInfo.deployedLink,target:"_blank",rel:"noreferrer noopener",className:"btn btn-lg"},"Check it out")))};var v=function(e){return l.a.createElement("div",{className:"row nomargin pl portfolio-info reverse",key:e.portInfo.name.toString()},l.a.createElement("div",{className:"container col l4 s12 pl offset-l2 center-align"},l.a.createElement("h3",null,e.portInfo.name),l.a.createElement("p",null,e.portInfo.description),l.a.createElement("p",{className:"tools"},"Tools Used:"),l.a.createElement("hr",{className:"toolsLine"}),l.a.createElement("ul",null,e.portInfo.tools.map(function(e){return l.a.createElement("li",{key:e.toString()},e)})),l.a.createElement("a",{href:e.portInfo.deployedLink,target:"_blank",rel:"noreferrer noopener",className:"btn btn-lg"},"Check it out")),l.a.createElement("div",{className:"container col l4 s12"},l.a.createElement("img",{className:"portfolio-img",src:e.portInfo.picture,alt:e.portInfo.name})))},N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){h.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"Portfolio",className:"scrollspy center-align"},"Portfolio ",l.a.createElement("i",{className:"small material-icons",onClick:this.props.toTop},"arrow_upward"))),l.a.createElement("hr",{className:"line-blue"}),E.map(function(e){return E.indexOf(e)%2===0?l.a.createElement(b,{key:e.name.toString(),portInfo:e}):l.a.createElement(v,{key:e.name.toString(),portInfo:e})}))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"page-footer footer-copyright blue lighten-2"},l.a.createElement("h5",{className:"center-align nomargin nopadding"},"Michael Fearnley \xa9 ",l.a.createElement("i",{className:"small material-icons footerArrow",onClick:this.props.toTop},"arrow_upward")))}}]),t}(n.Component);var y=function(){var e=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};return console.log(Object(n.createRef)()),l.a.createElement(i.a,null,l.a.createElement(g,null),l.a.createElement(f,{toTop:e}),l.a.createElement(N,{toTop:e}),l.a.createElement(w,{toTop:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(29);o.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.1878ede7.chunk.js.map