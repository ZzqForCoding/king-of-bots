(function(){"use strict";var e={321:function(e,t,s){var a=s(9242),o=s(3396);function n(e,t,s,a,n,r){const l=(0,o.up)("NavBar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(c)],64)}var r=s(7139);const l={class:"navbar navbar-expand-lg navbar-dark bg-dark"},c={class:"container"},i=(0,o.Uk)("King Of Bots"),d=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarText"},p={class:"navbar-nav me-auto mb-2 mb-lg-0"},_={class:"nav-item"},m=(0,o.Uk)("对战"),h={class:"nav-item"},b=(0,o.Uk)("对局列表"),g={class:"nav-item"},v=(0,o.Uk)("排行榜"),f={key:0,class:"navbar-nav"},w={class:"nav-item dropdown"},k={class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},y={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},x=(0,o.Uk)("我的Bot"),I=(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})],-1),C={key:1,class:"navbar-nav"},j={class:"nav-item"},D=(0,o.Uk)(" 登录 "),z={class:"nav-item"},A=(0,o.Uk)(" 注册 ");function M(e,t,s,a,n,M){const S=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",c,[(0,o.Wm)(S,{class:"navbar-brand",to:{name:"home"}},{default:(0,o.w5)((()=>[i])),_:1}),d,(0,o._)("div",u,[(0,o._)("ul",p,[(0,o._)("li",_,[(0,o.Wm)(S,{class:(0,r.C_)("pk_index"==a.route_name?"nav-link active":"nav-link"),to:{name:"pk_index"}},{default:(0,o.w5)((()=>[m])),_:1},8,["class"])]),(0,o._)("li",h,[(0,o.Wm)(S,{class:(0,r.C_)("record_index"==a.route_name?"nav-link active":"nav-link"),to:{name:"record_index"}},{default:(0,o.w5)((()=>[b])),_:1},8,["class"])]),(0,o._)("li",g,[(0,o.Wm)(S,{class:(0,r.C_)("ranklist_index"==a.route_name?"nav-link active":"nav-link"),to:{name:"ranklist_index"}},{default:(0,o.w5)((()=>[v])),_:1},8,["class"])])]),e.$store.state.user.is_login?((0,o.wg)(),(0,o.iD)("ul",f,[(0,o._)("li",w,[(0,o._)("a",k,(0,r.zw)(e.$store.state.user.username),1),(0,o._)("ul",y,[(0,o._)("li",null,[(0,o.Wm)(S,{class:"dropdown-item",to:{name:"user_bot_index"}},{default:(0,o.w5)((()=>[x])),_:1})]),I,(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"#",onClick:t[0]||(t[0]=(...e)=>a.logout&&a.logout(...e))},"退出")])])])])):e.$store.state.user.pulling_info?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("ul",C,[(0,o._)("li",j,[(0,o.Wm)(S,{class:"nav-link",to:{name:"user_account_login"},role:"button"},{default:(0,o.w5)((()=>[D])),_:1})]),(0,o._)("li",z,[(0,o.Wm)(S,{class:"nav-link",to:{name:"user_account_register"},role:"button"},{default:(0,o.w5)((()=>[A])),_:1})])]))])])])}var S=s(2483),O=s(65),U={setup(){const e=(0,O.oR)(),t=(0,S.yj)();let s=(0,o.Fl)((()=>t.name));const a=()=>{e.dispatch("logout")};return{route_name:s,logout:a}}},B=s(89);const H=(0,B.Z)(U,[["render",M]]);var $=H,P=s(5654),q={name:"App",components:{NavBar:$},setup(){}};const R=(0,B.Z)(q,[["render",n]]);var L=R;const T={key:3,class:"user-color"},W={key:4,class:"user-color"};function Z(e,t,s,a,n,r){const l=(0,o.up)("PlayGround"),c=(0,o.up)("MatchGround"),i=(0,o.up)("ResultBoard");return(0,o.wg)(),(0,o.iD)(o.HY,null,["playing"===e.$store.state.pk.status?((0,o.wg)(),(0,o.j4)(l,{key:0})):(0,o.kq)("",!0),"matching"===e.$store.state.pk.status?((0,o.wg)(),(0,o.j4)(c,{key:1})):(0,o.kq)("",!0),"none"!=e.$store.state.pk.loser?((0,o.wg)(),(0,o.j4)(i,{key:2})):(0,o.kq)("",!0),"playing"===e.$store.state.pk.status&&parseInt(e.$store.state.user.id)===parseInt(e.$store.state.pk.a_id)?((0,o.wg)(),(0,o.iD)("div",T," 左下角")):(0,o.kq)("",!0),"playing"===e.$store.state.pk.status&&parseInt(e.$store.state.user.id)===parseInt(e.$store.state.pk.b_id)?((0,o.wg)(),(0,o.iD)("div",W," 右上角")):(0,o.kq)("",!0)],64)}const F={class:"playground"};function G(e,t,s,a,n,r){const l=(0,o.up)("GameMap");return(0,o.wg)(),(0,o.iD)("div",F,[(0,o.Wm)(l)])}const V={class:"gamemap",ref:"parent"},E={ref:"canvas",tabindex:"0"};function N(e,t,s,a,n,r){return(0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("canvas",E,null,512)],512)}const K=[];class Y{constructor(){K.push(this),this.has_called_start=!1,this.timedelta=0}start(){}update(){}on_destroy(){}destroy(){this.on_destroy();for(let e in K){const t=K[e];if(t===this){K.splice(e);break}}}}let J;const Q=e=>{for(let t of K)t.has_called_start?(t.timedelta=e-J,t.update()):(t.has_called_start=!0,t.start());J=e,requestAnimationFrame(Q)};requestAnimationFrame(Q);class X extends Y{constructor(e,t,s){super(),this.r=e,this.c=t,this.gamemap=s,this.color="#B37226"}update(){this.render()}render(){const e=this.gamemap.L,t=this.gamemap.ctx;t.fillStyle=this.color,t.fillRect(this.c*e,this.r*e,e,e)}}class ee{constructor(e,t){this.r=e,this.c=t,this.x=t+.5,this.y=e+.5}}class te extends Y{constructor(e,t){super(),this.id=e.id,this.color=e.color,this.gamemap=t,this.cells=[new ee(e.r,e.c)],this.next_cell=null,this.speed=5,this.direction=-1,this.status="idle",this.dr=[-1,0,1,0],this.dc=[0,1,0,-1],this.step=0,this.eps=.01,this.eye_direction=0,1===this.id&&(this.eye_direction=2),this.eye_dx=[[-1,1],[1,1],[1,-1],[-1,-1]],this.eye_dy=[[-1,-1],[-1,1],[1,1],[-1,1]]}start(){}set_direction(e){this.direction=e}check_tail_increasing(){return this.step<=10||this.step%3==1}next_step(){const e=this.direction;this.next_cell=new ee(this.cells[0].r+this.dr[e],this.cells[0].c+this.dc[e]),this.eye_direction=e,this.direction=-1,this.status="move",this.step++;const t=this.cells.length;for(let s=t;s>0;s--)this.cells[s]=JSON.parse(JSON.stringify(this.cells[s-1]))}update_move(){const e=this.next_cell.x-this.cells[0].x,t=this.next_cell.y-this.cells[0].y,s=Math.sqrt(e*e+t*t);if(s<this.eps)this.cells[0]=this.next_cell,this.next_cell=null,this.status="idle",this.check_tail_increasing()||this.cells.pop();else{const a=this.speed*this.timedelta/1e3;if(this.cells[0].x+=a*e/s,this.cells[0].y+=a*t/s,!this.check_tail_increasing()){const e=this.cells.length,t=this.cells[e-1],o=this.cells[e-2],n=o.x-t.x,r=o.y-t.y;t.x+=a*n/s,t.y+=a*r/s}}}update(){"move"===this.status&&this.update_move(),this.render()}render(){const e=this.gamemap.L,t=this.gamemap.ctx;t.fillStyle=this.color,"die"===this.status&&(t.fillStyle="white");for(const s of this.cells)t.beginPath(),t.arc(s.x*e,s.y*e,e/2*.8,0,2*Math.PI),t.fill();for(let s=1;s<this.cells.length;s++){const a=this.cells[s-1],o=this.cells[s];Math.abs(a.x-o.x)<this.eps&&Math.abs(a.y-o.y)<this.eps||(Math.abs(a.x-o.x)<this.eps?t.fillRect((a.x-.5+.1)*e,Math.min(a.y,o.y)*e,.8*e,Math.abs(a.y-o.y)*e):t.fillRect(Math.min(a.x,o.x)*e,(a.y-.5+.1)*e,Math.abs(a.x-o.x)*e,.8*e))}t.fillStyle="black";for(let s=0;s<2;s++){const a=(this.cells[0].x+.15*this.eye_dx[this.eye_direction][s])*e,o=(this.cells[0].y+.15*this.eye_dy[this.eye_direction][s])*e;t.beginPath(),t.arc(a,o,.05*e,0,2*Math.PI),t.fill()}}}class se extends Y{constructor(e,t,s){super(),this.ctx=e,this.parent=t,this.store=s,this.L=0,this.rows=13,this.cols=14,this.inner_walls_count=20,this.walls=[],this.snakes=[new te({id:0,color:"#4876EC",r:this.rows-2,c:1},this),new te({id:1,color:"#F94848",r:1,c:this.cols-2},this)]}create_walls(){const e=this.store.state.pk.gamemap;for(let t=0;t<this.rows;t++)for(let s=0;s<this.cols;s++)e[t][s]&&this.walls.push(new X(t,s,this))}start(){this.create_walls(),this.add_listening_events()}add_listening_events(){if(this.store.state.record.is_record){let e=0;const t=this.store.state.record.a_steps,s=this.store.state.record.b_steps,a=this.store.state.record.record_loser,[o,n]=this.snakes,r=setInterval((()=>{e>=t.length-1?("all"!==a&&"A"!==a||(o.status="die"),"all"!==a&&"B"!==a||(n.status="die"),clearInterval(r)):(o.set_direction(parseInt(t[e])),n.set_direction(parseInt(s[e]))),e++}),300)}else this.ctx.canvas.focus(),this.ctx.canvas.addEventListener("keydown",(e=>{let t=-1;"w"===e.key?t=0:"d"===e.key?t=1:"s"===e.key?t=2:"a"===e.key&&(t=3),t>=0&&this.store.state.pk.socket.send(JSON.stringify({event:"move",direction:t}))}))}update_size(){this.L=parseInt(Math.min(this.parent.clientWidth/this.cols,this.parent.clientHeight/this.rows)),this.ctx.canvas.width=this.L*this.cols,this.ctx.canvas.height=this.L*this.rows}check_ready(){for(const e of this.snakes){if("idle"!==e.status)return!1;if(-1===e.direction)return!1}return!0}next_step(){for(const e of this.snakes)e.next_step()}check_valid(e){for(const t of this.walls)if(t.r===e.r&&t.c===e.c)return!1;for(const t of this.snakes){let s=t.cells.length;t.check_tail_increasing()||s--;for(let a=0;a<s;a++)if(t.cells[a].r===e.r&&t.cells[a].c===e.c)return!1}return!0}update(){this.update_size(),this.check_ready()&&this.next_step(),this.render()}render(){const e="#AAD751",t="#A2D149";for(let s=0;s<this.rows;s++)for(let a=0;a<this.cols;a++)this.ctx.fillStyle=(s+a)%2==0?e:t,this.ctx.fillRect(a*this.L,s*this.L,this.L,this.L)}}var ae=s(4870),oe={setup(){const e=(0,O.oR)();let t=(0,ae.iH)(null),s=(0,ae.iH)(null);return(0,o.bv)((()=>{e.commit("updateGameObject",new se(s.value.getContext("2d"),t.value,e))})),{parent:t,canvas:s}}};const ne=(0,B.Z)(oe,[["render",N],["__scopeId","data-v-0e7be0fe"]]);var re=ne,le={components:{GameMap:re}};const ce=(0,B.Z)(le,[["render",G],["__scopeId","data-v-464dc0c0"]]);var ie=ce;const de=e=>((0,o.dD)("data-v-56a69323"),e=e(),(0,o.Cn)(),e),ue={class:"matchground"},pe={class:"row"},_e={class:"col-4"},me={class:"user-photo"},he=["src"],be={class:"user-username"},ge={class:"col-4"},ve={class:"user-select-bot"},fe=de((()=>(0,o._)("option",{value:"-1",selected:""},"亲自出马",-1))),we=["value"],ke={class:"col-4"},ye={class:"user-photo"},xe=["src"],Ie={class:"user-username"},Ce={class:"col-12",style:{"text-align":"center","padding-top":"15vh"}};function je(e,t,s,n,l,c){return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o._)("div",pe,[(0,o._)("div",_e,[(0,o._)("div",me,[(0,o._)("img",{src:e.$store.state.user.photo,alt:""},null,8,he)]),(0,o._)("div",be,(0,r.zw)(e.$store.state.user.username),1)]),(0,o._)("div",ge,[(0,o._)("div",ve,[(0,o.wy)((0,o._)("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[0]||(t[0]=e=>n.select_bot=e)},[fe,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.bots,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.id},(0,r.zw)(e.title),9,we)))),128))],512),[[a.bM,n.select_bot]])])]),(0,o._)("div",ke,[(0,o._)("div",ye,[(0,o._)("img",{src:e.$store.state.pk.opponent_photo,alt:""},null,8,xe)]),(0,o._)("div",Ie,(0,r.zw)(e.$store.state.pk.opponent_username),1)]),(0,o._)("div",Ce,[(0,o._)("button",{onClick:t[1]||(t[1]=(...e)=>n.click_match_btn&&n.click_match_btn(...e)),type:"button",class:"btn btn-warning btn-lg"},(0,r.zw)(n.match_btn_info),1)])])])}var De=s(7387),ze=s.n(De),Ae={setup(){const e=(0,O.oR)();let t=(0,ae.iH)("开始匹配"),s=(0,ae.iH)([]),a=(0,ae.iH)("-1");const o=()=>{"开始匹配"===t.value?(t.value="取消",e.state.pk.socket.send(JSON.stringify({event:"start-matching",bot_id:a.value}))):(t.value="开始匹配",e.state.pk.socket.send(JSON.stringify({event:"stop-matching"})))},n=()=>{ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/bot/getlist/",type:"get",headers:{Authorization:"Bearer "+e.state.user.token},success(e){s.value=e}})};return n(),{match_btn_info:t,click_match_btn:o,bots:s,select_bot:a}}};const Me=(0,B.Z)(Ae,[["render",je],["__scopeId","data-v-56a69323"]]);var Se=Me;const Oe={class:"result-board"},Ue={key:0,class:"result-board-text"},Be={key:1,class:"result-board-text"},He={key:2,class:"result-board-text"},$e={key:3,class:"result-board-text"},Pe={class:"result-board-btn"};function qe(e,t,s,a,n,r){return(0,o.wg)(),(0,o.iD)("div",Oe,["all"===e.$store.state.pk.loser?((0,o.wg)(),(0,o.iD)("div",Ue," Draw ")):"A"===e.$store.state.pk.loser&&e.$store.state.pk.a_id===parseInt(e.$store.state.user.id)?((0,o.wg)(),(0,o.iD)("div",Be," Lose ")):"B"===e.$store.state.pk.loser&&e.$store.state.pk.b_id===parseInt(e.$store.state.user.id)?((0,o.wg)(),(0,o.iD)("div",He," Lose ")):((0,o.wg)(),(0,o.iD)("div",$e," Win ")),(0,o._)("div",Pe,[(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>a.restart&&a.restart(...e)),type:"button",class:"btn btn-warning btn-lg"}," 再来! ")])])}var Re={setup(){const e=(0,O.oR)(),t=()=>{e.commit("updateStatus","matching"),e.commit("updateLoser","none"),e.commit("updateOpponent",{username:"我的对手",photo:"https://cdn.acwing.com/media/article/image/2022/08/09/1_1db2488f17-anonymous.png"})};return{restart:t}}};const Le=(0,B.Z)(Re,[["render",qe],["__scopeId","data-v-94b4a5e0"]]);var Te=Le,We={components:{PlayGround:ie,MatchGround:Se,ResultBoard:Te},setup(){const e=(0,O.oR)(),t=`wss://app3222.acapp.acwing.com.cn:20022/websocket/${e.state.user.token}/`;e.commit("updateLoser","none"),e.commit("updateIsRecord",!1);let s=null;(0,o.bv)((()=>{e.commit("updateOpponent",{username:"我的对手",photo:"https://cdn.acwing.com/media/article/image/2022/08/09/1_1db2488f17-anonymous.png"}),s=new WebSocket(t),s.onopen=()=>{console.log("connected!"),e.commit("updateSocket",s)},s.onmessage=t=>{const s=JSON.parse(t.data);if("start-matching"===s.event)e.commit("updateOpponent",{username:s.opponent_username,photo:s.opponent_photo}),setTimeout((()=>{e.commit("updateStatus","playing")}),2e3),e.commit("updateGame",s.game);else if("move"===s.event){console.log(s);const t=e.state.pk.gameObject,[a,o]=t.snakes;a.set_direction(s.a_direction),o.set_direction(s.b_direction)}else if("result"===s.event){console.log(s);const t=e.state.pk.gameObject,[a,o]=t.snakes;"all"!==s.loser&&"A"!==s.loser||(a.status="die"),"all"!==s.loser&&"B"!==s.loser||(o.status="die"),e.commit("updateLoser",s.loser)}},s.onclose=()=>{console.log("disconnected!")}})),(0,o.Ah)((()=>{s.close(),e.commit("updateStatus","matching")}))}};const Ze=(0,B.Z)(We,[["render",Z],["__scopeId","data-v-249da32a"]]);var Fe=Ze;const Ge=e=>((0,o.dD)("data-v-42889511"),e=e(),(0,o.Cn)(),e),Ve={class:"table table-striped table-hover",style:{"text-align":"center"}},Ee=Ge((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"玩家"),(0,o._)("th",null,"天梯分")])],-1))),Ne=["src"],Ke=(0,o.Uk)("   "),Ye={class:"user-username"},Je={"aria-label":"..."},Qe={class:"pagination",style:{float:"right"}},Xe=Ge((()=>(0,o._)("a",{class:"page-link",href:"#"},"前一页",-1))),et=[Xe],tt=["onClick"],st={class:"page-link",href:"#"},at=Ge((()=>(0,o._)("a",{class:"page-link",href:"#"},"后一页",-1))),ot=[at];function nt(e,t,s,a,n,l){const c=(0,o.up)("ContentField");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[(0,o._)("table",Ve,[Ee,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.users,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,[(0,o._)("img",{src:e.photo,alt:"",class:"user-photo"},null,8,Ne),Ke,(0,o._)("span",Ye,(0,r.zw)(e.username),1)]),(0,o._)("td",null,(0,r.zw)(e.rating),1)])))),128))])]),(0,o._)("nav",Je,[(0,o._)("ul",Qe,[(0,o._)("li",{class:"page-item",onClick:t[0]||(t[0]=e=>a.click_page(-2))},et),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,r.C_)("page-item "+e.is_active),key:e.number,onClick:t=>a.click_page(e.number)},[(0,o._)("a",st,(0,r.zw)(e.number),1)],10,tt)))),128)),(0,o._)("li",{class:"page-item",onClick:t[1]||(t[1]=e=>a.click_page(-1))},ot)])])])),_:1})}const rt={class:"container content-field"},lt={class:"card"},ct={class:"card-body"};function it(e,t){return(0,o.wg)(),(0,o.iD)("div",rt,[(0,o._)("div",lt,[(0,o._)("div",ct,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])])}const dt={},ut=(0,B.Z)(dt,[["render",it],["__scopeId","data-v-412b2316"]]);var pt=ut,_t={components:{ContentField:pt},setup(){const e=(0,O.oR)();let t=(0,ae.iH)([]),s=1,a=0,o=(0,ae.iH)([]);const n=e=>{-2===e?e=s-1:-1===e&&(e=s+1);let t=parseInt(Math.ceil(a/10));e>=1&&e<=t&&l(e)},r=()=>{let e=parseInt(Math.ceil(a/10)),t=[];for(let a=s-2;a<=s+2;a++)a>=1&&a<=e&&t.push({number:a,is_active:a===s?"active":""});o.value=t},l=o=>{s=o,ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/ranklist/getlist/",data:{page:o},type:"get",headers:{Authorization:"Bearer "+e.state.user.token},success(e){t.value=e.users,a=e.users_count,r()},error(e){console.log(e)}})};return l(s),{users:t,pages:o,click_page:n}}};const mt=(0,B.Z)(_t,[["render",nt],["__scopeId","data-v-42889511"]]);var ht=mt;const bt=e=>((0,o.dD)("data-v-3cba1b5c"),e=e(),(0,o.Cn)(),e),gt={class:"table table-striped table-hover",style:{"text-align":"center"}},vt=bt((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"A"),(0,o._)("th",null,"B"),(0,o._)("th",null,"对战结果"),(0,o._)("th",null,"对战时间"),(0,o._)("th",null,"操作")])],-1))),ft=["src"],wt=(0,o.Uk)("   "),kt={class:"record-user-username"},yt=["src"],xt=(0,o.Uk)("   "),It={class:"record-user-username"},Ct=["onClick"],jt={"aria-label":"..."},Dt={class:"pagination",style:{float:"right"}},zt=bt((()=>(0,o._)("a",{class:"page-link",href:"#"},"前一页",-1))),At=[zt],Mt=["onClick"],St={class:"page-link",href:"#"},Ot=bt((()=>(0,o._)("a",{class:"page-link",href:"#"},"后一页",-1))),Ut=[Ot];function Bt(e,t,s,a,n,l){const c=(0,o.up)("ContentField");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[(0,o._)("table",gt,[vt,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.records,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.record.id},[(0,o._)("td",null,[(0,o._)("img",{src:e.a_photo,alt:"",class:"record-user-photo"},null,8,ft),wt,(0,o._)("span",kt,(0,r.zw)(e.a_username),1)]),(0,o._)("td",null,[(0,o._)("img",{src:e.b_photo,alt:"",class:"record-user-photo"},null,8,yt),xt,(0,o._)("span",It,(0,r.zw)(e.b_username),1)]),(0,o._)("td",null,(0,r.zw)(e.result),1),(0,o._)("td",null,(0,r.zw)(e.record.createtime),1),(0,o._)("td",null,[(0,o._)("button",{onClick:t=>a.open_record_content(e.record.id),type:"button",class:"btn btn-secondary"},"查看录像",8,Ct)])])))),128))])]),(0,o._)("nav",jt,[(0,o._)("ul",Dt,[(0,o._)("li",{class:"page-item",onClick:t[0]||(t[0]=e=>a.click_page(-2))},At),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,r.C_)("page-item "+e.is_active),key:e.number,onClick:t=>a.click_page(e.number)},[(0,o._)("a",St,(0,r.zw)(e.number),1)],10,Mt)))),128)),(0,o._)("li",{class:"page-item",onClick:t[1]||(t[1]=e=>a.click_page(-1))},Ut)])])])),_:1})}var Ht={components:{ContentField:pt},setup(){const e=(0,O.oR)();let t=(0,ae.iH)([]),s=1,a=0,o=(0,ae.iH)([]);const n=e=>{-2===e?e=s-1:-1===e&&(e=s+1);let t=parseInt(Math.ceil(a/10));e>=1&&e<=t&&l(e)},r=()=>{let e=parseInt(Math.ceil(a/10)),t=[];for(let a=s-2;a<=s+2;a++)a>=1&&a<=e&&t.push({number:a,is_active:a===s?"active":""});o.value=t},l=o=>{s=o,ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/record/getlist/",data:{page:o},type:"get",headers:{Authorization:"Bearer "+e.state.user.token},success(e){t.value=e.records,a=e.records_count,r()},error(e){console.log(e)}})};l(s);const c=e=>{let t=[];for(let s=0,a=0;s<13;s++){let s=[];for(let t=0;t<14;t++,a++)"0"===e[a]?s.push(0):s.push(1);t.push(s)}return t},i=s=>{for(const a of t.value)if(a.record.id===s){e.commit("updateIsRecord",!0),e.commit("updateGame",{map:c(a.record.map),a_id:a.record.aid,a_sx:a.record.asx,a_sy:a.record.asy,b_id:a.record.bid,b_sx:a.record.bsx,b_sy:a.record.bsy}),e.commit("updateSteps",{a_steps:a.record.asteps,b_steps:a.record.bsteps}),e.commit("updateRecordLoser",a.record.loser),Ka.push({name:"record_content",params:{recordId:s}});break}};return{records:t,open_record_content:i,pages:o,click_page:n}}};const $t=(0,B.Z)(Ht,[["render",Bt],["__scopeId","data-v-3cba1b5c"]]);var Pt=$t;function qt(e,t,s,a,n,r){const l=(0,o.up)("PlayGround");return(0,o.wg)(),(0,o.j4)(l)}var Rt={components:{PlayGround:ie},setup(){}};const Lt=(0,B.Z)(Rt,[["render",qt]]);var Tt=Lt;const Wt=e=>((0,o.dD)("data-v-4c86ac19"),e=e(),(0,o.Cn)(),e),Zt={class:"container"},Ft={class:"row"},Gt={class:"col-3"},Vt={class:"card",style:{"margin-top":"20px"}},Et={class:"card-body"},Nt=["src"],Kt={class:"col-9"},Yt={class:"card",style:{"margin-top":"20px"}},Jt={class:"card-header"},Qt=Wt((()=>(0,o._)("span",{style:{"font-size":"130%"}},"我的Bot",-1))),Xt=Wt((()=>(0,o._)("button",{type:"button",class:"btn btn-primary float-end","data-bs-toggle":"modal","data-bs-target":"#add-bot"}," 创建Bot ",-1))),es={class:"modal fade",id:"add-bot",tabindex:"-1"},ts={class:"modal-dialog modal-xl"},ss={class:"modal-content"},as=Wt((()=>(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title"},"创建Bot"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),os={class:"modal-body"},ns={class:"mb-3"},rs=Wt((()=>(0,o._)("label",{for:"add-bot-title",class:"form-label"},"名称",-1))),ls={class:"mb-3"},cs=Wt((()=>(0,o._)("label",{for:"add-bot-description",class:"form-label"},"简介",-1))),is={class:"mb-3"},ds=Wt((()=>(0,o._)("label",{for:"add-bot-code",class:"form-label"},"代码",-1))),us={class:"modal-footer"},ps={class:"error-message"},_s=Wt((()=>(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1))),ms={class:"card-body"},hs={class:"table table-striped table-hover"},bs=Wt((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"名称"),(0,o._)("th",null,"创建时间"),(0,o._)("th",null,"操作")])],-1))),gs=["data-bs-target"],vs=["data-bs-target"],fs=["id"],ws={class:"modal-dialog modal-xl"},ks={class:"modal-content"},ys=Wt((()=>(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title"},"修改Bot"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),xs={class:"modal-body"},Is={class:"mb-3"},Cs=Wt((()=>(0,o._)("label",{for:"add-bot-title",class:"form-label"},"名称",-1))),js=["onUpdate:modelValue"],Ds={class:"mb-3"},zs=Wt((()=>(0,o._)("label",{for:"add-bot-description",class:"form-label"},"简介",-1))),As=["onUpdate:modelValue"],Ms={class:"mb-3"},Ss=Wt((()=>(0,o._)("label",{for:"add-bot-code",class:"form-label"},"代码",-1))),Os={class:"modal-footer"},Us={class:"error-message"},Bs=["onClick"],Hs=Wt((()=>(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1))),$s=["id"],Ps={class:"modal-dialog"},qs={class:"modal-content"},Rs=Wt((()=>(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"删除Bot"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),Ls={class:"modal-body"},Ts={class:"modal-footer"},Ws=["onClick"],Zs=Wt((()=>(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)));function Fs(e,t,s,n,l,c){const i=(0,o.up)("VAceEditor");return(0,o.wg)(),(0,o.iD)("div",Zt,[(0,o._)("div",Ft,[(0,o._)("div",Gt,[(0,o._)("div",Vt,[(0,o._)("div",Et,[(0,o._)("img",{src:e.$store.state.user.photo,alt:"",style:{width:"100%"}},null,8,Nt)])])]),(0,o._)("div",Kt,[(0,o._)("div",Yt,[(0,o._)("div",Jt,[Qt,Xt,(0,o._)("div",es,[(0,o._)("div",ts,[(0,o._)("div",ss,[as,(0,o._)("div",os,[(0,o._)("div",ns,[rs,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.botadd.title=e),type:"text",class:"form-control",id:"add-bot-title",placeholder:"请输入Bot名称"},null,512),[[a.nr,n.botadd.title]])]),(0,o._)("div",ls,[cs,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.botadd.description=e),class:"form-control",id:"add-bot-description",rows:"3",placeholder:"请输入Bot简介"},null,512),[[a.nr,n.botadd.description]])]),(0,o._)("div",is,[ds,(0,o.Wm)(i,{value:n.botadd.content,"onUpdate:value":t[2]||(t[2]=e=>n.botadd.content=e),onInit:n.editorInit,lang:"c_cpp",theme:"textmate",style:{height:"300px"}},null,8,["value","onInit"])])]),(0,o._)("div",us,[(0,o._)("div",ps,(0,r.zw)(n.botadd.error_message),1),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>n.add_bot&&n.add_bot(...e))},"创建"),_s])])])])]),(0,o._)("div",ms,[(0,o._)("table",hs,[bs,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.bots,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,r.zw)(e.title),1),(0,o._)("td",null,(0,r.zw)(e.createtime),1),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-secondary",style:{"margin-right":"10px"},"data-bs-toggle":"modal","data-bs-target":"#update-bot-modal-"+e.id},"修改",8,gs),(0,o._)("button",{type:"button",class:"btn btn-danger","data-bs-toggle":"modal","data-bs-target":"#delete-bot-modal-"+e.id},"删除",8,vs),(0,o._)("div",{class:"modal fade",id:"update-bot-modal-"+e.id,tabindex:"-1"},[(0,o._)("div",ws,[(0,o._)("div",ks,[ys,(0,o._)("div",xs,[(0,o._)("div",Is,[Cs,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t=>e.title=t,type:"text",class:"form-control",id:"add-bot-title",placeholder:"请输入Bot名称"},null,8,js),[[a.nr,e.title]])]),(0,o._)("div",Ds,[zs,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t=>e.description=t,class:"form-control",id:"add-bot-description",rows:"3",placeholder:"请输入Bot简介"},null,8,As),[[a.nr,e.description]])]),(0,o._)("div",Ms,[Ss,(0,o.Wm)(i,{value:e.content,"onUpdate:value":t=>e.content=t,onInit:n.editorInit,lang:"c_cpp",theme:"textmate",style:{height:"300px"}},null,8,["value","onUpdate:value","onInit"])])]),(0,o._)("div",Os,[(0,o._)("div",Us,(0,r.zw)(n.botadd.error_message),1),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t=>n.update_bot(e)},"保存修改",8,Bs),Hs])])])],8,fs),(0,o._)("div",{class:"modal fade",id:"delete-bot-modal-"+e.id,tabindex:"-1"},[(0,o._)("div",Ps,[(0,o._)("div",qs,[Rs,(0,o._)("div",Ls," 您确认删除标题为："+(0,r.zw)(e.title)+" 的Bot吗？ ",1),(0,o._)("div",Ts,[(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:t=>n.remove_bot(e)},"确认删除",8,Ws),Zs])])])],8,$s)])])))),128))])])])])])])])}var Gs=s(6092),Vs=s(17),Es=s(7178),Ns={components:{VAceEditor:Gs.m},setup(){Vs.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds@"+s(17).version+"/src-noconflict/");const e=(0,O.oR)();let t=(0,ae.iH)([]);const a=(0,ae.qj)({title:"",description:"",content:"",error_message:""}),o=()=>{ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/bot/getlist/",type:"get",headers:{Authorization:"Bearer "+e.state.user.token},success(e){t.value=e}})};o();const n=()=>{a.error_message="",ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/bot/add/",type:"post",data:{title:a.title,description:a.description,content:a.content},headers:{Authorization:"Bearer "+e.state.user.token},success(e){"success"===e.error_message?(a.title="",a.description="",a.content="",P.Modal.getInstance("#add-bot").hide(),o(),(0,Es.z8)({showClose:!0,message:"添加成功",type:"success"})):a.error_message=e.error_message}})},r=t=>{ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/bot/remove/",type:"post",data:{bot_id:t.id},headers:{Authorization:"Bearer "+e.state.user.token},success(e){"success"===e.error_message&&(P.Modal.getInstance("#delete-bot-modal-"+t.id).hide(),o(),(0,Es.z8)({showClose:!0,message:"删除成功",type:"success"}))}})},l=t=>{a.error_message="",ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/bot/update/",type:"post",data:{bot_id:t.id,title:t.title,description:t.description,content:t.content},headers:{Authorization:"Bearer "+e.state.user.token},success(e){"success"===e.error_message?(P.Modal.getInstance("#update-bot-modal-"+t.id).hide(),o(),(0,Es.z8)({showClose:!0,message:"更新成功",type:"success"})):a.error_message=e.error_message}})},c=e=>{e.renderer.setShowPrintMargin(!1)};return{bots:t,botadd:a,add_bot:n,update_bot:l,remove_bot:r,editorInit:c}}};const Ks=(0,B.Z)(Ns,[["render",Fs],["__scopeId","data-v-4c86ac19"]]);var Ys=Ks;const Js=(0,o.Uk)(" 404 Not Found ");function Qs(e,t,s,a,n,r){const l=(0,o.up)("ContentField");return(0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[Js])),_:1})}var Xs={components:{ContentField:pt}};const ea=(0,B.Z)(Xs,[["render",Qs]]);var ta=ea;const sa=e=>((0,o.dD)("data-v-28ee6dc8"),e=e(),(0,o.Cn)(),e),aa={class:"row justify-content-md-center"},oa={class:"col-3"},na={class:"mb-3"},ra=sa((()=>(0,o._)("label",{for:"username",class:"form-label"},"用户名",-1))),la={class:"mb-3"},ca=sa((()=>(0,o._)("label",{for:"password",class:"form-label"},"密码",-1))),ia={class:"mb-3"},da=sa((()=>(0,o._)("label",{for:"kaptcha",class:"form-label"},"验证码",-1))),ua={class:"row"},pa={class:"col-7"},_a={class:"col-5"},ma={class:"error-message"},ha=sa((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"提交",-1))),ba=sa((()=>(0,o._)("img",{width:"30",src:"https://cdn.acwing.com/media/article/image/2022/09/06/1_32f001fd2d-acwing_logo.png",alt:""},null,-1))),ga=sa((()=>(0,o._)("br",null,null,-1))),va=(0,o.Uk)(" AcWing一键登录 "),fa=[ba,ga,va];function wa(e,t,s,n,l,c){const i=(0,o.up)("ContentField");return e.$store.state.user.pulling_info?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(i,{key:0},{default:(0,o.w5)((()=>[(0,o._)("div",aa,[(0,o._)("div",oa,[(0,o._)("form",{onSubmit:t[4]||(t[4]=(0,a.iM)(((...e)=>n.login&&n.login(...e)),["prevent"]))},[(0,o._)("div",na,[ra,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),type:"text",class:"form-control",id:"username",placeholder:"请输入用户名"},null,512),[[a.nr,n.username]])]),(0,o._)("div",la,[ca,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),type:"password",class:"form-control",id:"password",placeholder:"请输入密码"},null,512),[[a.nr,n.password]])]),(0,o._)("div",ia,[da,(0,o._)("div",ua,[(0,o._)("div",pa,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.kaptcha=e),type:"text",class:"form-control",id:"kaptcha",placeholder:"请输入验证码"},null,512),[[a.nr,n.kaptcha]])]),(0,o._)("div",_a,[(0,o._)("img",{ref:"kaptcha_img",src:"",alt:"",onClick:t[3]||(t[3]=(...e)=>n.get_kaptcha&&n.get_kaptcha(...e)),class:"captcha-img"},null,512)])])]),(0,o._)("div",ma,(0,r.zw)(n.error_message),1),ha],32),(0,o._)("div",{style:{"text-align":"center","margin-top":"20px",cursor:"pointer"},onClick:t[5]||(t[5]=(...e)=>n.acwing_login&&n.acwing_login(...e))},fa)])])])),_:1}))}var ka={components:{ContentField:pt},setup(){const e=(0,O.oR)();let t=(0,ae.iH)(""),s=(0,ae.iH)(""),a=(0,ae.iH)(""),n=(0,ae.iH)(""),r=(0,ae.iH)(""),l=(0,ae.iH)("");const c=localStorage.getItem("jwt_token");c?(e.commit("updateToken",c),e.dispatch("getinfo",{success(){Ka.push({name:"home"}),e.commit("updatePullingInfo",!1)},error(){e.commit("updatePullingInfo",!1)}})):e.commit("updatePullingInfo",!1);const i=()=>{l.value="",e.dispatch("login",{username:t.value,password:s.value,kaptcha:a.value,kaptcha_uuid:r.value,success(){e.dispatch("getinfo",{success(){Ka.push({name:"home"})}})},error(e){d(),"error"===e.statusText?l.value="用户名或密码错误":l.value=e.error_message}})},d=()=>{if(e.state.user.pulling_info)return;let t,s=Math.random();t=s<.5?"math":"char",ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/getKaptcha?captchaType="+t,type:"get",success(e){"success"===e.error_message&&(n.value.src="data:image/gif;base64,"+e.img,r.value=e.uuid)}})},u=()=>{ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/account/acwing/web/apply_code/",type:"GET",success:e=>{"success"===e.result&&window.location.replace(e.apply_code_url)}})};return(0,o.bv)((()=>{d()})),{username:t,password:s,kaptcha:a,kaptcha_img:n,kaptcha_uuid:r,get_kaptcha:d,error_message:l,login:i,acwing_login:u}}};const ya=(0,B.Z)(ka,[["render",wa],["__scopeId","data-v-28ee6dc8"]]);var xa=ya;const Ia=e=>((0,o.dD)("data-v-fdeff7e0"),e=e(),(0,o.Cn)(),e),Ca={class:"row justify-content-md-center"},ja={class:"col-3"},Da={class:"mb-3"},za=Ia((()=>(0,o._)("label",{for:"username",class:"form-label"},"用户名",-1))),Aa={class:"mb-3"},Ma=Ia((()=>(0,o._)("label",{for:"password",class:"form-label"},"密码",-1))),Sa={class:"mb-3"},Oa=Ia((()=>(0,o._)("label",{for:"confirmedPassword",class:"form-label"},"确认密码",-1))),Ua={class:"error-message"},Ba=Ia((()=>(0,o._)("button",{type:"submit",class:"btn btn-primary"},"提交",-1)));function Ha(e,t,s,n,l,c){const i=(0,o.up)("ContentField");return(0,o.wg)(),(0,o.j4)(i,null,{default:(0,o.w5)((()=>[(0,o._)("div",Ca,[(0,o._)("div",ja,[(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>n.register&&n.register(...e)),["prevent"]))},[(0,o._)("div",Da,[za,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),type:"text",class:"form-control",id:"username",placeholder:"请输入用户名"},null,512),[[a.nr,n.username]])]),(0,o._)("div",Aa,[Ma,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),type:"password",class:"form-control",id:"password",placeholder:"请输入密码"},null,512),[[a.nr,n.password]])]),(0,o._)("div",Sa,[Oa,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.confirmedPassword=e),type:"password",class:"form-control",id:"confirmedPassword",placeholder:"请再次输入密码"},null,512),[[a.nr,n.confirmedPassword]])]),(0,o._)("div",Ua,(0,r.zw)(n.error_message),1),Ba],32)])])])),_:1})}var $a={components:{ContentField:pt},setup(){let e=(0,ae.iH)(""),t=(0,ae.iH)(""),s=(0,ae.iH)(""),a=(0,ae.iH)("");const o=()=>{a.value="",ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/account/register/",type:"post",data:{username:e.value,password:t.value,confirmedPassword:s.value},success(e){"success"===e.error_message?Ka.push({name:"user_account_login"}):a.value=e.error_message}})};return{username:e,password:t,confirmedPassword:s,error_message:a,register:o}}};const Pa=(0,B.Z)($a,[["render",Ha],["__scopeId","data-v-fdeff7e0"]]);var qa=Pa;function Ra(e,t,s,a,n,r){return(0,o.wg)(),(0,o.iD)("div")}var La={setup(){const e=(0,S.yj)(),t=(0,O.oR)();ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/account/acwing/web/receive_code/",type:"GET",data:{code:e.query.code,state:e.query.state},success:e=>{"success"===e.result?(localStorage.setItem("jwt_token",e.jwt_token),t.commit("updateToken",e.jwt_token),Ka.push({name:"home"}),t.commit("updatePullingInfo",!1)):Ka.push({name:"user_account_login"})}})}};const Ta=(0,B.Z)(La,[["render",Ra]]);var Wa=Ta,Za={state:{id:"",username:"",photo:"",token:"",is_login:!1,pulling_info:!0},getters:{},mutations:{updateUser(e,t){e.id=t.id,e.username=t.username,e.photo=t.photo,e.is_login=t.is_login},updateToken(e,t){e.token=t},logout(e){e.id="",e.username="",e.photo="",e.token="",e.is_login=!1},updatePullingInfo(e,t){e.pulling_info=t}},actions:{login(e,t){ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/account/token/",type:"post",data:{username:t.username,password:t.password,kaptcha:t.kaptcha,kaptcha_uuid:t.kaptcha_uuid},success(s){"success"===s.error_message?(localStorage.setItem("jwt_token",s.token),e.commit("updateToken",s.token),t.success(s)):t.error(s)},error(e){t.error(e)}})},getinfo(e,t){ze().ajax({url:"https://app3222.acapp.acwing.com.cn:20022/api/user/account/info/",type:"get",headers:{Authorization:"Bearer "+e.state.token},success(s){"success"===s.error_message?(e.commit("updateUser",{...s,is_login:!0}),t.success(s)):t.error(s)},error(e){t.error(e)}})},logout(e){localStorage.removeItem("jwt_token"),e.commit("logout")}},modules:{}},Fa={state:{status:"matching",socket:null,opponent_username:"",opponent_photo:"",gamemap:null,a_id:0,a_sx:0,a_sy:0,b_id:0,b_sx:0,b_sy:0,gameObject:null,loser:"none"},getters:{},mutations:{updateSocket(e,t){e.socket=t},updateOpponent(e,t){e.opponent_username=t.username,e.opponent_photo=t.photo},updateStatus(e,t){e.status=t},updateGame(e,t){e.gamemap=t.map,e.a_id=t.a_id,e.a_sx=t.a_sx,e.a_sy=t.a_sy,e.b_id=t.b_id,e.b_sx=t.b_sx,e.b_sy=t.b_sy},updateGameObject(e,t){e.gameObject=t},updateLoser(e,t){e.loser=t}},actions:{},modules:{}},Ga={state:{is_record:!1,a_step:"",b_step:"",record_loser:""},getters:{},mutations:{updateIsRecord(e,t){e.is_record=t},updateSteps(e,t){e.a_steps=t.a_steps,e.b_steps=t.b_steps},updateRecordLoser(e,t){e.record_loser=t}},actions:{},modules:{}},Va=(0,O.MT)({state:{},getters:{},mutations:{},actions:{},modules:{user:Za,pk:Fa,record:Ga}});const Ea=[{path:"/",name:"home",redirect:"/pk/",meta:{requestAuth:!0}},{path:"/pk/",name:"pk_index",component:Fe,meta:{requestAuth:!0}},{path:"/record/",name:"record_index",component:Pt,meta:{requestAuth:!0}},{path:"/record/:recordId/",name:"record_content",component:Tt,meta:{requestAuth:!0}},{path:"/ranklist/",name:"ranklist_index",component:ht,meta:{requestAuth:!0}},{path:"/user/bot/",name:"user_bot_index",component:Ys,meta:{requestAuth:!0}},{path:"/user/account/login/",name:"user_account_login",component:xa,meta:{requestAuth:!1}},{path:"/user/account/register/",name:"user_account_register",component:qa,meta:{requestAuth:!1}},{path:"/user/account/acwing/web/receive_code/",name:"user_account_acwing_web_receive_code",component:Wa,meta:{requestAuth:!1}},{path:"/404/",name:"404",component:ta,meta:{requestAuth:!1}},{path:"/:catchAll(.*)",redirect:"/404/"}],Na=(0,S.p7)({history:(0,S.PO)(),routes:Ea});Na.beforeEach(((e,t,s)=>{e.meta.requestAuth&&!Va.state.user.is_login?s({name:"user_account_login"}):s()}));var Ka=Na,Ya=s(7086);s(4415);const Ja=(0,a.ri)(L);Ja.use(Ya.Z),Ja.use(Va).use(Ka).mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=e,function(){s.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];s.O=function(t,a,o,n){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],n=e[d][2];for(var l=!0,c=0;c<a.length;c++)(!1&n||r>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,r=a[0],l=a[1],c=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(c)var d=c(s)}for(t&&t(a);i<r.length;i++)n=r[i],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},a=self["webpackChunkweb"]=self["webpackChunkweb"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(321)}));a=s.O(a)})();
//# sourceMappingURL=app.198df9c3.js.map