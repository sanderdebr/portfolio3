parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"N8YO":[function(require,module,exports) {
var e=.5,t=0,n=Array.from(document.querySelectorAll(".main__content")),o=document.querySelector(".bottom__num"),a=document.querySelector(".bottom__num.second"),c=new TimelineMax({paused:!0}),r=function(t,n){var o=document.querySelector(".main__content[data-slide='".concat(t,"'"));o.classList.toggle("active");var a=new TimelineMax;return a.fromTo(o,e,{opacity:1,transform:"translateY(0px)"},{opacity:0,zIndex:0,transform:"translateY(".concat(n,"300px)"),ease:Power1.easeInOut}),a},l=function(t,n){o.innerHTML="0".concat(t);var a=document.querySelector(".main__content[data-slide='".concat(t,"'"));a.classList.toggle("active");var c=new TimelineMax;return c.fromTo(a,e,{opacity:0,transform:"translateY(".concat(n,"300px)")},{opacity:1,zIndex:1,transform:"translateY(0px)",ease:Power1.easeInOut}),c},i=function(e){document.querySelector(".scroll__dot[data-slide='".concat(e,"'")).classList.toggle("active")},s=function(e){document.querySelector(".scroll__dot[data-slide='".concat(e,"'")).classList.toggle("active")},u=function(){n.forEach(function(e){e.addEventListener("wheel",d)}),a.innerHTML="0".concat(n.length)},d=function e(t){var o,a,d,m;o=parseInt(document.querySelector(".main__content.active").getAttribute("data-slide")),t.deltaY<0?scrollDirection="up":t.deltaY>0&&(scrollDirection="down");var _=document.querySelectorAll(".main__content").length;"down"===scrollDirection?(a=o!=_?o+1:1,d="-",m="+"):"up"===scrollDirection&&(a=1!=o?o-1:_,d="+",m="-"),c.add(r(o,d)),c.add(l(a,m)),i(a),s(o),c.play(),n.forEach(function(t){t.removeEventListener("wheel",e)}),setTimeout(u,1e3)};u();
},{}]},{},["N8YO"], null)
//# sourceMappingURL=scroll.6ac6be41.js.map