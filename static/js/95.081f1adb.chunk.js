/*! For license information please see 95.081f1adb.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[95],{3974:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var a=s(9439),n=s(2791),c=s(8998),i="BtnToTop_btnWrapper__h4pv+",r="BtnToTop_visible__-0Ef4",o="BtnToTop_btn__Nmvaf",l="BtnToTop_icon__-TDC6",u=s(184),d=function(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),s=t[0],d=t[1],p=function(){window.pageYOffset>600?d(!0):d(!1)},f=function(){window.scrollTo({top:0,behavior:"smooth"})};return(0,n.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[]),(0,u.jsx)("div",{className:"".concat(i," ").concat(s?r:""),onClick:f,children:(0,u.jsx)("div",{className:o,onClick:f,children:(0,u.jsx)(c.OeJ,{className:l})})})}},3323:function(e,t,s){"use strict";s.d(t,{Z:function(){return w}});var a="Footer_footer__kXlYa",n="Footer_container__R7sXj",c="Footer_callToAction__qHa0s",i="Footer_contactsList__uz8sS",r="Footer_contactItem__Ztmhc",o="Footer_link__3Ie8d",l="Footer_icon__Zscac",u="Footer_iconHand__0DiGo",d="Footer_hand__WIEmo",p=s(4316),f=s(2327),m=s(7462),_=s(4330),b=s(2202),x=s(184),w=function(e){var t=e.currentLanguage;return(0,x.jsx)("footer",{className:a,children:(0,x.jsxs)("div",{className:n,children:[(0,x.jsxs)("p",{className:c,children:["ua"===t?f.Z.footer.ua:f.Z.footer.en,(0,x.jsx)("span",{className:d,children:(0,x.jsx)(p.Klc,{className:u})})]}),(0,x.jsxs)("ul",{className:i,children:[(0,x.jsx)("li",{className:r,children:(0,x.jsxs)("a",{href:"mailto:nastya.andrus@gmail.com",target:"blank",className:o,children:[(0,x.jsx)(_.JwT,{className:l}),"nastya.andrus@gmail.com"]})}),(0,x.jsx)("li",{className:r,children:(0,x.jsxs)("a",{href:"https://join.skype.com/invite/cFrUyX19Qw90",target:"blank",className:o,children:[(0,x.jsx)(m.QIL,{className:l}),"skype"]})}),(0,x.jsx)("li",{className:r,children:(0,x.jsxs)("a",{href:"tel:+380996434033",target:"blank",className:o,children:[(0,x.jsx)(b.VAJ,{className:l}),"+380 99 64 34 033"]})}),(0,x.jsx)("li",{className:r,children:(0,x.jsxs)("a",{href:"https://www.facebook.com/anastasiia.andrusenko",target:"blank",className:o,children:[(0,x.jsx)(b.R9i,{className:l}),"facebook"]})})]})]})})}},9:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var a={header:"Header_header__HXQOm",container:"Header_container__vI36D",text:"Header_text__4jGdp",likeList:"Header_likeList__ttxOT",likeItem:"Header_likeItem__ycEVg",link:"Header_link__xIhZh",current:"Header_current__BieOL",homeIcon:"Header_homeIcon__Oh9I6",iconHouse:"Header_iconHouse__CVeGB",icon:"Header_icon__KAtlG"},n=s(1074),c=s(1765),i=s(4316),r=s(7462),o=s(2942),l=s(1087),u=s(2327),d=s(8947),p=s(184),f=function(e){return e.isActive?"".concat(a.link," ").concat(a.current):a.link},m=function(e){var t=e.currentLanguage;return(0,p.jsx)("div",{className:a.header,children:(0,p.jsxs)("div",{className:a.container,children:[(0,p.jsxs)("div",{className:a.mobNav,children:[(0,p.jsx)(l.rU,{to:"/",className:a.homeIcon,children:(0,p.jsx)(o.Wqx,{className:a.iconHouse})}),(0,p.jsx)("p",{className:a.text,children:"ua"===t?u.Z.headerTitle.ua:u.Z.headerTitle.en})]}),(0,p.jsxs)("ul",{className:a.likeList,children:[(0,p.jsx)("li",{className:a.likeItem,children:(0,p.jsxs)(l.OL,{className:f,to:"/write",children:[(0,p.jsx)(n.fXt,{className:a.icon}),"ua"===t?u.Z.likeList.ua[0]:u.Z.likeList.en[0]]})}),(0,p.jsx)("li",{className:a.likeItem,children:(0,p.jsxs)(l.OL,{className:f,to:"/code",children:[(0,p.jsx)(i.bHw,{className:a.icon}),"ua"===t?u.Z.likeList.ua[2]:u.Z.likeList.en[2]]})}),(0,p.jsx)("li",{className:a.likeItem,children:(0,p.jsxs)(l.OL,{className:f,to:"/draw",children:[(0,p.jsx)(c.R8j,{className:a.icon}),"ua"===t?u.Z.likeList.ua[1]:u.Z.likeList.en[1]]})}),(0,p.jsx)("li",{className:a.likeItem,children:(0,p.jsxs)(l.OL,{className:f,to:"/photo",children:[(0,p.jsx)(r.OKb,{className:a.icon}),"ua"===t?u.Z.likeList.ua[3]:u.Z.likeList.en[3]]})})]}),(0,p.jsx)(d.Z,{isHeader:!0})]})})}},8947:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var a="LangToggle_container__eOSPu",n="LangToggle_text__VNNv+",c="LangToggle_noText__eBCn9",i="LangToggle_lang__foADq",r=s(2327),o=s(184),l=function(e){var t=e.isHeader,s=function(e){var t,s=e.target.value;t=s,localStorage.setItem("language",t),window.location.reload()},l=localStorage.getItem("language")||"en";return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("p",{className:t?c:n,children:r.Z.language[l]}),(0,o.jsx)("button",{className:i,onClick:s,value:"en",children:"EN"}),(0,o.jsx)("button",{className:i,onClick:s,value:"ua",children:"UA"})]})})}},9095:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(9),n=s(3323),c={container:"Draw_container__hnPnR",title:"Draw_title__l7Jm5",picList:"Draw_picList__cMPcq",img:"Draw_img__Z2GmX"},i=s(2327),r=s(3974),o=s(184),l=s(6075),u=function(e){var t=e.currentLanguage,u=l.bind(c);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:c.section,children:[(0,o.jsx)(a.Z,{currentLanguage:t}),(0,o.jsx)("h2",{className:c.title,children:"ua"===t?i.Z.drawPageTitle.ua:i.Z.drawPageTitle.en}),(0,o.jsxs)("div",{className:c.container,children:[(0,o.jsx)("ul",{className:c.picList,children:["18.webp","16.webp","17.webp","2.webp","1.webp","3.webp","4.webp","10.webp","5.webp","15.webp","7.webp","14.webp","13.webp","11.webp","6.webp","12.webp","8.webp","9.webp"].map((function(e,t){return(0,o.jsx)("li",{className:u("img"),children:(0,o.jsx)("img",{src:s(902)("./".concat(e)),alt:"Draw ".concat(t+1)})},t)}))}),(0,o.jsx)("ul",{className:c.contents}),(0,o.jsx)(r.Z,{})]})]}),(0,o.jsx)(n.Z,{currentLanguage:t})]})}},902:function(e,t,s){var a={"./1.webp":6333,"./10.webp":3297,"./11.webp":3592,"./12.webp":6711,"./13.webp":2668,"./14.webp":9087,"./15.webp":9056,"./16.webp":9237,"./17.webp":5221,"./18.webp":6329,"./2.webp":1132,"./3.webp":7322,"./4.webp":8341,"./5.webp":3206,"./6.webp":1925,"./7.webp":7087,"./8.webp":890,"./9.webp":220};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id=902},6333:function(e,t,s){"use strict";e.exports=s.p+"static/media/1.24e3da0882ddc9073af9.webp"},3297:function(e,t,s){"use strict";e.exports=s.p+"static/media/10.01d499f05ded8ab4bcac.webp"},3592:function(e,t,s){"use strict";e.exports=s.p+"static/media/11.e4f30f4035703b1ee080.webp"},6711:function(e,t,s){"use strict";e.exports=s.p+"static/media/12.f24c4436c9c3021c1258.webp"},2668:function(e,t,s){"use strict";e.exports=s.p+"static/media/13.5359edfb48866f581409.webp"},9087:function(e,t,s){"use strict";e.exports=s.p+"static/media/14.db8c1c6fad35528f0c9e.webp"},9056:function(e,t,s){"use strict";e.exports=s.p+"static/media/15.2ec6cdfdf6284e655e22.webp"},9237:function(e,t,s){"use strict";e.exports=s.p+"static/media/16.bbf6f9fdfad80e3885ef.webp"},5221:function(e,t,s){"use strict";e.exports=s.p+"static/media/17.1b92f8aaf377dbaa5fc0.webp"},6329:function(e,t,s){"use strict";e.exports=s.p+"static/media/18.5a64d66dcdecbfa01470.webp"},1132:function(e,t,s){"use strict";e.exports=s.p+"static/media/2.2049722ec9c234b0ebf7.webp"},7322:function(e,t,s){"use strict";e.exports=s.p+"static/media/3.5aee1839464cdcaf909a.webp"},8341:function(e,t,s){"use strict";e.exports=s.p+"static/media/4.09e0e0fd75fc41d077bf.webp"},3206:function(e,t,s){"use strict";e.exports=s.p+"static/media/5.2d32388519cf729edbaa.webp"},1925:function(e,t,s){"use strict";e.exports=s.p+"static/media/6.598057ab472ef9a67522.webp"},7087:function(e,t,s){"use strict";e.exports=s.p+"static/media/7.0c070febb3f70d074f6f.webp"},890:function(e,t,s){"use strict";e.exports=s.p+"static/media/8.98c64e6978cdc65bebef.webp"},220:function(e,t,s){"use strict";e.exports=s.p+"static/media/9.5b3223fe391f7e7d5796.webp"},6075:function(e,t){var s;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=i(e,c.call(this,s)))}return e}function c(e){if("string"===typeof e||"number"===typeof e)return this&&this[e]||e;if("object"!==typeof e)return"";if(Array.isArray(e))return n.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)a.call(e,s)&&e[s]&&(t=i(t,this&&this[s]||s));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=95.081f1adb.chunk.js.map