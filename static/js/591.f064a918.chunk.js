"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[591],{713:function(e,t,r){r.d(t,{Hx:function(){return f},Y5:function(){return o},mv:function(){return c},uV:function(){return v},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b56ef60a1b1a38147944a852936fff31"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,console.log("response from api",r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){r.d(t,{Z:function(){return c}});r(791);var n=r(87),a={movieItem:"MovieListItem_movieItem__mZL09",movieDetails:"MovieListItem_movieDetails__ozAo8"},s=r(184),i=function(e){var t=e.movie,r=t.poster_path,i=t.title,u=t.release_date;return(0,s.jsx)("div",{className:a.movieItem,children:(0,s.jsxs)(n.rU,{to:"/movies/".concat(t.id),children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+r,alt:i,className:a.moviePoster}),(0,s.jsxs)("div",{className:a.movieDetails,children:[(0,s.jsx)("h3",{className:a.movieTitle,children:i}),(0,s.jsx)("p",{className:a.movieReleaseDate,children:u})]})]})})},u="MovieList_movieList__uFrOZ",c=function(e){var t=e.movies;return(0,s.jsx)("div",{className:u,children:t.map((function(e){return(0,s.jsx)(i,{movie:e},e.id)}))})}},591:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),i=r.n(s),u=r(791),c=r(645),o=r(713),v=r(900),f="HomePage_homePage__BdXzw",m="HomePage_loading__AaB4z",l="HomePage_error__HLfIr",p=r(184),d=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],d=(0,u.useState)(!0),h=(0,a.Z)(d,2),x=h[0],_=h[1],g=(0,u.useState)(null),w=(0,a.Z)(g,2),Z=w[0],b=w[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b("Failed to fetch trending movies.");case 10:return e.prev=10,_(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),x?(0,p.jsx)("div",{className:m,children:(0,p.jsx)(v.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"})}):Z?(0,p.jsx)("div",{className:l,children:Z}):(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("h2",{children:"Trending Movies"}),(0,p.jsx)(c.Z,{movies:r})]})}}}]);
//# sourceMappingURL=591.f064a918.chunk.js.map