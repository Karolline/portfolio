(function(e){function t(t){for(var o,l,i=t[0],s=t[1],c=t[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);b&&b(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(o=!1)}o&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},a={app:0},n=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/portfolio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var b=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"148c":function(e,t,r){e.exports=r.p+"img/big-data.ab1434be.svg"},"16cd":function(e,t,r){e.exports=r.p+"img/browser.d278f0e7.svg"},"31bb":function(e,t,r){e.exports=r.p+"img/artificial-intelligence.d96a0df4.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("app-header"),r("router-view"),r("div",{staticStyle:{height:"1000px"}})],1)},n=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{toggleable:"sm",fixed:"top",id:"navbar"}},[r("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),r("b-navbar-brand",{attrs:{tag:"h1",href:"#"}},[e._v("김혜진")]),r("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item",{attrs:{href:"/portfolio/intro"}},[e._v("이력소개")]),r("b-nav-item",{attrs:{href:"#"}},[e._v("프로젝트")]),r("b-nav-item",{attrs:{href:"#"}},[e._v("블로그")]),r("b-nav-item",{attrs:{href:"https://github.com/Karolline",target:"_sub"}},[e._v("깃허브")]),r("b-nav-item",{attrs:{href:"#"}},[e._v("연락하기")])],1)],1)],1)},i=[],s={name:"AppHeader",methods:{}},c=s,b=r("2877"),f=Object(b["a"])(c,l,i,!1,null,null,null),p=f.exports,u={name:"app",components:{AppHeader:p}},d=u,m=(r("83ea"),Object(b["a"])(d,a,n,!1,null,null,null)),v=m.exports,x=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"content-div mt-5"},[r("collapse"),r("b-row",{staticClass:"mt-5"},[r("life-graph")],1)],1)},h=[],y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-row",{staticClass:"text-center"},[o("b-col",[o("img",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"browser-content",expression:"'browser-content'"}],attrs:{src:r("16cd")}})]),o("b-col",[o("img",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"big-data-content",expression:"'big-data-content'"}],attrs:{src:r("148c")}})]),o("b-col",[o("img",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"ai-content",expression:"'ai-content'"}],attrs:{src:r("31bb")}})])],1),o("b-row",{staticClass:"text-center mt-2"},[o("b-col",[e._v("\n            text1\n        ")]),o("b-col",[e._v("\n            text2\n        ")]),o("b-col",[e._v("\n            text3\n        ")])],1),o("b-row",{staticClass:"text-center mt-5"},[o("b-col",[o("b-collapse",{attrs:{id:"browser-content",accordion:"intro-accordion",visible:""}},[e._v("\n                text about browser\n                내용조금만쓰기\n                ")]),o("b-collapse",{attrs:{id:"big-data-content",accordion:"intro-accordion"}},[e._v("\n                text about big data\n                내용조금만쓰기\n                ")]),o("b-collapse",{attrs:{id:"ai-content",accordion:"intro-accordion"}},[e._v("\n                text about artificial intelligence\n                내용조금만쓰기\n                ")])],1)],1)],1)},w=[],_={name:"IntroCollapse"},O=_,j=Object(b["a"])(O,y,w,!1,null,null,null),k=j.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Plotly",{attrs:{data:e.data,layout:e.layout,displayModeBar:!1}})},C=[],M=r("04d1"),S=r("5de4"),T={name:"IntroLifeGraph",components:{Plotly:M["Plotly"]},data:function(){return{data:S.data,layout:S.layout}}},$=T,z=Object(b["a"])($,P,C,!1,null,null,null),E=z.exports,N={name:"Intro",components:{Collapse:k,LifeGraph:E}},I=N,J=Object(b["a"])(I,g,h,!1,null,null,null),A=J.exports;o["default"].use(x["a"]);var D=[{path:"/portfolio/intro",name:"intro",component:A}],G=new x["a"]({mode:"history",routes:D}),H=G,L=r("5f5b");r("f9e3"),r("2dd8");o["default"].config.productionTip=!1,o["default"].use(L["a"]),new o["default"]({router:H,render:function(e){return e(v)}}).$mount("#app")},"5de4":function(e){e.exports=JSON.parse('{"data":[{"name":"","x":["2017-07-24","2018-06-27","2018-09-10","2019-02-10","2019-04-01","2020-01-01"],"y":[0,0,0,0,0,0],"mode":"lines+markers","textposition":"bottom center","type":"scatter","hovertemplateNotUsing":["코리아세븐 입사","코리아세븐 퇴사","인공지능 개발자 양성과정 입과","인공지능 개발자 양성과정 수료","씨에스리 입사","재직중"],"hovertemplate":[],"marker":{"symbol":"star-diamond-dot","size":[10,10,10,10,10,10],"color":"rgb(247, 170, 166)"},"line":{"color":"rgb(224, 205, 235)","width":3}},{"name":"","x":["2017-07-24","2018-06-27"],"y":[0.5,0.5],"mode":"lines+markers","textposition":"bottom center","type":"scatter","hovertemplate":[" <br>롯데그룹 편의점계열사의<br>영업관리자로 입사하여,<br>현장근무(점장)를<br>11개월간 하였습니다.<br> "," <br>현장에서 각종 프로세스를<br>IT시스템으로 자동화시키는 꿈을 꾸게 되어<br>직무변경을 위해 퇴사를 감행하였습니다.<br> "],"marker":{"symbol":"star-diamond-dot","size":[10,10,10,10,10,10],"color":"#99e1e5"},"line":{"color":"#99e1e5","width":15}},{"name":"","x":["2018-09-10","2019-02-10"],"y":[1,1],"mode":"lines+markers","textposition":"bottom center","type":"scatter","hovertemplate":[" <br>머시기 저시기<br> "," <br>머시기 저시기<br> "],"marker":{"symbol":"star-diamond-dot","size":[10,10,10,10,10,10],"color":"#b2e4d5"},"line":{"color":"#b2e4d5","width":15}},{"name":"","x":["2019-04-01","2020-01-01"],"y":[1.5,1.5],"mode":"lines+markers","textposition":"bottom center","type":"scatter","hovertemplate":[" <br>머시기 저시기<br> "," <br>머시기 저시기<br> "],"marker":{"symbol":"star-diamond-dot","size":[10,10,10,10,10,10],"color":"#c6cfff"},"line":{"color":"#c6cfff","width":15}}],"layout":{"title":"My graph","width":1200,"height":600,"paper_bgcolor":"rgba(255, 255, 255, 0)","plot_bgcolor":"rgba(255, 255, 255, 0.2)","xaxis":{"visible":false,"position":0.1,"range":[1496242800000,1582988400000],"rangeMemo":"[new Date(2017, 5, 1).getTime() , new Date(2020, 2, 1).getTime()]"},"yaxis":{"visible":false,"range":[-0.5,2]},"annotations":[{"x":"2017-07-24","y":-0.25,"xref":"x","yref":"y","text":"17`07<br><br>코리아세븐<br>입사","showarrow":false},{"x":"2018-06-20","y":-0.25,"xref":"x","yref":"y","text":"18`06<br><br>코리아세븐<br>퇴사","showarrow":false},{"x":"2018-09-10","y":-0.25,"xref":"x","yref":"y","text":"18`09<br><br>인공지능 개발자<br>양성과정 입과","showarrow":false},{"x":"2019-01-31","y":-0.25,"xref":"x","yref":"y","text":"19`02<br><br>인공지능 개발자<br>양성과정 수료","showarrow":false},{"x":"2019-04-15","y":-0.25,"xref":"x","yref":"y","text":"19`04<br><br>씨에스리<br>입사","showarrow":false},{"x":"2020-01-01","y":-0.2,"xref":"x","yref":"y","text":"20`01<br><br><br>재직중","showarrow":false}],"hoverdistance":-1,"hoverlabel":{"bordercolor":"#f5f5f5","font":{"size":13,"color":"#000"}},"showlegend":false,"hovermode":"closest"}}')},"83ea":function(e,t,r){"use strict";var o=r("f490"),a=r.n(o);a.a},f490:function(e,t,r){}});
//# sourceMappingURL=app.5bc9f1bf.js.map