(this.webpackJsonpusesomeactionshook=this.webpackJsonpusesomeactionshook||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=n(12),l=n(13),m=n(16),i=n(15),s=n(2),E=function(e){return{type:"REMOVE_COMMENT",payload:e}},f=function(){return{type:"SORT_COMMENTS"}},b=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={comment:""},e.handleChange=function(t){e.setState({comment:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.saveComment(e.state.comment),e.setState({comment:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Add a Comment"),r.a.createElement("textarea",{value:this.state.comment,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("button",null,"Submit Comment")))}}]),n}(r.a.Component),O=Object(s.b)(null,{saveComment:function(e){return{type:"SAVE_COMMENT",payload:e}}})(b),v=n(6),h=n(1),p=function(e){var t=Object(s.c)();return Object(a.useMemo)((function(){return e.map((function(e){return Object(h.a)(e,t)}))}),[t])};var d=function(e){var t=e.item,n=p([E]),a=Object(v.a)(n,1)[0];return r.a.createElement("div",null,r.a.createElement("li",{onClick:function(){return a(t)}},t," click on me to remove"))};var C=Object(s.b)((function(e){return{comments:e.comments}}))((function(e){var t=e.comments,n=p([f]),a=Object(v.a)(n,1)[0];return r.a.createElement("div",null,r.a.createElement("h3",null,"Comment List"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement(d,{item:e,key:t})}))),r.a.createElement("button",{onClick:a},"SORT"))}));var j=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(C,null))},M=n(10),S=Object(h.b)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["comment 1","comment 2","comment 3"],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_COMMENT":return[].concat(Object(M.a)(e),[t.payload]);case"REMOVE_COMMENT":return e.filter((function(e){return e!==t.payload}));case"SORT_COMMENTS":var n=Object(M.a)(e).sort();return n;default:return e}}}),y=function(e){return r.a.createElement(s.a,{store:Object(h.c)(S)},e.children)};o.a.render(r.a.createElement(y,null,r.a.createElement(j,null)),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bf1a2c11.chunk.js.map