(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(2),o=a.n(n),c=(a(13),a(3)),m=a(4),r=a(6),l=a(5),h=a(7),u=(a(15),a(17),function(e){return s.a.createElement("nav",{className:"navbar navbar-fixed-top sushiNav"},s.a.createElement("div",null,s.a.createElement("h3",null,"It's time to eat some goddamn sushi, don't eat more than the same one. What are you waiting for?"),s.a.createElement("small",{className:"Ack, told ya not to do that, you just pooped your pants!"===e.message?"sushiMess2":"sushiMess"},""===e.message?"You can only eat one of each though, or suffer the consequences.":e.message)),s.a.createElement("span",null,"Points :",s.a.createElement("span",null,e.currentPoint)," | High Score : ",e.highScore))}),p=(a(19),function(e){return s.a.createElement("div",{className:"sushiCard",onClick:e.onsushiclick},s.a.createElement("h2",null,e.name),s.a.createElement("img",{src:e.img,className:"sushiImg img-fluid img-thumbnail"}))}),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={points:0,highScore:0,tiles:[{name:"Sake",img:"https://media1.popsugar-assets.com/files/thumbor/pSKtIjG5_7-iQ1rCipmnM0wN37E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/02/18/162/n/28443503/73fff5022e19a6fc_shutterstock_97913285/i/Salmon-Nigiri.jpg"},{name:"Toro",img:"https://tracychang.files.wordpress.com/2010/10/img_8756.jpg"},{name:"Aji",img:"http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2016/09/4192186354_384534ddd8_o.jpg?resize=700%2C525"},{name:"Hamachi",img:"https://sushiday.com/wp-content/2008/05/yellowtailnigiri-1620x1156.jpg"},{name:"Iwashi",img:"http://cdn.heysesame.com/wp-content/uploads/30011956/Japanese-Iwashi-Sardine-nigiri-680x907.jpg"},{name:"Tsukiji",img:"https://c1.staticflickr.com/3/2515/5749600372_70b7a06d3f_b.jpg"},{name:"Uni",img:"https://s3.amazonaws.com/bucket.leye.co/uploads/2009/01/Naoki-Sushi_Japanese-Uni-Nigiri-07-1.jpg"},{name:"Ikuro",img:"https://i.pinimg.com/originals/eb/cf/0f/ebcf0f089ef3d5cca1684634b04f02fc.jpg"},{name:"Saba",img:"https://eatcleanme.com/media/catalog/product/m/i/miyabi-order_healthy_food_dubai-saba_nigiri.jpg"},{name:"Engawa",img:"https://media-cdn.tripadvisor.com/media/photo-s/07/37/fd/0d/hirame-no-engawa-nigiri.jpg"},{name:"Kisu",img:"https://adelewong.files.wordpress.com/2015/01/img_1894_fotor.jpg"},{name:"Kohada",img:"https://i.pinimg.com/originals/07/b5/bc/07b5bcc95aff57b0ae7007641771e496.jpg"},{name:"Katsuo",img:"https://orange.japan-talk.com/images/jt/thumbnails/Katsuo-sushi-205.jpg"},{name:"Suzuki",img:"https://i.redd.it/34mb2jf87zx01.jpg"},{name:"Sayori",img:"https://media-cdn.tripadvisor.com/media/photo-s/07/0a/ec/b2/iwashi-nigiri.jpg"},{name:"Kuruma",img:"https://orange.japan-talk.com/images/jt/thumbnails/Kuruma-sushi-205.jpg"}],clickedTiles:[],message:""},a.shuffle=function(){for(var e=a.state.tiles,t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t},a._onSushiClick=function(e){if(a.state.clickedTiles.includes(e))a.setState({points:0,clickedTiles:[],message:"Ack, told ya not to do that, you just pooped your pants!"});else{var t="";a.state.points+1>=16?t="Holy shit, you ate all 16 sushi's!":a.state.points+1>=12?t="Your stomach is a black hole!":a.state.points+1>=8?t="Wow your abillity to discern sushi is impressive.":a.state.points+1>=4&&(t="Keep on chugging you goddamn beast!");var i=a.state.clickedTiles;i.push(e);var s=a.shuffle(),n=a.state.highScore;a.state.points===a.state.highScore&&(n=a.state.points+1),a.setState({tiles:s,points:a.state.points+1,clickedTiles:i,highScore:n,message:t})}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u,{message:this.state.message,currentPoint:this.state.points,highScore:this.state.highScore}),this.state.tiles.map(function(t,a){return s.a.createElement(p,{key:a,name:t.name,img:t.img,onsushiclick:function(){e._onSushiClick(t.name)}})}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.b15414ad.chunk.js.map