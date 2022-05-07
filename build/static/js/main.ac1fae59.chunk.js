(this["webpackJsonpc-ape"]=this["webpackJsonpc-ape"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r=t(2),i=t(24),a=t.n(i),o=t(11),c=t(3);function s(){var n=Object(c.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var l,d=t(4),m=t(5),h=t(22),b=t(19),j=t.n(b),p=t(25),x=t(14),g=t(20),u=t(30),f=t(1),O=m.b.form(l||(l=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  .textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  select {\n    font-size: 1.5rem;\n    padding: 10px 35px;\n    min-width: 300px;\n    margin: 0.7rem;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n  @media only screen and (max-width: 768px) {\n    .form-group {\n      width: 100%;\n      margin-bottom: 2rem;\n    }\n    label {\n      font-size: 1.4rem;\n    }\n    input,\n    textarea {\n      width: 100%;\n      font-size: 1rem;\n      padding: 1.2rem;\n      color: var(--gray-1);\n      background-color: var(--deep-dark);\n      outline: none;\n      border: none;\n      border-radius: 8px;\n      margin-top: 1rem;\n    }\n  }\n"])));function v(){var n=Object(r.useState)({name:"",email:"",twtLink:"",twtSize:"<250",twtUser:"No"}),e=Object(u.a)(n,2),t=e[0],i=e[1],a=t.name,o=t.email,s=t.twtSize,l=t.twtLink,d=t.twtUser,m=function(n){return i(Object(g.a)(Object(g.a)({},t),{},Object(x.a)({},n.target.name,n.target.value)))},h=Object(c.f)(),b=function(){var n=Object(p.a)(j.a.mark((function n(e){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),console.log(t),n.prev=2,n.next=5,fetch("/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([[a,d,s,l,o,(new Date).toLocaleString()]])});case 5:return r=n.sent,n.next=8,r.json();case 8:h.push("/ogs"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),alert(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(O,{onSubmit:b,children:[Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{htmlFor:"name",children:["What Is Your Name?",Object(f.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:a,onChange:m})]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{htmlFor:"twitter-user",children:["Are You An Active Twitter User?",Object(f.jsxs)("select",{id:"twitter-user",name:"twtUser",required:!0,value:d,onChange:m,children:[Object(f.jsx)("option",{value:"No",children:"No"}),Object(f.jsx)("option",{value:"Yes",children:"Yes"})]})]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{htmlFor:"twitter-size",children:["Cool, How Many Twitter Follower Do You Have?",Object(f.jsxs)("select",{id:"twitter-size",name:"twtSize",required:!0,value:s,onChange:m,children:[Object(f.jsx)("option",{value:"<250",children:"Below 250"}),Object(f.jsx)("option",{value:"<500",children:"Below 500"}),Object(f.jsx)("option",{value:"<1000",children:"Below 1000"}),Object(f.jsx)("option",{value:"<5000",children:"Below 5000"}),Object(f.jsx)("option",{value:">5000",children:"Above 5000"})]})]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{htmlFor:"email",children:["Great, Can You Share A Link To Your Twitter Profile?",Object(f.jsx)("input",{type:"link",id:"link",name:"twtLink",required:!0,value:l,onChange:m})]})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("label",{htmlFor:"email",children:["Nice, Please Provide An Email Address You Check Often...",Object(f.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:o,onChange:m})]})}),Object(f.jsx)("button",{type:"submit",children:"Submit"})]})})}var w,_,y=t(29),k=m.b.div(w||(w=Object(d.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.5rem;\n  }\n"])));function z(n){var e=n.children;return Object(f.jsx)(k,{className:"para",children:Object(f.jsx)("p",{children:e})})}var N,S=m.b.div(_||(_=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 0.1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 2.5rem;\n  }\n"])));function A(n){var e=n.icon,t=void 0===e?Object(f.jsx)(y.a,{}):e,r=n.text,i=void 0===r?"I need text ":r;return Object(f.jsxs)(S,{children:[Object(f.jsx)("div",{className:"icon",children:t}),Object(f.jsx)("div",{className:"info",children:Object(f.jsx)(z,{children:i})})]})}var B,T=m.b.div(N||(N=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n    text-align: center;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.5rem;\n    }\n    h2 {\n      font-size: 3.4rem;\n    }\n  }\n"])));function C(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,r=n.heading,i=void 0===r?"need heading":r;return Object(f.jsxs)(T,{className:"section-title",children:[Object(f.jsx)("h2",{children:i}),Object(f.jsx)("p",{children:t})]})}var F=m.b.div(B||(B=Object(d.a)(["\n  padding: 8rem 0;\n  .OGSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .OGSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .OGSection__wrapper {\n      flex-direction: column;\n    }\n    .OGSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function M(){return Object(f.jsx)(F,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(C,{heading:"OG Form",subheading:"Become An OG and Early Supporter"}),Object(f.jsxs)("div",{className:"OGSection__wrapper",children:[Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)(A,{icon:null,text:"Become A Part of History, Apply to be an OG and Early supporter of Civilized Ape. Help these apes reveal themselves."}),Object(f.jsx)(A,{icon:Object(f.jsx)(h.a,{}),text:"You must be an active twitter user with atleast 250 followers and a decent engagement."}),Object(f.jsx)(A,{icon:Object(f.jsx)(h.a,{}),text:"There would be Special Rewards."})]}),Object(f.jsx)("div",{className:"right",children:Object(f.jsx)(v,{})})]})]})})}function R(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(M,{})})}var Y,D=t.p+"static/media/success.66753a16.svg",E=m.b.div(Y||(Y=Object(d.a)(["\n  padding: 10rem 0;\n  .section-container {\n    width: 1200px;\n    margin: auto;\n  }\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .ogsSection__left,\n  .ogsSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .ogsSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  .successImg {\n    width: 400px;\n    padding: 3rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .ogsSection__left {\n      flex: 3;\n    }\n    .ogsSection__right {\n      flex: 4;\n    }\n    .successImg {\n      width: 300px;\n      padding: 3rem;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .section-container {\n      width: 90%;\n      margin: auto;\n      text-align: center;\n    }\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .ogsSection__left,\n    .ogsSection__right {\n      width: 100%;\n    }\n    .ogsSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .successImg {\n      width: 300px;\n      padding: 4rem;\n    }\n  }\n"])));function G(){return Object(f.jsx)(E,{children:Object(f.jsxs)("div",{className:"section-container",children:[Object(f.jsx)(C,{subheading:"We Received Your Applications",heading:"Congratulations"}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"ogsSection__left",children:Object(f.jsx)("img",{className:"successImg",src:D,alt:"Success"})}),Object(f.jsx)("div",{className:"ogsSection__right",children:Object(f.jsxs)(z,{children:["Your Application has been received, keep an eye on your email. we would reach you soon. ",Object(f.jsx)("br",{})," Do you know anyone who would be interested in this? ",Object(f.jsx)("br",{})," please share this form with them."]})})]})]})})}function I(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(G,{})})}var L,P=t.p+"static/media/apeTown.aa915eea.mp4",q=m.b.div(L||(L=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function H(n){var e=n.btnText,t=void 0===e?"test":e,r=n.btnLink,i=void 0===r?"test":r,a=n.outline,c=void 0!==a&&a;return Object(f.jsx)(q,{outline:c,className:"button-wrapper",children:Object(f.jsx)(o.b,{className:"button",to:i,children:t})})}var U,J,W=t.p+"static/media/social-media-arrow.f5e093ce.svg",K=m.b.div(U||(U=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 900px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 1000px;\n    width: 100%;\n    height: auto;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  video {\n    max-width: 988px;\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 700px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -1.5rem;\n      .hero__name {\n        font-size: 3rem;\n      }\n    }\n    .hero__img {\n      height: auto;\n      width: 100%;\n      border: none;\n    }\n    video {\n      height: auto;\n      width: 100%;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      top: 70%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Q(){return Object(f.jsx)(K,{children:Object(f.jsx)("div",{className:"hero",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"hero__heading",children:Object(f.jsx)("span",{className:"hero__name",children:"Civilized Ape Town"})}),Object(f.jsx)("div",{className:"hero__img",children:Object(f.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,children:Object(f.jsx)("source",{src:P,type:"video/mp4"})})}),Object(f.jsxs)("div",{className:"hero__info",children:[Object(f.jsx)(z,{children:"Deep in the heart of Broc\xe9liande Forest roam a troop of 10,000 Apes. These are not regular apes, however. These are Civilized Ape, teeming with life, and all that accompanies it. They symbolize freedom and the possibility of a life truly lived."}),Object(f.jsx)(H,{btnText:"Enter",btnLink:"/og"})]}),Object(f.jsxs)("div",{className:"hero__social",children:[Object(f.jsxs)("div",{className:"hero__social__indicator",children:[Object(f.jsx)("p",{children:"Follow"}),Object(f.jsx)("img",{src:W,alt:"icon"})]}),Object(f.jsx)("div",{className:"hero__social__text",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"http://discord.gg/CivilizedApeTown",target:"_blank",rel:"noreferrer",children:"DC"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"http://twitter.com/CivilizedApeNFT",target:"_blank",rel:"noreferrer",children:"TW"})})]})})]})]})})})}function V(){return Object(f.jsx)("div",{children:Object(f.jsx)(Q,{})})}function X(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(s,{}),Object(f.jsxs)(c.c,{children:[Object(f.jsx)(c.a,{path:"/og",children:Object(f.jsx)(R,{})}),Object(f.jsx)(c.a,{path:"/ogs",children:Object(f.jsx)(I,{})}),Object(f.jsx)(c.a,{path:"/",children:Object(f.jsx)(V,{})})]})]})})}var Z,$=Object(m.a)(J||(J=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),nn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",en=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",tn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",rn=Object(m.a)(Z||(Z=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),nn,en,tn);a.a.hydrate(Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)($,{}),Object(f.jsx)(rn,{}),Object(f.jsx)(X,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ac1fae59.chunk.js.map