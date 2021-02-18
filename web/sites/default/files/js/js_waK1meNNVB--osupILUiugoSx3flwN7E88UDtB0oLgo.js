/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n=n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.11.0
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.11.0",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=t.push,o=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l=Array.isArray,s=Object.keys,p=Object.create,v=c&&ArrayBuffer.isView,h=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),d=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function b(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function j(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function w(n){return function(r){return a.call(r)==="[object "+n+"]"}}var x=w("String"),A=w("Number"),S=w("Date"),O=w("RegExp"),M=w("Error"),E=w("Symbol"),B=w("Map"),N=w("WeakMap"),D=w("Set"),I=w("WeakSet"),k=w("ArrayBuffer"),T=w("DataView"),V=l||w("Array"),R=w("Function"),F=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof F&&(R=function(n){return"function"==typeof n||!1});var U=R;function q(n,r){return null!=n&&f.call(n,r)}var W=w("Arguments");!function(){W(arguments)||(W=function(n){return q(n,"callee")})}();var z=W;function L(n){return A(n)&&h(n)}function P(n){return function(){return n}}function C(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function K(n){return function(r){return null==r?void 0:r[n]}}var J=K("byteLength"),$=C(J),G=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var H=c?function(n){return v?v(n)&&!T(n):$(n)&&G.test(a.call(n))}:P(!1),Q=K("length"),X=C(Q);function Y(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=d.length,u=n.constructor,i=U(u)&&u.prototype||e,o="constructor";for(q(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=d[t])in n&&n[o]!==i[o]&&!r.contains(o)&&r.push(o)}function Z(n){if(!_(n))return[];if(s)return s(n);var r=[];for(var t in n)q(n,t)&&r.push(t);return g&&Y(n,r),r}function nn(n,r){var t=Z(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function rn(n){return n instanceof rn?n:this instanceof rn?void(this._wrapped=n):new rn(n)}function tn(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var i=typeof n;return("function"===i||"object"===i||"object"==typeof r)&&function n(r,t,e,i){r instanceof rn&&(r=r._wrapped);t instanceof rn&&(t=t._wrapped);var o=a.call(r);if(o!==a.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":return n(new DataView(r),new DataView(t),e,i);case"[object DataView]":var f=J(r);if(f!==J(t))return!1;for(;f--;)if(r.getUint8(f)!==t.getUint8(f))return!1;return!0}if(H(r))return n(new DataView(r.buffer),new DataView(t.buffer),e,i);var c="[object Array]"===o;if(!c){if("object"!=typeof r||"object"!=typeof t)return!1;var l=r.constructor,s=t.constructor;if(l!==s&&!(U(l)&&l instanceof l&&U(s)&&s instanceof s)&&"constructor"in r&&"constructor"in t)return!1}i=i||[];var p=(e=e||[]).length;for(;p--;)if(e[p]===r)return i[p]===t;if(e.push(r),i.push(t),c){if((p=r.length)!==t.length)return!1;for(;p--;)if(!tn(r[p],t[p],e,i))return!1}else{var v,h=Z(r);if(p=h.length,Z(t).length!==p)return!1;for(;p--;)if(v=h[p],!q(t,v)||!tn(r[v],t[v],e,i))return!1}return e.pop(),i.pop(),!0}(n,r,t,e)}function en(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Y(n,r),r}function un(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function on(n){for(var r={},t=Z(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function an(n){var r=[];for(var t in n)U(n[t])&&r.push(t);return r.sort()}function fn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,f=0;f<a;f++){var c=o[f];r&&void 0!==t[c]||(t[c]=i[c])}return t}}rn.VERSION=n,rn.prototype.value=function(){return this._wrapped},rn.prototype.valueOf=rn.prototype.toJSON=rn.prototype.value,rn.prototype.toString=function(){return String(this._wrapped)};var cn=fn(en),ln=fn(Z),sn=fn(en,!0);function pn(n){if(!_(n))return{};if(p)return p(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function vn(n){return _(n)?V(n)?n.slice():cn({},n):n}function hn(n){return n}function yn(n){return n=ln({},n),function(r){return nn(r,n)}}function gn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function dn(n){return V(n)?function(r){return gn(r,n)}:K(n)}function mn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}}function bn(n,r,t){return null==n?hn:U(n)?mn(n,r,t):_(n)&&!V(n)?yn(n):dn(n)}function _n(n,r){return bn(n,r,1/0)}function jn(n,r,t){return rn.iteratee!==_n?rn.iteratee(n,r):bn(n,r,t)}function wn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}rn.iteratee=_n;var xn=Date.now||function(){return(new Date).getTime()};function An(n){var r=function(r){return n[r]},t="(?:"+Z(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Sn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},On=An(Sn),Mn=An(on(Sn)),En=rn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Bn=/(.)^/,Nn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Dn=/\\|'|\r|\n|\u2028|\u2029/g;function In(n){return"\\"+Nn[n]}var kn=0;function Tn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=pn(n.prototype),o=n.apply(i,u);return _(o)?o:i}var Vn=b((function(n,r){var t=Vn.placeholder,e=function(){for(var u=0,i=r.length,o=Array(i),a=0;a<i;a++)o[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)o.push(arguments[u++]);return Tn(n,e,this,this,o)};return e}));Vn.placeholder=rn;var Rn=b((function(n,r,t){if(!U(n))throw new TypeError("Bind must be called on a function");var e=b((function(u){return Tn(n,e,r,this,t.concat(u))}));return e}));function Fn(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=Q(n);i<o;i++){var a=n[i];if(X(a)&&(V(a)||z(a)))if(r>1)Fn(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Un=b((function(n,r){var t=(r=Fn(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Rn(n[e],n)}return n}));var qn=b((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),Wn=Vn(qn,rn,1);function zn(n){return function(){return!n.apply(this,arguments)}}function Ln(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var Pn=Vn(Ln,2);function Cn(n,r,t){r=jn(r,t);for(var e,u=Z(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function Kn(n){return function(r,t,e){t=jn(t,e);for(var u=Q(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}var Jn=Kn(1),$n=Kn(-1);function Gn(n,r,t,e){for(var u=(t=jn(t,e,1))(r),i=0,o=Q(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i}function Hn(n,r,t){return function(e,u,i){var a=0,f=Q(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+f,a):f=i>=0?Math.min(i+1,f):i+f+1;else if(t&&i&&f)return e[i=t(e,u)]===u?i:-1;if(u!=u)return(i=r(o.call(e,a,f),L))>=0?i+a:-1;for(i=n>0?a:f-1;i>=0&&i<f;i+=n)if(e[i]===u)return i;return-1}}var Qn=Hn(1,Jn,Gn),Xn=Hn(-1,$n);function Yn(n,r,t){var e=(X(n)?Jn:Cn)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function Zn(n,r,t){var e,u;if(r=mn(r,t),X(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=Z(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function nr(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i}function rr(n){var r=function(r,t,e,u){var i=!X(r)&&Z(r),o=(i||r).length,a=n>0?0:o-1;for(u||(e=r[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var f=i?i[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var i=arguments.length>=3;return r(n,mn(t,u,4),e,i)}}var tr=rr(1),er=rr(-1);function ur(n,r,t){var e=[];return r=jn(r,t),Zn(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function ir(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function or(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function ar(n,r,t,e){return X(n)||(n=un(n)),("number"!=typeof t||e)&&(t=0),Qn(n,r,t)>=0}var fr=b((function(n,r,t){var e,u;return U(r)?u=r:V(r)&&(e=r.slice(0,-1),r=r[r.length-1]),nr(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=gn(n,e)),null==n)return;i=n[r]}return null==i?i:i.apply(n,t)}))}));function cr(n,r){return nr(n,dn(r))}function lr(n,r,t){var e,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:un(n)).length;a<f;a++)null!=(e=n[a])&&e>i&&(i=e);else r=jn(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}function sr(n,r,t){if(null==r||t)return X(n)||(n=un(n)),n[wn(n.length-1)];var e=X(n)?vn(n):un(n),u=Q(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=wn(o,i),f=e[o];e[o]=e[a],e[a]=f}return e.slice(0,r)}function pr(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=jn(e,u),Zn(t,(function(r,u){var o=e(r,u,t);n(i,r,o)})),i}}var vr=pr((function(n,r,t){q(n,t)?n[t].push(r):n[t]=[r]})),hr=pr((function(n,r,t){n[t]=r})),yr=pr((function(n,r,t){q(n,t)?n[t]++:n[t]=1})),gr=pr((function(n,r,t){n[t?0:1].push(r)}),!0),dr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n,r,t){return r in t}var br=b((function(n,r){var t={},e=r[0];if(null==n)return t;U(e)?(r.length>1&&(e=mn(e,r[1])),r=en(n)):(e=mr,r=Fn(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t})),_r=b((function(n,r){var t,e=r[0];return U(e)?(e=zn(e),r.length>1&&(t=r[1])):(r=nr(Fn(r,!1,!1),String),e=function(n,t){return!ar(r,t)}),br(n,e,t)}));function jr(n,r,t){return o.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function wr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:jr(n,n.length-r)}function xr(n,r,t){return o.call(n,null==r||t?1:r)}var Ar=b((function(n,r){return r=Fn(r,!0,!0),ur(n,(function(n){return!ar(r,n)}))})),Sr=b((function(n,r){return Ar(n,r)}));function Or(n,r,t,e){j(r)||(e=t,t=r,r=!1),null!=t&&(t=jn(t,e));for(var u=[],i=[],o=0,a=Q(n);o<a;o++){var f=n[o],c=t?t(f,o,n):f;r&&!t?(o&&i===c||u.push(f),i=c):t?ar(i,c)||(i.push(c),u.push(f)):ar(u,f)||u.push(f)}return u}var Mr=b((function(n){return Or(Fn(n,!0,!0))}));function Er(n){for(var r=n&&lr(n,Q).length||0,t=Array(r),e=0;e<r;e++)t[e]=cr(n,e);return t}var Br=b(Er);function Nr(n,r){return n._chain?rn(r).chain():r}function Dr(n){return Zn(an(n),(function(r){var t=rn[r]=n[r];rn.prototype[r]=function(){var n=[this._wrapped];return i.apply(n,arguments),Nr(this,t.apply(rn,n))}})),rn}Zn(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];rn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Nr(this,t)}})),Zn(["concat","join","slice"],(function(n){var r=t[n];rn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Nr(this,n)}}));var Ir=Dr({__proto__:null,VERSION:n,restArguments:b,isObject:_,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:j,isElement:function(n){return!(!n||1!==n.nodeType)},isString:x,isNumber:A,isDate:S,isRegExp:O,isError:M,isSymbol:E,isMap:B,isWeakMap:N,isSet:D,isWeakSet:I,isArrayBuffer:k,isDataView:T,isArray:V,isFunction:U,isArguments:z,isFinite:function(n){return!E(n)&&y(n)&&!isNaN(parseFloat(n))},isNaN:L,isTypedArray:H,isEmpty:function(n){return null==n||(X(n)&&(V(n)||x(n)||z(n))?0===n.length:0===Z(n).length)},isMatch:nn,isEqual:function(n,r){return tn(n,r)},keys:Z,allKeys:en,values:un,pairs:function(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:on,functions:an,methods:an,extend:cn,extendOwn:ln,assign:ln,defaults:sn,create:function(n,r){var t=pn(n);return r&&ln(t,r),t},clone:vn,tap:function(n,r){return r(n),n},has:function(n,r){if(!V(r))return q(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!f.call(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=jn(r,t);for(var e=Z(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},identity:hn,constant:P,noop:function(){},property:dn,propertyOf:function(n){return null==n?function(){}:function(r){return V(r)?gn(n,r):n[r]}},matcher:yn,matches:yn,times:function(n,r,t){var e=Array(Math.max(0,n));r=mn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:wn,now:xn,escape:On,unescape:Mn,templateSettings:En,template:function(n,r,t){!r&&t&&(r=t),r=sn({},r,rn.templateSettings);var e,u=RegExp([(r.escape||Bn).source,(r.interpolate||Bn).source,(r.evaluate||Bn).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,(function(r,t,e,u,a){return o+=n.slice(i,a).replace(Dn,In),i=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),r})),o+="';\n",r.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(r.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,rn)},f=r.variable||"obj";return a.source="function("+f+"){\n"+o+"}",a},result:function(n,r,t){V(r)||(r=[r]);var e=r.length;if(!e)return U(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=U(i)?i.call(n):i}return n},uniqueId:function(n){var r=++kn+"";return n?n+r:r},chain:function(n){var r=rn(n);return r._chain=!0,r},iteratee:_n,partial:Vn,bind:Rn,bindAll:Un,memoize:function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return q(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},delay:qn,defer:Wn,throttle:function(n,r,t){var e,u,i,o,a=0;t||(t={});var f=function(){a=!1===t.leading?0:xn(),e=null,o=n.apply(u,i),e||(u=i=null)},c=function(){var c=xn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,i=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,o=n.apply(u,i),e||(u=i=null)):e||!1===t.trailing||(e=setTimeout(f,l)),o};return c.cancel=function(){clearTimeout(e),a=0,e=u=i=null},c},debounce:function(n,r,t){var e,u,i=function(r,t){e=null,t&&(u=n.apply(r,t))},o=b((function(o){if(e&&clearTimeout(e),t){var a=!e;e=setTimeout(i,r),a&&(u=n.apply(this,o))}else e=qn(i,r,this,o);return u}));return o.cancel=function(){clearTimeout(e),e=null},o},wrap:function(n,r){return Vn(r,n)},negate:zn,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Ln,once:Pn,findKey:Cn,findIndex:Jn,findLastIndex:$n,sortedIndex:Gn,indexOf:Qn,lastIndexOf:Xn,find:Yn,detect:Yn,findWhere:function(n,r){return Yn(n,yn(r))},each:Zn,forEach:Zn,map:nr,collect:nr,reduce:tr,foldl:tr,inject:tr,reduceRight:er,foldr:er,filter:ur,select:ur,reject:function(n,r,t){return ur(n,zn(jn(r)),t)},every:ir,all:ir,some:or,any:or,contains:ar,includes:ar,include:ar,invoke:fr,pluck:cr,where:function(n,r){return ur(n,yn(r))},max:lr,min:function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:un(n)).length;a<f;a++)null!=(e=n[a])&&e<i&&(i=e);else r=jn(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i},shuffle:function(n){return sr(n,1/0)},sample:sr,sortBy:function(n,r,t){var e=0;return r=jn(r,t),cr(nr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:vr,indexBy:hr,countBy:yr,partition:gr,toArray:function(n){return n?V(n)?o.call(n):x(n)?n.match(dr):X(n)?nr(n,hn):un(n):[]},size:function(n){return null==n?0:X(n)?n.length:Z(n).length},pick:br,omit:_r,first:wr,head:wr,take:wr,initial:jr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:xr(n,Math.max(0,n.length-r))},rest:xr,tail:xr,drop:xr,compact:function(n){return ur(n,Boolean)},flatten:function(n,r){return Fn(n,r,!1)},without:Sr,uniq:Or,unique:Or,union:Mr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Q(n);e<u;e++){var i=n[e];if(!ar(r,i)){var o;for(o=1;o<t&&ar(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:Ar,unzip:Er,transpose:Er,zip:Br,object:function(n,r){for(var t={},e=0,u=Q(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(o.call(n,e,e+=r));return t},mixin:Dr,default:rn});return Ir._=Ir,Ir}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];
      var k = 0;

      while (k < len) {
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }

        k++;
      }

      return undefined;
    },
    configurable: true,
    writable: true
  });
};
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));;
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):n(this[0].form)}}));;
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],e):e(jQuery)}((function(e){return e.fn.labels=function(){var t,s,i,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+e.ui.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n))}}));;
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(n,i){var e="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function s(n,i,r,h){return t.each(e,(function(){i-=parseFloat(t.css(n,"padding"+this))||0,r&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)})),i}t.fn["inner"+i]=function(n){return void 0===n?h["inner"+i].call(this):this.each((function(){t(this).css(r,s(this,n)+"px")}))},t.fn["outer"+i]=function(n,e){return"number"!=typeof n?h["outer"+i].call(this,n):this.each((function(){t(this).css(r,s(this,n,!0,e)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})}));;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.scrollParent=function(t){var n=this.css("position"),o="absolute"===n,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var t=e(this);return(!o||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))})).eq(0);return"fixed"!==n&&i.length?i:e(this[0].ownerDocument||document)}}));;
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{tabbable:function(n){var t=e.attr(n,"tabindex"),u=null!=t;return(!u||t>=0)&&e.ui.focusable(n,u)}})}));;
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){return i.fn.extend({uniqueId:(n=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++n)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var n}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.escapeSelector=(n=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(e){return e.replace(n,"\\$1")});var n}));;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.focusable=function(i,t){var n,a,r,s,o,u=i.nodeName.toLowerCase();return"area"===u?(a=(n=i.parentNode).name,!(!i.href||!a||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+a+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!i.disabled)&&(o=e(i).closest("fieldset")[0])&&(s=!o.disabled):s="a"===u&&i.href||t,s&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(e(i)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(E){"function"==typeof define&&define.amd?define(["jquery","./version"],E):E(jQuery)}((function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.ui.plugin={add:function(e,i,o){var t,u=n.ui[e].prototype;for(t in o)u.plugins[t]=u.plugins[t]||[],u.plugins[t].push([i,o[t]])},call:function(n,e,i,o){var t,u=n.plugins[e];if(u&&(o||n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType))for(t=0;t<u.length;t++)n.options[u[t][0]]&&u[t][1].apply(n.element,i)}}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){var e,i=0,s=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}():r[e]=s})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;a<r;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,o){var a,r;for(r=0;r<n.length;r++)a=s.classesElementLookup[n[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),s.classesElementLookup[n[r]]=a,i.push(n[r]),o&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;

    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });
    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');

      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));

        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }

        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);

              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);

      if (newIsOpen) {
        this.focus();
      }

      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }

      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }

      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);

      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.uri) {
        var pb = this;
        var uri = this.uri;

        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }

        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];

        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }

        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};
        elementSettings.url = $(this.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;

    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }

    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';

    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      }));
    } catch (e) {}

    responseText = '';

    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      }));
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }

      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }

    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);

      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;

        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');

    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }

    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }

      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);

      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());

    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);

    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }

    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }

    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);

        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};

    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();
    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;

        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');

      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);

      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');

        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');

            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));

      if (response.clearPrevious) {
        messages.clear();
      }

      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;

      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');

        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });
    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');

      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');

        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');

      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();

          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }

      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));

          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;

    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }

    var hash = url.hash.substr(1);

    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));;
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));;
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var s=this.options;return!(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===s.iframeFix?"iframe":s.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var s=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(s).length||t.ui.safeBlur(s)},_mouseStart:function(e){var s=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!s){var i=this._uiHash();if(!1===this._trigger("drag",e,i))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var s=this,i=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==s._trigger("stop",e)&&s._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i=t.isFunction(s.helper),o=i?t(s.helper.apply(this.element[0],[e])):"clone"===s.helper?this.element.clone().removeAttr("id"):this.element;return o.parents("body").length||o.appendTo("parent"===s.appendTo?this.element[0].parentNode:s.appendTo),i&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,n=this.document[0];this.relativeContainer=null,o.containment?"window"!==o.containment?"document"!==o.containment?o.containment.constructor!==Array?("parent"===o.containment&&(o.containment=this.helper[0].parentNode),(i=(s=t(o.containment))[0])&&(e=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=o.containment:this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):s=this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,s,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[s,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[],t(i.options.connectToSortable).each((function(){var s=t(this).sortable("instance");s&&!s.options.disabled&&(i.sortables.push(s),s.refreshPositions(),s._trigger("activate",e,o))}))},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=!1,t.each(i.sortables,(function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))}))},drag:function(e,s,i){t.each(i.sortables,(function(){var o=!1,n=this;n.positionAbs=i.positionAbs,n.helperProportions=i.helperProportions,n.offset.click=i.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(i.sortables,(function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o}))),o?(n.isOver||(n.isOver=1,i._parent=s.helper.parent(),n.currentItem=s.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return s.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=i.offset.click.top,n.offset.click.left=i.offset.click.left,n.offset.parent.left-=i.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=i.offset.parent.top-n.offset.parent.top,i._trigger("toSortable",e),i.dropped=n.element,t.each(i.sortables,(function(){this.refreshPositions()})),i.currentItem=i.element,n.fromOutside=i),n.currentItem&&(n._mouseDrag(e),s.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s.helper.appendTo(i._parent),i._refreshOffsets(e),s.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),n=i.options;o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,s,i){var o=i.options;o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,s,i){var o=i.options;o._opacity&&t(s.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(e,s,i){var o=i.options,n=!1,r=i.scrollParentNotHidden[0],l=i.document[0];r!==l&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-i.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-i.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(l).scrollTop()<o.scrollSensitivity?n=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity&&(n=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(l).scrollLeft()<o.scrollSensitivity?n=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity&&(n=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)))),!1!==n&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each((function(){var e=t(this),s=e.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}))},drag:function(e,s,i){var o,n,r,l,a,h,p,c,f,d,g=i.options,u=g.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(f=i.snapElements.length-1;f>=0;f--)h=(a=i.snapElements[f].left-i.margins.left)+i.snapElements[f].width,c=(p=i.snapElements[f].top-i.margins.top)+i.snapElements[f].height,v<a-u||m>h+u||P<p-u||_>c+u||!t.contains(i.snapElements[f].item.ownerDocument,i.snapElements[f].item)?(i.snapElements[f].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=!1):("inner"!==g.snapMode&&(o=Math.abs(p-P)<=u,n=Math.abs(c-_)<=u,r=Math.abs(a-v)<=u,l=Math.abs(h-m)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h}).left)),d=o||n||r||l,"outer"!==g.snapMode&&(o=Math.abs(p-_)<=u,n=Math.abs(c-P)<=u,r=Math.abs(a-m)<=u,l=Math.abs(h-v)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left)),!i.snapElements[f].snapping&&(o||n||r||l||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=o||n||r||l||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,n=i.options,r=t.makeArray(t(n.stack)).sort((function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)}));r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each((function(e){t(this).css("zIndex",o+e)})),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,s,i){var o=i.options;o._zIndex&&t(s.helper).css("zIndex",o._zIndex)}}),t.ui.draggable}));;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,r=t.fn.position;function p(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function c(i,o){return parseInt(t.css(i,o),10)||0}function a(i){var o=i[0];return 9===o.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(o)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:o.preventDefault?{width:0,height:0,offset:{top:o.pageY,left:o.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=t.isWindow(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:!e&&!n?t(i).offset():{left:0,top:0},scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);i=t.extend({},i);var h,d,g,u,m,w,W=t(i.of),v=t.position.getWithinInfo(i.within),y=t.position.getScrollInfo(v),H=(i.collision||"flip").split(" "),b={};return w=a(W),W[0].preventDefault&&(i.at="left top"),d=w.width,g=w.height,u=w.offset,m=t.extend({},u),t.each(["my","at"],(function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),o=f.exec(e[1]),b[this]=[t?t[0]:0,o?o[0]:0],i[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]})),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?m.left+=d:"center"===i.at[0]&&(m.left+=d/2),"bottom"===i.at[1]?m.top+=g:"center"===i.at[1]&&(m.top+=g/2),h=p(b.at,d,g),m.left+=h[0],m.top+=h[1],this.each((function(){var n,l,f=t(this),s=f.outerWidth(),r=f.outerHeight(),a=c(this,"marginLeft"),w=c(this,"marginTop"),x=s+a+c(this,"marginRight")+y.width,T=r+w+c(this,"marginBottom")+y.height,L=t.extend({},m),P=p(b.my,f.outerWidth(),f.outerHeight());"right"===i.my[0]?L.left-=s:"center"===i.my[0]&&(L.left-=s/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:a,marginTop:w},t.each(["left","top"],(function(o,e){t.ui.position[H[o]]&&t.ui.position[H[o]][e](L,{targetWidth:d,targetHeight:g,elemWidth:s,elemHeight:r,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:v,elem:f})})),i.using&&(l=function(t){var n=u.left-L.left,l=n+d-s,h=u.top-L.top,p=h+g-r,c={target:{element:W,left:u.left,top:u.top,width:d,height:g},element:{element:f,left:L.left,top:L.top,width:s,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":h>0?"bottom":"middle"};d<s&&e(n+l)<d&&(c.horizontal="center"),g<r&&e(h+p)<g&&(c.vertical="middle"),o(e(n),e(l))>o(e(h),e(p))?c.important="horizontal":c.important="vertical",i.using.call(this,t,c)}),f.offset(t.extend(L,{using:l}))}))},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,s=t.left-i.collisionPosition.marginLeft,h=l-s,r=s+i.collisionWidth-f-l;i.collisionWidth>f?h>0&&r<=0?(e=t.left+h+i.collisionWidth-f-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+f-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-s,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,s=t.top-i.collisionPosition.marginTop,h=l-s,r=s+i.collisionHeight-f-l;i.collisionHeight>f?h>0&&r<=0?(e=t.top+h+i.collisionHeight-f-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+f-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-s,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,f=l.offset.left+l.scrollLeft,s=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?((o=t.left+a+d+g+i.collisionWidth-s-f)<0||o<e(p))&&(t.left+=a+d+g):c>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<c)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,f=l.offset.top+l.scrollTop,s=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-s-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];p<0?((n=t.top+a+d+g+i.collisionHeight-s-f)<0||n<e(p))&&(t.top+=a+d+g):c>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<c)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position}));;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(i,e){if("hidden"===t(i).css("overflow"))return!1;var s,h=e&&"left"===e?"scrollLeft":"scrollTop";return i[h]>0||(i[h]=1,s=i[h]>0,i[h]=0,s)},_create:function(){var i,e=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,i={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(i),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(i),this._proportionallyResize()),this._setupHandles(),e.autoHide&&t(this.element).on("mouseenter",(function(){e.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){e.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var i,e=function(i){t(i).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),i=this.element,this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_setOption:function(t,i){switch(this._super(t,i),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var i,e,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},e=0;e<s.length;e++)h="ui-resizable-"+(i=t.trim(s[e])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[i]=".ui-resizable-"+i,this.element.append(n);this._renderAxis=function(i){var e,s,h,n;for(e in i=i||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=t(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),i.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(i){var e,s,h=!1;for(e in this.handles)((s=t(this.handles[e])[0])===i.target||t.contains(s,i.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(i){var e,s,h,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(e+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:s},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(i){var e,s,h=this.originalMousePosition,n=this.axis,o=i.pageX-h.left||0,a=i.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(e=l.apply(this,[i,o,a]),this._updateVirtualBoundaries(i.shiftKey),(this._aspectRatio||i.shiftKey)&&(e=this._updateRatio(e,i)),e=this._respectSize(e,i),this._updateCache(e),this._propagate("resize",i),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",i,this.ui()),this._applyChanges()),!1)},_mouseStop:function(i){this.resizing=!1;var e,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",i),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var i,e,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(i=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,i>n.minWidth&&(n.minWidth=i),s>n.minHeight&&(n.minHeight=s),e<n.maxWidth&&(n.maxWidth=e),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var i=this.position,e=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=i.left+(e.width-t.width),t.top=null),"nw"===s&&(t.top=i.top+(e.height-t.height),t.left=i.left+(e.width-t.width)),t},_respectSize:function(t){var i=this._vBoundaries,e=this.axis,s=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,h=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,n=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,o=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(e),p=/nw|ne|n/.test(e);return n&&(t.width=i.minWidth),o&&(t.height=i.minHeight),s&&(t.width=i.maxWidth),h&&(t.height=i.maxHeight),n&&r&&(t.left=a-i.minWidth),s&&r&&(t.left=a-i.maxWidth),o&&p&&(t.top=l-i.minHeight),h&&p&&(t.top=l-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var i=0,e=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];i<4;i++)e[i]=parseFloat(s[i])||0,e[i]+=parseFloat(h[i])||0;return{height:e[0]+e[2],width:e[1]+e[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,i=0,e=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)t=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:e.height()-this.outerDimensions.height||0,width:e.width()-this.outerDimensions.width||0})},_renderProxy:function(){var i=this.element,e=this.options;this.elementOffset=i.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,i){return{width:this.originalSize.width+i}},w:function(t,i){var e=this.originalSize;return{left:this.originalPosition.left+i,width:e.width-i}},n:function(t,i,e){var s=this.originalSize;return{top:this.originalPosition.top+e,height:s.height-e}},s:function(t,i,e){return{height:this.originalSize.height+e}},se:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},sw:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[i,e,s]))},ne:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},nw:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[i,e,s]))}},_propagate:function(i,e){t.ui.plugin.call(this,i,[e,this.ui()]),"resize"!==i&&this._trigger(i,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(i){var e=t(this).resizable("instance"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&e._hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseFloat(e.element.css("left"))+(e.position.left-e.originalPosition.left)||null,p=parseFloat(e.element.css("top"))+(e.position.top-e.originalPosition.top)||null;e.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(e.element.css("width")),height:parseFloat(e.element.css("height")),top:parseFloat(e.element.css("top")),left:parseFloat(e.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),e._updateCache(s),e._propagate("resize",i)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,e,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(g),e=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){e[t]=l._num(i.css("padding"+s))})),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-e[3],width:i.innerWidth()-e[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(i){var e,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||i.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var i=t(this).resizable("instance"),e=i.options,s=i.containerOffset,h=i.containerPosition,n=i.containerElement,o=t(i.helper),a=o.offset(),l=o.outerWidth()-i.sizeDiff.width,r=o.outerHeight()-i.sizeDiff.height;i._helper&&!e.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),i._helper&&!e.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var i=t(this).resizable("instance").options;t(i.alsoResize).each((function(){var i=t(this);i.data("ui-resizable-alsoresize",{width:parseFloat(i.width()),height:parseFloat(i.height()),left:parseFloat(i.css("left")),top:parseFloat(i.css("top"))})}))},resize:function(i,e){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var i=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=i.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,i){var e=(s[i]||0)+(a[i]||0);e&&e>=0&&(h[i]=e||null)})),i.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var i=t(this).resizable("instance"),e=i.size;i.ghost=i.originalElement.clone(),i.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),i._addClass(i.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof i.options.ghost&&i.ghost.addClass(this.options.ghost),i.ghost.appendTo(i.helper)},resize:function(){var i=t(this).resizable("instance");i.ghost&&i.ghost.css({position:"relative",height:i.size.height,width:i.size.width})},stop:function(){var i=t(this).resizable("instance");i.ghost&&i.helper&&i.helper.get(0).removeChild(i.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var i,e=t(this).resizable("instance"),s=e.options,h=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,f=n.height+g,c=s.maxWidth&&s.maxWidth<u,m=s.maxHeight&&s.maxHeight<f,z=s.minWidth&&s.minWidth>u,w=s.minHeight&&s.minHeight>f;s.grid=l,z&&(u+=r),w&&(f+=p),c&&(u-=r),m&&(f-=p),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=f):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.top=o.top-g):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.left=o.left-d):((f-p<=0||u-r<=0)&&(i=e._getPaddingPlusBorderDimensions(this)),f-p>0?(e.size.height=f,e.position.top=o.top-g):(f=p-i.height,e.size.height=f,e.position.top=o.top+n.height-f),u-r>0?(e.size.width=u,e.position.left=o.left-d):(u=r-i.width,e.size.width=u,e.position.left=o.left+n.width-u))}}),t.ui.resizable}));;
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],e):e(jQuery)}((function(e){return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var e=this.form.data("ui-form-reset-instances")||[];e.length||this.form.on("reset.ui-form-reset",this._formResetHandler),e.push(this),this.form.data("ui-form-reset-instances",e)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));;
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s=this,o=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?e(this).text():this.outerHTML})),this.originalLabel&&(o.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(o.disabled=i),o},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+e.ui.escapeSelector(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(this).form().length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","../widget"],t):t(jQuery)}((function(t){var e=/ui-corner-([a-z]){2,6}/g;return t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(n,o){var s,l={};if(o)return"controlgroupLabel"===n?((s=e.element.find(o)).each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(l=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(o).each((function(){var o=t(this),s=o[n]("instance"),r=t.widget.extend({},l);if("button"!==n||!o.parent(".ui-spinner").length){s||(s=o[n]()[n]("instance")),s&&(r.classes=e._resolveClassesValues(r.classes,s)),o[n](r);var u=o[n]("widget");t.data(u[0],"ui-controlgroup-data",s||o[n]("instance")),i.push(u[0])}}))))})),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()}))},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var o={};return t.each(i,(function(s){var l=n.options.classes[s]||"";l=t.trim(l.replace(e,"")),o[s]=(l+" "+i[s]).replace(/\s+/g," ")})),o},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,n){var o=e[n]().data("ui-controlgroup-data");if(o&&i["_"+o.widgetName+"Options"]){var s=i["_"+o.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,o),o.element[o.widgetName](s)}else i._updateCornerClass(e[n](),n)})),this._callChildMethod("refresh"))}})}));;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],t):t(jQuery)}((function(t){var i;return t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,i=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(i.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(i.label=this.originalLabel),i},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(i){i.keyCode===t.ui.keyCode.SPACE&&(i.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(i,o){var s="iconPosition"!==i,n=s?this.options.iconPosition:o,e="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,o),this._attachIcon(n),e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var i=void 0===t.showLabel?this.options.showLabel:t.showLabel,o=void 0===t.icon?this.options.icon:t.icon;i||o||(t.showLabel=!0),this._super(t)},_setOption:function(t,i){"icon"===t&&(i?this._updateIcon(t,i):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,i),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!i),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(i):(this.element.html(i),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,i),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",i),this.element[0].disabled=i,i&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,i){"text"!==t?("showLabel"===t&&(this.options.text=i),"icon"===t&&(this.options.icons.primary=i),"icons"===t&&(i.primary?(this._super("icon",i.primary),this._super("iconPosition","beginning")):i.secondary&&(this._super("icon",i.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",i)}}),t.fn.button=(i=t.fn.button,function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?i.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button}));;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],i):i(jQuery)}((function(i){return i.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||i.ui.safeBlur(i.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,(function(){e._trigger("close",t)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+i(this).css("z-index")})).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=i(i.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){t._focusTabbable(),t._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).trigger("focus")},_keepFocus:function(t){function e(){var t=i.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay((function(){s.trigger("focus")})),t.preventDefault()):(this._delay((function(){o.trigger("focus")})),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:i("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),t=i("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title?i.text(this.options.title):i.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||i.isArray(e)&&!e.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(i.each(e,(function(e,o){var s,n;o=i.isFunction(o)?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,n={icon:o.icon,iconPosition:o.iconPosition,showLabel:o.showLabel,icons:o.icons,text:o.text},delete o.click,delete o.icon,delete o.iconPosition,delete o.showLabel,delete o.icons,"boolean"==typeof o.text&&delete o.text,i("<button></button>",o).button(n).appendTo(t.uiButtonSet).on("click",(function(){s.apply(t.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var t=this,e=this.options;function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){t._addClass(i(this),"ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){var a=n.offset.left-t.document.scrollLeft(),l=n.offset.top-t.document.scrollTop();e.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:t.window},t._removeClass(i(this),"ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw";function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay((function(){t=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({
        modal: false
      });
    };

    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };

    dialog.close = closeDialog;
    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;
    var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
    var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
    options.position = {
      my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;

    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];

      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }

          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }

    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };

      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex;
      var index;
      var il = opts.buttons.length;

      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }

      this._super();

      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);

      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
 * @popperjs/core v2.5.4 - MIT License
 */

"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function r(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return t(s(e)).left+r(e).scrollLeft}function c(e){return n(e).getComputedStyle(e)}function p(e){return e=c(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function l(e,o,c){void 0===c&&(c=!1);var l=s(o);e=t(e);var u=i(o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(u||!u&&!c)&&(("body"!==a(o)||p(l))&&(d=o!==n(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:r(o)),i(o)?((m=t(o)).x+=o.clientLeft,m.y+=o.clientTop):l&&(m.x=f(l))),{x:e.left+d.scrollLeft-m.x,y:e.top+d.scrollTop-m.y,width:e.width,height:e.height}}function u(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function d(e){return"html"===a(e)?e:e.assignedSlot||e.parentNode||e.host||s(e)}function m(e,t){void 0===t&&(t=[]);var r=function e(t){return 0<=["html","body","#document"].indexOf(a(t))?t.ownerDocument.body:i(t)&&p(t)?t:e(d(t))}(e);e="body"===a(r);var o=n(r);return r=e?[o].concat(o.visualViewport||[],p(r)?r:[]):r,t=t.concat(r),e?t:t.concat(m(d(r)))}function h(e){if(!i(e)||"fixed"===c(e).position)return null;if(e=e.offsetParent){var t=s(e);if("body"===a(e)&&"static"===c(e).position&&"static"!==c(t).position)return t}return e}function g(e){for(var t=n(e),r=h(e);r&&0<=["table","td","th"].indexOf(a(r))&&"static"===c(r).position;)r=h(r);if(r&&"body"===a(r)&&"static"===c(r).position)return t;if(!r)e:{for(e=d(e);i(e)&&0>["html","body"].indexOf(a(e));){if("none"!==(r=c(e)).transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange){r=e;break e}e=e.parentNode}r=null}return r||t}function v(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){n.has(r)||(r=t.get(r))&&e(r)})),r.push(o)}(e)})),r}function b(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function y(e){return e.split("-")[0]}function O(e,t){var r,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if((r=o)&&(r=o instanceof(r=n(o).ShadowRoot)||o instanceof ShadowRoot),r)do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host}while(t);return!1}function w(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function x(e,o){if("viewport"===o){o=n(e);var a=s(e);o=o.visualViewport;var p=a.clientWidth;a=a.clientHeight;var l=0,u=0;o&&(p=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=o.offsetLeft,u=o.offsetTop)),e=w(e={width:p,height:a,x:l+f(e),y:u})}else i(o)?((e=t(o)).top+=o.clientTop,e.left+=o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top):(u=s(e),e=s(u),l=r(u),o=u.ownerDocument.body,p=Math.max(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Math.max(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-l.scrollLeft+f(u),l=-l.scrollTop,"rtl"===c(o||e).direction&&(u+=Math.max(e.clientWidth,o?o.clientWidth:0)-p),e=w({width:p,height:a,x:u,y:l}));return e}function j(e,t,n){return t="clippingParents"===t?function(e){var t=m(d(e)),n=0<=["absolute","fixed"].indexOf(c(e).position)&&i(e)?g(e):e;return o(n)?t.filter((function(e){return o(e)&&O(e,n)&&"body"!==a(e)})):[]}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce((function(t,n){return n=x(e,n),t.top=Math.max(n.top,t.top),t.right=Math.min(n.right,t.right),t.bottom=Math.min(n.bottom,t.bottom),t.left=Math.max(n.left,t.left),t}),x(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function M(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function E(e){var t=e.reference,n=e.element,r=(e=e.placement)?y(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(r){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-n.width,y:i};break;default:o={x:t.x,y:t.y}}if(null!=(r=r?M(r):null))switch(i="y"===r?"height":"width",e){case"start":o[r]=Math.floor(o[r])-Math.floor(t[i]/2-n[i]/2);break;case"end":o[r]=Math.floor(o[r])+Math.ceil(t[i]/2-n[i]/2)}return o}function D(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function P(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function L(e,n){void 0===n&&(n={});var r=n;n=void 0===(n=r.placement)?e.placement:n;var i=r.boundary,a=void 0===i?"clippingParents":i,f=void 0===(i=r.rootBoundary)?"viewport":i;i=void 0===(i=r.elementContext)?"popper":i;var c=r.altBoundary,p=void 0!==c&&c;r=D("number"!=typeof(r=void 0===(r=r.padding)?0:r)?r:P(r,T));var l=e.elements.reference;c=e.rects.popper,a=j(o(p=e.elements[p?"popper"===i?"reference":"popper":i])?p:p.contextElement||s(e.elements.popper),a,f),p=E({reference:f=t(l),element:c,strategy:"absolute",placement:n}),c=w(Object.assign(Object.assign({},c),p)),f="popper"===i?c:f;var u={top:a.top-f.top+r.top,bottom:f.bottom-a.bottom+r.bottom,left:a.left-f.left+r.left,right:f.right-a.right+r.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[n];Object.keys(u).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";u[e]+=d[n]*t}))}return u}function k(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=void 0===(e=e.defaultOptions)?V:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},V),r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(i){return a(),s.options=Object.assign(Object.assign(Object.assign({},r),s.options),i),s.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)},i=function(e){var t=v(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:p,options:n}),f.push(t||function(){}))})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference;if(k(t,e=e.popper))for(s.rects={reference:l(t,g(e),"fixed"===s.options.strategy),popper:u(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var n=s.orderedModifiers[t];e=n.fn;var r=n.options;r=void 0===r?{}:r,n=n.name,"function"==typeof e&&(s=e({state:s,options:r,name:n,instance:p})||s)}}},update:b((function(){return new Promise((function(e){p.forceUpdate(),e(s)}))})),destroy:function(){a(),c=!0}};return k(e,t)?(p.setOptions(i).then((function(e){!c&&i.onFirstUpdate&&i.onFirstUpdate(e)})),p):p}}function W(e){var t,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,f=e.position,c=e.gpuAcceleration,p=e.adaptive,l=window.devicePixelRatio||1;e=Math.round(a.x*l)/l||0,l=Math.round(a.y*l)/l||0;var u=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var d,m="left",h="top",v=window;if(p){var b=g(r);b===n(r)&&(b=s(r)),"top"===i&&(h="bottom",l-=b.clientHeight-o.height,l*=c?1:-1),"left"===i&&(m="right",e-=b.clientWidth-o.width,e*=c?1:-1)}return r=Object.assign({position:f},p&&z),c?Object.assign(Object.assign({},r),{},((d={})[h]=a?"0":"",d[m]=u?"0":"",d.transform=2>(v.devicePixelRatio||1)?"translate("+e+"px, "+l+"px)":"translate3d("+e+"px, "+l+"px, 0)",d)):Object.assign(Object.assign({},r),{},((t={})[h]=a?l+"px":"",t[m]=u?e+"px":"",t.transform="",t))}function A(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}function H(e){return e.replace(/start|end/g,(function(e){return J[e]}))}function R(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function S(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var T=["top","bottom","right","left"],q=T.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),C=[].concat(T,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),N="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),V={placement:"bottom",modifiers:[],strategy:"absolute"},I={passive:!0},_={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,I)})),a&&s.addEventListener("resize",r.update,I),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,I)})),a&&s.removeEventListener("resize",r.update,I)}},data:{}},U={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=E({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},z={top:"auto",right:"auto",bottom:"auto",left:"auto"},F={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e,n=void 0===(n=n.adaptive)||n,e={placement:y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},X={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(r)&&a(r)&&(Object.assign(r.style,e),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Y={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=void 0===(e=e.options.offset)?[0,0]:e,o=(e=C.reduce((function(e,n){var o=t.rects,i=y(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof r?r(Object.assign(Object.assign({},o),{},{placement:n})):r;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:o}:{x:o,y:s},e[n]=i,e}),{}))[t.placement],i=o.x;o=o.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=o),t.modifiersData[n]=e}},G={left:"right",right:"left",bottom:"top",top:"bottom"},J={start:"end",end:"start"},K={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var r=n.mainAxis;r=void 0===r||r;var o=n.altAxis;o=void 0===o||o;var i=n.fallbackPlacements,a=n.padding,s=n.boundary,f=n.rootBoundary,c=n.altBoundary,p=n.flipVariations,l=void 0===p||p,u=n.allowedAutoPlacements;p=y(n=t.options.placement),i=i||(p!==n&&l?function(e){if("auto"===y(e))return[];var t=A(e);return[H(e),t,H(t)]}(n):[A(n)]);var d=[n].concat(i).reduce((function(e,n){return e.concat("auto"===y(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?C:a,f=t.placement.split("-")[1];0===(i=(t=f?i?q:q.filter((function(e){return e.split("-")[1]===f})):T).filter((function(e){return 0<=s.indexOf(e)}))).length&&(i=t);var c=i.reduce((function(t,i){return t[i]=L(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[y(i)],t}),{});return Object.keys(c).sort((function(e,t){return c[e]-c[t]}))}(t,{placement:n,boundary:s,rootBoundary:f,padding:a,flipVariations:l,allowedAutoPlacements:u}):n)}),[]);n=t.rects.reference,i=t.rects.popper;var m=new Map;p=!0;for(var h=d[0],g=0;g<d.length;g++){var v=d[g],b=y(v),O="start"===v.split("-")[1],w=0<=["top","bottom"].indexOf(b),x=w?"width":"height",j=L(t,{placement:v,boundary:s,rootBoundary:f,altBoundary:c,padding:a});if(O=w?O?"right":"left":O?"bottom":"top",n[x]>i[x]&&(O=A(O)),x=A(O),w=[],r&&w.push(0>=j[b]),o&&w.push(0>=j[O],0>=j[x]),w.every((function(e){return e}))){h=v,p=!1;break}m.set(v,w)}if(p)for(r=function(e){var t=d.find((function(t){if(t=m.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return h=t,"break"},o=l?3:1;0<o&&"break"!==r(o);o--);t.placement!==h&&(t.modifiersData[e]._skip=!0,t.placement=h,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Q={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var r=n.mainAxis,o=void 0===r||r;r=void 0!==(r=n.altAxis)&&r;var i=n.tether;i=void 0===i||i;var a=n.tetherOffset,s=void 0===a?0:a;n=L(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),a=y(t.placement);var f=t.placement.split("-")[1],c=!f,p=M(a);a="x"===p?"y":"x";var l=t.modifiersData.popperOffsets,d=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):s;if(s={x:0,y:0},l){if(o){var v="y"===p?"top":"left",b="y"===p?"bottom":"right",O="y"===p?"height":"width";o=l[p];var w=l[p]+n[v],x=l[p]-n[b],j=i?-m[O]/2:0,E="start"===f?d[O]:m[O];f="start"===f?-m[O]:-d[O],m=t.elements.arrow,m=i&&m?u(m):{width:0,height:0};var D=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=D[v],b=D[b],m=Math.max(0,Math.min(d[O],m[O])),E=c?d[O]/2-j-m-v-h:E-m-v-h,c=c?-d[O]/2+j+m+b+h:f+m+b+h,h=t.elements.arrow&&g(t.elements.arrow),d=t.modifiersData.offset?t.modifiersData.offset[t.placement][p]:0,h=l[p]+E-d-(h?"y"===p?h.clientTop||0:h.clientLeft||0:0),c=l[p]+c-d,i=Math.max(i?Math.min(w,h):w,Math.min(o,i?Math.max(x,c):x)),l[p]=i,s[p]=i-o}r&&(r=l[a],i=Math.max(r+n["x"===p?"top":"left"],Math.min(r,r-n["x"===p?"bottom":"right"])),l[a]=i,s[a]=i-r),t.modifiersData[e]=s}},requiresIfExists:["offset"]},Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state;e=e.name;var r=n.elements.arrow,o=n.modifiersData.popperOffsets,i=y(n.placement),a=M(i);if(i=0<=["left","right"].indexOf(i)?"height":"width",r&&o){var s=n.modifiersData[e+"#persistent"].padding,f=u(r),c="y"===a?"top":"left",p="y"===a?"bottom":"right",l=n.rects.reference[i]+n.rects.reference[a]-o[a]-n.rects.popper[i];o=o[a]-n.rects.reference[a],l=(r=(r=g(r))?"y"===a?r.clientHeight||0:r.clientWidth||0:0)/2-f[i]/2+(l/2-o/2),i=Math.max(s[c],Math.min(l,r-f[i]-s[p])),n.modifiersData[e]=((t={})[a]=i,t.centerOffset=i-l,t)}},effect:function(e){var t=e.state,n=e.options;e=e.name;var r=n.element;if(r=void 0===r?"[data-popper-arrow]":r,n=void 0===(n=n.padding)?0:n,null!=r){if("string"==typeof r&&!(r=t.elements.popper.querySelector(r)))return;O(t.elements.popper,r)&&(t.elements.arrow=r,t.modifiersData[e+"#persistent"]={padding:D("number"!=typeof n?n:P(n,T))})}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},$={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,i=L(t,{elementContext:"reference"}),a=L(t,{altBoundary:!0});n=R(i,n),r=R(a,r,o),o=S(n),a=S(r),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:r,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":o,"data-popper-escaped":a})}},ee=B({defaultModifiers:[_,U,F,X]}),te=[_,U,F,X,Y,K,Q,Z,$],ne=B({defaultModifiers:te});e.applyStyles=X,e.arrow=Z,e.computeStyles=F,e.createPopper=ne,e.createPopperLite=ee,e.defaultModifiers=te,e.detectOverflow=L,e.eventListeners=_,e.flip=K,e.hide=$,e.offset=Y,e.popperGenerator=B,e.popperOffsets=U,e.preventOverflow=Q,Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });
  var fieldsMetadataQueue = [];
  var fieldsAvailableQueue = [];
  var contextualLinksQueue = [];
  var entityInstancesTracker = {};

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');

    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });
    $(fieldElement).addClass('quickedit-field');
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: "".concat(fieldID, "[").concat(entity.get('entityInstanceID'), "]"),
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });
    Drupal.quickedit.collections.fields.add(field);
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);

    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));

      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);

    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {
        'editors[]': missingEditors
      }
    });
    var realInsert = Drupal.AjaxCommands.prototype.insert;

    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);

      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];

        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }

      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });

    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    }

    if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: "".concat(contextualLink.entityID, "[").concat(contextualLink.entityInstanceID, "]"),
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });

      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      loadMissingEditors(initContextualLink);
      return true;
    }

    if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    var entityElementSelector = "[data-quickedit-entity-id=\"".concat(entityID, "\"]");
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error("Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id=\"".concat(fieldID, "\"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id=\"").concat(entityID, "\"]. This is typically caused by the theme's template for this entity type forgetting to print the attributes."));
    }

    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }

    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({
          el: fieldElement,
          fieldID: fieldID,
          entityID: entityID,
          entityInstanceID: entityInstanceID
        });
      }
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({
        el: entityElement
      });

      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        entityModel.get('entityDecorationView').remove();
        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });
    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');

      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');

      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];
      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);
      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');

      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });
      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };
  Drupal.quickedit = {
    app: null,
    collections: {
      entities: null,
      fields: null
    },
    editors: {},
    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return "Drupal.quickedit.metadata.".concat(fieldID);
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);

        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));

        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');

  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }

      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};
  Drupal.quickedit.util.constants = {};
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $("<div>".concat(message, "</div>"));
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },
        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {
            '@field-label': fieldLabel
          });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },
        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };
      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if (_typeof(key) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }

          options.validate = true;
        }
      }

      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,
      activeField: null,
      activeModal: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      entityID: null,
      entityInstanceID: null,
      id: null,
      label: null,
      fields: null,
      isActive: false,
      inTempStore: false,
      isDirty: false,
      isCommitting: false,
      state: 'closed',
      fieldsInTempStore: [],
      reload: false
    },
    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());
      this.listenTo(this, 'change:state', this.stateChange);
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;

      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', {
                confirming: true
              });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);
              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }

            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);
        fieldModel.set('inTempStore', true);
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }

          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', {
                  reason: 'invalid'
                });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };

            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, {
                    saved: true
                  });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);
                  entityModel.set('state', 'opened', {
                    reason: 'networkerror'
                  });
                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {
                    '@entity-title': entityModel.get('label')
                  });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }

            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });

          break;
      }
    },
    save: function save(options) {
      var entityModel = this;
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url("quickedit/entity/".concat(entityModel.get('entityID'))),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];
      var currentState = this.get('state');
      var nextState = attrs.state;

      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return "\"".concat(nextState, "\" is an invalid state");
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }

        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;

      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
      this.stopListening();
      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      fieldID: null,
      id: null,
      entity: null,
      metadata: null,
      acceptStateChange: null,
      logicalFieldID: null,
      state: 'inactive',
      isChanged: false,
      inTempStore: false,
      html: null,
      htmlForOtherViewModes: null
    },
    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);
      this.get('entity').get('fields').add(this);
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }

      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;

      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return "\"".concat(next, "\" is an invalid state");
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: currentField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,
      currentValue: null,
      validationErrors: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;
  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView;

      switch (state) {
        case 'launching':
          reload = false;
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });

          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            window.location.reload();
          }

          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField;
            var activeFieldState;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');

              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', {
            confirmed: true
          });
        } else {
          entityModel.set('state', 'deactivating', {
            confirmed: true
          });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $("<div>".concat(Drupal.t('You have unsaved changes'), "</div>"));
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },
            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],
          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);
        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }

        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();
        $fieldWrapper.replaceWith(html);
        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', {
              reason: 'rerender'
            });
            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: updatedField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {
                propagation: true
              });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },
    initialize: function initialize(options) {
      this.editorView = options.editorView;
      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();

          if (from !== 'inactive') {
            this.stopHighlight();

            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }

          this._unpad();

          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }

          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }

          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', {
        reason: 'mouseleave'
      });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;
      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top - 5, "px"),
          left: "".concat(posProp.left - 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] + 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] + 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] + 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] + 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] - 10, "px")
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top + 5, "px"),
          left: "".concat(posProp.left + 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] - 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] - 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] - 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] - 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] + 10, "px")
        });
      }, 0);
      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];
      var propCount = props.length;

      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }

      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }

      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce, Popper) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,
    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);
      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);
      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');

        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();
        this.show('ops');
        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();
      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');
      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);
      var that = this;
      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';
      var delay = 0;
      var check = 0;
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();

            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }

            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;

                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }

              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePopper(_ref) {
        var state = _ref.state;
        var isBelow = state.placement.split('-')[0] === 'bottom';
        var classListMethod = isBelow ? 'add' : 'remove';
        state.elements.popper.classList[classListMethod]('quickedit-toolbar-pointer-top');
      }

      function positionToolbar() {
        var popperElement = that.el;
        var referenceElement = of;
        var boundariesElement = that.$fence[0];
        var popperedge = edge === 'left' ? 'start' : 'end';

        if (referenceElement !== undefined) {
          if (!popperElement.classList.contains('js-popper-processed')) {
            that.popper = Popper.createPopper(referenceElement, popperElement, {
              placement: "top-".concat(popperedge),
              modifiers: [{
                name: 'flip',
                options: {
                  boundary: boundariesElement
                }
              }, {
                name: 'preventOverflow',
                options: {
                  boundary: boundariesElement,
                  tether: false,
                  altAxis: true,
                  padding: {
                    top: 5,
                    bottom: 5
                  }
                }
              }, {
                name: 'computeStyles',
                options: {
                  adaptive: false
                }
              }, {
                name: 'refinePopper',
                phase: 'write',
                enabled: true,
                fn: refinePopper
              }]
            });
            popperElement.classList.add('js-popper-processed');
          } else {
            that.popper.state.elements.reference = referenceElement[0] ? referenceElement[0] : referenceElement;
            that.popper.forceUpdate();
          }
        }

        that.$el.css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,
          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();
      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));
      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));
      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });
      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolbar .quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce, Popper);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);
      this.render();
      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);
      this.$el.closest('.contextual').toggle(!isActive);
      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,
    editorView: null,
    _id: null,
    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;
      this.$root = this.$el;
      this._id = "quickedit-toolbar-for-".concat(this.model.id.replace(/[/[\]]/g, '_'));
      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));
      this.$el.prependTo(this.$root);
      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }

          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return "quickedit-toolbar-for-".concat(this._id);
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return "quickedit-wysiwyg-floated-toolgroup-for-".concat(this._id);
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return "quickedit-wysiwyg-main-toolgroup-for-".concat(this._id);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return {
        padding: false,
        unifiedToolbar: false,
        fullWidthToolbar: false,
        popup: false
      };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };

            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = "quickedit_backstage-".concat(this.fieldModel.id.replace(/[/[\]_\s]/g, '-'));

      function fillAndSubmitForm(value) {
        var $form = $("#".concat(backstageId)).find('form');
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };
      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', {
          id: backstageId
        })).appendTo('body');
        var $form = $(form).appendTo($backstage);
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          fieldModel.set('state', 'saved');
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\"></div>");
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit quickedit-toolbar-container clearfix\">");
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label"></div>';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix"></div>';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return "<span class=\"field\">".concat(Drupal.checkPlain(settings.fieldLabel), "</span>").concat(Drupal.checkPlain(settings.entityLabel));
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence"></div>';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return "<div id=\"".concat(settings.id, "\"></div>");
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += "<div class=\"".concat(classes.join(' '), "\"");

    if (settings.id) {
      html += " id=\"".concat(settings.id, "\"");
    }

    html += '>';
    html += Drupal.theme('quickeditButtons', {
      buttons: settings.buttons
    });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];

      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? "=\"".concat(attrMap[attr], "\"") : ''));
      });
      html += "<button type=\"".concat(button.type, "\" class=\"").concat(button.classes, "\" ").concat(attributes.join(' '), ">").concat(button.label, "</button>");
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }

    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit-form-container\">");
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
// Marzipano - a 360° media viewer for the modern web (v0.9.1)
//
// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Marzipano=t()}}(function(){var t;return function(){function t(e,r,i){function n(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){return n(e[s][1][t]||t)},l,l.exports,t,e,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}return t}()({1:[function(e,r,i){!function(e,n){"object"==typeof i&&"object"==typeof r?r.exports=n():"function"==typeof t&&t.amd?t([],n):"object"==typeof i?i.bowser=n():e.bowser=n()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(i,n,function(e){return t[e]}.bind(null,n));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=90)}({17:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i=r(18),n=function(){function t(){}return t.getFirstMatch=function(t,e){var r=e.match(t);return r&&r.length>0&&r[1]||""},t.getSecondMatch=function(t,e){var r=e.match(t);return r&&r.length>1&&r[2]||""},t.matchAndReturnConst=function(t,e,r){if(t.test(e))return r},t.getWindowsVersionName=function(t){switch(t){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},t.getMacOSVersionName=function(t){var e=t.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),10===e[0])switch(e[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},t.getAndroidVersionName=function(t){var e=t.split(".").splice(0,2).map(function(t){return parseInt(t,10)||0});if(e.push(0),!(1===e[0]&&e[1]<5))return 1===e[0]&&e[1]<6?"Cupcake":1===e[0]&&e[1]>=6?"Donut":2===e[0]&&e[1]<2?"Eclair":2===e[0]&&2===e[1]?"Froyo":2===e[0]&&e[1]>2?"Gingerbread":3===e[0]?"Honeycomb":4===e[0]&&e[1]<1?"Ice Cream Sandwich":4===e[0]&&e[1]<4?"Jelly Bean":4===e[0]&&e[1]>=4?"KitKat":5===e[0]?"Lollipop":6===e[0]?"Marshmallow":7===e[0]?"Nougat":8===e[0]?"Oreo":9===e[0]?"Pie":void 0},t.getVersionPrecision=function(t){return t.split(".").length},t.compareVersions=function(e,r,i){void 0===i&&(i=!1);var n=t.getVersionPrecision(e),o=t.getVersionPrecision(r),s=Math.max(n,o),a=0,u=t.map([e,r],function(e){var r=s-t.getVersionPrecision(e),i=e+new Array(r+1).join(".0");return t.map(i.split("."),function(t){return new Array(20-t.length).join("0")+t}).reverse()});for(i&&(a=s-Math.min(n,o)),s-=1;s>=a;){if(u[0][s]>u[1][s])return 1;if(u[0][s]===u[1][s]){if(s===a)return 0;s-=1}else if(u[0][s]<u[1][s])return-1}},t.map=function(t,e){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(t,e);for(r=0;r<t.length;r+=1)i.push(e(t[r]));return i},t.getBrowserAlias=function(t){return i.BROWSER_ALIASES_MAP[t]},t.getBrowserTypeByAlias=function(t){return i.BROWSER_MAP[t]||""},t}();e["default"]=n,t.exports=e["default"]},18:function(t,e,r){"use strict";e.__esModule=!0,e.ENGINE_MAP=e.OS_MAP=e.PLATFORMS_MAP=e.BROWSER_MAP=e.BROWSER_ALIASES_MAP=void 0,e.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},e.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},e.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},e.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},e.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(t,e,r){"use strict";function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e.__esModule=!0,e["default"]=void 0;var n,o=(n=r(91))&&n.__esModule?n:{"default":n},s=r(18),a=function(){function t(){}var e,r,n;return t.getParser=function(t,e){if(void 0===e&&(e=!1),"string"!=typeof t)throw new Error("UserAgent should be a string");return new o["default"](t,e)},t.parse=function(t){return new o["default"](t).getResult()},e=t,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&i(e.prototype,r),n&&i(e,n),t}();e["default"]=a,t.exports=e["default"]},91:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e["default"]=void 0;var n=i(r(92)),o=i(r(93)),s=i(r(94)),a=i(r(95)),u=i(r(17)),h=function(){function t(t,e){if(void 0===e&&(e=!1),null==t||""===t)throw new Error("UserAgent parameter can't be empty");this._ua=t,this.parsedResult={},!0!==e&&this.parse()}var e=t.prototype;return e.getUA=function(){return this._ua},e.test=function(t){return t.test(this._ua)},e.parseBrowser=function(){var t=this;this.parsedResult.browser={};var e=n["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser},e.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},e.getBrowserName=function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},e.getBrowserVersion=function(){return this.getBrowser().version},e.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},e.parseOS=function(){var t=this;this.parsedResult.os={};var e=o["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os},e.getOSName=function(t){var e=this.getOS().name;return t?String(e).toLowerCase()||"":e||""},e.getOSVersion=function(){return this.getOS().version},e.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},e.getPlatformType=function(t){void 0===t&&(t=!1);var e=this.getPlatform().type;return t?String(e).toLowerCase()||"":e||""},e.parsePlatform=function(){var t=this;this.parsedResult.platform={};var e=s["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform},e.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},e.getEngineName=function(t){return t?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},e.parseEngine=function(){var t=this;this.parsedResult.engine={};var e=a["default"].find(function(e){if("function"==typeof e.test)return e.test(t);if(e.test instanceof Array)return e.test.some(function(e){return t.test(e)});throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine},e.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},e.getResult=function(){return Object.assign({},this.parsedResult)},e.satisfies=function(t){var e=this,r={},i=0,n={},o=0;if(Object.keys(t).forEach(function(e){var s=t[e];"string"==typeof s?(n[e]=s,o+=1):"object"==typeof s&&(r[e]=s,i+=1)}),i>0){var s=Object.keys(r),a=s.find(function(t){return e.isOS(t)});if(a){var u=this.satisfies(r[a]);if(void 0!==u)return u}var h=s.find(function(t){return e.isPlatform(t)});if(h){var l=this.satisfies(r[h]);if(void 0!==l)return l}}if(o>0){var c=Object.keys(n).find(function(t){return e.isBrowser(t,!0)});if(void 0!==c)return this.compareVersion(n[c])}},e.isBrowser=function(t,e){void 0===e&&(e=!1);var r=this.getBrowserName().toLowerCase(),i=t.toLowerCase(),n=u["default"].getBrowserTypeByAlias(i);return e&&n&&(i=n.toLowerCase()),i===r},e.compareVersion=function(t){var e=[0],r=t,i=!1,n=this.getBrowserVersion();if("string"==typeof n)return">"===t[0]||"<"===t[0]?(r=t.substr(1),"="===t[1]?(i=!0,r=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?r=t.substr(1):"~"===t[0]&&(i=!0,r=t.substr(1)),e.indexOf(u["default"].compareVersions(n,r,i))>-1},e.isOS=function(t){return this.getOSName(!0)===String(t).toLowerCase()},e.isPlatform=function(t){return this.getPlatformType(!0)===String(t).toLowerCase()},e.isEngine=function(t){return this.getEngineName(!0)===String(t).toLowerCase()},e.is=function(t){return this.isBrowser(t)||this.isOS(t)||this.isPlatform(t)},e.some=function(t){var e=this;return void 0===t&&(t=[]),t.some(function(t){return e.is(t)})},t}();e["default"]=h,t.exports=e["default"]},92:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function(t){var e={name:"Googlebot"},r=n["default"].getFirstMatch(/googlebot\/(\d+(\.\d+))/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/opera/i],describe:function(t){var e={name:"Opera"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/opr\/|opios/i],describe:function(t){var e={name:"Opera"},r=n["default"].getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/SamsungBrowser/i],describe:function(t){var e={name:"Samsung Internet for Android"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/Whale/i],describe:function(t){var e={name:"NAVER Whale Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/MZBrowser/i],describe:function(t){var e={name:"MZ Browser"},r=n["default"].getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/focus/i],describe:function(t){var e={name:"Focus"},r=n["default"].getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/swing/i],describe:function(t){var e={name:"Swing"},r=n["default"].getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/coast/i],describe:function(t){var e={name:"Opera Coast"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/yabrowser/i],describe:function(t){var e={name:"Yandex Browser"},r=n["default"].getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/ucbrowser/i],describe:function(t){var e={name:"UC Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/Maxthon|mxios/i],describe:function(t){var e={name:"Maxthon"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/epiphany/i],describe:function(t){var e={name:"Epiphany"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/puffin/i],describe:function(t){var e={name:"Puffin"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/sleipnir/i],describe:function(t){var e={name:"Sleipnir"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/k-meleon/i],describe:function(t){var e={name:"K-Meleon"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/micromessenger/i],describe:function(t){var e={name:"WeChat"},r=n["default"].getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/qqbrowser/i],describe:function(t){var e={name:/qqbrowserlite/i.test(t)?"QQ Browser Lite":"QQ Browser"},r=n["default"].getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/msie|trident/i],describe:function(t){var e={name:"Internet Explorer"},r=n["default"].getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/\sedg\//i],describe:function(t){var e={name:"Microsoft Edge"},r=n["default"].getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/edg([ea]|ios)/i],describe:function(t){var e={name:"Microsoft Edge"},r=n["default"].getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/vivaldi/i],describe:function(t){var e={name:"Vivaldi"},r=n["default"].getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/seamonkey/i],describe:function(t){var e={name:"SeaMonkey"},r=n["default"].getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/sailfish/i],describe:function(t){var e={name:"Sailfish"},r=n["default"].getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,t);return r&&(e.version=r),e}},{test:[/silk/i],describe:function(t){var e={name:"Amazon Silk"},r=n["default"].getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/phantom/i],describe:function(t){var e={name:"PhantomJS"},r=n["default"].getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/slimerjs/i],describe:function(t){var e={name:"SlimerJS"},r=n["default"].getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var e={name:"BlackBerry"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var e={name:"WebOS Browser"},r=n["default"].getFirstMatch(o,t)||n["default"].getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/bada/i],describe:function(t){var e={name:"Bada"},r=n["default"].getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/tizen/i],describe:function(t){var e={name:"Tizen"},r=n["default"].getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/qupzilla/i],describe:function(t){var e={name:"QupZilla"},r=n["default"].getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/firefox|iceweasel|fxios/i],describe:function(t){var e={name:"Firefox"},r=n["default"].getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/chromium/i],describe:function(t){var e={name:"Chromium"},r=n["default"].getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,t)||n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/chrome|crios|crmo/i],describe:function(t){var e={name:"Chrome"},r=n["default"].getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/GSA/i],describe:function(t){var e={name:"Google Search"},r=n["default"].getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){var e=!t.test(/like android/i),r=t.test(/android/i);return e&&r},describe:function(t){var e={name:"Android Browser"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/playstation 4/i],describe:function(t){var e={name:"PlayStation 4"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/safari|applewebkit/i],describe:function(t){var e={name:"Safari"},r=n["default"].getFirstMatch(o,t);return r&&(e.version=r),e}},{test:[/.*/i],describe:function(t){var e=-1!==t.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:n["default"].getFirstMatch(e,t),version:n["default"].getSecondMatch(e,t)}}}];e["default"]=s,t.exports=e["default"]},93:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:[/Roku\/DVP/],describe:function(t){var e=n["default"].getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,t);return{name:o.OS_MAP.Roku,version:e}}},{test:[/windows phone/i],describe:function(t){var e=n["default"].getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.WindowsPhone,version:e}}},{test:[/windows/i],describe:function(t){var e=n["default"].getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,t),r=n["default"].getWindowsVersionName(e);return{name:o.OS_MAP.Windows,version:e,versionName:r}}},{test:[/macintosh/i],describe:function(t){var e=n["default"].getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,t).replace(/[_\s]/g,"."),r=n["default"].getMacOSVersionName(e),i={name:o.OS_MAP.MacOS,version:e};return r&&(i.versionName=r),i}},{test:[/(ipod|iphone|ipad)/i],describe:function(t){var e=n["default"].getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,t).replace(/[_\s]/g,".");return{name:o.OS_MAP.iOS,version:e}}},{test:function(t){var e=!t.test(/like android/i),r=t.test(/android/i);return e&&r},describe:function(t){var e=n["default"].getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,t),r=n["default"].getAndroidVersionName(e),i={name:o.OS_MAP.Android,version:e};return r&&(i.versionName=r),i}},{test:[/(web|hpw)[o0]s/i],describe:function(t){var e=n["default"].getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,t),r={name:o.OS_MAP.WebOS};return e&&e.length&&(r.version=e),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(t){var e=n["default"].getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,t)||n["default"].getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,t)||n["default"].getFirstMatch(/\bbb(\d+)/i,t);return{name:o.OS_MAP.BlackBerry,version:e}}},{test:[/bada/i],describe:function(t){var e=n["default"].getFirstMatch(/bada\/(\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Bada,version:e}}},{test:[/tizen/i],describe:function(t){var e=n["default"].getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.Tizen,version:e}}},{test:[/linux/i],describe:function(){return{name:o.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:o.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(t){var e=n["default"].getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,t);return{name:o.OS_MAP.PlayStation4,version:e}}}];e["default"]=s,t.exports=e["default"]},94:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(t){var e=n["default"].getFirstMatch(/(can-l01)/i,t)&&"Nova",r={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return e&&(r.model=e),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){var e=t.test(/ipod|iphone/i),r=t.test(/like (ipod|iphone)/i);return e&&!r},describe:function(t){var e=n["default"].getFirstMatch(/(ipod|iphone)/i,t);return{type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"blackberry"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(t){return"bada"===t.getBrowserName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"windows phone"===t.getBrowserName()},describe:function(){return{type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(t){var e=Number(String(t.getOSVersion()).split(".")[0]);return"android"===t.getOSName(!0)&&e>=3},describe:function(){return{type:o.PLATFORMS_MAP.tablet}}},{test:function(t){return"android"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.mobile}}},{test:function(t){return"macos"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(t){return"windows"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"linux"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.desktop}}},{test:function(t){return"playstation 4"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}},{test:function(t){return"roku"===t.getOSName(!0)},describe:function(){return{type:o.PLATFORMS_MAP.tv}}}];e["default"]=s,t.exports=e["default"]},95:function(t,e,r){"use strict";e.__esModule=!0,e["default"]=void 0;var i,n=(i=r(17))&&i.__esModule?i:{"default":i},o=r(18),s=[{test:function(t){return"microsoft edge"===t.getBrowserName(!0)},describe:function(t){if(/\sedg\//i.test(t))return{name:o.ENGINE_MAP.Blink};var e=n["default"].getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,t);return{name:o.ENGINE_MAP.EdgeHTML,version:e}}},{test:[/trident/i],describe:function(t){var e={name:o.ENGINE_MAP.Trident},r=n["default"].getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){return t.test(/presto/i)},describe:function(t){var e={name:o.ENGINE_MAP.Presto},r=n["default"].getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:function(t){var e=t.test(/gecko/i),r=t.test(/like gecko/i);return e&&!r},describe:function(t){var e={name:o.ENGINE_MAP.Gecko},r=n["default"].getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:o.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(t){var e={name:o.ENGINE_MAP.WebKit},r=n["default"].getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,t);return r&&(e.version=r),e}}];e["default"]=s,t.exports=e["default"]}})})},{}],2:[function(t,e,r){"use strict";function i(t){r.ARRAY_TYPE=a=t}function n(t){return t*h}function o(t,e){return Math.abs(t-e)<=s*Math.max(1,Math.abs(t),Math.abs(e))}Object.defineProperty(r,"__esModule",{value:!0}),r.setMatrixArrayType=i,r.toRadian=n,r.equals=o,r.RANDOM=r.ARRAY_TYPE=r.EPSILON=void 0;var s=1e-6;r.EPSILON=s;var a="undefined"!=typeof Float32Array?Float32Array:Array;r.ARRAY_TYPE=a;var u=Math.random;r.RANDOM=u;var h=Math.PI/180;Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)})},{}],3:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}Object.defineProperty(r,"__esModule",{value:!0}),r.vec4=r.vec3=r.vec2=r.quat2=r.quat=r.mat4=r.mat3=r.mat2d=r.mat2=r.glMatrix=void 0;var n=i(t("./common.js"));r.glMatrix=n;var o=i(t("./mat2.js"));r.mat2=o;var s=i(t("./mat2d.js"));r.mat2d=s;var a=i(t("./mat3.js"));r.mat3=a;var u=i(t("./mat4.js"));r.mat4=u;var h=i(t("./quat.js"));r.quat=h;var l=i(t("./quat2.js"));r.quat2=l;var c=i(t("./vec2.js"));r.vec2=c;var p=i(t("./vec3.js"));r.vec3=p;var f=i(t("./vec4.js"));r.vec4=f},{"./common.js":2,"./mat2.js":4,"./mat2d.js":5,"./mat3.js":6,"./mat4.js":7,"./quat.js":8,"./quat2.js":9,"./vec2.js":10,"./vec3.js":11,"./vec4.js":12}],4:[function(t,e,r){"use strict";function i(){var t=new L.ARRAY_TYPE(4);return L.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function n(t){var e=new L.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function a(t,e,r,i){var n=new L.ARRAY_TYPE(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n}function u(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function h(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function l(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*o-n*i;return s?(s=1/s,t[0]=o*s,t[1]=-i*s,t[2]=-n*s,t[3]=r*s,t):null}function c(t,e){var r=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=r,t}function p(t){return t[0]*t[3]-t[2]*t[1]}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*a+o*u,t[1]=n*a+s*u,t[2]=i*h+o*l,t[3]=n*h+s*l,t}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+o*a,t[1]=n*u+s*a,t[2]=i*-a+o*u,t[3]=n*-a+s*u,t}function m(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1];return t[0]=i*a,t[1]=n*a,t[2]=o*u,t[3]=s*u,t}function v(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=-r,t[3]=i,t}function _(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t}function y(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function g(t){return Math.hypot(t[0],t[1],t[2],t[3])}function w(t,e,r,i){return t[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-t[2]*r[1],[t,e,r]}function M(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function b(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function x(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function E(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=e[0],a=e[1],u=e[2],h=e[3];return Math.abs(r-s)<=L.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-a)<=L.EPSILON*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(n-u)<=L.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(o-h)<=L.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))}function T(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function P(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.identity=s,r.fromValues=a,r.set=u,r.transpose=h,r.invert=l,r.adjoint=c,r.determinant=p,r.multiply=f,r.rotate=d,r.scale=m,r.fromRotation=v,r.fromScaling=_,r.str=y,r.frob=g,r.LDU=w,r.add=M,r.subtract=b,r.exactEquals=x,r.equals=E,r.multiplyScalar=T,r.multiplyScalarAndAdd=P,r.sub=r.mul=void 0;var L=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),S=f;r.mul=S;var A=b;r.sub=A},{"./common.js":2}],5:[function(t,e,r){"use strict";function i(){var t=new P.ARRAY_TYPE(6);return P.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function n(t){var e=new P.ARRAY_TYPE(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function s(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function a(t,e,r,i,n,o){var s=new P.ARRAY_TYPE(6);return s[0]=t,s[1]=e,s[2]=r,s[3]=i,s[4]=n,s[5]=o,s}function u(t,e,r,i,n,o,s){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t}function h(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=r*o-i*n;return u?(u=1/u,t[0]=o*u,t[1]=-i*u,t[2]=-n*u,t[3]=r*u,t[4]=(n*a-o*s)*u,t[5]=(i*s-r*a)*u,t):null}function l(t){return t[0]*t[3]-t[1]*t[2]}function c(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1],c=r[2],p=r[3],f=r[4],d=r[5];return t[0]=i*h+o*l,t[1]=n*h+s*l,t[2]=i*c+o*p,t[3]=n*c+s*p,t[4]=i*f+o*d+a,t[5]=n*f+s*d+u,t}function p(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=Math.sin(r),l=Math.cos(r);return t[0]=i*l+o*h,t[1]=n*l+s*h,t[2]=i*-h+o*l,t[3]=n*-h+s*l,t[4]=a,t[5]=u,t}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1];return t[0]=i*h,t[1]=n*h,t[2]=o*l,t[3]=s*l,t[4]=a,t[5]=u,t}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=r[0],l=r[1];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=i*h+o*l+a,t[5]=n*h+s*l+u,t}function m(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=-r,t[3]=i,t[4]=0,t[5]=0,t}function v(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function _(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function y(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function g(t){
return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function w(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t}function M(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t}function b(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t}function x(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t}function E(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function T(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=e[0],h=e[1],l=e[2],c=e[3],p=e[4],f=e[5];return Math.abs(r-u)<=P.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-h)<=P.EPSILON*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(n-l)<=P.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-c)<=P.EPSILON*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(s-p)<=P.EPSILON*Math.max(1,Math.abs(s),Math.abs(p))&&Math.abs(a-f)<=P.EPSILON*Math.max(1,Math.abs(a),Math.abs(f))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.identity=s,r.fromValues=a,r.set=u,r.invert=h,r.determinant=l,r.multiply=c,r.rotate=p,r.scale=f,r.translate=d,r.fromRotation=m,r.fromScaling=v,r.fromTranslation=_,r.str=y,r.frob=g,r.add=w,r.subtract=M,r.multiplyScalar=b,r.multiplyScalarAndAdd=x,r.exactEquals=E,r.equals=T,r.sub=r.mul=void 0;var P=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),L=c;r.mul=L;var S=M;r.sub=S},{"./common.js":2}],6:[function(t,e,r){"use strict";function i(){var t=new I.ARRAY_TYPE(9);return I.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function n(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function o(t){var e=new I.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function a(t,e,r,i,n,o,s,a,u){var h=new I.ARRAY_TYPE(9);return h[0]=t,h[1]=e,h[2]=r,h[3]=i,h[4]=n,h[5]=o,h[6]=s,h[7]=a,h[8]=u,h}function u(t,e,r,i,n,o,s,a,u,h){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=h,t}function h(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function l(t,e){if(t===e){var r=e[1],i=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=i,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function c(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=l*s-a*h,p=-l*o+a*u,f=h*o-s*u,d=r*c+i*p+n*f;return d?(d=1/d,t[0]=c*d,t[1]=(-l*i+n*h)*d,t[2]=(a*i-n*s)*d,t[3]=p*d,t[4]=(l*r-n*u)*d,t[5]=(-a*r+n*o)*d,t[6]=f*d,t[7]=(-h*r+i*u)*d,t[8]=(s*r-i*o)*d,t):null}function p(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8];return t[0]=s*l-a*h,t[1]=n*h-i*l,t[2]=i*a-n*s,t[3]=a*u-o*l,t[4]=r*l-n*u,t[5]=n*o-r*a,t[6]=o*h-s*u,t[7]=i*u-r*h,t[8]=r*s-i*o,t}function f(t){var e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8];return e*(h*o-s*u)+r*(-h*n+s*a)+i*(u*n-o*a)}function d(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=r[0],f=r[1],d=r[2],m=r[3],v=r[4],_=r[5],y=r[6],g=r[7],w=r[8];return t[0]=p*i+f*s+d*h,t[1]=p*n+f*a+d*l,t[2]=p*o+f*u+d*c,t[3]=m*i+v*s+_*h,t[4]=m*n+v*a+_*l,t[5]=m*o+v*u+_*c,t[6]=y*i+g*s+w*h,t[7]=y*n+g*a+w*l,t[8]=y*o+g*u+w*c,t}function m(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=r[0],f=r[1];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=u,t[6]=p*i+f*s+h,t[7]=p*n+f*a+l,t[8]=p*o+f*u+c,t}function v(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=Math.sin(r),f=Math.cos(r);return t[0]=f*i+p*s,t[1]=f*n+p*a,t[2]=f*o+p*u,t[3]=f*s-p*i,t[4]=f*a-p*n,t[5]=f*u-p*o,t[6]=h,t[7]=l,t[8]=c,t}function _(t,e,r){var i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function y(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function g(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=0,t[3]=-r,t[4]=i,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function w(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function M(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function b(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,u=n+n,h=r*s,l=i*s,c=i*a,p=n*s,f=n*a,d=n*u,m=o*s,v=o*a,_=o*u;return t[0]=1-c-d,t[3]=l-_,t[6]=p+v,t[1]=l+_,t[4]=1-h-d,t[7]=f-m,t[2]=p-v,t[5]=f+m,t[8]=1-h-c,t}function x(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15],y=r*a-i*s,g=r*u-n*s,w=r*h-o*s,M=i*u-n*a,b=i*h-o*a,x=n*h-o*u,E=l*m-c*d,T=l*v-p*d,P=l*_-f*d,L=c*v-p*m,S=c*_-f*m,A=p*_-f*v,R=y*A-g*S+w*L+M*P-b*T+x*E;return R?(R=1/R,t[0]=(a*A-u*S+h*L)*R,t[1]=(u*P-s*A-h*T)*R,t[2]=(s*S-a*P+h*E)*R,t[3]=(n*S-i*A-o*L)*R,t[4]=(r*A-n*P+o*T)*R,t[5]=(i*P-r*S-o*E)*R,t[6]=(m*x-v*b+_*M)*R,t[7]=(v*w-d*x-_*g)*R,t[8]=(d*b-m*w+_*y)*R,t):null}function E(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function T(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function P(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function L(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function S(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function A(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function R(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t[6]=e[6]+r[6]*i,t[7]=e[7]+r[7]*i,t[8]=e[8]+r[8]*i,t}function C(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function O(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=t[8],c=e[0],p=e[1],f=e[2],d=e[3],m=e[4],v=e[5],_=e[6],y=e[7],g=e[8];return Math.abs(r-c)<=I.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(i-p)<=I.EPSILON*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(n-f)<=I.EPSILON*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(o-d)<=I.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(s-m)<=I.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(a-v)<=I.EPSILON*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(u-_)<=I.EPSILON*Math.max(1,Math.abs(u),Math.abs(_))&&Math.abs(h-y)<=I.EPSILON*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(l-g)<=I.EPSILON*Math.max(1,Math.abs(l),Math.abs(g))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.fromMat4=n,r.clone=o,r.copy=s,r.fromValues=a,r.set=u,r.identity=h,r.transpose=l,r.invert=c,r.adjoint=p,r.determinant=f,r.multiply=d,r.translate=m,r.rotate=v,r.scale=_,r.fromTranslation=y,r.fromRotation=g,r.fromScaling=w,r.fromMat2d=M,r.fromQuat=b,r.normalFromMat4=x,r.projection=E,r.str=T,r.frob=P,r.add=L,r.subtract=S,r.multiplyScalar=A,r.multiplyScalarAndAdd=R,r.exactEquals=C,r.equals=O,r.sub=r.mul=void 0;var I=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),F=d;r.mul=F;var z=S;r.sub=z},{"./common.js":2}],7:[function(t,e,r){"use strict";function i(){var t=new U.ARRAY_TYPE(16);return U.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function n(t){var e=new U.ARRAY_TYPE(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function s(t,e,r,i,n,o,s,a,u,h,l,c,p,f,d,m){var v=new U.ARRAY_TYPE(16);return v[0]=t,v[1]=e,v[2]=r,v[3]=i,v[4]=n,v[5]=o,v[6]=s,v[7]=a,v[8]=u,v[9]=h,v[10]=l,v[11]=c,v[12]=p,v[13]=f,v[14]=d,v[15]=m,v}function a(t,e,r,i,n,o,s,a,u,h,l,c,p,f,d,m,v){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t[8]=h,t[9]=l,t[10]=c,t[11]=p,t[12]=f,t[13]=d,t[14]=m,t[15]=v,t}function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,e){if(t===e){var r=e[1],i=e[2],n=e[3],o=e[6],s=e[7],a=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=i,t[9]=o,t[11]=e[14],t[12]=n,t[13]=s,t[14]=a}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function l(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15],y=r*a-i*s,g=r*u-n*s,w=r*h-o*s,M=i*u-n*a,b=i*h-o*a,x=n*h-o*u,E=l*m-c*d,T=l*v-p*d,P=l*_-f*d,L=c*v-p*m,S=c*_-f*m,A=p*_-f*v,R=y*A-g*S+w*L+M*P-b*T+x*E;return R?(R=1/R,t[0]=(a*A-u*S+h*L)*R,t[1]=(n*S-i*A-o*L)*R,t[2]=(m*x-v*b+_*M)*R,t[3]=(p*b-c*x-f*M)*R,t[4]=(u*P-s*A-h*T)*R,t[5]=(r*A-n*P+o*T)*R,t[6]=(v*w-d*x-_*g)*R,t[7]=(l*x-p*w+f*g)*R,t[8]=(s*S-a*P+h*E)*R,t[9]=(i*P-r*S-o*E)*R,t[10]=(d*b-m*w+_*y)*R,t[11]=(c*w-l*b-f*y)*R,t[12]=(a*T-s*L-u*E)*R,t[13]=(r*L-i*T+n*E)*R,t[14]=(m*g-d*M-v*y)*R,t[15]=(l*M-c*g+p*y)*R,t):null}function c(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=e[4],a=e[5],u=e[6],h=e[7],l=e[8],c=e[9],p=e[10],f=e[11],d=e[12],m=e[13],v=e[14],_=e[15];return t[0]=a*(p*_-f*v)-c*(u*_-h*v)+m*(u*f-h*p),t[1]=-(i*(p*_-f*v)-c*(n*_-o*v)+m*(n*f-o*p)),t[2]=i*(u*_-h*v)-a*(n*_-o*v)+m*(n*h-o*u),t[3]=-(i*(u*f-h*p)-a*(n*f-o*p)+c*(n*h-o*u)),t[4]=-(s*(p*_-f*v)-l*(u*_-h*v)+d*(u*f-h*p)),t[5]=r*(p*_-f*v)-l*(n*_-o*v)+d*(n*f-o*p),t[6]=-(r*(u*_-h*v)-s*(n*_-o*v)+d*(n*h-o*u)),t[7]=r*(u*f-h*p)-s*(n*f-o*p)+l*(n*h-o*u),t[8]=s*(c*_-f*m)-l*(a*_-h*m)+d*(a*f-h*c),t[9]=-(r*(c*_-f*m)-l*(i*_-o*m)+d*(i*f-o*c)),t[10]=r*(a*_-h*m)-s*(i*_-o*m)+d*(i*h-o*a),t[11]=-(r*(a*f-h*c)-s*(i*f-o*c)+l*(i*h-o*a)),t[12]=-(s*(c*v-p*m)-l*(a*v-u*m)+d*(a*p-u*c)),t[13]=r*(c*v-p*m)-l*(i*v-n*m)+d*(i*p-n*c),t[14]=-(r*(a*v-u*m)-s*(i*v-n*m)+d*(i*u-n*a)),t[15]=r*(a*p-u*c)-s*(i*p-n*c)+l*(i*u-n*a),t}function p(t){var e=t[0],r=t[1],i=t[2],n=t[3],o=t[4],s=t[5],a=t[6],u=t[7],h=t[8],l=t[9],c=t[10],p=t[11],f=t[12],d=t[13],m=t[14],v=t[15];return(e*s-r*o)*(c*v-p*m)-(e*a-i*o)*(l*v-p*d)+(e*u-n*o)*(l*m-c*d)+(r*a-i*s)*(h*v-p*f)-(r*u-n*s)*(h*m-c*f)+(i*u-n*a)*(h*d-l*f)}function f(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=e[9],f=e[10],d=e[11],m=e[12],v=e[13],_=e[14],y=e[15],g=r[0],w=r[1],M=r[2],b=r[3];return t[0]=g*i+w*a+M*c+b*m,t[1]=g*n+w*u+M*p+b*v,t[2]=g*o+w*h+M*f+b*_,t[3]=g*s+w*l+M*d+b*y,g=r[4],w=r[5],M=r[6],b=r[7],t[4]=g*i+w*a+M*c+b*m,t[5]=g*n+w*u+M*p+b*v,t[6]=g*o+w*h+M*f+b*_,t[7]=g*s+w*l+M*d+b*y,g=r[8],w=r[9],M=r[10],b=r[11],t[8]=g*i+w*a+M*c+b*m,t[9]=g*n+w*u+M*p+b*v,t[10]=g*o+w*h+M*f+b*_,t[11]=g*s+w*l+M*d+b*y,g=r[12],w=r[13],M=r[14],b=r[15],t[12]=g*i+w*a+M*c+b*m,t[13]=g*n+w*u+M*p+b*v,t[14]=g*o+w*h+M*f+b*_,t[15]=g*s+w*l+M*d+b*y,t}function d(t,e,r){var i,n,o,s,a,u,h,l,c,p,f,d,m=r[0],v=r[1],_=r[2];return e===t?(t[12]=e[0]*m+e[4]*v+e[8]*_+e[12],t[13]=e[1]*m+e[5]*v+e[9]*_+e[13],t[14]=e[2]*m+e[6]*v+e[10]*_+e[14],t[15]=e[3]*m+e[7]*v+e[11]*_+e[15]):(i=e[0],n=e[1],o=e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=e[8],p=e[9],f=e[10],d=e[11],t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=a,t[5]=u,t[6]=h,t[7]=l,t[8]=c,t[9]=p,t[10]=f,t[11]=d,t[12]=i*m+a*v+c*_+e[12],t[13]=n*m+u*v+p*_+e[13],t[14]=o*m+h*v+f*_+e[14],t[15]=s*m+l*v+d*_+e[15]),t}function m(t,e,r){var i=r[0],n=r[1],o=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function v(t,e,r,i){var n,o,s,a,u,h,l,c,p,f,d,m,v,_,y,g,w,M,b,x,E,T,P,L,S=i[0],A=i[1],R=i[2],C=Math.hypot(S,A,R);return C<U.EPSILON?null:(C=1/C,S*=C,A*=C,R*=C,n=Math.sin(r),o=Math.cos(r),s=1-o,a=e[0],u=e[1],h=e[2],l=e[3],c=e[4],p=e[5],f=e[6],d=e[7],m=e[8],v=e[9],_=e[10],y=e[11],g=S*S*s+o,w=A*S*s+R*n,M=R*S*s-A*n,b=S*A*s-R*n,x=A*A*s+o,E=R*A*s+S*n,T=S*R*s+A*n,P=A*R*s-S*n,L=R*R*s+o,t[0]=a*g+c*w+m*M,t[1]=u*g+p*w+v*M,t[2]=h*g+f*w+_*M,t[3]=l*g+d*w+y*M,t[4]=a*b+c*x+m*E,t[5]=u*b+p*x+v*E,t[6]=h*b+f*x+_*E,t[7]=l*b+d*x+y*E,t[8]=a*T+c*P+m*L,t[9]=u*T+p*P+v*L,t[10]=h*T+f*P+_*L,t[11]=l*T+d*P+y*L,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function _(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[4],s=e[5],a=e[6],u=e[7],h=e[8],l=e[9],c=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*n+h*i,t[5]=s*n+l*i,t[6]=a*n+c*i,t[7]=u*n+p*i,t[8]=h*n-o*i,t[9]=l*n-s*i,t[10]=c*n-a*i,t[11]=p*n-u*i,t}function y(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],u=e[3],h=e[8],l=e[9],c=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n-h*i,t[1]=s*n-l*i,t[2]=a*n-c*i,t[3]=u*n-p*i,t[8]=o*i+h*n,t[9]=s*i+l*n,t[10]=a*i+c*n,t[11]=u*i+p*n,t}function g(t,e,r){var i=Math.sin(r),n=Math.cos(r),o=e[0],s=e[1],a=e[2],u=e[3],h=e[4],l=e[5],c=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*n+h*i,t[1]=s*n+l*i,t[2]=a*n+c*i,t[3]=u*n+p*i,t[4]=h*n-o*i,t[5]=l*n-s*i,t[6]=c*n-a*i,t[7]=p*n-u*i,t}function w(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function M(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function b(t,e,r){var i,n,o,s=r[0],a=r[1],u=r[2],h=Math.hypot(s,a,u);return h<U.EPSILON?null:(h=1/h,s*=h,a*=h,u*=h,i=Math.sin(e),n=Math.cos(e),o=1-n,t[0]=s*s*o+n,t[1]=a*s*o+u*i,t[2]=u*s*o-a*i,t[3]=0,t[4]=s*a*o-u*i,t[5]=a*a*o+n,t[6]=u*a*o+s*i,t[7]=0,t[8]=s*u*o+a*i,t[9]=a*u*o-s*i,t[10]=u*u*o+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function x(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function E(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function T(t,e){var r=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=i+i,u=n+n,h=o+o,l=i*a,c=i*u,p=i*h,f=n*u,d=n*h,m=o*h,v=s*a,_=s*u,y=s*h;return t[0]=1-(f+m),t[1]=c+y,t[2]=p-_,t[3]=0,t[4]=c-y,t[5]=1-(l+m),t[6]=d+v,t[7]=0,t[8]=p+_,t[9]=d-v,t[10]=1-(l+f),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function L(t,e){var r=new U.ARRAY_TYPE(3),i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=i*i+n*n+o*o+s*s;return c>0?(r[0]=2*(a*s+l*i+u*o-h*n)/c,r[1]=2*(u*s+l*n+h*i-a*o)/c,r[2]=2*(h*s+l*o+a*n-u*i)/c):(r[0]=2*(a*s+l*i+u*o-h*n),r[1]=2*(u*s+l*n+h*i-a*o),r[2]=2*(h*s+l*o+a*n-u*i)),P(t,e,r),t}function S(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function A(t,e){var r=e[0],i=e[1],n=e[2],o=e[4],s=e[5],a=e[6],u=e[8],h=e[9],l=e[10];return t[0]=Math.hypot(r,i,n),t[1]=Math.hypot(o,s,a),t[2]=Math.hypot(u,h,l),t}function R(t,e){var r=new U.ARRAY_TYPE(3);A(r,e);var i=1/r[0],n=1/r[1],o=1/r[2],s=e[0]*i,a=e[1]*n,u=e[2]*o,h=e[4]*i,l=e[5]*n,c=e[6]*o,p=e[8]*i,f=e[9]*n,d=e[10]*o,m=s+l+d,v=0;return m>0?(v=2*Math.sqrt(m+1),t[3]=.25*v,t[0]=(c-f)/v,t[1]=(p-u)/v,t[2]=(a-h)/v):s>l&&s>d?(v=2*Math.sqrt(1+s-l-d),t[3]=(c-f)/v,t[0]=.25*v,t[1]=(a+h)/v,t[2]=(p+u)/v):l>d?(v=2*Math.sqrt(1+l-s-d),t[3]=(p-u)/v,t[0]=(a+h)/v,t[1]=.25*v,t[2]=(c+f)/v):(v=2*Math.sqrt(1+d-s-l),t[3]=(a-h)/v,t[0]=(p+u)/v,t[1]=(c+f)/v,t[2]=.25*v),t}function C(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=e[3],u=n+n,h=o+o,l=s+s,c=n*u,p=n*h,f=n*l,d=o*h,m=o*l,v=s*l,_=a*u,y=a*h,g=a*l,w=i[0],M=i[1],b=i[2];return t[0]=(1-(d+v))*w,t[1]=(p+g)*w,t[2]=(f-y)*w,t[3]=0,t[4]=(p-g)*M,t[5]=(1-(c+v))*M,t[6]=(m+_)*M,t[7]=0,t[8]=(f+y)*b,t[9]=(m-_)*b,t[10]=(1-(c+d))*b,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function O(t,e,r,i,n){var o=e[0],s=e[1],a=e[2],u=e[3],h=o+o,l=s+s,c=a+a,p=o*h,f=o*l,d=o*c,m=s*l,v=s*c,_=a*c,y=u*h,g=u*l,w=u*c,M=i[0],b=i[1],x=i[2],E=n[0],T=n[1],P=n[2],L=(1-(m+_))*M,S=(f+w)*M,A=(d-g)*M,R=(f-w)*b,C=(1-(p+_))*b,O=(v+y)*b,I=(d+g)*x,F=(v-y)*x,z=(1-(p+m))*x;return t[0]=L,t[1]=S,t[2]=A,t[3]=0,t[4]=R,t[5]=C,t[6]=O,t[7]=0,t[8]=I,t[9]=F,t[10]=z,t[11]=0,t[12]=r[0]+E-(L*E+R*T+I*P),t[13]=r[1]+T-(S*E+C*T+F*P),t[14]=r[2]+P-(A*E+O*T+z*P),t[15]=1,t}function I(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r+r,a=i+i,u=n+n,h=r*s,l=i*s,c=i*a,p=n*s,f=n*a,d=n*u,m=o*s,v=o*a,_=o*u;return t[0]=1-c-d,t[1]=l+_,t[2]=p-v,t[3]=0,t[4]=l-_,t[5]=1-h-d,t[6]=f+m,t[7]=0,t[8]=p+v,t[9]=f-m,t[10]=1-h-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function F(t,e,r,i,n,o,s){var a=1/(r-e),u=1/(n-i),h=1/(o-s);return t[0]=2*o*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*u,t[6]=0,t[7]=0,t[8]=(r+e)*a,t[9]=(n+i)*u,t[10]=(s+o)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*o*2*h,t[15]=0,t}function z(t,e,r,i,n){var o,s=1/Math.tan(e/2);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==Infinity?(o=1/(i-n),t[10]=(n+i)*o,t[14]=2*n*i*o):(t[10]=-1,t[14]=-2*i),t}function D(t,e,r,i){var n=Math.tan(e.upDegrees*Math.PI/180),o=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),a=Math.tan(e.rightDegrees*Math.PI/180),u=2/(s+a),h=2/(n+o);return t[0]=u,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-(s-a)*u*.5,t[9]=(n-o)*h*.5,t[10]=i/(r-i),t[11]=-1,t[12]=0,t[13]=0,t[14]=i*r/(r-i),t[15]=0,t}function k(t,e,r,i,n,o,s){var a=1/(e-r),u=1/(i-n),h=1/(o-s);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+r)*a,t[13]=(n+i)*u,t[14]=(s+o)*h,t[15]=1,t}function N(t,e,r,i){var n,o,s,a,h,l,c,p,f,d,m=e[0],v=e[1],_=e[2],y=i[0],g=i[1],w=i[2],M=r[0],b=r[1],x=r[2];return Math.abs(m-M)<U.EPSILON&&Math.abs(v-b)<U.EPSILON&&Math.abs(_-x)<U.EPSILON?u(t):(c=m-M,p=v-b,f=_-x,d=1/Math.hypot(c,p,f),c*=d,p*=d,f*=d,n=g*f-w*p,o=w*c-y*f,s=y*p-g*c,d=Math.hypot(n,o,s),d?(d=1/d,n*=d,o*=d,s*=d):(n=0,o=0,s=0),a=p*s-f*o,h=f*n-c*s,l=c*o-p*n,d=Math.hypot(a,h,l),d?(d=1/d,a*=d,h*=d,l*=d):(a=0,h=0,l=0),t[0]=n,t[1]=a,t[2]=c,t[3]=0,t[4]=o,t[5]=h,t[6]=p,t[7]=0,t[8]=s,t[9]=l,t[10]=f,t[11]=0,t[12]=-(n*m+o*v+s*_),t[13]=-(a*m+h*v+l*_),t[14]=-(c*m+p*v+f*_),t[15]=1,t)}function j(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=i[0],u=i[1],h=i[2],l=n-r[0],c=o-r[1],p=s-r[2],f=l*l+c*c+p*p;f>0&&(f=1/Math.sqrt(f),l*=f,c*=f,p*=f);var d=u*p-h*c,m=h*l-a*p,v=a*c-u*l;return f=d*d+m*m+v*v,f>0&&(f=1/Math.sqrt(f),d*=f,m*=f,v*=f),t[0]=d,t[1]=m,t[2]=v,t[3]=0,t[4]=c*v-p*m,t[5]=p*d-l*v,t[6]=l*m-c*d,t[7]=0,t[8]=l,t[9]=c,t[10]=p,t[11]=0,t[12]=n,t[13]=o,t[14]=s,t[15]=1,t}function H(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function B(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Y(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function q(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function W(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}function V(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t[4]=e[4]+r[4]*i,t[5]=e[5]+r[5]*i,t[6]=e[6]+r[6]*i,t[7]=e[7]+r[7]*i,t[8]=e[8]+r[8]*i,t[9]=e[9]+r[9]*i,t[10]=e[10]+r[10]*i,t[11]=e[11]+r[11]*i,t[12]=e[12]+r[12]*i,t[13]=e[13]+r[13]*i,t[14]=e[14]+r[14]*i,t[15]=e[15]+r[15]*i,t}function X(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function G(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=t[8],c=t[9],p=t[10],f=t[11],d=t[12],m=t[13],v=t[14],_=t[15],y=e[0],g=e[1],w=e[2],M=e[3],b=e[4],x=e[5],E=e[6],T=e[7],P=e[8],L=e[9],S=e[10],A=e[11],R=e[12],C=e[13],O=e[14],I=e[15];return Math.abs(r-y)<=U.EPSILON*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(i-g)<=U.EPSILON*Math.max(1,Math.abs(i),Math.abs(g))&&Math.abs(n-w)<=U.EPSILON*Math.max(1,Math.abs(n),Math.abs(w))&&Math.abs(o-M)<=U.EPSILON*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(s-b)<=U.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(a-x)<=U.EPSILON*Math.max(1,Math.abs(a),Math.abs(x))&&Math.abs(u-E)<=U.EPSILON*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(h-T)<=U.EPSILON*Math.max(1,Math.abs(h),Math.abs(T))&&Math.abs(l-P)<=U.EPSILON*Math.max(1,Math.abs(l),Math.abs(P))&&Math.abs(c-L)<=U.EPSILON*Math.max(1,Math.abs(c),Math.abs(L))&&Math.abs(p-S)<=U.EPSILON*Math.max(1,Math.abs(p),Math.abs(S))&&Math.abs(f-A)<=U.EPSILON*Math.max(1,Math.abs(f),Math.abs(A))&&Math.abs(d-R)<=U.EPSILON*Math.max(1,Math.abs(d),Math.abs(R))&&Math.abs(m-C)<=U.EPSILON*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(v-O)<=U.EPSILON*Math.max(1,Math.abs(v),Math.abs(O))&&Math.abs(_-I)<=U.EPSILON*Math.max(1,Math.abs(_),Math.abs(I))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.copy=o,r.fromValues=s,r.set=a,r.identity=u,r.transpose=h,r.invert=l,r.adjoint=c,r.determinant=p,r.multiply=f,r.translate=d,r.scale=m,r.rotate=v,r.rotateX=_,r.rotateY=y,r.rotateZ=g,r.fromTranslation=w,r.fromScaling=M,r.fromRotation=b,r.fromXRotation=x,r.fromYRotation=E,r.fromZRotation=T,r.fromRotationTranslation=P,r.fromQuat2=L,r.getTranslation=S,r.getScaling=A,r.getRotation=R,r.fromRotationTranslationScale=C,r.fromRotationTranslationScaleOrigin=O,r.fromQuat=I,r.frustum=F,r.perspective=z,r.perspectiveFromFieldOfView=D,r.ortho=k,r.lookAt=N,r.targetTo=j,r.str=H,r.frob=B,r.add=Y,r.subtract=q,r.multiplyScalar=W,r.multiplyScalarAndAdd=V,r.exactEquals=X,r.equals=G,r.sub=r.mul=void 0;var U=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),Z=f;r.mul=Z;var K=q;r.sub=K},{"./common.js":2}],8:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}function n(){var t=new E.ARRAY_TYPE(4);return E.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function o(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function s(t,e,r){r*=.5;var i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t}function a(t,e){var r=2*Math.acos(e[3]),i=Math.sin(r/2);return i>E.EPSILON?(t[0]=e[0]/i,t[1]=e[1]/i,t[2]=e[2]/i):(t[0]=1,t[1]=0,t[2]=0),r}function u(t,e){var r=z(t,e);return Math.acos(2*r*r-1)}function h(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*l+s*a+n*h-o*u,t[1]=n*l+s*u+o*a-i*h,t[2]=o*l+s*h+i*u-n*a,t[3]=s*l-i*a-n*u-o*h,t}function l(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+s*a,t[1]=n*u+o*a,t[2]=o*u-n*a,t[3]=s*u-i*a,t}function c(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u-o*a,t[1]=n*u+s*a,t[2]=o*u+i*a,t[3]=s*u-n*a,t}function p(t,e,r){r*=.5;var i=e[0],n=e[1],o=e[2],s=e[3],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u+n*a,t[1]=n*u-i*a,t[2]=o*u+s*a,t[3]=s*u-o*a,t}function f(t,e){var r=e[0],i=e[1],n=e[2];return t[0]=r,t[1]=i,t[2]=n,t[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),t}function d(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=Math.sqrt(r*r+i*i+n*n),a=Math.exp(o),u=s>0?a*Math.sin(s)/s:0;return t[0]=r*u,t[1]=i*u,t[2]=n*u,t[3]=a*Math.cos(s),t}function m(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=Math.sqrt(r*r+i*i+n*n),a=s>0?Math.atan2(s,o)/s:0;return t[0]=r*a,t[1]=i*a,t[2]=n*a,t[3]=.5*Math.log(r*r+i*i+n*n+o*o),t}function v(t,e,r){return m(t,e),F(t,t,r),d(t,t),t}function _(t,e,r,i){var n,o,s,a,u,h=e[0],l=e[1],c=e[2],p=e[3],f=r[0],d=r[1],m=r[2],v=r[3];return o=h*f+l*d+c*m+p*v,o<0&&(o=-o,f=-f,d=-d,m=-m,v=-v),1-o>E.EPSILON?(n=Math.acos(o),s=Math.sin(n),a=Math.sin((1-i)*n)/s,u=Math.sin(i*n)/s):(a=1-i,u=i),t[0]=a*h+u*f,t[1]=a*l+u*d,t[2]=a*c+u*m,t[3]=a*p+u*v,t}function y(t){var e=E.RANDOM(),r=E.RANDOM(),i=E.RANDOM(),n=Math.sqrt(1-e),o=Math.sqrt(e);return t[0]=n*Math.sin(2*Math.PI*r),t[1]=n*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*i),t[3]=o*Math.cos(2*Math.PI*i),t}function g(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o,a=s?1/s:0;return t[0]=-r*a,t[1]=-i*a,t[2]=-n*a,t[3]=o*a,t}function w(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function M(t,e){var r,i=e[0]+e[4]+e[8];if(i>0)r=Math.sqrt(i+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);var o=(n+1)%3,s=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*o+o]-e[3*s+s]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*o+s]-e[3*s+o])*r,t[o]=(e[3*o+n]+e[3*n+o])*r,t[s]=(e[3*s+n]+e[3*n+s])*r}return t}function b(t,e,r,i){var n=.5*Math.PI/180;e*=n,r*=n,i*=n;var o=Math.sin(e),s=Math.cos(e),a=Math.sin(r),u=Math.cos(r),h=Math.sin(i),l=Math.cos(i);return t[0]=o*u*l-s*a*h,t[1]=s*a*l+o*u*h,t[2]=s*u*h-o*a*l,t[3]=s*u*l+o*a*h,t}function x(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.identity=o,r.setAxisAngle=s,r.getAxisAngle=a,r.getAngle=u,r.multiply=h,r.rotateX=l,r.rotateY=c,r.rotateZ=p,r.calculateW=f,r.exp=d,r.ln=m,r.pow=v,r.slerp=_,r.random=y,r.invert=g,r.conjugate=w,r.fromMat3=M,r.fromEuler=b,r.str=x,r.setAxes=r.sqlerp=r.rotationTo=r.equals=r.exactEquals=r.normalize=r.sqrLen=r.squaredLength=r.len=r.length=r.lerp=r.dot=r.scale=r.mul=r.add=r.set=r.copy=r.fromValues=r.clone=void 0;var E=i(t("./common.js")),T=i(t("./mat3.js")),P=i(t("./vec3.js")),L=i(t("./vec4.js")),S=L.clone;r.clone=S;var A=L.fromValues;r.fromValues=A;var R=L.copy;r.copy=R;var C=L.set;r.set=C;var O=L.add;r.add=O;var I=h;r.mul=I;var F=L.scale;r.scale=F;var z=L.dot;r.dot=z;var D=L.lerp;r.lerp=D;var k=L.length;r.length=k;var N=k;r.len=N;var j=L.squaredLength;r.squaredLength=j;var H=j;r.sqrLen=H;var B=L.normalize;r.normalize=B;var Y=L.exactEquals;r.exactEquals=Y;var q=L.equals;r.equals=q;var W=function(){var t=P.create(),e=P.fromValues(1,0,0),r=P.fromValues(0,1,0);return function(i,n,o){var a=P.dot(n,o);return a<-.999999?(P.cross(t,e,n),P.len(t)<1e-6&&P.cross(t,r,n),P.normalize(t,t),s(i,t,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(P.cross(t,n,o),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=1+a,B(i,i))}}();r.rotationTo=W;var V=function(){var t=n(),e=n();return function(r,i,n,o,s,a){return _(t,i,s,a),_(e,n,o,a),_(r,t,e,2*a*(1-a)),r}}();r.sqlerp=V;var X=function(){var t=T.create();return function(e,r,i,n){return t[0]=i[0],t[3]=i[1],t[6]=i[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],B(e,M(e,t))}}();r.setAxes=X},{"./common.js":2,"./mat3.js":6,"./vec3.js":11,"./vec4.js":12}],9:[function(t,e,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}function n(){var t=new z.ARRAY_TYPE(8);return z.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function o(t){var e=new z.ARRAY_TYPE(8);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function s(t,e,r,i,n,o,s,a){var u=new z.ARRAY_TYPE(8);return u[0]=t,u[1]=e,u[2]=r,u[3]=i,u[4]=n,u[5]=o,u[6]=s,u[7]=a,u}function a(t,e,r,i,n,o,s){var a=new z.ARRAY_TYPE(8);a[0]=t,a[1]=e,a[2]=r,a[3]=i;var u=.5*n,h=.5*o,l=.5*s;return a[4]=u*i+h*r-l*e,a[5]=h*i+l*t-u*r,a[6]=l*i+u*e-h*t,a[7]=-u*t-h*e-l*r,a}function u(t,e,r){var i=.5*r[0],n=.5*r[1],o=.5*r[2],s=e[0],a=e[1],u=e[2],h=e[3];return t[0]=s,t[1]=a,t[2]=u,t[3]=h,t[4]=i*h+n*u-o*a,t[5]=n*h+o*s-i*u,t[6]=o*h+i*a-n*s,t[7]=-i*s-n*a-o*u,t}function h(t,e){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*e[0],t[5]=.5*e[1],t[6]=.5*e[2],t[7]=0,t}function l(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function c(t,e){var r=D.create();k.getRotation(r,e);var i=new z.ARRAY_TYPE(3);return k.getTranslation(i,e),u(t,r,i),t}function p(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function f(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function d(t,e,r,i,n,o,s,a,u){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=o,t[5]=s,t[6]=a,t[7]=u,t}function m(t,e){return t[0]=e[4],t[1]=e[5],t[2]=e[6],t[3]=e[7],t}function v(t,e){return t[4]=e[0],t[5]=e[1],t[6]=e[2],t[7]=e[3],t}function _(t,e){var r=e[4],i=e[5],n=e[6],o=e[7],s=-e[0],a=-e[1],u=-e[2],h=e[3];return t[0]=2*(r*h+o*s+i*u-n*a),t[1]=2*(i*h+o*a+n*s-r*u),t[2]=2*(n*h+o*u+r*a-i*s),t}function y(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=.5*r[0],u=.5*r[1],h=.5*r[2],l=e[4],c=e[5],p=e[6],f=e[7];return t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=s*a+n*h-o*u+l,t[5]=s*u+o*a-i*h+c,t[6]=s*h+i*u-n*a+p,t[7]=-i*a-n*u-o*h+f,t}function g(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateX(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function w(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateY(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function M(t,e,r){var i=-e[0],n=-e[1],o=-e[2],s=e[3],a=e[4],u=e[5],h=e[6],l=e[7],c=a*s+l*i+u*o-h*n,p=u*s+l*n+h*i-a*o,f=h*s+l*o+a*n-u*i,d=l*s-a*i-u*n-h*o;return D.rotateZ(t,e,r),i=t[0],n=t[1],o=t[2],s=t[3],t[4]=c*s+d*i+p*o-f*n,t[5]=p*s+d*n+f*i-c*o,t[6]=f*s+d*o+c*n-p*i,t[7]=d*s-c*i-p*n-f*o,t}function b(t,e,r){
var i=r[0],n=r[1],o=r[2],s=r[3],a=e[0],u=e[1],h=e[2],l=e[3];return t[0]=a*s+l*i+u*o-h*n,t[1]=u*s+l*n+h*i-a*o,t[2]=h*s+l*o+a*n-u*i,t[3]=l*s-a*i-u*n-h*o,a=e[4],u=e[5],h=e[6],l=e[7],t[4]=a*s+l*i+u*o-h*n,t[5]=u*s+l*n+h*i-a*o,t[6]=h*s+l*o+a*n-u*i,t[7]=l*s-a*i-u*n-h*o,t}function x(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[0],u=r[1],h=r[2],l=r[3];return t[0]=i*l+s*a+n*h-o*u,t[1]=n*l+s*u+o*a-i*h,t[2]=o*l+s*h+i*u-n*a,t[3]=s*l-i*a-n*u-o*h,a=r[4],u=r[5],h=r[6],l=r[7],t[4]=i*l+s*a+n*h-o*u,t[5]=n*l+s*u+o*a-i*h,t[6]=o*l+s*h+i*u-n*a,t[7]=s*l-i*a-n*u-o*h,t}function E(t,e,r,i){if(Math.abs(i)<z.EPSILON)return p(t,e);var n=Math.hypot(r[0],r[1],r[2]);i*=.5;var o=Math.sin(i),s=o*r[0]/n,a=o*r[1]/n,u=o*r[2]/n,h=Math.cos(i),l=e[0],c=e[1],f=e[2],d=e[3];t[0]=l*h+d*s+c*u-f*a,t[1]=c*h+d*a+f*s-l*u,t[2]=f*h+d*u+l*a-c*s,t[3]=d*h-l*s-c*a-f*u;var m=e[4],v=e[5],_=e[6],y=e[7];return t[4]=m*h+y*s+v*u-_*a,t[5]=v*h+y*a+_*s-m*u,t[6]=_*h+y*u+m*a-v*s,t[7]=y*h-m*s-v*a-_*u,t}function T(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t}function P(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3],a=r[4],u=r[5],h=r[6],l=r[7],c=e[4],p=e[5],f=e[6],d=e[7],m=r[0],v=r[1],_=r[2],y=r[3];return t[0]=i*y+s*m+n*_-o*v,t[1]=n*y+s*v+o*m-i*_,t[2]=o*y+s*_+i*v-n*m,t[3]=s*y-i*m-n*v-o*_,t[4]=i*l+s*a+n*h-o*u+c*y+d*m+p*_-f*v,t[5]=n*l+s*u+o*a-i*h+p*y+d*v+f*m-c*_,t[6]=o*l+s*h+i*u-n*a+f*y+d*_+c*v-p*m,t[7]=s*l-i*a-n*u-o*h+d*y-c*m-p*v-f*_,t}function L(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t}function S(t,e,r,i){var n=1-i;return B(e,r)<0&&(i=-i),t[0]=e[0]*n+r[0]*i,t[1]=e[1]*n+r[1]*i,t[2]=e[2]*n+r[2]*i,t[3]=e[3]*n+r[3]*i,t[4]=e[4]*n+r[4]*i,t[5]=e[5]*n+r[5]*i,t[6]=e[6]*n+r[6]*i,t[7]=e[7]*n+r[7]*i,t}function A(t,e){var r=W(e);return t[0]=-e[0]/r,t[1]=-e[1]/r,t[2]=-e[2]/r,t[3]=e[3]/r,t[4]=-e[4]/r,t[5]=-e[5]/r,t[6]=-e[6]/r,t[7]=e[7]/r,t}function R(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=e[7],t}function C(t,e){var r=W(e);if(r>0){r=Math.sqrt(r);var i=e[0]/r,n=e[1]/r,o=e[2]/r,s=e[3]/r,a=e[4],u=e[5],h=e[6],l=e[7],c=i*a+n*u+o*h+s*l;t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=(a-i*c)/r,t[5]=(u-n*c)/r,t[6]=(h-o*c)/r,t[7]=(l-s*c)/r}return t}function O(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function I(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]}function F(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=t[4],a=t[5],u=t[6],h=t[7],l=e[0],c=e[1],p=e[2],f=e[3],d=e[4],m=e[5],v=e[6],_=e[7];return Math.abs(r-l)<=z.EPSILON*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(i-c)<=z.EPSILON*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(n-p)<=z.EPSILON*Math.max(1,Math.abs(n),Math.abs(p))&&Math.abs(o-f)<=z.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(s-d)<=z.EPSILON*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(a-m)<=z.EPSILON*Math.max(1,Math.abs(a),Math.abs(m))&&Math.abs(u-v)<=z.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(h-_)<=z.EPSILON*Math.max(1,Math.abs(h),Math.abs(_))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.clone=o,r.fromValues=s,r.fromRotationTranslationValues=a,r.fromRotationTranslation=u,r.fromTranslation=h,r.fromRotation=l,r.fromMat4=c,r.copy=p,r.identity=f,r.set=d,r.getDual=m,r.setDual=v,r.getTranslation=_,r.translate=y,r.rotateX=g,r.rotateY=w,r.rotateZ=M,r.rotateByQuatAppend=b,r.rotateByQuatPrepend=x,r.rotateAroundAxis=E,r.add=T,r.multiply=P,r.scale=L,r.lerp=S,r.invert=A,r.conjugate=R,r.normalize=C,r.str=O,r.exactEquals=I,r.equals=F,r.sqrLen=r.squaredLength=r.len=r.length=r.dot=r.mul=r.setReal=r.getReal=void 0;var z=i(t("./common.js")),D=i(t("./quat.js")),k=i(t("./mat4.js")),N=D.copy;r.getReal=N;var j=D.copy;r.setReal=j;var H=P;r.mul=H;var B=D.dot;r.dot=B;var Y=D.length;r.length=Y;var q=Y;r.len=q;var W=D.squaredLength;r.squaredLength=W;var V=W;r.sqrLen=V},{"./common.js":2,"./mat4.js":7,"./quat.js":8}],10:[function(t,e,r){"use strict";function i(){var t=new H.ARRAY_TYPE(2);return H.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t}function n(t){var e=new H.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e}function o(t,e){var r=new H.ARRAY_TYPE(2);return r[0]=t,r[1]=e,r}function s(t,e){return t[0]=e[0],t[1]=e[1],t}function a(t,e,r){return t[0]=e,t[1]=r,t}function u(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function h(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function l(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t}function p(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function f(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function d(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t}function m(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t}function v(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t}function _(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function y(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t}function g(t,e){var r=e[0]-t[0],i=e[1]-t[1];return Math.hypot(r,i)}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1];return r*r+i*i}function M(t){var e=t[0],r=t[1];return Math.hypot(e,r)}function b(t){var e=t[0],r=t[1];return e*e+r*r}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function T(t,e){var r=e[0],i=e[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]}function L(t,e,r){var i=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=i,t}function S(t,e,r,i){var n=e[0],o=e[1];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t}function A(t,e){e=e||1;var r=2*H.RANDOM()*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t}function R(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n,t[1]=r[1]*i+r[3]*n,t}function C(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[2]*n+r[4],t[1]=r[1]*i+r[3]*n+r[5],t}function O(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[3]*n+r[6],t[1]=r[1]*i+r[4]*n+r[7],t}function I(t,e,r){var i=e[0],n=e[1];return t[0]=r[0]*i+r[4]*n+r[12],t[1]=r[1]*i+r[5]*n+r[13],t}function F(t,e,r,i){var n=e[0]-r[0],o=e[1]-r[1],s=Math.sin(i),a=Math.cos(i);return t[0]=n*a-o*s+r[0],t[1]=n*s+o*a+r[1],t}function z(t,e){var r=t[0],i=t[1],n=e[0],o=e[1],s=r*r+i*i;s>0&&(s=1/Math.sqrt(s));var a=n*n+o*o;a>0&&(a=1/Math.sqrt(a));var u=(r*n+i*o)*s*a;return u>1?0:u<-1?Math.PI:Math.acos(u)}function D(t){return t[0]=0,t[1]=0,t}function k(t){return"vec2("+t[0]+", "+t[1]+")"}function N(t,e){return t[0]===e[0]&&t[1]===e[1]}function j(t,e){var r=t[0],i=t[1],n=e[0],o=e[1];return Math.abs(r-n)<=H.EPSILON*Math.max(1,Math.abs(r),Math.abs(n))&&Math.abs(i-o)<=H.EPSILON*Math.max(1,Math.abs(i),Math.abs(o))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.fromValues=o,r.copy=s,r.set=a,r.add=u,r.subtract=h,r.multiply=l,r.divide=c,r.ceil=p,r.floor=f,r.min=d,r.max=m,r.round=v,r.scale=_,r.scaleAndAdd=y,r.distance=g,r.squaredDistance=w,r.length=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.random=A,r.transformMat2=R,r.transformMat2d=C,r.transformMat3=O,r.transformMat4=I,r.rotate=F,r.angle=z,r.zero=D,r.str=k,r.exactEquals=N,r.equals=j,r.forEach=r.sqrLen=r.sqrDist=r.dist=r.div=r.mul=r.sub=r.len=void 0;var H=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),B=M;r.len=B;var Y=h;r.sub=Y;var q=l;r.mul=q;var W=c;r.div=W;var V=g;r.dist=V;var X=w;r.sqrDist=X;var G=b;r.sqrLen=G;var U=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=2),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],o(t,t,s),e[a]=t[0],e[a+1]=t[1];return e}}();r.forEach=U},{"./common.js":2}],11:[function(t,e,r){"use strict";function i(){var t=new q.ARRAY_TYPE(3);return q.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function n(t){var e=new q.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function o(t){var e=t[0],r=t[1],i=t[2];return Math.hypot(e,r,i)}function s(t,e,r){var i=new q.ARRAY_TYPE(3);return i[0]=t,i[1]=e,i[2]=r,i}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function u(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function h(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function l(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function c(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function p(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function f(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function d(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function m(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function v(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function _(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}function y(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function g(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.hypot(r,i,n)}function M(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function b(t){var e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function T(t,e){var r=e[0],i=e[1],n=e[2],o=r*r+i*i+n*n;return o>0&&(o=1/Math.sqrt(o)),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function L(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],u=r[2];return t[0]=n*u-o*a,t[1]=o*s-i*u,t[2]=i*a-n*s,t}function S(t,e,r,i){var n=e[0],o=e[1],s=e[2];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t}function A(t,e,r,i,n,o){var s=o*o,a=s*(2*o-3)+1,u=s*(o-2)+o,h=s*(o-1),l=s*(3-2*o);return t[0]=e[0]*a+r[0]*u+i[0]*h+n[0]*l,t[1]=e[1]*a+r[1]*u+i[1]*h+n[1]*l,t[2]=e[2]*a+r[2]*u+i[2]*h+n[2]*l,t}function R(t,e,r,i,n,o){var s=1-o,a=s*s,u=o*o,h=a*s,l=3*o*a,c=3*u*s,p=u*o;return t[0]=e[0]*h+r[0]*l+i[0]*c+n[0]*p,t[1]=e[1]*h+r[1]*l+i[1]*c+n[1]*p,t[2]=e[2]*h+r[2]*l+i[2]*c+n[2]*p,t}function C(t,e){e=e||1;var r=2*q.RANDOM()*Math.PI,i=2*q.RANDOM()-1,n=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t[2]=i*e,t}function O(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[3]*i+r[7]*n+r[11]*o+r[15];return s=s||1,t[0]=(r[0]*i+r[4]*n+r[8]*o+r[12])/s,t[1]=(r[1]*i+r[5]*n+r[9]*o+r[13])/s,t[2]=(r[2]*i+r[6]*n+r[10]*o+r[14])/s,t}function I(t,e,r){var i=e[0],n=e[1],o=e[2];return t[0]=i*r[0]+n*r[3]+o*r[6],t[1]=i*r[1]+n*r[4]+o*r[7],t[2]=i*r[2]+n*r[5]+o*r[8],t}function F(t,e,r){var i=r[0],n=r[1],o=r[2],s=r[3],a=e[0],u=e[1],h=e[2],l=n*h-o*u,c=o*a-i*h,p=i*u-n*a,f=n*p-o*c,d=o*l-i*p,m=i*c-n*l,v=2*s;return l*=v,c*=v,p*=v,f*=2,d*=2,m*=2,t[0]=a+l+f,t[1]=u+c+d,t[2]=h+p+m,t}function z(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0],o[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),o[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function D(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),o[1]=n[1],o[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function k(t,e,r,i){var n=[],o=[];return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],o[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),o[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),o[2]=n[2],t[0]=o[0]+r[0],t[1]=o[1]+r[1],t[2]=o[2]+r[2],t}function N(t,e){var r=s(t[0],t[1],t[2]),i=s(e[0],e[1],e[2]);T(r,r),T(i,i);var n=P(r,i);return n>1?0:n<-1?Math.PI:Math.acos(n)}function j(t){return t[0]=0,t[1]=0,t[2]=0,t}function H(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function B(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function Y(t,e){var r=t[0],i=t[1],n=t[2],o=e[0],s=e[1],a=e[2];return Math.abs(r-o)<=q.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-s)<=q.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(n-a)<=q.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.length=o,r.fromValues=s,r.copy=a,r.set=u,r.add=h,r.subtract=l,r.multiply=c,r.divide=p,r.ceil=f,r.floor=d,r.min=m,r.max=v,r.round=_,r.scale=y,r.scaleAndAdd=g,r.distance=w,r.squaredDistance=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.hermite=A,r.bezier=R,r.random=C,r.transformMat4=O,r.transformMat3=I,r.transformQuat=F,r.rotateX=z,r.rotateY=D,r.rotateZ=k,r.angle=N,r.zero=j,r.str=H,r.exactEquals=B,r.equals=Y,r.forEach=r.sqrLen=r.len=r.sqrDist=r.dist=r.div=r.mul=r.sub=void 0;var q=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),W=l;r.sub=W;var V=c;r.mul=V;var X=p;r.div=X;var G=w;r.dist=G;var U=M;r.sqrDist=U;var Z=o;r.len=Z;var K=b;r.sqrLen=K;var Q=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=3),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2];return e}}();r.forEach=Q},{"./common.js":2}],12:[function(t,e,r){"use strict";function i(){var t=new D.ARRAY_TYPE(4);return D.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function n(t){var e=new D.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function o(t,e,r,i){var n=new D.ARRAY_TYPE(4);return n[0]=t,n[1]=e,n[2]=r,n[3]=i,n}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function a(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function u(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function h(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function l(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function p(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t}function f(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t}function d(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t}function m(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t}function v(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t}function _(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function y(t,e,r,i){return t[0]=e[0]+r[0]*i,t[1]=e[1]+r[1]*i,t[2]=e[2]+r[2]*i,t[3]=e[3]+r[3]*i,t}function g(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return Math.hypot(r,i,n,o)}function w(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2],o=e[3]-t[3];return r*r+i*i+n*n+o*o}function M(t){var e=t[0],r=t[1],i=t[2],n=t[3];return Math.hypot(e,r,i,n)}function b(t){var e=t[0],r=t[1],i=t[2],n=t[3];return e*e+r*r+i*i+n*n}function x(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t}function E(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t}function T(t,e){var r=e[0],i=e[1],n=e[2],o=e[3],s=r*r+i*i+n*n+o*o;return s>0&&(s=1/Math.sqrt(s)),t[0]=r*s,t[1]=i*s,t[2]=n*s,t[3]=o*s,t}function P(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function L(t,e,r,i){var n=r[0]*i[1]-r[1]*i[0],o=r[0]*i[2]-r[2]*i[0],s=r[0]*i[3]-r[3]*i[0],a=r[1]*i[2]-r[2]*i[1],u=r[1]*i[3]-r[3]*i[1],h=r[2]*i[3]-r[3]*i[2],l=e[0],c=e[1],p=e[2],f=e[3];return t[0]=c*h-p*u+f*a,t[1]=-l*h+p*s-f*o,t[2]=l*u-c*s+f*n,t[3]=-l*a+c*o-p*n,t}function S(t,e,r,i){var n=e[0],o=e[1],s=e[2],a=e[3];return t[0]=n+i*(r[0]-n),t[1]=o+i*(r[1]-o),t[2]=s+i*(r[2]-s),t[3]=a+i*(r[3]-a),t}function A(t,e){e=e||1;var r,i,n,o,s,a;do{r=2*D.RANDOM()-1,i=2*D.RANDOM()-1,s=r*r+i*i}while(s>=1);do{n=2*D.RANDOM()-1,o=2*D.RANDOM()-1,a=n*n+o*o}while(a>=1);var u=Math.sqrt((1-s)/a);return t[0]=e*r,t[1]=e*i,t[2]=e*n*u,t[3]=e*o*u,t}function R(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3];return t[0]=r[0]*i+r[4]*n+r[8]*o+r[12]*s,t[1]=r[1]*i+r[5]*n+r[9]*o+r[13]*s,t[2]=r[2]*i+r[6]*n+r[10]*o+r[14]*s,t[3]=r[3]*i+r[7]*n+r[11]*o+r[15]*s,t}function C(t,e,r){var i=e[0],n=e[1],o=e[2],s=r[0],a=r[1],u=r[2],h=r[3],l=h*i+a*o-u*n,c=h*n+u*i-s*o,p=h*o+s*n-a*i,f=-s*i-a*n-u*o;return t[0]=l*h+f*-s+c*-u-p*-a,t[1]=c*h+f*-a+p*-s-l*-u,t[2]=p*h+f*-u+l*-a-c*-s,t[3]=e[3],t}function O(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function I(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function F(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function z(t,e){var r=t[0],i=t[1],n=t[2],o=t[3],s=e[0],a=e[1],u=e[2],h=e[3];return Math.abs(r-s)<=D.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(i-a)<=D.EPSILON*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(n-u)<=D.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(o-h)<=D.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i,r.clone=n,r.fromValues=o,r.copy=s,r.set=a,r.add=u,r.subtract=h,r.multiply=l,r.divide=c,r.ceil=p,r.floor=f,r.min=d,r.max=m,r.round=v,r.scale=_,r.scaleAndAdd=y,r.distance=g,r.squaredDistance=w,r.length=M,r.squaredLength=b,r.negate=x,r.inverse=E,r.normalize=T,r.dot=P,r.cross=L,r.lerp=S,r.random=A,r.transformMat4=R,r.transformQuat=C,r.zero=O,r.str=I,r.exactEquals=F,r.equals=z,r.forEach=r.sqrLen=r.len=r.sqrDist=r.dist=r.div=r.mul=r.sub=void 0;var D=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};i.get||i.set?Object.defineProperty(e,r,i):e[r]=t[r]}return e["default"]=t,e}(t("./common.js")),k=h;r.sub=k;var N=l;r.mul=N;var j=c;r.div=j;var H=g;r.dist=H;var B=w;r.sqrDist=B;var Y=M;r.len=Y;var q=b;r.sqrLen=q;var W=function(){var t=i();return function(e,r,i,n,o,s){var a,u;for(r||(r=4),i||(i=0),u=n?Math.min(n*r+i,e.length):e.length,a=i;a<u;a+=r)t[0]=e[a],t[1]=e[a+1],t[2]=e[a+2],t[3]=e[a+3],o(t,t,s),e[a]=t[0],e[a+1]=t[1],e[a+2]=t[2],e[a+3]=t[3];return e}}();r.forEach=W},{"./common.js":2}],13:[function(e,r,i){!function(e,i,n,o){"use strict";function s(t,e,r){return setTimeout(p(t,r),e)}function a(t,e,r){return!!Array.isArray(t)&&(u(t,r[e],r),!0)}function u(t,e,r){var i;if(t)if(t.forEach)t.forEach(e,r);else if(t.length!==o)for(i=0;i<t.length;)e.call(r,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(r,t[i],i,t)}function h(t,e,r){for(var i=Object.keys(e),n=0;n<i.length;)(!r||r&&t[i[n]]===o)&&(t[i[n]]=e[i[n]]),n++;return t}function l(t,e){return h(t,e,!0)}function c(t,e,r){var i,n=e.prototype;i=t.prototype=Object.create(n),i.constructor=t,i._super=n,r&&h(i,r)}function p(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){return typeof t==pt?t.apply(e?e[0]||o:o,e):t}function d(t,e){return t===o?e:t}function m(t,e,r){u(g(e),function(e){t.addEventListener(e,r,!1)})}function v(t,e,r){u(g(e),function(e){t.removeEventListener(e,r,!1)})}function _(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function y(t,e){return t.indexOf(e)>-1}function g(t){return t.trim().split(/\s+/g)}function w(t,e,r){if(t.indexOf&&!r)return t.indexOf(e);for(var i=0;i<t.length;){if(r&&t[i][r]==e||!r&&t[i]===e)return i;i++}return-1}function M(t){return Array.prototype.slice.call(t,0)}function b(t,e,r){for(var i=[],n=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];w(n,s)<0&&i.push(t[o]),n[o]=s,o++}return r&&(i=e?i.sort(function(t,r){return t[e]>r[e]}):i.sort()),i}function x(t,e){for(var r,i,n=e[0].toUpperCase()+e.slice(1),s=0;s<lt.length;){if(r=lt[s],(i=r?r+n:e)in t)return i;s++}return o}function E(){return vt++}function T(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function P(t,e){var r=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){f(t.options.enable,[t])&&r.handler(e)},this.init()}function L(t){var e=t.options.inputClass;return new(e||(gt?B:wt?W:yt?X:H))(t,S)}function S(t,e,r){var i=r.pointers.length,n=r.changedPointers.length,o=e&bt&&i-n==0,s=e&(Et|Tt)&&i-n==0;r.isFirst=!!o,r.isFinal=!!s,o&&(t.session={}),r.eventType=e,A(t,r),t.emit("hammer.input",r),t.recognize(r),t.session.prevInput=r}function A(t,e){var r=t.session,i=e.pointers,n=i.length;r.firstInput||(r.firstInput=O(e)),n>1&&!r.firstMultiple?r.firstMultiple=O(e):1===n&&(r.firstMultiple=!1);var o=r.firstInput,s=r.firstMultiple,a=s?s.center:o.center,u=e.center=I(i);e.timeStamp=mt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=k(a,u),e.distance=D(a,u),R(r,e),e.offsetDirection=z(e.deltaX,e.deltaY),e.scale=s?j(s.pointers,i):1,e.rotation=s?N(s.pointers,i):0,C(r,e);var h=t.element;_(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function R(t,e){var r=e.center,i=t.offsetDelta||{},n=t.prevDelta||{},o=t.prevInput||{};e.eventType!==bt&&o.eventType!==Et||(n=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:r.x,y:r.y}),e.deltaX=n.x+(r.x-i.x),e.deltaY=n.y+(r.y-i.y)}function C(t,e){var r,i,n,s,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(e.eventType!=Tt&&(u>Mt||a.velocity===o)){var h=a.deltaX-e.deltaX,l=a.deltaY-e.deltaY,c=F(u,h,l);i=c.x,n=c.y,r=dt(c.x)>dt(c.y)?c.x:c.y,s=z(h,l),t.lastInterval=e}else r=a.velocity,i=a.velocityX,n=a.velocityY,s=a.direction;e.velocity=r,e.velocityX=i,e.velocityY=n,e.direction=s}function O(t){for(var e=[],r=0;r<t.pointers.length;)e[r]={clientX:ft(t.pointers[r].clientX),clientY:ft(t.pointers[r].clientY)},r++;return{timeStamp:mt(),pointers:e,center:I(e),deltaX:t.deltaX,deltaY:t.deltaY}}function I(t){var e=t.length;if(1===e)return{x:ft(t[0].clientX),y:ft(t[0].clientY)};for(var r=0,i=0,n=0;n<e;)r+=t[n].clientX,i+=t[n].clientY,n++;return{x:ft(r/e),y:ft(i/e)}}function F(t,e,r){return{x:e/t||0,y:r/t||0}}function z(t,e){return t===e?Pt:dt(t)>=dt(e)?t>0?Lt:St:e>0?At:Rt}function D(t,e,r){r||(r=Ft);var i=e[r[0]]-t[r[0]],n=e[r[1]]-t[r[1]];return Math.sqrt(i*i+n*n)}function k(t,e,r){r||(r=Ft);var i=e[r[0]]-t[r[0]],n=e[r[1]]-t[r[1]];return 180*Math.atan2(n,i)/Math.PI}function N(t,e){return k(e[1],e[0],zt)-k(t[1],t[0],zt)}function j(t,e){return D(e[0],e[1],zt)/D(t[0],t[1],zt)}function H(){this.evEl=kt,this.evWin=Nt,this.allow=!0,this.pressed=!1,P.apply(this,arguments)}function B(){this.evEl=Bt,this.evWin=Yt,P.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Y(){this.evTarget=Wt,this.evWin=Vt,this.started=!1,P.apply(this,arguments)}function q(t,e){var r=M(t.touches),i=M(t.changedTouches);return e&(Et|Tt)&&(r=b(r.concat(i),"identifier",!0)),[r,i]}function W(){this.evTarget=Gt,this.targetIds={},P.apply(this,arguments)}function V(t,e){var r=M(t.touches),i=this.targetIds;if(e&(bt|xt)&&1===r.length)return i[r[0].identifier]=!0,[r,r];var n,o,s=M(t.changedTouches),a=[],u=this.target;if(o=r.filter(function(t){return _(t.target,u)}),e===bt)for(n=0;n<o.length;)i[o[n].identifier]=!0,n++;for(n=0;n<s.length;)i[s[n].identifier]&&a.push(s[n]),e&(Et|Tt)&&delete i[s[n].identifier],n++;return a.length?[b(o.concat(a),"identifier",!0),a]:void 0}function X(){P.apply(this,arguments);var t=p(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new H(this.manager,t)}function G(t,e){this.manager=t,this.set(e)}function U(t){if(y(t,$t))return $t;var e=y(t,Jt),r=y(t,te);return e&&r?Jt+" "+te:e||r?e?Jt:te:y(t,Qt)?Qt:Kt}function Z(t){this.id=E(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=d(this.options.enable,!0),this.state=ee,this.simultaneous={},this.requireFail=[]}function K(t){return t&se?"cancel":t&ne?"end":t&ie?"move":t&re?"start":""}function Q(t){return t==Rt?"down":t==At?"up":t==Lt?"left":t==St?"right":""}function $(t,e){var r=e.manager;return r?r.get(t):t}function J(){Z.apply(this,arguments)}function tt(){J.apply(this,arguments),this.pX=null,this.pY=null}function et(){J.apply(this,arguments)}function rt(){Z.apply(this,arguments),this._timer=null,this._input=null}function it(){J.apply(this,arguments)}function nt(){J.apply(this,arguments)}function ot(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(t,e){return e=e||{},e.recognizers=d(e.recognizers,st.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,st.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=L(this),this.touchAction=new G(this,this.options.touchAction),ut(this,!0),u(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ut(t,e){var r=t.element;u(t.options.cssProps,function(t,i){r.style[x(r.style,i)]=e?t:""})}function ht(t,e){var r=i.createEvent("Event");r.initEvent(t,!0,!0),r.gesture=e,e.target.dispatchEvent(r)}var lt=["","webkit","moz","MS","ms","o"],ct=i.createElement("div"),pt="function",ft=Math.round,dt=Math.abs,mt=Date.now,vt=1,_t=/mobile|tablet|ip(ad|hone|od)|android/i,yt="ontouchstart"in e,gt=x(e,"PointerEvent")!==o,wt=yt&&_t.test(navigator.userAgent),Mt=25,bt=1,xt=2,Et=4,Tt=8,Pt=1,Lt=2,St=4,At=8,Rt=16,Ct=Lt|St,Ot=At|Rt,It=Ct|Ot,Ft=["x","y"],zt=["clientX","clientY"];P.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(T(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&v(this.element,this.evEl,this.domHandler),this.evTarget&&v(this.target,this.evTarget,this.domHandler),this.evWin&&v(T(this.element),this.evWin,this.domHandler)}};var Dt={mousedown:bt,mousemove:xt,mouseup:Et},kt="mousedown",Nt="mousemove mouseup";c(H,P,{handler:function(t){var e=Dt[t.type];e&bt&&0===t.button&&(this.pressed=!0),e&xt&&1!==t.which&&(e=Et),this.pressed&&this.allow&&(e&Et&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var jt={pointerdown:bt,pointermove:xt,pointerup:Et,pointercancel:Tt,pointerout:Tt},Ht={2:"touch",3:"pen",4:"mouse",5:"kinect"},Bt="pointerdown",Yt="pointermove pointerup pointercancel";e.MSPointerEvent&&(Bt="MSPointerDown",Yt="MSPointerMove MSPointerUp MSPointerCancel"),c(B,P,{handler:function(t){var e=this.store,r=!1,i=t.type.toLowerCase().replace("ms",""),n=jt[i],o=Ht[t.pointerType]||t.pointerType,s="touch"==o,a=w(e,t.pointerId,"pointerId");n&bt&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):n&(Et|Tt)&&(r=!0),a<0||(e[a]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),r&&e.splice(a,1))}});var qt={touchstart:bt,touchmove:xt,touchend:Et,touchcancel:Tt},Wt="touchstart",Vt="touchstart touchmove touchend touchcancel";c(Y,P,{handler:function(t){var e=qt[t.type];if(e===bt&&(this.started=!0),this.started){var r=q.call(this,t,e);e&(Et|Tt)&&r[0].length-r[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:r[0],changedPointers:r[1],pointerType:"touch",srcEvent:t})}}});var Xt={touchstart:bt,touchmove:xt,touchend:Et,touchcancel:Tt},Gt="touchstart touchmove touchend touchcancel";c(W,P,{handler:function(t){var e=Xt[t.type],r=V.call(this,t,e);r&&this.callback(this.manager,e,{pointers:r[0],changedPointers:r[1],pointerType:"touch",srcEvent:t})}}),c(X,P,{handler:function(t,e,r){var i="touch"==r.pointerType,n="mouse"==r.pointerType;if(i)this.mouse.allow=!1;else if(n&&!this.mouse.allow)return;e&(Et|Tt)&&(this.mouse.allow=!0),this.callback(t,e,r)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ut=x(ct.style,"touchAction"),Zt=Ut!==o,Kt="auto",Qt="manipulation",$t="none",Jt="pan-x",te="pan-y";G.prototype={set:function(t){"compute"==t&&(t=this.compute()),Zt&&(this.manager.element.style[Ut]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return u(this.manager.recognizers,function(e){f(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),U(t.join(" "))},preventDefaults:function(t){if(!Zt){var e=t.srcEvent,r=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,n=y(i,$t),o=y(i,te),s=y(i,Jt);return n||o&&r&Ct||s&&r&Ot?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ee=1,re=2,ie=4,ne=8,oe=ne,se=16;Z.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=$(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=$(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=$(t,this),-1===w(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=$(t,this);var e=w(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){r.manager.emit(r.options.event+(e?K(i):""),t)}var r=this,i=this.state;i<ne&&e(!0),e(),i>=ne&&e(!0)},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ee)))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!f(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(oe|se|32)&&(this.state=ee),this.state=this.process(e),this.state&(re|ie|ne|se)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},c(J,Z,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,r=t.eventType,i=e&(re|ie),n=this.attrTest(t);return i&&(r&Tt||!n)?e|se:i||n?r&Et?e|ne:e&re?e|ie:re:32}}),c(tt,J,{defaults:{event:"pan",threshold:10,pointers:1,direction:It},getTouchAction:function(){var t=this.options.direction,e=[];return t&Ct&&e.push(te),t&Ot&&e.push(Jt),e},directionTest:function(t){var e=this.options,r=!0,i=t.distance,n=t.direction,o=t.deltaX,s=t.deltaY;return n&e.direction||(e.direction&Ct?(n=0===o?Pt:o<0?Lt:St,r=o!=this.pX,i=Math.abs(t.deltaX)):(n=0===s?Pt:s<0?At:Rt,r=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=n,r&&i>e.threshold&&n&e.direction},attrTest:function(t){return J.prototype.attrTest.call(this,t)&&(this.state&re||!(this.state&re)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Q(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(et,J,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[$t]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&re)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(rt,Z,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,r=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime>e.time;if(this._input=t,!i||!r||t.eventType&(Et|Tt)&&!n)this.reset();else if(t.eventType&bt)this.reset(),this._timer=s(function(){
this.state=oe,this.tryEmit()},e.time,this);else if(t.eventType&Et)return oe;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===oe&&(t&&t.eventType&Et?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=mt(),this.manager.emit(this.options.event,this._input)))}}),c(it,J,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[$t]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&re)}}),c(nt,J,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ct|Ot,pointers:1},getTouchAction:function(){return tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,r=this.options.direction;return r&(Ct|Ot)?e=t.velocity:r&Ct?e=t.velocityX:r&Ot&&(e=t.velocityY),this._super.attrTest.call(this,t)&&r&t.direction&&t.distance>this.options.threshold&&dt(e)>this.options.velocity&&t.eventType&Et},emit:function(t){var e=Q(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(ot,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Qt]},process:function(t){var e=this.options,r=t.pointers.length===e.pointers,i=t.distance<e.threshold,n=t.deltaTime<e.time;if(this.reset(),t.eventType&bt&&0===this.count)return this.failTimeout();if(i&&n&&r){if(t.eventType!=Et)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||D(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t;if(0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=s(function(){this.state=oe,this.tryEmit()},e.interval,this),re):oe}return 32},failTimeout:function(){return this._timer=s(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==oe&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.4",st.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[it,{enable:!1}],[et,{enable:!1},["rotate"]],[nt,{direction:Ct}],[tt,{direction:Ct},["swipe"]],[ot],[ot,{event:"doubletap",taps:2},["tap"]],[rt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var r,i=this.recognizers,n=e.curRecognizer;(!n||n&&n.state&oe)&&(n=e.curRecognizer=null);for(var o=0;o<i.length;)r=i[o],2===e.stopped||n&&r!=n&&!r.canRecognizeWith(n)?r.reset():r.recognize(t),!n&&r.state&(re|ie|ne)&&(n=e.curRecognizer=r),o++}},get:function(t){if(t instanceof Z)return t;for(var e=this.recognizers,r=0;r<e.length;r++)if(e[r].options.event==t)return e[r];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(w(e,t),1),this.touchAction.update(),this},on:function(t,e){var r=this.handlers;return u(g(t),function(t){r[t]=r[t]||[],r[t].push(e)}),this},off:function(t,e){var r=this.handlers;return u(g(t),function(t){e?r[t].splice(w(r[t],e),1):delete r[t]}),this},emit:function(t,e){this.options.domEvents&&ht(t,e);var r=this.handlers[t]&&this.handlers[t].slice();if(r&&r.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<r.length;)r[i](e),i++}},destroy:function(){this.element&&ut(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(st,{INPUT_START:bt,INPUT_MOVE:xt,INPUT_END:Et,INPUT_CANCEL:Tt,STATE_POSSIBLE:ee,STATE_BEGAN:re,STATE_CHANGED:ie,STATE_ENDED:ne,STATE_RECOGNIZED:oe,STATE_CANCELLED:se,STATE_FAILED:32,DIRECTION_NONE:Pt,DIRECTION_LEFT:Lt,DIRECTION_RIGHT:St,DIRECTION_UP:At,DIRECTION_DOWN:Rt,DIRECTION_HORIZONTAL:Ct,DIRECTION_VERTICAL:Ot,DIRECTION_ALL:It,Manager:at,Input:P,TouchAction:G,TouchInput:W,MouseInput:H,PointerEventInput:B,TouchMouseInput:X,SingleTouchInput:Y,Recognizer:Z,AttrRecognizer:J,Tap:ot,Pan:tt,Swipe:nt,Pinch:et,Rotate:it,Press:rt,on:m,off:v,each:u,merge:l,extend:h,inherit:c,bindFn:p,prefixed:x}),typeof t==pt&&t.amd?t(function(){return st}):void 0!==r&&r.exports?r.exports=st:e.Hammer=st}(window,document)},{}],14:[function(t,e,r){"use strict";function i(){}function n(t){for(var e in i.prototype)i.prototype.hasOwnProperty(e)&&(t.prototype[e]=i.prototype[e])}i.prototype.addEventListener=function(t,e){var r=this.__events=this.__events||{},i=r[t]=r[t]||[];i.indexOf(e)<0&&i.push(e)},i.prototype.removeEventListener=function(t,e){var r=this.__events=this.__events||{},i=r[t];if(i){var n=i.indexOf(e);n>=0&&i.splice(n,1)}},i.prototype.emit=function(t,e){var r=this.__events=this.__events||{},i=r[t],n=Array.prototype.slice.call(arguments,1);if(i)for(var o=0;o<i.length;o++){var s=i[o];s.apply(this,n)}},e.exports=n},{}],15:[function(t,e,r){"use strict";function i(t,e,r,i,n){if(n=n||{},n.perspective=n.perspective||{},n.perspective.extraTransforms=null!=n.perspective.extraTransforms?n.perspective.extraTransforms:"",(n.perspective.radius||n.perspective.extraTransforms)&&!o())throw new Error("CSS transforms on hotspots are not supported on this browser");this._domElement=t,this._parentDomElement=e,this._view=r,this._coords={},this._perspective={},this.setPosition(i),this._parentDomElement.appendChild(this._domElement),this.setPerspective(n.perspective),this._visible=!0,this._position={x:0,y:0}}var n=t("minimal-event-emitter"),o=t("./support/Css"),s=t("./util/positionAbsolutely"),a=t("./util/dom").setTransform,u=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._parentDomElement.removeChild(this._domElement),u(this)},i.prototype.domElement=function(){return this._domElement},i.prototype.position=function(){return this._coords},i.prototype.setPosition=function(t){for(var e in t)this._coords[e]=t[e];this._update()},i.prototype.perspective=function(){return this._perspective},i.prototype.setPerspective=function(t){for(var e in t)this._perspective[e]=t[e];this._update()},i.prototype.show=function(){this._visible||(this._visible=!0,this._update())},i.prototype.hide=function(){this._visible&&(this._visible=!1,this._update())},i.prototype._update=function(){var t,e,r=this._domElement,i=this._coords,n=this._position,o=!1;if(this._visible){var s=this._view;this._perspective.radius?(o=!0,this._setEmbeddedPosition(s,i)):(s.coordinatesToScreen(i,n),t=n.x,e=n.y,null!=t&&null!=e&&(o=!0,this._setPosition(t,e)))}o?(r.style.display="block",r.style.position="absolute"):(r.style.display="none",r.style.position="")},i.prototype._setEmbeddedPosition=function(t,e){var r=t.coordinatesToPerspectiveTransform(e,this._perspective.radius,this._perspective.extraTransforms);a(this._domElement,r)},i.prototype._setPosition=function(t,e){s(this._domElement,t,e,this._perspective.extraTransforms)},e.exports=i},{"./support/Css":82,"./util/clearOwnProperties":91,"./util/dom":100,"./util/positionAbsolutely":111,"minimal-event-emitter":14}],16:[function(t,e,r){"use strict";function i(t,e,r,i,n){n=n||{},this._parentDomElement=t,this._stage=e,this._view=r,this._renderLoop=i,this._hotspots=[],this._visible=!0,this._rect=n.rect,this._visibilityOrRectChanged=!0,this._stageWidth=null,this._stageHeight=null,this._tmpRect={},this._hotspotContainerWrapper=document.createElement("div"),h(this._hotspotContainerWrapper),d(this._hotspotContainerWrapper,"none"),this._parentDomElement.appendChild(this._hotspotContainerWrapper),this._hotspotContainer=document.createElement("div"),h(this._hotspotContainer),d(this._hotspotContainer,"all"),this._hotspotContainerWrapper.appendChild(this._hotspotContainer),this._updateHandler=this._update.bind(this),this._renderLoop.addEventListener("afterRender",this._updateHandler)}var n=t("minimal-event-emitter"),o=t("./Hotspot"),s=t("./util/calcRect"),a=t("./support/cssPointerEvents"),u=t("./util/positionAbsolutely"),h=t("./util/dom").setAbsolute,l=t("./util/dom").setOverflowHidden,c=t("./util/dom").setOverflowVisible,p=t("./util/dom").setNullSize,f=t("./util/dom").setPixelSize,d=t("./util/dom").setWithVendorPrefix("pointer-events"),m=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){for(;this._hotspots.length;)this.destroyHotspot(this._hotspots[0]);this._parentDomElement.removeChild(this._hotspotContainerWrapper),this._renderLoop.removeEventListener("afterRender",this._updateHandler),m(this)},i.prototype.domElement=function(){return this._hotspotContainer},i.prototype.setRect=function(t){t&&!a()&&"undefined"!=typeof console&&console.warn("Using a rect effect is not fully supported on this browser. Hotspots may not be shown."),this._rect=t,this._visibilityOrRectChanged=!0},i.prototype.rect=function(){return this._rect},i.prototype.createHotspot=function(t,e,r){e=e||{};var i=new o(t,this._hotspotContainer,this._view,e,r);return this._hotspots.push(i),i._update(),this.emit("hotspotsChange"),i},i.prototype.hasHotspot=function(t){return this._hotspots.indexOf(t)>=0},i.prototype.listHotspots=function(){return[].concat(this._hotspots)},i.prototype.destroyHotspot=function(t){var e=this._hotspots.indexOf(t);if(e<0)throw new Error("No such hotspot");this._hotspots.splice(e,1),t.destroy(),this.emit("hotspotsChange")},i.prototype.hide=function(){this._visible&&(this._visible=!1,this._visibilityOrRectChanged=!0,this._update())},i.prototype.show=function(){this._visible||(this._visible=!0,this._visibilityOrRectChanged=!0,this._update())},i.prototype._update=function(){var t=this._hotspotContainerWrapper,e=this._stage.width(),r=this._stage.height(),i=this._tmpRect;if(this._visibilityOrRectChanged||this._rect&&(e!==this._stageWidth||r!==this._stageHeight)){var n=this._visible&&!(this._rect&&!a());t.style.display=n?"block":"none",n&&(this._rect?(s(e,r,this._rect,i),u(t,e*i.x,r*i.y),f(t,e*i.width,r*i.height),l(t)):(u(t,0,0),p(t),c(t))),this._stageWidth=e,this._stageHeight=r,this._visibilityOrRectChanged=!1}for(var o=0;o<this._hotspots.length;o++)this._hotspots[o]._update()},e.exports=i},{"./Hotspot":15,"./support/cssPointerEvents":85,"./util/calcRect":87,"./util/clearOwnProperties":91,"./util/dom":100,"./util/positionAbsolutely":111,"minimal-event-emitter":14}],17:[function(t,e,r){"use strict";function i(t,e,r,i,n){n=n||{};var o=this;this._source=t,this._geometry=e,this._view=r,this._textureStore=i,this._effects=n.effects||{},this._fixedLevelIndex=null,this._viewChangeHandler=function(){o.emit("viewChange",o.view())},this._view.addEventListener("change",this._viewChangeHandler),this._textureStoreChangeHandler=function(){o.emit("textureStoreChange",o.textureStore())},this._textureStore.addEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureInvalid",this._textureStoreChangeHandler)}var n=t("minimal-event-emitter"),o=t("./util/extend"),s=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._textureStore.removeEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureInvalid",this._textureStoreChangeHandler),s(this)},i.prototype.source=function(){return this._source},i.prototype.geometry=function(){return this._geometry},i.prototype.view=function(){return this._view},i.prototype.textureStore=function(){return this._textureStore},i.prototype.effects=function(){return this._effects},i.prototype.setEffects=function(t){this._effects=t,this.emit("effectsChange",this._effects)},i.prototype.mergeEffects=function(t){o(this._effects,t),this.emit("effectsChange",this._effects)},i.prototype.fixedLevel=function(){return this._fixedLevelIndex},i.prototype.setFixedLevel=function(t){if(t!==this._fixedLevelIndex){if(null!=t&&(t>=this._geometry.levelList.length||t<0))throw new Error("Level index out of range: "+t);this._fixedLevelIndex=t,this.emit("fixedLevelChange",this._fixedLevelIndex)}},i.prototype._selectLevel=function(){return null!=this._fixedLevelIndex?this._geometry.levelList[this._fixedLevelIndex]:this._view.selectLevel(this._geometry.selectableLevelList)},i.prototype.visibleTiles=function(t){var e=this._selectLevel();return this._geometry.visibleTiles(this._view,e,t)},i.prototype.pinLevel=function(t){for(var e=this._geometry.levelList[t],r=this._geometry.levelTiles(e),i=0;i<r.length;i++)this._textureStore.pin(r[i])},i.prototype.unpinLevel=function(t){for(var e=this._geometry.levelList[t],r=this._geometry.levelTiles(e),i=0;i<r.length;i++)this._textureStore.unpin(r[i])},i.prototype.pinFirstLevel=function(){return this.pinLevel(0)},i.prototype.unpinFirstLevel=function(){return this.unpinLevel(0)},e.exports=i},{"./util/clearOwnProperties":91,"./util/extend":101,"minimal-event-emitter":14}],18:[function(t,e,r){"use strict";function i(t){this.constructor.super_.apply(this,arguments),this.message=t}t("./util/inherits")(i,Error),e.exports=i},{"./util/inherits":104}],19:[function(t,e,r){"use strict";function i(t){var e=this;this._stage=t,this._running=!1,this._rendering=!1,this._requestHandle=null,this._boundLoop=this._loop.bind(this),this._renderInvalidHandler=function(){e._rendering||e.renderOnNextFrame()},this._stage.addEventListener("renderInvalid",this._renderInvalidHandler)}var n=t("minimal-event-emitter"),o=t("./util/clearOwnProperties");n(i),i.prototype.destroy=function(){this.stop(),this._stage.removeEventListener("renderInvalid",this._renderInvalidHandler),o(this)},i.prototype.stage=function(){return this._stage},i.prototype.start=function(){this._running=!0,this.renderOnNextFrame()},i.prototype.stop=function(){this._requestHandle&&(window.cancelAnimationFrame(this._requestHandle),this._requestHandle=null),this._running=!1},i.prototype.renderOnNextFrame=function(){this._running&&!this._requestHandle&&(this._requestHandle=window.requestAnimationFrame(this._boundLoop))},i.prototype._loop=function(){if(!this._running)throw new Error("Render loop running while in stopped state");this._requestHandle=null,this._rendering=!0,this.emit("beforeRender"),this._rendering=!1,this._stage.render(),this.emit("afterRender")},e.exports=i},{"./util/clearOwnProperties":91,"minimal-event-emitter":14}],20:[function(t,e,r){"use strict";function i(t,e){this._viewer=t,this._view=e,this._layers=[],this._hotspotContainer=new s(t._controlContainer,t.stage(),this._view,t.renderLoop()),this._movement=null,this._movementStartTime=null,this._movementStep=null,this._movementParams=null,this._movementCallback=null,this._updateMovementHandler=this._updateMovement.bind(this),this._updateHotspotContainerHandler=this._updateHotspotContainer.bind(this),this._viewer.addEventListener("sceneChange",this._updateHotspotContainerHandler),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._view.addEventListener("change",this._viewChangeHandler),this._updateHotspotContainer()}var n=t("./Layer"),o=t("./TextureStore"),s=t("./HotspotContainer"),a=t("minimal-event-emitter"),u=t("./util/now"),h=t("./util/noop"),l=t("./util/type"),c=t("./util/defaults"),p=t("./util/clearOwnProperties");a(i),i.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._viewer.removeEventListener("sceneChange",this._updateHotspotContainerHandler),this._movement&&this.stopMovement(),this._hotspotContainer.destroy(),this.destroyAllLayers(),p(this)},i.prototype.hotspotContainer=function(){return this._hotspotContainer},i.prototype.layer=function(){return this._layers[0]},i.prototype.listLayers=function(){return[].concat(this._layers)},i.prototype.view=function(){return this._view},i.prototype.viewer=function(){return this._viewer},i.prototype.visible=function(){return this._viewer.scene()===this},i.prototype.createLayer=function(t){t=t||{};var e=t.textureStoreOpts||{},r=t.layerOpts||{},i=t.source,s=t.geometry,a=this._view,u=this._viewer.stage(),h=new o(i,u,e),l=new n(i,s,a,h,r);return this._layers.push(l),t.pinFirstLevel&&l.pinFirstLevel(),this.emit("layerChange"),l},i.prototype.destroyLayer=function(t){var e=this._layers.indexOf(t);if(e<0)throw new Error("No such layer in scene");this._layers.splice(e,1),this.emit("layerChange"),t.textureStore().destroy(),t.destroy()},i.prototype.destroyAllLayers=function(){for(;this._layers.length>0;)this.destroyLayer(this._layers[0])},i.prototype.switchTo=function(t,e){return this._viewer.switchScene(this,t,e)},i.prototype.lookTo=function(t,e,r){if(e=e||{},r=r||h,"object"!==l(t))throw new Error("Target view parameters must be an object");var i=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},n=null!=e.ease?e.ease:i,o=null!=e.controlsInterrupt&&e.controlsInterrupt,s=null!=e.transitionDuration?e.transitionDuration:1e3,a=null==e.shortest||e.shortest,u=this._view,p=u.parameters(),f={};c(f,t),c(f,p),a&&u.normalizeToClosest&&u.normalizeToClosest(f,f);var d=function(){var t=!1;return function(e,r){if(r>=s&&t)return null;var i=Math.min(r/s,1);for(var o in e){var a=p[o],u=f[o];e[o]=a+n(i)*(u-a)}return t=r>=s,e}},m=this._viewer.controls().enabled();o||this._viewer.controls().disable(),this.startMovement(d,function(){m&&this._viewer.controls().enable(),r()})},i.prototype.startMovement=function(t,e){var r=this._viewer.renderLoop();this._movement&&this.stopMovement();var i=t();if("function"!=typeof i)throw new Error("Bad movement");this._movement=t,this._movementStep=i,this._movementStartTime=u(),this._movementParams={},this._movementCallback=e,r.addEventListener("beforeRender",this._updateMovementHandler),r.renderOnNextFrame()},i.prototype.stopMovement=function(){var t=this._viewer.renderLoop();this._movement&&(this._movementCallback&&this._movementCallback(),t.removeEventListener("beforeRender",this._updateMovementHandler),this._movement=null,this._movementStep=null,this._movementStartTime=null,this._movementParams=null,this._movementCallback=null)},i.prototype.movement=function(){return this._movement},i.prototype._updateMovement=function(){if(!this._movement)throw new Error("Should not call update");var t=this._viewer.renderLoop(),e=this._view,r=u()-this._movementStartTime,i=this._movementStep,n=this._movementParams;n=e.parameters(n),n=i(n,r),null==n?this.stopMovement():(e.setParameters(n),t.renderOnNextFrame())},i.prototype._updateHotspotContainer=function(){this.visible()?this._hotspotContainer.show():this._hotspotContainer.hide()},e.exports=i},{"./HotspotContainer":16,"./Layer":17,"./TextureStore":21,"./util/clearOwnProperties":91,"./util/defaults":96,"./util/noop":107,"./util/now":108,"./util/type":116,"minimal-event-emitter":14}],21:[function(t,e,r){"use strict";function i(){}function n(t,e){var r=this,n=y++;r._id=n,r._store=t,r._tile=e,r._asset=null,r._texture=null,r._changeHandler=function(){t.emit("textureInvalid",e)};var o=t.source(),s=t.stage(),a=o.loadAsset.bind(o),u=s.createTexture.bind(s),h=p(c(a),u);t.emit("textureStartLoad",e),m&&console.log("loading",n,e),r._cancel=h(s,e,function(o,s,a,u){if(r._cancel=null,o)return a&&a.destroy(),u&&u.destroy(),void(o instanceof i?(t.emit("textureCancel",e),m&&console.log("cancel",n,e)):(t.emit("textureError",e,o),m&&console.log("error",n,e)));r._texture=u,a.isDynamic()?(r._asset=a,a.addEventListener("change",r._changeHandler)):a.destroy(),t.emit("textureLoad",e),m&&console.log("load",n,e)})}function o(t,e,r){r=l(r||{},_),this._source=t,this._stage=e,this._state=v.IDLE,this._delimCount=0,this._itemMap=new s,this._visible=new a,this._previouslyVisible=new u(r.previouslyVisibleCacheSize),this._pinMap=new s,this._newVisible=new a,this._noLongerVisible=[],this._visibleAgain=[],this._evicted=[]}var s=t("./collections/Map"),a=t("./collections/Set"),u=t("./collections/LruSet"),h=t("minimal-event-emitter"),l=t("./util/defaults"),c=t("./util/retry"),p=t("./util/chain"),f=t("./util/inherits"),d=t("./util/clearOwnProperties"),m="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.textureStore,v={IDLE:0,START:1,MARK:2,END:3},_={previouslyVisibleCacheSize:512},y=0;f(i,Error),n.prototype.asset=function(){return this._asset},n.prototype.texture=function(){return this._texture},n.prototype.destroy=function(){var t=this._id,e=this._store,r=this._tile,n=this._asset,o=this._texture,s=this._cancel;if(s)return void s(new i("Texture load cancelled"));n&&(n.removeEventListener("change",this._changeHandler),n.destroy()),o&&o.destroy(),e.emit("textureUnload",r),m&&console.log("unload",t,r),d(this)},h(n),h(o),o.prototype.destroy=function(){this.clear(),d(this)},o.prototype.stage=function(){return this._stage},o.prototype.source=function(){return this._source},o.prototype.clear=function(){var t=this;t._evicted.length=0,t._itemMap.forEach(function(e){t._evicted.push(e)}),t._evicted.forEach(function(e){t._unloadTile(e)}),t._itemMap.clear(),t._visible.clear(),t._previouslyVisible.clear(),t._pinMap.clear(),t._newVisible.clear(),t._noLongerVisible.length=0,t._visibleAgain.length=0,t._evicted.length=0},o.prototype.clearNotPinned=function(){var t=this;t._evicted.length=0,t._itemMap.forEach(function(e){t._pinMap.has(e)||t._evicted.push(e)}),t._evicted.forEach(function(e){t._unloadTile(e)}),t._visible.clear(),t._previouslyVisible.clear(),t._evicted.length=0},o.prototype.startFrame=function(){if(this._state!==v.IDLE&&this._state!==v.START)throw new Error("TextureStore: startFrame called out of sequence");this._state=v.START,this._delimCount++},o.prototype.markTile=function(t){if(this._state!==v.START&&this._state!==v.MARK)throw new Error("TextureStore: markTile called out of sequence");this._state=v.MARK;var e=this._itemMap.get(t),r=e&&e.texture(),i=e&&e.asset();r&&i&&r.refresh(t,i),this._newVisible.add(t)},o.prototype.endFrame=function(){if(this._state!==v.START&&this._state!==v.MARK&&this._state!==v.END)throw new Error("TextureStore: endFrame called out of sequence");this._state=v.END,--this._delimCount||(this._update(),this._state=v.IDLE)},o.prototype._update=function(){var t=this;t._noLongerVisible.length=0,t._visible.forEach(function(e){t._newVisible.has(e)||t._noLongerVisible.push(e)}),t._visibleAgain.length=0,t._newVisible.forEach(function(e){t._previouslyVisible.has(e)&&t._visibleAgain.push(e)}),t._visibleAgain.forEach(function(e){t._previouslyVisible.remove(e)}),t._evicted.length=0,t._noLongerVisible.forEach(function(e){var r=t._itemMap.get(e);if(r&&r.texture()){var i=t._previouslyVisible.add(e);null!=i&&t._evicted.push(i)}else r&&t._unloadTile(e)}),t._evicted.forEach(function(e){t._pinMap.has(e)||t._unloadTile(e)}),t._newVisible.forEach(function(e){t._itemMap.get(e)||t._loadTile(e)});var e=t._visible;t._visible=t._newVisible,t._newVisible=e,t._newVisible.clear(),t._noLongerVisible.length=0,t._visibleAgain.length=0,t._evicted.length=0},o.prototype._loadTile=function(t){if(this._itemMap.has(t))throw new Error("TextureStore: loading texture already in cache");var e=new n(this,t);this._itemMap.set(t,e)},o.prototype._unloadTile=function(t){var e=this._itemMap.del(t);if(!e)throw new Error("TextureStore: unloading texture not in cache");e.destroy()},o.prototype.asset=function(t){var e=this._itemMap.get(t);return e?e.asset():null},o.prototype.texture=function(t){var e=this._itemMap.get(t);return e?e.texture():null},o.prototype.pin=function(t){var e=(this._pinMap.get(t)||0)+1;return this._pinMap.set(t,e),this._itemMap.has(t)||this._loadTile(t),e},o.prototype.unpin=function(t){var e=this._pinMap.get(t);if(!e)throw new Error("TextureStore: unpin when not pinned");return e--,e>0?this._pinMap.set(t,e):(this._pinMap.del(t),this._visible.has(t)||this._previouslyVisible.has(t)||this._unloadTile(t)),e},o.prototype.query=function(t){var e=this._itemMap.get(t),r=this._pinMap.get(t)||0;return{visible:this._visible.has(t),previouslyVisible:this._previouslyVisible.has(t),hasAsset:null!=e&&null!=e.asset(),hasTexture:null!=e&&null!=e.texture(),pinned:0!==r,pinCount:r}},e.exports=o},{"./collections/LruSet":30,"./collections/Map":31,"./collections/Set":32,"./util/chain":89,"./util/clearOwnProperties":91,"./util/defaults":96,"./util/inherits":104,"./util/retry":114,"minimal-event-emitter":14}],22:[function(t,e,r){"use strict";function i(){this._stack=[],this._visited=new n,this._vertices=null}var n=t("./collections/Set");i.prototype.search=function(t,e,r){var i=this._stack,n=this._visited,o=this._vertices,s=0;for(this._clear(),i.push(e);i.length>0;){var a=i.pop();if(!n.has(a)&&t.intersects(a.vertices(o))){n.add(a);for(var u=a.neighbors(),h=0;h<u.length;h++)i.push(u[h]);r.push(a),s++}}return this._vertices=o,this._clear(),s},i.prototype._clear=function(){this._stack.length=0,this._visited.clear()},e.exports=i},{"./collections/Set":32}],23:[function(t,e,r){"use strict";function i(t){t=o(t||{},a),this._duration=t.duration,this._startTime=null,this._handle=null,this._check=this._check.bind(this)}var n=t("minimal-event-emitter"),o=t("./util/defaults"),s=t("./util/now"),a={duration:Infinity};n(i),i.prototype.start=function(){this._startTime=s(),null==this._handle&&this._duration<Infinity&&this._setup(this._duration)},i.prototype.started=function(){return null!=this._startTime},i.prototype.stop=function(){this._startTime=null,null!=this._handle&&(clearTimeout(this._handle),this._handle=null)},i.prototype._setup=function(t){this._handle=setTimeout(this._check,t)},i.prototype._teardown=function(){clearTimeout(this._handle),this._handle=null},i.prototype._check=function(){var t=s(),e=t-this._startTime,r=this._duration-e;this._teardown(),r<=0?(this.emit("timeout"),this._startTime=null):r<Infinity&&this._setup(r)},i.prototype.duration=function(){return this._duration},i.prototype.setDuration=function(t){this._duration=t,null!=this._startTime&&this._check()},e.exports=i},{"./util/defaults":96,"./util/now":108,"minimal-event-emitter":14}],24:[function(t,e,r){"use strict";function i(t,e){e=e||{},this._domElement=t,y(t);var r;if(e.stageType){if(!(r=T[e.stageType]))throw new Error("Unknown stage type: "+e.stageType)}else{for(var i=0;i<P.length;i++)if(P[i].supported()){r=P[i];break}if(!r)throw new Error("None of the stage types are supported")}this._stage=new r(e.stage),_(this._stage),this._domElement.appendChild(this._stage.domElement()),this._controlContainer=document.createElement("div"),g(this._controlContainer),w(this._controlContainer),o.ios&&this._controlContainer.addEventListener("touchmove",function(t){t.preventDefault()});var n=document.createElement("div");g(n),w(n),M(n),this._controlContainer.appendChild(n),t.appendChild(this._controlContainer),this._size={},this.updateSize(),this._updateSizeListener=this.updateSize.bind(this),window.addEventListener("resize",this._updateSizeListener),this._renderLoop=new a(this._stage),this._controls=new u,this._controlMethods=v(this._controls,this._controlContainer,e.controls),this._controls.attach(this._renderLoop),this._hammerManagerTouch=m.get(this._controlContainer,"touch"),this._hammerManagerMouse=m.get(this._controlContainer,"mouse"),this._dragCursor=new d(this._controls,"mouseViewDrag",t,e.cursors&&e.cursors.drag||{}),this._renderLoop.start(),this._scenes=[],this._currentScene=null,this._replacedScene=null,this._cancelCurrentTween=null,this._layerChangeHandler=this._updateSceneLayers.bind(this),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._idleTimer=new l,this._idleTimer.start(),this._resetIdleTimerHandler=this._resetIdleTimer.bind(this),this.addEventListener("viewChange",this._resetIdleTimerHandler),this._triggerIdleTimerHandler=this._triggerIdleTimer.bind(this),this._idleTimer.addEventListener("timeout",this._triggerIdleTimerHandler),this._stopMovementHandler=this.stopMovement.bind(this),this._controls.addEventListener("active",this._stopMovementHandler),this.addEventListener("sceneChange",this._stopMovementHandler),this._idleMovement=null}function n(t,e,r){e.listLayers().forEach(function(e){e.mergeEffects({opacity:t})}),e._hotspotContainer.domElement().style.opacity=t}var o=t("bowser"),s=t("minimal-event-emitter"),a=t("./RenderLoop"),u=t("./controls/Controls"),h=t("./Scene"),l=t("./Timer"),c=t("./stages/WebGl"),p=t("./stages/Css"),f=t("./stages/Flash"),d=t("./controls/ControlCursor"),m=t("./controls/HammerGestures"),v=t("./controls/registerDefaultControls"),_=t("./renderers/registerDefaultRenderers"),y=t("./util/dom").setOverflowHidden,g=t("./util/dom").setAbsolute,w=t("./util/dom").setFullSize,M=t("./util/dom").setBlocking,b=t("./util/tween"),x=t("./util/noop"),E=t("./util/clearOwnProperties"),T={webgl:c,css:p,flash:f},P=[c,p,f];s(i),i.prototype.destroy=function(){window.removeEventListener("resize",this._updateSizeListener),this._currentScene&&this._removeSceneEventListeners(this._currentScene),this._replacedScene&&this._removeSceneEventListeners(this._replacedScene),this._dragCursor.destroy();for(var t in this._controlMethods)this._controlMethods[t].destroy();for(;this._scenes.length;)this.destroyScene(this._scenes[0]);this._domElement.removeChild(this._stage.domElement()),this._stage.destroy(),this._renderLoop.destroy(),this._controls.destroy(),this._controls=null,this._cancelCurrentTween&&this._cancelCurrentTween(),E(this)},i.prototype.updateSize=function(){var t=this._size;t.width=this._domElement.clientWidth,t.height=this._domElement.clientHeight,this._stage.setSize(t)},i.prototype.stage=function(){return this._stage},i.prototype.renderLoop=function(){return this._renderLoop},i.prototype.controls=function(){return this._controls},i.prototype.domElement=function(){return this._domElement},i.prototype.createScene=function(t){t=t||{};var e=this.createEmptyScene({view:t.view});return e.createLayer({source:t.source,geometry:t.geometry,pinFirstLevel:t.pinFirstLevel,textureStoreOpts:t.textureStoreOpts,layerOpts:t.layerOpts}),e},i.prototype.createEmptyScene=function(t){t=t||{};var e=new h(this,t.view);return this._scenes.push(e),e},i.prototype._updateSceneLayers=function(){var t,e,r=this._stage,i=this._currentScene,n=this._replacedScene,o=r.listLayers(),s=[];if(n&&(s=s.concat(n.listLayers())),i&&(s=s.concat(i.listLayers())),1!==Math.abs(o.length-s.length))throw new Error("Stage and scene out of sync");if(s.length<o.length)for(t=0;t<o.length;t++)if(e=o[t],s.indexOf(e)<0){this._removeLayerFromStage(e);break}if(s.length>o.length)for(t=0;t<s.length;t++)e=s[t],o.indexOf(e)<0&&this._addLayerToStage(e,t)},i.prototype._addLayerToStage=function(t,e){t.pinFirstLevel(),this._stage.addLayer(t,e)},i.prototype._removeLayerFromStage=function(t){this._stage.removeLayer(t),t.unpinFirstLevel(),t.textureStore().clearNotPinned()},i.prototype._addSceneEventListeners=function(t){t.addEventListener("layerChange",this._layerChangeHandler),t.addEventListener("viewChange",this._viewChangeHandler)},i.prototype._removeSceneEventListeners=function(t){t.removeEventListener("layerChange",this._layerChangeHandler),t.removeEventListener("viewChange",this._viewChangeHandler)},i.prototype.destroyScene=function(t){var e=this._scenes.indexOf(t);if(e<0)throw new Error("No such scene in viewer");var r,i;if(this._currentScene===t){for(this._removeSceneEventListeners(t),i=t.listLayers(),r=0;r<i.length;r++)this._removeLayerFromStage(i[r]);this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null),this._currentScene=null,this.emit("sceneChange")}if(this._replacedScene===t){for(this._removeSceneEventListeners(t),i=t.listLayers(),r=0;r<i.length;r++)this._removeLayerFromStage(i[r]);this._replacedScene=null}this._scenes.splice(e,1),t.destroy()
},i.prototype.destroyAllScenes=function(){for(;this._scenes.length>0;)this.destroyScene(this._scenes[0])},i.prototype.hasScene=function(t){return this._scenes.indexOf(t)>=0},i.prototype.listScenes=function(){return[].concat(this._scenes)},i.prototype.scene=function(){return this._currentScene},i.prototype.view=function(){var t=this._currentScene;return t?t.view():null},i.prototype.lookTo=function(t,e,r){var i=this._currentScene;i&&i.lookTo(t,e,r)},i.prototype.startMovement=function(t,e){var r=this._currentScene;r&&r.startMovement(t,e)},i.prototype.stopMovement=function(){var t=this._currentScene;t&&t.stopMovement()},i.prototype.movement=function(){var t=this._currentScene;if(t)return t.movement()},i.prototype.setIdleMovement=function(t,e){this._idleTimer.setDuration(t),this._idleMovement=e},i.prototype.breakIdleMovement=function(){this.stopMovement(),this._resetIdleTimer()},i.prototype._resetIdleTimer=function(){this._idleTimer.start()},i.prototype._triggerIdleTimer=function(){var t=this._idleMovement;t&&this.startMovement(t)};i.prototype.switchScene=function(t,e,r){function i(e){f(e,t,u)}function o(){if(s._replacedScene){s._removeSceneEventListeners(s._replacedScene),h=s._replacedScene.listLayers();for(var t=0;t<h.length;t++)s._removeLayerFromStage(h[t]);s._replacedScene=null}s._cancelCurrentTween=null,r()}var s=this;e=e||{},r=r||x;var a=this._stage,u=this._currentScene;if(u===t)return void r();if(this._scenes.indexOf(t)<0)throw new Error("No such scene in viewer");this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null);var h=u?u.listLayers():[],l=t.listLayers(),c=a.listLayers();if(u&&(c.length!==h.length||c.length>1&&c[0]!=h[0]))throw new Error("Stage not in sync with viewer");for(var p=null!=e.transitionDuration?e.transitionDuration:1e3,f=null!=e.transitionUpdate?e.transitionUpdate:n,d=0;d<l.length;d++)this._addLayerToStage(l[d]);this._cancelCurrentTween=b(p,i,o),this._currentScene=t,this._replacedScene=u,this.emit("sceneChange"),this.emit("viewChange"),this._addSceneEventListeners(t)},e.exports=i},{"./RenderLoop":19,"./Scene":20,"./Timer":23,"./controls/ControlCursor":37,"./controls/Controls":38,"./controls/HammerGestures":42,"./controls/registerDefaultControls":49,"./renderers/registerDefaultRenderers":70,"./stages/Css":77,"./stages/Flash":78,"./stages/WebGl":81,"./util/clearOwnProperties":91,"./util/dom":100,"./util/noop":107,"./util/tween":115,bowser:1,"minimal-event-emitter":14}],25:[function(t,e,r){"use strict";function i(t){this.constructor.super_.call(this,t),this._timestamp=0}var n=t("./Static"),o=t("../util/inherits"),s=t("minimal-event-emitter"),a=t("../util/clearOwnProperties");o(i,n),s(i),i.prototype.destroy=function(){a(this)},i.prototype.timestamp=function(){return this._timestamp},i.prototype.isDynamic=function(){return!0},i.prototype.markDirty=function(){this._timestamp++,this.emit("change")},e.exports=i},{"../util/clearOwnProperties":91,"../util/inherits":104,"./Static":27,"minimal-event-emitter":14}],26:[function(t,e,r){"use strict";function i(t,e){this._flashElement=t,this._imageId=e}var n=t("minimal-event-emitter"),o=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._flashElement.unloadImage(this._imageId),o(this)},i.prototype.element=function(){return this._imageId},i.prototype.width=function(){return 0},i.prototype.height=function(){return 0},i.prototype.timestamp=function(){return 0},i.prototype.isDynamic=function(){return!1},e.exports=i},{"../util/clearOwnProperties":91,"minimal-event-emitter":14}],27:[function(t,e,r){"use strict";function i(t){var e=!1;for(var r in a)if(n[r]&&t instanceof n[r]){e=!0,this._widthProp=a[r][0],this._heightProp=a[r][1];break}if(!e)throw new Error("Unsupported pixel source");this._element=t}var n=t("../util/global"),o=t("minimal-event-emitter"),s=t("../util/clearOwnProperties"),a={HTMLImageElement:["naturalWidth","naturalHeight"],HTMLCanvasElement:["width","height"],ImageBitmap:["width","height"]};o(i),i.prototype.destroy=function(){s(this)},i.prototype.element=function(){return this._element},i.prototype.width=function(){return this._element[this._widthProp]},i.prototype.height=function(){return this._element[this._heightProp]},i.prototype.timestamp=function(){return 0},i.prototype.isDynamic=function(){return!1},e.exports=i},{"../util/clearOwnProperties":91,"../util/global":102,"minimal-event-emitter":14}],28:[function(t,e,r){"use strict";function i(t){t=n(t||{},o);var e=t.yawSpeed,r=t.pitchSpeed,i=t.fovSpeed,s=t.yawAccel,a=t.pitchAccel,u=t.fovAccel,h=t.targetPitch,l=t.targetFov;return function(){var t,n,o,c,p=0,f=0,d=0,m=0,v=0,_=0,y=0;return function(g,w){if(t=(w-p)/1e3,v=Math.min(f+t*s,e),n=v*t,g.yaw=g.yaw+n,null!=h&&g.pitch!==h){var M=.5*d*d/a;_=Math.abs(h-g.pitch)>M?Math.min(d+t*a,r):Math.max(d-t*a,0),o=_*t,h<g.pitch&&(g.pitch=Math.max(h,g.pitch-o)),h>g.pitch&&(g.pitch=Math.min(h,g.pitch+o))}if(null!=l&&g.fov!==h){var b=.5*m*m/u;y=Math.abs(l-g.fov)>b?Math.min(m+t*u,i):Math.max(m-t*u,0),c=y*t,l<g.fov&&(g.fov=Math.max(l,g.fov-c)),l>g.fov&&(g.fov=Math.min(l,g.fov+c))}return p=w,f=v,d=_,m=y,g}}}var n=t("./util/defaults"),o={yawSpeed:.1,pitchSpeed:.1,fovSpeed:.1,yawAccel:.01,pitchAccel:.01,fovAccel:.01,targetPitch:0,targetFov:null};e.exports=i},{"./util/defaults":96}],29:[function(t,e,r){"use strict";function i(t){if(!isFinite(t)||Math.floor(t)!==t||t<0)throw new Error("LruMap: invalid capacity");this._capacity=t,this._keys=new Array(this._capacity),this._values=new Array(this._capacity),this._start=0,this._size=0}var n=t("../util/mod");i.prototype._index=function(t){return n(this._start+t,this._capacity)},i.prototype.get=function(t){for(var e=0;e<this._size;e++){var r=this._keys[this._index(e)];if(t.equals(r))return this._values[this._index(e)]}return null},i.prototype.set=function(t,e){if(0===this._capacity)return t;this.del(t);var r=this._size===this._capacity?this._keys[this._index(0)]:null;return this._keys[this._index(this._size)]=t,this._values[this._index(this._size)]=e,this._size<this._capacity?this._size++:this._start=this._index(1),r},i.prototype.del=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._keys[this._index(e)])){for(var r=this._values[this._index(e)],i=e;i<this._size-1;i++)this._keys[this._index(i)]=this._keys[this._index(i+1)],this._values[this._index(i)]=this._values[this._index(i+1)];return this._size--,r}return null},i.prototype.has=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._keys[this._index(e)]))return!0;return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._start=0,this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._size;r++)t(this._keys[this._index(r)],this._values[this._index(r)]),e+=1;return e},e.exports=i},{"../util/mod":106}],30:[function(t,e,r){"use strict";function i(t){if(!isFinite(t)||Math.floor(t)!==t||t<0)throw new Error("LruSet: invalid capacity");this._capacity=t,this._elements=new Array(this._capacity),this._start=0,this._size=0}var n=t("../util/mod");i.prototype._index=function(t){return n(this._start+t,this._capacity)},i.prototype.add=function(t){if(0===this._capacity)return t;this.remove(t);var e=this._size===this._capacity?this._elements[this._index(0)]:null;return this._elements[this._index(this._size)]=t,this._size<this._capacity?this._size++:this._start=this._index(1),e},i.prototype.remove=function(t){for(var e=0;e<this._size;e++){var r=this._elements[this._index(e)];if(t.equals(r)){for(var i=e;i<this._size-1;i++)this._elements[this._index(i)]=this._elements[this._index(i+1)];return this._size--,r}}return null},i.prototype.has=function(t){for(var e=0;e<this._size;e++)if(t.equals(this._elements[this._index(e)]))return!0;return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){this._elements.length=0,this._start=0,this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._size;r++)t(this._elements[this._index(r)]),e+=1;return e},e.exports=i},{"../util/mod":106}],31:[function(t,e,r){"use strict";function i(t){if(null!=t&&(!isFinite(t)||Math.floor(t)!==t||t<1))throw new Error("Map: invalid capacity");this._capacity=t||o,this._keyBuckets=[],this._valBuckets=[];for(var e=0;e<this._capacity;e++)this._keyBuckets.push([]),this._valBuckets.push([]);this._size=0}var n=t("../util/mod"),o=64;i.prototype.get=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o)){return this._valBuckets[e][i]}}return null},i.prototype.set=function(t,e){for(var r=n(t.hash(),this._capacity),i=this._keyBuckets[r],o=this._valBuckets[r],s=0;s<i.length;s++){var a=i[s];if(t.equals(a)){var u=o[s];return i[s]=t,o[s]=e,u}}return i.push(t),o.push(e),this._size++,null},i.prototype.del=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=this._valBuckets[e],o=0;o<r.length;o++){var s=r[o];if(t.equals(s)){for(var a=i[o],u=o;u<r.length-1;u++)r[u]=r[u+1],i[u]=i[u+1];return r.length=r.length-1,i.length=i.length-1,this._size--,a}}return null},i.prototype.has=function(t){for(var e=n(t.hash(),this._capacity),r=this._keyBuckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return!0}return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){for(var t=0;t<this._capacity;t++)this._keyBuckets[t].length=0,this._valBuckets[t].length=0;this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._capacity;r++)for(var i=this._keyBuckets[r],n=this._valBuckets[r],o=0;o<i.length;o++)t(i[o],n[o]),e+=1;return e},e.exports=i},{"../util/mod":106}],32:[function(t,e,r){"use strict";function i(t){if(null!=t&&(!isFinite(t)||Math.floor(t)!==t||t<1))throw new Error("Set: invalid capacity");this._capacity=this._capacity||o,this._buckets=[];for(var e=0;e<this._capacity;e++)this._buckets.push([]);this._size=0}var n=t("../util/mod"),o=64;i.prototype.add=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return r[i]=t,o}return r.push(t),this._size++,null},i.prototype.remove=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o)){for(var s=i;s<r.length-1;s++)r[s]=r[s+1];return r.length=r.length-1,this._size--,o}}return null},i.prototype.has=function(t){for(var e=n(t.hash(),this._capacity),r=this._buckets[e],i=0;i<r.length;i++){var o=r[i];if(t.equals(o))return!0}return!1},i.prototype.size=function(){return this._size},i.prototype.clear=function(){for(var t=0;t<this._capacity;t++)this._buckets[t].length=0;this._size=0},i.prototype.forEach=function(t){for(var e=0,r=0;r<this._capacity;r++)for(var i=this._buckets[r],n=0;n<i.length;n++)t(i[n]),e+=1;return e},e.exports=i},{"../util/mod":106}],33:[function(t,e,r){"use strict";function i(t){this._concurrency=t&&t.concurrency||1,this._paused=t&&!!t.paused||!1,this._pool=[];for(var e=0;e<this._concurrency;e++)this._pool.push(new n(t));this._next=0}var n=t("./WorkQueue"),o=t("../util/mod");i.prototype.length=function(){for(var t=0,e=0;e<this._pool.length;e++)t+=this._pool[e].length();return t},i.prototype.push=function(t,e){var r=this._next,i=this._pool[r].push(t,e);return this._next=o(this._next+1,this._concurrency),i},i.prototype.pause=function(){if(!this._paused){this._paused=!0;for(var t=0;t<this._concurrency;t++)this._pool[t].pause()}},i.prototype.resume=function(){if(this._paused){this._paused=!1;for(var t=0;t<this._concurrency;t++)this._pool[t].resume()}},e.exports=i},{"../util/mod":106,"./WorkQueue":34}],34:[function(t,e,r){"use strict";function i(t,e){this.fn=t,this.cb=e,this.cfn=null}function n(t){this._queue=[],this._delay=t&&t.delay||0,this._paused=t&&!!t.paused||!1,this._currentTask=null,this._lastFinished=null}var o=t("../util/now");n.prototype.length=function(){return this._queue.length},n.prototype.push=function(t,e){var r=new i(t,e),n=this._cancel.bind(this,r);return this._queue.push(r),this._next(),n},n.prototype.pause=function(){this._paused||(this._paused=!0)},n.prototype.resume=function(){this._paused&&(this._paused=!1,this._next())},n.prototype._start=function(t){if(this._currentTask)throw new Error("WorkQueue: called start while running task");this._currentTask=t;var e=this._finish.bind(this,t);if(t.cfn=t.fn(e),"function"!=typeof t.cfn)throw new Error("WorkQueue: function is not cancellable")},n.prototype._finish=function(t){var e=Array.prototype.slice.call(arguments,1);if(this._currentTask!==t)throw new Error("WorkQueue: called finish on wrong task");t.cb.apply(null,e),this._currentTask=null,this._lastFinished=o(),this._next()},n.prototype._cancel=function(t){var e=Array.prototype.slice.call(arguments,1);if(this._currentTask===t)t.cfn.apply(null,e);else{var r=this._queue.indexOf(t);r>=0&&(this._queue.splice(r,1),t.cb.apply(null,e))}},n.prototype._next=function(){if(!this._paused&&this._queue.length&&!this._currentTask){if(null!=this._lastFinished){var t=o()-this._lastFinished,e=this._delay-t;if(e>0)return void setTimeout(this._next.bind(this),e)}var r=this._queue.shift();this._start(r)}},e.exports=n},{"../util/now":108}],35:[function(t,e,r){"use strict";function i(t){var e=t||{};return e.colorOffset=e.colorOffset||a.create(),e.colorMatrix=e.colorMatrix||u.create(),e}function n(t,e,r){o(r,t,e.colorMatrix),a.add(r,r,e.colorOffset)}function o(t,e,r){var i=e[0],n=e[1],o=e[2],s=e[3];return t[0]=r[0]*i+r[1]*n+r[2]*o+r[3]*s,t[1]=r[4]*i+r[5]*n+r[6]*o+r[7]*s,t[2]=r[8]*i+r[9]*n+r[10]*o+r[11]*s,t[3]=r[12]*i+r[13]*n+r[14]*o+r[15]*s,t}function s(t,e){for(var r=t.width,i=t.height,o=t.data,s=0;s<r*i;s++)a.set(h,o[4*s+0]/255,o[4*s+1]/255,o[4*s+2]/255,o[4*s+3]/255),n(h,e,h),o[4*s+0]=255*h[0],o[4*s+1]=255*h[1],o[4*s+2]=255*h[2],o[4*s+3]=255*h[3]}var a=t("gl-matrix").vec4,u=t("gl-matrix").mat4,h=a.create();e.exports={identity:i,applyToPixel:n,applyToImageData:s}},{"gl-matrix":3}],36:[function(t,e,r){"use strict";function i(t){t=t||{},this._methods=[],this._parameters=["x","y","axisScaledX","axisScaledY","zoom","yaw","pitch","roll"],this._now=t.nowForTesting||s,this._composedOffsets={},this._composeReturn={offsets:this._composedOffsets,changing:null}}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/now"),a=t("../util/clearOwnProperties");n(i),i.prototype.add=function(t){if(!this.has(t)){var e={};this._parameters.forEach(function(t){e[t]={dynamics:new o,time:null}});var r=this._updateDynamics.bind(this,e),i={instance:t,dynamics:e,parameterDynamicsHandler:r};t.addEventListener("parameterDynamics",r),this._methods.push(i)}},i.prototype.remove=function(t){var e=this._indexOfInstance(t);if(e>=0){var r=this._methods.splice(e,1)[0];r.instance.removeEventListener("parameterDynamics",r.parameterDynamicsHandler)}},i.prototype.has=function(t){return this._indexOfInstance(t)>=0},i.prototype._indexOfInstance=function(t){for(var e=0;e<this._methods.length;e++)if(this._methods[e].instance===t)return e;return-1},i.prototype.list=function(){for(var t=[],e=0;e<this._methods.length;e++)t.push(this._methods[e].instance);return t},i.prototype._updateDynamics=function(t,e,r){var i=t[e];if(!i)throw new Error("Unknown control parameter "+e);var n=this._now();i.dynamics.update(r,(n-i.time)/1e3),i.time=n,this.emit("change")},i.prototype._resetComposedOffsets=function(){for(var t=0;t<this._parameters.length;t++)this._composedOffsets[this._parameters[t]]=0},i.prototype.offsets=function(){var t,e=!1,r=this._now();this._resetComposedOffsets();for(var i=0;i<this._methods.length;i++)for(var n=this._methods[i].dynamics,o=0;o<this._parameters.length;o++){t=this._parameters[o];var s=n[t],a=s.dynamics;null!=a.offset&&(this._composedOffsets[t]+=a.offset,a.offset=null);var u=(r-s.time)/1e3,h=a.offsetFromVelocity(u);h&&(this._composedOffsets[t]+=h);var l=a.velocityAfter(u);a.velocity=l,l&&(e=!0),s.time=r}return this._composeReturn.changing=e,this._composeReturn},i.prototype.destroy=function(){for(var t=this.list(),e=0;e<t.length;e++)this.remove(t[e]);a(this)},e.exports=i},{"../util/clearOwnProperties":91,"../util/now":108,"./Dynamics":40,"minimal-event-emitter":14}],37:[function(t,e,r){"use strict";function i(t,e,r,i){i=n(i||{},s),this._element=r,this._controls=t,this._id=e,this._attached=!1,this._setActiveCursor=this._setCursor.bind(this,i.active),this._setInactiveCursor=this._setCursor.bind(this,i.inactive),this._setDisabledCursor=this._setCursor.bind(this,i.disabled),this._setOriginalCursor=this._setCursor.bind(this,this._element.style.cursor),this._updateAttachmentHandler=this._updateAttachment.bind(this),t.addEventListener("methodEnabled",this._updateAttachmentHandler),t.addEventListener("methodDisabled",this._updateAttachmentHandler),t.addEventListener("enabled",this._updateAttachmentHandler),t.addEventListener("disabled",this._updateAttachmentHandler),this._updateAttachment()}var n=t("../util/defaults"),o=t("../util/clearOwnProperties"),s={active:"move",inactive:"default",disabled:"default"};i.prototype.destroy=function(){this._detachFromControlMethod(this._controls.method(this._id)),this._setOriginalCursor(),this._controls.removeEventListener("methodEnabled",this._updateAttachmentHandler),this._controls.removeEventListener("methodDisabled",this._updateAttachmentHandler),this._controls.removeEventListener("enabled",this._updateAttachmentHandler),this._controls.removeEventListener("disabled",this._updateAttachmentHandler),o(this)},i.prototype._updateAttachment=function(){var t=this._controls,e=this._id;t.enabled()&&t.method(e).enabled?this._attachToControlMethod(t.method(e)):this._detachFromControlMethod(t.method(e))},i.prototype._attachToControlMethod=function(t){this._attached||(t.instance.addEventListener("active",this._setActiveCursor),t.instance.addEventListener("inactive",this._setInactiveCursor),t.active?this._setActiveCursor():this._setInactiveCursor(),this._attached=!0)},i.prototype._detachFromControlMethod=function(t){this._attached&&(t.instance.removeEventListener("active",this._setActiveCursor),t.instance.removeEventListener("inactive",this._setInactiveCursor),this._setDisabledCursor(),this._attached=!1)},i.prototype._setCursor=function(t){this._element.style.cursor=t},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96}],38:[function(t,e,r){"use strict";function i(t){t=t||{},this._methods={},this._methodGroups={},this._composer=new o,this._enabled=!t||!t.enabled||!!t.enabled,this._activeCount=0,this.updatedViews_=[],this._attachedRenderLoop=null}var n=t("minimal-event-emitter"),o=t("./Composer"),s=t("../util/clearOwnProperties"),a="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.controls;n(i),i.prototype.destroy=function(){this.detach(),this._composer.destroy(),s(this)},i.prototype.methods=function(){var t={};for(var e in this._methods)t[e]=this._methods[e];return t},i.prototype.method=function(t){return this._methods[t]},i.prototype.registerMethod=function(t,e,r){if(this._methods[t])throw new Error("Control method already registered with id "+t);this._methods[t]={instance:e,enabled:!1,active:!1,activeHandler:this._handleActive.bind(this,t),inactiveHandler:this._handleInactive.bind(this,t)},r&&this.enableMethod(t,e)},i.prototype.unregisterMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled&&this.disableMethod(t),delete this._methods[t]},i.prototype.enableMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled||(e.enabled=!0,e.active&&this._incrementActiveCount(),this._listen(t),this._updateComposer(),this.emit("methodEnabled",t))},i.prototype.disableMethod=function(t){var e=this._methods[t];if(!e)throw new Error("No control method registered with id "+t);e.enabled&&(e.enabled=!1,e.active&&this._decrementActiveCount(),this._unlisten(t),this._updateComposer(),this.emit("methodDisabled",t))},i.prototype.addMethodGroup=function(t,e){this._methodGroups[t]=e},i.prototype.removeMethodGroup=function(t){delete this._methodGroups[t]},i.prototype.methodGroups=function(){var t={};for(var e in this._methodGroups)t[e]=this._methodGroups[e];return t},i.prototype.enableMethodGroup=function(t){var e=this;e._methodGroups[t].forEach(function(t){e.enableMethod(t)})},i.prototype.disableMethodGroup=function(t){var e=this;e._methodGroups[t].forEach(function(t){e.disableMethod(t)})},i.prototype.enabled=function(){return this._enabled},i.prototype.enable=function(){this._enabled||(this._enabled=!0,this._activeCount>0&&this.emit("active"),this.emit("enabled"),this._updateComposer())},i.prototype.disable=function(){this._enabled&&(this._enabled=!1,this._activeCount>0&&this.emit("inactive"),this.emit("disabled"),this._updateComposer())},i.prototype.attach=function(t){this._attachedRenderLoop&&this.detach(),this._attachedRenderLoop=t,this._beforeRenderHandler=this._updateViewsWithControls.bind(this),this._changeHandler=t.renderOnNextFrame.bind(t),this._attachedRenderLoop.addEventListener("beforeRender",this._beforeRenderHandler),this._composer.addEventListener("change",this._changeHandler)},i.prototype.detach=function(){this._attachedRenderLoop&&(this._attachedRenderLoop.removeEventListener("beforeRender",this._beforeRenderHandler),this._composer.removeEventListener("change",this._changeHandler),this._beforeRenderHandler=null,this._changeHandler=null,this._attachedRenderLoop=null)},i.prototype.attached=function(){return null!=this._attachedRenderLoop},i.prototype._listen=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");e.instance.addEventListener("active",e.activeHandler),e.instance.addEventListener("inactive",e.inactiveHandler)},i.prototype._unlisten=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");e.instance.removeEventListener("active",e.activeHandler),e.instance.removeEventListener("inactive",e.inactiveHandler)},i.prototype._handleActive=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");if(!e.enabled)throw new Error("Should not receive event from disabled control method");e.active||(e.active=!0,this._incrementActiveCount())},i.prototype._handleInactive=function(t){var e=this._methods[t];if(!e)throw new Error("Bad method id");if(!e.enabled)throw new Error("Should not receive event from disabled control method");e.active&&(e.active=!1,this._decrementActiveCount())},i.prototype._incrementActiveCount=function(){this._activeCount++,a&&this._checkActiveCount(),this._enabled&&1===this._activeCount&&this.emit("active")},i.prototype._decrementActiveCount=function(){this._activeCount--,a&&this._checkActiveCount(),this._enabled&&0===this._activeCount&&this.emit("inactive")},i.prototype._checkActiveCount=function(){var t=0;for(var e in this._methods){var r=this._methods[e];r.enabled&&r.active&&t++}if(t!=this._activeCount)throw new Error("Bad control state")},i.prototype._updateComposer=function(){var t=this._composer;for(var e in this._methods){var r=this._methods[e],i=this._enabled&&r.enabled;i&&!t.has(r.instance)&&t.add(r.instance),!i&&t.has(r.instance)&&t.remove(r.instance)}},i.prototype._updateViewsWithControls=function(){var t=this._composer.offsets();t.changing&&this._attachedRenderLoop.renderOnNextFrame(),this.updatedViews_.length=0;for(var e=this._attachedRenderLoop.stage().listLayers(),r=0;r<e.length;r++){var i=e[r].view();this.updatedViews_.indexOf(i)<0&&(e[r].view().updateWithControlParameters(t.offsets),this.updatedViews_.push(i))}},e.exports=i},{"../util/clearOwnProperties":91,"./Composer":36,"minimal-event-emitter":14}],39:[function(t,e,r){"use strict";function i(t,e,r){this._element=t,this._opts=a(r||{},l),this._startEvent=null,this._lastEvent=null,this._active=!1,this._dynamics={x:new o,y:new o},this._hammer=s.get(t,e),this._hammer.on("hammer.input",this._handleHammerEvent.bind(this)),this._hammer.on("panstart",this._handleStart.bind(this)),this._hammer.on("panmove",this._handleMove.bind(this)),this._hammer.on("panend",this._handleEnd.bind(this)),this._hammer.on("pancancel",this._handleEnd.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/defaults"),u=t("./util").maxFriction,h=t("../util/clearOwnProperties"),l={friction:6,maxFrictionTime:.3},c="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.controls;n(i),i.prototype.destroy=function(){this._hammer.release(),h(this)},i.prototype._handleHammerEvent=function(t){if(t.isFirst){if(c&&this._active)throw new Error("DragControlMethod active detected when already active");this._active=!0,this.emit("active")}if(t.isFinal){if(c&&!this._active)throw new Error("DragControlMethod inactive detected when already inactive");this._active=!1,this.emit("inactive")}},i.prototype._handleStart=function(t){t.preventDefault(),this._startEvent=t},i.prototype._handleMove=function(t){t.preventDefault(),this._startEvent&&(this._updateDynamicsMove(t),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y))},i.prototype._handleEnd=function(t){t.preventDefault(),this._startEvent&&(this._updateDynamicsRelease(t),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y)),this._startEvent=!1,this._lastEvent=!1},i.prototype._updateDynamicsMove=function(t){var e=t.deltaX,r=t.deltaY,i=this._lastEvent||this._startEvent;i&&(e-=i.deltaX,r-=i.deltaY);var n=this._element.getBoundingClientRect(),o=n.right-n.left,s=n.bottom-n.top;e/=o,r/=s,this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.offset=-e,this._dynamics.y.offset=-r,this._lastEvent=t};var p=[null,null];i.prototype._updateDynamicsRelease=function(t){var e=this._element.getBoundingClientRect(),r=e.right-e.left,i=e.bottom-e.top,n=1e3*t.velocityX/r,o=1e3*t.velocityY/i;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=n,this._dynamics.y.velocity=o,u(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,p),this._dynamics.x.friction=p[0],this._dynamics.y.friction=p[1]},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./HammerGestures":42,"./util":50,"minimal-event-emitter":14}],40:[function(t,e,r){"use strict";function i(){this.velocity=null,this.friction=null,this.offset=null}function n(t,e){return t<0?Math.min(0,t+e):t>0?Math.max(0,t-e):0}i.equals=function(t,e){return t.velocity===e.velocity&&t.friction===e.friction&&t.offset===e.offset},i.prototype.equals=function(t){return i.equals(this,t)},i.prototype.update=function(t,e){t.offset&&(this.offset=this.offset||0,this.offset+=t.offset);var r=this.offsetFromVelocity(e);r&&(this.offset=this.offset||0,this.offset+=r),this.velocity=t.velocity,this.friction=t.friction},i.prototype.reset=function(){this.velocity=null,this.friction=null,this.offset=null},i.prototype.velocityAfter=function(t){return this.velocity?this.friction?n(this.velocity,this.friction*t):this.velocity:null},i.prototype.offsetFromVelocity=function(t){t=Math.min(t,this.nullVelocityTime());var e=this.velocityAfter(t);return(this.velocity+e)/2*t},i.prototype.nullVelocityTime=function(){return null==this.velocity?0:this.velocity&&!this.friction?Infinity:Math.abs(this.velocity/this.friction)},e.exports=i},{}],41:[function(t,e,r){"use strict";function i(t,e,r,i){if(!t)throw new Error("ElementPressControlMethod: element must be defined");if(!e)throw new Error("ElementPressControlMethod: parameter must be defined");if(!r)throw new Error("ElementPressControlMethod: velocity must be defined");if(!i)throw new Error("ElementPressControlMethod: friction must be defined");this._element=t,this._pressHandler=this._handlePress.bind(this),this._releaseHandler=this._handleRelease.bind(this),t.addEventListener("mousedown",this._pressHandler),t.addEventListener("mouseup",this._releaseHandler),t.addEventListener("mouseleave",this._releaseHandler),t.addEventListener("touchstart",this._pressHandler),t.addEventListener("touchmove",this._releaseHandler),t.addEventListener("touchend",this._releaseHandler),this._parameter=e,this._velocity=r,this._friction=i,this._dynamics=new o,this._pressing=!1}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._element.removeEventListener("mousedown",this._pressHandler),this._element.removeEventListener("mouseup",this._releaseHandler),this._element.removeEventListener("mouseleave",this._releaseHandler),this._element.removeEventListener("touchstart",this._pressHandler),this._element.removeEventListener("touchmove",this._releaseHandler),this._element.removeEventListener("touchend",this._releaseHandler),s(this)},i.prototype._handlePress=function(){this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active")},i.prototype._handleRelease=function(){this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],42:[function(t,e,r){"use strict";function i(t,e){return t[h]||(t[h]=u++),e+t[h]}function n(){this._managers={},this._refCount={}}function o(t,e,r,i){this._manager=e,this._element=r,this._type=i,this._hammerGestures=t,this._eventHandlers=[]}var s=t("hammerjs"),a=t("bowser"),u=1,h="MarzipanoHammerElementId";n.prototype.get=function(t,e){var r=i(t,e);return this._managers[r]||(this._managers[r]=this._createManager(t,e),this._refCount[r]=0),this._refCount[r]++,new o(this,this._managers[r],t,e)},n.prototype._createManager=function(t,e){var r=new s.Manager(t);return"mouse"===e?r.add(new s.Pan({direction:s.DIRECTION_ALL,threshold:0})):"touch"!==e&&"pen"!==e&&"kinect"!==e||(r.add(new s.Pan({direction:s.DIRECTION_ALL,threshold:20,pointers:1})),a.msie&&parseFloat(a.version)<10||r.add(new s.Pinch)),r},n.prototype._releaseHandle=function(t,e){var r=i(t,e);this._refCount[r]&&(--this._refCount[r]||(this._managers[r].destroy(),delete this._managers[r],delete this._refCount[r]))},o.prototype.on=function(t,e){var r=this._type,i=function(t){r===t.pointerType&&e(t)};this._eventHandlers.push({events:t,handler:i}),this._manager.on(t,i)},o.prototype.release=function(){for(var t=0;t<this._eventHandlers.length;t++){var e=this._eventHandlers[t];this._manager.off(e.events,e.handler)}this._hammerGestures._releaseHandle(this._element,this._type),this._manager=null,this._element=null,this._type=null,this._hammerGestures=null},o.prototype.manager=function(){return this._manager},e.exports=new n},{bowser:1,hammerjs:13}],43:[function(t,e,r){"use strict";function i(t,e,r,i,n){if(!t)throw new Error("KeyControlMethod: keyCode must be defined");if(!e)throw new Error("KeyControlMethod: parameter must be defined");if(!r)throw new Error("KeyControlMethod: velocity must be defined");if(!i)throw new Error("KeyControlMethod: friction must be defined");n=n||document,this._keyCode=t,this._parameter=e,this._velocity=r,this._friction=i,this._element=n,this._keydownHandler=this._handlePress.bind(this),this._keyupHandler=this._handleRelease.bind(this),this._blurHandler=this._handleBlur.bind(this),this._element.addEventListener("keydown",this._keydownHandler),this._element.addEventListener("keyup",this._keyupHandler),window.addEventListener("blur",this._blurHandler),this._dynamics=new o,this._pressing=!1}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._element.removeEventListener("keydown",this._keydownHandler),this._element.removeEventListener("keyup",this._keyupHandler),window.removeEventListener("blur",this._blurHandler),s(this)},i.prototype._handlePress=function(t){t.keyCode===this._keyCode&&(this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active"))},i.prototype._handleRelease=function(t){
t.keyCode===this._keyCode&&(this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1)},i.prototype._handleBlur=function(){this._dynamics.velocity=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive"),this._pressing=!1},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],44:[function(t,e,r){"use strict";function i(t,e,r){this._hammer=s.get(t,e),this._lastEvent=null,this._active=!1,this._dynamics=new o,this._hammer.on("pinchstart",this._handleStart.bind(this)),this._hammer.on("pinch",this._handleEvent.bind(this)),this._hammer.on("pinchend",this._handleEnd.bind(this)),this._hammer.on("pinchcancel",this._handleEnd.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){this._hammer.release(),a(this)},i.prototype._handleStart=function(){this._active||(this._active=!0,this.emit("active"))},i.prototype._handleEnd=function(){this._lastEvent=null,this._active&&(this._active=!1,this.emit("inactive"))},i.prototype._handleEvent=function(t){var e=t.scale;this._lastEvent&&(e/=this._lastEvent.scale),this._dynamics.offset=-1*(e-1),this.emit("parameterDynamics","zoom",this._dynamics),this._lastEvent=t},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"./HammerGestures":42,"minimal-event-emitter":14}],45:[function(t,e,r){"use strict";function i(t,e,r){this._element=t,this._opts=a(r||{},l),this._active=!1,this._hammer=s.get(t,e),this._dynamics={x:new o,y:new o},this._hammer.on("panstart",this._handleStart.bind(this)),this._hammer.on("panmove",this._handleMove.bind(this)),this._hammer.on("panend",this._handleRelease.bind(this)),this._hammer.on("pancancel",this._handleRelease.bind(this))}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("./HammerGestures"),a=t("../util/defaults"),u=t("./util").maxFriction,h=t("../util/clearOwnProperties"),l={speed:8,friction:6,maxFrictionTime:.3};n(i),i.prototype.destroy=function(){this._hammer.release(),h(this)},i.prototype._handleStart=function(t){t.preventDefault(),this._active||(this._active=!0,this.emit("active"))},i.prototype._handleMove=function(t){t.preventDefault(),this._updateDynamics(t,!1)},i.prototype._handleRelease=function(t){t.preventDefault(),this._updateDynamics(t,!0),this._active&&(this._active=!1,this.emit("inactive"))};var c=[null,null];i.prototype._updateDynamics=function(t,e){var r=this._element.getBoundingClientRect(),i=r.right-r.left,n=r.bottom-r.top,o=Math.max(i,n),s=t.deltaX/o*this._opts.speed,a=t.deltaY/o*this._opts.speed;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=s,this._dynamics.y.velocity=a,e&&(u(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,c),this._dynamics.x.friction=c[0],this._dynamics.y.friction=c[1]),this.emit("parameterDynamics","x",this._dynamics.x),this.emit("parameterDynamics","y",this._dynamics.y)},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./HammerGestures":42,"./util":50,"minimal-event-emitter":14}],46:[function(t,e,r){"use strict";function i(t,e){this._opts=u(e||{},l),this._dynamics=new s,this._eventList=[];var r=this._opts.frictionTime?this.withSmoothing:this.withoutSmoothing;this._wheelListener=new a(t,r.bind(this))}function n(t){var e=1==t.deltaMode?20:1;return t.deltaY*e}var o=t("minimal-event-emitter"),s=t("./Dynamics"),a=t("./WheelListener"),u=t("../util/defaults"),h=t("../util/clearOwnProperties"),l={frictionTime:.2,zoomDelta:.001};o(i),i.prototype.destroy=function(){this._wheelListener.destroy(),h(this)},i.prototype.withoutSmoothing=function(t){this._dynamics.offset=n(t)*this._opts.zoomDelta,this.emit("parameterDynamics","zoom",this._dynamics),t.preventDefault(),this.emit("active"),this.emit("inactive")},i.prototype.withSmoothing=function(t){var e=t.timeStamp;for(this._eventList.push(t);this._eventList[0].timeStamp<e-1e3*this._opts.frictionTime;)this._eventList.shift(0);for(var r=0,i=0;i<this._eventList.length;i++){r+=n(this._eventList[i])*this._opts.zoomDelta/this._opts.frictionTime}this._dynamics.velocity=r,this._dynamics.friction=Math.abs(r)/this._opts.frictionTime,this.emit("parameterDynamics","zoom",this._dynamics),t.preventDefault(),this.emit("active"),this.emit("inactive")},e.exports=i},{"../util/clearOwnProperties":91,"../util/defaults":96,"./Dynamics":40,"./WheelListener":48,"minimal-event-emitter":14}],47:[function(t,e,r){"use strict";function i(t){if(!t)throw new Error("VelocityControlMethod: parameter must be defined");this._parameter=t,this._dynamics=new o}var n=t("minimal-event-emitter"),o=t("./Dynamics"),s=t("../util/clearOwnProperties");n(i),i.prototype.destroy=function(){s(this)},i.prototype.setVelocity=function(t){this._dynamics.velocity=t,this.emit("parameterDynamics",this._parameter,this._dynamics)},i.prototype.setFriction=function(t){this._dynamics.friction=t,this.emit("parameterDynamics",this._parameter,this._dynamics)},e.exports=i},{"../util/clearOwnProperties":91,"./Dynamics":40,"minimal-event-emitter":14}],48:[function(t,e,r){"use strict";function i(t,e,r){var i=o();if("wheel"===i)this._fun=e,this._elem=t,this._elem.addEventListener("wheel",this._fun,r);else{if("mousewheel"!==i)throw new Error("Browser does not support mouse wheel events");this._fun=n(e),this._elem=t,this._elem.addEventListener("mousewheel",this._fun,r)}}function n(t){return function(e){e||(e=window.event);var r={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:1,deltaX:0,deltaZ:0,timeStamp:e.timeStamp||Date.now(),preventDefault:e.preventDefault.bind(e)};return r.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(r.deltaX=-.025*e.wheelDeltaX),t(r)}}function o(){return a!==undefined?a:a="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==undefined?"mousewheel":null}var s=t("../util/clearOwnProperties");i.prototype.destroy=function(){this._elem.removeEventListener(o(),this._fun),s(this)};var a;e.exports=i},{"../util/clearOwnProperties":91}],49:[function(t,e,r){"use strict";function i(t,e,r){r=n(r||{},l);var i={mouseViewDrag:new o(e,"mouse"),mouseViewQtvr:new s(e,"mouse"),touchView:new o(e,"touch"),pinch:new u(e,"touch"),leftArrowKey:new h(37,"x",-.7,3),rightArrowKey:new h(39,"x",.7,3),upArrowKey:new h(38,"y",-.7,3),downArrowKey:new h(40,"y",.7,3),plusKey:new h(107,"zoom",-.7,3),minusKey:new h(109,"zoom",.7,3),wKey:new h(87,"y",-.7,3),aKey:new h(65,"x",-.7,3),sKey:new h(83,"y",.7,3),dKey:new h(68,"x",.7,3),qKey:new h(81,"roll",.7,3),eKey:new h(69,"roll",-.7,3)};!1!==r.scrollZoom&&(i.scrollZoom=new a(e));var c={arrowKeys:["leftArrowKey","rightArrowKey","upArrowKey","downArrowKey"],plusMinusKeys:["plusKey","minusKey"],wasdKeys:["wKey","aKey","sKey","dKey"],qeKeys:["qKey","eKey"]},p=["scrollZoom","touchView","pinch"];switch(r.mouseViewMode){case"drag":p.push("mouseViewDrag");break;case"qtvr":p.push("mouseViewQtvr");break;default:throw new Error("Unknown mouse view mode: "+r.mouseViewMode)}for(var f in i){var d=i[f];t.registerMethod(f,d),p.indexOf(f)>=0&&t.enableMethod(f)}for(var m in c){var v=c[m];t.addMethodGroup(m,v)}return i}var n=t("../util/defaults"),o=t("./Drag"),s=t("./Qtvr"),a=t("./ScrollZoom"),u=t("./PinchZoom"),h=t("./Key"),l={mouseViewMode:"drag"};e.exports=i},{"../util/defaults":96,"./Drag":39,"./Key":43,"./PinchZoom":44,"./Qtvr":45,"./ScrollZoom":46}],50:[function(t,e,r){"use strict";function i(t,e,r,i,o){var s=Math.sqrt(Math.pow(e,2)+Math.pow(r,2));t=Math.max(t,s/i),n(e,r,t,o),o[0]=Math.abs(o[0]),o[1]=Math.abs(o[1])}function n(t,e,r,i){var n=Math.atan(e/t);i[0]=r*Math.cos(n),i[1]=r*Math.sin(n)}e.exports={maxFriction:i,changeVectorNorm:n}},{}],51:[function(t,e,r){"use strict";function i(t,e,r,i){e&&_.rotateZ(t,t,b,e),r&&_.rotateX(t,t,b,r),i&&_.rotateY(t,t,b,i)}function n(t,e,r,i,n){this.face=t,this.x=e,this.y=r,this.z=i,this._geometry=n,this._level=n.levelList[i]}function o(t){if(this.constructor.super_.call(this,t),this._size=t.size,this._tileSize=t.tileSize,this._size%this._tileSize!=0)throw new Error("Level size is not multiple of tile size: "+this._size+" "+this._tileSize)}function s(t){if("array"!==v(t))throw new Error("Level list must be an array");this.levelList=p(t,o),this.selectableLevelList=f(this.levelList);for(var e=1;e<this.levelList.length;e++)this.levelList[e]._validateWithParentLevel(this.levelList[e-1]);this._tileSearcher=new h(this),this._neighborsCache=new l(g),this._vec=y.create(),this._viewSize={}}for(var a=t("../util/inherits"),u=t("../util/hash"),h=t("../TileSearcher"),l=t("../collections/LruMap"),c=t("./Level"),p=t("./common").makeLevelList,f=t("./common").makeSelectableLevelList,d=t("../util/clamp"),m=t("../util/cmp"),v=t("../util/type"),_=t("gl-matrix").vec3,y=t("gl-matrix").vec4,g=64,w="fudlrb",M={f:{x:0,y:0},b:{x:0,y:Math.PI},l:{x:0,y:Math.PI/2},r:{x:0,y:-Math.PI/2},u:{x:Math.PI/2,y:0},d:{x:-Math.PI/2,y:0}},b=_.create(),x={},E=0;E<w.length;E++){var T=w[E],P=M[T],L=_.fromValues(0,0,-1);i(L,0,P.x,P.y),x[T]=L}var S={f:["l","r","u","d"],b:["r","l","u","d"],l:["b","f","u","d"],r:["f","b","u","d"],u:["l","r","b","f"],d:["l","r","f","b"]},A=[[0,1],[1,0],[0,-1],[-1,0]];n.prototype.rotX=function(){return M[this.face].x},n.prototype.rotY=function(){return M[this.face].y},n.prototype.centerX=function(){return(this.x+.5)/this._level.numHorizontalTiles()-.5},n.prototype.centerY=function(){return.5-(this.y+.5)/this._level.numVerticalTiles()},n.prototype.scaleX=function(){return 1/this._level.numHorizontalTiles()},n.prototype.scaleY=function(){return 1/this._level.numVerticalTiles()},n.prototype.width=function(){return this._level.tileWidth()},n.prototype.height=function(){return this._level.tileHeight()},n.prototype.levelWidth=function(){return this._level.width()},n.prototype.levelHeight=function(){return this._level.height()},n.prototype.atTopLevel=function(){return 0===this.z},n.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},n.prototype.atTopEdge=function(){return 0===this.y},n.prototype.atBottomEdge=function(){return this.y===this._level.numVerticalTiles()-1},n.prototype.atLeftEdge=function(){return 0===this.x},n.prototype.atRightEdge=function(){return this.x===this._level.numHorizontalTiles()-1},n.prototype.padTop=function(){return this.atTopEdge()&&/[fu]/.test(this.face)},n.prototype.padBottom=function(){return!this.atBottomEdge()||/[fd]/.test(this.face)},n.prototype.padLeft=function(){return this.atLeftEdge()&&/[flud]/.test(this.face)},n.prototype.padRight=function(){return!this.atRightEdge()||/[frud]/.test(this.face)},n.prototype.vertices=function(t){function e(t,e,n){_.set(t,e,n,-.5),i(t,0,r.x,r.y)}t||(t=[_.create(),_.create(),_.create(),_.create()]);var r=M[this.face],n=this.centerX()-this.scaleX()/2,o=this.centerX()+this.scaleX()/2,s=this.centerY()-this.scaleY()/2,a=this.centerY()+this.scaleY()/2;return e(t[0],n,a),e(t[1],o,a),e(t[2],o,s),e(t[3],n,s),t},n.prototype.parent=function(){if(this.atTopLevel())return null;var t=this.face,e=this.z,r=this.x,i=this.y,o=this._geometry,s=o.levelList[e],a=o.levelList[e-1];return new n(t,Math.floor(r/s.numHorizontalTiles()*a.numHorizontalTiles()),Math.floor(i/s.numVerticalTiles()*a.numVerticalTiles()),e-1,o)},n.prototype.children=function(t){if(this.atBottomLevel())return null;var e=this.face,r=this.z,i=this.x,o=this.y,s=this._geometry,a=s.levelList[r],u=s.levelList[r+1],h=u.numHorizontalTiles()/a.numHorizontalTiles(),l=u.numVerticalTiles()/a.numVerticalTiles();t=t||[];for(var c=0;c<h;c++)for(var p=0;p<l;p++){var f=h*i+c,d=l*o+p,m=r+1;t.push(new n(e,f,d,m,s))}return t},n.prototype.neighbors=function(){var t=this._geometry,e=t._neighborsCache,r=e.get(this);if(r)return r;for(var o=t._vec,s=this.face,a=this.x,u=this.y,h=this.z,l=this._level,c=l.numHorizontalTiles(),p=l.numVerticalTiles(),f=[],m=0;m<A.length;m++){var v=A[m][0],y=A[m][1],g=a+v,w=u+y,b=h,x=s;if(g<0||g>=c||w<0||w>=p){var E=this.centerX(),T=this.centerY();g<0?(_.set(o,-.5,T,-.5),x=S[s][0]):g>=c?(_.set(o,.5,T,-.5),x=S[s][1]):w<0?(_.set(o,E,.5,-.5),x=S[s][2]):w>=p&&(_.set(o,E,-.5,-.5),x=S[s][3]);var P;P=M[s],i(o,0,P.x,P.y),P=M[x],i(o,0,-P.x,-P.y),g=d(Math.floor((.5+o[0])*c),0,c-1),w=d(Math.floor((.5-o[1])*p),0,p-1)}f.push(new n(x,g,w,b,t))}return e.set(this,f),f},n.prototype.hash=function(){return u(w.indexOf(this.face),this.z,this.y,this.x)},n.prototype.equals=function(t){return this.geometry===t.geometry&&this.face===t.face&&this.z===t.z&&this.y===t.y&&this.x===t.x},n.prototype.cmp=function(t){return m(this.z,t.z)||m(w.indexOf(this.face),w.indexOf(t.face))||m(this.y,t.y)||m(this.x,t.x)},n.prototype.str=function(){return"CubeTile("+tile.face+", "+tile.x+", "+tile.y+", "+tile.z+")"},a(o,c),o.prototype.width=function(){return this._size},o.prototype.height=function(){return this._size},o.prototype.tileWidth=function(){return this._tileSize},o.prototype.tileHeight=function(){return this._tileSize},o.prototype._validateWithParentLevel=function(t){var e=this.width(),r=this.height(),i=this.tileWidth(),n=this.tileHeight(),o=this.numHorizontalTiles(),s=this.numVerticalTiles(),a=t.width(),u=t.height(),h=t.tileWidth(),l=t.tileHeight(),c=t.numHorizontalTiles(),p=t.numVerticalTiles();if(e%a!=0)throw new Error("Level width must be multiple of parent level: "+e+" vs. "+a);if(r%u!=0)throw new Error("Level height must be multiple of parent level: "+r+" vs. "+u);if(o%c!=0)throw new Error("Number of horizontal tiles must be multiple of parent level: "+o+" ("+e+"/"+i+") vs. "+c+" ("+a+"/"+h+")");if(s%p!=0)throw new Error("Number of vertical tiles must be multiple of parent level: "+s+" ("+r+"/"+n+") vs. "+p+" ("+u+"/"+l+")")},s.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},s.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t),i=t.numHorizontalTiles()-1,o=t.numVerticalTiles()-1;e=e||[];for(var s=0;s<w.length;s++)for(var a=w[s],u=0;u<=i;u++)for(var h=0;h<=o;h++)e.push(new n(a,u,h,r,this));return e},s.prototype._closestTile=function(t,e){var r=this._vec;y.set(r,0,0,1,1),y.transformMat4(r,r,t.inverseProjection());var o=Infinity,s=null;for(var a in x){var u=x[a],h=1-_.dot(u,r);h<o&&(o=h,s=a)}for(var l=Math.max(Math.abs(r[0]),Math.abs(r[1]),Math.abs(r[2]))/.5,c=0;c<3;c++)r[c]=r[c]/l;var p=M[s];i(r,0,-p.x,-p.y);var f=this.levelList.indexOf(e),m=e.numHorizontalTiles(),v=e.numVerticalTiles();return new n(s,d(Math.floor((.5+r[0])*m),0,m-1),d(Math.floor((.5-r[1])*v),0,v-1),f,this)},s.prototype.visibleTiles=function(t,e,r){var i=this._viewSize,n=this._tileSearcher;if(r=r||[],t.size(i),0===i.width||0===i.height)return r;var o=this._closestTile(t,e);if(!n.search(t,o,r))throw new Error("Starting tile is not visible");return r},s.Tile=s.prototype.Tile=n,s.type=s.prototype.type="cube",n.type=n.prototype.type="cube",e.exports=s},{"../TileSearcher":22,"../collections/LruMap":29,"../util/clamp":90,"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/type":116,"./Level":54,"./common":55,"gl-matrix":3}],52:[function(t,e,r){"use strict";function i(t,e){this.z=t,this._geometry=e,this._level=e.levelList[t]}function n(t){this.constructor.super_.call(this,t),this._width=t.width}function o(t){if("array"!==c(t))throw new Error("Level list must be an array");this.levelList=h.makeLevelList(t,n),this.selectableLevelList=h.makeSelectableLevelList(this.levelList)}var s=t("../util/inherits"),a=t("../util/hash"),u=t("../util/cmp"),h=t("./common"),l=t("./Level"),c=t("../util/type");i.prototype.rotX=function(){return 0},i.prototype.rotY=function(){return 0},i.prototype.centerX=function(){return.5},i.prototype.centerY=function(){return.5},i.prototype.scaleX=function(){return 1},i.prototype.scaleY=function(){return 1},i.prototype.width=function(){return this._level.tileWidth()},i.prototype.height=function(){return this._level.tileHeight()},i.prototype.levelWidth=function(){return this._level.width()},i.prototype.levelHeight=function(){return this._level.height()},i.prototype.atTopLevel=function(){return 0===this.z},i.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},i.prototype.atTopEdge=function(){return!0},i.prototype.atBottomEdge=function(){return!0},i.prototype.atLeftEdge=function(){return!0},i.prototype.atRightEdge=function(){return!0},i.prototype.padTop=function(){return!1},i.prototype.padBottom=function(){return!1},i.prototype.padLeft=function(){return!1},i.prototype.padRight=function(){return!1},i.prototype.parent=function(){return this.atTopLevel()?null:new i(this.z-1,this._geometry)},i.prototype.children=function(t){return this.atBottomLevel()?null:(t=t||[],t.push(new i(this.z+1,this._geometry)),t)},i.prototype.neighbors=function(){return[]},i.prototype.hash=function(){return a(this.z)},i.prototype.equals=function(t){return this.geometry===t.geometry&&this.z===t.z},i.prototype.cmp=function(t){return u(this.z,t.z)},i.prototype.str=function(){return"EquirectTile("+tile.z+")"},s(n,l),n.prototype.width=function(){return this._width},n.prototype.height=function(){return this._width/2},n.prototype.tileWidth=function(){return this._width},n.prototype.tileHeight=function(){return this._width/2},o.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},o.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t);return e=e||[],e.push(new i(r,this)),e},o.prototype.visibleTiles=function(t,e,r){var n=new i(this.levelList.indexOf(e),this);r=r||[],r.length=0,r.push(n)},o.Tile=o.prototype.Tile=i,o.type=o.prototype.type="equirect",i.type=i.prototype.type="equirect",e.exports=o},{"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/type":116,"./Level":54,"./common":55}],53:[function(t,e,r){"use strict";function i(t,e,r,i){this.x=t,this.y=e,this.z=r,this._geometry=i,this._level=i.levelList[r]}function n(t){this.constructor.super_.call(this,t),this._width=t.width,this._height=t.height,this._tileWidth=t.tileWidth,this._tileHeight=t.tileHeight}function o(t){if("array"!==v(t))throw new Error("Level list must be an array");this.levelList=c(t,n),this.selectableLevelList=p(this.levelList);for(var e=1;e<this.levelList.length;e++)this.levelList[e]._validateWithParentLevel(this.levelList[e-1]);this._tileSearcher=new u(this),this._neighborsCache=new h(g),this._vec=y.create(),this._viewSize={}}var s=t("../util/inherits"),a=t("../util/hash"),u=t("../TileSearcher"),h=t("../collections/LruMap"),l=t("./Level"),c=t("./common").makeLevelList,p=t("./common").makeSelectableLevelList,f=t("../util/clamp"),d=t("../util/mod"),m=t("../util/cmp"),v=t("../util/type"),_=t("gl-matrix").vec2,y=t("gl-matrix").vec4,g=64,w=[[0,1],[1,0],[0,-1],[-1,0]];i.prototype.rotX=function(){return 0},i.prototype.rotY=function(){return 0},i.prototype.centerX=function(){var t=this._level.width(),e=this._level.tileWidth();return(this.x*e+.5*this.width())/t-.5},i.prototype.centerY=function(){var t=this._level.height(),e=this._level.tileHeight();return.5-(this.y*e+.5*this.height())/t},i.prototype.scaleX=function(){var t=this._level.width();return this.width()/t},i.prototype.scaleY=function(){var t=this._level.height();return this.height()/t},i.prototype.width=function(){var t=this._level.width(),e=this._level.tileWidth();if(this.atRightEdge()){return d(t,e)||e}return e},i.prototype.height=function(){var t=this._level.height(),e=this._level.tileHeight();if(this.atBottomEdge()){return d(t,e)||e}return e},i.prototype.levelWidth=function(){return this._level.width()},i.prototype.levelHeight=function(){return this._level.height()},i.prototype.atTopLevel=function(){return 0===this.z},i.prototype.atBottomLevel=function(){return this.z===this._geometry.levelList.length-1},i.prototype.atTopEdge=function(){return 0===this.y},i.prototype.atBottomEdge=function(){return this.y===this._level.numVerticalTiles()-1},i.prototype.atLeftEdge=function(){return 0===this.x},i.prototype.atRightEdge=function(){return this.x===this._level.numHorizontalTiles()-1},i.prototype.padTop=function(){return!1},i.prototype.padBottom=function(){return!this.atBottomEdge()},i.prototype.padLeft=function(){return!1},i.prototype.padRight=function(){return!this.atRightEdge()},i.prototype.vertices=function(t){t||(t=[_.create(),_.create(),_.create(),_.create()]);var e=this.centerX()-this.scaleX()/2,r=this.centerX()+this.scaleX()/2,i=this.centerY()-this.scaleY()/2,n=this.centerY()+this.scaleY()/2;return _.set(t[0],e,n),_.set(t[1],r,n),_.set(t[2],r,i),_.set(t[3],e,i),t},i.prototype.parent=function(){if(this.atTopLevel())return null;var t=this._geometry,e=this.z-1;return new i(Math.floor(this.x/2),Math.floor(this.y/2),e,t)},i.prototype.children=function(t){if(this.atBottomLevel())return null;var e=this._geometry,r=this.z+1;return t=t||[],t.push(new i(2*this.x,2*this.y,r,e)),t.push(new i(2*this.x,2*this.y+1,r,e)),t.push(new i(2*this.x+1,2*this.y,r,e)),t.push(new i(2*this.x+1,2*this.y+1,r,e)),t},i.prototype.neighbors=function(){var t=this._geometry,e=t._neighborsCache,r=e.get(this);if(r)return r;for(var n=this.x,o=this.y,s=this.z,a=this._level,u=a.numHorizontalTiles()-1,h=a.numVerticalTiles()-1,l=[],c=0;c<w.length;c++){var p=w[c][0],f=w[c][1],d=n+p,m=o+f,v=s;0<=d&&d<=u&&0<=m&&m<=h&&l.push(new i(d,m,v,t))}return e.set(this,l),l},i.prototype.hash=function(){return a(this.z,this.y,this.x)},i.prototype.equals=function(t){return this.geometry===t.geometry&&this.z===t.z&&this.y===t.y&&this.x===t.x},i.prototype.cmp=function(t){return m(this.z,t.z)||m(this.y,t.y)||m(this.x,t.x)},i.prototype.str=function(){return"FlatTile("+tile.x+", "+tile.y+", "+tile.z+")"},s(n,l),n.prototype.width=function(){return this._width},n.prototype.height=function(){return this._height},n.prototype.tileWidth=function(){return this._tileWidth},n.prototype.tileHeight=function(){return this._tileHeight},n.prototype._validateWithParentLevel=function(t){var e=this.width(),r=this.height(),i=this.tileWidth(),n=this.tileHeight(),o=t.width(),s=t.height(),a=t.tileWidth(),u=t.tileHeight();return e%o!=0?new Error("Level width must be multiple of parent level: "+e+" vs. "+o):r%s!=0?new Error("Level height must be multiple of parent level: "+r+" vs. "+s):i%a!=0?new Error("Level tile width must be multiple of parent level: "+i+" vs. "+a):n%u!=0?new Error("Level tile height must be multiple of parent level: "+n+" vs. "+u):void 0},o.prototype.maxTileSize=function(){for(var t=0,e=0;e<this.levelList.length;e++){var r=this.levelList[e];t=Math.max(t,r.tileWidth,r.tileHeight)}return t},o.prototype.levelTiles=function(t,e){var r=this.levelList.indexOf(t),n=t.numHorizontalTiles()-1,o=t.numVerticalTiles()-1;e||(e=[]);for(var s=0;s<=n;s++)for(var a=0;a<=o;a++)e.push(new i(s,a,r,this));return e},o.prototype._closestTile=function(t,e){var r=this._vec;y.set(r,0,0,1,1),y.transformMat4(r,r,t.inverseProjection());var n=.5+r[0],o=.5-r[1],s=this.levelList.indexOf(e),a=e.width(),u=e.height(),h=e.tileWidth(),l=e.tileHeight(),c=e.numHorizontalTiles(),p=e.numVerticalTiles();return new i(f(Math.floor(n*a/h),0,c-1),f(Math.floor(o*u/l),0,p-1),s,this)},o.prototype.visibleTiles=function(t,e,r){var i=this._viewSize,n=this._tileSearcher;if(r=r||[],t.size(i),0===i.width||0===i.height)return r;var o=this._closestTile(t,e);if(!n.search(t,o,r))throw new Error("Starting tile is not visible");return r},o.Tile=o.prototype.Tile=i,o.type=o.prototype.type="flat",i.type=i.prototype.type="flat",e.exports=o},{"../TileSearcher":22,"../collections/LruMap":29,"../util/clamp":90,"../util/cmp":92,"../util/hash":103,"../util/inherits":104,"../util/mod":106,"../util/type":116,"./Level":54,"./common":55,"gl-matrix":3}],54:[function(t,e,r){"use strict";function i(t){this._fallbackOnly=!!t.fallbackOnly}i.prototype.numHorizontalTiles=function(){return Math.ceil(this.width()/this.tileWidth())},i.prototype.numVerticalTiles=function(){return Math.ceil(this.height()/this.tileHeight())},i.prototype.fallbackOnly=function(){return this._fallbackOnly},e.exports=i},{}],55:[function(t,e,r){"use strict";function i(t,e){for(var r=[],i=0;i<t.length;i++)r.push(new e(t[i]));return r.sort(function(t,e){return o(t.width(),e.width())}),r}function n(t){for(var e=[],r=0;r<t.length;r++)t[r]._fallbackOnly||e.push(t[r]);if(!e.length)throw new Error("No selectable levels in list");return e}var o=t("../util/cmp");e.exports={makeLevelList:i,makeSelectableLevelList:n}},{"../util/cmp":92}],56:[function(t,e,r){"use strict";e.exports={WebGlStage:t("./stages/WebGl"),CssStage:t("./stages/Css"),FlashStage:t("./stages/Flash"),WebGlCubeRenderer:t("./renderers/WebGlCube"),WebGlFlatRenderer:t("./renderers/WebGlFlat"),WebGlEquirectRenderer:t("./renderers/WebGlEquirect"),CssCubeRenderer:t("./renderers/CssCube"),CssFlatRenderer:t("./renderers/CssFlat"),FlashCubeRenderer:t("./renderers/FlashCube"),FlashFlatRenderer:t("./renderers/FlashFlat"),registerDefaultRenderers:t("./renderers/registerDefaultRenderers"),CubeGeometry:t("./geometries/Cube"),FlatGeometry:t("./geometries/Flat"),EquirectGeometry:t("./geometries/Equirect"),RectilinearView:t("./views/Rectilinear"),FlatView:t("./views/Flat"),ImageUrlSource:t("./sources/ImageUrl"),SingleAssetSource:t("./sources/SingleAsset"),StaticAsset:t("./assets/Static"),DynamicAsset:t("./assets/Dynamic"),TextureStore:t("./TextureStore"),Layer:t("./Layer"),RenderLoop:t("./RenderLoop"),KeyControlMethod:t("./controls/Key"),DragControlMethod:t("./controls/Drag"),QtvrControlMethod:t("./controls/Qtvr"),ScrollZoomControlMethod:t("./controls/ScrollZoom"),PinchZoomControlMethod:t("./controls/PinchZoom"),VelocityControlMethod:t("./controls/Velocity"),ElementPressControlMethod:t("./controls/ElementPress"),Controls:t("./controls/Controls"),Dynamics:t("./controls/Dynamics"),Viewer:t("./Viewer"),Scene:t("./Scene"),Hotspot:t("./Hotspot"),HotspotContainer:t("./HotspotContainer"),colorEffects:t("./colorEffects"),registerDefaultControls:t("./controls/registerDefaultControls"),autorotate:t("./autorotate"),util:{async:t("./util/async"),cancelize:t("./util/cancelize"),chain:t("./util/chain"),clamp:t("./util/clamp"),clearOwnProperties:t("./util/clearOwnProperties"),cmp:t("./util/cmp"),compose:t("./util/compose"),convertFov:t("./util/convertFov"),decimal:t("./util/decimal"),defaults:t("./util/defaults"),defer:t("./util/defer"),degToRad:t("./util/degToRad"),delay:t("./util/delay"),dom:t("./util/dom"),extend:t("./util/extend"),hash:t("./util/hash"),inherits:t("./util/inherits"),mod:t("./util/mod"),noop:t("./util/noop"),now:t("./util/now"),once:t("./util/once"),pixelRatio:t("./util/pixelRatio"),radToDeg:t("./util/radToDeg"),real:t("./util/real"),retry:t("./util/retry"),tween:t("./util/tween"),type:t("./util/type")},dependencies:{bowser:t("bowser"),glMatrix:t("gl-matrix"),eventEmitter:t("minimal-event-emitter"),hammerjs:t("hammerjs")}}},{"./Hotspot":15,"./HotspotContainer":16,"./Layer":17,"./RenderLoop":19,"./Scene":20,"./TextureStore":21,"./Viewer":24,"./assets/Dynamic":25,"./assets/Static":27,"./autorotate":28,"./colorEffects":35,"./controls/Controls":38,"./controls/Drag":39,"./controls/Dynamics":40,"./controls/ElementPress":41,"./controls/Key":43,"./controls/PinchZoom":44,"./controls/Qtvr":45,"./controls/ScrollZoom":46,"./controls/Velocity":47,"./controls/registerDefaultControls":49,"./geometries/Cube":51,"./geometries/Equirect":52,"./geometries/Flat":53,"./renderers/CssCube":60,"./renderers/CssFlat":61,"./renderers/FlashCube":63,"./renderers/FlashFlat":64,"./renderers/WebGlCube":67,"./renderers/WebGlEquirect":68,"./renderers/WebGlFlat":69,"./renderers/registerDefaultRenderers":70,"./sources/ImageUrl":75,"./sources/SingleAsset":76,"./stages/Css":77,"./stages/Flash":78,"./stages/WebGl":81,"./util/async":86,"./util/cancelize":88,"./util/chain":89,"./util/clamp":90,"./util/clearOwnProperties":91,"./util/cmp":92,"./util/compose":93,"./util/convertFov":94,"./util/decimal":95,"./util/defaults":96,"./util/defer":97,"./util/degToRad":98,"./util/delay":99,"./util/dom":100,"./util/extend":101,"./util/hash":103,"./util/inherits":104,"./util/mod":106,"./util/noop":107,"./util/now":108,"./util/once":109,"./util/pixelRatio":110,"./util/radToDeg":112,"./util/real":113,"./util/retry":114,"./util/tween":115,"./util/type":116,"./views/Flat":117,"./views/Rectilinear":118,bowser:1,"gl-matrix":3,hammerjs:13,"minimal-event-emitter":14}],57:[function(t,e,r){"use strict";function i(t){if("flash"!==t.type)throw new Error("Stage type incompatible with loader");this._stage=t}var n=t("../assets/Flash"),o=t("../NetworkError"),s=t("../util/once");i.prototype.loadImage=function(t,e,r){function i(e,s){s===d&&(u.removeFlashCallbackListener("imageLoaded",i),e?r(new o("Network error: "+t)):r(null,new n(h,d)))}function a(){h.cancelImage(d),u.removeFlashCallbackListener("imageLoaded",i),r.apply(null,arguments)}var u=this._stage,h=u.flashElement(),l=e&&e.x||0,c=e&&e.y||0,p=e&&e.width||1,f=e&&e.height||1,d=h.loadImage(t,p,f,l,c);return r=s(r),u.addFlashCallbackListener("imageLoaded",i),a},e.exports=i},{"../NetworkError":18,"../assets/Flash":26,"../util/once":109}],58:[function(t,e,r){"use strict";function i(t){if("webgl"!==t.type&&"css"!==t.type)throw new Error("Stage type incompatible with loader");this._stage=t}var n=t("../assets/Static"),o=t("../NetworkError"),s=t("../util/once");i.prototype.loadImage=function(t,e,r){function i(){a.onload=a.onerror=null,a.src="",r.apply(null,arguments)}var a=new Image;a.crossOrigin="anonymous";var u=e&&e.x||0,h=e&&e.y||0,l=e&&e.width||1,c=e&&e.height||1;return r=s(r),a.onload=function(){if(0===u&&0===h&&1===l&&1===c)r(null,new n(a));else{u*=a.naturalWidth,h*=a.naturalHeight,l*=a.naturalWidth,c*=a.naturalHeight;var t=document.createElement("canvas");t.width=l,t.height=c;t.getContext("2d").drawImage(a,u,h,l,c,0,0,l,c),r(null,new n(t))}},a.onerror=function(){r(new o("Network error: "+t))},a.src=t,i},e.exports=i},{"../NetworkError":18,"../assets/Static":27,"../util/once":109}],59:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e,r){this._root=t,this._browserQuirks=e;var i=document.createElement("div");t.appendChild(i),i.style.position="absolute",a(i),u(i),this._browserQuirks.useNullTransform&&h(i),this.domElement=i,this._oldTileList=[],this._newTileList=[],this._textureMap=new o}var o=t("../collections/Map"),s=t("../util/decimal"),a=t("../util/dom").setOverflowHidden,u=t("../util/dom").setNoPointerEvents,h=t("../util/dom").setNullTransform,l=t("../util/dom").setTransform,c=t("../util/clearOwnProperties"),p="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.css;n.prototype.destroy=function(){this._root.removeChild(this.domElement),c(this)},n.prototype.startLayer=function(t,e){var r=this.domElement,i=this._root.clientWidth,n=this._root.clientHeight;r.style.left=s(i*e.left)+"px",r.style.top=s(n*e.top)+"px",r.style.width=s(i*e.width)+"px",r.style.height=s(n*e.height)+"px";var o=1,a=t.effects();a&&null!=a.opacity&&(o=a.opacity),r.style.opacity=o,this._newTileList.length=0,this._textureMap.clear()},n.prototype.renderTile=function(t,e){this._newTileList.push(t),this._textureMap.set(t,e)},n.prototype.endLayer=function(t,e){var r,n,o,s,a,u,h,c,f=this.domElement,d=this._oldTileList,m=this._newTileList,v=this._textureMap,_=t.view();if(f.children.length!==d.length)throw new Error("DOM not in sync with tile list");for(m.sort(i),r=0,o=d[r],h=f.firstChild,n=0;n<m.length;n++){for(s=m[n];r<d.length&&!(o.cmp(s)>=0);)c=h.nextSibling,f.removeChild(h),h=c,o=d[++r];if(a=v.get(s),!(u=a?a._canvas:null))throw new Error("Rendering tile with missing texture");if(o&&0===o.cmp(s)){if(u!=h)throw new Error("DOM not in sync with tile list");h=h.nextSibling,o=d[++r]}else f.insertBefore(u,h);l(u,this.calculateTransform(s,a,_)),p&&u.setAttribute("data-tile",s.str())}for(;h;)c=h.nextSibling,f.removeChild(h),h=c;if(f.children.length!==m.length)throw new Error("DOM not in sync with tile list");var y=this._oldTileList
;this._oldTileList=this._newTileList,this._newTileList=y},e.exports=n},{"../collections/Map":31,"../util/clearOwnProperties":91,"../util/decimal":95,"../util/dom":100}],60:[function(t,e,r){"use strict";function i(t,e){this.constructor.super_.call(this,t,e,n)}var n=t("../geometries/Cube").Tile,o=t("./CssBase"),s=t("../util/decimal");t("../util/inherits")(i,o),i.prototype.calculateTransform=function(t,e,r){var i=this._browserQuirks.padSize,n=this._browserQuirks.reverseLevelDepth,o=this._browserQuirks.perspectiveNudge,a="",u=n?256-t.z:t.levelWidth(),h=r.size(),l=h.width,c=h.height;a+="translate3d("+s(l/2)+"px, "+s(c/2)+"px, 0px) ";var p=.5*c/Math.tan(r.fov()/2),f=p+o;a+="perspective("+s(p)+"px) translateZ("+s(f)+"px) ";var d=-r.roll(),m=-r.pitch(),v=r.yaw();a+="rotateZ("+s(d)+"rad) rotateX("+s(m)+"rad) rotateY("+s(v)+"rad) ";var _=-t.rotX(),y=t.rotY();a+="rotateX("+s(_)+"rad) rotateY("+s(y)+"rad) ";var g=t.centerX()-t.scaleX()/2,w=-(t.centerY()+t.scaleY()/2),M=g*u,b=w*u,x=-u/2;if(a+="translate3d("+s(M)+"px, "+s(b)+"px, "+s(x)+"px) ",n){var E=u*t.scaleX()/t.width(),T=u*t.scaleY()/t.height();a+="scale("+s(E)+", "+s(T)+") "}var P=t.padLeft()?i:0,L=t.padTop()?i:0;return 0===P&&0===L||(a+="translate3d("+s(-P)+"px, "+s(-L)+"px, 0) "),a},e.exports=i},{"../geometries/Cube":51,"../util/decimal":95,"../util/inherits":104,"./CssBase":59}],61:[function(t,e,r){"use strict";function i(t,e){this.constructor.super_.call(this,t,e,n)}var n=t("../geometries/Flat").Tile,o=t("./CssBase"),s=t("../util/decimal");t("../util/inherits")(i,o),i.prototype.calculateTransform=function(t,e,r){var i=this._browserQuirks.padSize,n="",o=r.width(),a=r.height();n+="translateX("+s(o/2)+"px) translateY("+s(a/2)+"px) ";var u=o/r._zoomX(),h=a/r._zoomY(),l=t.centerX()-t.scaleX()/2+.5,c=.5-t.centerY()-t.scaleY()/2,p=l*u,f=c*h;n+="translateX("+s(p)+"px) translateY("+s(f)+"px) ";var d=-r.x()*u,m=-r.y()*h;n+="translateX("+s(d)+"px) translateY("+s(m)+"px) ";var v=t.padLeft()?i:0,_=t.padTop()?i:0;0===v&&0===_||(n+="translateX("+s(-v)+"px) translateY("+s(-_)+"px) ");var y=u/t.levelWidth(),g=h/t.levelHeight();return n+="scale("+s(y)+", "+s(g)+") "},e.exports=i},{"../geometries/Flat":53,"../util/decimal":95,"../util/inherits":104,"./CssBase":59}],62:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e,r,i){this._flashElement=t,this._layerId=e,this._quirks=r,this._tileList=[],this._textureMap=new o,this._layerCreated=!1}var o=t("../collections/Map"),s=t("../util/clearOwnProperties");n.prototype.destroy=function(){this._layerCreated&&this._flashElement.destroyLayer(this._layerId),s(this)},n.prototype.startLayer=function(t,e){this._flashElement.isReady&&this._flashElement.isReady()&&(this._layerCreated||(this._flashElement.createLayer(this._layerId),this._layerCreated=!0),this._tileList.length=0,this._textureMap.clear())},n.prototype.renderTile=function(t,e){this._tileList.push(t),this._textureMap.set(t,e)},n.prototype.endLayer=function(t,e){if(this._flashElement.isReady&&this._flashElement.isReady()){this._tileList.sort(i),this._renderOnFlash(t,e)}},e.exports=n},{"../collections/Map":31,"../util/clearOwnProperties":91}],63:[function(t,e,r){"use strict";function i(t,e,r){this.constructor.super_.call(this,t,e,r,o),this._flashTileList=[]}var n=t("./FlashBase"),o=t("../geometries/Cube").Tile,s=t("../util/inherits"),a=t("../util/radToDeg");s(i,n),i.prototype._renderOnFlash=function(t,e){var r=this._flashElement,i=this._layerId,n=this._quirks.padSize,o=this._tileList,s=this._textureMap,u=this._flashTileList;u.length=0;for(var h=0;h<o.length;h++){var l=o[h],c=s.get(l);if(!c)throw new Error("Rendering tile with missing texture");var p=l.padTop()?n:0,f=l.padBottom()?n:0,d=l.padLeft()?n:0,m=l.padRight()?n:0;u.push({textureId:c._textureId,face:l.face,width:l.width(),height:l.height(),centerX:l.centerX(),centerY:l.centerY(),rotX:a(l.rotX()),rotY:a(l.rotY()),levelSize:l.levelWidth(),padTop:p,padBottom:f,padLeft:d,padRight:m})}var v=this._flashElement.clientWidth,_=this._flashElement.clientHeight,y=v*e.x,g=_*e.y,w=v*e.width,M=_*e.height,b=1,x=t.effects();x&&null!=x.opacity&&(b=x.opacity);var E=t.view(),T=E.yaw(),P=E.pitch(),L=E.roll(),S=E.fov();r.drawCubeTiles(i,w,M,y,g,b,T,P,L,S,u)},e.exports=i},{"../geometries/Cube":51,"../util/inherits":104,"../util/radToDeg":112,"./FlashBase":62}],64:[function(t,e,r){"use strict";function i(t,e,r){this.constructor.super_.call(this,t,e,r,o),this._flashTileList=[]}var n=t("./FlashBase"),o=t("../geometries/Flat").Tile;t("../util/inherits")(i,n),i.prototype._renderOnFlash=function(t,e){var r=this._flashElement,i=this._layerId,n=this._quirks.padSize,o=this._tileList,s=this._textureMap,a=this._flashTileList;a.length=0;for(var u=0;u<o.length;u++){var h=o[u],l=s.get(h);if(!l)throw new Error("Rendering tile with missing texture");var c=h.padTop()?n:0,p=h.padBottom()?n:0,f=h.padLeft()?n:0,d=h.padRight()?n:0;a.push({textureId:l._textureId,width:h.width(),height:h.height(),centerX:h.centerX(),centerY:h.centerY(),scaleX:h.scaleX(),scaleY:h.scaleY(),levelWidth:h.levelWidth(),levelHeight:h.levelHeight(),padTop:c,padBottom:p,padLeft:f,padRight:d})}var m=this._flashElement.clientWidth,v=this._flashElement.clientHeight,_=m*e.x,y=v*e.y,g=m*e.width,w=v*e.height,M=1,b=t.effects();b&&null!=b.opacity&&(M=b.opacity);var x=t.view(),E=x.x(),T=x.y(),P=x._zoomX(),L=x._zoomY();r.drawFlatTiles(i,g,w,_,y,M,E,T,P,L,a)},e.exports=i},{"../geometries/Flat":53,"../util/inherits":104,"./FlashBase":62}],65:[function(t,e,r){"use strict";function i(t){this.gl=t,this.projMatrix=n.create(),this.viewportMatrix=n.create(),this.translateVector=o.create(),this.scaleVector=o.create(),this.constantBuffers=u(t,w,M,b),this.shaderProgram=l(t,y,g,x,E)}var n=t("gl-matrix").mat4,o=t("gl-matrix").vec3,s=t("../util/clearOwnProperties"),a=t("./WebGlCommon"),u=a.createConstantBuffers,h=a.destroyConstantBuffers,l=a.createShaderProgram,c=a.destroyShaderProgram,p=a.enableAttributes,f=a.disableAttributes,d=a.setViewport,m=a.setupPixelEffectUniforms,v=a.setDepth,_=a.setTexture,y=t("../shaders/vertexNormal"),g=t("../shaders/fragmentNormal"),w=[0,1,2,0,2,3],M=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],b=[0,0,1,0,1,1,0,1],x=["aVertexPosition","aTextureCoord"],E=["uDepth","uOpacity","uSampler","uProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix"];i.prototype.destroy=function(){h(this.gl,this.constantBuffers),c(this.gl,this.shaderProgram),s(this)},i.prototype.startLayer=function(t,e){var r=this.gl,i=this.shaderProgram,n=this.constantBuffers,o=this.viewportMatrix;r.useProgram(i),p(r,i),d(r,t,e,o),r.uniformMatrix4fv(i.uViewportMatrix,!1,o),r.bindBuffer(r.ARRAY_BUFFER,n.vertexPositions),r.vertexAttribPointer(i.aVertexPosition,3,r.FLOAT,r.FALSE,0,0),r.bindBuffer(r.ARRAY_BUFFER,n.textureCoords),r.vertexAttribPointer(i.aTextureCoord,2,r.FLOAT,r.FALSE,0,0),m(r,t.effects(),{opacity:i.uOpacity,colorOffset:i.uColorOffset,colorMatrix:i.uColorMatrix})},i.prototype.endLayer=function(t,e){var r=this.gl,i=this.shaderProgram;f(r,i)},i.prototype.renderTile=function(t,e,r,i){var o=this.gl,s=this.shaderProgram,a=this.constantBuffers,u=this.projMatrix,h=this.translateVector,l=this.scaleVector;h[0]=t.centerX(),h[1]=t.centerY(),h[2]=-.5,l[0]=t.scaleX(),l[1]=t.scaleY(),l[2]=1,n.copy(u,r.view().projection()),n.rotateX(u,u,t.rotX()),n.rotateY(u,u,t.rotY()),n.translate(u,u,h),n.scale(u,u,l),o.uniformMatrix4fv(s.uProjMatrix,!1,u),v(o,s,i,t.z),_(o,s,e),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,a.vertexIndices),o.drawElements(o.TRIANGLES,w.length,o.UNSIGNED_SHORT,0)},e.exports=i},{"../shaders/fragmentNormal":72,"../shaders/vertexNormal":74,"../util/clearOwnProperties":91,"./WebGlCommon":66,"gl-matrix":3}],66:[function(t,e,r){"use strict";function i(t,e,r){var i=t.createShader(e);if(t.shaderSource(i,r),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))throw t.getShaderInfoLog(i);return i}function n(t,e,r,n,o){var s=i(t,t.VERTEX_SHADER,e),a=i(t,t.FRAGMENT_SHADER,r),u=t.createProgram();if(t.attachShader(u,s),t.attachShader(u,a),t.linkProgram(u),!t.getProgramParameter(u,t.LINK_STATUS))throw t.getProgramInfoLog(u);for(var h=0;h<n.length;h++){var l=n[h];if(u[l]=t.getAttribLocation(u,l),-1===u[l])throw new Error("Shader program has no "+l+" attribute")}for(var c=0;c<o.length;c++){var p=o[c];if(u[p]=t.getUniformLocation(u,p),-1===u[p])throw new Error("Shader program has no "+p+" uniform")}return u}function o(t,e){for(var r=t.getAttachedShaders(e),i=0;i<r.length;i++){var n=r[i];t.detachShader(e,n),t.deleteShader(n)}t.deleteProgram(e)}function s(t,e,r,i){var n=t.createBuffer();return t.bindBuffer(e,n),t.bufferData(e,i,r),n}function a(t,e,r,i){return{vertexIndices:s(t,t.ELEMENT_ARRAY_BUFFER,t.STATIC_DRAW,new Uint16Array(e)),vertexPositions:s(t,t.ARRAY_BUFFER,t.STATIC_DRAW,new Float32Array(r)),textureCoords:s(t,t.ARRAY_BUFFER,t.STATIC_DRAW,new Float32Array(i))}}function u(t,e){t.deleteBuffer(e.vertexIndices),t.deleteBuffer(e.vertexPositions),t.deleteBuffer(e.textureCoords)}function h(t,e){for(var r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),i=0;i<r;i++)t.enableVertexAttribArray(i)}function l(t,e){for(var r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),i=0;i<r;i++)t.disableVertexAttribArray(i)}function c(t,e,r){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,r._texture),t.uniform1i(e.uSampler,0)}function p(t,e,r,i){var n=((r+1)*v-i)/(v*m);t.uniform1f(e.uDepth,n)}function f(t,e,r){var i=M;e&&null!=e.opacity&&(i=e.opacity),t.uniform1f(r.opacity,i);var n=b;e&&e.colorOffset&&(n=e.colorOffset),t.uniform4fv(r.colorOffset,n);var o=x;e&&e.colorMatrix&&(o=e.colorMatrix),t.uniformMatrix4fv(r.colorMatrix,!1,o)}function d(t,e,r,i){if(0===r.x&&1===r.width&&0===r.y&&1===r.height)return t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),void w.identity(i);var n=r.x,o=_(n,0,1),s=o-n,a=1-o,u=_(r.width-s,0,a),h=r.width-u,l=1-r.height-r.y,c=_(l,0,1),p=c-l,f=1-c,d=_(r.height-p,0,f),m=r.height-d;g.set(T,r.width/u,r.height/d,1),g.set(E,(h-s)/u,(m-p)/d,0),w.identity(i),w.translate(i,i,E),w.scale(i,i,T),t.viewport(t.drawingBufferWidth*o,t.drawingBufferHeight*c,t.drawingBufferWidth*u,t.drawingBufferHeight*d)}var m=256,v=256,_=t("../util/clamp"),y=t("gl-matrix").vec4,g=t("gl-matrix").vec3,w=t("gl-matrix").mat4,M=1,b=y.create(),x=w.create();w.identity(x);var E=g.create(),T=g.create();e.exports={createShaderProgram:n,destroyShaderProgram:o,createConstantBuffers:a,destroyConstantBuffers:u,enableAttributes:h,disableAttributes:l,setTexture:c,setDepth:p,setViewport:d,setupPixelEffectUniforms:f}},{"../util/clamp":90,"gl-matrix":3}],67:[function(t,e,r){"use strict";function i(){this.constructor.super_.apply(this,arguments)}var n=t("./WebGlBase");t("../util/inherits")(i,n),e.exports=i},{"../util/inherits":104,"./WebGlBase":65}],68:[function(t,e,r){"use strict";function i(t){this.gl=t,this.invProjMatrix=n.create(),this.viewportMatrix=n.create(),this.constantBuffers=a(t,g,w,M),this.shaderProgram=h(t,_,y,b,x)}var n=t("gl-matrix").mat4,o=t("../util/clearOwnProperties"),s=t("./WebGlCommon"),a=s.createConstantBuffers,u=s.destroyConstantBuffers,h=s.createShaderProgram,l=s.destroyShaderProgram,c=s.enableAttributes,p=s.disableAttributes,f=s.setViewport,d=s.setupPixelEffectUniforms,m=s.setDepth,v=s.setTexture,_=t("../shaders/vertexEquirect"),y=t("../shaders/fragmentEquirect"),g=[0,1,2,0,2,3],w=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],M=[0,0,1,0,1,1,0,1],b=["aVertexPosition"],x=["uDepth","uOpacity","uSampler","uInvProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix","uTextureX","uTextureY","uTextureWidth","uTextureHeight"];i.prototype.destroy=function(){u(this.gl,this.constantBuffers),l(this.gl,this.shaderProgram),o(this)},i.prototype.startLayer=function(t,e){var r=this.gl,i=this.shaderProgram,o=this.constantBuffers,s=this.invProjMatrix,a=this.viewportMatrix;r.useProgram(i),c(r,i),f(r,t,e,a),r.uniformMatrix4fv(i.uViewportMatrix,!1,a),r.bindBuffer(r.ARRAY_BUFFER,o.vertexPositions),r.vertexAttribPointer(i.aVertexPosition,3,r.FLOAT,r.FALSE,0,0),r.bindBuffer(r.ARRAY_BUFFER,o.textureCoords),n.copy(s,t.view().projection()),n.invert(s,s),r.uniformMatrix4fv(i.uInvProjMatrix,!1,s);var u=t.effects().textureCrop||{},h=null!=u.x?u.x:0,l=null!=u.y?u.y:0,p=null!=u.width?u.width:1,m=null!=u.height?u.height:1;r.uniform1f(i.uTextureX,h),r.uniform1f(i.uTextureY,l),r.uniform1f(i.uTextureWidth,p),r.uniform1f(i.uTextureHeight,m),d(r,t.effects(),{opacity:i.uOpacity,colorOffset:i.uColorOffset,colorMatrix:i.uColorMatrix})},i.prototype.endLayer=function(t,e){var r=this.gl,i=this.shaderProgram;p(r,i)},i.prototype.renderTile=function(t,e,r,i){var n=this.gl,o=this.shaderProgram,s=this.constantBuffers;m(n,o,i,t.z),v(n,o,e),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s.vertexIndices),n.drawElements(n.TRIANGLES,g.length,n.UNSIGNED_SHORT,0)},e.exports=i},{"../shaders/fragmentEquirect":71,"../shaders/vertexEquirect":73,"../util/clearOwnProperties":91,"./WebGlCommon":66,"gl-matrix":3}],69:[function(t,e,r){"use strict";function i(){this.constructor.super_.apply(this,arguments)}var n=t("./WebGlBase");t("../util/inherits")(i,n),e.exports=i},{"../util/inherits":104,"./WebGlBase":65}],70:[function(t,e,r){"use strict";function i(t){switch(t.type){case"webgl":t.registerRenderer("flat","flat",o),t.registerRenderer("cube","rectilinear",n),t.registerRenderer("equirect","rectilinear",s);break;case"css":t.registerRenderer("flat","flat",u),t.registerRenderer("cube","rectilinear",a);break;case"flash":t.registerRenderer("flat","flat",l),t.registerRenderer("cube","rectilinear",h);break;default:throw new Error("Unknown stage type: "+t.type)}}var n=t("./WebGlCube"),o=t("./WebGlFlat"),s=t("./WebGlEquirect"),a=t("./CssCube"),u=t("./CssFlat"),h=t("./FlashCube"),l=t("./FlashFlat");e.exports=i},{"./CssCube":60,"./CssFlat":61,"./FlashCube":63,"./FlashFlat":64,"./WebGlCube":67,"./WebGlEquirect":68,"./WebGlFlat":69}],71:[function(t,e,r){"use strict";e.exports=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform float uTextureX;","uniform float uTextureY;","uniform float uTextureWidth;","uniform float uTextureHeight;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec4 vRay;","const float PI = 3.14159265358979323846264;","void main(void) {","  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);","  float phi  = acos(vRay.y * r);","  float theta = atan(vRay.x, -1.0*vRay.z);","  float s = 0.5 + 0.5 * theta / PI;","  float t = 1.0 - phi / PI;","  s = s * uTextureWidth + uTextureX;","  t = t * uTextureHeight + uTextureY;","  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join("\n")},{}],72:[function(t,e,r){"use strict";e.exports=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float;","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec2 vTextureCoord;","void main(void) {","  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join("\n")},{}],73:[function(t,e,r){"use strict";e.exports=["attribute vec3 aVertexPosition;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uInvProjMatrix;","varying vec4 vRay;","void main(void) {","  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);","  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);","}"].join("\n")},{}],74:[function(t,e,r){"use strict";e.exports=["attribute vec3 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uProjMatrix;","varying vec2 vTextureCoord;","void main(void) {","  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);","  gl_Position.z = uDepth * gl_Position.w;","  vTextureCoord = aTextureCoord;","}"].join("\n")},{}],75:[function(t,e,r){"use strict";function i(t,e){e=e||{},this._loadPool=new a({concurrency:e.concurrency||p}),this._retryDelay=e.retryDelay||f,this._retryMap={},this._sourceFromTile=t}function n(t){var e="\\{("+t+")\\}";return new RegExp(e,"g")}var o=t("minimal-event-emitter"),s=t("../NetworkError"),a=t("../collections/WorkPool"),u=t("../util/chain"),h=t("../util/delay"),l=t("../util/now"),c={x:"x",y:"y",z:"z",f:"face"},p=4,f=1e4;o(i),i.prototype.loadAsset=function(t,e,r){var i,n=this,o=this._retryDelay,a=this._retryMap,c=this._sourceFromTile(e),p=c.url,f=c.rect,d=t.loadImage.bind(t,p,f),m=function(t){return n._loadPool.push(d,function(r,i){r?(r instanceof s&&(a[p]=l(),n.emit("networkError",i,r)),t(r,e)):(delete a[p],t(null,e,i))})},v=a[p];if(null!=v){var _=l(),y=_-v;y<o?i=o-y:(i=0,delete a[p])}var g=h.bind(null,i);return u(g,m)(r)},i.fromString=function(t,e){function r(e){var r=t;for(var i in c){var o=c[i],s=n(i),a=e.hasOwnProperty(o)?e[o]:"";r=r.replace(s,a)}return{url:r}}function o(t){return 0===t.z?s(t):r(t)}function s(t){var r=a.indexOf(t.face)/6;return{url:e.cubeMapPreviewUrl,rect:{x:0,y:r,width:1,height:1/6}}}e=e||{};var a=e&&e.cubeMapPreviewFaceOrder||"bdflru";return new i(e.cubeMapPreviewUrl?o:r,e)},e.exports=i},{"../NetworkError":18,"../collections/WorkPool":33,"../util/chain":89,"../util/delay":99,"../util/now":108,"minimal-event-emitter":14}],76:[function(t,e,r){"use strict";function i(t){this._asset=t}i.prototype.asset=function(){return this._asset},i.prototype.loadAsset=function(t,e,r){function i(){clearTimeout(o),r.apply(null,arguments)}var n=this,o=setTimeout(function(){r(null,e,n._asset)},0);return i},e.exports=i},{}],77:[function(t,e,r){"use strict";function i(t){this.constructor.super_.call(this,t),this._loader=new s(this),this._domElement=document.createElement("div"),l(this._domElement),c(this._domElement)}function n(t,e,r){var i=document.createElement("canvas");l(i),p(i),this._canvas=i,this._timestamp=null,this.refresh(e,r)}var o=t("./Stage"),s=t("../loaders/HtmlImage"),a=t("../support/Css"),u=t("bowser"),h=t("../util/inherits"),l=t("../util/dom").setAbsolute,c=t("../util/dom").setFullSize,p=t("../util/dom").setNullTransformOrigin,f=t("../util/clearOwnProperties"),d={padSize:u.ios?0:3,reverseLevelDepth:u.ios,useNullTransform:u.ios,perspectiveNudge:u.webkit||u.gecko?.001:0};h(i,o),i.prototype.destroy=function(){this.constructor.super_.prototype.destroy.call(this)},i.supported=function(){return a()},i.prototype.domElement=function(){return this._domElement},i.prototype.setSizeForType=function(){},i.prototype.loadImage=function(t,e,r){return this._loader.loadImage(t,e,r)},i.prototype.validateLayer=function(t){},i.prototype.createRenderer=function(t){return new t(this._domElement,d)},i.prototype.destroyRenderer=function(t){t.destroy()},i.prototype.startFrame=function(){},i.prototype.endFrame=function(){},i.prototype.takeSnapshot=function(){throw new Error("CssStage: takeSnapshot not implemented")},i.type=i.prototype.type="css",n.prototype.refresh=function(t,e){var r=e.timestamp();if(r!==this._timestamp){this._timestamp=r;var i=this._canvas,n=i.getContext("2d"),o=e.element(),s=t.width(),a=t.height(),u=d.padSize,h=t.padTop()?u:0,l=t.padBottom()?u:0,c=t.padLeft()?u:0,p=t.padRight()?u:0;i.width=c+s+p,i.height=h+a+l,n.drawImage(o,c,h,s,a);var f;for(f=0;f<h;f++)n.drawImage(i,c,h,s,1,c,f,s,1);for(f=0;f<c;f++)n.drawImage(i,c,h,1,a,f,h,1,a);for(f=0;f<l;f++)n.drawImage(i,c,h+a-1,s,1,c,h+a+f,s,1);for(f=0;f<p;f++)n.drawImage(i,c+s-1,h,1,a,c+s+f,h,1,a)}},n.prototype.destroy=function(){f(this)},i.TextureClass=i.prototype.TextureClass=n,e.exports=i},{"../loaders/HtmlImage":58,"../support/Css":82,"../util/clearOwnProperties":91,"../util/dom":100,"../util/inherits":104,"./Stage":80,bowser:1}],78:[function(t,e,r){"use strict";function i(){return window[g].__next++}function n(t){if(this.constructor.super_.call(this,t),this._wmode=t&&t.wmode||_,this._swfPath=t&&t.swfPath||y,!y)throw new Error("Missing SWF path");this._flashStageId=i(),this._callbacksObj=window[g][this._flashStageId]={},this._stageCallbacksObjVarName=g+"["+this._flashStageId+"]",this._callbackListeners={};for(var e=0;e<w.length;e++)this._callbacksObj[w[e]]=this._callListeners(w[e]);this._loader=new u(this),this._loadImageQueue=new l,this._loadImageQueue.pause(),this._flashReady=!1,this._nextLayerId=0;var r=o(this._swfPath,this._flashStageId,this._stageCallbacksObjVarName);this._domElement=r.root,this._blockingElement=r.blocking,this._flashElement=r.flash,this._checkReadyTimer=setInterval(this._checkReady.bind(this),50)}function o(t,e,r){var i=document.createElement("div");f(i),d(i);var n="marzipano-flash-stage-"+e,o='<object id="'+n+'" name="'+n+'" type="application/x-shockwave-flash" data="'+t+'">',s="";s+='<param name="movie" value="'+t+'" />',s+='<param name="allowscriptaccess" value="always" />',s+='<param name="flashvars" value="callbacksObjName='+r+'" />',s+='<param name="wmode" value="transparent" />',o+=s,o+="</object>";var a=document.createElement("div");a.innerHTML=o;var u=a.firstChild;f(u),d(u),i.appendChild(u);var h=document.createElement("div");return f(h),d(h),m(h),i.appendChild(h),{root:i,flash:u,blocking:h}}function s(t,e,r){var i=r.element(),n=e.width(),o=e.height(),s=M.padSize,a=e.padTop()?s:0,u=e.padBottom()?s:0,h=e.padLeft()?s:0,l=e.padRight()?s:0,c=t._flashElement.createTexture(i,n,o,a,u,h,l);this._stage=t,this._textureId=c}var a=t("./Stage"),u=t("../loaders/FlashImage"),h=t("../support/Flash"),l=t("../collections/WorkQueue"),c=t("../util/inherits"),p=t("../util/defer"),f=t("../util/dom").setAbsolute,d=t("../util/dom").setFullSize,m=t("../util/dom").setBlocking,v=t("../util/clearOwnProperties"),_="transparent",y=function(){var t=document.currentScript;if(!t){var e=document.getElementsByTagName("script");t=e.length?e[e.length-1]:null}if(!t)return null;var r=t.src,i=r.lastIndexOf("/");return(r=i>=0?r.slice(0,i+1):"")+"marzipano.swf"}(),g="MarzipanoFlashCallbackMap";g in window||(window[g]={__next:0});var w=["imageLoaded"],M={padSize:3};c(n,a),n.prototype.destroy=function(){window[g][this._flashStageId]=null,null!=this._checkReadyTimer&&clearInterval(this._checkReadyTimer),this.constructor.super_.prototype.destroy.call(this)},n.supported=function(){return h()},n.prototype.domElement=function(){return this._domElement},n.prototype.flashElement=function(){return this._flashElement},n.prototype.setSizeForType=function(){},n.prototype.loadImage=function(t,e,r){var i=this._loader.loadImage.bind(this._loader,t,e);return this._loadImageQueue.push(i,r)},n.prototype.validateLayer=function(t){},n.prototype.addFlashCallbackListener=function(t,e){this._callbackListeners[t]=this._callbackListeners[t]||[],this._callbackListeners[t].push(e)},n.prototype.removeFlashCallbackListener=function(t,e){var r=this._callbackListeners[t]||[],i=r.indexOf(e);i>=0&&r.splice(i,1)},n.prototype._callListeners=function(t){var e=this;return function(){for(var r=e._callbackListeners[t]||[],i=0;i<r.length;i++){p(r[i],arguments)}}},n.prototype._checkReady=function(){return!!(this._flashElement&&this._flashElement.isReady&&this._flashElement.isReady())&&(this._flashReady=!0,clearTimeout(this._checkReadyTimer),this._checkReadyTimer=null,this._loadImageQueue.resume(),this.emit("renderInvalid"),!0)},n.prototype.createRenderer=function(t){return new t(this._flashElement,++this._nextLayerId,M)},n.prototype.destroyRenderer=function(t){t.destroy()},n.prototype.startFrame=function(){},n.prototype.endFrame=function(){},n.prototype.takeSnapshot=function(t){"object"==typeof t&&null!=t||(t={});var e=t.quality;if(void 0===e&&(e=75),"number"!=typeof e||e<0||e>100)throw new Error("FlashStage: Snapshot quality needs to be a number between 0 and 100");return this._flashElement.takeSnapshot(e)},n.type=n.prototype.type="flash",s.prototype.refresh=function(t,e){},s.prototype.destroy=function(){this._stage._flashElement.destroyTexture(this._textureId),v(this)},n.TextureClass=n.prototype.TextureClass=s,e.exports=n},{"../collections/WorkQueue":34,"../loaders/FlashImage":57,"../support/Flash":83,"../util/clearOwnProperties":91,"../util/defer":97,"../util/dom":100,"../util/inherits":104,"./Stage":80}],79:[function(t,e,r){"use strict";function i(){this._renderers={}}i.prototype.set=function(t,e,r){this._renderers[t]||(this._renderers[t]={}),this._renderers[t][e]=r},i.prototype.get=function(t,e){return this._renderers[t]&&this._renderers[t][e]||null},e.exports=i},{}],80:[function(t,e,r){"use strict";function i(t,e){return t.cmp(e)}function n(t,e){return-t.cmp(e)}function o(t){this._progressive=!(!t||!t.progressive),this._layers=[],this._renderers=[],this._tilesToLoad=[],this._tilesToRender=[],this._tmpVisible=[],this._tmpChildren=[],this._width=0,this._height=0,this._tmpRect={},this._tmpSize={},this._createTextureWorkQueue=new a,this._emitRenderInvalid=this._emitRenderInvalid.bind(this),this._rendererRegistry=new p}var s=t("minimal-event-emitter"),a=t("../collections/WorkQueue"),u=t("../util/calcRect"),h=t("../util/async"),l=t("../util/cancelize"),c=t("../util/clearOwnProperties"),p=t("./RendererRegistry");s(o),o.prototype.destroy=function(){this.removeAllLayers(),c(this)},o.prototype.registerRenderer=function(t,e,r){return this._rendererRegistry.set(t,e,r)},o.prototype.domElement=function(){throw new Error("Stage implementation must override domElement")},o.prototype.width=function(){return this._width},o.prototype.height=function(){return this._height},o.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},o.prototype.setSize=function(t){this._width=t.width,this._height=t.height,this.setSizeForType(),this.emit("resize"),this._emitRenderInvalid()},o.prototype.setSizeForType=function(t){throw new Error("Stage implementation must override setSizeForType")},o.prototype.loadImage=function(){throw new Error("Stage implementation must override loadImage")},o.prototype._emitRenderInvalid=function(){this.emit("renderInvalid")},o.prototype.validateLayer=function(t){throw new Error("Stage implementation must override validateLayer")},o.prototype.listLayers=function(){return[].concat(this._layers)},o.prototype.hasLayer=function(t){return this._layers.indexOf(t)>=0},o.prototype.addLayer=function(t,e){if(this._layers.indexOf(t)>=0)throw new Error("Layer already in stage");if(null==e&&(e=this._layers.length),e<0||e>this._layers.length)throw new Error("Invalid layer position");this.validateLayer(t);var r=t.geometry().type,i=t.view().type,n=this._rendererRegistry.get(r,i);if(!n)throw new Error("No "+this.type+" renderer avaiable for "+r+" geometry and "+i+" view");var o=this.createRenderer(n);this._layers.splice(e,0,t),this._renderers.splice(e,0,o),t.addEventListener("viewChange",this._emitRenderInvalid),t.addEventListener("effectsChange",this._emitRenderInvalid),t.addEventListener("fixedLevelChange",this._emitRenderInvalid),t.addEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()},o.prototype.moveLayer=function(t,e){var r=this._layers.indexOf(t);if(r<0)throw new Error("No such layer in stage");if(e<0||e>=this._layers.length)throw new Error("Invalid layer position");t=this._layers.splice(r,1)[0];var i=this._renderers.splice(r,1)[0];this._layers.splice(e,0,t),this._renderers.splice(e,0,i),this._emitRenderInvalid()},o.prototype.removeLayer=function(t){var e=this._layers.indexOf(t);if(e<0)throw new Error("No such layer in stage");var r=this._layers.splice(e,1)[0],i=this._renderers.splice(e,1)[0];this.destroyRenderer(i),r.removeEventListener("viewChange",this._emitRenderInvalid),r.removeEventListener("effectsChange",this._emitRenderInvalid),r.removeEventListener("fixedLevelChange",this._emitRenderInvalid),r.removeEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()},o.prototype.removeAllLayers=function(){for(;this._layers.length>0;)this.removeLayer(this._layers[0])},o.prototype.startFrame=function(){throw new Error("Stage implementation must override startFrame")},o.prototype.endFrame=function(){throw new Error("Stage implementation must override endFrame")},o.prototype.render=function(){var t,e,r,i=this._tilesToLoad,n=this._tilesToRender,o=!0,s=this._width,a=this._height,h=this._tmpRect,l=this._tmpSize;if(!(s<=0||a<=0)){for(this.startFrame(),t=0;t<this._layers.length;t++)this._layers[t].textureStore().startFrame();for(t=0;t<this._layers.length;t++){var c,p,f=this._layers[t],d=f.effects(),m=f.view(),v=f.textureStore(),_=this._renderers[t],y=this._layers.length-t;if(u(s,a,d&&d.rect,h),!(h.width<=0||h.height<=0)){for(l.width=h.width*this._width,l.height=h.height*this._height,m.setSize(l),_.startLayer(f,h),r=this._collectTiles(f,v),e=0;e<i.length;e++)c=i[e],v.markTile(c);for(e=0;e<n.length;e++)c=n[e],p=v.texture(c),_.renderTile(c,p,f,y);f.emit("renderComplete",r),r||(o=!1),_.endLayer(f,h)}}for(t=0;t<this._layers.length;t++)this._layers[t].textureStore().endFrame();this.endFrame(),this.emit("renderComplete",o)}},o.prototype._collectTiles=function(t,e){var r=this._tilesToLoad,o=this._tilesToRender,s=this._tmpVisible;r.length=0,o.length=0,s.length=0,t.visibleTiles(s);for(var a=!0,u=0;u<s.length;u++){var h,l=s[u];this._collectTileToLoad(l),e.texture(l)?(h=!1,this._collectTileToRender(l)):(h=this._collectChildren(l,e),a=!1),this._collectParents(l,e,h)}return r.sort(i),o.sort(n),a},o.prototype._collectChildren=function(t,e){var r=this._tmpChildren,i=!0;do{if(r.length=0,!t.children(r))break;i=!1;for(var n=0;n<r.length;n++)t=r[n],e.texture(t)?(this._collectTileToLoad(t),this._collectTileToRender(t)):i=!0}while(i&&1===r.length);return i},o.prototype._collectParents=function(t,e,r){for(var i=this._progressive;(i||r)&&null!=(t=t.parent());){if(r)if(e.texture(t))this._collectTileToRender(t),r=!1;else if(!this._progressive)continue;this._collectTileToLoad(t)||(i=!1)}return r},o.prototype._collectTileToLoad=function(t){return this._collectTileIntoList(t,this._tilesToLoad)},o.prototype._collectTileToRender=function(t){return this._collectTileIntoList(t,this._tilesToRender)},o.prototype._collectTileIntoList=function(t,e){for(var r=!1,i=0;i<e.length;i++)if(t.equals(e[i])){r=!0;break}return r||e.push(t),!r},o.prototype.createTexture=function(t,e,r){function i(){return new n.TextureClass(n,t,e)}var n=this,o=l(h(i));return this._createTextureWorkQueue.push(o,function(i,n){r(i,t,e,n)})},e.exports=o},{"../collections/WorkQueue":34,"../util/async":86,"../util/calcRect":87,"../util/cancelize":88,"../util/clearOwnProperties":91,"./RendererRegistry":79,"minimal-event-emitter":14}],81:[function(t,e,r){"use strict";function i(t,e){var r={alpha:!0,premultipliedAlpha:!0,antialias:!(!e||!e.antialias),preserveDrawingBuffer:!(!e||!e.preserveDrawingBuffer)};v&&"undefined"!=typeof WebGLDebugUtils&&(console.log("Using WebGL lost context simulator"),t=WebGLDebugUtils.makeLostContextSimulatingCanvas(t));var i=t.getContext&&(t.getContext("webgl",r)||t.getContext("experimental-webgl",r));if(!i)throw new Error("Could not get WebGL context");return v&&"undefined"!=typeof WebGLDebugUtils&&(i=WebGLDebugUtils.makeDebugContext(i),console.log("Using WebGL debug context")),i}function n(t){t=t||{};var e=this;this.constructor.super_.call(this,t),this._generateMipmaps=null!=t.generateMipmaps&&t.generateMipmaps,this._loader=new a(this),this._domElement=document.createElement("canvas"),f(this._domElement),d(this._domElement),this._gl=i(this._domElement,t),this._handleContextLoss=function(){e.emit("webglcontextlost"),e._gl=null},this._domElement.addEventListener("webglcontextlost",this._handleContextLoss),this._rendererInstances=[]}function o(t,e,r){this._stage=t,this._gl=t._gl,this._texture=null,this._timestamp=null,this._width=this._height=null,this.refresh(e,r)}var s=t("./Stage"),a=t("../loaders/HtmlImage"),u=t("../support/WebGl"),h=t("bowser"),l=t("../util/inherits"),c=t("../util/pixelRatio"),p=t("../util/ispot"),f=t("../util/dom").setAbsolute,d=t("../util/dom").setFullSize,m=t("../util/clearOwnProperties"),v="undefined"!=typeof MARZIPANODEBUG&&MARZIPANODEBUG.webGl,_={
videoUseTexImage2D:h.chrome};l(n,s),n.prototype.destroy=function(){this._domElement.removeEventListener("webglcontextlost",this._handleContextLoss),this.constructor.super_.prototype.destroy.call(this)},n.supported=function(){return u()},n.prototype.domElement=function(){return this._domElement},n.prototype.webGlContext=function(){return this._gl},n.prototype.setSizeForType=function(){var t=c();this._domElement.width=t*this._width,this._domElement.height=t*this._height},n.prototype.loadImage=function(t,e,r){return this._loader.loadImage(t,e,r)},n.prototype.maxTextureSize=function(){return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)},n.prototype.validateLayer=function(t){var e=t.geometry().maxTileSize(),r=this.maxTextureSize();if(e>r)throw new Error("Layer has level with tile size larger than maximum texture size ("+e+" vs. "+r+")")},n.prototype.createRenderer=function(t){for(var e=this._rendererInstances,r=0;r<e.length;r++)if(e[r]instanceof t)return e[r];var i=new t(this._gl);return e.push(i),i},n.prototype.destroyRenderer=function(t){var e=this._rendererInstances;if(this._renderers.indexOf(t)<0){t.destroy();var r=e.indexOf(t);r>=0&&e.splice(r,1)}},n.prototype.startFrame=function(){var t=this._gl;if(!t)throw new Error("Bad WebGL context - maybe context was lost?");t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA)},n.prototype.endFrame=function(){},n.prototype.takeSnapshot=function(t){"object"==typeof t&&null!=t||(t={});var e=t.quality;if(void 0===e&&(e=75),"number"!=typeof e||e<0||e>100)throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");return this.render(),this._domElement.toDataURL("image/jpeg",e/100)},n.type=n.prototype.type="webgl",o.prototype.refresh=function(t,e){var r,i=this._gl,n=this._stage,o=e.timestamp();if(o!==this._timestamp){var s=e.element(),a=e.width(),u=e.height();if(a!==this._width||u!==this._height){var h=n.maxTextureSize();if(a>h)throw new Error("Texture width larger than max size ("+a+" vs. "+h+")");if(u>h)throw new Error("Texture height larger than max size ("+u+" vs. "+h+")");this._texture&&i.deleteTexture(r),r=this._texture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,s)}else r=this._texture,i.bindTexture(i.TEXTURE_2D,r),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s instanceof HTMLVideoElement&&_.videoUseTexImage2D?i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,s):i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,s);n._generateMipmaps&&p(a)&&p(u)?(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR_MIPMAP_LINEAR),i.generateMipmap(i.TEXTURE_2D)):(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR)),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,null),this._timestamp=o,this._width=a,this._height=u}},o.prototype.destroy=function(){this._texture&&this._gl.deleteTexture(this._texture),m(this)},n.TextureClass=n.prototype.TextureClass=o,e.exports=n},{"../loaders/HtmlImage":58,"../support/WebGl":84,"../util/clearOwnProperties":91,"../util/dom":100,"../util/inherits":104,"../util/ispot":105,"../util/pixelRatio":110,"./Stage":80,bowser:1}],82:[function(t,e,r){"use strict";function i(){var t=s("perspective"),e=document.createElement("div"),r="undefined"!=typeof e.style[t];if(r&&"WebkitPerspective"===t){var i="__marzipano_test_css3d_support__",n=document.createElement("style");n.textContent="@media(-webkit-transform-3d){#"+i+"{height: 3px;})",document.getElementsByTagName("head")[0].appendChild(n),e.id=i,document.body.appendChild(e),r=e.offsetHeight>0,n.parentNode.removeChild(n),e.parentNode.removeChild(e)}return r}function n(){return o!==undefined?o:o=i()}var o,s=t("../util/dom").prefixProperty;e.exports=n},{"../util/dom":100}],83:[function(t,e,r){"use strict";function i(){var t=null,e=navigator.plugins,r=navigator.mimeTypes,i=null;if(e&&e["Shockwave Flash"]&&r&&r["application/x-shockwave-flash"]&&r["application/x-shockwave-flash"].enabledPlugin)i=e["Shockwave Flash"].description,i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),t=[0,0,0],t[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10),t[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),t[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;else if(window.ActiveXObject)try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");n&&(i=n.GetVariable("$version"))&&(i=i.split(" ")[1].split(","),t=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}catch(o){}return t}function n(){var t=i();return t&&(t[0]>=11||10===t[0]&&t[1]>=1)}function o(){return s!==undefined?s:s=n()}var s;e.exports=o},{}],84:[function(t,e,r){"use strict";function i(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}function n(){return o!==undefined?o:o=i()}var o;e.exports=n},{}],85:[function(t,e,r){"use strict";function i(){var t=document.createElement("a").style;t.cssText="pointer-events:auto";var e="auto"===t.pointerEvents,r=s.msie&&parseFloat(s.version)<11;return e&&!r}function n(){return o!==undefined?o:o=i()}var o,s=t("bowser");e.exports=n},{bowser:1}],86:[function(t,e,r){"use strict";function i(t){return function(e){var r,i;try{i=t()}catch(n){r=n}finally{r?e(r):e(null,i)}}}e.exports=i},{}],87:[function(t,e,r){"use strict";function i(t,e,r,i){i=i||{};var n;n=null!=r&&null!=r.absoluteWidth?r.absoluteWidth/t:null!=r&&null!=r.relativeWidth?r.relativeWidth:1;var o;o=r&&null!=r.absoluteHeight?r.absoluteHeight/e:null!=r&&null!=r.relativeHeight?r.relativeHeight:1;var s;s=null!=r&&null!=r.absoluteX?r.absoluteX/t:null!=r&&null!=r.relativeX?r.relativeX:0;var a;return a=null!=r&&null!=r.absoluteY?r.absoluteY/e:null!=r&&null!=r.relativeY?r.relativeY:0,i.x=s,i.y=a,i.width=n,i.height=o,i}e.exports=i},{}],88:[function(t,e,r){"use strict";function i(t){return function(){function e(){i.apply(null,arguments)}if(!arguments.length)throw new Error("cancelized: expected at least one argument");var r=Array.prototype.slice.call(arguments,0),i=r[r.length-1]=n(r[r.length-1]);return t.apply(null,r),e}}var n=t("./once");e.exports=i},{"./once":109}],89:[function(t,e,r){"use strict";function i(){var t=Array.prototype.slice.call(arguments,0);return function(){function e(){if(arguments[0])return o=s=null,void u.apply(null,arguments);if(!i.length)return o=s=null,void u.apply(null,arguments);o=i.shift();var t=o,r=Array.prototype.slice.call(arguments,1);r.push(e);var n=o.apply(null,r);if(t===o){if("function"!=typeof n)throw new Error("chain: chaining on non-cancellable function");s=n}}function r(){s&&s.apply(null,arguments)}var i=t.slice(0),o=null,s=null,a=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],u=arguments.length?arguments[arguments.length-1]:n;return a.unshift(null),e.apply(null,a),r}}var n=t("./noop");e.exports=i},{"./noop":107}],90:[function(t,e,r){"use strict";function i(t,e,r){return Math.min(Math.max(t,e),r)}e.exports=i},{}],91:[function(t,e,r){"use strict";function i(t){for(var e in t)t.hasOwnProperty(e)&&(t[e]=undefined)}e.exports=i},{}],92:[function(t,e,r){"use strict";function i(t,e){return t<e?-1:t>e?1:0}e.exports=i},{}],93:[function(t,e,r){"use strict";function i(){var t=arguments;return function(e){for(var r=e,i=0;i<t.length;i++){r=t[i].call(null,r)}return r}}e.exports=i},{}],94:[function(t,e,r){"use strict";function i(t,e,r){return 2*Math.atan(r*Math.tan(t/2)/e)}function n(t,e,r){return i(t,e,r)}function o(t,e,r){return i(t,e,Math.sqrt(e*e+r*r))}function s(t,e,r){return i(t,r,e)}function a(t,e,r){return i(t,r,Math.sqrt(e*e+r*r))}function u(t,e,r){return i(t,Math.sqrt(e*e+r*r),e)}function h(t,e,r){return i(t,Math.sqrt(e*e+r*r),r)}e.exports={convert:i,htov:n,htod:o,vtoh:s,vtod:a,dtoh:u,dtov:h}},{}],95:[function(t,e,r){"use strict";function i(t){return t.toPrecision(15)}e.exports=i},{}],96:[function(t,e,r){"use strict";function i(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}e.exports=i},{}],97:[function(t,e,r){"use strict";function i(t,e){function r(){e&&e.length>0?t.apply(null,e):t()}setTimeout(r,0)}e.exports=i},{}],98:[function(t,e,r){"use strict";function i(t){return t*Math.PI/180}e.exports=i},{}],99:[function(t,e,r){"use strict";function i(t,e){function r(){null!=n&&(n=null,e(null))}function i(){null!=n&&(clearTimeout(n),n=null,e.apply(null,arguments))}var n=null;return n=setTimeout(r,t),i}e.exports=i},{}],100:[function(t,e,r){"use strict";function i(t){for(var e=document.documentElement.style,r=["Moz","Webkit","Khtml","O","ms"],i=0;i<r.length;i++){var n=r[i],o=t[0].toUpperCase()+t.slice(1),s=n+o;if(s in e)return s}return t}function n(t){var e=i(t);return function(t){return t.style[e]}}function o(t){var e=i(t);return function(t,r){return t.style[e]=r}}function s(t){_(t,"translateZ(0)")}function a(t){y(t,"0 0 0")}function u(t){t.style.position="absolute"}function h(t,e,r){t.style.left=e+"px",t.style.top=r+"px"}function l(t,e,r){t.style.width=e+"px",t.style.height=r+"px"}function c(t){t.style.width=t.style.height=0}function p(t){t.style.width=t.style.height="100%"}function f(t){t.style.overflow="hidden"}function d(t){t.style.overflow="visible"}function m(t){t.style.pointerEvents="none"}function v(t){t.style.backgroundColor="#000",t.style.opacity="0",t.style.filter="alpha(opacity=0)"}var _=o("transform"),y=o("transformOrigin");e.exports={prefixProperty:i,getWithVendorPrefix:n,setWithVendorPrefix:o,setTransform:_,setTransformOrigin:y,setNullTransform:s,setNullTransformOrigin:a,setAbsolute:u,setPixelPosition:h,setPixelSize:l,setNullSize:c,setFullSize:p,setOverflowHidden:f,setOverflowVisible:d,setNoPointerEvents:m,setBlocking:v}},{}],101:[function(t,e,r){"use strict";function i(t,e){for(var r in e)t[r]=e[r];return t}e.exports=i},{}],102:[function(t,e,r){(function(t){"use strict";var r=function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0!==t?t:null}();e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],103:[function(t,e,r){"use strict";function i(){for(var t=0,e=0;e<arguments.length;e++){var r=arguments[e];t+=r,t+=r<<10,t^=r>>6}return t+=t<<3,t^=t>>11,t+=t<<15,t>=0?t:-t}e.exports=i},{}],104:[function(t,e,r){"use strict";function i(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}e.exports=i},{}],105:[function(t,e,r){"use strict";function i(t){return 0==(t&t-1)}e.exports=i},{}],106:[function(t,e,r){"use strict";function i(t,e){return(+t%(e=+e)+e)%e}e.exports=i},{}],107:[function(t,e,r){"use strict";function i(){}e.exports=i},{}],108:[function(t,e,r){"use strict";e.exports=function(){return"undefined"!=typeof performance&&performance.now?function(){return performance.now()}:function(){return Date.now()}}()},{}],109:[function(t,e,r){"use strict";function i(t){var e,r=!1;return function(){return r||(r=!0,e=t.apply(null,arguments)),e}}e.exports=i},{}],110:[function(t,e,r){"use strict";function i(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t&&t.deviceXDPI&&t.logicalXDPI)return t.deviceXDPI/t.logicalXDPI;if(t&&t.systemXDPI&&t.logicalXDPI)return t.systemXDPI/t.logicalXDPI}return n}var n=1;e.exports=i},{}],111:[function(t,e,r){"use strict";function i(t,e,r,i){if(i=i||"",n()){var u="translateX("+a(e)+"px) translateY("+a(r)+"px) translateZ(0) "+i;o(t,u)}else s(t,e,r)}var n=t("../support/Css"),o=t("./dom").setTransform,s=t("./dom").setPixelPosition,a=t("./decimal");e.exports=i},{"../support/Css":82,"./decimal":95,"./dom":100}],112:[function(t,e,r){"use strict";function i(t){return 180*t/Math.PI}e.exports=i},{}],113:[function(t,e,r){"use strict";function i(t){return"number"==typeof t&&isFinite(t)}e.exports=i},{}],114:[function(t,e,r){"use strict";function i(t){return function(){function e(){!arguments[0]||s?i.apply(null,arguments):o=t.apply(null,r)}var r=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],i=arguments.length?arguments[arguments.length-1]:n,o=null,s=!1;return r.push(e),e(!0),function(){s=!0,o.apply(null,arguments)}}}var n=t("./noop");e.exports=i},{"./noop":107}],115:[function(t,e,r){"use strict";function i(t,e,r){function i(){if(!o){var a=(n()-s)/t;a<1?(e(a),requestAnimationFrame(i)):(e(1),r())}}var o=!1,s=n();return e(0),requestAnimationFrame(i),function(){o=!0,r.apply(null,arguments)}}var n=t("./now");e.exports=i},{"./now":108}],116:[function(t,e,r){"use strict";function i(t){var e=typeof t;if("object"===e){if(null===t)return"null";if("[object Array]"===Object.prototype.toString.call(t))return"array";if("[object RegExp]"===Object.prototype.toString.call(t))return"regexp"}return e}e.exports=i},{}],117:[function(t,e,r){"use strict";function i(t,e){if(!t||null==t.mediaAspectRatio)throw new Error("mediaAspectRatio must be defined");this._x=t&&null!=t.x?t.x:f,this._y=t&&null!=t.y?t.y:d,this._zoom=t&&null!=t.zoom?t.zoom:m,this._mediaAspectRatio=t.mediaAspectRatio,this._width=t&&null!=t.width?t.width:c,this._height=t&&null!=t.height?t.height:p,this._limiter=e||null,this._projMatrix=o.create(),this._invProjMatrix=o.create(),this._frustum=[0,0,0,0],this._projectionChanged=!0,this._params={},this._vec=s.create(),this._update()}var n=t("minimal-event-emitter"),o=t("gl-matrix").mat4,s=t("gl-matrix").vec4,a=t("../util/pixelRatio"),u=t("../util/real"),h=t("../util/clamp"),l=t("../util/clearOwnProperties"),c=0,p=0,f=.5,d=.5,m=1,v=[1,0,1,0],_=[-1,-1,1,1];n(i),i.prototype.destroy=function(){l(this)},i.prototype.x=function(){return this._x},i.prototype.y=function(){return this._y},i.prototype.zoom=function(){return this._zoom},i.prototype.mediaAspectRatio=function(){return this._mediaAspectRatio},i.prototype.width=function(){return this._width},i.prototype.height=function(){return this._height},i.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},i.prototype.parameters=function(t){return t=t||{},t.x=this._x,t.y=this._y,t.zoom=this._zoom,t.mediaAspectRatio=this._mediaAspectRatio,t},i.prototype.limiter=function(){return this._limiter},i.prototype.setX=function(t){this._resetParams(),this._params.x=t,this._update(this._params)},i.prototype.setY=function(t){this._resetParams(),this._params.y=t,this._update(this._params)},i.prototype.setZoom=function(t){this._resetParams(),this._params.zoom=t,this._update(this._params)},i.prototype.offsetX=function(t){this.setX(this._x+t)},i.prototype.offsetY=function(t){this.setY(this._y+t)},i.prototype.offsetZoom=function(t){this.setZoom(this._zoom+t)},i.prototype.setMediaAspectRatio=function(t){this._resetParams(),this._params.mediaAspectRatio=t,this._update(this._params)},i.prototype.setSize=function(t){this._resetParams(),this._params.width=t.width,this._params.height=t.height,this._update(this._params)},i.prototype.setParameters=function(t){this._resetParams(),this._params.x=t.x,this._params.y=t.y,this._params.zoom=t.zoom,this._params.mediaAspectRatio=t.mediaAspectRatio,this._update(this._params)},i.prototype.setLimiter=function(t){this._limiter=t||null,this._update()},i.prototype._resetParams=function(){var t=this._params;t.x=null,t.y=null,t.zoom=null,t.mediaAspectRatio=null,t.width=null,t.height=null},i.prototype._update=function(t){null==t&&(this._resetParams(),t=this._params);var e=this._x,r=this._y,i=this._zoom,n=this._mediaAspectRatio,o=this._width,s=this._height;if(t.x=null!=t.x?t.x:e,t.y=null!=t.y?t.y:r,t.zoom=null!=t.zoom?t.zoom:i,t.mediaAspectRatio=null!=t.mediaAspectRatio?t.mediaAspectRatio:n,t.width=null!=t.width?t.width:o,t.height=null!=t.height?t.height:s,this._limiter&&!(t=this._limiter(t)))throw new Error("Bad view limiter");var a=t.x,l=t.y,c=t.zoom,p=t.mediaAspectRatio,f=t.width,d=t.height;if(!(u(a)&&u(l)&&u(c)&&u(p)&&u(f)&&u(d)))throw new Error("Bad view - suspect a broken limiter");c=h(c,1e-6,Infinity),this._x=a,this._y=l,this._zoom=c,this._mediaAspectRatio=p,this._width=f,this._height=d,a===e&&l===r&&c===i&&p===n&&f===o&&d===s||(this._projectionChanged=!0,this.emit("change")),f===o&&d===s||this.emit("resize")},i.prototype._zoomX=function(){return this._zoom},i.prototype._zoomY=function(){var t=this._mediaAspectRatio,e=this._width/this._height,r=this._zoom,i=r*t/e;return isNaN(i)&&(i=r),i},i.prototype.updateWithControlParameters=function(t){var e=this.zoom(),r=this._zoomX(),i=this._zoomY();this.offsetX(t.axisScaledX*r+t.x*e),this.offsetY(t.axisScaledY*i+t.y*e),this.offsetZoom(t.zoom*e)},i.prototype._updateProjection=function(){var t=this._projMatrix,e=this._invProjMatrix,r=this._frustum;if(this._projectionChanged){var i=this._x,n=this._y,s=this._zoomX(),a=this._zoomY(),u=r[0]=.5-n+.5*a,h=r[1]=i-.5+.5*s,l=r[2]=.5-n-.5*a,c=r[3]=i-.5-.5*s;o.ortho(t,c,h,l,u,-1,1),o.invert(e,t),this._projectionChanged=!1}},i.prototype.projection=function(){return this._updateProjection(),this._projMatrix},i.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix},i.prototype.intersects=function(t){this._updateProjection();for(var e=this._frustum,r=0;r<e.length;r++){for(var i=e[r],n=v[r],o=_[r],s=!1,a=0;a<t.length;a++){var u=t[a];if(o<0&&u[n]<i||o>0&&u[n]>i){s=!0;break}}if(!s)return!1}return!0},i.prototype.selectLevel=function(t){for(var e=a()*this.width(),r=this._zoom,i=0;i<t.length;i++){var n=t[i];if(r*n.width()>=e)return n}return t[t.length-1]},i.prototype.coordinatesToScreen=function(t,e){var r=this._vec;e||(e={});var i=this._width,n=this._height;if(i<=0||n<=0)return e.x=null,e.y=null,null;var o=t&&null!=t.x?t.x:f,a=t&&null!=t.y?t.y:d;s.set(r,o-.5,.5-a,-1,1),s.transformMat4(r,r,this.projection());for(var u=0;u<3;u++)r[u]/=r[3];return e.x=i*(r[0]+1)/2,e.y=n*(1-r[1])/2,e},i.prototype.screenToCoordinates=function(t,e){var r=this._vec;e||(e={});var i=this._width,n=this._height,o=2*t.x/i-1,a=1-2*t.y/n;return s.set(r,o,a,1,1),s.transformMat4(r,r,this.inverseProjection()),e.x=.5+r[0],e.y=.5-r[1],e},i.limit={x:function(t,e){return function(r){return r.x=h(r.x,t,e),r}},y:function(t,e){return function(r){return r.y=h(r.y,t,e),r}},zoom:function(t,e){return function(r){return r.zoom=h(r.zoom,t,e),r}},resolution:function(t){return function(e){if(e.width<=0||e.height<=0)return e;var r=e.width,i=a()*r/t;return e.zoom=h(e.zoom,i,Infinity),e}},visibleX:function(t,e){return function(r){var i=e-t;r.zoom>i&&(r.zoom=i);var n=t+.5*r.zoom,o=e-.5*r.zoom;return r.x=h(r.x,n,o),r}},visibleY:function(t,e){return function(r){if(r.width<=0||r.height<=0)return r;var i=r.width/r.height,n=i/r.mediaAspectRatio,o=(e-t)*n;r.zoom>o&&(r.zoom=o);var s=t+.5*r.zoom/n,a=e-.5*r.zoom/n;return r.y=h(r.y,s,a),r}},letterbox:function(){return function(t){if(t.width<=0||t.height<=0)return t;var e=t.width/t.height,r=e/t.mediaAspectRatio;t.mediaAspectRatio>=e&&(t.zoom=Math.min(t.zoom,1)),t.mediaAspectRatio<=e&&(t.zoom=Math.min(t.zoom,r));var i,n;t.zoom>1?i=n=.5:(i=0+.5*t.zoom/1,n=1-.5*t.zoom/1);var o,s;return t.zoom>r?o=s=.5:(o=0+.5*t.zoom/r,s=1-.5*t.zoom/r),t.x=h(t.x,i,n),t.y=h(t.y,o,s),t}}},i.type=i.prototype.type="flat",e.exports=i},{"../util/clamp":90,"../util/clearOwnProperties":91,"../util/pixelRatio":110,"../util/real":113,"gl-matrix":3,"minimal-event-emitter":14}],118:[function(t,e,r){"use strict";function i(t,e){this._yaw=t&&null!=t.yaw?t.yaw:_,this._pitch=t&&null!=t.pitch?t.pitch:y,this._roll=t&&null!=t.roll?t.roll:g,this._fov=t&&null!=t.fov?t.fov:w,this._width=t&&null!=t.width?t.width:m,this._height=t&&null!=t.height?t.height:v,this._projectionCenterX=t&&null!=t.projectionCenterX?t.projectionCenterX:M,this._projectionCenterY=t&&null!=t.projectionCenterY?t.projectionCenterY:b,this._limiter=e||null,this._projMatrix=o.create(),this._invProjMatrix=o.create(),this._frustum=[s.create(),s.create(),s.create(),s.create(),s.create()],this._projectionChanged=!0,this._params={},this._fovs={},this._tmpVec=s.create(),this._update()}var n=t("minimal-event-emitter"),o=t("gl-matrix").mat4,s=t("gl-matrix").vec4,a=t("../util/pixelRatio"),u=t("../util/convertFov"),h=t("../util/mod"),l=t("../util/real"),c=t("../util/clamp"),p=t("../util/decimal"),f=t("../util/compose"),d=t("../util/clearOwnProperties"),m=0,v=0,_=0,y=0,g=0,w=Math.PI/4,M=0,b=0;n(i),i.prototype.destroy=function(){d(this)},i.prototype.yaw=function(){return this._yaw},i.prototype.pitch=function(){return this._pitch},i.prototype.roll=function(){return this._roll},i.prototype.projectionCenterX=function(){return this._projectionCenterX},i.prototype.projectionCenterY=function(){return this._projectionCenterY},i.prototype.fov=function(){return this._fov},i.prototype.width=function(){return this._width},i.prototype.height=function(){return this._height},i.prototype.size=function(t){return t=t||{},t.width=this._width,t.height=this._height,t},i.prototype.parameters=function(t){return t=t||{},t.yaw=this._yaw,t.pitch=this._pitch,t.roll=this._roll,t.fov=this._fov,t},i.prototype.limiter=function(){return this._limiter},i.prototype.setYaw=function(t){this._resetParams(),this._params.yaw=t,this._update(this._params)},i.prototype.setPitch=function(t){this._resetParams(),this._params.pitch=t,this._update(this._params)},i.prototype.setRoll=function(t){this._resetParams(),this._params.roll=t,this._update(this._params)},i.prototype.setFov=function(t){this._resetParams(),this._params.fov=t,this._update(this._params)},i.prototype.setProjectionCenterX=function(t){this._resetParams(),this._params.projectionCenterX=t,this._update(this._params)},i.prototype.setProjectionCenterY=function(t){this._resetParams(),this._params.projectionCenterY=t,this._update(this._params)},i.prototype.offsetYaw=function(t){this.setYaw(this._yaw+t)},i.prototype.offsetPitch=function(t){this.setPitch(this._pitch+t)},i.prototype.offsetRoll=function(t){this.setRoll(this._roll+t)},i.prototype.offsetFov=function(t){this.setFov(this._fov+t)},i.prototype.setSize=function(t){this._resetParams(),this._params.width=t.width,this._params.height=t.height,this._update(this._params)},i.prototype.setParameters=function(t){this._resetParams(),this._params.yaw=t.yaw,this._params.pitch=t.pitch,this._params.roll=t.roll,this._params.fov=t.fov,this._params.projectionCenterX=t.projectionCenterX,this._params.projectionCenterY=t.projectionCenterY,this._update(this._params)},i.prototype.setLimiter=function(t){this._limiter=t||null,this._update()},i.prototype._resetParams=function(){var t=this._params;t.yaw=null,t.pitch=null,t.roll=null,t.fov=null,t.width=null,t.height=null},i.prototype._update=function(t){null==t&&(this._resetParams(),t=this._params);var e=this._yaw,r=this._pitch,i=this._roll,n=this._fov,o=this._projectionCenterX,s=this._projectionCenterY,a=this._width,u=this._height;if(t.yaw=null!=t.yaw?t.yaw:e,t.pitch=null!=t.pitch?t.pitch:r,t.roll=null!=t.roll?t.roll:i,t.fov=null!=t.fov?t.fov:n,t.width=null!=t.width?t.width:a,t.height=null!=t.height?t.height:u,t.projectionCenterX=null!=t.projectionCenterX?t.projectionCenterX:o,t.projectionCenterY=null!=t.projectionCenterY?t.projectionCenterY:s,this._limiter&&!(t=this._limiter(t)))throw new Error("Bad view limiter");t=this._normalize(t);var h=t.yaw,c=t.pitch,p=t.roll,f=t.fov,d=t.width,m=t.height,v=t.projectionCenterX,_=t.projectionCenterY;if(!(l(h)&&l(c)&&l(p)&&l(f)&&l(d)&&l(m)&&l(v)&&l(_)))throw new Error("Bad view - suspect a broken limiter");this._yaw=h,this._pitch=c,this._roll=p,this._fov=f,this._width=d,this._height=m,this._projectionCenterX=v,this._projectionCenterY=_,h===e&&c===r&&p===i&&f===n&&d===a&&m===u&&v===o&&_===s||(this._projectionChanged=!0,this.emit("change")),d===a&&m===u||this.emit("resize")},i.prototype._normalize=function(t){this._normalizeCoordinates(t);var e=u.htov(Math.PI,t.width,t.height),r=isNaN(e)?Math.PI:Math.min(Math.PI,e);return t.fov=c(t.fov,1e-6,r-1e-6),t},i.prototype._normalizeCoordinates=function(t){return"yaw"in t&&(t.yaw=h(t.yaw-Math.PI,-2*Math.PI)+Math.PI),"pitch"in t&&(t.pitch=h(t.pitch-Math.PI,-2*Math.PI)+Math.PI),"roll"in t&&(t.roll=h(t.roll-Math.PI,-2*Math.PI)+Math.PI),t},i.prototype.normalizeToClosest=function(t,e){var r=this._yaw,i=this._pitch,n=t.yaw,o=t.pitch,s=n-2*Math.PI,a=n+2*Math.PI;Math.abs(s-r)<Math.abs(n-r)?n=s:Math.abs(a-r)<Math.abs(n-r)&&(n=a);var u=o-2*Math.PI,h=o+2*Math.PI;return Math.abs(u-i)<Math.abs(o-i)?o=u:Math.abs(u-i)<Math.abs(o-i)&&(o=h),e=e||{},e.yaw=n,e.pitch=o,e},i.prototype.updateWithControlParameters=function(t){var e=this._fov,r=u.vtoh(e,this._width,this._height);isNaN(r)&&(r=e),this.offsetYaw(t.axisScaledX*r+2*t.x*r+t.yaw),this.offsetPitch(t.axisScaledY*e+2*t.y*r+t.pitch),this.offsetRoll(-t.roll),this.offsetFov(t.zoom*e)},i.prototype._updateProjection=function(){var t=this._projMatrix,e=this._invProjMatrix,r=this._frustum;if(this._projectionChanged){var i=this._width,n=this._height,s=this._fov,a=u.vtoh(s,i,n),h=i/n,l=this._projectionCenterX,c=this._projectionCenterY;if(0!==l||0!==c){var p=Math.atan(2*l*Math.tan(a/2)),f=Math.atan(2*c*Math.tan(s/2)),d=this._fovs;d.leftDegrees=180*(a/2+p)/Math.PI,d.rightDegrees=180*(a/2-p)/Math.PI,d.upDegrees=180*(s/2+f)/Math.PI,d.downDegrees=180*(s/2-f)/Math.PI,o.perspectiveFromFieldOfView(t,d,-1,1)}else o.perspective(t,s,h,-1,1);o.rotateZ(t,t,this._roll),o.rotateX(t,t,this._pitch),o.rotateY(t,t,this._yaw),o.invert(e,t),this._matrixToFrustum(t,r),this._projectionChanged=!1}},i.prototype._matrixToFrustum=function(t,e){s.set(e[0],t[3]+t[0],t[7]+t[4],t[11]+t[8],0),s.set(e[1],t[3]-t[0],t[7]-t[4],t[11]-t[8],0),s.set(e[2],t[3]+t[1],t[7]+t[5],t[11]+t[9],0),s.set(e[3],t[3]-t[1],t[7]-t[5],t[11]-t[9],0),s.set(e[4],t[3]+t[2],t[7]+t[6],t[11]+t[10],0)},i.prototype.projection=function(){return this._updateProjection(),this._projMatrix},i.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix},i.prototype.intersects=function(t){this._updateProjection();for(var e=this._frustum,r=this._tmpVec,i=0;i<e.length;i++){for(var n=e[i],o=!1,a=0;a<t.length;a++){var u=t[a];s.set(r,u[0],u[1],u[2],0),s.dot(n,r)>=0&&(o=!0)}if(!o)return!1}return!0},i.prototype.selectLevel=function(t){for(var e=a()*this._height,r=Math.tan(.5*this._fov),i=0;i<t.length;i++){var n=t[i];if(r*n.height()>=e)return n}return t[t.length-1]},i.prototype.coordinatesToScreen=function(t,e){var r=this._tmpVec;e||(e={});var i=this._width,n=this._height;if(i<=0||n<=0)return e.x=null,e.y=null,null;var o=t.yaw,a=t.pitch,u=Math.sin(o)*Math.cos(a),h=-Math.sin(t.pitch),l=-Math.cos(o)*Math.cos(a);return s.set(r,u,h,l,1),s.transformMat4(r,r,this.projection()),r[3]>=0?(e.x=i*(r[0]/r[3]+1)/2,e.y=n*(1-r[1]/r[3])/2,e):(e.x=null,e.y=null,null)},i.prototype.screenToCoordinates=function(t,e){var r=this._tmpVec;e||(e={});var i=this._width,n=this._height,o=2*t.x/i-1,a=1-2*t.y/n;s.set(r,o,a,1,1),s.transformMat4(r,r,this.inverseProjection());var u=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);return e.yaw=Math.atan2(r[0],-r[2]),e.pitch=Math.acos(r[1]/u)-Math.PI/2,this._normalizeCoordinates(e),e},i.prototype.coordinatesToPerspectiveTransform=function(t,e,r){r=r||"";var i=this._height,n=this._width,o=this._fov,s=.5*i/Math.tan(o/2),a="";return a+="translateX("+p(n/2)+"px) ",a+="translateY("+p(i/2)+"px) ",a+="translateX(-50%) translateY(-50%) ",a+="perspective("+p(s)+"px) ",a+="translateZ("+p(s)+"px) ",a+="rotateZ("+p(-this._roll)+"rad) ",a+="rotateX("+p(-this._pitch)+"rad) ",a+="rotateY("+p(this._yaw)+"rad) ",a+="rotateY("+p(-t.yaw)+"rad) ",a+="rotateX("+p(t.pitch)+"rad) ",a+="translateZ("+p(-e)+"px) ",a+=r+" "},i.limit={yaw:function(t,e){return function(r){return r.yaw=c(r.yaw,t,e),r}},pitch:function(t,e){return function(r){return r.pitch=c(r.pitch,t,e),r}},roll:function(t,e){return function(r){return r.roll=c(r.roll,t,e),r}},hfov:function(t,e){return function(r){var i=r.width,n=r.height;if(i>0&&n>0){var o=u.htov(t,i,n),s=u.htov(e,i,n);r.fov=c(r.fov,o,s)}return r}},vfov:function(t,e){return function(r){return r.fov=c(r.fov,t,e),r}},resolution:function(t){return function(e){var r=e.height;if(r){var i=a()*r,n=2*Math.atan(i/t);e.fov=c(e.fov,n,Infinity)}return e}},traditional:function(t,e,r){return r=null!=r?r:e,f(i.limit.resolution(t),i.limit.vfov(0,e),i.limit.hfov(0,r),i.limit.pitch(-Math.PI/2,Math.PI/2))}},i.type=i.prototype.type="rectilinear",e.exports=i},{"../util/clamp":90,"../util/clearOwnProperties":91,"../util/compose":93,"../util/convertFov":94,"../util/decimal":95,"../util/mod":106,"../util/pixelRatio":110,"../util/real":113,"gl-matrix":3,"minimal-event-emitter":14}]},{},[56])(56)});;
/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports.browser=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}var r=n(/(ipod|iphone|ipad)/i).toLowerCase(),i=/like android/i.test(t),s=!i&&/android/i.test(t),o=n(/version\/(\d+(\.\d+)?)/i),u=/tablet/i.test(t),a=!u&&/[^-]mobi/i.test(t),f;/opera|opr/i.test(t)?f={name:"Opera",opera:e,version:o||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?f={name:"Windows Phone",windowsphone:e,msie:e,version:n(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(t)?f={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(t)?f={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(f={name:r=="iphone"?"iPhone":r=="ipad"?"iPad":"iPod"},o&&(f.version=o)):/sailfish/i.test(t)?f={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?f={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(f={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(f.firefoxos=e)):/silk/i.test(t)?f={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:s?f={name:"Android",version:o}:/phantom/i.test(t)?f={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?f={name:"BlackBerry",blackberry:e,version:o||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(f={name:"WebOS",webos:e,version:o||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(f.touchpad=e)):/bada/i.test(t)?f={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?f={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||o}:/safari/i.test(t)?f={name:"Safari",safari:e,version:o}:f={},/(apple)?webkit/i.test(t)?(f.name=f.name||"Webkit",f.webkit=e,!f.version&&o&&(f.version=o)):!f.opera&&/gecko\//i.test(t)&&(f.name=f.name||"Gecko",f.gecko=e,f.version=f.version||n(/gecko\/(\d+(\.\d+)?)/i)),s||f.silk?f.android=e:r&&(f[r]=e,f.ios=e);var l="";r?(l=n(/os (\d+([_\s]\d+)*) like mac os x/i),l=l.replace(/[_\s]/g,".")):s?l=n(/android[ \/-](\d+(\.\d+)*)/i):f.windowsphone?l=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):f.webos?l=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):f.blackberry?l=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):f.bada?l=n(/bada\/(\d+(\.\d+)*)/i):f.tizen&&(l=n(/tizen[\/\s](\d+(\.\d+)*)/i)),l&&(f.osversion=l);var c=l.split(".")[0];if(u||r=="ipad"||s&&(c==3||c==4&&!a)||f.silk)f.tablet=e;else if(a||r=="iphone"||r=="ipod"||s||f.blackberry||f.webos||f.bada)f.mobile=e;return f.msie&&f.version>=10||f.chrome&&f.version>=20||f.firefox&&f.version>=20||f.safari&&f.version>=6||f.opera&&f.version>=10||f.ios&&f.osversion&&f.osversion.split(".")[0]>=6||f.blackberry&&f.version>=10.1?f.a=e:f.msie&&f.version<10||f.chrome&&f.version<20||f.firefox&&f.version<20||f.safari&&f.version<6||f.opera&&f.version<10||f.ios&&f.osversion&&f.osversion.split(".")[0]<6?f.c=e:f.x=e,f}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n._detect=t,n});
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-12-13
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
if (!("classList" in document.createElement("_"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
    classListProp = "classList"
  , protoProp = "prototype"
  , elemCtrProto = view.Element[protoProp]
  , objCtr = Object
  , strTrim = String[protoProp].trim || function () {
    return this.replace(/^\s+|\s+$/g, "");
  }
  , arrIndexOf = Array[protoProp].indexOf || function (item) {
    var
        i = 0
      , len = this.length
    ;
    for (; i < len; i++) {
      if (i in this && this[i] === item) {
        return i;
      }
    }
    return -1;
  }
  // Vendors: please allow content code to instantiate DOMExceptions
  , DOMEx = function (type, message) {
    this.name = type;
    this.code = DOMException[type];
    this.message = message;
  }
  , checkTokenAndGetIndex = function (classList, token) {
    if (token === "") {
      throw new DOMEx(
          "SYNTAX_ERR"
        , "An invalid or illegal string was specified"
      );
    }
    if (/\s/.test(token)) {
      throw new DOMEx(
          "INVALID_CHARACTER_ERR"
        , "String contains an invalid character"
      );
    }
    return arrIndexOf.call(classList, token);
  }
  , ClassList = function (elem) {
    var
        trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
      , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
      , i = 0
      , len = classes.length
    ;
    for (; i < len; i++) {
      this.push(classes[i]);
    }
    this._updateClassName = function () {
      elem.setAttribute("class", this.toString());
    };
  }
  , classListProto = ClassList[protoProp] = []
  , classListGetter = function () {
    return new ClassList(this);
  }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
  return this[i] || null;
};
classListProto.contains = function (token) {
  token += "";
  return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
  var
      tokens = arguments
    , i = 0
    , l = tokens.length
    , token
    , updated = false
  ;
  do {
    token = tokens[i] + "";
    if (checkTokenAndGetIndex(this, token) === -1) {
      this.push(token);
      updated = true;
    }
  }
  while (++i < l);

  if (updated) {
    this._updateClassName();
  }
};
classListProto.remove = function () {
  var
      tokens = arguments
    , i = 0
    , l = tokens.length
    , token
    , updated = false
    , index
  ;
  do {
    token = tokens[i] + "";
    index = checkTokenAndGetIndex(this, token);
    while (index !== -1) {
      this.splice(index, 1);
      updated = true;
      index = checkTokenAndGetIndex(this, token);
    }
  }
  while (++i < l);

  if (updated) {
    this._updateClassName();
  }
};
classListProto.toggle = function (token, force) {
  token += "";

  var
      result = this.contains(token)
    , method = result ?
      force !== true && "remove"
    :
      force !== false && "add"
  ;

  if (method) {
    this[method](token);
  }

  if (force === true || force === false) {
    return force;
  } else {
    return !result;
  }
};
classListProto.toString = function () {
  return this.join(" ");
};

if (objCtr.defineProperty) {
  var classListPropDesc = {
      get: classListGetter
    , enumerable: true
    , configurable: true
  };
  try {
    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
  } catch (ex) { // IE 8 doesn't support enumerable:true
    if (ex.number === -0x7FF5EC54) {
      classListPropDesc.enumerable = false;
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    }
  }
} else if (objCtr[protoProp].__defineGetter__) {
  elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
  "use strict";

  var testElement = document.createElement("_");

  testElement.classList.add("c1", "c2");

  // Polyfill for IE 10/11 and Firefox <26, where classList.add and
  // classList.remove exist but support only one argument at a time.
  if (!testElement.classList.contains("c2")) {
    var createMethod = function(method) {
      var original = DOMTokenList.prototype[method];

      DOMTokenList.prototype[method] = function(token) {
        var i, len = arguments.length;

        for (i = 0; i < len; i++) {
          token = arguments[i];
          original.call(this, token);
        }
      };
    };
    createMethod('add');
    createMethod('remove');
  }

  testElement.classList.toggle("c3", false);

  // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
  // support the second argument.
  if (testElement.classList.contains("c3")) {
    var _toggle = DOMTokenList.prototype.toggle;

    DOMTokenList.prototype.toggle = function(token, force) {
      if (1 in arguments && !this.contains(token) === !force) {
        return force;
      } else {
        return _toggle.call(this, token);
      }
    };

  }

  testElement = null;
}());

}

}
;
// Copyright 2009-2012 by contributors, MIT License
// vim: ts=4 sts=4 sw=4 expandtab

// Module systems magic dance
(function (definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
    // YUI3
    } else if (typeof YUI == "function") {
        YUI.add("es5", definition);
    // CommonJS and <script>
    } else {
        definition();
    }
})(function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (typeof target != "function") {
            throw new TypeError("Function.prototype.bind called on incompatible " + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = _Array_slice_.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(_Array_slice_.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(_Array_slice_.call(arguments))
                );

            }

        };
        if(target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }
        // XXX bound.length is never writable, so don't even try
        //
        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.
        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    };
}

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally.
// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// us it in defining shortcuts.
var call = Function.prototype.call;
var prototypeOfArray = Array.prototype;
var prototypeOfObject = Object.prototype;
var _Array_slice_ = prototypeOfArray.slice;
// Having a toString local variable name breaks in Opera so use _toString.
var _toString = call.bind(prototypeOfObject.toString);
var owns = call.bind(prototypeOfObject.hasOwnProperty);

// If JS engine supports accessors creating shortcuts.
var defineGetter;
var defineSetter;
var lookupGetter;
var lookupSetter;
var supportsAccessors;
if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
    defineGetter = call.bind(prototypeOfObject.__defineGetter__);
    defineSetter = call.bind(prototypeOfObject.__defineSetter__);
    lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
    lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
}

//
// Array
// =====
//

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
// Default value for second param
// [bugfix, ielt9, old browsers]
// IE < 9 bug: [1,2].splice(0).join("") == "" but should be "12"
if ([1,2].splice(0).length != 2) {
    var array_splice = Array.prototype.splice;

    if(function() { // test IE < 9 to splice bug - see issue #138
        function makeArray(l) {
            var a = [];
            while (l--) {
                a.unshift(l)
            }
            return a
        }

        var array = []
            , lengthBefore
        ;

        array.splice.bind(array, 0, 0).apply(null, makeArray(20));
        array.splice.bind(array, 0, 0).apply(null, makeArray(26));

        lengthBefore = array.length; //20
        array.splice(5, 0, "XXX"); // add one element

        if(lengthBefore + 1 == array.length) {
            return true;// has right splice implementation without bugs
        }
        // else {
        //    IE8 bug
        // }
    }()) {//IE 6/7
        Array.prototype.splice = function(start, deleteCount) {
            if (!arguments.length) {
                return [];
            } else {
                return array_splice.apply(this, [
                    start === void 0 ? 0 : start,
                    deleteCount === void 0 ? (this.length - start) : deleteCount
                ].concat(_Array_slice_.call(arguments, 2)))
            }
        };
    }
    else {//IE8
        Array.prototype.splice = function(start, deleteCount) {
            var result
                , args = _Array_slice_.call(arguments, 2)
                , addElementsCount = args.length
            ;

            if(!arguments.length) {
                return [];
            }

            if(start === void 0) { // default
                start = 0;
            }
            if(deleteCount === void 0) { // default
                deleteCount = this.length - start;
            }

            if(addElementsCount > 0) {
                if(deleteCount <= 0) {
                    if(start == this.length) { // tiny optimisation #1
                        this.push.apply(this, args);
                        return [];
                    }

                    if(start == 0) { // tiny optimisation #2
                        this.unshift.apply(this, args);
                        return [];
                    }
                }

                // Array.prototype.splice implementation
                result = _Array_slice_.call(this, start, start + deleteCount);// delete part
                args.push.apply(args, _Array_slice_.call(this, start + deleteCount, this.length));// right part
                args.unshift.apply(args, _Array_slice_.call(this, 0, start));// left part

                // delete all items from this array and replace it to 'left part' + _Array_slice_.call(arguments, 2) + 'right part'
                args.unshift(0, this.length);

                array_splice.apply(this, args);

                return result;
            }

            return array_splice.call(this, start, deleteCount);
        }

    }
}

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) == undefined but should be "1"
if ([].unshift(0) != 1) {
    var array_unshift = Array.prototype.unshift;
    Array.prototype.unshift = function() {
        array_unshift.apply(this, arguments);
        return this.length;
    };
}

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function isArray(obj) {
        return _toString(obj) == "[object Array]";
    };
}

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = Object("a"),
    splitString = boxedString[0] != "a" || !(0 in boxedString);

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    };
}

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
if (!Array.prototype.map) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            result = Array(length),
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self)
                result[i] = fun.call(thisp, self[i], i, object);
        }
        return result;
    };
}

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function filter(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                    object,
            length = self.length >>> 0,
            result = [],
            value,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (fun.call(thisp, value, i, object)) {
                    result.push(value);
                }
            }
        }
        return result;
    };
}

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
if (!Array.prototype.every) {
    Array.prototype.every = function every(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !fun.call(thisp, self[i], i, object)) {
                return false;
            }
        }
        return true;
    };
}

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
if (!Array.prototype.some) {
    Array.prototype.some = function some(fun /*, thisp */) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0,
            thisp = arguments[1];

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        for (var i = 0; i < length; i++) {
            if (i in self && fun.call(thisp, self[i], i, object)) {
                return true;
            }
        }
        return false;
    };
}

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value and an empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduce of empty array with no initial value");
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError("reduce of empty array with no initial value");
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        }

        return result;
    };
}

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
if (!Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
        var object = toObject(this),
            self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (_toString(fun) != "[object Function]") {
            throw new TypeError(fun + " is not a function");
        }

        // no value to return if no initial value, empty array
        if (!length && arguments.length == 1) {
            throw new TypeError("reduceRight of empty array with no initial value");
        }

        var result, i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in this) {
                result = fun.call(void 0, result, self[i], i, object);
            }
        } while (i--);

        return result;
    };
}

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
    Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    };
}

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
    Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
        var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = Math.min(i, toInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && sought === self[i]) {
                return i;
            }
        }
        return -1;
    };
}

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14
if (!Object.keys) {
    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = true,
        dontEnums = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ],
        dontEnumsLength = dontEnums.length;

    for (var key in {"toString": null}) {
        hasDontEnumBug = false;
    }

    Object.keys = function keys(object) {

        if (
            (typeof object != "object" && typeof object != "function") ||
            object === null
        ) {
            throw new TypeError("Object.keys called on a non-object");
        }

        var keys = [];
        for (var name in object) {
            if (owns(object, name)) {
                keys.push(name);
            }
        }

        if (hasDontEnumBug) {
            for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                var dontEnum = dontEnums[i];
                if (owns(object, dontEnum)) {
                    keys.push(dontEnum);
                }
            }
        }
        return keys;
    };

}

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000,
    negativeYearString = "-000001";
if (
    !Date.prototype.toISOString ||
    (new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1)
) {
    Date.prototype.toISOString = function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/kriskowal/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(),
            this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? "-" : (year > 9999 ? "+" : "")) +
            ("00000" + Math.abs(year))
            .slice(0 <= year && year <= 9999 ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = "0" + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + "-" + result.slice(0, 2).join("-") +
            "T" + result.slice(2).join(":") + "." +
            ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
        );
    };
}


// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = false;
try {
    dateToJSONIsSupported = (
        Date.prototype.toJSON &&
        new Date(NaN).toJSON() === null &&
        new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
        Date.prototype.toJSON.call({ // generic
            toISOString: function () {
                return true;
            }
        })
    );
} catch (e) {
}
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be toPrimitive(O, hint Number).
        var o = Object(this),
            tv = toPrimitive(o),
            toISO;
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === "number" && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        toISO = o.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (typeof toISO != "function") {
            throw new TypeError("toISOString property is not callable");
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(o);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
if (!Date.parse || "Date.parse is buggy") {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    Date = (function(NativeDate) {

        // Date.length === 7
        function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            if (this instanceof NativeDate) {
                var date = length == 1 && String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(Date.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, s, ms) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, s) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
                // Prevent mixups with unfixed Date object
                date.constructor = Date;
                return date;
            }
            return NativeDate.apply(this, arguments);
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp("^" +
            "(\\d{4}|[\+\-]\\d{6})" + // four-digit year capture or sign +
                                      // 6-digit extended year
            "(?:-(\\d{2})" + // optional month capture
            "(?:-(\\d{2})" + // optional day capture
            "(?:" + // capture hours:minutes:seconds.milliseconds
                "T(\\d{2})" + // hours capture
                ":(\\d{2})" + // minutes capture
                "(?:" + // optional :seconds.milliseconds
                    ":(\\d{2})" + // seconds capture
                    "(?:(\\.\\d{1,}))?" + // milliseconds capture
                ")?" +
            "(" + // capture UTC offset component
                "Z|" + // UTC capture
                "(?:" + // offset specifier +/-hours:minutes
                    "([-+])" + // sign capture
                    "(\\d{2})" + // hours offset capture
                    ":(\\d{2})" + // minutes offset capture
                ")" +
            ")?)?)?)?" +
        "$");

        var months = [
            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365
        ];

        function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        }

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            Date[key] = NativeDate[key];
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        Date.now = NativeDate.now;
        Date.UTC = NativeDate.UTC;
        Date.prototype = NativeDate.prototype;
        Date.prototype.constructor = Date;

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        Date.parse = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = Number(match[1]),
                    month = Number(match[2] || 1) - 1,
                    day = Number(match[3] || 1) - 1,
                    hour = Number(match[4] || 0),
                    minute = Number(match[5] || 0),
                    second = Number(match[6] || 0),
                    millisecond = Math.floor(Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    offset = !match[4] || match[8] ?
                        0 : Number(new NativeDate(1970, 0)),
                    signOffset = match[9] === "-" ? 1 : -1,
                    hourOffset = Number(match[10] || 0),
                    minuteOffset = Number(match[11] || 0),
                    result;
                if (
                    hour < (
                        minute > 0 || second > 0 || millisecond > 0 ?
                        24 : 25
                    ) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (
                        dayFromMonth(year, month + 1) -
                        dayFromMonth(year, month)
                    )
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond + offset;
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };

        return Date;
    })(Date);
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}


//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
if (!Number.prototype.toFixed || (0.00008).toFixed(3) !== '0.000' || (0.9).toFixed(0) === '0' || (1.255).toFixed(2) !== '1.25' || (1000000000000000128).toFixed(0) !== "1000000000000000128") {
    // Hide these variables and functions
    (function () {
        var base, size, data, i;

        base = 1e7;
        size = 6;
        data = [0, 0, 0, 0, 0, 0];

        function multiply(n, c) {
            var i = -1;
            while (++i < size) {
                c += n * data[i];
                data[i] = c % base;
                c = Math.floor(c / base);
            }
        }

        function divide(n) {
            var i = size, c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = Math.floor(c / n);
                c = (c % n) * base;
            }
        }

        function toString() {
            var i = size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += '0000000'.slice(0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        }

        function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        }

        function log(x) {
            var n = 0;
            while (x >= 4096) {
                n += 12;
                x /= 4096;
            }
            while (x >= 2) {
                n += 1;
                x /= 2;
            }
            return n;
        }

        Number.prototype.toFixed = function (fractionDigits) {
            var f, x, s, m, e, z, j, k;

            // Test for NaN and round fractionDigits down
            f = Number(fractionDigits);
            f = f !== f ? 0 : Math.floor(f);

            if (f < 0 || f > 20) {
                throw new RangeError("Number.toFixed called with invalid number of decimals");
            }

            x = Number(this);

            // Test for NaN
            if (x !== x) {
                return "NaN";
            }

            // If it is too big or small, return the string value of the number
            if (x <= -1e21 || x >= 1e21) {
                return String(x);
            }

            s = "";

            if (x < 0) {
                s = "-";
                x = -x;
            }

            m = "0";

            if (x > 1e-21) {
                // 1e-21 < x < 1e21
                // -70 < log2(x) < 70
                e = log(x * pow(2, 69, 1)) - 69;
                z = (e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1));
                z *= 0x10000000000000; // Math.pow(2, 52);
                e = 52 - e;

                // -18 < e < 122
                // x = z / 2 ^ e
                if (e > 0) {
                    multiply(0, z);
                    j = f;

                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }

                    multiply(pow(10, j, 1), 0);
                    j = e - 1;

                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }

                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    m = toString();
                } else {
                    multiply(0, z);
                    multiply(1 << (-e), 0);
                    m = toString() + '0.00000000000000000000'.slice(2, 2 + f);
                }
            }

            if (f > 0) {
                k = m.length;

                if (k <= f) {
                    m = s + '0.0000000000000000000'.slice(0, f - k + 2) + m;
                } else {
                    m = s + m.slice(0, k - f) + '.' + m.slice(k - f);
                }
            } else {
                m = s + m;
            }

            return m;
        }
    }());
}


//
// String
// ======
//


// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = String.prototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === "t" ||
    ''.split(/.?/).length === 0 ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec("")[1] === void 0; // NPCG: nonparticipating capturing group

        String.prototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0)
                return [];

            // If `separator` is not a regex, use native split
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return string_split.apply(this, arguments);
            }

            var output = [],
                flags = (separator.ignoreCase ? "i" : "") +
                        (separator.multiline  ? "m" : "") +
                        (separator.extended   ? "x" : "") + // Proposed for ES6
                        (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator = new RegExp(separator.source, flags + "g"),
                separator2, match, lastIndex, lastLength;
            string += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ("0".split(void 0, 0).length) {
    String.prototype.split = function(separator, limit) {
        if (separator === void 0 && limit === 0) return [];
        return string_split.apply(this, arguments);
    }
}


// ECMA-262, 3rd B.2.3
// Note an ECMAScript standart, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
if("".substr && "0b".substr(-1) !== "b") {
    var string_substr = String.prototype.substr;
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}

// ES5 15.5.4.20
// http://es5.github.com/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
    "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    ws = "[" + ws + "]";
    var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
        trimEndRegexp = new RegExp(ws + ws + "*$");
    String.prototype.trim = function trim() {
        if (this === void 0 || this === null) {
            throw new TypeError("can't convert "+this+" to object");
        }
        return String(this)
            .replace(trimBeginRegexp, "")
            .replace(trimEndRegexp, "");
    };
}

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(n) {
    n = +n;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function isPrimitive(input) {
    var type = typeof input;
    return (
        input === null ||
        type === "undefined" ||
        type === "boolean" ||
        type === "number" ||
        type === "string"
    );
}

function toPrimitive(input) {
    var val, valueOf, toString;
    if (isPrimitive(input)) {
        return input;
    }
    valueOf = input.valueOf;
    if (typeof valueOf === "function") {
        val = valueOf.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    toString = input.toString;
    if (typeof toString === "function") {
        val = toString.call(input);
        if (isPrimitive(val)) {
            return val;
        }
    }
    throw new TypeError();
}

// ES5 9.9
// http://es5.github.com/#x9.9
var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert "+o+" to object");
    }
    return Object(o);
};

});
;
/* Copyright (c) 2012 Jeremy McPeak http://www.wdonline.com
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

    function init() {

        // filter out unsupported browsers
        if (Element.prototype.addEventListener || !Object.defineProperty) {
            return {
                loadedForBrowser : false
            };
        }

        // create an MS event object and get prototype
        var proto = document.createEventObject().constructor.prototype;

        /**
     * Indicates whether an event propagates up from the target.
     * @returns Boolean
     */
        Object.defineProperty(proto, "bubbles", {
            get: function() {
                // not a complete list of DOM3 events; some of these IE8 doesn't support
                var bubbleEvents = ["select", "scroll", "click", "dblclick",
                    "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "wheel", "textinput",
                    "keydown", "keypress", "keyup"],
                    type = this.type;

                for (var i = 0, l = bubbleEvents.length; i < l; i++) {
                    if (type === bubbleEvents[i]) {
                        return true;
                    }
                }

                return false;
            }
        });


        /**
     * Indicates whether or not preventDefault() was called on the event.
     * @returns Boolean
     */
        Object.defineProperty(proto, "defaultPrevented", {
            get: function() {
                // if preventDefault() was never called, or returnValue not given a value
                // then returnValue is undefined
                var returnValue = this.returnValue,
                    undef;

                return !(returnValue === undef || returnValue);
            }
        });


        /**
     * Gets the secondary targets of mouseover and mouseout events (toElement and fromElement)
     * @returns EventTarget or {null}
     */
        Object.defineProperty(proto, "relatedTarget", {
            get: function() {
                var type = this.type;

                if (type === "mouseover" || type === "mouseout") {
                    return (type === "mouseover") ? this.fromElement : this.toElement;
                }

                return null;
            }
        });


        /**
     * Gets the target of the event (srcElement)
     * @returns EventTarget
     */
        Object.defineProperty(proto, "target", {
            get: function() { return this.srcElement; }
        });


        /**
     * Cancels the event if it is cancelable. (returnValue)
     * @returns {undefined}
     */
        proto.preventDefault = function() {
            this.returnValue = false;
        };

        /**
     * Prevents further propagation of the current event. (cancelBubble())
     * @returns {undefined}
     */
        proto.stopPropagation = function() {
            this.cancelBubble = true;
        };

        /***************************************
     *
     * Event Listener Setup
     *    Nothing complex here
     *
     ***************************************/

        /**
     * Determines if the provided object implements EventListener
     * @returns boolean
    */
        var implementsEventListener = function(obj) {
            return (typeof obj !== "function" && typeof obj["handleEvent"] === "function");
        };

        var customELKey = "__eventShim__";

        /**
     * Adds an event listener to the DOM object
     * @returns {undefined}
     */
        var addEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {

                if (typeof handler[customELKey] !== "function") {
                    handler[customELKey] = function(e) {
                        handler["handleEvent"](e);
                    };
                }

                fn = handler[customELKey];
            }

            this.attachEvent("on" + type, fn);
        };

        /**
     * Removes an event listener to the DOM object
     * @returns {undefined}
     */
        var removeEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {
                fn = handler[customELKey];
            }

            this.detachEvent("on" + type, fn);
        };

        // setup the DOM and window objects
        HTMLDocument.prototype.addEventListener = addEventListenerFunc;
        HTMLDocument.prototype.removeEventListener = removeEventListenerFunc;

        Element.prototype.addEventListener = addEventListenerFunc;
        Element.prototype.removeEventListener = removeEventListenerFunc;

        window.addEventListener = addEventListenerFunc;
        window.removeEventListener = removeEventListenerFunc;

        return {
            loadedForBrowser : true
        };
    }

    // check for AMD support
    if (typeof define === "function" && define["amd"]) {
        define(init);
    } else {
        return init();
    }
    
}());;
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());;
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/

!function(){"use strict";var u="undefined"!=typeof window&&void 0!==window.document?window.document:{},e="undefined"!=typeof module&&module.exports,t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,c=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,l=n.length,t={};r<l;r++)if((e=n[r])&&e[1]in u){for(r=0;r<e.length;r++)t[n[0][r]]=e[r];return t}return!1}(),l={change:c.fullscreenchange,error:c.fullscreenerror},n={request:function(l){return new Promise(function(e){var n=c.requestFullscreen,r=function(){this.off("change",r),e()}.bind(this);l=l||u.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?l[n]():l[n](t?Element.ALLOW_KEYBOARD_INPUT:{}),this.on("change",r)}.bind(this))},exit:function(){return new Promise(function(e){var n=function(){this.off("change",n),e()}.bind(this);u[c.exitFullscreen](),this.on("change",n)}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=l[e];r&&u.addEventListener(r,n,!1)},off:function(e,n){var r=l[e];r&&u.removeEventListener(r,n,!1)},raw:c};c?(Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(u[c.fullscreenElement])}},element:{enumerable:!0,get:function(){return u[c.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(u[c.fullscreenEnabled])}}}),e?module.exports=n:window.screenfull=n):e?module.exports=!1:window.screenfull=!1}();
;

'use strict';

(function ($, Drupal, drupalSettings) {

  // 'use strict';

  // Drupal.behaviors.tour360 = {
  //   attach: function (context, drupalSettings) {
  var _document = document;
  var _window = window;

  var Marzipano = _window.Marzipano;
  var bowser = _window.bowser;
  var screenfull = _window.screenfull;
  // var data = _window.APP_DATA_MARZIPANO;
  var data = JSON.parse(drupalSettings.tour_360.data);
  // Grab elements from DOM.
  var panoElement = _document.querySelector('#pano');
  var sceneNameElement = _document.querySelector('#titleBar .sceneName');
  var sceneListElement = _document.querySelector('#sceneList');
  var sceneElements = _document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = _document.querySelector('#sceneListToggle');
  var autorotateToggleElement = _document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = _document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (_window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        _document.body.classList.remove('mobile');
        _document.body.classList.add('mobile');
      } else {
        _document.body.classList.remove('mobile');
        _document.body.classList.add('mobile');
      }
    };
    var mql = _window.matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    _document.body.classList.add('mobile');
  }

  // Detect whether we are on a touch device.
  _document.body.classList.add('no-touch');
  _window.addEventListener('touchstart', function () {
    _document.body.classList.remove('no-touch');
    _document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    _document.body.classList.add('tooltip-fallback');
  }
  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function (data) {
    var urlPrefix = "/modules/custom/tour_360/renders";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);
    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    if (data.linkHotspots) {
      data.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
    }

    // Create info hotspots.
    if (data.infoHotspots) {
      data.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
    }


    // Create video hotspots.
    if (data.videoHotspots) {
      var container = scene.hotspotContainer();
      var element = createVideoHotspotElement(data.videoHotspots);
      // var rotatex = ;
      // console.log(rotatex);
      var _radius = parseInt(data.videoHotspots.radius);
      container.createHotspot(element, { yaw: data.videoHotspots.yaw, pitch: data.videoHotspots.pitch },
        { perspective: { radius: _radius, extraTransforms: 'rotateX(' + data.videoHotspots.rotatex +'deg)'} });

    }

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    _document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    _document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!_document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function (scene) {
    var el = _document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function () {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      if (_document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // // DOM elements for view controls.
  // var viewUpElement = _document.querySelector('#viewUp');
  // var viewDownElement = _document.querySelector('#viewDown');
  // var viewLeftElement = _document.querySelector('#viewLeft');
  // var viewRightElement = _document.querySelector('#viewRight');
  // var viewInElement = _document.querySelector('#viewIn');
  // var viewOutElement = _document.querySelector('#viewOut');

  // // Dynamic parameters for controls.
  // var velocity = 0.7;
  // var friction = 3;

  // // Associate view controls with elements.
  // var controls = viewer.controls();
  // controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
  // controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
  // controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
  // controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
  // controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
  // controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  //Crear un video Hostpost
  function createVideoHotspotElement(hostpot) {
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    var iframe = _document.createElement('iframe');
    iframe.setAttribute('width', hostpot.width);
    iframe.setAttribute('height', hostpot.height);
    iframe.setAttribute('src', hostpot.url);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

    wrapper.appendChild(iframe);

    return wrapper;
  }

  // Crear un Hotspot Link
  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = _document.createElement('img');
    icon.src = 'modules/custom/tour_360/images/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function () {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = _document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  // Crear un HotspotInfo
  function createInfoHotspotElement(hotspot) {
    var _widthicon = hotspot.width + "px";
    var _widthFont = (hotspot.width - 10) + "px";
    // Create wrapper element to hold icon and tooltip.
    var wrapper = _document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    var iconWrapper = _document.createElement('div');
    iconWrapper.classList.add('info-hotspot-header');
    iconWrapper.classList.add('pop-up-ie');
    var id = hotspot.type == 'cat' ? hotspot.idterm : hotspot.idprod;
    var url = '/pop-up/' + hotspot.idconfig + '/' + hotspot.type + '/' + id;
    iconWrapper.setAttribute('data-href', url);

    iconWrapper.classList.add('wrapper-radar');
    iconWrapper.classList.add('tool-tip');
    iconWrapper.setAttribute('data-toggle', "tooltip");
    iconWrapper.setAttribute('data-placement', hotspot.position);
    iconWrapper.setAttribute('title', hotspot.title);
    iconWrapper.style.width = _widthicon;
    iconWrapper.style.height = _widthicon;
    iconWrapper.style.fontSize = _widthFont;
    for (let index = 0; index < 4; index++) {
      var radar = _document.createElement('div');
      radar.classList.add('radar');
      iconWrapper.appendChild(radar);
    }
    wrapper.appendChild(iconWrapper);

    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
      'wheel', 'mousewheel'];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  $(_document).bind('cbox_cleanup', function(){
    cartRefresh();
  });
  
  $(_document).bind('cbox_complete', function(){
    let $iframe = $('#cboxContent').find('#cboxLoadedContent iframe');
    let src_iframe = $iframe.attr("src");
    $iframe.on('load', function(){
      let $cart_form = $iframe.contents().find(".commerce-order-item-add-to-cart-form");
      $cart_form.submit(function(e){
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: $(this).attr('action'),
          data: $(this).serialize(),
        }).done(function() {
          cartRefresh();
          $iframe.attr('src', src_iframe);
        });
      });
    })
  });

  function cartRefresh() {
    $.get("/api/ajax/refresh-cart", function(data, status){
      let $cart_block = $('#header .navbar #block-ordertotalcommerceblock'),
          $count_element = $cart_block.find('.container-order-total__counter span'),
          $price_element = $cart_block.find('.container-order-total__price span');
      if (status == 'success') {
        $count_element.text(data.count_items);
        $price_element.text(data.cart_price);

      }
    });
  }

  // Display the initial scene.
  switchScene(scenes[0]);

  Drupal.behaviors.tour360 = {
    attach: function (context, drupalSettings) {
      $('.pop-up-ie', context).once('openPopUp').each(function () {
        $(this).on('click', function () {
          $.colorbox({
            width: "80%",
            height: "80%",
            rel:'nofollow',
            iframe: true,
            href: $(this).data('href'),
          });
        });
        $('[data-toggle="tooltip"]').tooltip();
      });
    }
  };

  }) (jQuery, Drupal, drupalSettings);
;
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);

        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');

      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));

      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }

      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');

      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }

          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find("#toolbar-link-".concat(id)).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }

      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;

      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }

      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;

        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));

        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');

      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');

      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
            localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
            Drupal.ajax({
              url: endpoint
            }).execute();
            localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();

        this._removeIrrelevantTourItems($tour, this._getDocument());

        var that = this;
        var close = Drupal.t('Close');

        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },
            template: {
              link: "<a href=\"#close\" class=\"joyride-close-tip\" aria-label=\"".concat(close, "\">&times;</a>"),
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({
            isActive: true,
            activeTour: $tour
          });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find("#".concat(itemId)).length || itemClass && $document.find(".".concat(itemClass)).length) {
          return;
        }

        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;

        if (!total) {
          this.model.set({
            tour: []
          });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;

      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;

      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(':tabbable').not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;

      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }

      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;

      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');

      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];

        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }

        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;

          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }

          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }

        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');

      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(index, placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = this.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        $(this).removeOnce('big-pipe');
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    $(context).find('script[data-big-pipe-replacement-for-placeholder-with-id]').once('big-pipe').each(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();
  $(window).on('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    bigPipeProcessDocument(document);
  });
})(jQuery, Drupal, drupalSettings);;
