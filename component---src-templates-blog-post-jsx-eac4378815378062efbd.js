(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{130:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return v});var n=t(6),r=t.n(n),o=t(0),i=t.n(o),l=t(147),u=t.n(l),c=t(148),s=t.n(c),d=t(146),m=t.n(d),p=t(142),h=t(210),f=t.n(h),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=s()(this.props,"data.contentfulBlogPost"),a=s()(this.props,"data.site.siteMetadata.title");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e.title+" | "+a}),i.a.createElement("div",{className:f.a.heroWrapper},i.a.createElement("div",{className:f.a.hero},i.a.createElement(m.a,{className:f.a.heroImage,alt:e.title,fluid:e.heroImage.fluid}))),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"section-headline"},e.title),i.a.createElement("p",{style:{display:"block"}},e.publishDate),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}}))))},a}(i.a.Component);a.default=g;var v="1729026082"},135:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(134),u=t.n(l);t.d(a,"Link",function(){return u.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(136),s=t.n(c);t.d(a,"PageRenderer",function(){return s.a});var d=t(27);t.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},136:function(e,a,t){var n;e.exports=(n=t(137))&&n.default||n},137:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(48),u=t(2),c=function(e){var a=e.location,t=u.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},138:function(e,a,t){},140:function(e,a,t){e.exports={logo:"navigation-module--logo--26o2E",navigationWrapper:"navigation-module--navigationWrapper--RmtUt",navigation:"navigation-module--navigation--1Y0Om",navigationItem:"navigation-module--navigationItem--302w2"}},142:function(e,a,t){"use strict";var n=t(6),r=t.n(n),o=t(0),i=t.n(o),l=t(135),u=(t(138),function(e){var a=e.children;return i.a.createElement("div",{style:{maxWidth:"100vw",margin:"0 auto"}},a)}),c=t(140),s=t.n(c),d=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("div",{className:s.a.navigationWrapper},i.a.createElement("span",{className:s.a.logo},"eatstayleave"),i.a.createElement("ul",{className:s.a.navigation},i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(l.Link,{to:"/blog/"},"Blog")))))},m=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/travel-blog/",i.a.createElement(u,null,i.a.createElement(d,null),a)},a}(i.a.Component);a.a=m},210:function(e,a,t){e.exports={heroWrapper:"heroNarrow-module--heroWrapper--1hTCn",hero:"heroNarrow-module--hero--2spKA",heroImage:"heroNarrow-module--heroImage--33VMP",heroDetails:"heroNarrow-module--heroDetails--17ZKw",heroHeadline:"heroNarrow-module--heroHeadline--1KNgi",heroTitle:"heroNarrow-module--heroTitle--2ZOMS"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-eac4378815378062efbd.js.map