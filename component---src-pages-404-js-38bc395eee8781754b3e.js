(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(160),s=n(158),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Страница не найдена"),o.a.createElement("p",null,"Такая ссылка на существует... Это печально."))},e}(o.a.Component);e.default=u;var l="1097489062"},153:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(155);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=n(163),r=n.n(a),i=n(164),o=n.n(i),c=new r.a(o.a);var s=c.rhythm,u=c.scale},155:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},156:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},157:function(t){t.exports={data:{site:{siteMetadata:{git:"https://github.com/HardAndHeavy/ivan.grig"}}}}},158:function(t,e,n){"use strict";var a=n(159),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(165),u=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title,s=a.data.site,l=e||s.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"ru",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},159:function(t){t.exports={data:{site:{siteMetadata:{title:"7grig.ru",description:"Это интернет-журнал обо всём. Я увлекаюсь программированием и саморазвитием. Люблю музыку, спорт и конечно же свою семью.",author:"Иван Григорьев"}}}}},160:function(t,e,n){"use strict";n(34);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(153),s=n(157),u=n(154),l="390769054",d=function(){return o.a.createElement(c.b,{query:l,render:function(t){var e=t.site.siteMetadata.git;return o.a.createElement("footer",{className:"secondColor",style:{marginTop:Object(u.a)(2)}},o.a.createElement("p",null,"Исходный код на ",o.a.createElement("a",{className:"secondColor",href:e},"GitHub")))},data:s})},p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1),marginTop:0})},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},o.a.createElement("header",null,t),o.a.createElement("main",null,r),o.a.createElement(d,null))},e}(o.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-38bc395eee8781754b3e.js.map