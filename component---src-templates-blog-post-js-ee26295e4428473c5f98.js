(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(34);var n=a(7),r=a.n(n),i=(a(75),a(0)),c=a.n(i),o=a(153),l=a(161),s=a(160),d=a(158),m=a(154),u=function(e){var t=e.frontmatter.keywords;return t?t.split(",").map(function(e){return e.trim()}):[]},p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return c.a.createElement(s.a,{location:this.props.location,title:t},c.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt,keywords:u(e)}),c.a.createElement("h1",null,e.frontmatter.title),c.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},e.frontmatter.date),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),c.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),c.a.createElement(l.a,null),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginLeft:0}},c.a.createElement("li",null,n&&c.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),c.a.createElement("li",null,r&&c.a.createElement(o.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(c.a.Component);t.default=p;var f="1876477013"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(155);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(163),r=a.n(n),i=a(164),c=a.n(i),o=new r.a(c.a);var l=o.rhythm,s=o.scale},155:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},157:function(e){e.exports={data:{site:{siteMetadata:{git:"https://github.com/HardAndHeavy/ivan-blog"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(165),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"ru",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"grig.life",description:"Это интернет-журнал обо всём. Я увлекаюсь программированием и саморазвитием. Люблю музыку, спорт и конечно же свою семью.",author:"Иван Григорьев"}}}}},160:function(e,t,a){"use strict";a(34);var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(153),l=a(157),s=a(154),d="390769054",m=function(){return c.a.createElement(o.b,{query:d,render:function(e){var t=e.site.siteMetadata.git;return c.a.createElement("footer",{className:"secondColor",style:{marginTop:Object(s.a)(2)}},c.a.createElement("p",null,"Исходный код на ",c.a.createElement("a",{className:"secondColor",href:t},"GitHub")))},data:l})},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?c.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1),marginTop:0})},c.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):c.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},c.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},c.a.createElement("header",null,e),c.a.createElement("main",null,r),c.a.createElement(m,null))},t}(c.a.Component);t.a=u},161:function(e,t,a){"use strict";a(166),a(34);var n=a(162),r=a(0),i=a.n(r),c=a(153),o=a(167),l=a.n(o),s=a(168),d=a(169),m=a(170),u=a(154),p=function(e){return i.a.createElement("a",Object.assign({className:"socialLink",style:{marginRight:10},target:"_blank"},e),e.children)};var f="4035997540";t.a=function(){return i.a.createElement(c.b,{query:f,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"table",marginBottom:Object(u.a)(1)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{display:"table-cell",verticalAlign:"middle",marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",{className:"secondColor",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:20}},a),i.a.createElement("p",{style:{display:"table-cell",verticalAlign:"middle",paddingLeft:20,fontSize:25}},i.a.createElement(p,{href:"mailto:"+n.mail},i.a.createElement(s.a,{icon:m.a})),i.a.createElement(p,{href:n.vk},i.a.createElement(s.a,{icon:d.c})),i.a.createElement(p,{href:n.instagram},i.a.createElement(s.a,{icon:d.b})),i.a.createElement(p,{href:n.github},i.a.createElement(s.a,{icon:d.a}))))},data:n})}},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFOklEQVQ4yyWU51OUVxSH93uC9GVZ2F1kC8s2lqUqKoqAWEBNQIINsQACNsSuIIImTEyMAhKFGDU64iRm7GOZiS0KqFQVQZAikvZPPDm7fjhz3/fO+z73d8753aPw+twLr8+8CPTzxxgWhlqpRKMMIEKjJs4UToLZgFOvIzw4CN8p3gT4+mGS7ww62dNo0KrVqIOCUCk/hcLX21c2VETq9ejlg1BlIKkxNqZZTCRZI5hpNxMVrsOsDUETGECwny9hoSEC1KIRkE6A4VoNenl3H6CwmkxEWy04zBFoVCpU/n449FOxhGlxGcOJmqol2WrEFqpiQ3I0eYlWdCEhuOw2jKJSK//o1MGyp5YIReGy2XDZ7FhNEThMRoxymkUXSpItgoK06RwvyuV23W7qV2dwYWMWh7NnM8usx2m1ekQYtFoPzJ26Bxhjt+O0WIl1RJEQHUW8zUrh4nRqi1ZwcV8x7cd20tFQRWdDJXf353Nq7UKyXJFMFZA9wuRR6U5ZE6zyQBXxDgcJTidxsrqf7UYDW3IzObF9Aye35XN13xretNQycP44p4tyyIm3EujrS2iwGrtk5K69xWj0pO0BRkdG4g6XxUys1GVObDS7li2gbGk6TWW5PKkr5WJFAZkxdszS6cbCXFIdkeKMzwmV+mkErNeFyRoszZKUk2KicYp0p8lAjMNOWVYq1zfncXTdl5yvyOf5sXJOla1ku+yfqyhi8nIjN6q2ohU3eHlNYYqE23o+4pYQtQDTkqYxP3kmcxLiSIpxkTMvlau7i3l0qJTmTV9xv6aYV82H6Wuq4VndDu5Vloji9USLN32m+Hj86yP+DJ+qZ+6cVBSxkmpKYgKLUpJJnzGd5qYW+tpf0nGxhdrClTSVLOPmvrXcO1hM67ZV3KwqZcuCmeLJQAL9AwiS8PX2wag3sDovD8W0KBvponJNbg7XfrvKUP97Bl4PMfTuI1/v2sXevIWcFdDl8hWcLFxKw4ZsDmamYZKa+Ys6pf+nCJBGLUpLQzE7zkVBbjZPHzxlZHCc0XdjDL0ZknWcm5cuU541h6r8bLYuSqZk3jQa1y1mU8YMdNIQb28//OQqBotapSiNFk8r5ibGcePKdcaGJ+jvecuHkQneD47Q97yHj+P/0lJTyf7sVM6U5rPEGcm2xSl8s2YJlTnp7Pgig0i51+60DbJOj49HUV6yifH3HxkT0OjQuKgcZWJ0ku72TgH+LXsfaNqzjVt713GufC3Xqsu4U72Rn8tXsSTBQZh7OIhCh1gva/58FIerDjEyIJCxSQH8RX93PxMjHxkeGOGfyf8YEeUvHjym99x3vL5wgvvf7uFsxVo2Z84mREBBAQGEyIRyT6q5s2ah2FxcypjU613/MG/7BiXVPsaHP9ApCm/9epXqnXs5U3uA4d9beNXazLWa7ZwSP57aWkB6rANVoNIzdTSqICINBhSFa9bzVmo3Js3oe/GK7o4eT9ptD5/S29FNV3sPzy6epv9SPQ9/OMDtIxXcP7qfusLlLM3IYGbidAEq0ct9tsnkUuzYUkGvqHJ3dlgs87rzjdjmHfdv3JEDekX5CG3n6+kScz9prKbjxyOc3lKAWWZianIKC1LTMYeHe4BRUkdF4/cnGOwbYkBUupV2t3XT9kcbrT+d5+WfL3nV0cXThn20n6ziUX0lLeUFpMh1jXfGEGd3EOd0EWWxeKDuMaj4pfksbY/aeSPNGB0cE2AXPR29XG+9wqO7j3l8toG24zt4LLBjRcsoWZ7Hipw8khMSiZJ5aDUYsZstHnUWman/A8GeUwXqMtlHAAAAAElFTkSuQmCC",width:50,height:50,src:"/static/7585f3ae943fe22fd571340275b18ec0/58398/profile-pic.png",srcSet:"/static/7585f3ae943fe22fd571340275b18ec0/58398/profile-pic.png 1x,\n/static/7585f3ae943fe22fd571340275b18ec0/fd23f/profile-pic.png 1.5x,\n/static/7585f3ae943fe22fd571340275b18ec0/fc368/profile-pic.png 2x,\n/static/7585f3ae943fe22fd571340275b18ec0/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Иван Григорьев",social:{vk:"https://vk.com/soloist",instagram:"https://www.instagram.com/hardandheavymetal",github:"https://github.com/HardAndHeavy",mail:"HardAndHeavyMetal@gmail.com"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ee26295e4428473c5f98.js.map