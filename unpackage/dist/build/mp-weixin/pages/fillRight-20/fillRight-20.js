(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fillRight-20/fillRight-20"],{"069d":function(t,e,n){"use strict";(function(t){n("c56e");a(n("66fd"));var e=a(n("a4a8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2c09":function(t,e,n){},a4a8:function(t,e,n){"use strict";n.r(e);var a=n("e512"),r=n("c427");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("a9a5");var c,i=n("f0c5"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"4d566f58",null,!1,a["a"],c);e["default"]=o.exports},a9a5:function(t,e,n){"use strict";var a=n("2c09"),r=n.n(a);r.a},aeaa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{subjectArr:[]}},onLoad:function(){this.calculate()},methods:{calculate:function(){this.subjectArr=[];var t=0;while(t<20){var e=!1,n=this.createNum(),a=this.createNum(),r=this.createOperator(),u=this.createFill(),c=void 0;"-"===r?(c=n-a,n>10&&n<=20&&c>=0&&(e=!0)):"+"===r&&(c=n+a,c>10&&c<=20&&(e=!0)),e&&(t++,this.subjectArr.push({result:c,num1:n,num2:a,operator:r,fill:u}))}},createNum:function(){return Math.floor(21*Math.random())},createOperator:function(){return Math.random()>.7?"+":"-"},createFill:function(){return Math.random()>.5?"num1":"num2"}}};e.default=a},c427:function(t,e,n){"use strict";n.r(e);var a=n("aeaa"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},e512:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}))}},[["069d","common/runtime","common/vendor"]]]);