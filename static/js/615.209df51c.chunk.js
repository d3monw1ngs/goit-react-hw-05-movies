"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{713:function(e,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return o},mv:function(){return c},uV:function(){return v},wr:function(){return u}});var n=r(861),a=r(757),s=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b56ef60a1b1a38147944a852936fff31"};var u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,console.log("response from api",r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){r.d(t,{Z:function(){return c}});r(791);var n=r(87),a={movieItem:"MovieListItem_movieItem__mZL09",movieDetails:"MovieListItem_movieDetails__ozAo8"},s=r(184),i=function(e){var t=e.movie,r=t.posterUrl,i=t.title,u=t.releaseDate;return(0,s.jsx)("div",{className:a.movieItem,children:(0,s.jsxs)(n.rU,{to:"/movies/".concat(t.id),children:[(0,s.jsx)("img",{src:r,alt:i,className:a.moviePoster}),(0,s.jsxs)("div",{className:a.movieDetails,children:[(0,s.jsx)("h3",{className:a.movieTitle,children:i}),(0,s.jsx)("p",{className:a.movieReleaseDate,children:u})]})]})})},u="MovieList_movieList__uFrOZ",c=function(e){var t=e.movies;return(0,s.jsx)("div",{className:u,children:t.map((function(e){return(0,s.jsx)(i,{movie:e},e.id)}))})}},615:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(861),a=r(439),s=r(757),i=r.n(s),u=r(791),c=r(645),o=r(713),v=r(900),l="MoviesPage_moviesPage__sGK-c",f="MoviesPage_loading__tfrEE",m=r(184),p=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],s=t[1],p=(0,u.useState)([]),d=(0,a.Z)(p,2),h=d[0],x=d[1],Z=(0,u.useState)(!1),_=(0,a.Z)(Z,2),g=_[0],w=_[1],b=(0,u.useState)(null),j=(0,a.Z)(b,2),k=j[0],y=j[1],N=function(){var e=(0,n.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),y(null),e.prev=3,e.next=6,(0,o.mv)(r);case 6:n=e.sent,x(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),y("Failed to fetch movies.");case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("form",{onSubmit:N,children:[(0,m.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Search for a movie..."}),(0,m.jsx)("button",{type:"submit",children:"Search"})]}),g&&(0,m.jsx)("div",{className:f,children:(0,m.jsx)(v.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"})}),k&&(0,m.jsx)("div",{className:"error",children:k}),(0,m.jsx)(c.Z,{movies:h})]})}}}]);
//# sourceMappingURL=615.209df51c.chunk.js.map