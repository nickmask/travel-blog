(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return g});var n=t(6),r=t.n(n),i=t(0),o=t.n(i),l=(t(136),t(151)),c=t.n(l),u=t(150),s=t.n(u),d=t(215),m=t.n(d),p=t(145),v=t(156),f=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),a=c()(this,"props.data.allContentfulBlogPost.edges");return o.a.createElement(p.a,{location:this.props.location},o.a.createElement("div",{style:{background:"#fff"}},o.a.createElement(s.a,{title:e}),o.a.createElement("div",{className:m.a.headerWrapper},o.a.createElement("div",{className:m.a.header},"Latest posts")),o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"section-headline"},"Recent posts"),o.a.createElement("ul",{className:"article-list"},a.map(function(e){var a=e.node;return o.a.createElement("li",{key:a.slug},o.a.createElement(v.a,{article:a}))})))))},a}(o.a.Component);a.default=f;var g="2680190156"},136:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return v}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),i=t(4),o=t.n(i),l=t(135),c=t.n(l);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var u=t(137),s=t.n(u);t.d(a,"PageRenderer",function(){return s.a});var d=t(27);t.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,a,t){var n;e.exports=(n=t(138))&&n.default||n},138:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),i=t(4),o=t.n(i),l=t(48),c=t(2),u=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=u},139:function(e,a,t){},142:function(e,a,t){e.exports=t.p+"static/logo-black-287b37993f162826d1c427525e0b5fa0.png"},143:function(e,a,t){e.exports={logo:"navigation-module--logo--26o2E",navigationWrapper:"navigation-module--navigationWrapper--RmtUt",navigation:"navigation-module--navigation--1Y0Om",navigationItem:"navigation-module--navigationItem--302w2"}},145:function(e,a,t){"use strict";var n=t(6),r=t.n(n),i=t(0),o=t.n(i),l=t(136),c=(t(139),function(e){var a=e.children;return o.a.createElement("div",{style:{maxWidth:"100vw",margin:"0 auto"}},a)}),u=t(142),s=t.n(u),d=t(143),m=t.n(d),p=function(){return o.a.createElement("nav",{role:"navigation"},o.a.createElement("div",{className:m.a.navigationWrapper},o.a.createElement("div",{className:m.a.logo},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:s.a,alt:"eatstayleave logo"}))),o.a.createElement("ul",{className:m.a.navigation},o.a.createElement("li",{className:m.a.navigationItem},o.a.createElement(l.Link,{to:"/"},"Home")),o.a.createElement("li",{className:m.a.navigationItem},o.a.createElement(l.Link,{to:"/blog/"},"Blog")))))},v=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",o.a.createElement(c,null,o.a.createElement(p,null),a)},a}(o.a.Component);a.a=v},156:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(136),o=t(149),l=t.n(o),c=t(157),u=t.n(c);a.a=function(e){var a=e.article;return r.a.createElement("div",{className:u.a.preview},r.a.createElement(l.a,{className:u.a.previewImage,alt:"",fluid:a.heroImage.fluid}),r.a.createElement("div",{className:u.a.previewTextBox},r.a.createElement("h3",{className:u.a.previewTitle},r.a.createElement(i.Link,{to:"/blog/"+a.slug},a.title)),r.a.createElement("small",null,a.publishDate),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}})))}},157:function(e,a,t){e.exports={preview:"articlePreview-module--preview--3k3bq",previewTitle:"articlePreview-module--previewTitle--1opSy",previewImage:"articlePreview-module--previewImage--1jBW_",previewTextBox:"articlePreview-module--previewTextBox--3F7H1",tag:"articlePreview-module--tag--22uAM"}},215:function(e,a,t){e.exports={header:"blog-module--header--2fye1",headerWrapper:"blog-module--headerWrapper--2phgy"}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-c702cf441214642a99da.js.map