"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{713:function(e,t,r){r.d(t,{Hx:function(){return v},Y5:function(){return o},mv:function(){return u},uV:function(){return l},wr:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b56ef60a1b1a38147944a852936fff31"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,console.log("response from api",r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},447:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(689),o=r(87),l=r(713),v=r(900),f="MovieDetailsPage_movieDetailsPage__d9Lda",p="MovieDetailsPage_movieDetails__LWqwe",d="MovieDetailsPage_movieNav__KgZoa",h="MovieDetailsPage_active__zb0rP",m="MovieDetailsPage_loading__xs0t9",x="MovieDetailsPage_error__xS-zI",g="MovieDetailsPage_backBtn__98l0t",_=r(184),w=function(){var e=(0,u.s0)(),t=(0,u.UO)().movieId,r=(0,c.useState)(null),s=(0,a.Z)(r,2),w=s[0],b=s[1],k=(0,c.useState)(!0),Z=(0,a.Z)(k,2),j=Z[0],y=Z[1],D=(0,c.useState)(null),N=(0,a.Z)(D,2),P=N[0],M=N[1];if((0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(t);case 3:r=e.sent,b(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),M("Failed to fetch movie details.");case 10:return e.prev=10,y(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),j)return(0,_.jsx)("div",{className:m,children:(0,_.jsx)(v.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"})});if(P)return(0,_.jsx)("div",{className:x,children:P});var L=w.poster_path,C=w.title;return(0,_.jsxs)("div",{className:f,children:[(0,_.jsx)("button",{onClick:function(){return e("/")},className:g,children:"Go Back"}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+L,alt:C,onError:function(e){e.target.onerror=null,e.target.src="/path/to/fallback-image.jpg"}}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:w.title}),(0,_.jsx)("p",{children:w.overview})]})]}),(0,_.jsxs)("nav",{className:d,children:[(0,_.jsx)(o.OL,{to:"cast",className:function(e){return e.isActive?h:""},children:"Cast"}),(0,_.jsx)(o.OL,{to:"reviews",className:function(e){return e.isActive?h:""},children:"Reviews"})]}),(0,_.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=447.25d5269c.chunk.js.map