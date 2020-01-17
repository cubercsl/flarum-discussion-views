module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},,function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},,,function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),s=n(0),i=n(8),a=n.n(i),u=n(1),c=n.n(u),l=n(6),p=n.n(l),f=n(9),d=n.n(f),b=n(10),v=n.n(b);function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var w=n(3);function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return y(h(e=t.call.apply(t,[this].concat(o))||this),"visitedAt",c.a.attribute("visited_at",c.a.transformDate)),y(h(e),"user",c.a.hasOne("user")),y(h(e),"discussion",c.a.hasOne("discussion")),e}return Object(w.a)(e,t),e}(c.a),x=n(4),g=n.n(x),O=n(7),j=n.n(O),M=n(11),C=function(t){function e(){return t.apply(this,arguments)||this}Object(w.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.discussion=this.props.discussion,this.currentViewsCount=this.discussion.views().length},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",null,app.translator.transChoice("flarum_discussion_views.forum.modal_resetviews.label",this.currentViewsCount,{count:this.currentViewsCount})),m("div",{className:"Form-group"},g.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("flarum_discussion_views.forum.modal_resetviews.submit")}))))},n.title=function(){return app.translator.trans("flarum_discussion_views.forum.modal_resetviews.title")},n.className=function(){return"Modal--small"},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.props.discussion.save({resetViews:!0}).then((function(){m.redraw()})).catch((function(t){e.loading=!1,console.log(t)})),this.hide()},e}(n.n(M).a);r.a.initializers.add("michaelbelgium-discussion-views",(function(){Object(s.extend)(a.a.prototype,"sortMap",(function(t){1==app.forum.attribute("mb-discussionviews.show_filter")&&(t.popular="-view_count",t.unpopular="view_count")})),app.store.models.discussionviews=_,p.a.prototype.views=c.a.hasMany("views"),p.a.prototype.canReset=c.a.attribute("canReset"),Object(s.extend)(d.a.prototype,"infoItems",(function(t){var e=this.props.discussion,n=1==app.forum.attribute("mb-discussionviews.abbr_numbers")?v()(e.views().length):e.views().length;t.add("discussion-views",n)})),Object(s.extend)(j.a,"moderationControls",(function(t,e){e.canReset()&&e.views().length>0&&t.add("reset",g.a.component({children:app.translator.trans("flarum_discussion_views.forum.discussion_controls.resetviews_button"),icon:"far fa-eye-slash",onclick:this.resetViewsAction.bind(e)}))})),j.a.resetViewsAction=function(){return app.modal.show(new C({discussion:this}))}}))}]);
//# sourceMappingURL=forum.js.map