import{l as i,p as U}from"./preact.module.0b8ca6e8.js";var s,u,l,N,h=0,T=[],m=[],E=i.__b,V=i.__r,A=i.diffed,g=i.__c,q=i.unmount;function H(_,t){i.__h&&i.__h(u,_,h||t),h=0;var r=u.__H||(u.__H={__:[],__h:[]});return _>=r.__.length&&r.__.push({__V:m}),r.__[_]}function B(_){return h=1,$(b,_)}function $(_,t,r){var o=H(s++,2);if(o.t=_,!o.__c&&(o.__=[r?r(t):b(void 0,t),function(e){var f=o.__N?o.__N[0]:o.__[0],a=o.t(f,e);f!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=u,!u.u)){u.u=!0;var c=u.shouldComponentUpdate;u.shouldComponentUpdate=function(e,f,a){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(n){return n.__c});if(d.every(function(n){return!n.__N}))return!c||c.call(this,e,f,a);var y=!1;return d.forEach(function(n){if(n.__N){var x=n.__[0];n.__=n.__N,n.__N=void 0,x!==n.__[0]&&(y=!0)}}),!(!y&&o.__c.props===e)&&(!c||c.call(this,e,f,a))}}return o.__N||o.__}function O(_,t){var r=H(s++,3);!i.__s&&C(r.__H,t)&&(r.__=_,r.i=t,u.__H.__h.push(r))}function P(_){return h=5,k(function(){return{current:_}},[])}function k(_,t){var r=H(s++,7);return C(r.__H,t)?(r.__V=_(),r.i=t,r.__h=_,r.__V):r.__}function S(_,t){return h=8,k(function(){return _},t)}function j(){for(var _;_=T.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(v),_.__H.__h.forEach(p),_.__H.__h=[]}catch(t){_.__H.__h=[],i.__e(t,_.__v)}}i.__b=function(_){typeof _.type!="function"||_.__m||_.type===U?_.__m||(_.__m=_.__&&_.__.__m?_.__.__m:""):_.__m=(_.__&&_.__.__m?_.__.__m:"")+(_.__&&_.__.__k?_.__.__k.indexOf(_):0),u=null,E&&E(_)},i.__r=function(_){V&&V(_),s=0;var t=(u=_.__c).__H;t&&(l===u?(t.__h=[],u.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=m,r.__N=r.i=void 0})):(t.__h.forEach(v),t.__h.forEach(p),t.__h=[])),l=u},i.diffed=function(_){A&&A(_);var t=_.__c;t&&t.__H&&(t.__H.__h.length&&(T.push(t)!==1&&N===i.requestAnimationFrame||((N=i.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==m&&(r.__=r.__V),r.i=void 0,r.__V=m})),l=u=null},i.__c=function(_,t){t.some(function(r){try{r.__h.forEach(v),r.__h=r.__h.filter(function(o){return!o.__||p(o)})}catch(o){t.some(function(c){c.__h&&(c.__h=[])}),t=[],i.__e(o,r.__v)}}),g&&g(_,t)},i.unmount=function(_){q&&q(_);var t,r=_.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{v(o)}catch(c){t=c}}),r.__H=void 0,t&&i.__e(t,r.__v))};var F=typeof requestAnimationFrame=="function";function w(_){var t,r=function(){clearTimeout(o),F&&cancelAnimationFrame(t),setTimeout(_)},o=setTimeout(r,100);F&&(t=requestAnimationFrame(r))}function v(_){var t=u,r=_.__c;typeof r=="function"&&(_.__c=void 0,r()),u=t}function p(_){var t=u;_.__c=_.__(),u=t}function C(_,t){return!_||_.length!==t.length||t.some(function(r,o){return r!==_[o]})}function b(_,t){return typeof t=="function"?t(_):t}export{P as A,k as T,S as q,O as s,B as y};