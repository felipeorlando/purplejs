!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=13)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(o),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var o={},i=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),a=null,s=0,p=[],f=t(4);function l(n,e){for(var t=0;t<n.length;t++){var i=n[t],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(h(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(h(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function c(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function d(n,e){var t=r(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(n.insertAt.before,t);t.insertBefore(e,i)}}function x(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);e>=0&&p.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return u(e,n.attrs),d(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function h(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=r}if(e.singleton){var p=s++;t=a||(a=b(e)),o=g.bind(null,t,p,!1),i=g.bind(null,t,p,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",u(e,n.attrs),d(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){x(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){x(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=c(n,e);return l(t,e),function(n){for(var i=[],r=0;r<t.length;r++){var a=t[r];(s=o[a.id]).refs--,i.push(s)}n&&l(c(n,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete o[s.id]}}}};var m=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function g(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=m(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".label {\n  color: #4a4a4a;\n  font-size: 16px;\n  margin-top: 10px; }\n",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o=t(6);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".input {\n  border-bottom: 2px solid #b5cae3;\n  border-bottom-style: dotted;\n  color: #4a4a4a;\n  font-family: 'Roboto', sans-serif;\n  font-size: 48px;\n  font-weight: 300; }\n  .input__field {\n    border: 0;\n    color: #3393fb;\n    font-weight: 700;\n    margin-left: 10px;\n    text-align: right;\n    width: 112px; }\n",""])},function(n,e,t){var o=t(8);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".range {\n  margin-top: 70px;\n  width: 100%; }\n  .range__body {\n    padding: 0 30px; }\n  .range__slider {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    cursor: pointer;\n    display: block;\n    height: 40px;\n    margin: 0;\n    overflow: hidden;\n    width: 100%; }\n    .range__slider:focus {\n      outline: none; }\n    .range__slider::-webkit-slider-runnable-track {\n      background: linear-gradient(to bottom, #b5cae3, #b5cae3) 100% 50%/100% 8px no-repeat transparent;\n      height: 40px;\n      width: 100%; }\n    .range__slider::-webkit-slider-thumb {\n      -webkit-appearance: none;\n              appearance: none;\n      background: #006ae5;\n      border: 0;\n      border-radius: 100%;\n      box-shadow: -1px 0 0 -6px #278bff, -2px 0 0 -6px #278bff, -3px 0 0 -6px #278bff, -4px 0 0 -6px #278bff, -5px 0 0 -6px #278bff, -6px 0 0 -6px #278bff, -7px 0 0 -6px #278bff, -8px 0 0 -6px #278bff, -9px 0 0 -6px #278bff, -10px 0 0 -6px #278bff, -11px 0 0 -6px #278bff, -12px 0 0 -6px #278bff, -13px 0 0 -6px #278bff, -14px 0 0 -6px #278bff, -15px 0 0 -6px #278bff, -16px 0 0 -6px #278bff, -17px 0 0 -6px #278bff, -18px 0 0 -6px #278bff, -19px 0 0 -6px #278bff, -20px 0 0 -6px #278bff, -21px 0 0 -6px #278bff, -22px 0 0 -6px #278bff, -23px 0 0 -6px #278bff, -24px 0 0 -6px #278bff, -25px 0 0 -6px #278bff, -26px 0 0 -6px #278bff, -27px 0 0 -6px #278bff, -28px 0 0 -6px #278bff, -29px 0 0 -6px #278bff, -30px 0 0 -6px #278bff, -31px 0 0 -6px #278bff, -32px 0 0 -6px #278bff, -33px 0 0 -6px #278bff, -34px 0 0 -6px #278bff, -35px 0 0 -6px #278bff, -36px 0 0 -6px #278bff, -37px 0 0 -6px #278bff, -38px 0 0 -6px #278bff, -39px 0 0 -6px #278bff, -40px 0 0 -6px #278bff, -41px 0 0 -6px #278bff, -42px 0 0 -6px #278bff, -43px 0 0 -6px #278bff, -44px 0 0 -6px #278bff, -45px 0 0 -6px #278bff, -46px 0 0 -6px #278bff, -47px 0 0 -6px #278bff, -48px 0 0 -6px #278bff, -49px 0 0 -6px #278bff, -50px 0 0 -6px #278bff, -51px 0 0 -6px #278bff, -52px 0 0 -6px #278bff, -53px 0 0 -6px #278bff, -54px 0 0 -6px #278bff, -55px 0 0 -6px #278bff, -56px 0 0 -6px #278bff, -57px 0 0 -6px #278bff, -58px 0 0 -6px #278bff, -59px 0 0 -6px #278bff, -60px 0 0 -6px #278bff, -61px 0 0 -6px #278bff, -62px 0 0 -6px #278bff, -63px 0 0 -6px #278bff, -64px 0 0 -6px #278bff, -65px 0 0 -6px #278bff, -66px 0 0 -6px #278bff, -67px 0 0 -6px #278bff, -68px 0 0 -6px #278bff, -69px 0 0 -6px #278bff, -70px 0 0 -6px #278bff, -71px 0 0 -6px #278bff, -72px 0 0 -6px #278bff, -73px 0 0 -6px #278bff, -74px 0 0 -6px #278bff, -75px 0 0 -6px #278bff, -76px 0 0 -6px #278bff, -77px 0 0 -6px #278bff, -78px 0 0 -6px #278bff, -79px 0 0 -6px #278bff, -80px 0 0 -6px #278bff, -81px 0 0 -6px #278bff, -82px 0 0 -6px #278bff, -83px 0 0 -6px #278bff, -84px 0 0 -6px #278bff, -85px 0 0 -6px #278bff, -86px 0 0 -6px #278bff, -87px 0 0 -6px #278bff, -88px 0 0 -6px #278bff, -89px 0 0 -6px #278bff, -90px 0 0 -6px #278bff, -91px 0 0 -6px #278bff, -92px 0 0 -6px #278bff, -93px 0 0 -6px #278bff, -94px 0 0 -6px #278bff, -95px 0 0 -6px #278bff, -96px 0 0 -6px #278bff, -97px 0 0 -6px #278bff, -98px 0 0 -6px #278bff, -99px 0 0 -6px #278bff, -100px 0 0 -6px #278bff, -101px 0 0 -6px #278bff, -102px 0 0 -6px #278bff, -103px 0 0 -6px #278bff, -104px 0 0 -6px #278bff, -105px 0 0 -6px #278bff, -106px 0 0 -6px #278bff, -107px 0 0 -6px #278bff, -108px 0 0 -6px #278bff, -109px 0 0 -6px #278bff, -110px 0 0 -6px #278bff, -111px 0 0 -6px #278bff, -112px 0 0 -6px #278bff, -113px 0 0 -6px #278bff, -114px 0 0 -6px #278bff, -115px 0 0 -6px #278bff, -116px 0 0 -6px #278bff, -117px 0 0 -6px #278bff, -118px 0 0 -6px #278bff, -119px 0 0 -6px #278bff, -120px 0 0 -6px #278bff, -121px 0 0 -6px #278bff, -122px 0 0 -6px #278bff, -123px 0 0 -6px #278bff, -124px 0 0 -6px #278bff, -125px 0 0 -6px #278bff, -126px 0 0 -6px #278bff, -127px 0 0 -6px #278bff, -128px 0 0 -6px #278bff, -129px 0 0 -6px #278bff, -130px 0 0 -6px #278bff, -131px 0 0 -6px #278bff, -132px 0 0 -6px #278bff, -133px 0 0 -6px #278bff, -134px 0 0 -6px #278bff, -135px 0 0 -6px #278bff, -136px 0 0 -6px #278bff, -137px 0 0 -6px #278bff, -138px 0 0 -6px #278bff, -139px 0 0 -6px #278bff, -140px 0 0 -6px #278bff, -141px 0 0 -6px #278bff, -142px 0 0 -6px #278bff, -143px 0 0 -6px #278bff, -144px 0 0 -6px #278bff, -145px 0 0 -6px #278bff, -146px 0 0 -6px #278bff, -147px 0 0 -6px #278bff, -148px 0 0 -6px #278bff, -149px 0 0 -6px #278bff, -150px 0 0 -6px #278bff;\n      height: 20px;\n      margin-top: -10px;\n      position: relative;\n      top: 50%;\n      -webkit-transform: scale(2);\n              transform: scale(2);\n      transition: background-color 150ms;\n      width: 20px; }\n  .range__values {\n    color: #4a4a4a;\n    display: flex;\n    font-size: 14px;\n    justify-content: space-between; }\n  .range__value {\n    text-align: center;\n    width: 60px; }\n",""])},function(n,e,t){var o=t(10);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! sanitize.css v7.0.3 | CC0 License | github.com/csstools/sanitize.css */\n/* Document\n * ========================================================================== */\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add border box sizing in all browsers (opinionated).\n */\n*,\n::before,\n::after {\n  background-repeat: no-repeat;\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */ }\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n::before,\n::after {\n  text-decoration: inherit;\n  /* 1 */\n  vertical-align: inherit;\n  /* 2 */ }\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Use the default user interface font in all browsers (opinionated).\n * 3. Correct the line height in all browsers.\n * 4. Use a 4-space tab width in all browsers (opinionated).\n * 5. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n * 6. Breaks words to prevent overflow in all browsers (opinionated).\n */\nhtml {\n  cursor: default;\n  /* 1 */\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 2 */\n  line-height: 1.15;\n  /* 3 */\n  -moz-tab-size: 4;\n  /* 4 */\n  tab-size: 4;\n  /* 4 */\n  -ms-text-size-adjust: 100%;\n  /* 5 */\n  -webkit-text-size-adjust: 100%;\n  /* 5 */\n  word-break: break-word;\n  /* 6 */ }\n\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n * ========================================================================== */\n/**\n * 1. Add the correct sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\nnav ol,\nnav ul {\n  list-style: none; }\n\n/**\n * 1. Use the default monospace user interface font\n *    in all browsers (opinionated).\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: Menlo, Consolas, Roboto Mono, Ubuntu Monospace, Noto Mono, Oxygen Mono, Liberation Mono, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n * ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Add the correct text decoration in Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Use the default monospace user interface font\n *    in all browsers (opinionated).\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Consolas, Roboto Mono, Ubuntu Monospace, Noto Mono, Oxygen Mono, Liberation Mono, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/*\n * Remove the text shadow on text selections in Firefox 61- (opinionated).\n * 1. Restore the coloring undone by defining the text shadow\n *    in all browsers (opinionated).\n */\n::-moz-selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n::selection {\n  background-color: #b3d4fc;\n  /* 1 */\n  color: #000;\n  /* 1 */\n  text-shadow: none; }\n\n/* Embedded content\n * ========================================================================== */\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\nsvg:not([fill]) {\n  fill: currentColor; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Tabular data\n * ========================================================================== */\n/**\n * Collapse border spacing in all browsers (opinionated).\n */\ntable {\n  border-collapse: collapse; }\n\n/* Forms\n * ========================================================================== */\n/**\n * Inherit styling in all browsers (opinionated).\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\n/**\n * Remove the margin in Safari.\n */\nbutton,\ninput,\nselect {\n  margin: 0; }\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\nbutton {\n  overflow: visible;\n  /* 1 */\n  text-transform: none;\n  /* 2 */ }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * Show the overflow in Edge and IE.\n */\ninput {\n  overflow: visible; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n */\nlegend {\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in Edge and IE.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\nselect {\n  text-transform: none; }\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction on textareas in all browsers (opinionated).\n */\ntextarea {\n  margin: 0;\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  resize: vertical;\n  /* 3 */ }\n\n/**\n * Remove the padding in IE 10-.\n */\n[type="checkbox"],\n[type="radio"] {\n  padding: 0; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/* Interactive\n * ========================================================================== */\n/*\n * Add the correct display in Edge and IE.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct styles in Edge, IE, and Safari.\n */\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content; }\n\ndialog:not([open]) {\n  display: none; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* User interaction\n * ========================================================================== */\n/*\n * 1. Remove the tapping delay in IE 10.\n * 2. Remove the tapping delay on clickable elements\n      in all browsers (opinionated).\n */\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n  /* 1 */\n  touch-action: manipulation;\n  /* 2 */ }\n\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/* Accessibility\n * ========================================================================== */\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n[aria-busy="true"] {\n  cursor: progress; }\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n[aria-controls] {\n  cursor: pointer; }\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n[aria-disabled="true"],\n[disabled] {\n  cursor: not-allowed; }\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n[aria-hidden="false"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  display: inherit;\n  position: absolute; }\n',""])},function(n,e,t){var o=t(12);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"* {\n  box-sizing: border-box; }\n\ninput[type='number'] {\n  -moz-appearance: textfield; }\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none; }\n\n.root {\n  align-items: center;\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  width: 100%; }\n\n.container {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  max-width: 362px;\n  min-height: 580px;\n  width: 100%; }\n  .container__title {\n    border-bottom: 1px solid rgba(181, 202, 227, 0.5);\n    font-family: 'Roboto', sans-serif;\n    font-size: 12px;\n    margin: 0;\n    padding: 21px 0;\n    text-align: center;\n    text-transform: uppercase; }\n  .container__body {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center; }\n",""])},function(n,e,t){"use strict";t.r(e);const o=n=>n instanceof Object?n:(n=>i("TEXT_ELEMENT",{nodeValue:n}))(n);var i=(n,e,...t)=>{return{type:n,props:e,children:(t.length?[].concat(...t):[]).map(o)}},r=n=>n.startsWith("on"),a=(n,e)=>{const t=Object.keys(n.props||{});t.length&&t.forEach(t=>{r(t)?((n,e,t)=>{const o=t.toLowerCase().substring(2);e.addEventListener(o,n.props[t])})(n,e,t):((n,e,t)=>{e[t]=n.props[t]})(n,e,t)})};var s=(n,e,t=null)=>{t&&t.props&&((n,e)=>{Object.keys(e||{}).forEach(e=>{r(e)?((n,e)=>{const t=e.toLowerCase().substring(2),o=n[t];n.removeEventListener(t,o)})(n,e):((n,e)=>{n[e]=null})(n,e)})})(n,t.props),a(e,n)},p=n=>{const{children:e}=n,t=(n=>{const e=(n=>"TEXT_ELEMENT"===n.type)(n)?document.createTextNode(""):document.createElement(n.type);n.children;return a(n,e),e})(n);return s(t,n),{dom:t,element:n,childInstances:((n,e)=>{if(!e)return[];const t=e.map(f);return t.map(n=>n.dom).forEach(e=>n.appendChild(e)),t})(t,e)}},f=n=>(n=>"string"==typeof n||"string"==typeof n.type)(n)?p(n):(n=>{const e={},t=((n,e)=>{const{type:t,props:o}=n,i=new t(o);return i._internalInstance=e,i})(n,e),o=t.render(),i=f(o);return Object.assign(e,{element:n,publicInstance:t,dom:i.dom,childInstances:[i]})})(n),l=(n,e)=>{s(n.dom,e,n.element);const t=((n,e)=>{const{dom:t,childInstances:o}=n,i=e.children||[],r=[],a=Math.max(o.length,i.length);for(let n=0;n<a;n++){const e=o[n],a=i[n],s=c(e,t,a);r.push(s)}return r.filter(n=>null!==n)})(n,e);return Object.assign(n,{element:e,childInstances:t})};const c=(n,e,t)=>null===n?((n,e)=>{const t=f(n);return e.appendChild(t.dom),t})(t,e):null===t?((n,e)=>(n.removeChild(e),null))(e,n.dom):((n,e)=>"string"==typeof n||"string"==typeof e?n!==e:n.type!==e.type)(n.element,t)?((n,e,t)=>{const o=f(n);return e.replaceChild(o.dom,t),o})(t,e,n.dom):(n=>"string"==typeof n||"string"==typeof n.type)(t)?l(n,t):((n,e,t)=>{n.publicInstance.props=e.props||null;const o=n.publicInstance.render(),i=n.childInstances[0],r=c(i,t,o);return Object.assign(n,{dom:r.dom,childInstances:[r],element:e})})(n,t,e);var d=n=>{const e=n.dom.parentNode,t=n.element;c(n,e,t)};class x{render(){}constructor(n={}){this.props=n,this.state=this.state||{}}setState(n){this.state=Object.assign({},this.state,n),this.updateInternalInstance(this._internalInstance)}updateInternalInstance(n){d(n)}}let b=null;const u=(n,e)=>{const t=c(b,e,n);b=t};var h={createElement:i,Component:x,render:u};t(2);class m extends x{constructor(n){super(n)}render(){const{maxLimit:n,definedLimit:e}=this.props;return h.createElement("p",{className:"label"},"R$ ",h.createElement("strong",null,n-e),",00 disponível")}}t(5);class g extends x{render(){const{definedLimit:n,setDefinedLimit:e}=this.props,{inputClass:t}=this.state;return h.createElement("span",{className:"input"},"R$",h.createElement("input",{type:"number",value:n,onChange:e,className:"input__field"}),",00")}}t(7);class v extends x{render(){const{maxLimit:n,definedLimit:e,setDefinedLimit:t}=this.props;return h.createElement("div",{className:"range"},h.createElement("div",{className:"range__body"},h.createElement("input",{type:"range",className:"range__slider",min:"0",max:n,value:e,onChange:t,step:"100"})),h.createElement("div",{className:"range__values"},h.createElement("span",{className:"range__value"},"0"),h.createElement("span",{className:"range__value"},"5000")))}}t(9),t(11);u(i(class extends x{constructor(n){super(n),this.state={definedLimit:2500,maxLimit:5e3},this.setDefinedLimit=this.setDefinedLimit.bind(this)}setDefinedLimit(n){const{maxLimit:e}=this.state,t=parseInt(n.target.value);t>e?this.setState({definedLimit:e}):t<0?this.setState({definedLimit:0}):this.setState({definedLimit:t})}render(){const{maxLimit:n,definedLimit:e}=this.state;return h.createElement("div",{className:"container"},h.createElement("h1",{className:"container__title"},"Ajuste de limite"),h.createElement("div",{className:"container__body"},h.createElement(g,{definedLimit:e,setDefinedLimit:this.setDefinedLimit}),h.createElement(m,{maxLimit:n,definedLimit:e}),h.createElement(v,{maxLimit:n,definedLimit:e,setDefinedLimit:this.setDefinedLimit})))}},null),document.getElementById("root"))}]);