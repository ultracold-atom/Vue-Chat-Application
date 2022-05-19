(function(){"use strict";var e={2107:function(e,n,r){var t=r(9242),o=r(3396);const a=(0,o._)("nav",null,null,-1);function s(e,n){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o.Wm)(r)],64)}var l=r(89);const u={},i=(0,l.Z)(u,[["render",s]]);var c=i,p=r(678);const d={class:"home container"},m=(0,o._)("h2",null,"Cockatoo Chat App",-1),v={key:0},g=(0,o.Uk)("To Sign Up : Go to the "),h=(0,o.Uk)(" page"),f={key:1},w=(0,o.Uk)("To Enter : Go to the "),y=(0,o.Uk)(" page");function b(e,n,r,t,a,s){const l=(0,o.up)("Login"),u=(0,o.up)("Register");return(0,o.wg)(),(0,o.iD)("div",d,[m,t.isMember?((0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(l,{onLogin:t.startChat},null,8,["onLogin"]),(0,o._)("p",null,[g,(0,o._)("span",{onClick:n[0]||(n[0]=e=>t.isMember=!1)},"Sign Up"),h])])):((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(u,{onRegister:t.startChat},null,8,["onRegister"]),(0,o._)("p",null,[w,(0,o._)("span",{onClick:n[1]||(n[1]=e=>t.isMember=!0)},"Enter"),y])]))])}var _=r(7139);const D=(0,o._)("h4",null,"Sign Up Screen",-1),U=(0,o._)("button",null,"Sign Up",-1),k={class:"error"};function E(e,n,r,a,s,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("form",{action:"",onSubmit:n[3]||(n[3]=(0,t.iM)(((...e)=>a.signUp&&a.signUp(...e)),["prevent"]))},[D,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Enter User Name","onUpdate:modelValue":n[0]||(n[0]=e=>a.userName=e)},null,512),[[t.nr,a.userName]]),(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Enter E-mail","onUpdate:modelValue":n[1]||(n[1]=e=>a.email=e)},null,512),[[t.nr,a.email]]),(0,o.wy)((0,o._)("input",{type:"password",placeholder:"Enter Password","onUpdate:modelValue":n[2]||(n[2]=e=>a.password=e)},null,512),[[t.nr,a.password]]),U],32),(0,o._)("div",k,(0,_.zw)(a.error),1)],64)}var H=r(4870),C=(r(1703),r(4275)),O=r(6035),T=r(5866);const S={apiKey:"AIzaSyA-u7UWAH28Aqfq9an10aDwaZKTLKMdLUo",authDomain:"chat-app-91ddb.firebaseapp.com",projectId:"chat-app-91ddb",storageBucket:"chat-app-91ddb.appspot.com",messagingSenderId:"526209344288",appId:"1:526209344288:web:5d817a88f4fcb24f5ead45"};(0,C.ZF)(S);const Z=(0,O.ad)(),M=(0,T.v0)(),N=(0,O.Bt)(),W=(0,H.iH)(null),z=async(e,n,r)=>{W.value=null;try{if(""===r.trim())throw new Error("User-Name can't be empty");const t=await(0,T.Xb)(M,e,n).catch((e=>{console.log(e.message)})).then((e=>{(0,T.ck)(e.user,{displayName:r}),console.log("üye oluşturuldu",e.user)}));if(!t)throw new Error("Registiration didn't happen");return console.log(r,e,n),W.value=null,t}catch(W){W.value=W.message}},L=()=>({error:W,signup:z});var j=L,x={setup(e,n){const r=(0,H.iH)(""),t=(0,H.iH)(""),o=(0,H.iH)(""),{error:a,signup:s}=j(),l=async()=>{await s(t.value,o.value,r.value),a.value||n.emit("register")};return{userName:r,email:t,password:o,signUp:l,error:a}}};const R=(0,l.Z)(x,[["render",E]]);var A=R;const K=(0,o._)("h4",null,"Enter Screen",-1),V=(0,o._)("button",null,"Enter",-1),F={class:"error"};function I(e,n,r,a,s,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("form",{action:"",onSubmit:n[2]||(n[2]=(0,t.iM)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[K,(0,o.wy)((0,o._)("input",{type:"text",placeholder:"Enter E-mail","onUpdate:modelValue":n[0]||(n[0]=e=>a.email=e)},null,512),[[t.nr,a.email]]),(0,o.wy)((0,o._)("input",{type:"password",placeholder:"Enter Password","onUpdate:modelValue":n[1]||(n[1]=e=>a.password=e)},null,512),[[t.nr,a.password]]),V],32),(0,o._)("div",F,(0,_.zw)(a.error),1)],64)}const Y=(0,H.iH)(null),q=async(e,n)=>{Y.value=null;try{const r=await(0,T.e5)(M,e,n).catch((e=>{console.log(e.message)})).then((e=>{console.log("Giriş Başarılı",e.user)}));if(!r)throw new Error("Registiration didn't happen");return console.log(e,n),Y.value=null,r}catch(W){W.value=W.message}},P=()=>({error:Y,Login:q});var B=P,G={setup(e,n){const r=(0,H.iH)(""),t=(0,H.iH)(""),{error:o,Login:a}=B(),s=()=>{a(r.value,t.value),o.value||n.emit("login")};return{email:r,password:t,login:s,error:o}}};const J=(0,l.Z)(G,[["render",I]]);var X=J,Q={components:{Register:A,Login:X},setup(){const e=(0,H.iH)(!0),n=(0,p.tv)(),r=()=>{n.push({name:"ChatRoom"})};return{isMember:e,startChat:r}}};const $=(0,l.Z)(Q,[["render",b]]);var ee=$;const ne={class:"container"};function re(e,n,r,t,a,s){const l=(0,o.up)("Navbar"),u=(0,o.up)("ChatWindow"),i=(0,o.up)("ChatForm");return(0,o.wg)(),(0,o.iD)("div",ne,[(0,o.Wm)(l),(0,o.Wm)(u),(0,o.Wm)(i)])}const te={class:"email"};function oe(e,n,r,t,a,s){return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("div",null,[(0,o._)("p",null,"Hello "+(0,_.zw)(t.user.displayName),1),(0,o._)("p",te,"You logined with the "+(0,_.zw)(t.user.email),1)]),(0,o._)("button",{onClick:n[0]||(n[0]=(...e)=>t.logOut&&t.logOut(...e))},"LogOut")])}var ae=r(9356);const se=(0,H.iH)(M.currentUser);(0,T.Aj)(M,(e=>{console.log("Kullanıcı durum değiştirdi",e),se.value=e}));const le=()=>({user:se});var ue=le,ie={setup(){const e=(0,p.tv)(),{user:n}=ue(),r=async()=>{(0,ae.w7)(M).catch((e=>{console.log(e.message)})).then((()=>{e.push({name:"home"})}))};return{logOut:r,user:n}}};const ce=(0,l.Z)(ie,[["render",oe]]);var pe=ce;function de(e,n,r,a,s,l){return(0,o.wg)(),(0,o.iD)("form",null,[(0,o.wy)((0,o._)("input",{placeholder:"Write your message and press to the Enter ","onUpdate:modelValue":n[0]||(n[0]=e=>a.message=e),onKeypress:n[1]||(n[1]=(0,t.D2)((0,t.iM)(((...e)=>a.send&&a.send(...e)),["prevent"]),["enter"]))},null,544),[[t.nr,a.message]])])}const me=e=>{let n=(0,H.iH)(null);const r=async r=>{n.value=null;try{const n=(0,O.hJ)(Z,e);await n,(0,O.ET)(n,r)}catch(t){n.value="Message didnt send"}};return{error:n,addDocument:r}};var ve=me,ge={setup(){const{user:e}=ue(),n=(0,H.iH)(""),{addDocument:r,error:t}=ve("messages"),o=async()=>{const o={user:e.value.displayName,message:n.value,creationTime:N};await r(o),t.value?n.value=t.value:n.value=""};return{message:n,send:o}}};const he=(0,l.Z)(ge,[["render",de]]);var fe=he;const we={class:"chat-window"},ye={key:0},be={key:1,class:"messages"},_e={class:"created-at"},De={class:"name"},Ue={style:{"text-decoration":"none"}};function ke(e,n,r,t,a,s){return(0,o.wg)(),(0,o.iD)("div",we,[t.error?((0,o.wg)(),(0,o.iD)("div",ye,(0,_.zw)(t.error),1)):(0,o.kq)("",!0),t.docs?((0,o.wg)(),(0,o.iD)("div",be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.formattedDocs,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"single"},[(0,o._)("span",_e,(0,_.zw)(e.creationTime),1),(0,o._)("span",De,(0,_.zw)(e.user),1),(0,o._)("span",Ue,(0,_.zw)(e.message),1)])))),128))])):(0,o.kq)("",!0)])}const Ee=e=>{const n=(0,H.iH)(null),r=(0,H.iH)(null);let t=(0,O.hJ)(Z,e);const o=(0,O.IO)(t,(0,O.Xo)("creationTime"));return(0,O.cf)(o,(e=>{let t=[];e.docs.forEach((e=>{e.data().creationTime&&t.push({...e.data(),id:e.id})})),n.value=t,r.value=null}),(e=>{n.value=null,r.value="Datas couldnt get",console.log(e)})),{error:r,docs:n}};var He=Ee,Ce=r(3621),Oe={setup(){const{error:e,docs:n}=He("messages"),r=(0,H.Fl)((()=>{if(n.value)return n.value.map((e=>{let n=(0,Ce.Z)(e.creationTime.toDate());return{...e,creationTime:n}}))}));return{error:e,docs:n,formattedDocs:r}}};const Te=(0,l.Z)(Oe,[["render",ke]]);var Se=Te,Ze={components:{Navbar:pe,ChatForm:fe,ChatWindow:Se}};const Me=(0,l.Z)(Ze,[["render",re]]);var Ne=Me;const We=(e,n,r)=>{const t=M.currentUser;t?r():r({name:"home"})},ze=[{path:"/",name:"home",component:ee},{path:"/chat",name:"ChatRoom",component:Ne,beforeEnter:We}],Le=(0,p.p7)({history:(0,p.r5)(),routes:ze});var je=Le;let xe;M.onAuthStateChanged((()=>{xe||(xe=(0,t.ri)(c).use(je).mount("#app"))}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,a){if(!t){var s=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<t.length;u++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[u])}))?t.splice(u--,1):(l=!1,a<s&&(s=a));if(l){e.splice(c--,1);var i=o();void 0!==i&&(n=i)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,s=t[0],l=t[1],u=t[2],i=0;if(s.some((function(n){return 0!==e[n]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var c=u(r)}for(n&&n(t);i<s.length;i++)a=s[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self["webpackChunkchat_app"]=self["webpackChunkchat_app"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(2107)}));t=r.O(t)})();
//# sourceMappingURL=app.440b35d5.js.map