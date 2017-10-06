!function(){"use strict";function n(){}function e(e,r){var t=new n;if(e instanceof n)e.each(function(n,e){t.set(e,n)});else if(Array.isArray(e)){var o,u=-1,i=e.length;if(null==r)for(;++u<i;)t.set(u,e[u]);else for(;++u<i;)t.set(r(o=e[u],u,e),o)}else if(e)for(var a in e)t.set(a,e[a]);return t}function r(){for(var n,e=arguments,r=0,o=arguments.length,u={};r<o;++r){if(!(n=e[r]+"")||n in u)throw new Error("illegal type: "+n);u[n]=[]}return new t(u)}function t(n){this._=n}function o(n,e){return n.trim().split(/^|\s+/).map(function(n){var r="",t=n.indexOf(".");if(t>=0&&(r=n.slice(t+1),n=n.slice(0,t)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}function u(n,e){for(var r,t=0,o=n.length;t<o;++t)if((r=n[t]).name===e)return r.value}function i(n,e,r){for(var t=0,o=n.length;t<o;++t)if(n[t].name===e){n[t]=p,n=n.slice(0,t).concat(n.slice(t+1));break}return null!=r&&n.push({name:e,value:r}),n}function a(n){return function(e,r){n(null==e?r:null)}}function c(n){var e=n.responseType;return e&&"text"!==e?n.response:n.responseText}function l(n){return new Function("d","return {"+n.map(function(n,e){return JSON.stringify(n)+": d["+e+"]"}).join(",")+"}")}function s(n,e){var r=l(n);return function(t,o){return e(r(t),o,n)}}function f(n){var e=Object.create(null),r=[];return n.forEach(function(n){for(var t in n)t in e||r.push(e[t]=t)}),r}n.prototype=e.prototype={constructor:n,has:function(n){return"$"+n in this},get:function(n){return this["$"+n]},set:function(n,e){return this["$"+n]=e,this},remove:function(n){var e="$"+n;return e in this&&delete this[e]},clear:function(){var n=this;for(var e in n)"$"===e[0]&&delete n[e]},keys:function(){var n=this,e=[];for(var r in n)"$"===r[0]&&e.push(r.slice(1));return e},values:function(){var n=this,e=[];for(var r in n)"$"===r[0]&&e.push(n[r]);return e},entries:function(){var n=this,e=[];for(var r in n)"$"===r[0]&&e.push({key:r.slice(1),value:n[r]});return e},size:function(){var n=this,e=0;for(var r in n)"$"===r[0]&&++e;return e},empty:function(){var n=this;for(var e in n)if("$"===e[0])return!1;return!0},each:function(n){var e=this;for(var r in e)"$"===r[0]&&n(e[r],r.slice(1),e)}};var p={value:function(){}};t.prototype=r.prototype={constructor:t,on:function(n,e){var r,t=this._,a=o(n+"",t),c=-1,l=a.length;{if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++c<l;)if(r=(n=a[c]).type)t[r]=i(t[r],n.name,e);else if(null==e)for(r in t)t[r]=i(t[r],n.name,null);return this}for(;++c<l;)if((r=(n=a[c]).type)&&(r=u(t[r],n.name)))return r}},copy:function(){var n={},e=this._;for(var r in e)n[r]=e[r].slice();return new t(n)},call:function(n,e){var r=arguments;if((t=arguments.length-2)>0)for(var t,o,u=new Array(t),i=0;i<t;++i)u[i]=r[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(i=0,t=(o=this._[n]).length;i<t;++i)o[i].value.apply(e,u)},apply:function(n,e,r){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],o=0,u=t.length;o<u;++o)t[o].value.apply(e,r)}};var h=function(n,t){function o(n){var e,r=h.status;if(!r&&c(h)||r>=200&&r<300||304===r){if(l)try{e=l.call(u,h)}catch(n){return void f.call("error",u,n)}else e=h;f.call("load",u,e)}else f.call("error",u,n)}var u,i,l,s,f=r("beforesend","progress","load","error"),p=e(),h=new XMLHttpRequest,v=null,d=null,m=0;if("undefined"==typeof XDomainRequest||"withCredentials"in h||!/^(http(s)?:)?\/\//.test(n)||(h=new XDomainRequest),"onload"in h?h.onload=h.onerror=h.ontimeout=o:h.onreadystatechange=function(n){h.readyState>3&&o(n)},h.onprogress=function(n){f.call("progress",u,n)},u={header:function(n,e){return n=(n+"").toLowerCase(),arguments.length<2?p.get(n):(null==e?p.remove(n):p.set(n,e+""),u)},mimeType:function(n){return arguments.length?(i=null==n?null:n+"",u):i},responseType:function(n){return arguments.length?(s=n,u):s},timeout:function(n){return arguments.length?(m=+n,u):m},user:function(n){return arguments.length<1?v:(v=null==n?null:n+"",u)},password:function(n){return arguments.length<1?d:(d=null==n?null:n+"",u)},response:function(n){return l=n,u},get:function(n,e){return u.send("GET",n,e)},post:function(n,e){return u.send("POST",n,e)},send:function(e,r,t){return h.open(e,n,!0,v,d),null==i||p.has("accept")||p.set("accept",i+",*/*"),h.setRequestHeader&&p.each(function(n,e){h.setRequestHeader(e,n)}),null!=i&&h.overrideMimeType&&h.overrideMimeType(i),null!=s&&(h.responseType=s),m>0&&(h.timeout=m),null==t&&"function"==typeof r&&(t=r,r=null),null!=t&&1===t.length&&(t=a(t)),null!=t&&u.on("error",t).on("load",function(n){t(null,n)}),f.call("beforesend",u,h),h.send(null==r?null:r),u},abort:function(){return h.abort(),u},on:function(){var n=f.on.apply(f,arguments);return n===f?u:n}},null!=t){if("function"!=typeof t)throw new Error("invalid callback: "+t);return u.get(t)}return u},v=function(n,e){return function(r,t){var o=h(r).mimeType(n).response(e);if(null!=t){if("function"!=typeof t)throw new Error("invalid callback: "+t);return o.get(t)}return o}};v("text/html",function(n){return document.createRange().createContextualFragment(n.responseText)});var d=v("application/json",function(n){return JSON.parse(n.responseText)});v("text/plain",function(n){return n.responseText}),v("application/xml",function(n){var e=n.responseXML;if(!e)throw new Error("parse error");return e});var m={},y={},g=34,w=10,k=13,b=function(n){function e(n,e){function r(){if(l)return y;if(s)return s=!1,m;var e,r,t=a;if(n.charCodeAt(t)===g){for(;a++<i&&n.charCodeAt(a)!==g||n.charCodeAt(++a)===g;);return(e=a)>=i?l=!0:(r=n.charCodeAt(a++))===w?s=!0:r===k&&(s=!0,n.charCodeAt(a)===w&&++a),n.slice(t+1,e-1).replace(/""/g,'"')}for(;a<i;){if((r=n.charCodeAt(e=a++))===w)s=!0;else if(r===k)s=!0,n.charCodeAt(a)===w&&++a;else if(r!==u)continue;return n.slice(t,e)}return l=!0,n.slice(t,i)}var t,o=[],i=n.length,a=0,c=0,l=i<=0,s=!1;for(n.charCodeAt(i-1)===w&&--i,n.charCodeAt(i-1)===k&&--i;(t=r())!==y;){for(var f=[];t!==m&&t!==y;)f.push(t),t=r();e&&null==(f=e(f,c++))||o.push(f)}return o}function r(e){return e.map(t).join(n)}function t(n){return null==n?"":o.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n\r]"),u=n.charCodeAt(0);return{parse:function(n,r){var t,o,u=e(n,function(n,e){if(t)return t(n,e-1);o=n,t=r?s(n,r):l(n)});return u.columns=o,u},parseRows:e,format:function(e,r){return null==r&&(r=f(e)),[r.map(t).join(n)].concat(e.map(function(e){return r.map(function(n){return t(e[n])}).join(n)})).join("\n")},formatRows:function(n){return n.map(r).join("\n")}}},T=(b(","),b("\t"),function(n){var e,r="";return r+='<div class="schnack-form">\n    <textarea class="schnack-body"></textarea><br>\n    <button class="schnack-button">Send comment</button>\n</div>\n<ul class="schnack-comments">\n    ',n.comments.forEach(function(n){r+='\n        <li class="schnack-comment">\n            <div class="schnack-author">\n                '+(null==(e=n.name)?"":e)+' <span class="schnack-date">'+(null==(e=n.created_at_s)?"":e)+'</span>\n            </div>\n            <blockquote class="schnack-body">\n                <p>'+(null==(e=n.comment)?"":e)+"</p>\n            </blockquote>\n        </li>\n    "}),r+="\n</ul>"});!function(){function n(){d(u,function(r,t){r&&console.error(r),console.log(t),e(i).innerHTML=T(t),e(i+" .schnack-button").addEventListener("click",function(r){var t={comment:e(i+" .schnack-body").value};h(u).mimeType("application/json").header("Content-Type","application/json").post(JSON.stringify(t),function(e,r){e&&console.error(e),console.log(r),n()})})})}var e=function(n){return document.querySelector(n)},r=e("script[data-schnack-target]");if(!r)return console.warn("schnack script tag needs some data attributes");var t=r.dataset,o=t.schnackSlug,u=t.schnackHost+"/comments/"+o,i=t.schnackTarget;n()}()}();
