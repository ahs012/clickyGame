(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/hollowHornet.009f83fa.png"},function(e,a,t){e.exports=t.p+"static/media/hollowSilk.46045af4.png"},function(e,a,t){e.exports=t.p+"static/media/hollowKnight.b8b65aa7.png"},function(e,a,t){e.exports=t.p+"static/media/hollowBoss.78e564e5.png"},function(e,a,t){e.exports=t.p+"static/media/hollowZaza.c663f3c7.png"},function(e,a,t){e.exports=t.p+"static/media/hollowLace.2ec6a771.png"},function(e,a,t){e.exports=t.p+"static/media/hollowZote.7b8d3406.png"},function(e,a,t){e.exports=t.p+"static/media/hollowMerchant.1897d213.png"},function(e,a,t){e.exports=t.p+"static/media/hollowQuirrel.ec741dc2.png"},function(e,a,t){e.exports=t.p+"static/media/hollowHat.c0c17425.png"},function(e,a,t){e.exports=t.p+"static/media/hollowSentry.6cf28563.png"},function(e,a,t){e.exports=t.p+"static/media/hollowMato.9a60a831.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),l=t.n(i),o=(t(14),t(3)),r=t(4),s=t(6),m=t(5),h=t(7);t(15),t(16);var g=function(e){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Welcome to the Hollow Knight Clicky-Game!"),c.a.createElement("hr",null),c.a.createElement("h2",null,e.message),c.a.createElement("h3",null,"Score ",e.score,"| High Score ",e.highScore)))};t(17);var d=function(e){var a=function(e){for(var a,t,n=e.length;n>0;)t=Math.floor(Math.random()*n),a=e[--n],e[n]=e[t],e[t]=a;return e}([c.a.createElement("img",{key:"1",id:"1",src:t(18),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hh"}),c.a.createElement("img",{key:"2",id:"2",src:t(19),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hs"}),c.a.createElement("img",{key:"3",id:"3",src:t(20),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hk"}),c.a.createElement("img",{key:"4",id:"4",src:t(21),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hb"}),c.a.createElement("img",{key:"5",id:"5",src:t(22),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hz"}),c.a.createElement("img",{key:"6",id:"6",src:t(23),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hl"}),c.a.createElement("img",{key:"7",id:"7",src:t(24),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hzo"}),c.a.createElement("img",{key:"8",id:"8",src:t(25),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hm"}),c.a.createElement("img",{key:"9",id:"9",src:t(26),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hq"}),c.a.createElement("img",{key:"10",id:"10",src:t(27),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hha"}),c.a.createElement("img",{key:"11",id:"11",src:t(28),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hs"}),c.a.createElement("img",{key:"12",id:"12",src:t(29),onClick:e.handleImageClick,className:"img-thumbnail",alt:"hma"})]);return c.a.createElement("main",{className:"images"},c.a.createElement("div",{className:"container-fluid"},a))};var u=function(){return c.a.createElement("footer",{className:"py-5 bg-dark"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Albert Schumacher 2019")))},p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,selectedID:[],message:"Click on the Characters below to earn points, but don't click any of them twice or you LOSE!"},t.handleImageClick=function(e){var a=e.target.id;t.state.selectedID.includes(a)?t.setState({score:0,selectedID:[],message:"Oops! You had already picked that character...Try again!"}):(t.state.selectedID.push(a),t.state.highScore<=t.state.score?t.setState({highScore:t.state.score+1,message:"Click on the Characters below to earn points, but don't click any of them twice or you LOSE!",score:t.state.score+1}):t.setState({message:"Oops! You had already picked that character...Try again!",score:t.state.score+1}))},t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{message:this.state.message,score:this.state.score,highScore:this.state.highScore}),c.a.createElement(d,{handleImageClick:this.handleImageClick}),c.a.createElement(u,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.e8931c03.chunk.js.map