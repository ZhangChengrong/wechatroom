webpackJsonp([0],{FUYF:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("xd7I"),a={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=t("C7Lr")({name:"App"},a,!1,function(e){t("UGr7")},null,null).exports,n=t("7LQH"),o={props:{message:{default:null},user:{default:null},userId:{default:""}},data:function(){return{}},computed:{userStr:function(){return 1===this.message.sysMsg.sysUser.length&&this.message.sysMsg.sysUser[0].userId===this.userId?"你":this.message.sysMsg.sysUser.map(function(e){return e.name}).join(",")}},created:function(){console.log(this.user)},methods:{messageClick:function(e){e.preventDefault(),2===e.button&&this.userId===this.user.userId&&this.$emit("revoke")}}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"message-box"},[e._m(0),e._v(" "),["1","2"].includes(e.message.type)?t("div",{staticClass:"message-body",class:{reverse:e.user&&e.userId===e.user.userId}},[t("div",{staticClass:"message-sender"},[t("div",{staticClass:"potrait-img"},[t("img",{attrs:{src:e.user.portrait,alt:""}})])]),e._v(" "),t("div",{staticClass:"message-info"},[e.userId!==e.user.userId?t("div",{staticClass:"messsage-username"},[t("span",[e._v(e._s(e.user.name))])]):e._e(),e._v(" "),t("div",{staticClass:"message-content",on:{contextmenu:e.messageClick}},["1"===e.message.type?t("p",[e._v(e._s(e.message.message))]):"2"===e.message.type?t("img",{attrs:{src:e.message.url,alt:""}}):e._e()])])]):t("div",{staticClass:"message-body"},[e.message.sysMsg?t("div",{staticClass:"message-sys"},["0"===e.message.sysMsg.sysType?t("span",[e._v(e._s(e.userStr)+"加入群聊。")]):"1"===e.message.sysMsg.sysType?t("span",[e._v(e._s(e.userStr)+"撤回了一条消息。")]):e._e()]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"message-header"},[s("span",{staticClass:"message-time"})])}]};var c={name:"room",components:{MessageBox:t("C7Lr")(o,m,!1,function(e){t("nDqI")},null,null).exports},props:{messageList:{default:function(){return[]}},userId:{default:"10001"},group:{default:function(){return{groupName:"空空如也",members:[]}}},loadTip:{default:"查看更多"},loadingTip:{default:"加载中"},isAll:{default:!1}},data:function(){return{timer:null,directionY:0,dom:null,loadingShow:!1}},computed:{userJson:function(){var e={};return this.group.members.forEach(function(s){e[s.userId+""]=s}),console.log(e),e}},mounted:function(){var e=this;this.dom=document.querySelector(".scroll"),this.dom.addEventListener("scroll",function(s){e.directionY=s.target.scrollTop}),this.dom.addEventListener("mousewheel",function(s){s.wheelDelta>0&&0===e.directionY&&e.loadMore()})},methods:{loadMore:function(){var e=this;this.isAll||this.loadingShow||(this.timer&&clearTimeout(this.timer),this.loadingShow=!0,this.timer=setTimeout(function(){e.$emit("loadMore"),e.loadingShow=!1},800))},revoke:function(e,s){this.$emit("revoke",{messsage:e,index:s,user:this.userJson[this.userId]})}},beforeDestroy:function(){this.dom.removeEventListener("scroll"),this.dom.removeEventListener("mousewheel")}},u={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"chat-room"},[t("div",{staticClass:"room-header"},[t("h3",[e._v(e._s(e.group.groupName||"聊天室")+"("+e._s(e.group.members.length)+")")])]),e._v(" "),t("div",{staticClass:"room-content"},[t("div",{staticClass:"room-message-wrap scroll"},[t("ul",{staticClass:"room-message-list"},[e.isAll?e._e():t("span",{staticClass:"load-tip",on:{click:e.loadMore}},[e._v(e._s(e.loadingShow?e.loadingTip:e.loadTip))]),e._v(" "),e._l(e.messageList,function(s,i){return t("li",{key:s.id,staticClass:"room-message-list-item"},[t("message-box",e._b({on:{revoke:function(t){return e.revoke(s,i)}}},"message-box",{message:s,user:e.userJson[s.sender],userId:e.userId},!1))],1)})],2)])])])},staticRenderFns:[]};var d={components:{Room:t("C7Lr")(c,u,!1,function(e){t("hXPU")},null,null).exports},data:function(){return{curUserId:"10001",txt:"",msgList:[{id:1,type:"1",message:"这是一条文字消息",time:"2019-11-19",sender:"10001"},{id:2,type:"2",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574161359253&di=d5299da4daec04f3915649dc59ead0a8&imgtype=0&src=http%3A%2F%2Fs06.lmbang.com%2FM00%2FA3%2FEA%2FecloA1tFv6WAUZ40ABOcQYyS9pE107.gif",message:"这是一条文字消息",time:"2019-11-19",sender:"10002"},{id:3,type:"0",time:"2019-11-19",sysMsg:{sysType:"0",sysUser:[{userId:"10003",name:"客服2",portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162663523&di=4fcc83095170f490c7e357c1c0131ce7&imgtype=0&src=http%3A%2F%2Fs01.lmbang.com%2FM00%2FA0%2FDD%2FecloD1tZ7mCAOFW6AABeITYTfqM028.jpg"}]}},{id:4,type:"1",message:"这是一条文字消息",time:"2019-11-19",sender:"10003"},{id:5,type:"1",message:"这是一条文字消息",time:"2019-11-19",sender:"10003"}],group:{groupName:"测试组",groupId:"23123123123",members:[{userId:"10001",name:"本人",portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574184754717&di=1c592095019f2584d8ba824783efc2a1&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-a3ee17c2edcac644c6cf63b481608a24_hd.jpg"},{userId:"10002",name:"客服1",portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162663523&di=2aeb4058d901995538f2a521985aa203&imgtype=0&src=http%3A%2F%2Fs08.lmbang.com%2FM00%2FAF%2F3C%2FecloD1umEbKAI03kAADJc5MjUh8984.jpg"},{userId:"10003",name:"客服2",portrait:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574184801903&di=fbda2241e862da72bcdbfd67e8778b38&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-2b3ce6f38455053894a3b7349a6b22a1_b.jpg"}]}}},methods:{getMoreMsg:function(){for(var e=(new Date).getTime(),s=0;s<10;s++)this.msgList.unshift({id:""+e+s,type:"1",message:"这是一条文字消息",time:"2019-11-19",sender:"10001"})},receiveMessage:function(e){this.msgList.push({id:(new Date).getTime(),type:e,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574161359253&di=d5299da4daec04f3915649dc59ead0a8&imgtype=0&src=http%3A%2F%2Fs06.lmbang.com%2FM00%2FA3%2FEA%2FecloA1tFv6WAUZ40ABOcQYyS9pE107.gif",message:"随机收到的一条数据，定时时间15s",time:"2019-11-19",sender:"10002"})},sendMessage:function(){this.txt&&(this.msgList.push({id:(new Date).getTime(),type:"1",message:this.txt,time:(new Date).toLocaleTimeString(),sender:this.curUserId}),this.txt="")},revokeMsg:function(e){this.msgList.splice(e.index,1,{id:(new Date).getTime(),type:"0",time:(new Date).toLocaleTimeString(),sysMsg:{sysType:"1",sysUser:[e.user]}})}},created:function(){var e=this,s="0";setInterval(function(){e.receiveMessage(s),s="0"===s?"1":"0"},15e3)}},l={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"main-content"},[t("div",{staticClass:"room-container"},[t("room",e._b({on:{loadMore:e.getMoreMsg,revoke:e.revokeMsg}},"room",{messageList:e.msgList,group:e.group,userId:e.curUserId,loadTip:"查看更多...",loadingTip:"加载中..."},!1))],1),e._v(" "),t("div",{staticClass:"textarea-container"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.txt,expression:"txt"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.txt},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.sendMessage(s)},change:e.sendMessage,input:function(s){s.target.composing||(e.txt=s.target.value)}}})])])},staticRenderFns:[]};var g=t("C7Lr")(d,l,!1,function(e){t("FUYF")},null,null).exports;i.a.use(n.a);var p=new n.a({routes:[{path:"/",name:"Main",component:g}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},UGr7:function(e,s){},hXPU:function(e,s){},nDqI:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.b81387622e3af4433e34.js.map