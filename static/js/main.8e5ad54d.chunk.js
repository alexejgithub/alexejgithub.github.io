(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,a){t.exports=a(20)},17:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(10),r=a(1),o=a(2),s=a(3),i=a(5),c=a(4),l=a(6),u=a(0),h=a.n(u),m=a(8),f=a.n(m),d=(a(17),a(9)),p=a.n(d),b=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).updateTitle=function(t){a.setState({titleKeyword:t.target.value})},a.createTitle=function(t){t.preventDefault(),""!==a.state.titleKeyword&&a.props.createTitle(a.state.titleKeyword),a.setState({titleKeyword:""})},a.state={titleKeyword:""},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return h.a.createElement("div",{className:"container wb"},h.a.createElement("div",{className:"row"},h.a.createElement("h3",null,"Keyword Query"),h.a.createElement("form",{onSubmit:this.createTitle},h.a.createElement("div",{className:"col-lg-12 input-group"},h.a.createElement("input",{type:"text",className:"center-block",placeholder:"Insert here...",value:this.state.titleKeyword,onChange:this.updateTitle}),h.a.createElement("button",{className:"btn btn-dark center-block"},"Add")))),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-sm"},h.a.createElement("ul",{className:"list-group"},this.props.keywords.map(function(e){return h.a.createElement("li",{key:p()(),className:"hoverHighlight list-group-item"},e,h.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return t.props.onDelete(e)}},h.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})))))}}]),e}(h.a.Component),v=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).updateAuthor=function(t){a.setState({authorName:t.target.value})},a.createAuthor=function(t){t.preventDefault(),""!==a.state.authorName&&a.props.createAuthor(a.state.authorName),a.setState({authorName:""})},a.state={authorName:""},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return h.a.createElement("div",{className:"container wb"},h.a.createElement("div",{className:"row"},h.a.createElement("h3",null,"Author Query"),h.a.createElement("form",{onSubmit:this.createAuthor},h.a.createElement("div",{className:"col-lg-12 input-group"},h.a.createElement("input",{type:"text",className:"center-block",placeholder:"Insert here...",value:this.state.authorName,onChange:this.updateAuthor}),h.a.createElement("button",{className:"btn btn-dark center-block"},"Add")))))}}]),e}(h.a.Component),E=function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"spinner-border",role:"status"},h.a.createElement("span",{className:"sr-only"},"Loading...")))},N=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).handleDeleteKeyword=function(t){a.setState(function(e){return{keywords:e.keywords.filter(function(e){return e!==t})}})},a.handleDeleteAuthor=function(t){a.setState(function(e){return{authors:e.authors.filter(function(e){return e!==t})}},function(){a.searchAuthors()})},a.createVenuesDir=function(){var t={};a.state.titleHits.forEach(function(e){var a=e.info.venue;void 0===t[a]?t[a]=1:t[a]+=1}),t=Object(r.a)(Object.entries(t)).sort(function(t,e){return e[1]-t[1]}),a.setState({venuesDict:t})},a.filterAuthors=function(){if(a.state.titleAuthorMap.size>0){var t=new Map(a.state.titleAuthorMap);a.state.authors.forEach(function(e){e.authors.forEach(function(e){t.delete(e.info.author)})});var e=!0,r=!1,o=void 0;try{for(var s,i=a.state.coAuthorMap.entries()[Symbol.iterator]();!(e=(s=i.next()).done);e=!0){var c=s.value,l=Object(n.a)(c,1)[0];t.delete(l)}}catch(u){r=!0,o=u}finally{try{e||null==i.return||i.return()}finally{if(r)throw o}}a.setState({titleAuthorMap:t})}},a.searchTitle=function(t){a.setState({isLoading:!0}),a.setState({titleHits:[]}),a.setState({hitsAmountTitles:0});var e=0,n=[],o=a.state.keywords.map(function(t){return new Promise(function(a){fetch("https://dblp.org/search/publ/api?q=".concat(t,"&h=1000&format=json")).then(function(t){t.json().then(function(t){t.result.hits.hit&&(e+=1*t.result.hits["@total"],n=[].concat(Object(r.a)(n),Object(r.a)(t.result.hits.hit)))}).then(function(){a()})})})});Promise.all(o).then(function(){a.setState({isLoading:!1}),a.setState({hitsAmountTitles:e}),a.setState({titleHits:n}),a.createTitleAuthors(),a.createVenuesDir()})},a.createTitleAuthors=function(){var t=new Map;a.setState({isLoading:!0}),a.state.titleHits.map(function(e){if(void 0!==e.info.authors)if(Array.isArray(e.info.authors.author))e.info.authors.author.forEach(function(e){var a=t.has(e)?t.get(e):0;t.set(e,1+a)});else{var a=t.has(e.info.authors.author)?t.get(e.info.authors.author):0;t.set(e.info.authors.author,1+a)}return!0}),t=new Map(Object(r.a)(t.entries()).sort(function(t,e){return e[1]-t[1]})),a.setState({titleAuthorMap:t}),a.setState({isLoading:!1})},a.createCoAuthorSet=function(){a.setState({isLoading:!0}),a.setState({coAuthorMap:[]});var t=a.state.authors,e=new Set,n=new Map,o=[];t.forEach(function(t){t.authors.forEach(function(t){var a=t.info.url.split("/").slice(-3).join("/"),n=fetch("http://cors-anywhere.herokuapp.com/https://dblp.uni-trier.de/rec/".concat(a),{method:"HEAD"}).then(function(t){var a=!0,n=!1,r=void 0;try{for(var o,s=t.headers.entries()[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var i=o.value;if("x-final-url"===i[0]){var c=i[1].split("/").slice(-2);e.add(c.join("/"))}}}catch(l){n=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}});o.push(n)})}),a.setState({authorSet:e}),Promise.all(o).then(function(){var t=[];e.forEach(function(e){var a=fetch("https://dblp.uni-trier.de/pers/xc/".concat(e,".xml")).then(function(t){return t.text()}).then(function(t){return(new window.DOMParser).parseFromString(t,"text/xml")}).then(function(t){Object(r.a)(t.getElementsByTagName("author")).forEach(function(t){var e=t.getAttribute("count"),a=t.childNodes[0].nodeValue;if(e>2){var r=n.has(a)?n.get(a):0;n.set(a,1*e+r)}})});t.push(a)}),Promise.all(t).then(function(){n=new Map(Object(r.a)(n.entries()).sort(function(t,e){return e[1]-t[1]})),a.setState({isLoading:!1}),a.setState({coAuthorMap:n})})})},a.searchNewAuthor=function(t){a.setState({isLoading:!0});var e=Object(r.a)(a.state.authors),n=[];new Promise(function(e){fetch("https://dblp.org/search/author/api?q=".concat(t,"&h=1000&format=json")).then(function(t){t.json().then(function(t){t.result.hits.hit&&(n=[].concat(Object(r.a)(n),Object(r.a)(t.result.hits.hit)))}).then(function(){e()})})}).then(function(){e=[].concat(Object(r.a)(e),[{newAuthor:t,authors:n}]),a.setState({isLoading:!1}),a.setState({authors:e})})},a.searchAuthors=function(t){a.setState({isLoading:!0}),a.setState({authorHits:[]}),a.setState({hitsAmountAuthors:0});var e=0,n=[],o=a.state.authors.map(function(t){return new Promise(function(a){fetch("https://dblp.org/search/author/api?q=".concat(t,"&h=1000&format=json")).then(function(t){t.json().then(function(t){t.result.hits.hit&&(e+=1*t.result.hits["@total"],n=[].concat(Object(r.a)(n),Object(r.a)(t.result.hits.hit)))}).then(function(){a()})})})});Promise.all(o).then(function(){a.setState({isLoading:!1}),a.setState({hitsAmountAuthors:e}),a.setState({authorHits:n})})},a.handleCreateTitle=function(t){a.setState({keywords:[].concat(Object(r.a)(a.state.keywords),[t])})},a.handleCreateAuthor=function(t){a.searchNewAuthor(t)},a.onDeleteFoundAuthor=function(t){a.setState(function(e){return{authors:e.authors.map(function(e){var a=e.authors.filter(function(e){return e.info.author!==t});return e.authors=a,e})}})},a.onDeleteCoAuthor=function(t){var e=new Map(a.state.coAuthorMap);e.delete(t),a.setState({coAuthorMap:e})},a.redoTitleQuery=function(){a.createTitleAuthors(),a.createVenuesDir()},a.removeVenue=function(t){var e=a.state.titleHits;"undefined"===t?a.setState({titleHits:e.filter(function(t){return void 0!==t.info.venue})},function(){return a.redoTitleQuery()}):a.setState({titleHits:e.filter(function(e){return e.info.venue!==t})},function(){return a.redoTitleQuery()})},a.state={keywords:[],authors:[],titleHits:[],hitsAmountTitles:0,authorSet:new Set,coAuthorMap:new Map,titleAuthorMap:new Map,venuesDict:[],isLoading:!1},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state,a=e.titleAuthorMap,n=e.authors,o=e.coAuthorMap,s=e.venuesDict;return h.a.createElement("div",null,h.a.createElement("h2",{className:"text-center"}," Reviewer Finder ")," ",h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"row mt-3"},h.a.createElement("div",{className:"col-sm"},h.a.createElement(v,{authors:this.state.authors,onDelete:this.handleDeleteAuthor,createAuthor:this.handleCreateAuthor})," ")," ",h.a.createElement("div",{className:"col-sm"},h.a.createElement(b,{keywords:this.state.keywords,onDelete:this.handleDeleteKeyword,createTitle:this.handleCreateTitle})," ")," ")," ",h.a.createElement("div",{className:"row mt-3"},h.a.createElement("div",{className:"col-sm"})," ",h.a.createElement("div",{className:"col-sm"}," ",h.a.createElement("button",{className:"btn btn-dark center-block",onClick:this.searchTitle},"Search Title"," ")," ")," ")," ",h.a.createElement("div",{className:"row mt-3 justify-content-center"}," ",this.state.isLoading&&h.a.createElement(E,null)," ")," ",h.a.createElement("div",{className:"row mt-3 "},h.a.createElement("div",{className:"col-sm"},h.a.createElement("ul",{className:"list-group scrollList"}," ",n.map(function(e){return e.authors.map(function(e){return h.a.createElement("li",{className:"hoverHighlight list-group-item",key:e.url},e.info.author,h.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return t.onDeleteFoundAuthor(e.info.author)}},h.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})})," ")," ")," ",h.a.createElement("div",{className:"col-sm"},"Venues:",h.a.createElement("ul",{className:"list-group scrollList"}," ",s.map(function(e){return h.a.createElement("li",{className:"hoverHighlight list-group-item",key:e[0]},e[0],": ",e[1],h.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return t.removeVenue(e[0])}},h.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})," ")," ")," ")," ",h.a.createElement("div",{className:"row mt-3"},h.a.createElement("div",{className:"col-sm"},h.a.createElement("button",{className:"btn btn-dark center-block",onClick:this.createCoAuthorSet},"Find Co-Authors"," ")," ",h.a.createElement("br",null),h.a.createElement("div",{className:"col-sm mt-3"},h.a.createElement("ul",{className:"list-group scrollList"}," ",Object(r.a)(o).map(function(e){return h.a.createElement("li",{className:"hoverHighlight list-group-item",key:e},e[0],": ",e[1],h.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return t.onDeleteCoAuthor(e[0])}},h.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})," ")," ")," ")," ",h.a.createElement("div",{className:"col-sm"}," ",h.a.createElement("button",{className:"btn btn-dark center-block",onClick:this.filterAuthors},"Filter Authors"," ")," ",h.a.createElement("div",{className:"col-sm mt-3"},h.a.createElement("ul",{className:"list-group scrollList"}," ",Object(r.a)(a).map(function(e){return h.a.createElement("li",{className:"hoverHighlight list-group-item",key:e},h.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://dblp.org/search/author?q=".concat(e[0])}," ",e[0]," ",e[1]),h.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(a){return t.onDeleteCoAuthor(e[0])}},h.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})," ")," ")," ")," ")," ")," ")}}]),e}(h.a.Component);f.a.render(h.a.createElement(N,null),document.getElementById("reactContainer"))}},[[11,1,2]]]);
//# sourceMappingURL=main.8e5ad54d.chunk.js.map