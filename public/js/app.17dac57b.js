(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],o[s]&&f.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"1f57":function(t,e,n){"use strict";var a=n("49bb"),o=n.n(a);o.a},"30db":function(t,e,n){"use strict";var a=n("3481"),o=n.n(a);o.a},3481:function(t,e,n){},4459:function(t,e,n){},"49bb":function(t,e,n){},5426:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("96dd"),n("a60a"),n("e783"),n("8b1f");var a=n("6e6d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"material-kit"}},[n("div",{class:{"nav-open":t.NavbarStore.showNavbar}},[n("router-view",{attrs:{name:"header"}}),n("div",[n("router-view")],1),n("router-view",{attrs:{name:"footer"}})],1)])},i=[],s=n("4e82"),r={},l=Object(s["a"])(r,o,i,!1,null,null,null),c=l.exports,u=n("3bc2"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("div",[n("books"),n("home")],1)])])},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"books"},[n("h3",[t._v(t._s(t.title))]),n("md-button",{staticClass:"md-primary md-sm",on:{click:function(e){t.drawer=!0}}},[t._v("选择单词本")]),n("el-drawer",{attrs:{title:"单词本","custom-class":"books-drawer",visible:t.drawer,direction:t.direction,size:"540px"},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"drawer-container"},[n("el-table",{attrs:{data:t.gridData}},[n("el-table-column",{attrs:{property:"display_name",label:"文件",width:"200"}}),n("el-table-column",{attrs:{property:"create_dt",label:"日期",width:"150"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("md-button",{staticClass:"md-success md-sm",on:{click:function(n){return t.handleUse(e.$index,e.row)}}},[t._v("使用")]),n("md-button",{staticClass:"md-danger md-sm",on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticStyle:{height:"100px"}}),n("span",[t._v("上传新的单词本")]),n("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,drag:"",action:"/api/book","on-success":t.uploadSuccess,"on-error":t.uploadFail,multiple:""}},[n("i",{staticClass:"el-icon-upload"}),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])])])],1)])],1)},h=[],m=new a["default"],v={data:function(){return{title:"请先选择单词本",drawer:!1,direction:"ltr",gridData:[]}},ready:function(){this.getList()},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$http.get("/book").then((function(e){var n=e.body;1==n.success&&(t.gridData=n.result)}),(function(t){console.error(t)}))},handleUse:function(t,e){var n=e.id;this.getBook(n),this.drawer=!1,m.$emit("handleUseBook",n)},handleDelete:function(t,e){var n=this,a="/book/"+e.id;this.$http.delete(a).then((function(t){n.getList()}),(function(t){console.error(t)}))},getBook:function(t){var e=this,n="/book/"+t;this.$http.get(n).then((function(t){var n=t.body;1==n.success&&(e.title=n.result.display_name)}),(function(t){console.error(t)}))},uploadSuccess:function(t,e,n){console.log("upload success"),console.log(e);var a=this;a.getList()},uploadFail:function(){console.log("upload fail")},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},handleEdit:function(t,e){console.log(t,e)}}},b=v,g=(n("1f57"),Object(s["a"])(b,p,h,!1,null,null,null)),y=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("label"),n("div",{staticClass:"my-chinese-lbl"},[n("label",[t._v(t._s(t.curChinese))])]),n("md-field",[n("label",[t._v("请输入内容")]),n("md-input",{attrs:{clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onInputChange(e)},input:function(e){return t.onInputChange(e)}},model:{value:t.word_input,callback:function(e){t.word_input=e},expression:"word_input"}}),n("span",{staticClass:"md-helper-text"},[t._v("英文单词")])],1),n("div",{staticClass:"my-next-word"},[n("md-button",{staticClass:"md-primary",on:{click:function(e){return t.onClickNext()}}},[t._v("下一个")])],1),t.classicModal?n("modal",{on:{close:function(e){t.classicModal=!1}}},[n("template",{slot:"header"},[n("h4",{staticClass:"modal-title"},[t._v("评测结果")]),n("md-button",{staticClass:"md-simple md-just-icon md-round modal-default-button",on:{click:function(e){t.classicModal=!1}}},[n("md-icon",[t._v("clear")])],1)],1),n("template",{slot:"body"},[n("p",[t._v(t._s(t.resultContent))])]),n("template",{slot:"footer"},[n("md-button",{staticClass:"md-danger md-simple",on:{click:function(e){t.classicModal=!1}}},[t._v("Close")])],1)],2):t._e()],1)},w=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",[n("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[n("i",{class:t.icon}),n("p",[t._v(t._s(t.title))])])]),t._t("default")],2)},x=[],k={name:"drop-down",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},P=k,O=Object(s["a"])(P,C,x,!1,null,null,null),$=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.styles},[t._t("default")],2)},D=[];function S(t,e,n){var a;return function(){var o=this,i=arguments;clearTimeout(a),a=setTimeout((function(){a=null,n||t.apply(o,i)}),e),n&&!a&&t.apply(o,i)}}var T={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,n=S((function(){return e.handleScroll(t)}),this.debounceTimeout);n()}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}}))}},N=T,B=Object(s["a"])(N,j,D,!1,null,null,null),L=B.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"pagination",class:t.paginationClass},[n("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:n("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[n("a",{staticClass:"page-link",on:{click:function(n){return t.changePage(e)}}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:n("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},M=[],I=(n("8f42"),n("40c5"),n("23cc"),{name:"pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var n=[],a=t;a<=e;a++)n.push(a);return n},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}}),A=I,W=Object(s["a"])(A,E,M,!1,null,null,null),F=(W.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),U=[],H=(n("efce"),n("4634"),n("ed8b"),n("97a3")),J=n("4788"),R=n.n(J);function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach((function(e){Object(H["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q={name:"slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;R.a.create(this.$el,Y({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",(function(){var n=e.get();n!==t.value&&t.$emit("input",n)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var n=this.$el.noUiSlider,a=n.get();t!==e&&a!==t&&(Array.isArray(a)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,n){return e===t[n]}))&&n.set(t):n.set(t))}}},G=q,K=Object(s["a"])(G,F,U,!1,null,null,null),Q=(K.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)}),V=[],X={name:"badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}},Z=X,tt=Object(s["a"])(Z,Q,V,!1,null,null,null),et=(tt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[n("md-card-content",[t._t("content")],2)],1)}),nt=[],at={name:"nav-tabs-card",props:{noLabel:Boolean,tabsPlain:Boolean}},ot=at,it=Object(s["a"])(ot,et,nt,!1,null,null,null),st=(it.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[n("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),n("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),n("md-card-content",[t._t("description"),t._t("inputs")],2),n("md-card-actions",[t._t("footer")],2)],1)}),rt=[],lt={name:"login-card",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},ct=lt,ut=Object(s["a"])(ct,st,rt,!1,null,null,null),dt=(ut.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[n("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),n("md-card-content",[n("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,a){var o;return n("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[a])},(o={},o[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[a]),o)],on:{click:function(e){return t.switchPanel(t.tabName[a])}}},[t._v("\n        "+t._s(t.tabName[a])+"\n        "),t.navPillsIcons?n("md-icon",[t._v(t._s(t.tabIcon[a]))]):t._e()],1)})),1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"tab-content"},t._l(t.tabName,(function(e,a){return t.isActivePanel(t.tabName[a])?n("div",{key:e,class:t.getTabContent(a+1)},[t._t(t.getTabContent(a+1),[t._v("\n            This is the default text!\n          ")])],2):t._e()})),0)])],1)],1)}),ft=[],pt={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}},ht=pt,mt=Object(s["a"])(ht,dt,ft,!1,null,null,null),vt=(mt.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header")],2),n("div",{staticClass:"modal-body text-center"},[t._t("body")],2),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),bt=[],gt={name:"modal",methods:{closeModal:function(){this.$emit("close")}}},yt=gt,_t=(n("30db"),Object(s["a"])(yt,vt,bt,!1,null,null,null)),wt=_t.exports,Ct={components:{Modal:wt},data:function(){return{curWordList:[],curWord:"",curChinese:"{这里是中文名称}",curIndex:0,word_input:"",answer:[],classicModal:!1,resultContent:""}},mounted:function(){var t=this;m.$on("handleUseBook",(function(e){t.getBookWord(e)}))},methods:{onClickNext:function(){console.log("click next"),this.answer.push(this.word_input),this.curIndex+1>=this.curWordList.length?(this.calculateResult(),this.classicModal=!0):(this.curIndex=this.curIndex+1,this.curWord=this.curWordList[this.curIndex],this.getTranslation(),this.word_input="")},getBookWord:function(t){var e=this,n="/book/words/"+t;this.$http.get(n).then((function(t){var n=t.body;1==n.success&&(e.curIndex=0,e.curWordList=n.result,e.curWord=e.curWordList[e.curIndex],e.answer=[],e.getTranslation())}),(function(t){console.error(t)}))},getTranslation:function(){var t=this,e="/search?word=".concat(this.curWord);this.$http.get(e).then((function(e){var n=e.body;if(1==n.success){var a="".concat(n.result,"（").concat(t.curIndex+1,"/").concat(t.curWordList.length,"）");t.curChinese=a}}))},onInputChange:function(t){},calculateResult:function(){for(var t=0,e=0;e<this.curWordList.length;e++){var n=this.curWordList[e],a=this.answer[e];n&&a&&n.trim()==a.trim()&&t++}var o=t.toFixed(2)/this.curWordList.length.toFixed(2)*100,i="恭喜你答对了".concat(t,"道题，您的得分为：").concat(o.toFixed(2));this.resultContent=i}}},xt=Ct,kt=(n("a4ae"),Object(s["a"])(xt,_,w,!1,null,null,null)),Pt=kt.exports,Ot={components:{books:y,home:Pt},data:function(){return{bookId:""}},methods:{handleUseBook:function(t){console.log("get child value:"+t),this.bookId=t}}},$t=Ot,jt=(n("cb9d"),Object(s["a"])($t,d,f,!1,null,null,null)),Dt=jt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},Tt=[],Nt={},Bt=Nt,Lt=Object(s["a"])(Bt,St,Tt,!1,null,null,null),Et=Lt.exports;a["default"].use(u["a"]);var Mt=new u["a"]({routes:[{path:"/",name:"word",components:{default:Dt,header:Et,footer:Et},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),It=n("e57d"),At=n.n(It),Wt=(n("4ca8"),n("60b6"),n("4459"),n("a3cf")),Ft={install:function(t){t.directive("click-outside",Wt["directive"])}},Ut=Ft,Ht={install:function(t){t.mixin({mounted:function(){var t=this.$options.bodyClass;t&&document.body.classList.add(t)},beforeDestroy:function(){var t=this.$options.bodyClass;t&&document.body.classList.remove(t)}})}},Jt=Ht,Rt=(n("7cfd"),n("ebe4")),zt={install:function(t){t.component("drop-down",$),t.component(L.name,L),t.component("v-popover",Rt["a"])}},Yt=zt,qt=n("5cbe"),Gt=n("8c6f"),Kt=n.n(Gt),Qt={install:function(t){t.use(At.a),t.use(Ut),t.use(Jt),t.use(Yt),t.use(Kt.a),t.use(qt["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}},Vt=n("7893"),Xt=n.n(Vt),Zt=(n("610a"),n("5a4b"));a["default"].config.productionTip=!1,a["default"].use(Qt),a["default"].use(Xt.a),a["default"].use(Zt["a"]),a["default"].component(wt);var te={showNavbar:!1};a["default"].mixin({data:function(){return{NavbarStore:te}}}),new a["default"]({router:Mt,render:function(t){return t(c)}}).$mount("#app")},"60b6":function(t,e,n){},a4ae:function(t,e,n){"use strict";var a=n("5426"),o=n.n(a);o.a},bc26:function(t,e,n){},cb9d:function(t,e,n){"use strict";var a=n("bc26"),o=n.n(a);o.a}});
//# sourceMappingURL=app.17dac57b.js.map