"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{713:function(e,t,r){r.d(t,{Hx:function(){return l},Y5:function(){return o},mv:function(){return u},uV:function(){return v},wr:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"b56ef60a1b1a38147944a852936fff31"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,console.log("response from api",r),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){r.d(t,{Z:function(){return l}});r(791);var n=r(87),a="MovieListItem_movieItem__mZL09",s="MovieListItem_movieDetails__ozAo8",i="MovieListItem_movieTitle__qARPK",c="MovieListItem_movieReleaseDate__InLFe",u=r(184),o=function(e){var t,r=e.movie,o=r.poster_path,v=r.title,l=r.release_date;return(0,u.jsx)("div",{className:a,children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(r.id),children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+o,alt:v,onError:function(e){e.target.onerror=null,e.target.src="/path/to/fallback-image.jpg"}}),(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("h3",{className:i,children:v}),(0,u.jsx)("p",{className:c,children:(t=l,new Date(t).toLocaleDateString(void 0,{month:"short",day:"2-digit",year:"numeric"}))})]})]})})},v="MovieList_movieList__uFrOZ",l=function(e){var t=e.movies;return(0,u.jsx)("div",{className:v,children:t.map((function(e){return(0,u.jsx)(o,{movie:e},e.id)}))})}},615:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(645),o=r(713),v=r(900),l="MoviesPage_moviesPage__sGK-c",f="MoviesPage_searchBar__qI4FA",p="MoviesPage_searchInput__rfm8h",m="MoviesPage_searchBtn__avbS7",h="MoviesPage_loading__tfrEE",d=r(184),_=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),r=t[0],s=t[1],_=(0,c.useState)([]),x=(0,a.Z)(_,2),g=x[0],w=x[1],Z=(0,c.useState)(!1),b=(0,a.Z)(Z,2),j=b[0],k=b[1],y=(0,c.useState)(null),L=(0,a.Z)(y,2),N=L[0],M=L[1],S=function(){var e=(0,n.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),M(null),e.prev=3,e.next=6,(0,o.mv)(r);case 6:n=e.sent,w(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),M("Failed to fetch movies.");case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("form",{onSubmit:S,className:f,children:[(0,d.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},className:p,placeholder:"Search for a movie..."}),(0,d.jsx)("button",{type:"submit",className:m,children:"Search"})]}),j&&(0,d.jsx)("div",{className:h,children:(0,d.jsx)(v.s5,{visible:!0,height:"96",width:"96",color:"grey",strokeWidth:"5",animationDuration:"0.75",ariaLabel:"rotating-lines-loading"})}),N&&(0,d.jsx)("div",{className:"error",children:N}),(0,d.jsx)(u.Z,{movies:g})]})}}}]);
//# sourceMappingURL=615.0f326f62.chunk.js.map